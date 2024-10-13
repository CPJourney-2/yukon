import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, HoverAnimation, MoveTo, SimpleButton, Zone } from '@components/components'

import TreasureTable1 from '@scenes/shared_prefabs/tables/treasurehunt/TreasureTable1'
import TreasureTable2 from '@scenes/shared_prefabs/tables/treasurehunt/TreasureTable2'
import TreasureTable3 from '@scenes/shared_prefabs/tables/treasurehunt/TreasureTable3'
import TreasureTable4 from '@scenes/shared_prefabs/tables/treasurehunt/TreasureTable4'
import TreasureTable5 from '@scenes/shared_prefabs/tables/treasurehunt/TreasureTable5'
import TreasureTable6 from '@scenes/shared_prefabs/tables/treasurehunt/TreasureTable6'
import TreasureTable7 from '@scenes/shared_prefabs/tables/treasurehunt/TreasureTable7'
import TreasureTable8 from '@scenes/shared_prefabs/tables/treasurehunt/TreasureTable8'

/* START OF COMPILED CODE */

export default class ShipQuarters extends RoomScene {

    constructor() {
        super("ShipQuarters");

        /** @type {TreasureTable8} */
        this.table307;
        /** @type {TreasureTable7} */
        this.table306;
        /** @type {TreasureTable5} */
        this.table304;
        /** @type {TreasureTable4} */
        this.table303;
        /** @type {TreasureTable3} */
        this.table302;
        /** @type {TreasureTable2} */
        this.table301;
        /** @type {TreasureTable1} */
        this.table300;
        /** @type {Array<Phaser.GameObjects.Image|TreasureTable1|TreasureTable2|TreasureTable4|TreasureTable5|TreasureTable6|TreasureTable7|TreasureTable8|TreasureTable3>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'shiphold': () => this.triggerRoom(421, 860, 600),
            'game1': () => this.triggerTable('treasurehunt', 300),
            'game2': () => this.triggerTable('treasurehunt', 301),
            'game3': () => this.triggerTable('treasurehunt', 302),
            'game4': () => this.triggerTable('treasurehunt', 303),
            'game5': () => this.triggerTable('treasurehunt', 304),
            'game6': () => this.triggerTable('treasurehunt', 305),
            'game7': () => this.triggerTable('treasurehunt', 306),
            'game8': () => this.triggerTable('treasurehunt', 307),
        }
        this.music = '491'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("shipquarters-pack", "assets/media/rooms/shipquarters/shipquarters-pack.json");
    }

    /** @returns {void} */
    _create() {

        // rectangle_1
        const rectangle_1 = this.add.rectangle(1166, 355, 128, 128);
        rectangle_1.scaleX = 0.46469449785771977;
        rectangle_1.scaleY = 0.1734507962857118;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 10715963;

        // bg
        this.add.image(763, 465, "shipquarters", "bg");

        // animations_flame10001
        const animations_flame10001 = this.add.sprite(1261, 103, "shipquarters", "animations/flame10001");

        // animations_flame20001
        const animations_flame20001 = this.add.sprite(1126, 110, "shipquarters", "animations/flame20001");

        // buttons_door
        const buttons_door = this.add.image(156.81019326052683, 423.070073992026, "shipquarters", "buttons/door");
        buttons_door.setOrigin(0.5915013665240098, 0.7995580451678896);

        // light
        this.add.image(60, 267, "shipquarters", "light");

        // buttons_how_to
        const buttons_how_to = this.add.image(442, 167, "shipquarters", "buttons/how-to");

        // buttons_notice_board
        const buttons_notice_board = this.add.image(764, 171, "shipquarters", "buttons/notice_board");

        // stuff
        this.add.image(708, 263, "shipquarters", "stuff");

        // animations_picture0001
        const animations_picture0001 = this.add.sprite(557, 137, "shipquarters", "animations/picture0001");

        // desk
        const desk = this.add.image(1300.3900624044027, 395.39741387906025, "shipquarters", "desk");
        desk.setOrigin(0.48305164863119937, 0.7679676283413905);

        // seat1
        this.add.image(781, 423, "shipquarters", "seat1");

        // seat2
        this.add.image(782, 453, "shipquarters", "seat2");

        // seat3
        this.add.image(785, 466, "shipquarters", "seat3");

        // center
        const center = this.add.image(767.9219903144627, 500.7094672954513, "shipquarters", "center");
        center.setOrigin(0.5016376382139658, 0.820945995540831);

        // palm1
        this.add.image(52, 303, "shipquarters", "palm1");

        // palm2
        this.add.image(296, 228, "shipquarters", "palm2");

        // left_stairs
        const left_stairs = this.add.image(455.375922515702, 422.3826683020702, "shipquarters", "left_stairs");
        left_stairs.setOrigin(0.5174784893737014, 0.22340290566117485);

        // right_map
        const right_map = this.add.image(156.4680581132235, 602.7942227673567, "shipquarters", "right_map");
        right_map.setOrigin(0.4841036152678836, 0.4417423702399909);

        // right_stairs
        const right_stairs = this.add.image(1048.9219903144628, 436.14863924545847, "shipquarters", "right_stairs");
        right_stairs.setOrigin(0.5020534305444607, 0.25060917723548554);

        // chest2
        const chest2 = this.add.image(1467, 436.9799778576216, "shipquarters", "chest2");
        chest2.setOrigin(0.5, 0.583229051341779);

        // chest1
        const chest1 = this.add.image(1467, 531, "shipquarters", "chest1");

        // right_side
        const right_side = this.add.image(1341, 619, "shipquarters", "right_side");

        // basket
        const basket = this.add.image(969, 322, "shipquarters", "basket");

        // table307
        const table307 = new TreasureTable8(this, 1264, 691.9576553632543);
        this.add.existing(table307);

        // table306
        const table306 = new TreasureTable7(this, 1040.831913250171, 754.6281457992923);
        this.add.existing(table306);

        // table305
        const table305 = new TreasureTable6(this, 762, 784.8582466845809);
        this.add.existing(table305);

        // table304
        const table304 = new TreasureTable5(this, 486, 750);
        this.add.existing(table304);

        // table303
        const table303 = new TreasureTable4(this, 238, 712.9902550606622);
        this.add.existing(table303);

        // table302
        const table302 = new TreasureTable3(this, 987.252085160005, 617.7978681910099);
        this.add.existing(table302);

        // table301
        const table301 = new TreasureTable2(this, 761, 634.0595705217426);
        this.add.existing(table301);

        // table300
        const table300 = new TreasureTable1(this, 517, 608);
        this.add.existing(table300);

        // spades
        const spades = this.add.image(1440, 706, "shipquarters", "spades");

        // lists
        const sort = [desk, right_side, right_stairs, center, left_stairs, right_map, spades, basket, chest1, chest2, table300, table301, table303, table304, table305, table306, table307, table302];

        // animations_flame10001 (components)
        const animations_flame10001Animation = new Animation(animations_flame10001);
        animations_flame10001Animation.key = "animations/flame1";
        animations_flame10001Animation.end = 14;

        // animations_flame20001 (components)
        const animations_flame20001Animation = new Animation(animations_flame20001);
        animations_flame20001Animation.key = "animations/flame2";
        animations_flame20001Animation.end = 14;

        // buttons_door (components)
        const buttons_doorButton = new Button(buttons_door);
        buttons_doorButton.spriteName = "buttons/door";
        new MoveTo(buttons_door);

        // buttons_how_to (components)
        const buttons_how_toButton = new Button(buttons_how_to);
        buttons_how_toButton.spriteName = "buttons/how-to";
        buttons_how_toButton.callback = () => this.interface.loadWidget('TreasureInstructions');

        // buttons_notice_board (components)
        const buttons_notice_boardButton = new Button(buttons_notice_board);
        buttons_notice_boardButton.spriteName = "buttons/notice_board";

        // animations_picture0001 (components)
        const animations_picture0001HoverAnimation = new HoverAnimation(animations_picture0001);
        animations_picture0001HoverAnimation.key = "animations/picture";
        animations_picture0001HoverAnimation.checkpoints = "7,13,19,25,31,37,43,49,55";
        animations_picture0001HoverAnimation.end = 61;

        this.table307 = table307;
        this.table306 = table306;
        this.table304 = table304;
        this.table303 = table303;
        this.table302 = table302;
        this.table301 = table301;
        this.table300 = table300;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
