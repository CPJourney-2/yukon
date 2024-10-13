import IglooScene from '../IglooScene'
import { Button, MoveTo, ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class CozyCottage extends IglooScene {

    constructor() {
        super("CozyCottage");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 760]
        this.wallSpawn = [750, 320]
        this.wallBounds = [580, 1000]
        this.floorFrame = 13

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cozycottage-pack", "assets/media/igloos/buildings/sprites/cozycottage/cozycottage-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(570, 587, "cozycottage", "floor");

        // bg
        this.add.image(760, 480, "cozycottage", "bg");

        // door
        const door = this.add.image(210, 317, "cozycottage", "door");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(221.00000000000003, 400.00000000000006, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.6484445913723932, 0.8944241418402405);

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
