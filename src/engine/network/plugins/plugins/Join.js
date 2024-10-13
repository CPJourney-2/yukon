import Plugin from '../Plugin';

export default class Join extends Plugin {
    constructor(network) {
        super(network);

        this.events = {
            load_player: this.loadPlayer,
            join_room: this.joinRoom,
            join_igloo: this.joinIgloo,
            join_game_room: this.joinGameRoom,
            add_player: this.addPlayer,
            remove_player: this.removePlayer,
            clear_halloween_sky: this.clearHalloweenSky,
            update_player_inv: this.updatePlayer,
        };
    }

    updatePlayer(args) {
        this.world.client.inventory = args.inventory;
        this.world.client.coins = args.coins;
    }

    loadPlayer(args) {
        if (this.network.saveUsername) {
            this.savePlayer(args);
        } else {
            this.unsavePlayer(args);
        }

        this.scene.start('WorldController');
        this.world.setClient(args);
        this.world.scavenger.collectedItems = args.scavenger_items
    }

    joinRoom(args) {
        //console.log("Joining room", this.crumbs.scenes.rooms[args.room].key.toLowerCase())
        this.interface.showLoading(
            this.getString('loading', this.crumbs.scenes.rooms[args.room].key),
            true,
            this.crumbs.scenes.rooms[args.room].key.toLowerCase().startsWith("partytower") || this.crumbs.scenes.rooms[args.room].key.toLowerCase().startsWith("infinite tower")
        );
        this.world.joinRoom(args);

        //this.network.send('get_tickets');
    }

    clearHalloweenSky(args) {
        return
        //this ONLY exists to prevent the sky intervals from breaking when getting around via !jr
        /*if(!this.world.room) return
        if (this.world.room.halloweenLightning && this.world.room.halloweenSky) {
            this.world.room.halloweenLightning.clearTimers()
            this.world.room.halloweenSky.clearTimers()
        }*/
    }

    joinIgloo(args) {
        this.interface.showLoading(this.getString('loading', 'igloo'), true);
        this.world.joinRoom(args);
        if (this.world.interface.iglooEdit.filterInvInput) {
            this.world.interface.iglooEdit.filterInvInput.resize(0, 0);
        }

        //this.network.send('get_tickets');
    }

    joinGameRoom(args) {
        this.interface.showLoading(
            this.getString('loading', this.crumbs.games[args.game].key)
        );
        this.world.joinRoom(args);
    }

    addPlayer(args) {
        this.world.addPenguin(args.user,args.invisible);
    }

    removePlayer(args) {
        this.world.removePenguin(args.user);
    }

    // Saves a player to local storage
    savePlayer(args) {
        let savedPenguins = this.network.savedPenguins;

        if (
            Object.keys(savedPenguins).length > 6 &&
            !(args.user.username in savedPenguins)
        )
            return;

        let { photo, flag, x, y, frame, coins, id, ...penguin } = args.user;

        // Set auth token
        if (this.network.token) {
            penguin.token = this.network.token;
        }

        savedPenguins[args.user.username.toLowerCase()] = penguin;
        localStorage.setItem('saved_penguins', JSON.stringify(savedPenguins));
    }

    // Deletes a player from local storage
    unsavePlayer(args) {
        let savedPenguins = this.network.savedPenguins;

        if (args.user.username.toLowerCase() in savedPenguins) {
            delete savedPenguins[args.user.username.toLowerCase()];
            localStorage.setItem(
                'saved_penguins',
                JSON.stringify(savedPenguins)
            );
        }
    }
}
