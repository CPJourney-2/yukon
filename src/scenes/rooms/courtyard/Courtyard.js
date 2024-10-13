
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
import SimpleButton from "../../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Courtyard extends RoomScene {

    constructor() {
        super("Courtyard");

        /** @type {Phaser.GameObjects.Image} */
        this.h;
        /** @type {Phaser.GameObjects.Image} */
        this.fraud;
        /** @type {Phaser.GameObjects.Sprite} */
        this.ninjahide;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'dojo': () => this.triggerRoom(320, 485, 227, 0),
            'map': () => this.interface.loadWidget('Map'),
            'hideout': () => this.gotoHideout()
        }        
        this.music = 404
        this.doorLocked = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("courtyard-pack", "assets/media/rooms/courtyard/courtyard-pack.json");
    }

    /** @returns {void} */
    _create() {

        // dojo_opening_ref
        this.add.image(750, 480, "cj-courtyard", "courtyard_ref");

        // j
        this.add.image(751, 311, "cj-courtyard", "j");

        // watefall_side0001
        const watefall_side0001 = this.add.sprite(262, 353, "cj-courtyard", "watefall_side0001");

        // waterfall_back
        this.add.image(298, 353, "cj-courtyard", "waterfall_back");

        // waterfall_sparkles0001
        const waterfall_sparkles0001 = this.add.sprite(290, 356, "cj-courtyard", "waterfall_sparkles0001");

        // waterfall_bottom0001
        const waterfall_bottom0001 = this.add.sprite(294, 339, "cj-courtyard", "waterfall_bottom0001");

        // waterfall_top0001
        const waterfall_top0001 = this.add.sprite(292, 260, "cj-courtyard", "waterfall_top0001");

        // waterfall_gas0001
        this.add.image(293, 416, "cj-courtyard", "waterfall_gas0001");

        // i
        this.add.image(750, 404, "cj-courtyard", "i");

        // h
        const h = this.add.image(276, 614, "cj-courtyard", "h");
        h.visible = false;

        // fraud
        const fraud = this.add.image(276, 615, "cj-courtyard", "h");

        // ninjahide
        const ninjahide = this.add.sprite(270, 618, "cj-courtyard", "ninjahide0001");

        // f
        this.add.image(750, 622, "cj-courtyard", "f");

        // e
        const e = this.add.image(770, 497, "cj-courtyard", "e");

        // d
        this.add.image(954, 377, "cj-courtyard", "d");

        // c
        const c = this.add.image(1245.1216054553904, 790.3386797943771, "cj-courtyard", "c");
        c.setOrigin(0.19020753818204353, 0.5927326741381298);

        // b
        const b = this.add.image(157.0008349447062, 895.4838414087985, "cj-courtyard", "b");
        b.setOrigin(0.4131534390377134, 0.7079152496527487);

        // a
        const a = this.add.image(764.0679321289062, 807.881163292704, "cj-courtyard", "a");
        a.setOrigin(0.4723328854233956, 0.44713690655307137);

        // hideout
        const hideout = this.add.rectangle(270, 609, 130, 150);
        hideout.visible = false;
        hideout.alpha = 0.000001;
        hideout.isFilled = true;

        // lists
        const sort = [a, b, c];

        // watefall_side0001 (components)
        new Animation(watefall_side0001);

        // waterfall_sparkles0001 (components)
        new Animation(waterfall_sparkles0001);

        // waterfall_bottom0001 (components)
        new Animation(waterfall_bottom0001);

        // waterfall_top0001 (components)
        new Animation(waterfall_top0001);

        // h (components)
        const hButton = new Button(h);
        hButton.spriteName = "h";
        const hMoveTo = new MoveTo(h);
        hMoveTo.x = 260;
        hMoveTo.y = 670;

        // e (components)
        const eButton = new Button(e);
        eButton.spriteName = "e";
        const eMoveTo = new MoveTo(e);
        eMoveTo.x = 760;
        eMoveTo.y = 580;

        // hideout (components)
        const hideoutSimpleButton = new SimpleButton(hideout);
        hideoutSimpleButton.hoverCallback = () => this.onHideoutHover();
        hideoutSimpleButton.hoverOutCallback = () => this.onHideoutOut();

        this.h = h;
        this.fraud = fraud;
        this.ninjahide = ninjahide;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create(){
        super.create()

        if(this.world.client.hasItem(104)){
        //if(1 < 2){
            this.ninjahide.play('hideout-hover')
            this.h.visible = true
            this.fraud.visible = false
            this.doorLocked = false
        }
        else{
            this.ninjahide.play('hideout-out')
            this.h.visible = false
            this.fraud.visible = true
        }

    }
    onHideoutHover() {
        this.ninjahide.play('hideout-hover')
    }

    onHideoutOut() {
        this.ninjahide.play('hideout-out')
    }
    gotoHideout() {
        if (this.doorLocked) {
            return;
        }
        this.triggerRoom(318, 860, 600)
    }
    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
