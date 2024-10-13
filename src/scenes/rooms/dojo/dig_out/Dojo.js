
// You can write more code here

import RoomScene from '@rooms/RoomScene'
import { MoveTo, Button, SimpleButton } from '@components/components'


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

        this.load.pack("dojo-pack", "assets/media/rooms/dojo/dig_out/dojo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_1
        this.add.image(686, 439, "dojo_1", "bg");

        // rrailback
        const rrailback = this.add.image(1106.2676317767412, 648.311363190727, "dojo_1", "rrailback");
        rrailback.setOrigin(0.42699069235878334, 0.9113725124637773);

        // cone
        const cone = this.add.image(1377.0415152599876, 614.335755840199, "dojo_1", "cone");
        cone.setOrigin(0.48738835868404723, 0.6723118633730225);

        // freeback
        const freeback = this.add.image(829.7981528030566, 666.0698349593614, "dojo_1", "freeback");
        freeback.setOrigin(0.40742275043848436, 0.8060239601203713);

        // hardhat
        const hardhat = this.add.image(736.2568386250213, 737.3745798713735, "dojo_1", "hardhat");
        hardhat.setOrigin(0.37566244133475335, 0.7034051551997106);

        // door_1
        const door_1 = this.add.sprite(411, 503, "dojo_1", "door");

        // logs
        const logs = this.add.image(1184.366369819291, 826.1245457799627, "dojo_1", "logs");
        logs.setOrigin(0.36476824212695813, 0.4851012734713091);

        // plank1
        const plank1 = this.add.image(218.49355752551097, 718.1318760259849, "dojo_1", "plank1");
        plank1.setOrigin(0.6343393896521202, 0.9442534803272699);

        // plank2
        const plank2 = this.add.image(297.0036337602985, 613.3539246416916, "dojo_1", "plank2");
        plank2.setOrigin(0.7233362500999855, 0.8439417536720095);

        // ribbon
        const ribbon = this.add.image(781, 751.502682877162, "dojo_1", "ribbon");
        ribbon.setOrigin(0.5, 3.5898741146412996);

        // warning
        const warning = this.add.image(636.7851858269293, 571.5954294074457, "dojo_1", "warning");
        warning.setOrigin(0.29132266781478505, 0.7353497537921);

        // free0002
        const free0002 = this.add.image(890.803016261439, 750.7926230166041, "dojo_1", "free0001");
        free0002.setOrigin(0.7137548962530798, 0.9041268267919454);

        // toprailing
        const toprailing = this.add.image(800.9800766541749, 442.84752833955537, "dojo_1", "toprailing");
        toprailing.setOrigin(0.5704163037931429, 1.1102266051662932);

        // rrailfront
        const rrailfront = this.add.image(1183.2305807002917, 719.2734803525718, "dojo_1", "rrailfront");
        rrailfront.setOrigin(0.4180561021802552, 0.8506156170853495);

        // lists
        const sort = [logs, cone, hardhat, warning, plank1, plank2, ribbon, toprailing, rrailfront, rrailback, free0002, freeback];

        // hardhat (components)
        const hardhatMoveTo = new MoveTo(hardhat);
        hardhatMoveTo.x = 769;
        hardhatMoveTo.y = 720;
        new SimpleButton(hardhat);

        // door_1 (components)
        const door_1Button = new Button(door_1);
        door_1Button.spriteName = "door";
        const door_1MoveTo = new MoveTo(door_1);
        door_1MoveTo.x = 408;
        door_1MoveTo.y = 505;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
