
import { Animation, Button, MoveTo, SimpleButton, Zone, ShowHint } from '@components/components'
// You can write more code here

/* START OF COMPILED CODE */

export default class CJEffect extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // carddesc
        const carddesc = scene.add.image(0, 0, "cjcard", "bigcarddesc0001");
        this.add(carddesc);

        // explosion0001
        const explosion0001 = scene.add.sprite(-15, -24, "explosion_1", "explosion0001");
        explosion0001.scaleX = 0.2859646974131611;
        explosion0001.scaleY = 0.2859646974131611;
        explosion0001.visible = false;
        this.add(explosion0001);

        // explosion0001 (components)
        const explosion0001Animation = new Animation(explosion0001);
        explosion0001Animation.key = "explosion";
        explosion0001Animation.end = 14;
        explosion0001Animation.repeat = 0;
        explosion0001Animation.autoPlay = false;

        this.carddesc = carddesc;
        this.explosion0001 = explosion0001;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    carddesc;
    /** @type {Phaser.GameObjects.Sprite} */
    explosion0001;

    /* START-USER-CODE */
    explode(callback = () => {}) {
        try {
            this.explosion0001.visible = true
            this.explosion0001.__Animation.play()
    
            setTimeout(() => {
                this.carddesc.visible = false
            }, 150)
    
            this.explosion0001.on("animationcomplete", () => {
                this.explosion0001.visible = false
                callback()
            })
        } catch (e) {
            this.destroy()
        }
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
