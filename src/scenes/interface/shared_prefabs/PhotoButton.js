import BaseContainer from '@scenes/base/BaseContainer'
import PhotoLoader from '@engine/loaders/PhotoLoader'
import { SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class PhotoButton extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? -30.707796772258746);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.outline;
        /** @type {Phaser.GameObjects.Container} */
        this.photoContainer;
        /** @type {number} */
        this.itemId = 0;
        /** @type {string} */
        this.hoverColor = "#3A9ACC";


        // btn
        const btn = scene.add.rectangle(0, 30.707796772258746, 224, 224);
        this.add(btn);

        // outline
        const outline = scene.add.rectangle(0, 30.707796772258746, 224, 224);
        outline.visible = false;
        outline.isFilled = true;
        this.add(outline);

        // photoContainer
        const photoContainer = scene.add.container(0, 30.707796772258746);
        photoContainer.scaleX = 0.5;
        photoContainer.scaleY = 0.5;
        this.add(photoContainer);

        // penguin
        const penguin = scene.add.image(0, 30.707796772258746, "commonbook", "cc-penguin-sil");
        this.add(penguin);

        // btn (components)
        const btnSimpleButton = new SimpleButton(btn);
        btnSimpleButton.hoverCallback = () => this.outline.visible = true;
        btnSimpleButton.hoverOutCallback = () => this.outline.visible = false;
        btnSimpleButton.callback = () => this.interface.prompt.showItem(this.itemId);

        this.outline = outline;
        this.photoContainer = photoContainer;

        /* START-USER-CTR-CODE */

        this.photoLoader = new PhotoLoader(this.scene, this.photoContainer)

        this.scene.events.once('update', () => this.startLoad())

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    startLoad() {
        this.outline.fillColor = parseInt(this.hoverColor.substring(1), 16)
        this.photoLoader.startItemLoad(this.itemId)
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
