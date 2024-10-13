import IglooScene from '../IglooScene'
import { ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class InHalfIgloo extends IglooScene {

    constructor() {
        super("InHalfIgloo");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 760]
        this.wallSpawn = [750, 320]
        this.wallBounds = [580, 1000]
        this.floorFrame = 2

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("inhalfigloo-pack", "assets/media/igloos/buildings/sprites/inhalfigloo/inhalfigloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(745, 655, "inhalfigloo", "floor");

        // bg
        this.add.image(760, 462, "inhalfigloo", "bg");

        // fg
        const fg = this.add.image(820, 772.0955864181752, "inhalfigloo", "fg");
        fg.setOrigin(0.5, 0.9399623577574429);

        // fg_hall
        const fg_hall = this.add.image(346, 672.0738222536892, "inhalfigloo", "fg_hall");
        fg_hall.setOrigin(0.5, 0.8747478539838794);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(462.00000000000006, 614.0000000000001, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.5564666351493588, 0.7420771726256943);

        // lists
        const sort = [fg, fg_hall];

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
