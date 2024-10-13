import RoomScene from '@rooms/RoomScene'

import { Animation, Button, MoveTo, Zone, SimpleButton } from '@components/components'

import RoomPin from '@rooms/RoomPin'

/* START OF COMPILED CODE */

export default class Village extends RoomScene {

    constructor() {
        super("Village");

        /** @type {Phaser.GameObjects.Image} */
        this.videoMask;
        /** @type {Phaser.GameObjects.Container} */
        this.videoContainer;
        /** @type {Phaser.GameObjects.Container} */
        this.mediaPlayer;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lodge': () => this.triggerRoom(220, 320, 640),
            'dock': () => this.triggerRoom(800, 436, 280),
            'beach': () => this.triggerRoom(400, 920, 360),
            'mtn': () => this.triggerRoom(230, 840, 320),
            'sport': () => this.triggerRoom(210, 1069, 526)
        }
        this.music = '1147'
        this.physicsKey = 'villagepost-physics'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("villagepost-pack", "assets/media/rooms/_mission11/villagepost/villagepost-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(751, 426, "villagepost", "Symbol_52");

        // lodgestairs
        this.add.image(953, 433, "village", "lodgestairs");

        // door
        const door = this.add.sprite(1109, 292, "village", "door");

        // lodgefront
        const lodgefront = this.add.image(1065.9336656506036, 372.96198435596614, "village", "lodgefront");
        lodgefront.setOrigin(0.4499370171253708, 0.5276338062737922);

        // lodgesnow
        const lodgesnow = this.add.image(1209.508386024415, 395.462964407251, "village", "lodgesnow");
        lodgesnow.setOrigin(0.7596688233559367, 0.3555316455307134);

        // lodgesmoke0001
        const lodgesmoke0001 = this.add.sprite(1103, 23, "village", "lodgesmoke0001");

        // symbol_100
        const symbol_100 = this.add.image(1086.835092475471, 397.9492556113862, "villagepost", "Symbol_100");
        symbol_100.setOrigin(0.5247781544730886, 0.5192646664421162);

        // sport
        const sport = this.add.image(1164.5984164500321, 418.07393332656875, "villagepost", "Symbol_143");
        sport.setOrigin(0.7818349409529086, 0.747054805672266);

        // lsign
        this.add.image(132, 663, "village", "lsign");

        // seat0001
        const seat0001 = this.add.sprite(291, 137, "village", "seat0001");

        // symbol_152
        const symbol_152 = this.add.image(1177.1068103596876, 655.9777373017696, "villagepost", "Symbol_152");
        symbol_152.setOrigin(0.09048146999919496, 0.7651929371399724);

        // rsign
        const rsign = this.add.image(1488, 791.6162214146171, "village", "rsign");
        rsign.setOrigin(0.5, 1.9411592941520137);

        // symbol_166
        const symbol_166 = this.add.image(1057.202165885558, 728.9159324555553, "villagepost", "Symbol_166");
        symbol_166.setOrigin(-0.0046186267417861636, 0.6739637272904442);

        // symbol_164
        const symbol_164 = this.add.image(762.1433186044469, 760.8823054377775, "villagepost", "Symbol_164");
        symbol_164.setOrigin(0.05047772868148968, 0.6633212404444414);

        // symbol_91
        const symbol_91 = this.add.image(784.7158180053073, 473.11419908453644, "villagepost", "Symbol_91");
        symbol_91.setOrigin(1.0004641287972036, 0.11618317078325037);

        // symbol_156
        const symbol_156 = this.add.image(886.7104333111761, 477.08880192313836, "villagepost", "Symbol_156");
        symbol_156.setOrigin(0.3900803326264917, 0.42487827080315954);

        // videoMask
        const videoMask = this.add.image(564, 234, "villagepost-video-mask");
        videoMask.setOrigin(0, 0);
        videoMask.visible = false;

        // mediaPlayer
        const mediaPlayer = this.add.container(983, 513);

        // videoContainer
        const videoContainer = this.add.container(-417.49942699539315, -274.3475757557864);
        mediaPlayer.add(videoContainer);

        // videoBg
        const videoBg = this.add.image(0, -3, "villagepost-video-mask");
        videoBg.setOrigin(0, 0);
        videoContainer.add(videoBg);

        // movie_screen
        const movie_screen = this.add.image(-7.20481530416896, 14.293883060989174, "villagepost", "mediaplayer");
        movie_screen.setOrigin(0.794156624335972, 0.8285050124485401);
        mediaPlayer.add(movie_screen);

        // symbol_158
        const symbol_158 = this.add.image(706.835342988441, 598.3233834146066, "villagepost", "Symbol_158");
        symbol_158.setOrigin(0.9043698820451912, 0.1934080812362277);

        // symbol_162
        const symbol_162 = this.add.image(745.0736537446957, 796.9241225954493, "villagepost", "Symbol_162");
        symbol_162.setOrigin(0.7849542906738665, 0.5055007297348171);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(1328.9289563999914, 444.4824179094004, 128, 128);
        rectangle_1.scaleX = 1.3196874889629602;
        rectangle_1.scaleY = 1.1368270035322932;
        rectangle_1.setOrigin(0.11478180740947153, 1.0187301609121238);

        // lists
        const sort = [lodgefront, lodgesnow, symbol_152, rsign, symbol_166, symbol_164, symbol_162, symbol_158, symbol_91, symbol_100, sport, symbol_156, mediaPlayer];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.pixelPerfect = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 1069;
        doorMoveTo.y = 318;

        // lodgesmoke0001 (components)
        const lodgesmoke0001Animation = new Animation(lodgesmoke0001);
        lodgesmoke0001Animation.key = "lodgesmoke";
        lodgesmoke0001Animation.end = 5;

        // seat0001 (components)
        const seat0001Animation = new Animation(seat0001);
        seat0001Animation.key = "seat";
        seat0001Animation.end = 210;

        // rectangle_1 (components)
        new MoveTo(rectangle_1);
        new SimpleButton(rectangle_1);

        this.videoMask = videoMask;
        this.videoContainer = videoContainer;
        this.mediaPlayer = mediaPlayer;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create();

        const mask = this.videoMask.createBitmapMask()

        let notl = this.add.video(0, 0).loadURL(`assets/media/rooms/_mission11/livingsledmasked.webm`, true, "anonymous")
        notl.setOrigin(0,0)
        this.videoContainer.add(notl)
        this.notl = notl
        this.notl.play(true);
        notl.displayWidth = 76;
        notl.displayHeight = 76;
        notl.setMask(mask)
        this.videoMask.visible = false

        if(this.id === 200) {
            return
        }

        this.npc1 = this.createNPCPenguin('DiscoGuy24', { color: 10, head: 652, body: 850, x: 645, y: 630, frame: 22 })
        this.npc2 = this.createNPCPenguin('P13723', { color: 9, face: 113, x: 770, y: 635, frame: 21 })
        this.npc3 = this.createNPCPenguin('FlutterFan05', { color: 5, head: 1008, body: 253, x: 895, y: 630, frame: 20 })

        this.rookie = this.createNPCPenguin('Rookie', { color: 2, head: 1257, face: 2030, x: 1120, y: 693, frame: 8 })
        this.gary = this.createNPCPenguin('Gary', { color: 19, face: 115, body: 4022, x: 1050, y: 625 })
        this.dot = this.createNPCPenguin('Dot', { color: 8, body: 380564, x: 1190, y: 625, frame: 2 })

        this.world.party.showDialogue('rookie', 46)
    }

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
