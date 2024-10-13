import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, SimpleButton, Zone, ShowHint } from '@components/components'

/* START OF COMPILED CODE */

export default class Dance extends RoomScene {

    constructor() {
        super("Dance");

        /** @type {Phaser.GameObjects.Sprite} */
        this.phase1BgAnim;
        /** @type {Phaser.GameObjects.Sprite} */
        this.discoLoop;
        /** @type {Phaser.GameObjects.Sprite} */
        this.discoDrop;
        /** @type {Phaser.GameObjects.Sprite} */
        this.discoRetract;
        /** @type {Phaser.GameObjects.Sprite} */
        this.phase3FloorReveal;
        /** @type {Phaser.GameObjects.Sprite} */
        this.phase3FloorRetract;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dancefloor;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dancefloorBW;
        /** @type {Phaser.GameObjects.Layer} */
        this._rings;
        /** @type {Phaser.GameObjects.Layer} */
        this._ringsBW;
        /** @type {Phaser.GameObjects.Image} */
        this.catalogBox;
        /** @type {Phaser.GameObjects.Sprite} */
        this.catalogPaper;
        /** @type {Phaser.GameObjects.Sprite} */
        this.desk0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_speaker_sound;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_mixer_wave;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_mixer_tables_under;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_mixer_tables;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_mixer_lights;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_mixer_slider;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lights;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lightsBW;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_box_headphones_back;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_box_sliders;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_box_lights;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_box_headphones_front;
        /** @type {Phaser.GameObjects.Image} */
        this.poster;
        /** @type {Phaser.GameObjects.Sprite} */
        this.phase3ThingReveal;
        /** @type {Phaser.GameObjects.Sprite} */
        this.phase3ThingLoop;
        /** @type {Phaser.GameObjects.Sprite} */
        this.phase3ThingRetract;
        /** @type {Phaser.GameObjects.Image} */
        this.interfaceIcons;
        /** @type {Phaser.GameObjects.Image} */
        this.spotlights;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.animate;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this._tint;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this._bwRings;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 741, 557),
            //'town': () => this.triggerRoom(100, 680, 520),
            'boiler': () => this.triggerRoom(804),
            'lounge': () => this.triggerRoom(121, 1200, 760),
            'mix': () => this.triggerGame(930),
            'dancing': () => this.triggerGame(952)
        }

        this.preLoop = '5_1'
        this.mainLoops = ['5_4', '5_5', '5_6', '5_7', '5_8', '5_9']

        this.DARK_TINT = 0xAAADC4
        this.PHASE1_POPULATION = 10
        this.PHASE2_POPULATION = 20
        this.PHASE3_POPULATION = 30

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dance-pack", "assets/media/rooms/dance/dance-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(762, 471, "dance", "bg");

        // phase1BgAnim
        const phase1BgAnim = this.add.sprite(660, 197, "dance", "phase1/bg/loop0001");
        phase1BgAnim.scaleX = 0.97;
        phase1BgAnim.visible = false;

        // _disco
        const _disco = this.add.container(660.4860499765464, 322.6598158145175);

        // discoLoop
        const discoLoop = this.add.sprite(-5.486049976546383, -175.65981581451751, "dance", "phase1/fg/loop0001");
        discoLoop.visible = false;
        _disco.add(discoLoop);

        // discoDrop
        const discoDrop = this.add.sprite(-6, -235, "dance", "phase1/fg/drop0021");
        discoDrop.visible = false;
        _disco.add(discoDrop);

        // discoRetract
        const discoRetract = this.add.sprite(-5.4, -170.5, "dance", "phase1/fg/raise0001");
        discoRetract.visible = false;
        _disco.add(discoRetract);

        // wire
        const wire = this.add.image(1283, 726, "dance", "wire");
        wire.setOrigin(0.5, 0.5070422535211268);

        // _phase3bgstuff
        const _phase3bgstuff = this.add.container(657, 460);

        // phase3FloorReveal
        const phase3FloorReveal = this.add.sprite(0, 0, "dance", "phase3/bg/reveal0021");
        phase3FloorReveal.visible = false;
        _phase3bgstuff.add(phase3FloorReveal);

        // phase3FloorRetract
        const phase3FloorRetract = this.add.sprite(1, -7, "dance", "phase3/bg/retract0001");
        phase3FloorRetract.visible = false;
        _phase3bgstuff.add(phase3FloorRetract);

        // floor_frame
        const floor_frame = this.add.image(646, 703, "dance", "floor/frame");

        // dancefloor
        const dancefloor = this.add.sprite(646, 698, "dance", "floor/default0001");
        dancefloor.tintTopLeft = 16777215;
        dancefloor.tintTopRight = 16777215;
        dancefloor.tintBottomLeft = 16777215;
        dancefloor.tintBottomRight = 16777215;

        // dancefloorBW
        const dancefloorBW = this.add.sprite(650, 702.5, "dance", "floor/bw0001");
        dancefloorBW.visible = false;

        // stage
        const stage = this.add.image(660, 388, "dance", "stage");
        stage.setOrigin(0.5008576329331046, 0.5028248587570622);

        // fg_wire
        const fg_wire = this.add.image(217, 32, "dance", "fg/fg_wire");
        fg_wire.setOrigin(0.5106382978723404, 0.5063291139240507);

        // fg_speaker_1
        const fg_speaker_1 = this.add.sprite(268, 151, "dance", "fg/fg_speaker_10001");

        // lamp
        const lamp = this.add.image(1457, 227, "dance", "lamp");
        lamp.setOrigin(0.5045045045045045, 0.5);

        // _rings
        const _rings = this.add.layer();
        _rings.visible = false;

        // rings1
        const rings1 = this.add.sprite(28, 163, "dance", "phase2/bg/10001");
        _rings.add(rings1);

        // rings2
        const rings2 = this.add.sprite(281, 576, "dance", "phase2/bg/20001");
        _rings.add(rings2);

        // rings3
        const rings3 = this.add.sprite(922, -24, "dance", "phase2/bg/30001");
        _rings.add(rings3);

        // rings4
        const rings4 = this.add.sprite(1208, 845, "dance", "phase2/bg/40001");
        _rings.add(rings4);

        // rings5
        const rings5 = this.add.sprite(1384, 88, "dance", "phase2/bg/50001");
        _rings.add(rings5);

        // _ringsBW
        const _ringsBW = this.add.layer();
        _ringsBW.visible = false;

        // bwrings1
        const bwrings1 = this.add.sprite(28, 163, "dance", "phase2/bg/bw/10001");
        _ringsBW.add(bwrings1);

        // bwrings2
        const bwrings2 = this.add.sprite(281, 576, "dance", "phase2/bg/bw/20001");
        _ringsBW.add(bwrings2);

        // bwrings3
        const bwrings3 = this.add.sprite(922, -24, "dance", "phase2/bg/bw/30001");
        _ringsBW.add(bwrings3);

        // bwrings4
        const bwrings4 = this.add.sprite(1208, 845, "dance", "phase2/bg/bw/40001");
        _ringsBW.add(bwrings4);

        // bwrings5
        const bwrings5 = this.add.sprite(1384, 88, "dance", "phase2/bg/bw/50001");
        _ringsBW.add(bwrings5);

        // fg_speaker_2
        const fg_speaker_2 = this.add.sprite(170, 131, "dance", "fg/fg_speaker_20001");
        fg_speaker_2.setOrigin(0.503448275862069, 0.5026455026455027);

        // fg_wire_1
        const fg_wire_1 = this.add.image(1130, 32, "dance", "fg/fg_wire");
        fg_wire_1.setOrigin(0.5106382978723404, 0.5063291139240507);
        fg_wire_1.flipX = true;

        // fg_speaker_1_1
        const fg_speaker_1_1 = this.add.sprite(1080, 151, "dance", "fg/fg_speaker_10001");
        fg_speaker_1_1.flipX = true;

        // speaker_3
        const speaker_3 = this.add.image(119, 827, "dance", "speaker_3");
        speaker_3.setOrigin(0.5297297297297298, 0.8456140350877193);

        // fg_speaker_2_1
        const fg_speaker_2_1 = this.add.sprite(1178, 131, "dance", "fg/fg_speaker_20001");
        fg_speaker_2_1.setOrigin(0.503448275862069, 0.5026455026455027);
        fg_speaker_2_1.flipX = true;

        // speaker_1
        const speaker_1 = this.add.sprite(350, 424, "dance", "speaker_10001");
        speaker_1.setOrigin(0.5655737704918032, 0.770949720670391);

        // catalogBox
        const catalogBox = this.add.image(286, 474.85028706969433, "dance", "catalog/box");
        catalogBox.setOrigin(0.5, 0.7032867669320754);

        // catalogPaper
        const catalogPaper = this.add.sprite(258, 364, "dance", "catalog/paper0001");

        // door_behind
        const door_behind = this.add.image(154, 434, "dance", "door/behind");

        // door
        const door = this.add.sprite(154, 440, "dance", "door/door0001");
        door.setOrigin(0.5, 0.5016722408026756);

        // door_frame
        const door_frame = this.add.image(152, 437, "dance", "door/frame");
        door_frame.setOrigin(0.5031446540880503, 0.5);

        // desk0001
        const desk0001 = this.add.sprite(1122, 501, "dance", "desk0001");

        // stairs
        const stairs = this.add.image(1361, 433, "dance", "stairs");
        stairs.setOrigin(0.5026455026455027, 0.5010141987829615);

        // puffle_speaker
        const puffle_speaker = this.add.container(1164, 735.5295257801258);

        // speaker_4
        const speaker_4 = this.add.image(2, 1.4705234832657652, "dance", "speaker_4");
        speaker_4.setOrigin(0.45918367346938777, 0.8421052631578947);
        puffle_speaker.add(speaker_4);

        // puffle
        const puffle = this.add.sprite(0, -199.52947651673423, "dance", "puffle/puffle0001");
        puffle.setOrigin(0.5, 0.7933884297520661);
        puffle_speaker.add(puffle);

        // boiler
        const boiler = this.add.container(996, 419);

        // speaker_1_1
        const speaker_1_1 = this.add.sprite(0.6415522983123765, -0.9657361633013579, "dance", "speaker_10001");
        speaker_1_1.setOrigin(0.5655737704918032, 0.770949720670391);
        speaker_1_1.flipX = true;
        boiler.add(speaker_1_1);

        // boiler_door
        const boiler_door = this.add.image(9, -50, "dance", "boiler");
        boiler_door.setOrigin(0.5, 0.4236453201970443);
        boiler_door.flipX = true;
        boiler.add(boiler_door);

        // dj_speaker
        const dj_speaker = this.add.container(790.7929422877853, 305.10866987575673);

        // dj_speaker_speaker
        const dj_speaker_speaker = this.add.image(1.2070577122146915, -0.10866987575673193, "dance", "dj/speaker");
        dj_speaker_speaker.setOrigin(0.4, 0.6923076923076923);
        dj_speaker.add(dj_speaker_speaker);

        // dj_speaker_sound
        const dj_speaker_sound = this.add.sprite(6.2070577122146915, -39.10866987575673, "dance", "dj/speaker_sound0001");
        dj_speaker_sound.setOrigin(0.5, 0.5061728395061729);
        dj_speaker.add(dj_speaker_sound);

        // mixer
        const mixer = this.add.container(656.758588457557, 340.0371580227643);

        // dj_mixer_wave_green
        const dj_mixer_wave_green = this.add.image(0, 12, "dance", "dj/mixer/wave/green");
        mixer.add(dj_mixer_wave_green);

        // dj_mixer_wave
        const dj_mixer_wave = this.add.sprite(0, 12, "dance", "dj/mixer/wave/wave0001");
        mixer.add(dj_mixer_wave);

        // dj_mixer
        const dj_mixer = this.add.image(0.24141154244296104, 2.962841977235712, "dance", "dj/mixer/mixer");
        mixer.add(dj_mixer);

        // dj_mixer_tables_under
        const dj_mixer_tables_under = this.add.sprite(1.241411542442961, -4.037158022764288, "dance", "dj/mixer/tables/tables_under0001");
        dj_mixer_tables_under.setOrigin(0.5027027027027027, 0.5128205128205128);
        mixer.add(dj_mixer_tables_under);

        // dj_mixer_tables
        const dj_mixer_tables = this.add.sprite(0.24141154244296104, -7.037158022764288, "dance", "dj/mixer/tables/tables0001");
        dj_mixer_tables.setOrigin(0.5, 0.5161290322580645);
        mixer.add(dj_mixer_tables);

        // dj_mixer_lights
        const dj_mixer_lights = this.add.sprite(0.24141154244296104, -20.037158022764288, "dance", "dj/mixer/lights/lights0001");
        mixer.add(dj_mixer_lights);

        // dj_mixer_slider
        const dj_mixer_slider = this.add.sprite(0.24141154244296104, -20.037158022764288, "dance", "dj/mixer/slider/slider0001");
        mixer.add(dj_mixer_slider);

        // dj_wires
        const dj_wires = this.add.image(5.241411542442961, 29.962841977235712, "dance", "dj/wires");
        dj_wires.setOrigin(0.5014836795252225, 0.5050505050505051);
        mixer.add(dj_wires);

        // _lights
        const _lights = this.add.container(666, 334.75580341239964);

        // lights_frame
        const lights_frame = this.add.image(-3, -228.75580341239964, "dance", "lights/frame");
        _lights.add(lights_frame);

        // lights
        const lights = this.add.sprite(-3, -229.75580341239964, "dance", "lights/lights0001");
        _lights.add(lights);

        // lightsBW
        const lightsBW = this.add.sprite(1, -227, "dance", "lights/bw/lights0001");
        lightsBW.visible = false;
        _lights.add(lightsBW);

        // box
        const box = this.add.container(520.6001395292443, 310.6122881275866);

        // dj_box_headphones_back
        const dj_box_headphones_back = this.add.sprite(-52.600168515674795, -58.61229112964787, "dance", "dj/box/headphones/back0001");
        dj_box_headphones_back.setOrigin(0.5135135135135135, 0.5);
        box.add(dj_box_headphones_back);

        // dj_box
        const dj_box = this.add.image(-8.234149950044639, -56.48662238555352, "dance", "dj/box/box");
        dj_box.setOrigin(0.4154913904958189, 0.34115047716727415);
        box.add(dj_box);

        // dj_box_sliders
        const dj_box_sliders = this.add.sprite(30.399831484325205, 2.387708870352128, "dance", "dj/box/sliders/sliders0001");
        dj_box_sliders.setOrigin(0.5, 0.5151515151515151);
        box.add(dj_box_sliders);

        // dj_box_lights
        const dj_box_lights = this.add.sprite(43.399831484325205, -44.61229112964787, "dance", "dj/box/lights/lights0001");
        dj_box_lights.setOrigin(0.5, 0.5072463768115942);
        box.add(dj_box_lights);

        // dj_box_headphones_front
        const dj_box_headphones_front = this.add.sprite(-26.600168515674795, -70.61229112964787, "dance", "dj/box/headphones/front0001");
        dj_box_headphones_front.setOrigin(0.5, 0.509090909090909);
        box.add(dj_box_headphones_front);

        // zone
        const zone = this.add.rectangle(1164, 537, 60, 50);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // poster
        const poster = this.add.image(1168, 366, "dance", "poster");

        // phase3fgstuff
        const phase3fgstuff = this.add.container(657, 459.50928944208147);

        // phase3ThingReveal
        const phase3ThingReveal = this.add.sprite(0, -36.87107132162896, "dance", "phase3/fg/reveal0021");
        phase3ThingReveal.visible = false;
        phase3fgstuff.add(phase3ThingReveal);

        // phase3ThingLoop
        const phase3ThingLoop = this.add.sprite(0, -219.00928944208147, "dance", "phase3/fg/loop0001");
        phase3ThingLoop.visible = false;
        phase3fgstuff.add(phase3ThingLoop);

        // phase3ThingRetract
        const phase3ThingRetract = this.add.sprite(0, -37, "dance", "phase3/fg/retract0001");
        phase3ThingRetract.visible = false;
        phase3fgstuff.add(phase3ThingRetract);

        // polygon_1
        const polygon_1 = this.add.polygon(1142.7683850705682, 437.6970015883089, "-28.654961469025196 174.44148245048498 -15.0055715075965 149.62735118505242 57.77927367475783 111.91094395310469 90.45638148052265 -53.96163885365911 201.62503171025634 -28.60698628060078 179.6806758193739 173.50819083112114 94.47314030269035 221.146211760087 46.74288207050404 256.8783500761387");
        polygon_1.setOrigin(0.4903090404500476, 0.43468346884600356);
        polygon_1.alpha = 0.8;
        polygon_1.fillColor = 7339828;

        // polygon_2
        const polygon_2 = this.add.polygon(225, 340, "66.1946175725401 180.9666965418778 11.544880888460526 148.19550372532404 8.736256330428134 80.22514100602649 2.6813278184423552 -0.6590267900156164 46.13778922914082 -10.687440961715254 60.62327636604027 45.02597110328276 75.10876350293978 63.96853120538202 109.6510789832385 80.68255482488144 126.36510260273792 145.31011282027913");
        polygon_2.setOrigin(0, 0);
        polygon_2.alpha = 0.8;
        polygon_2.fillColor = 7339828;

        // interfaceIcons
        const interfaceIcons = this.add.image(1418.2860739218731, 888.414006164138, "dance", "catalog/icon");

        // exit
        this.add.image(92, 280, "dance", "exit");

        // spotlights
        const spotlights = this.add.image(732, 780.9589893611403, "dance", "phase2/fg/spotlight");
        spotlights.setOrigin(0.5, 1.3452903597270451);
        spotlights.visible = false;

        // lists
        const sort = [speaker_3, speaker_1, boiler, box, dj_speaker, mixer, puffle_speaker, catalogBox, _disco, _lights, spotlights, phase3fgstuff];
        const animate = [dj_box_headphones_front, dj_box_lights, dj_mixer_slider, dj_mixer_lights, dj_mixer_tables, dj_mixer_tables_under, dj_speaker_sound, dj_box_headphones_back];
        const _tint = [floor_frame, bg, speaker_3, desk0001, speaker_4, speaker_1_1, boiler_door, dj_speaker_speaker, dj_speaker_sound, dj_wires, dj_mixer_slider, dj_mixer_lights, dj_mixer_tables, dj_mixer_tables_under, dj_mixer, dj_mixer_wave, lights_frame, dj_box_headphones_front, dj_box_lights, dj_box_sliders, dj_box, dj_box_headphones_back, poster, door, door_frame, door_behind, lamp, speaker_1, fg_speaker_2_1, fg_speaker_1_1, fg_wire_1, fg_speaker_2, fg_speaker_1, fg_wire, stage, wire, catalogBox, catalogPaper, phase3FloorReveal, phase3FloorRetract];
        const _bwRings = [bwrings1, bwrings5, bwrings4, bwrings3, bwrings2];

        // phase1BgAnim (components)
        const phase1BgAnimAnimation = new Animation(phase1BgAnim);
        phase1BgAnimAnimation.key = "phase1/bg/loop";
        phase1BgAnimAnimation.end = 5;
        phase1BgAnimAnimation.autoPlay = false;
        phase1BgAnimAnimation.showOnStart = true;
        phase1BgAnimAnimation.hideOnComplete = true;

        // discoLoop (components)
        const discoLoopAnimation = new Animation(discoLoop);
        discoLoopAnimation.key = "phase1/fg/loop";
        discoLoopAnimation.end = 8;
        discoLoopAnimation.autoPlay = false;
        discoLoopAnimation.showOnStart = true;
        discoLoopAnimation.hideOnComplete = true;

        // discoDrop (components)
        const discoDropAnimation = new Animation(discoDrop);
        discoDropAnimation.key = "phase1/fg/drop";
        discoDropAnimation.end = 21;
        discoDropAnimation.repeat = 0;
        discoDropAnimation.autoPlay = false;
        discoDropAnimation.showOnStart = true;
        discoDropAnimation.hideOnComplete = true;
        discoDropAnimation.onCompleteCallback = () => { this.discoLoop.__Animation.play(); this.phase1BgAnim.__Animation.play() };

        // discoRetract (components)
        const discoRetractAnimation = new Animation(discoRetract);
        discoRetractAnimation.key = "phase1/fg/raise";
        discoRetractAnimation.end = 19;
        discoRetractAnimation.repeat = 0;
        discoRetractAnimation.autoPlay = false;
        discoRetractAnimation.showOnStart = true;
        discoRetractAnimation.hideOnComplete = true;
        discoRetractAnimation.onCompleteCallback = () => this.resetEverything();

        // phase3FloorReveal (components)
        const phase3FloorRevealAnimation = new Animation(phase3FloorReveal);
        phase3FloorRevealAnimation.key = "phase3/bg/reveal";
        phase3FloorRevealAnimation.end = 21;
        phase3FloorRevealAnimation.repeat = 0;
        phase3FloorRevealAnimation.autoPlay = false;
        phase3FloorRevealAnimation.showOnStart = true;

        // phase3FloorRetract (components)
        const phase3FloorRetractAnimation = new Animation(phase3FloorRetract);
        phase3FloorRetractAnimation.key = "phase3/bg/retract";
        phase3FloorRetractAnimation.end = 37;
        phase3FloorRetractAnimation.repeat = 0;
        phase3FloorRetractAnimation.autoPlay = false;
        phase3FloorRetractAnimation.showOnStart = true;
        phase3FloorRetractAnimation.hideOnComplete = true;

        // dancefloor (components)
        const dancefloorAnimation = new Animation(dancefloor);
        dancefloorAnimation.key = "floor/default";
        dancefloorAnimation.end = 60;

        // dancefloorBW (components)
        const dancefloorBWAnimation = new Animation(dancefloorBW);
        dancefloorBWAnimation.key = "floor/bw";
        dancefloorBWAnimation.end = 60;

        // fg_speaker_1 (components)
        const fg_speaker_1Animation = new Animation(fg_speaker_1);
        fg_speaker_1Animation.key = "fg/fg_speaker_1";
        fg_speaker_1Animation.end = 10;

        // rings1 (components)
        const rings1Animation = new Animation(rings1);
        rings1Animation.key = "phase2/bg/1";
        rings1Animation.end = 5;

        // rings2 (components)
        const rings2Animation = new Animation(rings2);
        rings2Animation.key = "phase2/bg/2";
        rings2Animation.end = 5;

        // rings3 (components)
        const rings3Animation = new Animation(rings3);
        rings3Animation.key = "phase2/bg/3";
        rings3Animation.end = 5;

        // rings4 (components)
        const rings4Animation = new Animation(rings4);
        rings4Animation.key = "phase2/bg/4";
        rings4Animation.end = 5;

        // rings5 (components)
        const rings5Animation = new Animation(rings5);
        rings5Animation.key = "phase2/bg/5";
        rings5Animation.end = 5;

        // bwrings1 (components)
        const bwrings1Animation = new Animation(bwrings1);
        bwrings1Animation.key = "phase2/bg/bw/1";
        bwrings1Animation.end = 5;

        // bwrings2 (components)
        const bwrings2Animation = new Animation(bwrings2);
        bwrings2Animation.key = "phase2/bg/bw/2";
        bwrings2Animation.end = 5;

        // bwrings3 (components)
        const bwrings3Animation = new Animation(bwrings3);
        bwrings3Animation.key = "phase2/bg/bw/3";
        bwrings3Animation.end = 5;

        // bwrings4 (components)
        const bwrings4Animation = new Animation(bwrings4);
        bwrings4Animation.key = "phase2/bg/bw/4";
        bwrings4Animation.end = 5;

        // bwrings5 (components)
        const bwrings5Animation = new Animation(bwrings5);
        bwrings5Animation.key = "phase2/bg/bw/5";
        bwrings5Animation.end = 5;

        // fg_speaker_2 (components)
        const fg_speaker_2Animation = new Animation(fg_speaker_2);
        fg_speaker_2Animation.key = "fg/fg_speaker_2";
        fg_speaker_2Animation.end = 10;

        // fg_speaker_1_1 (components)
        const fg_speaker_1_1Animation = new Animation(fg_speaker_1_1);
        fg_speaker_1_1Animation.key = "fg/fg_speaker_1";
        fg_speaker_1_1Animation.end = 10;

        // fg_speaker_2_1 (components)
        const fg_speaker_2_1Animation = new Animation(fg_speaker_2_1);
        fg_speaker_2_1Animation.key = "fg/fg_speaker_2";
        fg_speaker_2_1Animation.end = 10;

        // speaker_1 (components)
        const speaker_1Animation = new Animation(speaker_1);
        speaker_1Animation.key = "speaker_1";
        speaker_1Animation.end = 10;

        // catalogPaper (components)
        const catalogPaperAnimation = new Animation(catalogPaper);
        catalogPaperAnimation.key = "catalog/paper";
        catalogPaperAnimation.end = 7;
        catalogPaperAnimation.repeat = 0;
        catalogPaperAnimation.autoPlay = false;

        // door (components)
        new SimpleButton(door);
        const doorAnimation = new Animation(door);
        doorAnimation.key = "door/door";
        doorAnimation.end = 5;
        doorAnimation.repeat = 0;
        doorAnimation.autoPlay = false;
        doorAnimation.onHover = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 220;
        doorMoveTo.y = 540;

        // desk0001 (components)
        const desk0001Animation = new Animation(desk0001);
        desk0001Animation.key = "desk";
        desk0001Animation.end = 55;
        desk0001Animation.autoPlay = false;

        // stairs (components)
        const stairsButton = new Button(stairs);
        stairsButton.spriteName = "stairs";
        const stairsMoveTo = new MoveTo(stairs);
        stairsMoveTo.x = 1324;
        stairsMoveTo.y = 769;

        // speaker_1_1 (components)
        const speaker_1_1Animation = new Animation(speaker_1_1);
        speaker_1_1Animation.key = "speaker_1";
        speaker_1_1Animation.end = 10;

        // boiler_door (components)
        const boiler_doorButton = new Button(boiler_door);
        boiler_doorButton.spriteName = "boiler";
        const boiler_doorMoveTo = new MoveTo(boiler_door);
        boiler_doorMoveTo.x = 960;
        boiler_doorMoveTo.y = 420;

        // dj_speaker_sound (components)
        const dj_speaker_soundAnimation = new Animation(dj_speaker_sound);
        dj_speaker_soundAnimation.key = "dj/speaker_sound";
        dj_speaker_soundAnimation.end = 2;
        dj_speaker_soundAnimation.repeatDelay = 250;
        dj_speaker_soundAnimation.autoPlay = false;

        // dj_mixer_tables_under (components)
        const dj_mixer_tables_underAnimation = new Animation(dj_mixer_tables_under);
        dj_mixer_tables_underAnimation.key = "dj/mixer/tables/tables_under";
        dj_mixer_tables_underAnimation.end = 23;
        dj_mixer_tables_underAnimation.autoPlay = false;

        // dj_mixer_tables (components)
        const dj_mixer_tablesAnimation = new Animation(dj_mixer_tables);
        dj_mixer_tablesAnimation.key = "dj/mixer/tables/tables";
        dj_mixer_tablesAnimation.end = 6;
        dj_mixer_tablesAnimation.autoPlay = false;

        // dj_mixer_lights (components)
        const dj_mixer_lightsAnimation = new Animation(dj_mixer_lights);
        dj_mixer_lightsAnimation.key = "dj/mixer/lights/lights";
        dj_mixer_lightsAnimation.end = 23;
        dj_mixer_lightsAnimation.autoPlay = false;

        // dj_mixer_slider (components)
        const dj_mixer_sliderAnimation = new Animation(dj_mixer_slider);
        dj_mixer_sliderAnimation.key = "dj/mixer/slider/slider";
        dj_mixer_sliderAnimation.end = 23;
        dj_mixer_sliderAnimation.autoPlay = false;

        // lights (components)
        const lightsAnimation = new Animation(lights);
        lightsAnimation.key = "lights/lights";
        lightsAnimation.end = 80;

        // lightsBW (components)
        const lightsBWAnimation = new Animation(lightsBW);
        lightsBWAnimation.key = "lights/bw/lights";
        lightsBWAnimation.end = 80;

        // dj_box_headphones_back (components)
        const dj_box_headphones_backAnimation = new Animation(dj_box_headphones_back);
        dj_box_headphones_backAnimation.key = "dj/box/headphones/back";
        dj_box_headphones_backAnimation.end = 30;
        dj_box_headphones_backAnimation.autoPlay = false;

        // dj_box (components)
        const dj_boxSimpleButton = new SimpleButton(dj_box);
        dj_boxSimpleButton.hoverCallback = () => this.onBoxOver();
        dj_boxSimpleButton.hoverOutCallback = () => this.onBoxOut();
        const dj_boxMoveTo = new MoveTo(dj_box);
        dj_boxMoveTo.x = 520;
        dj_boxMoveTo.y = 300;
        const dj_boxShowHint = new ShowHint(dj_box);
        dj_boxShowHint.text = "DJ3K";

        // dj_box_lights (components)
        const dj_box_lightsAnimation = new Animation(dj_box_lights);
        dj_box_lightsAnimation.key = "dj/box/lights/lights";
        dj_box_lightsAnimation.end = 30;
        dj_box_lightsAnimation.autoPlay = false;

        // dj_box_headphones_front (components)
        const dj_box_headphones_frontAnimation = new Animation(dj_box_headphones_front);
        dj_box_headphones_frontAnimation.key = "dj/box/headphones/front";
        dj_box_headphones_frontAnimation.end = 30;
        dj_box_headphones_frontAnimation.autoPlay = false;

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.hoverCallback = () => this.onPuffleOver();
        zoneZone.useHandCursor = false;
        zoneZone.clickThrough = true;

        // phase3ThingReveal (components)
        const phase3ThingRevealAnimation = new Animation(phase3ThingReveal);
        phase3ThingRevealAnimation.key = "phase3/fg/reveal";
        phase3ThingRevealAnimation.end = 21;
        phase3ThingRevealAnimation.repeat = 0;
        phase3ThingRevealAnimation.autoPlay = false;
        phase3ThingRevealAnimation.showOnStart = true;
        phase3ThingRevealAnimation.hideOnComplete = true;
        phase3ThingRevealAnimation.onCompleteCallback = () => { this.phase3ThingLoop.visible = true; this.phase3ThingLoop.play(this.phase3ThingAnimKey) };

        // phase3ThingRetract (components)
        const phase3ThingRetractAnimation = new Animation(phase3ThingRetract);
        phase3ThingRetractAnimation.key = "phase3/fg/retract";
        phase3ThingRetractAnimation.end = 17;
        phase3ThingRetractAnimation.repeat = 0;
        phase3ThingRetractAnimation.autoPlay = false;
        phase3ThingRetractAnimation.showOnStart = true;
        phase3ThingRetractAnimation.hideOnComplete = true;

        // polygon_1 (components)
        const polygon_1ShowHint = new ShowHint(polygon_1);
        polygon_1ShowHint.text = "dancing_hint";
        const polygon_1SimpleButton = new SimpleButton(polygon_1);
        polygon_1SimpleButton.hoverCallback = () => this.onDanceContestOver();
        polygon_1SimpleButton.hoverOutCallback = () => this.onDanceContestOut();
        const polygon_1MoveTo = new MoveTo(polygon_1);
        polygon_1MoveTo.x = 1066;
        polygon_1MoveTo.y = 545;

        // polygon_2 (components)
        const polygon_2SimpleButton = new SimpleButton(polygon_2);
        polygon_2SimpleButton.hoverCallback = () => this.onCatalogOver();
        polygon_2SimpleButton.hoverOutCallback = () => this.onCatalogOut();
        polygon_2SimpleButton.callback = () => this.interface.loadWidget('DanceCatalog');

        // interfaceIcons (components)
        const interfaceIconsButton = new Button(interfaceIcons);
        interfaceIconsButton.spriteName = "catalog/icon";
        interfaceIconsButton.callback = () => this.interface.loadWidget('DanceCatalog');

        this.phase1BgAnim = phase1BgAnim;
        this.discoLoop = discoLoop;
        this.discoDrop = discoDrop;
        this.discoRetract = discoRetract;
        this.phase3FloorReveal = phase3FloorReveal;
        this.phase3FloorRetract = phase3FloorRetract;
        this.dancefloor = dancefloor;
        this.dancefloorBW = dancefloorBW;
        this._rings = _rings;
        this._ringsBW = _ringsBW;
        this.catalogBox = catalogBox;
        this.catalogPaper = catalogPaper;
        this.desk0001 = desk0001;
        this.puffle = puffle;
        this.dj_speaker_sound = dj_speaker_sound;
        this.dj_mixer_wave = dj_mixer_wave;
        this.dj_mixer_tables_under = dj_mixer_tables_under;
        this.dj_mixer_tables = dj_mixer_tables;
        this.dj_mixer_lights = dj_mixer_lights;
        this.dj_mixer_slider = dj_mixer_slider;
        this.lights = lights;
        this.lightsBW = lightsBW;
        this.dj_box_headphones_back = dj_box_headphones_back;
        this.dj_box_sliders = dj_box_sliders;
        this.dj_box_lights = dj_box_lights;
        this.dj_box_headphones_front = dj_box_headphones_front;
        this.poster = poster;
        this.phase3ThingReveal = phase3ThingReveal;
        this.phase3ThingLoop = phase3ThingLoop;
        this.phase3ThingRetract = phase3ThingRetract;
        this.interfaceIcons = interfaceIcons;
        this.spotlights = spotlights;
        this.sort = sort;
        this.animate = animate;
        this._tint = _tint;
        this._bwRings = _bwRings;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.puffle.on('animationcomplete', () => this.onPuffleAnimComplete())
        this.dj_box_sliders.on('animationcomplete', () => this.onSlidersAnimComplete())
        this.dj_mixer_wave.on('animationcomplete', () => this.onWaveAnimComplete())

        this.puffle.play('dj_puffle_idle')

        this.previousRaveState = 0
        this.raveState = 0

        this.phase1StuffShowing = false
        this.phase3StuffShowing = false
        this.phase3ThingAnimKey = 'phase3Thing'

        this.onPenguinsAdded = () => this.initCheckPenguins()
        this.onPenguinRemove = (x) => this.checkPenguins()
        this.onPenguinUpdate = (x) => this.checkPenguins()
        this.events.on('addpenguin',() => this.checkPenguins())

        this.colorTints = [ //these are ordered by color id
            0x85b8ec, //same as blue to fill in for the 0 index
            0x85b8ec, //Blue
            0x89d87e, //Green
            0xf588bf, //Pink
            0x9a9a9a, //Black
            0xea7676, //Red
            0xe29e70, //Orange
            0xf9fa8f, //Yellow
            0xbc85df, //Dark Purple
            0xdbbc94, //Brown
            0xdb9494, //Peach
            0x94db9b, //Dark green
            0x94c9db, //Light Blue
            0xb2e1a4, //Lime Green
            0xffffff, //Sensei grey (never meant to be seen)
            0xa7dfdd, //Aqua
            0xcacbb8, //Arctic White
            0xffffff, //Dot Lavender (never meant to be seen)
            0xf796b3, //Valentines Pink
            0x85b8ec, //Old Blue
            0xc28ea5, //Maroon
            0xbfb4d4, //Lavender
            0xf1d0f8, //Blossom
            0xe4bc98, //Mocha
            0xea7676, //Candyapple
            0x8ae4f7, //Glacial
            0xc5d1ac, //Olive Green
            0xfcfe85, //Popcorn
            0xb7b7b7, //Charcoal (same as black because laziness)
            0xd182f3, //Neon Purple
        ]
        this.floorTints = [ //these are ordered by color id
            0x7280f5, //same as blue to fill in for the 0 index
            0x7280f5, //Blue
            0x2cff59, //Green
            0xff64da, //Pink
            0xb7b7b7, //Black
            0xff4242, //Red
            0xf79644, //Orange
            0xfdff4f, //Yellow
            0x9f00fa, //Dark Purple
            0xd7aa6f, //Brown
            0xf48282, //Peach
            0x18b334, //Dark Green
            0x5eb5e0, //Light Blue
            0x2afa7b, //Lime green
            0xffffff, //Sensei grey (never meant to be seen)
            0x53d3bb, //Aqua
            0xe4e3d0, //Arctic White
            0xffffff, //Dot Lavender (never meant to be seen)
            0xf59eb8, //Valentines Pink
            0x7280f5, //Old Blue
            0xcb598b, //Maroon
            0xb7aacf, //Lavender
            0xe7ccea, //Blossom
            0xf8c394, //Mocha
            0xff4242, //Candyapple
            0x87eafe, //Glacial
            0xaebe89, //Olive Green
            0xfbfc8d, //Popcorn
            0xb7b7b7, //Charcoal (same as black because laziness)
            0xbd2efc, //Neon Purple
        ]
    }

    initCheckPenguins() {
        if(!this.penguins) return

        let penguins = Object.keys(this.penguins).length

        for(let i = 1; i < 4; i++) {
            if(penguins >= this[`PHASE${i}_POPULATION`]) {
                this.raveState = i
                //this.checkRave()
            } else if(this.raveState == i) {
                this.raveState = i - 1
            }
            this.checkRave()
            this.previousRaveState = this.raveState
        }
    }

    checkPenguins() {
        if(!this.penguins) return

        let penguins = Object.keys(this.penguins).length

        if(penguins >= this.PHASE3_POPULATION) {
            //if(this.raveState == 3) return
            this.raveState = 3
        } else if(penguins >= this.PHASE2_POPULATION) {
            //if(this.raveState == 2) return
            if(this.raveState == 3) this.previousRaveState = 3
            this.raveState = 2
        } else if(penguins >= this.PHASE1_POPULATION) {
            //if(this.raveState == 1) return
            if(this.raveState == 2) this.previousRaveState = 2
            this.raveState = 1
        } else {
            if(this.raveState == 1) this.previousRaveState = 1
            //if(this.raveState == 0) return
            this.raveState = 0
        }

        this.checkRave()
    }

    checkColor() {
        if(!this.penguins) return
        let penguins = Object.keys(this.penguins).length
        if(penguins < this.PHASE1_POPULATION) return
        //disclaimer: i barely know what this does, i basically just copied and pasted from the swf lololololloolloololl

        let colors = [
            {count:0,priority:999}, //null
            {count:0,priority:10}, //Blue
            {count:0,priority:5}, //Green
            {count:0,priority:11}, //Pink
            {count:0,priority:13}, //Black
            {count:0,priority:1}, //Red
            {count:0,priority:2}, //Orange
            {count:0,priority:3}, //Yellow
            {count:0,priority:9}, //Dark Purple
            {count:0,priority:14}, //Brown
            {count:0,priority:12}, //Peach
            {count:0,priority:6}, //Dark Green
            {count:0,priority:8}, //Light Blue
            {count:0,priority:4}, //Lime Green
            {count:0,priority:999}, //Sensei Grey
            {count:0,priority:7}, //Aqua
            {count:0,priority:23}, //Arctic White
            {count:0,priority:999}, //Dot Lavender
            {count:0,priority:17}, //Valentine Pink
            {count:0,priority:16}, //Old Blue
            {count:0,priority:19}, //Maroon
            {count:0,priority:22}, //Lavender
            {count:0,priority:15}, //Blossom
            {count:0,priority:21}, //Mocha
            {count:0,priority:18}, //Candyapple
            {count:0,priority:20}, //Glacial
            {count:0,priority:27}, //Olive Green
            {count:0,priority:24}, //Popcorn
            {count:0,priority:26}, //Charcoal
            {count:0,priority:25}, //Neon Purple
        ]

        for(let penguin of Object.values(this.penguins)) {
            let color = penguin.color;
            if(colors[color].count != 0) {
               colors[color].count++;
            } else {
               colors[color].count = 1;
            }
        }
        let uh = 0
        for(let i = 0; i < colors.length; i++) {
            if(colors[i].count == colors[uh].count && colors[i].priority < colors[uh].priority) {
                uh = i;
             }
             if(colors[i].count > colors[uh].count) {
                uh = i;
             }
        }
        if(uh === 0 || colors[uh].count < 10) {
            //no color, so set everything to the default tint
            this.phase1BgAnim.clearTint()
            this.lightsBW.visible = false
            this.lights.visible = true
            this.dancefloorBW.visible = false
            this.dancefloor.visible = true
            if(penguins >= this.PHASE2_POPULATION) this._rings.visible = true
            this._ringsBW.visible = false
            this.spotlights.setFrame('phase2/fg/spotlight')
            if(this.phase3ThingLoop.anims && this.phase3ThingLoop.anims.currentFrame) {
                if(this.phase3ThingLoop.anims.currentAnim.key != 'phase3Thing')  this.phase3ThingLoop.play({ key: 'phase3Thing', startFrame: this.phase3ThingLoop.anims.currentFrame.index })
            } else {
                this.phase3ThingLoop.play('phase3Thing')
            }
            this.phase3ThingAnimKey = 'phase3Thing'
            this.phase3ThingLoop.clearTint()
            this.phase3ThingReveal.clearTint()
            this.phase3ThingRetract.clearTint()
            for(let gameObject of this._tint) {
                gameObject.clearTint()
                gameObject.setTint(this.DARK_TINT)
            }
            return
        }
        for(let gameObject of this._tint) {
            if(!this.colorTints[uh]) return
            gameObject.clearTint()
            gameObject.setTint(this.colorTints[uh])
        }
        this.phase3ThingReveal.setTint(this.colorTints[uh])
        this.phase3ThingRetract.setTint(this.colorTints[uh])
        this.phase1BgAnim.setTint(this.colorTints[uh])
        this.dancefloorBW.setTint(this.floorTints[uh])
        this.lightsBW.setTint(this.floorTints[uh])
        this.dancefloorBW.visible = true
        this.dancefloor.visible = false
        this.lightsBW.visible = true
        this.lights.visible = false
        this._rings.visible = false
        if(penguins >= this.PHASE2_POPULATION) this._ringsBW.visible = true
        for(let stupid of this._bwRings) {
            stupid.setTint(this.colorTints[uh])
        }
        this.spotlights.setFrame('phase2/fg/spotlight-bw')
        this.spotlights.setTint(this.colorTints[uh])
        if(this.phase3ThingLoop.anims && this.phase3ThingLoop.anims.currentFrame) {
            if(this.phase3ThingLoop.anims.currentAnim.key != 'phase3ThingBW') this.phase3ThingLoop.play({ key: 'phase3ThingBW', startFrame: this.phase3ThingLoop.anims.currentFrame.index })
        } else {
            this.phase3ThingLoop.play('phase3ThingBW')
        }
        this.phase3ThingAnimKey = 'phase3ThingBW'
        this.phase3ThingLoop.setTint(this.colorTints[uh])
    }

    checkRave() {
        switch(this.raveState) {
            case 0:
                if(this.previousRaveState > 0) {
                    this.discoDrop.__Animation.stop()
                    this.discoLoop.__Animation.stop()
                    this.phase1BgAnim.__Animation.stop()
                    this.discoRetract.__Animation.play()
                    this.previousRaveState = 0
                    this.phase1StuffShowing = false
                } else {
                    this.resetEverything()
                }
                break
            case 1:
                if(this.previousRaveState > 1) {
                    this._rings.visible = false
                    this._ringsBW.visible = false
                    this.spotlights.visible = false
                } else if(!this.phase1StuffShowing) {
                    for(let gameObject of this._tint) {
                        gameObject.setTint(this.DARK_TINT)
                    }
                    this.discoDrop.__Animation.play()
                    this.phase1StuffShowing = true
                }
                break
            case 2:
                if(this.previousRaveState > 2 && this.phase3StuffShowing) {
                    this.phase3FloorRetract.__Animation.play()
                    this.phase3FloorReveal.visible = false
                    this.phase3ThingLoop.visible = false
                    this.phase3FloorReveal.__Animation.stop()
                    this.phase3ThingLoop.anims.stop()
                    this.phase3ThingReveal.__Animation.stop()
                    this.phase3ThingRetract.__Animation.play()
                    this.phase3StuffShowing = false
                    this.previousRaveState = 2
                } else {
                    if(this.discoDrop.anims.isPlaying) {
                        this.discoDrop.__Animation.stop()
                        this.discoDrop.__Animation.onCompleteCallback()
                    }
                    this._rings.visible = true
                    this.spotlights.visible = true
                }
                break
            case 3:
                if(this.previousRaveState === 3 || this.phase3StuffShowing) break
                this.phase3StuffShowing = true
                this.phase3FloorReveal.__Animation.play()
                this.phase3ThingReveal.__Animation.play()
                break
            default: break
        }
        this.checkColor()
    }

    resetEverything() {
        for(let gameObject of this._tint) gameObject.clearTint()
        this.dancefloorBW.visible = false
        this.dancefloor.visible = true
        this.lightsBW.visible = false
        this.lights.visible = true
    }

    onPuffleAnimComplete() {
        this.puffle.play('dj_puffle_idle')
    }

    onSlidersAnimComplete() {
        this.dj_box_sliders.play('dj_sliders_move')
    }

    onWaveAnimComplete() {
        this.dj_mixer_wave.play('dj_wave_move')
    }

    onPuffleOver() {
        this.puffle.play('dj_puffle_jump')
    }

    onBoxOver() {
        for (let sprite of this.animate) {
            sprite.__Animation.play()
        }

        this.dj_box_sliders.play('dj_sliders_on')
        this.dj_mixer_wave.play('dj_wave_on')
    }

    onBoxOut() {
        for (let sprite of this.animate) {
            sprite.__Animation.stop()
        }

        this.dj_box_sliders.stop()
        this.dj_mixer_wave.stop()

        this.dj_box_sliders.setFrame('dj/box/sliders/sliders0001')
        this.dj_mixer_wave.setFrame('dj/mixer/wave/wave0001')
    }

    onDanceContestOver() {
        this.poster.setFrame("poster-hover")
        this.desk0001.__Animation.play()
    }

    onDanceContestOut() {
        this.poster.setFrame("poster")
        this.desk0001.__Animation.stop()
        this.desk0001.setFrame("desk0001")
    }

    onCatalogOver() {
        this.catalogBox.setFrame('catalog/box-hover')
        this.catalogPaper.__Animation.play()
    }

    onCatalogOut() {
        this.catalogBox.setFrame('catalog/box')
        this.catalogPaper.__Animation.stop()
        this.catalogPaper.setFrame('catalog/paper0001')
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */