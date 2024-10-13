import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'


export const preload = {
    key: 'tour-book-pack',
    url: 'assets/media/interface/books/tourbook/tour-book-pack.json',
    loadString: ['loading', 'How To Be A Great Tour Guide']
}
// You can write more code here
//HOW TO BE A
//GREAT TOUR GUIDE
/* START OF COMPILED CODE */

export default class TourBook extends BookContainer {

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

        // page21
        const page21 = scene.add.image(-32.81854248046875, -19.229248046875, "tour-pageturns", "pg_last_tour");
        page_1.add(page21);

        // backPageLeft
        const backPageLeft = scene.add.sprite(-238.5, 233, "tour-pageturns", "backPageLeft");
        page_1.add(backPageLeft);

        // closeRight_1
        const closeRight_1 = scene.add.sprite(-215, -351, "tour-pageturns", "backPageClose");
        page_1.add(closeRight_1);

        // page3
        const page3 = scene.add.container(792.8185267235533, 499.22924628614487);
        page3.visible = false;
        this.add(page3);

        // page33
        const page33 = scene.add.image(-32.81854248046875, -19.229248046875, "tour-book", "pg3_tour");
        page3.add(page33);

        // page2
        const page2 = scene.add.container(792.8185267235533, 499.22924628614487);
        page2.visible = false;
        this.add(page2);

        // page22
        const page22 = scene.add.image(-32.81854248046875, -19.229248046875, "tour-book", "pg2_book");
        page2.add(page22);

        // page1
        const page1 = scene.add.container(792.4695399105549, 499.0872702896595);
        this.add(page1);

        // page
        const page = scene.add.image(-33, -19, "tour-pageturns", "pg_first_tour");
        page1.add(page);

        // closeRightFront
        const closeRightFront = scene.add.sprite(214, -351, "tour-pageturns", "closeRightFront");
        page1.add(closeRightFront);

        // frontPageRight
        const frontPageRight = scene.add.image(238, 232, "tour-pageturns", "frontPageRight");
        page1.add(frontPageRight);

        // settings
        const settings = scene.add.text(-10, -372, "", {});
        settings.setOrigin(0.5, 0.5);
        settings.text = "HOW TO BE A\nGREAT TOUR GUIDE";
        settings.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#000000ff", "strokeThickness":10});
        page1.add(settings);

        // buttons
        const buttons = scene.add.container(780.0900074968481, 592.0151470567336);
        buttons.visible = false;
        this.add(buttons);

        // closeRight
        const closeRight = scene.add.sprite(495, -425, "tour-pageturns", "closeRight");
        buttons.add(closeRight);

        // pageLeft
        const pageLeft = scene.add.sprite(-529, 119, "tour-pageturns", "pageLeft");
        buttons.add(pageLeft);

        // pageRight
        const pageRight = scene.add.sprite(503, 120, "tour-pageturns", "pageRight");
        buttons.add(pageRight);

        // coins
        const coins = scene.add.text(-1276.7242431640625, -439.8574676513672, "", {});
        coins.visible = false;
        coins.text = "New text";
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page_1];

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // backPageLeft (components)
        const backPageLeftButton = new Button(backPageLeft);
        backPageLeftButton.spriteName = "backPageLeft";
        backPageLeftButton.callback = () => this.prevPage();;

        // closeRight_1 (components)
        const closeRight_1Button = new Button(closeRight_1);
        closeRight_1Button.spriteName = "backPageClose";
        closeRight_1Button.callback = () => this.close();
        closeRight_1Button.pixelPerfect = true;

        // closeRightFront (components)
        const closeRightFrontButton = new Button(closeRightFront);
        closeRightFrontButton.spriteName = "closeRightFront";
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
