import IglooScene from '../IglooScene'
import { ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class MermaidCove extends IglooScene {

    constructor() {
        super("MermaidCove");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [773, 592]
        this.wallSpawn = [773, 231]
        this.wallBounds = [580, 1000]
        this.floorFrame = 14

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("mermaidcove-pack", "assets/media/igloos/buildings/sprites/mermaidcove/mermaidcove-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(-42, -144, "mermaidcove", "floor");
        floor.setOrigin(0, 0);

        // background
        const background = this.add.image(-42, -144, "mermaidcove", "background");
        background.setOrigin(0, 0);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(392, 697, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0, 0);

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
