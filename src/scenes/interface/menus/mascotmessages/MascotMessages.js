import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, SimpleButton, DraggableContainer, Draggable} from '@components/components'

import ScrollableList from '@engine/interface/containers/ScrollableList'
import Item from './Item'
import CatItem from './CatItem'

export const preload = {
    key: 'telescope-pack',
    url: 'assets/media/interface/game/telescope/telescope-pack.json',
    loadString: ['loading', 'Mascot Messages']
}
/* START OF COMPILED CODE */

export default class MascotMessages extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg_2;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg_1;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg;
        /** @type {Phaser.GameObjects.Text} */
        this.scriptsForTitle;
        /** @type {Item} */
        this.dialogueItem1;
        /** @type {Item} */
        this.dialogueItem2;
        /** @type {Item} */
        this.dialogueItem3;
        /** @type {Item} */
        this.dialogueItem4;
        /** @type {Item} */
        this.dialogueItem5;
        /** @type {CatItem} */
        this.catItem1;
        /** @type {CatItem} */
        this.catItem2;
        /** @type {CatItem} */
        this.catItem3;
        /** @type {CatItem} */
        this.catItem4;
        /** @type {CatItem} */
        this.catItem5;
        /** @type {Phaser.GameObjects.Container} */
        this.dialogueItems;
        /** @type {Phaser.GameObjects.Text} */
        this.noDialogueAvailable;
        /** @type {Phaser.GameObjects.Container} */
        this.main;
        /** @type {Item[]} */
        this.items;
        /** @type {CatItem[]} */
        this.catitems;


        // main
        const main = scene.add.container(-64, -345);
        this.add(main);

        // bg_2
        const bg_2 = scene.add.nineslice(203, 347, "prompt", "window", 400, 200, 44, 39, 40, 41);
        bg_2.tint = 16777215;
        main.add(bg_2);

        // bg_1
        const bg_1 = scene.add.nineslice(-121, 148, "prompt", "window", 300, 410, 44, 39, 40, 41);
        bg_1.tint = 16777215;
        main.add(bg_1);

        // bg
        const bg = scene.add.nineslice(227, 150, "prompt", "window", 500, 410, 44, 39, 40, 41);
        bg.tint = 8224125;
        main.add(bg);

        // scriptsForTitle
        const scriptsForTitle = scene.add.text(-2, -20, "", {});
        scriptsForTitle.text = "SCRIPTS FOR ROCKHOPPERRRR";
        scriptsForTitle.setStyle({ "color": "#e2e2e2ff", "fontFamily": "Arial", "fontSize": "23px", "fontStyle": "bold" });
        main.add(scriptsForTitle);

        // x_button_1
        const x_button_1 = scene.add.image(435, 36, "main", "blue-button");
        x_button_1.scaleX = 0.7;
        x_button_1.scaleY = 0.7;
        main.add(x_button_1);

        // x_button_3
        const x_button_3 = scene.add.image(433, -6, "main", "blue-x");
        main.add(x_button_3);

        // dialogueItems
        const dialogueItems = scene.add.container(2, 29);
        main.add(dialogueItems);

        // dialogueItem1
        const dialogueItem1 = new Item(scene, 0, 1);
        dialogueItems.add(dialogueItem1);

        // dialogueItem2
        const dialogueItem2 = new Item(scene, 0, 64);
        dialogueItems.add(dialogueItem2);

        // dialogueItem3
        const dialogueItem3 = new Item(scene, 0, 126);
        dialogueItems.add(dialogueItem3);

        // dialogueItem4
        const dialogueItem4 = new Item(scene, 0, 192);
        dialogueItems.add(dialogueItem4);

        // dialogueItem5
        const dialogueItem5 = new Item(scene, 0, 257);
        dialogueItems.add(dialogueItem5);

        // catItem1
        const catItem1 = new CatItem(scene, -248, -9);
        dialogueItems.add(catItem1);

        // catItem2
        const catItem2 = new CatItem(scene, -248, 52);
        dialogueItems.add(catItem2);

        // catItem3
        const catItem3 = new CatItem(scene, -248, 113);
        dialogueItems.add(catItem3);

        // catItem4
        const catItem4 = new CatItem(scene, -248, 177);
        dialogueItems.add(catItem4);

        // catItem5
        const catItem5 = new CatItem(scene, -248, 246);
        dialogueItems.add(catItem5);

        // text
        const text = scene.add.text(-228, -32, "", {});
        text.text = "CATEGORIES";
        text.setStyle({ "fontFamily": "Arial", "fontSize": "23px", "fontStyle": "bold" });
        main.add(text);

        // x_button
        const x_button = scene.add.image(436, 307, "main", "blue-button");
        x_button.scaleX = 0.7;
        x_button.scaleY = 0.7;
        main.add(x_button);

        // noDialogueAvailable
        const noDialogueAvailable = scene.add.text(73, 111, "", {});
        noDialogueAvailable.visible = false;
        noDialogueAvailable.text = "No scripts exist\nfor this mascot.";
        noDialogueAvailable.setStyle({ "color": "#e2e2e2ff", "fontFamily": "Arial", "fontSize": "40px", "fontStyle": "bold" });
        main.add(noDialogueAvailable);

        // blue_arrow
        const blue_arrow = scene.add.image(435, 35, "main", "blue-arrow");
        blue_arrow.scaleX = 0.7;
        blue_arrow.scaleY = 0.7;
        main.add(blue_arrow);

        // blue_arrow_1
        const blue_arrow_1 = scene.add.image(436, 305, "main", "blue-arrow");
        blue_arrow_1.scaleX = 0.7;
        blue_arrow_1.scaleY = 0.7;
        blue_arrow_1.flipY = true;
        main.add(blue_arrow_1);

        // x_button_2
        const x_button_2 = scene.add.image(-41, 308, "main", "blue-button");
        x_button_2.scaleX = 0.7;
        x_button_2.scaleY = 0.7;
        main.add(x_button_2);

        // x_button_4
        const x_button_4 = scene.add.image(-44, -4, "main", "blue-button");
        x_button_4.scaleX = 0.7;
        x_button_4.scaleY = 0.7;
        main.add(x_button_4);

        // blue_arrow_2
        const blue_arrow_2 = scene.add.image(-41, 306, "main", "blue-arrow");
        blue_arrow_2.scaleX = 0.7;
        blue_arrow_2.scaleY = 0.7;
        blue_arrow_2.flipY = true;
        main.add(blue_arrow_2);

        // blue_arrow_3
        const blue_arrow_3 = scene.add.image(-44, -5, "main", "blue-arrow");
        blue_arrow_3.scaleX = 0.7;
        blue_arrow_3.scaleY = 0.7;
        main.add(blue_arrow_3);

        // verify_btn_1
        const verify_btn_1 = scene.add.image(202, 389, "main", "help-button");
        verify_btn_1.scaleX = 0.5;
        verify_btn_1.scaleY = 0.5;
        main.add(verify_btn_1);

        // text_2
        const text_2 = scene.add.text(124, 371, "", {});
        text_2.text = "Mod Menu";
        text_2.setStyle({ "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        main.add(text_2);

        // lists
        const items = [dialogueItem1, dialogueItem2, dialogueItem3, dialogueItem4, dialogueItem5];
        const catitems = [catItem1, catItem2, catItem3, catItem4, catItem5];

        // main (components)
        const mainDraggableContainer = new DraggableContainer(main);
        mainDraggableContainer.handle = bg;

        // bg_2 (components)
        new Interactive(bg_2);

        // bg_1 (components)
        new Interactive(bg_1);

        // x_button_1 (components)
        const x_button_1Button = new Button(x_button_1);
        x_button_1Button.spriteName = "blue-button";
        x_button_1Button.callback = () => this.scriptsListController.scrollUp();
        x_button_1Button.activeFrame = true;

        // x_button_3 (components)
        const x_button_3SimpleButton = new SimpleButton(x_button_3);
        x_button_3SimpleButton.callback = () => { this.visible = false };

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.scriptsListController.scrollDown();
        x_buttonButton.activeFrame = true;

        // x_button_2 (components)
        const x_button_2Button = new Button(x_button_2);
        x_button_2Button.spriteName = "blue-button";
        x_button_2Button.callback = () => this.categoriesListController.scrollDown();
        x_button_2Button.activeFrame = true;

        // x_button_4 (components)
        const x_button_4Button = new Button(x_button_4);
        x_button_4Button.spriteName = "blue-button";
        x_button_4Button.callback = () => this.categoriesListController.scrollUp();
        x_button_4Button.activeFrame = true;

        // verify_btn_1 (components)
        const verify_btn_1Button = new Button(verify_btn_1);
        verify_btn_1Button.spriteName = "help-button";
        verify_btn_1Button.callback = () => {this.visible = false; this.interface.loadWidget('ModPanel')};

        this.bg_2 = bg_2;
        this.bg_1 = bg_1;
        this.bg = bg;
        this.scriptsForTitle = scriptsForTitle;
        this.dialogueItem1 = dialogueItem1;
        this.dialogueItem2 = dialogueItem2;
        this.dialogueItem3 = dialogueItem3;
        this.dialogueItem4 = dialogueItem4;
        this.dialogueItem5 = dialogueItem5;
        this.catItem1 = catItem1;
        this.catItem2 = catItem2;
        this.catItem3 = catItem3;
        this.catItem4 = catItem4;
        this.catItem5 = catItem5;
        this.dialogueItems = dialogueItems;
        this.noDialogueAvailable = noDialogueAvailable;
        this.main = main;
        this.items = items;
        this.catitems = catitems;

        /* START-USER-CTR-CODE */
        this._dontHideInputs = true
        this.currentCategory = 0

        this.scriptsForTitle.text = `SCRIPTS FOR ${this.world.client.penguin.username.toUpperCase()}`
        if(!this.crumbs.mascot_messages[this.world.client.penguin.username]) {
            this.dialogueItems.visible = false
            this.noDialogueAvailable.visible = true
            return
        }

        //Filter out any categories that may be inactive
        let mascotCrumbs = []
        for(let obj of this.crumbs.mascot_messages[this.world.client.penguin.username]) {
            if(!obj.active) continue
            mascotCrumbs.push(obj)
        }
        this.mascotCrumbs = mascotCrumbs

        this.currentCategoryScripts = this.mascotCrumbs[this.currentCategory].scripts

        //List of categories
        let catCrumbs = []
        for(let obj of mascotCrumbs) {
            catCrumbs.push(obj.category)
        }
        this.catCrumbs = catCrumbs

        this.scriptsListController = new ScrollableList(this,5,this.currentCategoryScripts,(i,j) => this.onScriptItemLoop(i,j),() => this.onScriptPageChange())
        this.categoriesListController = new ScrollableList(this,5,this.catCrumbs,(i,j) => this.onCatItem(i,j),() => this.onCatPage())
        //this.showUsers()
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()
    }

    changeCategory(cat) {
        for(let i = 0; i < this.mascotCrumbs.length; i++) {
            if(this.mascotCrumbs[i].category == cat) {
                this.currentCategory = i
                this.currentCategoryScripts = this.mascotCrumbs[this.currentCategory].scripts
                break
            }
        }
        this.scriptsListController.updateArrayAndReset(this.currentCategoryScripts)
    }

    onScriptPageChange() {
        for(let p of this.items) p.visible = false
    }

    onScriptItemLoop(i,j) {
        this[`dialogueItem${i + 1}`].visible = true
        this[`dialogueItem${i + 1}`].setItem(j[i])
    }

    onCatPage() {
        for(let p of this.catitems) p.visible = false
    }

    onCatItem(i,j) {
        this[`catItem${i + 1}`].visible = true
        this[`catItem${i + 1}`].setItem(j[i])
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */