import IglooScene from '../IglooScene'
import { ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class Gym extends IglooScene {

    constructor() {
        super("Gym");

        /** @type {Phaser.GameObjects.Layer} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 780]
        this.wallSpawn = [760, 480]
        this.wallBounds = [510, 1110]
        this.floorFrame = 6

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("gym-pack", "assets/media/igloos/buildings/sprites/gym/gym-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.layer();

        // wood_1
        const wood_1 = this.add.image(1342, 742, "gym", "wood");
        wood_1.setOrigin(0.5084745762711864, 0.5185185185185185);
        wood_1.flipX = true;
        floor.add(wood_1);

        // wood
        const wood = this.add.image(177, 742, "gym", "wood");
        wood.setOrigin(0.5084745762711864, 0.5185185185185185);
        floor.add(wood);

        // floor_1
        const floor_1 = this.add.image(760, 753, "gym", "floor");
        floor_1.setOrigin(0.5004095004095004, 0.5);
        floor.add(floor_1);

        // wall
        const wall = this.add.image(760, 400, "gym", "wall");
        wall.setOrigin(0.5003903200624512, 0.5);

        // door
        const door = this.add.image(339, 571, "gym", "door");
        door.setOrigin(0.5084745762711864, 0.5);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(338, 654, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.5978567154497242, 0.7813925195197706);

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
