
import AltsItem from './AltsItem'

import { Button, SimpleButton, NineSlice, } from '@components/components'

/* START OF COMPILED CODE */

export default class AltsList extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.altsTitle;
        /** @type {Phaser.GameObjects.Text} */
        this.altsTitle2;
        /** @type {AltsItem} */
        this.altsItemBtn15;
        /** @type {AltsItem} */
        this.altsItemBtn14;
        /** @type {AltsItem} */
        this.altsItemBtn13;
        /** @type {AltsItem} */
        this.altsItemBtn12;
        /** @type {AltsItem} */
        this.altsItemBtn11;
        /** @type {AltsItem} */
        this.altsItemBtn10;
        /** @type {AltsItem} */
        this.altsItemBtn9;
        /** @type {AltsItem} */
        this.altsItemBtn8;
        /** @type {AltsItem} */
        this.altsItemBtn7;
        /** @type {AltsItem} */
        this.altsItemBtn6;
        /** @type {AltsItem} */
        this.altsItemBtn5;
        /** @type {AltsItem} */
        this.altsItemBtn4;
        /** @type {AltsItem} */
        this.altsItemBtn3;
        /** @type {AltsItem} */
        this.altsItemBtn2;
        /** @type {AltsItem} */
        this.altsItemBtn1;
        /** @type {AltsItem} */
        this.altsItemBtn0;
        /** @type {Phaser.GameObjects.Container} */
        this.altsUpBtn;
        /** @type {Phaser.GameObjects.Container} */
        this.altsDownBtn;
        /** @type {AltsItem[]} */
        this.items;


        // bg
        const bg = scene.add.nineslice(367.226318359375, 307.68109130859375, "main", "chatlog/bg", 400, 617, 57, 60, 58, 60);
        bg.setOrigin(1, 1);
        this.add(bg);

        // tabBtn
        const tabBtn = scene.add.container(372, -171);
        this.add(tabBtn);

        // handle
        const handle = scene.add.image(8, 2, "main", "tab");
        handle.angle = -90;
        tabBtn.add(handle);

        // arrow
        const arrow = scene.add.image(1, 0, "main", "tab-arrow");
        arrow.angle = -90;
        arrow.flipY = true;
        tabBtn.add(arrow);

        // altsTitle
        const altsTitle = scene.add.text(217, -277, "", {});
        altsTitle.setOrigin(0.5, 0.5);
        altsTitle.text = "Listing alts";
        altsTitle.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(altsTitle);

        // btn
        const btn = scene.add.image(280, 267, "login", "learn-button");
        btn.scaleX = 0.6601167152139591;
        btn.scaleY = 0.7101846354587545;
        this.add(btn);

        // altsTitle2
        const altsTitle2 = scene.add.text(282, 266, "", {});
        altsTitle2.setOrigin(0.5, 0.5);
        altsTitle2.text = "Show Alts+";
        altsTitle2.setStyle({ "align": "center", "fixedWidth":110,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(altsTitle2);

        // altsItemBtn15
        const altsItemBtn15 = new AltsItem(scene, 82, 211);
        altsItemBtn15.visible = false;
        this.add(altsItemBtn15);

        // altsItemBtn14
        const altsItemBtn14 = new AltsItem(scene, 82, 179);
        altsItemBtn14.visible = false;
        this.add(altsItemBtn14);

        // altsItemBtn13
        const altsItemBtn13 = new AltsItem(scene, 82, 148);
        altsItemBtn13.visible = false;
        this.add(altsItemBtn13);

        // altsItemBtn12
        const altsItemBtn12 = new AltsItem(scene, 82, 116);
        altsItemBtn12.visible = false;
        this.add(altsItemBtn12);

        // altsItemBtn11
        const altsItemBtn11 = new AltsItem(scene, 82, 85);
        altsItemBtn11.visible = false;
        this.add(altsItemBtn11);

        // altsItemBtn10
        const altsItemBtn10 = new AltsItem(scene, 82, 54);
        altsItemBtn10.visible = false;
        this.add(altsItemBtn10);

        // altsItemBtn9
        const altsItemBtn9 = new AltsItem(scene, 82, 23);
        altsItemBtn9.visible = false;
        this.add(altsItemBtn9);

        // altsItemBtn8
        const altsItemBtn8 = new AltsItem(scene, 82, -8);
        altsItemBtn8.visible = false;
        this.add(altsItemBtn8);

        // altsItemBtn7
        const altsItemBtn7 = new AltsItem(scene, 82, -36);
        altsItemBtn7.visible = false;
        this.add(altsItemBtn7);

        // altsItemBtn6
        const altsItemBtn6 = new AltsItem(scene, 82, -67);
        altsItemBtn6.visible = false;
        this.add(altsItemBtn6);

        // altsItemBtn5
        const altsItemBtn5 = new AltsItem(scene, 82, -98);
        altsItemBtn5.visible = false;
        this.add(altsItemBtn5);

        // altsItemBtn4
        const altsItemBtn4 = new AltsItem(scene, 82, -129);
        altsItemBtn4.visible = false;
        this.add(altsItemBtn4);

        // altsItemBtn3
        const altsItemBtn3 = new AltsItem(scene, 82, -160);
        altsItemBtn3.visible = false;
        this.add(altsItemBtn3);

        // altsItemBtn2
        const altsItemBtn2 = new AltsItem(scene, 82, -190);
        altsItemBtn2.visible = false;
        this.add(altsItemBtn2);

        // altsItemBtn1
        const altsItemBtn1 = new AltsItem(scene, 82, -222);
        altsItemBtn1.visible = false;
        this.add(altsItemBtn1);

        // altsItemBtn0
        const altsItemBtn0 = new AltsItem(scene, 82, -254);
        altsItemBtn0.visible = false;
        this.add(altsItemBtn0);

        // altsUpBtn
        const altsUpBtn = scene.add.container(125, 260);
        this.add(altsUpBtn);

        // grey_button
        const grey_button = scene.add.image(0, 7, "main", "grey-button");
        altsUpBtn.add(grey_button);

        // grey_arrow
        const grey_arrow = scene.add.image(0, 5, "main", "grey-arrow");
        altsUpBtn.add(grey_arrow);

        // altsDownBtn
        const altsDownBtn = scene.add.container(186, 260);
        this.add(altsDownBtn);

        // grey_button_1
        const grey_button_1 = scene.add.image(0, 7, "main", "grey-button");
        altsDownBtn.add(grey_button_1);

        // grey_arrow_1
        const grey_arrow_1 = scene.add.image(0, 5, "main", "grey-arrow");
        grey_arrow_1.flipY = true;
        altsDownBtn.add(grey_arrow_1);

        // lists
        const items = [altsItemBtn0, altsItemBtn1, altsItemBtn2, altsItemBtn3, altsItemBtn4, altsItemBtn5, altsItemBtn6, altsItemBtn7, altsItemBtn8, altsItemBtn9, altsItemBtn10, altsItemBtn11, altsItemBtn12, altsItemBtn13, altsItemBtn14, altsItemBtn15];

        // handle (components)
        const handleSimpleButton = new SimpleButton(handle);
        handleSimpleButton.callback = () => { this.hideAltsList() };

        // btn (components)
        const btnButton = new Button(btn);
        btnButton.spriteName = "learn-button";
        btnButton.callback = () => this.switchAltsMode();

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => this.altsUp();
        grey_buttonButton.activeFrame = true;

        // grey_button_1 (components)
        const grey_button_1Button = new Button(grey_button_1);
        grey_button_1Button.spriteName = "grey-button";
        grey_button_1Button.callback = () => this.altsDown();
        grey_button_1Button.activeFrame = true;

        this.altsTitle = altsTitle;
        this.altsTitle2 = altsTitle2;
        this.altsItemBtn15 = altsItemBtn15;
        this.altsItemBtn14 = altsItemBtn14;
        this.altsItemBtn13 = altsItemBtn13;
        this.altsItemBtn12 = altsItemBtn12;
        this.altsItemBtn11 = altsItemBtn11;
        this.altsItemBtn10 = altsItemBtn10;
        this.altsItemBtn9 = altsItemBtn9;
        this.altsItemBtn8 = altsItemBtn8;
        this.altsItemBtn7 = altsItemBtn7;
        this.altsItemBtn6 = altsItemBtn6;
        this.altsItemBtn5 = altsItemBtn5;
        this.altsItemBtn4 = altsItemBtn4;
        this.altsItemBtn3 = altsItemBtn3;
        this.altsItemBtn2 = altsItemBtn2;
        this.altsItemBtn1 = altsItemBtn1;
        this.altsItemBtn0 = altsItemBtn0;
        this.altsUpBtn = altsUpBtn;
        this.altsDownBtn = altsDownBtn;
        this.items = items;

        /* START-USER-CTR-CODE */
        // Determines whether to show alts or alts+. Should be 'normal' or 'plus'
        this.mode = null
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        this.visible = true
        for(let item of this.items) {
            item.name.text = ''
        }
        this.altsItemBtn0.visible = true
        this.altsItemBtn0.name.text = 'Loading...'
        this.busy = true
        this.altsUpBtn.visible = false
        this.altsDownBtn.visible = false
        switch(this.mode) {
            case 'normal':
                this.altsTitle.text = 'Listing alts'
                this.altsTitle2.text = 'Show alts+'
                this.parentContainer.network.send('get_alts', { id: this.parentContainer.id })
                break
            case 'plus':
                this.altsTitle.text = 'Listing alts+'
                this.altsTitle2.text = 'Show alts'
                this.parentContainer.network.send('get_alts_plus', { id: this.parentContainer.id })
                break
            default: break
        }
    }

    getAltsColor(userBanInfo) {
        let color = '#000000'; // black
        if (userBanInfo.permaBan) color = '#a50505'; // red
        else if (userBanInfo.muted) color = '#0000007f'; // grey
        else if (userBanInfo.activeBan) color = '#e99225'; // orange

        return color;
    }

    //this runs when the network sends back the alts list
    showAltsList(altsInfo) {
        this.busy = false
        this.altsArray = altsInfo.map(info => { return {username: info.username, color: this.getAltsColor(info)} });

        this.pageindex = 1

        //the total pages that should exist
        this.itemsPerPage = 16
        this.totalPages = Math.ceil(this.altsArray.length / this.itemsPerPage);

        this.switchAltsPage()
    }

    altsUp() {
        //switch page BACK
        if(this.busy) return
        if(this.pageindex == 1) return
        this.pageindex--
        this.switchAltsPage()
    }

    altsDown() {
        //switch page FORWARD
        if(this.busy) return
        if(this.pageindex == this.totalPages) return
        this.pageindex++
        this.switchAltsPage()
    }

    switchAltsPage() {
        this.altsUpBtn.visible = (this.pageindex == 1) ? false : true
        this.altsDownBtn.visible = (this.pageindex == this.totalPages) ? false : true
        let startIndex = (this.pageindex - 1) * this.itemsPerPage
        let endIndex = startIndex + this.itemsPerPage
        let pageItems = this.altsArray.slice(startIndex, endIndex) // THE ACTUAL ARRAY

        //determine which buttons should be visible
        for(let j = 0; j < 16; j++) {
            if(pageItems[j]) {
                this[`altsItemBtn${j}`].visible = true
            } else {
                this[`altsItemBtn${j}`].visible = false
            }
        }
        //set the buttons
        for(let i = 0; i < pageItems.length; i++) {
            this[`altsItemBtn${i}`].setPenguin(pageItems[i].username, pageItems[i].color, () => this.parentContainer.hide());
        }
    }

    switchAltsMode() {
        if(this.busy) return
        this.mode = (this.mode == 'normal') ? 'plus' : 'normal'
        this.show()
    }

    hideAltsList() {
        this.visible = false
        this.parentContainer.tabBtn.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
