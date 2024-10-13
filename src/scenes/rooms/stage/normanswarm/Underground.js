import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, GlobalTrigger, MoveTo, SimpleButton } from '@components/components'
// You can write more code here

/* START OF COMPILED CODE */

export default class Underground extends RoomScene {

    constructor() {
        super("Underground");

        /** @type {Phaser.GameObjects.Sprite} */
        this.mailbox;
        /** @type {Phaser.GameObjects.Sprite} */
        this.chestGlow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.chest;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.chestTrigger;
        /** @type {Phaser.GameObjects.Polygon} */
        this.chestBtn;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'stage': () => this.triggerRoom(340),
            'exit': () => this.triggerRoom(300),
            'freeitem': () => this.onFreeItem()
        }
        this.music = 42
        this.physicsKey = 'normanswarm-underground-physics'
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("normanswarm-underground-pack", "assets/media/rooms/stage/normanswarm/underground/normanswarm-underground-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_bg
        this.add.image(718, 470, "normanswarm-underground", "bg/bg");

        // doorwayleft
        this.add.image(136, 405, "normanswarm-underground", "doorwayleft");

        // rocksleft
        this.add.image(262, 357, "normanswarm-underground", "rocksleft");

        // bg_ripple10001
        const bg_ripple10001 = this.add.sprite(1040, 538, "normanswarm-underground", "bg/ripple10001");
        bg_ripple10001.scaleX = 1.508071921520389;
        bg_ripple10001.scaleY = 1.4646954230206932;

        // bg_ripple20001
        const bg_ripple20001 = this.add.sprite(592, 678, "normanswarm-underground", "bg/ripple20001");
        bg_ripple20001.scaleX = 1.4337659753637542;
        bg_ripple20001.scaleY = 1.840046827603036;

        // bg_ripple30001
        const bg_ripple30001 = this.add.sprite(322, 813, "normanswarm-underground", "bg/ripple30001");
        bg_ripple30001.scaleX = 1.4293207141299724;
        bg_ripple30001.scaleY = 1.9735489429730566;

        // bg_ripple40001
        const bg_ripple40001 = this.add.sprite(267, 849, "normanswarm-underground", "bg/ripple40001");
        bg_ripple40001.scaleX = 1.3601697138943698;
        bg_ripple40001.scaleY = 1.6875619805740185;

        // crystals2_anim0001
        const crystals2_anim0001 = this.add.sprite(604.3908425512183, 367.4618955109947, "normanswarm-underground", "crystals2/anim0001");
        crystals2_anim0001.setOrigin(0.5363065848730144, 0.6857997238693787);

        // prepepepeppepe
        const prepepepeppepe = this.add.image(760, 480, "prepepepeppepe");
        prepepepeppepe.visible = false;
        prepepepeppepe.alpha = 0.5;
        prepepepeppepe.alphaTopLeft = 0.5;
        prepepepeppepe.alphaTopRight = 0.5;
        prepepepeppepe.alphaBottomLeft = 0.5;
        prepepepeppepe.alphaBottomRight = 0.5;

        // crystals2_shine10001
        const crystals2_shine10001 = this.add.sprite(643, 394.74714375009125, "normanswarm-underground", "crystals2/shine10001");
        crystals2_shine10001.setOrigin(0.5, 1.2002344904929174);

        // bg_waterfall0001
        const bg_waterfall0001 = this.add.sprite(739, 158, "normanswarm-underground", "bg/waterfall0001");
        bg_waterfall0001.scaleX = 0.956617705507833;

        // bg_ripple50001
        const bg_ripple50001 = this.add.sprite(326, 887, "normanswarm-underground", "bg/ripple50001");
        bg_ripple50001.scaleX = 1.2225444922435371;
        bg_ripple50001.scaleY = 1.456587083904986;

        // roots
        const roots = this.add.image(726.0154418945312, 433.191220024855, "normanswarm-underground", "roots");
        roots.setOrigin(0.7493136528360147, 0.7716771132027204);

        // mushroomshadows
        this.add.image(146, 203, "normanswarm-underground", "mushroomshadows");

        // rocksright
        const rocksright = this.add.image(1426, 573, "normanswarm-underground", "rocksright");

        // mailbox
        const mailbox = this.add.sprite(404.40308977847485, 588.8194714341041, "normanswarm-underground", "mailbox0001");
        mailbox.setOrigin(0.2815100905414338, 0.9066275621418702);

        // flowers2
        const flowers2 = this.add.image(1369.9910454854282, 931.5941323608688, "normanswarm-underground", "flowers2");
        flowers2.setOrigin(0.4805546149633224, 0.7510921088054116);

        // costumebtn
        const costumebtn = this.add.image(1431, 1005, "stage-basic", "costumebtn");
        costumebtn.setOrigin(0.5238205532906157, 1.5775175497198353);

        // scriptbtn
        const scriptbtn = this.add.image(1438, 994, "stage-basic", "scriptbtn");
        scriptbtn.setOrigin(0.5600749118702879, 2.1517673137045117);

        // mushroom1
        const mushroom1 = this.add.image(18.053093618412404, 338.4602850660403, "normanswarm-underground", "mushroom1");
        mushroom1.setOrigin(0.5070677424054524, 0.1680465768047857);

        // mushroom2
        const mushroom2 = this.add.image(89.23376529424372, 227.1808218548448, "normanswarm-underground", "mushroom2");
        mushroom2.setOrigin(0.5759861198400231, 0.14103940056541026);

        // mushroom3
        const mushroom3 = this.add.image(140.52847095030384, 144.82717506757265, "normanswarm-underground", "mushroom3");
        mushroom3.setOrigin(0.5505266506731802, 0.18290407682144189);

        // mushroom4
        const mushroom4 = this.add.image(207.88446548309525, 57.346603550714136, "normanswarm-underground", "mushroom4");
        mushroom4.setOrigin(0.5613941955471756, 0.1942948819661251);

        // mushroom5
        const mushroom5 = this.add.image(279.36492483783644, -12.3082319730341, "normanswarm-underground", "mushroom5");
        mushroom5.setOrigin(0.4957377505895063, 0.20317139159745543);

        // flowers1
        const flowers1 = this.add.image(-17.692128342501235, 963.2863536354915, "normanswarm-underground", "flowers1");
        flowers1.setOrigin(0.4159253551185539, 0.9665560635834168);

        // crystals1_anim0001
        const crystals1_anim0001 = this.add.sprite(3.1704301297293966, 990.2895163621588, "normanswarm-underground", "crystals1/anim0001");
        crystals1_anim0001.setOrigin(0.5083432371834984, 0.6040297386317462);

        // crystals1_shine0001
        const crystals1_shine0001 = this.add.sprite(-23, 1060.5215064864703, "normanswarm-underground", "crystals1/shine0001");
        crystals1_shine0001.setOrigin(0.5, 1.3006136691235877);

        // stone1
        const stone1 = this.add.image(1038, 522, "normanswarm-underground", "stone1");

        // stone2
        const stone2 = this.add.image(609, 648, "normanswarm-underground", "stone2");

        // stone3
        const stone3 = this.add.image(348, 797, "normanswarm-underground", "stone3");

        // stone4
        const stone4 = this.add.image(294, 841, "normanswarm-underground", "stone4");

        // stone5
        const stone5 = this.add.image(339, 880, "normanswarm-underground", "stone5");

        // crystals3_anim0001
        const crystals3_anim0001 = this.add.sprite(961.4349891404424, 311.8960870489461, "normanswarm-underground", "crystals3/anim0001");
        crystals3_anim0001.setOrigin(0.02929504636210636, 0.7922077298109114);

        // crystals3_shine0001
        const crystals3_shine0001 = this.add.sprite(1059.9589165709065, 343.593528384259, "normanswarm-underground", "crystals3/shine0001");
        crystals3_shine0001.angle = -20;
        crystals3_shine0001.setOrigin(-0.31701716811858976, 1.5748198214552263);

        // chestGlow
        const chestGlow = this.add.sprite(1117.5313608907038, 380.1288727727417, "stage-normanswarm", "shine0031");
        chestGlow.scaleX = 2.1749268501447503;
        chestGlow.scaleY = 1.4672859704556227;
        chestGlow.setOrigin(0.32782410408201756, 0.8075639768522248);
        chestGlow.visible = false;

        // gem2
        const gem2 = this.add.image(1208.8076665349372, 317.9993299083695, "normanswarm-underground", "gem2");
        gem2.scaleX = 0.7;
        gem2.scaleY = 0.7;
        gem2.setOrigin(0.5081830450728637, 0.7173843712834982);

        // gem1
        const gem1 = this.add.image(1145, 393, "normanswarm-underground", "gem1");
        gem1.scaleX = 0.7;
        gem1.scaleY = 0.7;
        gem1.setOrigin(0.6004352167797657, 0.8513349426977197);

        // chest
        const chest = this.add.sprite(1135.1745919005268, 418.406978706858, "normanswarm-underground", "chest0001");
        chest.setOrigin(0.28970510797063914, 0.6918752638851349);

        // crystals4_anim0001
        const crystals4_anim0001 = this.add.sprite(1312.3308627038423, 527.1173384717413, "normanswarm-underground", "crystals4/anim0001");
        crystals4_anim0001.setOrigin(0.08508121764169023, 0.7784916827241914);

        // crystals4_shine0001
        const crystals4_shine0001 = this.add.sprite(1421.5648566240563, 574.2258693346753, "normanswarm-underground", "crystals4/shine0001");
        crystals4_shine0001.setOrigin(0.46395237873528355, 1.5543929219929535);

        // bg_idk
        this.add.image(723, 213, "normanswarm-underground", "bg/idk");

        // lights
        const lights = this.add.image(709, 749, "normanswarm-underground", "lights");
        lights.setOrigin(0.5, 1.2245701953681243);

        // chestTrigger
        const chestTrigger = this.add.rectangle(847, 493, 220, 100);
        chestTrigger.isFilled = true;
        chestTrigger.fillColor = 65280;
        chestTrigger.fillAlpha = 0.5;

        // chestBtn
        const chestBtn = this.add.polygon(1131.2335449281659, 483.7523547313773, "231.1166994915045 148.80699689889514 54.91836477203151 60.14668834578464 41.45097613105281 29.845063903582286 113.27704888293988 -8.312537245857698 128.98900229741503 -58.81524464952821 169.39116822035157 -58.81524464952821 316.41016088437027 -6.067972472361191 344.9671275448238 71.82583503106338");
        chestBtn.setOrigin(0.28082045891511886, 0.5719635519091576);

        // lists
        const sort = [costumebtn, scriptbtn, mailbox, roots, mushroom1, mushroom4, mushroom3, mushroom2, flowers2, flowers1, crystals1_anim0001, crystals1_shine0001, stone1, stone2, stone3, stone4, stone5, crystals2_anim0001, crystals2_shine10001, crystals3_anim0001, crystals3_shine0001, crystals4_anim0001, chest, crystals4_shine0001, rocksright, lights, chestGlow, gem1, gem2];

        // bg_ripple10001 (components)
        const bg_ripple10001Animation = new Animation(bg_ripple10001);
        bg_ripple10001Animation.key = "bg/ripple1";
        bg_ripple10001Animation.end = 30;

        // bg_ripple20001 (components)
        const bg_ripple20001Animation = new Animation(bg_ripple20001);
        bg_ripple20001Animation.key = "bg/ripple2";
        bg_ripple20001Animation.end = 30;

        // bg_ripple30001 (components)
        const bg_ripple30001Animation = new Animation(bg_ripple30001);
        bg_ripple30001Animation.key = "bg/ripple3";
        bg_ripple30001Animation.end = 30;

        // bg_ripple40001 (components)
        const bg_ripple40001Animation = new Animation(bg_ripple40001);
        bg_ripple40001Animation.key = "bg/ripple4";
        bg_ripple40001Animation.end = 30;

        // crystals2_shine10001 (components)
        const crystals2_shine10001Animation = new Animation(crystals2_shine10001);
        crystals2_shine10001Animation.key = "crystals2/shine";
        crystals2_shine10001Animation.end = 52;

        // bg_waterfall0001 (components)
        const bg_waterfall0001Animation = new Animation(bg_waterfall0001);
        bg_waterfall0001Animation.key = "bg/waterfall";
        bg_waterfall0001Animation.end = 30;

        // bg_ripple50001 (components)
        const bg_ripple50001Animation = new Animation(bg_ripple50001);
        bg_ripple50001Animation.key = "bg/ripple5";
        bg_ripple50001Animation.end = 30;

        // mailbox (components)
        const mailboxSimpleButton = new SimpleButton(mailbox);
        mailboxSimpleButton.callback = () => this.onMailbox();
        mailboxSimpleButton.pixelPerfect = true;
        const mailboxAnimation = new Animation(mailbox);
        mailboxAnimation.key = "mailbox";
        mailboxAnimation.end = 18;
        mailboxAnimation.repeat = 0;
        mailboxAnimation.autoPlay = false;

        // costumebtn (components)
        const costumebtnButton = new Button(costumebtn);
        costumebtnButton.spriteName = "costumebtn";
        costumebtnButton.callback = () => this.interface.loadWidget("NormanSwarmCatalog");

        // scriptbtn (components)
        const scriptbtnButton = new Button(scriptbtn);
        scriptbtnButton.spriteName = "scriptbtn";
        scriptbtnButton.callback = () => this.interface.loadWidget('StageScript',true);

        // crystals1_shine0001 (components)
        const crystals1_shine0001Animation = new Animation(crystals1_shine0001);
        crystals1_shine0001Animation.key = "crystals1/shine";
        crystals1_shine0001Animation.end = 52;

        // crystals3_shine0001 (components)
        const crystals3_shine0001Animation = new Animation(crystals3_shine0001);
        crystals3_shine0001Animation.key = "crystals3/shine";
        crystals3_shine0001Animation.end = 52;

        // crystals4_shine0001 (components)
        const crystals4_shine0001Animation = new Animation(crystals4_shine0001);
        crystals4_shine0001Animation.key = "crystals4/shine";
        crystals4_shine0001Animation.end = 52;

        // chestTrigger (components)
        const chestTriggerGlobalTrigger = new GlobalTrigger(chestTrigger);
        chestTriggerGlobalTrigger.checkOccupants = (l) => this.checkChestTrigger(l);

        // chestBtn (components)
        const chestBtnSimpleButton = new SimpleButton(chestBtn);
        chestBtnSimpleButton.isPoly = true;
        new MoveTo(chestBtn);

        this.mailbox = mailbox;
        this.chestGlow = chestGlow;
        this.chest = chest;
        this.chestTrigger = chestTrigger;
        this.chestBtn = chestBtn;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()
        this.mailboxstate = false
        this.chestActivated = false
        this.chestOpen = false
        this.chestBtn.visible = false

        this.chest.on('animationcomplete',() => {
            this.chestOpen = true
            this.chestBtn.visible = true
        })

        this.onPenguinUpdate =  () => this.chestTrigger.__GlobalTrigger.check()
        this.onPenguinMoveComplete =  () => this.chestTrigger.__GlobalTrigger.check()
        this.onPenguinsAdded = () => this.chestTrigger.__GlobalTrigger.check()
    }

    onPenguinRemove(id) {
        this.chestTrigger.__GlobalTrigger.onPenguinRemove(id)
    }

    onMailbox() {
        if(this.mailboxstate) {
            this.mailbox.__Animation.stop()
            this.mailboxstate = false
            return
        }
        this.mailbox.__Animation.play()
        this.mailboxstate = true
    }

    checkIsBug(penguins) {
        for(let id of penguins) {
            let penguin = this.penguins[id]
            if(!penguin) continue

            let items = Object.values(penguin.items.equippedFlat)
            items = [...new Set(items)].sort()

            if((items.includes(4137) && items.includes(1101) && items.includes(3036)) ||
               (items.includes(4138)) ||
               (items.includes(4135) || items.includes(380115) || items.includes(380311) || items.includes(380342)) ||
               (items.includes(4127) && items.includes(3034) && items.includes(332) && items.includes(1092)) ||
               (items.includes(4129) && items.includes(6029) && items.includes(1094)) ||
               ((items.includes(10227) || items.includes(227)) && (items.includes(309) || items.includes(10309)) && (items.includes(10472) || items.includes(472)))) return true
        }
        return false
    }

    checkChestTrigger(penguins) {
        if(this.chestActivated) return
        if(penguins.length > 4 && this.checkIsBug(penguins)) {
            this.chest.play('nschest')
            this.chestGlow.play('nsglow')
            this.chestActivated = true
        }
    }

    onFreeItem() {
        if(!this.chestOpen) return
        this.interface.prompt.showItem(7006)
    }

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
