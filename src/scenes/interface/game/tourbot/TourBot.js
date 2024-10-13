import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton, Animation, NineSlice, Interactive } from '@components/components'


export const preload = {
    key: 'tourbot-pack',
    url: 'assets/media/interface/game/tourbot/tourbot-pack.json',
    loadString: ['loading', 'Tour Bot']
}

// You can write more code here
/* START OF COMPILED CODE */

export default class TourBot extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? -6);

        /** @type {Phaser.GameObjects.Image} */
        this.tourbot_bubble;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.dialoguenext_btn;
        /** @type {Phaser.GameObjects.Image} */
        this.tourbot_optionbg;
        /** @type {Phaser.GameObjects.Image} */
        this.option1_btn;
        /** @type {Phaser.GameObjects.Image} */
        this.option2_btn;
        /** @type {Phaser.GameObjects.Image} */
        this.option3_btn;
        /** @type {Phaser.GameObjects.Image} */
        this.option4_btn;
        /** @type {Phaser.GameObjects.Text} */
        this.option1_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.tourbot_dialogue;
        /** @type {Phaser.GameObjects.Text} */
        this.option2_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.option3_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.option4_txt;
        /** @type {Array<any>} */
        this.pages;
        /** @type {Array<any>} */
        this.questions;


        // rectangle_1
        const rectangle_1 = scene.add.rectangle(760, 480, 1520, 960);
        rectangle_1.scaleX = 1.0472659596877991;
        rectangle_1.scaleY = 1.103238452765252;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 0;
        rectangle_1.fillAlpha = 0.3;
        this.add(rectangle_1);

        // tourbot_bg
        const tourbot_bg = scene.add.image(1155, 684, "tourbot", "tourbot-bg");
        this.add(tourbot_bg);

        // tourbot_bubble
        const tourbot_bubble = scene.add.image(717, 256, "tourbot", "tourbot-bubble");
        this.add(tourbot_bubble);

        // dialoguenext_btn
        const dialoguenext_btn = scene.add.rectangle(772, 485, 128, 128);
        dialoguenext_btn.scaleX = 11.858639913213567;
        dialoguenext_btn.scaleY = -7.100577136311277;
        dialoguenext_btn.visible = false;
        this.add(dialoguenext_btn);

        // tourbot_optionbg
        const tourbot_optionbg = scene.add.image(504, 805, "tourbot", "tourbot-optionbg");
        this.add(tourbot_optionbg);

        // option1_btn
        const option1_btn = scene.add.image(503, 718, "tourbot", "tourbot-option");
        this.add(option1_btn);

        // option2_btn
        const option2_btn = scene.add.image(503, 776, "tourbot", "tourbot-option");
        this.add(option2_btn);

        // option3_btn
        const option3_btn = scene.add.image(503, 833.572509765625, "tourbot", "tourbot-option");
        this.add(option3_btn);

        // option4_btn
        const option4_btn = scene.add.image(503, 891.4552001953125, "tourbot", "tourbot-option");
        this.add(option4_btn);

        // option1_txt
        const option1_txt = scene.add.text(72, 701, "", {});
        option1_txt.text = "Hi there tour bot";
        option1_txt.setStyle({ "color": "#000 ", "fixedWidth":840,"fontFamily": "Burbank Small", "fontSize": "33px", "fontStyle": "bold" });
        option1_txt.setPadding({"left":10});
        this.add(option1_txt);

        // tourbot_dialogue
        const tourbot_dialogue = scene.add.text(717, 208, "", {});
        tourbot_dialogue.setOrigin(0.5, 0.5);
        tourbot_dialogue.text = "This example text\nI have put it on four lines\nNot a good haiku\nExcept its not a haiku, just a strange poem";
        tourbot_dialogue.setStyle({ "align": "center", "color": "#000 ", "fontFamily": "CCComicrazy", "fontSize": "50px" });
        this.add(tourbot_dialogue);

        // option2_txt
        const option2_txt = scene.add.text(72, 758, "", {});
        option2_txt.text = "Hi there tour bot";
        option2_txt.setStyle({ "color": "#000 ", "fixedWidth":840,"fontFamily": "Burbank Small", "fontSize": "33px", "fontStyle": "bold" });
        option2_txt.setPadding({"left":10});
        this.add(option2_txt);

        // option3_txt
        const option3_txt = scene.add.text(72, 816, "", {});
        option3_txt.text = "Hi there tour bot";
        option3_txt.setStyle({ "color": "#000 ", "fixedWidth":840,"fontFamily": "Burbank Small", "fontSize": "33px", "fontStyle": "bold" });
        option3_txt.setPadding({"left":10});
        this.add(option3_txt);

        // option4_txt
        const option4_txt = scene.add.text(72, 872.000020980835, "", {});
        option4_txt.text = "Hi there tour bot";
        option4_txt.setStyle({ "color": "#000 ", "fixedWidth":840,"fontFamily": "Burbank Small", "fontSize": "33px", "fontStyle": "bold" });
        option4_txt.setPadding({"left":10});
        this.add(option4_txt);

        // lists
        const pages = [];
        const questions = [];

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // dialoguenext_btn (components)
        const dialoguenext_btnSimpleButton = new SimpleButton(dialoguenext_btn);
        dialoguenext_btnSimpleButton.callback = () => {this.onOptionClick(0)};

        // option1_btn (components)
        const option1_btnButton = new Button(option1_btn);
        option1_btnButton.spriteName = "tourbot-option";
        option1_btnButton.callback = () => {this.onOptionClick(1)};

        // option2_btn (components)
        const option2_btnButton = new Button(option2_btn);
        option2_btnButton.spriteName = "tourbot-option";
        option2_btnButton.callback = () => {this.onOptionClick(2)};

        // option3_btn (components)
        const option3_btnButton = new Button(option3_btn);
        option3_btnButton.spriteName = "tourbot-option";
        option3_btnButton.callback = () => {this.onOptionClick(3)};

        // option4_btn (components)
        const option4_btnButton = new Button(option4_btn);
        option4_btnButton.spriteName = "tourbot-option";
        option4_btnButton.callback = () => {this.onOptionClick(4)};

        this.tourbot_bubble = tourbot_bubble;
        this.dialoguenext_btn = dialoguenext_btn;
        this.tourbot_optionbg = tourbot_optionbg;
        this.option1_btn = option1_btn;
        this.option2_btn = option2_btn;
        this.option3_btn = option3_btn;
        this.option4_btn = option4_btn;
        this.option1_txt = option1_txt;
        this.tourbot_dialogue = tourbot_dialogue;
        this.option2_txt = option2_txt;
        this.option3_txt = option3_txt;
        this.option4_txt = option4_txt;
        this.pages = pages;
        this.questions = questions;

        /* START-USER-CTR-CODE */
        // Write your code here.

        //get penguin days old
        let oneDay = 1000 * 60 * 60 * 24
        let timeDiff = Date.now() - Date.parse(this.world.client.joinTime)
        let daysDiff = Math.round(timeDiff / oneDay)
        this.pengAge = daysDiff

        //text for the tourbot and for choices
        this.dialogueAndChoices = {
            welcome: {
                tourbot: "Welcome to the Tour HQ! How can I help you today?",
                choice1: "I want to take the tour guide test.",
                choice2: this.isTourGuide() ? "I would like to read the Tour Guide Manual." : "How can I get a tour?",
                choice3: "Tell me the description of a random room.",
                choice4: "Nothing right now, thanks.",
            },
            getatour: {
                tourbot: "It's simple! Just find a penguin wearing a hat with a question mark. If they're waving a sign saying \"TOURS HERE\", chances are they're willing to give you a tour!",
                choice1: "Go back to options.",
                choice2: "Thank you so much! See you later!"
            },
            notoldenough: {
                tourbot: `Sorry, your penguin must be at least 45 days old in order to become a tour guide. You are currently ${this.pengAge} days old.`,
                choice1: "Go back to options.",
                choice2: "That's alright. See you later!"
            },
            notenoughstamps: {
                tourbot: `Sorry, your penguin must have at least 45 stamps to become a tour guide. You currently have ${this.world.client.stamps.length} stamps.`,
                choice1: "Go back to options.",
                choice2: "That's alright. See you later!"
            },
            prequiz1: {
                tourbot: "Ah, so you would like to become a tour guide, showing new visitors to Club Penguin Journey how to get around?",
            },
            prequiz2: {
                tourbot: "Here's how it works. We'll give you a quiz of eight questions about Club Penguin. If you get at least seven questions correct, you'll get to become a tour guide!"
            },
            prequiz3: {
                tourbot: "Would you like to take the quiz now?",
                choice1: "Absolutely!",
                choice2: "Not right now...",
            },
            postquiz_win: {
                tourbot: "Congrats! You passed the quiz! Take this Tour Guide Hat. It is your official uniform as a tour guide. What would you like to do now?",
                choice1: "Thank you! I will give it my best shot. Goodbye!",
                choice2: "Can I read the Tour Guide Manual?"
            },
            postquiz_lose: {
                tourbot: "Sorry, but you answered too many questions incorrectly. Feel free to try again soon!",
                choice1: "That's alright. I'll come back later to try it again!"
            }
        }
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */


    //there's 16 questions total, 8 have to randomly be selected
    //then out of the 8 questions, if you get two wrong, you fail

    /* TO-DO:
        - make proper dialogue for when you are already tour guide
        - make tour book only accessible after becoming tour guide? // already done, just make there be dialogue if ur not tour guide
        - do the tour room dialogue ui (may god have mercy on our souls)
    */

    // Write your code here.

    //this shuffles the array of objects
    isTourGuide(){
        return this.world.client.hasItem(428)
    }
    sliceArray(){
        const shuffledArray = this.crumbs.tour_questions.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray.slice(0, 8);
    }
    show(args){
        //this.rect.visible = true
        this.tourAmount = 0
        this.incorrect = 0
        //this.correctAnswer = 0
        this.mode = "welcome" //this determines what dialogue should be onscreen atm
        this.changeDialogue()
    }

    changeDialogue(){
        let dialogue = this.dialogueAndChoices[this.mode]

        //if some dialogues dont exist, make them invisible
        this.tourbot_dialogue.visible = !dialogue.tourbot ? false : true
        this.tourbot_bubble.visible = !dialogue.tourbot ? false : true
        let areOptionsInvisible = true
        for(let i = 1; i < 5; i++) {
            this[`option${i}_txt`].visible = !dialogue[`choice${i}`] ? false : true
            this[`option${i}_btn`].visible = !dialogue[`choice${i}`] ? false : true
            this[`option${i}_txt`].text = dialogue[`choice${i}`] ? dialogue[`choice${i}`] : ""
            if(this[`option${i}_btn`].visible) {
                areOptionsInvisible = false
            }
        }
        this.tourbot_optionbg.visible = areOptionsInvisible ? false : true
        this.dialoguenext_btn.visible = areOptionsInvisible ? true : false
        this.setText(dialogue.tourbot)
    }
    showAllOptions(){
        //if some dialogues dont exist, make them invisible
        this.tourbot_dialogue.visible = true
        this.tourbot_bubble.visible = true
        for(let i = 1; i < 5; i++) {
            this[`option${i}_txt`].visible = true
            this[`option${i}_btn`].visible = true
        }
        this.tourbot_optionbg.visible = true
        this.dialoguenext_btn.visible = false
    }
    onOptionClick(btnId){
        //0 is the id of the btn when options are hidden
        switch(this.mode) {
            case "welcome":
                switch(btnId) {
                    case 1:
                        this.fixSize()
                        if(isNaN(this.pengAge) || this.pengAge < 45) {
                            this.mode = "notoldenough"
                        } else if(this.world.client.stamps.length < 45) {
                            this.mode = "notenoughstamps"
                        } else {
                            this.mode = "prequiz1";
                        }
                        this.changeDialogue()
                        break
                    case 2:
                        this.fixSize()
                        if(this.isTourGuide()){
                            this.hide(); 
                            this.interface.loadWidget('TourGuideBook'); 
                            break
                        } else {
                            this.mode = "getatour"
                            this.changeDialogue()
                            break
                        }
                    case 3: 
                        this.randomRoom()
                        break
                    case 4: this.hide(); break
                    default: break
                }
                break

            case "getatour":
            case "notoldenough":
            case "notenoughstamps":
                switch(btnId) {
                    case 1: this.mode = "welcome"; this.changeDialogue(); break
                    case 2: this.hide()
                    default: break
                }
                break

            case "prequiz1":
                switch(btnId) {
                    case 0: this.mode = "prequiz2"; this.changeDialogue(); break
                    default: break
                }
                break

            case "prequiz2":
                switch(btnId) {
                    case 0: this.mode = "prequiz3"; this.changeDialogue(); break
                    default: break
                }
                break

            case "prequiz3":
                switch(btnId) {
                    case 1: this.takeQuiz(); break
                    case 2: this.hide(); break
                    default: break
                }
                break

            case "tourquiz":
                if(isNaN(btnId)) break
                this.checkAnswer(btnId)
                this.tourAnswer()
                break

            case "postquiz_lose":
                this.hide()

            case "postquiz_win":
                switch(btnId) {
                    case 1: this.hide(); break
                    case 2: this.hide(); this.interface.loadWidget('TourGuideBook'); break
                    default: break
                }

            default: break
        }
    }
    takeQuiz(){
        //if (this.world.client.hasItem(428)){
        if (false){
            //this.pssst.visible = true
            return
        }
        this.mode = "tourquiz"
        this.tourArray = this.sliceArray()
        this.showAllOptions()
        this.tourAnswer()
    }
    // tourAmount is the current question the player is on. Must go from 0-7.
    tourAnswer(){
        if(this.tourAmount > 7) {
            if(this.incorrect >= 2) {
                this.mode = "postquiz_lose"
            } else {
                this.mode = "postquiz_win"
                if(!this.isTourGuide()){
                    this.interface.prompt.showItem(428);
                }
            }
            this.changeDialogue()
            return
        }
        let currentQuestion = this.tourArray[this.tourAmount]
        this.setText(currentQuestion.question)
        //to-do: randomize answer ordering
        this.option1_txt.text = currentQuestion.answers[0].text
        this.option2_txt.text = currentQuestion.answers[1].text
        this.option3_txt.text = currentQuestion.answers[2].text
        this.option4_txt.text = currentQuestion.answers[3].text

        this.currentQuestion = currentQuestion
        //this.correctAnswer = this.getCorrectAnswer(currentQuestion)
        this.tourAmount++
    }
    /*getCorrectAnswer(currentQuestion) {
        for(let i = 0; i < currentQuestion.answers.length; i++) {
            if(currentQuestion.answers[i].correct === true) {
                return i + 1
            }
        }
    }*/

    //this takes a list of acceptable rooms by their keys (hideout, hiddenlake and underwater are excluded) and randomizes it, outputs a random value
    randomRoom(){
        let roomArray = ["town", "coffee", "book", "dance", "lounge", "eco", "shop", "village", "sportshop", "lodge", "attic", "mtn", "pet", "dojo","courtyard", "pizza", "plaza", "beach", "lighthouse", "beacon", "dock", "forts", "rink", "boiler", "berg", "cave", "shack", "mine", "forest", "cove", "cavemine", "stage", "welcome", "tourhq", "lookout", "oldboiler", "icepond"]
        let outputString = roomArray[Math.floor(Math.random() * roomArray.length)]
        this.showRoomText(outputString);
        return
    }
    showRoomText(room){
         let tourRoomMessages = this.crumbs.tours.evergreen[room.toLowerCase()].split("|");
         this.setText(tourRoomMessages, false)

        /*if (tourRoomMessages.length == 4){
            this.tourbot_dialogue.scaleX = 0.9;
            this.tourbot_dialogue.scaleY = 0.9;
        }            
        else if (tourRoomMessages.length > 4){
            //maybe make a check for the size of the text
            this.tourbot_dialogue.scaleX = 0.8;
            this.tourbot_dialogue.scaleY = 0.8;
        }*/
    }
    fixSize(){
        /*this.tourbot_dialogue.scaleX = 1;
        this.tourbot_dialogue.scaleY = 1;*/
    }
    checkAnswer(id){
        if(this.currentQuestion.answers[id - 1].correct) return
        this.incorrect++
    }
    hide(){
        this.incorrect = 0
        this.tourAmount = 0
        this.interface.destroyWidget(this)

    }

    setText(text, wrap = true) {
        this.tourbot_dialogue.setText(text)
        this.tourbot_dialogue.setFontSize("50px")
        if(wrap) {
            this.tourbot_dialogue.setWordWrapWidth(1090, false)
            this.tourbot_dialogue.scale = 1
        } else {
            this.tourbot_dialogue.setWordWrapWidth(0, true)
        }

        let xScale = 1090 / this.tourbot_dialogue.width
        let yScale = 240 / this.tourbot_dialogue.height
        this.tourbot_dialogue.setScale(yScale < xScale ? yScale : xScale)
        if(this.tourbot_dialogue.scale > 1) this.tourbot_dialogue.scale = 1
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
