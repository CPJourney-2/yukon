import IglooScene from "../IglooScene";
import { ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class GreenClover extends IglooScene {

    constructor() {
        super("GreenClover");

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

        this.load.pack("greenclover-pack", "assets/media/igloos/buildings/sprites/greenclover/greenclover-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.container(0, 0);

        // grass_floor
        const grass_floor = this.add.image(495, 645, "greenclover", "grass_floor");
        floor.add(grass_floor);

        // floor_1
        const floor_1 = this.add.image(936, 622, "greenclover", "main_floor");
        floor.add(floor_1);

        // stairs_top
        const stairs_top = this.add.image(793, 677, "greenclover", "stairs_top");
        floor.add(stairs_top);

        // walls
        this.add.image(760, 480, "greenclover", "walls");

        // door
        this.add.image(719, 245, "greenclover", "door0001");

        // stairs
        this.add.image(811, 674, "greenclover", "stairs");

        // bottomwall
        this.add.image(957, 817, "greenclover", "bottomwall");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(711.8059425569436, 340.38553216582847, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.47739292200966954, 0.7390574206187307);

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
