import StampbookThumbContainer from './StampbookThumbContainer'

import { SimpleButton, NineSlice } from '@components/components'

/* START OF COMPILED CODE */

export default class StampbookEditorSelectionBox extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.selectionBackground;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.maskBox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle1;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle4;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle2;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle5;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle3;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle6;
        /** @type {StampbookThumbContainer} */
        this.thumb1;
        /** @type {StampbookThumbContainer} */
        this.thumb4;
        /** @type {StampbookThumbContainer} */
        this.thumb2;
        /** @type {StampbookThumbContainer} */
        this.thumb3;
        /** @type {StampbookThumbContainer} */
        this.thumb6;
        /** @type {StampbookThumbContainer} */
        this.thumb5;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.selectionMenuHorizontalDivider;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.selectionMenuVerticalDivider;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.selectionMenuHorizontalDivider2;


        // exitOnTouch
        const exitOnTouch = scene.add.rectangle(0, 0, 3040, 1840);
        this.add(exitOnTouch);

        // selectionBackground
        const selectionBackground = scene.add.nineslice(-122, 1, "stampbook-editor", "selectionBackground", 122, 248, 24, 20, 25, 27);
        selectionBackground.setOrigin(0, 0.5);
        selectionBackground.alpha = 0.9;
        this.add(selectionBackground);

        // maskBox
        const maskBox = scene.add.nineslice(-116, 1, "stampbook-editor", "selectionMask", 112, 239, 24, 19, 22, 22);
        maskBox.setOrigin(0, 0.5);
        maskBox.visible = false;
        this.add(maskBox);

        // rectangle1
        const rectangle1 = scene.add.rectangle(-59, -80, 119, 80);
        rectangle1.alpha = 0.91;
        rectangle1.fillColor = 10013418;
        this.add(rectangle1);

        // rectangle4
        const rectangle4 = scene.add.rectangle(61, -80, 119, 80);
        rectangle4.alpha = 0.91;
        rectangle4.fillColor = 10013418;
        this.add(rectangle4);

        // rectangle2
        const rectangle2 = scene.add.rectangle(-59, 0, 119, 80);
        rectangle2.alpha = 0.91;
        rectangle2.fillColor = 10013418;
        this.add(rectangle2);

        // rectangle5
        const rectangle5 = scene.add.rectangle(61, 0, 119, 80);
        rectangle5.alpha = 0.91;
        rectangle5.fillColor = 10013418;
        this.add(rectangle5);

        // rectangle3
        const rectangle3 = scene.add.rectangle(-59, 80, 119, 80);
        rectangle3.alpha = 0.91;
        rectangle3.fillColor = 10013418;
        this.add(rectangle3);

        // rectangle6
        const rectangle6 = scene.add.rectangle(61, 80, 119, 80);
        rectangle6.alpha = 0.91;
        rectangle6.fillColor = 10013418;
        this.add(rectangle6);

        // thumb1
        const thumb1 = new StampbookThumbContainer(scene, -61, -79);
        thumb1.scaleX = 0.66;
        thumb1.scaleY = 0.66;
        this.add(thumb1);

        // thumb4
        const thumb4 = new StampbookThumbContainer(scene, 61, -79);
        thumb4.scaleX = 0.66;
        thumb4.scaleY = 0.66;
        this.add(thumb4);

        // thumb2
        const thumb2 = new StampbookThumbContainer(scene, -61, 0);
        thumb2.scaleX = 0.66;
        thumb2.scaleY = 0.66;
        this.add(thumb2);

        // thumb3
        const thumb3 = new StampbookThumbContainer(scene, -61, 79);
        thumb3.scaleX = 0.66;
        thumb3.scaleY = 0.66;
        this.add(thumb3);

        // thumb6
        const thumb6 = new StampbookThumbContainer(scene, 61, 79);
        thumb6.scaleX = 0.66;
        thumb6.scaleY = 0.66;
        this.add(thumb6);

        // thumb5
        const thumb5 = new StampbookThumbContainer(scene, 61, 0);
        thumb5.scaleX = 0.66;
        thumb5.scaleY = 0.66;
        this.add(thumb5);

        // selectionMenuHorizontalDivider
        const selectionMenuHorizontalDivider = scene.add.nineslice(-115, 39, "stampbook-editor", "selectionMenuHorizontalDivider", 230, 5, 4, 9, 2, 1);
        selectionMenuHorizontalDivider.setOrigin(0, 0.5);
        this.add(selectionMenuHorizontalDivider);

        // selectionMenuVerticalDivider
        const selectionMenuVerticalDivider = scene.add.nineslice(0, 0, "stampbook-editor", "selectionMenuVerticalDivider", 5, 240, 1, 1, 7, 10);
        this.add(selectionMenuVerticalDivider);

        // selectionMenuHorizontalDivider2
        const selectionMenuHorizontalDivider2 = scene.add.nineslice(-115, -39, "stampbook-editor", "selectionMenuHorizontalDivider", 110, 5, 4, 9, 2, 1);
        selectionMenuHorizontalDivider2.setOrigin(0, 0.5);
        this.add(selectionMenuHorizontalDivider2);

        // exitOnTouch (components)
        const exitOnTouchSimpleButton = new SimpleButton(exitOnTouch);
        exitOnTouchSimpleButton.callback = () => {this.visible = false};

        // rectangle1 (components)
        const rectangle1SimpleButton = new SimpleButton(rectangle1);
        rectangle1SimpleButton.hoverCallback = () => this.onRectHover(this.rectangle1);
        rectangle1SimpleButton.hoverOutCallback = () => this.onRectHoverOut(this.rectangle1);
        rectangle1SimpleButton.callback = () => this.doCallback(1);

        // rectangle4 (components)
        const rectangle4SimpleButton = new SimpleButton(rectangle4);
        rectangle4SimpleButton.hoverCallback = () => this.onRectHover(this.rectangle4);
        rectangle4SimpleButton.hoverOutCallback = () => this.onRectHoverOut(this.rectangle4);
        rectangle4SimpleButton.callback = () => this.doCallback(4);

        // rectangle2 (components)
        const rectangle2SimpleButton = new SimpleButton(rectangle2);
        rectangle2SimpleButton.hoverCallback = () => this.onRectHover(this.rectangle2);
        rectangle2SimpleButton.hoverOutCallback = () => this.onRectHoverOut(this.rectangle2);
        rectangle2SimpleButton.callback = () => this.doCallback(2);

        // rectangle5 (components)
        const rectangle5SimpleButton = new SimpleButton(rectangle5);
        rectangle5SimpleButton.hoverCallback = () => this.onRectHover(this.rectangle5);
        rectangle5SimpleButton.hoverOutCallback = () => this.onRectHoverOut(this.rectangle5);
        rectangle5SimpleButton.callback = () => this.doCallback(5);

        // rectangle3 (components)
        const rectangle3SimpleButton = new SimpleButton(rectangle3);
        rectangle3SimpleButton.hoverCallback = () => this.onRectHover(this.rectangle3);
        rectangle3SimpleButton.hoverOutCallback = () => this.onRectHoverOut(this.rectangle3);
        rectangle3SimpleButton.callback = () => this.doCallback(3);

        // rectangle6 (components)
        const rectangle6SimpleButton = new SimpleButton(rectangle6);
        rectangle6SimpleButton.hoverCallback = () => this.onRectHover(this.rectangle6);
        rectangle6SimpleButton.hoverOutCallback = () => this.onRectHoverOut(this.rectangle6);
        rectangle6SimpleButton.callback = () => this.doCallback(6);

        this.selectionBackground = selectionBackground;
        this.maskBox = maskBox;
        this.rectangle1 = rectangle1;
        this.rectangle4 = rectangle4;
        this.rectangle2 = rectangle2;
        this.rectangle5 = rectangle5;
        this.rectangle3 = rectangle3;
        this.rectangle6 = rectangle6;
        this.thumb1 = thumb1;
        this.thumb4 = thumb4;
        this.thumb2 = thumb2;
        this.thumb3 = thumb3;
        this.thumb6 = thumb6;
        this.thumb5 = thumb5;
        this.selectionMenuHorizontalDivider = selectionMenuHorizontalDivider;
        this.selectionMenuVerticalDivider = selectionMenuVerticalDivider;
        this.selectionMenuHorizontalDivider2 = selectionMenuHorizontalDivider2;

        /* START-USER-CTR-CODE */

        this.selectionMenuHorizontalDivider.setBlendMode(2) //multiply blend mode
        this.selectionMenuHorizontalDivider2.setBlendMode(2) //multiply blend mode
        this.selectionMenuVerticalDivider.setBlendMode(2) //multiply blend mode

        this.thumbs = [
            this.thumb1,
            this.thumb2,
            this.thumb3,
            this.thumb4,
            this.thumb5,
            this.thumb6
        ]
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    updateContent(cover, itemType, itemList) {
        this.cover = cover
        this.itemList = itemList
        this.itemType = itemType

        for(let [idx, item] of itemList.entries()) {
            if(idx > this.thumbs.length) break
            this.thumbs[idx].removePattern.visible = this.itemType == "pattern" && this.cover.userPattern == this.itemList[idx]
            this.thumbs[idx].updateContent(this.cover, itemType, this.itemList[idx])
        }

        this.updateLayout()
    }

    updateLayout() {
        this.selectionBackground.setSize(this.itemList.length < 4 ? 122 : 244, 248)
        this.selectionMenuHorizontalDivider.setSize(this.itemList.length < 4 ? 110 : 230, 5)
        this.selectionMenuHorizontalDivider2.setSize(this.itemList.length < 4 ? 110 : 230, 5)
        this.selectionMenuVerticalDivider.visible = this.thumb4.visible = this.thumb5.visible = this.thumb6.visible = (this.itemList.length >= 4)

        this.maskBox.setSize(this.selectionBackground.width - 10, this.selectionBackground.height - 8)
        //masks break if the object uses "local" (inside container) coordinates instead of "global" (inside scene) coordinates
        //this workaround sets the position to the one expected by the mask itself
        this.maskBox.setPosition(
            this.selectionBackground.x + this.combinedX + 6,
            this.selectionBackground.y + this.combinedY - 3
        )
    }

    updatePosition(x, y) {
        this.visible = true
        this.x = x
        this.y = y
    }

    doCallback(itemNumber) {
        let itemIdx = this.itemList[itemNumber - 1]
        if(this.itemType == "pattern" && this.thumbs[itemNumber - 1].removePattern.visible) itemIdx = 0
        this.cover.setItem(this.itemType, itemIdx)
    }

    onRectHover(rect) {
		rect.setMask(this.maskBox.createBitmapMask())
        rect.isFilled = true    
    }

    onRectHoverOut(rect) {
        rect.isFilled = false
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
