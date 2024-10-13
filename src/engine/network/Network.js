import DataHandler from './DataHandler'
import api from "@engine/network/api"
import io from 'socket.io-client'
import Game from "../../Game"


export default class Network {

    /**
     * 
     * @param {Game} game 
     */
    constructor(game) {
        this.game = game

        this.events = new Phaser.Events.EventEmitter()

        this.handler = new DataHandler(this)
        this.client = null

        this.saveUsername = false
        this.savePassword = false

        this.token = null

        this.secret = null

        // Used to switch back to correct login scene on an error
        this.lastLoginScene = null

        this.lostConnection = false

        this.worldName
        this.worldSafe
    }

    get interface() {
        return this.game.scene.getScene("InterfaceController");
    }

    connectLogin(saveUsername, savePassword, onConnect) {
        this.saveUsername = saveUsername
        this.savePassword = savePassword

        this.connect('Login', () => {
            onConnect()
        }, () => {
            this.disconnect()
        })
    }

    connectGame(world, username, key, isSafe) {
        // Only create token if save password is checked and space is available
        let createToken = this.savePassword && Object.keys(this.savedPenguins).length <= 6
        let response = { username: username, key: key, createToken: createToken }
        
        // If a token exists for the user add the token selector to response,
        // so that the token can be deleted/refreshed by the server
        let token = this.getToken(username)
        
        if (token) {
            response.token = token.split(':')[0]
        }

        this.connect(world, () => {
            if(!this.client.recovered) this.send('game_auth', response)
            this.worldName = world
            this.worldSafe = isSafe

            if(this.client.recovered) console.log("Recovered lost connection")
            
            if(!this.client.recovered && this.lostConnection) {
                this.disconnect()
                this.onConnectionLost()
            }

            if (localStorage.getItem('connectionlost') == 'true') {
                setTimeout(() => {
                    if (this.client.io.engine) {
                      // close the low-level connection and trigger a reconnection
                      this.client.io.engine.close();
                    }
                  }, 3000);
            }

        }, (error) => {
            if(!this.client.active && !this.bypassConnectionLossDialog) {
                this.onConnectionLost(error)
            }

            console.log("Connection lost, reconnecting...", error);
            this.lostConnection = true
        })
    }

    connect(world, onConnect, onDisconnect) {
        this.disconnect()

        let config = this.game.crumbs.worlds[world]

        this.client = io.connect(config.host, { path: config.path, parser: require("socket.io-msgpack-parser"), reconnectionDelayMax: 1000, reconnectionAttempts: 5 })

        this.client.on('connect', onConnect)
        this.client.on('disconnect', onDisconnect)
        this.client.on('connect_error', () => this.onConnectionLost())
        this.client.on('message', (message) => this.onMessage(message))
        this.client.io.on('reconnect_attempt', (attempt) => {
            console.log("Attempting to reconnect")
        });
        /*this.client.io.on('reconnect_failed', () => {
            this.onConnectionLost()
        });
        this.client.io.on('reconnect_error', () => {
            this.onConnectionLost()
        });*/
    }

    disconnect() {
        if (this.client) {
            this.client.disconnect()
        }
    }

    send(action, args = {}) {
        if (process.env.NODE_ENV === 'development' || this?.interface?.world?.client?.rank > 1 && localStorage.getItem('logging') == "true") {
            console.log(`%c[Network] Message sent:`, "color: #ADD8E6", action, args);
        }

        this.client.emit('message', { action: action, args: args })
    }

    // Handlers

    onMessage(message) {
        this.handler.handle(message)
    }

    onConnectionLost(error) {
        this.disconnect()

        this.game.domContainer.style.zIndex = -10

        let errorCode
        switch(error) {
            case 'io server disconnect':
                errorCode = 101
                break
            case 'io client disconnect':
                errorCode = 102
                break
            case 'ping timeout':
                errorCode = 103
                break
            case 'transport close':
                errorCode = 104
                break
            case 'transport error':
                errorCode = 105
                break
            default:
                errorCode = 100
                break
        }

        let prompt = this.game.scene.getScene('InterfaceController').prompt

        if (prompt.error.text._text == "Server is full!") return

        prompt.showError(`Connection was lost.\nPlease click to reload.`, 'Reload', () => {
            location.reload();
        }, `e${errorCode}`)
    }

    register(url, payload) {
        api.post(url, payload)
            .then((res) => {
                if (res.status == 200) {
                    const scene = this.game.scene.getScene("Create");
                    scene.gotoSuccess();
                    scene._networkBusy = false
                } else {
                    this.onRegisterError(res.data.message);
                }
            })
            .catch((err) => {
                this.onRegisterError(err.response?.data.message[0] ?? "An unknown error occurred. Please try again.");
            });
    }

    onRegisterError(message) {
        const scene = this.game.scene.getScene("Create");
        scene.events.emit("hideinput");
        scene._networkBusy = false

        this.interface.prompt.showError(message, "Okay", () => {
            scene.events.emit("showinput");
            this.interface.prompt.error.visible = false;
        });
    }

    registerCheck(url, payload) {
        api.post(url, payload)
            .then((res) => {
                if (res.status == 200) {
                    const scene = this.game.scene.getScene("Create");
                    scene._networkBusy = false
                    scene.gotoPageTwo();
                } else {
                    this.onRegisterCheckError(res.data.message);
                }
            })
            .catch((err) => {
                this.onRegisterCheckError(err.response?.data.message ?? "An unknown error occurred. Please try again.");
            });
    }

    onRegisterCheckError(message) {
        const bubbleMessages = ["Please choose an appropriate username.", "Sorry! That username is already in use."]
        const scene = this.game.scene.getScene("Create");
        scene._networkBusy = false
        if (bubbleMessages.includes(message)) {
            scene.handleBubbleMessage(message)
            return;
        }
        scene.events.emit("hideinput");
        this.interface.prompt.showError(message, "Okay", () => {
            scene.events.emit("showinput");
            this.interface.prompt.error.visible = false;
        });
    }

    // Saved penguins

    get isSavedPenguins() {
        if (localStorage.getItem('saved_penguins')) {
            return true
        } else {
            return false
        }
    }

    get savedPenguins() {
        let savedPenguins = localStorage.getItem('saved_penguins')

        if (!savedPenguins) {
            return {}
        }

        try {
            return JSON.parse(savedPenguins)
        } catch (error) {
            return {}
        }
    }

    getToken(username) {
        let save = this.savedPenguins[username.toLowerCase()]

        if (save && save.token) {
            return save.token
        } else {
            return null
        }
    }

}
