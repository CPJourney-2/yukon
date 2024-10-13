import Prompt from './Prompt'
import DualButtons from '@scenes/interface/prompts/buttons/DualButtons'

class QuestionPrompt extends Prompt {

    constructor(scene, x, y) {
        super(scene, x, y)

        this.bg = this.createBackground(708, 'window')
        this.text = this.createText()
        this.button = this.createDual()

        this.add([ this.bg, this.text, this.button ])
    }

    createDual() {
        let button = new DualButtons(this.interface, 0, 0);
        return button
    }

    show(text, yesCallback = () => {}, noCallback = () => this.visible = false) {
        this.text.text = text
        // Allows for modification of callback
        this.button.yesCallback = () => {
            this.visible = false
            this.interface.main.handleShowInputs()
            yesCallback()
        }
        this.button.noCallback = () => {
            this.visible = false
            this.interface.main.handleShowInputs()
            noCallback()
        }

        // Clamp minimum text height at 140px
        this.text.height = (this.text.height > 140) ? this.text.height : 140

        this.resize()

        this.visible = true
        if(!this.world.scene.isSleeping('Main')) {
            this.interface.main.handleHideInputs()
        }
    }

    resize() {
        // 105 = height of dual buttons
        // Resize prompt background to fit all content, + total padding, + extra padding
        this.bg.setSize(708, this.text.height + 105 + 100 + 25)

        // Reposition contents using new background and text height
        this.text.y = -(this.bg.height / 2) + (this.text.height / 2) + 50
        this.button.y = (this.bg.height / 2) - (105 / 2) - 50
    }

}

export default QuestionPrompt
