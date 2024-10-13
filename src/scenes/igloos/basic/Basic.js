import IglooScene from '../IglooScene'
import { Button, MoveTo, ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class Basic extends IglooScene {

    constructor() {
        super("Basic");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 760]
        this.wallSpawn = [750, 320]
        this.wallBounds = [580, 1000]
        this.floorFrame = 1

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("basic-pack", "assets/media/igloos/buildings/sprites/basic/basic-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(765, 639, "basic", "floor");
        floor.setOrigin(0.5006337135614702, 0.5);

        // wall_1
        const wall_1 = this.add.image(570, 378, "basic", "wall_1");
        wall_1.setOrigin(0.5010266940451745, 0.5);

        // wall_2
        this.add.image(972, 388, "basic", "wall_2");

        // chimney
        const chimney = this.add.image(887, 120, "basic", "chimney");
        chimney.setOrigin(0.5050505050505051, 0.5);

        // window
        const window = this.add.image(828, 476, "basic", "window");
        window.setOrigin(0.5014164305949008, 0.5);

        // door
        const door = this.add.image(491, 467, "basic", "door");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(506.2869144633406, 549.3564647567841, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.4934015560906795, 0.7143424794011963);

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        new MoveTo(door);

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
