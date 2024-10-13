import BaseContainer from '@scenes/base/BaseContainer'
import { Animation, Interactive, Button, Nineslice } from '@components/components'
import TextInput from '@engine/interface/text/TextInput'
import UnlockSlot from './UnlockSlot'
import Spinner from '@scenes/interface/menus/load/Spinner'
export const preload = {
    key: 'unlock-pack',
    url: 'assets/media/interface/game/unlock/unlock-pack.json',
    loadString: ['loading', 'Unlock Codes'],
};

/* START OF COMPILED CODE */

export default class UnlockCode extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Container} */
        this.code_view;
        /** @type {Spinner} */
        this.spinner;
        /** @type {Phaser.GameObjects.Container} */
        this.choose_view;
        /** @type {Phaser.GameObjects.Sprite} */
        this.particles;
        /** @type {Phaser.GameObjects.Container} */
        this.slots;
        /** @type {Phaser.GameObjects.Container} */
        this.congrats_view;


        // bg
        const bg = scene.add.image(-759, -479, "load", "bg");
        bg.setOrigin(0, 0);
        this.add(bg);

        // radial
        const radial = scene.add.image(0, 0, "unlock", "radial");
        this.add(radial);

        // choose_view
        const choose_view = scene.add.container(0, -138);
        this.add(choose_view);

        // closed
        const closed = scene.add.image(0, 0, "unlock", "closed");
        closed.scaleX = 0.95;
        closed.scaleY = 0.95;
        choose_view.add(closed);

        // stuffbg
        const stuffbg = scene.add.image(0, 356, "unlock", "stuffbg");
        choose_view.add(stuffbg);

        // codebtn
        const codebtn = scene.add.image(149, 192, "unlock", "btn-large");
        codebtn.visible = false;
        choose_view.add(codebtn);

        // lock
        const lock = scene.add.image(45, 193, "unlock", "lock");
        lock.visible = false;
        choose_view.add(lock);

        // ivegotacode
        const ivegotacode = scene.add.text(173, 193, "", {});
        ivegotacode.setOrigin(0.5, 0.5);
        ivegotacode.visible = false;
        ivegotacode.text = "I've got a code";
        ivegotacode.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#00000089", "shadow.stroke":true,"shadow.fill":true});
        choose_view.add(ivegotacode);

        // bookbtn
        const bookbtn = scene.add.image(-146, 192, "unlock", "btn-large");
        bookbtn.visible = false;
        choose_view.add(bookbtn);

        // ivegotabook
        const ivegotabook = scene.add.text(-116, 193, "", {});
        ivegotabook.setOrigin(0.5, 0.5);
        ivegotabook.visible = false;
        ivegotabook.text = "I've got a book";
        ivegotabook.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#00000089", "shadow.stroke":true,"shadow.fill":true});
        choose_view.add(ivegotabook);

        // book
        const book = scene.add.image(-242, 194, "unlock", "book");
        book.visible = false;
        choose_view.add(book);

        // code_view
        const code_view = scene.add.container(0, 387);
        choose_view.add(code_view);

        // inputbg
        const inputbg = scene.add.image(0, -25, "unlock", "input");
        code_view.add(inputbg);

        // enteryourcode
        const enteryourcode = scene.add.text(0, -101, "", {});
        enteryourcode.setOrigin(0.5, 0.5);
        enteryourcode.text = "Enter your code!\nMake sure you enter it exactly as it appears.";
        enteryourcode.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#00000089", "shadow.stroke":true,"shadow.fill":true});
        code_view.add(enteryourcode);

        // confirmBtn
        const confirmBtn = scene.add.image(0, 47, "unlock", "btn-small");
        confirmBtn.scaleX = 0.8;
        confirmBtn.scaleY = 0.8;
        code_view.add(confirmBtn);

        // nexttxt
        const nexttxt = scene.add.text(0, 46, "", {});
        nexttxt.setOrigin(0.5, 0.5);
        nexttxt.text = "Next";
        nexttxt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#00000089", "shadow.stroke":true,"shadow.fill":true});
        code_view.add(nexttxt);

        // spinner
        const spinner = new Spinner(scene, 0, 351);
        spinner.visible = false;
        choose_view.add(spinner);

        // congrats_view
        const congrats_view = scene.add.container(0, 194);
        congrats_view.visible = false;
        this.add(congrats_view);

        // open_back
        const open_back = scene.add.image(8, -428, "unlock", "open/back");
        congrats_view.add(open_back);

        // particles
        const particles = scene.add.sprite(3, -306, "unlock", "open/particles0001");
        congrats_view.add(particles);

        // open_shine
        const open_shine = scene.add.image(44, -497, "unlock", "open/shine");
        congrats_view.add(open_shine);

        // slots
        const slots = scene.add.container(0, -112);
        congrats_view.add(slots);

        // open_front
        const open_front = scene.add.image(0, 0, "unlock", "open/front");
        congrats_view.add(open_front);

        // stuffbg_1
        const stuffbg_1 = scene.add.nineslice(2, -32, "unlock", "stuffbg", 550, 200, 32, 30, 29, 30);
        congrats_view.add(stuffbg_1);

        // enteranothercode
        const enteranothercode = scene.add.image(-126, 110, "unlock", "btn-large");
        enteranothercode.scaleX = 0.8;
        enteranothercode.scaleY = 0.8;
        congrats_view.add(enteranothercode);

        // playnoww
        const playnoww = scene.add.image(128, 110, "unlock", "btn-large");
        playnoww.scaleX = 0.8;
        playnoww.scaleY = 0.8;
        congrats_view.add(playnoww);

        // enteranothercodee
        const enteranothercodee = scene.add.text(-126, 109, "", {});
        enteranothercodee.setOrigin(0.5, 0.5);
        enteranothercodee.text = "Enter another code";
        enteranothercodee.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#00000089", "shadow.stroke":true,"shadow.fill":true});
        congrats_view.add(enteranothercodee);

        // playnow
        const playnow = scene.add.text(128, 109, "", {});
        playnow.setOrigin(0.5, 0.5);
        playnow.text = "Done";
        playnow.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#00000089", "shadow.stroke":true,"shadow.fill":true});
        congrats_view.add(playnow);

        // congratulationsss
        const congratulationsss = scene.add.text(0, -53, "", {});
        congratulationsss.setOrigin(0.5, 0.5);
        congratulationsss.text = "Congratulations!";
        congratulationsss.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#00000089", "shadow.stroke":true,"shadow.fill":true});
        congrats_view.add(congratulationsss);

        // x_button
        const x_button = scene.add.image(710, -431, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(711, -433, "main", "blue-x");
        this.add(blue_x);

        // unlockicon
        const unlockicon = scene.add.image(-640, -369, "unlock", "unlockicon");
        this.add(unlockicon);

        // input_placement
        const input_placement = scene.add.rectangle(0, 224, 300, 50);
        input_placement.visible = false;
        input_placement.isFilled = true;
        input_placement.fillColor = 65280;
        input_placement.fillAlpha = 0.5;
        this.add(input_placement);

        // bg (components)
        new Interactive(bg);

        // confirmBtn (components)
        const confirmBtnButton = new Button(confirmBtn);
        confirmBtnButton.spriteName = "btn-small";
        confirmBtnButton.callback = () => this.onUnlock();

        // particles (components)
        const particlesAnimation = new Animation(particles);
        particlesAnimation.key = "open/particles";
        particlesAnimation.end = 30;
        particlesAnimation.autoPlay = false;

        // enteranothercode (components)
        const enteranothercodeButton = new Button(enteranothercode);
        enteranothercodeButton.spriteName = "btn-large";
        enteranothercodeButton.callback = () => this.newCode();
        enteranothercodeButton.activeFrame = true;

        // playnoww (components)
        const playnowwButton = new Button(playnoww);
        playnowwButton.spriteName = "btn-large";
        playnowwButton.callback = () => this.hide();
        playnowwButton.activeFrame = true;

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.hide();
        x_buttonButton.activeFrame = true;

        this.code_view = code_view;
        this.spinner = spinner;
        this.choose_view = choose_view;
        this.particles = particles;
        this.congrats_view = congrats_view;
        this.slots = slots;

        /* START-USER-CTR-CODE */
        this.tweenSpots = { // -225
            "1": {
                "1": { x: 0 }
            },
            "2": {
                "1": { x: -80 },
                "2": { x: 80 }
            },
            "3": {
                "1": { x: -150 },
                "2": { x: 0 },
                "3": { x: 150 }
            },
            "4": {
                "1": { x: -225 },
                "2": { x: -75 },
                "3": { x: 75 },
                "4": { x: 225 }
            },
            "5": {
                "1": { x: -150, y: -375 },
                "2": { x: 0, y: -375 },
                "3": { x: 150, y: -375 },
                "4": { x: -80 },
                "5": { x: 80 }
            },
            "6": {
                "1": { x: -150, y: -375 },
                "2": { x: 0, y: -375 },
                "3": { x: 150, y: -375 },
                "4": { x: -150 },
                "5": { x: 0 },
                "6": { x: 150 },
            },
            "7": {
                "1": { x: -225, y: -375 },
                "2": { x: -75, y: -375 },
                "3": { x: 75, y: -375 },
                "4": { x: 225, y: -375 },
                "5": { x: -150 },
                "6": { x: 0 },
                "7": { x: 150 },
            },
            "8": {
                "1": { x: -225, y: -375 },
                "2": { x: -75, y: -375 },
                "3": { x: 75, y: -375 },
                "4": { x: 225, y: -375 },
                "5": { x: -225 },
                "6": { x: -75 },
                "7": { x: 75 },
                "8": { x: 225 },
            },
            "9": {
                "1": { x: -300, y: -375 },
                "2": { x: -150, y: -375 },
                "3": { x: 0, y: -375 },
                "4": { x: 150, y: -375 },
                "5": { x: 300, y: -375 },
                "6": { x: -300, y: -225 },
                "7": { x: -150, y: -225 },
                "8": { x: 0, y: -225 },
                "9": { x: 150, y: -225 }
            },
            "10": {
                "1": { x: -300, y: -375 },
                "2": { x: -150, y: -375 },
                "3": { x: 0, y: -375 },
                "4": { x: 150, y: -375 },
                "5": { x: 300, y: -375 },
                "6": { x: -300, y: -225 },
                "7": { x: -150, y: -225 },
                "8": { x: 0, y: -225 },
                "9": { x: 150, y: -225 },
                "10": { x: 300, y: -225 }
            }
        }
        this.hasCodeBeenRedeemed = false

        //text input
        this.unlockcodeInput = scene.add.rexInputText({x: input_placement.x, y: input_placement.y, width: input_placement.width, height: input_placement.height, type: 'text', id: 'unlockcodeInput', maxLength: 16, align: 'center', fontFamily: 'Burbank Small', color: '#777777', fontSize: '22px', fontWeight: 'bold'})
        this.add(this.unlockcodeInput)
        this.unlockcodeInput.on('focus', () => {this.scene.game.input.keyboard.enabled = false})
        this.unlockcodeInput.on('blur', () => {this.scene.game.input.keyboard.enabled = true})
        this.unlockcodeInput.on('textchange', () => {this.unlockcodeInput.text = this.unlockcodeInput.text.toUpperCase()})
        this.unlockcodeInput.on('keydown', (a,e) => {
            if(e.key == 'Enter') this.onUnlock()
        })

        this.congrats_view.visible = false
        this.choose_view.visible = true

        this.allSlots = []

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()

        this.network.events.on('unlock_code_reward', this.handleUnlockReward, this)

        document.getElementById('unlockcodeInput').style.visibility = 'visible'
        this.congrats_view.visible = false
        this.choose_view.visible = true
        this.code_view.visible = true
        this.destroySlots()
        this.showInput()
    }

    hide() {
        this.network.events.off('unlock_code_reward', this.handleUnlockReward, this)
        this.interface.destroyWidget(this)
        document.getElementById('unlockcodeInput').style.visibility = 'hidden'
    }

    onUnlock() {
        if(this.unlockBusy) return
        document.getElementById('unlockcodeInput').style.visibility = 'hidden'

        this.spinner.start()
        this.unlockBusy = true
        this.code_view.visible = false
        this.network.send('redeem_unlock_code', {
            code: this.unlockcodeInput.text.toString(),
        });
    }

    showInput() {
        this.unlockBusy = false
        this.code_view.visible = true
        this.spinner.stop()
    }

    destroySlots() {
        for(let slot of this.allSlots) {
            if(slot.move) slot.move.stop()
            slot.destroy()
        }
        this.allSlots = []
        this.particles.__Animation.stop()
    }

    newCode() {
        document.getElementById('unlockcodeInput').style.visibility = 'visible';
        this.unlockcodeInput.text = ''
        this.congrats_view.visible = false
        this.code_view.visible = true
        this.choose_view.visible = true
        this.destroySlots()
    }

    handleUnlockReward(args) {
        // Handle the args
        let rewardsObj = {}
        for(let i = 0; i < args.items.length; i++) {
            rewardsObj[`item${i + 1}`] = args.items[i]
        }
        if(args.coins) {
            rewardsObj.coins = args.coins
        }

        // Start displaying stuff
        this.interface.refreshPlayerCard()

        this.spinner.stop()
        this.unlockBusy = false
        this.hasCodeBeenRedeemed = true
        this.congrats_view.visible = true
        this.choose_view.visible = false
        this.particles.__Animation.play()
        document.getElementById('unlockcodeInput').style.visibility = 'hidden'

        let t = Object.keys(rewardsObj).length
        for(let i = 1; i < t + 1; i++) {
            let slot = new UnlockSlot(this.scene, 0, 0)
            this.slots.add(slot)
            this.allSlots.push(slot)

            if(rewardsObj.coins && i == t) {
                slot.showCoins(rewardsObj.coins)
            } else {
                slot.loadItem(rewardsObj[`item${i}`])
            }
            slot.move = this.scene.tweens.chain({
                targets: slot,
                ease: 'Linear',
                tweens: [
                    {
                        y: { from: 0, to: -225 },
                        duration: 750
                    },
                    {
                        x: { from: 0, to: this.tweenSpots[t][i].x },
                        y: { from: -225, to: this.tweenSpots[t][i].y ? this.tweenSpots[t][i].y : -225 },
                        duration: 500
                    }
                ],
                onComplete: () => slot.move = null
            }).play()
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
