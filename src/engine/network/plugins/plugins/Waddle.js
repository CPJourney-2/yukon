import Plugin from '../Plugin'


export default class Waddle extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'get_waddles': this.getWaddles,
            'join_waddle': this.joinWaddle,
            'cj_endgame_force': this.CJEndGame,
            'update_waddle': this.updateWaddle
        }

        this.types = {
            'card': 'CJLoadUI',
        }
    }

    joinWaddleCJ(args) {
        // this.world.client.sendMoveToSeat(args.table, args.seat)

        this.interface.loadWidget(this.types[args.game], true)
    }

    // Used to forcefully end a CJ Game
    CJEndGame(args) {
        this.interface.prompt.showInfo(args.reason, 'Okay',  () => {
            try {
                this.world.room._exit()
            } catch (e) {
                // pass
            }

            // this is under the assumption that the dojo will NEVER be full
            // this.network.send('join_room', { room: 320, x: 50, y: 50 })
            this.world.client.sendJoinLastRoom()

            this.interface.prompt.info.visible = false
        })
    }

    getWaddles(args) {
        this.world.room.setWaddles(args.waddles)
    }

    joinWaddle(args) {
        if(args.game == "card") {
            this.joinWaddleCJ(args)
            return
        }
        this.interface.main.waddle.show(args.waddle, args.seat, args.game)
    }

    updateWaddle(args) {
        if (this.world.room.isReady && args.game != "card") {
            this.world.room.updateWaddle(args.waddle, args.seat, args.username)
        }
    }

}
