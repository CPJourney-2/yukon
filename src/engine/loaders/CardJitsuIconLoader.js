import BaseLoader from "@engine/loaders/BaseLoader";

export default class CardJitsuIconLoader extends BaseLoader {
    constructor(scene) {
        super(scene)
        this.baseURL =  (process.env.NODE_ENV === 'development' || true) ? '/assets/media/games/card/icons/' : CDN_URL + "assets/media/games/card/icons/"
        this.keyPrefix = 'icons/'
    }

    loadIcon(card, iconID, setArt=false) {
        let key = `${this.keyPrefix}${iconID}`

        if (this.checkComplete('image', key, () => {
            this.onFileComplete(card, key, setArt)
        })) {
            return
        }
        
        this.image(key, `${iconID}.png`)
        this.start()
    }

    onFileComplete(card, key, setArt) {
        if(!this.textureExists(key)) {
            return;
        }

        if (setArt) card._setArt(key)
    }
}
