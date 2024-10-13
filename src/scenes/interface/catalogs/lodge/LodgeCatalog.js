import BookContainer from '@scenes/interface/books/BookContainer'

import { Interactive, Button, SimpleButton } from '@components/components'

import Tag1 from '@scenes/interface/shared_prefabs/Tag1'
import BuyButton from '@scenes/interface/shared_prefabs/BuyButton'


export const preload = {
    key: 'lodgecatalog-pack',
    url: 'assets/media/interface/catalogs/lodge/lodgecatalog-pack.json',
    loadString: ['loading', 'lodgecatalog']
}

/* START OF COMPILED CODE */

export default class LodgeCatalog extends BookContainer {

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
        const bg = scene.add.image(0, 0, "lodgecatalog", "bg");
        bg.setOrigin(0, 0);
        page1.add(bg);

        // closebtn
        const closebtn = scene.add.image(1042, 94, "lodgecatalog", "closebtn");
        page1.add(closebtn);

        // tag1
        const tag1 = new Tag1(scene, 771, 423);
        tag1.angle = -23;
        page1.add(tag1);

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

        // lists
        const pages = [page1];

        // block (components)
        new Interactive(block);

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.spriteName = "closebtn";
        closebtnButton.callback = () => this.close();
        closebtnButton.activeFrame = true;

        // tag1 (prefab fields)
        tag1.item = 321;

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
