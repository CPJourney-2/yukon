import EventComponent from "@components/EventComponent";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ItemBuy extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.GameObject} */
        this.gameObject;
        /** @type {number} */
        this.id = 0;


        this.gameObject = gameObject;
        gameObject["__ItemBuy"] = this;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {ItemBuy} */
    static getComponent(gameObject) {
        return gameObject["__ItemBuy"];
    }


    /* START-USER-CODE */

    start() {
        super.start()
        this.gameObject.text = this.getPrice(this.id)
    }

    getPrice(id) {
        if (this.scene.crumbs.items[id]) {
            if (this.scene.crumbs.items[id].cost == 0) {
                return 'Free'
            }
            return this.scene.crumbs.items[id].cost
        }
        return 'Error'
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

//export default Button