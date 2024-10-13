import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

import Tag1 from '@scenes/interface/shared_prefabs/Tag1'
import Tag2 from '@scenes/interface/shared_prefabs/Tag2'
import BuyButton from '@scenes/interface/shared_prefabs/BuyButton'


export const preload = {
    key: 'shadowscatalog-pack',
    url: 'assets/media/interface/catalogs/shadows/shadowscatalog-pack.json',
    loadString: ['loading', 'Battle of the Ancient Shadows']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class ShadowsCatalog extends BookContainer {

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

        // page5
        const page5 = scene.add.container(760, 480);
        page5.visible = false;
        this.add(page5);

        // page_3
        const page_3 = scene.add.image(0, 0, "shadowscatalog", "page4");
        page5.add(page_3);

        // turns_left_1235235
        const turns_left_1235235 = scene.add.sprite(-181, 176, "shadowscatalog", "left");
        turns_left_1235235.scaleX = 0.4;
        turns_left_1235235.scaleY = 0.4;
        page5.add(turns_left_1235235);

        // turns_close_2324543
        const turns_close_2324543 = scene.add.sprite(-202, -326, "shadowscatalog", "left_close");
        turns_close_2324543.scaleX = 0.5;
        turns_close_2324543.scaleY = 0.5;
        page5.add(turns_close_2324543);

        // page4
        const page4 = scene.add.container(760, 480);
        page4.visible = false;
        this.add(page4);

        // page_2
        const page_2 = scene.add.image(0, 0, "shadowscatalog", "page3");
        page4.add(page_2);

        // tag_5
        const tag_5 = new Tag2(scene, -271, 83, "buybuttons", "buy2");
        tag_5.scaleX = 1;
        tag_5.scaleY = 1;
        tag_5.angle = -6.000000000000001;
        page4.add(tag_5);

        // tag_7
        const tag_7 = new Tag1(scene, -413, -213, "buybuttons", "buy1");
        tag_7.scaleX = 1;
        tag_7.scaleY = 1;
        page4.add(tag_7);

        // page3
        const page3 = scene.add.container(760, 480);
        page3.visible = false;
        this.add(page3);

        // page_1
        const page_1 = scene.add.image(0, 0, "shadowscatalog", "page2");
        page3.add(page_1);

        // tag_1
        const tag_1 = new Tag2(scene, 408, -157, "buybuttons", "buy2");
        tag_1.angle = -32.00000000000006;
        page3.add(tag_1);

        // tag_3
        const tag_3 = new Tag1(scene, 46, 191, "buybuttons", "buy1");
        tag_3.angle = -29.999999999999996;
        page3.add(tag_3);

        // page2
        const page2 = scene.add.container(760, 480);
        page2.visible = false;
        this.add(page2);

        // page
        const page = scene.add.image(0, 0, "shadowscatalog", "page1");
        page2.add(page);

        // tag1
        const tag1 = new Tag1(scene, -518, -158, "buybuttons", "buy1");
        page2.add(tag1);

        // tag2
        const tag2 = new Tag2(scene, 368, -158, "buybuttons", "buy2");
        page2.add(tag2);

        // tag
        const tag = new Tag2(scene, 387, 135, "buybuttons", "buy2");
        tag.angle = 29.000000000000004;
        page2.add(tag);

        // page1
        const page1 = scene.add.container(760, 480);
        page1.visible = false;
        this.add(page1);

        // page0
        const page0 = scene.add.image(-760, -480, "shadowscatalog", "page0");
        page0.setOrigin(0, 0);
        page1.add(page0);

        // turns_close_111111
        const turns_close_111111 = scene.add.sprite(225, -323, "shadowscatalog", "close");
        turns_close_111111.scaleX = 0.5;
        turns_close_111111.scaleY = 0.5;
        page1.add(turns_close_111111);

        // turns_right_1111
        const turns_right_1111 = scene.add.sprite(205, 176, "shadowscatalog", "right");
        turns_right_1111.scaleX = 0.4;
        turns_right_1111.scaleY = 0.4;
        page1.add(turns_right_1111);

        // buttons
        const buttons = scene.add.container(190, 41);
        buttons.visible = false;
        this.add(buttons);

        // coins
        const coins = scene.add.text(1133, 798, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // turns_right
        const turns_right = scene.add.sprite(1054, 616, "shadowscatalog", "right");
        turns_right.scaleX = 0.4;
        turns_right.scaleY = 0.4;
        buttons.add(turns_right);

        // turns_left
        const turns_left = scene.add.sprite(87, 615, "shadowscatalog", "left");
        turns_left.scaleX = 0.4;
        turns_left.scaleY = 0.4;
        buttons.add(turns_left);

        // turns_close
        const turns_close = scene.add.sprite(1077, 114, "shadowscatalog", "close");
        turns_close.scaleX = 0.5;
        turns_close.scaleY = 0.5;
        buttons.add(turns_close);

        // buy button so pack loads
        const buy_button_so_pack_loads = scene.add.image(-209, 147, "buybuttons", "buy1");
        buy_button_so_pack_loads.visible = false;
        this.add(buy_button_so_pack_loads);

        // buy2
        const buy2 = scene.add.image(-679, 482, "buybuttons", "buy2");
        buy2.visible = false;
        this.add(buy2);

        // lists
        const pages = [page1, page2, page3, page4, page5];

        // block (components)
        new Interactive(block);

        // turns_left_1235235 (components)
        const turns_left_1235235Button = new Button(turns_left_1235235);
        turns_left_1235235Button.spriteName = "left";
        turns_left_1235235Button.callback = () => this.prevPage();;
        turns_left_1235235Button.activeFrame = true;

        // turns_close_2324543 (components)
        const turns_close_2324543Button = new Button(turns_close_2324543);
        turns_close_2324543Button.spriteName = "left_close";
        turns_close_2324543Button.callback = () => this.close();
        turns_close_2324543Button.activeFrame = true;
        turns_close_2324543Button.pixelPerfect = true;

        // tag_5 (prefab fields)
        tag_5.item = 5580;

        // tag_7 (prefab fields)
        tag_7.item = 489;

        // tag_1 (prefab fields)
        tag_1.item = 4457;

        // tag_3 (prefab fields)
        tag_3.item = 6096;

        // tag1 (prefab fields)
        tag1.item = 4455;

        // tag2 (prefab fields)
        tag2.item = 4456;

        // tag (prefab fields)
        tag.item = 6095;

        // turns_close_111111 (components)
        const turns_close_111111Button = new Button(turns_close_111111);
        turns_close_111111Button.spriteName = "close";
        turns_close_111111Button.callback = () => this.close();
        turns_close_111111Button.activeFrame = true;
        turns_close_111111Button.pixelPerfect = true;

        // turns_right_1111 (components)
        const turns_right_1111Button = new Button(turns_right_1111);
        turns_right_1111Button.spriteName = "right";
        turns_right_1111Button.callback = () => this.nextPage();;
        turns_right_1111Button.activeFrame = true;

        // turns_right (components)
        const turns_rightButton = new Button(turns_right);
        turns_rightButton.spriteName = "right";
        turns_rightButton.callback = () => this.nextPage();;
        turns_rightButton.activeFrame = true;
        turns_rightButton.pixelPerfect = true;

        // turns_left (components)
        const turns_leftButton = new Button(turns_left);
        turns_leftButton.spriteName = "left";
        turns_leftButton.callback = () => this.prevPage();;
        turns_leftButton.activeFrame = true;
        turns_leftButton.pixelPerfect = true;

        // turns_close (components)
        const turns_closeButton = new Button(turns_close);
        turns_closeButton.spriteName = "close";
        turns_closeButton.callback = () => this.close();
        turns_closeButton.activeFrame = true;
        turns_closeButton.pixelPerfect = true;

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
            this.misc_outline.visible = false
            return
        }

        this.misc_outline.visible = true
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
