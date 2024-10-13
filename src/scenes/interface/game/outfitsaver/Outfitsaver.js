import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive, ShowHint, SimpleButton } from '@components/components'
import PaperDoll from '../playercard/paperdoll/PaperDoll'
import slot from '../outfitsaver/slot'

/*export const preload = {
    key: 'outfitsaver-pack',
    url: 'assets/media/interface/game/outfitsaver/outfitsaver-pack.json',
    loadString: ['loading', 'Outfit Saver']
}*/
// You can write more code here

/* START OF COMPILED CODE */

export default class Outfitsaver extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 740, y ?? 492);

        /** @type {Phaser.GameObjects.Container} */
        this.page2;
        /** @type {Phaser.GameObjects.Container} */
        this.page1;
        /** @type {slot[]} */
        this.slots;


        // rectangle_1
        const rectangle_1 = scene.add.rectangle(-166, 35, 128, 128);
        rectangle_1.scaleX = 4.791874314738883;
        rectangle_1.scaleY = 4.969437201140557;
        this.add(rectangle_1);

        // bg
        const bg = scene.add.nineslice(103, 340, "main", "chatlog/bg", 605, 613, 57, 60, 58, 60);
        bg.setOrigin(1, 1);
        this.add(bg);

        // use
        const use = scene.add.sprite(54, -203, "main", "grey-button");
        this.add(use);

        // save-button
        const save_button = scene.add.image(54, -83, "main", "grey-button");
        this.add(save_button);

        // save
        const save = scene.add.sprite(53, -84, "iglooedit", "button/save");
        save.scaleX = 0.3;
        save.scaleY = 0.3;
        this.add(save);

        // deleteButton
        const deleteButton = scene.add.sprite(55, -143, "main", "grey-button");
        this.add(deleteButton);

        // page2
        const page2 = scene.add.container(-680, -492);
        page2.visible = false;
        this.add(page2);

        // Slot12
        const slot12 = new slot(scene, -165, 235);
        slot12.scaleX = 1;
        slot12.scaleY = 1;
        page2.add(slot12);

        // Slot11
        const slot11 = new slot(scene, -360, 235);
        slot11.scaleX = 1;
        slot11.scaleY = 1;
        page2.add(slot11);

        // Slot10
        const slot10 = new slot(scene, -165, 50);
        slot10.scaleX = 1;
        slot10.scaleY = 1;
        page2.add(slot10);

        // Slot9
        const slot9 = new slot(scene, -360, 50);
        slot9.scaleX = 1;
        slot9.scaleY = 1;
        page2.add(slot9);

        // Slot8
        const slot8 = new slot(scene, -165, -135);
        slot8.scaleX = 1;
        slot8.scaleY = 1;
        page2.add(slot8);

        // Slot7
        const slot7 = new slot(scene, -360, -135);
        slot7.scaleX = 1;
        slot7.scaleY = 1;
        page2.add(slot7);

        // pageTwoLabel
        const pageTwoLabel = scene.add.text(717, 643, "", {});
        pageTwoLabel.text = "2/2";
        pageTwoLabel.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "20px" });
        page2.add(pageTwoLabel);

        // page1
        const page1 = scene.add.container(-680, -492);
        this.add(page1);

        // Slot6
        const slot6 = new slot(scene, -165, 235);
        slot6.scaleX = 1;
        slot6.scaleY = 1;
        page1.add(slot6);

        // Slot5
        const slot5 = new slot(scene, -360, 235);
        slot5.scaleX = 1;
        slot5.scaleY = 1;
        page1.add(slot5);

        // Slot4
        const slot4 = new slot(scene, -165, 50);
        slot4.scaleX = 1;
        slot4.scaleY = 1;
        page1.add(slot4);

        // Slot3
        const slot3 = new slot(scene, -360, 50);
        slot3.scaleX = 1;
        slot3.scaleY = 1;
        page1.add(slot3);

        // Slot2
        const slot2 = new slot(scene, -165, -135);
        slot2.scaleX = 1;
        slot2.scaleY = 1;
        page1.add(slot2);

        // Slot1
        const slot1 = new slot(scene, -360, -135);
        slot1.scaleX = 1;
        slot1.scaleY = 1;
        page1.add(slot1);

        // pageOneLabel
        const pageOneLabel = scene.add.text(720, 643, "", {});
        pageOneLabel.text = "1/2";
        pageOneLabel.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "20px" });
        page1.add(pageOneLabel);

        // arrowContainer
        const arrowContainer = scene.add.container(140, -167);
        this.add(arrowContainer);

        // scroll_out
        const scroll_out = scene.add.image(-26, 280, "main", "tab");
        scroll_out.angle = -90;
        arrowContainer.add(scroll_out);

        // tab_arrow
        const tab_arrow = scene.add.image(-38, 277, "main", "tab-arrow");
        tab_arrow.angle = 90;
        arrowContainer.add(tab_arrow);

        // down
        const down = scene.add.sprite(54, 280, "main", "grey-button");
        this.add(down);

        // down-arrow
        const down_arrow = scene.add.image(53.52435302734375, 278.15069580078125, "main", "grey-arrow");
        down_arrow.flipY = true;
        this.add(down_arrow);

        // up
        const up = scene.add.sprite(54, 215, "main", "grey-button");
        this.add(up);

        // up-arrow
        const up_arrow = scene.add.image(54, 213, "main", "grey-arrow");
        this.add(up_arrow);

        // emotes_1_small
        const emotes_1_small = scene.add.image(54.5, -205, "main", "emotes/1-small");
        emotes_1_small.scaleX = 0.8;
        emotes_1_small.scaleY = 0.8;
        this.add(emotes_1_small);

        // grey_x
        const grey_x = scene.add.image(55, -145, "main", "grey-x");
        this.add(grey_x);

        // lists
        const slots = [slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9, slot10, slot11, slot12];

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // use (components)
        const useButton = new Button(use);
        useButton.spriteName = "grey-button";
        useButton.callback = () => {this.onWear()};
        useButton.activeFrame = true;
        const useShowHint = new ShowHint(use);
        useShowHint.text = "Wear Outfit";

        // save_button (components)
        const save_buttonButton = new Button(save_button);
        save_buttonButton.spriteName = "grey-button";
        save_buttonButton.callback = () => this.onSave();
        save_buttonButton.activeFrame = true;
        const save_buttonShowHint = new ShowHint(save_button);
        save_buttonShowHint.text = "Save Outfit";

        // deleteButton (components)
        const deleteButtonButton = new Button(deleteButton);
        deleteButtonButton.spriteName = "grey-button";
        deleteButtonButton.callback = () => this.onDelete();
        deleteButtonButton.activeFrame = true;
        const deleteButtonShowHint = new ShowHint(deleteButton);
        deleteButtonShowHint.text = "Delete Outfit";

        // slot12 (prefab fields)
        slot12.slotID = 12;

        // slot11 (prefab fields)
        slot11.slotID = 11;

        // slot10 (prefab fields)
        slot10.slotID = 10;

        // slot9 (prefab fields)
        slot9.slotID = 9;

        // slot8 (prefab fields)
        slot8.slotID = 8;

        // slot7 (prefab fields)
        slot7.slotID = 7;

        // slot6 (prefab fields)
        slot6.slotID = 6;

        // slot5 (prefab fields)
        slot5.slotID = 5;

        // slot4 (prefab fields)
        slot4.slotID = 4;

        // slot3 (prefab fields)
        slot3.slotID = 3;

        // slot2 (prefab fields)
        slot2.slotID = 2;

        // slot1 (prefab fields)
        slot1.slotID = 1;

        // scroll_out (components)
        const scroll_outSimpleButton = new SimpleButton(scroll_out);
        scroll_outSimpleButton.callback = () => {this.onArrowClick()};

        // down (components)
        const downButton = new Button(down);
        downButton.spriteName = "grey-button";
        downButton.callback = () => this.onPageDown();
        downButton.activeFrame = true;

        // up (components)
        const upButton = new Button(up);
        upButton.spriteName = "grey-button";
        upButton.callback = () => this.onPageUp();
        upButton.activeFrame = true;

        this.page2 = page2;
        this.page1 = page1;
        this.slots = slots;

        /* START-USER-CTR-CODE */
        // this.windowPromptShow = new WindowPrompt()

        this.network.send("get_all_slots")
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    onArrowClick() {
        this.parentContainer.parentContainer.inventory.visible = this.parentContainer.parentContainer.outfitsaver_1.visible

        if (this.parentContainer.parentContainer.outfitsaver_1.visible === true) {
            this.parentContainer.parentContainer.outfitsaver_1.visible = false
            this.parentContainer.parentContainer.outfitarrow.visible = true 
            return
        }

        this.parentContainer.parentContainer.outfitsaver_1.visible = true
        this.parentContainer.parentContainer.outfitarrow.visible = false 
    }

    onWear() {
        this.interface.prompt.showWindow("Are you sure you want to equip this slot?\nYour current outfit wont be saved", 'dual', () => {
            this.network.send("load_slot", {slot: this.parentContainer.selectedOutfitSlot});
            this.interface.prompt.window.visible = false
        })
    }

    onDelete() {
        this.interface.prompt.showWindow("Are you sure you want to delete this slot?\nThis cannot be undone", 'dual', () => {
            this.network.send("delete_slot", {slot: this.parentContainer.selectedOutfitSlot});
            this.interface.prompt.window.visible = false
        })
    }

    onSave() {
        if (this.parentContainer.selectedOutfitSlot == null) {
            this.interface.prompt.showError("You need to select a save slot")
            return
        }

        this.interface.prompt.showWindow("Are you sure you want to save over this slot?\nThis cannot be undone", 'dual', () => {
            this.network.send("save_outfit", {slot: this.parentContainer.selectedOutfitSlot})
            this.interface.prompt.window.visible = false
        })


    }

    slotClick(slot) {
        this.currentSlot = slot
    }

    onPageDown(){
        this.page1.visible = false
        this.page2.visible = true
    }

    onPageUp(){
        this.page2.visible = false
        this.page1.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
