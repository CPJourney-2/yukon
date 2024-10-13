import IglooScene from '../IglooScene'
import { MoveTo, SimpleButton, ZoneTrigger } from '@components/components'

/* START OF COMPILED CODE */

export default class DeluxeStone extends IglooScene {

    constructor() {
        super("DeluxeStone");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [720, 720]
        this.wallSpawn = [720, 260]
        this.wallBounds = [350, 1200]
        this.floorFrame = 2

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("deluxestone-pack", "assets/media/igloos/buildings/sprites/deluxestone/deluxestone-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 636, "deluxestone", "floor");
        floor.setOrigin(0.5003940110323088, 0.5013477088948787);

        // door
        const door = this.add.image(243, 478, "deluxestone", "door");

        // wall_1
        const wall_1 = this.add.image(321, 389, "deluxestone", "wall_1");
        wall_1.setOrigin(0.5010266940451745, 0.5);

        // wall_2
        const wall_2 = this.add.image(762, 295, "deluxestone", "wall_2");
        wall_2.setOrigin(0.5008695652173913, 0.5);

        // wall_3
        this.add.image(1210, 401, "deluxestone", "wall_3");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(250.74778267183547, 559.1187695778975, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.5093177353194109, 0.8900934068729189);

        // door (components)
        new SimpleButton(door);
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
