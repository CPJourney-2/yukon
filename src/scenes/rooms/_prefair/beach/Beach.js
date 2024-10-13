import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Button, HoverAnimation, MoveTo, SimpleButton, Animation } from '@components/components'


/* START OF COMPILED CODE */

export default class Beach extends RoomScene {

    constructor() {
        super("Beach");

        /** @type {Phaser.GameObjects.Sprite} */
        this.bucket;
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 450, 750),
            'dock': () => this.triggerRoom(800, 240, 420),
            'lighthouse': () => this.triggerRoom(410, 0, 0),
            'ship': null
            //'ship': () => this.triggerRoom(420, 0, 0)
        }
        this.music = 67561

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("beach-pack", "assets/media/rooms/beach/beach-pack.json");
        this.load.pack("prefair-beach-pack", "assets/media/rooms/_prefair/beach/prefair-beach-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-20, -20, "beach", "bg");
        bg.setOrigin(0, 0);

        // migrator
        const migrator = this.add.sprite(498, 192, "migrator_docked", "migrator0001");
        migrator.visible = false;

        // lighthouse_snow
        this.add.image(601, 332, "migrator_docked", "lighthouse_snow");

        // lighthouse
        this.add.image(389, 206, "migrator_docked", "lighthouse");

        // lighthouse_door
        const lighthouse_door = this.add.image(388, 216, "beach", "lighthouse_door");
        lighthouse_door.setOrigin(0, 0);

        // cage
        const cage = this.add.image(232, 352, "beach", "cage");
        cage.setOrigin(0.4935064935064935, 0.5);

        // buoy_box
        const buoy_box = this.add.image(188.92058930359389, 450.82010526330833, "prefair-beach", "buoy_box");
        buoy_box.setOrigin(0.6040025410195329, 0.8438799420358726);

        // fish
        const fish = this.add.image(297, 392, "beach", "fish");
        fish.setOrigin(0.4782608695652174, 0.4956521739130435);

        // net
        const net = this.add.image(290, 465, "beach", "net");
        net.setOrigin(0.49767441860465117, 0.5);

        // box1
        const box1 = this.add.image(293.61261796714905, 508.4294419233477, "prefair-beach", "box1");
        box1.setOrigin(0.5788288622946816, 0.6911002722295306);

        // fg
        const fg = this.add.image(1217, 293, "beach", "fg");
        fg.setOrigin(0, 0);

        // sign
        const sign = this.add.image(1146, 323, "beach", "sign");
        sign.setOrigin(0, 0);

        // chair_ground
        const chair_ground = this.add.image(906, 524, "beach", "chair_ground");
        chair_ground.setOrigin(0, 0);

        // chair_2
        const chair_2 = this.add.image(1060, 501, "beach", "chair_2");
        chair_2.setOrigin(0.5185185185185185, 0.6060606060606061);

        // chair_2_front
        const chair_2_front = this.add.image(1053, 522, "beach", "chair_2_front");
        chair_2_front.setOrigin(0.5, 0.6764705882352942);

        // chair_1
        const chair_1 = this.add.image(961, 526, "beach", "chair_1");
        chair_1.setOrigin(0.5, 0.58778626);

        // chair_1_front
        const chair_1_front = this.add.image(943, 542, "beach", "chair_1_front");
        chair_1_front.setOrigin(0.4, 0.67054264);

        // bucket
        const bucket = this.add.sprite(1078, 612, "beach", "bucket/bucket0001");
        bucket.setOrigin(0.8863109, 0.94611727);

        // box4
        const box4 = this.add.image(639.8079649077671, 616.5201116571046, "prefair-beach", "box4");
        box4.setOrigin(0.40304170603453343, 0.8504769500483308);

        // box3
        const box3 = this.add.image(519.6959776685791, 655.3280765648718, "prefair-beach", "box3");
        box3.setOrigin(0.42990460999033386, 0.7470494864676351);

        // trio_box
        const trio_box = this.add.image(839.0009279388426, 634.6698198567744, "prefair-beach", "trio_box");
        trio_box.setOrigin(0.4403435615503872, 0.689869009660306);

        // box2
        const box2 = this.add.image(654, 707.1106815621292, "prefair-beach", "box2");
        box2.setOrigin(0.5, 0.7718653309421484);

        // longbox
        const longbox = this.add.image(883.367919921875, 790.7074287074762, "prefair-beach", "longbox");
        longbox.setOrigin(0.35695266803669984, 0.716100542246947);

        // lists
        const sort = [bucket, chair_1_front, chair_1, chair_2_front, chair_2, net, fish, cage, buoy_box, box1, box4, trio_box, longbox, box2, box3];

        // migrator (components)
        const migratorAnimation = new Animation(migrator);
        migratorAnimation.key = "migrator";
        migratorAnimation.end = 100;

        // lighthouse_door (components)
        const lighthouse_doorButton = new Button(lighthouse_door);
        lighthouse_doorButton.spriteName = "lighthouse_door";
        const lighthouse_doorMoveTo = new MoveTo(lighthouse_door);
        lighthouse_doorMoveTo.x = 480;
        lighthouse_doorMoveTo.y = 400;

        // bucket (components)
        const bucketHoverAnimation = new HoverAnimation(bucket);
        bucketHoverAnimation.key = "bucket/bucket";
        bucketHoverAnimation.checkpoints = "70,137,210,269";
        bucketHoverAnimation.end = 346;
        bucketHoverAnimation.pixelPerfect = true;

        this.bucket = bucket;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
