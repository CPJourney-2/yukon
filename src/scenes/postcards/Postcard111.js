/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard111 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.details;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/111", "111");
        bg.setOrigin(0, 0);
        this.add(bg);

        // details
        const details = scene.add.text(492, 502, "", {});
        details.text = "undefined";
        details.setStyle({ "color": "#5b0099", "fixedWidth":446,"fontFamily": "CCFaceFront", "fontSize": "46px", "fontStyle": "bold italic" });
        details.setPadding({"left":5,"right":5});
        this.add(details);

        this.details = details;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
