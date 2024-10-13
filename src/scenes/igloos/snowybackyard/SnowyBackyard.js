import IglooScene from "../IglooScene";
import { ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class SnowyBackyard extends IglooScene {

    constructor() {
        super("SnowyBackyard");

        /** @type {Phaser.GameObjects.Container} */
        this.floor;


        /* START-USER-CTR-CODE */
        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [520, 1050]
        this.floorFrame = 3
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("snowybackyard-pack", "assets/media/igloos/buildings/sprites/snowybackyard/snowybackyard-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.container(0, 0);

        // snow_floor
        const snow_floor = this.add.image(495, 656, "snowybackyard", "snow");
        floor.add(snow_floor);

        // floor_1
        const floor_1 = this.add.image(936, 622, "snowybackyard", "floor_1");
        floor.add(floor_1);

        // stairs_top
        const stairs_top = this.add.image(785, 674, "snowybackyard", "stairs_top");
        floor.add(stairs_top);

        // walls
        this.add.image(760, 480, "snowybackyard", "walls");

        // door
        this.add.image(719, 245, "snowybackyard", "door");

        // stairs
        this.add.image(806, 671, "snowybackyard", "stairs");

        // bottomwall
        this.add.image(957, 817, "snowybackyard", "smallwall");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(702, 323, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.4460930876817173, 0.7027618257316176);

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
