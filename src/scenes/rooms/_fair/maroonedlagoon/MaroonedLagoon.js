
import RoomScene from '@rooms/RoomScene'

import { Animation, ZoneTrigger } from '@components/components'

const ONE_FRAME_IN_MS = 41.66666

const PENGUIN_SCALE = 0.8

const CURRENT_SPEED = 3

const waypoints = [
    [1188.8, 792.9],
    [930.9, 826.8],
    [693, 814.8],
    [446.9, 851.8],
    [211, 821],
    [59, 702.5],
    [173, 546.3],
    [177.3, 286.1],
    [305.2, 233.9],
    [442, 270.2],
    [385.9, 466.9],
    [455.8, 609.8],
    [672.1, 600.3],
    [634.7, 470.8],
    [654.2, 235.4],
    [870.5, 240.2],
    [834.9, 463],
    [890.5, 625.8],
    [1101.9, 616.2],
    [1192.9, 433.8],
    [1138.9, 218.2],
    [1352.7, 264.2],
    [1385.7, 402.1],
    [1409.9, 582.9],
]

const NUM_WAYPOINTS = waypoints.length

/* START OF COMPILED CODE */

export default class MaroonedLagoon extends RoomScene {

    constructor() {
        super("MaroonedLagoon");

        /** @type {Phaser.GameObjects.Sprite} */
        this.shark;
        /** @type {Phaser.GameObjects.Sprite} */
        this.eye;
        /** @type {Phaser.GameObjects.Sprite} */
        this.squid_target;
        /** @type {Phaser.GameObjects.Sprite} */
        this.skull_target;
        /** @type {Phaser.GameObjects.Sprite} */
        this.barrel_target;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pufflemonkey;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cannon_target;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cannon;
        /** @type {Phaser.GameObjects.Sprite} */
        this.snowball_fall;
        /** @type {Phaser.GameObjects.Sprite} */
        this.popout_target;
        /** @type {Phaser.GameObjects.Sprite} */
        this.barrels;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.hitbox5;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.hitbox4;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.hitbox3;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.hitbox2;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.hitbox1;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.darkness;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Rectangle|Phaser.GameObjects.Sprite>} */
        this.rideParts;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Rectangle>} */
        this.sort;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container>} */
        this.exteriorParts;


        /* START-USER-CTR-CODE */  

        this.roomTriggers = {
            'exit': () => this.triggerRoom(854, 240, 490)
        }

        /*this.roomWalkThroughTriggers = {
            'walkthrough1': () => this.switchRide(),
            'walkthrough2': () => this.switchRide()
        }*/

        this.music = "1156";

        this.physicsKey = 'marooned-lagoon-physics'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("maroon-lagoon-ride-pack", "assets/media/rooms/_fair/maroonlagoonride/maroon-lagoon-ride-pack.json");
        this.load.pack("maroon-lagoon-pack", "assets/media/rooms/_fair/maroonlagoon/maroon-lagoon-pack.json");
    }

    /** @returns {void} */
    _create() {

        // roots
        const roots = this.add.image(1285, 99, "maroon-lagoon-ride", "roots");

        // crevice
        const crevice = this.add.image(262, 89, "maroon-lagoon-ride", "crevice");

        // shark
        const shark = this.add.sprite(335, 215, "maroon-lagoon-ride", "shark0022");

        // water
        const water = this.add.image(280, 214, "maroon-lagoon-ride", "water");

        // eye
        const eye = this.add.sprite(1186, 208, "maroon-lagoon-ride", "eye0001");

        // squid_target
        const squid_target = this.add.sprite(1365, 165, "maroon-lagoon-ride", "target0001");

        // bg
        const bg = this.add.image(733, 367, "maroon-lagoon-ride", "path");

        // skull_target
        const skull_target = this.add.sprite(261, 151, "maroon-lagoon-ride", "skull_target0001");

        // barrel_target
        const barrel_target = this.add.sprite(877, 146, "maroon-lagoon-ride", "barrel_target0001");

        // chest
        const chest = this.add.sprite(742, 358.1497079712216, "maroon-lagoon-ride", "chest0001");
        chest.setOrigin(0.5, 0.3469568993947661);

        // puffle_banner
        const puffle_banner = this.add.sprite(924, 48, "maroon-lagoon-ride", "puffle_banner0001");

        // rock2
        const rock2 = this.add.image(294, 405, "maroon-lagoon-ride", "rock2");

        // rock3
        const rock3 = this.add.image(256, 441, "maroon-lagoon-ride", "rock3");

        // rock1
        const rock1 = this.add.image(324.847503786608, 376.2121028974748, "maroon-lagoon-ride", "rock1");
        rock1.setOrigin(0.5749679972642051, 0.6726405879855701);

        // rock8
        const rock8 = this.add.image(1200, 342, "maroon-lagoon-ride", "rock8");

        // cover
        const cover = this.add.image(760, 911.9322506561922, "maroon-lagoon-ride", "bg");
        cover.setOrigin(0.5, 0.9477065847545915);

        // rock7
        const rock7 = this.add.image(1237, 530.2641351118392, "maroon-lagoon-ride", "rock7");
        rock7.setOrigin(0.5, 0.681773892329068);

        // rock9
        const rock9 = this.add.image(1171, 309, "maroon-lagoon-ride", "rock9");

        // penguin1
        const penguin1 = this.add.sprite(633, 134, "maroon-lagoon-ride", "pirate_penguin_10001");

        // penguin2
        const penguin2 = this.add.sprite(708, 119, "maroon-lagoon-ride", "pirate_penguin_20001");

        // penguin3
        const penguin3 = this.add.sprite(815, 155, "maroon-lagoon-ride", "pirate_penguin_30001");

        // pufflemonkey
        const pufflemonkey = this.add.sprite(925, 153, "maroon-lagoon-ride", "puffle_monkey0001");

        // cannon_rock
        const cannon_rock = this.add.image(1001, 270, "maroon-lagoon-ride", "cannon_rock");

        // cannon_target
        const cannon_target = this.add.sprite(1048, 458.01504439870826, "maroon-lagoon-ride", "target0001");
        cannon_target.setOrigin(0.5, 0.5748623795224734);

        // cannon
        const cannon = this.add.sprite(984.8880785927944, 486.3423748378646, "maroon-lagoon-ride", "cannon0001");
        cannon.setOrigin(0.36076364853276843, 0.7790564429646692);

        // jaggedrock
        const jaggedrock = this.add.image(318, 487.18668686190944, "maroon-lagoon-ride", "jagged_rock");
        jaggedrock.setOrigin(0.5, 0.7784525612670485);

        // rock4
        const rock4 = this.add.image(573, 184, "maroon-lagoon-ride", "rock4");

        // rock6
        const rock6 = this.add.image(524.0219116210938, 442.23284568343837, "maroon-lagoon-ride", "rock6");
        rock6.setOrigin(0.5086600424907649, 0.685074697306056);

        // rock5
        const rock5 = this.add.image(544.0218850139103, 253.63466540339627, "maroon-lagoon-ride", "rock5");
        rock5.setOrigin(0.5085157084492522, 0.5657087924687279);

        // snowball_fall
        const snowball_fall = this.add.sprite(719, 134, "maroon-lagoon-ride", "ball_fall0001");
        snowball_fall.visible = false;

        // barrel_ground
        const barrel_ground = this.add.image(500, 572, "maroon-lagoon-ride", "popout_ground");

        // popout_target
        const popout_target = this.add.sprite(540, 514, "maroon-lagoon-ride", "popout_target0001");

        // barrels
        const barrels = this.add.sprite(482, 546.2565773123107, "maroon-lagoon-ride", "popout0001");
        barrels.setOrigin(0.5, 0.5908240911174247);

        // hitbox5
        const hitbox5 = this.add.rectangle(538, 447, 64, 64);
        hitbox5.visible = false;

        // hitbox4
        const hitbox4 = this.add.rectangle(1038, 373, 64, 64);
        hitbox4.visible = false;

        // hitbox3
        const hitbox3 = this.add.rectangle(1361, 98, 64, 64);
        hitbox3.visible = false;

        // hitbox2
        const hitbox2 = this.add.rectangle(877, 86, 64, 64);
        hitbox2.visible = false;

        // hitbox1
        const hitbox1 = this.add.rectangle(259, 102, 64, 64);
        hitbox1.visible = false;

        // bg_1
        const bg_1 = this.add.image(760, 515, "maroon-lagoon", "bg");
        bg_1.visible = false;

        // rock
        const rock = this.add.image(966, 406, "maroon-lagoon", "rock");
        rock.setOrigin(0.49360347368147883, 1.0291304735193478);
        rock.visible = false;

        // _flag
        const _flag = this.add.container(870, 499);
        _flag.visible = false;

        // flag
        const flag = this.add.sprite(-110.48719909981537, -492.38860468395956, "maroon-lagoon", "flag0001");
        flag.setOrigin(0, 0);
        _flag.add(flag);

        // dock_boat
        const dock_boat = this.add.image(1406, 465, "maroon-lagoon", "dock_boat");
        dock_boat.setOrigin(0.492600545620581, 0.558741894908311);
        dock_boat.visible = false;

        // rock_entrance
        const rock_entrance = this.add.image(253, 386, "maroon-lagoon", "rock_entrance");
        rock_entrance.setOrigin(0.4942410922104286, 0.812202244326119);
        rock_entrance.visible = false;

        // center
        const center = this.add.image(684.6021166432985, 645.1179914680376, "maroon-lagoon", "center");
        center.setOrigin(0.5024107473249337, 0.8467929065103217);
        center.visible = false;

        // danger_sign
        const danger_sign = this.add.image(41, 483, "maroon-lagoon", "danger_sign");
        danger_sign.setOrigin(0.5540479329514667, 0.7788873340295677);
        danger_sign.visible = false;

        // front_deco_2
        const front_deco_2 = this.add.image(1551, 741.0525318767216, "maroon-lagoon", "front_deco_2");
        front_deco_2.setOrigin(0.5, 0.2715360173844016);
        front_deco_2.visible = false;

        // front_deco
        const front_deco = this.add.image(1821, 1071, "maroon-lagoon", "front_deco");
        front_deco.setOrigin(1, 1);
        front_deco.visible = false;

        // darkness
        const darkness = this.add.rectangle(1520, 1262.4142925317885, 1520, 960);
        darkness.setOrigin(1, 1.3150148728647069);
        darkness.alpha = 0;
        darkness.isFilled = true;
        darkness.fillColor = 0;

        // lists
        const rideParts = [roots, hitbox1, hitbox2, hitbox3, hitbox4, hitbox5, barrels, popout_target, barrel_ground, rock5, rock6, rock4, jaggedrock, cannon, cannon_target, cannon_rock, pufflemonkey, penguin3, penguin2, penguin1, rock9, rock7, cover, rock8, rock1, rock3, rock2, puffle_banner, chest, barrel_target, skull_target, bg, squid_target, eye, water, shark, crevice];
        const sort = [cover, barrels, chest, darkness, front_deco_2, dock_boat, danger_sign, center, rock_entrance, front_deco, rock, cannon, cannon_target, rock8, rock7, rock6, jaggedrock, rock1, popout_target];
        const exteriorParts = [bg_1, front_deco, front_deco_2, danger_sign, center, rock_entrance, dock_boat, _flag, rock];

        // shark (components)
        const sharkAnimation = new Animation(shark);
        sharkAnimation.key = "shark";
        sharkAnimation.start = 21;
        sharkAnimation.end = 156;
        sharkAnimation.repeat = 0;
        sharkAnimation.autoPlay = false;

        // eye (components)
        const eyeAnimation = new Animation(eye);
        eyeAnimation.key = "eye";
        eyeAnimation.end = 282;
        eyeAnimation.repeat = 0;
        eyeAnimation.autoPlay = false;

        // squid_target (components)
        const squid_targetAnimation = new Animation(squid_target);
        squid_targetAnimation.key = "target";
        squid_targetAnimation.end = 32;
        squid_targetAnimation.repeat = 0;
        squid_targetAnimation.autoPlay = false;

        // skull_target (components)
        const skull_targetAnimation = new Animation(skull_target);
        skull_targetAnimation.key = "skull_target";
        skull_targetAnimation.end = 28;
        skull_targetAnimation.repeat = 0;
        skull_targetAnimation.autoPlay = false;

        // barrel_target (components)
        const barrel_targetAnimation = new Animation(barrel_target);
        barrel_targetAnimation.key = "barrel_target";
        barrel_targetAnimation.end = 30;
        barrel_targetAnimation.repeat = 0;
        barrel_targetAnimation.autoPlay = false;

        // chest (components)
        const chestAnimation = new Animation(chest);
        chestAnimation.key = "chest";
        chestAnimation.end = 140;

        // puffle_banner (components)
        const puffle_bannerAnimation = new Animation(puffle_banner);
        puffle_bannerAnimation.key = "puffle_banner";
        puffle_bannerAnimation.end = 86;
        puffle_bannerAnimation.showOnStart = true;

        // penguin1 (components)
        const penguin1Animation = new Animation(penguin1);
        penguin1Animation.key = "pirate_penguin_1";
        penguin1Animation.end = 42;
        penguin1Animation.repeat = 2;
        penguin1Animation.autoPlay = false;

        // penguin2 (components)
        const penguin2Animation = new Animation(penguin2);
        penguin2Animation.key = "pirate_penguin_2";
        penguin2Animation.end = 42;
        penguin2Animation.repeat = 2;
        penguin2Animation.autoPlay = false;

        // penguin3 (components)
        const penguin3Animation = new Animation(penguin3);
        penguin3Animation.key = "pirate_penguin_3";
        penguin3Animation.end = 21;
        penguin3Animation.repeat = 5;
        penguin3Animation.autoPlay = false;

        // pufflemonkey (components)
        const pufflemonkeyAnimation = new Animation(pufflemonkey);
        pufflemonkeyAnimation.key = "puffle_monkey";
        pufflemonkeyAnimation.end = 18;
        pufflemonkeyAnimation.repeat = 5;
        pufflemonkeyAnimation.autoPlay = false;

        // cannon_target (components)
        const cannon_targetAnimation = new Animation(cannon_target);
        cannon_targetAnimation.key = "target";
        cannon_targetAnimation.end = 32;
        cannon_targetAnimation.repeat = 0;
        cannon_targetAnimation.autoPlay = false;

        // cannon (components)
        const cannonAnimation = new Animation(cannon);
        cannonAnimation.key = "cannon";
        cannonAnimation.end = 89;
        cannonAnimation.repeat = 0;
        cannonAnimation.autoPlay = false;

        // snowball_fall (components)
        const snowball_fallAnimation = new Animation(snowball_fall);
        snowball_fallAnimation.key = "ball_fall";
        snowball_fallAnimation.end = 27;
        snowball_fallAnimation.repeat = 0;
        snowball_fallAnimation.autoPlay = false;
        snowball_fallAnimation.stopOnOut = false;
        snowball_fallAnimation.showOnStart = true;
        snowball_fallAnimation.hideOnComplete = true;

        // popout_target (components)
        const popout_targetAnimation = new Animation(popout_target);
        popout_targetAnimation.key = "popout_target";
        popout_targetAnimation.end = 30;
        popout_targetAnimation.repeat = 0;

        // barrels (components)
        const barrelsAnimation = new Animation(barrels);
        barrelsAnimation.key = "popout";
        barrelsAnimation.end = 139;
        barrelsAnimation.repeat = 0;
        barrelsAnimation.autoPlay = false;

        // flag (components)
        const flagAnimation = new Animation(flag);
        flagAnimation.key = "flag";
        flagAnimation.end = 140;

        this.shark = shark;
        this.eye = eye;
        this.squid_target = squid_target;
        this.skull_target = skull_target;
        this.barrel_target = barrel_target;
        this.penguin1 = penguin1;
        this.penguin2 = penguin2;
        this.penguin3 = penguin3;
        this.pufflemonkey = pufflemonkey;
        this.cannon_target = cannon_target;
        this.cannon = cannon;
        this.snowball_fall = snowball_fall;
        this.popout_target = popout_target;
        this.barrels = barrels;
        this.hitbox5 = hitbox5;
        this.hitbox4 = hitbox4;
        this.hitbox3 = hitbox3;
        this.hitbox2 = hitbox2;
        this.hitbox1 = hitbox1;
        this.darkness = darkness;
        this.rideParts = rideParts;
        this.sort = sort;
        this.exteriorParts = exteriorParts;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        this.isInterior = false;
        this.standingInRideBounds = false;
        this.rideBounds = this.addBody('rideBounds', 0x00FFFF)
        this.waterBounds = this.addBody('waterBounds', 0xFF0000)

        this.playing1 = false;
        this.playing2 = false;
        this.playing3 = false;
        this.playing4 = false;
        this.playing5 = false;

        this.network.events.on('teleport_and_move', this.handleTeleportAndMove, this)

        super.create();

        for(let sprite of this.exteriorParts) sprite.visible = true;
        for(let sprite of this.rideParts) sprite.visible = false;

        this.createSfxTimeline(this.eye, [{ "__ANY__": [{ frame: 165, sound: "squid2" }] }]);
        this.createSfxTimeline(this.cannon, [{ "__ANY__": [{ frame: 40, sound: "cannon_fuse" }] }]);
        this.createSfxTimeline(this.cannon, [{ "__ANY__": [{ frame: 55, sound: "target_shoot" }] }]);
        this.createSfxTimeline(this.snowball_fall, [{ "__ANY__": [{ frame: 18, sound: "splash" }] }]);
        this.createSfxTimeline(this.barrels, [{ "__ANY__": [{ frame: 42, sound: "barrel_popout" }] }]);

        this.bound1 = this.hitbox1.getBounds();
        this.bound2 = this.hitbox2.getBounds();
        this.bound3 = this.hitbox3.getBounds();
        this.bound4 = this.hitbox4.getBounds();
        this.bound5 = this.hitbox5.getBounds();
    }

    stop() {
        super.stop()
        this.network.events.off('teleport_and_move', this.handleTeleportAndMove, this)
    }

    update() {
        const isInBounds = this.matter.containsPoint(this.rideBounds, this.client.penguin.x, this.client.penguin.y)
        if(!this.standingInRideBounds && isInBounds) {
            this.standingInRideBounds = true
            this.switchRide(true)

            this.soundManager.playSfx('target_popup');

            this.barrel_target.__Animation.play();
            this.squid_target.__Animation.play();
            this.skull_target.__Animation.play();
            this.cannon_target.__Animation.play();

        } else if(this.standingInRideBounds && !isInBounds) {
            this.standingInRideBounds = false
            this.switchRide(false)
        }

        this.updateBoats()
    }

    switchRide(isInterior) {
        if (this.darknessTween) {
            this.darknessTween.stop()
            this.darknessTween = null
        }
        this.darknessTween = this.tweens.add({
            targets: this.darkness,
            duration: 300,
            alpha: { from: 0, to: 1 },
            yoyo: true,
            onYoyo: () => {
                this.isInterior = isInterior

                let spritesToShow = this.isInterior ? this.rideParts : this.exteriorParts
                let spritesToHide = this.isInterior ? this.exteriorParts : this.rideParts

                for(let sprite of spritesToShow) sprite.visible = true;
                for(let sprite of spritesToHide) sprite.visible = false;
            }
        })
    }

    onSnowballComplete(x, y, ball) {
        if (!this.isInterior) return

        if (this.bound1.contains(x, y) && !this.playing1) {
            this.playing1 = true;

            this.soundManager.playSfx('target_hit');
            this.soundManager.playSfx('target_down');

            this.whenHit(ball);

            this.playAnimation(this.skull_target, 29, 160, () => {
                this.playAnimation(this.skull_target, 1, 28, () => {
                    this.playing1 = false;
                });
            });

            this.soundManager.playSfx('shark');

            this.shark.__Animation.play();

            this.interface.main.snowballFactory.destroyBall(ball);
        } else if (this.bound2.contains(x, y) && !this.playing2) {
            this.playing2 = true;

            this.soundManager.playSfx('target_hit');
            this.soundManager.playSfx('target_down');

            this.whenHit(ball);

            this.playAnimation(this.barrel_target, 31, 150, () => {
                this.playAnimation(this.barrel_target, 1, 30, () => {
                    this.playing2 = false;
                });
            });

            this.penguin1.__Animation.play();
            this.penguin2.__Animation.play();
            this.penguin3.__Animation.play();
            this.pufflemonkey.__Animation.play();

            this.time.addEvent({
                delay: ONE_FRAME_IN_MS * 5,
                callback: () => this.soundManager.playSfx('pirate_song')
            })

            this.interface.main.snowballFactory.destroyBall(ball);
        } else if (this.bound3.contains(x, y) && !this.playing3) {
            this.playing3 = true;

            this.soundManager.playSfx('target_hit');
            this.soundManager.playSfx('target_down');

            this.whenHit(ball);

            this.playAnimation(this.squid_target, 33, 39, () => {
                this.playAnimation(this.squid_target, 40, 59, () => {                    
                    
                });
            });

            this.eye.__Animation.play();

            this.soundManager.playSfx('squid1');

            this.eye.once('animationcomplete', () => {
                this.playAnimation(this.squid_target, 1, 32, () => {
                    this.playing3 = false;
                });
            });

            this.interface.main.snowballFactory.destroyBall(ball);
        } else if (this.bound4.contains(x, y) && !this.playing4) {
            this.playing4 = true;

            this.soundManager.playSfx('target_hit');
            this.soundManager.playSfx('target_down');

            this.whenHit(ball);

            this.playAnimation(this.cannon_target, 33, 39, () => {
                this.playAnimation(this.cannon_target, 40, 59, () => {                    
                    
                });
            });

            this.cannon.__Animation.play();

            this.cannon.once('animationcomplete', () => {
                this.snowball_fall.visible = true;

                this.playAnimation(this.snowball_fall, 1, 32, () => {
                    this.snowball_fall.visible = false;

                    this.playAnimation(this.cannon_target, 1, 32, () => {
                        this.playing4 = false;
                    });
                });
            });

            this.interface.main.snowballFactory.destroyBall(ball);
        } else if (this.bound5.contains(x, y) && !this.playing5) {
            this.playing5 = true;

            this.soundManager.playSfx('target_hit');
            this.soundManager.playSfx('target_down');

            this.whenHit(ball);

            this.playAnimation(this.popout_target, 31, 144, () => {
                this.playAnimation(this.popout_target, 1, 30, () => {
                    this.playing5 = false;
                });
            });

            this.barrels.__Animation.play();

            this.interface.main.snowballFactory.destroyBall(ball);
        }
    }

    whenHit(ball) {
        if (ball && ball.penguin && ball.penguin) {
            if(ball.penguin.id !== this.client.id) return
            // Earn 2 tickets for each thing hit
            this.world.party.worldTicketsEarned(2)

            // Earn Target Champion stamp for hitting 50 things
            this.totalHit++
            if (this.totalHit == 50) this.stampEarned(185)
        }
	}

    playAnimation(target, startFrame, endFrame, onComplete) {
        if (!this.isInterior) return

        target.__Animation.start = startFrame;
        target.__Animation.end = endFrame;
        target.__Animation.seriously();
        target.__Animation.play();

        if (onComplete) {
            target.once('animationcomplete', onComplete);
        }
    }

    /* ========== Boats ========== */

    onPenguinsAdded() {
        if (!this.penguins) return

        for(let penguin of Object.values(this.penguins)) {
            if (!penguin) continue
            this.addBoatsToPenguin(penguin)
            penguin.setScale(PENGUIN_SCALE)
            if(this.matter.containsPoint(this.waterBounds, penguin.x, penguin.y)) {
                penguin.inTheWater = true
                for(let boat of Object.values(penguin.boats)) boat.visible = true
            } else {
                penguin.inTheWater = false
                for(let boat of Object.values(penguin.boats)) boat.visible = false
            }

            this.sendToNextWaypoint(penguin.id)
        }
        this.boatsAdded = true
    }

    addBoatsToPenguin(penguin) {
        penguin.boats = {
            'front': this.add.sprite(penguin.x, penguin.y, 'boat-effects', 'boatfront/2_1').setDepth(penguin.depth + 1).setScale(PENGUIN_SCALE),
            'back': this.add.sprite(penguin.x, penguin.y, 'boat-effects', 'boatback/2_1').setDepth(penguin.depth - 1).setScale(PENGUIN_SCALE),
        }
    }

    addPenguin(id, penguin) {
        super.addPenguin(id, penguin)
        penguin.setScale(PENGUIN_SCALE)
        this.addBoatsToPenguin(penguin)
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

    updateBoats() {
        if (!this.boatsAdded) return

        for(let penguin of Object.values(this.penguins)) {
            if (!penguin) continue
            if (!penguin.boats) continue
            for(let [which, boat] of Object.entries(penguin.boats)) {
                if(boat.x !== penguin.x) boat.x = penguin.x
                if(boat.y !== penguin.y) boat.y = penguin.y

                let frame = `boat${which}/${penguin.theFrame + 1}_1` // + 1 because the frames are offset by 1, no particular reason
                if(this.world.textures.get('boat-effects').has(frame)) {
                    boat.setFrame(frame)
                    boat.visible = penguin.inTheWater
                } else {
                    boat.visible = false
                }

                boat.setDepth(which == 'front' ? penguin.depth + 1 : penguin.depth - 1)
            }

            if(this.matter.containsPoint(this.waterBounds, penguin.x, penguin.y) && !penguin.inTheWater) {
                penguin.inTheWater = true
                for(let boat of Object.values(penguin.boats)) boat.visible = true
            } else if(!this.matter.containsPoint(this.waterBounds, penguin.x, penguin.y) && penguin.inTheWater) {
                penguin.inTheWater = false
                for(let boat of Object.values(penguin.boats)) boat.visible = false
            }
        }
    }

    /* ========== Waypoints ========== */

    onPenguinMoveComplete(id) {
        this.sendToNextWaypoint(id)
    }

    closestWaypointToPlayer(penguin) {
        var _loc3_ = undefined;
        let point = null
        for(let [index, coords] of waypoints.entries()) {
           let distance = Phaser.Math.Distance.Between(coords[0], coords[1], penguin.x, penguin.y)
           if(distance < _loc3_ || _loc3_ == undefined) {
              point = index
              _loc3_ = distance
           }
        }
        return point
    }

    sendToNextWaypoint(id) {
        let penguin = this.penguins[id]
        if (!penguin) return

        let closestWaypoint = this.closestWaypointToPlayer(penguin)
        if (!penguin.inTheWater || closestWaypoint + 1 >= NUM_WAYPOINTS) {
            return
        }

        let x = Math.round(waypoints[closestWaypoint + 1][0])
        let y = Math.round(waypoints[closestWaypoint + 1][1])

        let angle = Math.atan(Math.abs(y - penguin.y) / Math.abs(x - penguin.x))
        if(isNaN(angle)) return

        if (penguin.onEnterFrame) {
            this.time.removeEvent(penguin.onEnterFrame)
            penguin.onEnterFrame = null
        }

        penguin.onEnterFrame = this.time.addEvent({
            delay: ONE_FRAME_IN_MS,
            repeat: -1,
            callback: () => this.moveToNextWaypoint(penguin, waypoints[closestWaypoint + 1], angle, closestWaypoint)
        })
    }

    moveToNextWaypoint(penguin, newPoint, angle, currentPoint) {
        if (!penguin) return
        if (!penguin.inTheWater || (this.client.id == penguin.id && penguin.isTweening)) {
            this.time.removeEvent(penguin.onEnterFrame)
            penguin.onEnterFrame = null
            return
        }

        let x = (newPoint[0] - penguin.x) >= 0 ? 1 : -1
        let y = (newPoint[1] - penguin.y) >= 0 ? 1 : -1
        penguin.x += (Math.abs(newPoint[0] - penguin.x) < 1) ? 0 : x * CURRENT_SPEED * Math.cos(angle)
        penguin.y += (Math.abs(newPoint[1] - penguin.y) < 1) ? 0 : y * CURRENT_SPEED * Math.sin(angle)
        penguin.onMoveUpdate()

        if(Phaser.Math.Distance.Between(newPoint[0], newPoint[1], penguin.x, penguin.y) <= 40) {
            this.time.removeEvent(penguin.onEnterFrame)
            if (this.client.id == penguin.id) {
                this.sendTeleport(currentPoint + 1)
            }
            this.sendToNextWaypoint(penguin.id)
        }
    }

    handleTeleportAndMove(args) {
        this.sendToNextWaypoint(args.id)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */