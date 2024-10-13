
// You can write more code here
import BaseContainer from '@scenes/base/BaseContainer'
/* START OF COMPILED CODE */

export default class MessageBubble extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Container} */
        this.bubble;
        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {boolean} */
        this.flipDownwards = false;


        // bubble
        const bubble = scene.add.container(0, 2.0742921304753574);
        bubble.angle = 180;
        this.add(bubble);

        // roundedrectanglegraphics
        const roundedrectanglegraphics = scene.add.roundedRectangleGraphics(0, -31.19050774335062, 80, 80);
        roundedrectanglegraphics.angle = 45;
        roundedrectanglegraphics.fillColor = 4504575;
        roundedrectanglegraphics.isStroked = false;
        roundedrectanglegraphics.strokeColor = 4504575;
        roundedrectanglegraphics.lineWidth = 5;
        roundedrectanglegraphics.radiusTopLeft = 5;
        roundedrectanglegraphics.radiusTopRight = 5;
        roundedrectanglegraphics.radiusBottomLeft = 0;
        roundedrectanglegraphics.radiusBottomRight = 5;
        bubble.add(roundedrectanglegraphics);

        // roundedrectanglegraphics_1
        const roundedrectanglegraphics_1 = scene.add.roundedRectangleGraphics(0, -53.190507743350615, 350, 110);
        roundedrectanglegraphics_1.setOrigin(0.5, 0);
        roundedrectanglegraphics_1.strokeColor = 4504575;
        roundedrectanglegraphics_1.lineWidth = 5;
        roundedrectanglegraphics_1.shadowAlpha = 1;
        bubble.add(roundedrectanglegraphics_1);

        // text
        const text = scene.add.text(0, 2, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "This bubble will have text with some kind of error, it can have three lines";
        text.setStyle({ "align": "center", "color": "#666", "fixedWidth":310,"fixedHeight":90,"fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        text.setWordWrapWidth(310);
        this.add(text);

        this.bubble = bubble;
        this.text = text;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    show(error) {
        this.bubble.angle = this.flipDownwards? 0 : 180
        this.visible = true
        this.text.text = error
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
