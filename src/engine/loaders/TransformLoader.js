import BaseLoader from './BaseLoader'

import TransformSpriteFactory from './TransformSpriteFactory'

import adjustRedemptionItem from '@engine/world/penguin/frames/adjustRedemptionItem'


export default class TransformLoader extends BaseLoader {

    constructor(penguin) {
        super(penguin.room)

        this.penguin = penguin

        this.baseURL =  (process.env.NODE_ENV === 'development' || true) ? '/assets/media/penguin/transforms/sprites/' : CDN_URL + "assets/media/penguin/transforms/sprites/"
        this.keyPrefix = 'penguin/transforms/sprites/'
    }

    loadTransform(transformId) {
        if (transformId == 0) {
            return //this.removeItem(slot)
        }

        let key = `transformation_${transformId}`

        if (this.checkComplete('json', key, () => {
            this.onFileComplete(transformId, key)
        })) {
            return
        }

        this.multiatlas(key, `${transformId}.json`)

        this.start()
    }

    onFileComplete(item, key) {
        if (!this.textureExists(key)) {
            return
        }

        this.addTransform(item)
    }

    loadSecretFrames(secretFrames, slot, item) {
        this.framesLoader.loadFrames(item, secretFrames, () => {
            this.addItem(slot, item)
        })
    }

    addTransform(transformId) {
        let key = `transformation_${transformId}`

        let crumb = this.penguin.transformCrumb

        // depth + 1 to ensure items are loaded on top of penguin body
        if(crumb.tinted_sprite) this.penguin.transformTintedSprite = TransformSpriteFactory.create(this.penguin, key, 'color', 98)
        this.penguin.transformSprite = TransformSpriteFactory.create(this.penguin, key, 'body', 99)

        // Tinted
        if(crumb.tinted) {
            this.penguin.transformSprite.setTint(this.penguin.crumbs.colors[this.penguin.color - 1])
        }

        this.penguin.sort('depth')
        this.penguin.playFrame(this.penguin.frame)

        //Sound Effects
        if(!crumb.sounds) return
        this.penguin.transformSprite.on('animationupdate',() => {
            for(let frame of Object.keys(crumb.frames)) {
                if(this.penguin.theFrame == frame && crumb.frames[frame].sounds) {
                    for(let soundCrumb of crumb.frames[frame].sounds) {
                        if(this.penguin.transformSprite.anims.currentFrame.index == soundCrumb.subframe) {
                            this.penguin.room.soundManager.playSfx(`penguin/transforms/sounds/${soundCrumb.sound}`)
                        }
                    }
                }
            }
        })
    }

}
