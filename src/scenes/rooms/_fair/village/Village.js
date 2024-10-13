import RoomScene from '@rooms/RoomScene'

import { Animation, Button, MoveTo, ZoneTrigger, SimpleButton, SnackStampArea } from '@components/components'

import RoomPin from '@rooms/RoomPin'

import SharedCoaster from '@rooms/_fair/SharedCoaster'

/* START OF COMPILED CODE */

export default class Village extends RoomScene {

    constructor() {
        super("Village");

        /** @type {Phaser.GameObjects.Sprite} */
        this.tubes;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flash;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lodge': () => this.triggerRoom(220, 320, 640),
            'dock': () => this.triggerRoom(800, 436, 280),
            'beach': () => this.triggerRoom(400, 920, 360),
            'mtn': () => this.triggerRoom(230, 840, 320),
            'sport': () => this.triggerRoom(210, 1069, 526)
        }

        this.music = 297

        this.cameraClicked = false

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("fair-village-pack", "assets/media/rooms/_fair/village/fair-village-pack.json");
        this.load.pack("village-pack", "assets/media/rooms/village/village-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bgVillage
        const bgVillage = this.add.image(-30, -7, "newVillage");
        bgVillage.setOrigin(0, 0);

        // lift
        const lift = this.add.sprite(296, 143, "fair-village", "lift0001");

        // lodge
        const lodge = this.add.image(1019.0159088938191, 412.5327106864709, "fair-village", "lodge");
        lodge.setOrigin(0.3617866196287013, 0.9755923669609567);

        // lodgeStairs
        this.add.image(1039, 429, "fair-village", "lodgeStairs");

        // lodgeDeck
        this.add.image(1128, 378, "fair-village", "lodgeDeck");

        // lodgeFront
        this.add.image(1150, 424, "fair-village", "lodgeFront");

        // sport
        this.add.image(1357, 376, "fair-village", "sport");

        // lobby
        const lobby = this.add.image(1352.2399576303085, 446.28479860983157, "fair-village", "lobby");
        lobby.setOrigin(0.18164926613561072, 0.8751328191214945);

        // sportSled
        const sportSled = this.add.image(1427, 407, "fair-village", "sportSled");

        // sportRedThing
        const sportRedThing = this.add.image(1472, 524, "fair-village", "sportRedThing");

        // tubes
        const tubes = this.add.sprite(1360, 576.1312077740401, "fair-village", "tubes0001");
        tubes.setOrigin(0.5, 0.7706358167510181);

        // smoke
        const smoke = this.add.sprite(1132, 42, "fair-village", "smoke0001");

        // photoBG1
        const photoBG1 = this.add.image(682, 730.3316982877232, "fair-village", "photoBG1");
        photoBG1.setOrigin(0.5, 0.7181312437048646);

        // photoBG2
        const photoBG2 = this.add.image(958, 720.2314530308817, "fair-village", "photoBG2");
        photoBG2.setOrigin(0.5, 0.8233718153122354);

        // photoBG3
        const photoBG3 = this.add.image(1216, 759.1980379452679, "fair-village", "photoBG3");
        photoBG3.setOrigin(0.5, 0.791795237480606);

        // snacksBG
        this.add.image(387, 756, "fair-village", "snacksBG");

        // snacks
        const snacks = this.add.image(375, 822.8304720035155, "fair-village", "snacks");
        snacks.setOrigin(0.5, 0.8859868847714332);

        // stand
        const stand = this.add.image(1160.916015625, 764.6016249780504, "fair-village", "stand");
        stand.setOrigin(0.5071568466529488, 0.17729127819431378);

        // signRight
        this.add.image(1484, 652, "fair-village", "signRight");

        // bale1
        const bale1 = this.add.image(1046, 498, "fair-village", "bale1");

        // bale2
        const bale2 = this.add.image(1088.3397746476712, 507.770217019952, "fair-village", "bale2");
        bale2.setOrigin(0.49184834940212946, 0.7353486449840446);

        // flash
        const flash = this.add.sprite(936, 880, "fair-village", "flash0001");
        flash.setOrigin(0.5454545454545454, 1.4506172839506173);

        // camera
        const camera = this.add.image(966, 905.59299185953, "fair-village", "camera");
        camera.setOrigin(0.5, 0.7026025950962251);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(1162, 815, 128, 128);
        rectangle_1.scaleY = 0.6982373154023555;
        rectangle_1.setOrigin(0.5, 0.7650333255170416);

        // rectangle
        const rectangle = this.add.rectangle(1155, 779, 128, 128);
        rectangle.scaleY = 1.2302276782269805;
        rectangle.setOrigin(1.9921875, 0.015680182685590793);

        // rectangle_2
        const rectangle_2 = this.add.rectangle(834, 517, 250, 70);
        rectangle_2.setOrigin(0.5, 0.7650333255170416);

        // tubesHit
        const tubesHit = this.add.rectangle(1546, 474, 128, 128);
        tubesHit.scaleY = 1.2302276782269805;
        tubesHit.setOrigin(1.9921875, 0.015680182685590793);

        // rectangle_3
        const rectangle_3 = this.add.rectangle(905, 649, 80, 60);
        rectangle_3.fillColor = 65280;
        rectangle_3.fillAlpha = 0.5;

        // snackStampZone
        const snackStampZone = this.add.rectangle(385, 790, 150, 150);
        snackStampZone.visible = false;

        // _tent
        const _tent = this.add.container(819.5521850585938, 464.774169921875);

        // tent1
        const tent1 = this.add.image(22.44780729753586, -81.7741551553093, "fair-village", "tent1");
        _tent.add(tent1);

        // lights0001
        const lights0001 = this.add.sprite(13, -135, "fair-village", "lights0001");
        _tent.add(lights0001);

        // sharedCoaster
        const sharedCoaster = new SharedCoaster(this, 0, 0);
        this.add.existing(sharedCoaster);

        // lists
        const sort = [snacks, photoBG1, photoBG3, photoBG2, tubes, sportRedThing, sportSled, stand, bale2, bale1, camera, flash, _tent];

        // lift (components)
        const liftAnimation = new Animation(lift);
        liftAnimation.key = "lift";
        liftAnimation.end = 210;

        // lodge (components)
        const lodgeButton = new Button(lodge);
        lodgeButton.spriteName = "lodge";
        lodgeButton.pixelPerfect = true;
        new MoveTo(lodge);

        // lobby (components)
        const lobbyButton = new Button(lobby);
        lobbyButton.spriteName = "lobby";
        lobbyButton.pixelPerfect = true;
        new MoveTo(lobby);

        // tubes (components)
        const tubesAnimation = new Animation(tubes);
        tubesAnimation.key = "tubes";
        tubesAnimation.end = 34;
        tubesAnimation.repeat = 0;
        tubesAnimation.autoPlay = false;

        // smoke (components)
        const smokeAnimation = new Animation(smoke);
        smokeAnimation.key = "smoke";
        smokeAnimation.end = 5;

        // flash (components)
        const flashAnimation = new Animation(flash);
        flashAnimation.key = "flash";
        flashAnimation.end = 13;
        flashAnimation.repeat = 0;
        flashAnimation.autoPlay = false;

        // rectangle_1 (components)
        const rectangle_1ZoneTrigger = new ZoneTrigger(rectangle_1);
        rectangle_1ZoneTrigger.callback = () => this.onCamera();

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.callback = () => { this.cameraClicked = true };
        new MoveTo(rectangle);

        // rectangle_2 (components)
        const rectangle_2ZoneTrigger = new ZoneTrigger(rectangle_2);
        rectangle_2ZoneTrigger.callback = () => this.interface.loadWidget('PrizeBooth1');

        // tubesHit (components)
        const tubesHitSimpleButton = new SimpleButton(tubesHit);
        tubesHitSimpleButton.hoverCallback = () => { this.tubes.__Animation.play() };

        // rectangle_3 (components)
        const rectangle_3ZoneTrigger = new ZoneTrigger(rectangle_3);
        rectangle_3ZoneTrigger.callback = () => this.world.client.questComplete(63);

        // snackStampZone (components)
        new SnackStampArea(snackStampZone);

        // tent1 (components)
        const tent1Button = new Button(tent1);
        tent1Button.spriteName = "tent1";
        tent1Button.pixelPerfect = true;
        const tent1MoveTo = new MoveTo(tent1);
        tent1MoveTo.x = 830;
        tent1MoveTo.y = 525;

        // lights0001 (components)
        const lights0001Animation = new Animation(lights0001);
        lights0001Animation.key = "lights";
        lights0001Animation.end = 10;

        this.tubes = tubes;
        this.flash = flash;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onCamera() {
        if(!this.cameraClicked) return
        this.flash.__Animation.play();
        setTimeout(() => {
            this.cameraClicked = false
            if(this.world.client.hasItem(9115)) return
            this.interface.prompt.showItem(9115)
        }, 1000);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
