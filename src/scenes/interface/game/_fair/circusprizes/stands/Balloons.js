
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../../base/BaseContainer";
import Button from "../../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Balloons extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // balloonstand
        const balloonstand = scene.add.image(168, 345, "circusprizes", "balloonstand");
        this.add(balloonstand);

        // balloon_orange0001
        const balloon_orange0001 = scene.add.image(174, 0, "circusprizes", "balloon-orange0001");
        this.add(balloon_orange0001);

        // balloon_red0001
        const balloon_red0001 = scene.add.image(66, 44, "circusprizes", "balloon-red0001");
        this.add(balloon_red0001);

        // helium0001
        const helium0001 = scene.add.image(0, 279, "circusprizes", "helium0001");
        this.add(helium0001);

        // balloon_purp0001
        const balloon_purp0001 = scene.add.image(69, 167, "circusprizes", "balloon-purp0001");
        this.add(balloon_purp0001);

        // balloon_yellow0001
        const balloon_yellow0001 = scene.add.image(290, 79, "circusprizes", "balloon-yellow0001");
        this.add(balloon_yellow0001);

        // balloon_green0001
        const balloon_green0001 = scene.add.image(177, 159, "circusprizes", "balloon-green0001");
        this.add(balloon_green0001);

        // ticketsign_3
        const ticketsign_3 = scene.add.image(194, 317, "circusprizes", "ticketsign1");
        ticketsign_3.angle = -10;
        this.add(ticketsign_3);

        // text_5
        const text_5 = scene.add.text(181, 319, "", {});
        text_5.angle = -10;
        text_5.setOrigin(0.5, 0.5);
        text_5.text = "100   \nEACH!";
        text_5.setStyle({ "align": "center", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_5.setPadding({"left":10});
        text_5.setLineSpacing(-10);
        this.add(text_5);

        // ticketicon_5
        const ticketicon_5 = scene.add.image(226, 292, "circusprizes", "ticketicon");
        ticketicon_5.scaleX = 0.6;
        ticketicon_5.scaleY = 0.6;
        ticketicon_5.angle = -10;
        this.add(ticketicon_5);

        // balloon_orange0001 (components)
        const balloon_orange0001Button = new Button(balloon_orange0001);
        balloon_orange0001Button.spriteName = "balloon-orange";
        balloon_orange0001Button.callback = () => this.interface.prompt.showItem(5042);
        balloon_orange0001Button.pixelPerfect = true;
        balloon_orange0001Button.lazyName = true;

        // balloon_red0001 (components)
        const balloon_red0001Button = new Button(balloon_red0001);
        balloon_red0001Button.spriteName = "balloon-red";
        balloon_red0001Button.callback = () => this.interface.prompt.showItem(5116);
        balloon_red0001Button.pixelPerfect = true;
        balloon_red0001Button.lazyName = true;

        // helium0001 (components)
        const helium0001Button = new Button(helium0001);
        helium0001Button.spriteName = "helium";
        helium0001Button.callback = () => this.interface.prompt.showItem(5112);
        helium0001Button.pixelPerfect = true;
        helium0001Button.lazyName = true;

        // balloon_purp0001 (components)
        const balloon_purp0001Button = new Button(balloon_purp0001);
        balloon_purp0001Button.spriteName = "balloon-purp";
        balloon_purp0001Button.callback = () => this.interface.prompt.showItem(5111);
        balloon_purp0001Button.pixelPerfect = true;
        balloon_purp0001Button.lazyName = true;

        // balloon_yellow0001 (components)
        const balloon_yellow0001Button = new Button(balloon_yellow0001);
        balloon_yellow0001Button.spriteName = "balloon-yellow";
        balloon_yellow0001Button.callback = () => this.interface.prompt.showItem(5117);
        balloon_yellow0001Button.pixelPerfect = true;
        balloon_yellow0001Button.lazyName = true;

        // balloon_green0001 (components)
        const balloon_green0001Button = new Button(balloon_green0001);
        balloon_green0001Button.spriteName = "balloon-green";
        balloon_green0001Button.callback = () => this.interface.prompt.showItem(5076);
        balloon_green0001Button.pixelPerfect = true;
        balloon_green0001Button.lazyName = true;

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
