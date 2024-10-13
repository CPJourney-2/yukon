import Spinner from '@scenes/interface/menus/load/Spinner'
/* START OF COMPILED CODE */

export default class TreasureHuntPlayer extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Spinner} */
        this.spinner;
        /** @type {Phaser.GameObjects.Text} */
        this.waiting;
        /** @type {Phaser.GameObjects.Text} */
        this.username;
        /** @type {Phaser.GameObjects.Image} */
        this.spade1;
        /** @type {Phaser.GameObjects.Image} */
        this.spade2;
        /** @type {Phaser.GameObjects.Image} */
        this.spade3;
        /** @type {Phaser.GameObjects.Image} */
        this.spade4;
        /** @type {Phaser.GameObjects.Image} */
        this.spade5;
        /** @type {Phaser.GameObjects.Image} */
        this.spade6;
        /** @type {Phaser.GameObjects.Image[]} */
        this.spades;


        // spinner
        const spinner = new Spinner(scene, 0, 0);
        spinner.scaleX = 0.8;
        spinner.scaleY = 0.8;
        this.add(spinner);

        // waiting
        const waiting = scene.add.text(49, 0, "", {});
        waiting.setOrigin(0, 0.5);
        waiting.text = "Waiting for Player";
        waiting.setStyle({ "fixedWidth":260,"fontFamily": "Arial", "fontSize": "24px" });
        this.add(waiting);

        // username
        const username = scene.add.text(-32, 0, "", {});
        username.setOrigin(0, 0.5);
        username.visible = false;
        username.text = "USERNAME";
        username.setStyle({ "color": "#d5f1ff", "fixedWidth":260,"fontFamily": "CCFaceFront", "fontSize": "32px", "stroke": "#336699", "strokeThickness":9});
        this.add(username);

        // spade1
        const spade1 = scene.add.image(466, 0, "treasurehunt", "icons/spade");
        this.add(spade1);

        // spade2
        const spade2 = scene.add.image(429, 0, "treasurehunt", "icons/spade");
        this.add(spade2);

        // spade3
        const spade3 = scene.add.image(393, 0, "treasurehunt", "icons/spade");
        this.add(spade3);

        // spade4
        const spade4 = scene.add.image(357, 0, "treasurehunt", "icons/spade");
        this.add(spade4);

        // spade5
        const spade5 = scene.add.image(322, 0, "treasurehunt", "icons/spade");
        this.add(spade5);

        // spade6
        const spade6 = scene.add.image(287, 0, "treasurehunt", "icons/spade");
        this.add(spade6);

        // lists
        const spades = [spade1, spade6, spade5, spade4, spade3, spade2];

        this.spinner = spinner;
        this.waiting = waiting;
        this.username = username;
        this.spade1 = spade1;
        this.spade2 = spade2;
        this.spade3 = spade3;
        this.spade4 = spade4;
        this.spade5 = spade5;
        this.spade6 = spade6;
        this.spades = spades;

        /* START-USER-CTR-CODE */

        this.turnId
        this.lives = 6

        // Spinner
        this.spinner.start()

        this.inactiveColor = username.style.color
        this.inactiveStroke = username.style.stroke

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    set(username,turn) {
        this.turnId = turn

        this.spinner.stop()
        this.waiting.visible = false

        this.username.text = username.toUpperCase()
        this.username.visible = true
    }

    reset() {
        this.turnId = null
        this.lives = 6

        this.spinner.start()
        this.waiting.visible = true

        this.username.text = ''
        this.username.visible = false

        for(let spade of this.spades) spade.setFrame('icons/spade')

        this.setActive(true)
    }

    setActive(reset = null) {
        let active = (reset)
            ? false
            : this.turnId === this.parentContainer.currentTurn

        let color = (active) ? '#fff' : this.inactiveColor
        let stroke = (active) ? '#000' : this.inactiveStroke

        this.username.setColor(color)
        this.username.setStroke(stroke)
    }

    updateLives(lives) {
        this.lives = lives
        this[`spade${lives + 1}`].setFrame('icons/spade-disabled')
    }

    setLives(lives) {
        this.lives = lives
        for(let i = 6; i > lives; i--) {
            this[`spade${i}`].setFrame('icons/spade-disabled')
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
