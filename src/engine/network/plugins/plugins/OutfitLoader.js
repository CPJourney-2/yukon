import Plugin from '../Plugin'


export default class Chat extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'slot': this.slotLoad,
        }
    }

    slotLoad(args) {
        for (let slot in this.interface.main.playerCard.outfitsaver_1.slots) {
            slot = this.interface.main.playerCard.outfitsaver_1.slots[slot]
            slot.paperDoll.visible = false
            slot.paperDoll.loadDoll({head:0, face:0, neck:0, body:0, hand:0, feet:0, photo:0, color:1, flag:0})
        }

        for (let slotData in args) {
            slotData = parseInt(slotData)

            let slot = this.interface.main.playerCard.outfitsaver_1.slots[(args[slotData].slot)-1]
            if (slot == null) {
                continue
            }

            slot.paperDoll.visible = true
            slot.paperDoll.loadDoll(args[slotData])
        }
    }

}
