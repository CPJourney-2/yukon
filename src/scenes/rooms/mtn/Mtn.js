/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
import SimpleButton from "../../components/SimpleButton";
import Button from "../../components/Button";
import Waddle100 from "./waddle/Waddle100";
import Waddle101 from "./waddle/Waddle101";
import Waddle102 from "./waddle/Waddle102";
import Waddle103 from "./waddle/Waddle103";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Mtn extends RoomScene {

    constructor() {
        super("Mtn");

        /** @type {Waddle100} */
        this.waddle100;
        /** @type {Waddle101} */
        this.waddle101;
        /** @type {Waddle102} */
        this.waddle102;
        /** @type {Waddle103} */
        this.waddle103;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 480, 560),
            'waddle100': () => this.triggerWaddle(100),
            'waddle101': () => this.triggerWaddle(101),
            'waddle102': () => this.triggerWaddle(102),
            'waddle103': () => this.triggerWaddle(103)
        }

        this.waddles = {}

        // Don't show waddle seat for sled hand items
        this.sleds = [5021, 5046, 5047, 380120]

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("mtn-pack", "assets/media/rooms/mtn/mtn-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-21, -19, "mtn", "bg");
        bg.setOrigin(0, 0);

        // chair
        const chair = this.add.sprite(846, 75, "mtn", "chair/chair0001");
        chair.setOrigin(0, 0);

        // mountain
        const mountain = this.add.image(-21, 214, "mtn", "mountain");
        mountain.setOrigin(0, 0);

        // pole
        const pole = this.add.image(727, 359, "mtn", "pole");
        pole.setOrigin(0.6204081632653061, 0.9194630872483222);

        // sled
        const sled = this.add.image(497.28407128500464, 208.3370784416768, "mtn", "sled");
        sled.setOrigin(0.3721588326974295, 0.12888301211493106);

        // catalogSmall
        const catalogSmall = this.add.sprite(532, 259, "mtn", "catalog_small0001");
        catalogSmall.scaleX = 0.9;
        catalogSmall.scaleY = 0.9;
        catalogSmall.setOrigin(0.6744813674847574, 0.8775708363738939);

        // express
        const express = this.add.image(1065, 809, "mtn", "express");
        express.setOrigin(0.4647887323943662, 0.875);

        // penguinRun
        const penguinRun = this.add.image(524, 606, "mtn", "penguin_run");
        penguinRun.setOrigin(0.6390977443609023, 0.943089430894309);

        // catalog
        const catalog = this.add.image(1423, 941, "mtn", "catalog");
        catalog.setOrigin(0.5133483459728905, 1.1411531919849045);

        // waddle100
        const waddle100 = new Waddle100(this, 261, 499);
        this.add.existing(waddle100);

        // waddle101
        const waddle101 = new Waddle101(this, 581, 668);
        this.add.existing(waddle101);

        // waddle102
        const waddle102 = new Waddle102(this, 856, 717);
        this.add.existing(waddle102);

        // waddle103
        const waddle103 = new Waddle103(this, 1047, 639);
        this.add.existing(waddle103);

        // lists
        const sort = [penguinRun, express, pole, catalog];

        // chair (components)
        const chairAnimation = new Animation(chair);
        chairAnimation.key = "chair/chair";
        chairAnimation.end = 87;

        // catalogSmall (components)
        const catalogSmallSimpleButton = new SimpleButton(catalogSmall);
        catalogSmallSimpleButton.hoverCallback = () => catalogSmall.play('sledCatalog');
        catalogSmallSimpleButton.hoverOutCallback = () => { catalogSmall.anims.stop(); catalogSmall.setFrame('catalog_small0001') };
        catalogSmallSimpleButton.callback = () => this.interface.loadWidget('MtnCatalog');

        // catalog (components)
        const catalogButton = new Button(catalog);
        catalogButton.spriteName = "catalog";
        catalogButton.callback = () => this.interface.loadWidget('MtnCatalog');

        this.waddle100 = waddle100;
        this.waddle101 = waddle101;
        this.waddle102 = waddle102;
        this.waddle103 = waddle103;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    setWaddles(waddles) {
        super.setWaddles(waddles)

        for (const [waddle, seats] of Object.entries(waddles)) {
            // Update waddles to show seats
            for (let i = 0; i < seats.length; i++) {
                this.updateWaddle(waddle, i, seats[i])
            }
        }
    }

    updateWaddle(waddle, seat, username) {
        const show = this.checkShowSeat(username)

        this.getWaddle(waddle)[`seat${seat}`].visible = show

        super.updateWaddle(waddle, seat, username)
    }

    checkShowSeat(username) {
        if (username === null) {
            return false
        }

        const penguin = this.getPenguinByDisplayName(username)
        if (!penguin) {
            return false
        }

        const hand = penguin.items.all.hand.id
        return !this.sleds.includes(hand)
    }

    triggerWaddle(id) {
        const text = this.getString('sled_prompt')

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.world.client.lastSledId = id
            this.network.send('join_waddle', { waddle: id })

            this.interface.prompt.window.visible = false
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
