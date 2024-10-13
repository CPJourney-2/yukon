
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import SimpleButton from "../../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DarkCave extends RoomScene {

    constructor() {
        super("DarkCave");

        /** @type {Phaser.GameObjects.Image} */
        this.voyager;
        /** @type {Phaser.FX.Glow} */
        this.crimsonGlow;
        /** @type {Phaser.GameObjects.Container} */
        this.voyagerContainer;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'cove': () => this.triggerRoom(810, 1060, 311),
            'voyager': () => this.interface.loadWidget('Voyager'),
        };

        this.music = 981;
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("darkcave-pack", "assets/media/rooms/darkcave/darkcave-pack.json");
    }

    /** @returns {void} */
    _create() {

        // darkcave_bg
        this.add.image(760, 480, "darkcave", "darkcave_bg");

        // cliffrock
        this.add.image(274, 450, "darkcave", "cliffrock");

        // cliffrock2
        const cliffrock2 = this.add.image(940, 465.5429992675781, "darkcave", "cliffrock2");
        cliffrock2.setOrigin(0.5, 0.75);

        // rock
        const rock = this.add.image(780, 595, "darkcave", "rock");

        // pebble
        const pebble = this.add.image(912, 571, "darkcave", "pebble");

        // rock_1
        const rock_1 = this.add.image(1174, 514, "darkcave", "rock");
        rock_1.setOrigin(0.5, 0.6);
        rock_1.tintTopLeft = 16777215;
        rock_1.tintTopRight = 16777215;
        rock_1.tintBottomLeft = 16777215;
        rock_1.tintBottomRight = 0;

        // voyagerContainer
        const voyagerContainer = this.add.container(209, 718);

        // voyager
        const voyager = this.add.image(111, 28, "darkcave", "voyager");
        voyagerContainer.add(voyager);

        // crimson
        const crimson = this.add.sprite(-45, -8, "darkcave", "crimson0001");
        crimson.scaleX = -1;
        voyagerContainer.add(crimson);

        // crimsonGlow
        const crimsonGlow = crimson.postFX.addGlow(11798022, 0, 0, false);

        // lists
        const sort = [pebble, rock, rock_1, voyagerContainer];

        // crimson (components)
        const crimsonSimpleButton = new SimpleButton(crimson);
        crimsonSimpleButton.hoverCallback = () => this.onCrimsonOver();
        crimsonSimpleButton.hoverOutCallback = () => this.onCrimsonOut();
        crimsonSimpleButton.pixelPerfect = true;
        crimsonSimpleButton.downCallback = () => this.interface.loadWidget('CrimsonDialogue', false, 0);;

        this.voyager = voyager;
        this.crimsonGlow = crimsonGlow;
        this.voyagerContainer = voyagerContainer;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create();
    }

    onCrimsonOver() {
        this.crimsonGlow.outerStrength = 10;
    }

    onCrimsonOut() {
        this.crimsonGlow.outerStrength = 0;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
