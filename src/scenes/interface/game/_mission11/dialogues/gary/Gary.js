
import DialogueWidget from '../DialogueWidget'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

import DialogueBubble from '../DialogueBubble'

export const preload = {
    key: [
        'mission11-dialogue-common-pack',
        'mission11-gary-pack'
    ],
    url: [
        'assets/media/interface/game/_mission11/dialogues/mission11-dialogue-common-pack.json',
        'assets/media/interface/game/_mission11/dialogues/mission11-gary-pack.json'
    ],
    loadString: ['loading', 'Gary']
}

/* START OF COMPILED CODE */

export default class Gary extends DialogueWidget {

    constructor(scene, x, y) {
        super(scene, x ?? 0.00438428236389643, y ?? 0.0661551881702878);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.softblock;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mouth1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mouth2;
        /** @type {DialogueBubble} */
        this.bubble;
        /** @type {Array<any>} */
        this.pages;
        /** @type {Array<Phaser.GameObjects.Image|DialogueBubble|Phaser.GameObjects.Sprite|Phaser.GameObjects.Rectangle>} */
        this.everything;


        // softblock
        const softblock = scene.add.rectangle(760, 480, 1520, 960);
        softblock.visible = false;
        this.add(softblock);

        // block
        const block = scene.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // gary
        const gary = scene.add.image(293, 718, "mission11-gary", "gary");
        this.add(gary);

        // mouth1
        const mouth1 = scene.add.sprite(302, 513, "mission11-gary", "garynormal0001");
        this.add(mouth1);

        // mouth2
        const mouth2 = scene.add.sprite(302, 512, "mission11-gary", "garyserious0001");
        mouth2.visible = false;
        this.add(mouth2);

        // bubble
        const bubble = new DialogueBubble(scene, 397, 674);
        this.add(bubble);

        // lists
        const pages = [];
        const everything = [gary, bubble, mouth2, mouth1, block];

        // softblock (components)
        new Interactive(softblock);

        // block (components)
        new Interactive(block);

        // mouth1 (components)
        const mouth1Animation = new Animation(mouth1);
        mouth1Animation.key = "garynormal";
        mouth1Animation.end = 180;

        // mouth2 (components)
        const mouth2Animation = new Animation(mouth2);
        mouth2Animation.key = "garyserious";
        mouth2Animation.end = 180;

        this.softblock = softblock;
        this.mouth1 = mouth1;
        this.mouth2 = mouth2;
        this.bubble = bubble;
        this.pages = pages;
        this.everything = everything;

        /* START-USER-CTR-CODE */
        this._options = [
            [
                {
                    text: "Hey, G. Good to see you. How've you been?",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(1)
                    }
                },
                {
                    text: "Hey G! Listen, I was wondering - are those glasses special?",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(2)
                    }
                }
            ],
            [ // 1
                {
                    text: "Ready.",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(6)
                    }
                },
                {
                    text: "Actually, I'm not feeling the investigative vibe yet.",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(4)
                    }
                }
            ],
            [ // 2
                {
                    text: "Herbert left a clue behind last time, right?",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(7)
                    }
                },
                {
                    text: "Can you brief me about what happened last time?",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(9)
                    }
                }
            ],
            [ // 3
                {
                    seed: 'fl',
                    text: "Are those flower seeds?",
                    callback: () => {
                        this.guessSeed('fl')
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(11)
                    }
                },
                {
                    seed: 'ja',
                    text: "Are those jalapeno seeds?",
                    callback: () => {
                        this.guessSeed('ja')
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(12)
                    }
                },
                {
                    seed: 'bs',
                    text: "Are those magic bean-stalk seeds?",
                    callback: () => {
                        this.guessSeed('bs')
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(13)
                    }
                }
            ],
            [ // 4
                {
                    text: "Right.",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(7)
                    }
                },
            ],
            [ // 5
                {
                    text: "Interesting. So, what does that have to do with my mission?",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(15)
                    }
                },
                {
                    text: "Wow. That's surprising!",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(18)
                    }
                }
            ],
            [ // 6
                {
                    text: "You suspect Herbert's involvement?",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(20)
                    }
                },
                {
                    text: "Are you sure Rookie didn't just misplace the items...",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(21)
                    }
                }
            ],
            [ // 7
                {
                    text: "Thanks. I will.",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(23)
                    }
                },
                {
                    text: "Hey... is it possible that Herbert's been using Rookie's spy phone?",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(24)
                    }
                }
            ],
            [ // 8
                {
                    text: "Thanks, G. I'll head right there.",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(26)
                    }
                },
                {
                    text: "I'll look around for a bit and then head out.",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(26)
                    }
                }
            ],


            [ // 9
                {
                    text: "What's happening, G?",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(28)
                    }
                },
            ],
            [ // 10
                {
                    text: "I'm a new agent recruited by Jet Pack Guy. I helped him with Rookie.",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(30)
                    }
                },
            ],
            [ // 11
                {
                    text: "What are our orders, G?",
                    callback: () => {
                        this.currentMouth.__Animation.play()
                        this.showDialogueAtIndex(36)
                    }
                },
            ],
            [ // 12
                {
                    text: "Understood G, but... what about me?",
                    callback: () => {
                        this.close()
                        this.world.party.showDialogue('dot', 8)
                    }
                }
            ]
        ]

        this.dialogue = [
            /* ===== As an existing agent; the starting dialogue ===== */
            {
                text: "Ahh Agent, there you are.",
                after: () => {
                    this.showOptionsAtIndex(0)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // 1
                text: "Very well, thank you. Ready to be briefed?",
                after: () => {
                    this.showOptionsAtIndex(1)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // 2
                text: "But of course. Fashioned from high-density material. Nobody knows this, but...",
            },
            { // 3
                text: "Oh! Sorry. No time. Ready for your mission briefing?",
                after: () => {
                    this.showOptionsAtIndex(1)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // 4
                text: "Alright, but come back soon. We have quite a situation.",
                after: () => {
                    this.world.party.cookies.garyWaitingForYou = true
                    this.close()
                }
            },
            { // 5
                text: "Are you ready to begin your mission now?",
                after: () => {
                    this.showOptionsAtIndex(1)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // 6
                text: "Excellent. A lot has been going on since you were last here.",
                after: () => {
                    this.showOptionsAtIndex(2)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // 7
                text: "Yes. Seeds. Scientifically speaking, they're called Poaceae - Zea Mays.",
            },
            { // 8
                text: "Can you guess what the non-scientific name is?",
                after: () => {
                    this.showOptionsAtIndex(3)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // 9
                text: "You'll recall that Herbert escaped. After the... unfortunate incident with Rookie surrendering his spy phone to the suspect.",
            },
            { // 10
                text: "Luckily, Herbert left a clue.",
                after: () => {
                    this.showOptionsAtIndex(4)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // 11
                text: "Flowers? Good guess. But I doubt Herbert enjoys tending to daisies.",
                after: () => {
                    this.showOptionsAtIndex(3)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // 12
                text: "Nice guess. But even eating a jalapeno plant wouldn't warm Herbert enough to make him happy.",
                after: () => {
                    this.showOptionsAtIndex(3)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // 13
                text: "No, though I have tried inventing those. So many explosions... anyway, try again.",
                after: () => {
                    this.showOptionsAtIndex(3)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // 14
                text: "Yes! The seeds are corn. Nothing special at all.",
                after: () => {
                    this.showOptionsAtIndex(5)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // 15
                text: "As far as I can tell, nothing. The seeds have been a dead end so far.",
            },
            { // 16
                text: "The reason you're here is actually because a number of items are missing from the Gift Shop.",
            },
            { // 17
                text: "Jet Pack Guy and Rookie are already on the scene. Your mission will be to join their investigation and see what you can find.",
                after: () => {
                    this.showOptionsAtIndex(6)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // 18
                text: "What I need is for you to head to the Gift Shop. Some items are missing, and I'd like you to help investigate.",
            },
            { // 19
                text: "Rookie and Jet Pack Guy are already on the scene.",
                after: () => {
                    this.showOptionsAtIndex(6)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // 20
                text: "Yes, but there's no proof. We need evidence. And that, of course, is your specialty. Please be careful.",
                after: () => {
                    this.showOptionsAtIndex(7)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // 21
                text: "Always a possibility, but Rookie has been very careful lately.",
            },
            { // 22
                text: "The PSA suspects that Herbert's responsible, but we need proof. Be cautious, agent.",
                after: () => {
                    this.showOptionsAtIndex(7)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // 23
                text: "Good luck.",
                after: () => {
                    this.close()
                    this.world.party.updateCheckpoint(1)
                }
            },
            { // 24
                text: "Good thinking Agent, but I disabled the phone's gadgets when Herbert escaped. He can't access the PSA technology unless its systems are rebooted.",
                after: () => {
                    this.close()
                    this.world.party.updateCheckpoint(1)
                }
            },
            { // 25
                text: "Jet Pack Guy is in the office at the Gift Shop. Rookie's there too. In fact, he's been there for quite some time... Good luck.",
                after: () => {
                    this.showOptionsAtIndex(8)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // 26
                text: "Please keep me informed.",
                after: () => {
                    this.close()
                }
            },


            /* ===== As an existing agent; When herbert first breaks into the mainframe ===== */
            { // 27
                text: "Agent! We have a Code Red emergency!",
                after: () => {
                    this.showOptionsAtIndex(9)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // 28
                text: "I suspect the PSA main computer is being taken over. Someone's trying to break into our system!",
                after: () => {
                    this.softClose()
                    this.world.room.herbertAppears()
                    this.currentMouth.__Animation.stop()
                }
            },

            /* ===== As a new agent; When herbert first breaks into the mainframe ===== */
            { // 29
                text: "Salutations! Who are you?",
                after: () => {
                    this.showOptionsAtIndex(10)
                    this.currentMouth.__Animation.stop()
                }
            },
            { // 30
                text: "Ah, so that was you! Welcome to the PSA. Sorry for appearing stressed, we're having some difficulty with the main computer right now.",
                after: () => {
                    this.softClose()
                    this.world.room.herbertAppears()
                    this.currentMouth.__Animation.stop()
                }
            },
            //Now they merge here
            { // 31
                text: "HERBERT!",
            },
            { // 32
                text: "Just as we suspected. YOU are responsible!",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('herbert', 0)
                }
            },
            { // 33
                text: "Keep him talking. I'll work on the computers.",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('rookie', 22)
                }
            },
            { // 34
                text: "I've temporarily locked-down the PSA mainframe. It'll stop Herbert from using our technology, but we can't use it either.",
            },
            { // 35
                text: "Unfortunately, it won't stop his broadcast.",
                after: () => {
                    this.currentMouth.__Animation.stop()
                    this.showOptionsAtIndex(11)
                }
            },
            { // 36
                text: "First, head to the Ski Village and shut down Herbert's broadcast. We cannot let him compromise our identity.",
            },
            { // 37
                text: "Then find him and apprehend him once and for all.",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('rookie', 26)
                }
            },
            { // 38
                text: "Stop Herbert's broadcast, then track him down. We can't let him reveal our identities.",
                after: () => {
                    this.close()
                }
            },
            // back at HQ after the popcorn bomb is teleported there
            { // 39
                text: "Agent! You're back! What happened? Where's Herbert? And what's this?",
                after: () => {
                    this.softClose()
                    this.world.room.garyWalksToBomb()
                }
            },
            { // 40
                text: "Oh my... this looks like a souped-up popcorn popper...",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('rookie', 43)
                }
            },
            // herbert disappears from the screens again
            { // 41
                text: "Agents, we don't have much time. Try and find a way out of here while I try to disarm the machine!",
                after: () => {
                    this.world.party.updateCheckpoint(7)
                    this.world.room.getJiggyWithIt()
                    this.world.room.rookie.move(220, 600)
                    this.world.room.rookie.afterMove = () => {
                        this.world.room.rookie.playFrame(4)
                        this.world.room.door.__Animation.play()
                    }
                    this.close()
                }
            },
            // before you solve the EPF key thing
            { // 42
                text: "Agent, you need to find a way out of here quickly!",
            },
            { // 43
                text: "I don't think I can disarm this machine.",
                after: () => this.close()
            },
            // small thing with Dot
            { // 44
                text: "Dot! We need to evacuate immediately.",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('dot', 2)
                }
            },
            // after explosion, outside in village
            { // 45
                text: "Yes, it seems so Rookie. But the important part is that we're all safe.",
                addition: () => {
                    this.currentMouth.__Animation.stop()
                    this.ringring = this.world.soundManager.playSfx('phone-ring')
                }
            },
            { // 46
                text: "*phone rings*",
                addition: () => {
                    this.currentMouth.__Animation.play()
                    if(this.ringring) this.world.soundManager.remove(this.ringring)
                }
            },
            // gary gets a call from shawty
            { // 47
                text: "Hello? Yes. I understand.",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('dot', 4)
                }
            },
            { // 48
                text: "Excuse me, Agents. That was the Director on the phone, and I've been given some important information."
            },
            { // 49
                text: "It seems that Herbert's attack has disabled all PSA resources."
            },
            { // 50
                text: "The HQ has been reduced to rubble, and what's left could take a lot of work to get back online.",
            },
            { // 51
                text: "And seeing that Herbert was able to steal a lot of info from our computers, all this means...",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('rookie', 47)
                }
            },
            { // 52
                text: "It means the PSA is out of commission... for now. We will make efforts to rebuild the HQ and the PSA systems in the coming weeks.",
            },
            { // 53
                text: "In the meantime, we will put more resources into our co-agency, the Elite Penguin Force.",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('dot', 7)
                }
            },
            { // 54
                text: "Agent, I can't say too much in view of the public...",
            },
            { // 55
                text: "But what I can tell you is that the EPF is an ultra-top secret unit that protects the island. They'll be taking over this operation for the time being.",
                after: () => {
                    this.currentMouth.__Animation.stop()
                    this.showOptionsAtIndex(12)
                }
            },
            { // 56
                text: "Now, if you'll excuse me, I need to dig my way into my lab...",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('rookie', 49)
                }
            }
        ]
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(i) {
        for(let sprite of this.everything) sprite.visible = true;
        this.softblock.visible = false

        this.hasGuessedSeed = false
        this.options = [...this._options]
        this.currentMouth = this.mouth1
        super.show(i)

        if(this.index == 27 || this.index == 29 || this.index == 31 || this.index == 33 || this.index == 40 || this.index == 41 || this.index == 42 || this.index >= 45) {
            this.showMouth(2)
        } else {
            this.showMouth(1)
        }
    }

    showMouth(num) {
        this.currentMouth = this[`mouth${num}`]
        this.currentMouth.visible = true
        this.currentMouth.__Animation.play()

        this[`mouth${num == 1 ? 2 : 1}`].visible = false
        this[`mouth${num == 1 ? 2 : 1}`].__Animation.stop()
    }

    softClose() {
        for(let sprite of this.everything) sprite.visible = false;
        this.softblock.visible = true
    }

    guessSeed(seed) {
        this.options[3].splice(this.options[3].findIndex((obj) => obj.seed == seed), 1)
        if(!this.hasGuessedSeed) {
            this.options[3].push({
                text: "Are those corn seeds?",
                callback: () => {
                    this.currentMouth.__Animation.play()
                    this.showDialogueAtIndex(14)
                }
            })
        }
        this.hasGuessedSeed = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */