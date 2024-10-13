import BaseLoader from './BaseLoader'


export default class PostcardIconLoader extends BaseLoader {

    constructor(scene, type, backgroundImage, callback = null) {
        super(scene)

        this.backgroundImage = backgroundImage
        this.callback = callback

        this.baseURL =  (process.env.NODE_ENV === 'development' || true) ? `/assets/media/postcards/icon/` :CDN_URL + `assets/media/postcards/icon/`
        this.keyPrefix = `postcardIcon/${type}/`
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
