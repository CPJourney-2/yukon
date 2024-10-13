
import { SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class Carousel extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this._graphic2;
        /** @type {Phaser.GameObjects.Image} */
        this._graphic;
        /** @type {Phaser.GameObjects.Container} */
        this.circles;


        // _graphic2
        const _graphic2 = scene.add.image(0, 0, "musicjam-login", "carouselitem1");
        _graphic2.alpha = 0;
        _graphic2.alphaTopLeft = 0;
        _graphic2.alphaTopRight = 0;
        _graphic2.alphaBottomLeft = 0;
        _graphic2.alphaBottomRight = 0;
        this.add(_graphic2);

        // _graphic
        const _graphic = scene.add.image(0, 0, "musicjam-login", "carouselitem1");
        this.add(_graphic);

        // overlay_carousel
        const overlay_carousel = scene.add.image(-2, 146, "newstart", "overlay-carousel");
        this.add(overlay_carousel);

        // circles
        const circles = scene.add.container(0, 96);
        this.add(circles);

        this._graphic2 = _graphic2;
        this._graphic = _graphic;
        this.circles = circles;

        /* START-USER-CTR-CODE */

        //this.atlas = 'evergreen_start'
        //this.carouselTextures = ['evergreen_1', 'evergreen_2', 'evergreen_3', 'evergreen_4', 'evergreen_5']
        this.atlas = 'fair-login'
        this.carouselTextures = [1, 2, 3]

        this._circles = []

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    start() {
        // Generate circle buttons
        let circleOffset = 17
        let x = -(circleOffset * (this.carouselTextures.length - 1))
        for(let i = 0; i < this.carouselTextures.length; i++) {
            const ellipse = this.scene.add.ellipse(x, 0, 16, 16);
            ellipse.isFilled = true;
            ellipse.fillColor = 0xEEEEEE;
            ellipse.isStroked = true;
            ellipse.strokeColor = 0;
            ellipse.strokeAlpha = 0;
            this.circles.add(ellipse);

            const button = new SimpleButton(ellipse)
            button.callback = () => this.onScreenChange(i + 1)

            this._circles.push(ellipse)

            x += circleOffset * 2
        }

        //this.currentTextureIndex = 0;
        let randomStartingTexture = Phaser.Math.Between(1,this.carouselTextures.length)
        this.currentTextureIndex = randomStartingTexture - 1
        this.setEvergreenCarousel()
        this.updateCircles(randomStartingTexture)
        this._graphic.setTexture(this.atlas, this.carouselTextures[randomStartingTexture - 1])
    }

    setEvergreenCarousel() {
        this.textureChangeTimer = this.scene.time.addEvent({
            delay: 5000,
            loop: true,
            callback: () => {
                this.currentTextureIndex = (this.currentTextureIndex + 1) % this.carouselTextures.length;
                this.fadeToTexture(this.carouselTextures[this.currentTextureIndex]);
            }
        });
    }

    fadeToTexture(texture) {
        this._graphic2.setTexture(this.atlas, texture);
        this.scene.add.tween({
            targets: this._graphic,
            alpha: { from: 1, to: 0 },
            duration: 250,
            onComplete: () => {
                this.updateCircles(this.currentTextureIndex + 1);
                this._graphic.setTexture(this.atlas, texture);
            }
        });
        this.scene.add.tween({
            targets: this._graphic2,
            alpha: { from: 0, to: 1 },
            duration: 250
        });
    }

    updateCircles(activeCircleId) {
        const activeColor = 0xFFBC3A;
        const inactiveColor = 0xEEEEEE;

        this._circles.forEach((circle, index) => {
            if (index + 1 === activeCircleId) {
                circle.fillColor = activeColor;
                circle.strokeAlpha = 1;
            } else {
                circle.fillColor = inactiveColor;
                circle.strokeAlpha = 0;
            }
        });
    }

    onScreenChange(id) {
        let texture = this.carouselTextures[id - 1];
        this.fadeToTexture(texture);
        this.updateCircles(id);
        this.currentTextureIndex = id - 1;
        if(this.textureChangeTimer) this.textureChangeTimer.remove();
        this.setEvergreenCarousel();
    }

    stopTimer() {
        if(!this.textureChangeTimer) return
        this.textureChangeTimer.remove();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
