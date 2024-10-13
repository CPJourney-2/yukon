import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Button, MoveTo, SimpleButton, Animation } from '@components/components'


/* START OF COMPILED CODE */

export default class Lighthouse extends RoomScene {

    constructor() {
        super("Lighthouse");

        /** @type {Phaser.GameObjects.Rectangle} */
        this.drumBounds;
        /** @type {Phaser.GameObjects.Image} */
        this.interfaceIcons;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'beach': () => this.triggerRoom(400, 529, 490),
            'beacon': () => this.triggerRoom(411, 272, 680),
            'instruments': () => this.interface.loadWidget('MusicCatalog')
        }

        //this.music = 'lighthouse'

        //electric, acoustic, bass, tuba, trumpet, drum
        this.layeredMusic = ['lighthouse/electricGuitarTrack','lighthouse/acousticGuitarTrack','lighthouse/bassGuitarTrack','lighthouse/tubaTrack','lighthouse/tromboneTrack','lighthouse/drumTrack'];

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("prefair-lighthouse-pack", "assets/media/rooms/_prefair/lighthouse/prefair-lighthouse-pack.json");
        this.load.pack("lighthouse-pack", "assets/media/rooms/lighthouse/lighthouse-pack.json");
    }

    /** @returns {void} */
    _create() {

        // rectangle_1
        const rectangle_1 = this.add.rectangle(453, 424, 128, 128);
        rectangle_1.scaleX = 2.01822369519442;
        rectangle_1.scaleY = 2.01822369519442;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 0;

        // bg
        this.add.image(758, 494, "prefair-lighthouse", "bg");

        // railing
        const railing = this.add.image(645.870239843217, 800.1325795432979, "lighthouse", "railing");
        railing.setOrigin(0.4828981760766746, 1.2064019485074828);

        // wirelol
        this.add.image(339, 667, "lighthouse", "wirelol");

        // piano
        const piano = this.add.image(397.8038926188229, 727.0705115914689, "lighthouse", "piano");
        piano.setOrigin(0.4577520925160905, 0.6696854044183268);

        // chair
        const chair = this.add.image(365.4742110513567, 783.6805226405032, "lighthouse", "chair");
        chair.setOrigin(0.5196561473514225, 0.33355681678231014);

        // drum0001
        const drum0001 = this.add.image(167.34384879155448, 543.3552028095227, "lighthouse", "drum0001");
        drum0001.setOrigin(0.47921361067658247, 0.873903051587293);

        // mic
        const mic = this.add.image(319.29869600047743, 635.4415240031034, "lighthouse", "mic");
        mic.setOrigin(0.5659739200095487, 0.730554021538746);

        // blspeaker0001
        const blspeaker0001 = this.add.sprite(111, 296, "lighthouse", "blspeaker0001");

        // bottomspeaker0001
        const bottomspeaker0001 = this.add.sprite(8, 875, "lighthouse", "bottomspeaker0001");

        // instruments
        const instruments = this.add.sprite(1189.8134786366043, 607.1020400947572, "lighthouse", "instruments");
        instruments.scaleX = 0.7;
        instruments.scaleY = 0.7;
        instruments.setOrigin(0.5031055954871473, 0.6991055549754968);
        instruments.flipX = true;

        // top0001
        const top0001 = this.add.sprite(334, 63, "lighthouse", "top0001");

        // door
        const door = this.add.sprite(466, 401, "lighthouse", "door");
        door.angle = 1;

        // drumBounds
        const drumBounds = this.add.rectangle(165, 486, 200, 140);
        drumBounds.visible = false;

        // flags1
        this.add.image(110, 339, "prefair-lighthouse", "flags1");

        // flags2
        this.add.image(297, 311, "prefair-lighthouse", "flags2");

        // flags3
        this.add.image(446, 311, "prefair-lighthouse", "flags3");

        // flags4
        this.add.image(595, 304, "prefair-lighthouse", "flags4");

        // stagebox
        const stagebox = this.add.image(27, 572, "prefair-lighthouse", "stagebox");
        stagebox.setOrigin(0.630938826461769, 0.7106768051310765);

        // crate
        const crate = this.add.image(61.38873830560533, 689.4807787594916, "prefair-lighthouse", "crate");
        crate.setOrigin(0.5461796144100333, 0.7239011607759196);

        // pianobox
        const pianobox = this.add.image(296.3360206641242, 824.9948200586161, "prefair-lighthouse", "pianobox");
        pianobox.setOrigin(0.45908799552423935, 0.6817820122008929);

        // partybox
        const partybox = this.add.image(587.5541446698176, 795.6687829952735, "prefair-lighthouse", "partybox");
        partybox.setOrigin(0.4153343174817521, 0.6305509300368779);

        // crate2
        const crate2 = this.add.image(726, 847, "prefair-lighthouse", "crate2");
        crate2.setOrigin(0.5165305403280538, 0.6859685786906047);

        // cornerbox
        const cornerbox = this.add.image(1448.2572003596704, 686.9367146392573, "prefair-lighthouse", "cornerbox");
        cornerbox.setOrigin(0.2564169522005964, 0.7590931306282106);

        // fg
        const fg = this.add.image(1446, 938, "prefair-lighthouse", "fg");
        fg.setOrigin(0.5294211975031814, 0.830929629515789);

        // interfaceIcons
        const interfaceIcons = this.add.image(1434.0000206299962, 889.0000147169374, "lighthouse", "shop");

        // right_flags
        const right_flags = this.add.container(1653.027239093272, 651.4411092553503);

        // flags9
        const flags9 = this.add.image(-83.0272710952238, -366.44108215371466, "prefair-lighthouse", "flags9");
        right_flags.add(flags9);

        // flags8
        const flags8 = this.add.image(-237.0272710952238, -390.44108215371466, "prefair-lighthouse", "flags8");
        right_flags.add(flags8);

        // flags7
        const flags7 = this.add.image(-395.0272710952238, -415.44108215371466, "prefair-lighthouse", "flags7");
        right_flags.add(flags7);

        // flags6
        const flags6 = this.add.image(-552.0272710952238, -441.44108215371466, "prefair-lighthouse", "flags6");
        right_flags.add(flags6);

        // rockhoppernote
        const rockhoppernote = this.add.image(909.8649041191413, 887.6343696767452, "prefair-lighthouse", "rockhoppernote");
        rockhoppernote.setOrigin(0.3648650408930104, 2.6368522533699825);

        // topbox
        const topbox = this.add.image(694.7196655273438, 914.003958983921, "prefair-lighthouse", "topbox");
        topbox.setOrigin(0.18505808013938635, 5.205911405516159);

        // box
        const box = this.add.image(709, 579, "prefair-lighthouse", "box");
        box.setOrigin(0.5040862956562517, 0.6485521359660448);

        // doorbox
        const doorbox = this.add.image(441.66362711940064, 517.1191156097086, "prefair-lighthouse", "doorbox");
        doorbox.setOrigin(0.6316271186504255, 0.7443163568442217);

        // longbox
        const longbox = this.add.image(1136.0558608020312, 848.5175457904562, "prefair-lighthouse", "longbox");
        longbox.setOrigin(0.40299642884649295, 0.6218525688624674);

        // topbox2
        const topbox2 = this.add.image(978.6485719657455, 1053.8115424935108, "prefair-lighthouse", "topbox2");
        topbox2.setOrigin(-0.03647690251319149, 4.651289893253115);

        // lists
        const sort = [drum0001, mic, piano, chair, railing, instruments, crate, pianobox, crate2, partybox, fg, cornerbox, rockhoppernote, topbox, box, doorbox, right_flags, longbox, stagebox, topbox2];

        // blspeaker0001 (components)
        const blspeaker0001Animation = new Animation(blspeaker0001);
        blspeaker0001Animation.key = "blspeaker";
        blspeaker0001Animation.end = 10;

        // bottomspeaker0001 (components)
        const bottomspeaker0001Animation = new Animation(bottomspeaker0001);
        bottomspeaker0001Animation.key = "bottomspeaker";
        bottomspeaker0001Animation.end = 10;

        // instruments (components)
        const instrumentsButton = new Button(instruments);
        instrumentsButton.spriteName = "instruments";
        new MoveTo(instruments);

        // top0001 (components)
        const top0001Animation = new Animation(top0001);
        top0001Animation.key = "top";
        top0001Animation.end = 26;
        top0001Animation.repeat = 0;
        top0001Animation.autoPlay = false;
        top0001Animation.onHover = true;
        top0001Animation.stopOnOut = false;
        const top0001SimpleButton = new SimpleButton(top0001);
        top0001SimpleButton.callback = () => {this.triggerRoom(411, 272, 680)};

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        new MoveTo(door);

        // interfaceIcons (components)
        const interfaceIconsButton = new Button(interfaceIcons);
        interfaceIconsButton.spriteName = "shop";
        interfaceIconsButton.callback = () => this.interface.loadWidget('MusicCatalog');

        this.drumBounds = drumBounds;
        this.interfaceIcons = interfaceIcons;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()
        //this.checkBand()
        this.changeLayerMutes([false, false, false, false, false, false]);
    }

    onPenguinsAdded() {
        this.checkBand()
    }

    onPenguinUpdate(id) {
        this.checkBand()
    }

    setMusic() {
        super.setMusic()
        this.checkBand()
    }

    checkBand() {
        if(!this.penguins) return;

        let isPlaying = false;
        //electric, acoustic, bass, tuba, trumpet, drum
        let shouldPlay = [false, false, false, false, false, false];

        var instruments = [[233, 338, 10338, 731, 5036, 5063, 5064, 5101, 5161, 10233, 15036, 15143, 15165, 380092, 380175, 380497, 380541],
            [234, 343, 730, 5029, 5104, 380498, 380499],
            [729, 5017, 5066, 5067, 15017, 3014, 5150, 5160, 15066],
            [293, 380336],
            [5014, 5034, 5149, 15149],
            [180, 10180, 335, 10335, 337, 5103, 340, 10340, 3048, 380280, 380281]];

        var secretFrames = [44, 44, 44, 45, 56, 43]

        let isMyPenguin = false;
        for(let [id,penguin] of Object.entries(this.penguins)){
            if(penguin.frame != 26) continue;

            let items = Object.values(penguin.items.equippedFlat);
            items = [...new Set(items)].sort();

            for(let [index, itemArray] of instruments.entries()) {
                for(let item of itemArray) {
                    if(items.includes(item) && penguin.getSecretFrame(26) == secretFrames[index]) {
                        if(index == 5 && items.length == 2 && !this.drumBounds.getBounds().contains(penguin.x, penguin.y)) continue
                        shouldPlay[index] = true;
                        isPlaying = true;
                        if(id == this.client.penguin.id) isMyPenguin = true;
                    }
                }
            }
        }

        //Check for play it loud stamp
        if (shouldPlay.every(x => x === true) && isMyPenguin) {
            this.stampEarned(24)
        }
        if(!this.isPlaying) this.rewindLayers()
        this.isPlaying = isPlaying;
        this.changeLayerMutes(shouldPlay)
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */