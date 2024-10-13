
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../../base/BaseContainer";
import Button from "../../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CornDogs extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // corndogtray
        const corndogtray = scene.add.image(5, 118, "villageprizes", "corndogtray");
        this.add(corndogtray);

        // corndog10001
        const corndog10001 = scene.add.image(-20, 91, "villageprizes", "corndog10001");
        this.add(corndog10001);

        // corndog20001
        const corndog20001 = scene.add.image(27, 64, "villageprizes", "corndog20001");
        this.add(corndog20001);

        // signstand
        const signstand = scene.add.image(177, 110, "villageprizes", "signstand");
        this.add(signstand);

        // ticketsign_1
        const ticketsign_1 = scene.add.image(173, 30, "villageprizes", "ticketsign1");
        this.add(ticketsign_1);

        // ticketicon_2
        const ticketicon_2 = scene.add.image(229, 31, "villageprizes", "ticketicon");
        this.add(ticketicon_2);

        // text_2
        const text_2 = scene.add.text(162, 27, "", {});
        text_2.setOrigin(0.5, 0.5);
        text_2.text = "150";
        text_2.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_2.setPadding({"left":10});
        this.add(text_2);

        // corndog10001 (components)
        const corndog10001Button = new Button(corndog10001);
        corndog10001Button.spriteName = "corndog1";
        corndog10001Button.callback = () => this.interface.prompt.showItem(380592);
        corndog10001Button.pixelPerfect = true;
        corndog10001Button.lazyName = true;

        // corndog20001 (components)
        const corndog20001Button = new Button(corndog20001);
        corndog20001Button.spriteName = "corndog2";
        corndog20001Button.callback = () => this.interface.prompt.showItem(380591);
        corndog20001Button.pixelPerfect = true;
        corndog20001Button.lazyName = true;

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
