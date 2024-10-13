import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive } from '@components/components'

export const preload = {
    key: 'library-pack',
    url: 'assets/media/interface/game/library/library-pack.json',
    loadString: ['loading', 'library']
}


//NOTE: I AM SORRY ABOUT THE ANGLE WORK, WHEN YOU GET TO WORKING ON THIS JUST CHANGE THE ANGLES BACK -ABDUL
//look at the wiki for a good refernce -abdul54

/* START OF COMPILED CODE */

export default class Library extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.pbl_puffle;
        /** @type {Phaser.GameObjects.Image} */
        this.pbl_bulbs;
        /** @type {Phaser.GameObjects.Image} */
        this.pbl_lime;


        // block
        const block = scene.add.rectangle(-14, 18, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // bg
        const bg = scene.add.image(-3, -2, "library", "bg");
        this.add(bg);

        // stowaway
        const stowaway = scene.add.image(-421, -269, "librarybooks", "stowaway");
        this.add(stowaway);

        // franky
        const franky = scene.add.image(-334, -274, "librarybooks", "franky");
        this.add(franky);

        // spice
        const spice = scene.add.image(-254, -273, "librarybooks", "spice");
        this.add(spice);

        // dare
        const dare = scene.add.image(-169, -271, "librarybooks", "dare");
        this.add(dare);

        // pbl_puffle
        const pbl_puffle = scene.add.image(-381, 185, "librarybooks", "pbl_puffle");
        this.add(pbl_puffle);

        // pbl_bulbs
        const pbl_bulbs = scene.add.image(-284, 191, "librarybooks", "pbl_bulbs");
        this.add(pbl_bulbs);

        // pbl_lime
        const pbl_lime = scene.add.image(-181, 187, "librarybooks", "pbl_lime");
        this.add(pbl_lime);

        // yearbook2324
        const yearbook2324 = scene.add.image(408, -262, "librarybooks", "yearbook2324");
        this.add(yearbook2324);

        // talesone
        const talesone = scene.add.image(-36, -254, "librarybooks", "talesone");
        talesone.angle = -10;
        this.add(talesone);

        // talestwo
        const talestwo = scene.add.image(55, -256, "librarybooks", "talestwo");
        talestwo.angle = -10;
        this.add(talestwo);

        // talesthree
        const talesthree = scene.add.image(158, -244, "librarybooks", "talesthree");
        talesthree.angle = -14.999999999999998;
        this.add(talesthree);

        // shelf
        const shelf = scene.add.image(146, 138, "library", "shelf");
        this.add(shelf);

        // buttons_rh_journal
        const buttons_rh_journal = scene.add.image(303, 196, "library", "buttons/rh-journal");
        this.add(buttons_rh_journal);

        // left_candle_holder
        const left_candle_holder = scene.add.image(-574, 326, "library", "left_candle_holder");
        this.add(left_candle_holder);

        // left_candle
        const left_candle = scene.add.image(-644, 228, "library", "left_candle");
        this.add(left_candle);

        // right_candle_holder
        const right_candle_holder = scene.add.image(574, 325, "library", "right_candle_holder");
        this.add(right_candle_holder);

        // right_candle
        const right_candle = scene.add.image(634, 266, "library", "right_candle");
        this.add(right_candle);

        // buttons_close_btn
        const buttons_close_btn = scene.add.image(708, -430, "library", "buttons/close_btn");
        this.add(buttons_close_btn);

        // read the comments
        const read_the_comments = scene.add.rectangle(-215, 14, 128, 128);
        read_the_comments.visible = false;
        read_the_comments.isFilled = true;
        this.add(read_the_comments);

        // block (components)
        new Interactive(block);

        // stowaway (components)
        const stowawayButton = new Button(stowaway);
        stowawayButton.spriteName = "stowaway";
        stowawayButton.callback = () => this.interface.loadWidget('Stowaway');

        // franky (components)
        const frankyButton = new Button(franky);
        frankyButton.spriteName = "franky";
        frankyButton.callback = () => this.interface.loadWidget('Franky');

        // spice (components)
        const spiceButton = new Button(spice);
        spiceButton.spriteName = "spice";
        spiceButton.callback = () => this.interface.loadWidget('Spice');

        // dare (components)
        const dareButton = new Button(dare);
        dareButton.spriteName = "dare";
        dareButton.callback = () => this.interface.loadWidget('Dare');

        // pbl_puffle (components)
        const pbl_puffleButton = new Button(pbl_puffle);
        pbl_puffleButton.spriteName = "pbl_puffle";
        pbl_puffleButton.callback = () => this.triggerGameThree(917);

        // pbl_bulbs (components)
        const pbl_bulbsButton = new Button(pbl_bulbs);
        pbl_bulbsButton.spriteName = "pbl_bulbs";
        pbl_bulbsButton.callback = () => this.triggerGameTwo(918);

        // pbl_lime (components)
        const pbl_limeButton = new Button(pbl_lime);
        pbl_limeButton.spriteName = "pbl_lime";
        pbl_limeButton.callback = () => this.triggerGameOne(919);

        // yearbook2324 (components)
        const yearbook2324Button = new Button(yearbook2324);
        yearbook2324Button.spriteName = "yearbook2324";
        yearbook2324Button.callback = () => this.interface.loadWidget('Yearbook2324');

        // talesone (components)
        const talesoneButton = new Button(talesone);
        talesoneButton.spriteName = "talesone";
        talesoneButton.callback = () => this.interface.loadWidget('PenguinTalesOne');

        // talestwo (components)
        const talestwoButton = new Button(talestwo);
        talestwoButton.spriteName = "talestwo";
        talestwoButton.callback = () => this.interface.loadWidget('PenguinTalesTwo');

        // talesthree (components)
        const talesthreeButton = new Button(talesthree);
        talesthreeButton.spriteName = "talesthree";
        talesthreeButton.callback = () => this.interface.loadWidget('PenguinTalesThree');

        // buttons_rh_journal (components)
        const buttons_rh_journalButton = new Button(buttons_rh_journal);
        buttons_rh_journalButton.spriteName = "buttons/rh-journal";
        buttons_rh_journalButton.callback = () => this.interface.loadWidget('Journal');

        // buttons_close_btn (components)
        const buttons_close_btnButton = new Button(buttons_close_btn);
        buttons_close_btnButton.spriteName = "buttons/close_btn";
        buttons_close_btnButton.callback = () => this.interface.destroyWidget(this);
        buttons_close_btnButton.activeFrame = true;

        this.pbl_puffle = pbl_puffle;
        this.pbl_bulbs = pbl_bulbs;
        this.pbl_lime = pbl_lime;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    triggerGameOne(id){
        this.world.client.penguin.room.triggerGame(919)
    }
    triggerGameTwo(id){
        this.world.client.penguin.room.triggerGame(918)
    }
    triggerGameThree(id){
        this.world.client.penguin.room.triggerGame(917)
    }
    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
