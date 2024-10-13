
// You can write more code here
import RoomScene from '@rooms/RoomScene'

import { Animation } from '@components/components'

/* START OF COMPILED CODE */

export default class MedievalMonsters extends RoomScene {

    constructor() {
        super("MedievalMonsters");

        /** @type {Phaser.GameObjects.Image} */
        this.castle;
        /** @type {Phaser.GameObjects.Image} */
        this.ground;
        /** @type {Phaser.GameObjects.Sprite} */
        this.ogre_tree;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cave_ogre;
        /** @type {Phaser.GameObjects.Sprite} */
        this.ogre_bridge3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.ogre_bridge2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.ogre_bridge1;
        /** @type {Phaser.GameObjects.Image} */
        this.bridge_front;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fire_chain;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dragon;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fire_target3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fire_target2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fire_target1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bat3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bat2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bat1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.knight;
        /** @type {Phaser.GameObjects.Sprite} */
        this.ogre_duck3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.ogre_duck2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.ogre_duck1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.princess;
        /** @type {Phaser.GameObjects.Sprite} */
        this.light_chain;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lighting_target1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lighting_target2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lighting_target3;
        /** @type {Phaser.GameObjects.Image} */
        this.tower2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.wizard;
        /** @type {Phaser.GameObjects.Image} */
        this.towerco;
        /** @type {Phaser.GameObjects.Image} */
        this.tower1;
        /** @type {Phaser.GameObjects.Image} */
        this.rail;
        /** @type {Phaser.GameObjects.Image} */
        this.balls;
        /** @type {Phaser.GameObjects.Image} */
        this.sign;
        /** @type {Phaser.GameObjects.Sprite} */
        this.ogre_tower;
        /** @type {Phaser.GameObjects.Sprite} */
        this.princess_kidnapped;
        /** @type {Phaser.GameObjects.Sprite} */
        this.light_particle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fire_particle;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.ogre_duck3_hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.ogre_duck2_hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.ogre_duck1_hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.ogre_bridge3_hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.ogre_bridge2_hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.ogre_bridge1_hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.bat3_hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.bat2_hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.bat1_hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.ogre_cave_hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.ogre_tree_hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.fire_target1_hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.fire_target2_hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.fire_target3_hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.light_target1_hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.light_target2_hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.light_target3_hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.ogre_tower_hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.wizard_hitbox;


        /* START-USER-CTR-CODE */

        this.music = 1149

        this.roomTriggers = {
            'hub': () => this.triggerRoom(854, 1150, 690),
        }

        this.maxBalls = 75

        this.physicsKey = 'medieval-monsters-physics'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("medieval-monsters-pack", "assets/media/rooms/_fair/medievalmonsters/medieval-monsters-pack.json");
    }

    /** @returns {void} */
    _create() {

        // castle
        const castle = this.add.image(712, 228, "medieval-monsters", "castle");

        // cave_opening
        this.add.image(350, 350, "medieval-monsters", "cave_opening");

        // ground
        const ground = this.add.image(750, 487, "medieval-monsters", "ground");

        // tree_hole
        this.add.image(1195, 263, "medieval-monsters", "tree_hole");

        // tree
        this.add.image(1032, 248, "medieval-monsters", "tree");

        // ogre_tree
        const ogre_tree = this.add.sprite(1433, 406, "medieval-monsters", "ogre_bridge20013");
        ogre_tree.angle = -59.99999999999994;
        ogre_tree.visible = false;

        // small_rock
        this.add.image(1214, 475, "medieval-monsters", "small_rock");

        // cave
        this.add.image(350, 307, "medieval-monsters", "cave");

        // cave_ogre
        const cave_ogre = this.add.sprite(242, 751, "medieval-monsters", "ogre_bridge10001");

        // front_rock
        this.add.sprite(292, 453, "medieval-monsters", "front_rock");

        // bridge_back
        this.add.image(780, 374, "medieval-monsters", "bridge_back");

        // ogre_bridge3
        const ogre_bridge3 = this.add.sprite(679, 688, "medieval-monsters", "ogre_bridge30001");

        // ogre_bridge2
        const ogre_bridge2 = this.add.sprite(779, 660, "medieval-monsters", "ogre_bridge20001");

        // ogre_bridge1
        const ogre_bridge1 = this.add.sprite(851, 684, "medieval-monsters", "ogre_bridge10001");

        // bridge_front
        const bridge_front = this.add.image(783, 437, "medieval-monsters", "bridge_front");

        // fire_chain
        const fire_chain = this.add.sprite(519, 161, "medieval-monsters", "chain0001");
        fire_chain.visible = false;

        // dragon
        const dragon = this.add.sprite(527, -22, "medieval-monsters", "dragon_open0001");
        dragon.scaleX = 1.25;
        dragon.scaleY = 1.25;
        dragon.visible = false;

        // fire_target3
        const fire_target3 = this.add.sprite(604, 203, "medieval-monsters", "fire_target30001");
        fire_target3.scaleX = 0.7;
        fire_target3.scaleY = 0.7;
        fire_target3.angle = 25;
        fire_target3.visible = false;

        // fire_target2
        const fire_target2 = this.add.sprite(486, 147, "medieval-monsters", "fire_target20001");
        fire_target2.scaleX = 0.7;
        fire_target2.scaleY = 0.7;
        fire_target2.angle = 25;
        fire_target2.visible = false;

        // fire_target1
        const fire_target1 = this.add.sprite(369, 91, "medieval-monsters", "fire_target10001");
        fire_target1.scaleX = 0.7;
        fire_target1.scaleY = 0.7;
        fire_target1.angle = 25;
        fire_target1.visible = false;

        // bat3
        const bat3 = this.add.sprite(1365, 60, "medieval-monsters", "bat_moveup0001");

        // bat2
        const bat2 = this.add.sprite(1365, 60, "medieval-monsters", "bat_moveup0001");

        // bat1
        const bat1 = this.add.sprite(1365, 60, "medieval-monsters", "bat_moveup0001");

        // knight
        const knight = this.add.sprite(1461, 450, "medieval-monsters", "knight0001");

        // bg
        this.add.image(718, 495, "medieval-monsters", "bg");

        // wave2
        this.add.image(775, 595, "medieval-monsters", "wave1");

        // ogre_duck3
        const ogre_duck3 = this.add.sprite(1342, 658, "medieval-monsters", "ogre_duck0001");

        // ogre_duck2
        const ogre_duck2 = this.add.sprite(1352, 651, "medieval-monsters", "ogre_duck0001");
        ogre_duck2.flipX = true;

        // ogre_duck1
        const ogre_duck1 = this.add.sprite(1340, 648, "medieval-monsters", "ogre_duck0001");

        // wave1
        this.add.image(743, 627, "medieval-monsters", "wave1");

        // princess
        const princess = this.add.sprite(-63, 404, "medieval-monsters", "princess_tower0001");

        // light_chain
        const light_chain = this.add.sprite(1184, 436, "medieval-monsters", "chain0001");
        light_chain.scaleX = 1.25;
        light_chain.scaleY = 1.25;
        light_chain.angle = 24;
        light_chain.flipX = true;
        light_chain.visible = false;

        // lighting_target1
        const lighting_target1 = this.add.sprite(1384, 431, "medieval-monsters", "light_target0001");
        lighting_target1.visible = false;

        // lighting_target2
        const lighting_target2 = this.add.sprite(1386, 433, "medieval-monsters", "light_target0001");
        lighting_target2.visible = false;

        // lighting_target3
        const lighting_target3 = this.add.sprite(1383, 433, "medieval-monsters", "light_target0001");
        lighting_target3.visible = false;

        // tower_hole
        this.add.image(1355, 315, "medieval-monsters", "tower_hole");

        // tower2
        const tower2 = this.add.image(1364, 409, "medieval-monsters", "tower");

        // wizard
        const wizard = this.add.sprite(1304, 310, "medieval-monsters", "wizard_cast0001");
        wizard.visible = false;

        // towerco
        const towerco = this.add.image(1364, 410, "towerco");

        // tower1
        const tower1 = this.add.image(127, 410, "medieval-monsters", "tower");

        // rail
        const rail = this.add.image(749, 677, "medieval-monsters", "rail");

        // balls
        const balls = this.add.image(758, 751, "medieval-monsters", "balls");

        // sign
        const sign = this.add.image(189, 729, "medieval-monsters", "sign");

        // ogre_tower
        const ogre_tower = this.add.sprite(-98, 707, "medieval-monsters", "ogre_tower0001");

        // princess_kidnapped
        const princess_kidnapped = this.add.sprite(140, 332, "medieval-monsters", "princess0001");
        princess_kidnapped.angle = -90;
        princess_kidnapped.visible = false;

        // light_particle
        const light_particle = this.add.sprite(272, 302, "medieval-monsters", "particle0001");
        light_particle.visible = false;

        // fire_particle
        const fire_particle = this.add.sprite(1160, 302, "medieval-monsters", "particle0001");
        fire_particle.visible = false;

        // ogre_duck3_hitbox
        const ogre_duck3_hitbox = this.add.rectangle(456, 539, 65, 85);
        ogre_duck3_hitbox.visible = false;

        // ogre_duck2_hitbox
        const ogre_duck2_hitbox = this.add.rectangle(781, 544, 65, 85);
        ogre_duck2_hitbox.visible = false;

        // ogre_duck1_hitbox
        const ogre_duck1_hitbox = this.add.rectangle(1115, 537, 65, 85);
        ogre_duck1_hitbox.visible = false;

        // ogre_bridge3_hitbox
        const ogre_bridge3_hitbox = this.add.rectangle(569, 341, 74, 74);
        ogre_bridge3_hitbox.visible = false;

        // ogre_bridge2_hitbox
        const ogre_bridge2_hitbox = this.add.rectangle(768, 300, 74, 74);
        ogre_bridge2_hitbox.visible = false;

        // ogre_bridge1_hitbox
        const ogre_bridge1_hitbox = this.add.rectangle(973, 352, 74, 74);
        ogre_bridge1_hitbox.visible = false;

        // bat3_hitbox
        const bat3_hitbox = this.add.rectangle(1368, 191, 74, 74);
        bat3_hitbox.visible = false;

        // bat2_hitbox
        const bat2_hitbox = this.add.rectangle(1368, 191, 74, 74);
        bat2_hitbox.visible = false;

        // bat1_hitbox
        const bat1_hitbox = this.add.rectangle(1368, 191, 74, 74);
        bat1_hitbox.visible = false;

        // ogre_cave_hitbox
        const ogre_cave_hitbox = this.add.rectangle(361, 417, 74, 74);
        ogre_cave_hitbox.visible = false;

        // ogre_tree_hitbox
        const ogre_tree_hitbox = this.add.rectangle(1103, 229, 74, 74);
        ogre_tree_hitbox.visible = false;

        // fire_target1_hitbox
        const fire_target1_hitbox = this.add.rectangle(387, 106, 74, 74);
        fire_target1_hitbox.angle = 25;
        fire_target1_hitbox.visible = false;

        // fire_target2_hitbox
        const fire_target2_hitbox = this.add.rectangle(502, 161, 74, 74);
        fire_target2_hitbox.angle = 25;
        fire_target2_hitbox.visible = false;

        // fire_target3_hitbox
        const fire_target3_hitbox = this.add.rectangle(617, 216, 74, 74);
        fire_target3_hitbox.angle = 25;
        fire_target3_hitbox.visible = false;

        // light_target1_hitbox
        const light_target1_hitbox = this.add.rectangle(1401, 447, 74, 74);
        light_target1_hitbox.visible = false;

        // light_target2_hitbox
        const light_target2_hitbox = this.add.rectangle(1401, 447, 74, 74);
        light_target2_hitbox.visible = false;

        // light_target3_hitbox
        const light_target3_hitbox = this.add.rectangle(1401, 447, 74, 74);
        light_target3_hitbox.visible = false;

        // ogre_tower_hitbox
        const ogre_tower_hitbox = this.add.rectangle(-109, 731, 74, 74);
        ogre_tower_hitbox.visible = false;

        // wizard_hitbox
        const wizard_hitbox = this.add.rectangle(1344, 366, 85, 64);
        wizard_hitbox.visible = false;

        // ogre_tree (components)
        const ogre_treeAnimation = new Animation(ogre_tree);
        ogre_treeAnimation.key = "ogre_bridge2";
        ogre_treeAnimation.end = 120;
        ogre_treeAnimation.repeat = 0;
        ogre_treeAnimation.autoPlay = false;

        // cave_ogre (components)
        const cave_ogreAnimation = new Animation(cave_ogre);
        cave_ogreAnimation.key = "ogre_bridge1";
        cave_ogreAnimation.end = 120;
        cave_ogreAnimation.repeat = 0;
        cave_ogreAnimation.autoPlay = false;

        // ogre_bridge3 (components)
        const ogre_bridge3Animation = new Animation(ogre_bridge3);
        ogre_bridge3Animation.key = "ogre_bridge3";
        ogre_bridge3Animation.end = 120;
        ogre_bridge3Animation.repeat = 0;
        ogre_bridge3Animation.autoPlay = false;

        // ogre_bridge2 (components)
        const ogre_bridge2Animation = new Animation(ogre_bridge2);
        ogre_bridge2Animation.key = "ogre_bridge2";
        ogre_bridge2Animation.end = 120;
        ogre_bridge2Animation.repeat = 0;
        ogre_bridge2Animation.autoPlay = false;

        // ogre_bridge1 (components)
        const ogre_bridge1Animation = new Animation(ogre_bridge1);
        ogre_bridge1Animation.key = "ogre_bridge1";
        ogre_bridge1Animation.end = 120;
        ogre_bridge1Animation.repeat = 0;
        ogre_bridge1Animation.autoPlay = false;

        // fire_chain (components)
        const fire_chainAnimation = new Animation(fire_chain);
        fire_chainAnimation.key = "chain";
        fire_chainAnimation.end = 7;
        fire_chainAnimation.repeat = 0;
        fire_chainAnimation.autoPlay = false;

        // dragon (components)
        const dragonAnimation = new Animation(dragon);
        dragonAnimation.key = "dragon_open";
        dragonAnimation.end = 220;
        dragonAnimation.repeat = 0;
        dragonAnimation.autoPlay = false;

        // fire_target3 (components)
        const fire_target3Animation = new Animation(fire_target3);
        fire_target3Animation.key = "fire_target3";
        fire_target3Animation.end = 18;

        // fire_target2 (components)
        const fire_target2Animation = new Animation(fire_target2);
        fire_target2Animation.key = "fire_target2";
        fire_target2Animation.end = 18;

        // fire_target1 (components)
        const fire_target1Animation = new Animation(fire_target1);
        fire_target1Animation.key = "fire_target1";
        fire_target1Animation.end = 18;

        // bat3 (components)
        const bat3Animation = new Animation(bat3);
        bat3Animation.key = "bat";
        bat3Animation.end = 10;

        // bat2 (components)
        const bat2Animation = new Animation(bat2);
        bat2Animation.key = "bat";
        bat2Animation.end = 10;

        // bat1 (components)
        const bat1Animation = new Animation(bat1);
        bat1Animation.key = "bat";
        bat1Animation.end = 10;

        // knight (components)
        const knightAnimation = new Animation(knight);
        knightAnimation.key = "knight";
        knightAnimation.end = 239;
        knightAnimation.repeat = 0;
        knightAnimation.autoPlay = false;

        // ogre_duck3 (components)
        const ogre_duck3Animation = new Animation(ogre_duck3);
        ogre_duck3Animation.key = "ogre_duck";
        ogre_duck3Animation.start = 2;
        ogre_duck3Animation.end = 9;
        ogre_duck3Animation.autoPlay = false;

        // ogre_duck2 (components)
        const ogre_duck2Animation = new Animation(ogre_duck2);
        ogre_duck2Animation.key = "ogre_duck";
        ogre_duck2Animation.start = 2;
        ogre_duck2Animation.end = 9;
        ogre_duck2Animation.autoPlay = false;

        // ogre_duck1 (components)
        const ogre_duck1Animation = new Animation(ogre_duck1);
        ogre_duck1Animation.key = "ogre_duck";
        ogre_duck1Animation.start = 2;
        ogre_duck1Animation.end = 9;
        ogre_duck1Animation.autoPlay = false;

        // princess (components)
        const princessAnimation = new Animation(princess);
        princessAnimation.key = "princess_tower";
        princessAnimation.end = 699;
        princessAnimation.repeat = 0;
        princessAnimation.autoPlay = false;

        // light_chain (components)
        const light_chainAnimation = new Animation(light_chain);
        light_chainAnimation.key = "chain";
        light_chainAnimation.end = 7;
        light_chainAnimation.repeat = 0;
        light_chainAnimation.autoPlay = false;

        // lighting_target1 (components)
        const lighting_target1Animation = new Animation(lighting_target1);
        lighting_target1Animation.key = "light_target";
        lighting_target1Animation.end = 18;

        // lighting_target2 (components)
        const lighting_target2Animation = new Animation(lighting_target2);
        lighting_target2Animation.key = "light_target";
        lighting_target2Animation.end = 18;

        // lighting_target3 (components)
        const lighting_target3Animation = new Animation(lighting_target3);
        lighting_target3Animation.key = "light_target";
        lighting_target3Animation.end = 18;

        // wizard (components)
        const wizardAnimation = new Animation(wizard);
        wizardAnimation.key = "wizard_cast";
        wizardAnimation.end = 30;
        wizardAnimation.repeat = 0;
        wizardAnimation.autoPlay = false;

        // ogre_tower (components)
        const ogre_towerAnimation = new Animation(ogre_tower);
        ogre_towerAnimation.key = "ogre_tower";
        ogre_towerAnimation.end = 44;

        // princess_kidnapped (components)
        const princess_kidnappedAnimation = new Animation(princess_kidnapped);
        princess_kidnappedAnimation.key = "princess";
        princess_kidnappedAnimation.end = 20;
        princess_kidnappedAnimation.repeat = 0;
        princess_kidnappedAnimation.autoPlay = false;

        // light_particle (components)
        const light_particleAnimation = new Animation(light_particle);
        light_particleAnimation.key = "particle";
        light_particleAnimation.end = 10;
        light_particleAnimation.repeat = 0;
        light_particleAnimation.autoPlay = false;

        // fire_particle (components)
        const fire_particleAnimation = new Animation(fire_particle);
        fire_particleAnimation.key = "particle";
        fire_particleAnimation.end = 10;
        fire_particleAnimation.autoPlay = false;

        this.castle = castle;
        this.ground = ground;
        this.ogre_tree = ogre_tree;
        this.cave_ogre = cave_ogre;
        this.ogre_bridge3 = ogre_bridge3;
        this.ogre_bridge2 = ogre_bridge2;
        this.ogre_bridge1 = ogre_bridge1;
        this.bridge_front = bridge_front;
        this.fire_chain = fire_chain;
        this.dragon = dragon;
        this.fire_target3 = fire_target3;
        this.fire_target2 = fire_target2;
        this.fire_target1 = fire_target1;
        this.bat3 = bat3;
        this.bat2 = bat2;
        this.bat1 = bat1;
        this.knight = knight;
        this.ogre_duck3 = ogre_duck3;
        this.ogre_duck2 = ogre_duck2;
        this.ogre_duck1 = ogre_duck1;
        this.princess = princess;
        this.light_chain = light_chain;
        this.lighting_target1 = lighting_target1;
        this.lighting_target2 = lighting_target2;
        this.lighting_target3 = lighting_target3;
        this.tower2 = tower2;
        this.wizard = wizard;
        this.towerco = towerco;
        this.tower1 = tower1;
        this.rail = rail;
        this.balls = balls;
        this.sign = sign;
        this.ogre_tower = ogre_tower;
        this.princess_kidnapped = princess_kidnapped;
        this.light_particle = light_particle;
        this.fire_particle = fire_particle;
        this.ogre_duck3_hitbox = ogre_duck3_hitbox;
        this.ogre_duck2_hitbox = ogre_duck2_hitbox;
        this.ogre_duck1_hitbox = ogre_duck1_hitbox;
        this.ogre_bridge3_hitbox = ogre_bridge3_hitbox;
        this.ogre_bridge2_hitbox = ogre_bridge2_hitbox;
        this.ogre_bridge1_hitbox = ogre_bridge1_hitbox;
        this.bat3_hitbox = bat3_hitbox;
        this.bat2_hitbox = bat2_hitbox;
        this.bat1_hitbox = bat1_hitbox;
        this.ogre_cave_hitbox = ogre_cave_hitbox;
        this.ogre_tree_hitbox = ogre_tree_hitbox;
        this.fire_target1_hitbox = fire_target1_hitbox;
        this.fire_target2_hitbox = fire_target2_hitbox;
        this.fire_target3_hitbox = fire_target3_hitbox;
        this.light_target1_hitbox = light_target1_hitbox;
        this.light_target2_hitbox = light_target2_hitbox;
        this.light_target3_hitbox = light_target3_hitbox;
        this.ogre_tower_hitbox = ogre_tower_hitbox;
        this.wizard_hitbox = wizard_hitbox;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {
        this.totalHit = 0
        this.duckHit = [false, false, false];
        this.duckCanHit = [false, false, false];
        this.bridgeHit = [false, false, false];
        this.bridgeCanHit = [false, false, false];
        this.bridgeActive = false;
        this.batHit = [false, false, false];
        this.batCanHit = [false, false, false];
        this.otherOgreHit = [false, false];
        this.otherOgreCanHit = [false, false];
        this.otherActive = false;

        // challenge 1
        this.ogreTowerHit = false;
        this.ogreTowerCanHit = false;

        // challenge 2
        this.wizardHit = false;
        this.wizardCanHit = false;
        this.lightHit = [false, false, false];
        this.lightCanHit = [false, false, false];

        // challenge 3
        this.scornHit = [false, false, false];
        this.scornCanHit = [false, false, false];

        super.create();

        this.batCoords = [
            [this.bat1.x, 60],
            [this.bat2.x, 60],
            [this.bat3.x, 60]
        ];

        this.duck1bound = this.ogre_duck1_hitbox.getBounds();
        this.duck2bound = this.ogre_duck2_hitbox.getBounds();
        this.duck3bound = this.ogre_duck3_hitbox.getBounds();

        this.bridge1bound = this.ogre_bridge1_hitbox.getBounds();
        this.bridge2bound = this.ogre_bridge2_hitbox.getBounds();
        this.bridge3bound = this.ogre_bridge3_hitbox.getBounds();

        this.bat1bound = this.bat1_hitbox.getBounds();
        this.bat2bound = this.bat2_hitbox.getBounds();
        this.bat3bound = this.bat3_hitbox.getBounds();

        this.wizardBound = this.wizard_hitbox.getBounds();

        this.alternateAnimation(this.ogre_duck1, this.ogre_duck1.__Animation.start, this.ogre_duck1.__Animation.end);
        this.alternateAnimation(this.ogre_duck2, this.ogre_duck2.__Animation.start, this.ogre_duck2.__Animation.end);
        this.alternateAnimation(this.ogre_duck3, this.ogre_duck3.__Animation.start, this.ogre_duck3.__Animation.end);

        this.time.addEvent({
            delay: Phaser.Math.Between(2000, 3000),
            callback: () => {
                this.soundManager.playSfx('duck1');
                this.soundManager.playSfx('duck2');
                this.soundManager.playSfx('ogre_yell');

                this.soundManager.playSfx('waves');

                this.createOgreDuckTween(this.ogre_duck1, 100, 1300, 0, 0);
                this.createOgreDuckTween(this.ogre_duck2, 100, 1300, 3500, 1);
                this.createOgreDuckTween(this.ogre_duck3, 100, 1300, 6250, 2);
            },
            loop: false
        });

        this.time.addEvent({
            delay: Phaser.Math.Between(4500, 6500),
            callback: () => {
                this.soundManager.playSfx('bat1');

                this.createBatTween(this.bat1, 100, 1300, 0, 0);
                this.createBatTween(this.bat2, 100, 1300, 3000, 1);
                this.createBatTween(this.bat3, 100, 1300, 6000, 2);
            },
            loop: false
        });

        this.time.addEvent({
            delay: Phaser.Math.Between(4500, 6750),
            callback: () => this.createRandomBridgeTimer(),
            loop: false
        });

        this.time.addEvent({
            delay: Phaser.Math.Between(7500, 8500),
            callback: () => this.createOtherOgreTimer(),
            loop: false
        });

        this.time.addEvent({
            delay: Phaser.Math.Between(16000, 18000),
            callback: () => {
                this.handleTowerChallenge();
            },
            loop: false
        });

        this.createSfxTimeline(this.ogre_bridge1, [{ "__ANY__": [{ frame: 2, sound: "ogre_popup1" }] }]);
        this.createSfxTimeline(this.ogre_bridge2, [{ "__ANY__": [{ frame: 2, sound: "ogre_popup2" }] }]);
        this.createSfxTimeline(this.ogre_bridge3, [{ "__ANY__": [{ frame: 2, sound: "ogre_popup3" }] }]);
        this.createSfxTimeline(this.cave_ogre, [{ "__ANY__": [{ frame: 2, sound: "ogre_popup4" }] }]);
        this.createSfxTimeline(this.ogre_tree, [{ "__ANY__": [{ frame: 2, sound: "ogre_popup5" }] }]);

        this.createSfxTimeline(this.ogre_bridge1, [{ "ogre_bridge1": [{ frame: 10, sound: "target_up1" }] }]);
        this.createSfxTimeline(this.ogre_bridge2, [{ "ogre_bridge2": [{ frame: 10, sound: "target_up2" }] }]);
        this.createSfxTimeline(this.ogre_bridge3, [{ "ogre_bridge3": [{ frame: 10, sound: "target_up1" }] }]);
        this.createSfxTimeline(this.cave_ogre, [{ "ogre_bridge1": [{ frame: 10, sound: "target_up1" }] }]);
        this.createSfxTimeline(this.ogre_tree, [{ "ogre_bridge2": [{ frame: 10, sound: "target_up2" }] }]);

        this.createSfxTimeline(this.bat1, [{ "bat_moveup": [{ frame: 10, sound: "target_up1" }] }]);
        this.createSfxTimeline(this.bat2, [{ "bat_moveup": [{ frame: 10, sound: "target_up2" }] }]);
        this.createSfxTimeline(this.bat3, [{ "bat_moveup": [{ frame: 10, sound: "target_up1" }] }]);

        this.createSfxTimeline(this.ogre_bridge1, [{ "ogre_bridge1": [{ frame: 122, sound: "target_down1" }] }]);
        this.createSfxTimeline(this.ogre_bridge2, [{ "ogre_bridge2": [{ frame: 122, sound: "target_down2" }] }]);
        this.createSfxTimeline(this.ogre_bridge3, [{ "ogre_bridge3": [{ frame: 122, sound: "target_down3" }] }]);
        this.createSfxTimeline(this.cave_ogre, [{ "ogre_bridge1": [{ frame: 122, sound: "target_hit1" }] }]);
        this.createSfxTimeline(this.ogre_tree, [{ "ogre_bridge2": [{ frame: 122, sound: "target_hit3" }] }]);

        this.createSfxTimeline(this.princess, [{ "__ANY__": [{ frame: 131, sound: "princess_laugh1" }] }]);
        this.createSfxTimeline(this.princess, [{ "__ANY__": [{ frame: 190, sound: "princess_laugh2" }] }]);
        this.createSfxTimeline(this.princess, [{ "__ANY__": [{ frame: 201, sound: "princess_frog" }] }]);

    }

    update() {
        this.ogre_duck1_hitbox.setPosition(this.ogre_duck1.x, this.ogre_duck1_hitbox.y);
        this.ogre_duck2_hitbox.setPosition(this.ogre_duck2.x, this.ogre_duck2_hitbox.y);
        this.ogre_duck3_hitbox.setPosition(this.ogre_duck3.x, this.ogre_duck3_hitbox.y);

        const bat1xCalc =  this.bat1.x - this.bat1_hitbox.x;

        this.bat1_hitbox.setPosition(this.bat1_hitbox.x + bat1xCalc - 15, this.bat1.y + 33);

        const bat2xCalc =  this.bat2.x - this.bat2_hitbox.x;

        this.bat2_hitbox.setPosition(this.bat2_hitbox.x + bat2xCalc - 15, this.bat2.y + 33);

        const bat3xCalc =  this.bat3.x - this.bat3_hitbox.x;

        this.bat3_hitbox.setPosition(this.bat3_hitbox.x + bat3xCalc - 15, this.bat3.y + 33);

        this.duck1bound = this.ogre_duck1_hitbox.getBounds();
        this.duck2bound = this.ogre_duck2_hitbox.getBounds();
        this.duck3bound = this.ogre_duck3_hitbox.getBounds();

        this.bat1bound = this.bat1_hitbox.getBounds();
        this.bat2bound = this.bat2_hitbox.getBounds();
        this.bat3bound = this.bat3_hitbox.getBounds();

        this.caveBound = this.ogre_cave_hitbox.getBounds();
        this.treeBound = this.ogre_tree_hitbox.getBounds();

        this.fire_target1Bound = this.fire_target1_hitbox.getBounds();
        this.fire_target2Bound = this.fire_target2_hitbox.getBounds();
        this.fire_target3Bound = this.fire_target3_hitbox.getBounds();

        this.light_target1Bound = this.light_target1_hitbox.getBounds();
        this.light_target2Bound = this.light_target2_hitbox.getBounds();
        this.light_target3Bound = this.light_target3_hitbox.getBounds();

        this.ogre_towerBound = this.ogre_tower_hitbox.getBounds();
    }

    onSnowballComplete(x, y, ball) {
        this.handleOgreDucksHitbox(x, y, ball);
        this.handleOgreBridgesHitbox(x, y, ball);
        this.handleBatsHitbox(x, y, ball);
        this.handleOtherOgresHitbox(x, y, ball);
        this.handleOgreTowerHitbox(x, y, ball);
        this.handleWizardChallengeHitbox(x, y, ball);
        this.handleScornChallengeHitbox(x, y, ball);
        if (ball) {
            if(x > 200 && x < 1250 && y > 40 && y < 635) {
                this.snowballs.destroyBall(ball)
            }
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

    createOgreDuckTween(sprite, startX, endX, delay, index) {
        const tween = this.tweens.add({
            targets: sprite,
            x: startX,
            duration: 10000,
            ease: 'Linear',
            delay: delay,
            onStart: () => {
                this.duckCanHit[index] = true;
            },
            onComplete: () => {
                sprite.setVisible(false);
                sprite.setPosition(endX, sprite.y);

                sprite.setVisible(true);

                // Restart the tween
                this.createOgreDuckTween(sprite, startX, endX, 0, index);
            }
        });

        sprite.tween = tween;
    }

    createBatTween(sprite, startX, endX, delay, index) {
        const amplitude = 175;
        const centerY = 275;

        const tween = this.tweens.add({
            targets: sprite,
            x: startX,
            duration: 10000,
            ease: 'Linear',
            repeat: -1,
            delay: delay,
            onStart: () => {
                this.batCanHit[index] = true;

                if (index === 0) {
                    this.bat1.setPosition(this.batCoords[0][0], this.batCoords[0][1]);
                    this.bat1.setVisible(true);
                } else if (index === 1) {
                    this.bat2.setPosition(this.batCoords[1][0], this.batCoords[1][1]);
                    this.bat2.setVisible(true);
                } else if (index === 2) {
                    this.bat3.setPosition(this.batCoords[2][0], this.batCoords[2][1]);
                    this.bat3.setVisible(true);
                }
            },
            onUpdate: () => {
                // Adjust the Y position to create a semicircular arc
                const progress = (sprite.x - startX) / (endX - startX); // Normalize (0 to 1)
                const angle = Math.PI * progress; // Angle for semicircle 
                sprite.y = centerY - Math.sin(angle) * amplitude;
            }
        });

        sprite.tween = tween;
    }

    handleOgreDucksHitbox(x, y, ball) {
        if (this.duckHit[0] && this.duckHit[1] && this.duckHit[2]) {
            this.duckHit[0] = false;
            this.duckHit[1] = false;
            this.duckHit[2] = false;

            this.soundManager.playSfx('duck1');
            this.soundManager.playSfx('duck2');
            this.soundManager.playSfx('ogre_yell');

            this.soundManager.playSfx('waves');

            this.alternateAnimation(this.ogre_duck1, this.ogre_duck1.__Animation.start, this.ogre_duck1.__Animation.end);
            this.alternateAnimation(this.ogre_duck2, this.ogre_duck2.__Animation.start, this.ogre_duck2.__Animation.end);
            this.alternateAnimation(this.ogre_duck3, this.ogre_duck3.__Animation.start, this.ogre_duck3.__Animation.end);

            this.createOgreDuckTween(this.ogre_duck1, 100, 1300, 0, 0);
            this.createOgreDuckTween(this.ogre_duck2, 100, 1300, 3500, 1);
            this.createOgreDuckTween(this.ogre_duck3, 100, 1300, 6250, 2);
        }

        const minX = 255;
        const maxX = 1250;

        if (x < minX || x > maxX) {
            return;
        }

        if (this.duck1bound.contains(x, y) && this.duckCanHit[0]) {
            if (this.ogre_duck1.tween) {
                this.ogre_duck1.tween.stop();
            }

            this.duckHit[0] = true;
            this.duckCanHit[0] = false;

            this.soundManager.playSfx('duck_hit4');

            this.whenHit(ball);

            this.playAnimation(this.ogre_duck1, 10, 22, () => {
                this.soundManager.playSfx('water_splash1');

                this.ogre_duck1.setVisible(false);
            });

            this.interface.main.snowballFactory.destroyBall(ball);
        } else if (this.duck2bound.contains(x, y) && this.duckCanHit[1]) {
            if (this.ogre_duck2.tween) {
                this.ogre_duck2.tween.stop();
            }

            this.duckHit[1] = true;
            this.duckCanHit[1] = false;

            this.soundManager.playSfx('duck_hit5');

            this.whenHit(ball);

            this.playAnimation(this.ogre_duck2, 10, 22, () => {
                this.soundManager.playSfx('water_splash2');

                this.ogre_duck2.setVisible(false);
            });

            this.interface.main.snowballFactory.destroyBall(ball);
        } else if (this.duck3bound.contains(x, y) && this.duckCanHit[2]) {
            if (this.ogre_duck3.tween) {
                this.ogre_duck3.tween.stop();
            }

            this.duckHit[2] = true;
            this.duckCanHit[2] = false;

            this.soundManager.playSfx('duck_hit6');

            this.whenHit(ball);

            this.playAnimation(this.ogre_duck3, 10, 22, () => {
                this.soundManager.playSfx('water_splash3');

                this.ogre_duck3.setVisible(false);
            });

            this.interface.main.snowballFactory.destroyBall(ball);
        }
    }

    handleOgreBridgesHitbox(x, y, ball) {
        if (this.bridge1bound.contains(x, y) && this.bridgeCanHit[0] && this.bridgeActive) {
            this.bridgeHit[0] = true;
            this.bridgeCanHit[0] = false;
            this.bridgeActive = false;

            this.soundManager.playSfx('ogre_hit1');

            this.whenHit(ball);

            this.ogre_bridge2.__Animation.repeat = 0;

            this.playAnimation(this.ogre_bridge1, 121, 127, () => {
                this.ogre_bridge1.__Animation.repeat = 1;

                this.ogre_bridge1.visible = false;

                this.time.addEvent({
                    delay: Phaser.Math.Between(4500, 6750),
                    callback: () => this.createRandomBridgeTimer(),
                    loop: false
                });
            });

            this.interface.main.snowballFactory.destroyBall(ball);
        } else if (this.bridge2bound.contains(x, y) && this.bridgeCanHit[1] && this.bridgeActive) {
            this.bridgeHit[1] = true;
            this.bridgeCanHit[1] = false;
            this.bridgeActive = false;

            this.soundManager.playSfx('ogre_hit2');

            this.whenHit(ball);

            this.ogre_bridge2.__Animation.repeat = 0;

            this.playAnimation(this.ogre_bridge2, 121, 127, () => {
                this.ogre_bridge2.__Animation.repeat = 1;

                this.ogre_bridge2.visible = false;

                this.time.addEvent({
                    delay: Phaser.Math.Between(4500, 6750),
                    callback: () => this.createRandomBridgeTimer(),
                    loop: false
                });
            });

            this.interface.main.snowballFactory.destroyBall(ball);
        } else if (this.bridge3bound.contains(x, y) && this.bridgeCanHit[2] && this.bridgeActive) {
            this.bridgeHit[2] = true;
            this.bridgeCanHit[2] = false;
            this.bridgeActive = false;

            this.soundManager.playSfx('ogre_hit3');

            this.whenHit(ball);

            this.ogre_bridge3.__Animation.repeat = 0;

            this.playAnimation(this.ogre_bridge3, 121, 127, () => {
                this.ogre_bridge3.__Animation.repeat = 1;

                this.ogre_bridge3.visible = false;

                this.time.addEvent({
                    delay: Phaser.Math.Between(4500, 6750),
                    callback: () => this.createRandomBridgeTimer(),
                    loop: false
                });
            });

            this.interface.main.snowballFactory.destroyBall(ball);
        }
    }

    handleBatsHitbox(x, y, ball) {
        const minX = 255;
        const maxX = 1250;

        if (x < minX || x > maxX) {
            return;
        }

        if (this.bat1bound.contains(x, y) && this.batCanHit[0]) {
            if (this.bat1.tween) {
                this.bat1.tween.stop();
                this.bat1.tween = {};
            }

            this.batHit[0] = true;

            this.batCanHit[0] = false;

            const oldAnimKey = this.bat1.__Animation.key;

            if (this.bat1.y >= 160) {
                this.bat1.y = this.bat1.y - 100;
            } else if (this.bat1.y >= 100) {
                this.bat1.y = this.bat1.y - 85;
            } else {
                this.bat1.y = this.bat1.y - 120;
            }

            this.soundManager.playSfx('bat_hit1');

            this.whenHit(ball);

            this.playAnimation(this.bat1, 1, 15, () => {
                this.bat1.__Animation.key = oldAnimKey;

                this.bat1.setVisible(false);

                if (this.batHit[0] && this.batHit[1] && this.batHit[2]) {
                    this.time.addEvent({
                        delay: Phaser.Math.Between(4500, 6750),
                        callback: () => {
                            this.batHit[0] = false;
                            this.batHit[1] = false;
                            this.batHit[2] = false;

                            this.soundManager.playSfx('bat1');

                            this.playAnimation(this.bat1, 2, 10, () => {

                            }, 'bat', -1);

                            this.playAnimation(this.bat2, 2, 10, () => {

                            }, 'bat', -1);

                            this.playAnimation(this.bat3, 2, 10, () => {

                            }, 'bat', -1);

                            this.createBatTween(this.bat1, 100, 1300, 0, 0);
                            this.createBatTween(this.bat2, 100, 1300, 3000, 1);
                            this.createBatTween(this.bat3, 100, 1300, 6000, 2);
                        },
                        loop: false
                    });
                }
            }, "bat_moveup");

            this.interface.main.snowballFactory.destroyBall(ball);
        } else if (this.bat2bound.contains(x, y) && this.batCanHit[1]) {
            if (this.bat2.tween) {
                this.bat2.tween.stop();
                this.bat2.tween = {};
            }

            this.batHit[1] = true;

            this.batCanHit[1] = false;

            const oldAnimKey = this.bat2.__Animation.key;

            if (this.bat2.y > 160) {
                this.bat2.y = this.bat2.y - 100;
            } else if (this.bat1.y >= 100) {
                this.bat2.y = this.bat2.y - 85;
            } else {
                this.bat2.y = this.bat2.y - 120;
            }

            this.soundManager.playSfx('bat_hit2');

            this.whenHit(ball);

            this.playAnimation(this.bat2, 1, 15, () => {
                this.bat2.__Animation.key = oldAnimKey;

                this.bat2.setVisible(false);

                if (this.batHit[0] && this.batHit[1] && this.batHit[2]) {
                    this.time.addEvent({
                        delay: Phaser.Math.Between(4500, 6750),
                        callback: () => {
                            this.batHit[0] = false;
                            this.batHit[1] = false;
                            this.batHit[2] = false;

                            this.soundManager.playSfx('bat1');

                            this.playAnimation(this.bat1, 2, 10, () => {

                            }, 'bat', -1);

                            this.playAnimation(this.bat2, 2, 10, () => {

                            }, 'bat', -1);

                            this.playAnimation(this.bat3, 2, 10, () => {

                            }, 'bat', -1);

                            this.createBatTween(this.bat1, 100, 1300, 0, 0);
                            this.createBatTween(this.bat2, 100, 1300, 3000, 1);
                            this.createBatTween(this.bat3, 100, 1300, 6000, 2);
                        },
                        loop: false
                    });
                }
            }, "bat_moveup");


            this.interface.main.snowballFactory.destroyBall(ball);
        } else if (this.bat3bound.contains(x, y) && this.batCanHit[2]) {
            if (this.bat3.tween) {
                this.bat3.tween.stop();
                this.bat3.tween = {};
            }

            this.batHit[2] = true;

            this.batCanHit[2] = false;

            const oldAnimKey = this.bat2.__Animation.key;

            if (this.bat3.y > 160) {
                this.bat3.y = this.bat3.y - 100;
            } else if (this.bat3.y >= 100) {
                this.bat3.y = this.bat3.y - 85;
            } else {
                this.bat3.y = this.bat3.y - 120;
            }

            this.soundManager.playSfx('bat_hit3');

            this.whenHit(ball);

            this.playAnimation(this.bat3, 1, 15, () => {
                this.bat3.__Animation.key = oldAnimKey;

                this.bat3.setVisible(false);

                if (this.batHit[0] && this.batHit[1] && this.batHit[2]) {
                    this.time.addEvent({
                        delay: Phaser.Math.Between(4500, 6750),
                        callback: () => {
                            this.batHit[0] = false;
                            this.batHit[1] = false;
                            this.batHit[2] = false;

                            this.soundManager.playSfx('bat1');

                            this.playAnimation(this.bat1, 2, 10, () => {

                            }, 'bat', -1);

                            this.playAnimation(this.bat2, 2, 10, () => {

                            }, 'bat', -1);

                            this.playAnimation(this.bat3, 2, 10, () => {

                            }, 'bat', -1);

                            this.createBatTween(this.bat1, 100, 1300, 0, 0);
                            this.createBatTween(this.bat2, 100, 1300, 3000, 1);
                            this.createBatTween(this.bat3, 100, 1300, 6000, 2);
                        },
                        loop: false
                    });
                }
            }, "bat_moveup");


            this.interface.main.snowballFactory.destroyBall(ball);
        }
    }

    handleOtherOgresHitbox(x, y, ball) {
        if (this.otherOgreHit[0] && this.otherOgreHit[1]) {
            this.otherOgreHit[0] = false;
            this.otherOgreHit[1] = false;

            this.time.addEvent({
                delay: Phaser.Math.Between(4500, 6750),
                callback: () => this.createOtherOgreTimer(),
                loop: false
            });
        }

        if (this.caveBound.contains(x, y) && this.otherOgreCanHit[0]) {
            this.otherOgreHit[0] = true;

            this.otherOgreCanHit[0] = false;

            this.soundManager.playSfx('ogre_hit4');

            this.whenHit(ball);

            this.playAnimation(this.cave_ogre, 121, 127, () => {
                this.cave_ogre.setVisible(false);

                this.time.addEvent({
                    delay: Phaser.Math.Between(4500, 6750),
                    callback: () => this.createOtherOgreTimer(),
                    loop: false
                });
            });
        } else if (this.treeBound.contains(x, y) && this.otherOgreCanHit[1]) {
            this.otherOgreHit[1] = true;
            this.otherOgreCanHit[1] = false;

            this.soundManager.playSfx('ogre_hit5');

            this.whenHit(ball);

            this.playAnimation(this.ogre_tree, 121, 127, () => {
                this.ogre_tree.setVisible(false);

                this.time.addEvent({
                    delay: Phaser.Math.Between(4500, 6750),
                    callback: () => this.createOtherOgreTimer(),
                    loop: false
                });
            });
        }
    }

    handleOgreTowerHitbox(x, y, ball) {
        if (this.ogre_towerBound.contains(x, y) & this.ogreTowerCanHit) {
            this.ogreTowerHit = true;
            this.soundManager.playSfx('ogre_tower_hit');

            this.whenHit(ball);
            // reverse the tween to make the ogre move down the tower is handled in the main tween
        }
    }

    handleWizardChallengeHitbox(x, y, ball) {
        if (this.light_target1Bound.contains(x, y) & this.lightCanHit[0]) {
            this.lightHit[0] = true;
            this.lightCanHit[0] = false;

            this.lighting_target1.__Animation.repeat = 0;

            this.soundManager.playSfx('wizard_hit2');

            this.whenHit(ball);

            this.playAnimation(this.lighting_target1, 19, 30, () => {

            });
        } else if (this.light_target2Bound.contains(x, y) & this.lightCanHit[1]) {
            this.lightHit[1] = true;
            this.lightCanHit[1] = false;

            this.lighting_target2.__Animation.repeat = 0;

            this.soundManager.playSfx('wizard_hit2');

            this.whenHit(ball);

            this.playAnimation(this.lighting_target2, 19, 30, () => {

            });
        } else if (this.light_target3Bound.contains(x, y) & this.lightCanHit[2]) {
            this.lightHit[2] = true;
            this.lightCanHit[2] = false;

            this.lighting_target3.__Animation.repeat = 0;

            this.soundManager.playSfx('wizard_hit2');

            this.whenHit(ball);

            this.playAnimation(this.lighting_target3, 19, 30, () => {

            });
        } else if (this.wizardBound.contains(x, y) & this.wizardCanHit) {
            this.wizardHit = true;
            this.wizardCanHit = false;

            this.soundManager.playSfx('wizard_hit1');

            this.whenHit(ball);

            this.wizard.setVisible(false);
        }
    }

    handleScornChallengeHitbox(x, y, ball) {
        if (this.fire_target1Bound.contains(x, y) & this.scornCanHit[0]) {
            this.scornHit[0] = true;
            this.scornCanHit[0] = false;

            this.fire_target1.__Animation.repeat = 0;

            this.soundManager.play('target_down1');

            this.whenHit(ball);

            this.playAnimation(this.fire_target1, 19, 34, () => {

            });
        } else if (this.fire_target2Bound.contains(x, y) & this.scornCanHit[1]) {
            this.scornHit[1] = true;
            this.scornCanHit[1] = false;

            this.fire_target2.__Animation.repeat = 0;

            this.soundManager.play('target_down2');

            this.whenHit(ball);

            this.playAnimation(this.fire_target2, 19, 34, () => {

            });
        } else if (this.fire_target3Bound.contains(x, y) & this.scornCanHit[2]) {
            this.scornHit[2] = true;
            this.scornCanHit[2] = false;

            this.fire_target3.__Animation.repeat = 0;

            this.soundManager.play('target_down3');

            this.whenHit(ball);

            this.playAnimation(this.fire_target3, 19, 34, () => {

            });
        }
    }

    createOtherOgreTimer() {
        if (this.otherOgreHit[0] && this.otherOgreHit[1]) {
            this.otherOgreHit[0] = false;
            this.otherOgreHit[1] = false;
        }

        const randomNum = Math.floor(Phaser.Math.Between(0, 1));
        let randomOgre = null;

        if (randomNum === 0) {
            randomOgre = this.cave_ogre;
        } else if (randomNum === 1) {
            randomOgre = this.ogre_tree;

            this.ogre_tree.visible = true;
        }

        if (!randomOgre) {
            return;
        }

        this.otherOgreCanHit[randomNum] = true;

        randomOgre.setVisible(true);

        this.playAnimation(randomOgre, 2, 120, () => {
            if (this.otherOgreCanHit[randomNum]) {
                this.playAnimation(randomOgre, 120, 2, () => {
                    if (randomNum === 1) {
                        this.ogre_tree.setVisible(false);
                    }

                    const randomDelay = Phaser.Math.Between(1000, 2750);

                    this.time.addEvent({
                        delay: randomDelay,
                        callback: () => {
                            this.otherOgreCanHit[randomNum] = false;

                            this.createOtherOgreTimer();
                        },
                        loop: false
                    });
                });
            }
        });
    }

    createRandomBridgeTimer() {
        if (this.bridgeHit[0] && this.bridgeHit[1] && this.bridgeHit[2]) {
            this.bridgeHit[0] = false;
            this.bridgeHit[1] = false;
            this.bridgeHit[2] = false;
        }

        if (this.bridgeActive) {
            return;
        }

        const randomNum = Math.floor(Math.random() * 3);
        let randomBridge = null;

        if (randomNum === 0) {
            randomBridge = this.ogre_bridge1;
        } else if (randomNum === 1) {
            randomBridge = this.ogre_bridge2;
        } else if (randomNum === 2) {
            randomBridge = this.ogre_bridge3;
        }

        if (!randomBridge) {
            return;
        }

        randomBridge.setVisible(true);

        this.bridgeCanHit[randomNum] = true;
        this.bridgeActive = true;

        this.playAnimation(randomBridge, 2, 120, () => {
            if (this.bridgeCanHit[randomNum]) {
                this.playAnimation(randomBridge, 120, 1, () => {
                    const randomDelay = Phaser.Math.Between(1000, 2750);

                    this.time.addEvent({
                        delay: randomDelay,
                        callback: () => {
                            this.bridgeCanHit[randomNum] = false;
                            this.bridgeActive = false;

                            this.createRandomBridgeTimer();
                        },
                        loop: false
                    });
                });
            }
        });
    }

    handleTowerChallenge(nextChallengeDelay) {
        this.ogre_tower.setVisible(true);

        this.playAnimation(this.princess, 10, 119, () => {
            const moveDuration = 5000; 

            const tower1MiddleX = this.tower1.x + (this.tower1.width / 2) - 150;

            const targetY = this.tower1.y - 25;

            const startY = this.ogre_tower.y;

            const rightTween = this.tweens.add({
                targets: this.ogre_tower,
                x: tower1MiddleX,
                duration: moveDuration / 2,
                ease: 'Linear',
                onStart: () => {
                    this.ogreTowerCanHit = true;
                    this.soundManager.playSfx('ogre_tower');
                },
                onUpdate: () => {
                    this.ogre_tower_hitbox.setPosition(this.ogre_tower.x - 20, this.ogre_tower.y + 20);

                    if (this.ogreTowerHit) {
                        rightTween.complete();
                    }
                },
                onComplete: () => {
                    const upTween = this.tweens.add({
                        targets: this.ogre_tower,
                        y: targetY,
                        duration: moveDuration / 2,
                        ease: 'Linear',
                        onStart: () => {
                            this.soundManager.playSfx('ihavenoidea');
                        },
                        onUpdate: () => {
                            this.ogre_tower_hitbox.setPosition(this.ogre_tower.x - 20, this.ogre_tower.y + 20);

                            if (this.ogreTowerHit) {
                                upTween.complete();
                            }
                        },
                        onComplete: () => {
                            if (this.ogreTowerHit) {
                                this.ogreTowerCanHit = false;

                                this.handleOgreTowerComplete(startY, targetY);
                                return;
                            }

                            this.ogre_tower.__Animation.repeat = 0;

                            this.playAnimation(this.ogre_tower, 45, 67, () => {
                                this.ogre_tower_hitbox.destroy();

                                this.ogreTowerCanHit = false;  

                                this.handleOgreTowerComplete(startY, targetY);
                            });
                        }
                    });
                }
            });
        });
    }

    handleOgreTowerComplete(startY, targetY) {
        if (this.ogreTowerHit) {
            // Handle the case where the ogre tower challenge is passed
            this.soundManager.playSfx('princess_laugh1');
            this.soundManager.playSfx('unlock');

            this.playAnimation(this.princess, 601, 699, () => {

            });
        } else {
            // Handle the case where the ogre tower challenge is failed
            this.soundManager.playSfx('princess_kidnapped');

            this.playAnimation(this.princess, 545, 560, () => {
                this.princess_kidnapped.setVisible(true);

            });
        }

        this.playAnimation(this.princess_kidnapped, 2, 20, () => {
            this.time.addEvent({
                callback: () => {
                    let downDuration = 2500;

                    if (this.ogreTowerHit) {
                        downDuration = 500;
                    }

                    this.tweens.add({
                        targets: [this.ogre_tower, this.princess_kidnapped],
                        y: startY,
                        duration: downDuration,
                        ease: 'Linear',
                        onUpdate: () => {
                            // Ensure the princess_kidnapped stays on top of ogre_tower
                            this.princess_kidnapped.y = this.ogre_tower.y - 80;
                        },
                        onComplete: () => {
                            this.tweens.add({
                                targets: [this.ogre_tower, this.princess_kidnapped],
                                x: -250,
                                duration: 2500,
                                ease: 'Linear',
                                onUpdate: () => {
                                    this.princess_kidnapped.x = this.ogre_tower.x;
                                },
                                onComplete: () => {
                                    if (this.ogreTowerHit) {
                                        this.time.addEvent({
                                            delay: Phaser.Math.Between(10000, 12000),
                                            callback: () => {
                                                this.soundManager.playSfx('unlock');

                                                this.handleWizardChallenge(16000); // Start the next challenge
                                            },
                                            loop: false
                                        }); 
                                    }
                                }
                            });
                        }
                    });
                },
                loop: false
            });
        });
    }

    handleWizardChallenge(nextChallengeDelay) {
        this.soundManager.playSfx('wizard_pre');
        this.wizard.setVisible(true);

        this.wizardCanHit = true;

        const wizardMoveTween = this.tweens.add({
            targets: this.wizard,
            y: {
                from: this.wizard.y,
                to: this.wizard.y + 10, 
                ease: 'Sine.easeInOut',
                duration: 1000,
                yoyo: true,
                repeat: -1
            },
            onStart: () => {}
        });

        this.wizard.moveTween = wizardMoveTween;

        this.time.addEvent({
            delay: 4500,
            callback: () => {
                if (this.wizard.moveTween) {
                    this.wizard.moveTween.stop();
                }

                this.wizardCanHit = false;

                this.playAnimation(this.wizard, 2, 30, () => {
                    if (!this.wizardHit) {
                        this.light_chain.setVisible(true);

                        this.soundManager.playSfx('wizard_cast');

                        this.playAnimation(this.light_chain, 2, 7, () => {
                            this.soundManager.playSfx('crash');

                            this.light_particle.setVisible(true);

                            this.playAnimation(this.light_particle, 2, 10, () => {
                                this.light_particle.setVisible(false);
                            });

                            this.playAnimation(this.princess, 2, 120, () => {

                            });

                        });
                    }

                    this.playAnimation(this.wizard, 31, 100, () => {
                        this.playAnimation(this.princess, 190, 201, () => {
                            this.handleLightTargets(() => {
                                if ((this.lightHit[0] && this.lightHit[1] && this.lightHit[2])) {
                                    // passed!
                                    this.soundManager.playSfx('princess_laugh2');  
                                    this.playAnimation(this.princess, 123, 129, () => {
                                        this.wizard.setVisible(false);
                                    });
                                }

                                if ((!this.lightHit[0] || !this.lightHit[1] || !this.lightHit[2]) && !this.wizardHit) {
                                    // failed!
                                    this.soundManager.playSfx('princess_wizard');  
                                    this.playAnimation(this.princess, 202, 271, () => {
                                        this.wizard.setVisible(false);
                                    });
                                }

                                this.lighting_target1.setVisible(false);
                                this.lighting_target2.setVisible(false);
                                this.lighting_target3.setVisible(false);

                                this.playAnimation(this.light_chain, 8, 13, () => {
                                    this.light_chain.setVisible(false);

                                    this.playAnimation(this.light_particle, 2, 10, () => {
                                        this.light_particle.setVisible(false);
                                    });
                                });
                            });
                        });
                    });
                })
            },
            loop: false
        }); 

        const wizardChallengeCompleteCallback = () => {
            this.time.addEvent({
                delay: Phaser.Math.Between(27500, 32500),
                callback: () => {
                    if ((this.lightHit[0] && this.lightHit[1] && this.lightHit[2]) || this.wizardHit) {
                        this.handleScornChallenge();
                    }    
                },
                loop: false
            });
        };

        this.tweens.add({
            targets: this.wizard,
            duration: nextChallengeDelay,
            onStart: () => {
                this.soundManager.playSfx('unlock');
            },
            onComplete: wizardChallengeCompleteCallback
        });
    }

    handleLightTargets(onComplete) {
        const lightTargets = [this.lighting_target1, this.lighting_target2, this.lighting_target3];
        const hitboxes = [this.light_target1_hitbox, this.light_target2_hitbox, this.light_target3_hitbox];
        const targetWidth = lightTargets[0].width;
        const xOffset = targetWidth + 25; 
        const desiredFinalX = 350; // Desired final X position

        const finalX = desiredFinalX;
        const startX = finalX + (lightTargets.length - 1) * xOffset;

        const targetsContainer = this.add.container(0, 0, lightTargets);

        hitboxes.forEach((hitbox, index) => {
            targetsContainer.add(hitbox);
            hitbox.setPosition(index * xOffset, 15); // Set initial position relative to target
        });

        lightTargets.forEach((target, index) => {
            target.setPosition(index * xOffset, 0);
        });

        targetsContainer.setPosition(startX + 300, this.tower1.y + 25);

        targetsContainer.setDepth(.5);

        this.ground.setDepth(-1);
        this.castle.setDepth(-1);

        this.tower1.setDepth(1);
        this.tower2.setDepth(1);
        this.wizard.setDepth(2);
        this.towerco.setDepth(3);
        this.sign.setDepth(1);
        this.rail.setDepth(1);
        this.balls.setDepth(1);

        let count = 0;

        // Move the container to the final position
        this.tweens.add({
            targets: targetsContainer,
            x: finalX,
            duration: this.wizardHit ? 0 : 9500,
            ease: 'Linear',
            onStart: () => {
                if (this.wizardHit) {
                    onComplete();

                    return;
                }

                lightTargets.forEach((target, index) => {
                    this.lightCanHit[index] = true
                });

                this.wizardCanHit = false;
            },
            onUpdate: () => {
                if (this.wizardHit && count === 0) {
                    count = 1;
                    onComplete();

                    return;
                }

                lightTargets.forEach((target, index) => {
                    hitboxes[index].setPosition(target.x + 15, hitboxes[index].y);

                    if (targetsContainer.x >= 250 && targetsContainer.x <= 1250) {
                        target.setVisible(true);
                    } else {
                        target.setVisible(false);
                    }
                });
            },

            onComplete: () => {
                let animationsComplete = 0;
                const totalAnimations = lightTargets.length;

                const checkAllAnimationsComplete = () => {
                    animationsComplete++;
                    if (animationsComplete === totalAnimations) {
                        // Reverse tween
                        this.tweens.add({
                            targets: targetsContainer,
                            x: this.tower2.x,
                            duration: 500,
                            ease: 'Linear',
                            onUpdate: () => {
                                if (this.wizardHit) {
                                    onComplete();
                                }
                            },
                            onComplete: () => {
                                this.ground.setDepth(0);
                                this.castle.setDepth(0);

                                this.tower1.setDepth(0);
                                this.tower2.setDepth(0);
                                this.towerco.setDepth(0);
                                this.wizard.setDepth(0);
                                this.sign.setDepth(0);
                                this.rail.setDepth(0);
                                this.balls.setDepth(0);

                                if (onComplete) {
                                    onComplete();
                                }
                            }
                        });
                    }
                };

                lightTargets.forEach((target, index) => {
                    if (this.wizardHit) {
                        checkAllAnimationsComplete();
                    } else if (!this.lightHit[index]) {
                        this.playAnimation(target, 19, 30, checkAllAnimationsComplete);
                    } else {
                        checkAllAnimationsComplete();
                    }
                });
            }
        });
    }

    handleScornChallenge() {
        this.soundManager.playSfx('dragon1');
        this.dragon.setVisible(true);

        this.playAnimation(this.dragon, 1, 124, () => {
            this.fire_chain.visible = true;

            this.fire_particle.setVisible(true);

            this.playAnimation(this.fire_chain, 2, 7, () => {

                this.playAnimation(this.fire_particle, 2, 10, () => {
                    this.fire_particle.setVisible(false);

                    this.soundManager.play('knight1');

                    this.playAnimation(this.knight, 9, 100, () => {
                        this.soundManager.play('knight2');

                        this.handleFireTargets(() => {
                            if (this.knight.moveTween) {
                                this.knight.moveTween.stop();
                            }

                            this.soundManager.play('knight3');

                            if (!this.hasPassedScorn()) {
                                this.playAnimation(this.knight, 180, 239, () => {
                                    this.knight.setVisible(false);
                                });
                            } else {
                            // completed scorn challenge ( add final stamp )
                            this.world.client.questComplete(75);
                            
                                this.playAnimation(this.knight, 100, 105, () => {
                                    this.playAnimation(this.knight, 150, 180, () => {
                                        this.knight.setVisible(false);
                                    });
                                });
                            }

                            this.soundManager.playSfx('dragon3');
                            this.playAnimation(this.fire_chain, 8, 13, () => {
                                this.fire_chain.setVisible(false);

                                this.playAnimation(this.dragon, 161, 220, () => {
                                    this.dragon.setVisible(false);
                                });
                            });
                        });
                    });
                });
            });
        });
    }

    handleFireTargets(onComplete) {
        this.playAnimation(this.knight, 100, 105, () => {
            const knightMoveTween = this.tweens.add({
                targets: this.knight,
                y: {
                    from: this.knight.y,
                    to: this.knight.y + 10, 
                    ease: 'Sine.easeInOut',
                    duration: 1000,
                    yoyo: true,
                    repeat: -1
                },
                onStart: () => {}
            });

            this.knight.moveTween = knightMoveTween;
        });

        const fireTargets = [this.fire_target3, this.fire_target2, this.fire_target1];
        const hitboxes = [this.fire_target3_hitbox, this.fire_target2_hitbox, this.fire_target1_hitbox];

        const distance = 600; // Distance to travel down the chain

        const initialOffsets = fireTargets.map((target, index) => {
            const hitbox = hitboxes[index];
            return {
                offsetX: hitbox.x - target.x,
                offsetY: hitbox.y - target.y
            };
        });

        fireTargets.forEach((target, index) => {
            const startX = target.x;
            const startY = target.y;

            let angle = 23; // Angle in degrees

            if (index == 1 || index == 2) {
                angle = 24;
            }

            const radians = Phaser.Math.DegToRad(angle);

            const endX = startX + Math.cos(radians) * distance;
            const endY = startY + Math.sin(radians) * distance;

            const delay = index * 900; // Stagger the targets

            const hitbox = hitboxes[index];
            const { offsetX, offsetY } = initialOffsets[index];

            const tween = this.tweens.add({
                targets: target,
                x: endX,
                y: endY, 
                duration: 15000, 
                ease: 'Linear',
                repeat: 0, 
                delay: delay,
                onStart: () => {
                    this.soundManager.play('rolling');

                    if (index === 0) {
                        this.scornCanHit[0] = true;
                    } else if (index === 1) {
                        this.scornCanHit[1] = true;
                    } else if (index === 2) {
                        this.scornCanHit[2] = true;
                    }
                },
                onUpdate: () => {
                    hitbox.setPosition(target.x + offsetX, target.y + offsetY);

                    if (target.x > 575) {
                        target.setVisible(true);
                    }
                },
                onComplete: () => {
                    const handleAnimationComplete = () => {
                        if (this.animationsComplete === fireTargets.length) {
                            // Trigger reverse tweens for all targets
                            fireTargets.forEach((reverseTarget, reverseIndex) => {
                                this.tweens.add({
                                    targets: reverseTarget,
                                    x: reverseTarget.x,
                                    y: reverseTarget.y,
                                    duration: 100,
                                    ease: 'Linear',
                                    onStart: () => {
                                        hitboxes[reverseIndex].destroy();
                                    },
                                    onComplete: () => {
                                        reverseTarget.setVisible(false);
                                        if (reverseIndex === fireTargets.length - 1 && onComplete) {
                                            onComplete();
                                        }
                                    }
                                });
                            });
                        }
                    };

                    if (!this.animationsComplete) {
                        this.animationsComplete = 0;
                    }

                    this.animationsComplete++;

                    if (this.animationsComplete === fireTargets.length + 1) {
                        handleAnimationComplete();
                    } else {
                        if (!this.scornHit[index]) {
                            this.playAnimation(target, 19, 30, handleAnimationComplete);
                        } else {
                            handleAnimationComplete();
                        }
                    }
                }
            });

            target.tween = tween;
        });  
    }

    hasPassedScorn() { 
        return this.scornHit[0] && this.scornHit[1] && this.scornHit[2];
    }

    alternateAnimation(sprite, startFrame, endFrame) {
        this.playAnimation(sprite, startFrame, endFrame, () => {
            this.alternateAnimation(sprite, endFrame, startFrame);
        });
    }

    playAnimation(target, startFrame, endFrame, onComplete, key, loop) {
        target.__Animation.start = startFrame;
        target.__Animation.end = endFrame;
        target.__Animation.repeat = 0;

        if (key) {
            target.__Animation.key = key
        }

        if (loop) {
            target.__Animation.repeat = loop;
        }

        target.__Animation.seriously();
        target.__Animation.play();

        if (onComplete) {
            target.once('animationcomplete', onComplete);
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
