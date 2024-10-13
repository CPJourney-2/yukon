import Plugin from '../Plugin'


export default class Chat extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'send_message': this.sendMessage,
            'send_safe': this.sendSafe,
            'send_stage': this.sendStage,
            'send_emote': this.sendEmote,
            'joke': this.sendJoke,
            'give_tour': this.giveTour,
            'filtered': this.filtered,
            'text_prediction': this.textPrediction,
            'cooldown': this.cooldownUpdate,
            'cooldown_cleared': this.cooldownCleared,
            'clear_chat': this.clearChat,
        }
    }

    sendMessage(args) {
        if (this.world.room.isReady) {
            this.interface.showTextBalloon(args.id, args.message, args.filtered, args.muted, args.modChat)
        }
    }

    filtered() {
        let balloon = this.world.client.penguin.balloon
        if (balloon) {
            balloon.setTint(0xFF806F)
        }
    }

    sendSafe(args) {
        if (this.world.room.isReady) {
            let message = this.interface.main.safe.safeMessagesMap[args.safe]

            this.interface.showTextBalloon(args.id, message, false, args.muted, args?.modChat)
        }
    }

    sendStage(args) {
        if (this.world.room.isReady) {
            let message = this.world.crumbs.stage_script_messages[args.message].message

            this.interface.showTextBalloon(args.id, message, false, args.muted, args?.modChat)
        }
    }

    sendEmote(args) {
        if (this.world.room.isReady) {
            this.interface.showEmoteBalloon(args.id, args.emote, args.muted, args.modChat)
        }
    }

    sendJoke(args) {
        if (this.world.room.isReady) {
            let joke = this.crumbs.jokes[args.joke]

            if (args.answer === true) {
                this.interface.showTextBalloon(args.id, joke.answer, false, args.muted, args?.modChat, false)
                if(this.world.room.onJokeAnswer) this.world.room.onJokeAnswer(args.id)
                return
            }

            this.interface.showTextBalloon(args.id, joke.joke, false, args.muted, args?.modChat, false)
        }
    }

    giveTour(args) {
        if (this.world.room.isReady) {
            this.interface.showTourBalloon(args.id,args.muted, args?.modChat)
        }
    }

    textPrediction(args) {
        this.interface.main.showTextPrediction(args.words)
    }

    cooldownUpdate(args) {
        const { time } = args;
        if (time === 0) return;
        this.interface.main.chatDisabled(time);
    }

    cooldownCleared(args) {
        this.interface.main.chatEnabled();
    }

    clearChat(args) {
        if (this.world.room.isReady) {
            this.interface.main.chatLog.clearMessages();

            for (let key in this.world.room.penguins) {
                let penguin = this.world.room.penguins[key];
                if (penguin.balloon) {
                    penguin.balloon.visible = false;
                }
            }
            if (!this.world.client.hasViewedInteraction("clearChatDismiss")) {
                this.interface.loadWidget('ModeratorPrompt')
            }
        }
    }
}
