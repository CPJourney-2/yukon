
import { SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class Tile extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.tile;
        /** @type {Phaser.GameObjects.Image} */
        this.puff;


        // tile
        const tile = scene.add.image(0, 0, "news-common", "sudoku/tile");
        tile.setOrigin(0, 0);
        this.add(tile);

        // puff
        const puff = scene.add.image(52, 54, "news-common", "sudoku/puffle1");
        puff.visible = false;
        this.add(puff);

        this.tile = tile;
        this.puff = puff;

        /* START-USER-CTR-CODE */
        this.isStatic = false
        this.puffle = 0
        this.hasBeenSet = false
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    addInteractive() {
        if(this.hasBeenSet) return

        const component = new SimpleButton(this.tile)
        component.callback = () => this.onClick()
        
        this.hasBeenSet = true
    }

    onClick() {
        this.puffle++
        if(this.puffle > 6) {
            this.puffle = 0
            this.puff.visible = false
        } else {
            this.puff.visible = true
            this.puff.setFrame(`sudoku/puffle${this.puffle}`)
        }
        this.parentContainer.checkBoard()
    }

    setPuffle(p) {
        if(this.hasBeenSet) return

        this.puffle = p
        this.puff.visible = true
        this.puff.setFrame(`sudoku/puffle${p}`)
        this.tile.setTint(0x999999)
        this.isStatic = true
        this.hasBeenSet = true
    }

    resetIfPossible() {
        if(this.isStatic) return
        this.puffle = 0
        this.puff.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
