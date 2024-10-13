
export default class BaseScene extends Phaser.Scene {

    /**
     * @type {import('../../Game').default}
     */
    game;

    init() {
        this.input.on('pointerover', () => this.interface.resetCursor(this))
    }

    get crumbs() {
        return this.game.crumbs
    }

    get network() {
        return this.game.network
    }

    get soundManager() {
        return this.game.soundManager
    }

    /**
     * @type {import("@engine/interface/InterfaceController").default}
     */
    get interface() {
        return this.scene.get('InterfaceController')
    }

    /**
     * @type {import("@engine/world/WorldController").default}
     */
    get world() {
        return this.scene.get('WorldController')
    }

    /**
     * @type {import("@engine/ruffle/RuffleController").default}
     */
    get ruffle() {
        return this.scene.get('RuffleController')
    }

    getString(...args) {
        return args.map(id => this.crumbs.strings[id.toLowerCase()] || id).join(' ')
    }

    getFormatString(id, ...args) {
        return Phaser.Utils.String.Format(this.crumbs.strings[id.toLowerCase()], args)
    }

    setMusic() {
        if(this.mainLoops) {
            this.playLoopedMusic(this.preLoop, this.mainLoops)
        } else if(this.layeredMusic) {
            this.playLayeredMusic(this.layeredMusic)
        } else if (this.music) {
            this.playMusic(this.music)
        } else {
            this.stopMusic()
        }
    }

    playLoopedMusic(preLoop, mainLoops) {
        this.soundManager.playLoopedMusic(preLoop, mainLoops)
    }

    playLayeredMusic(key) {
        this.soundManager.playLayeredMusic(key)
    }

    changeLayerMute(layer, state) {
        this.soundManager.changeLayerMute(layer, state)
    }

    changeLayerMutes(layers) {
        this.soundManager.changeLayerMutes(layers)
    }

    rewindLayers() {
        this.soundManager.rewindLayers()
    }

    playMusic(key) {
        this.soundManager.playMusic(key)
    }

    stopMusic() {
        this.soundManager.stopMusic()
    }

    stampEarned(stamp,flash = false) {
        this.world.client.stampEarned(stamp,flash)
    }

    showItem(item) {
        this.interface.prompt.showItem(item)
    }

    loadWidget(widget) {
        this.interface.loadWidget(widget)
    }

}
