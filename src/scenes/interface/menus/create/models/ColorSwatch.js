
// You can write more code here
import BaseContainer from '@scenes/base/BaseContainer'
import { SimpleButton } from '@components/components'
/* START OF COMPILED CODE */

export default class ColorSwatch extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {RoundedRectangleImage} */
        this.swatch;
        /** @type {RoundedRectangleImage} */
        this.outlineIdle;
        /** @type {RoundedRectangleImage} */
        this.outlineSelected;
        /** @type {number} */
        this.swatchColor = 0;


        // swatch
        const swatch = scene.add.roundedRectangleImage(0, 0, 60, 60);
        swatch.fillColor = 14474460;
        swatch.isStroked = false;
        swatch.lineWidth = 3;
        swatch.radiusTopLeft = 10;
        swatch.radiusTopRight = 10;
        swatch.radiusBottomLeft = 10;
        swatch.radiusBottomRight = 10;
        this.add(swatch);

        // btn
        const btn = scene.add.rectangle(0, 0, 60, 60);
        this.add(btn);

        // outlineIdle
        const outlineIdle = scene.add.roundedRectangleImage(0, 0, 60, 60);
        outlineIdle.isFilled = false;
        outlineIdle.fillColor = 14474460;
        outlineIdle.lineWidth = 3;
        outlineIdle.radiusTopLeft = 10;
        outlineIdle.radiusTopRight = 10;
        outlineIdle.radiusBottomLeft = 10;
        outlineIdle.radiusBottomRight = 10;
        this.add(outlineIdle);

        // outlineSelected
        const outlineSelected = scene.add.roundedRectangleImage(0, 0, 60, 60);
        outlineSelected.visible = false;
        outlineSelected.isFilled = false;
        outlineSelected.fillColor = 15855635;
        outlineSelected.strokeColor = 15592453;
        outlineSelected.lineWidth = 3;
        outlineSelected.radiusTopLeft = 10;
        outlineSelected.radiusTopRight = 10;
        outlineSelected.radiusBottomLeft = 10;
        outlineSelected.radiusBottomRight = 10;
        this.add(outlineSelected);

        // btn (components)
        const btnSimpleButton = new SimpleButton(btn);
        btnSimpleButton.callback = () => this.onClick();

        this.swatch = swatch;
        this.outlineIdle = outlineIdle;
        this.outlineSelected = outlineSelected;

        /* START-USER-CTR-CODE */
        this.scene.events.once('create', () => {
            this.swatch.fillColor = parseInt(this.crumbs.colors[this.swatchColor - 1].slice(2),16)
        })
        // Write your code here.
        swatch.strokeColor = 0
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    onClick() {
        this.scene.onSwatchClick(this)
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
