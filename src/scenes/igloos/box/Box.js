import IglooScene from '../IglooScene'
import { ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class Box extends IglooScene {

    constructor() {
        super("Box");

        /** @type {Phaser.GameObjects.Sprite} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 760]
        this.wallSpawn = [750, 320]
        this.wallBounds = [580, 1000]
        this.floorFrame = 16

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("box-pack", "assets/media/igloos/buildings/sprites/box/box-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.sprite(760, 480, "box", "floor");

        // wall
        this.add.image(760, 480, "box", "wall");

        // doorholderback
        this.add.image(760, 480, "box", "doorholderback");

        // door
        this.add.image(1102, 486, "box", "door");

        // two_row_box
        const two_row_box = this.add.image(334.08063896404184, 598.0095044908546, "box", "two_row_box");
        two_row_box.setOrigin(0.21978989405529067, 0.6229265671779736);

        // doorholder
        const doorholder = this.add.image(1157.687846758355, 597.9952951920394, "box", "doorholder");
        doorholder.setOrigin(0.7616367412883914, 0.622911765825041);

        // fg
        const fg = this.add.image(766.9897725660235, 731.6318123768418, "box", "fg");
        fg.setOrigin(0.5045985345829102, 0.7621164712258769);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(1107, 517, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.4934015560906795, 0.7143424794011963);

        // lists
        const sort = [fg, two_row_box];

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
