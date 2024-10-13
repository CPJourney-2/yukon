
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class IcePondPuffleAnimation extends Animation {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject;


        this.gameObject = gameObject;
        gameObject["__IcePondPuffleAnimation"] = this;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {IcePondPuffleAnimation} */
    static getComponent(gameObject) {
        return gameObject["__IcePondPuffleAnimation"];
    }


    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
