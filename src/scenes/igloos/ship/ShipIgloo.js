import IglooScene from '../IglooScene'


/* START OF COMPILED CODE */

export default class ShipIgloo extends IglooScene {

    constructor() {
        super("ShipIgloo");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [825, 635]
        this.wallSpawn = [830, 365]
        this.wallBounds = [580, 1000]
        this.floorFrame = 7

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("shipigloo-pack", "assets/media/igloos/buildings/sprites/ship/shipigloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(0, 0, "shipigloo", "floor");
        floor.setOrigin(0, 0);

        // igloo
        const igloo = this.add.image(0, 0, "shipigloo", "igloo");
        igloo.setOrigin(0, 0);

        // foreground
        const foreground = this.add.image(193, 392.0977952753993, "shipigloo", "foreground");
        foreground.setOrigin(0.5, 0.8295154045328811);

        // lists
        const sort = [foreground];

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
