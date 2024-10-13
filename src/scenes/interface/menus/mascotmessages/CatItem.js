import BaseContainer from "@scenes/base/BaseContainer";
import {SimpleButton} from "@components/components";

/* START OF COMPILED CODE */

export default class CatItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.dialogue;


        // dialogue
        const dialogue = scene.add.text(10, -12, "", {});
        dialogue.tintTopLeft = 16777215;
        dialogue.tintTopRight = 16777215;
        dialogue.tintBottomLeft = 16777215;
        dialogue.tintBottomRight = 16777215;
        dialogue.text = "categorryyyyy";
        dialogue.setStyle({ "fixedWidth":200,"fixedHeight":60,"fontFamily": "Burbank Small", "fontSize": "23px", "maxLines":2});
        dialogue.setWordWrapWidth(200);
        this.add(dialogue);

        // ellipse_1
        const ellipse_1 = scene.add.ellipse(0, 0, 10, 10);
        ellipse_1.isFilled = true;
        this.add(ellipse_1);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(112, 16, 128, 128);
        rectangle_1.scaleX = 1.5346215946626267;
        rectangle_1.scaleY = 0.33917714385159503;
        this.add(rectangle_1);

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.hoverCallback = () => this.setDialogueTint(true);
        rectangle_1SimpleButton.hoverOutCallback = () => this.setDialogueTint(false);
        rectangle_1SimpleButton.callback = () => this.onClick();

        this.dialogue = dialogue;

        /* START-USER-CTR-CODE */
        this.room
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setItem(txt) {
        this.dialogue.text = txt
        this.dialogueText = txt
    }


    setDialogueTint(y = false) {
        this.dialogue.tintTopLeft = y ? 16580447 : 16777215;
        this.dialogue.tintTopRight = y ? 16580447 : 16777215;
        this.dialogue.tintBottomLeft = y ? 16580447 : 16777215;
        this.dialogue.tintBottomRight = y ? 16580447 : 16777215;
    }

    onClick() {
        this.parentContainer.parentContainer.parentContainer.changeCategory(this.dialogueText)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here