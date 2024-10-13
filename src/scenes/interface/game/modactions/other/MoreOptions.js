
import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton, Interactive, NineSlice, InputText } from '@components/components'

/* START OF COMPILED CODE */

export default class MoreOptions extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg_1;
        /** @type {Phaser.GameObjects.Text} */
        this.removeItemInput;
        /** @type {Phaser.GameObjects.Text} */
        this.mailInput;
        /** @type {Phaser.GameObjects.Text} */
        this.itemInput;
        /** @type {Phaser.GameObjects.Text} */
        this.coinsInput;
        /** @type {Phaser.GameObjects.Text} */
        this.furnitureUnitInput;
        /** @type {Phaser.GameObjects.Text} */
        this.furnitureInput;
        /** @type {Phaser.GameObjects.Text} */
        this.nameInput;
        /** @type {Phaser.GameObjects.Text[]} */
        this.inputs;


        // bg_1
        const bg_1 = scene.add.nineslice(-22.468603934740713, -28.57432293665994, "prompt", "window", 470, 435, 44, 39, 40, 41);
        bg_1.setOrigin(0, 0);
        bg_1.alpha = 0.9;
        this.add(bg_1);

        // roundedrectangleimage_6
        const roundedrectangleimage_6 = scene.add.roundedRectangleImage(318.5313960652593, 250.42567706334006, 200, 30);
        roundedrectangleimage_6.fillColor = 1136020;
        roundedrectangleimage_6.isStroked = false;
        roundedrectangleimage_6.radiusTopLeft = 15;
        roundedrectangleimage_6.radiusTopRight = 0;
        roundedrectangleimage_6.radiusBottomLeft = 15;
        roundedrectangleimage_6.radiusBottomRight = 0;
        this.add(roundedrectangleimage_6);

        // roundedrectangleimage_4
        const roundedrectangleimage_4 = scene.add.roundedRectangleImage(295.5313960652593, 45.42567706334006, 200, 30);
        roundedrectangleimage_4.fillColor = 1136020;
        roundedrectangleimage_4.isStroked = false;
        roundedrectangleimage_4.radiusTopLeft = 15;
        roundedrectangleimage_4.radiusTopRight = 0;
        roundedrectangleimage_4.radiusBottomLeft = 15;
        roundedrectangleimage_4.radiusBottomRight = 0;
        this.add(roundedrectangleimage_4);

        // roundedrectangleimage
        const roundedrectangleimage = scene.add.roundedRectangleImage(96, 212, 200, 30);
        roundedrectangleimage.fillColor = 1136020;
        roundedrectangleimage.isStroked = false;
        roundedrectangleimage.radiusTopLeft = 15;
        roundedrectangleimage.radiusTopRight = 0;
        roundedrectangleimage.radiusBottomLeft = 15;
        roundedrectangleimage.radiusBottomRight = 0;
        this.add(roundedrectangleimage);

        // roundedrectangleimage_3
        const roundedrectangleimage_3 = scene.add.roundedRectangleImage(316, 332, 200, 30);
        roundedrectangleimage_3.fillColor = 1136020;
        roundedrectangleimage_3.isStroked = false;
        roundedrectangleimage_3.radiusTopLeft = 15;
        roundedrectangleimage_3.radiusTopRight = 0;
        roundedrectangleimage_3.radiusBottomLeft = 15;
        roundedrectangleimage_3.radiusBottomRight = 0;
        this.add(roundedrectangleimage_3);

        // text_2
        const text_2 = scene.add.text(48, 4, "", {});
        text_2.setOrigin(0.5, 0.5);
        text_2.text = "unban:";
        text_2.setStyle({ "color": "#000", "fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(text_2);

        // ban_btn_7
        const ban_btn_7 = scene.add.image(121.53139606525929, 5.425677063340061, "main", "grey-arrow");
        ban_btn_7.angle = 90;
        ban_btn_7.setOrigin(0.5, 0);
        this.add(ban_btn_7);

        // text_3
        const text_3 = scene.add.text(58, 65, "", {});
        text_3.setOrigin(0.5, 0.5);
        text_3.text = "IP unban:";
        text_3.setStyle({ "color": "#000", "fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(text_3);

        // ban_btn_9
        const ban_btn_9 = scene.add.image(149, 68, "main", "grey-arrow");
        ban_btn_9.angle = 90;
        ban_btn_9.setOrigin(0.5, 0);
        this.add(ban_btn_9);

        // text
        const text = scene.add.text(71, 101, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "make potw:";
        text.setStyle({ "color": "#000", "fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(text);

        // roundedrectangleimage_5
        const roundedrectangleimage_5 = scene.add.roundedRectangleImage(304.5313960652593, 131.42567706334006, 200, 30);
        roundedrectangleimage_5.fillColor = 1136020;
        roundedrectangleimage_5.isStroked = false;
        roundedrectangleimage_5.radiusTopLeft = 15;
        roundedrectangleimage_5.radiusTopRight = 0;
        roundedrectangleimage_5.radiusBottomLeft = 15;
        roundedrectangleimage_5.radiusBottomRight = 0;
        this.add(roundedrectangleimage_5);

        // ban_btn_12
        const ban_btn_12 = scene.add.image(172.5313960652593, 101.42567706334006, "main", "grey-arrow");
        ban_btn_12.angle = 90;
        ban_btn_12.setOrigin(0.5, 0);
        this.add(ban_btn_12);

        // card_coin_1
        const card_coin_1 = scene.add.image(22, 175, "main", "card-coin");
        card_coin_1.angle = 90;
        this.add(card_coin_1);

        // item_txt_1
        const item_txt_1 = scene.add.text(126, 175, "", {});
        item_txt_1.setOrigin(0.5, 0.5);
        item_txt_1.text = "add coins:";
        item_txt_1.setStyle({ "color": "#000000ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(item_txt_1);

        // items_btn_2
        const items_btn_2 = scene.add.image(206, 211, "main", "grey-arrow");
        items_btn_2.angle = 90;
        items_btn_2.setOrigin(0.5, 0);
        this.add(items_btn_2);

        // item_txt_3
        const item_txt_3 = scene.add.text(130, 259, "", {});
        item_txt_3.setOrigin(0.5, 0.5);
        item_txt_3.text = "add item by id";
        item_txt_3.setStyle({ "color": "#000000ff", "fixedWidth":180,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(item_txt_3);

        // item_icon_1
        const item_icon_1 = scene.add.image(17, 238, "main", "buddy/icon-mascot");
        item_icon_1.setOrigin(0.5, 0);
        this.add(item_icon_1);

        // roundedrectangleimage_2
        const roundedrectangleimage_2 = scene.add.roundedRectangleImage(97, 296, 200, 30);
        roundedrectangleimage_2.fillColor = 1136020;
        roundedrectangleimage_2.isStroked = false;
        roundedrectangleimage_2.radiusTopLeft = 15;
        roundedrectangleimage_2.radiusTopRight = 0;
        roundedrectangleimage_2.radiusBottomLeft = 15;
        roundedrectangleimage_2.radiusBottomRight = 0;
        this.add(roundedrectangleimage_2);

        // text_5
        const text_5 = scene.add.text(297, 365, "", {});
        text_5.setOrigin(0.5, 0.5);
        text_5.text = "List of mail IDs:";
        text_5.setStyle({ "color": "#000", "fontFamily": "Burbank Small", "fontSize": "22px" });
        text_5.setLineSpacing(6);
        this.add(text_5);

        // items_btn_1
        const items_btn_1 = scene.add.image(206, 296, "main", "grey-arrow");
        items_btn_1.angle = 90;
        items_btn_1.setOrigin(0.5, 0);
        this.add(items_btn_1);

        // text_4
        const text_4 = scene.add.text(334, 294, "", {});
        text_4.setOrigin(0.5, 0.5);
        text_4.text = "Send sys mail:";
        text_4.setStyle({ "color": "#000", "fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(text_4);

        // ban_btn_11
        const ban_btn_11 = scene.add.image(413, 367, "main", "grey-arrow");
        ban_btn_11.angle = 90;
        ban_btn_11.setOrigin(0.5, 0);
        this.add(ban_btn_11);

        // mail_icon
        const mail_icon = scene.add.image(234, 295, "main", "mail-icon");
        this.add(mail_icon);

        // help_icon
        const help_icon = scene.add.image(215.5313960652593, -9.57432293665994, "main", "help-icon");
        help_icon.setOrigin(0.5, 0);
        this.add(help_icon);

        // ban_btn_14
        const ban_btn_14 = scene.add.image(138, 35, "main", "grey-arrow");
        ban_btn_14.angle = 90;
        ban_btn_14.setOrigin(0.5, 0);
        this.add(ban_btn_14);

        // unmute_text
        const unmute_text = scene.add.text(52, 34, "", {});
        unmute_text.setOrigin(0.5, 0.5);
        unmute_text.text = "unmute:";
        unmute_text.setStyle({ "color": "#000", "fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(unmute_text);

        // items_btn
        const items_btn = scene.add.image(425, 331, "main", "grey-arrow");
        items_btn.angle = 90;
        items_btn.setOrigin(0.5, 0);
        this.add(items_btn);

        // stamps_txt
        const stamps_txt = scene.add.text(361, 4, "", {});
        stamps_txt.setOrigin(0.5, 0.5);
        stamps_txt.text = "change name:";
        stamps_txt.setStyle({ "color": "#000000ff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(stamps_txt);

        // username_btn
        const username_btn = scene.add.image(405.5313960652593, 45.42567706334006, "main", "grey-arrow");
        username_btn.angle = 90;
        username_btn.setOrigin(0.5, 0);
        this.add(username_btn);

        // roundedrectangleimage_7
        const roundedrectangleimage_7 = scene.add.roundedRectangleImage(373.5313960652593, 165.42567706334006, 70, 30);
        roundedrectangleimage_7.fillColor = 1136020;
        roundedrectangleimage_7.isStroked = false;
        roundedrectangleimage_7.radiusTopLeft = 15;
        roundedrectangleimage_7.radiusTopRight = 15;
        roundedrectangleimage_7.radiusBottomLeft = 15;
        roundedrectangleimage_7.radiusBottomRight = 15;
        this.add(roundedrectangleimage_7);

        // items_btn_3
        const items_btn_3 = scene.add.image(419.5313960652593, 130.42567706334006, "main", "grey-arrow");
        items_btn_3.angle = 90;
        items_btn_3.setOrigin(0.5, 0);
        this.add(items_btn_3);

        // item_txt
        const item_txt = scene.add.text(334, 95, "", {});
        item_txt.setOrigin(0.5, 0.5);
        item_txt.text = "add furniture by id";
        item_txt.setStyle({ "color": "#000000ff", "fixedWidth":180,"fontFamily": "Burbank Small", "fontSize": "21px" });
        this.add(item_txt);

        // igloo_icon
        const igloo_icon = scene.add.image(220.5313960652593, 93.42567706334006, "main", "igloo-icon");
        this.add(igloo_icon);

        // item_txt_4
        const item_txt_4 = scene.add.text(283, 165, "", {});
        item_txt_4.setOrigin(0.5, 0.5);
        item_txt_4.text = "# of units:";
        item_txt_4.setStyle({ "fixedWidth":100,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(item_txt_4);

        // item_icon
        const item_icon = scene.add.image(241.5313960652593, 192.42567706334006, "main", "buddy/icon-mascot");
        item_icon.setOrigin(0.5, 0);
        this.add(item_icon);

        // item_txt_5
        const item_txt_5 = scene.add.text(358, 209, "", {});
        item_txt_5.setOrigin(0.5, 0.5);
        item_txt_5.text = "remove item";
        item_txt_5.setStyle({ "color": "#000000ff", "fixedWidth":180,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(item_txt_5);

        // polygon_1
        const polygon_1 = scene.add.polygon(240.8743672270294, 208.8650765341171, "42.47503088578321 72.12756496302148 37.799920914845416 68.23163998723999 57.27954579375293 47.9728301131762 39.808375725252546 30.201056145098505 44.25198270447771 26.474159968974163 61.73972630013802 43.38853492215384 80.06015076487893 25.163531103982535 84.96115632060503 29.341003181377516 66.67296414442293 48.156139034652796 86.36911894625479 69.01082498239629 82.47319397047329 73.42620662161534 61.95465576469073 52.38821175239522");
        polygon_1.setOrigin(1.273942534258352, 0.9917617707835024);
        polygon_1.isFilled = true;
        polygon_1.fillColor = 10820627;
        this.add(polygon_1);

        // items_btn_4
        const items_btn_4 = scene.add.image(430.5313960652593, 250.42567706334006, "main", "grey-arrow");
        items_btn_4.angle = 90;
        items_btn_4.setOrigin(0.5, 0);
        this.add(items_btn_4);

        // removeItemInput
        const removeItemInput = scene.add.text(230, 240.1899995803833, "", {});
        removeItemInput.text = "Item input";
        removeItemInput.setStyle({ "color": "#ffffff", "fixedWidth":160,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(removeItemInput);

        // mailInput
        const mailInput = scene.add.text(226, 319, "", {});
        mailInput.text = "Item input";
        mailInput.setStyle({ "color": "#ffffff", "fixedWidth":160,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(mailInput);

        // itemInput
        const itemInput = scene.add.text(7, 286, "", {});
        itemInput.text = "Item input";
        itemInput.setStyle({ "color": "#ffffff", "fixedWidth":160,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(itemInput);

        // coinsInput
        const coinsInput = scene.add.text(5, 201, "", {});
        coinsInput.text = "Item input";
        coinsInput.setStyle({ "color": "#ffffff", "fixedWidth":160,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(coinsInput);

        // furnitureUnitInput
        const furnitureUnitInput = scene.add.text(349, 153.00899982452393, "", {});
        furnitureUnitInput.text = "99";
        furnitureUnitInput.setStyle({ "align": "center", "color": "#ffffff", "fixedWidth":50,"fontFamily": "Burbank Small", "fontSize": "22px" });
        this.add(furnitureUnitInput);

        // furnitureInput
        const furnitureInput = scene.add.text(218, 120.1899995803833, "", {});
        furnitureInput.text = "Item input";
        furnitureInput.setStyle({ "color": "#ffffff", "fixedWidth":160,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(furnitureInput);

        // nameInput
        const nameInput = scene.add.text(207, 33.1899995803833, "", {});
        nameInput.text = "Item input";
        nameInput.setStyle({ "color": "#ffffff", "fixedWidth":160,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(nameInput);

        // text_1
        const text_1 = scene.add.text(66, 137, "", {});
        text_1.setOrigin(0.5, 0.5);
        text_1.text = "slowmode:";
        text_1.setStyle({ "color": "#000", "fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(text_1);

        // ban_btn
        const ban_btn = scene.add.image(166, 140, "main", "grey-arrow");
        ban_btn.angle = 90;
        ban_btn.setOrigin(0.5, 0);
        this.add(ban_btn);

        // lists
        const inputs = [removeItemInput, nameInput, furnitureInput, furnitureUnitInput, coinsInput, itemInput, mailInput];

        // bg_1 (components)
        new Interactive(bg_1);

        // ban_btn_7 (components)
        const ban_btn_7SimpleButton = new SimpleButton(ban_btn_7);
        ban_btn_7SimpleButton.callback = () => this.unban();

        // ban_btn_9 (components)
        const ban_btn_9SimpleButton = new SimpleButton(ban_btn_9);
        ban_btn_9SimpleButton.callback = () => this.unbanIP();

        // ban_btn_12 (components)
        const ban_btn_12SimpleButton = new SimpleButton(ban_btn_12);
        ban_btn_12SimpleButton.callback = () => this.makePotw();

        // items_btn_2 (components)
        const items_btn_2SimpleButton = new SimpleButton(items_btn_2);
        items_btn_2SimpleButton.callback = () => this.addCoins();

        // items_btn_1 (components)
        const items_btn_1SimpleButton = new SimpleButton(items_btn_1);
        items_btn_1SimpleButton.callback = () => this.addItem();

        // ban_btn_11 (components)
        const ban_btn_11SimpleButton = new SimpleButton(ban_btn_11);
        ban_btn_11SimpleButton.callback = () => this.sysMailList();

        // ban_btn_14 (components)
        const ban_btn_14SimpleButton = new SimpleButton(ban_btn_14);
        ban_btn_14SimpleButton.callback = () => this.unmute();

        // items_btn (components)
        const items_btnSimpleButton = new SimpleButton(items_btn);
        items_btnSimpleButton.callback = () => this.sendSysMail();

        // username_btn (components)
        const username_btnSimpleButton = new SimpleButton(username_btn);
        username_btnSimpleButton.callback = () => this.changeUsernames();

        // items_btn_3 (components)
        const items_btn_3SimpleButton = new SimpleButton(items_btn_3);
        items_btn_3SimpleButton.callback = () => this.addFurniture();

        // items_btn_4 (components)
        const items_btn_4SimpleButton = new SimpleButton(items_btn_4);
        items_btn_4SimpleButton.callback = () => this.removeItem();

        // removeItemInput (components)
        const removeItemInputInputText = new InputText(removeItemInput);
        removeItemInputInputText.id = "removeitems";
        removeItemInputInputText.inputType = "number";
        removeItemInputInputText.maxLength = 10;
        removeItemInputInputText.callback = () => this.handleRemoveItems();
        removeItemInputInputText.rank = 3;

        // mailInput (components)
        const mailInputInputText = new InputText(mailInput);
        mailInputInputText.id = "sendsysmail";
        mailInputInputText.inputType = "number";
        mailInputInputText.maxLength = 5;
        mailInputInputText.callback = () => this.sendSysMail();
        mailInputInputText.rank = 3;

        // itemInput (components)
        const itemInputInputText = new InputText(itemInput);
        itemInputInputText.id = "additems";
        itemInputInputText.inputType = "number";
        itemInputInputText.maxLength = 10;
        itemInputInputText.callback = () => this.handleAddItems();

        // coinsInput (components)
        const coinsInputInputText = new InputText(coinsInput);
        coinsInputInputText.id = "coincount";
        coinsInputInputText.inputType = "number";
        coinsInputInputText.maxLength = 12;
        coinsInputInputText.callback = () => this.handleCoinCount();
        coinsInputInputText.rank = 3;

        // furnitureUnitInput (components)
        const furnitureUnitInputInputText = new InputText(furnitureUnitInput);
        furnitureUnitInputInputText.id = "addfurniture-units";
        furnitureUnitInputInputText.inputType = "number";
        furnitureUnitInputInputText.maxLength = 2;
        furnitureUnitInputInputText.callback = () => this.addFurniture();
        furnitureUnitInputInputText.rank = 3;

        // furnitureInput (components)
        const furnitureInputInputText = new InputText(furnitureInput);
        furnitureInputInputText.id = "addfurniture";
        furnitureInputInputText.inputType = "number";
        furnitureInputInputText.maxLength = 10;
        furnitureInputInputText.callback = () => this.addFurniture();
        furnitureInputInputText.rank = 3;

        // nameInput (components)
        const nameInputInputText = new InputText(nameInput);
        nameInputInputText.id = "changeusername";
        nameInputInputText.maxLength = 16;
        nameInputInputText.callback = () => this.handleChangeUsername();
        nameInputInputText.rank = 3;

        // ban_btn (components)
        const ban_btnSimpleButton = new SimpleButton(ban_btn);
        ban_btnSimpleButton.callback = () => this.showSlowmode();

        this.bg_1 = bg_1;
        this.removeItemInput = removeItemInput;
        this.mailInput = mailInput;
        this.itemInput = itemInput;
        this.coinsInput = coinsInput;
        this.furnitureUnitInput = furnitureUnitInput;
        this.furnitureInput = furnitureInput;
        this.nameInput = nameInput;
        this.inputs = inputs;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get modActions() {
        return this.interface.main.modActions
    }

    get id() {
        return this.modActions.id
    }

    get username() {
        return this.modActions.username.text
    }

    show() {
        this.visible = !this.visible
        this.setInputsVisible(this.visible)
    }

    setInputsVisible(vis) {
        for(let input of this.inputs) {
            input.__InputText.visible(vis)
        }
    }

    addItem(){
        let item = this.crumbs.items[this.itemInput.__InputText.text]
        this.interface.prompt.showWindow(`Are you sure you want to add\n${item.name} to ${this.username}?`, "dual", () => this.handleAddItems(item.name), () => this.show())
        this.modActions.hide()
    }

    removeItem(){
        let item = this.crumbs.items[this.removeItemInput.__InputText.text]
        this.interface.prompt.showWindow(`Are you sure you want to remove\n${item.name} from ${this.username}?`, "dual", () => this.handleRemoveItems(item.name), () => this.modActions.show())
        this.modActions.hide()
    }

    addFurniture(){
        let item = this.crumbs.furniture[this.furnitureInput.__InputText.text]
        this.interface.prompt.showWindow(`Are you sure you want to add ${this.furnitureUnitInput.__InputText.text} units of\n${item.name} to ${this.username}?`, "dual", () => this.handleAddFurniture(item.name), () => this.modActions.show())
        this.modActions.hide()
    }

    makePotw(){
        this.interface.prompt.showWindow(`Are you sure you want to make ${this.username}\nPenguin of the Week?\nThis will add the 2 items and 10k coins.\nif u abuse i will be angy`, "dual", () => this.handleMakePotw(), () => this.modActions.show())
        this.modActions.hide()
    }

    addCoins(){
        this.interface.prompt.showWindow(`Are you sure you want to add\n${this.coinsInput.__InputText.text} coins to ${this.username}?`, "dual", () => this.handleCoinCount(), () => this.show())
        this.hide()
    }

    changeUsernames(){
        this.interface.prompt.showWindow(`Are you sure you want to change ${this.username}'s\nusername to ${this.nameInput.__InputText.text}?`, "dual", () => this.handleChangeUsername(), () => this.modActions.show())
        this.modActions.hide()
    }

    handleAddItems(){
        let item = this.itemInput.__InputText.text
        let itemName = this.crumbs.items[item].name
        this.network.send('add_user_items', { id: this.id, item: item, itemName: itemName })
        this.modActions.show()
    }

    handleRemoveItems(){
        let item = this.removeItemInput.__InputText.text
        let itemName = this.crumbs.items[item].name
        this.network.send('remove_user_items', { id: this.id, item: item, itemName: itemName })
        this.modActions.show()
    }

    handleAddFurniture(){
        let item = this.furnitureInput.__InputText.text
        let itemName = this.crumbs.furniture[item].name
        this.network.send('add_user_furniture', { id: this.id, item: item, itemName: itemName, units: parseInt(this.furnitureInput.__InputText.text) })
        this.modActions.show()
    }

    handleChangeUsername(){
        let newUsername = this.nameInput.__InputText.text
        this.network.send('change_user_name', { id: this.id, newUsername: newUsername })
        this.modActions.show()
    }

    sendSysMail(){
        this.setInputsVisible(false)
        this.modActions.sysPostcardSender.showCard(this.mailInput.__InputText.text, this.id, this.username)
    }

    sysMailList() {
        this.interface.prompt.showError(`
        Community Event Accepted - 242
        Published Penguin - 158
        We can see you - 666
        `)
    }

    unmute() {
        this.interface.prompt.showWindow(`Are you sure you want to unmute ${this.username}?`, "dual", () => {
            this.network.send('unmute_player', {id: this.id})
            this.modActions.show()
        }, () => this.modActions.show())
        this.modActions.hide()
    }

    unban(){
        this.interface.prompt.showWindow(`Are you sure you want to unban ${this.username}?\nThis doesn't remove IP bans.`, "dual", () => {
            this.network.send('unban', {id: this.id})
            this.modActions.show()
        }, () => this.modActions.show())
        this.modActions.hide()
    }

    unbanIP(){
        this.interface.prompt.showWindow(`Are you sure you want to remove IP bans from\n${this.username} and its alts?`, "dual", () => {
            this.network.send('unban_ip', {id: this.id})
            this.modActions.show()
        }, () => this.modActions.show())
        this.modActions.hide()
    }

    handleCoinCount() {
        this.network.send('add_coins', {id: this.id, coins: this.coinsInput.__InputText.text})
        this.modActions.show()
    }

    handleMakePotw() {
        this.network.send('make_potw', {id: this.id})
        this.modActions.show()
    }

    showSlowmode() {
        this.interface.loadWidget('ModPanel', false, {
            id: this.modActions.id
        })

        this.modActions.hide()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */