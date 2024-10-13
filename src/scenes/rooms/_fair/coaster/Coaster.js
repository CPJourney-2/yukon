import RoomScene from '@rooms/RoomScene'

import { SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Coaster extends RoomScene {

    constructor() {
        super("Party12");

        /** @type {Phaser.GameObjects.Rectangle} */
        this.penguin_color_block;


        /* START-USER-CTR-CODE */

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        // penguin_color_block
        const penguin_color_block = this.add.rectangle(0, 0, 1520, 960);
        penguin_color_block.setOrigin(0, 0);
        penguin_color_block.isFilled = true;
        penguin_color_block.fillColor = 12098202;

        // penguin_color_block (components)
        const penguin_color_blockSimpleButton = new SimpleButton(penguin_color_block);
        penguin_color_blockSimpleButton.useHandCursor = false;

        this.penguin_color_block = penguin_color_block;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    _preload() {
        // The room has nothing to preload, but it needs defined anyway so it doesnt crash
    }

    create() {
        super.create()

        this.penguin_color_block.fillColor = 0x333333
        this.penguin_color_block.depth = 5000

        let coasterVideo = this.add.video(0, 0).loadURL(`assets/media/rooms/_fair/coaster/video.webm`, true, "anonymous");
        coasterVideo.setOrigin(0);
        coasterVideo.depth = 5001

        coasterVideo.once('play', () => {
            this.penguin_color_block.fillColor = this.world.getColor(this.client.penguin.color)
        })

        coasterVideo.play(true)

        coasterVideo.on('loop', () => this.client.questComplete(71))

        this.events.on('update', () => {
            coasterVideo.setMute(this.soundManager.muteMusic)
            coasterVideo.setVolume(this.soundManager.getRealMusicVolume())
        })
    }

    onPenguinUpdate(id) {
        if (id == this.client.id) {
            this.penguin_color_block.fillColor = this.world.getColor(this.client.penguin.color)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
