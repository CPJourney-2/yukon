/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
import JitsuGoToButton from "./buttons/JitsuGoToButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard134 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {JitsuGoToButton} */
        this.goToButton;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/134", "134");
        bg.setOrigin(0, 0);
        this.add(bg);

        // goToButton
        const goToButton = new JitsuGoToButton(scene, 126, 617);
        this.add(goToButton);

        // goToButton (prefab fields)
        goToButton.roomId = 322;

        this.goToButton = goToButton;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
