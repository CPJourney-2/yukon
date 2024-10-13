import IglooScene from '../IglooScene'
import { Button, MoveTo, ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class SplitLevel extends IglooScene {

    constructor() {
        super("SplitLevel");

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

        this.load.pack("splitlevel-pack", "assets/media/igloos/buildings/sprites/splitlevel/splitlevel-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.layer();

        // floor_1
        const floor_1 = this.add.image(760, 630, "splitlevel", "floor");
        floor_1.setOrigin(0.5003861003861004, 0.5);
        floor.add(floor_1);

        // stairs_top
        const stairs_top = this.add.image(763, 667, "splitlevel", "stairs_top");
        stairs_top.setOrigin(0.5, 0.5035971223021583);
        floor.add(stairs_top);

        // door
        const door = this.add.image(235, 556, "splitlevel", "door");

        // wall_1
        const wall_1 = this.add.image(757, 380, "splitlevel", "wall_1");
        wall_1.setOrigin(0.5003615328994938, 0.5);

        // stairs
        this.add.image(777, 667, "splitlevel", "stairs");

        // wall_2
        const wall_2 = this.add.image(925, 811, "splitlevel", "wall_2");
        wall_2.setOrigin(0.5, 0.5015197568389058);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(242.97014500876057, 637.4825608873566, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.5103403569839793, 0.8967956479257331);

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
