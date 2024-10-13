import { Button, Interactive, SimpleButton, Zone } from '@components/components'
import BookContainer from '@scenes/interface/books/BookContainer';

import BuyButton from '@scenes/interface/shared_prefabs/BuyButton'

export const preload = {
    key: 'martial-pack',
    url: 'assets/media/interface/catalogs/martial/martial-pack.json',
    loadString: ['loading', 'martial']
}

/* START OF COMPILED CODE */

export default class Martial extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // block
        const block = scene.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // page7
        const page7 = scene.add.container(0, 0);
        page7.visible = false;
        this.add(page7);

        // p7
        const p7 = scene.add.image(760, 480, "martial", "p7");
        page7.add(p7);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(1087, 62, 128, 128);
        rectangle_1.scaleX = 0.33591127706387724;
        rectangle_1.scaleY = 0.3762965831701147;
        page7.add(rectangle_1);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(709, 474, 600, 900);
        rectangle_2.alpha = 1e-22;
        rectangle_2.isFilled = true;
        page7.add(rectangle_2);

        // page6
        const page6 = scene.add.container(0, 0);
        page6.visible = false;
        this.add(page6);

        // p6
        const p6 = scene.add.image(760, 460, "martial", "p6");
        p6.scaleX = 0.9;
        p6.scaleY = 0.9;
        page6.add(p6);

        // buy_4
        const buy_4 = scene.add.image(454, 703, "martial", "buy");
        page6.add(buy_4);

        // page5
        const page5 = scene.add.container(0, 0);
        page5.visible = false;
        this.add(page5);

        // p5
        const p5 = scene.add.image(760, 460, "martial", "p5");
        p5.scaleX = 0.9;
        p5.scaleY = 0.9;
        page5.add(p5);

        // buy_3
        const buy_3 = scene.add.image(454, 703, "martial", "buy");
        page5.add(buy_3);

        // page4
        const page4 = scene.add.container(0, 0);
        page4.visible = false;
        this.add(page4);

        // p4
        const p4 = scene.add.image(760, 460, "martial", "p4");
        p4.scaleX = 0.9;
        p4.scaleY = 0.9;
        page4.add(p4);

        // buy_2
        const buy_2 = scene.add.image(454, 703, "martial", "buy");
        page4.add(buy_2);

        // page3
        const page3 = scene.add.container(0, 0);
        page3.visible = false;
        this.add(page3);

        // p3
        const p3 = scene.add.image(760, 460, "martial", "p3");
        p3.scaleX = 0.9;
        p3.scaleY = 0.9;
        page3.add(p3);

        // buy_1
        const buy_1 = scene.add.image(454, 703, "martial", "buy");
        page3.add(buy_1);

        // page2
        const page2 = scene.add.container(0, 0);
        page2.visible = false;
        this.add(page2);

        // p2
        const p2 = scene.add.image(760, 460, "martial", "p2");
        p2.scaleX = 0.9;
        p2.scaleY = 0.9;
        page2.add(p2);

        // buy
        const buy = scene.add.image(454, 703, "martial", "buy");
        page2.add(buy);

        // page1
        const page1 = scene.add.container(0, 0);
        page1.visible = false;
        this.add(page1);

        // p1
        const p1 = scene.add.image(760, 480, "martial", "p1");
        page1.add(p1);

        // rectangle_next
        const rectangle_next = scene.add.rectangle(753, 469, 128, 128);
        rectangle_next.scaleX = 5.4384234578396535;
        rectangle_next.scaleY = 6.798280187976334;
        page1.add(rectangle_next);

        // buttons
        const buttons = scene.add.container(182, 87);
        buttons.visible = false;
        this.add(buttons);

        // closeRight
        const closeRight = scene.add.image(1011, -2, "martial", "close_right");
        closeRight.setOrigin(0, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = scene.add.image(1001, 549, "martial", "page_right");
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = scene.add.image(-24, 548, "martial", "page_left");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // coins
        const coins = scene.add.text(1130, 791, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7];

        // block (components)
        new Interactive(block);

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.callback = () => this.close();

        // rectangle_2 (components)
        const rectangle_2SimpleButton = new SimpleButton(rectangle_2);
        rectangle_2SimpleButton.callback = () => this.prevPage();

        // buy_4 (components)
        const buy_4Button = new Button(buy_4);
        buy_4Button.spriteName = "buy";
        buy_4Button.callback = () => {this.interface.prompt.showItem(5012)};

        // buy_3 (components)
        const buy_3Button = new Button(buy_3);
        buy_3Button.spriteName = "buy";
        buy_3Button.callback = () => {this.interface.prompt.showFurniture(460)};

        // buy_2 (components)
        const buy_2Button = new Button(buy_2);
        buy_2Button.spriteName = "buy";
        buy_2Button.callback = () => {this.interface.prompt.showFurniture(461)};

        // buy_1 (components)
        const buy_1Button = new Button(buy_1);
        buy_1Button.spriteName = "buy";
        buy_1Button.callback = () => {this.interface.prompt.showIgloo(24)};

        // buy (components)
        const buyButton = new Button(buy);
        buyButton.spriteName = "buy";
        buyButton.callback = () => {this.interface.prompt.showItem(4034)};

        // rectangle_next (components)
        const rectangle_nextSimpleButton = new SimpleButton(rectangle_next);
        rectangle_nextSimpleButton.callback = () => this.nextPage();

        // closeRight (components)
        const closeRightButton = new Button(closeRight);
        closeRightButton.spriteName = "close_right";
        closeRightButton.callback = () => this.close();
        closeRightButton.pixelPerfect = true;

        // pageRight (components)
        const pageRightButton = new Button(pageRight);
        pageRightButton.spriteName = "page_right";
        pageRightButton.callback = () => this.nextPage();
        pageRightButton.pixelPerfect = true;

        // pageLeft (components)
        const pageLeftButton = new Button(pageLeft);
        pageLeftButton.spriteName = "page_left";
        pageLeftButton.callback = () => this.prevPage();
        pageLeftButton.pixelPerfect = true;

        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.setCoins(this.world.client.coins)
    }

    setCoins(coins) {
        this.coins.text = `YOUR COINS: ${coins}`
    }

    buy(item) {
        this.interface.prompt.showFurniture(item)
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
