import BaseScene from '@scenes/base/BaseScene'

import Hint from '@scenes/interface/game/hint/Hint'
import MetricsManager from './metrics/MetricsManager'
import PromptController from './prompt/PromptController'


export default class InterfaceController extends BaseScene {

    metricsManager = new MetricsManager()

    create() {
        this.hint = new Hint(this, 0, 0)
        this.add.existing(this.hint)

        this.prompt = new PromptController(this)

        this.widgets = this.crumbs.widgets
        // Dynamically loaded widgets
        this.loadedWidgets = {}
        this.loadedNewspapers = {}

        // Draw frame
        let graphics = this.add.graphics()

        graphics.lineStyle(16, this.crumbs.frameColor, 1)
        graphics.strokeRoundedRect(0, 0, 1520, 960, 15)
        graphics.depth = 100

        this.graphics = graphics

        // Last scene interacted with
        this.lastScene
    }

    get loading() {
        return this.scene.get('Load')
    }

    /**
     * @type {import('@interface/game/main/Main').default}
     */
    get main() {
        return this.scene.get('Main')
    }

    get iglooEdit() {
        return this.scene.get('IglooEdit')
    }

    showLoading(text = '', showBar = false, useSpecialScreen = false) {
        this.hideInterface()

        if (this.scene.isActive('Load')) {
            this.loading.setContent(text, showBar, useSpecialScreen)

        } else if (this.scene.isSleeping('Load')) {
            this.scene.wake('Load', { text: text, showBar: showBar, useSpecialScreen: useSpecialScreen })

        } else {
            this.scene.launch('Load', { text: text, showBar: showBar, useSpecialScreen: useSpecialScreen })
        }

        this.bringToTop('Load')
    }

    showLoadingQueue(text = "") {
        this.hideInterface();

        if (this.scene.isActive("Load")) {
            this.loading.setQueueContent(text);
            this.loading.setQueueScreen();
        } else if (this.scene.isSleeping("Load")) {
            this.scene.wake("Load", {text: text});
            this.loading.setQueueContent(text);
            this.loading.setQueueScreen();
        } else {
            this.scene.launch("Load", {text: text});
            this.loading.setQueueContent(text);
            this.loading.setQueueScreen();
        }

        this.bringToTop("Load");
    }

    showBorder() {
        this.graphics.visible = true
    }

    hideBorder() {
        this.graphics.visible = false
    }

    hideLoading() {
        if (this.loading && this.loading.scene.isActive()) {
            this.loading.hideQueueScreen();
            this.scene.sleep('Load')
        }
    }

    showInterface() {
        this.hideLoading()

        if (this.scene.isSleeping('Main')) {
            this.scene.wake('Main')
            if(this.friendRequestWaiting) {
                this.main.addRequest()
                this.friendRequestWaiting = false
            }

        } else if (!this.scene.isActive('Main')) {
            this.scene.launch('Main')
        }

        this.bringToTop('Main')
    }

    hideInterface(clearChat = true) {
        if (this.main && this.main.scene.isActive()) {
            this.scene.sleep('Main', { clearChat: clearChat })
        }
    }

    setVisibility(v = true) {
        this.main.softSleep(v)
    }

    showIglooEdit() {
        if (this.scene.isSleeping('IglooEdit')) {
            this.scene.wake('IglooEdit')

        } else if (!this.scene.isActive('IglooEdit')) {
            this.scene.launch('IglooEdit')
        }

        this.bringToTop('IglooEdit')
    }

    bringToTop(key = null) {
        if (key) {
            this.scene.bringToTop(key)
        }

        // Keeps InterfaceController scene always on top, for prompts
        this.scene.bringToTop()

        this.input.setDefaultCursor('default')
    }

    hideIglooEdit() {
        if (this.iglooEdit && this.iglooEdit.scene.isActive()) {
            this.scene.sleep('IglooEdit')
        }
    }

    showEmoteBalloon(id, emote, muted=false, modOnly=false) {
        if (emote === 19) { // toot emote
            this.soundManager.playSfx('toot')
        }
        this.main.balloonFactory.showEmoteBalloon(id, emote, muted, modOnly)
    }

    showTextBalloon(id, text, filtered=false, muted=false, modOnly=false, showOnChatLog=true) {
        this.main.balloonFactory.showTextBalloon(id, text, filtered, muted, modOnly, showOnChatLog)
    }

    showTourBalloon(id,muted=false, modOnly=false) {
        if(this.world.room.penguins[id]?.equipped?.head?.id != 428) return;

        let room = this.world.room.key.toLowerCase()

        let partyTours = this.crumbs.tours.party
        let defaultTours = this.crumbs.tours.evergreen

        let tourMessages = defaultTours[room]?.split("|") || ""

        if (this.world.party.partyActive && Object.keys(partyTours).includes(room)) {
            tourMessages = partyTours[room].split("|")
        }

        if (tourMessages != "") {
            for(let [idx, message] of Object.entries(tourMessages)) {
                this.time.addEvent({
                    delay: 3000 * idx,
                    callback: () => {
                        if (this.world.room.key.toLowerCase() != room) {
                            this.world.client.tourCooldown = false
                            return
                        }

                        this.showTextBalloon(id, message, false, muted, modOnly, false)
                        if (idx == tourMessages.length - 1) { this.world.client.tourCooldown = false }
                    },
                    loop: false
                })
            }
        }
    }

    showCard(id, refresh = false) {
        this.main.playerCard.showCard(id, refresh)
    }

    /**
     * Refreshes buddy list and player card to reflect changes from the server.
     */
    updateBuddies() {
        if (this.main.scene.isActive()) {
            this.main.playerCard.updateButtons()
            this.main.buddy.showPage()
            this.main?.checkBuddies()
        }
    }

    refreshPlayerCard() {
        if (this.main.playerCard.visible && this.main.playerCard.id == this.world.client.id) {
            this.showCard(this.world.client.id, true)
        }
    }

    refreshPlayerCardById(id) {
        if (this.main.playerCard.visible && this.main.playerCard.id == id) {
            this.showCard(id, true)
        }
    }

    showWidget(widget, args = undefined) {
        if (widget.widgetLayer) {
            widget.widgetLayer.bringToTop(widget)
        }

        if(!widget._dontHideInputs) this.main.handleHideInputs()
        widget.show(args)
    }

    destroyWidget(widget) {
        //TODO: addEvent = temporary fix (i'm willing to bet this one is staying in cpj forever)
        this.time.addEvent({
            delay: 5,
            callback: () => {
                widget.destroy()

                for (let key in this.loadedWidgets) {
                    if (this.loadedWidgets[key] == widget) {
                        delete this.loadedWidgets[key]
                    }
                }

                for (let key in this.loadedNewspapers) {
                    if (this.loadedNewspapers[key] == widget) {
                        delete this.loadedNewspapers[key]
                    }
                }
                this.main.handleShowInputs()
            },
            loop: false
        })
        
    }

    loadWidget(key, addToWidgetLayer = false, args = undefined) {
        if (!(key in this.widgets)) {
            return
        }

        if(key == 'Newsform') return this.prompt.showError('Please submit content via the latest edition of the newspaper.')

        if (key in this.loadedWidgets) {
            return this.showWidget(this.loadedWidgets[key], args)
        }

        let preload = this.widgets[key].preload

        if(!preload) {
            this.onWidgetLoaded(key, addToWidgetLayer, false, args)
            return
        }
        
        let text = this.getWidgetLoadString(preload.loadString)

        this.prompt.showLoading(text, preload.key, preload.url, () => {
            this.onWidgetLoaded(key, addToWidgetLayer, false, args)
        })
    }

    loadRuffleWidget(key, text, isFullscreen=true) {
        if (!(key in this.crumbs.ruffle_widgets)) {
            return
        }

        text && this.prompt.loadingPromptFactory.showBasicLoading(key, text);
        this.ruffle.bootWidget(key, isFullscreen);
    }

    loadNewspaper(number) {
        if (this.crumbs.newspapers.length <= number) {
            return
        }

        if (number in this.loadedNewspapers) {
            return this.showWidget(this.loadedNewspapers[number])
        }

        let preload = this.crumbs.newspapers[number].scene.preload
        let text = this.getWidgetLoadString(preload.loadString)

        this.prompt.showLoading(text, preload.key, preload.url, () => {
            this.onWidgetLoaded(number, false, true)
        })
    }

    getWidgetLoadString(loadString) {
        if (Array.isArray(loadString)) {
            return this.getString(...loadString)
        } else {
            return this.getString(loadString)
        }
    }

    onWidgetLoaded(key, addToWidgetLayer, isNewspaper = false, args = undefined) {
        this.main.events.emit('show_main_inputs')
        let scene = (addToWidgetLayer) ? this.main : this

        let widget;

        if(isNewspaper) {
            widget = new this.crumbs.newspapers[key].scene.default(scene)
            this.loadedNewspapers[key] = widget 
        } else { 
            widget = new this.widgets[key].default(scene)
            this.loadedWidgets[key] = widget 
        }

        if (addToWidgetLayer) {
            this.main.addToWidgetLayer(widget)
        } else {
            this.add.existing(widget)
            widget.depth = -1
        }

        scene.events.once('update', () => {
            this.showWidget(widget, args)
        })
    }

    updateCatalogCoins(coins) {
        let books = Object.values(this.loadedWidgets).filter(
            widget => widget.isBook
        )

        books.map(book => {
            if (book.coins) {
                book.setCoins(coins)
            }
        })
    }

    updateCatalogGems(gems) {
        let widgets = Object.values(this.loadedWidgets)

        widgets.map(widget => {
            if (widget.gems) {
                widget.setGems(gems)
            }
        })
    }

    updateCatalogSkill(skillPoints) {
        let widgets = Object.values(this.loadedWidgets)

        widgets.map(widget => {
            if (widget.skillPoints) {
                widget.setPoints(skillPoints)
            }
        })
    }

    buddyRequest() {
        if(this.scene.isSleeping('Main')) {
            this.friendRequestWaiting = true
            return
        }
        this.main.addRequest()
    }

    updateBuddyHeadshot(penguin) {
        let buddy
        let types = ['buddies','ignores','buddyRequests']
        for(let i of types) {
            buddy = this.world.client[i].find(obj => obj.id == penguin.id)

            if(buddy) {
                if (!buddy.items) {
                    buddy.items = {};
                }

                if (penguin && typeof penguin === 'object') {
                    Object.assign(buddy.items, penguin);
                    this.updateBuddies()
                }
            }
        }
    }

    resetCursor(scene = this) {
        if (!this.lastScene) {
            this.lastScene = scene
            return
        }

        if (this.lastScene == scene) {
            return
        }

        this.lastScene.input._over[0].map(gameObject => {
            if (gameObject.input && gameObject.input.enabled) {
                gameObject.emit('pointerout')
            }
        })

        let currentlyOver = scene.input._temp[0]

        // Only reset cursor if currently over has no cursor
        if (!currentlyOver || (currentlyOver.input && !currentlyOver.input.cursor)) {
            scene.input.setDefaultCursor('default')
        }

        this.lastScene.input._over[0] = []

        this.lastScene = scene
    }

}
