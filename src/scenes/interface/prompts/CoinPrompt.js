import BaseContainer from '@scenes/base/BaseContainer'

import { Interactive, NineSlice, Button } from '@components/components'

import SingleButton from './buttons/SingleButton'
import StampListView from '@scenes/interface/game/stampbook/other/StampListView'


/* START OF COMPILED CODE */

export default class CoinPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg_1;
        /** @type {Phaser.GameObjects.Text} */
        this.stampText;
        /** @type {Phaser.GameObjects.Text} */
        this.coinText;
        /** @type {Phaser.GameObjects.Image} */
        this.prompt_coin;
        /** @type {Phaser.GameObjects.Text} */
        this.x2large;
        /** @type {Phaser.GameObjects.Image} */
        this.progress;
        /** @type {Phaser.GameObjects.Text} */
        this.roomText;
        /** @type {Phaser.GameObjects.Text} */
        this.totalCoins;
        /** @type {Phaser.GameObjects.Text} */
        this.totalStamps;
        /** @type {Phaser.GameObjects.Text} */
        this.youveEarned;
        /** @type {Phaser.GameObjects.Text} */
        this.percentageText;
        /** @type {Phaser.GameObjects.Container} */
        this.howToBtn;
        /** @type {StampListView} */
        this.stampListView;
        /** @type {Phaser.GameObjects.Text} */
        this.congratulationsText;
        /** @type {Phaser.GameObjects.Container} */
        this.largeContainer;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.bgSmall;
        /** @type {Phaser.GameObjects.Text} */
        this.coinTextSmall;
        /** @type {Phaser.GameObjects.Image} */
        this.prompt_coinSmall;
        /** @type {Phaser.GameObjects.Text} */
        this.x2small;
        /** @type {Phaser.GameObjects.Text} */
        this.totalCoinsSmall;
        /** @type {Phaser.GameObjects.Text} */
        this.youveEarnedSmall;
        /** @type {Phaser.GameObjects.Text} */
        this.roomTextSmall;
        /** @type {Phaser.GameObjects.Container} */
        this.smallContainer;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg;
        /** @type {Phaser.GameObjects.Container} */
        this.howToEarn;


        this.visible = false;

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // largeContainer
        const largeContainer = scene.add.container(-264, -341);
        this.add(largeContainer);

        // bg_1
        const bg_1 = scene.add.nineslice(273, 312, "prompt", "window", 720, 750, 44, 39, 40, 41);
        largeContainer.add(bg_1);

        // stampText
        const stampText = scene.add.text(375, 313, "", {});
        stampText.setOrigin(0.5, 0.5);
        stampText.text = "0 of 25";
        stampText.setStyle({ "fixedWidth":628,"fixedHeight":136,"fontFamily": "Burbank Small Black", "fontSize": "40px", "shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#003399", "shadow.fill":true});
        largeContainer.add(stampText);

        // coinText
        const coinText = scene.add.text(378, 174, "", {});
        coinText.setOrigin(0.5, 0.5);
        coinText.text = "88888888 coins";
        coinText.setStyle({ "fixedWidth":628,"fixedHeight":136,"fontFamily": "Burbank Small Black", "fontSize": "40px", "shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#003399", "shadow.fill":true});
        largeContainer.add(coinText);

        // prompt_coin
        const prompt_coin = scene.add.image(0, 134, "main-stampcoins", "coins");
        largeContainer.add(prompt_coin);

        // x2large
        const x2large = scene.add.text(21, 162, "", {});
        x2large.setOrigin(0.5, 0.5);
        x2large.visible = false;
        x2large.text = "x2";
        x2large.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold", "stroke": "#643200", "strokeThickness":8});
        largeContainer.add(x2large);

        // stampIcon
        const stampIcon = scene.add.image(5, 274, "main-stampcoins", "stampIcon");
        largeContainer.add(stampIcon);

        // progress
        const progress = scene.add.image(265, 375, "main-stampcoins", "progress0100");
        largeContainer.add(progress);

        // roomText
        const roomText = scene.add.text(282, 54, "", {});
        roomText.setOrigin(0.5, 0.5);
        roomText.text = "Aqua Grabber";
        roomText.setStyle({ "align": "center", "fixedWidth":628,"fixedHeight":136,"fontFamily": "Burbank Small Black", "fontSize": "50px", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#003399", "shadow.fill":true});
        largeContainer.add(roomText);

        // totalCoins
        const totalCoins = scene.add.text(379, 222, "", {});
        totalCoins.setOrigin(0.5, 0.5);
        totalCoins.text = "Your total coins: 888 888 888";
        totalCoins.setStyle({ "fixedWidth":628,"fixedHeight":136,"fontFamily": "Burbank Small", "fontSize": "28px", "shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#003399" });
        largeContainer.add(totalCoins);

        // totalStamps
        const totalStamps = scene.add.text(379, 367, "", {});
        totalStamps.setOrigin(0.5, 0.5);
        totalStamps.text = "Aqua Grabber stamps";
        totalStamps.setStyle({ "fixedWidth":628,"fixedHeight":136,"fontFamily": "Burbank Small", "fontSize": "28px", "shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#003399" });
        largeContainer.add(totalStamps);

        // coinreference0004
        const coinreference0004 = scene.add.image(264, 341, "coinreference0004");
        coinreference0004.visible = false;
        coinreference0004.alpha = 0.5;
        coinreference0004.alphaTopLeft = 0.5;
        coinreference0004.alphaTopRight = 0.5;
        coinreference0004.alphaBottomLeft = 0.5;
        coinreference0004.alphaBottomRight = 0.5;
        largeContainer.add(coinreference0004);

        // closebtn
        const closebtn = scene.add.image(567, 0, "main", "blue-button");
        largeContainer.add(closebtn);

        // blue_x
        const blue_x = scene.add.image(567, -2, "main", "blue-x");
        largeContainer.add(blue_x);

        // youveEarned
        const youveEarned = scene.add.text(281, 114, "", {});
        youveEarned.setOrigin(0.5, 0.5);
        youveEarned.text = "You've earned:";
        youveEarned.setStyle({ "align": "center", "fixedWidth":628,"fixedHeight":136,"fontFamily": "Burbank Small", "fontSize": "28px", "shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#003399" });
        largeContainer.add(youveEarned);

        // percentageText
        const percentageText = scene.add.text(414, 356, "", {});
        percentageText.text = "100%";
        percentageText.setStyle({ "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        largeContainer.add(percentageText);

        // howToBtn
        const howToBtn = scene.add.container(240, 519);
        howToBtn.visible = false;
        largeContainer.add(howToBtn);

        // earnbtn
        const earnbtn = scene.add.image(28, 1, "main-stampcoins", "earnbtn");
        howToBtn.add(earnbtn);

        // earnbtncontent
        const earnbtncontent = scene.add.image(0, 0, "main-stampcoins", "earnbtncontent");
        howToBtn.add(earnbtncontent);

        // stampListView
        const stampListView = new StampListView(scene, -15, 437);
        largeContainer.add(stampListView);

        // congratulationsText
        const congratulationsText = scene.add.text(-39, 552, "", {});
        congratulationsText.text = "Congratulations, all Aqua Grabber stamps earned. Double coin bonus!";
        congratulationsText.setStyle({ "fixedWidth":620,"fontFamily": "Burbank Small", "fontSize": "32px" });
        congratulationsText.setWordWrapWidth(620);
        largeContainer.add(congratulationsText);

        // smallContainer
        const smallContainer = scene.add.container(-264, -341);
        smallContainer.visible = false;
        this.add(smallContainer);

        // bgSmall
        const bgSmall = scene.add.nineslice(269, 343, "prompt", "window", 740, 320, 44, 39, 40, 41);
        smallContainer.add(bgSmall);

        // coinTextSmall
        const coinTextSmall = scene.add.text(378, 435, "", {});
        coinTextSmall.setOrigin(0.5, 0.5);
        coinTextSmall.text = "88888888 coins";
        coinTextSmall.setStyle({ "fixedWidth":628,"fixedHeight":136,"fontFamily": "Burbank Small Black", "fontSize": "40px", "shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#003399", "shadow.fill":true});
        smallContainer.add(coinTextSmall);

        // prompt_coinSmall
        const prompt_coinSmall = scene.add.image(0, 395, "main-stampcoins", "coins");
        smallContainer.add(prompt_coinSmall);

        // x2small
        const x2small = scene.add.text(23, 421, "", {});
        x2small.setOrigin(0.5, 0.5);
        x2small.visible = false;
        x2small.text = "x2";
        x2small.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold", "stroke": "#643200", "strokeThickness":8});
        smallContainer.add(x2small);

        // totalCoinsSmall
        const totalCoinsSmall = scene.add.text(379, 483, "", {});
        totalCoinsSmall.setOrigin(0.5, 0.5);
        totalCoinsSmall.text = "Your total coins: 888 888 888";
        totalCoinsSmall.setStyle({ "fixedWidth":628,"fixedHeight":136,"fontFamily": "Burbank Small", "fontSize": "28px", "shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#003399" });
        smallContainer.add(totalCoinsSmall);

        // youveEarnedSmall
        const youveEarnedSmall = scene.add.text(281, 363, "", {});
        youveEarnedSmall.setOrigin(0.5, 0.5);
        youveEarnedSmall.text = "You've earned:";
        youveEarnedSmall.setStyle({ "align": "center", "fixedWidth":628,"fixedHeight":136,"fontFamily": "Burbank Small", "fontSize": "28px", "shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#003399" });
        smallContainer.add(youveEarnedSmall);

        // roomTextSmall
        const roomTextSmall = scene.add.text(282, 303, "", {});
        roomTextSmall.setOrigin(0.5, 0.5);
        roomTextSmall.text = "Aqua Grabber";
        roomTextSmall.setStyle({ "align": "center", "fixedWidth":628,"fixedHeight":136,"fontFamily": "Burbank Small Black", "fontSize": "50px", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#003399", "shadow.fill":true});
        smallContainer.add(roomTextSmall);

        // closebtn_2
        const closebtn_2 = scene.add.image(582, 239, "main", "blue-button");
        smallContainer.add(closebtn_2);

        // blue_x_1
        const blue_x_1 = scene.add.image(582, 237, "main", "blue-x");
        smallContainer.add(blue_x_1);

        // howToEarn
        const howToEarn = scene.add.container(-263, -333);
        howToEarn.visible = false;
        this.add(howToEarn);

        // bg
        const bg = scene.add.nineslice(272, 304, "prompt", "window", 720, 750, 44, 39, 40, 41);
        howToEarn.add(bg);

        // earnStamps
        const earnStamps = scene.add.image(297, 299, "main-stampcoins", "earnStamps");
        howToEarn.add(earnStamps);

        // closebtn_howto
        const closebtn_howto = scene.add.image(563, 0, "main", "blue-button");
        howToEarn.add(closebtn_howto);

        // blue_x_how2
        const blue_x_how2 = scene.add.image(563, -2, "main", "blue-x");
        howToEarn.add(blue_x_how2);

        // text_1
        const text_1 = scene.add.text(-3, 86, "", {});
        text_1.text = "Complete special tasks in games,\nat parties, and around Club Penguin.\nClick  (s)  on your player card\nto access your stamp book\nand learn more.";
        text_1.setStyle({ "fontFamily": "Burbank Small", "fontSize": "28px" });
        howToEarn.add(text_1);

        // stampIcon_1
        const stampIcon_1 = scene.add.image(92, 173, "main-stampcoins", "stampIcon");
        stampIcon_1.scaleX = 0.6;
        stampIcon_1.scaleY = 0.6;
        howToEarn.add(stampIcon_1);

        // block (components)
        new Interactive(block);

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.spriteName = "blue-button";
        closebtnButton.callback = () => {this.callback()};
        closebtnButton.activeFrame = true;

        // earnbtn (components)
        const earnbtnButton = new Button(earnbtn);
        earnbtnButton.spriteName = "earnbtn";
        earnbtnButton.callback = () => this.toggleHowTo();
        earnbtnButton.activeFrame = true;

        // closebtn_2 (components)
        const closebtn_2Button = new Button(closebtn_2);
        closebtn_2Button.spriteName = "blue-button";
        closebtn_2Button.callback = () => {this.callback()};
        closebtn_2Button.activeFrame = true;

        // closebtn_howto (components)
        const closebtn_howtoButton = new Button(closebtn_howto);
        closebtn_howtoButton.spriteName = "blue-button";
        closebtn_howtoButton.callback = () => this.toggleHowTo();
        closebtn_howtoButton.activeFrame = true;

        this.bg_1 = bg_1;
        this.stampText = stampText;
        this.coinText = coinText;
        this.prompt_coin = prompt_coin;
        this.x2large = x2large;
        this.progress = progress;
        this.roomText = roomText;
        this.totalCoins = totalCoins;
        this.totalStamps = totalStamps;
        this.youveEarned = youveEarned;
        this.percentageText = percentageText;
        this.howToBtn = howToBtn;
        this.stampListView = stampListView;
        this.congratulationsText = congratulationsText;
        this.largeContainer = largeContainer;
        this.bgSmall = bgSmall;
        this.coinTextSmall = coinTextSmall;
        this.prompt_coinSmall = prompt_coinSmall;
        this.x2small = x2small;
        this.totalCoinsSmall = totalCoinsSmall;
        this.youveEarnedSmall = youveEarnedSmall;
        this.roomTextSmall = roomTextSmall;
        this.smallContainer = smallContainer;
        this.bg = bg;
        this.howToEarn = howToEarn;

        /* START-USER-CTR-CODE */
        this.stampListView.parent = this
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(coins, totalStamps, collectedStamps, room, stampList, doubleCoins=false) {
        this.interface.main.events.emit('hide_main_inputs')
        this.visible = true

        let newCoins = this.world.client.coins + coins

        this.roomTextSmall.text = this.roomText.text = this.world.crumbs.strings[room]
        this.totalStamps.text = `${this.roomText.text} stamps`

        this.coinTextSmall.text = this.coinText.text = totalStamps == collectedStamps && totalStamps != 0 ? `${coins/2} x 2 = ${coins} coins` : `${coins} coins`
        this.totalCoinsSmall.text = this.totalCoins.text = `Your total coins: ${newCoins}`

        this.stampText.text = `${collectedStamps} of ${totalStamps}`

        this.percentage = totalStamps == 0 ? 1 : Math.round((collectedStamps/totalStamps) * 100) + 1
        this.percentageText.text = `${this.percentage - 1}%`
        this.percentageText.x = 35 + (this.percentage * 4.5)
        if(this.percentageText.x > 415) {
            this.percentageText.x = 415
            this.percentageText.style.color = "#333333"
        } else {
            this.percentageText.style.color = "#FFFFFF"
        }
        this.percentageText.setStyle(this.percentageText.style)

        this.progress.setFrame(`progress${String(this.percentage).padStart(4, '0')}`)

        let useSmallContainer = (totalStamps <= 0)
        this.smallContainer.visible = useSmallContainer
        this.largeContainer.visible = !useSmallContainer

        let allStampsCollected = totalStamps == collectedStamps
        this.prompt_coin.setFrame(allStampsCollected ? "coinsx2" : "coins")

        this.stampListView.resetContent(stampList)

        this.stampListView.y = allStampsCollected ? 437 : 522
        this.congratulationsText.text = `Congratulations, all ${this.roomTextSmall.text} stamps earned. Double coin bonus!`
        this.progress.visible = !(this.congratulationsText.visible = allStampsCollected)

        this.stampListView.visible = !(this.howToBtn.visible = (collectedStamps == 0))

        this.prompt_coin.setFrame(doubleCoins ? "coinsx2" : "coins")
    }

    toggleHowTo() {
        this.largeContainer.visible = !(this.howToEarn.visible = !this.howToEarn.visible)
    }

    callback() {
        if (this.ruffle.container.visible) {
            this.ruffle.close()
        }

        this.world.client.sendJoinLastRoom()

        this.visible = false

        this.interface.main.events.emit('show_main_inputs')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
