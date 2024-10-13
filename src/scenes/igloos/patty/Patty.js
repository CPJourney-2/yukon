import IglooScene from '../IglooScene'
import { Animation, ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class Patty extends IglooScene {

    constructor() {
        super("Patty");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 760]
        this.wallSpawn = [750, 320]
        this.wallBounds = [580, 1000]
        this.floorFrame = 16

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("patty-pack", "assets/media/igloos/buildings/sprites/patty/patty-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(759.9999992070846, 679, "patty", "floor");
        floor.setOrigin(0.5006337135614702, 0.5);

        // wall
        this.add.image(760, 480, "patty", "wall");

        // right
        this.add.image(1082, 494, "patty", "right");

        // rightholder
        this.add.image(1228, 509, "patty", "rightholder");

        // fireback
        const fireback = this.add.image(768, 532, "patty", "fireback");
        fireback.scaleX = 0.75;
        fireback.scaleY = 0.75;

        // firepit
        const firepit = this.add.image(769, 575, "patty", "firepit");
        firepit.scaleX = 0.75;
        firepit.scaleY = 0.75;

        // fire_0001
        const fire_0001 = this.add.sprite(767, 544, "patty", "fire_0001");

        // fireholder
        const fireholder = this.add.image(770, 480, "patty", "fireholder");
        fireholder.scaleX = 0.75;
        fireholder.scaleY = 0.75;

        // stairs
        this.add.image(486, 498, "patty", "stairs");

        // platform
        this.add.image(891, 410, "patty", "platform");

        // door
        this.add.image(301, 387, "patty", "door");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(288, 452, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.4934015560906795, 0.7143424794011963);

        // fire_0001 (components)
        const fire_0001Animation = new Animation(fire_0001);
        fire_0001Animation.key = "fire_";
        fire_0001Animation.end = 16;

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
