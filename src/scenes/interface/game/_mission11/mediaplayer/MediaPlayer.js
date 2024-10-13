
// You can write more code here
import BaseContainer from '@scenes/base/BaseContainer'

import { SimpleButton, Button, Animation, HoverAnimation, Interactive } from '@components/components'

export const preload = {
    key: 'mission11-mediaplayer-pack',
    url: 'assets/media/interface/game/_mission11/mediaplayer/mission11-mediaplayer-pack.json',
    loadString: ['loading', 'Media Player']
}
/* START OF COMPILED CODE */

export default class MediaPlayer extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 441, y ?? 406);

        /** @type {Phaser.GameObjects.Sprite} */
        this.colorcodefront;
        /** @type {Phaser.GameObjects.Text} */
        this.disc_status;
        /** @type {Phaser.GameObjects.Sprite} */
        this.disctray;
        /** @type {Phaser.GameObjects.Sprite} */
        this.disc_close;
        /** @type {Phaser.GameObjects.Sprite} */
        this.disc_insert;
        /** @type {Phaser.GameObjects.Image} */
        this.inputsicons;
        /** @type {Phaser.GameObjects.Image} */
        this.unputsvary;
        /** @type {Phaser.GameObjects.Sprite} */
        this.staticstuff0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.herbert0001;
        /** @type {Phaser.GameObjects.Container} */
        this.livingsled_container;
        /** @type {Phaser.GameObjects.Sprite} */
        this.button_big;
        /** @type {Phaser.GameObjects.Sprite} */
        this.slider1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.slider2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.slider3;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.button_break_trigger;


        // block
        const block = scene.add.rectangle(322, 63, 128, 128);
        block.scaleX = 12.858944958430353;
        block.scaleY = 8.469006608790183;
        this.add(block);

        // mediaplayerbg
        const mediaplayerbg = scene.add.image(-440, -405, "mission11-mediaplayer", "mediaplayerbg");
        mediaplayerbg.setOrigin(0, 0);
        this.add(mediaplayerbg);

        // discback
        const discback = scene.add.image(207, -134, "mission11-mediaplayer", "discback");
        this.add(discback);

        // signalback
        const signalback = scene.add.image(211, 71, "mission11-mediaplayer", "signalback");
        this.add(signalback);

        // inputsback
        const inputsback = scene.add.image(211, 231, "mission11-mediaplayer", "inputsback");
        this.add(inputsback);

        // screensback
        const screensback = scene.add.image(212, 447, "mission11-mediaplayer", "screensback");
        this.add(screensback);

        // medialayer
        const medialayer = scene.add.image(420, 163, "mission11-mediaplayer", "medialayer");
        this.add(medialayer);

        // close
        const close = scene.add.sprite(1033, -352, "main", "grey-button");
        this.add(close);

        // grey_x
        const grey_x = scene.add.image(1033, -354, "main", "grey-x");
        this.add(grey_x);

        // colorcodefront
        const colorcodefront = scene.add.sprite(848, 410, "mission11-mediaplayer", "colorcodefront0001");
        this.add(colorcodefront);

        // forward
        const forward = scene.add.sprite(570, -93, "mission11-mediaplayer", "forward");
        this.add(forward);

        // opendvd
        const opendvd = scene.add.sprite(-183, -158, "mission11-mediaplayer", "opendvd");
        this.add(opendvd);

        // playbtn
        const playbtn = scene.add.sprite(487, -115, "mission11-mediaplayer", "playbtn");
        this.add(playbtn);

        // rewind
        const rewind = scene.add.sprite(399, -93, "mission11-mediaplayer", "rewind");
        this.add(rewind);

        // stopbtn
        const stopbtn = scene.add.sprite(488, -67, "mission11-mediaplayer", "stopbtn");
        this.add(stopbtn);

        // disc_status
        const disc_status = scene.add.text(373, -200, "", {});
        disc_status.text = "no disc";
        disc_status.setStyle({ "align": "center", "fixedWidth":219,"fixedHeight":58,"fontFamily": "cplcd", "fontSize": "35px" });
        this.add(disc_status);

        // disctray
        const disctray = scene.add.sprite(101, -158, "mission11-mediaplayer", "dvdclose");
        this.add(disctray);

        // disc_close
        const disc_close = scene.add.sprite(98, -125, "mission11-mediaplayer", "dvddiscclose0001");
        disc_close.visible = false;
        this.add(disc_close);

        // disc_insert
        const disc_insert = scene.add.sprite(314, -210, "mission11-mediaplayer", "dvddiscinsert0001");
        disc_insert.visible = false;
        this.add(disc_insert);

        // inputsbg
        const inputsbg = scene.add.image(222, 232, "mission11-mediaplayer", "inputsbg");
        this.add(inputsbg);

        // inputsicons
        const inputsicons = scene.add.image(218, 248, "mission11-mediaplayer", "inputsicons0001");
        this.add(inputsicons);

        // unputsvary
        const unputsvary = scene.add.image(236, 220, "mission11-mediaplayer", "unputsvary0001");
        this.add(unputsvary);

        // input
        const input = scene.add.image(110, 215, "mission11-mediaplayer", "input");
        this.add(input);

        // inputslayer
        const inputslayer = scene.add.image(224, 231, "mission11-mediaplayer", "inputslayer");
        this.add(inputslayer);

        // staticscreen0001
        const staticscreen0001 = scene.add.sprite(383, 455, "mission11-mediaplayer", "staticscreen0001");
        this.add(staticscreen0001);

        // staticstuff0001
        const staticstuff0001 = scene.add.sprite(65, 453, "mission11-mediaplayer", "staticstuff0001");
        this.add(staticstuff0001);

        // herbert0001
        const herbert0001 = scene.add.sprite(66, 453, "mission11-mediaplayer", "herbert0001");
        herbert0001.visible = false;
        this.add(herbert0001);

        // livingsled_container
        const livingsled_container = scene.add.container(-58, 350);
        livingsled_container.visible = false;
        this.add(livingsled_container);

        // screenslayer
        const screenslayer = scene.add.image(224, 455, "mission11-mediaplayer", "screenslayer");
        this.add(screenslayer);

        // signaldot0001
        const signaldot0001 = scene.add.sprite(220, 30, "mission11-mediaplayer", "signaldot0001");
        this.add(signaldot0001);

        // signalstrenght
        const signalstrenght = scene.add.image(214, 84, "mission11-mediaplayer", "signalstrenght");
        this.add(signalstrenght);

        // signalanim0001
        const signalanim0001 = scene.add.sprite(380, 84, "mission11-mediaplayer", "signalanim0001");
        this.add(signalanim0001);

        // button_big
        const button_big = scene.add.sprite(549, 284, "mission11-mediaplayer", "inputbuttonbig0001");
        this.add(button_big);

        // signalstrenghtlayer
        const signalstrenghtlayer = scene.add.image(215, 85, "mission11-mediaplayer", "signalstrenghtlayer");
        this.add(signalstrenghtlayer);

        // slider1
        const slider1 = scene.add.sprite(-178, 232, "mission11-mediaplayer", "sliderbutton0001");
        this.add(slider1);

        // slider2
        const slider2 = scene.add.sprite(-134, 232, "mission11-mediaplayer", "sliderbutton0001");
        this.add(slider2);

        // slider3
        const slider3 = scene.add.sprite(-89.77005004882812, 232, "mission11-mediaplayer", "sliderbutton0001");
        this.add(slider3);

        // inputbuttonsmall
        const inputbuttonsmall = scene.add.sprite(-10, 216, "mission11-mediaplayer", "inputbuttonsmall");
        this.add(inputbuttonsmall);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(867, 244, 128, 128);
        rectangle_1.scaleX = 1.8808089782919701;
        rectangle_1.scaleY = 3.0640098169944103;
        rectangle_1.alpha = 1e-20;
        rectangle_1.isFilled = true;
        this.add(rectangle_1);

        // button_break_trigger
        const button_break_trigger = scene.add.rectangle(537, 229, 128, 128);
        this.add(button_break_trigger);

        // slider1_trigger
        const slider1_trigger = scene.add.rectangle(-178, 232, 30, 100);
        this.add(slider1_trigger);

        // slider2_trigger
        const slider2_trigger = scene.add.rectangle(-134, 232, 30, 100);
        this.add(slider2_trigger);

        // slider3_trigger
        const slider3_trigger = scene.add.rectangle(-89, 232, 30, 100);
        this.add(slider3_trigger);

        // block (components)
        new Interactive(block);

        // close (components)
        const closeButton = new Button(close);
        closeButton.spriteName = "grey-button";
        closeButton.callback = () => this.close();
        closeButton.activeFrame = true;
        closeButton.pixelPerfect = true;

        // colorcodefront (components)
        const colorcodefrontAnimation = new Animation(colorcodefront);
        colorcodefrontAnimation.key = "colorcodefront";
        colorcodefrontAnimation.end = 192;
        colorcodefrontAnimation.repeat = 0;
        colorcodefrontAnimation.autoPlay = false;
        colorcodefrontAnimation.hideOnComplete = true;

        // forward (components)
        const forwardButton = new Button(forward);
        forwardButton.spriteName = "forward";

        // opendvd (components)
        const opendvdButton = new Button(opendvd);
        opendvdButton.spriteName = "opendvd";
        opendvdButton.callback = () => this.openDiscTray();
        opendvdButton.activeFrame = true;
        opendvdButton.pixelPerfect = true;

        // playbtn (components)
        const playbtnButton = new Button(playbtn);
        playbtnButton.spriteName = "playbtn";

        // rewind (components)
        const rewindButton = new Button(rewind);
        rewindButton.spriteName = "rewind";

        // stopbtn (components)
        const stopbtnButton = new Button(stopbtn);
        stopbtnButton.spriteName = "stopbtn";

        // staticscreen0001 (components)
        const staticscreen0001Animation = new Animation(staticscreen0001);
        staticscreen0001Animation.key = "staticscreen";
        staticscreen0001Animation.end = 10;

        // staticstuff0001 (components)
        const staticstuff0001Animation = new Animation(staticstuff0001);
        staticstuff0001Animation.key = "staticstuff";
        staticstuff0001Animation.end = 5;

        // herbert0001 (components)
        const herbert0001Animation = new Animation(herbert0001);
        herbert0001Animation.key = "herbert";
        herbert0001Animation.end = 72;

        // signaldot0001 (components)
        const signaldot0001Animation = new Animation(signaldot0001);
        signaldot0001Animation.key = "signaldot";
        signaldot0001Animation.end = 235;

        // signalanim0001 (components)
        const signalanim0001Animation = new Animation(signalanim0001);
        signalanim0001Animation.key = "signalanim";
        signalanim0001Animation.end = 50;

        // inputbuttonsmall (components)
        const inputbuttonsmallButton = new Button(inputbuttonsmall);
        inputbuttonsmallButton.spriteName = "inputbuttonsmall";
        inputbuttonsmallButton.callback = () => {this.changeInput()};

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.callback = () => this.onPanelClick();

        // button_break_trigger (components)
        const button_break_triggerSimpleButton = new SimpleButton(button_break_trigger);
        button_break_triggerSimpleButton.callback = () => this.playBreakButtonAnim();

        // slider1_trigger (components)
        const slider1_triggerSimpleButton = new SimpleButton(slider1_trigger);
        slider1_triggerSimpleButton.hoverCallback = () => this.addSliderTween(this.slider1);
        slider1_triggerSimpleButton.hoverOutCallback = () => this.removeSliderTween();

        // slider2_trigger (components)
        const slider2_triggerSimpleButton = new SimpleButton(slider2_trigger);
        slider2_triggerSimpleButton.hoverCallback = () => this.addSliderTween(this.slider2);
        slider2_triggerSimpleButton.hoverOutCallback = () => this.removeSliderTween();

        // slider3_trigger (components)
        const slider3_triggerSimpleButton = new SimpleButton(slider3_trigger);
        slider3_triggerSimpleButton.hoverCallback = () => this.addSliderTween(this.slider3);
        slider3_triggerSimpleButton.hoverOutCallback = () => this.removeSliderTween();

        this.colorcodefront = colorcodefront;
        this.disc_status = disc_status;
        this.disctray = disctray;
        this.disc_close = disc_close;
        this.disc_insert = disc_insert;
        this.inputsicons = inputsicons;
        this.unputsvary = unputsvary;
        this.staticstuff0001 = staticstuff0001;
        this.herbert0001 = herbert0001;
        this.livingsled_container = livingsled_container;
        this.button_big = button_big;
        this.slider1 = slider1;
        this.slider2 = slider2;
        this.slider3 = slider3;
        this.button_break_trigger = button_break_trigger;

        /* START-USER-CTR-CODE */
        // Write your code here.
        this.timer
        this.isButtonBroken = false;
        this.isDiscInserted = false;
        this.isPanelOpen = false;

        const livingsled = this.world.room.add.video(0, 0).loadURL(`assets/media/interface/game/_mission11/mediaplayer/livingsled.webm`, true, "anonymous");
        livingsled.setOrigin(0,0)
        livingsled.displayWidth = 50;
        livingsled.displayHeight = 50;
        this.livingsled_container.add(livingsled)
        this.livingsled = livingsled;

        this.disc_close.on('animationcomplete', () => {
            this.disc_status.text = 'reading...';
            this.input = 0;
            this.changeInput();

            setTimeout(() => {
                this.disc_status.text = 'playing';
                this.herbert0001.visible = false;
                this.staticstuff0001.visible = false;
                this.livingsled.play(true);
                this.livingsled_container.visible = true;
                this.world.party.showMissionError('That should stop Herbert\'s video feed.');
                this.world.party.updateCheckpoint(4)

                setTimeout(() => {
                    this.interface.main.mainVeggiePrompts.clearError()
                    this.world.room.playLivingSled()
                    this.world.party.showDialogue('herbert', 23)
                    this.discflag = false
                    this.close()
                },3000)
            }, 2500);
        });

        this.disc_insert.on('animationcomplete', () => {
            this.disc_status.text = 'close';
            this.disc_insert.visible = false;
            this.disc_close.visible = true;
            this.disc_close.play('disc_close');
        });
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    show() {
        super.show();

        this.discflag = false

        if (this.world.client.pirate_status >= 4) {
            this.staticstuff0001.visible = false;
            this.herbert0001.visible = false;
            this.livingsled.play(true);
            this.livingsled_container.visible = true;

            this.isDiscInserted = true;
            this.disc_status.text = 'playing';

        } else if (this.world.client.pirate_status == 3) {
            this.staticstuff0001.visible = false;
            this.herbert0001.visible = true;
            this.herbert0001.__Animation.play();

        } else {
            this.staticstuff0001.visible = true;
            this.staticstuff0001.__Animation.play();
        }
    }

    close() {
        if(this.discflag) return
        super.close()
    }

    onPanelClick(){
        if (this.world.client.pirate_status < 4) {
            this.world.party.showMissionError("This panel looks like it might be for the signal tracker.");
            return;

        } else if (this.world.client.pirate_status >= 5) {
            this.world.party.showMissionError('The signal was traced to the Mine Shack!');
            return;
        } else if (this.isPanelOpen) {
            this.triggerColorCodeMinigame();
            return;
        }

        this.colorcodefront.__Animation.play();
        this.isPanelOpen = true;
    }

    triggerColorCodeMinigame() {
        this.world.interface.loadRuffleWidget('tracking', "Intercepting signals");
        this.world.ruffle.addEventListener('trackingsuccess', () => {
            this.world.party.updateCheckpoint(5);
            this.world.client.stampEarned(183);

            setTimeout(() => {
                this.world.ruffle.closeWidget();
                this.close();
                this.world.party.showDialogue('rookie', 40);
            }, 7000);
        });
    }

    changeInput(){
        this.input++;
        if(this.input > 12){
            this.input = 0;
        }

        switch (this.input) {
            case 1:
                this.unputsvary.setFrame('unputsvary0002');
                this.inputsicons.setFrame('inputsicons0002');
                break;
            case 2:
                this.unputsvary.setFrame('unputsvary0003');
                this.inputsicons.setFrame('inputsicons0003');
                break;
            case 3:
                this.unputsvary.setFrame('unputsvary0004');
                this.inputsicons.setFrame('inputsicons0004');
                break;
            case 4:
                this.unputsvary.setFrame('unputsvary0005');
                this.inputsicons.setFrame('inputsicons0005');
                break;
            case 5:
                this.unputsvary.setFrame('unputsvary0006');
                this.inputsicons.setFrame('inputsicons0006');
                break;
            case 6:
                this.unputsvary.setFrame('unputsvary0007');
                this.inputsicons.setFrame('inputsicons0007');
                break;
            case 7:
                this.unputsvary.setFrame('unputsvary0008');
                this.inputsicons.setFrame('inputsicons0008');
                break;
            case 8:
                this.unputsvary.setFrame('unputsvary0009');
                this.inputsicons.setFrame('inputsicons0009');
                break;
            case 9:
                this.unputsvary.setFrame('unputsvary0010');
                this.inputsicons.setFrame('inputsicons0010');
                break;
            case 10:
                this.unputsvary.setFrame('unputsvary0011');
                this.inputsicons.setFrame('inputsicons0011');
                break;
            case 11:
                this.unputsvary.setFrame('unputsvary0012');
                this.inputsicons.setFrame('inputsicons0012');
                break;
            case 12:
                this.unputsvary.setFrame('unputsvary0013');
                this.inputsicons.setFrame('inputsicons0013');
                break;
            case 0:
                this.unputsvary.setFrame('unputsvary0001');
                this.inputsicons.setFrame('inputsicons0001');
                break;
        }
    }

    playBreakButtonAnim() {
        if (!this.isButtonBroken) {
            this.button_big.play('button_break');
            this.button_break_trigger.visible = false;
            this.isButtonBroken = true;
        } else {
            this.world.party.showMissionError("The volume knob is broken. You will need to find some other way to stop Herbert's audio feed.")
        }
    }

    openDiscTray() {
        if (this.world.client.pirate_status < 4) {
            if (!this.world.party.cookies.checkpoint4Checks.collectedDvd) {
                this.world.party.showMissionError("Inserting a disc would likely stop Herbert's broadcast.");
                return;
                
            } else if (!this.world.party.cookies.checkpoint4Checks.cleanedDvd) {
                this.world.party.showMissionError("Oops! this disc won't work until it is cleaned.");

                return;
            }
        }

        if (this.isDiscInserted) {
            return;
        }

        this.isDiscInserted = true;
        this.discflag = true

        this.disc_status.text = 'open';
        this.disctray.visible = false;
        this.disc_close.visible = false;
        this.disc_insert.visible = true;
        this.disc_insert.play('disc_insert');
    }

    addSliderTween(slider) {
        this.sliderTween = this.world.room.tweens.add({
            targets: slider,
            duration: 250,
            ease: 'Linear',
            repeat: -1,
            yoyo: true,
            y: 190,
        });
    }

    removeSliderTween() {
        this.sliderTween?.stop().seek(0).destroy();
        this.sliderTween = null;
    }

/* END-USER-CODE */
}

/* END OF COMPILED CODE */