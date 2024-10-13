import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { SimpleButton, Button, MoveTo, Zone, Animation } from '@components/components'


/* START OF COMPILED CODE */

export default class Cave extends RoomScene {

    constructor() {
        super("Cave");

        /** @type {Phaser.GameObjects.Sprite} */
        this.bubble10001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bubble20001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bubble30001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.crab10001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.crab20001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fish10001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fish20001;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'boiler': () => this.triggerRoom(804, 628, 611),
            'plaza': () => this.triggerRoom(300, 582, 588),
            'mine': () => this.triggerRoom(808, 0, 0)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cave-pack", "assets/media/rooms/cave/cave-pack.json");
        this.load.pack("psaquest-pack", "assets/media/interface/game/psaquest/psaquest-pack.json");
    }

    /** @returns {void} */
    _create() {

        // window
        const window = this.add.image(515, 265, "cave", "window");
        window.setOrigin(0, 0);
        window.visible = false;

        // animbg
        this.add.image(828, 356, "cave-bg", "animbg");

        // bubble10001
        const bubble10001 = this.add.sprite(586, 359, "cave-bg", "bubble10001");
        bubble10001.visible = false;

        // bubble20001
        const bubble20001 = this.add.sprite(830, 359, "cave-bg", "bubble20001");
        bubble20001.visible = false;

        // bubble30001
        const bubble30001 = this.add.sprite(1065, 359, "cave-bg", "bubble30001");
        bubble30001.visible = false;

        // crab10001
        const crab10001 = this.add.sprite(829, 415, "cave-bg", "crab10132");
        crab10001.visible = false;

        // crab20001
        const crab20001 = this.add.sprite(804, 271, "cave-bg", "crab10107");
        crab20001.flipX = true;
        crab20001.flipY = true;
        crab20001.visible = false;

        // fish10001
        const fish10001 = this.add.sprite(795, 379, "cave-bg", "fish10001");
        fish10001.visible = false;

        // fish20001
        const fish20001 = this.add.sprite(854, 311, "cave-bg", "fish10001");
        fish20001.flipX = true;
        fish20001.visible = false;

        // bg
        const bg = this.add.image(0, -14, "cave", "bg");
        bg.setOrigin(0, 0);

        // ceiling
        const ceiling = this.add.image(1360, 743, "cave", "ceiling");
        ceiling.setOrigin(0.8945998698763825, 0.9345911949685535);

        // fg_1
        const fg_1 = this.add.image(-15, 880, "cave", "fg_1");
        fg_1.setOrigin(0, 1);

        // fg_2
        const fg_2 = this.add.image(1381, 830, "cave", "fg_2");
        fg_2.setOrigin(0.06493506493506493, 0.46387832699619774);

        // fg_3
        const fg_3 = this.add.image(0, 960, "cave", "fg_3");
        fg_3.setOrigin(0, 1);

        // chair_back
        const chair_back = this.add.image(357, 399, "cave", "chair_back");
        chair_back.setOrigin(0, 0);

        // chair_front
        const chair_front = this.add.image(391, 490, "cave", "chair_front");
        chair_front.setOrigin(0.5909090909090909, 0.7115384615384616);

        // door
        const door = this.add.image(104, 291, "cave", "door");
        door.setOrigin(0, 0);

        // ring
        const ring = this.add.image(376, 288, "cave", "ring");
        ring.setOrigin(0, 0);

        // board_1
        const board_1 = this.add.image(669, 455, "cave", "board_1");
        board_1.setOrigin(0, 0);

        // board_1_1
        const board_1_1 = this.add.image(930, 440, "cave", "board_1");
        board_1_1.angle = 10;
        board_1_1.setOrigin(0, 0);

        // board_2
        const board_2 = this.add.image(693, 457, "cave", "board_2");
        board_2.setOrigin(0, 0);

        // ladder_back
        const ladder_back = this.add.image(349, 756, "cave", "ladder_back");
        ladder_back.setOrigin(0.5068493150684932, 0.5);

        // ladder_front
        const ladder_front = this.add.image(317, 778, "cave", "ladder_front");

        // water_water_1
        const water_water_1 = this.add.image(813, 639, "cave", "water/water_1");
        water_water_1.setOrigin(0.5, 2.8333333333333335);

        // water_water_2
        const water_water_2 = this.add.image(811, 656, "cave", "water/water_2");
        water_water_2.setOrigin(0.5, 1.8571428571428572);

        // water_water_3
        const water_water_3 = this.add.image(809, 677, "cave", "water/water_3");
        water_water_3.setOrigin(0.5, 1.8571428571428572);

        // water_water_4
        const water_water_4 = this.add.image(807, 698, "cave", "water/water_4");
        water_water_4.setOrigin(0.5006675567423231, 1.8571428571428572);

        // water_water_5
        const water_water_5 = this.add.image(805, 719, "cave", "water/water_5");
        water_water_5.setOrigin(0.5006385696040868, 1.8571428571428572);

        // water_water_6
        const water_water_6 = this.add.image(803, 740, "cave", "water/water_6");
        water_water_6.setOrigin(0.5, 1.8571428571428572);

        // water_water_7
        const water_water_7 = this.add.image(801, 761, "cave", "water/water_7");
        water_water_7.setOrigin(0.5, 1.8571428571428572);

        // water_water_8
        const water_water_8 = this.add.image(799, 782, "cave", "water/water_8");
        water_water_8.setOrigin(0.5, 1.8571428571428572);

        // water_water_9
        const water_water_9 = this.add.image(798, 803, "cave", "water/water_9");
        water_water_9.setOrigin(0.5, 1.8571428571428572);

        // water_water_10
        const water_water_10 = this.add.image(797, 824, "cave", "water/water_10");
        water_water_10.setOrigin(0.5005313496280552, 1.8571428571428572);

        // water_water_11
        const water_water_11 = this.add.image(796, 845, "cave", "water/water_11");
        water_water_11.setOrigin(0.5, 1.8571428571428572);

        // line
        const line = this.add.image(807, 724, "cave", "line");
        line.setOrigin(0.5006337135614702, 2.0555555555555554);

        // zone
        const zone = this.add.rectangle(1319, 295, 115, 400);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // lists
        const sort = [line, water_water_11, water_water_10, water_water_9, water_water_8, water_water_7, water_water_6, water_water_5, water_water_4, water_water_3, water_water_2, water_water_1, ladder_front, ladder_back, chair_front, fg_2, ceiling, fg_3, fg_1];

        // bubble10001 (components)
        const bubble10001Animation = new Animation(bubble10001);
        bubble10001Animation.key = "bubble1";
        bubble10001Animation.end = 56;
        bubble10001Animation.repeat = 0;
        bubble10001Animation.autoPlay = false;

        // bubble20001 (components)
        const bubble20001Animation = new Animation(bubble20001);
        bubble20001Animation.key = "bubble2";
        bubble20001Animation.end = 56;
        bubble20001Animation.repeat = 0;
        bubble20001Animation.autoPlay = false;

        // bubble30001 (components)
        const bubble30001Animation = new Animation(bubble30001);
        bubble30001Animation.key = "bubble3";
        bubble30001Animation.end = 56;
        bubble30001Animation.repeat = 0;
        bubble30001Animation.autoPlay = false;

        // crab10001 (components)
        const crab10001Animation = new Animation(crab10001);
        crab10001Animation.key = "crab1";
        crab10001Animation.end = 234;
        crab10001Animation.repeat = 0;
        crab10001Animation.autoPlay = false;

        // crab20001 (components)
        const crab20001Animation = new Animation(crab20001);
        crab20001Animation.key = "crab1";
        crab20001Animation.end = 234;
        crab20001Animation.repeat = 0;
        crab20001Animation.autoPlay = false;

        // fish10001 (components)
        const fish10001Animation = new Animation(fish10001);
        fish10001Animation.key = "fish1";
        fish10001Animation.end = 140;
        fish10001Animation.repeat = 0;
        fish10001Animation.autoPlay = false;

        // fish20001 (components)
        const fish20001Animation = new Animation(fish20001);
        fish20001Animation.key = "fish1";
        fish20001Animation.end = 140;
        fish20001Animation.repeat = 0;
        fish20001Animation.autoPlay = false;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 190;
        doorMoveTo.y = 600;

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.callback = () => this.onZoneClick();

        this.bubble10001 = bubble10001;
        this.bubble20001 = bubble20001;
        this.bubble30001 = bubble30001;
        this.crab10001 = crab10001;
        this.crab20001 = crab20001;
        this.fish10001 = fish10001;
        this.fish20001 = fish20001;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.time.addEvent({
            delay: 4500,
            callback: () => this.playAnim(),
            loop: false
        })

        this.randomFishY()

        this.animations = [this.bubble10001, this.bubble20001, this.bubble30001, this.crab10001, this.crab20001, this.fish10001, this.fish20001];

        for(let anim of this.animations) {
            anim.on("animationcomplete", () => anim.visible = false)    
        }

        this.fish10001.on("animationcomplete", () => this.randomFishY())
        this.fish20001.on("animationcomplete", () => this.randomFishY2())
    }

    randomFishY() {
        this.fish10001.y = Math.floor((Math.random() * 80) + 316)
        this.fish10001.visible = false
    }

    randomFishY2() {
        this.fish20001.y = Math.floor((Math.random() * 80) + 316)
        this.fish20001.visible = false
    }

    playAnim() {
        let anims = this.animations;
        let currentAnim = anims[Math.floor((Math.random()*anims.length))]

        currentAnim.__Animation.play()
        currentAnim.visible = true

        this.time.addEvent({
            delay: 4500 + (Math.random()*10000),
            callback: () => this.playAnim(),
            loop: false
        })

    }

    onZoneClick() {
        this.world.client.sendMove(1266, 572)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
