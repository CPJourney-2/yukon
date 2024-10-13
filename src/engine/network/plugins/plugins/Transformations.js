import Plugin from '../Plugin'


export default class Transformations extends Plugin {

	constructor(network) {
		super(network)

		this.events = {
			'transform_player': this.transformPlayer
		}
	}

	transformPlayer(args) {
		if (!this.world.room.isReady) {
			return this.world.room.updateWaiting(args.id, { transform: args.transform })
		}

		this.world.room.penguins[args.id].transformation(args.transform)
		this.world.room.onPenguinUpdate(args.id)
		this.interface.refreshPlayerCardById(args.id)
	}

}
