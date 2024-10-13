import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'
import Newsform from '@scenes/interface/game/newsform/Newsform'

export const preload = {
    key: 'issue29-pack',
    url: 'assets/media/interface/game/newspaper/issue29/issue29-pack.json', 
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
        const rectangle_1 = scene.add.rectangle(773, 480, 128, 128);
        rectangle_1.scaleX = 11.961414097039036;
        rectangle_1.scaleY = 7.609571892641703;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 0;
        rectangle_1.fillAlpha = 0.2;
        this.add(rectangle_1);

        // _page10
        const _page10 = scene.add.container(676, 406);
        _page10.visible = false;
        this.add(_page10);

        // page5
        const page5 = scene.add.image(30, 99, "newspaper-common", "submit-content-pg");
        _page10.add(page5);

        // submit_btn_1
        const submit_btn_1 = scene.add.image(420, 176, "newspaper-common", "submit-btn");
        submit_btn_1.angle = -1;
        _page10.add(submit_btn_1);

        // submit_btn
        const submit_btn = scene.add.image(416, 64, "newspaper-common", "submit-btn");
        submit_btn.angle = -1;
        _page10.add(submit_btn);

        // auntarctic
        const auntarctic = scene.add.sprite(-2, 20, "newspaper-common", "aunthover1");
        auntarctic.scaleX = 1.05;
        auntarctic.scaleY = 1.05;
        auntarctic.angle = -1;
        _page10.add(auntarctic);

        // sedquestion
        const sedquestion = scene.add.text(263, 39, "", {});
        sedquestion.angle = -1;
        sedquestion.text = "Send a Question";
        sedquestion.setStyle({ "color": "#552c00ff", "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        _page10.add(sedquestion);

        // sendart
        const sendart = scene.add.text(287, 155, "", {});
        sendart.angle = -1;
        sendart.text = "Send Artwork";
        sendart.setStyle({ "color": "#552c00ff", "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        _page10.add(sendart);

        // aaQuestionDisclaimer
        const aaQuestionDisclaimer = scene.add.container(-124, -216);
        aaQuestionDisclaimer.visible = false;
        _page10.add(aaQuestionDisclaimer);

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
        _page10.add(aaArtDisclaimer);

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
        const left_122 = scene.add.image(-566, 370, "newspaper-common", "left");
        left_122.angle = -1;
        _page10.add(left_122);

        // close_232
        const close_232 = scene.add.image(727, -247, "newspaper-common", "close");
        close_232.angle = -1;
        _page10.add(close_232);

        // main_122
        const main_122 = scene.add.image(-565, -206, "newspaper-common", "main");
        main_122.angle = -1;
        _page10.add(main_122);

        // right_2
        const right_2 = scene.add.image(733, 347, "newspaper-common", "right");
        right_2.angle = -1;
        _page10.add(right_2);

        // _page9
        const _page9 = scene.add.container(676, 406);
        _page9.angle = -1;
        _page9.visible = false;
        this.add(_page9);

        // adaptedpg6
        const adaptedpg6 = scene.add.image(97, 59, "issue29", "issue29-pg8");
        _page9.add(adaptedpg6);

        // _page8
        const _page8 = scene.add.container(676, 406);
        _page8.angle = -1;
        _page8.visible = false;
        this.add(_page8);

        // adaptedpg5
        const adaptedpg5 = scene.add.image(97, 59, "issue29", "issue29-pg7");
        _page8.add(adaptedpg5);

        // submit_btn_2
        const submit_btn_2 = scene.add.image(-117, 381, "newspaper-common", "submit-btn");
        submit_btn_2.scaleX = 0.55;
        submit_btn_2.scaleY = 0.55;
        _page8.add(submit_btn_2);

        // askaapagetext
        const askaapagetext = scene.add.text(-206, 368, "", {});
        askaapagetext.text = "Send a Question";
        askaapagetext.setStyle({ "color": "#552c00ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
        _page8.add(askaapagetext);

        // _page7
        const _page7 = scene.add.container(676, 406);
        _page7.angle = -1;
        _page7.visible = false;
        this.add(_page7);

        // adaptedpg2
        const adaptedpg2 = scene.add.image(97, 59, "issue29", "issue29-pg6");
        _page7.add(adaptedpg2);

        // aasecret
        const aasecret = scene.add.image(-529, -181, "newspaper-common", "aasecret");
        aasecret.visible = false;
        _page7.add(aasecret);

        // _page5
        const _page5 = scene.add.container(676, 406);
        _page5.angle = -1;
        _page5.visible = false;
        this.add(_page5);

        // page3_and_halff
        const page3_and_halff = scene.add.image(97, 59, "issue29", "issue29-pg5");
        _page5.add(page3_and_halff);

        // _page4
        const _page4 = scene.add.container(676, 406);
        _page4.angle = -1;
        _page4.visible = false;
        this.add(_page4);

        // page3_and_half
        const page3_and_half = scene.add.image(97, 59, "issue29", "issue29-pg4");
        _page4.add(page3_and_half);

        // _page3
        const _page3 = scene.add.container(676, 406);
        _page3.angle = -1;
        _page3.visible = false;
        this.add(_page3);

        // page3
        const page3 = scene.add.image(97, 59, "issue29", "issue29-pg3");
        _page3.add(page3);

        // _page2
        const _page2 = scene.add.container(676, 406);
        _page2.angle = -1;
        _page2.visible = false;
        this.add(_page2);

        // issue29_pg2
        const issue29_pg2 = scene.add.image(97, 59, "issue29", "issue29-pg2");
        _page2.add(issue29_pg2);

        // _page1
        const _page1 = scene.add.container(677, 437);
        _page1.angle = -1;
        this.add(_page1);

        // issue29_pg1
        const issue29_pg1 = scene.add.image(97, 30, "issue29", "issue29-pg1");
        _page1.add(issue29_pg1);

        // insideBtn_4
        const insideBtn_4 = scene.add.rectangle(194, 216, 128, 128);
        insideBtn_4.scaleX = 6.6228709444206215;
        insideBtn_4.scaleY = 2.540121267102537;
        insideBtn_4.fillColor = 0;
        insideBtn_4.fillAlpha = 0.2;
        _page1.add(insideBtn_4);

        // right_1
        const right_1 = scene.add.image(614, 316, "newspaper-common", "right");
        _page1.add(right_1);

        // close_1
        const close_1 = scene.add.image(612, -265, "newspaper-common", "close");
        _page1.add(close_1);

        // construction
        const construction = scene.add.rectangle(-279, -81, 131, 139);
        construction.scaleX = 2.8825179601835456;
        construction.scaleY = 1.4472187285201359;
        _page1.add(construction);

        // questions
        const questions = scene.add.rectangle(109, -78, 128, 128);
        questions.scaleX = 2.862190183194497;
        questions.scaleY = 1.4521025367799516;
        _page1.add(questions);

        // events
        const events = scene.add.rectangle(471, -84, 128, 128);
        events.scaleX = 2.6249074630627027;
        events.scaleY = 1.4521025367799516;
        _page1.add(events);

        // insideBtn1
        const insideBtn1 = scene.add.rectangle(-360, 153, 128, 128);
        insideBtn1.scaleX = 1.592229102135418;
        insideBtn1.scaleY = 0.2836889206041875;
        insideBtn1.fillColor = 0;
        insideBtn1.fillAlpha = 0.2;
        _page1.add(insideBtn1);

        // insideBtn2
        const insideBtn2 = scene.add.rectangle(-360, 188, 128, 128);
        insideBtn2.scaleX = 1.592229102135418;
        insideBtn2.scaleY = 0.2836889206041875;
        insideBtn2.fillColor = 0;
        insideBtn2.fillAlpha = 0.2;
        _page1.add(insideBtn2);

        // insideBtn3
        const insideBtn3 = scene.add.rectangle(-360, 224, 128, 128);
        insideBtn3.scaleX = 1.592229102135418;
        insideBtn3.scaleY = 0.2836889206041875;
        insideBtn3.fillColor = 0;
        insideBtn3.fillAlpha = 0.2;
        _page1.add(insideBtn3);

        // insideBtn4
        const insideBtn4 = scene.add.rectangle(-359, 261, 128, 128);
        insideBtn4.scaleX = 1.592229102135418;
        insideBtn4.scaleY = 0.2836889206041875;
        insideBtn4.fillColor = 0;
        insideBtn4.fillAlpha = 0.2;
        _page1.add(insideBtn4);

        // insideBtn5
        const insideBtn5 = scene.add.rectangle(-359, 296, 128, 128);
        insideBtn5.scaleX = 1.592229102135418;
        insideBtn5.scaleY = 0.2836889206041875;
        insideBtn5.fillColor = 0;
        insideBtn5.fillAlpha = 0.2;
        _page1.add(insideBtn5);

        // insideBtn6
        const insideBtn6 = scene.add.rectangle(-359, 330, 128, 128);
        insideBtn6.scaleX = 1.592229102135418;
        insideBtn6.scaleY = 0.2836889206041875;
        insideBtn6.fillColor = 0;
        insideBtn6.fillAlpha = 0.2;
        _page1.add(insideBtn6);

        // we_need_you
        const we_need_you = scene.add.image(-396, -291, "newspaper-common", "we_need_you");
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
        const pages = [_page1, _page2, _page3, _page4, _page7, _page8, _page9, _page10, _page5];

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

        // right_2 (components)
        const right_2Button = new Button(right_2);
        right_2Button.spriteName = "right";
        right_2Button.callback = () => this.showPage(0);
        right_2Button.activeFrame = true;

        // submit_btn_2 (components)
        const submit_btn_2Button = new Button(submit_btn_2);
        submit_btn_2Button.spriteName = "submit-btn";
        submit_btn_2Button.hoverCallback;
        submit_btn_2Button.hoverOutCallback;
        submit_btn_2Button.callback = () => this.onSubmit('question');

        // aasecret (components)
        new Button(aasecret);

        // insideBtn_4 (components)
        const insideBtn_4SimpleButton = new SimpleButton(insideBtn_4);
        insideBtn_4SimpleButton.hoverCallback;
        insideBtn_4SimpleButton.hoverOutCallback;
        insideBtn_4SimpleButton.callback = () => {this.showPage(1)};

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
        constructionSimpleButton.callback = () => {this.showPage(3)};

        // questions (components)
        const questionsSimpleButton = new SimpleButton(questions);
        questionsSimpleButton.callback = () => {this.showPage(2)};

        // events (components)
        const eventsSimpleButton = new SimpleButton(events);
        eventsSimpleButton.callback = () => {this.showPage(5)};

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
        insideBtn5SimpleButton.callback = () => {this.showPage(5)};

        // insideBtn6 (components)
        const insideBtn6SimpleButton = new SimpleButton(insideBtn6);
        insideBtn6SimpleButton.hoverCallback = () => {insideBtn6.isFilled = true};
        insideBtn6SimpleButton.hoverOutCallback = () => {insideBtn6.isFilled = false};
        insideBtn6SimpleButton.callback = () => {this.showPage(7)};

        // we_need_you (components)
        const we_need_youButton = new Button(we_need_you);
        we_need_youButton.spriteName = "we_need_you";
        we_need_youButton.callback = () => {this.showPage(8)};

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
        this.pages = [_page1, _page2, _page3, _page4, _page5, _page7, _page8, _page9, _page10];
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    closeNews(){
        this.close()
        this.interface.destroyWidget(this)
        this.network.send("close_sprite", {})
    }

    onSubmit(m) {
        if(m == 'painting' && localStorage.getItem('PAINTING_SUBMITTED') == 'true') return this.interface.prompt.showError('You\'ve already submitted a painting for this contest.')

        if((m == 'art' || m == 'painting') && this.world.client.daysOld < 10) return this.interface.prompt.showError('Sorry, your penguin must be over 10 days old to submit art.')
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
