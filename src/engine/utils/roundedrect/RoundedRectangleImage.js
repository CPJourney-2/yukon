// v1.0.1
import Phaser from "phaser";
import drawRoundedRectangle from "./drawRoundedRectangle";
export default class RoundedRectangleImage extends Phaser.GameObjects.Image {
    radiusTopLeft = 20;
    radiusTopRight = 20;
    radiusBottomLeft = 20;
    radiusBottomRight = 20;
    isFilled = true;
    fillColor = 0xffffff;
    fillAlpha = 1;
    isStroked = true;
    lineWidth = 2;
    strokeColor = 0;
    strokeAlpha = 1;
    shadowColor = 0;
    shadowAlpha = 0;
    shadowOffsetLeft = 0;
    shadowOffsetRight = 0;
    shadowOffsetTop = 0;
    shadowOffsetBottom = 0;
    static PROPS = [
        "width",
        "height",
        "radiusTopLeft",
        "radiusTopRight",
        "radiusBottomLeft",
        "radiusBottomRight",
        "isFilled",
        "fillColor",
        "fillAlpha",
        "isStroked",
        "lineWidth",
        "strokeColor",
        "strokeAlpha",
        "shadowColor",
        "shadowAlpha",
        "shadowOffsetLeft",
        "shadowOffsetRight",
        "shadowOffsetTop",
        "shadowOffsetBottom"
    ];
    _currentKey = "";
    constructor(scene, x, y, width, height) {
        super(scene, x, y, "");
        this.setSize(width, height);
        scene.events.once("update", () => this.redraw());
    }
    createKey() {
        return `RoundedRectangleImage[${RoundedRectangleImage.PROPS
            .map(p => this[p]).join(",")}]`;
    }
    redraw() {
        const key = this.createKey();
        if (key !== this._currentKey) {
            if (this.scene.textures.exists(key)) {
                // console.log(`RoundedRectangleImage: resuse the key ${key}`);
            }
            else {
                // console.log(`RoundedRectangleImage: generate key ${key}`);
                const gr = new Phaser.GameObjects.Graphics(this.scene);
                gr.translateCanvas(this.originX * this.width, this.originY * this.height);
                drawRoundedRectangle(this, gr);
                gr.generateTexture(key, this.width, this.height);
                gr.destroy();
            }
            this._currentKey = key;
            this.setTexture(key);
        }
    }
}
