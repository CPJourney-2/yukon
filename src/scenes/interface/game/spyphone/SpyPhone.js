import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, SimpleButton, DraggableContainer } from '@components/components'

/* START OF COMPILED CODE */

export default class SpyPhone extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 309, y ?? 431);

        /** @type {Phaser.GameObjects.Sprite} */
        this.wheel;
        /** @type {Phaser.GameObjects.Sprite} */
        this.comb;
        /** @type {Phaser.GameObjects.Sprite} */
        this.combtwo;
        /** @type {Phaser.GameObjects.Sprite} */
        this.combthree;
        /** @type {Phaser.GameObjects.Text} */
        this.roomtext;
        /** @type {Array<any>} */
        this.items;


        // wheel
        const wheel = scene.add.sprite(-100, -20, "main", "phone/spy_wheel0001");
        this.add(wheel);

        // comb
        const comb = scene.add.sprite(105, -45, "main", "phone/comb0001");
        this.add(comb);

        // combtwo
        const combtwo = scene.add.sprite(88, -49, "main", "phone/wrench0001");
        this.add(combtwo);

        // combthree
        const combthree = scene.add.sprite(124, -42, "main", "phone/scissors0001");
        combthree.visible = false;
        this.add(combthree);

        // card_bg
        const card_bg = scene.add.image(-133, -262, "main", "phone/spyphone");
        card_bg.setOrigin(0, 0);
        this.add(card_bg);

        // x_button
        const x_button = scene.add.image(94, -121, "main", "phone/phone_x");
        this.add(x_button);

        // phonelight
        const phonelight = scene.add.sprite(37, -157, "main", "phone/phonelight0001");
        phonelight.setOrigin(0, 0);
        this.add(phonelight);

        // phonebutton
        const phonebutton = scene.add.image(-1, 39, "main", "phone/phonebutton");
        this.add(phonebutton);

        // phonebutton_1
        const phonebutton_1 = scene.add.image(-1, 122, "main", "phone/phonebutton");
        this.add(phonebutton_1);

        // tools
        const tools = scene.add.rectangle(45, -143, 34, 40);
        tools.alpha = 1e-8;
        tools.isFilled = true;
        this.add(tools);

        // text_1
        const text_1 = scene.add.text(-1, 125, "", {});
        text_1.setOrigin(0.5, 0.5);
        text_1.text = "Visit HQ";
        text_1.setStyle({ "align": "center", "fixedWidth":200,"fixedHeight":40,"fontFamily": "Arial Narrow", "fontSize": "32px", "fontStyle": "bold" });
        this.add(text_1);

        // text
        const text = scene.add.text(-1, 41, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "Teleport";
        text.setStyle({ "align": "center", "fixedWidth":200,"fixedHeight":40,"fontFamily": "Arial Narrow", "fontSize": "32px", "fontStyle": "bold" });
        this.add(text);

        // roomtext
        const roomtext = scene.add.text(-1, -52, "", {});
        roomtext.scaleY = 1.4;
        roomtext.setOrigin(0.5, 0.5);
        roomtext.text = "ROOOOM";
        roomtext.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":220,"fixedHeight":42,"fontFamily": "CPLCD", "fontSize": "38px", "stroke": "#000000ff" });
        this.add(roomtext);

        // wheeldowner
        const wheeldowner = scene.add.image(-159, 30, "main", "phone/wheeldowner");
        this.add(wheeldowner);

        // wheeluper
        const wheeluper = scene.add.image(-159, -72, "main", "phone/wheeluper");
        this.add(wheeluper);

        // lists
        const items = [];

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = card_bg;

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "phone/phone_x";
        x_buttonButton.callback = () => this.close();
        x_buttonButton.activeFrame = true;

        // phonelight (components)
        const phonelightAnimation = new Animation(phonelight);
        phonelightAnimation.key = "phone/phonelight";
        phonelightAnimation.end = 648;

        // phonebutton (components)
        const phonebuttonButton = new Button(phonebutton);
        phonebuttonButton.spriteName = "phone/phonebutton";
        phonebuttonButton.callback = () => this.teleport();
        phonebuttonButton.activeFrame = true;

        // phonebutton_1 (components)
        const phonebutton_1Button = new Button(phonebutton_1);
        phonebutton_1Button.spriteName = "phone/phonebutton";
        phonebutton_1Button.callback = () => this.HQTeleport(803);
        phonebutton_1Button.activeFrame = true;

        // tools (components)
        const toolsSimpleButton = new SimpleButton(tools);
        toolsSimpleButton.callback = () => this.toolClick();

        // wheeldowner (components)
        const wheeldownerButton = new Button(wheeldowner);
        wheeldownerButton.spriteName = "phone/wheeldowner";
        wheeldownerButton.callback = () => this.wheelDown();

        // wheeluper (components)
        const wheeluperButton = new Button(wheeluper);
        wheeluperButton.spriteName = "phone/wheeluper";
        wheeluperButton.callback = () => this.wheelUp();

        this.wheel = wheel;
        this.comb = comb;
        this.combtwo = combtwo;
        this.combthree = combthree;
        this.roomtext = roomtext;
        this.items = items;

        /* START-USER-CTR-CODE */
        this._dontHideInputs = true
        this.roomids = 0
        this.toolSelect = 0
        this.combSelect = 0
        //this.rooms = ["THE TOWN","WELCOME ROOM","TOUR HQ","THE LOOKOUT","COFFEE SHOP","BOOK ROOM","DANCE CLUB","THE LOUNGE","RECYCLING","GIFT SHOP","SKI VILLAGE","SPORT SHOP","SKI LODGE","LODGE ATTIC","ICE POND","SKI HILL","THE PLAZA","PET SHOP","COURTYARD","THE DOJO","PIZZA PARLOR","THE STAGE","THE BEACH","LIGHTHOUSE","BEACON","THE DOCK","SNOW FORTS","THE STADIUM","HQ","BOILER ROOM","ICE BERG","POOL","MINE SHACK","THE MINE","THE FOREST","THE COVE","CAVE MINE"]
        //this.roomids = [100,1,2,3,110,111,120,121,122,130,200,210,220,221,4,230,300,310,319,320,330,340,400,410,411,800,801,802,803,804,805,806,807,808,809,810,813]
        this.rooms = ["THE TOWN","WELCOME ROOM","TOUR HQ","THE LOOKOUT","COFFEE SHOP","BOOK ROOM","DANCE CLUB","THE LOUNGE","RECYCLING","GIFT SHOP","SKI VILLAGE","SKI LODGE","LODGE ATTIC","ICE POND","SKI HILL","THE PLAZA","PET SHOP","COURTYARD","THE DOJO","PIZZA PARLOR","THE STAGE","THE BEACH","LIGHTHOUSE","BEACON","THE DOCK","SNOW FORTS","THE STADIUM","HQ","BOILER ROOM","ICE BERG","POOL","MINE SHACK","THE MINE","THE FOREST","THE COVE","CAVE MINE"]
        this.roomids = [100,1,2,3,110,111,120,121,122,130,200,220,221,4,230,300,310,319,320,330,340,400,410,411,800,801,802,803,804,805,806,807,808,809,810,813]
        this.roomtext.text = this.rooms[this.toolSelect]
        this.teleportBroken = false
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()

        if(this.teleportBroken) {
            this.roomtext.text = 'NO SIGNAL'
        } else {
            this.roomtext.text = this.rooms[this.toolSelect]
        }
    }

    HQTeleport(id){
        if (this.teleportBroken) {
            return
        }

        let room = this.crumbs.scenes.rooms[id]
        if (this.world.room.key == room.key) {
            return
        }

        this.world.client.sendJoinRoom(id, room.key, room.x, room.y, 80)
    }
    teleport(){
        if (this.teleportBroken) {
            return
        }

        let room = this.crumbs.scenes.rooms[this.roomids[this.toolSelect]]

        if (this.world.room.key == room.key) {
            return
        }

        this.world.client.sendJoinRoom(this.roomids[this.toolSelect], room.key, room.x, room.y, 80)
    }
    wheelUp(){
        this.wheel.play('wheelup')
        this.toolSelect += 1
        if (this.toolSelect == 37){
            this.toolSelect = 0
        }
        if (this.teleportBroken) return
        this.roomtext.text = this.rooms[this.toolSelect]
    }
    wheelDown(){
        this.wheel.play('wheeldown')
        this.toolSelect -= 1
        if (this.toolSelect < 0){
            this.toolSelect = 36
        }
        if (this.teleportBroken) return
        this.roomtext.text = this.rooms[this.toolSelect]
    }
    toolClick(){
        switch(this.combSelect){
            case 0:
                this.combthree.visible = false
                this.comb.visible = true
                this.comb.play('comb')
                this.combSelect = 1
                break;
            case 1:
                this.combthree.visible = false
                this.comb.visible = true
                this.comb.play('combtwo')
                this.combSelect = 2
                break;
            case 2:
                this.comb.visible = false
                this.combtwo.visible = true
                this.combtwo.play('wrench')
                this.combSelect = 3
                break;
            case 3:
                this.comb.visible = false
                this.combtwo.visible = true
                this.combtwo.play('wrenchtwo')
                this.combSelect = 4
                break;
            case 4:
                this.combthree.visible = true
                this.combtwo.visible = false
                this.combthree.play('scissors')
                this.combSelect = 5
                break;
            case 5:
                this.combthree.visible = true
                this.combtwo.visible = false
                this.combthree.play('scissorstwo')
                this.combSelect = 0
                break;
        }

    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
