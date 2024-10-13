
import BaseContainer from "@scenes/base/BaseContainer";

import { Animation, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class MainVeggiePrompts extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.errorText;
        /** @type {Phaser.GameObjects.Sprite} */
        this.garyGlitch;
        /** @type {Phaser.GameObjects.Image} */
        this.garyBody;
        /** @type {Phaser.GameObjects.Sprite} */
        this.garyMouth;
        /** @type {Phaser.GameObjects.Image} */
        this.garyGlass;
        /** @type {Phaser.GameObjects.Text} */
        this.phoneText;
        /** @type {Phaser.GameObjects.Container} */
        this.garyPhone;


        // errorText
        const errorText = scene.add.text(0, -172, "", {});
        errorText.scaleX = 0.85;
        errorText.setOrigin(0.5, 0.5);
        errorText.visible = false;
        errorText.text = "this is A test of the Fonts and this is the new text prompt with lots of info but should maybe be a little bit bigger so that you can see it against everything else";
        errorText.setStyle({ "align": "center", "color": "#ffb409", "fixedWidth":1200,"fixedHeight":360,"fontFamily": "CCComicrazy", "fontSize": "30px", "fontStyle": "bold italic", "stroke": "#000", "strokeThickness":10});
        errorText.setPadding({"top":20});
        errorText.setWordWrapWidth(1100);
        this.add(errorText);

        // garyPhone
        const garyPhone = scene.add.container(0, -259);
        garyPhone.visible = false;
        this.add(garyPhone);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(6, 208, 128, 128);
        rectangle_1.scaleX = 12.270218515564197;
        rectangle_1.scaleY = 9.952467320730683;
        garyPhone.add(rectangle_1);

        // roundedrectangleimage_1
        const roundedrectangleimage_1 = scene.add.roundedRectangleImage(0, 0, 1120, 150);
        roundedrectangleimage_1.fillColor = 3368601;
        roundedrectangleimage_1.fillAlpha = 0.75;
        roundedrectangleimage_1.strokeColor = 102;
        roundedrectangleimage_1.lineWidth = 6;
        garyPhone.add(roundedrectangleimage_1);

        // garyGlitch
        const garyGlitch = scene.add.sprite(-450, -12, "garyphone", "phonebad0001");
        garyPhone.add(garyGlitch);

        // garyBody
        const garyBody = scene.add.image(-450, -11.5, "garyphone", "body");
        garyPhone.add(garyBody);

        // garyMouth
        const garyMouth = scene.add.sprite(-426, 4, "garyphone", "mouth0001");
        garyPhone.add(garyMouth);

        // garyGlass
        const garyGlass = scene.add.image(-457, -27, "garyphone", "glass");
        garyPhone.add(garyGlass);

        // phoneText
        const phoneText = scene.add.text(84, 2, "", {});
        phoneText.scaleX = 0.85;
        phoneText.setOrigin(0.5, 0.5);
        phoneText.text = "Hello there";
        phoneText.setStyle({ "align": "center", "color": "#000066", "fixedWidth":1000,"fixedHeight":100,"fontFamily": "CCComicrazy", "fontSize": "30px", "fontStyle": "bold italic", "strokeThickness":9});
        phoneText.setPadding({"top":10});
        phoneText.setWordWrapWidth(950);
        garyPhone.add(phoneText);

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.callback = () => this.onGaryPhoneClick();
        rectangle_1SimpleButton.useHandCursor = false;

        // garyGlitch (components)
        const garyGlitchAnimation = new Animation(garyGlitch);
        garyGlitchAnimation.key = "phonebad";
        garyGlitchAnimation.end = 130;
        garyGlitchAnimation.repeat = 0;
        garyGlitchAnimation.autoPlay = false;
        garyGlitchAnimation.showOnStart = true;

        // garyMouth (components)
        const garyMouthAnimation = new Animation(garyMouth);
        garyMouthAnimation.key = "mouth";
        garyMouthAnimation.end = 75;
        garyMouthAnimation.autoPlay = false;

        this.errorText = errorText;
        this.garyGlitch = garyGlitch;
        this.garyBody = garyBody;
        this.garyMouth = garyMouth;
        this.garyGlass = garyGlass;
        this.phoneText = phoneText;
        this.garyPhone = garyPhone;

        /* START-USER-CTR-CODE */
        this.errorTimer = null
        this.phoneGlitched = false
        this.phoneThing = false

        this.garyGlitch.on('animationcomplete', () => this.garyGlitch.__Animation.gotoAndPlay(101))
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    /**
     * Shows one of those orange texts with black outline, and sets a 5 second timer to hide it after.
     *
     * @param {string} text - The text to show
     */
    showError(text) {
        this.clearError()
        this.errorText.text = text
        this.errorText.visible = true

        this.errorTimer = this.scene.time.addEvent({
            delay: 5000,
            callback: () => {
                this.errorText.visible = false
                this.errorTimer = null
            }
        })
    }

    /**
     * Clears the error timer and hides the text.
     */
    clearError() {
        this.errorText.visible = false
        if(this.errorTimer) {
            this.scene.time.removeEvent(this.errorTimer)
            this.errorTimer = null
        }
    }

    showGaryPhone(text, glitched = false) {
        this.garyPhone.visible = true
        this.garyMouth.visible = !glitched
        this.garyGlass.visible = !glitched
        this.garyBody.visible = !glitched
        this.garyGlitch.visible = glitched
        this.phoneText.text = text
        this.phoneGlitched = glitched
        this.phoneThing = false

        if(glitched) {
            this.garyGlitch.__Animation.play()
        } else {
            this.garyMouth.__Animation.play()
        }
    }

    onGaryPhoneClick() {
        this.garyMouth.__Animation.stop()
        if(this.phoneGlitched && !this.phoneThing) {
            this.phoneText.text = "No Signal"
            this.garyGlitch.__Animation.gotoAndPlay(101)
            this.phoneThing = true
        } else if(this.phoneGlitched && this.phoneThing) {
            this.showError("There is no phone signal. Better get back to HQ as G asked.")
            this.garyPhone.visible = false
        } else {
            this.garyPhone.visible = false
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */