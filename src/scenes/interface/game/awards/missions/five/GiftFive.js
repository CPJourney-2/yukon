import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton, Interactive } from '@components/components'

export const preload = {
    key: 'giftfive-pack',
    url: 'assets/media/interface/game/awards/missions/five/giftfive-pack.json',
    loadString: ['loading', 'award_q5_gift']
}

/* START OF COMPILED CODE */

export default class GiftFive extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Sprite} */
        this.pizzaslices;
        /** @type {Phaser.GameObjects.Text} */
        this.username;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.changePizzaSlice;


        // block
        const block = scene.add.rectangle(-12, 10, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // boxL
        const boxL = scene.add.image(-286, 0, "giftfive", "boxL");
        this.add(boxL);

        // boxR
        const boxR = scene.add.image(285, 0, "giftfive", "boxR");
        this.add(boxR);

        // note_paper
        const note_paper = scene.add.image(-6, -38, "giftfive", "note_paper");
        this.add(note_paper);

        // pizzaslices
        const pizzaslices = scene.add.sprite(3, 203, "giftfive", "pizzaslices0001");
        this.add(pizzaslices);

        // note_text
        const note_text = scene.add.image(-3, -157, "giftfive", "note_text");
        this.add(note_text);

        // username
        const username = scene.add.text(-182, -312, "", {});
        username.text = "Username";
        username.setStyle({ "color": "#000000ff", "fontFamily": "CCComicrazy", "fontSize": "25px" });
        this.add(username);

        // closebutton
        const closebutton = scene.add.image(315, -335, "giftfive", "closebutton");
        this.add(closebutton);

        // changePizzaSlice
        const changePizzaSlice = scene.add.rectangle(3, 205, 800, 180);
        this.add(changePizzaSlice);

        // block (components)
        new Interactive(block);

        // closebutton (components)
        const closebuttonButton = new Button(closebutton);
        closebuttonButton.spriteName = "closebutton";
        closebuttonButton.callback = () => this.interface.destroyWidget(this);;

        // changePizzaSlice (components)
        const changePizzaSliceSimpleButton = new SimpleButton(changePizzaSlice);
        changePizzaSliceSimpleButton.callback = () => this.changePizzaFrame();

        this.pizzaslices = pizzaslices;
        this.username = username;
        this.changePizzaSlice = changePizzaSlice;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()
        this.username.text = this.world.client.penguin.displayName
    }

    changePizzaFrame(){
        let frame = this.pizzaslices.frame.name
        frame = frame.substr(frame.length - 4)

        switch (frame){
            case '0001':
                this.pizzaslices.play('pizzaOne')
                break
            case '0002':
                this.pizzaslices.play('pizzaTwo')
                break
            case '0003':
                this.pizzaslices.play('pizzaThree')
                break
            case '0004':
                this.pizzaslices.play('pizzaFour')
                break
            case '0005':
                this.pizzaslices.play('pizzaFive')
                break
            case '0006':
                this.pizzaslices.play('pizzaSix')
                break
            case '0007':
                this.pizzaslices.play('pizzaSeven')
                break
            case '0008':
                this.pizzaslices.visible = false
            default:
                break
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
