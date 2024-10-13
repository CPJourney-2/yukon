import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'

// You can write more code here

/* START OF COMPILED CODE */

export default class Stage extends RoomScene {

    constructor() {
        super("Stage");

        /** @type {Phaser.GameObjects.Sprite} */
        this.bluebook0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.blueee0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.blinkingeyes;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sun0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.unicorn0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.greenbook0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffle0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.treefall0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.strawfish;
        /** @type {Phaser.GameObjects.Sprite} */
        this.strawfish0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchbox_secondgreen0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchbox_firstgreen0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchbox_purplebutton0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchbox_redbutton0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchbox_tealbutton0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchbox_yellow0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchbox_thirdgreen0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchbox_furthest_green0001;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 845, 522),
            'trunk': () => this.interface.loadWidget("FairyFablesCatalog")
        }
        this.music = 39;
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("fairyfables-pack", "assets/media/rooms/stage/fairy fables/fairyfables-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(772.8732988618494, 433.19685625982726, "fairyfables", "bg");
        bg.setOrigin(0.5083701553067942, 0.4235387216628804);

        // river
        this.add.image(978, 476, "fairyfables", "river");

        // bigtree
        const bigtree = this.add.image(876.1057599434895, 289.96318814179773, "fairyfables", "bigtree");
        bigtree.setOrigin(0.38644450875892994, 0.7446662264374639);

        // bluebook0001
        const bluebook0001 = this.add.sprite(380.89794828848034, 259.05900789893883, "fairyfables", "bluebook0001");
        bluebook0001.setOrigin(0.1856075810951901, 0.46795946275370087);

        // blueee0001
        const blueee0001 = this.add.sprite(538, 111, "fairyfablesbluefix_1", "bluefix0001");

        // fireplace
        this.add.image(514, 252, "fairyfables", "fireplace");

        // fire0001
        const fire0001 = this.add.sprite(511, 272, "fairyfables", "fire0001");

        // redchair_back
        const redchair_back = this.add.image(549.8872373474012, 300.61040369298985, "fairyfables", "redchair back");
        redchair_back.setOrigin(0.394252033539217, 0.5951854518084866);

        // bluebookfront
        const bluebookfront = this.add.image(354, 267.2290139531094, "fairyfables", "bluebookfront");
        bluebookfront.setOrigin(0.5, 0.690237209292353);

        // blinkingeyes
        const blinkingeyes = this.add.sprite(346, 195, "fairyfables", "eyes0001");
        blinkingeyes.scaleX = 0.4365271554542136;
        blinkingeyes.scaleY = 0.4365271554542136;

        // sun0001
        const sun0001 = this.add.sprite(1061, 56, "fairyfables", "sun0001");

        // topright
        this.add.image(1177, 139, "fairyfables", "topright");

        // front_log
        const front_log = this.add.image(831.8656682572508, 447.62650540300683, "fairyfables", "front log");
        front_log.setOrigin(0.6041305913201664, 0.8580033304992414);

        // unicorn0001
        const unicorn0001 = this.add.sprite(932.4550096251633, 326.6795638938287, "fairyfables", "unicorn0001");
        unicorn0001.setOrigin(0.5221363087674782, 1.1643549505710273);

        // greenbook0001
        const greenbook0001 = this.add.sprite(337, 297, "fairyfables", "greenbook0001");

        // puffle0001
        const puffle0001 = this.add.sprite(352, 197, "fairyfables", "puffle0001");
        puffle0001.visible = false;

        // bigwave0001
        const bigwave0001 = this.add.sprite(905, 605, "fairyfables", "bigwave0001");

        // redchair_front
        const redchair_front = this.add.image(589.1314177974996, 335.86391471340977, "fairyfables", "redchair front");
        redchair_front.setOrigin(0.4096239183881524, 0.6198375223576744);

        // book0001
        const book0001 = this.add.sprite(527.3385009765625, 356.9220886230469, "fairyfables", "book0001");
        book0001.setOrigin(0.48461599233122277, 0.6888037304804476);

        // shroom
        this.add.image(356, 436, "fairyfables", "shroom");

        // treefall0001
        const treefall0001 = this.add.sprite(796.4427790336913, 524.9682348318686, "fairyfables", "treefall0001");
        treefall0001.setOrigin(0.30438947413380885, 0.734607839635368);

        // frontflowers
        const frontflowers = this.add.image(598, 558.248992982273, "fairyfables", "frontflowers");
        frontflowers.setOrigin(0.5, 0.6249760233874516);

        // waves0001
        const waves0001 = this.add.sprite(990, 458, "fairyfables", "waves0001");

        // pillar
        this.add.image(145, 468, "fairyfables", "pillar");

        // pillar_1
        const pillar_1 = this.add.image(1383, 465, "fairyfables", "pillar");
        pillar_1.flipX = true;

        // pebbles
        this.add.image(984, 481, "fairyfables", "pebbles");

        // bridge_back
        const bridge_back = this.add.image(1047.9035488861352, 462.2578706683189, "fairyfables", "bridge back");
        bridge_back.setOrigin(0.5133190315877764, 0.47360410103513484);

        // foam0001
        const foam0001 = this.add.sprite(904, 626, "fairyfables", "foam0001");

        // bridge_floor
        this.add.image(1047, 490, "fairyfables", "bridge floor");

        // strawfish
        const strawfish = this.add.sprite(1003, 622, "fairyfables", "strawfish0001");

        // strawfish0001
        const strawfish0001 = this.add.sprite(773, 619, "fairyfables", "strawfish0001");

        // bridge_front
        const bridge_front = this.add.image(1047, 495, "fairyfables", "bridge front");

        // bottom
        this.add.image(1133, 243, "fairyfables", "bottom");

        // ridge
        const ridge = this.add.image(1136.9576797141985, 328.0689537123701, "fairyfables", "ridge");
        ridge.setOrigin(0.5088582792497672, 1.2555956791643879);

        // fg_bg
        const fg_bg = this.add.image(758.0724134224581, 366.4746952699816, "fairyfables", "fg bg");
        fg_bg.setOrigin(0.49621261434670677, 0.7280051514155701);

        // curtainlog
        const curtainlog = this.add.image(299.063241123673, 460.4889090051584, "fairyfables", "curtainlog");
        curtainlog.setOrigin(0.22664855924115898, 0.49300417900439963);

        // waterlog
        const waterlog = this.add.image(528.3235247709632, 523.2482464333735, "fairyfables", "waterlog");
        waterlog.setOrigin(0.5349107959594939, 0.33298456429767986);

        // fg2
        const fg2 = this.add.image(756.0192578677207, 514.8060122013112, "fairyfables", "fg2");
        fg2.setOrigin(0.4986768589630733, 0.6531247034929067);

        // backflowers
        const backflowers = this.add.image(617, 526.6716051279374, "fairyfables", "backflowers");
        backflowers.setOrigin(0.5, 0.634589563648024);

        // seatfront
        const seatfront = this.add.image(116.67067047332263, 839.6648696903517, "fairyfables", "seatfront");
        seatfront.setOrigin(0.5268752422084177, 4.442243234961824);

        // seatrightfront
        const seatrightfront = this.add.image(1391.5984289422909, 841.788572010468, "fairyfables", "seatrightfront");
        seatrightfront.setOrigin(0.45070361223011673, 4.451091093384791);

        // fg
        const fg = this.add.image(760.0529393857448, 1165.2819374927753, "fairyfables", "fg");
        fg.setOrigin(0.5019966902457454, 1.2424338967429511);

        // trunk_costumes0001
        const trunk_costumes0001 = this.add.sprite(1341.3012277162593, 631.4937180726431, "fairyfablesbluefix_1", "costumetrunk");
        trunk_costumes0001.setOrigin(0.4625768681970479, 0.6800736718475353);

        // straw
        const straw = this.add.image(754.6033463516028, 691.4895300394842, "fairyfables", "straw");
        straw.setOrigin(0.5107089385233842, 1.2360141670322609);

        // door_door_1
        const door_door_1 = this.add.image(157.5542540217607, 655.6910348259888, "fairyfables", "door/door");
        door_door_1.setOrigin(0.7481706495016515, 0.791753764946472);

        // left chair
        const left_chair = this.add.container(405.79182930422894, 705.7026245989849);

        // right chair
        this.add.container(805, 515);

        // chairs_BOT_1
        const chairs_BOT_1 = this.add.image(145, 828, "fairyfables", "chairs/BOT 1");

        // chairs_BOT_2
        const chairs_BOT_2 = this.add.image(241.00001525878906, 848, "fairyfables", "chairs/BOT 2");

        // chairs_top_2
        const chairs_top_2 = this.add.image(286, 751, "fairyfables", "chairs/top 2");

        // chairs_TOP_3
        const chairs_TOP_3 = this.add.image(385, 772, "fairyfables", "chairs/TOP 3");

        // chairs_TOP_LEFT
        const chairs_TOP_LEFT = this.add.image(194.00001525878906, 730, "fairyfables", "chairs/TOP LEFT");

        // chairs_TOP_4
        const chairs_TOP_4 = this.add.image(490, 789, "fairyfables", "chairs/TOP 4");

        // chairs_BOT_3
        const chairs_BOT_3 = this.add.image(350, 862, "fairyfables", "chairs/BOT 3");

        // chairs_TOP_5
        const chairs_TOP_5 = this.add.image(590.8258056640625, 837.8065185546875, "fairyfables", "chairs/TOP 5");
        chairs_TOP_5.setOrigin(0.40635230678860984, 0.8140918502961992);

        // chairs_BOT_4
        const chairs_BOT_4 = this.add.image(462, 872, "fairyfables", "chairs/BOT 4");

        // chairs_BOT_5
        const chairs_BOT_5 = this.add.image(579, 885, "fairyfables", "chairs/BOT 5");

        // chairs_TOP_LEFT1
        const chairs_TOP_LEFT1 = this.add.image(1334, 731, "fairyfables", "chairs/TOP LEFT");
        chairs_TOP_LEFT1.flipX = true;

        // chairs_BOT_11
        const chairs_BOT_11 = this.add.image(1383, 829, "fairyfables", "chairs/BOT 1");
        chairs_BOT_11.flipX = true;

        // chairs_top_21
        const chairs_top_21 = this.add.image(1243, 753, "fairyfables", "chairs/top 2");
        chairs_top_21.flipX = true;

        // chairs_BOT_21
        const chairs_BOT_21 = this.add.image(1288, 848, "fairyfables", "chairs/BOT 2");
        chairs_BOT_21.flipX = true;

        // chairs_TOP_31
        const chairs_TOP_31 = this.add.image(1143, 773, "fairyfables", "chairs/TOP 3");
        chairs_TOP_31.flipX = true;

        // chairs_BOT_31
        const chairs_BOT_31 = this.add.image(1177, 863, "fairyfables", "chairs/BOT 3");
        chairs_BOT_31.flipX = true;

        // chairs_TOP_41
        const chairs_TOP_41 = this.add.image(1039, 790, "fairyfables", "chairs/TOP 4");
        chairs_TOP_41.flipX = true;

        // chairs_BOT_41
        const chairs_BOT_41 = this.add.image(1065, 873, "fairyfables", "chairs/BOT 4");
        chairs_BOT_41.flipX = true;

        // chairs_TOP_51
        const chairs_TOP_51 = this.add.image(926, 803, "fairyfables", "chairs/TOP 5");
        chairs_TOP_51.flipX = true;

        // chairs_BOT_51
        const chairs_BOT_51 = this.add.image(950, 886, "fairyfables", "chairs/BOT 5");
        chairs_BOT_51.flipX = true;

        // switchbox_switchbox
        const switchbox_switchbox = this.add.image(765, 876, "fairyfables", "switchbox/switchbox");
        switchbox_switchbox.setOrigin(0.48363242087092173, 0.39509159752042977);

        // switchbox_secondgreen0001
        const switchbox_secondgreen0001 = this.add.sprite(689, 1111, "fairyfables", "switchbox/secondgreen0001");
        switchbox_secondgreen0001.setOrigin(-0.09667059204552611, 8.4357188742055);

        // switchbox_firstgreen0001
        const switchbox_firstgreen0001 = this.add.sprite(703, 1187, "fairyfables", "switchbox/firstgreen0001");
        switchbox_firstgreen0001.setOrigin(1.5883271598910413, 10.577103332324441);

        // switchbox_purplebutton0001
        const switchbox_purplebutton0001 = this.add.sprite(760, 1198, "fairyfables", "switchbox/purplebutton0001");
        switchbox_purplebutton0001.setOrigin(0.8775437253454054, 17.18056822889696);

        // switchbox_redbutton0001
        const switchbox_redbutton0001 = this.add.sprite(797, 1198, "fairyfables", "switchbox/redbutton0001");
        switchbox_redbutton0001.setOrigin(1.2030124540914435, 18.945707724018337);

        // switchbox_tealbutton0001
        const switchbox_tealbutton0001 = this.add.sprite(719, 1195, "fairyfables", "switchbox/tealbutton0001");
        switchbox_tealbutton0001.setOrigin(0.26566251530285345, 18.83783808820536);

        // switchbox_yellow0001
        const switchbox_yellow0001 = this.add.sprite(870, 1062, "fairyfables", "switchbox/yellow0001");
        switchbox_yellow0001.setOrigin(0.7375430267252625, 4.893652975519899);

        // switchbox_thirdgreen0001
        const switchbox_thirdgreen0001 = this.add.sprite(816, 1353, "fairyfables", "switchbox/thirdgreen0001");
        switchbox_thirdgreen0001.setOrigin(0.7836585764095182, 16.070241706827012);

        // switchbox_furthest_green0001
        const switchbox_furthest_green0001 = this.add.sprite(834, 1030, "fairyfables", "switchbox/furthest green0001");
        switchbox_furthest_green0001.setOrigin(0.6628866468973229, 6.731648233571828);

        // shops_book
        const shops_book = this.add.image(1431.0326649402473, 1252.5363842627019, "fairyfables", "shops/book");
        shops_book.setOrigin(0.32507902000254935, 4.207676920464459);

        // shops_trunk
        const shops_trunk = this.add.image(1438.131040674808, 2862.797005867764, "fairyfables", "shops/trunk");
        shops_trunk.setOrigin(0.5531442954576568, 17.759103869443507);

        // shops_script
        const shops_script = this.add.image(1398.2257507434206, 1414.0953781098478, "fairyfables", "shops/script");
        shops_script.setOrigin(-0.03598070031714567, 5.35435902809663);

        // lists
        const sort = [chairs_TOP_LEFT, chairs_top_2, chairs_TOP_3, chairs_TOP_4, chairs_TOP_5, chairs_BOT_5, chairs_BOT_4, chairs_BOT_3, chairs_BOT_2, chairs_BOT_1, chairs_TOP_51, chairs_TOP_41, chairs_TOP_31, chairs_top_21, chairs_TOP_LEFT1, chairs_BOT_21, chairs_BOT_31, chairs_BOT_41, chairs_BOT_51, shops_trunk, shops_book, frontflowers, backflowers, waterlog, treefall0001, front_log, redchair_front, book0001, redchair_back, ridge, straw, bridge_front, bridge_back, left_chair, fg_bg, seatrightfront, seatfront, fg2, trunk_costumes0001, fg, door_door_1, curtainlog, switchbox_switchbox, switchbox_purplebutton0001, switchbox_tealbutton0001, switchbox_redbutton0001, switchbox_thirdgreen0001, switchbox_yellow0001, switchbox_furthest_green0001, switchbox_secondgreen0001, switchbox_firstgreen0001, bluebook0001, bluebookfront, greenbook0001, unicorn0001, shops_script];

        // bluebook0001 (components)
        const bluebook0001Animation = new Animation(bluebook0001);
        bluebook0001Animation.key = "bluebook";
        bluebook0001Animation.end = 90;
        bluebook0001Animation.repeat = 0;
        bluebook0001Animation.autoPlay = false;

        // blueee0001 (components)
        const blueee0001Animation = new Animation(blueee0001);
        blueee0001Animation.key = "bluefix";
        blueee0001Animation.end = 40;
        blueee0001Animation.repeat = 0;
        blueee0001Animation.autoPlay = false;

        // fire0001 (components)
        const fire0001Animation = new Animation(fire0001);
        fire0001Animation.key = "fire";
        fire0001Animation.end = 10;

        // blinkingeyes (components)
        const blinkingeyesAnimation = new Animation(blinkingeyes);
        blinkingeyesAnimation.key = "eyes";
        blinkingeyesAnimation.end = 54;

        // unicorn0001 (components)
        const unicorn0001Animation = new Animation(unicorn0001);
        unicorn0001Animation.key = "unicorn";
        unicorn0001Animation.end = 116;
        unicorn0001Animation.repeat = 0;
        unicorn0001Animation.autoPlay = false;

        // greenbook0001 (components)
        const greenbook0001Animation = new Animation(greenbook0001);
        greenbook0001Animation.key = "greenbook";
        greenbook0001Animation.end = 43;
        greenbook0001Animation.repeat = 0;
        greenbook0001Animation.autoPlay = false;

        // puffle0001 (components)
        const puffle0001Animation = new Animation(puffle0001);
        puffle0001Animation.key = "puffle";
        puffle0001Animation.end = 94;
        puffle0001Animation.repeat = 0;
        puffle0001Animation.autoPlay = false;

        // bigwave0001 (components)
        const bigwave0001Animation = new Animation(bigwave0001);
        bigwave0001Animation.key = "bigwave";
        bigwave0001Animation.end = 9;

        // book0001 (components)
        const book0001Animation = new Animation(book0001);
        book0001Animation.key = "book";
        book0001Animation.end = 16;
        book0001Animation.repeat = 0;
        book0001Animation.autoPlay = false;
        book0001Animation.onHover = true;
        book0001Animation.stopOnOut = false;
        const book0001SimpleButton = new SimpleButton(book0001);
        book0001SimpleButton.pixelPerfect = true;

        // treefall0001 (components)
        const treefall0001Animation = new Animation(treefall0001);
        treefall0001Animation.key = "treefall";
        treefall0001Animation.end = 23;
        treefall0001Animation.repeat = 0;
        treefall0001Animation.autoPlay = false;

        // waves0001 (components)
        const waves0001Animation = new Animation(waves0001);
        waves0001Animation.key = "waves";
        waves0001Animation.end = 6;

        // foam0001 (components)
        const foam0001Animation = new Animation(foam0001);
        foam0001Animation.key = "foam";
        foam0001Animation.end = 9;

        // strawfish (components)
        const strawfishAnimation = new Animation(strawfish);
        strawfishAnimation.key = "strawfish";
        strawfishAnimation.end = 155;
        strawfishAnimation.autoPlay = false;
        strawfishAnimation.stopOnOut = false;

        // strawfish0001 (components)
        const strawfish0001Animation = new Animation(strawfish0001);
        strawfish0001Animation.key = "strawfish";
        strawfish0001Animation.end = 155;
        strawfish0001Animation.autoPlay = false;
        strawfish0001Animation.stopOnOut = false;

        // trunk_costumes0001 (components)
        const trunk_costumes0001Button = new Button(trunk_costumes0001);
        trunk_costumes0001Button.spriteName = "costumetrunk";
        new MoveTo(trunk_costumes0001);

        // door_door_1 (components)
        const door_door_1Button = new Button(door_door_1);
        door_door_1Button.spriteName = "door/door";
        new MoveTo(door_door_1);

        // switchbox_secondgreen0001 (components)
        const switchbox_secondgreen0001Animation = new Animation(switchbox_secondgreen0001);
        switchbox_secondgreen0001Animation.key = "switchbox/secondgreen";
        switchbox_secondgreen0001Animation.end = 13;
        switchbox_secondgreen0001Animation.repeat = 0;
        switchbox_secondgreen0001Animation.autoPlay = false;
        const switchbox_secondgreen0001SimpleButton = new SimpleButton(switchbox_secondgreen0001);
        switchbox_secondgreen0001SimpleButton.callback = () => {this.onDisk()};
        switchbox_secondgreen0001SimpleButton.pixelPerfect = true;

        // switchbox_firstgreen0001 (components)
        const switchbox_firstgreen0001Animation = new Animation(switchbox_firstgreen0001);
        switchbox_firstgreen0001Animation.key = "switchbox/firstgreen";
        switchbox_firstgreen0001Animation.end = 18;
        switchbox_firstgreen0001Animation.repeat = 0;
        switchbox_firstgreen0001Animation.autoPlay = false;
        const switchbox_firstgreen0001SimpleButton = new SimpleButton(switchbox_firstgreen0001);
        switchbox_firstgreen0001SimpleButton.callback = () => {this.onFish()};
        switchbox_firstgreen0001SimpleButton.pixelPerfect = true;

        // switchbox_purplebutton0001 (components)
        const switchbox_purplebutton0001Animation = new Animation(switchbox_purplebutton0001);
        switchbox_purplebutton0001Animation.key = "switchbox/purplebutton";
        switchbox_purplebutton0001Animation.end = 12;
        switchbox_purplebutton0001Animation.repeat = 0;
        switchbox_purplebutton0001Animation.autoPlay = false;
        const switchbox_purplebutton0001SimpleButton = new SimpleButton(switchbox_purplebutton0001);
        switchbox_purplebutton0001SimpleButton.callback = () => {this.onTree()};
        switchbox_purplebutton0001SimpleButton.pixelPerfect = true;

        // switchbox_redbutton0001 (components)
        const switchbox_redbutton0001Animation = new Animation(switchbox_redbutton0001);
        switchbox_redbutton0001Animation.key = "switchbox/redbutton";
        switchbox_redbutton0001Animation.end = 39;
        switchbox_redbutton0001Animation.repeat = 0;
        switchbox_redbutton0001Animation.autoPlay = false;
        switchbox_redbutton0001Animation.stopOnOut = false;
        const switchbox_redbutton0001SimpleButton = new SimpleButton(switchbox_redbutton0001);
        switchbox_redbutton0001SimpleButton.callback = () => {this.onRedButton()};
        switchbox_redbutton0001SimpleButton.pixelPerfect = true;

        // switchbox_tealbutton0001 (components)
        const switchbox_tealbutton0001Animation = new Animation(switchbox_tealbutton0001);
        switchbox_tealbutton0001Animation.key = "switchbox/tealbutton";
        switchbox_tealbutton0001Animation.end = 76;
        switchbox_tealbutton0001Animation.repeat = 0;
        switchbox_tealbutton0001Animation.autoPlay = false;
        switchbox_tealbutton0001Animation.stopOnOut = false;
        const switchbox_tealbutton0001SimpleButton = new SimpleButton(switchbox_tealbutton0001);
        switchbox_tealbutton0001SimpleButton.callback = () => {this.onSun()};
        switchbox_tealbutton0001SimpleButton.pixelPerfect = true;

        // switchbox_yellow0001 (components)
        const switchbox_yellow0001SimpleButton = new SimpleButton(switchbox_yellow0001);
        switchbox_yellow0001SimpleButton.callback = () => {this.onYellowClick()};
        switchbox_yellow0001SimpleButton.pixelPerfect = true;
        const switchbox_yellow0001Animation = new Animation(switchbox_yellow0001);
        switchbox_yellow0001Animation.key = "switchbox/yellow";
        switchbox_yellow0001Animation.end = 13;
        switchbox_yellow0001Animation.repeat = 0;
        switchbox_yellow0001Animation.autoPlay = false;
        switchbox_yellow0001Animation.stopOnOut = false;

        // switchbox_thirdgreen0001 (components)
        const switchbox_thirdgreen0001Animation = new Animation(switchbox_thirdgreen0001);
        switchbox_thirdgreen0001Animation.key = "switchbox/thirdgreen";
        switchbox_thirdgreen0001Animation.end = 13;
        switchbox_thirdgreen0001Animation.repeat = 0;
        switchbox_thirdgreen0001Animation.autoPlay = false;
        const switchbox_thirdgreen0001SimpleButton = new SimpleButton(switchbox_thirdgreen0001);
        switchbox_thirdgreen0001SimpleButton.callback = () => {this.onGreenBook()};
        switchbox_thirdgreen0001SimpleButton.pixelPerfect = true;

        // switchbox_furthest_green0001 (components)
        const switchbox_furthest_green0001Animation = new Animation(switchbox_furthest_green0001);
        switchbox_furthest_green0001Animation.key = "switchbox/furthest green";
        switchbox_furthest_green0001Animation.end = 14;
        switchbox_furthest_green0001Animation.repeat = 0;
        switchbox_furthest_green0001Animation.autoPlay = false;
        const switchbox_furthest_green0001SimpleButton = new SimpleButton(switchbox_furthest_green0001);
        switchbox_furthest_green0001SimpleButton.callback = () => {this.onBlueBookClick()};
        switchbox_furthest_green0001SimpleButton.pixelPerfect = true;

        // shops_book (components)
        const shops_bookButton = new Button(shops_book);
        shops_bookButton.spriteName = "shops/book";
        shops_bookButton.callback = () => {this.interface.loadWidget("FairyFablesBook")};

        // shops_trunk (components)
        const shops_trunkButton = new Button(shops_trunk);
        shops_trunkButton.spriteName = "shops/trunk";
        shops_trunkButton.callback = () => {this.interface.loadWidget("FairyFablesCatalog")};

        // shops_script (components)
        const shops_scriptButton = new Button(shops_script);
        shops_scriptButton.spriteName = "shops/script";
        shops_scriptButton.callback = () => this.interface.loadWidget('StageScript',true);

        this.bluebook0001 = bluebook0001;
        this.blueee0001 = blueee0001;
        this.blinkingeyes = blinkingeyes;
        this.sun0001 = sun0001;
        this.unicorn0001 = unicorn0001;
        this.greenbook0001 = greenbook0001;
        this.puffle0001 = puffle0001;
        this.treefall0001 = treefall0001;
        this.strawfish = strawfish;
        this.strawfish0001 = strawfish0001;
        this.switchbox_secondgreen0001 = switchbox_secondgreen0001;
        this.switchbox_firstgreen0001 = switchbox_firstgreen0001;
        this.switchbox_purplebutton0001 = switchbox_purplebutton0001;
        this.switchbox_redbutton0001 = switchbox_redbutton0001;
        this.switchbox_tealbutton0001 = switchbox_tealbutton0001;
        this.switchbox_yellow0001 = switchbox_yellow0001;
        this.switchbox_thirdgreen0001 = switchbox_thirdgreen0001;
        this.switchbox_furthest_green0001 = switchbox_furthest_green0001;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.canYellowPlay = true
        this.canBluePlay = true
        this.canGreenPlay = true
        this.canRedPlay = true
        this.canTreePlay = true

        this.sunPullup = false
        this.sunCanPlay = true

        this.fishPlaying = false

    }
	
	addStamp() {
		this.stampEarned(9)	
	}

    onDisk() {
		this.addStamp()
        this.switchbox_secondgreen0001.__Animation.play()
        this.blueee0001.__Animation.play()
    }

    onFish() {
		this.addStamp()
        this.switchbox_firstgreen0001.__Animation.play()

        if (this,this.fishPlaying === true) {
            this.strawfish0001.__Animation.stop()
            this.strawfish.__Animation.stop()

            this.strawfish0001.setFrame("strawfish0001")
            this.strawfish.setFrame("strawfish0001")

            this.fishPlaying = false
            return
        }

        this.strawfish0001.__Animation.play()

        setTimeout(() => {
            this.strawfish.__Animation.play()
            this.fishPlaying = true
        }, 500)


    }

    // i love using DRY
    onSun() {
		this.addStamp()
        if (!this.sunCanPlay) {
            return
        }

        this.switchbox_tealbutton0001.__Animation.play()

        this.sun0001.on("animationcomplete", () => {
            this.sunCanPlay = true
        })

        this.sunCanPlay = false

        if (this.sunPullup) {
            this.sun0001.play("sun")
            this.sunPullup = false
            return
        }

        this.sunPullup = true
        this.sun0001.play("sun_1")
        this.soundManager.play("sun_1")
    }

    onTree() {
		this.addStamp()
        if (!this.canTreePlay) {
            return
        }

        this.canTreePlay = false

        this.switchbox_purplebutton0001.__Animation.play()
        this.treefall0001.__Animation.play()

        this.soundManager.playSfx("treeFall")

        this.treefall0001.on("animationcomplete", () => {
            this.canTreePlay = true
        })
    }


    onRedButton() {
		this.addStamp()
        if (!this.canRedPlay) {
            return
        }

        this.canRedPlay = false

        this.switchbox_redbutton0001.__Animation.play()
        this.unicorn0001.__Animation.play()

        this.soundManager.playSfx("unicorn")

        this.unicorn0001.on("animationcomplete", () => {
            this.canRedPlay = true
        })
    }

    onGreenBook() {
		this.addStamp()
        if (!this.canGreenPlay) {
            return
        }

        this.canGreenPlay = false

        this.switchbox_thirdgreen0001.__Animation.play()
        this.greenbook0001.__Animation.play()

        this.soundManager.playSfx("greenbook")

        this.greenbook0001.on("animationcomplete", () => {
            this.canGreenPlay = true
        })
    }

    onBlueBookClick() {
		this.addStamp()
        if (!this.canBluePlay) {
            return
        }

        this.canBluePlay = false

        this.switchbox_furthest_green0001.__Animation.play()
        this.bluebook0001.__Animation.play()

        this.soundManager.playSfx("bluebook")

        this.bluebook0001.on("animationcomplete", () => {
            this.canBluePlay = true
        })
    }

    onYellowClick() {
		this.addStamp()
        if (!this.canYellowPlay) {
            return
        }

        this.canYellowPlay = false
        this.switchbox_yellow0001.play("yellow")

        this.blinkingeyes.setVisible(false)
        this.blinkingeyes.setVisible(false)
        this.blinkingeyes.__Animation.stop()

        this.puffle0001.setVisible(true)
        this.puffle0001.__Animation.play()

        this.puffle0001.on("animationcomplete", () => {
            setTimeout(() => {
                this.blinkingeyes.setVisible(true)
                this.puffle0001.setVisible(false)
                this.blinkingeyes.__Animation.play()
                this.canYellowPlay = true
            }, 100);
        })
    }

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
