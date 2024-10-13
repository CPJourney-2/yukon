import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, HoverAnimation, MoveTo, SimpleButton } from '@components/components'

import Switchbox from '../basic/Switchbox'

// You can write more code here

/* START OF COMPILED CODE */

export default class Stage extends RoomScene {

    constructor() {
        super("Stage");

        /** @type {Phaser.GameObjects.Sprite} */
        this.smallBoulder;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cartsurfer;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sphinx;
        /** @type {Phaser.GameObjects.Sprite} */
        this.costume;
        /** @type {Phaser.GameObjects.Container} */
        this.interfaceIcons;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plate1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bridge;
        /** @type {Phaser.GameObjects.Sprite} */
        this.snowballTrap;
        /** @type {Phaser.GameObjects.Sprite} */
        this.smallBridge;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plate2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.croc1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.yellowpuffle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mummy;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bigBoulder;
        /** @type {Phaser.GameObjects.Sprite} */
        this.croc2;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Switchbox|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 845, 522),
            'costume': () => this.interface.loadWidget('GoldenPuffleCatalog'),

            'plate1': () => {
                if(!this.plate1.anims.isPlaying) this.plate1.__Animation.play()
            },
            'plate2': () => {
                if(!this.plate2.anims.isPlaying) this.plate2.__Animation.play()
            }
        }
        this.music = 34;
        this.secondaryPhysics = 'stage-goldenpuffle-physics'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("stage-basic-pack", "assets/media/rooms/stage/stage-basic/stage-basic-pack.json");
        this.load.pack("stage-goldenpuffle-pack", "assets/media/rooms/stage/goldenpuffle/stage-goldenpuffle-pack.json");
    }

    /** @returns {void} */
    _create() {

        // stagebg
        this.add.image(759, 492, "stage-basic", "stagebg");

        // bg_track
        this.add.image(614, 135, "stage-goldenpuffle", "bg_track");

        // bg_darkness
        this.add.image(639, 200, "stage-goldenpuffle", "bg_darkness");

        // smallBoulder
        const smallBoulder = this.add.sprite(694, 147, "stage-goldenpuffle", "bg_boulder0001");
        smallBoulder.setOrigin(0.5212433560953371, 0.6533516013556389);

        // bg_a
        this.add.image(752, 517, "stage-goldenpuffle", "bg_a");

        // bg_b0001
        const bg_b0001 = this.add.sprite(680, 456, "stage-goldenpuffle", "bg_b0001");

        // cartsurfer
        const cartsurfer = this.add.sprite(580, 135, "stage-goldenpuffle", "bg_penguin0001");

        // bg_c
        this.add.image(750, 350, "stage-goldenpuffle", "bg_c");

        // triangle_left
        this.add.image(83, 239, "stage-basic", "triangle_left");

        // triangle_right
        this.add.image(1433, 240, "stage-basic", "triangle_right");

        // vine
        const vine = this.add.image(368.484403736289, 313.197552673673, "stage-goldenpuffle", "vine");
        vine.setOrigin(0.4128026047502515, 1.3075356258192121);

        // right_chairback
        const right_chairback = this.add.image(1374, 252.76333672929593, "stage-basic", "right_chairback");
        right_chairback.setOrigin(0.5, 0.675338454901517);

        // sphinx
        const sphinx = this.add.sprite(774, 313.21199672573414, "stage-goldenpuffle", "sphinx0001");
        sphinx.setOrigin(0.5, 0.709395607575691);

        // stage_overlay
        const stage_overlay = this.add.image(744.6680297851562, 506.1531796801962, "stage-basic", "stage_overlay");
        stage_overlay.setOrigin(0.4900366660807989, 0.9946554068364994);

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

        // plate1
        const plate1 = this.add.sprite(395, 491, "stage-goldenpuffle", "pressure_plate0001");

        // bridge
        const bridge = this.add.sprite(688, 611, "stage-goldenpuffle", "bridge0001");

        // rope_c
        const rope_c = this.add.image(534.2548651526727, 532.109281557251, "stage-goldenpuffle", "rope_c");
        rope_c.setOrigin(0.2103378443789242, 0.767536358311246);

        // snowballTrap
        const snowballTrap = this.add.sprite(373.3232144828745, 476.82142988583, "stage-goldenpuffle", "snowball_door0001");
        snowballTrap.setOrigin(0.5286063065737285, 0.7529607766105182);

        // bridge_tr
        const bridge_tr = this.add.image(699, 390.93372304693474, "stage-goldenpuffle", "bridge_tr");
        bridge_tr.setOrigin(0.5, 0.5623781628043466);

        // smallBridge
        const smallBridge = this.add.sprite(668, 432.5660925835598, "stage-goldenpuffle", "shaky_bridge0001");
        smallBridge.setOrigin(0.5, 0.5305487212328547);

        // rope_c_1
        const rope_c_1 = this.add.image(822, 532, "stage-goldenpuffle", "rope_c");
        rope_c_1.setOrigin(0.2103378443789242, 0.767536358311246);
        rope_c_1.flipX = true;

        // rope_gg
        const rope_gg = this.add.image(941.3339233398438, 537.9878026273437, "stage-goldenpuffle", "rope_gg");
        rope_gg.setOrigin(0.3718394665024002, 0.8152056364400325);

        // rope_b
        const rope_b = this.add.image(810.0699348853452, 543.5668896618679, "stage-goldenpuffle", "rope_b");
        rope_b.setOrigin(0.8185703950054797, 0.8721732996501641);

        // rope_d
        const rope_d = this.add.image(566.1720355556437, 546.0309015600925, "stage-goldenpuffle", "rope_d");
        rope_d.setOrigin(0.15813854406282196, 0.8808044385848894);

        // rope_n
        const rope_n = this.add.image(691.7277183225765, 664.340903354204, "stage-goldenpuffle", "rope_n");
        rope_n.setOrigin(0.5013834949098412, 1.1549464903188469);

        // plate2
        const plate2 = this.add.sprite(1015, 375, "stage-goldenpuffle", "pressure_plate_right0001");

        // rope_d_1
        const rope_d_1 = this.add.image(458, 491, "stage-goldenpuffle", "rope_d");

        // rope_g
        const rope_g = this.add.image(693.7509434475618, 597.0863733310323, "stage-goldenpuffle", "rope_g");
        rope_g.setOrigin(0.6630844977200774, 0.7627472463267889);

        // rope_h
        const rope_h = this.add.image(499.81418596933975, 605.5659315058938, "stage-goldenpuffle", "rope_h");
        rope_h.setOrigin(0.39219872448543147, 0.8155795404176417);

        // rope_i
        const rope_i = this.add.image(887, 596, "stage-goldenpuffle", "rope_i");
        rope_i.setOrigin(0.5, 0.6920383276628511);

        // rope_j
        const rope_j = this.add.image(581.8117718820538, 634.929389040163, "stage-goldenpuffle", "rope_j");
        rope_j.setOrigin(0.3712806989443406, 0.6776766420554605);

        // rope_k
        const rope_k = this.add.image(803, 640, "stage-goldenpuffle", "rope_k");
        rope_k.setOrigin(0.5727269626483197, 0.7231395444891731);

        // rope_l
        const rope_l = this.add.image(690.1063643945596, 651.4725374176681, "stage-goldenpuffle", "rope_l");
        rope_l.setOrigin(0.42553036621329926, 0.7960167943021297);

        // rope_f
        const rope_f = this.add.image(644.7460933870004, 583.9648637149745, "stage-goldenpuffle", "rope_f");
        rope_f.setOrigin(0.49697730222619557, 0.773820857156363);

        // croc1
        const croc1 = this.add.sprite(498, 661.3038584522137, "stage-goldenpuffle", "croc_left0001");
        croc1.setOrigin(0.5, 0.6889366478140817);

        // rope_e
        const rope_e = this.add.image(757.2696841390896, 580.2677454457931, "stage-goldenpuffle", "rope_e");
        rope_e.setOrigin(0.8287172574312741, 0.7637097401034489);

        // yellowpuffle
        const yellowpuffle = this.add.sprite(1155, 226.45620451191684, "stage-goldenpuffle", "yellow_puffle0001");
        yellowpuffle.setOrigin(0.5, 0.7006854279308024);

        // pole_TALL
        const pole_TALL = this.add.image(1065, 418.4196505862227, "stage-goldenpuffle", "pole_TALL");
        pole_TALL.setOrigin(0.5, 0.9280134212728776);

        // bridge_tl
        const bridge_tl = this.add.image(595, 408.32862730470225, "stage-goldenpuffle", "bridge_tl");
        bridge_tl.setOrigin(0.5, 0.5832156826175563);

        // bridge_bl
        const bridge_bl = this.add.image(632, 449, "stage-goldenpuffle", "bridge_bl");
        bridge_bl.setOrigin(0.5, 0.6809036578642534);

        // bridge_br
        const bridge_br = this.add.image(732, 424.1995079287655, "stage-goldenpuffle", "bridge_br");
        bridge_br.setOrigin(0.5, 0.5511513471805933);

        // croc_tail
        const croc_tail = this.add.image(1087, 653, "stage-goldenpuffle", "croc_tail");
        croc_tail.setOrigin(0.20913188644795103, 0.6463667534296501);

        // amogus
        const amogus = this.add.image(361, 296.740458231385, "stage-goldenpuffle", "amogus");
        amogus.setOrigin(0.5, 0.7677208318769284);

        // wood_penguin
        this.add.image(547, 272, "stage-goldenpuffle", "wood_penguin");

        // stone
        this.add.image(430, 285, "stage-goldenpuffle", "stone");

        // mummy
        const mummy = this.add.sprite(1162, 423.9829415770516, "stage-goldenpuffle", "mummy0001");
        mummy.setOrigin(0.5, 0.8292391822880328);

        // short
        const short = this.add.image(999, 292.3775798565516, "stage-goldenpuffle", "short");
        short.setOrigin(0.5, 0.7106517788568715);

        // pole
        const pole = this.add.image(1196.6767578125, 497.1969304274059, "stage-goldenpuffle", "pole");
        pole.setOrigin(0.41550342741837604, 0.660486122487762);

        // fencing
        const fencing = this.add.image(1041.541259765625, 537.9150393143076, "stage-goldenpuffle", "fencing");
        fencing.setOrigin(0.6793325978102671, 0.7199422775645932);

        // bigBoulder
        const bigBoulder = this.add.sprite(750, 459.9742808481919, "stage-goldenpuffle", "boulder0001");
        bigBoulder.setOrigin(0.4495490352115213, 0.9851933141097913);

        // croc2
        const croc2 = this.add.sprite(926, 683.2006067641657, "stage-goldenpuffle", "croc_left0001");
        croc2.setOrigin(0.5, 0.6382790958538981);
        croc2.flipX = true;

        // lists
        const sort = [stage_overlay, right_wall, costume, scriptbtn, costumebtn, chair20, chair19, chair18, chair17, chair16, chair15, chair14, chair13, chair12, chair11, chair10, chair9, chair8, chair7, chair6, chair5, chair4, chair3, chair2, chair1, right_front, right_chairmid, right_chair, stage_right, right_chairleft, right_chairback, left_abovedoor, left_front, left_chair, left_armrest, left_chairback, left_overlay, switchbox, _leftwall, rope_f, rope_n, croc1, rope_e, yellowpuffle, pole_TALL, rope_d, bridge_tl, bridge_bl, smallBridge, bridge_br, bridge_tr, croc_tail, amogus, vine, mummy, short, pole, fencing, sphinx, snowballTrap, bigBoulder, croc2, rope_b, rope_c, rope_d_1, rope_g, rope_gg, rope_i, rope_j, rope_k, rope_l, rope_c_1];

        // smallBoulder (components)
        const smallBoulderAnimation = new Animation(smallBoulder);
        smallBoulderAnimation.key = "bg_boulder";
        smallBoulderAnimation.end = 96;
        smallBoulderAnimation.repeat = 0;
        smallBoulderAnimation.autoPlay = false;

        // bg_b0001 (components)
        const bg_b0001Animation = new Animation(bg_b0001);
        bg_b0001Animation.key = "bg_b";
        bg_b0001Animation.end = 6;

        // cartsurfer (components)
        const cartsurferAnimation = new Animation(cartsurfer);
        cartsurferAnimation.key = "bg_penguin";
        cartsurferAnimation.end = 55;
        cartsurferAnimation.repeat = 0;
        cartsurferAnimation.autoPlay = false;
        cartsurferAnimation.showOnStart = true;
        cartsurferAnimation.hideOnComplete = true;

        // sphinx (components)
        const sphinxAnimation = new Animation(sphinx);
        sphinxAnimation.key = "sphinx";
        sphinxAnimation.end = 40;
        sphinxAnimation.repeat = 0;
        sphinxAnimation.autoPlay = false;

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
        costumebtnButton.callback = () => this.interface.loadWidget("GoldenPuffleCatalog");

        // scriptbtn (components)
        const scriptbtnButton = new Button(scriptbtn);
        scriptbtnButton.spriteName = "scriptbtn";
        scriptbtnButton.callback = () => this.interface.loadWidget('StageScript',true);

        // plate1 (components)
        const plate1Animation = new Animation(plate1);
        plate1Animation.key = "pressure_plate";
        plate1Animation.end = 110;
        plate1Animation.repeat = 0;
        plate1Animation.autoPlay = false;

        // bridge (components)
        const bridgeHoverAnimation = new HoverAnimation(bridge);
        bridgeHoverAnimation.key = "bridge";
        bridgeHoverAnimation.checkpoints = "22";
        bridgeHoverAnimation.end = 26;
        bridgeHoverAnimation.createZone = false;

        // snowballTrap (components)
        const snowballTrapAnimation = new Animation(snowballTrap);
        snowballTrapAnimation.key = "snowball_door";
        snowballTrapAnimation.end = 91;
        snowballTrapAnimation.repeat = 0;
        snowballTrapAnimation.autoPlay = false;

        // smallBridge (components)
        const smallBridgeAnimation = new Animation(smallBridge);
        smallBridgeAnimation.key = "shaky_bridge";
        smallBridgeAnimation.end = 21;
        smallBridgeAnimation.repeat = 0;
        smallBridgeAnimation.autoPlay = false;
        const smallBridgeSimpleButton = new SimpleButton(smallBridge);
        smallBridgeSimpleButton.hoverCallback = () => this.onSmallBridge();

        // plate2 (components)
        const plate2Animation = new Animation(plate2);
        plate2Animation.key = "pressure_plate_right";
        plate2Animation.end = 255;
        plate2Animation.repeat = 0;
        plate2Animation.autoPlay = false;

        // croc1 (components)
        const croc1Animation = new Animation(croc1);
        croc1Animation.key = "croc_left";
        croc1Animation.end = 37;
        croc1Animation.autoPlay = false;

        // yellowpuffle (components)
        const yellowpuffleAnimation = new Animation(yellowpuffle);
        yellowpuffleAnimation.key = "yellow_puffle";
        yellowpuffleAnimation.end = 329;
        yellowpuffleAnimation.repeat = 0;
        yellowpuffleAnimation.autoPlay = false;

        // mummy (components)
        const mummyHoverAnimation = new HoverAnimation(mummy);
        mummyHoverAnimation.key = "mummy";
        mummyHoverAnimation.checkpoints = "15";
        mummyHoverAnimation.end = 22;
        mummyHoverAnimation.createZone = false;

        // bigBoulder (components)
        const bigBoulderAnimation = new Animation(bigBoulder);
        bigBoulderAnimation.key = "boulder";
        bigBoulderAnimation.end = 60;
        bigBoulderAnimation.repeat = 0;
        bigBoulderAnimation.autoPlay = false;

        // croc2 (components)
        const croc2Animation = new Animation(croc2);
        croc2Animation.key = "croc_left";
        croc2Animation.end = 37;
        croc2Animation.autoPlay = false;

        this.smallBoulder = smallBoulder;
        this.cartsurfer = cartsurfer;
        this.sphinx = sphinx;
        this.costume = costume;
        this.interfaceIcons = interfaceIcons;
        this.plate1 = plate1;
        this.bridge = bridge;
        this.snowballTrap = snowballTrap;
        this.smallBridge = smallBridge;
        this.plate2 = plate2;
        this.croc1 = croc1;
        this.yellowpuffle = yellowpuffle;
        this.mummy = mummy;
        this.bigBoulder = bigBoulder;
        this.croc2 = croc2;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.smallBridgeState = false
        this.sphinxState = false

        this.createSfxTimeline(this.sphinx, {
            "__ANY__": [
                { frame: 9, sound: "goldenpuffle-sphinx1" },
                { frame: 16, sound: "goldenpuffle-sphinx2" }
            ]
        })

        this.createSfxTimeline(this.smallBridge, {
            "__ANY__": [
                { frame: 17, sound: "goldenpuffle-smallbridge" }
            ]
        })

        this.createSfxTimeline(this.yellowpuffle, {
            "__ANY__": [
                { frame: 2, sound: "goldenpuffle-hiss" },
                { frame: 40, sound: "goldenpuffle-hiss" },
                { frame: 273, sound: "goldenpuffle-hiss" },
                { frame: 311, sound: "goldenpuffle-hiss" }
            ]
        },true)

        this.createSfxTimeline(this.snowballTrap, {
            "__ANY__": [
                { frame: 5, sound: "goldenpuffle-snowball" },
                { frame: 15, sound: "goldenpuffle-snowball" },
                { frame: 25, sound: "goldenpuffle-snowball" },
                { frame: 37, sound: "goldenpuffle-snowball" },
                { frame: 49, sound: "goldenpuffle-snowball" },
                { frame: 62, sound: "goldenpuffle-snowball" },
                { frame: 74, sound: "goldenpuffle-snowball" }
            ]
        },true)

        this.plate1.on('animationupdate', () => {
            if(this.plate1.anims.currentFrame.index == 26) this.switchboxTwo()
        })
        this.plate2.on('animationupdate', () => {
            if(this.plate2.anims.currentFrame.index == 24) {
                this.smallBoulder.__Animation.play()
                this.smallBoulder.once('animationcomplete', () => {
                    this.soundManager.play('goldenpuffle-bigboulder', {volume:0.23})
                    this.bigBoulder.__Animation.play()
                })
            }
        })

        this.smallBoulder.on('animationupdate', () => {
            if(this.smallBoulder.anims.currentFrame.index == 10) this.soundManager.playSfx('goldenpuffle-bgboulder')
        })
    }

    // First slider
    switchboxOne() {
        if(this.croc1.anims.isPlaying || this.croc2.anims.isPlaying) {
            this.croc1.__Animation.stop()
            this.croc2.__Animation.stop()
        } else {
            this.croc1.__Animation.play()
            this.croc2.__Animation.play()
        }
    }

    // Second slider
    switchboxTwo() {
        if(!this.snowballTrap.anims.isPlaying) this.snowballTrap.__Animation.play()
    }

    // Cyan button
    switchboxThree() {
        this.onSmallBridge()
    }

    onSmallBridge() {
        if(!this.smallBridge.anims.isPlaying && this.smallBridgeState) {
            this.smallBridge.setFrame('shaky_bridge0001')
            this.smallBridgeState = false
        } else {
            if(!this.smallBridge.anims.isPlaying) this.smallBridge.__Animation.play()
            this.smallBridgeState = true
        }
    }

    // Blue button
    switchboxFour() {
        if(!this.sphinx.anims.isPlaying && this.sphinxState) {
            this.sphinx.setFrame('sphinx0001')
            this.sphinxState = false
        } else {
            if(!this.sphinx.anims.isPlaying) this.sphinx.__Animation.play()
            this.sphinxState = true
        }
    }

    // Red button
    switchboxFive() {
        if(this.bridge.__HoverAnimation.currentAnimation === 0 && !this.bridge.anims.isPlaying) this.soundManager.playSfx('goldenpuffle-bridgecollapse',{},true)
        this.bridge.__HoverAnimation.play()
    }

    // Third slider
    switchboxSix() {
        if(!this.cartsurfer.anims.isPlaying) {
            this.cartsurfer.__Animation.play()
            this.soundManager.playSfx('goldenpuffle-cart',{},true)
        }
    }

    // Fourth slider
    switchboxSeven() {
        this.mummy.__HoverAnimation.play()
        if(this.mummy.anims.isPlaying) this.soundManager.playSfx('goldenpuffle-mummy',{},true)
    }

    // Yellow lever
    switchboxEight() {
        if(!this.yellowpuffle.anims.isPlaying) this.yellowpuffle.__Animation.play()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
