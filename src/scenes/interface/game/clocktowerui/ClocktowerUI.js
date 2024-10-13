
// You can write more code here
import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive } from '@components/components'

/* START OF COMPILED CODE */

export default class ClocktowerUI extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // nineslice_1
        const nineslice_1 = scene.add.nineslice(0, 0, "prompt", "window", 708, 600, 43, 38, 40, 40);
        this.add(nineslice_1);

        // buddies
        const buddies = scene.add.text(0, 60, "", {});
        buddies.setOrigin(0.5, 0.5);
        buddies.text = "The time showing on this clock may not match \nthe time on your computer. This snowball-\npowered clock, like all other clocks in Club\n Penguin, is in PST (Penguin Standard Time).\n\n\nThis means the penguins from all over the world \nwill see this clock as the exact same time, even if\nthe penguins are in different time zones.\nBecause of this, you can use this clock to plan\nparties and fun events with friends.";
        buddies.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "32px" });
        buddies.setLineSpacing(-5);
        this.add(buddies);

        // settings
        const settings = scene.add.text(0, -181, "", {});
        settings.setOrigin(0.5, 0.5);
        settings.text = "CLUB PENGUIN\nCLOCK TOWER";
        settings.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        this.add(settings);

        // x_button
        const x_button = scene.add.image(300, -247, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(300, -249, "main", "blue-x");
        this.add(blue_x);

        // block (components)
        new Interactive(block);

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.close();
        x_buttonButton.activeFrame = true;

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
