import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

import Tag1 from '@scenes/interface/shared_prefabs/Tag1'
import Tag2 from '@scenes/interface/shared_prefabs/Tag2'
import BuyButton from '@scenes/interface/shared_prefabs/BuyButton'


export const preload = {
    key: 'rubyandruby-catalog-pack',
    url: 'assets/media/interface/catalogs/rubyandruby/rubyandruby-catalog-pack.json',
    loadString: ['loading', 'Ruby and the Ruby']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class rubyandrubyCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.background_outline;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.darkCoatSecret;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_tag_4_6;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_tag_4_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_tag_4_2;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_tag_4_3;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_tag_4_4;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_tag_4_5;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_tag_3_3;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_tag_3_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_tag_3_2;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_tag_1_3;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_tag_1_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_tag_1_2;
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

        // page_6
        const page_6 = scene.add.image(0, 0, "rubyandruby-catalog", "pageSix");
        page6.add(page_6);

        // back_left_button
        const back_left_button = scene.add.sprite(-204, 220, "rubyandruby-catalog", "leftButton");
        page6.add(back_left_button);

        // back_catalog_close
        const back_catalog_close = scene.add.sprite(-204, -329, "rubyandruby-catalog", "closeButton");
        back_catalog_close.scaleX = -1;
        page6.add(back_catalog_close);

        // bg
        const bg = scene.add.image(17, -150, "rubyandruby-catalog", "bg");
        page6.add(bg);

        // textBox
        const textBox = scene.add.image(15, -83, "rubyandruby-catalog", "textBox");
        page6.add(textBox);

        // page5
        const page5 = scene.add.container(760, 480);
        page5.visible = false;
        this.add(page5);

        // page_5
        const page_5 = scene.add.image(0, 0, "rubyandruby-catalog", "pageFive");
        page5.add(page_5);

        // background_outline
        const background_outline = scene.add.image(-296, 150, "timeforgot-catalog", "background_outline");
        background_outline.visible = false;
        page5.add(background_outline);

        // background_base
        const background_base = scene.add.image(-290, 154, "rubyandruby-catalog", "background_base");
        page5.add(background_base);

        // buyButton_1
        const buyButton_1 = scene.add.image(-431, -187, "rubyandruby-catalog", "BuyButton");
        buyButton_1.scaleX = 0.75;
        buyButton_1.scaleY = 0.75;
        page5.add(buyButton_1);

        // page4
        const page4 = scene.add.container(760, 480);
        page4.visible = false;
        this.add(page4);

        // page_4
        const page_4 = scene.add.image(0, 0, "rubyandruby-catalog", "pageFour");
        page4.add(page_4);

        // DarkCoatSecret
        const darkCoatSecret = scene.add.rectangle(-130, -389, 80, 110);
        darkCoatSecret.scaleX = 0.5346275211514221;
        darkCoatSecret.scaleY = 0.5232506744293175;
        page4.add(darkCoatSecret);

        // buy_tag_4_6
        const buy_tag_4_6 = scene.add.image(-424, -283, "rubyandruby-catalog", "BuyTagGreyOne");
        buy_tag_4_6.scaleX = 0.7;
        buy_tag_4_6.scaleY = 0.7;
        buy_tag_4_6.angle = -24.000000000000004;
        page4.add(buy_tag_4_6);

        // buy_tag_4_1
        const buy_tag_4_1 = scene.add.image(-368, 78, "rubyandruby-catalog", "BuyTagGreyOne");
        buy_tag_4_1.scaleX = 0.7;
        buy_tag_4_1.scaleY = 0.7;
        buy_tag_4_1.angle = -70;
        page4.add(buy_tag_4_1);

        // buy_tag_4_2
        const buy_tag_4_2 = scene.add.image(-168, -142, "rubyandruby-catalog", "BuyTagGreyTwo");
        buy_tag_4_2.scaleX = 0.7;
        buy_tag_4_2.scaleY = 0.7;
        buy_tag_4_2.angle = -7;
        page4.add(buy_tag_4_2);

        // buy_tag_4_3
        const buy_tag_4_3 = scene.add.image(-116, 173, "rubyandruby-catalog", "BuyTagGreyTwo");
        buy_tag_4_3.scaleX = 0.7;
        buy_tag_4_3.scaleY = 0.7;
        buy_tag_4_3.angle = 55;
        page4.add(buy_tag_4_3);

        // buy_tag_4_4
        const buy_tag_4_4 = scene.add.image(352, -327, "rubyandruby-catalog", "BuyTagGreyTwo");
        buy_tag_4_4.scaleX = 0.7;
        buy_tag_4_4.scaleY = 0.7;
        buy_tag_4_4.angle = -11;
        page4.add(buy_tag_4_4);

        // buy_tag_4_5
        const buy_tag_4_5 = scene.add.image(446, 153, "rubyandruby-catalog", "BuyTagGreyTwo");
        buy_tag_4_5.scaleX = 0.7;
        buy_tag_4_5.scaleY = 0.7;
        buy_tag_4_5.angle = 53;
        page4.add(buy_tag_4_5);

        // page3
        const page3 = scene.add.container(760, 480);
        page3.visible = false;
        this.add(page3);

        // page_3
        const page_3 = scene.add.image(0, 0, "rubyandruby-catalog", "pageThree");
        page3.add(page_3);

        // buy_tag_3_3
        const buy_tag_3_3 = scene.add.image(209, 104, "rubyandruby-catalog", "BuyTagGreyOne");
        buy_tag_3_3.scaleX = 0.7;
        buy_tag_3_3.scaleY = 0.7;
        buy_tag_3_3.angle = -54;
        page3.add(buy_tag_3_3);

        // buy_tag_3_1
        const buy_tag_3_1 = scene.add.image(436, -85, "rubyandruby-catalog", "BuyTagGreyTwo");
        buy_tag_3_1.scaleX = 0.7;
        buy_tag_3_1.scaleY = 0.7;
        buy_tag_3_1.angle = 55;
        page3.add(buy_tag_3_1);

        // buy_tag_3_2
        const buy_tag_3_2 = scene.add.image(235, -296, "rubyandruby-catalog", "BuyTagGreyOne");
        buy_tag_3_2.scaleX = 0.7;
        buy_tag_3_2.scaleY = 0.7;
        buy_tag_3_2.angle = -24.000000000000004;
        page3.add(buy_tag_3_2);

        // page2
        const page2 = scene.add.container(760, 480);
        page2.visible = false;
        this.add(page2);

        // page_2
        const page_2 = scene.add.image(0, 0, "rubyandruby-catalog", "pageTwo");
        page2.add(page_2);

        // buy_tag_1_3
        const buy_tag_1_3 = scene.add.image(261, -309, "rubyandruby-catalog", "BuyTagGreyOne");
        buy_tag_1_3.scaleX = 0.7;
        buy_tag_1_3.scaleY = 0.7;
        page2.add(buy_tag_1_3);

        // buy_tag_1_1
        const buy_tag_1_1 = scene.add.image(139, 197, "rubyandruby-catalog", "BuyTagGreyOne");
        buy_tag_1_1.scaleX = 0.7;
        buy_tag_1_1.scaleY = 0.7;
        buy_tag_1_1.angle = -86;
        page2.add(buy_tag_1_1);

        // buy_tag_1_2
        const buy_tag_1_2 = scene.add.image(403, 68, "rubyandruby-catalog", "BuyTagGreyTwo");
        buy_tag_1_2.scaleX = 0.7;
        buy_tag_1_2.scaleY = 0.7;
        buy_tag_1_2.angle = 80;
        page2.add(buy_tag_1_2);

        // page1
        const page1 = scene.add.container(760, 480);
        page1.visible = false;
        this.add(page1);

        // page_1
        const page_1 = scene.add.image(-760, -480, "rubyandruby-catalog", "pageOne");
        page_1.setOrigin(0, 0);
        page1.add(page_1);

        // back_left_button_1
        const back_left_button_1 = scene.add.sprite(227, 219, "rubyandruby-catalog", "leftButton");
        back_left_button_1.flipX = true;
        page1.add(back_left_button_1);

        // front_catalog_close
        const front_catalog_close = scene.add.sprite(226, -332, "rubyandruby-catalog", "closeButton");
        front_catalog_close.scaleX = -1;
        front_catalog_close.flipX = true;
        page1.add(front_catalog_close);

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
        const right_button = scene.add.sprite(1077, 658, "rubyandruby-catalog", "rightButton");
        buttons.add(right_button);

        // left_button
        const left_button = scene.add.sprite(66, 659, "rubyandruby-catalog", "leftButton");
        buttons.add(left_button);

        // catalog_close
        const catalog_close = scene.add.sprite(1077, 114, "rubyandruby-catalog", "closeButton");
        buttons.add(catalog_close);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6];

        // block (components)
        new Interactive(block);

        // back_left_button (components)
        const back_left_buttonButton = new Button(back_left_button);
        back_left_buttonButton.spriteName = "leftButton";
        back_left_buttonButton.callback = () => this.prevPage();;
        back_left_buttonButton.activeFrame = true;

        // back_catalog_close (components)
        const back_catalog_closeButton = new Button(back_catalog_close);
        back_catalog_closeButton.spriteName = "closeButton";
        back_catalog_closeButton.callback = () => this.close();
        back_catalog_closeButton.activeFrame = true;
        back_catalog_closeButton.pixelPerfect = true;

        // bg (components)
        const bgButton = new Button(bg);
        bgButton.spriteName = "bg";
        bgButton.callback = () => this.interface.prompt.showSecret(9001);;

        // background_base (components)
        const background_baseSimpleButton = new SimpleButton(background_base);
        background_baseSimpleButton.hoverCallback = () => {this.onBgHover(false)};
        background_baseSimpleButton.hoverOutCallback = () => {this.onBgHover(true)};
        background_baseSimpleButton.callback = () => {this.interface.prompt.showItem(9002)};

        // buyButton_1 (components)
        const buyButton_1Button = new Button(buyButton_1);
        buyButton_1Button.spriteName = "BuyButton";
        buyButton_1Button.callback = () => this.interface.prompt.showItem(489);;

        // darkCoatSecret (components)
        const darkCoatSecretSimpleButton = new SimpleButton(darkCoatSecret);
        darkCoatSecretSimpleButton.callback = () => this.interface.prompt.showSecret(4015);;

        // buy_tag_4_6 (components)
        const buy_tag_4_6Button = new Button(buy_tag_4_6);
        buy_tag_4_6Button.spriteName = "BuyTagGreyOne";
        buy_tag_4_6Button.callback = () => this.interface.prompt.showItem(1011);;

        // buy_tag_4_1 (components)
        const buy_tag_4_1Button = new Button(buy_tag_4_1);
        buy_tag_4_1Button.spriteName = "BuyTagGreyOne";
        buy_tag_4_1Button.callback = () => this.interface.prompt.showItem(3005);;

        // buy_tag_4_2 (components)
        const buy_tag_4_2Button = new Button(buy_tag_4_2);
        buy_tag_4_2Button.spriteName = "BuyTagGreyTwo";
        buy_tag_4_2Button.callback = () => this.interface.prompt.showItem(4013);;

        // buy_tag_4_3 (components)
        const buy_tag_4_3Button = new Button(buy_tag_4_3);
        buy_tag_4_3Button.spriteName = "BuyTagGreyTwo";
        buy_tag_4_3Button.callback = () => this.interface.prompt.showItem(6008);;

        // buy_tag_4_4 (components)
        const buy_tag_4_4Button = new Button(buy_tag_4_4);
        buy_tag_4_4Button.spriteName = "BuyTagGreyTwo";
        buy_tag_4_4Button.callback = () => this.interface.prompt.showItem(1012);;

        // buy_tag_4_5 (components)
        const buy_tag_4_5Button = new Button(buy_tag_4_5);
        buy_tag_4_5Button.spriteName = "BuyTagGreyTwo";
        buy_tag_4_5Button.callback = () => this.interface.prompt.showItem(4014);;

        // buy_tag_3_3 (components)
        const buy_tag_3_3Button = new Button(buy_tag_3_3);
        buy_tag_3_3Button.spriteName = "BuyTagGreyOne";
        buy_tag_3_3Button.callback = () => this.interface.prompt.showItem(842);;

        // buy_tag_3_1 (components)
        const buy_tag_3_1Button = new Button(buy_tag_3_1);
        buy_tag_3_1Button.spriteName = "BuyTagGreyTwo";
        buy_tag_3_1Button.callback = () => this.interface.prompt.showItem(181);;

        // buy_tag_3_2 (components)
        const buy_tag_3_2Button = new Button(buy_tag_3_2);
        buy_tag_3_2Button.spriteName = "BuyTagGreyOne";
        buy_tag_3_2Button.callback = () => this.interface.prompt.showItem(1010);;

        // buy_tag_1_3 (components)
        const buy_tag_1_3Button = new Button(buy_tag_1_3);
        buy_tag_1_3Button.spriteName = "BuyTagGreyOne";
        buy_tag_1_3Button.callback = () => this.interface.prompt.showItem(1009);;

        // buy_tag_1_1 (components)
        const buy_tag_1_1Button = new Button(buy_tag_1_1);
        buy_tag_1_1Button.spriteName = "BuyTagGreyOne";
        buy_tag_1_1Button.callback = () => this.interface.prompt.showItem(5003);;

        // buy_tag_1_2 (components)
        const buy_tag_1_2Button = new Button(buy_tag_1_2);
        buy_tag_1_2Button.spriteName = "BuyTagGreyTwo";
        buy_tag_1_2Button.callback = () => this.interface.prompt.showItem(4012);;

        // back_left_button_1 (components)
        const back_left_button_1Button = new Button(back_left_button_1);
        back_left_button_1Button.spriteName = "leftButton";
        back_left_button_1Button.callback = () => this.nextPage();;
        back_left_button_1Button.activeFrame = true;

        // front_catalog_close (components)
        const front_catalog_closeButton = new Button(front_catalog_close);
        front_catalog_closeButton.spriteName = "closeButton";
        front_catalog_closeButton.callback = () => this.close();
        front_catalog_closeButton.activeFrame = true;

        // right_button (components)
        const right_buttonButton = new Button(right_button);
        right_buttonButton.spriteName = "rightButton";
        right_buttonButton.callback = () => this.nextPage();;
        right_buttonButton.activeFrame = true;
        right_buttonButton.pixelPerfect = true;

        // left_button (components)
        const left_buttonButton = new Button(left_button);
        left_buttonButton.spriteName = "leftButton";
        left_buttonButton.callback = () => this.prevPage();;
        left_buttonButton.activeFrame = true;
        left_buttonButton.pixelPerfect = true;

        // catalog_close (components)
        const catalog_closeButton = new Button(catalog_close);
        catalog_closeButton.spriteName = "closeButton";
        catalog_closeButton.callback = () => this.close();
        catalog_closeButton.activeFrame = true;
        catalog_closeButton.pixelPerfect = true;

        this.background_outline = background_outline;
        this.darkCoatSecret = darkCoatSecret;
        this.buy_tag_4_6 = buy_tag_4_6;
        this.buy_tag_4_1 = buy_tag_4_1;
        this.buy_tag_4_2 = buy_tag_4_2;
        this.buy_tag_4_3 = buy_tag_4_3;
        this.buy_tag_4_4 = buy_tag_4_4;
        this.buy_tag_4_5 = buy_tag_4_5;
        this.buy_tag_3_3 = buy_tag_3_3;
        this.buy_tag_3_1 = buy_tag_3_1;
        this.buy_tag_3_2 = buy_tag_3_2;
        this.buy_tag_1_3 = buy_tag_1_3;
        this.buy_tag_1_1 = buy_tag_1_1;
        this.buy_tag_1_2 = buy_tag_1_2;
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
