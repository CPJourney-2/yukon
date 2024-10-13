import RoomScene from '@rooms/RoomScene'
import { MoveTo, Button, SimpleButton, SnackStampArea } from '@components/components'
import SoccerGame from "../soccer/SoccerGame";

import RoomPin from '@rooms/RoomPin'


/* START OF COMPILED CODE */

export default class Rink extends RoomScene {

    constructor() {
        super("Rink");

        /** @type {SoccerGame} */
        this.soccerGame;
        /** @type {Array<Phaser.GameObjects.Image|SoccerGame>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 560, 400)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("stadium-rink-pack", "assets/media/rooms/rink/stadium/stadium-rink-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-33, -7, "stadium-rink", "bg");
        bg.setOrigin(0, 0);

        // rink_border
        const rink_border = this.add.image(444, 335, "stadium-rink", "rink_border");
        rink_border.setOrigin(0.30707692, 0.42490372);

        // sports
        const sports = this.add.image(1390, 250, "stadium-rink", "sports");
        sports.setOrigin(0.52966102, 0.80970149);

        // sports_door0001
        const sports_door0001 = this.add.image(1327, 280, "stadium-rink", "sports_door0001");
        sports_door0001.setOrigin(0.5125, 0.62962963);

        // fish_dogs
        const fish_dogs = this.add.image(166, 242, "stadium-rink", "fish_dogs");
        fish_dogs.setOrigin(0.51492537, 0.79347826);

        // left_bleachers
        const left_bleachers = this.add.image(105, 258, "stadium-rink", "left_bleachers");
        left_bleachers.setOrigin(0.44444444, 0.16260163);

        // bleachers_rail
        const bleachers_rail = this.add.image(38, 558, "stadium-rink", "bleachers_rail");
        bleachers_rail.setOrigin(0.82231405, 0.78181818);

        // right_bleachers
        const right_bleachers = this.add.image(1415, 258, "stadium-rink", "right_bleachers");
        right_bleachers.setOrigin(0.5473251, 0.16531165);

        // bleachers_rail_1
        const bleachers_rail_1 = this.add.image(1482, 558, "stadium-rink", "bleachers_rail");
        bleachers_rail_1.setOrigin(0.82231405, 0.78181818);
        bleachers_rail_1.flipX = true;

        // drink
        const drink = this.add.image(70, 485, "stadium-rink", "drink");
        drink.setOrigin(0.5, 0.75510204);

        // fg
        const fg = this.add.image(-64, 1046.9173886139422, "stadium-rink", "fg");
        fg.setOrigin(0, 0.9998385876423137);

        // trash
        const trash = this.add.image(858, 214, "stadium-rink", "trash");
        trash.setOrigin(0.44117647, 0.69642857);

        // snacks
        const snacks = this.add.image(1046, 230, "stadium-rink", "snacks");
        snacks.setOrigin(0.44080605, 0.79461279);

        // stand_base
        const stand_base = this.add.image(731, 126, "stadium-rink", "stand_base");
        stand_base.setOrigin(0.99404762, 0.36328125);

        // stand_middle
        const stand_middle = this.add.image(528, 171.34354168924654, "stadium-rink", "stand_middle");
        stand_middle.setOrigin(0.51265823, 0.4577875653931311);

        // stand_top
        const stand_top = this.add.image(522, 236, "stadium-rink", "stand_top");
        stand_top.setOrigin(0.50117647, 2.57831325);

        // goal_back
        const goal_back = this.add.image(1258, 441, "stadium-rink", "goal_back");
        goal_back.setOrigin(0.97183099, 0.48863636);

        // goal
        const goal = this.add.image(1273, 578, "stadium-rink", "goal");
        goal.setOrigin(0.58571429, 0.91902834);

        // goal_back_1
        const goal_back_1 = this.add.image(262, 441, "stadium-rink", "goal_back");
        goal_back_1.setOrigin(0.97183099, 0.48863636);
        goal_back_1.flipX = true;

        // goal_1
        const goal_1 = this.add.image(247, 578, "stadium-rink", "goal");
        goal_1.setOrigin(0.58571429, 0.91902834);
        goal_1.flipX = true;

        // snacks_door0001
        const snacks_door0001 = this.add.image(1214, 271.1074939726586, "stadium-rink", "snacks_door0001");
        snacks_door0001.setOrigin(0.5, 1.102150307501109);

        // snacks_ring
        this.add.image(1250, 200, "stadium-rink", "snacks_ring");

        // snackStampArea
        const snackStampArea = this.add.rectangle(180, 210, 200, 200);

        // soccerGame
        const soccerGame = new SoccerGame(this, 764, 529);
        this.add.existing(soccerGame);

        // lists
        const sort = [fg, goal_back, goal, goal_back_1, goal_1, snacks, sports_door0001, sports, right_bleachers, bleachers_rail_1, bleachers_rail, left_bleachers, fish_dogs, stand_middle, stand_base, stand_top, trash, rink_border, snacks_door0001, soccerGame];

        // snackStampArea (components)
        new SnackStampArea(snackStampArea);

        this.soccerGame = soccerGame;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.soccerGame.addListeners()
        this.soccerGame.sendGetBall()

        this.soccerGame.show()
    }

    update() {
        this.soccerGame.update()
    }

    stop() {
        this.soccerGame.removeListeners()

        super.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
