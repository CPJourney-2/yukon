import StampbookCoverFilterItem from './StampbookCoverFilterItem'

/* START OF COMPILED CODE */

export default class StampbookCoverFilterList extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.background;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.maskBox;


        // background
        const background = scene.add.nineslice(0, 0, "stampbook-editor", "selectionBackground", 300, 248, 24, 20, 25, 27);
        background.setOrigin(0, 0);
        background.alpha = 0.9;
        this.add(background);

        // maskBox
        const maskBox = scene.add.nineslice(6, 3, "stampbook-editor", "selectionMask", 290, 239, 24, 19, 22, 22);
        maskBox.setOrigin(0, 0);
        maskBox.visible = false;
        this.add(maskBox);

        this.background = background;
        this.maskBox = maskBox;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    updateContent() {
        if(!this.subGroups) {
            console.error("Cannot update StampbookCoverFilterList with undefined subgroups")
            return
        }

        if(this.subGroups.length < 1) {
            console.error("Cannot update StampbookCoverFilterList with empty subgroups")
            return
        }

        this.subGroups = [...this.subGroups]
        if(this.initial) this.subGroups.push({'group_id': 0, 'display': 'All Stamps'})

        this.renderItems()
    }

    renderItems() {
        this.items = []
        let maxWidth = 0
        for(let [idx, group] of this.subGroups.entries()) {
            const item = new StampbookCoverFilterItem(this.scene, 0, (idx + (this.initial ? 1 : 0))*57);
            this.add(item);
            item.group = group
            item.stampController = this.stampController
            item.parent = this
            if(group.group_id == 0) item.overrideArrow = true
            item.updateContent()

            this.items.push(item)

            if(item.totalWidth > maxWidth) maxWidth = item.totalWidth
        }

        for(let item of this.items) {
            item.updateWidth(maxWidth)
        }

        this.background.setSize(
            maxWidth + (this.items[0].divider.x * 2), 
            (57 * (this.items.length + (this.initial ? 1 : 0))) + (this.items[0].divider.y * 2)
        )
        this.maskBox.setSize(this.background.width - 10, this.background.height - 9)
		//masks break if the object uses "local" (inside container) coordinates instead of "global" (inside scene) coordinates
		//this workaround sets the position to the one expected by the mask itself
        this.maskBox.setPosition(
            this.combinedX + 6,
            this.combinedY + 3
        )
    }
	
	get combinedX() {
		return this.x + (this.parentContainer.combinedX ? this.parentContainer.combinedX : this.parentContainer.x)
	}
	
	get combinedY() {
		return this.y + (this.parentContainer.combinedY ? this.parentContainer.combinedY : this.parentContainer.y)
	}

    destroyFilterLists() {
        for(let item of this.items) {
            item.destroyFilterList()
        }
    }

    setGroup(group_id) {
        this.parent.setGroup(group_id)
    }
	
	get currentGroup() {
		return this.parent.currentGroup	
	}

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
