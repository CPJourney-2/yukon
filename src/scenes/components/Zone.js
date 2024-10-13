import SimpleButton from './SimpleButton'


/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Zone extends SimpleButton {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.gameObject;
        /** @type {any} */
        this.hoverCallback = null;
        /** @type {any} */
        this.hoverOutCallback = null;
        /** @type {any} */
        this.callback = () => {};
        /** @type {boolean} */
        this.useHandCursor = true;
        /** @type {boolean} */
        this.clickThrough = false;


        this.gameObject = gameObject;
        gameObject["__Zone"] = this;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {Zone} */
    static getComponent(gameObject) {
        return gameObject["__Zone"];
    }


    /* START-USER-CODE */

    start() {
        this.gameObject.visible = false

        const x = this.getX(this.gameObject)
        const y = this.getY(this.gameObject)

        const zone = this.scene.add.zone(x, y, this.gameObject.width, this.gameObject.height)
        zone.isButton = !this.clickThrough
        zone.angle = this.gameObject.angle

        zone.setInteractive({
            cursor: this.useHandCursor ? 'pointer' : 'default',
        })

        zone.on('pointerover', () => this.onOver())
        zone.on('pointerout', () => this.onOut())
        zone.on('pointerup', (pointer) => this.onUp(pointer))

        this.gameObject.zone = zone
    }

    getX(gameObject) {
        if (!gameObject.parentContainer) {
            return gameObject.x
        }

        // Get global coordinates of gameObject
        const matrix = gameObject.getWorldTransformMatrix()

        return matrix.getX(0, 0)
    }

    getY(gameObject) {
        if (!gameObject.parentContainer) {
            return gameObject.y
        }

        // Get global coordinates of gameObject
        const matrix = gameObject.getWorldTransformMatrix()

        return matrix.getY(0, 0)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
