import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

import CJCard from '@scenes/games/card/CJCard'

/* START OF COMPILED CODE */

export default class CJCardBuyPack1 extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {CJCard} */
        this.pack1cjcard;
        /** @type {Phaser.GameObjects.Image} */
        this.pack1light;
        /** @type {Phaser.GameObjects.Image} */
        this.pack1pack;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pack1slicetopoff;
        /** @type {Phaser.GameObjects.Image} */
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
        const pack1pack = scene.add.image(0, 874.5, "cjcardbuy", "1kanim/cardbeginning");
        pack1pack.scaleX = 0.7385;
        pack1pack.scaleY = 0.7385;
        this.add(pack1pack);

        // pack1slicetopoff
        const pack1slicetopoff = scene.add.sprite(371, -96, "cjcardbuy", "1kanim/slicetopoff0001");
        pack1slicetopoff.visible = false;
        this.add(pack1slicetopoff);

        // pack1pack_1
        const pack1pack_1 = scene.add.image(0, 817, "cjcardbuy", "1kanim/cardbeginning");
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

        // pack1pack (components)
        const pack1packSimpleButton = new SimpleButton(pack1pack);
        pack1packSimpleButton.callback = () => this.buyPack1Step2();

        // pack1slicetopoff (components)
        const pack1slicetopoffAnimation = new Animation(pack1slicetopoff);
        pack1slicetopoffAnimation.repeat = 0;
        pack1slicetopoffAnimation.autoPlay = false;

        // pack1pack_1 (components)
        const pack1pack_1SimpleButton = new SimpleButton(pack1pack_1);
        pack1pack_1SimpleButton.callback = () => this.buyPack1Step2();

        // pack1revealbtn (components)
        const pack1revealbtnButton = new Button(pack1revealbtn);
        pack1revealbtnButton.callback = () => this.buyPack1Step3();
        pack1revealbtnButton.activeFrame = true;

        // pack1claimbtn (components)
        const pack1claimbtnButton = new Button(pack1claimbtn);
        pack1claimbtnButton.callback = () => this.buyPack1Step4();
        pack1claimbtnButton.activeFrame = true;

        this.pack1cjcard = pack1cjcard;
        this.pack1light = pack1light;
        this.pack1pack = pack1pack;
        this.pack1slicetopoff = pack1slicetopoff;
        this.pack1pack_1 = pack1pack_1;
        this.pack1revealbtn = pack1revealbtn;
        this.pack1reveal = pack1reveal;
        this.pack1claimbtn = pack1claimbtn;
        this.pack1claim = pack1claim;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    buyPack1() {
        this.scene.tweens.add({
            targets     : this.pack1pack,
            scale: 1,
            y: 0,
            //ease        : Phaser.Math.Easing.Quadratic.InOut,
            duration    : 333,
            onComplete: () => {

            }
        });
    }

    buyPack1Step2() {
        this.pack1slicetopoff.visible = true
        this.pack1slicetopoff.__Animation.play()
        this.pack1slicetopoff.on("animationcomplete", () => {
            this.scene.tweens.add({
                targets     : this.pack1pack,
                scale: 1,
                y: 573,
                //ease        : Phaser.Math.Easing.Quadratic.InOut,
                duration    : 125,
                onComplete: () => {
                    this.scene.tweens.add({
                        targets     : this.pack1light,
                        alpha: 1,
                        //ease        : Phaser.Math.Easing.Quadratic.InOut,
                        duration    : 250,
                        onComplete: () => {
                            this.scene.tweens.add({
                                targets     : this.pack1light,
                                alpha: 0,
                                //ease        : Phaser.Math.Easing.Quadratic.InOut,
                                duration    : 250,
                                onComplete: () => {

                                }
                            });
                            this.pack1cjcard.visible = true
                            this.pack1cjcard.setupCard(0)
                            this.scene.tweens.add({
                                targets     : this.pack1cjcard,
                                y: 0,
                                //ease        : Phaser.Math.Easing.Quadratic.InOut,
                                duration    : 250,
                                onComplete: () => {
                                    this.scene.tweens.add({
                                        targets     : this.pack1pack,
                                        y: 817,
                                        //ease        : Phaser.Math.Easing.Quadratic.InOut,
                                        duration    : 166,
                                        onComplete: () => {
                                            //this is the easiest way to wait atp
                                            this.scene.tweens.add({
                                                targets     : this.pack1pack,
                                                y: 817,
                                                //ease        : Phaser.Math.Easing.Quadratic.InOut,
                                                duration    : 625,
                                                onComplete: () => {
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
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        })    
    }

    buyPack1Step3() {
        let cardToGet = this.awardedCard

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
                this.pack1cjcard.setupCard(cardToGet)
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

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
