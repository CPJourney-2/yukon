import Balloon from './Balloon'


export default class EmoteBalloon extends Balloon {

    constructor(penguin) {
        super(penguin)

        let width = 128
        let height = 68

        this.emote = this.addEmote()

        this.addBalloon(width, height)
        this.addPointer(width, 'balloon-emote')
        this.add(this.emote)
    }

    addEmote() {
        let emoteSprite = this.scene.add.image(0, -25, 'main', 'emotes/1')

        return emoteSprite
    }

    setContent(emote,muted=false,modOnly=false) {
        this.updatePosition()

        let frame = `emotes/${emote}`

        // If emote frame doesn't exist, set to 1
        if (!this.world.textures.get('main').has(frame)) {
            if (this.world.textures.get('fair-emotes').has(frame)) {
                this.emote.setTexture('fair-emotes', `emotes/${emote}`)
                return
            } else {
                frame = 'emotes/1'
            }
        }
        
        if(muted) this.setTint(0xFFF196)
        if(modOnly) this.setTint(0x00FFFF)
        else this.setTint(0xFFFFFF)

        this.emote.setTexture('main', `emotes/${emote}`)
        
        this.emote.setFrame(frame)
    }

    setTint(tint) {
        this.balloon.setTint(tint)
        this.pointer.setTint(tint)
    }
}
