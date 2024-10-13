export default class Scavenger {

    constructor(world) {
        this.world = world

        this.collectedItems = []

        this.items = 3 // Total items for hunt

        this.prize = 0 // Prize to give out when hunt is done

        this.widget = 'MedievalScavenger' // Widget to load for the hunt UI
    }

    get allItemsCollected() {
        return this.collectedItems.length >= this.items
    }

    get complete() {
        return this.world.client.hasItem(this.prize) && this.allItemsCollected
    }

    has(item) {
        return this.collectedItems.includes(item)
    }

    collect(item,gameObj=null) {
        this.world.network.send('scavenger_collect', { item: item })
        if(gameObj) gameObj.visible = false
    }

}
