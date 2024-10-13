import RoomScene from '@rooms/RoomScene'

import { Animation, Button, MoveTo, Interactive, SimpleButton, ShowHint } from '@components/components'

import RoomPin from '@rooms/RoomPin'

const ONE_FRAME_IN_MS = 41.66666

/* START OF COMPILED CODE */

export default class Party3 extends RoomScene {

    constructor() {
        super("Party3");

        /** @type {Phaser.GameObjects.Image} */
        this.bg;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.pickActBlock;
        /** @type {Phaser.GameObjects.Container} */
        this.pickActContainer;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'exit': () => this.triggerRoom(852, 925, 575)
        }

        this.music = 221

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("fair-party3-pack", "assets/media/rooms/_fair/party3/fair-party3-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(760, 480, "fair-party3", "bg");

        // chair1
        const chair1 = this.add.image(23.685038088712645, 681.5133895427333, "fair-party3", "chair1");
        chair1.setOrigin(0.574803132746219, 0.3351338954273331);

        // chair
        const chair = this.add.image(58, 740, "fair-party3", "chair1");
        chair.setOrigin(0.574803132746219, 0.3351338954273331);

        // chairseat
        const chairseat = this.add.image(173, 769, "fair-party3", "chairseat");
        chairseat.setOrigin(1, 0);

        // chairback
        const chairback = this.add.image(130, 808.2943884569695, "fair-party3", "chairback");
        chairback.setOrigin(0.5, 0.6695528280095049);

        // chairseat_1
        const chairseat_1 = this.add.image(242, 807, "fair-party3", "chairseat");
        chairseat_1.setOrigin(1, 0);

        // chairback_1
        const chairback_1 = this.add.image(199, 846, "fair-party3", "chairback");
        chairback_1.setOrigin(0.5, 0.6695528280095049);

        // chairseat_2
        const chairseat_2 = this.add.image(312, 841, "fair-party3", "chairseat");
        chairseat_2.setOrigin(1, 0);

        // chairback_2
        const chairback_2 = this.add.image(269, 880, "fair-party3", "chairback");
        chairback_2.setOrigin(0.5, 0.6695528280095049);

        // chairseat_3
        const chairseat_3 = this.add.image(82, 808, "fair-party3", "chairseat");
        chairseat_3.setOrigin(1, 0);

        // chairback_3
        const chairback_3 = this.add.image(39, 847, "fair-party3", "chairback");
        chairback_3.setOrigin(0.5, 0.6695528280095049);

        // chairseat_4
        const chairseat_4 = this.add.image(150, 846, "fair-party3", "chairseat");
        chairseat_4.setOrigin(1, 0);

        // chairback_4
        const chairback_4 = this.add.image(107, 885, "fair-party3", "chairback");
        chairback_4.setOrigin(0.5, 0.6695528280095049);

        // chairseat_5
        const chairseat_5 = this.add.image(220, 882, "fair-party3", "chairseat");
        chairseat_5.setOrigin(1, 0);

        // chairback_5
        const chairback_5 = this.add.image(177, 921, "fair-party3", "chairback");
        chairback_5.setOrigin(0.5, 0.6695528280095049);

        // chairseat_6
        const chairseat_6 = this.add.image(61, 893, "fair-party3", "chairseat");
        chairseat_6.setOrigin(1, 0);

        // chairback_6
        const chairback_6 = this.add.image(18, 932, "fair-party3", "chairback");
        chairback_6.setOrigin(0.5, 0.6695528280095049);

        // chairseat_7
        const chairseat_7 = this.add.image(131, 932, "fair-party3", "chairseat");
        chairseat_7.setOrigin(1, 0);

        // chairback_7
        const chairback_7 = this.add.image(88, 971, "fair-party3", "chairback");
        chairback_7.setOrigin(0.5, 0.6695528280095049);

        // chair_1
        const chair_1 = this.add.image(1506, 683, "fair-party3", "chair1");
        chair_1.setOrigin(0.574803132746219, 0.3351338954273331);
        chair_1.flipX = true;

        // chair_2
        const chair_2 = this.add.image(1473, 739, "fair-party3", "chair1");
        chair_2.setOrigin(0.574803132746219, 0.3351338954273331);
        chair_2.flipX = true;

        // chairseat_8
        const chairseat_8 = this.add.image(1411, 768, "fair-party3", "chairseat");
        chairseat_8.setOrigin(1, 0);
        chairseat_8.flipX = true;

        // chairback_8
        const chairback_8 = this.add.image(1389, 806, "fair-party3", "chairback");
        chairback_8.setOrigin(0.5, 0.6695528280095049);
        chairback_8.flipX = true;

        // chairseat_9
        const chairseat_9 = this.add.image(1343, 806, "fair-party3", "chairseat");
        chairseat_9.setOrigin(1, 0);
        chairseat_9.flipX = true;

        // chairback_9
        const chairback_9 = this.add.image(1321, 844, "fair-party3", "chairback");
        chairback_9.setOrigin(0.5, 0.6695528280095049);
        chairback_9.flipX = true;

        // chairseat_10
        const chairseat_10 = this.add.image(1271, 842, "fair-party3", "chairseat");
        chairseat_10.setOrigin(1, 0);
        chairseat_10.flipX = true;

        // chairback_10
        const chairback_10 = this.add.image(1249, 880, "fair-party3", "chairback");
        chairback_10.setOrigin(0.5, 0.6695528280095049);
        chairback_10.flipX = true;

        // chairseat_11
        const chairseat_11 = this.add.image(1503, 809, "fair-party3", "chairseat");
        chairseat_11.setOrigin(1, 0);
        chairseat_11.flipX = true;

        // chairback_11
        const chairback_11 = this.add.image(1481, 847, "fair-party3", "chairback");
        chairback_11.setOrigin(0.5, 0.6695528280095049);
        chairback_11.flipX = true;

        // chairseat_12
        const chairseat_12 = this.add.image(1434, 846, "fair-party3", "chairseat");
        chairseat_12.setOrigin(1, 0);
        chairseat_12.flipX = true;

        // chairback_12
        const chairback_12 = this.add.image(1412, 884, "fair-party3", "chairback");
        chairback_12.setOrigin(0.5, 0.6695528280095049);
        chairback_12.flipX = true;

        // chairseat_13
        const chairseat_13 = this.add.image(1364, 882, "fair-party3", "chairseat");
        chairseat_13.setOrigin(1, 0);
        chairseat_13.flipX = true;

        // chairback_13
        const chairback_13 = this.add.image(1342, 920, "fair-party3", "chairback");
        chairback_13.setOrigin(0.5, 0.6695528280095049);
        chairback_13.flipX = true;

        // chairseat_14
        const chairseat_14 = this.add.image(1523, 894, "fair-party3", "chairseat");
        chairseat_14.setOrigin(1, 0);
        chairseat_14.flipX = true;

        // chairback_14
        const chairback_14 = this.add.image(1501, 932, "fair-party3", "chairback");
        chairback_14.setOrigin(0.5, 0.6695528280095049);
        chairback_14.flipX = true;

        // chairseat_15
        const chairseat_15 = this.add.image(1447, 920, "fair-party3", "chairseat");
        chairseat_15.setOrigin(1, 0);
        chairseat_15.flipX = true;

        // chairback_15
        const chairback_15 = this.add.image(1425, 958, "fair-party3", "chairback");
        chairback_15.setOrigin(0.5, 0.6695528280095049);
        chairback_15.flipX = true;

        // pickActContainer
        const pickActContainer = this.add.container(760, 57);

        // pick_act_bg
        const pick_act_bg = this.add.image(0, 84, "fair-party3", "pick_act/bg");
        pickActContainer.add(pick_act_bg);

        // pick_act_lettering
        const pick_act_lettering = this.add.image(-8, 57, "fair-party3", "pick_act/lettering");
        pickActContainer.add(pick_act_lettering);

        // pick_act_black0001
        const pick_act_black0001 = this.add.image(-285, 143, "fair-party3", "pick_act/black0001");
        pickActContainer.add(pick_act_black0001);

        // pick_act_white0001
        const pick_act_white0001 = this.add.image(-212, 137, "fair-party3", "pick_act/white0001");
        pickActContainer.add(pick_act_white0001);

        // pick_act_red0001
        const pick_act_red0001 = this.add.image(-141, 131, "fair-party3", "pick_act/red0001");
        pickActContainer.add(pick_act_red0001);

        // pick_act_pink0001
        const pick_act_pink0001 = this.add.image(-70, 128, "fair-party3", "pick_act/pink0001");
        pickActContainer.add(pick_act_pink0001);

        // pick_act_green0001
        const pick_act_green0001 = this.add.image(2, 124, "fair-party3", "pick_act/green0001");
        pickActContainer.add(pick_act_green0001);

        // pick_act_blue0001
        const pick_act_blue0001 = this.add.image(75, 127, "fair-party3", "pick_act/blue0001");
        pickActContainer.add(pick_act_blue0001);

        // pick_act_purple0001
        const pick_act_purple0001 = this.add.image(147, 131, "fair-party3", "pick_act/purple0001");
        pickActContainer.add(pick_act_purple0001);

        // pick_act_orange0001
        const pick_act_orange0001 = this.add.image(215, 138, "fair-party3", "pick_act/orange0001");
        pickActContainer.add(pick_act_orange0001);

        // pick_act_brown0001
        const pick_act_brown0001 = this.add.image(281, 146, "fair-party3", "pick_act/brown0001");
        pickActContainer.add(pick_act_brown0001);

        // pickActBlock
        const pickActBlock = this.add.rectangle(2, 144, 128, 128);
        pickActBlock.scaleX = 5.791834152585762;
        pickActBlock.scaleY = 1.244723533627;
        pickActBlock.visible = false;
        pickActContainer.add(pickActBlock);

        // lists
        const sort = [chairback_15, chairseat_15, chairback_14, chairseat_14, chairback_13, chairseat_13, chairback_12, chairseat_12, chairback_11, chairseat_11, chairback_10, chairseat_10, chairback_9, chairseat_9, chairback_8, chairseat_8, chair_2, chair_1, chairback_7, chairseat_7, chairback_6, chairseat_6, chairback_5, chairseat_5, chairback_4, chairseat_4, chairback_3, chairseat_3, chairback_2, chairseat_2, chairback_1, chairseat_1, chairback, chairseat, chair, chair1];

        // pick_act_black0001 (components)
        const pick_act_black0001Button = new Button(pick_act_black0001);
        pick_act_black0001Button.spriteName = "pick_act/black";
        pick_act_black0001Button.callback = () => this.pickAct(1);
        pick_act_black0001Button.lazyName = true;

        // pick_act_white0001 (components)
        const pick_act_white0001Button = new Button(pick_act_white0001);
        pick_act_white0001Button.spriteName = "pick_act/white";
        pick_act_white0001Button.callback = () => this.pickAct(2);
        pick_act_white0001Button.lazyName = true;

        // pick_act_red0001 (components)
        const pick_act_red0001Button = new Button(pick_act_red0001);
        pick_act_red0001Button.spriteName = "pick_act/red";
        pick_act_red0001Button.callback = () => this.pickAct(3);
        pick_act_red0001Button.lazyName = true;

        // pick_act_pink0001 (components)
        const pick_act_pink0001Button = new Button(pick_act_pink0001);
        pick_act_pink0001Button.spriteName = "pick_act/pink";
        pick_act_pink0001Button.callback = () => this.pickAct(4);
        pick_act_pink0001Button.lazyName = true;

        // pick_act_green0001 (components)
        const pick_act_green0001Button = new Button(pick_act_green0001);
        pick_act_green0001Button.spriteName = "pick_act/green";
        pick_act_green0001Button.callback = () => this.pickAct(5);
        pick_act_green0001Button.lazyName = true;

        // pick_act_blue0001 (components)
        const pick_act_blue0001Button = new Button(pick_act_blue0001);
        pick_act_blue0001Button.spriteName = "pick_act/blue";
        pick_act_blue0001Button.callback = () => this.pickAct(6);
        pick_act_blue0001Button.lazyName = true;

        // pick_act_purple0001 (components)
        const pick_act_purple0001Button = new Button(pick_act_purple0001);
        pick_act_purple0001Button.spriteName = "pick_act/purple";
        pick_act_purple0001Button.callback = () => this.pickAct(7);
        pick_act_purple0001Button.lazyName = true;

        // pick_act_orange0001 (components)
        const pick_act_orange0001Button = new Button(pick_act_orange0001);
        pick_act_orange0001Button.spriteName = "pick_act/orange";
        pick_act_orange0001Button.callback = () => this.pickAct(8);
        pick_act_orange0001Button.lazyName = true;

        // pick_act_brown0001 (components)
        const pick_act_brown0001Button = new Button(pick_act_brown0001);
        pick_act_brown0001Button.spriteName = "pick_act/brown";
        pick_act_brown0001Button.callback = () => this.pickAct(9);
        pick_act_brown0001Button.lazyName = true;

        // pickActBlock (components)
        new Interactive(pickActBlock);

        this.bg = bg;
        this.pickActBlock = pickActBlock;
        this.pickActContainer = pickActContainer;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.pickActTween = {
            targets: this.pickActContainer,
            tweens: [
                {
                    ease: 'Cubic',
                    duration: ONE_FRAME_IN_MS * 10,
                    y: { from: -394, to: 86 }
                },
                {
                    ease: 'Cubic',
                    duration: ONE_FRAME_IN_MS * 3,
                    y: { from: 86, to: 57 }
                }
            ],
            onComplete: () => this.pickActBlock.visible = false
        }

        this.pickActTweenReverse = {
            targets: this.pickActContainer,
            tweens: [
                {
                    ease: 'Cubic',
                    duration: ONE_FRAME_IN_MS * 3,
                    y: { from: 57, to: 86 }
                },
                {
                    ease: 'Cubic',
                    duration: ONE_FRAME_IN_MS * 10,
                    y: { from: 86, to: -394 }
                }
            ]
        }

        this.bg.visible = true
        this.pickActBlock.visible = true
        this.pickActContainer.y = -394
        this.pickActContainer.depth = 1000

        this.ruffle.bootRoom('assets/media/rooms/_fair/party3/circus.swf', this.soundManager.muteSFX)
        this.game.domContainer.style.zIndex = -10

        this.ruffle.addEventListener('circus_ready', () => {
            this.ruffle.container.visible = true
            this.bg.visible = false
        })
        this.ruffle.addEventListener('circus_pick_act', () => this.showPickAct())
    }

    stop() {
        super.stop()
        this.ruffle.closeRoom()
    }

    showPickAct(reverse = false) {
        let tween = reverse ? this.pickActTweenReverse : this.pickActTween
        this.pickActBlock.visible = true
        this.tweens.chain(tween)
    }

    pickAct(act) {
        this.showPickAct(true)
        this.ruffle.player.gotoAct(act)
    }

    onSnowballComplete(x, y, ball) {
        if(x > 72 && x < 1438 && y > 514 && y < 650) {
            this.interface.main.snowballFactory.destroyBall(ball)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
