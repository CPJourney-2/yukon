import EventComponent from './EventComponent'
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GlobalTrigger extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.gameObject;
        /** @type {any} */
        this.checkOccupants = (l) => {};


        this.gameObject = gameObject;
        gameObject["__GlobalTrigger"] = this;

        /* START-USER-CTR-CODE */
        this.scene = gameObject.scene
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {GlobalTrigger} */
    static getComponent(gameObject) {
        return gameObject["__GlobalTrigger"];
    }


    /* START-USER-CODE */
    start() {
        this.gameObject.isFilled = false
        this.gameObject._occupants = []

    }

    get penguins() {
        return this.scene.world.room.penguins
    }

    check() {
        if (!this.penguins) return
        if (!this.gameObject._occupants) this.gameObject._occupants = []
        let hover = this.gameObject

        for (let [id, penguin] of Object.entries(this.penguins)) { //For each penguin in the room

            if(hover.getBounds().contains(penguin.x, penguin.y) && !hover._occupants.includes(id)) {
                hover._occupants.push(id)
            } else if(hover._occupants.includes(id) && !hover.getBounds().contains(penguin.x, penguin.y)) {
                hover._occupants = hover._occupants.filter((i) => i != id)
            }

        }

        this.checkOccupants(hover._occupants)

    }

    onPenguinRemove(id) {
        let hover = this.gameObject
        if(hover._occupants.includes(id.toString())) {
            hover._occupants = hover._occupants.filter((i) => i != id)
        }
        this.checkOccupants(hover._occupants)
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
