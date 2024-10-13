
// You can write more code here

import RoomScene from '@rooms/RoomScene';
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, SimpleButton, ShowHint } from '@components/components'

/* START OF COMPILED CODE */

export default class BoxDimension extends RoomScene {

    constructor() {
        super("BoxDimension");

        /** @type {Phaser.GameObjects.Container} */
        this.clouds;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plok;
        /** @type {Phaser.GameObjects.Container[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'map': () => this.interface.loadWidget('Map')
        }      
        this.music = 264;
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("boxdimension-pack", "assets/media/rooms/boxdimension/boxdimension-pack.json");
    }

    /** @returns {void} */
    _create() {

        // reference
        const reference = this.add.image(760, 480, "reference");
        reference.visible = false;

        // purplesky
        this.add.image(775, 499, "boxdimension", "purplesky");

        // clouds
        const clouds = this.add.container(-609, 174);

        // cloud1
        const cloud1 = this.add.image(397, 14, "boxdimension", "cloud1");
        clouds.add(cloud1);

        // cloud2
        const cloud2 = this.add.image(800, 1, "boxdimension", "cloud2");
        clouds.add(cloud2);

        // cloud
        const cloud = this.add.image(0, 0, "boxdimension", "cloud2");
        clouds.add(cloud);

        // cloud_1
        const cloud_1 = this.add.image(1200, 14, "boxdimension", "cloud1");
        clouds.add(cloud_1);

        // purplesky_1
        const purplesky_1 = this.add.image(1389, 497, "boxdimension", "purplesky");
        purplesky_1.scaleX = 0.17594878427795768;

        // purpleskyAbove
        this.add.image(760, 468, "boxdimension", "purpleskyAbove");

        // bgboxes
        const bgboxes = this.add.container(-15, 18);

        // bgboxes_t0001
        const bgboxes_t0001 = this.add.sprite(390, 150, "boxdimension", "bgboxes/t0001");
        bgboxes.add(bgboxes_t0001);

        // bgboxes_s0001
        const bgboxes_s0001 = this.add.sprite(80, 178, "boxdimension", "bgboxes/s0001");
        bgboxes.add(bgboxes_s0001);

        // bgboxes_r0001
        const bgboxes_r0001 = this.add.sprite(106, 137, "boxdimension", "bgboxes/r0001");
        bgboxes.add(bgboxes_r0001);

        // bgboxes_q0001
        const bgboxes_q0001 = this.add.sprite(54, 467, "boxdimension", "bgboxes/q0001");
        bgboxes.add(bgboxes_q0001);

        // bgboxes_p0001
        const bgboxes_p0001 = this.add.sprite(90, 554, "boxdimension", "bgboxes/p0001");
        bgboxes.add(bgboxes_p0001);

        // bgboxes_o0001
        const bgboxes_o0001 = this.add.sprite(104, 496, "boxdimension", "bgboxes/o0001");
        bgboxes.add(bgboxes_o0001);

        // bgboxes_n0001
        const bgboxes_n0001 = this.add.sprite(184, 490, "boxdimension", "bgboxes/n0001");
        bgboxes.add(bgboxes_n0001);

        // bgboxes_m0001
        const bgboxes_m0001 = this.add.sprite(281, 347, "boxdimension", "bgboxes/m0001");
        bgboxes.add(bgboxes_m0001);

        // bgboxes_l0001
        const bgboxes_l0001 = this.add.sprite(11, 419, "boxdimension", "bgboxes/l0001");
        bgboxes.add(bgboxes_l0001);

        // bgboxes_k0001
        const bgboxes_k0001 = this.add.sprite(0, 581, "boxdimension", "bgboxes/k0001");
        bgboxes.add(bgboxes_k0001);

        // bgboxes_j0001
        const bgboxes_j0001 = this.add.sprite(868, 123, "boxdimension", "bgboxes/j0001");
        bgboxes.add(bgboxes_j0001);

        // bgboxes_i0001
        const bgboxes_i0001 = this.add.sprite(924, 156, "boxdimension", "bgboxes/i0001");
        bgboxes.add(bgboxes_i0001);

        // bgboxes_h0001
        const bgboxes_h0001 = this.add.sprite(837, 181, "boxdimension", "bgboxes/h0001");
        bgboxes.add(bgboxes_h0001);

        // bgboxes_g0001
        const bgboxes_g0001 = this.add.sprite(932, 0, "boxdimension", "bgboxes/g0001");
        bgboxes.add(bgboxes_g0001);

        // bgboxes_f0001
        const bgboxes_f0001 = this.add.sprite(1027, 26, "boxdimension", "bgboxes/f0001");
        bgboxes.add(bgboxes_f0001);

        // bgboxes_e0001
        const bgboxes_e0001 = this.add.sprite(633, 161, "boxdimension", "bgboxes/e0001");
        bgboxes.add(bgboxes_e0001);

        // bgboxes_d0001
        const bgboxes_d0001 = this.add.sprite(713, 80, "boxdimension", "bgboxes/d0001");
        bgboxes.add(bgboxes_d0001);

        // bgboxes_c0001
        const bgboxes_c0001 = this.add.sprite(941, 70, "boxdimension", "bgboxes/c0001");
        bgboxes.add(bgboxes_c0001);

        // bgboxes_b0001
        const bgboxes_b0001 = this.add.sprite(569, 53, "boxdimension", "bgboxes/b0001");
        bgboxes.add(bgboxes_b0001);

        // bgboxes_a0001
        const bgboxes_a0001 = this.add.sprite(152, 387, "boxdimension", "bgboxes/a0001");
        bgboxes.add(bgboxes_a0001);

        // plok
        const plok = this.add.sprite(321, 239, "boxdimension", "plok0001");

        // portal0001
        const portal0001 = this.add.sprite(1205.9774294055085, 240.47552748994968, "boxdimension", "portal0001");
        portal0001.setOrigin(0.3694249365954612, 0.8179021268250984);

        // platform_back
        this.add.image(1189, 238, "boxdimension", "platform-back");

        // boxRight0001
        const boxRight0001 = this.add.sprite(1489, 444, "boxdimension", "boxRight0001");

        // platform
        this.add.image(765, 586, "boxdimension", "platform");

        // foreground
        const foreground = this.add.container(741.8735846890304, 985.8880788302723);

        // foreground_boxA0001
        const foreground_boxA0001 = this.add.sprite(-631.8735846890304, -171.88807883027232, "boxdimension", "foreground/boxA0001");
        foreground.add(foreground_boxA0001);

        // foreground_boxB0001
        const foreground_boxB0001 = this.add.sprite(422.1264153109696, -143.88807883027232, "boxdimension", "foreground/boxB0001");
        foreground.add(foreground_boxB0001);

        // foreground_boxC0001
        const foreground_boxC0001 = this.add.sprite(699.1264153109696, -209.88807883027232, "boxdimension", "foreground/boxC0001");
        foreground.add(foreground_boxC0001);

        // lists
        const sort = [foreground];

        // bgboxes_t0001 (components)
        const bgboxes_t0001Animation = new Animation(bgboxes_t0001);
        bgboxes_t0001Animation.key = "bgboxes/t";
        bgboxes_t0001Animation.end = 110;

        // bgboxes_s0001 (components)
        const bgboxes_s0001Animation = new Animation(bgboxes_s0001);
        bgboxes_s0001Animation.key = "bgboxes/s";
        bgboxes_s0001Animation.end = 110;

        // bgboxes_r0001 (components)
        const bgboxes_r0001Animation = new Animation(bgboxes_r0001);
        bgboxes_r0001Animation.key = "bgboxes/r";
        bgboxes_r0001Animation.end = 110;

        // bgboxes_q0001 (components)
        const bgboxes_q0001Animation = new Animation(bgboxes_q0001);
        bgboxes_q0001Animation.key = "bgboxes/q";
        bgboxes_q0001Animation.end = 110;

        // bgboxes_p0001 (components)
        const bgboxes_p0001Animation = new Animation(bgboxes_p0001);
        bgboxes_p0001Animation.key = "bgboxes/p";
        bgboxes_p0001Animation.end = 110;

        // bgboxes_o0001 (components)
        const bgboxes_o0001Animation = new Animation(bgboxes_o0001);
        bgboxes_o0001Animation.key = "bgboxes/o";
        bgboxes_o0001Animation.end = 110;

        // bgboxes_n0001 (components)
        const bgboxes_n0001Animation = new Animation(bgboxes_n0001);
        bgboxes_n0001Animation.key = "bgboxes/n";
        bgboxes_n0001Animation.end = 110;

        // bgboxes_m0001 (components)
        const bgboxes_m0001Animation = new Animation(bgboxes_m0001);
        bgboxes_m0001Animation.key = "bgboxes/m";
        bgboxes_m0001Animation.end = 110;

        // bgboxes_l0001 (components)
        const bgboxes_l0001Animation = new Animation(bgboxes_l0001);
        bgboxes_l0001Animation.key = "bgboxes/l";
        bgboxes_l0001Animation.end = 110;

        // bgboxes_k0001 (components)
        const bgboxes_k0001Animation = new Animation(bgboxes_k0001);
        bgboxes_k0001Animation.key = "bgboxes/k";
        bgboxes_k0001Animation.end = 110;

        // bgboxes_j0001 (components)
        const bgboxes_j0001Animation = new Animation(bgboxes_j0001);
        bgboxes_j0001Animation.key = "bgboxes/j";
        bgboxes_j0001Animation.end = 110;

        // bgboxes_i0001 (components)
        const bgboxes_i0001Animation = new Animation(bgboxes_i0001);
        bgboxes_i0001Animation.key = "bgboxes/i";
        bgboxes_i0001Animation.end = 110;

        // bgboxes_h0001 (components)
        const bgboxes_h0001Animation = new Animation(bgboxes_h0001);
        bgboxes_h0001Animation.key = "bgboxes/h";
        bgboxes_h0001Animation.end = 110;

        // bgboxes_g0001 (components)
        const bgboxes_g0001Animation = new Animation(bgboxes_g0001);
        bgboxes_g0001Animation.key = "bgboxes/g";
        bgboxes_g0001Animation.end = 110;

        // bgboxes_f0001 (components)
        const bgboxes_f0001Animation = new Animation(bgboxes_f0001);
        bgboxes_f0001Animation.key = "bgboxes/f";
        bgboxes_f0001Animation.end = 110;

        // bgboxes_e0001 (components)
        const bgboxes_e0001Animation = new Animation(bgboxes_e0001);
        bgboxes_e0001Animation.key = "bgboxes/e";
        bgboxes_e0001Animation.end = 110;

        // bgboxes_d0001 (components)
        const bgboxes_d0001Animation = new Animation(bgboxes_d0001);
        bgboxes_d0001Animation.key = "bgboxes/d";
        bgboxes_d0001Animation.end = 110;

        // bgboxes_c0001 (components)
        const bgboxes_c0001Animation = new Animation(bgboxes_c0001);
        bgboxes_c0001Animation.key = "bgboxes/c";
        bgboxes_c0001Animation.end = 110;

        // bgboxes_b0001 (components)
        const bgboxes_b0001Animation = new Animation(bgboxes_b0001);
        bgboxes_b0001Animation.key = "bgboxes/b";
        bgboxes_b0001Animation.end = 110;

        // bgboxes_a0001 (components)
        const bgboxes_a0001Animation = new Animation(bgboxes_a0001);
        bgboxes_a0001Animation.key = "bgboxes/a";
        bgboxes_a0001Animation.end = 110;

        // plok (components)
        const plokAnimation = new Animation(plok);
        plokAnimation.key = "plok";
        plokAnimation.end = 100;
        plokAnimation.repeat = 0;
        plokAnimation.autoPlay = false;

        // portal0001 (components)
        const portal0001Animation = new Animation(portal0001);
        portal0001Animation.key = "portal";
        portal0001Animation.end = 20;
        const portal0001SimpleButton = new SimpleButton(portal0001);
        portal0001SimpleButton.pixelPerfect = true;
        new MoveTo(portal0001);

        // boxRight0001 (components)
        const boxRight0001Animation = new Animation(boxRight0001);
        boxRight0001Animation.key = "boxRight";
        boxRight0001Animation.end = 110;

        // foreground_boxA0001 (components)
        const foreground_boxA0001Animation = new Animation(foreground_boxA0001);
        foreground_boxA0001Animation.key = "foreground/boxA";
        foreground_boxA0001Animation.end = 110;

        // foreground_boxB0001 (components)
        const foreground_boxB0001Animation = new Animation(foreground_boxB0001);
        foreground_boxB0001Animation.key = "foreground/boxB";
        foreground_boxB0001Animation.end = 110;

        // foreground_boxC0001 (components)
        const foreground_boxC0001Animation = new Animation(foreground_boxC0001);
        foreground_boxC0001Animation.key = "foreground/boxC";
        foreground_boxC0001Animation.end = 110;

        this.clouds = clouds;
        this.plok = plok;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()
        this.tweens.add({
            targets: this.clouds,
            x: { from: -609, to: 189 },
            duration: 83000.33,
            ease: Phaser.Math.Easing.Linear,
            yoyo: false,
            repeat: -1
        });
    }

    update() {
        //Check the time for plok. Appears every 15 mins at :00, :15, :30, and :45.
        let now = new Date()
        let mins = now.getMinutes()
        let secs = now.getSeconds()
        if(mins == 0 || mins == 15 || mins == 30 || mins == 45) {
            if(secs == 0) {
                this.plok.__Animation.play()
            }
        }
    }

    // Write your code here


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
