import RoomScene from '@rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'

import RoomPin from '@rooms/RoomPin'

import coasterPoints from './coasterPoints'

const PENGUIN_SCALE = 0.7
const ONE_FRAME_IN_MS = 16.66666 //41.66666

/* START OF COMPILED CODE */

export default class SpaceSquid extends RoomScene {

    constructor() {
        super("SpaceSquid");

        /** @type {Phaser.GameObjects.Sprite} */
        this.fountains;
        /** @type {Phaser.GameObjects.Image} */
        this.exitlight;
        /** @type {Phaser.GameObjects.Sprite} */
        this.gun2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.gun1;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'exit': () => this.triggerRoom(854, 1170, 420),
            'coaster': () => this.network.send('rdespcsqd')
        }

        this.music = 1152;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("fair-spacesquid-pack", "assets/media/rooms/_fair/spacesquid/fair-spacesquid-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(794, 464, "fair-spacesquid", "bg");

        // arch2
        const arch2 = this.add.image(1528, 562, "fair-spacesquid", "arch2");
        arch2.setOrigin(0.36738968676217765, 0.7102320684350932);

        // arch1
        const arch1 = this.add.image(1412.8675706280933, 610.1846408140717, "fair-spacesquid", "arch1");
        arch1.setOrigin(0.3784034317416045, 0.7281120037003259);

        // divider
        const divider = this.add.image(1317, 504.76227252522517, "fair-spacesquid", "divider");
        divider.setOrigin(0.5, 0.5895779172672659);

        // divider_1
        const divider_1 = this.add.image(1313, 433, "fair-spacesquid", "divider");
        divider_1.setOrigin(0.5, 0.5895779172672659);

        // fountains
        const fountains = this.add.sprite(92.75831637756727, 624.1869287538577, "fair-spacesquid", "fountains0001");
        fountains.setOrigin(0.4255893361473146, 0.7754244508193162);

        // rock1
        const rock1 = this.add.image(-8, 646, "fair-spacesquid", "rock1");
        rock1.setOrigin(0.5, 0.6421061983868905);

        // rock3
        const rock3 = this.add.image(178, 762.823602489548, "fair-spacesquid", "rock3");
        rock3.setOrigin(0.5, 0.555364754697019);

        // rock2
        const rock2 = this.add.image(103, 776.494878552491, "fair-spacesquid", "rock2");
        rock2.setOrigin(0.5, 0.699313116909267);

        // rock4
        const rock4 = this.add.image(172, 546, "fair-spacesquid", "rock4");
        rock4.setOrigin(0.5, 0.7659414538828752);

        // rockarch
        const rockarch = this.add.image(643.312085263662, 350.7505455234017, "fair-spacesquid", "rockarch");
        rockarch.setOrigin(0.5663092896896829, 0.765791373701138);

        // slide3
        const slide3 = this.add.image(1030.0731201171875, 355.27438125303553, "fair-spacesquid", "slide3");
        slide3.setOrigin(0.39091081425311613, 0.9446281102452808);

        // slide1
        const slide1 = this.add.image(1037.6916361766366, 364.80139806178863, "fair-spacesquid", "slide1");
        slide1.setOrigin(0.3102372058829027, 0.9852312444937177);

        // tentacle10001
        const tentacle10001 = this.add.sprite(538.3056694117731, 527.0506982694633, "fair-spacesquid", "tentacle10001");
        tentacle10001.setOrigin(0.3318939349302683, 0.64223436801115);

        // tentacle20001
        const tentacle20001 = this.add.sprite(441, 677, "fair-spacesquid", "tentacle20001");
        tentacle20001.setOrigin(0.5542299334080498, 0.5982917543020896);

        // tentacle3
        const tentacle3 = this.add.sprite(467.3174318429693, 779.1656589811358, "fair-spacesquid", "tentacle30001");
        tentacle3.setOrigin(0.4488056922790028, 0.6950826277607429);

        // track1
        const track1 = this.add.image(912, 429, "fair-spacesquid", "track1");
        track1.setOrigin(0.49131390550868387, 0.05529070901115129);

        // tentacle4
        const tentacle4 = this.add.image(546, 837, "fair-spacesquid", "tentacle4");
        tentacle4.setOrigin(0.5, 0.6285482355829087);

        // container_1
        const container_1 = this.add.container(773, 620);

        // behindeyes
        const behindeyes = this.add.image(-91, -20, "fair-spacesquid", "behindeyes");
        container_1.add(behindeyes);

        // squideyes0001
        const squideyes0001 = this.add.sprite(-111, -5, "fair-spacesquid", "squideyes0001");
        container_1.add(squideyes0001);

        // track2
        const track2 = this.add.image(0, 0, "fair-spacesquid", "track2");
        container_1.add(track2);

        // tentacle5
        const tentacle5 = this.add.image(1022, 809.1381659813648, "fair-spacesquid", "tentacle5");
        tentacle5.setOrigin(0.5, 0.761788432576999);

        // comet
        const comet = this.add.image(741, 262.8069563712631, "fair-spacesquid", "comet");
        comet.setOrigin(0.5, 0.7204009363548688);

        // slide4
        const slide4 = this.add.image(950, 295.58692117829855, "fair-spacesquid", "slide4");
        slide4.setOrigin(0.5, 0.14071943623297123);

        // purplething
        const purplething = this.add.image(931.9787055214197, 384.8296441713571, "fair-spacesquid", "purplething");
        purplething.setOrigin(0.5741520075317805, 0.8780114958086974);

        // bigrock
        const bigrock = this.add.image(403.7048708981748, 249.29800431315965, "fair-spacesquid", "bigrock");
        bigrock.setOrigin(0.49629963113764236, 0.7212066234522304);

        // entry
        const entry = this.add.image(339, 473.27871565170375, "fair-spacesquid", "entry");
        entry.setOrigin(0.5, 0.70039162015773);

        // exitlight
        const exitlight = this.add.image(1553, 605, "fair-spacesquid", "exitlight");
        exitlight.scaleX = 0.6;
        exitlight.scaleY = 0.6;
        exitlight.visible = false;

        // polygon_1
        const polygon_1 = this.add.polygon(1480.4468760233126, 612.5083342429446, "35 100 -98.5329396163645 1.5585785199870088 1.6666430327072703 -147.0973989588628 30.527058352768336 -85.25365184444638");
        polygon_1.setOrigin(-0.1389404294550085, -0.06674155950868994);
        polygon_1.fillColor = 65535;
        polygon_1.fillAlpha = 0.5;

        // rock5
        const rock5 = this.add.image(693, 844.8180695662793, "fair-spacesquid", "rock5");
        rock5.setOrigin(0.5, 0.7984839130523275);

        // _gun2
        const _gun2 = this.add.container(1405.0206026030337, 850.4323515914298);

        // gunbase1
        const gunbase1 = this.add.image(37.979397396966306, -9.432351591429779, "fair-spacesquid", "gunbase1");
        _gun2.add(gunbase1);

        // gunbase2
        const gunbase2 = this.add.image(-12.020602603033694, -21.43235159142978, "fair-spacesquid", "gunbase2");
        _gun2.add(gunbase2);

        // gun2
        const gun2 = this.add.sprite(-512.0206026030337, -350.4323515914298, "fair-spacesquid", "gun0001");
        _gun2.add(gun2);

        // _gun
        const _gun = this.add.container(1036, 411.2017535891041);

        // gunbase12
        const gunbase12 = this.add.image(37.979397396966306, 39.36589481946612, "fair-spacesquid", "gunbase1");
        _gun.add(gunbase12);

        // gunbase22
        const gunbase22 = this.add.image(-12.020602603033694, 27.36589481946612, "fair-spacesquid", "gunbase2");
        _gun.add(gunbase22);

        // gun1
        const gun1 = this.add.sprite(-512.0206026030337, -301.6341051805339, "fair-spacesquid", "gun0001");
        _gun.add(gun1);

        // lists
        const sort = [arch1, arch2, divider, divider_1, fountains, rock1, rock2, rock3, rock4, rockarch, slide1, tentacle10001, tentacle20001, tentacle3, tentacle4, tentacle5, track1, container_1, purplething, comet, bigrock, entry, slide4, slide3, rock5, _gun2, _gun];

        // fountains (components)
        const fountainsAnimation = new Animation(fountains);
        fountainsAnimation.key = "fountains";
        fountainsAnimation.end = 29;
        fountainsAnimation.repeat = 0;
        fountainsAnimation.autoPlay = false;

        // tentacle10001 (components)
        const tentacle10001Animation = new Animation(tentacle10001);
        tentacle10001Animation.key = "tentacle1";
        tentacle10001Animation.end = 33;

        // tentacle20001 (components)
        const tentacle20001Animation = new Animation(tentacle20001);
        tentacle20001Animation.key = "tentacle2";
        tentacle20001Animation.end = 40;

        // tentacle3 (components)
        const tentacle3Animation = new Animation(tentacle3);
        tentacle3Animation.key = "tentacle3";
        tentacle3Animation.end = 49;

        // squideyes0001 (components)
        const squideyes0001Animation = new Animation(squideyes0001);
        squideyes0001Animation.key = "squideyes";
        squideyes0001Animation.end = 69;

        // polygon_1 (components)
        const polygon_1SimpleButton = new SimpleButton(polygon_1);
        polygon_1SimpleButton.hoverCallback = () => this.exitlight.visible = true;
        polygon_1SimpleButton.hoverOutCallback = () => this.exitlight.visible = false;
        new MoveTo(polygon_1);

        // gun2 (components)
        const gun2Animation = new Animation(gun2);
        gun2Animation.key = "gun";
        gun2Animation.end = 16;
        gun2Animation.repeat = 0;
        gun2Animation.autoPlay = false;

        // gun1 (components)
        const gun1Animation = new Animation(gun1);
        gun1Animation.key = "gun";
        gun1Animation.end = 16;
        gun1Animation.repeat = 0;
        gun1Animation.autoPlay = false;

        this.fountains = fountains;
        this.exitlight = exitlight;
        this.gun2 = gun2;
        this.gun1 = gun1;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.coasterFrame = 0
        
        this.pendingMoves = []

        this.network.events.on('teleport_and_move', this.handleTeleportAndMove, this)
        this.network.events.on('rdespcsqd', this.handlePenguinGetOnCoaster, this)

        for(let gun of [this.gun1,this.gun2]) {
            this.createSfxTimeline(gun, [{ "__ANY__": [{ frame: 7, sound: "spacesquid-gun" }] }]);
        }
    }

    stop() {
        super.stop()
        if (this.client.moveDisabled) this.client.moveDisabled = false

        this.network.events.off('teleport_and_move', this.handleTeleportAndMove, this)
        this.network.events.off('rdespcsqd', this.handlePenguinGetOnCoaster, this)
    }

    addPenguin(id, penguin) {
        super.addPenguin(id, penguin)
        penguin.scale = PENGUIN_SCALE

        this.addBoatsToPenguin(penguin)
        this.setBoatsVisible(penguin, false)
    }

    onPenguinsAdded() {
        if (!this.penguins) return
        for (let penguin of Object.values(this.penguins)) {
            penguin.scale = PENGUIN_SCALE
        }

        for(let penguin of Object.values(this.penguins)) {
            if (!penguin) continue
            this.addBoatsToPenguin(penguin)
            this.setBoatsVisible(penguin, false)
        }
        this.boatsAdded = true
    }

    startCoaster(penguin) {
        if(!penguin) return
        if(penguin.onCoaster) return
        if(penguin.id === this.client.id) {
            this.client.moveDisabled = true
            this.coasterFrame = 0
            this.soundManager.playSfx('spacesquid-coasterstart')
        }

        penguin.onCoaster = true

        // Initiate position
        penguin.setPosition(coasterPoints[0][0], coasterPoints[0][1])
        penguin.onMoveUpdate()

        let tween = {
            targets: penguin,
            ease: 'Linear',
            onComplete: () => {
                if (penguin.id !== this.client.id) return
                this.client.questComplete(66)
                this.network.send('teleport_and_move', { id: 0 })
            },
            tweens: []
        }
        for(let [index, coords] of coasterPoints.entries()) {
            tween.tweens.push({
                x: { from: index > 0 ? coasterPoints[index - 1][0] : penguin.x, to: coords[0] },
                y: { from: index > 0 ? coasterPoints[index - 1][1] : penguin.y, to: coords[1] },
                duration: ONE_FRAME_IN_MS,
                onStart: () => {
                    if (penguin.id !== this.client.id) return
                    this.checkCoasterFrame()
                },
                onUpdate: () => penguin.onMoveUpdate(),
            })
        }
        penguin.coasterTween = this.tweens.chain(tween).play()
    }

    checkCoasterFrame() {
        this.coasterFrame++

        switch(this.coasterFrame) {
            case 113:
                this.soundManager.playSfx('spacesquid-coasterrun1')
                break
            case 162:
                this.soundManager.playSfx('spacesquid-coasterrun2')
                break
            case 175:
                this.soundManager.playSfx('spacesquid-fountain')
                this.fountains.__Animation.play()
                break
            case 196:
                this.soundManager.playSfx('spacesquid-coasterrun3')
                break
            case 215:
                this.gun1.__Animation.play()
                this.gun2.__Animation.play()
                break
        }
    }

    handlePenguinGetOnCoaster(args) {
        let penguin = this.penguins[args.id]
        if (!penguin) return
        this.startCoaster(penguin)
    }

    handleTeleportAndMove(args) {
        if(args.id === this.client.id) this.client.moveDisabled = false
        let penguin = this.penguins[args.id]
        if (!penguin) return
        if (penguin.coasterTween) penguin.coasterTween.destroy()
        penguin.onCoaster = false
        penguin.onMoveUpdate()
    }

    /* ========== Boat Effects ========== */

    addBoatsToPenguin(penguin) {
        penguin.boats = {
            'front': this.add.sprite(penguin.x, penguin.y, 'fair-spacesquid', 'coaster_front/1_1').setDepth(penguin.depth + 1).setScale(PENGUIN_SCALE),
            'back': this.add.sprite(penguin.x, penguin.y, 'fair-spacesquid', 'coaster_back/1_1').setDepth(penguin.depth - 1).setScale(PENGUIN_SCALE),
        }
    }

    removePenguin(id) {
        let penguin = this.penguins[id]
        if(penguin && penguin.boats) {
            for(let boat of Object.values(penguin.boats)) {
                if (boat) boat.destroy()
            }
        }
        super.removePenguin(id)
    }

    setBoatsVisible(penguin, visible) {
        if (!penguin || !penguin.boats) return
        for(let boat of Object.values(penguin.boats)) {
            boat.visible = visible
        }
    }

    update() {
        if (!this.boatsAdded) return

        for(let penguin of Object.values(this.penguins)) {
            if (!penguin) continue
            if (!penguin.boats) continue
            for(let [which, boat] of Object.entries(penguin.boats)) {
                if(boat.x !== penguin.x) boat.x = penguin.x
                if(boat.y !== penguin.y) boat.y = penguin.y

                let frame = `coaster_${which}/${penguin.theFrame}_1`
                if(this.world.textures.get('fair-spacesquid').has(frame)) {
                    boat.setFrame(frame)
                    boat.visible = penguin.onCoaster
                } else {
                    boat.visible = false
                }

                boat.setDepth(which == 'front' ? penguin.depth + 1 : penguin.depth - 1)
            }
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */