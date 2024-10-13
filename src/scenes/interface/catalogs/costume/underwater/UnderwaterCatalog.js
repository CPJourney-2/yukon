import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Interactive, SimpleButton } from '@components/components'

import Tag1 from '@scenes/interface/shared_prefabs/Tag1'
import Tag2 from '@scenes/interface/shared_prefabs/Tag2'
import BuyButton from '@scenes/interface/shared_prefabs/BuyButton'
import PhotoButton from '@scenes/interface/shared_prefabs/PhotoButton'

export const preload = {
    key: 'underwater-catalog-pack',
    url: 'assets/media/interface/catalogs/costume/underwater/underwater-catalog-pack.json',
    loadString: ['loading', 'costume']
}

/* START OF COMPILED CODE */

export default class UnderwaterCatalog extends BookContainer {

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

        // page6
        const page6 = scene.add.container(760, 480);
        page6.visible = false;
        this.add(page6);

        // pg6
        const pg6 = scene.add.image(0, 0, "underwater-catalog", "pg6");
        page6.add(pg6);

        // back_left_button
        const back_left_button = scene.add.sprite(-204, 220, "commonbook", "cc-page-left");
        page6.add(back_left_button);

        // back_catalog_close
        const back_catalog_close = scene.add.sprite(-204, -329, "commonbook", "cc-close");
        back_catalog_close.flipX = true;
        page6.add(back_catalog_close);

        // page5
        const page5 = scene.add.container(760, 480);
        page5.visible = false;
        this.add(page5);

        // pg
        const pg = scene.add.image(0, 0, "underwater-catalog", "pg5");
        page5.add(pg);

        // buyButton
        const buyButton = new BuyButton(scene, -500, -243);
        page5.add(buyButton);

        // photoButton
        const photoButton = new PhotoButton(scene, -282, 104);
        page5.add(photoButton);

        // page4
        const page4 = scene.add.container(760, 480);
        page4.visible = false;
        this.add(page4);

        // pg4
        const pg4 = scene.add.image(0, 0, "underwater-catalog", "pg4");
        page4.add(pg4);

        // tag_4
        const tag_4 = new Tag2(scene, 460, -127);
        tag_4.angle = 20;
        page4.add(tag_4);

        // tag_7
        const tag_7 = new Tag1(scene, 51, -290);
        tag_7.angle = 50;
        page4.add(tag_7);

        // secret
        const secret = scene.add.rectangle(325, -257, 128, 128);
        secret.scaleX = 0.075;
        secret.scaleY = 0.075;
        secret.visible = false;
        secret.alpha = 0.05;
        secret.isFilled = true;
        page4.add(secret);

        // page3
        const page3 = scene.add.container(760, 480);
        page3.visible = false;
        this.add(page3);

        // pg3
        const pg3 = scene.add.image(0, 0, "underwater-catalog", "pg3");
        page3.add(pg3);

        // tag1
        const tag1 = new Tag1(scene, -489, 73);
        tag1.angle = -25;
        page3.add(tag1);

        // tag
        const tag = new Tag1(scene, -466, -248);
        tag.angle = 20;
        page3.add(tag);

        // tag_1
        const tag_1 = new Tag1(scene, 47, -129);
        tag_1.angle = 29.999999999999996;
        page3.add(tag_1);

        // tag_2
        const tag_2 = new Tag2(scene, 268, -357);
        tag_2.angle = -14.999999999999998;
        page3.add(tag_2);

        // tag_3
        const tag_3 = new Tag2(scene, 475, -39);
        tag_3.angle = 40;
        page3.add(tag_3);

        // tag_14
        const tag_14 = new Tag2(scene, 299, -236);
        tag_14.angle = -20;
        page3.add(tag_14);

        // page2
        const page2 = scene.add.container(760, 480);
        page2.visible = false;
        this.add(page2);

        // pg2
        const pg2 = scene.add.image(0, 0, "underwater-catalog", "pg2");
        page2.add(pg2);

        // tag_8
        const tag_8 = new Tag2(scene, 202, -351);
        tag_8.angle = -35;
        page2.add(tag_8);

        // tag_9
        const tag_9 = new Tag1(scene, 32, -180);
        tag_9.angle = -25;
        page2.add(tag_9);

        // tag_10
        const tag_10 = new Tag2(scene, 293, -113);
        tag_10.angle = 35;
        page2.add(tag_10);

        // tag_11
        const tag_11 = new Tag2(scene, 374, 96);
        tag_11.angle = -20;
        page2.add(tag_11);

        // tag_12
        const tag_12 = new Tag1(scene, 39, 265);
        tag_12.angle = -25;
        page2.add(tag_12);

        // tag_13
        const tag_13 = new Tag2(scene, 97, -25);
        tag_13.angle = -29.999999999999996;
        page2.add(tag_13);

        // tag_5
        const tag_5 = new Tag2(scene, 485, -146);
        tag_5.angle = 50;
        page2.add(tag_5);

        // page1
        const page1 = scene.add.container(760, 480);
        this.add(page1);

        // pg1
        const pg1 = scene.add.image(0, 0, "underwater-catalog", "pg1");
        page1.add(pg1);

        // right_button_1
        const right_button_1 = scene.add.sprite(2, -54, "commonbook", "cc-page-front");
        page1.add(right_button_1);

        // catalog_close_1
        const catalog_close_1 = scene.add.sprite(227, -330, "commonbook", "cc-close");
        page1.add(catalog_close_1);

        // buttons
        const buttons = scene.add.container(190, 41);
        buttons.visible = false;
        this.add(buttons);

        // coins
        const coins = scene.add.text(1133, 793, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // right_button
        const right_button = scene.add.sprite(1077, 658, "commonbook", "cc-page-right");
        buttons.add(right_button);

        // left_button
        const left_button = scene.add.sprite(66, 659, "commonbook", "cc-page-left");
        buttons.add(left_button);

        // catalog_close
        const catalog_close = scene.add.sprite(1077, 114, "commonbook", "cc-close");
        buttons.add(catalog_close);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6];

        // block (components)
        new Interactive(block);

        // back_left_button (components)
        const back_left_buttonButton = new Button(back_left_button);
        back_left_buttonButton.spriteName = "cc-page-left";
        back_left_buttonButton.callback = () => this.prevPage();;

        // back_catalog_close (components)
        const back_catalog_closeButton = new Button(back_catalog_close);
        back_catalog_closeButton.spriteName = "cc-close";
        back_catalog_closeButton.callback = () => this.close();

        // buyButton (prefab fields)
        buyButton.item = 489;

        // photoButton (prefab fields)
        photoButton.itemId = 9039;

        // tag_4 (prefab fields)
        tag_4.item = 4111;

        // tag_7 (prefab fields)
        tag_7.item = 4112;

        // secret (components)
        const secretSimpleButton = new SimpleButton(secret);
        secretSimpleButton.callback = () => this.interface.prompt.showSecret(716);

        // tag1 (prefab fields)
        tag1.item = 768;

        // tag (prefab fields)
        tag.item = 1076;

        // tag_1 (prefab fields)
        tag_1.item = 5044;

        // tag_2 (prefab fields)
        tag_2.item = 1077;

        // tag_3 (prefab fields)
        tag_3.item = 4110;

        // tag_14 (prefab fields)
        tag_14.item = 3029;

        // tag_8 (prefab fields)
        tag_8.item = 308;

        // tag_9 (prefab fields)
        tag_9.item = 2003;

        // tag_10 (prefab fields)
        tag_10.item = 4114;

        // tag_11 (prefab fields)
        tag_11.item = 364;

        // tag_12 (prefab fields)
        tag_12.item = 4113;

        // tag_13 (prefab fields)
        tag_13.item = 132;

        // tag_5 (prefab fields)
        tag_5.item = 367;

        // right_button_1 (components)
        const right_button_1Button = new Button(right_button_1);
        right_button_1Button.spriteName = "cc-page-front";
        right_button_1Button.callback = () => this.nextPage();;

        // catalog_close_1 (components)
        const catalog_close_1Button = new Button(catalog_close_1);
        catalog_close_1Button.spriteName = "cc-close";
        catalog_close_1Button.callback = () => this.close();
        catalog_close_1Button.activeFrame = true;
        catalog_close_1Button.pixelPerfect = true;

        // right_button (components)
        const right_buttonButton = new Button(right_button);
        right_buttonButton.spriteName = "cc-page-right";
        right_buttonButton.callback = () => this.nextPage();;

        // left_button (components)
        const left_buttonButton = new Button(left_button);
        left_buttonButton.spriteName = "cc-page-left";
        left_buttonButton.callback = () => this.prevPage();;

        // catalog_close (components)
        const catalog_closeButton = new Button(catalog_close);
        catalog_closeButton.spriteName = "cc-close";
        catalog_closeButton.callback = () => this.close();

        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onPhotoOver() {
        this.photo.scaleX = 1.025
        this.photo.scaleY = 1.025
    }

    onPhotoOut() {
        this.photo.scaleX = 1
        this.photo.scaleY = 1
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
