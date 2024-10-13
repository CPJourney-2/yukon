import { Button } from '@components/components'
import StampbookBackgroundLoader from '@engine/loaders/StampbookBackgroundLoader'
// You can write more code here

/* START OF COMPILED CODE */

export default class StampCategoryIcon extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.button;
        /** @type {Phaser.GameObjects.Image} */
        this.buttonSelected;
        /** @type {Phaser.GameObjects.Image} */
        this.icon;


        // button
        const button = scene.add.image(0, 0, "stampbook-inside", "iconTabButton");
        this.add(button);

        // buttonSelected
        const buttonSelected = scene.add.image(0, 0, "stampbook-inside", "iconTabButton-selected");
        this.add(buttonSelected);

        // icon
        const icon = scene.add.image(-3, 0, "testCategoryHeader");
        icon.scaleX = 0.45;
        icon.scaleY = 0.45;
        this.add(icon);

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "iconTabButton";
        buttonButton.hoverCallback = () => this.onHover();
        buttonButton.hoverOutCallback = () => this.onHoverOut();
        buttonButton.callback = () => this.onClick();

        this.button = button;
        this.buttonSelected = buttonSelected;
        this.icon = icon;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    updateContent() {
        //todo: the image is supposed 2 b a hover button!!!!!!!!!!!!
        let categoryLoader = new StampbookBackgroundLoader(this.scene, "categoryHeader", this.icon)
        categoryLoader.startItemLoad(this.category.group_id)

        if(this.book.findIndex(this.category) == this.book.page - 1) {
            this.buttonSelected.visible = true
            this.button.visible = false
        } else {
            this.buttonSelected.visible = false
            this.button.visible = true
        }
    }
	
	onHover() {
		this.icon.scale = 0.5
	}
	
	onHoverOut() {
		this.icon.scale = 0.45	
	}

    onClick() {
		this.onHoverOut()
		
        this.book.setCategory(this.category)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
