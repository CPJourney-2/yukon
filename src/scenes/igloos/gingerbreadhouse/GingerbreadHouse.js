
// You can write more code here

import IglooScene from "../IglooScene";
import { ZoneTrigger } from '@components/components'

/* START OF COMPILED CODE */

export default class GingerbreadHouse extends IglooScene {

    constructor() {
        super("GingerbreadHouse");

        /** @type {Phaser.GameObjects.Image} */
        this.bg;
        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image} */
        this.fg;


        /* START-USER-CTR-CODE */
        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [520, 1050]
        this.floorFrame = 11
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("gingerbreadhouse-pack", "assets/media/igloos/buildings/sprites/gingerbreadhouse/gingerbreadhouse-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(760, 551, "gingerbreadhouse", "bg");

        // floor
        const floor = this.add.image(778, 739, "gingerbreadhouse", "floor");

        // fg
        const fg = this.add.image(755, 237, "gingerbreadhouse", "fg");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(599.8059425569436, 594.0024405137626, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.47739292200966954, 0.8698640437370897);

        // rectangle_1 (components)
        const rectangle_1ZoneTrigger = new ZoneTrigger(rectangle_1);
        rectangle_1ZoneTrigger.callback = () => this.interface.loadWidget('Map');

        this.bg = bg;
        this.floor = floor;
        this.fg = fg;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create();

        this.bg.depth = -3;
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
