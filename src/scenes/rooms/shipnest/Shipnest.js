import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'

// You can write more code here

/* START OF COMPILED CODE */

export default class Shipnest extends RoomScene {

    constructor() {
        super("Shipnest");

        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'ship': () => this.triggerRoom(420, 921, 546)
        }
        this.music = 380
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("shipnest-pack", "assets/media/rooms/shipnest/shipnest-pack.json");
    }

    /** @returns {void} */
    _create() {

        // crowsnesttt
        this.add.image(763, 494, "crowsnesttt");

        // sprite_17
        this.add.image(763, 493, "shipnest", "sprite 17");

        // ship_nest
        this.add.image(736, 464, "shipnest_new_bg", "ship_nest");

        // sprite
        const sprite = this.add.image(969.3983445202764, 458.38435412087244, "shipnest", "sprite 230001");
        sprite.setOrigin(0.4205367507623961, 0.8711522617566348);

        // sprite_25
        const sprite_25 = this.add.image(1041.5364618646422, 522.5803943936814, "shipnest", "sprite 25");
        sprite_25.setOrigin(0.21014584745856882, 0.5822141344853161);

        // sprite_27
        const sprite_27 = this.add.image(386.9212831878096, 615.6629958090703, "shipnest", "sprite 27");
        sprite_27.setOrigin(0.5833889895123372, 0.24556561820956727);

        // sprite_88
        const sprite_88 = this.add.image(785.3297501563495, 835.2117508298551, "shipnest", "sprite 88");
        sprite_88.setOrigin(0.5334924391769263, 1.0954632380060623);

        // sprite_670001
        const sprite_670001 = this.add.sprite(468.80394393681485, 485.513746739974, "shipnest", "cannon0001");
        sprite_670001.setOrigin(0.8016297791182059, 0.8268773087777297);

        // sprite_85
        const sprite_85 = this.add.image(762.1240711240335, 513.8498148967462, "shipnest", "sprite 85");
        sprite_85.setOrigin(0.9475238971584543, 0.9306626526607483);

        // lists
        const sort = [sprite_670001, sprite_85, sprite, sprite_25, sprite_27, sprite_88];

        // sprite_670001 (components)
        const sprite_670001Animation = new Animation(sprite_670001);
        sprite_670001Animation.key = "cannon";
        sprite_670001Animation.end = 43;
        sprite_670001Animation.repeat = 0;
        sprite_670001Animation.autoPlay = false;
        sprite_670001Animation.onHover = true;
        sprite_670001Animation.stopOnOut = false;
        const sprite_670001SimpleButton = new SimpleButton(sprite_670001);
        sprite_670001SimpleButton.pixelPerfect = true;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
