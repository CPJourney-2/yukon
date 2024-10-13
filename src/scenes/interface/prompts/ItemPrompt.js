import BaseContainer from '@scenes/base/BaseContainer'

import { Interactive, NineSlice } from '@components/components'

import DualButtons from './buttons/DualButtons'
import ItemPromptLoader from '@engine/loaders/ItemPromptLoader'


/* START OF COMPILED CODE */

export default class ItemPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg;
        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {DualButtons} */
        this.dual;


        this.visible = false;

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.nineslice(0, -40, "prompt", "window", 708, 584, 44, 39, 40, 41);
        this.add(bg);

        // text
        const text = scene.add.text(0, 0, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "You have found a party hat.\nWould you like to pick it up?";
        text.setStyle({ "align": "center", "color": "#000000", "fixedWidth":628,"fixedHeight":136,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(text);

        // dual
        const dual = new DualButtons(scene, 0, 130);
        this.add(dual);

        // block (components)
        new Interactive(block);

        this.bg = bg;
        this.text = text;
        this.dual = dual;

        /* START-USER-CTR-CODE */

        this.text.setWordWrapWidth(616, true)

        this.item // Active item ID
        this.icon // Icon sprite
        this.type
        this.usePartyCoins = false
        this.useGems = false
        this.useSkill = false

        this.loader = new ItemPromptLoader(scene, this)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    showItem(item, crumbOverride = {}) {
        const crumb = {...this.crumbs.items[item], ...crumbOverride};
        
        if (this.inventoryIncludes(item)) {
            return this.interface.prompt.showError('You already have this item.')
        }

        this.useGems = crumb && crumb.gems

        this.usePartyCoins = crumb && crumb.party_coins

        this.show(item, crumb, 'clothing')
        this.interface.main.events.emit('hide_main_inputs')
    }

    show(item, crumb, type) {
        if (!crumb) {
            return
        }

        this.item = item
        this.type = type
        this.crumb = crumb

        this.text.text = this.getText(crumb.name, crumb.cost)
        this.visible = true

        this.loader.loadIcon(item)
    }

    inventoryIncludes(item) {
        let flat = Object.values(this.world.client.inventory).flat()
        return flat.includes(item)
    }

    getText(name, cost) {
        if(this.usePartyCoins && this.crumb.party_coins) {
            return `Would you like to buy ${name} for ${cost} ${this.world.party.partyCoinCurrency}? You currently have ${this.world.client.partyCoins} ${this.world.party.partyCoinCurrency}.`
        }
        if(this.useGems && this.crumb.gem_cost) {
            return `Would you like to buy ${name} for ${this.crumb.gem_cost} gems? You currently have ${this.world.client.gems} gems.`
        }
        if (cost < 1) {
            return `You have found a ${name}.\nWould you like to pick it up?`
        } else {
            return `Would you like to buy ${name} for ${cost} coins. You currently have ${this.world.client.coins} coins.`
        }
    }

    callback() {
        if (this.item) {
            this.sendAddItem()
        }

        this.visible = false
		this.interface.prompt.showWindow(null,'loading')
    }

    noCallback() {
        this.interface.prompt.handleZIndex("hide")
        this.visible = false
        this.interface.main.events.emit('show_main_inputs')
    }

    sendAddItem() {
        /*if(this.usePartyCoins) {
            this.network.send('party_coins_buy', { item: this.item })
            return
        }*/
        if(this.useGems) {
            this.network.send('add_gem_item', { item: this.item })
            return
        }
        switch (this.type) {
            case 'clothing':
                this.network.send('add_item', { item: this.item })
                break
            default:
                break
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
