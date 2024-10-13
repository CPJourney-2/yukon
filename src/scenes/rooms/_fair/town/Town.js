import RoomScene from '@rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'

import RoomPin from '@rooms/RoomPin'
import SharedCoaster from '@rooms/_fair/SharedCoaster'

/* START OF COMPILED CODE */

export default class Town extends RoomScene {

    constructor() {
        super("Town");

        /** @type {Phaser.GameObjects.Sprite} */
        this.canopy_hover;
        /** @type {Phaser.GameObjects.Sprite} */
        this.hoverlights;
        /** @type {Phaser.GameObjects.Sprite} */
        this.disklight;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'dock': () => this.triggerRoom(800, 1200, 400),
            'forts': () => this.triggerRoom(801, 360, 520),
            'coffee': () => this.checkCoffeeTutorial(),
            'dance': () => this.triggerRoom(120, 300, 560),
            'gift': () => this.triggerRoom(130, 1036, 520),
            'welcome': () => this.triggerRoom(1, 570, 570)
        }

        this.music = 297
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("fair-town-pack", "assets/media/rooms/_fair/town/fair-town-pack.json");
    }

    /** @returns {void} */
    _create() {

        // town_reference
        this.add.image(705, 477, "fair-town", "town_reference");

        // bgrink
        const bgrink = this.add.image(730, 450, "bgrink");
        bgrink.visible = false;

        // bg
        const bg = this.add.image(-10, 0, "town", "bg");
        bg.setOrigin(0, 0);

        // town_bg
        this.add.image(652, 477, "fair-town", "town_bg");

        // symbol_236
        const symbol_236 = this.add.image(-103, 1013, "Symbol 236");
        symbol_236.setOrigin(0, 1);

        // left_sign
        const left_sign = this.add.image(179, 449, "fair-town", "arrowleft");
        left_sign.setOrigin(0, 0);

        // right_sign
        const right_sign = this.add.image(1286, 464, "fair-town", "arrowright");
        right_sign.setOrigin(0, 0);

        // coffee_door
        const coffee_door = this.add.image(449, 304, "fair-town", "coffee_door");
        coffee_door.setOrigin(0, 0);

        // gift_door
        const gift_door = this.add.image(995, 293, "fair-town", "gift_door");
        gift_door.setOrigin(0, 0);

        // canopy
        const canopy = this.add.image(692, 463, "fair-town", "canopy_normal");
        canopy.setOrigin(0.49606299212598426, 0.9403669724770642);

        // canopy_hover
        const canopy_hover = this.add.sprite(648, 547, "fair-town", "canopy_hover0001");
        canopy_hover.setOrigin(0, 7.142857142857143);
        canopy_hover.visible = false;

        // canopy_stars
        const canopy_stars = this.add.image(647, 548, "fair-town", "canopy_stars");
        canopy_stars.setOrigin(0, 7.142857142857143);

        // hoverlights
        const hoverlights = this.add.sprite(766, 331, "fair-town", "hoverlights0007");
        hoverlights.setOrigin(0, 0);
        hoverlights.visible = false;

        // hoverlight_star
        this.add.image(824, 356, "fair-town", "hoverlight_star");

        // disk
        this.add.image(826, 300, "fair-town", "disk");

        // disklight
        const disklight = this.add.sprite(828, 299, "fair-town", "disklight0001");

        // lights
        const lights = this.add.sprite(518, -77, "fair-town", "nightlights0001");
        lights.setOrigin(0, 0);

        // box_1
        const box_1 = this.add.image(973, 431, "fair-town", "baskettwo");
        box_1.setOrigin(0.49382716049382713, 0.6268656716417911);

        // box_2
        const box_2 = this.add.image(954, 482, "fair-town", "basketone");
        box_2.setOrigin(0.49504950495049505, 0.6736842105263158);

        // box_3
        const box_3 = this.add.image(1148, 580, "fair-town", "basketthree");
        box_3.setOrigin(0.4943820224719101, 0.5569620253164557);

        // chair_2
        const chair_2 = this.add.image(436, 461, "fair-town", "chairtwo");
        chair_2.setOrigin(0.49382716049382713, 0.27358490566037735);

        // table_2
        const table_2 = this.add.image(485, 522, "fair-town", "tabletwo");
        table_2.setOrigin(0.5, 0.7864077669902912);

        // chair_1
        const chair_1 = this.add.image(402, 510, "fair-town", "chairone");
        chair_1.setOrigin(0.49411764705882355, 0.2857142857142857);

        // table_1
        const table_1 = this.add.image(455, 574, "fair-town", "tableone");
        table_1.setOrigin(0.49572649572649574, 0.7830188679245284);

        // circus_sign
        const circus_sign = this.add.image(245.00000000000003, 1037.039075438053, "fair-town", "circus_sign");
        circus_sign.angle = 11;
        circus_sign.setOrigin(0.2966774913994091, 1.6083109816510845);

        // coffeesign
        const coffeesign = this.add.sprite(224, 371, "fair-town", "coffeesign0001");

        // sign
        this.add.image(356.5, 160.5, "fair-town", "sign");

        // gift_arrow
        const gift_arrow = this.add.sprite(973, 270, "fair-town", "gift_arrow0001");

        // gift_sign
        const gift_sign = this.add.sprite(1053, 163, "fair-town", "gift_sign0001");

        // balloon
        const balloon = this.add.image(1012.470417496413, 689.5872962302714, "fair-town", "balloon");
        balloon.setOrigin(0.52470417496413, 0.5550092964788315);

        // balloon_bottom
        const balloon_bottom = this.add.image(960.0880126953125, 692.2536006163249, "fair-town", "balloon_bottom");
        balloon_bottom.setOrigin(0.5136638135863547, -0.017971188683951367);

        // coaster
        const coaster = new SharedCoaster(this, 0, 0);
        this.add.existing(coaster);

        // lists
        const sort = [box_2, box_1, box_3, chair_2, chair_1, table_1, table_2, canopy, canopy_stars, canopy_hover, circus_sign, balloon, balloon_bottom, symbol_236];

        // coffee_door (components)
        const coffee_doorButton = new Button(coffee_door);
        coffee_doorButton.spriteName = "coffee_door";
        coffee_doorButton.pixelPerfect = true;
        const coffee_doorMoveTo = new MoveTo(coffee_door);
        coffee_doorMoveTo.x = 550;
        coffee_doorMoveTo.y = 450;

        // gift_door (components)
        const gift_doorButton = new Button(gift_door);
        gift_doorButton.spriteName = "gift_door";
        gift_doorButton.pixelPerfect = true;
        const gift_doorMoveTo = new MoveTo(gift_door);
        gift_doorMoveTo.x = 1010;
        gift_doorMoveTo.y = 466;

        // canopy (components)
        const canopySimpleButton = new SimpleButton(canopy);
        canopySimpleButton.hoverCallback = () => this.onCanopyOver();
        canopySimpleButton.hoverOutCallback = () => this.onCanopyOut();
        const canopyMoveTo = new MoveTo(canopy);
        canopyMoveTo.x = 684;
        canopyMoveTo.y = 410;

        // canopy_hover (components)
        const canopy_hoverAnimation = new Animation(canopy_hover);
        canopy_hoverAnimation.key = "canopy_hover";
        canopy_hoverAnimation.end = 57;
        canopy_hoverAnimation.autoPlay = false;
        canopy_hoverAnimation.showOnStart = true;
        canopy_hoverAnimation.hideOnComplete = true;

        // hoverlights (components)
        const hoverlightsAnimation = new Animation(hoverlights);
        hoverlightsAnimation.key = "hoverlights";
        hoverlightsAnimation.end = 57;
        hoverlightsAnimation.autoPlay = false;
        hoverlightsAnimation.showOnStart = true;
        hoverlightsAnimation.hideOnComplete = true;

        // disklight (components)
        const disklightAnimation = new Animation(disklight);
        disklightAnimation.key = "disklight";
        disklightAnimation.start = 2;
        disklightAnimation.end = 13;
        disklightAnimation.autoPlay = false;

        // lights (components)
        const lightsAnimation = new Animation(lights);
        lightsAnimation.key = "nightlights";
        lightsAnimation.end = 69;
        lightsAnimation.repeatDelay = 1;

        // circus_sign (components)
        const circus_signButton = new Button(circus_sign);
        circus_signButton.spriteName = "circus_sign";
        circus_signButton.callback = () => this.interface.loadWidget('FairPoster');

        // coffeesign (components)
        const coffeesignAnimation = new Animation(coffeesign);
        coffeesignAnimation.key = "coffeesign";
        coffeesignAnimation.end = 10;

        // gift_arrow (components)
        const gift_arrowAnimation = new Animation(gift_arrow);
        gift_arrowAnimation.key = "gift_arrow";
        gift_arrowAnimation.end = 25;

        // gift_sign (components)
        const gift_signAnimation = new Animation(gift_sign);
        gift_signAnimation.key = "gift_sign";
        gift_signAnimation.end = 25;

        this.canopy_hover = canopy_hover;
        this.hoverlights = hoverlights;
        this.disklight = disklight;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onCanopyOver() {
        this.disklight.__Animation.play()
        this.hoverlights.__Animation.play()
        this.canopy_hover.__Animation.play()
    }

    onCanopyOut() {
        this.disklight.__Animation.stop()
        this.disklight.setFrame('disklight0001')
        this.hoverlights.__Animation.stop()
        this.canopy_hover.__Animation.stop()
    }

    checkCoffeeTutorial() {
        if (!this.world.client.hasViewedInteraction("coffee_tutorial")) {
            this.triggerRoom(140, 624, 632)
        } else {
            this.triggerRoom(110, 700, 450)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
