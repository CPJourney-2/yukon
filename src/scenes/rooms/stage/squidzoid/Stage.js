import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'

import Switchbox from '../basic/Switchbox';

/* START OF COMPILED CODE */

export default class Stage extends RoomScene {

    constructor() {
        super("Stage");

        /** @type {Phaser.GameObjects.Sprite} */
        this.skyline;
        /** @type {Phaser.GameObjects.Sprite} */
        this.spotlights;
        /** @type {Phaser.GameObjects.Sprite} */
        this.car;
        /** @type {Phaser.GameObjects.Sprite} */
        this.yellowpuffle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.costume;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plasmaGlow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.shadowBeam;
        /** @type {Phaser.GameObjects.Sprite} */
        this.monsterWings;
        /** @type {Phaser.GameObjects.Sprite} */
        this.monsterMouth;
        /** @type {Phaser.GameObjects.Sprite} */
        this.monsterArms;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container|Switchbox>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 845, 522),
            'costume': () => this.interface.loadWidget("SquidzoidCatalog")
        }
        this.physicsKey = 'stage-squidzoid-physics'
        this.music = 32;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("stage-basic-pack", "assets/media/rooms/stage/stage-basic/stage-basic-pack.json");
        this.load.pack("stage-squidzoid-pack", "assets/media/rooms/stage/stage-squidzoid/stage-squidzoid-pack.json");
    }

    /** @returns {void} */
    _create() {

        // skyline
        const skyline = this.add.sprite(758, 57, "stage-squidzoid", "skylne0001");

        // bg
        const bg = this.add.image(760, 965.5, "stage-squidzoid", "bg/floor");
        bg.setOrigin(0.5, 1);

        // bg_buildings_back
        this.add.image(757, 225, "stage-squidzoid", "bg/buildings_back");

        // spotlights
        const spotlights = this.add.sprite(746, 89, "stage-squidzoid", "spotlights0001");

        // bg_buildings_back1
        this.add.image(738, 265, "stage-squidzoid", "bg/buildings_back1");

        // bg_buildings_back2
        this.add.image(770, 360, "stage-squidzoid", "bg/buildings_back2");

        // car
        const car = this.add.sprite(773, -49, "stage-squidzoid", "car0001");

        // bg_buildings_back3
        this.add.image(718, 475, "stage-squidzoid", "bg/buildings_back3");

        // yellowpuffle
        const yellowpuffle = this.add.sprite(366, 97, "stage-squidzoid", "puffle0001");

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
        const switchbox = new Switchbox(this, 756.5859985351562, 847);
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

        // building_front_floor
        const building_front_floor = this.add.image(753, 532, "stage-squidzoid", "building-front-floor");
        building_front_floor.setOrigin(0.5, 0.12176086949899108);

        // building_front
        const building_front = this.add.image(753, 645.066962955381, "stage-squidzoid", "building-front");
        building_front.setOrigin(0.5, 0.3555579137378126);

        // fan0001
        const fan0001 = this.add.sprite(524.5007010676668, 553.4871470927748, "stage-squidzoid", "fan0001");
        fan0001.setOrigin(0.48000934756889063, 0.8479385707946172);

        // outhouse
        const outhouse = this.add.image(966, 422, "stage-squidzoid", "outhouse");
        outhouse.setOrigin(0.4458044419251875, 0.6858133419707858);

        // pole_thing
        const pole_thing = this.add.image(435, 581.1068469193016, "stage-squidzoid", "pole-thing");
        pole_thing.setOrigin(0.5, 0.8678538546589064);

        // satellite
        const satellite = this.add.image(1050, 579, "stage-squidzoid", "satellite");
        satellite.setOrigin(0.39589761821624897, 0.8205003883620053);

        // billboard
        const billboard = this.add.image(1146.810791015625, 427.21752403178783, "stage-squidzoid", "billboard");
        billboard.setOrigin(0.4906360171703222, 0.9307909855877436);

        // smal_exhaust
        const smal_exhaust = this.add.image(923, 439, "stage-squidzoid", "smal-exhaust");
        smal_exhaust.setOrigin(0.5, 0.7844595832971273);

        // pole_thing_back
        const pole_thing_back = this.add.image(536, 337, "stage-squidzoid", "pole-thing-back");
        pole_thing_back.setOrigin(0.4771505270454877, 0.8431106342040307);

        // exhaust_idk
        const exhaust_idk = this.add.image(434, 337.7433981317121, "stage-squidzoid", "exhaust-idk");
        exhaust_idk.setOrigin(0.5, 0.7498113751917751);

        // water_tower_or_something
        const water_tower_or_something = this.add.image(352, 415, "stage-squidzoid", "water-tower-or-something");
        water_tower_or_something.setOrigin(0.4944872983371337, 0.8161283826305521);

        // exhaust_right
        const exhaust_right = this.add.image(1066, 337, "stage-squidzoid", "exhaust-right");
        exhaust_right.setOrigin(0.5, 0.8146646025736444);

        // top_thing_right
        const top_thing_right = this.add.image(995, 343.4667676772255, "stage-squidzoid", "top-thing-right");
        top_thing_right.setOrigin(0.5, 0.702086489913297);

        // top_thing
        const top_thing = this.add.image(766, 440, "stage-squidzoid", "top-thing");
        top_thing.setOrigin(0.5, 0.7490036625226125);

        // plasmaGlow
        const plasmaGlow = this.add.sprite(601.1180314681675, 634.1149650932074, "stage-squidzoid", "plasmaglow0001");
        plasmaGlow.setOrigin(0.4904570578416142, 1.4006151661976707);

        // shadowBeam
        const shadowBeam = this.add.sprite(684, 656.7280642140009, "stage-squidzoid", "shadowbeam0001");
        shadowBeam.setOrigin(0.4904570578416142, 1.4313340416156413);

        // monsterContain
        const monsterContain = this.add.container(758, 341.1291773170358);

        // monsterWings
        const monsterWings = this.add.sprite(0, -143, "stage-squidzoid", "monster/wings0001");
        monsterContain.add(monsterWings);

        // monster_body
        const monster_body = this.add.image(0, -104.12917731703578, "stage-squidzoid", "monster/body");
        monsterContain.add(monster_body);

        // monsterMouth
        const monsterMouth = this.add.sprite(6, -164, "stage-squidzoid", "monster/mouth0001");
        monsterContain.add(monsterMouth);

        // monsterArms
        const monsterArms = this.add.sprite(-2, -57, "stage-squidzoid", "monster/arms0001");
        monsterContain.add(monsterArms);

        // lists
        const sort = [stage_overlay, right_wall, costume, scriptbtn, costumebtn, chair20, chair19, chair18, chair17, chair16, chair15, chair14, chair13, chair12, chair11, chair10, chair9, chair8, chair7, chair6, chair5, chair4, chair3, chair2, chair1, right_front, right_chairmid, right_chair, stage_right, right_chairleft, right_chairback, left_abovedoor, left_door, left_belowdoor, left_front, left_chair, left_armrest, left_chairback, left_overlay, building_front, building_front_floor, fan0001, outhouse, pole_thing, satellite, billboard, smal_exhaust, pole_thing_back, exhaust_idk, water_tower_or_something, exhaust_right, top_thing_right, top_thing, plasmaGlow, monsterContain, shadowBeam, switchbox];

        // spotlights (components)
        const spotlightsAnimation = new Animation(spotlights);
        spotlightsAnimation.key = "spotlights";
        spotlightsAnimation.end = 95;
        spotlightsAnimation.repeat = 0;
        spotlightsAnimation.autoPlay = false;

        // car (components)
        const carAnimation = new Animation(car);
        carAnimation.key = "car";
        carAnimation.end = 117;
        carAnimation.repeat = 0;
        carAnimation.autoPlay = false;

        // yellowpuffle (components)
        const yellowpuffleAnimation = new Animation(yellowpuffle);
        yellowpuffleAnimation.key = "puffle";
        yellowpuffleAnimation.end = 97;
        yellowpuffleAnimation.repeat = 0;
        yellowpuffleAnimation.autoPlay = false;

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
        costumebtnButton.callback = () => {this.interface.loadWidget("SquidzoidCatalog")};

        // scriptbtn (components)
        const scriptbtnButton = new Button(scriptbtn);
        scriptbtnButton.spriteName = "scriptbtn";
        scriptbtnButton.callback = () => this.interface.loadWidget('StageScript',true);

        // fan0001 (components)
        const fan0001Animation = new Animation(fan0001);
        fan0001Animation.key = "fan";
        fan0001Animation.end = 8;

        // plasmaGlow (components)
        const plasmaGlowAnimation = new Animation(plasmaGlow);
        plasmaGlowAnimation.key = "plasmaglow";
        plasmaGlowAnimation.end = 26;
        plasmaGlowAnimation.repeat = 0;
        plasmaGlowAnimation.autoPlay = false;

        // shadowBeam (components)
        const shadowBeamAnimation = new Animation(shadowBeam);
        shadowBeamAnimation.key = "shadowbeam";
        shadowBeamAnimation.end = 26;
        shadowBeamAnimation.repeat = 0;
        shadowBeamAnimation.autoPlay = false;

        // monsterWings (components)
        const monsterWingsAnimation = new Animation(monsterWings);
        monsterWingsAnimation.key = "monster/wings";
        monsterWingsAnimation.end = 99;
        monsterWingsAnimation.repeat = 0;
        monsterWingsAnimation.autoPlay = false;

        // monsterMouth (components)
        const monsterMouthAnimation = new Animation(monsterMouth);
        monsterMouthAnimation.key = "monster/mouth";
        monsterMouthAnimation.end = 68;
        monsterMouthAnimation.autoPlay = false;

        this.skyline = skyline;
        this.spotlights = spotlights;
        this.car = car;
        this.yellowpuffle = yellowpuffle;
        this.costume = costume;
        this.plasmaGlow = plasmaGlow;
        this.shadowBeam = shadowBeam;
        this.monsterWings = monsterWings;
        this.monsterMouth = monsterMouth;
        this.monsterArms = monsterArms;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.spotlights.on('animationcomplete',() => this.spotlights.setFrame('spotlights0001'))
        this.plasmaGlow.on('animationcomplete',() => this.plasmaGlow.setFrame('plasmaglow0001'))
        this.shadowBeam.on('animationcomplete',() => this.shadowBeam.setFrame('shadowbeam0001'))
        this.car.on('animationcomplete',() => {this.carPlaying = false})
        this.monsterWings.on('animationcomplete',() => {this.monsterFullPlaying = false})

        //Know when to play the sfx
        this.car.on('animationupdate',() => {
            switch(this.car.anims?.currentFrame?.index) {
                case 7:
                    this.soundManager.play('squidzoid-beepbeep')
                    break
                case 91:
                    this.soundManager.play('squidzoid-beepbeep')
                    break
                case 113:
                    this.soundManager.play('squidzoid-thud')
                    break
                default: break
            }
        })
    }

    switchboxOne(){
        if(this.skyline.anims?.currentFrame?.index == 19) {
            this.skyline.playReverse('skyline')
        } else if(this.skyline.anims?.currentFrame?.index == 1) {
            this.skyline.play('skyline')
        } else if(!this.skyline.anims?.currentFrame?.index) {
            this.skyline.play('skyline')
        }
    }
    switchboxTwo(){
        if(this.carPlaying) return
        this.car.__Animation.play()
        this.monsterArms.play('monsterarms-smack')
        this.carPlaying = true
    }
    switchboxThree(){
        if(this.monsterMouthPlaying) {
            this.monsterMouth.__Animation.stop()
            this.monsterMouth.setFrame('monster/mouth0001')
            this.monsterMouthPlaying = false
            return
        }
        this.monsterMouth.__Animation.play()
        this.monsterMouthPlaying = true
    }
    switchboxFour(){
        if(this.monsterFullPlaying) return
        this.monsterWings.__Animation.play()
        this.monsterFullPlaying = true
        if(!this.carPlaying) this.monsterArms.play('monsterarms-full')
    }
    switchboxFive(){
        this.monsterArms.play('monsterarms-once')
    }
    switchboxSix(){
        this.soundManager.play('squidzoid-beam')
        this.shadowBeam.__Animation.play()
    }
    switchboxSeven(){
        this.soundManager.play('squidzoid-beam')
        this.plasmaGlow.__Animation.play()
    }
    switchboxEight(){
        this.yellowpuffle.__Animation.play()
        this.spotlights.__Animation.play()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
