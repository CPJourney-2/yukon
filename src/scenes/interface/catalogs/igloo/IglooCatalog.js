import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Interactive, SimpleButton } from '@components/components'

import UpgradeButton from '@scenes/interface/shared_prefabs/UpgradeButton'
import BuyButton from '@scenes/interface/shared_prefabs/BuyButton'


export const preload = {
    key: 'igloocatalog-pack',
    url: 'assets/media/interface/catalogs/igloo/igloocatalog-pack.json',
    loadString: ['loading', 'igloocatalog']
}

/* START OF COMPILED CODE */

export default class IglooCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Container} */
        this.secret_4;
        /** @type {Phaser.GameObjects.Container} */
        this.secret_bamboo;
        /** @type {Phaser.GameObjects.Container} */
        this.secret_camping;
        /** @type {Phaser.GameObjects.Container} */
        this.secret_circus;
        /** @type {Phaser.GameObjects.Container} */
        this.secret_cave;
        /** @type {Phaser.GameObjects.Container} */
        this.secret_bigcandy;
        /** @type {Phaser.GameObjects.Container} */
        this.secret;
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

        // page11
        const page11 = scene.add.container(0, 0);
        this.add(page11);

        // page_11
        const page_11 = scene.add.image(760, 480, "nov-dec-igloocatalog", "novdecrear");
        page11.add(page_11);

        // close_left_111111
        const close_left_111111 = scene.add.image(493, 39, "commonbook", "cc-close");
        close_left_111111.setOrigin(0, 0);
        close_left_111111.flipX = true;
        page11.add(close_left_111111);

        // page_left_1_11111
        const page_left_1_11111 = scene.add.image(493, 589, "commonbook", "cc-page-left");
        page_left_1_11111.setOrigin(0, 0);
        page11.add(page_left_1_11111);

        // page10
        const page10 = scene.add.container(0, 0);
        page10.visible = false;
        this.add(page10);

        // page_10
        const page_10 = scene.add.image(760, 480, "igloocatalog", "10");
        page10.add(page_10);

        // upgradeButton_10L
        const upgradeButton_10L = new UpgradeButton(scene, 297, 540);
        page10.add(upgradeButton_10L);

        // upgradeButton_10R
        const upgradeButton_10R = new UpgradeButton(scene, 867, 542);
        page10.add(upgradeButton_10R);

        // rectangle_10
        const rectangle_10 = scene.add.rectangle(967, 454, 42, 138);
        rectangle_10.scaleY = 0.5564219459795425;
        rectangle_10.alpha = 0.00005;
        rectangle_10.isFilled = true;
        page10.add(rectangle_10);

        // rectangle_4
        const rectangle_4 = scene.add.rectangle(310, 455, 46, 116);
        rectangle_4.scaleY = 0.5564219459795425;
        rectangle_4.alpha = 0.00005;
        rectangle_4.isFilled = true;
        page10.add(rectangle_4);

        // secret_4
        const secret_4 = scene.add.container(0, 0);
        secret_4.visible = false;
        page10.add(secret_4);

        // secret_2_img
        const secret_2_img = scene.add.image(804, 430, "igloocatalog", "secret2");
        secret_4.add(secret_2_img);

        // sbtn_5
        const sbtn_5 = scene.add.image(1020, 251, "igloocatalog", "sbtn");
        secret_4.add(sbtn_5);

        // upgradeButton_26
        const upgradeButton_26 = new UpgradeButton(scene, 531, 491);
        secret_4.add(upgradeButton_26);

        // page9
        const page9 = scene.add.container(0, 0);
        page9.visible = false;
        this.add(page9);

        // page_9
        const page_9 = scene.add.image(760, 480, "igloocatalog", "9");
        page9.add(page_9);

        // upgradeButton_9L
        const upgradeButton_9L = new UpgradeButton(scene, 297, 573);
        page9.add(upgradeButton_9L);

        // upgradeButton_9R
        const upgradeButton_9R = new UpgradeButton(scene, 867, 532);
        page9.add(upgradeButton_9R);

        // page8
        const page8 = scene.add.container(0, 0);
        page8.visible = false;
        this.add(page8);

        // page_8
        const page_8 = scene.add.image(760, 480, "igloocatalog", "8");
        page8.add(page_8);

        // upgradeButton_8L
        const upgradeButton_8L = new UpgradeButton(scene, 297, 575);
        page8.add(upgradeButton_8L);

        // upgradeButton_8R
        const upgradeButton_8R = new UpgradeButton(scene, 867, 532);
        page8.add(upgradeButton_8R);

        // page7
        const page7 = scene.add.container(0, -3);
        page7.visible = false;
        this.add(page7);

        // page_7
        const page_7 = scene.add.image(760, 484, "sept-oct-igloocatalog", "page_5_sept_oct");
        page7.add(page_7);

        // upgradeButton_5L
        const upgradeButton_5L = new UpgradeButton(scene, 298, 553);
        page7.add(upgradeButton_5L);

        // upgradeButton_5R
        const upgradeButton_5R = new UpgradeButton(scene, 874, 556);
        page7.add(upgradeButton_5R);

        // secret_bamboo
        const secret_bamboo = scene.add.container(0, 3);
        secret_bamboo.visible = false;
        page7.add(secret_bamboo);

        // secret_bamboo_
        const secret_bamboo_ = scene.add.image(782, 366, "igloocatalog", "secret3");
        secret_bamboo.add(secret_bamboo_);

        // sbtn_bamboo_1
        const sbtn_bamboo_1 = scene.add.image(982, 182, "igloocatalog", "sbtn");
        sbtn_bamboo_1.scaleX = 0.9;
        sbtn_bamboo_1.scaleY = 0.9;
        secret_bamboo.add(sbtn_bamboo_1);

        // upgradeButton_bamboo
        const upgradeButton_bamboo = new UpgradeButton(scene, 518, 437);
        secret_bamboo.add(upgradeButton_bamboo);

        // secret_camping
        const secret_camping = scene.add.container(0, 3);
        secret_camping.visible = false;
        page7.add(secret_camping);

        // secret_camping_
        const secret_camping_ = scene.add.image(685, 414, "sept-oct-igloocatalog", "secret_camping");
        secret_camping.add(secret_camping_);

        // sbtn_camping_1
        const sbtn_camping_1 = scene.add.image(935, 215, "igloocatalog", "sbtn");
        secret_camping.add(sbtn_camping_1);

        // upgradeButton_camping
        const upgradeButton_camping = new UpgradeButton(scene, 439, 511);
        secret_camping.add(upgradeButton_camping);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(455, 334, 30, 30);
        page7.add(rectangle_2);

        // rectangle_5
        const rectangle_5 = scene.add.rectangle(882, 449, 20, 40);
        page7.add(rectangle_5);

        // page6
        const page6 = scene.add.container(0, 0);
        page6.visible = false;
        this.add(page6);

        // page_6
        const page_6 = scene.add.image(760, 480, "sept-oct-igloocatalog", "page_4_sept_oct");
        page6.add(page_6);

        // upgradeButton_4L
        const upgradeButton_4L = new UpgradeButton(scene, 293, 577);
        page6.add(upgradeButton_4L);

        // upgradeButton_4R
        const upgradeButton_4R = new UpgradeButton(scene, 874, 575);
        page6.add(upgradeButton_4R);

        // secret_circus
        const secret_circus = scene.add.container(0, 0);
        secret_circus.visible = false;
        page6.add(secret_circus);

        // secret_circus_
        const secret_circus_ = scene.add.image(752, 438, "sept-oct-igloocatalog", "secret_circus");
        secret_circus.add(secret_circus_);

        // sbtn_circus_1
        const sbtn_circus_1 = scene.add.image(1009, 239, "igloocatalog", "sbtn");
        secret_circus.add(sbtn_circus_1);

        // upgradeButton_circus
        const upgradeButton_circus = new UpgradeButton(scene, 514, 527);
        secret_circus.add(upgradeButton_circus);

        // rectangle_3
        const rectangle_3 = scene.add.rectangle(969, 380, 25, 25);
        page6.add(rectangle_3);

        // page5
        const page5 = scene.add.container(0, 0);
        page5.visible = false;
        this.add(page5);

        // page_5
        const page_5 = scene.add.image(760, 480, "nov-dec-igloocatalog", "novdecpage2");
        page5.add(page_5);

        // upgradeButton_2
        const upgradeButton_2 = new UpgradeButton(scene, 293, 568);
        page5.add(upgradeButton_2);

        // upgradeButton_3
        const upgradeButton_3 = new UpgradeButton(scene, 855, 572);
        page5.add(upgradeButton_3);

        // rectangle_12
        const rectangle_12 = scene.add.rectangle(540, 399, 20, 40);
        page5.add(rectangle_12);

        // secret_cave
        const secret_cave = scene.add.container(0, 0);
        secret_cave.visible = false;
        page5.add(secret_cave);

        // caveigloo_secret
        const caveigloo_secret = scene.add.image(772, 423, "nov-dec-igloocatalog", "secret_cave");
        secret_cave.add(caveigloo_secret);

        // sbtn_cave
        const sbtn_cave = scene.add.image(1005, 244, "igloocatalog", "sbtn");
        secret_cave.add(sbtn_cave);

        // upgradeButton_CAVE
        const upgradeButton_CAVE = new UpgradeButton(scene, 513, 505);
        secret_cave.add(upgradeButton_CAVE);

        // rectangle
        const rectangle = scene.add.rectangle(1030, 372, 25, 25);
        page5.add(rectangle);

        // page4
        const page4 = scene.add.container(0, 0);
        page4.visible = false;
        this.add(page4);

        // page_4
        const page_4 = scene.add.image(760, 480, "nov-dec-igloocatalog", "novdecpage1");
        page4.add(page_4);

        // upgradeButton
        const upgradeButton = new UpgradeButton(scene, 290, 577);
        page4.add(upgradeButton);

        // upgradeButton_1
        const upgradeButton_1 = new UpgradeButton(scene, 864, 569);
        page4.add(upgradeButton_1);

        // secret_bigcandy
        const secret_bigcandy = scene.add.container(0, 0);
        secret_bigcandy.visible = false;
        page4.add(secret_bigcandy);

        // bigcandy_secret
        const bigcandy_secret = scene.add.image(772, 423, "nov-dec-igloocatalog", "secret_bigcandy");
        secret_bigcandy.add(bigcandy_secret);

        // sbtn_bigcandy
        const sbtn_bigcandy = scene.add.image(990, 244, "igloocatalog", "sbtn");
        secret_bigcandy.add(sbtn_bigcandy);

        // upgradeButton_CANDY
        const upgradeButton_CANDY = new UpgradeButton(scene, 513, 505);
        secret_bigcandy.add(upgradeButton_CANDY);

        // rectangle_6
        const rectangle_6 = scene.add.rectangle(471, 306, 25, 25);
        page4.add(rectangle_6);

        // page3
        const page3 = scene.add.container(0, 0);
        page3.visible = false;
        this.add(page3);

        // page_3
        const page_3 = scene.add.image(760, 480, "nov-dec-igloocatalog", "novdecfloor2");
        page3.add(page_3);

        // floorButton_5
        const floorButton_5 = new BuyButton(scene, 521, 184);
        page3.add(floorButton_5);

        // floorButton_6
        const floorButton_6 = new BuyButton(scene, 521, 353);
        page3.add(floorButton_6);

        // floorButton_7
        const floorButton_7 = new BuyButton(scene, 531, 529);
        page3.add(floorButton_7);

        // floorButton_8
        const floorButton_8 = new BuyButton(scene, 532, 696);
        page3.add(floorButton_8);

        // floorButton_9
        const floorButton_9 = new BuyButton(scene, 848, 661);
        floorButton_9.scaleX = 1.1;
        floorButton_9.scaleY = 1.1;
        floorButton_9.setOrigin(0, 0);
        page3.add(floorButton_9);

        // secret
        const secret = scene.add.container(0, 0);
        secret.visible = false;
        page3.add(secret);

        // secret_1_img
        const secret_1_img = scene.add.image(780, 426, "igloocatalog", "secret1");
        secret.add(secret_1_img);

        // sbtn_1
        const sbtn_1 = scene.add.image(995, 248, "igloocatalog", "sbtn");
        secret.add(sbtn_1);

        // upgradeButton_22
        const upgradeButton_22 = new UpgradeButton(scene, 587, 491);
        secret.add(upgradeButton_22);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(1178, 111, 128, 128);
        rectangle_1.scaleY = 0.5564219459795425;
        rectangle_1.alpha = 0.00005;
        rectangle_1.isFilled = true;
        page3.add(rectangle_1);

        // page2
        const page2 = scene.add.container(0, 0);
        page2.visible = false;
        this.add(page2);

        // page_2
        const page_2 = scene.add.image(760, 480, "nov-dec-igloocatalog", "novdecfloor1");
        page2.add(page_2);

        // floorButton
        const floorButton = new BuyButton(scene, 559, 455);
        page2.add(floorButton);

        // floorButton_1
        const floorButton_1 = new BuyButton(scene, 563, 665);
        page2.add(floorButton_1);

        // floorButton_2
        const floorButton_2 = new BuyButton(scene, 1125, 513);
        page2.add(floorButton_2);

        // floorButton_3
        const floorButton_3 = new BuyButton(scene, 1111, 691);
        page2.add(floorButton_3);

        // floorButton_4
        const floorButton_4 = new BuyButton(scene, 1120, 354);
        page2.add(floorButton_4);

        // floorButton_10
        const floorButton_10 = new BuyButton(scene, 1116, 164);
        page2.add(floorButton_10);

        // page1
        const page1 = scene.add.container(0, 0);
        page1.visible = false;
        this.add(page1);

        // page
        const page = scene.add.image(760, 480, "nov-dec-igloocatalog", "novdeccover");
        page1.add(page);

        // next_page0001_png
        const next_page0001_png = scene.add.image(762, 428, "commonbook", "cc-page-front");
        page1.add(next_page0001_png);

        // close_right_4_1
        const close_right_4_1 = scene.add.image(924, 39, "commonbook", "cc-close");
        close_right_4_1.setOrigin(0, 0);
        page1.add(close_right_4_1);

        // buttons
        const buttons = scene.add.container(190, 41);
        buttons.visible = false;
        this.add(buttons);

        // closeRight
        const closeRight = scene.add.image(1015, 0, "commonbook", "cc-close");
        closeRight.setOrigin(0, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = scene.add.image(1014, 547, "commonbook", "cc-page-right");
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = scene.add.image(0, 547, "commonbook", "cc-page-left");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // coins
        const coins = scene.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11];

        // block (components)
        new Interactive(block);

        // close_left_111111 (components)
        const close_left_111111Button = new Button(close_left_111111);
        close_left_111111Button.spriteName = "cc-close";
        close_left_111111Button.callback = () => this.close();
        close_left_111111Button.activeFrame = true;

        // page_left_1_11111 (components)
        const page_left_1_11111Button = new Button(page_left_1_11111);
        page_left_1_11111Button.spriteName = "cc-page-left";
        page_left_1_11111Button.callback = () => this.prevPage();

        // upgradeButton_10L (prefab fields)
        upgradeButton_10L.igloo = 9;

        // upgradeButton_10R (prefab fields)
        upgradeButton_10R.igloo = 6;

        // rectangle_10 (components)
        const rectangle_10SimpleButton = new SimpleButton(rectangle_10);
        rectangle_10SimpleButton.callback = () => this.interface.prompt.showLocation(1);

        // rectangle_4 (components)
        const rectangle_4SimpleButton = new SimpleButton(rectangle_4);
        rectangle_4SimpleButton.callback = () => this.secret_4.visible = true;

        // sbtn_5 (components)
        const sbtn_5Button = new Button(sbtn_5);
        sbtn_5Button.spriteName = "sbtn";
        sbtn_5Button.callback = () => this.secret_4.visible = false;

        // upgradeButton_26 (prefab fields)
        upgradeButton_26.igloo = 8;

        // upgradeButton_9L (prefab fields)
        upgradeButton_9L.igloo = 14;

        // upgradeButton_9R (prefab fields)
        upgradeButton_9R.igloo = 2;

        // upgradeButton_8L (prefab fields)
        upgradeButton_8L.igloo = 13;

        // upgradeButton_8R (prefab fields)
        upgradeButton_8R.igloo = 1;

        // upgradeButton_5L (prefab fields)
        upgradeButton_5L.igloo = 28;

        // upgradeButton_5R (prefab fields)
        upgradeButton_5R.igloo = 19;

        // sbtn_bamboo_1 (components)
        const sbtn_bamboo_1Button = new Button(sbtn_bamboo_1);
        sbtn_bamboo_1Button.spriteName = "sbtn";
        sbtn_bamboo_1Button.callback = () => this.secret_bamboo.visible = false;

        // upgradeButton_bamboo (prefab fields)
        upgradeButton_bamboo.igloo = 10;

        // sbtn_camping_1 (components)
        const sbtn_camping_1Button = new Button(sbtn_camping_1);
        sbtn_camping_1Button.spriteName = "sbtn";
        sbtn_camping_1Button.callback = () => this.secret_camping.visible = false;

        // upgradeButton_camping (prefab fields)
        upgradeButton_camping.igloo = 101;

        // rectangle_2 (components)
        const rectangle_2SimpleButton = new SimpleButton(rectangle_2);
        rectangle_2SimpleButton.callback = () => this.secret_bamboo.visible = true;

        // rectangle_5 (components)
        const rectangle_5SimpleButton = new SimpleButton(rectangle_5);
        rectangle_5SimpleButton.callback = () => this.secret_camping.visible = true;

        // upgradeButton_4L (prefab fields)
        upgradeButton_4L.igloo = 42;

        // upgradeButton_4R (prefab fields)
        upgradeButton_4R.igloo = 20;

        // sbtn_circus_1 (components)
        const sbtn_circus_1Button = new Button(sbtn_circus_1);
        sbtn_circus_1Button.spriteName = "sbtn";
        sbtn_circus_1Button.callback = () => this.secret_circus.visible = false;

        // upgradeButton_circus (prefab fields)
        upgradeButton_circus.igloo = 29;

        // rectangle_3 (components)
        const rectangle_3SimpleButton = new SimpleButton(rectangle_3);
        rectangle_3SimpleButton.callback = () => this.secret_circus.visible = true;

        // upgradeButton_2 (prefab fields)
        upgradeButton_2.igloo = 27;

        // upgradeButton_3 (prefab fields)
        upgradeButton_3.igloo = 30;

        // rectangle_12 (components)
        const rectangle_12SimpleButton = new SimpleButton(rectangle_12);
        rectangle_12SimpleButton.callback = () => this.interface.prompt.showLocation(4);

        // sbtn_cave (components)
        const sbtn_caveButton = new Button(sbtn_cave);
        sbtn_caveButton.spriteName = "sbtn";
        sbtn_caveButton.callback = () => this.secret_cave.visible = false;

        // upgradeButton_CAVE (prefab fields)
        upgradeButton_CAVE.igloo = 31;

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.callback = () => this.secret_cave.visible = true;

        // upgradeButton (prefab fields)
        upgradeButton.igloo = 15;

        // upgradeButton_1 (prefab fields)
        upgradeButton_1.igloo = 11;

        // sbtn_bigcandy (components)
        const sbtn_bigcandyButton = new Button(sbtn_bigcandy);
        sbtn_bigcandyButton.spriteName = "sbtn";
        sbtn_bigcandyButton.callback = () => this.secret_bigcandy.visible = false;

        // upgradeButton_CANDY (prefab fields)
        upgradeButton_CANDY.igloo = 4;

        // rectangle_6 (components)
        const rectangle_6SimpleButton = new SimpleButton(rectangle_6);
        rectangle_6SimpleButton.callback = () => this.secret_bigcandy.visible = true;

        // floorButton_5 (prefab fields)
        floorButton_5.item = 4;
        floorButton_5.itemType = "Flooring";

        // floorButton_6 (prefab fields)
        floorButton_6.item = 2;
        floorButton_6.itemType = "Flooring";

        // floorButton_7 (prefab fields)
        floorButton_7.item = 7;
        floorButton_7.itemType = "Flooring";

        // floorButton_8 (prefab fields)
        floorButton_8.item = 15;
        floorButton_8.itemType = "Flooring";

        // floorButton_9 (prefab fields)
        floorButton_9.itemType = "Flooring";

        // sbtn_1 (components)
        const sbtn_1Button = new Button(sbtn_1);
        sbtn_1Button.spriteName = "sbtn";
        sbtn_1Button.callback = () => this.secret.visible = false;

        // upgradeButton_22 (prefab fields)
        upgradeButton_22.igloo = 5;

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.callback = () => this.secret.visible = true;

        // floorButton (prefab fields)
        floorButton.item = 23;
        floorButton.itemType = "Flooring";

        // floorButton_1 (prefab fields)
        floorButton_1.item = 1;
        floorButton_1.itemType = "Flooring";

        // floorButton_2 (prefab fields)
        floorButton_2.item = 11;
        floorButton_2.itemType = "Flooring";

        // floorButton_3 (prefab fields)
        floorButton_3.item = 19;
        floorButton_3.itemType = "Flooring";

        // floorButton_4 (prefab fields)
        floorButton_4.item = 607;
        floorButton_4.itemType = "Furniture";

        // floorButton_4 (components)
        const floorButton_4Button = Button.getComponent(floorButton_4);
        floorButton_4Button.callback = () => this.buy(607);

        // floorButton_10 (prefab fields)
        floorButton_10.item = 16;
        floorButton_10.itemType = "Flooring";

        // next_page0001_png (components)
        const next_page0001_pngButton = new Button(next_page0001_png);
        next_page0001_pngButton.spriteName = "cc-page-front";
        next_page0001_pngButton.callback = () => this.nextPage();

        // close_right_4_1 (components)
        const close_right_4_1Button = new Button(close_right_4_1);
        close_right_4_1Button.spriteName = "cc-close";
        close_right_4_1Button.callback = () => this.close();
        close_right_4_1Button.activeFrame = true;

        // closeRight (components)
        const closeRightButton = new Button(closeRight);
        closeRightButton.spriteName = "cc-close";
        closeRightButton.callback = () => this.close();
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

        this.secret_4 = secret_4;
        this.secret_bamboo = secret_bamboo;
        this.secret_camping = secret_camping;
        this.secret_circus = secret_circus;
        this.secret_cave = secret_cave;
        this.secret_bigcandy = secret_bigcandy;
        this.secret = secret;
        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    buy(item) {
        this.interface.prompt.showFurniture(item)
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
