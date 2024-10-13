import { Button, Interactive, SimpleButton, Zone } from '@components/components'
import BookContainer from '@scenes/interface/books/BookContainer';

import BuyButton from '@scenes/interface/shared_prefabs/BuyButton'


export const preload = {
    key: 'cardjitsupartyitemui-pack',
    url: 'assets/media/interface/catalogs/cardjitsupartyitemui/cardjitsupartyitemui-pack.json',
    loadString: ['loading', 'itemui']
}

/* START OF COMPILED CODE */

export default class ItemUI extends BookContainer {

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
        const page5 = scene.add.container(2, 4);
        page5.visible = false;
        this.add(page5);

        // paperbackground_5
        const paperbackground_5 = scene.add.image(771, 469, "cardjitsupartyitemui", "paperbackground");
        page5.add(paperbackground_5);

        // clothingdays0005
        const clothingdays0005 = scene.add.image(754, 446, "cardjitsupartyitemui", "clothingdays0005");
        page5.add(clothingdays0005);

        // buy_button5
        const buy_button5 = scene.add.image(757, 797, "cardjitsupartyitemui", "buy_button");
        page5.add(buy_button5);

        // lock_icon4
        const lock_icon4 = scene.add.image(759, 416, "cardjitsupartyitemui", "lock_icon");
        lock_icon4.visible = false;
        page5.add(lock_icon4);

        // page4
        const page4 = scene.add.container(2, 4);
        page4.visible = false;
        this.add(page4);

        // paperbackground_4
        const paperbackground_4 = scene.add.image(771, 469, "cardjitsupartyitemui", "paperbackground");
        page4.add(paperbackground_4);

        // clothingdays0004
        const clothingdays0004 = scene.add.image(759, 415, "cardjitsupartyitemui", "clothing3");
        clothingdays0004.scaleX = 0.925;
        clothingdays0004.scaleY = 0.925;
        clothingdays0004.angle = -0.20000000000004547;
        page4.add(clothingdays0004);

        // buy_button4
        const buy_button4 = scene.add.image(757, 797, "cardjitsupartyitemui", "buy_button");
        page4.add(buy_button4);

        // lock_icon3
        const lock_icon3 = scene.add.image(759, 416, "cardjitsupartyitemui", "lock_icon");
        lock_icon3.visible = false;
        page4.add(lock_icon3);

        // page3
        const page3 = scene.add.container(2, 4);
        page3.visible = false;
        this.add(page3);

        // paperbackground_3
        const paperbackground_3 = scene.add.image(771, 469, "cardjitsupartyitemui", "paperbackground");
        page3.add(paperbackground_3);

        // clothingdays0003
        const clothingdays0003 = scene.add.image(760, 423, "cardjitsupartyitemui", "clothing2");
        clothingdays0003.scaleX = 0.98;
        clothingdays0003.scaleY = 0.98;
        clothingdays0003.angle = -1.5000000000000002;
        page3.add(clothingdays0003);

        // buy_button3
        const buy_button3 = scene.add.image(757, 797, "cardjitsupartyitemui", "buy_button");
        page3.add(buy_button3);

        // page2
        const page2 = scene.add.container(2, 4);
        page2.visible = false;
        this.add(page2);

        // paperbackground_2
        const paperbackground_2 = scene.add.image(771, 469, "cardjitsupartyitemui", "paperbackground");
        page2.add(paperbackground_2);

        // clothingdays0002
        const clothingdays0002 = scene.add.image(758, 426, "cardjitsupartyitemui", "clothingdays0002");
        page2.add(clothingdays0002);

        // buy_button2
        const buy_button2 = scene.add.image(757, 797, "cardjitsupartyitemui", "buy_button");
        page2.add(buy_button2);

        // lock_icon
        const lock_icon = scene.add.image(759, 416, "cardjitsupartyitemui", "lock_icon");
        lock_icon.visible = false;
        page2.add(lock_icon);

        // buy_button // move it down per day
        const buy_button____move_it_down_per_day = scene.add.image(759, 801, "cardjitsupartyitemui", "buy_button");
        buy_button____move_it_down_per_day.visible = false;
        this.add(buy_button____move_it_down_per_day);

        // page1
        const page1 = scene.add.container(1, 4);
        page1.visible = false;
        this.add(page1);

        // paperbackground
        const paperbackground = scene.add.image(772, 469, "cardjitsupartyitemui", "paperbackground");
        page1.add(paperbackground);

        // clothingdays0001
        const clothingdays0001 = scene.add.image(754, 455, "cardjitsupartyitemui", "clothingdays0001");
        page1.add(clothingdays0001);

        // buy_button1
        const buy_button1 = scene.add.image(758, 797, "cardjitsupartyitemui", "buy_button");
        page1.add(buy_button1);

        // buttons
        const buttons = scene.add.container(190, 47);
        this.add(buttons);

        // coins
        const coins = scene.add.text(889, 362, "", {});
        coins.setOrigin(1, 0);
        coins.visible = false;
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // pageleft_1
        const pageleft_1 = scene.add.rectangle(402, 444, 60, 110);
        pageleft_1.alpha = 0.000001;
        pageleft_1.isFilled = true;
        this.add(pageleft_1);

        // rectangle
        const rectangle = scene.add.rectangle(1457, 55, 100, 100);
        rectangle.alpha = 1e-22;
        rectangle.isFilled = true;
        this.add(rectangle);

        // getrealcorner_1
        const getrealcorner_1 = scene.add.image(1397, 93, "cardjitsupartyitemui", "getrealcorner");
        this.add(getrealcorner_1);

        // pageright_1
        const pageright_1 = scene.add.rectangle(1098, 446, 60, 110);
        pageright_1.alpha = 0.000001;
        pageright_1.isFilled = true;
        this.add(pageright_1);

        // the_corner_x
        const the_corner_x = scene.add.image(1455, 59, "cardjitsupartyitemui", "the_corner_x");
        the_corner_x.scaleX = 0.45;
        the_corner_x.scaleY = 0.45;
        this.add(the_corner_x);

        // lists
        const pages = [page1, page2, page3, page4, page5];

        // block (components)
        new Interactive(block);

        // buy_button5 (components)
        const buy_button5Button = new Button(buy_button5);
        buy_button5Button.spriteName = "buy_button";
        buy_button5Button.callback = () => {this.interface.prompt.showItem(380043)};

        // buy_button4 (components)
        const buy_button4Button = new Button(buy_button4);
        buy_button4Button.spriteName = "buy_button";
        buy_button4Button.callback = () => {this.interface.prompt.showItem(4846)};

        // buy_button3 (components)
        const buy_button3Button = new Button(buy_button3);
        buy_button3Button.spriteName = "buy_button";
        buy_button3Button.callback = () => {this.interface.prompt.showItem(4458)};

        // buy_button2 (components)
        const buy_button2Button = new Button(buy_button2);
        buy_button2Button.spriteName = "buy_button";
        buy_button2Button.callback = () => {this.interface.prompt.showItem(4454)};

        // buy_button1 (components)
        const buy_button1Button = new Button(buy_button1);
        buy_button1Button.spriteName = "buy_button";
        buy_button1Button.callback = () => {this.interface.prompt.showItem(1588)};

        // pageleft_1 (components)
        const pageleft_1SimpleButton = new SimpleButton(pageleft_1);
        pageleft_1SimpleButton.callback = () => this.prevPage();

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.callback = () => this.close();

        // pageright_1 (components)
        const pageright_1SimpleButton = new SimpleButton(pageright_1);
        pageright_1SimpleButton.callback = () => this.nextPage();

        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.setCoins(this.world.client.coins)
    }

    setCoins(coins) {
        this.coins.text = `YOUR COINS: ${coins}`
    }

    buy(item) {
        this.interface.prompt.showFurniture(item)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
