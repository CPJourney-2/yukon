import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive } from '@components/components'

import ScrollableList from '@engine/interface/containers/ScrollableList'

/* START OF COMPILED CODE */

export default class ChatLog extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg;
        /** @type {Phaser.GameObjects.Text} */
        this.noMessages;
        /** @type {Phaser.GameObjects.Container} */
        this.texts;
        /** @type {Array<any>} */
        this.items;


        // bg
        const bg = scene.add.nineslice(406, 356, "main", "chatlog/bg", 1000, 720, 45, 45, 45, 45);
        this.add(bg);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(851, 388, 50, 510);
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 12434877;
        this.add(rectangle_1);

        // x_button_3
        const x_button_3 = scene.add.image(851, 57, "main", "grey-button");
        this.add(x_button_3);

        // blue_x_1
        const blue_x_1 = scene.add.image(851, 55, "main", "grey-x");
        this.add(blue_x_1);

        // x_button
        const x_button = scene.add.image(851, 137, "main", "grey-button");
        this.add(x_button);

        // x_button_1
        const x_button_1 = scene.add.image(851, 647, "main", "grey-button");
        this.add(x_button_1);

        // blue_arrow
        const blue_arrow = scene.add.image(851, 135, "main", "grey-arrow");
        this.add(blue_arrow);

        // blue_arrow_1
        const blue_arrow_1 = scene.add.image(851, 645, "main", "grey-arrow");
        blue_arrow_1.flipY = true;
        this.add(blue_arrow_1);

        // noMessages
        const noMessages = scene.add.text(13, 142, "", {});
        noMessages.visible = false;
        noMessages.text = "No recorded messages from this user.\n\nWhen they send a message, it will be logged here.\n\nNOTE: it only logs when they are in this room. These logs are lost when you switch rooms.";
        noMessages.setStyle({ "align": "center", "color": "#000", "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        noMessages.setWordWrapWidth(800);
        this.add(noMessages);

        // texts
        const texts = scene.add.container(362, 700);
        this.add(texts);

        // lists
        const items = [];

        // bg (components)
        new Interactive(bg);

        // x_button_3 (components)
        const x_button_3Button = new Button(x_button_3);
        x_button_3Button.spriteName = "grey-button";
        x_button_3Button.callback = () => this.close();
        x_button_3Button.activeFrame = true;

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "grey-button";
        x_buttonButton.callback = () => this.listController.scrollDown();
        x_buttonButton.activeFrame = true;

        // x_button_1 (components)
        const x_button_1Button = new Button(x_button_1);
        x_button_1Button.spriteName = "grey-button";
        x_button_1Button.callback = () => this.listController.scrollUp();
        x_button_1Button.activeFrame = true;

        this.bg = bg;
        this.noMessages = noMessages;
        this.texts = texts;
        this.items = items;

        /* START-USER-CTR-CODE */
        this.defaultY = this.texts.y

        this.textStyle = {
            fontFamily: 'Burbank Small',
            fontSize: 24,
            color: '#000000',
            align: 'left',
            fixedWidth: 850
        }

        this.numContainers = 19
        this._texts = this.createTexts()

        this.listController = new ScrollableList(this,this.numContainers,[],(i,j) => this.onItemLoop(i,j),() => this.onPageChange())
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get modActions() {
        return this.interface.main.modActions
    }

    get messages() {
        return this.modActions.world.room.allMessages[this.modActions.id] || []
    }

    onItemLoop(i,j) {
        let text = this._texts[i]
        let message = j[i]

        //if(!message) return text.text = ''

        text.text = j[i].message

        if(message.muted) text.setColor('#FF8C3B')
        else if(message.filtered) text.setColor('#FF0000')
        else if(message.modOnly) text.setColor('#00AAAA')
        else text.setColor('#000000')
    }

    onPageChange() {
        for(let item of this._texts) item.text = ''
    }

    show() {
        this.visible = true
        this.listController.updateArrayAndReset(this.messages)
        this.modActions.banReason.style.visibility = 'hidden'
        this.modActions.moreOptions.setInputsVisible(false)

        this.updateMessages()
    }

    close() {
        this.visible = false
        this.modActions.banReason.style.visibility = 'visible'
        this.modActions.moreOptions.setInputsVisible(this.modActions.moreOptions.visible)
    }

    createTexts() {
        let containers = []
        let y = -5

        for (let i = 1; i <= this.numContainers; i++) {
            y -= 35

            let text = this.scene.add.text(0, y, '', this.textStyle)
            text.setOrigin(0.5)

            this.texts.add(text)
            containers.push(text)
        }

        return containers
    }

    updateMessages() {
        this.noMessages.visible = this.messages.length == 0
        this.listController.updateArray(this.messages)
        for (let [index, message] of this.messages.entries()) {
            let text = this._texts[index]

            if(!text) continue

            text.text = message.message

            if(message.muted) text.setColor('#FF8C3B')
            else if(message.filtered) text.setColor('#FF0000')
            else if(message.modOnly) text.setColor('#00AAAA')
            else text.setColor('#000000')
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
