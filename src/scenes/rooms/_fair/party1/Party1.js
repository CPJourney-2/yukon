import RoomScene from '@rooms/RoomScene'

import { Animation, Button, MoveTo, ZoneTrigger, SimpleButton, ShowHint } from '@components/components'

import RoomPin from '@rooms/RoomPin'

/* START OF COMPILED CODE */

export default class Party1 extends RoomScene {

    constructor() {
        super("Party1");

        /** @type {Phaser.GameObjects.Sprite} */
        this.water;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'exit': () => this.triggerRoom(801, 950, 321),
        }

        this.music = 221;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("fair-party1-pack", "assets/media/rooms/_fair/party1/fair-party1-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bgParty1
        const bgParty1 = this.add.image(0, 0, "fair-party1", "bgParty1");
        bgParty1.setOrigin(0, 0);

        // bale1
        const bale1 = this.add.image(1212, 628, "fair-party1", "bale1");

        // bale2
        const bale2 = this.add.image(1284, 655, "fair-party1", "bale2");

        // bale3
        const bale3 = this.add.image(1192, 683, "fair-party1", "bale3");

        // bales
        const bales = this.add.image(264, 639.1685476930988, "fair-party1", "bales");
        bales.setOrigin(0.5, 0.590245526707636);

        // board02
        this.add.image(932, 203, "fair-party1", "board02");

        // tramp
        const tramp = this.add.image(283.5998840332031, 272.96087646484375, "fair-party1", "tramp");
        tramp.setOrigin(0.4559483688108359, 0.6468267080280173);

        // ballonPopSign
        const ballonPopSign = this.add.container(593.2391357421875, 409.6854133032829);

        // balloonSign
        const balloonSign = this.add.sprite(26.76089031039362, -191.68541460884722, "fair-party1", "balloonSign0001");
        ballonPopSign.add(balloonSign);

        // balloonSignArrow
        const balloonSignArrow = this.add.sprite(-103.23910968960638, -120.68541460884722, "fair-party1", "balloonSignArrow0001");
        ballonPopSign.add(balloonSignArrow);

        // balloonSignBG
        const balloonSignBG = this.add.image(-17.23910968960638, -206.68541460884722, "fair-party1", "balloonSignBG");
        ballonPopSign.add(balloonSignBG);

        // balloonSignBottom
        const balloonSignBottom = this.add.image(-80.23910968960638, -38.685414608847225, "fair-party1", "balloonSignBottom");
        ballonPopSign.add(balloonSignBottom);

        // balloonSignText
        const balloonSignText = this.add.image(-7.23910968960638, -344.6854146088472, "fair-party1", "balloonSignText");
        ballonPopSign.add(balloonSignText);

        // fgMiddle
        this.add.image(760, 447, "fair-party1", "fgMiddle");

        // fgRock
        this.add.image(1025, 798, "fair-party1", "fgRock");

        // soda
        const soda = this.add.image(463, 743.6503007711098, "fair-party1", "soda");
        soda.setOrigin(0.5, 0.7002994093518438);

        // fgParty1
        const fgParty1 = this.add.image(738, 837.0590585578291, "fair-party1", "fgParty1");
        fgParty1.setOrigin(0.5, 0.7559747385960243);

        // water
        const water = this.add.sprite(1272, 313, "fair-party1", "water0001");
        water.scaleX = 0.75;
        water.scaleY = 0.75;

        // waterSignBG
        const waterSignBG = this.add.image(1233, 116, "fair-party1", "waterSignBG");
        waterSignBG.scaleX = 0.75;
        waterSignBG.scaleY = 0.75;

        // waterTent
        const waterTent = this.add.image(1233.1165771484375, 293.3320007324219, "fair-party1", "waterTent");
        waterTent.scaleX = 0.75;
        waterTent.scaleY = 0.75;
        waterTent.setOrigin(0.4379855972985472, 0.6116740976896095);

        // lights
        const lights = this.add.sprite(1236, 107, "fair-party1", "lights0001");
        lights.scaleX = 0.75;
        lights.scaleY = 0.75;

        // soakerwords
        this.add.image(1233, 180, "fair-party1", "soakerwords");

        // balloonTrigger
        const balloonTrigger = this.add.rectangle(295, 461.63949534377986, 128, 128);
        balloonTrigger.scaleX = 2.399772774006089;
        balloonTrigger.setOrigin(0.5, 0.9971835573732801);

        // soakerTrigger
        const soakerTrigger = this.add.rectangle(1229, 512, 128, 128);
        soakerTrigger.scaleX = 2.399772774006089;
        soakerTrigger.setOrigin(0.5, 0.9971835573732801);

        // lists
        const sort = [bales, bale3, bale1, bale2, soda, fgParty1, ballonPopSign];

        // tramp (components)
        new SimpleButton(tramp);
        const trampMoveTo = new MoveTo(tramp);
        trampMoveTo.x = 281;
        trampMoveTo.y = 416;
        const trampShowHint = new ShowHint(tramp);
        trampShowHint.text = "Balloon Pop";

        // balloonSign (components)
        const balloonSignAnimation = new Animation(balloonSign);
        balloonSignAnimation.key = "balloonSign";
        balloonSignAnimation.end = 12;

        // balloonSignArrow (components)
        const balloonSignArrowAnimation = new Animation(balloonSignArrow);
        balloonSignArrowAnimation.key = "balloonSignArrow";
        balloonSignArrowAnimation.end = 39;

        // water (components)
        const waterAnimation = new Animation(water);
        waterAnimation.key = "water";
        waterAnimation.end = 40;
        waterAnimation.repeat = 0;
        waterAnimation.onHover = true;

        // waterTent (components)
        const waterTentSimpleButton = new SimpleButton(waterTent);
        waterTentSimpleButton.hoverCallback = () => this.onTent();
        const waterTentMoveTo = new MoveTo(waterTent);
        waterTentMoveTo.x = 1204;
        waterTentMoveTo.y = 455;
        const waterTentShowHint = new ShowHint(waterTent);
        waterTentShowHint.text = "Puffle Soaker";

        // lights (components)
        const lightsAnimation = new Animation(lights);
        lightsAnimation.key = "lights";
        lightsAnimation.end = 37;

        // balloonTrigger (components)
        const balloonTriggerZoneTrigger = new ZoneTrigger(balloonTrigger);
        balloonTriggerZoneTrigger.callback = () => this.triggerGame(929);

        // soakerTrigger (components)
        const soakerTriggerZoneTrigger = new ZoneTrigger(soakerTrigger);
        soakerTriggerZoneTrigger.callback = () => this.triggerGame(924);

        this.water = water;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onTent() {
        this.water.__Animation.play();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */