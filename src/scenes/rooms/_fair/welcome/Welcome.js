import RoomScene from '@rooms/RoomScene'

import { Animation, Button, SimpleButton, ShowHint, MoveTo } from '@components/components'

import RoomPin from '@rooms/RoomPin'

// You can write more code here

/* START OF COMPILED CODE */

export default class Welcome extends RoomScene {

    constructor() {
        super("Welcome");

        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 870, 330),
            'town': () => this.triggerRoom(100, 760, 660),
            'welcome': () => this.triggerRoom(2, 775, 440),
            'notice': () => this.interface.loadWidget('CommunityEvents')
        }
        this.music = 297
        this.physicsKey = 'fair-welcome-physics'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("welcome-pack", "assets/media/rooms/welcome/welcome-pack.json");
        this.load.pack("fair-welcome-pack", "assets/media/rooms/_fair/welcome/fair-welcome-pack.json");
    }

    /** @returns {void} */
    _create() {

        // background
        const background = this.add.image(-1, 0, "welcome", "background");
        background.setOrigin(0, 0);
        background.visible = false;

        // backgroundWelcome
        this.add.image(759, 499, "fair-welcome", "backgroundWelcome");

        // floorConfetti
        this.add.image(823, 685, "fair-welcome", "floorConfetti");

        // noticeboardoutline0001
        const noticeboardoutline0001 = this.add.sprite(778, 333, "welcome", "noticeboardoutline");
        noticeboardoutline0001.setOrigin(0.506896551724138, 0.4037464142806126);

        // snowBarrierCarousel
        this.add.image(454, 448, "fair-welcome", "snowBarrierCarousel");

        // backRopes
        this.add.image(222, 363, "fair-welcome", "backRopes");

        // carouselBase
        const carouselBase = this.add.sprite(202, 457, "fair-welcome", "carouselBase0001");

        // carouselBackPoles0001
        this.add.image(179, 289, "fair-welcome", "carouselBackPoles0001");

        // horseLeftBack
        const horseLeftBack = this.add.sprite(197.10726971026165, 414.60549376659856, "fair-welcome", "horseLeftBack0001");
        horseLeftBack.setOrigin(0.48651129101812457, 0.7383124834218047);

        // horseBackBack
        const horseBackBack = this.add.sprite(204, 325, "fair-welcome", "horseBackBack0001");

        // horseRightBack
        const horseRightBack = this.add.sprite(205.72318257243455, 361.1868340211263, "fair-welcome", "horseRightBack0001");
        horseRightBack.setOrigin(0.5033721772454688, 0.5962415798434211);

        // horseFrontBack
        const horseFrontBack = this.add.sprite(204, 325, "fair-welcome", "horseFrontBack0001");

        // grandstandR
        const grandstandR = this.add.image(438.3354797363281, 453.64676081435744, "welcome", "grandstandR");
        grandstandR.setOrigin(0.4372135679257684, 0.7715379028167627);
        grandstandR.visible = false;

        // carouselMiddle
        const carouselMiddle = this.add.sprite(203.98169603045469, 415.5464567003062, "fair-welcome", "carouselMiddle0001");
        carouselMiddle.setOrigin(0.5247310181759315, 0.8989938962374956);

        // horseLeft
        const horseLeft = this.add.sprite(234.13037109375, 468.78757161187184, "fair-welcome", "horseLeft0001");
        horseLeft.setOrigin(0.5588417903533589, 0.8824137898144649);

        // horseFront
        const horseFront = this.add.sprite(231.9668731689453, 469.13920830168746, "fair-welcome", "horseFront0001");
        horseFront.setOrigin(0.5547347645230194, 0.883348866102235);

        // horseBack
        const horseBack = this.add.sprite(230.5446253806781, 468.3409773735906, "fair-welcome", "horseBack0001");
        horseBack.setOrigin(0.5518449729990231, 0.8812260142226036);

        // horseRight
        const horseRight = this.add.sprite(233.1990966796875, 468.3409773735906, "fair-welcome", "horseRight0001");
        horseRight.setOrigin(0.5570294702989252, 0.8812260142226036);

        // topOfGazebo
        const topOfGazebo = this.add.sprite(220.9601593017578, 473.3147633038623, "fair-welcome", "topOfGazebo0001");
        topOfGazebo.setOrigin(0.5379116550459198, 0.9236822451797774);

        // frontRopes
        const frontRopes = this.add.image(216, 505, "fair-welcome", "frontRopes");

        // leftTrees
        const leftTrees = this.add.image(159, 551, "fair-welcome", "leftTrees");

        // grandstandL_1
        const grandstandL_1 = this.add.image(213, 527.1116506690049, "welcome", "grandstandL");
        grandstandL_1.setOrigin(0.5, 0.6701924442197558);
        grandstandL_1.visible = false;

        // tourhq_door
        const tourhq_door = this.add.sprite(1283, 467, "welcome", "tourhq_door");
        tourhq_door.setOrigin(0.47540983606557374, 0.7905405405405406);

        // floorOfTour
        this.add.image(1312, 440, "fair-welcome", "floorOfTour");

        // tourDoor
        const tourDoor = this.add.image(1307, 432, "fair-welcome", "tourDoor");

        // hatty
        this.add.image(1336, 202, "fair-welcome", "hatty");

        // tickets
        this.add.image(775, 609, "fair-welcome", "tickets");

        // snowBarrierTent
        this.add.image(1094, 465, "fair-welcome", "snowBarrierTent");

        // tourhqL
        const tourhqL = this.add.image(1112.946238989188, 461.8387169675641, "welcome", "tourhqL");
        tourhqL.setOrigin(0.6540567180835276, 0.7455976665099715);
        tourhqL.visible = false;

        // tourhqR
        const tourhqR = this.add.image(1306, 543, "welcome", "tourhqR");
        tourhqR.setOrigin(0.44923512285373957, 0.5153622230965647);
        tourhqR.visible = false;

        // treesTent
        this.add.image(1390, 581, "fair-welcome", "treesTent");

        // extraFlyer
        this.add.image(1406, 550, "fair-welcome", "extraFlyer");

        // fishwater0001
        const fishwater0001 = this.add.sprite(664, 128, "welcome", "fishwater0001");

        // foreground
        const foreground = this.add.image(-11, 974, "welcome", "foreground");
        foreground.setOrigin(0, 1);

        // treeDecorations
        this.add.image(868, 684, "fair-welcome", "treeDecorations");

        // wf_bottomL0001
        const wf_bottomL0001 = this.add.sprite(663, 384, "welcome", "wf_bottom0001");

        // wf_bottomR0001
        const wf_bottomR0001 = this.add.sprite(892.5, 384, "welcome", "wf_bottom0001");
        wf_bottomR0001.flipX = true;

        // wf_topL0001
        const wf_topL0001 = this.add.sprite(664, 255, "welcome", "wf_top0001");

        // wf_topR0001
        const wf_topR0001 = this.add.sprite(891, 255, "welcome", "wf_top0001");
        wf_topR0001.flipX = true;

        // nc_lights0001
        const nc_lights0001 = this.add.sprite(542, 178, "welcome", "nc_lights0001");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(937, 394, 128, 128);
        rectangle_1.visible = false;
        rectangle_1.isFilled = true;

        // rectangle
        const rectangle = this.add.rectangle(680, 421, 128, 128);
        rectangle.visible = false;
        rectangle.isFilled = true;

        // rectangle_2
        const rectangle_2 = this.add.rectangle(865, 623, 128, 128);
        rectangle_2.visible = false;
        rectangle_2.isFilled = true;

        // rectangle_3
        const rectangle_3 = this.add.rectangle(1135, 558, 128, 128);
        rectangle_3.visible = false;
        rectangle_3.isFilled = true;

        // rectangle_4
        const rectangle_4 = this.add.rectangle(529, 584, 128, 128);
        rectangle_4.visible = false;
        rectangle_4.isFilled = true;

        // rectangle_5
        const rectangle_5 = this.add.rectangle(1266, 396, 140, 220);

        // bobbingApples
        const bobbingApples = this.add.sprite(787, 134, "fair-welcome", "bobbingApples0001");

        // wR_fair2024
        const wR_fair2024 = this.add.image(769, 484, "WR fair2024");
        wR_fair2024.visible = false;
        wR_fair2024.alpha = 0.5;
        wR_fair2024.alphaTopLeft = 0.5;
        wR_fair2024.alphaTopRight = 0.5;
        wR_fair2024.alphaBottomLeft = 0.5;
        wR_fair2024.alphaBottomRight = 0.5;

        // lists
        const sort = [grandstandR, foreground, tourhqR, tourhqL, grandstandL_1, carouselMiddle, horseFront, frontRopes, leftTrees, topOfGazebo, horseLeft, horseRight, horseBack];

        // noticeboardoutline0001 (components)
        const noticeboardoutline0001Button = new Button(noticeboardoutline0001);
        noticeboardoutline0001Button.spriteName = "noticeboardoutline";
        const noticeboardoutline0001MoveTo = new MoveTo(noticeboardoutline0001);
        noticeboardoutline0001MoveTo.x = 769;
        noticeboardoutline0001MoveTo.y = 431;
        const noticeboardoutline0001ShowHint = new ShowHint(noticeboardoutline0001);
        noticeboardoutline0001ShowHint.text = "Community Events";

        // carouselBase (components)
        const carouselBaseAnimation = new Animation(carouselBase);
        carouselBaseAnimation.key = "carouselBase";
        carouselBaseAnimation.end = 24;

        // horseLeftBack (components)
        const horseLeftBackAnimation = new Animation(horseLeftBack);
        horseLeftBackAnimation.key = "horseLeftBack";
        horseLeftBackAnimation.end = 53;

        // horseBackBack (components)
        const horseBackBackAnimation = new Animation(horseBackBack);
        horseBackBackAnimation.key = "horseBackBack";
        horseBackBackAnimation.end = 53;

        // horseRightBack (components)
        const horseRightBackAnimation = new Animation(horseRightBack);
        horseRightBackAnimation.key = "horseRightBack";
        horseRightBackAnimation.end = 53;

        // horseFrontBack (components)
        const horseFrontBackAnimation = new Animation(horseFrontBack);
        horseFrontBackAnimation.key = "horseFrontBack";
        horseFrontBackAnimation.end = 53;

        // carouselMiddle (components)
        const carouselMiddleAnimation = new Animation(carouselMiddle);
        carouselMiddleAnimation.key = "carouselMiddle";
        carouselMiddleAnimation.end = 24;

        // horseLeft (components)
        const horseLeftAnimation = new Animation(horseLeft);
        horseLeftAnimation.key = "horseLeft";
        horseLeftAnimation.end = 53;

        // horseFront (components)
        const horseFrontAnimation = new Animation(horseFront);
        horseFrontAnimation.key = "horseFront";
        horseFrontAnimation.end = 53;

        // horseBack (components)
        const horseBackAnimation = new Animation(horseBack);
        horseBackAnimation.key = "horseBack";
        horseBackAnimation.end = 53;

        // horseRight (components)
        const horseRightAnimation = new Animation(horseRight);
        horseRightAnimation.key = "horseRight";
        horseRightAnimation.end = 53;

        // topOfGazebo (components)
        const topOfGazeboAnimation = new Animation(topOfGazebo);
        topOfGazeboAnimation.key = "topOfGazebo";
        topOfGazeboAnimation.end = 24;

        // tourhq_door (components)
        const tourhq_doorButton = new Button(tourhq_door);
        tourhq_doorButton.spriteName = "tourhq_door";
        new MoveTo(tourhq_door);

        // tourDoor (components)
        const tourDoorButton = new Button(tourDoor);
        tourDoorButton.spriteName = "tourDoor";
        tourDoorButton.alias = rectangle_5;

        // fishwater0001 (components)
        const fishwater0001Animation = new Animation(fishwater0001);
        fishwater0001Animation.key = "fishwater";
        fishwater0001Animation.end = 12;

        // wf_bottomL0001 (components)
        const wf_bottomL0001Animation = new Animation(wf_bottomL0001);
        wf_bottomL0001Animation.key = "wf_bottom";
        wf_bottomL0001Animation.end = 12;

        // wf_bottomR0001 (components)
        const wf_bottomR0001Animation = new Animation(wf_bottomR0001);
        wf_bottomR0001Animation.key = "wf_bottom";
        wf_bottomR0001Animation.end = 12;

        // wf_topL0001 (components)
        const wf_topL0001Animation = new Animation(wf_topL0001);
        wf_topL0001Animation.key = "wf_top";
        wf_topL0001Animation.end = 6;

        // wf_topR0001 (components)
        const wf_topR0001Animation = new Animation(wf_topR0001);
        wf_topR0001Animation.key = "wf_top";
        wf_topR0001Animation.end = 6;

        // nc_lights0001 (components)
        const nc_lights0001Animation = new Animation(nc_lights0001);
        nc_lights0001Animation.key = "nc_lights";
        nc_lights0001Animation.end = 69;

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.callback = () => this.world.scavenger.collect(3);

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.callback = () => this.world.scavenger.collect(1);

        // rectangle_2 (components)
        const rectangle_2SimpleButton = new SimpleButton(rectangle_2);
        rectangle_2SimpleButton.callback = () => this.world.scavenger.collect(2);

        // rectangle_3 (components)
        const rectangle_3SimpleButton = new SimpleButton(rectangle_3);
        rectangle_3SimpleButton.callback = () => this.world.scavenger.collect(4);

        // rectangle_4 (components)
        const rectangle_4SimpleButton = new SimpleButton(rectangle_4);
        rectangle_4SimpleButton.callback = () => this.world.scavenger.collect(0);

        // rectangle_5 (components)
        const rectangle_5MoveTo = new MoveTo(rectangle_5);
        rectangle_5MoveTo.x = 1260;
        rectangle_5MoveTo.y = 490;

        // bobbingApples (components)
        const bobbingApplesAnimation = new Animation(bobbingApples);
        bobbingApplesAnimation.key = "bobbingApples";
        bobbingApplesAnimation.end = 10;
        bobbingApplesAnimation.frameRate = 10;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()
    }

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
