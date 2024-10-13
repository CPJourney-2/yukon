import IglooScene from '../IglooScene'
import { ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class TwoStory extends IglooScene {

    constructor() {
        super("TwoStory");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [520, 720]
        this.wallSpawn = [970, 200]
        this.wallBounds = [410, 1110]
        this.floorFrame = 18

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("twostory-pack", "assets/media/igloos/buildings/sprites/twostory/twostory-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(742, 559, "twostory", "floor");

        // door
        const door = this.add.image(232.24166339180516, 622.0082383623496, "twostory", "door");
        door.setOrigin(0.5203787581073197, 0.8155739726327652);

        // wall
        this.add.image(742, 421, "twostory", "wall");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(242.97014500876057, 637.4825608873566, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.5103403569839793, 0.8967956479257331);

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
