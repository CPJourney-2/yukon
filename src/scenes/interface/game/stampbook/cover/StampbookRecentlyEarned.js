import { Button, Animation, Interactive, SimpleButton } from '@components/components'
import StampItem from '@scenes/interface/game/stampbook/StampItem'

/* START OF COMPILED CODE */

export default class StampbookRecentlyEarned extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg_1;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.stampbg;
        /** @type {Phaser.GameObjects.Text} */
        this.congratsText;
        /** @type {Phaser.GameObjects.Container} */
        this.topStuff;
        /** @type {Phaser.GameObjects.Container} */
        this.nextbtn;
        /** @type {Phaser.GameObjects.Container} */
        this.prevbtn;


        // block
        const block = scene.add.rectangle(0, 0, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // bg_1
        const bg_1 = scene.add.nineslice(0, 0, "prompt", "window", 734, 626, 44, 39, 40, 41);
        this.add(bg_1);

        // stampbg
        const stampbg = scene.add.nineslice(0, 0, "stampbook-inside", "stampbg", 475, 300, 43, 40, 36, 39);
        this.add(stampbg);

        // congratsText
        const congratsText = scene.add.text(0, 183, "", {});
        congratsText.setOrigin(0.5, 0);
        congratsText.text = "Congratulations on earning\n420 stamps!";
        congratsText.setStyle({ "align": "center", "fixedWidth":700,"fontFamily": "Burbank Small", "fontSize": "32px" });
        this.add(congratsText);

        // topStuff
        const topStuff = scene.add.container(-354, -288);
        this.add(topStuff);

        // text_2
        const text_2 = scene.add.text(0, 0, "", {});
        text_2.text = "Your New Stamps";
        text_2.setStyle({ "align": "center", "fixedWidth":714,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold" });
        topStuff.add(text_2);

        // closebtn
        const closebtn = scene.add.image(663, 30, "main", "blue-button");
        topStuff.add(closebtn);

        // text
        const text = scene.add.text(0, 63, "", {});
        text.text = "These are your recently earned stamps:";
        text.setStyle({ "align": "center", "fixedWidth":714,"fontFamily": "Burbank Small", "fontSize": "32px" });
        topStuff.add(text);

        // blue_x
        const blue_x = scene.add.image(663, 28, "main", "blue-x");
        topStuff.add(blue_x);

        // nextbtn
        const nextbtn = scene.add.container(300, 0);
        this.add(nextbtn);

        // next_btn
        const next_btn = scene.add.image(0, 0, "main", "blue-button");
        nextbtn.add(next_btn);

        // blue_arrow
        const blue_arrow = scene.add.image(0.5, -2, "main", "blue-arrow");
        blue_arrow.angle = 90;
        nextbtn.add(blue_arrow);

        // prevbtn
        const prevbtn = scene.add.container(-300, 0);
        this.add(prevbtn);

        // prev_btn
        const prev_btn = scene.add.image(0, 0, "main", "blue-button");
        prevbtn.add(prev_btn);

        // blue_arrow_1
        const blue_arrow_1 = scene.add.image(0, -2, "main", "blue-arrow");
        blue_arrow_1.angle = 90;
        blue_arrow_1.flipY = true;
        prevbtn.add(blue_arrow_1);

        // block (components)
        new Interactive(block);

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.spriteName = "blue-button";
        closebtnButton.callback = () => {this.visible = false};
        closebtnButton.activeFrame = true;

        // next_btn (components)
        const next_btnButton = new Button(next_btn);
        next_btnButton.spriteName = "blue-button";
        next_btnButton.callback = () => this.onNext();
        next_btnButton.activeFrame = true;

        // prev_btn (components)
        const prev_btnButton = new Button(prev_btn);
        prev_btnButton.spriteName = "blue-button";
        prev_btnButton.callback = () => this.onPrev();
        prev_btnButton.activeFrame = true;

        this.bg_1 = bg_1;
        this.stampbg = stampbg;
        this.congratsText = congratsText;
        this.topStuff = topStuff;
        this.nextbtn = nextbtn;
        this.prevbtn = prevbtn;

        /* START-USER-CTR-CODE */
        this.stampsCols = 3
        this.stampsRows = 2
        this.maxStampItems = this.stampsCols * this.stampsRows
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    initializeContent(parent, stamps) {
        if(stamps.length == 0) {
            this.visible = false
            return
        } else {
            this.visible = true    
        }

        this.parent = parent
        this.stamps = stamps
        this.createStampItems()
        this.offset = 0

        this.updateContent()
    }

    /**
     * @return an array with 2 elements: [stamps on 1st line, stamps on 2nd line]
     */
    get layoutConstraints() {
        switch(this.currentPage.length) {
            case 1: return [1,0]
            case 2: return [2,0]
            case 3: return [3,0]
            case 4: return [2,2]
            case 5: return [3,2]
            case 6: return [3,3]
            default: 
                console.warn(`Too many or few stamps on a single page - ${this.stamps.length}`)
                return[0,0]
        }
    }

    get isTwoLines() {
        return this.layoutConstraints[1] > 0
    }

    createStampItems() {
        this.stampItems = []

        for(let x = 0; x < this.maxStampItems; x++) {
            const stamp = new StampItem(this.scene, -150 + (x * 150), 0);
            this.add(stamp);
            this.stampItems.push(stamp)
        }
    }

    hideStampItems() {
        for(let item of this.stampItems) item.visible = false    
    }

    updateLayout() {
        this.hideStampItems()
        let xOffset = (this.layoutConstraints[0] - 1) * 75
        let yOffset = - this.layoutConstraints[1] ? 70 : 0
        for(let x = 0; x < this.layoutConstraints[0]; x++) {
            this.stampItems[x].x = x * 150
            this.stampItems[x].x -= xOffset
            this.stampItems[x].y = -yOffset
            this.stampItems[x].visible = true
        }
        xOffset = (this.layoutConstraints[1] - 1) * 75
        for(let y = 0; y < this.layoutConstraints[1]; y++) {
            this.stampItems[y + this.layoutConstraints[0]].x = y * 150
            this.stampItems[y + this.layoutConstraints[0]].x -= xOffset
            this.stampItems[y + this.layoutConstraints[0]].y = yOffset
            this.stampItems[y + this.layoutConstraints[0]].visible = true
        }
        this.stampbg.setSize((150*this.layoutConstraints[0]) + 25, this.isTwoLines ? 300 : 175)
        this.bg_1.setSize(734, this.isTwoLines ? 626: 626 - 125)
        this.congratsText.y = this.isTwoLines ? 183 : 183 - 70
        this.topStuff.y = this.isTwoLines ? -288 : -288 + 70
    }

    updateContent() {
        this.currentPage = this.stamps.slice(this.offset * this.maxStampItems, (this.offset + 1) * this.maxStampItems)

        if(this.currentPage.length == 0) {
            console.warn("Invalid page in StampbookRecentlyEarned")
            if(this.offset != 0) {
                this.offset = 0
                return this.updateContent()
            }
        }

        this.updateLayout()

        for(const [idx, stampId] of this.currentPage.entries()) {
            let stampObject = this.stampItems[idx]
            stampObject.visible = true
            stampObject.stamp = this.parent.book.world.stampController.getStamp(stampId)
            stampObject.unlocked = true
            stampObject.updateContent()    
        }

        this.congratsText.text = `Congratulations on earning\n${this.stamps.length} stamps!`

        this.prevbtn.visible = (this.offset != 0)
        this.nextbtn.visible = this.stamps.length > ((this.offset + 1) * this.maxStampItems)
    }

    onNext() {
        this.offset += 1
        this.updateContent()
    }

    onPrev() {
        this.offset -= 1
        this.updateContent()
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
