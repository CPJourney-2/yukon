
// You can write more code here

import IglooScene from "../IglooScene";
import { ZoneTrigger } from '@components/components'

/* START OF COMPILED CODE */

export default class GreyIceCastle extends IglooScene {

    constructor() {
        super("GreyIceCastle");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */
        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [520, 1050]
        this.floorFrame = 8
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("greyicecastle-pack", "assets/media/igloos/buildings/sprites/greyicecastle/greyicecastle-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 414, "greyicecastle", "bg");

        // door
        this.add.image(758, 516, "greyicecastle", "door");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(762.2086508803304, 606.4289194800831, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.525233914548143, 0.8277301745442434);

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

// You can write more code here
