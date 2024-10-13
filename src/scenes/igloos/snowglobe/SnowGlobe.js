import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class SnowGlobe extends IglooScene {

    constructor() {
        super("SnowGlobe");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image} */
        this.fg;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.floorSpawn = [760, 540]
        this.wallSpawn = [750, 320]
        this.wallBounds = [340, 1200]
        this.floorFrame = 7
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("snowglobe-pack", "assets/media/igloos/buildings/sprites/snowglobe/snowglobe-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(766, 467, "snowglobe", "igloo");

        // fg
        const fg = this.add.image(764, 757, "snowglobe", "fg");
        fg.setOrigin(0.5, 0.9699015080728073);

        // lists
        const sort = [fg];

        this.floor = floor;
        this.fg = fg;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
