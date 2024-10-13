import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'
import SharedCoaster from '@rooms/_fair/SharedCoaster'

import { Animation, Button, MoveTo, ShowHint, Zone, SimpleButton, SnackStampArea } from '@components/components'


/* START OF COMPILED CODE */

export default class Dock extends RoomScene {

    constructor() {
        super("Dock");

        /** @type {Phaser.GameObjects.Sprite} */
        this.boat;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dock;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rings;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cataloganim;
        /** @type {Phaser.GameObjects.Sprite} */
        this.ringTentAnim;
        /** @type {Phaser.GameObjects.Image} */
        this.shuffleHover;
        /** @type {Phaser.GameObjects.Sprite} */
        this.hats;
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'beach': () => this.triggerRoom(400, 950, 430),
            'wheel': () => this.triggerRoom(854, 340, 700),
            'spin': () => this.triggerGame(928),
            'shuffle': () => this.triggerGame(923),
            'bell': () => this.triggerGame(925),
            'town': () => this.triggerRoom(100, 368, 640),
            'hydro': () => this.triggerGame(903)
        }

        this.music = 297;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("fair-dock-pack", "assets/media/rooms/_fair/dock/fair-dock-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-48, 0, "fair-dock-2024", "Symbol_44");
        bg.setOrigin(0, 0);

        // s_mbolo_100001
        const s_mbolo_100001 = this.add.sprite(853, 44, "fair-dock-2024", "Símbolo 100001");

        // _
        this.add.image(892, 103, "fair-dock-2024", "+");

        // balloons_1
        const balloons_1 = this.add.image(1299, 554.0939485123665, "fair-dock", "balloons");
        balloons_1.setOrigin(0.5, 0.8065058156902746);

        // hydroSignBack
        const hydroSignBack = this.add.image(523, 587.9597709472816, "fair-dock", "hydroSignBack");
        hydroSignBack.setOrigin(0.5, 0.7091463990204715);

        // hydroSign
        const hydroSign = this.add.image(492, 604.1866685976934, "fair-dock", "hydroSign");
        hydroSign.setOrigin(0.5, 1.0068286178044266);

        // dockBottom
        this.add.image(305, 853, "fair-dock", "dockBottom");

        // boat
        const boat = this.add.sprite(202, 699, "dock", "boat");
        boat.setOrigin(0.49477351916376305, 0.5091743119266054);

        // dock
        const dock = this.add.sprite(187, 593, "fair-dock", "dock/dock0001");
        dock.setOrigin(0, 0);

        // box
        const box = this.add.image(434, 652, "dock", "box");
        box.setOrigin(0.4915254237288136, 0.7142857142857143);

        // bollard_1
        const bollard_1 = this.add.image(376, 687, "dock", "bollard_1");
        bollard_1.setOrigin(0.5, 0.9302325581395349);

        // bollard_2
        const bollard_2 = this.add.image(244, 781, "dock", "bollard_2");
        bollard_2.setOrigin(0.5, 0.9215686274509803);

        // rings
        const rings = this.add.sprite(632, 668, "dock", "rings0001");
        rings.setOrigin(0.4975124378109453, 0.8127659574468085);

        // right_sign
        this.add.image(1341, 294, "dock", "right_sign");

        // left_sign
        this.add.image(75, 327, "dock", "left_sign");

        // boards
        const boards = this.add.image(740, 746, "dock", "boards");
        boards.setOrigin(0.5, 0.7721088435374149);

        // zone
        const zone = this.add.rectangle(631, 633, 135, 160);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // catalogbtn
        const catalogbtn = this.add.image(1440, 888, "dock-catalogbtn", "catalogbtn");

        // cataloganim
        const cataloganim = this.add.sprite(782, 806.6880340565097, "dock-catalogbtn", "cataloganim0001");
        cataloganim.setOrigin(0.5, 2.2801434652948154);

        // haybale
        const haybale = this.add.image(1292, 613, "fair-dock", "haybale");

        // snacksbg
        this.add.image(1109, 581, "fair-dock", "snacksbg");

        // snackscooler
        const snackscooler = this.add.image(1000, 610.8060401216082, "fair-dock", "snackscooler");
        snackscooler.setOrigin(0.5, 0.8105379122628097);

        // snacks
        const snacks = this.add.image(1119, 675.078052766132, "fair-dock", "snacks");
        snacks.setOrigin(0.5, 0.8422403466478643);

        // flags
        this.add.image(1539, 101, "fair-dock", "flags");

        // flags_1
        this.add.image(1256, 82, "fair-dock", "flags");

        // flagpole
        this.add.image(143, 261, "fair-dock", "flagpole");

        // flags_2
        this.add.image(-13, 187, "fair-dock", "flags");

        // fenceL
        const fenceL = this.add.image(97.62569504813837, 511.6802224154043, "fair-dock", "fenceL");
        fenceL.setOrigin(0.9420179371751477, 0.8569424847964957);

        // rockB
        const rockB = this.add.image(-3, 525, "fair-dock", "rockB");

        // rockS
        const rockS = this.add.image(89, 537, "fair-dock", "rockS");

        // ringTentBottom
        const ringTentBottom = this.add.image(306, 330, "fair-dock", "ringTentBottom");
        ringTentBottom.scaleX = 0.9;
        ringTentBottom.scaleY = 0.9;
        ringTentBottom.flipX = true;

        // spinTent
        const spinTent = this.add.sprite(499, 182, "fair-dock-2024", "Symbol_1690001");
        spinTent.scaleX = 0.9;
        spinTent.scaleY = 0.9;
        spinTent.setOrigin(0.49811058142507714, 0.4946887834067197);

        // ringTentBG
        const ringTentBG = this.add.image(316, 250, "fair-dock", "ringTentBG");
        ringTentBG.scaleX = 0.9;
        ringTentBG.scaleY = 0.9;
        ringTentBG.flipX = true;

        // ringTentAnim
        const ringTentAnim = this.add.sprite(274, 230, "fair-dock", "ringTentAnim/ringTentAnim0001");
        ringTentAnim.scaleX = 0.9;
        ringTentAnim.scaleY = 0.9;
        ringTentAnim.setOrigin(0.42780041370094635, 0.5192131729321509);
        ringTentAnim.flipX = true;

        // ringSign
        const ringSign = this.add.image(168, 364, "fair-dock", "ringSign");
        ringSign.setOrigin(0.5, 0.8153473963119655);

        // _shuffle
        const _shuffle = this.add.container(1039, 251);

        // shuffleTent
        const shuffleTent = this.add.image(12.893746884860775, 58.09837436380832, "fair-dock", "shuffleTent");
        shuffleTent.scaleX = 0.75;
        shuffleTent.scaleY = 0.75;
        shuffleTent.setOrigin(0.3389136615360048, 0.8690111814633671);
        _shuffle.add(shuffleTent);

        // shuffleSign
        const shuffleSign = this.add.image(35.682565244235775, -193.40620327291043, "fair-dock", "shuffleSign");
        shuffleSign.scaleX = 0.75;
        shuffleSign.scaleY = 0.75;
        _shuffle.add(shuffleSign);

        // shuffleHover
        const shuffleHover = this.add.image(24.682565244235775, -37.40620327291043, "fair-dock", "shuffleHover");
        shuffleHover.scaleX = 0.75;
        shuffleHover.scaleY = 0.75;
        shuffleHover.visible = false;
        _shuffle.add(shuffleHover);

        // hats
        const hats = this.add.sprite(34.682565244235775, -11.406203272910432, "fair-dock", "hats/hats0001");
        hats.scaleX = 0.75;
        hats.scaleY = 0.75;
        _shuffle.add(hats);

        // snackStampZone
        const snackStampZone = this.add.rectangle(1100, 620, 150, 150);
        snackStampZone.visible = false;

        // right_sign_1
        const right_sign_1 = this.add.image(766, 189, "dock", "right_sign");
        right_sign_1.scaleX = 0.9;
        right_sign_1.scaleY = 0.9;

        // sharedCoaster
        const sharedCoaster = new SharedCoaster(this, 0, 0);
        this.add.existing(sharedCoaster);

        // lists
        const sort = [rings, bollard_2, bollard_1, dock, box, boards, cataloganim, snackscooler, snacks, haybale, hydroSignBack, hydroSign, ringSign, balloons_1, _shuffle, rockS, rockB, fenceL];

        // s_mbolo_100001 (components)
        const s_mbolo_100001Animation = new Animation(s_mbolo_100001);
        s_mbolo_100001Animation.key = "Símbolo 10";
        s_mbolo_100001Animation.end = 60;

        // boat (components)
        const boatButton = new Button(boat);
        boatButton.spriteName = "boat";
        boatButton.pixelPerfect = true;
        new MoveTo(boat);
        const boatShowHint = new ShowHint(boat);
        boatShowHint.text = "hydro_hint";

        // dock (components)
        const dockAnimation = new Animation(dock);
        dockAnimation.key = "dock/dock";
        dockAnimation.end = 37;

        // rings (components)
        const ringsAnimation = new Animation(rings);
        ringsAnimation.key = "rings";
        ringsAnimation.end = 34;
        ringsAnimation.repeat = 0;
        ringsAnimation.autoPlay = false;
        ringsAnimation.stopOnOut = false;

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.hoverCallback = () => this.onRingsOver();

        // catalogbtn (components)
        const catalogbtnButton = new Button(catalogbtn);
        catalogbtnButton.spriteName = "catalogbtn";
        catalogbtnButton.callback = () => this.onCatalog();
        catalogbtnButton.activeFrame = true;

        // cataloganim (components)
        const cataloganimAnimation = new Animation(cataloganim);
        cataloganimAnimation.key = "cataloganim";
        cataloganimAnimation.end = 7;
        cataloganimAnimation.repeat = 0;
        cataloganimAnimation.autoPlay = false;
        const cataloganimSimpleButton = new SimpleButton(cataloganim);
        cataloganimSimpleButton.hoverCallback = () => this.onCatalogHover();
        cataloganimSimpleButton.hoverOutCallback = () => this.onCatalogOut();
        cataloganimSimpleButton.callback = () => this.onCatalog();

        // spinTent (components)
        const spinTentShowHint = new ShowHint(spinTent);
        spinTentShowHint.text = "Spin the Wheel";
        const spinTentMoveTo = new MoveTo(spinTent);
        spinTentMoveTo.x = 520;
        spinTentMoveTo.y = 280;
        const spinTentAnimation = new Animation(spinTent);
        spinTentAnimation.key = "Symbol_169";
        spinTentAnimation.end = 25;
        spinTentAnimation.onHover = true;
        new SimpleButton(spinTent);

        // ringTentAnim (components)
        const ringTentAnimAnimation = new Animation(ringTentAnim);
        ringTentAnimAnimation.key = "ringTentAnim/ringTentAnim";
        ringTentAnimAnimation.end = 50;
        ringTentAnimAnimation.repeat = 0;
        ringTentAnimAnimation.onHover = true;
        const ringTentAnimMoveTo = new MoveTo(ringTentAnim);
        ringTentAnimMoveTo.x = 315;
        ringTentAnimMoveTo.y = 338;
        const ringTentAnimShowHint = new ShowHint(ringTentAnim);
        ringTentAnimShowHint.text = "Ring the Bell";
        new SimpleButton(ringTentAnim);

        // hats (components)
        const hatsAnimation = new Animation(hats);
        hatsAnimation.key = "hats/hats";
        hatsAnimation.end = 64;
        hatsAnimation.repeat = 0;
        hatsAnimation.onHover = true;
        const hatsSimpleButton = new SimpleButton(hats);
        hatsSimpleButton.hoverCallback = () => this.shuffleHover.visible = true;
        hatsSimpleButton.hoverOutCallback = () => this.shuffleHover.visible = false;
        const hatsMoveTo = new MoveTo(hats);
        hatsMoveTo.x = 1045;
        hatsMoveTo.y = 320;
        const hatsShowHint = new ShowHint(hats);
        hatsShowHint.text = "Puffle Shuffle";

        // snackStampZone (components)
        new SnackStampArea(snackStampZone);

        this.boat = boat;
        this.dock = dock;
        this.rings = rings;
        this.cataloganim = cataloganim;
        this.ringTentAnim = ringTentAnim;
        this.shuffleHover = shuffleHover;
        this.hats = hats;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.up = false
        this.time.addEvent({
            delay: 1500,
            callback: () => this.floatBoat(),
            loop: true
        })
    }

    onRingsOver() {
        this.rings.__Animation.play()
    }

    floatBoat() {
        let value = (this.up) ? -2 : 2
        this.boat.y += value
        this.up = !this.up
    }

    onCatalog() {
        this.interface.loadWidget('DockCatalog')    
    }

    onCatalogHover() {
        this.cataloganim.__Animation.play()
    }

    onCatalogOut() {
        this.cataloganim.stop()
        this.cataloganim.setFrame('cataloganim0001')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
