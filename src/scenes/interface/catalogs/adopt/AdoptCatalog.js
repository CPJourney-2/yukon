import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Interactive, SimpleButton, Zone } from '@components/components'
import AdoptButton from './buttons/AdoptButton';



export const preload = {
    key: 'adopt-pack',
    url: 'assets/media/interface/catalogs/adopt/adopt-pack.json',
    loadString: ['loading', 'adopt']
}

/* START OF COMPILED CODE */

export default class AdoptCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.tooltips;
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
        const page11 = scene.add.container(0, -1);
        page11.visible = false;
        this.add(page11);

        // p11
        const p11 = scene.add.image(-16, -121, "adopt", "page/11");
        p11.setOrigin(0, 0);
        page11.add(p11);

        // pageLeft_1
        const pageLeft_1 = scene.add.image(492, 591, "adopt", "page_left");
        pageLeft_1.setOrigin(0, 0);
        page11.add(pageLeft_1);

        // closeLeft
        const closeLeft = scene.add.image(491, 40, "adopt", "close_left");
        closeLeft.setOrigin(0, 0);
        page11.add(closeLeft);

        // page10
        const page10 = scene.add.container(0, -2);
        page10.visible = false;
        this.add(page10);

        // p10
        const p10 = scene.add.image(-16, -121, "adopt", "page/10");
        p10.setOrigin(0, 0);
        page10.add(p10);

        // page9
        const page9 = scene.add.container(0, -3);
        page9.visible = false;
        this.add(page9);

        // p9
        const p9 = scene.add.image(-16, -121, "adopt", "page/9");
        p9.setOrigin(0, 0);
        page9.add(p9);

        // page8
        const page8 = scene.add.container(0, -4);
        page8.visible = false;
        this.add(page8);

        // p8
        const p8 = scene.add.image(-16, -121, "adopt", "page/8");
        p8.setOrigin(0, 0);
        page8.add(p8);

        // triangle
        const triangle = scene.add.triangle(1250, 362, 0, 128, 64, 0, 128, 128);
        triangle.scaleX = 0.23359688822009728;
        triangle.scaleY = 0.07931881628813214;
        triangle.angle = -90;
        triangle.isFilled = true;
        triangle.fillColor = 26265;
        page8.add(triangle);

        // triangle_1
        const triangle_1 = scene.add.triangle(688, 364, 0, 128, 64, 0, 128, 128);
        triangle_1.scaleX = 0.23359688822009728;
        triangle_1.scaleY = 0.07931881628813214;
        triangle_1.angle = 90;
        triangle_1.isFilled = true;
        triangle_1.fillColor = 26265;
        page8.add(triangle_1);

        // zone_1
        const zone_1 = scene.add.rectangle(472, 283, 194, 40);
        zone_1.alpha = 0.0001;
        zone_1.isFilled = true;
        zone_1.fillColor = 65280;
        page8.add(zone_1);

        // zone_2
        const zone_2 = scene.add.rectangle(470, 437, 225, 198);
        zone_2.alpha = 0.0001;
        zone_2.isFilled = true;
        zone_2.fillColor = 65280;
        page8.add(zone_2);

        // zone
        const zone = scene.add.rectangle(472, 602, 331, 117);
        zone.alpha = 0.0001;
        zone.isFilled = true;
        zone.fillColor = 65280;
        page8.add(zone);

        // puffle_icon_btn
        const puffle_icon_btn = scene.add.image(390, 727, "adopt", "puffle_icon_btn");
        puffle_icon_btn.scaleX = 0.9;
        puffle_icon_btn.scaleY = 0.9;
        page8.add(puffle_icon_btn);

        // puffle_icon_btn_1
        const puffle_icon_btn_1 = scene.add.image(445, 727, "adopt", "puffle_icon_btn");
        puffle_icon_btn_1.scaleX = 0.9;
        puffle_icon_btn_1.scaleY = 0.9;
        page8.add(puffle_icon_btn_1);

        // puffle_icon_btn_2
        const puffle_icon_btn_2 = scene.add.image(500, 727, "adopt", "puffle_icon_btn");
        puffle_icon_btn_2.scaleX = 0.9;
        puffle_icon_btn_2.scaleY = 0.9;
        page8.add(puffle_icon_btn_2);

        // puffle_icon_btn_3
        const puffle_icon_btn_3 = scene.add.image(556, 727, "adopt", "puffle_icon_btn");
        puffle_icon_btn_3.scaleX = 0.9;
        puffle_icon_btn_3.scaleY = 0.9;
        page8.add(puffle_icon_btn_3);

        // button_icons
        const button_icons = scene.add.image(473, 726, "adopt", "button_icons");
        button_icons.scaleX = 0.9;
        button_icons.scaleY = 0.9;
        page8.add(button_icons);

        // item_btn_2
        const item_btn_2 = scene.add.image(1108, 425, "adopt", "item_btn");
        item_btn_2.scaleX = 0.9;
        item_btn_2.scaleY = 0.9;
        page8.add(item_btn_2);

        // item_btn_3
        const item_btn_3 = scene.add.image(992, 425, "adopt", "item_btn");
        item_btn_3.scaleX = 0.9;
        item_btn_3.scaleY = 0.9;
        page8.add(item_btn_3);

        // item_btn_1
        const item_btn_1 = scene.add.image(1109, 309, "adopt", "item_btn");
        item_btn_1.scaleX = 0.9;
        item_btn_1.scaleY = 0.9;
        page8.add(item_btn_1);

        // item_btn
        const item_btn = scene.add.image(993, 309, "adopt", "item_btn");
        item_btn.scaleX = 0.9;
        item_btn.scaleY = 0.9;
        page8.add(item_btn);

        // items
        const items = scene.add.image(1052, 366, "adopt", "items");
        items.scaleX = 0.9;
        items.scaleY = 0.9;
        page8.add(items);

        // tooltips
        const tooltips = scene.add.image(768, 473, "adopt", "tooltips/1");
        tooltips.scaleX = 0.9;
        tooltips.scaleY = 0.9;
        tooltips.visible = false;
        page8.add(tooltips);

        // page7
        const page7 = scene.add.container(0, -5);
        page7.visible = false;
        this.add(page7);

        // p7
        const p7 = scene.add.image(-16, -121, "adopt", "page/7");
        p7.setOrigin(0, 0);
        page7.add(p7);

        // adoptButton_6
        const adoptButton_6 = new AdoptButton(scene, 364, 514);
        page7.add(adoptButton_6);

        // adoptButton_7
        const adoptButton_7 = new AdoptButton(scene, 907, 541);
        page7.add(adoptButton_7);

        // page6
        const page6 = scene.add.container(0, -6);
        page6.visible = false;
        this.add(page6);

        // p6
        const p6 = scene.add.image(-16, -121, "adopt", "page/6");
        p6.setOrigin(0, 0);
        page6.add(p6);

        // adoptButton_4
        const adoptButton_4 = new AdoptButton(scene, 589, 534);
        page6.add(adoptButton_4);

        // adoptButton_5
        const adoptButton_5 = new AdoptButton(scene, 1168, 534);
        page6.add(adoptButton_5);

        // page5
        const page5 = scene.add.container(0, -7);
        page5.visible = false;
        this.add(page5);

        // p5
        const p5 = scene.add.image(-16, -121, "adopt", "page/5");
        p5.setOrigin(0, 0);
        page5.add(p5);

        // adoptButton_2
        const adoptButton_2 = new AdoptButton(scene, 355, 536);
        page5.add(adoptButton_2);

        // adoptButton_3
        const adoptButton_3 = new AdoptButton(scene, 915, 528);
        page5.add(adoptButton_3);

        // page4
        const page4 = scene.add.container(1, -8);
        page4.visible = false;
        this.add(page4);

        // p4
        const p4 = scene.add.image(-16, -121, "adopt", "page/4");
        p4.setOrigin(0, 0);
        page4.add(p4);

        // adoptButton
        const adoptButton = new AdoptButton(scene, 599, 506);
        page4.add(adoptButton);

        // adoptButton_1
        const adoptButton_1 = new AdoptButton(scene, 1159, 540);
        page4.add(adoptButton_1);

        // page3
        const page3 = scene.add.container(0, -8);
        page3.visible = false;
        this.add(page3);

        // p3
        const p3 = scene.add.image(-16, -121, "adopt", "page/3");
        p3.setOrigin(0, 0);
        page3.add(p3);

        // adopt
        const adopt = new AdoptButton(scene, 359, 563);
        page3.add(adopt);

        // adopt_1
        const adopt_1 = new AdoptButton(scene, 943, 535);
        page3.add(adopt_1);

        // page2
        const page2 = scene.add.container(0, -9);
        page2.visible = false;
        this.add(page2);

        // p2
        const p2 = scene.add.image(-16, -121, "adopt", "page/2");
        p2.setOrigin(0, 0);
        page2.add(p2);

        // zone_3
        const zone_3 = scene.add.rectangle(470, 326, 386, 66);
        zone_3.alpha = 0.00001;
        zone_3.isFilled = true;
        zone_3.fillColor = 65280;
        page2.add(zone_3);

        // zone_4
        const zone_4 = scene.add.rectangle(445, 423, 219, 54);
        zone_4.alpha = 0.00001;
        zone_4.isFilled = true;
        zone_4.fillColor = 65280;
        page2.add(zone_4);

        // zone_5
        const zone_5 = scene.add.rectangle(494, 511, 219, 54);
        zone_5.alpha = 0.00001;
        zone_5.isFilled = true;
        zone_5.fillColor = 65280;
        page2.add(zone_5);

        // page1
        const page1 = scene.add.container(0, -9);
        this.add(page1);

        // p1
        const p1 = scene.add.image(-15, -120, "adopt", "page/1");
        p1.setOrigin(0, 0);
        page1.add(p1);

        // pageFront
        const pageFront = scene.add.image(469, 42, "adopt", "page_front");
        pageFront.setOrigin(0, 0);
        page1.add(pageFront);

        // closeRight_1
        const closeRight_1 = scene.add.image(925, 37, "adopt", "close_right");
        closeRight_1.setOrigin(0, 0);
        page1.add(closeRight_1);

        // buttons
        const buttons = scene.add.container(190, 32);
        buttons.visible = false;
        this.add(buttons);

        // closeRight
        const closeRight = scene.add.image(1012, 0, "adopt", "close_right");
        closeRight.setOrigin(0, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = scene.add.image(1012, 549, "adopt", "page_right");
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = scene.add.image(0, 549, "adopt", "page_left");
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

        // pageLeft_1 (components)
        const pageLeft_1Button = new Button(pageLeft_1);
        pageLeft_1Button.spriteName = "page_left";
        pageLeft_1Button.callback = () => this.prevPage();
        pageLeft_1Button.pixelPerfect = true;

        // closeLeft (components)
        const closeLeftButton = new Button(closeLeft);
        closeLeftButton.spriteName = "close_left";
        closeLeftButton.callback = () => this.close();
        closeLeftButton.pixelPerfect = true;

        // zone_1 (components)
        const zone_1SimpleButton = new SimpleButton(zone_1);
        zone_1SimpleButton.hoverCallback = () => this.hover(1);
        zone_1SimpleButton.hoverOutCallback = () => this.hover(0);

        // zone_2 (components)
        const zone_2SimpleButton = new SimpleButton(zone_2);
        zone_2SimpleButton.hoverCallback = () => this.hover(2);
        zone_2SimpleButton.hoverOutCallback = () => this.hover(0);

        // zone (components)
        const zoneSimpleButton = new SimpleButton(zone);
        zoneSimpleButton.hoverCallback = () => this.hover(3);
        zoneSimpleButton.hoverOutCallback = () => this.hover(0);

        // puffle_icon_btn (components)
        const puffle_icon_btnButton = new Button(puffle_icon_btn);
        puffle_icon_btnButton.spriteName = "puffle_icon_btn";
        puffle_icon_btnButton.hoverCallback = () => this.hover(4);
        puffle_icon_btnButton.hoverOutCallback = () => this.hover(0);

        // puffle_icon_btn_1 (components)
        const puffle_icon_btn_1Button = new Button(puffle_icon_btn_1);
        puffle_icon_btn_1Button.spriteName = "puffle_icon_btn";
        puffle_icon_btn_1Button.hoverCallback = () => this.hover(5);
        puffle_icon_btn_1Button.hoverOutCallback = () => this.hover(0);

        // puffle_icon_btn_2 (components)
        const puffle_icon_btn_2Button = new Button(puffle_icon_btn_2);
        puffle_icon_btn_2Button.spriteName = "puffle_icon_btn";
        puffle_icon_btn_2Button.hoverCallback = () => this.hover(6);
        puffle_icon_btn_2Button.hoverOutCallback = () => this.hover(0);

        // puffle_icon_btn_3 (components)
        const puffle_icon_btn_3Button = new Button(puffle_icon_btn_3);
        puffle_icon_btn_3Button.spriteName = "puffle_icon_btn";
        puffle_icon_btn_3Button.hoverCallback = () => this.hover(7);
        puffle_icon_btn_3Button.hoverOutCallback = () => this.hover(0);

        // item_btn_2 (components)
        const item_btn_2Button = new Button(item_btn_2);
        item_btn_2Button.spriteName = "item_btn";
        item_btn_2Button.hoverCallback = () => this.hover(11);
        item_btn_2Button.hoverOutCallback = () => this.hover(0);

        // item_btn_3 (components)
        const item_btn_3Button = new Button(item_btn_3);
        item_btn_3Button.spriteName = "item_btn";
        item_btn_3Button.hoverCallback = () => this.hover(10);
        item_btn_3Button.hoverOutCallback = () => this.hover(0);

        // item_btn_1 (components)
        const item_btn_1Button = new Button(item_btn_1);
        item_btn_1Button.spriteName = "item_btn";
        item_btn_1Button.hoverCallback = () => this.hover(9);
        item_btn_1Button.hoverOutCallback = () => this.hover(0);

        // item_btn (components)
        const item_btnButton = new Button(item_btn);
        item_btnButton.spriteName = "item_btn";
        item_btnButton.hoverCallback = () => this.hover(8);
        item_btnButton.hoverOutCallback = () => this.hover(0);

        // adoptButton_6 (prefab fields)
        adoptButton_6.puffle_id = 8;

        // adoptButton_7 (prefab fields)
        adoptButton_7.puffle_id = 9;

        // adoptButton_4 (prefab fields)
        adoptButton_4.puffle_id = 4;

        // adoptButton_5 (prefab fields)
        adoptButton_5.puffle_id = 7;

        // adoptButton_2 (prefab fields)
        adoptButton_2.puffle_id = 3;

        // adoptButton_3 (prefab fields)
        adoptButton_3.puffle_id = 6;

        // adoptButton (prefab fields)
        adoptButton.puffle_id = 1;

        // adoptButton_1 (prefab fields)
        adoptButton_1.puffle_id = 2;

        // adopt (prefab fields)
        adopt.puffle_id = 0;

        // adopt_1 (prefab fields)
        adopt_1.puffle_id = 5;

        // zone_3 (components)
        const zone_3SimpleButton = new SimpleButton(zone_3);
        zone_3SimpleButton.callback = () => this.showPage(2);

        // zone_4 (components)
        const zone_4SimpleButton = new SimpleButton(zone_4);
        zone_4SimpleButton.callback = () => this.showPage(7);

        // zone_5 (components)
        const zone_5SimpleButton = new SimpleButton(zone_5);
        zone_5SimpleButton.callback = () => this.showPage(8);

        // pageFront (components)
        const pageFrontButton = new Button(pageFront);
        pageFrontButton.spriteName = "page_front";
        pageFrontButton.callback = () => this.nextPage();

        // closeRight_1 (components)
        const closeRight_1Button = new Button(closeRight_1);
        closeRight_1Button.spriteName = "close_right";
        closeRight_1Button.callback = () => this.close();
        closeRight_1Button.pixelPerfect = true;

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

        this.tooltips = tooltips;
        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        this.viking = 0;
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    hover(tooltip) {
        if(tooltip == 0) {
            this.tooltips.visible = false;
            return;
        }
        this.tooltips.setTexture("adopt", `tooltips/${tooltip}`);
        this.tooltips.visible = true;
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
