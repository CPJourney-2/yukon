import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

export const preload = {
    key: 'eleventh-edition-pack.json',
    url: 'assets/media/interface/game/newspaper/eleventh edition/eleventh-edition-pack.json',
    loadString: ['loading', 'Newspaper']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class Newspaper extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // rectangle_1
        const rectangle_1 = scene.add.rectangle(775, 480, 128, 128);
        rectangle_1.scaleX = 11.961414097039036;
        rectangle_1.scaleY = 7.609571892641703;
        this.add(rectangle_1);

        // _page7
        const _page7 = scene.add.container(711, 438);
        _page7.visible = false;
        this.add(_page7);

        // adaptedpg2
        const adaptedpg2 = scene.add.image(-2, 101, "eleventh-edition", "pages0026");
        _page7.add(adaptedpg2);

        // left_122
        const left_122 = scene.add.image(-597, 374, "eleventh-edition", "prevbtn");
        left_122.angle = -1;
        _page7.add(left_122);

        // close_232
        const close_232 = scene.add.image(691, -245, "eleventh-edition", "closebtn");
        close_232.angle = -1;
        _page7.add(close_232);

        // main_12
        const main_12 = scene.add.image(-598, -202, "eleventh-edition", "mainbtn");
        main_12.angle = -1;
        _page7.add(main_12);

        // _page6
        const _page6 = scene.add.container(711, 438);
        _page6.visible = false;
        this.add(_page6);

        // adaptedpg
        const adaptedpg = scene.add.image(-2, 101, "eleventh-edition", "pages0036");
        _page6.add(adaptedpg);

        // submit_question
        const submit_question = scene.add.image(395, 191, "eleventh-edition", "submit");
        submit_question.angle = -1;
        _page6.add(submit_question);

        // _page5
        const _page5 = scene.add.container(711, 438);
        _page5.visible = false;
        this.add(_page5);

        // page5
        const page5 = scene.add.image(-2, 101, "eleventh-edition", "pages0054");
        _page5.add(page5);

        // _page4
        const _page4 = scene.add.container(711, 438);
        _page4.visible = false;
        this.add(_page4);

        // adaptedpg22
        const adaptedpg22 = scene.add.image(-2, 101, "eleventh-edition", "pages0046");
        _page4.add(adaptedpg22);

        // _page3
        const _page3 = scene.add.container(695, 408);
        _page3.visible = false;
        this.add(_page3);

        // page3
        const page3 = scene.add.image(14, 132, "eleventh-edition", "pages0019");
        _page3.add(page3);

        // _page2
        const _page2 = scene.add.container(695, 407);
        _page2.visible = false;
        this.add(_page2);

        // page2
        const page2 = scene.add.image(14, 133, "eleventh-edition", "pages0011");
        _page2.add(page2);

        // _page1
        const _page1 = scene.add.container(679, 438);
        _page1.visible = false;
        this.add(_page1);

        // adaptedpg1
        const adaptedpg1 = scene.add.image(23, 103, "eleventh-edition", "pages0001");
        _page1.add(adaptedpg1);

        // close_1
        const close_1 = scene.add.image(598, -230, "eleventh-edition", "closebtn");
        close_1.angle = -1;
        _page1.add(close_1);

        // right_1
        const right_1 = scene.add.image(606, 349, "eleventh-edition", "nextbtn");
        right_1.angle = -1;
        _page1.add(right_1);

        // construction
        const construction = scene.add.rectangle(-284, -33, 128, 128);
        construction.scaleX = 2.936192991169804;
        construction.scaleY = 1.4472187285201359;
        _page1.add(construction);

        // questions
        const questions = scene.add.rectangle(108, -31, 128, 128);
        questions.scaleX = 2.608448576426685;
        questions.scaleY = 1.4521025367799516;
        questions.angle = -1;
        _page1.add(questions);

        // events
        const events = scene.add.rectangle(471, -47, 128, 128);
        events.scaleX = 2.608448576426685;
        events.scaleY = 1.4521025367799516;
        events.angle = -1;
        _page1.add(events);

        // we_need_you
        const we_need_you = scene.add.image(-406, -243, "eleventh-edition", "weneedyou");
        we_need_you.angle = -1;
        _page1.add(we_need_you);

        // buttons
        const buttons = scene.add.container(4, -41);
        buttons.visible = false;
        this.add(buttons);

        // right
        const right = scene.add.image(1408, 830, "eleventh-edition", "nextbtn");
        right.angle = -1;
        buttons.add(right);

        // main
        const main = scene.add.image(110, 276, "eleventh-edition", "mainbtn");
        main.angle = -1;
        buttons.add(main);

        // left
        const left = scene.add.image(110, 853, "eleventh-edition", "prevbtn");
        left.angle = -1;
        buttons.add(left);

        // close
        const close = scene.add.image(1399, 233, "eleventh-edition", "closebtn");
        close.angle = -1;
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
        left_122Button.callback = () => { this.prevPage();};

        // close_232 (components)
        const close_232Button = new Button(close_232);
        close_232Button.callback = () => {this.closeNews()};

        // main_12 (components)
        const main_12Button = new Button(main_12);
        main_12Button.callback = () => {this.showPage(0)};

        // submit_question (components)
        const submit_questionButton = new Button(submit_question);
        submit_questionButton.callback = () => {this.interface.loadWidget("Newsform")};

        // close_1 (components)
        const close_1Button = new Button(close_1);
        close_1Button.callback = () => {this.closeNews()};

        // right_1 (components)
        const right_1Button = new Button(right_1);
        right_1Button.spriteName = "nextbtn";
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
        we_need_youButton.callback = () => {this.showPage(4)};

        // right (components)
        const rightButton = new Button(right);
        rightButton.callback = () => { this.nextPage();};

        // main (components)
        const mainButton = new Button(main);
        mainButton.callback = () => {this.showPage(0)};

        // left (components)
        const leftButton = new Button(left);
        leftButton.callback = () => { this.prevPage();};

        // close (components)
        const closeButton = new Button(close);
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
