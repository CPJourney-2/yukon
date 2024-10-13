import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, SimpleButton, Zone } from '@components/components'


/* START OF COMPILED CODE */

export default class Shop extends RoomScene {

    constructor() {
        super("Shop");

        /** @type {Phaser.GameObjects.Sprite} */
        this.phone;
        /** @type {Phaser.GameObjects.Sprite} */
        this.register;
        /** @type {Phaser.GameObjects.Image} */
        this.interfaceIcons;
        /** @type {Array<Phaser.GameObjects.Container|Phaser.GameObjects.Image>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 1024, 588),
            'shopoffice': () => this.triggerRoom(131, 400, 600),
            'catalog': () => this.interface.loadWidget('ClothingCatalog')
        }

        this.music = 2372837823
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("shop-pack", "assets/media/rooms/shop/shop-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "shop", "bg");
        bg.setOrigin(0, 0);

        // box
        const box = this.add.image(22, 933, "shop", "box");
        box.setOrigin(0.4098360655737705, 0.7272727272727273);

        // door
        const door = this.add.image(1028, 132, "shop", "door");
        door.setOrigin(0, 0);

        // speaker
        const speaker = this.add.sprite(-2, 175, "shop", "speaker0003");
        speaker.setOrigin(0, 0);

        // container
        const container = this.add.container(1324.9695028627973, 663.5011002882876);

        // counter
        const counter = this.add.image(0.030536885885567244, 1.4989092534428892, "shop", "counter");
        counter.setOrigin(0.4, 0.8102766798418972);
        container.add(counter);

        // phone
        const phone = this.add.sprite(63.03053688588557, -177.5010907465571, "shop", "phone0001");
        phone.setOrigin(0, 0);
        container.add(phone);

        // register
        const register = this.add.sprite(-102.96946311411443, -289.5010907465571, "shop", "register0001");
        register.setOrigin(0, 0);
        container.add(register);

        // registerZone
        const registerZone = this.add.rectangle(1292, 467, 110, 100);
        registerZone.alpha = 0.5;
        registerZone.isFilled = true;
        registerZone.fillColor = 65280;

        // phoneZone
        const phoneZone = this.add.rectangle(1428, 541, 75, 60);
        phoneZone.alpha = 0.5;
        phoneZone.isFilled = true;
        phoneZone.fillColor = 65280;

        // interfaceIcons
        const interfaceIcons = this.add.image(1340, 1046, "shop", "catalog");
        interfaceIcons.setOrigin(0, 2);

        // officedoor
        const officedoor = this.add.image(235, 885, "shop", "officedoor");

        // lists
        const sort = [container, box];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.pixelPerfect = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 1080;
        doorMoveTo.y = 466;

        // speaker (components)
        const speakerSimpleButton = new SimpleButton(speaker);
        speakerSimpleButton.pixelPerfect = true;
        const speakerAnimation = new Animation(speaker);
        speakerAnimation.key = "speaker";
        speakerAnimation.end = 30;
        speakerAnimation.repeat = 0;
        speakerAnimation.autoPlay = false;
        speakerAnimation.onHover = true;
        speakerAnimation.stopOnOut = false;

        // phone (components)
        const phoneAnimation = new Animation(phone);
        phoneAnimation.key = "phone";
        phoneAnimation.end = 55;
        phoneAnimation.repeat = 0;
        phoneAnimation.autoPlay = false;
        phoneAnimation.onHover = true;
        phoneAnimation.stopOnOut = false;

        // register (components)
        const registerAnimation = new Animation(register);
        registerAnimation.key = "register";
        registerAnimation.end = 35;
        registerAnimation.repeat = 0;
        registerAnimation.autoPlay = false;
        registerAnimation.onHover = true;
        registerAnimation.stopOnOut = false;

        // registerZone (components)
        const registerZoneZone = new Zone(registerZone);
        registerZoneZone.hoverCallback = () => this.register.__Animation.play();

        // phoneZone (components)
        const phoneZoneZone = new Zone(phoneZone);
        phoneZoneZone.hoverCallback = () => this.phone.__Animation.play();

        // interfaceIcons (components)
        const interfaceIconsButton = new Button(interfaceIcons);
        interfaceIconsButton.spriteName = "catalog";
        interfaceIconsButton.callback = () => this.interface.loadWidget('ClothingCatalog');
        interfaceIconsButton.pixelPerfect = true;

        // officedoor (components)
        const officedoorButton = new Button(officedoor);
        officedoorButton.spriteName = "officedoor";
        new MoveTo(officedoor);

        this.phone = phone;
        this.register = register;
        this.interfaceIcons = interfaceIcons;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
