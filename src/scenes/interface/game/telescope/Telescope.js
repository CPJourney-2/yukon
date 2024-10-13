
// You can write more code here
import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive } from '@components/components'

export const preload = {
    key: 'telescope-pack',
    url: 'assets/media/interface/game/telescope/telescope-pack.json',
    loadString: ['loading', 'telescope']
}
/* START OF COMPILED CODE */

export default class Telescope extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 441, y ?? 406);

        /** @type {Phaser.GameObjects.Sprite} */
        this.red0001;


        // block
        const block = scene.add.rectangle(322, 63, 128, 128);
        block.scaleX = 12.858944958430353;
        block.scaleY = 8.469006608790183;
        this.add(block);

        // bg
        const bg = scene.add.image(321, 51, "telescope", "bg");
        this.add(bg);

        // red0001
        const red0001 = scene.add.sprite(456, -72, "telescope", "red0001");
        this.add(red0001);

        // wave0027
        const wave0027 = scene.add.sprite(12, -142, "rockhopper", "wave0027");
        wave0027.visible = false;
        this.add(wave0027);

        // migrator0001
        const migrator0001 = scene.add.sprite(321, -79, "comingfar", "faraway0001");
        migrator0001.visible = false;
        this.add(migrator0001);

        // boat0001
        const boat0001 = scene.add.sprite(321, -114, "rockhopper", "boat0001");
        boat0001.visible = false;
        this.add(boat0001);

        // fg
        const fg = scene.add.image(320, 74, "telescope", "fg");
        this.add(fg);

        // close
        const close = scene.add.sprite(697, -306, "telescope", "close");
        this.add(close);

        // block (components)
        new Interactive(block);

        // red0001 (components)
        const red0001Animation = new Animation(red0001);
        red0001Animation.key = "red";
        red0001Animation.end = 500;

        // wave0027 (components)
        const wave0027Animation = new Animation(wave0027);
        wave0027Animation.key = "wave";
        wave0027Animation.end = 70;

        // migrator0001 (components)
        const migrator0001Animation = new Animation(migrator0001);
        migrator0001Animation.key = "faraway";
        migrator0001Animation.end = 70;

        // boat0001 (components)
        const boat0001Animation = new Animation(boat0001);
        boat0001Animation.key = "boat";
        boat0001Animation.end = 70;

        // close (components)
        const closeButton = new Button(close);
        closeButton.spriteName = "close";
        closeButton.callback = () => {this.interface.destroyWidget(this)};
        closeButton.activeFrame = true;

        this.red0001 = red0001;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
