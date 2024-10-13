
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../../base/BaseContainer";
import Button from "../../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CottonCandy extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // cottonstand
        const cottonstand = scene.add.image(77, 113, "villageprizes", "cottonstand");
        this.add(cottonstand);

        // shelf_1
        const shelf_1 = scene.add.image(80, 171, "villageprizes", "shelf");
        this.add(shelf_1);

        // cottoncandy10001
        const cottoncandy10001 = scene.add.image(5, 0, "villageprizes", "cottoncandy10001");
        this.add(cottoncandy10001);

        // cottoncandy20001
        const cottoncandy20001 = scene.add.image(149, 0, "villageprizes", "cottoncandy20001");
        this.add(cottoncandy20001);

        // ticketsign
        const ticketsign = scene.add.image(88, 187, "villageprizes", "ticketsign1");
        this.add(ticketsign);

        // ticketicon_1
        const ticketicon_1 = scene.add.image(140, 188, "villageprizes", "ticketicon");
        this.add(ticketicon_1);

        // text
        const text = scene.add.text(80, 184, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "100";
        text.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text.setPadding({"left":10});
        this.add(text);

        // cottoncandy10001 (components)
        const cottoncandy10001Button = new Button(cottoncandy10001);
        cottoncandy10001Button.spriteName = "cottoncandy1";
        cottoncandy10001Button.callback = () => this.interface.prompt.showItem(350);
        cottoncandy10001Button.lazyName = true;

        // cottoncandy20001 (components)
        const cottoncandy20001Button = new Button(cottoncandy20001);
        cottoncandy20001Button.spriteName = "cottoncandy2";
        cottoncandy20001Button.callback = () => this.interface.prompt.showItem(5004);
        cottoncandy20001Button.lazyName = true;

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
