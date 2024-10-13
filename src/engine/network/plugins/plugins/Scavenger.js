import Plugin from '../Plugin'


export default class Scavenger extends Plugin {

    constructor(network) {
        super(network)

        this.events = {
            'scavenger_result': this.scavengerResult
        }
    }

    scavengerResult(args) {
        this.world.scavenger.collectedItems = args.items
        this.interface.loadWidget(this.world.scavenger.widget)

        this.interface.loadedWidgets[this.world.scavenger.widget]?.onResult(args.items) 
    }

}
