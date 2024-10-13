
import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive } from '@components/components'

// borrowing the close btn uwu => <=
export const preload = {
    key: 'mail-pack',
    url: 'assets/media/interface/game/mail/mail-pack.json',
    loadString: ['loading']
}

/* START OF COMPILED CODE */

export default class RuffleBackdrop extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // block
        const block = scene.add.rectangle(757, 472, 1550, 1000);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.8;
        this.add(block);

        // closebtn
        const closebtn = scene.add.image(1456, 69, "mail", "closebtn");
        this.add(closebtn);

        // block (components)
        new Interactive(block);

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.callback = () => this.close();

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    close() {
        this.ruffle.closeWidget();
        this.interface.destroyWidget(this);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
