
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../../base/BaseContainer";
import Button from "../../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PuffleToy extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // puffletoy0001
        const puffletoy0001 = scene.add.image(10, 0, "circusprizes", "puffletoy0001");
        this.add(puffletoy0001);

        // shelf
        const shelf = scene.add.image(10, 132, "circusprizes", "shelf");
        this.add(shelf);

        // ticketsign1
        const ticketsign1 = scene.add.image(13, 147, "circusprizes", "ticketsign1");
        this.add(ticketsign1);

        // ticketicon
        const ticketicon = scene.add.image(64, 147, "circusprizes", "ticketicon");
        this.add(ticketicon);

        // text_2
        const text_2 = scene.add.text(0, 145, "", {});
        text_2.setOrigin(0.5, 0.5);
        text_2.text = "250";
        text_2.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_2.setPadding({"left":10});
        this.add(text_2);

        // puffletoy0001 (components)
        const puffletoy0001Button = new Button(puffletoy0001);
        puffletoy0001Button.spriteName = "puffletoy";
        puffletoy0001Button.callback = () => this.interface.prompt.showFurniture(12198);

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
