import { Interactive, ShowHint } from '@components/components'
import ItemIconLoader from '@engine/loaders/ItemIconLoader'
// You can write more code here

/* START OF COMPILED CODE */

export default class UnlockSlot extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.slot;
        /** @type {Phaser.GameObjects.Container} */
        this.itemContainer;
        /** @type {Phaser.GameObjects.Text} */
        this.coinCount;
        /** @type {Phaser.GameObjects.Container} */
        this.coins;


        // slot
        const slot = scene.add.image(0, -11.766840215372177, "unlock", "slot");
        slot.setOrigin(0.5, 0.41085727109566533);
        this.add(slot);

        // itemContainer
        const itemContainer = scene.add.container(0, 0);
        itemContainer.scaleX = 0.9;
        itemContainer.scaleY = 0.9;
        this.add(itemContainer);

        // coins
        const coins = scene.add.container(0, -13);
        coins.visible = false;
        this.add(coins);

        // prompt_coin
        const prompt_coin = scene.add.image(0, 0, "main", "prompt_coin");
        prompt_coin.scaleX = 0.45;
        prompt_coin.scaleY = 0.45;
        coins.add(prompt_coin);

        // coinCount
        const coinCount = scene.add.text(0, 48, "", {});
        coinCount.setOrigin(0.5, 0.5);
        coinCount.text = "99999";
        coinCount.setStyle({ "align": "center", "color": "#4a4a4aff", "fontFamily": "Burbank Small", "fontSize": "27px", "fontStyle": "bold" });
        coins.add(coinCount);

        // slot (components)
        new Interactive(slot);
        const slotShowHint = new ShowHint(slot);
        slotShowHint.text = "Item";

        this.slot = slot;
        this.itemContainer = itemContainer;
        this.coinCount = coinCount;
        this.coins = coins;

        /* START-USER-CTR-CODE */
        this.itemLoader = new ItemIconLoader(this.scene,this.itemContainer,false);
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    showCoins(coins) {
        this.itemContainer.visible = false
        this.coinCount.text = coins
        this.coins.visible = true
        this.slot.__ShowHint.text = `${coins} coins`
    }

    loadItem(item) {
        this.coins.visible = false
        this.itemContainer.visible = true
        this.itemLoader.startItemLoad(item)
        this.slot.__ShowHint.text = this.scene.crumbs.items[item].name
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
