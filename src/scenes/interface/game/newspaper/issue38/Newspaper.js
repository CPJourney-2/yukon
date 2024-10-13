import BaseNewspaper from '../BaseNewspaper'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'
import Newsform from '@scenes/interface/game/newsform/Newsform'
import Sudoku from '../_puzzles/sudoku/Sudoku'
import Shuffle from '../_puzzles/shuffle/Shuffle'

import Tag1 from '@scenes/interface/shared_prefabs/Tag1'
import Tag2 from '@scenes/interface/shared_prefabs/Tag2'

export const preload = {
    key: 'issue38-pack',
    url: 'assets/media/interface/game/newspaper/issue38/issue38-pack.json', 
    loadString: ['loading', 'Newspaper']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class Newspaper extends BaseNewspaper {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Sprite} */
        this.auntarctic;
        /** @type {Phaser.GameObjects.Container} */
        this.questionHoverBubble;
        /** @type {Phaser.GameObjects.Container} */
        this.artHoverBubble;
        /** @type {Phaser.GameObjects.Container} */
        this.jokeHoverBubble;
        /** @type {Phaser.GameObjects.Container} */
        this.riddleHoverBubble;
        /** @type {Sudoku} */
        this.sudoku;
        /** @type {Phaser.GameObjects.Container} */
        this.riddleAnswers;
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

        // _page11
        const _page11 = scene.add.container(676, 406);
        _page11.angle = -1;
        _page11.visible = false;
        this.add(_page11);

        // pg11
        const pg11 = scene.add.image(97, 59, "news-common", "submit-content-pg");
        _page11.add(pg11);

        // question_submit_btn
        const question_submit_btn = scene.add.image(606, -144, "news-common", "submit-btn");
        question_submit_btn.scaleX = 0.6657090645304709;
        question_submit_btn.scaleY = 0.7359186266209524;
        _page11.add(question_submit_btn);

        // art_submit_btn
        const art_submit_btn = scene.add.image(607, -53, "news-common", "submit-btn");
        art_submit_btn.scaleX = 0.6657090645304709;
        art_submit_btn.scaleY = 0.7359186266209524;
        _page11.add(art_submit_btn);

        // joke_submit_btn
        const joke_submit_btn = scene.add.image(608, 37, "news-common", "submit-btn");
        joke_submit_btn.scaleX = 0.6657090645304709;
        joke_submit_btn.scaleY = 0.7359186266209524;
        _page11.add(joke_submit_btn);

        // riddle_submit_btn
        const riddle_submit_btn = scene.add.image(607, 126, "news-common", "submit-btn");
        riddle_submit_btn.scaleX = 0.6657090645304709;
        riddle_submit_btn.scaleY = 0.7359186266209524;
        _page11.add(riddle_submit_btn);

        // auntarctic
        const auntarctic = scene.add.sprite(-4, 15, "news-common", "aunthover1");
        auntarctic.scaleX = 1.05;
        auntarctic.scaleY = 1.05;
        auntarctic.angle = -1;
        _page11.add(auntarctic);

        // questionHoverBubble
        const questionHoverBubble = scene.add.container(-124, -216);
        questionHoverBubble.angle = -1;
        questionHoverBubble.visible = false;
        _page11.add(questionHoverBubble);

        // questionBubble_txt1
        const questionBubble_txt1 = scene.add.text(67, -1, "", {});
        questionBubble_txt1.text = "Want to ask me a question?";
        questionBubble_txt1.setStyle({ "align": "center", "color": "#000", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        questionBubble_txt1.setWordWrapWidth(600);
        questionHoverBubble.add(questionBubble_txt1);

        // questionBubble_txt2
        const questionBubble_txt2 = scene.add.text(45, 54, "", {});
        questionBubble_txt2.text = "I would love to hear from you and to offer any advice i can.";
        questionBubble_txt2.setStyle({ "align": "center", "color": "#000", "fontFamily": "Burbank Small", "fontSize": "27px" });
        questionBubble_txt2.setWordWrapWidth(500);
        questionHoverBubble.add(questionBubble_txt2);

        // questionBubble_txt3
        const questionBubble_txt3 = scene.add.text(-9, 137, "", {});
        questionBubble_txt3.text = "Note: This is not for suggesting in-game features. Only a few questions will be selected every issue.";
        questionBubble_txt3.setStyle({ "align": "center", "color": "#000", "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "italic" });
        questionBubble_txt3.setWordWrapWidth(600);
        questionHoverBubble.add(questionBubble_txt3);

        // artHoverBubble
        const artHoverBubble = scene.add.container(-124, -218);
        artHoverBubble.angle = -1;
        artHoverBubble.visible = false;
        _page11.add(artHoverBubble);

        // artBubble_txt2
        const artBubble_txt2 = scene.add.text(-20, 125, "", {});
        artBubble_txt2.visible = false;
        artBubble_txt2.text = "You must be at least 10 days old to submit artwork. In addition, your file must be below 1 MB in size.";
        artBubble_txt2.setStyle({ "align": "center", "color": "#000", "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold" });
        artBubble_txt2.setWordWrapWidth(600);
        artHoverBubble.add(artBubble_txt2);

        // artBubble_txt1
        const artBubble_txt1 = scene.add.text(-25, 26, "", {});
        artBubble_txt1.text = "Submit your lovely artwork to be featured in the art section for the Club Penguin Times!";
        artBubble_txt1.setStyle({ "align": "center", "color": "#000", "fontFamily": "Burbank Small", "fontSize": "33px" });
        artBubble_txt1.setWordWrapWidth(600);
        artHoverBubble.add(artBubble_txt1);

        // jokeHoverBubble
        const jokeHoverBubble = scene.add.container(-130, -215);
        jokeHoverBubble.angle = -1;
        jokeHoverBubble.visible = false;
        _page11.add(jokeHoverBubble);

        // jokeBubble_txt1
        const jokeBubble_txt1 = scene.add.text(148, -1, "", {});
        jokeBubble_txt1.text = "Submit your joke!";
        jokeBubble_txt1.setStyle({ "align": "center", "color": "#000", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        jokeBubble_txt1.setWordWrapWidth(600);
        jokeHoverBubble.add(jokeBubble_txt1);

        // jokeBubble_txt2
        const jokeBubble_txt2 = scene.add.text(70, 51, "", {});
        jokeBubble_txt2.text = "Remember to include the answer!";
        jokeBubble_txt2.setStyle({ "align": "center", "color": "#000", "fontFamily": "Burbank Small", "fontSize": "27px" });
        jokeBubble_txt2.setWordWrapWidth(500);
        jokeHoverBubble.add(jokeBubble_txt2);

        // jokeBubble_txt3
        const jokeBubble_txt3 = scene.add.text(-4, 105, "", {});
        jokeBubble_txt3.text = "Note: Only a few jokes will be selected each week. Using inappropriate language in your submission could get your penguin banned.";
        jokeBubble_txt3.setStyle({ "align": "center", "color": "#000", "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "italic" });
        jokeBubble_txt3.setWordWrapWidth(600);
        jokeHoverBubble.add(jokeBubble_txt3);

        // riddleHoverBubble
        const riddleHoverBubble = scene.add.container(-130, -215);
        riddleHoverBubble.angle = -1;
        riddleHoverBubble.visible = false;
        _page11.add(riddleHoverBubble);

        // riddleBubble_txt1
        const riddleBubble_txt1 = scene.add.text(129, -1, "", {});
        riddleBubble_txt1.text = "Submit your riddle!";
        riddleBubble_txt1.setStyle({ "align": "center", "color": "#000", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        riddleBubble_txt1.setWordWrapWidth(600);
        riddleHoverBubble.add(riddleBubble_txt1);

        // riddleBubble_txt2
        const riddleBubble_txt2 = scene.add.text(70, 51, "", {});
        riddleBubble_txt2.text = "Remember to include the answer!";
        riddleBubble_txt2.setStyle({ "align": "center", "color": "#000", "fontFamily": "Burbank Small", "fontSize": "27px" });
        riddleBubble_txt2.setWordWrapWidth(500);
        riddleHoverBubble.add(riddleBubble_txt2);

        // riddleBubble_txt3
        const riddleBubble_txt3 = scene.add.text(-15, 105, "", {});
        riddleBubble_txt3.text = "Note: Only a few riddles will be selected each week. Using inappropriate language in your submission could get your penguin banned.";
        riddleBubble_txt3.setStyle({ "align": "center", "color": "#000", "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "italic" });
        riddleBubble_txt3.setWordWrapWidth(600);
        riddleHoverBubble.add(riddleBubble_txt3);

        // question_txt
        const question_txt = scene.add.text(519, -170, "", {});
        question_txt.text = "Question";
        question_txt.setStyle({ "color": "#552c00", "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        _page11.add(question_txt);

        // art_txt
        const art_txt = scene.add.text(576, -78, "", {});
        art_txt.text = "Art";
        art_txt.setStyle({ "color": "#552c00", "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        _page11.add(art_txt);

        // art_txt_1
        const art_txt_1 = scene.add.text(559, 12, "", {});
        art_txt_1.text = "Joke";
        art_txt_1.setStyle({ "color": "#552c00", "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        _page11.add(art_txt_1);

        // art_txt_2
        const art_txt_2 = scene.add.text(548, 100, "", {});
        art_txt_2.text = "Riddle";
        art_txt_2.setStyle({ "color": "#552c00", "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        _page11.add(art_txt_2);

        // _page10
        const _page10 = scene.add.container(676, 406);
        _page10.angle = -1;
        _page10.visible = false;
        this.add(_page10);

        // pg10
        const pg10 = scene.add.image(97, 59, "issue38", "issue38-pg8");
        _page10.add(pg10);

        // _page9
        const _page9 = scene.add.container(676, 406);
        _page9.angle = -1;
        _page9.visible = false;
        this.add(_page9);

        // pg9
        const pg9 = scene.add.image(97, 59, "news-common", "classifieds-pg");
        _page9.add(pg9);

        // chefHatBuy
        const chefHatBuy = new Tag1(scene, -502, -177);
        chefHatBuy.angle = -20;
        chefHatBuy.visible = true;
        _page9.add(chefHatBuy);

        // coffeeApronBuy
        const coffeeApronBuy = new Tag2(scene, 573, -108);
        coffeeApronBuy.angle = -20;
        coffeeApronBuy.visible = true;
        _page9.add(coffeeApronBuy);

        // pizzaApronBuy
        const pizzaApronBuy = new Tag1(scene, -481, -94);
        pizzaApronBuy.angle = 15;
        pizzaApronBuy.visible = true;
        _page9.add(pizzaApronBuy);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(-296, 318, 128, 128);
        rectangle_2.scaleX = 5.099259469809915;
        rectangle_2.scaleY = 1.8291888205076854;
        rectangle_2.visible = false;
        rectangle_2.isFilled = true;
        rectangle_2.fillColor = 15658734;
        _page9.add(rectangle_2);

        // rectangle
        const rectangle = scene.add.rectangle(434, 317, 128, 128);
        rectangle.scaleX = 5.099259469809915;
        rectangle.scaleY = 1.8291888205076854;
        rectangle.visible = false;
        rectangle.isFilled = true;
        rectangle.fillColor = 15658734;
        _page9.add(rectangle);

        // text_1
        const text_1 = scene.add.text(-561, 238, "", {});
        text_1.visible = false;
        text_1.text = "The Pizza Parlor needs a bit more time to get ready for new hires! Check back next week.";
        text_1.setStyle({ "align": "center", "color": "#333", "fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
        text_1.setWordWrapWidth(550);
        _page9.add(text_1);

        // text
        const text = scene.add.text(176, 237, "", {});
        text.visible = false;
        text.text = "The Coffee Shop needs a bit more time to get ready for new hires! Check back next week.";
        text.setStyle({ "align": "center", "color": "#333", "fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
        text.setWordWrapWidth(550);
        _page9.add(text);

        // _page8
        const _page8 = scene.add.container(676, 406);
        _page8.angle = -1;
        _page8.visible = false;
        this.add(_page8);

        // pg8
        const pg8 = scene.add.image(97, 59, "news-common", "sudoku-pg");
        _page8.add(pg8);

        // sudoku_puffle
        const sudoku_puffle = scene.add.image(-107, 311, "issue38", "sudoku-puffle");
        _page8.add(sudoku_puffle);

        // sudoku
        const sudoku = new Sudoku(scene, 113, -258);
        _page8.add(sudoku);

        // _page7
        const _page7 = scene.add.container(676, 406);
        _page7.angle = -1;
        _page7.visible = false;
        this.add(_page7);

        // pg7
        const pg7 = scene.add.image(97, 59, "issue38", "issue38-pg7");
        _page7.add(pg7);

        // answerKeyTxt
        const answerKeyTxt = scene.add.text(-236, 331, "", {});
        answerKeyTxt.text = "Answer Key";
        answerKeyTxt.setStyle({ "color": "#333", "fontFamily": "Burbank Small", "fontSize": "30px" });
        _page7.add(answerKeyTxt);

        // riddleAnswers
        const riddleAnswers = scene.add.container(-281.9999887385133, 47.00000810656587);
        riddleAnswers.visible = false;
        _page7.add(riddleAnswers);

        // riddle_paper
        const riddle_paper = scene.add.image(0, 0, "news-common", "riddle-paper");
        riddleAnswers.add(riddle_paper);

        // answerKeyTxt_1
        const answerKeyTxt_1 = scene.add.text(-142, -135, "", {});
        answerKeyTxt_1.text = "ANSWERS";
        answerKeyTxt_1.setStyle({ "color": "#333", "fontFamily": "Burbank Small", "fontSize": "60px", "fontStyle": "bold" });
        riddleAnswers.add(answerKeyTxt_1);

        // answerKeyTxt_2
        const answerKeyTxt_2 = scene.add.text(-142, -41, "", {});
        answerKeyTxt_2.text = "1. Stairs\n2. A rope\n3. A stamp";
        answerKeyTxt_2.setStyle({ "color": "#333", "fontFamily": "Burbank Small", "fontSize": "30px" });
        riddleAnswers.add(answerKeyTxt_2);

        // riddle_close
        const riddle_close = scene.add.image(223, 140, "news-common", "riddle-close");
        riddleAnswers.add(riddle_close);

        // answerKeyTxt_3
        const answerKeyTxt_3 = scene.add.text(104, 123, "", {});
        answerKeyTxt_3.text = "CLOSE";
        answerKeyTxt_3.setStyle({ "color": "#333", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        riddleAnswers.add(answerKeyTxt_3);

        // riddleCloseBtn
        const riddleCloseBtn = scene.add.rectangle(168, 141, 158, 50);
        riddleCloseBtn.fillColor = 65535;
        riddleCloseBtn.fillAlpha = 0.5;
        riddleAnswers.add(riddleCloseBtn);

        // _page6
        const _page6 = scene.add.container(676, 406);
        _page6.angle = -1;
        _page6.visible = false;
        this.add(_page6);

        // pg6
        const pg6 = scene.add.image(97, 59, "issue38", "issue38-pg6");
        _page6.add(pg6);

        // submit_btn_2
        const submit_btn_2 = scene.add.image(592, 380, "news-common", "submit-btn");
        submit_btn_2.scaleX = 0.55;
        submit_btn_2.scaleY = 0.55;
        _page6.add(submit_btn_2);

        // askaapagetext
        const askaapagetext = scene.add.text(503, 367, "", {});
        askaapagetext.text = "Send a Question";
        askaapagetext.setStyle({ "color": "#552c00ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
        _page6.add(askaapagetext);

        // _page5
        const _page5 = scene.add.container(676, 406);
        _page5.angle = -1;
        _page5.visible = false;
        this.add(_page5);

        // pg5
        const pg5 = scene.add.image(97, 59, "issue38", "issue38-pg5");
        _page5.add(pg5);

        // aasecret
        const aasecret = scene.add.image(-529, -181, "news-common", "aasecret");
        aasecret.visible = false;
        _page5.add(aasecret);

        // _page4
        const _page4 = scene.add.container(676, 406);
        _page4.angle = -1;
        _page4.visible = false;
        this.add(_page4);

        // pg4
        const pg4 = scene.add.image(97, 59, "issue38", "issue38-pg4");
        _page4.add(pg4);

        // _page3
        const _page3 = scene.add.container(676, 406);
        _page3.angle = -1;
        _page3.visible = false;
        this.add(_page3);

        // pg3
        const pg3 = scene.add.image(97, 59, "issue38", "issue38-pg3");
        _page3.add(pg3);

        // _page2
        const _page2 = scene.add.container(676, 406);
        _page2.angle = -1;
        _page2.visible = false;
        this.add(_page2);

        // pg2
        const pg2 = scene.add.image(97, 59, "issue38", "issue38-pg2");
        _page2.add(pg2);

        // _page1
        const _page1 = scene.add.container(677, 437);
        _page1.angle = -1;
        this.add(_page1);

        // pg1
        const pg1 = scene.add.image(97, 30, "issue38", "issue38-pg1");
        _page1.add(pg1);

        // insideBtn_4
        const insideBtn_4 = scene.add.rectangle(194, 216, 128, 128);
        insideBtn_4.scaleX = 6.6228709444206215;
        insideBtn_4.scaleY = 2.540121267102537;
        insideBtn_4.fillColor = 0;
        insideBtn_4.fillAlpha = 0.2;
        _page1.add(insideBtn_4);

        // right_1
        const right_1 = scene.add.image(614, 316, "news-common", "right");
        _page1.add(right_1);

        // close_1
        const close_1 = scene.add.image(612, -265, "news-common", "close");
        _page1.add(close_1);

        // construction
        const construction = scene.add.rectangle(-279, -81, 131, 139);
        construction.scaleX = 2.8825179601835456;
        construction.scaleY = 1.4472187285201359;
        _page1.add(construction);

        // questions
        const questions = scene.add.rectangle(107, -80, 128, 128);
        questions.scaleX = 2.862190183194497;
        questions.scaleY = 1.4521025367799516;
        _page1.add(questions);

        // events
        const events = scene.add.rectangle(485, -78, 128, 128);
        events.scaleX = 2.6249074630627027;
        events.scaleY = 1.4521025367799516;
        _page1.add(events);

        // insideBtn1
        const insideBtn1 = scene.add.rectangle(-362, 96, 128, 128);
        insideBtn1.scaleX = 1.592229102135418;
        insideBtn1.scaleY = 0.2836889206041875;
        insideBtn1.fillColor = 0;
        insideBtn1.fillAlpha = 0.2;
        _page1.add(insideBtn1);

        // insideBtn2
        const insideBtn2 = scene.add.rectangle(-361, 129, 128, 128);
        insideBtn2.scaleX = 1.592229102135418;
        insideBtn2.scaleY = 0.2836889206041875;
        insideBtn2.fillColor = 0;
        insideBtn2.fillAlpha = 0.2;
        _page1.add(insideBtn2);

        // insideBtn3
        const insideBtn3 = scene.add.rectangle(-362, 164, 128, 128);
        insideBtn3.scaleX = 1.592229102135418;
        insideBtn3.scaleY = 0.2836889206041875;
        insideBtn3.fillColor = 0;
        insideBtn3.fillAlpha = 0.2;
        _page1.add(insideBtn3);

        // insideBtn4
        const insideBtn4 = scene.add.rectangle(-362, 201, 128, 128);
        insideBtn4.scaleX = 1.592229102135418;
        insideBtn4.scaleY = 0.2836889206041875;
        insideBtn4.fillColor = 0;
        insideBtn4.fillAlpha = 0.2;
        _page1.add(insideBtn4);

        // insideBtn5
        const insideBtn5 = scene.add.rectangle(-362, 236, 128, 128);
        insideBtn5.scaleX = 1.592229102135418;
        insideBtn5.scaleY = 0.2836889206041875;
        insideBtn5.fillColor = 0;
        insideBtn5.fillAlpha = 0.2;
        _page1.add(insideBtn5);

        // insideBtn6
        const insideBtn6 = scene.add.rectangle(-361, 269, 128, 128);
        insideBtn6.scaleX = 1.592229102135418;
        insideBtn6.scaleY = 0.2836889206041875;
        insideBtn6.fillColor = 0;
        insideBtn6.fillAlpha = 0.2;
        _page1.add(insideBtn6);

        // insideBtn7
        const insideBtn7 = scene.add.rectangle(-361, 300, 128, 128);
        insideBtn7.scaleX = 1.592229102135418;
        insideBtn7.scaleY = 0.25891613359880117;
        insideBtn7.fillColor = 0;
        insideBtn7.fillAlpha = 0.2;
        _page1.add(insideBtn7);

        // insideBtn8
        const insideBtn8 = scene.add.rectangle(-361, 331, 128, 128);
        insideBtn8.scaleX = 1.592229102135418;
        insideBtn8.scaleY = 0.25891613359880117;
        insideBtn8.fillColor = 0;
        insideBtn8.fillAlpha = 0.2;
        _page1.add(insideBtn8);

        // insideBtn9
        const insideBtn9 = scene.add.rectangle(-360, 361, 128, 128);
        insideBtn9.scaleX = 1.592229102135418;
        insideBtn9.scaleY = 0.25891613359880117;
        insideBtn9.fillColor = 0;
        insideBtn9.fillAlpha = 0.2;
        _page1.add(insideBtn9);

        // we_need_you
        const we_need_you = scene.add.image(-396, -291, "news-common", "we_need_you");
        _page1.add(we_need_you);

        // buttons
        const buttons = scene.add.container(-16, -41);
        buttons.visible = false;
        this.add(buttons);

        // mainHit
        const mainHit = scene.add.polygon(44, 116, "8.212646189265897 148.57022969637336 5.23096951792941 -7.0732925473911195 88.71791631535098 -5.2842865445892215");
        mainHit.setOrigin(0, 0);
        mainHit.fillColor = 65535;
        mainHit.fillAlpha = 0.5;
        buttons.add(mainHit);

        // leftHit
        const leftHit = scene.add.polygon(54, 926, "8.212646189265897 148.57022969637336 5.23096951792941 -7.0732925473911195 88.71791631535098 -5.2842865445892215");
        leftHit.scaleY = -1;
        leftHit.setOrigin(0, 0);
        leftHit.fillColor = 65535;
        leftHit.fillAlpha = 0.5;
        buttons.add(leftHit);

        // rightHit
        const rightHit = scene.add.polygon(1497, 901, "8.212646189265897 148.57022969637336 5.23096951792941 -7.0732925473911195 88.71791631535098 -5.2842865445892215");
        rightHit.scaleX = -1;
        rightHit.scaleY = -1;
        rightHit.setOrigin(0, 0);
        rightHit.fillColor = 65535;
        rightHit.fillAlpha = 0.5;
        buttons.add(rightHit);

        // closeHit
        const closeHit = scene.add.polygon(1491, 89, "8.212646189265897 148.57022969637336 5.23096951792941 -7.0732925473911195 88.71791631535098 -5.2842865445892215");
        closeHit.scaleX = -1;
        closeHit.setOrigin(0, 0);
        closeHit.fillColor = 65535;
        closeHit.fillAlpha = 0.5;
        buttons.add(closeHit);

        // right
        const right = scene.add.image(1424, 794, "news-common", "right");
        right.angle = -1;
        buttons.add(right);

        // main
        const main = scene.add.image(127, 241, "news-common", "main");
        main.angle = -1;
        buttons.add(main);

        // left
        const left = scene.add.image(126, 817, "news-common", "left");
        left.angle = -1;
        buttons.add(left);

        // close
        const close = scene.add.image(1419, 200, "news-common", "close");
        close.angle = -1;
        buttons.add(close);

        // newsform
        const newsform = new Newsform(scene, 760, 480);
        newsform.visible = false;
        this.add(newsform);

        // lists
        const pages = [_page1, _page2, _page3, _page4, _page5, _page6, _page7, _page8, _page9, _page10, _page11];

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // question_submit_btn (components)
        const question_submit_btnButton = new Button(question_submit_btn);
        question_submit_btnButton.spriteName = "submit-btn";
        question_submit_btnButton.hoverCallback = () => this.onSubmitHover('question');
        question_submit_btnButton.hoverOutCallback = () => this.onSubmitHoverOut();
        question_submit_btnButton.callback = () => this.onSubmit('question');

        // art_submit_btn (components)
        const art_submit_btnButton = new Button(art_submit_btn);
        art_submit_btnButton.spriteName = "submit-btn";
        art_submit_btnButton.hoverCallback = () => this.onSubmitHover('art');
        art_submit_btnButton.hoverOutCallback = () => this.onSubmitHoverOut();
        art_submit_btnButton.callback = () => this.onSubmit('art');

        // joke_submit_btn (components)
        const joke_submit_btnButton = new Button(joke_submit_btn);
        joke_submit_btnButton.spriteName = "submit-btn";
        joke_submit_btnButton.hoverCallback = () => this.onSubmitHover('joke');
        joke_submit_btnButton.hoverOutCallback = () => this.onSubmitHoverOut();
        joke_submit_btnButton.callback = () => this.onSubmit('joke');

        // riddle_submit_btn (components)
        const riddle_submit_btnButton = new Button(riddle_submit_btn);
        riddle_submit_btnButton.spriteName = "submit-btn";
        riddle_submit_btnButton.hoverCallback = () => this.onSubmitHover('riddle');
        riddle_submit_btnButton.hoverOutCallback = () => this.onSubmitHoverOut();
        riddle_submit_btnButton.callback = () => this.onSubmit('riddle');

        // chefHatBuy (prefab fields)
        chefHatBuy.item = 424;

        // coffeeApronBuy (prefab fields)
        coffeeApronBuy.item = 262;

        // pizzaApronBuy (prefab fields)
        pizzaApronBuy.item = 263;

        // answerKeyTxt (components)
        const answerKeyTxtSimpleButton = new SimpleButton(answerKeyTxt);
        answerKeyTxtSimpleButton.hoverCallback = () => answerKeyTxt.setColor('#000');
        answerKeyTxtSimpleButton.hoverOutCallback = () => answerKeyTxt.setColor('#333333');
        answerKeyTxtSimpleButton.callback = () => this.riddleAnswers.visible = true;

        // riddle_paper (components)
        const riddle_paperSimpleButton = new SimpleButton(riddle_paper);
        riddle_paperSimpleButton.callback = () => this.riddleAnswers.visible = false;

        // riddle_close (components)
        const riddle_closeButton = new Button(riddle_close);
        riddle_closeButton.spriteName = "riddle-close";
        riddle_closeButton.callback = () => this.riddleAnswers.visible = false;
        riddle_closeButton.alias = riddleCloseBtn;

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
        insideBtn_4SimpleButton.callback = () => this.showPage(1);

        // right_1 (components)
        const right_1Button = new Button(right_1);
        right_1Button.spriteName = "right";
        right_1Button.callback = () => this.nextPage();

        // close_1 (components)
        const close_1Button = new Button(close_1);
        close_1Button.spriteName = "close";
        close_1Button.callback = () => this.close();

        // construction (components)
        const constructionSimpleButton = new SimpleButton(construction);
        constructionSimpleButton.callback = () => {this.showPage(3)};

        // questions (components)
        const questionsSimpleButton = new SimpleButton(questions);
        questionsSimpleButton.callback = () => {this.showPage(2)};

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

        // insideBtn6 (components)
        const insideBtn6SimpleButton = new SimpleButton(insideBtn6);
        insideBtn6SimpleButton.hoverCallback = () => {insideBtn6.isFilled = true};
        insideBtn6SimpleButton.hoverOutCallback = () => {insideBtn6.isFilled = false};
        insideBtn6SimpleButton.callback = () => {this.showPage(6)};

        // insideBtn7 (components)
        const insideBtn7SimpleButton = new SimpleButton(insideBtn7);
        insideBtn7SimpleButton.hoverCallback = () => {insideBtn7.isFilled = true};
        insideBtn7SimpleButton.hoverOutCallback = () => {insideBtn7.isFilled = false};
        insideBtn7SimpleButton.callback = () => {this.showPage(7)};

        // insideBtn8 (components)
        const insideBtn8SimpleButton = new SimpleButton(insideBtn8);
        insideBtn8SimpleButton.hoverCallback = () => {insideBtn8.isFilled = true};
        insideBtn8SimpleButton.hoverOutCallback = () => {insideBtn8.isFilled = false};
        insideBtn8SimpleButton.callback = () => {this.showPage(8)};

        // insideBtn9 (components)
        const insideBtn9SimpleButton = new SimpleButton(insideBtn9);
        insideBtn9SimpleButton.hoverCallback = () => {insideBtn9.isFilled = true};
        insideBtn9SimpleButton.hoverOutCallback = () => {insideBtn9.isFilled = false};
        insideBtn9SimpleButton.callback = () => {this.showPage(9)};

        // we_need_you (components)
        const we_need_youButton = new Button(we_need_you);
        we_need_youButton.spriteName = "we_need_you";
        we_need_youButton.callback = () => {this.showPage(10)};

        // right (components)
        const rightButton = new Button(right);
        rightButton.spriteName = "right";
        rightButton.callback = () => { this.nextPage();};
        rightButton.activeFrame = true;
        rightButton.pixelPerfect = true;
        rightButton.alias = rightHit;

        // main (components)
        const mainButton = new Button(main);
        mainButton.spriteName = "main";
        mainButton.callback = () => {this.showPage(0)};
        mainButton.activeFrame = true;
        mainButton.pixelPerfect = true;
        mainButton.alias = mainHit;

        // left (components)
        const leftButton = new Button(left);
        leftButton.spriteName = "left";
        leftButton.callback = () => { this.prevPage();};
        leftButton.activeFrame = true;
        leftButton.pixelPerfect = true;
        leftButton.alias = leftHit;

        // close (components)
        const closeButton = new Button(close);
        closeButton.spriteName = "close";
        closeButton.callback = () => this.close();
        closeButton.activeFrame = true;
        closeButton.pixelPerfect = true;
        closeButton.alias = closeHit;

        this.auntarctic = auntarctic;
        this.questionHoverBubble = questionHoverBubble;
        this.artHoverBubble = artHoverBubble;
        this.jokeHoverBubble = jokeHoverBubble;
        this.riddleHoverBubble = riddleHoverBubble;
        this.sudoku = sudoku;
        this.riddleAnswers = riddleAnswers;
        this.buttons = buttons;
        this.newsform = newsform;
        this.pages = pages;

        /* START-USER-CTR-CODE */

        this.puzzleData = {
            name: 'sudoku',
            info: 2
        }

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
