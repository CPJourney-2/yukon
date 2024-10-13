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
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
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
        this.load.pack("postveggie-sportshop-rebuild1-pack", "assets/media/rooms/_mission11/sportshoprebuild1/postveggie-sportshop-rebuild1-pack.json");
        this.load.pack("postveggie-sportshop-rebuild2-pack", "assets/media/rooms/_mission11/sportshoprebuild2/postveggie-sportshop-rebuild2-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(776, 503, "postveggie-sportshop-rebuild2", "bg");

        // speaker
        const speaker = this.add.sprite(47, 323, "postveggie-sportshop-rebuild1", "speaker0001");

        // sportdoor
        const sportdoor = this.add.image(1087, 320, "postveggie-sportshop-rebuild1", "sportdoor0001");
        sportdoor.scaleX = 1.016851083269729;
        sportdoor.scaleY = 1.016851083269729;

        // back_hqdoor
        const back_hqdoor = this.add.image(414.1828103375992, 480.75474368079455, "sportshop-popcorn-one", "back_hqdoor");
        back_hqdoor.setOrigin(0.719270790933318, 0.8082519826537934);

        // psa
        const psa = this.add.sprite(436, 513.9864542360369, "sportshop-popcorn-one", "hqdoor0001");
        psa.scaleX = 1.016851083269729;
        psa.scaleY = 1.016851083269729;
        psa.setOrigin(0.5, 0.8207119841203839);

        // changerooms
        const changerooms = this.add.image(218.48570343676678, 544.5246595443881, "postveggie-sportshop-rebuild2", "changerooms");
        changerooms.setOrigin(0.5331599645326912, 0.5397260309424834);

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

        // desk
        const desk = this.add.image(1309.0569874346083, 636.7990868146488, "postveggie-sportshop-rebuild2", "desk");
        desk.setOrigin(0.4057363943685047, 0.6817425485835763);

        // ball
        const ball = this.add.sprite(1415.8893800441572, 694.9867388077536, "postveggie-sportshop-rebuild2", "ball0001");
        ball.setOrigin(0.48269983642751785, 0.8474801146814241);

        // cashregister0001
        const cashregister0001 = this.add.sprite(1261.5954743434318, 642.1217384608777, "sportshop-popcorn-one", "cashregister0001");
        cashregister0001.setOrigin(0.4259795193718856, 1.5254108018968957);

        // callphone0001
        const callphone0001 = this.add.sprite(1432.9976051861177, 651.7508196884291, "sportshop-popcorn-one", "callphone0001");
        callphone0001.setOrigin(0.7839219316867435, 1.1996328695855505);

        // stand_side
        const stand_side = this.add.image(193, 725, "postveggie-sportshop-rebuild2", "stand_side");
        stand_side.setOrigin(0.5078349653118631, 0.7069888510296892);

        // popcorndesk_bottom
        const popcorndesk_bottom = this.add.image(337.58782172306974, 783.1025355478301, "postveggie-sportshop-rebuild1", "popcorndesk_bottom");
        popcorndesk_bottom.setOrigin(0.8460187339366163, 0.321886319409956);

        // stand_top
        const stand_top = this.add.image(296.20763549476453, 727.147573178656, "postveggie-sportshop-rebuild2", "stand_top");
        stand_top.setOrigin(0.6405007231696046, 0.28069524431117804);

        // sign0001
        const sign0001 = this.add.image(517.5281320359067, 430.69692425134645, "sportshop-popcorn-one", "sign0001");
        sign0001.setOrigin(0.5223299495943459, 0.7205082522441647);

        // fg0001
        const fg0001 = this.add.image(777.910231873899, 1134.270120256524, "sportshop-popcorn-one", "fg0001");
        fg0001.setOrigin(0.513643745940764, 3.4486813504801352);

        // mannequin_box
        const mannequin_box = this.add.image(476.23539539374895, 702.0493186535251, "postveggie-sportshop-rebuild2", "mannequin_box");
        mannequin_box.setOrigin(0.5078190499108272, 0.8504575803937574);

        // bike
        const bike = this.add.image(1330.2040490694244, 842.4409693737055, "postveggie-sportshop-rebuild2", "bike");
        bike.setOrigin(0.44538911606215, 0.7369272195457498);

        // interfaceIcons
        const interfaceIcons = this.add.sprite(1404.0000184003459, 864.9999661025114, "sportshop-popcorn-one", "snow_sports0001");

        // lists
        const sort = [cashregister0001, stand_side, light0001, lighttwo0001, tape_front, tape_right, tape_back, callphone0001, fg0001, sign0001, stand_top, back_hqdoor, psa, changerooms, mannequin_box, bike, desk, ball];

        // speaker (components)
        const speakerAnimation = new Animation(speaker);
        speakerAnimation.key = "speaker";
        speakerAnimation.end = 30;

        // sportdoor (components)
        const sportdoorButton = new Button(sportdoor);
        sportdoorButton.spriteName = "sportdoor";
        sportdoorButton.lazyName = true;
        const sportdoorMoveTo = new MoveTo(sportdoor);
        sportdoorMoveTo.x = 1086;
        sportdoorMoveTo.y = 486;

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

        // ball (components)
        const ballHoverAnimation = new HoverAnimation(ball);
        ballHoverAnimation.key = "ball";
        ballHoverAnimation.end = 37;

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
