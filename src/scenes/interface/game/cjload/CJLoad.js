import { Animation, Button, MoveTo, SimpleButton, DraggableContainer, Draggable, Interactive } from '@components/components'
import BaseContainer from '@scenes/base/BaseContainer';


export const preload = {
    key: 'cjload-pack',
    url: 'assets/media/interface/game/cardjitsuwaiting/cjload-pack.json',
    loadString: ['loading', 'Card Jitsu']
}

// You can write more code here

/* START OF COMPILED CODE */

export default class CJLoad extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.bg_1;
        /** @type {Phaser.GameObjects.Image} */
        this.penguin_angrypenguin2;
        /** @type {Phaser.GameObjects.Image} */
        this.penguin_angrypenguinfront2;
        /** @type {Phaser.GameObjects.Image} */
        this.penguin_tintedbg2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_eyes00012;
        /** @type {Phaser.GameObjects.Image} */
        this.tintedpeng2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.blackedout_blackedout;
        /** @type {Phaser.GameObjects.Image} */
        this.penguin_angrypenguin;
        /** @type {Phaser.GameObjects.Image} */
        this.penguin_angrypenguinfront;
        /** @type {Phaser.GameObjects.Sprite} */
        this.blackedout_blackedout0001;
        /** @type {Phaser.GameObjects.Text} */
        this.seat_0_text;
        /** @type {Phaser.GameObjects.Text} */
        this.seat_1_text;


        this.scaleX = 0.7;
        this.scaleY = 0.7;

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(1116, 683, 128, 128);
        rectangle_1.scaleX = 17.53130501968374;
        rectangle_1.scaleY = 11.39115096816523;
        rectangle_1.isFilled = true;
        rectangle_1.fillAlpha = 0;
        this.add(rectangle_1);

        // container_2
        const container_2 = scene.add.container(820.000013964517, 501.99999982970104);
        this.add(container_2);

        // bg
        const bg = scene.add.image(302.99997028282667, 213.9999862057819, "cjwaiting", "bg");
        container_2.add(bg);

        // bg_1
        const bg_1 = scene.add.image(302.99997028282667, 213.9999862057819, "cjwaiting", "bg2");
        bg_1.visible = false;
        container_2.add(bg_1);

        // border
        const border = scene.add.image(302.99997028282667, 170.0000028950828, "cjwaiting", "border");
        container_2.add(border);

        // penguinbg_1
        const penguinbg_1 = scene.add.image(113.99998450279202, 116.99999327319, "cjwaiting", "penguinbg");
        penguinbg_1.flipX = true;
        penguinbg_1.scaleX = 1.5;
        penguinbg_1.scaleY = 1.5;
        penguinbg_1.angle = 2;
        container_2.add(penguinbg_1);

        // penguinbg
        const penguinbg = scene.add.image(485.000008259501, 341.9999971049172, "cjwaiting", "penguinbg");
        penguinbg.flipX = true;
        penguinbg.scaleX = 1.5;
        penguinbg.scaleY = 1.5;
        penguinbg.angle = 2;
        container_2.add(penguinbg);

        // seat0
        const seat0 = scene.add.container(102.99996687684677, 86.99999276229295);
        container_2.add(seat0);

        // penguin_angrypenguin2
        const penguin_angrypenguin2 = scene.add.image(6, 25, "cjwaiting", "penguin/angrypenguin");
        penguin_angrypenguin2.visible = false;
        seat0.add(penguin_angrypenguin2);

        // penguin_angrypenguinfront2
        const penguin_angrypenguinfront2 = scene.add.image(4, 25, "cjwaiting", "penguin/angrypenguinfront");
        penguin_angrypenguinfront2.angle = -1;
        penguin_angrypenguinfront2.visible = false;
        seat0.add(penguin_angrypenguinfront2);

        // penguin_tintedbg2
        const penguin_tintedbg2 = scene.add.image(0, 25, "cjwaiting", "penguin/tintedbg");
        penguin_tintedbg2.scaleX = 0.51;
        penguin_tintedbg2.scaleY = 0.51;
        penguin_tintedbg2.angle = 2;
        seat0.add(penguin_tintedbg2);

        // penguin_eyes00012
        const penguin_eyes00012 = scene.add.sprite(16, 0, "cjwaiting", "penguin/eyes0001");
        penguin_eyes00012.scaleX = 0.5;
        penguin_eyes00012.scaleY = 0.5;
        seat0.add(penguin_eyes00012);

        // tintedpeng2
        const tintedpeng2 = scene.add.image(1, 25, "cjwaiting", "tintedpeng");
        tintedpeng2.scaleX = 0.5;
        tintedpeng2.scaleY = 0.5;
        tintedpeng2.angle = 2;
        seat0.add(tintedpeng2);

        // blackedout_blackedout
        const blackedout_blackedout = scene.add.sprite(3, 24, "cjwaiting", "blackedout/blackedout0001");
        blackedout_blackedout.angle = 2;
        seat0.add(blackedout_blackedout);

        // seat1
        const seat1 = scene.add.container(473.99999063355574, 313.0000140496665);
        seat1.angle = -4;
        container_2.add(seat1);

        // penguin_angrypenguin
        const penguin_angrypenguin = scene.add.image(6, 25, "cjwaiting", "penguin/angrypenguin");
        penguin_angrypenguin.flipX = true;
        penguin_angrypenguin.angle = -4;
        penguin_angrypenguin.visible = false;
        seat1.add(penguin_angrypenguin);

        // penguin_angrypenguinfront
        const penguin_angrypenguinfront = scene.add.image(4, 25, "cjwaiting", "penguin/angrypenguinfront");
        penguin_angrypenguinfront.flipX = true;
        penguin_angrypenguinfront.angle = -5;
        penguin_angrypenguinfront.visible = false;
        seat1.add(penguin_angrypenguinfront);

        // blackedout_blackedout0001
        const blackedout_blackedout0001 = scene.add.sprite(-5, 25, "cjwaiting", "blackedout/blackedout0001");
        blackedout_blackedout0001.flipX = true;
        seat1.add(blackedout_blackedout0001);

        // close
        const close = scene.add.sprite(605.0000103030887, 0, "cjwaiting", "close");
        container_2.add(close);

        // seat_0_text
        const seat_0_text = scene.add.text(-123, 162, "", {});
        seat_0_text.text = "LOADING...";
        seat_0_text.setStyle({ "align": "center", "fixedWidth":500,"fontFamily": "CCComicrazy", "fontSize": "30px", "stroke": "#000000ff", "strokeThickness":10});
        container_2.add(seat_0_text);

        // seat_1_text
        const seat_1_text = scene.add.text(246, 385, "", {});
        seat_1_text.text = "LOADING...";
        seat_1_text.setStyle({ "align": "center", "fixedWidth":500,"fontFamily": "CCComicrazy", "fontSize": "30px", "stroke": "#000000ff", "strokeThickness":10});
        container_2.add(seat_1_text);

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // container_2 (components)
        const container_2DraggableContainer = new DraggableContainer(container_2);
        container_2DraggableContainer.handle = border;

        // penguin_eyes00012 (components)
        const penguin_eyes00012Animation = new Animation(penguin_eyes00012);
        penguin_eyes00012Animation.end = 147;

        // blackedout_blackedout (components)
        const blackedout_blackedoutAnimation = new Animation(blackedout_blackedout);
        blackedout_blackedoutAnimation.end = 20;

        // blackedout_blackedout0001 (components)
        const blackedout_blackedout0001Animation = new Animation(blackedout_blackedout0001);
        blackedout_blackedout0001Animation.end = 20;

        // close (components)
        const closeButton = new Button(close);
        closeButton.callback = () => {this.onClose()};
        closeButton.activeFrame = true;

        this.bg_1 = bg_1;
        this.penguin_angrypenguin2 = penguin_angrypenguin2;
        this.penguin_angrypenguinfront2 = penguin_angrypenguinfront2;
        this.penguin_tintedbg2 = penguin_tintedbg2;
        this.penguin_eyes00012 = penguin_eyes00012;
        this.tintedpeng2 = tintedpeng2;
        this.blackedout_blackedout = blackedout_blackedout;
        this.penguin_angrypenguin = penguin_angrypenguin;
        this.penguin_angrypenguinfront = penguin_angrypenguinfront;
        this.blackedout_blackedout0001 = blackedout_blackedout0001;
        this.seat_0_text = seat_0_text;
        this.seat_1_text = seat_1_text;

        /* START-USER-CTR-CODE */
        this.penguin_tintedbg2.setTintFill(this.world.getColor(this.world.client.penguin.color))
        this.penguin_angrypenguin2.setTintFill(this.world.getColor(this.world.client.penguin.color))

        this.network.events.on('waddle_info', this.updateWaddle, this)
        this.network.events.on('waddle_remove', this.updateWaddle, this)

        this.network.events.on('update_waddle', this.updateWaddle, this)
        this.network.events.on('destroywaddle', this.exit, this)

        this.seat_0_text.text = this.world.client.penguin.username

        // Write your code here.
        this._dontHideInputs = true
        this.network.send("get_waddle_info")
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    exit() {
        this.network.events.off('waddle_info', this.updateWaddle, this)
        this.network.events.off('update_waddle', this.updateWaddle, this)
        this.network.events.off('waddle_remove', this.updateWaddle, this)

        this.network.events.off('destroywaddle', this.exit, this)

        this.interface.destroyWidget(this)
    }

    updateWaddle(args) {
        let users = args.users

        let length = users.length

        for (let user of users) {
            this[`seat_${user.seat}_text`].setText(user.user.displayName.toUpperCase())

            let colour = this.world.getColor(user.user.color)

            if (user.seat == 0) {
                this.blackedout_blackedout.visible = false

                this.tintedpeng2.visible = true

                this.penguin_angrypenguin2.setTintFill(colour)
                this.penguin_tintedbg2.setTintFill(colour)

            } else {
                this.blackedout_blackedout0001.visible = false
                this.penguin_angrypenguin.setTintFill(colour)
            }
        }

        if (length == 2) {
            this.penguin_tintedbg2.visible = false
            this.tintedpeng2.visible = false
            this.penguin_eyes00012.visible = false
            this.penguin_angrypenguinfront2.visible = true
            this.penguin_angrypenguinfront.visible = true
            this.penguin_angrypenguin2.visible = true
            this.penguin_angrypenguin.visible = true


            this.bg_1.visible = true

            setTimeout(() => {
                this.exit()
            }, 500)
        }


    }

    onClose() {
        this.world.network.send("leave_waddle", {})
        this.exit()
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
