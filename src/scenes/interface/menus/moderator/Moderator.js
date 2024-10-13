import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, SimpleButton, DraggableContainer, Draggable} from '@components/components'

import TextInput from '@engine/interface/text/TextInput'
import RoomItem from './RoomItem';
import Broadcast from './broadcast/Broadcast'
import PenguinSpawner from './PenguinSpawner'
import Slowmode from './Slowmode'

/* START OF COMPILED CODE */

export default class Moderator extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg;
        /** @type {Phaser.GameObjects.Container} */
        this.clonepenguinbtn;
        /** @type {Phaser.GameObjects.Container} */
        this.main;
        /** @type {PenguinSpawner} */
        this.penguinSpawner;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg_1;
        /** @type {RoomItem} */
        this.player7;
        /** @type {RoomItem} */
        this.player6;
        /** @type {RoomItem} */
        this.player5;
        /** @type {RoomItem} */
        this.player4;
        /** @type {RoomItem} */
        this.player3;
        /** @type {RoomItem} */
        this.player2;
        /** @type {RoomItem} */
        this.player1;
        /** @type {Phaser.GameObjects.Text} */
        this.users_to_verify;
        /** @type {Phaser.GameObjects.Image} */
        this.name_btn;
        /** @type {Phaser.GameObjects.Container} */
        this.allusersdone;
        /** @type {Phaser.GameObjects.Image} */
        this.steamhappy;
        /** @type {Phaser.GameObjects.Container} */
        this.verify;
        /** @type {Broadcast} */
        this.broadcast;
        /** @type {Slowmode} */
        this.slowmode;
        /** @type {Array<any>} */
        this.items;


        // main
        const main = scene.add.container(-760, -480);
        this.add(main);

        // bg
        const bg = scene.add.nineslice(784, 332.5, "prompt", "window", 406, 580, 44, 39, 40, 41);
        main.add(bg);

        // verify_btn_1
        const verify_btn_1 = scene.add.image(786, 153, "main", "help-button");
        verify_btn_1.scaleX = 0.5;
        verify_btn_1.scaleY = 0.5;
        main.add(verify_btn_1);

        // text_2
        const text_2 = scene.add.text(700, 134, "", {});
        text_2.text = "Verify Users";
        text_2.setStyle({ "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        main.add(text_2);

        // text_1
        const text_1 = scene.add.text(696, 79, "", {});
        text_1.text = "Mod Menu";
        text_1.setStyle({ "fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
        main.add(text_1);

        // x_button_1
        const x_button_1 = scene.add.image(929, 91, "main", "blue-button");
        main.add(x_button_1);

        // x_button_3
        const x_button_3 = scene.add.image(928, 88, "main", "blue-x");
        main.add(x_button_3);

        // verify_btn_2
        const verify_btn_2 = scene.add.image(786, 214, "main", "help-button");
        verify_btn_2.scaleX = 0.5;
        verify_btn_2.scaleY = 0.5;
        main.add(verify_btn_2);

        // text_3
        const text_3 = scene.add.text(665, 195, "", {});
        text_3.text = "Toggle Invisibility";
        text_3.setStyle({ "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        main.add(text_3);

        // broadcast_btn
        const broadcast_btn = scene.add.image(786, 273, "main", "help-button");
        broadcast_btn.scaleX = 0.5;
        broadcast_btn.scaleY = 0.5;
        main.add(broadcast_btn);

        // text_5
        const text_5 = scene.add.text(711, 254, "", {});
        text_5.text = "Broadcast";
        text_5.setStyle({ "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        main.add(text_5);

        // broadcast_btn_1
        const broadcast_btn_1 = scene.add.image(786, 332, "main", "help-button");
        broadcast_btn_1.scaleX = 0.5;
        broadcast_btn_1.scaleY = 0.5;
        main.add(broadcast_btn_1);

        // text_6
        const text_6 = scene.add.text(675, 313, "", {});
        text_6.text = "Streamer Mode";
        text_6.setStyle({ "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        main.add(text_6);

        // broadcast_btn_2
        const broadcast_btn_2 = scene.add.image(786, 392, "main", "help-button");
        broadcast_btn_2.scaleX = 0.5;
        broadcast_btn_2.scaleY = 0.5;
        main.add(broadcast_btn_2);

        // text_4
        const text_4 = scene.add.text(667, 373, "", {});
        text_4.text = "Toggle Mod Chat";
        text_4.setStyle({ "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        main.add(text_4);

        // broadcast_btn_3
        const broadcast_btn_3 = scene.add.image(786, 571, "main", "help-button");
        broadcast_btn_3.scaleX = 0.5;
        broadcast_btn_3.scaleY = 0.5;
        main.add(broadcast_btn_3);

        // text_7
        const text_7 = scene.add.text(694, 552, "", {});
        text_7.text = "Server Jump";
        text_7.setStyle({ "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        main.add(text_7);

        // clonepenguinbtn
        const clonepenguinbtn = scene.add.container(636, 141);
        main.add(clonepenguinbtn);

        // x_button_2
        const x_button_2 = scene.add.image(2, -53, "main", "blue-button");
        clonepenguinbtn.add(x_button_2);

        // action_icon
        const action_icon = scene.add.image(0, -56, "main", "action-icon");
        clonepenguinbtn.add(action_icon);

        // broadcast_btn_4
        const broadcast_btn_4 = scene.add.image(786, 453, "main", "help-button");
        broadcast_btn_4.scaleX = 0.5;
        broadcast_btn_4.scaleY = 0.5;
        main.add(broadcast_btn_4);

        // text_10
        const text_10 = scene.add.text(694, 434, "", {});
        text_10.text = "Inventory IDs";
        text_10.setStyle({ "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        main.add(text_10);

        // broadcast_btn_5
        const broadcast_btn_5 = scene.add.image(786, 510, "main", "help-button");
        broadcast_btn_5.scaleX = 0.5;
        broadcast_btn_5.scaleY = 0.5;
        main.add(broadcast_btn_5);

        // text_12
        const text_12 = scene.add.text(676, 491, "", {});
        text_12.text = "Chat Slow Mode";
        text_12.setStyle({ "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        main.add(text_12);

        // penguinSpawner
        const penguinSpawner = new PenguinSpawner(scene, 27, 20);
        penguinSpawner.visible = false;
        this.add(penguinSpawner);

        // verify
        const verify = scene.add.container(-760, -480);
        verify.visible = false;
        this.add(verify);

        // bg_1
        const bg_1 = scene.add.nineslice(416, 452, "prompt", "window", 700, 770, 44, 39, 40, 41);
        bg_1.scaleX = 1.0738810227811926;
        bg_1.setOrigin(0, 0.5);
        verify.add(bg_1);

        // small_button
        const small_button = scene.add.image(826, 125, "login", "small-button0001");
        small_button.scaleX = 0.9;
        small_button.scaleY = 0.9;
        verify.add(small_button);

        // verify_btn
        const verify_btn = scene.add.image(534, 125, "login", "save-button");
        verify_btn.scaleX = 0.5;
        verify_btn.scaleY = 0.5;
        verify.add(verify_btn);

        // text
        const text = scene.add.text(477, 106, "", {});
        text.text = "Refresh";
        text.setStyle({ "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        verify.add(text);

        // x_button
        const x_button = scene.add.image(1113, 121, "main", "blue-button");
        verify.add(x_button);

        // blue_x
        const blue_x = scene.add.image(1113, 119, "main", "blue-x");
        verify.add(blue_x);

        // player7
        const player7 = new RoomItem(scene, 718, 667);
        player7.visible = false;
        verify.add(player7);

        // player6
        const player6 = new RoomItem(scene, 718, 588);
        player6.visible = false;
        verify.add(player6);

        // player5
        const player5 = new RoomItem(scene, 718, 508);
        player5.visible = false;
        verify.add(player5);

        // player4
        const player4 = new RoomItem(scene, 718, 430);
        player4.visible = false;
        verify.add(player4);

        // player3
        const player3 = new RoomItem(scene, 718, 351);
        player3.visible = false;
        verify.add(player3);

        // player2
        const player2 = new RoomItem(scene, 718, 271);
        player2.visible = false;
        verify.add(player2);

        // player1
        const player1 = new RoomItem(scene, 718, 190);
        player1.visible = false;
        verify.add(player1);

        // magnifying_handle
        const magnifying_handle = scene.add.rectangle(993, 136, 4, 15);
        magnifying_handle.angle = -45.00000000000006;
        magnifying_handle.isFilled = true;
        verify.add(magnifying_handle);

        // magnifying_body
        const magnifying_body = scene.add.ellipse(977, 118, 30, 30);
        magnifying_body.isStroked = true;
        magnifying_body.lineWidth = 3;
        verify.add(magnifying_body);

        // users_to_verify
        const users_to_verify = scene.add.text(746, 773, "", {});
        users_to_verify.setOrigin(0.5, 0.5);
        users_to_verify.text = "Users Left: 1998";
        users_to_verify.setStyle({ "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "40px" });
        users_to_verify.setPadding({"left":20});
        verify.add(users_to_verify);

        // name_btn
        const name_btn = scene.add.image(1115, 453, "login", "larger-button0001");
        name_btn.scaleX = 0.8468804051815381;
        name_btn.scaleY = 0.7791207567898576;
        name_btn.angle = 90;
        verify.add(name_btn);

        // scrollupbtn
        const scrollupbtn = scene.add.image(1114, 205, "main", "blue-button");
        verify.add(scrollupbtn);

        // scrolldownbtn
        const scrolldownbtn = scene.add.image(1114, 700, "main", "blue-button");
        verify.add(scrolldownbtn);

        // blue_arrow_2
        const blue_arrow_2 = scene.add.image(1114, 202, "main", "blue-arrow");
        verify.add(blue_arrow_2);

        // blue_arrow_3
        const blue_arrow_3 = scene.add.image(1114, 698, "main", "blue-arrow");
        blue_arrow_3.flipY = true;
        verify.add(blue_arrow_3);

        // users_to_verify_1
        const users_to_verify_1 = scene.add.text(1004, 785, "", {});
        users_to_verify_1.setOrigin(0.5, 0.5);
        users_to_verify_1.text = "To search by ID, put @ before\nyour search. For example: @100";
        users_to_verify_1.setStyle({ "fixedWidth":350,"fontFamily": "Burbank Small", "fontSize": "20px" });
        users_to_verify_1.setPadding({"left":20});
        verify.add(users_to_verify_1);

        // allusersdone
        const allusersdone = scene.add.container(746.2777709960938, 620.3948364257812);
        allusersdone.visible = false;
        verify.add(allusersdone);

        // magnifying_body_1
        const magnifying_body_1 = scene.add.ellipse(46, -247, 200, 200);
        magnifying_body_1.visible = false;
        magnifying_body_1.isFilled = true;
        magnifying_body_1.fillColor = 16108938;
        magnifying_body_1.lineWidth = 3;
        allusersdone.add(magnifying_body_1);

        // magnifying_handle_1
        const magnifying_handle_1 = scene.add.rectangle(94, -273, 20, 30);
        magnifying_handle_1.angle = -45.00000000000006;
        magnifying_handle_1.visible = false;
        magnifying_handle_1.isFilled = true;
        magnifying_handle_1.fillColor = 5191711;
        allusersdone.add(magnifying_handle_1);

        // magnifying_handle_2
        const magnifying_handle_2 = scene.add.rectangle(9, -256, 20, 30);
        magnifying_handle_2.angle = -20;
        magnifying_handle_2.visible = false;
        magnifying_handle_2.isFilled = true;
        magnifying_handle_2.fillColor = 5191711;
        allusersdone.add(magnifying_handle_2);

        // magnifying_handle_3
        const magnifying_handle_3 = scene.add.rectangle(87, -186, 20, 30);
        magnifying_handle_3.angle = 67;
        magnifying_handle_3.visible = false;
        magnifying_handle_3.isFilled = true;
        magnifying_handle_3.fillColor = 5191711;
        allusersdone.add(magnifying_handle_3);

        // magnifying_handle_4
        const magnifying_handle_4 = scene.add.rectangle(-14, -194, 20, 30);
        magnifying_handle_4.angle = -45.00000000000006;
        magnifying_handle_4.visible = false;
        magnifying_handle_4.isFilled = true;
        magnifying_handle_4.fillColor = 5191711;
        allusersdone.add(magnifying_handle_4);

        // magnifying_handle_5
        const magnifying_handle_5 = scene.add.rectangle(23, -322, 20, 30);
        magnifying_handle_5.angle = 67;
        magnifying_handle_5.visible = false;
        magnifying_handle_5.isFilled = true;
        magnifying_handle_5.fillColor = 5191711;
        allusersdone.add(magnifying_handle_5);

        // users_to_verify_2
        const users_to_verify_2 = scene.add.text(9, -65, "", {});
        users_to_verify_2.setOrigin(0.5, 0.5);
        users_to_verify_2.text = "sorry i couldn't bake any cookies\ntoday, here's a cup of coffee instead\nstill love, chris :3";
        users_to_verify_2.setStyle({ "fontFamily": "Burbank Small", "fontSize": "35px" });
        users_to_verify_2.setPadding({"left":20});
        allusersdone.add(users_to_verify_2);

        // magnifying_body_2
        const magnifying_body_2 = scene.add.ellipse(37, -271, 200, 150);
        magnifying_body_2.fillColor = 16108938;
        magnifying_body_2.isStroked = true;
        magnifying_body_2.strokeColor = 15329769;
        magnifying_body_2.lineWidth = 50;
        allusersdone.add(magnifying_body_2);

        // magnifying_body_3
        const magnifying_body_3 = scene.add.roundedRectangleImage(-22, -284, 200, 200);
        magnifying_body_3.scaleX = 1.0004570023263353;
        magnifying_body_3.scaleY = 1.2569008075093315;
        magnifying_body_3.fillColor = 15329769;
        magnifying_body_3.strokeColor = 15329769;
        magnifying_body_3.lineWidth = 50;
        allusersdone.add(magnifying_body_3);

        // magnifying_body_4
        const magnifying_body_4 = scene.add.ellipse(-24, -377, 200, 150);
        magnifying_body_4.scaleX = 0.8555852915034748;
        magnifying_body_4.scaleY = 0.3698125975698139;
        magnifying_body_4.isFilled = true;
        magnifying_body_4.fillColor = 5848850;
        magnifying_body_4.strokeColor = 15329769;
        magnifying_body_4.lineWidth = 50;
        allusersdone.add(magnifying_body_4);

        // steamhappy
        const steamhappy = scene.add.image(1047, 66, "steamhappy");
        steamhappy.scaleX = 0.12293715065742201;
        steamhappy.scaleY = 0.12293715065742201;
        verify.add(steamhappy);

        // broadcast
        const broadcast = new Broadcast(scene, 0, 0);
        broadcast.visible = false;
        this.add(broadcast);

        // slowmode
        const slowmode = new Slowmode(scene, 49, -39);
        slowmode.visible = false;
        this.add(slowmode);

        // lists
        const items = [];

        // main (components)
        const mainDraggableContainer = new DraggableContainer(main);
        mainDraggableContainer.handle = bg;

        // verify_btn_1 (components)
        const verify_btn_1Button = new Button(verify_btn_1);
        verify_btn_1Button.spriteName = "help-button";
        verify_btn_1Button.callback = () => this.verifyButton();

        // x_button_1 (components)
        const x_button_1Button = new Button(x_button_1);
        x_button_1Button.spriteName = "blue-button";
        x_button_1Button.callback = () => this.closeModPanel();
        x_button_1Button.activeFrame = true;

        // verify_btn_2 (components)
        const verify_btn_2Button = new Button(verify_btn_2);
        verify_btn_2Button.spriteName = "help-button";
        verify_btn_2Button.callback = () => this.toggleInvisibility();

        // broadcast_btn (components)
        const broadcast_btnButton = new Button(broadcast_btn);
        broadcast_btnButton.spriteName = "help-button";
        broadcast_btnButton.callback = () => this.broadcastButton();

        // broadcast_btn_1 (components)
        const broadcast_btn_1Button = new Button(broadcast_btn_1);
        broadcast_btn_1Button.spriteName = "help-button";
        broadcast_btn_1Button.callback = () => this.toggleStreamer();

        // broadcast_btn_2 (components)
        const broadcast_btn_2Button = new Button(broadcast_btn_2);
        broadcast_btn_2Button.spriteName = "help-button";
        broadcast_btn_2Button.callback = () => this.toggleModChat();

        // broadcast_btn_3 (components)
        const broadcast_btn_3Button = new Button(broadcast_btn_3);
        broadcast_btn_3Button.spriteName = "help-button";
        broadcast_btn_3Button.callback = () => this.onServerJump();

        // x_button_2 (components)
        const x_button_2Button = new Button(x_button_2);
        x_button_2Button.spriteName = "blue-button";
        x_button_2Button.callback = () => {this.penguinSpawner.show()};
        x_button_2Button.activeFrame = true;

        // broadcast_btn_4 (components)
        const broadcast_btn_4Button = new Button(broadcast_btn_4);
        broadcast_btn_4Button.spriteName = "help-button";
        broadcast_btn_4Button.callback = () => this.onInventoryIDs();

        // broadcast_btn_5 (components)
        const broadcast_btn_5Button = new Button(broadcast_btn_5);
        broadcast_btn_5Button.spriteName = "help-button";
        broadcast_btn_5Button.callback = () => this.onChatSlow();

        // verify (components)
        const verifyDraggableContainer = new DraggableContainer(verify);
        verifyDraggableContainer.handle = steamhappy;

        // bg_1 (components)
        new Interactive(bg_1);

        // verify_btn (components)
        const verify_btnButton = new Button(verify_btn);
        verify_btnButton.spriteName = "save-button";
        verify_btnButton.callback = () => { this.network.send('get_unverified_users'); this.pageIndex = 1};

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.close();

        // player7 (prefab fields)
        player7._parent = this;

        // player6 (prefab fields)
        player6._parent = this;

        // player5 (prefab fields)
        player5._parent = this;

        // player4 (prefab fields)
        player4._parent = this;

        // player3 (prefab fields)
        player3._parent = this;

        // player2 (prefab fields)
        player2._parent = this;

        // player1 (prefab fields)
        player1._parent = this;

        // scrollupbtn (components)
        const scrollupbtnButton = new Button(scrollupbtn);
        scrollupbtnButton.spriteName = "blue-button";
        scrollupbtnButton.callback = () => this.usersScrollUp();
        scrollupbtnButton.activeFrame = true;

        // scrolldownbtn (components)
        const scrolldownbtnButton = new Button(scrolldownbtn);
        scrolldownbtnButton.spriteName = "blue-button";
        scrolldownbtnButton.callback = () => this.usersScrollDown();
        scrolldownbtnButton.activeFrame = true;

        this.bg = bg;
        this.clonepenguinbtn = clonepenguinbtn;
        this.main = main;
        this.penguinSpawner = penguinSpawner;
        this.bg_1 = bg_1;
        this.player7 = player7;
        this.player6 = player6;
        this.player5 = player5;
        this.player4 = player4;
        this.player3 = player3;
        this.player2 = player2;
        this.player1 = player1;
        this.users_to_verify = users_to_verify;
        this.name_btn = name_btn;
        this.allusersdone = allusersdone;
        this.steamhappy = steamhappy;
        this.verify = verify;
        this.broadcast = broadcast;
        this.slowmode = slowmode;
        this.items = items;

        /* START-USER-CTR-CODE */
        this._dontHideInputs = true
        this.page = 1
        this.pageSize = 7
        this.roomArray = []
        this.pageIndex = 1
        this.searchbar = document.getElementById("search")
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    load() {
        this.network.send('get_unverified_users')
        this.searchbar.style.visibility = 'visible'
    }

    show(slowmode) {
        super.show()
        this.clonepenguinbtn.visible = this.world.client.rank >= 6
        if(this.verify.visible) {
            this.searchbar.style.visibility = 'visible'
        }

        if(this.world.client.rank < 6) {
            if(!this.penguinSpawner) return
            this.penguinSpawner.destroy()
            this.penguinSpawner = null
        }

        if(slowmode) {
            this.slowmode.show()
            document.getElementById('cooldown-input').value = parseInt(slowmode.id)
            this.slowmode.setUser()
        }
    }

    closeModPanel() {
        this.visible = false
        if(this.penguinSpawner) this.penguinSpawner.close()
    }

    usersScrollUp() {
        if(this.pageIndex == 1) return
        this.showUsers(this.usersArr,'up')
    }
    usersScrollDown() {
        if(this.pageIndex == this.usersTotalPages) return
        this.showUsers(this.usersArr,'down')
    }

    showUsers(users,dir = null,searchById = false,usersearch = false) {
        if(dir == 'up') {
            this.pageIndex--
        } else if(dir == 'down') {
            this.pageIndex++
        }
        this.usersArr = users
        //calculate pages
        //if(!dir && this.pageIndex == 0) this.pageIndex = 1
        this.currentlyHandling = 0
        this.hideVerifySlots()
        if(searchById) {
            this.allusersdone.visible = false
            if(users) {
                this[`player1`].visible = true
                this.handleUser([users], this.player1)
                this.users_to_verify.text = "Found user"
            } else {
                this.users_to_verify.text = "User not found :("
            }
            return
        }
        this.allusersdone.visible = (users.length < 1 && !usersearch)
        this.usersTotalPages = Math.ceil(users.length / 7);
        if(this.pageIndex > this.usersTotalPages) this.pageIndex--

        let startIndex = (this.pageIndex - 1) * 7;
        let endIndex = startIndex + 7;
        let subUsers = this.usersArr.slice(startIndex, endIndex);

        for(let i = 0; i < subUsers.length; i++) {
            if (subUsers[i] == undefined) {
                this[`player${i + 1}`].visible = false
            } else {
                this[`player${i + 1}`].visible = true
                this.handleUser(subUsers, this[`player${i + 1}`])
            }
        }

        this.users_to_verify.text = `${usersearch ? 'Users found:' : 'Users to verify:'} ${users.length}`

    }

    showSearchedUser(user) {
        this.handleUser(user, this.player1)
    }

    hideVerifySlots() {
        this.player1.visible = false
        this.player2.visible = false
        this.player3.visible = false
        this.player4.visible = false
        this.player5.visible = false
        this.player6.visible = false
        this.player7.visible = false
    }

    handleUser(users, gameObject) {
        //set the container text and id
        //gameObject.name_txt.text = users[this.currentlyHandling].username
        //gameObject.userID = users[this.currentlyHandling].id
        gameObject.setItem(users[this.currentlyHandling].username,users[this.currentlyHandling].id)
        this.currentlyHandling++
    }

    close(){
        this.verify.visible = false
        this.main.visible = true
        this.searchbar.style.visibility = 'hidden'
    }

    verifyButton(){
        if (this.world.client.rank <= 2) return

        var searchbar = document.getElementById("search")
        searchbar.style.visibility = 'visible'
        this.verify.visible = true

        this.main.visible = false
        this.pageIndex = 1
        this.network.send('get_unverified_users')
    }

    broadcastButton(){
        if (this.world.client.rank <= 2) return

        this.broadcast.show()
        //this.interface.loadWidget('Broadcast')
    }

    toggleInvisibility(){
        if (this.world.client.rank <= 2) return

        //let room = this.crumbs.scenes.rooms[1]
        //this.world.client.sendJoinRoom(1, room.key, room.x, room.y, 80)
        this.network.send('toggle_invisibility')
    }

    toggleStreamer(){
        let text = 'Streamer mode hides all mod features, showing\nthe game as if you were rank 1. Enable?'
        this.interface.prompt.showWindow(text, 'dual', () => {
            this.interface.prompt.window.visible = false;
            this.close()
            this.network.send('toggle_streamer');
        });
    }

    toggleModChat(){
        this.world.client.toggleModChat()
    }

    onServerJump() {
        this.closeModPanel()
        this.world.client.serverJump(true)
    }

    onInventoryIDs() {
        if (this.world.client.rank <= 2) return

        if (window.inventoryIDs) {
            let text = `Item IDs in Inventory is no longer visible`
            this.interface.prompt.showWindow(text, 'single')
            delete window.inventoryIDs;
        } else {
            let text = `Item IDs in Inventory is visible`
            this.interface.prompt.showWindow(text, 'single')
            window.inventoryIDs = "true"
        }    
    }

    onChatSlow() {
        if (this.world.client.rank < 4 || this.world.client.rank > 8) return
        this.slowmode.show()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */