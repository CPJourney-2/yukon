import BaseContainer from '@scenes/base/BaseContainer'
import PhotoLoader from '@engine/loaders/PhotoLoader'
import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class PhotoButton extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? -30.707796772258746);

        /** @type {Phaser.GameObjects.Image} */
        this.photo_button;
        /** @type {Phaser.GameObjects.Container} */
        this.photoContainer;
        /** @type {number} */
        this.pageNumber = 1;
        /** @type {number} */
        this.slotId = 1;


        // photo_button
        const photo_button = scene.add.image(0, 30.707796772258746, "commonbook", "cc-bgoutline");
        this.add(photo_button);

        // photoContainer
        const photoContainer = scene.add.container(0, 30.707796772258746);
        photoContainer.scaleX = 0.5;
        photoContainer.scaleY = 0.5;
        this.add(photoContainer);

        // penguin5
        const penguin5 = scene.add.image(0, 30.707796772258746, "commonbook", "cc-penguin-sil");
        this.add(penguin5);

        // photo_button (components)
        const photo_buttonButton = new Button(photo_button);
        photo_buttonButton.spriteName = "cc-bgoutline";
        photo_buttonButton.callback = () => this.interface.prompt.showItem(this.backgrounds[`page${this.pageNumber}`][this.slotId]);

        this.photo_button = photo_button;
        this.photoContainer = photoContainer;

        /* START-USER-CTR-CODE */

        this.photoLoader = new PhotoLoader(this.scene, this.photoContainer)

        this.backgrounds = this.scene.cache.json.get('catalog-backgrounds')
        
        this.scene.events.once('update', () => this.startLoad())

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    startLoad() {
        if (!this.backgrounds) return
        let item = this.backgrounds[`page${this.pageNumber}`][this.slotId]
        this.photoLoader.startItemLoad(item)
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
