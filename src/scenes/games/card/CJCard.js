import { Animation, Button, MoveTo, ShowHint, SimpleButton } from '@components/components'
import BaseContainer from '@scenes/base/BaseContainer'
import CardJitsuIconLoader from '@engine/loaders/CardJitsuIconLoader';

// You can write more code here

/* START OF COMPILED CODE */

export default class CJCard extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 117.5, y ?? 132.5);

        // container_2
        const container_2 = scene.add.container(-121.08533477783203, -353.5924987792969);
        this.add(container_2);

        // shadow_1
        const shadow_1 = scene.add.image(5, 242.00001525878906, "cjcard", "shadow");
        shadow_1.alpha = 0.4;
        shadow_1.alphaTopLeft = 0.4;
        shadow_1.alphaTopRight = 0.4;
        shadow_1.alphaBottomLeft = 0.4;
        shadow_1.alphaBottomRight = 0.4;
        shadow_1.tintFill = true;
        shadow_1.tintTopLeft = 0;
        shadow_1.tintTopRight = 0;
        shadow_1.tintBottomLeft = 0;
        shadow_1.tintBottomRight = 0;
        shadow_1.setOrigin(0, 0);
        container_2.add(shadow_1);

        // cjback
        const cjback = scene.add.image(119, 371, "cjback");
        cjback.scaleY = 1.01;
        cjback.visible = false;
        container_2.add(cjback);

        // power
        const power = scene.add.container(109, 0);
        power.visible = false;
        container_2.add(power);

        // bubble0001
        const bubble0001 = scene.add.sprite(8, 367, "cjcard", "bubble0001");
        bubble0001.alpha = 0.7;
        bubble0001.alphaTopLeft = 0.7;
        bubble0001.alphaTopRight = 0.7;
        bubble0001.alphaBottomLeft = 0.7;
        bubble0001.alphaBottomRight = 0.7;
        power.add(bubble0001);

        // text
        const text = scene.add.image(0, 102, "cjcard", "text");
        text.visible = false;
        power.add(text);

        // powerdesc0001
        const powerdesc0001 = scene.add.image(18, -4, "cjcard", "carddesc0001");
        powerdesc0001.visible = false;
        power.add(powerdesc0001);

        // powertext
        const powertext = scene.add.text(0, 106, "", {});
        powertext.setOrigin(0.5, 0.5);
        powertext.visible = false;
        powertext.tintTopLeft = 0;
        powertext.tintTopRight = 0;
        powertext.tintBottomLeft = 0;
        powertext.tintBottomRight = 0;
        powertext.setStyle({ "align": "center", "fixedWidth":350,"fixedHeight":160,"fontFamily": "CCFaceFront", "fontSize": "30px" });
        powertext.setWordWrapWidth(340, true);
        power.add(powertext);

        // card
        const card = scene.add.container(0, 236.00001525878906);
        container_2.add(card);

        // art
        const art = scene.add.image(113, 127, "703");
        art.scaleX = 1.02;
        art.scaleY = 1.02;
        card.add(art);

        // border
        const border = scene.add.image(0, 0, "cjcard", "border");
        border.setOrigin(0, 0);
        card.add(border);

        // type0001
        const type0001 = scene.add.image(34, 37, "cjcard", "type0001");
        card.add(type0001);

        // back_1
        const back_1 = scene.add.image(0, 0, "cjcard", "back");
        back_1.alpha = 0.3;
        back_1.alphaTopLeft = 0.3;
        back_1.alphaTopRight = 0.3;
        back_1.alphaBottomLeft = 0.3;
        back_1.alphaBottomRight = 0.3;
        back_1.tintFill = true;
        back_1.tintTopLeft = 0;
        back_1.tintTopRight = 0;
        back_1.tintBottomLeft = 0;
        back_1.tintBottomRight = 0;
        back_1.setOrigin(0, 0);
        back_1.visible = false;
        card.add(back_1);

        // text_1
        const text_1 = scene.add.text(33, 331.00001525878906, "", {});
        text_1.setOrigin(0.5, 0.5);
        text_1.tintTopLeft = 0;
        text_1.tintTopRight = 0;
        text_1.tintBottomLeft = 0;
        text_1.tintBottomRight = 0;
        text_1.text = "12";
        text_1.setStyle({ "align": "center", "fontFamily": "Burbank Big Regular", "fontSize": "48px", "fontStyle": "bold" });
        container_2.add(text_1);

        // back
        const back = scene.add.image(0, 236.00001525878906, "cjcard", "back");
        back.setOrigin(0, 0);
        back.visible = false;
        container_2.add(back);

        // explosion_10
        const explosion_10 = scene.add.sprite(166.00000762939453, 297.00001525878906, "explosion_1", "explosion0001");
        explosion_10.visible = false;
        container_2.add(explosion_10);

        // bubble0001 (components)
        const bubble0001Animation = new Animation(bubble0001);
        bubble0001Animation.end = 10;

        // border (components)
        const borderSimpleButton = new SimpleButton(border);
        borderSimpleButton.hoverCallback = () => {this.onCardHover()};
        borderSimpleButton.hoverOutCallback = () => {this.onCardHoverOut()};
        borderSimpleButton.callback = () => {this.onCardClick()};

        // explosion_10 (components)
        const explosion_10Animation = new Animation(explosion_10);
        explosion_10Animation.key = "explosion";
        explosion_10Animation.end = 14;
        explosion_10Animation.repeat = 0;
        explosion_10Animation.autoPlay = false;

        this.container_2 = container_2;
        this.shadow_1 = shadow_1;
        this.cjback = cjback;
        this.power = power;
        this.bubble0001 = bubble0001;
        this.text = text;
        this.powerdesc0001 = powerdesc0001;
        this.powertext = powertext;
        this.card = card;
        this.art = art;
        this.border = border;
        this.type0001 = type0001;
        this.back_1 = back_1;
        this.text_1 = text_1;
        this.back = back;
        this.explosion_10 = explosion_10;

        /* START-USER-CTR-CODE */
        this.scene = scene
        this.cardID
        this.cardColours = {
            r: 0xE24A3E,
            g: 0x61A04E,
            b: 0x1148a1,
            p: 0xA36ABA,
            o: 0xF7B04B,
            y: 0xFAE835
        };
        this.type = {f: "type0001", w: "type0002", s: "type0003"}
        this.cardData
        this.lock = true
        this.playlock = true
        this.myCard = true

        this.uuid

        this.iconLoader = new CardJitsuIconLoader(this.scene)

        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Container} */
    container_2;
    /** @type {Phaser.GameObjects.Image} */
    shadow_1;
    /** @type {Phaser.GameObjects.Image} */
    cjback;
    /** @type {Phaser.GameObjects.Container} */
    power;
    /** @type {Phaser.GameObjects.Sprite} */
    bubble0001;
    /** @type {Phaser.GameObjects.Image} */
    text;
    /** @type {Phaser.GameObjects.Image} */
    powerdesc0001;
    /** @type {Phaser.GameObjects.Text} */
    powertext;
    /** @type {Phaser.GameObjects.Container} */
    card;
    /** @type {Phaser.GameObjects.Image} */
    art;
    /** @type {Phaser.GameObjects.Image} */
    border;
    /** @type {Phaser.GameObjects.Image} */
    type0001;
    /** @type {Phaser.GameObjects.Image} */
    back_1;
    /** @type {Phaser.GameObjects.Text} */
    text_1;
    /** @type {Phaser.GameObjects.Image} */
    back;
    /** @type {Phaser.GameObjects.Sprite} */
    explosion_10;

    /* START-USER-CODE */

    setupCard(id) {
        this.cardID = id

        if (this.cardID == 0) {
            this.back.visible = true
            // scale it smaller
            this.card.visible = false
            this.power.visible = false
            this.text_1.visible = false
            return
        }

        this.back.visible = false
        this.card.visible = true
        this.text_1.visible = true
        let cardData = this.world.crumbs.cards[id]
        this.cardData = cardData

        this.border.setTintFill(this.cardColours[cardData.color])
        this.bubble0001.setTint(this.cardColours[cardData.color])

        this.setArt(id)

        this.type0001.setFrame(this.type[cardData.element])

        this.text_1.text = cardData.value.toString()

        this.power.visible = (cardData.power_id != 0)
    }

    onCardHover() {
        if (this.lock) return
        this.cjback.visible = true
        this.shadow_1.visible = false

        if (this.cardData.power_id == 0) return // not a powercard

        this.powertext.text = this.cardData.description
        this.powertext.visible = true
        this.powerdesc0001.visible = true
        this.text.visible = true

        //number.toString().padStart(length, '0');
        this.powerdesc0001.setFrame(`carddesc${this.cardData.power_id.toString().padStart(4, '0')}`)
    }

    onCardHoverOut() {  
        this.powertext.visible = false
        this.powerdesc0001.visible = false
        this.text.visible = false

        this.cjback.visible = false
        this.shadow_1.visible = true
    }

    _setArt(key) {
        this.art.setTexture(key)
    }

    setArt(id) {
        this.iconLoader.loadIcon(this, id.toString(), true)
    }

    onCardClick() {
        if(this.scene._cardClick) this.scene._cardClick(this)
    }

    explodeCard(callback) {
        this.scene.soundManager.playSfx("explosion", {volume: 3})
        this.explosion_10.visible = true
        this.explosion_10.__Animation.play()

        let self = this

        setTimeout(() => {
            self.card.visible = false
            self.power.visible = false
            self.back.visible = false
            self.shadow_1.visible = false
            this.text_1.visible = false
        }, 150);

        this.explosion_10.on("animationcomplete", () => {
            this.explosion_10.visible = false

            callback()
        })
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
