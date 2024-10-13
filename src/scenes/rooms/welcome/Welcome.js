import RoomScene from '@rooms/RoomScene'

import { Animation, Button, SimpleButton, ShowHint, MoveTo } from '@components/components'

import RoomPin from '@rooms/RoomPin'

// You can write more code here

/* START OF COMPILED CODE */

export default class Welcome extends RoomScene {

    constructor() {
        super("Welcome");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 870, 330),
            'town': () => this.triggerRoom(100, 760, 660),
            'welcome': () => this.triggerRoom(2, 775, 440),
            'notice': () => this.interface.loadWidget('CommunityEvents')
        }
        this.music = 'welcome_room'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("welcome-pack", "assets/media/rooms/welcome/welcome-pack.json");
    }

    /** @returns {void} */
    _create() {

        // background
        const background = this.add.image(-1, 0, "welcome", "background");
        background.setOrigin(0, 0);

        // noticeboardoutline0001
        const noticeboardoutline0001 = this.add.sprite(778, 333, "welcome", "noticeboardoutline");
        noticeboardoutline0001.setOrigin(0.506896551724138, 0.4037464142806126);

        // grandstandR
        const grandstandR = this.add.image(438.3354797363281, 453.64676081435744, "welcome", "grandstandR");
        grandstandR.setOrigin(0.4372135679257684, 0.7715379028167627);

        // grandstandL_1
        const grandstandL_1 = this.add.image(213, 527.1116506690049, "welcome", "grandstandL");
        grandstandL_1.setOrigin(0.5, 0.6701924442197558);

        // tourhq_door
        const tourhq_door = this.add.sprite(1283, 467, "welcome", "tourhq_door");
        tourhq_door.setOrigin(0.47540983606557374, 0.7905405405405406);

        // tourhqL
        const tourhqL = this.add.image(1112.946238989188, 461.8387169675641, "welcome", "tourhqL");
        tourhqL.setOrigin(0.6540567180835276, 0.7455976665099715);

        // tourhqR
        const tourhqR = this.add.image(1304.0695914938492, 542.9715233700147, "welcome", "tourhqR");
        tourhqR.setOrigin(0.44923512285373957, 0.5153622230965647);

        // fishwater0001
        const fishwater0001 = this.add.sprite(664, 128, "welcome", "fishwater0001");

        // foreground
        const foreground = this.add.image(-17, 969, "welcome", "foreground");
        foreground.setOrigin(0, 1);

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
        const nc_lights0001 = this.add.sprite(540, 179, "welcome", "nc_lights0001");

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

        // lists
        const sort = [grandstandR, foreground, tourhqR, tourhqL, grandstandL_1];

        // noticeboardoutline0001 (components)
        const noticeboardoutline0001Button = new Button(noticeboardoutline0001);
        noticeboardoutline0001Button.spriteName = "noticeboardoutline";
        const noticeboardoutline0001MoveTo = new MoveTo(noticeboardoutline0001);
        noticeboardoutline0001MoveTo.x = 769;
        noticeboardoutline0001MoveTo.y = 431;
        const noticeboardoutline0001ShowHint = new ShowHint(noticeboardoutline0001);
        noticeboardoutline0001ShowHint.text = "Community Events";

        // tourhq_door (components)
        const tourhq_doorButton = new Button(tourhq_door);
        tourhq_doorButton.spriteName = "tourhq_door";
        new MoveTo(tourhq_door);

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
