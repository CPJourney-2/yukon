import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'

// You can write more code here

/* START OF COMPILED CODE */

export default class Sportshop extends RoomScene {

    constructor() {
        super("Sportshop");

        /** @type {Phaser.GameObjects.Sprite} */
        this.register0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.interfaceIcons;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 1132, 551),
            'psa': () => this.onPsa(),
            'shop': () => this.onCatalog()
        }  

        this.isOut = false

        this.music = 2372837823
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("sportshop-pack", "assets/media/rooms/sportshop/sportshop-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(761, 479, "sportshop", "bg");
        bg.scaleX = 1.016851083269729;
        bg.scaleY = 1.016851083269729;

        // desk
        const desk = this.add.image(1321.7705388556453, 655.9613896226555, "sportshop", "desk");
        desk.scaleX = 1.016851083269729;
        desk.scaleY = 1.016851083269729;
        desk.setOrigin(0.41006122795440964, 0.7574136636698175);

        // phone0001
        const phone0001 = this.add.sprite(1434.64271252848, 699.4777081179842, "sportshop", "phone0001");
        phone0001.scaleX = 1.016851083269729;
        phone0001.scaleY = 1.016851083269729;
        phone0001.setOrigin(0.6292149306624271, 1.54564551260158);

        // ball0001
        const ball0001 = this.add.sprite(1428.1506194542792, 739.6002416249459, "sportshop", "ball0001");
        ball0001.scaleX = 1.016851083269729;
        ball0001.scaleY = 1.016851083269729;
        ball0001.setOrigin(0.45284892142413236, 1.1212402790030584);

        // rowing
        const rowing = this.add.image(1318.8802304239, 815.200083715275, "sportshop", "rowing");
        rowing.scaleX = 1.016851083269729;
        rowing.scaleY = 1.016851083269729;
        rowing.setOrigin(0.35376165440447105, 0.6311240585416843);

        // register0001
        const register0001 = this.add.sprite(1239.1960852695063, 781.7556321083152, "sportshop", "register0001");
        register0001.scaleX = 1.016851083269729;
        register0001.scaleY = 1.016851083269729;
        register0001.setOrigin(0.17365155846415586, 2.3225190457968012);

        // changing
        const changing = this.add.image(230, 492, "sportshop", "changing");
        changing.scaleX = 1.016851083269729;
        changing.scaleY = 1.016851083269729;

        // door
        const door = this.add.sprite(1095, 309, "sportshop", "door");
        door.scaleX = 1.016851083269729;
        door.scaleY = 1.016851083269729;

        // sled
        const sled = this.add.image(99, 654, "sportshop", "sled");
        sled.scaleX = 1.016851083269729;
        sled.scaleY = 1.016851083269729;

        // box
        const box = this.add.image(41, 768, "sportshop", "box");

        // backring
        const backring = this.add.image(133.3184593834646, 727.9330631912853, "sportshop", "backring");
        backring.scaleX = 1.016851083269729;
        backring.scaleY = 1.016851083269729;
        backring.setOrigin(0.30019693852818713, 0.28717196711542364);

        // frontring
        const frontring = this.add.image(172.70022751403064, 792.8788928815964, "sportshop", "frontring");
        frontring.scaleX = 1.016851083269729;
        frontring.scaleY = 1.016851083269729;
        frontring.setOrigin(0.48033250436867153, 0.4988091084700204);

        // goggles
        const goggles = this.add.image(166, 511, "sportshop", "goggles");
        goggles.scaleX = 1.016851083269729;
        goggles.scaleY = 1.016851083269729;

        // speaker0001
        const speaker0001 = this.add.sprite(39, 317, "sportshop", "speaker0001");
        speaker0001.scaleX = 1.016851083269729;
        speaker0001.scaleY = 1.016851083269729;

        // rrr
        const rrr = this.add.image(621, 320, "sportshop", "rrr");
        rrr.scaleX = 1.016851083269729;
        rrr.scaleY = 1.016851083269729;

        // lll
        const lll = this.add.image(511, 266, "sportshop", "lll");
        lll.scaleX = 1.016851083269729;
        lll.scaleY = 1.016851083269729;

        // psa
        const psa = this.add.sprite(404, 420, "sportshop", "psa");
        psa.scaleX = 1.016851083269729;
        psa.scaleY = 1.016851083269729;

        // light
        const light = this.add.image(1416, 109, "sportshop", "light");
        light.scaleX = 1.016851083269729;
        light.scaleY = 1.016851083269729;

        // t3lights
        const t3lights = this.add.image(239, 166, "sportshop", "3lights");
        t3lights.scaleX = 1.016851083269729;
        t3lights.scaleY = 1.016851083269729;

        // interfaceIcons
        const interfaceIcons = this.add.sprite(1404.0000184003459, 864.9999661025114, "sportshop", "book");

        // lists
        const sort = [rowing, ball0001, desk, frontring, backring, box, register0001, phone0001];

        // phone0001 (components)
        const phone0001Animation = new Animation(phone0001);
        phone0001Animation.key = "phone";
        phone0001Animation.end = 55;
        phone0001Animation.repeat = 0;
        phone0001Animation.autoPlay = false;
        phone0001Animation.onHover = true;
        phone0001Animation.stopOnOut = false;
        const phone0001SimpleButton = new SimpleButton(phone0001);
        phone0001SimpleButton.pixelPerfect = true;

        // ball0001 (components)
        const ball0001Animation = new Animation(ball0001);
        ball0001Animation.key = "ball";
        ball0001Animation.end = 37;
        ball0001Animation.repeat = 0;
        ball0001Animation.autoPlay = false;
        ball0001Animation.onHover = true;
        ball0001Animation.stopOnOut = false;
        const ball0001SimpleButton = new SimpleButton(ball0001);
        ball0001SimpleButton.pixelPerfect = true;

        // register0001 (components)
        const register0001SimpleButton = new SimpleButton(register0001);
        register0001SimpleButton.hoverCallback = () => this.onRegOver();
        register0001SimpleButton.hoverOutCallback = () => {};
        register0001SimpleButton.pixelPerfect = true;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 1086;
        doorMoveTo.y = 486;

        // speaker0001 (components)
        const speaker0001Animation = new Animation(speaker0001);
        speaker0001Animation.key = "speaker";
        speaker0001Animation.end = 30;

        // psa (components)
        const psaButton = new Button(psa);
        psaButton.spriteName = "psa";
        const psaMoveTo = new MoveTo(psa);
        psaMoveTo.x = 401;
        psaMoveTo.y = 486;

        // interfaceIcons (components)
        const interfaceIconsButton = new Button(interfaceIcons);
        interfaceIconsButton.spriteName = "book";
        interfaceIconsButton.callback = () => this.onCatalog();

        this.register0001 = register0001;
        this.interfaceIcons = interfaceIcons;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create(){
        super.create()
    }
    onCatalog() {
        this.interface.loadWidget('SportsCatalog')
    }

    onPsa() {
        if(this.world.client.hasItem(800)){
            this.triggerRoom(803, 257, 600)
        }
        else{
            this.onCatalog()
        }
    }

    onRegOver() {
        if (this.isOut) {
            this.register0001.play("down")
            this.isOut = !this.isOut
            return
        }

        this.register0001.play("up")
        this.isOut = !this.isOut
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
