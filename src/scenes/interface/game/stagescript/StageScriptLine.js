import { SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class StageScriptLine extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // rectangle
        const rectangle = scene.add.rectangle(-15, -40, 370, 110);
        rectangle.setOrigin(0, 0);
        rectangle.fillColor = 16579834;
        this.add(rectangle);

        // actor
        const actor = scene.add.text(4, -32, "", {});
        actor.text = "Actor says:";
        actor.setStyle({ "color": "#006699", "fontFamily": "Arial", "fontSize": "24px", "fontStyle": "bold" });
        this.add(actor);

        // message
        const message = scene.add.text(4, 0, "", {});
        message.text = "Once upon a time a prince was dressed all in red...";
        message.setStyle({ "color": "#006699", "fixedWidth":340,"fontFamily": "Arial", "fontSize": "24px" });
        message.setWordWrapWidth(340);
        this.add(message);

        // note
        const note = scene.add.text(4, 0, "", {});
        note.text = "Fairy Fables";
        note.setStyle({ "align": "center", "color": "#006699", "fixedWidth":332,"fontFamily": "Arial", "fontSize": "24px", "fontStyle": "italic" });
        note.setWordWrapWidth(330);
        this.add(note);

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.hoverCallback = () => this.onHover();
        rectangleSimpleButton.hoverOutCallback = () => this.onHoverOut();
        rectangleSimpleButton.callback = () => this.onMessage();

        this.rectangle = rectangle;
        this.actor = actor;
        this.message = message;
        this.note = note;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Rectangle} */
    rectangle;
    /** @type {Phaser.GameObjects.Text} */
    actor;
    /** @type {Phaser.GameObjects.Text} */
    message;
    /** @type {Phaser.GameObjects.Text} */
    note;

    /* START-USER-CODE */

    setMessage(message) {
        this.actor.text = message?.name
        this.message.text = message?.message
        this.note.text = message?.note

        this.rectangle.visible = !!this.message.text
    }

    onHover() {
        this.rectangle.isFilled = true
    }

    onHoverOut() {
        this.rectangle.isFilled = false
    }

    onMessage() {
        this.parentContainer.sendMessage(this.messageIdx)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
