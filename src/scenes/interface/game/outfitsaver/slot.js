
// You can write more code here
import PaperDoll from '../playercard/paperdoll/PaperDoll'
import { Button, Animation, Interactive, ShowHint, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class slot extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // slotBackground
        const slotBackground = scene.add.nineslice(760, 480, "main", "large-box", 177, 177, 13, 17, 14, 13);
        this.add(slotBackground);

        // paperDoll
        const paperDoll = new PaperDoll(scene, 760, 480);
        paperDoll.scaleX = 0.4;
        paperDoll.scaleY = 0.4;
        this.add(paperDoll);

        // slotBackground (components)
        const slotBackgroundSimpleButton = new SimpleButton(slotBackground);
        slotBackgroundSimpleButton.callback = () => {this.onSlotClick()};

        this.slotBackground = slotBackground;
        this.paperDoll = paperDoll;

        /* START-USER-CTR-CODE */


        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.NineSlice} */
    slotBackground;
    /** @type {PaperDoll} */
    paperDoll;
    /** @type {number} */
    slotID = 0;

    /* START-USER-CODE */

    onSlotClick() {
        if (this.parentContainer.parentContainer.parentContainer.selectedOutfitSlot != null) {
            // currently a selected slot
            this.parentContainer.parentContainer.parentContainer._selectedOutfitSlot.slotBackground.setFrame("large-box")
            this.parentContainer.parentContainer.parentContainer.selectedOutfitSlot = null
        }

        this.slotBackground.setFrame("large-box-hover")
        this.parentContainer.parentContainer.parentContainer._selectedOutfitSlot = this
        this.parentContainer.parentContainer.parentContainer.selectedOutfitSlot = this.slotID
    }
    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
