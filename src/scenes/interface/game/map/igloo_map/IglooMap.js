import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, Zone, Animation, SimpleButton } from '@components/components'

import IglooButton from './igloo_button/IglooButton'
import newIglooItem from './newIglooItem'
import Spinner from '@scenes/interface/menus/load/Spinner'


/* START OF COMPILED CODE */

export default class IglooMap extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.everyone_tab;
        /** @type {Phaser.GameObjects.Image} */
        this.friends_tab;
        /** @type {Spinner} */
        this.spinner;
        /** @type {newIglooItem} */
        this.myItem;
        /** @type {Phaser.GameObjects.Container} */
        this.friendItems;
        /** @type {Phaser.GameObjects.Text} */
        this.penguin_name_3;
        /** @type {Phaser.GameObjects.Text} */
        this.penguin_name_4;
        /** @type {Phaser.GameObjects.Image} */
        this.upButton;
        /** @type {Phaser.GameObjects.Text} */
        this.sortby_txt;
        /** @type {IglooButton[]} */
        this.iglooSprites;
        /** @type {newIglooItem[]} */
        this.items;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.image(-43, 16, "igloomap", "bg");
        this.add(bg);

        // igloo_igloo_27
        const igloo_igloo_27 = new IglooButton(scene, -368, 10, "igloomap", "igloo");
        igloo_igloo_27.scaleX = 0.9;
        igloo_igloo_27.scaleY = 0.9;
        igloo_igloo_27.flipX = false;
        igloo_igloo_27.flipY = false;
        this.add(igloo_igloo_27);

        // igloo_igloo_22
        const igloo_igloo_22 = new IglooButton(scene, -309, 30, "igloomap", "igloo");
        igloo_igloo_22.scaleX = 0.9;
        igloo_igloo_22.scaleY = 0.9;
        igloo_igloo_22.flipX = false;
        igloo_igloo_22.flipY = false;
        this.add(igloo_igloo_22);

        // igloo_igloo_21
        const igloo_igloo_21 = new IglooButton(scene, -248, 50, "igloomap", "igloo");
        igloo_igloo_21.scaleX = 0.9;
        igloo_igloo_21.scaleY = 0.9;
        igloo_igloo_21.flipX = false;
        igloo_igloo_21.flipY = false;
        this.add(igloo_igloo_21);

        // igloo_igloo_9
        const igloo_igloo_9 = new IglooButton(scene, -188, 69, "igloomap", "igloo");
        igloo_igloo_9.scaleX = 0.9;
        igloo_igloo_9.scaleY = 0.9;
        igloo_igloo_9.flipX = false;
        igloo_igloo_9.flipY = false;
        this.add(igloo_igloo_9);

        // igloo_igloo_5
        const igloo_igloo_5 = new IglooButton(scene, -139, 121, "igloomap", "igloo");
        igloo_igloo_5.scaleX = 1;
        igloo_igloo_5.scaleY = 1;
        igloo_igloo_5.flipX = false;
        igloo_igloo_5.flipY = false;
        this.add(igloo_igloo_5);

        // igloo_igloo_16
        const igloo_igloo_16 = new IglooButton(scene, -256, 148, "igloomap", "igloo");
        igloo_igloo_16.scaleX = 1;
        igloo_igloo_16.scaleY = 1;
        igloo_igloo_16.flipX = true;
        igloo_igloo_16.flipY = false;
        this.add(igloo_igloo_16);

        // igloo_igloo_20
        const igloo_igloo_20 = new IglooButton(scene, -182, 179, "igloomap", "igloo");
        igloo_igloo_20.scaleX = 1;
        igloo_igloo_20.scaleY = 1;
        igloo_igloo_20.flipX = false;
        igloo_igloo_20.flipY = false;
        this.add(igloo_igloo_20);

        // igloo_igloo_19
        const igloo_igloo_19 = new IglooButton(scene, -121, 200, "igloomap", "igloo");
        igloo_igloo_19.scaleX = 1;
        igloo_igloo_19.scaleY = 1;
        igloo_igloo_19.flipX = false;
        igloo_igloo_19.flipY = false;
        this.add(igloo_igloo_19);

        // igloo_igloo_29
        const igloo_igloo_29 = new IglooButton(scene, -471, 44, "igloomap", "igloo");
        igloo_igloo_29.scaleX = 0.9;
        igloo_igloo_29.scaleY = 0.9;
        igloo_igloo_29.flipX = true;
        igloo_igloo_29.flipY = false;
        this.add(igloo_igloo_29);

        // igloo_igloo_28
        const igloo_igloo_28 = new IglooButton(scene, -414, 96, "igloomap", "igloo");
        igloo_igloo_28.scaleX = 1;
        igloo_igloo_28.scaleY = 1;
        igloo_igloo_28.flipX = false;
        igloo_igloo_28.flipY = false;
        this.add(igloo_igloo_28);

        // igloo_igloo_18
        const igloo_igloo_18 = new IglooButton(scene, -355, 117, "igloomap", "igloo");
        igloo_igloo_18.scaleX = 1;
        igloo_igloo_18.scaleY = 1;
        igloo_igloo_18.flipX = false;
        igloo_igloo_18.flipY = false;
        this.add(igloo_igloo_18);

        // igloo_igloo_17
        const igloo_igloo_17 = new IglooButton(scene, -318, 176, "igloomap", "igloo");
        igloo_igloo_17.scaleX = 1;
        igloo_igloo_17.scaleY = 1;
        igloo_igloo_17.flipX = true;
        igloo_igloo_17.flipY = false;
        this.add(igloo_igloo_17);

        // igloo_igloo_10
        const igloo_igloo_10 = new IglooButton(scene, 76, 127, "igloomap", "igloo");
        igloo_igloo_10.scaleX = 1;
        igloo_igloo_10.scaleY = 1;
        igloo_igloo_10.flipX = true;
        igloo_igloo_10.flipY = false;
        this.add(igloo_igloo_10);

        // igloo_igloo_6
        const igloo_igloo_6 = new IglooButton(scene, 49, 177, "igloomap", "igloo");
        igloo_igloo_6.scaleX = 1;
        igloo_igloo_6.scaleY = 1;
        igloo_igloo_6.flipX = true;
        igloo_igloo_6.flipY = false;
        this.add(igloo_igloo_6);

        // igloo_igloo_8
        const igloo_igloo_8 = new IglooButton(scene, 156, 161, "igloomap", "igloo");
        igloo_igloo_8.scaleX = 1;
        igloo_igloo_8.scaleY = 1;
        igloo_igloo_8.flipX = true;
        igloo_igloo_8.flipY = false;
        this.add(igloo_igloo_8);

        // igloo_igloo_13
        const igloo_igloo_13 = new IglooButton(scene, -153, -84, "igloomap", "igloo");
        igloo_igloo_13.scaleX = 0.8;
        igloo_igloo_13.scaleY = 0.8;
        igloo_igloo_13.flipX = false;
        igloo_igloo_13.flipY = false;
        this.add(igloo_igloo_13);

        // igloo_igloo_12
        const igloo_igloo_12 = new IglooButton(scene, -108, -48, "igloomap", "igloo");
        igloo_igloo_12.scaleX = 0.8;
        igloo_igloo_12.scaleY = 0.8;
        igloo_igloo_12.flipX = false;
        igloo_igloo_12.flipY = false;
        this.add(igloo_igloo_12);

        // igloo_igloo_25
        const igloo_igloo_25 = new IglooButton(scene, -67, -7, "igloomap", "igloo");
        igloo_igloo_25.scaleX = 0.8;
        igloo_igloo_25.scaleY = 0.8;
        igloo_igloo_25.flipX = false;
        igloo_igloo_25.flipY = false;
        this.add(igloo_igloo_25);

        // igloo_igloo_2
        const igloo_igloo_2 = new IglooButton(scene, -78, 53, "igloomap", "igloo");
        igloo_igloo_2.scaleX = 0.9;
        igloo_igloo_2.scaleY = 0.9;
        igloo_igloo_2.flipX = false;
        igloo_igloo_2.flipY = false;
        this.add(igloo_igloo_2);

        // igloo_igloo_14
        const igloo_igloo_14 = new IglooButton(scene, 103, 11, "igloomap", "igloo");
        igloo_igloo_14.scaleX = 0.9;
        igloo_igloo_14.scaleY = 0.9;
        igloo_igloo_14.flipX = true;
        igloo_igloo_14.flipY = false;
        this.add(igloo_igloo_14);

        // igloo_igloo_3
        const igloo_igloo_3 = new IglooButton(scene, 63, 32, "igloomap", "igloo");
        igloo_igloo_3.scaleX = 0.9;
        igloo_igloo_3.scaleY = 0.9;
        igloo_igloo_3.flipX = true;
        igloo_igloo_3.flipY = false;
        this.add(igloo_igloo_3);

        // igloo_igloo_1
        const igloo_igloo_1 = new IglooButton(scene, 12, 66, "igloomap", "igloo");
        igloo_igloo_1.scaleX = 0.9;
        igloo_igloo_1.scaleY = 0.9;
        igloo_igloo_1.flipX = true;
        igloo_igloo_1.flipY = false;
        this.add(igloo_igloo_1);

        // igloo_igloo_0
        const igloo_igloo_0 = new IglooButton(scene, -37, 100, "igloomap", "igloo");
        igloo_igloo_0.scaleX = 0.9;
        igloo_igloo_0.scaleY = 0.9;
        igloo_igloo_0.flipX = false;
        igloo_igloo_0.flipY = false;
        this.add(igloo_igloo_0);

        // igloo_igloo_15
        const igloo_igloo_15 = new IglooButton(scene, 159, 46, "igloomap", "igloo");
        igloo_igloo_15.scaleX = 0.9;
        igloo_igloo_15.scaleY = 0.9;
        igloo_igloo_15.flipX = false;
        igloo_igloo_15.flipY = false;
        this.add(igloo_igloo_15);

        // igloo_igloo_23
        const igloo_igloo_23 = new IglooButton(scene, -168, -13, "igloomap", "igloo");
        igloo_igloo_23.scaleX = 0.8;
        igloo_igloo_23.scaleY = 0.8;
        igloo_igloo_23.flipX = true;
        igloo_igloo_23.flipY = false;
        this.add(igloo_igloo_23);

        // igloo_igloo_24
        const igloo_igloo_24 = new IglooButton(scene, -242, -15, "igloomap", "igloo");
        igloo_igloo_24.scaleX = 0.8;
        igloo_igloo_24.scaleY = 0.8;
        igloo_igloo_24.flipX = true;
        igloo_igloo_24.flipY = false;
        this.add(igloo_igloo_24);

        // igloo_igloo_26
        const igloo_igloo_26 = new IglooButton(scene, -63, -120, "igloomap", "igloo");
        igloo_igloo_26.scaleX = 0.8;
        igloo_igloo_26.scaleY = 0.8;
        igloo_igloo_26.flipX = false;
        igloo_igloo_26.flipY = false;
        this.add(igloo_igloo_26);

        // igloo_igloo_7
        const igloo_igloo_7 = new IglooButton(scene, -22, -96, "igloomap", "igloo");
        igloo_igloo_7.scaleX = 0.8;
        igloo_igloo_7.scaleY = 0.8;
        igloo_igloo_7.flipX = false;
        igloo_igloo_7.flipY = false;
        this.add(igloo_igloo_7);

        // igloo_igloo_11
        const igloo_igloo_11 = new IglooButton(scene, 39, -80, "igloomap", "igloo");
        igloo_igloo_11.scaleX = 0.8;
        igloo_igloo_11.scaleY = 0.8;
        igloo_igloo_11.flipX = true;
        igloo_igloo_11.flipY = false;
        this.add(igloo_igloo_11);

        // igloo_igloo_4
        const igloo_igloo_4 = new IglooButton(scene, 5, -47, "igloomap", "igloo");
        igloo_igloo_4.scaleX = 0.8;
        igloo_igloo_4.scaleY = 0.8;
        igloo_igloo_4.flipX = false;
        igloo_igloo_4.flipY = false;
        this.add(igloo_igloo_4);

        // igloo_note
        const igloo_note = scene.add.image(-517, -208, "igloomap", "note");
        this.add(igloo_note);

        // outerbg
        const outerbg = scene.add.image(468, 15, "igloomap", "outerbg");
        this.add(outerbg);

        // innerr
        const innerr = scene.add.image(465, 52, "igloomap", "innerr");
        this.add(innerr);

        // everyone_tab
        const everyone_tab = scene.add.image(329, -254, "igloomap", "tab/tab_selected");
        this.add(everyone_tab);

        // friends_tab
        const friends_tab = scene.add.image(464, -254, "igloomap", "tab/tab_selected");
        friends_tab.visible = false;
        this.add(friends_tab);

        // spinner
        const spinner = new Spinner(scene, 462, 70);
        spinner.tintFill = true;
        spinner.tintTopLeft = 0;
        spinner.tintTopRight = 0;
        spinner.tintBottomLeft = 0;
        spinner.tintBottomRight = 0;
        this.add(spinner);

        // myItem
        const myItem = new newIglooItem(scene, 266, -357);
        this.add(myItem);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(326, -251, 128, 128);
        rectangle_1.scaleX = 1.097413822845932;
        rectangle_1.scaleY = 0.45525400424866236;
        rectangle_1.alpha = 0.5;
        rectangle_1.fillColor = 7402625;
        this.add(rectangle_1);

        // rectangle
        const rectangle = scene.add.rectangle(464, -252, 128, 128);
        rectangle.scaleX = 0.9643648232632678;
        rectangle.scaleY = 0.45525400424866236;
        rectangle.alpha = 0.5;
        rectangle.fillColor = 7402625;
        this.add(rectangle);

        // friendItems
        const friendItems = scene.add.container(263, -212);
        this.add(friendItems);

        // myItem_1
        const myItem_1 = new newIglooItem(scene, 0, 0);
        friendItems.add(myItem_1);

        // myItem_2
        const myItem_2 = new newIglooItem(scene, 0, 74);
        friendItems.add(myItem_2);

        // myItem_3
        const myItem_3 = new newIglooItem(scene, 0, 149);
        friendItems.add(myItem_3);

        // myItem_4
        const myItem_4 = new newIglooItem(scene, 0, 223);
        friendItems.add(myItem_4);

        // myItem_6
        const myItem_6 = new newIglooItem(scene, 0, 446);
        friendItems.add(myItem_6);

        // myItem_7
        const myItem_7 = new newIglooItem(scene, 0, 371);
        friendItems.add(myItem_7);

        // myItem_8
        const myItem_8 = new newIglooItem(scene, 0, 297);
        friendItems.add(myItem_8);

        // myItem_5
        const myItem_5 = new newIglooItem(scene, 0, 519.9998168945312);
        friendItems.add(myItem_5);

        // text_1
        const text_1 = scene.add.text(-700, -689, "", {});
        text_1.text = "the numbers on myItem are wrong and i dont care to fix them . Just letting You know";
        text_1.setStyle({ "fontSize": "20px" });
        this.add(text_1);

        // penguin_name_3
        const penguin_name_3 = scene.add.text(330, -254, "", {});
        penguin_name_3.setOrigin(0.5, 0.5);
        penguin_name_3.text = "Everyone";
        penguin_name_3.setStyle({ "align": "center", "color": "#2f77b9", "fixedWidth":130,"fixedHeight":27,"fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        this.add(penguin_name_3);

        // penguin_name_4
        const penguin_name_4 = scene.add.text(464, -254, "", {});
        penguin_name_4.setOrigin(0.5, 0.5);
        penguin_name_4.text = "Friends";
        penguin_name_4.setStyle({ "align": "center", "color": "#2f77b9", "fixedWidth":130,"fixedHeight":27,"fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        this.add(penguin_name_4);

        // rectangle_4
        const rectangle_4 = scene.add.rectangle(639, 81, 140, 128);
        rectangle_4.scaleX = 0.19924276456645598;
        rectangle_4.scaleY = 4.131698392836853;
        rectangle_4.isFilled = true;
        rectangle_4.fillColor = 15856113;
        this.add(rectangle_4);

        // upButton
        const upButton = scene.add.image(639, -179, "main", "blue-arrow");
        this.add(upButton);

        // downButton
        const downButton = scene.add.image(639, 340, "main", "blue-arrow");
        downButton.flipY = true;
        this.add(downButton);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(625, 80, 200, 128);
        rectangle_2.scaleX = 0.009940163287294804;
        rectangle_2.scaleY = 4;
        rectangle_2.isFilled = true;
        rectangle_2.fillColor = 13158;
        this.add(rectangle_2);

        // rectangle_3
        const rectangle_3 = scene.add.rectangle(653, 80, 200, 128);
        rectangle_3.scaleX = 0.009940163287294804;
        rectangle_3.scaleY = 4;
        rectangle_3.isFilled = true;
        rectangle_3.fillColor = 13158;
        this.add(rectangle_3);

        // store_x
        const store_x = scene.add.image(650, -333, "new-iglooedit", "store_x");
        this.add(store_x);

        // sortbtn
        const sortbtn = scene.add.nineslice(605, -259, "new-iglooedit", "unlock_button", 130, 50, 20, 20, 20, 20);
        this.add(sortbtn);

        // sortby_txt
        const sortby_txt = scene.add.text(604, -255, "", {});
        sortby_txt.setOrigin(0.5, 0.5);
        sortby_txt.text = "Sort by:\nUsername";
        sortby_txt.setStyle({ "align": "center", "color": "#2f77b9", "fixedWidth":130,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        sortby_txt.setLineSpacing(-5);
        this.add(sortby_txt);

        // lists
        const iglooSprites = [igloo_igloo_0, igloo_igloo_1, igloo_igloo_2, igloo_igloo_3, igloo_igloo_4, igloo_igloo_5, igloo_igloo_6, igloo_igloo_7, igloo_igloo_8, igloo_igloo_9, igloo_igloo_10, igloo_igloo_11, igloo_igloo_12, igloo_igloo_13, igloo_igloo_14, igloo_igloo_15, igloo_igloo_16, igloo_igloo_17, igloo_igloo_18, igloo_igloo_19, igloo_igloo_20, igloo_igloo_21, igloo_igloo_22, igloo_igloo_23, igloo_igloo_24, igloo_igloo_25, igloo_igloo_26, igloo_igloo_27, igloo_igloo_28, igloo_igloo_29];
        const items = [myItem_1, myItem_2, myItem_3, myItem_4, myItem_8, myItem_7, myItem_6, myItem_5];

        // block (components)
        new Interactive(block);

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.callback = () => {this.onEveryoneClick()};

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.callback = () => {this.onFriendsClick()};

        // upButton (components)
        const upButtonSimpleButton = new SimpleButton(upButton);
        upButtonSimpleButton.callback = () => {this.prevPage()};

        // downButton (components)
        const downButtonSimpleButton = new SimpleButton(downButton);
        downButtonSimpleButton.callback = () => {this.nextPage()};

        // store_x (components)
        const store_xButton = new Button(store_x);
        store_xButton.spriteName = "store_x";
        store_xButton.callback = () => { this.visible = false };

        // sortbtn (components)
        const sortbtnButton = new Button(sortbtn);
        sortbtnButton.spriteName = "unlock_button";
        sortbtnButton.callback = () => this.changeSort();
        sortbtnButton.activeFrame = true;

        this.everyone_tab = everyone_tab;
        this.friends_tab = friends_tab;
        this.spinner = spinner;
        this.myItem = myItem;
        this.friendItems = friendItems;
        this.penguin_name_3 = penguin_name_3;
        this.penguin_name_4 = penguin_name_4;
        this.upButton = upButton;
        this.sortby_txt = sortby_txt;
        this.iglooSprites = iglooSprites;
        this.items = items;

        /* START-USER-CTR-CODE */

        //was .username

        this.igloos

        this.page = 1
        this.pageSize = 8

        this.viewingFriends = false

        scene.events.on('sleep', this.stopSpinner, this)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get maxPage() {
        let iglooData = this.friends_tab.visible ? Math.ceil(this.friendsIgloos.length / this.pageSize) :  Math.ceil(this.igloos.length / this.pageSize)

        return iglooData
    }

    onIglooClick() {
        this.world.client.sendJoinIgloo(this.world.client.id)
    }

    show() {
        this.iglooSprites.map(igloo => igloo.reset())

        this.startSpinner()

        this.visible = true
        this.interface.input.setDefaultCursor('default')

        this.page = 1

        this.viewingFriends = false

        this.friends_tab.visible = false
        this.everyone_tab.visible = true

        this.network.send('get_igloos')
    }

    setIgloos(igloos, myIglooLikes = 0) {
        if (!this.visible) {
            return
        }

        if(!localStorage.getItem('igloomap_sort')) localStorage.setItem('igloomap_sort','likes')
        this.sortMode = localStorage.getItem('igloomap_sort')

        this.myItem.setItem({id: this.world.client.id, username: this.world.client.penguin.displayName, likes: myIglooLikes})

        this.igloos = igloos
        this.initSort()

        this.friendsIgloos = igloos.filter((igloo) => {
            let relationship = this.world.getRelationship(igloo.id)
            return relationship == "online" || relationship == "offline"
        })

        this.friendsIgloos = this.friendsIgloos.sort((a, b) => {
            return a.username.localeCompare(b.username);
        });

        this.stopSpinner()

        this.showPage()
    }

    initSort() {
        if(this.sortMode == 'name') {
            //Sort mode is currently likes, so change it to alphabetically
            this.sortby_txt.text = 'Sort by:\nUsername'
            this.igloos = this.igloos.sort((a, b) => {
                return a.username.toLowerCase().localeCompare(b.username.toLowerCase())
            })
        } else {
            //Sort mode is currently alphabetically, so change it to by likes
            this.sortby_txt.text = 'Sort by:\nLikes'
            this.igloos = this.igloos.sort((a, b) => {
                return b.likes - a.likes
            })
        }
    }

    changeSort() {
        if(this.sortMode == 'likes') {
            //Sort mode is currently likes, so change it to alphabetically
            localStorage.setItem('igloomap_sort','name')
            this.sortby_txt.text = 'Sort by:\nUsername'
            this.igloos = this.igloos.sort((a, b) => {
                return a.username.toLowerCase().localeCompare(b.username.toLowerCase())
            })
        } else {
            //Sort mode is currently alphabetically, so change it to by likes
            localStorage.setItem('igloomap_sort','likes')
            this.sortby_txt.text = 'Sort by:\nLikes'
            this.igloos = this.igloos.sort((a, b) => {
                return b.likes - a.likes
            })
        }
        this.sortMode = localStorage.getItem('igloomap_sort')
        this.showPage()
    }

    showPage() {

        let pageToShow

        if (this.viewingFriends) {
            pageToShow = this.friendsIgloos
        } else {
            pageToShow = this.igloos
        }

        if (!pageToShow) return

        let page = pageToShow.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)

        for (let [index, item] of this.items.entries()) {
            let igloo = page[index]

            if (igloo) {
                item.setItem(igloo)
            } else {
                item.setItem(null)
            }
        }

        this.showIgloos()
    }

    prevPage() {
        let page = this.page - 1
        if (page < 1) return

        this.page = page
        this.showPage()
    }

    nextPage() {
        let page = this.page + 1
        if (page > this.maxPage) return

        this.page = page
        this.showPage()
    }

    showIgloos(arr=this.igloos) {
        let max = this.iglooSprites.length

        for (let [index, igloo] of arr.slice(0, max).entries()) {
            let iglooSprite = this.iglooSprites[index]

            if (iglooSprite) {
                iglooSprite.show(igloo)
            }
        }
    }

    startSpinner() {
        this.spinner.start()
    }

    stopSpinner() {
        this.spinner.stop()
    }

    onFriendsClick() {
        this.viewingFriends = true
        this.page = 1
        this.showPage(this.friendsIgloos)
        this.friends_tab.visible = true
        this.everyone_tab.visible = false
    }

    onEveryoneClick() {
        this.viewingFriends = false
        this.page = 1
        this.showPage()
        this.friends_tab.visible = false
        this.everyone_tab.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
