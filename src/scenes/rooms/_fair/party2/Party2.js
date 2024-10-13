import RoomScene from '@rooms/RoomScene'

import { Animation, Button, MoveTo, ZoneTrigger, SimpleButton, ShowHint } from '@components/components'

import RoomPin from '@rooms/RoomPin'

/* START OF COMPILED CODE */

export default class Party2 extends RoomScene {

    constructor() {
        super("Party2");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'exit': () => this.triggerRoom(809, 787, 330),
        }

        this.music = 221;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("fair-party2-pack", "assets/media/rooms/_fair/party2/fair-party2-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bgParty1
        const bgParty1 = this.add.image(-198, -8, "fair-party2", "bgParty2");
        bgParty1.setOrigin(0, 0);

        // soda_png
        const soda_png = this.add.image(510, 811.0699611254125, "fair-party2", "soda");
        soda_png.setOrigin(0.5, 0.7623211971750746);

        // button0001_png
        const button0001_png = this.add.image(333.56336636940216, 484.2485155833147, "fair-party2", "button0001");
        button0001_png.setOrigin(0.5242588282419325, 1.005948453924113);

        // tent_1
        this.add.image(320, 297, "fair-party2", "tent");

        // lights0001
        const lights0001 = this.add.sprite(339, 214, "fair-party2", "lights0001");

        // fgTree_png
        this.add.image(88, 355, "fair-party2", "fgTree");

        // fgMiddle_png
        const fgMiddle_png = this.add.image(840, 648.4306407653928, "fair-party2", "fgMiddle");
        fgMiddle_png.setOrigin(0.5, 0.698036692294458);

        // fgRock_png
        this.add.image(1017, 807, "fair-party2", "fgRock");

        // fg_png
        const fg_png = this.add.image(740.3290932651265, 889.9507512365236, "fair-party2", "fg");
        fg_png.setOrigin(0.4983369198412992, 0.8495131860088352);

        // circusTrigger
        const circusTrigger = this.add.rectangle(928, 424, 300, 300);

        // circusTrigger_1
        const circusTrigger_1 = this.add.rectangle(334, 455, 300, 100);

        // lists
        const sort = [fg_png, soda_png, fgMiddle_png];

        // button0001_png (components)
        const button0001_pngButton = new Button(button0001_png);
        button0001_pngButton.spriteName = "button";
        new MoveTo(button0001_png);

        // lights0001 (components)
        const lights0001Animation = new Animation(lights0001);
        lights0001Animation.key = "lights";
        lights0001Animation.end = 10;

        // circusTrigger (components)
        new SimpleButton(circusTrigger);
        new MoveTo(circusTrigger);
        const circusTriggerZoneTrigger = new ZoneTrigger(circusTrigger);
        circusTriggerZoneTrigger.callback = () => this.triggerRoom(853, 800, 800);

        // circusTrigger_1 (components)
        const circusTrigger_1ZoneTrigger = new ZoneTrigger(circusTrigger_1);
        circusTrigger_1ZoneTrigger.callback = () => this.interface.loadWidget('PrizeBooth3');

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onTent() {
        this.water.__Animation.play();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
