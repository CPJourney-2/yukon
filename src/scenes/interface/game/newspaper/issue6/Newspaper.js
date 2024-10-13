import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

export const preload = {
    key: 'sixth-edition-pack.json',
    url: 'assets/media/interface/game/newspaper/sixth edition/sixth-edition-pack.json',
    loadString: ['loading', 'Newspaper']
}

/* START OF COMPILED CODE */

export default class Newspaper extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // rectangle_1
        const rectangle_1 = scene.add.rectangle(775, 480, 128, 128);
        rectangle_1.scaleX = 11.961414097039036;
        rectangle_1.scaleY = 7.609571892641703;
        this.add(rectangle_1);

        // _page4
        const _page4 = scene.add.container(712, 438);
        _page4.visible = false;
        this.add(_page4);

        // page4
        const page4 = scene.add.image(74, 59, "sixth-edition", "paper0035");
        _page4.add(page4);

        // left_12
        const left_12 = scene.add.image(-595, 322, "newspaperbuttons", "left");
        _page4.add(left_12);

        // close_23
        const close_23 = scene.add.image(693, -298, "newspaperbuttons", "close");
        _page4.add(close_23);

        // main_1
        const main_1 = scene.add.image(-594, -255, "newspaperbuttons", "main");
        _page4.add(main_1);

        // _page3
        const _page3 = scene.add.container(695, 408);
        _page3.visible = false;
        this.add(_page3);

        // page3
        const page3 = scene.add.image(91, 89, "sixth-edition", "paper0019");
        _page3.add(page3);

        // _page2
        const _page2 = scene.add.container(695, 407);
        _page2.visible = false;
        this.add(_page2);

        // page2
        const page2 = scene.add.image(91, 90, "sixth-edition", "paper0011");
        _page2.add(page2);

        // _page1
        const _page1 = scene.add.container(679, 438);
        _page1.visible = false;
        this.add(_page1);

        // page1
        const page1 = scene.add.image(96, 61, "sixth-edition", "paper0001");
        _page1.add(page1);

        // close_1
        const close_1 = scene.add.image(595, -281, "newspaperbuttons", "close");
        _page1.add(close_1);

        // mancally
        const mancally = scene.add.rectangle(-279, -80, 128, 128);
        mancally.scaleX = 2.936192991169804;
        mancally.scaleY = 1.4472187285201359;
        _page1.add(mancally);

        // snowkitten
        const snowkitten = scene.add.rectangle(108, -89, 128, 128);
        snowkitten.scaleX = 2.608448576426685;
        snowkitten.scaleY = 1.4521025367799516;
        snowkitten.angle = -1;
        _page1.add(snowkitten);

        // events
        const events = scene.add.rectangle(473, -96, 128, 128);
        events.scaleX = 2.608448576426685;
        events.scaleY = 1.4521025367799516;
        events.angle = -1;
        _page1.add(events);

        // party_note
        const party_note = scene.add.image(245, 199, "party_note");
        party_note.scaleX = 0.8;
        party_note.scaleY = 0.8;
        _page1.add(party_note);

        // right_1
        const right_1 = scene.add.image(604, 298, "newspaperbuttons", "right");
        _page1.add(right_1);

        // buttons
        const buttons = scene.add.container(4, -41);
        buttons.visible = false;
        this.add(buttons);

        // right
        const right = scene.add.image(1410, 778, "newspaperbuttons", "right");
        buttons.add(right);

        // main
        const main = scene.add.image(113, 225, "newspaperbuttons", "main");
        buttons.add(main);

        // left
        const left = scene.add.image(113, 801, "newspaperbuttons", "left");
        buttons.add(left);

        // close
        const close = scene.add.image(1401, 181, "newspaperbuttons", "close");
        buttons.add(close);

        // coins
        const coins = scene.add.text(538, 196, "", {});
        coins.visible = false;
        buttons.add(coins);

        // lists
        const pages = [_page1, _page2, _page3, _page4];

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // left_12 (components)
        const left_12Button = new Button(left_12);
        left_12Button.spriteName = "left";
        left_12Button.callback = () => { this.prevPage();};
        left_12Button.activeFrame = true;

        // close_23 (components)
        const close_23Button = new Button(close_23);
        close_23Button.spriteName = "close";
        close_23Button.callback = () => {this.interface.destroyWidget(this)};
        close_23Button.activeFrame = true;

        // main_1 (components)
        const main_1Button = new Button(main_1);
        main_1Button.spriteName = "main";
        main_1Button.callback = () => {this.showPage(0)};
        main_1Button.activeFrame = true;

        // close_1 (components)
        const close_1Button = new Button(close_1);
        close_1Button.spriteName = "close";
        close_1Button.callback = () => {this.interface.destroyWidget(this)};
        close_1Button.activeFrame = true;

        // mancally (components)
        const mancallySimpleButton = new SimpleButton(mancally);
        mancallySimpleButton.callback = () => {this.showPage(1)};

        // snowkitten (components)
        const snowkittenSimpleButton = new SimpleButton(snowkitten);
        snowkittenSimpleButton.callback = () => {this.showPage(2)};

        // events (components)
        const eventsSimpleButton = new SimpleButton(events);
        eventsSimpleButton.callback = () => {this.showPage(3)};

        // right_1 (components)
        const right_1Button = new Button(right_1);
        right_1Button.spriteName = "right";
        right_1Button.callback = () => { this.nextPage();};
        right_1Button.activeFrame = true;

        // right (components)
        const rightButton = new Button(right);
        rightButton.spriteName = "right";
        rightButton.callback = () => { this.nextPage();};
        rightButton.activeFrame = true;

        // main (components)
        const mainButton = new Button(main);
        mainButton.spriteName = "main";
        mainButton.callback = () => {this.showPage(0)};
        mainButton.activeFrame = true;

        // left (components)
        const leftButton = new Button(left);
        leftButton.spriteName = "left";
        leftButton.callback = () => { this.prevPage();};
        leftButton.activeFrame = true;

        // close (components)
        const closeButton = new Button(close);
        closeButton.spriteName = "close";
        closeButton.callback = () => {this.interface.destroyWidget(this)};
        closeButton.activeFrame = true;

        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
