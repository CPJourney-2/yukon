import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive } from '@components/components'

export const preload = {
    key: 'medaltwo-pack',
    url: 'assets/media/interface/game/awards/missions/two/medaltwo-pack.json',
    loadString: ['loading', 'award_q2_medal']
}

/* START OF COMPILED CODE */

export default class MedalTwo extends BaseContainer {

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
        const bg = scene.add.image(11, -2, "medaltwo", "award_q2_medal");
        this.add(bg);

        // buttons_close
        const buttons_close = scene.add.image(288, -366, "main", "grey-button");
        this.add(buttons_close);

        // grey_x
        const grey_x = scene.add.image(288, -368, "main", "grey-x");
        this.add(grey_x);

        // block (components)
        new Interactive(block);

        // buttons_close (components)
        const buttons_closeButton = new Button(buttons_close);
        buttons_closeButton.spriteName = "grey-button";
        buttons_closeButton.callback = () => this.interface.destroyWidget(this);
        buttons_closeButton.activeFrame = true;

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
