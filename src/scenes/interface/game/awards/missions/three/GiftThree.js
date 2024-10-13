import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'


export const preload = {
    key: 'giftthree-pack',
    url: 'assets/media/interface/game/awards/missions/three/giftthree-pack.json',
    loadString: ['loading', 'Card from Dancing Penguin']
}


// You can write more code here

/* START OF COMPILED CODE */

export default class GiftThree extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0.34900255869139585, y ?? 0.14197775311840743);

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
        this.add(rectangle_1);

        // page_1
        const page_1 = scene.add.container(791.7715418636799, 498.8033347427845);
        page_1.visible = false;
        this.add(page_1);

        // page12
        const page12 = scene.add.image(-32.81854248046875, -19.229248046875, "award_q3_gift", "dancethree");
        page_1.add(page12);

        // backPageLeft
        const backPageLeft = scene.add.sprite(-254, 227, "award_q3_gift", "backPageLeft");
        page_1.add(backPageLeft);

        // buttons_close_2
        const buttons_close_2 = scene.add.image(218, -387, "main", "grey-button");
        page_1.add(buttons_close_2);

        // grey_x_2
        const grey_x_2 = scene.add.image(218, -389, "main", "grey-x");
        page_1.add(grey_x_2);

        // page2
        const page2 = scene.add.container(793.8185267235533, 499.22924628614487);
        page2.visible = false;
        this.add(page2);

        // page22
        const page22 = scene.add.image(-31.81854248046875, -19.229248046875, "award_q3_gift", "dancetwo");
        page2.add(page22);

        // page1
        const page1 = scene.add.container(795, 499);
        page1.visible = false;
        this.add(page1);

        // page
        const page = scene.add.image(-33, -19, "award_q3_gift", "danceone");
        page1.add(page);

        // frontPageRight
        const frontPageRight = scene.add.image(-34, -52, "award_q3_gift", "frontPageRight");
        page1.add(frontPageRight);

        // buttons_close
        const buttons_close = scene.add.image(211, -389, "main", "grey-button");
        page1.add(buttons_close);

        // grey_x
        const grey_x = scene.add.image(211, -391, "main", "grey-x");
        page1.add(grey_x);

        // buttons
        const buttons = scene.add.container(780.0900074968481, 592.0151470567336);
        buttons.visible = false;
        this.add(buttons);

        // pageLeft
        const pageLeft = scene.add.sprite(-537, 112, "award_q3_gift", "pageLeft");
        buttons.add(pageLeft);

        // pageRight
        const pageRight = scene.add.sprite(496, 112, "award_q3_gift", "pageRight");
        buttons.add(pageRight);

        // coins
        const coins = scene.add.text(-1276.7242431640625, -438.8574676513672, "", {});
        coins.visible = false;
        coins.text = "New text";
        buttons.add(coins);

        // buttons_close_1
        const buttons_close_1 = scene.add.image(524, -488, "main", "grey-button");
        buttons.add(buttons_close_1);

        // grey_x_1
        const grey_x_1 = scene.add.image(524, -490, "main", "grey-x");
        buttons.add(grey_x_1);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(1435, 311, 128, 128);
        rectangle_2.visible = false;
        rectangle_2.isFilled = true;
        rectangle_2.fillColor = 16056320;
        this.add(rectangle_2);

        // rectangle_3
        const rectangle_3 = scene.add.rectangle(1208, -3, 50, 128);
        rectangle_3.visible = false;
        rectangle_3.isFilled = true;
        rectangle_3.fillColor = 16713736;
        this.add(rectangle_3);

        // lists
        const pages = [page1, page2, page_1];

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // backPageLeft (components)
        const backPageLeftButton = new Button(backPageLeft);
        backPageLeftButton.spriteName = "backPageLeft";
        backPageLeftButton.callback = () => this.prevPage();;
        backPageLeftButton.activeFrame = true;

        // buttons_close_2 (components)
        const buttons_close_2Button = new Button(buttons_close_2);
        buttons_close_2Button.spriteName = "grey-button";
        buttons_close_2Button.callback = () => this.close();
        buttons_close_2Button.activeFrame = true;

        // frontPageRight (components)
        const frontPageRightButton = new Button(frontPageRight);
        frontPageRightButton.spriteName = "frontPageRight";
        frontPageRightButton.callback = () => this.nextPage();;

        // buttons_close (components)
        const buttons_closeButton = new Button(buttons_close);
        buttons_closeButton.spriteName = "grey-button";
        buttons_closeButton.callback = () => this.interface.destroyWidget(this);
        buttons_closeButton.activeFrame = true;

        // pageLeft (components)
        const pageLeftButton = new Button(pageLeft);
        pageLeftButton.spriteName = "pageLeft";
        pageLeftButton.callback = () => this.prevPage();;

        // pageRight (components)
        const pageRightButton = new Button(pageRight);
        pageRightButton.spriteName = "pageRight";
        pageRightButton.callback = () => this.nextPage();;

        // buttons_close_1 (components)
        const buttons_close_1Button = new Button(buttons_close_1);
        buttons_close_1Button.spriteName = "grey-button";
        buttons_close_1Button.callback = () => this.close();
        buttons_close_1Button.activeFrame = true;

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
