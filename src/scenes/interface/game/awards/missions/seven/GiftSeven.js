import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive } from '@components/components'

export const preload = {
    key: 'giftseven-pack',
    url: 'assets/media/interface/game/awards/missions/seven/giftseven-pack.json',
    loadString: ['loading', 'award_q7_gift']
}

/* START OF COMPILED CODE */

export default class GiftSeven extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.penguinName;


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
        const bg = scene.add.image(-8, -2, "award_q7_gift");
        this.add(bg);

        // buttons_close
        const buttons_close = scene.add.image(274, -363, "main", "grey-button");
        this.add(buttons_close);

        // grey_x
        const grey_x = scene.add.image(274, -365, "main", "grey-x");
        this.add(grey_x);

        // penguinName
        const penguinName = scene.add.text(-6, -175, "", {});
        penguinName.setOrigin(0.5, 0.5);
        penguinName.text = "TESTNAME123";
        penguinName.setStyle({ "align": "center", "baselineX":0,"baselineY":0,"color": "#ffffffff", "fontFamily": "Impact", "fontSize": "45px" });
        penguinName.setLineSpacing(-5);
        this.add(penguinName);

        // todolang
        const todolang = scene.add.text(-11, 107, "", {});
        todolang.setOrigin(0.5, 0.5);
        todolang.text = "HONORARY MEMBER\nBLUE TEAM";
        todolang.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Impact", "fontSize": "40px" });
        todolang.setLineSpacing(-5);
        this.add(todolang);

        // block (components)
        new Interactive(block);

        // buttons_close (components)
        const buttons_closeButton = new Button(buttons_close);
        buttons_closeButton.spriteName = "grey-button";
        buttons_closeButton.callback = () => this.interface.destroyWidget(this);
        buttons_closeButton.activeFrame = true;

        this.penguinName = penguinName;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()
        this.penguinName.text = this.world.client.penguin.displayName
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
