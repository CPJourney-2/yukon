import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class QuestItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // quest_item
        const quest_item = scene.add.image(0, 0, "partyquests", "quest_item");
        this.add(quest_item);

        // quest_title
        const quest_title = scene.add.text(-293, -12, "", {});
        quest_title.text = "Have fun playing Club Penguin Journey";
        quest_title.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(quest_title);

        // quest_difficulty
        const quest_difficulty = scene.add.image(-324, 0, "partyquests", "quest_easy");
        quest_difficulty.scaleX = 0.25;
        quest_difficulty.scaleY = 0.25;
        this.add(quest_difficulty);

        // quest_done
        const quest_done = scene.add.image(325, 0, "partyquests", "quest_done");
        quest_done.scaleX = 0.25;
        quest_done.scaleY = 0.25;
        quest_done.visible = false;
        this.add(quest_done);

        // quest_community
        const quest_community = scene.add.image(-349, -20, "partyquests", "quest_community");
        quest_community.scaleX = 0.75;
        quest_community.scaleY = 0.75;
        quest_community.visible = false;
        this.add(quest_community);

        this.quest_title = quest_title;
        this.quest_difficulty = quest_difficulty;
        this.quest_done = quest_done;
        this.quest_community = quest_community;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Text} */
    quest_title;
    /** @type {Phaser.GameObjects.Image} */
    quest_difficulty;
    /** @type {Phaser.GameObjects.Image} */
    quest_done;
    /** @type {Phaser.GameObjects.Image} */
    quest_community;

    /* START-USER-CODE */

    setData(questData) {
        this.quest_title.setText(questData.description);
        this.quest_difficulty.setTexture('partyquests', `quest_${questData.difficulty}`);
        this.quest_done.setVisible(questData.completed);
        this.quest_community.setVisible(questData.community);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
