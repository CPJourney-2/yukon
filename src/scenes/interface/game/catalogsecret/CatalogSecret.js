import BaseContainer from '@scenes/base/BaseContainer'
import ItemIconLoader from '@engine/loaders/ItemIconLoader'
import BuyButton from '@interface/shared_prefabs/BuyButton'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

export const preload = {
    key: 'catalogsecret-pack',
    url: 'assets/media/interface/game/catalogsecret/catalogsecret-pack.json',
    loadString: ['loading', 'Secret']
}

/* START OF COMPILED CODE */

export default class CatalogSecret extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {BuyButton} */
        this.buyButton;
        /** @type {Phaser.GameObjects.Image} */
        this.itemIcon;
        /** @type {Phaser.GameObjects.Container} */
        this.itemContainer;
        /** @type {Phaser.GameObjects.Text} */
        this.itemName;


        // block
        const block = scene.add.rectangle(-12, 10, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.visible = false;
        block.alpha = 0.3;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // secret_bg
        const secret_bg = scene.add.image(19, -3, "catalogsecret", "secret_bg");
        this.add(secret_bg);

        // buyButton
        const buyButton = new BuyButton(scene, -57, 150);
        this.add(buyButton);

        // secret_close
        const secret_close = scene.add.image(240, -267, "catalogsecret", "secret_close");
        this.add(secret_close);

        // itemContainer
        const itemContainer = scene.add.container(10, -20);
        this.add(itemContainer);

        // itemIcon
        const itemIcon = scene.add.image(0, 0, "party-icon");
        itemIcon.visible = false;
        itemContainer.add(itemIcon);

        // itemName
        const itemName = scene.add.text(10, 149, "", {});
        itemName.setOrigin(0.5, 1);
        itemName.text = "Flashlight";
        itemName.setStyle({ "align": "center", "backgroundColor": "", "color": "#000000ff", "fixedWidth":425,"fontFamily": "Burbank Small", "fontSize": "34px", "fontStyle": "bold", "stroke": "", "shadow.color": "#FFEC91", "shadow.stroke":true});
        itemName.setWordWrapWidth(340);
        this.add(itemName);

        // block (components)
        const blockSimpleButton = new SimpleButton(block);
        blockSimpleButton.callback = () => this.close();

        // secret_bg (components)
        const secret_bgSimpleButton = new SimpleButton(secret_bg);
        secret_bgSimpleButton.callback = () => this.close();

        // secret_close (components)
        const secret_closeButton = new Button(secret_close);
        secret_closeButton.spriteName = "secret_close";
        secret_closeButton.callback = () => this.close();
        secret_closeButton.activeFrame = true;

        this.buyButton = buyButton;
        this.itemIcon = itemIcon;
        this.itemContainer = itemContainer;
        this.itemName = itemName;

        /* START-USER-CTR-CODE */
        this.itemIconLoader = null
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(args) {
        super.show()
        this.item = args.item
        this.buyButton.item = args.item

        this.type = args.type == 'clothing' ? 'items' : 'furniture'
        let typeShort = args.type == 'clothing' ? 'i' : 'f'

        this.itemIconLoader = new ItemIconLoader(this.scene, this.itemContainer, typeShort == 'i', typeShort)
        this.itemIconLoader.startItemLoad(this.item)
        this.itemName.text = this.crumbs[this.type][this.item.toString()].name
    }

    buy() {
        switch(this.type) {
            case 'items':
                this.interface.prompt.showItem(this.item)
                break
            case 'furniture':
                this.interface.prompt.showFurniture(this.item)
                break
            default: break
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
