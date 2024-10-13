import IglooScene from '../IglooScene'
import { Button, MoveTo, SimpleButton, ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class Apartment extends IglooScene {

    constructor() {
        super("Apartment");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [740, 600]
        this.wallSpawn = [880, 360]
        this.wallBounds = [320, 1140]
        this.floorFrame = 1

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("apartment-pack", "assets/media/igloos/buildings/sprites/apartment/apartment-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sideladder
        this.add.image(1328, 630, "apartment", "sideladder");

        // floor
        const floor = this.add.image(701, 598, "apartment", "floor");

        // wall
        this.add.image(705, 380, "apartment", "wall");

        // wall_shelf
        this.add.image(1214, 192, "apartment", "wall_shelf");

        // doorframe
        this.add.image(1239, 510, "apartment", "doorframe");

        // door
        const door = this.add.image(1230.400830697391, 553.0236897342318, "apartment", "door");
        door.setOrigin(0.41111903257787064, 0.682559245584979);

        // shelf
        this.add.image(695, 732, "apartment", "shelf");

        // fg
        const fg = this.add.image(720.731210119527, 880.2480417645054, "apartment", "fg");
        fg.setOrigin(0.5122996169816474, 0.9461231865865237);

        // windowlight
        this.add.image(734, 596, "apartment", "windowlight");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(1390.3082930413177, 636.6632205156897, 128, 128);
        rectangle_1.setOrigin(0.3930335393852946, 0.20049391027882546);

        // lists
        const sort = [fg, door];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 1320;
        doorMoveTo.y = 520;

        // rectangle_1 (components)
        const rectangle_1ZoneTrigger = new ZoneTrigger(rectangle_1);
        rectangle_1ZoneTrigger.callback = () => this.interface.loadWidget('Map');
        new SimpleButton(rectangle_1);
        new MoveTo(rectangle_1);

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
