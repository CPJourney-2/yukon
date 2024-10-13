
import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, SimpleButton, Zone, ShowHint } from '@components/components'

/* START OF COMPILED CODE */

export default class ShipHold extends RoomScene {

    constructor() {
        super("ShipHold");

        /** @type {Phaser.GameObjects.Image} */
        this.open_door;
        /** @type {Phaser.GameObjects.Container} */
        this.locked_door;
        /** @type {Phaser.GameObjects.Image} */
        this.interfaceIcons;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'ship': () => this.triggerRoom(420, 860, 600),
            'shipquarters': () => this.gotoShipQuarters(),
            'pirate': () => this.interface.loadWidget('RockHopper')
        }
        this.music = '491'

        this.doorLocked = true
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("shiphold-pack", "assets/media/rooms/shiphold/shiphold-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(760, 466, "shiphold", "bg");

        // open_door
        const open_door = this.add.image(1291.7391520285755, 518.2359580067902, "shiphold", "buttons/door");
        open_door.setOrigin(0.24099394306125368, 0.8411427295039214);
        open_door.visible = false;

        // locked_door
        const locked_door = this.add.container(1331.720642865176, 354.3380867933949);

        // door_1
        const door_1 = this.add.image(-39.98150712298843, 163.8978751206676, "shiphold", "buttons/door");
        door_1.setOrigin(0.24099394306125368, 0.8411427295039214);
        locked_door.add(door_1);

        // buttons_note_1
        const buttons_note_1 = this.add.image(5.2793571348240675, 51.66191320660511, "shiphold", "buttons/note");
        buttons_note_1.visible = false;
        locked_door.add(buttons_note_1);

        // stairs
        const stairs = this.add.image(1352.7487610383473, 631.446569597782, "shiphold", "stairs");
        stairs.setOrigin(0.4440146044121083, 0.6335236463828268);

        // table
        const table = this.add.image(345.8605656589173, 623.0856638403122, "shiphold", "table");
        table.setOrigin(0.6037444812112952, 0.6641660998003753);

        // bike
        const bike = this.add.image(131, 656, "shiphold", "bike");

        // puffle_treat
        const puffle_treat = this.add.image(40, 710, "shiphold", "puffle_treat");

        // puffle_bubbles
        const puffle_bubbles = this.add.image(54, 762, "shiphold", "puffle_bubbles");

        // suf
        const suf = this.add.image(59, 820, "shiphold", "suf");

        // fg
        const fg = this.add.image(760, 968.6354674775224, "shiphold", "fg");
        fg.setOrigin(0.5, 1.0351171778600183);

        // box
        this.add.image(823, 475, "shiphold", "box");

        // interfaceIcons
        const interfaceIcons = this.add.image(1431, 875.9999843877508, "shiphold", "buttons/map");

        // lists
        const sort = [stairs, fg, table, bike, puffle_treat, puffle_bubbles, suf];

        // open_door (components)
        const open_doorButton = new Button(open_door);
        open_doorButton.spriteName = "buttons/door";
        new MoveTo(open_door);

        // buttons_note_1 (components)
        const buttons_note_1Button = new Button(buttons_note_1);
        buttons_note_1Button.spriteName = "buttons/note";
        buttons_note_1Button.callback = () => this.interface.loadWidget('RockHopperNote');

        // interfaceIcons (components)
        const interfaceIconsButton = new Button(interfaceIcons);
        interfaceIconsButton.spriteName = "buttons/map";
        interfaceIconsButton.callback = () => this.interface.loadWidget('RockHopper');

        this.open_door = open_door;
        this.locked_door = locked_door;
        this.interfaceIcons = interfaceIcons;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create(){
        super.create()
        let player_flags = this.world.client.inventory.flag;

        if(player_flags.includes(609)){
            this.doorLocked = false
            this.locked_door.visible = false
            this.open_door.visible = true
        }

    }


    gotoShipQuarters() {
        if (this.doorLocked) {
            return;
        }
        this.triggerRoom(422, 308, 425)
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
