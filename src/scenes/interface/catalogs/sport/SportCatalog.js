// You can write more code here
import BookContainer from '@scenes/interface/books/BookContainer'
import { Button, Interactive, SimpleButton } from '@components/components'

import Tag1 from '@scenes/interface/shared_prefabs/Tag1'
import Tag2 from '@scenes/interface/shared_prefabs/Tag2'
import BuyButton from '@scenes/interface/shared_prefabs/BuyButton'
import PhotoButton from '@scenes/interface/shared_prefabs/PhotoButton'

export const preload = {
    key: 'sportcatalog-pack',
    url: 'assets/media/interface/catalogs/sport/sportcatalog-pack.json',
    loadString: ['loading', 'Snow and Sports']
}
/* START OF COMPILED CODE */

export default class SportCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Container} */
        this.page8;
        /** @type {PhotoButton} */
        this.photoButtonE1;
        /** @type {PhotoButton} */
        this.photoButtonE2;
        /** @type {PhotoButton} */
        this.photoButtonE3;
        /** @type {Phaser.GameObjects.Container} */
        this.page7;
        /** @type {Phaser.GameObjects.Image} */
        this.tracksuit;
        /** @type {Phaser.GameObjects.Container} */
        this.page6;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.argentinaBtn;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.brazilBtn;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.englandBtn;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.italyBtn;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.germanyBtn;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.franceBtn;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.portugalBtn;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.usaBtn;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.spainBtn;
        /** @type {Phaser.GameObjects.Container} */
        this.flagButtons;
        /** @type {Phaser.GameObjects.Image} */
        this.countryKit;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // block
        const block = scene.add.rectangle(759, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // page9
        const page9 = scene.add.container(0, -42);
        page9.visible = false;
        this.add(page9);

        // p
        const p = scene.add.image(760, 480, "jun24-sport", "june24sport9");
        page9.add(p);

        // closeLeft_1
        const closeLeft_1 = scene.add.image(504, 196, "commonbook", "cc-close");
        closeLeft_1.flipX = true;
        page9.add(closeLeft_1);

        // pageLeft_1
        const pageLeft_1 = scene.add.image(437, 634, "commonbook", "cc-page-left");
        pageLeft_1.angle = -0.5;
        pageLeft_1.setOrigin(0, 0);
        page9.add(pageLeft_1);

        // page8
        const page8 = scene.add.container(0, -42);
        page8.visible = false;
        this.add(page8);

        // p8
        const p8 = scene.add.image(760, 480, "jun24-sport", "june24sport8");
        page8.add(p8);

        // buyButton
        const buyButton = new BuyButton(scene, 508, 662);
        page8.add(buyButton);

        // buyButton_1
        const buyButton_1 = new BuyButton(scene, 501, 424);
        page8.add(buyButton_1);

        // buyButton_2
        const buyButton_2 = new BuyButton(scene, 1139, 244);
        page8.add(buyButton_2);

        // buyButton_3
        const buyButton_3 = new BuyButton(scene, 1142, 481);
        page8.add(buyButton_3);

        // buyButton_4
        const buyButton_4 = new BuyButton(scene, 1142, 719);
        page8.add(buyButton_4);

        // page7
        const page7 = scene.add.container(0, -42);
        page7.visible = false;
        this.add(page7);

        // p7
        const p7 = scene.add.image(760, 480, "jun24-sport", "june24sport7");
        page7.add(p7);

        // photoButtonE1
        const photoButtonE1 = new PhotoButton(scene, 917, 330);
        page7.add(photoButtonE1);

        // photoButtonE2
        const photoButtonE2 = new PhotoButton(scene, 1211, 330);
        page7.add(photoButtonE2);

        // photoButtonE3
        const photoButtonE3 = new PhotoButton(scene, 1060, 625);
        page7.add(photoButtonE3);

        // tag1
        const tag1 = new Tag1(scene, 228, 417);
        tag1.angle = -23;
        page7.add(tag1);

        // tag2
        const tag2 = new Tag2(scene, 555, 386);
        tag2.angle = 30;
        page7.add(tag2);

        // page6
        const page6 = scene.add.container(0, -42);
        page6.visible = false;
        this.add(page6);

        // p6
        const p6 = scene.add.image(760, 480, "jun24-sport", "june24sport6");
        page6.add(p6);

        // tracksuit
        const tracksuit = scene.add.image(1091, 427, "jun24-sport", "blue_track_suit");
        page6.add(tracksuit);

        // blueBtn
        const blueBtn = scene.add.rectangle(303, 262, 225, 200);
        page6.add(blueBtn);

        // yellowBtn
        const yellowBtn = scene.add.rectangle(566, 371, 225, 200);
        page6.add(yellowBtn);

        // redBtn
        const redBtn = scene.add.rectangle(303, 532, 225, 200);
        page6.add(redBtn);

        // greenBtn
        const greenBtn = scene.add.rectangle(573, 666, 225, 200);
        page6.add(greenBtn);

        // page5
        const page5 = scene.add.container(0, -42);
        page5.visible = false;
        this.add(page5);

        // p5
        const p5 = scene.add.image(760, 480, "jun24-sport", "june24sport5");
        page5.add(p5);

        // tag
        const tag = new Tag1(scene, 234, 308);
        tag.angle = -14;
        page5.add(tag);

        // tag_3
        const tag_3 = new Tag1(scene, 606, 388);
        tag_3.angle = 25;
        page5.add(tag_3);

        // tag_1
        const tag_1 = new Tag2(scene, 460, 523);
        tag_1.angle = 33;
        page5.add(tag_1);

        // tag_2
        const tag_2 = new Tag2(scene, 888, 247);
        tag_2.angle = -22;
        page5.add(tag_2);

        // tag_5
        const tag_5 = new Tag2(scene, 1138, 243);
        tag_5.angle = 0;
        page5.add(tag_5);

        // tag_4
        const tag_4 = new Tag2(scene, 1227, 508);
        tag_4.angle = 23;
        page5.add(tag_4);

        // secret
        const secret = scene.add.rectangle(1176, 161, 30, 30);
        page5.add(secret);

        // secret_1
        const secret_1 = scene.add.rectangle(279, 133, 50, 50);
        page5.add(secret_1);

        // secret_2
        const secret_2 = scene.add.rectangle(555, 529, 30, 30);
        page5.add(secret_2);

        // secret_3
        const secret_3 = scene.add.rectangle(1008, 389, 30, 30);
        page5.add(secret_3);

        // secret_4
        const secret_4 = scene.add.rectangle(1134, 393, 25, 25);
        page5.add(secret_4);

        // secret_5
        const secret_5 = scene.add.rectangle(784, 213, 50, 30);
        page5.add(secret_5);

        // page4
        const page4 = scene.add.container(0, -42);
        page4.visible = false;
        this.add(page4);

        // p4
        const p4 = scene.add.image(760, 480, "jun24-sport", "june24sport4");
        page4.add(p4);

        // tag_6
        const tag_6 = new Tag1(scene, 166, 396);
        tag_6.angle = -39;
        page4.add(tag_6);

        // tag_7
        const tag_7 = new Tag2(scene, 445, 188);
        tag_7.angle = 22;
        page4.add(tag_7);

        // tag_8
        const tag_8 = new Tag1(scene, 332, 589);
        tag_8.angle = -3;
        page4.add(tag_8);

        // tag_9
        const tag_9 = new Tag1(scene, 872.7748413085938, 510.6964111328125);
        tag_9.angle = -8;
        page4.add(tag_9);

        // tag_10
        const tag_10 = new Tag2(scene, 604, 357);
        tag_10.angle = 26;
        page4.add(tag_10);

        // tag_11
        const tag_11 = new Tag2(scene, 1106, 586);
        tag_11.angle = 16;
        page4.add(tag_11);

        // tag_12
        const tag_12 = new Tag2(scene, 1196, 380);
        tag_12.angle = 31;
        page4.add(tag_12);

        // secret_6
        const secret_6 = scene.add.rectangle(1027, 225, 25, 25);
        page4.add(secret_6);

        // secret_10
        const secret_10 = scene.add.rectangle(1022, 162, 25, 25);
        page4.add(secret_10);

        // page3
        const page3 = scene.add.container(0, -42);
        page3.visible = false;
        this.add(page3);

        // p3
        const p3 = scene.add.image(760, 480, "jun24-sport", "june24sport3");
        page3.add(p3);

        // tag_13
        const tag_13 = new Tag2(scene, 1161, 415);
        tag_13.angle = 18;
        page3.add(tag_13);

        // tag_15
        const tag_15 = new Tag2(scene, 561, 530);
        tag_15.angle = 18;
        page3.add(tag_15);

        // tag_14
        const tag_14 = new Tag2(scene, 246, 273);
        tag_14.angle = -31;
        page3.add(tag_14);

        // secret_7
        const secret_7 = scene.add.rectangle(437, 410, 25, 25);
        page3.add(secret_7);

        // secret_8
        const secret_8 = scene.add.rectangle(488.8145751953125, 580.3980712890625, 25, 25);
        page3.add(secret_8);

        // secret_9
        const secret_9 = scene.add.rectangle(1010, 438, 40, 40);
        page3.add(secret_9);

        // page2
        const page2 = scene.add.container(0, -42);
        page2.visible = false;
        this.add(page2);

        // p2
        const p2 = scene.add.image(760, 480, "jun24-sport", "june24sport2");
        page2.add(p2);

        // flagButtons
        const flagButtons = scene.add.container(436, 505);
        page2.add(flagButtons);

        // argentinaBtn
        const argentinaBtn = scene.add.ellipse(-150, -140, 115, 115);
        flagButtons.add(argentinaBtn);

        // brazilBtn
        const brazilBtn = scene.add.ellipse(0.464996337890625, -139.66506958007812, 115, 115);
        flagButtons.add(brazilBtn);

        // englandBtn
        const englandBtn = scene.add.ellipse(148.751220703125, -139.19198608398438, 119, 119);
        flagButtons.add(englandBtn);

        // italyBtn
        const italyBtn = scene.add.ellipse(150, 0, 115, 115);
        flagButtons.add(italyBtn);

        // germanyBtn
        const germanyBtn = scene.add.ellipse(1, 1, 115, 115);
        flagButtons.add(germanyBtn);

        // franceBtn
        const franceBtn = scene.add.ellipse(-149, 1, 115, 115);
        flagButtons.add(franceBtn);

        // portugalBtn
        const portugalBtn = scene.add.ellipse(-150, 141, 115, 115);
        flagButtons.add(portugalBtn);

        // usaBtn
        const usaBtn = scene.add.ellipse(0, 141, 115, 115);
        flagButtons.add(usaBtn);

        // spainBtn
        const spainBtn = scene.add.ellipse(149, 140, 115, 115);
        flagButtons.add(spainBtn);

        // flags
        const flags = scene.add.image(0, 0, "jun24-sport", "flags");
        flagButtons.add(flags);

        // countryKit
        const countryKit = scene.add.image(1072, 519, "jun24-sport", "argentina 1");
        page2.add(countryKit);

        // page1
        const page1 = scene.add.container(1, -42);
        page1.visible = false;
        this.add(page1);

        // p1
        const p1 = scene.add.image(760, 480, "jun24-sport", "june24sport1");
        page1.add(p1);

        // closeRight_1
        const closeRight_1 = scene.add.image(1016, 196, "commonbook", "cc-close");
        page1.add(closeRight_1);

        // pageRight_1
        const pageRight_1 = scene.add.image(951, 633, "commonbook", "cc-page-right");
        pageRight_1.setOrigin(0, 0);
        page1.add(pageRight_1);

        // buttons
        const buttons = scene.add.container(190, 41);
        buttons.visible = false;
        this.add(buttons);

        // closeRight
        const closeRight = scene.add.image(1066, 1, "commonbook", "cc-close");
        closeRight.setOrigin(0, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = scene.add.image(1059, 548, "commonbook", "cc-page-right");
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = scene.add.image(-60, 548, "commonbook", "cc-page-left");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // coins
        const coins = scene.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9];

        // block (components)
        new Interactive(block);

        // closeLeft_1 (components)
        const closeLeft_1Button = new Button(closeLeft_1);
        closeLeft_1Button.spriteName = "cc-close";
        closeLeft_1Button.callback = () => this.close();
        closeLeft_1Button.activeFrame = true;

        // pageLeft_1 (components)
        const pageLeft_1Button = new Button(pageLeft_1);
        pageLeft_1Button.spriteName = "cc-page-left";
        pageLeft_1Button.callback = () => this.prevPage();
        pageLeft_1Button.pixelPerfect = true;

        // buyButton (prefab fields)
        buyButton.item = 2238;
        buyButton.itemType = "Furniture";

        // buyButton_1 (prefab fields)
        buyButton_1.item = 545;
        buyButton_1.itemType = "Furniture";

        // buyButton_2 (prefab fields)
        buyButton_2.item = 520;
        buyButton_2.itemType = "Furniture";

        // buyButton_3 (prefab fields)
        buyButton_3.item = 522;
        buyButton_3.itemType = "Furniture";

        // buyButton_4 (prefab fields)
        buyButton_4.item = 295;
        buyButton_4.itemType = "Furniture";

        // photoButtonE1 (prefab fields)
        photoButtonE1.itemId = 920;

        // photoButtonE2 (prefab fields)
        photoButtonE2.itemId = 918;

        // photoButtonE3 (prefab fields)
        photoButtonE3.itemId = 974;

        // tag1 (prefab fields)
        tag1.item = 722;

        // tag2 (prefab fields)
        tag2.item = 3002;

        // blueBtn (components)
        const blueBtnSimpleButton = new SimpleButton(blueBtn);
        blueBtnSimpleButton.hoverCallback = () => this.onTracksuitHover('blue');
        blueBtnSimpleButton.callback = () => this.interface.prompt.showItem(4264);

        // yellowBtn (components)
        const yellowBtnSimpleButton = new SimpleButton(yellowBtn);
        yellowBtnSimpleButton.hoverCallback = () => this.onTracksuitHover('yellow');
        yellowBtnSimpleButton.callback = () => this.interface.prompt.showItem(4266);

        // redBtn (components)
        const redBtnSimpleButton = new SimpleButton(redBtn);
        redBtnSimpleButton.hoverCallback = () => this.onTracksuitHover('red');
        redBtnSimpleButton.callback = () => this.interface.prompt.showItem(4263);

        // greenBtn (components)
        const greenBtnSimpleButton = new SimpleButton(greenBtn);
        greenBtnSimpleButton.hoverCallback = () => this.onTracksuitHover('green');
        greenBtnSimpleButton.callback = () => this.interface.prompt.showItem(4265);

        // tag (prefab fields)
        tag.item = 2027;

        // tag_3 (prefab fields)
        tag_3.item = 254;

        // tag_1 (prefab fields)
        tag_1.item = 255;

        // tag_2 (prefab fields)
        tag_2.item = 2026;

        // tag_5 (prefab fields)
        tag_5.item = 2018;

        // tag_4 (prefab fields)
        tag_4.item = 4116;

        // secret (components)
        const secretSimpleButton = new SimpleButton(secret);
        secretSimpleButton.callback = () => this.interface.prompt.showSecret(2019);

        // secret_1 (components)
        const secret_1SimpleButton = new SimpleButton(secret_1);
        secret_1SimpleButton.callback = () => this.interface.prompt.showSecret(4205);

        // secret_2 (components)
        const secret_2SimpleButton = new SimpleButton(secret_2);
        secret_2SimpleButton.callback = () => this.interface.prompt.showSecret(333);

        // secret_3 (components)
        const secret_3SimpleButton = new SimpleButton(secret_3);
        secret_3SimpleButton.callback = () => this.interface.prompt.showSecret(330);

        // secret_4 (components)
        const secret_4SimpleButton = new SimpleButton(secret_4);
        secret_4SimpleButton.callback = () => this.interface.prompt.showSecret(5138);

        // secret_5 (components)
        const secret_5SimpleButton = new SimpleButton(secret_5);
        secret_5SimpleButton.callback = () => this.interface.prompt.showSecret(5139);

        // tag_6 (prefab fields)
        tag_6.item = 720;

        // tag_7 (prefab fields)
        tag_7.item = 463;

        // tag_8 (prefab fields)
        tag_8.item = 721;

        // tag_9 (prefab fields)
        tag_9.item = 4115;

        // tag_10 (prefab fields)
        tag_10.item = 462;

        // tag_11 (prefab fields)
        tag_11.item = 726;

        // tag_12 (prefab fields)
        tag_12.item = 1078;

        // secret_6 (components)
        const secret_6SimpleButton = new SimpleButton(secret_6);
        secret_6SimpleButton.callback = () => this.interface.prompt.showSecret(453);

        // secret_10 (components)
        const secret_10SimpleButton = new SimpleButton(secret_10);
        secret_10SimpleButton.callback = () => this.interface.prompt.showSecret(118);

        // tag_13 (prefab fields)
        tag_13.item = 4091;

        // tag_15 (prefab fields)
        tag_15.item = 775;

        // tag_14 (prefab fields)
        tag_14.item = 727;

        // secret_7 (components)
        const secret_7SimpleButton = new SimpleButton(secret_7);
        secret_7SimpleButton.callback = () => this.interface.prompt.showSecret(778);

        // secret_8 (components)
        const secret_8SimpleButton = new SimpleButton(secret_8);
        secret_8SimpleButton.callback = () => this.interface.prompt.showSecret(4088);

        // secret_9 (components)
        const secret_9SimpleButton = new SimpleButton(secret_9);
        secret_9SimpleButton.callback = () => this.interface.prompt.showSecret(4346);

        // argentinaBtn (components)
        const argentinaBtnSimpleButton = new SimpleButton(argentinaBtn);
        argentinaBtnSimpleButton.hoverCallback = () => this.onKitHover('argentina');
        argentinaBtnSimpleButton.hoverOutCallback = () => this.onKitOut('argentina');
        argentinaBtnSimpleButton.callback = () => this.buyKitItem('argentina');

        // brazilBtn (components)
        const brazilBtnSimpleButton = new SimpleButton(brazilBtn);
        brazilBtnSimpleButton.hoverCallback = () => this.onKitHover('brazil');
        brazilBtnSimpleButton.hoverOutCallback = () => this.onKitOut('brazil');
        brazilBtnSimpleButton.callback = () => this.buyKitItem('brazil');

        // englandBtn (components)
        const englandBtnSimpleButton = new SimpleButton(englandBtn);
        englandBtnSimpleButton.hoverCallback = () => this.onKitHover('england');
        englandBtnSimpleButton.hoverOutCallback = () => this.onKitOut('england');
        englandBtnSimpleButton.callback = () => this.buyKitItem('england');

        // italyBtn (components)
        const italyBtnSimpleButton = new SimpleButton(italyBtn);
        italyBtnSimpleButton.hoverCallback = () => this.onKitHover('italy');
        italyBtnSimpleButton.hoverOutCallback = () => this.onKitOut('italy');
        italyBtnSimpleButton.callback = () => this.buyKitItem('italy');

        // germanyBtn (components)
        const germanyBtnSimpleButton = new SimpleButton(germanyBtn);
        germanyBtnSimpleButton.hoverCallback = () => this.onKitHover('germany');
        germanyBtnSimpleButton.hoverOutCallback = () => this.onKitOut('germany');
        germanyBtnSimpleButton.callback = () => this.buyKitItem('germany');

        // franceBtn (components)
        const franceBtnSimpleButton = new SimpleButton(franceBtn);
        franceBtnSimpleButton.hoverCallback = () => this.onKitHover('france');
        franceBtnSimpleButton.hoverOutCallback = () => this.onKitOut('france');
        franceBtnSimpleButton.callback = () => this.buyKitItem('france');

        // portugalBtn (components)
        const portugalBtnSimpleButton = new SimpleButton(portugalBtn);
        portugalBtnSimpleButton.hoverCallback = () => this.onKitHover('portugal');
        portugalBtnSimpleButton.hoverOutCallback = () => this.onKitOut('portugal');
        portugalBtnSimpleButton.callback = () => this.buyKitItem('portugal');

        // usaBtn (components)
        const usaBtnSimpleButton = new SimpleButton(usaBtn);
        usaBtnSimpleButton.hoverCallback = () => this.onKitHover('usa');
        usaBtnSimpleButton.hoverOutCallback = () => this.onKitOut('usa');
        usaBtnSimpleButton.callback = () => this.buyKitItem('usa');

        // spainBtn (components)
        const spainBtnSimpleButton = new SimpleButton(spainBtn);
        spainBtnSimpleButton.hoverCallback = () => this.onKitHover('spain');
        spainBtnSimpleButton.hoverOutCallback = () => this.onKitOut('spain');
        spainBtnSimpleButton.callback = () => this.buyKitItem('spain');

        // closeRight_1 (components)
        const closeRight_1Button = new Button(closeRight_1);
        closeRight_1Button.spriteName = "cc-close";
        closeRight_1Button.callback = () => this.close();

        // pageRight_1 (components)
        const pageRight_1Button = new Button(pageRight_1);
        pageRight_1Button.spriteName = "cc-page-right";
        pageRight_1Button.callback = () => this.nextPage();
        pageRight_1Button.pixelPerfect = true;

        // closeRight (components)
        const closeRightButton = new Button(closeRight);
        closeRightButton.spriteName = "cc-close";
        closeRightButton.callback = () => this.close();
        closeRightButton.activeFrame = true;
        closeRightButton.pixelPerfect = true;

        // pageRight (components)
        const pageRightButton = new Button(pageRight);
        pageRightButton.spriteName = "cc-page-right";
        pageRightButton.callback = () => this.nextPage();
        pageRightButton.pixelPerfect = true;

        // pageLeft (components)
        const pageLeftButton = new Button(pageLeft);
        pageLeftButton.spriteName = "cc-page-left";
        pageLeftButton.callback = () => this.prevPage();
        pageLeftButton.pixelPerfect = true;

        this.page8 = page8;
        this.photoButtonE1 = photoButtonE1;
        this.photoButtonE2 = photoButtonE2;
        this.photoButtonE3 = photoButtonE3;
        this.page7 = page7;
        this.tracksuit = tracksuit;
        this.page6 = page6;
        this.argentinaBtn = argentinaBtn;
        this.brazilBtn = brazilBtn;
        this.englandBtn = englandBtn;
        this.italyBtn = italyBtn;
        this.germanyBtn = germanyBtn;
        this.franceBtn = franceBtn;
        this.portugalBtn = portugalBtn;
        this.usaBtn = usaBtn;
        this.spainBtn = spainBtn;
        this.flagButtons = flagButtons;
        this.countryKit = countryKit;
        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(){
        super.show()
        this.onKitHover('argentina')
        this.onKitOut('argentina')
        this.onTracksuitHover('blue')

        this.kitItems = {
            'argentina': 380486,
            'brazil': 380487,
            'england': 380488,
            'france': 380489,
            'germany': 380490,
            'italy': 380491,
            'portugal': 380492,
            'usa': 380493,
            'spain': 380494,
        }

        this.trasksuitItems = {
            'blue': 4264,
            'red': 4263,
            'yellow': 4266,
            'green': 4265
        }

    }

    buyKitItem(kit) {
        this.interface.prompt.showItem(this.kitItems[kit])
    }

    onKitHover(kit){
        this.currentKit = kit
        this.countryKit.setFrame(`${kit} 1`)
        this[`${kit}Btn`].isFilled = true
    }

    onKitOut(kit){
        this[`${kit}Btn`].isFilled = false
    }

    onTracksuitHover(tracksuit){
        this.currentTracksuit = tracksuit
        this.tracksuit.setFrame(`${tracksuit}_track_suit`)
    }

    onTracksuitOut(){

    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
