import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton } from '@components/components'

import InventoryLoader from '@engine/loaders/InventoryLoader'
import ShowHint from "@components/ShowHint";
import InputText from 'phaser3-rex-plugins/plugins/inputtext.js';


/* START OF COMPILED CODE */

export default class Inventory extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 460);

        /** @type {Phaser.GameObjects.Image} */
        this.inventory_bg;
        /** @type {Phaser.GameObjects.Text} */
        this.active_text;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.put_input_here;
        /** @type {Phaser.GameObjects.Text} */
        this.dummyinput;
        /** @type {Phaser.GameObjects.Container} */
        this.text_container;
        /** @type {Phaser.GameObjects.Container} */
        this.container;
        /** @type {Phaser.GameObjects.Image} */
        this.arrow;
        /** @type {Phaser.GameObjects.Container} */
        this.tab;
        /** @type {Phaser.GameObjects.Image[]} */
        this.slots;


        // container
        const container = scene.add.container(-56, -272);
        container.visible = false;
        this.add(container);

        // inventory_bg
        const inventory_bg = scene.add.image(56, 270, "main", "inventory/bg");
        container.add(inventory_bg);

        // inventory_scroll
        const inventory_scroll = scene.add.image(368, 245, "main", "inventory/scroll");
        container.add(inventory_scroll);

        // down_button
        const down_button = scene.add.image(368, 472, "main", "grey-button");
        container.add(down_button);

        // grey_arrow_1
        const grey_arrow_1 = scene.add.image(368, 470, "main", "grey-arrow");
        grey_arrow_1.flipY = true;
        container.add(grey_arrow_1);

        // up_button
        const up_button = scene.add.image(368, 2, "main", "grey-button");
        container.add(up_button);

        // grey_arrow
        const grey_arrow = scene.add.image(368, 0, "main", "grey-arrow");
        container.add(grey_arrow);

        // slot_12
        const slot_12 = scene.add.image(264, 450, "main", "large-box");
        container.add(slot_12);

        // slot_11
        const slot_11 = scene.add.image(132, 450, "main", "large-box");
        container.add(slot_11);

        // slot_10
        const slot_10 = scene.add.image(0, 450, "main", "large-box");
        container.add(slot_10);

        // slot_9
        const slot_9 = scene.add.image(264, 318, "main", "large-box");
        container.add(slot_9);

        // slot_8
        const slot_8 = scene.add.image(132, 318, "main", "large-box");
        container.add(slot_8);

        // slot_7
        const slot_7 = scene.add.image(0, 318, "main", "large-box");
        container.add(slot_7);

        // slot_6
        const slot_6 = scene.add.image(264, 186, "main", "large-box");
        container.add(slot_6);

        // slot_5
        const slot_5 = scene.add.image(132, 186, "main", "large-box");
        container.add(slot_5);

        // slot_4
        const slot_4 = scene.add.image(0, 186, "main", "large-box");
        container.add(slot_4);

        // slot_3
        const slot_3 = scene.add.image(264, 54, "main", "large-box");
        container.add(slot_3);

        // slot_2
        const slot_2 = scene.add.image(132, 54, "main", "large-box");
        container.add(slot_2);

        // slot_1
        const slot_1 = scene.add.image(0, 54, "main", "large-box");
        container.add(slot_1);

        // inventory_sort_button
        const inventory_sort_button = scene.add.image(131, 553, "main", "inventory/sort-button");
        container.add(inventory_sort_button);

        // active_text
        const active_text = scene.add.text(130, 539, "", {});
        active_text.setOrigin(0.5, 0);
        active_text.text = "All Items";
        active_text.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":268,"fontFamily": "Arial", "fontSize": "24px" });
        container.add(active_text);

        // text_container
        const text_container = scene.add.container(195, -17);
        container.add(text_container);

        // put_input_here
        const put_input_here = scene.add.rectangle(-54, -36, 230, 44);
        text_container.add(put_input_here);

        // inventory_corner
        const inventory_corner = scene.add.image(-66, -38, "main", "search-bg");
        text_container.add(inventory_corner);

        // inventory_sort_button_1
        const inventory_sort_button_1 = scene.add.image(-65, -33, "main", "inventory/sort-button");
        text_container.add(inventory_sort_button_1);

        // dummyinput
        const dummyinput = scene.add.text(-65, -35, "", {});
        dummyinput.setOrigin(0.5, 0.5);
        dummyinput.visible = false;
        dummyinput.text = "New text";
        dummyinput.setStyle({ "color": "#000", "fontFamily": "Arial", "fontSize": "24px" });
        text_container.add(dummyinput);

        // ellipse_1
        const ellipse_1 = scene.add.ellipse(-186, -37, 20, 20);
        ellipse_1.fillColor = 10000536;
        ellipse_1.isStroked = true;
        ellipse_1.strokeColor = 10000536;
        ellipse_1.lineWidth = 3;
        text_container.add(ellipse_1);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(-196, -26, 10, 4);
        rectangle_1.angle = -45.00000000000006;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 10000536;
        rectangle_1.strokeColor = 10000536;
        rectangle_1.lineWidth = 2;
        text_container.add(rectangle_1);

        // tab
        const tab = scene.add.container(369, -156);
        this.add(tab);

        // tab_handle
        const tab_handle = scene.add.image(8, 2, "main", "tab");
        tab_handle.angle = -90;
        tab.add(tab_handle);

        // arrow
        const arrow = scene.add.image(0, 0, "main", "tab-arrow");
        arrow.angle = -90;
        tab.add(arrow);

        // lists
        const slots = [slot_1, slot_2, slot_3, slot_4, slot_5, slot_6, slot_7, slot_8, slot_9, slot_10, slot_11, slot_12];

        // down_button (components)
        const down_buttonButton = new Button(down_button);
        down_buttonButton.spriteName = "grey-button";
        down_buttonButton.callback = () => { this.nextPage() };
        down_buttonButton.activeFrame = true;

        // up_button (components)
        const up_buttonButton = new Button(up_button);
        up_buttonButton.spriteName = "grey-button";
        up_buttonButton.callback = () => { this.prevPage() };
        up_buttonButton.activeFrame = true;

        // slot_12 (components)
        const slot_12Button = new Button(slot_12);
        slot_12Button.spriteName = "large-box";
        slot_12Button.hoverCallback = () => { this.onHover(11, slot_12) };
        slot_12Button.hoverOutCallback = () => { this.onHoverOut(slot_12) };
        slot_12Button.callback = () => { this.onSlotClick(11) };

        // slot_11 (components)
        const slot_11Button = new Button(slot_11);
        slot_11Button.spriteName = "large-box";
        slot_11Button.hoverCallback = () => { this.onHover(10, slot_11) };
        slot_11Button.hoverOutCallback = () => { this.onHoverOut(slot_11) };
        slot_11Button.callback = () => { this.onSlotClick(10) };

        // slot_10 (components)
        const slot_10Button = new Button(slot_10);
        slot_10Button.spriteName = "large-box";
        slot_10Button.hoverCallback = () => { this.onHover(9, slot_10) };
        slot_10Button.hoverOutCallback = () => { this.onHoverOut(slot_10) };
        slot_10Button.callback = () => { this.onSlotClick(9) };

        // slot_9 (components)
        const slot_9Button = new Button(slot_9);
        slot_9Button.spriteName = "large-box";
        slot_9Button.hoverCallback = () => { this.onHover(8, slot_9) };
        slot_9Button.hoverOutCallback = () => { this.onHoverOut(slot_9) };
        slot_9Button.callback = () => { this.onSlotClick(8) };

        // slot_8 (components)
        const slot_8Button = new Button(slot_8);
        slot_8Button.spriteName = "large-box";
        slot_8Button.hoverCallback = () => { this.onHover(7, slot_8) };
        slot_8Button.hoverOutCallback = () => { this.onHoverOut(slot_8) };
        slot_8Button.callback = () => { this.onSlotClick(7) };

        // slot_7 (components)
        const slot_7Button = new Button(slot_7);
        slot_7Button.spriteName = "large-box";
        slot_7Button.hoverCallback = () => { this.onHover(6, slot_7) };
        slot_7Button.hoverOutCallback = () => { this.onHoverOut(slot_7) };
        slot_7Button.callback = () => { this.onSlotClick(6) };

        // slot_6 (components)
        const slot_6Button = new Button(slot_6);
        slot_6Button.spriteName = "large-box";
        slot_6Button.hoverCallback = () => { this.onHover(5, slot_6) };
        slot_6Button.hoverOutCallback = () => { this.onHoverOut(slot_6) };
        slot_6Button.callback = () => { this.onSlotClick(5) };

        // slot_5 (components)
        const slot_5Button = new Button(slot_5);
        slot_5Button.spriteName = "large-box";
        slot_5Button.hoverCallback = () => { this.onHover(4, slot_5) };
        slot_5Button.hoverOutCallback = () => { this.onHoverOut(slot_5) };
        slot_5Button.callback = () => { this.onSlotClick(4) };

        // slot_4 (components)
        const slot_4Button = new Button(slot_4);
        slot_4Button.spriteName = "large-box";
        slot_4Button.hoverCallback = () => { this.onHover(3, slot_4) };
        slot_4Button.hoverOutCallback = () => { this.onHoverOut(slot_4) };
        slot_4Button.callback = () => { this.onSlotClick(3) };

        // slot_3 (components)
        const slot_3Button = new Button(slot_3);
        slot_3Button.spriteName = "large-box";
        slot_3Button.hoverCallback = () => { this.onHover(2, slot_3) };
        slot_3Button.hoverOutCallback = () => { this.onHoverOut(slot_3) };
        slot_3Button.callback = () => { this.onSlotClick(2) };

        // slot_2 (components)
        const slot_2Button = new Button(slot_2);
        slot_2Button.spriteName = "large-box";
        slot_2Button.hoverCallback = () => { this.onHover(1, slot_2) };
        slot_2Button.hoverOutCallback = () => { this.onHoverOut(slot_2) };
        slot_2Button.callback = () => { this.onSlotClick(1) };

        // slot_1 (components)
        const slot_1Button = new Button(slot_1);
        slot_1Button.spriteName = "large-box";
        slot_1Button.hoverCallback = () => { this.onHover(0, slot_1) };
        slot_1Button.hoverOutCallback = () => { this.onHoverOut(slot_1) };
        slot_1Button.callback = () => { this.onSlotClick(0) };

        // inventory_sort_button (components)
        const inventory_sort_buttonButton = new Button(inventory_sort_button);
        inventory_sort_buttonButton.spriteName = "inventory/sort-button";
        inventory_sort_buttonButton.callback = () => this.parentContainer.inventorySort.showMenu();

        // tab_handle (components)
        const tab_handleSimpleButton = new SimpleButton(tab_handle);
        tab_handleSimpleButton.callback = () => { this.onTabClick() };

        this.inventory_bg = inventory_bg;
        this.active_text = active_text;
        this.put_input_here = put_input_here;
        this.dummyinput = dummyinput;
        this.text_container = text_container;
        this.container = container;
        this.arrow = arrow;
        this.tab = tab;
        this.slots = slots;

        /* START-USER-CTR-CODE */

        this.page = 1
        this.pageSize = 12
        this.filter = null

        this.cardDeckId = 821

        this.inventoryLoader = new InventoryLoader(scene, this)

        this.inventory_bg.setInteractive({ pixelPerfect: true })

        this.filterInput;

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    clearEmoteKey() {
        if (this.scene.world.client) {
            this.scene.world.client.emoteKeyPressed = false
        }
    }

    get inventory() {
        let inventory = this.world.client.inventory

        if (this.filter) {
            // If filter is other then inventory results in concat of flags, photos and awards
            inventory = (this.filter == 'other') ? inventory.flag.concat(inventory.photo, inventory.award, inventory.transforms) : inventory[this.filter]
        }

        if(this.filterItem) {
            // Check if filterItem is a number
            if(!isNaN(this.filterItem)) {
               return inventory = Object.values(inventory).flat().filter(item => item == this.filterItem)
            }

            // Check if filterItem is a string
            if(typeof this.filterItem === 'string') {
               return inventory = Object.values(inventory).flat().filter(item => this.crumbs.items[item].name.toLowerCase().includes(this.filterItem.toLowerCase()))
            }
        }

        return Object.values(inventory).flat()
    }

    filterInventory() {
        this.filterItem = this.filterInput.text
        this.page = 1
        this.showPage()
    }

    get maxPage() {
        return Math.ceil(this.inventory.length / this.pageSize)
    }

    showPage() {
        if (!this.visible) return

        if(this.filterInput !== undefined && this.container.visible) {
            this.filterInput.visible = true
            this.filterInput.resize(this.put_input_here.width, this.put_input_here.height)
        }

        let page = this.inventory.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)
        this.inventoryLoader.loadPage(page)
    }

    prevPage() {
        let page = this.page - 1
        if (page < 1) return

        this.page = page
        this.showPage()
    }

    nextPage() {
        let page = this.page + 1
        if (page > this.maxPage) return

        this.page = page
        this.showPage()
    }

    onTabClick() {
        this.parentContainer.outfitarrow.visible = this.container.visible

        if (this.parentContainer.outfitsaver_1.visible === true) {
            this.parentContainer.outfitsaver_1.visible === false
        }

        if (this.container.visible) {
            this.parentContainer.bringToTop(this)
            this.parentContainer.inventorySort.closeMenu()


            // Search Close
            this.filterInput.text = ''
            this.filterItem = null
            this.filterInput.visible = false
            this.filterInput.resize(0, 0)

            this.x -= 495

        } else {
            if (this.filterInput === undefined) {
                this.filterInput =  new InputText(this.scene, this.put_input_here.x, this.put_input_here.y, 0, 0, { id: 'inventoryFilter', backgroundColor: 'green', placeholder: "Search", fontSize: "24px", color: "black"});
                this.text_container.add(this.filterInput);
                this.filterInput.depth = 1000
                this.filterInput.on('textchange', () => this.filterInventory())
                this.filterInput.on('focus', () => {
                    this.clearEmoteKey()
                    this.scene.game.input.keyboard.enabled = false
                    //this.filterInput.text = ''
                })
                this.filterInput.on('blur', () => {
                    this.scene.game.input.keyboard.enabled = true
                })

                // Static text for the game to show while the actual input is hidden
                this.dummyinput._style = { align: "left", fontFamily: "Arial", fontSize: "24px", color: "black", width: this.put_input_here.width, fixedWidth: this.put_input_here.width }
                this.dummyinput.setStyle(this.dummyinput._style)
                this.dummyinput.visible = false
                this.filterInput._dummy = this.dummyinput
            }
            this.filterInput.visible = true
            this.filterInput.resize(this.put_input_here.width, this.put_input_here.height)
            this.parentContainer.sendToBack(this)
            this.x += 495
        }

        this.container.visible = !this.container.visible
        this.arrow.toggleFlipY()
    }

    onSlotClick(slotId) {
        let x  = Object.values(this.world.client.penguin.items.equippedFlat)

        let item = this.slots[slotId].item
        if (!item) { return }

        let itemType = this.crumbs.items[this.slots[slotId].item.id].type
        if(itemType > 1 && itemType < 8) {
            if (x.includes(380006)) return this.interface.prompt.showError("You cannot wear other items with the Snowcat")
            if (x.includes(380291)) return this.interface.prompt.showError("You cannot wear other items with this item")
        }

        if(itemType == 11 && this.crumbs.items[item.id].transform) {
            this.interface.main.playerCard.close()
            if(this.world.client.penguin.isTransformed && this.world.client.penguin.transform == this.crumbs.items[item.id].transform) {
                this.world.client.sendTransform(0) //If slot is clicked when penguin was already in that transformation, then revert back to 0 (normal penguin)
                return
            }

            this.world.client.sendTransform(this.crumbs.items[item.id].transform)
            return
        } else if(itemType == 11 && !this.crumbs.items[item.id].transform) {
            console.warn(`Transformation is undefined for item ${item.id}`)
        }

        if(item.id === 800) return this.world.interface.main.onPhoneClick()

        if(this.crumbs.items[item.id].type == 10 && this.crumbs.items[item.id].widget) {
            this.interface.loadWidget(this.crumbs.items[item.id].widget)
            return
        } else if(this.crumbs.items[item.id].type == 10 && this.crumbs.items[item.id].ruffle_widget) {
            this.interface.loadRuffleWidget(this.crumbs.items[item.id].ruffle_widget, 'Loading Medal')
            return
        }

        if (!item || !item.id || !item.active) return

        if (item.id === this.cardDeckId) {
            this.interface.loadWidget('NinjaProgress')
            return
        }
        this.network.send('update_player', { item: item.id })
        this.world.room.onPenguinUpdate(this.world.client.id)

        if (this.world.room.id === 813 || this.world.room.id === 805) { 
            // send mine to socket when updating items
            // for the cavemine.
            // useful for when a player starts dancing in minezone and then
            // equips a hardhat
            this.network.send('mine')
        }
    }

    onHover(slotId, slot) {
        let item = this.slots[slotId].item;

        if (!item || !item.id || !item.active) return;

        let itemName = this.crumbs.items[item.id].name;
        let itemId = item.id;

        if (window.inventoryIDs && this.world.client.rank > 1) {
            this.scene.interface.hint.showHint(slot, `${itemName} (ID:${itemId})`);
        } else {
            this.scene.interface.hint.showHint(slot, itemName);
        }
    }

    onHoverOut(slot) {
        this.scene.interface.hint.hideHint(slot)
    }

    close(){
        if(!this.filterInput || !this.filterInput.visible) return
        this.filterInput.text = ''
        this.filterItem = null
        this.filterInput.visible = false
        this.filterInput.resize(0, 0)
    }

    update() {
        if(this.filterInput?.visible && (!this.visible || !this.parentContainer.visible || !this.container.visible)) this.close()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
