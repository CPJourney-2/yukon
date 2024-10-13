import RoomScene from '@rooms/RoomScene'

import { Animation, Button, MoveTo, Zone, SimpleButton } from '@components/components'

import RoomPin from '@rooms/RoomPin'

/* START OF COMPILED CODE */

export default class Village extends RoomScene {

    constructor() {
        super("Village");

        /** @type {Phaser.GameObjects.Sprite} */
        this.tour;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rings0001;
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

        this.load.pack("village-pack", "assets/media/rooms/village/village-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(754, 491, "village", "bg");

        // lodgestairs
        this.add.image(953, 433, "village", "lodgestairs");

        // door
        const door = this.add.sprite(1112, 295, "village", "door");

        // lodgefront
        const lodgefront = this.add.image(1065.9336656506036, 375.96198435596614, "village", "lodgefront");
        lodgefront.setOrigin(0.4499370171253708, 0.5276338062737922);

        // lodgesnow
        const lodgesnow = this.add.image(1209.508386024415, 396.462964407251, "village", "lodgesnow");
        lodgesnow.setOrigin(0.7596688233559367, 0.3555316455307134);

        // tourbooth
        const tourbooth = this.add.sprite(788.6295493929533, 473.053138882967, "village", "tourbooth");
        tourbooth.scaleX = 0.7187913194515534;
        tourbooth.scaleY = 0.7187913194515534;
        tourbooth.setOrigin(0.4867019406542816, 0.8749894532738862);

        // tour
        const tour = this.add.sprite(797, 562, "village", "tour");
        tour.setOrigin(0.5328307656859957, 5.392353059267259);

        // lodgesmoke0001
        const lodgesmoke0001 = this.add.sprite(1103, 24, "village", "lodgesmoke0001");

        // sport
        const sport = this.add.image(1473, 457, "village", "sport");
        sport.setOrigin(0.8605203195423886, 0.6225747826557397);

        // sportdoor
        const sportdoor = this.add.sprite(1642, 459, "village", "sportdoor");
        sportdoor.setOrigin(1.6749941388283422, 0.9367677231297962);

        // skate
        const skate = this.add.image(1364.9233184212374, 566.5234634319177, "village", "skate");
        skate.setOrigin(0.1739943573908177, 1.9863282948287024);

        // red
        const red = this.add.image(1457.388945384797, 550.2813966409866, "village", "red");
        red.setOrigin(0.4774905891990333, 0.7750531032172894);

        // rings0001
        const rings0001 = this.add.sprite(1353.852922323127, 570.5908683816974, "village", "rings0001");
        rings0001.setOrigin(0.4519098688188002, 0.7827750334415609);

        // rsign
        this.add.image(1450, 635, "village", "rsign");

        // lsign
        this.add.image(132, 664, "village", "lsign");

        // seat0001
        const seat0001 = this.add.sprite(291, 138, "village", "seat0001");

        // ringshover
        const ringshover = this.add.rectangle(1353.8876758797182, 524.550703518873, 128, 128);
        ringshover.scaleY = 1.4967259491115925;
        ringshover.setOrigin(0.4756849678102988, 0.4350180766812093);
        ringshover.alpha = 0.8;
        ringshover.isFilled = true;
        ringshover.fillColor = 12122816;

        // lists
        const sort = [lodgefront, skate, rings0001, sportdoor, red, lodgesnow, sport, tourbooth, tour];

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

        // rings0001 (components)
        const rings0001Animation = new Animation(rings0001);
        rings0001Animation.key = "rings";
        rings0001Animation.end = 34;
        rings0001Animation.repeat = 0;
        rings0001Animation.autoPlay = false;
        rings0001Animation.stopOnOut = false;

        // seat0001 (components)
        const seat0001Animation = new Animation(seat0001);
        seat0001Animation.key = "seat";
        seat0001Animation.end = 210;

        // ringshover (components)
        const ringshoverZone = new Zone(ringshover);
        ringshoverZone.hoverCallback = () => rings0001.__Animation.play();

        this.tour = tour;
        this.rings0001 = rings0001;
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
