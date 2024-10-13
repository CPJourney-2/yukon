
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import Interactive from "../../../../components/Interactive";
/* START-USER-IMPORTS */
import { Button, MoveTo, SimpleButton, Animation } from '@components/components'
export const preload = {
    key: 'discwipinganim-pack.json',
    url: 'assets/media/interface/game/_mission11/discwipinganim/discwipinganim-pack.json',
    loadString: ['loading', 'Disc Wiping Animation']
}
/* END-USER-IMPORTS */

export default class DiscWipingAnim extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Sprite} */
        this.discSpray;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // block
        const block = scene.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // page1
        const page1 = scene.add.container(0, 0);
        this.add(page1);

        // discSpray
        const discSpray = scene.add.sprite(760, 480, "disc-spray", "discSpray0001");
        page1.add(discSpray);

        // lists
        const pages = [page1];

        // block (components)
        new Interactive(block);

        this.discSpray = discSpray;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        // Write your code here.
        this.discSpray.play('discwipe');
		this.discSpray.on("animationcomplete", () => {
            this.close();
            this.world.party.showMissionError('Great work, you cleaned up the disc perfectly!');
        })
		
		
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
