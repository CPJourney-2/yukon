
import IglooScene from "../IglooScene";
import { ZoneTrigger } from '@components/components'

/* START OF COMPILED CODE */

export default class Watchtower extends IglooScene {

    constructor() {
        super("Watchtower");

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

        this.load.pack("watchtower-pack", "assets/media/igloos/buildings/sprites/watchtower/watchtower-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(774, 459, "watchtower", "watchtower");
        floor.scaleX = 1.1;
        floor.scaleY = 1.1;

        // steps_png
        const steps_png = this.add.image(742, 771.5175842920186, "watchtower", "steps");
        steps_png.scaleX = 0.9807693708650917;
        steps_png.scaleY = 1.2570343105151782;
        steps_png.setOrigin(0.5, 0.004588792661150276);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(742.9999999999999, 821.3862706044072, 128, 128);
        rectangle_1.scaleX = 4;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.4999999999999991, 0.2512629821750778);

        // rectangle_2
        const rectangle_2 = this.add.rectangle(816.8373756059584, 821, 128, 128);
        rectangle_2.scaleX = 4;
        rectangle_2.scaleY = 1.5897100335089185;
        rectangle_2.setOrigin(0.6422604992303866, 0.2512629821750778);

        // rectangle_3
        const rectangle_3 = this.add.rectangle(669.1626243940414, 822, 128, 128);
        rectangle_3.scaleX = 4;
        rectangle_3.scaleY = 1.5897100335089185;
        rectangle_3.setOrigin(0.35773950076961114, 0.2512629821750778);

        // rectangle_4
        const rectangle_4 = this.add.rectangle(596.8603049720399, 822, 128, 128);
        rectangle_4.scaleX = 4;
        rectangle_4.scaleY = 1.5897100335089185;
        rectangle_4.setOrigin(0.22074790891812657, 0.2512629821750778);

        // rectangle_5
        const rectangle_5 = this.add.rectangle(886.1396607305953, 822, 128, 128);
        rectangle_5.scaleX = 4;
        rectangle_5.scaleY = 1.5897100335089185;
        rectangle_5.setOrigin(0.779252091081871, 0.2512629821750778);

        // rectangle_6
        const rectangle_6 = this.add.rectangle(942.9536115599692, 822, 128, 128);
        rectangle_6.scaleX = 4;
        rectangle_6.scaleY = 1.5897100335089185;
        rectangle_6.setOrigin(0.8846302386599358, 0.2512629821750778);

        // rectangle_7
        const rectangle_7 = this.add.rectangle(994, 822, 128, 128);
        rectangle_7.scaleX = 4;
        rectangle_7.scaleY = 1.5897100335089185;
        rectangle_7.setOrigin(1.0005462009958073, 0.2512629821750778);

        // rectangle
        const rectangle = this.add.rectangle(549, 822, 128, 128);
        rectangle.scaleX = 4;
        rectangle.scaleY = 1.5897100335089185;
        rectangle.setOrigin(0.12063866871896484, 0.2512629821750778);

        // rectangle_8
        const rectangle_8 = this.add.rectangle(489, 822, 128, 128);
        rectangle_8.scaleX = 4;
        rectangle_8.scaleY = 1.5897100335089185;
        rectangle_8.setOrigin(0.004722706383093189, 0.2512629821750778);

        // rectangle_1 (components)
        const rectangle_1ZoneTrigger = new ZoneTrigger(rectangle_1);
        rectangle_1ZoneTrigger.callback = () => this.interface.loadWidget('Map');

        // rectangle_2 (components)
        const rectangle_2ZoneTrigger = new ZoneTrigger(rectangle_2);
        rectangle_2ZoneTrigger.callback = () => this.interface.loadWidget('Map');

        // rectangle_3 (components)
        const rectangle_3ZoneTrigger = new ZoneTrigger(rectangle_3);
        rectangle_3ZoneTrigger.callback = () => this.interface.loadWidget('Map');

        // rectangle_4 (components)
        const rectangle_4ZoneTrigger = new ZoneTrigger(rectangle_4);
        rectangle_4ZoneTrigger.callback = () => this.interface.loadWidget('Map');

        // rectangle_5 (components)
        const rectangle_5ZoneTrigger = new ZoneTrigger(rectangle_5);
        rectangle_5ZoneTrigger.callback = () => this.interface.loadWidget('Map');

        // rectangle_6 (components)
        const rectangle_6ZoneTrigger = new ZoneTrigger(rectangle_6);
        rectangle_6ZoneTrigger.callback = () => this.interface.loadWidget('Map');

        // rectangle_7 (components)
        const rectangle_7ZoneTrigger = new ZoneTrigger(rectangle_7);
        rectangle_7ZoneTrigger.callback = () => this.interface.loadWidget('Map');

        // rectangle (components)
        const rectangleZoneTrigger = new ZoneTrigger(rectangle);
        rectangleZoneTrigger.callback = () => this.interface.loadWidget('Map');

        // rectangle_8 (components)
        const rectangle_8ZoneTrigger = new ZoneTrigger(rectangle_8);
        rectangle_8ZoneTrigger.callback = () => this.interface.loadWidget('Map');

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
