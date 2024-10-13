import BaseLoader from './BaseLoader'


export default class StampbookBackgroundLoader extends BaseLoader {

    constructor(scene, type, backgroundImage, callback = null) {
        super(scene)

        this.backgroundImage = backgroundImage
        this.callback = callback

        this.baseURL =  (process.env.NODE_ENV === 'development' || true) ? `/assets/media/interface/game/stampbook/${type}/` :CDN_URL + `assets/media/interface/game/stampbook/${type}/`
        this.keyPrefix = `stampbook/${type}/`
    }

    startItemLoad(backgroundID) {
        this.backgroundImage.visible = false
        this.loadItem(backgroundID)
    }

    loadItem(backgroundID) {
        this.backgroundImage.itemBeingLoaded = this.itemBeingLoaded = backgroundID
        let key = `${this.keyPrefix}${backgroundID}`

        if (this.checkComplete('image', key, () => {
            this.onFileComplete(key)
        })) {
            return
        }

        this.image(key, `${backgroundID}.png`)
        this.start()
    }

    onFileComplete(key) {
        this.addIcon(key)
    }

    addIcon(key, frame = null) {

        if (!this.textureExists(key)) {
            return
        }

        if (!this.backgroundImage || !this.backgroundImage.scene) {
            return
        }

        if(this.backgroundImage.itemBeingLoaded != this.itemBeingLoaded) {
            return
        }

        this.backgroundImage.setTexture(key, frame)
        this.backgroundImage.visible = true
        if(this.callback) this.callback()
    }

}
