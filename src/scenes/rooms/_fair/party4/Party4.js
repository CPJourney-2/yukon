import RoomScene from '@rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton, ShowHint } from '@components/components'

import RoomPin from '@rooms/RoomPin'

/* START OF COMPILED CODE */

export default class Party4 extends RoomScene {

    constructor() {
        super("Party4");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'dock': () => this.triggerRoom(800, 855, 270),
            'buccaneerboats': () => this.triggerRoom(860, 185, 815),
            'bullseye': () => this.triggerRoom(857, 330, 870),
            'maroonedlagoon': () => this.triggerRoom(856, 1435, 600),
            'medievalmonsters': () => this.triggerRoom(859, 270, 850),
            'spacesquid': () => this.triggerRoom(861, 1435, 545),
            'virtualworld': () => this.triggerRoom(858, 765, 140),
            'wagonwheel': () => this.triggerRoom(855, 935, 675),
        }

        this.music = 1153

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("fair-party4-pack", "assets/media/rooms/_fair/party4/fair-party4-pack.json");
    }

    /** @returns {void} */
    _create() {

        // skybox
        this.add.image(801, 107, "fair-party4", "skybox");

        // wheel0001
        const wheel0001 = this.add.sprite(852, 61, "fair-party4", "wheel0001");

        // bg
        this.add.image(772, 475, "fair-party4", "bg");

        // stuffbg
        const stuffbg = this.add.image(732.6788205213089, 320.8627543265531, "fair-party4", "stuffbg");
        stuffbg.setOrigin(0.611131676008983, 0.7906422072131034);

        // pedestal
        const pedestal = this.add.image(1414.227578879634, 400.08682133367796, "fair-party4", "pedestal");
        pedestal.setOrigin(0.45414985330855645, 0.5421896823053777);

        // arcade0001
        const arcade0001 = this.add.image(1439.6461155451516, 420.23313975949753, "fair-party4", "arcade0001");
        arcade0001.setOrigin(0.3062933321068946, 0.7989865852503658);

        // righttree
        const righttree = this.add.image(1476.9766737687205, 559.8740972959769, "fair-party4", "righttree");
        righttree.setOrigin(0.32617234647762927, 0.7316932046284889);

        // chair1
        const chair1 = this.add.image(841.0823912869273, 718.5056817385957, "fair-party4", "chair1");
        chair1.setOrigin(0.4669376743606398, 0.6438211165312182);

        // chair2
        const chair2 = this.add.image(733, 754, "fair-party4", "chair2");

        // chair3
        const chair3 = this.add.image(921, 759, "fair-party4", "chair3");

        // table2
        const table2 = this.add.image(819.4691772460938, 804.321482961688, "fair-party4", "table2");
        table2.setOrigin(0.5031071271776151, 0.8446677352027111);

        // chairs
        const chairs = this.add.image(533, 387.5313253397589, "fair-party4", "chairs");
        chairs.setOrigin(0.5, 0.46304949553891145);

        // table1
        const table1 = this.add.image(556, 444.7206258710189, "fair-party4", "table1");
        table1.setOrigin(0.5084698110380602, 0.7809783120243199);

        // leftstuff
        const leftstuff = this.add.image(195.02581787109375, 552.7579585864956, "fair-party4", "leftstuff");
        leftstuff.setOrigin(0.8352357743279053, 0.7532254867215381);

        // fg
        const fg = this.add.image(-44, 1042, "fair-party4", "fg");
        fg.setOrigin(0, 1);

        // lists
        const sort = [righttree, arcade0001, pedestal, chair1, chair2, chair3, table2, chairs, table1, stuffbg, leftstuff, fg];

        // wheel0001 (components)
        const wheel0001Animation = new Animation(wheel0001);
        wheel0001Animation.key = "wheel";
        wheel0001Animation.end = 144;

        // arcade0001 (components)
        const arcade0001Button = new Button(arcade0001);
        arcade0001Button.spriteName = "arcade";
        arcade0001Button.lazyName = true;
        const arcade0001MoveTo = new MoveTo(arcade0001);
        arcade0001MoveTo.x = 1415;
        arcade0001MoveTo.y = 460;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        let questsIcon = this.interface.main.quests

        this.questsOriginalPos = { x: questsIcon.x, y: questsIcon.y }
        questsIcon.setPosition(1350, 820)
        this.interface.main.partyIcon.visible = false
    }

    stop() {
        super.stop()
        this.interface.main.partyIcon.visible = true
        this.interface.main.quests.setPosition(this.questsOriginalPos.x, this.questsOriginalPos.y)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */