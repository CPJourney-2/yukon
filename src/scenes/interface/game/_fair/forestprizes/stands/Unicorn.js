
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../../base/BaseContainer";
import Button from "../../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Unicorn extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // unicorn0001
        const unicorn0001 = scene.add.image(232, 105, "forestprizes", "unicorn0001");
        unicorn0001.scaleX = 0.9;
        unicorn0001.scaleY = 0.9;
        this.add(unicorn0001);

        // signstand_1
        const signstand_1 = scene.add.image(24, 175, "forestprizes", "signstand");
        this.add(signstand_1);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(20, 64, 4, 50);
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 0;
        this.add(rectangle_1);

        // ticketsign_3
        const ticketsign_3 = scene.add.image(6, 119, "forestprizes", "ticketsign2");
        this.add(ticketsign_3);

        // ticketsign_4
        const ticketsign_4 = scene.add.image(52, 0, "forestprizes", "ticketsign2");
        ticketsign_4.flipX = true;
        this.add(ticketsign_4);

        // text_5
        const text_5 = scene.add.text(0, 122, "", {});
        text_5.setOrigin(0.5, 0.5);
        text_5.text = "850";
        text_5.setStyle({ "color": "#3d3120ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#1b0e0e51", "shadow.stroke":true,"shadow.fill":true});
        text_5.setPadding({"left":10});
        this.add(text_5);

        // ticketicon_5
        const ticketicon_5 = scene.add.image(72, 125, "forestprizes", "ticketicon");
        this.add(ticketicon_5);

        // text_6
        const text_6 = scene.add.text(14, 1, "", {});
        text_6.setOrigin(0.5, 0.5);
        text_6.text = "1000";
        text_6.setStyle({ "color": "#3d3120ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#1b0e0e51", "shadow.stroke":true,"shadow.fill":true});
        text_6.setPadding({"left":10});
        this.add(text_6);

        // ticketicon_6
        const ticketicon_6 = scene.add.image(108, 4, "forestprizes", "ticketicon");
        this.add(ticketicon_6);

        // unicorn0001 (components)
        const unicorn0001Button = new Button(unicorn0001);
        unicorn0001Button.spriteName = "unicorn";
        unicorn0001Button.callback = () => this.interface.prompt.showItem(380578);
        unicorn0001Button.pixelPerfect = true;
        unicorn0001Button.lazyName = true;

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
