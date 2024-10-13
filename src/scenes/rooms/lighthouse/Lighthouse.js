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
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
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
        this.add.image(754, 486, "lighthouse", "bg");

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

        // pole
        this.add.image(624, 383, "lighthouse", "pole");

        // speaker0003
        const speaker0003 = this.add.sprite(621, 315, "lighthouse", "speaker0001");

        // s1seat
        const s1seat = this.add.image(617.8312224785659, 821.9510463413874, "lighthouse", "s1seat");
        s1seat.setOrigin(0.46856844171834644, 0.05419573170520506);

        // s1back
        const s1back = this.add.image(609.0383928005637, 851.4589604990405, "lighthouse", "s1back");
        s1back.setOrigin(0.3450328886650794, 0.6051281607881505);

        // s2seat
        const s2seat = this.add.image(696.1924252924085, 753.7223508517634, "lighthouse", "s2seat");
        s2seat.setOrigin(0.3720065725055266, 0.1475736527669511);

        // s2back
        const s2back = this.add.image(731.8181017646428, 761.5279561498824, "lighthouse", "s2back");
        s2back.setOrigin(0.6757562866555544, 0.4855685234960104);

        // s3
        const s3 = this.add.image(742.4205989424391, 653.4021477456533, "lighthouse", "s3");
        s3.setOrigin(0.4927574159236755, 0.39906804914594646);

        // s
        const s = this.add.image(947.9579128428666, 660.2007652801464, "lighthouse", "s3");
        s.setOrigin(0.49947410606284137, 0.368578749824728);

        // s_1
        const s_1 = this.add.image(970.1327906956822, 738.5455468127228, "lighthouse", "s3");
        s_1.setOrigin(0.48915952660640727, 0.3623383548332327);

        // s6seat
        const s6seat = this.add.image(909.3297101006357, 854.0130436377116, "lighthouse", "s6seat");
        s6seat.setOrigin(0.5545854114858308, 0.12540761367848674);

        // s6back
        const s6back = this.add.image(918.6818383166291, 874.966028447006, "lighthouse", "s6back");
        s6back.setOrigin(0.47272721537929235, 0.6542890816917697);

        // top0001
        const top0001 = this.add.sprite(334, 63, "lighthouse", "top0001");

        // door
        const door = this.add.sprite(466, 401, "lighthouse", "door");
        door.angle = 1;

        // drumBounds
        const drumBounds = this.add.rectangle(165, 486, 200, 140);
        drumBounds.visible = false;

        // interfaceIcons
        const interfaceIcons = this.add.image(1434.0000206299962, 889.0000147169374, "lighthouse", "shop");

        // lists
        const sort = [drum0001, mic, piano, chair, s1back, s1seat, s2back, s2seat, s3, s, s_1, s6back, s6seat, railing, instruments];

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

        // speaker0003 (components)
        const speaker0003Animation = new Animation(speaker0003);
        speaker0003Animation.key = "speaker";
        speaker0003Animation.end = 10;

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
        if (!this.soundManager.muteMusic) {
            this.changeLayerMutes(shouldPlay)
        }
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */