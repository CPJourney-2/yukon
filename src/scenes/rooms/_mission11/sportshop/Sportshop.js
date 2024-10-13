import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, HoverAnimation, Button, MoveTo, SimpleButton } from '@components/components'

// You can write more code here

/* START OF COMPILED CODE */

export default class Sportshop extends RoomScene {

    constructor() {
        super("Sportshop");

        /** @type {Phaser.GameObjects.Sprite} */
        this.interfaceIcons;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 1132, 551),
            'psa': () => this.onPsa(),
            'shop': () => this.onCatalog()
        }  

        this.isOut = false

        this.music = 1142
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("sportshop-popcorn-one-pack", "assets/media/rooms/_mission11/sportshop/sportshop-popcorn-one-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(761, 479, "sportshop", "bg");
        bg.scaleX = 1.016851083269729;
        bg.scaleY = 1.016851083269729;
        bg.visible = false;

        // sports_ref
        this.add.image(776, 497, "sportshop-popcorn-one", "sports_ref");

        // popcorn_bg
        this.add.image(763, 499, "sportshop-popcorn-one", "popcorn_bg");

        // speaker0001
        const speaker0001 = this.add.sprite(74, 278, "sportshop-popcorn-one", "speaker0001");

        // door
        const door = this.add.sprite(1069, 320, "sportshop-popcorn-one", "out_door0001");
        door.scaleX = 1.016851083269729;
        door.scaleY = 1.016851083269729;

        // back_hqdoor
        const back_hqdoor = this.add.image(414.1828103375992, 480.75474368079455, "sportshop-popcorn-one", "back_hqdoor");
        back_hqdoor.setOrigin(0.719270790933318, 0.8082519826537934);

        // psa
        const psa = this.add.sprite(436, 513.9864542360369, "sportshop-popcorn-one", "hqdoor0001");
        psa.scaleX = 1.016851083269729;
        psa.scaleY = 1.016851083269729;
        psa.setOrigin(0.5, 0.8207119841203839);

        // changerooms
        const changerooms = this.add.image(217.25747680664062, 545.3571965936683, "sportshop-popcorn-one", "changerooms");
        changerooms.setOrigin(0.5050729865961322, 0.5588312718284791);

        // tape_back
        const tape_back = this.add.image(510.7496337890625, 489.90824786613683, "sportshop-popcorn-one", "tape_back");
        tape_back.setOrigin(0.507320618335557, 0.6013878701666824);

        // tape_right
        const tape_right = this.add.image(652.125186108901, 503.12220836648567, "sportshop-popcorn-one", "tape_right");
        tape_right.setOrigin(0.48541976848168245, 0.7050345057263385);

        // tape_front
        const tape_front = this.add.image(529.4947889507732, 582.4903223371504, "sportshop-popcorn-one", "tape_front");
        tape_front.setOrigin(0.5887492353288885, 0.7675901313950021);

        // light0001
        const light0001 = this.add.sprite(571.9850090329322, 642.5517359191474, "sportshop-popcorn-one", "light0001");
        light0001.setOrigin(1.0328336344310742, 3.6423522030550615);

        // lighttwo0001
        const lighttwo0001 = this.add.sprite(616.4477757704595, 672.8945749201329, "sportshop-popcorn-one", "lighttwo0001");
        lighttwo0001.setOrigin(0.38159252568198476, 6.420373715900843);

        // pile_bike
        const pile_bike = this.add.image(1320.327775029942, 788.8533597125577, "sportshop-popcorn-one", "pile_bike");
        pile_bike.setOrigin(0.49016373690514087, 0.7856901892519598);

        // pile_middle
        const pile_middle = this.add.image(643.0579406768337, 831.3878707697896, "sportshop-popcorn-one", "pile_middle");
        pile_middle.setOrigin(0.4930937574573561, 0.6768064497095156);

        // pile_bike_front
        const pile_bike_front = this.add.image(1292, 857, "sportshop-popcorn-one", "pile_bike_front");
        pile_bike_front.setOrigin(0.5086997707145989, 0.7490309367053872);

        // pile_stand
        const pile_stand = this.add.image(1287.9022216796875, 610.8868998827417, "sportshop-popcorn-one", "pile_stand");
        pile_stand.setOrigin(0.5775997260633655, 0.7151320227651908);

        // cashregister0001
        const cashregister0001 = this.add.sprite(1271.2565897967843, 619.2232285350555, "sportshop-popcorn-one", "cashregister0001");
        cashregister0001.setOrigin(0.49916980311009196, 1.3980937501848523);

        // callphone0001
        const callphone0001 = this.add.sprite(1433.9976051861177, 651.7508196884291, "sportshop-popcorn-one", "callphone0001");
        callphone0001.setOrigin(0.7839219316867435, 1.1996328695855505);

        // stand_side
        const stand_side = this.add.image(197.66884761142683, 716.7015617828299, "sportshop-popcorn-one", "stand_side");
        stand_side.setOrigin(0.5078349653118631, 0.7069888510296892);

        // stand_bottom
        const stand_bottom = this.add.image(332.2083984417502, 787.1202417920895, "sportshop-popcorn-one", "stand_bottom");
        stand_bottom.setOrigin(0.7098703777451671, 0.3701459685215712);

        // stand_top
        const stand_top = this.add.image(296.20763549476453, 727.147573178656, "sportshop-popcorn-one", "stand_top");
        stand_top.setOrigin(0.6405007231696046, 0.28069524431117804);

        // pile_far_left
        const pile_far_left = this.add.image(79.86055367018717, 808.0429449704842, "sportshop-popcorn-one", "pile_far_left");
        pile_far_left.setOrigin(0.6315857100537023, 0.5547389866203019);

        // sign0001
        const sign0001 = this.add.image(517.5281320359067, 430.69692425134645, "sportshop-popcorn-one", "sign0001");
        sign0001.setOrigin(0.5223299495943459, 0.7205082522441647);

        // fg0001
        const fg0001 = this.add.image(777.910231873899, 1134.270120256524, "sportshop-popcorn-one", "fg0001");
        fg0001.setOrigin(0.513643745940764, 3.4486813504801352);

        // interfaceIcons
        const interfaceIcons = this.add.sprite(1404.0000184003459, 864.9999661025114, "sportshop-popcorn-one", "snow_sports0001");

        // lists
        const sort = [pile_bike, pile_middle, pile_bike_front, pile_stand, cashregister0001, stand_side, pile_far_left, light0001, lighttwo0001, tape_front, tape_right, tape_back, callphone0001, fg0001, sign0001, stand_top, back_hqdoor, psa, changerooms];

        // speaker0001 (components)
        new Animation(speaker0001);

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "out_door";
        doorButton.lazyName = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 1086;
        doorMoveTo.y = 486;

        // psa (components)
        const psaButton = new Button(psa);
        psaButton.spriteName = "hqdoor";
        const psaMoveTo = new MoveTo(psa);
        psaMoveTo.x = 420;
        psaMoveTo.y = 535;

        // light0001 (components)
        new Animation(light0001);

        // lighttwo0001 (components)
        new Animation(lighttwo0001);

        // cashregister0001 (components)
        const cashregister0001HoverAnimation = new HoverAnimation(cashregister0001);
        cashregister0001HoverAnimation.key = "cashregister";
        cashregister0001HoverAnimation.checkpoints = "20,35";
        cashregister0001HoverAnimation.end = 35;
        cashregister0001HoverAnimation.hoverZone = cashregister0001;

        // callphone0001 (components)
        const callphone0001HoverAnimation = new HoverAnimation(callphone0001);
        callphone0001HoverAnimation.key = "callphone";
        callphone0001HoverAnimation.end = 55;
        callphone0001HoverAnimation.replayBeforeFinish = true;
        callphone0001HoverAnimation.loop = false;

        // interfaceIcons (components)
        const interfaceIconsButton = new Button(interfaceIcons);
        interfaceIconsButton.spriteName = "snow_sports";
        interfaceIconsButton.callback = () => this.onCatalog();
        interfaceIconsButton.lazyName = true;

        this.interfaceIcons = interfaceIcons;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create(){
        super.create()
    }
    onCatalog() {
        this.interface.loadWidget('SportsCatalog')
    }

    onPsa() {
        if(this.world.client.hasItem(800)){
            this.triggerRoom(803, 257, 600)
        }
        else{
            this.onCatalog()
        }
    }

    onRegOver() {

    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
