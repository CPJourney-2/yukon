import { SimpleButton, Button, ShowHint } from '@components/components'

import BaseContainer from '@scenes/base/BaseContainer'
import AdventDoor from './AdventDoor'

/* START OF COMPILED CODE */

export default class AdventCalendar extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.treeLights;
        /** @type {Phaser.GameObjects.Image} */
        this.treeLights2;


        // tree
        const tree = scene.add.image(-346, 64, "adventcalendar", "tree");
        tree.tintTopLeft = 13294570;
        tree.tintTopRight = 13294570;
        tree.tintBottomLeft = 13294570;
        tree.tintBottomRight = 13294570;
        this.add(tree);

        // tree_1
        const tree_1 = scene.add.image(329, 64, "adventcalendar", "tree");
        tree_1.flipX = true;
        tree_1.tintTopLeft = 13294570;
        tree_1.tintTopRight = 13294570;
        tree_1.tintBottomLeft = 13294570;
        tree_1.tintBottomRight = 13294570;
        this.add(tree_1);

        // treeLights
        const treeLights = scene.add.image(-381, 70, "adventcalendar", "treelights0001");
        this.add(treeLights);

        // treeLights2
        const treeLights2 = scene.add.image(364, 52, "adventcalendar", "treelights0001");
        treeLights2.flipX = true;
        this.add(treeLights2);

        // house
        const house = scene.add.image(0, 0, "adventcalendar", "house");
        house.tintTopLeft = 13294570;
        house.tintTopRight = 13294570;
        house.tintBottomLeft = 13294570;
        house.tintBottomRight = 13294570;
        this.add(house);

        // door15
        const door15 = new AdventDoor(scene, 29, -73, "adventcalendar", "door15/rattle0001");
        this.add(door15);

        // door16
        const door16 = new AdventDoor(scene, 124, -60, "adventcalendar", "door16/rattle0001");
        this.add(door16);

        // door14
        const door14 = new AdventDoor(scene, -69, -59);
        this.add(door14);

        // door17
        const door17 = new AdventDoor(scene, -164, 19, "adventcalendar", "door17/rattle0001");
        this.add(door17);

        // door18
        const door18 = new AdventDoor(scene, -68, 35, "adventcalendar", "door18/rattle0001");
        this.add(door18);

        // door19
        const door19 = new AdventDoor(scene, 32, 23, "adventcalendar", "door19/rattle0001");
        this.add(door19);

        // door20
        const door20 = new AdventDoor(scene, 133, 37, "adventcalendar", "door20/rattle0001");
        this.add(door20);

        // door21
        const door21 = new AdventDoor(scene, 230, 26, "adventcalendar", "door21/rattle0001");
        this.add(door21);

        // door22
        const door22 = new AdventDoor(scene, -145, 148, "adventcalendar", "door22/rattle0001");
        this.add(door22);

        // door23
        const door23 = new AdventDoor(scene, -50, 150, "adventcalendar", "door23/rattle0001");
        this.add(door23);

        // door24
        const door24 = new AdventDoor(scene, 55, 155, "adventcalendar", "door24/rattle0001");
        this.add(door24);

        // door25
        const door25 = new AdventDoor(scene, 179, 148, "adventcalendar", "door25/rattle0001");
        this.add(door25);

        // door15 (prefab fields)
        door15.doorNum = 15;
        door15.item = 5191;
        door15.timeStamp = "1702627200";

        // door16 (prefab fields)
        door16.doorNum = 16;
        door16.item = 1962;
        door16.timeStamp = "1702713600";

        // door14 (prefab fields)
        door14.doorNum = 14;
        door14.item = 24333;
        door14.timeStamp = "1702540800";

        // door17 (prefab fields)
        door17.doorNum = 17;
        door17.item = 4763;
        door17.timeStamp = "1702800000";

        // door18 (prefab fields)
        door18.doorNum = 18;
        door18.item = 3252;
        door18.timeStamp = "1702886400";

        // door19 (prefab fields)
        door19.doorNum = 19;
        door19.item = 24240;
        door19.timeStamp = "1702972800";

        // door20 (prefab fields)
        door20.doorNum = 20;
        door20.item = 24331;
        door20.timeStamp = "1703059200";

        // door21 (prefab fields)
        door21.doorNum = 21;
        door21.item = 173;
        door21.timeStamp = "1703145600";

        // door22 (prefab fields)
        door22.doorNum = 22;
        door22.item = 1904;
        door22.timeStamp = "1703232000";

        // door23 (prefab fields)
        door23.doorNum = 23;
        door23.item = 3254;
        door23.timeStamp = "1703318400";

        // door24 (prefab fields)
        door24.doorNum = 24;
        door24.item = 24006;
        door24.timeStamp = "1703404800";
        door24.isIgloo = false;

        // door25 (prefab fields)
        door25.doorNum = 25;
        door25.item = 25;
        door25.timeStamp = "1703491200";

        this.treeLights = treeLights;
        this.treeLights2 = treeLights2;

        /* START-USER-CTR-CODE */
        //initialize the doors
        door14.init()
        door15.init()
        door16.init()
        door17.init()
        door18.init()
        door19.init()
        door20.init()
        door21.init()
        door22.init()
        door23.init()
        door24.init()
        door25.init()

        let days = [
            "1703491200", // dec 25
            "1703404800", // dec 24
            "1703318400", // dec 23
            "1703232000", // dec 22
            "1703145600", // dec 21
            "1703059200", // dec 20
            "1702972800", // dec 19
            "1702886400", // dec 18
            "1702800000", // dec 17
            "1702713600", // dec 16
            "1702627200", // dec 15
            "1702540800"  // dec 14
        ]

        //set the tree lights according to the day
        let frame = null
        for(let i = 0; i < days.length; i++) {
            if((parseInt(days[i]) * 1000) < Date.now()) {
                frame = `treelights0${i > 3 ? '00' : '0'}${13 - i}`
                //console.log(frame)
                this.treeLights.setFrame(frame)
                this.treeLights2.setFrame(frame)
                break
            }
        }
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
