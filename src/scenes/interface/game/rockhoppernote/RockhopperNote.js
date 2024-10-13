import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive } from '@components/components'

export const preload = {
    key: 'rockhoppernote-pack',
    url: 'assets/media/interface/game/rockhoppernote/rockhoppernote-pack.json',
    loadString: ['loading', 'rockhoppernote']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class RockhopperNote extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // block
        const block = scene.add.rectangle(-18, -9, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // bg
        const bg = scene.add.image(-29, -24, "rockhoppernote", "bg");
        this.add(bg);

        // buttons_close_btn
        const buttons_close_btn = scene.add.image(290, -400, "rockhoppernote", "buttons/close-btn");
        this.add(buttons_close_btn);

        // block (components)
        new Interactive(block);

        // buttons_close_btn (components)
        const buttons_close_btnButton = new Button(buttons_close_btn);
        buttons_close_btnButton.spriteName = "buttons/close-btn";
        buttons_close_btnButton.callback = () => this.interface.destroyWidget(this);
        buttons_close_btnButton.activeFrame = true;

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
