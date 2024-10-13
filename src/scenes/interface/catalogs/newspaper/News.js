
// You can write more code here

/* START OF COMPILED CODE */

import BookContainer from "../../books/BookContainer";
import Interactive from "../../../components/Interactive";
import SimpleButton from "../../../components/SimpleButton";
import Button from "../../../components/Button";
import Animation from "../../../components/Animation";
/* START-USER-IMPORTS */
export const preload = {
    key: 'newspaper-pack',
    url: 'assets/media/interface/catalogs/newspaper/newspaper-pack.json',
    loadString: ['loading', 'newspaper']
}
/* END-USER-IMPORTS */

export default class News extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 358.19686866835116, y ?? 264.98131888962683);

        /** @type {Phaser.GameObjects.Image} */
        this.aunt;
        /** @type {Phaser.GameObjects.Image} */
        this.aunt_question;
        /** @type {Phaser.GameObjects.Image} */
        this.aunt_poem;
        /** @type {Phaser.GameObjects.Image} */
        this.aunt_joke;
        /** @type {Phaser.GameObjects.Image} */
        this.aunt_riddle;
        /** @type {Phaser.GameObjects.Image} */
        this.aunt_comic;
        /** @type {Phaser.GameObjects.Image} */
        this.secret_hidden;
        /** @type {Phaser.GameObjects.Image} */
        this.secret_shown;
        /** @type {Phaser.GameObjects.Image} */
        this.folder;
        /** @type {Phaser.GameObjects.Image} */
        this.close_button;
        /** @type {Phaser.GameObjects.Image} */
        this.auntGlasses;
        /** @type {Phaser.GameObjects.Image} */
        this.auntGlasses_hover;
        /** @type {Phaser.GameObjects.Image} */
        this.seemore;
        /** @type {Phaser.GameObjects.Image} */
        this.seemore_hover;
        /** @type {Phaser.GameObjects.Sprite} */
        this.arrow0001;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // block
        const block = scene.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.3;
        this.add(block);

        // page9
        const page9 = scene.add.container(17, -34);
        page9.visible = false;
        this.add(page9);

        // conent_news_7
        const conent_news_7 = scene.add.image(751, 490, "newspaper", "conent_news");
        conent_news_7.angle = -1;
        page9.add(conent_news_7);

        // notices
        const notices = scene.add.image(718, 122, "newspaper", "notices");
        notices.angle = -1;
        page9.add(notices);

        // submitPage
        const submitPage = scene.add.image(736, 493, "newspaper", "submitPage");
        submitPage.angle = -1;
        page9.add(submitPage);

        // shadow3
        const shadow3 = scene.add.image(729, 495, "newspaper", "shadow3");
        page9.add(shadow3);

        // qbutton0002
        const qbutton0002 = scene.add.image(1248, 513, "newspaper", "qbutton0002");
        qbutton0002.angle = -1;
        page9.add(qbutton0002);

        // qbutton
        const qbutton = scene.add.image(1248, 453, "newspaper", "qbutton0002");
        qbutton.angle = -1;
        page9.add(qbutton);

        // qbutton_1
        const qbutton_1 = scene.add.image(1249, 392, "newspaper", "qbutton0002");
        qbutton_1.angle = -1;
        page9.add(qbutton_1);

        // qbutton_2
        const qbutton_2 = scene.add.image(1247, 328, "newspaper", "qbutton0002");
        qbutton_2.angle = -1;
        page9.add(qbutton_2);

        // qbutton_3
        const qbutton_3 = scene.add.image(1245, 258, "newspaper", "qbutton0002");
        qbutton_3.angle = -1;
        page9.add(qbutton_3);

        // hover_list
        const hover_list = scene.add.image(1248, 392, "newspaper", "hover_list");
        hover_list.angle = -1;
        page9.add(hover_list);

        // aunt
        const aunt = scene.add.image(384, 509, "newspaper", "aunt");
        page9.add(aunt);

        // tip
        const tip = scene.add.image(927, 396, "newspaper", "tip");
        tip.angle = -1;
        page9.add(tip);

        // aunt_question
        const aunt_question = scene.add.image(708, 488, "newspaper", "aunt-question");
        aunt_question.visible = false;
        page9.add(aunt_question);

        // aunt_poem
        const aunt_poem = scene.add.image(708, 488, "newspaper", "aunt-poem");
        aunt_poem.visible = false;
        page9.add(aunt_poem);

        // aunt_joke
        const aunt_joke = scene.add.image(708, 475, "newspaper", "aunt-joke");
        aunt_joke.visible = false;
        page9.add(aunt_joke);

        // aunt_riddle
        const aunt_riddle = scene.add.image(708, 488, "newspaper", "aunt-riddle");
        aunt_riddle.visible = false;
        page9.add(aunt_riddle);

        // aunt_comic
        const aunt_comic = scene.add.image(708, 466, "newspaper", "aunt-comic");
        aunt_comic.visible = false;
        page9.add(aunt_comic);

        // table
        const table = scene.add.image(773, 702, "newspaper", "table");
        table.angle = -1;
        page9.add(table);

        // tip2
        const tip2 = scene.add.image(1104, 780, "newspaper", "tip2");
        tip2.angle = -1;
        page9.add(tip2);

        // topLeft
        const topLeft = scene.add.image(88, 228, "newspaper", "topLeft");
        page9.add(topLeft);

        // bottomLeft_1
        const bottomLeft_1 = scene.add.image(87, 804, "newspaper", "bottomLeft");
        page9.add(bottomLeft_1);

        // topRight_2
        const topRight_2 = scene.add.image(1376, 184, "newspaper", "topRight");
        page9.add(topRight_2);

        // page8
        const page8 = scene.add.container(17, -35);
        page8.visible = false;
        this.add(page8);

        // conent_news_6
        const conent_news_6 = scene.add.image(751, 491, "newspaper", "conent_news");
        conent_news_6.angle = -1;
        page8.add(conent_news_6);

        // extras_upcoming_events
        const extras_upcoming_events = scene.add.image(720, 145, "newspaper", "extras_upcoming_events");
        extras_upcoming_events.angle = -1;
        page8.add(extras_upcoming_events);

        // page7
        const page7 = scene.add.container(17, -35);
        page7.visible = false;
        this.add(page7);

        // conent_news_5
        const conent_news_5 = scene.add.image(751, 491, "newspaper", "conent_news");
        conent_news_5.angle = -1;
        page7.add(conent_news_5);

        // extras_art_comics
        const extras_art_comics = scene.add.image(721, 145, "newspaper", "extras_art_comics");
        extras_art_comics.angle = -1;
        page7.add(extras_art_comics);

        // page6
        const page6 = scene.add.container(17, -34);
        page6.visible = false;
        this.add(page6);

        // conent_news_4
        const conent_news_4 = scene.add.image(751, 490, "newspaper", "conent_news");
        conent_news_4.angle = -1;
        page6.add(conent_news_4);

        // extras_jokes_riddles
        const extras_jokes_riddles = scene.add.image(723, 144, "newspaper", "extras_jokes_riddles");
        extras_jokes_riddles.angle = -1;
        page6.add(extras_jokes_riddles);

        // page5
        const page5 = scene.add.container(17, -34);
        page5.visible = false;
        this.add(page5);

        // conent_news_3
        const conent_news_3 = scene.add.image(751, 490, "newspaper", "conent_news");
        conent_news_3.angle = -1;
        page5.add(conent_news_3);

        // regular_feature_secrets
        const regular_feature_secrets = scene.add.image(720, 144, "newspaper", "regular_feature_secrets");
        regular_feature_secrets.angle = -1;
        page5.add(regular_feature_secrets);

        // secret
        const secret = scene.add.image(1082, 512, "newspaper", "secret");
        secret.angle = -1;
        page5.add(secret);

        // secret_hidden
        const secret_hidden = scene.add.image(1086, 771, "newspaper", "secret_hidden");
        page5.add(secret_hidden);

        // secret_shown
        const secret_shown = scene.add.image(1106, 490, "newspaper", "secret_shown");
        secret_shown.visible = false;
        page5.add(secret_shown);

        // folder
        const folder = scene.add.image(1088, 779, "newspaper", "folder");
        folder.scaleX = 1.005;
        folder.angle = -1;
        page5.add(folder);

        // close_button
        const close_button = scene.add.image(805, 193, "newspaper", "close_button");
        close_button.scaleX = 0.6;
        close_button.scaleY = 0.6;
        close_button.visible = false;
        page5.add(close_button);

        // askAunt
        const askAunt = scene.add.image(501, 672, "newspaper", "askAunt");
        askAunt.angle = -1;
        page5.add(askAunt);

        // qbutton0001
        const qbutton0001 = scene.add.image(498, 752, "newspaper", "qbutton0001");
        qbutton0001.angle = -1;
        page5.add(qbutton0001);

        // sendaquestion
        const sendaquestion = scene.add.image(498, 753, "newspaper", "sendaquestion");
        sendaquestion.angle = -1;
        page5.add(sendaquestion);

        // page4
        const page4 = scene.add.container(18, -34);
        page4.visible = false;
        this.add(page4);

        // conent_news_2
        const conent_news_2 = scene.add.image(750, 490, "newspaper", "conent_news");
        conent_news_2.angle = -1;
        page4.add(conent_news_2);

        // askAuntHeader
        const askAuntHeader = scene.add.image(198, 281, "newspaper", "askAuntHeader");
        askAuntHeader.angle = -1;
        page4.add(askAuntHeader);

        // frame
        const frame = scene.add.image(130, 272, "newspaper", "frame");
        frame.angle = -1;
        page4.add(frame);

        // auntGlasses
        const auntGlasses = scene.add.image(131, 276, "newspaper", "auntGlasses");
        auntGlasses.angle = -1;
        page4.add(auntGlasses);

        // auntGlasses_hover
        const auntGlasses_hover = scene.add.image(131, 276, "newspaper", "auntGlasses-hover");
        auntGlasses_hover.angle = -1;
        auntGlasses_hover.visible = false;
        page4.add(auntGlasses_hover);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(128, 271, 128, 128);
        rectangle_1.scaleX = 1.0329503104240945;
        rectangle_1.scaleY = 0.9182307927724198;
        rectangle_1.angle = -1;
        rectangle_1.alpha = 0.1;
        rectangle_1.isFilled = true;
        page4.add(rectangle_1);

        // regular_feature_advice
        const regular_feature_advice = scene.add.image(721, 144, "newspaper", "regular_feature_advice");
        regular_feature_advice.angle = -1;
        page4.add(regular_feature_advice);

        // page3
        const page3 = scene.add.container(17, -34);
        page3.visible = false;
        this.add(page3);

        // conent_news_1
        const conent_news_1 = scene.add.image(751, 490, "newspaper", "conent_news");
        conent_news_1.angle = -1;
        page3.add(conent_news_1);

        // featured_story_2
        const featured_story_2 = scene.add.image(721, 144, "newspaper", "featured_story_2");
        featured_story_2.angle = -1;
        page3.add(featured_story_2);

        // page2
        const page2 = scene.add.container(18, -34);
        page2.visible = false;
        this.add(page2);

        // conent_news
        const conent_news = scene.add.image(750, 490, "newspaper", "conent_news");
        conent_news.angle = -1;
        page2.add(conent_news);

        // featured_story
        const featured_story = scene.add.image(721, 144, "newspaper", "featured_story");
        featured_story.angle = -1;
        page2.add(featured_story);

        // page1
        const page1 = scene.add.container(-1, -13);
        page1.visible = false;
        this.add(page1);

        // cover
        const cover = scene.add.image(771, 481, "newspaper", "cover");
        cover.angle = -1;
        page1.add(cover);

        // shadow2
        const shadow2 = scene.add.image(770, 841, "newspaper", "shadow2");
        shadow2.angle = -1;
        page1.add(shadow2);

        // shadow1
        const shadow1 = scene.add.image(765, 494, "newspaper", "shadow1");
        page1.add(shadow1);

        // title
        const title = scene.add.image(789, 160, "newspaper", "title");
        title.angle = -1;
        page1.add(title);

        // weneedyou
        const weneedyou = scene.add.image(268, 165, "newspaper", "weneedyou");
        weneedyou.angle = -1;
        page1.add(weneedyou);

        // subtitle
        const subtitle = scene.add.image(760, 242, "newspaper", "subtitle");
        subtitle.angle = -1;
        page1.add(subtitle);

        // header_buttons
        const header_buttons = scene.add.image(729, 374, "newspaper", "header-buttons");
        header_buttons.angle = -1;
        page1.add(header_buttons);

        // inside
        const inside = scene.add.image(311, 659, "newspaper", "inside");
        inside.angle = -1;
        page1.add(inside);

        // indexAunt
        const indexAunt = scene.add.image(311, 569, "newspaper", "indexAunt");
        indexAunt.scaleX = 0.77;
        indexAunt.scaleY = 0.8;
        indexAunt.angle = -1;
        page1.add(indexAunt);

        // indexSecret
        const indexSecret = scene.add.image(312, 605, "newspaper", "indexSecret");
        indexSecret.scaleX = 0.77;
        indexSecret.scaleY = 0.8;
        indexSecret.angle = -1;
        page1.add(indexSecret);

        // indexJokes
        const indexJokes = scene.add.image(312, 642, "newspaper", "indexJokes");
        indexJokes.scaleX = 0.77;
        indexJokes.scaleY = 0.8;
        indexJokes.angle = -1;
        page1.add(indexJokes);

        // indexArt
        const indexArt = scene.add.image(314, 712, "newspaper", "indexArt");
        indexArt.scaleX = 0.78;
        indexArt.scaleY = 0.8;
        indexArt.angle = -1;
        page1.add(indexArt);

        // indexEvents
        const indexEvents = scene.add.image(317, 785, "newspaper", "indexEvents");
        indexEvents.scaleX = 0.78;
        indexEvents.scaleY = 0.8;
        indexEvents.angle = -1;
        page1.add(indexEvents);

        // indexPuzzle
        const indexPuzzle = scene.add.image(315, 749, "newspaper", "indexPuzzle");
        indexPuzzle.scaleX = 0.78;
        indexPuzzle.scaleY = 0.8;
        indexPuzzle.angle = -1;
        page1.add(indexPuzzle);

        // indexPoetry
        const indexPoetry = scene.add.image(314, 677, "newspaper", "indexPoetry");
        indexPoetry.scaleX = 0.78;
        indexPoetry.scaleY = 0.8;
        indexPoetry.angle = -1;
        page1.add(indexPoetry);

        // main_hero
        const main_hero = scene.add.image(871, 659, "newspaper", "main-hero");
        main_hero.angle = -1;
        page1.add(main_hero);

        // topRight
        const topRight = scene.add.image(1280, 178, "newspaper", "topRight");
        page1.add(topRight);

        // seemore
        const seemore = scene.add.image(1203, 845, "newspaper", "seemore");
        seemore.angle = -1;
        page1.add(seemore);

        // seemore_hover
        const seemore_hover = scene.add.image(1207, 846, "newspaper", "seemore-hover");
        seemore_hover.angle = -1;
        seemore_hover.setOrigin(0.516867528118305, 0.5029258363410065);
        seemore_hover.visible = false;
        page1.add(seemore_hover);

        // arrow0001
        const arrow0001 = scene.add.sprite(1287, 845, "newspaper", "arrow0001");
        arrow0001.visible = false;
        page1.add(arrow0001);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(1202, 845, 128, 128);
        rectangle_2.scaleX = 1.7195943572602626;
        rectangle_2.scaleY = 0.2553464950419123;
        rectangle_2.angle = -1;
        rectangle_2.alpha = 0.01;
        rectangle_2.isFilled = true;
        page1.add(rectangle_2);

        // buttons
        const buttons = scene.add.container(17, -34);
        buttons.visible = false;
        this.add(buttons);

        // bottomRight
        const bottomRight = scene.add.image(1387, 780, "newspaper", "bottomRight");
        buttons.add(bottomRight);

        // coins
        const coins = scene.add.text(1439, 1216, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // bottomLeft
        const bottomLeft = scene.add.image(87, 805, "newspaper", "bottomLeft");
        buttons.add(bottomLeft);

        // topRight_1
        const topRight_1 = scene.add.image(1376, 184, "newspaper", "topRight");
        buttons.add(topRight_1);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9];

        // block (components)
        new Interactive(block);

        // qbutton0002 (components)
        const qbutton0002SimpleButton = new SimpleButton(qbutton0002);
        qbutton0002SimpleButton.hoverCallback = () => this.inFanart();;
        qbutton0002SimpleButton.hoverOutCallback = () => this.outFanart();;

        // qbutton (components)
        const qbuttonSimpleButton = new SimpleButton(qbutton);
        qbuttonSimpleButton.hoverCallback = () => this.inRiddle();;
        qbuttonSimpleButton.hoverOutCallback = () => this.outRiddle();;

        // qbutton_1 (components)
        const qbutton_1SimpleButton = new SimpleButton(qbutton_1);
        qbutton_1SimpleButton.hoverCallback = () => this.inJoke();;
        qbutton_1SimpleButton.hoverOutCallback = () => this.outJoke();;

        // qbutton_2 (components)
        const qbutton_2SimpleButton = new SimpleButton(qbutton_2);
        qbutton_2SimpleButton.hoverCallback = () => this.inPoem();;
        qbutton_2SimpleButton.hoverOutCallback = () => this.outPoem();;

        // qbutton_3 (components)
        const qbutton_3SimpleButton = new SimpleButton(qbutton_3);
        qbutton_3SimpleButton.hoverCallback = () => this.inQuestion();;
        qbutton_3SimpleButton.hoverOutCallback = () => this.outQuestion();;

        // topLeft (components)
        const topLeftButton = new Button(topLeft);
        topLeftButton.spriteName = "topLeft";
        topLeftButton.callback = () => this.showPage(1);

        // bottomLeft_1 (components)
        const bottomLeft_1Button = new Button(bottomLeft_1);
        bottomLeft_1Button.spriteName = "bottomLeft";
        bottomLeft_1Button.callback = () => this.prevPage();;
        bottomLeft_1Button.activeFrame = false;

        // topRight_2 (components)
        const topRight_2Button = new Button(topRight_2);
        topRight_2Button.spriteName = "topRight";
        topRight_2Button.callback = () => this.close();
        topRight_2Button.activeFrame = false;

        // folder (components)
        const folderSimpleButton = new SimpleButton(folder);
        folderSimpleButton.callback = () => this.showSecret();;

        // close_button (components)
        const close_buttonSimpleButton = new SimpleButton(close_button);
        close_buttonSimpleButton.callback = () => this.hideSecret();;

        // qbutton0001 (components)
        new SimpleButton(qbutton0001);

        // auntGlasses (components)
        new SimpleButton(auntGlasses);

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.hoverCallback = () => this.showGlasses();;
        rectangle_1SimpleButton.hoverOutCallback = () => this.hideGlasses();;

        // weneedyou (components)
        const weneedyouButton = new Button(weneedyou);
        weneedyouButton.spriteName = "weneedyou";
        weneedyouButton.callback = () => this.showPage(8);
        weneedyouButton.activeFrame = false;

        // indexAunt (components)
        const indexAuntButton = new Button(indexAunt);
        indexAuntButton.spriteName = "indexAunt";
        indexAuntButton.callback = () => this.showPage(3);

        // indexSecret (components)
        const indexSecretButton = new Button(indexSecret);
        indexSecretButton.spriteName = "indexSecret";
        indexSecretButton.callback = () => this.showPage(4);

        // indexJokes (components)
        const indexJokesButton = new Button(indexJokes);
        indexJokesButton.spriteName = "indexJokes";
        indexJokesButton.callback = () => this.showPage(5);

        // indexArt (components)
        const indexArtButton = new Button(indexArt);
        indexArtButton.spriteName = "indexArt";
        indexArtButton.callback = () => this.showPage(6);

        // indexEvents (components)
        const indexEventsButton = new Button(indexEvents);
        indexEventsButton.spriteName = "indexEvents";
        indexEventsButton.callback = () => this.showPage(7);

        // indexPuzzle (components)
        const indexPuzzleButton = new Button(indexPuzzle);
        indexPuzzleButton.spriteName = "indexPuzzle";
        indexPuzzleButton.callback = () => this.showPage(6);

        // indexPoetry (components)
        const indexPoetryButton = new Button(indexPoetry);
        indexPoetryButton.spriteName = "indexPoetry";
        indexPoetryButton.callback = () => this.showPage(5);

        // topRight (components)
        const topRightButton = new Button(topRight);
        topRightButton.spriteName = "topRight";
        topRightButton.callback = () => this.close();
        topRightButton.pixelPerfect = true;

        // arrow0001 (components)
        const arrow0001Animation = new Animation(arrow0001);
        arrow0001Animation.key = "arrow";
        arrow0001Animation.end = 9;

        // rectangle_2 (components)
        const rectangle_2SimpleButton = new SimpleButton(rectangle_2);
        rectangle_2SimpleButton.hoverCallback = () => this.seeMore();;
        rectangle_2SimpleButton.hoverOutCallback = () => this.seeLess();;
        rectangle_2SimpleButton.callback = () => this.nextPage();;

        // bottomRight (components)
        const bottomRightButton = new Button(bottomRight);
        bottomRightButton.spriteName = "bottomRight";
        bottomRightButton.callback = () => this.nextPage();;
        bottomRightButton.activeFrame = false;

        // bottomLeft (components)
        const bottomLeftButton = new Button(bottomLeft);
        bottomLeftButton.spriteName = "bottomLeft";
        bottomLeftButton.callback = () => this.prevPage();;

        // topRight_1 (components)
        const topRight_1Button = new Button(topRight_1);
        topRight_1Button.spriteName = "topRight";
        topRight_1Button.callback = () => this.close();

        this.aunt = aunt;
        this.aunt_question = aunt_question;
        this.aunt_poem = aunt_poem;
        this.aunt_joke = aunt_joke;
        this.aunt_riddle = aunt_riddle;
        this.aunt_comic = aunt_comic;
        this.secret_hidden = secret_hidden;
        this.secret_shown = secret_shown;
        this.folder = folder;
        this.close_button = close_button;
        this.auntGlasses = auntGlasses;
        this.auntGlasses_hover = auntGlasses_hover;
        this.seemore = seemore;
        this.seemore_hover = seemore_hover;
        this.arrow0001 = arrow0001;
        this.buttons = buttons;
        this.coins = coins;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

        seeMore(){
        this.seemore_hover.visible = true;
        this.seemore.visible = false;
        this.arrow0001.visible = true;
    }
    showGlasses(){
        this.auntGlasses.visible = false;
        this.auntGlasses_hover.visible = true;
    }
    hideGlasses(){
        this.auntGlasses.visible = true;
        this.auntGlasses_hover.visible = false;
    }
    seeLess(){
        this.seemore_hover.visible = false;
        this.seemore.visible = true;
        this.arrow0001.visible = false;
    }
    showSecret(){
        this.secret_hidden.visible = false;
        this.secret_shown.visible = true;
        this.close_button.visible = true;
    }
    hideSecret(){
        this.secret_hidden.visible = true;
        this.close_button.visible = false;
        this.secret_shown.visible = false;
    }
    inQuestion(){
        this.aunt_question.visible = true;
        this.aunt.visible = false;
    }
    outQuestion(){
        this.aunt_question.visible = false;
        this.aunt.visible = true;
    }
    inPoem(){
        this.aunt_poem.visible = true;
        this.aunt.visible = false;
    }
    outPoem(){
        this.aunt_poem.visible = false;
        this.aunt.visible = true;
    }
    inJoke(){
        this.aunt_joke.visible = true;
        this.aunt.visible = false;
    }
    outJoke(){
        this.aunt_joke.visible = false;
        this.aunt.visible = true;
    }
    inRiddle(){
        this.aunt_riddle.visible = true;
        this.aunt.visible = false;
    }
    outRiddle(){
        this.aunt_riddle.visible = false;
        this.aunt.visible = true;
    }
    inFanart(){
        this.aunt_comic.visible = true;
        this.aunt.visible = false;
    }
    outFanart(){
        this.aunt_comic.visible = false;
        this.aunt.visible = true;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
