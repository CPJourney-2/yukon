import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

import CJNinjaProgressCards from './CJNinjaProgressCards'

export const preload = {
    key: 'cjninjaprogress-pack',
    url: 'assets/media/interface/game/cjninjaprogress/cjninjaprogress-pack.json',
    loadString: ['loading', 'Ninja Progress']
}

/* START OF COMPILED CODE */

export default class CJNinjaProgress extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.bgtop;
        /** @type {Phaser.GameObjects.Image} */
        this.currentBelt;
        /** @type {Phaser.GameObjects.Image} */
        this.percentage;
        /** @type {Phaser.GameObjects.Image} */
        this.nextBelt;
        /** @type {Phaser.GameObjects.Container} */
        this.normalBelts;
        /** @type {Phaser.GameObjects.Image} */
        this.fightsensay;
        /** @type {Phaser.GameObjects.Container} */
        this.fightSensayContainer;
        /** @type {Phaser.GameObjects.Container} */
        this.imANinja;
        /** @type {CJNinjaProgressCards} */
        this.cardsView;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.cardsViewMask;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // text_1
        const text_1 = scene.add.text(-660, -669, "", {});
        text_1.text = "total cards text field is Burbank Small Bold 24\ncardsViewMask is at a seemingly nonsensical place because it's +760 +480 to account for prefab position";
        text_1.setStyle({ "fontSize": "40px", "stroke": "#000", "strokeThickness":20});
        this.add(text_1);

        // bg
        const bg = scene.add.image(0, 0, "cjninjaprogress", "bg");
        this.add(bg);

        // closebtn
        const closebtn = scene.add.image(546, -315, "cjninjaprogress", "closebtn");
        this.add(closebtn);

        // bgtop
        const bgtop = scene.add.image(2, -216, "cjninjaprogress", "bgtop");
        this.add(bgtop);

        // beltsbg
        const beltsbg = scene.add.image(0, -5, "cjninjaprogress", "beltsbg");
        this.add(beltsbg);

        // normalBelts
        const normalBelts = scene.add.container(-402, 9);
        normalBelts.visible = false;
        this.add(normalBelts);

        // currentBelt
        const currentBelt = scene.add.image(0, 55, "cjninjaprogress", "bigbelt0001");
        normalBelts.add(currentBelt);

        // percentage
        const percentage = scene.add.image(430, 0, "cjninjaprogress", "percentage0001");
        normalBelts.add(percentage);

        // nextBelt
        const nextBelt = scene.add.image(841, 4, "cjninjaprogress", "minibelt0001");
        normalBelts.add(nextBelt);

        // fightSensayContainer
        const fightSensayContainer = scene.add.container(-402, -24);
        fightSensayContainer.visible = false;
        this.add(fightSensayContainer);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(836, 5, 128, 128);
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 15723482;
        fightSensayContainer.add(rectangle_1);

        // rectangle
        const rectangle = scene.add.rectangle(0, 0, 200, 128);
        rectangle.isFilled = true;
        rectangle.fillColor = 15723482;
        fightSensayContainer.add(rectangle);

        // fightsensay
        const fightsensay = scene.add.image(433, 5, "cjninjaprogress", "fightsensay0001");
        fightSensayContainer.add(fightsensay);

        // imANinja
        const imANinja = scene.add.container(-408, -29);
        imANinja.visible = false;
        this.add(imANinja);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(0, 0, 200, 128);
        rectangle_2.isFilled = true;
        rectangle_2.fillColor = 15723482;
        imANinja.add(rectangle_2);

        // rectangle_3
        const rectangle_3 = scene.add.rectangle(836, 5, 128, 128);
        rectangle_3.isFilled = true;
        rectangle_3.fillColor = 15723482;
        imANinja.add(rectangle_3);

        // ninjamask
        const ninjamask = scene.add.image(28, 27, "cjninjaprogress", "ninjamask");
        imANinja.add(ninjamask);

        // elhideoutdeninja
        const elhideoutdeninja = scene.add.image(831, 30, "cjninjaprogress", "elhideoutdeninja");
        imANinja.add(elhideoutdeninja);

        // text_3
        const text_3 = scene.add.text(449, 27, "", {});
        text_3.setOrigin(0.5, 0.5);
        text_3.text = "Continue your journey in the\nNinja Hideout next to the dojo.";
        text_3.setStyle({ "align": "center", "color": "#333333", "fontFamily": "Burbank Small", "fontSize": "26px" });
        imANinja.add(text_3);

        // ninjabtn
        const ninjabtn = scene.add.image(-250, 242, "cjninjaprogress", "ninjabtn");
        this.add(ninjabtn);

        // ninjabtn_1
        const ninjabtn_1 = scene.add.image(250, 242, "cjninjaprogress", "ninjabtn");
        this.add(ninjabtn_1);

        // text_2
        const text_2 = scene.add.text(-393, 221, "", {});
        text_2.text = "VIEW YOUR\nCARDS";
        text_2.setStyle({ "align": "center", "color": "#736357", "fontFamily": "CCFaceFront", "fontSize": "20px", "fontStyle": "bold italic" });
        this.add(text_2);

        // cards
        const cards = scene.add.image(-173, 238, "cjninjaprogress", "cards");
        this.add(cards);

        // plus
        const plus = scene.add.image(121, 242, "cjninjaprogress", "plus");
        this.add(plus);

        // text
        const text = scene.add.text(165, 230, "", {});
        text.text = "ADD NEW CARDS";
        text.setStyle({ "align": "center", "color": "#736357", "fontFamily": "CCFaceFront", "fontSize": "20px", "fontStyle": "bold italic" });
        this.add(text);

        // cardsView
        const cardsView = new CJNinjaProgressCards(scene, 0, -575);
        cardsView.visible = false;
        cardsView.alpha = 1;
        this.add(cardsView);

        // cardsViewMask
        const cardsViewMask = scene.add.rectangle(762, 669, 1164, 800);
        cardsViewMask.visible = false;
        cardsViewMask.isFilled = true;
        this.add(cardsViewMask);

        // block (components)
        new Interactive(block);

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.callback = () => this.interface.destroyWidget(this);
        closebtnButton.activeFrame = true;

        // bgtop (components)
        const bgtopSimpleButton = new SimpleButton(bgtop);
        bgtopSimpleButton.callback = () => this.onView();

        // ninjabtn (components)
        const ninjabtnButton = new Button(ninjabtn);
        ninjabtnButton.callback = () => this.onView();
        ninjabtnButton.activeFrame = true;

        // ninjabtn_1 (components)
        const ninjabtn_1Button = new Button(ninjabtn_1);
        ninjabtn_1Button.callback = () => this.onAdd();
        ninjabtn_1Button.activeFrame = true;

        this.bgtop = bgtop;
        this.currentBelt = currentBelt;
        this.percentage = percentage;
        this.nextBelt = nextBelt;
        this.normalBelts = normalBelts;
        this.fightsensay = fightsensay;
        this.fightSensayContainer = fightSensayContainer;
        this.imANinja = imANinja;
        this.cardsView = cardsView;
        this.cardsViewMask = cardsViewMask;

        /* START-USER-CTR-CODE */
        this.cardsView.mask = this.cardsViewMask.createBitmapMask()

        this.beltFromIdx = {
            "white": 1,
            "yellow": 2,
            "orange": 3,
            "green": 4,
            "blue": 5,
            "red": 6,
            "purple": 7,
            "brown": 8,
            "black": 9,
            "ninja": 10
        }

        this.beltXps = [0, 125, 325, 525, 750, 1000, 1300, 1600, 1900, 2200]
        //this.cardsView.bg.mask = this.cardsViewBgMask.createBitmapMask()
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    setupCards(args) {
        this.world.network.events.off('get_my_cards', this.setupCards, this)
        this.cardsView.setupDummyCards(args.cards)
    }

    show() {
        super.show()

        this.world.network.events.on('get_my_cards', this.setupCards, this)
        this.network.send("get_my_cards")

        //TODO: load from server
        this.world.network.events.on('get_my_level', this.onBeltLoaded, this)
        this.world.network.send("get_my_level")
        //this.setBelt(10)
        //this.setPercentage(69)

        this.cardsView.setup()
    }

    onBeltLoaded(args) {
        this.world.network.events.off('get_my_level', this.onBeltLoaded, this)

        let beltIdx = this.beltFromIdx[args.belt]
        beltIdx = beltIdx ? beltIdx : 0

        this.setBelt(beltIdx)
        if(beltIdx < 9) {
            let xpForThisBelt = this.beltXps[beltIdx]
            let xpForNextBelt = this.beltXps[beltIdx + 1]

            let xpIHaveOverCurrentBelt = args.xp - xpForThisBelt
            let xpTotalForNextBelt = xpForNextBelt - xpForThisBelt

            let percentage = Math.floor((xpIHaveOverCurrentBelt / xpTotalForNextBelt) * 100)
            this.setPercentage(percentage)
        }

    }

    setBelt(num) {
        if(!num) num = 0

        this.normalBelts.visible = false
        this.fightSensayContainer.visible = false
        this.imANinja.visible = false

        if(num < 9) { // all belts before black
            this.normalBelts.visible = true
            this.currentBelt.visible = num != 0
            this.currentBelt.setFrame(`bigbelt${num.toString().padStart(4, '0')}`)
            this.nextBelt.setFrame(`minibelt${(num + 1).toString().padStart(4, '0')}`)
        } else if(num == 9) { //black belt
            this.fightSensayContainer.visible = true
        } else {
            this.imANinja.visible = true
        }
    }

    //takes values 0 to 100
    setPercentage(num) {
        if(num < 0) {
            num = 0
            console.warn("CJNinjaProgress: negative percentage")
        }

        if(num > 100) {
            num = 100
            console.warn("CJNinjaProgress: percentage overshoot")
        }

        this.percentage.setFrame(`percentage${(num + 1).toString().padStart(4, '0')}`)
    }

    onView() {
        this.bgtop.visible = false
        this.cardsView.visible = true
        this.scene.tweens.add({
            targets     : this.cardsView,
            scale: 1,
            y: 0,
            ease        : Phaser.Math.Easing.Quadratic.InOut,
            duration    : 500,
        });

    }

    onHideView() {

        this.scene.tweens.add({
            targets     : this.cardsView,
            scale: 1,
            y: -575,
            ease        : Phaser.Math.Easing.Quadratic.InOut,
            duration    : 500,
            onComplete: () => {
                this.bgtop.visible = true
                this.cardsView.visible = false
            }
        });
    }

    onAdd() {
        this.interface.loadWidget("CJCardBuy")    
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
