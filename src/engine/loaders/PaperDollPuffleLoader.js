import BaseLoader from "./BaseLoader";

export default class PaperDollPuffleLoader extends BaseLoader {

    constructor(scene, paperDoll) {
        super(scene);

        this.paperDoll = paperDoll;

        this.scale = 1;

        this.baseURL =  (process.env.NODE_ENV === 'development' || true) ? "/assets/media/puffles/paper/" : CDN_URL + "assets/media/puffles/paper/";
        this.keyPrefix = "puffles_paper/";
    }

    loadPuffle(puffle, del = false) {
        let key = this.getKey(puffle);

        /*let interval = setInterval(() => {
            if (this.textureExists(key)) {
                this.onFileComplete(key, puffle, del)
                clearInterval(interval)
            }
        }, 100);*/
        if (this.checkComplete('image', key, () => {
            this.onFileComplete(key)
        })) {
            return
        }

        this.image(key, `${puffle}.png`);

        this.start();
    }

    onFileComplete(key) {
        if(!this.paperDoll.visible || !this.textureExists(key)) {
            return;
        }

        if(this.paperDoll.puffle){
            this.paperDoll.puffle.destroy();
        }

        this.paperDoll.puffle = this.addPaper(key, 1000);
    }

    addPaper(key, depth, scale = this.scale) {
        let puffle = this.scene.add.image(0, 0, key).setDepth(depth).setScale(scale);

        if(this.paperDoll.fadeIn) {
            this.fadeIn(puffle);
        }

        this.paperDoll.add(puffle);

        if(this.paperDoll.isInputEnabled) {
            this.addInput(puffle);
        }

        this.paperDoll.sort("depth");

        return puffle;
    }

    fadeIn(puffle) {
        puffle.setAlpha(0);

        this.scene.tweens.add({
            targets: puffle,
            alpha: { from: 0, to: 1 },
            duration: 200,
        });

    }

    addInput(puffle) {
        puffle.setInteractive({
            cursor: "pointer",
            pixelPerfect: true,
        });

        puffle.on("pointerdown", () => this.onPuffleClick());
    }

    onPuffleClick() {
        this.network.send('stop_walking')
    }

}