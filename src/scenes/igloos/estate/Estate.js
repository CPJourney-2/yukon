import IglooScene from "../IglooScene";
import { Button, MoveTo, ZoneTrigger } from '@components/components'

/* START OF COMPILED CODE */

export default class Estate extends IglooScene {

    constructor() {
        super("Estate");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */
        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [520, 1050]
        this.floorFrame = 11
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("estate-pack", "assets/media/igloos/buildings/sprites/estate/estate-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(754, 374, "estate", "bg");

        // door
        const door = this.add.image(305, 643, "estate", "door");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(311, 753, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.42309859862595856, 0.7912213562432897);

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

    // Write your code here


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
