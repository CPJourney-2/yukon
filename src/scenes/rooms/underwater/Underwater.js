import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, ShowHint, Zone, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Underwater extends RoomScene {

    constructor() {
        super("Underwater");

        /** @type {Phaser.GameObjects.Container} */
        this.pin;
        /** @type {Array<Phaser.GameObjects.Image|RoomPin|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lake': () => this.triggerRoom(814, 1319, 683),
        }

        this.music = 671

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("underwater-room-pack", "assets/media/rooms/underwater/underwater-room-pack.json");
    }

    /** @returns {void} */
    _create() {

        // background
        this.add.image(759, 450, "underwater-room", "background");

        // fishgroup0001
        const fishgroup0001 = this.add.sprite(669, 161, "underwater-room", "fishgroup0001");
        fishgroup0001.visible = false;

        // abovefish
        this.add.image(759, 528, "underwater-room", "abovefish");

        // aboveabovefish
        this.add.image(762, 556, "underwater-room", "aboveabovefish");

        // fishone0015
        const fishone0015 = this.add.sprite(765, 109, "underwater-room", "fishone0015");
        fishone0015.visible = false;

        // shellfront
        const shellfront = this.add.image(1300.8171995550035, 616.7922361760972, "underwater-room", "shellfront");
        shellfront.setOrigin(0.490255239219131, 0.4989346355284951);

        // shellback
        const shellback = this.add.image(1422.0872187996006, 651.5016068594249, "underwater-room", "shellback");
        shellback.setOrigin(0.45885249285476537, 0.7323623932907347);

        // anvil
        const anvil = this.add.image(1363.769295413336, 774.461409173328, "underwater-room", "anvil");
        anvil.setOrigin(0.3633487965490357, 0.768563058805364);

        // back
        const back = this.add.image(118.99852752685547, 642.5226798653448, "underwater-room", "back");
        back.setOrigin(0.4405149872066536, 0.7385961008135953);

        // front
        const front = this.add.image(358.2319030761719, 715.4504313266222, "underwater-room", "front");
        front.setOrigin(0.5019040231141575, 0.8629210684074289);

        // wheel
        const wheel = this.add.image(365.06838697194127, 773.1287724971401, "underwater-room", "wheel");
        wheel.setOrigin(0.5608616534589359, 0.8095890543651354);

        // clam
        const clam = this.add.image(625, 784.3920848700204, "underwater-room", "clam");
        clam.setOrigin(0.5, 0.6719089504655913);

        // bush
        const bush = this.add.image(84, 656, "underwater-room", "bush");

        // bushright
        const bushright = this.add.image(1484, 451, "underwater-room", "bushright");

        // foreground
        const foreground = this.add.image(728.1299309670391, 1057.5344346009265, "underwater-room", "foreground");
        foreground.setOrigin(0.5114963527446148, 1.094744648654737);

        // fishoneref
        this.add.image(764, 42, "underwater-room", "fishoneref");

        // bigthing
        const bigthing = this.add.image(998.077919780723, 682.1430202235706, "underwater-room", "bigthing");
        bigthing.setOrigin(0.3556234510816635, 0.8222085907384583);

        // fishgroupref
        this.add.image(637, 49, "underwater-room", "fishgroupref");

        // realreference
        const realreference = this.add.image(754, 450, "underwater-room", "realreference");
        realreference.visible = false;

        // pin
        const pin = this.add.container(0, 0);

        // roomPin
        const roomPin = new RoomPin(this, 760, 335);
        roomPin.scaleX = 0.7;
        roomPin.scaleY = 0.7;
        pin.add(roomPin);

        // jellyfish0001
        const jellyfish0001 = this.add.sprite(747.5799159634506, 1077.5439830411378, "underwater-room", "jellyfish0001");
        jellyfish0001.setOrigin(0.49241373611256206, 6.334882300804742);
        jellyfish0001.visible = false;

        // lists
        const sort = [back, front, wheel, clam, shellback, shellfront, anvil, foreground, bigthing, bush, bushright, roomPin, jellyfish0001];

        // fishgroup0001 (components)
        new Animation(fishgroup0001);

        // fishone0015 (components)
        new Animation(fishone0015);

        // roomPin (prefab fields)
        roomPin.itemId = 7016;

        // jellyfish0001 (components)
        new Animation(jellyfish0001);

        this.pin = pin;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        if(this.world.client.hasItem(7016)){
            this.pin.visible = false
        }
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
