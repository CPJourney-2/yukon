
// You can write more code here
import { MoveTo, Button, Animation, ShowHint, SimpleButton, ZoneTrigger } from '@components/components'

/* START OF COMPILED CODE */

export default class mat extends Phaser.GameObjects.Image {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "dojo", frame ?? "mat_b");

        // this (components)
        const thisButton = new Button(this);
        thisButton.spriteName = "mat_b";
        const thisShowHint = new ShowHint(this);
        thisShowHint.text = "Practice Card-Jitsu";
        new MoveTo(this);
        const thisZoneTrigger = new ZoneTrigger(this);
        thisZoneTrigger.callback = () => this.scene.triggerWaddle("card", this.waddleid);

        /* START-USER-CTR-CODE */
        if (frame != "mat_b") {
            thisButton.spriteName = frame
        }
        // Write your code here.
        /* END-USER-CTR-CODE */

        // custom definition props
        this.waddleid = "200";
    }

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
