
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../../base/BaseContainer";
import Button from "../../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class IglooToy extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // igloo0001
        const igloo0001 = scene.add.image(9, 0, "circusprizes", "igloo0001");
        this.add(igloo0001);

        // shelf_2
        const shelf_2 = scene.add.image(4, 144, "circusprizes", "shelf");
        this.add(shelf_2);

        // ticketsign_2
        const ticketsign_2 = scene.add.image(13, 156, "circusprizes", "ticketsign1");
        this.add(ticketsign_2);

        // text_4
        const text_4 = scene.add.text(-10, 154, "", {});
        text_4.setOrigin(0.5, 0.5);
        text_4.text = "5000";
        text_4.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "45px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_4.setPadding({"left":10});
        this.add(text_4);

        // ticketicon_4
        const ticketicon_4 = scene.add.image(75, 156, "circusprizes", "ticketicon");
        this.add(ticketicon_4);

        // igloo0001 (components)
        const igloo0001Button = new Button(igloo0001);
        igloo0001Button.spriteName = "igloo";
        igloo0001Button.callback = () => this.interface.prompt.showIgloo(111);
        igloo0001Button.pixelPerfect = true;
        igloo0001Button.lazyName = true;

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
