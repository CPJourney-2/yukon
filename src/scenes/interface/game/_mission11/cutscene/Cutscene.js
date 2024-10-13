import BaseContainer from '@scenes/base/BaseContainer'

import { Interactive } from '@components/components'

import Spinner from '@scenes/interface/menus/load/Spinner'

/* START OF COMPILED CODE */

export default class Cutscene extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Spinner} */
        this.spinner;
        /** @type {Phaser.GameObjects.Container} */
        this.videoContainer;


        // block
        const block = scene.add.rectangle(-12, 10, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.isFilled = true;
        block.fillColor = 1973790;
        block.strokeColor = 0;
        this.add(block);

        // spinner
        const spinner = new Spinner(scene, 0, 0);
        this.add(spinner);

        // videoContainer
        const videoContainer = scene.add.container(0, 0);
        this.add(videoContainer);

        // block (components)
        new Interactive(block);

        this.spinner = spinner;
        this.videoContainer = videoContainer;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(cutscene) {
        super.show()

        let video = this.scene.add.video(0.5, 0.5).loadURL(`assets/media/interface/game/_mission11/cutscenes/cutscene${cutscene.which}.mp4`, false, "anonymous")
        video.setOrigin(0.5,0.5)
        this.videoContainer.add(video)
        video.play(false);

        video.on('play', () => this.spinner.stop())

        video.on('complete', () => {
            this.close()
            this.spinner.stop()
            cutscene.onComplete()
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */