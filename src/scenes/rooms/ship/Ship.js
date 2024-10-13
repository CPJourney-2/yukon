import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, SimpleButton, Zone } from '@components/components'

// You can write more code here

/* START OF COMPILED CODE */

export default class Ship extends RoomScene {

    constructor() {
        super("Ship");

        /** @type {Phaser.GameObjects.Sprite} */
        this.ladder;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.music = 380

        this.roomTriggers = {
            'beach': () => this.triggerRoom(400, 729, 384),
            'hold': () => this.triggerRoom(421, 10, 10),
            'nest': null
        }
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("ship-pack", "assets/media/rooms/ship/ship-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        this.add.image(721, 166, "ship", "sky");

        // sprite_202
        const sprite_202 = this.add.image(798.3336861106048, 542, "ship", "back");
        sprite_202.setOrigin(0.5149574910965415, 0.5);

        // store
        const store = this.add.image(452.1477745145639, 483.96470753398745, "ship", "store");
        store.setOrigin(0.5815908186039278, 0.6256605865127085);

        // door
        const door = this.add.sprite(612.7607670334029, 497.73136747477855, "ship", "door");
        door.setOrigin(0.752270166018701, 0.5375309789761876);

        // sprite_214
        this.add.image(274, 271, "ship", "sprite 214");

        // sprite_227
        const sprite_227 = this.add.image(376.86531958393294, 432.1716279878315, "ship", "sprite 227");
        sprite_227.setOrigin(0.5255521565542438, 0.7628074379125677);

        // sprite_247
        const sprite_247 = this.add.image(1095.1253338224562, 541.5591948758241, "ship", "sprite 247");
        sprite_247.setOrigin(0.5135585724452315, 0.9812999191396332);

        // sprite_216
        const sprite_216 = this.add.image(1376.9836083075725, 387.90164984543503, "ship", "sprite 216");
        sprite_216.setOrigin(0.5106913946475268, 0.5756621775055774);

        // sprite_218
        const sprite_218 = this.add.image(1408.03050312601, 418.33122982462606, "ship", "sprite 218");
        sprite_218.setOrigin(0.2992080102226282, 0.6195257692434427);

        // sprite_225
        const sprite_225 = this.add.image(787.1703633225827, 678.7926182544373, "ship", "sprite 225");
        sprite_225.setOrigin(0.5026975189576837, 0.43735744046391867);

        // sprite_230
        const sprite_230 = this.add.image(778.4199178378933, 487.0117149730374, "ship", "sprite 230");
        sprite_230.setOrigin(0.3906077925385143, 0.9372263687906317);

        // sprite_297
        const sprite_297 = this.add.image(695.1693140579166, 689.6649066967533, "ship", "sprite 297");
        sprite_297.setOrigin(0.6534188831972382, 0.7511328316227008);

        // puffle0388
        const puffle0388 = this.add.sprite(648.1813553161213, 1181.820528365679, "ship", "stupidredidiot0001");
        puffle0388.setOrigin(0.9053749234090324, 10.753142434957637);
        puffle0388.visible = false;

        // ladder
        const ladder = this.add.sprite(827.8073834451649, 933.5932345876297, "ship", "AHHHHHHHHHHHHHHHHHHH0001");
        ladder.setOrigin(0.4333932193444414, 1.718907560599709);

        // rectangle
        const rectangle = this.add.rectangle(797.1756714466426, 201.52689122966223, 128, 128);
        rectangle.scaleX = 0.5026819154253821;
        rectangle.setOrigin(0.5804385233283895, 0.4806786789748414);
        rectangle.fillColor = 7550775;
        rectangle.fillAlpha = 0.7;

        // lists
        const sort = [sprite_225, store, sprite_227, sprite_247, sprite_216, sprite_218, sprite_230, sprite_297, puffle0388, ladder, door];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 566;
        doorMoveTo.y = 509;

        // puffle0388 (components)
        const puffle0388Animation = new Animation(puffle0388);
        puffle0388Animation.key = "stupidredidiot";
        puffle0388Animation.end = 468;

        // ladder (components)
        const ladderAnimation = new Animation(ladder);
        ladderAnimation.key = "AHHHHHHHHHHHHHHHHHHH";
        ladderAnimation.end = 20;
        ladderAnimation.repeat = 0;
        ladderAnimation.autoPlay = false;
        ladderAnimation.stopOnOut = false;

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.hoverCallback = () => this.ladder.__Animation.play();
        rectangleSimpleButton.callback = () => this.triggerRoom(423, 10, 10);

        this.ladder = ladder;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onLadder() {

        this.ladder.__Animation.play()
    }
    // Write your code here
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
