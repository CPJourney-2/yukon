import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, ShowHint, SimpleButton, ZoneTrigger } from '@components/components'

import CoffeeWork from '@engine/world/room/work/CoffeeWork'

/* START OF COMPILED CODE */

export default class Coffee extends RoomScene {

    constructor() {
        super("Coffee");

        /** @type {Phaser.GameObjects.Sprite} */
        this.board;
        /** @type {Phaser.GameObjects.Sprite} */
        this.interior;
        /** @type {Phaser.GameObjects.Sprite} */
        this.funnel0001;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.hitbox;
        /** @type {Phaser.GameObjects.Sprite} */
        this.shop_coffee;
        /** @type {Phaser.GameObjects.Sprite} */
        this.coin_sprite;
        /** @type {Phaser.GameObjects.Text} */
        this.coin_text;
        /** @type {Phaser.GameObjects.Container} */
        this.coin;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cooldown_timer;
        /** @type {Phaser.GameObjects.Sprite} */
        this.counter_arrow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.coffee_arrow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_coffee;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 580, 520),
            'beans': () => this.triggerGame(901),
            'book': () => this.triggerRoom(111, 1200, 580),
            'smoothie': () => this.triggerGame(959)
        }
        this.secondaryPhysics = 'fair-coffee-physics'
        this.music = 221

        this.boardToggle = true

        this.coffeeAnimKeys = {
            'job_coffee_0001': 'shop_coffee_01',
            'job_coffee_0006': 'shop_coffee_02',
            'job_coffee_0011': 'shop_coffee_03',
            'job_coffee_0016': 'shop_coffee_04',
        }

        this.ctStg = 0;
        this.hasApron = false
        this.isCustomer = false;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("coffee-pack", "assets/media/rooms/coffee/coffee-pack.json");
        this.load.pack("fair-coffee-pack", "assets/media/rooms/_fair/coffee/fair-coffee-pack.json");
    }

    /** @returns {void} */
    _create() {

        // rectangle_2
        const rectangle_2 = this.add.rectangle(500, 117, 128, 128);
        rectangle_2.scaleX = 1.4013670805270109;
        rectangle_2.scaleY = 1.7991368606337044;
        rectangle_2.setOrigin(0.5, 0);
        rectangle_2.isFilled = true;
        rectangle_2.fillColor = 2037527;

        // bg
        const bg = this.add.image(-123, -2, "fair-coffee", "backgroundCoffee");
        bg.setOrigin(0, 0);

        // stairs
        const stairs = this.add.image(1203, 328, "coffee", "stairs");
        stairs.setOrigin(0, 0);

        // counter_back
        const counter_back = this.add.image(850, 458, "fair-coffee", "counterBottom");
        counter_back.setOrigin(0.27906976744186046, 0.8363636363636363);

        // counter_front
        const counter_front = this.add.image(808, 621, "fair-coffee", "counterTop");
        counter_front.setOrigin(0.2864583333333333, 0.8710801393728222);

        // smoke
        const smoke = this.add.sprite(833, 205, "coffee", "smoke0001");
        smoke.setOrigin(0, 0);

        // sign_back
        const sign_back = this.add.image(903, 632, "coffee", "sign_back");
        sign_back.setOrigin(0.5, 0.4789915966386555);

        // sign_front
        const sign_front = this.add.image(880, 695, "coffee", "sign_front");
        sign_front.setOrigin(0.5190839694656488, 0.8827586206896552);

        // board
        const board = this.add.sprite(138, -42, "fair-coffee", "fg");
        board.setOrigin(0, 0);

        // machine_3
        const machine_3 = this.add.image(1017, 406, "coffee", "machine_3");
        machine_3.setOrigin(0, 0);

        // beans
        const beans = this.add.image(1057, 722, "coffee", "beans");
        beans.setOrigin(0.3411764705882352, 0.6145708044679954);

        // door
        const door = this.add.image(730, 149, "coffee", "door");
        door.setOrigin(0, 0);

        // smoothie_stand
        const smoothie_stand = this.add.container(1367, 802);

        // smoothiestand
        const smoothiestand = this.add.image(33, -118, "fair-coffee", "smoothiestand");
        smoothie_stand.add(smoothiestand);

        // blender
        const blender = this.add.sprite(-6, -89, "coffee", "blender0001");
        blender.flipX = true;
        smoothie_stand.add(blender);

        // bench
        const bench = this.add.image(1501, 857, "fair-coffee", "bench");
        bench.setOrigin(0.5, 0.28411911548512425);

        // bigSign
        this.add.image(1223, 366, "fair-coffee", "bigSign");

        // carBack
        const carBack = this.add.image(418, 395.7929543103851, "fair-coffee", "carBack");
        carBack.setOrigin(0.5, 0.22313735007525423);

        // carTable
        const carTable = this.add.image(391, 419.7356818965383, "fair-coffee", "carTable");
        carTable.setOrigin(0.5, 0.590323985081832);

        // carFront
        const carFront = this.add.image(432, 516.7758807112018, "fair-coffee", "carFront");
        carFront.setOrigin(0.5, 0.5214165054313983);

        // stool1
        this.add.image(578, 405, "fair-coffee", "stool1");

        // stool2
        this.add.image(659, 405, "fair-coffee", "stool2");

        // chair_1
        const chair_1 = this.add.image(640, 768, "fair-coffee", "chair1");
        chair_1.setOrigin(0.5, 0.3611111111111111);

        // chair1
        const chair1 = this.add.image(314, 707, "fair-coffee", "chair1");
        chair1.setOrigin(0.45294117647058824, 0.3888888888888889);

        // chair_2
        const chair_2 = this.add.image(518, 720, "fair-coffee", "chair1");
        chair_2.setOrigin(0.5588235294117647, 0.3958333333333333);
        chair_2.flipX = true;

        // chair_3
        const chair_3 = this.add.image(770, 706, "fair-coffee", "chair1");
        chair_3.setOrigin(0.48823529411764705, 0.3680555555555556);
        chair_3.flipX = true;

        // chair_4
        const chair_4 = this.add.image(844, 789, "fair-coffee", "chair1");
        chair_4.setOrigin(0.5, 0.375);
        chair_4.flipX = true;

        // table1
        const table1 = this.add.image(415, 779, "fair-coffee", "table1");
        table1.setOrigin(0.5, 0.6833333333333335);

        // table2
        const table2 = this.add.image(741, 840, "fair-coffee", "table2");
        table2.setOrigin(0.5, 0.6914893617021277);

        // machine
        const machine = this.add.container(152.3628387451172, 618.4205949415921);

        // machineTable
        const machineTable = this.add.image(-5.3628317921670146, -24.968677205730387, "fair-coffee", "machineTable");
        machineTable.setOrigin(0.5, 0.3761718490335708);
        machine.add(machineTable);

        // interior
        const interior = this.add.sprite(-50.362831792167015, 6.561718302082113, "fair-coffee", "interior0001");
        interior.setOrigin(0.5, 0.7132859835614993);
        machine.add(interior);

        // funnel0001
        const funnel0001 = this.add.sprite(-90.36283179216701, 30.049816446613363, "fair-coffee", "funnel0001");
        funnel0001.setOrigin(0.5, 1.0583920713905892);
        machine.add(funnel0001);

        // candyStand
        const candyStand = this.add.image(46, 734, "fair-coffee", "candyStand");
        candyStand.flipX = true;

        // chair2Bottom
        this.add.image(334, 859, "fair-coffee", "chair2Bottom");

        // chair2Top
        const chair2Top = this.add.image(312, 862.5572197228918, "fair-coffee", "chair2Top");
        chair2Top.setOrigin(0.5, 0.621540779085092);

        // lights
        const lights = this.add.container(1066, 121.1740493774414);

        // light10001
        const light10001 = this.add.sprite(50, 478.8259506225586, "fair-coffee", "light10001");
        lights.add(light10001);

        // light10006
        const light10006 = this.add.sprite(39, 470.8259506225586, "fair-coffee", "light10006");
        lights.add(light10006);

        // light
        const light = this.add.sprite(55, 460.8259506225586, "fair-coffee", "light10006");
        lights.add(light);

        // light_1
        const light_1 = this.add.sprite(33, 457.8259506225586, "fair-coffee", "light10001");
        lights.add(light_1);

        // light_2
        const light_2 = this.add.sprite(26, 445.8259506225586, "fair-coffee", "light10006");
        lights.add(light_2);

        // light_3
        const light_3 = this.add.sprite(18, 432.8259506225586, "fair-coffee", "light10001");
        lights.add(light_3);

        // light_4
        const light_4 = this.add.sprite(5, 409.8259506225586, "fair-coffee", "light10001");
        lights.add(light_4);

        // light_5
        const light_5 = this.add.sprite(11, 421.8259506225586, "fair-coffee", "light10006");
        lights.add(light_5);

        // light_6
        const light_6 = this.add.sprite(0, 395.8259506225586, "fair-coffee", "light10006");
        lights.add(light_6);

        // light_7
        const light_7 = this.add.sprite(14, 390.8259506225586, "fair-coffee", "light10001");
        lights.add(light_7);

        // light_8
        const light_8 = this.add.sprite(13, 362.8259506225586, "fair-coffee", "light10001");
        lights.add(light_8);

        // light_9
        const light_9 = this.add.sprite(14, 337.8259506225586, "fair-coffee", "light10001");
        lights.add(light_9);

        // light_10
        const light_10 = this.add.sprite(16.49462890625, 311.0217819213867, "fair-coffee", "light10001");
        lights.add(light_10);

        // light_11
        const light_11 = this.add.sprite(22.335205078125, 281.2319869995117, "fair-coffee", "light10001");
        lights.add(light_11);

        // light_12
        const light_12 = this.add.sprite(30, 255.8259506225586, "fair-coffee", "light10001");
        lights.add(light_12);

        // light_13
        const light_13 = this.add.sprite(37.690185546875, 230.88414764404297, "fair-coffee", "light10001");
        lights.add(light_13);

        // light_14
        const light_14 = this.add.sprite(47.878662109375, 207.1594467163086, "fair-coffee", "light10001");
        lights.add(light_14);

        // light_15
        const light_15 = this.add.sprite(60, 179.8259506225586, "fair-coffee", "light10001");
        lights.add(light_15);

        // light_16
        const light_16 = this.add.sprite(73.66845703125, 159.69573211669922, "fair-coffee", "light10001");
        lights.add(light_16);

        // light_17
        const light_17 = this.add.sprite(86.740966796875, 139.4926986694336, "fair-coffee", "light10001");
        lights.add(light_17);

        // light_18
        const light_18 = this.add.sprite(104.284423828125, 120.40579986572266, "fair-coffee", "light10001");
        lights.add(light_18);

        // light_19
        const light_19 = this.add.sprite(120.2408447265625, 102.96385955810547, "fair-coffee", "light10001");
        lights.add(light_19);

        // light_20
        const light_20 = this.add.sprite(139, 85.8259506225586, "fair-coffee", "light10001");
        lights.add(light_20);

        // light_21
        const light_21 = this.add.sprite(158, 70.8259506225586, "fair-coffee", "light10001");
        lights.add(light_21);

        // light_22
        const light_22 = this.add.sprite(177, 56.825950622558594, "fair-coffee", "light10001");
        lights.add(light_22);

        // light_23
        const light_23 = this.add.sprite(199, 44.825950622558594, "fair-coffee", "light10001");
        lights.add(light_23);

        // light_24
        const light_24 = this.add.sprite(221.0306396484375, 29.71031951904297, "fair-coffee", "light10001");
        lights.add(light_24);

        // light_25
        const light_25 = this.add.sprite(245.3931884765625, 18.12329864501953, "fair-coffee", "light10001");
        lights.add(light_25);

        // light_26
        const light_26 = this.add.sprite(264, 8.825950622558594, "fair-coffee", "light10001");
        lights.add(light_26);

        // light_27
        const light_27 = this.add.sprite(284.6107177734375, 0, "fair-coffee", "light10001");
        lights.add(light_27);

        // light_29
        const light_29 = this.add.sprite(315, 15.825950622558594, "fair-coffee", "light10001");
        lights.add(light_29);

        // light_30
        const light_30 = this.add.sprite(292, 29.825950622558594, "fair-coffee", "light10001");
        lights.add(light_30);

        // light_31
        const light_31 = this.add.sprite(269, 42.825950622558594, "fair-coffee", "light10001");
        lights.add(light_31);

        // light_32
        const light_32 = this.add.sprite(249, 57.825950622558594, "fair-coffee", "light10001");
        lights.add(light_32);

        // light_33
        const light_33 = this.add.sprite(223, 73.8259506225586, "fair-coffee", "light10001");
        lights.add(light_33);

        // light_34
        const light_34 = this.add.sprite(200, 91.8259506225586, "fair-coffee", "light10001");
        lights.add(light_34);

        // light_35
        const light_35 = this.add.sprite(181, 112.8259506225586, "fair-coffee", "light10001");
        lights.add(light_35);

        // light_36
        const light_36 = this.add.sprite(158, 133.8259506225586, "fair-coffee", "light10001");
        lights.add(light_36);

        // light_37
        const light_37 = this.add.sprite(138, 160.8259506225586, "fair-coffee", "light10001");
        lights.add(light_37);

        // light_38
        const light_38 = this.add.sprite(119, 182.8259506225586, "fair-coffee", "light10001");
        lights.add(light_38);

        // light_39
        const light_39 = this.add.sprite(105, 206.8259506225586, "fair-coffee", "light10001");
        lights.add(light_39);

        // light_40
        const light_40 = this.add.sprite(92, 232.8259506225586, "fair-coffee", "light10001");
        lights.add(light_40);

        // light_41
        const light_41 = this.add.sprite(82, 262.8259506225586, "fair-coffee", "light10001");
        lights.add(light_41);

        // light_42
        const light_42 = this.add.sprite(71, 296.8259506225586, "fair-coffee", "light10001");
        lights.add(light_42);

        // light_43
        const light_43 = this.add.sprite(68, 327.8259506225586, "fair-coffee", "light10001");
        lights.add(light_43);

        // light_44
        const light_44 = this.add.sprite(68, 356.8259506225586, "fair-coffee", "light10001");
        lights.add(light_44);

        // light_45
        const light_45 = this.add.sprite(71, 390.8259506225586, "fair-coffee", "light10001");
        lights.add(light_45);

        // light_46
        const light_46 = this.add.sprite(67, 415.8259506225586, "fair-coffee", "light10001");
        lights.add(light_46);

        // light_47
        const light_47 = this.add.sprite(59, 440.8259506225586, "fair-coffee", "light10001");
        lights.add(light_47);

        // light_48
        const light_48 = this.add.sprite(63, 427.8259506225586, "fair-coffee", "light10006");
        lights.add(light_48);

        // light_49
        const light_49 = this.add.sprite(70, 402.8259506225586, "fair-coffee", "light10006");
        lights.add(light_49);

        // light_50
        const light_50 = this.add.sprite(69, 374.8259506225586, "fair-coffee", "light10006");
        lights.add(light_50);

        // light_51
        const light_51 = this.add.sprite(69, 342.8259506225586, "fair-coffee", "light10006");
        lights.add(light_51);

        // light_52
        const light_52 = this.add.sprite(70, 311.8259506225586, "fair-coffee", "light10006");
        lights.add(light_52);

        // light_53
        const light_53 = this.add.sprite(76.9410400390625, 279.99718475341797, "fair-coffee", "light10006");
        lights.add(light_53);

        // light_54
        const light_54 = this.add.sprite(87.001708984375, 247.50325775146484, "fair-coffee", "light10006");
        lights.add(light_54);

        // light_55
        const light_55 = this.add.sprite(99.3865966796875, 220.2396469116211, "fair-coffee", "light10006");
        lights.add(light_55);

        // light_56
        const light_56 = this.add.sprite(112.2911376953125, 194.68355560302734, "fair-coffee", "light10006");
        lights.add(light_56);

        // light_57
        const light_57 = this.add.sprite(128.485107421875, 171.40474700927734, "fair-coffee", "light10006");
        lights.add(light_57);

        // light_58
        const light_58 = this.add.sprite(148.28955078125, 147.62602996826172, "fair-coffee", "light10006");
        lights.add(light_58);

        // light_59
        const light_59 = this.add.sprite(168.2789306640625, 123.33509063720703, "fair-coffee", "light10006");
        lights.add(light_59);

        // light_60
        const light_60 = this.add.sprite(189.78662109375, 101.57445526123047, "fair-coffee", "light10006");
        lights.add(light_60);

        // light_61
        const light_61 = this.add.sprite(211.9669189453125, 83.33509063720703, "fair-coffee", "light10006");
        lights.add(light_61);

        // light_62
        const light_62 = this.add.sprite(234.2335205078125, 66.88809967041016, "fair-coffee", "light10006");
        lights.add(light_62);

        // light_63
        const light_63 = this.add.sprite(259.280517578125, 51.57599639892578, "fair-coffee", "light10006");
        lights.add(light_63);

        // light_64
        const light_64 = this.add.sprite(279.2698974609375, 37.65930938720703, "fair-coffee", "light10006");
        lights.add(light_64);

        // light_65
        const light_65 = this.add.sprite(303.307861328125, 24.248695373535156, "fair-coffee", "light10006");
        lights.add(light_65);

        // light_28
        const light_28 = this.add.sprite(301, 6.825950622558594, "fair-coffee", "light10006");
        lights.add(light_28);

        // light_66
        const light_66 = this.add.sprite(275.05322265625, 4.092643737792969, "fair-coffee", "light10006");
        lights.add(light_66);

        // light_67
        const light_67 = this.add.sprite(255, 13.825950622558594, "fair-coffee", "light10006");
        lights.add(light_67);

        // light_68
        const light_68 = this.add.sprite(233, 24.825950622558594, "fair-coffee", "light10006");
        lights.add(light_68);

        // light_69
        const light_69 = this.add.sprite(210.530517578125, 37.49266815185547, "fair-coffee", "light10006");
        lights.add(light_69);

        // light_70
        const light_70 = this.add.sprite(189.0228271484375, 51.15631866455078, "fair-coffee", "light10006");
        lights.add(light_70);

        // light_71
        const light_71 = this.add.sprite(167, 63.825950622558594, "fair-coffee", "light10006");
        lights.add(light_71);

        // light_72
        const light_72 = this.add.sprite(149, 78.8259506225586, "fair-coffee", "light10006");
        lights.add(light_72);

        // light_73
        const light_73 = this.add.sprite(129, 93.8259506225586, "fair-coffee", "light10006");
        lights.add(light_73);

        // light_74
        const light_74 = this.add.sprite(111, 110.8259506225586, "fair-coffee", "light10006");
        lights.add(light_74);

        // light_75
        const light_75 = this.add.sprite(95, 128.8259506225586, "fair-coffee", "light10006");
        lights.add(light_75);

        // light_76
        const light_76 = this.add.sprite(79, 148.8259506225586, "fair-coffee", "light10006");
        lights.add(light_76);

        // light_77
        const light_77 = this.add.sprite(66, 168.8259506225586, "fair-coffee", "light10006");
        lights.add(light_77);

        // light_78
        const light_78 = this.add.sprite(54, 190.8259506225586, "fair-coffee", "light10006");
        lights.add(light_78);

        // light_79
        const light_79 = this.add.sprite(41, 218.8259506225586, "fair-coffee", "light10006");
        lights.add(light_79);

        // light_80
        const light_80 = this.add.sprite(32, 243.8259506225586, "fair-coffee", "light10006");
        lights.add(light_80);

        // light_81
        const light_81 = this.add.sprite(25, 268.8259506225586, "fair-coffee", "light10006");
        lights.add(light_81);

        // light_82
        const light_82 = this.add.sprite(19, 295.8259506225586, "fair-coffee", "light10006");
        lights.add(light_82);

        // light_83
        const light_83 = this.add.sprite(14, 325.8259506225586, "fair-coffee", "light10006");
        lights.add(light_83);

        // light_84
        const light_84 = this.add.sprite(14, 350.8259506225586, "fair-coffee", "light10006");
        lights.add(light_84);

        // light_85
        const light_85 = this.add.sprite(13.346435546875, 377.31172943115234, "fair-coffee", "light10006");
        lights.add(light_85);

        // hitbox
        const hitbox = this.add.rectangle(68, 537, 70, 75);
        hitbox.scaleX = 1.9276237590808705;
        hitbox.scaleY = 1.8552470980211893;
        hitbox.visible = false;

        // rectangle
        const rectangle = this.add.rectangle(274, 607, 128, 128);
        rectangle.setOrigin(0.5, 1.073208366010646);

        // shop_coffee
        const shop_coffee = this.add.sprite(828, 672, "coffee_jobs", "job_coffee_0001");
        shop_coffee.setOrigin(0.48104857995152495, 3.9520740519068775);
        shop_coffee.visible = false;

        // coin
        const coin = this.add.container(-169, 264);

        // coin_sprite
        const coin_sprite = this.add.sprite(31.03714265764836, -50.12658541187517, "coffee_jobs", "coin0002");
        coin.add(coin_sprite);

        // coin_text
        const coin_text = this.add.text(-29, -33, "", {});
        coin_text.text = "10";
        coin_text.setStyle({ "align": "center", "baselineX":0,"baselineY":0,"fixedWidth":50,"fixedHeight":50,"fontFamily": "CCComiccrazy", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":2});
        coin_text.setPadding({"top":15});
        coin.add(coin_text);

        // cooldown_timer
        const cooldown_timer = this.add.sprite(-115, 296, "coffee_jobs", "cooldown_timer_0001");
        cooldown_timer.visible = false;

        // counter_arrow
        const counter_arrow = this.add.sprite(834, 1119, "arrow");
        counter_arrow.scaleX = 0.2;
        counter_arrow.scaleY = 0.2;
        counter_arrow.angle = -180;
        counter_arrow.setOrigin(0.49999999999999406, -10.688557995255064);
        counter_arrow.visible = false;

        // coffee_arrow
        const coffee_arrow = this.add.sprite(-179, 106, "arrow");
        coffee_arrow.scaleX = 0.2;
        coffee_arrow.scaleY = 0.2;
        coffee_arrow.angle = -180;

        // penguin_coffee
        const penguin_coffee = this.add.sprite(-159, 351, "coffee_jobs", "job_coffee_0001");

        // lists
        const sort = [beans, sign_front, sign_back, counter_front, counter_back, carTable, carBack, carFront, chair2Top, table1, table2, candyStand, bench, chair_3, chair_4, chair_1, chair_2, chair1, machine, smoothie_stand];

        // stairs (components)
        const stairsButton = new Button(stairs);
        stairsButton.spriteName = "stairs";
        const stairsMoveTo = new MoveTo(stairs);
        stairsMoveTo.x = 1255;
        stairsMoveTo.y = 755;

        // smoke (components)
        const smokeAnimation = new Animation(smoke);
        smokeAnimation.key = "smoke";
        smokeAnimation.end = 5;

        // beans (components)
        const beansButton = new Button(beans);
        beansButton.spriteName = "beans";
        beansButton.pixelPerfect = true;
        new MoveTo(beans);
        const beansShowHint = new ShowHint(beans);
        beansShowHint.text = "beans_hint";

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.pixelPerfect = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 765;
        doorMoveTo.y = 375;

        // smoothiestand (components)
        const smoothiestandButton = new Button(smoothiestand);
        smoothiestandButton.spriteName = "smoothiestand";
        smoothiestandButton.hoverCallback = () => blender.__Animation.play();
        smoothiestandButton.hoverOutCallback = () => blender.__Animation.stop();
        smoothiestandButton.pixelPerfect = true;
        const smoothiestandMoveTo = new MoveTo(smoothiestand);
        smoothiestandMoveTo.x = 1340;
        smoothiestandMoveTo.y = 840;
        const smoothiestandShowHint = new ShowHint(smoothiestand);
        smoothiestandShowHint.text = "smoothie_hint";

        // blender (components)
        const blenderAnimation = new Animation(blender);
        blenderAnimation.key = "blender";
        blenderAnimation.end = 14;
        blenderAnimation.autoPlay = false;

        // light10001 (components)
        const light10001Animation = new Animation(light10001);
        light10001Animation.key = "light1";
        light10001Animation.end = 10;

        // light10006 (components)
        const light10006Animation = new Animation(light10006);
        light10006Animation.key = "light2";
        light10006Animation.end = 10;

        // light (components)
        const lightAnimation = new Animation(light);
        lightAnimation.key = "light2";
        lightAnimation.end = 10;

        // light_1 (components)
        const light_1Animation = new Animation(light_1);
        light_1Animation.key = "light1";
        light_1Animation.end = 10;

        // light_2 (components)
        const light_2Animation = new Animation(light_2);
        light_2Animation.key = "light2";
        light_2Animation.end = 10;

        // light_3 (components)
        const light_3Animation = new Animation(light_3);
        light_3Animation.key = "light1";
        light_3Animation.end = 10;

        // light_4 (components)
        const light_4Animation = new Animation(light_4);
        light_4Animation.key = "light1";
        light_4Animation.end = 10;

        // light_5 (components)
        const light_5Animation = new Animation(light_5);
        light_5Animation.key = "light2";
        light_5Animation.end = 10;

        // light_6 (components)
        const light_6Animation = new Animation(light_6);
        light_6Animation.key = "light2";
        light_6Animation.end = 10;

        // light_7 (components)
        const light_7Animation = new Animation(light_7);
        light_7Animation.key = "light1";
        light_7Animation.end = 10;

        // light_8 (components)
        const light_8Animation = new Animation(light_8);
        light_8Animation.key = "light1";
        light_8Animation.end = 10;

        // light_9 (components)
        const light_9Animation = new Animation(light_9);
        light_9Animation.key = "light1";
        light_9Animation.end = 10;

        // light_10 (components)
        const light_10Animation = new Animation(light_10);
        light_10Animation.key = "light1";
        light_10Animation.end = 10;

        // light_11 (components)
        const light_11Animation = new Animation(light_11);
        light_11Animation.key = "light1";
        light_11Animation.end = 10;

        // light_12 (components)
        const light_12Animation = new Animation(light_12);
        light_12Animation.key = "light1";
        light_12Animation.end = 10;

        // light_13 (components)
        const light_13Animation = new Animation(light_13);
        light_13Animation.key = "light1";
        light_13Animation.end = 10;

        // light_14 (components)
        const light_14Animation = new Animation(light_14);
        light_14Animation.key = "light1";
        light_14Animation.end = 10;

        // light_15 (components)
        const light_15Animation = new Animation(light_15);
        light_15Animation.key = "light1";
        light_15Animation.end = 10;

        // light_16 (components)
        const light_16Animation = new Animation(light_16);
        light_16Animation.key = "light1";
        light_16Animation.end = 10;

        // light_17 (components)
        const light_17Animation = new Animation(light_17);
        light_17Animation.key = "light1";
        light_17Animation.end = 10;

        // light_18 (components)
        const light_18Animation = new Animation(light_18);
        light_18Animation.key = "light1";
        light_18Animation.end = 10;

        // light_19 (components)
        const light_19Animation = new Animation(light_19);
        light_19Animation.key = "light1";
        light_19Animation.end = 10;

        // light_20 (components)
        const light_20Animation = new Animation(light_20);
        light_20Animation.key = "light1";
        light_20Animation.end = 10;

        // light_21 (components)
        const light_21Animation = new Animation(light_21);
        light_21Animation.key = "light1";
        light_21Animation.end = 10;

        // light_22 (components)
        const light_22Animation = new Animation(light_22);
        light_22Animation.key = "light1";
        light_22Animation.end = 10;

        // light_23 (components)
        const light_23Animation = new Animation(light_23);
        light_23Animation.key = "light1";
        light_23Animation.end = 10;

        // light_24 (components)
        const light_24Animation = new Animation(light_24);
        light_24Animation.key = "light1";
        light_24Animation.end = 10;

        // light_25 (components)
        const light_25Animation = new Animation(light_25);
        light_25Animation.key = "light1";
        light_25Animation.end = 10;

        // light_26 (components)
        const light_26Animation = new Animation(light_26);
        light_26Animation.key = "light1";
        light_26Animation.end = 10;

        // light_27 (components)
        const light_27Animation = new Animation(light_27);
        light_27Animation.key = "light1";
        light_27Animation.end = 10;

        // light_29 (components)
        const light_29Animation = new Animation(light_29);
        light_29Animation.key = "light1";
        light_29Animation.end = 10;

        // light_30 (components)
        const light_30Animation = new Animation(light_30);
        light_30Animation.key = "light1";
        light_30Animation.end = 10;

        // light_31 (components)
        const light_31Animation = new Animation(light_31);
        light_31Animation.key = "light1";
        light_31Animation.end = 10;

        // light_32 (components)
        const light_32Animation = new Animation(light_32);
        light_32Animation.key = "light1";
        light_32Animation.end = 10;

        // light_33 (components)
        const light_33Animation = new Animation(light_33);
        light_33Animation.key = "light1";
        light_33Animation.end = 10;

        // light_34 (components)
        const light_34Animation = new Animation(light_34);
        light_34Animation.key = "light1";
        light_34Animation.end = 10;

        // light_35 (components)
        const light_35Animation = new Animation(light_35);
        light_35Animation.key = "light1";
        light_35Animation.end = 10;

        // light_36 (components)
        const light_36Animation = new Animation(light_36);
        light_36Animation.key = "light1";
        light_36Animation.end = 10;

        // light_37 (components)
        const light_37Animation = new Animation(light_37);
        light_37Animation.key = "light1";
        light_37Animation.end = 10;

        // light_38 (components)
        const light_38Animation = new Animation(light_38);
        light_38Animation.key = "light1";
        light_38Animation.end = 10;

        // light_39 (components)
        const light_39Animation = new Animation(light_39);
        light_39Animation.key = "light1";
        light_39Animation.end = 10;

        // light_40 (components)
        const light_40Animation = new Animation(light_40);
        light_40Animation.key = "light1";
        light_40Animation.end = 10;

        // light_41 (components)
        const light_41Animation = new Animation(light_41);
        light_41Animation.key = "light1";
        light_41Animation.end = 10;

        // light_42 (components)
        const light_42Animation = new Animation(light_42);
        light_42Animation.key = "light1";
        light_42Animation.end = 10;

        // light_43 (components)
        const light_43Animation = new Animation(light_43);
        light_43Animation.key = "light1";
        light_43Animation.end = 10;

        // light_44 (components)
        const light_44Animation = new Animation(light_44);
        light_44Animation.key = "light1";
        light_44Animation.end = 10;

        // light_45 (components)
        const light_45Animation = new Animation(light_45);
        light_45Animation.key = "light1";
        light_45Animation.end = 10;

        // light_46 (components)
        const light_46Animation = new Animation(light_46);
        light_46Animation.key = "light1";
        light_46Animation.end = 10;

        // light_47 (components)
        const light_47Animation = new Animation(light_47);
        light_47Animation.key = "light1";
        light_47Animation.end = 10;

        // light_48 (components)
        const light_48Animation = new Animation(light_48);
        light_48Animation.key = "light2";
        light_48Animation.end = 10;

        // light_49 (components)
        const light_49Animation = new Animation(light_49);
        light_49Animation.key = "light2";
        light_49Animation.end = 10;

        // light_50 (components)
        const light_50Animation = new Animation(light_50);
        light_50Animation.key = "light2";
        light_50Animation.end = 10;

        // light_51 (components)
        const light_51Animation = new Animation(light_51);
        light_51Animation.key = "light2";
        light_51Animation.end = 10;

        // light_52 (components)
        const light_52Animation = new Animation(light_52);
        light_52Animation.key = "light2";
        light_52Animation.end = 10;

        // light_53 (components)
        const light_53Animation = new Animation(light_53);
        light_53Animation.key = "light2";
        light_53Animation.end = 10;

        // light_54 (components)
        const light_54Animation = new Animation(light_54);
        light_54Animation.key = "light2";
        light_54Animation.end = 10;

        // light_55 (components)
        const light_55Animation = new Animation(light_55);
        light_55Animation.key = "light2";
        light_55Animation.end = 10;

        // light_56 (components)
        const light_56Animation = new Animation(light_56);
        light_56Animation.key = "light2";
        light_56Animation.end = 10;

        // light_57 (components)
        const light_57Animation = new Animation(light_57);
        light_57Animation.key = "light2";
        light_57Animation.end = 10;

        // light_58 (components)
        const light_58Animation = new Animation(light_58);
        light_58Animation.key = "light2";
        light_58Animation.end = 10;

        // light_59 (components)
        const light_59Animation = new Animation(light_59);
        light_59Animation.key = "light2";
        light_59Animation.end = 10;

        // light_60 (components)
        const light_60Animation = new Animation(light_60);
        light_60Animation.key = "light2";
        light_60Animation.end = 10;

        // light_61 (components)
        const light_61Animation = new Animation(light_61);
        light_61Animation.key = "light2";
        light_61Animation.end = 10;

        // light_62 (components)
        const light_62Animation = new Animation(light_62);
        light_62Animation.key = "light2";
        light_62Animation.end = 10;

        // light_63 (components)
        const light_63Animation = new Animation(light_63);
        light_63Animation.key = "light2";
        light_63Animation.end = 10;

        // light_64 (components)
        const light_64Animation = new Animation(light_64);
        light_64Animation.key = "light2";
        light_64Animation.end = 10;

        // light_65 (components)
        const light_65Animation = new Animation(light_65);
        light_65Animation.key = "light2";
        light_65Animation.end = 10;

        // light_28 (components)
        const light_28Animation = new Animation(light_28);
        light_28Animation.key = "light2";
        light_28Animation.end = 10;

        // light_66 (components)
        const light_66Animation = new Animation(light_66);
        light_66Animation.key = "light2";
        light_66Animation.end = 10;

        // light_67 (components)
        const light_67Animation = new Animation(light_67);
        light_67Animation.key = "light2";
        light_67Animation.end = 10;

        // light_68 (components)
        const light_68Animation = new Animation(light_68);
        light_68Animation.key = "light2";
        light_68Animation.end = 10;

        // light_69 (components)
        const light_69Animation = new Animation(light_69);
        light_69Animation.key = "light2";
        light_69Animation.end = 10;

        // light_70 (components)
        const light_70Animation = new Animation(light_70);
        light_70Animation.key = "light2";
        light_70Animation.end = 10;

        // light_71 (components)
        const light_71Animation = new Animation(light_71);
        light_71Animation.key = "light2";
        light_71Animation.end = 10;

        // light_72 (components)
        const light_72Animation = new Animation(light_72);
        light_72Animation.key = "light2";
        light_72Animation.end = 10;

        // light_73 (components)
        const light_73Animation = new Animation(light_73);
        light_73Animation.key = "light2";
        light_73Animation.end = 10;

        // light_74 (components)
        const light_74Animation = new Animation(light_74);
        light_74Animation.key = "light2";
        light_74Animation.end = 10;

        // light_75 (components)
        const light_75Animation = new Animation(light_75);
        light_75Animation.key = "light2";
        light_75Animation.end = 10;

        // light_76 (components)
        const light_76Animation = new Animation(light_76);
        light_76Animation.key = "light2";
        light_76Animation.end = 10;

        // light_77 (components)
        const light_77Animation = new Animation(light_77);
        light_77Animation.key = "light2";
        light_77Animation.end = 10;

        // light_78 (components)
        const light_78Animation = new Animation(light_78);
        light_78Animation.key = "light2";
        light_78Animation.end = 10;

        // light_79 (components)
        const light_79Animation = new Animation(light_79);
        light_79Animation.key = "light2";
        light_79Animation.end = 10;

        // light_80 (components)
        const light_80Animation = new Animation(light_80);
        light_80Animation.key = "light2";
        light_80Animation.end = 10;

        // light_81 (components)
        const light_81Animation = new Animation(light_81);
        light_81Animation.key = "light2";
        light_81Animation.end = 10;

        // light_82 (components)
        const light_82Animation = new Animation(light_82);
        light_82Animation.key = "light2";
        light_82Animation.end = 10;

        // light_83 (components)
        const light_83Animation = new Animation(light_83);
        light_83Animation.key = "light2";
        light_83Animation.end = 10;

        // light_84 (components)
        const light_84Animation = new Animation(light_84);
        light_84Animation.key = "light2";
        light_84Animation.end = 10;

        // light_85 (components)
        const light_85Animation = new Animation(light_85);
        light_85Animation.key = "light2";
        light_85Animation.end = 10;

        // rectangle (components)
        const rectangleZoneTrigger = new ZoneTrigger(rectangle);
        rectangleZoneTrigger.callback = () => this.triggerPin();

        // cooldown_timer (components)
        const cooldown_timerAnimation = new Animation(cooldown_timer);
        cooldown_timerAnimation.key = "cooldown_timer_";
        cooldown_timerAnimation.end = 121;
        cooldown_timerAnimation.repeat = 0;
        cooldown_timerAnimation.autoPlay = false;

        this.board = board;
        this.interior = interior;
        this.funnel0001 = funnel0001;
        this.hitbox = hitbox;
        this.shop_coffee = shop_coffee;
        this.coin_sprite = coin_sprite;
        this.coin_text = coin_text;
        this.coin = coin;
        this.cooldown_timer = cooldown_timer;
        this.counter_arrow = counter_arrow;
        this.coffee_arrow = coffee_arrow;
        this.penguin_coffee = penguin_coffee;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create();

        this.bounds = this.hitbox.getBounds();

        this.funnelAmt = 0;
        this.pinReady = false;
        this.ctStg = 0;
        this.work = new CoffeeWork(this, this.penguin_coffee, this.shop_coffee, this.coffee_arrow, this.coin, this.coin_text)
        this.cooldown_timer.setDepth(1005);

        this.arrowTween = this.tweens.add({
            targets: this.counter_arrow,
            y: 1030,    
            duration: 400, 
            yoyo: true, 
            repeat: -1, 
            ease: 'Sine.easeInOut' 
        });
    }

    onSnowballComplete(x, y, ball) {
        if (this.bounds.contains(x, y)) {
            this.funnelAmt++;

            switch (this.funnelAmt) {
                case 1:
                    this.funnel0001.setTexture('fair-coffee', 'funnel0001');
                    break;

                case 2:
                    this.funnel0001.setTexture('fair-coffee', 'funnel0002');
                    break;

                case 3:
                    this.funnel0001.setTexture('fair-coffee', 'funnel0003');
                    break;

                case 4:
                    this.funnel0001.setTexture('fair-coffee', 'funnel0004');
                    break;

                case 5:
                    this.funnel0001.setTexture('fair-coffee', 'funnel0005');
                    break;

                case 6:
                    this.funnel0001.setTexture('fair-coffee', 'funnel0006');
                    break;

                case 7:
                    this.funnel0001.setTexture('fair-coffee', 'funnel0001');
                    this.interior.play('fair-coffee-interior');
                    break;
            }

            this.interior.on('animationcomplete', () => {
                this.funnelAmt = 0;
                this.pinReady = true;
            });
        }
    }

    stop() {
        super.stop()
        this.ctStg = 0;
        this.work.removeListeners()
    }

    update() {
        super.update()
        // this.checkApron();
        this.work.update()

        if (this.world.client.penguin) {
            this.cooldown_timer.x = this.world.client.penguin.x; 
            this.cooldown_timer.y = this.world.client.penguin.y - 90;
        }
    }

    showCoinRewardToPlayer(penguin, coins) {
        this.work.showCoinRewardToPlayer(penguin, coins)
    }

    onBoardClick() {
        let animation = (this.boardToggle) ? 'board1' : 'board2'

        this.board.play(animation)
        this.boardToggle = !this.boardToggle
    }

    checkApron() {
        if (this.world.client.penguin) {
            const workitem = 262;
            const penguin = this.world.client.penguin;
            const items = [...new Set(Object.values(penguin.items.equippedFlat))].sort();

            const hasItem = items.includes(workitem);

            if (!hasItem && !this.isCustomer) {
                const otherPenguins = Object.values(this.penguins).filter(p => p.id !== penguin.id);

                let foundPenguinWithItem = false;
                for (let otherPenguin of otherPenguins) {
                    const otherItems = [...new Set(Object.values(otherPenguin.items.equippedFlat))].sort();
                    if (otherItems.includes(workitem)) {
                        foundPenguinWithItem = true;
                        break;
                    }
                }

                if (foundPenguinWithItem) {
                    this.isCustomer = true;
                    if (!this.world.client.hasViewedInteraction("customer_coffeetutorial")) {
                        this.interface.loadWidget('WorkTutorial');
                    }
                }
            } else if (hasItem && !this.hasApron) {
                this.hasApron = true;
                if (!this.world.client.hasViewedInteraction("jobs_coffeetutorial")) {
                    this.interface.loadWidget('CoffeeTutorial');
                }
            }
        }
    }

    triggerPin() {
        if (this.pinReady) this.interface.prompt.showItem(7083);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */