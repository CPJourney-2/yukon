// You can write more code here
import { Animation, SimpleButton, MoveTo, Button } from '@components/components'
import RoomScene from '@scenes/rooms/RoomScene'
/* START OF COMPILED CODE */

export default class Lookout extends RoomScene {

    constructor() {
        super("Lookout");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'tourhq': () => this.triggerRoom(2, 1090, 500)
        }
        this.music = '1108_alt'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("lookout-pack", "assets/media/rooms/lookout/lookout-pack.json");
    }

    /** @returns {void} */
    _create() {

        // background
        this.add.image(738, 295, "lookout", "background");

        // club_lights0001
        const club_lights0001 = this.add.sprite(419, 215, "lookout", "club-lights0001");

        // stadium
        const stadium = this.add.container(670, 190);

        // stadium_back
        const stadium_back = this.add.image(0, 0, "lookout-stadium", "stadium-back");
        stadium.add(stadium_back);

        // stadium_animation0001
        const stadium_animation0001 = this.add.sprite(-1, 25, "lookout-stadium", "stadium-animation0001");
        stadium.add(stadium_animation0001);

        // stadium_front
        const stadium_front = this.add.image(-13, 48, "lookout-stadium", "stadium-front");
        stadium.add(stadium_front);

        // rink
        const rink = this.add.container(670, 190);
        rink.visible = false;

        // rink_back
        const rink_back = this.add.image(0, 0, "lookout-stadium", "rink-back");
        rink.add(rink_back);

        // rink_animation0001
        const rink_animation0001 = this.add.sprite(0, 24, "lookout-stadium", "rink-animation0001");
        rink.add(rink_animation0001);

        // rink_front
        const rink_front = this.add.image(-12, 47, "lookout-stadium", "rink-front");
        rink.add(rink_front);

        // baseball
        const baseball = this.add.container(669, 205);
        baseball.visible = false;

        // baseball_back
        const baseball_back = this.add.image(1, 0, "lookout-baseball", "baseball-back");
        baseball.add(baseball_back);

        // baseball_animation0001
        const baseball_animation0001 = this.add.sprite(0, 1, "lookout-baseball", "baseball-animation0001");
        baseball.add(baseball_animation0001);

        // baseball_front
        const baseball_front = this.add.image(0, 24.5, "lookout-baseball", "baseball-front");
        baseball.add(baseball_front);

        // fountain0001
        const fountain0001 = this.add.sprite(43, 169, "lookout", "fountain0001");

        // forts_flag0001
        const forts_flag0001 = this.add.sprite(683, 275, "lookout", "forts-flag0001");
        forts_flag0001.tintTopLeft = 15305579;
        forts_flag0001.tintTopRight = 15305579;
        forts_flag0001.tintBottomLeft = 15305579;
        forts_flag0001.tintBottomRight = 15305579;

        // forts_flag
        const forts_flag = this.add.sprite(766, 238, "lookout", "forts-flag0001");
        forts_flag.tintTopLeft = 2898817;
        forts_flag.tintTopRight = 2898817;
        forts_flag.tintBottomLeft = 2898817;
        forts_flag.tintBottomRight = 2898817;

        // dome
        this.add.image(722, 482, "lookout", "dome");

        // tourhqBtn
        const tourhqBtn = this.add.ellipse(234.0525515418252, 825.0000000000001, 310, 128);
        tourhqBtn.setOrigin(0.5597884602108705, 0.5000000000000009);

        // newspaper_pile
        const newspaper_pile = this.add.image(1415.29833984375, 800.9875286155151, "lookout", "newspaper-pile");
        newspaper_pile.setOrigin(0.43443850562415953, 0.3741073345473194);

        // map_btn
        const map_btn = this.add.image(735, 485, "lookout", "map-btn");

        // lists
        const sort = [newspaper_pile];

        // club_lights0001 (components)
        const club_lights0001Animation = new Animation(club_lights0001);
        club_lights0001Animation.key = "club-lights";
        club_lights0001Animation.end = 69;

        // stadium_animation0001 (components)
        const stadium_animation0001Animation = new Animation(stadium_animation0001);
        stadium_animation0001Animation.key = "stadium-animation";
        stadium_animation0001Animation.end = 30;

        // rink_animation0001 (components)
        new Animation(rink_animation0001);

        // baseball_animation0001 (components)
        new Animation(baseball_animation0001);

        // fountain0001 (components)
        const fountain0001Animation = new Animation(fountain0001);
        fountain0001Animation.key = "fountain";
        fountain0001Animation.end = 12;

        // forts_flag0001 (components)
        const forts_flag0001Animation = new Animation(forts_flag0001);
        forts_flag0001Animation.key = "forts-flag";
        forts_flag0001Animation.end = 14;

        // forts_flag (components)
        const forts_flagAnimation = new Animation(forts_flag);
        forts_flagAnimation.key = "forts-flag";
        forts_flagAnimation.end = 14;

        // tourhqBtn (components)
        new SimpleButton(tourhqBtn);
        new MoveTo(tourhqBtn);

        // map_btn (components)
        const map_btnButton = new Button(map_btn);
        map_btnButton.spriteName = "map-btn";
        map_btnButton.callback = () => this.interface.loadWidget('Map');

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
