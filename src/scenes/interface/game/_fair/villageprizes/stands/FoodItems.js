
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../../base/BaseContainer";
import Button from "../../../../../components/Button";
import SimpleButton from "../../../../../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FoodItems extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // nuggetmann
        const nuggetmann = scene.add.image(9, 721, "villageprizes", "nuggetmann");
        nuggetmann.scaleX = 0.89;
        nuggetmann.scaleY = 0.89;
        this.add(nuggetmann);

        // fishfeet0001
        const fishfeet0001 = scene.add.image(5, 920, "villageprizes", "fishfeet0001");
        this.add(fishfeet0001);

        // cheeseskirt0001
        const cheeseskirt0001 = scene.add.image(0, 802, "villageprizes", "cheeseskirt0001");
        this.add(cheeseskirt0001);

        // saucehands0001
        const saucehands0001 = scene.add.image(3, 700, "villageprizes", "saucehands0001");
        this.add(saucehands0001);

        // shrimplei0001
        const shrimplei0001 = scene.add.image(2, 618, "villageprizes", "shrimplei0001");
        this.add(shrimplei0001);

        // seaweed0001
        const seaweed0001 = scene.add.image(1, 542, "villageprizes", "seaweed0001");
        this.add(seaweed0001);

        // squid0001
        const squid0001 = scene.add.image(3, 372, "villageprizes", "squid0001");
        this.add(squid0001);

        // ticketsign_4
        const ticketsign_4 = scene.add.image(290, 438, "villageprizes", "ticketsign2");
        this.add(ticketsign_4);

        // ticketsign2
        const ticketsign2 = scene.add.image(257, 292, "villageprizes", "ticketsign2");
        this.add(ticketsign2);

        // ticketsign_2
        const ticketsign_2 = scene.add.image(212, 168, "villageprizes", "ticketsign2");
        this.add(ticketsign_2);

        // ticketsign_3
        const ticketsign_3 = scene.add.image(188, 0, "villageprizes", "ticketsign2");
        this.add(ticketsign_3);

        // signstand_1
        const signstand_1 = scene.add.image(296, 990, "villageprizes", "signstand");
        this.add(signstand_1);

        // text_1
        const text_1 = scene.add.text(113, 320, "", {});
        text_1.text = "250";
        text_1.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_1.setPadding({"left":10});
        this.add(text_1);

        // ticketicon
        const ticketicon = scene.add.image(257, 351, "villageprizes", "ticketicon");
        this.add(ticketicon);

        // text
        const text = scene.add.text(135, 486, "", {});
        text.text = "200";
        text.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text.setPadding({"left":10});
        this.add(text);

        // ticketicon_1
        const ticketicon_1 = scene.add.image(279, 517, "villageprizes", "ticketicon");
        this.add(ticketicon_1);

        // text_2
        const text_2 = scene.add.text(185, 611, "", {});
        text_2.text = "500";
        text_2.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_2.setPadding({"left":10});
        this.add(text_2);

        // ticketicon_2
        const ticketicon_2 = scene.add.image(329, 642, "villageprizes", "ticketicon");
        this.add(ticketicon_2);

        // text_3
        const text_3 = scene.add.text(215, 758, "", {});
        text_3.text = "450";
        text_3.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_3.setPadding({"left":10});
        this.add(text_3);

        // ticketicon_3
        const ticketicon_3 = scene.add.image(359, 789, "villageprizes", "ticketicon");
        this.add(ticketicon_3);

        // ticketsign3
        const ticketsign3 = scene.add.image(278, 915, "villageprizes", "ticketsign3");
        this.add(ticketsign3);

        // text_4
        const text_4 = scene.add.text(206, 886, "", {});
        text_4.text = "450";
        text_4.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_4.setPadding({"left":10});
        this.add(text_4);

        // ticketicon_4
        const ticketicon_4 = scene.add.image(350, 917, "villageprizes", "ticketicon");
        this.add(ticketicon_4);

        // fishfeet0001 (components)
        const fishfeet0001Button = new Button(fishfeet0001);
        fishfeet0001Button.spriteName = "fishfeet";
        fishfeet0001Button.callback = () => this.interface.prompt.showItem(380610);
        fishfeet0001Button.lazyName = true;

        // cheeseskirt0001 (components)
        const cheeseskirt0001Button = new Button(cheeseskirt0001);
        cheeseskirt0001Button.spriteName = "cheeseskirt";
        cheeseskirt0001Button.callback = () => this.interface.prompt.showItem(380607);
        cheeseskirt0001Button.lazyName = true;

        // saucehands0001 (components)
        const saucehands0001SimpleButton = new SimpleButton(saucehands0001);
        saucehands0001SimpleButton.callback = () => this.interface.prompt.showItem(380608);
        saucehands0001SimpleButton.pixelPerfect = true;

        // shrimplei0001 (components)
        const shrimplei0001Button = new Button(shrimplei0001);
        shrimplei0001Button.spriteName = "shrimplei";
        shrimplei0001Button.callback = () => this.interface.prompt.showItem(380606);
        shrimplei0001Button.pixelPerfect = true;
        shrimplei0001Button.lazyName = true;

        // seaweed0001 (components)
        const seaweed0001Button = new Button(seaweed0001);
        seaweed0001Button.spriteName = "seaweed";
        seaweed0001Button.callback = () => this.interface.prompt.showItem(380605);
        seaweed0001Button.lazyName = true;

        // squid0001 (components)
        const squid0001Button = new Button(squid0001);
        squid0001Button.spriteName = "squid";
        squid0001Button.callback = () => this.interface.prompt.showItem(380604);
        squid0001Button.lazyName = true;

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
