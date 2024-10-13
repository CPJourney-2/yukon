import BaseLoader from './BaseLoader'


export default class StampbookLoader extends BaseLoader {

    constructor(scene, container) {
        super(scene)

        this.container = container

        this.baseURL =  (process.env.NODE_ENV === 'development' || true) ? '/assets/media/interface/game/stampbook/stamps/' : CDN_URL + 'assets/media/interface/game/stampbook/stamps/'
        this.keyPrefix = 'stampbook/stamps/'
    }

    addSpinner() {
        let spinner = this.scene.add.image(0, 0, 'main', 'spinner')
        this.container.add(spinner)

        this.scene.tweens.add({
            targets: spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        this.container.spinner = spinner
    }

    startItemLoad(stampID) {
        this.addSpinner()
        this.loadItem(stampID)
    }

    loadItem(stampID) {
        this.container.itemBeingLoaded = this.itemBeingLoaded = stampID
        let key = `${this.keyPrefix}${stampID}`

        if (this.checkComplete('image', key, () => {
            this.onFileComplete(key)
        })) {
            return
        }

        this.image(key, `${stampID}.png`)
        this.start()
    }

    onFileComplete(key) {
        this.addIcon(key)
    }

    onLoadError(file) {
        super.onLoadError()
        
        this.addIcon('main', 'x-icon')
    }

    addIcon(key, frame = null) {
        if (!this.textureExists(key)) {
            return
        }

        if (!this.container) {
            return
        }

        if(this.container.itemBeingLoaded != this.itemBeingLoaded) {
            return
        }

        if (this.container.spinner) {
            this.container.spinner.destroy()
        }

        let icon = this.container.scene.add.image(0, 0, key, frame)
        this.container.add(icon)

        if(this.container.item) this.container.item.destroy()
        this.container.item = icon

        this.container.updateCollected()
    }

}
