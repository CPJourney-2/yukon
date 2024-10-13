
import { Button, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class DialogueBubble extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 200, y ?? 400);

        /** @type {Phaser.GameObjects.Image} */
        this.bubble;
        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.option1;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.option2;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.option3;
        /** @type {Phaser.GameObjects.Text} */
        this.option1Text;
        /** @type {Phaser.GameObjects.Text} */
        this.option2Text;
        /** @type {Phaser.GameObjects.Text} */
        this.option3Text;
        /** @type {Phaser.GameObjects.Container} */
        this.options;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.bubbleButton;
        /** @type {Array<Phaser.GameObjects.NineSlice|Phaser.GameObjects.Text>} */
        this.optionsStuff;


        // bubble
        const bubble = scene.add.image(490, 128, "mission11-dialogue-common", "textBubble");
        bubble.scaleX = 0.8;
        bubble.scaleY = 0.8;
        this.add(bubble);

        // text
        const text = scene.add.text(0, 0, "", {});
        text.text = "Hello agent so basically uh herbert came in earlier today and he said i was a big fat meanie and it hurt my feewings can you hunt him down pls <3";
        text.setStyle({ "color": "#333", "fixedWidth":1050,"fixedHeight":200,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
        text.setPadding({"left":10});
        text.setWordWrapWidth(1050);
        this.add(text);

        // options
        const options = scene.add.container(527, 97);
        options.visible = false;
        this.add(options);

        // options_bg
        const options_bg = scene.add.roundedRectangleGraphics(0, 25, 1040, 280);
        options_bg.fillColor = 0;
        options_bg.fillAlpha = 0.7;
        options_bg.strokeAlpha = 0.6;
        options_bg.lineWidth = 5;
        options.add(options_bg);

        // option1
        const option1 = scene.add.nineslice(0, -59, "mission11-dialogue-common", "button", 1000, 74, 20, 20, 20, 20);
        options.add(option1);

        // option2
        const option2 = scene.add.nineslice(0, 23, "mission11-dialogue-common", "button", 1000, 74, 20, 20, 20, 20);
        options.add(option2);

        // option3
        const option3 = scene.add.nineslice(0, 104, "mission11-dialogue-common", "button", 1000, 74, 20, 20, 20, 20);
        options.add(option3);

        // option1Text
        const option1Text = scene.add.text(-488, -79, "", {});
        option1Text.text = "Can i just go back to the cave mine please";
        option1Text.setStyle({ "color": "#333", "fixedWidth":1000,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        option1Text.setPadding({"left":10});
        option1Text.setWordWrapWidth(1050);
        options.add(option1Text);

        // option2Text
        const option2Text = scene.add.text(-488, 5, "", {});
        option2Text.text = "Cool story bro but did i ask";
        option2Text.setStyle({ "color": "#333", "fixedWidth":1000,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        option2Text.setPadding({"left":10});
        option2Text.setWordWrapWidth(1050);
        options.add(option2Text);

        // option3Text
        const option3Text = scene.add.text(-488, 84, "", {});
        option3Text.text = ":headmod:";
        option3Text.setStyle({ "color": "#333", "fixedWidth":1000,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        option3Text.setPadding({"left":10});
        option3Text.setWordWrapWidth(1050);
        options.add(option3Text);

        // bubbleButton
        const bubbleButton = scene.add.rectangle(527, 119, 1100, 280);
        bubbleButton.visible = false;
        this.add(bubbleButton);

        // lists
        const optionsStuff = [option1, option3Text, option2Text, option1Text, option3, option2];

        // option1 (components)
        const option1Button = new Button(option1);
        option1Button.spriteName = "button";

        // option2 (components)
        const option2Button = new Button(option2);
        option2Button.spriteName = "button";

        // option3 (components)
        const option3Button = new Button(option3);
        option3Button.spriteName = "button";

        // bubbleButton (components)
        const bubbleButtonSimpleButton = new SimpleButton(bubbleButton);
        bubbleButtonSimpleButton.callback = () => this.bubbleButtonCallback();

        this.bubble = bubble;
        this.text = text;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option1Text = option1Text;
        this.option2Text = option2Text;
        this.option3Text = option3Text;
        this.options = options;
        this.bubbleButton = bubbleButton;
        this.optionsStuff = optionsStuff;

        /* START-USER-CTR-CODE */
        this.canProgress = true
        this.bubbleTimer = null
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    bubbleButtonCallback() {
        if(!this.canProgress) return
        this.setTimer()
        this.parentContainer.nextPage()
    }

    setTimer() {
        if(this.bubbleTimer) this.scene.time.removeEvent(this.bubbleTimer)
        this.canProgress = false
        this.bubbleTimer = this.scene.time.addEvent({
            delay: 350,
            callback: () => this.canProgress = true
        })
    }

    showSpeech(text) {
        this.text.visible = true
        this.options.visible = false
        this.bubble.visible = true
        this.bubbleButton.visible = true

        this.text.text = text
    }

    showOptions(list) {
        this.text.visible = false
        this.options.visible = true
        this.bubble.visible = false
        this.bubbleButton.visible = false

        for(let stuff of this.optionsStuff) stuff.visible = false

        let i = 1
        for(let obj of list) {
            this[`option${i}Text`].visible = true
            this[`option${i}Text`].text = obj.text
            this[`option${i}`].visible = true
            this[`option${i}`].__Button.callback = () => {
                if(!this.canProgress) return
                obj.callback()
            }
            i++
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
