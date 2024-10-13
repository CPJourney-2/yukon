import BaseContainer from '@scenes/base/BaseContainer'

import { Animation, Button, DraggableContainer, Interactive } from '@components/components'

import TreasureHuntPlayer from './TreasureHuntPlayer'
import SandBox from './SandBox'


export const preload = {
    key: 'treasurehunt-pack',
    url: 'assets/media/games/treasurehunt/treasurehunt-pack.json',
    loadString: 'treasurehunt'
}

/* START OF COMPILED CODE */

export default class TreasureHunt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 758, y ?? 447);

        /** @type {TreasureHuntPlayer} */
        this.player2;
        /** @type {TreasureHuntPlayer} */
        this.player1;
        /** @type {Phaser.GameObjects.Text} */
        this.gemCount;
        /** @type {Phaser.GameObjects.Text} */
        this.coinCount;
        /** @type {Phaser.GameObjects.Text} */
        this.totalCount;
        /** @type {SandBox} */
        this.board;
        /** @type {Phaser.GameObjects.Sprite} */
        this.emeraldBonus;
        /** @type {Phaser.GameObjects.Container} */
        this.emeraldDiscovered;
        /** @type {Array<any>} */
        this.placers;


        // window
        const window = scene.add.image(1, 0, "treasurehunt", "windowbg");
        this.add(window);

        // bluerectangle
        const bluerectangle = scene.add.roundedRectangleImage(0, 17, 600, 730);
        bluerectangle.fillColor = 1135259;
        bluerectangle.isStroked = false;
        bluerectangle.radiusTopLeft = 25;
        bluerectangle.radiusTopRight = 25;
        bluerectangle.radiusBottomLeft = 25;
        bluerectangle.radiusBottomRight = 25;
        this.add(bluerectangle);

        // boxbg
        const boxbg = scene.add.image(3, 76, "treasurehunt", "boxbg");
        this.add(boxbg);

        // player2
        const player2 = new TreasureHuntPlayer(scene, -248, -248);
        this.add(player2);

        // player1
        const player1 = new TreasureHuntPlayer(scene, -248, -311);
        this.add(player1);

        // icons_coin
        const icons_coin = scene.add.image(-65, 350, "treasurehunt", "icons/coin");
        this.add(icons_coin);

        // gemCount
        const gemCount = scene.add.text(-227, 336, "", {});
        gemCount.text = "Gems: 0";
        gemCount.setStyle({ "fixedWidth":100,"fontFamily": "Burbank Small", "fontSize": "25px" });
        this.add(gemCount);

        // icons_gem
        const icons_gem = scene.add.image(-254, 350, "treasurehunt", "icons/gem");
        this.add(icons_gem);

        // coinCount
        const coinCount = scene.add.text(-41, 336, "", {});
        coinCount.text = "Coins: 0";
        coinCount.setStyle({ "fixedWidth":120,"fontFamily": "Burbank Small", "fontSize": "25px" });
        this.add(coinCount);

        // icons_chest
        const icons_chest = scene.add.image(121, 350, "treasurehunt", "icons/chest");
        this.add(icons_chest);

        // totalCount
        const totalCount = scene.add.text(148, 336, "", {});
        totalCount.text = "Total: 0";
        totalCount.setStyle({ "fixedWidth":140,"fontFamily": "Burbank Small", "fontSize": "25px" });
        this.add(totalCount);

        // board
        const board = new SandBox(scene, -184, -104);
        this.add(board);

        // emeraldDiscovered
        const emeraldDiscovered = scene.add.container(21.315185546875, -50.427581787109375);
        emeraldDiscovered.visible = false;
        this.add(emeraldDiscovered);

        // emeraldBlock
        const emeraldBlock = scene.add.roundedRectangleImage(-21, 68, 600, 730);
        emeraldBlock.fillColor = 0;
        emeraldBlock.fillAlpha = 0.2;
        emeraldBlock.isStroked = false;
        emeraldBlock.radiusTopLeft = 25;
        emeraldBlock.radiusTopRight = 25;
        emeraldBlock.radiusBottomLeft = 25;
        emeraldBlock.radiusBottomRight = 25;
        emeraldDiscovered.add(emeraldBlock);

        // emeraldBonus
        const emeraldBonus = scene.add.sprite(-21, 65, "treasurehunt", "emeraldBonus0001");
        emeraldDiscovered.add(emeraldBonus);

        // x_button
        const x_button = scene.add.image(273, -322, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(273, -324, "main", "blue-x");
        this.add(blue_x);

        // lists
        const placers = [];

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = window;

        // emeraldBlock (components)
        new Interactive(emeraldBlock);

        // emeraldBonus (components)
        const emeraldBonusAnimation = new Animation(emeraldBonus);
        emeraldBonusAnimation.key = "emeraldBonus";
        emeraldBonusAnimation.end = 42;
        emeraldBonusAnimation.repeat = 0;
        emeraldBonusAnimation.autoPlay = false;

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.close();
        x_buttonButton.activeFrame = true;

        this.player2 = player2;
        this.player1 = player1;
        this.gemCount = gemCount;
        this.coinCount = coinCount;
        this.totalCount = totalCount;
        this.board = board;
        this.emeraldBonus = emeraldBonus;
        this.emeraldDiscovered = emeraldDiscovered;
        this.placers = placers;

        /* START-USER-CTR-CODE */
        this._dontHideInputs = true

        this.scene = scene

        this.rowsCleared = []
        this.colsCleared = []
        this.rareTreasures = 0

        this.emeraldBonus.on('animationcomplete',() => {
            this.emeraldDiscovered.visible = false
        })
        //this.createButtons()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get isMyTurn() {
        return this.currentTurn === this.myTurn
    }

    addListeners() {
        this.network.events.on('get_game', this.handleGetGame, this)
        this.network.events.on('join_game', this.handleJoinGame, this)
        this.network.events.on('update_game', this.handleUpdateGame, this)
        this.network.events.on('start_game', this.handleStartGame, this)
        this.network.events.on('send_move', this.handleSendMove, this)
        this.network.events.on('close_game', this.handleCloseGame, this)
    }

    removeListeners() {
        this.network.events.off('get_game', this.handleGetGame, this)
        this.network.events.off('join_game', this.handleJoinGame, this)
        this.network.events.off('update_game', this.handleUpdateGame, this)
        this.network.events.off('start_game', this.handleStartGame, this)
        this.network.events.off('send_move', this.handleSendMove, this)
        this.network.events.off('close_game', this.handleCloseGame, this)
    }

    show() {
        this.map = null
        this.myTurn = null
        this.currentTurn = 1
        this.started = false

        this.visible = true

        this.addListeners()
        this.network.send('get_game')
    }

    close() {
        for(let treasure of this.board.treasures) clearTimeout(treasure.startAnimTimeout)

        if (!this.started) {
            return this.sendLeaveTable()
        }

        this.interface.prompt.showWindow(this.getString('quit_game_prompt'), 'dual', () => {
            this.sendLeaveTable()

            this.interface.prompt.window.visible = false
        })
    }

    handleGetGame(args) {
        this.map = args.map
        this.board.setupMap(args.map)

        try {
            for(let r = 0; r < args.rowsCleared.length; r++) {
                if(args.rowsCleared[r]) this.clearRow(r + 1)
            }
            for(let c = 0; c < args.columnsCleared.length; c++) {
                if(args.columnsCleared[c]) this.clearColumn(c + 1)
            }
    
            for (let user of args.users) {
                this.setPlayer(user, args.users.indexOf(user) + 1)
            }
        } catch(e) {
            console.error(`uwu chris's code didnt work ${e}`)
        }

        this.player1.setLives(args.lives[0])
        this.player2.setLives(args.lives[1])

        this.network.send('join_game')
    }

    handleJoinGame(args) {
        this.myTurn = args.turn
    }

    handleUpdateGame(args) {
        this.setPlayer(args.username, args.turn)
    }

    handleStartGame() {
        this.started = true

        this.updateButtons()

        this.player1.setActive()
        this.player2.setActive()
    }

    handleSendMove(args) {
        this.currentTurn = args.turn

        this.updateLives(args.lives)
        this.updateTurn(args.turn)
        this.coinCount.text = `Coins: ${args.coinsDiscovered}`
        this.gemCount.text = `Gems: ${args.gemsDiscovered + args.emeraldDiscovered}`
        this.totalCount.text = `Total: ${args.coinsDiscovered + (args.gemsDiscovered * 25) + (args.emeraldDiscovered * 100)}`

        //Show emerald popup
        if(args.emeraldDiscovered > this.rareTreasures) {
            this.emeraldDiscovered.visible = true
            this.emeraldBonus.__Animation.play()
        }
        this.rareTreasures = args.emeraldDiscovered

        if(args.row != null) this.clearRow(args.row + 1)
        if(args.column != null) this.clearColumn(args.column + 1)

        if(this.player1.lives <= 0 && this.player2.lives <= 0) this.board.hideAllDigBtns()
    }

    handleCloseGame(args) {
        if (args.username) {
            let text = this.getFormatString('player_quit_prompt', args.username)
            this.interface.prompt.showWindow(text, 'single')
        }

        this.leaveTable()
    }

    sendClearColumn(column) {
        if (!this.isMyTurn || this.myTurn !== 2) return

        this.network.send('send_move', { move: column - 1 })
    }

    sendClearRow(row) {
        if (!this.isMyTurn || this.myTurn !== 1) return

        this.network.send('send_move', { move: row - 1 })
    }

    clearRow(row) {
        this.rowsCleared.push(row)
        this.board.playRowCleared(row)
    }

    clearColumn(column) {
        this.colsCleared.push(column)
        this.board.playColumnCleared(column)
    }

    setPlayer(username, turn) {
        let player = this[`player${turn}`]
        player.set(username,turn)
    }

    updateLives(lives) {
        let player = this[`player${this.currentTurn}`]
        player.updateLives(lives)
    }

    updateTurn(turn) {
        this.currentTurn = (turn === 1) ? 2 : 1

        this.updateButtons()

        this.player1.setActive()
        this.player2.setActive()
    }

    updateButtons() {
        //sets visibility for the buttons depending on turn
        if (this.started && this.isMyTurn) {
            this.board.showDigBtns(this.currentTurn)
        } else {
            this.board.hideAllDigBtns()
        }
    }

    sendLeaveTable() {
        this.network.send('leave_table')
        this.leaveTable()
    }

    leaveTable() {
        this.removeListeners()
        this.resetGame()

        this.visible = false

        this.world.client.sendLeaveSeat()
    }

    resetGame() {
        this.rowsCleared = []
        this.colsCleared = []
        this.board.hideAllDigBtns()
        this.board.resetDigBtns()
		this.board.stopDigs()
        this.board.resetTiles()

        this.coinCount.text = `Coins: 0`
        this.gemCount.text = `Gems: 0`
        this.totalCount.text = `Total: 0`
        this.rareTreasures = 0

        this.player1.reset()
        this.player2.reset()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
