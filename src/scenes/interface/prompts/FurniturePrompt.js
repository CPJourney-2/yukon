import BaseContainer from '@scenes/base/BaseContainer'

import { Interactive, NineSlice, Button, ShowHint, SimpleButton } from '@components/components'

import DualButtons from './buttons/DualButtons'
import ItemPromptLoader from '@engine/loaders/ItemPromptLoader'


/* START OF COMPILED CODE */

export default class FurniturePrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg;
        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {Phaser.GameObjects.Text} */
        this.text2;
        /** @type {DualButtons} */
        this.dual;
        /** @type {Phaser.GameObjects.Text} */
        this.furn_count;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.scrollbar;
        /** @type {Phaser.GameObjects.Image} */
        this.handle;
        /** @type {Phaser.GameObjects.Container} */
        this.scrollContainer;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.nineslice(0, -40, "prompt", "window", 708, 584, 44, 39, 40, 41);
        bg.scaleY = 1.1127383675235438;
        this.add(bg);

        // text
        const text = scene.add.text(0, -32, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "You are purchasing Furniture Name.\nYou currently have 999999 coins.";
        text.setStyle({ "align": "center", "color": "#000000", "fixedWidth":628,"fixedHeight":136,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(text);

        // text2
        const text2 = scene.add.text(0, 11, "", {});
        text2.setOrigin(0.5, 0.5);
        text2.text = "Units: 1 — Cost: 500 coins";
        text2.setStyle({ "align": "center", "color": "#000", "fixedWidth":628,"fixedHeight":50,"fontFamily": "Arial Narrow", "fontSize": "32px", "fontStyle": "bold" });
        this.add(text2);

        // dual
        const dual = new DualButtons(scene, 0, 166);
        this.add(dual);

        // unitBtn1
        const unitBtn1 = scene.add.image(-220, 68, "main", "blue-button");
        this.add(unitBtn1);

        // unitBtn2
        const unitBtn2 = scene.add.image(235, 68, "main", "blue-button");
        this.add(unitBtn2);

        // furn_count_1
        const furn_count_1 = scene.add.text(215, 40, "", {});
        furn_count_1.text = "+";
        furn_count_1.setStyle({ "align": "center", "color": "#ffffff", "fixedWidth":40,"fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold", "stroke": "#00000050", "strokeThickness":6});
        this.add(furn_count_1);

        // furn_count_2
        const furn_count_2 = scene.add.text(-240, 40, "", {});
        furn_count_2.text = "-";
        furn_count_2.setStyle({ "align": "center", "color": "#ffffff", "fixedWidth":40,"fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold", "stroke": "#00000050", "strokeThickness":6});
        this.add(furn_count_2);

        // furn_count
        const furn_count = scene.add.text(-42, -13, "", {});
        furn_count.visible = false;
        furn_count.text = "1";
        furn_count.setStyle({ "align": "center", "color": "#ffffff", "fixedWidth":80,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold", "stroke": "#00000050", "strokeThickness":10});
        this.add(furn_count);

        // scrollContainer
        const scrollContainer = scene.add.container(-166, 68);
        this.add(scrollContainer);

        // scrollbar
        const scrollbar = scene.add.rectangle(0, -4, 350, 10);
        scrollbar.setOrigin(0, 0);
        scrollbar.isFilled = true;
        scrollbar.fillColor = 0;
        scrollbar.fillAlpha = 0.35;
        scrollContainer.add(scrollbar);

        // handle
        const handle = scene.add.image(0, 0, "main", "snowball-icon");
        scrollContainer.add(handle);

        // block (components)
        new Interactive(block);

        // unitBtn1 (components)
        const unitBtn1Button = new Button(unitBtn1);
        unitBtn1Button.spriteName = "blue-button";
        unitBtn1Button.callback = () => this.unitIncrement(-1);
        unitBtn1Button.activeFrame = true;

        // unitBtn2 (components)
        const unitBtn2Button = new Button(unitBtn2);
        unitBtn2Button.spriteName = "blue-button";
        unitBtn2Button.callback = () => this.unitIncrement(1);
        unitBtn2Button.activeFrame = true;

        this.bg = bg;
        this.text = text;
        this.text2 = text2;
        this.dual = dual;
        this.furn_count = furn_count;
        this.scrollbar = scrollbar;
        this.handle = handle;
        this.scrollContainer = scrollContainer;

        /* START-USER-CTR-CODE */

        this.text.setWordWrapWidth(616, true)

        this.item // Active item ID
        this.icon // Icon sprite
        this.type
        this.units = 1 // Amount of furniture to buy. 1 is default

        this.loader = new ItemPromptLoader(scene, this, 'furniture')

        this.usePartyCoins = false
        this.useGems = false

        this.dragging = false

        scene.events.once('update', () => this.addInput())

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    showFurniture(furniture, gems) {
        if(this.crumbs.furniture[furniture].party_coins) {
            this.usePartyCoins = true
        } else if (gems) {
            this.useGems = true
        } else {
            this.usePartyCoins = false
        }
        this.interface.main.events.emit('hide_main_inputs')
        this.show(furniture, this.crumbs.furniture[furniture], 'furniture')
    }

    show(item, crumb, type) {
        if (!crumb) {
            return
        }

        this.item = item
        this.type = type

        this.itemCost = crumb.cost

        this.text.text = this.getText(crumb.name, crumb.cost)
        this.text2.text = this.getUnitsText(crumb.cost)
        this.visible = true

        this.loader.loadIcon(item)
    }

    inventoryIncludes(item) {
        let flat = Object.values(this.world.client.inventory).flat()
        return flat.includes(item)
    }

    getText(name, cost) {
        if (this.usePartyCoins) {
            return `You are purchasing ${name}.\nYou currently have ${this.world.client.partyCoins} ${this.world.party.partyCoinCurrency}.`
        }
        if (this.useGems) {
            return `You are purchasing ${name}.\nYou currently have ${this.world.client.gems} gems.`
        }
        if (cost < 1) {
            return `You have found ${name}.\nWould you like to pick some up?`
        }
        return `You are purchasing ${name}.\nYou currently have ${this.world.client.coins} coins.`
    }

    getUnitsText(cost) {
        if (this.usePartyCoins) {
            return `Units: ${this.units} — Cost: ${cost} ${this.world.party.partyCoinCurrency}`
        }
        if (this.useGems) {
            return `Units: ${this.units} — Cost: ${cost} gems`
        }
        if (cost < 1) {
            return `Units: ${this.units}`
        }
        return `Units: ${this.units} — Cost: ${cost} coins`
    }

    unitIncrement(amount) {
        if(!isNaN(amount)) {
            let flooredAm = Math.floor(amount)
            if((this.units + flooredAm) > 99) {
                this.units = 99
            } else if((this.units + flooredAm) < 1) {
                this.units = 1
            } else {
                this.units += flooredAm
                let stuff = this.scrollbar.width / 99
                this.handle.x = stuff * this.units
            }
            this.updateUnits()
        }
    }

    updateUnits() {
        let newCost = (this.itemCost * this.units)
        this.text2.text = this.getUnitsText(newCost)
    }

    callback() {
        if (this.item) {
            this.sendAddItem()
        }
        this.resetHandle()
        this.visible = false
        this.interface.prompt.showWindow(null,'loading')
        if (this.world.interface.iglooEdit.filterInput) {
            this.world.interface.iglooEdit.filterInput.resize(this.world.interface.iglooEdit.put_input_here.width, this.world.interface.iglooEdit.put_input_here.height);
        }
    }

    noCallback() {
        this.resetHandle()
        this.visible = false
        this.interface.main.events.emit('show_main_inputs')
        if (this.world.interface.iglooEdit.filterInput) {
            this.world.interface.iglooEdit.filterInput.resize(this.world.interface.iglooEdit.put_input_here.width, this.world.interface.iglooEdit.put_input_here.height);
        }
    }

    sendAddItem() {
        this.network.send('add_furniture', { furniture: this.item, amount: this.units })
    }

    /* ===== Draggable Handle ===== */

    addInput() {
        this.handle.setInteractive({
            cursor: 'pointer',
            draggable: true
        })

        // Drag is not detected until cursor moves 5px
        this.scene.input.dragDistanceThreshold = 5
        this.handle.on('drag', (pointer) => this.onTabDrag(pointer.x))
    }

    onTabDrag(x) {
        const min = this.scrollbar.getWorldTransformMatrix().getX(0,0)
        const max = min + this.scrollbar.width

        // Keep log inside boundary
        if (x > max) x = max
        if (x < min) x = min

        let offset = Math.round(x - 760 - this.scrollContainer.x)
        this.handle.x = offset

        // Calculate the furniture count
        let frac = offset / this.scrollbar.width
        let count = (98 * frac) + 1
        if (count > 99) count = 99
        if (count < 1) count = 1
        this.units = Math.round(count)
        this.updateUnits()
    }

    resetHandle() {
        this.handle.x = 0
        this.units = 1
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
