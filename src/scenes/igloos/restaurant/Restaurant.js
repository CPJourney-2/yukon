
import IglooScene from "../IglooScene";
import { ZoneTrigger } from '@components/components'

/* START OF COMPILED CODE */

export default class Restaurant extends IglooScene {

    constructor() {
        super("Restaurant");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */
        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [520, 1050]
        this.floorFrame = 12
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("restaurant-pack", "assets/media/igloos/buildings/sprites/restaurant/restaurant-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(768, 691, "restaurant", "floor");

        // walls
        this.add.image(760, 445.5, "restaurant", "walls");

        // door0001
        this.add.image(279, 550, "restaurant", "door0001");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(300, 654, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.5426699417159034, 0.6044734584964262);

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
