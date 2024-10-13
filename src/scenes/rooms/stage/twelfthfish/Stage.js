import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'

import Switchbox from '../basic/Switchbox'

// You can write more code here

/* START OF COMPILED CODE */

export default class Stage extends RoomScene {

    constructor() {
        super("Stage");

        /** @type {Phaser.GameObjects.Image} */
        this.wave1;
        /** @type {Phaser.GameObjects.Image} */
        this.wave2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.moon;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.costume;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cloud2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cloud1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cloud3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sun;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Switchbox|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 845, 522),
            'costume': () => this.interface.loadWidget('TwelfthFishCatalog')
        }
        this.music = 31;
        this.physicsKey = 'stage-twelfthfish-physics'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("stage-basic-pack", "assets/media/rooms/stage/stage-basic/stage-basic-pack.json");
        this.load.pack("stage-twelfthfish-pack", "assets/media/rooms/stage/twelfthfish/stage-twelfthfish-pack.json");
    }

    /** @returns {void} */
    _create() {

        // twelfthfish_bg
        this.add.image(760, 500, "stage-twelfthfish", "twelfthfish-bg");

        // platform
        this.add.image(1115, 197, "stage-twelfthfish", "platform");

        // triangle_left
        this.add.image(83, 239, "stage-basic", "triangle_left");

        // triangle_right
        this.add.image(1433, 240, "stage-basic", "triangle_right");

        // right_chairback
        const right_chairback = this.add.image(1374, 252.76333672929593, "stage-basic", "right_chairback");
        right_chairback.setOrigin(0.5, 0.675338454901517);

        // prop2
        const prop2 = this.add.image(942, 280, "stage-twelfthfish", "prop2");
        prop2.setOrigin(0.5, 0.7593998124079133);

        // prop1
        const prop1 = this.add.image(1143.071044921875, 297.9502524899927, "stage-twelfthfish", "prop1");
        prop1.setOrigin(0.49637147021392103, 0.7690713644686183);

        // railing
        const railing = this.add.image(1109.6138916015625, 337.9197759990124, "stage-twelfthfish", "railing");
        railing.setOrigin(0.48493344122407656, 2.671534000433412);

        // bush1
        const bush1 = this.add.image(893, 341.5916064725187, "stage-twelfthfish", "bush1");
        bush1.setOrigin(0.5, 0.6486103393912657);

        // bush2
        const bush2 = this.add.image(1066, 339, "stage-twelfthfish", "bush2");

        // boat
        const boat = this.add.image(456, 309.8859938939876, "stage-twelfthfish", "boat");
        boat.setOrigin(0.5, 0.756328527814197);

        // bush3
        const bush3 = this.add.image(1051, 423.8134448946177, "stage-twelfthfish", "bush3");
        bush3.setOrigin(0.5, 0.7660175010062785);

        // bush4
        const bush4 = this.add.image(982.8584983857585, 511.778301236735, "stage-twelfthfish", "bush4");
        bush4.setOrigin(0.47275324036108507, 0.7015777969746232);

        // bush5
        const bush5 = this.add.image(1195, 475, "stage-twelfthfish", "bush5");
        bush5.setOrigin(0.5, 0.6404840184930549);

        // wave3
        const wave3 = this.add.image(364, 343, "stage-twelfthfish", "wave0001");
        wave3.setOrigin(0.5, 0.7869988341137276);

        // wave1
        const wave1 = this.add.image(498, 395, "stage-twelfthfish", "wave0001");
        wave1.setOrigin(0.5, 0.7869988341137276);

        // wave4
        const wave4 = this.add.image(304, 466, "stage-twelfthfish", "wave0001");
        wave4.setOrigin(0.5, 0.7869988341137276);

        // wave2
        const wave2 = this.add.image(522, 470.25589740200803, "stage-twelfthfish", "wave0001");
        wave2.setOrigin(0.5, 0.7869988341137276);

        // moon
        const moon = this.add.sprite(940, 43, "stage-twelfthfish", "moon0001");

        // stage_overlay
        const stage_overlay = this.add.image(744.6680297851562, 472.484999819863, "stage-basic", "stage_overlay");
        stage_overlay.setOrigin(0.4900366660807989, 0.9304031279175384);

        // right_wall
        const right_wall = this.add.image(1294.4410966383941, 515.0739483498901, "stage-basic", "right_wall");
        right_wall.setOrigin(0.44063447557567353, 0.654705668387584);

        // left_chairback
        const left_chairback = this.add.image(134.44664001464844, 232.03087204007755, "stage-basic", "left_chairback");
        left_chairback.setOrigin(0.48109911147772233, 0.5844094852933593);

        // left_belowdoor
        const left_belowdoor = this.add.image(225.69885015833435, 530.7888426552029, "stage-basic", "left_belowdoor");
        left_belowdoor.setOrigin(0.5738635850603218, 0.6730534428184811);

        // left_door
        const left_door = this.add.image(156.37661067271452, 631.9938689622311, "stage-basic", "left_door");
        left_door.setOrigin(0.7558562016004349, 0.7142637112299586);

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

        // piano
        const piano = this.add.image(741.3252254307937, 662.0475495809944, "stage-basic", "piano");
        piano.setOrigin(0.4800283990804005, 0.7520806515360976);

        // standone
        const standone = this.add.image(447, 655, "stage-basic", "standone");
        standone.setOrigin(0.5575658742182653, 0.6843242277924759);

        // standtwo
        const standtwo = this.add.image(533, 673.312436587112, "stage-basic", "standtwo");
        standtwo.setOrigin(0.5, 0.636269452247737);

        // standthree
        const standthree = this.add.image(909.0049289835595, 687.0180729397182, "stage-basic", "standthree");
        standthree.setOrigin(0.5600985796711894, 0.6777108538664225);

        // standfour
        const standfour = this.add.image(1035.00164299452, 671.0262879123173, "stage-basic", "standfour");
        standfour.setOrigin(0.5196400587160764, 0.7671047985386223);

        // left_chair
        const left_chair = this.add.image(96.05715096981166, 320.98261013599745, "stage-basic", "left_chair");
        left_chair.setOrigin(0.5593038370139549, 0.6826084407075674);

        // left_armrest
        const left_armrest = this.add.image(71.02036215870497, 357.79400151835125, "stage-basic", "left_armrest");
        left_armrest.setOrigin(0.5495141432659502, 1.2997693665185137);

        // container_1
        const container_1 = this.add.container(183.9093780517578, 624.2793579101562);

        // puffle
        const puffle = this.add.sprite(-55, -270, "stage-twelfthfish", "yellowpuff0001");
        container_1.add(puffle);

        // left_front
        const left_front = this.add.image(0, 0, "stage-basic", "left_front");
        left_front.setOrigin(0.8408027243299293, 2.730546105552366);
        container_1.add(left_front);

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

        // costumebtn
        const costumebtn = this.add.image(1403.6445446534642, 1003.914518217781, "stage-basic", "costumebtn");
        costumebtn.setOrigin(0.5238205532906157, 1.5775175497198353);

        // scriptbtn
        const scriptbtn = this.add.image(1417.4668169801962, 993.4522106434715, "stage-basic", "scriptbtn");
        scriptbtn.setOrigin(0.5600749118702879, 2.1517673137045117);

        // seastar
        const seastar = this.add.image(694, 402.6293853438579, "stage-twelfthfish", "seastar");
        seastar.setOrigin(0.5, 0.03226804071130443);

        // squid
        const squid = this.add.image(749, 479, "stage-twelfthfish", "squid");
        squid.setOrigin(0.4933146140204008, 0.22730662451634012);

        // cloud2
        const cloud2 = this.add.sprite(380, 50, "stage-twelfthfish", "cloud20001");

        // cloud1
        const cloud1 = this.add.sprite(226, 102, "stage-twelfthfish", "cloud10001");

        // cloud3
        const cloud3 = this.add.sprite(713, 91, "stage-twelfthfish", "cloud30001");

        // sun
        const sun = this.add.sprite(316, 44, "stage-twelfthfish", "sun0001");

        // lists
        const sort = [piano, standtwo, standone, standfour, stage_overlay, right_wall, costume, scriptbtn, costumebtn, chair20, chair19, chair18, chair17, chair16, chair15, chair14, chair13, chair12, chair11, chair10, chair9, chair8, chair7, chair6, chair5, chair4, chair3, chair2, chair1, right_front, right_chairmid, right_chair, stage_right, right_chairleft, right_chairback, left_abovedoor, left_door, left_belowdoor, left_chair, left_armrest, left_chairback, left_overlay, switchbox, standthree, bush1, bush2, bush3, bush4, bush5, seastar, squid, wave2, wave1, wave4, wave3, boat, prop1, prop2, railing, container_1];

        // moon (components)
        const moonAnimation = new Animation(moon);
        moonAnimation.key = "moon";
        moonAnimation.end = 70;
        moonAnimation.repeat = 0;
        moonAnimation.autoPlay = false;

        // left_door (components)
        const left_doorButton = new Button(left_door);
        left_doorButton.spriteName = "left_door";
        const left_doorMoveTo = new MoveTo(left_door);
        left_doorMoveTo.x = 157;
        left_doorMoveTo.y = 655;

        // puffle (components)
        const puffleAnimation = new Animation(puffle);
        puffleAnimation.key = "yellowpuff";
        puffleAnimation.end = 80;
        puffleAnimation.repeat = 0;
        puffleAnimation.autoPlay = false;

        // switchbox (prefab fields)
        switchbox.switch1Callback = () => this.switchboxOne();
        switchbox.switch2Callback = () => this.switchboxTwo();
        switchbox.switch3Callback = () => this.switchboxThree();
        switchbox.switch4Callback = () => this.switchboxFive();
        switchbox.switch5Callback = () => this.switchboxFour();
        switchbox.switch6Callback = () => this.switchboxSix();
        switchbox.switch7Callback = () => this.switchboxSeven();
        switchbox.switch8Callback = () => this.switchboxEight();

        // costume (components)
        const costumeMoveTo = new MoveTo(costume);
        costumeMoveTo.x = 1300;
        costumeMoveTo.y = 630;
        const costumeSimpleButton = new SimpleButton(costume);
        costumeSimpleButton.hoverCallback = () => costume.__Animation.play();
        costumeSimpleButton.hoverOutCallback = () => costume.__Animation.gotoAndPlay(18);
        const costumeAnimation = new Animation(costume);
        costumeAnimation.key = "costumes/costumes";
        costumeAnimation.end = 32;
        costumeAnimation.repeat = 0;
        costumeAnimation.autoPlay = false;
        costumeAnimation.stopOnOut = false;

        // costumebtn (components)
        const costumebtnButton = new Button(costumebtn);
        costumebtnButton.spriteName = "costumebtn";
        costumebtnButton.callback = () => {this.interface.loadWidget("TwelfthFishCatalog")};

        // scriptbtn (components)
        const scriptbtnButton = new Button(scriptbtn);
        scriptbtnButton.spriteName = "scriptbtn";
        scriptbtnButton.callback = () => this.interface.loadWidget('StageScript',true);

        // cloud2 (components)
        const cloud2Animation = new Animation(cloud2);
        cloud2Animation.key = "cloud2";
        cloud2Animation.end = 68;
        cloud2Animation.repeat = 0;
        cloud2Animation.autoPlay = false;

        // cloud1 (components)
        const cloud1Animation = new Animation(cloud1);
        cloud1Animation.key = "cloud1";
        cloud1Animation.end = 66;
        cloud1Animation.repeat = 0;
        cloud1Animation.autoPlay = false;

        // cloud3 (components)
        const cloud3Animation = new Animation(cloud3);
        cloud3Animation.key = "cloud3";
        cloud3Animation.end = 70;
        cloud3Animation.repeat = 0;
        cloud3Animation.autoPlay = false;

        // sun (components)
        const sunAnimation = new Animation(sun);
        sunAnimation.key = "sun";
        sunAnimation.end = 68;
        sunAnimation.repeat = 0;
        sunAnimation.autoPlay = false;

        this.wave1 = wave1;
        this.wave2 = wave2;
        this.moon = moon;
        this.puffle = puffle;
        this.costume = costume;
        this.cloud2 = cloud2;
        this.cloud1 = cloud1;
        this.cloud3 = cloud3;
        this.sun = sun;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.costume.on('animationupdate',() => {
            if(this.costume.anims.currentFrame.index == 17) this.costume.__Animation.stop()
        })

        this.cloud1.on('animationupdate',() => {
            if(this.cloud1.anims.currentFrame.index == 34) this.cloud1.anims.pause()
        })
        this.cloud2.on('animationupdate',() => {
            if(this.cloud2.anims.currentFrame.index == 36) this.cloud2.anims.pause()
        })
        this.cloud3.on('animationupdate',() => {
            if(this.cloud3.anims.currentFrame.index == 36) this.cloud3.anims.pause()
        })
        this.sun.on('animationupdate',() => {
            if(this.sun.anims.currentFrame.index == 35) this.sun.anims.pause()
        })
        this.moon.on('animationupdate',() => {
            if(this.moon.anims.currentFrame.index == 36) this.moon.anims.pause()
        })
    }


    // First slider
    switchboxOne() {
        if(this.cloud1.anims.isPlaying) return
        if(this.cloud1.anims.currentFrame?.index == 34) {
            this.cloud1.anims.resume()
        } else {
            this.cloud1.__Animation.play()
        }
    }

    // Second slider
    switchboxTwo() {
        if(this.sun.anims.isPlaying) return
        if(this.sun.anims.currentFrame?.index == 35) {
            this.sun.anims.resume()
        } else {
            this.sun.__Animation.play()
        }
    }

    // Cyan button
    switchboxThree() {
        this.wave1.setFrame(this.wave1.frame.name == 'wave0002' ? 'wave0001' : 'wave0002')
    }

    // Red button
    switchboxFour() {
        if(this.cloud2.anims.isPlaying) return
        if(this.cloud2.anims.currentFrame?.index == 36) {
            this.cloud2.anims.resume()
        } else {
            this.cloud2.__Animation.play()
        }
    }

    // Blue button
    switchboxFive() {
        this.wave2.setFrame(this.wave2.frame.name == 'wave0002' ? 'wave0001' : 'wave0002')
    }

    // Third slider
    switchboxSix() {
        if(this.cloud3.anims.isPlaying) return
        if(this.cloud3.anims.currentFrame?.index == 36) {
            this.cloud3.anims.resume()
        } else {
            this.cloud3.__Animation.play()
        }
    }

    // Fourth slider
    switchboxSeven() {
        if(this.moon.anims.isPlaying) return
        if(this.moon.anims.currentFrame?.index == 36) {
            this.moon.anims.resume()
        } else {
            this.moon.__Animation.play()
        }
    }

    // Yellow lever
    switchboxEight() {
        if(!this.puffle.anims.isPlaying) this.puffle.__Animation.play()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
