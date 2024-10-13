
import { SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class Tile extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.outline;


        // outline
        const outline = scene.add.rectangle(0, 0, 200, 200);
        outline.setOrigin(0, 0);
        outline.fillColor = 5134707;
        outline.isStroked = true;
        outline.lineWidth = 3;
        this.add(outline);

        this.outline = outline;

        /* START-USER-CTR-CODE */
        this.id = 0
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    addImage(x, y) {
        const parentContainer = this.parentContainer.parentContainer
        let image
        if(parentContainer.imgAtlas == '') {
            image = this.scene.add.image(0, 0, parentContainer.imgKey)
        } else {
            image = this.scene.add.image(0, 0, parentContainer.imgAtlas, parentContainer.imgKey)
        }
        image.setCrop(x, y, 200, 200)
        image.setSize(200, 200)
        image.setDisplayOrigin(0,0)
        image.setX(0 - x)
        image.setY(0 - y)

        this.add(image)
        this.bringToTop(this.outline)
    }

    addInteractive(callback) {
        const component = new SimpleButton(this.outline)
        component.callback = callback
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
