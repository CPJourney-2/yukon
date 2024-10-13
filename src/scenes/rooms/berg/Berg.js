import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { MoveTo, SimpleButton, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Berg extends RoomScene {

    constructor() {
        super("Berg");

        /** @type {Phaser.GameObjects.Sprite} */
        this.aqua;
        /** @type {Phaser.GameObjects.Sprite} */
        this.coin_sprite;
        /** @type {Phaser.GameObjects.Text} */
        this.coin_text;
        /** @type {Phaser.GameObjects.Container} */
        this.coin;
        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            aqua: () => this.triggerGame(916)
        };

        this.music = 584;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("berg-pack", "assets/media/rooms/berg/berg-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-18, -18, "berg", "bg");
        bg.setOrigin(0, 0);

        // aqua
        const aqua = this.add.sprite(1255, 325, "berg", "aqua0001");
        aqua.setOrigin(0.5, 0.4014336917562724);

        // coin
        const coin = this.add.container(-130, 99);

        // coin_sprite
        const coin_sprite = this.add.sprite(31.03714265764836, -50.12658541187517, "job_coin", "coin0002");
        coin.add(coin_sprite);

        // coin_text
        const coin_text = this.add.text(-29, -33, "", {});
        coin_text.text = "10";
        coin_text.setStyle({ "align": "center", "baselineX":0,"baselineY":0,"fixedWidth":50,"fixedHeight":50,"fontFamily": "CCComiccrazy", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":2});
        coin_text.setPadding({"top":15});
        coin.add(coin_text);

        // lists
        const sort = [];

        // aqua (components)
        const aquaSimpleButton = new SimpleButton(aqua);
        aquaSimpleButton.hoverCallback = () => this.onAquaOver();
        aquaSimpleButton.callback = () => this.onAquaClick();
        aquaSimpleButton.pixelPerfect = true;
        new MoveTo(aqua);
        const aquaShowHint = new ShowHint(aqua);
        aquaShowHint.text = "sub_hint";

        this.aqua = aqua;
        this.coin_sprite = coin_sprite;
        this.coin_text = coin_text;
        this.coin = coin;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    get aquaFrame() {
        let frame = this.aqua.frame.name
        return parseInt(frame.substr(frame.length - 4))
    }

    create() {
        super.create()

        this.aqua.on('animationcomplete', (animation) => this.onAquaAnimComplete(animation))
        this.aqua.play('aqua_float')
    }

    onAquaAnimComplete(animation) {
        switch (animation.key) {
            case 'aqua_lights_on':
                this.aqua.play('aqua_lights_float')
                break
            case 'aqua_open':
                this.aqua.play('aqua_float')
                break
            default:
                break
        }
    }

    onAquaOver() {
        let frame = this.aquaFrame
        if (frame <= 81 || frame >= 400) {
            this.aqua.play('aqua_lights_on')
        }
    }

    onAquaClick() {
        let frame = this.aquaFrame
        if (frame <= 180 || frame >= 348) {
            this.aqua.play('aqua_open')
        }
    }

    showCoinRewardToPlayer(penguin, coins) {
        this.coin.setPosition(penguin.x, penguin.y - 50)

        this.coin.visible = true

        this.coin_text.setText(`+${coins}`)

        this.tweens.add({
            targets: [this.coin],
            y: {
                from: this.coin.y,
                to: this.coin.y - 70
            },
            ease: 'Linear',
            duration: 1000,
            onComplete: () => this.coin.visible = false
        })

        this.interface.refreshPlayerCard()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
