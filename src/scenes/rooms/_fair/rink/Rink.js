import RoomScene from '@rooms/RoomScene'
import { MoveTo, Button, SimpleButton, SnackStampArea, Animation, ZoneTrigger } from '@components/components'

import RoomPin from '@rooms/RoomPin'



/* START OF COMPILED CODE */

export default class Rink extends RoomScene {

    constructor() {
        super("Rink");

        /** @type {Phaser.GameObjects.Sprite} */
        this.fish;
        /** @type {Phaser.GameObjects.Sprite} */
        this.tubes;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bush;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bowlingPin;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 560, 400)
        }

        this.music = 311;

        this.shouldSlide = true;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("rink-pack", "assets/media/rooms/rink/ice_rink/rink-pack.json");
        this.load.pack("fair-rink-pack", "assets/media/rooms/_fair/rink/fair-rink-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(763, 410, "fair-rink", "background");

        // fish
        const fish = this.add.sprite(829, 635, "fair-rink", "fish0001");
        fish.setOrigin(0.5, 0.4379007698328094);

        // tubes
        const tubes = this.add.sprite(437, 523, "fair-rink", "tubes0001");
        tubes.setOrigin(0.5, 0.36033359955071415);

        // haybale_1
        const haybale_1 = this.add.image(512, 680, "fair-rink", "haybale");
        haybale_1.angle = 17;

        // bush
        const bush = this.add.sprite(443, 733, "fair-rink", "bush0001");
        bush.setOrigin(0.5, 0.43162774538675125);

        // trashcan
        this.add.image(886, 93, "fair-rink", "trashcan");

        // snackint
        this.add.image(1060, 168, "fair-rink", "snackint");

        // sportint
        const sportint = this.add.image(1365, 208, "fair-rink", "sportint");

        // haybale_6
        const haybale_6 = this.add.image(265, 727, "fair-rink", "haybale");

        // haybale_7
        const haybale_7 = this.add.image(1146, 799, "fair-rink", "haybale");

        // bleachers
        this.add.image(485, 132, "fair-rink", "bleachers");

        // stadium
        const stadium = this.add.image(575, 169.5550922956793, "rink_ice", "stadium");
        stadium.setOrigin(0.613973806863984, 0.7986513148919162);

        // fish0001
        const fish0001 = this.add.image(174, 243, "rink_ice", "fish0001");
        fish0001.setOrigin(0.6398925235787399, 0.8097563228643782);

        // balloons
        this.add.image(30, 202, "fair-rink", "balloons");

        // left
        const left = this.add.image(83, 334, "rink_ice", "left");
        left.setOrigin(0.4875081051148115, 0.2657698706880835);

        // left1
        const left1 = this.add.image(-41, 569, "rink_ice", "left1");
        left1.setOrigin(0.7249515685422483, 0.725024498212711);

        // bdoor
        const bdoor = this.add.sprite(1250, 168, "rink_ice", "bdoor");

        // snacksfront
        const snacksfront = this.add.image(1034, 217, "rink_ice", "snacksfront");
        snacksfront.setOrigin(0.32035254811697256, 0.8112632920604352);

        // sports
        const sports = this.add.image(1348, 280, "rink_ice", "sports");
        sports.setOrigin(0.1972005830890142, 0.9254745553365679);

        // balloons_1
        this.add.image(1451, 221, "fair-rink", "balloons");

        // rdoor
        const rdoor = this.add.sprite(1336, 280, "rink_ice", "rdoor");
        rdoor.setOrigin(0.1702159344239874, 0.6300877209347115);

        // ring
        const ring = this.add.image(525, 334, "fair-rink", "wall");
        ring.setOrigin(0.5090900358726447, 0.5103059340506174);

        // ring_1
        const ring_1 = this.add.image(1052, 328, "fair-rink", "wall");
        ring_1.setOrigin(0.5090900358726447, 0.48151091335495755);
        ring_1.flipX = true;

        // door
        const door = this.add.sprite(780, 347, "fair-rink", "door");
        door.setOrigin(0.47872689156030207, 0.656381042889066);

        // right2
        const right2 = this.add.image(1391, 388, "rink_ice", "right2");
        right2.setOrigin(0.17965827568548742, 0.41584695229624274);

        // right
        const right = this.add.image(1560, 570, "rink_ice", "right");
        right.setOrigin(0.29548807113653597, 0.7328282923701663);

        // snackStampArea
        const snackStampArea = this.add.rectangle(130, 234, 200, 200);
        snackStampArea.setOrigin(0.5, 0.7655407438542048);

        // fg
        const fg = this.add.image(786, 962, "fair-rink", "foreground");
        fg.setOrigin(0.5070371247764893, 0.923225769263412);

        // bowlingPin
        const bowlingPin = this.add.sprite(1074, 449, "fair-rink", "bowlingPin0001");
        bowlingPin.setOrigin(0.5, 0.4546084198539821);

        // haybale
        const haybale = this.add.image(387, 370, "fair-rink", "haybale");
        haybale.setOrigin(0.5, 0.6052103964471095);

        // haybale_2
        const haybale_2 = this.add.image(740, 485, "fair-rink", "haybale");
        haybale_2.angle = 19;

        // haybale_3
        const haybale_3 = this.add.image(911, 367, "fair-rink", "haybale");
        haybale_3.angle = 19;

        // haybale_4
        const haybale_4 = this.add.image(1080, 622, "fair-rink", "haybale");

        // haybale_5
        const haybale_5 = this.add.image(1215, 419, "fair-rink", "haybale");
        haybale_5.angle = 19;

        // streamers
        this.add.image(787, 29, "fair-rink", "streamers");

        // lights
        const lights = this.add.container(488, 1100);

        // pinkLight
        const pinkLight = this.add.sprite(0, -240.76194790593615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight);

        // yellowLight
        const yellowLight = this.add.sprite(6, -220.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight);

        // yellowLight_1
        const yellowLight_1 = this.add.sprite(5, -258.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight_1);

        // yellowLight_2
        const yellowLight_2 = this.add.sprite(52, -235.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight_2);

        // yellowLight_3
        const yellowLight_3 = this.add.sprite(42, -281.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight_3);

        // yellowLight_4
        const yellowLight_4 = this.add.sprite(77, -306.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight_4);

        // yellowLight_5
        const yellowLight_5 = this.add.sprite(121, -302.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight_5);

        // yellowLight_6
        const yellowLight_6 = this.add.sprite(167, -299.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight_6);

        // yellowLight_7
        const yellowLight_7 = this.add.sprite(203, -285.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight_7);

        // yellowLight_8
        const yellowLight_8 = this.add.sprite(239, -305.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight_8);

        // yellowLight_9
        const yellowLight_9 = this.add.sprite(277, -311.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight_9);

        // yellowLight_10
        const yellowLight_10 = this.add.sprite(314, -306.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight_10);

        // yellowLight_11
        const yellowLight_11 = this.add.sprite(350, -285.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight_11);

        // yellowLight_12
        const yellowLight_12 = this.add.sprite(387, -299.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight_12);

        // yellowLight_13
        const yellowLight_13 = this.add.sprite(432, -302.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight_13);

        // yellowLight_14
        const yellowLight_14 = this.add.sprite(477, -306.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight_14);

        // yellowLight_15
        const yellowLight_15 = this.add.sprite(511, -281.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight_15);

        // yellowLight_16
        const yellowLight_16 = this.add.sprite(501, -235.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight_16);

        // yellowLight_17
        const yellowLight_17 = this.add.sprite(547, -219.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight_17);

        // yellowLight_18
        const yellowLight_18 = this.add.sprite(549, -258.76194790593615, "fair-rink", "yellowLight0001");
        lights.add(yellowLight_18);

        // pinkLight_1
        const pinkLight_1 = this.add.sprite(21, -270.76194790593615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_1);

        // pinkLight_2
        const pinkLight_2 = this.add.sprite(44, -259.76194790593615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_2);

        // pinkLight_3
        const pinkLight_3 = this.add.sprite(66, -212.76194790593615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_3);

        // pinkLight_4
        const pinkLight_4 = this.add.sprite(55, -299.76194790593615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_4);

        // pinkLight_5
        const pinkLight_5 = this.add.sprite(99, -306.76194790593615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_5);

        // pinkLight_6
        const pinkLight_6 = this.add.sprite(144, -299.76194790593615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_6);

        // pinkLight_7
        const pinkLight_7 = this.add.sprite(190, -303.76194790593615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_7);

        // pinkLight_8
        const pinkLight_8 = this.add.sprite(220, -296.76194790593615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_8);

        // pinkLight_9
        const pinkLight_9 = this.add.sprite(260, -310.76194790593615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_9);

        // pinkLight_10
        const pinkLight_10 = this.add.sprite(293.11614990234375, -310.87376431218615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_10);

        // pinkLight_11
        const pinkLight_11 = this.add.sprite(334, -296.76194790593615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_11);

        // pinkLight_12
        const pinkLight_12 = this.add.sprite(364, -303.76194790593615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_12);

        // pinkLight_13
        const pinkLight_13 = this.add.sprite(409, -299.76194790593615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_13);

        // pinkLight_14
        const pinkLight_14 = this.add.sprite(454.291015625, -306.5588839410924, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_14);

        // pinkLight_15
        const pinkLight_15 = this.add.sprite(499, -299.76194790593615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_15);

        // pinkLight_16
        const pinkLight_16 = this.add.sprite(510, -258.76194790593615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_16);

        // pinkLight_17
        const pinkLight_17 = this.add.sprite(487, -212.76194790593615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_17);

        // pinkLight_18
        const pinkLight_18 = this.add.sprite(533, -268.76194790593615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_18);

        // pinkLight_19
        const pinkLight_19 = this.add.sprite(554, -238.76194790593615, "fair-rink", "pinkLight0001");
        lights.add(pinkLight_19);

        // triggers
        const triggers = this.add.container(421, 475);

        // tubesTrigger
        const tubesTrigger = this.add.rectangle(16, 83, 128, 128);
        tubesTrigger.scaleX = 1.3708910789218447;
        tubesTrigger.scaleY = 0.5565814276195795;
        tubesTrigger.setOrigin(0.5, 0.9578866556358108);
        triggers.add(tubesTrigger);

        // bushTrigger
        const bushTrigger = this.add.rectangle(23, 286, 128, 128);
        bushTrigger.scaleX = 1.3708910789218447;
        bushTrigger.scaleY = 0.5565814276195795;
        bushTrigger.setOrigin(0.5, 0.9578866556358108);
        triggers.add(bushTrigger);

        // fishTrigger
        const fishTrigger = this.add.rectangle(408, 192, 128, 128);
        fishTrigger.scaleX = 1.3708910789218447;
        fishTrigger.scaleY = 0.5565814276195795;
        fishTrigger.setOrigin(0.5, 0.9578866556358108);
        triggers.add(fishTrigger);

        // bowlingPinTrigger
        const bowlingPinTrigger = this.add.rectangle(649, 0, 128, 128);
        bowlingPinTrigger.scaleX = 1.3708910789218447;
        bowlingPinTrigger.scaleY = 0.5565814276195795;
        bowlingPinTrigger.setOrigin(0.5, 0.9578866556358108);
        triggers.add(bowlingPinTrigger);

        // streamers_1
        const streamers_1 = this.add.image(348, 34, "fair-rink", "streamers");
        streamers_1.angle = -25;
        streamers_1.setOrigin(0.04132430303312393, 0.7725546685345426);

        // lists
        const sort = [ring, door, stadium, snacksfront, rdoor, sports, right2, right, left1, left, fg, fish0001, haybale_1, haybale_6, haybale, haybale_2, haybale_3, haybale_5, haybale_4, fish, haybale_7, bowlingPin, tubes, bush, lights, ring_1];

        // sportint (components)
        const sportintButton = new Button(sportint);
        sportintButton.spriteName = "sportint";

        // bdoor (components)
        const bdoorButton = new Button(bdoor);
        bdoorButton.spriteName = "bdoor";
        const bdoorMoveTo = new MoveTo(bdoor);
        bdoorMoveTo.x = 1210;
        bdoorMoveTo.y = 218;

        // rdoor (components)
        const rdoorButton = new Button(rdoor);
        rdoorButton.spriteName = "rdoor";
        const rdoorMoveTo = new MoveTo(rdoor);
        rdoorMoveTo.x = 1367;
        rdoorMoveTo.y = 232;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 794;
        doorMoveTo.y = 175;

        // snackStampArea (components)
        new SnackStampArea(snackStampArea);

        // pinkLight (components)
        const pinkLightAnimation = new Animation(pinkLight);
        pinkLightAnimation.key = "pinkLight";
        pinkLightAnimation.end = 20;

        // yellowLight (components)
        const yellowLightAnimation = new Animation(yellowLight);
        yellowLightAnimation.key = "yellowLight";
        yellowLightAnimation.end = 20;

        // yellowLight_1 (components)
        const yellowLight_1Animation = new Animation(yellowLight_1);
        yellowLight_1Animation.key = "yellowLight";
        yellowLight_1Animation.end = 20;

        // yellowLight_2 (components)
        const yellowLight_2Animation = new Animation(yellowLight_2);
        yellowLight_2Animation.key = "yellowLight";
        yellowLight_2Animation.end = 20;

        // yellowLight_3 (components)
        const yellowLight_3Animation = new Animation(yellowLight_3);
        yellowLight_3Animation.key = "yellowLight";
        yellowLight_3Animation.end = 20;

        // yellowLight_4 (components)
        const yellowLight_4Animation = new Animation(yellowLight_4);
        yellowLight_4Animation.key = "yellowLight";
        yellowLight_4Animation.end = 20;

        // yellowLight_5 (components)
        const yellowLight_5Animation = new Animation(yellowLight_5);
        yellowLight_5Animation.key = "yellowLight";
        yellowLight_5Animation.end = 20;

        // yellowLight_6 (components)
        const yellowLight_6Animation = new Animation(yellowLight_6);
        yellowLight_6Animation.key = "yellowLight";
        yellowLight_6Animation.end = 20;

        // yellowLight_7 (components)
        const yellowLight_7Animation = new Animation(yellowLight_7);
        yellowLight_7Animation.key = "yellowLight";
        yellowLight_7Animation.end = 20;

        // yellowLight_8 (components)
        const yellowLight_8Animation = new Animation(yellowLight_8);
        yellowLight_8Animation.key = "yellowLight";
        yellowLight_8Animation.end = 20;

        // yellowLight_9 (components)
        const yellowLight_9Animation = new Animation(yellowLight_9);
        yellowLight_9Animation.key = "yellowLight";
        yellowLight_9Animation.end = 20;

        // yellowLight_10 (components)
        const yellowLight_10Animation = new Animation(yellowLight_10);
        yellowLight_10Animation.key = "yellowLight";
        yellowLight_10Animation.end = 20;

        // yellowLight_11 (components)
        const yellowLight_11Animation = new Animation(yellowLight_11);
        yellowLight_11Animation.key = "yellowLight";
        yellowLight_11Animation.end = 20;

        // yellowLight_12 (components)
        const yellowLight_12Animation = new Animation(yellowLight_12);
        yellowLight_12Animation.key = "yellowLight";
        yellowLight_12Animation.end = 20;

        // yellowLight_13 (components)
        const yellowLight_13Animation = new Animation(yellowLight_13);
        yellowLight_13Animation.key = "yellowLight";
        yellowLight_13Animation.end = 20;

        // yellowLight_14 (components)
        const yellowLight_14Animation = new Animation(yellowLight_14);
        yellowLight_14Animation.key = "yellowLight";
        yellowLight_14Animation.end = 20;

        // yellowLight_15 (components)
        const yellowLight_15Animation = new Animation(yellowLight_15);
        yellowLight_15Animation.key = "yellowLight";
        yellowLight_15Animation.end = 20;

        // yellowLight_16 (components)
        const yellowLight_16Animation = new Animation(yellowLight_16);
        yellowLight_16Animation.key = "yellowLight";
        yellowLight_16Animation.end = 20;

        // yellowLight_17 (components)
        const yellowLight_17Animation = new Animation(yellowLight_17);
        yellowLight_17Animation.key = "yellowLight";
        yellowLight_17Animation.end = 20;

        // yellowLight_18 (components)
        const yellowLight_18Animation = new Animation(yellowLight_18);
        yellowLight_18Animation.key = "yellowLight";
        yellowLight_18Animation.end = 20;

        // pinkLight_1 (components)
        const pinkLight_1Animation = new Animation(pinkLight_1);
        pinkLight_1Animation.key = "pinkLight";
        pinkLight_1Animation.end = 20;

        // pinkLight_2 (components)
        const pinkLight_2Animation = new Animation(pinkLight_2);
        pinkLight_2Animation.key = "pinkLight";
        pinkLight_2Animation.end = 20;

        // pinkLight_3 (components)
        const pinkLight_3Animation = new Animation(pinkLight_3);
        pinkLight_3Animation.key = "pinkLight";
        pinkLight_3Animation.end = 20;

        // pinkLight_4 (components)
        const pinkLight_4Animation = new Animation(pinkLight_4);
        pinkLight_4Animation.key = "pinkLight";
        pinkLight_4Animation.end = 20;

        // pinkLight_5 (components)
        const pinkLight_5Animation = new Animation(pinkLight_5);
        pinkLight_5Animation.key = "pinkLight";
        pinkLight_5Animation.end = 20;

        // pinkLight_6 (components)
        const pinkLight_6Animation = new Animation(pinkLight_6);
        pinkLight_6Animation.key = "pinkLight";
        pinkLight_6Animation.end = 20;

        // pinkLight_7 (components)
        const pinkLight_7Animation = new Animation(pinkLight_7);
        pinkLight_7Animation.key = "pinkLight";
        pinkLight_7Animation.end = 20;

        // pinkLight_8 (components)
        const pinkLight_8Animation = new Animation(pinkLight_8);
        pinkLight_8Animation.key = "pinkLight";
        pinkLight_8Animation.end = 20;

        // pinkLight_9 (components)
        const pinkLight_9Animation = new Animation(pinkLight_9);
        pinkLight_9Animation.key = "pinkLight";
        pinkLight_9Animation.end = 20;

        // pinkLight_10 (components)
        const pinkLight_10Animation = new Animation(pinkLight_10);
        pinkLight_10Animation.key = "pinkLight";
        pinkLight_10Animation.end = 20;

        // pinkLight_11 (components)
        const pinkLight_11Animation = new Animation(pinkLight_11);
        pinkLight_11Animation.key = "pinkLight";
        pinkLight_11Animation.end = 20;

        // pinkLight_12 (components)
        const pinkLight_12Animation = new Animation(pinkLight_12);
        pinkLight_12Animation.key = "pinkLight";
        pinkLight_12Animation.end = 20;

        // pinkLight_13 (components)
        const pinkLight_13Animation = new Animation(pinkLight_13);
        pinkLight_13Animation.key = "pinkLight";
        pinkLight_13Animation.end = 20;

        // pinkLight_14 (components)
        const pinkLight_14Animation = new Animation(pinkLight_14);
        pinkLight_14Animation.key = "pinkLight";
        pinkLight_14Animation.end = 20;

        // pinkLight_15 (components)
        const pinkLight_15Animation = new Animation(pinkLight_15);
        pinkLight_15Animation.key = "pinkLight";
        pinkLight_15Animation.end = 20;

        // pinkLight_16 (components)
        const pinkLight_16Animation = new Animation(pinkLight_16);
        pinkLight_16Animation.key = "pinkLight";
        pinkLight_16Animation.end = 20;

        // pinkLight_17 (components)
        const pinkLight_17Animation = new Animation(pinkLight_17);
        pinkLight_17Animation.key = "pinkLight";
        pinkLight_17Animation.end = 20;

        // pinkLight_18 (components)
        const pinkLight_18Animation = new Animation(pinkLight_18);
        pinkLight_18Animation.key = "pinkLight";
        pinkLight_18Animation.end = 20;

        // pinkLight_19 (components)
        const pinkLight_19Animation = new Animation(pinkLight_19);
        pinkLight_19Animation.key = "pinkLight\npinkLight";
        pinkLight_19Animation.end = 20;

        // tubesTrigger (components)
        const tubesTriggerZoneTrigger = new ZoneTrigger(tubesTrigger);
        tubesTriggerZoneTrigger.callback = () => this.tubesTrigger();

        // bushTrigger (components)
        const bushTriggerZoneTrigger = new ZoneTrigger(bushTrigger);
        bushTriggerZoneTrigger.callback = () => this.bushTrigger();

        // fishTrigger (components)
        const fishTriggerZoneTrigger = new ZoneTrigger(fishTrigger);
        fishTriggerZoneTrigger.callback = () => this.fishTrigger();

        // bowlingPinTrigger (components)
        const bowlingPinTriggerZoneTrigger = new ZoneTrigger(bowlingPinTrigger);
        bowlingPinTriggerZoneTrigger.callback = () => this.bowlingPinTrigger();

        this.fish = fish;
        this.tubes = tubes;
        this.bush = bush;
        this.bowlingPin = bowlingPin;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()

        this.fishDown = false;
        this.tubesDown = false;
        this.bowlingPinDown = false;
        this.bushDown = false;
    }

    update() {
        super.update()
        this.checkPenguinDanceQuest(15, { body: [4414, 3243, 4715, 4415, 4994, 24277, 4421, 14437] }, 64, true, null)
    }

    fishTrigger() {
        if (this.fishDown) return;

        this.fish.play('fair-rink-fishDown');
        this.fishDown = true;

        this.time.addEvent({
            delay: 10000,
            callback: () => {
                this.fish.play('fair-rink-fishUp');
                this.fishDown = false;
            }
        })
    }

    bushTrigger() {
        if (this.bushDown) return;

        this.bush.play('fair-rink-bushDown');
        this.bushDown = true;

        this.time.addEvent({
            delay: 10000,
            callback: () => {
                this.bush.play('fair-rink-bushUp');
                this.bushDown = false;
            }
        })
    }

    tubesTrigger() {
        if (this.tubesDown) return;

        this.tubes.play('fair-rink-tubesDown');
        this.tubesDown = true;

        this.time.addEvent({
            delay: 10000,
            callback: () => {
                this.tubes.play('fair-rink-tubesUp');
                this.tubesDown = false;
            }
        })
    }

    bowlingPinTrigger() {
        if (this.bowlingPinDown) return;

        this.bowlingPin.play('fair-rink-bowlingPinDown');
        this.bowlingPinDown = true;

        this.time.addEvent({
            delay: 10000,
            callback: () => {
                this.bowlingPin.play('fair-rink-bowlingPinUp');
                this.bowlingPinDown = false;
            }
        })
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
