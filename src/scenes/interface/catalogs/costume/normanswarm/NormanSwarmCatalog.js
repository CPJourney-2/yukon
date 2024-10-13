import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton, PolyButton } from '@components/components'

import Tag1 from '@scenes/interface/shared_prefabs/Tag1'
import Tag2 from '@scenes/interface/shared_prefabs/Tag2'
import BuyButton from '@scenes/interface/shared_prefabs/BuyButton'


export const preload = {
    key: 'normanswarm-catalog-pack',
    url: 'assets/media/interface/catalogs/costume/normanswarm/normanswarm-catalog-pack.json',
    loadString: ['loading', 'costume']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class NormanSwarmCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.secret_feet;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.secret_body;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.secret_head;
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
        const page7 = scene.add.container(760, 480);
        page7.visible = false;
        this.add(page7);

        // page_7
        const page_7 = scene.add.image(0, 0, "normanswarm-catalog", "norman-pg7");
        page7.add(page_7);

        // back_left_button
        const back_left_button = scene.add.sprite(-204, 220, "commonbook", "cc-page-left");
        page7.add(back_left_button);

        // back_catalog_close
        const back_catalog_close = scene.add.sprite(-204, -329, "commonbook", "cc-close");
        back_catalog_close.flipX = true;
        page7.add(back_catalog_close);

        // page6
        const page6 = scene.add.container(760, 480);
        page6.visible = false;
        this.add(page6);

        // page_6
        const page_6 = scene.add.image(0, 0, "normanswarm-catalog", "norman-pg6");
        page6.add(page_6);

        // buyButton_7
        const buyButton_7 = new BuyButton(scene, -477, -239);
        page6.add(buyButton_7);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(-262, 130, 128, 128);
        rectangle_2.scaleX = 2.18475436163401;
        rectangle_2.scaleY = 2.169713625109182;
        page6.add(rectangle_2);

        // page5
        const page5 = scene.add.container(760, 480);
        page5.visible = false;
        this.add(page5);

        // page_5
        const page_5 = scene.add.image(0, 0, "normanswarm-catalog", "norman-pg5");
        page5.add(page_5);

        // tag_5
        const tag_5 = new Tag1(scene, -412, -70);
        tag_5.angle = 15;
        tag_5.setOrigin(0.894463955816078, 0.4372934895100823);
        page5.add(tag_5);

        // tag_8
        const tag_8 = new Tag1(scene, 178, -300);
        tag_8.angle = 15;
        tag_8.setOrigin(0.894463955816078, 0.4372934895100823);
        page5.add(tag_8);

        // tag_9
        const tag_9 = new Tag2(scene, 453, -200);
        tag_9.angle = 15;
        page5.add(tag_9);

        // tag_10
        const tag_10 = new Tag2(scene, 435, -59);
        tag_10.angle = 5;
        page5.add(tag_10);

        // secret_feet
        const secret_feet = scene.add.rectangle(408, 159, 80, 110);
        secret_feet.scaleX = 0.49979005075443433;
        secret_feet.scaleY = 0.3555573013324802;
        page5.add(secret_feet);

        // page4
        const page4 = scene.add.container(760, 480);
        page4.visible = false;
        this.add(page4);

        // page_4
        const page_4 = scene.add.image(0, 0, "normanswarm-catalog", "norman-pg4");
        page4.add(page_4);

        // tag_2
        const tag_2 = new Tag1(scene, -420, -182);
        tag_2.angle = 8;
        tag_2.setOrigin(0.894463955816078, 0.4372934895100823);
        page4.add(tag_2);

        // tag_3
        const tag_3 = new Tag2(scene, 363, -298);
        tag_3.angle = 15;
        page4.add(tag_3);

        // tag_4
        const tag_4 = new Tag1(scene, 168, -162);
        tag_4.angle = 10;
        tag_4.setOrigin(0.894463955816078, 0.4372934895100823);
        page4.add(tag_4);

        // tag
        const tag = new Tag2(scene, 374, -13);
        tag.angle = -10;
        page4.add(tag);

        // tag_1
        const tag_1 = new Tag1(scene, 250, 113);
        tag_1.angle = 5;
        tag_1.setOrigin(0.894463955816078, 0.4372934895100823);
        page4.add(tag_1);

        // secret_body
        const secret_body = scene.add.rectangle(67, 106, 80, 110);
        secret_body.scaleX = 0.480276588375766;
        secret_body.scaleY = 0.16091552046112695;
        page4.add(secret_body);

        // page3
        const page3 = scene.add.container(760, 480);
        page3.visible = false;
        this.add(page3);

        // page_3
        const page_3 = scene.add.image(0, 0, "normanswarm-catalog", "norman-pg3");
        page3.add(page_3);

        // tag2
        const tag2 = new Tag2(scene, 339, -370);
        tag2.angle = 20;
        page3.add(tag2);

        // tag_6
        const tag_6 = new Tag1(scene, 148, -293);
        tag_6.angle = 10;
        tag_6.setOrigin(0.894463955816078, 0.4372934895100823);
        page3.add(tag_6);

        // tag_7
        const tag_7 = new Tag1(scene, 127, 96);
        tag_7.angle = -30;
        tag_7.setOrigin(0.894463955816078, 0.4372934895100823);
        page3.add(tag_7);

        // secret_head
        const secret_head = scene.add.rectangle(114, -93, 80, 110);
        secret_head.scaleX = 0.18336588246318736;
        secret_head.scaleY = 0.13043062128196065;
        page3.add(secret_head);

        // page2
        const page2 = scene.add.container(760, 480);
        page2.visible = false;
        this.add(page2);

        // page_2
        const page_2 = scene.add.image(0, 0, "normanswarm-catalog", "norman-pg2");
        page2.add(page_2);

        // tag1
        const tag1 = new Tag1(scene, -423, -324);
        tag1.angle = 20;
        tag1.setOrigin(0.894463955816078, 0.4372934895100823);
        page2.add(tag1);

        // page1
        const page1 = scene.add.container(760, 480);
        page1.visible = false;
        this.add(page1);

        // page_1
        const page_1 = scene.add.image(-760, -480, "normanswarm-catalog", "norman-pg1");
        page_1.setOrigin(0, 0);
        page1.add(page_1);

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
        const pages = [page1, page2, page3, page4, page5, page6, page7];

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

        // buyButton_7 (prefab fields)
        buyButton_7.item = 489;

        // rectangle_2 (components)
        const rectangle_2SimpleButton = new SimpleButton(rectangle_2);
        rectangle_2SimpleButton.callback = () => this.interface.prompt.showItem(9047);

        // tag_5 (prefab fields)
        tag_5.item = 4135;

        // tag_8 (prefab fields)
        tag_8.item = 472;

        // tag_9 (prefab fields)
        tag_9.item = 309;

        // tag_10 (prefab fields)
        tag_10.item = 227;

        // secret_feet (components)
        const secret_feetSimpleButton = new SimpleButton(secret_feet);
        secret_feetSimpleButton.callback = () => this.interface.prompt.showSecret(6029);;

        // tag_2 (prefab fields)
        tag_2.item = 4138;

        // tag_3 (prefab fields)
        tag_3.item = 1102;

        // tag_4 (prefab fields)
        tag_4.item = 3037;

        // tag (prefab fields)
        tag.item = 4136;

        // tag_1 (prefab fields)
        tag_1.item = 6020;

        // secret_body (components)
        const secret_bodySimpleButton = new SimpleButton(secret_body);
        secret_bodySimpleButton.callback = () => this.interface.prompt.showSecret(4129);;

        // tag2 (prefab fields)
        tag2.item = 3036;

        // tag_6 (prefab fields)
        tag_6.item = 1101;

        // tag_7 (prefab fields)
        tag_7.item = 4137;

        // secret_head (components)
        const secret_headSimpleButton = new SimpleButton(secret_head);
        secret_headSimpleButton.callback = () => this.interface.prompt.showSecret(1094);;

        // tag1 (prefab fields)
        tag1.item = 5003;

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

        this.secret_feet = secret_feet;
        this.secret_body = secret_body;
        this.secret_head = secret_head;
        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    onBgHover(out) {
        if (out) {
            this.background_outline.visible = false
            return
        }

        this.background_outline.visible = true
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
