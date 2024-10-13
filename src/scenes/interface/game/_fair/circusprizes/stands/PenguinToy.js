
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../../base/BaseContainer";
import Button from "../../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PenguinToy extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // penguintoy0001
        const penguintoy0001 = scene.add.image(25, 0, "circusprizes", "penguintoy0001");
        this.add(penguintoy0001);

        // shelf_1
        const shelf_1 = scene.add.image(4, 156, "circusprizes", "shelf");
        this.add(shelf_1);

        // ticketsign_1
        const ticketsign_1 = scene.add.image(13, 168, "circusprizes", "ticketsign1");
        this.add(ticketsign_1);

        // ticketicon_3
        const ticketicon_3 = scene.add.image(64, 168, "circusprizes", "ticketicon");
        this.add(ticketicon_3);

        // text_3
        const text_3 = scene.add.text(0, 166, "", {});
        text_3.setOrigin(0.5, 0.5);
        text_3.text = "350";
        text_3.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_3.setPadding({"left":10});
        this.add(text_3);

        // penguintoy0001 (components)
        const penguintoy0001Button = new Button(penguintoy0001);
        penguintoy0001Button.spriteName = "penguintoy";
        penguintoy0001Button.callback = () => this.interface.prompt.showFurniture(12197);
        penguintoy0001Button.pixelPerfect = true;
        penguintoy0001Button.lazyName = true;

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
