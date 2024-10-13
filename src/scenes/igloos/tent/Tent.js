import IglooScene from '../IglooScene'
import { ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class Tent extends IglooScene {

    constructor() {
        super("Tent");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 780]
        this.wallSpawn = [760, 480]
        this.wallBounds = [350, 1150]
        this.floorFrame = 10

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("tent-pack", "assets/media/igloos/buildings/sprites/tent/tent-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 746, "tent", "floor");
        floor.scaleX = 1.01;
        floor.scaleY = 1.01;

        // walls
        this.add.image(764, 454, "tent", "walls");

        // roof
        const roof = this.add.image(746, 452.5399877040221, "tent", "roof");
        roof.setOrigin(0.5, 0.9988499949316463);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(754, 584, 150, 150);

        // lists
        const sort = [roof];

        // rectangle_1 (components)
        const rectangle_1ZoneTrigger = new ZoneTrigger(rectangle_1);
        rectangle_1ZoneTrigger.callback = () => this.interface.loadWidget('Map');

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
