import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton, Zone } from '@components/components'

export const preload = {
    key: 'journal-pack',
    url: 'assets/media/interface/books/journal/journal-pack.json',
    loadString: ['loading', 'journal']
}

/* START OF COMPILED CODE */

export default class Journal extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0.34900255869139585, y ?? 0.14197775311840743);

        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // block
        const block = scene.add.rectangle(751.650992220377, 500.8580265916743, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // page42
        const page42 = scene.add.container(781.5160486996174, 501.28960183262825);
        page42.visible = false;
        this.add(page42);

        // page_6
        const page_6 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/42");
        page42.add(page_6);

        // buttons_key
        const buttons_key = scene.add.image(265, -47, "journal", "buttons/key");
        page42.add(buttons_key);

        // buttons_left_button_active_1
        const buttons_left_button_active_1 = scene.add.image(-407, 118, "journal", "buttons/left_button");
        page42.add(buttons_left_button_active_1);

        // buttons_close_btn_2
        const buttons_close_btn_2 = scene.add.image(513, -401, "journal", "buttons/close-btn");
        page42.add(buttons_close_btn_2);

        // page41
        const page41 = scene.add.container(781.5160486996174, 507.28960183262825);
        page41.visible = false;
        this.add(page41);

        // page_50
        const page_50 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/41");
        page41.add(page_50);

        // page40
        const page40 = scene.add.container(781.5160486996174, 507.28960183262825);
        page40.visible = false;
        this.add(page40);

        // page_47
        const page_47 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/40");
        page40.add(page_47);

        // page39
        const page39 = scene.add.container(781.5160486996174, 506.28960183262825);
        page39.visible = false;
        this.add(page39);

        // page_43
        const page_43 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/39");
        page39.add(page_43);

        // page38
        const page38 = scene.add.container(781.5160486996174, 505.28960183262825);
        page38.visible = false;
        this.add(page38);

        // page_39
        const page_39 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/38");
        page38.add(page_39);

        // page37
        const page37 = scene.add.container(781.5160486996174, 504.28960183262825);
        page37.visible = false;
        this.add(page37);

        // page_35
        const page_35 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/37");
        page37.add(page_35);

        // page36
        const page36 = scene.add.container(781.5160486996174, 503.28960183262825);
        page36.visible = false;
        this.add(page36);

        // page_31
        const page_31 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/36");
        page36.add(page_31);

        // page35
        const page35 = scene.add.container(781.5160486996174, 501.28960183262825);
        page35.visible = false;
        this.add(page35);

        // page_27
        const page_27 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/35");
        page35.add(page_27);

        // page34
        const page34 = scene.add.container(781.5160486996174, 501.28960183262825);
        page34.visible = false;
        this.add(page34);

        // page_22
        const page_22 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/34");
        page34.add(page_22);

        // page33
        const page33 = scene.add.container(781.5160486996174, 501.28960183262825);
        page33.visible = false;
        this.add(page33);

        // page_14
        const page_14 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/33");
        page33.add(page_14);

        // page32
        const page32 = scene.add.container(781.8650477230549, 501.43156960606575);
        page32.visible = false;
        this.add(page32);

        // page_48
        const page_48 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/32");
        page32.add(page_48);

        // page31
        const page31 = scene.add.container(781.8650477230549, 501.43156960606575);
        page31.visible = false;
        this.add(page31);

        // page_46
        const page_46 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/31");
        page31.add(page_46);

        // page30
        const page30 = scene.add.container(781.8650477230549, 501.43156960606575);
        page30.visible = false;
        this.add(page30);

        // page_44
        const page_44 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/30");
        page30.add(page_44);

        // page29
        const page29 = scene.add.container(781.8650477230549, 501.43156960606575);
        page29.visible = false;
        this.add(page29);

        // page_42
        const page_42 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/29");
        page29.add(page_42);

        // page28
        const page28 = scene.add.container(781.8650477230549, 501.43156960606575);
        page28.visible = false;
        this.add(page28);

        // page_40
        const page_40 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/28");
        page28.add(page_40);

        // page27
        const page27 = scene.add.container(781.8650477230549, 501.43156960606575);
        page27.visible = false;
        this.add(page27);

        // page_38
        const page_38 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/27");
        page27.add(page_38);

        // page26
        const page26 = scene.add.container(781.8650477230549, 501.43156960606575);
        page26.visible = false;
        this.add(page26);

        // page_36
        const page_36 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/26");
        page26.add(page_36);

        // page25
        const page25 = scene.add.container(781.8650477230549, 501.43156960606575);
        page25.visible = false;
        this.add(page25);

        // page_34
        const page_34 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/25");
        page25.add(page_34);

        // page24
        const page24 = scene.add.container(781.8650477230549, 501.43156960606575);
        page24.visible = false;
        this.add(page24);

        // page_32
        const page_32 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/24");
        page24.add(page_32);

        // page23
        const page23 = scene.add.container(781.8650477230549, 501.43156960606575);
        page23.visible = false;
        this.add(page23);

        // page_30
        const page_30 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/23");
        page23.add(page_30);

        // page22
        const page22 = scene.add.container(781.8650477230549, 501.43156960606575);
        page22.visible = false;
        this.add(page22);

        // page_4
        const page_4 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/22");
        page22.add(page_4);

        // page21
        const page21 = scene.add.container(781.8650477230549, 501.43156960606575);
        page21.visible = false;
        this.add(page21);

        // page_28
        const page_28 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/21");
        page21.add(page_28);

        // page20
        const page20 = scene.add.container(781.8650477230549, 501.43156960606575);
        page20.visible = false;
        this.add(page20);

        // page_26
        const page_26 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/20");
        page20.add(page_26);

        // page19
        const page19 = scene.add.container(781.8650477230549, 501.43156960606575);
        page19.visible = false;
        this.add(page19);

        // page_24
        const page_24 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/19");
        page19.add(page_24);

        // page18
        const page18 = scene.add.container(781.8650477230549, 501.43156960606575);
        page18.visible = false;
        this.add(page18);

        // page_20
        const page_20 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/18");
        page18.add(page_20);

        // page17
        const page17 = scene.add.container(781.8650477230549, 501.43156960606575);
        page17.visible = false;
        this.add(page17);

        // page_16
        const page_16 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/17");
        page17.add(page_16);

        // page16
        const page16 = scene.add.container(781.8650477230549, 501.43156960606575);
        page16.visible = false;
        this.add(page16);

        // page_12
        const page_12 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/16");
        page16.add(page_12);

        // page15
        const page15 = scene.add.container(781.8650477230549, 501.43156960606575);
        page15.visible = false;
        this.add(page15);

        // page_8
        const page_8 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/15");
        page15.add(page_8);

        // page14
        const page14 = scene.add.container(782.2140467166901, 501.57353737950325);
        page14.visible = false;
        this.add(page14);

        // page_23
        const page_23 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/14");
        page14.add(page_23);

        // page13
        const page13 = scene.add.container(782.2140467166901, 501.57353737950325);
        page13.visible = false;
        this.add(page13);

        // page_21
        const page_21 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/13");
        page13.add(page_21);

        // page12
        const page12 = scene.add.container(782.2140467166901, 501.57353737950325);
        page12.visible = false;
        this.add(page12);

        // page_19
        const page_19 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/12");
        page12.add(page_19);

        // page11
        const page11 = scene.add.container(782.2140467166901, 501.57353737950325);
        page11.visible = false;
        this.add(page11);

        // page_17
        const page_17 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/11");
        page11.add(page_17);

        // page10
        const page10 = scene.add.container(782.2140467166901, 501.57353737950325);
        page10.visible = false;
        this.add(page10);

        // page_15
        const page_15 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/10");
        page10.add(page_15);

        // page9
        const page9 = scene.add.container(782.2140467166901, 501.57353737950325);
        page9.visible = false;
        this.add(page9);

        // page_13
        const page_13 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/9");
        page9.add(page_13);

        // page8
        const page8 = scene.add.container(782.2140467166901, 501.57353737950325);
        page8.visible = false;
        this.add(page8);

        // page_11
        const page_11 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/8");
        page8.add(page_11);

        // page7
        const page7 = scene.add.container(782.2140467166901, 501.57353737950325);
        page7.visible = false;
        this.add(page7);

        // page_9
        const page_9 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/7");
        page7.add(page_9);

        // page6
        const page6 = scene.add.container(782.2140467166901, 501.57353737950325);
        page6.visible = false;
        this.add(page6);

        // page_7
        const page_7 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/6");
        page6.add(page_7);

        // page5
        const page5 = scene.add.container(782.2140467166901, 501.57353737950325);
        page5.visible = false;
        this.add(page5);

        // page_5
        const page_5 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/5");
        page5.add(page_5);

        // page4
        const page4 = scene.add.container(782.2140467166901, 501.57353737950325);
        page4.visible = false;
        this.add(page4);

        // page_1
        const page_1 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/4");
        page4.add(page_1);

        // page3
        const page3 = scene.add.container(783.5630697869658, 501.7155275136746);
        page3.visible = false;
        this.add(page3);

        // page_3
        const page_3 = scene.add.image(-24.912077566588778, -21.857500922000384, "journal", "page/3");
        page3.add(page_3);

        // page2
        const page2 = scene.add.container(785.2996009320245, 496.50593407849817);
        page2.visible = false;
        this.add(page2);

        // page_2
        const page_2 = scene.add.image(-26.648608711647626, -16.647907486823897, "journal", "page/2");
        page2.add(page_2);

        // zone
        const zone = scene.add.rectangle(272, -79, 189, 31);
        zone.alpha = 0.0001;
        zone.isFilled = true;
        zone.fillColor = 65280;
        page2.add(zone);

        // rectangle
        const rectangle = scene.add.rectangle(270, -30, 234, 31);
        rectangle.alpha = 0.0001;
        rectangle.isFilled = true;
        rectangle.fillColor = 65280;
        page2.add(rectangle);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(271, 17, 293, 31);
        rectangle_2.alpha = 0.0001;
        rectangle_2.isFilled = true;
        rectangle_2.fillColor = 65280;
        page2.add(rectangle_2);

        // rectangle_3
        const rectangle_3 = scene.add.rectangle(273, 63, 162, 31);
        rectangle_3.alpha = 0.00001;
        rectangle_3.isFilled = true;
        rectangle_3.fillColor = 65280;
        page2.add(rectangle_3);

        // rectangle_4
        const rectangle_4 = scene.add.rectangle(273, 111, 162, 31);
        rectangle_4.alpha = 0.0001;
        rectangle_4.isFilled = true;
        rectangle_4.fillColor = 65280;
        page2.add(rectangle_4);

        // rectangle_5
        const rectangle_5 = scene.add.rectangle(274, 159, 232, 31);
        rectangle_5.alpha = 0.0001;
        rectangle_5.isFilled = true;
        rectangle_5.fillColor = 65280;
        page2.add(rectangle_5);

        // rectangle_6
        const rectangle_6 = scene.add.rectangle(273, 205, 159, 31);
        rectangle_6.alpha = 0.0001;
        rectangle_6.isFilled = true;
        rectangle_6.fillColor = 65280;
        page2.add(rectangle_6);

        // rectangle_7
        const rectangle_7 = scene.add.rectangle(272, 253, 186, 31);
        rectangle_7.alpha = 0.0001;
        rectangle_7.isFilled = true;
        rectangle_7.fillColor = 65280;
        page2.add(rectangle_7);

        // rectangle_8
        const rectangle_8 = scene.add.rectangle(273, 301, 208, 31);
        rectangle_8.alpha = 0.0001;
        rectangle_8.isFilled = true;
        rectangle_8.fillColor = 65280;
        page2.add(rectangle_8);

        // page1
        const page1 = scene.add.container(792.8185267235533, 499.22924628614487);
        this.add(page1);

        // buttons_page1
        const buttons_page1 = scene.add.image(-16.72708002119691, -5.868781542433567, "journal", "buttons/page1");
        page1.add(buttons_page1);

        // buttons_close_btn
        const buttons_close_btn = scene.add.image(219.2729199788031, -366.86877391303904, "journal", "buttons/close-btn");
        page1.add(buttons_close_btn);

        // buttons
        const buttons = scene.add.container(780.0900074968481, 592.0151470567336);
        buttons.visible = false;
        this.add(buttons);

        // buttons_right_button_active
        const buttons_right_button_active = scene.add.image(488, 133, "journal", "buttons/right_button");
        buttons.add(buttons_right_button_active);

        // buttons_left_button_active
        const buttons_left_button_active = scene.add.image(-399, 31, "journal", "buttons/left_button");
        buttons.add(buttons_left_button_active);

        // coins
        const coins = scene.add.text(-87, -146, "", {});
        coins.visible = false;
        coins.text = "New text";
        buttons.add(coins);

        // buttons_close_btn_1
        const buttons_close_btn_1 = scene.add.image(514, -492, "journal", "buttons/close-btn");
        buttons.add(buttons_close_btn_1);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20, page21, page22, page23, page24, page25, page26, page27, page28, page29, page30, page31, page32, page33, page34, page35, page36, page37, page38, page39, page40, page41, page42];

        // block (components)
        new Interactive(block);

        // buttons_key (components)
        const buttons_keyButton = new Button(buttons_key);
        buttons_keyButton.spriteName = "buttons/key";
        buttons_keyButton.callback = () =>this.interface.prompt.showItem(609);

        // buttons_left_button_active_1 (components)
        const buttons_left_button_active_1Button = new Button(buttons_left_button_active_1);
        buttons_left_button_active_1Button.spriteName = "buttons/left_button";
        buttons_left_button_active_1Button.callback = () => this.prevPage();;

        // buttons_close_btn_2 (components)
        const buttons_close_btn_2Button = new Button(buttons_close_btn_2);
        buttons_close_btn_2Button.spriteName = "buttons/close-btn";
        buttons_close_btn_2Button.callback = () => this.close();

        // zone (components)
        const zoneSimpleButton = new SimpleButton(zone);
        zoneSimpleButton.callback = () => this.showPage(2);

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.callback = () => this.showPage(8);

        // rectangle_2 (components)
        const rectangle_2SimpleButton = new SimpleButton(rectangle_2);
        rectangle_2SimpleButton.callback = () => this.showPage(11);

        // rectangle_3 (components)
        const rectangle_3SimpleButton = new SimpleButton(rectangle_3);
        rectangle_3SimpleButton.callback = () => this.showPage(14);

        // rectangle_4 (components)
        const rectangle_4SimpleButton = new SimpleButton(rectangle_4);
        rectangle_4SimpleButton.callback = () => this.showPage(20);

        // rectangle_5 (components)
        const rectangle_5SimpleButton = new SimpleButton(rectangle_5);
        rectangle_5SimpleButton.callback = () => this.showPage(25);

        // rectangle_6 (components)
        const rectangle_6SimpleButton = new SimpleButton(rectangle_6);
        rectangle_6SimpleButton.callback = () => this.showPage(31);

        // rectangle_7 (components)
        const rectangle_7SimpleButton = new SimpleButton(rectangle_7);
        rectangle_7SimpleButton.callback = () => this.showPage(37);

        // rectangle_8 (components)
        const rectangle_8SimpleButton = new SimpleButton(rectangle_8);
        rectangle_8SimpleButton.callback = () => this.showPage(39);

        // buttons_page1 (components)
        const buttons_page1Button = new Button(buttons_page1);
        buttons_page1Button.spriteName = "buttons/page1";
        buttons_page1Button.callback = () => this.nextPage();;

        // buttons_close_btn (components)
        const buttons_close_btnButton = new Button(buttons_close_btn);
        buttons_close_btnButton.spriteName = "buttons/close-btn";
        buttons_close_btnButton.callback = () => this.close();

        // buttons_right_button_active (components)
        const buttons_right_button_activeButton = new Button(buttons_right_button_active);
        buttons_right_button_activeButton.spriteName = "buttons/right_button";
        buttons_right_button_activeButton.callback = () => this.nextPage();;

        // buttons_left_button_active (components)
        const buttons_left_button_activeButton = new Button(buttons_left_button_active);
        buttons_left_button_activeButton.spriteName = "buttons/left_button";
        buttons_left_button_activeButton.callback = () => this.prevPage();;

        // buttons_close_btn_1 (components)
        const buttons_close_btn_1Button = new Button(buttons_close_btn_1);
        buttons_close_btn_1Button.spriteName = "buttons/close-btn";
        buttons_close_btn_1Button.callback = () => this.close();

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
