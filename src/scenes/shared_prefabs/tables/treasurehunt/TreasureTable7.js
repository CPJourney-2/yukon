import { Button, MoveTo, ShowHint } from '@components/components'

import SeatPoint from '@scenes/shared_prefabs/seat/SeatPoint'
// You can write more code here

/* START OF COMPILED CODE */

export default class TreasureTable7 extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.game;
        /** @type {SeatPoint} */
        this.seat1;
        /** @type {SeatPoint} */
        this.seat2;


        // game
        const game = scene.add.image(0, 0, "shipquarters", "animations/box/7");
        game.setOrigin(0.4464714363612934, 0.16640656814087382);
        this.add(game);

        // done1
        const done1 = new SeatPoint(scene, -84, -17);
        this.add(done1);

        // seat1
        const seat1 = new SeatPoint(scene, -45, 51);
        this.add(seat1);

        // seat2
        const seat2 = new SeatPoint(scene, 54, 26);
        this.add(seat2);

        // done2
        const done2 = new SeatPoint(scene, 10, -28);
        this.add(done2);

        // game (components)
        const gameButton = new Button(game);
        gameButton.spriteName = "animations/box/7";
        const gameShowHint = new ShowHint(game);
        gameShowHint.text = "treasurehunt_hint";
        const gameMoveTo = new MoveTo(game);
        gameMoveTo.x = this.x;
        gameMoveTo.y = this.y + 20;

        // seat1 (prefab fields)
        seat1.sitFrame = 24;
        seat1.donePoint = done1;

        // seat2 (prefab fields)
        seat2.sitFrame = 18;
        seat2.donePoint = done2;

        this.game = game;
        this.seat1 = seat1;
        this.seat2 = seat2;

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
