import DialogueWidget from '../DialogueWidget'

import { Button, Animation, Interactive } from '@components/components'

import DialogueBubble from '../DialogueBubble'

export const preload = {
    key: [
        'dialogue-common-pack',
        'rookiefairdialogue-pack'
    ],
    url: [
        'assets/media/interface/game/dialogue/dialogue-common-pack.json',
        'assets/media/interface/game/dialogue/rookiefair/rookiefairdialogue-pack.json'
    ],
    loadString: ['loading', 'Rookie']
}

/* START OF COMPILED CODE */

export default class RookieDialogue extends DialogueWidget {

    constructor(scene, x, y) {
        super(scene, x ?? -448.81666998318946, y ?? 354.27837245991276);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.softblock;
        /** @type {DialogueBubble} */
        this.bubble;
        /** @type {Array<any>} */
        this.pages;
        /** @type {Array<any>} */
        this.arrows;
        /** @type {Array<any>} */
        this.everything;


        // softblock
        const softblock = scene.add.rectangle(1205, 126, 1520, 960);
        softblock.scaleX = 1.0916079383084136;
        softblock.scaleY = 1.1123063932293908;
        softblock.isFilled = true;
        softblock.fillColor = 0;
        softblock.fillAlpha = 0.2;
        this.add(softblock);

        // rookie
        const rookie = scene.add.image(786, 337, "rookiefairdialogue", "rookie");
        this.add(rookie);

        // mouth0001
        const mouth0001 = scene.add.sprite(786, 166, "rookiefairdialogue", "mouth0001");
        this.add(mouth0001);

        // bubble
        const bubble = new DialogueBubble(scene, 894, 428);
        bubble.visible = true;
        this.add(bubble);

        // lists
        const pages = [];
        const arrows = [];
        const everything = [];

        // softblock (components)
        new Interactive(softblock);

        // mouth0001 (components)
        const mouth0001Animation = new Animation(mouth0001);
        mouth0001Animation.key = "mouth";
        mouth0001Animation.end = 18;

        this.softblock = softblock;
        this.bubble = bubble;
        this.pages = pages;
        this.arrows = arrows;
        this.everything = everything;

        /* START-USER-CTR-CODE */

        this.dialogue = [
            {
                text: "Hiya! Welcome to my second favorite party of the year: The Fair!",
            },
            {
                text: "There's SO much to do this time around, and I know you're eager to get to those games, so I'll make this quick, I promise!",
            },
            {
                text: "First off, there's the usual classic mini-games scattered across the island. Each of them can earn you tickets, which you can then exchange for prizes!",
            },
            {
                text: "There are three prize booths which can be found at the Ski Village, Forest, and Puffle Circus Entrance. Each of them has their own theme, too! My favorite is the Ski Village's!",
            },
            {
                text: "One of my favorite things is the all-new Amazement Park! You can find it at the Dock. Within it, there are all kinds of attractions you can go on. Some of them can even earn you some tickets!",
            },
            {
                text: "Finally, there's the Island Coaster, located at the Ski Hill! It spans the entire length of the island, which is a LOT. I don't wanna tell you too much, but you should definitely try it yourself! It's AWESOME!",
            },
            {
                text: "And of course, don't forget to complete as many Party Quests as you can to earn those sweet, sweet gems!",
            },
            {
                text: "OH! One more thing! Rockhopper has docked at the Beach! You can meet both him and me throughout the party!",
            },
            {
                text: "Ok, I'll see you around! That Island Coaster is calling my name! WOO-HOO!!",
                after: () => {
                    this.world.client.setInteractionAsSeen('rookie_fair_intro')
                    this.interface.destroyWidget(this)
                }
            },
        ];
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */