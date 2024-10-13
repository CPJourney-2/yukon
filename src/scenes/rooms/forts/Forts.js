import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button } from '@components/components'
import moment from "moment-timezone";


/* START OF COMPILED CODE */

export default class Forts extends RoomScene {

    constructor() {
        super("Forts");

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
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 1240, 660),
            'rink': () => this.triggerRoom(802, 750, 320),
            'plaza': () => this.triggerRoom(300, 340, 660)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("forts-pack", "assets/media/rooms/forts/forts-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-35, -18, "forts", "bg");
        bg.setOrigin(0, 0);

        // fortsrink
        const fortsrink = this.add.image(749, 453, "fortsrink");
        fortsrink.visible = false;

        // fortsbaseball
        const fortsbaseball = this.add.image(749, 453, "fortsbaseball");
        fortsbaseball.visible = false;

        // red_fort
        const red_fort = this.add.image(603, 655, "forts", "red_fort");
        red_fort.setOrigin(0.5, 0.65116279);

        // red_pole
        const red_pole = this.add.image(662, 657, "forts", "red_pole");
        red_pole.setOrigin(0.47058824, 1);

        // red_fort_front
        const red_fort_front = this.add.image(703, 702, "forts", "red_fort_front");
        red_fort_front.setOrigin(0.5, 0.6473684210526316);

        // blue_pole
        const blue_pole = this.add.image(993, 424, "forts", "blue_pole");
        blue_pole.setOrigin(0.5, 1);

        // blue_fort
        const blue_fort = this.add.image(1023, 477, "forts", "blue_fort");
        blue_fort.setOrigin(0.49803922, 0.81818182);

        // tower_shadow
        const tower_shadow = this.add.image(1065, 304, "forts", "tower_shadow");
        tower_shadow.setOrigin(0, 0);

        // tower
        const tower = this.add.sprite(1046, -13, "forts", "tower0001");
        tower.setOrigin(0, 0);

        // clock
        const clock = this.add.image(1082, 104, "forts", "clock");
        clock.setOrigin(0, 0);

        // secret_message
        const secret_message = this.add.image(1252, 327, "forts", "secret_message");
        secret_message.setOrigin(0, 0);

        // sign
        const sign = this.add.image(1390, 291, "forts", "sign");
        sign.setOrigin(0, 0);

        // snowballs
        const snowballs = this.add.image(676, 786, "forts", "snowballs");
        snowballs.setOrigin(0.49230769, 0.57777778);

        // blue_flag
        const blue_flag = this.add.sprite(963, 334, "forts", "blue_flag0001");
        blue_flag.scaleX = 1.103413023709;
        blue_flag.scaleY = 1.0339896581119676;
        blue_flag.setOrigin(0.5, 1.85185185);

        // red_flag
        const red_flag = this.add.sprite(622, 526, "forts", "red_flag0001");
        red_flag.scaleX = 1.1116790549702165;
        red_flag.scaleY = 1.096352538601894;
        red_flag.setOrigin(0.5, 1.73913043);

        // hitbox
        const hitbox = this.add.rectangle(1347, 156, 70, 75);
        hitbox.visible = false;

        // clockTime
        const clockTime = this.add.text(1078, 108, "", {});
        clockTime.scaleX = 0.45;
        clockTime.scaleY = 0.7166177259864144;
        clockTime.angle = -1;
        clockTime.text = "12:24";
        clockTime.setStyle({ "align": "center", "color": "#DBEDF0", "fixedWidth":300,"fixedHeight":130,"fontFamily": "CPLCD", "fontSize": "112px" });

        // day
        const day = this.add.text(1099, 209, "", {});
        day.scaleX = 0.5;
        day.scaleY = 0.5;
        day.angle = 3.0000000000000004;
        day.text = "THURSDAY";
        day.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":240,"fixedHeight":40,"fontFamily": "CCComiccrazy", "fontSize": "30px", "fontStyle": "bold italic" });

        // am_pm
        const am_pm = this.add.text(1199, 115, "", {});
        am_pm.scaleX = 0.5;
        am_pm.scaleY = 0.5;
        am_pm.angle = -1;
        am_pm.text = "AM";
        am_pm.setStyle({ "color": "#DBEDF0", "fontFamily": "CPLCD", "fontSize": "64px" });

        // clock_text
        const clock_text = this.add.text(1078, 59, "", {});
        clock_text.scaleY = 1.2195577762568657;
        clock_text.angle = -5;
        clock_text.visible = false;
        clock_text.text = "CLUB PENGUIN\nTime Zone";
        clock_text.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "CCComiccrazy", "fontSize": "19px", "fontStyle": "bold italic" });

        // forts_towertext
        this.add.image(1164, 74, "forts-towertext");

        // lists
        const sort = [red_flag, red_pole, blue_pole, blue_flag, blue_fort, red_fort_front, red_fort, snowballs];

        // tower (components)
        const towerAnimation = new Animation(tower);
        towerAnimation.key = "tower";
        towerAnimation.end = 24;
        towerAnimation.repeat = 0;
        towerAnimation.autoPlay = false;

        // sign (components)
        const signButton = new Button(sign);
        signButton.spriteName = "sign";
        signButton.callback = () => {this.interface.loadWidget("ClocktowerUI")};

        // blue_flag (components)
        const blue_flagAnimation = new Animation(blue_flag);
        blue_flagAnimation.key = "blue_flag";
        blue_flagAnimation.end = 16;

        // red_flag (components)
        const red_flagAnimation = new Animation(red_flag);
        red_flagAnimation.key = "red_flag";
        red_flagAnimation.end = 16;

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
        this.tower.on('animationcomplete', () => this.onTowerAnimComplete())

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
        this.clockTime.text = moment.tz(Date.now(), "America/Los_Angeles").format('h:mm');
        this.day.text = moment.tz(Date.now(), "America/Los_Angeles").format('dddd').toUpperCase();
        this.am_pm.text = moment.tz(Date.now(), "America/Los_Angeles").format('A').toUpperCase();
      }

    onSnowballComplete(x, y, ball) {
        if (this.bounds.contains(x, y)) {
            this.tower.__Animation.play()

            this.interface.main.snowballFactory.destroyBall(ball);

            if(ball.penguin.id == this.world.client.penguin.id) {
                this.myThrows += 1    
                if(this.myThrows == 10) {
                    this.stampEarned(13)
                }
            }
        }
    }

    onTowerAnimComplete() {
        this.tower.setFrame('tower0001')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
