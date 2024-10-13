
// You can write more code here
import BaseContainer from '@scenes/base/BaseContainer'
/* START OF COMPILED CODE */

export default class CreateDoll extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.dollBody;
        /** @type {Phaser.GameObjects.Image} */
        this.dollBodyAlt;


        // dollBody
        const dollBody = scene.add.image(1, -40, "create", "doll/body");
        dollBody.tintFill = true;
        dollBody.tintTopLeft = 14869218;
        dollBody.tintTopRight = 14869218;
        dollBody.tintBottomLeft = 14869218;
        dollBody.tintBottomRight = 14869218;
        this.add(dollBody);

        // dollBodyAlt
        const dollBodyAlt = scene.add.image(1, -40, "create", "doll/body");
        dollBodyAlt.alpha = 0;
        dollBodyAlt.alphaTopLeft = 0;
        dollBodyAlt.alphaTopRight = 0;
        dollBodyAlt.alphaBottomLeft = 0;
        dollBodyAlt.alphaBottomRight = 0;
        dollBodyAlt.tintFill = true;
        dollBodyAlt.tintTopLeft = 15062228;
        dollBodyAlt.tintTopRight = 15062228;
        dollBodyAlt.tintBottomLeft = 15062228;
        dollBodyAlt.tintBottomRight = 15062228;
        this.add(dollBodyAlt);

        // dollOutline
        const dollOutline = scene.add.image(0, 0, "create", "doll/outline");
        this.add(dollOutline);

        this.dollBody = dollBody;
        this.dollBodyAlt = dollBodyAlt;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    changeColor(color,rapidSwitch = false) {
		if(rapidSwitch) {
			this.dollBody.setTintFill(color)
			return
		}
        this.dollBodyAlt.alpha = 1
        this.dollBodyAlt.setTintFill(this.dollBody.tintTopLeft)
        this.dollBody.setTintFill(color)
        this.scene.tweens.add({
            targets: this.dollBodyAlt,
            alpha: { from: 1, to: 0 },
            ease: 'Linear',
            duration: 250,
        })
    }
    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
