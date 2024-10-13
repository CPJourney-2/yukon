
// You can write more code here
import BaseContainer from '@scenes/base/BaseContainer'

import { SimpleButton, Button, Animation, Interactive } from '@components/components'

export const preload = {
    key: 'binoculars-pack',
    url: 'assets/media/interface/game/binoculars/binoculars-pack.json',
    loadString: ['loading', 'Binoculars']
}
/* START OF COMPILED CODE */

export default class Binoculars extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 441, y ?? 406);

        /** @type {Phaser.GameObjects.Image} */
        this.voyager_come_close;
        /** @type {Phaser.GameObjects.Image} */
        this.voyager_come_far;
        /** @type {Phaser.GameObjects.Image} */
        this.voyager_leave_close;
        /** @type {Phaser.GameObjects.Image} */
        this.voyager_leave_far;
        /** @type {Phaser.GameObjects.Container} */
        this.voyager;
        /** @type {Phaser.GameObjects.Sprite} */
        this.anim_bino;
        /** @type {Phaser.GameObjects.Sprite} */
        this.anim_fish_gold;


        // block
        const block = scene.add.rectangle(322, 63, 128, 128);
        block.scaleX = 12.858944958430353;
        block.scaleY = 8.469006608790183;
        this.add(block);

        // bg
        const bg = scene.add.image(292, 51, "binoculars-cove", "excellentart");
        this.add(bg);

        // binocularwaves
        const binocularwaves = scene.add.sprite(396, 30, "binoculars-cove", "binocularwaves0001");
        this.add(binocularwaves);

        // voyager
        const voyager = scene.add.container(278, 80);
        this.add(voyager);

        // voyager_come_close
        const voyager_come_close = scene.add.image(38, -165, "binoculars_voyager", "voyager-come-close");
        voyager_come_close.visible = false;
        voyager.add(voyager_come_close);

        // voyager_come_far
        const voyager_come_far = scene.add.image(38, -136, "binoculars_voyager", "voyager-come-far");
        voyager_come_far.scaleX = 0.5;
        voyager_come_far.scaleY = 0.5;
        voyager_come_far.visible = false;
        voyager.add(voyager_come_far);

        // voyager_leave_close
        const voyager_leave_close = scene.add.image(38, -169, "binoculars_voyager", "voyager-leave-close");
        voyager_leave_close.visible = false;
        voyager.add(voyager_leave_close);

        // voyager_leave_far
        const voyager_leave_far = scene.add.image(38, -155, "binoculars_voyager", "voyager-leave-far");
        voyager_leave_far.scaleX = 0.5;
        voyager_leave_far.scaleY = 0.5;
        voyager_leave_far.visible = false;
        voyager.add(voyager_leave_far);

        // anim_bino
        const anim_bino = scene.add.sprite(558, 193, "binoculars-cove", "anim_bino0001");
        this.add(anim_bino);

        // anim_fish_gold
        const anim_fish_gold = scene.add.sprite(558, 193, "binoculars-cove", "anim_bino0176");
        this.add(anim_fish_gold);

        // voyager_leave_close_1
        const voyager_leave_close_1 = scene.add.image(320, -4, "binoculars_voyager", "voyager-leave-close");
        this.add(voyager_leave_close_1);

        // fg
        const fg = scene.add.image(320, 74, "binoculars-cove", "blackspace");
        this.add(fg);

        // close
        const close = scene.add.sprite(956, -308, "main", "grey-button");
        this.add(close);

        // grey_x
        const grey_x = scene.add.image(956, -310, "main", "grey-x");
        this.add(grey_x);

        // block (components)
        new Interactive(block);

        // binocularwaves (components)
        const binocularwavesAnimation = new Animation(binocularwaves);
        binocularwavesAnimation.key = "binocularwaves";
        binocularwavesAnimation.end = 72;

        // anim_fish_gold (components)
        const anim_fish_goldAnimation = new Animation(anim_fish_gold);
        anim_fish_goldAnimation.key = "fish";
        anim_fish_goldAnimation.start = 176;
        anim_fish_goldAnimation.end = 129;
        anim_fish_goldAnimation.repeat = 0;
        const anim_fish_goldSimpleButton = new SimpleButton(anim_fish_gold);
        anim_fish_goldSimpleButton.callback = () => {this.onClick()};

        // close (components)
        const closeButton = new Button(close);
        closeButton.spriteName = "grey-button";
        closeButton.callback = () => this.hide();
        closeButton.activeFrame = true;
        closeButton.pixelPerfect = true;

        this.voyager_come_close = voyager_come_close;
        this.voyager_come_far = voyager_come_far;
        this.voyager_leave_close = voyager_leave_close;
        this.voyager_leave_far = voyager_leave_far;
        this.voyager = voyager;
        this.anim_bino = anim_bino;
        this.anim_fish_gold = anim_fish_gold;

        /* START-USER-CTR-CODE */
        // Write your code here.
        this.timer
        this.shipTween;
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    show(args){
        this.timer
        this.randomVar = 999
        this.timer = setInterval(() => {
            this.randomVar = Math.floor(Math.random() * 4)
            if (this.randomVar < 2){
                this.anim_bino.visible = true
                this.anim_fish_gold.visible = false
                this.anim_bino.play('binoculars-boatright');
            }
            else if (this.randomVar == 2){
                this.anim_bino.visible = true
                this.anim_fish_gold.visible = false
                this.anim_bino.play('binoculars-boatleft');
            }
            else if (this.randomVar == 3){
                this.anim_bino.visible = false
                this.anim_fish_gold.visible = true
                this.anim_fish_gold.play('binoculars-fish')
            }
        }, 9000);

        // this._setShipComeClose();
    }
    onClick(){
            this.interface.prompt.showItem(2138)
        }
    // Write your code here.

    hide(){
        this.interface.destroyWidget(this)
        this.timer = clearInterval(this.timer)
        this._hideShip();
    }

    _addShipTween(yDelta = 5) {
        this.shipTween = this.world?.room?.tweens.add({
            targets: this.voyager,
            y: this.voyager.y + yDelta,
            duration: 1500,
            repeat: -1,
            repeatDelay: 1000,
            yoyo: true,
            hold: 1000,
        });
    }

    _setShipComeClose() {
        this.voyager_come_close.visible = true;
        this._addShipTween(5);
    }

    _setShipComeFar() {
        this.voyager_come_far.visible = true;
        this._addShipTween(2);
    }

    _setShipLeaveClose() {
        this.voyager_leave_close.visible = true;
        this._addShipTween(5);
    }

    _setShipLeaveFar() {
        this.voyager_leave_far.visible = true;
        this._addShipTween(2);
    }

    _hideShip() {
        this.voyager_come_close.visible = false;
        this.voyager_come_far.visible = false;
        this.voyager_leave_close.visible = false;
        this.voyager_leave_far.visible = false;

        this.shipTween?.destroy();
        this.shipTween = null;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
