import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'

import Switchbox from '../basic/Switchbox';

/* START OF COMPILED CODE */

export default class Stage extends RoomScene {

    constructor() {
        super("Stage");

        /** @type {Phaser.GameObjects.Sprite} */
        this.dinomunch;
        /** @type {Phaser.GameObjects.Image} */
        this.yellowpuff;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bigleaf2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bigleaf1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.costume;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dinorun;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lavaglow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.club;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dinotail;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dinohead;
        /** @type {Phaser.GameObjects.Sprite} */
        this.ptero;
        /** @type {Phaser.GameObjects.Sprite} */
        this.boxBack;
        /** @type {Phaser.GameObjects.Sprite} */
        this.boxDoorL;
        /** @type {Phaser.GameObjects.Sprite} */
        this.boxDoorR;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container|Switchbox>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 845, 522),
            'costume': () => this.interface.loadWidget("TimeForgotCatalog")
        }
        this.music = 35;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("stage-pack", "assets/media/rooms/stage/stage-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(760, 508, "stage-timeforgot", "timeforgot-bg");

        // bush_5
        const bush_5 = this.add.image(469, 339, "stage-timeforgot", "bush");
        bush_5.scaleX = 0.9;
        bush_5.scaleY = 0.9;
        bush_5.setOrigin(0.4787762254360796, 0.6560869575530486);

        // stuff
        const stuff = this.add.image(908, 294.99469590829, "stage-timeforgot", "stuff");
        stuff.setOrigin(0.5, 0.8725143523417647);

        // clubclub
        const clubclub = this.add.image(671, 290.928212968368, "stage-timeforgot", "clubclub");
        clubclub.setOrigin(0.5, 0.8983822200498094);

        // grub
        const grub = this.add.image(433, 276, "stage-timeforgot", "grub");
        grub.setOrigin(0.540089596393253, 0.8375586439165229);

        // dinofoot
        const dinofoot = this.add.image(324, 311, "stage-timeforgot", "dinofoot");
        dinofoot.setOrigin(0.5, 0.8056527342650407);

        // triangle_left
        this.add.image(83, 239, "stage-basic", "triangle_left");

        // triangle_right
        this.add.image(1433, 240, "stage-basic", "triangle_right");

        // right_chairback
        const right_chairback = this.add.image(1374, 252.76333672929593, "stage-basic", "right_chairback");
        right_chairback.setOrigin(0.5, 0.675338454901517);

        // tree
        const tree = this.add.image(543.5441284179688, 365.8643660206705, "stage-timeforgot", "tree");
        tree.setOrigin(0.6015501127136449, 0.9191305144171947);

        // dinomunch
        const dinomunch = this.add.sprite(475, 387.607549292371, "stage-timeforgot", "dinomunch0001");
        dinomunch.setOrigin(0.6549690670041535, 1.8354552557292305);

        // container_1
        const container_1 = this.add.container(744.6680297851562, 472.4849853515625);

        // leafperch
        const leafperch = this.add.image(405, -287, "stage-timeforgot", "leafperch");
        container_1.add(leafperch);

        // yellowpuff
        const yellowpuff = this.add.image(424, -285, "stage-timeforgot", "yellowpuff2");
        container_1.add(yellowpuff);

        // bigleaf2
        const bigleaf2 = this.add.sprite(379, -369, "stage-timeforgot", "bigleaf20001");
        container_1.add(bigleaf2);

        // bigleaf1
        const bigleaf1 = this.add.sprite(452, -275, "stage-timeforgot", "bigleaf10001");
        container_1.add(bigleaf1);

        // stage_overlay
        const stage_overlay = this.add.image(0, 0, "stage-basic", "stage_overlay");
        stage_overlay.setOrigin(0.4900366660807989, 0.9304031279175384);
        container_1.add(stage_overlay);

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
        const switchbox = new Switchbox(this, 756, 847);
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

        // grass6
        const grass6 = this.add.image(759, 599.9238855182216, "stage-timeforgot", "grass6");
        grass6.setOrigin(0.5, 0.6596592973417131);

        // grass5
        const grass5 = this.add.image(758, 615.1841222056772, "stage-timeforgot", "grass5");
        grass5.setOrigin(0.5, 0.635086855025913);

        // grass4
        const grass4 = this.add.image(742, 631.872266552296, "stage-timeforgot", "grass4");
        grass4.setOrigin(0.5, 0.5881452370740712);

        // dinorun
        const dinorun = this.add.sprite(728, 675, "stage-timeforgot", "dinorun0001");
        dinorun.setOrigin(0.5, 0.8640333610152333);

        // grass3
        const grass3 = this.add.image(739, 654.3980760352588, "stage-timeforgot", "grass3");
        grass3.setOrigin(0.5, 0.6125888742458722);

        // lavaglow
        const lavaglow = this.add.sprite(1105, 450, "stage-timeforgot", "lavaglow0001");

        // grass2
        const grass2 = this.add.image(802, 685.1032475339605, "stage-timeforgot", "grass2");
        grass2.setOrigin(0.5, 0.669918529299414);

        // grass1
        const grass1 = this.add.image(694.1251220703125, 695.7178909621845, "stage-timeforgot", "grass1");
        grass1.setOrigin(0.41787988039681484, 0.8160444278340685);

        // rock1
        const rock1 = this.add.image(1033, 381, "stage-timeforgot", "rock1");
        rock1.setOrigin(0.5, 0.557897718844416);

        // rock2
        const rock2 = this.add.image(1188, 416.91194044470694, "stage-timeforgot", "rock2");
        rock2.setOrigin(0.5, 0.631376454326821);

        // rock3
        const rock3 = this.add.image(1084, 333, "stage-timeforgot", "rock3");
        rock3.setOrigin(0.5, 0.5677569069094648);

        // rock4
        const rock4 = this.add.image(1146, 296, "stage-timeforgot", "rock4");

        // spikyplant
        const spikyplant = this.add.image(630, 503.0557832552263, "stage-timeforgot", "spikyplant");
        spikyplant.setOrigin(0.5, 0.7071280788611553);

        // bush
        const bush = this.add.image(734, 519.8111566510453, "stage-timeforgot", "bush");
        bush.setOrigin(0.5, 0.5886315500243089);
        bush.flipX = true;

        // bush_1
        const bush_1 = this.add.image(600, 530.7167349765679, "stage-timeforgot", "bush");
        bush_1.setOrigin(0.5, 0.6329473250364619);

        // bush_2
        const bush_2 = this.add.image(976.9999999999999, 531.8375193856407, "stage-timeforgot", "bush");
        bush_2.angle = -1;
        bush_2.setOrigin(0.4996980394011932, 0.6989260965548705);

        // bush_3
        const bush_3 = this.add.image(989, 420, "stage-timeforgot", "bush");
        bush_3.scaleX = 0.7;
        bush_3.scaleY = 0.7;
        bush_3.angle = -1;
        bush_3.setOrigin(0.4996980394011932, 0.6989260965548705);

        // eggbox
        const eggbox = this.add.image(799, 321, "stage-timeforgot", "eggbox");
        eggbox.setOrigin(0.5, 0.6101549681509718);

        // club
        const club = this.add.sprite(670.7984008789062, 295.6270092159528, "stage-timeforgot", "club0001");
        club.setOrigin(0.3499903941442663, 1.3120519996990394);

        // spikyplant_1
        const spikyplant_1 = this.add.image(1005, 449, "stage-timeforgot", "spikyplant");
        spikyplant_1.scaleX = 0.7;
        spikyplant_1.scaleY = 0.7;
        spikyplant_1.setOrigin(0.5, 0.7071280788611553);

        // spikyplant_2
        const spikyplant_2 = this.add.image(1032, 461, "stage-timeforgot", "spikyplant");
        spikyplant_2.scaleX = 0.7;
        spikyplant_2.scaleY = 0.7;
        spikyplant_2.setOrigin(0.5, 0.7071280788611553);

        // dinothing
        const dinothing = this.add.container(835, 459);

        // dinotail
        const dinotail = this.add.sprite(109, -56, "stage-timeforgot", "dinotail0001");
        dinothing.add(dinotail);

        // dinobody
        const dinobody = this.add.image(12.99550939754306, -49.81611935724834, "stage-timeforgot", "dinobody");
        dinothing.add(dinobody);

        // dinohead
        const dinohead = this.add.sprite(-57, -9, "stage-timeforgot", "dinohead0001");
        dinothing.add(dinohead);

        // bush_4
        const bush_4 = this.add.image(671, 353, "stage-timeforgot", "bush");
        bush_4.scaleX = 0.9;
        bush_4.scaleY = 0.9;
        bush_4.setOrigin(0.4787762254360796, 0.6560869575530486);
        bush_4.flipX = true;

        // spikyplant_3
        const spikyplant_3 = this.add.image(536, 382, "stage-timeforgot", "spikyplant");
        spikyplant_3.scaleX = 0.7;
        spikyplant_3.scaleY = 0.7;
        spikyplant_3.setOrigin(0.5, 0.7071280788611553);

        // ptero
        const ptero = this.add.sprite(794, 417, "stage-timeforgot", "ptera0001");
        ptero.setOrigin(0.494975547698679, 1.217189601998589);

        // boxBack
        const boxBack = this.add.sprite(427, 453, "stage-timeforgot", "box0001");
        boxBack.setOrigin(0.35494755970611624, 0.6371846405190146);

        // boxtop
        const boxtop = this.add.image(442, 494, "stage-timeforgot", "boxtop");
        boxtop.setOrigin(0.5, 0.7809969902787338);

        // boxDoorL
        const boxDoorL = this.add.sprite(350, 494, "stage-timeforgot", "doorleft0001");
        boxDoorL.setOrigin(0.47486126521600197, 0.6931390599258389);

        // boxDoorR
        const boxDoorR = this.add.sprite(434, 510.642251210581, "stage-timeforgot", "doorright0001");
        boxDoorR.setOrigin(0.5, 0.6217276870799548);

        // lists
        const sort = [right_wall, costume, scriptbtn, costumebtn, chair20, chair19, chair18, chair17, chair16, chair15, chair14, chair13, chair12, chair11, chair10, chair9, chair8, chair7, chair6, chair5, chair4, chair3, chair2, chair1, right_front, right_chairmid, right_chair, stage_right, right_chairleft, right_chairback, left_abovedoor, left_door, left_belowdoor, left_front, left_chair, left_armrest, left_chairback, left_overlay, stuff, clubclub, grub, grass1, grass2, grass3, grass4, grass5, grass6, rock1, rock2, rock3, rock4, spikyplant, bush, bush_1, bush_2, eggbox, dinorun, club, bush_3, spikyplant_2, spikyplant_1, dinothing, dinofoot, tree, dinomunch, bush_4, spikyplant_3, bush_5, ptero, container_1, boxDoorR, boxDoorL, boxtop, boxBack, switchbox];

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
        costumebtnButton.callback = () => {this.interface.loadWidget("TimeForgotCatalog")};

        // scriptbtn (components)
        const scriptbtnButton = new Button(scriptbtn);
        scriptbtnButton.spriteName = "scriptbtn";
        scriptbtnButton.callback = () => this.interface.loadWidget('StageScript',true);

        this.dinomunch = dinomunch;
        this.yellowpuff = yellowpuff;
        this.bigleaf2 = bigleaf2;
        this.bigleaf1 = bigleaf1;
        this.costume = costume;
        this.dinorun = dinorun;
        this.lavaglow = lavaglow;
        this.club = club;
        this.dinotail = dinotail;
        this.dinohead = dinohead;
        this.ptero = ptero;
        this.boxBack = boxBack;
        this.boxDoorL = boxDoorL;
        this.boxDoorR = boxDoorR;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.dinorunOn = false
        this.dinomunchOn = false
        this.lavaPlaying = false
        this.dinoBoingPlaying = false
        this.pteroPlaying = false
        this.pifflePlaying = false
        this.yellowPuffFrame = 2
        this.boxState = 1
        this.boxPlaying = false
        this.dinorun.on('animationcomplete',() => {
            this.dinorunOn = false
        })
        this.dinomunch.on('animationcomplete',() => {
            this.dinomunchOn = false
        })
        this.dinohead.on('animationcomplete',() => {
            this.dinoBoingPlaying = false
        })
        this.ptero.on('animationcomplete',() => {
            this.pteroPlaying = false
        })
        this.bigleaf1.on('animationcomplete',() => {
            this.pifflePlaying = false
            if(this.yellowPuffFrame < 3) {
                this.yellowPuffFrame++
            } else {
                this.yellowPuffFrame = 1
            }
            this.yellowpuff.setFrame(`yellowpuff${this.yellowPuffFrame}`)
        })
        this.boxBack.on('animationcomplete',() => {
            this.boxPlaying = false
            if(this.boxState < 3) {
                this.boxState++
            } else {
                this.boxState = 1
            }
        })
    }

    switchboxOne(){
        if(!this.boxPlaying) {
            this.boxBack.play(`boxBack${this.boxState}`)
            this.boxDoorL.play(`doorLeft${this.boxState}`)
            this.boxDoorR.play(`doorRight${this.boxState}`)
            this.boxPlaying = true
        }
    }
    switchboxTwo(){
        if (!this.dinorunOn){
            this.dinorunOn = true
            this.dinorun.play('dinorun')
            this.soundManager.playSfx('timeforgot-grass')
        }

    }
    switchboxThree(){
        if (!this.dinomunchOn){
            this.dinomunch.play('dinomunch')
            this.dinomunchOn = true
            setTimeout(() => {
                this.soundManager.playSfx('timeforgot-munch')
            },300)
        }
    }
    switchboxFour(){
        if (!this.dinoBoingPlaying){
            setTimeout(() => {
                this.soundManager.playSfx('timeforgot-boing')
            },200)
            this.dinohead.play('dinoheadboing')
            this.dinotail.play('dinotailboing')
            this.dinoBoingPlaying = true
            return
        }

    }
    switchboxFive(){
        if (!this.pteroPlaying){
            setTimeout(() => {
                this.soundManager.playSfx('timeforgot-thud')
            },850)
            setTimeout(() => {
                this.soundManager.playSfx('timeforgot-wheel')
            },2150)
            this.ptero.play('pterofly')
            this.pteroPlaying = true
            return
        }
    }
    switchboxSix(){
        this.club.play('clubswing')
        setTimeout(() => {
            this.soundManager.playSfx('timeforgot-thud')
        },600)
    }
    switchboxSeven(){
        if (!this.lavaPlaying){
            this.lavaglow.play('lavaglow')
            this.lavaPlaying = true
        } else {
            this.lavaglow.anims.stop()
            this.lavaglow.setFrame('lavaglow0001')
            this.lavaPlaying = false
        }
    }
    switchboxEight(){
        if(!this.pifflePlaying) {
            setTimeout(() => {
                this.soundManager.playSfx('timeforgot-bigrustle')
            },100)
            this.bigleaf1.play('bigleaf1')
            this.bigleaf2.play('bigleaf2')
            this.pifflePlaying = true
        }
        //this.yellowpuffle.play('yellowpuffle')
    }
    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
