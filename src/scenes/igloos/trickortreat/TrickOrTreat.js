
import IglooScene from "../IglooScene";
import { ZoneTrigger } from '@components/components'

/* START OF COMPILED CODE */

export default class TrickOrTreat extends IglooScene {

    constructor() {
        super("TrickOrTreat");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [490, 1000]
        this.floorFrame = 14
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("trickortreat-pack", "assets/media/igloos/buildings/sprites/trickortreat/trickortreat-pack.json");
    }

    /** @returns {void} */
    _create() {

        // chimneys
        this.add.image(814, 182, "trickortreat", "chimneys");

        // floor
        const floor = this.add.image(740, 481, "trickortreat", "floor");

        // background
        this.add.image(894, 455, "trickortreat", "background");

        // paths
        this.add.image(716, 625, "trickortreat", "paths");

        // castle
        this.add.image(726, 301, "trickortreat", "castle");

        // castlebush
        this.add.image(723, 449, "trickortreat", "castlebush");

        // cabin
        this.add.image(259, 403, "trickortreat", "cabin");

        // sidewalk
        this.add.image(640, 844, "trickortreat", "sidewalk");

        // snowpile
        this.add.image(760, 751, "trickortreat", "snowpile");

        // cabinbush
        this.add.image(85, 613, "trickortreat", "cabinbush");

        // igloo
        this.add.image(1234, 411, "trickortreat", "igloo");

        // igloobush
        this.add.image(1398, 553, "trickortreat", "igloobush");

        // exit
        this.add.image(146, 694, "trickortreat", "exit");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(160, 807, 128, 128);

        // lists
        const sort = [];

        // rectangle_1 (components)
        const rectangle_1ZoneTrigger = new ZoneTrigger(rectangle_1);
        rectangle_1ZoneTrigger.callback = () => this.interface.loadWidget('Map');

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
