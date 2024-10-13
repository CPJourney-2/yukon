
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../../base/BaseContainer";
import Button from "../../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Monkey extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // ticketsign2
        const ticketsign2 = scene.add.image(24, 20, "forestprizes", "ticketsign2");
        ticketsign2.angle = 12.000000000000002;
        ticketsign2.flipX = true;
        this.add(ticketsign2);

        // monke0001
        const monke0001 = scene.add.image(206, 134, "forestprizes", "monke0001");
        this.add(monke0001);

        // ticketicon_3
        const ticketicon_3 = scene.add.image(67, 33, "forestprizes", "ticketicon");
        ticketicon_3.angle = 12.000000000000002;
        this.add(ticketicon_3);

        // text_3
        const text_3 = scene.add.text(0, 17, "", {});
        text_3.angle = 12.000000000000002;
        text_3.setOrigin(0.5, 0.5);
        text_3.text = "350";
        text_3.setStyle({ "color": "#3d3120ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#1b0e0e51", "shadow.stroke":true,"shadow.fill":true});
        text_3.setPadding({"left":10});
        this.add(text_3);

        // monke0001 (components)
        const monke0001Button = new Button(monke0001);
        monke0001Button.spriteName = "monke";
        monke0001Button.callback = () => this.interface.prompt.showItem(5525);
        monke0001Button.pixelPerfect = true;
        monke0001Button.lazyName = true;

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
