import BaseScene from '@scenes/base/BaseScene'
import Present from '@scenes/shared_prefabs/present/Present'

export default class RoomScene extends BaseScene {

    constructor(key) {
        super(key)

        this.key = key

        this.penguins = null
        this.dummyPenguins = {}

        // Block collision body
        this.block = null
        // Optional array of body names for block
        this.blockBodies = null
        // Array that the uhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        this.blocks = {}
        // Trigger collision bodies
        this.triggers = null
        // Walk through Triggers
        this.walkThrough = null
        // Global triggers
        this.globalTriggers = null
        // Optional physics key
        this.physicsKey = null
        // Optional secondary physics
        this.secondaryPhysics = null
        // Movement chains object
        this.movementChains = {}
        // Object of all collected messages for mod actions
        this.allMessages = {}

        // If room is fully loaded
        this.isReady = false
        // Array of users to be added once ready
        this.waiting = []

        this.tables
        this.waddles

        // remove after xmas
        //this.present

    }

    get client() {
        return this.world.client
    }

    get snowballs() {
        return this.interface.main.snowballFactory
    }

    get catalogRoomKeys() {
        return ['boiler', 'book', 'book', 'cove', 'dock', 'dance', 'shop', 'icepond', 'lighthouse', 'mtn', 'pet', 'sportshop', 'stage', 'hideout', 'hq'];
    }

    get waterBalloonBlacklist() {
        return ['courtyard','hideout','hq','sportshop','lighthouse','pizza','eco','pet','stage','mine','cavemine','lodge','shop']
    }

    init(data) {
        if (!this.id) {
            this.id = data.id
        }

        super.init()
    }

    create() {
        this.snackStampAreas = []
        this.dancingPenguins = []

        this._create()
        this.sortChildren()

        if (this.roomPhysics) this.addPhysics()

        this.addInput()
        this.setMusic()

        if (this.tables) this.sendGetTables()
        if (this.waddles) this.sendGetWaddles()

        this.interface.showInterface()

        if (this.interfaceIcons) this.interfaceIcons.setDepth(9999)

        this.world.events.emit('yes_bat')
    }

    preload() {
        this.load.on('progress', this.onProgress, this)
        this.events.once('create', () => this.isReady = true)

        if (this.musics) {
            this.musics.forEach(loop => {
                if(!this.cache.audio.exists(loop)) this.load.audio(loop, `assets/media/music/${loop}.mp3`)
            })
        }

        if (this.music && !this.cache.audio.exists(this.music)) {
            this.load.audio(this.music, `assets/media/music/${this.music}.mp3`)
        }

        if (this.concertMusic && !this.cache.audio.exists(this.concertMusic)) {
            this.load.audio(this.concertMusic, `assets/media/music/${this.concertMusic}.mp3`)
        }

        let loops = this.preLoop ? [this.preLoop] : []
        if(this.mainLoops) loops.push(...this.mainLoops)
        if(this.layeredMusic) loops.push(...this.layeredMusic)
        
        loops.forEach(loop => {
            this.load.audio(loop, `assets/media/music/${loop}.mp3`)
        })

        // REMOVE AFTER MEDIEVAL - load tracks for infinite tower
        /*if(this.id > 829 && this.id < 835) {
            for(let id of ['1000','1001','1002','1003']) {
                if (!this.cache.audio.exists(id)) {
                    this.load.audio(id, `assets/media/music/${id}.mp3`)
                }
            }
        }*/

        this._preload()
    }

    onProgress(progress) {
        this.interface.loading.progress.scaleX = progress
    }

    sortChildren() {
        if (!this.sort) return

        for (let child of this.sort) {
            child.depth = child.y
        }
    }

    addPenguin(id, penguin) {
        this.penguins[id] = penguin
        if(penguin.NOT_REAL) this.dummyPenguins[id] = penguin

        this.interface.main.buddy.showPage()
        
        this.checkMascot(id)
        this.world.room.events.emit("addpenguin")

    }

    checkMascot(id){
        for (var x in this.world.mascots) {
            if (this.world.mascots[x].id == id) this.world.client.stampEarned(this.world.mascots[x].stamp)
        }
    }

    isNotWearing(penguin) {
        /***** DEPRECATED *****/
        let items = Object.values(penguin.items.equippedFlat)
        if(items.includes(380151) || items.includes(13371337) || items.includes(380291) || items.includes(380363) || items.includes(380364)) return true
        return false
    }

    update() {
    }

    removePenguin(id) {
        let penguin = this.penguins[id]

        if (penguin.isTweening) penguin.removeTween()

        if (penguin.balloon) penguin.balloon.destroy()
        penguin.nameTag.destroy()
        penguin.destroy()

        delete this.penguins[id]
        if(penguin.NOT_REAL) delete this.dummyPenguins[id]

        this.interface.main.buddy.showPage()

        this.onPenguinRemove(id)
        this.world.room.events.emit('removepenguin', id)

        if (this.work && this.work.deliveringItems) {
            const workItem = this.work.deliveringItems[id];
            if (workItem) {
                workItem.destroy();
                delete this.work.deliveringItems[id];
            }
        }

    }
    
    /**
    * Automatically handles "number of players wearing x item and dancing" quests.
    * @param {Number} minDancing Minimum number of dancing players. Award check is for >= of this number.
    * @param {Object} danceItems Dictionary of item types and arrays of valid items. `Ex: { head: [413], body: [201] }`
    * @param {Number} danceQuestId Quest ID to be awarded once the condition is met.
    * @param {boolean} meetAllTypes Whether or not a player must be wearing one item from each type in `danceItems`
    * @param {Number} frame The frame that each penguin must be on. Default is 26 (dancing). If null, no frame is needed to trigger.
    */
    checkPenguinDanceQuest(minDancing = 1, danceItems, danceQuestId, meetAllTypes = false, frame = 26) {
        if(this.penguins === null || this.penguins === undefined) return

        if (!danceItems) { danceItems = {} }

        for(let penguin of Object.values(this.penguins)) {
            if (!penguin) continue

            let equippedItems = penguin.items.equipped

            let canCount = false
            let isCounted = this.dancingPenguins.includes(penguin.id)

            if (frame === null || penguin.frame === frame) {
                let uniqueTypes = 0

                if (Object.keys(danceItems).length > 0) {
                    for (let [type, items] of Object.entries(danceItems)) {
                        let typeItem = equippedItems[type]
    
                        if (items.includes(typeItem.id)) {
                            if (meetAllTypes) {
                                uniqueTypes += 1
                            } else {
                                canCount = true
                                break
                            }
                        }
                    }
    
                    if (uniqueTypes == Object.keys(danceItems).length) { canCount = true }
                } else {
                    canCount = true
                }
            }

			if (canCount && !isCounted) {
				this.dancingPenguins.push(penguin.id)
			} else if (!canCount && isCounted) {
				this.dancingPenguins = this.dancingPenguins.filter(id => id !== penguin.id)
			}
        }

		if (this.dancingPenguins.includes(this.world.client.id)) {
			if (this.dancingPenguins.length >= minDancing) {
				this.world.client.questComplete(danceQuestId)
			}	
		}
    }

    hidePenguins() {
        for (let penguin of Object.values(this.penguins)) {
            penguin.visible = false
            penguin.nameTag.visible = false

            if (penguin.balloon) penguin.balloon.visible = false
        }
    }
    
    showPenguins() {
        for (let penguin of Object.values(this.penguins)) {
            if (!penguin.visible) {
                penguin.visible = true
                penguin.nameTag.visible = true
            }
        }
    }

    addInput() {
        // Movement
        this.input.on('pointerup', (pointer, target) => this.client.onPointerUp(pointer, target))
    }

    sendGetTables() {
        this.network.send('get_tables')
    }

    sendGetWaddles() {
        this.network.send('get_waddles')
    }

    getTable(id) {
        return this[`table${id}`]
    }

    getWaddle(id) {
        return this[`waddle${id}`]
    }

    getPenguinByUsername(username) {
        return Object.values(this.penguins).find(penguin => penguin.username === username)
    }

    getPenguinByDisplayName(username) {
        return Object.values(this.penguins).find(penguin => penguin.displayName === username)
    }

    setTables(tables) {
        this.tables = tables

        for (let [table, seats] of Object.entries(tables)) {
            this.updateTable(table, seats.length)
        }
    }

    updateTable(table, seat) {
        table = this.world.room.getTable(table)
        if (!table) {
            return
        }

        let button = table.game.__Button
        let name = button.spriteName

        if (seat > 1) {
            table.game.setFrame(`${name}${button.lazyName ? '0002':'-hover'}`)
            button.lockFrame = true

        } else {
            table.game.setFrame(`${name}${button.lazyName ? '0001':''}`)
            button.lockFrame = false
        }
    }

    onSnowballStart(x, y, ball, id) {
        // To be overridden in derived class
    }

    onSnowballComplete(x, y, ball, id) {
        // To be overridden in derived class
    }

    onPenguinUpdate(penguin) {
        // To be overridden in derived class
    }

    onPenguinsAdded() {
        // To be overridden in derived class
    }

    async onPenguinMoveUpdate(penguin) {
        // To be overridden in derived class
    }

    onPenguinMoveComplete(id) {
        // To be overridden in derived class
    }

    onPenguinSendMessage(penguin) {
        // To be overridden in derived class
    }

    onPenguinRemove(penguin) {
        // To be overridden in derived class
    }

    handleSFXChange() {
        // To be overridden in derived class
    }
    
    setWaddles(waddles) {
        this.waddles = waddles
    }

    updateWaddle(waddle, seat, username) {
        this.interface.main.waddle.updateWaddle(waddle, seat, username)
    }

    startConcert() {
        // To be overridden in derived class
    }

    startConcertMidway() {
        // To be overridden in derived class
    }

    endConcert() {
        // To be overridden in derived class
    }

    stop() {
        this.interface.main.snowballFactory.clearBalls()
        this.soundManager.stopAllButMusic()
        this.scene.stop()
    }

    getWaiting(id) {
        return this.waiting.find(user => user.id == id)
    }

    updateWaiting(id, attributes) {
        let user = this.getWaiting(id)

        if (user) {
            user = Object.assign(user, attributes)
        }
    }

    createNPCPenguin(name = '', config = {}, onClick = () => {}) {
        let obj = {
            body: 0,
            color:1,
            displayName: name,
            email_verified:0,
            face:0,
            feet:0,
            flag:0,
            frame:1,
            hand:0,
            head:0,
            id: -1,
            iglooBounds:1,
            iglooOpen:1,
            transform:0,
            igloo_slot:0,
            joinTime:0,
            mascotGiveaway:undefined,
            neck:0,
            photo:0,
            username: name,
            username_verified:1,
            walking:0,
            walkingPuffleType:undefined,
            x:0,
            y:0,
            isNPC: true,
            ...config
        }
        let penguin = this.world.penguinFactory.createPenguin(obj, this, true)
        penguin.onClick = () => onClick()
        return penguin
    }

    removeWaiting(id) {
        this.waiting = this.waiting.filter(user => user.id != id)
    }

    visitDimension(id) {
        if (!this.world.party.fools.dimensionsVisited.includes(id)) this.world.party.fools.dimensionsVisited.push(id)
        const allVisited = this.world.party.fools.dimensionRooms.every(dim => this.world.party.fools.dimensionsVisited.includes(dim));
        if (allVisited) this.world.client.questComplete(16)
    }

    /* Makes a timeline for sfx to play at the specific frame of a sprite's animation */
    createSfxTimeline(gameObject, info, override = false) {
        if(Array.isArray(info)) info = info[0]
        gameObject.on('animationupdate',() => {
            for(let [key, arr] of Object.entries(info)) {
                if(gameObject.anims.currentAnim.key == key || key == '__ANY__') {
                    for(let obj of arr) {
                        if(gameObject.anims.currentFrame.index == obj.frame) {
                            this.soundManager.playSfx(obj.sound,{},override)
                        }
                    }
                }
            }
        })
    }

    /*========== Message logging for mod actions ==========*/
    addMessage(id, message, filtered, muted, modOnly) {
        if(this.client.rank < 2) return
        
        if(!this.allMessages[id]) this.allMessages[id] = []
        this.allMessages[id].unshift({ message: message, filtered: filtered, muted: muted, modOnly: modOnly })
        if(id == this.interface.main.modActions.id) this.interface.main.modActions.chatLog.updateMessages()
    }

    /*========== Physics ==========*/

    get roomPhysics() {
        let key = this.key.toLowerCase()

        return this.cache.json.get(this.physicsKey || `${key}-physics`)
    }

    get _secondaryPhysics() {
        if(!this.secondaryPhysics) return null
        return this.cache.json.get(this.secondaryPhysics)
    }

    addPhysics() {
        this.matter.world.setBounds(0, 0, this.game.config.width, this.game.config.height)

        // CHANGE THIS AFTER WATER PARTY 2024
        if(this.client.id !== 26461) {
            if(this.blockBodies != null) {
                this.block = []
                for(let key of this.blockBodies) {
                    let body = this.addBody(key, 0x111111)
                    body._key = key
                    this.block.push(body)
                    this.blocks[key] = body
                }
            } else {
                this.block = this.addBody('block', 0x111111)
            }
        } else {
            this.block = []
        }

        this.triggers = this.addTriggers()
        this.walkThrough = this.addWalkThrough()
        this.globalTriggers = this.addGlobalTriggers()
    }

    addBody(key, color = null) {
        if (!this.roomPhysics[key] && (this._secondaryPhysics && !this._secondaryPhysics[key])) return null

        let body
        if(this._secondaryPhysics && this._secondaryPhysics[key]) {
            body = this.matter.add.fromPhysicsEditor(0, 0, this._secondaryPhysics[key]) 
        } else {
            body = this.matter.add.fromPhysicsEditor(0, 0, this.roomPhysics[key])
        }
        //let body = this.matter.add.fromPhysicsEditor(0, 0, this.roomPhysics[key])
        this.matter.body.setPosition(body, body.centerOffset) // Centers body in room

        // Debug color
        color = (color) ? color : body.render.fillColor

        body.render.lineColor = color
        body.render.fillColor = color
        body.render.fillOpacity = 0.5

        return body
    }

    addTriggers() {
        if (!this.roomTriggers) return null

        let triggers = []

        for (let t in this.roomTriggers) {
            let trigger = this.addBody(t, 0x00FF00)

            trigger.callback = () => this.checkTrigger(this.roomTriggers[t])
            triggers.push(trigger)
        }

        return triggers
    }
    
    addWalkThrough() {
        if (!this.roomWalkThroughTriggers) return null

        let triggers = []

        for (let t in this.roomWalkThroughTriggers) {
            let trigger = this.addBody(t, 0x00FF00)

            trigger.callback = this.roomWalkThroughTriggers[t]
            triggers.push(trigger)
        }
        return triggers

    }

    // THIS FUNCTION ISNT USED ANYWHERE YET. todo: support walkthrough cause some mechanics are like that
    /*get walkthroughGlobalTriggers() {
        let triggers = []
        for (let [key, trigger] of Object.entries(this.roomGlobalTriggers)) {
            if(trigger.walkThrough) triggers.push(this.globalTriggers[key])
        }
        if(triggers.length > 0) return triggers
        return false
    }*/

    getGlobalTrigger(key) {
        return this.globalTriggers.find(obj => obj._key == key)
    }

    addGlobalTriggers() {
        if (!this.roomGlobalTriggers) return null

        let triggers = []

        for (let t in this.roomGlobalTriggers) {
            let trigger = this.addBody(t, 0x00FF00)

            trigger.callback = (p) => this.roomGlobalTriggers[t].callback(p)
            trigger.occupants = []
            trigger._key = t
            triggers.push(trigger)
        }

        // Once the room is ready, initiate the occupants of the triggers,
        // in case theres already people standing on it when you spawn in
        this.events.once('roomready', () => {
            for (let trigger of this.globalTriggers) {
                for (let id in this.penguins) {
                    let penguin = this.penguins[id]
                    if (!penguin) continue

                    if (this.matter.containsPoint(trigger, penguin.x, penguin.y)) {
                        trigger.occupants.push(parseInt(id))
                    }
                }
                if (trigger.occupants.length > 0) trigger.callback(trigger.occupants)
            }
        })

        // When a penguin is removed, check if they were on a trigger,
        // and remove them from occupants if so.
        this.world.room.events.on('removepenguin', (id) => {
            for (let trigger of this.globalTriggers) {
                if(trigger.occupants.includes(id)) {
                    trigger.occupants = trigger.occupants.filter(_id => parseInt(_id) !== parseInt(id))
                    trigger.callback(trigger.occupants)
                }
            }
        })

        return triggers
    }

    checkTrigger(callback) {
        if (callback && !this.world.client.activeSeat) {
            callback()
        }
    }

    triggerRoom(id, x = null, y = null, randomRange = 40) {
        if(Object.keys(this.interface.loadedNewspapers).length > 0 || this.interface.loadedWidgets.Mail?.visible) return

        let room = this.crumbs.scenes.rooms[id]
        if(!x) x = room.x
        if(!y) y = room.y

        this.world.client.sendJoinRoom(id, room.key, x, y, randomRange)
    }

    triggerGame(id) {
        if(this.crumbs.games[id].quest) {
            this.world.client.sendJoinRoom(id, '')
            return
        }
        let text = this.getString(`${this.crumbs.games[id].key}_prompt`)

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.world.client.sendJoinRoom(id, '')

            this.interface.prompt.window.visible = false
        })
    }

    triggerTable(name, id, prompt = true) {
        if (!prompt) {
            this.world.client.sendJoinTable(id)
        }

        let text = this.getString(`${name}_prompt`)

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.world.client.sendJoinTable(id)

            this.interface.prompt.window.visible = false
        })
    }

    triggerWaddle(name, id) {
        let text = this.getString(`${name}_prompt`)

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.world.client.sendJoinWaddle(parseInt(id))

            this.interface.prompt.window.visible = false
        })
    }

    triggerMovementChain(key) {
        if(!this.movementChains[key]) return

        this.world.client.sendMoveChain(this.movementChains[key],key)
    }

    sendTeleport(teleportId) {
        this.network.send('teleport_and_move', {id: teleportId})
    }

}