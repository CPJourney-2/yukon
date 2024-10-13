import RoomScene from '@rooms/RoomScene'
import { MoveTo, ShowHint, Button, Animation, SimpleButton, Interactive } from '@components/components'

const TRAPPED_MUSIC = 1144

/* START OF COMPILED CODE */

export default class HQ extends RoomScene {

    constructor() {
        super("HQ");

        /** @type {Phaser.GameObjects.Sprite} */
        this.herbert;
        /** @type {Phaser.GameObjects.Container} */
        this.evergreen;
        /** @type {Phaser.GameObjects.Sprite} */
        this.book;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.bookBlock;
        /** @type {Phaser.GameObjects.Sprite} */
        this.door;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cabinet;
        /** @type {Phaser.GameObjects.Container} */
        this.interfaceIcons;
        /** @type {Phaser.GameObjects.Sprite} */
        this.chairbomb;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.colorCodeBtn;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            //'secretroom': () => this.checkQuest(),
            'sportshop': () => this.checkAndTriggerSportshop(),
        }

        this.physicsKey = 'mission11-new-hq-physics'
        this.questCompleted = false;

        this.musics = [7,TRAPPED_MUSIC]
        this.music = 7
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("mission11-new-hq-pack", "assets/media/rooms/_mission11/new_hq/mission11-new-hq-pack.json");
        this.load.pack("hq-pack", "assets/media/rooms/hq/hq-pack.json");
    }

    /** @returns {void} */
    _create() {

        // dojobg_1
        this.add.image(770, 481, "hq-room", "background");

        // bg
        const bg = this.add.sprite(770, 481, "mission11-new-hq", "bg0001");

        // herbert
        const herbert = this.add.sprite(785, 300, "mission11-new-hq", "herbert0001");

        // evergreen
        const evergreen = this.add.container(770, 481);
        evergreen.visible = false;

        // dojobg
        const dojobg = this.add.image(0, 0, "hq-room", "background");
        evergreen.add(dojobg);

        // agent_danceclub
        const agent_danceclub = this.add.sprite(-207, -231, "hq-room", "agent_danceclub0001");
        evergreen.add(agent_danceclub);

        // Beach
        const beach = this.add.rectangle(375, -123, 80, 70);
        beach.alpha = 0.00001;
        beach.isFilled = true;
        evergreen.add(beach);

        // Plaza
        const plaza = this.add.rectangle(279, -135, 80, 70);
        plaza.alpha = 0.00001;
        plaza.isFilled = true;
        evergreen.add(plaza);

        // Pet Shop
        const pet_Shop = this.add.rectangle(185, -142, 80, 70);
        pet_Shop.alpha = 0.00001;
        pet_Shop.isFilled = true;
        evergreen.add(pet_Shop);

        // Snow Forts
        const snow_Forts = this.add.rectangle(87, -144, 80, 70);
        snow_Forts.alpha = 0.00001;
        snow_Forts.isFilled = true;
        evergreen.add(snow_Forts);

        // Coffee Shop
        const coffee_Shop = this.add.rectangle(-38, -138, 80, 70);
        coffee_Shop.alpha = 0.00001;
        coffee_Shop.isFilled = true;
        evergreen.add(coffee_Shop);

        // Book Room
        const book_Room = this.add.rectangle(-142, -142, 80, 70);
        book_Room.alpha = 0.00001;
        book_Room.isFilled = true;
        evergreen.add(book_Room);

        // Ski Lodge
        const ski_Lodge = this.add.rectangle(-240, -137, 80, 70);
        ski_Lodge.alpha = 0.00001;
        ski_Lodge.isFilled = true;
        evergreen.add(ski_Lodge);

        // Sport Shop
        const sport_Shop = this.add.rectangle(-338, -119, 80, 70);
        sport_Shop.alpha = 0.00001;
        sport_Shop.isFilled = true;
        evergreen.add(sport_Shop);

        // Beacon
        const beacon = this.add.rectangle(434, -208, 80, 70);
        beacon.alpha = 0.00001;
        beacon.isFilled = true;
        evergreen.add(beacon);

        // Lighthouse
        const lighthouse = this.add.rectangle(339, -231, 80, 70);
        lighthouse.alpha = 0.00001;
        lighthouse.isFilled = true;
        evergreen.add(lighthouse);

        // Pizza Parlor
        const pizza_Parlor = this.add.rectangle(245, -235, 80, 70);
        pizza_Parlor.alpha = 0.00001;
        pizza_Parlor.isFilled = true;
        evergreen.add(pizza_Parlor);

        // Stadium/Rink
        const stadium_Rink = this.add.rectangle(159, -239, 70, 70);
        stadium_Rink.alpha = 0.00001;
        stadium_Rink.isFilled = true;
        evergreen.add(stadium_Rink);

        // Gift Shop
        const gift_Shop = this.add.rectangle(71, -238, 65, 70);
        gift_Shop.alpha = 0.00001;
        gift_Shop.isFilled = true;
        evergreen.add(gift_Shop);

        // Town
        const town = this.add.rectangle(-20, -240, 80, 70);
        town.alpha = 0.00001;
        town.isFilled = true;
        evergreen.add(town);

        // Dock
        const dock = this.add.rectangle(-113, -237, 80, 70);
        dock.alpha = 0.00001;
        dock.isFilled = true;
        evergreen.add(dock);

        // Dance Club
        const dance_Club = this.add.rectangle(-207, -233, 80, 70);
        dance_Club.alpha = 0.00001;
        dance_Club.isFilled = true;
        evergreen.add(dance_Club);

        // Lodge Attic
        const lodge_Attic = this.add.rectangle(-404, -206, 80, 70);
        lodge_Attic.alpha = 0.00001;
        lodge_Attic.isFilled = true;
        evergreen.add(lodge_Attic);

        // Lounge
        const lounge = this.add.rectangle(-305, -225, 80, 70);
        lounge.alpha = 0.00001;
        lounge.isFilled = true;
        evergreen.add(lounge);

        // Stage
        const stage = this.add.rectangle(263, -330, 80, 70);
        stage.alpha = 0.00001;
        stage.isFilled = true;
        evergreen.add(stage);

        // Cove
        const cove = this.add.rectangle(166, -331, 80, 70);
        cove.alpha = 0.00001;
        cove.isFilled = true;
        evergreen.add(cove);

        // Forest
        const forest = this.add.rectangle(73, -339, 80, 70);
        forest.alpha = 0.00001;
        forest.isFilled = true;
        evergreen.add(forest);

        // Dojo
        const dojo = this.add.rectangle(-19, -336, 80, 70);
        dojo.alpha = 0.00001;
        dojo.isFilled = true;
        evergreen.add(dojo);

        // Ski Hill
        const ski_Hill = this.add.rectangle(-116, -333, 80, 70);
        ski_Hill.alpha = 0.00001;
        ski_Hill.isFilled = true;
        evergreen.add(ski_Hill);

        // skivillage
        const skivillage = this.add.rectangle(-218, -328, 80, 70);
        skivillage.alpha = 0.00001;
        skivillage.isFilled = true;
        evergreen.add(skivillage);

        // courtyard
        const courtyard = this.add.rectangle(-316, -322, 80, 70);
        courtyard.alpha = 0.00001;
        courtyard.isFilled = true;
        evergreen.add(courtyard);

        // table
        this.add.image(1278, 531, "mission11-new-hq", "table");

        // book
        const book = this.add.sprite(1319, 463, "mission11-new-hq", "book0001");

        // bookBlock
        const bookBlock = this.add.rectangle(1319, 459, 80, 80);
        bookBlock.fillColor = 2150299;
        bookBlock.fillAlpha = 0.5;

        // books
        this.add.image(1341, 477, "mission11-new-hq", "books");

        // chairone
        const chairone = this.add.image(1170.737783443294, 588.4267006597639, "hq-room", "chairone");
        chairone.setOrigin(0.46370885133306133, 0.34673155660079574);

        // chairtwo
        const chairtwo = this.add.image(466.2980752081793, 587.3509623959104, "hq-room", "chairtwo");
        chairtwo.setOrigin(0.7848143117805468, 0.3997619533782059);

        // door
        const door = this.add.sprite(183, 447, "mission11-new-hq", "door0001");

        // cabinet
        const cabinet = this.add.sprite(1447, 565, "mission11-new-hq", "closet");

        // interfaceIcons
        const interfaceIcons = this.add.container(1423, 751.0000610351562);

        // oldmission
        const oldmission = this.add.image(2, 0, "hq-room", "sign");
        interfaceIcons.add(oldmission);

        // fish
        const fish = this.add.image(0, 117.99993896484375, "hq-room", "fish");
        interfaceIcons.add(fish);

        // chairbomb
        const chairbomb = this.add.sprite(950, 725, "mission11-newhq-chairbomb", "chairbomb0001");
        chairbomb.setOrigin(0.4264793203972074, 0.8678989339618957);
        chairbomb.visible = false;

        // colorCodeBtn
        const colorCodeBtn = this.add.rectangle(1332, 464, 80, 80);
        colorCodeBtn.visible = false;
        colorCodeBtn.fillColor = 2150299;
        colorCodeBtn.fillAlpha = 0.5;

        // lists
        const sort = [chairtwo, chairone, chairbomb];

        // bg (components)
        const bgAnimation = new Animation(bg);
        bgAnimation.key = "bg";
        bgAnimation.end = 10;

        // agent_danceclub (components)
        const agent_danceclubAnimation = new Animation(agent_danceclub);
        agent_danceclubAnimation.key = "agent_danceclub";
        agent_danceclubAnimation.end = 7;
        agent_danceclubAnimation.frameRate = 1;

        // beach (components)
        const beachShowHint = new ShowHint(beach);
        beachShowHint.text = "Beach";
        const beachSimpleButton = new SimpleButton(beach);
        beachSimpleButton.callback = () =>  this.teleportRoom(400);

        // plaza (components)
        const plazaShowHint = new ShowHint(plaza);
        plazaShowHint.text = "Plaza";
        const plazaSimpleButton = new SimpleButton(plaza);
        plazaSimpleButton.callback = () =>  this.teleportRoom(300);

        // pet_Shop (components)
        const pet_ShopShowHint = new ShowHint(pet_Shop);
        pet_ShopShowHint.text = "Pet Shop";
        const pet_ShopSimpleButton = new SimpleButton(pet_Shop);
        pet_ShopSimpleButton.callback = () =>  this.teleportRoom(310);

        // snow_Forts (components)
        const snow_FortsShowHint = new ShowHint(snow_Forts);
        snow_FortsShowHint.text = "Snow Forts";
        const snow_FortsSimpleButton = new SimpleButton(snow_Forts);
        snow_FortsSimpleButton.callback = () =>  this.teleportRoom(801);

        // coffee_Shop (components)
        const coffee_ShopShowHint = new ShowHint(coffee_Shop);
        coffee_ShopShowHint.text = "Coffee Shop";
        const coffee_ShopSimpleButton = new SimpleButton(coffee_Shop);
        coffee_ShopSimpleButton.callback = () =>  this.teleportRoom(110);

        // book_Room (components)
        const book_RoomShowHint = new ShowHint(book_Room);
        book_RoomShowHint.text = "Book Room";
        const book_RoomSimpleButton = new SimpleButton(book_Room);
        book_RoomSimpleButton.callback = () =>  this.teleportRoom(111);

        // ski_Lodge (components)
        const ski_LodgeShowHint = new ShowHint(ski_Lodge);
        ski_LodgeShowHint.text = "Ski Lodge";
        const ski_LodgeSimpleButton = new SimpleButton(ski_Lodge);
        ski_LodgeSimpleButton.callback = () =>  this.teleportRoom(220);

        // sport_Shop (components)
        const sport_ShopShowHint = new ShowHint(sport_Shop);
        sport_ShopShowHint.text = "Sports Shop";
        const sport_ShopSimpleButton = new SimpleButton(sport_Shop);
        sport_ShopSimpleButton.callback = () =>  this.teleportRoom(210);

        // beacon (components)
        const beaconShowHint = new ShowHint(beacon);
        beaconShowHint.text = "Beacon";
        const beaconSimpleButton = new SimpleButton(beacon);
        beaconSimpleButton.callback = () =>  this.teleportRoom(411);

        // lighthouse (components)
        const lighthouseShowHint = new ShowHint(lighthouse);
        lighthouseShowHint.text = "Lighthouse";
        const lighthouseSimpleButton = new SimpleButton(lighthouse);
        lighthouseSimpleButton.callback = () =>  this.teleportRoom(410);

        // pizza_Parlor (components)
        const pizza_ParlorShowHint = new ShowHint(pizza_Parlor);
        pizza_ParlorShowHint.text = "Pizza Parlor";
        const pizza_ParlorSimpleButton = new SimpleButton(pizza_Parlor);
        pizza_ParlorSimpleButton.callback = () =>  this.teleportRoom(330);

        // stadium_Rink (components)
        const stadium_RinkShowHint = new ShowHint(stadium_Rink);
        stadium_RinkShowHint.text = "Stadium";
        const stadium_RinkSimpleButton = new SimpleButton(stadium_Rink);
        stadium_RinkSimpleButton.callback = () =>  this.teleportRoom(802);

        // gift_Shop (components)
        const gift_ShopShowHint = new ShowHint(gift_Shop);
        gift_ShopShowHint.text = "Gift Shop";
        const gift_ShopSimpleButton = new SimpleButton(gift_Shop);
        gift_ShopSimpleButton.callback = () =>  this.teleportRoom(130);

        // town (components)
        const townShowHint = new ShowHint(town);
        townShowHint.text = "Town";
        const townSimpleButton = new SimpleButton(town);
        townSimpleButton.callback = () =>  this.teleportRoom(100);

        // dock (components)
        const dockShowHint = new ShowHint(dock);
        dockShowHint.text = "Dock";
        const dockSimpleButton = new SimpleButton(dock);
        dockSimpleButton.callback = () =>  this.teleportRoom(800);

        // dance_Club (components)
        const dance_ClubShowHint = new ShowHint(dance_Club);
        dance_ClubShowHint.text = "Dance Club";
        const dance_ClubSimpleButton = new SimpleButton(dance_Club);
        dance_ClubSimpleButton.callback = () =>  this.teleportRoom(120);

        // lodge_Attic (components)
        const lodge_AtticShowHint = new ShowHint(lodge_Attic);
        lodge_AtticShowHint.text = "Lodge Attic";
        const lodge_AtticSimpleButton = new SimpleButton(lodge_Attic);
        lodge_AtticSimpleButton.callback = () =>  this.teleportRoom(221);

        // lounge (components)
        const loungeShowHint = new ShowHint(lounge);
        loungeShowHint.text = "Dance Lounge";
        const loungeSimpleButton = new SimpleButton(lounge);
        loungeSimpleButton.callback = () =>  this.teleportRoom(121);

        // stage (components)
        const stageShowHint = new ShowHint(stage);
        stageShowHint.text = "Stage";
        const stageSimpleButton = new SimpleButton(stage);
        stageSimpleButton.callback = () =>  this.teleportRoom(340);

        // cove (components)
        const coveShowHint = new ShowHint(cove);
        coveShowHint.text = "Cove";
        const coveSimpleButton = new SimpleButton(cove);
        coveSimpleButton.callback = () =>  this.teleportRoom(810);

        // forest (components)
        const forestShowHint = new ShowHint(forest);
        forestShowHint.text = "Forest";
        const forestSimpleButton = new SimpleButton(forest);
        forestSimpleButton.callback = () =>  this.teleportRoom(809);

        // dojo (components)
        const dojoShowHint = new ShowHint(dojo);
        dojoShowHint.text = "The Dojo";
        const dojoSimpleButton = new SimpleButton(dojo);
        dojoSimpleButton.callback = () =>  this.teleportRoom(320);

        // ski_Hill (components)
        const ski_HillShowHint = new ShowHint(ski_Hill);
        ski_HillShowHint.text = "Ski Hill";
        const ski_HillSimpleButton = new SimpleButton(ski_Hill);
        ski_HillSimpleButton.callback = () =>  this.teleportRoom(230);

        // skivillage (components)
        const skivillageShowHint = new ShowHint(skivillage);
        skivillageShowHint.text = "Ski Village";
        const skivillageSimpleButton = new SimpleButton(skivillage);
        skivillageSimpleButton.callback = () =>  this.teleportRoom(200);

        // courtyard (components)
        const courtyardShowHint = new ShowHint(courtyard);
        courtyardShowHint.text = "Dojo Courtyard";
        const courtyardSimpleButton = new SimpleButton(courtyard);
        courtyardSimpleButton.callback = () =>  this.teleportRoom(319);

        // book (components)
        const bookAnimation = new Animation(book);
        bookAnimation.key = "book";
        bookAnimation.end = 4;
        bookAnimation.repeat = 0;
        bookAnimation.autoPlay = false;
        const bookSimpleButton = new SimpleButton(book);
        bookSimpleButton.hoverCallback = () => {};
        bookSimpleButton.hoverOutCallback = () => {};
        bookSimpleButton.callback = () => this.bookCallback();
        bookSimpleButton.pixelPerfect = true;
        bookSimpleButton.useHandCursor = false;

        // bookBlock (components)
        new Interactive(bookBlock);

        // door (components)
        const doorSimpleButton = new SimpleButton(door);
        doorSimpleButton.hoverCallback = () => this.HQDoor();
        doorSimpleButton.hoverOutCallback = () => this.HQDone();
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 203;
        doorMoveTo.y = 583;
        const doorAnimation = new Animation(door);
        doorAnimation.key = "door";
        doorAnimation.end = 100;
        doorAnimation.autoPlay = false;

        // oldmission (components)
        const oldmissionButton = new Button(oldmission);
        oldmissionButton.spriteName = "sign";
        oldmissionButton.callback = () =>  this.interface.loadWidget('MissionMenu');

        // fish (components)
        const fishButton = new Button(fish);
        fishButton.spriteName = "fish";
        fishButton.callback = () =>  this.interface.loadWidget('FISH');

        // chairbomb (components)
        const chairbombAnimation = new Animation(chairbomb);
        chairbombAnimation.key = "chairbomb";
        chairbombAnimation.end = 46;
        chairbombAnimation.repeat = 0;
        chairbombAnimation.autoPlay = false;

        // colorCodeBtn (components)
        const colorCodeBtnSimpleButton = new SimpleButton(colorCodeBtn);
        colorCodeBtnSimpleButton.callback = () => this.openColorCode();

        this.herbert = herbert;
        this.evergreen = evergreen;
        this.book = book;
        this.bookBlock = bookBlock;
        this.door = door;
        this.cabinet = cabinet;
        this.interfaceIcons = interfaceIcons;
        this.chairbomb = chairbomb;
        this.colorCodeBtn = colorCodeBtn;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create(){
        super.create()

        if(this.world.party.isNotAgent && this.world.client.pirate_status < 2) this.world.party.updateCheckpoint(2)

        if(this.world.client.pirate_status >= 2) {
            this.evergreen.visible = false
        } else {
            this.evergreen.visible = true
        }

        this.gary = this.createNPCPenguin('Gary', {
            color: 19,
            face: 115,
            body: 4022,
            frame: 8
        }, () => {
            if(this.client.pirate_status == 6 && this.world.party.cookies.herbertTeleportedYou) return
            let index = 0
            if(this.world.client.pirate_status >= 7) {
                index = 42
            }
            else if(this.world.client.pirate_status >= 3) {
                index = 38
            }
            else if(this.world.client.pirate_status >= 2) {
                if(this.world.party.isNotAgent) {
                    index = 29
                } else {
                    index = 27
                }
            }
            else if(this.world.client.pirate_status >= 1) {
                index = 25
            }
            this.world.party.showDialogue('gary', index)
        })
        this.gary.goto(613,631)

        if(this.client.pirate_status >= 6) {
            this.rookie = this.createNPCPenguin('Rookie', {
                color: 2,
                head: 1257,
                face: 2030,
                x: 835,
                y: 780
            }, () => {
                if(this.client.pirate_status == 6 && this.world.party.cookies.herbertTeleportedYou) return
                this.world.party.showDialogue('rookie', 45)
            })
            this.rookie.playFrame(6)
        }

        if(this.world.client.pirate_status == 6 && this.world.party.cookies.herbertTeleportedYou) {
            this.stopMusic()

            this.world.party.showCutscene(1, () => {
                this.music = TRAPPED_MUSIC
                this.setMusic()
                this.chairbomb.visible = true
                this.world.party.showDialogue('gary', 39)
            })
        } else if(this.world.client.pirate_status == 7) {
            this.music = TRAPPED_MUSIC
            this.setMusic()
            this.chairbomb.visible = true
            this.chairbomb.setFrame('chairbomb0046')
            this.herbert.play('screen-pixelanim')
            this.getJiggyWithIt()
            this.rookie.goto(220, 600)
            this.gary.goto(835,715)
            this.rookie.playFrame(4)
            this.door.__Animation.play()
        }
    }

    getJiggyWithIt() {
        // Move rookie to the door
        //this.rookie.move(220, 600, 4)

        // Add button to the cabinet
        const cabinetBtn = new Button(this.cabinet)
        cabinetBtn.spriteName = 'closet'
        cabinetBtn.pixelPerfect = true
        cabinetBtn.callback = () => this.interface.loadWidget('PSANoteCode')
        cabinetBtn.start()

        this.bookBlock.visible = false
    }

    teleportRoom(id){
        let room = this.crumbs.scenes.rooms[id]
        if (this.world.room.key == room.key) {
            return
        }

        this.world.client.sendJoinRoom(id, room.key, room.x, room.y, 80)
    }

    herbertAppears() {
        this.time.addEvent({
            delay: 700,
            callback: () => {
                this.herbert.play('screen-poke')
                this.world.room.herbert.once('animationcomplete', () => this.world.room.herbert.play('screen-blink'))
                this.gary.playFrame(6)
            }
        })
        this.time.addEvent({
            delay: 2500,
            callback: () => this.world.party.showDialogue('gary', 31)
        })

        this.rookie = this.createNPCPenguin('Rookie', {
            color: 2,
            head: 1257,
            face: 2030,
        }, () => {
            this.world.party.showDialogue('rookie', 27)
        })
        this.rookie.goto(220,630)
        this.rookie.move(448, 734)
        this.rookie.afterMove = () => {
            this.rookie.afterMove = null
            this.rookie.move(927, 635, 4)
        }
    }

    garyWalksToBomb() {
        this.gary.move(835,715)
        this.gary.afterMove = () => {
            this.gary.playFrame(8)
            this.chairbomb.__Animation.play()
            this.chairbomb.once('animationcomplete', () => this.world.party.showDialogue('gary', 40))
        }
    }

    herbertAppearsAgain() {
        this.time.addEvent({
            delay: 700,
            callback: () => {
                this.herbert.play('screen-poke')
                this.world.room.herbert.once('animationcomplete', () => this.world.room.herbert.play('screen-blink'))
                this.gary.playFrame(6)
            }
        })
        this.time.addEvent({
            delay: 2500,
            callback: () => this.world.party.showDialogue('herbert', 34)
        })
    }

    bookCallback() {
        if(this.client.pirate_status < 7) return

        this.book.disableInteractive()
        this.book.__Animation.play()
        this.book.once('animationcomplete', () => {
            this.time.addEvent({
                delay: 500,
                callback: () => {
                    this.colorCodeBtn.visible = true
                    this.cabinet.disableInteractive()
                    this.cabinet.play('closetquest')
                }
            })
        })
    }

    openColorCode() {
        if(this.world.party.cookies.solvedColorLock) return
        this.world.party.cookies.launchColorLock()
    }

    onColorLockComplete() {
        this.colorCodeBtn.visible = false
        this.cabinet.play('closetopen')
        this.cabinet.once('animationcomplete', () => {
            this.world.party.showDialogue('dot', 0)
        })
    }

    showExplosionCutscene() {
        this.stopMusic()
        this.world.party.showCutscene(2, () => {
            this.world.party.cookies.herbertTeleportedYou = false
            this.triggerRoom(860, 920, 705)
        })
    }

    HQDoor(){
        if(this.world.client.pirate_status == 7) return
        this.door.play('hq-door')
    }

    HQDone(){
        if(this.world.client.pirate_status == 7) return
        this.door.play('hq-done')
    }

    checkAndTriggerSportshop() {
        if (this.client.pirate_status === 7) {
            return;
        }

        this.triggerRoom(210, 495, 580);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */