import BaseScene from '@scenes/base/BaseScene'


export default class GameScene extends BaseScene {

    constructor(key) {
        super(key)

        this.key = key
    }

    get client() {
        return this.world.client
    }

    getColor(color) {
        return this.world.getColor(color)
    }

    init(data) {
        this.id = data.id

        super.init()
    }

    create() {   
        this._create()

        this.setMusic()

        this.interface.hideLoading()
        this.interface.bringToTop()

        this.world.client.activeSeat = null
    }

    preload() {
        this._preload()
    }

    stop() {
        this.soundManager.stopAllButMusic()
        this.scene.stop()
    }

    /*========== Animations ==========*/

    /**
     * Loads complex animations from JSON room anims file,
     * simpler animations should use the Animation component instead.
     * To trigger this add a roomAnims get property to the room, and
     * set it to return true.
     */
    addAnims() {
        let key = this.key.toLowerCase()
        let anims = this.cache.json.get(`${key}-anims`)

        this.anims.fromJSON(anims)
    }

}
