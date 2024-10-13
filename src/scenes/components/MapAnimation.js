
import EventComponent from './EventComponent'

const GetValue = Phaser.Utils.Objects.GetValue
const NumberArray = Phaser.Utils.Array.NumberArray
const Pad = Phaser.Utils.String.Pad

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MapAnimation extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject;
        /** @type {string} */
        this.key = "";
        /** @type {number} */
        this.end = 0;


        this.gameObject = gameObject;
        gameObject["__MapAnimation"] = this;

        /* START-USER-CTR-CODE */
        this.scene = gameObject.scene
        this.atlas = gameObject.texture.key
        this.initialFrame = gameObject.frame.name
        this.animation
        this.frameRate = 24
        /* END-USER-CTR-CODE */
    }

    /** @returns {MapAnimation} */
    static getComponent(gameObject) {
        return gameObject["__MapAnimation"];
    }


    /* START-USER-CODE */

    start() {
        this.animations = []

        if(!this.key || this.key == "") {
            this.key = this.gameObject.frame.name.slice(0, -4)
        }

        this.checkpointArray = [this.end / 2, this.end]

        let start = 1
        let part = 0

        for(let checkpoint of this.checkpointArray) {
            this.animations.push(this.createAnim(part, parseInt(start), parseInt(checkpoint)))
            part++
            start = checkpoint + 1
        }

        this.out()

        //this.gameObject.on('animationcomplete', () => this.onComplete())
    }

    over() {
        this.play(1)
    }

    out() {
        this.play(0)
    }

    play(index) {
        let frame = this.gameObject.anims.currentFrame ? this.gameObject.anims.currentFrame.index : 1
        if(frame == this.end / 2) frame = 1
        this.gameObject.play({ key: this.animations[index].key, startFrame: frame })
    }

    stop() {
        this.gameObject.anims.stop()
        this.playing = false
    }

    createAnim(part, start, end) {
        // Prevent clashing keys across scenes
        let localKey = `${this.atlas}/${this.key}_${part}_${this.frameRate}`
        this.loclKey = localKey

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
            repeat: -1,
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
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
