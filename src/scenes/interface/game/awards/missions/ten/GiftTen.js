import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton, Interactive } from '@components/components'

export const preload = {
    key: 'giftten-pack',
    url: 'assets/media/interface/game/awards/missions/ten/giftten-pack.json',
    loadString: ['loading', 'award_q10_gift']
}

/* START OF COMPILED CODE */

export default class GiftTen extends BaseContainer {

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

        // trophystand
        const trophystand = scene.add.image(0, 135, "giftten", "trophystand");
        this.add(trophystand);

        // headstand
        const headstand = scene.add.image(12, -222, "giftten", "headstand");
        this.add(headstand);

        // head
        const head = scene.add.image(41, -283, "giftten", "head");
        this.add(head);

        // body
        const body = scene.add.image(4, -105, "giftten", "body");
        this.add(body);

        // closebutton
        const closebutton = scene.add.image(157, 249, "giftten", "closebutton");
        this.add(closebutton);

        // block (components)
        new Interactive(block);

        // closebutton (components)
        const closebuttonButton = new Button(closebutton);
        closebuttonButton.spriteName = "closebutton";
        closebuttonButton.callback = () => this.interface.destroyWidget(this);;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */



    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
