import IglooScene from '../IglooScene'
import { Button, MoveTo, ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class IglooPlayset extends IglooScene {

    constructor() {
        super("IglooPlayset");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [765, 640]
        this.wallSpawn = [760, 305]
        this.wallBounds = [400, 1125]
        this.floorFrame = 1

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("iglooplayset-pack", "assets/media/igloos/buildings/sprites/iglooplayset/iglooplayset-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(765, 664, "iglooplayset", "floor");

        // bg
        this.add.image(760, 394, "iglooplayset", "bg");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(99, 692, 64, 64);
        rectangle_1.scaleX = 1.6987766126222235;
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
