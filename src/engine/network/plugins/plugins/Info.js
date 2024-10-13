import Plugin from '../Plugin'


export default class Info extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'info': this.info,
            'toggle_streamer': this.toggleStreamer,
        }
    }

    info(args) {
        this.interface.prompt.showInfo(args.message)
    }

    toggleStreamer(args) {
        this.world.client.streamer = args.streamer
        
        if (this.world.network.worldSafe) this.scene.keys.Main.setSafeChatMode(args.streamer)
        
        if(args.streamer) {
            //Streamer mode ENABLED, hide all mod related things
            if(this.world.client.modChat) this.world.client.toggleModChat()
            this.interface.main.chatInput.regex = /[^a-zA-Z!?,'. ]/g
        } else {
            //Streamer mode DISABLED, revert the changes
            this.interface.main.chatInput.regex = /[^ -~]/gi
        }
    }
}
