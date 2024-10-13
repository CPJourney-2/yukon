import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import moment from 'moment-timezone'

import { Animation, Button, MoveTo, ShowHint, SimpleButton, Zone } from '@components/components'

import FourTable1 from '@scenes/shared_prefabs/tables/four/FourTable1'
import FourTable2 from '@scenes/shared_prefabs/tables/four/FourTable2'
import FourTable3 from '@scenes/shared_prefabs/tables/four/FourTable3'


/* START OF COMPILED CODE */

export default class Lodge extends RoomScene {

    constructor() {
        super("Lodge");

        /** @type {Phaser.GameObjects.Image} */
        this.hourHand;
        /** @type {Phaser.GameObjects.Image} */
        this.minuteHand;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fred;
        /** @type {FourTable2} */
        this.table207;
        /** @type {FourTable1} */
        this.table206;
        /** @type {FourTable3} */
        this.table205;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flame;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flame_out;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fish;
        /** @type {Phaser.GameObjects.Image} */
        this.paddlepin;
        /** @type {Array<Phaser.GameObjects.Image|FourTable1|FourTable2|FourTable3>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'attic': () => this.triggerRoom(221, 966, 560),
            'village': () => this.triggerRoom(200, 940, 540),
            //'fish': () => this.triggerGame(904),
            'fish': () => this.triggerRoom(4, 189, 768),
            'table205': () => this.triggerTable('four', 205),
            'table206': () => this.triggerTable('four', 206),
            'table207': () => this.triggerTable('four', 207)
        }

        this.tables = {}
        this.music = 300000000

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("lodge-pack", "assets/media/rooms/lodge/lodge-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-16, 1, "lodge", "bg");
        bg.setOrigin(0, 0);

        // clock
        this.add.image(262, 367, "lodge", "clock");

        // hourHand
        const hourHand = this.add.image(291.67491340040146, 347.36944580078125, "lodge", "clockHour");
        hourHand.setOrigin(0.2624929857910396, 0.5738910710872347);

        // minuteHand
        const minuteHand = this.add.image(291.61575892572694, 347.2955267612516, "lodge", "clockMinute");
        minuteHand.setOrigin(0.5684176584141041, 0.7941959311806449);

        // fred
        const fred = this.add.sprite(398, 337, "lodge", "fred0001");

        // door
        const door = this.add.image(135, 462, "lodge", "door");

        // footrest
        const footrest = this.add.image(1275, 750, "lodge", "footrest");
        footrest.setOrigin(0.49295775, 0.47222222);

        // chair
        const chair = this.add.image(1368, 760, "lodge", "chair");
        chair.setOrigin(0.5017064846416383, 0.5018450184501845);

        // fire
        const fire = this.add.sprite(1329, 474, "lodge", "fire0001");
        fire.setOrigin(0.5061728395061729, 0.5);

        // fishing_door
        const fishing_door = this.add.image(946, 256, "lodge", "fishing_door");
        fishing_door.setOrigin(0.2916666666666667, 0.3961218836565097);

        // rods
        this.add.image(816, 335, "lodge", "rods");

        // bait
        const bait = this.add.image(835, 421, "lodge", "bait");
        bait.setOrigin(0.5060240963855421, 0.5);

        // catalog_small
        const catalog_small = this.add.sprite(826, 247, "lodge", "catalog_small0001");
        catalog_small.setOrigin(0, 0);
        catalog_small.visible = false;

        // catalog_small_tape
        const catalog_small_tape = this.add.image(843, 244, "lodge", "catalog_small_tape");
        catalog_small_tape.setOrigin(0, 0);
        catalog_small_tape.visible = false;

        // table207
        const table207 = new FourTable2(this, 1020, 814);
        this.add.existing(table207);

        // table206
        const table206 = new FourTable1(this, 620, 794);
        this.add.existing(table206);

        // table205
        const table205 = new FourTable3(this, 600, 513);
        this.add.existing(table205);

        // candle
        const candle = this.add.image(451, 261, "lodge", "candle");
        candle.setOrigin(0, 0);

        // flame
        const flame = this.add.sprite(516, 232, "lodge", "flame0001");
        flame.setOrigin(0, 0);

        // flame_out
        const flame_out = this.add.sprite(516, 200, "lodge", "flame_out0001");
        flame_out.setOrigin(0, 0);
        flame_out.visible = false;

        // fish
        const fish = this.add.sprite(1010, 372, "lodge", "fish0001");
        fish.setOrigin(0, 0);
        fish.visible = false;

        // zone
        const zone = this.add.rectangle(1220, 215, 115, 430);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // paddlepin
        const paddlepin = this.add.image(1382, 410, "lodge-paddlepin");

        // lists
        const sort = [door, table206, footrest, chair, table207, table205];

        // fred (components)
        const fredAnimation = new Animation(fred);
        fredAnimation.key = "fred";
        fredAnimation.end = 25;
        fredAnimation.repeat = 0;
        fredAnimation.autoPlay = false;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 184;
        doorMoveTo.y = 626;

        // fire (components)
        const fireAnimation = new Animation(fire);
        fireAnimation.key = "fire";
        fireAnimation.end = 10;

        // fishing_door (components)
        const fishing_doorButton = new Button(fishing_door);
        fishing_doorButton.spriteName = "fishing_door";
        fishing_doorButton.hoverCallback = () => this.onFishOver();
        fishing_doorButton.hoverOutCallback = () => this.onFishOut();
        const fishing_doorMoveTo = new MoveTo(fishing_door);
        fishing_doorMoveTo.x = 960;
        fishing_doorMoveTo.y = 460;

        // bait (components)
        const baitButton = new Button(bait);
        baitButton.spriteName = "bait";

        // catalog_small (components)
        const catalog_smallAnimation = new Animation(catalog_small);
        catalog_smallAnimation.key = "catalog_small";
        catalog_smallAnimation.end = 7;
        catalog_smallAnimation.repeat = 0;
        catalog_smallAnimation.autoPlay = false;
        catalog_smallAnimation.onHover = true;
        const catalog_smallSimpleButton = new SimpleButton(catalog_small);
        catalog_smallSimpleButton.pixelPerfect = true;

        // candle (components)
        const candleSimpleButton = new SimpleButton(candle);
        candleSimpleButton.hoverCallback = () => this.onCandleOver();
        candleSimpleButton.pixelPerfect = true;

        // flame (components)
        const flameAnimation = new Animation(flame);
        flameAnimation.key = "flame";
        flameAnimation.end = 14;

        // flame_out (components)
        const flame_outAnimation = new Animation(flame_out);
        flame_outAnimation.key = "flame_out";
        flame_outAnimation.end = 30;
        flame_outAnimation.repeat = 0;
        flame_outAnimation.autoPlay = false;
        flame_outAnimation.showOnStart = true;
        flame_outAnimation.hideOnComplete = true;

        // fish (components)
        const fishAnimation = new Animation(fish);
        fishAnimation.key = "fish";
        fishAnimation.end = 18;
        fishAnimation.repeat = 0;
        fishAnimation.autoPlay = false;
        fishAnimation.showOnStart = true;

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.callback = () => this.onZoneClick();

        // paddlepin (components)
        const paddlepinSimpleButton = new SimpleButton(paddlepin);
        paddlepinSimpleButton.callback = () => this.interface.prompt.showItem(592);

        this.hourHand = hourHand;
        this.minuteHand = minuteHand;
        this.fred = fred;
        this.table207 = table207;
        this.table206 = table206;
        this.table205 = table205;
        this.flame = flame;
        this.flame_out = flame_out;
        this.fish = fish;
        this.paddlepin = paddlepin;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.flame_out.on('animationcomplete', () => this.onFlameOutComplete())
        this.fred.on('animationupdate',() => {
            if(this.fred.anims.currentFrame.index == 5) this.soundManager.playSfx('lodge-cuckoo')
        })

        this.time.addEvent({
            delay: 1000,
            callback: () => this.syncTime(),
            repeat: -1
        })
        this.syncTime()
    }

    update() {
        // Check the time for fred. Appears every 30 mins at :00 and :30
        let now = new Date()
        let mins = now.getMinutes()
        let secs = now.getSeconds()
        if(mins == 0 || mins == 30) {
            if(secs == 0 && !this.fred.anims.isPlaying) {
                this.fred.__Animation.play()
            }
        }
    }

    syncTime() {
        const time = moment.tz(Date.now(), "America/Los_Angeles")

        const hour = time.hour()
        const minute = time.minute()
        const second = time.second()

        const hourAngle = ((hour % 12) * 30 + (minute / 60) * 30) - 87
        const minuteAngle = minute * 6 + (second / 60) * 6

        this.hourHand.angle = hourAngle
        this.minuteHand.angle = minuteAngle
    }

    onCandleOver() {
        if (!this.flame.visible) return
        this.flame.visible = false
        this.flame_out.__Animation.play()
    }

    onFlameOutComplete() {
        this.flame.visible = true
    }

    onFishOver() {
        this.fish.__Animation.play()
    }

    onFishOut() {
        this.fish.__Animation.stop()
        this.fish.visible = false
    }

    onZoneClick() {
        this.world.client.sendMove(1210, 460)
    }

    onSnowballComplete(x, y, ball) {
        if(this.paddlepin.getBounds().contains(x,y)) this.snowballs.destroyBall(ball)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
