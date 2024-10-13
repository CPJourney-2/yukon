import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

import Tag1 from '@scenes/interface/shared_prefabs/Tag1'
import Tag2 from '@scenes/interface/shared_prefabs/Tag2'
import BuyButton from '@scenes/interface/shared_prefabs/BuyButton'


export const preload = {
    key: 'timeforgot-catalog-pack',
    url: 'assets/media/interface/catalogs/timeforgot/timeforgot-catalog-pack.json',
    loadString: ['loading', 'The Penguins that Time Forgot']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class TimeForgotCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.background_outline;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.skirtSecret;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_tag;
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
        const page_6 = scene.add.image(0, 0, "timeforgot-catalog", "timeforgotp6");
        page6.add(page_6);

        // back_left_button
        const back_left_button = scene.add.sprite(-204, 220, "timeforgot-catalog", "back_left_button");
        page6.add(back_left_button);

        // back_catalog_close
        const back_catalog_close = scene.add.sprite(-204, -329, "timeforgot-catalog", "back_catalog_close");
        page6.add(back_catalog_close);

        // page5
        const page5 = scene.add.container(760, 480);
        page5.visible = false;
        this.add(page5);

        // page_5
        const page_5 = scene.add.image(0, 0, "timeforgot-catalog", "timeforgotp5");
        page5.add(page_5);

        // buyButton_7
        const buyButton_7 = new BuyButton(scene, -486, -218);
        page5.add(buyButton_7);

        // background_outline
        const background_outline = scene.add.image(-296, 150, "timeforgot-catalog", "background_outline");
        background_outline.visible = false;
        page5.add(background_outline);

        // background_base
        const background_base = scene.add.image(-290, 154, "timeforgot-catalog", "background_base");
        page5.add(background_base);

        // page4
        const page4 = scene.add.container(760, 480);
        page4.visible = false;
        this.add(page4);

        // page_4
        const page_4 = scene.add.image(0, 0, "timeforgot-catalog", "timeforgotp4");
        page4.add(page_4);

        // buyButton_2
        const buyButton_2 = new BuyButton(scene, 419, -104);
        page4.add(buyButton_2);

        // buyButton_3
        const buyButton_3 = new BuyButton(scene, 60, -291);
        page4.add(buyButton_3);

        // buyButton_4
        const buyButton_4 = new BuyButton(scene, 407, 208);
        page4.add(buyButton_4);

        // buyButton_5
        const buyButton_5 = new BuyButton(scene, -529, -285);
        page4.add(buyButton_5);

        // buyButton_6
        const buyButton_6 = new BuyButton(scene, -159, 204);
        page4.add(buyButton_6);

        // page3
        const page3 = scene.add.container(760, 480);
        page3.visible = false;
        this.add(page3);

        // page_3
        const page_3 = scene.add.image(0, 0, "timeforgot-catalog", "timeforgotp3");
        page3.add(page_3);

        // buyButton
        const buyButton = new BuyButton(scene, 104, 156);
        page3.add(buyButton);

        // buyButton_1
        const buyButton_1 = new BuyButton(scene, 380, -193);
        page3.add(buyButton_1);

        // skirtSecret
        const skirtSecret = scene.add.rectangle(-187, -26, 80, 110);
        page3.add(skirtSecret);

        // page2
        const page2 = scene.add.container(760, 480);
        page2.visible = false;
        this.add(page2);

        // page_2
        const page_2 = scene.add.image(0, 0, "timeforgot-catalog", "timeforgotp2");
        page2.add(page_2);

        // buy_tag
        const buy_tag = scene.add.image(254, -287, "timeforgot-catalog", "buy_tag");
        page2.add(buy_tag);

        // page1
        const page1 = scene.add.container(760, 480);
        page1.visible = false;
        this.add(page1);

        // page_1
        const page_1 = scene.add.image(-760, -480, "timeforgot-catalog", "timeforgotp1");
        page_1.setOrigin(0, 0);
        page1.add(page_1);

        // right_button_1
        const right_button_1 = scene.add.sprite(227, 219, "timeforgot-catalog", "right_button");
        page1.add(right_button_1);

        // catalog_close_1
        const catalog_close_1 = scene.add.sprite(227, -330, "timeforgot-catalog", "catalog_close");
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
        const right_button = scene.add.sprite(1077, 658, "timeforgot-catalog", "right_button");
        buttons.add(right_button);

        // left_button
        const left_button = scene.add.sprite(66, 659, "timeforgot-catalog", "left_button");
        buttons.add(left_button);

        // catalog_close
        const catalog_close = scene.add.sprite(1077, 114, "timeforgot-catalog", "catalog_close");
        buttons.add(catalog_close);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6];

        // block (components)
        new Interactive(block);

        // back_left_button (components)
        const back_left_buttonButton = new Button(back_left_button);
        back_left_buttonButton.spriteName = "back_left_button";
        back_left_buttonButton.callback = () => this.prevPage();;
        back_left_buttonButton.activeFrame = true;

        // back_catalog_close (components)
        const back_catalog_closeButton = new Button(back_catalog_close);
        back_catalog_closeButton.spriteName = "back_catalog_close";
        back_catalog_closeButton.callback = () => this.close();
        back_catalog_closeButton.activeFrame = true;
        back_catalog_closeButton.pixelPerfect = true;

        // buyButton_7 (prefab fields)
        buyButton_7.item = 489;

        // background_base (components)
        const background_baseSimpleButton = new SimpleButton(background_base);
        background_baseSimpleButton.hoverCallback = () => {this.onBgHover(false)};
        background_baseSimpleButton.hoverOutCallback = () => {this.onBgHover(true)};
        background_baseSimpleButton.callback = () => {this.interface.prompt.showItem(992)};

        // buyButton_2 (prefab fields)
        buyButton_2.item = 190;

        // buyButton_3 (prefab fields)
        buyButton_3.item = 675;

        // buyButton_4 (prefab fields)
        buyButton_4.item = 835;

        // buyButton_5 (prefab fields)
        buyButton_5.item = 126;

        // buyButton_6 (prefab fields)
        buyButton_6.item = 834;

        // buyButton (prefab fields)
        buyButton.item = 128;

        // buyButton_1 (prefab fields)
        buyButton_1.item = 127;

        // skirtSecret (components)
        const skirtSecretSimpleButton = new SimpleButton(skirtSecret);
        skirtSecretSimpleButton.callback = () => this.interface.prompt.showSecret(212);;

        // buy_tag (components)
        const buy_tagButton = new Button(buy_tag);
        buy_tagButton.spriteName = "buy_tag";
        buy_tagButton.callback = () => this.interface.prompt.showItem(676);;

        // right_button_1 (components)
        const right_button_1Button = new Button(right_button_1);
        right_button_1Button.spriteName = "right_button";
        right_button_1Button.callback = () => this.nextPage();;
        right_button_1Button.activeFrame = true;
        right_button_1Button.pixelPerfect = true;

        // catalog_close_1 (components)
        const catalog_close_1Button = new Button(catalog_close_1);
        catalog_close_1Button.spriteName = "catalog_close";
        catalog_close_1Button.callback = () => this.close();
        catalog_close_1Button.activeFrame = true;
        catalog_close_1Button.pixelPerfect = true;

        // right_button (components)
        const right_buttonButton = new Button(right_button);
        right_buttonButton.spriteName = "right_button";
        right_buttonButton.callback = () => this.nextPage();;
        right_buttonButton.activeFrame = true;
        right_buttonButton.pixelPerfect = true;

        // left_button (components)
        const left_buttonButton = new Button(left_button);
        left_buttonButton.spriteName = "left_button";
        left_buttonButton.callback = () => this.prevPage();;
        left_buttonButton.activeFrame = true;
        left_buttonButton.pixelPerfect = true;

        // catalog_close (components)
        const catalog_closeButton = new Button(catalog_close);
        catalog_closeButton.spriteName = "catalog_close";
        catalog_closeButton.callback = () => this.close();
        catalog_closeButton.activeFrame = true;
        catalog_closeButton.pixelPerfect = true;

        this.background_outline = background_outline;
        this.skirtSecret = skirtSecret;
        this.buy_tag = buy_tag;
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
