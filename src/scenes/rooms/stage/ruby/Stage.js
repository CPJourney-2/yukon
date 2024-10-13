import RoomScene from '@rooms/RoomScene';
import RoomPin from '@rooms/RoomPin';

import {
    Animation,
    Button,
    SimpleButton,
    MoveTo,
} from '@components/components';

/* START OF COMPILED CODE */

export default class Stage extends RoomScene {

    constructor() {
        super("Stage");

        /** @type {Phaser.GameObjects.Sprite} */
        this.fileCabinet;
        /** @type {Phaser.GameObjects.Sprite} */
        this.safe;
        /** @type {Phaser.GameObjects.Sprite} */
        this.painting;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bigDoor;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lamp;
        /** @type {Phaser.GameObjects.Sprite} */
        this.costumesTrunk;
        /** @type {Phaser.GameObjects.Sprite} */
        this.garbageCan;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flowerPot;
        /** @type {Phaser.GameObjects.Sprite} */
        this.smallDoor;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            plaza: () => this.triggerRoom(300, 860, 510),
            costume: () => this.interface.loadWidget("RubyAndRubyCatalog")

        };

        this.music = 37;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("stage-ruby-pack", "assets/media/rooms/stage/ruby/stage-ruby-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bgStage
        this.add.image(775, 466, "stage-ruby", "bgStage");

        // railBack
        this.add.image(1229, 271, "stage-ruby", "railBack");

        // stairs
        this.add.image(1245, 331, "stage-ruby", "stairs");

        // rug1
        this.add.image(1386, 677, "stage-ruby", "rug1");

        // pottedPlant
        const pottedPlant = this.add.image(599, 739.0124878308309, "stage-ruby", "pottedPlant");
        pottedPlant.setOrigin(0.5, 0.7803976350820521);

        // pottedPlant_1
        const pottedPlant_1 = this.add.image(953, 741.0124921769627, "stage-ruby", "pottedPlant");
        pottedPlant_1.setOrigin(0.5, 0.7803976350820521);

        // lamppost
        const lamppost = this.add.image(702, 497.8655819732951, "stage-ruby", "lamppost");
        lamppost.setOrigin(0.5, 0.8883251690602229);

        // boothL2
        this.add.image(118, 286, "stage-ruby", "boothL2");

        // window
        const window = this.add.sprite(423, 332, "stage-ruby", "window0001");

        // fileCabinet
        const fileCabinet = this.add.sprite(333, 234, "stage-ruby", "fileCabinet0001");

        // chairBack
        this.add.image(455, 256, "stage-ruby", "chairBack");

        // desk
        const desk = this.add.image(446, 301, "stage-ruby", "desk");

        // boothL
        const boothL = this.add.image(138, 260, "stage-ruby", "boothL");
        boothL.setOrigin(0.5, 0.8106970132319447);

        // bigChair
        const bigChair = this.add.image(149, 270.7468780422923, "stage-ruby", "bigChair");
        bigChair.setOrigin(0.5, 0.4399147924824174);

        // bigChairArm
        const bigChairArm = this.add.image(132, 289.0687526076791, "stage-ruby", "bigChairArm");
        bigChairArm.setOrigin(0.5, 0.31116077637331124);

        // bigChairArm_1
        const bigChairArm_1 = this.add.image(83, 342.8281184808023, "stage-ruby", "bigChairArm");
        bigChairArm_1.setOrigin(0.5, 0.9720980590667212);

        // bigChair_1
        const bigChair_1 = this.add.image(100, 295.42500347690543, "stage-ruby", "bigChair");
        bigChair_1.setOrigin(0.5, 0.4313311914084768);

        // woodPost
        const woodPost = this.add.image(347, 475.3322652207396, "stage-ruby", "woodPost");
        woodPost.setOrigin(0.5, 0.8600757112391333);

        // traintrack
        this.add.image(772, 164, "stage-ruby", "traintrack");

        // train
        const train = this.add.sprite(768, 49, "stage-ruby", "train0001");

        // walldoor
        const walldoor = this.add.image(237, 515.0232895188094, "stage-ruby", "walldoor");
        walldoor.setOrigin(0.5, 0.7410789026058471);

        // pottedVase_1
        const pottedVase_1 = this.add.image(99, 736.5142401029875, "stage-ruby", "pottedVase");
        pottedVase_1.setOrigin(0.5, 0.7500800005785816);

        // boothR1
        this.add.image(1405, 256, "stage-ruby", "boothR1");

        // boothR
        const boothR = this.add.image(1398, 259.5309377150537, "stage-ruby", "boothR");
        boothR.setOrigin(0.5, 0.6912775742322017);

        // boothL3
        const boothL3 = this.add.image(140, 668.6773994699129, "stage-ruby", "boothL3");
        boothL3.setOrigin(0.5, 2.5278416635113863);

        // walltrain
        const walltrain = this.add.image(1072, 522.6165256709676, "stage-ruby", "walltrain");
        walltrain.setOrigin(0.5, 0.7564838843693364);

        // safe
        const safe = this.add.sprite(1424, 526.8721752236559, "stage-ruby", "safe0001");
        safe.setOrigin(0.5, 1.0533834111241442);

        // painting
        const painting = this.add.sprite(1396, 714.0051982811742, "stage-ruby", "painting0001");
        painting.setOrigin(0.5, 1.006374524761279);

        // boothR2
        const boothR2 = this.add.image(1426, 636.0907631962784, "stage-ruby", "boothR2");
        boothR2.setOrigin(0.5, 3.519539964365389);

        // archL
        const archL = this.add.image(-29, 950.5424284924724, "stage-ruby", "archL");
        archL.setOrigin(0, 0.9963757112080424);

        // archR
        const archR = this.add.image(1376, 932.8588391602148, "stage-ruby", "archR");
        archR.setOrigin(0.5, 0.9736465819289463);

        // bigDoor
        const bigDoor = this.add.sprite(775, 681.6687247924355, "stage-ruby", "bigDoor");
        bigDoor.setOrigin(0.5, 0.8318992415256946);

        // lampDesk
        const lampDesk = this.add.image(443, 802.8102997935484, "stage-ruby", "lampDesk");
        lampDesk.setOrigin(0.5, 0.22723446501722544);

        // lamp
        const lamp = this.add.sprite(534, 998.9248086064347, "stage-ruby", "lamp-off");
        lamp.setOrigin(0.5, 2.5290725074551963);

        // book
        const book = this.add.sprite(444, 1012.862913076344, "stage-ruby", "book0001");
        book.setOrigin(0.5, 2.0686291307634392);

        // coffeeTable
        this.add.image(1211, 766, "stage-ruby", "coffeeTable");

        // costumesTrunk
        const costumesTrunk = this.add.sprite(1048.0112193962311, 627.0379013935901, "stage-ruby", "costumesTrunk0001");
        costumesTrunk.setOrigin(0.16486714746497835, 0.7475155988902694);

        // chairBottom
        this.add.image(985, 287, "stage-ruby", "chairBottom");

        // chair
        const chair = this.add.image(980, 346.1185626290322, "stage-ruby", "chair");
        chair.setOrigin(0.5, 1.0487275410786285);

        // couch
        this.add.image(1253, 825, "stage-ruby", "couch");

        // couchBack
        const couchBack = this.add.image(1270, 905.1185626290322, "stage-ruby", "couchBack");
        couchBack.setOrigin(0.5, 0.7280426144742352);

        // divider2
        this.add.image(601, 244, "stage-ruby", "divider2");

        // divider1
        this.add.image(920, 242, "stage-ruby", "divider1");

        // garbageCan
        const garbageCan = this.add.sprite(859, 277, "stage-ruby", "garbageCan0001");

        // plaza
        const plaza = this.add.image(168.69193426239343, 654.4708907081981, "stage-ruby", "plaza");
        plaza.setOrigin(0.7868405071251723, 0.8338246096721361);

        // pottedVase
        const pottedVase = this.add.image(219, 576.857082543396, "stage-ruby", "pottedVase");
        pottedVase.setOrigin(0.5, 0.7744780494155161);

        // rug
        this.add.image(775, 779, "stage-ruby", "rug");

        // railSide
        const railSide = this.add.image(1205, 503, "stage-ruby", "railSide");

        // tableWeird
        const tableWeird = this.add.image(1073, 281, "stage-ruby", "tableWeird");

        // tableFlowers
        const tableFlowers = this.add.image(1214, 750.4905277719658, "stage-ruby", "tableFlowers");
        tableFlowers.setOrigin(0.5, 1.0498947530218428);

        // flowerPot
        const flowerPot = this.add.sprite(1073, 335.42392551140404, "stage-ruby", "flowerPot0001");
        flowerPot.setOrigin(0.5, 1.749223848164552);

        // smallDoor
        const smallDoor = this.add.sprite(410, 485.8177529507851, "stage-ruby", "smallDoor");
        smallDoor.setOrigin(0.5, 0.8439298892501343);

        // script
        const script = this.add.image(1442, 1028.6917054966193, "stage-ruby", "script");
        script.setOrigin(0.5, 2.468957342085493);

        // costume
        const costume = this.add.image(1435, 1080.0857214381288, "stage-ruby", "costume");
        costume.setOrigin(0.5, 2.379006273375033);

        // lists
        const sort = [tableWeird, tableFlowers, flowerPot, smallDoor, script, costume, railSide, pottedVase, pottedVase_1, walldoor, woodPost, bigChair, bigChair_1, bigChairArm_1, boothL, desk, lamppost, pottedPlant, pottedPlant_1, bigDoor, archR, couchBack, chair, costumesTrunk, book, lamp, lampDesk, archL, painting, safe, walltrain, boothR, boothR2, boothL3];

        // window (components)
        const windowAnimation = new Animation(window);
        windowAnimation.key = "window";
        windowAnimation.end = 320;

        // fileCabinet (components)
        const fileCabinetSimpleButton = new SimpleButton(fileCabinet);
        fileCabinetSimpleButton.callback = () => this.fileCabinet.__Animation.play();
        const fileCabinetAnimation = new Animation(fileCabinet);
        fileCabinetAnimation.key = "fileCabinet";
        fileCabinetAnimation.end = 40;
        fileCabinetAnimation.repeat = 0;
        fileCabinetAnimation.autoPlay = false;

        // train (components)
        const trainAnimation = new Animation(train);
        trainAnimation.key = "train";
        trainAnimation.end = 120;
        trainAnimation.repeatDelay = 5000;

        // safe (components)
        const safeAnimation = new Animation(safe);
        safeAnimation.key = "safe";
        safeAnimation.end = 12;
        safeAnimation.repeat = 0;
        safeAnimation.autoPlay = false;
        const safeSimpleButton = new SimpleButton(safe);
        safeSimpleButton.callback = () => this.interface.prompt.showItem(7045);

        // painting (components)
        const paintingAnimation = new Animation(painting);
        paintingAnimation.key = "painting";
        paintingAnimation.end = 15;
        paintingAnimation.repeat = 0;
        paintingAnimation.autoPlay = false;
        const paintingSimpleButton = new SimpleButton(painting);
        paintingSimpleButton.callback = () => this.onPainting();
        paintingSimpleButton.pixelPerfect = true;

        // bigDoor (components)
        const bigDoorSimpleButton = new SimpleButton(bigDoor);
        bigDoorSimpleButton.callback = () => this.onBigDoor();
        bigDoorSimpleButton.pixelPerfect = true;

        // lamp (components)
        const lampSimpleButton = new SimpleButton(lamp);
        lampSimpleButton.callback = () => this.onLamp();

        // book (components)
        const bookSimpleButton = new SimpleButton(book);
        bookSimpleButton.callback = () => this.book.__Animation.play();
        const bookAnimation = new Animation(book);
        bookAnimation.key = "book";
        bookAnimation.end = 23;
        bookAnimation.repeat = 0;
        bookAnimation.autoPlay = false;

        // costumesTrunk (components)
        new MoveTo(costumesTrunk);
        const costumesTrunkSimpleButton = new SimpleButton(costumesTrunk);
        costumesTrunkSimpleButton.hoverCallback = () => this.costumesTrunk.__Animation.play();
        costumesTrunkSimpleButton.hoverOutCallback = () => this.costumesTrunk.setTexture('stage-ruby', 'costumesTrunk0001');
        costumesTrunkSimpleButton.pixelPerfect = true;
        const costumesTrunkAnimation = new Animation(costumesTrunk);
        costumesTrunkAnimation.key = "costumesTrunk";
        costumesTrunkAnimation.end = 16;
        costumesTrunkAnimation.repeat = 0;
        costumesTrunkAnimation.autoPlay = false;

        // garbageCan (components)
        const garbageCanSimpleButton = new SimpleButton(garbageCan);
        garbageCanSimpleButton.callback = () => this.garbageCan.__Animation.play();
        const garbageCanAnimation = new Animation(garbageCan);
        garbageCanAnimation.key = "garbageCan";
        garbageCanAnimation.end = 49;
        garbageCanAnimation.repeat = 0;
        garbageCanAnimation.autoPlay = false;

        // plaza (components)
        new MoveTo(plaza);
        const plazaButton = new Button(plaza);
        plazaButton.spriteName = "plaza";
        plazaButton.pixelPerfect = true;

        // flowerPot (components)
        const flowerPotSimpleButton = new SimpleButton(flowerPot);
        flowerPotSimpleButton.callback = () => this.flowerPot.__Animation.play();
        const flowerPotAnimation = new Animation(flowerPot);
        flowerPotAnimation.key = "flowerPot";
        flowerPotAnimation.end = 10;
        flowerPotAnimation.repeat = 0;
        flowerPotAnimation.autoPlay = false;

        // smallDoor (components)
        const smallDoorSimpleButton = new SimpleButton(smallDoor);
        smallDoorSimpleButton.callback = () => this.onSmallDoor();

        // script (components)
        const scriptButton = new Button(script);
        scriptButton.spriteName = "script";
        scriptButton.callback = () => this.interface.loadWidget('StageScript',true);;

        // costume (components)
        const costumeButton = new Button(costume);
        costumeButton.spriteName = "costume";
        costumeButton.callback = () => {this.interface.loadWidget("RubyAndRubyCatalog")};

        this.fileCabinet = fileCabinet;
        this.safe = safe;
        this.painting = painting;
        this.bigDoor = bigDoor;
        this.lamp = lamp;
        this.costumesTrunk = costumesTrunk;
        this.garbageCan = garbageCan;
        this.flowerPot = flowerPot;
        this.smallDoor = smallDoor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create();

        this.lampState = false;
        this.bigDoorState = false;
        this.smallDoorState = false;
        this.paintingState = false;
    }

    onLamp() {
        if (this.lampState) {
            this.lamp.setTexture('stage-ruby', 'lamp-off');
            this.lampState = false;
        } else {
            this.lamp.setTexture('stage-ruby', 'lamp-on');
            this.lampState = true;
        }
    }

    onBigDoor() {
        if (this.bigDoorState) {
            this.bigDoor.setTexture('stage-ruby', 'bigDoor');
            this.bigDoorState = false;
        } else {
            this.bigDoor.setTexture('stage-ruby', 'bigDoor-open');
            this.bigDoorState = true;
        }
    }

    onSmallDoor() {
        if (this.smallDoorState) {
            this.smallDoor.setTexture('stage-ruby', 'smallDoor');
            this.smallDoorState = false;
        } else {
            this.smallDoor.setTexture('stage-ruby', 'smallDoor-open');
            this.smallDoorState = true;
        }
    }

    onPainting() {
        if (this.paintingState) {
            return;
        } else {
            this.painting.__Animation.play();

            this.painting.on('animationcomplete', () => {
                this.safe.__Animation.play();
            });
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
