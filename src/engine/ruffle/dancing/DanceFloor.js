export default class DanceFloor {

    constructor(ruffle) {
        this.ruffle = ruffle
        this.world = ruffle.world

        this.roomId = 952

        this.addListeners()
    }
    
    addListeners() {
        this.world.network.events.on('dancing_get_game', this.handleGetGame, this)
        this.world.network.events.on('dancing_join_game', this.handleJoinGame, this)
        this.world.network.events.on('dancing_start_game', this.handleStartGame, this)
        this.world.network.events.on('dancing_player_action', this.handlePlayerAction, this)
    }

    destroy() {
        this.world.network.events.off('dancing_get_game', this.handleGetGame, this)
        this.world.network.events.off('dancing_join_game', this.handleJoinGame, this)
        this.world.network.events.off('dancing_start_game', this.handleStartGame, this)
        this.world.network.events.off('dancing_player_action', this.handlePlayerAction, this)
    }

    handleGetGame(args) {
        this.ruffle.player.dancing_call("gz", [this.roomId, ...args.data])
    }

    handleJoinGame(args) {
        this.ruffle.player.dancing_call("jz", [this.roomId, ...args.data])
    }

    handleStartGame(args) {
        this.ruffle.player.dancing_call("sz", [this.roomId, ...args.data])
    }

    handlePlayerAction(args) {
        this.ruffle.player.dancing_call("zm", [this.roomId, args.data])
    }

    async sendPacket(packet, args) {
        switch(packet) {
            case "gz":
            case "zr":
                this.world.network.send('dancing_get_game')
                break
            case "zd":
                if(isNaN(args[0])) return
                if(parseInt(args[0]) < 0 || parseInt(args[0]) > 3) return
                this.world.network.send('dancing_change_difficulty', { difficulty: parseInt(args[0]) })
                break
            case "zm":
                // kill me
                let score = await this.ruffle.player.dancing_get_score()
                let newScore = score.toString().split(',')[0]
                this.world.network.send('dancing_send_move', { score: newScore })
                //this.world.network.send('dancing_send_move', { score: args[0] })
                break
            case "cz":
                this.world.network.send('dancing_leave_game')
                break             
        }
    }

}