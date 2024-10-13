import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

export const preload = {
    key: 'eighteenth-edition-pack.json',
    url: 'assets/media/interface/game/newspaper/eighteenth edition/eighteenth-edition-pack.json', 
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
        const rectangle_1 = scene.add.rectangle(772, 480, 128, 128);
        rectangle_1.scaleX = 11.961414097039036;
        rectangle_1.scaleY = 7.609571892641703;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 0;
        rectangle_1.fillAlpha = 0.2;
        this.add(rectangle_1);

        // _page7
        const _page7 = scene.add.container(680, 407);
        _page7.visible = false;
        this.add(_page7);

        // page5
        const page5 = scene.add.image(107, 107, "newspaper-buttons-v2", "pageAA");
        _page7.add(page5);

        // left_122
        const left_122 = scene.add.image(-570, 369, "newspaper-buttons-v2", "left");
        left_122.angle = -1;
        _page7.add(left_122);

        // close_232
        const close_232 = scene.add.image(719, -250, "newspaper-buttons-v2", "close");
        close_232.angle = -1;
        _page7.add(close_232);

        // main_122
        const main_122 = scene.add.image(-569, -207, "newspaper-buttons-v2", "main");
        main_122.angle = -1;
        _page7.add(main_122);

        // submit_question
        const submit_question = scene.add.image(422, 188, "newspaper-buttons-v2", "submit");
        submit_question.angle = -1;
        submit_question.alpha = 0.5;
        submit_question.alphaTopLeft = 0.5;
        submit_question.alphaTopRight = 0.5;
        submit_question.alphaBottomLeft = 0.5;
        submit_question.alphaBottomRight = 0.5;
        _page7.add(submit_question);

        // _page6
        const _page6 = scene.add.container(676, 407);
        _page6.visible = false;
        this.add(_page6);

        // adaptedpg6
        const adaptedpg6 = scene.add.image(-296, -142, "eighteenth-edition", "pages0006");
        _page6.add(adaptedpg6);

        // igloocontest_info
        const igloocontest_info = scene.add.image(-256, -44, "eighteenth-edition", "igloocontest-info");
        igloocontest_info.angle = -1;
        _page6.add(igloocontest_info);

        // _page5
        const _page5 = scene.add.container(676, 407);
        _page5.visible = false;
        this.add(_page5);

        // adaptedpg5
        const adaptedpg5 = scene.add.image(-296, -142, "eighteenth-edition", "pages0005");
        _page5.add(adaptedpg5);

        // _page4
        const _page4 = scene.add.container(676, 407);
        _page4.visible = false;
        this.add(_page4);

        // adaptedpg2
        const adaptedpg2 = scene.add.image(-296, -142, "eighteenth-edition", "pages0004");
        _page4.add(adaptedpg2);

        // aasecret
        const aasecret = scene.add.image(-533, -173, "newspaper-buttons-v2", "aasecret");
        aasecret.angle = -1;
        _page4.add(aasecret);

        // _page3_and_a_half
        const _page3_and_a_half = scene.add.container(676, 406);
        _page3_and_a_half.visible = false;
        this.add(_page3_and_a_half);

        // page3_and_half
        const page3_and_half = scene.add.image(98, 57, "eighteenth-edition", "pages0008");
        _page3_and_a_half.add(page3_and_half);

        // _page3
        const _page3 = scene.add.container(676, 406);
        _page3.visible = false;
        this.add(_page3);

        // page3
        const page3 = scene.add.image(-296, -142, "eighteenth-edition", "pages0003");
        _page3.add(page3);

        // _page2
        const _page2 = scene.add.container(676, 406);
        _page2.visible = false;
        this.add(_page2);

        // page2
        const page2 = scene.add.image(-296, -142, "eighteenth-edition", "pages0002");
        _page2.add(page2);

        // _page1
        const _page1 = scene.add.container(677, 437);
        this.add(_page1);

        // adaptedpg1
        const adaptedpg1 = scene.add.image(-296, -179, "eighteenth-edition", "pages0001");
        _page1.add(adaptedpg1);

        // close_1
        const close_1 = scene.add.image(607, -272, "newspaper-buttons-v2", "close");
        close_1.angle = -1;
        _page1.add(close_1);

        // right_1
        const right_1 = scene.add.image(616, 307, "newspaper-buttons-v2", "right");
        right_1.angle = -1;
        _page1.add(right_1);

        // construction
        const construction = scene.add.rectangle(-270, -74, 131, 139);
        construction.scaleX = 2.936192991169804;
        construction.scaleY = 1.4472187285201359;
        construction.angle = -1;
        _page1.add(construction);

        // questions
        const questions = scene.add.rectangle(116, -77, 128, 128);
        questions.scaleX = 2.8818108379630196;
        questions.scaleY = 1.4521025367799516;
        questions.angle = -1;
        _page1.add(questions);

        // events
        const events = scene.add.rectangle(483, -84, 128, 128);
        events.scaleX = 2.608448576426685;
        events.scaleY = 1.4521025367799516;
        events.angle = -1;
        _page1.add(events);

        // insideBtn1
        const insideBtn1 = scene.add.rectangle(-360, 160, 128, 128);
        insideBtn1.scaleX = 1.592229102135418;
        insideBtn1.scaleY = 0.2836889206041875;
        insideBtn1.angle = -1;
        insideBtn1.fillColor = 0;
        insideBtn1.fillAlpha = 0.2;
        _page1.add(insideBtn1);

        // insideBtn2
        const insideBtn2 = scene.add.rectangle(-360, 196, 128, 128);
        insideBtn2.scaleX = 1.592229102135418;
        insideBtn2.scaleY = 0.2836889206041875;
        insideBtn2.angle = -1;
        insideBtn2.fillColor = 0;
        insideBtn2.fillAlpha = 0.2;
        _page1.add(insideBtn2);

        // insideBtn3
        const insideBtn3 = scene.add.rectangle(-359, 233, 128, 128);
        insideBtn3.scaleX = 1.592229102135418;
        insideBtn3.scaleY = 0.2836889206041875;
        insideBtn3.angle = -1;
        insideBtn3.fillColor = 0;
        insideBtn3.fillAlpha = 0.2;
        _page1.add(insideBtn3);

        // insideBtn4
        const insideBtn4 = scene.add.rectangle(-359, 270, 128, 128);
        insideBtn4.scaleX = 1.592229102135418;
        insideBtn4.scaleY = 0.2836889206041875;
        insideBtn4.angle = -1;
        insideBtn4.fillColor = 0;
        insideBtn4.fillAlpha = 0.2;
        _page1.add(insideBtn4);

        // insideBtn5
        const insideBtn5 = scene.add.rectangle(-359, 305, 128, 128);
        insideBtn5.scaleX = 1.592229102135418;
        insideBtn5.scaleY = 0.2836889206041875;
        insideBtn5.angle = -1;
        insideBtn5.fillColor = 0;
        insideBtn5.fillAlpha = 0.2;
        _page1.add(insideBtn5);

        // we_need_you
        const we_need_you = scene.add.image(-398, -285, "newspaper-buttons-v2", "we_need_you");
        we_need_you.angle = -1;
        _page1.add(we_need_you);

        // buttons
        const buttons = scene.add.container(-16, -41);
        buttons.visible = false;
        this.add(buttons);

        // right
        const right = scene.add.image(1424, 794, "newspaper-buttons-v2", "right");
        right.angle = -1;
        buttons.add(right);

        // main
        const main = scene.add.image(127, 241, "newspaper-buttons-v2", "main");
        main.angle = -1;
        buttons.add(main);

        // left
        const left = scene.add.image(126, 817, "newspaper-buttons-v2", "left");
        left.angle = -1;
        buttons.add(left);

        // close
        const close = scene.add.image(1415, 198, "newspaper-buttons-v2", "close");
        close.angle = -1;
        buttons.add(close);

        // coins
        const coins = scene.add.text(538, 196, "", {});
        coins.visible = false;
        buttons.add(coins);

        // lists
        const pages = [_page1, _page2, _page3, _page3_and_a_half, _page4, _page5, _page6, _page7];

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // left_122 (components)
        const left_122Button = new Button(left_122);
        left_122Button.spriteName = "left";
        left_122Button.callback = () => { this.prevPage();};
        left_122Button.activeFrame = true;

        // close_232 (components)
        const close_232Button = new Button(close_232);
        close_232Button.spriteName = "close";
        close_232Button.callback = () => {this.closeNews()};
        close_232Button.activeFrame = true;

        // main_122 (components)
        const main_122Button = new Button(main_122);
        main_122Button.spriteName = "main";
        main_122Button.callback = () => {this.showPage(0)};
        main_122Button.activeFrame = true;

        // submit_question (components)
        const submit_questionButton = new Button(submit_question);
        submit_questionButton.callback = () => {this.interface.loadWidget("Newsform")};
        submit_questionButton.activeFrame = true;

        // igloocontest_info (components)
        const igloocontest_infoButton = new Button(igloocontest_info);
        igloocontest_infoButton.spriteName = "igloocontest-info";
        igloocontest_infoButton.pixelPerfect = true;

        // aasecret (components)
        new Button(aasecret);

        // close_1 (components)
        const close_1Button = new Button(close_1);
        close_1Button.spriteName = "close";
        close_1Button.callback = () => {this.closeNews()};
        close_1Button.activeFrame = true;

        // right_1 (components)
        const right_1Button = new Button(right_1);
        right_1Button.spriteName = "right";
        right_1Button.callback = () => { this.nextPage();};
        right_1Button.activeFrame = true;

        // construction (components)
        const constructionSimpleButton = new SimpleButton(construction);
        constructionSimpleButton.callback = () => {this.showPage(1)};

        // questions (components)
        const questionsSimpleButton = new SimpleButton(questions);
        questionsSimpleButton.callback = () => {this.showPage(3)};

        // events (components)
        const eventsSimpleButton = new SimpleButton(events);
        eventsSimpleButton.callback = () => {this.showPage(4)};

        // insideBtn1 (components)
        const insideBtn1SimpleButton = new SimpleButton(insideBtn1);
        insideBtn1SimpleButton.hoverCallback = () => {insideBtn1.isFilled = true};
        insideBtn1SimpleButton.hoverOutCallback = () => {insideBtn1.isFilled = false};
        insideBtn1SimpleButton.callback = () => {this.showPage(1)};

        // insideBtn2 (components)
        const insideBtn2SimpleButton = new SimpleButton(insideBtn2);
        insideBtn2SimpleButton.hoverCallback = () => {insideBtn2.isFilled = true};
        insideBtn2SimpleButton.hoverOutCallback = () => {insideBtn2.isFilled = false};
        insideBtn2SimpleButton.callback = () => {this.showPage(2)};

        // insideBtn3 (components)
        const insideBtn3SimpleButton = new SimpleButton(insideBtn3);
        insideBtn3SimpleButton.hoverCallback = () => {insideBtn3.isFilled = true};
        insideBtn3SimpleButton.hoverOutCallback = () => {insideBtn3.isFilled = false};
        insideBtn3SimpleButton.callback = () => {this.showPage(3)};

        // insideBtn4 (components)
        const insideBtn4SimpleButton = new SimpleButton(insideBtn4);
        insideBtn4SimpleButton.hoverCallback = () => {insideBtn4.isFilled = true};
        insideBtn4SimpleButton.hoverOutCallback = () => {insideBtn4.isFilled = false};
        insideBtn4SimpleButton.callback = () => {this.showPage(4)};

        // insideBtn5 (components)
        const insideBtn5SimpleButton = new SimpleButton(insideBtn5);
        insideBtn5SimpleButton.hoverCallback = () => {insideBtn5.isFilled = true};
        insideBtn5SimpleButton.hoverOutCallback = () => {insideBtn5.isFilled = false};
        insideBtn5SimpleButton.callback = () => {this.showPage(6)};

        // we_need_you (components)
        const we_need_youButton = new Button(we_need_you);
        we_need_youButton.spriteName = "we_need_you";
        we_need_youButton.callback = () => {this.showPage(7)};

        // right (components)
        const rightButton = new Button(right);
        rightButton.spriteName = "right";
        rightButton.callback = () => { this.nextPage();};
        rightButton.activeFrame = true;

        // main (components)
        const mainButton = new Button(main);
        mainButton.spriteName = "main";
        mainButton.callback = () => {this.showPage(0)};
        mainButton.activeFrame = true;
        mainButton.pixelPerfect = true;

        // left (components)
        const leftButton = new Button(left);
        leftButton.spriteName = "left";
        leftButton.callback = () => { this.prevPage();};
        leftButton.activeFrame = true;

        // close (components)
        const closeButton = new Button(close);
        closeButton.spriteName = "close";
        closeButton.callback = () => {this.closeNews()};
        closeButton.activeFrame = true;

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
