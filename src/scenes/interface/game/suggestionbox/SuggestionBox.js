
// You can write more code here
import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive } from '@components/components'

import TextInput from '@engine/interface/text/TextInput'

export const preload = {
    key: 'newsform-asset-pack',
    url: 'assets/media/interface/game/newsform/newsform-asset-pack.json',
    loadString: ['loading', 'Suggestion Box']
}

/* START OF COMPILED CODE */

export default class SuggestionBox extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 479);

        /** @type {Phaser.GameObjects.Text} */
        this.title;
        /** @type {Phaser.GameObjects.Text} */
        this.textContentNormal;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // nineslice_1
        const nineslice_1 = scene.add.nineslice(0, 0, "prompt", "window", 708, 600, 43, 38, 40, 40);
        this.add(nineslice_1);

        // title
        const title = scene.add.text(0, -234, "", {});
        title.setOrigin(0.5, 0.5);
        title.text = "SUGGESTION BOX";
        title.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        this.add(title);

        // x_button
        const x_button = scene.add.image(300, -247, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(300, -249, "main", "blue-x");
        this.add(blue_x);

        // newsform_sendbtn
        const newsform_sendbtn = scene.add.image(-1, 207, "main", "help-button");
        this.add(newsform_sendbtn);

        // buttonText
        const buttonText = scene.add.text(0, 204, "", {});
        buttonText.setOrigin(0.5, 0.5);
        buttonText.text = "Send";
        buttonText.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        buttonText.setLineSpacing(-5);
        this.add(buttonText);

        // textContentNormal
        const textContentNormal = scene.add.text(0, -189, "", {});
        textContentNormal.setOrigin(0.5, 0);
        textContentNormal.text = "Please type your suggestion for the CPJ team here.";
        textContentNormal.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":640,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        textContentNormal.setLineSpacing(-5);
        textContentNormal.setWordWrapWidth(640);
        this.add(textContentNormal);

        // block (components)
        new Interactive(block);

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.hide();
        x_buttonButton.activeFrame = true;

        // newsform_sendbtn (components)
        const newsform_sendbtnButton = new Button(newsform_sendbtn);
        newsform_sendbtnButton.spriteName = "help-button";
        newsform_sendbtnButton.callback = () => this.sendNewsSubmission();
        newsform_sendbtnButton.activeFrame = true;

        this.title = title;
        this.textContentNormal = textContentNormal;

        /* START-USER-CTR-CODE */
        this.newsforminput = scene.add.rexInputText({x: 0, y: 0, width: 570, height: 250, type: 'textarea', id: 'suggestionsinput', maxLength: 150, align: 'left', fontFamily: 'Arial', border: 1, color: '#000000', fontSize: '32px', borderColor: '#000000', backgroundColor: '#ffffff'})
        this.add(this.newsforminput)
        this.newsforminput.on('focus', () => {this.scene.game.input.keyboard.enabled = false})
        this.newsforminput.on('blur', () => {this.scene.game.input.keyboard.enabled = true})

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    hide(){
        this.close()
    }

    show(args){
        this.type = null
        this.userId = 0
        this.title.text = "SUGGESTION BOX"
        this.textContentNormal.text = "Please type your suggestion for the CPJ team here."

        super.show()
    }

    sendNewsSubmission() {
        let newsformtext = this.newsforminput.text.toString();
        this.hide()
        this.interface.prompt.showWindow("Thank-you. Your suggestion has been\ndelivered, the staff will read it soon.",'single',() => this.sendRoomAnim())
        this.newsforminput.text = ''
        if(newsformtext.length > 4) {
            this.network.send('suggestion_box', { message: newsformtext })
        }
        //this.interface.destroyWidget(this)
    }

    sendRoomAnim() {
        this.interface.prompt.window.visible = false
        if(this.world.room.onSuggestionDone) this.world.room.onSuggestionDone()
    }
    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
// You can write more code here
