
interface IRoundedRectangleGraphics {

    width: number;
    height: number;

    originX: number;
    originY: number;

    radiusTopLeft: number;
    radiusTopRight: number;
    radiusBottomLeft: number;
    radiusBottomRight: number;
    isFilled: boolean;
    fillColor: number;
    fillAlpha: number;
    isStroked: boolean;
    lineWidth: number;
    strokeColor: number;
    strokeAlpha: number;
    shadowColor: number;
    shadowAlpha: number;
    shadowOffsetLeft: number;
    shadowOffsetRight: number;
    shadowOffsetTop: number;
    shadowOffsetBottom: number;

    setSize(width: number, height: number): void;

    redraw(): void;
}

declare namespace Phaser.GameObjects {

    export interface GameObjectFactory {

        roundedRectangleGraphics(x: number, y: number, width: number, height: number): RoundedRectangleGraphics;
        roundedRectangleImage(x: number, y: number, width: number, height: number): RoundedRectangleImage;
    }
}