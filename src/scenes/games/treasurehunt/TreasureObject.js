
// You can write more code here
import { Animation } from '@components/components'
/* START OF COMPILED CODE */

export default class TreasureObject extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Sprite} */
        this.emerald;
        /** @type {Phaser.GameObjects.Sprite} */
        this.gem;
        /** @type {Phaser.GameObjects.Sprite} */
        this.coin;
        /** @type {Phaser.GameObjects.Sprite} */
        this.shine;


        // emerald
        const emerald = scene.add.sprite(-17.18622326743714, -18.13187922462463, "treasurehunt", "objects/emerald0001");
        emerald.scaleX = 0.94;
        emerald.scaleY = 0.94;
        emerald.setOrigin(0, 0);
        emerald.visible = false;
        this.add(emerald);

        // gem
        const gem = scene.add.sprite(-17.18622326743714, -18.13187922462463, "treasurehunt", "objects/gem0001");
        gem.scaleX = 0.94;
        gem.scaleY = 0.94;
        gem.setOrigin(0, 0);
        gem.visible = false;
        this.add(gem);

        // coin
        const coin = scene.add.sprite(-16.18622326743714, -18.13187922462463, "treasurehunt", "objects/coin0001");
        coin.scaleX = 0.95;
        coin.scaleY = 0.95;
        coin.setOrigin(0, 0);
        coin.visible = false;
        this.add(coin);

        // shine
        const shine = scene.add.sprite(-21, -22, "treasurehunt", "sparkle0064");
        shine.setOrigin(0, 0);
        shine.visible = false;
        this.add(shine);

        // emerald (components)
        const emeraldAnimation = new Animation(emerald);
        emeraldAnimation.key = "objects/emerald";
        emeraldAnimation.end = 90;
        emeraldAnimation.autoPlay = false;

        // gem (components)
        const gemAnimation = new Animation(gem);
        gemAnimation.key = "objects/gem";
        gemAnimation.end = 100;
        gemAnimation.autoPlay = false;

        // coin (components)
        const coinAnimation = new Animation(coin);
        coinAnimation.key = "objects/coin";
        coinAnimation.end = 100;
        coinAnimation.autoPlay = false;

        // shine (components)
        const shineAnimation = new Animation(shine);
        shineAnimation.key = "sparkle";
        shineAnimation.end = 70;
        shineAnimation.autoPlay = false;
        shineAnimation.showOnStart = true;

        this.emerald = emerald;
        this.gem = gem;
        this.coin = coin;
        this.shine = shine;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    show(name) {
        if(name != 'shine') this[name].visible = true
        //setTimeout(() => this[name]['__Animation'].play(),5)
        //this[name].anims.play({ startFrame: Math.floor(Math.random() * 90) }, true)
        this.startAnimTimeout = setTimeout(() => this[name]['__Animation'].play(),Math.floor(Math.random() * 3750))
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
