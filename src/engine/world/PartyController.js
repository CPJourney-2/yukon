const FAIR_GAMES = ["feedapuffle", "ringthebell", "memorycardgame", "pufflepaddle", "puffleshuffle", "pufflesoaker", "spinthewheel", "balloonpop"]

const EMOTE_POINTS = {
	'Beach': { x: 1120, y: 575 },
	'Dock': { x: 1100, y: 620 },
	'Plaza': { x: 600, y: 740 },
	'Village': { x: 385, y: 790 },
	'Mtn': { x: 1125, y: 475 }
}

export default class PartyController {

	constructor(world) {
		/**
		 * @type {import('@engine/world/WorldController').default}
		 */
		this.world = world

		this.id
		
		
		this.showMainIcon = true
		this.showQuestsIcon = true

		this.partyCoinCurrency = 'tickets'
		
		this._partyItems = {};
		this.cornMazeVisitedRooms = [];

		this.cookies = {
			earnedTickets: 0,
			playedMinigames: [],
			emotedRooms: []
		}

		this.network.events.on('add_item', this.handleAddItem, this)
		this.network.events.on('add_party_coins', this.handleAddItem, this)

		// Check for dancing clown penguins (secret frame 40) for quest 72
		this.world.events.on('roomready', () => {
			if (this.world.room) this.world.room.events.on('update', () => {
				if (!this.world.room.penguins) return
				let clownPenguins = 0
				for(let penguin of Object.values(this.world.room.penguins)) {
					if (!penguin) continue
					if (penguin.getSecretFrame(26) == 40) clownPenguins++
					if (clownPenguins >= 30) this.world.client.questComplete(72)
				}
			})
		})
	}

	get partyActive() {
		return this.id !== null
	}

	get interface() {
		return this.world.interface
	}

	get network() {
		return this.world.network
	}

	get coasterWontRun() {
		// https://newdocs.phaser.io/docs/3.80.0/Phaser.Device
		return this.world.sys.game.device.browser.safari || this.world.sys.game.device.browser.mobileSafari
	}

	init() {
		// Runs on Main.js create
		if (!this.partyActive) return

		// too lazy to reposition in the scene lolololololololol
		this.interface.main.partyIcon.x -= 110
		this.interface.main.ticketIndicator.setScale(0.8)

		this.interface.main.partyIcon.ticketCount.text = this.world.client.partyCoins

		if (!this.world.client.hasViewedInteraction('rookie_fair_intro')) {
			this.interface.loadWidget('RookieDialogue')
		}
	}

	// Keep track of quests 62 and 74 for earning 300 and 1000 tickets respectively
	addTicketsForQuests(tickets) {
		this.cookies.earnedTickets += tickets

		if (this.cookies.earnedTickets >= 300) {
			this.world.client.questComplete(62)
		}
		if (this.cookies.earnedTickets >= 1000) {
			this.world.client.questComplete(74)
		}
	}

	// Add listener for the SWF for when you get 500 points in puffle soaker
	setupQuest69() {
		this.world.ruffle.addEventListener('pflskrpts', () => {
			this.world.events.once('roomready', () => this.world.client.questComplete(69))
		})
	}

	// Add listener for the SWF for when you feed a purple puffle
	setupQuest77() {
		this.world.ruffle.addEventListener('fed_purple_puffle', () => {
			this.world.events.once('roomready', () => this.world.client.questComplete(77))
		})
	}

	checkQuest68(minigame) {
		if (this.cookies.playedMinigames.includes(minigame)) return
		if (!FAIR_GAMES.includes(minigame)) return

		this.cookies.playedMinigames.push(minigame)

		if(FAIR_GAMES.every(game => this.cookies.playedMinigames.includes(game))) {
			this.world.client.questComplete(68)
		}
	}

	checkEmoteQuest(emote) {
		if (!this.world.room) return
		const room = this.world.room.key
        if ([13, 24, 26, 27, 28, 29].includes(emote) && Object.keys(EMOTE_POINTS).includes(room)) {
            if (this.cookies.emotedRooms.includes(room)) return

			let point = EMOTE_POINTS[room]

            if (point) {
				const penguin = this.world.client.penguin
                let delta = (Math.abs(point.x - penguin.x) + Math.abs(point.y - penguin.y)) / 2

                if (delta <= 75) {
                    this.cookies.emotedRooms.push(room)
					if(Object.keys(EMOTE_POINTS).every(r => this.cookies.emotedRooms.includes(r))) {
						this.world.client.questComplete(70)
					}
                }
            }
        }
    }

	worldTicketsEarned(tickets) {
		this.interface.main.ticketIndicator.show(tickets)
		this.sendAddPartyCoins(tickets)
	}

	sendAddPartyCoins(tickets) {
		this.network.send('add_party_coins', { partyCoins: tickets })
	}

	handleAddItem(args) {
		if(args.partyCoins != undefined) {
			if(isNaN(args.partyCoins)) args.partyCoins = 0
			this.world.client.partyCoins = args.partyCoins
			this.interface.main.partyIcon.ticketCount.text = args.partyCoins
		}
	}

}
