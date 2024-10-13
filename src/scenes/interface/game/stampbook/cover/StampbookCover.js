import { Button, Animation, Interactive, SimpleButton } from '@components/components'
import StampbookBackgroundLoader from '@engine/loaders/StampbookBackgroundLoader'
import StampbookRecentlyEarned from './StampbookRecentlyEarned'
import StampbookThumbContainer from './StampbookThumbContainer'
import StampbookEditorSelectionBox from './StampbookEditorSelectionBox'
import StampbookCoverFilterList from './StampbookCoverFilterList'
import StampItem from '../StampItem'
import StampPin from '../StampPin'

/* START OF COMPILED CODE */

export default class StampbookCover extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.editBackground;
        /** @type {Phaser.GameObjects.Image} */
        this.colour;
        /** @type {Phaser.GameObjects.Image} */
        this.clasp;
        /** @type {Phaser.GameObjects.Image} */
        this.highlight;
        /** @type {Phaser.GameObjects.Text} */
        this.field7;
        /** @type {Phaser.GameObjects.Text} */
        this.field6;
        /** @type {Phaser.GameObjects.Text} */
        this.field5;
        /** @type {Phaser.GameObjects.Text} */
        this.field4;
        /** @type {Phaser.GameObjects.Text} */
        this.field3;
        /** @type {Phaser.GameObjects.Text} */
        this.field2;
        /** @type {Phaser.GameObjects.Text} */
        this.penguinName1;
        /** @type {Phaser.GameObjects.Text} */
        this.sField7;
        /** @type {Phaser.GameObjects.Text} */
        this.sField6;
        /** @type {Phaser.GameObjects.Text} */
        this.sField5;
        /** @type {Phaser.GameObjects.Text} */
        this.sField4;
        /** @type {Phaser.GameObjects.Text} */
        this.sField3;
        /** @type {Phaser.GameObjects.Text} */
        this.sField2;
        /** @type {Phaser.GameObjects.Text} */
        this.stampCount;
        /** @type {Phaser.GameObjects.Image} */
        this.edit;
        /** @type {Phaser.GameObjects.Container} */
        this.stampContainer;
        /** @type {Phaser.GameObjects.Container} */
        this.clonableStamps;
        /** @type {Phaser.GameObjects.Image} */
        this.dragHere;
        /** @type {StampbookEditorSelectionBox} */
        this.editorSelectionBox;
        /** @type {StampbookThumbContainer} */
        this.claspThumb;
        /** @type {StampbookThumbContainer} */
        this.patternThumb;
        /** @type {StampbookThumbContainer} */
        this.highlightThumb;
        /** @type {StampbookThumbContainer} */
        this.colourThumb;
        /** @type {Phaser.GameObjects.Image} */
        this.categoryIcon;
        /** @type {Phaser.GameObjects.Text} */
        this.categoryText;
        /** @type {Phaser.GameObjects.Container} */
        this.editor;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.stageArea;
        /** @type {StampbookRecentlyEarned} */
        this.recentlyEarned;


        // editBackground
        const editBackground = scene.add.image(760, 480, "stampbook-editor", "editBackground");
        editBackground.visible = false;
        this.add(editBackground);

        // colour
        const colour = scene.add.image(760, 520, "testCover");
        this.add(colour);

        // cinamoroll
        const cinamoroll = scene.add.image(485, 464, "cinamoroll");
        cinamoroll.scaleX = 0.5;
        cinamoroll.scaleY = 0.5;
        cinamoroll.visible = false;
        this.add(cinamoroll);

        // text_1
        const text_1 = scene.add.text(935, 234, "", {});
        text_1.scaleX = 0.5;
        text_1.scaleY = 0.5;
        text_1.angle = 20;
        text_1.setOrigin(0.5, 0.5);
        text_1.visible = false;
        text_1.text = "banger stmapbooooookk";
        text_1.setStyle({ "fontFamily": "burbank small", "fontSize": "160px" });
        this.add(text_1);

        // stageClasp
        const stageClasp = scene.add.image(1341, 531, "stampbook-inside", "stageClasp");
        this.add(stageClasp);

        // clasp
        const clasp = scene.add.image(1324, 524, "testClasp");
        this.add(clasp);

        // highlight
        const highlight = scene.add.image(1341, 530, "testHighlight");
        this.add(highlight);

        // penguinName
        const penguinName = scene.add.container(244, 671);
        this.add(penguinName);

        // field7
        const field7 = scene.add.text(6, 8, "", {});
        field7.alpha = 0.3;
        field7.alphaTopLeft = 0.3;
        field7.alphaTopRight = 0.3;
        field7.alphaBottomLeft = 0.3;
        field7.alphaBottomRight = 0.3;
        field7.text = "Penguin88888888";
        field7.setStyle({ "color": "#4DE5AD", "fontFamily": "Burbank Small", "fontSize": "108px", "fontStyle": "bold" });
        penguinName.add(field7);

        // field6
        const field6 = scene.add.text(2, 0, "", {});
        field6.alpha = 0.2;
        field6.alphaTopLeft = 0.2;
        field6.alphaTopRight = 0.2;
        field6.alphaBottomLeft = 0.2;
        field6.alphaBottomRight = 0.2;
        field6.text = "Penguin88888888";
        field6.setStyle({ "color": "000", "fontFamily": "Burbank Small", "fontSize": "108px", "fontStyle": "bold" });
        penguinName.add(field6);

        // field5
        const field5 = scene.add.text(0, 0, "", {});
        field5.alpha = 0.2;
        field5.alphaTopLeft = 0.2;
        field5.alphaTopRight = 0.2;
        field5.alphaBottomLeft = 0.2;
        field5.alphaBottomRight = 0.2;
        field5.text = "Penguin88888888";
        field5.setStyle({ "color": "000", "fontFamily": "Burbank Small", "fontSize": "108px", "fontStyle": "bold" });
        penguinName.add(field5);

        // field4
        const field4 = scene.add.text(0, 4, "", {});
        field4.alpha = 0.2;
        field4.alphaTopLeft = 0.2;
        field4.alphaTopRight = 0.2;
        field4.alphaBottomLeft = 0.2;
        field4.alphaBottomRight = 0.2;
        field4.text = "Penguin88888888";
        field4.setStyle({ "color": "000", "fontFamily": "Burbank Small", "fontSize": "108px", "fontStyle": "bold" });
        penguinName.add(field4);

        // field3
        const field3 = scene.add.text(4, 10, "", {});
        field3.alpha = 0.3;
        field3.alphaTopLeft = 0.3;
        field3.alphaTopRight = 0.3;
        field3.alphaBottomLeft = 0.3;
        field3.alphaBottomRight = 0.3;
        field3.text = "Penguin88888888";
        field3.setStyle({ "color": "#4DE5AD", "fontFamily": "Burbank Small", "fontSize": "108px", "fontStyle": "bold" });
        penguinName.add(field3);

        // field2
        const field2 = scene.add.text(8, 12, "", {});
        field2.alpha = 0.3;
        field2.alphaTopLeft = 0.3;
        field2.alphaTopRight = 0.3;
        field2.alphaBottomLeft = 0.3;
        field2.alphaBottomRight = 0.3;
        field2.text = "Penguin88888888";
        field2.setStyle({ "color": "#4DE5AD", "fontFamily": "Burbank Small", "fontSize": "108px", "fontStyle": "bold" });
        penguinName.add(field2);

        // penguinName1
        const penguinName1 = scene.add.text(4, 6, "", {});
        penguinName1.text = "Penguin88888888";
        penguinName1.setStyle({ "color": "#38A87D", "fontFamily": "Burbank Small", "fontSize": "108px", "fontStyle": "bold" });
        penguinName.add(penguinName1);

        // totalStamps
        const totalStamps = scene.add.container(490, 803);
        this.add(totalStamps);

        // sField7
        const sField7 = scene.add.text(1.5, 2, "", {});
        sField7.alpha = 0.3;
        sField7.alphaTopLeft = 0.3;
        sField7.alphaTopRight = 0.3;
        sField7.alphaBottomLeft = 0.3;
        sField7.alphaBottomRight = 0.3;
        sField7.text = "Penguin88888888";
        sField7.setStyle({ "color": "#4DE5AD", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        totalStamps.add(sField7);

        // sField6
        const sField6 = scene.add.text(0.5, 0, "", {});
        sField6.alpha = 0.2;
        sField6.alphaTopLeft = 0.2;
        sField6.alphaTopRight = 0.2;
        sField6.alphaBottomLeft = 0.2;
        sField6.alphaBottomRight = 0.2;
        sField6.text = "Penguin88888888";
        sField6.setStyle({ "color": "000", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        totalStamps.add(sField6);

        // sField5
        const sField5 = scene.add.text(0, 0, "", {});
        sField5.alpha = 0.2;
        sField5.alphaTopLeft = 0.2;
        sField5.alphaTopRight = 0.2;
        sField5.alphaBottomLeft = 0.2;
        sField5.alphaBottomRight = 0.2;
        sField5.text = "Penguin88888888";
        sField5.setStyle({ "color": "000", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        totalStamps.add(sField5);

        // sField4
        const sField4 = scene.add.text(0, 1, "", {});
        sField4.alpha = 0.2;
        sField4.alphaTopLeft = 0.2;
        sField4.alphaTopRight = 0.2;
        sField4.alphaBottomLeft = 0.2;
        sField4.alphaBottomRight = 0.2;
        sField4.text = "Penguin88888888";
        sField4.setStyle({ "color": "000", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        totalStamps.add(sField4);

        // sField3
        const sField3 = scene.add.text(1, 2.5, "", {});
        sField3.alpha = 0.3;
        sField3.alphaTopLeft = 0.3;
        sField3.alphaTopRight = 0.3;
        sField3.alphaBottomLeft = 0.3;
        sField3.alphaBottomRight = 0.3;
        sField3.text = "Penguin88888888";
        sField3.setStyle({ "color": "#4DE5AD", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        totalStamps.add(sField3);

        // sField2
        const sField2 = scene.add.text(2, 3, "", {});
        sField2.alpha = 0.3;
        sField2.alphaTopLeft = 0.3;
        sField2.alphaTopRight = 0.3;
        sField2.alphaBottomLeft = 0.3;
        sField2.alphaBottomRight = 0.3;
        sField2.text = "Penguin88888888";
        sField2.setStyle({ "color": "#4DE5AD", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        totalStamps.add(sField2);

        // stampCount
        const stampCount = scene.add.text(1, 1.5, "", {});
        stampCount.text = "Penguin88888888";
        stampCount.setStyle({ "color": "#38A87D", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        totalStamps.add(stampCount);

        // closebtn_1
        const closebtn_1 = scene.add.image(1342, 200, "stampbook-inside", "closebtn");
        this.add(closebtn_1);

        // edit
        const edit = scene.add.image(1471, 906, "stampbook-editor", "edit");
        this.add(edit);

        // stampContainer
        const stampContainer = scene.add.container(760, 480);
        this.add(stampContainer);

        // editor
        const editor = scene.add.container(51, 0);
        this.add(editor);

        // coverlist
        const coverlist = scene.add.image(745, 0, "stampbook-editor", "coverlist");
        coverlist.setOrigin(0.5, 0);
        editor.add(coverlist);

        // clonableStamps
        const clonableStamps = scene.add.container(-51, 0);
        editor.add(clonableStamps);

        // dragHere
        const dragHere = scene.add.image(1469, 0, "stampbook-editor", "dragHere0001");
        dragHere.setOrigin(1, 0);
        dragHere.visible = false;
        editor.add(dragHere);

        // editorui
        const editorui = scene.add.image(0, 303, "stampbook-editor", "editorui");
        editor.add(editorui);

        // colorTool
        const colorTool = scene.add.image(21, 220, "stampbook-editor", "colorTool");
        editor.add(colorTool);

        // colorTool_1
        const colorTool_1 = scene.add.image(21, 335, "stampbook-editor", "colorTool");
        editor.add(colorTool_1);

        // colorTool_2
        const colorTool_2 = scene.add.image(21, 451, "stampbook-editor", "colorTool");
        editor.add(colorTool_2);

        // save
        const save = scene.add.image(1414, 908, "stampbook-editor", "save");
        editor.add(save);

        // editorSelectionBox
        const editorSelectionBox = new StampbookEditorSelectionBox(scene, 192, 566);
        editorSelectionBox.visible = false;
        editor.add(editorSelectionBox);

        // claspThumb
        const claspThumb = new StampbookThumbContainer(scene, 23, 566);
        editor.add(claspThumb);

        // patternThumb
        const patternThumb = new StampbookThumbContainer(scene, 23, 450);
        editor.add(patternThumb);

        // highlightThumb
        const highlightThumb = new StampbookThumbContainer(scene, 23, 334);
        editor.add(highlightThumb);

        // colourThumb
        const colourThumb = new StampbookThumbContainer(scene, 23, 219);
        editor.add(colourThumb);

        // rectangleColourThumb
        const rectangleColourThumb = scene.add.rectangle(23, 219, 128, 90);
        editor.add(rectangleColourThumb);

        // rectangleHighlightThumb
        const rectangleHighlightThumb = scene.add.rectangle(23, 334, 128, 90);
        editor.add(rectangleHighlightThumb);

        // rectanglePatternThumb
        const rectanglePatternThumb = scene.add.rectangle(23, 450, 128, 90);
        editor.add(rectanglePatternThumb);

        // rectangleClaspThumb
        const rectangleClaspThumb = scene.add.rectangle(23, 565, 128, 90);
        editor.add(rectangleClaspThumb);

        // specificCategoryBg
        const specificCategoryBg = scene.add.image(0, 58, "stampbook-editor", "specificCategoryBg");
        specificCategoryBg.visible = false;
        editor.add(specificCategoryBg);

        // rectangleLeftArrow
        const rectangleLeftArrow = scene.add.rectangle(137, 55, 50, 128);
        editor.add(rectangleLeftArrow);

        // rectangleRightArrow
        const rectangleRightArrow = scene.add.rectangle(1352, 55, 50, 128);
        editor.add(rectangleRightArrow);

        // filterButtonRectangle
        const filterButtonRectangle = scene.add.rectangle(34, 71, 150, 150);
        editor.add(filterButtonRectangle);

        // categoryIcon
        const categoryIcon = scene.add.image(31, 101, "testCategory");
        editor.add(categoryIcon);

        // categoryText
        const categoryText = scene.add.text(36, 30, "", {});
        categoryText.setOrigin(0.5, 0.5);
        categoryText.text = "All Stamps";
        categoryText.setStyle({ "align": "center", "color": "#4d4d4d", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        categoryText.setWordWrapWidth(160);
        editor.add(categoryText);

        // text_3
        const text_3 = scene.add.text(483, 127, "", {});
        text_3.angle = 29.999999999999996;
        text_3.visible = false;
        text_3.text = "made by misabr\nfrom club penguin misabr";
        text_3.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "64px", "fontStyle": "bold" });
        this.add(text_3);

        // stageArea
        const stageArea = scene.add.rectangle(170, 255, 1130, 530);
        stageArea.setOrigin(0, 0);
        this.add(stageArea);

        // recentlyEarned
        const recentlyEarned = new StampbookRecentlyEarned(scene, 760, 480);
        recentlyEarned.visible = false;
        this.add(recentlyEarned);

        // stageClasp (components)
        const stageClaspSimpleButton = new SimpleButton(stageClasp);
        stageClaspSimpleButton.callback = () => {this.onNext()};

        // closebtn_1 (components)
        const closebtn_1Button = new Button(closebtn_1);
        closebtn_1Button.spriteName = "closebtn";
        closebtn_1Button.callback = () => {this.book.onClose()};
        closebtn_1Button.activeFrame = true;

        // edit (components)
        const editButton = new Button(edit);
        editButton.spriteName = "edit";
        editButton.callback = () => this.onEdit();

        // save (components)
        const saveSimpleButton = new SimpleButton(save);
        saveSimpleButton.callback = () => this.onSave();

        // rectangleColourThumb (components)
        const rectangleColourThumbSimpleButton = new SimpleButton(rectangleColourThumb);
        rectangleColourThumbSimpleButton.callback = () => this.onColourThumb();

        // rectangleHighlightThumb (components)
        const rectangleHighlightThumbSimpleButton = new SimpleButton(rectangleHighlightThumb);
        rectangleHighlightThumbSimpleButton.callback = () => this.onHighlightThumb();

        // rectanglePatternThumb (components)
        const rectanglePatternThumbSimpleButton = new SimpleButton(rectanglePatternThumb);
        rectanglePatternThumbSimpleButton.callback = () => this.onPatternThumb();

        // rectangleClaspThumb (components)
        const rectangleClaspThumbSimpleButton = new SimpleButton(rectangleClaspThumb);
        rectangleClaspThumbSimpleButton.callback = () => this.onClaspThumb();

        // rectangleLeftArrow (components)
        const rectangleLeftArrowSimpleButton = new SimpleButton(rectangleLeftArrow);
        rectangleLeftArrowSimpleButton.callback = () => this.onEditorLeft();

        // rectangleRightArrow (components)
        const rectangleRightArrowSimpleButton = new SimpleButton(rectangleRightArrow);
        rectangleRightArrowSimpleButton.callback = () => this.onEditorRight();

        // filterButtonRectangle (components)
        const filterButtonRectangleSimpleButton = new SimpleButton(filterButtonRectangle);
        filterButtonRectangleSimpleButton.callback = () => this.onFilter();

        this.editBackground = editBackground;
        this.colour = colour;
        this.clasp = clasp;
        this.highlight = highlight;
        this.field7 = field7;
        this.field6 = field6;
        this.field5 = field5;
        this.field4 = field4;
        this.field3 = field3;
        this.field2 = field2;
        this.penguinName1 = penguinName1;
        this.sField7 = sField7;
        this.sField6 = sField6;
        this.sField5 = sField5;
        this.sField4 = sField4;
        this.sField3 = sField3;
        this.sField2 = sField2;
        this.stampCount = stampCount;
        this.edit = edit;
        this.stampContainer = stampContainer;
        this.clonableStamps = clonableStamps;
        this.dragHere = dragHere;
        this.editorSelectionBox = editorSelectionBox;
        this.claspThumb = claspThumb;
        this.patternThumb = patternThumb;
        this.highlightThumb = highlightThumb;
        this.colourThumb = colourThumb;
        this.categoryIcon = categoryIcon;
        this.categoryText = categoryText;
        this.editor = editor;
        this.stageArea = stageArea;
        this.recentlyEarned = recentlyEarned;

        /* START-USER-CTR-CODE */
        this.highlight.setBlendMode(2) //multiply blend mode

        this.penguinName = [
            this.field7,
            this.field6,
            this.field5,
            this.field4,
            this.field3,
            this.field2,
            this.penguinName1
        ]

        this.stampFields = [
            this.sField7,
            this.sField6,
            this.sField5,
            this.sField4,
            this.sField3,
            this.sField2,
            this.stampCount
        ]

        this.coloredFields = [
            this.field7,
            this.field3,
            this.field2,
            this.penguinName1,
            this.sField7,
            this.sField3,
            this.sField2,
            this.stampCount
        ]

        this.editor.visible = false
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    onNext() {
        this.book.onNext()
    }

    get userColour() {
        return this.book.stampbookInfo.colour
    }

    set userColour(colour) {
        this.book.stampbookInfo.colour = colour
    }

    get userClasp() {
        return this.book.stampbookInfo.clasp
    }

    set userClasp(clasp) {
        this.book.stampbookInfo.clasp = clasp
    }

    get userWordmark() {
        return 1 + ((this.userColour - 1) * 4)    
    }

    get userHighlightUnadjusted() {
        return this.book.stampbookInfo.highlight
    }

    set userHighlightUnadjusted(highlight) {
        this.book.stampbookInfo.highlight = highlight
    }

    get userHighlight() {
        return this.userHighlightUnadjusted + ((this.userColour - 1) * 3)
    }

    set userHighlight(highlight) {
        this.userHighlightUnadjusted = highlight - ((this.userColour - 1) * 3)
    }

    get userPattern() {
        return this.book.stampbookInfo.pattern
    }

    set userPattern(pattern) {
        this.book.stampbookInfo.pattern = pattern
    }

    get userUsername() {
        return this.book.username
    }

    get userStampCount() {
        return this.book.collectedStampsForCategory(this.book.categories[0])
    }

    get totalStampCount() {
        return this.book.totalStamps(this.book.categories[0]).length
    }

    get textColor() {
        return this.book.world.crumbs.cover.highlight[this.userHighlight]
    }

    setTextColor(color) {
        for(let field of this.coloredFields) {
            field.style.color = `#${this.textColor.slice(2)}`
            field.setStyle(field.style)
        }
    }

    updateTextColor() {
        this.setTextColor(this.textColor)    
    }

    updateContent() {
        //load background colo(u)r
        /**
         * Since phaser doesn't support the required blend modes in WebGL,
         * I've decided to pre-generate the images using a Python script
         * and then load in the pre-generated images. As a result, instead
         * of using the normal colour + pattern + wordmark setup from OG,
         * we are loading a merged image that contains these 3 assets
         **/
        let backgroundLoader = new StampbookBackgroundLoader(this.scene, "coverBackground", this.colour)
        backgroundLoader.startItemLoad(`${this.userColour}_${this.userPattern}`)

        //load clasp
        backgroundLoader = new StampbookBackgroundLoader(this.scene, "clasp", this.clasp)
        backgroundLoader.startItemLoad(this.userClasp)

        //load highlight
        backgroundLoader = new StampbookBackgroundLoader(this.scene, "highlight", this.highlight)
        backgroundLoader.startItemLoad(this.userHighlight)

        //update texts
        for(let text of this.penguinName) {
            text.text = this.userUsername
        }

        for(let text of this.stampFields) {
            text.text = `Total Stamps: ${this.userStampCount}/${this.totalStampCount}`    
        }

        this.updateTextColor()

        this.recentlyEarned.initializeContent(this, this.book.unseen)
        this.book.unseen = []

        this.edit.visible = (this.book.stampbookInfo.userId == this.book.world.client.id && !this.editor.visible)

        if(!this.stampContainer.first) this.addStamps()
    }

    /* EDITOR */
    onEdit() {
        if (this.book.stampbookInfo.userId != this.book.world.client.id) return

        this.editor.visible = true
        this.editBackground.visible = true
        this.edit.visible = false

        this.loadEditor()
        this.addInput()
    }

    onSave() {
        // this is a workaround to destroy stamps stuck in invalid positions
        for(let stamp of [...this.stampContainer.list]) {
            if(stamp.isOOB) stamp.destroy()
        }

        this.editBackground.visible = this.editor.visible = false
        this.edit.visible = true

        this.book.network.send('update_stampbook', { stampbookInfo: this.book.stampbookInfo, coverStamps: this.coverStamps })

        this.disableStampInputs()
    }

    loadEditor() {
        this.claspThumb.updateContent(this, "clasp")
        this.patternThumb.updateContent(this, "pattern")
        this.highlightThumb.updateContent(this, "highlight")
        this.colourThumb.updateContent(this, "colour")

        this.setGroup(0)
    }

    onColourThumb() {
        if(this.editorSelectionBox.visible && this.editorSelectionBox.itemType == "colour") {
            this.editorSelectionBox.visible = false
            return
        }

        let items = Object.keys(this.book.crumbs.cover.color_highlight)
        this.editorSelectionBox.updatePosition(192, 222)
        this.editorSelectionBox.updateContent(this, "colour", items)
    }

    onHighlightThumb() {
        if(this.editorSelectionBox.visible && this.editorSelectionBox.itemType == "highlight") {
            this.editorSelectionBox.visible = false
            return
        }

        let items = this.book.crumbs.cover.color_highlight[this.userColour]
        this.editorSelectionBox.updatePosition(192, 335)
        this.editorSelectionBox.updateContent(this, "highlight", items)
    }

    onClaspThumb() {
        if(this.editorSelectionBox.visible && this.editorSelectionBox.itemType == "clasp") {
            this.editorSelectionBox.visible = false
            return
        }

        let items = this.book.crumbs.cover.clasp
        this.editorSelectionBox.updatePosition(192, 566)
        this.editorSelectionBox.updateContent(this, "clasp", items)

    }

    onPatternThumb() {
        if(this.editorSelectionBox.visible && this.editorSelectionBox.itemType == "pattern") {
            this.editorSelectionBox.visible = false
            return
        }

        let items = this.book.crumbs.cover.clasp
        this.editorSelectionBox.updatePosition(192, 451)
        this.editorSelectionBox.updateContent(this, "pattern", items)
    }

    setItem(itemType, value) {
        this[`user${itemType.charAt(0).toUpperCase()}${itemType.slice(1)}`] = value

        this.updateContent()
        this.loadEditor()

        this.editorSelectionBox.visible = false
    }

    /* STAMPS EDITOR */
    addStamps() {
        //this.addStamp(this.book.world.stampController.getStamp(7), 300, 200)
        for(let stamp of this.book.coverStamps) {
            if(stamp.stampId) this.addStamp(this.book.world.stampController.getStamp(stamp.stampId), stamp.x, stamp.y, stamp.rotation)
            else this.addPin(stamp.itemId, stamp.x, stamp.y, stamp.rotation)
        }
    }

    onEditorLeft() {
        this.clonableOffset--;
        this.loadClonableStamps();
    }

    onEditorRight() {
        this.clonableOffset++;
        this.loadClonableStamps();
    }

    loadClonableStamps() {
        let usedStamps = this.book.world.stampController.filteredStampsForTotal(this.book.unlockedStamps, this.currentGroup).map(e => {return {type: 0, id: e}})
        let usedPins = this.book.unlockedPins.map(e => {return {type: 1, id: e}})
        let coverOnlyPins = this.book.coverOnlyPins.map(e => {return {type: 1, id: e}})
        if(this.currentGroup == 0 || this.book.world.stampController.getGroup(this.currentGroup).is_pins_page) usedStamps.push(...usedPins,...coverOnlyPins)

        if(!this.clonableStampsList) {
            this.clonableStampsList = []

            for(let i = 0; i < 10; i++) {
                let stampObj = this.addClonableStamp(this.book.world.stampController.getStamp(7), 284 + i * 114, 68)
                this.clonableStamps.add(stampObj)
                this.clonableStampsList.push(stampObj)
            }
        }

        if(!this.clonablePinsList) {
            this.clonablePinsList = []

            for(let i = 0; i < this.clonableStampsList.length; i++) {
                let stampObj = this.addClonablePin(1, 284 + i * 114, 68)
                this.clonableStamps.add(stampObj)
                this.clonablePinsList.push(stampObj)
            }
        }

        let currentPage = usedStamps.slice(this.clonableStampsList.length * this.clonableOffset, this.clonableStampsList.length * (this.clonableOffset+1))
        if(currentPage.length == 0 && this.clonableOffset != 0) {
            this.clonableOffset = 0
            return this.loadClonableStamps()
        }

        for(let [idx, stampObject] of this.clonableStampsList.entries()) {
            if(idx < currentPage.length) {
                let pinStampObject = this.clonablePinsList[idx]
                if(currentPage[idx].type == 0) {
                    stampObject.stamp = this.book.world.stampController.getStamp(currentPage[idx].id)
                    stampObject.visible = true
                    stampObject.updateContent()
                    pinStampObject.visible = false
                } else {
                    pinStampObject.item = currentPage[idx].id
                    pinStampObject.visible = true
                    pinStampObject.updateContent()
                    stampObject.visible = false
                }
            } else {
                stampObject.visible = false
                this.clonablePinsList[idx].visible = false
            }
        }
    }

    addClonableStamp(stampInfo, x, y) {
        //284, 68
        const stamp = new StampItem(this.scene, x, y);
        this.clonableStamps.add(stamp);

        stamp.stamp = stampInfo
        stamp.unlocked = true
        stamp.scale = 0.5
        //stamp.updateContent()
        stamp.setCustomCallback((stamp, pointer) => this.onStampClone(stamp, pointer))

        return stamp
    }

    addClonablePin(itemId, x, y) {
        //284, 68
        const stamp = new StampPin(this.scene, x, y);
        this.clonableStamps.add(stamp);

        stamp.item = itemId
        stamp.unlocked = true
        stamp.scale = 0.5
        //stamp.updateContent()
        stamp.setCustomCallback((stamp, pointer) => this.onPinClone(stamp, pointer))

        return stamp
    }

    onStampClone(stampObject, pointer) {
        if(this.stampContainer.list.length >= 100) {
            this.book.interface.prompt.showError("Only 100 items can be stuck on the cover at once.")
            return
        }

        let stamp = this.addStamp(stampObject.stamp, pointer.x - 760, pointer.y - 480)
        stamp.setCover(this)
        stamp.forcedMove = true
        stamp.startMove(pointer)
    }

    onPinClone(stampObject, pointer) {
        if(this.stampContainer.list.length >= 100) {
            this.book.interface.prompt.showError("Only 100 items can be stuck on the cover at once.")
            return
        }

        let stamp = this.addPin(stampObject.item, pointer.x - 760, pointer.y - 480)
        stamp.setCover(this)
        stamp.forcedMove = true
        stamp.startMove(pointer)
    }

    addStamp(stampInfo, x, y, rotation = 0) {
        //todo: rotation
        const stamp = new StampItem(this.scene, x, y);
        stamp.angle = rotation
        this.stampContainer.add(stamp);

        stamp.stamp = stampInfo
        stamp.big = true
        stamp.unlocked = true
        stamp.updateContent()
        stamp.setCover(this)
        stamp.disableCover()

        return stamp
    }

    addPin(item, x, y, rotation = 0) {
        //todo: rotation
        const stamp = new StampPin(this.scene, x, y);
        stamp.angle = rotation
        this.stampContainer.add(stamp);

        stamp.item = item
        stamp.big = true
        stamp.unlocked = true
        stamp.scale = 0.75
        stamp.updateContent()
        stamp.setCover(this)
        stamp.disableCover()

        return stamp
    }

    disableStampInputs() {
        this.stampContainer.iterate((stamp) => {
            stamp.disableCover()
        });
    }

    addInput() {
        this.stampContainer.iterate((stamp) => {
            stamp.setCover(this)
        });
    }

    get coverStamps() {
        return this.stampContainer.list.map(e => {
            return {x: e.x, y: e.y, rotation: e.angle, stampId: e.stamp?.stamp_id || 0, itemId: e.stamp ? 0 : parseInt(e.item)}
        })
    }

    onFilter() {
        if(this.stampbookCoverFilterList) {
            this.destroyFilterList()
            return
        }

        const stampbookCoverFilterList = new StampbookCoverFilterList(this.scene, 25, 90);
        this.editor.add(stampbookCoverFilterList);

        stampbookCoverFilterList.stampController = this.book.world.stampController
        stampbookCoverFilterList.subGroups = this.book.world.stampController.getSubGroups(0)
        stampbookCoverFilterList.initial = true
        stampbookCoverFilterList.parent = this
        stampbookCoverFilterList.updateContent()

        this.stampbookCoverFilterList = stampbookCoverFilterList

        this.editor.moveAbove(this.categoryIcon, stampbookCoverFilterList)
    }

    setGroup(group_id) {
        this.currentGroup = group_id
        this.clonableOffset = 0

        this.loadClonableStamps()
        this.destroyFilterList()

        let backgroundLoader = new StampbookBackgroundLoader(this.scene, "categoryHeader", this.categoryIcon)
        backgroundLoader.startItemLoad(`${this.currentGroup}`)

        this.categoryText.text = this.currentGroup == 0 ? "All Stamps" : this.book.world.stampController.getGroup(this.currentGroup).display
    }

    destroyFilterList() {
        if(!this.stampbookCoverFilterList) return

        this.stampbookCoverFilterList.destroy()
        this.stampbookCoverFilterList = null
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
