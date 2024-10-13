import Plugin from '../Plugin'

export default class Item extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'voyager_preview': this.setPreviewItems,
            'voyager_items': this.setRolledItems,
            'voyager_reroll': this.setRerolledItem,
            'voyager_packs': this.setGemPacks,
            'voyager_buy_pack': this.buyPack
        };
    }

    get client() {
        return this.world.client
    }

    setPreviewItems(args) {
        Object.values(this.interface.loadedWidgets)
            .map(widget => widget.setVoyagerPreview?.(args.items));
    }

    setRolledItems(args) {
        Object.values(this.interface.loadedWidgets)
            .map(widget => widget.setVoyagerItems?.(args.items, args.rerolls));
    }

    setRerolledItem(args) {
        Object.values(this.interface.loadedWidgets)
            .map(widget => widget.setRerolledItem?.(args.rerolledItem, args.replacedItem, args.rerolls));
    }

    setGemPacks(args) {
        Object.values(this.interface.loadedWidgets)
            .map(widget => widget.setGemPacks?.(args.gemPacks));
    }

    buyPack(args) {
        this.client.coins = args.coins
    }

}
