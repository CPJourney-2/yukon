
// You can write more code here

import RoomScene from '@rooms/RoomScene'
import { MoveTo, Button, Animation, ShowHint, SimpleButton, ZoneTrigger, HoverAnimation } from '@components/components'

/* START OF COMPILED CODE */

export default class HQ extends RoomScene {

    constructor() {
        super("HQ");

        /** @type {Phaser.GameObjects.Sprite} */
        this.door;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cabinet;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cabinet_nonpsa;
        /** @type {Phaser.GameObjects.Container} */
        this.interfaceIcons;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            //'courtyard': () => this.triggerRoom(319, 1240, 660),
            //'sensei': () => this.triggerGame(904),
             /* this will go to the sensei welcome thing, not it's own game*/

            'sportshop': () => this.triggerRoom(210, 495, 580)


            //'mat_a': () => this.triggerTable('four', 205),
            //'mat_b': () => this.triggerTable('four', 206),
            //'mat_c': () => this.triggerTable('four', 207),
            //'mat_d': () => this.triggerTable('four', 207)
        }
        this.music = 7

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("hq-pack", "assets/media/rooms/hq/hq-pack.json");
    }

    /** @returns {void} */
    _create() {

        // dojobg
        this.add.image(770, 481, "hq-room", "background");

        // chairone
        const chairone = this.add.image(1170.737783443294, 588.4267006597639, "hq-room", "chairone");
        chairone.setOrigin(0.46370885133306133, 0.34673155660079574);

        // chairtwo
        const chairtwo = this.add.image(466.2980752081793, 587.3509623959104, "hq-room", "chairtwo");
        chairtwo.setOrigin(0.7848143117805468, 0.3997619533782059);

        // door
        const door = this.add.sprite(183, 447, "hq-room", "truedoor0001");

        // cabinet
        const cabinet = this.add.sprite(1432, 566, "hq-room", "cabinet0001");
        cabinet.visible = false;

        // cabinet_nonpsa
        const cabinet_nonpsa = this.add.sprite(1453, 578, "hq-room", "cabinet0001");

        // agent_danceclub
        const agent_danceclub = this.add.sprite(563, 250, "hq-room", "agent_danceclub0001");

        // courtyard
        const courtyard = this.add.rectangle(454, 160, 80, 70);
        courtyard.alpha = 0.00001;
        courtyard.isFilled = true;

        // skivillage
        const skivillage = this.add.rectangle(552, 154, 80, 70);
        skivillage.alpha = 0.00001;
        skivillage.isFilled = true;

        // Ski Hill
        const ski_Hill = this.add.rectangle(654, 149, 80, 70);
        ski_Hill.alpha = 0.00001;
        ski_Hill.isFilled = true;

        // Dojo
        const dojo = this.add.rectangle(751, 146, 80, 70);
        dojo.alpha = 0.00001;
        dojo.isFilled = true;

        // Forest
        const forest = this.add.rectangle(843, 143, 80, 70);
        forest.alpha = 0.00001;
        forest.isFilled = true;

        // Cove
        const cove = this.add.rectangle(936, 151, 80, 70);
        cove.alpha = 0.00001;
        cove.isFilled = true;

        // Stage
        const stage = this.add.rectangle(1033, 152, 80, 70);
        stage.alpha = 0.00001;
        stage.isFilled = true;

        // Lounge
        const lounge = this.add.rectangle(465, 257, 80, 70);
        lounge.alpha = 0.00001;
        lounge.isFilled = true;

        // Lodge Attic
        const lodge_Attic = this.add.rectangle(366, 276, 80, 70);
        lodge_Attic.alpha = 0.00001;
        lodge_Attic.isFilled = true;

        // Dance Club
        const dance_Club = this.add.rectangle(563, 249, 80, 70);
        dance_Club.alpha = 0.00001;
        dance_Club.isFilled = true;

        // Dock
        const dock = this.add.rectangle(657, 245, 80, 70);
        dock.alpha = 0.00001;
        dock.isFilled = true;

        // Town
        const town = this.add.rectangle(750, 242, 80, 70);
        town.alpha = 0.00001;
        town.isFilled = true;

        // Gift Shop
        const gift_Shop = this.add.rectangle(841, 244, 65, 70);
        gift_Shop.alpha = 0.00001;
        gift_Shop.isFilled = true;

        // rink_screen
        const rink_screen = this.add.image(929, 246, "hq-room", "rink_screen");
        rink_screen.visible = false;

        // baseball_screen
        const baseball_screen = this.add.image(928, 246, "hq-room", "baseball_screen");
        baseball_screen.visible = false;

        // Stadium/Rink
        const stadium_Rink = this.add.rectangle(929, 243, 70, 70);
        stadium_Rink.alpha = 0.00001;
        stadium_Rink.isFilled = true;

        // Pizza Parlor
        const pizza_Parlor = this.add.rectangle(1015, 247, 80, 70);
        pizza_Parlor.alpha = 0.00001;
        pizza_Parlor.isFilled = true;

        // Lighthouse
        const lighthouse = this.add.rectangle(1109, 251, 80, 70);
        lighthouse.alpha = 0.00001;
        lighthouse.isFilled = true;

        // Beacon
        const beacon = this.add.rectangle(1204, 274, 80, 70);
        beacon.alpha = 0.00001;
        beacon.isFilled = true;

        // Sport Shop
        const sport_Shop = this.add.rectangle(432, 363, 80, 70);
        sport_Shop.alpha = 0.00001;
        sport_Shop.isFilled = true;

        // Ski Lodge
        const ski_Lodge = this.add.rectangle(530, 345, 80, 70);
        ski_Lodge.alpha = 0.00001;
        ski_Lodge.isFilled = true;

        // Book Room
        const book_Room = this.add.rectangle(628, 340, 80, 70);
        book_Room.alpha = 0.00001;
        book_Room.isFilled = true;

        // Coffee Shop
        const coffee_Shop = this.add.rectangle(732, 344, 80, 70);
        coffee_Shop.alpha = 0.00001;
        coffee_Shop.isFilled = true;

        // Snow Forts
        const snow_Forts = this.add.rectangle(857, 338, 80, 70);
        snow_Forts.alpha = 0.00001;
        snow_Forts.isFilled = true;

        // Pet Shop
        const pet_Shop = this.add.rectangle(955, 340, 80, 70);
        pet_Shop.alpha = 0.00001;
        pet_Shop.isFilled = true;

        // Plaza
        const plaza = this.add.rectangle(1049, 347, 80, 70);
        plaza.alpha = 0.00001;
        plaza.isFilled = true;

        // Beach
        const beach = this.add.rectangle(1145, 359, 80, 70);
        beach.alpha = 0.00001;
        beach.isFilled = true;

        // psa text
        const psa_text = this.add.text(1270, 325, "", {});
        psa_text.angle = 28;
        psa_text.text = "KEEP UP THE \nGOOD WORK \nAGENTS!";
        psa_text.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "CCComicrazy", "fontSize": "11px", "fontStyle": "bold italic", "stroke": "#000000ff" });
        psa_text.setPadding({"left":10,"top":10,"right":10,"bottom":10});

        // interfaceIcons
        const interfaceIcons = this.add.container(1423, 751.0000610351562);

        // oldmission
        const oldmission = this.add.image(2, 0, "hq-room", "sign");
        interfaceIcons.add(oldmission);

        // fish
        const fish = this.add.image(0, 117.99993896484375, "hq-room", "fish");
        interfaceIcons.add(fish);

        // lists
        const sort = [chairtwo, chairone];

        // door (components)
        const doorSimpleButton = new SimpleButton(door);
        doorSimpleButton.hoverCallback = () => this.HQDoor();
        doorSimpleButton.hoverOutCallback = () => this.HQDone();
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 203;
        doorMoveTo.y = 583;

        // cabinet (components)
        const cabinetSimpleButton = new SimpleButton(cabinet);
        cabinetSimpleButton.hoverCallback = () => this.cabinetHover();
        cabinetSimpleButton.hoverOutCallback = () => this.cabinetDone();

        // agent_danceclub (components)
        const agent_danceclubAnimation = new Animation(agent_danceclub);
        agent_danceclubAnimation.key = "agent_danceclub";
        agent_danceclubAnimation.end = 7;
        agent_danceclubAnimation.frameRate = 1;

        // courtyard (components)
        const courtyardShowHint = new ShowHint(courtyard);
        courtyardShowHint.text = "Dojo Courtyard";
        const courtyardSimpleButton = new SimpleButton(courtyard);
        courtyardSimpleButton.callback = () =>  this.teleportRoom(319);

        // skivillage (components)
        const skivillageShowHint = new ShowHint(skivillage);
        skivillageShowHint.text = "Ski Village";
        const skivillageSimpleButton = new SimpleButton(skivillage);
        skivillageSimpleButton.callback = () =>  this.teleportRoom(200);

        // ski_Hill (components)
        const ski_HillShowHint = new ShowHint(ski_Hill);
        ski_HillShowHint.text = "Ski Hill";
        const ski_HillSimpleButton = new SimpleButton(ski_Hill);
        ski_HillSimpleButton.callback = () =>  this.teleportRoom(230);

        // dojo (components)
        const dojoShowHint = new ShowHint(dojo);
        dojoShowHint.text = "The Dojo";
        const dojoSimpleButton = new SimpleButton(dojo);
        dojoSimpleButton.callback = () =>  this.teleportRoom(320);

        // forest (components)
        const forestShowHint = new ShowHint(forest);
        forestShowHint.text = "Forest";
        const forestSimpleButton = new SimpleButton(forest);
        forestSimpleButton.callback = () =>  this.teleportRoom(809);

        // cove (components)
        const coveShowHint = new ShowHint(cove);
        coveShowHint.text = "Cove";
        const coveSimpleButton = new SimpleButton(cove);
        coveSimpleButton.callback = () =>  this.teleportRoom(810);

        // stage (components)
        const stageShowHint = new ShowHint(stage);
        stageShowHint.text = "Stage";
        const stageSimpleButton = new SimpleButton(stage);
        stageSimpleButton.callback = () =>  this.teleportRoom(340);

        // lounge (components)
        const loungeShowHint = new ShowHint(lounge);
        loungeShowHint.text = "Dance Lounge";
        const loungeSimpleButton = new SimpleButton(lounge);
        loungeSimpleButton.callback = () =>  this.teleportRoom(121);

        // lodge_Attic (components)
        const lodge_AtticShowHint = new ShowHint(lodge_Attic);
        lodge_AtticShowHint.text = "Lodge Attic";
        const lodge_AtticSimpleButton = new SimpleButton(lodge_Attic);
        lodge_AtticSimpleButton.callback = () =>  this.teleportRoom(221);

        // dance_Club (components)
        const dance_ClubShowHint = new ShowHint(dance_Club);
        dance_ClubShowHint.text = "Dance Club";
        const dance_ClubSimpleButton = new SimpleButton(dance_Club);
        dance_ClubSimpleButton.callback = () =>  this.teleportRoom(120);

        // dock (components)
        const dockShowHint = new ShowHint(dock);
        dockShowHint.text = "Dock";
        const dockSimpleButton = new SimpleButton(dock);
        dockSimpleButton.callback = () =>  this.teleportRoom(800);

        // town (components)
        const townShowHint = new ShowHint(town);
        townShowHint.text = "Town";
        const townSimpleButton = new SimpleButton(town);
        townSimpleButton.callback = () =>  this.teleportRoom(100);

        // gift_Shop (components)
        const gift_ShopShowHint = new ShowHint(gift_Shop);
        gift_ShopShowHint.text = "Gift Shop";
        const gift_ShopSimpleButton = new SimpleButton(gift_Shop);
        gift_ShopSimpleButton.callback = () =>  this.teleportRoom(130);

        // stadium_Rink (components)
        const stadium_RinkShowHint = new ShowHint(stadium_Rink);
        stadium_RinkShowHint.text = "Stadium";
        const stadium_RinkSimpleButton = new SimpleButton(stadium_Rink);
        stadium_RinkSimpleButton.callback = () =>  this.teleportRoom(802);

        // pizza_Parlor (components)
        const pizza_ParlorShowHint = new ShowHint(pizza_Parlor);
        pizza_ParlorShowHint.text = "Pizza Parlor";
        const pizza_ParlorSimpleButton = new SimpleButton(pizza_Parlor);
        pizza_ParlorSimpleButton.callback = () =>  this.teleportRoom(330);

        // lighthouse (components)
        const lighthouseShowHint = new ShowHint(lighthouse);
        lighthouseShowHint.text = "Lighthouse";
        const lighthouseSimpleButton = new SimpleButton(lighthouse);
        lighthouseSimpleButton.callback = () =>  this.teleportRoom(410);

        // beacon (components)
        const beaconShowHint = new ShowHint(beacon);
        beaconShowHint.text = "Beacon";
        const beaconSimpleButton = new SimpleButton(beacon);
        beaconSimpleButton.callback = () =>  this.teleportRoom(411);

        // sport_Shop (components)
        const sport_ShopShowHint = new ShowHint(sport_Shop);
        sport_ShopShowHint.text = "Sports Shop";
        const sport_ShopSimpleButton = new SimpleButton(sport_Shop);
        sport_ShopSimpleButton.callback = () =>  this.teleportRoom(210);

        // ski_Lodge (components)
        const ski_LodgeShowHint = new ShowHint(ski_Lodge);
        ski_LodgeShowHint.text = "Ski Lodge";
        const ski_LodgeSimpleButton = new SimpleButton(ski_Lodge);
        ski_LodgeSimpleButton.callback = () =>  this.teleportRoom(220);

        // book_Room (components)
        const book_RoomShowHint = new ShowHint(book_Room);
        book_RoomShowHint.text = "Book Room";
        const book_RoomSimpleButton = new SimpleButton(book_Room);
        book_RoomSimpleButton.callback = () =>  this.teleportRoom(111);

        // coffee_Shop (components)
        const coffee_ShopShowHint = new ShowHint(coffee_Shop);
        coffee_ShopShowHint.text = "Coffee Shop";
        const coffee_ShopSimpleButton = new SimpleButton(coffee_Shop);
        coffee_ShopSimpleButton.callback = () =>  this.teleportRoom(110);

        // snow_Forts (components)
        const snow_FortsShowHint = new ShowHint(snow_Forts);
        snow_FortsShowHint.text = "Snow Forts";
        const snow_FortsSimpleButton = new SimpleButton(snow_Forts);
        snow_FortsSimpleButton.callback = () =>  this.teleportRoom(801);

        // pet_Shop (components)
        const pet_ShopShowHint = new ShowHint(pet_Shop);
        pet_ShopShowHint.text = "Pet Shop";
        const pet_ShopSimpleButton = new SimpleButton(pet_Shop);
        pet_ShopSimpleButton.callback = () =>  this.teleportRoom(310);

        // plaza (components)
        const plazaShowHint = new ShowHint(plaza);
        plazaShowHint.text = "Plaza";
        const plazaSimpleButton = new SimpleButton(plaza);
        plazaSimpleButton.callback = () =>  this.teleportRoom(300);

        // beach (components)
        const beachShowHint = new ShowHint(beach);
        beachShowHint.text = "Beach";
        const beachSimpleButton = new SimpleButton(beach);
        beachSimpleButton.callback = () =>  this.teleportRoom(400);

        // oldmission (components)
        const oldmissionButton = new Button(oldmission);
        oldmissionButton.spriteName = "sign";
        oldmissionButton.callback = () =>  this.interface.loadWidget('MissionMenu');

        // fish (components)
        const fishButton = new Button(fish);
        fishButton.spriteName = "fish";
        fishButton.callback = () =>  this.interface.loadWidget('FISH');

        this.door = door;
        this.cabinet = cabinet;
        this.cabinet_nonpsa = cabinet_nonpsa;
        this.interfaceIcons = interfaceIcons;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    // Write your code here
    HQDoor(){
        this.door.play('hq-door')
    }
    HQDone(){
        this.door.play('hq-done')
    }
    cabinetHover(){
        this.cabinet.play('cabinet-hover')
    }
    cabinetDone(){
        this.cabinet.play('cabinet-done')
    }
    teleportRoom(id){
        let room = this.crumbs.scenes.rooms[id]
        if (this.world.room.key == room.key) {
            return
        }

        this.world.client.sendJoinRoom(id, room.key, room.x, room.y, 80)
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
