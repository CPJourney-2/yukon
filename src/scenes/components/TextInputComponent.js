
// You can write more code here
import TextInput from '@engine/interface/text/TextInput';
import EventComponent from './EventComponent'

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TextInputComponent extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Text} */
        this.gameObject;
        /** @type {any} */
        this.callback = () => {};
        /** @type {number} */
        this.maxLength = 100;
        /** @type {string} */
        this.inputId = "";
        /** @type {boolean} */
        this.cornerOrigin = false;
        /** @type {boolean} */
        this.hideOnCreation = true;
        /** @type {boolean} */
        this.useRex = false;
        /** @type {boolean} */
        this.useTextArea = false;
        /** @type {boolean} */
        this.useBorder = false;
        /** @type {string} */
        this.borderColor = "#000000";
        /** @type {number} */
        this.borderWidth = 0;
        /** @type {boolean} */
        this.useNumber = false;
        /** @type {number} */
        this.rankLimit = 0;


        this.gameObject = gameObject;
        gameObject["__TextInputComponent"] = this;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {TextInputComponent} */
    static getComponent(gameObject) {
        return gameObject["__TextInputComponent"];
    }


    /* START-USER-CODE */
    start() {
        if(this.gameObject.scene.world.client.rank < this.rankLimit) return
        let shouldBeHidden = this.hideOnCreation == true ? 'hidden' : 'visible'
        let inputStyle = this.gameObject.style
        let inputWidth = inputStyle.fixedWidth || this.gameObject.width
        let inputHeight = inputStyle.fixedHeight || this.gameObject.height
        let inputType = null
        if(this.useTextArea == true) {
            inputType = 'textarea'
        } else if(this.useNumber == true) {
            inputType = 'number'
        } else {
            inputType = 'text'
        }
        const input_x = this.cornerOrigin ? this.gameObject.x : this.gameObject.x + 760
        const input_y = this.cornerOrigin ? this.gameObject.y : this.gameObject.y + 480
        this.gameObject.visible = false

        if(this.useRex == true) {
            //make an input using rex plugin
            const input = this.gameObject.scene.add.rexInputText({
                x: input_x,
                y: input_y,
                width: inputWidth,
                height: inputHeight,
                type: inputType,
                id: this.inputId,
                maxLength: this.maxLength,
                align: inputStyle.align,
                fontFamily: inputStyle.fontFamily,
                fontWeight: inputStyle.fontStyle || 'normal',
                border: this.useBorder == true ? 1 : 0,
                borderWidth: this.borderWidth,
                color: inputStyle.color,
                fontSize: inputStyle.fontSize,
                backgroundColor: inputStyle.backgroundColor,
                borderColor: this.borderColor,
                //backgroundColor: inputStyle.backgroundColor
            })
            this.gameObject.scene.add.existing(input)
            input.on('focus', () => {this.gameObject.scene.game.input.keyboard.enabled = false})
            input.on('blur', () => {this.gameObject.scene.game.input.keyboard.enabled = true})
            return
        }

        let defaultStyles = {
            border: this.useBorder,
            borderWidth: this.borderWidth,
            color: inputStyle.color,
            fontSize: inputStyle.fontSize,
            backgroundColor: '#ffffff',
            borderColor: this.borderColor,
            width: inputWidth,
            height: inputHeight,
            fontFamily: inputStyle.fontFamily,
            fontSize: inputStyle.fontSize,
            fontWeight: inputStyle.fontStyle,
            backgroundColor: inputStyle.backgroundColor,
            visibility: shouldBeHidden
        }
        const input = new TextInput(
            this.gameObject.scene,
            input_x,
            input_y,
            inputType,
            defaultStyles,
            this.callback,
            this.maxLength,
            true,
            this.inputId
        )
        this.gameObject.scene.add.existing(input);
    }
    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

