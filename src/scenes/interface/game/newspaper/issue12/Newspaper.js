import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

export const preload = {
    key: 'twelfth-edition-pack.json',
    url: 'assets/media/interface/game/newspaper/twelfth edition/twelfth-edition-pack.json', 
    loadString: ['loading', 'Newspaper']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class Newspaper extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? -1, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // rectangle_1
        const rectangle_1 = scene.add.rectangle(772, 480, 128, 128);
        rectangle_1.scaleX = 11.961414097039036;
        rectangle_1.scaleY = 7.609571892641703;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 0;
        rectangle_1.fillAlpha = 0.2;
        this.add(rectangle_1);

        // _page7
        const _page7 = scene.add.container(691, 437);
        _page7.visible = false;
        this.add(_page7);

        // page5
        const page5 = scene.add.image(81, 23, "pageAA", "pageAA");
        _page7.add(page5);

        // left_122
        const left_122 = scene.add.image(-580, 336, "newspaperbuttons", "left");
        _page7.add(left_122);

        // close_232
        const close_232 = scene.add.image(705, -283, "newspaperbuttons", "close");
        _page7.add(close_232);

        // main_122
        const main_122 = scene.add.image(-579, -240, "newspaperbuttons", "main");
        _page7.add(main_122);

        // submit_question
        const submit_question = scene.add.image(387, 151, "aunt-arctic-questions", "submit_question");
        submit_question.angle = -0.5;
        _page7.add(submit_question);

        // _page6
        const _page6 = scene.add.container(691, 437);
        _page6.visible = false;
        this.add(_page6);

        // adaptedpg6
        const adaptedpg6 = scene.add.image(67, 60, "twelfth-edition", "pg0006");
        _page6.add(adaptedpg6);

        // left_126
        const left_126 = scene.add.image(-597, 322, "newspaperbuttons", "left");
        left_126.visible = false;
        _page6.add(left_126);

        // close_236
        const close_236 = scene.add.image(693, -299, "newspaperbuttons", "close");
        close_236.visible = false;
        _page6.add(close_236);

        // main_16
        const main_16 = scene.add.image(-595, -255, "newspaperbuttons", "main");
        main_16.visible = false;
        _page6.add(main_16);

        // _page5
        const _page5 = scene.add.container(691, 437);
        _page5.visible = false;
        this.add(_page5);

        // adaptedpg5
        const adaptedpg5 = scene.add.image(67, 60, "twelfth-edition", "pg0005");
        _page5.add(adaptedpg5);

        // left_125
        const left_125 = scene.add.image(-597, 322, "newspaperbuttons", "left");
        left_125.visible = false;
        _page5.add(left_125);

        // close_235
        const close_235 = scene.add.image(693, -299, "newspaperbuttons", "close");
        close_235.visible = false;
        _page5.add(close_235);

        // main_15
        const main_15 = scene.add.image(-595, -255, "newspaperbuttons", "main");
        main_15.visible = false;
        _page5.add(main_15);

        // _page4
        const _page4 = scene.add.container(691, 437);
        _page4.visible = false;
        this.add(_page4);

        // adaptedpg2
        const adaptedpg2 = scene.add.image(67, 60, "twelfth-edition", "pg0004");
        _page4.add(adaptedpg2);

        // left_12
        const left_12 = scene.add.image(-597, 322, "newspaperbuttons", "left");
        left_12.visible = false;
        _page4.add(left_12);

        // close_23
        const close_23 = scene.add.image(693, -299, "newspaperbuttons", "close");
        close_23.visible = false;
        _page4.add(close_23);

        // main_1
        const main_1 = scene.add.image(-595, -255, "newspaperbuttons", "main");
        main_1.visible = false;
        _page4.add(main_1);

        // _page3
        const _page3 = scene.add.container(676, 407);
        _page3.visible = false;
        this.add(_page3);

        // page3
        const page3 = scene.add.image(83, 90, "twelfth-edition", "pg0003");
        _page3.add(page3);

        // _page2
        const _page2 = scene.add.container(676, 407);
        _page2.visible = false;
        this.add(_page2);

        // page2
        const page2 = scene.add.image(83, 91, "twelfth-edition", "pg0002");
        _page2.add(page2);

        // _page1
        const _page1 = scene.add.container(677, 438);
        _page1.visible = false;
        this.add(_page1);

        // adaptedpg1
        const adaptedpg1 = scene.add.image(83, 53, "twelfth-edition", "pg0001");
        _page1.add(adaptedpg1);

        // close_1
        const close_1 = scene.add.image(603, -276, "newspaperbuttons", "close");
        _page1.add(close_1);

        // right_1
        const right_1 = scene.add.image(613, 303, "newspaperbuttons", "right");
        _page1.add(right_1);

        // construction
        const construction = scene.add.rectangle(-269, -80, 128, 128);
        construction.scaleX = 2.936192991169804;
        construction.scaleY = 1.4472187285201359;
        _page1.add(construction);

        // questions
        const questions = scene.add.rectangle(129, -86, 128, 128);
        questions.scaleX = 2.608448576426685;
        questions.scaleY = 1.4521025367799516;
        questions.angle = -1;
        _page1.add(questions);

        // events
        const events = scene.add.rectangle(483, -84, 128, 128);
        events.scaleX = 2.608448576426685;
        events.scaleY = 1.4521025367799516;
        events.angle = -1;
        _page1.add(events);

        // we_need_you
        const we_need_you = scene.add.image(-398, -286, "aunt-arctic-questions", "we_need_you");
        we_need_you.angle = -1;
        _page1.add(we_need_you);

        // buttons
        const buttons = scene.add.container(-16, -41);
        buttons.visible = false;
        this.add(buttons);

        // right
        const right = scene.add.image(1426, 791, "newspaperbuttons", "right");
        buttons.add(right);

        // main
        const main = scene.add.image(128, 239, "newspaperbuttons", "main");
        buttons.add(main);

        // left
        const left = scene.add.image(128, 815, "newspaperbuttons", "left");
        buttons.add(left);

        // close
        const close = scene.add.image(1412, 196, "newspaperbuttons", "close");
        buttons.add(close);

        // coins
        const coins = scene.add.text(538, 196, "", {});
        coins.visible = false;
        buttons.add(coins);

        // lists
        const pages = [_page1, _page2, _page3, _page4, _page5, _page6, _page7];

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // left_122 (components)
        const left_122Button = new Button(left_122);
        left_122Button.spriteName = "left";
        left_122Button.callback = () => { this.prevPage();};

        // close_232 (components)
        const close_232Button = new Button(close_232);
        close_232Button.spriteName = "close";
        close_232Button.callback = () => {this.closeNews()};

        // main_122 (components)
        const main_122Button = new Button(main_122);
        main_122Button.spriteName = "main";
        main_122Button.callback = () => {this.showPage(0)};

        // submit_question (components)
        const submit_questionButton = new Button(submit_question);
        submit_questionButton.spriteName = "submit_question";
        submit_questionButton.callback = () => {this.interface.loadWidget("Newsform")};

        // left_126 (components)
        const left_126Button = new Button(left_126);
        left_126Button.spriteName = "left";
        left_126Button.callback = () => { this.prevPage();};

        // close_236 (components)
        const close_236Button = new Button(close_236);
        close_236Button.spriteName = "close";
        close_236Button.callback = () => {this.interface.destroyWidget(this)};

        // main_16 (components)
        const main_16Button = new Button(main_16);
        main_16Button.spriteName = "main";
        main_16Button.callback = () => {this.showPage(0)};

        // left_125 (components)
        const left_125Button = new Button(left_125);
        left_125Button.spriteName = "left";
        left_125Button.callback = () => { this.prevPage();};

        // close_235 (components)
        const close_235Button = new Button(close_235);
        close_235Button.spriteName = "close";
        close_235Button.callback = () => {this.interface.destroyWidget(this)};

        // main_15 (components)
        const main_15Button = new Button(main_15);
        main_15Button.spriteName = "main";
        main_15Button.callback = () => {this.showPage(0)};

        // left_12 (components)
        const left_12Button = new Button(left_12);
        left_12Button.spriteName = "left";
        left_12Button.callback = () => { this.prevPage();};

        // close_23 (components)
        const close_23Button = new Button(close_23);
        close_23Button.spriteName = "close";
        close_23Button.callback = () => {this.interface.destroyWidget(this)};

        // main_1 (components)
        const main_1Button = new Button(main_1);
        main_1Button.spriteName = "main";
        main_1Button.callback = () => {this.showPage(0)};

        // close_1 (components)
        const close_1Button = new Button(close_1);
        close_1Button.spriteName = "close";
        close_1Button.callback = () => {this.closeNews()};

        // right_1 (components)
        const right_1Button = new Button(right_1);
        right_1Button.spriteName = "right";
        right_1Button.callback = () => { this.nextPage();};

        // construction (components)
        const constructionSimpleButton = new SimpleButton(construction);
        constructionSimpleButton.callback = () => {this.showPage(1)};

        // questions (components)
        const questionsSimpleButton = new SimpleButton(questions);
        questionsSimpleButton.callback = () => {this.showPage(2)};

        // events (components)
        const eventsSimpleButton = new SimpleButton(events);
        eventsSimpleButton.callback = () => {this.showPage(3)};

        // we_need_you (components)
        const we_need_youButton = new Button(we_need_you);
        we_need_youButton.spriteName = "we_need_you";
        we_need_youButton.callback = () => {this.showPage(6)};

        // right (components)
        const rightButton = new Button(right);
        rightButton.spriteName = "right";
        rightButton.callback = () => { this.nextPage();};

        // main (components)
        const mainButton = new Button(main);
        mainButton.spriteName = "main";
        mainButton.callback = () => {this.showPage(0)};

        // left (components)
        const leftButton = new Button(left);
        leftButton.spriteName = "left";
        leftButton.callback = () => { this.prevPage();};

        // close (components)
        const closeButton = new Button(close);
        closeButton.spriteName = "close";
        closeButton.callback = () => {this.closeNews()};

        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    closeNews(){
        this.interface.destroyWidget(this)
        this.network.send("close_sprite", {})
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
