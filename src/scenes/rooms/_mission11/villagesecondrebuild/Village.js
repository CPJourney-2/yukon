import RoomScene from '@rooms/RoomScene'

import { Animation, Button, MoveTo, ZoneTrigger, SimpleButton } from '@components/components'

import RoomPin from '@rooms/RoomPin'

/* START OF COMPILED CODE */

export default class Village extends RoomScene {

    constructor() {
        super("Village");

        /** @type {Phaser.GameObjects.Sprite} */
        this.tour;
        /** @type {Phaser.GameObjects.Sprite} */
        this.interfaceIcons;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lodge': () => this.triggerRoom(220, 320, 640),
            'dock': () => this.triggerRoom(800, 436, 280),
            'beach': () => this.triggerRoom(400, 920, 360),
            'mtn': () => this.triggerRoom(230, 840, 320),
            'sport': () => this.interface.loadWidget('SportsCatalog'),
            'hat': () => this.interface.prompt.showItem(429)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("village-pack", "assets/media/rooms/village/village-pack.json");
        this.load.pack("postveggie-village-phasetwo-pack", "assets/media/rooms/_mission11/villagesecondrebuild/postveggie-village-phasetwo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-13.768881291460389, -358.3298718976123, "postveggie-village-phasetwo", "bg");
        bg.setOrigin(0.011907894919605602, -0.19064023850667744);

        // lodgestairs
        this.add.image(953, 433, "village", "lodgestairs");

        // craneanim
        const craneanim = this.add.sprite(1243, -58, "postveggie-village-phasetwo", "craneanim0001");

        // fg
        const fg = this.add.image(-11.203893055778472, 31.373326101415614, "postveggie-village-phasetwo", "fg");
        fg.setOrigin(0.0031306183190856493, 0.0032988830660391965);

        // door
        const door = this.add.sprite(1066.8824075604555, 312.82350650690574, "village", "door");
        door.setOrigin(0.2866085508534866, 0.5751049397629721);

        // lodgefront
        const lodgefront = this.add.image(1065.9336656506036, 375.96198435596614, "village", "lodgefront");
        lodgefront.setOrigin(0.4499370171253708, 0.5276338062737922);

        // post
        const post = this.add.image(1158.9075100973398, 487.5046096663385, "postveggie-village-phasetwo", "post");
        post.setOrigin(-0.00420408648455412, 0.9052351169020784);

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

        // rsign
        this.add.image(1450, 635, "village", "rsign");

        // seat0001
        const seat0001 = this.add.sprite(293, 141, "village", "seat0001");

        // planks
        const planks = this.add.image(1087.815257670349, 692.0879788847485, "postveggie-village-phasetwo", "planks");
        planks.setOrigin(0.000814619303227276, 0.1035880800349155);

        // worksign
        const worksign = this.add.image(1242.9132702261766, 654.0433648869117, "postveggie-village-phasetwo", "worksign");
        worksign.setOrigin(-0.0006194983844531115, 0.7695643452839362);

        // color
        const color = this.add.image(1148.5197431853483, 518.6443785321866, "postveggie-village-phasetwo", "color");
        color.setOrigin(0.0003236587762010041, 0.5628341126239065);

        // wintersign
        const wintersign = this.add.image(1036.957839846962, 518.9415006537934, "postveggie-village-phasetwo", "sportsig");
        wintersign.setOrigin(0.33402121462409995, 0.8633235329079858);

        // stone
        const stone = this.add.image(983.2069058322766, 500.9973409531242, "postveggie-village-phasetwo", "stone");
        stone.setOrigin(0.7803114904382672, 0.08013237368797095);

        // popcornpile
        const popcornpile = this.add.image(436.51436739068674, 610, "postveggie-village-phasetwo", "popcornpile");
        popcornpile.setOrigin(0.1952705728195021, 0.5);

        // mannequins
        const mannequins = this.add.image(331.5174809671898, 593.8132421429891, "postveggie-village-phasetwo", "mannequins");
        mannequins.setOrigin(0.8531828915834525, 0.9016223337116114);

        // enjoy
        const enjoy = this.add.image(312.8320999115612, 665.9097951233325, "postveggie-village-phasetwo", "enjoy");
        enjoy.setOrigin(0.8221938060246968, 0.6798748153523769);

        // stand_lower
        const stand_lower = this.add.image(435.97485097349, 671.8047137767004, "postveggie-village-phasetwo", "stand_lower");
        stand_lower.setOrigin(0.8288457878548986, 0.16080749104980338);

        // stand_top
        const stand_top = this.add.image(113.21966125059154, 825.5332938582584, "postveggie-village-phasetwo", "stand_top");
        stand_top.setOrigin(0.012410768384092772, 1.134887532944344);

        // large
        const large = this.add.image(525.6975029959375, 704.8086526938702, "postveggie-village-phasetwo", "large");
        large.setOrigin(0.8853233016891163, 0.2612312874148633);

        // smallcorn
        const smallcorn = this.add.image(534.4065451340948, 798.880552944008, "postveggie-village-phasetwo", "smallcorn");
        smallcorn.setOrigin(0.18238053534884532, 0.4576111592970233);

        // hardhat
        const hardhat = this.add.image(556.4150210879686, 677.0646930168176, "postveggie-village-phasetwo", "hardhats");
        hardhat.setOrigin(0.002075105439843128, 0.5362919019358715);

        // medium
        const medium = this.add.image(698.5452584431166, 724.2474856420491, "postveggie-village-phasetwo", "medium");
        medium.setOrigin(0.0002958068177556128, 0.5849497128409825);

        // interfaceIcons
        const interfaceIcons = this.add.sprite(1389, 871, "postveggie-village-phasetwo", "catalog");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(654, 669, 128, 128);

        // lists
        const sort = [lodgefront, tourbooth, tour, fg, bg, door, planks, worksign, color, post, wintersign, stone, popcornpile, enjoy, stand_top, stand_lower, mannequins, large, smallcorn, medium, hardhat];

        // craneanim (components)
        const craneanimAnimation = new Animation(craneanim);
        craneanimAnimation.key = "craneanim";
        craneanimAnimation.end = 900;

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

        // seat0001 (components)
        const seat0001Animation = new Animation(seat0001);
        seat0001Animation.key = "seat";
        seat0001Animation.end = 210;

        // interfaceIcons (components)
        const interfaceIconsButton = new Button(interfaceIcons);
        interfaceIconsButton.spriteName = "catalog";
        interfaceIconsButton.callback = () => this.interface.loadWidget('SportsCatalog');

        // rectangle_1 (components)
        const rectangle_1ZoneTrigger = new ZoneTrigger(rectangle_1);
        rectangle_1ZoneTrigger.callback = () => this.interface.prompt.showItem(429);

        this.tour = tour;
        this.interfaceIcons = interfaceIcons;
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
