import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Button, MoveTo, SimpleButton, ShowHint, HoverAnimation, Zone, Animation } from '@components/components'


/* START OF COMPILED CODE */

export default class Beacon extends RoomScene {

    constructor() {
        super("Beacon");

        /** @type {Phaser.GameObjects.Sprite} */
        this.jetpack;
        /** @type {Phaser.GameObjects.Sprite} */
        this.handle0001;
        /** @type {Phaser.GameObjects.Image} */
        this.light0001;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle_invalid;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lighthouse': () => this.triggerRoom(410, 613, 158),
            'jetpack': () => this.triggerGame(926),
            'scope': () => this.interface.loadWidget('Telescope')
        }
        
		this.music = 221;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("beacon-pack", "assets/media/rooms/beacon/beacon-pack.json");
        this.load.pack("fair-beacon-pack", "assets/media/rooms/_fair/beacon/fair-beacon-pack.json");
    }

    /** @returns {void} */
    _create() {

        // background
        this.add.image(760, 462, "fair-beacon", "background");

        // jetpack
        const jetpack = this.add.sprite(1323, 545, "lttop", "jetpack");

        // front
        const front = this.add.image(680.1011190305793, 1002.0445580839471, "fair-beacon", "foreground");
        front.setOrigin(0.5023528975952802, 1.3062909479506062);

        // handle0001
        const handle0001 = this.add.sprite(465, 585, "lttop", "handle0001");
        handle0001.scaleX = 0.886147659042706;
        handle0001.scaleY = 0.886147659042706;
        handle0001.setOrigin(0.44998297772973683, 1.0514148842405089);

        // light0001
        const light0001 = this.add.image(391.2498476291905, 513.6209364923394, "fair-beacon", "beaconMid0001");
        light0001.setOrigin(0.09057948537196672, 0.7638462674554327);

        // yep
        const yep = this.add.image(185.81323498678466, 523.9087662671338, "fair-beacon", "stairRailing");
        yep.setOrigin(0.5889807985193379, 0.1729083732016776);

        // rectangle_invalid
        const rectangle_invalid = this.add.rectangle(-241, 15, 128, 128);
        rectangle_invalid.isFilled = true;

        // zone_light
        const zone_light = this.add.rectangle(462, 508, 90, 128);

        // flag1
        const flag1 = this.add.image(293, 408.980950576777, "fair-beacon", "flag1");
        flag1.setOrigin(0.5, 0.9979484212520829);

        // flag2
        const flag2 = this.add.image(255, 635.4454570458889, "fair-beacon", "flag2");
        flag2.setOrigin(0.5, 0.998789207523775);

        // flag3
        const flag3 = this.add.image(433, 832.4327574304069, "fair-beacon", "flag3");
        flag3.setOrigin(0.5, 1.000693521523088);

        // flag4
        const flag4 = this.add.image(940, 836.8314874688588, "fair-beacon", "flag4");
        flag4.setOrigin(0.5, 1.009256329315649);

        // flag5
        const flag5 = this.add.image(1128, 632.5239330920311, "fair-beacon", "flag5");
        flag5.setOrigin(0.5, 1.0053473158729473);

        // jetpacksign
        const jetpacksign = this.add.sprite(1212, 390.90247453063483, "fair-beacon", "jetpacksign0001");
        jetpacksign.setOrigin(0.5, 0.7746504135797034);

        // lists
        const sort = [light0001, front, yep, flag5, flag4, flag3, flag2, flag1];

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

        // zone_light (components)
        const zone_lightZone = new Zone(zone_light);
        zone_lightZone.callback = () => {this.toggleLight()};

        // jetpacksign (components)
        const jetpacksignAnimation = new Animation(jetpacksign);
        jetpacksignAnimation.key = "jetpacksign";
        jetpacksignAnimation.end = 21;

        this.jetpack = jetpack;
        this.handle0001 = handle0001;
        this.light0001 = light0001;
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
        this.light0001.setTexture('fair-beacon', this.handle0001.__HoverAnimation.currentAnimation == 1 ? 'beaconMid0002' : 'beaconMid0001')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
