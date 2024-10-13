import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, SimpleButton, Zone, ShowHint } from '@components/components'
// You can write more code here

/* START OF COMPILED CODE */

export default class OldBoiler extends RoomScene {

    constructor() {
        super("OldBoiler");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        // Write your code here.

        this.roomTriggers = {
            'boiler': () => this.triggerRoom(804, 460, 789),
        }
        this.music = 'betapartymusic'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("boilerbeta-pack", "assets/media/rooms/oldboiler/boilerbeta-pack.json");
    }

    /** @returns {void} */
    _create() {

        // boilerbeta
        this.add.image(760, 480, "bgOldBoiler");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(85, 501, 128, 128);
        rectangle_1.scaleX = 2.5017420905867516;
        rectangle_1.scaleY = 9.958506435162235;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 3223103;

        // rectangle
        const rectangle = this.add.rectangle(1498, 525, 128, 128);
        rectangle.scaleX = 2.5017420905867516;
        rectangle.scaleY = 9.958506435162235;
        rectangle.isFilled = true;
        rectangle.fillColor = 3223103;

        // rectangle_2
        const rectangle_2 = this.add.rectangle(949.892011215691, 456.003211830013, 128, 128);
        rectangle_2.scaleX = 1.1357439251176802;
        rectangle_2.scaleY = 1.5685665275129232;
        rectangle_2.setOrigin(0.4511059150930965, 0.883526977737022);

        // boiler
        const boiler = this.add.image(463.18711448459675, 550.2252739442891, "boilerandsmoke", "boiler");
        boiler.setOrigin(0.705161335188068, 0.9010438605588578);

        // smoke0001
        const smoke0001 = this.add.sprite(533, 129, "boilerandsmoke", "smoke0001");
        smoke0001.scaleX = 0.5263283603845028;
        smoke0001.scaleY = 0.5263283603845028;

        // lists
        const sort = [boiler];

        // rectangle_2 (components)
        new MoveTo(rectangle_2);
        new SimpleButton(rectangle_2);

        // smoke0001 (components)
        const smoke0001Animation = new Animation(smoke0001);
        smoke0001Animation.key = "smoke";
        smoke0001Animation.end = 14;
        smoke0001Animation.repeatDelay = 5000;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create(){
        super.create()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
