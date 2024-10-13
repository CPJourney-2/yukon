import Plugin from '../Plugin'


export default class Error extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'error': this.error,
            'close_with_error': this.closeWithError,
            'broadcast': this.broadcast,
            'unlock_error': this.unlockError,
            'clocked_in': this.clockedIn,
        }

        // Todo: use error ids instead
        this.customHandlers = {
            'Sorry this room is currently full': () => this.fullRoom()
        }
    }

    closeWithError(args) {
        this.network.disconnect()

        let prompt = this.game.scene.getScene('InterfaceController').prompt
        prompt.showError(args.error, 'Reload', () => {
            location.reload();
        })
    }

    error(args) {
        if (args.error in this.customHandlers) {
            return this.customHandlers[args.error]()
        }

        this.interface.prompt.showError(args.error)
    }

    broadcast(args) {
        if (this.world.room) this.interface.prompt.showBroadcast(args.message, args.mode)

        this.world.scene.get('RuffleController').onBroadcast([args.message, args.mode])
        //setTimeout(() => this.world.scene.get('RuffleController').onBroadcast([args.message,args.mode]),6000)
    }

    fullRoom() {
        this.interface.prompt.showError('Sorry this room is currently full', 'Okay', () => {
            this.interface.showInterface()

            this.interface.prompt.error.visible = false
            this.interface.loadWidget('Map')
        })
    }

    unlockError(args) {
        this.interface.loadedWidgets.UnlockCodes.showInput()
        document.getElementById('unlockcodeInput').style.visibility = 'hidden'
        this.interface.prompt.showError(args.error, 'Okay', () => {
            this.interface.prompt.error.visible = false
            document.getElementById('unlockcodeInput').style.visibility = 'visible'
        })
    }

    clockedIn(data) {
        this.interface.main.showStaffPopup(data.username);
    }
}
