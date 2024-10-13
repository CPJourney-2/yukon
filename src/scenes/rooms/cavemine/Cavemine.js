import RoomScene from '@rooms/RoomScene'
import { setInterval } from 'core-js';
import { Animation, Button, SimpleButton, Interactive } from '@components/components';
import RoomPin from '@rooms/RoomPin'

/* START OF COMPILED CODE */

export default class Cavemine extends RoomScene {

    constructor() {
        super("Cavemine");

        /** @type {Phaser.GameObjects.Sprite} */
        this.waterfall0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.shinemid0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.shinemid;
        /** @type {Phaser.GameObjects.Sprite} */
        this.shinetop0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.shinetop;
        /** @type {Phaser.GameObjects.Sprite} */
        this.snowball_tube0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mwtop0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.smolbulb_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.smolbulb_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.smolbulb_0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bulb;
        /** @type {Phaser.GameObjects.Sprite} */
        this.smolbulb;
        /** @type {Phaser.GameObjects.Sprite} */
        this.whistle0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.coffee;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bulbs0001;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.hitbox;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.overlay;
        /** @type {Phaser.GameObjects.Sprite} */
        this.coin_sprite;
        /** @type {Phaser.GameObjects.Text} */
        this.coin_text;
        /** @type {Phaser.GameObjects.Container} */
        this.coin;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Rectangle>} */
        this.sort;


        /* START-USER-CTR-CODE */        
        this.powerTimer = 10000;
        this.timer = 1500;

        // time taken 2 mine
        this.minTime = 2 
        this.maxTime = 5

        // coins 
        this.minValue = 10
        this.maxValue = 75

        this.roomTriggers = {
            'minehat': () => this.interface.prompt.showItem(429),
            'lake': () => null,
            'mine': () => this.triggerRoom(808, 806, 370),
            'minearea': null
        }

        this.coinsEarned = 0;
        this.checkCoins = true;
        // this.prevX = 0;
        // this.prevY = 0;
        this.x = 0;
        this.y = 0;
        this.hardHatIds = [403, 429, 674, 770, 1133, 1765, 5177, 10403, 10429, 11133, 35033, 380121, 380159, 380258, 380410];
        this.errorTypeToCode = {
            'tooFewCoinsForPayout': 1,
            'coinsRewardedTooSoon': 2,
            'coinsExceedMaxAMount': 3,
        }
		this.music = 'Training_Caves'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("newcavemine-pack", "assets/media/rooms/cavemine/newcavemine-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(1167.3409811225308, -22.316819499095445, "newcavemine", "bg");
        bg.setOrigin(0.7679874671065505, -0.02324668663895584);

        // waterfall0001
        const waterfall0001 = this.add.sprite(1245, 10, "newcavemine", "waterfall0001");
        waterfall0001.setOrigin(0.44369504475883625, -0.10433985292181888);

        // shinemid0001
        const shinemid0001 = this.add.sprite(1292, 231, "newcavemine", "shinemid0001");
        shinemid0001.scaleX = 0.7;
        shinemid0001.scaleY = 1.4;
        shinemid0001.flipX = true;

        // seaspray0001
        const seaspray0001 = this.add.sprite(1260, 114, "newcavemine", "seaspray0001");
        seaspray0001.scaleX = 0.7;
        seaspray0001.setOrigin(0.4175900200561156, -1.5576333087576215);

        // shinemid
        const shinemid = this.add.sprite(1236, 231, "newcavemine", "shinemid0001");
        shinemid.scaleX = 0.7;
        shinemid.scaleY = 1.4;
        shinemid.flipX = true;

        // shinetop0001
        const shinetop0001 = this.add.sprite(1285, 97, "newcavemine", "shinetop0001");
        shinetop0001.scaleY = 2;
        shinetop0001.flipX = true;

        // shinetop
        const shinetop = this.add.sprite(1242, 96, "newcavemine", "shinetop0001");
        shinetop.scaleY = 2;
        shinetop.flipX = true;

        // wirebehindmachine
        this.add.image(1033, 181, "newcavemine", "wirebehindmachine");

        // snowball_tube0001
        const snowball_tube0001 = this.add.sprite(942, 194, "newcavemine", "snowball_tube0001");

        // wfrocksleft
        this.add.image(1186, 260, "newcavemine", "wfrocksleft");

        // slime
        this.add.image(1322, 304, "newcavemine", "slime");

        // microwave
        this.add.image(1092, 249, "newcavemine", "microwave");

        // platform
        const platform = this.add.image(581.7595690997865, 194.83172473475219, "newcavemine", "platform");
        platform.setOrigin(0.7143617319294456, 0.3748415273324454);

        // rocks
        const rocks = this.add.image(754.0817291871754, 333.60096011660335, "newcavemine", "rocks");
        rocks.setOrigin(0.5098646420908196, 0.32939924221541134);

        // mwtop0001
        const mwtop0001 = this.add.sprite(1086, 200, "newcavemine", "mwtop0030");

        // smolbulb_2
        const smolbulb_2 = this.add.sprite(1123, 177, "newcavemine", "smolbulb_0005");

        // smolbulb_1
        const smolbulb_1 = this.add.sprite(1051, 165, "newcavemine", "smolbulb_0005");

        // smolbulb_0001
        const smolbulb_0001 = this.add.sprite(1110, 189, "newcavemine", "smolbulb_0005");

        // bulb
        const bulb = this.add.sprite(1079, 153, "newcavemine", "bulb_0004");
        bulb.setOrigin(0.5, 0.6570331901292915);

        // smolbulb
        const smolbulb = this.add.sprite(1035, 180, "newcavemine", "smolbulb_0005");

        // coffee_table
        const coffee_table = this.add.image(313, 167, "newcavemine", "coffee_table");

        // whistle0001
        const whistle0001 = this.add.sprite(387, 68, "newcavemine", "whistle0001");

        // frontrail
        this.add.image(405, 211, "newcavemine", "frontrail");

        // leftrail
        this.add.image(232, 205, "newcavemine", "leftrail");

        // computer_front_right
        const computer_front_right = this.add.image(1347.222903523633, 800.8885482381835, "newcavemine", "computer_front_right");
        computer_front_right.setOrigin(0.48364893300274037, 0.5098876871109084);

        // chairs
        const chairs = this.add.image(497, 106, "newcavemine", "chairs");
        chairs.setOrigin(0.4823879003316682, 0.3183752221703291);

        // mine_notice
        const mine_notice = this.add.image(408, 584, "newcavemine", "mine_notice");
        mine_notice.setOrigin(0.5569546882072028, 0.7266929043409935);

        // coffee
        const coffee = this.add.sprite(303, 167, "newcavemine", "coffee0001");
        coffee.setOrigin(0.5, 0.7794227351225705);

        // cavedoor
        const cavedoor = this.add.image(199.74259530788595, 392.3234604105146, "newcavemine", "cavedoor");
        cavedoor.setOrigin(0.7364074151653884, 0.7751208489040264);

        // bulbswires
        this.add.image(767, -6, "newcavemine", "bulbswires");

        // fg
        const fg = this.add.image(62.26944640103122, 585.1558898338276, "newcavemine", "fg");
        fg.setOrigin(0.39446097537259445, 0.7381117943247658);

        // fg_bottom
        const fg_bottom = this.add.image(112.66336217468087, 904.8589431462233, "newcavemine", "fg_bottom");
        fg_bottom.setOrigin(0.4691737906499196, 0.7538345676170682);

        // shovel
        const shovel = this.add.image(912.6763693111991, 600.4877711298319, "newcavemine", "shovel");
        shovel.setOrigin(0.37430537086036886, 0.7512069600499082);

        // rocks_1
        this.add.image(1393, 329, "rocks");

        // lights
        this.add.image(1508, 177, "lights");

        // bulbs0001
        const bulbs0001 = this.add.sprite(854, 60, "newcavemine", "bulbs0001");

        // hitbox
        const hitbox = this.add.rectangle(943, 88, 186, 70);
        hitbox.visible = false;

        // overlay
        const overlay = this.add.rectangle(766.6262664571226, 1015.6971867026314, 1587, 1027);
        overlay.setOrigin(0.5060657003510539, 1.0342718481557835);
        overlay.alpha = 0;
        overlay.isFilled = true;
        overlay.fillColor = 0;
        overlay.fillAlpha = 0.5;
        overlay.strokeColor = 0;

        // coin
        const coin = this.add.container(-108, 358);

        // coin_sprite
        const coin_sprite = this.add.sprite(31.03714265764836, -50.12658541187517, "newcavemine", "coin0002");
        coin.add(coin_sprite);

        // coin_text
        const coin_text = this.add.text(-29, -33, "", {});
        coin_text.text = "10";
        coin_text.setStyle({ "align": "center", "baselineX":0,"baselineY":0,"fixedWidth":50,"fixedHeight":50,"fontFamily": "CCComiccrazy", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":2});
        coin_text.setPadding({"top":15});
        coin.add(coin_text);

        // lists
        const sort = [computer_front_right, cavedoor, fg, fg_bottom, shovel, coffee, coffee_table, chairs, mine_notice, overlay];

        // seaspray0001 (components)
        const seaspray0001Animation = new Animation(seaspray0001);
        seaspray0001Animation.key = "seaspray";
        seaspray0001Animation.end = 12;

        // whistle0001 (components)
        const whistle0001SimpleButton = new SimpleButton(whistle0001);
        whistle0001SimpleButton.callback = () => this.onWhistleClick();

        // mine_notice (components)
        const mine_noticeButton = new Button(mine_notice);
        mine_noticeButton.spriteName = "mine_notice";
        mine_noticeButton.callback = () => this.interface.loadWidget('DigPoster');
        mine_noticeButton.pixelPerfect = true;

        // coffee (components)
        const coffeeSimpleButton = new SimpleButton(coffee);
        coffeeSimpleButton.callback = () => this.onCoffeeClick();

        this.waterfall0001 = waterfall0001;
        this.shinemid0001 = shinemid0001;
        this.shinemid = shinemid;
        this.shinetop0001 = shinetop0001;
        this.shinetop = shinetop;
        this.snowball_tube0001 = snowball_tube0001;
        this.mwtop0001 = mwtop0001;
        this.smolbulb_2 = smolbulb_2;
        this.smolbulb_1 = smolbulb_1;
        this.smolbulb_0001 = smolbulb_0001;
        this.bulb = bulb;
        this.smolbulb = smolbulb;
        this.whistle0001 = whistle0001;
        this.coffee = coffee;
        this.bulbs0001 = bulbs0001;
        this.hitbox = hitbox;
        this.overlay = overlay;
        this.coin_sprite = coin_sprite;
        this.coin_text = coin_text;
        this.coin = coin;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.bounds = this.hitbox.getBounds();
        this.shinetop.play('shinetop');
        this.shinetop0001.play('shinetop');
        this.shinemid.play('shinemid');
        this.shinemid0001.play('shinemid');
        this.waterfall0001.play('waterfall');
        this.coin.depth = 1000;
        if (!this.world.client.miningError) {
            this.world.client.miningError = 0;
        }

        // wait 5 seconds before draining power upon entering
        // setTimeout(() => this.drainPower(), 10000);
    }

    // onSnowballComplete(x, y, ball) {
    //     if (!this.bounds) return
    //     if (this.bounds.contains(x, y)) {
    //         this.restorePower();
    //         if(this.powerTimeout) clearTimeout(this.powerTimeout);
    //         this.powerTimeout = setTimeout(() => this.drainPower(), this.powerTimer);

    //         this.interface.main.snowballFactory.destroyBall(ball);
    //     }
    // }

    restorePower() {
        this.snowball_tube0001.play('snowballtube');
        this.bulb.play('bulb');
        this.bulbs0001.playReverse('bulbs');
        this.mwtop0001.play('mwtop');
        this.smolbulb_2.play('smolbulb');
        this.smolbulb_1.play('smolbulb');
        this.smolbulb_0001.play('smolbulb');
        this.smolbulb.play('smolbulb');
        this.soundManager.playSfx("snowball_throw");
        // alpha at 1 is dimmed, alpha at 0 is non-dimmed
        let dimInterval = setInterval(() => {
            this.overlay.alpha > 0 ? this.overlay.alpha -= 0.05 : clearInterval(dimInterval);
        }, 50)
    }

    drainPower() {
        this.bulb.playReverse('bulb');
        this.bulbs0001.play('bulbs');
        this.mwtop0001.playReverse('mwtop');
        this.smolbulb_2.playReverse('smolbulb');
        this.smolbulb_1.playReverse('smolbulb');
        this.smolbulb_0001.playReverse('smolbulb');
        this.smolbulb.playReverse('smolbulb');

        this.soundManager.playSfx("powerdie");

        let dimInterval = setInterval(() => {
            this.overlay.alpha < 1 ? this.overlay.alpha += 0.05 : clearInterval(dimInterval);
        }, 50)
    }

    showCoinRewardToPlayer(penguin, coins) {
        this.coin.setPosition(penguin.x, penguin.y - 50)

        this.coin.visible = true

        this.coin_text.setText(`+${coins}`)

        this.tweens.add({
            targets: [this.coin],
            y: {
                from: this.coin.y,
                to: this.coin.y - 70
            },
            ease: 'Linear',
            duration: 1000,
        })

        setTimeout(() => {
            this.coin.visible = false
        }, 1000)

        if(this.interface.main.playerCard.visible && this.interface.main.playerCard.id == this.world.client.id) this.interface.main.playerCard.showCard(this.world.client.id, true)
    }

    onWhistleClick() {
        this.whistle0001.play('whistle');
        this.soundManager.playSfx("sound_116");
    }

    onCoffeeClick() {
        this.coffee.play('coffee');
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
