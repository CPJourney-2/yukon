import Prompt from './Prompt'


class ErrorPrompt extends Prompt {

    constructor(scene, x, y) {
        super(scene, x, y)

        this.bg = this.createBackground(708, 'error')
        this.text = this.createText()
        this.button = this.createButton('error-button', 'Okay', true)

        this.errorCodeText = this.scene.add.text(0, 0, '', {
            fontFamily: 'Arial',
            fontSize: 20,
            color: '#9C3B01',
            align: 'right',
            fixedWidth: 635
        })
        this.errorCodeText.setOrigin(0.5, 1)

        this.add([ this.bg, this.text, this.button, this.errorCodeText ])
    }

    show(text, buttonText, callback, errorCode = null) {
        this.text.text = text
        this.button.text.text = buttonText
        this.errorCodeText.visible = errorCode !== null
        this.errorCodeText.text = errorCode
        // Allows for modification of callback
        this.button.component.callback = callback

        // Clamp minimum text height at 140px
        this.text.height = (this.text.height > 140) ? this.text.height : 140

        this.resize()

        this.visible = true
        if(!this.world.scene.isSleeping('Main')) {
            this.interface.main.handleHideInputs()
        }
    }

    resize() {
        // Resize prompt background to fit all content, + total padding, + extra padding
        this.bg.setSize(708, this.text.height + this.button.height + 100 + 25)

        // Reposition contents using new background and text height
        this.text.y = -(this.bg.height / 2) + (this.text.height / 2) + 50
        this.button.y = (this.bg.height / 2) - (this.button.height / 2) - 50

        this.errorCodeText.y = (this.bg.height / 2) - 25
    }

}

export default ErrorPrompt
