import Balloon from './Balloon'


export default class TextBalloon extends Balloon {

    constructor(penguin) {
        super(penguin)

        let width = 256
        let paddingX = 28
        let textWidth = width - paddingX

        this.maxLength = 70
        this.paddingY = 16

        this.textStyle = {
            fontFamily: 'Burbank Small',
            fontSize: 24,
            color: '#000000',
            align: 'center',
            fixedWidth: textWidth,
            wordWrap: { width: textWidth, useAdvancedWrap: true },
            lineSpacing: -5
        }

        this.medievalStyle = {
            fontFamily: 'RuneScapeBold',
            fontSize: 24,
            color: '#ffff00',
            align: 'center',
            fixedWidth: textWidth,
            wordWrap: { width: textWidth, useAdvancedWrap: true },
            lineSpacing: -5

        }

        this.text = this.addText()

        this.addBalloon(width, this.text.height + this.paddingY)
        this.addPointer(width, 'balloon-text')
        this.add(this.text)
    }

    addText() {
        let textSprite = this.scene.add.text(0, 0, '', this.textStyle)

        textSprite.setOrigin(0.5, 1)

        return textSprite
    }

    setContent(text, filtered=false, muted=false, modOnly=false) {
        this.updatePosition()

        text = text.substring(0, this.maxLength)
        this.text.text = text

        let style = this.textStyle
        style.color  = "#000000"

        if (muted) {
            this.setTint(0xFFF196)
        } else if (filtered) {
            this.setTint(0xFF806F)
        } else if (modOnly) {
            this.setTint(0x00FFFF)
        } else {
            this.setTint(0xffffff)
        }

        this.text._setStyle(style)
        this.resizeBalloon(this.balloon.width, this.text.height + this.paddingY)
    }

    setTint(tint) {
        this.balloon.setTint(tint)
        this.pointer.setTint(tint)
    }

}
