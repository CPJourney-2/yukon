// You can write more code here
import { Animation, SimpleButton, MoveTo, Button, ZoneTrigger } from '@components/components'
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
        this.music = 221
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("lookout-pack", "assets/media/rooms/lookout/lookout-pack.json");
        this.load.pack("fair-lookout-pack", "assets/media/rooms/_fair/lookout/fair-lookout-pack.json");
    }

    /** @returns {void} */
    _create() {

        // club_lights0001
        const club_lights0001 = this.add.sprite(419, 215, "lookout", "club-lights0001");

        // map_btn
        const map_btn = this.add.image(735, 485, "lookout", "map-btn");
        map_btn.visible = false;

        // bgterrain
        this.add.image(751, 289, "fair-lookout", "bgterrain");

        // apples
        this.add.image(172, 299, "fair-lookout", "fountain");

        // fountain0001
        const fountain0001 = this.add.sprite(39, 163, "lookout", "fountain0001");

        // appleinmouth
        this.add.image(59, 104, "fair-lookout", "appleinmouth");

        // bg_rink
        this.add.image(671, 191, "fair-lookout", "bg_rink");

        // bg_cars0001
        const bg_cars0001 = this.add.sprite(673, 212, "fair-lookout", "bg_cars0001");

        // bg_rink_front
        this.add.image(660, 234, "fair-lookout", "bg_rink_front");

        // dome
        this.add.image(747, 480, "fair-lookout", "dome");

        // cards
        this.add.image(1124, 771, "fair-lookout", "cards");

        // popcorn
        const popcorn = this.add.image(818, 507.69789765100734, "fair-lookout", "popcorn");
        popcorn.setOrigin(0.5, 0.39817925811718324);

        // croak
        const croak = this.add.image(747, 558, "fair-lookout", "croak");

        // popcornbucket
        const popcornbucket = this.add.image(879.0936550660465, 527.4532660571032, "fair-lookout", "popcornbucket");
        popcornbucket.setOrigin(0.38506336594244756, 0.825700979022695);

        // dog
        const dog = this.add.image(1454, 675, "fair-lookout", "dog");

        // tourhqBtn
        const tourhqBtn = this.add.ellipse(279.0179912414196, 819.0758369827419, 350, 160);
        tourhqBtn.setOrigin(0.6484112923292122, 0.41922398114213755);

        // fg_left
        const fg_left = this.add.image(82, 969, "fair-lookout", "fg_left");

        // fg_right
        const fg_right = this.add.image(1359, 1040.7677568204665, "fair-lookout", "fg_right");
        fg_right.setOrigin(0.5, 0.6909952272775883);

        // penguinplush
        const penguinplush = this.add.image(979.2880584320227, 592.1174923982841, "fair-lookout", "penguinplush");
        penguinplush.setOrigin(0.5576886094680981, 0.6542116432277845);

        // pillow
        const pillow = this.add.image(595, 635, "fair-lookout", "pillow");
        pillow.setOrigin(0.4962804041625557, 0.1557550519070988);

        // pillow2
        const pillow2 = this.add.image(1166, 570, "fair-lookout", "pillow2");
        pillow2.setOrigin(0.505852164117579, 0.12948960943897167);

        // pillows
        const pillows = this.add.image(631.1906821474139, 815.0839001448621, "fair-lookout", "pillows");
        pillows.setOrigin(0.2726439228870476, 0.13095714407447165);

        // puffleplush
        const puffleplush = this.add.image(907, 573, "fair-lookout", "puffleplush");

        // tickets
        const tickets = this.add.image(815, 566, "fair-lookout", "tickets");

        // tickets_1
        const tickets_1 = this.add.image(1362, 633, "fair-lookout", "tickets");

        // stuff
        const stuff = this.add.image(157.32607143984583, 651.3082785500167, "fair-lookout", "stuff");
        stuff.setOrigin(0.5319915902549442, 0.624060079500234);

        // whitepuffle
        const whitepuffle = this.add.image(1278, 657, "fair-lookout", "whitepuffle");

        // bear
        this.add.image(407, 493, "fair-lookout", "bear");

        // bearleg
        const bearleg = this.add.image(379, 622, "fair-lookout", "bearleg");

        // sign
        this.add.image(568, 482, "fair-lookout", "sign");

        // beararm1
        const beararm1 = this.add.image(364.06160390093663, 568.058372348343, "fair-lookout", "beararm1");
        beararm1.setOrigin(0.7278327627357876, 0.9065185381024062);

        // beararm2
        const beararm2 = this.add.image(427, 562.7817920730569, "fair-lookout", "beararm2");
        beararm2.setOrigin(0.48578065026897244, 0.9331047972166068);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(391, 543, 80, 70);
        rectangle_1.visible = false;
        rectangle_1.fillColor = 65280;
        rectangle_1.fillAlpha = 0.5;

        // lists
        const sort = [croak, dog, fg_left, fg_right, penguinplush, pillow, pillow2, pillows, popcorn, puffleplush, tickets, tickets_1, stuff, whitepuffle, bearleg, beararm2, beararm1, popcornbucket];

        // club_lights0001 (components)
        const club_lights0001Animation = new Animation(club_lights0001);
        club_lights0001Animation.key = "club-lights";
        club_lights0001Animation.end = 69;

        // map_btn (components)
        const map_btnButton = new Button(map_btn);
        map_btnButton.spriteName = "map-btn";
        map_btnButton.callback = () => this.interface.loadWidget('Map');

        // fountain0001 (components)
        const fountain0001Animation = new Animation(fountain0001);
        fountain0001Animation.key = "fountain";
        fountain0001Animation.end = 12;

        // bg_cars0001 (components)
        const bg_cars0001Animation = new Animation(bg_cars0001);
        bg_cars0001Animation.key = "bg_cars";
        bg_cars0001Animation.end = 30;

        // tourhqBtn (components)
        new SimpleButton(tourhqBtn);
        new MoveTo(tourhqBtn);

        // rectangle_1 (components)
        const rectangle_1ZoneTrigger = new ZoneTrigger(rectangle_1);
        rectangle_1ZoneTrigger.callback = () => this.client.questComplete(67);

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */