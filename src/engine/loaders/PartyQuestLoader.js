import BaseLoader from './BaseLoader'

export default class PartyQuestLoader extends BaseLoader {

    constructor(scene, mode) {
        super(scene)

        this.baseURL =  null
        this.callbacks = {}

        switch(mode) {
            case 'logo':
                this.baseURL =  (process.env.NODE_ENV === 'development' || true) ? `/assets/media/interface/game/partyquests/logo/` : CDN_URL + `assets/media/interface/game/partyquests/logo/`
                this.keyPrefix = `partyquests/logo/`
                break
            case 'banner':
                this.baseURL =  (process.env.NODE_ENV === 'development' || true) ? `/assets/media/interface/game/partyquests/banner/` : CDN_URL + `assets/media/interface/game/partyquests/banner/`
                this.keyPrefix = `partyquests/banner/`
                break
            default: break
        }
    }

    loadItem(itemId, callback) {
        let key = `${this.keyPrefix}${itemId}`
        this.callbacks[key] = callback

        if (this.checkComplete('image', key, () => {
            this.onFileComplete(key)
        })) {
            return
        }

        this.image(key, `${itemId}.png`)
        this.start()
    }

    onFileComplete(key) {
        this.callbacks[key](key)
        delete this.callbacks[key]
    }

    onLoadError(file) {
        super.onLoadError(file)

        this.callbacks[file.key]('main', 'x-icon')
        delete this.callbacks[file.key]
    }

    addIcon(key, frame = null) {
        this.container.setTexture(key, frame)
    }

}
