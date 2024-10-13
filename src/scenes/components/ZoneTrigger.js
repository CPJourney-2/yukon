import EventComponent from './EventComponent'

// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ZoneTrigger extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.gameObject;
        /** @type {any} */
        this.callback;


        this.gameObject = gameObject;
        gameObject["__ZoneTrigger"] = this;

        /* START-USER-CTR-CODE */
        this.scene = gameObject.scene



        //this.scene.triggers.push(trigger)

        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {ZoneTrigger} */
    static getComponent(gameObject) {
        return gameObject["__ZoneTrigger"];
    }


    /* START-USER-CODE */
    start() {
        let parent = this.getParentCoords()

        this.trigger = this.scene.matter.add.rectangle(this.gameObject.x + parent.x, this.gameObject.y + parent.y, this.gameObject.width, this.gameObject.height, {
            isStatic: true
        })

        this.trigger.render.lineColor = 0x44ff44
        this.trigger.render.fillColor = 0x44ff44
        this.trigger.render.fillOpacity = 0.5
        this.trigger.callback = this.callback
        this.scene.triggers.push(this.trigger)

    }

    getParentCoords() {
        let x = 0
        let y = 0
        let gameObject = this.gameObject
        while(gameObject.parentContainer) {
            gameObject = gameObject.parentContainer
            x += gameObject.x
            y += gameObject.y
        }
        return {"x": x, "y": y}
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
