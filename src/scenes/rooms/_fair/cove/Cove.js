import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, ShowHint, SimpleButton, ZoneTrigger } from '@components/components'

//import Tag2 from '@scenes/interface/catalogs/clothing/buttons/Tag2'
import BuyButton from '@scenes/interface/catalogs/furniture/buttons/BuyButton'


/* START OF COMPILED CODE */

export default class Cove extends RoomScene {

    constructor() {
        super("Cove");

        /** @type {Phaser.GameObjects.Sprite} */
        this.catalogirl;
        /** @type {Phaser.GameObjects.Image} */
        this.tent_hover;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lights;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers =  {
            'forest': () => this.triggerRoom(809, 1190, 750),
            'waves': () => this.triggerGame(912)
        }

        this.music = 297;
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cove-pack", "assets/media/rooms/cove/cove-pack.json");
        this.load.pack("fair-cove-pack", "assets/media/rooms/_fair/cove/fair-cove-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-79, -22, "fair-cove", "bgcove");
        bg.setOrigin(0, 0);

        // fenceL
        const fenceL = this.add.image(214, 772.3624565872002, "fair-cove", "fenceL");
        fenceL.setOrigin(0.5, 0.7820771060043228);

        // streamers
        this.add.image(591, 197, "fair-cove", "streamers");

        // creamsoda
        const creamsoda = this.add.image(325, 790, "fair-cove", "creamsoda");

        // fgTop
        this.add.image(216, 288, "fair-cove", "fgTop");

        // water_water_15
        const water_water_15 = this.add.image(1109, 673, "cove", "water/water_15");
        water_water_15.setOrigin(0.5011135857461024, 2.909090909090909);

        // water_water_14
        const water_water_14 = this.add.image(1034, 695, "cove", "water/water_14");
        water_water_14.setOrigin(0.5, 1.9545454545454546);

        // water_water_13
        const water_water_13 = this.add.image(1002, 717, "cove", "water/water_13");
        water_water_13.setOrigin(0.5006993006993007, 1.9545454545454546);

        // water_water_12
        const water_water_12 = this.add.image(995, 739, "cove", "water/water_12");
        water_water_12.setOrigin(0.5, 1.9545454545454546);

        // water_water_11
        const water_water_11 = this.add.image(1011, 761, "cove", "water/water_11");
        water_water_11.setOrigin(0.5005662514156285, 1.9545454545454546);

        // water_water_10
        const water_water_10 = this.add.image(1031, 783, "cove", "water/water_10");
        water_water_10.setOrigin(0.5005045408678103, 1.9545454545454546);

        // water_water_9
        const water_water_9 = this.add.image(1024, 805, "cove", "water/water_9");
        water_water_9.setOrigin(0.5, 1.9545454545454546);

        // water_water_8
        const water_water_8 = this.add.image(1014, 827, "cove", "water/water_8");
        water_water_8.setOrigin(0.5, 1.65625);

        // water_water_7
        const water_water_7 = this.add.image(1008, 849, "cove", "water/water_7");
        water_water_7.setOrigin(0.5004821600771456, 1.9545454545454546);

        // water_water_6
        const water_water_6 = this.add.image(1008, 871, "cove", "water/water_6");
        water_water_6.setOrigin(0.5004812319538018, 1.9545454545454546);

        // water_water_5
        const water_water_5 = this.add.image(1018, 893, "cove", "water/water_5");
        water_water_5.setOrigin(0.5, 1.9545454545454546);

        // water_water_4
        const water_water_4 = this.add.image(1026, 915, "cove", "water/water_4");
        water_water_4.setOrigin(0.5005015045135406, 1.9545454545454546);

        // water_water_3
        const water_water_3 = this.add.image(1005, 937, "cove", "water/water_3");
        water_water_3.setOrigin(0.5, 1.9545454545454546);

        // water_water_2
        const water_water_2 = this.add.image(1005, 959, "cove", "water/water_2");
        water_water_2.setOrigin(0.5, 1.9545454545454546);

        // water_water_1
        const water_water_1 = this.add.image(1005, 981, "cove", "water/water_1");
        water_water_1.setOrigin(0.5, 1.9545454545454546);

        // hut
        const hut = this.add.image(1326, 423, "cove", "hut");
        hut.setOrigin(0.5537459283387622, 0.43842364532019706);

        // hut_wall
        const hut_wall = this.add.image(1440, 545, "cove", "hut_wall");
        hut_wall.setOrigin(0.5210526315789473, 0.8577777777777778);

        // boardsContainer
        const boardsContainer = this.add.container(1101, 485);

        // boards
        const boards = this.add.image(0, 0, "cove", "boards");
        boards.setOrigin(0.502262443438914, 0.8586956521739131);
        boardsContainer.add(boards);

        // catalogirl
        const catalogirl = this.add.sprite(-65, -138, "cove-catalogbtn", "catalogirl0001");
        catalogirl.setOrigin(0.5, 0);
        boardsContainer.add(catalogirl);

        // rock_1
        const rock_1 = this.add.image(476, 906, "cove", "rock_1");
        rock_1.setOrigin(0.456, 0.6329113924050633);

        // fg
        const fg = this.add.image(-27, 972, "fair-cove", "fgBottom");
        fg.setOrigin(0, 1);

        // fire
        const fire = this.add.sprite(615, 560, "cove", "fire0001");
        fire.setOrigin(0.5029239766081871, 0.7318840579710145);

        // telescopeArm
        const telescopeArm = this.add.image(639, 287.09303147127093, "fair-cove", "telescopeArm");
        telescopeArm.setOrigin(0.5, 0.809481374447518);

        // binocularbtn
        const binocularbtn = this.add.image(651, 300, "binocularbtn", "binocularbtn");
        binocularbtn.setOrigin(1.0597014925373134, 1.1666666666666667);

        // silver_board
        const silver_board = this.add.image(1463, 557, "cove", "silver_board");
        silver_board.setOrigin(0.5167785234899329, 0.8613445378151261);

        // rock_4
        const rock_4 = this.add.image(1497, 583, "cove", "rock_4");
        rock_4.setOrigin(0.5094339622641509, 0.5423728813559322);

        // rock_2
        const rock_2 = this.add.image(1292, 697, "cove", "rock_2");
        rock_2.setOrigin(0.4935064935064935, 0.6458333333333334);

        // hut_stool
        const hut_stool = this.add.image(1310, 493, "cove", "hut_stool");
        hut_stool.setOrigin(0.5, 0.5185185185185185);

        // catchinwaves
        const catchinwaves = this.add.rectangle(1282, 449, 128, 128);
        catchinwaves.scaleX = 1.7037874761911826;
        catchinwaves.scaleY = 1.2927799407196054;

        // catalogbtn
        const catalogbtn = this.add.image(1480, 999, "cove-catalogbtn", "catalogbtn");
        catalogbtn.setOrigin(0.868, 1.5);

        // tent
        const tent = this.add.image(280.3594932478825, 518.5629204852364, "fair-cove", "tent");
        tent.setOrigin(0.7567124254645129, 0.8455662250731046);

        // food
        const food = this.add.image(416, 434, "fair-cove", "food");

        // tent_hover
        const tent_hover = this.add.image(222, 346, "fair-cove", "tent-hover");
        tent_hover.visible = false;

        // surfsign
        const surfsign = this.add.image(1298, 559.8556622167316, "fair-cove", "surfsign");
        surfsign.setOrigin(0.5, 0.9203485430041468);

        // lights
        const lights = this.add.sprite(1283, 692.4613984262855, "fair-cove", "lights0001");
        lights.setOrigin(0.5, 3.6818895669404745);

        // fenceR
        const fenceR = this.add.image(1512, 587.6937444431496, "fair-cove", "fenceR");
        fenceR.setOrigin(0.5, 0.6401227182424074);

        // feed
        const feed = this.add.rectangle(267, 364, 128, 128);
        feed.scaleX = 1.7037874761911826;
        feed.scaleY = 1.2927799407196054;

        // rock_3
        const rock_3 = this.add.image(1447, 690, "cove", "rock_3");
        rock_3.setOrigin(0.5588235294117647, 0.5949367088607594);

        // feedTrigger
        const feedTrigger = this.add.rectangle(284, 511, 128, 128);
        feedTrigger.scaleX = 1.7037874761911826;
        feedTrigger.scaleY = 0.7466451854071767;
        feedTrigger.angle = -16;

        // lists
        const sort = [water_water_15, water_water_1, water_water_2, water_water_3, water_water_4, water_water_5, water_water_6, water_water_7, water_water_8, water_water_9, water_water_10, water_water_11, water_water_12, water_water_13, water_water_14, hut_wall, rock_1, fire, binocularbtn, silver_board, rock_3, rock_2, rock_4, fg, catalogbtn, fenceR, fenceL, creamsoda, surfsign, food, telescopeArm, lights, boardsContainer];

        // hut (components)
        const hutButton = new Button(hut);
        hutButton.spriteName = "hut";
        const hutMoveTo = new MoveTo(hut);
        hutMoveTo.x = 1250;
        hutMoveTo.y = 500;

        // catalogirl (components)
        const catalogirlAnimation = new Animation(catalogirl);
        catalogirlAnimation.key = "catalogirl";
        catalogirlAnimation.start = 2;
        catalogirlAnimation.end = 7;
        catalogirlAnimation.repeat = 0;
        catalogirlAnimation.autoPlay = false;
        const catalogirlSimpleButton = new SimpleButton(catalogirl);
        catalogirlSimpleButton.hoverCallback = () => this.onCatalogIrlHover();
        catalogirlSimpleButton.hoverOutCallback = () => this.onCatalogIrlHoverOut();
        catalogirlSimpleButton.callback = () => this.onCatalog();

        // fire (components)
        const fireAnimation = new Animation(fire);
        fireAnimation.key = "fire";
        fireAnimation.end = 10;

        // binocularbtn (components)
        const binocularbtnButton = new Button(binocularbtn);
        binocularbtnButton.spriteName = "binocularbtn";
        binocularbtnButton.callback = () => this.interface.loadWidget('Binoculars');

        // catchinwaves (components)
        const catchinwavesShowHint = new ShowHint(catchinwaves);
        catchinwavesShowHint.text = "Catchin' Waves";
        const catchinwavesMoveTo = new MoveTo(catchinwaves);
        catchinwavesMoveTo.x = 1282;
        catchinwavesMoveTo.y = 449;
        new SimpleButton(catchinwaves);

        // catalogbtn (components)
        const catalogbtnButton = new Button(catalogbtn);
        catalogbtnButton.spriteName = "catalogbtn";
        catalogbtnButton.callback = () => this.onCatalog();

        // lights (components)
        const lightsAnimation = new Animation(lights);
        lightsAnimation.key = "lights";
        lightsAnimation.end = 13;

        // feed (components)
        const feedShowHint = new ShowHint(feed);
        feedShowHint.text = "Feed a Puffle";
        const feedMoveTo = new MoveTo(feed);
        feedMoveTo.x = 293;
        feedMoveTo.y = 518;
        const feedSimpleButton = new SimpleButton(feed);
        feedSimpleButton.hoverCallback = () => this.tent_hover.visible = true;
        feedSimpleButton.hoverOutCallback = () => this.tent_hover.visible = false;

        // feedTrigger (components)
        const feedTriggerZoneTrigger = new ZoneTrigger(feedTrigger);
        feedTriggerZoneTrigger.callback = () => this.triggerGame(920);

        this.catalogirl = catalogirl;
        this.tent_hover = tent_hover;
        this.lights = lights;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    onCatalog() {
        this.interface.loadWidget('CoveCatalog')    
    }

    onCatalogIrlHover() {
        this.catalogirl.__Animation.play()    
    }

    onCatalogIrlHoverOut() {
        this.catalogirl.__Animation.stop()
        this.catalogirl.setFrame("catalogirl0001")
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
