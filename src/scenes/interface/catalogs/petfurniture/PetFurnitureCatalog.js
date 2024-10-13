import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Interactive, SimpleButton } from '@components/components'
import BuyButton from '@scenes/interface/shared_prefabs/BuyButton';


export const preload = {
    key: 'petfurniture-pack',
    url: 'assets/media/interface/catalogs/petfurniture/petfurniture-pack.json',
    loadString: ['loading', 'petfurniture']
}

/* START OF COMPILED CODE */

export default class PetFurnitureCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Container} */
        this.puffleHouse;
        /** @type {Phaser.GameObjects.Container} */
        this.largePuffleRug;
        /** @type {Phaser.GameObjects.Container} */
        this.puffleRug;
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

        // page5
        const page5 = scene.add.container(0, 0);
        page5.visible = false;
        this.add(page5);

        // p5
        const p5 = scene.add.image(0, 0, "new-petfurniture", "p5");
        p5.setOrigin(0, 0);
        page5.add(p5);

        // closeLeft
        const closeLeft = scene.add.image(492, 39, "commonbook", "cc-close");
        closeLeft.setOrigin(0, 0);
        closeLeft.flipX = true;
        page5.add(closeLeft);

        // pageLeft_1
        const pageLeft_1 = scene.add.image(490, 591, "commonbook", "cc-page-left");
        pageLeft_1.setOrigin(0, 0);
        page5.add(pageLeft_1);

        // page4
        const page4 = scene.add.container(1, 0);
        page4.visible = false;
        this.add(page4);

        // p4
        const p4 = scene.add.image(0, 0, "new-petfurniture", "p4");
        p4.setOrigin(0, 0);
        page4.add(p4);

        // buyButton_13
        const buyButton_13 = new BuyButton(scene, 405, 411);
        page4.add(buyButton_13);

        // buyButton_14
        const buyButton_14 = new BuyButton(scene, 567, 384);
        page4.add(buyButton_14);

        // buyButton_15
        const buyButton_15 = new BuyButton(scene, 240, 539);
        page4.add(buyButton_15);

        // buyButton_16
        const buyButton_16 = new BuyButton(scene, 408, 557);
        page4.add(buyButton_16);

        // buyButton_17
        const buyButton_17 = new BuyButton(scene, 567, 538);
        page4.add(buyButton_17);

        // buyButton_18
        const buyButton_18 = new BuyButton(scene, 243, 695);
        page4.add(buyButton_18);

        // buyButton_19
        const buyButton_19 = new BuyButton(scene, 411, 701);
        page4.add(buyButton_19);

        // buyButton_20
        const buyButton_20 = new BuyButton(scene, 570, 697);
        page4.add(buyButton_20);

        // buyButton_21
        const buyButton_21 = new BuyButton(scene, 1084, 370);
        page4.add(buyButton_21);

        // buyButton_22
        const buyButton_22 = new BuyButton(scene, 862, 521);
        page4.add(buyButton_22);

        // buyButton_23
        const buyButton_23 = new BuyButton(scene, 1047, 712);
        page4.add(buyButton_23);

        // page3
        const page3 = scene.add.container(0, 0);
        page3.visible = false;
        this.add(page3);

        // p3
        const p3 = scene.add.image(0, 0, "new-petfurniture", "p3");
        p3.setOrigin(0, 0);
        page3.add(p3);

        // buyButton_5
        const buyButton_5 = new BuyButton(scene, 500, 356);
        page3.add(buyButton_5);

        // buyButton_6
        const buyButton_6 = new BuyButton(scene, 331, 538);
        page3.add(buyButton_6);

        // buyButton_7
        const buyButton_7 = new BuyButton(scene, 499, 719);
        page3.add(buyButton_7);

        // buyButton_8
        const buyButton_8 = new BuyButton(scene, 868, 717);
        page3.add(buyButton_8);

        // buyButton_9
        const buyButton_9 = new BuyButton(scene, 1088, 534);
        page3.add(buyButton_9);

        // buyButton_10
        const buyButton_10 = new BuyButton(scene, 862, 354);
        page3.add(buyButton_10);

        // buyButton_11
        const buyButton_11 = new BuyButton(scene, 1088, 167);
        page3.add(buyButton_11);

        // puffleHouse
        const puffleHouse = scene.add.container(755, 470);
        puffleHouse.visible = false;
        page3.add(puffleHouse);

        // greyhouse
        const greyhouse = scene.add.image(5, 10, "new-petfurniture", "greyhouse");
        puffleHouse.add(greyhouse);

        // secret_close_2
        const secret_close_2 = scene.add.image(245, -219, "new-petfurniture", "secret_close");
        puffleHouse.add(secret_close_2);

        // buyButton_12
        const buyButton_12 = new BuyButton(scene, -74, 122);
        puffleHouse.add(buyButton_12);

        // showPuffleHouse
        const showPuffleHouse = scene.add.rectangle(343, 98, 263, 65);
        showPuffleHouse.alpha = 0.0001;
        showPuffleHouse.isFilled = true;
        page3.add(showPuffleHouse);

        // page2
        const page2 = scene.add.container(0, 0);
        page2.visible = false;
        this.add(page2);

        // p2
        const p2 = scene.add.image(0, 0, "new-petfurniture", "p2");
        p2.setOrigin(0, 0);
        page2.add(p2);

        // buyButton
        const buyButton = new BuyButton(scene, 273, 701);
        buyButton.angle = 0;
        page2.add(buyButton);

        // buyButton_1
        const buyButton_1 = new BuyButton(scene, 548, 496);
        buyButton_1.angle = 0;
        page2.add(buyButton_1);

        // buyButton_2
        const buyButton_2 = new BuyButton(scene, 1058, 214);
        buyButton_2.angle = 0;
        page2.add(buyButton_2);

        // buyButton_3
        const buyButton_3 = new BuyButton(scene, 878, 445);
        buyButton_3.angle = 0;
        page2.add(buyButton_3);

        // buyButton_4
        const buyButton_4 = new BuyButton(scene, 1061, 681);
        buyButton_4.angle = 0;
        page2.add(buyButton_4);

        // largePuffleRug
        const largePuffleRug = scene.add.container(760, 205);
        largePuffleRug.visible = false;
        page2.add(largePuffleRug);

        // largepufflecarpet
        const largepufflecarpet = scene.add.image(0, 230, "new-petfurniture", "largepufflecarpet");
        largePuffleRug.add(largepufflecarpet);

        // secret_close_1
        const secret_close_1 = scene.add.image(241, 0, "new-petfurniture", "secret_close");
        largePuffleRug.add(secret_close_1);

        // buyButton_25
        const buyButton_25 = new BuyButton(scene, -80, 345);
        largePuffleRug.add(buyButton_25);

        // puffleRug
        const puffleRug = scene.add.container(760, 205);
        puffleRug.visible = false;
        page2.add(puffleRug);

        // pufflecarpet
        const pufflecarpet = scene.add.image(0, 230, "new-petfurniture", "pufflecarpet");
        puffleRug.add(pufflecarpet);

        // secret_close
        const secret_close = scene.add.image(240, 0, "new-petfurniture", "secret_close");
        puffleRug.add(secret_close);

        // buyButton_24
        const buyButton_24 = new BuyButton(scene, -87, 345);
        puffleRug.add(buyButton_24);

        // showSmallPuffle
        const showSmallPuffle = scene.add.rectangle(338, 421, 120, 100);
        page2.add(showSmallPuffle);

        // showLargePuffle
        const showLargePuffle = scene.add.rectangle(620, 665, 80, 185);
        page2.add(showLargePuffle);

        // page1
        const page1 = scene.add.container(0, 0);
        this.add(page1);

        // p1
        const p1 = scene.add.image(0, 0, "new-petfurniture", "p1");
        p1.setOrigin(0, 0);
        page1.add(p1);

        // pageFront
        const pageFront = scene.add.image(469, 42, "new-petfurniture", "page_front");
        pageFront.setOrigin(0, 0);
        page1.add(pageFront);

        // closeRight_1
        const closeRight_1 = scene.add.image(925, 37, "commonbook", "cc-close");
        closeRight_1.setOrigin(0, 0);
        page1.add(closeRight_1);

        // buttons
        const buttons = scene.add.container(190, 41);
        buttons.visible = false;
        this.add(buttons);

        // closeRight
        const closeRight = scene.add.image(1012, 0, "commonbook", "cc-close");
        closeRight.setOrigin(0, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = scene.add.image(1012, 549, "commonbook", "cc-page-right");
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = scene.add.image(0, 549, "commonbook", "cc-page-left");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // coins
        const coins = scene.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5];

        // block (components)
        new Interactive(block);

        // closeLeft (components)
        const closeLeftButton = new Button(closeLeft);
        closeLeftButton.spriteName = "cc-close";
        closeLeftButton.callback = () => this.close();

        // pageLeft_1 (components)
        const pageLeft_1Button = new Button(pageLeft_1);
        pageLeft_1Button.spriteName = "cc-page-left";
        pageLeft_1Button.callback = () => this.prevPage();
        pageLeft_1Button.pixelPerfect = true;

        // buyButton_13 (prefab fields)
        buyButton_13.item = 232;
        buyButton_13.itemType = "Furniture";

        // buyButton_14 (prefab fields)
        buyButton_14.item = 227;
        buyButton_14.itemType = "Furniture";

        // buyButton_15 (prefab fields)
        buyButton_15.item = 222;
        buyButton_15.itemType = "Furniture";

        // buyButton_16 (prefab fields)
        buyButton_16.item = 200;
        buyButton_16.itemType = "Furniture";

        // buyButton_17 (prefab fields)
        buyButton_17.item = 221;
        buyButton_17.itemType = "Furniture";

        // buyButton_18 (prefab fields)
        buyButton_18.item = 201;
        buyButton_18.itemType = "Furniture";

        // buyButton_19 (prefab fields)
        buyButton_19.item = 202;
        buyButton_19.itemType = "Furniture";

        // buyButton_20 (prefab fields)
        buyButton_20.item = 203;
        buyButton_20.itemType = "Furniture";

        // buyButton_21 (prefab fields)
        buyButton_21.item = 212;
        buyButton_21.itemType = "Furniture";

        // buyButton_22 (prefab fields)
        buyButton_22.item = 225;
        buyButton_22.itemType = "Furniture";

        // buyButton_23 (prefab fields)
        buyButton_23.item = 214;
        buyButton_23.itemType = "Furniture";

        // buyButton_5 (prefab fields)
        buyButton_5.item = 223;
        buyButton_5.itemType = "Furniture";

        // buyButton_6 (prefab fields)
        buyButton_6.item = 208;
        buyButton_6.itemType = "Furniture";

        // buyButton_7 (prefab fields)
        buyButton_7.item = 209;
        buyButton_7.itemType = "Furniture";

        // buyButton_8 (prefab fields)
        buyButton_8.item = 206;
        buyButton_8.itemType = "Furniture";

        // buyButton_9 (prefab fields)
        buyButton_9.item = 207;
        buyButton_9.itemType = "Furniture";

        // buyButton_10 (prefab fields)
        buyButton_10.item = 233;
        buyButton_10.itemType = "Furniture";

        // buyButton_11 (prefab fields)
        buyButton_11.item = 228;
        buyButton_11.itemType = "Furniture";

        // secret_close_2 (components)
        const secret_close_2Button = new Button(secret_close_2);
        secret_close_2Button.spriteName = "secret_close";
        secret_close_2Button.callback = () => this.puffleHouse.visible = false;
        secret_close_2Button.activeFrame = true;

        // buyButton_12 (prefab fields)
        buyButton_12.item = 204;
        buyButton_12.itemType = "Furniture";

        // showPuffleHouse (components)
        const showPuffleHouseSimpleButton = new SimpleButton(showPuffleHouse);
        showPuffleHouseSimpleButton.callback = () => this.puffleHouse.visible = true;

        // buyButton (prefab fields)
        buyButton.item = 211;
        buyButton.itemType = "Furniture";

        // buyButton_1 (prefab fields)
        buyButton_1.item = 210;
        buyButton_1.itemType = "Furniture";

        // buyButton_2 (prefab fields)
        buyButton_2.item = 224;
        buyButton_2.itemType = "Furniture";

        // buyButton_3 (prefab fields)
        buyButton_3.item = 218;
        buyButton_3.itemType = "Furniture";

        // buyButton_4 (prefab fields)
        buyButton_4.item = 220;
        buyButton_4.itemType = "Furniture";

        // secret_close_1 (components)
        const secret_close_1Button = new Button(secret_close_1);
        secret_close_1Button.spriteName = "secret_close";
        secret_close_1Button.callback = () => this.largePuffleRug.visible = false;
        secret_close_1Button.activeFrame = true;

        // buyButton_25 (prefab fields)
        buyButton_25.item = 800001;
        buyButton_25.itemType = "Furniture";

        // secret_close (components)
        const secret_closeButton = new Button(secret_close);
        secret_closeButton.spriteName = "secret_close";
        secret_closeButton.callback = () => this.puffleRug.visible = false;
        secret_closeButton.activeFrame = true;

        // buyButton_24 (prefab fields)
        buyButton_24.item = 800000;
        buyButton_24.itemType = "Furniture";

        // showSmallPuffle (components)
        const showSmallPuffleSimpleButton = new SimpleButton(showSmallPuffle);
        showSmallPuffleSimpleButton.callback = () => this.puffleRug.visible = true;

        // showLargePuffle (components)
        const showLargePuffleSimpleButton = new SimpleButton(showLargePuffle);
        showLargePuffleSimpleButton.callback = () => this.largePuffleRug.visible = true;

        // pageFront (components)
        const pageFrontButton = new Button(pageFront);
        pageFrontButton.spriteName = "page_front";
        pageFrontButton.callback = () => this.nextPage();

        // closeRight_1 (components)
        const closeRight_1Button = new Button(closeRight_1);
        closeRight_1Button.spriteName = "cc-close";
        closeRight_1Button.callback = () => this.close();
        closeRight_1Button.activeFrame = true;

        // closeRight (components)
        const closeRightButton = new Button(closeRight);
        closeRightButton.spriteName = "cc-close";
        closeRightButton.callback = () => this.close();
        closeRightButton.activeFrame = true;
        closeRightButton.pixelPerfect = true;

        // pageRight (components)
        const pageRightButton = new Button(pageRight);
        pageRightButton.spriteName = "cc-page-right";
        pageRightButton.callback = () => this.nextPage();
        pageRightButton.pixelPerfect = true;

        // pageLeft (components)
        const pageLeftButton = new Button(pageLeft);
        pageLeftButton.spriteName = "cc-page-left";
        pageLeftButton.callback = () => this.prevPage();
        pageLeftButton.pixelPerfect = true;

        this.puffleHouse = puffleHouse;
        this.largePuffleRug = largePuffleRug;
        this.puffleRug = puffleRug;
        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
