import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive } from '@components/components'


export const preload = {
    key: 'fairybook-pack',
    url: 'assets/media/interface/books/fairyfables/fairybook-pack.json',
    loadString: ['loading', 'Fairy Fables']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class FairyFables extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0.34900255869139585, y ?? 0.14197775311840743);

        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
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
        const page12 = scene.add.image(-32.81854248046875, -19.229248046875, "fables", "page12");
        page_1.add(page12);

        // turns_left_close
        const turns_left_close = scene.add.image(-212, -348, "fables", "turns/left_close");
        turns_left_close.scaleX = 0.5;
        turns_left_close.scaleY = 0.5;
        turns_left_close.angle = -3;
        page_1.add(turns_left_close);

        // turns_left_1
        const turns_left_1 = scene.add.sprite(-217, 225, "fables", "turns/backleft");
        turns_left_1.scaleX = 0.4;
        turns_left_1.scaleY = 0.4;
        page_1.add(turns_left_1);

        // page_11
        const page_11 = scene.add.container(792.1205408871174, 499.945302516222);
        page_11.visible = false;
        this.add(page_11);

        // page11
        const page11 = scene.add.image(-32.81854248046875, -19.229248046875, "fables", "page11");
        page_11.add(page11);

        // page_10
        const page_10 = scene.add.container(791.4225428402424, 499.661366969347);
        page_10.visible = false;
        this.add(page_10);

        // page10
        const page10 = scene.add.image(-32.81854248046875, -19.229248046875, "fables", "page10");
        page_10.add(page10);

        // page_9
        const page_9 = scene.add.container(791.7715418636799, 499.8033347427845);
        page_9.visible = false;
        this.add(page_9);

        // page9
        const page9 = scene.add.image(-32.81854248046875, -19.229248046875, "fables", "page9");
        page_9.add(page9);

        // page_8
        const page_8 = scene.add.container(792.1205408871174, 499.945302516222);
        page_8.visible = false;
        this.add(page_8);

        // page8
        const page8 = scene.add.image(-32.81854248046875, -19.229248046875, "fables", "page8");
        page_8.add(page8);

        // page_7
        const page_7 = scene.add.container(792.4695399105549, 500.0872702896595);
        page_7.visible = false;
        this.add(page_7);

        // page7
        const page7 = scene.add.image(-32.81854248046875, -19.229248046875, "fables", "page7");
        page_7.add(page7);

        // page_6
        const page_6 = scene.add.container(791.7715418636799, 499.8033347427845);
        page_6.visible = false;
        this.add(page_6);

        // page6
        const page6 = scene.add.image(-32.81854248046875, -19.229248046875, "fables", "page6");
        page_6.add(page6);

        // page_5
        const page_5 = scene.add.container(792.1205408871174, 499.945302516222);
        page_5.visible = false;
        this.add(page_5);

        // page5
        const page5 = scene.add.image(-32.81854248046875, -19.229248046875, "fables", "page5");
        page_5.add(page5);

        // page4
        const page4 = scene.add.container(792.4695399105549, 500.0872702896595);
        page4.visible = false;
        this.add(page4);

        // page44
        const page44 = scene.add.image(-32.81854248046875, -19.229248046875, "fables", "page4");
        page4.add(page44);

        // page3
        const page3 = scene.add.container(792.1205408871174, 498.945302516222);
        page3.visible = false;
        this.add(page3);

        // page33
        const page33 = scene.add.image(-32.81854248046875, -19.229248046875, "fables", "page3");
        page3.add(page33);

        // page2
        const page2 = scene.add.container(792.8185267235533, 499.22924628614487);
        page2.visible = false;
        this.add(page2);

        // page22
        const page22 = scene.add.image(-32.81854248046875, -19.229248046875, "fables", "page2");
        page2.add(page22);

        // page1
        const page1 = scene.add.container(792.4695399105549, 499.0872702896595);
        page1.visible = false;
        this.add(page1);

        // page
        const page = scene.add.image(-32.81854248046875, -19.229248046875, "fables", "page1");
        page1.add(page);

        // turns_close_1
        const turns_close_1 = scene.add.sprite(214, -348, "fables", "turns/close");
        turns_close_1.scaleX = 0.5;
        turns_close_1.scaleY = 0.5;
        turns_close_1.angle = 2;
        page1.add(turns_close_1);

        // turns_front
        const turns_front = scene.add.image(217, 225, "fables", "turns/front");
        turns_front.scaleX = 0.4;
        turns_front.scaleY = 0.4;
        page1.add(turns_front);

        // buttons
        const buttons = scene.add.container(780.0900074968481, 592.0151470567336);
        buttons.visible = false;
        this.add(buttons);

        // coins
        const coins = scene.add.text(-87, -146, "", {});
        coins.visible = false;
        coins.text = "New text";
        buttons.add(coins);

        // turns_close
        const turns_close = scene.add.sprite(490, -421, "fables", "turns/close");
        turns_close.scaleX = 0.5;
        turns_close.scaleY = 0.5;
        buttons.add(turns_close);

        // turns_left
        const turns_left = scene.add.sprite(-497, 77, "fables", "turns/left");
        turns_left.scaleX = 0.4;
        turns_left.scaleY = 0.4;
        buttons.add(turns_left);

        // turns_right
        const turns_right = scene.add.sprite(470, 78, "fables", "turns/right");
        turns_right.scaleX = 0.4;
        turns_right.scaleY = 0.4;
        buttons.add(turns_right);

        // lists
        const pages = [page1, page2, page3, page4, page_5, page_6, page_7, page_8, page_9, page_10, page_11, page_1];

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // turns_left_close (components)
        const turns_left_closeButton = new Button(turns_left_close);
        turns_left_closeButton.spriteName = "turns/left_close";
        turns_left_closeButton.callback = () => {this.close()};
        turns_left_closeButton.activeFrame = true;

        // turns_left_1 (components)
        const turns_left_1Button = new Button(turns_left_1);
        turns_left_1Button.spriteName = "turns/backleft";
        turns_left_1Button.callback = () => this.prevPage();;
        turns_left_1Button.activeFrame = true;

        // turns_close_1 (components)
        const turns_close_1Button = new Button(turns_close_1);
        turns_close_1Button.spriteName = "turns/close";
        turns_close_1Button.callback = () => this.close();
        turns_close_1Button.activeFrame = true;
        turns_close_1Button.pixelPerfect = true;

        // turns_front (components)
        const turns_frontButton = new Button(turns_front);
        turns_frontButton.spriteName = "turns/front";
        turns_frontButton.callback = () => this.nextPage();;

        // turns_close (components)
        const turns_closeButton = new Button(turns_close);
        turns_closeButton.spriteName = "turns/close";
        turns_closeButton.callback = () => this.close();
        turns_closeButton.activeFrame = true;
        turns_closeButton.pixelPerfect = true;

        // turns_left (components)
        const turns_leftButton = new Button(turns_left);
        turns_leftButton.spriteName = "turns/left";
        turns_leftButton.callback = () => this.prevPage();;
        turns_leftButton.activeFrame = true;

        // turns_right (components)
        const turns_rightButton = new Button(turns_right);
        turns_rightButton.spriteName = "turns/right";
        turns_rightButton.callback = () => this.nextPage();;
        turns_rightButton.activeFrame = true;

        this.buttons = buttons;
        this.coins = coins;
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
