import Puffle from '../room/puffle/Puffle';
import PathEngine from './pathfinding/PathEngine';
import TowerController from './TowerController';
import SecretFramesLoader from '@engine/loaders/SecretFramesLoader';

export default class ClientController {
    constructor(world, args) {
        this.world = world;

        this.interface = world.interface;
        this.network = world.network;
        this.crumbs = world.crumbs;

        this.getString = world.getString;

        // Assign user attributes
        let { user, ...attributes } = args;
        Object.assign(this, attributes);

        this.id = user.id;
        this.joinTime = user.joinTime;
        this.email_verified = user.email_verified;

        this.iglooOpen = user.iglooOpen;

        this.iglooBounds = user.iglooBounds === 0;

        if (this.iglooOpen) {
            this.network.send("open_igloo", {igloo: this.id});
        }

        this.lastRoom
        this.activeSeat
        this.lastSledId

        // Item inventory
        this.slots = [
            'color',
            'head',
            'face',
            'neck',
            'body',
            'hand',
            'feet',
            'flag',
            'photo',
            'award',
            'transforms',
        ];
        this.inventory = this.initInventory();

        // Reference to ClientPenguin object
        this.penguin;

        // If expecting emote key combo
        this.emoteKeyPressed = false;

        this.lastBalloon = Date.now();
        this.throttleDelay = 100;

        // Input
        this.keys = this.crumbs.quick_keys.keys;
        this.emotes = this.crumbs.quick_keys.emotes;

        this.keyActions = {
            send_frame: (id) => this.sendFrame(id),
            send_wave: () => this.sendFrame(25, this.penguin.getSecretFrame(25) !== 25), // set wave if special action
            send_sit: () => this.sendSit(this.input.mousePointer),

            show_crosshair: () => this.showCrosshair(),

            emote_key: () => (this.emoteKeyPressed = true),
            send_emote: (id) => this.sendEmote(id),
            send_safe: (id) => this.sendSafe(id),

            hide_interface: () => this.hideInterface(),
        };

        this.lockRotation = false;

        this.moveDisabled = false;

        this.input.on('pointermove', (pointer) => this.onPointerMove(pointer));

        this.input.keyboard.on('keydown', (event) => this.onKeyDown(event));

        this.jokeCooldown = false
        this.tourCooldown = false

        this.newspaperCooldownActive = false
        this.reportCooldownActive = false

        this.modChat = false
        this.chatSearch = false

        this.partyQuests = args.party_quests;
        this.world.party.id = args.party;

        this.currentTower = null
        this.interfaceHidden = false
    }

    get tower() {
        if(this.currentTower) return this.currentTower

        return this.currentTower = new TowerController(this)
    }

    get unseenRequests() {
        return this.buddyRequests.filter(obj => obj.seen != 1)
    }

    get isTweening() {
        return this.penguin.isTweening;
    }

    get visible() {
        return this.penguin.visible;
    }

    get input() {
        return this.interface.main.input;
    }

    get isBalloonThrottled() {
        let time = Date.now();

        if (time - this.lastBalloon < this.throttleDelay) {
            return true;
        }

        this.lastBalloon = time;

        return false;
    }

    get daysOld() {
		let oneDay = 1000 * 60 * 60 * 24
        let timeDiff = Date.now() - Date.parse(this.joinTime)
        return Math.round(timeDiff / oneDay)
    }

    get isModerator() {
        return this.rank > 1 && !this.streamer;
    }

    //newspaper submission cooldown
    setNewspaperCooldown() {
        this.newspaperCooldownActive = true
        setTimeout(() => {
            this.newspaperCooldownActive = false
        },300000)
    }
    
    setReportCooldown() {
        this.reportCooldownActive = true
        setTimeout(() => {
            this.reportCooldownActive = false
        },30000)
    }

    initInventory() {
        // Generates object from slots in format: { color: [], head: [], ... }
        let inventory = Object.fromEntries(
            this.slots.map((slot) => [slot, []])
        );

        // Assigns inventory list to slots
        for (let item of this.inventory) {
            item = parseInt(item);

            if (!(item in this.crumbs.items)) {
                continue;
            }

            let type = this.crumbs.items[item].type;
            let slot = this.slots[type - 1];

            inventory[slot].push(item);
        }

        return inventory;
    }

    hasItem(id) {
        let items = this.inventory;
        items = Object.values(items).flat();

        return items.includes(id);
    }

    hasItems(ids) {
        let items = this.inventory;
        items = Object.values(items).flat();

        for (let id of ids) {
            if (!items.includes(id)) {
                return false
            }
        }

        return true
    }

    hasItemBetter(id) {
        let type = this.slots[this.world.crumbs.items[id].type - 1]
        return this.inventory[type].includes(id)
    }

    onPointerMove(pointer) {
        if (this.interface.main.crosshair) {
            if (this.interface.main.crosshair.visible) {
                this.interface.main.onCrosshairMove(pointer);
            }
        }

        if (!this.visible || this.isTweening || this.lockRotation) {
            return;
        }

        this.penguin.rotate(pointer.x, pointer.y);
    }

    onPointerUp(pointer, target) {
        if (pointer.button != 0 || !this.visible || this.activeSeat || this.penguin.moveChainActive) {
            return;
        }

        // target is []

        // Block movement when clicking a button
        if (target[0] && target[0].isButton) {
            return;
        }

        if (target[0] instanceof Puffle) {
            return;
        }

        this.sendMove(pointer.x, pointer.y);
    }

    onKeyDown(event) {
        let key = event.key.toLowerCase();

        if (this.emoteKeyPressed) {
            this.processEmote(key);
        } else {
            this.processKey(key);
        }
    }

    processEmote(key) {
        this.emoteKeyPressed = false;

        if (key in this.emotes) {
            this.sendEmote(this.emotes[key]);
        }
    }

    processKey(key) {
        if (key in this.keys) {
            let k = this.keys[key];

            let items = this.world.client.penguin.items.equippedFlat
            items = Object.values(items)
    
            if (key == 'j') {
                this.tellJoke();
                return;
            }

            // Staff command block
            if (this.rank > 1) {
                if (key == '.') {
                    this.toggleModChat()
                    return
                } else if(key == '=') {
                    this.toggleChatSearch()
                    return
                }
            }

            if ((items.includes(428) && !this.tourCooldown) && key == 't') {
                this.giveTour()
                return
            }

            if (key == 'escape') {
                if(this.interface.prompt.error.visible) this.interface.prompt.error.button.component.callback()
                if(this.interface.prompt.info.visible) this.interface.prompt.info.button.component.callback()
                return
            }

            if (this.keyActions[k.action]) {
                this.keyActions[k.action](k.value || null)
            }
        }
    }

    sendMove(x, y, frame = null) {
        if (!this.visible || this.moveDisabled) {
            return;
        }

        this.penguin.move(x, y, frame);
        this.world.room.onPenguinUpdate(this.id);
    }

    sendMoveChain(movement, id) {
        if (!this.visible) {
            return;
        }

        this.penguin.moveChain(movement);
        this.world.room.onPenguinUpdate(this.id);

        let pos = movement.tweens[movement.tweens.length - 1].to
        this.world.network.send('send_move_chain', { id: id, x: pos[0], y: pos[1] });
    }

    sendFrame(frame, set = true) {
        if (!this.visible || this.isTweening) {
            return;
        }

        let items = this.world.client.penguin.items.equippedFlat;
        items = Object.values(items);

        //Play item sfx
        this.interface.main.playItemSfx(this.world.client.penguin,frame)

        if (items.includes(380006)) {
            return;
        }

        this.lockRotation = true;

        this.penguin.playFrame(frame, set);
        this.network.send('send_frame', { set: set, frame: frame });
        this.world.room.onPenguinUpdate(this.id);

        if (frame == 26 && !this.penguin.isTransformed) {
            
            switch (this.world.room.id) {
                case 813:
                    this.network.send('mine');
                    break
                case 805:
                    this.network.send('mine');
                    break;
                default:
                    break
            }
            // dancing in the cavemine
        }
    }

    sendSit(pointer) {
        if (!this.visible || this.isTweening) {
            return;
        }

        this.lockRotation = true;

        this.penguin.sit(pointer.x, pointer.y);
        this.world.room.onPenguinUpdate(this.id);
    }

    sendSnowball(x, y) {
        if (!this.visible || this.isTweening) {
            return;
        }

        let items = this.world.client.penguin.items.equippedFlat;
        items = Object.values(items);

        if (items.includes(380006)) {
            return;
        }

        this.lockRotation = true;

        if (this.world.room && this.world.room.id == 834 && !this.world.room?.isIgloo) return;
        this.interface.main.snowballFactory.throwBall(this.id, x, y);
        this.network.send('snowball', { x: x, y: y });
        this.world.room.onPenguinUpdate(this.id);
    }

    sendEmote(emote) {
        if (!this.visible || this.isBalloonThrottled) {
            return;
        }

        this.checkSnackCondition(emote);
        this.world.party.checkEmoteQuest(emote);

        this.interface.showEmoteBalloon(this.id, emote, false, this.world.client.modChat);
        this.network.send('send_emote', { emote: emote, modChat: this.world.client.modChat });
    }

    checkSnackCondition(emote) {
        if (emote != 24 && emote != 13) return;
        if (Object.keys(this.world.room.penguins).length <= 1) return;

        for (let area of this.world.room.snackStampAreas) {
            let x1 = area.x;
            let y1 = area.y;
            let x2 = area.x + area.width;
            let y2 = area.y + area.height;

            if (
                this.penguin.x >= x1 &&
                this.penguin.x <= x2 &&
                this.penguin.y >= y1 &&
                this.penguin.y <= y2
            ) {
                this.stampEarned(184);
            }
        }
    }

    tellJoke() {
        if (this.jokeCooldown) return;

        let jokeID = Math.floor(Math.random() * 15) + 1;

        this.network.send('tell_joke', { joke: jokeID, modChat: this.world.client.modChat});

        this.interface.showTextBalloon(this.id, this.crumbs.jokes[jokeID].joke, false, false, this.world.client.modChat, false);

        this.jokeCooldown = true;

        setTimeout(() => {
            // just incase u change rooms
            this.jokeCooldown = false;
        }, 15000);
    }

    giveTour(){
        if (this.tourCooldown) return

        this.network.send('give_tour', {modChat: this.world.client.modChat})

        this.tourCooldown = true
        this.interface.showTourBalloon(this.id, false, this.world.client.modChat)
    }
    
    sendSafe(safe) {
        if (!this.visible || this.isBalloonThrottled) {
            return;
        }

        let message = this.interface.main.safe.safeMessagesMap[safe];

        switch (safe) {
            case 701: // tell a joke
                this.tellJoke();
                return;
            case 702: // tour
                this.giveTour()
                break
            default:
                this.network.send('send_safe', { safe: safe, modChat: this.world.client.modChat})
                this.interface.showTextBalloon(this.id, message, false, false, this.world.client.modChat)
        }

    }

    sendStage(idx) {
        if (!this.visible || this.isBalloonThrottled) {
            return;
        }

        let message = this.world.crumbs.stage_script_messages[idx].message;

        this.network.send('send_stage', { message: idx, modChat: this.world.client.modChat});

        this.interface.showTextBalloon(this.id, message, false, false, this.world.client.modChat);
    }

    showCrosshair() {
        if (!this.visible || !this.interface.main) {
            return;
        }

        this.interface.main.onSnowballClick();
    }

    sendJoinRoom(id, name, x = 0, y = 0, randomRange = 40) {
        if (this.activeSeat) {
            return this.interface.prompt.showError(
                'Please exit your game before leaving the room'
            );
        }

        /*if (this.world.room && this.world.room.key.toLowerCase().startsWith("partytower") && this.currentTower && !name.toLowerCase().startsWith("partytower")) {
            this.interface.prompt.showWindow(`Are you sure you want to exit the tower in this way?\nYou will only get half of your treasure!`, 'dual', () => {
                this.tower.endGame(false)
                this.sendJoinRoom(id, name, x, y, randomRange)
                this.interface.prompt.window.visible = false
            })

            return
        }*/

        this.interface.showLoading(this.getString('joining', name))

        this.lockRotation = false;

        let random = PathEngine.getRandomPos(x, y, randomRange);
        this.network.send('join_room', { room: id, x: random.x, y: random.y });

        //MEDIEVAL
        /*if (!name.toLowerCase().startsWith("partytower") && this.currentTower) {
            this.currentTower.endGame(false)
        }*/
    }

    sendJoinLastRoom() {
        if (!this.world.lastRoom || this.world.room && this.world.lastRoom === this.world.room.id) {
            return
        }

        const room = this.crumbs.scenes.rooms[this.world.lastRoom]

        if (room) {
            this.sendJoinRoom(this.world.lastRoom, room.key, room.x, room.y, 80)
        }
    }

    sendJoinIgloo(id) {
        if (this.world.room.isIgloo && this.world.room.id == id) {
            return;
        }

        if (this.activeSeat) {
            return this.interface.prompt.showError(
                'Please exit your game before leaving the room'
            );
        }

        /*if (this.world.room && this.world.room.key.toLowerCase().startsWith("partytower") && this.currentTower) {
            return this.interface.prompt.showError(
                'Please exit the tower before\ntrying to join your Igloo.'
            );
        }*/

        if(this.world.isMascot(id) && this.rank < 2) return;

        this.interface.showLoading(this.getString('joining', 'igloo'));

        this.lockRotation = false;

        this.network.send('join_igloo', { igloo: id, x: 0, y: 0 });
    }

    sendJoinTable(id) {
        this.network.send('join_table', { table: id });
    }

    sendJoinWaddle(id) {
        this.network.send('join_waddle', { waddle: id });
    }

    sendMoveToSeat(id, seat, type = 'table') {
        let container

        switch (type) {
            case 'table':
                container = this.world.room.getTable(id)
                break
            case 'waddle':
                container = this.world.room.getWaddle(id)
                break
        }

        if (!container) {
            return
        }

        seat = container[`seat${seat}`]

        if (seat) {
            this.activeSeat = seat;

            let pos = this.getSeatWorldPos(seat);
            this.sendMove(pos.x, pos.y, seat.sitFrame);
        } else {
            this.activeSeat = true;
        }
    }

    sendLeaveSeat() {
        if (!this.activeSeat) {
            return;
        }

        let done = this.activeSeat.donePoint;

        if (done) {
            let pos = this.getSeatWorldPos(done);
            this.sendMove(pos.x, pos.y);
        }

        this.activeSeat = null;
        this.world.events.emit('leftseat');
    }

    getSeatWorldPos(seat) {
        let matrix = seat.getWorldTransformMatrix();

        return {
            x: matrix.getX(0, 0),
            y: matrix.getY(0, 0),
        };
    }

    stampEarned(stamp) {
        if(!this.stamps.includes(stamp)) this.network.send('collect_stamp', { stamp: stamp });
    }

    toggleModChat(dontActuallyToggle = false) {
        if(this.rank < 2) return

        if(!dontActuallyToggle) {
            if(this.chatSearch) return this.interface.prompt.showError('Please disable Chat Search first')
            this.modChat = !this.modChat
        }
        if(this.modChat) {
            this.interface.main.chat_send_icon.setFrame("mod-icon")
            this.interface.main.chat_box.setTintFill(2682092)
            document.getElementById('chat').style.color = '#000'
        } else {
            this.interface.main.chat_send_icon.setFrame("chat_send")
            this.interface.main.chat_box.clearTint()
            document.getElementById('chat').style.color = '#fff'
        }
    }

    toggleChatSearch() {
        if(this.rank < 2) return

        this.chatSearch = !this.chatSearch
        this.interface.main.chatInput.clearText()
        this.interface.main.chatLog.toggleChatSearch()
        if(this.chatSearch) {
            this.interface.main.chat_box.setTintFill(0xFF8771)
            document.getElementById('chat').style.color = '#000'
            document.getElementById('chat').placeholder = 'Chat log search ENABLED. Press = again to disable.'
        } else {
            this.toggleModChat(true)
            document.getElementById('chat').placeholder = ''
        }
    }

    questComplete(quest) {
        if(this.world.party.partyActive && !this.partyQuests.includes(quest)) this.network.send('quest_complete', {questId: quest});
    }

    sendTransform(_id) {
        if(_id < 0) return

        this.penguin.transformation(_id)
        this.world.room.onPenguinUpdate(this.id)
        this.interface.refreshPlayerCardById(this.id)

        if(_id == 0) {
            this.network.send('revert_transform')
        } else {
            this.network.send('transform_player', { transform: _id })
        }
    }

    hideInterface() {
        if (this.rank == 1) { return }

        this.interfaceHidden = !this.interfaceHidden

        if (this.world.client.hasItem(800)) {
            this.interface.main.phone_button.visible = this.interfaceHidden
        }

        this.interface.main.chatLog.visible = this.interfaceHidden
        this.interface.main.map_button.visible = this.interfaceHidden
        this.interface.main.dockContainer.visible = this.interfaceHidden
        this.interface.main.iconsContainer.visible = this.interfaceHidden
    }

    serverJump(skipBoxAnim = false) {
        if(skipBoxAnim) {
            return this.network.send('server_jump')
        }

        this.framesLoader = new SecretFramesLoader(this.world.client.penguin.room)
        this.framesLoader.loadFrames(-1, [165], () => {
            this.world.client.sendFrame(165, true)

            this.interface.time.addEvent({
                delay: 2900,
                callback: () => this.network.send('server_jump'),
                loop: false
            })
        })
    }

    setInteractionAsSeen(interaction) {
        if (!this.interactions) return // set in load_player packet

        this.interactions.push(interaction)
        this.world.network.send("set_interaction", {interaction: interaction})
    }

    hasViewedInteraction(interaction) {
        if (!this.interactions) return // set in load_player packet

        return this.interactions.includes(interaction)
    }
}
