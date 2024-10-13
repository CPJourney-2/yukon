// v1.0.1
import Phaser from "phaser";
import drawRoundedRectangle from "./drawRoundedRectangle";
export default class RoundedRectangleGraphics extends Phaser.GameObjects.Graphics {
    // SizeComponent
    width = 200;
    height = 200;
    // OriginComponent
    originX = 0.5;
    originY = 0.5;
    // RoundedRectangleComponent
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
    constructor(scene, x, y, width, height) {
        super(scene, { x, y });
        this.width = width;
        this.height = height;
        scene.events.once("update", () => this.redraw());
    }
    redraw() {
        this.clear();
        drawRoundedRectangle(this, this);
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
        return this;
    }
    updateDisplayOrigin() {
        this.displayOriginX = this.width * this.originX;
        this.displayOriginY = this.height * this.originY;
        return this;
    }
    setOrigin(originX, originY) {
        this.originX = originX;
        this.originY = originY;
        this.updateDisplayOrigin();
    }
}
