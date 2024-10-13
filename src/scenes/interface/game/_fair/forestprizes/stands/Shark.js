
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../../base/BaseContainer";
import Button from "../../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Shark extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // shark0001
        const shark0001 = scene.add.image(357, 30, "forestprizes", "shark0001");
        this.add(shark0001);

        // signstand
        const signstand = scene.add.image(20, 64, "forestprizes", "signstand");
        this.add(signstand);

        // ticketsign_2
        const ticketsign_2 = scene.add.image(16, 3, "forestprizes", "ticketsign1");
        this.add(ticketsign_2);

        // ticketicon_4
        const ticketicon_4 = scene.add.image(74, 1, "forestprizes", "ticketicon");
        this.add(ticketicon_4);

        // text_4
        const text_4 = scene.add.text(5, 0, "", {});
        text_4.setOrigin(0.5, 0.5);
        text_4.text = "450";
        text_4.setStyle({ "color": "#3d3120ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#1b0e0e51", "shadow.stroke":true,"shadow.fill":true});
        text_4.setPadding({"left":10});
        this.add(text_4);

        // shark0001 (components)
        const shark0001Button = new Button(shark0001);
        shark0001Button.spriteName = "shark";
        shark0001Button.callback = () => this.interface.prompt.showFurniture(12193);
        shark0001Button.pixelPerfect = true;
        shark0001Button.lazyName = true;

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
