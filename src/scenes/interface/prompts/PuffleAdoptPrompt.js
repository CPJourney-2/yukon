import BaseContainer from '@scenes/base/BaseContainer';

import { Button, Interactive, NineSlice } from '@components/components';

import DualButtons from './buttons/DualButtons';
import PuffleIconLoader from '@engine/loaders/PuffleIconLoader';
import TextInput from '@engine/interface/text/TextInput';

/* START OF COMPILED CODE */

export default class PuffleAdoptPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg;
        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {DualButtons} */
        this.dual;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.text_box;
        /** @type {Phaser.GameObjects.Text} */
        this.continue_text;
        /** @type {Phaser.GameObjects.Container} */
        this.continue_btn;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.nineslice(0, -40, "prompt", "window", 708, 584, 44, 39, 40, 41);
        this.add(bg);

        // text
        const text = scene.add.text(0, -2, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "Would you like to adopt this puffle for\n800 coins? You currently have 3000 coins.";
        text.setStyle({ "align": "center", "color": "#000000", "fixedWidth":628,"fixedHeight":136,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(text);

        // dual
        const dual = new DualButtons(scene, 0, 130);
        this.add(dual);

        // text_box
        const text_box = scene.add.rectangle(0, 37, 453, 52);
        text_box.visible = false;
        text_box.isFilled = true;
        text_box.isStroked = true;
        text_box.strokeColor = 0;
        this.add(text_box);

        // continue_btn
        const continue_btn = scene.add.container(0, 130);
        continue_btn.visible = false;
        this.add(continue_btn);

        // button_1
        const button_1 = scene.add.image(0, 0, "prompt", "window-button");
        button_1.setOrigin(0.5, 0.5047619047619047);
        continue_btn.add(button_1);

        // continue_text
        const continue_text = scene.add.text(0, 0, "", {});
        continue_text.setOrigin(0.5, 0.5);
        continue_text.text = "Continue";
        continue_text.setStyle({ "align": "center", "fixedWidth":280,"fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        continue_btn.add(continue_text);

        // blue_button
        const blue_button = scene.add.image(296, -406, "main", "blue-button");
        continue_btn.add(blue_button);

        // blue_x
        const blue_x = scene.add.image(296, -408, "main", "blue-x");
        continue_btn.add(blue_x);

        // block (components)
        new Interactive(block);

        // button_1 (components)
        const button_1Button = new Button(button_1);
        button_1Button.callback = () => this.buyPuffle();
        button_1Button.activeFrame = true;

        // blue_button (components)
        const blue_buttonButton = new Button(blue_button);
        blue_buttonButton.spriteName = "blue-button";
        blue_buttonButton.callback = () => this.noCallback();
        blue_buttonButton.activeFrame = true;

        this.bg = bg;
        this.text = text;
        this.dual = dual;
        this.text_box = text_box;
        this.continue_text = continue_text;
        this.continue_btn = continue_btn;

        /* START-USER-CTR-CODE */

        this.text.setWordWrapWidth(616, true);

        this.puffle; // Active puffle ID
        this.icon;  // Icon sprite
        this.type;

        this.loader = new PuffleIconLoader(scene, this);

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    showPuffle(puffle) {

        this.show(puffle, this.crumbs.puffles[puffle]);
    }

    show(puffle, crumb) {
        if (!crumb) {
            return;
        }

        this.puffle = puffle;

        this.text.text = this.getText(crumb.cost);
        this.visible = true;

        this.loader.loadIcon(puffle);
        this.interface.main.events.emit('hide_main_inputs')
    }

    getText(cost) {
        if(cost == 0) return `\nWould you like to adopt this puffle?`;
        return `Would you like to adopt this puffle for ${cost} coins? You currently have ${this.world.client.coins} coins.`;
    }

    callback() {
        this.continue_btn.visible = true;
        this.dual.visible = false;
        this.text.text = "Your puffle needs a name.";
        this.text_box.visible = true;

        let style = {
            width: 510,
            height: 50,
            fontFamily: 'Burbank Small',
            fontWeight: 'bold',
            fontSize: 36,
            color: '#000',
            background: '#fff !important',
            textAlign: 'center',
        }

        // Regex only allows letter and spaces
        let regex = /[^a-zA-Z ]/g;
        this.textInput = new TextInput(this.scene, 750, 517, 'text', style, () => this.buyPuffle(), 12, false, 'adopt_puffle', regex)
        this.scene.add.existing(this.textInput);

    }

    buyPuffle() {
        if(this.textInput.text.length < 1) {
            this.textInput.visible = false
            return this.interface.prompt.showError('Your puffle\'s name cannot be empty.','Okay',() => {
				this.interface.prompt.error.visible = false
				this.textInput.visible = true
			})
        }
        //reinder puffle
        if(this.puffle === 12) {
            this.network.send('party_coins_buy', {puffle: true, type: this.puffle, name: this.textInput.text})
        } else {
            this.network.send('adopt_puffle', {type: this.puffle, name: this.textInput.text});
        }

        this.reset();
        this.visible = false;
        this.interface.main.events.emit('show_main_inputs')
    }

    reset() {
        this.dual.visible = true;
        this.continue_btn.visible = false;
        this.text_box.visible = false;
        if(this.textInput) {
            this.textInput.destroy();
        }
    }

    noCallback() {
        this.reset();
        this.visible = false;
        this.interface.main.events.emit('show_main_inputs')
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
