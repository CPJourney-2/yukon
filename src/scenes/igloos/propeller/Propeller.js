import IglooScene from '../IglooScene'

import { Button, MoveTo, Animation, ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class Propeller extends IglooScene {

    constructor() {
        super("Propeller");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image} */
        this.floor_1;
        /** @type {Phaser.GameObjects.Image} */
        this.floor_pt2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fan;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 760]
        this.wallSpawn = [750, 320]
        this.wallBounds = [580, 1000]
        this.floorFrame = 1

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("propeller-pack", "assets/media/igloos/buildings/sprites/propeller/propeller-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(384, 509, "propeller", "floormain");
        floor.setOrigin(0, 0);

        // floor_1
        const floor_1 = this.add.image(5, 10, "propeller", "floor");
        floor_1.setOrigin(0, 0);

        // floor_pt2
        const floor_pt2 = this.add.image(5, 10, "propeller", "floorpt2");
        floor_pt2.setOrigin(0, 0);

        // wall
        const wall = this.add.image(5, 10, "propeller", "bg");
        wall.setOrigin(0, 0);

        // fan
        const fan = this.add.sprite(760, 109, "propeller", "fan0001");

        // door
        const door = this.add.image(484, 457, "propeller", "door");

        // button
        const button = this.add.image(944, 432, "propeller", "button");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(511, 557.0000000000001, 128, 128);
        rectangle_1.scaleX = 1.6987766126222235;
        rectangle_1.scaleY = 1.5897100335089185;
        rectangle_1.setOrigin(0.5748622263939656, 0.7568204277109731);

        // lists
        const sort = [fan];

        // fan (components)
        const fanAnimation = new Animation(fan);
        fanAnimation.key = "fan";
        fanAnimation.end = 14;
        fanAnimation.autoPlay = false;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 528;
        doorMoveTo.y = 586;

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "button";
        buttonButton.callback = () => {this.toggleFan()};
        buttonButton.activeFrame = true;

        // rectangle_1 (components)
        const rectangle_1ZoneTrigger = new ZoneTrigger(rectangle_1);
        rectangle_1ZoneTrigger.callback = () => this.interface.loadWidget('Map');

        this.floor = floor;
        this.floor_1 = floor_1;
        this.floor_pt2 = floor_pt2;
        this.fan = fan;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()

        this.animationPlaying = false
        this.fixFloor()
    }

    updateFlooring(flooring) {
        super.updateFlooring(flooring)
        this.fixFloor()
    }

    fixFloor() {
        this.floor_pt2.visible = !this.flooring || !this.flooring.active
    }

    toggleFan() {
        this.animationPlaying = !this.animationPlaying
        this.animationPlaying ? this.fan.__Animation.play() : this.fan.__Animation.stop()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
