import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, ShowHint, Zone, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class IcePond extends RoomScene {

    constructor() {
        super("IcePond");

        /** @type {Phaser.GameObjects.Sprite} */
        this.fluffyjump0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fluffyjump0006;
        /** @type {Phaser.GameObjects.Sprite} */
        this.equipment;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fishinfishbox;
        /** @type {Phaser.GameObjects.Image} */
        this.interfaceIcons;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lodge': () => this.triggerRoom(220, 945, 460),
            'fishing': () => this.triggerGame(904),
            'fluffy': () => this.triggerGame(942)
        }

        this.music = "Ice Fishing"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("icepond-pack", "assets/media/rooms/icepond/icepond-pack.json");
    }

    /** @returns {void} */
    _create() {

        // hole
        this.add.image(788, 740, "icepond", "hole");

        // bg
        const bg = this.add.image(0, 0, "icepond", "bg");
        bg.setOrigin(0, 0);

        // fluffyjump0001
        const fluffyjump0001 = this.add.sprite(768, 687.6121340735475, "icepond", "fluffyjump0014");
        fluffyjump0001.setOrigin(0.5, 0.40652605485852394);
        fluffyjump0001.visible = false;

        // fluffyjump0006
        const fluffyjump0006 = this.add.sprite(760, 686, "icepond", "fluffydip0001");
        fluffyjump0006.setOrigin(0.11010329757480819, 0.42448198733514964);
        fluffyjump0006.visible = false;

        // door
        const door = this.add.image(137, 568, "icepond", "door");

        // fishingrod
        const fishingrod = this.add.image(270.612548828125, 665.5835325115999, "icepond", "fishingrod");
        fishingrod.setOrigin(0.6583965642335293, 0.9086618781078621);

        // bigtree_1
        const bigtree_1 = this.add.image(1147.0917875589907, 325.1105005086057, "icepond", "bigtreeside");
        bigtree_1.setOrigin(0.47419486517271636, 0.80267578762628);

        // bigtree
        const bigtree = this.add.image(1213.6187744140625, 440.637451171875, "icepond", "bigtreemain");
        bigtree.setOrigin(0.5315951604949455, 0.964478227792195);

        // fishbox
        const fishbox = this.add.image(607.2113683878787, 674.3308251140149, "icepond", "fishbox");
        fishbox.setOrigin(0.4547759809503713, 0.7320354732672985);

        // equipment
        const equipment = this.add.sprite(517, 710.7672675570568, "icepond", "equipment");
        equipment.setOrigin(0.5, 0.8926426460122885);

        // treefront
        const treefront = this.add.image(76.81526569226222, 983.5190189169656, "icepond", "treefront");
        treefront.setOrigin(0.6344542305217434, 0.9094472910939578);

        // holeside
        const holeside = this.add.image(640.7177043117371, 697.3535740539824, "icepond", "holeside");
        holeside.setOrigin(-0.007789495428456567, -0.23774189172267768);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(788, 740, 220, 90);

        // fishinfishbox
        const fishinfishbox = this.add.sprite(607.7741864690926, 677.5271514231778, "icepond", "fishinfishbox0018");
        fishinfishbox.setOrigin(0.44211197245909895, 1.7744554634798235);
        fishinfishbox.visible = false;

        // rectangle_2
        const rectangle_2 = this.add.rectangle(575, 646, 200, 150);

        // catalog0001
        const catalog0001 = this.add.sprite(250, 413, "icepond", "catalog0001");

        // interfaceIcons
        const interfaceIcons = this.add.image(1438.7424970510153, 879.3619857544014, "icepond", "catalogbtn");

        // lists
        const sort = [bigtree, equipment, treefront, bigtree_1, fishingrod, fishbox, holeside, fluffyjump0001, fluffyjump0006, fishinfishbox, catalog0001];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 147;
        doorMoveTo.y = 748;

        // rectangle_1 (components)
        const rectangle_1Zone = new Zone(rectangle_1);
        rectangle_1Zone.hoverCallback = () => {this.onFluffyHover()};
        rectangle_1Zone.hoverOutCallback = () => {this.onFluffyHoverOut()};
        rectangle_1Zone.callback = () => {this.onFluffyHoverOut()};
        const rectangle_1MoveTo = new MoveTo(rectangle_1);
        rectangle_1MoveTo.x = 785;
        rectangle_1MoveTo.y = 750;
        const rectangle_1ShowHint = new ShowHint(rectangle_1);
        rectangle_1ShowHint.text = "fluffy_hint";

        // rectangle_2 (components)
        const rectangle_2Zone = new Zone(rectangle_2);
        rectangle_2Zone.hoverCallback = () => {this.onFishHover()};
        rectangle_2Zone.hoverOutCallback = () => {this.onFishHoverOut()};
        const rectangle_2ShowHint = new ShowHint(rectangle_2);
        rectangle_2ShowHint.text = "fish_hint";
        const rectangle_2MoveTo = new MoveTo(rectangle_2);
        rectangle_2MoveTo.x = 582;
        rectangle_2MoveTo.y = 646;

        // catalog0001 (components)
        const catalog0001Animation = new Animation(catalog0001);
        catalog0001Animation.key = "catalog";
        catalog0001Animation.end = 7;
        catalog0001Animation.repeat = 0;
        catalog0001Animation.autoPlay = false;
        catalog0001Animation.onHover = true;
        const catalog0001SimpleButton = new SimpleButton(catalog0001);
        catalog0001SimpleButton.callback = () => {this.onCatalog()};

        // interfaceIcons (components)
        const interfaceIconsButton = new Button(interfaceIcons);
        interfaceIconsButton.spriteName = "catalogbtn";
        interfaceIconsButton.callback = () => {this.onCatalog()};

        this.fluffyjump0001 = fluffyjump0001;
        this.fluffyjump0006 = fluffyjump0006;
        this.equipment = equipment;
        this.fishinfishbox = fishinfishbox;
        this.interfaceIcons = interfaceIcons;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.fluffyjump0001.on("animationcomplete", () => {this.fluffyjump0001.play("icepondfluffyloop")})
        this.fluffyjump0006.on("animationcomplete", () => {this.fluffyjump0006.visible = false})
    }

    onFluffyHover() {
        this.fluffyjump0001.visible = true
        this.fluffyjump0001.play("icepondfluffyjump")
    }

    onFluffyHoverOut() {
        this.fluffyjump0006.visible = this.fluffyjump0001.visible
        this.fluffyjump0001.visible = false
        this.fluffyjump0006.play("icepondfluffydip")
    }

    onFishHover() {
        this.equipment.setTexture("icepond", "equipment-hover")
        this.fishinfishbox.visible = true
        this.fishinfishbox.play("fishinfishbox")
    }

    onFishHoverOut() {
        this.equipment.setTexture("icepond", "equipment")
        this.fishinfishbox.visible = false
    }

    onCatalog() {
        this.interface.loadWidget('LodgeCatalog')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
