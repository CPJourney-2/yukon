// You can write more code here

import BaseImage from "@scenes/base/BaseImage";
import Button from "@scenes/components/Button";

/* START OF COMPILED CODE */

export default class AdoptButton extends BaseImage {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "adopt", frame ?? "adopt");

        // this (components)
        const thisButton = new Button(this);
        thisButton.spriteName = "adopt";
        thisButton.callback = () => this.buyPuffle(this.puffle_id);

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {number} */
    puffle_id = 0;

    /* START-USER-CODE */

    buyPuffle(puffle_id) {
        this.interface.prompt.showPuffleAdopt(puffle_id);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
