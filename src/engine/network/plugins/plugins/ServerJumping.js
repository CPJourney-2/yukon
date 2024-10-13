import Plugin from '../Plugin'


export default class ServerJumping extends Plugin {

    constructor(network) {
        super(network)

        this.events = {
            'server_jump': this.serverJump
        }
    }

    serverJump(args) {
        this.world.network.bypassConnectionLossDialog = true
        this.world.network.disconnect()
        this.world.network.bypassConnectionLossDialog = false
        this.world.network.lostConnection = false
        this.world.interface.showLoading(`Server Jumping to ${this.network.worldName == "Blizzard" ? "Sleet" : "Blizzard"}`)
        //this.world.interface.loading.showServerJumping()
        this.world.network.connectGame(this.network.worldName == "Blizzard" ? "Sleet" : "Blizzard", args.username, args.key, false)
        this.interface.main.handleShowInputs()
        if(this.world.client.modChat) this.world.client.toggleModChat()
    }

}
