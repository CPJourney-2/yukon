/* START OF COMPILED CODE */

import RoomScene from "../../RoomScene";
import Animation from "../../../components/Animation";
import Waddle100 from "../../mtn/waddle/Waddle100";
import Waddle101 from "../../mtn/waddle/Waddle101";
import Waddle102 from "../../mtn/waddle/Waddle102";
import Waddle103 from "../../mtn/waddle/Waddle103";
import Button from "../../../components/Button";
import SimpleButton from "../../../components/SimpleButton";
import SnackStampArea from "../../../components/SnackStampArea";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Mtn extends RoomScene {

    constructor() {
        super("Mtn");

        /** @type {Waddle100} */
        this.waddle100;
        /** @type {Waddle101} */
        this.waddle101;
        /** @type {Waddle102} */
        this.waddle102;
        /** @type {Waddle103} */
        this.waddle103;
        /** @type {Phaser.GameObjects.Image} */
        this.interfaceIcons;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 480, 560),
            'coaster': () => this.triggerRoom(862), // hi misabr :3 // i literally found out i was doing this yesterday :v
            'waddle100': () => this.triggerWaddle(100),
            'waddle101': () => this.triggerWaddle(101),
            'waddle102': () => this.triggerWaddle(102),
            'waddle103': () => this.triggerWaddle(103)
        }

        this.music = 297

        this.secondaryPhysics = 'fair-mtn-physics'

        this.waddles = {}

        // Don't show waddle seat for sled hand items
        this.sleds = [5021, 5046, 5047, 380120]

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("mtn-pack", "assets/media/rooms/mtn/mtn-pack.json");
        this.load.pack("fair-mtn-pack", "assets/media/rooms/_fair/mtn/fair-mtn-pack.json");
    }

    /** @returns {void} */
    _create() {

        // chair
        const chair = this.add.sprite(846, 75, "mtn", "chair/chair0001");
        chair.setOrigin(0, 0);
        chair.visible = false;

        // bg
        this.add.image(760, 494, "fair-mtn", "bg");

        // ridgerun0001
        const ridgerun0001 = this.add.sprite(181, 499, "fair-mtn", "ridgerun0001");

        // waddle100
        const waddle100 = new Waddle100(this, 251, 530);
        this.add.existing(waddle100);

        // waddle101
        const waddle101 = new Waddle101(this, 586, 680);
        this.add.existing(waddle101);

        // waddle102
        const waddle102 = new Waddle102(this, 854, 757);
        this.add.existing(waddle102);

        // waddle103
        const waddle103 = new Waddle103(this, 1046, 653);
        this.add.existing(waddle103);

        // interfaceIcons
        const interfaceIcons = this.add.image(1423, 941, "mtn", "catalog");
        interfaceIcons.setOrigin(0.5133483459728905, 1.1411531919849045);

        // arrow0001
        const arrow0001 = this.add.sprite(217, 232, "fair-mtn", "arrow0001");

        // penguinrun0001
        const penguinrun0001 = this.add.sprite(492.1131430320665, 659.2251431085956, "fair-mtn", "penguinrun0001");
        penguinrun0001.setOrigin(0.6291237040897569, 0.6757944079819873);

        // express0001
        const express0001 = this.add.sprite(1071, 839, "fair-mtn", "express0001");
        express0001.setOrigin(0.4155196896897698, 0.6626901876502287);

        // coaster_fg
        const coaster_fg = this.add.image(1221, 991, "fair-mtn", "coaster_fg");
        coaster_fg.setOrigin(1, 1);

        // bunnyhill0001
        const bunnyhill0001 = this.add.sprite(1260.0779223039908, 719.8012982988964, "fair-mtn", "bunnyhill0001");
        bunnyhill0001.setOrigin(0.387083361103403, 0.7813882641303201);

        // b30001
        const b30001 = this.add.sprite(502, 285, "fair-mtn", "b30001");

        // b20001
        const b20001 = this.add.sprite(471, 269, "fair-mtn", "b20001");

        // b10001
        const b10001 = this.add.sprite(483, 305, "fair-mtn", "b10001");

        // b40001
        const b40001 = this.add.sprite(505, 264, "fair-mtn", "b40001");

        // fence
        this.add.image(523, 348, "fair-mtn", "fence");

        // b3
        const b3 = this.add.sprite(1004, 262, "fair-mtn", "b30001");
        b3.flipX = true;

        // fence_1
        const fence_1 = this.add.image(984, 325, "fair-mtn", "fence");
        fence_1.flipX = true;

        // b4
        const b4 = this.add.sprite(1001, 239, "fair-mtn", "b40001");
        b4.flipX = true;

        // b1
        const b1 = this.add.sprite(1024, 283, "fair-mtn", "b10001");
        b1.flipX = true;

        // b2
        const b2 = this.add.sprite(1036, 247, "fair-mtn", "b20001");
        b2.flipX = true;

        // arrowign
        this.add.image(932, 316, "fair-mtn", "arrowign");

        // balloonbunch
        const balloonbunch = this.add.image(1223.3434420459496, 402.7941144126328, "fair-mtn", "balloonbunch");
        balloonbunch.setOrigin(0.40728038700919617, 1.1442805029727452);

        // icecream
        const icecream = this.add.image(1124.9066799258665, 516.3625059887538, "fair-mtn", "icecream");
        icecream.setOrigin(0.5026588854130981, 0.9316435919112187);

        // sled
        const sled = this.add.image(1007.770053535138, 518.1132434925441, "mtn", "sled");
        sled.setOrigin(0.5401858528966138, 0.7348766549094197);
        sled.flipX = true;

        // catalogSmall
        const catalogSmall = this.add.sprite(990, 534, "mtn", "catalog_small0001");
        catalogSmall.scaleX = 0.9;
        catalogSmall.scaleY = 0.9;
        catalogSmall.setOrigin(0.45618984828084613, 1.5067640387851742);
        catalogSmall.flipX = true;

        // snackStampZone
        const snackStampZone = this.add.rectangle(1125, 475, 150, 150);
        snackStampZone.visible = false;

        // lists
        const sort = [coaster_fg, icecream, balloonbunch, penguinrun0001, express0001, bunnyhill0001, sled, catalogSmall];

        // chair (components)
        const chairAnimation = new Animation(chair);
        chairAnimation.key = "chair/chair";
        chairAnimation.end = 87;

        // ridgerun0001 (components)
        const ridgerun0001Animation = new Animation(ridgerun0001);
        ridgerun0001Animation.key = "ridgerun";
        ridgerun0001Animation.end = 10;

        // interfaceIcons (components)
        const interfaceIconsButton = new Button(interfaceIcons);
        interfaceIconsButton.spriteName = "catalog";
        interfaceIconsButton.callback = () => this.interface.loadWidget('MtnCatalog');

        // arrow0001 (components)
        const arrow0001Animation = new Animation(arrow0001);
        arrow0001Animation.key = "arrow";
        arrow0001Animation.end = 22;

        // penguinrun0001 (components)
        const penguinrun0001Animation = new Animation(penguinrun0001);
        penguinrun0001Animation.key = "penguinrun";
        penguinrun0001Animation.end = 10;

        // express0001 (components)
        const express0001Animation = new Animation(express0001);
        express0001Animation.key = "express";
        express0001Animation.end = 10;

        // bunnyhill0001 (components)
        const bunnyhill0001Animation = new Animation(bunnyhill0001);
        bunnyhill0001Animation.key = "bunnyhill";
        bunnyhill0001Animation.end = 10;

        // b30001 (components)
        const b30001Animation = new Animation(b30001);
        b30001Animation.key = "b3";
        b30001Animation.end = 43;

        // b20001 (components)
        const b20001Animation = new Animation(b20001);
        b20001Animation.key = "b2";
        b20001Animation.end = 50;

        // b10001 (components)
        const b10001Animation = new Animation(b10001);
        b10001Animation.key = "b1";
        b10001Animation.end = 47;

        // b40001 (components)
        const b40001Animation = new Animation(b40001);
        b40001Animation.key = "b4";
        b40001Animation.end = 50;

        // b3 (components)
        const b3Animation = new Animation(b3);
        b3Animation.key = "b3";
        b3Animation.end = 43;

        // b4 (components)
        const b4Animation = new Animation(b4);
        b4Animation.key = "b4";
        b4Animation.end = 50;

        // b1 (components)
        const b1Animation = new Animation(b1);
        b1Animation.key = "b1";
        b1Animation.end = 47;

        // b2 (components)
        const b2Animation = new Animation(b2);
        b2Animation.key = "b2";
        b2Animation.end = 50;

        // catalogSmall (components)
        const catalogSmallSimpleButton = new SimpleButton(catalogSmall);
        catalogSmallSimpleButton.hoverCallback = () => catalogSmall.play('sledCatalog');
        catalogSmallSimpleButton.hoverOutCallback = () => { catalogSmall.anims.stop(); catalogSmall.setFrame('catalog_small0001') };
        catalogSmallSimpleButton.callback = () => this.interface.loadWidget('MtnCatalog');

        // snackStampZone (components)
        new SnackStampArea(snackStampZone);

        this.waddle100 = waddle100;
        this.waddle101 = waddle101;
        this.waddle102 = waddle102;
        this.waddle103 = waddle103;
        this.interfaceIcons = interfaceIcons;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    setWaddles(waddles) {
        super.setWaddles(waddles)

        for (const [waddle, seats] of Object.entries(waddles)) {
            // Update waddles to show seats
            for (let i = 0; i < seats.length; i++) {
                this.updateWaddle(waddle, i, seats[i])
            }
        }
    }

    updateWaddle(waddle, seat, username) {
        const show = this.checkShowSeat(username)

        this.getWaddle(waddle)[`seat${seat}`].visible = show

        super.updateWaddle(waddle, seat, username)
    }

    checkShowSeat(username) {
        if (username === null) {
            return false
        }

        const penguin = this.getPenguinByDisplayName(username)
        if (!penguin) {
            return false
        }

        const hand = penguin.items.all.hand.id
        return !this.sleds.includes(hand)
    }

    triggerWaddle(id) {
        const text = this.getString('sled_prompt')

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.world.client.lastSledId = id
            this.network.send('join_waddle', { waddle: id })

            this.interface.prompt.window.visible = false
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
