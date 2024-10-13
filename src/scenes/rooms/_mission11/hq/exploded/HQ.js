
// You can write more code here

import RoomScene from '@rooms/RoomScene'
import { MoveTo, Button, Animation, ShowHint, SimpleButton, ZoneTrigger, HoverAnimation } from '@components/components'

/* START OF COMPILED CODE */

export default class HQ extends RoomScene {

    constructor() {
        super("HQ");

        /** @type {Phaser.GameObjects.Sprite} */
        this.door;
        /** @type {Phaser.GameObjects.Sprite} */
        this.arrow_A;
        /** @type {Phaser.GameObjects.Sprite} */
        this.arrow_B;
        /** @type {Phaser.GameObjects.Sprite} */
        this.arrow_C;
        /** @type {Phaser.GameObjects.Sprite} */
        this.arrow_D;
        /** @type {Phaser.GameObjects.Sprite} */
        this.arrow_E;
        /** @type {Phaser.GameObjects.Sprite} */
        this.arrow_F;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cabinet;
        /** @type {Phaser.GameObjects.Container} */
        this.interfaceIcons;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {


            'sportshop': () => this.triggerRoom(210, 495, 580)


        }
        this.music = 1143

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("mission-hq-pack", "assets/media/rooms/_mission11/hq/mission-hq-pack.json");
    }

    /** @returns {void} */
    _create() {

        // triggerref
        this.add.image(791, 336, "mission-hq", "triggerref");

        // bg_furthest
        this.add.image(770, 481, "mission-hq", "bg_furthest");

        // second_door
        const second_door = this.add.image(186, 447, "mission-hq", "second_door");
        second_door.visible = false;

        // door
        const door = this.add.sprite(184, 442, "mission-hq", "curtains0001");

        // door_anim0001
        const door_anim0001 = this.add.sprite(194, 442, "mission-hq", "door_anim0001");

        // screens
        this.add.image(767, 419, "mission-hq", "screens");

        // second_wood
        const second_wood = this.add.image(307, 668, "mission-hq", "second_wood");
        second_wood.visible = false;

        // arrow_A
        const arrow_A = this.add.sprite(1486, 56, "mission-hq", "arrow_A0001");

        // arrow_B
        const arrow_B = this.add.sprite(793, 13, "mission-hq", "arrow_B0001");

        // arrow_C
        const arrow_C = this.add.sprite(1104, 8, "mission-hq", "arrow_C0001");

        // arrow_D
        const arrow_D = this.add.sprite(683, 193, "mission-hq", "arrow_D0001");

        // arrow_E
        const arrow_E = this.add.sprite(384, -37, "mission-hq", "arrow_E0001");

        // arrow_F
        const arrow_F = this.add.sprite(316, 222, "mission-hq", "arrow_F0001");

        // trashbin
        const trashbin = this.add.image(376, 742, "mission-hq", "trashbin");

        // ground_screen
        const ground_screen = this.add.image(516, 754, "mission-hq", "ground_screen");

        // cabinet_nonpsa
        const cabinet_nonpsa = this.add.image(1293.7389475099546, 576.7138748088317, "mission-hq", "closeted0001");
        cabinet_nonpsa.angle = 128;
        cabinet_nonpsa.setOrigin(0.4294675027453188, 0.7519722883125145);

        // cabinet
        const cabinet = this.add.sprite(1293.7389475099546, 576.7138748088317, "mission-hq", "closeted0001");
        cabinet.angle = 128;
        cabinet.setOrigin(0.4294675027453188, 0.7519722883125145);
        cabinet.visible = false;

        // popcorn_lowerground
        const popcorn_lowerground = this.add.image(922.0899166276074, 868.3924177993845, "mission-hq", "popcorn_lowerground");
        popcorn_lowerground.setOrigin(0.4975795654989559, 0.7749210187435883);

        // box
        const box = this.add.image(1223.624727259195, 764.907549774206, "mission-hq", "box");
        box.setOrigin(0.14478221049780554, 0.24932021892798542);

        // popcorn_midground
        const popcorn_midground = this.add.image(581.2697498828223, 879.7630014061325, "mission-hq", "popcorn_midground");
        popcorn_midground.setOrigin(0.49346830115507734, 0.8243861525359654);

        // timedown
        const timedown = this.add.image(778.3746948242188, 890.9147493749706, "mission-hq", "timedown");
        timedown.setOrigin(0.488875880191548, 0.8251607205660976);

        // scrap_right
        const scrap_right = this.add.image(1144.8662426162443, 755.5987278487329, "mission-hq", "scrap_right");
        scrap_right.setOrigin(0.5405704916574855, 0.6999545660261747);

        // scrap_mid
        const scrap_mid = this.add.image(1004, 726.1803114186546, "mission-hq", "scrap_mid");
        scrap_mid.setOrigin(0.5, 0.6025906909243414);

        // scrap_left
        const scrap_left = this.add.image(901, 633.9966851210401, "mission-hq", "scrap_left");
        scrap_left.setOrigin(0.5, 0.7057848565011782);

        // light_left0001
        const light_left0001 = this.add.sprite(312, 219, "mission-hq", "light_left0001");

        // light_right0001
        const light_right0001 = this.add.sprite(1246, 222, "mission-hq", "light_right0001");

        // keyboard_hanging0001
        const keyboard_hanging0001 = this.add.sprite(677, 94, "mission-hq", "keyboard_hanging0001");

        // popcorn_foreground
        const popcorn_foreground = this.add.image(793.0148269509426, 1247.3670681073204, "mission-hq", "popcorn_foreground");
        popcorn_foreground.setOrigin(0.5122046576171897, 1.2191622455705489);

        // triggerref_1
        const triggerref_1 = this.add.image(791, 336, "mission-hq", "triggerref");
        triggerref_1.visible = false;

        // interfaceIcons
        const interfaceIcons = this.add.container(1423, 751.0000610351562);

        // sign
        const sign = this.add.image(2, 0, "mission-hq", "sign");
        interfaceIcons.add(sign);

        // fish
        const fish = this.add.image(0, 117.99993896484375, "mission-hq", "fish");
        interfaceIcons.add(fish);

        // lists
        const sort = [popcorn_foreground, timedown, popcorn_midground, popcorn_lowerground, ground_screen, trashbin, cabinet_nonpsa, box];

        // door (components)
        const doorSimpleButton = new SimpleButton(door);
        doorSimpleButton.hoverCallback = () => this.HQDoor();
        doorSimpleButton.hoverOutCallback = () => this.HQDone();
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 203;
        doorMoveTo.y = 583;
        const doorAnimation = new Animation(door);
        doorAnimation.key = "curtains";
        doorAnimation.end = 10;
        doorAnimation.repeat = 0;
        doorAnimation.autoPlay = false;

        // door_anim0001 (components)
        const door_anim0001Animation = new Animation(door_anim0001);
        door_anim0001Animation.key = "door_anim";
        door_anim0001Animation.end = 41;

        // cabinet (components)
        const cabinetSimpleButton = new SimpleButton(cabinet);
        cabinetSimpleButton.hoverCallback = () => this.cabinetHover();
        cabinetSimpleButton.hoverOutCallback = () => this.cabinetDone();

        // light_left0001 (components)
        new Animation(light_left0001);

        // light_right0001 (components)
        new Animation(light_right0001);

        // keyboard_hanging0001 (components)
        new Animation(keyboard_hanging0001);

        // sign (components)
        const signButton = new Button(sign);
        signButton.spriteName = "sign";
        signButton.callback = () =>  this.interface.loadWidget('MissionMenu');

        // fish (components)
        const fishButton = new Button(fish);
        fishButton.spriteName = "fish";
        fishButton.callback = () =>  this.interface.loadWidget('FISH');

        this.door = door;
        this.arrow_A = arrow_A;
        this.arrow_B = arrow_B;
        this.arrow_C = arrow_C;
        this.arrow_D = arrow_D;
        this.arrow_E = arrow_E;
        this.arrow_F = arrow_F;
        this.cabinet = cabinet;
        this.interfaceIcons = interfaceIcons;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create(){
        super.create()
        this.timer

        let arrows = ['A', 'B', 'C', 'D', 'E', 'F']
        this.timer = this.time.addEvent({
            delay: 6000,
            repeat: -1,
            callback: () => {
                let random = `arrow_${arrows[Phaser.Math.Between(0,5)]}`
                this[random].play(random)
            }
        })

    }
    HQDoor(){
        this.door.__Animation.play()
    }
    HQDone(){
        this.door.__Animation.stop()
    }
    cabinetHover(){
        this.cabinet.play('cabinet-hover')
    }
    cabinetDone(){
        this.cabinet.play('cabinet-done')
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
