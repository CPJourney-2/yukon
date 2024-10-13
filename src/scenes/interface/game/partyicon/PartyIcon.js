import BaseContainer from '@scenes/base/BaseContainer'
import { Animation, Button, SimpleButton } from '@components/components'
// You can write more code here

/* START OF COMPILED CODE */

export default class PartyIcon extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.ticketCount;


        // ticket
        const ticket = scene.add.image(0, 0, "ticket");
        this.add(ticket);

        // ticketCount
        const ticketCount = scene.add.text(0, -16, "", {});
        ticketCount.setOrigin(0.5, 0.5);
        ticketCount.text = "0";
        ticketCount.setStyle({ "align": "center", "color": "#000", "fixedWidth":140,"fontFamily": "CCFaceFront", "fontSize": "22px" });
        this.add(ticketCount);

        // tickets
        const tickets = scene.add.text(0, 13.08855676651001, "", {});
        tickets.setOrigin(0.5, 0.5);
        tickets.text = "TICKETS";
        tickets.setStyle({ "align": "center", "color": "#000", "fixedWidth":150,"fontFamily": "CCFaceFront", "fontSize": "22px" });
        this.add(tickets);

        // ticket (components)
        const ticketSimpleButton = new SimpleButton(ticket);
        ticketSimpleButton.callback = () => this.onClick();

        this.ticketCount = ticketCount;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onClick() {
        this.interface.loadWidget('TicketInfo');
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */