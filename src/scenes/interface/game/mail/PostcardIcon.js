import PostcardIconLoader from '@engine/loaders/PostcardIconLoader'
import BaseContainer from '@scenes/base/BaseContainer'

import { SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class PostcardIcon extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.image;
        /** @type {Phaser.GameObjects.Text} */
        this.textField;


        // mail_book_cardicon
        const mail_book_cardicon = scene.add.image(0, 0, "mail-book-cardicon");
        this.add(mail_book_cardicon);

        // image
        const image = scene.add.image(0, 0, "mail-book-testIcon");
        this.add(image);

        // textField
        const textField = scene.add.text(0, 128, "", {});
        textField.setOrigin(0.5, 0);
        textField.text = "line1\nline2";
        textField.setStyle({ "align": "center", "color": "#000", "fixedWidth":350,"fontFamily": "Burbank Small", "fontSize": "22px" });
        this.add(textField);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(0, 0, 320, 230);
        this.add(rectangle_1);

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.callback = () => this.onClick();

        this.image = image;
        this.textField = textField;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    updatePostcard(id, subject) {
        this.cardId = id
        this.loadCard()
        this.textField.text = subject
    }

    loadCard() {
        let backgroundLoader = new PostcardIconLoader(this.scene, this.cardId, this.image)
        backgroundLoader.startItemLoad(`${this.cardId}`)
    }
	
	onClick() {
		this.parentContainer.parentContainer.send(this.cardId)
	}

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
