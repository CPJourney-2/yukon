import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'
import SharedCoaster from '@rooms/_fair/SharedCoaster'

import { SimpleButton, MoveTo, Button, ZoneTrigger, ShowHint, Animation } from '@components/components'


/* START OF COMPILED CODE */

export default class Forest extends RoomScene {

    constructor() {
        super("Forest");

        /** @type {Phaser.GameObjects.Sprite} */
        this.rock0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.paddle;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 1240, 660),
            'shack': () => this.triggerRoom(807, 500, 800),
            'cove': () => this.triggerRoom(810, 520, 416),
            // 'lake': () => this.triggerRoom(814, 460, 285)
        }

        this.music = 297;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("forest-pack", "assets/media/rooms/forest/forest-pack.json");
        this.load.pack("fair-forest-pack", "assets/media/rooms/_fair/forest/fair-forest-pack.json");
    }

    /** @returns {void} */
    _create() {

        // rectangle_2
        const rectangle_2 = this.add.rectangle(517, 684, 128, 128);
        rectangle_2.isFilled = true;

        // bg
        const bg = this.add.image(-24, -13, "fair-forest", "background");
        bg.setOrigin(0, 0);

        // rock0001
        const rock0001 = this.add.sprite(254, 681, "forest", "rock0001");
        rock0001.setOrigin(0.6005747126436781, 0.7300884955752213);
        rock0001.visible = false;

        // rectangle_1
        const rectangle_1 = this.add.rectangle(287, 652, 190, 128);
        rectangle_1.isFilled = true;

        // tree
        const tree = this.add.image(-17, 272, "forest", "tree");
        tree.setOrigin(0, 0);

        // fg
        const fg = this.add.image(-8, 976, "fair-forest", "fgL3");
        fg.setOrigin(0, 1);

        // middle
        const middle = this.add.image(795, 530, "fair-forest", "middle");
        middle.setOrigin(0.5, 0.608540925266904);

        // stairs
        const stairs = this.add.image(1129, 302, "fair-forest", "fgR3");
        stairs.setOrigin(0, 0);

        // rail
        const rail = this.add.image(1441, 831, "fair-forest", "fgR2");
        rail.setOrigin(0.5, 0.5885714285714285);

        // sign
        const sign = this.add.image(1317, 681, "forest", "sign");
        sign.setOrigin(0.4794520547945205, 0.9397590361445783);

        // circusSign
        this.add.image(978, 234, "fair-forest", "circusSign");

        // fenceR
        const fenceR = this.add.image(1075, 326.994374031799, "fair-forest", "fenceR");
        fenceR.setOrigin(0.5, 0.547552071807131);

        // fgL1
        this.add.image(-105, 177, "fair-forest", "fgL1");

        // fgR1
        const fgR1 = this.add.image(1566, 695.2885920590592, "fair-forest", "fgR1");
        fgR1.setOrigin(0.5, 0.6719372208394845);

        // hay3
        const hay3 = this.add.image(1032, 825, "fair-forest", "hay3");

        // hay2
        const hay2 = this.add.image(673, 684, "fair-forest", "hay2");

        // hay1
        const hay1 = this.add.image(385, 450, "fair-forest", "hay1");

        // memoryInside
        const memoryInside = this.add.image(471, 260.21875, "fair-forest", "memoryInside");
        memoryInside.setOrigin(0.5, 0.5706086048151815);

        // memory
        const memory = this.add.image(467, 335.05661736741104, "fair-forest", "memory");
        memory.setOrigin(0.5, 0.847617563184777);

        // paddleBooth
        const paddleBooth = this.add.container(954, 588.0220947265625);

        // puffleTent
        const puffleTent = this.add.image(0, 0, "fair-forest", "puffleTent");
        puffleTent.setOrigin(0.5, 0.7554366733106611);
        paddleBooth.add(puffleTent);

        // paddle
        const paddle = this.add.sprite(7, 22.9779052734375, "fair-forest", "paddle0001");
        paddle.scaleX = 0.75;
        paddle.scaleY = 0.75;
        paddle.setOrigin(0.5, 1.0738503182199266);
        paddleBooth.add(paddle);

        // puffleFront
        const puffleFront = this.add.image(6, 53.3848876953125, "fair-forest", "puffleFront");
        puffleFront.scaleX = 0.75;
        puffleFront.scaleY = 0.75;
        puffleFront.setOrigin(0.5, 1.0104813519791274);
        paddleBooth.add(puffleFront);

        // puffle
        const puffle = this.add.image(6, 113.935791015625, "fair-forest", "puffle");
        puffle.setOrigin(0.5, 3.0542679846587073);
        paddleBooth.add(puffle);

        // rectangle
        const rectangle = this.add.rectangle(956.9486694335938, 520.8768920898438, 128, 128);
        rectangle.scaleX = 1.6953319608985584;
        rectangle.scaleY = 1.3684037640462006;
        rectangle.setOrigin(0.49284544471386793, 0.3761046215236066);

        // circusTrigger
        const circusTrigger = this.add.rectangle(781, 247.701748105089, 300, 200);

        // prizeTrigger
        const prizeTrigger = this.add.rectangle(639, 608.8508740525444, 200, 100);

        // rectangle_5
        const rectangle_5 = this.add.rectangle(485, 331.08911878725695, 200, 128);

        // rectangle_6
        const rectangle_6 = this.add.rectangle(954, 618, 220, 80);

        // tent
        const tent = this.add.image(642, 601.1740621554534, "fair-forest", "tent1");
        tent.setOrigin(0.5, 0.8380001924317442);

        // tentbtn
        const tentbtn = this.add.rectangle(642.2645263671874, 651.5253757138486, 128, 128);
        tentbtn.scaleX = 1.7671177264994549;
        tentbtn.scaleY = 1.5872922902190512;
        tentbtn.setOrigin(0.5100114980244945, 1.075560768045535);

        // sharedCoaster
        const sharedCoaster = new SharedCoaster(this, 0, 0);
        this.add.existing(sharedCoaster);

        // lists
        const sort = [sign, rail, middle, fg, tree, rock0001, hay3, hay2, hay1, memory, fenceR, paddleBooth, fgR1, tent];

        // rock0001 (components)
        const rock0001SimpleButton = new SimpleButton(rock0001);
        rock0001SimpleButton.hoverCallback = () => {this.onRockUp();};
        rock0001SimpleButton.hoverOutCallback = () => {this.onRockDown();};
        const rock0001MoveTo = new MoveTo(rock0001);
        rock0001MoveTo.x = 312;
        rock0001MoveTo.y = 664;

        // memoryInside (components)
        const memoryInsideButton = new Button(memoryInside);
        memoryInsideButton.spriteName = "memoryInside";
        memoryInsideButton.pixelPerfect = true;
        const memoryInsideMoveTo = new MoveTo(memoryInside);
        memoryInsideMoveTo.x = 471;
        memoryInsideMoveTo.y = 343;
        const memoryInsideShowHint = new ShowHint(memoryInside);
        memoryInsideShowHint.text = "Memory Game";

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.hoverCallback = () => this.onPaddle();
        rectangleSimpleButton.hoverOutCallback = () => this.onPaddleOut();
        const rectangleShowHint = new ShowHint(rectangle);
        rectangleShowHint.text = "Puffle Paddle";
        const rectangleMoveTo = new MoveTo(rectangle);
        rectangleMoveTo.x = 957;
        rectangleMoveTo.y = 637;

        // circusTrigger (components)
        new SimpleButton(circusTrigger);
        new MoveTo(circusTrigger);
        const circusTriggerZoneTrigger = new ZoneTrigger(circusTrigger);
        circusTriggerZoneTrigger.callback = () => this.triggerRoom(852, 768, 791);

        // prizeTrigger (components)
        const prizeTriggerZoneTrigger = new ZoneTrigger(prizeTrigger);
        prizeTriggerZoneTrigger.callback = () => this.interface.loadWidget('PrizeBooth2');

        // rectangle_5 (components)
        const rectangle_5ZoneTrigger = new ZoneTrigger(rectangle_5);
        rectangle_5ZoneTrigger.callback = () => this.triggerGame(921);

        // rectangle_6 (components)
        const rectangle_6ZoneTrigger = new ZoneTrigger(rectangle_6);
        rectangle_6ZoneTrigger.callback = () => this.triggerGame(922);

        // tent (components)
        const tentButton = new Button(tent);
        tentButton.spriteName = "tent1";
        tentButton.alias = tentbtn;

        // tentbtn (components)
        new MoveTo(tentbtn);

        this.rock0001 = rock0001;
        this.paddle = paddle;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onRockUp() {
        this.rock0001.play('rockup')
    }

    onRockDown() {
        this.rock0001.play('rockdown')
    }

    onPaddle() {
        this.paddle.play('fair-forest-paddle');
    }

    onPaddleOut() {
        this.paddle.stop();
        this.paddle.setTexture('fair-forest', 'paddle0001');
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
