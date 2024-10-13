
// You can write more code here
import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive } from '@components/components'

import TextInput from '@engine/interface/text/TextInput'

export const preload = {
    key: 'newsform-asset-pack',
    url: 'assets/media/interface/game/newsform/newsform-asset-pack.json',
    loadString: ['loading', 'Form']
}
/* START OF COMPILED CODE */

export default class ReportPlayer extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.title;
        /** @type {Phaser.GameObjects.Image} */
        this.reportplayer_option4_btn;
        /** @type {Phaser.GameObjects.Image} */
        this.reportplayer_option3_btn;
        /** @type {Phaser.GameObjects.Image} */
        this.reportplayer_option2_btn;
        /** @type {Phaser.GameObjects.Image} */
        this.reportplayer_option1_btn;
        /** @type {Phaser.GameObjects.Text} */
        this.textContent;
        /** @type {Phaser.GameObjects.Text} */
        this.reportplayer_option1_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.reportplayer_option2_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.reportplayer_option3_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.reportplayer_option4_txt;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // nineslice_1
        const nineslice_1 = scene.add.nineslice(0, 0, "prompt", "window", 708, 600, 43, 38, 40, 40);
        nineslice_1.scaleY = 1.1848719663783185;
        this.add(nineslice_1);

        // title
        const title = scene.add.text(0, -288, "", {});
        title.setOrigin(0.5, 0.5);
        title.text = "REPORT PLAYER";
        title.setStyle({ "align": "center", "fixedWidth": 600, "fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness": 10 });
        this.add(title);

        // x_button
        const x_button = scene.add.image(300, -298, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(300, -300, "main", "blue-x");
        this.add(blue_x);

        // reportplayer_option4_btn
        const reportplayer_option4_btn = scene.add.image(5, 239, "blue_btn_large", "blue_btn_large");
        this.add(reportplayer_option4_btn);

        // reportplayer_option3_btn
        const reportplayer_option3_btn = scene.add.image(5, 116, "blue_btn_large", "blue_btn_large");
        this.add(reportplayer_option3_btn);

        // reportplayer_option2_btn
        const reportplayer_option2_btn = scene.add.image(5, -7, "blue_btn_large", "blue_btn_large");
        this.add(reportplayer_option2_btn);

        // reportplayer_option1_btn
        const reportplayer_option1_btn = scene.add.image(5, -128, "blue_btn_large", "blue_btn_large");
        this.add(reportplayer_option1_btn);

        // textContent
        const textContent = scene.add.text(0, -230, "", {});
        textContent.setOrigin(0.5, 0.5);
        textContent.text = "Please select a reason for this report.";
        textContent.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "32px" });
        textContent.setLineSpacing(-5);
        this.add(textContent);

        // reportplayer_option1_txt
        const reportplayer_option1_txt = scene.add.text(5, -131, "", {});
        reportplayer_option1_txt.setOrigin(0.5, 0.5);
        reportplayer_option1_txt.text = "Inappropriate Language";
        reportplayer_option1_txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        reportplayer_option1_txt.setLineSpacing(-5);
        this.add(reportplayer_option1_txt);

        // reportplayer_option2_txt
        const reportplayer_option2_txt = scene.add.text(5, -10, "", {});
        reportplayer_option2_txt.setOrigin(0.5, 0.5);
        reportplayer_option2_txt.text = "Personal Information";
        reportplayer_option2_txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        reportplayer_option2_txt.setLineSpacing(-5);
        this.add(reportplayer_option2_txt);

        // reportplayer_option3_txt
        const reportplayer_option3_txt = scene.add.text(5, 113, "", {});
        reportplayer_option3_txt.setOrigin(0.5, 0.5);
        reportplayer_option3_txt.text = "Rude or Mean";
        reportplayer_option3_txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        reportplayer_option3_txt.setLineSpacing(-5);
        this.add(reportplayer_option3_txt);

        // reportplayer_option4_txt
        const reportplayer_option4_txt = scene.add.text(5, 237, "", {});
        reportplayer_option4_txt.setOrigin(0.5, 0.5);
        reportplayer_option4_txt.text = "Bad Penguin Name";
        reportplayer_option4_txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        reportplayer_option4_txt.setLineSpacing(-5);
        this.add(reportplayer_option4_txt);

        // block (components)
        new Interactive(block);

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.hide();
        x_buttonButton.activeFrame = true;

        // reportplayer_option4_btn (components)
        const reportplayer_option4_btnButton = new Button(reportplayer_option4_btn);
        reportplayer_option4_btnButton.spriteName = "blue_btn_large";
        reportplayer_option4_btnButton.callback = () => this.clickBtn("badname", 4);
        reportplayer_option4_btnButton.activeFrame = true;

        // reportplayer_option3_btn (components)
        const reportplayer_option3_btnButton = new Button(reportplayer_option3_btn);
        reportplayer_option3_btnButton.spriteName = "blue_btn_large";
        reportplayer_option3_btnButton.callback = () => this.clickBtn("rudemean", 3);
        reportplayer_option3_btnButton.activeFrame = true;

        // reportplayer_option2_btn (components)
        const reportplayer_option2_btnButton = new Button(reportplayer_option2_btn);
        reportplayer_option2_btnButton.spriteName = "blue_btn_large";
        reportplayer_option2_btnButton.callback = () => this.clickBtn("personalinfo", 2);
        reportplayer_option2_btnButton.activeFrame = true;

        // reportplayer_option1_btn (components)
        const reportplayer_option1_btnButton = new Button(reportplayer_option1_btn);
        reportplayer_option1_btnButton.spriteName = "blue_btn_large";
        reportplayer_option1_btnButton.callback = () => this.clickBtn("badlanguage", 1);
        reportplayer_option1_btnButton.activeFrame = true;

        this.title = title;
        this.reportplayer_option4_btn = reportplayer_option4_btn;
        this.reportplayer_option3_btn = reportplayer_option3_btn;
        this.reportplayer_option2_btn = reportplayer_option2_btn;
        this.reportplayer_option1_btn = reportplayer_option1_btn;
        this.textContent = textContent;
        this.reportplayer_option1_txt = reportplayer_option1_txt;
        this.reportplayer_option2_txt = reportplayer_option2_txt;
        this.reportplayer_option3_txt = reportplayer_option3_txt;
        this.reportplayer_option4_txt = reportplayer_option4_txt;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    hide() {
        this.close()
        this.interface.destroyWidget(this)
    }

    show(args) {
        this.type = null
        this.userId = 0
        this.title.text = "REPORT PLAYER"
        this.textContent.text = "Please select a reason for this report."

        if (args) {
            this.type = args.type
            if (args.type == "report") {
                this.userId = args.userId
            }
        }

        super.show()
        this.optionPage = 1;
        this.title_text = { badlanguage: "Did the player say one of the following?", personalinfo: "Did the player say or ask for one of the following?", rudemean: "Did the player do one of the following?" };
        this.opt1_text = { badlanguage: "Swearing/Bad Words", personalinfo: "Home or Street Address", rudemean: "Name Calling" };
        this.opt2_text = { badlanguage: "Controversial Topics", personalinfo: "Email Address", rudemean: "Blocking Doors or Items" };
        this.opt3_text = { badlanguage: "Bypassing Chat Filter", personalinfo: "Real Name", rudemean: "Lying or Cheating" };
        this.opt4_text = { badlanguage: "None of the Above", personalinfo: "None of the Above", rudemean: "None of the Above" };
        //this.visible = true
    }

    clickBtn(category, btnId) {
        if (this.optionPage == 1) {
            this.category1 = undefined;
            switch (category) {
                case "badlanguage": this.category1 = "Inappropriate Language"; break;
                case "personalinfo": this.category1 = "Personal Information"; break;
                case "rudemean": this.category1 = "Rude or Mean"; break;
                case "badname": this.category1 = "Bad Penguin Name"; break;
            }
            if (category == "badname") {
                //this.sendReport();
                this.optionPage++
                this.createInput()
                return;
            }
            this.textContent.text = this.title_text[category];
            this.reportplayer_option1_txt.text = this.opt1_text[category];
            this.reportplayer_option2_txt.text = this.opt2_text[category];
            this.reportplayer_option3_txt.text = this.opt3_text[category];
            this.reportplayer_option4_txt.text = this.opt4_text[category];
            this.optionPage++;
        }
        else if (this.optionPage == 2) {
            this.category2 = undefined;
            switch (this.category1) {
                case "Inappropriate Language": switch (btnId) {
                    case 1: this.category2 = this.opt1_text.badlanguage; break;
                    case 2: this.category2 = this.opt2_text.badlanguage; break;
                    case 3: this.category2 = this.opt3_text.badlanguage; break;
                    case 4: this.category2 = this.opt4_text.badlanguage; break;
                }; break;
                case "Personal Information": switch (btnId) {
                    case 1: this.category2 = this.opt1_text.personalinfo; break;
                    case 2: this.category2 = this.opt2_text.personalinfo; break;
                    case 3: this.category2 = this.opt3_text.personalinfo; break;
                    case 4: this.category2 = this.opt4_text.personalinfo; break;
                }; break;
                case "Rude or Mean": switch (btnId) {
                    case 1: this.category2 = this.opt1_text.rudemean; break;
                    case 2: this.category2 = this.opt2_text.rudemean; break;
                    case 3: this.category2 = this.opt3_text.rudemean; break;
                    case 4: this.category2 = this.opt4_text.rudemean; break;
                }; break;
            }
            //goto page 3 which is the input
            this.createInput()
        }
        else if (this.optionPage == 3 && btnId == 4) {
            this.sendReport();
        }
    }
    createInput() {
        this.reportplayer_option1_btn.visible = false;
        this.reportplayer_option2_btn.visible = false;
        this.reportplayer_option3_btn.visible = false;
        this.reportplayer_option1_txt.visible = false;
        this.reportplayer_option2_txt.visible = false;
        this.reportplayer_option3_txt.visible = false;
        this.reportinput = this.scene.add.rexInputText({ x: 0, y: 0, width: 570, height: 300, type: 'textarea', id: 'reportinput', maxLength: 150, align: 'left', fontFamily: 'Arial', border: 1, color: '#000000', fontSize: '32px', borderColor: '#000000', backgroundColor: '#ffffff' })
        this.add(this.reportinput)
        this.reportinput.on('focus', () => { this.scene.game.input.keyboard.enabled = false })
        this.reportinput.on('blur', () => { this.scene.game.input.keyboard.enabled = true })
        this.textContent.text = "If needed, please give us more information."
        this.reportplayer_option4_txt.text = "Submit";
        this.optionPage++;
    }
    sendReport() {
        this.optionPage = 1;
        let reporttext = "`No additional input provided.`";
        if (this.reportinput) {
            reporttext = this.reportinput.text.toString() == '' ? "`No additional input provided.`" : this.reportinput.text.toString();
            this.reportinput.text = ''
        }
        this.hide()
        this.interface.prompt.showWindow("Thank you. Your report has been\nsent, a moderator will read it soon.", 'single')
        if(this.world.client.reportCooldownActive) return
        this.world.client.setReportCooldown()
        this.network.send('report_player', {
            userId: this.userId,
            cat1: this.category1,
            cat2: this.category2 == undefined ? "*N/A*" : this.category2,
            message: reporttext
        })
        //this.interface.destroyWidget(this)
    }
    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
// You can write more code here
