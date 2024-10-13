import SimpleButton from "@scenes/components/SimpleButton";
import BaseContainer from "@scenes/base/BaseContainer";
import Animation from "@scenes/components/Animation";
// You can write more code here

/* START OF COMPILED CODE */

export default class Present extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // present
        const present = scene.add.sprite(804.9093389975656, 1417.878927994347, "presentdelivery", "presentanimation0001");
        present.setOrigin(9.49893339997136, 2.515843523470489);
        this.add(present);

        // lists
        const sort = [present];

        // present (components)
        const presentAnimation = new Animation(present);
        presentAnimation.end = 37;
        presentAnimation.repeat = 0;
        const presentSimpleButton = new SimpleButton(present);
        presentSimpleButton.callback = () => this.onPresentClick();
        presentSimpleButton.pixelPerfect = true;

        this.present = present;
        this.sort = sort;

        /* START-USER-CTR-CODE */
        this.tweening = false
        this.dropped = false
        this.present.on('animationcomplete', () => { 
            if (!this.dropped) {
                this.dropped = true
                return
            } 

            this.deletePresent(true)
        })
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Sprite} */
    present;
    /** @type {Phaser.GameObjects.Sprite[]} */
    sort;
    /** @type {number} */
    sitFrame = 0;
    /** @type {Phaser.GameObjects.GameObject} */
    donePoint;

    /* START-USER-CODE */

    onPresentClick() {
        if (!this.dropped) return
        this.present.play('presentOpen')
    }

    deletePresent(sendNetworkMessage = false) {
        if (this.tweening) return
        if (!this.scene) return

        this.scene.tweens.add({
            targets: [this.present],
            alpha: {
                from: 1,
                to: 0
            },
            duration: 200,
            onComplete: () => {
                if (sendNetworkMessage) this.world.network.send("claim_present")
            }
        })
        this.dropped = false
        this.tweening = true
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
