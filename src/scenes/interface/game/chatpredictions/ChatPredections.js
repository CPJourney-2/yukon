
import { Button} from '@components/components'
import BaseContainer from '@scenes/base/BaseContainer';

/* START OF COMPILED CODE */

export default class ChatPredections extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // item1
        const item1 = scene.add.container(0, 0);
        this.add(item1);

        // button_1
        const button_1 = scene.add.nineslice(-7, 14, "main", "chat-prediction", 303, 87, 10, 10, 16, 10);
        button_1.scaleX = 0.402546388110462;
        button_1.scaleY = 0.402546388110462;
        button_1.setOrigin(0, 0.5);
        item1.add(button_1);

        // text_1
        const text_1 = scene.add.text(0, 0, "", {});
        text_1.text = "New text";
        text_1.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "24px" });
        item1.add(text_1);

        // item2
        const item2 = scene.add.container(0, 35);
        this.add(item2);

        // button_2
        const button_2 = scene.add.nineslice(-7, 14, "main", "chat-prediction", 303, 87, 10, 10, 16, 10);
        button_2.scaleX = 0.402546388110462;
        button_2.scaleY = 0.402546388110462;
        button_2.setOrigin(0, 0.5);
        item2.add(button_2);

        // text_2
        const text_2 = scene.add.text(0, 0, "", {});
        text_2.text = "New text";
        text_2.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "24px" });
        item2.add(text_2);

        // item3
        const item3 = scene.add.container(0, 70);
        this.add(item3);

        // button_3
        const button_3 = scene.add.nineslice(-7, 14, "main", "chat-prediction", 303, 87, 10, 10, 16, 10);
        button_3.scaleX = 0.402546388110462;
        button_3.scaleY = 0.402546388110462;
        button_3.setOrigin(0, 0.5);
        item3.add(button_3);

        // text_3
        const text_3 = scene.add.text(0, 0, "", {});
        text_3.text = "New text";
        text_3.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "24px" });
        item3.add(text_3);

        // item4
        const item4 = scene.add.container(0, 105);
        this.add(item4);

        // button_4
        const button_4 = scene.add.nineslice(-7, 14, "main", "chat-prediction", 303, 87, 10, 10, 16, 10);
        button_4.scaleX = 0.402546388110462;
        button_4.scaleY = 0.402546388110462;
        button_4.setOrigin(0, 0.5);
        item4.add(button_4);

        // text_4
        const text_4 = scene.add.text(0, 0, "", {});
        text_4.text = "New text";
        text_4.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "24px" });
        item4.add(text_4);

        // item5
        const item5 = scene.add.container(0, 140);
        this.add(item5);

        // button_5
        const button_5 = scene.add.nineslice(-7, 14, "main", "chat-prediction", 303, 87, 10, 10, 16, 10);
        button_5.scaleX = 0.402546388110462;
        button_5.scaleY = 0.402546388110462;
        button_5.setOrigin(0, 0.5);
        item5.add(button_5);

        // text_5
        const text_5 = scene.add.text(0, 0, "", {});
        text_5.text = "New text";
        text_5.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "24px" });
        item5.add(text_5);

        // item
        const item = scene.add.container(0, 175);
        this.add(item);

        // button_6
        const button_6 = scene.add.nineslice(-7, 14, "main", "chat-prediction", 303, 87, 10, 10, 16, 10);
        button_6.scaleX = 0.402546388110462;
        button_6.scaleY = 0.402546388110462;
        button_6.setOrigin(0, 0.5);
        item.add(button_6);

        // text_6
        const text_6 = scene.add.text(0, 0, "", {});
        text_6.text = "New text";
        text_6.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "24px" });
        item.add(text_6);

        // button_1 (components)
        new Button(button_1);

        // button_2 (components)
        new Button(button_2);

        // button_3 (components)
        new Button(button_3);

        // button_4 (components)
        new Button(button_4);

        // button_5 (components)
        new Button(button_5);

        // button_6 (components)
        new Button(button_6);

        this.button_1 = button_1;
        this.text_1 = text_1;
        this.button_2 = button_2;
        this.text_2 = text_2;
        this.button_3 = button_3;
        this.text_3 = text_3;
        this.button_4 = button_4;
        this.text_4 = text_4;
        this.button_5 = button_5;
        this.text_5 = text_5;
        this.button_6 = button_6;
        this.text_6 = text_6;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.NineSlice} */
    button_1;
    /** @type {Phaser.GameObjects.Text} */
    text_1;
    /** @type {Phaser.GameObjects.NineSlice} */
    button_2;
    /** @type {Phaser.GameObjects.Text} */
    text_2;
    /** @type {Phaser.GameObjects.NineSlice} */
    button_3;
    /** @type {Phaser.GameObjects.Text} */
    text_3;
    /** @type {Phaser.GameObjects.NineSlice} */
    button_4;
    /** @type {Phaser.GameObjects.Text} */
    text_4;
    /** @type {Phaser.GameObjects.NineSlice} */
    button_5;
    /** @type {Phaser.GameObjects.Text} */
    text_5;
    /** @type {Phaser.GameObjects.NineSlice} */
    button_6;
    /** @type {Phaser.GameObjects.Text} */
    text_6;

    /* START-USER-CODE */

    showTextPrediction(text) {
        // stop an error in console that i cba to make a proper workaround for
        try {
            this.text_1.text = text[0].word
            this.text_2.text = text[1].word
            this.text_3.text = text[2].word
            this.text_4.text = text[3].word
            this.text_5.text = text[4].word
            this.text_6.text = text[5].word
        } catch {

        }
        this.resizeButtonsSoTextFits();
        this.addCallbacksToButtons();
    }

    resizeButtonsSoTextFits() {
        // get the longest word in the text and set the button width to that
        let longestWord;
        for (let i = 0; i < 6; i++) {
            let text = this["text_" + (i + 1)].text;
            if (longestWord == null || text.length > longestWord.length) {
                longestWord = text;
            }
        }

        const textSize = this.getFontTextWidth(longestWord)

        // set the button width to the longest word
        for (let i = 0; i < 6; i++) {
            if(textSize == 29) { // Very small text
                this["button_" + (i + 1)].setSize(textSize * 3 + 30, 87);
            }else {
                this["button_" + (i + 1)].setSize(textSize * 3 + 10, 87);
            }
        }
    }

    getFontTextWidth(text) {
        const textComp= this.scene.add.text(0, 0, text, {
            fontFamily: "Burbank Small",
            fontSize: "25px"
        });

        const textSize = textComp.width;

        textComp.destroy();

        return textSize;
    }

    addCallbacksToButtons() {
        for (let i = 0; i < 6; i++) {
            this["button_" + (i + 1)].__Button.callback = () => {
                this.replaceWordInChat(this["text_" + (i + 1)].text)
            }
        }
    }

    replaceWordInChat(word) {
        // Replace the last word in the chat with the word selected
        let chat = this.interface.main.chatInput.text;
        let words = chat.split(" ");
        words[words.length - 1] = word;
        this.interface.main.chatInput.setText(words.join(" ") + " ");

        // set the chat input to be focused
        this.interface.main.chatInput.setFocus()

    }

    replaceFirstWord() {
        this.replaceWordInChat(this.text_1.text)  
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
