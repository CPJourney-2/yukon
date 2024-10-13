import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { MoveTo, SimpleButton, ShowHint, Animation } from '@components/components'


/* START OF COMPILED CODE */

export default class Berg extends RoomScene {

    constructor() {
        super("Berg");

        /** @type {Phaser.GameObjects.Sprite} */
        this.aqua;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomAnims = true

        this.roomTriggers = {
            aqua: () => this.triggerGame(916)
        };

        this.music = "297";

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("fair-berg-pack", "assets/media/rooms/_fair/berg/fair-berg-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-18, -18, "fair-berg", "backgroundBerg");
        bg.setOrigin(0, 0);

        // balls_14
        const balls_14 = this.add.image(775, 438, "fair-berg", "balls");

        // balls_15
        const balls_15 = this.add.image(758, 346, "fair-berg", "balls");

        // aqua
        const aqua = this.add.sprite(1269, 332, "berg", "aqua0001");
        aqua.setOrigin(0.49444529894575834, 0.5);

        // wheel
        const wheel = this.add.sprite(1091, 201, "fair-berg", "wheel0001");

        // wheelFrame
        this.add.image(1098, 181, "fair-berg", "wheelFrame");

        // wheelSign
        this.add.image(1098, 122, "fair-berg", "wheelSign");

        // balls_4
        const balls_4 = this.add.image(831, 638, "fair-berg", "balls");
        balls_4.flipX = true;

        // balls_2
        const balls_2 = this.add.image(552, 676, "fair-berg", "balls");
        balls_2.flipX = true;

        // balls_6
        const balls_6 = this.add.image(840, 694, "fair-berg", "balls");
        balls_6.flipX = true;

        // balls_7
        const balls_7 = this.add.image(817, 771, "fair-berg", "balls");

        // balls
        const balls = this.add.image(296, 707, "fair-berg", "balls");

        // balls_1
        const balls_1 = this.add.image(511, 767, "fair-berg", "balls");
        balls_1.flipX = true;

        // balls_8
        const balls_8 = this.add.image(1094, 602, "fair-berg", "balls");
        balls_8.flipX = true;

        // balls_9
        const balls_9 = this.add.image(1161, 684, "fair-berg", "balls");

        // balls_13
        const balls_13 = this.add.image(930, 394, "fair-berg", "balls");
        balls_13.flipX = true;

        // balls_10
        const balls_10 = this.add.image(1030, 527, "fair-berg", "balls");

        // balls_12
        const balls_12 = this.add.image(1000, 486, "fair-berg", "balls");
        balls_12.flipX = true;

        // slide
        this.add.image(458, 341, "fair-berg", "slide");

        // slideFG
        const slideFG = this.add.image(479, 524.5827624137471, "fair-berg", "slideFG");
        slideFG.setOrigin(0.5, 1.0002206997699923);

        // foreground
        const foreground = this.add.image(718, 936.7374704616996, "fair-berg", "foreground");
        foreground.setOrigin(0.5, 0.9966242525713892);

        // balls_3
        const balls_3 = this.add.image(337, 616, "fair-berg", "balls");

        // balls_5
        const balls_5 = this.add.image(616, 578, "fair-berg", "balls");

        // balls_11
        const balls_11 = this.add.image(734, 516, "fair-berg", "balls");
        balls_11.flipX = true;

        // lists
        const sort = [foreground, slideFG, balls_11, balls_5, balls_3, balls_12, balls_10, balls_13, balls_9, balls_8, balls_1, balls, balls_7, balls_6, balls_2, balls_4, balls_15, balls_14];

        // aqua (components)
        const aquaSimpleButton = new SimpleButton(aqua);
        aquaSimpleButton.hoverCallback = () => this.onAquaOver();
        aquaSimpleButton.callback = () => this.onAquaClick();
        aquaSimpleButton.pixelPerfect = true;
        new MoveTo(aqua);
        const aquaShowHint = new ShowHint(aqua);
        aquaShowHint.text = "sub_hint";

        // wheel (components)
        const wheelAnimation = new Animation(wheel);
        wheelAnimation.key = "wheel";
        wheelAnimation.end = 91;

        this.aqua = aqua;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    get aquaFrame() {
        let frame = this.aqua.frame.name
        return parseInt(frame.substr(frame.length - 4))
    }

    create() {
        super.create()

        this.aqua.on('animationcomplete', (animation) => this.onAquaAnimComplete(animation))
        this.aqua.play('aqua_float')
    }

    onAquaAnimComplete(animation) {
        switch (animation.key) {
            case 'aqua_lights_on':
                this.aqua.play('aqua_lights_float')
                break
            case 'aqua_open':
                this.aqua.play('aqua_float')
                break
            default:
                break
        }
    }

    onAquaOver() {
        let frame = this.aquaFrame
        if (frame <= 81 || frame >= 400) {
            this.aqua.play('aqua_lights_on')
        }
    }

    onAquaClick() {
        let frame = this.aquaFrame
        if (frame <= 180 || frame >= 348) {
            this.aqua.play('aqua_open')
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
