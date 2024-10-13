import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

import Tag1 from '@scenes/interface/shared_prefabs/Tag1'
import Tag2 from '@scenes/interface/shared_prefabs/Tag2'
import BuyButton from '@scenes/interface/shared_prefabs/BuyButton'


export const preload = {
    key: 'viking-catalog-pack',
    url: 'assets/media/interface/catalogs/viking/viking-catalog-pack.json',
    loadString: ['loading', 'The Haunting of the Viking Opera']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class VikingCatalog extends BookContainer {

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

        // page_3
        const page_3 = scene.add.image(0, 0, "viking-catalog", "vikingpg6");
        page6.add(page_3);

        // turns_left_1235235
        const turns_left_1235235 = scene.add.sprite(-204, 220, "viking-catalog", "leftbtn");
        page6.add(turns_left_1235235);

        // turns_close_2324543
        const turns_close_2324543 = scene.add.sprite(-204, -329, "viking-catalog", "back_close");
        page6.add(turns_close_2324543);

        // page5
        const page5 = scene.add.container(760, 480);
        page5.visible = false;
        this.add(page5);

        // page_5
        const page_5 = scene.add.image(0, 0, "viking-catalog", "vikingpg5");
        page5.add(page_5);

        // background_back
        const background_back = scene.add.image(-275.1184893255539, -12.587673782964089, "viking-catalog", "background_back");
        background_back.setOrigin(0.5923201925734225, 0.43845320495105156);
        page5.add(background_back);

        // misc_outline
        const misc_outline = scene.add.image(-292, 0, "viking-catalog", "background_back-active");
        misc_outline.visible = false;
        page5.add(misc_outline);

        // misc_bg
        const misc_bg = scene.add.image(-291, 1, "viking-catalog", "background");
        page5.add(misc_bg);

        // page4
        const page4 = scene.add.container(760, 480);
        page4.visible = false;
        this.add(page4);

        // page_2
        const page_2 = scene.add.image(0, 0, "viking-catalog", "vikingpg4");
        page4.add(page_2);

        // tag_5
        const tag_5 = new Tag2(scene, -163, 135, "buybuttons", "buy2");
        tag_5.scaleX = 1;
        tag_5.scaleY = 1;
        tag_5.angle = 16;
        page4.add(tag_5);

        // tag_2
        const tag_2 = new Tag2(scene, -285, -206, "buybuttons", "buy2");
        tag_2.scaleX = 1;
        tag_2.scaleY = 1;
        tag_2.angle = 10;
        page4.add(tag_2);

        // tag_4
        const tag_4 = new Tag2(scene, 459, 105, "buybuttons", "buy2");
        tag_4.scaleX = 1;
        tag_4.scaleY = 1;
        tag_4.angle = 29.999999999999996;
        page4.add(tag_4);

        // tag_8
        const tag_8 = new Tag1(scene, -100, -293, "buybuttons", "buy1");
        tag_8.angle = 29.999999999999996;
        page4.add(tag_8);

        // tag_6
        const tag_6 = new Tag1(scene, 80, -402, "buybuttons", "buy1");
        tag_6.angle = 10;
        page4.add(tag_6);

        // page3
        const page3 = scene.add.container(760, 480);
        this.add(page3);

        // page_1
        const page_1 = scene.add.image(0, 0, "viking-catalog", "vikingpg3");
        page3.add(page_1);

        // tag_1
        const tag_1 = new Tag2(scene, 446, -177, "buybuttons", "buy2");
        tag_1.angle = -32.00000000000006;
        page3.add(tag_1);

        // tag_3
        const tag_3 = new Tag1(scene, 74, 74, "buybuttons", "buy1");
        tag_3.angle = -29.999999999999996;
        page3.add(tag_3);

        // rectangle_36
        const rectangle_36 = scene.add.rectangle(-120, -163, 94, 76);
        rectangle_36.alpha = 0.001;
        rectangle_36.isFilled = true;
        page3.add(rectangle_36);

        // page2
        const page2 = scene.add.container(760, 480);
        page2.visible = false;
        this.add(page2);

        // page
        const page = scene.add.image(0, 0, "viking-catalog", "vikingpg2");
        page2.add(page);

        // tag1
        const tag1 = new Tag1(scene, -508, -198, "buybuttons", "buy1");
        page2.add(tag1);

        // tag
        const tag = new Tag2(scene, -43, -124, "buybuttons", "buy2");
        tag.angle = 29.000000000000004;
        page2.add(tag);

        // page1
        const page1 = scene.add.container(760, 480);
        page1.visible = false;
        this.add(page1);

        // page0
        const page0 = scene.add.image(-760, -480, "viking-catalog", "vikingpg1");
        page0.setOrigin(0, 0);
        page1.add(page0);

        // turns_right_1111
        const turns_right_1111 = scene.add.sprite(6, -51, "viking-catalog", "front_right");
        page1.add(turns_right_1111);

        // turns_close_111111
        const turns_close_111111 = scene.add.sprite(227, -330, "viking-catalog", "closebtn");
        page1.add(turns_close_111111);

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
        const turns_right = scene.add.sprite(1077, 658, "viking-catalog", "rightbtn");
        buttons.add(turns_right);

        // turns_left
        const turns_left = scene.add.sprite(66, 659, "viking-catalog", "leftbtn");
        buttons.add(turns_left);

        // turns_close
        const turns_close = scene.add.sprite(1077, 114, "viking-catalog", "closebtn");
        buttons.add(turns_close);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6];

        // block (components)
        new Interactive(block);

        // turns_left_1235235 (components)
        const turns_left_1235235Button = new Button(turns_left_1235235);
        turns_left_1235235Button.spriteName = "leftbtn";
        turns_left_1235235Button.callback = () => this.prevPage();;
        turns_left_1235235Button.activeFrame = true;

        // turns_close_2324543 (components)
        const turns_close_2324543Button = new Button(turns_close_2324543);
        turns_close_2324543Button.spriteName = "back_close";
        turns_close_2324543Button.callback = () => this.close();
        turns_close_2324543Button.activeFrame = true;
        turns_close_2324543Button.pixelPerfect = true;

        // misc_bg (components)
        const misc_bgSimpleButton = new SimpleButton(misc_bg);
        misc_bgSimpleButton.hoverCallback = () => {this.onBgHover(false)};
        misc_bgSimpleButton.hoverOutCallback = () => {this.onBgHover(true)};
        misc_bgSimpleButton.callback = () => {this.interface.prompt.showItem(9027)};
        misc_bgSimpleButton.pixelPerfect = true;

        // tag_5 (prefab fields)
        tag_5.item = 4086;

        // tag_2 (prefab fields)
        tag_2.item = 1056;

        // tag_4 (prefab fields)
        tag_4.item = 4015;

        // tag_8 (prefab fields)
        tag_8.item = 244;

        // tag_6 (prefab fields)
        tag_6.item = 347;

        // tag_1 (prefab fields)
        tag_1.item = 1057;

        // tag_3 (prefab fields)
        tag_3.item = 4085;

        // rectangle_36 (components)
        const rectangle_36SimpleButton = new SimpleButton(rectangle_36);
        rectangle_36SimpleButton.callback = () => this.interface.prompt.showSecret(455);

        // tag1 (prefab fields)
        tag1.item = 489;

        // tag (prefab fields)
        tag.item = 5580;

        // turns_right_1111 (components)
        const turns_right_1111Button = new Button(turns_right_1111);
        turns_right_1111Button.spriteName = "front_right";
        turns_right_1111Button.callback = () => this.nextPage();;
        turns_right_1111Button.activeFrame = true;

        // turns_close_111111 (components)
        const turns_close_111111Button = new Button(turns_close_111111);
        turns_close_111111Button.spriteName = "closebtn";
        turns_close_111111Button.callback = () => this.close();
        turns_close_111111Button.activeFrame = true;
        turns_close_111111Button.pixelPerfect = true;

        // turns_right (components)
        const turns_rightButton = new Button(turns_right);
        turns_rightButton.spriteName = "rightbtn";
        turns_rightButton.callback = () => this.nextPage();;
        turns_rightButton.activeFrame = true;
        turns_rightButton.pixelPerfect = true;

        // turns_left (components)
        const turns_leftButton = new Button(turns_left);
        turns_leftButton.spriteName = "leftbtn";
        turns_leftButton.callback = () => this.prevPage();;
        turns_leftButton.activeFrame = true;
        turns_leftButton.pixelPerfect = true;

        // turns_close (components)
        const turns_closeButton = new Button(turns_close);
        turns_closeButton.spriteName = "closebtn";
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
