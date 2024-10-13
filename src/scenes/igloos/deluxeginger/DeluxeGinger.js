
import IglooScene from "../IglooScene";
import { ZoneTrigger } from '@components/components'

/* START OF COMPILED CODE */

export default class DeluxeGinger extends IglooScene {

    constructor() {
        super("DeluxeGinger");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */
        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [520, 1050]
        this.floorFrame = 11
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("deluxeginger-pack", "assets/media/igloos/buildings/sprites/deluxeginger/deluxeginger-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(781, 719, "deluxeginger", "floor");

        // bg
        this.add.image(752, 571, "deluxeginger", "igloo");

        // fg
        this.add.image(772, 473, "deluxeginger", "fg");

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
