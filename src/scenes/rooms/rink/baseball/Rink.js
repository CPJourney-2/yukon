import RoomScene from '@rooms/RoomScene'
import { Button, MoveTo, SnackStampArea, Zone } from '@components/components'

import RoomPin from '@rooms/RoomPin'

/* START OF COMPILED CODE */

export default class Rink extends RoomScene {

    constructor() {
        super("Rink");

        /** @type {Phaser.GameObjects.Image} */
        this.green_patch;
        /** @type {Phaser.GameObjects.Image} */
        this.gate_active;
        /** @type {Phaser.GameObjects.Image} */
        this.gate;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.plate3;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.plate1;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.plate2;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.plate4;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.plate5;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 560, 400)
        }

        this.music = '1109'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("baseball-rink-pack", "assets/media/rooms/rink/baseball/baseball-rink-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(765, 503, "rink", "bg");

        // field
        this.add.image(767, 696, "rink", "field");

        // netting
        this.add.image(778, 232, "rink", "netting");

        // bleacher_L
        const bleacher_L = this.add.image(31.445714423733975, 281.89046186170344, "rink", "bleacher_L");
        bleacher_L.setOrigin(0.24203763045403587, 0.08860190235549126);

        // bleacher_R
        const bleacher_R = this.add.image(1513.8996792391376, 297.1823341148919, "rink", "bleacher_R");
        bleacher_R.setOrigin(0.8135645621912291, 0.06321384011061242);

        // adSports
        const adSports = this.add.container(1265.422704894516, 478.0358091884652);

        // board_right_three
        const board_right_three = this.add.image(70.5773445170737, 53.96419129775546, "rink", "board_right_three");
        adSports.add(board_right_three);

        // sports
        const sports = this.add.image(78.0773445170737, 65.96419129775546, "rink", "sports");
        adSports.add(sports);

        // adGift
        const adGift = this.add.container(1138.5623658199004, 392.3118290995019);

        // board_right_two
        const board_right_two = this.add.image(10.437634180099622, -1.3118290995018924, "rink", "board_right_two");
        adGift.add(board_right_two);

        // gift
        const gift = this.add.image(-2.0623658199003785, -10.311829099501892, "rink", "gift");
        adGift.add(gift);

        // green_patch
        const green_patch = this.add.image(762, 362, "rink", "green_patch");
        green_patch.visible = false;

        // adAdopt
        const adAdopt = this.add.container(392.49226064494337, 374.9209652844395);

        // board_left_two_png
        const board_left_two_png = this.add.image(-22.992252488129793, 16.079020699036164, "rink", "board_left_two.png");
        adAdopt.add(board_left_two_png);

        // adopt
        const adopt = this.add.image(-4.992252488129793, 7.579020699036164, "rink", "adopt");
        adAdopt.add(adopt);

        // adCoffee
        const adCoffee = this.add.container(250.31628260986523, 482.8093662103365);

        // board_left_three
        const board_left_three = this.add.image(-60.31628673130851, 49.19059746030217, "rink", "board_left_three");
        adCoffee.add(board_left_three);

        // coffee
        const coffee = this.add.image(-61.31628673130851, 54.19059746030217, "rink", "coffee");
        adCoffee.add(coffee);

        // gate_active
        const gate_active = this.add.image(762, 370.88846890015043, "rink", "gate-active");
        gate_active.setOrigin(0.5, 0.7918026681470007);
        gate_active.visible = false;

        // field_back
        const field_back = this.add.image(762.9258593715709, 993.8997485660183, "rink", "field_back");
        field_back.setOrigin(0.49919421583867024, 0.8082509462344084);

        // fg
        const fg = this.add.image(773.8565080261612, 1033.5897792211972, "rink", "fg");
        fg.setOrigin(0.5116686312043077, 1.0929487875414008);

        // fishdogs
        const fishdogs = this.add.image(1335.1566461609718, 327.8661193847656, "rink", "fishdogs");
        fishdogs.setOrigin(0.47504914920764113, 0.7927506225214674);

        // exitmat
        this.add.image(779, 240, "rink", "exitmat");

        // table_one
        const table_one = this.add.image(485.3300185038709, 235.09571164230417, "rink", "table_one");
        table_one.setOrigin(0.5486924500297763, 0.4874404394764468);

        // gazebo_back
        this.add.image(520, 161, "rink", "gazebo_back");

        // table_two
        const table_two = this.add.image(625, 237.5, "rink", "table_two");

        // gazebo_front
        const gazebo_front = this.add.image(577.3785381998981, 256.77802616432245, "rink", "gazebo_front");
        gazebo_front.setOrigin(0.5696529662854232, 0.8888899413742477);

        // snack
        this.add.image(263, 213, "rink", "snack");

        // snack_front
        const snack_front = this.add.image(339.81960820149493, 300.67085072438516, "rink", "snack_front");
        snack_front.setOrigin(0.569120515798216, 0.6894582006797003);

        // supplies
        this.add.image(1042, 239, "rink", "supplies");

        // booth_wall
        this.add.image(1064, 125, "rink", "booth_wall");

        // desk_chairs
        this.add.image(1022, 128, "rink", "desk_chairs");

        // desk_mics
        const desk_mics = this.add.image(1014, 163, "rink", "desk_mics");

        // booth_front
        const booth_front = this.add.image(1160.1863756827104, 198.78203392063318, "rink", "booth_front");
        booth_front.setOrigin(0.7598655806997012, 0.6747749391641342);

        // ladder
        const ladder = this.add.image(1206.8299560546875, 204.07503458520114, "rink", "ladder");
        ladder.setOrigin(0.3569029841102538, 0.285736457234107);

        // arrowsign
        const arrowsign = this.add.image(846.5, 227.82693840154667, "rink", "arrowsign");
        arrowsign.setOrigin(0.5, 0.7022667571704763);

        // gateThing
        const gateThing = this.add.rectangle(761.277620259244, 346.5892342174915, 55, 35);
        gateThing.setOrigin(0.46868400471352784, 0.17397812049975658);

        // snackStamp
        const snackStamp = this.add.rectangle(1344, 290, 200, 200);

        // snackStamp_1
        const snackStamp_1 = this.add.rectangle(276, 221, 300, 300);

        // _gate
        const _gate = this.add.container(552, 354.539306640625);

        // gateposts
        const gateposts = this.add.image(209, -42, "rink", "gateposts");
        gateposts.setOrigin(0.4969186285491942, 0.43205575950973013);
        _gate.add(gateposts);

        // gate
        const gate = this.add.image(210, 0, "rink", "gate");
        gate.setOrigin(0.5, 0.6271558653271059);
        _gate.add(gate);

        // adPizza
        const adPizza = this.add.container(409, 1.146728515625);
        _gate.add(adPizza);

        // board_right_one
        const board_right_one = this.add.image(7, -20.68602401890422, "rink", "board_right_one");
        adPizza.add(board_right_one);

        // pizza
        const pizza = this.add.image(0, -22.68602401890422, "rink", "pizza");
        adPizza.add(pizza);

        // adSurf
        const adSurf = this.add.container(0, 2.97735595703125);
        _gate.add(adSurf);

        // board_left_one
        const board_left_one = this.add.image(0, -27.51665789795055, "rink", "board_left_one");
        adSurf.add(board_left_one);

        // surf
        const surf = this.add.image(7, -25.51665789795055, "rink", "surf");
        adSurf.add(surf);

        // plate3
        const plate3 = this.add.rectangle(769, 539, 70, 70);
        plate3.visible = false;

        // plate1
        const plate1 = this.add.rectangle(771, 867, 70, 70);
        plate1.visible = false;

        // plate2
        const plate2 = this.add.rectangle(1055, 672, 70, 70);
        plate2.visible = false;

        // plate4
        const plate4 = this.add.rectangle(476, 670, 70, 70);
        plate4.visible = false;

        // plate5
        const plate5 = this.add.rectangle(768, 701, 70, 70);
        plate5.visible = false;

        // lists
        const sort = [bleacher_L, bleacher_R, fg, field_back, fishdogs, gazebo_front, snack_front, booth_front, gate_active, desk_mics, ladder, table_two, table_one, adCoffee, adAdopt, adGift, adSports, _gate, arrowsign];

        // gateThing (components)
        const gateThingZone = new Zone(gateThing);
        gateThingZone.hoverCallback = () => this.onGateHover();
        gateThingZone.hoverOutCallback = () => this.onGateOut();
        new MoveTo(gateThing);

        // snackStamp (components)
        new SnackStampArea(snackStamp);

        // snackStamp_1 (components)
        new SnackStampArea(snackStamp_1);

        this.green_patch = green_patch;
        this.gate_active = gate_active;
        this.gate = gate;
        this.plate3 = plate3;
        this.plate1 = plate1;
        this.plate2 = plate2;
        this.plate4 = plate4;
        this.plate5 = plate5;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()
        this.plate1Touched = false
        this.plate2Touched = false
        this.plate3Touched = false
        this.plate4Touched = false
        this.plate5Touched = false
        this.stampTriggered = false
    }

    update() {
        super.update()

        //Homerun Stamp
        if(this.plate1.getBounds().contains(this.client.penguin.x,this.client.penguin.y)) {
            if(!this.plate1Touched) this.plate1Touched = true
            if(!this.plate5Touched && this.plate4Touched && this.plate3Touched && this.plate2Touched && this.plate1Touched) {
                this.stampEarned(498)
                this.plate5Touched = true
            }
        }
        if(this.plate2.getBounds().contains(this.client.penguin.x,this.client.penguin.y)) {
            if(!this.plate2Touched && this.plate1Touched) this.plate2Touched = true
        }
        if(this.plate3.getBounds().contains(this.client.penguin.x,this.client.penguin.y)) {
            if(!this.plate3Touched && this.plate2Touched && this.plate1Touched) this.plate3Touched = true
        }
        if(this.plate4.getBounds().contains(this.client.penguin.x,this.client.penguin.y)) {
            if(!this.plate4Touched && this.plate3Touched && this.plate2Touched && this.plate1Touched) this.plate4Touched = true
        }

        //Batter Up Stamp
        let plate1Touched = false
        let plate2Touched = false
        for(let penguin of Object.values(this.penguins)) {
            if(this.plate1.getBounds().contains(penguin.x,penguin.y)) {
                plate1Touched = true
            }
        }
        if(this.plate5.getBounds().contains(this.client.penguin.x,this.client.penguin.y)) {
            plate2Touched = true
        }
        if(plate1Touched && plate2Touched && !this.stampTriggered) {
            this.stampTriggered = true
            this.stampEarned(497)
        }
    }

    onSnowballStart(x, y, ball) {
        ball.setTexture('rink', `baseball`);
    }

    onSnowballComplete(x, y, ball, id) {
        ball.setTexture('rink', `baseball`);
    }

    onGateHover(){
        this.gate.visible = false
        this.green_patch.visible = true
        this.gate_active.visible = true
    }

    onGateOut(){
        this.gate.visible = true
        this.green_patch.visible = false
        this.gate_active.visible = false
    }

    onCatalog() {
        this.interface.loadWidget('SportsCatalog')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
