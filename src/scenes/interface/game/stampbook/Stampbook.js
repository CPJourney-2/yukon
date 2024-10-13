import BaseContainer from '@scenes/base/BaseContainer'
import StampbookBackgroundLoader from '@engine/loaders/StampbookBackgroundLoader'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

import StampItem from './StampItem'
import StampCategory from './StampCategory'
import StampCategoryIcon from './StampCategoryIcon'
import StampPin from './StampPin'
import StampbookCover from './cover/StampbookCover'
import StampbookPolaroid from './StampbookPolaroid'

export const preload = {
    key: 'stampbook-pack',
    url: 'assets/media/interface/game/stampbook/main/stampbook-pack.json',
    loadString: ['loading', 'stampbook']
}

/* START OF COMPILED CODE */

export default class Stampbook extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.pageBackground;
        /** @type {Phaser.GameObjects.Text} */
        this.categoryTitle;
        /** @type {Phaser.GameObjects.Container} */
        this.stamps;
        /** @type {Phaser.GameObjects.Text} */
        this.pageText;
        /** @type {Phaser.GameObjects.Text} */
        this.pageNumberText;
        /** @type {Phaser.GameObjects.Text} */
        this.categoryTitleSmall;
        /** @type {Phaser.GameObjects.Text} */
        this.collectedStampsText;
        /** @type {Phaser.GameObjects.Image} */
        this.insideLines;
        /** @type {Phaser.GameObjects.Image} */
        this.upArrow;
        /** @type {Phaser.GameObjects.Image} */
        this.downArrow;
        /** @type {Phaser.GameObjects.Image} */
        this.categoryImage;
        /** @type {Phaser.GameObjects.Image} */
        this.guide;
        /** @type {StampbookPolaroid} */
        this.polaroid1;
        /** @type {Phaser.GameObjects.Image} */
        this.polaroid1frame;
        /** @type {StampbookPolaroid} */
        this.polaroid2;
        /** @type {Phaser.GameObjects.Image} */
        this.polaroid2frame;
        /** @type {StampbookPolaroid} */
        this.polaroid3;
        /** @type {Phaser.GameObjects.Image} */
        this.polaroid3frame;
        /** @type {Phaser.GameObjects.Container} */
        this.polaroidView;
        /** @type {Phaser.GameObjects.Container} */
        this.stampPage;
        /** @type {StampbookCover} */
        this.cover;
        /** @type {Array<any>} */
        this.listasdad;


        // block
        const block = scene.add.rectangle(-12, 10, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // stampPage
        const stampPage = scene.add.container(-760, -480);
        this.add(stampPage);

        // insidePage
        const insidePage = scene.add.image(717, 480, "stampbook-inside", "insidePage");
        stampPage.add(insidePage);

        // pageBackground
        const pageBackground = scene.add.image(40, 852, "testBG");
        pageBackground.setOrigin(0, 1);
        stampPage.add(pageBackground);

        // categoryTitle
        const categoryTitle = scene.add.text(292, 125, "", {});
        categoryTitle.setOrigin(0, 0.5);
        categoryTitle.text = "Activities";
        categoryTitle.setStyle({ "color": "#666666", "fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold", "stroke": "#666666" });
        stampPage.add(categoryTitle);

        // stamps
        const stamps = scene.add.container(12, 0);
        stampPage.add(stamps);

        // buttons_close
        const buttons_close = scene.add.image(1377, 160, "stampbook-inside", "pageCurlExit");
        buttons_close.scaleY = -1;
        stampPage.add(buttons_close);

        // pageCurl04
        const pageCurl04 = scene.add.image(1374, 761, "stampbook-inside", "pageCurl04");
        stampPage.add(pageCurl04);

        // pageCurl03
        const pageCurl03 = scene.add.image(100, 762, "stampbook-inside", "pageCurl03");
        pageCurl03.flipX = true;
        stampPage.add(pageCurl03);

        // pageText
        const pageText = scene.add.text(1202, 109, "", {});
        pageText.text = "Page";
        pageText.setStyle({ "color": "#666666", "fontFamily": "Burbank Small", "fontSize": "20px", "stroke": "#666666" });
        stampPage.add(pageText);

        // pageNumberText
        const pageNumberText = scene.add.text(1202, 136, "", {});
        pageNumberText.text = "18 of 29";
        pageNumberText.setStyle({ "color": "#666666", "fontFamily": "Burbank Small", "fontSize": "20px", "stroke": "#666666" });
        stampPage.add(pageNumberText);

        // categoryTitleSmall
        const categoryTitleSmall = scene.add.text(1173, 100, "", {});
        categoryTitleSmall.setOrigin(1, 0);
        categoryTitleSmall.text = "Jet Pack Adventure:";
        categoryTitleSmall.setStyle({ "align": "right", "color": "#666666", "fontFamily": "Burbank Small", "fontSize": "26px", "fontStyle": "bold", "stroke": "#666666" });
        stampPage.add(categoryTitleSmall);

        // collectedStampsText
        const collectedStampsText = scene.add.text(1173, 132, "", {});
        collectedStampsText.setOrigin(1, 0);
        collectedStampsText.text = "6/18";
        collectedStampsText.setStyle({ "align": "right", "color": "#666666", "fontFamily": "Burbank Small", "fontSize": "26px", "fontStyle": "bold", "stroke": "#666666" });
        stampPage.add(collectedStampsText);

        // insideLines
        const insideLines = scene.add.image(766, 140, "stampbook-inside", "insideLines");
        stampPage.add(insideLines);

        // upArrow
        const upArrow = scene.add.image(1332, 255, "stampbook-inside", "upArrow");
        stampPage.add(upArrow);

        // downArrow
        const downArrow = scene.add.image(1332, 740, "stampbook-inside", "downArrow");
        stampPage.add(downArrow);

        // pageCurlCover
        const pageCurlCover = scene.add.image(98, 151, "stampbook-inside", "pageCurlCover");
        pageCurlCover.angle = 180;
        stampPage.add(pageCurlCover);

        // clips
        const clips = scene.add.image(19, 477, "stampbook-inside", "clips");
        stampPage.add(clips);

        // categoryImage
        const categoryImage = scene.add.image(225, 127, "testCategoryHeader");
        stampPage.add(categoryImage);

        // guide
        const guide = scene.add.image(1175, 448, "stampbook-inside", "guide");
        guide.visible = false;
        stampPage.add(guide);

        // polaroidView
        const polaroidView = scene.add.container(1142, 335);
        stampPage.add(polaroidView);

        // polaroidbg
        const polaroidbg = scene.add.image(0, 199, "stampbook-editor", "polaroidbg");
        polaroidView.add(polaroidbg);

        // polaroid1
        const polaroid1 = new StampbookPolaroid(scene, 2, -113);
        polaroid1.scaleX = 0.67;
        polaroid1.scaleY = 0.67;
        polaroid1.angle = 10;
        polaroid1.visible = true;
        polaroidView.add(polaroid1);

        // polaroid1frame
        const polaroid1frame = scene.add.image(80, 0, "stampbook-editor", "polaroid1frame");
        polaroidView.add(polaroid1frame);

        // polaroid2
        const polaroid2 = new StampbookPolaroid(scene, -217, 123);
        polaroid2.scaleX = 0.67;
        polaroid2.scaleY = 0.67;
        polaroid2.angle = -18;
        polaroid2.visible = true;
        polaroidView.add(polaroid2);

        // polaroid2frame
        const polaroid2frame = scene.add.image(-94, 187, "stampbook-editor", "polaroid2frame");
        polaroidView.add(polaroid2frame);

        // polaroid3
        const polaroid3 = new StampbookPolaroid(scene, -7, 261);
        polaroid3.scaleX = 0.67;
        polaroid3.scaleY = 0.67;
        polaroid3.angle = 10;
        polaroid3.visible = true;
        polaroidView.add(polaroid3);

        // polaroid3frame
        const polaroid3frame = scene.add.image(71, 374, "stampbook-editor", "polaroid3frame");
        polaroidView.add(polaroid3frame);

        // cover
        const cover = new StampbookCover(scene, -760, -480);
        cover.visible = false;
        this.add(cover);

        // lists
        const listasdad = [];

        // block (components)
        new Interactive(block);

        // buttons_close (components)
        const buttons_closeButton = new Button(buttons_close);
        buttons_closeButton.spriteName = "pageCurlExit";
        buttons_closeButton.callback = () => this.onClose();
        buttons_closeButton.activeFrame = true;
        buttons_closeButton.pixelPerfect = true;

        // pageCurl04 (components)
        const pageCurl04Button = new Button(pageCurl04);
        pageCurl04Button.spriteName = "pageCurl04";
        pageCurl04Button.callback = () => {this.onNext()};

        // pageCurl03 (components)
        const pageCurl03Button = new Button(pageCurl03);
        pageCurl03Button.spriteName = "pageCurl03";
        pageCurl03Button.callback = () => this.onPrev();

        // upArrow (components)
        const upArrowButton = new Button(upArrow);
        upArrowButton.spriteName = "upArrow";
        upArrowButton.callback = () => this.onUp();
        upArrowButton.activeFrame = true;

        // downArrow (components)
        const downArrowButton = new Button(downArrow);
        downArrowButton.spriteName = "downArrow";
        downArrowButton.callback = () => this.onDown();
        downArrowButton.activeFrame = true;

        // pageCurlCover (components)
        const pageCurlCoverButton = new Button(pageCurlCover);
        pageCurlCoverButton.spriteName = "pageCurlCover";
        pageCurlCoverButton.callback = () => this.onCover();
        pageCurlCoverButton.activeFrame = true;
        pageCurlCoverButton.pixelPerfect = true;

        this.pageBackground = pageBackground;
        this.categoryTitle = categoryTitle;
        this.stamps = stamps;
        this.pageText = pageText;
        this.pageNumberText = pageNumberText;
        this.categoryTitleSmall = categoryTitleSmall;
        this.collectedStampsText = collectedStampsText;
        this.insideLines = insideLines;
        this.upArrow = upArrow;
        this.downArrow = downArrow;
        this.categoryImage = categoryImage;
        this.guide = guide;
        this.polaroid1 = polaroid1;
        this.polaroid1frame = polaroid1frame;
        this.polaroid2 = polaroid2;
        this.polaroid2frame = polaroid2frame;
        this.polaroid3 = polaroid3;
        this.polaroid3frame = polaroid3frame;
        this.polaroidView = polaroidView;
        this.stampPage = stampPage;
        this.cover = cover;
        this.listasdad = listasdad;

        /* START-USER-CTR-CODE */
        this.stampRows = 4
        this.stampCols = 4
        this.stampsPerPage = this.stampRows * this.stampCols

        this.categoryRows = 5
        this.categoryCols = 3
        this.categoriesPerPage = this.categoryRows * this.categoryCols

        this.contentRows = 5
        this.contentCols = 2
        this.contentsPerPage = this.contentRows * this.contentCols

        this.pinRows = 4
        this.pinCols = 7
        this.pinsPerPage = this.pinRows * this.pinCols

        this.unlockedStamps = []
        this.unseen = []
        this.stampbookInfo = {"colour": 1, "clasp": 1, "highlight": 1, "pattern": 0}
        this.coverStamps = []
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    updatePage() {
        if(this.page == 0) { 
            this.cover.visible = true
            this.cover.book = this
            this.cover.updateContent()
            this.stampPage.visible = false
        } else { 
            this.cover.visible = false
            this.stampPage.visible = true

            this.category = this.categories[this.page - 1]
            this.category.stamps.sort((a,b) => a.rank - b.rank);
            this.categoryTitle.text = this.category.display
            this.categoryTitle.x = this.category.is_contents_page ? 172 : 292
            this.categoryTitleSmall.text = `${this.category.display}:`
            this.collectedStampsText.text = this.category.is_pins_page ? this.unlockedPins.length : `${this.collectedStampsForCurrentCategory()}/${this.totalStamps(this.category).length}`
            this.guide.visible = this.category.is_contents_page
            this.categoryTitle.style.fontSize = this.category.stamps.length > 0 ? "50px" : "60px"
            this.categoryTitle.setStyle(this.categoryTitle.style)

            this.pageText.visible = this.pageNumberText.visible = this.categoryTitleSmall.visible = this.collectedStampsText.visible = this.categoryTitle.visible = this.insideLines.visible = !this.category.is_empty_page
            this.categoryImage.visible = !this.category.is_empty_page && !this.category.is_contents_page
            this.moveArrows(this.category.is_pins_page ? 2 : 0)

            this.destroyStamps()
            this.addStamps()
            this.addCategories()

            let backgroundLoader = new StampbookBackgroundLoader(this.scene, "insidePagesBackground", this.pageBackground)
            backgroundLoader.startItemLoad(this.category.group_id)

            if(!this.category.is_contents_page && !this.category.is_empty_page) {
                let categoryLoader = new StampbookBackgroundLoader(this.scene, "categoryHeader", this.categoryImage)
                categoryLoader.startItemLoad(this.category.group_id)
            } else {
                this.categoryTitleSmall.text = "Total Stamps:"    
            }

            if(this.category.is_pins_page) this.addPins()
            else for(let object of this.pinObjects) object.visible = false

            this.pageNumberText.text = `${this.page} of ${this.categories.length}`

            for(let object of this.iconObjects) object.updateContent()

            this.updatePolaroids()

            if(this.category.is_empty_page || this.category.is_contents_page || this.category.is_pins_page || this.category.is_secrets_page) this.polaroidView.visible = false
        }
    }

    destroyStamps() {
        this.stamps.removeAll()
    }

    createStampObjects() {
        this.stampObjects = []
        this.categoryObjects = []
        this.contentObjects = []
        this.iconObjects = []
        this.pinObjects = []

        for(let y = 0; y < this.stampRows; y++) {
            for(let x = 0; x < this.stampCols; x++) {
                const stamp = new StampItem(this.scene, 230 + (x*180), 254 + (y*170));
                this.stampPage.add(stamp);
                this.stampObjects.push(stamp)
                stamp.setDepth(5 + y)
            }
        }    

        for(let y = 0; y < this.categoryRows; y++) {
            for(let x = 0; x < this.categoryCols; x++) {
                const category = new StampCategory(this.scene, 223 + (x*362), 237 + (y*90));
                category.book = this
                this.stampPage.add(category);
                this.categoryObjects.push(category)
                category.setDepth(5 + y)
            }
        }

        for(let y = 0; y < this.contentRows; y++) {
            for(let x = 0; x < this.contentCols; x++) {
                const category = new StampCategory(this.scene, 223 + (x*400), 237 + (y*90));
                category.book = this
                this.stampPage.add(category);
                this.contentObjects.push(category)
                category.setDepth(5 + y)
            }
        }

        for(let y = 0; y < this.pinRows; y++) {
            for(let x = 0; x < this.pinCols; x++) {
                const pin = new StampPin(this.scene, 240 + (x*155), 280 + (y*155));
                this.stampPage.add(pin);
                this.pinObjects.push(pin)
                pin.setDepth(5 + y)
            }
        }

        let i = 0;
        for(let subCategory of this.world.stampController.getSubGroups(0)) {
            const category = new StampCategoryIcon(this.scene, 1471, 275 + (i++*80));
            category.book = this
            category.category = subCategory
            category.updateContent()
            this.stampPage.add(category);
            this.iconObjects.push(category);
        }
    }

    addStamps() {
        for(let x = 0; x < this.stampObjects.length; x++) {
            let idx = x + (this.offset * this.stampsPerPage)
            let stampObject = this.stampObjects[x]
            if(idx >= this.category.stamps.length) {
                stampObject.visible = false
                continue
            }

            stampObject.visible = true
            stampObject.stamp = this.category.stamps[idx]
            stampObject.unlocked = this.unlockedStamps.includes(stampObject.stamp.stamp_id)
            stampObject.updateContent()
        }

        this.upArrow.visible = (this.offset != 0)
        this.downArrow.visible = (this.category.stamps.length > ((this.offset + 1) * this.stampsPerPage))
    }

    addPins() {
        //this.unlockedPins = [1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16]
        for(let x = 0; x < this.pinObjects.length; x++) {
            let idx = x + (this.offset * this.pinsPerPage)
            let pinObject = this.pinObjects[x]
            if(idx >= this.unlockedPins.length) {
                pinObject.visible = false
                continue
            }

            pinObject.visible = true
            pinObject.item = this.unlockedPins[idx]
            pinObject.updateContent()
        }

        this.upArrow.visible = (this.offset != 0)
        this.downArrow.visible = (this.unlockedPins.length > ((this.offset + 1) * this.pinsPerPage))
    }

    moveArrows(type) {
        if(type == 1) { // 
            this.downArrow.x = 1259
            this.downArrow.y = 613
            this.upArrow.x = 1259
            this.upArrow.y = 242
            this.polaroidView.visible = false
        } else if(type == 2) {
            this.downArrow.x = 1332
            this.downArrow.y = 740
            this.upArrow.x = 1332
            this.upArrow.y = 255
            this.polaroidView.visible = false
        } else {
            this.downArrow.x = 890
            this.downArrow.y = 756
            this.upArrow.x = 890
            this.upArrow.y = 223
            this.polaroidView.visible = true
        }
    }

    addCategories() {
        let subCategories = this.subCategoryMap[this.category.group_id]
        if(subCategories) this.moveArrows(1)
        else subCategories = []

        let categoryObjects = this.category.is_contents_page ? this.contentObjects : this.categoryObjects
        let categoriesPerPage = this.category.is_contents_page ? this.contentsPerPage : this.categoriesPerPage

        let incorrectObjects = !this.category.is_contents_page ? this.contentObjects : this.categoryObjects

        for(let x = 0; x < categoryObjects.length; x++) {
            let idx = x + (this.offset * categoriesPerPage)
            let categoryObject = categoryObjects[x]
            if(idx >= subCategories.length) {
                categoryObject.visible = false
                continue
            }

            categoryObject.visible = true
            categoryObject.category = subCategories[idx]
            categoryObject.updateContent()
        }

        for(let incorrectObject of incorrectObjects) {
            incorrectObject.visible = false    
        }

        this.downArrow.visible = this.downArrow.visible || (subCategories.length > ((this.offset + 1) * this.categoriesPerPage))
    }

    collectedStampsForCurrentCategory() {
        return this.collectedStampsForCategory(this.category)
    }

    collectedStampsForCategory(category) {
        let counter = 0
        for(let stamp of this.totalStamps(category)) {
            if(this.unlockedStamps.includes(stamp.stamp_id)) counter += 1
        }
        return counter
    }

    initializeStamps() {
        this.categories = this.world.crumbs.stamps

        this.createStampObjects()
    }

    initializeCategories() {
        this.subCategoryMap = this.world.stampController.subCategoryMap
    }

    show(args) {
        super.show()

        this.page = 0

        this.initializeStamps()
        this.initializeCategories()
        this.updatePage()

        this.loadPlayerData(args)
    }

    loadPlayerData(args) {
        //if(args?.userId) {
            this.network.send('get_stamps', {userId: args?.userId} )
        //this optimization has no real benefit tbh and it has the disadvantage of maintainability, as you'd need to maintain separate code paths for you and everyone else
        /*} else {
            let result = {
                stamps: this.world.client.stamps
            }
            this.onResult(result)
        }*/
    }

    onNext() {
        if(this.page >= this.categories.length) return

        this.offset = 0
        this.page += 1
        this.updatePage()    
    }

    onPrev() {
        this.offset = 0
        this.page -= 1
        this.updatePage()    
    }

    onDown() {
        this.offset += 1
        this.updatePage()
    }

    onUp() {
        this.offset -= 1
        this.updatePage()
    }

    onResult(args) {
        this.unlockedStamps = args.stamps
        this.unlockedPins = args.inventory
        this.coverOnlyPins = args.coverOnly
        this.unseen = args.unseen
        this.username = args.username
        this.stampbookInfo = args.stampbook
        this.coverStamps = args.coverStamps
        this.playerColor = args.playerColor
        this.updatePage()
    }

    onCover() {
        this.offset = 0
        this.page = 0
        this.updatePage()
    }

    setCategory(category) {
        this.offset = 0
        let index = this.findIndex(category)
        this.page = index + 1
        this.updatePage()
    }

    findIndex(category) {
        for(let i = 0; i < this.categories.length; i++) {
            if(this.categories[i].group_id == category.group_id) return i
        }

        return -1
    }

    totalStamps(category) {
        return this.world.stampController.totalStamps(category.group_id)
    }

    onClose() {
        this.network.send("close_sprite", {})
        this.interface.destroyWidget(this)    
    }

    updatePolaroids() {
        const polaroids = this.world.crumbs.polaroids[this.category.group_id]?.polaroids
        if(!polaroids) return

        this.polaroid1.info = polaroids[0]
        this.polaroid1.book = this
        this.polaroid1.frame = this.polaroid1frame
        this.polaroid1.updateContent()

        this.polaroid2.info = polaroids[1]
        this.polaroid2.book = this
        this.polaroid2.frame = this.polaroid2frame
        this.polaroid2.prev = this.polaroid1
        this.polaroid2.updateContent()

        this.polaroid3.info = polaroids[2]
        this.polaroid3.book = this
        this.polaroid3.frame = this.polaroid3frame
        this.polaroid3.prev = this.polaroid2
        this.polaroid3.updateContent()
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
