
// You can write more code here
import EventComponent from './EventComponent'

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ScavengerItem extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject;
        /** @type {number} */
        this.huntItemId = 0;
        /** @type {any} */
        this.onItemAlreadyCollected = null;
        /** @type {any} */
        this.onCollect = null;


        this.gameObject = gameObject;
        gameObject["__ScavengerItem"] = this;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {ScavengerItem} */
    static getComponent(gameObject) {
        return gameObject["__ScavengerItem"];
    }


    /* START-USER-CODE */
    start() {
       if(this.gameObject.scene.world.scavenger.collectedItems.includes(this.huntItemId)) {
            if(!this.onItemAlreadyCollected) {
                this.gameObject.visible = false
            } else {
                this.onItemAlreadyCollected()
            }
           return
       }
       let gameObject = (this.gameObject.zone) ? this.gameObject.zone : this.gameObject

       gameObject.on('pointerup', (pointer) => this.collect(pointer))
    }

    collect(pointer) {
        if (pointer.button != 0) {
            return
        }

        this.gameObject.scene.world.scavenger.collect(this.huntItemId)

        if(!this.onCollect) {
            this.gameObject.visible = false
        } else {
            this.onCollect()
        }
    }
    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
