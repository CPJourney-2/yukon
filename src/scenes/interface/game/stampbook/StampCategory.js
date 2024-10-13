import { SimpleButton } from '@components/components'
import StampbookBackgroundLoader from '@engine/loaders/StampbookBackgroundLoader'

/* START OF COMPILED CODE */

export default class StampCategory extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {Phaser.GameObjects.Image} */
        this.imageInactive;
        /** @type {Phaser.GameObjects.Container} */
        this.inactiveContainer;
        /** @type {Phaser.GameObjects.Image} */
        this.imageActive;
        /** @type {Phaser.GameObjects.Container} */
        this.activeContainer;


        // rectangle_1
        const rectangle_1 = scene.add.rectangle(-61, 5, 250, 50);
        rectangle_1.setOrigin(0, 0.5);
        rectangle_1.fillColor = 16723245;
        this.add(rectangle_1);

        // text
        const text = scene.add.text(22, -6, "", {});
        text.text = "Activities";
        text.setStyle({ "color": "#666666", "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold", "stroke": "#666666" });
        this.add(text);

        // inactiveContainer
        const inactiveContainer = scene.add.container(-22, 6);
        this.add(inactiveContainer);

        // imageInactive
        const imageInactive = scene.add.image(0, 0, "testCategoryIcon");
        inactiveContainer.add(imageInactive);

        // activeContainer
        const activeContainer = scene.add.container(-22, 6);
        activeContainer.visible = false;
        this.add(activeContainer);

        // imageActive
        const imageActive = scene.add.image(0, 0, "testCategoryIcon");
        activeContainer.add(imageActive);

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.hoverCallback = () => this.onHover();
        rectangle_1SimpleButton.hoverOutCallback = () => this.onHoverOut();
        rectangle_1SimpleButton.callback = () => this.onClick();

        this.text = text;
        this.imageInactive = imageInactive;
        this.inactiveContainer = inactiveContainer;
        this.imageActive = imageActive;
        this.activeContainer = activeContainer;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    updateContent() {
        //todo: the image is supposed 2 b a hover button!!!!!!!!!!!!
        this.text.text = this.category.display
        let inactiveLoader = new StampbookBackgroundLoader(this.scene, "category/inactive", this.imageInactive)
        inactiveLoader.startItemLoad(this.category.group_id)

        let activeLoader = new StampbookBackgroundLoader(this.scene, "category/active", this.imageActive)
        activeLoader.startItemLoad(this.category.group_id)
    }

    onHover() {
        this.text.style.color = "#343434"
        this.text.style.stroke = "#343434"
        this.text.setStyle(this.text.style)

        this.activeContainer.visible = true
        this.inactiveContainer.visible = false
    }

    onHoverOut() {
        this.text.style.color = "#666666"
        this.text.style.stroke = "#666666"
        this.text.setStyle(this.text.style)

        this.activeContainer.visible = false
        this.inactiveContainer.visible = true
    }

    onClick() {
        this.book.setCategory(this.category)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
