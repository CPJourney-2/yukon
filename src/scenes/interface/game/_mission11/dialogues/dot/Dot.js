
import DialogueWidget from '../DialogueWidget'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

import DialogueBubble from '../DialogueBubble'

export const preload = {
    key: [
        'mission11-dialogue-common-pack',
        'mission11-dot-pack'
    ],
    url: [
        'assets/media/interface/game/_mission11/dialogues/mission11-dialogue-common-pack.json',
        'assets/media/interface/game/_mission11/dialogues/mission11-dot-pack.json'
    ],
    loadString: ['loading', 'Dot']
}

/* START OF COMPILED CODE */

export default class Dot extends DialogueWidget {

    constructor(scene, x, y) {
        super(scene, x ?? 0.00438428236389643, y ?? 0.0661551881702878);

        /** @type {Phaser.GameObjects.Image} */
        this.body;
        /** @type {Phaser.GameObjects.Image} */
        this.bodyarm;
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

        // body
        const body = scene.add.image(266, 716, "mission11-dot", "body");
        this.add(body);

        // bodyarm
        const bodyarm = scene.add.image(293, 716, "mission11-dot", "bodyarm");
        bodyarm.visible = false;
        this.add(bodyarm);

        // eyes0001
        const eyes0001 = scene.add.sprite(260, 425, "mission11-dot", "eyes0001");
        this.add(eyes0001);

        // mouth
        const mouth = scene.add.sprite(297, 509, "mission11-dot", "mouth0001");
        this.add(mouth);

        // hair
        const hair = scene.add.image(220, 366, "mission11-dot", "hair");
        this.add(hair);

        // bubble
        const bubble = new DialogueBubble(scene, 397, 674);
        this.add(bubble);

        // lists
        const pages = [];
        const arrows = [];

        // block_1 (components)
        new Interactive(block_1);

        // eyes0001 (components)
        const eyes0001Animation = new Animation(eyes0001);
        eyes0001Animation.key = "eyes";
        eyes0001Animation.end = 180;

        // mouth (components)
        const mouthAnimation = new Animation(mouth);
        mouthAnimation.key = "mouth";
        mouthAnimation.end = 180;

        this.body = body;
        this.bodyarm = bodyarm;
        this.mouth = mouth;
        this.bubble = bubble;
        this.pages = pages;
        this.arrows = arrows;

        /* START-USER-CTR-CODE */
        this.options = [
            [ // 0 - after Dot first speaks to you
                {
                    text: "Who are you?",
                    callback: () => {
                        this.mouth.__Animation.play()
                        this.showDialogueAtIndex(1)
                    }
                },
                {
                    text: "Wait a moment, you seem familiar...",
                    callback: () => {
                        this.mouth.__Animation.play()
                        this.showDialogueAtIndex(1)
                    }
                }
            ],
            [ // 1
                {
                    text: "Only seconds! If you're going to do something, now's the time!",
                    callback: () => {
                        this.mouth.__Animation.play()
                        this.body.visible = false
                        this.bodyarm.visible = true
                        this.showDialogueAtIndex(3)
                    }
                }
            ],
            [ // 2 - after PSA explosion
                {
                    text: "You've heard of me?",
                    callback: () => {
                        this.mouth.__Animation.play() 
                        this.showDialogueAtIndex(5)
                    }
                },
                {
                    text: "Who ARE you?",
                    callback: () => {
                        this.mouth.__Animation.play() 
                        this.showDialogueAtIndex(5)
                    }
                }
            ],
            [ // 3
                {
                    text: "What's the EPF?",
                    callback: () => {
                        this.mouth.__Animation.play()
                        this.poop = 5
                        this.showDialogueAtIndex(6)
                    }
                },
                {
                    text: "But... what about the PSA?",
                    callback: () => {
                        this.mouth.__Animation.play()
                        this.poop = 4
                        this.showDialogueAtIndex(6)
                    }
                }
            ],
            [ // 4 - show separately if "But...what about the PSA" is chosen in index 3
                {
                    text: "What's the EPF?",
                    callback: () => {
                        this.close()
                        this.world.party.showDialogue('gary', 48)
                    }
                }
            ],
            [ // 5 - show separately if "What's the EPF?" is chosen in index 3
                {
                    text: "But... what about the PSA?",
                    callback: () => {
                        this.close()
                        this.world.party.showDialogue('gary', 48)
                    }
                }
            ],
            [ // 6
                {
                    text: "This isn't over. We WILL catch Herbert once and for all...",
                    callback: () => {
                        this.mouth.__Animation.play()
                        this.showDialogueAtIndex(11)
                    }
                },
                {
                    text: "If Herbert thinks this will stop us, he is sadly mistaken...",
                    callback: () => {
                        this.mouth.__Animation.play()
                        this.showDialogueAtIndex(12)
                    }
                },
                {
                    text: "Of all of Herbert's plans, this sure was the corniest...",
                    callback: () => {
                        this.mouth.__Animation.play()
                        this.showDialogueAtIndex(13)
                    }
                }
            ]
        ]
        this.dialogue = [
            // Dot first speaks after passing the lock minigame
            { // 0
                text: "Wow, ace! Nobody's ever opened this door without clearance before.",
                after: () => {
                    this.mouth.__Animation.stop()
                    this.showOptionsAtIndex(0)
                }
            },
            { // 1
                text: "Let's just say I'm a friend.",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('gary', 44)
                }
            },
            { // 2
                text: "How much time have we got?",
                after: () => {
                    this.mouth.__Animation.stop()
                    this.showOptionsAtIndex(1)
                }
            },
            { // 3
                text: "PSA tech is down, but EPF's is fine! My teleporter works. Prepare to be moved out!",
                after: () => {
                    this.close()
                    this.world.room.showExplosionCutscene()
                }
            },
            { // 4
                text: "I'm impressed, ace. I've heard a lot about you, and it seems what I heard was true.",
                after: () => {
                    this.body.visible = true
                    this.bodyarm.visible = false
                    this.mouth.__Animation.stop()
                    this.showOptionsAtIndex(2)
                }
            },
            { // 5
                text: "Listen, I can't tell you everything you want to know. But I can say that we've been watching you, and we think you'd be perfect for our special EPF unit...",
                after: () => {
                    this.mouth.__Animation.stop()
                    this.showOptionsAtIndex(3)
                }
            },
            { // 6
                text: "I'll let G give you the info, Agent.",
                after: () => {
                    this.mouth.__Animation.stop()
                    this.showOptionsAtIndex(this.poop)
                }
            },
            { // 7
                text: "Understood.",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('rookie', 48)
                }
            },
            { // 8
                text: "Well, like I said, we've been keeping an eye on you, ace. Maybe the EPF has plans for you...",
            },
            { // 9
                text: "We'll have to see what the future holds...",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('gary', 56)
                }
            },
            { // 10
                text: "Anything to add, ace?",
                after: () => {
                    this.mouth.__Animation.stop()
                    this.showOptionsAtIndex(6)
                }
            },
            { // 11
                text: "That's the spirit! There's no WAY Herbert will get away with this.",
                after: () => {
                    this.endTheOperation()
                }
            },
            { // 12
                text: "For sure. No matter what, we will stop Herbert.",
                after: () => {
                    this.endTheOperation()
                }
            },
            { // 13
                text: "And THAT was the corniest joke I've ever heard.",
                after: () => {
                    this.endTheOperation()
                }
            }

        ]
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(i) {
        super.show(i)
        this.mouth.__Animation.play()
        this.body.visible = true
        this.bodyarm.visible = false
    }

    endTheOperation() {
        this.close()
        this.world.party.updateCheckpoint(8)
        this.world.room.triggerRoom(200)
        if(!this.world.client.hasItemBetter(8007)) this.network.send('add_item', { item: 8007 })
        this.world.client.stampEarned(505)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */