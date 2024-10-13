import Penguin from './Penguin'

import PathEngine from './pathfinding/PathEngine'


export default class NPCPenguin extends Penguin {

    constructor(user, room) {
        super(user, room)

        this.isNPC = true
    }

    move(x, y, frame = null) {
        if (frame) {
            this.afterMove = () => this.playFrame(frame)
        } else {
            this.afterMove = null
        }

        let path = PathEngine.getPath(this, { x, y })

        if (path) {
            this.addMoveTween(path)

            this.scene.events.emit('move_start', { x: x, y: y })
        }
    }

    goto(x,y) {
        this.x = x
        this.y = y

        this.depth = this.y + 1

        if (this.nameTag) {
            this.updateNameTag()
        }

        if (this.balloon) {
            this.updateBalloon()
        }

        this.prevX = this.x
        this.prevY = this.y
    }

    onMoveComplete() {
        this.removeTween()

        if (this.afterMove) {
            this.afterMove()
            this.afterMove = null
        }
    }

    setHead(item) {
        this.update(item, 'head')
    }

    setFace(item) {
        this.update(item, 'face')
    }

    setNeck(item) {
        this.update(item, 'neck')
    }

    setBody(item) {
        this.update(item, 'body')
    }

    setHand(item) {
        this.update(item, 'hand')
    }

    setFeet(item) {
        this.update(item, 'feet')
    }

    setColor(item) {
        this.update(item, 'color')
    }

    setTransform(id) {
        this.transformation(id)
    }

    update(item, slot) {
        this.items.setItem(item, slot)

        if (slot == 'color' && this.bodySprite) {
            this.bodySprite.tint = this.world.getColor(item)
            if(this.isTransformed && this.transformCrumb.tinted && this.transformSprite) this.transformSprite.tint = this.world.getColor(item)
        }

        // Load item sprite
        if (slot in this.equipped) {
            this.clothingLoader.loadItem(item, slot)
            this.clothingLoader.start()
        }
    }

    say(text) {
        this.interface.main.balloonFactory.showTextBalloon(this, text, false, false, false, false, true)
    }

    emote(emote) {
        this.interface.main.balloonFactory.showEmoteBalloon(this, emote, false, false, true)
    }

    onClick() {
        // To be overwritten. Runs when the penguin is clicked
    }

}
