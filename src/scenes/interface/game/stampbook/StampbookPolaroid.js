import StampbookBackgroundLoader from '@engine/loaders/StampbookBackgroundLoader'

import { SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class StampbookPolaroid extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.backgroundGrey;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.bodyColor;
        /** @type {Phaser.GameObjects.Image} */
        this.image;
        /** @type {Phaser.GameObjects.Text} */
        this.stampCondition;
        /** @type {Phaser.GameObjects.Container} */
        this.unlockContainer;


        // backgroundGrey
        const backgroundGrey = scene.add.rectangle(0, 0, 300, 270);
        backgroundGrey.setOrigin(0, 0);
        backgroundGrey.isFilled = true;
        backgroundGrey.fillColor = 13619151;
        this.add(backgroundGrey);

        // bodyColor
        const bodyColor = scene.add.rectangle(0, 0, 300, 270);
        bodyColor.setOrigin(0, 0);
        bodyColor.visible = false;
        bodyColor.isFilled = true;
        bodyColor.fillColor = 14947605;
        this.add(bodyColor);

        // image
        const image = scene.add.image(0, 0, "testPolaroid");
        image.setOrigin(0, 0);
        image.visible = false;
        this.add(image);

        // unlockContainer
        const unlockContainer = scene.add.container(130, 125);
        unlockContainer.alpha = 0.5;
        this.add(unlockContainer);

        // rectangleHover
        const rectangleHover = scene.add.rectangle(30, 34, 350, 350);
        unlockContainer.add(rectangleHover);

        // polaroidStampIcon
        const polaroidStampIcon = scene.add.image(56, 33, "stampbook-editor", "polaroidStampIcon");
        polaroidStampIcon.scaleX = 0.75;
        polaroidStampIcon.scaleY = 0.75;
        unlockContainer.add(polaroidStampIcon);

        // stampCondition
        const stampCondition = scene.add.text(28, 14, "", {});
        stampCondition.scaleX = 0.75;
        stampCondition.scaleY = 0.75;
        stampCondition.setOrigin(1, 0);
        stampCondition.text = "60";
        stampCondition.setStyle({ "align": "right", "color": "#666666", "fontFamily": "Burbank Small", "fontSize": "44px", "fontStyle": "bold" });
        unlockContainer.add(stampCondition);

        // rectangleHover (components)
        const rectangleHoverSimpleButton = new SimpleButton(rectangleHover);
        rectangleHoverSimpleButton.hoverCallback = () => this.onHover();
        rectangleHoverSimpleButton.hoverOutCallback = () => this.onHoverOut();

        this.backgroundGrey = backgroundGrey;
        this.bodyColor = bodyColor;
        this.image = image;
        this.stampCondition = stampCondition;
        this.unlockContainer = unlockContainer;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get unlocked() {
        return this.book.collectedStampsForCurrentCategory() >= this.info.stamp_count
    }

    updateContent() {
        this.stampCondition.text = this.info.stamp_count
        this.hideEverything()

        if(this.unlocked) this.startLoad()
        else this.displayLockedCondition()
    }

    hideEverything() {
        this.onHoverOut()
        this.backgroundGrey.visible = this.bodyColor.visible = this.image.visible = this.unlockContainer.visible = false
    }

    startLoad() {
        this.bodyColor.fillColor = this.book.world.getColor(this.book.playerColor)
        this.bodyColor.visible = false
        this.unlockContainer.visible = false
        this.frame.visible = this.backgroundGrey.visible = true

        let backgroundLoader = new StampbookBackgroundLoader(this.scene, "polaroids", this.image, () => {this.bodyColor.visible = true})
        backgroundLoader.startItemLoad(`${this.info.polaroid_id}_transparent`)
    }

    displayLockedCondition() {
        this.unlockContainer.visible = (!this.prev || this.prev.unlocked) && !this.unlocked
        this.frame.visible = this.backgroundGrey.visible = this.unlocked
        this.image.itemBeingLoaded = null
    }

    onHover() {
        this.unlockContainer.alpha = 1
    }

    onHoverOut() {
        this.unlockContainer.alpha = 0.5
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
