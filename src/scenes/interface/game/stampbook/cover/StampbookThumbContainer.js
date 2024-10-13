import StampbookBackgroundLoader from '@engine/loaders/StampbookBackgroundLoader'

/* START OF COMPILED CODE */

export default class StampbookThumbContainer extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.claspThumbBg;
        /** @type {Phaser.GameObjects.Image} */
        this.claspThumb;
        /** @type {Phaser.GameObjects.Image} */
        this.claspHighlightThumb;
        /** @type {Phaser.GameObjects.Image} */
        this.removePattern;


        // colorTool_3
        const colorTool_3 = scene.add.image(-2, 1, "stampbook-editor", "colorTool");
        this.add(colorTool_3);

        // claspThumbBg
        const claspThumbBg = scene.add.image(0, 0, "testThumb");
        this.add(claspThumbBg);

        // claspThumb
        const claspThumb = scene.add.image(0, 0, "testThumb");
        this.add(claspThumb);

        // claspHighlightThumb
        const claspHighlightThumb = scene.add.image(0, 0, "testThumb");
        this.add(claspHighlightThumb);

        // removePattern
        const removePattern = scene.add.image(0, -1, "stampbook-editor", "removePattern");
        removePattern.visible = false;
        this.add(removePattern);

        this.claspThumbBg = claspThumbBg;
        this.claspThumb = claspThumb;
        this.claspHighlightThumb = claspHighlightThumb;
        this.removePattern = removePattern;

        /* START-USER-CTR-CODE */
        this.claspHighlightThumb.setBlendMode(2) //multiply blend mode
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    updateContent(cover, itemType, itemValue = undefined) {
        this.cover = cover
        this.itemType = itemType
        this.itemValue = itemValue

        this.loadItem()
    }

    userValue(itemType) {
        return this.cover[`user${itemType.charAt(0).toUpperCase()}${itemType.slice(1)}`]    
    }

    loadItem() {
        let backgroundLoader = new StampbookBackgroundLoader(this.scene, "colourThumb", this.claspThumbBg)
        backgroundLoader.startItemLoad(this.userValue("colour"))

        backgroundLoader = new StampbookBackgroundLoader(this.scene, `${this.itemType}Thumb`, this.claspThumb)
        backgroundLoader.startItemLoad(this.itemValue ? this.itemValue : this.userValue(this.itemType))

        if(this.itemType == "clasp") {
            backgroundLoader = new StampbookBackgroundLoader(this.scene, "claspHighlightThumb", this.claspHighlightThumb)
            backgroundLoader.startItemLoad(this.userValue("highlight"))    
        } else {
            this.claspHighlightThumb.visible = false
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
