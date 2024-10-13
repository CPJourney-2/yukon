import Plugin from '../Plugin'


export default class Igloo extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'add_igloo': this.addIgloo,
            'add_furniture': this.addFurniture,
            'add_location': this.addLocation,
            'add_flooring': this.addFlooring,
            'add_music': this.addMusic,
            'update_flooring': this.updateFlooring,
            'update_location': this.updateLocation,
            'get_igloos': this.getIgloos,
            'get_igloo_open': this.getIglooOpen,
            'get_igloo_likes': this.getIglooLikes,
            'igloo_liked': this.iglooLiked,
            'igloo_open_status': this.handleIglooOpen,
            'igloo_bounds_status': this.handleIglooBounds,
        }
    }

    get client() {
        return this.world.client
    }

    get gridView() {
        return this.interface.iglooEdit.gridView
    }

    addIgloo(args) {
        let inventory = this.client.igloos

        this.client.coins = args.coins
        inventory.push(args.igloo)
        inventory.sort((a, b) => a - b)

        this.interface.refreshPlayerCard()

        if (this.gridView && this.gridView.visible) {
            this.interface.iglooEdit.showGridView(this.interface.iglooEdit.gridView.filter)
        }

        if (this.world.room && this.world.room.isIgloo) {
            this.interface.iglooEdit.setCoins(args.coins)
        }

        let text = `${this.crumbs.igloos[args.igloo].name}\nhas been added to your inventory.`
        this.interface.prompt.showWindow(text, 'single')
    }

    addFurniture(args) {
        let inventory = this.client.furniture

        this.client.coins = args.coins
        inventory[args.furniture] = inventory[args.furniture] + args.amount || args.amount

        this.interface.refreshPlayerCard()

        if (this.gridView && this.gridView.visible) {
            this.interface.iglooEdit.showGridView(this.interface.iglooEdit.gridView.filter)
        }

        if (this.world.room && this.world.room.isIgloo) {
            this.interface.iglooEdit.setCoins(args.coins)
        } else {
            this.interface.updateCatalogCoins(args.coins)
        }

        if(args.vinyl) {
            let strings = {
                12187: 'Rock',
                12188: 'Jazz',
                12189: 'Pop',
                12190: 'EDM'
            }
            let text = `${this.crumbs.furniture[args.furniture].name}\nhas been added to your inventory.\n\nYou have also received some tracks from The Fair as playable music for your igloo.`
            this.world.interface.prompt.showInfo(text)
            return
        }
        let text = `${this.crumbs.furniture[args.furniture].name}\nhas been added to your inventory.`
        this.interface.prompt.showWindow(text, 'single')
    }

    addLocation(args) {
        let inventory = this.client.locations

        this.client.coins = args.coins
        inventory.push(args.location)
        inventory.sort((a, b) => a - b)

        this.interface.refreshPlayerCard()

        if (this.gridView && this.gridView.visible) {
            this.interface.iglooEdit.showGridView(this.interface.iglooEdit.gridView.filter)
        }

        if (this.world.room && this.world.room.isIgloo) {
            this.interface.iglooEdit.setCoins(args.coins)
        } else {
            this.interface.updateCatalogCoins(args.coins)
        }

        let text = `${this.crumbs.locations[args.location].name}\nhas been added to your inventory.`
        this.interface.prompt.showWindow(text, 'single')
    }

    addFlooring(args) {
        let inventory = this.client.flooring

        this.client.coins = args.coins
        inventory.push(args.flooring)
        inventory.sort((a, b) => a - b)

        this.interface.refreshPlayerCard()

        if (this.gridView && this.gridView.visible) {
            this.interface.iglooEdit.showGridView(this.interface.iglooEdit.gridView.filter)
        }

        if (this.world.room && this.world.room.isIgloo) {
            this.interface.iglooEdit.setCoins(args.coins)
        } else {
            this.interface.updateCatalogCoins(args.coins)
        }

        let text = `${this.crumbs.flooring[args.flooring].name}\nhas been added to your inventory.`
        this.interface.prompt.showWindow(text, 'single')
    }

    addMusic(args) {
        let inventory = this.client.music

        this.client.coins = args.coins
        if(Array.isArray(args.music)) {
            inventory.push(...args.music)
        } else {
            inventory.push(args.music)
        }
        inventory.sort((a, b) => a - b)

        this.interface.refreshPlayerCard()

        if (this.world.room && this.world.room.isIgloo) {
            this.interface.iglooEdit.setCoins(args.coins)
        } else {
            this.interface.updateCatalogCoins(args.coins)
        }

        if(args.vinyl) return
        let text = `${this.crumbs.igloo_music[args.music].name}\nhas been added to your inventory.`
        this.interface.prompt.showWindow(text, 'single')
    }

    updateFlooring(args) {
        if (!this.world.room.isIgloo) return

        this.world.room.updateFlooring(args.flooring)
    }

    updateLocation(args) {
        if (!this.world.room.isIgloo) return

        this.world.room.updateLocation(args.location)
    }

    getIgloos(args) {
        if (this.interface.loadedWidgets.Map) {
            this.interface.loadedWidgets.Map.iglooMap.setIgloos(args.igloos, args.myIglooLikes)
        }

        if (this.interface.loadedWidgets.MapNight) {
            this.interface.loadedWidgets.MapNight.iglooMap.setIgloos(args.igloos)
        }
    }

    getIglooOpen(args) {
        if (args.open) {
            this.interface.main.playerCard.buttons.enableButton('igloo')
        }
    }

    getIglooLikes(args) {
        if(this.world.client.rank > 9) return
        else this.interface.main.setIglooLikes(args.likes)
    }

    iglooLiked(args) {
        if(this.world.client.rank > 9) return
        else this.interface.main.setIglooLiked()
    }
    handleIglooOpen(args) {
        if (args) {
            this.world.client.iglooOpen = args.status
        }
    }

    handleIglooBounds(args) {
        if (args) {
            this.world.client.iglooBounds = args.status;
            this.interface.iglooEdit.iglooBounds = args.status === 0;
            this.world.client.iglooBounds = args.status === 0;
        }
    }

}
