import ItemIconLoader from '@engine/loaders/ItemIconLoader'

/* START OF COMPILED CODE */

import BaseContainer from "../base/BaseContainer";
import SimpleButton from "../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class RoomPin extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle;
        /** @type {number} */
        this.itemId = 0;


        // rectangle
        const rectangle = scene.add.rectangle(0, 0, 128, 128);
        rectangle.alpha = 0.7;
        rectangle.isFilled = true;
        rectangle.fillColor = 6815741;
        rectangle.isStroked = true;
        rectangle.strokeColor = 16716049;
        rectangle.lineWidth = 10;
        this.add(rectangle);

        // button
        const button = scene.add.rectangle(0, 0, 128, 128);
        button.fillColor = 6815741;
        button.strokeColor = 16716049;
        button.lineWidth = 10;
        this.add(button);

        // button (components)
        const buttonSimpleButton = new SimpleButton(button);
        buttonSimpleButton.callback = () => this.onPin();

        this.rectangle = rectangle;

        /* START-USER-CTR-CODE */
        scene.events.on("scene-awake", () => {this.loadPin()})
        this.itemIconLoader = new ItemIconLoader(this.scene, this, false)
        this.rectangle.visible = false

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    loadPin() {
        if(this.icon) return

        this.itemIconLoader.startItemLoad(this.itemId)
    }

    onSnowballComplete(x, y, ball) {
        if (this.rectangle.getBounds().contains(x, y)) {
            this.interface.main.snowballFactory.destroyBall(ball);
        }
    }

    onPin() {
        this.interface.prompt.showItem(this.itemId)    
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
