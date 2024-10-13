import BaseContainer from '@scenes/base/BaseContainer'

import { Interactive, ThreeSlice, Button, SimpleButton } from '@components/components'

import DualButtons from './buttons/DualButtons'
import SingleButton from './buttons/SingleButton'


/* START OF COMPILED CODE */

export default class BroadcastPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.broadcast;
        /** @type {Phaser.GameObjects.Text} */
        this.broadcastTitle;
        /** @type {Phaser.GameObjects.Text} */
        this.broadcastText;
        /** @type {Phaser.GameObjects.Image} */
        this.closebtn_orange;
        /** @type {Phaser.GameObjects.Image} */
        this.orange_x;
        /** @type {Phaser.GameObjects.Image} */
        this.closebtn_blue;
        /** @type {Phaser.GameObjects.Image} */
        this.blue_x;
        /** @type {Phaser.GameObjects.Container} */
        this.broadcastContainer;


        // broadcastContainer
        const broadcastContainer = scene.add.container(0, -186);
        this.add(broadcastContainer);

        // broadcast
        const broadcast = scene.add.image(-760, -435, "main-broadcast", "developer");
        broadcast.setOrigin(0, 0);
        broadcastContainer.add(broadcast);

        // broadcastTitle
        const broadcastTitle = scene.add.text(-602, -429, "", {});
        broadcastTitle.text = "Message from the Developers";
        broadcastTitle.setStyle({ "color": "#f3f3f3ff", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "stroke": "#000", "shadow.offsetY":3,"shadow.color": "#0000007a", "shadow.fill":true});
        broadcastTitle.setPadding({"left":10,"top":10,"right":10,"bottom":10});
        broadcastTitle.setWordWrapWidth(1110);
        broadcastContainer.add(broadcastTitle);

        // broadcastText
        const broadcastText = scene.add.text(-588, -375, "", {});
        broadcastText.text = "This is a test broadcast to fill in this space. Server restart will happen in 15 minutes. Please uh save your igloos and exit mini-games to make sure your coins save. There's still room for lots of cool text!!!!!!!!";
        broadcastText.setStyle({ "color": "#f3f3f3ff", "fixedWidth":1300,"fixedHeight":65,"fontFamily": "Burbank Small", "fontSize": "24px", "maxLines":2,"stroke": "#000", "shadow.offsetY":2,"shadow.color": "#0000007a", "shadow.fill":true});
        broadcastText.setLineSpacing(2);
        broadcastText.setWordWrapWidth(1200);
        broadcastContainer.add(broadcastText);

        // closebtn-orange
        const closebtn_orange = scene.add.image(712, -401, "main-broadcast", "orange-button");
        broadcastContainer.add(closebtn_orange);

        // orange_x
        const orange_x = scene.add.image(712, -403, "main-broadcast", "orange-x");
        broadcastContainer.add(orange_x);

        // closebtn-blue
        const closebtn_blue = scene.add.image(712, -401, "main", "blue-button");
        closebtn_blue.visible = false;
        broadcastContainer.add(closebtn_blue);

        // blue_x
        const blue_x = scene.add.image(712, -403, "main", "blue-x");
        blue_x.visible = false;
        broadcastContainer.add(blue_x);

        // closebtn_orange (components)
        const closebtn_orangeButton = new Button(closebtn_orange);
        closebtn_orangeButton.spriteName = "orange-button";
        closebtn_orangeButton.callback = () => { this.onExit() };
        closebtn_orangeButton.activeFrame = true;

        // closebtn_blue (components)
        const closebtn_blueButton = new Button(closebtn_blue);
        closebtn_blueButton.spriteName = "blue-button";
        closebtn_blueButton.callback = () => { this.onExit() };
        closebtn_blueButton.activeFrame = true;

        this.broadcast = broadcast;
        this.broadcastTitle = broadcastTitle;
        this.broadcastText = broadcastText;
        this.closebtn_orange = closebtn_orange;
        this.orange_x = orange_x;
        this.closebtn_blue = closebtn_blue;
        this.blue_x = blue_x;
        this.broadcastContainer = broadcastContainer;

        /* START-USER-CTR-CODE */
        /*let maskGraphic = scene.make.graphics();
        maskGraphic.fillRect(170, 20, 1150, 400);
        let mask = new Phaser.Display.Masks.GeometryMask(this, maskGraphic);
        this.broadcastText.setMask(mask)*/
        this.broadcastPlaying = false
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(text,mode) {
        if(this.broadcastPlaying) return

        switch(mode) {
            case "devalert":
                this.broadcastTitle.text = "Message from the Developers"
                this.broadcast.setTexture('main-broadcast', 'developer')
                this.orange_x.visible = true;
                this.closebtn_orange.visible = true;
                this.blue_x.visible = false;
                this.closebtn_blue.visible = false;
                break
            case "eventalert":
                this.broadcastTitle.text = "Community Event Happening Now!"
                this.broadcast.setTexture('main-broadcast', 'community')
                this.orange_x.visible = false;
                this.closebtn_orange.visible = false;
                this.blue_x.visible = true;
                this.closebtn_blue.visible = true;
                break
            // case "slenderalert":
            //     this.broadcastTitle.text = "Slenderin"
            //     this.broadcastIcon.setTexture('main-broadcast-slenderin', 'slenderinIcon')
            //     this.broadcastBG.setTexture('prompt-slenderin','image')
            //     break
            default:
                this.broadcastTitle.text = "Message from the Developers"
                this.broadcast.setTexture('main-broadcast', 'developer')
                this.orange_x.visible = true;
                this.closebtn_orange.visible = true;
                this.blue_x.visible = false;
                this.closebtn_blue.visible = false;
                break
        }

        this.broadcastPlaying = true

        this.broadcastText.text = text

        this.visible = true

        this.playAlertIn()

        if(this.moveText) {
            clearInterval(this.moveText);
        }

        if (this.moveTimeout) {
            clearTimeout(this.moveTimeout);
        }

        this.broadcastText.x = -588;
        /*if (this.broadcastText.width > 1000) {
            this.moveTimeout = setTimeout(() => {
                this.moveText = setInterval(() => {
                    if (this.broadcastText.width > -(this.broadcastText.x + 1000)) {
                        this.textTween = this.scene.tweens.add({
                            targets: this.broadcastText,
                            x: { from: this.broadcastText.x, to: (this.broadcastText.x - 18) },
                            duration: 200,
                            onComplete: () => {}
                        });
                    } else {
                        this.broadcastText.x = -588;
                    }
                }, 100);
            }, 2000);
        }*/
    }

    playAlertIn() {
       this.tween = this.scene.tweens.add({
            targets: this.broadcastContainer,
            y: {
                from: -186, 
                to: -38
            },
            duration: 870,
            ease: Phaser.Math.Easing.Expo.InOut,
            onComplete: () => {
                this.broadcastPlaying = false
            }
        })    
    }

    onExit() {
        if(this.broadcastPlaying) return
        this.broadcastPlaying = true
        this.tween = this.scene.tweens.add({
            targets: this.broadcastContainer,
            y: {
                from: -38, 
                to: -186
            },
            //568
            duration: 870,
            ease: Phaser.Math.Easing.Expo.InOut,
            onComplete: () => {
                this.destroyBroadcast()
            }
        })    
    }

    destroyBroadcast() {
        this.visible = false
        this.broadcastPlaying = false
        if(this.moveText) clearInterval(this.moveText)
        if (this.moveTimeout) clearTimeout(this.moveTimeout)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
