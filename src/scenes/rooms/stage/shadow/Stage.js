import RoomScene from '@rooms/RoomScene'
import StageShadows from './StageShadows'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'



// You can write more code here

/* START OF COMPILED CODE */

export default class Stage extends RoomScene {

    constructor() {
        super("Stage");

        /** @type {Phaser.GameObjects.Sprite} */
        this.costumebox;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pullone;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pulltwo;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buttonone;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buttontwo;
        /** @type {Phaser.GameObjects.Sprite} */
        this.buttonthree;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pullthree;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pullfour;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pullfive;
        /** @type {Phaser.GameObjects.Sprite} */
        this.treeone;
        /** @type {Phaser.GameObjects.Sprite} */
        this.birds;
        /** @type {Phaser.GameObjects.Sprite} */
        this.house;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cloud;
        /** @type {Phaser.GameObjects.Sprite} */
        this.kites;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sun;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mountain;
        /** @type {Phaser.GameObjects.Sprite} */
        this.gate;
        /** @type {Phaser.GameObjects.Container} */
        this.shadowContainer;
        /** @type {Phaser.GameObjects.Image} */
        this.shadowMask;
        /** @type {Phaser.GameObjects.Image} */
        this.stage_shadows_top;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 845, 522),
            'trunk': () => this.interface.loadWidget("ShadowsCatalog")
        }
        this.music = 'cj_outdoors'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("stage-pack", "assets/media/rooms/stage/stage-pack.json");
    }

    /** @returns {void} */
    _create() {

        // reference
        const reference = this.add.image(767, 481, "shadows", "reference");
        reference.visible = false;

        // background
        this.add.image(761, 466, "shadows", "background");

        // food
        const food = this.add.image(242.9536152671675, 697.7958090528871, "shadows", "food");
        food.setOrigin(0.6867752667325164, 0.6344109865541343);

        // food_1
        const food_1 = this.add.image(1286.9779344090423, 797.1999118949137, "shadows", "food");
        food_1.setOrigin(0.3277802251412858, 0.6068950326709263);
        food_1.flipX = true;

        // flap_left
        const flap_left = this.add.image(318.8941398233266, 449.55387257971756, "shadows", "flap_left");
        flap_left.setOrigin(0.534454045515793, 0.9106549749314783);

        // flap_right
        const flap_right = this.add.image(1206.211720353347, 443.76559293306434, "shadows", "flap_right");
        flap_right.setOrigin(0.43109190896841537, 0.8910999761252174);

        // rightie_walk
        const rightie_walk = this.add.image(1263.0104457376772, 577.1362812216425, "shadows", "rightie_walk");
        rightie_walk.setOrigin(0.28899518151181, 0.7565513791008002);

        // rightie_back
        this.add.image(1389, 189, "shadows", "rightie_back");

        // costumebox
        const costumebox = this.add.sprite(1290.6203397419595, 603.7115661167794, "shadows", "costumebox0001");
        costumebox.setOrigin(0.13074612638374544, 0.472979446887776);

        // leftie_walkback
        const leftie_walkback = this.add.image(251.44179128778123, 577.0884082071412, "shadows", "leftie_walkback");
        leftie_walkback.setOrigin(0.6864992964515111, 0.7564903551811156);

        // door
        const door = this.add.image(157.5542540217607, 655.6910348259888, "shadows", "door");
        door.setOrigin(0.7481706495016515, 0.791753764946472);

        // leftie_walkfront
        const leftie_walkfront = this.add.image(135.43851216927817, 729.2340272484264, "shadows", "leftie_walkfront");
        leftie_walkfront.setOrigin(0.6685414632364012, 1.0428735760494772);

        // leftie_back
        const leftie_back = this.add.image(125.49289324197643, 224.0331633579573, "shadows", "leftie_back");
        leftie_back.setOrigin(0.46923316921287295, 0.5854467430640862);

        // leftie_chair
        const leftie_chair = this.add.image(104.65615779039804, 309.56157790398044, "shadows", "leftie_chair");
        leftie_chair.setOrigin(0.496526846367657, 0.4761220687776419);

        // rightie_chairone
        const rightie_chairone = this.add.image(1409.1943359375, 314.2822076561382, "shadows", "rightie_chairone");
        rightie_chairone.setOrigin(0.4211543113959335, 0.4950153011966264);

        // rightie_front
        const rightie_front = this.add.image(1417.524904599346, 1123.5785549315237, "shadows", "rightie_front");
        rightie_front.setOrigin(0.642616086006974, 6.574832460402529);

        // rightie_chairfrontone
        this.add.image(1443, 314, "shadows", "rightie_chairfrontone");

        // leftie_chairfrontone
        this.add.image(78, 313, "shadows", "leftie_chairfrontone");

        // leftie_front
        const leftie_front = this.add.image(105.47509540065403, 1030.6820019087309, "shadows", "leftie_front");
        leftie_front.setOrigin(0.35738391399302605, 5.84907813991196);

        // switchboxbox
        const switchboxbox = this.add.image(756.6245202906406, 846.3601290098567, "shadows", "switchboxbox");
        switchboxbox.setOrigin(0.4863715449526787, 0.5487434150589748);

        // pullone
        const pullone = this.add.sprite(701, 1412, "shadows", "pullone0001");
        pullone.setOrigin(1.5883271598910413, 10.577103332324441);

        // pulltwo
        const pulltwo = this.add.sprite(678, 1285, "shadows", "pulltwo0001");
        pulltwo.setOrigin(-0.09667059204552611, 8.4357188742055);

        // buttonone
        const buttonone = this.add.sprite(722, 1259, "shadows", "buttonone0001");
        buttonone.setOrigin(0.26566251530285345, 18.83783808820536);

        // buttontwo
        const buttontwo = this.add.sprite(760, 1265, "shadows", "buttontwo0001");
        buttontwo.setOrigin(0.8775437253454054, 17.18056822889696);

        // buttonthree
        const buttonthree = this.add.sprite(789, 1262, "shadows", "buttonthree0001");
        buttonthree.setOrigin(1.2030124540914435, 18.945707724018337);

        // pullthree
        const pullthree = this.add.sprite(812, 1720, "shadows", "pullthree0001");
        pullthree.setOrigin(0.7836585764095182, 16.070241706827012);

        // pullfour
        const pullfour = this.add.sprite(831, 1178, "shadows", "pullfour0001");
        pullfour.setOrigin(0.6628866468973229, 6.731648233571828);

        // pullfive
        const pullfive = this.add.sprite(868, 1166, "shadows", "pullfive0001");
        pullfive.setOrigin(0.7375430267252625, 4.893652975519899);

        // soup
        const soup = this.add.image(498, 654.5218049725195, "shadows", "soup");
        soup.setOrigin(0.5, 0.7076787763033987);

        // table
        const table = this.add.image(595.9725365803937, 672.6316586509446, "shadows", "table");
        table.setOrigin(0.49305767959725466, 0.7411393739892305);

        // chair
        const chair = this.add.image(707, 654.3020976156691, "shadows", "chair");
        chair.setOrigin(0.5, 0.6883682935944857);

        // chair_1
        const chair_1 = this.add.image(822, 679.2471707764566, "shadows", "chair");
        chair_1.setOrigin(0.5, 0.6541195129409441);

        // chair_2
        const chair_2 = this.add.image(1032.9227310994208, 624.536386596525, "shadows", "chair");
        chair_2.setOrigin(0.5356061314707564, 0.6922731099420825);

        // rock_left
        const rock_left = this.add.image(458.66165641434606, 502.30091401009645, "shadows", "rock_left");
        rock_left.setOrigin(0.4413367401396544, 0.739336216865101);

        // rock_right
        const rock_right = this.add.image(1069, 497.5285173589969, "shadows", "rock_right");
        rock_right.setOrigin(0.5, 0.6325116937815737);

        // lamp_left
        const lamp_left = this.add.image(444.5589353301254, 637.5247161347339, "shadows", "lamp_left");
        lamp_left.setOrigin(0.47998521291840823, 0.834390696876983);

        // lamp_right
        const lamp_right = this.add.image(1085.9695820288716, 633.6425867949847, "shadows", "lamp_right");
        lamp_right.setOrigin(0.6801330837343281, 0.8184673303590315);

        // gong
        const gong = this.add.image(937.6492544478891, 625.4719847605955, "shadows", "gong");
        gong.setOrigin(0.4608042238930306, 0.7667067398377619);

        // instrument
        const instrument = this.add.image(883.8352194823623, 674.6041952313383, "shadows", "instrument");
        instrument.setOrigin(0.4051572228055735, 0.7539797217004301);

        // stringthing
        const stringthing = this.add.image(1011.9572890521083, 679.160981008371, "shadows", "stringthing");
        stringthing.setOrigin(0.5518025745239988, 0.9024770226776967);

        // foreground
        const foreground = this.add.image(840.0513305664062, 972.4380726485658, "shadows", "foreground");
        foreground.setOrigin(0.5395758572445817, 0.9447310542665026);

        // treeone
        const treeone = this.add.sprite(525.1575317382812, 1108.9374850349207, "shadows", "treeone0001");
        treeone.setOrigin(0.6412044523290996, 2.077212304285539);

        // birds
        const birds = this.add.sprite(545.2637329101562, 1085.918561791113, "shadows", "birds0001");
        birds.setOrigin(0.28289815454400935, 3.321803708100129);

        // house
        const house = this.add.sprite(618.5787353515625, 1099.3209399398743, "shadows", "house0001");
        house.setOrigin(0.5890674237768166, 2.061654018714216);

        // cloud
        const cloud = this.add.sprite(1000.1027221679688, 1022.483744515242, "shadows", "cloud0001");
        cloud.setOrigin(0.8508716694238232, 2.6416483873012777);

        // kites
        const kites = this.add.sprite(685.0811349766482, 1080.686241052943, "shadows", "kites0001");
        kites.setOrigin(0.5146560543594061, 2.344615755998555);

        // sun
        const sun = this.add.sprite(756.8424682617188, 1072.7687590988862, "shadows", "sun0001");
        sun.setOrigin(0.30207239160707405, 2.773039797725062);

        // puffle
        const puffle = this.add.sprite(1007.003945411512, 1018.4490818592735, "shadows", "puffle0001");
        puffle.setOrigin(0.7765561926188722, 1.9673397422733427);

        // mountain
        const mountain = this.add.sprite(957.0446928405072, 1112.4579620155018, "shadows", "mountain0001");
        mountain.setOrigin(0.5729259792332262, 2.2767568402862084);

        // gate
        const gate = this.add.sprite(951.7915649414062, 1037.3165799177948, "shadows", "gate0001");
        gate.setOrigin(0.6810525460433362, 1.9953087534742748);

        // costume_trunk
        const costume_trunk = this.add.image(8582.352794753175, 50199.26663230521, "shadows", "costume_trunk");
        costume_trunk.setOrigin(47.247404513156106, 429.3284039839182);

        // script
        const script = this.add.image(1408.7057490280704, 15999.87849515734, "shadows", "script");
        script.setOrigin(0.18907456675719914, 89.89110349594417);

        // lantern
        const lantern = this.add.image(954.2883280833146, 1193.7438161761222, "shadows", "lantern");
        lantern.setOrigin(6.590087496052575, 5.789970809572586);

        // realishref
        const realishref = this.add.image(766, 481, "realishref");
        realishref.visible = false;

        // walkBehind
        const walkBehind = this.add.rectangle(763, 283, 650, 400);
        walkBehind.visible = false;
        walkBehind.isFilled = true;
        walkBehind.fillColor = 4063054;

        // shadowContainer
        const shadowContainer = this.add.container(0, 0);

        // shadowMask
        const shadowMask = this.add.image(763, 318, "stage-shadows-mask");
        shadowMask.visible = false;

        // stage_shadows_top
        const stage_shadows_top = this.add.image(759, 159, "stage-shadows-top");

        // lists
        const sort = [costume_trunk, costumebox, door, switchboxbox, buttontwo, buttonone, buttonthree, pullthree, pullfive, pullfour, pulltwo, pullone, script, food, food_1, gate, mountain, puffle, sun, kites, cloud, house, birds, treeone, foreground, stringthing, instrument, gong, lamp_right, lamp_left, rock_right, rock_left, chair_2, chair_1, chair, table, soup, leftie_front, rightie_front, rightie_chairone, leftie_chair, leftie_walkfront, rightie_walk, leftie_walkback, flap_right, lantern];

        // costumebox (components)
        new MoveTo(costumebox);
        const costumeboxSimpleButton = new SimpleButton(costumebox);
        costumeboxSimpleButton.hoverCallback = () => this.onCostumeBoxHover();
        costumeboxSimpleButton.hoverOutCallback = () => this.onCostumeBoxHoverOut();

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        new MoveTo(door);

        // pullone (components)
        const pulloneSimpleButton = new SimpleButton(pullone);
        pulloneSimpleButton.callback = () => {this.onTreeone()};
        pulloneSimpleButton.pixelPerfect = true;

        // pulltwo (components)
        const pulltwoSimpleButton = new SimpleButton(pulltwo);
        pulltwoSimpleButton.callback = () => {this.onBirds()};
        pulltwoSimpleButton.pixelPerfect = true;

        // buttonone (components)
        const buttononeSimpleButton = new SimpleButton(buttonone);
        buttononeSimpleButton.callback = () => {this.onHouse()};
        buttononeSimpleButton.pixelPerfect = true;

        // buttontwo (components)
        const buttontwoSimpleButton = new SimpleButton(buttontwo);
        buttontwoSimpleButton.callback = () => {this.onSun()};
        buttontwoSimpleButton.pixelPerfect = true;

        // buttonthree (components)
        const buttonthreeSimpleButton = new SimpleButton(buttonthree);
        buttonthreeSimpleButton.callback = () => {this.onKites()};
        buttonthreeSimpleButton.pixelPerfect = true;

        // pullthree (components)
        const pullthreeSimpleButton = new SimpleButton(pullthree);
        pullthreeSimpleButton.callback = () => {this.onMountain()};
        pullthreeSimpleButton.pixelPerfect = true;

        // pullfour (components)
        const pullfourSimpleButton = new SimpleButton(pullfour);
        pullfourSimpleButton.callback = () => {this.onCloud()};
        pullfourSimpleButton.pixelPerfect = true;

        // pullfive (components)
        const pullfiveSimpleButton = new SimpleButton(pullfive);
        pullfiveSimpleButton.callback = () => {this.onPuffle()};
        pullfiveSimpleButton.pixelPerfect = true;

        // costume_trunk (components)
        const costume_trunkButton = new Button(costume_trunk);
        costume_trunkButton.spriteName = "costume_trunk";
        costume_trunkButton.callback = () => {this.interface.loadWidget("ShadowsCatalog")};

        // script (components)
        const scriptButton = new Button(script);
        scriptButton.spriteName = "script";
        scriptButton.callback = () => this.interface.loadWidget('StageScript',true);

        this.costumebox = costumebox;
        this.pullone = pullone;
        this.pulltwo = pulltwo;
        this.buttonone = buttonone;
        this.buttontwo = buttontwo;
        this.buttonthree = buttonthree;
        this.pullthree = pullthree;
        this.pullfour = pullfour;
        this.pullfive = pullfive;
        this.treeone = treeone;
        this.birds = birds;
        this.house = house;
        this.cloud = cloud;
        this.kites = kites;
        this.sun = sun;
        this.puffle = puffle;
        this.mountain = mountain;
        this.gate = gate;
        this.shadowContainer = shadowContainer;
        this.shadowMask = shadowMask;
        this.stage_shadows_top = stage_shadows_top;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.treeoneHappened = false
        this.birdsHappened = false
        this.houseHappened = false
        this.cloudHappened = false
        this.kitesHappened = false
        this.sunHappened = false
        this.mountainHappened = false
        this.puffleHappened = false

        this.shadowContainer.mask = this.shadowMask.createBitmapMask()
        this.shadowContainer.depth = 2000
        this.stage_shadows_top.depth = 2001

    }

    addStamp() {
        this.stampEarned(9)    
    }

    onBirds() {
        this.addStamp()
        this.pulltwo.play('pulltwo')
        if (this.birdsHappened == false){
            this.birds.play('birds')
            this.birds.visible = true
            this.birdsHappened = true
            return
        }
        else if (this.birdsHappened == true){
            this.birds.visible = false
            this.birdsHappened = false
        }
        //this.switchbox_secondgreen0001.__Animation.play()
        //this.blueee0001.__Animation.play()
    }

    onTreeone() {
        this.addStamp()
        this.pullone.play('pullone')
        if (this.treeoneHappened == false){
            this.treeone.play('treeone')
            this.treeone.visible = true
            this.treeoneHappened = true
            return
        }
        else if (this.treeoneHappened == true){
            this.treeone.visible = false
            this.treeoneHappened = false
        }
    }

    onHouse() {
        this.addStamp()
        this.buttonone.play('buttonone')
        if (this.houseHappened == false){
            this.house.play('house')
            this.house.visible = true
            this.houseHappened = true
            return
        }
        else if (this.houseHappened == true){
            this.house.visible = false
            this.houseHappened = false
        }
    }

    onSun() {
        this.addStamp()
        this.buttontwo.play('buttontwo')
        if (this.sunHappened == false){
            this.sun.play('sun')
            this.sun.visible = true
            this.sunHappened = true
            return
        }
        else if (this.sunHappened == true){
            this.sun.visible = false
            this.sunHappened = false
        }
    }


    onKites() {
        this.addStamp()
        this.buttonthree.play('buttonthree')
        if (this.kitesHappened == false){
            this.kites.play('kites')
            this.kites.visible = true
            this.kitesHappened = true
            return
        }
        else if (this.kitesHappened == true){
            this.kites.visible = false
            this.kitesHappened = false
        }
    }

    onMountain() {
        this.addStamp()
        this.pullthree.play('pullthree')
        if (this.mountainHappened == false){
            this.mountain.play('mountain')
            this.mountain.visible = true
            this.mountainHappened = true
            return
        }
        else if (this.mountainHappened == true){
            this.mountain.visible = false
            this.mountainHappened = false
        }
    }

    onCloud() {
        this.addStamp()
        this.pullfour.play('pullfour')
        if (this.cloudHappened == false){
            this.cloud.play('cloud')
            this.cloud.visible = true
            this.cloudHappened = true
            return
        }
        else if (this.cloudHappened == true){
            this.cloud.visible = false
            this.cloudHappened = false
        }
    }

    onPuffle() {
        this.addStamp()
        this.pullfive.play('pullfive')
        if (this.puffleHappened == false){
            this.puffle.play('puffle')
            this.puffle.visible = true
            this.puffleHappened = true
            return
        }
        else if (this.puffleHappened == true){
            this.puffle.visible = false
            this.puffleHappened = false
        }
    }

    onCostumeBoxHover() {
        //this.costumebox.__Animation.play()   
        this.costumebox.play('costumeboxHover')
    }

    onCostumeBoxHoverOut() {
        //this.costumebox.__Animation.stop()
        //this.costumebox.setFrame("costumebox0001")
        this.costumebox.play('costumeboxOut')
    }

    onPenguinsAdded() {
        this.checkShadows()
    }

    onPenguinUpdate(id) {
        this.checkShadows()
    }

    checkShadows() {
        if(!this.penguins) return
        for(let [id,penguin] of Object.entries(this.penguins)){
            if(!penguin.stageShadow) {
                const stageShadow = new StageShadows(this, 0, 0);
                stageShadow.penguin = penguin
                stageShadow.room = this
                this.shadowContainer.add(stageShadow);
                penguin.stageShadow = stageShadow
            }
        }
    }

    update() {
        super.update()

        this.shadowContainer.iterate((child) => {child.update()});    
    }



    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
