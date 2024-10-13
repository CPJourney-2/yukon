import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, GlobalTrigger, MoveTo, SimpleButton } from '@components/components'

import Switchbox from '../basic/Switchbox';
// You can write more code here

/* START OF COMPILED CODE */

export default class Stage extends RoomScene {

    constructor() {
        super("Stage");

        /** @type {Phaser.GameObjects.Sprite} */
        this.pond;
        /** @type {Phaser.GameObjects.Sprite} */
        this.hoseGlow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.hose;
        /** @type {Phaser.GameObjects.Sprite} */
        this.hoseWater;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.jug;
        /** @type {Phaser.GameObjects.Sprite} */
        this.appleGlow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.apple;
        /** @type {Phaser.GameObjects.Sprite} */
        this.boulderGlow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.boulder;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flowerGlow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flowers;
        /** @type {Phaser.GameObjects.Sprite} */
        this.honeyGlow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.honey;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leg2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.eye2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.arm2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.arm1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.eye1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leg1;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container|Phaser.GameObjects.Sprite|Switchbox>} */
        this.sort;
        /** @type {Phaser.GameObjects.Rectangle[]} */
        this.globalTriggers;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 845, 522),
            'underground': () => this.onUnderground()
        }
        this.music = 42;
        this.physicsKey = 'stage-normanswarm-physics'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("stage-basic-pack", "assets/media/rooms/stage/stage-basic/stage-basic-pack.json");
        this.load.pack("stage-normanswarm-pack", "assets/media/rooms/stage/normanswarm/stage-normanswarm-pack.json");
    }

    /** @returns {void} */
    _create() {

        // background
        this.add.image(661, 416, "stage-normanswarm", "background");

        // previeeieieieiei
        const previeeieieieiei = this.add.image(760, 480, "previeeieieieiei");
        previeeieieieiei.visible = false;
        previeeieieieiei.alpha = 0.5;
        previeeieieieiei.alphaTopLeft = 0.5;
        previeeieieieiei.alphaTopRight = 0.5;
        previeeieieieiei.alphaBottomLeft = 0.5;
        previeeieieieiei.alphaBottomRight = 0.5;

        // pond
        const pond = this.add.sprite(749, 668, "stage-normanswarm", "pond0001");

        // tree2
        const tree2 = this.add.image(1391, 474.14741853579494, "stage-normanswarm", "tree2");
        tree2.setOrigin(0.5, 0.8946257368587939);

        // hoseContain
        const hoseContain = this.add.container(1316, 523.8566284179688);

        // hoseGlow
        const hoseGlow = this.add.sprite(-235, 37, "stage-normanswarm", "shine0031");
        hoseGlow.scaleX = 1.080913279151555;
        hoseGlow.scaleY = 0.7727547082478015;
        hoseGlow.visible = false;
        hoseContain.add(hoseGlow);

        // hose
        const hose = this.add.sprite(0, 0, "stage-normanswarm", "hose/hose0001");
        hose.setOrigin(0.5, 0.3513747970076247);
        hoseContain.add(hose);

        // hoseWater
        const hoseWater = this.add.sprite(-292, 105, "stage-normanswarm", "hose/waterloop0001");
        hoseWater.angle = -6.000000000000001;
        hoseWater.visible = false;
        hoseContain.add(hoseWater);

        // switchboxrock
        const switchboxrock = this.add.image(751, 853.2762879169409, "stage-normanswarm", "switchboxrock");
        switchboxrock.setOrigin(0.5, 0.15187545542319017);

        // switchbox_1
        const switchbox_1 = new Switchbox(this, 748, 864);
        this.add.existing(switchbox_1);

        // hivecontain
        const hivecontain = this.add.container(1401, 569.2909641113239);

        // puffle
        const puffle = this.add.sprite(170, -40.29098478991261, "stage-normanswarm", "yellowpuff0048");
        puffle.visible = false;
        hivecontain.add(puffle);

        // hive
        const hive = this.add.image(0, -63.29098478991261, "stage-normanswarm", "hive");
        hive.setOrigin(0.5, 0.8289834910016561);
        hivecontain.add(hive);

        // pottedplant
        const pottedplant = this.add.image(1224, 897.2103816397358, "stage-normanswarm", "pottedplant");
        pottedplant.setOrigin(0.5, 0.9224207676533158);

        // treecontain
        const treecontain = this.add.container(160, 406.56170654296875);

        // tree
        const tree = this.add.image(0, 0, "stage-normanswarm", "tree");
        tree.setOrigin(0.5, 0.6425596635733375);
        treecontain.add(tree);

        // door_btn0001
        const door_btn0001 = this.add.image(64.22616905113273, 83.99571513969175, "stage-normanswarm", "door-btn0001");
        door_btn0001.setOrigin(0.6575356218556576, 0.8705630302334809);
        treecontain.add(door_btn0001);

        // costumebtn
        const costumebtn = this.add.image(1430, 1005, "stage-basic", "costumebtn");
        costumebtn.setOrigin(0.5238205532906157, 1.5775175497198353);

        // scriptbtn
        const scriptbtn = this.add.image(1437, 994, "stage-basic", "scriptbtn");
        scriptbtn.setOrigin(0.5600749118702879, 2.1517673137045117);

        // rock3
        const rock3 = this.add.image(557, 538.1671971944714, "stage-normanswarm", "rock3");
        rock3.setOrigin(0.5, 0.494176204157143);

        // jug
        const jug = this.add.sprite(533, 566.4158721774608, "stage-normanswarm", "jug0001");
        jug.setOrigin(0.5, 0.6330867564949715);

        // rock2
        const rock2 = this.add.image(440, 581.7848959067067, "stage-normanswarm", "rock2");
        rock2.setOrigin(0.5, 0.6103838874594871);

        // appleContain
        const appleContain = this.add.container(162, 839.202880859375);

        // appleGlow
        const appleGlow = this.add.sprite(3, -202, "stage-normanswarm", "shine0031");
        appleGlow.scaleX = 1.4527929702534326;
        appleGlow.scaleY = 1.0667961757717577;
        appleGlow.visible = false;
        appleContain.add(appleGlow);

        // apple
        const apple = this.add.sprite(0, 0, "stage-normanswarm", "apple0001");
        apple.setOrigin(0.5, 0.9059255591455426);
        appleContain.add(apple);

        // rock1
        const rock1 = this.add.image(392, 643, "stage-normanswarm", "rock1");
        rock1.setOrigin(0.507466350048873, 0.7231289995374747);

        // rocks
        const rocks = this.add.image(397, 664, "stage-normanswarm", "rocks");

        // boulderGlow
        const boulderGlow = this.add.sprite(685, 110, "stage-normanswarm", "shine0031");
        boulderGlow.scaleX = 1.5944991335939651;
        boulderGlow.scaleY = 1.3471434801936877;
        boulderGlow.visible = false;

        // boulder
        const boulder = this.add.sprite(697.7079467773438, 319.80303955078125, "stage-normanswarm", "boulder0001");
        boulder.setOrigin(0.350507240323072, 0.8120110621764921);

        // rock4
        const rock4 = this.add.image(530, 343.12161203761855, "stage-normanswarm", "rock4");
        rock4.setOrigin(0.5, 0.6652165208056064);

        // shovel
        const shovel = this.add.image(1119, 349, "stage-normanswarm", "shovel");
        shovel.setOrigin(0.5, 0.8409801401596345);

        // flowerContain
        const flowerContain = this.add.container(557, 369.62139892578125);

        // flowerGlow
        const flowerGlow = this.add.sprite(-35, -57, "stage-normanswarm", "shine0031");
        flowerGlow.scaleX = 1.080913279151555;
        flowerGlow.scaleY = 0.6170755701685378;
        flowerGlow.visible = false;
        flowerContain.add(flowerGlow);

        // flowers
        const flowers = this.add.sprite(0, 0, "stage-normanswarm", "flowers0001");
        flowers.setOrigin(0.5, 0.8647757993651115);
        flowerContain.add(flowers);

        // wateringcan
        const wateringcan = this.add.image(866, 402.180552701682, "stage-normanswarm", "wateringcan");
        wateringcan.setOrigin(0.5, 0.8957043725087783);

        // honeyContain
        const honeyContain = this.add.container(1393, 573.79248046875);

        // honeyGlow
        const honeyGlow = this.add.sprite(-2, -131, "stage-normanswarm", "shine0031");
        honeyGlow.scaleX = 1.080913279151555;
        honeyGlow.scaleY = 0.8901011208411005;
        honeyGlow.visible = false;
        honeyContain.add(honeyGlow);

        // honey
        const honey = this.add.sprite(0, 0, "stage-normanswarm", "honey0001");
        honey.setOrigin(0.5, 0.6052805663906651);
        honeyContain.add(honey);

        // mantis
        const mantis = this.add.container(940, 481);

        // leg2
        const leg2 = this.add.sprite(-84, -34, "stage-normanswarm", "mantis/leg20001");
        mantis.add(leg2);

        // eye2
        const eye2 = this.add.sprite(-87, -210, "stage-normanswarm", "mantis/eyeball0001");
        eye2.scaleX = 0.9;
        eye2.scaleY = 0.9;
        mantis.add(eye2);

        // arm2
        const arm2 = this.add.sprite(-111, -165, "stage-normanswarm", "mantis/arm20001");
        mantis.add(arm2);

        // mantis_body
        const mantis_body = this.add.image(0, -88.26236346827875, "stage-normanswarm", "mantis/body");
        mantis.add(mantis_body);

        // mantis_antetnna
        const mantis_antetnna = this.add.image(-89, -246, "stage-normanswarm", "mantis/antetnna");
        mantis.add(mantis_antetnna);

        // arm1
        const arm1 = this.add.sprite(-107, -145, "stage-normanswarm", "mantis/arm10001");
        mantis.add(arm1);

        // eye1
        const eye1 = this.add.sprite(-50, -200, "stage-normanswarm", "mantis/eyeball0001");
        mantis.add(eye1);

        // leg1
        const leg1 = this.add.sprite(-72, -15, "stage-normanswarm", "mantis/leg10001");
        mantis.add(leg1);

        // globalTriggersLayer
        const globalTriggersLayer = this.add.layer();

        // boulderTrigger
        const boulderTrigger = this.add.rectangle(690, 422, 220, 100);
        boulderTrigger.isFilled = true;
        boulderTrigger.fillColor = 65280;
        boulderTrigger.fillAlpha = 0.5;
        globalTriggersLayer.add(boulderTrigger);

        // appleTrigger
        const appleTrigger = this.add.rectangle(327, 826, 70, 60);
        appleTrigger.isFilled = true;
        appleTrigger.fillColor = 65280;
        appleTrigger.fillAlpha = 0.5;
        globalTriggersLayer.add(appleTrigger);

        // flowerTrigger
        const flowerTrigger = this.add.rectangle(390, 417, 140, 60);
        flowerTrigger.isFilled = true;
        flowerTrigger.fillColor = 65280;
        flowerTrigger.fillAlpha = 0.5;
        globalTriggersLayer.add(flowerTrigger);

        // honeyTrigger
        const honeyTrigger = this.add.rectangle(1130, 448, 150, 120);
        honeyTrigger.isFilled = true;
        honeyTrigger.fillColor = 65280;
        honeyTrigger.fillAlpha = 0.5;
        globalTriggersLayer.add(honeyTrigger);

        // hoseTrigger
        const hoseTrigger = this.add.rectangle(954, 824, 150, 110);
        hoseTrigger.isFilled = true;
        hoseTrigger.fillColor = 65280;
        hoseTrigger.fillAlpha = 0.5;
        globalTriggersLayer.add(hoseTrigger);

        // lists
        const sort = [scriptbtn, costumebtn, switchboxrock, pottedplant, treecontain, rock1, rocks, rock2, jug, rock3, rock4, wateringcan, shovel, tree2, hivecontain, hose, mantis, appleContain, flowerContain, honeyContain, switchbox_1];
        const globalTriggers = [boulderTrigger, appleTrigger, flowerTrigger, honeyTrigger, hoseTrigger];

        // pond (components)
        const pondAnimation = new Animation(pond);
        pondAnimation.key = "pond";
        pondAnimation.end = 37;
        pondAnimation.repeat = 0;
        pondAnimation.autoPlay = false;

        // hoseWater (components)
        const hoseWaterAnimation = new Animation(hoseWater);
        hoseWaterAnimation.key = "hose/waterloop";
        hoseWaterAnimation.end = 12;
        hoseWaterAnimation.autoPlay = false;
        hoseWaterAnimation.showOnStart = true;

        // switchbox_1 (prefab fields)
        switchbox_1.switch1Callback = () => this.switchboxOne();
        switchbox_1.switch2Callback = () => this.switchboxTwo();
        switchbox_1.switch3Callback = () => this.switchboxThree();
        switchbox_1.switch4Callback = () => this.switchboxFour();
        switchbox_1.switch5Callback = () => this.switchboxFive();
        switchbox_1.switch6Callback = () => this.switchboxSix();
        switchbox_1.switch7Callback = () => this.switchboxSeven();
        switchbox_1.switch8Callback = () => this.switchboxEight();

        // puffle (components)
        const puffleAnimation = new Animation(puffle);
        puffleAnimation.key = "yellowpuff";
        puffleAnimation.end = 62;
        puffleAnimation.repeat = 0;
        puffleAnimation.autoPlay = false;
        puffleAnimation.showOnStart = true;
        puffleAnimation.hideOnComplete = true;

        // door_btn0001 (components)
        const door_btn0001Button = new Button(door_btn0001);
        door_btn0001Button.spriteName = "door-btn";
        door_btn0001Button.lazyName = true;
        new MoveTo(door_btn0001);

        // costumebtn (components)
        const costumebtnButton = new Button(costumebtn);
        costumebtnButton.spriteName = "costumebtn";
        costumebtnButton.callback = () => {this.interface.loadWidget("NormanSwarmCatalog")};

        // scriptbtn (components)
        const scriptbtnButton = new Button(scriptbtn);
        scriptbtnButton.spriteName = "scriptbtn";
        scriptbtnButton.callback = () => this.interface.loadWidget('StageScript',true);

        // jug (components)
        const jugAnimation = new Animation(jug);
        jugAnimation.key = "jug";
        jugAnimation.end = 12;
        jugAnimation.repeat = 0;
        jugAnimation.autoPlay = false;

        // leg2 (components)
        const leg2Animation = new Animation(leg2);
        leg2Animation.key = "mantis/leg2";
        leg2Animation.end = 23;
        leg2Animation.repeat = 0;
        leg2Animation.autoPlay = false;

        // eye2 (components)
        const eye2Animation = new Animation(eye2);
        eye2Animation.key = "mantis/eyeball";
        eye2Animation.end = 35;
        eye2Animation.repeat = 0;
        eye2Animation.autoPlay = false;

        // arm2 (components)
        const arm2Animation = new Animation(arm2);
        arm2Animation.key = "mantis/arm2";
        arm2Animation.end = 39;
        arm2Animation.repeat = 0;
        arm2Animation.autoPlay = false;

        // arm1 (components)
        const arm1Animation = new Animation(arm1);
        arm1Animation.key = "mantis/arm1";
        arm1Animation.end = 42;
        arm1Animation.repeat = 0;
        arm1Animation.autoPlay = false;

        // eye1 (components)
        const eye1Animation = new Animation(eye1);
        eye1Animation.key = "mantis/eyeball";
        eye1Animation.end = 35;
        eye1Animation.repeat = 0;
        eye1Animation.autoPlay = false;

        // leg1 (components)
        const leg1Animation = new Animation(leg1);
        leg1Animation.key = "mantis/leg1";
        leg1Animation.end = 20;
        leg1Animation.repeat = 0;
        leg1Animation.autoPlay = false;

        // boulderTrigger (components)
        const boulderTriggerGlobalTrigger = new GlobalTrigger(boulderTrigger);
        boulderTriggerGlobalTrigger.checkOccupants = (l) => this.checkBoulderTrigger(l);

        // appleTrigger (components)
        const appleTriggerGlobalTrigger = new GlobalTrigger(appleTrigger);
        appleTriggerGlobalTrigger.checkOccupants = (l) => this.checkAppleTrigger(l);

        // flowerTrigger (components)
        const flowerTriggerGlobalTrigger = new GlobalTrigger(flowerTrigger);
        flowerTriggerGlobalTrigger.checkOccupants = (l) => this.checkFlowerTrigger(l);

        // honeyTrigger (components)
        const honeyTriggerGlobalTrigger = new GlobalTrigger(honeyTrigger);
        honeyTriggerGlobalTrigger.checkOccupants = (l) => this.checkHoneyTrigger(l);

        // hoseTrigger (components)
        const hoseTriggerGlobalTrigger = new GlobalTrigger(hoseTrigger);
        hoseTriggerGlobalTrigger.checkOccupants = (l) => this.checkHoseTrigger(l);

        this.pond = pond;
        this.hoseGlow = hoseGlow;
        this.hose = hose;
        this.hoseWater = hoseWater;
        this.puffle = puffle;
        this.jug = jug;
        this.appleGlow = appleGlow;
        this.apple = apple;
        this.boulderGlow = boulderGlow;
        this.boulder = boulder;
        this.flowerGlow = flowerGlow;
        this.flowers = flowers;
        this.honeyGlow = honeyGlow;
        this.honey = honey;
        this.leg2 = leg2;
        this.eye2 = eye2;
        this.arm2 = arm2;
        this.arm1 = arm1;
        this.eye1 = eye1;
        this.leg1 = leg1;
        this.sort = sort;
        this.globalTriggers = globalTriggers;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.helmet = 1

        this.eye1.on('animationcomplete',() => this.eye1.setFrame('mantis/eyeball0001'))
        this.eye2.on('animationcomplete',() => this.eye2.setFrame('mantis/eyeball0001'))

        this.hose.on('animationcomplete',() => {
            this.hose.setFrame('hose/hose0093')
            this.hoseWater.__Animation.play()
            this.pond.__Animation.play()
        })

        this.boulder.on('animationcomplete',() => {
            this.undergroundOpen = true
        })

        this.createSfxTimeline(this.arm1,[{ "stage-normanswarm/mantis/arm1": [{ frame: 2, sound: "normanswarm/arm1" }] }])
        this.createSfxTimeline(this.arm2,[{ "stage-normanswarm/mantis/arm2": [{ frame: 2, sound: "normanswarm/arm2" }] }])
        this.createSfxTimeline(this.leg1,[{ "stage-normanswarm/mantis/leg1": [{ frame: 18, sound: "normanswarm/leg1" }] }])
        this.createSfxTimeline(this.leg2,[{ "stage-normanswarm/mantis/leg2": [{ frame: 21, sound: "normanswarm/leg2" }] }])
        this.createSfxTimeline(this.apple,[{ "__ANY__": [{ frame: 85, sound: "normanswarm/crunch" }] }])
        this.createSfxTimeline(this.boulder,[{ "__ANY__": [{ frame: 94, sound: "normanswarm/boulder" }] }])
        this.createSfxTimeline(this.flowers,[
            {
                "__ANY__": [
                    { frame: 81, sound: "normanswarm/flowerbloom" },
                    { frame: 92, sound: "normanswarm/flowerpop" }
                ]
            }
        ])
        this.createSfxTimeline(this.honey,[
            {
                "__ANY__": [
                    { frame: 88, sound: "normanswarm/rustle" },
                    { frame: 100, sound: "normanswarm/rustle" },
                    { frame: 109, sound: "normanswarm/rustle" }
                ]
            }
        ])

        this.onPenguinUpdate =  () => this.checkTriggers()
        this.onPenguinMoveComplete =  () => this.checkTriggers()
        this.onPenguinsAdded = () => this.checkTriggers()

        this.appleActivated = false
        this.flowerActivated = false
        this.honeyActivated = false
        this.hoseActivated = false
        this.boulderActivated = false
        this.undergroundOpen = false
    }

    checkTriggers() {
        for(let trigger of this.globalTriggers) trigger.__GlobalTrigger.check()
    }

    onPenguinRemove(id) {
        for(let trigger of this.globalTriggers) trigger.__GlobalTrigger.onPenguinRemove(id)
    }

    switchboxOne(){
        if(this.arm1.anims.isPlaying) return
        this.arm1.__Animation.play()
    }
    switchboxTwo(){
        if(this.arm2.anims.isPlaying) return
        this.arm2.__Animation.play()
    }
    switchboxThree(){
        if(this.eye1.anims.isPlaying || this.eye2.anims.isPlaying) return
        this.eye1.__Animation.play()
        this.eye2.__Animation.play()
    }
    switchboxFour(){
        if(this.jug.anims.isPlaying) return
        this.jug.__Animation.play()

    }
    switchboxFive(){
        if(this.leg1.anims.isPlaying || this.leg2.anims.isPlaying || this.arm1.anims.isPlaying || this.arm2.anims.isPlaying) return
        this.arm1.__Animation.play()
        this.arm2.__Animation.play()
        this.leg1.__Animation.play()
        this.leg2.__Animation.play()
    }
    switchboxSix(){
        if(this.leg1.anims.isPlaying) return
        this.leg1.__Animation.play()
    }
    switchboxSeven(){
        if(this.leg2.anims.isPlaying) return
        this.leg2.__Animation.play()
    }
    switchboxEight(){
        this.puffle.__Animation.play()
    }

    checkIsBug(penguins) {
        for(let id of penguins) {
            let penguin = this.penguins[id]
            if(!penguin) continue

            let items = Object.values(penguin.items.equippedFlat)
            items = [...new Set(items)].sort()

            if((items.includes(4137) && items.includes(1101) && items.includes(3036)) ||
               (items.includes(4138)) ||
               (items.includes(4135) || items.includes(380115) || items.includes(380311) || items.includes(380342)) ||
               (items.includes(4127) && items.includes(3034) && items.includes(332) && items.includes(1092)) ||
               (items.includes(4129) && items.includes(6029) && items.includes(1094)) ||
               ((items.includes(10227) || items.includes(227)) && (items.includes(309) || items.includes(10309)) && (items.includes(10472) || items.includes(472)))) return true
        }
        return false
    }

    checkAppleTrigger(penguins) {
        if(this.appleActivated) return
        if(penguins.length > 0 && this.checkIsBug(penguins)) {
            this.apple.play('apple')
            this.appleGlow.play('glow')
            this.appleActivated = true
        }
    }

    checkFlowerTrigger(penguins) {
        if(this.flowerActivated) return
        if(penguins.length > 1 && this.checkIsBug(penguins)) {
            this.flowers.play('flower')
            this.flowerGlow.play('glow')
            this.flowerActivated = true
        }
    }

    checkHoneyTrigger(penguins) {
        if(this.honeyActivated) return
        if(penguins.length > 2 && this.checkIsBug(penguins)) {
            this.honey.play('honey')
            this.honeyGlow.play('glow')
            this.honeyActivated = true
        }
    }

    checkHoseTrigger(penguins) {
        if(this.hoseActivated) return
        if(penguins.length > 3 && this.checkIsBug(penguins)) {
            this.hose.play('hose')
            this.hoseGlow.play('glow')
            this.hoseActivated = true
        }
    }

    checkBoulderTrigger(penguins) {
        if(this.boulderActivated) return
        if(penguins.length > 4 && this.checkIsBug(penguins)) {
            if(this.boulderActivated) return
            this.boulder.play('boulder')
            this.boulderGlow.play('glow')
            this.boulderActivated = true
        }
    }

    onUnderground() {
        if(!this.undergroundOpen) return
        this.triggerRoom(341)
    }
    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
