//import BaseWidget from '@interface/game/BaseWidget'
import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, NineSlice, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class Settings extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.server;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_1;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_3;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_4;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.nineslice(0, 0, "prompt", "window", 708, 600, 43, 39, 41, 39);
        this.add(bg);

        // buddies
        const buddies = scene.add.text(103, 236, "", {});
        buddies.setOrigin(0.5, 0.5);
        buddies.text = "88 Buddies";
        buddies.setStyle({ "color": "#000000ff", "fixedWidth":300,"fixedHeight":36,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(buddies);

        // icon
        const icon = scene.add.image(-97, 234, "main", "buddy/icon-online");
        this.add(icon);

        // earnbtn
        const earnbtn = scene.add.image(166, 131, "prompt", "window-button");
        this.add(earnbtn);

        // earnbtn_1
        const earnbtn_1 = scene.add.image(-156, 131, "prompt", "window-button");
        this.add(earnbtn_1);

        // account
        const account = scene.add.text(167, 132, "", {});
        account.setOrigin(0.5, 0.5);
        account.text = "Manage Account";
        account.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":300,"fixedHeight":50,"fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        this.add(account);

        // music
        const music = scene.add.text(-41, -55, "", {});
        music.setOrigin(0.5, 0.5);
        music.text = "Mute Music";
        music.setStyle({ "color": "#000", "fixedWidth":348,"fixedHeight":36,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(music);

        // age
        const age = scene.add.text(0, -120, "", {});
        age.setOrigin(0.5, 0.5);
        age.text = "Your penguin is 0 days old";
        age.setStyle({ "align": "center", "color": "#000", "fixedWidth":600,"fixedHeight":38,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(age);

        // server
        const server = scene.add.text(0, -162, "", {});
        server.setOrigin(0.5, 0.5);
        server.text = "You're on Server Name";
        server.setStyle({ "align": "center", "color": "#000", "fixedWidth":600,"fixedHeight":34,"fontFamily": "Arial Narrow", "fontSize": "30px" });
        this.add(server);

        // settings
        const settings = scene.add.text(0, -227, "", {});
        settings.setOrigin(0.5, 0.5);
        settings.text = "SETTINGS";
        settings.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        this.add(settings);

        // checkbox
        const checkbox = scene.add.image(-248, -58, "login", "checkbox");
        checkbox.setOrigin(0.41509, 0.5849);
        this.add(checkbox);

        // x_button
        const x_button = scene.add.image(300, -242, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(300, -244, "main", "blue-x");
        this.add(blue_x);

        // music_1
        const music_1 = scene.add.text(-41, -6, "", {});
        music_1.setOrigin(0.5, 0.5);
        music_1.text = "Mute SFX";
        music_1.setStyle({ "color": "#000", "fixedWidth":348,"fixedHeight":36,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(music_1);

        // checkbox_1
        const checkbox_1 = scene.add.image(-248, -8, "login", "checkbox");
        checkbox_1.setOrigin(0.41509, 0.5849);
        this.add(checkbox_1);

        // x_button_2
        const x_button_2 = scene.add.image(-295, -242, "main", "blue-button");
        this.add(x_button_2);

        // icon_2
        const icon_2 = scene.add.image(-295, -244, "main", "fullscreen");
        icon_2.scaleX = 0.7;
        icon_2.scaleY = 0.7;
        this.add(icon_2);

        // x_button_1
        const x_button_1 = scene.add.image(239, -242, "main", "blue-button");
        this.add(x_button_1);

        // icon_1
        const icon_1 = scene.add.image(222, -257, "main", "camera");
        icon_1.setOrigin(0, 0);
        this.add(icon_1);

        // checkbox_3
        const checkbox_3 = scene.add.image(-4, -58, "login", "checkbox");
        checkbox_3.setOrigin(0.41509, 0.5849);
        this.add(checkbox_3);

        // music_3
        const music_3 = scene.add.text(204, -55, "", {});
        music_3.setOrigin(0.5, 0.5);
        music_3.text = "Low Quality";
        music_3.setStyle({ "color": "#000", "fixedWidth":348,"fixedHeight":36,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(music_3);

        // unlock_badge
        const unlock_badge = scene.add.image(-266, 129, "main", "unlock-icon");
        unlock_badge.scaleX = 0.6;
        unlock_badge.scaleY = 0.6;
        this.add(unlock_badge);

        // account_1
        const account_1 = scene.add.text(-124, 132, "", {});
        account_1.setOrigin(0.5, 0.5);
        account_1.text = "Unlock Items";
        account_1.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":240,"fixedHeight":50,"fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        this.add(account_1);

        // checkbox_4
        const checkbox_4 = scene.add.image(-4, -8, "login", "checkbox");
        checkbox_4.setOrigin(0.41509, 0.5849);
        this.add(checkbox_4);

        // music_4
        const music_4 = scene.add.text(203, -7, "", {});
        music_4.setOrigin(0.5, 0.5);
        music_4.text = "Unlimited SFX";
        music_4.setStyle({ "color": "#000", "fixedWidth":348,"fixedHeight":36,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(music_4);

        // block (components)
        new Interactive(block);

        // earnbtn (components)
        const earnbtnButton = new Button(earnbtn);
        earnbtnButton.spriteName = "window-button";
        earnbtnButton.callback = () => {this.onManage()};
        earnbtnButton.activeFrame = true;

        // earnbtn_1 (components)
        const earnbtn_1Button = new Button(earnbtn_1);
        earnbtn_1Button.spriteName = "window-button";
        earnbtn_1Button.callback = () => { this.interface.loadWidget('UnlockCodes') };
        earnbtn_1Button.activeFrame = true;

        // checkbox (components)
        const checkboxSimpleButton = new SimpleButton(checkbox);
        checkboxSimpleButton.callback = () => this.onMuteClick();

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.close();
        x_buttonButton.activeFrame = true;

        // checkbox_1 (components)
        const checkbox_1SimpleButton = new SimpleButton(checkbox_1);
        checkbox_1SimpleButton.callback = () => this.onSFXClick();

        // x_button_2 (components)
        const x_button_2Button = new Button(x_button_2);
        x_button_2Button.spriteName = "blue-button";
        x_button_2Button.callback = () => { this.onFullscreen() };
        x_button_2Button.activeFrame = true;

        // x_button_1 (components)
        const x_button_1Button = new Button(x_button_1);
        x_button_1Button.spriteName = "blue-button";
        x_button_1Button.callback = () => { this.onScreenshot() };
        x_button_1Button.activeFrame = true;

        // checkbox_3 (components)
        const checkbox_3SimpleButton = new SimpleButton(checkbox_3);
        checkbox_3SimpleButton.callback = () => this.onLowQualityClick();

        // checkbox_4 (components)
        const checkbox_4SimpleButton = new SimpleButton(checkbox_4);
        checkbox_4SimpleButton.callback = () => this.onUnlimitedSFXClick();

        this.server = server;
        this.checkbox = checkbox;
        this.checkbox_1 = checkbox_1;
        this.checkbox_3 = checkbox_3;
        this.checkbox_4 = checkbox_4;

        /* START-USER-CTR-CODE */


        if (localStorage.muteMusic == 'true') {
            this.checkbox.setTexture('login', 'checkbox-active')
        }

        if (localStorage.muteSFX == 'true') {
            this.checkbox_1.setTexture('login', 'checkbox-active')
        }

        if (localStorage.lowQuality == 'true') {
            this.checkbox_3.setTexture('login', 'checkbox-active')
        }

        if (localStorage.unlimitedSFX == 'true') {
            this.checkbox_4.setTexture('login', 'checkbox-active')
        }

        let oneDay = 1000 * 60 * 60 * 24
        let timeDiff = Date.now() - Date.parse(this.world.client.joinTime)
        let daysDiff = Math.round(timeDiff / oneDay)

        age.text = `Your penguin is ${daysDiff} days old`
        buddies.text = `${this.world.client.buddies.length} Buddies`

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()
        this.server.text = `You're on ${this.network.worldName} ${this.network.worldSafe ? '(Safe-Chat)' : '(Standard-Chat)'}`
    }

    onManage() {
        //TODO: add manage lol
        this.interface.prompt.showError(`Contact support@cpjourney.net or open a ticket on support.cpjourney.net to request changes to your account`)
    }

    onFullscreen() {
        let page = document.getElementById("game-fullscreen-div")
        let scale = this.world.game.scale

        this.world.game.isCustomFullscreen ? document.exitFullscreen() : page.requestFullscreen()
        this.world.game.isCustomFullscreen = !this.world.game.isCustomFullscreen

        document.getElementById("game").style.maxWidth = "none"
        page.addEventListener("fullscreenchange", (event) => {
            if(!document.fullscreenElement) {
                document.getElementById("game").style.maxWidth = ""
                this.world.game.isCustomFullscreen = false
            }
        })
    }

    onScreenshot() {
        this.visible = false

        let text = "Hide interface and penguins?"

        if(this.interface.iglooEdit.defaultControls) this.interface.iglooEdit.defaultControls.oldVisible = this.interface.iglooEdit.defaultControls.visible
        this.interface.prompt.showWindow(text, 'dual', () => {

            this.interface.hideInterface(false)
            this.interface.hideBorder()
            this.world.room.hidePenguins()
            if(this.interface.iglooEdit.defaultControls) this.interface.iglooEdit.defaultControls.visible = false
            this.takeScreenshot()
        }, () => {
            this.takeScreenshot()    
        })

    }

    takeScreenshot() {
        this.interface.prompt.window.visible = false

        this.world.game.renderer.snapshot((image) => {
            // https://phaser.discourse.group/t/save-canvas-using-phaser3/2786/2

            var MIME_TYPE = "image/png";
            var imgURL = image.src;
            var dlLink = document.createElement('a');
            dlLink.download = `CPJourney ${new Date().toISOString()}.png`;
            dlLink.href = imgURL;
            dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
            document.body.appendChild(dlLink);
            dlLink.click();
            document.body.removeChild(dlLink);

            this.interface.showInterface()
            this.interface.showBorder()
            this.world.room.showPenguins()
            if(this.interface.iglooEdit.defaultControls) this.interface.iglooEdit.defaultControls.visible = this.interface.iglooEdit.defaultControls.oldVisible
        });
    }

    onMuteClick() {
        this.toggle(this.checkbox, (checked) => {
            localStorage.muteMusic = checked
            this.soundManager.muteMusic  = checked
        })

        let music = this.world.room.music || this.world.room.mainLoops || this.world.room.layeredMusic || true
        if (!music) {
            return
        }

        if (this.soundManager.muteMusic) {
            if(this.world.party.currentConcert && this.world.room.id == this.world.party.concerts[this.world.party.currentConcert].room) {
                this.soundManager.stopConcertMusic()
            } else {
                this.world.room.stopMusic()
            }
            //this.world.room.stopMusic()
            /*if(this.world.client.currentTower != null) {
                this.world.client.tower.setVolumeOfMusic(0)
            }*/
        } else {
            this.world.room.setMusic()
            /*if(this.world.party.currentConcert && this.world.room.id == this.world.party.concerts[this.world.party.currentConcert].room) {
                this.soundManager.playConcertMusic(this.world.room.concertMusic, false, this.world.party.concertDuration)
            } else {
                this.world.room.setMusic()
            }*/
            /*if(this.world.client.currentTower != null) {
                this.world.client.tower.setVolumeOfMusic(0.5)
            }*/
        }
    }

    onSFXClick() {
        this.toggle(this.checkbox_1, (checked) => {
            localStorage.muteSFX = checked
            this.soundManager.muteSFX  = checked
        })

        let music = this.world.room.music
        if (!music) {
            return
        }

        if (this.soundManager.muteSFX) {
            this.soundManager.stopAllButMusic()
        } 

        if(this.world.room) this.world.room.handleSFXChange()
    }

    onUnlimitedSFXClick() {
        if(this.soundManager.unlimitedSFX) {
            this.toggle(this.checkbox_4, (checked) => {
                localStorage.unlimitedSFX = checked
                this.soundManager.unlimitedSFX  = checked
            })
            return
        }
        let warn = 'WARNING: When this setting is enabled, game audio\nmay break when individual sound effects are played\nexcessively. Are you sure you want to enable it?'
        this.interface.prompt.showWindow(warn,'dual',() => {
            this.toggle(this.checkbox_4, (checked) => {
                localStorage.unlimitedSFX = checked
                this.soundManager.unlimitedSFX  = checked
                this.interface.prompt.window.visible = false
            })
        })
    }

    onLowQualityClick() {
        this.toggle(this.checkbox_3, (checked) => {
            if (localStorage.lowQuality) {
                localStorage.removeItem('lowQuality');
            } else {
                localStorage.lowQuality = true;
            }
            this.interface.prompt.showError('You must reload the game for this setting to take effect.');
        })
    }

    toggle(checkbox, callback=()=>{}) {
        let texture
        let enabled

        if (checkbox.frame.name == 'checkbox-active') {
            texture = 'checkbox'
            enabled = false
        } else {
            texture = 'checkbox-active'
            enabled = true
        }

        callback(enabled)

        checkbox.setTexture('login', texture)
    }


    toggleSFX(checkbox) {
        let texture = (localStorage.muteSFX == 'true') ? 'checkbox' : 'checkbox-active'

        localStorage.muteSFX = (localStorage.muteSFX == 'true') ? 'false' : 'true'
        checkbox.setTexture('login', texture)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
