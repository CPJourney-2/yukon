/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard243 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.date;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/243", "243");
        bg.setOrigin(0, 0);
        this.add(bg);

        // date
        const date = scene.add.text(135, 663, "", {});
        date.text = "undefined undefined, undefined";
        date.setStyle({ "color": "#999999", "fixedWidth":358,"fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        date.setPadding({"left":5,"right":5});
        this.add(date);

        // date_1
        const date_1 = scene.add.text(39, 664, "", {});
        date_1.text = "Sent on:";
        date_1.setStyle({ "color": "#999999", "fixedWidth":100,"fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        date_1.setPadding({"left":5,"right":5});
        this.add(date_1);

        this.date = date;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
