import Prompt from './Prompt'

import { Button, NineSlice } from '@components/components'

class InfoPrompt extends Prompt {

    constructor(scene, x, y) {
        super(scene, x, y)

        this.textStyle = {
            fontFamily: 'Arial',
            fontSize: 32,
            color: '#FFFFFF',
            align: 'center',
            fixedWidth: 626,
            wordWrap: { width: 600, useAdvancedWrap: true }
        }

        this.bg = this.createBackground(708, 'pink-prompt')
        this.text = this.createText()
        this.button = this.createButton('pink-single', 'Okay', true)

        this.add([this.bg, this.text, this.button])
    }

    show(text, buttonText, callback) {
        this.text.text = text
        this.button.text.text = buttonText
        // Allows for modification of callback
        this.button.component.callback = callback

        // Clamp minimum text height at 140px
        this.text.height = (this.text.height > 140) ? this.text.height : 140

        this.resize()

        this.visible = true
        if (!this.world.scene.isSleeping('Main')) {
            this.interface.main.handleHideInputs()
        }
    }

    resize() {
        // Resize prompt background to fit all content, + total padding, + extra padding
        this.bg.setSize(708, this.text.height + this.button.height + 100 + 25)

        // Reposition contents using new background and text height
        this.text.y = -(this.bg.height / 2) + (this.text.height / 2) + 50
        this.button.y = (this.bg.height / 2) - (this.button.height / 2) - 50
    }

    createBackground(width, frame) {
        let bg = this.scene.add.nineslice(0, 0, "musicjam-main", frame, width, 400, 50, 50, 50, 50);

        bg.setOrigin(0.5)

        return bg
    }

    createButton(frame, text, active = false) {
        let button = this.scene.add.container(0, 0)
        button.bg = this.scene.add.image(0, 0, 'musicjam-main', frame)
        button.text = this.scene.add.text(0, 0, text, this.buttonTextStyle)

        button.add(button.bg)
        button.add(button.text)

        button.text.setOrigin(0.5)
        button.bg.setOrigin(0.5, 0.5)

        button.setSize(button.bg.width, button.bg.height)

        button.component = new Button(button.bg)
        button.component.spriteName = frame
        button.component.activeFrame = active
        button.component.callback = () => this.visible = false

        return button
    }

}

export default InfoPrompt
