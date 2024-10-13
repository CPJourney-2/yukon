import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, ShowHint, Zone, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Dock extends RoomScene {

    constructor() {
        super("Dock");

        /** @type {Phaser.GameObjects.Sprite} */
        this.boat;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rings;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cataloganim;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'beach': () => this.triggerRoom(400, 950, 430),
            'village': () => this.triggerRoom(200, 1300, 760),
            'town': () => this.triggerRoom(100, 368, 640),
            'hydro': () => this.triggerGame(903)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dock-pack", "assets/media/rooms/dock/dock-pack.json");
        this.load.pack("prefair-dock-pack", "assets/media/rooms/_prefair/dock/prefair-dock-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-48, 0, "dock", "bg");
        bg.setOrigin(0, 0);

        // post_1
        const post_1 = this.add.image(443, 592, "dock", "post_1");
        post_1.setOrigin(0.55, 0.54782609);

        // boat
        const boat = this.add.sprite(231, 639, "dock", "boat");
        boat.setOrigin(0.49477351916376305, 0.5091743119266054);

        // dock
        const dock = this.add.image(187, 593, "dock", "dock");
        dock.setOrigin(0, 0);

        // post_2
        const post_2 = this.add.image(572, 619, "dock", "post_2");
        post_2.setOrigin(0.43243243243243246, 0.49137931034482757);

        // post_3
        const post_3 = this.add.image(367, 882, "dock", "post_3");
        post_3.setOrigin(0.5384615384615384, 0.806282722513089);

        // post_4
        const post_4 = this.add.image(164, 832, "dock", "post_4");
        post_4.setOrigin(0.4943820224719101, 0.7960526315789473);

        // box
        const box = this.add.image(434, 652, "dock", "box");
        box.setOrigin(0.4915254237288136, 0.7142857142857143);

        // bollard_1
        const bollard_1 = this.add.image(353, 689, "dock", "bollard_1");
        bollard_1.setOrigin(0.5, 0.9302325581395349);

        // bollard_2
        const bollard_2 = this.add.image(279, 732, "dock", "bollard_2");
        bollard_2.setOrigin(0.5, 0.9215686274509803);

        // rings
        const rings = this.add.sprite(632, 668, "dock", "rings0001");
        rings.setOrigin(0.4975124378109453, 0.8127659574468085);

        // right_sign
        this.add.image(1366, 270, "dock", "right_sign");

        // left_sign
        this.add.image(120, 345, "dock", "left_sign");

        // container_1
        const container_1 = this.add.container(740, 746);

        // boards
        const boards = this.add.image(0, 0, "dock", "boards");
        boards.setOrigin(0.5, 0.7721088435374149);
        container_1.add(boards);

        // cataloganim
        const cataloganim = this.add.sprite(38.27641704023847, -41.71048207703632, "dock-catalogbtn", "cataloganim0001");
        cataloganim.setOrigin(0.43467398316207845, 0.45159826184048385);
        container_1.add(cataloganim);

        // zone
        const zone = this.add.rectangle(631, 633, 135, 160);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // catalogbtn
        const catalogbtn = this.add.image(1440, 888, "dock-catalogbtn", "catalogbtn");

        // planks_shadow
        this.add.image(974, 524, "prefair-dock", "planks_shadow");

        // planks
        const planks = this.add.image(982.020481251074, 501.71558291573587, "prefair-dock", "planks");
        planks.setOrigin(0.5439881123347095, 0.4470215160363186);

        // crate_shadow
        this.add.image(666, 340, "prefair-dock", "crate_shadow");

        // crate
        const crate = this.add.image(662.0721436515685, 314.56714500790486, "prefair-dock", "crate");
        crate.setOrigin(0.5054702445408047, 0.7267021742532295);

        // lists
        const sort = [post_3, post_4, post_1, post_2, rings, bollard_2, bollard_1, dock, box, container_1, crate];

        // boat (components)
        const boatButton = new Button(boat);
        boatButton.spriteName = "boat";
        boatButton.pixelPerfect = true;
        new MoveTo(boat);
        const boatShowHint = new ShowHint(boat);
        boatShowHint.text = "hydro_hint";

        // rings (components)
        const ringsAnimation = new Animation(rings);
        ringsAnimation.key = "rings";
        ringsAnimation.end = 34;
        ringsAnimation.repeat = 0;
        ringsAnimation.autoPlay = false;
        ringsAnimation.stopOnOut = false;

        // cataloganim (components)
        const cataloganimAnimation = new Animation(cataloganim);
        cataloganimAnimation.key = "cataloganim";
        cataloganimAnimation.end = 7;
        cataloganimAnimation.repeat = 0;
        cataloganimAnimation.autoPlay = false;
        const cataloganimSimpleButton = new SimpleButton(cataloganim);
        cataloganimSimpleButton.hoverCallback = () => this.onCatalogHover();
        cataloganimSimpleButton.hoverOutCallback = () => this.onCatalogOut();
        cataloganimSimpleButton.callback = () => this.onCatalog();

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.hoverCallback = () => this.onRingsOver();

        // catalogbtn (components)
        const catalogbtnButton = new Button(catalogbtn);
        catalogbtnButton.spriteName = "catalogbtn";
        catalogbtnButton.callback = () => this.onCatalog();
        catalogbtnButton.activeFrame = true;

        this.boat = boat;
        this.rings = rings;
        this.cataloganim = cataloganim;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.up = false
        this.time.addEvent({
            delay: 1500,
            callback: () => this.floatBoat(),
            loop: true
        })
    }

    onRingsOver() {
        this.rings.__Animation.play()
    }

    floatBoat() {
        let value = (this.up) ? -2 : 2
        this.boat.y += value
        this.up = !this.up
    }

    onCatalog() {
        this.interface.loadWidget('DockCatalog')    
    }

    onCatalogHover() {
        this.cataloganim.__Animation.play()
    }

    onCatalogOut() {
        this.cataloganim.stop()
        this.cataloganim.setFrame('cataloganim0001')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
