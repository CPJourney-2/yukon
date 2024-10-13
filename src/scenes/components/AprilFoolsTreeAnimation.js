import Animation from './Animation'

// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class AprilFoolsTreeAnimation extends Animation {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject;


        this.gameObject = gameObject;
        gameObject["__AprilFoolsTreeAnimation"] = this;

        /* START-USER-CTR-CODE */

        this.frameRate = 24;
        this.repeat = 0;
        this.repeatDelay = 0;
        this.autoPlay = false;
        this.onHover = false;
        this.stopOnOut = true;
        this.showOnStart = false;
        this.hideOnComplete = false;

        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {AprilFoolsTreeAnimation} */
    static getComponent(gameObject) {
        return gameObject["__AprilFoolsTreeAnimation"];
    }


    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
