import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, SimpleButton, Zone, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Dance extends RoomScene {

    constructor() {
        super("Dance");

        /** @type {Phaser.GameObjects.Sprite} */
        this.neon;
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
        this.catalogPaper;
        /** @type {Phaser.GameObjects.Image} */
        this.catalogBox;
        /** @type {Phaser.GameObjects.Image} */
        this.interfaceIcons;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container>} */
        this.sort;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.animate;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 741, 557),
            //'town': () => this.triggerRoom(100, 680, 520),
            'boiler': () => this.boilerEnter(),
            'lounge': () => this.triggerRoom(121, 1200, 760),
            'mix': () => this.triggerGame(930),
            'dancing': () => this.triggerGame(952)
        }
        this.roomAnims = true
        this.music = '243'

        //this.preLoop = '5_1'
        //this.mainLoops = ['5_4', '5_5', '5_6', '5_7', '5_8', '5_9']

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dance-pack", "assets/media/rooms/dance/dance-pack.json");
        this.load.pack("fair-dance-pack", "assets/media/rooms/_fair/dance/fair-dance-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(760, 480, "fair-dance", "backgroundDance");

        // door_behind
        const door_behind = this.add.image(154, 434, "dance", "door/behind");
        door_behind.tintTopLeft = 8289918;
        door_behind.tintTopRight = 8289918;
        door_behind.tintBottomLeft = 8289918;
        door_behind.tintBottomRight = 8289918;

        // door
        const door = this.add.sprite(154, 440, "dance", "door/door0001");
        door.setOrigin(0.5, 0.5016722408026756);
        door.tintTopLeft = 8289918;
        door.tintTopRight = 8289918;
        door.tintBottomLeft = 8289918;
        door.tintBottomRight = 8289918;

        // door_frame
        const door_frame = this.add.image(152, 437, "dance", "door/frame");
        door_frame.setOrigin(0.5031446540880503, 0.5);
        door_frame.tintTopLeft = 8289918;
        door_frame.tintTopRight = 8289918;
        door_frame.tintBottomLeft = 8289918;
        door_frame.tintBottomRight = 8289918;

        // neonOutlines
        this.add.image(761, 375, "fair-dance", "neonOutlines");

        // neon
        const neon = this.add.sprite(657, 167, "fair-dance", "neon0001");

        // dancefloor
        const dancefloor = this.add.sprite(646, 698, "fair-dance", "dancefloor0001");

        // stage
        const stage = this.add.image(660, 388, "dance", "stage");
        stage.setOrigin(0.5008576329331046, 0.5028248587570622);
        stage.tintTopLeft = 8289918;
        stage.tintTopRight = 8289918;
        stage.tintBottomLeft = 8289918;
        stage.tintBottomRight = 8289918;

        // fg_wire
        const fg_wire = this.add.image(217, 32, "fair-dance", "wires");
        fg_wire.setOrigin(0.5106382978723404, 0.5063291139240507);

        // fg_speaker_1
        const fg_speaker_1 = this.add.sprite(268, 151, "fair-dance", "speakerTLB0001");

        // fg_speaker_2
        const fg_speaker_2 = this.add.sprite(170, 131, "fair-dance", "speakerTLS0001");
        fg_speaker_2.setOrigin(0.503448275862069, 0.5026455026455027);

        // fg_wire_1
        const fg_wire_1 = this.add.image(1130, 32, "fair-dance", "wires");
        fg_wire_1.setOrigin(0.5106382978723404, 0.5063291139240507);
        fg_wire_1.flipX = true;

        // fg_speaker_1_1
        const fg_speaker_1_1 = this.add.sprite(1080, 151, "fair-dance", "speakerTLB0001");
        fg_speaker_1_1.flipX = true;

        // speaker_3
        const speaker_3 = this.add.image(119, 827, "fair-dance", "speakerBL");
        speaker_3.setOrigin(0.5297297297297298, 0.8456140350877193);

        // fg_speaker_2_1
        const fg_speaker_2_1 = this.add.sprite(1178, 131, "fair-dance", "speakerTLS0001");
        fg_speaker_2_1.setOrigin(0.503448275862069, 0.5026455026455027);
        fg_speaker_2_1.flipX = true;

        // speaker_1
        const speaker_1 = this.add.sprite(338, 432, "fair-dance", "speaker0001");
        speaker_1.setOrigin(0.5655737704918032, 0.770949720670391);

        // lights_frame
        const lights_frame = this.add.image(665, 95, "dance", "lights/frame");
        lights_frame.tintTopLeft = 8618883;
        lights_frame.tintTopRight = 8618883;
        lights_frame.tintBottomLeft = 8618883;
        lights_frame.tintBottomRight = 8618883;

        // lights
        const lights = this.add.sprite(666, 94, "dance", "lights/lights0001");

        // desk0001
        const desk0001 = this.add.sprite(1122, 501, "fair-dance", "dancetable0001");

        // stairs
        const stairs = this.add.image(1361, 433, "dance", "stairs");
        stairs.setOrigin(0.5026455026455027, 0.5010141987829615);

        // puffle_speaker
        const puffle_speaker = this.add.container(1160, 732);

        // speaker_4
        const speaker_4 = this.add.image(2, 1.4705234832657652, "fair-dance", "speakerBR");
        speaker_4.setOrigin(0.45918367346938777, 0.8421052631578947);
        puffle_speaker.add(speaker_4);

        // puffle
        const puffle = this.add.sprite(0, -199.52947651673423, "dance", "puffle/puffle0001");
        puffle.setOrigin(0.5, 0.7933884297520661);
        puffle_speaker.add(puffle);

        // boiler
        const boiler = this.add.container(979.3584381110322, 418.96573398979467);

        // speaker_1_1
        const speaker_1_1 = this.add.sprite(21, 4, "fair-dance", "speaker0001");
        speaker_1_1.setOrigin(0.5655737704918032, 0.770949720670391);
        speaker_1_1.flipX = true;
        boiler.add(speaker_1_1);

        // boiler_door
        const boiler_door = this.add.image(25, -50, "dance", "boiler");
        boiler_door.setOrigin(0.5, 0.4236453201970443);
        boiler_door.flipX = true;
        boiler_door.tintTopLeft = 8289918;
        boiler_door.tintTopRight = 8289918;
        boiler_door.tintBottomLeft = 8289918;
        boiler_door.tintBottomRight = 8289918;
        boiler.add(boiler_door);

        // speakerNeon_2
        const speakerNeon_2 = this.add.image(2, -30, "fair-dance", "speakerNeon");
        speakerNeon_2.flipX = true;
        boiler.add(speakerNeon_2);

        // dj_speaker
        const dj_speaker = this.add.container(790.7929422877853, 305.10866987575673);

        // dj_speaker_speaker
        const dj_speaker_speaker = this.add.image(1.2070577122146915, -0.10866987575673193, "dance", "dj/speaker");
        dj_speaker_speaker.setOrigin(0.4, 0.6923076923076923);
        dj_speaker_speaker.tintTopLeft = 8289918;
        dj_speaker_speaker.tintTopRight = 8289918;
        dj_speaker_speaker.tintBottomLeft = 8289918;
        dj_speaker_speaker.tintBottomRight = 8289918;
        dj_speaker.add(dj_speaker_speaker);

        // dj_speaker_sound
        const dj_speaker_sound = this.add.sprite(6.2070577122146915, -39.10866987575673, "dance", "dj/speaker_sound0001");
        dj_speaker_sound.setOrigin(0.5, 0.5061728395061729);
        dj_speaker_sound.tintTopLeft = 8289918;
        dj_speaker_sound.tintTopRight = 8289918;
        dj_speaker_sound.tintBottomLeft = 8289918;
        dj_speaker_sound.tintBottomRight = 8289918;
        dj_speaker.add(dj_speaker_sound);

        // mixer
        const mixer = this.add.container(656.758588457557, 340.0371580227643);

        // dj_mixer_wave_green
        const dj_mixer_wave_green = this.add.image(0, 12, "dance", "dj/mixer/wave/green");
        mixer.add(dj_mixer_wave_green);

        // dj_mixer_wave
        const dj_mixer_wave = this.add.sprite(0, 12, "dance", "dj/mixer/wave/wave0001");
        dj_mixer_wave.tintTopLeft = 8289918;
        dj_mixer_wave.tintTopRight = 8289918;
        dj_mixer_wave.tintBottomLeft = 8289918;
        dj_mixer_wave.tintBottomRight = 8289918;
        mixer.add(dj_mixer_wave);

        // dj_mixer
        const dj_mixer = this.add.image(0.24141154244296104, 2.962841977235712, "dance", "dj/mixer/mixer");
        dj_mixer.tintTopLeft = 8289918;
        dj_mixer.tintTopRight = 8289918;
        dj_mixer.tintBottomLeft = 8289918;
        dj_mixer.tintBottomRight = 8289918;
        mixer.add(dj_mixer);

        // dj_mixer_tables_under
        const dj_mixer_tables_under = this.add.sprite(1.241411542442961, -4.037158022764288, "dance", "dj/mixer/tables/tables_under0001");
        dj_mixer_tables_under.setOrigin(0.5027027027027027, 0.5128205128205128);
        dj_mixer_tables_under.tintTopLeft = 8289918;
        dj_mixer_tables_under.tintTopRight = 8289918;
        dj_mixer_tables_under.tintBottomLeft = 8289918;
        dj_mixer_tables_under.tintBottomRight = 8289918;
        mixer.add(dj_mixer_tables_under);

        // dj_mixer_tables
        const dj_mixer_tables = this.add.sprite(0.24141154244296104, -7.037158022764288, "dance", "dj/mixer/tables/tables0001");
        dj_mixer_tables.setOrigin(0.5, 0.5161290322580645);
        dj_mixer_tables.tintTopLeft = 8289918;
        dj_mixer_tables.tintTopRight = 8289918;
        dj_mixer_tables.tintBottomLeft = 8289918;
        dj_mixer_tables.tintBottomRight = 8289918;
        mixer.add(dj_mixer_tables);

        // dj_mixer_lights
        const dj_mixer_lights = this.add.sprite(0.24141154244296104, -20.037158022764288, "dance", "dj/mixer/lights/lights0001");
        dj_mixer_lights.tintTopLeft = 8289918;
        dj_mixer_lights.tintTopRight = 8289918;
        dj_mixer_lights.tintBottomLeft = 8289918;
        dj_mixer_lights.tintBottomRight = 8289918;
        mixer.add(dj_mixer_lights);

        // dj_mixer_slider
        const dj_mixer_slider = this.add.sprite(0.24141154244296104, -20.037158022764288, "dance", "dj/mixer/slider/slider0001");
        dj_mixer_slider.tintTopLeft = 8289918;
        dj_mixer_slider.tintTopRight = 8289918;
        dj_mixer_slider.tintBottomLeft = 8289918;
        dj_mixer_slider.tintBottomRight = 8289918;
        mixer.add(dj_mixer_slider);

        // dj_wires
        const dj_wires = this.add.image(5.241411542442961, 29.962841977235712, "dance", "dj/wires");
        dj_wires.setOrigin(0.5014836795252225, 0.5050505050505051);
        dj_wires.tintTopLeft = 8289918;
        dj_wires.tintTopRight = 8289918;
        dj_wires.tintBottomLeft = 8289918;
        dj_wires.tintBottomRight = 8289918;
        mixer.add(dj_wires);

        // box
        const box = this.add.container(520.6001395292443, 309.6122881275866);

        // dj_box_headphones_back
        const dj_box_headphones_back = this.add.sprite(-52.600168515674795, -58.61229112964787, "dance", "dj/box/headphones/back0001");
        dj_box_headphones_back.setOrigin(0.5135135135135135, 0.5);
        dj_box_headphones_back.tintTopLeft = 8289918;
        dj_box_headphones_back.tintTopRight = 8289918;
        dj_box_headphones_back.tintBottomLeft = 8289918;
        dj_box_headphones_back.tintBottomRight = 8289918;
        box.add(dj_box_headphones_back);

        // dj_box
        const dj_box = this.add.image(1.3998314843252047, 2.387708870352128, "dance", "dj/box/box");
        dj_box.setOrigin(0.5, 0.75);
        dj_box.tintTopLeft = 8289918;
        dj_box.tintTopRight = 8289918;
        dj_box.tintBottomLeft = 8289918;
        dj_box.tintBottomRight = 8289918;
        box.add(dj_box);

        // dj_box_sliders
        const dj_box_sliders = this.add.sprite(30.399831484325205, 2.387708870352128, "dance", "dj/box/sliders/sliders0001");
        dj_box_sliders.setOrigin(0.5, 0.5151515151515151);
        dj_box_sliders.tintTopLeft = 8289918;
        dj_box_sliders.tintTopRight = 8289918;
        dj_box_sliders.tintBottomLeft = 8289918;
        dj_box_sliders.tintBottomRight = 8289918;
        box.add(dj_box_sliders);

        // dj_box_lights
        const dj_box_lights = this.add.sprite(43.399831484325205, -44.61229112964787, "dance", "dj/box/lights/lights0001");
        dj_box_lights.setOrigin(0.5, 0.5072463768115942);
        dj_box_lights.tintTopLeft = 8289918;
        dj_box_lights.tintTopRight = 8289918;
        dj_box_lights.tintBottomLeft = 8289918;
        dj_box_lights.tintBottomRight = 8289918;
        box.add(dj_box_lights);

        // dj_box_headphones_front
        const dj_box_headphones_front = this.add.sprite(-26.600168515674795, -70.61229112964787, "dance", "dj/box/headphones/front0001");
        dj_box_headphones_front.setOrigin(0.5, 0.509090909090909);
        dj_box_headphones_front.tintTopLeft = 8289918;
        dj_box_headphones_front.tintTopRight = 8289918;
        dj_box_headphones_front.tintBottomLeft = 8289918;
        dj_box_headphones_front.tintBottomRight = 8289918;
        box.add(dj_box_headphones_front);

        // zone
        const zone = this.add.rectangle(1160, 533, 60, 50);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // poster
        const poster = this.add.image(1168, 365, "dance", "poster");
        poster.tintTopLeft = 8289918;
        poster.tintTopRight = 8289918;
        poster.tintBottomLeft = 8289918;
        poster.tintBottomRight = 8289918;

        // polygon_1
        const polygon_1 = this.add.polygon(1142.7683850705682, 436.6970015883089, "-28.654961469025196 174.44148245048498 -15.0055715075965 149.62735118505242 57.77927367475783 111.91094395310469 90.45638148052265 -53.96163885365911 201.62503171025634 -28.60698628060078 179.6806758193739 173.50819083112114 94.47314030269035 221.146211760087 46.74288207050404 256.8783500761387");
        polygon_1.setOrigin(0.4903090404500476, 0.43468346884600356);
        polygon_1.alpha = 0.8;
        polygon_1.fillColor = 7339828;

        // neonFG
        const neonFG = this.add.image(669, 984.2399651323096, "fair-dance", "neonFG");
        neonFG.setOrigin(0.5, 2.6511827019685743);

        // speakerNeon
        this.add.image(340, 397, "fair-dance", "speakerNeon");

        // catalogPaper
        const catalogPaper = this.add.sprite(253, 362, "dance", "catalog/paper0001");
        catalogPaper.tintTopLeft = 8618883;
        catalogPaper.tintTopRight = 8618883;
        catalogPaper.tintBottomLeft = 8618883;
        catalogPaper.tintBottomRight = 8618883;

        // catalogBox
        const catalogBox = this.add.image(281, 473, "dance", "catalog/box");
        catalogBox.setOrigin(0.5, 0.7032867669320754);
        catalogBox.tintTopLeft = 8618883;
        catalogBox.tintTopRight = 8618883;
        catalogBox.tintBottomLeft = 8618883;
        catalogBox.tintBottomRight = 8618883;

        // polygon_2
        const polygon_2 = this.add.polygon(220, 338, "66.1946175725401 180.9666965418778 11.544880888460526 148.19550372532404 8.736256330428134 80.22514100602649 2.6813278184423552 -0.6590267900156164 46.13778922914082 -10.687440961715254 60.62327636604027 45.02597110328276 75.10876350293978 63.96853120538202 109.6510789832385 80.68255482488144 126.36510260273792 145.31011282027913");
        polygon_2.setOrigin(0, 0);
        polygon_2.alpha = 0.8;
        polygon_2.fillColor = 7339828;

        // interfaceIcons
        const interfaceIcons = this.add.image(1418, 884, "dance", "catalog/icon");

        // lists
        const sort = [speaker_3, boiler, box, dj_speaker, mixer, puffle_speaker, neonFG];
        const animate = [dj_box_headphones_front, dj_box_lights, dj_mixer_slider, dj_mixer_lights, dj_mixer_tables, dj_mixer_tables_under, dj_speaker_sound, dj_box_headphones_back];

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

        // neon (components)
        const neonAnimation = new Animation(neon);
        neonAnimation.key = "neon";
        neonAnimation.end = 38;

        // dancefloor (components)
        const dancefloorAnimation = new Animation(dancefloor);
        dancefloorAnimation.key = "dancefloor";
        dancefloorAnimation.end = 190;

        // fg_speaker_1 (components)
        const fg_speaker_1Animation = new Animation(fg_speaker_1);
        fg_speaker_1Animation.key = "speakerTLB";
        fg_speaker_1Animation.end = 10;

        // fg_speaker_2 (components)
        const fg_speaker_2Animation = new Animation(fg_speaker_2);
        fg_speaker_2Animation.key = "speakerTLS";
        fg_speaker_2Animation.end = 10;

        // fg_speaker_1_1 (components)
        const fg_speaker_1_1Animation = new Animation(fg_speaker_1_1);
        fg_speaker_1_1Animation.key = "speakerTLB";
        fg_speaker_1_1Animation.end = 10;

        // fg_speaker_2_1 (components)
        const fg_speaker_2_1Animation = new Animation(fg_speaker_2_1);
        fg_speaker_2_1Animation.key = "speakerTLS";
        fg_speaker_2_1Animation.end = 10;

        // speaker_1 (components)
        const speaker_1Animation = new Animation(speaker_1);
        speaker_1Animation.key = "speaker";
        speaker_1Animation.end = 10;

        // lights (components)
        const lightsAnimation = new Animation(lights);
        lightsAnimation.key = "lights/lights";
        lightsAnimation.end = 80;

        // desk0001 (components)
        const desk0001Animation = new Animation(desk0001);
        desk0001Animation.key = "dancetable";
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
        speaker_1_1Animation.key = "speaker";
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

        // polygon_1 (components)
        const polygon_1ShowHint = new ShowHint(polygon_1);
        polygon_1ShowHint.text = "dancing_hint";
        const polygon_1SimpleButton = new SimpleButton(polygon_1);
        polygon_1SimpleButton.hoverCallback = () => this.onDanceContestOver();
        polygon_1SimpleButton.hoverOutCallback = () => this.onDanceContestOut();
        const polygon_1MoveTo = new MoveTo(polygon_1);
        polygon_1MoveTo.x = 1066;
        polygon_1MoveTo.y = 545;

        // catalogPaper (components)
        const catalogPaperAnimation = new Animation(catalogPaper);
        catalogPaperAnimation.key = "catalog/paper";
        catalogPaperAnimation.end = 7;
        catalogPaperAnimation.repeat = 0;
        catalogPaperAnimation.autoPlay = false;

        // polygon_2 (components)
        const polygon_2SimpleButton = new SimpleButton(polygon_2);
        polygon_2SimpleButton.hoverCallback = () => this.onCatalogOver();
        polygon_2SimpleButton.hoverOutCallback = () => this.onCatalogOut();
        polygon_2SimpleButton.callback = () => this.interface.loadWidget('DanceCatalog');

        // interfaceIcons (components)
        const interfaceIconsButton = new Button(interfaceIcons);
        interfaceIconsButton.spriteName = "catalog/icon";
        interfaceIconsButton.callback = () => this.interface.loadWidget('DanceCatalog');

        this.neon = neon;
        this.desk0001 = desk0001;
        this.puffle = puffle;
        this.dj_speaker_sound = dj_speaker_sound;
        this.dj_mixer_wave = dj_mixer_wave;
        this.dj_mixer_tables_under = dj_mixer_tables_under;
        this.dj_mixer_tables = dj_mixer_tables;
        this.dj_mixer_lights = dj_mixer_lights;
        this.dj_mixer_slider = dj_mixer_slider;
        this.dj_box_headphones_back = dj_box_headphones_back;
        this.dj_box_sliders = dj_box_sliders;
        this.dj_box_lights = dj_box_lights;
        this.dj_box_headphones_front = dj_box_headphones_front;
        this.poster = poster;
        this.catalogPaper = catalogPaper;
        this.catalogBox = catalogBox;
        this.interfaceIcons = interfaceIcons;
        this.sort = sort;
        this.animate = animate;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.puffle.on('animationcomplete', () => this.onPuffleAnimComplete())
        this.dj_box_sliders.on('animationcomplete', () => this.onSlidersAnimComplete())
        this.dj_mixer_wave.on('animationcomplete', () => this.onWaveAnimComplete())

        this.puffle.play('dj_puffle_idle')
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

    boilerEnter() {
        this.triggerRoom(804, 0, 0)
    }

    onDanceContestOver() {
        this.poster.setFrame("poster-hover")
        this.desk0001.__Animation.play()
    }

    onDanceContestOut() {
        this.poster.setFrame("poster")
        this.desk0001.__Animation.stop()
        this.desk0001.setFrame("dancetable0001")
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