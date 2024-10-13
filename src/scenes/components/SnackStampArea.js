
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SnackStampArea {

    constructor(gameObject) {

        /** @type {Phaser.GameObjects.Image} */
        this.gameObject;

        this.gameObject = gameObject;
        gameObject["__SnackStampArea"] = this;

        /* START-USER-CTR-CODE */
        this.gameObject.scene.snackStampAreas.push(this.gameObject)
        /* END-USER-CTR-CODE */
    }

    /** @returns {SnackStampArea} */
    static getComponent(gameObject) {
        return gameObject["__SnackStampArea"];
    }


    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
