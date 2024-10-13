// v1.0.1: 1.0.0
import Phaser from "phaser";
import RoundedRectangleGraphics from "./RoundedRectangleGraphics";
export default function registerRoundedRectangleGraphicsFactory() {
    Phaser.GameObjects.GameObjectFactory.register("roundedRectangleGraphics", function (x, y, width, height) {
        return this.displayList.add(new RoundedRectangleGraphics(this.scene, x, y, width, height));
    });
}
