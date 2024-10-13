import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'
import Newsform from '@scenes/interface/game/newsform/Newsform'

export const preload = {
    key: 'issue20-pack.json',
    url: 'assets/media/interface/game/newspaper/issue20/issue20-pack.json', 
    loadString: ['loading', 'Newspaper']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class Newspaper extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Sprite} */
        this.auntarctic;
        /** @type {Phaser.GameObjects.Container} */
        this.aaQuestionDisclaimer;
        /** @type {Phaser.GameObjects.Container} */
        this.aaArtDisclaimer;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Newsform} */
        this.newsform;
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
        const page5 = scene.add.image(27, 98, "newspaper-common", "submit-content-pg");
        _page7.add(page5);

        // submit_btn_1
        const submit_btn_1 = scene.add.image(420, 176, "newspaper-common", "submit-btn");
        submit_btn_1.angle = -1;
        _page7.add(submit_btn_1);

        // submit_btn
        const submit_btn = scene.add.image(416, 64, "newspaper-common", "submit-btn");
        submit_btn.angle = -1;
        _page7.add(submit_btn);

        // auntarctic
        const auntarctic = scene.add.sprite(-5, 19, "newspaper-common", "aunthover1");
        auntarctic.scaleX = 1.05;
        auntarctic.scaleY = 1.05;
        auntarctic.angle = -1;
        _page7.add(auntarctic);

        // sedquestion
        const sedquestion = scene.add.text(263, 39, "", {});
        sedquestion.angle = -1;
        sedquestion.text = "Send a Question";
        sedquestion.setStyle({ "color": "#552c00ff", "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        _page7.add(sedquestion);

        // sendart
        const sendart = scene.add.text(287, 155, "", {});
        sendart.angle = -1;
        sendart.text = "Send Artwork";
        sendart.setStyle({ "color": "#552c00ff", "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        _page7.add(sendart);

        // aaQuestionDisclaimer
        const aaQuestionDisclaimer = scene.add.container(-124, -216);
        aaQuestionDisclaimer.visible = false;
        _page7.add(aaQuestionDisclaimer);

        // aaquestiondisclaimerrrrr_1
        const aaquestiondisclaimerrrrr_1 = scene.add.text(-2, 140, "", {});
        aaquestiondisclaimerrrrr_1.angle = -1;
        aaquestiondisclaimerrrrr_1.text = "This is NOT intended for suggesting in-game parties, features, etc.";
        aaquestiondisclaimerrrrr_1.setStyle({ "align": "center", "color": "#000", "fontFamily": "Burbank Small", "fontSize": "27px", "fontStyle": "bold" });
        aaquestiondisclaimerrrrr_1.setWordWrapWidth(600);
        aaQuestionDisclaimer.add(aaquestiondisclaimerrrrr_1);

        // aaquestiondisclaimerrrrr
        const aaquestiondisclaimerrrrr = scene.add.text(0, 6, "", {});
        aaquestiondisclaimerrrrr.angle = -1;
        aaquestiondisclaimerrrrr.text = "Have a question you'd like me to answer for the Ask Aunt Arctic column? I'd love to hear it!";
        aaquestiondisclaimerrrrr.setStyle({ "align": "center", "color": "#000", "fontFamily": "Burbank Small", "fontSize": "35px" });
        aaquestiondisclaimerrrrr.setWordWrapWidth(600);
        aaQuestionDisclaimer.add(aaquestiondisclaimerrrrr);

        // aaArtDisclaimer
        const aaArtDisclaimer = scene.add.container(-124, -218);
        aaArtDisclaimer.visible = false;
        _page7.add(aaArtDisclaimer);

        // aaquesti
        const aaquesti = scene.add.text(-20, 125, "", {});
        aaquesti.angle = -1;
        aaquesti.text = "You must be at least 10 days old to submit artwork. In addition, your file must be below 1 MB in size.";
        aaquesti.setStyle({ "align": "center", "color": "#000", "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold" });
        aaquesti.setWordWrapWidth(600);
        aaArtDisclaimer.add(aaquesti);

        // aaarttetxtmerrrrr
        const aaarttetxtmerrrrr = scene.add.text(-25, -1, "", {});
        aaarttetxtmerrrrr.angle = -1;
        aaarttetxtmerrrrr.text = "Submit your lovely artwork to be featured in the art section for the Club Penguin Times!";
        aaarttetxtmerrrrr.setStyle({ "align": "center", "color": "#000", "fontFamily": "Burbank Small", "fontSize": "33px" });
        aaarttetxtmerrrrr.setWordWrapWidth(600);
        aaArtDisclaimer.add(aaarttetxtmerrrrr);

        // left_122
        const left_122 = scene.add.image(-570, 369, "newspaper-common", "left");
        left_122.angle = -1;
        _page7.add(left_122);

        // close_232
        const close_232 = scene.add.image(723, -248, "newspaper-common", "close");
        close_232.angle = -1;
        _page7.add(close_232);

        // main_122
        const main_122 = scene.add.image(-569, -207, "newspaper-common", "main");
        main_122.angle = -1;
        _page7.add(main_122);

        // _page6
        const _page6 = scene.add.container(676, 407);
        _page6.visible = false;
        this.add(_page6);

        // adaptedpg6
        const adaptedpg6 = scene.add.image(30, 99, "issue20", "issue20-pg7");
        _page6.add(adaptedpg6);

        // _page5
        const _page5 = scene.add.container(676, 407);
        _page5.visible = false;
        this.add(_page5);

        // adaptedpg5
        const adaptedpg5 = scene.add.image(30, 99, "issue20", "issue20-pg6");
        _page5.add(adaptedpg5);

        // submit_btn_2
        const submit_btn_2 = scene.add.image(-99, 416, "newspaper-common", "submit-btn");
        submit_btn_2.scaleX = 0.55;
        submit_btn_2.scaleY = 0.55;
        submit_btn_2.angle = -1;
        _page5.add(submit_btn_2);

        // askaapagetext
        const askaapagetext = scene.add.text(-188, 403, "", {});
        askaapagetext.angle = -1;
        askaapagetext.text = "Send a Question";
        askaapagetext.setStyle({ "color": "#552c00ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
        _page5.add(askaapagetext);

        // _page4
        const _page4 = scene.add.container(676, 407);
        _page4.visible = false;
        this.add(_page4);

        // adaptedpg2
        const adaptedpg2 = scene.add.image(30, 99, "issue20", "issue20-pg5");
        _page4.add(adaptedpg2);

        // aasecret
        const aasecret = scene.add.image(-533, -173, "newspaper-common", "aasecret");
        aasecret.angle = -1;
        _page4.add(aasecret);

        // _page3_and_a_half
        const _page3_and_a_half = scene.add.container(676, 406);
        _page3_and_a_half.visible = false;
        this.add(_page3_and_a_half);

        // page3_and_half
        const page3_and_half = scene.add.image(30, 99, "issue20", "issue20-pg4");
        _page3_and_a_half.add(page3_and_half);

        // _page3
        const _page3 = scene.add.container(676, 406);
        _page3.visible = false;
        this.add(_page3);

        // page3
        const page3 = scene.add.image(30, 99, "issue20", "issue20-pg3");
        _page3.add(page3);

        // submit_btn_3
        const submit_btn_3 = scene.add.image(-282, 129, "newspaper-common", "submit-btn");
        submit_btn_3.angle = -1;
        submit_btn_3.tintTopLeft = 16449416;
        submit_btn_3.tintTopRight = 16449416;
        submit_btn_3.tintBottomLeft = 16449416;
        submit_btn_3.tintBottomRight = 16449416;
        _page3.add(submit_btn_3);

        // sedquestion_12
        const sedquestion_12 = scene.add.text(-412, 105, "", {});
        sedquestion_12.angle = -1;
        sedquestion_12.text = "Send Artwork";
        sedquestion_12.setStyle({ "color": "#552c00ff", "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        _page3.add(sedquestion_12);

        // _page2
        const _page2 = scene.add.container(676, 406);
        _page2.visible = false;
        this.add(_page2);

        // page2
        const page2 = scene.add.image(30, 99, "issue20", "issue20-pg2");
        _page2.add(page2);

        // _page1
        const _page1 = scene.add.container(677, 437);
        this.add(_page1);

        // adaptedpg1
        const adaptedpg1 = scene.add.image(30, 61, "issue20", "issue20-pg1");
        _page1.add(adaptedpg1);

        // right_1
        const right_1 = scene.add.image(616, 307, "newspaper-common", "right");
        right_1.angle = -1;
        _page1.add(right_1);

        // close_1
        const close_1 = scene.add.image(607, -272, "newspaper-common", "close");
        close_1.angle = -1;
        _page1.add(close_1);

        // construction
        const construction = scene.add.rectangle(-288, -71, 131, 139);
        construction.scaleX = 2.8825179601835456;
        construction.scaleY = 1.4472187285201359;
        construction.angle = -1;
        _page1.add(construction);

        // questions
        const questions = scene.add.rectangle(107, -79, 128, 128);
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
        const we_need_you = scene.add.image(-398, -285, "newspaper-common", "we_need_you");
        we_need_you.angle = -1;
        _page1.add(we_need_you);

        // buttons
        const buttons = scene.add.container(-16, -41);
        buttons.visible = false;
        this.add(buttons);

        // right
        const right = scene.add.image(1424, 794, "newspaper-common", "right");
        right.angle = -1;
        buttons.add(right);

        // main
        const main = scene.add.image(127, 241, "newspaper-common", "main");
        main.angle = -1;
        buttons.add(main);

        // left
        const left = scene.add.image(126, 817, "newspaper-common", "left");
        left.angle = -1;
        buttons.add(left);

        // close
        const close = scene.add.image(1419, 200, "newspaper-common", "close");
        close.angle = -1;
        buttons.add(close);

        // coins
        const coins = scene.add.text(17, 34, "", {});
        coins.visible = false;
        buttons.add(coins);

        // newsform
        const newsform = new Newsform(scene, 760, 480);
        newsform.visible = false;
        this.add(newsform);

        // lists
        const pages = [_page1, _page2, _page3, _page3_and_a_half, _page4, _page5, _page6, _page7];

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // submit_btn_1 (components)
        const submit_btn_1Button = new Button(submit_btn_1);
        submit_btn_1Button.spriteName = "submit-btn";
        submit_btn_1Button.hoverCallback = () => this.onSubmitHover('art');
        submit_btn_1Button.hoverOutCallback = () => this.onSubmitHoverOut();
        submit_btn_1Button.callback = () => this.onSubmit('art');

        // submit_btn (components)
        const submit_btnButton = new Button(submit_btn);
        submit_btnButton.spriteName = "submit-btn";
        submit_btnButton.hoverCallback = () => this.onSubmitHover('question');
        submit_btnButton.hoverOutCallback = () => this.onSubmitHoverOut();
        submit_btnButton.callback = () => this.onSubmit('question');

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

        // submit_btn_2 (components)
        const submit_btn_2Button = new Button(submit_btn_2);
        submit_btn_2Button.spriteName = "submit-btn";
        submit_btn_2Button.hoverCallback;
        submit_btn_2Button.hoverOutCallback;
        submit_btn_2Button.callback = () => this.onSubmit('question');

        // aasecret (components)
        new Button(aasecret);

        // submit_btn_3 (components)
        const submit_btn_3Button = new Button(submit_btn_3);
        submit_btn_3Button.spriteName = "submit-btn";
        submit_btn_3Button.hoverCallback;
        submit_btn_3Button.hoverOutCallback;
        submit_btn_3Button.callback = () => this.onSubmit('art');

        // right_1 (components)
        const right_1Button = new Button(right_1);
        right_1Button.spriteName = "right";
        right_1Button.callback = () => { this.nextPage();};

        // close_1 (components)
        const close_1Button = new Button(close_1);
        close_1Button.spriteName = "close";
        close_1Button.callback = () => {this.closeNews()};

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

        this.auntarctic = auntarctic;
        this.aaQuestionDisclaimer = aaQuestionDisclaimer;
        this.aaArtDisclaimer = aaArtDisclaimer;
        this.coins = coins;
        this.buttons = buttons;
        this.newsform = newsform;
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

    onSubmit(m) {
        if(m == 'art' && this.world.client.daysOld < 10) return this.interface.prompt.showError('Sorry, your penguin must be over 10 days old to submit art.')
        this.newsform.show(m)
    }

    onSubmitHover(m) {
        this.auntarctic.setFrame('aunthover2')
        switch(m) {
            case 'question':
                this.aaQuestionDisclaimer.visible = true
                this.aaArtDisclaimer.visible = false
                break
            case 'art':
                this.aaArtDisclaimer.visible = true
                this.aaQuestionDisclaimer.visible = false
                break
            default: break
        }
    }

    onSubmitHoverOut() {
        this.auntarctic.setFrame('aunthover1')
        this.aaQuestionDisclaimer.visible = false
        this.aaArtDisclaimer.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
