import BookContainer from '@scenes/interface/books/BookContainer'

import { Interactive, Button, SimpleButton } from '@components/components'
import Tag1 from '@scenes/interface/shared_prefabs/Tag1'
import Tag2 from '@scenes/interface/shared_prefabs/Tag2'

export const preload = {
    key: 'dancecatalog-pack',
    url: 'assets/media/interface/catalogs/dance/dancecatalog-pack.json',
    loadString: ['loading', 'dancecatalog']
}

/* START OF COMPILED CODE */

export default class DanceCatalog extends BookContainer {

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

        // page1
        const page1 = scene.add.container(0, 0);
        this.add(page1);

        // bg
        const bg = scene.add.image(760, 480, "dancecatalog", "dj3kcatalog");
        page1.add(bg);

        // tag_4
        const tag_4 = new Tag2(scene, 913, 510);
        tag_4.angle = 30;
        page1.add(tag_4);

        // tag_3
        const tag_3 = new Tag2(scene, 967, 465);
        tag_3.angle = -49.99999999999994;
        page1.add(tag_3);

        // tag_2
        const tag_2 = new Tag2(scene, 851, 428);
        tag_2.angle = -25;
        page1.add(tag_2);

        // tag_1
        const tag_1 = new Tag2(scene, 586, 267);
        tag_1.angle = 0;
        page1.add(tag_1);

        // tag
        const tag = new Tag2(scene, 568, 394);
        tag.angle = 30;
        page1.add(tag);

        // tag1
        const tag1 = new Tag1(scene, 632, 541);
        tag1.angle = -20;
        page1.add(tag1);

        // tag2
        const tag2 = new Tag2(scene, 709, 394);
        tag2.angle = 8;
        page1.add(tag2);

        // text_1
        const text_1 = scene.add.text(715, 243, "", {});
        text_1.text = "How these records work:";
        text_1.setStyle({ "color": "#000", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
        page1.add(text_1);

        // text
        const text = scene.add.text(717, 273, "", {});
        text.text = "Just buy a record and play\n DJ3K. You'll be able to\n  choose your new tunes in\n   the music menu!";
        text.setStyle({ "color": "#000", "fontFamily": "Burbank Small", "fontSize": "23px" });
        page1.add(text);

        // buttons
        const buttons = scene.add.container(-1035.7052001953125, 364.5936584472656);
        buttons.visible = false;
        this.add(buttons);

        // coins
        const coins = scene.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // dj3kcatalog_close
        const dj3kcatalog_close = scene.add.image(1031, 108, "dancecatalog", "closebtn");
        this.add(dj3kcatalog_close);

        // lists
        const pages = [page1];

        // block (components)
        new Interactive(block);

        // tag_4 (prefab fields)
        tag_4.item = 5121;

        // tag_3 (prefab fields)
        tag_3.item = 5070;

        // tag_2 (prefab fields)
        tag_2.item = 5072;

        // tag_1 (prefab fields)
        tag_1.item = 5037;

        // tag (prefab fields)
        tag.item = 5039;

        // tag1 (prefab fields)
        tag1.item = 5071;

        // tag2 (prefab fields)
        tag2.item = 5038;

        // dj3kcatalog_close (components)
        const dj3kcatalog_closeButton = new Button(dj3kcatalog_close);
        dj3kcatalog_closeButton.spriteName = "closebtn";
        dj3kcatalog_closeButton.callback = () => this.close();
        dj3kcatalog_closeButton.activeFrame = true;

        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
