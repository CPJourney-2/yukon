
// You can write more code here

/* START OF COMPILED CODE */

import BaseImage from "../../../base/BaseImage";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Spinner extends BaseImage {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "load", frame ?? "spinner");

        /* START-USER-CTR-CODE */
        // Write your code here.
        this._tween = scene.tweens.add({
            targets: this,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    stop() {
        this._tween.pause()
        this.angle = 0
        this.visible = false
    }

    start() {
        this._tween.restart()
        this._tween.play()
        this.visible = true
    }
    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
