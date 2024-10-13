
// You can write more code here
import EventComponent from './EventComponent'

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PuffleColourThing extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Image} */
        this.gameObject;
        /** @type {string} */
        this.key = "";


        this.gameObject = gameObject;
        gameObject["__PuffleColourThing"] = this;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {PuffleColourThing} */
    static getComponent(gameObject) {
        return gameObject["__PuffleColourThing"];
    }


    /* START-USER-CODE */

    start() {
       this.updatePuffle()
    }

    update() { // maybe find a better solution i think this is called per-frame
        this.updatePuffle()
    }

    updatePuffle() {
        let frame = ""

        let piffle = this.gameObject.scene.world.client.penguin.puffle

        if (piffle == null) return

        switch (piffle.type) {
            case 0: 
                frame = "0002"
                break;
            case 1 : 
                frame = "0003"
                break;
            case 2 : 
                frame = "0008"
                break;
            case 3 : 
                frame = "0005"
                break;
            case 4 : 
                frame = "0006"
                break;
            case 5 : 
                frame = "0004"
                break;
            case 6 : 
                frame = "0007"
                break;
            case 7 : 
                frame = "0009"
                break;
            case 8 : 
                frame = "0010"
                break;
            case 9 : 
                frame = "0011"
                break;
            default : 
                frame = "0001"
                break;
        }

        if (this.gameObject.texture.frames[`${this.key}${frame}`] == undefined) {
            return
        }

        this.gameObject.setFrame(`${this.key}${frame}`)
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
