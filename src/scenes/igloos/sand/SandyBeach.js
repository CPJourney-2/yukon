import IglooScene from "../IglooScene";
import { Button, MoveTo, ZoneTrigger } from '@components/components'

/* START OF COMPILED CODE */

export default class SandyBeach extends IglooScene {

    constructor() {
        super("SandyBeach");

        /** @type {Phaser.GameObjects.Image} */
        this.stairs_top;
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

        this.load.pack("sandybeach-pack", "assets/media/igloos/buildings/sprites/sand/sandybeach-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.container(0, 0);

        // grass_floor
        const grass_floor = this.add.image(471, 609, "sandybeach", "grass_floor");
        floor.add(grass_floor);

        // floor_1
        const floor_1 = this.add.image(945, 624, "sandybeach", "floor_1");
        floor.add(floor_1);

        // stairs_top
        const stairs_top = this.add.image(787, 678, "sandybeach", "stairs_top");
        floor.add(stairs_top);

        // walls
        this.add.image(948, 484, "sandybeach", "walls");

        // door
        const door = this.add.image(719, 245, "sandybeach", "door");

        // stairs
        this.add.image(808, 675, "sandybeach", "stairs");

        // bottomwall
        this.add.image(964, 817, "sandybeach", "bottomwall");

        // grass_floor_1
        this.add.image(991, 330, "sandybeach", "decor");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(704, 342.00000000000006, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.4460930876817173, 0.7027618257316176);

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        new MoveTo(door);

        // rectangle_1 (components)
        const rectangle_1ZoneTrigger = new ZoneTrigger(rectangle_1);
        rectangle_1ZoneTrigger.callback = () => this.interface.loadWidget('Map');

        this.stairs_top = stairs_top;
        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
