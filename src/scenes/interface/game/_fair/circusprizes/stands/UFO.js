
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../../base/BaseContainer";
import Button from "../../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class UFO extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // ticketsign2
        const ticketsign2 = scene.add.image(24, 14, "circusprizes", "ticketsign2");
        this.add(ticketsign2);

        // text
        const text = scene.add.text(-3, 17, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "300";
        text.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text.setPadding({"left":10});
        this.add(text);

        // ticketicon_1
        const ticketicon_1 = scene.add.image(64, 19, "circusprizes", "ticketicon");
        this.add(ticketicon_1);

        // ufo0001
        const ufo0001 = scene.add.image(224, 0, "circusprizes", "ufo0001");
        this.add(ufo0001);

        // ufo0001 (components)
        const ufo0001Button = new Button(ufo0001);
        ufo0001Button.spriteName = "ufo";
        ufo0001Button.callback = () => this.interface.prompt.showFurniture(12196);
        ufo0001Button.pixelPerfect = true;
        ufo0001Button.lazyName = true;

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
