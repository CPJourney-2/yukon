import RoomScene from '@rooms/RoomScene'

import { Animation, Button, MoveTo, ZoneTrigger, SimpleButton, ShowHint } from '@components/components'

const ONE_FRAME_IN_MS = 41.66666

const BASE_TWEEN_CONFIG = {
    duration: ONE_FRAME_IN_MS * 470,
    ease: 'Linear',
    repeat: -1
}

/* START OF COMPILED CODE */

export default class Party5 extends RoomScene {

    constructor() {
        super("Party5");

        /** @type {Phaser.GameObjects.Container} */
        this._bg;
        /** @type {Phaser.GameObjects.Image} */
        this.exitLight;
        /** @type {Phaser.GameObjects.Image} */
        this.wheel;
        /** @type {Phaser.GameObjects.Image} */
        this.spoke;
        /** @type {Phaser.GameObjects.Image} */
        this.legs;
        /** @type {Phaser.GameObjects.Container} */
        this._fg;
        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'exit': () => this.triggerRoom(854, 1020, 400),
        }

        this.music = 1155

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("fair-party5-pack", "assets/media/rooms/_fair/party5/fair-party5-pack.json");
    }

    /** @returns {void} */
    _create() {

        // _bg
        const _bg = this.add.container(760, 480);

        // bg
        const bg = this.add.image(0, 0, "fair-party5", "bg");
        _bg.add(bg);

        // _fg
        const _fg = this.add.container(760, 480);

        // barrel1
        const barrel1 = this.add.image(14, 391, "fair-party5", "barrel1");
        _fg.add(barrel1);

        // exitLight
        const exitLight = this.add.image(201, 342, "fair-party5", "exit");
        exitLight.visible = false;
        _fg.add(exitLight);

        // wheel
        const wheel = this.add.image(-0.14440147115738, 327.2518172674954, "fair-party5-wheel");
        wheel.setOrigin(0.5015750012442118, 0.9501238700248339);
        _fg.add(wheel);

        // spoke
        const spoke = this.add.image(-0.7292824983596802, 359.1967525551154, "fair-party5", "spoke");
        spoke.setOrigin(0.5166873293585833, 0.9544431420181538);
        _fg.add(spoke);

        // legs
        const legs = this.add.image(15.247991561889648, -2510.2056968323814, "fair-party5-legs");
        legs.setOrigin(0.5076492069900019, -0.5635775798119055);
        _fg.add(legs);

        // exitBtn
        const exitBtn = this.add.rectangle(191.39890231717743, 311.83073511903194, 220, 250);
        exitBtn.setOrigin(0.5109041014417156, 0.23132294047612778);
        _fg.add(exitBtn);

        // lists
        const sort = [];

        // exitBtn (components)
        const exitBtnSimpleButton = new SimpleButton(exitBtn);
        exitBtnSimpleButton.hoverCallback = () => this.exitLight.visible = true;
        exitBtnSimpleButton.hoverOutCallback = () => this.exitLight.visible = false;
        new MoveTo(exitBtn);

        this._bg = _bg;
        this.exitLight = exitLight;
        this.wheel = wheel;
        this.spoke = spoke;
        this.legs = legs;
        this._fg = _fg;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.tweensPlaying = false
        this.tweensRepeated = []

        this.allTweens = []

        this._fg.depth = 960

        let video = this.add.video(0.5, 0.5).loadURL(`assets/media/rooms/_fair/party5/fair-party5-bg.mp4`, true, "anonymous")
        video.setOrigin(0.5,0.5)
        this._bg.add(video)

        video.once('play', () => this.startTweens())
        
        // Restart tweens when video loops to prevent major desync
        video.on('loop', () => {
            this.client.questComplete(65)
            for(let tween of this.allTweens) tween.restart()
        })

        this.bgVideo = video
        video.play(true)

        this.events.once('roomready', () => this.checkPenguins())
        this.events.on('addpenguin', () => this.checkPenguins())
    }

    startTweens() {
        // Move the legs along a circular path
        this.follower = { t: 0, vec: new Phaser.Math.Vector2() }
        this.path = new Phaser.Curves.Path() // 5088
        this.path.add(new Phaser.Curves.Ellipse(760, 480, 2544).setRotation(300).setClockwise(true))

        this.allTweens.push(
            this.tweens.add({
                targets: this.follower,
                t: 1,
                ...BASE_TWEEN_CONFIG
            })
        )

        this.allTweens.push(
            this.tweens.add({
                targets: [this.spoke, this.wheel],
                angle: { from: 360, to: 0 },
                ...BASE_TWEEN_CONFIG
            })
        )

        this.tweensPlaying = true
    }

    update() {
        if(!this.tweensPlaying) return

        this.path.getPoint(this.follower.t, this.follower.vec)
        this.legs.setPosition(this.follower.vec.x - 760, this.follower.vec.y - 480)
    }

    onSnowballComplete(x, y, ball) {
        if(this.matter.containsPoint(this.block, x, y)) {
            this.interface.main.snowballFactory.destroyBall(ball)
        }
    }

    checkPenguins() {
        if (!this.penguins) return
        if(Object.keys(this.penguins).length >= 40) {
            this.client.questComplete(76)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */