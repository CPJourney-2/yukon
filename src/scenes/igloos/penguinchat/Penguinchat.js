
// You can write more code here

/* START OF COMPILED CODE */

import IglooScene from "../IglooScene";
import Animation from "../../components/Animation";
import ZoneTrigger from "../../components/ZoneTrigger";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Penguinchat extends IglooScene {

    constructor() {
        super("Penguinchat");

        /** @type {Phaser.GameObjects.Layer} */
        this.floor;


        /* START-USER-CTR-CODE */
        this.floorSpawn = [760, 760]
        this.wallSpawn = [750, 320]
        this.wallBounds = [580, 1000]
        this.floorFrame = 1
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("penguinchat-pack", "assets/media/igloos/buildings/sprites/penguinchat/penguinchat-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.layer();

        // ellipse_1
        const ellipse_1 = this.add.ellipse(758, 623, 128, 128);
        ellipse_1.scaleX = 4.861492659181984;
        ellipse_1.scaleY = 3.4199804822419697;
        ellipse_1.isStroked = true;
        ellipse_1.strokeColor = 0;
        floor.add(ellipse_1);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(741, 521, 128, 128);
        rectangle_1.scaleX = 26.923623185290104;
        rectangle_1.scaleY = 11.189798848949042;
        rectangle_1.isFilled = true;
        floor.add(rectangle_1);

        // bg
        this.add.image(760, 480, "penguinchat+", "bg");

        // bandguy20001
        const bandguy20001 = this.add.sprite(775, 358, "penguinchat+", "drum0001");

        // bandguy10001
        const bandguy10001 = this.add.sprite(655, 350, "penguinchat+", "piano0001");

        // bandguy30001
        const bandguy30001 = this.add.sprite(864, 395, "penguinchat+", "violin0001");

        // rectangle
        const rectangle = this.add.rectangle(495.1367879743403, 480.73130507884485, 128, 128);
        rectangle.scaleX = 1.6987766126222235;
        rectangle.scaleY = 1.5897100335089185;
        rectangle.setOrigin(0.4835133440867163, 0.7063557648391405);

        // bandguy20001 (components)
        const bandguy20001Animation = new Animation(bandguy20001);
        bandguy20001Animation.key = "drum";
        bandguy20001Animation.end = 8;

        // bandguy10001 (components)
        const bandguy10001Animation = new Animation(bandguy10001);
        bandguy10001Animation.key = "piano";
        bandguy10001Animation.end = 12;

        // bandguy30001 (components)
        const bandguy30001Animation = new Animation(bandguy30001);
        bandguy30001Animation.key = "violin";
        bandguy30001Animation.end = 6;

        // rectangle (components)
        const rectangleZoneTrigger = new ZoneTrigger(rectangle);
        rectangleZoneTrigger.callback = () => this.interface.loadWidget('Map');

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
