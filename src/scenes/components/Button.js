import SimpleButton from './SimpleButton'


/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Button extends SimpleButton {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject;
        /** @type {string} */
        this.spriteName = "";
        /** @type {any} */
        this.hoverCallback = null;
        /** @type {any} */
        this.hoverOutCallback = null;
        /** @type {any} */
        this.callback = () => {};
        /** @type {boolean} */
        this.activeFrame = false;
        /** @type {boolean} */
        this.pixelPerfect = false;
        /** @type {boolean} */
        this.lazyName = false;
        /** @type {Phaser.GameObjects.GameObject} */
        this.alias;


        this.gameObject = gameObject;
        gameObject["__Button"] = this;

        /* START-USER-CTR-CODE */

        this.lockFrame = false

        /* END-USER-CTR-CODE */
    }

    /** @returns {Button} */
    static getComponent(gameObject) {
        return gameObject["__Button"];
    }


    /* START-USER-CODE */

    start() {
        let gameObjectName = this.gameObject.frame.name

        if(!this.lazyName && gameObjectName.slice(-4) == '0001') {
            if(
                this.gameObject.texture.frames[gameObjectName.slice(0, -4) + '0002'] != undefined 
                && this.gameObject.texture.frames[gameObjectName + '-hover'] == undefined
            ) {
                this.lazyName = true
            }
        }

        if(this.lazyName) gameObjectName = gameObjectName.slice(0, -4)
        if(this.spriteName == "") this.spriteName = gameObjectName

        super.start()
        this.hoverZone.on('pointerdown', (pointer) => this.onDown(pointer))
    }

    onOver() {
        if (!this.lockFrame) {
            this.gameObject.setFrame(`${this.spriteName}${this.lazyName ? '0002' : '-hover'}`)
        }

        super.onOver()
    }

    onOut() {
        if (!this.lockFrame) {
            this.gameObject.setFrame(`${this.lazyName ? this.spriteName + '0001' : this.spriteName}`)
        }

        super.onOut()
    }

    onDown(pointer) {
        if (pointer.button != 0) {
            return
        }

        if (this.activeFrame) {
            this.gameObject.setFrame(`${this.spriteName}${this.lazyName ? '0003' : '-active'}`)
        } else {
            this.gameObject.setFrame(`${this.spriteName}${this.lazyName ? '0002' : '-hover'}`)
        }
    }

    onUp(pointer) {
        if (pointer.button != 0) {
            return
        }

        if (this.activeFrame) {
            this.gameObject.setFrame(`${this.lazyName ? this.spriteName + '0001' : this.spriteName}`)
        } else {
            this.gameObject.setFrame(`${this.spriteName}${this.lazyName ? '0002' : '-hover'}`)
        }

        super.onUp(pointer)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
