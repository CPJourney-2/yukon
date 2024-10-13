
// You can write more code here
import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive } from '@components/components'

import BanHistoryItem from './BanHistoryItem'

/* START OF COMPILED CODE */

export default class BanHistory extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 737, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.title;
        /** @type {Phaser.GameObjects.Text} */
        this.bannedByText;
        /** @type {BanHistoryItem} */
        this.banHistoryItem1;
        /** @type {BanHistoryItem} */
        this.banHistoryItem2;
        /** @type {BanHistoryItem} */
        this.banHistoryItem3;
        /** @type {BanHistoryItem} */
        this.banHistoryItem5;
        /** @type {BanHistoryItem} */
        this.banHistoryItem4;
        /** @type {BanHistoryItem} */
        this.banHistoryItem6;
        /** @type {Phaser.GameObjects.Container} */
        this.upBtn;
        /** @type {Phaser.GameObjects.Container} */
        this.downBtn;
        /** @type {BanHistoryItem[]} */
        this.historyItems;


        // nineslice_1
        const nineslice_1 = scene.add.nineslice(-704, 0, "prompt", "window", 1420, 800, 43, 38, 40, 40);
        nineslice_1.setOrigin(0, 0.5);
        this.add(nineslice_1);

        // title
        const title = scene.add.text(26, -343, "", {});
        title.setOrigin(0.5, 0.5);
        title.text = "AMMAN'S BAN HISTORY";
        title.setStyle({ "align": "center", "fixedWidth":1000,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        this.add(title);

        // x_button
        const x_button = scene.add.image(662, -349, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(662, -351, "main", "blue-x");
        this.add(blue_x);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(-508, -270, 330, 50);
        rectangle_1.isFilled = true;
        rectangle_1.isStroked = true;
        rectangle_1.strokeColor = 0;
        rectangle_1.lineWidth = 5;
        this.add(rectangle_1);

        // textContent
        const textContent = scene.add.text(-662, -287, "", {});
        textContent.text = "Issued";
        textContent.setStyle({ "color": "#000", "fontFamily": "Arial Narrow", "fontSize": "30px", "fontStyle": "bold" });
        textContent.setLineSpacing(-5);
        this.add(textContent);

        // rectangle
        const rectangle = scene.add.rectangle(-180, -270, 330, 50);
        rectangle.isFilled = true;
        rectangle.isStroked = true;
        rectangle.strokeColor = 0;
        rectangle.lineWidth = 5;
        this.add(rectangle);

        // textContent_1
        const textContent_1 = scene.add.text(-334, -287, "", {});
        textContent_1.text = "Expiry";
        textContent_1.setStyle({ "color": "#000", "fontFamily": "Arial Narrow", "fontSize": "30px", "fontStyle": "bold" });
        textContent_1.setLineSpacing(-5);
        this.add(textContent_1);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(131, -270, 300, 50);
        rectangle_2.isFilled = true;
        rectangle_2.isStroked = true;
        rectangle_2.strokeColor = 0;
        rectangle_2.lineWidth = 5;
        this.add(rectangle_2);

        // bannedByText
        const bannedByText = scene.add.text(-10, -288, "", {});
        bannedByText.text = "Banned by";
        bannedByText.setStyle({ "color": "#000", "fontFamily": "Arial Narrow", "fontSize": "30px", "fontStyle": "bold" });
        bannedByText.setLineSpacing(-5);
        this.add(bannedByText);

        // rectangle_3
        const rectangle_3 = scene.add.rectangle(447, -270, 340, 50);
        rectangle_3.isFilled = true;
        rectangle_3.isStroked = true;
        rectangle_3.strokeColor = 0;
        rectangle_3.lineWidth = 5;
        this.add(rectangle_3);

        // textContent_3
        const textContent_3 = scene.add.text(288, -287, "", {});
        textContent_3.text = "Reason";
        textContent_3.setStyle({ "color": "#000", "fontFamily": "Arial Narrow", "fontSize": "30px", "fontStyle": "bold" });
        textContent_3.setLineSpacing(-5);
        this.add(textContent_3);

        // banHistoryItem1
        const banHistoryItem1 = new BanHistoryItem(scene, -675, -249);
        this.add(banHistoryItem1);

        // banHistoryItem2
        const banHistoryItem2 = new BanHistoryItem(scene, -675, -148);
        this.add(banHistoryItem2);

        // banHistoryItem3
        const banHistoryItem3 = new BanHistoryItem(scene, -675, -47);
        this.add(banHistoryItem3);

        // banHistoryItem5
        const banHistoryItem5 = new BanHistoryItem(scene, -675, 155);
        this.add(banHistoryItem5);

        // banHistoryItem4
        const banHistoryItem4 = new BanHistoryItem(scene, -675, 54);
        this.add(banHistoryItem4);

        // banHistoryItem6
        const banHistoryItem6 = new BanHistoryItem(scene, -675, 256);
        this.add(banHistoryItem6);

        // upBtn
        const upBtn = scene.add.container(662, -269);
        this.add(upBtn);

        // x_button_1
        const x_button_1 = scene.add.image(0, 0, "main", "blue-button");
        upBtn.add(x_button_1);

        // blue_arrow
        const blue_arrow = scene.add.image(0, -2, "main", "blue-arrow");
        upBtn.add(blue_arrow);

        // downBtn
        const downBtn = scene.add.container(662, 334);
        this.add(downBtn);

        // x_button_2
        const x_button_2 = scene.add.image(0, 0, "main", "blue-button");
        downBtn.add(x_button_2);

        // blue_arrow_1
        const blue_arrow_1 = scene.add.image(0, -2, "main", "blue-arrow");
        blue_arrow_1.flipY = true;
        downBtn.add(blue_arrow_1);

        // lists
        const historyItems = [banHistoryItem1, banHistoryItem2, banHistoryItem3, banHistoryItem4, banHistoryItem5, banHistoryItem6];

        // nineslice_1 (components)
        new Interactive(nineslice_1);

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.hide();
        x_buttonButton.activeFrame = true;

        // x_button_1 (components)
        const x_button_1Button = new Button(x_button_1);
        x_button_1Button.spriteName = "blue-button";
        x_button_1Button.callback = () => this.goUp();
        x_button_1Button.activeFrame = true;

        // x_button_2 (components)
        const x_button_2Button = new Button(x_button_2);
        x_button_2Button.spriteName = "blue-button";
        x_button_2Button.callback = () => this.goDown();
        x_button_2Button.activeFrame = true;

        this.title = title;
        this.bannedByText = bannedByText;
        this.banHistoryItem1 = banHistoryItem1;
        this.banHistoryItem2 = banHistoryItem2;
        this.banHistoryItem3 = banHistoryItem3;
        this.banHistoryItem5 = banHistoryItem5;
        this.banHistoryItem4 = banHistoryItem4;
        this.banHistoryItem6 = banHistoryItem6;
        this.upBtn = upBtn;
        this.downBtn = downBtn;
        this.historyItems = historyItems;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    get modActions() {
        return this.interface.main.modActions
    }

    hide(){
        this.visible = false
        this.modActions.banReason.style.visibility = 'visible'
        this.modActions.moreOptions.setInputsVisible(this.modActions.moreOptions.visible)
    }

    show(name, recordsView){
        if (recordsView === 'bans') {
            this.title.text = `${name.toUpperCase()}'S BAN HISTORY`;
            this.bannedByText.text = "Banned by";
        } else {
            this.title.text = `${name.toUpperCase()}'S MUTE HISTORY`;
            this.bannedByText.text = "Muted by";
        }

        this.visible = true
    }

    setBanHistory(history) {
        this.altsPageIndex = 1
        this.historyList = history

        //the total pages that should exist
        this.altsItemsPerPage = 6
        this.altsTotalPages = Math.ceil(this.historyList.length / this.altsItemsPerPage);

        this.switchAltsPage()

        /*for(let item of this.historyItems) item.visible = false
        let i = 1
        for(let log of history) {
            this[`banHistoryItem${i}`].setInfo(log)
            this[`banHistoryItem${i}`].visible = true
            i++
        }*/
    }

    switchAltsPage() {
		for(let item of this.historyItems) item.visible = false
        this.upBtn.visible = (this.altsPageIndex == 1) ? false : true
        this.downBtn.visible = (this.altsPageIndex == this.altsTotalPages) ? false : true
        let startIndex = (this.altsPageIndex - 1) * this.altsItemsPerPage
        let endIndex = startIndex + this.altsItemsPerPage
        let pageItems = this.historyList.slice(startIndex, endIndex) // THE ACTUAL ARRAY

        //determine which buttons should be visible
        for(let j = 1; j < 7; j++) {
            if(pageItems[j - 1]) this[`banHistoryItem${j}`].visible = true
            else break
        }
        //set the buttons
        for(let i = 0; i < pageItems.length; i++) {
            this[`banHistoryItem${i + 1}`].setInfo(pageItems[i])
        }
    }
	
    goUp() {
        //switch page BACK
        if(this.altsPageIndex == 1) return
        this.altsPageIndex--
        this.switchAltsPage()
    }

    goDown() {
        //switch page FORWARD
        if(this.altsPageIndex == this.altsTotalPages) return
        this.altsPageIndex++
        this.switchAltsPage()
    }
    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
// You can write more code here
