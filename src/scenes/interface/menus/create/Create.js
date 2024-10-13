
// You can write more code here
import BaseScene from '@scenes/base/BaseScene'
import ColorSwatch from './models/ColorSwatch'
import Rules from './models/Rules'
import CreateDoll from './models/CreateDoll'
import MessageBubble from './models/MessageBubble'
import Spinner from '@scenes/interface/menus/load/Spinner'
import { Button, ThreeSlice, SimpleButton } from '@components/components'
import TextInput from '@engine/interface/text/TextInput'
/* START OF COMPILED CODE */

export default class Create extends BaseScene {

    constructor() {
        super("Create");

        /** @type {Phaser.GameObjects.NineSlice} */
        this.starburst;
        /** @type {Phaser.GameObjects.Text} */
        this.successTitle;
        /** @type {Phaser.GameObjects.Image} */
        this.doll_alt_body;
        /** @type {Phaser.GameObjects.Container} */
        this.success;
        /** @type {CreateDoll} */
        this.page2doll;
        /** @type {MessageBubble} */
        this.captchaError;
        /** @type {Phaser.GameObjects.Text} */
        this.page2Username;
        /** @type {Phaser.GameObjects.Container} */
        this.captcha;
        /** @type {Phaser.GameObjects.Container} */
        this._page2;
        /** @type {CreateDoll} */
        this.page1doll;
        /** @type {Phaser.GameObjects.Image} */
        this.termsTick;
        /** @type {Phaser.GameObjects.Image} */
        this.rulesTick;
        /** @type {RoundedRectangleImage} */
        this.emailInputBg;
        /** @type {RoundedRectangleImage} */
        this.emailInputBg_good;
        /** @type {RoundedRectangleImage} */
        this.emailInputBg_bad;
        /** @type {Phaser.GameObjects.Image} */
        this.emailInputBg_tickGood;
        /** @type {RoundedRectangleImage} */
        this.passInputBg;
        /** @type {RoundedRectangleImage} */
        this.passInputBg_bad;
        /** @type {RoundedRectangleImage} */
        this.passInputBg_good;
        /** @type {RoundedRectangleImage} */
        this.passConfirmInputBg;
        /** @type {RoundedRectangleImage} */
        this.passConfirmInputBg_good;
        /** @type {RoundedRectangleImage} */
        this.passConfirmInputBg_bad;
        /** @type {Phaser.GameObjects.Image} */
        this.passConfirmInputBg_tickGood;
        /** @type {Phaser.GameObjects.Image} */
        this.passInputBg_tickGood;
        /** @type {RoundedRectangleImage} */
        this.nameInputBg;
        /** @type {RoundedRectangleImage} */
        this.nameInputBg_bad;
        /** @type {RoundedRectangleImage} */
        this.nameInputBg_good;
        /** @type {Phaser.GameObjects.Image} */
        this.nameInputBg_tickGood;
        /** @type {MessageBubble} */
        this.nameError;
        /** @type {MessageBubble} */
        this.passwordError;
        /** @type {MessageBubble} */
        this.emailError;
        /** @type {MessageBubble} */
        this.agreeError;
        /** @type {Phaser.GameObjects.Container} */
        this._page1;
        /** @type {Rules} */
        this.rules;
        /** @type {Spinner} */
        this.spinner;
        /** @type {ColorSwatch[]} */
        this.swatches;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("create-pack", "assets/media/interface/menus/create/create-pack.json");
    }

    /** @returns {void} */
    _create() {

        // whitebg
        const whitebg = this.add.rectangle(760, 480, 1520, 960);
        whitebg.isFilled = true;

        // bg
        this.add.image(760, 458, "create", "bg");

        // starburst
        const starburst = this.add.nineslice(85.20000767707825, 47, "create", "starburst", 1470, 0, 762, 0, 0, 0);
        starburst.scaleX = 0.9;
        starburst.setOrigin(0, 0);
        starburst.visible = false;

        // logo
        const logo = this.add.image(242, 89, "create", "logo");
        logo.scaleX = 0.55;
        logo.scaleY = 0.55;

        // success
        const success = this.add.container(312, 41);
        success.visible = false;

        // btn_13
        const btn_13 = this.add.nineslice(701, 702, "create", "btn", 400, 100, 19, 19, 17, 16);
        success.add(btn_13);

        // playnowtxt
        const playnowtxt = this.add.text(566, 662, "", {});
        playnowtxt.text = "Play Now!";
        playnowtxt.setStyle({ "fontFamily": "Burbank Small", "fontSize": "60px", "fontStyle": "bold", "shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#1C5B90", "shadow.stroke":true,"shadow.fill":true});
        playnowtxt.setLineSpacing(-5);
        success.add(playnowtxt);

        // successTitle
        const successTitle = this.add.text(703.5, 179, "", {});
        successTitle.setOrigin(0.5, 0.5);
        successTitle.text = "Welcome to Club Penguin Journey, TestName123!";
        successTitle.setStyle({ "align": "center", "color": "#297EC7", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "60px", "fontStyle": "bold" });
        successTitle.setWordWrapWidth(600);
        success.add(successTitle);

        // successpaagraph
        const successpaagraph = this.add.text(703.5, 459.5300064086914, "", {});
        successpaagraph.setOrigin(0.5, 0.5);
        successpaagraph.text = "We're so excited that you can join us! Until you have verified your account, you will be confined to Ultimate Safe Chat.\n\nYour name will also appear as numbers until it is approved by our staff. This process can take up to 2 days at most.";
        successpaagraph.setStyle({ "align": "center", "color": "#666", "fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
        successpaagraph.setWordWrapWidth(700);
        success.add(successpaagraph);

        // doll_alt_body
        const doll_alt_body = this.add.image(109, 440, "create", "doll/alt/body");
        doll_alt_body.tintFill = true;
        success.add(doll_alt_body);

        // doll_alt_outline
        const doll_alt_outline = this.add.image(110, 482, "create", "doll/alt/outline");
        success.add(doll_alt_outline);

        // doll_alt_envelope
        const doll_alt_envelope = this.add.image(-75, 329, "create", "doll/alt/envelope");
        success.add(doll_alt_envelope);

        // bubble_1
        const bubble_1 = this.add.image(265, 172, "create", "bubble");
        success.add(bubble_1);

        // askparentotverify
        const askparentotverify = this.add.text(122, 100, "", {});
        askparentotverify.text = "Ask your parent to check their email to verify your penguin.";
        askparentotverify.setStyle({ "align": "center", "color": "#666", "fixedHeight":120,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        askparentotverify.setWordWrapWidth(300);
        success.add(askparentotverify);

        // _page2
        const _page2 = this.add.container(274, 67);

        // page2doll
        const page2doll = new CreateDoll(this, 197, 386);
        _page2.add(page2doll);

        // captchaMenu
        const captchaMenu = this.add.container(562, 267);
        _page2.add(captchaMenu);

        // captchatitle
        const captchatitle = this.add.text(5, 0, "", {});
        captchatitle.text = "Beep boop, boop beep?";
        captchatitle.setStyle({ "color": "#666", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        captchaMenu.add(captchatitle);

        // triangles6
        const triangles6 = this.add.triangle(-42, 54, 0, 128, 64, 0, 128, 128);
        triangles6.scaleX = 0.5;
        triangles6.scaleY = 0.7;
        triangles6.angle = 140;
        triangles6.isFilled = true;
        triangles6.fillColor = 2719431;
        captchaMenu.add(triangles6);

        // ellipses6
        const ellipses6 = this.add.ellipse(-64, 26, 65, 65);
        ellipses6.scaleX = 1.5;
        ellipses6.scaleY = 1.5;
        ellipses6.isFilled = true;
        ellipses6.fillColor = 2719431;
        captchaMenu.add(ellipses6);

        // step_6
        const step_6 = this.add.text(-84, -4, "", {});
        step_6.text = "5.";
        step_6.setStyle({ "fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold" });
        captchaMenu.add(step_6);

        // captchaError
        const captchaError = new MessageBubble(this, 166, -84);
        captchaError.visible = false;
        captchaMenu.add(captchaError);

        // ultimateSafeChat
        const ultimateSafeChat = this.add.container(614, 102);
        ultimateSafeChat.visible = false;
        _page2.add(ultimateSafeChat);

        // safechatTitle
        const safechatTitle = this.add.text(-117, -40, "", {});
        safechatTitle.text = "Ultimate Safe Chat (optional)";
        safechatTitle.setStyle({ "color": "#666", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        ultimateSafeChat.add(safechatTitle);

        // triangle_3s5
        const triangle_3s5 = this.add.triangle(-156, -13, 0, 128, 64, 0, 128, 128);
        triangle_3s5.scaleX = 0.41176653932112134;
        triangle_3s5.scaleY = 0.5489880561635504;
        triangle_3s5.angle = 142;
        triangle_3s5.isFilled = true;
        triangle_3s5.fillColor = 2719431;
        ultimateSafeChat.add(triangle_3s5);

        // ellipse_3s5
        const ellipse_3s5 = this.add.ellipse(-174, -37, 80, 80);
        ellipse_3s5.isFilled = true;
        ellipse_3s5.fillColor = 2719431;
        ultimateSafeChat.add(ellipse_3s5);

        // step5
        const step5 = this.add.text(-192, -65, "", {});
        step5.text = "5.";
        step5.setStyle({ "fontFamily": "Burbank Small", "fontSize": "45px", "fontStyle": "bold" });
        ultimateSafeChat.add(step5);

        // safechatTitle_1
        const safechatTitle_1 = this.add.text(-117, 2, "", {});
        safechatTitle_1.text = "If you would like, you can enable Ultimate Safe Chat for your penguin. This will allow your penguin to only send messages from a pre-selected list of phrases, and not type their own messages. This can be changed later in the in-game settings.";
        safechatTitle_1.setStyle({ "color": "#666", "fixedWidth":600,"fixedHeight":170,"fontFamily": "Burbank Small", "fontSize": "25px" });
        safechatTitle_1.setWordWrapWidth(600);
        ultimateSafeChat.add(safechatTitle_1);

        // enableSafeChatBtn
        const enableSafeChatBtn = this.add.rectangle(-100, 191, 36, 36);
        enableSafeChatBtn.isFilled = true;
        enableSafeChatBtn.isStroked = true;
        enableSafeChatBtn.strokeColor = 13553355;
        enableSafeChatBtn.lineWidth = 4;
        ultimateSafeChat.add(enableSafeChatBtn);

        // safechatTitle_2
        const safechatTitle_2 = this.add.text(-68, 176, "", {});
        safechatTitle_2.text = "Yes, enable Ultimate Safe Chat for my penguin.";
        safechatTitle_2.setStyle({ "color": "#666", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold" });
        safechatTitle_2.setWordWrapWidth(600);
        ultimateSafeChat.add(safechatTitle_2);

        // btn_12
        const btn_12 = this.add.nineslice(743, 609, "create", "btn", 400, 61, 19, 19, 17, 16);
        _page2.add(btn_12);

        // contiuetxt2
        const contiuetxt2 = this.add.text(584, 584, "", {});
        contiuetxt2.text = "Create my penguin!";
        contiuetxt2.setStyle({ "fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1C5B90", "shadow.stroke":true,"shadow.fill":true});
        contiuetxt2.setLineSpacing(-5);
        _page2.add(contiuetxt2);

        // page2Username
        const page2Username = this.add.text(197, 681, "", {});
        page2Username.setOrigin(0.5, 0.5);
        page2Username.text = "Penguin Name";
        page2Username.setStyle({ "color": "#297EC7", "fontFamily": "Burbank Small", "fontSize": "60px", "fontStyle": "bold" });
        _page2.add(page2Username);

        // captcha
        const captcha = this.add.container(570, 317);
        _page2.add(captcha);

        // _page1
        const _page1 = this.add.container(274, 67);
        _page1.visible = false;

        // page1doll
        const page1doll = new CreateDoll(this, 197, 311);
        _page1.add(page1doll);

        // agreeTerms
        const agreeTerms = this.add.container(573, 633);
        _page1.add(agreeTerms);

        // rulesAgreeBtn
        const rulesAgreeBtn = this.add.rectangle(0, 49.3031005859375, 36, 36);
        rulesAgreeBtn.isFilled = true;
        rulesAgreeBtn.isStroked = true;
        rulesAgreeBtn.strokeColor = 13553355;
        rulesAgreeBtn.lineWidth = 4;
        agreeTerms.add(rulesAgreeBtn);

        // termsAgreeBtn
        const termsAgreeBtn = this.add.rectangle(0, 0, 36, 36);
        termsAgreeBtn.isFilled = true;
        termsAgreeBtn.isStroked = true;
        termsAgreeBtn.strokeColor = 13553355;
        termsAgreeBtn.lineWidth = 4;
        agreeTerms.add(termsAgreeBtn);

        // termsTick
        const termsTick = this.add.image(6, -5, "create", "tick");
        termsTick.visible = false;
        agreeTerms.add(termsTick);

        // rulesTick
        const rulesTick = this.add.image(6, 43, "create", "tick");
        rulesTick.visible = false;
        agreeTerms.add(rulesTick);

        // iagreetothetxt
        const iagreetothetxt = this.add.text(32, -11, "", {});
        iagreetothetxt.text = "I agree to the                             and";
        iagreetothetxt.setStyle({ "color": "#666", "fontFamily": "Burbank Small", "fontSize": "17px", "fontStyle": "bold" });
        iagreetothetxt.setLineSpacing(-5);
        agreeTerms.add(iagreetothetxt);

        // termsofusetxt
        const termsofusetxt = this.add.text(145, -11, "", {});
        termsofusetxt.text = "TERMS OF USE";
        termsofusetxt.setStyle({ "color": "#135d9cff", "fontFamily": "Burbank Small", "fontSize": "17px", "fontStyle": "bold" });
        termsofusetxt.setLineSpacing(-5);
        agreeTerms.add(termsofusetxt);

        // privacyetxt_1
        const privacyetxt_1 = this.add.text(302, -11, "", {});
        privacyetxt_1.text = "PRIVACY POLICY";
        privacyetxt_1.setStyle({ "color": "#135d9cff", "fontFamily": "Burbank Small", "fontSize": "17px", "fontStyle": "bold" });
        privacyetxt_1.setLineSpacing(-5);
        agreeTerms.add(privacyetxt_1);

        // iagreetotherulestxt_1
        const iagreetotherulestxt_1 = this.add.text(32, 39, "", {});
        iagreetotherulestxt_1.text = "I agree to the   ";
        iagreetotherulestxt_1.setStyle({ "color": "#666", "fontFamily": "Burbank Small", "fontSize": "17px", "fontStyle": "bold" });
        iagreetotherulestxt_1.setLineSpacing(-5);
        agreeTerms.add(iagreetotherulestxt_1);

        // termsofusetxt_1
        const termsofusetxt_1 = this.add.text(144, 39, "", {});
        termsofusetxt_1.text = "CLUB PENGUIN RULES";
        termsofusetxt_1.setStyle({ "color": "#135d9cff", "fontFamily": "Burbank Small", "fontSize": "17px", "fontStyle": "bold" });
        termsofusetxt_1.setLineSpacing(-5);
        agreeTerms.add(termsofusetxt_1);

        // emailAddress
        const emailAddress = this.add.container(562, 450);
        _page1.add(emailAddress);

        // emailGuidelines_1
        const emailGuidelines_1 = this.add.text(28, 107, "", {});
        emailGuidelines_1.text = "Club Penguin Journey will send your parent\nan email with an activation code.";
        emailGuidelines_1.setStyle({ "color": "#666", "fontFamily": "Burbank Small", "fontSize": "21px", "fontStyle": "bold" });
        emailGuidelines_1.setLineSpacing(-5);
        emailAddress.add(emailGuidelines_1);

        // nameeeeGuidelineDot_2
        const nameeeeGuidelineDot_2 = this.add.ellipse(17, 118, 7, 7);
        nameeeeGuidelineDot_2.isFilled = true;
        nameeeeGuidelineDot_2.fillColor = 6710886;
        emailAddress.add(nameeeeGuidelineDot_2);

        // emailInputBg
        const emailInputBg = this.add.roundedRectangleImage(0, 36, 500, 65);
        emailInputBg.setOrigin(0, 0);
        emailInputBg.strokeColor = 13553355;
        emailInputBg.lineWidth = 5;
        emailInputBg.radiusTopLeft = 15;
        emailInputBg.radiusTopRight = 15;
        emailInputBg.radiusBottomLeft = 15;
        emailInputBg.radiusBottomRight = 15;
        emailAddress.add(emailInputBg);

        // emailInputBg_good
        const emailInputBg_good = this.add.roundedRectangleImage(0, 36, 500, 65);
        emailInputBg_good.setOrigin(0, 0);
        emailInputBg_good.visible = false;
        emailInputBg_good.strokeColor = 11188992;
        emailInputBg_good.lineWidth = 5;
        emailInputBg_good.radiusTopLeft = 15;
        emailInputBg_good.radiusTopRight = 15;
        emailInputBg_good.radiusBottomLeft = 15;
        emailInputBg_good.radiusBottomRight = 15;
        emailAddress.add(emailInputBg_good);

        // emailInputBg_bad
        const emailInputBg_bad = this.add.roundedRectangleImage(0, 36, 500, 65);
        emailInputBg_bad.setOrigin(0, 0);
        emailInputBg_bad.visible = false;
        emailInputBg_bad.strokeColor = 11160132;
        emailInputBg_bad.lineWidth = 5;
        emailInputBg_bad.radiusTopLeft = 15;
        emailInputBg_bad.radiusTopRight = 15;
        emailInputBg_bad.radiusBottomLeft = 15;
        emailInputBg_bad.radiusBottomRight = 15;
        emailAddress.add(emailInputBg_bad);

        // emailInputBg_tickGood
        const emailInputBg_tickGood = this.add.image(462, 70, "create", "tick");
        emailInputBg_tickGood.visible = false;
        emailInputBg_tickGood.tintFill = true;
        emailInputBg_tickGood.tintTopLeft = 11188992;
        emailInputBg_tickGood.tintTopRight = 11188992;
        emailInputBg_tickGood.tintBottomLeft = 11188992;
        emailInputBg_tickGood.tintBottomRight = 11188992;
        emailAddress.add(emailInputBg_tickGood);

        // emailTitle
        const emailTitle = this.add.text(5, 0, "", {});
        emailTitle.text = "Email Address:";
        emailTitle.setStyle({ "color": "#666", "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold" });
        emailAddress.add(emailTitle);

        // triangle
        const triangle = this.add.triangle(-45, 49, 0, 128, 64, 0, 128, 128);
        triangle.scaleX = 0.25868326716452583;
        triangle.scaleY = 0.3459647674144039;
        triangle.angle = 140;
        triangle.isFilled = true;
        triangle.fillColor = 2719431;
        emailAddress.add(triangle);

        // ellipse
        const ellipse = this.add.ellipse(-64, 26, 65, 65);
        ellipse.isFilled = true;
        ellipse.fillColor = 2719431;
        emailAddress.add(ellipse);

        // step_2
        const step_2 = this.add.text(-78, 4, "", {});
        step_2.text = "4.";
        step_2.setStyle({ "fontFamily": "Burbank Small", "fontSize": "37px", "fontStyle": "bold" });
        emailAddress.add(step_2);

        // choosePenguinColor
        const choosePenguinColor = this.add.container(567, 0);
        _page1.add(choosePenguinColor);

        // colorTitle
        const colorTitle = this.add.text(-113, 4, "", {});
        colorTitle.text = "Choose Penguin Color:";
        colorTitle.setStyle({ "color": "#666", "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold" });
        choosePenguinColor.add(colorTitle);

        // colorSwatches
        const colorSwatches = this.add.container(13, 75);
        choosePenguinColor.add(colorSwatches);

        // swatch_15
        const swatch_15 = new ColorSwatch(this, 466, 63);
        colorSwatches.add(swatch_15);

        // swatch_16
        const swatch_16 = new ColorSwatch(this, 334, 63);
        colorSwatches.add(swatch_16);

        // swatch_17
        const swatch_17 = new ColorSwatch(this, 401, 63);
        colorSwatches.add(swatch_17);

        // swatch_9
        const swatch_9 = new ColorSwatch(this, 267, 63);
        colorSwatches.add(swatch_9);

        // swatch_8
        const swatch_8 = new ColorSwatch(this, 202, 63);
        colorSwatches.add(swatch_8);

        // swatch_7
        const swatch_7 = new ColorSwatch(this, 135, 63);
        colorSwatches.add(swatch_7);

        // swatch_10
        const swatch_10 = new ColorSwatch(this, 68, 63);
        colorSwatches.add(swatch_10);

        // swatch_11
        const swatch_11 = new ColorSwatch(this, 2, 63);
        colorSwatches.add(swatch_11);

        // swatch_12
        const swatch_12 = new ColorSwatch(this, -63, 63);
        colorSwatches.add(swatch_12);

        // swatch_13
        const swatch_13 = new ColorSwatch(this, 498, 0);
        colorSwatches.add(swatch_13);

        // swatch_14
        const swatch_14 = new ColorSwatch(this, 431, 0);
        colorSwatches.add(swatch_14);

        // swatch_4
        const swatch_4 = new ColorSwatch(this, 366, 0);
        colorSwatches.add(swatch_4);

        // swatch_5
        const swatch_5 = new ColorSwatch(this, 301, 0);
        colorSwatches.add(swatch_5);

        // swatch_6
        const swatch_6 = new ColorSwatch(this, 234, 0);
        colorSwatches.add(swatch_6);

        // swatch_2
        const swatch_2 = new ColorSwatch(this, 167, 0);
        colorSwatches.add(swatch_2);

        // swatch_3
        const swatch_3 = new ColorSwatch(this, 101, 0);
        colorSwatches.add(swatch_3);

        // swatch_1
        const swatch_1 = new ColorSwatch(this, 36, 0);
        colorSwatches.add(swatch_1);

        // swatch
        const swatch = new ColorSwatch(this, -31, 0);
        colorSwatches.add(swatch);

        // swatch1
        const swatch1 = new ColorSwatch(this, -98, 0);
        colorSwatches.add(swatch1);

        // ellipse_1
        const ellipse_1 = this.add.ellipse(-166, 34, 65, 65);
        ellipse_1.isFilled = true;
        ellipse_1.fillColor = 2719431;
        choosePenguinColor.add(ellipse_1);

        // triangle_1
        const triangle_1 = this.add.triangle(-147, 57, 0, 128, 64, 0, 128, 128);
        triangle_1.scaleX = 0.25868326716452583;
        triangle_1.scaleY = 0.3459647674144039;
        triangle_1.angle = 140;
        triangle_1.isFilled = true;
        triangle_1.fillColor = 2719431;
        choosePenguinColor.add(triangle_1);

        // step_1
        const step_1 = this.add.text(-181, 9, "", {});
        step_1.text = "2.";
        step_1.setStyle({ "fontFamily": "Burbank Small", "fontSize": "37px", "fontStyle": "bold" });
        choosePenguinColor.add(step_1);

        // createPassword
        const createPassword = this.add.container(562, 204);
        _page1.add(createPassword);

        // passInputBg
        const passInputBg = this.add.roundedRectangleImage(0, 36, 500, 65);
        passInputBg.setOrigin(0, 0);
        passInputBg.strokeColor = 13553355;
        passInputBg.lineWidth = 5;
        passInputBg.radiusTopLeft = 15;
        passInputBg.radiusTopRight = 15;
        passInputBg.radiusBottomLeft = 15;
        passInputBg.radiusBottomRight = 15;
        createPassword.add(passInputBg);

        // passInputBg_bad
        const passInputBg_bad = this.add.roundedRectangleImage(0, 36, 500, 65);
        passInputBg_bad.setOrigin(0, 0);
        passInputBg_bad.visible = false;
        passInputBg_bad.strokeColor = 11160132;
        passInputBg_bad.lineWidth = 5;
        passInputBg_bad.radiusTopLeft = 15;
        passInputBg_bad.radiusTopRight = 15;
        passInputBg_bad.radiusBottomLeft = 15;
        passInputBg_bad.radiusBottomRight = 15;
        createPassword.add(passInputBg_bad);

        // passInputBg_good
        const passInputBg_good = this.add.roundedRectangleImage(0, 36, 500, 65);
        passInputBg_good.setOrigin(0, 0);
        passInputBg_good.visible = false;
        passInputBg_good.strokeColor = 11188992;
        passInputBg_good.lineWidth = 5;
        passInputBg_good.radiusTopLeft = 15;
        passInputBg_good.radiusTopRight = 15;
        passInputBg_good.radiusBottomLeft = 15;
        passInputBg_good.radiusBottomRight = 15;
        createPassword.add(passInputBg_good);

        // passConfirmInputBg
        const passConfirmInputBg = this.add.roundedRectangleImage(0, 110, 500, 65);
        passConfirmInputBg.setOrigin(0, 0);
        passConfirmInputBg.strokeColor = 13553355;
        passConfirmInputBg.lineWidth = 5;
        passConfirmInputBg.radiusTopLeft = 15;
        passConfirmInputBg.radiusTopRight = 15;
        passConfirmInputBg.radiusBottomLeft = 15;
        passConfirmInputBg.radiusBottomRight = 15;
        createPassword.add(passConfirmInputBg);

        // passConfirmInputBg_good
        const passConfirmInputBg_good = this.add.roundedRectangleImage(0, 110, 500, 65);
        passConfirmInputBg_good.setOrigin(0, 0);
        passConfirmInputBg_good.visible = false;
        passConfirmInputBg_good.strokeColor = 11188992;
        passConfirmInputBg_good.lineWidth = 5;
        passConfirmInputBg_good.radiusTopLeft = 15;
        passConfirmInputBg_good.radiusTopRight = 15;
        passConfirmInputBg_good.radiusBottomLeft = 15;
        passConfirmInputBg_good.radiusBottomRight = 15;
        createPassword.add(passConfirmInputBg_good);

        // passConfirmInputBg_bad
        const passConfirmInputBg_bad = this.add.roundedRectangleImage(0, 110, 500, 65);
        passConfirmInputBg_bad.setOrigin(0, 0);
        passConfirmInputBg_bad.visible = false;
        passConfirmInputBg_bad.strokeColor = 11160132;
        passConfirmInputBg_bad.lineWidth = 5;
        passConfirmInputBg_bad.radiusTopLeft = 15;
        passConfirmInputBg_bad.radiusTopRight = 15;
        passConfirmInputBg_bad.radiusBottomLeft = 15;
        passConfirmInputBg_bad.radiusBottomRight = 15;
        createPassword.add(passConfirmInputBg_bad);

        // passConfirmInputBg_tickGood
        const passConfirmInputBg_tickGood = this.add.image(462, 142, "create", "tick");
        passConfirmInputBg_tickGood.visible = false;
        passConfirmInputBg_tickGood.tintFill = true;
        passConfirmInputBg_tickGood.tintTopLeft = 11188992;
        passConfirmInputBg_tickGood.tintTopRight = 11188992;
        passConfirmInputBg_tickGood.tintBottomLeft = 11188992;
        passConfirmInputBg_tickGood.tintBottomRight = 11188992;
        createPassword.add(passConfirmInputBg_tickGood);

        // passInputBg_tickGood
        const passInputBg_tickGood = this.add.image(462, 67, "create", "tick");
        passInputBg_tickGood.visible = false;
        passInputBg_tickGood.tintFill = true;
        passInputBg_tickGood.tintTopLeft = 11188992;
        passInputBg_tickGood.tintTopRight = 11188992;
        passInputBg_tickGood.tintBottomLeft = 11188992;
        passInputBg_tickGood.tintBottomRight = 11188992;
        createPassword.add(passInputBg_tickGood);

        // colorTitle_1
        const colorTitle_1 = this.add.text(5, 0, "", {});
        colorTitle_1.text = "Create Password:";
        colorTitle_1.setStyle({ "color": "#666", "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold" });
        createPassword.add(colorTitle_1);

        // passGuidelines
        const passGuidelines = this.add.text(28, 183, "", {});
        passGuidelines.text = "At least 8 characters, one number, one\nuppercase letter and one special character.";
        passGuidelines.setStyle({ "color": "#666", "fontFamily": "Burbank Small", "fontSize": "21px", "fontStyle": "bold" });
        passGuidelines.setLineSpacing(-5);
        createPassword.add(passGuidelines);

        // nameGuidelineDot_1
        const nameGuidelineDot_1 = this.add.ellipse(17, 194, 7, 7);
        nameGuidelineDot_1.isFilled = true;
        nameGuidelineDot_1.fillColor = 6710886;
        createPassword.add(nameGuidelineDot_1);

        // ellipse_4
        const ellipse_4 = this.add.ellipse(-64, 15, 65, 65);
        ellipse_4.isFilled = true;
        ellipse_4.fillColor = 2719431;
        createPassword.add(ellipse_4);

        // triangle_4
        const triangle_4 = this.add.triangle(-45, 38, 0, 128, 64, 0, 128, 128);
        triangle_4.scaleX = 0.25868326716452583;
        triangle_4.scaleY = 0.3459647674144039;
        triangle_4.angle = 140;
        triangle_4.isFilled = true;
        triangle_4.fillColor = 2719431;
        createPassword.add(triangle_4);

        // step3
        const step3 = this.add.text(-78, -7, "", {});
        step3.text = "3.";
        step3.setStyle({ "fontFamily": "Burbank Small", "fontSize": "37px", "fontStyle": "bold" });
        createPassword.add(step3);

        // createPenguinName
        const createPenguinName = this.add.container(0, 590);
        _page1.add(createPenguinName);

        // nameInputBg
        const nameInputBg = this.add.roundedRectangleImage(0, 46, 420, 90);
        nameInputBg.setOrigin(0, 0);
        nameInputBg.strokeColor = 13553355;
        nameInputBg.lineWidth = 5;
        createPenguinName.add(nameInputBg);

        // nameInputBg_bad
        const nameInputBg_bad = this.add.roundedRectangleImage(0, 46, 420, 90);
        nameInputBg_bad.setOrigin(0, 0);
        nameInputBg_bad.visible = false;
        nameInputBg_bad.strokeColor = 11160132;
        nameInputBg_bad.lineWidth = 5;
        createPenguinName.add(nameInputBg_bad);

        // nameInputBg_good
        const nameInputBg_good = this.add.roundedRectangleImage(0, 46, 420, 90);
        nameInputBg_good.setOrigin(0, 0);
        nameInputBg_good.visible = false;
        nameInputBg_good.strokeColor = 11188992;
        nameInputBg_good.lineWidth = 5;
        createPenguinName.add(nameInputBg_good);

        // nameInputBg_tickGood
        const nameInputBg_tickGood = this.add.image(379, 87, "create", "tick");
        nameInputBg_tickGood.visible = false;
        nameInputBg_tickGood.tintFill = true;
        nameInputBg_tickGood.tintTopLeft = 11188992;
        nameInputBg_tickGood.tintTopRight = 11188992;
        nameInputBg_tickGood.tintBottomLeft = 11188992;
        nameInputBg_tickGood.tintBottomRight = 11188992;
        createPenguinName.add(nameInputBg_tickGood);

        // nameTitle
        const nameTitle = this.add.text(2, 0, "", {});
        nameTitle.text = "Create Penguin Name:";
        nameTitle.setStyle({ "color": "#666", "fontFamily": "Burbank Small", "fontSize": "27px", "fontStyle": "bold" });
        createPenguinName.add(nameTitle);

        // nameGuidelines
        const nameGuidelines = this.add.text(23, 149, "", {});
        nameGuidelines.text = "4 - 13 letters and numbers, up to 2 spaces\nDo not use your real name";
        nameGuidelines.setStyle({ "color": "#666", "fontFamily": "Burbank Small", "fontSize": "21px", "fontStyle": "bold" });
        nameGuidelines.setLineSpacing(-5);
        createPenguinName.add(nameGuidelines);

        // nameGuidelineDot
        const nameGuidelineDot = this.add.ellipse(12, 160, 7, 7);
        nameGuidelineDot.isFilled = true;
        nameGuidelineDot.fillColor = 6710886;
        createPenguinName.add(nameGuidelineDot);

        // nameGuidelineDot2
        const nameGuidelineDot2 = this.add.ellipse(12, 183, 7, 7);
        nameGuidelineDot2.isFilled = true;
        nameGuidelineDot2.fillColor = 6710886;
        createPenguinName.add(nameGuidelineDot2);

        // triangle_3
        const triangle_3 = this.add.triangle(-54, 34, 0, 128, 64, 0, 128, 128);
        triangle_3.scaleX = 0.41176653932112134;
        triangle_3.scaleY = 0.5489880561635504;
        triangle_3.angle = 142;
        triangle_3.isFilled = true;
        triangle_3.fillColor = 2719431;
        createPenguinName.add(triangle_3);

        // ellipse_3
        const ellipse_3 = this.add.ellipse(-72, 10, 80, 80);
        ellipse_3.isFilled = true;
        ellipse_3.fillColor = 2719431;
        createPenguinName.add(ellipse_3);

        // step
        const step = this.add.text(-86, -18, "", {});
        step.text = "1.";
        step.setStyle({ "fontFamily": "Burbank Small", "fontSize": "45px", "fontStyle": "bold" });
        createPenguinName.add(step);

        // nameError
        const nameError = new MessageBubble(this, 207, -45);
        nameError.visible = false;
        createPenguinName.add(nameError);

        // passwordError
        const passwordError = new MessageBubble(this, 801, -434);
        passwordError.visible = false;
        createPenguinName.add(passwordError);

        // emailError
        const emailError = new MessageBubble(this, 788, -184);
        emailError.visible = false;
        createPenguinName.add(emailError);

        // agreeError
        const agreeError = new MessageBubble(this, 682, 194);
        agreeError.visible = false;
        createPenguinName.add(agreeError);

        // btn_1
        const btn_1 = this.add.image(997, 750, "create", "btn");
        _page1.add(btn_1);

        // arrow
        const arrow = this.add.image(1071, 756, "create", "arrow");
        _page1.add(arrow);

        // contiuetxt
        const contiuetxt = this.add.text(949, 727, "", {});
        contiuetxt.text = "Next";
        contiuetxt.setStyle({ "fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1C5B90", "shadow.stroke":true,"shadow.fill":true});
        contiuetxt.setLineSpacing(-5);
        _page1.add(contiuetxt);

        // rules
        const rules = new Rules(this, 760, 480);
        this.add.existing(rules);
        rules.visible = false;

        // spinner
        const spinner = new Spinner(this, 760, 480);
        this.add.existing(spinner);
        spinner.visible = false;
        spinner.tintFill = false;
        spinner.tintTopLeft = 0;
        spinner.tintTopRight = 0;
        spinner.tintBottomLeft = 0;
        spinner.tintBottomRight = 0;

        // lists
        const swatches = [swatch1, swatch, swatch_1, swatch_3, swatch_2, swatch_6, swatch_5, swatch_4, swatch_14, swatch_13, swatch_12, swatch_11, swatch_10, swatch_7, swatch_8, swatch_9];

        // btn_13 (components)
        const btn_13Button = new Button(btn_13);
        btn_13Button.spriteName = "btn";
        btn_13Button.callback = () => this.onPlayNow();

        // enableSafeChatBtn (components)
        const enableSafeChatBtnSimpleButton = new SimpleButton(enableSafeChatBtn);
        enableSafeChatBtnSimpleButton.callback = () => this.onSafeChatClick();

        // btn_12 (components)
        const btn_12Button = new Button(btn_12);
        btn_12Button.spriteName = "btn";
        btn_12Button.callback = () => this.sendCreatePenguin();

        // rulesAgreeBtn (components)
        const rulesAgreeBtnSimpleButton = new SimpleButton(rulesAgreeBtn);
        rulesAgreeBtnSimpleButton.callback = () => this.onRulesAgree();

        // termsAgreeBtn (components)
        const termsAgreeBtnSimpleButton = new SimpleButton(termsAgreeBtn);
        termsAgreeBtnSimpleButton.callback = () => this.onTermsAgree();

        // termsofusetxt (components)
        const termsofusetxtSimpleButton = new SimpleButton(termsofusetxt);
        termsofusetxtSimpleButton.callback = () => this.onTermsClick();

        // privacyetxt_1 (components)
        const privacyetxt_1SimpleButton = new SimpleButton(privacyetxt_1);
        privacyetxt_1SimpleButton.callback = () => this.onPrivacyClick();

        // termsofusetxt_1 (components)
        const termsofusetxt_1SimpleButton = new SimpleButton(termsofusetxt_1);
        termsofusetxt_1SimpleButton.callback = () => this.onRulesClick();

        // swatch_15 (prefab fields)
        swatch_15.swatchColor = 23;

        // swatch_16 (prefab fields)
        swatch_16.swatchColor = 21;

        // swatch_17 (prefab fields)
        swatch_17.swatchColor = 22;

        // swatch_9 (prefab fields)
        swatch_9.swatchColor = 20;

        // swatch_8 (prefab fields)
        swatch_8.swatchColor = 16;

        // swatch_7 (prefab fields)
        swatch_7.swatchColor = 15;

        // swatch_10 (prefab fields)
        swatch_10.swatchColor = 13;

        // swatch_11 (prefab fields)
        swatch_11.swatchColor = 12;

        // swatch_12 (prefab fields)
        swatch_12.swatchColor = 11;

        // swatch_13 (prefab fields)
        swatch_13.swatchColor = 10;

        // swatch_14 (prefab fields)
        swatch_14.swatchColor = 9;

        // swatch_4 (prefab fields)
        swatch_4.swatchColor = 8;

        // swatch_5 (prefab fields)
        swatch_5.swatchColor = 7;

        // swatch_6 (prefab fields)
        swatch_6.swatchColor = 6;

        // swatch_2 (prefab fields)
        swatch_2.swatchColor = 5;

        // swatch_3 (prefab fields)
        swatch_3.swatchColor = 4;

        // swatch_1 (prefab fields)
        swatch_1.swatchColor = 3;

        // swatch (prefab fields)
        swatch.swatchColor = 2;

        // swatch1 (prefab fields)
        swatch1.swatchColor = 1;

        // agreeError (prefab fields)
        agreeError.flipDownwards = true;

        // btn_1 (components)
        const btn_1Button = new Button(btn_1);
        btn_1Button.spriteName = "btn";
        btn_1Button.callback = () => this.checkPageOne();;

        this.starburst = starburst;
        this.successTitle = successTitle;
        this.doll_alt_body = doll_alt_body;
        this.success = success;
        this.page2doll = page2doll;
        this.captchaError = captchaError;
        this.page2Username = page2Username;
        this.captcha = captcha;
        this._page2 = _page2;
        this.page1doll = page1doll;
        this.termsTick = termsTick;
        this.rulesTick = rulesTick;
        this.emailInputBg = emailInputBg;
        this.emailInputBg_good = emailInputBg_good;
        this.emailInputBg_bad = emailInputBg_bad;
        this.emailInputBg_tickGood = emailInputBg_tickGood;
        this.passInputBg = passInputBg;
        this.passInputBg_bad = passInputBg_bad;
        this.passInputBg_good = passInputBg_good;
        this.passConfirmInputBg = passConfirmInputBg;
        this.passConfirmInputBg_good = passConfirmInputBg_good;
        this.passConfirmInputBg_bad = passConfirmInputBg_bad;
        this.passConfirmInputBg_tickGood = passConfirmInputBg_tickGood;
        this.passInputBg_tickGood = passInputBg_tickGood;
        this.nameInputBg = nameInputBg;
        this.nameInputBg_bad = nameInputBg_bad;
        this.nameInputBg_good = nameInputBg_good;
        this.nameInputBg_tickGood = nameInputBg_tickGood;
        this.nameError = nameError;
        this.passwordError = passwordError;
        this.emailError = emailError;
        this.agreeError = agreeError;
        this._page1 = _page1;
        this.rules = rules;
        this.spinner = spinner;
        this.swatches = swatches;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    preload() {
        this._preload()
        this.load.on('progress', this.onProgress, this)
    }

    onProgress(progress) {
        this.interface.loading.progress.scaleX = progress
    }

    create() {
        this.interface.hideLoading()
        this._create()
        this._page1.visible = true
        this._page2.visible = false
        this.success.visible = false
        this.starburst.visible = true
        this.currentSwatch = null
        this.bubbleError = null
        this.nameValid = false
        this.termsAgreed = false
        this.rulesAgreed = false
        this._networkBusy = false //this is so that someone cant spam click the button to send requests
        this.nameErrorTxt = 'Please enter a name for your penguin.'
        this.passErrorTxt = 'Please enter a password.'
        this.emailErrorTxt = 'Please enter an email.'
        this.captchaToken = "";
        //this.onSwatchClick(this.swatches[0],true)
        this.onSwatchClick(this.swatches[Math.floor(Math.random() * (this.swatches.length - 1))],true)

        //Create inputs
        this.nameRegex = /^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+){0,2}$/ //to-do: find out why it wont work
        let style = {
            filter: 'none',
            fontFamily: 'Burbank Small',
            fontWeight: 'bold',
            color: '#666'
        }
        this.usernameInput = new TextInput(this, 483, 747, 'text', {width: 380, height: 60, fontSize: 28, ...style}, () => {}, 13, false, 'create_username')
        this.emailInput = new TextInput(this, 1080, 585, 'email', {width: 450, height: 50, fontSize: 26, ...style}, () => {}, 100, false, 'create_email')
        this.passwordInput = new TextInput(this, 1080, 339, 'password', {width: 450, height: 50, fontSize: 26, ...style}, () => {}, 128, false, 'create_password', /(?!.*)/gi)
        this.passwordConfirmInput = new TextInput(this, 1080, 416, 'password', {width: 450, height: 50, fontSize: 26, ...style}, () => {}, 128, false, 'create_passwordconfirm', /(?!.*)/gi)
        document.getElementById('create_username').placeholder = 'Enter Penguin Name'
        document.getElementById('create_email').placeholder = 'Enter Parent\'s Email Address'
        document.getElementById('create_password').placeholder = 'Enter Password'
        document.getElementById('create_passwordconfirm').placeholder = 'Confirm Password'
        this.add.existing(this.usernameInput)
        this.add.existing(this.emailInput)
        this.add.existing(this.passwordInput)
        this.add.existing(this.passwordConfirmInput)
        this.textinputs = [document.getElementById('create_username'),
                           document.getElementById('create_email'),
                           document.getElementById('create_password'),
                           document.getElementById('create_passwordconfirm')
                          ]
        this.usernameInput.on('input', this.validateUsername, this);
        this.emailInput.on('input', this.validateEmail, this);
        this.passwordInput.on('input', this.validatePassword, this);
        this.passwordConfirmInput.on('input', this.validatePasswordConfirm, this);
    }

    onSwatchClick(swatch,rapidChange = false) {
        if(this.currentSwatch) {
            this.currentSwatch.outlineSelected.visible = false
            this.currentSwatch.outlineIdle.visible = true
        }
        this.currentSwatch = swatch
        let color = parseInt(this.crumbs.colors[this.currentSwatch.swatchColor - 1].slice(2),16)
        this.currentSwatch.outlineSelected.visible = true
        this.currentSwatch.outlineIdle.visible = false
        this.page1doll.changeColor(color,rapidChange)
        this.page2doll.changeColor(color,true)
        this.doll_alt_body.setTintFill(color)
        this.penguinColorId = this.currentSwatch.swatchColor
    }

    validateUsername() {
        this.nameError.visible = false
        let username = this.usernameInput.text;

        if (username.length === 0) {
            this.validateField('nameInputBg')
            this.nameErrorTxt = 'Please enter a name for your penguin.'
            return false;
        } else {
            this.validateField('nameInputBg',true)
        }

        if  (!/^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+){0,2}$/.test(username)) {
            this.validateField('nameInputBg',false)
            this.nameErrorTxt = 'Your name must only contain letters and numbers.'
            return false;
        }

        if (username.length < 4 || username.split(" ").length > 2) {
            this.validateField('nameInputBg',false)
            this.nameErrorTxt = 'Your name must be more than 4 characters long.'
            return false;
        } else {
            this.validateField('nameInputBg',true)
        }
        return true
    }

    validatePassword() {
        this.passwordError.visible = false;
        let password = this.passwordInput.text;
        let passwordConfirm = this.passwordConfirmInput.text;

        if (password.length === 0) {
            this.validateField('passInputBg')
            this.passErrorTxt = 'Please enter a password.'
            return false;
        } else {
            this.validateField('passInputBg', true)
        }

        if (password.length < 8) {
            this.validateField('passInputBg', false)
            this.passErrorTxt = 'Please ensure your password has at least 8 characters.'
            return false;
        } else {
            this.validateField('passInputBg', true)
        }

        if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:<>?]).+$/.test(password)) {
            this.validateField('passInputBg', false)
            this.passErrorTxt = 'Please ensure your password meets the requirements below.'
            return false;
        } else {
            this.validateField('passInputBg', true)
        }

        return true
    }

    validatePasswordConfirm() {
        if (!this.validatePassword()) return false;

        this.passwordError.visible = false;
        let password = this.passwordInput.text;
        let passwordConfirm = this.passwordConfirmInput.text;

        if (passwordConfirm.length === 0) {
            this.validateField('passConfirmInputBg')
            this.passErrorTxt = 'Please enter a password confirmation.'
            return false;
        } else {
            this.validateField('passConfirmInputBg', true)
        }

        if (passwordConfirm !== password) {
            this.validateField('passConfirmInputBg', false)
            this.passErrorTxt = 'Your passwords do not match.'
            return false;
        } else {
            this.validateField('passConfirmInputBg', true)
        }
        return true
    }

    validateEmail() {
        this.emailError.visible = false;
        let email = this.emailInput.text

        if (email.length === 0) {
            this.validateField('emailInputBg')
            this.emailErrorTxt = 'Please enter an email address.'
            return false;
        } else {
            this.validateField('emailInputBg', true)
        }

        if (!/^[a-zA-Z0-9._-]+@(gmail|yahoo|outlook|hotmail|icloud|protonmail).(com|com.au|co.uk|.ca)$/.test(email)) {
            this.validateField('emailInputBg',false)
            this.emailErrorTxt = 'Please enter a valid email address.'
            return
        } else {
            this.validateField('emailInputBg', true)
        }
        return true
    }

    validateField(field,valid = 'neutral') {
        if(valid == true) {
            this[`${field}_good`].visible = true
            this[`${field}_bad`].visible = false
            this[`${field}`].visible = false
            this[`${field}_tickGood`].visible = true
        } else if(valid == false) {
            this[`${field}_good`].visible = false
            this[`${field}_bad`].visible = true
            this[`${field}`].visible = false
            this[`${field}_tickGood`].visible = false
        } else if(valid == 'neutral') {
            this[`${field}_good`].visible = false
            this[`${field}_bad`].visible = false
            this[`${field}`].visible = true
            this[`${field}_tickGood`].visible = false
        }
    }

    onTermsClick() {
        window.open('https://www.cpjourney.net/terms', '_blank').focus();
    }

    onPrivacyClick() {
        window.open('https://www.cpjourney.net/privacy', '_blank').focus();
    }

    onRulesClick() {
        this.toggleInputVisibility(false)
        this.rules.visible = true
    }

    onTermsAgree() {
        this.agreeError.visible = false
        this.termsAgreed = !this.termsAgreed
        this.termsTick.visible = this.termsAgreed
    }

    onRulesAgree() {
        this.agreeError.visible = false
        this.rulesAgreed = !this.rulesAgreed
        this.rulesTick.visible = this.rulesAgreed
    }

    handleBubbleMessage(message) {
        this.validateField('nameInputBg',false)
        this.nameError.show(message)
    }

    checkPageOne() {
        if(!this.validateUsername()) {
            this.nameError.show(this.nameErrorTxt)
            return
        }

        if(!this.validatePassword()) {
            this.passwordError.show(this.passErrorTxt)
            return
        }

        if(!this.validatePasswordConfirm()) {
            this.passwordError.show(this.passErrorTxt)
            return
        }

        if(!this.validateEmail()) {
            this.emailError.show(this.emailErrorTxt)
            return
        }

        if(!this.termsAgreed) {
            this.agreeError.show('You must agree to our Terms of Use and Privacy Policy.')
            return
        }

        if(!this.rulesAgreed) {
            this.agreeError.show('You must agree to the Club Penguin Journey rules.')
            return
        }

        if(this._networkBusy) return

        this.network.registerCheck("/register_check", {username: this.usernameInput.text, email: this.emailInput.text, password: this.passwordInput.text, color: this.penguinColorId})
        this._networkBusy = true
    }

    gotoPageTwo() {
        this._networkBusy = false
        this.page2Username.text = this.usernameInput.text.toString().trim()
        this.successTitle.text = `Welcome to Club Penguin Journey, ${this.usernameInput.text.toString().trim()}!`
        this._page1.visible = false
        for(let input of this.textinputs) input.style.visibility = 'hidden'
        this._page2.visible = true
        const captchaDiv = document.createElement('div');
        captchaDiv.id = 'captcha';
        this.captcha.add(this.add.dom(0, 0, captchaDiv).setScale(1.1))
        window.hcaptcha.render('captcha', {
            sitekey: '1ac897e9-53cc-485f-90a9-ab41cdf5ab60',
            callback: (response) => {
                if (!response || response.length < 1) {
                    this.interface.prompt.showError("Invalid Captcha. Please try again.", "OK", () => {
                        this.gotoPageTwo()
                    })
                    return
                }
                if (!this.usernameInput.text) {
                    this.interface.prompt.showError("Invalid Username. Please try again.", "OK", () => {
                        this.gotoPageTwo()
                    })
                    return
                }
                if (!this.passwordInput.text) {
                    this.interface.prompt.showError("Invalid Password. Please try again.", "OK", () => {
                        this.gotoPageTwo()
                    })
                    return
                }
                if (!this.emailInput.text) {
                    this.interface.prompt.showError("Invalid Email. Please try again.", "OK", () => {
                        this.gotoPageTwo()
                    })
                    return
                }
                if (!this.penguinColorId) {
                    this.interface.prompt.showError("Invalid Color. Please try again.", "OK", () => {
                        this.gotoPageTwo()
                    })
                    return
                }
                this.captchaToken = response;
            }
        });
    }

    sendCreatePenguin() {
        if (!this.captchaToken || this.captchaToken == '') {
            this.captchaError.show('Please prove that you are not a bot.')
            return
        }
        this.network.register("/register", {captchaToken: this.captchaToken, email: this.emailInput.text, username: this.usernameInput.text, password: this.passwordInput.text, color: this.penguinColorId})
        this.captcha.destroy()
        this.spinner.start()
        this._page2.visible = false
        this.starburst.visible = false
    }

    gotoSuccess() {
        //this should run when api sends back successfully
        this.success.visible = true
        this.starburst.visible = true
        this.spinner.stop()
    }

    toggleInputVisibility(vis) {
        for(let input of this.textinputs) input.style.visibility = vis ? 'visible' : 'hidden'
    }

    onPlayNow() {
        window.location.href = 'https://play.cpjourney.net'
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
