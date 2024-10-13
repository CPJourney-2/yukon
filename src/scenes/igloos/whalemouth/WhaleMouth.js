import IglooScene from '../IglooScene'
import { ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class WhaleMouth extends IglooScene {

    constructor() {
        super("WhaleMouth");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 760]
        this.wallSpawn = [750, 320]
        this.wallBounds = [580, 1000]
        this.floorFrame = 15

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("whalemouth-pack", "assets/media/igloos/buildings/sprites/whalemouth/whalemouth-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(-36, 0, "whalemouth", "floor");
        floor.setOrigin(0, 0);

        // background
        const background = this.add.image(-36, 0, "whalemouth", "background");
        background.setOrigin(0, 0);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(742, 410, 128, 128);
        rectangle_1.scaleX = 4.1851203638599115;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.4934015560906795, 0.7143424794011963);

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
