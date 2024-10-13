import Plugin from '../Plugin'


export default class CardJitsu extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'cj_belt_award': this.loadUI,
        }
    }

    loadUI() {
        this.world.interface.loadWidget("CJBelt")
    }
}
