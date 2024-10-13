import IglooScene from '../IglooScene'
import { Button, MoveTo, ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class SplitLevelSnow extends IglooScene {

    constructor() {
        super("SplitLevelSnow");

        /** @type {Phaser.GameObjects.Layer} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [1080, 490]
        this.wallSpawn = [970, 200]
        this.wallBounds = [410, 1110]
        this.floorFrame = 3

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("splitlevelsnow-pack", "assets/media/igloos/buildings/sprites/splitlevelsnow/splitlevelsnow-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.layer();

        // floor_1
        const floor_1 = this.add.image(760, 630, "splitlevelsnow", "floor");
        floor_1.setOrigin(0.5003861003861004, 0.5);
        floor.add(floor_1);

        // door
        const door = this.add.image(235, 556, "splitlevelsnow", "door");

        // wall_1
        const wall_1 = this.add.image(757, 380, "splitlevelsnow", "wall_1");
        wall_1.setOrigin(0.5003615328994938, 0.5);

        // stairs
        this.add.image(777, 667, "splitlevelsnow", "step");

        // wall_2
        const wall_2 = this.add.image(925, 811, "splitlevelsnow", "wall_2");
        wall_2.setOrigin(0.5, 0.5015197568389058);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(251.00000000000006, 642.0000000000001, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.5702633285828139, 0.8059646113285686);

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
