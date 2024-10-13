import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class Pineapple extends IglooScene {

    constructor() {
        super("Pineapple");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [1000, 662]
        this.wallSpawn = [500, 420]
        this.wallBounds = [550, 970]
        this.floorFrame = 15

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("pineapple-pack", "assets/media/igloos/buildings/sprites/pineapple/pineapple-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "pineapple", "bg-lower");

        // bg_upper
        this.add.image(760, 480, "pineapple", "bg-upper");

        // fg
        const fg = this.add.image(760, 962.1435010445438, "pineapple", "fg");
        fg.setOrigin(0.5, 1.0022328254060198);

        // lists
        const sort = [fg];

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
