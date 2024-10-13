
import RoomScene from '@rooms/RoomScene'

import { Animation, HoverAnimation, Button, SimpleButton, MoveTo } from '@components/components'

class BoatTarget {

    constructor(sprite, prefix) {
        this.sprite = sprite
        this.scene = sprite.scene
        this.prefix = prefix

        this.isUp = false
        this.popDownTimer = null
    }

    popUp() {
        if (this.isUp) return
        this.sprite.play(`${this.prefix}-up`)
        this.scene.soundManager.playSfx('buccboats-popup')
        this.popDownTimer = this.scene.time.addEvent({
            delay: 10000,
            callback: () => this.popDown()
        })
        this.isUp = true
    }

    popDown() {
        if (!this.isUp) return
        this.sprite.play(`${this.prefix}-down`)
        this.scene.soundManager.playSfx('buccboats-popdown')
        this.isUp = false
    }

    hit() {
        if (!this.isUp) return
        this.sprite.play(`${this.prefix}-hit`)
        this.scene.world.party.worldTicketsEarned(5)
        this.scene.soundManager.playSfx('buccboats-hit')
        if (this.popDownTimer) {
            this.scene.time.removeEvent(this.popDownTimer)
            this.popDownTimer = null
        }
        this.isUp = false
    }

}

/* START OF COMPILED CODE */

export default class BuccaneerBoats extends RoomScene {

    constructor() {
        super("BuccaneerBoats");

        /** @type {Phaser.GameObjects.Sprite} */
        this.boat;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cannon_left;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cannon_mid;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cannon_right;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cave;
        /** @type {Phaser.GameObjects.Sprite} */
        this.chest;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mermaid;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */  

        this.roomTriggers = {
            'exit': () => this.triggerRoom(854, 350, 440),
            'boat_hit': () => this.onTargetHit(this.boatTarget),
            'cave_hit': () => this.onTargetHit(this.caveTarget),
            'chest_hit': () => this.onTargetHit(this.chestTarget),
            'mermaid_hit': () => this.onTargetHit(this.mermaidTarget)
        }

        this.music = 1148;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("buccaneerboats-pack", "assets/media/rooms/_fair/buccaneerboats/buccaneerboats-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(732, 463, "buccaneerboats", "bg");

        // boatsail
        const boatsail = this.add.sprite(603.3035278320312, 439.3767352505719, "buccaneerboats", "boatsail0001");
        boatsail.setOrigin(0.48558033046473076, 1.2095995271303512);

        // rock
        const rock = this.add.image(402, 426.87861756664535, "buccaneerboats", "rock");
        rock.setOrigin(0.5, 0.5297476731040877);

        // boat
        const boat = this.add.sprite(523, 447.30065744698504, "buccaneerboats", "boat0001");
        boat.setOrigin(0.5, 0.7732026297879402);

        // cannon_left
        const cannon_left = this.add.sprite(990.5, 323.5, "buccaneerboats", "cannon_left0001");
        cannon_left.setOrigin(1, 1);

        // cannon_mid
        const cannon_mid = this.add.sprite(1079.5, 425.5, "buccaneerboats", "cannon_mid0001");
        cannon_mid.setOrigin(1, 1);

        // cannon_right
        const cannon_right = this.add.sprite(1175, 553, "buccaneerboats", "cannon_right0001");
        cannon_right.setOrigin(1, 1);

        // cave
        const cave = this.add.sprite(297, 223, "buccaneerboats", "cave0001");

        // chestrock
        const chestrock = this.add.image(849.1536159845468, 422.54512747254796, "buccaneerboats", "chestrock");
        chestrock.setOrigin(0.49714059454238796, 0.6180054636929964);

        // smolrock
        const smolrock = this.add.image(911, 465, "buccaneerboats", "smolrock");

        // chest
        const chest = this.add.sprite(833, 441.2227396447249, "buccaneerboats", "chest0001");
        chest.setOrigin(0.5, 0.7123995894198974);

        // mermaid
        const mermaid = this.add.sprite(565, 606.2227396447249, "buccaneerboats", "mermaid0001");
        mermaid.setOrigin(0.5, 0.6660784023655582);

        // skull_back
        this.add.image(304, 116, "buccaneerboats", "skull_back");

        // skullfire10001
        const skullfire10001 = this.add.sprite(268, 85, "buccaneerboats", "skullfire10001");

        // skullfire20001
        const skullfire20001 = this.add.sprite(360, 94, "buccaneerboats", "skullfire20001");

        // skull
        this.add.image(286, 89, "buccaneerboats", "skull");

        // plantcluster
        const plantcluster = this.add.image(820, 757, "buccaneerboats", "plantcluster");

        // fg
        const fg = this.add.image(758.4691700338411, 963.6223597872844, "buccaneerboats", "fg");
        fg.setOrigin(0.47975009425379217, 0.8266320907358241);

        // smallplant
        this.add.image(1344, 554, "buccaneerboats", "smallplant");

        // leftsign
        const leftsign = this.add.image(69.42677941129554, 622.4059190930162, "buccaneerboats", "leftsign");
        leftsign.setOrigin(0.5082263708857476, 0.8217321189217581);

        // torchrocks
        const torchrocks = this.add.image(204.05892944335938, 309.63048264139746, "buccaneerboats", "torchrocks");
        torchrocks.setOrigin(0.6511160481329621, 0.7618432408524054);

        // torchglow
        const torchglow = this.add.image(108, 217, "buccaneerboats", "torchglow");
        torchglow.scaleX = 0.3;
        torchglow.scaleY = 0.3;

        // torchglow_1
        const torchglow_1 = this.add.image(574, 159, "buccaneerboats", "torchglow");
        torchglow_1.scaleX = 0.3;
        torchglow_1.scaleY = 0.3;

        // torchglow_2
        const torchglow_2 = this.add.image(772, 159, "buccaneerboats", "torchglow");
        torchglow_2.scaleX = 0.3;
        torchglow_2.scaleY = 0.3;

        // torch_left
        const torch_left = this.add.sprite(104.29676625962955, 289.987310990002, "buccaneerboats", "torch0001");
        torch_left.setOrigin(0.4539666556656635, 0.8193563263194584);

        // torch_left_1
        const torch_left_1 = this.add.sprite(574, 188, "buccaneerboats", "torch0001");

        // torch_left_2
        const torch_left_2 = this.add.sprite(776, 191, "buccaneerboats", "torch0001");
        torch_left_2.angle = -10;
        torch_left_2.flipX = true;

        // polygon_1
        const polygon_1 = this.add.polygon(183.96691861256733, 819.7218023123878, "-171.8206543304659 115.74255048454313 -169.906744375821 -152.20484316574277 -9.138308185649464 -94.78754452639578 157.3718578684568 -35.45633593240393 260.72299541928135 29.61660252552258 300.91510446682423 117.65646043918798");
        polygon_1.setOrigin(0.04858299416781708, -0.14184396642376848);
        polygon_1.fillColor = 65535;
        polygon_1.fillAlpha = 0.5;

        // skullglow
        const skullglow = this.add.image(277, 95, "buccaneerboats", "skullglow");
        skullglow.scaleX = 0.5;
        skullglow.scaleY = 0.5;

        // skullglow_1
        const skullglow_1 = this.add.image(364, 95, "buccaneerboats", "skullglow");
        skullglow_1.scaleX = 0.5;
        skullglow_1.scaleY = 0.5;

        // lists
        const sort = [fg, leftsign, plantcluster, mermaid, chest, smolrock, chestrock, boat, rock, torchrocks, torch_left, boatsail, cannon_left, cannon_right, cannon_mid];

        // boatsail (components)
        const boatsailAnimation = new Animation(boatsail);
        boatsailAnimation.key = "boatsail";
        boatsailAnimation.end = 119;

        // cannon_left (components)
        const cannon_leftHoverAnimation = new HoverAnimation(cannon_left);
        cannon_leftHoverAnimation.key = "cannon_left";
        cannon_leftHoverAnimation.end = 20;
        cannon_leftHoverAnimation.pixelPerfect = true;

        // cannon_mid (components)
        const cannon_midHoverAnimation = new HoverAnimation(cannon_mid);
        cannon_midHoverAnimation.key = "cannon_mid";
        cannon_midHoverAnimation.end = 20;
        cannon_midHoverAnimation.pixelPerfect = true;

        // cannon_right (components)
        const cannon_rightHoverAnimation = new HoverAnimation(cannon_right);
        cannon_rightHoverAnimation.key = "cannon_right";
        cannon_rightHoverAnimation.end = 20;
        cannon_rightHoverAnimation.pixelPerfect = true;

        // skullfire10001 (components)
        const skullfire10001Animation = new Animation(skullfire10001);
        skullfire10001Animation.key = "skullfire1";
        skullfire10001Animation.end = 20;

        // skullfire20001 (components)
        const skullfire20001Animation = new Animation(skullfire20001);
        skullfire20001Animation.key = "skullfire2";
        skullfire20001Animation.end = 20;

        // torch_left (components)
        const torch_leftAnimation = new Animation(torch_left);
        torch_leftAnimation.key = "torch";
        torch_leftAnimation.end = 11;

        // torch_left_1 (components)
        const torch_left_1Animation = new Animation(torch_left_1);
        torch_left_1Animation.key = "torch";
        torch_left_1Animation.end = 11;

        // torch_left_2 (components)
        const torch_left_2Animation = new Animation(torch_left_2);
        torch_left_2Animation.key = "torch";
        torch_left_2Animation.end = 11;

        // polygon_1 (components)
        new SimpleButton(polygon_1);
        new MoveTo(polygon_1);

        this.boat = boat;
        this.cannon_left = cannon_left;
        this.cannon_mid = cannon_mid;
        this.cannon_right = cannon_right;
        this.cave = cave;
        this.chest = chest;
        this.mermaid = mermaid;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        for(let cannon of [this.cannon_left, this.cannon_mid, this.cannon_right]) {
            cannon.on('animationstart', () => this.soundManager.playSfx('buccboats-cannon', {}, true))
        }

        this.waterBounds = this.addBody('water', 0x00FFFF)

        this.queuedTarget = null

        this.boatTarget = new BoatTarget(this.boat, 'boat')
        this.caveTarget = new BoatTarget(this.cave, 'cave')
        this.chestTarget = new BoatTarget(this.chest, 'chest')
        this.mermaidTarget = new BoatTarget(this.mermaid, 'mermaid')

        this.allTargets = [this.boatTarget, this.caveTarget, this.chestTarget, this.mermaidTarget]

        this.time.addEvent({
            delay: 4000,
            repeat: -1,
            callback: () => this.spawnRandomTarget()
        })
    }

    spawnRandomTarget() {
        // Ensures that the next target will always be unique
        let spawns = Phaser.Utils.Array.NumberArray(0, this.allTargets.length - 1)
        spawns = spawns.filter(num => num !== this.queuedTarget)
        let spawn = Phaser.Utils.Array.GetRandom(spawns)

        this.allTargets[spawn].popUp()
        this.queuedTarget = spawn
    }

    onTargetHit(target) {
        target.hit()
    }

    /* ========== Boat Effects ========== */

    onPenguinsAdded() {
        if (!this.penguins) return

        for(let penguin of Object.values(this.penguins)) {
            if (!penguin) continue
            this.addBoatsToPenguin(penguin)
            if(this.matter.containsPoint(this.waterBounds, penguin.x, penguin.y)) {
                penguin.inTheWater = true
                for(let boat of Object.values(penguin.boats)) boat.visible = true
            } else {
                penguin.inTheWater = false
                for(let boat of Object.values(penguin.boats)) boat.visible = false
            }
        }
        this.boatsAdded = true
    }

    addBoatsToPenguin(penguin) {
        penguin.boats = {
            'front': this.add.sprite(penguin.x, penguin.y, 'buccaneerboats', 'boatfront/2_1').setDepth(penguin.depth + 1),
            'back': this.add.sprite(penguin.x, penguin.y, 'buccaneerboats', 'boatback/2_1').setDepth(penguin.depth - 1),
        }
    }

    addPenguin(id, penguin) {
        super.addPenguin(id, penguin)
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

    update() {
        if (!this.boatsAdded) return

        for(let penguin of Object.values(this.penguins)) {
            if (!penguin) continue
            if (!penguin.boats) continue
            for(let [which, boat] of Object.entries(penguin.boats)) {
                if(boat.x !== penguin.x) boat.x = penguin.x
                if(boat.y !== penguin.y) boat.y = penguin.y

                let frame = `boat${which}/${penguin.theFrame + 1}_1` // + 1 because the frames are offset by 1, no particular reason
                if(this.world.textures.get('buccaneerboats').has(frame)) {
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

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */