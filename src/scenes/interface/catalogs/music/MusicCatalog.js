
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
import BuyButton from "../../shared_prefabs/BuyButton";
import SimpleButton from "../../../components/SimpleButton";
/* START-USER-IMPORTS */

export const preload = {
    key: 'musiccatalog-pack.json',
    url: 'assets/media/interface/catalogs/music/musiccatalog-pack.json',
    loadString: ['loading', 'Music Catalog']
}


/* END-USER-IMPORTS */

export default class MusicCatalog extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 755.165759545349, y ?? 469.5966438186762);

        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // block
        const block = scene.add.rectangle(4.837919959045507, 10.403243876636282, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // page1
        const page1 = scene.add.container(-755.165759545349, -469.5966438186762);
        this.add(page1);

        // bg
        const bg = scene.add.image(760, 480, "musiccatalog", "bg");
        page1.add(bg);

        // instruments
        const instruments = scene.add.image(760, 536.5, "musiccatalog", "instruments");
        page1.add(instruments);

        // closebtn
        const closebtn = scene.add.image(1248, 177, "musiccatalog", "closebtn");
        page1.add(closebtn);

        // buyButton
        const buyButton = new BuyButton(scene, 262, 765);
        page1.add(buyButton);

        // buyButton_1
        const buyButton_1 = new BuyButton(scene, 813, 765);
        page1.add(buyButton_1);

        // buyButton_2
        const buyButton_2 = new BuyButton(scene, 305, 540);
        page1.add(buyButton_2);

        // buyButton_3
        const buyButton_3 = new BuyButton(scene, 1087, 557);
        page1.add(buyButton_3);

        // buyButton_4
        const buyButton_4 = new BuyButton(scene, 851, 343);
        page1.add(buyButton_4);

        // buyButton_5
        const buyButton_5 = new BuyButton(scene, 410, 344);
        page1.add(buyButton_5);

        // secret
        const secret = scene.add.rectangle(518, 144, 128, 128);
        secret.scaleX = 0.2;
        secret.scaleY = 0.75;
        page1.add(secret);

        // lists
        const pages = [page1];

        // block (components)
        new Interactive(block);

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.spriteName = "closebtn";
        closebtnButton.callback = () => this.close();

        // buyButton (prefab fields)
        buyButton.item = 233;

        // buyButton_1 (prefab fields)
        buyButton_1.item = 180;

        // buyButton_2 (prefab fields)
        buyButton_2.item = 293;

        // buyButton_3 (prefab fields)
        buyButton_3.item = 340;

        // buyButton_4 (prefab fields)
        buyButton_4.item = 234;

        // buyButton_5 (prefab fields)
        buyButton_5.item = 729;

        // secret (components)
        const secretSimpleButton = new SimpleButton(secret);
        secretSimpleButton.callback = () => this.interface.prompt.showSecret(5014);

        this.pages = pages;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
