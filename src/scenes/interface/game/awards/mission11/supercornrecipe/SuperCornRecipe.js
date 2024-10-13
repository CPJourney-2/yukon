import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive } from '@components/components'

export const preload = {
    key: 'mission11-supercornrecipe-pack',
    url: 'assets/media/interface/game/awards/mission11/supercornrecipe/mission11-supercornrecipe-pack.json',
    loadString: ['loading', 'Super Corn Recipe']
}

/* START OF COMPILED CODE */

export default class SuperCornRecipe extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // block
        const block = scene.add.rectangle(-12, 10, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.3;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // directions
        const directions = scene.add.image(-760, -480, "mission11-supercornrecipe", "directions");
        directions.setOrigin(0, 0);
        this.add(directions);

        // buttons_close
        const buttons_close = scene.add.image(196, -276, "main", "grey-button");
        this.add(buttons_close);

        // grey_x
        const grey_x = scene.add.image(196, -278, "main", "grey-x");
        this.add(grey_x);

        // block (components)
        new Interactive(block);

        // buttons_close (components)
        const buttons_closeButton = new Button(buttons_close);
        buttons_closeButton.spriteName = "grey-button";
        buttons_closeButton.callback = () => this.interface.destroyWidget(this);
        buttons_closeButton.activeFrame = true;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */