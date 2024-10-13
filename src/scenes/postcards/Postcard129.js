/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard129 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.receiverName;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/129", "129");
        bg.setOrigin(0, 0);
        this.add(bg);

        // receiverName
        const receiverName = scene.add.text(256, 553, "", {});
        receiverName.text = "penguin88888888";
        receiverName.setStyle({ "color": "#023888", "fixedWidth":450,"fixedHeight":70,"fontFamily": "Comic Sans MS", "fontSize": "45px", "fontStyle": "bold" });
        receiverName.setPadding({"left":5,"right":5});
        this.add(receiverName);

        this.receiverName = receiverName;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
