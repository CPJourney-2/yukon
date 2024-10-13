/* START OF COMPILED CODE */

import GoToButton from "./GoToButton";
/* START-USER-IMPORTS */

import Button from '@scenes/components/Button'

/* END-USER-IMPORTS */

export default class JitsuGoToButton extends GoToButton {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 760, y ?? 480, texture || "mail-gotherejitsu", frame ?? "gotherejitsu");

        /** @type {number} */
        this.roomId = 0;


        this.setOrigin(0.5031847133757962, 0.5);

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    enableInput() {
        const component = new Button(this)

        component.spriteName = 'gotherejitsu'
        component.callback = () => this.onClick()
        component.activeFrame = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
