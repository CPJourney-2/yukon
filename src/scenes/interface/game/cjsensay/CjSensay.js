import BaseContainer from '@scenes/base/BaseContainer'
import { Animation, Button, MoveTo, SimpleButton, Interactive } from '@components/components'

// You can write more code here
export const preload = {
    key: 'cjsensay-pack',
    url: 'assets/media/games/card/cjsensay-pack.json',
    loadString: ['loading', 'Sensei']
}
/* START OF COMPILED CODE */

export default class CjSensay extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 550, y ?? 376);

        /** @type {Phaser.GameObjects.Sprite} */
        this.sensay;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.menuBg;
        /** @type {Phaser.GameObjects.Container} */
        this.menuItemTextContainer;
        /** @type {Phaser.GameObjects.Container} */
        this.btnIconContainer;
        /** @type {Phaser.GameObjects.Image} */
        this.speech;
        /** @type {Phaser.GameObjects.Text} */
        this.bubbleText;
        /** @type {Phaser.GameObjects.Container} */
        this.speechBubble;
        /** @type {Phaser.GameObjects.Text[]} */
        this.menuItems;
        /** @type {Phaser.GameObjects.Rectangle[]} */
        this.menuButtons;


        // rectangle_1
        const rectangle_1 = scene.add.rectangle(0, 0, 3000, 1500);
        rectangle_1.isFilled = true;
        rectangle_1.fillAlpha = 0;
        this.add(rectangle_1);

        // bg
        const bg = scene.add.image(101, 180, "levelup", "bg");
        this.add(bg);

        // sensay
        const sensay = scene.add.sprite(-283, 95, "levelup", "sensay/sensay0001");
        this.add(sensay);

        // text_2
        const text_2 = scene.add.text(-614, -613, "", {});
        text_2.text = "menu text x is 79 when not next to btn icon\n119 when it is\n61 per menu item\nE3DABB is menu item color";
        text_2.setStyle({ "fontSize": "40px", "stroke": "#000", "strokeThickness":10});
        this.add(text_2);

        // menu
        const menu = scene.add.container(79, 207);
        this.add(menu);

        // menuBg
        const menuBg = scene.add.nineslice(0, 0, "sensay-menu", "menu", 850, 327, 57, 60, 55, 56);
        menuBg.setOrigin(0, 0);
        menu.add(menuBg);

        // menuButtonContainer
        const menuButtonContainer = scene.add.container(50, 41);
        menu.add(menuButtonContainer);

        // menuButton4
        const menuButton4 = scene.add.rectangle(0, 183, 750, 61);
        menuButton4.setOrigin(0, 0);
        menuButton4.fillColor = 14932667;
        menuButtonContainer.add(menuButton4);

        // menuButton3
        const menuButton3 = scene.add.rectangle(0, 122, 750, 61);
        menuButton3.setOrigin(0, 0);
        menuButton3.fillColor = 14932667;
        menuButtonContainer.add(menuButton3);

        // menuButton2
        const menuButton2 = scene.add.rectangle(0, 61, 750, 61);
        menuButton2.setOrigin(0, 0);
        menuButton2.fillColor = 14932667;
        menuButtonContainer.add(menuButton2);

        // menuButton1
        const menuButton1 = scene.add.rectangle(0, 0, 750, 61);
        menuButton1.setOrigin(0, 0);
        menuButton1.fillColor = 14932667;
        menuButtonContainer.add(menuButton1);

        // menuItemTextContainer
        const menuItemTextContainer = scene.add.container(119, 57);
        menu.add(menuItemTextContainer);

        // menuItem4
        const menuItem4 = scene.add.text(0, 184, "", {});
        menuItem4.text = "This is a menu item!";
        menuItem4.setStyle({ "color": "#000", "fontFamily": "CCComicrazy", "fontSize": "26px" });
        menuItemTextContainer.add(menuItem4);

        // menuItem3
        const menuItem3 = scene.add.text(0, 123, "", {});
        menuItem3.text = "This is a menu item!";
        menuItem3.setStyle({ "color": "#000", "fontFamily": "CCComicrazy", "fontSize": "26px" });
        menuItemTextContainer.add(menuItem3);

        // menuItem2
        const menuItem2 = scene.add.text(0, 62, "", {});
        menuItem2.text = "This is a menu item!";
        menuItem2.setStyle({ "color": "#000", "fontFamily": "CCComicrazy", "fontSize": "26px" });
        menuItemTextContainer.add(menuItem2);

        // menuItem1
        const menuItem1 = scene.add.text(0, 0, "", {});
        menuItem1.text = "This is a menu item!";
        menuItem1.setStyle({ "color": "#000", "fontFamily": "CCComicrazy", "fontSize": "26px" });
        menuItemTextContainer.add(menuItem1);

        // btnIconContainer
        const btnIconContainer = scene.add.container(81, 72);
        menu.add(btnIconContainer);

        // beltIcon
        const beltIcon = scene.add.image(0, 0, "sensay-menu", "beltIcon");
        beltIcon.scaleX = 0.9;
        beltIcon.scaleY = 0.9;
        beltIcon.visible = false;
        btnIconContainer.add(beltIcon);

        // instructionsIcon
        const instructionsIcon = scene.add.image(0, 123, "sensay-menu", "instructionsIcon");
        instructionsIcon.scaleX = 0.9;
        instructionsIcon.scaleY = 0.9;
        instructionsIcon.visible = false;
        btnIconContainer.add(instructionsIcon);

        // senseiIcon
        const senseiIcon = scene.add.image(0, 0, "sensay-menu", "senseiIcon");
        senseiIcon.scaleX = 0.9;
        senseiIcon.scaleY = 0.9;
        btnIconContainer.add(senseiIcon);

        // closebtn
        const closebtn = scene.add.image(927, -332, "stampbook-inside", "closebtn");
        this.add(closebtn);

        // speechBubble
        const speechBubble = scene.add.container(20, -228);
        speechBubble.visible = false;
        this.add(speechBubble);

        // speech
        const speech = scene.add.image(357, 113, "levelup", "speech");
        speechBubble.add(speech);

        // bubbleText
        const bubbleText = scene.add.text(0, 0, "", {});
        bubbleText.text = "This one grasshopper\nI saw her beat Sensei quick\nNot a skill issue";
        bubbleText.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":800,"fixedHeight":150,"fontFamily": "CCComicrazy", "fontSize": "35px" });
        speechBubble.add(bubbleText);

        // lists
        const menuItems = [menuItem1, menuItem2, menuItem3, menuItem4];
        const menuButtons = [menuButton1, menuButton2, menuButton3, menuButton4];

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // sensay (components)
        const sensayAnimation = new Animation(sensay);
        sensayAnimation.end = 103;
        sensayAnimation.autoPlay = false;

        // menuButton4 (components)
        const menuButton4SimpleButton = new SimpleButton(menuButton4);
        menuButton4SimpleButton.hoverCallback = () => this.onMenuHover(3);
        menuButton4SimpleButton.hoverOutCallback = () => this.onMenuHoverOut(3);
        menuButton4SimpleButton.callback = () => this.onMenuClick(3);

        // menuButton3 (components)
        const menuButton3SimpleButton = new SimpleButton(menuButton3);
        menuButton3SimpleButton.hoverCallback = () => this.onMenuHover(2);
        menuButton3SimpleButton.hoverOutCallback = () => this.onMenuHoverOut(2);
        menuButton3SimpleButton.callback = () => this.onMenuClick(2);

        // menuButton2 (components)
        const menuButton2SimpleButton = new SimpleButton(menuButton2);
        menuButton2SimpleButton.hoverCallback = () => this.onMenuHover(1);
        menuButton2SimpleButton.hoverOutCallback = () => this.onMenuHoverOut(1);
        menuButton2SimpleButton.callback = () => this.onMenuClick(1);

        // menuButton1 (components)
        const menuButton1SimpleButton = new SimpleButton(menuButton1);
        menuButton1SimpleButton.hoverCallback = () => this.onMenuHover(0);
        menuButton1SimpleButton.hoverOutCallback = () => this.onMenuHoverOut(0);
        menuButton1SimpleButton.callback = () => this.onMenuClick(0);

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.callback = () => this.interface.destroyWidget(this);
        closebtnButton.activeFrame = true;
        closebtnButton.pixelPerfect = true;

        this.sensay = sensay;
        this.menuBg = menuBg;
        this.menuItemTextContainer = menuItemTextContainer;
        this.btnIconContainer = btnIconContainer;
        this.speech = speech;
        this.bubbleText = bubbleText;
        this.speechBubble = speechBubble;
        this.menuItems = menuItems;
        this.menuButtons = menuButtons;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    /* misc */
    show() {
        super.show()

        /*this.populateTextFields(
            ["Earn your belts", "Challenge Sensei", "Instructions"],
            [() => this.onEarn(), () => this.onChallenge(), () => this.onInstructions()],
            true,
            ["Do you wish to play\nAnd compete with another\nStudent, grasshopper?", "To become ninja,\nYou must challenge me and win.\nBut bring your black belt.", "Do you wish to hear\nThe instructions of the game\nAgain, grasshopper?"]
        )*/



        this.populateTextFields(
            ["Challenge Sensei"],
            [() => this.onChallenge()],
            true,
            ["To become ninja,\nYou must challenge me and win.\nBut bring your black belt."]
        )
    }

    populateTextFields(menuTexts, callbacks, showButtons, senseiDialogs = null) {
        if(menuTexts.length != callbacks.length) console.warn("Sensei menuTexts != callbacks - this is a programming error, please report it as a bug")

        this.btnIconContainer.visible = showButtons
        this.menuItemTextContainer.x = showButtons ? 119 : 79

        for(let i = 0; i < this.menuItems.length; i++) {
            this.menuItems[i].visible = (menuTexts.length >= i + 1)
            this.menuButtons[i].visible = (menuTexts.length >= i + 1)

            this.menuItems[i].text = menuTexts[i]
        }

        this.callbacks = callbacks

        this.menuBg.height = 83 + (menuTexts.length * 61)
        this.senseiDialogs = senseiDialogs
    }

    onMenuHover(idx) {
        this.menuButtons[idx].isFilled = true

        if(this.senseiDialogs) {
            this.speechBubble.visible = true
            this.bubbleText.text = this.senseiDialogs[idx]
            this.sensay.__Animation.play()
        }
    }

    onMenuHoverOut(idx) {
        this.menuButtons[idx].isFilled = false
        if(this.senseiDialogs) {
            this.speechBubble.visible = false    
            this.sensay.__Animation.stop()
        }
    }

    onMenuClick(idx) {
        this.callbacks[idx]()
    }

    /* pagina inicial */
    onChallenge() {
        this.world.client.sendJoinRoom(998, '')
    }

    onEarn() {
        console.log("onEarn")
    }

    onInstructions() {
        console.log("onInstructions")
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
