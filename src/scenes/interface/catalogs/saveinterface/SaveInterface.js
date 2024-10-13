import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive } from '@components/components'

export const preload = {
    key: 'saveinterface-pack',
    url: 'assets/media/interface/catalogs/saveinterface/saveinterface-pack.json',
    loadString: ['loading', 'Save The Migrator Donations']
}

/* START OF COMPILED CODE */

export default class SaveInterface extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // block
        const block = scene.add.rectangle(-12, 10, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // interfacetwo
        const interfacetwo = scene.add.image(11, -2, "saveinterfacetwo", "interfacetwo");
        interfacetwo.visible = false;
        this.add(interfacetwo);

        // bg
        const bg = scene.add.image(11, -2, "saveinterfacethree", "interface_three");
        this.add(bg);

        // interface_four
        const interface_four = scene.add.image(11, -2, "saveinterfacefour", "interface_four");
        this.add(interface_four);

        // interface_five
        const interface_five = scene.add.image(12, -10, "saveinterfacefive", "interface_five");
        this.add(interface_five);

        // buttons_close
        const buttons_close = scene.add.image(343, -398, "saveinterfacebtn", "saveclose");
        this.add(buttons_close);

        // save_buy
        const save_buy = scene.add.image(162, -170, "saveinterfacebtn", "save_buy");
        this.add(save_buy);

        // save_buy_1
        const save_buy_1 = scene.add.image(162, 32, "saveinterfacebtn", "save_buy");
        this.add(save_buy_1);

        // save_buy_2
        const save_buy_2 = scene.add.image(-195, 158, "saveinterfacebtn", "save_buy");
        this.add(save_buy_2);

        // block (components)
        new Interactive(block);

        // buttons_close (components)
        const buttons_closeButton = new Button(buttons_close);
        buttons_closeButton.spriteName = "saveclose";
        buttons_closeButton.callback = () => this.interface.destroyWidget(this);
        buttons_closeButton.activeFrame = true;

        // save_buy (components)
        const save_buyButton = new Button(save_buy);
        save_buyButton.spriteName = "save_buy";
        save_buyButton.callback = () =>this.interface.prompt.showItem(344);

        // save_buy_1 (components)
        const save_buy_1Button = new Button(save_buy_1);
        save_buy_1Button.spriteName = "save_buy";
        save_buy_1Button.callback = () =>this.interface.prompt.showItem(282);

        // save_buy_2 (components)
        const save_buy_2Button = new Button(save_buy_2);
        save_buy_2Button.spriteName = "save_buy";
        save_buy_2Button.callback = () =>this.interface.prompt.showItem(490);

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
