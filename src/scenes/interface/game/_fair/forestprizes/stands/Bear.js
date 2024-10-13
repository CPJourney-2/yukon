
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../../base/BaseContainer";
import Button from "../../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Bear extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // bear0001
        const bear0001 = scene.add.image(87, 0, "forestprizes", "bear0001");
        this.add(bear0001);

        // shelf_1
        const shelf_1 = scene.add.image(86, 117, "forestprizes", "shelf");
        this.add(shelf_1);

        // ticketsign
        const ticketsign = scene.add.image(88, 137, "forestprizes", "ticketsign1");
        this.add(ticketsign);

        // ticketicon_1
        const ticketicon_1 = scene.add.image(142, 136, "forestprizes", "ticketicon");
        this.add(ticketicon_1);

        // text
        const text = scene.add.text(73, 134, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "250";
        text.setStyle({ "color": "#3d3120ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#1b0e0e51", "shadow.stroke":true,"shadow.fill":true});
        text.setPadding({"left":10});
        this.add(text);

        // bear0001 (components)
        const bear0001Button = new Button(bear0001);
        bear0001Button.spriteName = "bear";
        bear0001Button.callback = () => this.interface.prompt.showItem(5006);
        bear0001Button.pixelPerfect = true;
        bear0001Button.lazyName = true;

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
