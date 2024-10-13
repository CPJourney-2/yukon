import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

import Tag1 from '@scenes/interface/shared_prefabs/Tag1'
import Tag2 from '@scenes/interface/shared_prefabs/Tag2'
import BuyButton from '@scenes/interface/shared_prefabs/BuyButton'


export const preload = {
    key: 'fablescatalog-pack',
    url: 'assets/media/interface/catalogs/fairyfables/fablescatalog-pack.json',
    loadString: ['loading', 'Fairy Fables']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class FairyCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.misc_outline;
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

        // pages_page666
        const pages_page666 = scene.add.image(0, 0, "fablescatalog", "pages/page6");
        page6.add(pages_page666);

        // turns_left_1235235
        const turns_left_1235235 = scene.add.sprite(-181, 176, "fablescatalog", "turns/left");
        turns_left_1235235.scaleX = 0.4;
        turns_left_1235235.scaleY = 0.4;
        page6.add(turns_left_1235235);

        // turns_close_2324543
        const turns_close_2324543 = scene.add.sprite(-202, -326, "fablescatalog", "turns/left_close");
        turns_close_2324543.scaleX = 0.5;
        turns_close_2324543.scaleY = 0.5;
        page6.add(turns_close_2324543);

        // page5
        const page5 = scene.add.container(760, 480);
        page5.visible = false;
        this.add(page5);

        // pages_page15
        const pages_page15 = scene.add.image(0, 0, "fablescatalog", "pages/page5");
        page5.add(pages_page15);

        // misc_hat
        const misc_hat = scene.add.image(-195, -240, "fablescatalog", "misc/hat");
        page5.add(misc_hat);

        // misc_book
        const misc_book = scene.add.image(289, 65, "fablescatalog", "misc/book");
        page5.add(misc_book);

        // misc_outline
        const misc_outline = scene.add.image(-293, 141, "fablescatalog", "misc/outline");
        misc_outline.visible = false;
        page5.add(misc_outline);

        // misc_bg
        const misc_bg = scene.add.image(-293, 141, "fablescatalog", "misc/bg");
        page5.add(misc_bg);

        // buyButton
        const buyButton = new BuyButton(scene, -469, -225);
        page5.add(buyButton);

        // page_4
        const page_4 = scene.add.container(760, 480);
        page_4.visible = false;
        this.add(page_4);

        // pages_page14
        const pages_page14 = scene.add.image(0, 0, "fablescatalog", "pages/page4");
        page_4.add(pages_page14);

        // tag_4
        const tag_4 = new Tag1(scene, -525, -49, "buybuttons", "buy1");
        page_4.add(tag_4);

        // tag_5
        const tag_5 = new Tag2(scene, 328, -184, "buybuttons", "buy2");
        page_4.add(tag_5);

        // tag_6
        const tag_6 = new Tag2(scene, -165, 149, "buybuttons", "buy2");
        tag_6.angle = -32.00000000000006;
        page_4.add(tag_6);

        // tag_7
        const tag_7 = new Tag1(scene, 65, -54, "buybuttons", "buy1");
        page_4.add(tag_7);

        // rectangle2
        const rectangle2 = scene.add.rectangle(513, -177, 128, 128);
        rectangle2.scaleX = 0.6998956655321859;
        rectangle2.scaleY = 0.4664612190804188;
        page_4.add(rectangle2);

        // page3
        const page3 = scene.add.container(760, 480);
        page3.visible = false;
        this.add(page3);

        // pages_page13
        const pages_page13 = scene.add.image(0, 0, "fablescatalog", "pages/page3");
        page3.add(pages_page13);

        // tag_1
        const tag_1 = new Tag2(scene, 354, -231, "buybuttons", "buy2");
        tag_1.angle = -32.00000000000006;
        page3.add(tag_1);

        // tag_2
        const tag_2 = new Tag2(scene, 373, -44, "buybuttons", "buy2");
        page3.add(tag_2);

        // tag_3
        const tag_3 = new Tag1(scene, 88, 24, "buybuttons", "buy1");
        page3.add(tag_3);

        // page2
        const page2 = scene.add.container(760, 480);
        page2.visible = false;
        this.add(page2);

        // pages_page12
        const pages_page12 = scene.add.image(0, 0, "fablescatalog", "pages/page2");
        page2.add(pages_page12);

        // tag1
        const tag1 = new Tag1(scene, 120, -127, "buybuttons", "buy1");
        page2.add(tag1);

        // tag2
        const tag2 = new Tag2(scene, 374, 104, "buybuttons", "buy2");
        page2.add(tag2);

        // tag
        const tag = new Tag2(scene, 354, -236, "buybuttons", "buy2");
        tag.angle = -32.00000000000006;
        page2.add(tag);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(405, -351, 128, 128);
        rectangle_1.scaleX = 0.6998956655321859;
        rectangle_1.scaleY = 0.4664612190804188;
        page2.add(rectangle_1);

        // page1
        const page1 = scene.add.container(760, 480);
        page1.visible = false;
        this.add(page1);

        // pages_page1
        const pages_page1 = scene.add.image(0, 0, "fablescatalog", "pages/page1");
        page1.add(pages_page1);

        // turns_close_111111
        const turns_close_111111 = scene.add.sprite(225, -323, "fablescatalog", "turns/close");
        turns_close_111111.scaleX = 0.5;
        turns_close_111111.scaleY = 0.5;
        page1.add(turns_close_111111);

        // turns_right_1111
        const turns_right_1111 = scene.add.sprite(205, 176, "fablescatalog", "turns/right");
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
        const turns_right = scene.add.sprite(1054, 616, "fablescatalog", "turns/right");
        turns_right.scaleX = 0.4;
        turns_right.scaleY = 0.4;
        buttons.add(turns_right);

        // turns_left
        const turns_left = scene.add.sprite(87, 615, "fablescatalog", "turns/left");
        turns_left.scaleX = 0.4;
        turns_left.scaleY = 0.4;
        buttons.add(turns_left);

        // turns_close
        const turns_close = scene.add.sprite(1074, 117, "fablescatalog", "turns/close");
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
        const pages = [page1, page2, page3, page_4, page5, page6];

        // block (components)
        new Interactive(block);

        // turns_left_1235235 (components)
        const turns_left_1235235Button = new Button(turns_left_1235235);
        turns_left_1235235Button.spriteName = "turns/left";
        turns_left_1235235Button.callback = () => this.prevPage();;
        turns_left_1235235Button.activeFrame = true;

        // turns_close_2324543 (components)
        const turns_close_2324543Button = new Button(turns_close_2324543);
        turns_close_2324543Button.spriteName = "turns/left_close";
        turns_close_2324543Button.callback = () => this.close();
        turns_close_2324543Button.activeFrame = true;
        turns_close_2324543Button.pixelPerfect = true;

        // misc_book (components)
        const misc_bookButton = new Button(misc_book);
        misc_bookButton.spriteName = "misc/book";
        misc_bookButton.callback = () => {this.interface.loadWidget("FairyFablesBook")};
        misc_bookButton.pixelPerfect = true;

        // misc_bg (components)
        const misc_bgSimpleButton = new SimpleButton(misc_bg);
        misc_bgSimpleButton.hoverCallback = () => {this.onBgHover(false)};
        misc_bgSimpleButton.hoverOutCallback = () => {this.onBgHover(true)};
        misc_bgSimpleButton.callback = () => {this.interface.prompt.showItem(9009)};
        misc_bgSimpleButton.pixelPerfect = true;

        // buyButton (prefab fields)
        buyButton.item = 489;

        // tag_4 (prefab fields)
        tag_4.item = 4039;

        // tag_5 (prefab fields)
        tag_5.item = 1024;

        // tag_6 (prefab fields)
        tag_6.item = 6010;

        // tag_7 (prefab fields)
        tag_7.item = 4037;

        // rectangle2 (components)
        const rectangle2SimpleButton = new SimpleButton(rectangle2);
        rectangle2SimpleButton.callback = () => {this.interface.prompt.showItem(310)};

        // tag_1 (prefab fields)
        tag_1.item = 1023;

        // tag_2 (prefab fields)
        tag_2.item = 301;

        // tag_3 (prefab fields)
        tag_3.item = 4036;

        // tag1 (prefab fields)
        tag1.item = 3008;

        // tag2 (prefab fields)
        tag2.item = 4038;

        // tag (prefab fields)
        tag.item = 1025;

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.callback = () => {this.interface.prompt.showItem(5013)};

        // turns_close_111111 (components)
        const turns_close_111111Button = new Button(turns_close_111111);
        turns_close_111111Button.spriteName = "turns/close";
        turns_close_111111Button.callback = () => this.close();
        turns_close_111111Button.activeFrame = true;
        turns_close_111111Button.pixelPerfect = true;

        // turns_right_1111 (components)
        const turns_right_1111Button = new Button(turns_right_1111);
        turns_right_1111Button.spriteName = "turns/right";
        turns_right_1111Button.callback = () => this.nextPage();;
        turns_right_1111Button.activeFrame = true;

        // turns_right (components)
        const turns_rightButton = new Button(turns_right);
        turns_rightButton.spriteName = "turns/right";
        turns_rightButton.callback = () => this.nextPage();;
        turns_rightButton.activeFrame = true;
        turns_rightButton.pixelPerfect = true;

        // turns_left (components)
        const turns_leftButton = new Button(turns_left);
        turns_leftButton.spriteName = "turns/left";
        turns_leftButton.callback = () => this.prevPage();;
        turns_leftButton.activeFrame = true;
        turns_leftButton.pixelPerfect = true;

        // turns_close (components)
        const turns_closeButton = new Button(turns_close);
        turns_closeButton.spriteName = "turns/close";
        turns_closeButton.callback = () => this.close();
        turns_closeButton.activeFrame = true;
        turns_closeButton.pixelPerfect = true;

        this.misc_outline = misc_outline;
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
