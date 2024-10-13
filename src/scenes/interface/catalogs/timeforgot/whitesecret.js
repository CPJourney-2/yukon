
// You can write more code here

/* START OF COMPILED CODE */

export default class whitesecret extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 267.5, y ?? 143);

        // background
        const background = scene.add.image(0, 19.5, "whitesecret", "background");
        this.add(background);

        // item
        const item = scene.add.image(106, 8, "whitesecret", "item");
        this.add(item);

        // close
        const close = scene.add.image(171, 126, "whitesecret", "close");
        this.add(close);

        // coin
        const coin = scene.add.image(-57, -2, "whitesecret", "coin");
        this.add(coin);

        // buyButton
        const buyButton = new BuyButton(scene, -162, 56, "commonbook", "cc-buy3");
        this.add(buyButton);

        // text_1
        const text_1 = scene.add.text(-157, -27, "", {});
        text_1.text = "150";
        text_1.setStyle({ "color": "#000000ff", "fontFamily": "CCFaceFront", "fontSize": "45px" });
        this.add(text_1);

        // text
        const text = scene.add.text(-215, -91, "", {});
        text.text = "Silver Wand\n";
        text.setStyle({ "color": "#000000ff", "fontFamily": "CCFaceFront", "fontSize": "45px" });
        this.add(text);

        // close (components)
        const closeButton = new Button(close);
        closeButton.spriteName = "close";
        closeButton.callback = () => {this.close()};
        closeButton.activeFrame = true;

        // buyButton (prefab fields)
        buyButton.item = 5013;

        this.item = item;
        this.text_1 = text_1;
        this.text = text;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    item;
    /** @type {Phaser.GameObjects.Text} */
    text_1;
    /** @type {Phaser.GameObjects.Text} */
    text;

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
