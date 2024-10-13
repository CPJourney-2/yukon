
// You can write more code here
import { SimpleButton } from '@components/components'
/* START OF COMPILED CODE */

export default class RecommendedMessage extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.text_1;


        this.scaleX = 0.4451462735620042;
        this.scaleY = 0.4451462735620042;

        // btn
        const btn = scene.add.roundedRectangleImage(443, 43, 900, 100);
        btn.fillColor = 938647;
        btn.isStroked = false;
        btn.radiusTopLeft = 50;
        btn.radiusTopRight = 50;
        btn.radiusBottomLeft = 50;
        btn.radiusBottomRight = 50;
        this.add(btn);

        // text_1
        const text_1 = scene.add.text(13, 18, "", {});
        text_1.text = "Please ensure igloo designs are appropriate.";
        text_1.setStyle({ "align": "center", "fixedWidth":860,"fontFamily": "Burbank Small", "fontSize": "42px" });
        this.add(text_1);

        // btn (components)
        const btnSimpleButton = new SimpleButton(btn);
        btnSimpleButton.hoverCallback = () => btn.alpha = 0.6;
        btnSimpleButton.hoverOutCallback = () => btn.alpha = 1;
        btnSimpleButton.callback = () => this.setChat();

        this.text_1 = text_1;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setChat() {
        this.parentContainer.setBanText(this.text_1.text)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
