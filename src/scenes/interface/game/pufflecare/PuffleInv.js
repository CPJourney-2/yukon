import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class PuffleInv extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 717.6003717319566, y ?? 478.2076204096942);

        // container
        const container = scene.add.container(43.98345075493245, -268.20763833006777);
        container.visible = false;
        this.add(container);

        // inventory_bg
        const inventory_bg = scene.add.image(-18.333832431519227, 270, "pufflecare", "popout");
        container.add(inventory_bg);

        // slot_8
        const slot_8 = scene.add.image(258, 467, "pufflecare", "inv_btn");
        container.add(slot_8);

        // slot_7
        const slot_7 = scene.add.image(128, 466, "pufflecare", "inv_btn");
        container.add(slot_7);

        // slot_6
        const slot_6 = scene.add.image(255, 334, "pufflecare", "inv_btn");
        container.add(slot_6);

        // slot_5
        const slot_5 = scene.add.image(126, 333, "pufflecare", "inv_btn");
        container.add(slot_5);

        // slot_4
        const slot_4 = scene.add.image(255, 202, "pufflecare", "inv_btn");
        container.add(slot_4);

        // slot_3
        const slot_3 = scene.add.image(123, 201, "pufflecare", "inv_btn");
        container.add(slot_3);

        // slot_2
        const slot_2 = scene.add.image(255, 69, "pufflecare", "inv_btn");
        container.add(slot_2);

        // slot_1
        const slot_1 = scene.add.image(123, 69, "pufflecare", "inv_btn");
        container.add(slot_1);

        // inv_gum
        const inv_gum = scene.add.image(123, 68, "pufflecare", "inv_gum");
        container.add(inv_gum);

        // inv_cookie
        const inv_cookie = scene.add.image(257, 67, "pufflecare", "inv_cookie");
        container.add(inv_cookie);

        // inv_food
        const inv_food = scene.add.image(123, 203, "pufflecare", "inv_food");
        container.add(inv_food);

        // inv_bath
        const inv_bath = scene.add.image(255, 203, "pufflecare", "inv_bath");
        container.add(inv_bath);

        // tab
        const tab = scene.add.container(396.6496183234132, -135.20763833006777);
        this.add(tab);

        // tab_handle
        const tab_handle = scene.add.image(8, 2, "pufflecare", "tab");
        tab_handle.angle = -90;
        tab_handle.flipY = true;
        tab.add(tab_handle);

        // arrow
        const arrow = scene.add.image(0, 0, "main", "tab-arrow");
        arrow.angle = -90;
        tab.add(arrow);

        // slot_8 (components)
        const slot_8Button = new Button(slot_8);
        slot_8Button.spriteName = "inv_btn";
        slot_8Button.hoverCallback = () => { this.onHover(5, slot_6) };
        slot_8Button.hoverOutCallback = () => { this.onHoverOut(slot_6) };
        slot_8Button.callback = () => { this.onSlotClick(8) };

        // slot_7 (components)
        const slot_7Button = new Button(slot_7);
        slot_7Button.spriteName = "inv_btn";
        slot_7Button.hoverCallback = () => { this.onHover(2, slot_3) };
        slot_7Button.hoverOutCallback = () => { this.onHoverOut(slot_3) };
        slot_7Button.callback = () => { this.onSlotClick(7) };

        // slot_6 (components)
        const slot_6Button = new Button(slot_6);
        slot_6Button.spriteName = "inv_btn";
        slot_6Button.hoverCallback = () => { this.onHover(5, slot_6) };
        slot_6Button.hoverOutCallback = () => { this.onHoverOut(slot_6) };
        slot_6Button.callback = () => { this.onSlotClick(6) };

        // slot_5 (components)
        const slot_5Button = new Button(slot_5);
        slot_5Button.spriteName = "inv_btn";
        slot_5Button.hoverCallback = () => { this.onHover(2, slot_3) };
        slot_5Button.hoverOutCallback = () => { this.onHoverOut(slot_3) };
        slot_5Button.callback = () => { this.onSlotClick(5) };

        // slot_4 (components)
        const slot_4Button = new Button(slot_4);
        slot_4Button.spriteName = "inv_btn";
        slot_4Button.hoverCallback = () => { this.onHover(4, slot_5) };
        slot_4Button.hoverOutCallback = () => { this.onHoverOut(slot_5) };
        slot_4Button.callback = () => { this.onSlotClick(4) };

        // slot_3 (components)
        const slot_3Button = new Button(slot_3);
        slot_3Button.spriteName = "inv_btn";
        slot_3Button.hoverCallback = () => { this.onHover(3, slot_4) };
        slot_3Button.hoverOutCallback = () => { this.onHoverOut(slot_4) };
        slot_3Button.callback = () => { this.onSlotClick(3) };

        // slot_2 (components)
        const slot_2Button = new Button(slot_2);
        slot_2Button.spriteName = "inv_btn";
        slot_2Button.hoverCallback = () => { this.onHover(1, slot_2) };
        slot_2Button.hoverOutCallback = () => { this.onHoverOut(slot_2) };
        slot_2Button.callback = () => { this.onSlotClick(2) };

        // slot_1 (components)
        const slot_1Button = new Button(slot_1);
        slot_1Button.spriteName = "inv_btn";
        slot_1Button.hoverCallback = () => { this.onHover(0, slot_1) };
        slot_1Button.hoverOutCallback = () => { this.onHoverOut(slot_1) };
        slot_1Button.callback = () => { this.onSlotClick(1) };

        // tab_handle (components)
        const tab_handleSimpleButton = new SimpleButton(tab_handle);
        tab_handleSimpleButton.callback = () => { this.onTabClick() };

        this.container = container;
        this.inventory_bg = inventory_bg;
        this.tab = tab;
        this.arrow = arrow;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Container} */
    container;
    /** @type {Phaser.GameObjects.Image} */
    inventory_bg;
    /** @type {Phaser.GameObjects.Container} */
    tab;
    /** @type {Phaser.GameObjects.Image} */
    arrow;

    /* START-USER-CODE */

    onTabClick() {

        if (this.container.visible) {
            this.parentContainer.bringToTop(this)
            this.x -= 300

        } else {
            this.parentContainer.sendToBack(this)
            this.x += 300
        }


        this.container.visible = !this.container.visible
        this.arrow.toggleFlipY()
    }

    onSlotClick(slotId) {

        this.interface.prompt.showPuffleItem(slotId, this.parentContainer.args.puffleId, this.parentContainer);
    }

    onHover(slotId, slot ) {
    }

    onHoverOut(slot) {
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
