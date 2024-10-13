import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, SimpleButton, Zone } from '@components/components'


/* START OF COMPILED CODE */

export default class ShopOffice extends RoomScene {

    constructor() {
        super("ShopOffice");

        /** @type {Phaser.GameObjects.Sprite} */
        this.recycle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.computerscreen;
        /** @type {Phaser.GameObjects.Sprite} */
        this.jesterhat;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'shop': () => this.triggerRoom(130, 500, 720)
        }

        this.musics = [1139, 1146]
        this.music = 1139
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("shopoffice-pack", "assets/media/rooms/shopoffice/shopoffice-pack.json");
    }

    /** @returns {void} */
    _create() {

        // rooftopdoor
        this.add.image(62, 567, "shopoffice", "rooftopdoor");

        // bg
        this.add.image(772, 486, "shopoffice", "bg");

        // coatrack
        const coatrack = this.add.image(475.6184924017001, 419.6283699559723, "shopoffice", "coatrack");
        coatrack.setOrigin(0.5754447558551955, 0.8434037163064072);

        // ommie
        const ommie = this.add.image(573.1701076855928, 422.7266617466217, "shopoffice", "ommie");
        ommie.setOrigin(0.49107642672680457, 0.7827105686441944);

        // recycle
        const recycle = this.add.sprite(641.36083984375, 441.6550895228872, "shopoffice", "recycle0004");
        recycle.setOrigin(0.41903489615540035, 0.8293687158724804);

        // desk
        const desk = this.add.image(791.8505249023438, 455.3551123936032, "shopoffice", "desk");
        desk.setOrigin(0.48501999432478066, 0.8743165974156544);

        // computerscreen
        const computerscreen = this.add.sprite(798.5, 469.6960816326898, "shopoffice", "computerscreen0001");
        computerscreen.scaleX = 0.995;
        computerscreen.scaleY = 0.995;
        computerscreen.setOrigin(0.5, 2.382062143136927);

        // nightstand
        const nightstand = this.add.image(1309.4686936275505, 551.6930445501202, "shopoffice", "nightstand");
        nightstand.setOrigin(0.3053623063429041, 0.5670403395587159);

        // jesterhat
        const jesterhat = this.add.sprite(1405, 585.7116049479986, "shopoffice", "jesterhat0001");
        jesterhat.setOrigin(0.5, 1.8840717447924393);

        // couch
        const couch = this.add.image(1410.5232322505356, 603.744107501785, "shopoffice", "couch");
        couch.setOrigin(0.4522218886156289, 0.37905791353830837);

        // coucharm
        const coucharm = this.add.image(1451.658898578363, 772.484223280655, "shopoffice", "coucharm");
        coucharm.setOrigin(0.2454877039874767, 0.9268919243375473);

        // cornerbox
        const cornerbox = this.add.image(1498.016520905462, 882.8382618223292, "shopoffice", "cornerbox");
        cornerbox.setOrigin(0.3647554260985615, 0.5723817649869716);

        // deskchair
        const deskchair = this.add.container(570.7859819929258, 544.5465649320217);

        // chair
        const chair = this.add.image(8.329496522699174, 27.304082040634512, "shopoffice", "chair");
        chair.setOrigin(0.43934981042164406, 0.36385580567621356);
        deskchair.add(chair);

        // chair_back
        const chair_back = this.add.image(-3.7859819929258265, -38.54656493202174, "shopoffice", "chair_back");
        deskchair.add(chair_back);

        // chair_arm
        const chair_arm = this.add.image(544.1365231671886, 563.5039055742214, "shopoffice", "chair_arm");
        chair_arm.setOrigin(0.5591791095604686, 0.7234873994370731);

        // goToShop
        const goToShop = this.add.rectangle(278, 545, 128, 250);
        goToShop.angle = -8;
        goToShop.setOrigin(0.29764213428248776, 1.0923024246226747);

        // funnyHat
        const funnyHat = this.add.rectangle(1412, 444, 128, 80);

        // recycleBinButton
        const recycleBinButton = this.add.rectangle(643, 413, 70, 90);

        // changeScreenBtn
        const changeScreenBtn = this.add.rectangle(799, 323, 95, 80);

        // lists
        const sort = [coatrack, ommie, recycle, desk, coucharm, nightstand, cornerbox, deskchair, couch, jesterhat, computerscreen, chair_arm];

        // goToShop (components)
        new MoveTo(goToShop);
        new SimpleButton(goToShop);

        // funnyHat (components)
        const funnyHatZone = new Zone(funnyHat);
        funnyHatZone.hoverCallback = () => this.jesterAnim();

        // recycleBinButton (components)
        const recycleBinButtonSimpleButton = new SimpleButton(recycleBinButton);
        recycleBinButtonSimpleButton.callback = () => this.changeRecycle();

        // changeScreenBtn (components)
        const changeScreenBtnSimpleButton = new SimpleButton(changeScreenBtn);
        changeScreenBtnSimpleButton.callback = () => this.changeScreen();

        this.recycle = recycle;
        this.computerscreen = computerscreen;
        this.jesterhat = jesterhat;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.recycleState = 1
        this.screenState = 1
        this.music = 1139
        this.recycle.setFrame(`recycle000${this.recycleState}`)
        this.computerscreen.setFrame(`computerscreen000${this.screenState}`)
    }

    jesterAnim(){
        this.jesterhat.play('jesterhat')
        this.soundManager.play('hatjingle')
    }

    changeRecycle(){
        this.recycleState++;
        if (this.recycleState > 4) {
            this.recycleState = 1
        }

        this.recycle.setFrame(`recycle000${this.recycleState}`);
    }

    changeScreen(){
        this.music = 1146
        this.screenState++;
        if (this.screenState > 2) {
            this.screenState = 1
            this.music = 1139
        }

        this.computerscreen.setFrame(`computerscreen000${this.screenState}`)
        this.setMusic()

    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
