import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, HoverAnimation, MoveTo, SimpleButton, ZoneTrigger } from '@components/components'

import Switchbox from '../basic/Switchbox'

// You can write more code here

/* START OF COMPILED CODE */

export default class Stage extends RoomScene {

    constructor() {
        super("Stage");

        /** @type {Phaser.GameObjects.Sprite} */
        this.costume;
        /** @type {Phaser.GameObjects.Container} */
        this.interfaceIcons;
        /** @type {Phaser.GameObjects.Sprite} */
        this.chestLid;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fish3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fishes;
        /** @type {Phaser.GameObjects.Sprite} */
        this.seaMonster;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fish2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fish1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.subDoor;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Switchbox|Phaser.GameObjects.Container>} */
        this.sort;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.flowers;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 845, 522),
            'costume': () => this.interface.loadWidget('UnderwaterCatalog')
        }
        this.music = 230;
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("stage-basic-pack", "assets/media/rooms/stage/stage-basic/stage-basic-pack.json");
        this.load.pack("stage-underwater-pack", "assets/media/rooms/stage/underwater/stage-underwater-pack.json");
    }

    /** @returns {void} */
    _create() {

        // pinTrigger
        const pinTrigger = this.add.rectangle(1163, 512, 128, 128);

        // bg
        this.add.image(741, 466, "stage-underwater", "bg");

        // triangle_left
        this.add.image(83, 239, "stage-basic", "triangle_left");

        // triangle_right
        this.add.image(1433, 240, "stage-basic", "triangle_right");

        // right_chairback
        const right_chairback = this.add.image(1374, 252.76333672929593, "stage-basic", "right_chairback");
        right_chairback.setOrigin(0.5, 0.675338454901517);

        // stage_overlay
        const stage_overlay = this.add.image(744.6680297851562, 472.484999819863, "stage-basic", "stage_overlay");
        stage_overlay.setOrigin(0.4900366660807989, 0.9304031279175384);

        // right_wall
        const right_wall = this.add.image(1294.4410966383941, 515.0739483498901, "stage-basic", "right_wall");
        right_wall.setOrigin(0.44063447557567353, 0.654705668387584);

        // left_chairback
        const left_chairback = this.add.image(134.44664001464844, 232.03087204007755, "stage-basic", "left_chairback");
        left_chairback.setOrigin(0.48109911147772233, 0.5844094852933593);

        // _leftwall
        const _leftwall = this.add.container(156.37661743164062, 530.788818359375);

        // left_belowdoor
        const left_belowdoor = this.add.image(69.32223510742188, 0, "stage-basic", "left_belowdoor");
        left_belowdoor.setOrigin(0.5738635850603218, 0.6730534428184811);
        _leftwall.add(left_belowdoor);

        // left_door
        const left_door = this.add.image(0, 101.205078125, "stage-basic", "left_door");
        left_door.setOrigin(0.7558562016004349, 0.7142637112299586);
        _leftwall.add(left_door);

        // left_abovedoor
        const left_abovedoor = this.add.image(166, 715.7441204158331, "stage-basic", "left_abovedoor");
        left_abovedoor.setOrigin(0.5, 1.2028600469329496);

        // chair1
        const chair1 = this.add.image(143.69540212806854, 850.9482702262616, "stage-basic", "chair1");
        chair1.setOrigin(0.5076417816271268, 0.7030820374005449);

        // chair2
        const chair2 = this.add.image(248.431031921028, 873.7298787385357, "stage-basic", "chair2");
        chair2.setOrigin(0.5923100170002478, 0.7339079885321429);

        // chair3
        const chair3 = this.add.image(357.3448255368224, 887.7298787385357, "stage-basic", "chair3");
        chair3.setOrigin(0.5689655003043173, 0.7427347050805256);

        // chair4
        const chair4 = this.add.image(467.9540212806853, 898.5114872508099, "stage-basic", "chair4");
        chair4.setOrigin(0.5620894757204046, 0.7741489158731718);

        // chair5
        const chair5 = this.add.image(566.725544937112, 911.2776226781828, "stage-basic", "chair5");
        chair5.setOrigin(0.4318054774787645, 0.7526694488286803);

        // chair6
        const chair6 = this.add.image(201.68444460800524, 750.85791015625, "stage-basic", "chair6");
        chair6.setOrigin(0.6187161346950792, 0.6845832307547323);

        // chair7
        const chair7 = this.add.image(291.4276922328151, 776.0721682719034, "stage-basic", "chair7");
        chair7.setOrigin(0.5624046829277973, 0.7218774087274932);

        // chair8
        const chair8 = this.add.image(393.98207843740346, 795.242190490837, "stage-basic", "chair8");
        chair8.setOrigin(0.5915787012605822, 0.7244647267670088);

        // chair9
        const chair9 = this.add.image(488, 818.520224106867, "stage-basic", "chair9");
        chair9.setOrigin(0.5, 0.7716211819701617);

        // chair10
        const chair10 = this.add.image(593.5289597375206, 833.308480392172, "stage-basic", "chair10");
        chair10.setOrigin(0.434838370062184, 0.7746355702846107);

        // chair11
        const chair11 = this.add.image(955.8808910052481, 909.6426730157445, "stage-basic", "chair11");
        chair11.setOrigin(0.5579477279797658, 0.7273333943821592);

        // chair12
        const chair12 = this.add.image(1064, 889.7320047618084, "stage-basic", "chair12");
        chair12.setOrigin(0.5, 0.6705000457866194);

        // chair13
        const chair13 = this.add.image(1173.044665873032, 879.7468933861524, "stage-basic", "chair13");
        chair13.setOrigin(0.4755757510167938, 0.6579895602467203);

        // chair14
        const chair14 = this.add.image(1281.07444312172, 863.7468933861524, "stage-basic", "chair14");
        chair14.setOrigin(0.4564110010771675, 0.6522444853286578);

        // chair15
        const chair15 = this.add.image(1384.1616363109374, 845.808181554687, "stage-basic", "chair15");
        chair15.setOrigin(0.5347432561641474, 0.639895411988381);

        // chair16
        const chair16 = this.add.image(935.7915592591843, 834.5086753966488, "stage-basic", "chair16");
        chair16.setOrigin(0.6060889173783406, 0.7851638192688487);

        // chair17
        const chair17 = this.add.image(1034.0297772486879, 821.5682298940246, "stage-basic", "chair17");
        chair17.setOrigin(0.48225024548367457, 0.7720783799430917);

        // chair18
        const chair18 = this.add.image(1141.014888624344, 802.5384526453366, "stage-basic", "chair18");
        chair18.setOrigin(0.49096228095728384, 0.7827634504197837);

        // chair19
        const chair19 = this.add.image(1241.9702227513121, 779.5980071427126, "stage-basic", "chair19");
        chair19.setOrigin(0.5191283762263312, 0.7353805941832975);

        // chair20
        const chair20 = this.add.image(1333, 750.7022275131204, "stage-basic", "chair20");
        chair20.setOrigin(0.5, 0.6743559956913312);

        // right_chairleft
        const right_chairleft = this.add.image(1373, 284, "stage-basic", "right_chairleft");

        // right_front
        const right_front = this.add.image(1371.999115262205, 619.2265013751921, "stage-basic", "right_front");
        right_front.setOrigin(0.37203372162182413, 2.690759905120663);

        // left_chair
        const left_chair = this.add.image(96.05715096981166, 320.98261013599745, "stage-basic", "left_chair");
        left_chair.setOrigin(0.5593038370139549, 0.6826084407075674);

        // left_armrest
        const left_armrest = this.add.image(71.02036215870497, 357.79400151835125, "stage-basic", "left_armrest");
        left_armrest.setOrigin(0.5495141432659502, 1.2997693665185137);

        // left_front
        const left_front = this.add.image(183.9093748336151, 624.2793554051505, "stage-basic", "left_front");
        left_front.setOrigin(0.8408027243299293, 2.730546105552366);

        // left_overlay
        const left_overlay = this.add.image(74.0615430693178, 872.6307415840931, "stage-basic", "left_overlay");
        left_overlay.setOrigin(0.2689168131609449, 0.9272858926458);

        // right_chairmid
        const right_chairmid = this.add.image(1420.9766219440949, 326.2448488935423, "stage-basic", "right_chairmid");
        right_chairmid.setOrigin(0.4829973225898296, 0.7284391981076064);

        // right_chair
        const right_chair = this.add.image(1444, 337, "stage-basic", "right_chair");

        // stage_right
        const stage_right = this.add.image(1394.9880787639731, 874.960910026348, "stage-basic", "stage_right");
        stage_right.setOrigin(0.5577825808298406, 0.9318248532770943);

        // switchbox
        const switchbox = new Switchbox(this, 756.5859985351562, 847.3482072893984);
        this.add.existing(switchbox);

        // costume
        const costume = this.add.sprite(1338.1356206828325, 607.4235353934068, "stage-basic", "costumes/costumes0001");
        costume.setOrigin(0.4504783046497219, 0.5345352275313785);

        // interfaceIcons
        const interfaceIcons = this.add.container(1403.64453125, 993.4522094726562);

        // costumebtn
        const costumebtn = this.add.image(0, 10.4622802734375, "stage-basic", "costumebtn");
        costumebtn.setOrigin(0.5238205532906157, 1.5775175497198353);
        interfaceIcons.add(costumebtn);

        // scriptbtn
        const scriptbtn = this.add.image(13.822265625, 0, "stage-basic", "scriptbtn");
        scriptbtn.setOrigin(0.5600749118702879, 2.1517673137045117);
        interfaceIcons.add(scriptbtn);

        // bubble10001
        const bubble10001 = this.add.sprite(357, 191, "stage-underwater", "bubble10001");

        // bubble20001
        const bubble20001 = this.add.sprite(321, 199, "stage-underwater", "bubble20001");

        // castle6
        const castle6 = this.add.image(1154, 332.33278381758987, "stage-underwater", "castle6");
        castle6.setOrigin(0.49449178594781906, 0.9193955371127082);

        // castle7
        const castle7 = this.add.image(1189.3560791015625, 470.37856782934773, "stage-underwater", "castle7");
        castle7.setOrigin(0.496481179630969, 0.7576261485666875);

        // castle2
        this.add.image(911, 217, "stage-underwater", "castle2");

        // castle1
        const castle1 = this.add.image(860, 317, "stage-underwater", "castle1");

        // castle5
        this.add.image(1039, 323, "stage-underwater", "castle5");

        // castle3
        const castle3 = this.add.image(1033.6081310312138, 519.0423514658956, "stage-underwater", "castle3");
        castle3.setOrigin(0.5088847018299106, 0.8650642283502749);

        // castle4
        const castle4 = this.add.image(1032.3918689687862, 585.3303301780338, "stage-underwater", "castle4");
        castle4.setOrigin(0.4907578676367022, 2.840724056544632);

        // _chest
        const _chest = this.add.container(898.09467819686, 668.2660901570039);

        // chest
        const chest = this.add.image(0.9053218031400547, -45.26609015700387, "stage-underwater", "chest");
        _chest.add(chest);

        // chestLid
        const chestLid = this.add.sprite(-13, -23, "stage-underwater", "chestlid0001");
        _chest.add(chestLid);

        // clam1
        const clam1 = this.add.image(400, 652.8688466236804, "stage-underwater", "clam1");
        clam1.setOrigin(0.5, 0.17475386494721534);

        // clam2
        const clam2 = this.add.image(646, 690, "stage-underwater", "clam2");
        clam2.setOrigin(0.4923220108815188, 0.1449697831613912);

        // clam4
        const clam4 = this.add.image(952, 685.5043437776078, "stage-underwater", "clam4");
        clam4.setOrigin(0.5, 0.12017375110431203);

        // clam3
        const clam3 = this.add.image(807, 658, "stage-underwater", "clam3");
        clam3.setOrigin(0.5, 0.16636325114521355);

        // clam5
        const clam5 = this.add.image(522.5572366826134, 513.5874969696544, "stage-underwater", "clam5");
        clam5.setOrigin(0.4869775494886292, 0.1634998787861741);

        // clam6
        const clam6 = this.add.image(590, 472, "stage-underwater", "clam6");
        clam6.setOrigin(0.4951277732261335, 0.10710363295543857);

        // fish3
        const fish3 = this.add.sprite(652, 420, "stage-underwater", "fishblue0001");
        fish3.setOrigin(0.5, 1.1956691148064005);

        // fishes
        const fishes = this.add.sprite(587, 180, "stage-underwater", "fishes0001");
        fishes.setOrigin(0.5164073058341219, 0.5);
        fishes.visible = false;

        // seaMonster
        const seaMonster = this.add.sprite(655, 95, "stage-underwater", "seamonster0001");
        seaMonster.visible = false;

        // fish2
        const fish2 = this.add.sprite(540.8909301757812, 460.67669915710144, "stage-underwater", "fishpurple0001");
        fish2.setOrigin(0.4987608265813851, 1.2200482013198604);

        // rock1
        this.add.image(368, 222, "stage-underwater", "rock1");

        // rock2
        this.add.image(692, 215, "stage-underwater", "rock2");

        // nature1
        const nature1 = this.add.image(344, 477.82583979387135, "stage-underwater", "nature1");
        nature1.setOrigin(0.5, 0.586944752089112);

        // nature2
        const nature2 = this.add.image(698, 515, "stage-underwater", "nature2");
        nature2.setOrigin(0.5, 0.12677484493686278);

        // nature3
        const nature3 = this.add.image(892, 691, "stage-underwater", "nature3");

        // nature5
        const nature5 = this.add.image(1037, 661, "stage-underwater", "nature5");
        nature5.setOrigin(0.4776933959260038, 0.8754038246599172);

        // nature4
        const nature4 = this.add.image(996.0548929343597, 665.4959719606717, "stage-underwater", "nature4");
        nature4.setOrigin(0.28539005753646496, 0.8361374475977876);

        // nature6
        const nature6 = this.add.image(1086, 561.9774824411306, "stage-underwater", "nature6");
        nature6.setOrigin(0.5, 0.8534997298635482);

        // nature9
        const nature9 = this.add.image(787, 486.8433416192111, "stage-underwater", "nature9");
        nature9.setOrigin(0.5, 0.7090611495663538);

        // nature8
        const nature8 = this.add.image(795.1699858451772, 507.82859867253825, "stage-underwater", "nature8");
        nature8.setOrigin(0.5022366558575942, 0.8236268975488125);

        // nature7
        const nature7 = this.add.image(805, 521, "stage-underwater", "nature7");
        nature7.setOrigin(0.5, 0.7619294780932028);

        // nature13
        const nature13 = this.add.image(597, 331, "stage-underwater", "nature13");
        nature13.setOrigin(0.5110442437362598, 0.8174512109832472);

        // nature12
        const nature12 = this.add.image(611.7202124920148, 341.6681004471732, "stage-underwater", "nature12");
        nature12.setOrigin(0.49631858542124674, 0.8013096239840996);

        // nature11
        const nature11 = this.add.image(638, 352.4298003832913, "stage-underwater", "nature11");
        nature11.setOrigin(0.5, 0.8052227359838934);

        // nature10
        const nature10 = this.add.image(676.373294172771, 371.71200344646246, "stage-underwater", "nature10");
        nature10.setOrigin(0.3112410622111963, 0.8571035076976287);

        // nature14
        const nature14 = this.add.image(378.7320032216107, 352.9180370485228, "stage-underwater", "nature14");
        nature14.setOrigin(0.527492114628741, 0.7805357330777862);

        // nature15
        const nature15 = this.add.image(345, 342.84604993496555, "stage-underwater", "nature15");
        nature15.setOrigin(0.5, 0.7982894437218394);

        // nature16
        this.add.image(478, 161, "stage-underwater", "nature16");

        // nature17
        this.add.image(408, 308, "stage-underwater", "nature17");

        // nature19
        this.add.image(289, 270, "stage-underwater", "nature19");

        // nature18
        this.add.image(339, 286, "stage-underwater", "nature18");

        // nature20
        this.add.image(301, 224, "stage-underwater", "nature20");

        // fish1
        const fish1 = this.add.sprite(345, 430.62938294542187, "stage-underwater", "seahorse0001");
        fish1.setOrigin(0.5530989256605258, 1.14358893175106);

        // subback
        this.add.image(472, 384, "stage-underwater", "subback");

        // submarine
        const submarine = this.add.container(465.96112060546875, 467.4897043653959);

        // sub
        const sub = this.add.image(5.038876156120807, -225.4897079864066, "stage-underwater", "sub");
        submarine.add(sub);

        // subDoor
        const subDoor = this.add.sprite(-64, -66, "stage-underwater", "subdoor0001");
        submarine.add(subDoor);

        // wreckage1
        const wreckage1 = this.add.image(454.5991291931439, 659.7734403908884, "stage-underwater", "wreckage1");
        wreckage1.setOrigin(0.519037252299332, 0.8870907967530823);

        // wreckage2
        const wreckage2 = this.add.image(525, 669, "stage-underwater", "wreckage2");
        wreckage2.setOrigin(0.5395735416347737, 0.8596781984425592);

        // wreckage3
        const wreckage3 = this.add.image(593, 676.4041585538562, "stage-underwater", "wreckage3");
        wreckage3.setOrigin(0.5, 0.7601039638464044);

        // wreckage4
        const wreckage4 = this.add.image(586, 613, "stage-underwater", "wreckage4");
        wreckage4.setOrigin(0.5, 0.7597792397966573);

        // wreckage5
        const wreckage5 = this.add.image(666.6057661040174, 648.7116947991301, "stage-underwater", "wreckage5");
        wreckage5.setOrigin(0.4963831752662151, 0.7053301541576052);

        // flower10001
        const flower10001 = this.add.sprite(346, 244, "stage-underwater", "flower10001");

        // flower20001
        const flower20001 = this.add.sprite(382, 272, "stage-underwater", "flower20001");

        // flower30001
        const flower30001 = this.add.sprite(608, 260, "stage-underwater", "flower30001");

        // flower40001
        const flower40001 = this.add.sprite(690, 235, "stage-underwater", "flower40001");

        // pin
        const pin = this.add.image(1159, 526, "stage-underwater", "pin");

        // lists
        const sort = [stage_overlay, right_wall, costume, scriptbtn, costumebtn, chair20, chair19, chair18, chair17, chair16, chair15, chair14, chair13, chair12, chair11, chair10, chair9, chair8, chair7, chair6, chair5, chair4, chair3, chair2, chair1, right_front, right_chairmid, right_chair, stage_right, right_chairleft, right_chairback, left_abovedoor, left_front, left_chair, left_armrest, left_chairback, left_overlay, switchbox, _leftwall, castle4, castle3, castle6, castle7, _chest, clam1, clam2, clam4, clam3, clam5, clam6, fish2, nature1, nature2, nature3, nature4, nature5, nature6, nature7, nature8, nature9, nature10, nature11, nature12, nature13, nature14, nature15, fish1, submarine, wreckage1, wreckage2, wreckage3, wreckage4, wreckage5, castle1, fish3, pin];
        const flowers = [flower10001, flower40001, flower30001, flower20001];

        // pinTrigger (components)
        const pinTriggerZoneTrigger = new ZoneTrigger(pinTrigger);
        pinTriggerZoneTrigger.callback = () => this.interface.prompt.showItem(7062);

        // left_door (components)
        const left_doorButton = new Button(left_door);
        left_doorButton.spriteName = "left_door";
        const left_doorMoveTo = new MoveTo(left_door);
        left_doorMoveTo.x = 157;
        left_doorMoveTo.y = 655;

        // switchbox (prefab fields)
        switchbox.switch1Callback = () => this.switchboxOne();
        switchbox.switch2Callback = () => this.switchboxTwo();
        switchbox.switch3Callback = () => this.switchboxThree();
        switchbox.switch4Callback = () => this.switchboxFour();
        switchbox.switch5Callback = () => this.switchboxFive();
        switchbox.switch6Callback = () => this.switchboxSix();
        switchbox.switch7Callback = () => this.switchboxSeven();
        switchbox.switch8Callback = () => this.switchboxEight();

        // costume (components)
        const costumeMoveTo = new MoveTo(costume);
        costumeMoveTo.x = 1300;
        costumeMoveTo.y = 630;
        const costumeSimpleButton = new SimpleButton(costume);
        costumeSimpleButton.hoverCallback = () => this.costume.__HoverAnimation.playIndex(0);
        costumeSimpleButton.hoverOutCallback = () => this.costume.__HoverAnimation.playIndex(1);
        const costumeHoverAnimation = new HoverAnimation(costume);
        costumeHoverAnimation.key = "costumes/costumes";
        costumeHoverAnimation.checkpoints = "17";
        costumeHoverAnimation.end = 32;
        costumeHoverAnimation.createZone = false;

        // costumebtn (components)
        const costumebtnButton = new Button(costumebtn);
        costumebtnButton.spriteName = "costumebtn";
        costumebtnButton.callback = () => this.interface.loadWidget('UnderwaterCatalog');

        // scriptbtn (components)
        const scriptbtnButton = new Button(scriptbtn);
        scriptbtnButton.spriteName = "scriptbtn";
        scriptbtnButton.callback = () => this.interface.loadWidget('StageScript',true);

        // bubble10001 (components)
        const bubble10001Animation = new Animation(bubble10001);
        bubble10001Animation.key = "bubble1";
        bubble10001Animation.end = 291;

        // bubble20001 (components)
        const bubble20001Animation = new Animation(bubble20001);
        bubble20001Animation.key = "bubble2";
        bubble20001Animation.end = 282;

        // chestLid (components)
        const chestLidAnimation = new Animation(chestLid);
        chestLidAnimation.key = "chestlid";
        chestLidAnimation.end = 160;
        chestLidAnimation.repeat = 0;
        chestLidAnimation.autoPlay = false;

        // fish3 (components)
        const fish3HoverAnimation = new HoverAnimation(fish3);
        fish3HoverAnimation.key = "fishblue";
        fish3HoverAnimation.checkpoints = "20";
        fish3HoverAnimation.end = 31;
        fish3HoverAnimation.createZone = false;

        // fishes (components)
        const fishesAnimation = new Animation(fishes);
        fishesAnimation.key = "fishes";
        fishesAnimation.end = 93;
        fishesAnimation.autoPlay = false;
        fishesAnimation.showOnStart = true;
        fishesAnimation.hideOnComplete = true;

        // seaMonster (components)
        const seaMonsterAnimation = new Animation(seaMonster);
        seaMonsterAnimation.key = "seamonster";
        seaMonsterAnimation.end = 35;
        seaMonsterAnimation.repeat = 0;
        seaMonsterAnimation.autoPlay = false;
        seaMonsterAnimation.showOnStart = true;
        seaMonsterAnimation.hideOnComplete = true;

        // fish2 (components)
        const fish2HoverAnimation = new HoverAnimation(fish2);
        fish2HoverAnimation.key = "fishpurple";
        fish2HoverAnimation.checkpoints = "17";
        fish2HoverAnimation.end = 33;
        fish2HoverAnimation.createZone = false;

        // fish1 (components)
        const fish1HoverAnimation = new HoverAnimation(fish1);
        fish1HoverAnimation.key = "seahorse";
        fish1HoverAnimation.checkpoints = "20";
        fish1HoverAnimation.end = 45;
        fish1HoverAnimation.createZone = false;

        // subDoor (components)
        const subDoorHoverAnimation = new HoverAnimation(subDoor);
        subDoorHoverAnimation.key = "subdoor";
        subDoorHoverAnimation.checkpoints = "8";
        subDoorHoverAnimation.end = 13;
        subDoorHoverAnimation.createZone = false;

        // flower10001 (components)
        const flower10001HoverAnimation = new HoverAnimation(flower10001);
        flower10001HoverAnimation.key = "flower1";
        flower10001HoverAnimation.checkpoints = "20";
        flower10001HoverAnimation.end = 39;
        flower10001HoverAnimation.createZone = false;

        // flower20001 (components)
        const flower20001HoverAnimation = new HoverAnimation(flower20001);
        flower20001HoverAnimation.key = "flower2";
        flower20001HoverAnimation.checkpoints = "9";
        flower20001HoverAnimation.end = 17;
        flower20001HoverAnimation.createZone = false;

        // flower30001 (components)
        const flower30001HoverAnimation = new HoverAnimation(flower30001);
        flower30001HoverAnimation.key = "flower3";
        flower30001HoverAnimation.checkpoints = "14";
        flower30001HoverAnimation.end = 27;
        flower30001HoverAnimation.createZone = false;

        // flower40001 (components)
        const flower40001HoverAnimation = new HoverAnimation(flower40001);
        flower40001HoverAnimation.key = "flower4";
        flower40001HoverAnimation.checkpoints = "9";
        flower40001HoverAnimation.end = 17;
        flower40001HoverAnimation.createZone = false;

        this.costume = costume;
        this.interfaceIcons = interfaceIcons;
        this.chestLid = chestLid;
        this.fish3 = fish3;
        this.fishes = fishes;
        this.seaMonster = seaMonster;
        this.fish2 = fish2;
        this.fish1 = fish1;
        this.subDoor = subDoor;
        this.sort = sort;
        this.flowers = flowers;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.chestLid.on('animationupdate', () => {
            if(this.chestLid.anims.currentFrame.index == 155) this.soundManager.playSfx('stage-underwater-chestshut', {}, true)
        })
    }

    // First slider
    switchboxOne() {
        if(this.fishes.anims.isPlaying) {
            this.fishes.__Animation.stop()
        } else {
            this.fishes.__Animation.play()
        }
    }

    // Second slider
    switchboxTwo() {
        if(!this.subDoor.anims.isPlaying) this.soundManager.playSfx('stage-underwater-subdoor', {}, true)
        this.subDoor.__HoverAnimation.play()
    }

    // Cyan button
    switchboxThree() {
        this.fish3.__HoverAnimation.play()
    }

    // Red button
    switchboxFour() {
        this.fish1.__HoverAnimation.play()
    }

    // Blue button
    switchboxFive() {
        this.fish2.__HoverAnimation.play()
    }

    // Third slider
    switchboxSix() {
        if(!this.seaMonster.anims.isPlaying) {
            this.soundManager.playSfx('stage-underwater-seamonster', {}, true)
            this.seaMonster.__Animation.play()
        }
    }

    // Fourth slider
    switchboxSeven() {
        for(let flower of this.flowers) {
            flower.__HoverAnimation.play()
        }
    }

    // Yellow lever
    switchboxEight() {
        if(!this.chestLid.anims.isPlaying) {
            this.chestLid.__Animation.play()
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
