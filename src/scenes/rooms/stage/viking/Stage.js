import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'

import Switchbox from '../basic/Switchbox';

/* START OF COMPILED CODE */

export default class Stage extends RoomScene {

    constructor() {
        super("Stage");

        /** @type {Phaser.GameObjects.Sprite} */
        this.sky;
        /** @type {Phaser.GameObjects.Sprite} */
        this.snow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fan;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sails;
        /** @type {Phaser.GameObjects.Sprite} */
        this.shipeyes;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cloud;
        /** @type {Phaser.GameObjects.Sprite} */
        this.wavesback;
        /** @type {Phaser.GameObjects.Sprite} */
        this.wavesfront;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bush;
        /** @type {Phaser.GameObjects.Sprite} */
        this.yellowpuffle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.costume;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Switchbox>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 845, 522),
            'costume': () => this.interface.loadWidget("VikingCatalog")
        }
        this.music = 41;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("stage-viking-pack", "assets/media/rooms/stage/stage-viking/stage-viking-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_below_sky
        this.add.image(764, 424, "stage-viking", "bg_below_sky");

        // sky
        const sky = this.add.sprite(872, -36, "stage-viking", "skychanging0001");

        // bg_above_sky
        this.add.image(760, 486, "stage-viking", "bg_above_sky");

        // snow
        const snow = this.add.sprite(1157, 156, "stage-viking", "snow0001");

        // triangle_left
        this.add.image(83, 239, "stage-viking", "triangle_left");

        // triangle_right
        this.add.image(1433, 240, "stage-viking", "triangle_right");

        // right_chairback
        const right_chairback = this.add.image(1374, 252.76333672929593, "stage-viking", "right_chairback");
        right_chairback.setOrigin(0.5, 0.675338454901517);

        // shippoleupright
        const shippoleupright = this.add.image(458.57508259273874, 301.2109487700602, "stage-viking", "shippoleupright");
        shippoleupright.setOrigin(0.5674543885422404, 0.8837659280341024);

        // fan
        const fan = this.add.sprite(331, 141, "stage-viking", "fan0001");

        // shippole
        const shippole = this.add.image(456.1912144847074, 324.9833475701834, "stage-viking", "shippole");
        shippole.setOrigin(0.42724696329826223, 2.4063864258895644);

        // sails
        const sails = this.add.sprite(472.7042779325502, 354.1223082635197, "stage-viking", "sails0001");
        sails.setOrigin(0.4334630273536214, 1.186123616871265);

        // ship
        const ship = this.add.image(496.0818925261767, 437.8089600440879, "stage-viking", "ship");
        ship.setOrigin(0.5190610725844869, 0.9077187834591346);

        // shipeyes
        const shipeyes = this.add.sprite(596.7369853077065, 460.0290874240036, "stage-viking", "shipeyes0001");
        shipeyes.setOrigin(-0.9058447709398555, 7.15072718560009);

        // cloud
        const cloud = this.add.sprite(937, -2, "stage-viking", "cloud0001");

        // wood
        this.add.image(880, 486, "stage-viking", "wood");

        // brushtop
        this.add.image(888, 469, "stage-viking", "brushtop");

        // boxbottom
        const boxbottom = this.add.image(1169.4948519105278, 603.3121232208889, "stage-viking", "boxbottom");
        boxbottom.setOrigin(0.44806471796996106, 0.7775700787487883);

        // boxtop
        const boxtop = this.add.image(1188.2135807741804, 618.525699247298, "stage-viking", "boxtop");
        boxtop.setOrigin(0.49291487786977617, 0.7274851196357144);

        // paintbrushblue
        this.add.image(884, 529, "stage-viking", "paintbrushblue");

        // paintbucket
        const paintbucket = this.add.image(928.5020446629513, 517.5061339888541, "stage-viking", "paintbucket");
        paintbucket.setOrigin(0.5116754572779381, 0.5386188202270287);

        // wrench
        this.add.image(1226, 679, "stage-viking", "wrench");

        // hammer
        this.add.image(1235, 655, "stage-viking", "hammer");

        // wavesback
        const wavesback = this.add.sprite(437.3298673232022, 475.95840787842695, "stage-viking", "waves0001");
        wavesback.setOrigin(0.5059105214364543, 0.6715957836389995);

        // wavesfront
        const wavesfront = this.add.sprite(559.6701326767977, 519.9480098480337, "stage-viking", "waves0001");
        wavesfront.setOrigin(0.4940894785635454, 0.7144947295487498);

        // bush
        const bush = this.add.sprite(1120.273267923482, 471.3603924591073, "stage-viking", "play_bush0001");
        bush.setOrigin(0.47965125316031404, 0.7516983455247275);

        // play_rock
        this.add.image(889, 409, "stage-viking", "play_rock");

        // stage_overlay
        const stage_overlay = this.add.image(744.6680252576123, 451.70814128835923, "stage-viking", "stage_overlay");
        stage_overlay.setOrigin(0.4900366660807989, 0.8907526127704956);

        // right_wall
        const right_wall = this.add.image(1294.4410966383941, 515.0739483498901, "stage-viking", "right_wall");
        right_wall.setOrigin(0.44063447557567353, 0.654705668387584);

        // left_chairback
        const left_chairback = this.add.image(134.44664001464844, 232.03087204007755, "stage-viking", "left_chairback");
        left_chairback.setOrigin(0.48109911147772233, 0.5844094852933593);

        // left_belowdoor
        const left_belowdoor = this.add.image(225.69885015833435, 530.7888426552029, "stage-viking", "left_belowdoor");
        left_belowdoor.setOrigin(0.5738635850603218, 0.6730534428184811);

        // left_door
        const left_door = this.add.image(156.37661067271452, 631.9938689622311, "stage-viking", "left_door");
        left_door.setOrigin(0.7558562016004349, 0.7142637112299586);

        // left_abovedoor
        const left_abovedoor = this.add.image(166, 715.7441204158331, "stage-viking", "left_abovedoor");
        left_abovedoor.setOrigin(0.5, 1.2028600469329496);

        // chair1
        const chair1 = this.add.image(143.69540212806854, 850.9482702262616, "stage-viking", "chair1");
        chair1.setOrigin(0.5076417816271268, 0.7030820374005449);

        // chair2
        const chair2 = this.add.image(248.431031921028, 873.7298787385357, "stage-viking", "chair2");
        chair2.setOrigin(0.5923100170002478, 0.7339079885321429);

        // chair3
        const chair3 = this.add.image(357.3448255368224, 887.7298787385357, "stage-viking", "chair3");
        chair3.setOrigin(0.5689655003043173, 0.7427347050805256);

        // chair4
        const chair4 = this.add.image(467.9540212806853, 898.5114872508099, "stage-viking", "chair4");
        chair4.setOrigin(0.5620894757204046, 0.7741489158731718);

        // chair5
        const chair5 = this.add.image(566.725544937112, 911.2776226781828, "stage-viking", "chair5");
        chair5.setOrigin(0.4318054774787645, 0.7526694488286803);

        // chair6
        const chair6 = this.add.image(201.68444460800524, 750.85791015625, "stage-viking", "chair6");
        chair6.setOrigin(0.6187161346950792, 0.6845832307547323);

        // chair7
        const chair7 = this.add.image(291.4276922328151, 776.0721682719034, "stage-viking", "chair7");
        chair7.setOrigin(0.5624046829277973, 0.7218774087274932);

        // chair8
        const chair8 = this.add.image(393.98207843740346, 795.242190490837, "stage-viking", "chair8");
        chair8.setOrigin(0.5915787012605822, 0.7244647267670088);

        // chair9
        const chair9 = this.add.image(488, 818.520224106867, "stage-viking", "chair9");
        chair9.setOrigin(0.5, 0.7716211819701617);

        // chair10
        const chair10 = this.add.image(593.5289597375206, 833.308480392172, "stage-viking", "chair10");
        chair10.setOrigin(0.434838370062184, 0.7746355702846107);

        // chair11
        const chair11 = this.add.image(955.8808910052481, 909.6426730157445, "stage-viking", "chair11");
        chair11.setOrigin(0.5579477279797658, 0.7273333943821592);

        // chair12
        const chair12 = this.add.image(1064, 889.7320047618084, "stage-viking", "chair12");
        chair12.setOrigin(0.5, 0.6705000457866194);

        // chair13
        const chair13 = this.add.image(1173.044665873032, 879.7468933861524, "stage-viking", "chair13");
        chair13.setOrigin(0.4755757510167938, 0.6579895602467203);

        // chair14
        const chair14 = this.add.image(1281.07444312172, 863.7468933861524, "stage-viking", "chair14");
        chair14.setOrigin(0.4564110010771675, 0.6522444853286578);

        // chair15
        const chair15 = this.add.image(1384.1616363109374, 845.808181554687, "stage-viking", "chair15");
        chair15.setOrigin(0.5347432561641474, 0.639895411988381);

        // chair16
        const chair16 = this.add.image(935.7915592591843, 834.5086753966488, "stage-viking", "chair16");
        chair16.setOrigin(0.6060889173783406, 0.7851638192688487);

        // chair17
        const chair17 = this.add.image(1034.0297772486879, 821.5682298940246, "stage-viking", "chair17");
        chair17.setOrigin(0.48225024548367457, 0.7720783799430917);

        // chair18
        const chair18 = this.add.image(1141.014888624344, 802.5384526453366, "stage-viking", "chair18");
        chair18.setOrigin(0.49096228095728384, 0.7827634504197837);

        // chair19
        const chair19 = this.add.image(1241.9702227513121, 779.5980071427126, "stage-viking", "chair19");
        chair19.setOrigin(0.5191283762263312, 0.7353805941832975);

        // chair20
        const chair20 = this.add.image(1333, 750.7022275131204, "stage-viking", "chair20");
        chair20.setOrigin(0.5, 0.6743559956913312);

        // yellowpuffle
        const yellowpuffle = this.add.sprite(1317, 985.4541484077008, "stage-viking", "pufflenoshadow0001");
        yellowpuffle.setOrigin(0.5, 2.8103606139991957);

        // right_chairleft
        const right_chairleft = this.add.image(1373, 284, "stage-viking", "right_chairleft");

        // right_front
        const right_front = this.add.image(1371.999115262205, 619.2265013751921, "stage-viking", "right_front");
        right_front.setOrigin(0.37203372162182413, 2.690759905120663);

        // piano
        const piano = this.add.image(741.3252254307937, 662.0475495809944, "stage-viking", "piano");
        piano.setOrigin(0.4800283990804005, 0.7520806515360976);

        // standone
        const standone = this.add.image(457.9934254593498, 672.6908052119636, "stage-viking", "standone");
        standone.setOrigin(0.5575658742182653, 0.6843242277924759);

        // standtwo
        const standtwo = this.add.image(533, 673.312436587112, "stage-viking", "standtwo");
        standtwo.setOrigin(0.5, 0.636269452247737);

        // standthree
        const standthree = this.add.image(909.0049289835595, 687.0180729397182, "stage-viking", "standthree");
        standthree.setOrigin(0.5600985796711894, 0.6777108538664225);

        // standfour
        const standfour = this.add.image(1035.00164299452, 671.0262879123173, "stage-viking", "standfour");
        standfour.setOrigin(0.5196400587160764, 0.7671047985386223);

        // left_chair
        const left_chair = this.add.image(96.05715096981166, 320.98261013599745, "stage-viking", "left_chair");
        left_chair.setOrigin(0.5593038370139549, 0.6826084407075674);

        // left_armrest
        const left_armrest = this.add.image(71.02036215870497, 357.79400151835125, "stage-viking", "left_armrest");
        left_armrest.setOrigin(0.5495141432659502, 1.2997693665185137);

        // left_front
        const left_front = this.add.image(183.9093748336151, 624.2793554051505, "stage-viking", "left_front");
        left_front.setOrigin(0.8408027243299293, 2.730546105552366);

        // left_overlay
        const left_overlay = this.add.image(74.0615430693178, 872.6307415840931, "stage-viking", "left_overlay");
        left_overlay.setOrigin(0.2689168131609449, 0.9272858926458);

        // right_chairmid
        const right_chairmid = this.add.image(1420.9766219440949, 326.2448488935423, "stage-viking", "right_chairmid");
        right_chairmid.setOrigin(0.4829973225898296, 0.7284391981076064);

        // right_chair
        const right_chair = this.add.image(1444, 337, "stage-viking", "right_chair");

        // stage_right
        const stage_right = this.add.image(1394.9880787639731, 874.960910026348, "stage-viking", "stage_right");
        stage_right.setOrigin(0.5577825808298406, 0.9318248532770943);

        // switchbox
        const switchbox = new Switchbox(this, 757, 847);
        this.add.existing(switchbox);

        // costume
        const costume = this.add.sprite(1338.7592731932177, 621.1439988610233, "stage-viking", "costumes0001");
        costume.setOrigin(0.453962420073842, 0.6083010691452866);

        // paint
        this.add.image(321, 594, "stage-viking", "paint");

        // paintbrush
        const paintbrush = this.add.image(237.5613069024617, 555.6484999328202, "stage-viking", "paintbrush");
        paintbrush.setOrigin(0.5570164217097364, 0.5983122070175652);

        // costumebtn
        const costumebtn = this.add.image(1433.6445446534642, 1003.914518217781, "stage-viking", "costumebtn");
        costumebtn.setOrigin(0.5238205532906157, 1.5775175497198353);

        // scriptbtn
        const scriptbtn = this.add.image(1435.4668169801962, 993.4522106434715, "stage-viking", "scriptbtn");
        scriptbtn.setOrigin(0.5600749118702879, 2.1517673137045117);

        // lists
        const sort = [shippoleupright, ship, shipeyes, shippole, sails, paintbucket, bush, boxtop, boxbottom, wavesback, wavesfront, piano, standtwo, standone, standfour, stage_overlay, right_wall, costume, scriptbtn, costumebtn, chair20, chair19, chair18, chair17, chair16, chair15, chair14, chair13, chair12, chair11, chair10, chair9, chair8, chair7, chair6, chair5, chair4, chair3, chair2, chair1, right_front, right_chairmid, right_chair, stage_right, right_chairleft, right_chairback, left_abovedoor, left_door, left_belowdoor, left_front, left_chair, left_armrest, left_chairback, left_overlay, yellowpuffle, paintbrush, switchbox];

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
        costumeSimpleButton.hoverCallback = () => costume.play('costumeone');
        costumeSimpleButton.hoverOutCallback = () => costume.play('costumetwo');

        // costumebtn (components)
        const costumebtnButton = new Button(costumebtn);
        costumebtnButton.spriteName = "costumebtn";
        costumebtnButton.callback = () => {this.interface.loadWidget("VikingCatalog")};

        // scriptbtn (components)
        const scriptbtnButton = new Button(scriptbtn);
        scriptbtnButton.spriteName = "scriptbtn";
        scriptbtnButton.callback = () => this.interface.loadWidget('StageScript',true);

        this.sky = sky;
        this.snow = snow;
        this.fan = fan;
        this.sails = sails;
        this.shipeyes = shipeyes;
        this.cloud = cloud;
        this.wavesback = wavesback;
        this.wavesfront = wavesfront;
        this.bush = bush;
        this.yellowpuffle = yellowpuffle;
        this.costume = costume;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.cloudOn = false
        this.wavesOn = false
        this.saleOn = false
        this.skyLevel = 0
        this.bushOn = true
    }

    switchboxOne(){
        if (this.cloudOn == false){
            this.cloud.play('cloudone')
            this.cloudOn = true
            return
        }
        if (this.cloudOn == true){
            this.cloud.play('cloudtwo')
            this.cloudOn = false
            return
        }
    }
    switchboxTwo(){
        if (this.wavesOn == true){
            this.wavesfront.play('wavestwo')
            this.wavesback.play('wavestwo')
            this.wavesOn = false
            return
        }
        if (this.wavesOn == false){
            this.wavesfront.play('waves')
            this.wavesback.play('waves')
            this.wavesOn = true
            return
        }

    }
    switchboxThree(){
        this.snow.play('snow')
        this.soundManager.playSfx('snowfall');
    }
    switchboxFour(){
        if (this.saleOn == false){
            this.sails.play('sailsone')
            this.fan.play('fan')
            this.soundManager.playSfx('flag');
            this.saleOn = true
            return
        }
        if (this.saleOn == true){
            this.sails.play('sailstwo')
            this.fan.play('fanstop')
            this.saleOn = false
            return
        }

    }
    switchboxFive(){
        this.shipeyes.play('shipeyes')
    }
    switchboxSix(){
        this.soundManager.playSfx('skychange')
        if (this.skyLevel == 0){
            this.sky.play('skyone')
            this.skyLevel = 1
            return
        }
        if (this.skyLevel == 1){
            this.sky.play('skytwo')
            this.skyLevel = 2
            return
        }
        if (this.skyLevel == 2){
            this.sky.play('skythree')
            this.skyLevel = 0
            return
        }
    }
    switchboxSeven(){
        if (this.bushOn == false){
            this.bush.play('bushtwo')
            this.bushOn = true
            return
        }
        if (this.bushOn == true){
            this.bush.play('bushone')
            this.bushOn = false
            return
        }
    }
    switchboxEight(){
        this.yellowpuffle.play('yellowpuffle')
    }
    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
