import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'


export const preload = {
    key: 'livingsled-pack',
    url: 'assets/media/interface/catalogs/livingsled/livingsled-pack.json',
    loadString: ['loading', 'Night of the Living Sled']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class LivingSled extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? -4, y ?? 67);

        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // rectangle_1
        const rectangle_1 = scene.add.rectangle(687, 474, 128, 128);
        rectangle_1.scaleX = 19.186366570118256;
        rectangle_1.scaleY = 8.807316563934844;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 0;
        rectangle_1.fillAlpha = 0.2;
        rectangle_1.strokeColor = 0;
        this.add(rectangle_1);

        // page_1
        const page_1 = scene.add.container(791.7715418636799, 498.8033347427845);
        page_1.visible = false;
        this.add(page_1);

        // page12
        const page12 = scene.add.image(-32.81854248046875, -19.229248046875, "livingsled", "sled_pg4");
        page_1.add(page12);

        // page_left_back
        const page_left_back = scene.add.sprite(-237, 202, "livingsled", "page_left_back");
        page_1.add(page_left_back);

        // close_back
        const close_back = scene.add.sprite(-237, -350, "livingsled", "close_back");
        page_1.add(close_back);

        // page3
        const page3 = scene.add.container(792.1205408871174, 498.945302516222);
        page3.visible = false;
        this.add(page3);

        // page33
        const page33 = scene.add.image(-30.81854248046875, -19.229248046875, "livingsled", "sled_pg3");
        page3.add(page33);

        // buy_neutral
        const buy_neutral = scene.add.image(-462, -213, "livingsled", "buy_neutral");
        page3.add(buy_neutral);

        // megaphone
        const megaphone = scene.add.rectangle(110, -350, 128, 128);
        megaphone.isFilled = true;
        megaphone.fillColor = 16056320;
        megaphone.fillAlpha = 1e-20;
        page3.add(megaphone);

        // nightime_bg
        const nightime_bg = scene.add.rectangle(-311, 151, 250, 258);
        nightime_bg.isFilled = true;
        nightime_bg.fillColor = 16056320;
        nightime_bg.fillAlpha = 1e-20;
        page3.add(nightime_bg);

        // page2
        const page2 = scene.add.container(792.8185267235533, 499.22924628614487);
        page2.visible = false;
        this.add(page2);

        // page22
        const page22 = scene.add.image(-31.81854248046875, -19.229248046875, "livingsled", "sled_pg2");
        page2.add(page22);

        // buy_left
        const buy_left = scene.add.image(63, 44, "livingsled", "buy_left");
        page2.add(buy_left);

        // buy_left_1
        const buy_left_1 = scene.add.image(-439, -63, "livingsled", "buy_left");
        buy_left_1.angle = 38;
        page2.add(buy_left_1);

        // buy_right
        const buy_right = scene.add.image(429, -224, "livingsled", "buy_right");
        page2.add(buy_right);

        // Ghost_Costume
        const ghost_Costume = scene.add.rectangle(140, -402, 71, 72);
        ghost_Costume.isFilled = true;
        ghost_Costume.fillColor = 16056320;
        ghost_Costume.fillAlpha = 1e-20;
        page2.add(ghost_Costume);

        // Flashlight
        const flashlight = scene.add.rectangle(227, -308, 71, 72);
        flashlight.isFilled = true;
        flashlight.fillColor = 16056320;
        flashlight.fillAlpha = 1e-20;
        page2.add(flashlight);

        // Living_Sled_Costume
        const living_Sled_Costume = scene.add.rectangle(-546, -177, 71, 72);
        living_Sled_Costume.isFilled = true;
        living_Sled_Costume.fillColor = 16056320;
        living_Sled_Costume.fillAlpha = 1e-20;
        page2.add(living_Sled_Costume);

        // page1
        const page1 = scene.add.container(792.4695399105549, 499.0872702896595);
        page1.visible = false;
        this.add(page1);

        // page
        const page = scene.add.image(-33, -19, "livingsled", "sled_pg1");
        page1.add(page);

        // closeRightFront
        const closeRightFront = scene.add.sprite(195, -349, "livingsled", "close_front");
        page1.add(closeRightFront);

        // makeshift move page
        const makeshift_move_page = scene.add.rectangle(-26, -9, 600, 633);
        makeshift_move_page.alpha = 1e-11;
        makeshift_move_page.isFilled = true;
        page1.add(makeshift_move_page);

        // buttons
        const buttons = scene.add.container(780.0900074968481, 593.0151470567336);
        buttons.visible = false;
        this.add(buttons);

        // close_mid
        const close_mid = scene.add.sprite(488, -440, "livingsled", "close_mid");
        buttons.add(close_mid);

        // page_left
        const page_left = scene.add.sprite(-525, 109, "livingsled", "page_left");
        buttons.add(page_left);

        // page_right
        const page_right = scene.add.sprite(488, 109, "livingsled", "page_right");
        buttons.add(page_right);

        // coins
        const coins = scene.add.text(550, 248, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page_1];

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // page_left_back (components)
        const page_left_backButton = new Button(page_left_back);
        page_left_backButton.spriteName = "page_left_back";
        page_left_backButton.callback = () => this.prevPage();;
        page_left_backButton.activeFrame = true;

        // close_back (components)
        const close_backButton = new Button(close_back);
        close_backButton.spriteName = "close_back";
        close_backButton.callback = () => this.close();
        close_backButton.pixelPerfect = true;

        // buy_neutral (components)
        const buy_neutralButton = new Button(buy_neutral);
        buy_neutralButton.spriteName = "buy_neutral";
        buy_neutralButton.callback = () => this.interface.prompt.showItem(489);

        // megaphone (components)
        const megaphoneSimpleButton = new SimpleButton(megaphone);
        megaphoneSimpleButton.callback = () => this.interface.prompt.showSecret(5580);

        // nightime_bg (components)
        const nightime_bgSimpleButton = new SimpleButton(nightime_bg);
        nightime_bgSimpleButton.callback = () => this.interface.prompt.showItem(903);

        // buy_left (components)
        const buy_leftButton = new Button(buy_left);
        buy_leftButton.spriteName = "buy_left";
        buy_leftButton.callback = () => this.interface.prompt.showItem(4018);

        // buy_left_1 (components)
        const buy_left_1Button = new Button(buy_left_1);
        buy_left_1Button.spriteName = "buy_left";
        buy_left_1Button.callback = () => this.interface.prompt.showItem(4426);

        // buy_right (components)
        const buy_rightButton = new Button(buy_right);
        buy_rightButton.spriteName = "buy_right";
        buy_rightButton.callback = () => this.interface.prompt.showItem(1015);

        // ghost_Costume (components)
        const ghost_CostumeSimpleButton = new SimpleButton(ghost_Costume);
        ghost_CostumeSimpleButton.callback = () => this.interface.prompt.showSecret(244);

        // flashlight (components)
        const flashlightSimpleButton = new SimpleButton(flashlight);
        flashlightSimpleButton.callback = () => this.interface.prompt.showSecret(347);

        // living_Sled_Costume (components)
        const living_Sled_CostumeSimpleButton = new SimpleButton(living_Sled_Costume);
        living_Sled_CostumeSimpleButton.callback = () => this.interface.prompt.showSecret(380122);

        // closeRightFront (components)
        const closeRightFrontButton = new Button(closeRightFront);
        closeRightFrontButton.spriteName = "close_front";
        closeRightFrontButton.callback = () => this.close();
        closeRightFrontButton.pixelPerfect = true;

        // makeshift_move_page (components)
        const makeshift_move_pageSimpleButton = new SimpleButton(makeshift_move_page);
        makeshift_move_pageSimpleButton.callback = () => this.nextPage();;

        // close_mid (components)
        const close_midButton = new Button(close_mid);
        close_midButton.spriteName = "close_mid";
        close_midButton.callback = () => this.close();
        close_midButton.pixelPerfect = true;

        // page_left (components)
        const page_leftButton = new Button(page_left);
        page_leftButton.spriteName = "page_left";
        page_leftButton.callback = () => this.prevPage();;

        // page_right (components)
        const page_rightButton = new Button(page_right);
        page_rightButton.spriteName = "page_right";
        page_rightButton.callback = () => this.nextPage();;

        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
