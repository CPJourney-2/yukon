import EventComponent from './EventComponent'

const GetValue = Phaser.Utils.Objects.GetValue
const NumberArray = Phaser.Utils.Array.NumberArray
const Pad = Phaser.Utils.String.Pad


/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Animation extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject;
        /** @type {string} */
        this.key = "";
        /** @type {number} */
        this.start = 1;
        /** @type {number} */
        this.end = 1;
        /** @type {number} */
        this.frameRate = 24;
        /** @type {number} */
        this.repeat = -1;
        /** @type {number} */
        this.repeatDelay = 0;
        /** @type {boolean} */
        this.autoPlay = true;
        /** @type {boolean} */
        this.onHover = false;
        /** @type {boolean} */
        this.stopOnOut = true;
        /** @type {boolean} */
        this.showOnStart = false;
        /** @type {boolean} */
        this.hideOnComplete = false;
        /** @type {any} */
        this.onCompleteCallback = null;


        this.gameObject = gameObject;
        gameObject["__Animation"] = this;

        /* START-USER-CTR-CODE */

        this.scene = gameObject.scene
        this.atlas = gameObject.texture.key
        this.initialFrame = gameObject.frame.name
        this.animation

        /* END-USER-CTR-CODE */
    }

    /** @returns {Animation} */
    static getComponent(gameObject) {
        return gameObject["__Animation"];
    }


    /* START-USER-CODE */

    findEnd() {
        //utilizing binary search to find the last frame faster
        let binarySearchMin = 1
        let binarySearchMax = 10000

        while(true) {
            let attempt = Math.ceil((binarySearchMax - binarySearchMin) / 2) + binarySearchMin
            let frameName = `${this.key}${attempt.toString().padStart(4, "0")}`
            let frameExists = (this.gameObject.texture.frames[frameName] != undefined)
            if(frameExists) binarySearchMin = attempt
            else binarySearchMax = attempt

            if((binarySearchMin + 1) == binarySearchMax) {
                this.end = binarySearchMin
                return
            }
        }
    }

    start() {
        if(!this.key || this.key == "") {
            this.key = this.gameObject.frame.name.slice(0, -4)

            if(this.end == 1) this.findEnd()
            //console.log("end is ", this.end);
        }

        this.animation = this.createAnim()

        if (this.onHover) {
            this.gameObject.on('pointerover', () => this.onOver())
            this.gameObject.on('pointerout', () => this.onOut())
        } else if (this.autoPlay) {
            try {
                this.play()
            } catch (e) {
                console.error("Unable to play animation for ", this.key, " with error ", e);
                //pass
            }
        }

        if(this.onCompleteCallback) {
            this.gameObject.on('animationcomplete', () => this.onCompleteCallback())
        }
    }

    onOver() {
        this.play()
    }

    onOut() {
        if (this.stopOnOut) {
            this.stop()
        }
    }

    play() {
        if(!this.animation) this.seriously()
        this.gameObject?.play(this.animation)
    }

    playReverse() {
        if(!this.animation) this.seriously()
        this.gameObject?.playReverse(this.animation)
    }

    seriously() {
        if(!this.key || this.key == "") {
            this.key = this.gameObject.frame.name.slice(0, -4)

            if(this.end == 1) this.findEnd()
        }

        this.animation = this.createAnim()

        if (this.onHover) {
            this.gameObject.on('pointerover', () => this.onOver())
            this.gameObject.on('pointerout', () => this.onOut())
        } else if (this.autoPlay) {
            try {
                this.play()
            } catch (e) {
                //pass
            }
        }

        if(this.onCompleteCallback) {
            this.gameObject.on('animationcomplete', () => this.onCompleteCallback())
        }
    }

    stop() {
        this.gameObject.anims.stop()

        if (this.hideOnComplete) {
            this.gameObject.visible = false
        } else if (this.stopOnOut) {
            this.gameObject.setFrame(this.initialFrame)
        }
    }

    get localKey() {
        return `${this.atlas}/${this.key}_${this.start}_${this.end}_${this.frameRate}`
    }

    gotoAndPlay(_frame) {
        if(!this.animation) this.seriously()
        this.gameObject?.play({ key: this.localKey, startFrame: _frame })
    }

    createAnim() {
        // Prevent clashing keys across scenes
        let localKey = this.localKey

        // If animation already exists
        if (this.scene.anims.exists(localKey)) {
            return this.scene.anims.get(localKey)
        }

        // Create animation
        return this.scene.anims.create({
            key: localKey,
            frames: this.generateFrameNames(this.atlas, {
                prefix: `${this.key}`,
                start: this.start,
                end: this.end,
                zeroPad: 4
            }),
            frameRate: this.frameRate,
            repeat: this.repeat,
            repeatDelay: this.repeatDelay,
            showOnStart: this.showOnStart,
            hideOnComplete: this.hideOnComplete
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
