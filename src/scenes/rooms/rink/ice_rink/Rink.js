import RoomScene from '@rooms/RoomScene'
import { MoveTo, Button, SimpleButton, SnackStampArea } from '@components/components'
import HockeyGame from "../../rink/hockey/HockeyGame";

import RoomPin from '@rooms/RoomPin'



/* START OF COMPILED CODE */

export default class Rink extends RoomScene {

    constructor() {
        super("Rink");

        /** @type {HockeyGame} */
        this.hockeyGame;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|HockeyGame>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 560, 400)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("rink-pack", "assets/media/rooms/rink/ice_rink/rink-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(731, 391, "rink_ice", "bg");

        // stadium
        const stadium = this.add.image(571.4388679171932, 273.044150925218, "rink_ice", "stadium");
        stadium.setOrigin(0.613973806863984, 1.0383145781399912);

        // fish0001
        const fish0001 = this.add.image(186.74559575315612, 262.7561478911911, "rink_ice", "fish0001");
        fish0001.setOrigin(0.6398925235787399, 0.8097563228643782);

        // left
        const left = this.add.image(112.9644696695254, 315.2717478943674, "rink_ice", "left");
        left.setOrigin(0.4875081051148115, 0.2657698706880835);

        // left1
        const left1 = this.add.image(13.438279587224088, 549.7798751443295, "rink_ice", "left1");
        left1.setOrigin(0.7249515685422483, 0.725024498212711);

        // sports
        const sports = this.add.image(1311.44775390625, 300.1762458132096, "rink_ice", "sports");
        sports.setOrigin(0.1972005830890142, 0.9254745553365679);

        // rdoor
        const rdoor = this.add.sprite(1299.6173748232022, 318.23982921101754, "rink_ice", "rdoor");
        rdoor.setOrigin(0.1702159344239874, 0.8486397734896126);

        // goal2
        const goal2 = this.add.image(1223.45140658898, 520.6379625436658, "rink_ice", "goal2");
        goal2.setOrigin(0.3678894614791835, 0.628506112605675);

        // goal1
        const goal1 = this.add.image(1265.326822601059, 597.2557351000944, "rink_ice", "goal1");
        goal1.setOrigin(0.47062442418746037, 0.8180742727854076);

        // goal
        const goal = this.add.image(280.1733728370072, 518.3766404031636, "rink_ice", "goal2");
        goal.setOrigin(0.50412790214723, 0.5983548878811598);
        goal.flipX = true;

        // goal_1
        const goal_1 = this.add.image(244.6731773989412, 601.6020898979768, "rink_ice", "goal1");
        goal_1.setOrigin(0.5293755758125406, 0.8519119613796002);
        goal_1.flipX = true;

        // bdoor
        const bdoor = this.add.sprite(1215, 205, "rink_ice", "bdoor");

        // snacksfront
        const snacksfront = this.add.image(999.1410372932987, 254.1339346534403, "rink_ice", "snacksfront");
        snacksfront.setOrigin(0.32035254811697256, 0.8112632920604352);

        // bait
        const bait = this.add.image(860.0773745477384, 233.13247089824287, "rink_ice", "bait");
        bait.setOrigin(0.44345219258054036, 0.6723107716649599);

        // ring
        const ring = this.add.image(766.2171007068082, 349.02880980332577, "rink_ice", "ring");
        ring.setOrigin(0.5090900358726447, 0.1230717076634831);

        // door
        const door = this.add.sprite(754.8939622644699, 354.42415094212055, "rink_ice", "door");
        door.setOrigin(0.47872689156030207, 0.5614901528621937);

        // right2
        const right2 = this.add.image(1324.1569085693243, 369.19997747054947, "rink_ice", "right2");
        right2.setOrigin(0.17965827568548742, 0.41584695229624274);

        // right
        const right = this.add.image(1509.5081132150417, 551.3328301816631, "rink_ice", "right");
        right.setOrigin(0.29548807113653597, 0.7328282923701663);

        // fg
        const fg = this.add.image(770.9778903246977, 960.4631945647332, "rink_ice", "fg");
        fg.setOrigin(0.5070371247764893, 0.923225769263412);

        // snackStampArea
        const snackStampArea = this.add.rectangle(180, 230, 200, 200);

        // hockeyGame
        const hockeyGame = new HockeyGame(this, 771, 560);
        this.add.existing(hockeyGame);

        // lists
        const sort = [ring, door, stadium, snacksfront, rdoor, sports, right2, right, left1, left, fg, goal_1, goal, goal2, goal1, bait, fish0001, hockeyGame];

        // rdoor (components)
        const rdoorButton = new Button(rdoor);
        rdoorButton.spriteName = "rdoor";
        const rdoorMoveTo = new MoveTo(rdoor);
        rdoorMoveTo.x = 1320 ;
        rdoorMoveTo.y = 286;

        // bdoor (components)
        const bdoorButton = new Button(bdoor);
        bdoorButton.spriteName = "bdoor";
        const bdoorMoveTo = new MoveTo(bdoor);
        bdoorMoveTo.x = 1210;
        bdoorMoveTo.y = 218;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 759;
        doorMoveTo.y = 20;

        // snackStampArea (components)
        new SnackStampArea(snackStampArea);

        this.hockeyGame = hockeyGame;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()

        this.hockeyGame.addListeners()
        this.hockeyGame.sendGetPuck()

        this.hockeyGame.show()
    }

    update() {
        this.hockeyGame.update()
    }

    stop() {
        this.hockeyGame.removeListeners()

        super.stop()
    }

    shouldSlide() {
        return true;
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
