export default class TowerController {
    constructor(client) {
        this.client = client
        this._spirit = 3
        this._treasure = 0
        this._stairSide = Math.floor(Math.random() * 2)
        this.completedRooms = []
        this.lastBreakRoom = 0
        this.floorOffset = 0 // this should be set to 0 in the ctor, it's just higher for debugging rn, so we start at floor whatever
        this.questionsArray = []
        this.started = false
        this.randomNumberGenerator = new Phaser.Math.RandomDataGenerator()
        this.musicInitiated = false
        this.musics = {}
        this.currentMusic = null

        // Party Quest Variables
        this._enemiesHitWithoutDamage = 0
        this._triviaQuestionsAnswered = 0
        this._completedRoomsWithoutFail = 0

        this.client.network.send('tower_init')
    }

    get floor() {
        return this.completedRooms.length + 1 + this.floorOffset
    }

    get treasure() {
        //this value should be modified through the functions below
        //to prevent client-server desync
        return this._treasure
    }

    get spirit() {
        //this value should be modified through the functions below
        //to prevent client-server desync
        return this._spirit
    }

    get breakRoomCount() {
        return this.completedRooms.filter(room => room === "break").length
    }

    get treasureFrame() {
        if(this.treasure >= 1000) return 4
        if(this.treasure >= 500) return 3
        if(this.treasure >= 100) return 2
        if(this.treasure >= 10) return 1
        return 0
    }

    get stairSide() {
        return this._stairSide
    }

    startGame(startOffset = 0) {
        if(this.started) return
        this.client.interface.main.partyIcon._scorn.visible = false
        this.client.interface.main.phone_button.visible = false
        this.started = true
        this.floorOffset = startOffset
        this.client.network.send('tower_start_game', {startOffset: startOffset})
        this.joinJoiner()
    }

    completedRoom(room, exitSide) {
        this.completedRooms.push(room)
        this._stairSide = exitSide

        this.client.network.send('tower_completed_room', {
            room: room,
            exitSide: exitSide
        })

        this.client.network.send('tower_checkpoint', {
            floor: this.floor,
        })

        // Party Quests
        this._completedRoomsWithoutFail++
        if(this._completedRoomsWithoutFail >= 75) this.client.questComplete(44)
        if(this.floor >= 150) this.client.questComplete(40)
        if(this.breakRoomCount >= 7) this.client.questComplete(35)

        this.joinJoiner()
    }

    reduceSpirit() {
        this._spirit--
        this.playedSpiritAnimation = false

        this._completedRoomsWithoutFail = 0

        this.floorOffset -= Math.min(Math.ceil(this.floor / 30), 10)
        if(this.floor < 1) this.floorOffset += 1 - this.floor

        this.client.network.send('tower_reduce_spirit')

        this.client.sendJoinRoom(831, "partyTowerJoiner")
    }

    endGame(throughBreakRoom) {
        this.stopAllMusic()

        this.client.network.send('tower_end_game', {throughBreakRoom: throughBreakRoom})

        this.client.currentTower = null

        this.client.interface.main.partyIcon._scorn.visible = true
        this.client.interface.main.phone_button.visible = this.client.hasItem(800)
    }

    addTreasure(count) {
        this.client.network.send('tower_add_treasure', {count: count})

        this._treasure += count

        let sfx = Math.floor(Math.random() * 2)
        this.client.network.game.soundManager.play(sfx == 1 ? `medieval-partyTower-coinpickup-i` : `medieval-partyTower-coinpickup-ii`, {volume: 0.2})
    }

    // ============= Music Controller ============= \\

    setMusic(key) {
        let soundManager = this.client.network.game.soundManager
        if(!this.musicInitiated) {
            this.musics = {
                trivia: soundManager.play(1000, {loop:true}).volume(0),
                maze: soundManager.play(1001, {loop:true}).volume(0),
                battle: soundManager.play(1002, {loop:true}).volume(0),
                break: soundManager.play(1003, {loop:true}).volume(0),
            }
            this.musicInitiated = true
        }
        this.currentMusic = key
        for(let [_key, sound] of Object.entries(this.musics)) {
            if(key == _key && !soundManager.muteMusic) {
                sound.volume(0.5)
            } else {
                sound.volume(0)
            }
        }
    }

    setVolumeOfMusic(vol) {
        for(let [_key, sound] of Object.entries(this.musics)) {
            if(this.currentMusic == _key) {
                sound.volume(vol)
            }
        }
    }

    stopAllMusic() {
        for(let sound of Object.values(this.musics)) {
            this.musics = {}
            this.client.network.game.soundManager.stopAllButMusic()
        }
    }

    // ============= Joiner ============= \\

    joinJoiner() {
        this.client.interface.showLoading('',false,true)
        this.generatableTypes = [
            "maze",
            "trivia",
            "battle" //break
        ]
        if(this.canGenerateBreakRoom) this.generatableTypes.push("break")
        console.log(this.generatableTypes)
        this.client.network.send('tower_join_joiner', {
            roomId: this.nextRoomID,
            stairSide: this.stairSide
        })
    }

    get canGenerateBreakRoom() {
        let lastBreakRoom = this.lastBreakRoom
        if(lastBreakRoom === -1) lastBreakRoom = 1

        let additionalOffset = Math.floor(lastBreakRoom / 8)
        if(additionalOffset > 15) additionalOffset = 15

        return this.floor >= (5 + lastBreakRoom + additionalOffset)
    }

    get nextRoomType() {
        return this.generatableTypes[this.randomNumberGenerator.between(0, this.generatableTypes.length - 1)]
    }

    get nextRoomID() {
        switch(this.nextRoomType) {
            case "maze":
                return 830
            case "break":
                return 832
            case "trivia":
                return 833
            case "battle":
                return 834
        }
    }

    // ============= Party Quests ============= \\

    increaseEnemiesHitWithoutDamage() {
        this._enemiesHitWithoutDamage++
        if(this._enemiesHitWithoutDamage >= 8) this.client.questComplete(36)
    }

    increaseTriviaAnswered() {
        this._triviaQuestionsAnswered++
        if(this._triviaQuestionsAnswered >= 20) this.client.questComplete(41)
    }
}