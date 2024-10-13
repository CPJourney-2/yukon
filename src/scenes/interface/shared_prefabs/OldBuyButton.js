import BaseImage from '@scenes/base/BaseImage'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class OldBuyButton extends BaseImage {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "commonbook-old", frame ?? "cc-old-buy3");

        /** @type {number} */
        this.item = 0;
        /** @type {"Clothing"|"Furniture"|"Flooring"|"Igloo Location"} */
        this.itemType = "Clothing";


        this.setOrigin(0, 0);

        // this (components)
        const thisButton = new Button(this);
        thisButton.spriteName = "cc-old-buy3";
        thisButton.callback =  () => this.buy();
        thisButton.activeFrame = true;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    buy() {
        switch(this.itemType) {
            case "Clothing":
                this.interface.prompt.showItem(this.item)
                break
            case "Furniture":
                this.interface.prompt.showFurniture(this.item)
                break
            case "Flooring":
                this.interface.prompt.showFloor(this.item)
                break
            case "Igloo Location":
                this.interface.prompt.showLocation(this.item)
                break    
            default:
                this.interface.prompt.showItem(this.item)
                break
        }
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
