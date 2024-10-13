import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive } from '@components/components'

export const preload = {
    key: 'treasuremap-pack',
    url: 'assets/media/interface/game/awards/pirateparty/treasuremap/treasuremap-pack.json',
    loadString: ['loading', 'Treasure Map']
}

/* START OF COMPILED CODE */

export default class TreasureMap extends BaseContainer {

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

        // mapBuild0001
        const mapBuild0001 = scene.add.sprite(55, 0, "treasuremap", "mapBuild0001");
        this.add(mapBuild0001);

        // buttons_close
        const buttons_close = scene.add.image(720, -438, "main", "grey-button");
        this.add(buttons_close);

        // grey_x
        const grey_x = scene.add.image(720, -440, "main", "grey-x");
        this.add(grey_x);

        // block (components)
        new Interactive(block);

        // mapBuild0001 (components)
        const mapBuild0001Animation = new Animation(mapBuild0001);
        mapBuild0001Animation.key = "mapBuild";
        mapBuild0001Animation.end = 47;
        mapBuild0001Animation.repeat = 0;

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
	show() {
		super.show()
		this.soundManager.playSfx('mapcomplete')
	}

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
