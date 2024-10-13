import { Button, Interactive, SimpleButton, Zone } from '@components/components'
import BookContainer from '@scenes/interface/books/BookContainer';

import BuyButton from '@scenes/interface/shared_prefabs/BuyButton'


export const preload = {
    key: 'furniturecatalog-pack',
    url: 'assets/media/interface/catalogs/furniture/furniturecatalog-pack.json',
    loadString: ['loading', 'furniturecatalog']
}
/* START OF COMPILED CODE */

export default class FurnitureCatalog extends BookContainer {

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

        // page11
        const page11 = scene.add.container(1, 6);
        page11.visible = false;
        this.add(page11);

        // p13
        const p13 = scene.add.image(0, 0, "decemberfurniture", "decpg1111");
        p13.setOrigin(0, 0);
        page11.add(p13);

        // pageLeft_1
        const pageLeft_1 = scene.add.image(492, 590, "commonbook", "cc-page-left");
        pageLeft_1.setOrigin(0, 0);
        page11.add(pageLeft_1);

        // closeLeft
        const closeLeft = scene.add.image(491, 39, "commonbook", "cc-close");
        closeLeft.setOrigin(0, 0);
        closeLeft.flipX = true;
        page11.add(closeLeft);

        // page10
        const page10 = scene.add.container(1, 5);
        page10.visible = false;
        this.add(page10);

        // pg4nov
        const pg4nov = scene.add.image(-1, -2, "novemberfurniture", "page4");
        pg4nov.setOrigin(0, 0);
        page10.add(pg4nov);

        // buyButton_38
        const buyButton_38 = new BuyButton(scene, 591, 122);
        page10.add(buyButton_38);

        // buyButton_39
        const buyButton_39 = new BuyButton(scene, 291, 645);
        page10.add(buyButton_39);

        // buyButton_40
        const buyButton_40 = new BuyButton(scene, 548, 644);
        page10.add(buyButton_40);

        // buyButton_41
        const buyButton_41 = new BuyButton(scene, 852, 268);
        page10.add(buyButton_41);

        // buyButton_42
        const buyButton_42 = new BuyButton(scene, 1127, 246);
        page10.add(buyButton_42);

        // rectangle
        const rectangle = scene.add.rectangle(419, 210, 40, 40);
        page10.add(rectangle);

        // rectangle_10
        const rectangle_10 = scene.add.rectangle(907.2708740234375, 570.980224609375, 40, 40);
        page10.add(rectangle_10);

        // rectangle_11
        const rectangle_11 = scene.add.rectangle(1177.494140625, 392.3580627441406, 40, 40);
        page10.add(rectangle_11);

        // rectangle_12
        const rectangle_12 = scene.add.rectangle(346.97747802734375, 410.67828369140625, 40, 40);
        page10.add(rectangle_12);

        // clearancetwo_10
        const clearancetwo_10 = scene.add.image(454, 128, "commonbook", "cc-clearance");
        page10.add(clearancetwo_10);

        // clearancetwo_11
        const clearancetwo_11 = scene.add.image(1044, 769, "commonbook", "cc-clearance");
        page10.add(clearancetwo_11);

        // page9
        const page9 = scene.add.container(1, 5);
        page9.visible = false;
        this.add(page9);

        // pg3nov
        const pg3nov = scene.add.image(-1, -2, "novemberfurniture", "page3");
        pg3nov.setOrigin(0, 0);
        page9.add(pg3nov);

        // buyButton_34
        const buyButton_34 = new BuyButton(scene, 562, 297);
        page9.add(buyButton_34);

        // buyButton_35
        const buyButton_35 = new BuyButton(scene, 1094, 277);
        page9.add(buyButton_35);

        // buyButton_36
        const buyButton_36 = new BuyButton(scene, 1091, 654);
        page9.add(buyButton_36);

        // buyButton_37
        const buyButton_37 = new BuyButton(scene, 297, 658);
        page9.add(buyButton_37);

        // rectangle_7
        const rectangle_7 = scene.add.rectangle(406.5181884765625, 114.50138092041016, 40, 40);
        page9.add(rectangle_7);

        // rectangle_8
        const rectangle_8 = scene.add.rectangle(911.8509521484375, 207.62918090820312, 40, 40);
        page9.add(rectangle_8);

        // rectangle_9
        const rectangle_9 = scene.add.rectangle(546.9732055664062, 662.5813598632812, 40, 40);
        page9.add(rectangle_9);

        // rectangle_13
        const rectangle_13 = scene.add.rectangle(939, 634, 60, 60);
        page9.add(rectangle_13);

        // clearancetwo_12
        const clearancetwo_12 = scene.add.image(454, 128, "commonbook", "cc-clearance");
        page9.add(clearancetwo_12);

        // clearancetwo_13
        const clearancetwo_13 = scene.add.image(1044, 769, "commonbook", "cc-clearance");
        page9.add(clearancetwo_13);

        // page8
        const page8 = scene.add.container(1, 5);
        page8.visible = false;
        this.add(page8);

        // pg2nov
        const pg2nov = scene.add.image(-1, -2, "novemberfurniture", "page2");
        pg2nov.setOrigin(0, 0);
        page8.add(pg2nov);

        // buyButton_27
        const buyButton_27 = new BuyButton(scene, 515, 191);
        page8.add(buyButton_27);

        // buyButton_28
        const buyButton_28 = new BuyButton(scene, 328, 426);
        page8.add(buyButton_28);

        // buyButton_29
        const buyButton_29 = new BuyButton(scene, 522, 663);
        page8.add(buyButton_29);

        // buyButton_30
        const buyButton_30 = new BuyButton(scene, 1123, 113);
        page8.add(buyButton_30);

        // buyButton_31
        const buyButton_31 = new BuyButton(scene, 976, 277);
        buyButton_31.scaleX = 1;
        buyButton_31.scaleY = 1;
        page8.add(buyButton_31);

        // buyButton_32
        const buyButton_32 = new BuyButton(scene, 1116, 667);
        page8.add(buyButton_32);

        // buyButton_33
        const buyButton_33 = new BuyButton(scene, 852, 668);
        page8.add(buyButton_33);

        // rectangle_4
        const rectangle_4 = scene.add.rectangle(918, 452, 40, 40);
        page8.add(rectangle_4);

        // rectangle_5
        const rectangle_5 = scene.add.rectangle(646, 368, 40, 40);
        page8.add(rectangle_5);

        // rectangle_6
        const rectangle_6 = scene.add.rectangle(407, 159, 40, 40);
        page8.add(rectangle_6);

        // rectangle_32
        const rectangle_32 = scene.add.rectangle(1166.807373046875, 256.48309326171875, 40, 40);
        page8.add(rectangle_32);

        // clearancetwo_14
        const clearancetwo_14 = scene.add.image(454, 769, "commonbook", "cc-clearance");
        page8.add(clearancetwo_14);

        // clearancetwo_15
        const clearancetwo_15 = scene.add.image(1044, 769, "commonbook", "cc-clearance");
        page8.add(clearancetwo_15);

        // page7
        const page7 = scene.add.container(1, 5);
        page7.visible = false;
        this.add(page7);

        // pg11nov
        const pg11nov = scene.add.image(-1, -2, "novemberfurniture", "page1");
        pg11nov.setOrigin(0, 0);
        page7.add(pg11nov);

        // buyButton_223
        const buyButton_223 = new BuyButton(scene, 284, 526);
        page7.add(buyButton_223);

        // buyButton_213
        const buyButton_213 = new BuyButton(scene, 560, 529);
        page7.add(buyButton_213);

        // buyButton_233
        const buyButton_233 = new BuyButton(scene, 596, 670);
        page7.add(buyButton_233);

        // buyButton_243
        const buyButton_243 = new BuyButton(scene, 1041, 648);
        page7.add(buyButton_243);

        // buyButton_253
        const buyButton_253 = new BuyButton(scene, 859, 436);
        page7.add(buyButton_253);

        // buyButton_2633
        const buyButton_2633 = new BuyButton(scene, 1127, 431);
        page7.add(buyButton_2633);

        // rectangle_133
        const rectangle_133 = scene.add.rectangle(1188, 222, 120, 40);
        page7.add(rectangle_133);

        // rectangle_233
        const rectangle_233 = scene.add.rectangle(869, 605, 60, 60);
        page7.add(rectangle_233);

        // rectangle_333
        const rectangle_333 = scene.add.rectangle(476, 194, 300, 80);
        page7.add(rectangle_333);

        // rectangle_3333
        const rectangle_3333 = scene.add.rectangle(350.84893798828125, 664.8892211914062, 40, 40);
        page7.add(rectangle_3333);

        // clearancetwo_1733
        const clearancetwo_1733 = scene.add.image(1044, 769, "commonbook", "cc-clearance");
        page7.add(clearancetwo_1733);

        // page6
        const page6 = scene.add.container(1, 5);
        page6.visible = false;
        this.add(page6);

        // pg6dec
        const pg6dec = scene.add.image(-1, -2, "decemberfurniture", "decpgindoor");
        pg6dec.setOrigin(0, 0);
        page6.add(pg6dec);

        // dec_6_1
        const dec_6_1 = new BuyButton(scene, 276, 642);
        page6.add(dec_6_1);

        // dec_6_2
        const dec_6_2 = new BuyButton(scene, 557, 642);
        page6.add(dec_6_2);

        // dec_6_3
        const dec_6_3 = new BuyButton(scene, 1068, 642);
        page6.add(dec_6_3);

        // dec_6_4
        const dec_6_4 = new BuyButton(scene, 852, 350);
        page6.add(dec_6_4);

        // dec_6_5
        const dec_6_5 = new BuyButton(scene, 1128, 350);
        page6.add(dec_6_5);

        // dec_6_secret_1
        const dec_6_secret_1 = scene.add.rectangle(475, 617, 40, 40);
        page6.add(dec_6_secret_1);

        // dec_6_secret_2
        const dec_6_secret_2 = scene.add.rectangle(628, 105, 70, 69);
        page6.add(dec_6_secret_2);

        // dec_6_secret
        const dec_6_secret = scene.add.rectangle(371, 217, 70, 69);
        page6.add(dec_6_secret);

        // dec_6_secret_3
        const dec_6_secret_3 = scene.add.rectangle(1187, 223, 41, 57);
        page6.add(dec_6_secret_3);

        // dec_6_secret_4
        const dec_6_secret_4 = scene.add.rectangle(1233, 98, 19, 38);
        page6.add(dec_6_secret_4);

        // dec_6_secret_5
        const dec_6_secret_5 = scene.add.rectangle(1200, 71, 19, 38);
        page6.add(dec_6_secret_5);

        // dec_6_secret_6
        const dec_6_secret_6 = scene.add.rectangle(907, 289, 105, 38);
        page6.add(dec_6_secret_6);

        // dec_6_secret_7
        const dec_6_secret_7 = scene.add.rectangle(917, 678, 105, 38);
        page6.add(dec_6_secret_7);

        // page5
        const page5 = scene.add.container(1, 5);
        page5.visible = false;
        this.add(page5);

        // pg5dec
        const pg5dec = scene.add.image(-1, -2, "decemberfurniture", "decpgoutdoor");
        pg5dec.setOrigin(0, 0);
        page5.add(pg5dec);

        // dec_5_1
        const dec_5_1 = new BuyButton(scene, 300, 654);
        page5.add(dec_5_1);

        // dec_5_2
        const dec_5_2 = new BuyButton(scene, 524, 328);
        page5.add(dec_5_2);

        // dec_5_3
        const dec_5_3 = new BuyButton(scene, 1144, 285);
        page5.add(dec_5_3);

        // dec_5_4
        const dec_5_4 = new BuyButton(scene, 847, 615);
        page5.add(dec_5_4);

        // dec_5_secret_1
        const dec_5_secret_1 = scene.add.rectangle(1122, 628, 40, 40);
        page5.add(dec_5_secret_1);

        // dec_5_secret
        const dec_5_secret = scene.add.rectangle(536, 722, 40, 40);
        page5.add(dec_5_secret);

        // dec_5_secret_2
        const dec_5_secret_2 = scene.add.rectangle(1230, 96, 40, 40);
        page5.add(dec_5_secret_2);

        // dec_5_secret_3
        const dec_5_secret_3 = scene.add.rectangle(328, 401, 40, 40);
        page5.add(dec_5_secret_3);

        // dec_5_secret_4
        const dec_5_secret_4 = scene.add.rectangle(438, 187, 40, 40);
        page5.add(dec_5_secret_4);

        // dec_5_secret_5
        const dec_5_secret_5 = scene.add.rectangle(912, 541, 110, 40);
        page5.add(dec_5_secret_5);

        // dec_5_secret_6
        const dec_5_secret_6 = scene.add.rectangle(965, 263, 110, 40);
        page5.add(dec_5_secret_6);

        // dec_5_secret_7
        const dec_5_secret_7 = scene.add.rectangle(954.0693359375, 361.835693359375, 110, 40);
        page5.add(dec_5_secret_7);

        // page4
        const page4 = scene.add.container(1, 5);
        page4.visible = false;
        this.add(page4);

        // pg4dec
        const pg4dec = scene.add.image(-1, -2, "decemberfurniture", "dcpgcandy");
        pg4dec.setOrigin(0, 0);
        page4.add(pg4dec);

        // dec_4_1
        const dec_4_1 = new BuyButton(scene, 518, 700);
        page4.add(dec_4_1);

        // dec_4_2
        const dec_4_2 = new BuyButton(scene, 285, 362);
        page4.add(dec_4_2);

        // dec_4_3
        const dec_4_3 = new BuyButton(scene, 542, 362);
        page4.add(dec_4_3);

        // dec_4_4
        const dec_4_4 = new BuyButton(scene, 873, 330);
        page4.add(dec_4_4);

        // dec_4_5
        const dec_4_5 = new BuyButton(scene, 1111, 330);
        page4.add(dec_4_5);

        // dec_4_6
        const dec_4_6 = new BuyButton(scene, 844, 694);
        page4.add(dec_4_6);

        // dec_4_7
        const dec_4_7 = new BuyButton(scene, 1118, 694);
        page4.add(dec_4_7);

        // dec_4_secret_1
        const dec_4_secret_1 = scene.add.rectangle(1167, 150, 40, 40);
        page4.add(dec_4_secret_1);

        // dec_4_secret
        const dec_4_secret = scene.add.rectangle(604, 219, 40, 77);
        page4.add(dec_4_secret);

        // dec_4_secret_2
        const dec_4_secret_2 = scene.add.rectangle(577, 641, 40, 77);
        page4.add(dec_4_secret_2);

        // dec_4_secret_3
        const dec_4_secret_3 = scene.add.rectangle(358.6777648925781, 638.6266479492188, 40, 77);
        page4.add(dec_4_secret_3);

        // dec_4_secret_4
        const dec_4_secret_4 = scene.add.rectangle(1040, 590, 40, 77);
        page4.add(dec_4_secret_4);

        // dec_4_secret_5
        const dec_4_secret_5 = scene.add.rectangle(338.36834716796875, 165.51527404785156, 110, 40);
        page4.add(dec_4_secret_5);

        // dec_4_secret_6
        const dec_4_secret_6 = scene.add.rectangle(920.5567016601562, 134.81393432617188, 47, 43);
        page4.add(dec_4_secret_6);

        // dec_4_secret_7
        const dec_4_secret_7 = scene.add.rectangle(909, 300, 47, 43);
        page4.add(dec_4_secret_7);

        // page3
        const page3 = scene.add.container(1, 5);
        page3.visible = false;
        this.add(page3);

        // pg3dec
        const pg3dec = scene.add.image(-1, -2, "decemberfurniture", "decpgsnowman");
        pg3dec.setOrigin(0, 0);
        page3.add(pg3dec);

        // dec_3_1
        const dec_3_1 = new BuyButton(scene, 511, 653);
        page3.add(dec_3_1);

        // dec_3_2
        const dec_3_2 = new BuyButton(scene, 290, 292);
        page3.add(dec_3_2);

        // dec_3_3
        const dec_3_3 = new BuyButton(scene, 868, 247);
        page3.add(dec_3_3);

        // dec_3_4
        const dec_3_4 = new BuyButton(scene, 832, 464);
        page3.add(dec_3_4);

        // dec_3_5
        const dec_3_5 = new BuyButton(scene, 1074, 684);
        page3.add(dec_3_5);

        // dec_3_secret_1
        const dec_3_secret_1 = scene.add.rectangle(1057, 469, 40, 40);
        page3.add(dec_3_secret_1);

        // dec_3_secret_2
        const dec_3_secret_2 = scene.add.rectangle(530, 161, 65, 61);
        page3.add(dec_3_secret_2);

        // dec_3_secret
        const dec_3_secret = scene.add.rectangle(348, 525, 65, 61);
        page3.add(dec_3_secret);

        // dec_3_secret_3
        const dec_3_secret_3 = scene.add.rectangle(598, 471, 65, 61);
        page3.add(dec_3_secret_3);

        // dec_3_secret_4
        const dec_3_secret_4 = scene.add.rectangle(1133.4619140625, 96.82996368408203, 65, 61);
        page3.add(dec_3_secret_4);

        // dec_3_secret_5
        const dec_3_secret_5 = scene.add.rectangle(1178, 260, 65, 61);
        page3.add(dec_3_secret_5);

        // dec_3_secret_6
        const dec_3_secret_6 = scene.add.rectangle(923, 631, 65, 61);
        page3.add(dec_3_secret_6);

        // page2
        const page2 = scene.add.container(1, 5);
        page2.visible = false;
        this.add(page2);

        // pg2dec_back
        const pg2dec_back = scene.add.image(-1, -2, "decemberfurniture", "decpgitemtwo");
        pg2dec_back.setOrigin(0, 0);
        page2.add(pg2dec_back);

        // pg2dec
        const pg2dec = scene.add.image(-1, -2, "decemberfurniture", "decpgitem");
        pg2dec.setOrigin(0, 0);
        pg2dec.visible = false;
        page2.add(pg2dec);

        // dec_2_1
        const dec_2_1 = new BuyButton(scene, 532, 645);
        dec_2_1.name = "dec_2_1";
        dec_2_1.visible = true;
        page2.add(dec_2_1);

        // dec_2_2
        const dec_2_2 = new BuyButton(scene, 866, 679);
        page2.add(dec_2_2);

        // dec_2_3
        const dec_2_3 = new BuyButton(scene, 1040, 423);
        page2.add(dec_2_3);

        // dec_2_4
        const dec_2_4 = new BuyButton(scene, 881, 189);
        page2.add(dec_2_4);

        // dec_2_secret_1
        const dec_2_secret_1 = scene.add.rectangle(1198, 724, 40, 40);
        page2.add(dec_2_secret_1);

        // dec_2_secret
        const dec_2_secret = scene.add.rectangle(1199, 470, 40, 40);
        page2.add(dec_2_secret);

        // dec_2_secret_2
        const dec_2_secret_2 = scene.add.rectangle(849, 588, 40, 40);
        page2.add(dec_2_secret_2);

        // dec_2_secret_3
        const dec_2_secret_3 = scene.add.rectangle(1172, 235, 40, 40);
        page2.add(dec_2_secret_3);

        // dec_2_secret_4
        const dec_2_secret_4 = scene.add.rectangle(659, 567, 81, 92);
        page2.add(dec_2_secret_4);

        // dec_2_secret_5
        const dec_2_secret_5 = scene.add.rectangle(889, 348, 46, 67);
        page2.add(dec_2_secret_5);

        // dec_2_secret_6
        const dec_2_secret_6 = scene.add.rectangle(1179, 235, 94, 67);
        page2.add(dec_2_secret_6);

        // dec_2_secret_7
        const dec_2_secret_7 = scene.add.rectangle(316, 123, 94, 67);
        page2.add(dec_2_secret_7);

        // page1
        const page1 = scene.add.container(1, 5);
        page1.visible = false;
        this.add(page1);

        // pgcover
        const pgcover = scene.add.image(760, 480, "decemberfurniture", "pg0");
        pgcover.visible = false;
        page1.add(pgcover);

        // pgcoversticky
        const pgcoversticky = scene.add.image(760, 480, "decemberfurniture", "pg0sticky");
        page1.add(pgcoversticky);

        // pageFront
        const pageFront = scene.add.image(468, 44, "commonbook", "cc-page-front");
        pageFront.setOrigin(0, 0);
        page1.add(pageFront);

        // closeRight_1
        const closeRight_1 = scene.add.image(924, 39, "commonbook", "cc-close");
        closeRight_1.setOrigin(0, 0);
        page1.add(closeRight_1);

        // buttons
        const buttons = scene.add.container(190, 47);
        buttons.visible = false;
        this.add(buttons);

        // closeRight
        const closeRight = scene.add.image(1012, -2, "commonbook", "cc-close");
        closeRight.setOrigin(0, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = scene.add.image(1012, 547, "commonbook", "cc-page-right");
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = scene.add.image(0, 549, "commonbook", "cc-page-left");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // coins
        const coins = scene.add.text(527, 791, "", {});
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11];

        // block (components)
        new Interactive(block);

        // pageLeft_1 (components)
        const pageLeft_1Button = new Button(pageLeft_1);
        pageLeft_1Button.spriteName = "cc-page-left";
        pageLeft_1Button.callback = () => this.prevPage();
        pageLeft_1Button.pixelPerfect = true;

        // closeLeft (components)
        const closeLeftButton = new Button(closeLeft);
        closeLeftButton.spriteName = "cc-close";
        closeLeftButton.callback = () => this.close();

        // buyButton_38 (prefab fields)
        buyButton_38.item = 43;
        buyButton_38.itemType = "Furniture";

        // buyButton_39 (prefab fields)
        buyButton_39.item = 378;
        buyButton_39.itemType = "Furniture";

        // buyButton_40 (prefab fields)
        buyButton_40.item = 377;
        buyButton_40.itemType = "Furniture";

        // buyButton_41 (prefab fields)
        buyButton_41.item = 154;
        buyButton_41.itemType = "Furniture";

        // buyButton_42 (prefab fields)
        buyButton_42.item = 654;
        buyButton_42.itemType = "Furniture";

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.callback = () => this.interface.prompt.showSecretFurniture(143);;

        // rectangle_10 (components)
        const rectangle_10SimpleButton = new SimpleButton(rectangle_10);
        rectangle_10SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(184);;

        // rectangle_11 (components)
        const rectangle_11SimpleButton = new SimpleButton(rectangle_11);
        rectangle_11SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(629);;

        // rectangle_12 (components)
        const rectangle_12SimpleButton = new SimpleButton(rectangle_12);
        rectangle_12SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(758);;

        // buyButton_34 (prefab fields)
        buyButton_34.item = 653;
        buyButton_34.itemType = "Furniture";

        // buyButton_35 (prefab fields)
        buyButton_35.item = 651;
        buyButton_35.itemType = "Furniture";

        // buyButton_36 (prefab fields)
        buyButton_36.item = 652;
        buyButton_36.itemType = "Furniture";

        // buyButton_37 (prefab fields)
        buyButton_37.item = 650;
        buyButton_37.itemType = "Furniture";

        // rectangle_7 (components)
        const rectangle_7SimpleButton = new SimpleButton(rectangle_7);
        rectangle_7SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(435);;

        // rectangle_8 (components)
        const rectangle_8SimpleButton = new SimpleButton(rectangle_8);
        rectangle_8SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(47);;

        // rectangle_9 (components)
        const rectangle_9SimpleButton = new SimpleButton(rectangle_9);
        rectangle_9SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(46);;

        // rectangle_13 (components)
        const rectangle_13SimpleButton = new SimpleButton(rectangle_13);
        rectangle_13SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(628);;

        // buyButton_27 (prefab fields)
        buyButton_27.item = 280;
        buyButton_27.itemType = "Furniture";

        // buyButton_28 (prefab fields)
        buyButton_28.item = 282;
        buyButton_28.itemType = "Furniture";

        // buyButton_29 (prefab fields)
        buyButton_29.item = 52;
        buyButton_29.itemType = "Furniture";

        // buyButton_30 (prefab fields)
        buyButton_30.item = 56;
        buyButton_30.itemType = "Furniture";

        // buyButton_31 (prefab fields)
        buyButton_31.item = 55;
        buyButton_31.itemType = "Furniture";

        // buyButton_32 (prefab fields)
        buyButton_32.item = 51;
        buyButton_32.itemType = "Furniture";

        // buyButton_33 (prefab fields)
        buyButton_33.item = 486;
        buyButton_33.itemType = "Furniture";

        // rectangle_4 (components)
        const rectangle_4SimpleButton = new SimpleButton(rectangle_4);
        rectangle_4SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(627);;

        // rectangle_5 (components)
        const rectangle_5SimpleButton = new SimpleButton(rectangle_5);
        rectangle_5SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(105);;

        // rectangle_6 (components)
        const rectangle_6SimpleButton = new SimpleButton(rectangle_6);
        rectangle_6SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(561);;

        // rectangle_32 (components)
        const rectangle_32SimpleButton = new SimpleButton(rectangle_32);
        rectangle_32SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(57);;

        // buyButton_223 (prefab fields)
        buyButton_223.item = 480;
        buyButton_223.itemType = "Furniture";

        // buyButton_213 (prefab fields)
        buyButton_213.item = 481;
        buyButton_213.itemType = "Furniture";

        // buyButton_233 (prefab fields)
        buyButton_233.item = 53;
        buyButton_233.itemType = "Furniture";

        // buyButton_243 (prefab fields)
        buyButton_243.item = 484;
        buyButton_243.itemType = "Furniture";

        // buyButton_253 (prefab fields)
        buyButton_253.item = 483;
        buyButton_253.itemType = "Furniture";

        // buyButton_2633 (prefab fields)
        buyButton_2633.item = 482;
        buyButton_2633.itemType = "Furniture";

        // rectangle_133 (components)
        const rectangle_133SimpleButton = new SimpleButton(rectangle_133);
        rectangle_133SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(434);;

        // rectangle_233 (components)
        const rectangle_233SimpleButton = new SimpleButton(rectangle_233);
        rectangle_233SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(626);;

        // rectangle_333 (components)
        const rectangle_333SimpleButton = new SimpleButton(rectangle_333);
        rectangle_333SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(132);;

        // rectangle_3333 (components)
        const rectangle_3333SimpleButton = new SimpleButton(rectangle_3333);
        rectangle_3333SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(365);;

        // dec_6_1 (prefab fields)
        dec_6_1.item = 658;
        dec_6_1.itemType = "Furniture";

        // dec_6_2 (prefab fields)
        dec_6_2.item = 475;
        dec_6_2.itemType = "Furniture";

        // dec_6_3 (prefab fields)
        dec_6_3.item = 136;
        dec_6_3.itemType = "Furniture";

        // dec_6_4 (prefab fields)
        dec_6_4.item = 659;
        dec_6_4.itemType = "Furniture";

        // dec_6_5 (prefab fields)
        dec_6_5.item = 657;
        dec_6_5.itemType = "Furniture";

        // dec_6_secret_1 (components)
        const dec_6_secret_1SimpleButton = new SimpleButton(dec_6_secret_1);
        dec_6_secret_1SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(161);;

        // dec_6_secret_2 (components)
        const dec_6_secret_2SimpleButton = new SimpleButton(dec_6_secret_2);
        dec_6_secret_2SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(565);;

        // dec_6_secret (components)
        const dec_6_secretSimpleButton = new SimpleButton(dec_6_secret);
        dec_6_secretSimpleButton.callback = () => this.interface.prompt.showSecretFurniture(596);;

        // dec_6_secret_3 (components)
        const dec_6_secret_3SimpleButton = new SimpleButton(dec_6_secret_3);
        dec_6_secret_3SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(472);;

        // dec_6_secret_4 (components)
        const dec_6_secret_4SimpleButton = new SimpleButton(dec_6_secret_4);
        dec_6_secret_4SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(927);;

        // dec_6_secret_5 (components)
        const dec_6_secret_5SimpleButton = new SimpleButton(dec_6_secret_5);
        dec_6_secret_5SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(928);;

        // dec_6_secret_6 (components)
        const dec_6_secret_6SimpleButton = new SimpleButton(dec_6_secret_6);
        dec_6_secret_6SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(474);;

        // dec_6_secret_7 (components)
        const dec_6_secret_7SimpleButton = new SimpleButton(dec_6_secret_7);
        dec_6_secret_7SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(804);;

        // dec_5_1 (prefab fields)
        dec_5_1.item = 471;
        dec_5_1.itemType = "Furniture";

        // dec_5_2 (prefab fields)
        dec_5_2.item = 660;
        dec_5_2.itemType = "Furniture";

        // dec_5_3 (prefab fields)
        dec_5_3.item = 655;
        dec_5_3.itemType = "Furniture";

        // dec_5_4 (prefab fields)
        dec_5_4.item = 656;
        dec_5_4.itemType = "Furniture";

        // dec_5_secret_1 (components)
        const dec_5_secret_1SimpleButton = new SimpleButton(dec_5_secret_1);
        dec_5_secret_1SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(138);;

        // dec_5_secret (components)
        const dec_5_secretSimpleButton = new SimpleButton(dec_5_secret);
        dec_5_secretSimpleButton.callback = () => this.interface.prompt.showSecretFurniture(803);;

        // dec_5_secret_2 (components)
        const dec_5_secret_2SimpleButton = new SimpleButton(dec_5_secret_2);
        dec_5_secret_2SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(908);;

        // dec_5_secret_3 (components)
        const dec_5_secret_3SimpleButton = new SimpleButton(dec_5_secret_3);
        dec_5_secret_3SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(805);;

        // dec_5_secret_4 (components)
        const dec_5_secret_4SimpleButton = new SimpleButton(dec_5_secret_4);
        dec_5_secret_4SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(806);;

        // dec_5_secret_5 (components)
        const dec_5_secret_5SimpleButton = new SimpleButton(dec_5_secret_5);
        dec_5_secret_5SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(140);;

        // dec_5_secret_6 (components)
        const dec_5_secret_6SimpleButton = new SimpleButton(dec_5_secret_6);
        dec_5_secret_6SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(331);;

        // dec_5_secret_7 (components)
        const dec_5_secret_7SimpleButton = new SimpleButton(dec_5_secret_7);
        dec_5_secret_7SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(332);;

        // dec_4_1 (prefab fields)
        dec_4_1.item = 794;
        dec_4_1.itemType = "Furniture";

        // dec_4_2 (prefab fields)
        dec_4_2.item = 795;
        dec_4_2.itemType = "Furniture";

        // dec_4_3 (prefab fields)
        dec_4_3.item = 798;
        dec_4_3.itemType = "Furniture";

        // dec_4_4 (prefab fields)
        dec_4_4.item = 800;
        dec_4_4.itemType = "Furniture";

        // dec_4_5 (prefab fields)
        dec_4_5.item = 797;
        dec_4_5.itemType = "Furniture";

        // dec_4_6 (prefab fields)
        dec_4_6.item = 796;
        dec_4_6.itemType = "Furniture";

        // dec_4_7 (prefab fields)
        dec_4_7.item = 799;
        dec_4_7.itemType = "Furniture";

        // dec_4_secret_1 (components)
        const dec_4_secret_1SimpleButton = new SimpleButton(dec_4_secret_1);
        dec_4_secret_1SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(139);;

        // dec_4_secret (components)
        const dec_4_secretSimpleButton = new SimpleButton(dec_4_secret);
        dec_4_secretSimpleButton.callback = () => this.interface.prompt.showSecretFurniture(260);;

        // dec_4_secret_2 (components)
        const dec_4_secret_2SimpleButton = new SimpleButton(dec_4_secret_2);
        dec_4_secret_2SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(661);;

        // dec_4_secret_3 (components)
        const dec_4_secret_3SimpleButton = new SimpleButton(dec_4_secret_3);
        dec_4_secret_3SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(2135);;

        // dec_4_secret_4 (components)
        const dec_4_secret_4SimpleButton = new SimpleButton(dec_4_secret_4);
        dec_4_secret_4SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(470);;

        // dec_4_secret_5 (components)
        const dec_4_secret_5SimpleButton = new SimpleButton(dec_4_secret_5);
        dec_4_secret_5SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(330);;

        // dec_4_secret_6 (components)
        const dec_4_secret_6SimpleButton = new SimpleButton(dec_4_secret_6);
        dec_4_secret_6SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(333);;

        // dec_4_secret_7 (components)
        const dec_4_secret_7SimpleButton = new SimpleButton(dec_4_secret_7);
        dec_4_secret_7SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(94);;

        // dec_3_1 (prefab fields)
        dec_3_1.item = 588;
        dec_3_1.itemType = "Furniture";

        // dec_3_2 (prefab fields)
        dec_3_2.item = 587;
        dec_3_2.itemType = "Furniture";

        // dec_3_3 (prefab fields)
        dec_3_3.item = 586;
        dec_3_3.itemType = "Furniture";

        // dec_3_4 (prefab fields)
        dec_3_4.item = 589;
        dec_3_4.itemType = "Furniture";

        // dec_3_5 (prefab fields)
        dec_3_5.item = 590;
        dec_3_5.itemType = "Furniture";

        // dec_3_secret_1 (components)
        const dec_3_secret_1SimpleButton = new SimpleButton(dec_3_secret_1);
        dec_3_secret_1SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(134);;

        // dec_3_secret_2 (components)
        const dec_3_secret_2SimpleButton = new SimpleButton(dec_3_secret_2);
        dec_3_secret_2SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(802);;

        // dec_3_secret (components)
        const dec_3_secretSimpleButton = new SimpleButton(dec_3_secret);
        dec_3_secretSimpleButton.callback = () => this.interface.prompt.showSecretFurniture(473);;

        // dec_3_secret_3 (components)
        const dec_3_secret_3SimpleButton = new SimpleButton(dec_3_secret_3);
        dec_3_secret_3SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(137);;

        // dec_3_secret_4 (components)
        const dec_3_secret_4SimpleButton = new SimpleButton(dec_3_secret_4);
        dec_3_secret_4SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(96);;

        // dec_3_secret_5 (components)
        const dec_3_secret_5SimpleButton = new SimpleButton(dec_3_secret_5);
        dec_3_secret_5SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(93);;

        // dec_3_secret_6 (components)
        const dec_3_secret_6SimpleButton = new SimpleButton(dec_3_secret_6);
        dec_3_secret_6SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(97);;

        // dec_2_1 (prefab fields)
        dec_2_1.item = 591;
        dec_2_1.itemType = "Furniture";

        // dec_2_2 (prefab fields)
        dec_2_2.item = 130;
        dec_2_2.itemType = "Furniture";

        // dec_2_3 (prefab fields)
        dec_2_3.item = 135;
        dec_2_3.itemType = "Furniture";

        // dec_2_4 (prefab fields)
        dec_2_4.item = 131;
        dec_2_4.itemType = "Furniture";

        // dec_2_secret_1 (components)
        const dec_2_secret_1SimpleButton = new SimpleButton(dec_2_secret_1);
        dec_2_secret_1SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(133);;

        // dec_2_secret (components)
        const dec_2_secretSimpleButton = new SimpleButton(dec_2_secret);
        dec_2_secretSimpleButton.callback = () => this.interface.prompt.showSecretFurniture(801);;

        // dec_2_secret_2 (components)
        const dec_2_secret_2SimpleButton = new SimpleButton(dec_2_secret_2);
        dec_2_secret_2SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(485);;

        // dec_2_secret_3 (components)
        const dec_2_secret_3SimpleButton = new SimpleButton(dec_2_secret_3);
        dec_2_secret_3SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(575);;

        // dec_2_secret_4 (components)
        const dec_2_secret_4SimpleButton = new SimpleButton(dec_2_secret_4);
        dec_2_secret_4SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(566);;

        // dec_2_secret_5 (components)
        const dec_2_secret_5SimpleButton = new SimpleButton(dec_2_secret_5);
        dec_2_secret_5SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(91);;

        // dec_2_secret_6 (components)
        const dec_2_secret_6SimpleButton = new SimpleButton(dec_2_secret_6);
        dec_2_secret_6SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(92);;

        // dec_2_secret_7 (components)
        const dec_2_secret_7SimpleButton = new SimpleButton(dec_2_secret_7);
        dec_2_secret_7SimpleButton.callback = () => this.interface.prompt.showSecretFurniture(95);;

        // pageFront (components)
        const pageFrontButton = new Button(pageFront);
        pageFrontButton.spriteName = "cc-page-front";
        pageFrontButton.callback = () => this.nextPage();

        // closeRight_1 (components)
        const closeRight_1Button = new Button(closeRight_1);
        closeRight_1Button.spriteName = "cc-close";
        closeRight_1Button.callback = () => this.close();
        closeRight_1Button.pixelPerfect = true;

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
