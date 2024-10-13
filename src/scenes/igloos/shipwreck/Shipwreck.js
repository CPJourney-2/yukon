import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class Shipwreck extends IglooScene {

    constructor() {
        super("Shipwreck");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 760]
        this.wallSpawn = [750, 320]
        this.wallBounds = [580, 1000]
        this.floorFrame = 15

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("shipwreck-pack", "assets/media/igloos/buildings/sprites/shipwreck/shipwreck-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 360.64031301839026, "shipwreck", "background");
        floor.setOrigin(0.5, 0.3756669927274899);

        // foreground
        const foreground = this.add.image(760, 963.7091586327042, "shipwreck", "foreground");
        foreground.setOrigin(0.5, 1.0009714122634163);

        // lists
        const sort = [foreground, floor];

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
