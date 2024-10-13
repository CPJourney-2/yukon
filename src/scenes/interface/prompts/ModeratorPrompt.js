import BaseContainer from '@scenes/base/BaseContainer'

import { Animation, Interactive, NineSlice, Button, ShowHint, SimpleButton } from '@components/components'

import DualButtons from './buttons/DualButtons'
import ItemPromptLoader from '@engine/loaders/ItemPromptLoader'


/* START OF COMPILED CODE */

export default class ModeratorPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 463);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg_1;
        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {Phaser.GameObjects.Text} */
        this.text_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mod_badge;
        /** @type {Phaser.GameObjects.Text} */
        this.text_2;


        // block
        const block = scene.add.rectangle(760, 17, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.5;
        this.add(block);

        // bg_1
        const bg_1 = scene.add.nineslice(760, -23, "prompt", "window", 708, 584, 44, 39, 40, 41);
        bg_1.scaleY = 1.1127383675235438;
        this.add(bg_1);

        // text
        const text = scene.add.text(760, -14, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "For your safety, the most recent messages\nin the room have been cleared.";
        text.setStyle({ "align": "center", "color": "#000000", "fixedWidth":628,"fixedHeight":136,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(text);

        // help_button
        const help_button = scene.add.image(761, 70, "main", "help-button");
        this.add(help_button);

        // text_1
        const text_1 = scene.add.text(758, 67, "", {});
        text_1.setOrigin(0.5, 0.5);
        text_1.text = "Dismiss";
        text_1.setStyle({ "align": "center", "fixedWidth":280,"fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        this.add(text_1);

        // mod_badge
        const mod_badge = scene.add.sprite(763, -233, "main", "mod/badge_0001");
        this.add(mod_badge);

        // settings
        const settings = scene.add.text(760, -132, "", {});
        settings.setOrigin(0.5, 0.5);
        settings.text = "Chat has been cleared";
        settings.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        this.add(settings);

        // help_button_1
        const help_button_1 = scene.add.image(761, 193, "main", "help-button");
        this.add(help_button_1);

        // text_2
        const text_2 = scene.add.text(763, 192, "", {});
        text_2.setOrigin(0.5, 0.5);
        text_2.text = "Don't Show Again";
        text_2.setStyle({ "align": "center", "fixedWidth":280,"fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        this.add(text_2);

        // block (components)
        new Interactive(block);

        // help_button (components)
        const help_buttonButton = new Button(help_button);
        help_buttonButton.spriteName = "help-button";
        help_buttonButton.callback = () => { this.close() };

        // mod_badge (components)
        const mod_badgeAnimation = new Animation(mod_badge);
        mod_badgeAnimation.key = "mod/badge_";
        mod_badgeAnimation.end = 20;

        // help_button_1 (components)
        const help_button_1Button = new Button(help_button_1);
        help_button_1Button.spriteName = "help-button";
        help_button_1Button.callback = () => { this.onDontShowAgain() };

        this.bg_1 = bg_1;
        this.text = text;
        this.text_1 = text_1;
        this.mod_badge = mod_badge;
        this.text_2 = text_2;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()
    }

    onDontShowAgain() {
        this.world.client.setInteractionAsSeen("clearChatDismiss")
        this.close()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
