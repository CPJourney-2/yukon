export default class Plugin {

    constructor(network) {
        this.network = network
        this.game = network.game
        this.scene = this.game.scene
    }

    get crumbs() {
        return this.game.crumbs
    }

    /**
     * @type {import('@engine/interface/InterfaceController').default}
     */
    get interface() {
        return this.scene.getScene('InterfaceController')
    }

    /**
     * @type {import('@engine/world/WorldController').default}
     */
    get world() {
        return this.scene.getScene('WorldController')
    }

    getString(...args) {
        return this.world.getString(...args)
    }

    getFormatString(id, ...args) {
        return this.world.getFormatString(id, ...args)
    }

}
