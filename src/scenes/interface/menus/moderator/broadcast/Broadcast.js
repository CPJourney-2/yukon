
// You can write more code here
import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton, Interactive } from '@components/components'

import TextInput from '@engine/interface/text/TextInput'
/* START OF COMPILED CODE */

export default class Broadcast extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.textContent;
        /** @type {Phaser.GameObjects.Text} */
        this.alertModeText;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // nineslice_1
        const nineslice_1 = scene.add.nineslice(0, 0, "prompt", "window", 708, 600, 43, 38, 40, 40);
        this.add(nineslice_1);

        // textContent
        const textContent = scene.add.text(-4, -215, "", {});
        textContent.setOrigin(0.5, 0.5);
        textContent.text = "This message will be broadcasted for\neveryone on the island.\nREMEMBER TO PICK A MODE ON THE RIGHT!";
        textContent.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":600,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(textContent);

        // x_button
        const x_button = scene.add.image(300, -247, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(300, -249, "main", "blue-x");
        this.add(blue_x);

        // newsform_sendbtn
        const newsform_sendbtn = scene.add.image(-1, 207, "main", "help-button");
        this.add(newsform_sendbtn);

        // textContent_1
        const textContent_1 = scene.add.text(0, 228, "", {});
        textContent_1.setOrigin(0.5, 0.5);
        textContent_1.text = "Broadcast\n";
        textContent_1.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        textContent_1.setLineSpacing(-5);
        this.add(textContent_1);

        // nineslice
        const nineslice = scene.add.nineslice(545, -73, "prompt", "window", 340, 400, 43, 38, 40, 40);
        this.add(nineslice);

        // textContent_2
        const textContent_2 = scene.add.text(544, -226, "", {});
        textContent_2.setOrigin(0.5, 0.5);
        textContent_2.text = "Choose a mode below";
        textContent_2.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "32px" });
        textContent_2.setLineSpacing(-5);
        this.add(textContent_2);

        // blue_button
        const blue_button = scene.add.image(431, -164, "main", "blue-button");
        this.add(blue_button);

        // textContent_3
        const textContent_3 = scene.add.text(575, -167, "", {});
        textContent_3.setOrigin(0.5, 0.5);
        textContent_3.text = "Developer Message";
        textContent_3.setStyle({ "align": "center", "fontFamily": "Arial Narrow", "fontSize": "30px" });
        textContent_3.setLineSpacing(-5);
        this.add(textContent_3);

        // blue_button_1
        const blue_button_1 = scene.add.image(431, -99, "main", "blue-button");
        this.add(blue_button_1);

        // textContent_4
        const textContent_4 = scene.add.text(564, -99, "", {});
        textContent_4.setOrigin(0.5, 0.5);
        textContent_4.text = "Community Event";
        textContent_4.setStyle({ "align": "center", "fontFamily": "Arial Narrow", "fontSize": "30px" });
        textContent_4.setLineSpacing(-5);
        this.add(textContent_4);

        // blue_button_2
        const blue_button_2 = scene.add.image(431, -6, "main", "blue-button");
        blue_button_2.visible = false;
        this.add(blue_button_2);

        // textContent_6
        const textContent_6 = scene.add.text(521, -6, "", {});
        textContent_6.setOrigin(0.5, 0.5);
        textContent_6.visible = false;
        textContent_6.text = "Slenderin";
        textContent_6.setStyle({ "align": "center", "fontFamily": "Arial Narrow", "fontSize": "30px" });
        textContent_6.setLineSpacing(-5);
        this.add(textContent_6);

        // textContent_5
        const textContent_5 = scene.add.text(542, 33, "", {});
        textContent_5.setOrigin(0.5, 0.5);
        textContent_5.text = "CURRENT MODE:";
        textContent_5.setStyle({ "align": "center", "fontFamily": "Arial Narrow", "fontSize": "35px", "fontStyle": "bold" });
        textContent_5.setLineSpacing(-5);
        this.add(textContent_5);

        // alertModeText
        const alertModeText = scene.add.text(541, 73, "", {});
        alertModeText.setOrigin(0.5, 0.5);
        alertModeText.text = "Developer message";
        alertModeText.setStyle({ "align": "center", "fontFamily": "Arial Narrow", "fontSize": "35px", "fontStyle": "bold" });
        alertModeText.setLineSpacing(-5);
        this.add(alertModeText);

        // checkbox
        const checkbox = scene.add.image(432, -29, "login", "checkbox");
        checkbox.setOrigin(0.41509433962264153, 0.5849056603773585);
        this.add(checkbox);

        // textContent_7
        const textContent_7 = scene.add.text(563, -31, "", {});
        textContent_7.setOrigin(0.5, 0.5);
        textContent_7.text = "Only broadcast to\nthis room";
        textContent_7.setStyle({ "fontFamily": "Arial Narrow", "fontSize": "30px" });
        textContent_7.setLineSpacing(-5);
        this.add(textContent_7);

        // block (components)
        new Interactive(block);

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => { this.visible = false };
        x_buttonButton.activeFrame = true;

        // newsform_sendbtn (components)
        const newsform_sendbtnButton = new Button(newsform_sendbtn);
        newsform_sendbtnButton.spriteName = "help-button";
        newsform_sendbtnButton.callback = () => this.sendNewsSubmission();
        newsform_sendbtnButton.activeFrame = true;

        // blue_button (components)
        const blue_buttonButton = new Button(blue_button);
        blue_buttonButton.spriteName = "blue-button";
        blue_buttonButton.callback = () => { this.changeMode("devalert") };

        // blue_button_1 (components)
        const blue_button_1Button = new Button(blue_button_1);
        blue_button_1Button.spriteName = "blue-button";
        blue_button_1Button.callback = () => { this.changeMode("eventalert") };

        // blue_button_2 (components)
        const blue_button_2Button = new Button(blue_button_2);
        blue_button_2Button.spriteName = "blue-button";
        blue_button_2Button.callback = () => { this.changeMode("slenderalert") };

        // checkbox (components)
        const checkboxSimpleButton = new SimpleButton(checkbox);
        checkboxSimpleButton.callback = () => this.onRangeClick();

        this.textContent = textContent;
        this.alertModeText = alertModeText;
        this.checkbox = checkbox;

        /* START-USER-CTR-CODE */
        this.broadcastinput = scene.add.rexInputText({x: 0, y: 0, width: 570, height: 250, type: 'textarea', id: 'broadcastinput', maxLength: 170, align: 'left', fontFamily: 'Arial', border: 1, color: '#000000', fontSize: '32px', borderColor: '#000000', backgroundColor: '#ffffff'})
        this.add(this.broadcastinput)
        this.broadcastinput.on('focus', () => {this.scene.game.input.keyboard.enabled = false})
        this.broadcastinput.on('blur', () => {this.scene.game.input.keyboard.enabled = true})
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    hide(){
        this.alertMode = "devalert"
        this.visible = false
    }

    show(){
        this.type = null
        this.userId = 0
        this.alertMode = "devalert"
        this.thisRoomOnly = false
		this.checkbox.setFrame('checkbox')

        super.show()
        //this.visible = true
    }

    changeMode(m){
        this.alertMode = m
        if(this.alertMode == "devalert") {
            this.alertModeText.text = "Developer message"
        } else {
            this.alertModeText.text = "Community event"
        }
    }

    onRangeClick() {
        this.thisRoomOnly = !this.thisRoomOnly
        if(this.thisRoomOnly) {
            this.checkbox.setFrame('checkbox-active')
        } else {
            this.checkbox.setFrame('checkbox')
        }
    }

    sendNewsSubmission() {
            let broadcasttext = this.broadcastinput.text.toString();
            this.broadcastinput.text = ''
            this.network.send('broadcast', { message: broadcasttext, mode: this.alertMode, thisRoomOnly: this.thisRoomOnly })
            this.hide()
    }
    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
// You can write more code here
