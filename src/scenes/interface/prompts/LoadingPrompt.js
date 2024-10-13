import BaseContainer from '@scenes/base/BaseContainer'

import { Animation, Button, Interactive, NineSlice } from '@components/components'

import PackFileLoader from '@engine/loaders/PackFileLoader'


/* START OF COMPILED CODE */

export default class LoadingPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.progress;
        /** @type {Phaser.GameObjects.Container} */
        this.bar;
        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {Phaser.GameObjects.Image} */
        this.spinner;


        this.visible = false;

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.nineslice(0, -40, "prompt", "window", 528, 275, 44, 39, 40, 41);
        this.add(bg);

        // blueButton
        const blueButton = scene.add.image(207, -125, "main", "blue-button");
        this.add(blueButton);

        // blueX
        const blueX = scene.add.image(207, -127, "main", "blue-x");
        this.add(blueX);

        // bar
        const bar = scene.add.container(0, 11);
        this.add(bar);

        // outline
        const outline = scene.add.rectangle(-4, -15, 200, 40);
        outline.isStroked = true;
        outline.strokeColor = 26265;
        outline.lineWidth = 4;
        bar.add(outline);

        // progress
        const progress = scene.add.rectangle(-94, -15, 180, 20);
        progress.scaleX = 0;
        progress.setOrigin(0, 0.5);
        progress.isFilled = true;
        bar.add(progress);

        // text
        const text = scene.add.text(-3, 8, "", {});
        text.setOrigin(0.5, 0);
        text.visible = false;
        text.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "28px" });
        this.add(text);

        // spinner
        const spinner = scene.add.image(-3, -66, "load", "spinner");
        spinner.scaleX = 0.7;
        spinner.scaleY = 0.7;
        this.add(spinner);

        // block (components)
        new Interactive(block);

        // blueButton (components)
        const blueButtonButton = new Button(blueButton);
        blueButtonButton.spriteName = "blue-button";
        blueButtonButton.callback = () => this.close();
        blueButtonButton.activeFrame = true;

        this.bg = bg;
        this.progress = progress;
        this.bar = bar;
        this.text = text;
        this.spinner = spinner;
        this.outline = outline;

        /* START-USER-CTR-CODE */

        this.scene = scene

        this.tween = scene.tweens.add({
            targets: this.spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        this.packFileLoader = new PackFileLoader(scene)

        this.bar.visible = progress

        this.packFileLoader.on('progress', this.onProgress, this)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onProgress(progress) {
        this.bar.visible = progress

        this.progress.scaleX = progress
    }

    show(text, key, url, callback) {
        this.text.text = text
        this.progress.scaleX = this.packFileLoader.progress

        this.visible = true
        this.interface.main.events.emit('hide_main_inputs')

        if(!key) {
            this.outline.visible = false
            this.bar.visible = false
            return
        }
        
        if(key.constructor === Array && url.constructor === Array) {
            //Load multiple packs
            let packsLoaded = 0
            for(let i = 0; i < key.length; i++) {
                this.packFileLoader.loadPack(key[i], url[i], () => {
                    packsLoaded++
                    if(packsLoaded >= key.length) callback()
                })
            }
        } else {
            this.packFileLoader.loadPack(key, url, callback)
        }
    }

    checkComplete() {

    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
