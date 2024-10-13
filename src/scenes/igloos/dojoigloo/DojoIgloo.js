
// You can write more code here

import IglooScene from "../IglooScene";
import { Button, MoveTo, ZoneTrigger} from '@components/components'

/* START OF COMPILED CODE */

export default class DojoIgloo extends IglooScene {

    constructor() {
        super("DojoIgloo");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image} */
        this.fg;
        /** @type {Phaser.GameObjects.Image} */
        this.bg;


        /* START-USER-CTR-CODE */
        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [520, 1050]
        this.floorFrame = 11
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dojo-igloo-pack", "assets/media/igloos/buildings/sprites/dojo/dojo-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 770, "dojo-igloo", "dojo_floor");

        // fg
        const fg = this.add.image(760.5, 396, "dojo-igloo", "dojo_walls");

        // dojo_door
        const dojo_door = this.add.image(522, 579, "dojo-igloo", "dojo_door");

        // bg
        const bg = this.add.image(813, 582, "dojo-igloo", "dojo_walls");
        bg.visible = false;
        bg.alpha = 1e-18;
        bg.alphaTopLeft = 1e-18;
        bg.alphaTopRight = 1e-18;
        bg.alphaBottomLeft = 1e-18;
        bg.alphaBottomRight = 1e-18;

        // rectangle_1
        const rectangle_1 = this.add.rectangle(519.0000000000001, 646, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.473686474548628, 0.8698520500314428);

        // dojo_door (components)
        const dojo_doorButton = new Button(dojo_door);
        dojo_doorButton.spriteName = "dojo_door";

        // rectangle_1 (components)
        const rectangle_1ZoneTrigger = new ZoneTrigger(rectangle_1);
        rectangle_1ZoneTrigger.callback = () => this.interface.loadWidget('Map');

        this.floor = floor;
        this.fg = fg;
        this.bg = bg;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create();

        this.bg.depth = -3;
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
