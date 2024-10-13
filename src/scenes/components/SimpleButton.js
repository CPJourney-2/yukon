import EventComponent from './EventComponent'


/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SimpleButton extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject;
        /** @type {any} */
        this.hoverCallback = null;
        /** @type {any} */
        this.hoverOutCallback = null;
        /** @type {any} */
        this.callback = () => {};
        /** @type {boolean} */
        this.pixelPerfect = false;
        /** @type {boolean} */
        this.showOutline = false;
        /** @type {any} */
        this.downCallback = null;
        /** @type {boolean} */
        this.useHandCursor = true;


        this.gameObject = gameObject;
        gameObject["__SimpleButton"] = this;

        /* START-USER-CTR-CODE */
        /** @type {Phaser.GameObjects.GameObject} */
        this.alias;

        this.gameObject.isButton = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {SimpleButton} */
    static getComponent(gameObject) {
        return gameObject["__SimpleButton"];
    }


    /* START-USER-CODE */

    start() {
        if(this.alias != null) {
            this.hoverZone = this.alias
            this.gameObject.isButton = false
        } else {
            this.hoverZone = this.gameObject
        }
        this.hoverZone.isButton = true

        if(this.hoverZone.type == 'Polygon') {
            this.hoverZone.setInteractive({
                cursor: this.useHandCursor ? 'pointer' : 'default',
                hitArea: new Phaser.Geom.Polygon(this.hoverZone.geom.points),
                hitAreaCallback: Phaser.Geom.Polygon.Contains
            })
        } else {
            this.hoverZone.setInteractive({
                cursor: this.useHandCursor ? 'pointer' : 'default',
                pixelPerfect: this.pixelPerfect
            })
        }

        this.hoverZone.on('pointerover', () => this.onOver())
        this.hoverZone.on('pointerout', () => this.onOut())
        this.hoverZone.on('pointerup', (pointer) => this.onUp(pointer))
        this.hoverZone.on('pointerdown', (pointer) => this.onDown(pointer))
    }

    onOver() {
        if (this.showOutline) var pipelineInstance = this.gameObject.scene.plugins.get('rexOutlinePipeline').add(this.gameObject, {});

        if (this.hoverCallback) this.hoverCallback()
    }

    onOut() {
        if (this.showOutline) this.gameObject.scene.plugins.get('rexOutlinePipeline').remove(this.gameObject);

        if (this.hoverOutCallback) this.hoverOutCallback()
    }

    onUp(pointer) {
        if (pointer.button != 0) {
            return
        }

        this.callback(pointer)
    }

    onDown(pointer) {
        if (pointer.button != 0) {
            return
        }

        if(this.downCallback) this.downCallback()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
