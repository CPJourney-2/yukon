import EmoteBalloon from './EmoteBalloon'
import TextBalloon from './TextBalloon'


export default class BalloonFactory {

    constructor(main) {
        // Main interface
        this.main = main

        // Balloon destruction delay
        this.delay = 4500

        this.offsetY = -95
    }

    get penguins() {
        return this.main.world.room.penguins
    }

    /**
     * Shows an emote balloon.
     *
     * @param {number} id - Penguin ID
     * @param {number} emote - Emote ID
     * @param {boolean} muted - Should be muted
     */
    showEmoteBalloon(id, emote, muted=false, modOnly=false, npc=false) {
        if (!emote) {
            return
        }

        let penguin
        if (npc) {
            penguin = id
        } else {
            penguin = this.penguins[id]
        }

        if (!penguin || !penguin.visible) {
            return
        }

        if (!penguin.emoteBalloon) {
            penguin.emoteBalloon = new EmoteBalloon(penguin)
            penguin.room.add.existing(penguin.emoteBalloon)
        }

        penguin.emoteBalloon.setContent(emote,muted,modOnly)
        this.updateBalloon(penguin, penguin.emoteBalloon)
    }

    /**
     * Shows a text balloon.
     *
     * @param {number} id - Penguin ID
     * @param {string} text - Message to be displayed
     */
    showTextBalloon(id, text, filtered=false, muted=false, modOnly=false, showOnChatLog=true, npc=false) {
        if (!text) {
            return
        }

        let penguin
        if (npc) {
            penguin = id
        } else {
            penguin = this.penguins[id]
        }
        if (!penguin) {
            return
        }

        if (!npc) penguin.room.onPenguinSendMessage(id)

        if (showOnChatLog && !npc) {
            this.main.chatLog.addMessage(penguin.id, penguin.displayName, text, filtered, muted, modOnly)
            this.main.world.room.addMessage(penguin.id, text, filtered, muted, modOnly)
        }

        if (!penguin.visible) {
            return
        }

        if (!penguin.textBalloon) {
            penguin.textBalloon = new TextBalloon(penguin)
            penguin.room.add.existing(penguin.textBalloon)
        }

        penguin.textBalloon.setContent(text, filtered, muted, modOnly)
        this.updateBalloon(penguin, penguin.textBalloon, modOnly)
    }

    updateBalloon(penguin, balloon, modOnly) {
        if (penguin.balloon) {
            penguin.balloon.visible = false
        }

        // Client balloons sorted higher
        balloon.depth = (penguin.isClient) ? 3003 : 3000
        
        if(this.main.world.isMascot(penguin.id)) {
            if (!(balloon instanceof EmoteBalloon)) {
                //todo: have this changeable per mascot - implementation idea: tint field in mascots table
                //balloon.setTint(0xe0dfe0)
                balloon.setTint(0xC2E6FF)
                balloon.depth = 3001
            }
        }

        if (modOnly) balloon.depth = 3002

        balloon.visible = true
        penguin.balloon = balloon

        this.addTimer(penguin, balloon)
    }

    addTimer(penguin, balloon) {
        let config = {
            delay: this.delay,
            callback: () => this.removeBalloon(penguin, balloon)
        }

        if (penguin.balloonTimer) {
            penguin.balloonTimer.reset(config)
            penguin.room.time.addEvent(penguin.balloonTimer)

            return
        }

        penguin.balloonTimer = penguin.room.time.addEvent(config)
    }

    removeBalloon(penguin, balloon) {
        balloon.visible = false
        penguin.balloon = null
    }

}
