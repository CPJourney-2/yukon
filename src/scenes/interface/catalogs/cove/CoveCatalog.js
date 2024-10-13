import BookContainer from '@scenes/interface/books/BookContainer'

import { Interactive, Button, SimpleButton } from '@components/components'

import Tag2 from '@scenes/interface/shared_prefabs/Tag2'
import BuyButton from '@scenes/interface/shared_prefabs/BuyButton'


export const preload = {
    key: 'covecatalog-pack',
    url: 'assets/media/interface/catalogs/cove/covecatalog-pack.json',
    loadString: ['loading', 'covecatalog']
}

/* START OF COMPILED CODE */

export default class CoveCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.secretclosebtn;
        /** @type {Phaser.GameObjects.Container} */
        this.secret;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // block
        const block = scene.add.rectangle(760, 481, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // page1
        const page1 = scene.add.container(0, 0);
        this.add(page1);

        // cove
        const cove = scene.add.image(760, 480, "covecatalog", "cove");
        page1.add(cove);

        // openSecret
        const openSecret = scene.add.rectangle(901, 107, 140, 130);
        openSecret.scaleX = 1.474300017320576;
        openSecret.scaleY = 0.436681937276649;
        openSecret.isFilled = true;
        openSecret.fillAlpha = 0;
        page1.add(openSecret);

        // closebtn
        const closebtn = scene.add.image(1043, 94, "covecatalog", "closebtn");
        page1.add(closebtn);

        // tag_one
        const tag_one = new Tag2(scene, 564, 289);
        tag_one.scaleX = 0.75;
        tag_one.scaleY = 0.75;
        tag_one.angle = 22;
        tag_one.visible = true;
        page1.add(tag_one);

        // tag_two
        const tag_two = new Tag2(scene, 726, 406);
        tag_two.scaleX = 0.75;
        tag_two.scaleY = 0.75;
        tag_two.angle = 25;
        tag_two.visible = true;
        page1.add(tag_two);

        // secret
        const secret = scene.add.container(760, 480);
        secret.visible = false;
        page1.add(secret);

        // secretbg
        const secretbg = scene.add.image(0, 0, "covecatalog", "secret");
        secret.add(secretbg);

        // secretclosebtn
        const secretclosebtn = scene.add.image(183, -94, "covecatalog", "secretclosebtn");
        secret.add(secretclosebtn);

        // buyButton
        const buyButton = new BuyButton(scene, 12, 12);
        buyButton.scaleX = 1.2;
        buyButton.scaleY = 1.2;
        buyButton.visible = true;
        secret.add(buyButton);

        // surfboard
        const surfboard = scene.add.image(-101, 0, "covecatalog", "surfboard");
        secret.add(surfboard);

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

        // openSecret (components)
        const openSecretSimpleButton = new SimpleButton(openSecret);
        openSecretSimpleButton.callback = () => this.secret.visible=true;;

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.spriteName = "closebtn";
        closebtnButton.callback = () => this.close();
        closebtnButton.activeFrame = true;

        // tag_one (prefab fields)
        tag_one.item = 702;

        // tag_two (prefab fields)
        tag_two.item = 701;

        // secretclosebtn (components)
        const secretclosebtnButton = new Button(secretclosebtn);
        secretclosebtnButton.spriteName = "secretclosebtn";
        secretclosebtnButton.callback = () => this.secret.visible=false;;
        secretclosebtnButton.activeFrame = true;

        // buyButton (prefab fields)
        buyButton.item = 703;

        this.secretclosebtn = secretclosebtn;
        this.secret = secret;
        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        this.secretclosebtn.setBlendMode(2)
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
