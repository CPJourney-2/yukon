import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { SimpleButton, Button, MoveTo, Zone, Animation } from '@components/components'


/* START OF COMPILED CODE */

export default class Cave extends RoomScene {

    constructor() {
        super("Cave");

        /** @type {Phaser.GameObjects.Container} */
        this.wall;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.wallMask;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'boiler': () => this.triggerRoom(804, 628, 611),
            'plaza': () => this.triggerRoom(300, 582, 588),
            'mine': () => this.triggerRoom(808, 0, 0)
        }

        this.secondaryPhysics = 'fair-cave-physics'

        this.music = 222

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cave-pack", "assets/media/rooms/cave/cave-pack.json");
        this.load.pack("fair-cave-pack", "assets/media/rooms/_fair/cave/fair-cave-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(751, 500, "fair-cave", "bg");

        // wall
        const wall = this.add.container(-646, 370);

        // wall1
        const wall1 = this.add.image(0, 0, "fair-cave", "wall1");
        wall.add(wall1);

        // wall2
        const wall2 = this.add.image(1387, 1.2, "fair-cave", "wall2");
        wall.add(wall2);

        // wallMask
        const wallMask = this.add.rectangle(813, 353, 890, 400);
        wallMask.visible = false;
        wallMask.isFilled = true;

        // merrygoround
        this.add.image(806, 292, "fair-cave", "merrygoround");

        // fg_1
        const fg_1 = this.add.image(-15, 880, "cave", "fg_1");
        fg_1.setOrigin(0, 1);

        // fg_3
        const fg_3 = this.add.image(0, 960, "cave", "fg_3");
        fg_3.setOrigin(0, 1);

        // door
        const door = this.add.image(102, 304, "fair-cave", "door0001");
        door.setOrigin(0, 0);

        // ladder_back
        const ladder_back = this.add.image(405, 759, "cave", "ladder_back");
        ladder_back.setOrigin(0.5068493150684932, 0.5);

        // ladder_front
        const ladder_front = this.add.image(373, 781, "cave", "ladder_front");

        // water_water_1
        const water_water_1 = this.add.image(812, 688, "cave", "water/water_1");
        water_water_1.setOrigin(0.5, 2.8333333333333335);

        // water_water_2
        const water_water_2 = this.add.image(810, 705, "cave", "water/water_2");
        water_water_2.setOrigin(0.5, 1.8571428571428572);

        // water_water_3
        const water_water_3 = this.add.image(808, 726, "cave", "water/water_3");
        water_water_3.setOrigin(0.5, 1.8571428571428572);

        // water_water_4
        const water_water_4 = this.add.image(806, 747, "cave", "water/water_4");
        water_water_4.setOrigin(0.5006675567423231, 1.8571428571428572);

        // water_water_5
        const water_water_5 = this.add.image(804, 768, "cave", "water/water_5");
        water_water_5.setOrigin(0.5006385696040868, 1.8571428571428572);

        // water_water_6
        const water_water_6 = this.add.image(802, 789, "cave", "water/water_6");
        water_water_6.setOrigin(0.5, 1.8571428571428572);

        // water_water_7
        const water_water_7 = this.add.image(800, 810, "cave", "water/water_7");
        water_water_7.setOrigin(0.5, 1.8571428571428572);

        // water_water_8
        const water_water_8 = this.add.image(798, 831, "cave", "water/water_8");
        water_water_8.setOrigin(0.5, 1.8571428571428572);

        // water_water_9
        const water_water_9 = this.add.image(797, 852, "cave", "water/water_9");
        water_water_9.setOrigin(0.5, 1.8571428571428572);

        // water_water_10
        const water_water_10 = this.add.image(796, 873, "cave", "water/water_10");
        water_water_10.setOrigin(0.5005313496280552, 1.8571428571428572);

        // water_water_11
        const water_water_11 = this.add.image(795, 894, "cave", "water/water_11");
        water_water_11.setOrigin(0.5, 1.8571428571428572);

        // line
        const line = this.add.image(807, 775, "cave", "line");
        line.setOrigin(0.5006337135614702, 2.0555555555555554);

        // zone
        const zone = this.add.rectangle(1333, 220, 115, 200);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // spinnything0001
        const spinnything0001 = this.add.sprite(800, 355, "fair-cave", "spinnything0001");

        // mullet
        this.add.image(502, 372, "fair-cave", "mullet");

        // horse
        this.add.image(808, 373, "fair-cave", "horse");

        // fluffy
        this.add.image(1115, 372, "fair-cave", "fluffy");

        // fg_2
        const fg_2 = this.add.image(1381, 830, "cave", "fg_2");
        fg_2.setOrigin(0.06493506493506493, 0.46387832699619774);

        // lists
        const sort = [line, water_water_11, water_water_10, water_water_9, water_water_8, water_water_7, water_water_6, water_water_5, water_water_4, water_water_3, water_water_2, water_water_1, ladder_front, ladder_back, fg_3, fg_1, fg_2];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.lazyName = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 190;
        doorMoveTo.y = 600;

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.callback = () => this.onZoneClick();

        // spinnything0001 (components)
        const spinnything0001Animation = new Animation(spinnything0001);
        spinnything0001Animation.key = "spinnything";
        spinnything0001Animation.end = 94;

        this.wall = wall;
        this.wallMask = wallMask;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        let mask = this.wallMask.createGeometryMask()
        this.wall.mask = mask

        this.tweens.add({
            targets: this.wall,
            x: { from: -646, to: 834.9 },
            duration: 41.66666 * 139,
            ease: 'Linear',
            repeat: -1
        })
    }

    onZoneClick() {
        this.world.client.sendMove(1266, 572)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
