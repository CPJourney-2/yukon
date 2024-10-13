import { Interactive, NineSlice, Button } from '@components/components'

import StampItem from '@scenes/interface/game/stampbook/StampItem'

/* START OF COMPILED CODE */

export default class StampListView extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.stampListView0001;
        /** @type {Phaser.GameObjects.Container} */
        this.prevbtn;
        /** @type {Phaser.GameObjects.Container} */
        this.nextbtn;
        /** @type {StampItem} */
        this.stampItem_3;
        /** @type {StampItem} */
        this.stampItem_2;
        /** @type {StampItem} */
        this.stampItem_1;
        /** @type {StampItem} */
        this.stampItem_m2;
        /** @type {StampItem} */
        this.stampItem_m1;


        // stampListView0001
        const stampListView0001 = scene.add.image(289, 3, "main-stampcoins", "stampListView0003");
        this.add(stampListView0001);

        // prevbtn
        const prevbtn = scene.add.container(0, -1);
        this.add(prevbtn);

        // prevbtn_1
        const prevbtn_1 = scene.add.image(0, 1, "main", "blue-button");
        prevbtn_1.flipX = true;
        prevbtn.add(prevbtn_1);

        // blue_arrow
        const blue_arrow = scene.add.image(0, 0, "main", "blue-arrow");
        blue_arrow.angle = -90;
        prevbtn.add(blue_arrow);

        // nextbtn
        const nextbtn = scene.add.container(578, -2);
        this.add(nextbtn);

        // nextbtn_1
        const nextbtn_1 = scene.add.image(0, 2, "main", "blue-button");
        nextbtn.add(nextbtn_1);

        // blue_arrow_1
        const blue_arrow_1 = scene.add.image(0, 0, "main", "blue-arrow");
        blue_arrow_1.angle = -90;
        blue_arrow_1.flipY = true;
        nextbtn.add(blue_arrow_1);

        // stampItem_3
        const stampItem_3 = new StampItem(scene, 445, 3);
        this.add(stampItem_3);

        // stampItem_2
        const stampItem_2 = new StampItem(scene, 289, 3);
        this.add(stampItem_2);

        // stampItem_1
        const stampItem_1 = new StampItem(scene, 133, 3);
        this.add(stampItem_1);

        // stampItem_m2
        const stampItem_m2 = new StampItem(scene, 367, 3);
        stampItem_m2.visible = false;
        this.add(stampItem_m2);

        // stampItem_m1
        const stampItem_m1 = new StampItem(scene, 211, 3);
        stampItem_m1.visible = false;
        this.add(stampItem_m1);

        // prevbtn_1 (components)
        const prevbtn_1Button = new Button(prevbtn_1);
        prevbtn_1Button.spriteName = "blue-button";
        prevbtn_1Button.callback = () => this.onPrev();
        prevbtn_1Button.activeFrame = true;

        // nextbtn_1 (components)
        const nextbtn_1Button = new Button(nextbtn_1);
        nextbtn_1Button.spriteName = "blue-button";
        nextbtn_1Button.callback = () => this.onNext();
        nextbtn_1Button.activeFrame = true;

        this.stampListView0001 = stampListView0001;
        this.prevbtn = prevbtn;
        this.nextbtn = nextbtn;
        this.stampItem_3 = stampItem_3;
        this.stampItem_2 = stampItem_2;
        this.stampItem_1 = stampItem_1;
        this.stampItem_m2 = stampItem_m2;
        this.stampItem_m1 = stampItem_m1;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    resetContent(stampList) {
        this.offset = 0
        this.stamps = stampList
        this.updatePage()
    }

    updatePage() {
        this.currentPageStamps = this.stamps.slice(this.offset * 3, (this.offset + 1) * 3)
        if(this.currentPageStamps.length <= 0) {
            console.warn("Invalid or empty stamp list in StampListView")
            if(this.offset != 0) {
                this.offset = 0
                this.updatePage()
            }
        } else if(this.currentPageStamps.length == 1) {
            this.stampItem_2.visible = true
            this.stampItem_1.visible = this.stampItem_3.visible = this.stampItem_m1.visible = this.stampItem_m2.visible = false
            this.setStampObjectInfo(this.stampItem_2, this.currentPageStamps[0])
            this.stampListView0001.setFrame("stampListView0001")
        } else if(this.currentPageStamps.length == 2) {
            this.stampItem_m1.visible = this.stampItem_m2.visible = true
            this.stampItem_1.visible = this.stampItem_3.visible = this.stampItem_2.visible = false
            this.setStampObjectInfo(this.stampItem_m1, this.currentPageStamps[0])
            this.setStampObjectInfo(this.stampItem_m2, this.currentPageStamps[1])
            this.stampListView0001.setFrame("stampListView0002")
        } else if(this.currentPageStamps.length >= 3) {
            if(this.currentPageStamps.length > 3) console.warn("StampListView incorrectly slices, stamps will be missing!!")
            this.stampItem_m1.visible = this.stampItem_m2.visible = false
            this.stampItem_1.visible = this.stampItem_3.visible = this.stampItem_2.visible = true
            this.setStampObjectInfo(this.stampItem_1, this.currentPageStamps[0])
            this.setStampObjectInfo(this.stampItem_2, this.currentPageStamps[1])
            this.setStampObjectInfo(this.stampItem_3, this.currentPageStamps[2])
            this.stampListView0001.setFrame("stampListView0003")
        }

        this.prevbtn.visible = this.offset != 0
        this.nextbtn.visible = (this.offset + 1) * 3 < this.stamps.length
    }

    setStampObjectInfo(stampObject, stampId) {
        stampObject.stamp = this.parent.world.stampController.getStamp(stampId)
        stampObject.unlocked = true
        stampObject.updateContent()
    }

    onNext() {
        this.offset += 1
        this.updatePage()
    }

    onPrev() {
        this.offset -= 1
        this.updatePage()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
