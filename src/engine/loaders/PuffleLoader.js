import BaseLoader from "@engine/loaders/BaseLoader";

export default class PuffleLoader extends BaseLoader {
    constructor(penguin, puffleObject) {
        super(penguin.room)
        this.penguin = penguin;
        this.puffleObject = {...puffleObject};
        this.baseURL =  (process.env.NODE_ENV === 'development') ? '/assets/media/puffles/sprites/' : CDN_URL + "assets/media/puffles/sprites/"
        this.keyPrefix = 'puffles_'
    }

    loadPuffle(penguin, puffle_color) {
        let key = this.getKey(puffle_color);

        if(!this.textureExists(key)) {
            this.multiatlas(key, `${puffle_color}.json`)
        }

        if (this.checkComplete('json', key, () => {
            this.onFileComplete(key, puffle_color, penguin)
        })) {
            return
        }

        this.start();
    }

    onFileComplete(key, puffle_color, penguin) {
        if(!this.textureExists(key)) {
            return;
        }

        this.penguin.penguinLoader.loadPuffle(penguin, this.puffleObject, puffle_color)
    }
}