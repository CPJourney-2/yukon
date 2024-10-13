import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton, Interactive } from '@components/components'

export const preload = {
    key: 'psanotecode-pack',
    url: 'assets/media/interface/game/_mission11/psanotecode/psanotecode-pack.json',
    loadString: ['loading', 'Note']
}

/* START OF COMPILED CODE */

export default class PSANoteCode extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // block
        const block = scene.add.rectangle(-12, 10, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.2;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // directions
        const directions = scene.add.image(98, 0, "psanotecode");
        this.add(directions);

        // block (components)
        const blockSimpleButton = new SimpleButton(block);
        blockSimpleButton.callback = () => this.close();

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
