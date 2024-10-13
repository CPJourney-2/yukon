import BaseContainer from '@scenes/base/BaseContainer'

/* START OF COMPILED CODE */

export default class TicketIndicator extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.ticketCount;


        // fair_ticket_indicator
        const fair_ticket_indicator = scene.add.image(0, 0, "fair-ticket-indicator");
        this.add(fair_ticket_indicator);

        // ticketCount
        const ticketCount = scene.add.text(19, 19, "", {});
        ticketCount.setOrigin(0.5, 0.5);
        ticketCount.text = "+5";
        ticketCount.setStyle({ "align": "center", "color": "#000", "fixedWidth":70,"fontFamily": "CCFaceFront", "fontSize": "32px", "strokeThickness":8});
        this.add(ticketCount);

        this.ticketCount = ticketCount;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(tickets) {
        this.ticketCount.text = `+${tickets}`

        this.setPosition(this.world.client.penguin.x, this.world.client.penguin.y - 40)
        this.alpha = 0
        
        if (this.moveTween) this.moveTween.destroy()

        this.moveTween = this.scene.tweens.chain({
            targets: this,
            ease: 'Cubic',
            tweens: [
                {
                    y: '-=60',
                    alpha: 1,
                    duration: 400
                },
                {
                    delay: 750,
                    y: '-=50',
                    alpha: 0,
                    duration: 400
                }
            ]
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */