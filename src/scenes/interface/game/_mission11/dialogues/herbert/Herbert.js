
import DialogueWidget from '../DialogueWidget'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

import DialogueBubble from '../DialogueBubble'

export const preload = {
    key: [
        'mission11-dialogue-common-pack',
        'mission11-herbert-pack'
    ],
    url: [
        'assets/media/interface/game/_mission11/dialogues/mission11-dialogue-common-pack.json',
        'assets/media/interface/game/_mission11/dialogues/mission11-herbert-pack.json'
    ],
    loadString: ['loading', 'Herbert']
}

/* START OF COMPILED CODE */

export default class Herbert extends DialogueWidget {

    constructor(scene, x, y) {
        super(scene, x ?? 0.00438428236389643, y ?? 0.0661551881702878);

        /** @type {Phaser.GameObjects.Sprite} */
        this.laugh;
        /** @type {Phaser.GameObjects.Sprite} */
        this.arm;
        /** @type {Phaser.GameObjects.Image} */
        this.common_body;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mouth;
        /** @type {Phaser.GameObjects.Sprite} */
        this.eyes1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.brows1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.eyes2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.brows2;
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

        // laugh
        const laugh = scene.add.sprite(302, 625, "mission11-herbert", "laugh0001");
        laugh.visible = false;
        this.add(laugh);

        // arm
        const arm = scene.add.sprite(527, 408, "mission11-herbert", "2/arm0001");
        arm.visible = false;
        this.add(arm);

        // common_body
        const common_body = scene.add.image(302, 627, "mission11-herbert", "common/body");
        this.add(common_body);

        // mouth
        const mouth = scene.add.sprite(338, 358, "mission11-herbert", "common/mouth0001");
        mouth.visible = false;
        this.add(mouth);

        // eyes1
        const eyes1 = scene.add.sprite(325, 264, "mission11-herbert", "1/eyes0001");
        eyes1.visible = false;
        this.add(eyes1);

        // brows1
        const brows1 = scene.add.sprite(337, 228, "mission11-herbert", "1/brows0001");
        brows1.visible = false;
        this.add(brows1);

        // eyes2
        const eyes2 = scene.add.sprite(324, 254, "mission11-herbert", "2/eyes0001");
        eyes2.visible = false;
        this.add(eyes2);

        // brows2
        const brows2 = scene.add.sprite(343, 221, "mission11-herbert", "2/brows0001");
        brows2.visible = false;
        this.add(brows2);

        // bubble
        const bubble = new DialogueBubble(scene, 397, 674);
        this.add(bubble);

        // lists
        const pages = [];
        const arrows = [];

        // block_1 (components)
        new Interactive(block_1);

        // laugh (components)
        const laughAnimation = new Animation(laugh);
        laughAnimation.key = "laugh";
        laughAnimation.end = 15;
        laughAnimation.repeat = 0;
        laughAnimation.showOnStart = true;

        // arm (components)
        const armAnimation = new Animation(arm);
        armAnimation.key = "2/arm";
        armAnimation.end = 180;
        armAnimation.autoPlay = false;
        armAnimation.showOnStart = true;
        armAnimation.hideOnComplete = true;

        // mouth (components)
        const mouthAnimation = new Animation(mouth);
        mouthAnimation.key = "common/mouth";
        mouthAnimation.end = 18;
        mouthAnimation.showOnStart = true;

        // eyes1 (components)
        const eyes1Animation = new Animation(eyes1);
        eyes1Animation.key = "1/eyes";
        eyes1Animation.end = 180;
        eyes1Animation.autoPlay = false;
        eyes1Animation.showOnStart = true;
        eyes1Animation.hideOnComplete = true;

        // brows1 (components)
        const brows1Animation = new Animation(brows1);
        brows1Animation.key = "1/brows";
        brows1Animation.end = 180;
        brows1Animation.autoPlay = false;
        brows1Animation.showOnStart = true;
        brows1Animation.hideOnComplete = true;

        // eyes2 (components)
        const eyes2Animation = new Animation(eyes2);
        eyes2Animation.key = "2/eyes";
        eyes2Animation.end = 180;
        eyes2Animation.autoPlay = false;
        eyes2Animation.showOnStart = true;
        eyes2Animation.hideOnComplete = true;

        // brows2 (components)
        const brows2Animation = new Animation(brows2);
        brows2Animation.key = "2/brows";
        brows2Animation.end = 180;
        brows2Animation.autoPlay = false;
        brows2Animation.showOnStart = true;
        brows2Animation.hideOnComplete = true;

        this.laugh = laugh;
        this.arm = arm;
        this.common_body = common_body;
        this.mouth = mouth;
        this.eyes1 = eyes1;
        this.brows1 = brows1;
        this.eyes2 = eyes2;
        this.brows2 = brows2;
        this.bubble = bubble;
        this.pages = pages;
        this.arrows = arrows;

        /* START-USER-CTR-CODE */
        this.laugh.on('animationcomplete', () => {
            this.laugh.__Animation.gotoAndPlay(7)
        })

        this.options = [
            [ // 0
                {
                    text: "We know what you're up to.",
                    callback: () => {
                        this.mouth.__Animation.play()
                        this.showDialogueAtIndex(7)
                    }
                },
                {
                    text: "Why don't you just give up? You'll never get away with this.",
                    callback: () => {
                        this.mouth.__Animation.play()
                        this.showDialogueAtIndex(6)
                    }
                },
                {
                    text: "I'm looking forward to capturing you for the last time, Herbert.",
                    callback: () => {
                        this.mouth.__Animation.play()
                        this.showDialogueAtIndex(8)
                    }
                },
            ],
            [ // 1
                {
                    text: "Give it up, Herbert. There's no escape from this...",
                    callback: () => {
                        this.mouth.__Animation.play()
                        this.showDialogueAtIndex(31)
                    }
                }
            ]
        ]
        this.dialogue = [
            // talking to hq thing idk im tired man
            { // 0
                text: "Indeed, my fowl friends. It is I. Herbert P. Bear, Esquire. And once again, I have defeated you with my superiority.",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('rookie', 20)
                }
            },
            { // 1
                text: "Mwah ha ha. Of course it does!",
                addition: () => {
                    this.laugh.visible = false
                    this.laugh.__Animation.stop()
                    this.common_body.visible = true
                    this.mouth.__Animation.play()
                    this.brows1.__Animation.play()
                    this.eyes1.__Animation.play()
                }
            },
            { // 2
                text: "And you, little penguin...",
                addition: () => {
                    this.showPose2()
                }
            },
            { // 3
                text: "I have not yet formally given you my gratitude for providing me with use of your spy phone the last time we met.",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('rookie', 21)
                    this.world.room.herbert.play('screen-phonedown')
                    this.world.room.herbert.once('animationcomplete', () => this.world.room.herbert.play('screen-blink'))
                }
            },
            { // 4
                text: "Pardon me? Seriously?",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('rookie', 23)
                }
            },
            { // 5
                text: "I'm a vegetarian, you daft creature!",
                after: () => {
                    this.world.room.herbert.play('screen-blink')
                    this.showOptionsAtIndex(0)
                    this.mouth.__Animation.stop()
                }
            },
            { // 6
                text: "Of course I will get away with this. I'm sure you will soon see I'm much smarter than you.",
                after: () => this.showDialogueAtIndex(9)
            },
            { // 7
                text: "Do you now? I'm patient, but I don't have enough patience to wait until you guess my genius plan. It'll never happen.",
                after: () => this.showDialogueAtIndex(9)
            },
            { // 8
                text: "That will not happen. You are inferior. I will prevail.",
                after: () => this.showDialogueAtIndex(9)
            },
            { // 9
                text: "As you can see, I've completely taken over the PSA main computer.",
            },
            { // 10
                text: "I now have all the information on your computers.",
            },
            { // 11
                text: "And in mere moments I shall blow the cover of the PSA to all of Club Penguin. Every channel. Every frequency.",
                addition: () => this.mouth.__Animation.stop()
            },
            { // 12
                text: "*click click click*",
                addition: () => this.mouth.__Animation.play()
            },
            { // 13
                text: "Well put, Klutzy. The Penguin SECRET Agency won't be so secret. Its cover blown to smithereens.",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('rookie', 24)
                }
            },
            { // 14
                text: "I'm done with my plans being wrecked. I'm sick of the annoyances.",
            },
            { // 15
                text: "I want to be able to do whatever I wish. Whenever I wish. Wherever I wish! AND THERE'S NOTHING YOU CAN DO TO STOP ME!",
                after: () => {
                    this.close()
                    this.world.room.herbert.visible = false
                    this.world.room.gary.playFrame(8)
                    this.world.room.rookie.playFrame(2)
                    this.world.party.showDialogue('gary', 34)
                }
            },
            // ski village yapfest on the big screen
            { // 16
                text: "Welcome, one and all, to a very special show.",
            },
            { // 17
                text: "I am your host, Herbert P. Bear, Esquire...",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('rookie', 28)
                }
            },
            // yapping at the village if you dont have the dvd yet
            { // 18
                text: "First, a little about myself.",
            },
            { // 19
                text: "The two best things about me are my unbounded genius, and my humble nature...",
            },
            { // 20
                text: "Not only am I smarter than the average polar bear, but also stronger and much more awesome.",
            },
            { // 21
                text: "Many often comment on my striking good looks. And to them I say... you are right!",
            },
            { // 22
                text: "Hmm... I wonder if there may be some viewers just joining us now. I should start from the beginning...",
                after: () => this.close()
            },
            // after the dvd has been replaced
            { // 23
                text: "Shortly I will begin a very special public announcement... but first just a few more facts about myself!",
            },
            { // 24
                text: "I am a brilliant genius with amazing schemes.",
                after: () => {
                    this.close()
                    this.world.party.showDialogue('rookie', 38)
                }
            },
            // after the maze, in front of the computer
            { // 25
                text: "And then he just gave me his phone! He just gave it to me!",
            },
            { // 26
                text: "Getting back to my incredible brain. On average, it generates on billion brilliant ideas per minute.",
            },
            { // 27
                text: "And now I will reveal to you the greatest secret of all... a list of PSA agents, and one in particular, who has been trying to foil my plans...",
            },
            // he spots u like !!!!!!!!!
            { // 28
                text: "Oh ho! My favorite secret agent. Even earlier than expected, but still too late! I'm about to reveal your identity to the entire island!",
                addition: () => this.showLaugh()
            },
            { // 29
                text: "HAHAHAHAHAHAHAHA!",
                after: () => {
                    this.world.party.cookies.herbertShowdown = true
                    this.world.room.plugBlock.visible = false
                    this.close()
                }
            },
            // agent pulls the plug on his life support
            { // 30
                text: "Oh dear! It looks like you've pulled the plug on my little computer take-over. You've foiled my plan again.",
                after: () => {
                    this.mouth.__Animation.stop()
                    this.showOptionsAtIndex(1)
                }
            },
            { // 31
                text: "HA! When you unplugged my computer, you fixed the PSA technology.",
                addition: () => this.showPose2()
            },
            { // 32
                text: "ALL PSA technology! Including my phone's teleporter!",
            },
            { // 33
                text: "Say hello to the penguin in the lab coat and silly glasses, and give him this gift from me!",
                after: () => {
                    this.close()
                    this.world.room.uhOh()
                }
            },
            //hq monitors again after the bomb has been teleported
            { // 34
                text: "At last. My plan has worked perfectly. One more little question for you...",
            },
            { // 35
                text: "Do you happen to know how much popcorn it takes to destroy a building?",
            },
            { // 36
                text: "Well, I do!",
            },
            { // 37
                text: "So long, you fine fowl fools! I've got the upper paw!",
            },
            { // 38
                text: "Now if you'll excuse us, we've got the PSA HQ to stop... I mean POP!",
                after: () => {
                    this.close()
                    this.world.room.herbert.play('screen-pixelanim')
                    this.world.party.showDialogue('rookie', 44)
                }
            },
            { // 39
                text: `Muahahahaha! You dare chase after me in MY corn maze? You're nothing against my bots, ${this.world.client.penguin.username_verified ? this.world.client.penguin.displayName : 'agent'}!`,
                after: () => {
                    this.close();
                    if (this.world.room.id === 851) {
                        this.world.room.exitMaze();
                    } else {
                        this.world.room.triggerRoom(851);
                    }
                }
            }
        ]
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(i) {
        super.show(i)

        if(this.index == 1 || this.index === 39) {
            this.showLaugh()
            return
        }

        this.showPose1()
    }

    showPose1() {
        this.brows1.__Animation.play()
        this.eyes1.__Animation.play()
        this.brows2.__Animation.stop()
        this.eyes2.__Animation.stop()
        this.laugh.__Animation.stop()
        this.arm.__Animation.stop()
        this.mouth.visible = true
        this.mouth.__Animation.play()
        this.common_body.visible = true
        this.laugh.visible = false
    }

    showPose2() {
        this.brows2.__Animation.play()
        this.eyes2.__Animation.play()
        this.brows1.__Animation.stop()
        this.eyes1.__Animation.stop()
        this.laugh.__Animation.stop()
        this.arm.__Animation.play()
        this.mouth.visible = true
        this.mouth.__Animation.play()
        this.common_body.visible = true
        this.laugh.visible = false
    }

    showLaugh() {
        this.brows1.__Animation.stop()
        this.eyes1.__Animation.stop()
        this.brows2.__Animation.stop()
        this.eyes1.__Animation.stop()
        this.laugh.__Animation.stop()
        this.arm.__Animation.stop()
        this.mouth.visible = false
        this.common_body.visible = false

        this.laugh.visible = true
        this.laugh.__Animation.play()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */