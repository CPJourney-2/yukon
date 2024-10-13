import Plugin from '../Plugin'


export default class Stamps extends Plugin {

    constructor(network) {
        super(network)

        this.events = {
            'stamps_result': this.stampsResult,
            'stamp_earned': this.stampEarned
        }
    }

    stampsResult(args) {
        if(!this.interface.loadedWidgets.Stampbook) return
        
        this.interface.loadedWidgets.Stampbook.onResult(args)
    }

    stampEarned(args) {
        let stampInfo = this.world.stampController.getStamp(args.stamp)
        if(this.world.room) this.interface.prompt.showStamp(stampInfo.name, stampInfo.type, stampInfo.rank)

        if(!this.world.client.stamps.includes(args.stamp)) this.world.client.stamps.push(args.stamp)
    }

}
