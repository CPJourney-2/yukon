
import { Button, DraggableContainer, Interactive, InputText, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class Slowmode extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg_2;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_15s;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_30s;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_1m;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_2m;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_10m;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_5m;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_15m;
        /** @type {Phaser.GameObjects.Text} */
        this.coolset_text;
        /** @type {Phaser.GameObjects.Text} */
        this.idInput;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_server;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_room;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_user;
        /** @type {Phaser.GameObjects.Text} */
        this.server_cool_text;
        /** @type {Phaser.GameObjects.Image[]} */
        this.modeCheckboxes;
        /** @type {Phaser.GameObjects.Image[]} */
        this.timeCheckboxes;


        // bg_2
        const bg_2 = scene.add.nineslice(-278.7192474992712, 25.871093541339178, "prompt", "window", 500, 580, 44, 39, 40, 41);
        bg_2.scaleX = 1.0738810227811926;
        bg_2.setOrigin(0, 0.5);
        this.add(bg_2);

        // users_to_verify_3
        const users_to_verify_3 = scene.add.text(-29, -214, "", {});
        users_to_verify_3.setOrigin(0.5, 0.5);
        users_to_verify_3.text = "Toggle Chat Slow Mode";
        users_to_verify_3.setStyle({ "fixedWidth":370,"fixedHeight":40,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        users_to_verify_3.setPadding({"left":20});
        this.add(users_to_verify_3);

        // text_13
        const text_13 = scene.add.text(-210, -168, "", {});
        text_13.text = "Entire Server";
        text_13.setStyle({ "fontFamily": "Burbank Small", "fontSize": "22px" });
        this.add(text_13);

        // text_14
        const text_14 = scene.add.text(-15, -167, "", {});
        text_14.visible = false;
        text_14.text = "For Room";
        text_14.setStyle({ "fontFamily": "Burbank Small", "fontSize": "22px" });
        this.add(text_14);

        // text_15
        const text_15 = scene.add.text(139, -168, "", {});
        text_15.visible = false;
        text_15.text = "For User";
        text_15.setStyle({ "fontFamily": "Burbank Small", "fontSize": "22px" });
        this.add(text_15);

        // users_to_verify_4
        const users_to_verify_4 = scene.add.text(-76.7192474992712, -45.12890645866082, "", {});
        users_to_verify_4.setOrigin(0.5, 0.5);
        users_to_verify_4.text = "Select Duration";
        users_to_verify_4.setStyle({ "fixedWidth":350,"fontFamily": "Burbank Small", "fontSize": "25px" });
        users_to_verify_4.setPadding({"left":20});
        this.add(users_to_verify_4);

        // users_to_verify_5
        const users_to_verify_5 = scene.add.text(-16, 107, "", {});
        users_to_verify_5.setOrigin(0.5, 0.5);
        users_to_verify_5.visible = false;
        users_to_verify_5.text = "If not for the server, enter User/Room ID.";
        users_to_verify_5.setStyle({ "fontFamily": "Burbank Small", "fontSize": "25px" });
        users_to_verify_5.setPadding({"left":20});
        this.add(users_to_verify_5);

        // window_button
        const window_button = scene.add.image(-126, 249, "prompt", "window-button");
        window_button.scaleX = 0.701068458123139;
        window_button.scaleY = 0.8;
        window_button.setOrigin(0.5, 0.5047619047619047);
        this.add(window_button);

        // window_button_1
        const window_button_1 = scene.add.image(108, 249, "prompt", "window-button");
        window_button_1.scaleX = 0.701068458123139;
        window_button_1.scaleY = 0.8;
        window_button_1.setOrigin(0.5, 0.5047619047619047);
        this.add(window_button_1);

        // textContent_8
        const textContent_8 = scene.add.text(-124, 247, "", {});
        textContent_8.setOrigin(0.5, 0.5);
        textContent_8.text = "Set Cooldown";
        textContent_8.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "30px", "fontStyle": "bold" });
        textContent_8.setLineSpacing(-5);
        this.add(textContent_8);

        // checkbox_15s
        const checkbox_15s = scene.add.image(-211.7192474992712, -1.128906458660822, "login", "checkbox");
        checkbox_15s.scaleX = 0.8;
        checkbox_15s.scaleY = 0.8;
        checkbox_15s.setOrigin(0.41509, 0.5849);
        this.add(checkbox_15s);

        // kick_player_text_2
        const kick_player_text_2 = scene.add.text(-148.7192474992712, -16.128906458660822, "", {});
        kick_player_text_2.setOrigin(0.5, 0);
        kick_player_text_2.text = "15s";
        kick_player_text_2.setStyle({ "color": "#ffffffff", "fixedWidth":70,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(kick_player_text_2);

        // checkbox_30s
        const checkbox_30s = scene.add.image(-103.7192474992712, -1.128906458660822, "login", "checkbox");
        checkbox_30s.scaleX = 0.8;
        checkbox_30s.scaleY = 0.8;
        checkbox_30s.setOrigin(0.41509, 0.5849);
        this.add(checkbox_30s);

        // kick_player_text
        const kick_player_text = scene.add.text(-40.719247499271205, -16.128906458660822, "", {});
        kick_player_text.setOrigin(0.5, 0);
        kick_player_text.text = "30s";
        kick_player_text.setStyle({ "color": "#ffffffff", "fixedWidth":70,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(kick_player_text);

        // checkbox_1m
        const checkbox_1m = scene.add.image(2.280752500728795, -1.128906458660822, "login", "checkbox");
        checkbox_1m.scaleX = 0.8;
        checkbox_1m.scaleY = 0.8;
        checkbox_1m.setOrigin(0.41509, 0.5849);
        this.add(checkbox_1m);

        // kick_player_text_1
        const kick_player_text_1 = scene.add.text(65.2807525007288, -16.128906458660822, "", {});
        kick_player_text_1.setOrigin(0.5, 0);
        kick_player_text_1.text = "1m";
        kick_player_text_1.setStyle({ "color": "#ffffffff", "fixedWidth":70,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(kick_player_text_1);

        // checkbox_2m
        const checkbox_2m = scene.add.image(102.2807525007288, -1.128906458660822, "login", "checkbox");
        checkbox_2m.scaleX = 0.8;
        checkbox_2m.scaleY = 0.8;
        checkbox_2m.setOrigin(0.41509, 0.5849);
        this.add(checkbox_2m);

        // kick_player_text_3
        const kick_player_text_3 = scene.add.text(165.2807525007288, -16.128906458660822, "", {});
        kick_player_text_3.setOrigin(0.5, 0);
        kick_player_text_3.text = "2m";
        kick_player_text_3.setStyle({ "color": "#ffffffff", "fixedWidth":70,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(kick_player_text_3);

        // kick_player_text_4
        const kick_player_text_4 = scene.add.text(-40.719247499271205, 30.871093541339178, "", {});
        kick_player_text_4.setOrigin(0.5, 0);
        kick_player_text_4.text = "10m";
        kick_player_text_4.setStyle({ "color": "#ffffffff", "fixedWidth":70,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(kick_player_text_4);

        // checkbox_10m
        const checkbox_10m = scene.add.image(-103.7192474992712, 45.87109354133918, "login", "checkbox");
        checkbox_10m.scaleX = 0.8;
        checkbox_10m.scaleY = 0.8;
        checkbox_10m.setOrigin(0.41509, 0.5849);
        this.add(checkbox_10m);

        // kick_player_text_5
        const kick_player_text_5 = scene.add.text(-148.7192474992712, 30.871093541339178, "", {});
        kick_player_text_5.setOrigin(0.5, 0);
        kick_player_text_5.text = "5m";
        kick_player_text_5.setStyle({ "color": "#ffffffff", "fixedWidth":70,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(kick_player_text_5);

        // checkbox_5m
        const checkbox_5m = scene.add.image(-211.7192474992712, 45.87109354133918, "login", "checkbox");
        checkbox_5m.scaleX = 0.8;
        checkbox_5m.scaleY = 0.8;
        checkbox_5m.setOrigin(0.41509, 0.5849);
        this.add(checkbox_5m);

        // checkbox_15m
        const checkbox_15m = scene.add.image(2.280752500728795, 45.87109354133918, "login", "checkbox");
        checkbox_15m.scaleX = 0.8;
        checkbox_15m.scaleY = 0.8;
        checkbox_15m.setOrigin(0.41509, 0.5849);
        this.add(checkbox_15m);

        // kick_player_text_6
        const kick_player_text_6 = scene.add.text(65.2807525007288, 30.871093541339178, "", {});
        kick_player_text_6.setOrigin(0.5, 0);
        kick_player_text_6.text = "15m";
        kick_player_text_6.setStyle({ "color": "#ffffffff", "fixedWidth":70,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(kick_player_text_6);

        // coolset_text
        const coolset_text = scene.add.text(-16, -94, "", {});
        coolset_text.setOrigin(0.5, 0.5);
        coolset_text.text = "Current Setting: N/A";
        coolset_text.setStyle({ "fixedWidth":500,"fixedHeight":40,"fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold" });
        coolset_text.setPadding({"left":20});
        this.add(coolset_text);

        // x_button_4
        const x_button_4 = scene.add.image(206, -211, "main", "blue-button");
        this.add(x_button_4);

        // x_button_5
        const x_button_5 = scene.add.image(206, -214, "main", "blue-x");
        this.add(x_button_5);

        // tab_2
        const tab_2 = scene.add.image(-13, -277, "main", "tab-2");
        tab_2.visible = false;
        this.add(tab_2);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(-18, 162, 128, 128);
        rectangle_1.scaleX = 2.8326135681721185;
        rectangle_1.scaleY = 0.38683571804083605;
        rectangle_1.visible = false;
        rectangle_1.isFilled = true;
        this.add(rectangle_1);

        // idInput
        const idInput = scene.add.text(-192, 144, "", {});
        idInput.visible = false;
        idInput.text = "aaaaa";
        idInput.setStyle({ "color": "#000", "fixedWidth":350,"fixedHeight":40,"fontFamily": "Burbank Small", "fontSize": "25px" });
        this.add(idInput);

        // checkbox_server
        const checkbox_server = scene.add.image(-234, -154, "login", "checkbox");
        checkbox_server.scaleX = 0.8;
        checkbox_server.scaleY = 0.8;
        checkbox_server.setOrigin(0.41509, 0.5849);
        this.add(checkbox_server);

        // checkbox_room
        const checkbox_room = scene.add.image(-38, -154, "login", "checkbox");
        checkbox_room.scaleX = 0.8;
        checkbox_room.scaleY = 0.8;
        checkbox_room.setOrigin(0.41509, 0.5849);
        checkbox_room.visible = false;
        this.add(checkbox_room);

        // checkbox_user
        const checkbox_user = scene.add.image(115, -154, "login", "checkbox");
        checkbox_user.scaleX = 0.8;
        checkbox_user.scaleY = 0.8;
        checkbox_user.setOrigin(0.41509, 0.5849);
        checkbox_user.visible = false;
        this.add(checkbox_user);

        // textContent
        const textContent = scene.add.text(110, 246, "", {});
        textContent.setOrigin(0.5, 0.5);
        textContent.text = "Remove\nCooldown";
        textContent.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "30px", "fontStyle": "bold" });
        textContent.setLineSpacing(-5);
        this.add(textContent);

        // server_cool_text
        const server_cool_text = scene.add.text(-11, 141, "", {});
        server_cool_text.setOrigin(0.5, 0.5);
        server_cool_text.text = "Current Server Cooldown: No";
        server_cool_text.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "30px", "fontStyle": "bold" });
        server_cool_text.setLineSpacing(-5);
        this.add(server_cool_text);

        // lists
        const modeCheckboxes = [checkbox_server, checkbox_room, checkbox_user];
        const timeCheckboxes = [checkbox_15s, checkbox_10m, checkbox_30s, checkbox_1m, checkbox_15m, checkbox_2m, checkbox_5m];

        // bg_2 (components)
        new Interactive(bg_2);

        // window_button (components)
        const window_buttonButton = new Button(window_button);
        window_buttonButton.spriteName = "window-button";
        window_buttonButton.callback = () => this.setCoolDown();
        window_buttonButton.activeFrame = true;

        // window_button_1 (components)
        const window_button_1Button = new Button(window_button_1);
        window_button_1Button.spriteName = "window-button";
        window_button_1Button.callback = () => this.removeCoolDown();
        window_button_1Button.activeFrame = true;

        // checkbox_15s (components)
        const checkbox_15sSimpleButton = new SimpleButton(checkbox_15s);
        checkbox_15sSimpleButton.callback = () => {this.setTime('15s')};

        // checkbox_30s (components)
        const checkbox_30sSimpleButton = new SimpleButton(checkbox_30s);
        checkbox_30sSimpleButton.callback = () => {this.setTime('30s')};

        // checkbox_1m (components)
        const checkbox_1mSimpleButton = new SimpleButton(checkbox_1m);
        checkbox_1mSimpleButton.callback = () => {this.setTime('1m')};

        // checkbox_2m (components)
        const checkbox_2mSimpleButton = new SimpleButton(checkbox_2m);
        checkbox_2mSimpleButton.callback = () => {this.setTime('2m')};

        // checkbox_10m (components)
        const checkbox_10mSimpleButton = new SimpleButton(checkbox_10m);
        checkbox_10mSimpleButton.callback = () => {this.setTime('10m')};

        // checkbox_5m (components)
        const checkbox_5mSimpleButton = new SimpleButton(checkbox_5m);
        checkbox_5mSimpleButton.callback = () => {this.setTime('5m')};

        // checkbox_15m (components)
        const checkbox_15mSimpleButton = new SimpleButton(checkbox_15m);
        checkbox_15mSimpleButton.callback = () => {this.setTime('15m')};

        // x_button_4 (components)
        const x_button_4Button = new Button(x_button_4);
        x_button_4Button.spriteName = "blue-button";
        x_button_4Button.callback = () => this.close();
        x_button_4Button.activeFrame = true;

        // checkbox_server (components)
        const checkbox_serverSimpleButton = new SimpleButton(checkbox_server);
        checkbox_serverSimpleButton.callback = () => this.setServer();

        // checkbox_room (components)
        const checkbox_roomSimpleButton = new SimpleButton(checkbox_room);
        checkbox_roomSimpleButton.callback = () => this.setRoom();

        // checkbox_user (components)
        const checkbox_userSimpleButton = new SimpleButton(checkbox_user);
        checkbox_userSimpleButton.callback = () => this.setUser();

        this.bg_2 = bg_2;
        this.checkbox_15s = checkbox_15s;
        this.checkbox_30s = checkbox_30s;
        this.checkbox_1m = checkbox_1m;
        this.checkbox_2m = checkbox_2m;
        this.checkbox_10m = checkbox_10m;
        this.checkbox_5m = checkbox_5m;
        this.checkbox_15m = checkbox_15m;
        this.coolset_text = coolset_text;
        this.idInput = idInput;
        this.checkbox_server = checkbox_server;
        this.checkbox_room = checkbox_room;
        this.checkbox_user = checkbox_user;
        this.server_cool_text = server_cool_text;
        this.modeCheckboxes = modeCheckboxes;
        this.timeCheckboxes = timeCheckboxes;

        /* START-USER-CTR-CODE */

        this.currentInputCoords = { x: 0, y: 0 }
        //todo: maybe get this working someday
        this.scene.events.on('update',() => {
            // Move the input when it drags
            /*this.__DraggableContainer.handle.on('dragstart', () => {
                let matrix = this.idInput.__InputText.input//.getWorldTransformMatrix()
                this.currentInputCoords = { x: matrix.x, y: matrix.y }
            })
            this.__DraggableContainer.handle.on('drag', (pointer, dragX, dragY) => {
                console.log(this.currentInputCoords)
                this.idInput.__InputText.input.setPosition(this.currentInputCoords.x + dragX, this.currentInputCoords.y + dragY)
            })*/
                this.refreshText()
        })

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get world() {
        return this.parentContainer.world
    }

    get network() {
        return this.parentContainer.network
    }

    show() {
        this.visible = true
        this.setTime('15s')
        this.setServer()
        this.addListeners()
        this.network.send('server_cooldown_check')
    }

    close() {
        this.visible = false
        this.removeListeners()
    }

    addListeners() {
        this.network.events.on('check_cooldown', this.setCurrentCooldown, this)
    }

    removeListeners() {
        this.network.events.off('check_cooldown', this.setCurrentCooldown, this)
    }

    setCurrentCooldown(args) {
        if (args.time !== '') {
            this.server_cool_text.text = `Current Server Cooldown: ${args.time}`
        } else {
            this.server_cool_text.text = `Current Server Cooldown: No`
        }
    }

    setCoolDown() {
        if (this.world.client.rank < 4 || this.world.client.rank > 8) return
        if (this.globalCooldown) {
            this.network.send('lkhasi_epy', {global: true, cooldownTime: this.cooldownTime})
        } else if (this.roomCooldown) {
            this.network.send('lkhasi_epy', {roomId: parseInt(this.idInput.__InputText.text), cooldownTime: this.cooldownTime})
        } else if (this.userCooldown) {
            this.network.send('lkhasi_epy', {userId: parseInt(this.idInput.__InputText.text), cooldownTime: this.cooldownTime})
        }
    }

    removeCoolDown() {
        if (this.world.client.rank < 4 || this.world.client.rank > 8) return
        if (this.globalCooldown) {
            this.network.send('lkhasi_repy', {global: true})
        } else if (this.roomCooldown) {
            this.network.send('lkhasi_repy', {roomId: parseInt(this.idInput.__InputText.text)})
        } else if (this.userCooldown) {
            this.network.send('lkhasi_repy', {userId: parseInt(this.idInput.__InputText.text)})
        }
    }

    setServer() {
        for(let box of this.modeCheckboxes) box.setFrame('checkbox');
        this.checkbox_server.setFrame('checkbox-active')
        this.globalCooldown = true;
        this.roomCooldown = false;
        this.userCooldown = false;
        this.coolset_text.text = `Current Setting: Global - ${this.cooldownTime}`
    }

    setRoom() {
        for(let box of this.modeCheckboxes) box.setFrame('checkbox');
        this.checkbox_room.setFrame('checkbox-active')
        this.globalCooldown = false;
        this.roomCooldown = true;
        this.userCooldown = false;
        document.getElementById('cooldown-input').value = parseInt(this.world.room.id)
        this.refreshText()
    }

    setUser() {
        for(let box of this.modeCheckboxes) box.setFrame('checkbox');
        this.checkbox_user.setFrame('checkbox-active')
        this.globalCooldown = false;
        this.roomCooldown = false;
        this.userCooldown = true;
        this.refreshText()
    }

    refreshText() {
        if (this.globalCooldown) {
            this.coolset_text.text = `Current Setting: Global - ${this.cooldownTime}`
        } else if (this.roomCooldown) {
            this.coolset_text.text = `Current Setting: Room: ${this.idInput.__InputText.text} - ${this.cooldownTime}`
        } else if (this.userCooldown) {
            this.coolset_text.text = `Current Setting: User: ${this.idInput.__InputText.text} - ${this.cooldownTime}`
        }
    }

    setTime(time) {
        for(let box of this.timeCheckboxes) box.setFrame('checkbox');
        this[`checkbox_${time}`].setFrame('checkbox-active')

        this.cooldownTime = time
        this.refreshText()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
