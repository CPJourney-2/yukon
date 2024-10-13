import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive } from '@components/components'

export const preload = {
    key: 'cardjitsuinstructions-asset-pack',
    url: 'assets/media/interface/game/cardjitsuinstructions/cardjitsuinstructions-asset-pack.json',
    loadString: ['loading', 'cardjitsuinstructions']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class CardJitsuInstructions extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // block
        const block = scene.add.rectangle(-12, 10, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // bg
        const bg = scene.add.image(11, -2, "cardjitsuinstructions", "instructions");
        this.add(bg);

        // closing_this
        const closing_this = scene.add.image(218, -336, "cardjitsuinstructions", "closing_this");
        this.add(closing_this);

        // block (components)
        new Interactive(block);

        // closing_this (components)
        const closing_thisButton = new Button(closing_this);
        closing_thisButton.spriteName = "closing_this";
        closing_thisButton.callback = () => this.interface.destroyWidget(this);
        closing_thisButton.activeFrame = true;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
