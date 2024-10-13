import BaseContainer from '@scenes/base/BaseContainer'

export default class ScavengerWidget extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y);

        this.hints = []

        this.itemString = ""
        this.itemStringPlural = ""

        this.prize = 0
    }

    init() {
        //Runs in the constructor of the child widget
        this.network.send('scavenger_query')
        if(!this._mainview) {
            console.log('this._mainview does not exist.')
        } else {
            this._mainview.visible = false
        }

        if(!this.spinner) {
            console.warn('No spinner sprite detected. Use the prefab from @scenes/interface/menus/load/Spinner')
        } else {
            this.spinner.start()
        }
    }


    onResult(items) {
        if(!this.spinner) {
            console.warn('No spinner sprite detected. Use the prefab from @scenes/interface/menus/load/Spinner')
        } else {
            this.spinner.stop()
        }
        if(!this._mainview) {
            console.warn('this._mainview does not exist.')
        } else {
            this._mainview.visible = true
        }

        this.items = items

        for(let i = 0; i < this.world.scavenger.items; i++) {
            if(items.includes(i)) {
                this[`item${i + 1}`].clearTint()
                this[`item${i + 1}`]._collected = true
            }
        }

        this.onItemHover(1)
        this.hoverFirstUncollectedItem()

        if(!this.prizeBlock) {
            console.warn('this.prizeBlock does not exist.')
        } else {
            this.prizeBlock.visible = !this.world.scavenger.allItemsCollected
        }
        if(this.world.scavenger.allItemsCollected) this.onAllItemsCollected()

        if(!this._collected) {
            console.warn('_collected text does not exist.')
        } else {
            this._collected.text = `You have found ${this.items.length} ${this.items.length == 1 ? this.itemString : this.itemStringPlural}`
        }
    }

    onClaim() {
        if(!this.world.scavenger.allItemsCollected) return

        this.interface.prompt.showItem(this.world.scavenger.prize)
    }

    onItemHover(item) {
        this._hint.text = this.hints[item - 1].toUpperCase()
    }

    hoverFirstUncollectedItem() {
        for(let i = 0; i < this.world.scavenger.items; i++) {
            if(!this[`item${i + 1}`]._collected) return this.onItemHover(i + 1)
        }
    }

    onAllItemsCollected() {
        this.world.client.questComplete(21)
    }
}