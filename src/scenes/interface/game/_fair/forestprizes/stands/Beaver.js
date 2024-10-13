
// You can write more code here

/* START OF COMPILED CODE */

import BaseImage from "../../../../../base/BaseImage";
import Button from "../../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Beaver extends BaseImage {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "forestprizes", frame ?? "beefer0001");

        // this (components)
        const thisButton = new Button(this);
        thisButton.spriteName = "beefer";
        thisButton.callback = () => this.interface.prompt.showItem(380579);
        thisButton.pixelPerfect = true;
        thisButton.lazyName = true;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
