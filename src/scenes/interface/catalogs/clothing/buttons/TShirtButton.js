import TintedImage from '@engine/utils/tint/TintedImage'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class TShirtButton extends TintedImage {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "clothingcatv2", frame ?? "tshirt_button");

        /** @type {number} */
        this.item = 0;


        this.setOrigin(0, 0);

        // this (components)
        const thisButton = new Button(this);
        thisButton.spriteName = "tshirt_button";
        thisButton.callback = () => this.interface.prompt.showItem(this.item);

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
