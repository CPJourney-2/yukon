import BaseContainer from '@scenes/base/BaseContainer'

import ClothingLoader from '@engine/loaders/ClothingLoader'
import TransformLoader from '@engine/loaders/TransformLoader'
import PathEngine from './pathfinding/PathEngine'
import PenguinItems from './PenguinItems'

import adjustRedemptionItem from './frames/adjustRedemptionItem'


export default class Penguin extends BaseContainer {

    constructor(user, room) {
        super(room, user.x, user.y)

        // Assign user attributes
        Object.assign(this, user)
        this.room = room

        this.items = new PenguinItems(this)
        this.clothingLoader = new ClothingLoader(this)
        this.transformLoader = new TransformLoader(this)

        this.bodySprite
        this.penguinSprite
        this.transformSprite
        this.transformTintedSprite

        PathEngine.setStartPos(this)

        this.depth = this.y
        this.tween
        this.direction

        this.nameTag = this.penguinLoader.addName(this)

        // Active balloon
        this.balloon

        this.balloonTimer
        this.textBalloon
        this.emoteBalloon

        this.on('destroy', () => this.onDestroy())
        this.isButton = true

        // Function that is called after move completes, used to set a frame after move etc
        this.afterMove

        this.moveChainActive = false

        // The sprite for when herbert (transform 5) throws a snowball at you
        this.herbertSnowballSprite

        this.inverseFrameMappings = {
            17: 21,
            20: 18,
            22: 24,
            21: 17,
            18: 20,
            24: 22,
            14: 16,
            16: 14,
            12: 10,
            10: 12,
            13: 9,
            9: 13,
            29: 30,
            30: 29,
            27: 28,
            28: 27,
            1: 5,
            5: 1,
            6: 8,
            8: 6,
            4: 2,
            2: 4,
        };

        this.load()
    }

    get world() {
        return this.room.world
    }

    get crumbs() {
        return this.world.crumbs
    }

    get isTweening() {
        return (this.tween) ? true : false
    }

    get pos() {
        return { x: this.x, y: this.y }
    }

    get playerCard() {
        return this.interface.main.playerCard
    }

    get equipped() {
        return this.items.equipped
    }

    get isTransformed() {
        //if(this.transform === undefined || this.transform === null) return false
        return this.transform !== 0
    }
    
    get transformCrumb() {
        return this.crumbs.transformations[this.transform]
    }

    get equippedSprites() {
        return this.list.filter(child => {

            return child.type == 'Sprite'
                && child != this.bodySprite
                && child != this.penguinSprite 
                && child != this.transformSprite 
                && child != this.transformTintedSprite 
                && !child.texture.key.includes("puffles")
        })
    }

    get penguinLoader() {
        return this.world.penguinFactory.penguinLoader
    }

    get paperDollLoader() {
        return this.playerCard.paperDoll.paperDollLoader
    }

    get textures() {
        return this.room.textures
    }

    get anims() {
        return this.room.anims
    }

    get secretFramesCache() {
        return this.world.secretFramesCache
    }

    /**
     * this.body is a Phaser property and will result in an error on destruction,
     * so it must be deleted manually first.
     */
    onDestroy() {
        delete this.body
        delete this.pufflesprite
    }

    load() {
        this.penguinLoader.loadPenguin(this)
        this.clothingLoader.loadItems()

        this.room.add.existing(this)
    }

    loadItemAudio(id) { //audio is weird. idk how else to get this to work
        let sounds = this.crumbs.items[id].sfx
        if(!sounds) return

        let key = `sounds/items/${sounds.alias || id}`
        if (this.room.cache.audio.exists(key)) {
            return
        }

        this.room.load.audio(key, `assets/media/${key}.mp3`)
        this.room.load.start()
    }

    update(item, slot) {
        this.items.setItem(item, slot)

        if (slot == 'color' && this.bodySprite) {
            this.bodySprite.tint = this.world.getColor(item)
            if(this.isTransformed && this.transformCrumb.tinted && this.transformSprite) this.transformSprite.tint = this.world.getColor(item)
        }

        // Update the penguin object in the room
        this.room.penguins[this.id][slot] = item

        // Load item sprite
        if (slot in this.equipped) {
            this.clothingLoader.loadItem(item, slot)
            this.clothingLoader.start()
        }

        // Load item paper, only if card is active
        if (this.playerCard.visible && this.playerCard.id == this.id) {
            this.paperDollLoader.loadItem(item, slot)
            this.paperDollLoader.start()
        }

        // If buddy, update items for headshot
        this.room.interface.updateBuddyHeadshot(this)
    }

    transformation(id) {
        if(this.isTransformed && this.transformSprite) this.transformSprite.destroy()
        if(this.transformTintedSprite) this.transformTintedSprite.destroy()

        this.transform = id

        this.bodySprite.visible = !this.isTransformed
        this.penguinSprite.visible = !this.isTransformed
        for(let sprite of this.equippedSprites) {
            sprite.visible = !this.isTransformed
        }
        if(this.isTransformed) {
            this.transformLoader.loadTransform(this.transform)
            this.loadTransformAudio(this.transform)
        }
        if(!this.isTransformed) this.playFrame(this.frame)
    }

    loadTransformAudio(id) { //audio is weird. idk how else to get this to work
        let sounds = this.crumbs.transformations[id].sounds
        if(!sounds) return
		for (let sound of sounds) {
            let key = `penguin/transforms/sounds/${sound}`
            if (this.room.cache.audio.exists(key)) {
                continue //this.playMusic(music);
            }
    
            this.room.load.audio(key, `assets/media/${key}.mp3`);
            this.room.load.start();
    
            this.room.load.once(`filecomplete-audio-${key}`, () => {
                //this.playMusic(music);
            });
        }
    }

    move(x, y) {
        let path = PathEngine.getPath(this, { x: x, y: y })

        if (path) {
            this.addMoveTween(path)
        }
    }

    moveChain(movement) {
        if (this.tween) {
            this.removeTween(false)
        }

        this.setPos(movement.startAt[0],movement.startAt[1])
        this.onMoveUpdate()

        let style = "Linear"

        // Process object
        let tweens = movement.tweens
        let _tweens = []
        for(let i = 0; i < tweens.length; i++) {
            let tween = tweens[i]

            // Make sure it calculates between each tween spot
            let _x = tweens[i - 1] ? tweens[i - 1].to[0] : this.x
            let _y = tweens[i - 1] ? tweens[i - 1].to[1] : this.y

            let distance = Phaser.Math.Distance.Between(_x, _y, tween.to[0], tween.to[1])
            let duration = PathEngine.getDuration(distance, tween.speed || movement.speed)

            _tweens.push({
                duration: duration,
                ease: tween.ease || style,
                x: tween.to[0],
                y: tween.to[1],

                onStart: () => {
                    if(tween.frame) this.playFrame(tween.frame)
                },
                onUpdate: () => this.onMoveUpdate(),
            })
        }

        this.moveChainActive = true
        this.tween = this.room.tweens.chain({
            targets: this,

            tweens: _tweens,

            onComplete: () => {
                this.tween = null
                this.playFrame(movement.endFrame || this.direction)
                this.moveChainActive = false
            }
        })
    }

    setPos(x, y) {
        this.x = x
        this.y = y
    }

    /*========== Animations ==========*/

    getInverseFrame(frame) {
        if (this.world && this.world.room && this.world.room.inversePenguins) {
            return this.inverseFrameMappings[frame] || frame;
        }
    
        return frame;
    }

    playFrame(_frame, set = true) {
        _frame = this.getInverseFrame(_frame);
        // Moving penguin can only update when frames are movement frames (9-16)
        if (this.isTweening && (_frame < 9 || _frame > 16) && !this.moveChainActive) {
            return
        }

        // Get correct frame id
        let frame = ([25, 26].includes(_frame) && !this.isTransformed)
            ? this.getSecretFrame(_frame)
            : _frame

        this.createAnims(frame, frame != _frame || frame == 165)

        this.playAnims(frame)

        this.actualFrame = frame;

        // Frames that aren't set get set to 1
        this.frame = (set) ? _frame : 1
        this.theFrame = _frame
        if (this.pixel) this.pixel.playFrame(_frame) // REMOVE AFTER FAIR
    }

    createAnims(frame, isSecretFrame) {
        let penguinTexture = (isSecretFrame)
            ? `secret_frames/${frame}`
            : 'penguin'

        this.createAnim(`penguin_body_${frame}`, penguinTexture, frame, 'body/')
        this.createAnim(`penguin_${frame}`, penguinTexture, frame, 'penguin/')

        if (this.isTransformed && this.transformSprite) {
            this.createAnim(`${this.transformSprite.texture.key}_${frame}`, this.transformSprite.texture.key, frame, '', false, true)
            if(this.transformTintedSprite) this.createAnim(`${this.transformTintedSprite.texture.key}/color_${frame}`, this.transformTintedSprite.texture.key, frame, 'color/', false, true)
        }

        for (let sprite of this.equippedSprites) {
            this.createAnim(`${sprite.texture.key}_${frame}`, sprite.texture.key, frame, '', true)
        }

        let sprites = this.list.filter(child => child.type == 'Sprite')
        for (let sprite of sprites) {
            if (sprite.texture.key.includes("puffle")){
                if (isSecretFrame) frame = 26 // remove secret frames for piffles
                this.createAnim(`${sprite.texture.key}_${frame}`, sprite.texture.key, frame, '', true)
            }
        }
    }

    createAnim(key, textureKey, frame, prefix = '', checkItem = false, transform = false) {
        if (this.anims.exists(key)) {
            return
        }

        if (!this.textures.exists(textureKey)) {
            return
        }

        let animation = transform ? this.transformCrumb.frames[frame] : this.crumbs.penguin[frame]
        if(!animation) animation = this.crumbs.penguin[frame] // Fall back to data from penguin if transformation frame isn't defined

        if (checkItem && animation.items) {
            animation = this.checkAnimItems(animation, textureKey)
        }

        let frames = this.generateFrames(textureKey, frame, prefix, animation)

        let anim = this.anims.create({
            key: key,
            frames: frames,
            frameRate: 24,
            repeat: animation.repeat || 0
        })

        if (animation.chain) {
            anim.chainKeys = this.createChains(key, textureKey, frame, prefix, animation.chain)
        }
    }

    checkAnimItems(animation, textureKey) {
        let check = adjustRedemptionItem(textureKey.split('/').pop())

        for (let item in animation.items) {
            let secretCheck = adjustRedemptionItem(item)

            if (check == secretCheck) {
                return animation.items[item]
            }
        }

        return animation
    }

    generateFrames(textureKey, frame, prefix, animation) {
        let frames = Phaser.Utils.Array.NumberArray(animation.start || 1, animation.end)

        let config = {
            prefix: `${prefix}${frame}_`,
            frames: frames
        }

        let textureFrames = this.textures.get(textureKey).getFrameNames(false)

        // Filter out null frames
        config.frames = config.frames.filter((i) => {
            return textureFrames.includes(`${prefix}${frame}_${i}`)
        })

        return this.anims.generateFrameNames(textureKey, config)
    }

    createChains(key, textureKey, frame, prefix, config) {
        let chainKeys = []

        for (let i = 0; i < config.length; i++) {
            let chain = config[i]

            let chainKey = `${key}/chain_${i + 1}`

            frames = this.generateFrames(textureKey, frame, prefix, chain)

            this.anims.create({
                key: chainKey,
                frames: frames,
                frameRate: 24,
                repeat: chain.repeat || 0
            })

            chainKeys.push(chainKey)
        }

        return chainKeys
    }

    playAnims(frame) {
        if (this.openSprite != null && frame > 1) {
            return
        }

        if (this.pixel) return // REMOVE AFTER FAIR - if pixel penguin active (party8)

        if(!this.isTransformed) {
            this.playAnim(this.bodySprite, `penguin_body_${frame}`)
            this.playAnim(this.penguinSprite, `penguin_${frame}`)

            for (let sprite of this.equippedSprites) {
                let key = `${sprite.texture.key}_${frame}`
    
                this.playAnim(sprite, key)
            }
        } else {
            if(this.transformSprite) this.playAnim(this.transformSprite, `${this.transformSprite.texture.key}_${frame}`)
            if(this.transformTintedSprite) this.playAnim(this.transformTintedSprite, `${this.transformSprite.texture.key}/color_${frame}`)
        }

        let sprites = this.list.filter(child => child.type == 'Sprite')
        for (let sprite of sprites) {
            if (sprite.texture.key.includes("puffle")){
                
                if(!this.pufflesprite) {
                    sprite.visible = false;
                    return;
                }
                
                if(this.puffleHidden) {
                    return;
                }
                
                if (frame >= 31) frame = 26

                let key = `${sprite.texture.key}_${frame}`

                this.playAnim(sprite, key)
            }
        }
    }

    playAnim(sprite, key) {
        if(!sprite.anims) {
            // sprite not loaded before penguin left the room
            return
        }

        if (!this.checkAnim(key)) {
            return sprite.visible = false
        }

        sprite.visible = true
        sprite.anims.play(key)

        // Reset current chain queue
        sprite.chain()

        let anim = this.anims.get(key)

        if (anim.chainKeys) {
            this.playChain(sprite, anim)
        }
    }

    playChain(sprite, anim) {
        let keys = anim.chainKeys

        for (let key of keys) {
            if (this.checkAnim(key)) {
                sprite.chain(key)
            }
        }
    }

    checkAnim(key) {
        let animation = this.anims.get(key)
        return animation && animation.frames.length > 0
    }

    getSecretFrame(frame) {
        let equipped = this.items.equippedFlat
        let frameString = this.getSecretFrameString(frame, equipped)

        if (this.secretFramesCache[frameString]) {
            return this.secretFramesCache[frameString]
        }

        for (let secret of this.crumbs.secret_frames[frame]) {
            if (this.checkSecretFrames(equipped, secret)) {

                this.secretFramesCache[frameString] = secret.secret_frame

                return secret.secret_frame
            }
        }

        return frame
    }

    checkSecretFrames(equipped, secret) {
        for (let item in equipped) {
            let check = adjustRedemptionItem(equipped[item])
            let secretCheck = adjustRedemptionItem(secret[item])

            if (check != secretCheck) {
                return false
            }
        }

        return secret.secret_frame in this.crumbs.penguin
            && this.checkSecretFrameTextures(secret.secret_frame)
    }

    checkSecretFrameTextures(frame) {
        return this.textures.exists(`secret_frames/${frame}`)
    }

    getSecretFrameString(frame, equipped) {
        let slots = this.items.slots.filter(slot => slot in equipped)

        let items = slots.map(slot => adjustRedemptionItem(equipped[slot]))

        return `${frame},${items.toString()}`
    }

    /*========== Tweening ==========*/

    addMoveTween(path) {
        if (this.tween) {
            this.removeTween(false)
        }

        let style = "Linear"

        try {
            if (this.room.shouldSlide) {
                path.duration *= 1.15
                style = "Quad.easeInOut"
            }
        } catch (err) {
            // pass
        }

        this.playFrame(this.direction + 8) // + 8 for walking frame id

        if (this.herbertSnowballSprite) {
            this.herbertSnowballSprite.destroy()
            this.herbertSnowballSprite = null
        }

        this.tween = this.room.tweens.add({
            targets: this,
            duration: path.duration,
            ease: style,

            x: Math.round(path.target.x),
            y: Math.round(path.target.y),

            onUpdate: () => this.onMoveUpdate(),
            onComplete: () => this.onMoveComplete()
        })
    }

    onMoveUpdate() {
        this.depth = this.y + 1

        if (this.nameTag) {
            this.updateNameTag()
        }

        if (this.balloon) {
            this.updateBalloon()
        }

        // check for triggers when penguin is moving
        if (this.room.walkThrough && this.id == this.world.client.penguin.id) {
            this.checkWalkTriggers();
        }

        this.room.onPenguinMoveUpdate()

        // Puffles
        let xoffset = this.x - this.prevX
        let yoffset = this.y - this.prevY

        if (this.pufflesprite && this.pufflesprite.animating) {
            this.pufflesprite.x -= xoffset
            this.pufflesprite.y -= yoffset

        }

        this.prevX = this.x
        this.prevY = this.y
    }
    
    /**
     * Check whether the penguin is over a trigger and execute the trigger if it is
     */
    checkWalkTriggers(){
        let x = this.x
        let y = this.y
        for (let trigger of this.room.walkThrough) {
            if (this.room.matter.containsPoint(trigger, x, y)) {
                if (trigger.callback) return trigger.callback()
            }
        }
    }

    /**
     * Check whether the penguin is on a global trigger. Add them to occupants if so
     */
    checkGlobalTriggers() {
        let x = this.x
        let y = this.y
        if (!this.room.globalTriggers) return
        for (let trigger of this.room.globalTriggers) {
            if (this.room.matter.containsPoint(trigger, x, y) && !trigger.occupants.includes(this.id)) {
                trigger.occupants.push(this.id)
                if (trigger.callback) {
                    trigger.callback(trigger.occupants)
                    continue
                  }
            } else if(!this.room.matter.containsPoint(trigger, x, y) && trigger.occupants.includes(this.id)) {
                //Penguin was on the trigger but they no longer are
                trigger.occupants = trigger.occupants.filter(id => id !== this.id)
                if (trigger.callback) {
                    trigger.callback(trigger.occupants)
                    continue
                  }
            }
        }
    }

    onMoveComplete() {
        this.removeTween()

        this.room.onPenguinMoveComplete(this.id)

        this.checkGlobalTriggers()

        if (this.afterMove) {
            this.afterMove()
            this.afterMove = null
        }
    }

    updateNameTag() {
        this.nameTag.x = this.x
        this.nameTag.y = this.y + 40
        this.nameTag.depth = this.depth + 2000
    }

    updateBalloon() {
        //this.balloon.x = this.x
        //this.balloon.y = this.y - 95
        this.balloon.updatePosition()
    }

    removeTween(playFrame = true) {
        if (!this.tween) {
            return
        }

        this.tween.remove()
        this.tween = null

        if (playFrame) {
            this.playFrame(this.direction)
        }
    }

    // Puffles
    hidePuffle() {
        if(!this.pufflesprite)  {
            return;
        }
        this.pufflesprite.visible = false;
        this.puffleHidden = true;
    }

    showPuffle() {
        if(!this.pufflesprite)  {
            return;
        }
        this.pufflesprite.visible = true;
        this.puffleHidden = false;
    }

}
