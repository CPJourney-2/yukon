import IglooScene from '../IglooScene'
import { MoveTo, SimpleButton, ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class Stone extends IglooScene {

    constructor() {
        super("Stone");

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

        this.load.pack("stone-pack", "assets/media/igloos/buildings/sprites/stone/stone-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(765, 639, "stone", "floor");
        floor.setOrigin(0.5006337135614702, 0.5);

        // wall_1
        const wall_1 = this.add.image(570, 378, "stone", "wall_1");
        wall_1.setOrigin(0.5010266940451745, 0.5);

        // wall_2
        this.add.image(972, 388, "stone", "wall_2");

        // door
        const door = this.add.image(491, 467, "stone", "door");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(501.0000000000001, 549, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.6254501023166348, 0.7371627542639345);

        // door (components)
        new MoveTo(door);
        new SimpleButton(door);

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
