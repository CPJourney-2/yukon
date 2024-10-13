import EventComponent from './EventComponent'


/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MoveToFrame extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.GameObject} */
        this.gameObject;
        /** @type {number} */
        this.afterFrame = 0;
        /** @type {number} */
        this.x = 0;
        /** @type {number} */
        this.y = 0;


        this.gameObject = gameObject;
        gameObject["__MoveToFrame"] = this;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {MoveToFrame} */
    static getComponent(gameObject) {
        return gameObject["__MoveToFrame"];
    }


    /* START-USER-CODE */

    start() {
        // If x/y is 0 then use gameObject coordinate
        this.x = (this.x) ? this.x : this.getX(this.gameObject)
        this.y = (this.y) ? this.y : this.getY(this.gameObject)

        let gameObject = (this.gameObject.zone) ? this.gameObject.zone : this.gameObject

        gameObject.on('pointerup', (pointer) => this.onPointerUp(pointer))
    }

    getX(gameObject) {
        if (!gameObject.parentContainer) {
            return gameObject.x
        }

        // Get global coordinates of gameObject
        let matrix = gameObject.getWorldTransformMatrix()

        return matrix.getX(0, 0)
    }

    getY(gameObject) {
        if (!gameObject.parentContainer) {
            return gameObject.y
        }

        // Get global coordinates of gameObject
        let matrix = gameObject.getWorldTransformMatrix()

        return matrix.getY(0, 0)
    }

    onPointerUp(pointer) {
        if (pointer.button != 0) {
            return
        }

        this.gameObject.scene.world.client.sendMove(this.x, this.y, this.afterFrame)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
