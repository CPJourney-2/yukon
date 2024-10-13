import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Interactive, SimpleButton } from '@components/components'

import Tag1 from '@scenes/interface/shared_prefabs/Tag1'
import Tag2 from '@scenes/interface/shared_prefabs/Tag2'
import BuyButton from '@scenes/interface/shared_prefabs/BuyButton'


export const preload = {
    key: 'twelfthfish-catalog-pack',
    url: 'assets/media/interface/catalogs/costume/twelfthfish/twelfthfish-catalog-pack.json',
    loadString: ['loading', 'costume']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class TwelfthFishCatalog extends BookContainer {

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

        // pg5
        const pg5 = scene.add.image(0, 0, "twelfthfish-catalog", "pg5");
        page5.add(pg5);

        // back_left_button
        const back_left_button = scene.add.sprite(-204, 220, "commonbook", "cc-page-left");
        page5.add(back_left_button);

        // back_catalog_close
        const back_catalog_close = scene.add.sprite(-204, -329, "commonbook", "cc-close");
        back_catalog_close.flipX = true;
        page5.add(back_catalog_close);

        // page4
        const page4 = scene.add.container(760, 480);
        page4.visible = false;
        this.add(page4);

        // pg4
        const pg4 = scene.add.image(0, 0, "twelfthfish-catalog", "pg4");
        page4.add(pg4);

        // tag_3
        const tag_3 = new Tag2(scene, 88, -276);
        tag_3.angle = -29.999999999999996;
        page4.add(tag_3);

        // buyButton
        const buyButton = new BuyButton(scene, -501, -239);
        page4.add(buyButton);

        // photoshadow
        const photoshadow = scene.add.image(-313, 142, "twelfthfish-catalog", "photoshadow");
        page4.add(photoshadow);

        // photohover
        const photohover = scene.add.image(-321, 136, "twelfthfish-catalog", "photohover");
        photohover.visible = false;
        page4.add(photohover);

        // photo
        const photo = scene.add.image(-320, 136, "twelfthfish-catalog", "photo");
        page4.add(photo);

        // page3
        const page3 = scene.add.container(760, 480);
        page3.visible = false;
        this.add(page3);

        // pg3
        const pg3 = scene.add.image(0, 0, "twelfthfish-catalog", "pg3");
        page3.add(pg3);

        // tag
        const tag = new Tag2(scene, -323, -24);
        tag.angle = -35;
        page3.add(tag);

        // tag_1
        const tag_1 = new Tag1(scene, -483, -248);
        tag_1.angle = 20;
        tag_1.setOrigin(0.894463955816078, 0.4372934895100823);
        page3.add(tag_1);

        // tag_2
        const tag_2 = new Tag1(scene, -129, -328);
        tag_2.angle = 10;
        tag_2.setOrigin(0.894463955816078, 0.4372934895100823);
        page3.add(tag_2);

        // tag_4
        const tag_4 = new Tag2(scene, 41, 64);
        tag_4.angle = 10;
        page3.add(tag_4);

        // tag_6
        const tag_6 = new Tag1(scene, 250, -8);
        tag_6.angle = 14.999999999999998;
        tag_6.setOrigin(0.894463955816078, 0.4372934895100823);
        page3.add(tag_6);

        // tag_7
        const tag_7 = new Tag2(scene, 433, -217);
        tag_7.angle = -29.999999999999996;
        page3.add(tag_7);

        // tag_8
        const tag_8 = new Tag2(scene, 460, -67);
        tag_8.angle = 29.999999999999996;
        page3.add(tag_8);

        // page2
        const page2 = scene.add.container(760, 480);
        page2.visible = false;
        this.add(page2);

        // pg2
        const pg2 = scene.add.image(0, 0, "twelfthfish-catalog", "pg2");
        page2.add(pg2);

        // tag1
        const tag1 = new Tag1(scene, 186, -46);
        tag1.angle = -20;
        tag1.setOrigin(0.894463955816078, 0.4372934895100823);
        page2.add(tag1);

        // tag2
        const tag2 = new Tag2(scene, 376, -316);
        tag2.angle = 29.999999999999996;
        page2.add(tag2);

        // page1
        const page1 = scene.add.container(760, 480);
        this.add(page1);

        // pg1
        const pg1 = scene.add.image(0, 0, "twelfthfish-catalog", "pg1");
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
        const right_button = scene.add.sprite(1130, 659, "commonbook", "cc-page-right");
        buttons.add(right_button);

        // left_button
        const left_button = scene.add.sprite(11, 660, "commonbook", "cc-page-left");
        buttons.add(left_button);

        // catalog_close
        const catalog_close = scene.add.sprite(1129, 112, "commonbook", "cc-close");
        buttons.add(catalog_close);

        // lists
        const pages = [page1, page2, page3, page4, page5];

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

        // tag_3 (prefab fields)
        tag_3.item = 5580;

        // buyButton (prefab fields)
        buyButton.item = 489;

        // photo (components)
        const photoSimpleButton = new SimpleButton(photo);
        photoSimpleButton.hoverCallback = () => { photohover.visible = true };
        photoSimpleButton.hoverOutCallback = () => { photohover.visible = false };
        photoSimpleButton.callback = () => this.interface.prompt.showItem(990);

        // tag (prefab fields)
        tag.item = 762;

        // tag_1 (prefab fields)
        tag_1.item = 477;

        // tag_2 (prefab fields)
        tag_2.item = 763;

        // tag_4 (prefab fields)
        tag_4.item = 367;

        // tag_6 (prefab fields)
        tag_6.item = 761;

        // tag_7 (prefab fields)
        tag_7.item = 476;

        // tag_8 (prefab fields)
        tag_8.item = 186;

        // tag1 (prefab fields)
        tag1.item = 760;

        // tag2 (prefab fields)
        tag2.item = 475;

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
