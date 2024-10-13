
// You can write more code here

import IglooScene from "../IglooScene";
import { ZoneTrigger } from '@components/components'

/* START OF COMPILED CODE */

export default class DragonLair extends IglooScene {

    constructor() {
        super("DragonLair");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */
        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [520, 1050]
        this.floorFrame = 8
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dragonlair-pack", "assets/media/igloos/buildings/sprites/dragonlair/dragonlair-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 754, "dragonlair", "floor");

        // bg
        this.add.image(760, 334, "dragonlair", "bg");

        // door
        this.add.image(759, 581, "dragonlair", "door");

        // frame
        this.add.image(760, 640, "dragonlair", "frame");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(759.6724235186807, 656.5188007825159, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.4721799837857037, 0.4989058586294073);
        rectangle_1.visible = false;
        rectangle_1.isFilled = true;

        // rectangle_1 (components)
        const rectangle_1ZoneTrigger = new ZoneTrigger(rectangle_1);
        rectangle_1ZoneTrigger.callback = () => this.interface.loadWidget('Map');

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
