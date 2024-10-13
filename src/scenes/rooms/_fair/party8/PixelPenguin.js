import BaseContainer from '@scenes/base/BaseContainer'

export default class PixelPenguin extends BaseContainer {

    constructor(penguin) {
        super(penguin.room, penguin.x, penguin.y)

        this.body = penguin.room.add.sprite(0, 0, 'pixelpenguins', 'body/1_1')
        this.penguin = penguin.room.add.sprite(0, 0, 'pixelpenguins', 'penguin/1_1')

        this.body.setTint(this.world.getColor(penguin.color))

        this.add(this.body)
        this.add(this.penguin)

        this.setDepth(penguin.depth + 1)

        this._frame = 1
        this._color = penguin.color
    }

    playFrame(frame) {
        this._frame = frame
        if (this.body) this.body.play(`pixel_body_${frame}`)
        if (this.penguin) this.penguin.play(`pixel_penguin_${frame}`)
    }

    updateColor(color) {
        if(color !== this._color) {
            this.body.setTint(this.world.getColor(color))
            this._color = color
            return true
        }
        return false
    }

}