
// You can write more code here
import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, InputText } from '@components/components'

/* START OF COMPILED CODE */

export default class Newsform extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.title;
        /** @type {Phaser.GameObjects.Text} */
        this.textContentNormal;
        /** @type {Phaser.GameObjects.Text} */
        this.inputField;
        /** @type {Phaser.GameObjects.Image} */
        this.imgChooseBtn;
        /** @type {Phaser.GameObjects.Text} */
        this.fileNameTxt;
        /** @type {Phaser.GameObjects.Text} */
        this.textContentArtsy;
        /** @type {Phaser.GameObjects.Container} */
        this.imgChooser;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // nineslice_1
        const nineslice_1 = scene.add.nineslice(0, 0, "prompt", "window", 708, 600, 43, 38, 40, 40);
        this.add(nineslice_1);

        // title
        const title = scene.add.text(0, -234, "", {});
        title.setOrigin(0.5, 0.5);
        title.text = "CLUB PENGUIN TIMES";
        title.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        this.add(title);

        // x_button
        const x_button = scene.add.image(300, -247, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(300, -249, "main", "blue-x");
        this.add(blue_x);

        // send_btn
        const send_btn = scene.add.image(-1, 207, "main", "help-button");
        this.add(send_btn);

        // buttonText
        const buttonText = scene.add.text(0, 205, "", {});
        buttonText.setOrigin(0.5, 0.5);
        buttonText.text = "Send";
        buttonText.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        buttonText.setLineSpacing(-5);
        this.add(buttonText);

        // textContentNormal
        const textContentNormal = scene.add.text(0, -189, "", {});
        textContentNormal.setOrigin(0.5, 0);
        textContentNormal.text = "Please type your question for Aunt Arctic here.";
        textContentNormal.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":640,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        textContentNormal.setLineSpacing(-5);
        textContentNormal.setWordWrapWidth(640);
        this.add(textContentNormal);

        // inputField
        const inputField = scene.add.text(-285, -125, "", {});
        inputField.text = "New text";
        inputField.setStyle({ "color": "#000", "fixedWidth":570,"fixedHeight":250,"fontFamily": "Arial", "fontSize": "32px" });
        this.add(inputField);

        // imgChooser
        const imgChooser = scene.add.container(-7, 69);
        imgChooser.visible = false;
        this.add(imgChooser);

        // imgChooseBtn
        const imgChooseBtn = scene.add.image(0, 15, "main-stampcoins", "earnbtn");
        imgChooseBtn.scaleX = 0.5;
        imgChooseBtn.scaleY = 0.5;
        imgChooser.add(imgChooseBtn);

        // buttonText_1
        const buttonText_1 = scene.add.text(0, 13, "", {});
        buttonText_1.setOrigin(0.5, 0.5);
        buttonText_1.text = "Choose Image";
        buttonText_1.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        buttonText_1.setLineSpacing(-5);
        imgChooser.add(buttonText_1);

        // fileNameTxt
        const fileNameTxt = scene.add.text(0, -79, "", {});
        fileNameTxt.setOrigin(0.5, 0);
        fileNameTxt.text = "No file selected";
        fileNameTxt.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":640,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        fileNameTxt.setLineSpacing(-5);
        fileNameTxt.setWordWrapWidth(640);
        imgChooser.add(fileNameTxt);

        // textContentArtsy
        const textContentArtsy = scene.add.text(9, -267, "", {});
        textContentArtsy.setOrigin(0.5, 0);
        textContentArtsy.text = "Please click the button below to submit artwork to be featured in the Club Penguin Times.";
        textContentArtsy.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":640,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        textContentArtsy.setLineSpacing(-5);
        textContentArtsy.setWordWrapWidth(640);
        imgChooser.add(textContentArtsy);

        // textContent_12
        const textContent_12 = scene.add.text(15, -176, "", {});
        textContent_12.setOrigin(0.5, 0);
        textContent_12.text = "Submitting an inappropriate image may put your penguin at risk of being banned.";
        textContent_12.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":640,"fontFamily": "Arial Narrow", "fontSize": "32px", "fontStyle": "bold" });
        textContent_12.setLineSpacing(-5);
        textContent_12.setWordWrapWidth(640);
        imgChooser.add(textContent_12);

        // block (components)
        new Interactive(block);

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.hide();
        x_buttonButton.activeFrame = true;

        // send_btn (components)
        const send_btnButton = new Button(send_btn);
        send_btnButton.spriteName = "help-button";
        send_btnButton.callback = () => this.sendNewsSubmission(this.imgChosen,this.imgUrl);
        send_btnButton.activeFrame = true;

        // inputField (components)
        const inputFieldInputText = new InputText(inputField);
        inputFieldInputText.id = "newsforminput";
        inputFieldInputText.inputType = "textarea";
        inputFieldInputText.maxLength = 150;
        inputFieldInputText.makeOutline = true;

        // imgChooseBtn (components)
        const imgChooseBtnButton = new Button(imgChooseBtn);
        imgChooseBtnButton.spriteName = "earnbtn";
        imgChooseBtnButton.callback = () => { this.onArt() };
        imgChooseBtnButton.activeFrame = true;

        this.title = title;
        this.textContentNormal = textContentNormal;
        this.inputField = inputField;
        this.imgChooseBtn = imgChooseBtn;
        this.fileNameTxt = fileNameTxt;
        this.textContentArtsy = textContentArtsy;
        this.imgChooser = imgChooser;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    hide() {
        this.visible = false
        //this.interface.destroyWidget(this)
        if(this.imgChooser) this.imgChooser.visible = false
        this.inputField.__InputText.visible(false)
    }

    show(mode = 'question') {
        if(mode == 'art') {
            this.interface.prompt.showInfo('To submit artwork, please submit in the channel on our Discord server.\n\ndiscord.gg/cpjourney')
            return
        }
        this.mode = mode
        this.imgChosen = false
        this.imgChooser.visible = false

        switch(mode) {
            case 'art':
                this.interface.prompt.showError('Sorry, art submissions are currently closed. Check back later!')
                return
                /*this.textContentNormal.visible = false
                this.imgChooser.visible = true
                if(this.mode == 'painting') {
                    this.textContentArtsy.text = 'Please click the button below to submit artwork for the Painting Contest.'
                } else {
                    this.textContentArtsy.text = 'Please click the button below to submit artwork to be featured in the Club Penguin Times.'
                }
                this.fileInput = document.createElement('input');
                this.fileInput.type = 'file';
                this.fileInput.accept = "image/jpeg, image/png, image/gif, image/bmp, image/webp";
                this.fileInput.style.display = 'none';
                this.fileInput.addEventListener('change', (event) => {
                    if (event.target.files.length === 0) {
                        this.imgChosen = false
                        this.fileNameTxt.text = 'No file selected'
                        return
                    }
                    const file = event.target.files[0];
                    if(!file || !file.type.startsWith('image/')) return this.interface.prompt.showError('Invalid file.')
                    if(file.size > 1000000) return this.interface.prompt.showError('Please choose an image that is less than 1 MB in size.')
                    //1 * 1024 * 1024
                    this.imgChosen = true
                    this.fileNameTxt.text = file.name
                    this.imgUrl = event.target.files[0]
                });*/
                break
            case 'question':
                this.textContentNormal.visible = true
                this.textContentNormal.text = 'Please type your question for Aunt Arctic here.'
                this.imgChooser.visible = false
                this.inputField.__InputText.visible(true)
                break
            case 'joke':
            case 'riddle':
                this.textContentNormal.visible = true
                this.textContentNormal.text = 'Please type your joke/riddle for the newspaper here.'
                this.imgChooser.visible = false
                this.inputField.__InputText.visible(true)
                break
            default: break
        }

        super.show()
        //this.visible = true
    }

    onArt() {
        this.fileInput.click()
    }

    async sendNewsSubmission() {
        switch(this.mode) {
            case 'question':
            case 'joke':
            case 'riddle':
                let newsformtext = this.inputField.__InputText.text
                this.interface.prompt.showWindow("Thank-you. Your submission has been\nsent, an editor will read it soon.", 'single')
                this.inputField.__InputText.dom.value = ''
                if (newsformtext.length > 8) {
                    this.network.send('newspaper_submission', { message: newsformtext, mode: this.mode })
                }
                //this.remove(this.newsforminput)
                this.hide()
                break
            case 'art':
                if(this.world.client.daysOld < 10) {
                    this.interface.prompt.showError('Sorry, your penguin must be over 10 days old to submit art.')
                    this.hide()
                } else if (this.imgChosen) {
                    this.interface.prompt.showWindow("Thank-you. Your artwork has been\nsent, an editor will see it soon.", 'single')
                    this.hide()
                    if(this.world.client.newspaperCooldownActive) return
                    this.world.client.setNewspaperCooldown()
                    this.network.send('art_submission', { img: this.imgUrl, painting: false })
                    if(this.mode == 'painting') {
                        localStorage.setItem('PAINTING_SUBMITTED', 'true');
                    }
                } else {
                    this.interface.prompt.showError("Please select an image to submit.")
                }
                break
            default: break
        }
    }
    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
// You can write more code here
