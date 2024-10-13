
import TextInput from '@engine/interface/text/TextInput';
import EventComponent from './EventComponent'

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class InputText extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Text} */
        this.gameObject;
        /** @type {string} */
        this.id = "";
        /** @type {"text"|"number"|"textarea"} */
        this.inputType = "text";
        /** @type {number} */
        this.maxLength = 30;
        /** @type {any} */
        this.callback = () => {};
        /** @type {number} */
        this.rank = 0;
        /** @type {boolean} */
        this.hideOnCreation = true;
        /** @type {boolean} */
        this.makeOutline = false;


        this.gameObject = gameObject;
        gameObject["__InputText"] = this;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {InputText} */
    static getComponent(gameObject) {
        return gameObject["__InputText"];
    }


    /* START-USER-CODE */
    visible(visibility) {
        document.getElementById(this.id).style.visibility = visibility == true ? 'visible' : 'hidden'
    }

    get dom() {
        return document.getElementById(this.id)
    }

    get text() {
        return this.input.text
    }

    start() {
        if(this.rank > 0 && this.gameObject.scene.world && this.gameObject.scene.world.client) {
            if(this.gameObject.scene.world.client.rank < this.rank) return
        }
        let shouldBeHidden = this.hideOnCreation == true ? 'hidden' : 'visible'
        let inputStyle = this.gameObject.style

        let inputWidth = this.gameObject.displayWidth
        let inputHeight = this.gameObject.displayHeight

        const oldWidth = this.gameObject.displayWidth / 2
        const oldHeight = this.gameObject.displayHeight / 2
        this.gameObject.setOrigin(0.5,0.5)
        this.gameObject.x += oldWidth
        this.gameObject.y += oldHeight

        // Get global coordinates of text object
        let matrix = this.gameObject.getWorldTransformMatrix()

        // Set correct mask position
        const input_x  = matrix.getX(this.gameObject.displayWidth / 2, this.gameObject.displayHeight / 2) - (this.gameObject.displayWidth / 2)
        const input_y = matrix.getY(this.gameObject.displayWidth / 2, this.gameObject.displayHeight / 2) - (this.gameObject.displayHeight / 2)

        this.gameObject.visible = false

        let defaultStyles = {
            borderWidth: 1,
            color: inputStyle.color,
            borderColor: '#000000',
            width: inputWidth,
            height: inputHeight,
            fontFamily: inputStyle.fontFamily,
            fontSize: inputStyle.fontSize,
            fontWeight: inputStyle.fontStyle,
            align: inputStyle.align,
            backgroundColor: '#ffffff',
            visibility: shouldBeHidden
        }

        // Destroy dom if it has the same id
        if(this.dom) this.dom.remove()

        let input
        if(this.inputType === "textarea") {
            input = this.gameObject.scene.add.rexInputText({
                ...defaultStyles,
                x: input_x,
                y: input_y,
                type: this.inputType,
                id: this.id,
                maxLength: this.maxLength,
                align: inputStyle.align,
                border: this.makeOutline == true ? 1 : 0,
            })
            input.on('focus', () => { this.gameObject.scene.game.input.keyboard.enabled = false })
            input.on('blur', () => { this.gameObject.scene.game.input.keyboard.enabled = true })
        } else {
            input = new TextInput(
                this.gameObject.scene,
                input_x,
                input_y,
                this.inputType,
                defaultStyles,
                this.callback,
                this.maxLength,
                true,
                this.id
            )
        }
        this.gameObject.scene.add.existing(input);
        this.input = input
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
