import IglooScene from '../IglooScene'
import { Button, MoveTo, ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class BambooHut extends IglooScene {

    constructor() {
        super("BambooHut");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [520, 1050]
        this.floorFrame = 4

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("bamboohut-pack", "assets/media/igloos/buildings/sprites/bamboohut/bamboohut-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(769, 691, "bamboohut", "floor");
        floor.setOrigin(0.5004468275245755, 0.5017421602787456);

        // door
        const door = this.add.image(424, 474, "bamboohut", "door");
        door.setOrigin(0.5054945054945055, 0.5);

        // wall
        const wall = this.add.image(760, 402, "bamboohut", "wall");
        wall.setOrigin(0.5004101722723544, 0.5);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(423, 591.0000000000001, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.6116534088831793, 0.7961357746050495);

        // door (components)
        new MoveTo(door);
        const doorButton = new Button(door);
        doorButton.spriteName = "door";

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
