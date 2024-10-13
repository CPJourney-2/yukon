import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, ShowHint, Zone, SimpleButton, HoverAnimation } from '@components/components'


/* START OF COMPILED CODE */

export default class Eco extends RoomScene {

    constructor() {
        super("Eco");

        /** @type {Phaser.GameObjects.Sprite} */
        this.l3_redlight_mc0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l5_walllights_mc0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.belt2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l7_L2_variant1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l7_L2_variant2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l7_L2_variant3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l7_L2_variant4;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l7_L2_variant5;
        /** @type {Phaser.GameObjects.Container} */
        this.belt2container;
        /** @type {Phaser.GameObjects.Image} */
        this.l8;
        /** @type {Phaser.GameObjects.Sprite} */
        this.belt1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l10_L3_variant1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l10_L3_variant2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l10_L3_variant3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l10_L3_variant4;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l10_L3_variant5;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l11_L2_gears_mc0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l11_L4_lightsgauge0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l11_L5_machinelights0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l11_L6_whistlegauge0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l11_L6_L20001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l11_L80001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l12_L20001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l12_L3_smalllight0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l12_L4_pressbutton;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l13_L2_garbagepile0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l10_L30001;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.l10_l3_rect;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l18_L10001;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle_invalid;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flap_flap0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flap_flap;
        /** @type {Phaser.GameObjects.Sprite} */
        this.computer;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'mine': () => this.triggerRoom(807, 116, 506)
        }

        this.music = 284
        this.maxBalls = 30

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("eco-pack", "assets/media/rooms/eco/eco-pack.json");
    }

    /** @returns {void} */
    _create() {

        // background
        const background = this.add.rectangle(0, 0, 1520, 960);
        background.setOrigin(0, 0);
        background.isFilled = true;
        background.fillColor = 13028300;

        // background_1
        const background_1 = this.add.rectangle(0, 934, 1520, 30);
        background_1.setOrigin(0, 0);
        background_1.isFilled = true;
        background_1.fillColor = 12501701;

        // l1
        this.add.image(760, 433, "eco-L1", "L1");

        // l2
        const l2 = this.add.image(57, 422, "eco-L1", "L2");

        // l3_redlight_mc0001
        const l3_redlight_mc0001 = this.add.sprite(46, 241, "eco-L1", "L3-redlight_mc0001");

        // l4
        this.add.image(1191, 359, "eco-L1", "L4");

        // l5_walllights_mc0001
        const l5_walllights_mc0001 = this.add.sprite(1102, 143, "eco-L1", "L5-walllights_mc0001");

        // l6
        this.add.image(1007, 353, "eco-L1", "L6");

        // belt2
        const belt2 = this.add.sprite(996, 324, "eco-L1-belt2", "L10001");

        // l7_L2_normal
        this.add.image(1154, 16, "eco-L1-belt2", "normal");

        // l7_L2_variant1
        const l7_L2_variant1 = this.add.sprite(1198, 146, "eco-L1-L7-L2-variant1", "variant10001");
        l7_L2_variant1.visible = false;

        // l7_L2_variant2
        const l7_L2_variant2 = this.add.sprite(1178, 157, "eco-L1-L7-L2-variant2", "variant20001");
        l7_L2_variant2.visible = false;

        // l7_L2_variant3
        const l7_L2_variant3 = this.add.sprite(1157, 142, "eco-L1-L7-L2-variant3", "variant30001");
        l7_L2_variant3.visible = false;

        // l7_L2_variant4
        const l7_L2_variant4 = this.add.sprite(1190, 147, "eco-L1-L7-L2-variant4", "variant40001");
        l7_L2_variant4.visible = false;

        // l7_L2_variant5
        const l7_L2_variant5 = this.add.sprite(1158, 158, "eco-L1-L7-L2-variant5", "variant50001");
        l7_L2_variant5.visible = false;

        // belt2container
        const belt2container = this.add.container(0, 0);

        // l8
        const l8 = this.add.image(1020, 396, "eco-L1", "L8");

        // l9
        this.add.image(1450, 335, "eco-L1", "L9");

        // l10_L1
        this.add.image(495, 344, "eco-L1-L10", "L10/L1");

        // belt1
        const belt1 = this.add.sprite(509, 324, "eco-L1-L10", "L10/L2-belt10001");

        // l10_L3_variant1
        const l10_L3_variant1 = this.add.sprite(498, 302, "eco-L1-L10", "L10/L3/variant10001");

        // l10_L3_variant2
        const l10_L3_variant2 = this.add.sprite(498, 302, "eco-L1-L10", "L10/L3/variant20001");
        l10_L3_variant2.visible = false;

        // l10_L3_variant3
        const l10_L3_variant3 = this.add.sprite(498, 302, "eco-L1-L10", "L10/L3/variant30001");
        l10_L3_variant3.visible = false;

        // l10_L3_variant4
        const l10_L3_variant4 = this.add.sprite(498, 302, "eco-L1-L10", "L10/L3/variant40001");
        l10_L3_variant4.visible = false;

        // l10_L3_variant5
        const l10_L3_variant5 = this.add.sprite(498, 302, "eco-L1-L10", "L10/L3/variant50001");
        l10_L3_variant5.visible = false;

        // l10_L4
        this.add.image(487, 398, "eco-L1-L10", "L10/L4");

        // l11_L1
        this.add.image(752, 270, "eco-L1-L11", "L11/L1");

        // l11_L2_gears_mc0001
        const l11_L2_gears_mc0001 = this.add.sprite(771, 313, "eco-L1-L11", "L11/L2-gears_mc0001");

        // l11_L3
        this.add.image(659, 300, "eco-L1-L11", "L11/L3");

        // l11_L4_lightsgauge0001
        const l11_L4_lightsgauge0001 = this.add.sprite(695, 282, "eco-L1-L11", "L11/L4-lightsgauge0001");

        // l11_L5_machinelights0001
        const l11_L5_machinelights0001 = this.add.sprite(660, 299, "eco-L1-L11", "L11/L5-machinelights0001");

        // l11_L6_whistlegauge0001
        const l11_L6_whistlegauge0001 = this.add.sprite(860, 255, "eco-L1-L11", "L11/L6-whistlegauge0001");

        // l11_L6_L1
        const l11_L6_L1 = this.add.image(594, 231, "eco-L1-L11", "L11/L6/L1");
        l11_L6_L1.angle = -4;

        // l11_L6_L20001
        const l11_L6_L20001 = this.add.sprite(588, 161, "eco-L1-L11", "L11/L6/L20001");
        l11_L6_L20001.angle = -4;

        // l11_L80001
        const l11_L80001 = this.add.sprite(1003, 211, "eco-L1-L11", "L11/L80001");

        // l12_L1
        this.add.image(831, 437, "eco-L1-L11", "L12/L1");

        // l12_L20001
        const l12_L20001 = this.add.sprite(810, 415, "eco-L1-L11", "L12/L20001");

        // l12_L3_smalllight0001
        const l12_L3_smalllight0001 = this.add.sprite(842, 398, "eco-L1-L11", "L12/L3-smalllight0001");

        // L12_L4_pressbutton
        const l12_L4_pressbutton = this.add.sprite(845, 425, "eco-L1-L11", "L12/L4-pressbutton0001");

        // l13_L1
        this.add.image(299, 210, "eco-L1-L11", "L13/L1");

        // l13_L2_garbagepile0001
        const l13_L2_garbagepile0001 = this.add.sprite(159, 161, "eco-L1-L11", "L13/L2-garbagepile0001");

        // l13_L3
        this.add.image(299, 283, "eco-L1-L11", "L13/L3");

        // l13_L40001
        const l13_L40001 = this.add.sprite(218, 376, "eco-L1-L11", "L13/L40001");

        // l13_L5
        this.add.image(300, 213, "eco-L1-L11", "L13/L5");

        // l
        const l = this.add.image(32.18144226074219, 945.1181640625, "eco-L2toL10", "L2");
        l.setOrigin(0.02117200249663538, 0.9844981160935453);

        // l3
        const l3 = this.add.image(10.162567138671875, 828.2487182617188, "eco-L2toL10", "L3");
        l3.setOrigin(0.006685895525253278, 0.8627591017378918);

        // l5
        const l5 = this.add.image(345.527099609375, 787.5985107421875, "eco-L2toL10", "L5");
        l5.setOrigin(0.22732044785861147, 0.8204150967446211);

        // l_1
        const l_1 = this.add.image(885.836669921875, 853.6551513671875, "eco-L2toL10", "L6");
        l_1.setOrigin(0.5827872266179107, 0.8892241048586861);

        // l7
        const l7 = this.add.image(0, 0, "eco-L2toL10", "L7");
        l7.setOrigin(0, 0);

        // l_2
        const l_2 = this.add.image(0, 0, "eco-L2toL10", "L8");
        l_2.setOrigin(0, 0);

        // l_3
        const l_3 = this.add.image(0, 0, "eco-L2toL10", "L9");
        l_3.setOrigin(0, 0);

        // l10_L10001
        const l10_L10001 = this.add.sprite(1346.5067138671875, 858.518310546875, "eco-L2toL10", "L10/L10001");
        l10_L10001.setOrigin(0.4639404365230151, 0.7849111923696416);

        // l10_L30001
        const l10_L30001 = this.add.sprite(1377.50439453125, 878.19921875, "eco-L2toL10", "L10/L30001");
        l10_L30001.setOrigin(0.4220579847721529, 2.3209449919267247);

        // l10_l3_rect
        const l10_l3_rect = this.add.rectangle(1386, 688, 100, 100);

        // l11
        const l11 = this.add.image(1398.2672119140625, 868.9702758789062, "eco-L11toL30", "L11");
        l11.setOrigin(0.9199126288351396, 0.9051773931334761);

        // l12
        const l12 = this.add.image(1418.053955078125, 984.393310546875, "eco-L11toL30", "L12");
        l12.setOrigin(0.9329302603752594, 1.025409684441528);

        // l13
        const l13 = this.add.image(0, 0, "eco-L11toL30", "L13");
        l13.setOrigin(0, 0);

        // l14
        const l14 = this.add.image(0, 0, "eco-L11toL30", "L14");
        l14.setOrigin(0, 0);

        // l15
        const l15 = this.add.image(0, 0, "eco-L11toL30", "L15");
        l15.setOrigin(0, 0);

        // l16
        const l16 = this.add.image(1249.8662109375, 346.26898193359375, "eco-L11toL30", "L16");
        l16.setOrigin(0.8222803922842403, 0.36069687392415556);

        // l17
        const l17 = this.add.image(1246.568359375, 179.7301025390625, "eco-L11toL30", "L17");
        l17.setOrigin(0.8201107870275537, 0.18721885360825216);

        // l18_L10001
        const l18_L10001 = this.add.sprite(1470, 111, "eco-L11toL30", "L18/L10001");

        // l19
        const l19 = this.add.image(1232.9111328125, 490.00311279296875, "eco-L11toL30", "L19");
        l19.setOrigin(0.8111257083331886, 0.5104199168891539);

        // l20
        const l20 = this.add.image(1278.0726318359375, 465.16424560546875, "eco-L11toL30", "L20");
        l20.setOrigin(0.8408372727409977, 0.48454609621735345);

        // l21
        const l21 = this.add.image(1311.94384765625, 444.841552734375, "eco-L11toL30", "L21");
        l21.setOrigin(0.8631209460468546, 0.46337660657678953);

        // l22
        const l22 = this.add.image(1345.8150634765625, 413.2284240722656, "eco-L11toL30", "L22");
        l22.setOrigin(0.8854046193527113, 0.43044628935813445);

        // l23
        const l23 = this.add.image(1393.234619140625, 386.1315002441406, "eco-L11toL30", "L23");
        l23.setOrigin(0.9166017619809109, 0.4022203031707158);

        // l24
        const l24 = this.add.image(1185.491455078125, 514.8419799804688, "eco-L11toL30", "L24");
        l24.setOrigin(0.779928565704989, 0.5362937375609544);

        // l25
        const l25 = this.add.image(1316.4600830078125, 573.5520629882812, "eco-L11toL30", "L25");
        l25.setOrigin(0.8660921024876355, 0.597450040967028);

        // l26
        const l26 = this.add.image(1287.10498046875, 598.390869140625, "eco-L11toL30", "L26");
        l26.setOrigin(0.8467795856225595, 0.6233238616388286);

        // l27
        const l27 = this.add.image(1370.6539306640625, 548.7131958007812, "eco-L11toL30", "L27");
        l27.setOrigin(0.9017459797770064, 0.5715762202952277);

        // l28
        const l28 = this.add.image(1426.3731689453125, 534.3234252929688, "eco-L11toL30", "L28");
        l28.setOrigin(0.9387913467703016, 0.5582368122951054);

        // l29
        const l29 = this.add.image(1463.235107421875, 496.77734375, "eco-L11toL30", "L29");
        l29.setOrigin(0.962654686813015, 0.5174764134360086);

        // l30
        const l30 = this.add.image(1232.9111328125, 627.7459106445312, "eco-L11toL30", "L30");
        l30.setOrigin(0.8111257083331886, 0.6539020133418654);

        // rectangle_invalid
        const rectangle_invalid = this.add.rectangle(-184, -95, 128, 128);
        rectangle_invalid.isFilled = true;

        // rectangle_1
        const rectangle_1 = this.add.rectangle(807, 411, 50, 100);

        // rectangle_2
        const rectangle_2 = this.add.rectangle(1468, 178, 100, 150);

        // flap_flap0001
        const flap_flap0001 = this.add.sprite(833, 144, "eco-flap", "flap/flap0001");

        // flap_flap
        const flap_flap = this.add.sprite(670, 144, "eco-flap", "flap/flap0001");
        flap_flap.flipX = true;

        // rectangle_3
        const rectangle_3 = this.add.rectangle(347, 793, 70, 50);

        // rectangle
        const rectangle = this.add.rectangle(1400, 865, 100, 80);

        // computer
        const computer = this.add.sprite(421, 669, "eco-computer", "static");

        // rectangle_4
        const rectangle_4 = this.add.rectangle(432, 714, 75, 75);

        // lists
        const sort = [l, l3, l5, l_1, l10_L30001, l10_L10001, l20, l21, l22, l23, l24, l25, l26, l27, l29, l30, l12, computer, l28];

        // l2 (components)
        const l2Button = new Button(l2);
        l2Button.spriteName = "L2";
        const l2MoveTo = new MoveTo(l2);
        l2MoveTo.x = 136;
        l2MoveTo.y = 550;

        // l3_redlight_mc0001 (components)
        const l3_redlight_mc0001Animation = new Animation(l3_redlight_mc0001);
        l3_redlight_mc0001Animation.key = "L3-redlight_mc";
        l3_redlight_mc0001Animation.end = 35;
        l3_redlight_mc0001Animation.autoPlay = false;

        // belt2 (components)
        const belt2Animation = new Animation(belt2);
        belt2Animation.key = "L1";
        belt2Animation.end = 130;
        belt2Animation.autoPlay = false;

        // l7_L2_variant1 (components)
        const l7_L2_variant1Animation = new Animation(l7_L2_variant1);
        l7_L2_variant1Animation.key = "variant1";
        l7_L2_variant1Animation.end = 250;
        l7_L2_variant1Animation.repeat = 0;
        l7_L2_variant1Animation.autoPlay = false;

        // l7_L2_variant2 (components)
        const l7_L2_variant2Animation = new Animation(l7_L2_variant2);
        l7_L2_variant2Animation.key = "variant2";
        l7_L2_variant2Animation.end = 250;
        l7_L2_variant2Animation.repeat = 0;
        l7_L2_variant2Animation.autoPlay = false;

        // l7_L2_variant3 (components)
        const l7_L2_variant3Animation = new Animation(l7_L2_variant3);
        l7_L2_variant3Animation.key = "variant3";
        l7_L2_variant3Animation.end = 250;
        l7_L2_variant3Animation.repeat = 0;
        l7_L2_variant3Animation.autoPlay = false;

        // l7_L2_variant4 (components)
        const l7_L2_variant4Animation = new Animation(l7_L2_variant4);
        l7_L2_variant4Animation.key = "variant4";
        l7_L2_variant4Animation.end = 250;
        l7_L2_variant4Animation.repeat = 0;
        l7_L2_variant4Animation.autoPlay = false;

        // l7_L2_variant5 (components)
        const l7_L2_variant5Animation = new Animation(l7_L2_variant5);
        l7_L2_variant5Animation.key = "variant5";
        l7_L2_variant5Animation.end = 250;
        l7_L2_variant5Animation.repeat = 0;
        l7_L2_variant5Animation.autoPlay = false;

        // belt1 (components)
        const belt1Animation = new Animation(belt1);
        belt1Animation.key = "L10/L2-belt1";
        belt1Animation.end = 130;

        // l10_L3_variant1 (components)
        const l10_L3_variant1Animation = new Animation(l10_L3_variant1);
        l10_L3_variant1Animation.key = "L10/L3/variant1";
        l10_L3_variant1Animation.end = 180;
        l10_L3_variant1Animation.repeat = 0;

        // l10_L3_variant2 (components)
        const l10_L3_variant2Animation = new Animation(l10_L3_variant2);
        l10_L3_variant2Animation.key = "L10/L3/variant2";
        l10_L3_variant2Animation.end = 180;
        l10_L3_variant2Animation.repeat = 0;
        l10_L3_variant2Animation.autoPlay = false;

        // l10_L3_variant3 (components)
        const l10_L3_variant3Animation = new Animation(l10_L3_variant3);
        l10_L3_variant3Animation.key = "L10/L3/variant3";
        l10_L3_variant3Animation.end = 180;
        l10_L3_variant3Animation.repeat = 0;
        l10_L3_variant3Animation.autoPlay = false;

        // l10_L3_variant4 (components)
        const l10_L3_variant4Animation = new Animation(l10_L3_variant4);
        l10_L3_variant4Animation.key = "L10/L3/variant4";
        l10_L3_variant4Animation.end = 180;
        l10_L3_variant4Animation.repeat = 0;
        l10_L3_variant4Animation.autoPlay = false;

        // l10_L3_variant5 (components)
        const l10_L3_variant5Animation = new Animation(l10_L3_variant5);
        l10_L3_variant5Animation.key = "L10/L3/variant5";
        l10_L3_variant5Animation.end = 180;
        l10_L3_variant5Animation.repeat = 0;
        l10_L3_variant5Animation.autoPlay = false;

        // l11_L2_gears_mc0001 (components)
        const l11_L2_gears_mc0001Animation = new Animation(l11_L2_gears_mc0001);
        l11_L2_gears_mc0001Animation.key = "L11/L2-gears_mc";
        l11_L2_gears_mc0001Animation.end = 4;
        l11_L2_gears_mc0001Animation.autoPlay = false;

        // l11_L4_lightsgauge0001 (components)
        const l11_L4_lightsgauge0001Animation = new Animation(l11_L4_lightsgauge0001);
        l11_L4_lightsgauge0001Animation.key = "L11/L4-lightsgauge";
        l11_L4_lightsgauge0001Animation.end = 9;
        l11_L4_lightsgauge0001Animation.autoPlay = false;

        // l11_L5_machinelights0001 (components)
        const l11_L5_machinelights0001Animation = new Animation(l11_L5_machinelights0001);
        l11_L5_machinelights0001Animation.key = "L11/L5-machinelights";
        l11_L5_machinelights0001Animation.end = 44;
        l11_L5_machinelights0001Animation.autoPlay = false;

        // l11_L6_whistlegauge0001 (components)
        const l11_L6_whistlegauge0001Animation = new Animation(l11_L6_whistlegauge0001);
        l11_L6_whistlegauge0001Animation.key = "L11/L6-whistlegauge";
        l11_L6_whistlegauge0001Animation.end = 10;
        l11_L6_whistlegauge0001Animation.autoPlay = false;

        // l11_L6_L20001 (components)
        const l11_L6_L20001Animation = new Animation(l11_L6_L20001);
        l11_L6_L20001Animation.key = "L11/L6/L2";
        l11_L6_L20001Animation.end = 3;
        l11_L6_L20001Animation.autoPlay = false;

        // l11_L80001 (components)
        const l11_L80001Animation = new Animation(l11_L80001);
        l11_L80001Animation.key = "L11/L8";
        l11_L80001Animation.end = 29;
        l11_L80001Animation.repeat = 0;
        l11_L80001Animation.autoPlay = false;

        // l12_L20001 (components)
        const l12_L20001HoverAnimation = new HoverAnimation(l12_L20001);
        l12_L20001HoverAnimation.key = "L12/L2";
        l12_L20001HoverAnimation.checkpoints = "10";
        l12_L20001HoverAnimation.end = 20;
        l12_L20001HoverAnimation.hoverZone = rectangle_invalid;
        l12_L20001HoverAnimation.completeCallback = () => this.onLeverComplete();
        l12_L20001HoverAnimation.clickable = true;

        // l12_L3_smalllight0001 (components)
        const l12_L3_smalllight0001Animation = new Animation(l12_L3_smalllight0001);
        l12_L3_smalllight0001Animation.key = "L12/L3-smalllight";
        l12_L3_smalllight0001Animation.end = 25;
        l12_L3_smalllight0001Animation.autoPlay = false;

        // l12_L4_pressbutton (components)
        const l12_L4_pressbuttonAnimation = new Animation(l12_L4_pressbutton);
        l12_L4_pressbuttonAnimation.key = "L12/L4-pressbutton";
        l12_L4_pressbuttonAnimation.end = 9;
        l12_L4_pressbuttonAnimation.repeat = 0;
        l12_L4_pressbuttonAnimation.autoPlay = false;
        const l12_L4_pressbuttonSimpleButton = new SimpleButton(l12_L4_pressbutton);
        l12_L4_pressbuttonSimpleButton.callback = () => {this.l12_L4_pressbutton.__Animation.play(); this.onButton()};

        // l13_L2_garbagepile0001 (components)
        const l13_L2_garbagepile0001Animation = new Animation(l13_L2_garbagepile0001);
        l13_L2_garbagepile0001Animation.key = "L13/L2-garbagepile";
        l13_L2_garbagepile0001Animation.end = 600;
        l13_L2_garbagepile0001Animation.repeat = 0;

        // l13_L40001 (components)
        const l13_L40001Animation = new Animation(l13_L40001);
        l13_L40001Animation.key = "L13/L4";
        l13_L40001Animation.end = 30;

        // l10_L10001 (components)
        const l10_L10001Animation = new Animation(l10_L10001);
        l10_L10001Animation.key = "L10/L1";
        l10_L10001Animation.end = 20;

        // l10_L30001 (components)
        const l10_L30001HoverAnimation = new HoverAnimation(l10_L30001);
        l10_L30001HoverAnimation.key = "L10/L3";
        l10_L30001HoverAnimation.checkpoints = "8";
        l10_L30001HoverAnimation.end = 16;
        l10_L30001HoverAnimation.hoverZone = rectangle_invalid;
        l10_L30001HoverAnimation.clickable = true;

        // l10_l3_rect (components)
        const l10_l3_rectZone = new Zone(l10_l3_rect);
        l10_l3_rectZone.callback = () => {this.l10_L30001.__HoverAnimation.play()};

        // l18_L10001 (components)
        const l18_L10001HoverAnimation = new HoverAnimation(l18_L10001);
        l18_L10001HoverAnimation.key = "L18/L1";
        l18_L10001HoverAnimation.checkpoints = "8";
        l18_L10001HoverAnimation.end = 16;
        l18_L10001HoverAnimation.hoverZone = rectangle_invalid;
        l18_L10001HoverAnimation.completeCallback = () => this.onLightswitchComplete();
        l18_L10001HoverAnimation.clickable = true;

        // rectangle_1 (components)
        const rectangle_1Zone = new Zone(rectangle_1);
        rectangle_1Zone.callback = () => {this.onLever()};

        // rectangle_2 (components)
        const rectangle_2Zone = new Zone(rectangle_2);
        rectangle_2Zone.callback = () => {this.onLightswitch()};

        // flap_flap0001 (components)
        const flap_flap0001Animation = new Animation(flap_flap0001);
        flap_flap0001Animation.key = "flap/flap";
        flap_flap0001Animation.end = 20;
        flap_flap0001Animation.autoPlay = false;

        // flap_flap (components)
        const flap_flapAnimation = new Animation(flap_flap);
        flap_flapAnimation.key = "flap/flap";
        flap_flapAnimation.end = 20;
        flap_flapAnimation.autoPlay = false;

        // rectangle_3 (components)
        new Zone(rectangle_3);
        const rectangle_3MoveTo = new MoveTo(rectangle_3);
        rectangle_3MoveTo.x = 344;
        rectangle_3MoveTo.y = 798;

        // rectangle (components)
        new Zone(rectangle);
        const rectangleMoveTo = new MoveTo(rectangle);
        rectangleMoveTo.x = 1404;
        rectangleMoveTo.y = 864;

        // rectangle_4 (components)
        const rectangle_4Zone = new Zone(rectangle_4);
        rectangle_4Zone.callback = () => {this.onComputer()};

        this.l3_redlight_mc0001 = l3_redlight_mc0001;
        this.l5_walllights_mc0001 = l5_walllights_mc0001;
        this.belt2 = belt2;
        this.l7_L2_variant1 = l7_L2_variant1;
        this.l7_L2_variant2 = l7_L2_variant2;
        this.l7_L2_variant3 = l7_L2_variant3;
        this.l7_L2_variant4 = l7_L2_variant4;
        this.l7_L2_variant5 = l7_L2_variant5;
        this.belt2container = belt2container;
        this.l8 = l8;
        this.belt1 = belt1;
        this.l10_L3_variant1 = l10_L3_variant1;
        this.l10_L3_variant2 = l10_L3_variant2;
        this.l10_L3_variant3 = l10_L3_variant3;
        this.l10_L3_variant4 = l10_L3_variant4;
        this.l10_L3_variant5 = l10_L3_variant5;
        this.l11_L2_gears_mc0001 = l11_L2_gears_mc0001;
        this.l11_L4_lightsgauge0001 = l11_L4_lightsgauge0001;
        this.l11_L5_machinelights0001 = l11_L5_machinelights0001;
        this.l11_L6_whistlegauge0001 = l11_L6_whistlegauge0001;
        this.l11_L6_L20001 = l11_L6_L20001;
        this.l11_L80001 = l11_L80001;
        this.l12_L20001 = l12_L20001;
        this.l12_L3_smalllight0001 = l12_L3_smalllight0001;
        this.l12_L4_pressbutton = l12_L4_pressbutton;
        this.l13_L2_garbagepile0001 = l13_L2_garbagepile0001;
        this.l10_L30001 = l10_L30001;
        this.l10_l3_rect = l10_l3_rect;
        this.l18_L10001 = l18_L10001;
        this.rectangle_invalid = rectangle_invalid;
        this.flap_flap0001 = flap_flap0001;
        this.flap_flap = flap_flap;
        this.computer = computer;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.machine2 = [
            this.l10_L3_variant1,
            this.l10_L3_variant2,
            this.l10_L3_variant3,
            this.l10_L3_variant4,
            this.l10_L3_variant5
        ]

        for(let variant of this.machine2) {
            variant.on("animationcomplete", () => {this.onJunkpileComplete()})    
        }

        this.polishedProduct = [
            this.l7_L2_variant1,
            this.l7_L2_variant2,
            this.l7_L2_variant3,
            this.l7_L2_variant4,
            this.l7_L2_variant5
        ]

        for(let variant of this.polishedProduct) {
            variant.on("animationcomplete", () => {this.onPolishedComplete()})    
        }

        this.fixedPlayCount = 0
        this.computerOn = false

        this.computer.on("animationcomplete", () => this.onComputerComplete())

        this.ballOptions = [
            "barrel",
            "can",
            "java",
            "mug",
            "newspaper",
            "pizza",
            "puffleo",
            "sauce"
        ]

        this.belt1Playing = true
        this.belt2Playing = false
        this.junkPlaying = true
        this.polishedCounter = 0
        this.thrownItems = 0
    }

    playJunkpile() {
        this.junkPlaying = true    

        let variant = this.machine2[Math.floor((Math.random()*this.machine2.length))]    
        variant.visible = true
        variant.__Animation.play()

        this.playBelt1()
    }

    playFixedItem() {
        //if(this.fixedPlayCount++ % 2 != 1) return
        this.polishedCounter++

        this.playBelt2()

        let vaiantNo = Math.floor((Math.random()*this.machine2.length))
        let variant = this.polishedProduct[vaiantNo]
        /*variant.visible = true
        variant.__Animation.play()*/
        let video = this.add.video(1520, 0).loadURL(`assets/media/rooms/eco/videos/variant${vaiantNo+1}_.mp4`, true, "anonymous")
        video.setOrigin(1,0)
        video.play()
        video.on('complete', function(video){
            video.destroy()
        });
        this.belt2container.add(video)

        this.soundManager.playSfx(`eco-variant${vaiantNo+1}`)

    }

    playJunkpileIfPossible() {
        if(this.junkPlaying) return
        this.playJunkpile()
    }

    onJunkpileComplete() {
        this.junkPlaying = false

        for(let variant of this.machine2) {
            variant.visible = false
        }

        this.l11_L2_gears_mc0001.__Animation.play()
        this.flap_flap.__Animation.play()
        this.flap_flap0001.__Animation.play()

        this.time.addEvent({
            delay: 3300, //four "flaps"
            callback: () => {
                this.playFixedItem()
                if(this.getJunkFrame() < 600) this.playJunkpileIfPossible()
                else this.stopBelt1()


                this.l11_L2_gears_mc0001.__Animation.stop()
                this.flap_flap.__Animation.stop()
                this.flap_flap0001.__Animation.stop()
            },
            loop: false
        })
    }

    playBelt1() {
        if(this.belt1Playing) return
        this.belt1Playing = true
        this.belt1.__Animation.play()
    }

    stopBelt1() {
        this.belt1.__Animation.stop()
        this.belt1Playing = false
    }

    onSnowballStart(x, y, ball) {
        ball.ecoVariant = this.ballOptions[Math.floor((Math.random()*this.ballOptions.length))]
        ball.play(`eco-snowball-${ball.ecoVariant}`)
    }

    onSnowballComplete(x, y, ball) {
        ball.setTexture("eco-snowball", `${ball.ecoVariant}0001`)
        ball.stop()

        if(x > 364 || x < 266) return;
        if(y < 120 || y > 212) return;

        this.rewindGarbage();
        this.interface.main.snowballFactory.destroyBall(ball);
        if(ball.penguin == this.world.client.penguin) this.earnStamp();
    }

    earnStamp() {
        this.thrownItems += 1;

        if(this.thrownItems == 10) this.stampEarned(362)
    }

    getJunkFrame() {
        return this.getFrame(this.l13_L2_garbagepile0001)    
    }

    getFrame(gameObject) {
        return parseInt(gameObject.frame.name.slice(-4))
    }

    rewindGarbage() {
        let nextFrame = this.getJunkFrame() - 30;
        if(nextFrame < 0) nextFrame = 0

        if(nextFrame < 380) this.playJunkpileIfPossible()

        this.l13_L2_garbagepile0001.stop()
        this.l13_L2_garbagepile0001.play({ key: this.l13_L2_garbagepile0001.__Animation.localKey, startFrame: nextFrame }, true);
    }

    onLever() {
        this.l12_L20001.__HoverAnimation.play()
        this.soundManager.playSfx(this.l12_L20001.__HoverAnimation.currentAnimation == 1 ? "eco-lever2-end" : "eco-lever2-begin")
    }

    onLeverComplete() {
        let components = [
            this.l11_L6_L20001,
            this.l11_L5_machinelights0001,
            this.l11_L4_lightsgauge0001,
            this.l11_L6_whistlegauge0001
        ]

        let leverPulled = (this.l12_L20001.__HoverAnimation.currentAnimation == 1)

        for(let component of components) {
            leverPulled ? component.__Animation.play() : component.__Animation.stop()
        }

        leverPulled ? this.l12_L3_smalllight0001.__Animation.play() : this.l12_L3_smalllight0001.__Animation.stop()
    }

    onLightswitch() {
        this.l18_L10001.__HoverAnimation.play()
        this.soundManager.playSfx(this.l18_L10001.__HoverAnimation.currentAnimation == 1 ? "eco-lever1-end" : "eco-lever1-begin")
    }

    playAlarm() {
        this.soundManager.playSfx("eco-alarm")    
    }

    onLightswitchComplete() {
        this.l3_redlight_mc0001.on("animationrepeat", () => this.playAlarm())

        if(this.l18_L10001.__HoverAnimation.currentAnimation == 1) {
            this.l3_redlight_mc0001.__Animation.play() 
            this.playAlarm()
        } else { 
            this.l3_redlight_mc0001.__Animation.stop()
        }
    }

    onButton() {
        let leverPulled = (this.l12_L20001.__HoverAnimation.currentAnimation == 1)

        this.l12_L4_pressbutton.__Animation.play()
        if(leverPulled) {
            this.l11_L80001.__Animation.play()
            this.time.addEvent({
                delay: 216,
                callback: () => this.soundManager.playSfx("eco-choo"),
                loop: false
            })

        }
    }

    onComputer() {

        this.computerOn = !this.computerOn
        if(this.computerOn) {
            this.l5_walllights_mc0001.play("eco-walllights-operating")
            this.computer.play("eco-computer-startup")
        } else {

            this.l5_walllights_mc0001.play("eco-walllights-shutdown")
            this.computer.play("eco-computer-shutdown")
        }

    }

    onComputerComplete() {
        if(this.computerOn) this.computer.play("eco-computer-operating")    
    }

    onPolishedComplete() {
        this.time.addEvent({
            delay: 500,
            callback: () => {
                this.polishedCounter--;
                if(this.polishedCounter <= 0) this.stopBelt2()
            },
            loop: false
        })
    }

    playBelt2() {
        /*if(this.belt2Playing) return
        this.belt2Playing = true
        this.belt2.__Animation.play()*/
    }

    stopBelt2() {
        /*this.belt2.__Animation.stop()
        this.belt2Playing = false*/
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
