import BaseLoader from './BaseLoader'


export default class ItemIconLoader extends BaseLoader {

    constructor(scene, container, big = false, mode = 'i') {
        super(scene)

        this.container = container
        this.iconSize = big ? 240 : 120
        this.iconSizeFurniture = big ? 5 : 2.5

        this.baseURL =  null
        //modes: i = clothing, f = furniture
        switch(mode) {
            case 'i':
                this.baseURL =  (process.env.NODE_ENV === 'development' || true) ? `/assets/media/clothing/icon/${this.iconSize}/` : CDN_URL + `assets/media/clothing/icon/${this.iconSize}/`
                this.keyPrefix = `clothing/icon/${this.iconSize}/`
                break
            case 'f':
                this.baseURL =  (process.env.NODE_ENV === 'development' || true) ? `/assets/media/furniture/icon/@${this.iconSizeFurniture}x/` : CDN_URL + `assets/media/furniture/icon/@${this.iconSizeFurniture}x/`
                this.keyPrefix = `furniture/icon/@${this.iconSizeFurniture}x/`
                break
            default: break
        }
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

    startItemLoad(itemId) {
        this.addSpinner()
        this.loadItem(itemId)
    }

    loadItem(itemId) {
        let key = `${this.keyPrefix}${itemId}`

        if (this.checkComplete('image', key, () => {
            this.onFileComplete(key)
        })) {
            return
        }

        this.image(key, `${itemId}.png`)
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

        if (this.container.spinner) {
            this.container.spinner.destroy()
        }

        let icon = this.container.scene.add.image(0, 0, key, frame)
        this.container.add(icon)

        if(this.container.icon) this.container.icon.destroy()
        this.container.icon = icon
    }

}
