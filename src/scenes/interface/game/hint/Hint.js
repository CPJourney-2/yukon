import BaseContainer from '@scenes/base/BaseContainer'


/* START OF COMPILED CODE */

export default class Hint extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.hint;
        /** @type {Phaser.GameObjects.Text} */
        this.text;


        // hint
        const hint = scene.add.nineslice(0, 0, "main", "hint", 176, 44, 12, 10, 10, 10);
        this.add(hint);

        // text
        const text = scene.add.text(0, -14, "", {});
        text.setStyle({ "align": "center", "color": "#000000", "fixedHeight":30,"fontFamily": "Arial", "fontSize": "24px" });
        this.add(text);

        this.hint = hint;
        this.text = text;

        /* START-USER-CTR-CODE */

        this.tween
        this.visible = false

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    showHint(gameObject, text) {
        // Get global coordinates of gameObject
        let matrix = gameObject.getWorldTransformMatrix()

        // // Set hint position
        this.x = matrix.getX(0, 0)
        this.y = matrix.getY(0, 0) - 56

        // Set text
        this.text.text = text
        this.text.x = -Math.round(this.text.width / 2)
        this.text.visible = false

        // Calculate and set new width
        let width = (this.text.width > 144) ? this.text.width + 32 : 176
        this.hint.setSize(width, this.hint.height)

        this.visible = true

        // Tween scale of hint opening
        this.tween = this.scene.tweens.add({
            targets: this,
            scale: { from: 0.75, to: 1 },
            duration: 50,
            ease: 'Linear',
            onComplete: () => {
                this.text.visible = true
            }
        })
    }

    hideHint() {
        this.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
