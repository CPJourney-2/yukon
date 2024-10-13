
// You can write more code here

import IglooScene from "../IglooScene";
import { ZoneTrigger } from '@components/components'

/* START OF COMPILED CODE */

export default class TheatreIgloo extends IglooScene {

    constructor() {
        super("TheatreIgloo");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */
        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [520, 1050]
        this.floorFrame = 12
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("theatre-iggy-pack", "assets/media/igloos/buildings/sprites/theatre/theatre-iggy-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(765, 655, "theatre_iggy", "floor");

        // stage
        this.add.image(758, 587, "theatre_iggy", "stage");

        // curtan
        this.add.image(767, 410, "theatre_iggy", "curtan");

        // walls
        this.add.image(760, 438, "theatre_iggy", "walls");

        // puffles
        this.add.image(811, 301, "theatre_iggy", "puffles");

        // door
        this.add.image(211, 618, "theatre_iggy", "door");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(222.99999999999997, 675.0000000000001, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.6668401826169998, 0.7420771726256943);

        // rectangle_1 (components)
        const rectangle_1ZoneTrigger = new ZoneTrigger(rectangle_1);
        rectangle_1ZoneTrigger.callback = () => this.interface.loadWidget('Map');

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
