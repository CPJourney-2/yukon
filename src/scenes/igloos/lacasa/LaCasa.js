import IglooScene from '../IglooScene'
import { Button, MoveTo, ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class LaCasa extends IglooScene {

    constructor() {
        super("LaCasa");

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

        this.load.pack("lacasa-pack", "assets/media/igloos/buildings/sprites/lacasa/lacasa-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(757.5, 655, "lacasa", "floor");

        // door
        const door = this.add.image(267, 555.4592934004506, "lacasa", "door");
        door.setOrigin(0.5, 0.7800706717965225);

        // wall
        this.add.image(755, 371, "lacasa", "wall");

        // window_L
        this.add.image(546.5, 497.5, "lacasa", "window_L");

        // window_R
        this.add.image(965.5, 497, "lacasa", "window_R");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(255.0401210253555, 558.8611582005128, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.4968654761000747, 0.7659669377457123);

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.pixelPerfect = true;
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
