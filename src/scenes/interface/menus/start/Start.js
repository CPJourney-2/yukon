import BaseScene from '@scenes/base/BaseScene'

import { Animation, Button, SimpleButton } from '@components/components'
import YoutubePlayer from 'phaser3-rex-plugins/plugins/youtubeplayer.js';
import Carousel from './Carousel';
import UnlockPrompt from '@scenes/interface/menus/login/prompts/UnlockPrompt'

// Change to true or false to enable/disable carousel
const CAROUSEL_ACTIVE = true

/* START OF COMPILED CODE */

export default class Start extends BaseScene {

    constructor() {
        super("Start");

        /** @type {Carousel} */
        this.carousel;
        /** @type {Phaser.GameObjects.Image} */
        this.loginPenguin;
        /** @type {Phaser.GameObjects.Image} */
        this.loginPenguinHover;
        /** @type {Phaser.GameObjects.Image} */
        this.loginPenguinArm;
        /** @type {Phaser.GameObjects.Sprite} */
        this.unlock;
        /** @type {UnlockPrompt} */
        this.unlockPrompt;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("mainmenu-pack", "assets/media/mainmenu/mainmenu-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "load", "bg");
        bg.setOrigin(0, 0);

        // carousel
        const carousel = new Carousel(this, 758, 463);
        this.add.existing(carousel);
        carousel.visible = true;

        // fair24_login
        const fair24_login = this.add.image(760, 480, "fair24_login");
        fair24_login.visible = false;

        // bottom
        this.add.image(760, 770, "start", "bottom");

        // ellipse_1
        const ellipse_1 = this.add.ellipse(257, 894, 170, 70);
        ellipse_1.visible = false;
        ellipse_1.isFilled = true;
        ellipse_1.fillColor = 0;
        ellipse_1.fillAlpha = 0.2;

        // loginBtnShadow
        const loginBtnShadow = this.add.image(996, 843, "start", "start-btn-bg");
        loginBtnShadow.scaleX = 0.95;
        loginBtnShadow.scaleY = 0.9;
        loginBtnShadow.setOrigin(0.5, 0.5047619047619047);

        // loginPenguin
        const loginPenguin = this.add.image(1271, 804, "start", "login_penguin0001");
        loginPenguin.scaleX = 0.8;
        loginPenguin.scaleY = 0.8;

        // loginPenguinHover
        const loginPenguinHover = this.add.image(1271, 804, "start", "login_penguin0002");
        loginPenguinHover.scaleX = 0.8;
        loginPenguinHover.scaleY = 0.8;
        loginPenguinHover.visible = false;

        // loginBtn
        const loginBtn = this.add.image(996, 843, "start", "start-btn");
        loginBtn.scaleX = 0.95;
        loginBtn.scaleY = 0.9;

        // loginPenguinArm
        const loginPenguinArm = this.add.image(1191, 787, "start", "login_penguin_arm");
        loginPenguinArm.scaleX = 0.8;
        loginPenguinArm.scaleY = 0.8;

        // createBtnShadow
        const createBtnShadow = this.add.image(520, 843, "start", "start-btn-bg");
        createBtnShadow.scaleX = 0.95;
        createBtnShadow.scaleY = 0.9;
        createBtnShadow.setOrigin(0.5, 0.5047619047619047);

        // create_penguin
        const create_penguin = this.add.image(259, 819, "start", "create_penguin");
        create_penguin.scaleX = 0.9;
        create_penguin.scaleY = 0.9;

        // createBtn
        const createBtn = this.add.image(520.8010242855681, 843, "start", "start-btn");
        createBtn.scaleX = 0.95;
        createBtn.scaleY = 0.9;

        // loginTxt
        const loginTxt = this.add.text(991, 844, "", {});
        loginTxt.setOrigin(0.5, 0.5);
        loginTxt.text = "Login";
        loginTxt.setStyle({ "align": "center", "fixedWidth":400,"fixedHeight":70,"fontFamily": "CCFaceFront", "fontSize": "44px", "fontStyle": "italic", "stroke": "#000", "strokeThickness":10});

        // createTxt
        const createTxt = this.add.text(520, 845, "", {});
        createTxt.setOrigin(0.5, 0.5);
        createTxt.text = "Create a Penguin";
        createTxt.setStyle({ "align": "center", "fixedWidth":400,"fixedHeight":70,"fontFamily": "CCFaceFront", "fontSize": "42px", "fontStyle": "italic", "stroke": "#000", "strokeThickness":10});

        // logo
        const logo = this.add.image(760, 685, "start", "logo");
        logo.scaleX = 0.7;
        logo.scaleY = 0.7;

        // unlock
        const unlock = this.add.sprite(1351, 127, "newstart", "unlock_0001");
        unlock.scaleX = 0.85;
        unlock.scaleY = 0.85;

        // unlockPrompt
        const unlockPrompt = new UnlockPrompt(this, 760, 480);
        this.add.existing(unlockPrompt);
        unlockPrompt.visible = false;

        // loginBtn (components)
        const loginBtnButton = new Button(loginBtn);
        loginBtnButton.spriteName = "start-btn";
        loginBtnButton.hoverCallback = () => this.onStartHover();
        loginBtnButton.hoverOutCallback = () => this.onStartOut();
        loginBtnButton.callback = () => this.onStartClick();
        loginBtnButton.activeFrame = true;

        // createBtn (components)
        const createBtnButton = new Button(createBtn);
        createBtnButton.spriteName = "start-btn";
        createBtnButton.callback = () => this.onCreateClick();
        createBtnButton.activeFrame = true;

        // unlock (components)
        const unlockAnimation = new Animation(unlock);
        unlockAnimation.key = "unlock_";
        unlockAnimation.end = 200;
        const unlockSimpleButton = new SimpleButton(unlock);
        unlockSimpleButton.callback = () => { this.unlockPrompt.visible = true };

        this.carousel = carousel;
        this.loginPenguin = loginPenguin;
        this.loginPenguinHover = loginPenguinHover;
        this.loginPenguinArm = loginPenguinArm;
        this.unlock = unlock;
        this.unlockPrompt = unlockPrompt;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
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

        if (CAROUSEL_ACTIVE) {
            this.carousel.start()
        } else {
            this.carousel.visible = false
        }
    }

    generateSecret() {
        // https://stackoverflow.com/questions/9719570/generate-random-password-string-with-requirements-in-javascript
        var pwdChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var pwdLen = 32;
        localStorage.secret = new Array(pwdLen).fill(0).map(x => (function(chars) { let umax = Math.pow(2, 32), r = new Uint32Array(1), max = umax - (umax % chars.length); do { crypto.getRandomValues(r); } while(r[0] > max); return chars[r[0] % chars.length]; })(pwdChars)).join('');
    }

    onBlogClick() {
        window.location.href = 'https://cpjourney.net/news'
    }

    onStartClick() {
        this.carousel.stopTimer()

        if(!localStorage.secret) this.generateSecret()
        if (this.network.isSavedPenguins) return this.scene.start('PenguinSelect')
        this.scene.start('Login')
    }

    onStartHover() {
        this.loginPenguinArm.visible = false
        this.loginPenguin.visible = false
        this.loginPenguinHover.visible = true
    }

    onStartOut() {
        this.loginPenguinArm.visible = true
        this.loginPenguin.visible = true
        this.loginPenguinHover.visible = false
    }

    onCreateClick() {
        this.interface.showLoading(`${this.getString('loading','create')}`, true)
        this.scene.start('Create')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
