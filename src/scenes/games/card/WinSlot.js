import { Animation, Button, MoveTo, SimpleButton, Zone, ShowHint } from '@components/components'
// You can write more code here

/* START OF COMPILED CODE */

export default class WinSlot extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // smallbox
        const smallbox = scene.add.image(0, -1, "cjcard", "smallbox");
        smallbox.setOrigin(0, 0);
        this.add(smallbox);

        // smallbg
        const smallbg = scene.add.image(54, 51, "cjcard", "smallbg");
        this.add(smallbg);

        // smalltype0002
        const smalltype0002 = scene.add.image(51.5, 49, "cjcard", "smalltype0002");
        this.add(smalltype0002);

        // explosion0001
        const explosion0001 = scene.add.sprite(74, 5, "explosion_1", "explosion0001");
        explosion0001.scaleX = 0.5;
        explosion0001.scaleY = 0.5;
        explosion0001.visible = false;
        this.add(explosion0001);

        // explosion0001 (components)
        const explosion0001Animation = new Animation(explosion0001);
        explosion0001Animation.end = 14;
        explosion0001Animation.repeat = 0;

        this.smallbox = smallbox;
        this.smallbg = smallbg;
        this.smalltype0002 = smalltype0002;
        this.explosion0001 = explosion0001;

        /* START-USER-CTR-CODE */
        this.cardColours = {
            r: 0xE24A3E,
            g: 0x61A04E,
            b: 0x1148a1,
            p: 0xA36ABA,
            o: 0xF7B04B,
            y: 0xFAE835
        };
        this.type = {f: "smalltype0001", w: "smalltype0002", s: "smalltype0003"}
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    smallbox;
    /** @type {Phaser.GameObjects.Image} */
    smallbg;
    /** @type {Phaser.GameObjects.Image} */
    smalltype0002;
    /** @type {Phaser.GameObjects.Sprite} */
    explosion0001;

    /* START-USER-CODE */

    setup(card) {
        this.smalltype0002.setFrame(this.type[card.element])
        this.smallbox.setTintFill(this.cardColours[card.color])
    }

    explode(callback) {
        try {
            this.scene.soundManager.playSfx("explosion", {volume: 3})
            this.explosion0001.visible = true
            this.explosion0001.__Animation.play()
    
            let self = this
    
            setTimeout(() => {
                self.smalltype0002.visible = false
                self.smallbg.visible = false
                self.smallbox.visible = false
            }, 150);
    
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
