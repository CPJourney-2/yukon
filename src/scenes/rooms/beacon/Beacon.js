import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Button, MoveTo, SimpleButton, ShowHint, HoverAnimation, Zone } from '@components/components'


/* START OF COMPILED CODE */

export default class Beacon extends RoomScene {

    constructor() {
        super("Beacon");

        /** @type {Phaser.GameObjects.Image} */
        this.inner0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.jetpack;
        /** @type {Phaser.GameObjects.Image} */
        this.light0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.handle0001;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle_invalid;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lighthouse': () => this.triggerRoom(410, 613, 158),
            'jetpack': () => this.triggerGame(926),
            'scope': () => this.interface.loadWidget('Telescope')
        }
        this.music = '583'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("beacon-pack", "assets/media/rooms/beacon/beacon-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(758, 476, "lttop", "bg");

        // inner0001
        const inner0001 = this.add.image(684, 641, "beacon_inner_two", "inner0001");

        // outer
        this.add.image(767, 624, "lttop", "outer");

        // jetpack
        const jetpack = this.add.sprite(1323, 570, "lttop", "jetpack");

        // front
        const front = this.add.image(679, 929, "lttop", "front");
        front.setOrigin(0.5, 1);

        // box
        const box = this.add.image(398.80255126953125, 407.4191535910128, "lttop", "box");
        box.setOrigin(0.9986095164179902, 0.19594844245758283);

        // light0001
        const light0001 = this.add.image(337, 519, "lttop", "light0001");
        light0001.setOrigin(0, 0.7786503750831101);

        // handle0001
        const handle0001 = this.add.sprite(480, 572, "lttop", "handle0001");
        handle0001.scaleX = 0.886147659042706;
        handle0001.scaleY = 0.886147659042706;
        handle0001.setOrigin(0.44998297772973683, 1.0514148842405089);

        // scope
        const scope = this.add.image(249, 295, "lttop", "scope");

        // yep
        const yep = this.add.image(191, 531, "lttop", "Yep");
        yep.setOrigin(0.5889807985193379, 0.1729083732016776);

        // rectangle_invalid
        const rectangle_invalid = this.add.rectangle(-241, 15, 128, 128);
        rectangle_invalid.isFilled = true;

        // zone_light
        const zone_light = this.add.rectangle(462, 508, 90, 128);

        // beacon_reference
        const beacon_reference = this.add.image(0, 0, "Beacon-reference");
        beacon_reference.scaleX = 0.4;
        beacon_reference.scaleY = 0.4;
        beacon_reference.setOrigin(0, 0);
        beacon_reference.visible = false;
        beacon_reference.alpha = 0.5;
        beacon_reference.alphaTopLeft = 0.5;
        beacon_reference.alphaTopRight = 0.5;
        beacon_reference.alphaBottomLeft = 0.5;
        beacon_reference.alphaBottomRight = 0.5;

        // lists
        const sort = [box, light0001, front, yep, handle0001];

        // jetpack (components)
        const jetpackShowHint = new ShowHint(jetpack);
        jetpackShowHint.text = "Jetpack Adventure";
        new MoveTo(jetpack);
        const jetpackSimpleButton = new SimpleButton(jetpack);
        jetpackSimpleButton.hoverCallback = () => this.onJetpackOver();
        jetpackSimpleButton.hoverOutCallback = () => this.onJetpackOverOut();

        // handle0001 (components)
        const handle0001HoverAnimation = new HoverAnimation(handle0001);
        handle0001HoverAnimation.key = "handle";
        handle0001HoverAnimation.checkpoints = "19";
        handle0001HoverAnimation.start = 4;
        handle0001HoverAnimation.end = 29;
        handle0001HoverAnimation.hoverZone = rectangle_invalid;
        handle0001HoverAnimation.clickable = true;

        // scope (components)
        const scopeMoveTo = new MoveTo(scope);
        scopeMoveTo.x = 334;
        scopeMoveTo.y = 390;
        const scopeSimpleButton = new SimpleButton(scope);
        scopeSimpleButton.pixelPerfect = true;

        // zone_light (components)
        const zone_lightZone = new Zone(zone_light);
        zone_lightZone.callback = () => {this.toggleLight()};

        this.inner0001 = inner0001;
        this.jetpack = jetpack;
        this.light0001 = light0001;
        this.handle0001 = handle0001;
        this.rectangle_invalid = rectangle_invalid;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onJetpackOver() {
        this.jetpack.play('beacon-jetpack')
    }

    onJetpackOverOut() {
        this.jetpack.stop()
        this.jetpack.setTexture('lttop', 'jetpack')
    }

    toggleLight() {
        this.handle0001.__HoverAnimation.play();
        this.light0001.setTexture('lttop',this.handle0001.__HoverAnimation.currentAnimation == 1 ? 'light0002' : 'light0001');
        this.inner0001.setTexture('beacon_inner_two',this.handle0001.__HoverAnimation.currentAnimation == 1 ? 'inner0002' : 'inter0001')

    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
