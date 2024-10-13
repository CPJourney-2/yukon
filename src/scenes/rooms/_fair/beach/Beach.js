import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'
import SharedCoaster from '@rooms/_fair/SharedCoaster'

import { Button, HoverAnimation, MoveTo, SimpleButton, Animation, SnackStampArea } from '@components/components'


/* START OF COMPILED CODE */

export default class Beach extends RoomScene {

    constructor() {
        super("Beach");

        /** @type {Phaser.GameObjects.Sprite} */
        this.gumballs;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 450, 750),
            'dock': () => this.triggerRoom(800, 240, 420),
            'lighthouse': () => this.triggerRoom(410),
            'ship': () => this.triggerRoom(420)
        }

        this.music = 297

        this.physicsKey = 'fair-beach-physics'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("beach-pack", "assets/media/rooms/beach/beach-pack.json");
        this.load.pack("fair-beach-pack", "assets/media/rooms/_fair/beach/fair-beach-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg2
        this.add.image(745, 479, "fair-beach", "bg2");

        // migrator
        const migrator = this.add.sprite(489, 186, "migrator_docked", "migrator0001");

        // bg1
        this.add.image(727, 237, "fair-beach", "bg1");

        // lighthouse_door
        const lighthouse_door = this.add.image(389, 216, "beach", "lighthouse_door");
        lighthouse_door.setOrigin(0, 0);

        // sign
        const sign = this.add.image(1315, 282, "beach", "sign");
        sign.setOrigin(0, 0);

        // _right
        const _right = this.add.container(1232.617108976682, 536.651388500587);

        // right
        const right = this.add.image(113.38289102331805, -112.65138850058702, "fair-beach", "right");
        _right.add(right);

        // wheel
        const wheel = this.add.image(181.94395625651396, -287, "fair-beach", "wheel");
        wheel.setOrigin(0.4633620018587968, 0.5);
        _right.add(wheel);

        // circle
        const circle = this.add.image(184, -287, "fair-beach", "circle");
        _right.add(circle);

        // barn2
        const barn2 = this.add.image(333, 454, "fair-beach", "barn2");
        barn2.setOrigin(0.5869291190503435, 0.7885093417255271);

        // barn1
        const barn1 = this.add.image(129.01563137704977, 522.0919035546874, "fair-beach", "barn1");
        barn1.setOrigin(0.7439569037527867, 0.9020798162946426);

        // bestinshow
        const bestinshow = this.add.image(926, 421.2495679933403, "fair-beach", "bestinshow");
        bestinshow.setOrigin(0.5, 0.5576068173623491);

        // fence
        const fence = this.add.image(663, 926, "fair-beach", "fence");
        fence.setOrigin(0.5, 1);

        // fence2
        const fence2 = this.add.image(820, 578, "fair-beach", "fence2");
        fence2.setOrigin(0.5, 0.45795538459729523);

        // haaaayyyyyy
        const haaaayyyyyy = this.add.image(951, 710, "fair-beach", "haaaayyyyyy");

        // haaaayyyyyy_1
        const haaaayyyyyy_1 = this.add.image(138, 569, "fair-beach", "haaaayyyyyy");

        // trough
        const trough = this.add.image(457.5904541015625, 506.4254662188365, "fair-beach", "trough");
        trough.setOrigin(0.5666161542334982, 0.22252444848195807);

        // gumballs
        const gumballs = this.add.sprite(532.9873124792033, 384.9386370715874, "fair-beach", "gumballs0001");
        gumballs.setOrigin(0.5288016301333811, 0.8198331021217764);

        // snackStampZone
        const snackStampZone = this.add.rectangle(1210, 575, 150, 150);
        snackStampZone.visible = false;

        // sharedCoaster
        const sharedCoaster = new SharedCoaster(this, 0, 0);
        this.add.existing(sharedCoaster);

        // lists
        const sort = [barn1, barn2, bestinshow, fence, fence2, haaaayyyyyy, haaaayyyyyy_1, trough, gumballs, _right];

        // migrator (components)
        const migratorAnimation = new Animation(migrator);
        migratorAnimation.key = "migrator";
        migratorAnimation.end = 100;

        // lighthouse_door (components)
        const lighthouse_doorButton = new Button(lighthouse_door);
        lighthouse_doorButton.spriteName = "lighthouse_door";
        const lighthouse_doorMoveTo = new MoveTo(lighthouse_door);
        lighthouse_doorMoveTo.x = 480;
        lighthouse_doorMoveTo.y = 400;

        // gumballs (components)
        const gumballsAnimation = new Animation(gumballs);
        gumballsAnimation.key = "gumballs";
        gumballsAnimation.end = 30;
        gumballsAnimation.repeat = 0;
        gumballsAnimation.autoPlay = false;
        const gumballsSimpleButton = new SimpleButton(gumballs);
        gumballsSimpleButton.callback = () => this.gumballs.__Animation.play();

        // snackStampZone (components)
        new SnackStampArea(snackStampZone);

        this.gumballs = gumballs;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    update() {
        super.update()
        this.checkPenguinDanceQuest(30, { body: [4419, 4429, 4420], feet: [6010, 6083, 6085] }, 73, true, null)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
