import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import SharedCoaster from '@rooms/_fair/SharedCoaster'

import { Animation, Button, SimpleButton, ZoneTrigger, MoveTo } from '@components/components'
import moment from "moment-timezone";


/* START OF COMPILED CODE */

export default class Forts extends RoomScene {

    constructor() {
        super("Forts");

        /** @type {Phaser.GameObjects.Sprite} */
        this.fairSign0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.clockTower0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.tower;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.hitbox;
        /** @type {Phaser.GameObjects.Text} */
        this.clockTime;
        /** @type {Phaser.GameObjects.Text} */
        this.day;
        /** @type {Phaser.GameObjects.Text} */
        this.am_pm;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 1240, 660),
            'rink': () => this.triggerRoom(802, 780, 340),
            'plaza': () => this.triggerRoom(300, 340, 660)
        }

        this.music = 297
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("forts-pack", "assets/media/rooms/forts/forts-pack.json");
        this.load.pack("fair-forts-pack", "assets/media/rooms/_fair/forts/fair-forts-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-35, -18, "forts", "bg");
        bg.setOrigin(0, 0);

        // fortsrink
        const fortsrink = this.add.image(749, 453, "fortsrink");
        fortsrink.visible = false;

        // background
        this.add.image(932, 567, "fair-forts", "background");

        // flagSign
        this.add.image(924, 151, "fair-forts", "flagSign");

        // fairSign0001
        const fairSign0001 = this.add.sprite(828.6854005367383, 195.66300626194618, "fair-forts", "fairSign0001");
        fairSign0001.setOrigin(0.4498302387992821, -0.024343684771393963);

        // tower_shadow
        const tower_shadow = this.add.image(1065, 304, "forts", "tower_shadow");
        tower_shadow.setOrigin(0, 0);

        // clockTower0001
        const clockTower0001 = this.add.sprite(1037.4309863943888, -36.223440993973895, "fair-forts", "clockTower0001");
        clockTower0001.setOrigin(0.0038467376193247593, -0.005558602484934738);

        // tower
        const tower = this.add.sprite(1046, -13, "forts", "tower0001");
        tower.setOrigin(0, 0);
        tower.alpha = 0;
        tower.alphaTopLeft = 0;
        tower.alphaTopRight = 0;
        tower.alphaBottomLeft = 0;
        tower.alphaBottomRight = 0;

        // clock
        const clock = this.add.image(1070, 83, "forts", "clock");
        clock.setOrigin(0, 0);

        // secret_message
        const secret_message = this.add.image(1252, 327, "forts", "secret_message");
        secret_message.setOrigin(0, 0);

        // sign
        const sign = this.add.image(1379, 269, "fair-forts", "clockSign");
        sign.setOrigin(0, 0);

        // snowballs
        const snowballs = this.add.image(662.215049762836, 873.0262066824602, "forts", "snowballs");
        snowballs.setOrigin(0.48023153250516887, 0.31169339551345354);

        // hitbox
        const hitbox = this.add.rectangle(1337, 134, 70, 75);
        hitbox.visible = false;

        // clockTime
        const clockTime = this.add.text(1076, 85, "", {});
        clockTime.scaleX = 0.45;
        clockTime.scaleY = 0.7166177259864144;
        clockTime.angle = -1;
        clockTime.text = "12:24";
        clockTime.setStyle({ "color": "#DBEDF0", "fixedWidth":300,"fixedHeight":130,"fontFamily": "CPLCD", "fontSize": "112px" });

        // day
        const day = this.add.text(1087, 188, "", {});
        day.scaleX = 0.5;
        day.scaleY = 0.5;
        day.angle = 3.0000000000000004;
        day.text = "THURSDAY";
        day.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":240,"fixedHeight":40,"fontFamily": "CCComiccrazy", "fontSize": "30px", "fontStyle": "bold italic" });

        // am_pm
        const am_pm = this.add.text(1187, 94, "", {});
        am_pm.scaleX = 0.5;
        am_pm.scaleY = 0.5;
        am_pm.angle = -1;
        am_pm.text = "AM";
        am_pm.setStyle({ "color": "#DBEDF0", "fontFamily": "CPLCD", "fontSize": "64px" });

        // clock_text
        const clock_text = this.add.text(1066, 38, "", {});
        clock_text.scaleY = 1.2195577762568657;
        clock_text.angle = -5;
        clock_text.visible = false;
        clock_text.text = "CLUB PENGUIN\nTime Zone";
        clock_text.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "CCComiccrazy", "fontSize": "19px", "fontStyle": "bold italic" });

        // forts_towertext
        this.add.image(1152, 53, "forts-towertext");

        // fenceRight
        const fenceRight = this.add.image(1389.7825888402665, 914.1532295906514, "fair-forts", "fenceRight");
        fenceRight.setOrigin(0.4405500642792344, 0.8929436629964423);

        // fenceLeft
        const fenceLeft = this.add.image(37.6621757744272, 911.2866264548829, "fair-forts", "fenceLeft");
        fenceLeft.setOrigin(0.44923222307469185, 0.8875953149711818);

        // fortTwoRight
        const fortTwoRight = this.add.image(1226.9135027024415, 426.1335144042969, "fair-forts", "fortTwoRight");
        fortTwoRight.setOrigin(0.15846006876195345, 0.8085340581149915);

        // fortTwoWall
        const fortTwoWall = this.add.image(890.1986038086787, 347.98154374987257, "fair-forts", "fortTwoWall");
        fortTwoWall.setOrigin(0.4919859454856612, 0.45725040711246534);

        // fortTwoLeft
        const fortTwoLeft = this.add.image(903.5651187808314, 458.5252580123979, "fair-forts", "fortTwoLeft");
        fortTwoLeft.setOrigin(0.5320766461843726, 0.7573633146959439);

        // fortOneLeft
        const fortOneLeft = this.add.image(389, 608, "fair-forts", "fortOneLeft");
        fortOneLeft.setOrigin(0.5647119776146694, 0.5023828271070897);

        // fortOneLeftMid
        const fortOneLeftMid = this.add.image(466.87928553706774, 595.2028796229795, "fair-forts", "fortOneLeftMid");
        fortOneLeftMid.setOrigin(0.26731814215751826, 0.5459133687516006);

        // fortOneLeftWall
        const fortOneLeftWall = this.add.image(457, 739, "fair-forts", "fortOneLeftWall");
        fortOneLeftWall.setOrigin(0.32970866793413617, 0.519360352460766);

        // fortOneMid
        const fortOneMid = this.add.image(788.3533935546875, 664.3790839455376, "fair-forts", "fortOneMid");
        fortOneMid.setOrigin(0.42124144496602367, 0.5384467012894739);

        // fortOneRight
        const fortOneRight = this.add.image(858.9116178007484, 796.3320368951455, "fair-forts", "fortOneRight");
        fortOneRight.setOrigin(0.20708554576458882, 0.5666601359019581);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(950, 321.6094446001244, 128, 128);
        rectangle_1.setOrigin(0.5, 0.7391362859384718);

        // sharedCoaster
        const sharedCoaster = new SharedCoaster(this, 0, 0);
        this.add.existing(sharedCoaster);

        // lists
        const sort = [fortTwoRight, fortTwoLeft, fortTwoWall, fortOneRight, fortOneMid, fortOneLeftWall, fortOneLeftMid, fortOneLeft, fenceRight, fenceLeft, snowballs];

        // fairSign0001 (components)
        const fairSign0001Animation = new Animation(fairSign0001);
        fairSign0001Animation.key = "fairSign";
        fairSign0001Animation.end = 8;

        // clockTower0001 (components)
        const clockTower0001Animation = new Animation(clockTower0001);
        clockTower0001Animation.key = "clockTower";
        clockTower0001Animation.end = 24;
        clockTower0001Animation.repeat = 0;
        clockTower0001Animation.autoPlay = false;

        // tower (components)
        const towerAnimation = new Animation(tower);
        towerAnimation.key = "tower";
        towerAnimation.end = 24;
        towerAnimation.repeat = 0;
        towerAnimation.autoPlay = false;

        // sign (components)
        const signButton = new Button(sign);
        signButton.spriteName = "clockSign";
        signButton.callback = () => {this.interface.loadWidget("ClocktowerUI")};

        // rectangle_1 (components)
        new SimpleButton(rectangle_1);
        new MoveTo(rectangle_1);
        const rectangle_1ZoneTrigger = new ZoneTrigger(rectangle_1);
        rectangle_1ZoneTrigger.callback = () => this.triggerRoom(851, 768, 791);

        this.fairSign0001 = fairSign0001;
        this.clockTower0001 = clockTower0001;
        this.tower = tower;
        this.hitbox = hitbox;
        this.clockTime = clockTime;
        this.day = day;
        this.am_pm = am_pm;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.bounds = this.hitbox.getBounds()
        this.clockTower0001.on('animationcomplete', () => this.onTowerAnimComplete())

        this.syncTime();

        this.time.addEvent({
          delay: 5000,
          loop: true,
          callback: () => {
            this.syncTime();
          }
        });

        this.myThrows = 0
    }

    syncTime() {
        this.clockTime.text = moment.tz(Date.now(), "America/Los_Angeles").format('hh:mm');
        this.day.text = moment.tz(Date.now(), "America/Los_Angeles").format('dddd').toUpperCase();
        this.am_pm.text = moment.tz(Date.now(), "America/Los_Angeles").format('A').toUpperCase();
      }

    onSnowballComplete(x, y, ball) {
        if (this.bounds.contains(x, y)) {
            this.clockTower0001.__Animation.play()

            this.interface.main.snowballFactory.destroyBall(ball);

            if(ball.penguin == this.world.client.penguin) {
                this.myThrows += 1    
                if(this.myThrows == 10) {
                    this.stampEarned(13)
                }
            }
        }
    }

    onTowerAnimComplete() {
        this.clockTower0001.setFrame('clockTower0001')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
