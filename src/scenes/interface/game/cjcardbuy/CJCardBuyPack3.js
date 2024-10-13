import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

import CJCard from '@scenes/games/card/CJCard'

/* START OF COMPILED CODE */

export default class CJCardBuyPack3 extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {CJCard} */
        this.pack1cjcard;
        /** @type {Phaser.GameObjects.Image} */
        this.pack1light;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pack1pack;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pack1pack_1;
        /** @type {Phaser.GameObjects.Image} */
        this.pack1revealbtn;
        /** @type {Phaser.GameObjects.Container} */
        this.pack1reveal;
        /** @type {Phaser.GameObjects.Image} */
        this.pack1claimbtn;
        /** @type {Phaser.GameObjects.Container} */
        this.pack1claim;


        // pack1cjcard
        const pack1cjcard = new CJCard(scene, 0, 532);
        pack1cjcard.scaleX = 1.5;
        pack1cjcard.scaleY = 1.5;
        pack1cjcard.visible = false;
        this.add(pack1cjcard);

        // pack1light
        const pack1light = scene.add.image(17, -58, "cjcardbuy", "1kanim/light");
        pack1light.alpha = 0;
        pack1light.alphaTopLeft = 0;
        pack1light.alphaTopRight = 0;
        pack1light.alphaBottomLeft = 0;
        pack1light.alphaBottomRight = 0;
        this.add(pack1light);

        // pack1pack
        const pack1pack = scene.add.sprite(0, 874.5, "cjcardbuy-card3", "fireanim0001.png");
        pack1pack.scaleX = 0.7385;
        pack1pack.scaleY = 0.7385;
        this.add(pack1pack);

        // pack1pack_1
        const pack1pack_1 = scene.add.sprite(212, 412, "cjcardbuy-card3", "fireanim0001.png");
        pack1pack_1.visible = false;
        this.add(pack1pack_1);

        // pack1reveal
        const pack1reveal = scene.add.container(0, 328);
        pack1reveal.alpha = 0;
        this.add(pack1reveal);

        // pack1revealbtn
        const pack1revealbtn = scene.add.image(0, 0, "cjcardbuy", "buybtn");
        pack1revealbtn.visible = false;
        pack1reveal.add(pack1revealbtn);

        // text_2
        const text_2 = scene.add.text(0, 9, "", {});
        text_2.setOrigin(0.5, 0.5);
        text_2.text = "Reveal";
        text_2.setStyle({ "color": "#412D2D", "fontFamily": "Candombe", "fontSize": "82px" });
        pack1reveal.add(text_2);

        // pack1claim
        const pack1claim = scene.add.container(0, 328);
        pack1claim.alpha = 0;
        this.add(pack1claim);

        // pack1claimbtn
        const pack1claimbtn = scene.add.image(0, 0, "cjcardbuy", "buybtn");
        pack1claim.add(pack1claimbtn);

        // text_3
        const text_3 = scene.add.text(0, 9, "", {});
        text_3.setOrigin(0.5, 0.5);
        text_3.text = "Claim";
        text_3.setStyle({ "color": "#412D2D", "fontFamily": "Candombe", "fontSize": "82px" });
        pack1claim.add(text_3);

        // btnleft
        const btnleft = scene.add.image(-300, -298, "cjcardbuy", "btnleft");
        pack1claim.add(btnleft);

        // btnright
        const btnright = scene.add.image(300, -298, "cjcardbuy", "btnright");
        pack1claim.add(btnright);

        // pack1pack (components)
        const pack1packSimpleButton = new SimpleButton(pack1pack);
        pack1packSimpleButton.callback = () => this.buyPack1Step2();
        pack1packSimpleButton.pixelPerfect = true;

        // pack1pack_1 (components)
        const pack1pack_1SimpleButton = new SimpleButton(pack1pack_1);
        pack1pack_1SimpleButton.callback = () => this.buyPack1Step2();
        new Animation(pack1pack_1);

        // pack1revealbtn (components)
        const pack1revealbtnButton = new Button(pack1revealbtn);
        pack1revealbtnButton.callback = () => this.buyPack1Step3();
        pack1revealbtnButton.activeFrame = true;

        // pack1claimbtn (components)
        const pack1claimbtnButton = new Button(pack1claimbtn);
        pack1claimbtnButton.callback = () => this.buyPack1Step4();
        pack1claimbtnButton.activeFrame = true;

        // btnleft (components)
        const btnleftSimpleButton = new SimpleButton(btnleft);
        btnleftSimpleButton.callback = () => this.onPrev();

        // btnright (components)
        const btnrightSimpleButton = new SimpleButton(btnright);
        btnrightSimpleButton.callback = () => this.onNext();

        this.pack1cjcard = pack1cjcard;
        this.pack1light = pack1light;
        this.pack1pack = pack1pack;
        this.pack1pack_1 = pack1pack_1;
        this.pack1revealbtn = pack1revealbtn;
        this.pack1reveal = pack1reveal;
        this.pack1claimbtn = pack1claimbtn;
        this.pack1claim = pack1claim;

        /* START-USER-CTR-CODE */
        this.page = 0
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    buyPack1() {
        this.scene.tweens.add({
            targets     : this.pack1pack,
            scale: 1,
            y: -70,
            //ease        : Phaser.Math.Easing.Quadratic.InOut,
            duration    : 333,
            onComplete: () => {

            }
        });
    }

    buyPack1Step2() {
        this.pack1cjcard.visible = true
        this.pack1cjcard.setupCard(0)
        this.pack1cjcard.y = 0
        this.pack1pack.play("cjcardbuyfireanim")
        this.pack1pack.on("animationcomplete", () => {
            this.pack1pack.visible = false
            this.pack1revealbtn.visible = true
            this.scene.tweens.add({
                targets     : this.pack1reveal,
                alpha: 1,
                //ease        : Phaser.Math.Easing.Quadratic.InOut,
                duration    : 208,
                onComplete: () => {
                    this.pack1revealbtn.visible = true
                }
            });
        })    
    }

    buyPack1Step3() {

        this.pack1claimbtn.visible = true

        this.scene.tweens.add({
            targets     : this.pack1reveal,
            alpha: 0,
            //ease        : Phaser.Math.Easing.Quadratic.InOut,
            duration    : 208,
            onComplete: () => {
                this.pack1revealbtn.visible = false
            }
        });

        this.scene.tweens.add({
            targets     : this.pack1claim,
            alpha: 1,
            //ease        : Phaser.Math.Easing.Quadratic.InOut,
            duration    : 208,
            onComplete: () => {
            }
        });

        this.scene.tweens.add({
            targets     : this.pack1cjcard,
            scaleX: 0,
            //ease        : Phaser.Math.Easing.Quadratic.InOut,
            duration    : 208,
            onComplete: () => {
                this.reloadCard()
                this.scene.tweens.add({
                    targets     : this.pack1cjcard,
                    scaleX: 1.5,
                    //ease        : Phaser.Math.Easing.Quadratic.InOut,
                    duration    : 208,
                    onComplete: () => {

                    }
                });
            }
        });
    }

    buyPack1Step4() {
        this.parentContainer.onAnimFinished()
        this.destroy()
    }

    onNext() {
        this.page += 1
        if(this.page >= this.awardedCard.length) this.page = 0
		this.reloadCard()
    }

    onPrev() {
        this.page -= 1
        if(this.page >= this.awardedCard.length) this.page = this.awardedCard.length - 1
		this.reloadCard()
    }

    reloadCard() {
        this.pack1cjcard.setupCard(this.awardedCard[this.page])
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
