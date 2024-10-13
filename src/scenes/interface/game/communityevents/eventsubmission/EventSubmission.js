
// You can write more code here
import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive } from '@components/components'

import DualButtons from '@scenes/interface/prompts/buttons/DualButtons'
import TextInput from '@engine/interface/text/TextInput';

/*export const preload = {
    //key: 'telescope-pack',
    //url: 'assets/media/interface/game/telescope/telescope-pack.json',
    loadString: ['loading', 'Event Submission']
}*/
/* START OF COMPILED CODE */

export default class EventSubmission extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Container} */
        this.intro;
        /** @type {Phaser.GameObjects.Container} */
        this.firstPage;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.timeBox;
        /** @type {Phaser.GameObjects.Container} */
        this.secondPage;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.nameBox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.descriptionBox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.whereBox;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // nineslice_1
        const nineslice_1 = scene.add.nineslice(0, 0, "prompt", "window", 708, 700, 43, 38, 40, 40);
        this.add(nineslice_1);

        // x_button
        const x_button = scene.add.image(300, -292, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(300, -294, "main", "blue-x");
        this.add(blue_x);

        // title
        const title = scene.add.text(0, -281, "", {});
        title.setOrigin(0.5, 0.5);
        title.text = "SUBMIT YOUR EVENT";
        title.setStyle({ "align": "center", "fixedWidth":500,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        this.add(title);

        // intro
        const intro = scene.add.container(0, 0);
        intro.visible = false;
        this.add(intro);

        // disclaimemrtrext
        const disclaimemrtrext = scene.add.text(0, -24, "", {});
        disclaimemrtrext.setOrigin(0.5, 0.5);
        disclaimemrtrext.text = "Want to host your own event for the community? Great! We'd love to hear your idea!\n\nPLEASE NOTE:\nBy submitting an event to potentially be hosted, you agree that, if the event is chosen to be among next week's events, you will be present to host the event at its specified time. Failure to be present will result in penalties on your account.\n\nIn addition, your account must also be in good standing for us to accept your proposed event.\n\nDo you wish to give us the needed information for your event?";
        disclaimemrtrext.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":640,"fontFamily": "Arial Narrow", "fontSize": "30px" });
        disclaimemrtrext.setLineSpacing(-5);
        disclaimemrtrext.setWordWrapWidth(600);
        intro.add(disclaimemrtrext);

        // dualButtons
        const dualButtons = new DualButtons(scene, 0, 261.3963623046875);
        intro.add(dualButtons);

        // firstPage
        const firstPage = scene.add.container(0, 0);
        firstPage.visible = false;
        this.add(firstPage);

        // firsttellus
        const firsttellus = scene.add.text(0, -219, "", {});
        firsttellus.setOrigin(0.5, 0.5);
        firsttellus.text = "First, tell us the name of your event.";
        firsttellus.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":600,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        firsttellus.setLineSpacing(-5);
        firsttellus.setWordWrapWidth(600);
        firstPage.add(firsttellus);

        // help_button_first
        const help_button_first = scene.add.image(0, 255, "main", "help-button");
        firstPage.add(help_button_first);

        // describevenntnent
        const describevenntnent = scene.add.text(0, -82, "", {});
        describevenntnent.setOrigin(0.5, 0.5);
        describevenntnent.text = "In the field below, please briefly describe what the event will be about.";
        describevenntnent.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":600,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        describevenntnent.setLineSpacing(-5);
        describevenntnent.setWordWrapWidth(600);
        firstPage.add(describevenntnent);

        // next_txt1
        const next_txt1 = scene.add.text(0, 269, "", {});
        next_txt1.setOrigin(0.5, 0.5);
        next_txt1.text = "Next\n";
        next_txt1.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        next_txt1.setLineSpacing(-5);
        firstPage.add(next_txt1);

        // name_white_box
        const name_white_box = scene.add.rectangle(250, -128, 498, 58);
        name_white_box.setOrigin(1, 1);
        name_white_box.isFilled = true;
        firstPage.add(name_white_box);

        // secondPage
        const secondPage = scene.add.container(0, 0);
        this.add(secondPage);

        // whereevent
        const whereevent = scene.add.text(0, -209, "", {});
        whereevent.setOrigin(0.5, 0.5);
        whereevent.text = "Where will your event take place? (example: The Beach, Someone's Igloo, etc.)";
        whereevent.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":600,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        whereevent.setLineSpacing(-5);
        whereevent.setWordWrapWidth(600);
        secondPage.add(whereevent);

        // textContenrttttt
        const textContenrttttt = scene.add.text(0, -5, "", {});
        textContenrttttt.setOrigin(0.5, 0.5);
        textContenrttttt.text = "Below, please input the date and time your event will take place.";
        textContenrttttt.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":600,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        textContenrttttt.setLineSpacing(-5);
        textContenrttttt.setWordWrapWidth(600);
        secondPage.add(textContenrttttt);

        // help_button_1
        const help_button_1 = scene.add.image(0, 255, "main", "help-button");
        secondPage.add(help_button_1);

        // next_txt
        const next_txt = scene.add.text(0, 269, "", {});
        next_txt.setOrigin(0.5, 0.5);
        next_txt.text = "Submit\n";
        next_txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        next_txt.setLineSpacing(-5);
        secondPage.add(next_txt);

        // name_white_box_1
        const name_white_box_1 = scene.add.rectangle(250, -99, 498, 58);
        name_white_box_1.setOrigin(1, 1);
        name_white_box_1.isFilled = true;
        secondPage.add(name_white_box_1);

        // timeBox
        const timeBox = scene.add.rectangle(11, 90, 490, 75);
        timeBox.setOrigin(0.5289930006904638, 0.5);
        timeBox.isFilled = true;
        timeBox.isStroked = true;
        timeBox.strokeColor = 0;
        timeBox.lineWidth = 2;
        secondPage.add(timeBox);

        // nameBox
        const nameBox = scene.add.rectangle(0, -158, 500, 60);
        nameBox.visible = false;
        this.add(nameBox);

        // descriptionBox
        const descriptionBox = scene.add.rectangle(0, 74, 600, 200);
        descriptionBox.visible = false;
        this.add(descriptionBox);

        // whereBox
        const whereBox = scene.add.rectangle(0, -130, 500, 60);
        whereBox.visible = false;
        this.add(whereBox);

        // block (components)
        new Interactive(block);

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.hide();
        x_buttonButton.activeFrame = true;

        // dualButtons (prefab fields)
        dualButtons.yesCallback = () => this.turnPage(1);
        dualButtons.noCallback = () => this.hide();

        // help_button_first (components)
        const help_button_firstButton = new Button(help_button_first);
        help_button_firstButton.spriteName = "help-button";
        help_button_firstButton.callback = () => this.validateInput(1);
        help_button_firstButton.activeFrame = true;

        // help_button_1 (components)
        const help_button_1Button = new Button(help_button_1);
        help_button_1Button.spriteName = "help-button";
        help_button_1Button.callback = () => this.validateInput(2);
        help_button_1Button.activeFrame = true;

        this.intro = intro;
        this.firstPage = firstPage;
        this.timeBox = timeBox;
        this.secondPage = secondPage;
        this.nameBox = nameBox;
        this.descriptionBox = descriptionBox;
        this.whereBox = whereBox;

        /* START-USER-CTR-CODE */

        this.userId = null

        this.nameInput = scene.add.rexInputText({x: this.nameBox.x, y: this.nameBox.y, width: this.nameBox.width, height: this.nameBox.height, type: 'text', id: 'eventsubmission-name', maxLength: 40, align: 'center', fontFamily: 'Arial', border: 1, color: '#000000', fontSize: '32px', borderColor: '#000000', backgroundColor: '#ffffff'}).on('focus', () => {this.scene.game.input.keyboard.enabled = false}).on('blur', () => {this.scene.game.input.keyboard.enabled = true})
        this.descriptionInput = scene.add.rexInputText({x: this.descriptionBox.x, y: this.descriptionBox.y, width: this.descriptionBox.width, height: this.descriptionBox.height, type: 'textarea', id: 'eventsubmission-description', maxLength: 180, align: 'left', fontFamily: 'Arial', border: 1, color: '#000000', fontSize: '32px', borderColor: '#000000', backgroundColor: '#ffffff'}).on('focus', () => {this.scene.game.input.keyboard.enabled = false}).on('blur', () => {this.scene.game.input.keyboard.enabled = true})
        this.whereInput = scene.add.rexInputText({x: this.whereBox.x, y: this.whereBox.y, width: this.whereBox.width, height: this.whereBox.height, type: 'text', id: 'eventsubmission-where', maxLength: 35, align: 'center', fontFamily: 'Arial', border: 1, color: '#000000', fontSize: '32px', borderColor: '#000000', backgroundColor: '#ffffff'}).on('focus', () => {this.scene.game.input.keyboard.enabled = false}).on('blur', () => {this.scene.game.input.keyboard.enabled = true})

        this.timeInput = new TextInput(scene,this.timeBox.x,this.timeBox.y,'datetime-local',{
            color: 'black',
            fontSize: '35px',
            fontFamily: 'Burbank Small',
            padding: '10px',
        })

        //Calculate the date range
        const today = new Date();
        const nextMonday = new Date(today);
        nextMonday.setDate(today.getDate() + ((1 + 7 - today.getDay()) % 7));

        const nextTuesday = new Date(nextMonday);
        nextTuesday.setDate(nextMonday.getDate() + 1);

        const nextSunday = new Date(nextMonday);
        nextSunday.setDate(nextMonday.getDate() + 6);

        this.timeInput.node.value = `${nextTuesday.toISOString().split("T")[0]}T00:00`
        this.timeInput.node.min = `${nextTuesday.toISOString().split("T")[0]}T00:00`
        this.timeInput.node.max = `${nextSunday.toISOString().split("T")[0]}T23:59`

        this.add(this.nameInput)
        this.add(this.descriptionInput)
        this.add(this.whereInput)
        this.add(this.timeInput)

        this.inputs = [this.nameInput,this.descriptionInput,this.whereInput,this.timeInput]

        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */


    show(u = 0) {
        //super.show()

        this.visible = true
        this.pageIndex = 0
        this.userId = u

        this.intro.visible = true
        this.firstPage.visible = false
        this.secondPage.visible = false

        this.hideAllInputs()

        super.show()
    }

    validateInput(i) {
        switch(i) {
            case 1:
                if(this.nameInput.text.toString().length < 5) {
                    this.hideAllInputs()
                    return this.interface.prompt.showError("Please provide a name for your event.",'Okay',() => {
                        this.nameInput.visible = true
                        this.descriptionInput.visible = true
                        this.interface.prompt.error.visible = false
                    })
                }
                if(this.descriptionInput.text.toString().length < 10) {
                    this.hideAllInputs()
                    return this.interface.prompt.showError("Please provide a description for your event.",'Okay',() => {
                        this.nameInput.visible = true
                        this.descriptionInput.visible = true
                        this.interface.prompt.error.visible = false
                    })
                }
                this.turnPage(i + 1)
                break
            case 2:
                if(this.whereInput.text.toString().length < 8) {
                    this.hideAllInputs()
                    return this.interface.prompt.showError("Please provide the location for your event.",'Okay',() => {
                        this.whereInput.visible = true
                        this.timeInput.visible = true
                        this.interface.prompt.error.visible = false
                    })
                }
                if(this.timeInput.node.value < this.timeInput.node.min || this.timeInput.node.value > this.timeInput.node.max) {
                    this.hideAllInputs()
                    return this.interface.prompt.showError(`Please provide a valid date that is at least a week from now.`,'Okay',() => {
                        this.timeInput.visible = true
                        this.whereInput.visible = true
                        this.interface.prompt.error.visible = false
                    })
                }
                this.hideAllInputs()
                this.interface.prompt.showWindow('Would you like to submit your event now?', 'dual', () => {
                    this.interface.prompt.window.visible = false
                    this.sendCommunityEvent()
                }, () => {
                    this.timeInput.visible = true
                    this.whereInput.visible = true
                    this.interface.prompt.window.visible = false
                })
                break
            default:
                break
        }
    }

    turnPage(i) {
        switch(i) {
            case 1:
                this.intro.visible = false
                this.firstPage.visible = true
                this.nameInput.visible = true
                this.descriptionInput.visible = true
                break
            case 2:
                this.firstPage.visible = false
                this.secondPage.visible = true
                this.hideAllInputs()
                this.timeInput.visible = true
                this.whereInput.visible = true
                break
            default:
                break
        }
    }

    sendCommunityEvent() {
        this.hide()
        let convertedTimestamp = new Date(this.timeInput.node.value).getTime() / 1000
        this.world.network.send('community_event', {
            eventName: this.nameInput.text.toString(),
            eventDescription: this.descriptionInput.text.toString(),
            eventWhere: this.whereInput.text.toString(),
            eventTime: convertedTimestamp.toString()
        });
        this.nameInput.text = ''
        this.descriptionInput.text = ''
        this.whereInput.text = ''
        //this.timeInput.text = ''
        this.interface.prompt.showWindow("Thank you for submitting! Before this coming Monday,\nyou will be informed if your event was approved.",'single')
    }

    hideAllInputs() {
        this.inputs.forEach(t => {
            t.visible = false
        })
    }

    hide() {
        this.visible = false
        this.hideAllInputs()
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
