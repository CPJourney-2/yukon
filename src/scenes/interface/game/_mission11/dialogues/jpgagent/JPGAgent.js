
import DialogueWidget from '../DialogueWidget'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

import DialogueBubble from '../DialogueBubble'

export const preload = {
    key: [
        'mission11-dialogue-common-pack',
        'mission11-jpg-pack'
    ],
    url: [
        'assets/media/interface/game/_mission11/dialogues/mission11-dialogue-common-pack.json',
        'assets/media/interface/game/_mission11/dialogues/mission11-jpg-pack.json'
    ],
    loadString: ['loading', 'Jet Pack Guy']
}

/* START OF COMPILED CODE */

export default class JPGAgent extends DialogueWidget {

    constructor(scene, x, y) {
        super(scene, x ?? 0.00438428236389643, y ?? 0.0661551881702878);

        /** @type {Phaser.GameObjects.Sprite} */
        this.mouth;
        /** @type {DialogueBubble} */
        this.bubble;
        /** @type {Array<any>} */
        this.pages;
        /** @type {Array<any>} */
        this.arrows;


        // block_1
        const block_1 = scene.add.rectangle(760, 480, 1520, 960);
        block_1.isFilled = true;
        block_1.fillColor = 0;
        block_1.fillAlpha = 0.2;
        this.add(block_1);

        // jpgbody1
        const jpgbody1 = scene.add.image(287, 718, "mission11-jpg", "jpgbody");
        this.add(jpgbody1);

        // mouth
        const mouth = scene.add.sprite(261, 481, "mission11-jpg", "mouth0001");
        this.add(mouth);

        // bubble
        const bubble = new DialogueBubble(scene, 397, 674);
        this.add(bubble);

        // lists
        const pages = [];
        const arrows = [];

        // block_1 (components)
        new Interactive(block_1);

        // mouth (components)
        const mouthAnimation = new Animation(mouth);
        mouthAnimation.key = "mouth";
        mouthAnimation.end = 16;

        this.mouth = mouth;
        this.bubble = bubble;
        this.pages = pages;
        this.arrows = arrows;

        /* START-USER-CTR-CODE */
        this.options = [
            /* ==== Pre-PSA quiz ==== */
            [ 
                {
                    text: "Rookie sent me up here. I found some corn seeds downstairs.",
                    callback: () => {
                        this.mouth.__Animation.play()
                        this.showDialogueAtIndex(1)
                    }
                }
            ],
            [
                { // 1
                    text: "We also found some paw prints and a missing chair.",
                    callback: () => {
                        this.mouth.__Animation.play()
                        this.showDialogueAtIndex(2)
                    }
                },
            ],
            [ // index: 2
                {
                    text: "Wait, I want to help you guys!",
                    callback: () => {
                        this.mouth.__Animation.play()
                        this.showDialogueAtIndex(4)
                    }
                },
            ],
            [ // index: 3
                {
                    text: "I'm on it!",
                    callback: () => {
                        this.close()
                        this.interface.loadWidget('AgentTest', false, true)
                    }
                },
            ],
            [ // index: 4 - AFTER PASSING PSA QUIZ
                {
                    text: "On my way, thanks Jet Pack Guy!",
                    callback: () => {
                        this.world.party.cookies.checkpoint1Checks.talkedToJPG = true
                        this.close()
                    }
                },
            ],

            /* ==== THIS IS IF YOU ARE ALREADY A PSA AGENT ==== */

            [ // index: 5
                {
                    text: "Hey, Jet Pack Guy. What have you found?",
                    callback: () => {
                        this.mouth.__Animation.play()
                        this.showDialogueAtIndex(10)
                    }
                },
                {
                    text: "Hey, before we start, I wanted to ask about your cool glasses...",
                    callback: () => {
                        this.mouth.__Animation.play()
                        this.showDialogueAtIndex(11)
                    }
                }
            ],
            [ // index: 6
                {
                    text: "Right. A missing computer. And some odd tracks.",
                    callback: () => {
                        this.mouth.__Animation.play()
                        this.showDialogueAtIndex(13)
                    }
                },
            ],

        ]
        this.dialogue = [
            { // 0 - Before JPG gives you the PSA quiz
                text: "Hey, hey, hey. Back off. This area is under investigation. What are you doing here?",
                after: () => {
                    this.showOptionsAtIndex(0)
                    this.mouth.__Animation.stop()
                }
            },
            { // 1
                text: "Oh, I see. Is there anything else I need to know?",
                after: () => {
                    this.showOptionsAtIndex(1)
                    this.mouth.__Animation.stop()
                }
            },
            { // 2
                text: "Another missing item? Here, we lost the office computer. I wonder what he's up to...",
                after: () => {
                    this.showDialogueAtIndex(3)
                }
            },
            { // 3
                text: "Listen. Thanks for your help, but we'll take it from here.",
                after: () => {
                    this.mouth.__Animation.stop()
                    this.showOptionsAtIndex(2)
                }
            },
            { // 4
                text: "Hmm... you *did* give us extra information. You might be able to help more. ",
                after: () => {
                    this.showDialogueAtIndex(5)
                }
            },
            { // 5
                text: "Tell you what- if you can pass this short quiz, I'll let you help us. Deal?",
                after: () => {
                    this.mouth.__Animation.stop()
                    this.showOptionsAtIndex(3)
                }
            },

            // After passing the quiz
            { // 6
                text: "Wow, you passed the quiz. Impressive. I guess that makes you one of us, Agent.",
            },
            { // 7
                text: "The name's Jet Pack Guy. I just gave you a Spy Phone. \nReport to the HQ and meet with Gary. He'll give you more details there.",
            },
            { // 8
                text: "You can get there with your Spy Phone or by entering a dressing room in the Sport Shop.",
                after: () => {
                    this.mouth.__Animation.stop()
                    this.showOptionsAtIndex(4)
                }
            },
            
            /* ==== THIS IS DIALOGUE FOR IF YOU ARE ALREADY A PSA AGENT ==== */
            { // 9
                text: "Yo, how's it going?",
                after: () => {
                    this.mouth.__Animation.stop()
                    this.showOptionsAtIndex(5)
                }
            },
            { // 10
                text: "Found? Not exactly. It's more what I CAN'T find. The computer was taken.",
                after: () => {
                    this.mouth.__Animation.stop()
                    this.showOptionsAtIndex(6)
                }
            },
            { // 11
                text: "Thanks. They're my lucky pair. They're actually pretty cool... but we're on a case right now. No time to explain.",
                after: () => {
                    this.showDialogueAtIndex(12)
                }
            },
            { // 12
                text: "As for the case, it's pretty straightforward. The Gift Shop computer is missing.",
                after: () => {
                    this.mouth.__Animation.stop()
                    this.showOptionsAtIndex(6)
                }
            },
            { // 13
                text: "Good eye, Agent. I'll finish securing the area. Have a look around.",
                after: () => {
                    this.mouth.__Animation.stop()
                    this.world.room.enableCornButton();
                    this.world.party.cookies.checkpoint1Checks.talkedToJPG = true
                    if(this.world.client.pirate_status < 2) this.world.party.cookies.checkpoint1Completion()
                    this.close()
                }
            },
            { // 14
                text: "I'll stay here for now. Go on ahead, Agent.",
                after: () => {
                    this.mouth.__Animation.stop()
                    this.close()
                }
            },

            { // 15 - this is for when you talk to jpg as a non agent
                text: "Report to HQ. You can get there with your Spy Phone or by entering the Sport Shop's change rooms.",
                after: () => {
                    this.mouth.__Animation.stop()
                    this.close()
                }
            },

        ]
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(i) {
        super.show(i)
        this.mouth.__Animation.play()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */