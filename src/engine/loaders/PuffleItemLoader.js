import BaseLoader from "./BaseLoader";

export default class PuffleItemLoader extends BaseLoader {

    constructor(scene, prompt) {
        super(scene);

        this.prompt = prompt;

        this.baseURL = (process.env.NODE_ENV === "development") ? "/assets/media/puffles/items/" : CDN_URL + "assets/media/puffles/items/";
        this.keyPrefix = "puffle/item/";
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
        let spinner = this.scene.add.image(0, -182, 'load', 'spinner')
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
        
        let icon = this.scene.add.image(0, -182, key)

        this.prompt.add(icon)
        this.prompt.icon = icon
    }

}