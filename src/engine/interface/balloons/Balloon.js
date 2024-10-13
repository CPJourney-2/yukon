import BaseContainer from '@scenes/base/BaseContainer'


export default class Balloon extends BaseContainer {

    constructor(penguin) {
        let offsetY = -95

        super(penguin.room, penguin.x, penguin.y + offsetY)

        this.penguin = penguin

        this.minWidth = 128
        this.minHeight = 42
        this.offsetY = offsetY

        this.balloon
    }

    addBalloon(width, height) {
        if (width < this.minWidth) width = this.minWidth
        if (height < this.minHeight) height = this.minHeight

        this.balloon = this.scene.add.nineslice(0, 0, "main", "balloon", width, height, 19, 19, 19, 19);

        this.balloon.setOrigin(0.5, 1)
        this.add(this.balloon)
    }

    addPointer(width, frame) {
        if (width < this.minWidth) width = this.minWidth

        this.pointer = this.scene.add.nineslice(0, 0, "main", frame, width, 40, 18, 110, 0, 15);

        this.pointer.setOrigin(0.5, 0)

        this.add(this.pointer)
    }

    resizeBalloon(width, height) {
        this.balloon.setSize(width, height)
    }

    updatePosition() {
        let offsetY = this.offsetY
        if(this.penguin.isTransformed && this.penguin.transformCrumb.balloon_offset) {
            offsetY = this.penguin.transformCrumb.balloon_offset.y
        }
        this.x = this.penguin.x
        this.y = this.penguin.y + offsetY
    }

}
