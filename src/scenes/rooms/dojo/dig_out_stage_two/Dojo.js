
// You can write more code here

import RoomScene from '@rooms/RoomScene'
import { MoveTo, Button, SimpleButton, Animation } from '@components/components'


/* START OF COMPILED CODE */

export default class Dojo extends RoomScene {

    constructor() {
        super("Dojo");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'dojoext': () => this.triggerRoom(319, 541, 333),
            'map': () => this.interface.loadWidget('Map'),
            'hardhat': () => this.interface.prompt.showItem(429)
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dig-out-stage-two-asset-pack", "assets/media/rooms/dojo/dig_out_stage_two/dig-out-stage-two-asset-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_1
        this.add.image(686, 439, "dojo-stage-two", "dojo_background");

        // rrailback
        const rrailback = this.add.image(1086, 646, "dojo-stage-two", "ladderother");
        rrailback.setOrigin(0.42699069235878334, 0.9113725124637773);

        // cone
        const cone = this.add.image(1377.0415152599876, 614.335755840199, "dojo-stage-two", "cone");
        cone.setOrigin(0.48738835868404723, 0.6723118633730225);

        // freeback
        const freeback = this.add.image(804.7981528030566, 666.0698349593614, "dojo-stage-two", "ladder");
        freeback.setOrigin(0.40742275043848436, 0.8060239601203713);

        // hardhat
        const hardhat = this.add.image(735.2568386250213, 737.3745798713735, "dojo-stage-two", "hats");
        hardhat.setOrigin(0.37566244133475335, 0.7034051551997106);

        // door_1
        const door_1 = this.add.sprite(411, 503, "dojo-stage-two", "dojodoor");

        // plank1
        const plank1 = this.add.image(218.49355752551097, 718.1318760259849, "dojo-stage-two", "plankl");
        plank1.setOrigin(0.6343393896521202, 0.9442534803272699);

        // plank2
        const plank2 = this.add.image(297.0036337602985, 613.3539246416916, "dojo-stage-two", "plankr");
        plank2.setOrigin(0.7233362500999855, 0.8439417536720095);

        // ribbon
        const ribbon = this.add.image(781, 751.502682877162, "dojo-stage-two", "tape");
        ribbon.setOrigin(0.5, 3.5898741146412996);

        // warning
        const warning = this.add.image(636.7851858269293, 571.5954294074457, "dojo-stage-two", "sign");
        warning.setOrigin(0.29132266781478505, 0.7353497537921);

        // free0002
        const free0002 = this.add.image(870.803016261439, 745.7926230166041, "dojo-stage-two", "free");
        free0002.setOrigin(0.7137548962530798, 0.9041268267919454);

        // toprailing
        const toprailing = this.add.image(800.9800766541749, 442.84752833955537, "dojo-stage-two", "railing");
        toprailing.setOrigin(0.5704163037931429, 1.1102266051662932);

        // rrailfront
        const rrailfront = this.add.image(1166, 711, "dojo-stage-two", "pole");
        rrailfront.setOrigin(0.4180561021802552, 0.8506156170853495);

        // lightfive0001
        const lightfive0001 = this.add.sprite(714, 447, "dojo-stage-two", "lightfive0001");

        // lightthree0001
        const lightthree0001 = this.add.sprite(529, 378, "dojo-stage-two", "lightthree0001");

        // lighttwo0001
        const lighttwo0001 = this.add.sprite(426, 330, "dojo-stage-two", "lighttwo0001");

        // lightfour0001
        const lightfour0001 = this.add.sprite(619, 399, "dojo-stage-two", "lightfour0001");

        // lightone0001
        const lightone0001 = this.add.sprite(362, 295, "dojo-stage-two", "lightone0001");

        // mats
        this.add.image(1268, 876, "dojo-stage-two", "mats");

        // training0001
        const training0001 = this.add.image(1275.911245584187, 861.6348493126285, "dojo-stage-two", "training0001");
        training0001.setOrigin(0.5158905027094846, 0.7305394133092059);

        // lists
        const sort = [cone, hardhat, warning, plank1, plank2, ribbon, toprailing, rrailfront, rrailback, free0002, freeback, training0001];

        // hardhat (components)
        const hardhatMoveTo = new MoveTo(hardhat);
        hardhatMoveTo.x = 769;
        hardhatMoveTo.y = 720;
        new SimpleButton(hardhat);

        // door_1 (components)
        const door_1Button = new Button(door_1);
        door_1Button.spriteName = "dojodoor";
        const door_1MoveTo = new MoveTo(door_1);
        door_1MoveTo.x = 408;
        door_1MoveTo.y = 505;

        // lightfive0001 (components)
        const lightfive0001Animation = new Animation(lightfive0001);
        lightfive0001Animation.key = "lightfive";
        lightfive0001Animation.end = 24;
        lightfive0001Animation.repeatDelay = 16;

        // lightthree0001 (components)
        const lightthree0001Animation = new Animation(lightthree0001);
        lightthree0001Animation.key = "lightthree";
        lightthree0001Animation.end = 24;
        lightthree0001Animation.repeatDelay = 8;

        // lighttwo0001 (components)
        const lighttwo0001Animation = new Animation(lighttwo0001);
        lighttwo0001Animation.key = "lighttwo";
        lighttwo0001Animation.end = 24;
        lighttwo0001Animation.repeatDelay = 4;

        // lightfour0001 (components)
        const lightfour0001Animation = new Animation(lightfour0001);
        lightfour0001Animation.key = "lightfour";
        lightfour0001Animation.end = 24;
        lightfour0001Animation.repeatDelay = 12;

        // lightone0001 (components)
        const lightone0001Animation = new Animation(lightone0001);
        lightone0001Animation.key = "lightone";
        lightone0001Animation.end = 24;
        lightone0001Animation.repeatDelay = 1;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
