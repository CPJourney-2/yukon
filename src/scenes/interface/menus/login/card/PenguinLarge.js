import BaseContainer from '@scenes/base/BaseContainer'

import { Button, NineSlice } from '@components/components'

import PaperDoll from '@scenes/interface/game/playercard/paperdoll/PaperDoll'


/* START OF COMPILED CODE */

export default class PenguinLarge extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg;
        /** @type {PaperDoll} */
        this.paperDoll;
        /** @type {Phaser.GameObjects.Text} */
        this.username;


        // bg
        const bg = scene.add.nineslice(0, 0, "prompt", "window", 488, 664, 44, 39, 40, 41);
        this.add(bg);

        // penguinLarge
        const penguinLarge = scene.add.image(0, 0, "login", "player_large");
        this.add(penguinLarge);

        // paperDoll
        const paperDoll = new PaperDoll(scene, 0, -38);
        this.add(paperDoll);

        // username
        const username = scene.add.text(0, 184, "", {});
        username.setOrigin(0.5, 0);
        username.text = "asdads";
        username.setStyle({ "align": "center", "fixedWidth":420,"fontFamily": "CCFaceFront", "fontSize": "44px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10,"shadow.color": "#000000ff" });
        this.add(username);

        // penguinLarge (components)
        const penguinLargeButton = new Button(penguinLarge);
        penguinLargeButton.spriteName = "player_large";

        // paperDoll (prefab fields)
        paperDoll.fadeIn = false;

        this.bg = bg;
        this.paperDoll = paperDoll;
        this.username = username;

        /* START-USER-CTR-CODE */

        this.button = penguinLargeButton

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
