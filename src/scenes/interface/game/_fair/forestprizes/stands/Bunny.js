
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../../base/BaseContainer";
import Button from "../../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Bunny extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // bunny0001
        const bunny0001 = scene.add.image(91, 0, "forestprizes", "bunny0001");
        this.add(bunny0001);

        // shelf_2
        const shelf_2 = scene.add.image(83, 135, "forestprizes", "shelf");
        this.add(shelf_2);

        // ticketsign_1
        const ticketsign_1 = scene.add.image(88, 155, "forestprizes", "ticketsign1");
        this.add(ticketsign_1);

        // text_2
        const text_2 = scene.add.text(70, 151, "", {});
        text_2.setOrigin(0.5, 0.5);
        text_2.text = "250";
        text_2.setStyle({ "color": "#3d3120ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#1b0e0e51", "shadow.stroke":true,"shadow.fill":true});
        text_2.setPadding({"left":10});
        this.add(text_2);

        // ticketicon_2
        const ticketicon_2 = scene.add.image(142, 154, "forestprizes", "ticketicon");
        this.add(ticketicon_2);

        // bunny0001 (components)
        const bunny0001Button = new Button(bunny0001);
        bunny0001Button.spriteName = "bunny";
        bunny0001Button.callback = () => this.interface.prompt.showItem(5026);
        bunny0001Button.pixelPerfect = true;
        bunny0001Button.lazyName = true;

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
