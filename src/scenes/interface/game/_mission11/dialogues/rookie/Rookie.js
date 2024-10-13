
import DialogueWidget from '../DialogueWidget'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

import DialogueBubble from '../DialogueBubble'

export const preload = {
    key: [
        'mission11-dialogue-common-pack',
        'mission11-rookie-pack'
    ],
    url: [
        'assets/media/interface/game/_mission11/dialogues/mission11-dialogue-common-pack.json',
        'assets/media/interface/game/_mission11/dialogues/mission11-rookie-pack.json'
    ],
    loadString: ['loading', 'Rookie']
}

/* START OF COMPILED CODE */

export default class Rookie extends DialogueWidget {

    constructor(scene, x, y) {
        super(scene, x ?? 0.00438428236389643, y ?? 0.0661551881702878);

        /** @type {Phaser.GameObjects.Image} */
        this.body2;
        /** @type {Phaser.GameObjects.Image} */
        this.body1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mouth1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mouth2;
        /** @type {DialogueBubble} */
        this.bubble;
        /** @type {Array<any>} */
        this.pages;
        /** @type {Array<any>} */
        this.arrows;


        // block
        const block = scene.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // body2
        const body2 = scene.add.image(286, 682, "mission11-rookie", "rookiebodytwo");
        this.add(body2);

        // body1
        const body1 = scene.add.image(293, 682, "mission11-rookie", "rookiebodyone");
        body1.visible = false;
        this.add(body1);

        // mouth1
        const mouth1 = scene.add.sprite(300, 511, "mission11-rookie", "rookieshock0001");
        mouth1.visible = false;
        this.add(mouth1);

        // mouth2
        const mouth2 = scene.add.sprite(300, 513, "mission11-rookie", "rookiesmile0001");
        this.add(mouth2);

        // bubble
        const bubble = new DialogueBubble(scene, 397, 674);
        this.add(bubble);

        // lists
        const pages = [];
        const arrows = [];

        // block (components)
        new Interactive(block);

        // mouth1 (components)
        const mouth1Animation = new Animation(mouth1);
        mouth1Animation.key = "rookieshock";
        mouth1Animation.end = 180;

        // mouth2 (components)
        const mouth2Animation = new Animation(mouth2);
        mouth2Animation.key = "rookiesmile";
        mouth2Animation.end = 180;

        this.body2 = body2;
        this.body1 = body1;
        this.mouth1 = mouth1;
        this.mouth2 = mouth2;
        this.bubble = bubble;
        this.pages = pages;
        this.arrows = arrows;

        /* START-USER-CTR-CODE */
        this.options = [
            // Login, after rookie tells you whats happening
            [
                {
                    text: "Sure, let's head right over!",
                    callback: () => {
                        this.close()
                        this.world.party.updateCheckpoint(1)
                        this.world.room.triggerRoom(130)
                    }
                },
                {
                    text: "I need to do something first, but I'll be over there soon.",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showBody(1)
                        this.showDialogueAtIndex(2)
                    }
                }
            ],


            /* ===== In the Gift Shop, as a non-agent ===== */
            [ // index: 1
                {
                    text: "Rookie, don't you notice anything missing?",
                    callback: () => {
                        this.showMouth(1)
                        this.currentMouth.__Animation.play()
                        this.showBody(2)
                        this.showDialogueAtIndex(5)
                    }
                },
            ],
            [ // index: 2
                {
                    text: "And I'm noticing some paw prints, as well as some... corn seeds?",
                    callback: () => {
                        this.showMouth(2)
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(6)
                    }
                },
            ],

            /* ===== In the Gift Shop, AS AN AGENT ALREADY ===== */
            [ // index: 3
                {
                    text: "Same to you, Rookie. Looks like this place was turned upside down...",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(8)
                    }
                },
                {
                    text: "Good to see you, Rookie. What have you discovered?",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(10)
                    }
                }
            ],
            [ // index: 4
                {
                    text: "What about the missing chair?",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showBody(2)
                        this.showDialogueAtIndex(9)
                    }
                },
            ],
            [ // index: 5
                {
                    text: "Rookie, how many chairs are there supposed to be in the Gift Shop?",
                    callback: () => {
                        this.showMouth(1)
                        this.currentMouth.__Animation.play()
                        this.showBody(2)
                        this.showDialogueAtIndex(11)
                    }
                },
                {
                    text: "Wait, how many chairs are usually in this room?",
                    callback: () => {
                        this.showMouth(1)
                        this.currentMouth.__Animation.play()
                        this.showBody(2)
                        this.showDialogueAtIndex(11)
                    }
                },
            ],
            [ // index: 6
                {
                    text: "Hmm... what do you think about the tracks leading out the door?",
                    callback: () => {
                        this.showMouth(2)
                        this.currentMouth.__Animation.play()
                        this.showBody(1)
                        this.showDialogueAtIndex(12)
                    }
                },
                {
                    text: "I wonder why anyone would want a chair? And look at these tracks...",
                    callback: () => {
                        this.showMouth(2)
                        this.currentMouth.__Animation.play()
                        this.showBody(2)
                        this.showDialogueAtIndex(13)
                    }
                },
            ],
            [ // index: 7
                {
                    text: "Carry on, Rookie.",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showBody(1)
                        this.showDialogueAtIndex(14)
                    }
                },
                {
                    text: "Sounds good Rookie. Oh, and nice hat by the way.",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showBody(1)
                        this.showDialogueAtIndex(15)
                    }
                },
            ],
            [ // index: 8
                {
                    text: "I found this corn... I think it's definitely a clue.",
                    callback: () => {
                        this.showMouth(2)
                        this.currentMouth.__Animation.play()
                        this.showBody(2)
                        this.showDialogueAtIndex(17)
                    }
                },
            ],
            [ // index: 9
                {
                    text: "We have to find a way to stop that broadcast.",
                    callback: () => {
                        this.showDialogueAtIndex(29)
                        this.showMouth(2)
                    }
                },
                {
                    text: "There's got to be a way to block Herbert's show!",
                    callback: () => {
                        this.showDialogueAtIndex(29)
                        this.showMouth(2)
                    }
                },
            ],
            [ // index: 10
                {
                    text: "Rookie, that's a great idea! A movie would block the signal!",
                    callback: () => {
                        this.showDialogueAtIndex(34)
                        this.currentMouth.__Animation.play()
                    }
                },
                {
                    text: "Good idea. I'll find a movie to put in the projector. Stay here.",
                    callback: () => {
                        this.showDialogueAtIndex(35)
                        this.currentMouth.__Animation.play()
                    }
                },
            ],
            [ // index: 11
                {
                    text: "Right, we will have to track his signal to the source.",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(39)
                    }
                }
            ],
            [ // index: 12 - not tracking the signal yet
                {
                    text: "No, not yet.",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(41)
                    }
                }
            ],
            [ // index: 13 -  tracking the signal 
                {
                    text: "Yes, it is coming from the Mine Shack.",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(42)
                    }
                }
            ],
            [ // index: 14 - after rookies badge comment
                {
                    text: "Wait, what's going on here? What's the Elite Penguin Force?",
                    callback: () => {
                        this.close()
                        this.world.party.showDialogue('gary', 54)
                    }
                }
            ]
        ]

        this.dialogue = [
            /* ===== Login dialogue, when player is not an agent ===== */
            {
                text: "Hiya, friend! I could use your help over at the Gift Shop. Some weird stuff happened over there, and I need some help looking around.",
            },
            {
                text: "I was told to keep this a secret, but I think I can trust you with this. Will you help?",
                after: () => {
                    this.showOptionsAtIndex(0)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // Second option
                text: "No problem! I'll be waiting for you at the Gift Shop!",
                after: () => {
                    this.world.party.updateCheckpoint(1)
                    this.close()
                }
            },

            /* ===== In the Gift Shop, as a non-agent. Starts at index: 3 ===== */
            { // 3
                text: "Woah, look at all these new clothes that were released this month! I haven't checked the Gift Shop in a hot minute!",
                addition: () => this.showBody(1)
            },
            { // 4
                text: "Yep, I think that's the only thing that's happened around here. I thought I was called here for something urgent!",
                after: () => {
                    this.currentMouth.__Animation.stop()
                    this.showOptionsAtIndex(1)
                }
            },

            // after option
            { // 5
                text: "Missing? What's missing? Everything's fine around he- OH! The chair! ONE OF THE CHAIRS IS GONE!",
                after: () => {
                    this.currentMouth.__Animation.stop()
                    this.showBody(1)
                    this.showOptionsAtIndex(2)
                }
            },
            { // 6
                text: "Well, you certainly have good eyes. Collect those corn seeds and bring them upstairs. There's a penguin there that should know more about this. Tell him I sent ya!",
                after: () => {
                    this.close()
                    if(this.world.room?.key === 'ShopSolo' && !this.world.party.cookies.checkpoint1Checks.talkedToRookie) this.world.room.enableCornButton();
                    this.world.party.cookies.checkpoint1Checks.talkedToRookie = true
                }
            },
            

            // ==== THIS IS IF YOU ARE ALREADY AN AGENT IN THE SHOP
            { // 7
                text: "Hey there! It's awesome to see you again.",
                after: () => {
                    this.currentMouth.__Animation.stop()
                    this.showOptionsAtIndex(3)
                }
            },
            { // 8 - path 1 option 1 start
                text: "What? Oh, the mess! I was just trying some wigs on. Not much to report. Everything seems a-okay.",
                after: () => {
                    this.currentMouth.__Animation.stop()
                    this.showOptionsAtIndex(4)
                }
            },
            { // 9 - 
                text: "No worries there, the chair's right here! I almost didn't see it myself. Maybe you should see if G will design you some glasses like mine. They're super useful!",
                after: () => {
                    this.currentMouth.__Animation.stop()
                    this.showOptionsAtIndex(5)
                }
            },
            { // 10 - path 1 option 2 start
                text: "Yes. I've been busy. Have you ever seen so many disguises in one room? I need to tell G. Otherwise there's not much to report.",
                after: () => {
                    this.currentMouth.__Animation.stop()
                    this.showOptionsAtIndex(4)
                }
            },
            { // 11
                text: "Well, there's usually two... oh, my! There's only one here! The other chair's missing!",
                after: () => {
                    this.currentMouth.__Animation.stop()
                    this.showOptionsAtIndex(6)
                }
            },
            { // 12
                text: "Oh... yes. I thought those tracks looked suspiciously un-penguin-like. I'll put up some tape around the scene!",
                after: () => {
                    this.currentMouth.__Animation.stop()
                    this.showOptionsAtIndex(7)
                }
            },
            { // 13
                text: "Who WOULDN'T want a chair like this!? It's amazing! Those tracks should be noted. They're suspicious.",
                after: () => {
                    this.currentMouth.__Animation.stop()
                    this.showOptionsAtIndex(7)
                }
            },
            { // 14
                text: "Right, talk to you later.",
                after: () => {
                    if(this.world.room?.key === "ShopSolo" && !this.world.party.cookies.checkpoint1Checks.talkedToRookie) this.world.room.enableCornButton();
                    this.world.party.cookies.checkpoint1Checks.talkedToRookie = true
                    if(this.world.client.pirate_status < 2) this.world.party.cookies.checkpoint1Completion()
                    this.close()
                }
            },
            { // 15
                text: "Thanks!",
                after: () => {
                    if(this.world.room?.key === "ShopSolo" && !this.world.party.cookies.checkpoint1Checks.talkedToRookie) this.world.room.enableCornButton();
                    this.world.party.cookies.checkpoint1Checks.talkedToRookie = true
                    if(this.world.client.pirate_status < 2) this.world.party.cookies.checkpoint1Completion()
                    this.close()
                }
            },
            { // 16 
                text: "Hey, did you find something?",
                after: () => {
                    this.currentMouth.__Animation.stop()
                    this.showOptionsAtIndex(8)
                }
            },
            { // 17
                text: "Or at least lunch!",
            },
            { // 18
                text: "G's going to LOVE my report, I'm asking if we can make wigs a part of our uniforms!",
                after: () => {
                    this.world.party.cookies.checkpoint1Checks.talkedToRookie = true;
                    if(this.world.client.pirate_status < 2) this.world.party.cookies.checkpoint1Completion();
                    this.close()
                }
            },
            { // 19 - what's leading to here?
                text: "Did you find Jet Pack Guy upstairs yet? You could take him a wig if you want.",
                after: () => {
                    this.close()
                }
            },
            
            

            // ==== Talking to herbert in the hq
            { // 20
                text: "Does that mean you think you're better than us?",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('herbert', 1)
                    this.world.room.herbert.play('screen-laugh')
                }
            },
            { // 21
                text: "Oh! You're welco.... Oh. Uh. Oh. I mean... You're NOT welcome.",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('gary', 33)
                    this.world.room.herbert.play('screen-blink')
                }
            },
            { // 22
                text: "So. Uh. Hey, I've got a question: What did the polar bear say about the igloo?",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('herbert', 4)
                    this.world.room.herbert.play('screen-confused')
                }
            },
            { // 23
                text: "He says... \"I love it! Crunchy on the outside and chewy on the inside!\"",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('herbert', 5)
                }
            },
            { // 24
                text: "Wow! That's... that's mean, Herbert. It took me forever to become a secret agent.",
                addition: () => this.showBody(2)
            },
            { // 25
                text: "I had to take the test forty-four times!",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('herbert', 14)
                }
            },
            { // 26
                text: "Right!",
                after: () => {
                    this.close()
                    this.world.party.updateCheckpoint(3)
                }
            },
            { // 27
                text: "I'm going to head to the Ski Village to see if I can help.",
                after: () => {
                    this.close()
                }
            },


            // ski village yay
            { // 28
                text: "Oh no! It's started! What do we do?",
                after: () => {
                    this.showOptionsAtIndex(9)
                    this.currentMouth.__Animation.stop()
                    this.showBody(1)
                }
            },
            { // 29
                text: "I've got an idea! No one can see the movie... if they close their eyes!",
                addition: () => this.showBody(2)
            },
            { // 30
                text: "Hey! Everyone close your eyes! It's way more fun than a movie!",
                addition: () => this.currentMouth.__Animation.stop()
            },
            { // 31
                text: "...",
                addition: () => {
                    this.currentMouth.__Animation.play()
                    this.showBody(1)
                }
            },
            { // 32
                text: "Hmm... I wonder why that didn't work...",
            },
            { // 33
                text: "It's too bad we can't just put in another movie...",
                after: () => {
                    this.currentMouth.__Animation.stop()
                    this.showOptionsAtIndex(10)
                }
            },
            { // 34
                text: "You can probably put a movie into the projector device I found.",
                after: () => {
                    this.world.party.cookies.checkpoint4Checks.talkedToHerbert = true
                    this.close()
                }
            },
            { // 35
                text: "Yes I think that is what this device is that I found here.",
                after: () => {
                    this.world.party.cookies.checkpoint4Checks.talkedToHerbert = true
                    this.close()
                }
            },
            // if you click on rookie WITHOUT getting the dvd
            { // 36
                text: "Don't they sometimes show movies in the Lighthouse?",
            },
            { // 37
                text: "You can play a movie disc in the projector I found here.",
                after: () => {
                    this.close()
                }
            },
            // after putting the dvd in the projector
            { // 38
                text: "Oh no! We can't see him, but we can still hear him!",
                after: () => {
                    this.currentMouth.__Animation.stop()
                    this.showOptionsAtIndex(11)
                }
            },
            { // 39 - this gets used a second time
                text: "I think you might be able to do that from the strange box on the side of the projector...",
                after: () => {
                    this.close();
                }
            },
            { // 40 - should show after tracking signal, or on talking to Rookie in ski village after previous convo
                text: "Did you track the signal?",
                after: () => {
                    this.currentMouth.__Animation.stop()
                    this.world.client.pirate_status >= 5
                        ? this.showOptionsAtIndex(13) // tracked signal
                        : this.showOptionsAtIndex(12) // didn't track it yet
                }
            },
            { // 41 - response for untracked signal
                text: "I think you might be able to do that from the strange box on the side of the projector...",
                after: () => {
                    this.close()
                }
            },
            { // 42 - response for tracked signal
                text: "Great! I'll go ahead and report back to G, while you try and stop the signal.",
                after: () => {
                    this.close()
                }
            },
            // back at HQ after the popcorn bomb is teleported there
            { // 43
                text: "Hey, look! The clock's broken - it's counting backwards!",
                after: () => {
                    this.close()
                    this.world.room.herbertAppearsAgain()
                }
            },
            // herbert says later skaters
            { // 44
                text: "We're locked in!",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('gary', 41)
                }
            },
            // before solving EPF bookcase
            { // 45
                text: "The door is locked tight, we can't get out this way!",
                after: () => {
                    this.close()
                }
            },
            // after being teleported outside
            { // 46
                text: "Oh no! The HQ! It's been destroyed!",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('gary', 45)
                }
            },
            { // 47
                text: "Means what, G?",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('gary', 52)
                }
            },
            { // 48
                text: "Loud and clear, sir! I'll go dust off my badge...",
                after: () => {
                    this.currentMouth.__Animation.stop()
                    this.showOptionsAtIndex(14)
                }
            },
            { // 49
                text: "And we may as well enjoy the popcorn for now!",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('dot', 10)
                }
            }
        ]
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(i) {
        this.currentBody = this.body1
        this.currentMouth = this.mouth1

        super.show(i)

        if(this.index == 3 || this.index == 0 || this.index == 23) {
            this.showBody(2)
            this.showMouth(2)
        } else if(this.index == 20 || this.index == 21 || this.index == 24 || this.index == 38 || this.index == 45) {
            this.showBody(1)
            this.showMouth(1)
        } else if(this.index == 28 || this.index == 44 || this.index == 46) {
            this.showBody(2)
            this.showMouth(1)
        } else {
            this.showBody(1)
            this.showMouth(2)
        }
    }

    showBody(num) {
        // 1 = arms on hips, 2 = arms in air
        this.currentBody = this[`body${num}`]
        this.body1.visible = num == 1
        this.body2.visible = num == 2
    }

    showMouth(num) {
        // 1 = frowning, 2 = smiling
        this.currentMouth = this[`mouth${num}`]
        this.currentMouth.__Animation.play()
        this.mouth1.visible = num == 1
        this.mouth2.visible = num == 2
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */