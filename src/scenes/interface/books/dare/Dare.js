import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'


export const preload = {
    key: 'bookroom-pack',
    url: 'assets/media/interface/books/bookroom/bookroom-pack.json',
    loadString: ['loading', 'Truth or Dare']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class Dare extends BookContainer {

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
        const page12 = scene.add.image(-32.81854248046875, -19.229248046875, "dare", "darepg10");
        page_1.add(page12);

        // backPageLeft
        const backPageLeft = scene.add.sprite(-204, 204, "dare", "backPageLeft");
        page_1.add(backPageLeft);

        // text_1
        const text_1 = scene.add.text(254, -460, "", {});
        text_1.text = "x";
        text_1.setStyle({ "color": "#000000ff", "fontFamily": "Helvetica", "fontSize": "48px", "fontStyle": "bold" });
        page_1.add(text_1);

        // page_9
        const page_9 = scene.add.container(817, 507);
        page_9.visible = false;
        this.add(page_9);

        // page9
        const page9 = scene.add.image(-57, -27, "dare", "darepg9");
        page_9.add(page9);

        // page_8
        const page_8 = scene.add.container(792.1205408871174, 499.945302516222);
        page_8.visible = false;
        this.add(page_8);

        // page8
        const page8 = scene.add.image(-31.81854248046875, -20.229248046875, "dare", "darepg8");
        page_8.add(page8);

        // page_7
        const page_7 = scene.add.container(792.4695399105549, 500.0872702896595);
        page_7.visible = false;
        this.add(page_7);

        // page7
        const page7 = scene.add.image(-31.81854248046875, -20.229248046875, "dare", "darepg7");
        page_7.add(page7);

        // page_6
        const page_6 = scene.add.container(791.7715418636799, 499.8033347427845);
        page_6.visible = false;
        this.add(page_6);

        // page6
        const page6 = scene.add.image(-31.81854248046875, -20.229248046875, "dare", "darepg6");
        page_6.add(page6);

        // page_5
        const page_5 = scene.add.container(792.1205408871174, 499.945302516222);
        page_5.visible = false;
        this.add(page_5);

        // page5
        const page5 = scene.add.image(-31.81854248046875, -20.229248046875, "dare", "darepg5");
        page_5.add(page5);

        // page4
        const page4 = scene.add.container(792.4695399105549, 500.0872702896595);
        page4.visible = false;
        this.add(page4);

        // page44
        const page44 = scene.add.image(-31.81854248046875, -20.229248046875, "dare", "darepg4");
        page4.add(page44);

        // page3
        const page3 = scene.add.container(792.1205408871174, 498.945302516222);
        page3.visible = false;
        this.add(page3);

        // page33
        const page33 = scene.add.image(-31.81854248046875, -19.229248046875, "dare", "darepg3");
        page3.add(page33);

        // page2
        const page2 = scene.add.container(792.8185267235533, 499.22924628614487);
        page2.visible = false;
        this.add(page2);

        // page22
        const page22 = scene.add.image(-32.81854248046875, -19.229248046875, "dare", "darepg2");
        page2.add(page22);

        // page1
        const page1 = scene.add.container(792.4695399105549, 499.0872702896595);
        page1.visible = false;
        this.add(page1);

        // page
        const page = scene.add.image(-33, -19, "dare", "darepg1");
        page1.add(page);

        // closeRightFront
        const closeRightFront = scene.add.sprite(213, -350, "pagebuttons", "closeRight");
        page1.add(closeRightFront);

        // frontPageRight
        const frontPageRight = scene.add.image(198, 202, "dare", "frontPageRight");
        page1.add(frontPageRight);

        // buttons
        const buttons = scene.add.container(780.0900074968481, 592.0151470567336);
        buttons.visible = false;
        this.add(buttons);

        // closeRight
        const closeRight = scene.add.sprite(495, -425, "pagebuttons", "closeRight");
        buttons.add(closeRight);

        // pageLeft
        const pageLeft = scene.add.sprite(-477, 47, "pagebuttons", "pageLeft");
        buttons.add(pageLeft);

        // pageRight
        const pageRight = scene.add.sprite(454, 49, "pagebuttons", "pageRight");
        buttons.add(pageRight);

        // coins
        const coins = scene.add.text(-1276.7242431640625, -438.8574676513672, "", {});
        coins.visible = false;
        coins.text = "New text";
        buttons.add(coins);

        // rectangle_3
        const rectangle_3 = scene.add.rectangle(1209, -3, 50, 128);
        rectangle_3.visible = false;
        rectangle_3.isFilled = true;
        rectangle_3.fillColor = 16713736;
        this.add(rectangle_3);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(1434, 311, 128, 128);
        rectangle_2.visible = false;
        rectangle_2.isFilled = true;
        rectangle_2.fillColor = 16056320;
        this.add(rectangle_2);

        // lists
        const pages = [page1, page2, page3, page4, page_5, page_6, page_7, page_8, page_9, page_1];

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // backPageLeft (components)
        const backPageLeftButton = new Button(backPageLeft);
        backPageLeftButton.spriteName = "backPageLeft";
        backPageLeftButton.callback = () => this.prevPage();;
        backPageLeftButton.activeFrame = true;

        // text_1 (components)
        const text_1SimpleButton = new SimpleButton(text_1);
        text_1SimpleButton.callback = () => this.close();

        // closeRightFront (components)
        const closeRightFrontButton = new Button(closeRightFront);
        closeRightFrontButton.spriteName = "closeRight";
        closeRightFrontButton.callback = () => this.close();
        closeRightFrontButton.pixelPerfect = true;

        // frontPageRight (components)
        const frontPageRightButton = new Button(frontPageRight);
        frontPageRightButton.spriteName = "frontPageRight";
        frontPageRightButton.callback = () => this.nextPage();;

        // closeRight (components)
        const closeRightButton = new Button(closeRight);
        closeRightButton.spriteName = "closeRight";
        closeRightButton.callback = () => this.close();
        closeRightButton.pixelPerfect = true;

        // pageLeft (components)
        const pageLeftButton = new Button(pageLeft);
        pageLeftButton.spriteName = "pageLeft";
        pageLeftButton.callback = () => this.prevPage();;

        // pageRight (components)
        const pageRightButton = new Button(pageRight);
        pageRightButton.spriteName = "pageRight";
        pageRightButton.callback = () => this.nextPage();;

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
