import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive } from '@components/components'

import ArchiveNewspaperItem from './ArchiveNewspaperItem'

export const preload = {
    key: 'archives-pack',
    url: 'assets/media/interface/game/archives/archives-pack.json',
    loadString: ['loading', 'Archives']
}

/* START OF COMPILED CODE */

export default class Archives extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {ArchiveNewspaperItem} */
        this.newspaperItem_5;
        /** @type {ArchiveNewspaperItem} */
        this.newspaperItem_4;
        /** @type {ArchiveNewspaperItem} */
        this.newspaperItem_3;
        /** @type {ArchiveNewspaperItem} */
        this.newspaperItem_2;
        /** @type {ArchiveNewspaperItem} */
        this.newspaperItem_1;
        /** @type {ArchiveNewspaperItem} */
        this.newspaperItem;


        // block
        const block = scene.add.rectangle(-12, 10, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // bg_1
        const bg_1 = scene.add.image(0, 0, "archives", "bg");
        this.add(bg_1);

        // newspaperItem_5
        const newspaperItem_5 = new ArchiveNewspaperItem(scene, 9, -111);
        newspaperItem_5.scaleX = 0.7;
        newspaperItem_5.scaleY = 0.7;
        newspaperItem_5.angle = 0;
        this.add(newspaperItem_5);

        // newspaperItem_4
        const newspaperItem_4 = new ArchiveNewspaperItem(scene, 7, -64);
        newspaperItem_4.scaleX = 0.73;
        newspaperItem_4.scaleY = 0.73;
        newspaperItem_4.angle = 1;
        this.add(newspaperItem_4);

        // newspaperItem_3
        const newspaperItem_3 = new ArchiveNewspaperItem(scene, 7, -12);
        newspaperItem_3.scaleX = 0.77;
        newspaperItem_3.scaleY = 0.77;
        newspaperItem_3.angle = -0.5;
        this.add(newspaperItem_3);

        // newspaperItem_2
        const newspaperItem_2 = new ArchiveNewspaperItem(scene, 9, 47);
        newspaperItem_2.scaleX = 0.81;
        newspaperItem_2.scaleY = 0.81;
        newspaperItem_2.angle = -1;
        this.add(newspaperItem_2);

        // newspaperItem_1
        const newspaperItem_1 = new ArchiveNewspaperItem(scene, 8, 111);
        newspaperItem_1.scaleX = 0.85;
        newspaperItem_1.scaleY = 0.85;
        newspaperItem_1.angle = 1;
        this.add(newspaperItem_1);

        // newspaperItem
        const newspaperItem = new ArchiveNewspaperItem(scene, 9, 167);
        newspaperItem.scaleX = 0.9;
        newspaperItem.scaleY = 0.9;
        this.add(newspaperItem);

        // front
        const front = scene.add.image(3, 271, "archives", "front");
        this.add(front);

        // closebtn
        const closebtn = scene.add.image(646, -421, "archives", "closebtn");
        this.add(closebtn);

        // block (components)
        new Interactive(block);

        // newspaperItem_5 (prefab fields)
        newspaperItem_5.issueOffset = 6;

        // newspaperItem_4 (prefab fields)
        newspaperItem_4.issueOffset = 5;

        // newspaperItem_3 (prefab fields)
        newspaperItem_3.issueOffset = 4;

        // newspaperItem_2 (prefab fields)
        newspaperItem_2.issueOffset = 3;

        // newspaperItem_1 (prefab fields)
        newspaperItem_1.issueOffset = 2;

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.spriteName = "closebtn";
        closebtnButton.callback = () => {this.close()};
        closebtnButton.activeFrame = true;

        this.newspaperItem_5 = newspaperItem_5;
        this.newspaperItem_4 = newspaperItem_4;
        this.newspaperItem_3 = newspaperItem_3;
        this.newspaperItem_2 = newspaperItem_2;
        this.newspaperItem_1 = newspaperItem_1;
        this.newspaperItem = newspaperItem;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()

        /**
         * Phaser Editor documentations says:
         *   "It is important that you keep in mind
         *    that if you create a dynamic prefab
         *    instance, and it requires the scene-awake
         *    event, then you should call it manually"
         *
         * Misabr says:
         *   "Phaser Editor should heck off"
         */

        this.newspaperItem_5.updateText()
        this.newspaperItem_4.updateText()
        this.newspaperItem_3.updateText()
        this.newspaperItem_2.updateText()
        this.newspaperItem_1.updateText()
        this.newspaperItem.updateText()

    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
