import GameScene from '../GameScene'
import CJCard from './CJCard'
import WinSlot from './WinSlot';

import { Animation, Button, MoveTo, SimpleButton, Zone, ShowHint } from '@components/components'
import CJEffect from './CJEffect';
// You can write more code here

/* START OF COMPILED CODE */

export default class Card extends GameScene {

    constructor() {
        super("Card");

        /* START-USER-CTR-CODE */
        // this._create()
        // this.clockTick()
        this.deck = []
        this.enemyDeck = []
        this.canSelectCard = false

        this.playerSeat = 0
        this.seatOffset = 70
        this.enemySeatOffset = 970

        this.loadedAnimations = []

        this.slot0Winslot = {'w': [], 's': [], 'f': []}
        this.slot1Winslot = {'w': [], 's': [], 'f': []}

        this.winSlotDepth = -5

        this.cardEffects = []
        this.nextRoundEffects = []

        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("card-pack", "assets/media/games/card/card-pack.json");
    }

    /** @returns {void} */
    _create() {

        // container_2
        const container_2 = this.add.container(105, 21);

        // cardselector
        const cardselector = this.add.image(655, 832, "card", "cardselector");
        container_2.add(cardselector);

        // container_1
        const container_1 = this.add.container(650, 485);
        container_2.add(container_1);

        // clock_clock0001
        const clock_clock0001 = this.add.sprite(3, 168, "card", "clock/clock0001");
        clock_clock0001.visible = false;
        container_1.add(clock_clock0001);

        // loader_loader0001
        const loader_loader0001 = this.add.sprite(-3, -112, "card", "loader/loader0001");
        container_1.add(loader_loader0001);

        // close
        const close = this.add.sprite(699, -443, "card", "close");
        container_1.add(close);

        // text_1
        const text_1 = this.add.text(-49, 142, "", {});
        text_1.visible = false;
        text_1.text = "20";
        text_1.setStyle({ "align": "center", "fixedWidth":100,"fixedHeight":100,"fontFamily": "CCComicrazy", "fontSize": "45px", "stroke": "#000", "strokeThickness":5});
        container_1.add(text_1);

        // seat1
        const seat1 = this.add.text(818, 715, "", {});
        seat1.text = "LOADING...";
        seat1.setStyle({ "align": "right", "color": "#000000ff", "fixedWidth":500,"fontFamily": "CCComicrazy-Roman", "fontSize": "30px", "fontStyle": "bold" });
        container_2.add(seat1);

        // seat0
        const seat0 = this.add.text(10, 715, "", {});
        seat0.text = "LOADING...";
        seat0.setStyle({ "color": "#000000ff", "fixedWidth":500,"fontFamily": "CCComicrazy-Roman", "fontSize": "30px", "fontStyle": "bold" });
        container_2.add(seat0);

        // cards
        const cards = this.add.container(0, 740);
        container_2.add(cards);

        // dropdown_dropdown0001
        const dropdown_dropdown0001 = this.add.sprite(752, 21, "card", "dropdown/dropdown0001");

        // frame
        const frame = this.add.image(756, 479, "card", "frame");

        // loader_loader0001 (components)
        const loader_loader0001Animation = new Animation(loader_loader0001);
        loader_loader0001Animation.key = "loader/loader";
        loader_loader0001Animation.end = 20;

        // close (components)
        const closeButton = new Button(close);
        closeButton.spriteName = "close";
        closeButton.callback = () => this.onExit();
        closeButton.pixelPerfect = true;

        // dropdown_dropdown0001 (components)
        const dropdown_dropdown0001SimpleButton = new SimpleButton(dropdown_dropdown0001);
        dropdown_dropdown0001SimpleButton.callback = () => {this.instructions()};
        dropdown_dropdown0001SimpleButton.pixelPerfect = true;

        this.cardselector = cardselector;
        this.clock_clock0001 = clock_clock0001;
        this.loader_loader0001 = loader_loader0001;
        this.close = close;
        this.text_1 = text_1;
        this.container_1 = container_1;
        this.seat1 = seat1;
        this.seat0 = seat0;
        this.cards = cards;
        this.container_2 = container_2;
        this.dropdown_dropdown0001 = dropdown_dropdown0001;
        this.frame = frame;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Image} */
    cardselector;
    /** @type {Phaser.GameObjects.Sprite} */
    clock_clock0001;
    /** @type {Phaser.GameObjects.Sprite} */
    loader_loader0001;
    /** @type {Phaser.GameObjects.Sprite} */
    close;
    /** @type {Phaser.GameObjects.Text} */
    text_1;
    /** @type {Phaser.GameObjects.Container} */
    container_1;
    /** @type {Phaser.GameObjects.Text} */
    seat1;
    /** @type {Phaser.GameObjects.Text} */
    seat0;
    /** @type {Phaser.GameObjects.Container} */
    cards;
    /** @type {Phaser.GameObjects.Container} */
    container_2;
    /** @type {Phaser.GameObjects.Sprite} */
    dropdown_dropdown0001;
    /** @type {Phaser.GameObjects.Image} */
    frame;

    /* START-USER-CODE */
    get cjBridge() {
        return this.world.ruffle.player
    }

    create() {
        this.addListeners()

        super.create()
        this.container_1.visible = false
        this.cards.visible = false
        this.frame.visible = false
        this.dropdown_dropdown0001. visible = false
        this.seat0.visible = false
        this.seat1.visible = false
        this.container_2.visible = false

        this.areInstructionsUp = true

        this.world.ruffle.bootGame({key: "card", music: 116})
        this.world.game.domContainer.style.zIndex = -500

        this.interface.bringToTop()
    }

    setPenguinData(seat,data) {
        this.cjBridge.setPenguinData({seat: seat, RGB: this.world.getColor(data.colour), belt: data.belt, sensei: data.sensei })
    }

    playAnimation(seat, animation, noTieSfx=false) {
        this.cjBridge.playAnimation({winseat: seat, name: animation, noTieSfx: noTieSfx})
    }

    downloadAnimation(animation) {
        this.cjBridge.downloadAnimation({animation: 'pow_' + animation})
    }

    addListeners() {
        this.network.events.on('start_cj_game', this.startCJGame, this)
        this.network.events.on('cj_game_over', this.gameOver, this)
        this.network.events.on('set_card', this.setCard, this)
        this.network.events.on('cj_unlock', this.CJUnlock, this)
        this.network.events.on('cj_lock', this.CJLock, this)
        this.network.events.on('remove_card', this.removeCard, this)
        this.network.events.on('round_over', this.onRoundOver, this)
        this.network.events.on('add_enemy_card', this._addEnemyCard, this)
        this.network.events.on('start_round', this.startRound, this)
        this.network.events.on('move_my_card', this.moveMyCard, this)
        this.network.events.on('game_won', this.gameWon, this)
        this.network.events.on('winmsg', this.winMsg, this)
        this.network.events.on('destroy_element', this.destroyElement, this)
        this.network.events.on('card_effect', this.cardEffect, this)
        this.network.events.on('disable_cards', this.disableCards, this)
        this.network.events.on('enable_cards', this.enableCards, this)
        this.network.events.on('play_animation', this.playRoundAnimation, this)
    }

    removeListeners() {
        this.network.events.off('start_cj_game', this.startCJGame, this)
        this.network.events.off('cj_game_over', this.gameOver, this)
        this.network.events.off('set_card', this.setCard, this)
        this.network.events.off('cj_unlock', this.CJUnlock, this)
        this.network.events.off('cj_lock', this.CJLock, this)
        this.network.events.off('remove_card', this.removeCard, this)
        this.network.events.off('round_over', this.onRoundOver, this)
        this.network.events.off('add_enemy_card', this._addEnemyCard, this)
        this.network.events.off('start_round', this.startRound, this)
        this.network.events.off('move_my_card', this.moveMyCard, this)
        this.network.events.off('game_won', this.gameWon, this)
        this.network.events.off('winmsg', this.winMsg, this)
        this.network.events.off('destroy_element', this.destroyElement, this)
        this.network.events.off('card_effect', this.cardEffect, this)
        this.network.events.off('disable_cards', this.disableCards, this)
        this.network.events.off('enable_cards', this.enableCards, this)
        this.network.events.off('play_animation', this.playRoundAnimation, this)
    }

    loadAnimation(name) {
        this.downloadedAnimations = ["ambient", "tie", "walk", "f_attack", "f_react", "s_react", "s_attack", "w_react", "w_attack"]

        if (this.downloadedAnimations.includes(name)) return

        this.network.send("load_animation", {animation: name})
    }

    playRoundAnimation(args) {
        // TODO: base this off started time        
        this.playAnimation(args.winner, args.animation)
    }

    disableCards(args) {
        this.deck.forEach((card) => {
            if (card.cardData.element == args.element) {
                card.back_1.visible = true

            }
        })
    }

    enableCards(args) {
        this.deck.forEach((card) => {
            card.back_1.visible = false
        })
    }

    modifyScore(ef, win) {
        // put from winner card to above enemy, keep there until cards have been revealed, drag card down
        let winner, loser

        if (ef == "2") {
            winner = win == this.playerSeat ? this.selectedCard : this.enemyCard
            loser = winner
        } else {
            winner = win == this.playerSeat ? this.enemyCard : this.selectedCard
            loser = winner == this.playerSeat ? this.selectedCard : this.enemyCard
        }

        let effect = new CJEffect(this, 950, 540)
        effect.carddesc.setFrame(`bigcarddesc000${ef}`)
        effect.setDepth(-3)

        this.add.existing(effect)

        this.tweens.add({
            targets: [effect],
            y: {
                from: effect.y,
                to: 150
            },
            x: { 
                from: winner.x,
                to: loser.x + 20
            },
            ease: 'Quad.easeInOut',
            duration: 400,
        })

        this.nextRoundEffects.push(effect)
    }

    disallowTypePlay(ef, loser) {
        // put from winner card to above enemy, keep there until cards have been revealed, drag card down

        let effect = new CJEffect(this, 950, 540)
        effect.carddesc.setFrame(`bigcarddesc00${ef}`)
        this.add.existing(effect)

        this.tweens.add({
            targets: [effect],
            y: {
                from: effect.y,
                to: 150
            },
            x: { 
                from: effect.x,
                to: loser.x + 100
            },
            ease: 'Quad.easeInOut',
            duration: 400,
        })

        this.nextRoundEffects.push(effect)
    }


    cardEffect(args) {
        let ef = args.effect
        let winnerSeat = args.winner

        let winnerCard = winnerSeat == this.playerSeat ? this.selectedCard : this.enemyCard
        let loserCard = winnerSeat == this.playerSeat ? this.enemyCard : this.selectedCard

        let absWinPos = new Phaser.Math.Vector2(winnerCard.getBounds().x + 117.5, winnerCard.getBounds().y + 132.5)
        let absLossPos = new Phaser.Math.Vector2(loserCard.getBounds().x + 117.5, loserCard.getBounds().y + 132.5)

        let formattedNumber = ef.padStart(4, "0");
        let frameName = `bigcarddesc${formattedNumber}`

        if (ef == "1") {
            // lower values win ties

            let effect = new CJEffect(this, absWinPos.x, absWinPos.y)
            this.add.existing(effect)
            this.nextRoundEffects.push(effect)

            this.tweens.add({
                targets: [effect],
                x: {
                    from: effect.x,
                    to: 780
                },
                y: {
                    from: effect.y,
                    to: 160
                },
                ease: 'Quad.easeInOut',
                duration: 400,
            })

            return
        }

        if (["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"].includes(ef)) {
            let effect = new CJEffect(this, absWinPos.x, absWinPos.y)
            effect.carddesc.setFrame(frameName)
            this.add.existing(effect)

            if (["2", "3", "13", "14", "15"].includes(ef)) {
                this.nextRoundEffects.push(effect)
            } else {
                this.cardEffects.push(effect)
            }

            let seat0X = 480
            let seat1X = 950

            let newX = args.winner == 0 ? seat1X : seat0X

            if (ef == "2") {
                // affects winner
                newX = args.winner == 0 ? seat0X : seat1X
            }

            this.tweens.add({
                targets: [effect],
                x: {
                    from: effect.x,
                    to: newX
                },
                y: {
                    from: effect.y,
                    to: 100
                },
                ease: 'Quad.easeInOut',
                duration: 400,
            })

            return
        }

        if (["16", "17", "18"].includes(ef)) {
            let effect = new CJEffect(this, absWinPos.x, absWinPos.y)
            effect.carddesc.setFrame(frameName)
            this.add.existing(effect)
            this.cardEffects.push(effect)

            let seat0X = 550
            let seat1X = 1000

            let newX = args.winner == 0 ? seat1X : seat0X

            this.tweens.add({
                targets: [effect],
                x: {
                    from: effect.x,
                    to: newX
                },
                ease: 'Quad.easeInOut',
                duration: 400,
            })

            return
        }
    }

    destroyElement(args) {
        let ws = args.seat == 0 ? this.slot0Winslot : this.slot1Winslot

        for (let e in ws) {
            let element = ws[e]
            // f , w ,s

            for (let i = 0; i < element.length; i++) {
                let card = element[i]

                if (card?.uuid == args.uuid) {
                    card.explode(() => {
                        ws[e][i] = undefined
                    })
                    return
                }
            }
        }
    }

    winMsg(args) {
        this.interface.prompt.showInfo(args.message, 'Okay',  () => this._exit())
    }

    gameWon(args) {
        let ws = args.winner == 0 ? this.slot0Winslot : this.slot1Winslot

        let winnerCards = []

        let cardX = args.winner == 0 ? 100 : 1100

        this.playAnimation(0, "tie", true)
        this.soundManager.playSfx("win")

        // bug where if u have more than 1 element itll quit
        for (let element of Object.values(ws)) {
            // f , w ,s

            for (let i = 0; i < element.length; i++) {
                let card = element[i]

                if (args.uuid.includes(card.uuid)) {
                    this.tweens.add({
                        targets: [card],
                        y: {
                            from: card.y,
                            to: 350
                        },
                        x: {
                            from: card.x,
                            to: cardX + (winnerCards.length * 100)
                        },
                        ease: 'Quad.easeInOut',
                        duration: 500,
                    })

                    winnerCards.push(card)
                } 
            }
        }
    }

    _cardClick(card) {
        if (!this.canSelectCard) return

        this.onCardClick(card)
    }

    moveMyCard(args) {
        let slot = args.slot

        this.canSelectCard = false
        this.deck[slot].lock = true
        this.deck[slot].cjback.visible = false
        this.deck[slot].powerdesc0001.visible = false
        this.deck[slot].powertext.visible = false
        this.deck[slot].text.visible = false
        this.tweenPickedCard(this.deck[slot])

        if (this.selectedCard) {
            this.selectedCard.destroy()
        }

        this.selectedCard = this.deck[slot]
        this.stopTicker()
    }

    _roundStartTween(effect) {
        setTimeout(() => {
            effect.destroy()
        }, 1000)
    }

    startRound(args) {
        this.clockTick()
    }

    _addEnemyCard(args) {
        this.addEnemyCard(args.slot, args.uuid)
    }

    _destroyPickedCards() {
        try {
            this.selectedCard.visible = false
            this.enemyCard.visible = false
        } catch (e) {
            //pass
        }
    }

    moveWinslot(card, seat, args) {
        function _tween(self, card, arr, winSlot, slot=false) {
            let xLength = arr[card.element].length + 1

            if (slot) {
                arr[card.element][slot] = winSlot
                xLength = parseInt(slot) + 1

                if (arr[card.element].length > xLength) {
                    let nextValue = arr[card.element].find((value, index) => index >= slot && value !== undefined)
                    if (nextValue != null) winSlot.setDepth(nextValue.depth + 2)
                }

            }

            let order = ['f', 'w', 's']

            let offset = (order.indexOf(card.element) + 1) * 100

            let yOffset = xLength * 20

            let secondPostX = seat == 0 ? 30 : 1000

            self.tweens.add({
                targets: [winSlot],
                y: {
                    from: winSlot.y,
                    to: 70 + yOffset
                },
                x: {
                    from: winSlot.x,
                    to: (secondPostX ) + offset
                },
                ease: 'Quad.easeInOut',
                duration: 400,
            })


            if (!slot) arr[card.element].push(winSlot)
        }

        let arr = seat == 0 ? this.slot0Winslot : this.slot1Winslot

        // original position to spawn in
        let posX = seat == 0 ? 450 : 900

        let winSlot =  new WinSlot(this, posX, 300)
        let seatCard = args.winner == 0 ? args.seat0card : args.seat1card

        winSlot.uuid = seatCard.uuid
        winSlot.scale = 0.75
        this.add.existing(winSlot)

        winSlot.setDepth(this.winSlotDepth - 1)

        this.winSlotDepth -= 1

        winSlot.setup(seatCard)

        for (let i in arr[seatCard.element]) {

            let c = arr[seatCard.element][i]

            if (c === undefined) {
                _tween(this, seatCard, arr, winSlot, i)
                return
            }
        }

        _tween(this, seatCard, arr, winSlot)
    }

    bringEffectToAboveCard(effect) {
        // meow
        let x = 700

        if (effect.x < 550) {
            // seat 0
            x = 400
        } 

        this.tweens.add({
            targets: [effect],
            y: {
                from: effect.y,
                to: 250
            },
            ease: 'Quad.easeInOut',
            duration: 400,
            onComplete: () => {
                setTimeout(() => {
                    this._roundStartTween(effect)
                }, 1500)
            }
        })
    }

    onRoundOver(args) {
        let winner = args.winner

        if (this.enemyCard != null) {
            let otherPlayerSeat = (this.playerSeat == 0) ? 1 : 0
            this.enemyCard.cardID = args[`seat${otherPlayerSeat}`]

            this.enemyCard.iconLoader.loadIcon(this.enemyCard, this.enemyCard.cardID.toString(), false)
        }

        let winnerCard

        if (winner == 0) {
            winnerCard = args.seat0card
        } else {
            winnerCard = args.seat1card
        }

        // download animation if needed
        if (this.world.crumbs.cards[winnerCard.cardID].power_id > 0) {
            if (!this.loadedAnimations.includes(winnerCard.cardID)) {
                this.downloadAnimation(winnerCard.cardID)
                this.loadedAnimations.push(winnerCard.cardID)
            }
        }

        // play card effects
        for (let i in this.cardEffects) {
            let effect = this.cardEffects[i]

            if (["bigcarddesc0002", "bigcarddesc0003"].includes(effect.carddesc.frame.name)) {
                this.bringEffectToAboveCard(effect)
                continue
            }

            if (effect != null) this._roundStartTween(effect)
        }

        this.cardEffects = this.cardEffects.concat(this.nextRoundEffects)
        this.nextRoundEffects = []

        // flip card
        if (this.enemyCard && this.selectedCard && this.selectedCard?.cardID == args[`seat${this.playerSeat}`]) {
            this.tweens.add({
                targets: [this.enemyCard],
                scaleX: {
                    from: this.enemyCard.scaleX,
                    to: 0
                },
                ease: 'Circ.easeOut',
                duration: 300,
                onComplete: () => { 
                    let seat = (this.playerSeat == 0) ? 1 : 0
                    this.enemyCard.setupCard(args[`seat${seat}`])
                    this.tweens.add({
                        targets: [this.enemyCard],
                        scaleX: {
                            from: 0,
                            to: .75
                        },
                        ease: 'Circ.easeOut',
                        duration:500,
                        onComplete: () => {
                            if (args.winner == "tie") {
                                this.selectedCard.explodeCard(()=>{})
                                this.enemyCard.explodeCard(()=>{
                                    this._destroyPickedCards()
                                })

                                return
                            }

                            if (args.winner == this.playerSeat) {
                                this.enemyCard.explodeCard(()=>{
                                    this._destroyPickedCards()
                                })

                                return
                            }

                            this.selectedCard.explodeCard(() => {
                                this._destroyPickedCards()
                            })
                        }
                    })
                }
            })
        }

        if (args.winner == "tie") return

        setTimeout(() => {
            this.moveWinslot(winnerCard, args.winner, args)
        }, 1000)
    }

    removeCard(args) {
        let card = this.enemyDeck[args.slot]

        if (this.enemyCard) {
            this.enemyCard.destroy()
        }

        this.enemyCard = card
        this.tweenPickedCard(card, true)
    }

    CJUnlock() {
        for (let card of this.deck) {
            card.playlock = false
        }

        this.canSelectCard = true
    }

    CJLock() {
        for (let card of this.deck) {
            card.playlock = true
        }

        this.canSelectCard = false
    }

    gameOver(args) {
        this.interface.prompt.showInfo(args.message, 'Okay',  () => this._exit())
    }

    startCJGame(args) {
        this.loader_loader0001.visible = false

        for (let player of args.users) {
            // todo: sensei check

            if (player.id == this.world.client.penguin.id) {
                this.playerSeat = player.seat
                if (this.playerSeat == 1) {
                    this.seatOffset = 650
                    this.enemySeatOffset = 40
                }
            }

            this.setPenguinData(player.seat, player)
            this[`seat${player.seat}`].text = player.name.toUpperCase()
        }

        this.playAnimation(0, "walk")
    }

    setCard(args) {
        this.addCard(args.card, args.slot, args.uuid)
    }

    // Called when a game is forcefully shut down from Waddle.js
    // and when a game is ended normally
    _exit() {
        this.world.interface.prompt.info.visible = false
        this.world.ruffle.close()
        this.stopTicker()
        this.removeListeners()
    }

    onExit() {
        this._exit()
        this.network.send("cj_leave")
    }

    instructions() {
        let yPosition = 21

        if (this.areInstructionsUp) { 
            yPosition = 508
        }

        this.areInstructionsUp = !this.areInstructionsUp

        this.tweens.add({
            targets: [this.dropdown_dropdown0001],
            y: {
                from: this.dropdown_dropdown0001.y,
                to: yPosition
            },
            ease: 'Quad.easeInOut',
            duration: 500,
        })
    }

    stopTicker() {
        this.text_1.visible = false
        this.clock_clock0001.visible = false
        clearTimeout(this.clockTimeout)
    }

    _clockTick() {        
        this.clockTimeout = setTimeout(() => {
            clearTimeout(this.clockTimeout)

            let formattedNumber = this.ticker.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            })

            this.text_1.text = this.tickerText.toString()

            this.ticker++
            this.tickerText--

            this.clock_clock0001.setFrame(`clock/clock00${formattedNumber}`)

            if (this.ticker != 22) {
                this._clockTick()
            } else {
                this.stopTicker()
            }
        }, 1000);
    }

    clockTick() {
        this.ticker = 2
        this.tickerText = 19

        this.clock_clock0001.setFrame(`clock/clock0001`)
        this.text_1.text = '20'

        this.text_1.visible = true
        this.clock_clock0001.visible = true

        this._clockTick()
    }

    loadCardJitsu() {
        // called after ruffle has fully loaded everything
        this.container_1.visible = true
        this.cards.visible = true
        this.frame.visible = true
        this.dropdown_dropdown0001. visible = true
        this.seat0.visible = true
        this.seat1.visible = true
        this.container_2.visible = true

        this.cards.visible = true
        this.interface.hideLoading()
        this.interface.hideInterface()

        this.world.network.send("cj_load")
    }

    addCard(cardid, position, uuid) {
        let c = new CJCard(this, -500, -500)
        c.setupCard(cardid)
        c.setScale(0.55)
        c.uuid = uuid
        c.setDepth(this.dropdown_dropdown0001.depth - 1)

        this.cards.add(c)

        let x = (position * 145) + this.seatOffset
        let y = 75

        this.tweens.add({
            targets: [c],
            y: {
                from: 220,
                to: y
            },
            x: {
                from: 589,
                to: x
            },
            ease: 'Circ.easeOut',
            duration: 700,
            onComplete: function() {
                c.lock = false  
            }
        })

        this.deck[position] = c
    }

    addEnemyCard(position, uuid) {
        let c = new CJCard(this, -500, -500)
        c.uuid = uuid
        c.setupCard(0)
        c.setScale(0.3)
        c.myCard = false
        this.cards.add(c)

        let x = (position * 75) + this.enemySeatOffset
        let y = 50

        this.tweens.add({
            targets: [c],
            y: {
                from: 220,
                to: y
            },
            x: {
                from: 589,
                to: x
            },
            ease: 'Circ.easeOut',
            duration: 700,
        })

        this.enemyDeck[position] = c
    }

    onCardClick(card, tweenCard=false) {
        this.network.send("select_card", {slot: this.deck.indexOf(card)})
    }

    tweenPickedCard(card, flipped=false) {
        let y = -400
        let x = 450
        // flipped = flip the card when enemy picks it  :3

        if (flipped == true) x = 900

        if (this.playerSeat == 1 ) {
            x = 900

            if (flipped == true) x = 450 
        }

        this.tweens.add({
            targets: [card],
            y: {
                from: card.y,
                to: y
            },
            x: {
                from: card.x,
                to: x
            },
            scale: {
                from: card.scale,
                to: .75
            },
            ease: 'Circ.easeOut',
            duration: 700,
        })
    }


    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
