import DialogueWidget from '../DialogueWidget'

import { Button, Animation, Interactive } from '@components/components'

import DialogueBubble from '../DialogueBubble'

export const preload = {
    key: [
        'dialogue-common-pack',
        'crimsondialogue-pack'
    ],
    url: [
        'assets/media/interface/game/dialogue/dialogue-common-pack.json',
        'assets/media/interface/game/dialogue/crimson/crimsondialogue-pack.json'
    ],
    loadString: ['loading', 'Captain Crimson']
}

/* START OF COMPILED CODE */

export default class CrimsonDialogue extends DialogueWidget {

    constructor(scene, x, y) {
        super(scene, x ?? -448.81666998318946, y ?? 354.27837245991276);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.softblock;
        /** @type {Phaser.GameObjects.Sprite} */
        this.crimsonBeak;
        /** @type {DialogueBubble} */
        this.bubble;
        /** @type {Phaser.GameObjects.Text} */
        this.pack1Coins;
        /** @type {Phaser.GameObjects.Text} */
        this.pack2Coins;
        /** @type {Phaser.GameObjects.Text} */
        this.pack3Coins;
        /** @type {Phaser.GameObjects.Text} */
        this.pack1Gems;
        /** @type {Phaser.GameObjects.Text} */
        this.pack2Gems;
        /** @type {Phaser.GameObjects.Text} */
        this.pack3Gems;
        /** @type {Phaser.GameObjects.Container} */
        this.gemPurchase;
        /** @type {Phaser.GameObjects.Container} */
        this.closeBtn;
        /** @type {Array<any>} */
        this.pages;
        /** @type {Array<any>} */
        this.arrows;
        /** @type {Array<DialogueBubble|Phaser.GameObjects.Container>} */
        this.everything;


        // softblock
        const softblock = scene.add.rectangle(1205, 126, 1520, 960);
        softblock.isFilled = true;
        softblock.fillColor = 0;
        softblock.fillAlpha = 0.2;
        this.add(softblock);

        // crimson
        const crimson = scene.add.container(490, -236);
        crimson.scaleX = 1.05;
        crimson.scaleY = 1.05;
        this.add(crimson);

        // crimsonBody
        const crimsonBody = scene.add.image(231, 571, "crimsondialogue-pack", "CrimsonBody");
        crimson.add(crimsonBody);

        // crimsonEyes
        const crimsonEyes = scene.add.sprite(184, 531, "crimsondialogue-pack", "crimsonEyes0001");
        crimsonEyes.scaleX = 0.5;
        crimsonEyes.scaleY = 0.5;
        crimson.add(crimsonEyes);

        // crimsonEyepatch_1
        const crimsonEyepatch_1 = scene.add.image(190, 384, "crimsondialogue-pack", "CrimsonEyepatch");
        crimsonEyepatch_1.scaleX = 0.5;
        crimsonEyepatch_1.scaleY = 0.5;
        crimson.add(crimsonEyepatch_1);

        // crimsonBeak
        const crimsonBeak = scene.add.sprite(224, 441, "crimsondialogue-pack", "CrimsonBeak0001");
        crimsonBeak.scaleX = 0.6;
        crimsonBeak.scaleY = 0.6;
        crimson.add(crimsonBeak);

        // crimsonHat_1
        const crimsonHat_1 = scene.add.image(183, 310, "crimsondialogue-pack", "CrimsonHat");
        crimsonHat_1.scaleX = 0.5;
        crimsonHat_1.scaleY = 0.5;
        crimson.add(crimsonHat_1);

        // crimsonBrownNatural
        const crimsonBrownNatural = scene.add.image(192, 361, "crimsondialogue-pack", "CrimsonBrownNatural");
        crimson.add(crimsonBrownNatural);

        // eyepatchShine0054
        const eyepatchShine0054 = scene.add.sprite(177, 378, "crimsondialogue-pack", "eyepatchShine0054");
        crimson.add(eyepatchShine0054);

        // bubble
        const bubble = new DialogueBubble(scene, 894, 428);
        bubble.visible = true;
        this.add(bubble);

        // gemPurchase
        const gemPurchase = scene.add.container(1234, -153);
        gemPurchase.visible = false;
        this.add(gemPurchase);

        // gem_purchase_ui
        const gem_purchase_ui = scene.add.image(229, 256, "voyager2", "gem_purchase_ui");
        gemPurchase.add(gem_purchase_ui);

        // text_1
        const text_1 = scene.add.text(222, 61, "", {});
        text_1.setOrigin(0.5, 0.5);
        text_1.text = "Purchase Gem Packs";
        text_1.setStyle({ "fontFamily": "Burbank Small", "fontSize": "32px", "fontStyle": "bold", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.fill":true});
        gemPurchase.add(text_1);

        // text_2
        const text_2 = scene.add.text(223, 144, "", {});
        text_2.setOrigin(0.5, 0.5);
        text_2.text = "You can only buy one of these packs during a visit. After you buy one pack, you cannot buy any others for this visit.";
        text_2.setStyle({ "align": "center", "fixedWidth":570,"fontFamily": "Burbank Small", "fontSize": "24px", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.fill":true});
        text_2.setWordWrapWidth(570);
        gemPurchase.add(text_2);

        // gem_pack_bg
        const gem_pack_bg = scene.add.image(29, 333, "voyager2", "gem_pack_bg");
        gemPurchase.add(gem_pack_bg);

        // buy_button
        const buy_button = scene.add.image(29, 417, "voyager2", "buy_button");
        buy_button.scaleX = 0.5;
        buy_button.scaleY = 0.5;
        gemPurchase.add(buy_button);

        // gem_pack_bg_1
        const gem_pack_bg_1 = scene.add.image(222, 333, "voyager2", "gem_pack_bg");
        gemPurchase.add(gem_pack_bg_1);

        // buy_button_1
        const buy_button_1 = scene.add.image(222, 417, "voyager2", "buy_button");
        buy_button_1.scaleX = 0.5;
        buy_button_1.scaleY = 0.5;
        gemPurchase.add(buy_button_1);

        // gem_pack_bg_2
        const gem_pack_bg_2 = scene.add.image(420, 333, "voyager2", "gem_pack_bg");
        gemPurchase.add(gem_pack_bg_2);

        // buy_button_2
        const buy_button_2 = scene.add.image(420, 417, "voyager2", "buy_button");
        buy_button_2.scaleX = 0.5;
        buy_button_2.scaleY = 0.5;
        gemPurchase.add(buy_button_2);

        // gem_icon
        const gem_icon = scene.add.image(30, 305, "voyager", "gem_icon");
        gemPurchase.add(gem_icon);

        // gem_icon_1
        const gem_icon_1 = scene.add.image(193, 305, "voyager", "gem_icon");
        gemPurchase.add(gem_icon_1);

        // gem_icon_2
        const gem_icon_2 = scene.add.image(253, 305, "voyager", "gem_icon");
        gemPurchase.add(gem_icon_2);

        // gem_icon_3
        const gem_icon_3 = scene.add.image(451, 291, "voyager", "gem_icon");
        gemPurchase.add(gem_icon_3);

        // gem_icon_4
        const gem_icon_4 = scene.add.image(393, 291, "voyager", "gem_icon");
        gemPurchase.add(gem_icon_4);

        // gem_icon_5
        const gem_icon_5 = scene.add.image(422, 317, "voyager", "gem_icon");
        gemPurchase.add(gem_icon_5);

        // new_coin
        const new_coin = scene.add.image(-13, 417, "voyager2", "new_coin");
        new_coin.scaleX = 0.25;
        new_coin.scaleY = 0.25;
        gemPurchase.add(new_coin);

        // pack1Coins
        const pack1Coins = scene.add.text(49, 416, "", {});
        pack1Coins.setOrigin(0.5, 0.5);
        pack1Coins.text = "10,000";
        pack1Coins.setStyle({ "color": "#966308", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#FBE9C8", "shadow.fill":true});
        gemPurchase.add(pack1Coins);

        // pack2Coins
        const pack2Coins = scene.add.text(240, 417, "", {});
        pack2Coins.setOrigin(0.5, 0.5);
        pack2Coins.text = "10,000";
        pack2Coins.setStyle({ "color": "#966308", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#FBE9C8", "shadow.fill":true});
        gemPurchase.add(pack2Coins);

        // new_coin_1
        const new_coin_1 = scene.add.image(169, 421, "voyager2", "new_coin");
        new_coin_1.scaleX = 0.25;
        new_coin_1.scaleY = 0.25;
        gemPurchase.add(new_coin_1);

        // new_coin_2
        const new_coin_2 = scene.add.image(370, 417, "voyager2", "new_coin");
        new_coin_2.scaleX = 0.25;
        new_coin_2.scaleY = 0.25;
        gemPurchase.add(new_coin_2);

        // pack3Coins
        const pack3Coins = scene.add.text(440, 417, "", {});
        pack3Coins.setOrigin(0.5, 0.5);
        pack3Coins.text = "100,000";
        pack3Coins.setStyle({ "color": "#966308", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#FBE9C8", "shadow.fill":true});
        gemPurchase.add(pack3Coins);

        // pack1Gems
        const pack1Gems = scene.add.text(30, 367, "", {});
        pack1Gems.setOrigin(0.5, 0.5);
        pack1Gems.text = "100";
        pack1Gems.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "24px", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.fill":true});
        pack1Gems.setPadding({"left":5,"right":5});
        gemPurchase.add(pack1Gems);

        // pack2Gems
        const pack2Gems = scene.add.text(226, 367, "", {});
        pack2Gems.setOrigin(0.5, 0.5);
        pack2Gems.text = "500";
        pack2Gems.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "24px", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.fill":true});
        pack2Gems.setPadding({"left":5,"right":5});
        gemPurchase.add(pack2Gems);

        // pack3Gems
        const pack3Gems = scene.add.text(425, 367, "", {});
        pack3Gems.setOrigin(0.5, 0.5);
        pack3Gems.text = "1,000";
        pack3Gems.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "24px", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.fill":true});
        pack3Gems.setPadding({"left":5,"right":5});
        gemPurchase.add(pack3Gems);

        // close_btn
        const close_btn = scene.add.image(507, 0, "main", "grey-button");
        gemPurchase.add(close_btn);

        // grey_x
        const grey_x = scene.add.image(507, -2, "main", "grey-x");
        gemPurchase.add(grey_x);

        // divider
        const divider = scene.add.image(223, 194, "voyager2", "divider");
        gemPurchase.add(divider);

        // closeBtn
        const closeBtn = scene.add.container(1908.0000305175781, -301);
        closeBtn.visible = false;
        this.add(closeBtn);

        // close_btn_1
        const close_btn_1 = scene.add.image(0, 2, "main", "grey-button");
        closeBtn.add(close_btn_1);

        // grey_x_1
        const grey_x_1 = scene.add.image(0, 0, "main", "grey-x");
        closeBtn.add(grey_x_1);

        // lists
        const pages = [];
        const arrows = [];
        const everything = [bubble, crimson, gemPurchase];

        // softblock (components)
        new Interactive(softblock);

        // crimsonEyes (components)
        const crimsonEyesAnimation = new Animation(crimsonEyes);
        crimsonEyesAnimation.key = "crimsonEyes";
        crimsonEyesAnimation.end = 180;

        // crimsonBeak (components)
        const crimsonBeakAnimation = new Animation(crimsonBeak);
        crimsonBeakAnimation.key = "CrimsonBeak";
        crimsonBeakAnimation.end = 180;

        // eyepatchShine0054 (components)
        const eyepatchShine0054Animation = new Animation(eyepatchShine0054);
        eyepatchShine0054Animation.key = "eyepatchShine";
        eyepatchShine0054Animation.start = 54;
        eyepatchShine0054Animation.end = 62;
        eyepatchShine0054Animation.repeatDelay = 5000;
        eyepatchShine0054Animation.showOnStart = true;
        eyepatchShine0054Animation.hideOnComplete = true;

        // buy_button (components)
        const buy_buttonButton = new Button(buy_button);
        buy_buttonButton.spriteName = "buy_button";
        buy_buttonButton.callback = () => this.interface.loadedWidgets['Voyager']?.buyGemPack(1);
        buy_buttonButton.activeFrame = true;

        // buy_button_1 (components)
        const buy_button_1Button = new Button(buy_button_1);
        buy_button_1Button.spriteName = "buy_button";
        buy_button_1Button.callback = () => this.interface.loadedWidgets['Voyager']?.buyGemPack(2);
        buy_button_1Button.activeFrame = true;

        // buy_button_2 (components)
        const buy_button_2Button = new Button(buy_button_2);
        buy_button_2Button.spriteName = "buy_button";
        buy_button_2Button.callback = () => this.interface.loadedWidgets['Voyager']?.buyGemPack(3);
        buy_button_2Button.activeFrame = true;

        // close_btn (components)
        const close_btnButton = new Button(close_btn);
        close_btnButton.callback = () => this.onGemPurchaseClose();
        close_btnButton.activeFrame = true;

        // close_btn_1 (components)
        const close_btn_1Button = new Button(close_btn_1);
        close_btn_1Button.callback = () => this.onClose();
        close_btn_1Button.activeFrame = true;

        this.softblock = softblock;
        this.crimsonBeak = crimsonBeak;
        this.bubble = bubble;
        this.pack1Coins = pack1Coins;
        this.pack2Coins = pack2Coins;
        this.pack3Coins = pack3Coins;
        this.pack1Gems = pack1Gems;
        this.pack2Gems = pack2Gems;
        this.pack3Gems = pack3Gems;
        this.gemPurchase = gemPurchase;
        this.closeBtn = closeBtn;
        this.pages = pages;
        this.arrows = arrows;
        this.everything = everything;

        /* START-USER-CTR-CODE */
        this.options = [
            [ // 0
                {
                    text: "I want to see your special selection.",
                    callback: () => {
                        this.crimsonBeak.__Animation.play();
                        this.showDialogueAtIndex(9);
                    }
                },
                {
                    text: "I want to buy gems.",
                    callback: () => {
                        this.showDialogueAtIndex(10);
                        this.crimsonBeak.__Animation.play();
                    }
                },
                {
                    text: "How can I trade my gems?",
                    callback: () => {
                        this.showDialogueAtIndex(4);
                        this.crimsonBeak.__Animation.play();
                    }
                },
            ],
        ];

        this.dialogue = [
            { // 0
                text: "Ahoy matey! Come see me if you're interested in rare treasures.",
                after: () => {
                    this.close();
                }
            },
            { // 1 - First interaction
                text: "Arrr! Welcome to me ship, The Voyager!",
            },
            { // 2
                text: "I had to dig this whole cave with me bare hands to fit The Voyager, but alas, it is done!",
            },
            { // 3
                text: `I was busy scourin' the seas for rare treasures, and I have brought a special selection just for you${this.world.client.penguin.username_verified ? ', ' + this.world.client.penguin.displayName : ''}.`,
            },
            { // 4
                text: "Ye can get common, uncommon, rare, or if you're really lucky, legendary items from me treasures, but for a special price in gems. Ye coins will not work with a special trader like me.",
            },
            { // 5
                text: "I will let ye buy some gems, but these gems aren't easy to find, so the stocks be expensive and limited. But no problem, apparently ye penguins are rollin' in coins, as if they're given out for free.",
            },
            { // 6
                text: "If ye don't like an item, I will reroll and replace it with another one of me choice, but remember, there be no going back. I hope ye act wisely!",
            },
            { // 7
                text: "I'll be here for when ye are ready to take a look.",
                after: () => {
                    this.showOptionsAtIndex(0);
                    this.crimsonBeak.__Animation.stop();
                    this.world.client.setInteractionAsSeen('voyager_intro');
                }
            },
            { // 8
                text: "Welcome aboard The Voyager! What are ye looking for?",
                after: () => {
                    this.showOptionsAtIndex(0);
                    this.crimsonBeak.__Animation.stop();
                }
            },
            { // 9
                text: "Sure thing, I hope ye has those gems ready!",
                after: () => {
                    this.close();
                    this.crimsonBeak.__Animation.stop();
                    this.interface.loadedWidgets['Voyager']?.showShop();
                }
            },
            { // 10
                text: "Aaah I see. I guess I could use some coins while I'm on this island.",
                after: () => {
                    this.crimsonBeak.__Animation.stop();
                    this.interface.loadedWidgets.Voyager?.gemPacks.forEach((pack, i) => {
                        this[`pack${i + 1}Coins`].text = _getFormattedAmountString(pack.cost);
                        this[`pack${i + 1}Gems`].text = _getFormattedAmountString(pack.gems);
                    });
                    this.gemPurchase.visible = true;
                    this.bubble.visible = false;
                }
            },
        ];
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(i) {
        super.show(i)
        this.crimsonBeak.__Animation.play()
    }

    onClose() {
        this.interface.loadedWidgets['Voyager']?.close();
        this.close();
    }

    showOptionsAtIndex(i) {
        if (i === 0) {
            this.closeBtn.visible = true;
        } else {
            this.closeBtn.visible = false;
        }

        super.showOptionsAtIndex(i);
    }

    showDialogueAtIndex(i) {
        this.closeBtn.visible = false;
        this.bubble.visible = true;
        super.showDialogueAtIndex(i);
    }

    softClose() {
        for(let gameobject of this.everything) gameobject.visible = false;
        this.softblock.visible = true;
    }

    onGemPurchaseClose() {
        this.gemPurchase.visible = false;
        this.bubble.visible = true;
        this.showOptionsAtIndex(0);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

function _getFormattedAmountString(amount) {
    return Number(amount).toLocaleString();
}
