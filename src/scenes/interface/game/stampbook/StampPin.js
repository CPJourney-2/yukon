import { SimpleButton } from '@components/components'
import ItemIconLoader from '@engine/loaders/ItemIconLoader'
import StampItem from './StampItem'

/* START OF COMPILED CODE */

export default class StampPin extends StampItem {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangleCallback;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangleCover;
        /** @type {Phaser.GameObjects.Text} */
        this.idText;
        /** @type {Phaser.GameObjects.Text} */
        this.stampDescription;
        /** @type {Phaser.GameObjects.Text} */
        this.stampTitle;
        /** @type {Phaser.GameObjects.Container} */
        this.stampInfo;


        // rectangleCallback
        const rectangleCallback = scene.add.rectangle(0, 0, 180, 180);
        rectangleCallback.visible = false;
        rectangleCallback.fillColor = 16713736;
        this.add(rectangleCallback);

        // rectangleCover
        const rectangleCover = scene.add.rectangle(0, 0, 180, 128);
        rectangleCover.visible = false;
        rectangleCover.fillColor = 16713736;
        this.add(rectangleCover);

        // idText
        const idText = scene.add.text(0, 0, "", {});
        idText.setOrigin(0.5, 0.5);
        idText.visible = false;
        idText.text = "420";
        idText.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "64px" });
        this.add(idText);

        // stampInfo
        const stampInfo = scene.add.container(0, 0);
        stampInfo.visible = false;
        this.add(stampInfo);

        // teststamp
        const teststamp = scene.add.image(0, 0, "teststamp");
        teststamp.visible = false;
        stampInfo.add(teststamp);

        // chatBubble
        const chatBubble = scene.add.image(0, -126, "stampbook-inside", "chatBubble");
        stampInfo.add(chatBubble);

        // stampDescription
        const stampDescription = scene.add.text(-118, -152, "", {});
        stampDescription.text = "Be in the same room as Rockhopper";
        stampDescription.setStyle({ "color": "#595959", "fixedWidth":240,"fixedHeight":96,"fontFamily": "Burbank Small", "fontSize": "20px", "stroke": "#595959" });
        stampDescription.setWordWrapWidth(240);
        stampInfo.add(stampDescription);

        // stampTitle
        const stampTitle = scene.add.text(-119, -188, "", {});
        stampTitle.text = "Among Us";
        stampTitle.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold", "stroke": "#000000ff" });
        stampInfo.add(stampTitle);

        this.rectangleCallback = rectangleCallback;
        this.rectangleCover = rectangleCover;
        this.idText = idText;
        this.stampDescription = stampDescription;
        this.stampTitle = stampTitle;
        this.stampInfo = stampInfo;

        /* START-USER-CTR-CODE */
        this.itemIconLoader = new ItemIconLoader(scene, this)
        this.type = 'clothing'

        this.setEvents()
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    updateLoader() {
        if(this.big && this.itemIconLoader.iconSize != 240) this.itemIconLoader = new ItemIconLoader(this.scene, this, this.big)
        if(!this.big && this.itemIconLoader.iconSize != 120) this.itemIconLoader = new ItemIconLoader(this.scene, this, this.big)
    }

    updateContent() {
        this.updateLoader()

        this.idText.text = this.item
        this.itemObj = this.scene.world.crumbs.items[this.item]
        this.stampTitle.text = this.itemObj.name
        this.stampDescription.text = `Released: ${this.itemObj.released}`

        if(this.icon) {
            this.icon.destroy()
            this.icon = null
        }

        if(this.spinner) {
            this.spinner.destroy()
            this.spinner = null
        }

        this.itemIconLoader.startItemLoad(this.item)
    }

    onHover() {
        this.bringToTop(this.stampInfo)
        this.stampInfo.visible = true
    }

    onHoverOut() {
        this.stampInfo.visible = false
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
