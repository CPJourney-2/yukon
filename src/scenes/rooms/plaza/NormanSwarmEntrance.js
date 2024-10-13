import BaseContainer from '@scenes/base/BaseContainer'
import { Animation, Button, MoveTo } from '@components/components'
// You can write more code here

/* START OF COMPILED CODE */

export default class NormanSwarmEntrance extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Sprite} */
        this.laser1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.laser2;


        // door1
        const door1 = scene.add.image(3.628261089324951, 92.51008976090432, "normanswarmbuilding", "door");
        door1.setOrigin(0.5453148462016134, 0.9965499079833923);
        this.add(door1);

        // arch1
        const arch1 = scene.add.image(0, 0, "normanswarmbuilding", "arch");
        this.add(arch1);

        // lights1
        const lights1 = scene.add.sprite(-2, -45, "normanswarmbuilding", "lights0001");
        this.add(lights1);

        // laser1
        const laser1 = scene.add.sprite(-40, -37, "normanswarmbuilding", "laser0001");
        this.add(laser1);

        // door2
        const door2 = scene.add.image(234, 93, "normanswarmbuilding", "door");
        door2.setOrigin(0.5453148462016134, 0.9965499079833923);
        door2.flipX = true;
        this.add(door2);

        // arch2
        const arch2 = scene.add.image(232, 0, "normanswarmbuilding", "arch");
        arch2.flipX = true;
        this.add(arch2);

        // lights2
        const lights2 = scene.add.sprite(234, -45, "normanswarmbuilding", "lights0001");
        lights2.flipX = true;
        this.add(lights2);

        // laser2
        const laser2 = scene.add.sprite(277, -37, "normanswarmbuilding", "laser0001");
        laser2.flipX = true;
        this.add(laser2);

        // door1 (components)
        const door1Button = new Button(door1);
        door1Button.spriteName = "door";
        new MoveTo(door1);

        // lights1 (components)
        const lights1Animation = new Animation(lights1);
        lights1Animation.key = "lights";
        lights1Animation.end = 10;

        // laser1 (components)
        const laser1Animation = new Animation(laser1);
        laser1Animation.key = "laser";
        laser1Animation.end = 60;
        laser1Animation.repeat = 0;
        laser1Animation.autoPlay = false;

        // door2 (components)
        const door2Button = new Button(door2);
        door2Button.spriteName = "door";
        new MoveTo(door2);

        // lights2 (components)
        const lights2Animation = new Animation(lights2);
        lights2Animation.key = "lights";
        lights2Animation.end = 10;

        // laser2 (components)
        const laser2Animation = new Animation(laser2);
        laser2Animation.key = "laser";
        laser2Animation.end = 60;
        laser2Animation.repeat = 0;
        laser2Animation.autoPlay = false;

        this.laser1 = laser1;
        this.laser2 = laser2;

        /* START-USER-CTR-CODE */
        this.laser1.on('animationcomplete',() => this.world.room.triggerRoom(340, 226, 652))
        this.laser2.on('animationcomplete',() => this.world.room.triggerRoom(340, 226, 652))
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    turnOnLaser1() {
        this.laser1.__Animation.play()
    }

    turnOnLaser2() {
        this.laser2.__Animation.play()
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
