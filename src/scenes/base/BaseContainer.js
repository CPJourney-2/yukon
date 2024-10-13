export default class BaseContainer extends Phaser.GameObjects.Container {

    /**
     * @type {object}
     */
    get crumbs() {
        return this.scene.crumbs
    }

    /**
     * @type {import('@engine/network/Network').default}
     */
    get network() {
        return this.scene.network
    }

    /**
     * @type {import('@engine/sound/SoundManager').default}
     */
    get soundManager() {
        return this.scene.soundManager
    }

    /**
     * @type {import("@engine/interface/InterfaceController").default}
     */
    get interface() {
        return this.scene.interface
    }

    /**
     * @type {import("@engine/world/WorldController").default}
     */
    get world() {
        return this.scene.world
    }

    /**
     * @type {import("@engine/ruffle/RuffleController").default}
     */
    get ruffle() {
        return this.scene.ruffle
    }

    getString(...args) {
        return this.scene.getString(...args)
    }

    getFormatString(id, ...args) {
        return this.scene.getFormatString(id, ...args)
    }

    showMainInputs() {
        this.interface.main.events.emit('show_main_inputs')
    }

    hideMainInputs() {
        this.interface.main.events.emit('hide_main_inputs')
    }

    show() {
        this.visible = true
        if(!this._dontHideInputs) this.hideMainInputs()
    }

    close() {
        this.visible = false
        this.showMainInputs()
    }

}
