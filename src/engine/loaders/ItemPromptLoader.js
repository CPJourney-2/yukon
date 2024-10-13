import BaseLoader from './BaseLoader'


export default class ItemPromptLoader extends BaseLoader {

    constructor(scene, prompt, mode = null) {
        super(scene)

        this.prompt = prompt
		this.mode = mode

        this.config = {
            clothing: {
                baseURL:  (process.env.NODE_ENV === 'development' || true) ? '/assets/media/clothing/icon/240/' : CDN_URL + "assets/media/clothing/icon/240/",
                keyPrefix: 'clothing/icon/240/'
            },
            furniture: {
                baseURL:  (process.env.NODE_ENV === 'development' || true) ? '/assets/media/furniture/icon/@5x/' : CDN_URL + "assets/media/furniture/icon/@5x/",
                keyPrefix: 'furniture/icon/@5x/',
                scale: 0.65
            }
        }
    }

    get baseURL() {
        return this.config[this.prompt.type].baseURL
    }

    get keyPrefix() {
        return this.config[this.prompt.type].keyPrefix
    }

    get scale() {
        return this.config[this.prompt.type].scale || 1
    }

    loadIcon(item) {
        if (this.prompt.icon) {
            this.prompt.icon.destroy()
        }

        if(this.prompt.spinner) {
            this.prompt.spinner.destroy()
        }

        let key = this.getKey(item)

        this.addSpinner();

        if (this.checkComplete('image', key, () => {
            this.onFileComplete(key, item)
        })) {
            return
        }

        this.image(key, `${item}.png`)
        this.start()
    }

    addSpinner() {
        let spinner = this.mode == 'furniture' ? this.scene.add.image(0, -232, 'load', 'spinner') : this.scene.add.image(0, -182, 'load', 'spinner')
        this.prompt.add(spinner)

        this.scene.tweens.add({
            targets: spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        this.prompt.spinner = spinner
    }

    onFileComplete(key, item) {
        if (!this.prompt.visible || !this.textureExists(key) || item != this.prompt.item) {
            return
        }

        if (this.prompt.icon) {
            this.prompt.icon.destroy()
        }

        if (this.prompt.spinner) {
            this.prompt.spinner.destroy()
        }

        let icon = this.mode == 'furniture' ? this.scene.add.image(0, -232, key) : this.scene.add.image(0, -182, key)
        icon.scale = this.scale

        this.prompt.add(icon)
        this.prompt.icon = icon
    }

}