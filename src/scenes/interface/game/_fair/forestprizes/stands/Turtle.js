
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../../base/BaseContainer";
import Button from "../../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Turtle extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // turtle0001
        const turtle0001 = scene.add.image(75, 0, "forestprizes", "turtle0001");
        turtle0001.angle = -59.99999999999999;
        this.add(turtle0001);

        // shelf
        const shelf = scene.add.image(92, 121, "forestprizes", "shelf");
        this.add(shelf);

        // ticketsign1
        const ticketsign1 = scene.add.image(88, 142, "forestprizes", "ticketsign1");
        this.add(ticketsign1);

        // text_1
        const text_1 = scene.add.text(72, 138, "", {});
        text_1.setOrigin(0.5, 0.5);
        text_1.text = "300";
        text_1.setStyle({ "color": "#3d3120ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#1b0e0e51", "shadow.stroke":true,"shadow.fill":true});
        text_1.setPadding({"left":10});
        this.add(text_1);

        // ticketicon
        const ticketicon = scene.add.image(142, 141, "forestprizes", "ticketicon");
        this.add(ticketicon);

        // turtle0001 (components)
        const turtle0001Button = new Button(turtle0001);
        turtle0001Button.spriteName = "turtle";
        turtle0001Button.callback = () => this.interface.prompt.showItem(5114);
        turtle0001Button.pixelPerfect = true;
        turtle0001Button.lazyName = true;

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
