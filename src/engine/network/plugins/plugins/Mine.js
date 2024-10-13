import Plugin from '../Plugin'


export default class Mine extends Plugin {

    constructor(users, rooms) {
        super(users, rooms)
        this.events = {
            'mine_coins': this.mineCoins,
            'job_coins': this.jobCoins,
            'update_coins': this.updateCoins,
            'halloween_coins': this.partyCoins
        }
        this.jobRooms = [330, 110]
        this.mineRooms = [813, 805]
    }

    get client() {
        return this.world.client
    }

    mineCoins(args) {
        if (!this.mineRooms.includes(this.world.room.id)) {
            // player has changed rooms
            return
        }

        this.world.client.coins += args.coins
        this.world.room.showCoinRewardToPlayer(this.world.client.penguin, args.coins)
    }
    
    jobCoins(args) {
        if (!this.jobRooms.includes(this.world.room.id)) {
            // player has changed rooms
            return
        }

        this.world.client.coins += args.coins
        this.world.room.showCoinRewardToPlayer(this.world.client.penguin, args.coins)
    }

    updateCoins(args) {
        this.client.coins = args.coins
    }

    // PARTY SPECIFIC MINING: FOR HALLOWEEN
    partyCoins(args) {
        if (this.world.room.id !== 852 && this.world.room.id !== 330 && this.world.room.id !== 800 && this.world.room.id !== 805) return

        this.world.room.showMiningCandy(args)
    }
}
