import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'
import Newsform from '@scenes/interface/game/newsform/Newsform'
import BaseContainer from '@scenes/base/BaseContainer'

export const preload = {
    key: 'mininewspaper-pack.json',
    url: 'assets/media/interface/game/newspaper/mini/mininewspaper-pack.json', 
    loadString: ['loading', 'Newspaper']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class Newspaper extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

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

        // _page1
        const _page1 = scene.add.container(677, 437);
        this.add(_page1);

        // adaptedpg1
        const adaptedpg1 = scene.add.image(31, 10, "mininewspaper", "mininewspaper0001");
        _page1.add(adaptedpg1);

        // right_1
        const right_1 = scene.add.image(616, 307, "newspaper-common", "right");
        right_1.angle = -1;
        right_1.visible = false;
        _page1.add(right_1);

        // close_1
        const close_1 = scene.add.image(607, -272, "newspaper-common", "close");
        close_1.angle = -1;
        _page1.add(close_1);

        // construction
        const construction = scene.add.rectangle(-278, -71, 131, 139);
        construction.scaleX = 2.8825179601835456;
        construction.scaleY = 1.4472187285201359;
        construction.angle = -1;
        construction.visible = false;
        _page1.add(construction);

        // questions
        const questions = scene.add.rectangle(120, -81, 128, 128);
        questions.scaleX = 2.9538419431651346;
        questions.scaleY = 1.4521025367799516;
        questions.angle = -1;
        questions.visible = false;
        _page1.add(questions);

        // events
        const events = scene.add.rectangle(488, -84, 128, 128);
        events.scaleX = 2.520536122029022;
        events.scaleY = 1.4521025367799516;
        events.angle = -1;
        events.visible = false;
        _page1.add(events);

        // insideBtn1
        const insideBtn1 = scene.add.rectangle(-360, 160, 128, 128);
        insideBtn1.scaleX = 1.592229102135418;
        insideBtn1.scaleY = 0.2836889206041875;
        insideBtn1.angle = -1;
        insideBtn1.visible = false;
        insideBtn1.fillColor = 0;
        insideBtn1.fillAlpha = 0.2;
        _page1.add(insideBtn1);

        // insideBtn2
        const insideBtn2 = scene.add.rectangle(-360, 196, 128, 128);
        insideBtn2.scaleX = 1.592229102135418;
        insideBtn2.scaleY = 0.2836889206041875;
        insideBtn2.angle = -1;
        insideBtn2.visible = false;
        insideBtn2.fillColor = 0;
        insideBtn2.fillAlpha = 0.2;
        _page1.add(insideBtn2);

        // insideBtn3
        const insideBtn3 = scene.add.rectangle(-359, 233, 128, 128);
        insideBtn3.scaleX = 1.592229102135418;
        insideBtn3.scaleY = 0.2836889206041875;
        insideBtn3.angle = -1;
        insideBtn3.visible = false;
        insideBtn3.fillColor = 0;
        insideBtn3.fillAlpha = 0.2;
        _page1.add(insideBtn3);

        // insideBtn4
        const insideBtn4 = scene.add.rectangle(-359, 268, 128, 128);
        insideBtn4.scaleX = 1.592229102135418;
        insideBtn4.scaleY = 0.2836889206041875;
        insideBtn4.angle = -1;
        insideBtn4.visible = false;
        insideBtn4.fillColor = 0;
        insideBtn4.fillAlpha = 0.2;
        _page1.add(insideBtn4);

        // insideBtn5
        const insideBtn5 = scene.add.rectangle(-359, 303, 128, 128);
        insideBtn5.scaleX = 1.592229102135418;
        insideBtn5.scaleY = 0.2836889206041875;
        insideBtn5.angle = -1;
        insideBtn5.visible = false;
        insideBtn5.fillColor = 0;
        insideBtn5.fillAlpha = 0.2;
        _page1.add(insideBtn5);

        // insideBtn6
        const insideBtn6 = scene.add.rectangle(-358, 339, 128, 128);
        insideBtn6.scaleX = 1.592229102135418;
        insideBtn6.scaleY = 0.2836889206041875;
        insideBtn6.angle = -1;
        insideBtn6.visible = false;
        insideBtn6.fillColor = 0;
        insideBtn6.fillAlpha = 0.2;
        _page1.add(insideBtn6);

        // we_need_you
        const we_need_you = scene.add.image(-398, -285, "newspaper-common", "we_need_you");
        we_need_you.angle = -1;
        we_need_you.visible = false;
        _page1.add(we_need_you);

        // freeitembtn
        const freeitembtn = scene.add.image(486, 265, "mininewspaper", "freeitembtn");
        freeitembtn.scaleX = 0.6;
        freeitembtn.scaleY = 0.6;
        freeitembtn.angle = -1;
        _page1.add(freeitembtn);

        // text_1
        const text_1 = scene.add.text(394, 241, "", {});
        text_1.angle = -1;
        text_1.text = "Claim Gift";
        text_1.setStyle({ "fontFamily": "Burbank Small", "fontSize": "40px" });
        _page1.add(text_1);

        // submit_btn
        const submit_btn = scene.add.image(-404, -313, "newspaper-common", "submit-btn");
        submit_btn.scaleX = 0.4270689361182393;
        submit_btn.scaleY = 0.5601275041378555;
        submit_btn.angle = -1;
        _page1.add(submit_btn);

        // text
        const text = scene.add.text(-477, -330, "", {});
        text.angle = -1;
        text.text = "Submit Art";
        text.setStyle({ "color": "#582d06ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        _page1.add(text);

        // submit_btn_1
        const submit_btn_1 = scene.add.image(-401, -254, "newspaper-common", "submit-btn");
        submit_btn_1.scaleX = 0.4270689361182393;
        submit_btn_1.scaleY = 0.5601275041378555;
        submit_btn_1.angle = -1;
        _page1.add(submit_btn_1);

        // text_2
        const text_2 = scene.add.text(-450, -278, "", {});
        text_2.scaleX = 0.7803684027914798;
        text_2.scaleY = 0.6974642455741693;
        text_2.angle = -1;
        text_2.text = "Submit A\nQuestion";
        text_2.setStyle({ "color": "#582d06ff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        _page1.add(text_2);

        // newsform
        const newsform = new Newsform(scene, 760, 480);
        newsform.visible = false;
        this.add(newsform);

        // lists
        const pages = [_page1];

        // rectangle_1 (components)
        new Interactive(rectangle_1);

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
        eventsSimpleButton.callback = () => {this.showPage(6)};

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

        // insideBtn6 (components)
        const insideBtn6SimpleButton = new SimpleButton(insideBtn6);
        insideBtn6SimpleButton.hoverCallback = () => {insideBtn6.isFilled = true};
        insideBtn6SimpleButton.hoverOutCallback = () => {insideBtn6.isFilled = false};
        insideBtn6SimpleButton.callback = () => {this.showPage(8)};

        // we_need_you (components)
        const we_need_youButton = new Button(we_need_you);
        we_need_youButton.spriteName = "we_need_you";
        we_need_youButton.callback = () => {this.showPage(9)};

        // freeitembtn (components)
        const freeitembtnButton = new Button(freeitembtn);
        freeitembtnButton.spriteName = "freeitembtn";
        freeitembtnButton.callback = () => this.interface.prompt.showItem(328);

        // submit_btn (components)
        const submit_btnButton = new Button(submit_btn);
        submit_btnButton.spriteName = "submit-btn";
        submit_btnButton.callback = () => this.onSubmit('art');

        // submit_btn_1 (components)
        const submit_btn_1Button = new Button(submit_btn_1);
        submit_btn_1Button.spriteName = "submit-btn";
        submit_btn_1Button.callback = () => this.onSubmit('question');

        this.newsform = newsform;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        //this.pages = [_page1, _page2, _page3, _page4, _page5, _page6, _page7, _page8, _page9, _page10];
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
