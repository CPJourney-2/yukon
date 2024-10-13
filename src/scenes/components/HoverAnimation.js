import EventComponent from './EventComponent'

const GetValue = Phaser.Utils.Objects.GetValue
const NumberArray = Phaser.Utils.Array.NumberArray
const Pad = Phaser.Utils.String.Pad

// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class HoverAnimation extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject;
        /** @type {string} */
        this.key = "";
        /** @type {string} */
        this.checkpoints = "";
        /** @type {number} */
        this.start = 1;
        /** @type {number} */
        this.end = 1;
        /** @type {boolean} */
        this.hideOnComplete = false;
        /** @type {number} */
        this.frameRate = 24;
        /** @type {Phaser.GameObjects.GameObject} */
        this.hoverZone;
        /** @type {boolean} */
        this.createZone = true;
        /** @type {boolean} */
        this.pixelPerfect = false;
        /** @type {any} */
        this.hoverCallback;
        /** @type {boolean} */
        this.replayBeforeFinish = false;
        /** @type {boolean} */
        this.loop = true;
        /** @type {any} */
        this.completeCallback;
        /** @type {boolean} */
        this.clickable = false;
        /** @type {boolean} */
        this.exclusive = false;


        this.gameObject = gameObject;
        gameObject["__HoverAnimation"] = this;

        /* START-USER-CTR-CODE */
        // Write your code here.

        this.scene = gameObject.scene
        this.atlas = gameObject.texture.key
        this.initialFrame = gameObject.frame.name
        this.animation
        /* END-USER-CTR-CODE */
    }

    /** @returns {HoverAnimation} */
    static getComponent(gameObject) {
        return gameObject["__HoverAnimation"];
    }


    /* START-USER-CODE */

    start() {
        this.animations = []

        if(!this.key || this.key == "") {
            this.key = this.gameObject.frame.name.slice(0, -4)
        }

        this.checkpointArray = this.checkpoints ? this.checkpoints.split(",") : []
        this.checkpointArray.push(this.end)
        let start = this.start
        let part = 0
        for(let checkpoint of this.checkpointArray) {
            this.animations.push(this.createAnim(part, parseInt(start), parseInt(checkpoint)))
            part++
            start = parseInt(checkpoint) + (this.exclusive ? 1 : 0)
        }

        if(this.createZone) this.createHoverZone();

        this.gameObject.on('pointerover', () => this.onOver())
        this.gameObject.on('pointerout', () => this.onOut())
        this.gameObject.on('animationcomplete', () => this.onComplete())

        this.currentAnimation = 0

    }

    createHoverZone() {
        let object = this.hoverZone ? this.hoverZone : this.gameObject;
        this.zone = this.pixelPerfect ? object : this.gameObject.scene.add.zone(object.x, object.y, object.width, object.height)
        this.zone.setInteractive({
            cursor: this.clickable ? 'pointer' : null,
            pixelPerfect: this.pixelPerfect
        })
        this.zone.angle = object.angle
        this.zone.isButton = this.clickable
        this.zone.on(this.clickable ? 'pointerup' : 'pointerover', () => {
            this.onOver()
        })
    }

    onOver() {
        this.play()

        if (this.hoverCallback) this.hoverCallback()
    }

    onOut() {
        if (this.stopOnOut) {
            this.stop()
        }
    }

    onComplete() {
        if(this.hideOnComplete) this.gameObject.visible = false
        else this.playing = false

        if(this.completeCallback) this.completeCallback(this.gameObject)

        if(this.queuedNext) this.play()
    }

    queuePlay() {
        if(this.playing) this.queuedNext = true
        else this.play()
    }

    play() {
        if(this.playing && !this.replayBeforeFinish) return
        if(!this.loop && this.currentAnimation == 0 && this.playedEver) return

        this.queuedNext = false
        this.playing = true
        this.playedEver = true

        this.gameObject.play(this.animations[this.currentAnimation])

        this.currentAnimation++
        if(this.currentAnimation >= this.animations.length) this.currentAnimation = 0
    }

    playIndex(index) {
        this.gameObject.anims.stop()
        this.currentAnimation = index
        this.gameObject.play(this.animations[index])
        this.playing = true
        this.playedEver = true
    }

    stop() {
        this.gameObject.anims.stop()
        this.playing = false

        if (this.hideOnComplete) {
            this.gameObject.visible = false
        } else if (this.stopOnOut) {
            this.gameObject.setFrame(this.initialFrame)
        }
    }

    createAnim(part, start, end) {
        // Prevent clashing keys across scenes
        let localKey = `${this.atlas}/${this.key}_${part}_${this.frameRate}`

        // If animation already exists
        if (this.scene.anims.exists(localKey)) {
            return this.scene.anims.get(localKey)
        }

        // Create animation
        return this.scene.anims.create({
            key: localKey,
            frames: this.generateFrameNames(this.atlas, {
                prefix: `${this.key}`,
                start: start,
                end: end,
                zeroPad: 4
            }),
            frameRate: this.frameRate,
            repeat: 0,
            repeatDelay: 0,
            showOnStart: false,
            hideOnComplete: false
        })
    }

    generateFrameNames(key, config) {
        let prefix = GetValue(config, 'prefix', '')
        let start = GetValue(config, 'start', 0)
        let end = GetValue(config, 'end', 0)
        let suffix = GetValue(config, 'suffix', '')
        let zeroPad = GetValue(config, 'zeroPad', 0)
        let out = GetValue(config, 'outputArray', [])
        let frames = GetValue(config, 'frames', false)

        let texture = this.scene.anims.textureManager.get(key)

        if (!texture) {
            return out
        }

        if (!frames) {
            frames = NumberArray(start, end)
        }

        for (let i = 0; i < frames.length; i++) {
            let frame = prefix + Pad(frames[i], zeroPad, '0', 1) + suffix

            if (texture.has(frame)) {
                out.push({ key: key, frame: frame })
            } else {
                out.push({ key: '__DEFAULT', frame: '__BASE' })
            }
        }

        return out
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
