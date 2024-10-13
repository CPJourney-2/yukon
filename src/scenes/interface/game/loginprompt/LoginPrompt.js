
// You can write more code here
import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

export const preload = {
    key: 'cadence-login-pack',
    url: 'assets/media/interface/game/loginprompt/musicjam/cadence-login-pack.json',
    loadString: ['loading', 'Music Jam Intro']
}
/* START OF COMPILED CODE */

export default class LoginPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0.00438428236389643, y ?? 0.0661551881702878);

        /** @type {Phaser.GameObjects.Text} */
        this.buttonText;
        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {Array<any>} */
        this.pages;
        /** @type {Array<any>} */
        this.arrows;


        // block
        const block = scene.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // cadence
        const cadence = scene.add.container(81.00000261934474, 374.0000069215894);
        this.add(cadence);

        // rightarm
        const rightarm = scene.add.sprite(442.00000762939453, 199, "cadence-login", "rightarm0001");
        cadence.add(rightarm);

        // body
        const body = scene.add.image(253.00000762939453, 295, "cadence-login", "body");
        cadence.add(body);

        // scarf_hair
        const scarf_hair = scene.add.image(183.00000762939453, 139, "cadence-login", "scarf_hair");
        cadence.add(scarf_hair);

        // eyes
        const eyes = scene.add.sprite(215.00000762939453, 0, "cadence-login", "eyes0001");
        cadence.add(eyes);

        // mouth
        const mouth = scene.add.sprite(258.00000762939453, 87, "cadence-login", "mouth0001");
        cadence.add(mouth);

        // leftarm
        const leftarm = scene.add.sprite(0, 98, "cadence-login", "leftarm0001");
        cadence.add(leftarm);

        // textBubble
        const textBubble = scene.add.image(902, 785, "cadence-login", "bubble");
        this.add(textBubble);

        // button0001
        const button0001 = scene.add.image(1351, 863, "cadence-login", "button0001");
        this.add(button0001);

        // buttonText
        const buttonText = scene.add.text(1251, 838, "", {});
        buttonText.text = "Next";
        buttonText.setStyle({ "align": "center", "color": "#39334aff", "fixedWidth":200,"fixedHeight":60,"fontFamily": "Burbank Small", "fontSize": "36px", "fontStyle": "bold" });
        buttonText.setWordWrapWidth(1080);
        this.add(buttonText);

        // text
        const text = scene.add.text(405, 654, "", {});
        text.text = "Get up party penguins haven't you heard i get a lot a distance for a little placeholder text";
        text.setStyle({ "color": "#39334aff", "fixedWidth":1060,"fixedHeight":200,"fontFamily": "Burbank Small", "fontSize": "36px", "fontStyle": "bold" });
        text.setPadding({"left":10});
        text.setWordWrapWidth(1080);
        this.add(text);

        // lists
        const pages = [];
        const arrows = [];

        // block (components)
        new Interactive(block);

        // rightarm (components)
        const rightarmAnimation = new Animation(rightarm);
        rightarmAnimation.key = "rightarm";
        rightarmAnimation.end = 180;

        // eyes (components)
        const eyesAnimation = new Animation(eyes);
        eyesAnimation.key = "eyes";
        eyesAnimation.end = 180;

        // mouth (components)
        const mouthAnimation = new Animation(mouth);
        mouthAnimation.key = "mouth";
        mouthAnimation.end = 16;

        // leftarm (components)
        const leftarmAnimation = new Animation(leftarm);
        leftarmAnimation.key = "leftarm";
        leftarmAnimation.end = 22;

        // button0001 (components)
        const button0001Button = new Button(button0001);
        button0001Button.spriteName = "button";
        button0001Button.callback = () => this.nextPage();
        button0001Button.activeFrame = true;
        button0001Button.lazyName = true;

        this.buttonText = buttonText;
        this.text = text;
        this.pages = pages;
        this.arrows = arrows;

        /* START-USER-CTR-CODE */
        this.dialogue = [
            "Check it! It's the Music Jam 2024!!! Party till U drop with all new ways to jam!",
            "It's a real vibe, with all new shows featuring me and some of the island's BEST artists, including a face we haven't seen in a while...",
            "If you want the drip, the Merch stands are where to go! You might even be able to pick up some exclusive merch if you catch a background during a concert!",
            "There's SO MANY stamps you can earn, too! Including stamps for meeting yours truly among others, and for doing various things around the island!",
            "And of course, don't forget about those party quests! If you complete them all, you can earn a special prize!",
            "This party's the NEXT BIG THING so U don't want to miss it. We'll be rocking till August 2!"
        ]
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        this.dialogueIndex = 0
        this.buttonText.text = 'Next'
        this.changeText()
        super.show()
    }

    changeText() {
        this.text.text = this.dialogue[this.dialogueIndex]
        if(this.dialogueIndex == this.dialogue.length - 1) this.buttonText.text = 'Done'
    }

    nextPage() {
        if(this.dialogueIndex == this.dialogue.length - 1) {
            localStorage.setItem('login_prompt_musicjam', 'true')
            this.interface.destroyWidget(this)
        } else {
            this.dialogueIndex++
            this.changeText()
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
