import Plugin from '../Plugin'


export default class Postcards extends Plugin {

    constructor(network) {
        super(network)

        this.events = {
            'get_postcards': this.getPostcards,
            'reload_postcards': this.reloadPostcards,
            'receive_postcard': this.receivePostcard,
            'send_postcard': this.sendPostcard
        }
    }

    getPostcards(args) {
        if(!this.interface.loadedWidgets.Mail) return
        
        this.interface.loadedWidgets.Mail.onResult(args)
    }

    reloadPostcards(args) {
        this.network.send('get_postcards')
    }

    receivePostcard(args) {
        this.world.client.unseen_postcards += 1
        this.interface.main.refreshPostcards()
    }

    sendPostcard(args) {
        if(args.coins !== undefined) this.world.client.coins = args.coins

        this.interface.refreshPlayerCard()
        this.interface.updateCatalogCoins(this.world.client.coins)
    }

}
