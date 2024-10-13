import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

export const preload = {
    key: 'rockhopper-pack',
    url: 'assets/media/interface/catalogs/rockhopper/rockhopper-pack.json',
    loadString: ['loading', 'rockhopper']
}

import BuyButton from '@scenes/interface/shared_prefabs/BuyButton'

/* START OF COMPILED CODE */

export default class RockHopper extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // block
        const block = scene.add.rectangle(-7, 3, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.2;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // bg
        const bg = scene.add.image(1, 3, "rockhopper_fair2024", "bg");
        this.add(bg);

        // buyButton_1
        const buyButton_1 = new BuyButton(scene, -264, 207);
        this.add(buyButton_1);

        // buyButton
        const buyButton = new BuyButton(scene, -193, -12);
        this.add(buyButton);

        // buyButton_2
        const buyButton_2 = new BuyButton(scene, 117, -5);
        this.add(buyButton_2);

        // buyButton_3
        const buyButton_3 = new BuyButton(scene, 466, -9);
        this.add(buyButton_3);

        // buyButton_4
        const buyButton_4 = new BuyButton(scene, 538, 262);
        this.add(buyButton_4);

        // receive0001
        const receive0001 = scene.add.image(-505, 296, "rockhopper_fair2024", "receive0001");
        this.add(receive0001);

        // grey_button
        const grey_button = scene.add.image(641, -375, "main", "grey-button");
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(641, -377, "main", "grey-x");
        this.add(grey_x);

        // block (components)
        new Interactive(block);

        // buyButton_1 (prefab fields)
        buyButton_1.item = 103;
        buyButton_1.itemType = "Igloo";

        // buyButton (prefab fields)
        buyButton.item = 2040;

        // buyButton_2 (prefab fields)
        buyButton_2.item = 4423;

        // buyButton_3 (prefab fields)
        buyButton_3.item = 5118;

        // buyButton_4 (prefab fields)
        buyButton_4.item = 729;
        buyButton_4.itemType = "Furniture";

        // receive0001 (components)
        const receive0001Button = new Button(receive0001);
        receive0001Button.spriteName = "receive";
        receive0001Button.callback = () => this.interface.prompt.showItem(1159);
        receive0001Button.activeFrame = true;
        receive0001Button.lazyName = true;

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.callback = () => this.close();
        grey_buttonButton.activeFrame = true;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */