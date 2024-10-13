import RoomScene from '@rooms/RoomScene'

import { Animation, Button, MoveTo, Zone, SimpleButton } from '@components/components'

import RoomPin from '@rooms/RoomPin'

/* START OF COMPILED CODE */

export default class Village extends RoomScene {

    constructor() {
        super("Village");

        /** @type {Phaser.GameObjects.Sprite} */
        this.tour;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lodge': () => this.triggerRoom(220, 320, 640),
            'dock': () => this.triggerRoom(800, 436, 280),
            'beach': () => this.triggerRoom(400, 920, 360),
            'mtn': () => this.triggerRoom(230, 840, 320),
            'sport': () => this.triggerRoom(210, 1069, 526)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("villagefirstrebuild-pack", "assets/media/rooms/_mission11/villagefirstrebuild/villagefirstrebuild-pack.json");
        this.load.pack("village-pack", "assets/media/rooms/village/village-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(754, 491, "village", "bg");
        bg.visible = false;

        // background
        this.add.image(754, 491, "villagefirstrebuild", "background");

        // slightRightSandMound
        this.add.image(1219, 735, "villagefirstrebuild", "slightRightSandMound");

        // middleSandMound
        this.add.image(915, 757, "villagefirstrebuild", "middleSandMound");

        // topLeftPopcornMound
        this.add.image(548, 423, "villagefirstrebuild", "topLeftPopcornMound");

        // lodgestairs
        this.add.image(966, 433, "village", "lodgestairs");

        // door
        const door = this.add.sprite(1112, 295, "village", "door");

        // lodgefront
        const lodgefront = this.add.image(1072, 378, "village", "lodgefront");
        lodgefront.setOrigin(0.4499370171253708, 0.5276338062737922);

        // boardsSign
        const boardsSign = this.add.image(1079, 397, "villagefirstrebuild", "boardsSign");

        // tourbooth
        const tourbooth = this.add.sprite(791.9326782226562, 427.19403419758373, "village", "tourbooth");
        tourbooth.scaleX = 0.7187913194515534;
        tourbooth.scaleY = 0.7187913194515534;
        tourbooth.setOrigin(0.5052315205740396, 0.6601736306606106);

        // tour
        const tour = this.add.sprite(797, 562, "village", "tour");
        tour.setOrigin(0.5328307656859957, 5.392353059267259);

        // greenPopcornMound
        const greenPopcornMound = this.add.image(549.2847290039062, 442.73074455349143, "villagefirstrebuild", "greenPopcornMound");
        greenPopcornMound.setOrigin(0.49416073672649924, -0.0683162943106346);

        // orangePopcornMound
        const orangePopcornMound = this.add.image(907, 454.27520866481956, "villagefirstrebuild", "orangePopcornMound");
        orangePopcornMound.setOrigin(0.5, -0.029617258430129165);

        // leftPopcornMound
        const leftPopcornMound = this.add.image(535.944091796875, 540.0641740567514, "villagefirstrebuild", "leftPopcornMound");
        leftPopcornMound.setOrigin(0.4927240486265773, -0.0711419791076138);

        // pinkPopcornMound
        const pinkPopcornMound = this.add.image(607.26293199383, 704.8799126496803, "villagefirstrebuild", "pinkPopcornMound");
        pinkPopcornMound.setOrigin(0.4941390776154281, -0.10785762695599913);

        // lodgesmoke0001
        const lodgesmoke0001 = this.add.sprite(1109, 26, "village", "lodgesmoke0001");

        // sportShopBuilding
        const sportShopBuilding = this.add.image(1395.8225265579192, 415.6893980204978, "villagefirstrebuild", "sportShopBuilding");
        sportShopBuilding.setOrigin(0.47239433291507393, 0.8615319956011062);

        // sandOutOfDoor
        const sandOutOfDoor = this.add.image(1275.6369294204198, 424.09931014706217, "villagefirstrebuild", "sandOutOfDoor");
        sandOutOfDoor.setOrigin(0.4753497891825828, 0.1283295991196119);

        // sportdoor
        const sportdoor = this.add.sprite(1642, 459, "village", "sportdoor");
        sportdoor.setOrigin(1.6749941388283422, 0.9367677231297962);
        sportdoor.visible = false;

        // brokenSportDoor
        const brokenSportDoor = this.add.sprite(1352, 430, "villagefirstrebuild", "brokenSportDoor");
        brokenSportDoor.setOrigin(0.5, 0.7126452475895703);

        // rightSandMound
        const rightSandMound = this.add.image(1420.2086945010522, 425.0393474912451, "villagefirstrebuild", "rightSandMound");
        rightSandMound.setOrigin(0.7273420011916805, 0.13734812119794468);

        // blueRing
        const blueRing = this.add.image(1381, 542.676782246006, "villagefirstrebuild", "blueRing");
        blueRing.setOrigin(0.5, -0.11814715945962802);

        // greenRing
        const greenRing = this.add.image(1384, 624.7396057226124, "villagefirstrebuild", "greenRing");
        greenRing.setOrigin(0.5, -0.11979116786244624);

        // pinkRing
        const pinkRing = this.add.image(1329, 657.7486389257374, "villagefirstrebuild", "pinkRing");
        pinkRing.setOrigin(0.5, -0.11814715945962774);

        // rsign
        const rsign = this.add.image(1466, 735, "village", "rsign");

        // lsign
        this.add.image(165, 734, "village", "lsign");

        // seat0001
        const seat0001 = this.add.sprite(294, 141, "village", "seat0001");

        // allYouCanEatPopcorn0001
        this.add.image(122, 553, "villagefirstrebuild", "allYouCanEatPopcorn0001");

        // popcornAwning
        const popcornAwning = this.add.image(1696.1405029296875, 463.140841473828, "villagefirstrebuild", "popcornAwning");
        popcornAwning.setOrigin(1.627463650432084, 1.3707878781620568);

        // villagePhase1Preview
        const villagePhase1Preview = this.add.image(754, 475, "VillagePhase1Preview");
        villagePhase1Preview.visible = false;
        villagePhase1Preview.alpha = 0.5;
        villagePhase1Preview.alphaTopLeft = 0.5;
        villagePhase1Preview.alphaTopRight = 0.5;
        villagePhase1Preview.alphaBottomLeft = 0.5;
        villagePhase1Preview.alphaBottomRight = 0.5;

        // lists
        const sort = [lodgefront, tourbooth, tour, popcornAwning, sportdoor, boardsSign, sportShopBuilding, sandOutOfDoor, rightSandMound, blueRing, greenRing, pinkRing, rsign, brokenSportDoor, orangePopcornMound, greenPopcornMound, leftPopcornMound, pinkPopcornMound];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.pixelPerfect = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 1069;
        doorMoveTo.y = 318;

        // tourbooth (components)
        const tourboothButton = new Button(tourbooth);
        tourboothButton.spriteName = "tourbooth";
        tourboothButton.hoverCallback = () => { tour.y = 557; tour.x = 796  } ;
        tourboothButton.hoverOutCallback = () => { tour.y = 562; tour.x = 797 };
        tourboothButton.callback = () =>  {this.onTourButton()};
        tourboothButton.pixelPerfect = true;

        // lodgesmoke0001 (components)
        const lodgesmoke0001Animation = new Animation(lodgesmoke0001);
        lodgesmoke0001Animation.key = "lodgesmoke";
        lodgesmoke0001Animation.end = 5;

        // sportdoor (components)
        const sportdoorButton = new Button(sportdoor);
        sportdoorButton.spriteName = "sportdoor";
        sportdoorButton.pixelPerfect = true;
        const sportdoorMoveTo = new MoveTo(sportdoor);
        sportdoorMoveTo.x = 1321;
        sportdoorMoveTo.y = 458;

        // brokenSportDoor (components)
        const brokenSportDoorButton = new Button(brokenSportDoor);
        brokenSportDoorButton.spriteName = "brokenSportDoor";
        brokenSportDoorButton.pixelPerfect = true;
        const brokenSportDoorMoveTo = new MoveTo(brokenSportDoor);
        brokenSportDoorMoveTo.x = 1321;
        brokenSportDoorMoveTo.y = 458;

        // seat0001 (components)
        const seat0001Animation = new Animation(seat0001);
        seat0001Animation.key = "seat";
        seat0001Animation.end = 210;

        this.tour = tour;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    onTourButton(){
        if (this.world.client.hasItem(428)){
            this.interface.loadWidget('TourGuideBook')
        }
        else{
            this.interface.loadWidget('TourPrompt')
        }
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
