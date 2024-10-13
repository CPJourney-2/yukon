import PhysicsMaskGraphics from '@engine/utils/mask/PhysicsMaskGraphics';
import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class NoBoundary extends IglooScene {

    constructor() {
        super("NoBoundary");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image} */
        this.floor_2;
        /** @type {Phaser.GameObjects.Image} */
        this.floor_4;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.floorMask;


        /* START-USER-CTR-CODE */
        this.floorSpawn = [760, 728]
        this.wallSpawn = [760, 450]
        this.wallBounds = [490, 1030]
        this.floorFrame = 17
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("noboundary-pack", "assets/media/igloos/buildings/sprites/noboundary/noboundary-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 624, "noboundary", "floor-1");
        floor.alpha = 0.0001;
        floor.alphaTopLeft = 0.0001;
        floor.alphaTopRight = 0.0001;
        floor.alphaBottomLeft = 0.0001;
        floor.alphaBottomRight = 0.0001;

        // floor_2
        const floor_2 = this.add.image(760, 624, "noboundary", "floor-2");
        floor_2.alpha = 0.0001;
        floor_2.alphaTopLeft = 0.0001;
        floor_2.alphaTopRight = 0.0001;
        floor_2.alphaBottomLeft = 0.0001;
        floor_2.alphaBottomRight = 0.0001;

        // floor_4
        const floor_4 = this.add.image(760, 624, "noboundary", "floor_4");
        floor_4.alpha = 0.0001;
        floor_4.alphaTopLeft = 0.0001;
        floor_4.alphaTopRight = 0.0001;
        floor_4.alphaBottomLeft = 0.0001;
        floor_4.alphaBottomRight = 0.0001;

        // floorMask
        const floorMask = this.add.rectangle(0, 0, 1520, 960);
        floorMask.setOrigin(0, 0);
        floorMask.alpha = 0;
        floorMask.isFilled = true;

        this.floor = floor;
        this.floor_2 = floor_2;
        this.floor_4 = floor_4;
        this.floorMask = floorMask;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create(){
        super.create()

    }

    // Override
    showEditBg() {
        // Do nothing
    }

    addFlooring(flooring){

        if (this.flooring) this.flooring.destroy()
        
        this.flooring = this.add.image(760, 480, `flooring/sprites/${flooring}`, `${this.floorFrame}_1`)
        this.flooring.depth = -5
        this.flooring.setMask(this.createMask(this.roomPhysics.mask))
    }

    createMask(mask) {
        let fixtures = mask.fixtures
        let graphics = new PhysicsMaskGraphics(this, fixtures)

        return graphics.createGeometryMask()
    }

    updateLocation(location) {
        super.updateLocation(location)
        this.addFlooring(this.args.flooring)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
