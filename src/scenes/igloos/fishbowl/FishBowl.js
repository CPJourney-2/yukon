import IglooScene from '../IglooScene'
import { ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class FishBowl extends IglooScene {

    constructor() {
        super("FishBowl");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image} */
        this.fg;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 760]
        this.wallSpawn = [750, 320]
        this.wallBounds = [580, 1000]
        this.floorFrame = 1

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("fishbowl-pack", "assets/media/igloos/buildings/sprites/fishbowl/fishbowl-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 530, "fishbowl", "bg");

        // fg
        const fg = this.add.image(760, 922.1773064411411, "fishbowl", "fg");
        fg.setOrigin(0.5, 0.9699015080728073);

        // lists
        const sort = [fg];

        this.floor = floor;
        this.fg = fg;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create();

    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
