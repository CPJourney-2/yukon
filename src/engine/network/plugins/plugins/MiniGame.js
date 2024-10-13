import Plugin from '../Plugin'


export default class MiniGame extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'game_over': this.gameOver,
            'gg': this.gg,
        }
    }

    gameOver(args) {
        if (this.world.client.activeSeat) {
            this.world.events.once('leftseat', () => this.gameOver(args))
            return
        }

        if (args && args.room && args.room === 'thinastro') this.world.playedThinAstro = true;

        // Difference in coins = coins earned
        if (args && args.gift === false) {
            this.interface.prompt.showCoin(args.coins - this.world.client.coins, args.totalStamps, args.collectedStamps, args.room, args.stampList, args.doubleCoins)
        } else {
            this.interface.prompt.showCoin(args.coins - this.world.client.coins, args.totalStamps, args.collectedStamps, args.room, args.stampList)
        }

        this.world.client.coins = args.coins

        this.interface.refreshPlayerCard()
        this.interface.updateCatalogCoins(args.coins)
    }

    gg(args) {
        this.world.client.coins += 25
        this.interface.main.coinTween()
        this.interface.refreshPlayerCard()
    }

}
