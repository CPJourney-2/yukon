import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class QuestReward extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // quest
        const quest = scene.add.sprite(0, 0, "quest-reward", "easy0001");
        quest.scaleX = 0.4;
        quest.scaleY = 0.4;
        this.add(quest);

        this.quest = quest;

        /* START-USER-CTR-CODE */
        this.twirlTints = {
            'easy': '0x15AD39',
            'medium': '0xFEDD24',
            'hard': '0x0D66E3',
            'extreme': '0xA90021'
        }
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Sprite} */
    quest;

    /* START-USER-CODE */

    showReward(difficulty) {
        this.quest.setTexture('quest-reward', `${difficulty}0001`);
        this.quest.play(`quest_${difficulty}`)
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
