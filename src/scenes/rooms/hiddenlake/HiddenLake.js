
// You can write more code here

import RoomScene from "@rooms/RoomScene";
import { Animation, Button, MoveTo, SimpleButton, Zone, ShowHint } from '@components/components'
import RoomPin from '@rooms/RoomPin'

/* START OF COMPILED CODE */

export default class HiddenLake extends RoomScene {

    constructor() {
        super("HiddenLake");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'cave': () => this.triggerRoom(813, 1342, 424),
            'forest': () => this.triggerRoom(809, 870, 330),
            'underwater': () => {},
        }
        this.music = 666
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("hidden-lake-pack", "assets/media/rooms/hidden_lake/hidden-lake-pack.json");
    }

    /** @returns {void} */
    _create() {

        // blue
        this.add.image(787, 484, "hidden-lake", "blue");

        // animations_wave0001
        const animations_wave0001 = this.add.sprite(981, 697, "hidden-lake", "animations/wave0001");

        // bg
        this.add.image(760, 431, "hidden-lake", "bg");

        // animations_left_water_fall0001
        const animations_left_water_fall0001 = this.add.sprite(712, 278, "hidden-lake", "animations/left_water_fall0001");

        // animations_right_water_fall0001
        const animations_right_water_fall0001 = this.add.sprite(1080, 278, "hidden-lake", "animations/right_water_fall0001");

        // animations_top_left_water0001
        const animations_top_left_water0001 = this.add.sprite(693, 134, "hidden-lake", "animations/top_left_water0001");

        // animations_top_left_water20001
        const animations_top_left_water20001 = this.add.sprite(748, 132, "hidden-lake", "animations/top_left_water20001");

        // animations_top_right_water0001
        const animations_top_right_water0001 = this.add.sprite(1062, 142, "hidden-lake", "animations/top_right_water0001");

        // animations_top_right_water20001
        const animations_top_right_water20001 = this.add.sprite(1117, 147, "hidden-lake", "animations/top_right_water20001");

        // animations_right_bottom_water0001
        const animations_right_bottom_water0001 = this.add.sprite(1063, 451, "hidden-lake", "animations/right_bottom_water0001");

        // animations_right_bottom_water20001
        const animations_right_bottom_water20001 = this.add.sprite(1101, 450, "hidden-lake", "animations/right_bottom_water20001");

        // animations_left_bottom_water0001
        const animations_left_bottom_water0001 = this.add.sprite(708, 443, "hidden-lake", "animations/left_bottom_water0001");

        // animations_left_bottom_water20001
        const animations_left_bottom_water20001 = this.add.sprite(734, 446, "hidden-lake", "animations/left_bottom_water20001");

        // left_extra_water
        this.add.image(711, 455, "hidden-lake", "left_extra_water");

        // right_extra_water
        this.add.image(1082, 455, "hidden-lake", "right_extra_water");

        // rock
        this.add.image(273, 222, "hidden-lake", "rock");

        // animations_door0002
        this.add.image(1422, 275, "hidden-lake", "animations/door0002");

        // animations_right_water_splash0001
        const animations_right_water_splash0001 = this.add.sprite(1067, 417, "hidden-lake", "animations/right_water_splash0001");

        // animations_left_water_splah0001
        const animations_left_water_splah0001 = this.add.sprite(720, 411, "hidden-lake", "animations/left_water_splah0001");

        // frount
        this.add.image(771, 488, "hidden-lake", "frount");

        // ladder
        this.add.image(464, 130, "hidden-lake", "ladder");

        // animations_star1_0001
        const animations_star1_0001 = this.add.sprite(384, 705, "hidden-lake", "animations/star1_0001");

        // animations_star2_0001
        const animations_star2_0001 = this.add.sprite(435, 845, "hidden-lake", "animations/star2_0001");

        // animations_star30001
        const animations_star30001 = this.add.sprite(378, 265, "hidden-lake", "animations/star30001");

        // animations_star40001
        const animations_star40001 = this.add.sprite(843, 438, "hidden-lake", "animations/star40001");

        // animations_star50001
        const animations_star50001 = this.add.sprite(1243, 422, "hidden-lake", "animations/star50001");

        // rock2
        this.add.image(48, 453, "hidden-lake", "rock2");

        // coin1
        this.add.image(89, 636, "hidden-lake", "coin1");

        // rock1
        this.add.image(64, 626, "hidden-lake", "rock1");

        // astro_back
        this.add.image(221, 735, "hidden-lake", "astro_back");

        // astro_fg
        this.add.image(202, 774, "hidden-lake", "astro_fg");

        // water_1
        const water_1 = this.add.image(1258, 865.8077658064776, "hidden-lake", "water/1");
        water_1.setOrigin(0.5, 1.3328115470709718);

        // water_2
        const water_2 = this.add.image(1149, 839.960089765127, "hidden-lake", "water/2");
        water_2.setOrigin(0.5, 0.867060143604809);

        // water_3
        const water_3 = this.add.image(1101, 830.960089765127, "hidden-lake", "water/3");
        water_3.setOrigin(0.5, 0.7902336019200815);

        // water_4
        const water_4 = this.add.image(1088, 810.7905545568569, "hidden-lake", "water/4");
        water_4.setOrigin(0.5, 0.7343070382457735);

        // water_5
        const water_5 = this.add.image(1070, 794.960089765127, "hidden-lake", "water/5");
        water_5.setOrigin(0.5, 0.762737787001337);

        // water_6
        const water_6 = this.add.image(1020, 775.7715140620257, "hidden-lake", "water/6");
        water_6.setOrigin(0.5, 0.7401163036568257);

        // water_7
        const water_7 = this.add.image(1019, 755.9981707547894, "hidden-lake", "water/7");
        water_7.setOrigin(0.5, 0.698095950516881);

        // water_8
        const water_8 = this.add.image(1033, 738.5753343680233, "hidden-lake", "water/8");
        water_8.setOrigin(0.5, 0.7205219071791701);

        // water_9
        const water_9 = this.add.image(1058, 715.1867464578908, "hidden-lake", "water/9");
        water_9.setOrigin(0.5, 0.7175171221361839);

        // water_10
        const water_10 = this.add.image(1068, 691.2172234566518, "hidden-lake", "water/10");
        water_10.setOrigin(0.5, 0.6901721124962057);

        // water_11
        const water_11 = this.add.image(1067, 672.4134031506544, "hidden-lake", "water/11");
        water_11.setOrigin(0.5, 0.6941340315065441);

        // water_12
        const water_12 = this.add.image(1051, 652.6362273303893, "hidden-lake", "water/12");
        water_12.setOrigin(0.5, 0.6793289657310712);

        // water_13
        const water_13 = this.add.image(998, 640.6019788537557, "hidden-lake", "water/13");
        water_13.setOrigin(0.5, 0.7215266543414588);

        // water_14
        const water_14 = this.add.image(939, 623.9095706376256, "hidden-lake", "water/14");
        water_14.setOrigin(0.5, 0.7153216853444361);

        // water_15
        const water_15 = this.add.image(903, 608.0172112496206, "hidden-lake", "water/15");
        water_15.setOrigin(0.5, 0.7023107579746869);

        // water_16
        const water_16 = this.add.image(870, 591.1210193485869, "hidden-lake", "water/16");
        water_16.setOrigin(0.5, 0.6960107299851248);

        // water_17
        const water_17 = this.add.image(836, 575.2172234566518, "hidden-lake", "water/17");
        water_17.setOrigin(0.5, 0.7067088179306584);

        // water_18
        const water_18 = this.add.image(808, 559.7209949345244, "hidden-lake", "water/18");
        water_18.setOrigin(0.5, 0.709224936500976);

        // water_19
        const water_19 = this.add.image(811, 539.5133787365919, "hidden-lake", "water/19");
        water_19.setOrigin(0.5, 0.7457392803880304);

        // water_20
        const water_20 = this.add.image(834, 517.9324309436705, "hidden-lake", "water/20");
        water_20.setOrigin(0.5, 0.7723819319607115);

        // water_21
        const water_21 = this.add.image(703, 514.3943626558232, "hidden-lake", "water/21");
        water_21.setOrigin(0.5, 1.3557745062329287);

        // barrel
        this.add.image(288, 249, "hidden-lake", "barrel");

        // rock4
        this.add.image(606, 304, "hidden-lake", "rock4");

        // rock3
        this.add.image(578, 369, "hidden-lake", "rock3");

        // rock5
        this.add.image(329, 356, "hidden-lake", "rock5");

        // rock6
        this.add.image(231, 298, "hidden-lake", "rock6");

        // coin_rock
        this.add.image(526, 464, "hidden-lake", "coin_rock");

        // coin2
        this.add.image(328, 318, "hidden-lake", "coin2");

        // fg
        const fg = this.add.image(763, 1044.731633577818, "hidden-lake", "fg");
        fg.setOrigin(0.5, 1.0786184770264529);

        // lists
        const sort = [water_1, water_21, water_20, water_19, water_18, water_17, water_16, water_15, water_14, water_13, water_12, water_11, water_10, water_9, water_8, water_7, water_6, water_5, water_4, water_3, water_2, fg];

        // animations_wave0001 (components)
        const animations_wave0001Animation = new Animation(animations_wave0001);
        animations_wave0001Animation.key = "animations/wave";
        animations_wave0001Animation.end = 250;

        // animations_left_water_fall0001 (components)
        const animations_left_water_fall0001Animation = new Animation(animations_left_water_fall0001);
        animations_left_water_fall0001Animation.key = "animations/left_water_fall";
        animations_left_water_fall0001Animation.end = 30;

        // animations_right_water_fall0001 (components)
        const animations_right_water_fall0001Animation = new Animation(animations_right_water_fall0001);
        animations_right_water_fall0001Animation.key = "animations/right_water_fall";
        animations_right_water_fall0001Animation.end = 30;

        // animations_top_left_water0001 (components)
        const animations_top_left_water0001Animation = new Animation(animations_top_left_water0001);
        animations_top_left_water0001Animation.key = "animations/top_left_water";
        animations_top_left_water0001Animation.end = 30;

        // animations_top_left_water20001 (components)
        const animations_top_left_water20001Animation = new Animation(animations_top_left_water20001);
        animations_top_left_water20001Animation.key = "animations/top_left_water2";
        animations_top_left_water20001Animation.end = 30;

        // animations_top_right_water0001 (components)
        const animations_top_right_water0001Animation = new Animation(animations_top_right_water0001);
        animations_top_right_water0001Animation.key = "animations/top_right_water";
        animations_top_right_water0001Animation.end = 30;

        // animations_top_right_water20001 (components)
        const animations_top_right_water20001Animation = new Animation(animations_top_right_water20001);
        animations_top_right_water20001Animation.key = "animations/top_right_water2";
        animations_top_right_water20001Animation.end = 30;

        // animations_right_bottom_water0001 (components)
        const animations_right_bottom_water0001Animation = new Animation(animations_right_bottom_water0001);
        animations_right_bottom_water0001Animation.key = "animations/right_bottom_water";
        animations_right_bottom_water0001Animation.end = 30;

        // animations_right_bottom_water20001 (components)
        const animations_right_bottom_water20001Animation = new Animation(animations_right_bottom_water20001);
        animations_right_bottom_water20001Animation.key = "animations/right_bottom_water2";
        animations_right_bottom_water20001Animation.end = 30;

        // animations_left_bottom_water0001 (components)
        const animations_left_bottom_water0001Animation = new Animation(animations_left_bottom_water0001);
        animations_left_bottom_water0001Animation.key = "animations/left_bottom_water";
        animations_left_bottom_water0001Animation.end = 30;

        // animations_left_bottom_water20001 (components)
        const animations_left_bottom_water20001Animation = new Animation(animations_left_bottom_water20001);
        animations_left_bottom_water20001Animation.key = "animations/left_bottom_water2";
        animations_left_bottom_water20001Animation.end = 30;

        // animations_right_water_splash0001 (components)
        const animations_right_water_splash0001Animation = new Animation(animations_right_water_splash0001);
        animations_right_water_splash0001Animation.key = "animations/right_water_splash";
        animations_right_water_splash0001Animation.end = 12;

        // animations_left_water_splah0001 (components)
        const animations_left_water_splah0001Animation = new Animation(animations_left_water_splah0001);
        animations_left_water_splah0001Animation.key = "animations/left_water_splah";
        animations_left_water_splah0001Animation.end = 12;

        // animations_star1_0001 (components)
        const animations_star1_0001Animation = new Animation(animations_star1_0001);
        animations_star1_0001Animation.key = "animations/star1_";
        animations_star1_0001Animation.end = 52;

        // animations_star2_0001 (components)
        const animations_star2_0001Animation = new Animation(animations_star2_0001);
        animations_star2_0001Animation.key = "animations/star2_";
        animations_star2_0001Animation.end = 52;

        // animations_star30001 (components)
        const animations_star30001Animation = new Animation(animations_star30001);
        animations_star30001Animation.key = "animations/star3";
        animations_star30001Animation.end = 52;

        // animations_star40001 (components)
        const animations_star40001Animation = new Animation(animations_star40001);
        animations_star40001Animation.key = "animations/star4";
        animations_star40001Animation.end = 52;

        // animations_star50001 (components)
        const animations_star50001Animation = new Animation(animations_star50001);
        animations_star50001Animation.key = "animations/star5";
        animations_star50001Animation.end = 52;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here
    create() {
        super.create()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
