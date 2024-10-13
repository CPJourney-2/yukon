import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

export const preload = {
    key: 'firstedition-pack.json',
    url: 'assets/media/interface/game/newspaper/first edition/firstedition-pack.json',
    loadString: ['loading', 'Newspaper']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class Newspaper extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // rectangle_1
        const rectangle_1 = scene.add.rectangle(754, 462, 128, 128);
        rectangle_1.scaleX = 16.354524475649956;
        rectangle_1.scaleY = 10.09355476208595;
        this.add(rectangle_1);

        // page3
        const page3 = scene.add.container(760, 178);
        page3.visible = false;
        this.add(page3);

        // newspaper00013
        const newspaper00013 = scene.add.image(0, 342, "firstEdition", "newspaper0035");
        page3.add(newspaper00013);

        // bottomleft
        const bottomleft = scene.add.sprite(-661, 606, "firstEdition", "bottomleft");
        page3.add(bottomleft);

        // closeaaa
        const closeaaa = scene.add.sprite(628, -14, "firstEdition", "close");
        page3.add(closeaaa);

        // page2
        const page2 = scene.add.container(760, 178);
        page2.visible = false;
        this.add(page2);

        // newspaper00012
        const newspaper00012 = scene.add.image(0, 342, "firstEdition", "newspaper0019");
        page2.add(newspaper00012);

        // page1
        const page1 = scene.add.container(760, 178);
        this.add(page1);

        // newspaper0001
        const newspaper0001 = scene.add.image(0, 342, "firstEdition", "newspaper0001");
        page1.add(newspaper0001);

        // closeBtn
        const closeBtn = scene.add.sprite(507, 0, "firstEdition", "close");
        page1.add(closeBtn);

        // right_12
        const right_12 = scene.add.sprite(516, 578, "firstEdition", "right");
        page1.add(right_12);

        // buttons
        const buttons = scene.add.container(99, 163);
        buttons.visible = false;
        this.add(buttons);

        // close_1
        const close_1 = scene.add.sprite(1288, 0, "firstEdition", "close");
        buttons.add(close_1);

        // left
        const left = scene.add.sprite(0, 42, "firstEdition", "left");
        buttons.add(left);

        // right
        const right = scene.add.sprite(1299, 596, "firstEdition", "right");
        buttons.add(right);

        // coins
        const coins = scene.add.text(-1556.2764892578125, -336.9952087402344, "", {});
        coins.visible = false;
        coins.text = "New text";
        buttons.add(coins);

        // bottomleft_1
        const bottomleft_1 = scene.add.sprite(-1, 620, "firstEdition", "bottomleft");
        buttons.add(bottomleft_1);

        // firstpagetrigger
        const firstpagetrigger = scene.add.rectangle(400, 375, 128, 128);
        firstpagetrigger.scaleX = 3.0738244752722474;
        firstpagetrigger.scaleY = 1.5536977574051745;
        firstpagetrigger.angle = -1;
        this.add(firstpagetrigger);

        // firstpagetrigger_1
        const firstpagetrigger_1 = scene.add.rectangle(788, 367, 128, 128);
        firstpagetrigger_1.scaleX = 2.6571141616538725;
        firstpagetrigger_1.scaleY = 1.5536977574051745;
        firstpagetrigger_1.angle = -1;
        this.add(firstpagetrigger_1);

        // lists
        const pages = [page1, page2, page3];

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // bottomleft (components)
        const bottomleftButton = new Button(bottomleft);
        bottomleftButton.spriteName = "bottomleft";
        bottomleftButton.callback = () => {this.prevPage();};

        // closeaaa (components)
        const closeaaaButton = new Button(closeaaa);
        closeaaaButton.spriteName = "close";
        closeaaaButton.callback = () => {this.interface.destroyWidget(this)};

        // closeBtn (components)
        const closeBtnButton = new Button(closeBtn);
        closeBtnButton.spriteName = "close";
        closeBtnButton.callback = () => this.interface.destroyWidget(this);

        // right_12 (components)
        const right_12Button = new Button(right_12);
        right_12Button.spriteName = "right";
        right_12Button.callback = () => { this.nextPage();};

        // close_1 (components)
        const close_1Button = new Button(close_1);
        close_1Button.spriteName = "close";
        close_1Button.callback = () => {this.interface.destroyWidget(this)};

        // left (components)
        const leftButton = new Button(left);
        leftButton.spriteName = "left";
        leftButton.callback = () => {this.prevPage();};

        // right (components)
        const rightButton = new Button(right);
        rightButton.spriteName = "right";
        rightButton.callback = () => { this.nextPage();};

        // bottomleft_1 (components)
        const bottomleft_1Button = new Button(bottomleft_1);
        bottomleft_1Button.spriteName = "bottomleft";
        bottomleft_1Button.callback = () => {this.prevPage();};

        // firstpagetrigger (components)
        const firstpagetriggerSimpleButton = new SimpleButton(firstpagetrigger);
        firstpagetriggerSimpleButton.callback = () => {this.showPage(1)};

        // firstpagetrigger_1 (components)
        const firstpagetrigger_1SimpleButton = new SimpleButton(firstpagetrigger_1);
        firstpagetrigger_1SimpleButton.callback = () => {this.showPage(2)};

        this.buttons = buttons;
        this.coins = coins;
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
