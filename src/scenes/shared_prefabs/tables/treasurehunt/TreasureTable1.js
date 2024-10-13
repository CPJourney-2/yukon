import { Button, MoveTo, ShowHint } from '@components/components'

import SeatPoint from '@scenes/shared_prefabs/seat/SeatPoint'
// You can write more code here

/* START OF COMPILED CODE */

export default class TreasureTable1 extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.game;
        /** @type {SeatPoint} */
        this.seat1;
        /** @type {SeatPoint} */
        this.seat2;


        // game
        const game = scene.add.image(0, 0, "shipquarters", "animations/box/1");
        game.setOrigin(0.5, 0.22017056298561477);
        this.add(game);

        // seat1
        const seat1 = new SeatPoint(scene, -19, 10);
        this.add(seat1);

        // seat2
        const seat2 = new SeatPoint(scene, 54, 19);
        this.add(seat2);

        // done1
        const done1 = new SeatPoint(scene, -88, 68);
        this.add(done1);

        // done2
        const done2 = new SeatPoint(scene, 4, 97);
        this.add(done2);

        // game (components)
        const gameButton = new Button(game);
        gameButton.spriteName = "animations/box/1";
        const gameShowHint = new ShowHint(game);
        gameShowHint.text = "treasurehunt_hint";
        const gameMoveTo = new MoveTo(game);
        gameMoveTo.x = this.x + 10;
        gameMoveTo.y = this.y + 5;

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
