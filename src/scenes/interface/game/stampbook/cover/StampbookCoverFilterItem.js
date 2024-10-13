import StampbookBackgroundLoader from '@engine/loaders/StampbookBackgroundLoader'
import StampbookCoverFilterList from './StampbookCoverFilterList'

import { SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class StampbookCoverFilterItem extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.clickArea;
        /** @type {Phaser.GameObjects.Image} */
        this.icon;
        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.divider;
        /** @type {Phaser.GameObjects.Image} */
        this.arrow;


        // clickArea
        const clickArea = scene.add.rectangle(0, 8, 128, 57);
        clickArea.setOrigin(0, 0);
        clickArea.alpha = 0.91;
        clickArea.fillColor = 10013418;
        this.add(clickArea);

        // icon
        const icon = scene.add.image(37, 36, "testCategory");
        icon.scaleX = 0.4;
        icon.scaleY = 0.4;
        this.add(icon);

        // text
        const text = scene.add.text(69, 23, "", {});
        text.text = "All Stamps";
        text.setStyle({ "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold" });
        this.add(text);

        // divider
        const divider = scene.add.nineslice(10, 8, "stampbook-editor", "selectionMenuHorizontalDivider", 230, 20, 4, 9, 2, 1);
        divider.setOrigin(0, 0.5);
        this.add(divider);

        // arrow
        const arrow = scene.add.image(215, 39, "stampbook-editor", "arrow");
        arrow.setOrigin(1, 0.5);
        this.add(arrow);

        // clickArea (components)
        const clickAreaSimpleButton = new SimpleButton(clickArea);
        clickAreaSimpleButton.hoverCallback = () => this.onHover();
        clickAreaSimpleButton.hoverOutCallback = () => this.onHoverOut();
        clickAreaSimpleButton.callback = () => this.onClick();

        this.clickArea = clickArea;
        this.icon = icon;
        this.text = text;
        this.divider = divider;
        this.arrow = arrow;

        /* START-USER-CTR-CODE */
        this.divider.setBlendMode(2) //multiply blend mode

        this.arrowOffset = 10

        this.categoryLoader = new StampbookBackgroundLoader(this.scene, "categoryHeader", this.icon)
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    get totalWidth() {
        return this.text.width + this.text.x + (this.arrow.visible ? (this.arrowOffset + this.arrow.width) : 0)
    }
    updateContent() {
        this.clickArea.setMask(this.parent.maskBox.createBitmapMask())
        this.text.text = this.group.display
        this.text.setColor(this.currentGroup == this.group.group_id ? "#7D7B76" : "#000000")
        this.categoryLoader.startItemLoad(this.group.group_id)
        this.updateArrow()
        return this.totalWidth
    }

    updateArrow() {
        this.arrow.visible = this.stampController.getSubGroups(this.group.group_id)?.length > 0 && !this.overrideArrow
    }

    updateWidth(width) {
        this.divider.setSize(width, 3)
        this.clickArea.setSize(width + this.divider.x * 2, 57)

        this.arrow.x = width
    }

    onHover() {
        this.parent.destroyFilterLists()
        this.clickArea.isFilled = true
        this.icon.scale = 0.5

        if(!this.arrow.visible) return

        this.stampbookCoverFilterList = new StampbookCoverFilterList(this.scene, this.totalWidth + 30, 0);
        this.add(this.stampbookCoverFilterList);

        this.stampbookCoverFilterList.parent = this
        this.stampbookCoverFilterList.stampController = this.stampController
        this.stampbookCoverFilterList.subGroups = this.stampController.getSubGroups(this.group.group_id)
        this.stampbookCoverFilterList.updateContent()

        this.parent.bringToTop(this)
    }

    onHoverOut() {
        this.clickArea.isFilled = false
        this.icon.scale = 0.4
    }

    onClick() {
        this.setGroup(this.group.group_id)
    }

    setGroup(group_id) {
        this.parent.setGroup(group_id)
    }

    get currentGroup() {
        return this.parent.currentGroup    
    }

    destroyFilterList() {
        if(!this.stampbookCoverFilterList) return

        this.stampbookCoverFilterList.destroy()
        this.stampbookCoverFilterList = null
    }

    get combinedX() {
        return this.x + (this.parentContainer.combinedX ? this.parentContainer.combinedX : this.parentContainer.x)
    }

    get combinedY() {
        return this.y + (this.parentContainer.combinedY ? this.parentContainer.combinedY : this.parentContainer.y)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
