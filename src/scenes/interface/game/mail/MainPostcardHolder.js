import PostcardLoader from '@engine/loaders/PostcardLoader'
import BaseContainer from '@scenes/base/BaseContainer'

import Spinner from '@scenes/interface/menus/load/Spinner'

/* START OF COMPILED CODE */

export default class MainPostcardHolder extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Spinner} */
        this.spinner;
        /** @type {Phaser.GameObjects.Image} */
        this.nullcard;
        /** @type {Phaser.GameObjects.Container} */
        this.holderContainer;


        // spinner
        const spinner = new Spinner(scene, 489, 351);
        this.add(spinner);

        // nullcard
        const nullcard = scene.add.image(0, 0, "mail-book-sendpopup", "impostorcard");
        nullcard.setOrigin(0, 0);
        this.add(nullcard);

        // holderContainer
        const holderContainer = scene.add.container(0, 0);
        this.add(holderContainer);

        this.spinner = spinner;
        this.nullcard = nullcard;
        this.holderContainer = holderContainer;

        /* START-USER-CTR-CODE */
        this.nullcard.visible = false
        this.postcardLoader = new PostcardLoader(scene)
        this.postcardLoader.on('loaderror', this.onPostcardLoadError, this)
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    updatePostcard(card, inputEnabled = true) {
        this.card = card
        this.inputEnabled = inputEnabled
        this.loadCard()
    }

    loadCard() {
        this.nullcard.visible = false
        if(this.cardHolder) this.cardHolder.destroy()

        this.spinner.start()

        const id = this.card.id

        this.postcardLoader.loadPostcard(this.card.postcardId, (postcardClass) => this.addPostcard(postcardClass, id))

        //this.cardHolder = new this.crumbs.postcardHolders[info.holder].scene.default(this.scene)
        //this.cardHolder.updatePostcard(this.card)
    }

    addPostcard(postcardClass, id) {
        if (id !== this.card.id) {
            return
        }

        try {
            this.spinner.stop()
            this.cardHolder = new postcardClass(this.scene)
            this.holderContainer.add(this.cardHolder)
            this.cardHolder.setText(this.card)

            if(this.inputEnabled) this.cardHolder.enableInput()

            //this.addAt(this.currentPrefab, 2)

        } catch (error) {
            console.error(error)
        }
    }

    onPostcardLoadError() {
        this.spinner.stop()
        this.nullcard.visible = true
        if(this.cardHolder) this.cardHolder.destroy()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
