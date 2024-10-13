import BaseContainer from "@scenes/base/BaseContainer";
import Spinner from "@scenes/interface/menus/load/Spinner"
import {Button, SimpleButton, ShowHint} from "@components/components";


/* START OF COMPILED CODE */

export default class RoomItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.name_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.ud_icon;
        /** @type {Phaser.GameObjects.Sprite} */
        this.google_icon;
        /** @type {Phaser.GameObjects.Container} */
        this.usernameControls1;
        /** @type {Phaser.GameObjects.Text} */
        this.name_txt;
        /** @type {Spinner} */
        this.spinner;
        /** @type {any} */
        this._parent;


        // name_btn
        const name_btn = scene.add.image(48, 16, "login", "larger-button0001");
        this.add(name_btn);

        // usernameControls1
        const usernameControls1 = scene.add.container(235, 16);
        this.add(usernameControls1);

        // cross_hover
        const cross_hover = scene.add.container(80, 0);
        cross_hover.visible = false;
        usernameControls1.add(cross_hover);

        // cross_hover1
        const cross_hover1 = scene.add.rectangle(0, 0, 16, 55);
        cross_hover1.angle = 45;
        cross_hover1.isFilled = true;
        cross_hover.add(cross_hover1);

        // cross_hover2
        const cross_hover2 = scene.add.rectangle(0, 0, 16, 55);
        cross_hover2.angle = -45.00000000000006;
        cross_hover2.isFilled = true;
        cross_hover.add(cross_hover2);

        // cross_left
        const cross_left = scene.add.rectangle(80.5, 0, 8, 50);
        cross_left.angle = -45.00000000000006;
        cross_left.isFilled = true;
        cross_left.fillColor = 11735827;
        usernameControls1.add(cross_left);

        // cross_right
        const cross_right = scene.add.rectangle(80.5, 0, 8, 50);
        cross_right.angle = 45;
        cross_right.isFilled = true;
        cross_right.fillColor = 11735827;
        usernameControls1.add(cross_right);

        // tick_hover
        const tick_hover = scene.add.container(0, 0);
        tick_hover.visible = false;
        usernameControls1.add(tick_hover);

        // tick_hover2
        const tick_hover2 = scene.add.rectangle(21, 0, 16, 50);
        tick_hover2.angle = 45;
        tick_hover2.isFilled = true;
        tick_hover.add(tick_hover2);

        // tick_hover1
        const tick_hover1 = scene.add.rectangle(0, 7, 16, 35);
        tick_hover1.angle = -45.00000000000006;
        tick_hover1.isFilled = true;
        tick_hover.add(tick_hover1);

        // tick_left
        const tick_left = scene.add.rectangle(0, 7.5, 8, 25);
        tick_left.angle = -45.00000000000006;
        tick_left.isFilled = true;
        tick_left.fillColor = 1153580;
        usernameControls1.add(tick_left);

        // tick_right
        const tick_right = scene.add.rectangle(19.5, 0, 8, 45);
        tick_right.angle = 45;
        tick_right.isFilled = true;
        tick_right.fillColor = 1153580;
        usernameControls1.add(tick_right);

        // reject_btn
        const reject_btn = scene.add.ellipse(80, 0, 60, 60);
        usernameControls1.add(reject_btn);

        // accept_btn
        const accept_btn = scene.add.ellipse(13, 0, 60, 60);
        usernameControls1.add(accept_btn);

        // ud_icon
        const ud_icon = scene.add.sprite(-123, 0, "msicons", "udicon");
        ud_icon.scaleX = 0.7;
        ud_icon.scaleY = 0.7;
        usernameControls1.add(ud_icon);

        // google_icon
        const google_icon = scene.add.sprite(-59, 0, "msicons", "googleicon");
        google_icon.scaleX = 0.7;
        google_icon.scaleY = 0.7;
        usernameControls1.add(google_icon);

        // name_txt
        const name_txt = scene.add.text(48, 16, "", {});
        name_txt.setOrigin(0.5, 0.5);
        name_txt.text = "Username01";
        name_txt.setStyle({ "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "40px" });
        name_txt.setPadding({"left":20});
        this.add(name_txt);

        // spinner
        const spinner = new Spinner(scene, 304, 16);
        spinner.scaleX = 0.75;
        spinner.scaleY = 0.75;
        spinner.visible = false;
        this.add(spinner);

        // name_btn (components)
        const name_btnSimpleButton = new SimpleButton(name_btn);
        name_btnSimpleButton.hoverCallback = () => this.onNameOver();
        name_btnSimpleButton.hoverOutCallback = () => this.onNameOut();
        name_btnSimpleButton.callback = () => this.onNameDown();

        // reject_btn (components)
        const reject_btnSimpleButton = new SimpleButton(reject_btn);
        reject_btnSimpleButton.hoverCallback = () => {cross_hover.visible = true};
        reject_btnSimpleButton.hoverOutCallback = () => {cross_hover.visible = false};
        reject_btnSimpleButton.callback = () => this.rejectUsername();
        const reject_btnShowHint = new ShowHint(reject_btn);
        reject_btnShowHint.text = "Reject Username";

        // accept_btn (components)
        const accept_btnSimpleButton = new SimpleButton(accept_btn);
        accept_btnSimpleButton.hoverCallback = () => {tick_hover.visible = true};
        accept_btnSimpleButton.hoverOutCallback = () => {tick_hover.visible = false};
        accept_btnSimpleButton.callback = () => this.acceptUsername();
        const accept_btnShowHint = new ShowHint(accept_btn);
        accept_btnShowHint.text = "Approve Username";

        // ud_icon (components)
        const ud_iconButton = new Button(ud_icon);
        ud_iconButton.spriteName = "udicon";
        ud_iconButton.callback = () => this.urbanDictionary();
        const ud_iconShowHint = new ShowHint(ud_icon);
        ud_iconShowHint.text = "Search Urban Dictionary";

        // google_icon (components)
        const google_iconButton = new Button(google_icon);
        google_iconButton.spriteName = "googleicon";
        google_iconButton.callback = () => this.searchUsername();
        const google_iconShowHint = new ShowHint(google_icon);
        google_iconShowHint.text = "Search Google";

        this.name_btn = name_btn;
        this.ud_icon = ud_icon;
        this.google_icon = google_icon;
        this.usernameControls1 = usernameControls1;
        this.name_txt = name_txt;
        this.spinner = spinner;

        /* START-USER-CTR-CODE */
        this.userID
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    setItem(username,userid) {
        this.name_txt.text = username
        this.userID = userid
        this.spinner.stop()
        this.usernameControls1.visible = true
        this.google_icon.visible = true
        this.ud_icon.visible = true
    }

    onNameOver() {
        this.name_btn.alpha = 0.8;
    }

    onNameOut() {
        this.name_btn.alpha = 1;
    }

    onNameDown() {
        this.network.send('get_player', {
            id: this.userID
        })
        this._parent.searchbar.style.visibility = 'hidden'
        this._parent.visible = false
    }

    acceptUsername() {
        this.network.send('verify_user', {id: this.userID, username: this.name_txt.text})
        this.spinner.start()
        this.usernameControls1.visible = false
    }

    rejectUsername() {
        this.network.send('reject_user', {id: this.userID, username: this.name_txt.text})
        this.spinner.start()
        this.usernameControls1.visible = false
    }

    searchUsername() {
        const username = encodeURIComponent(this.name_txt.text);
        const searchUrl = `https://www.google.com/search?q=${username}`;
        window.open(searchUrl, '_blank');
    }

    urbanDictionary() {
        const username = encodeURIComponent(this.name_txt.text);
        const searchUrl = `https://www.urbandictionary.com/define.php?term=${username}`;
        window.open(searchUrl, '_blank');
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
