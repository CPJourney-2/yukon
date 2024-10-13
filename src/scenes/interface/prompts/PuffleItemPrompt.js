import BaseContainer from '@scenes/base/BaseContainer';

import { Interactive, NineSlice } from '@components/components';

import DualButtons from './buttons/DualButtons';
import PuffleItemLoader from '@engine/loaders/PuffleItemLoader';

/* START OF COMPILED CODE */

export default class PuffleItemPrompt extends BaseContainer {

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
        text.text = "Would you like to buy some Gum for 5\nCoins? You currently have 3000 coins.";
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

        this.text.setWordWrapWidth(616, true);

        this.item; // Active item ID
        this.icon; // Icon sprite
        this.type;

        this.loader = new PuffleItemLoader(scene, this);

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    showItem(item, puffleId, parentContainer) {

        this.puffleId = puffleId;
        this.prev = parentContainer;

        this.show(item, this.crumbs.puffleitems[item]);
        this.interface.main.events.emit('hide_main_inputs')
    }

    show(item, crumb) {
        if (!crumb) {
            return;
        }

        this.item = item;

        this.text.text = this.getText(crumb.name, crumb.cost);
        this.visible = true;

        this.loader.loadIcon(item);
    }

    getText(name, cost) {
        switch (name) {
            case 'Gum':
                return `Would you like to buy some Gum for ${cost} Coins? You currently have ${this.world.client.coins} coins.`;
                break;
            case 'Cookie':
                return `Would you like to buy a Cookie for ${cost} Coins? You currently have ${this.world.client.coins} coins.`;
                break;
            case 'Food':
                return `Would you like to buy some Pet Food for ${cost} Coins? You currently have ${this.world.client.coins} coins.`;
                break;
            case 'Bath':
                return `Would you like to bathe your puffle for ${cost} Coins? You currently have ${this.world.client.coins} coins.`;
                break;
        }
    }

    callback() {
        if (this.item) {
            this.network.send('puffle_buy_item', { item: this.item, puffleId: this.puffleId});
            this.prev.close();
        }

        this.visible = false;
        this.interface.main.events.emit('show_main_inputs')
    }

    noCallback() {
        this.visible = false;
        this.interface.main.events.emit('show_main_inputs')
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
