import { Button, Interactive, SimpleButton, Zone } from '@components/components'
import BookContainer from '@scenes/interface/books/BookContainer';

import OldBuyButton from '@scenes/interface/shared_prefabs/OldBuyButton'

export const preload = {
    key: 'fish-catalog-pack',
    url: 'assets/media/interface/catalogs/fish/fish-catalog-pack.json',
    loadString: ['loading', 'F.I.S.H.']
}

/* START OF COMPILED CODE */

export default class FISH extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Container} */
        this.secret_director_3;
        /** @type {Phaser.GameObjects.Container} */
        this.phone_container;
        /** @type {Phaser.GameObjects.Image} */
        this.specialdance1_0001;
        /** @type {Phaser.GameObjects.Image} */
        this.specialdance2_0001;
        /** @type {Phaser.GameObjects.Image} */
        this.specialdance3_0001;
        /** @type {Phaser.GameObjects.Image} */
        this.specialdance4_0001;
        /** @type {Phaser.GameObjects.Image} */
        this.sunglasses_secret;
        /** @type {Phaser.GameObjects.Container} */
        this.goggle_container;
        /** @type {Phaser.GameObjects.Container} */
        this.viking_container;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // block
        const block = scene.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // page11
        const page11 = scene.add.container(422, 32);
        page11.visible = false;
        this.add(page11);

        // p13
        const p13 = scene.add.image(0, 0, "fish-catalog", "pg11");
        p13.setOrigin(0, 0);
        page11.add(p13);

        // pageRight_1
        const pageRight_1 = scene.add.image(1, 658, "fish-catalog", "pg-turn");
        pageRight_1.setOrigin(0, 0);
        page11.add(pageRight_1);

        // grey_button_1
        const grey_button_1 = scene.add.image(514, 43, "main", "grey-button");
        page11.add(grey_button_1);

        // grey_x_1
        const grey_x_1 = scene.add.image(514, 42, "main", "grey-x");
        page11.add(grey_x_1);

        // page10
        const page10 = scene.add.container(104, 36);
        page10.visible = false;
        this.add(page10);

        // p_herbert
        const p_herbert = scene.add.image(-1, -4, "fish-catalog", "pg10");
        p_herbert.setOrigin(0, 0);
        page10.add(p_herbert);

        // page9
        const page9 = scene.add.container(104, 34);
        page9.visible = false;
        this.add(page9);

        // p5_aug
        const p5_aug = scene.add.image(-1, -2, "fish-catalog", "pg9");
        p5_aug.setOrigin(0, 0);
        page9.add(p5_aug);

        // page8
        const page8 = scene.add.container(104, 34);
        page8.visible = false;
        this.add(page8);

        // p4_aug
        const p4_aug = scene.add.image(-1, -2, "fish-catalog", "pg8");
        p4_aug.setOrigin(0, 0);
        page8.add(p4_aug);

        // page7
        const page7 = scene.add.container(104, 34);
        page7.visible = false;
        this.add(page7);

        // p3_aug
        const p3_aug = scene.add.image(-1, -2, "fish-catalog", "pg7");
        p3_aug.setOrigin(0, 0);
        page7.add(p3_aug);

        // secret_director
        const secret_director = scene.add.image(1161, 624, "fish-catalog", "specialdance2-0001");
        secret_director.scaleX = 0.35;
        secret_director.scaleY = 0.35;
        secret_director.alpha = 0.000001;
        secret_director.alphaTopLeft = 0.000001;
        secret_director.alphaTopRight = 0.000001;
        secret_director.alphaBottomLeft = 0.000001;
        secret_director.alphaBottomRight = 0.000001;
        page7.add(secret_director);

        // secret_director_3
        const secret_director_3 = scene.add.container(4, 0);
        secret_director_3.visible = false;
        page7.add(secret_director_3);

        // secret_director_1
        const secret_director_1 = scene.add.image(450, 300, "fish-catalog", "secret-director");
        secret_director_3.add(secret_director_1);

        // close_buttonery_3
        const close_buttonery_3 = scene.add.image(951, 599, "fish-catalog", "secret-viking");
        close_buttonery_3.scaleX = 0.03;
        close_buttonery_3.scaleY = 0.05;
        close_buttonery_3.alpha = 0.0001;
        close_buttonery_3.alphaTopLeft = 0.0001;
        close_buttonery_3.alphaTopRight = 0.0001;
        close_buttonery_3.alphaBottomLeft = 0.0001;
        close_buttonery_3.alphaBottomRight = 0.0001;
        secret_director_3.add(close_buttonery_3);

        // text_1
        const text_1 = scene.add.text(1131, 519, "", {});
        text_1.text = "x";
        text_1.setStyle({ "color": "#000000ff", "fontFamily": "CCComicrazy Regular", "fontSize": "48px", "stroke": "#000000ff" });
        page7.add(text_1);

        // text
        const text = scene.add.text(1075, 623, "", {});
        text.text = "Z";
        text.setStyle({ "color": "#000000ff", "fontFamily": "CCComicrazy Regular", "fontSize": "32px", "stroke": "#000000ff" });
        page7.add(text);

        // page6
        const page6 = scene.add.container(-95, -11);
        page6.visible = false;
        this.add(page6);

        // p2_aug
        const p2_aug = scene.add.image(-4, -2, "fish-catalog", "pg6");
        p2_aug.setOrigin(0, 0);
        page6.add(p2_aug);

        // specialdance
        const specialdance = scene.add.image(1012, 289, "fish-catalog", "specialdance1-0001");
        specialdance.scaleX = 0.3;
        specialdance.scaleY = 0.7;
        specialdance.alpha = 1e-11;
        specialdance.alphaTopLeft = 1e-11;
        specialdance.alphaTopRight = 1e-11;
        specialdance.alphaBottomLeft = 1e-11;
        specialdance.alphaBottomRight = 1e-11;
        page6.add(specialdance);

        // phone_container
        const phone_container = scene.add.container(0, 2);
        phone_container.visible = false;
        page6.add(phone_container);

        // secret_phonemsg
        const secret_phonemsg = scene.add.image(615, 342, "fish-catalog", "secret-phonemsg");
        phone_container.add(secret_phonemsg);

        // close_buttonery_2
        const close_buttonery_2 = scene.add.image(1118, 641, "fish-catalog", "secret-viking");
        close_buttonery_2.scaleX = 0.03;
        close_buttonery_2.scaleY = 0.05;
        close_buttonery_2.alpha = 0.0001;
        close_buttonery_2.alphaTopLeft = 0.0001;
        close_buttonery_2.alphaTopRight = 0.0001;
        close_buttonery_2.alphaBottomLeft = 0.0001;
        close_buttonery_2.alphaBottomRight = 0.0001;
        phone_container.add(close_buttonery_2);

        // page5
        const page5 = scene.add.container(110, 34);
        page5.visible = false;
        this.add(page5);

        // pageFour
        const pageFour = scene.add.image(-5, -2, "fish-catalog", "pg5");
        pageFour.setOrigin(0, 0);
        page5.add(pageFour);

        // buyButton_38
        const buyButton_38 = new OldBuyButton(scene, 53, 320);
        page5.add(buyButton_38);

        // buyButton
        const buyButton = new OldBuyButton(scene, 356, 148);
        page5.add(buyButton);

        // buyButton_1
        const buyButton_1 = new OldBuyButton(scene, 43, 592);
        page5.add(buyButton_1);

        // specialdance1_0001
        const specialdance1_0001 = scene.add.image(860, 310, "fish-catalog", "specialdance1-0001");
        page5.add(specialdance1_0001);

        // specialdance2_0001
        const specialdance2_0001 = scene.add.image(1107, 287, "fish-catalog", "specialdance2-0001");
        page5.add(specialdance2_0001);

        // specialdance3_0001
        const specialdance3_0001 = scene.add.image(845, 544, "fish-catalog", "specialdance3-0001");
        page5.add(specialdance3_0001);

        // specialdance4_0001
        const specialdance4_0001 = scene.add.image(1112, 525, "fish-catalog", "specialdance4-0001");
        page5.add(specialdance4_0001);

        // sunglasses_secret
        const sunglasses_secret = scene.add.image(367, 324, "fish-catalog", "specialdance4-0001");
        sunglasses_secret.scaleY = 0.2;
        sunglasses_secret.alpha = 1e-10;
        sunglasses_secret.alphaTopLeft = 1e-10;
        sunglasses_secret.alphaTopRight = 1e-10;
        sunglasses_secret.alphaBottomLeft = 1e-10;
        sunglasses_secret.alphaBottomRight = 1e-10;
        page5.add(sunglasses_secret);

        // goggle_container
        const goggle_container = scene.add.container(0, 0);
        goggle_container.name = "goggle_container";
        goggle_container.visible = false;
        page5.add(goggle_container);

        // secret_goggles
        const secret_goggles = scene.add.image(651, 380, "fish-catalog", "secret-goggles");
        goggle_container.add(secret_goggles);

        // buyButton_2
        const buyButton_2 = new OldBuyButton(scene, 488, 396);
        goggle_container.add(buyButton_2);

        // close_buttonery_1
        const close_buttonery_1 = scene.add.image(859, 488, "fish-catalog", "secret-viking");
        close_buttonery_1.scaleX = 0.03;
        close_buttonery_1.scaleY = 0.05;
        close_buttonery_1.alpha = 0.0001;
        close_buttonery_1.alphaTopLeft = 0.0001;
        close_buttonery_1.alphaTopRight = 0.0001;
        close_buttonery_1.alphaBottomLeft = 0.0001;
        close_buttonery_1.alphaBottomRight = 0.0001;
        goggle_container.add(close_buttonery_1);

        // page4
        const page4 = scene.add.container(106, 34);
        page4.visible = false;
        this.add(page4);

        // pageThree
        const pageThree = scene.add.image(-1, -2, "fish-catalog", "pg4");
        pageThree.setOrigin(0, 0);
        page4.add(pageThree);

        // rectangle_13
        const rectangle_13 = scene.add.rectangle(1143, 441, 128, 201);
        rectangle_13.scaleX = 0.9653787681029078;
        rectangle_13.scaleY = 0.5416412568394531;
        rectangle_13.alpha = 0.00001;
        rectangle_13.isFilled = true;
        page4.add(rectangle_13);

        // page3
        const page3 = scene.add.container(106, 34);
        page3.visible = false;
        this.add(page3);

        // pageTwo
        const pageTwo = scene.add.image(-1, -2, "fish-catalog", "pg3");
        pageTwo.setOrigin(0, 0);
        page3.add(pageTwo);

        // secret_one
        const secret_one = scene.add.image(379, 753, "fish-catalog", "specialdance1-0001");
        secret_one.scaleY = 0.1;
        secret_one.alpha = 1e-7;
        secret_one.alphaTopLeft = 1e-7;
        secret_one.alphaTopRight = 1e-7;
        secret_one.alphaBottomLeft = 1e-7;
        secret_one.alphaBottomRight = 1e-7;
        page3.add(secret_one);

        // viking_container
        const viking_container = scene.add.container(0, 0);
        viking_container.name = "viking_container";
        viking_container.visible = false;
        page3.add(viking_container);

        // secret_viking
        const secret_viking = scene.add.image(427, 300, "fish-catalog", "secret-viking");
        viking_container.add(secret_viking);

        // close_buttonery
        const close_buttonery = scene.add.image(926, 595, "fish-catalog", "secret-viking");
        close_buttonery.scaleX = 0.03;
        close_buttonery.scaleY = 0.05;
        close_buttonery.alpha = 0.0001;
        close_buttonery.alphaTopLeft = 0.0001;
        close_buttonery.alphaTopRight = 0.0001;
        close_buttonery.alphaBottomLeft = 0.0001;
        close_buttonery.alphaBottomRight = 0.0001;
        viking_container.add(close_buttonery);

        // page2
        const page2 = scene.add.container(106, 34);
        page2.visible = false;
        this.add(page2);

        // pageOne
        const pageOne = scene.add.image(-1, -2, "fish-catalog", "pg2");
        pageOne.setOrigin(0, 0);
        page2.add(pageOne);

        // page1
        const page1 = scene.add.container(1, -31);
        page1.visible = false;
        this.add(page1);

        // p1
        const p1 = scene.add.image(760, 480, "fish-catalog", "pg1");
        page1.add(p1);

        // grey_button_2
        const grey_button_2 = scene.add.image(1048, 107, "main", "grey-button");
        page1.add(grey_button_2);

        // grey_x_2
        const grey_x_2 = scene.add.image(1048, 106, "main", "grey-x");
        page1.add(grey_x_2);

        // pageRight_2
        const pageRight_2 = scene.add.image(937, 635, "fish-catalog", "front-turn");
        pageRight_2.setOrigin(0, 0);
        page1.add(pageRight_2);

        // buttons
        const buttons = scene.add.container(186, 47);
        buttons.visible = false;
        this.add(buttons);

        // pageRight
        const pageRight = scene.add.image(1081, 643, "fish-catalog", "pg-turn");
        pageRight.setOrigin(0, 0);
        pageRight.flipX = true;
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = scene.add.image(-81, 642, "fish-catalog", "pg-turn");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // coins
        const coins = scene.add.text(1130, 819, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // grey_button
        const grey_button = scene.add.image(1146, 28, "main", "grey-button");
        buttons.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(1146, 27, "main", "grey-x");
        buttons.add(grey_x);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11];

        // block (components)
        new Interactive(block);

        // pageRight_1 (components)
        const pageRight_1Button = new Button(pageRight_1);
        pageRight_1Button.spriteName = "pg-turn";
        pageRight_1Button.callback = () => this.prevPage();
        pageRight_1Button.pixelPerfect = true;

        // grey_button_1 (components)
        const grey_button_1Button = new Button(grey_button_1);
        grey_button_1Button.spriteName = "grey-button";
        grey_button_1Button.callback = () => this.close();
        grey_button_1Button.activeFrame = true;

        // secret_director (components)
        const secret_directorSimpleButton = new SimpleButton(secret_director);
        secret_directorSimpleButton.callback = () => this.secret_director_3.visible = true;

        // close_buttonery_3 (components)
        const close_buttonery_3SimpleButton = new SimpleButton(close_buttonery_3);
        close_buttonery_3SimpleButton.callback = () => this.hideSecrets();

        // specialdance (components)
        const specialdanceSimpleButton = new SimpleButton(specialdance);
        specialdanceSimpleButton.callback = () =>this.phone_container.visible = true;
        specialdanceSimpleButton.pixelPerfect = true;

        // close_buttonery_2 (components)
        const close_buttonery_2SimpleButton = new SimpleButton(close_buttonery_2);
        close_buttonery_2SimpleButton.callback = () => this.hideSecrets();

        // buyButton_38 (prefab fields)
        buyButton_38.item = 214;

        // buyButton (prefab fields)
        buyButton.item = 101;

        // buyButton_1 (prefab fields)
        buyButton_1.item = 261;

        // specialdance1_0001 (components)
        const specialdance1_0001SimpleButton = new SimpleButton(specialdance1_0001);
        specialdance1_0001SimpleButton.callback = () =>this.setOne();

        // specialdance2_0001 (components)
        const specialdance2_0001SimpleButton = new SimpleButton(specialdance2_0001);
        specialdance2_0001SimpleButton.callback = () =>this.setTwo();

        // specialdance3_0001 (components)
        const specialdance3_0001SimpleButton = new SimpleButton(specialdance3_0001);
        specialdance3_0001SimpleButton.callback = () =>this.setThree();

        // specialdance4_0001 (components)
        const specialdance4_0001SimpleButton = new SimpleButton(specialdance4_0001);
        specialdance4_0001SimpleButton.callback = () =>this.setFour();

        // sunglasses_secret (components)
        const sunglasses_secretSimpleButton = new SimpleButton(sunglasses_secret);
        sunglasses_secretSimpleButton.callback = () => this.goggle_container.visible = true;

        // buyButton_2 (prefab fields)
        buyButton_2.item = 102;

        // close_buttonery_1 (components)
        const close_buttonery_1SimpleButton = new SimpleButton(close_buttonery_1);
        close_buttonery_1SimpleButton.callback = () => this.hideSecrets();

        // rectangle_13 (components)
        const rectangle_13SimpleButton = new SimpleButton(rectangle_13);
        rectangle_13SimpleButton.callback = () => this.interface.prompt.showSecret(176);

        // secret_one (components)
        const secret_oneSimpleButton = new SimpleButton(secret_one);
        secret_oneSimpleButton.callback = () =>  this.viking_container.visible = true;

        // close_buttonery (components)
        const close_buttonerySimpleButton = new SimpleButton(close_buttonery);
        close_buttonerySimpleButton.callback = () => this.hideSecrets();

        // grey_button_2 (components)
        const grey_button_2Button = new Button(grey_button_2);
        grey_button_2Button.spriteName = "grey-button";
        grey_button_2Button.callback = () => this.close();
        grey_button_2Button.activeFrame = true;

        // pageRight_2 (components)
        const pageRight_2Button = new Button(pageRight_2);
        pageRight_2Button.spriteName = "front-turn";
        pageRight_2Button.callback = () => this.nextPage();

        // pageRight (components)
        const pageRightButton = new Button(pageRight);
        pageRightButton.spriteName = "pg-turn";
        pageRightButton.callback = () =>  {this.valuesFlush(), this.nextPage()};
        pageRightButton.pixelPerfect = true;

        // pageLeft (components)
        const pageLeftButton = new Button(pageLeft);
        pageLeftButton.spriteName = "pg-turn";
        pageLeftButton.callback = () =>  {this.valuesFlush(), this.prevPage()};
        pageLeftButton.pixelPerfect = true;

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => this.close();
        grey_buttonButton.activeFrame = true;

        this.secret_director_3 = secret_director_3;
        this.phone_container = phone_container;
        this.specialdance1_0001 = specialdance1_0001;
        this.specialdance2_0001 = specialdance2_0001;
        this.specialdance3_0001 = specialdance3_0001;
        this.specialdance4_0001 = specialdance4_0001;
        this.sunglasses_secret = sunglasses_secret;
        this.goggle_container = goggle_container;
        this.viking_container = viking_container;
        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    create() {
        super.create()


        this.setCoins(this.world.client.coins)
    }

    setCoins(coins) {
        this.coins.text = `YOUR COINS: ${coins}`
    }

    buy(item) {
        this.interface.prompt.showFurniture(item)
    }
    setOne(){
        if (this.values0 == 0){
            this.specialdance1_0001.setFrame(`specialdance1-0002`)
            this.values0 = 1
            return
        }
        else{
            this.specialdance1_0001.setFrame(`specialdance1-0001`)
            this.values0 = 0
            return
        }
    }
    setTwo(){
        if (this.values1 == 0){
            this.specialdance2_0001.setFrame(`specialdance2-0002`)
            this.values1 = 1
            return
        }
        else{
            this.specialdance2_0001.setFrame(`specialdance2-0001`)
            this.values1 = 0
            return
        }
    }
    setThree(){
        if (this.values2 == 0){
            this.specialdance3_0001.setFrame(`specialdance3-0002`)
            this.values2 = 1
            return
        }
        else{
            this.specialdance3_0001.setFrame(`specialdance3-0001`)
            this.values2 = 0
            return
        }
    }
    setFour(){
        if (this.values3 == 0){
            this.specialdance4_0001.setFrame(`specialdance4-0002`)
            this.values3 = 1
            return
        }
        else{
            this.specialdance4_0001.setFrame(`specialdance4-0001`)
            this.values3 = 0
            return
        }
    }

    valuesFlush(){
        this.specialdance1_0001.setFrame(`specialdance1-0001`)
        this.values0 = 0;
        this.specialdance2_0001.setFrame(`specialdance2-0001`)
        this.values1 = 0;
        this.specialdance3_0001.setFrame(`specialdance3-0001`)
        this.values2 = 0;
        this.specialdance4_0001.setFrame(`specialdance4-0001`)
        this.values3 = 0;
    }
    showSecretOne(){
        this.viking_container.visible = true
    }
    hideSecrets(){
        this.viking_container.visible = false
        this.goggle_container.visible = false
        this.phone_container.visible = false
        this.secret_director_3.visible = false
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
