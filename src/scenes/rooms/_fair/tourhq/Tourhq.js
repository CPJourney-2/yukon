import RoomScene from '@rooms/RoomScene'
import { Animation, Button, HoverAnimation, MoveTo, SimpleButton, ShowHint } from '@components/components'
import RoomPin from '@rooms/RoomPin'
// You can write more code here

/* START OF COMPILED CODE */

export default class Tourhq extends RoomScene {

    constructor() {
        super("Tourhq");

        /** @type {Phaser.GameObjects.Sprite} */
        this.suggestions;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'lookout': () => this.triggerRoom(3, 484, 788),
            'welcome': () => this.triggerRoom(1, 1064, 588)
        }
        this.music = 221
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("fair-tourhq-pack", "assets/media/rooms/_fair/tourhq/fair-tourhq-pack.json");
        this.load.pack("tourhq-pack", "assets/media/rooms/tourhq/tourhq-pack.json");
    }

    /** @returns {void} */
    _create() {

        // background
        this.add.image(765, 472, "tourhq", "background");

        // floor
        this.add.image(731, 564, "fair-tourhq", "floor");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(518, 210, 128, 300);
        rectangle_1.isFilled = true;

        // weirdKindOfDoor
        const weirdKindOfDoor = this.add.image(783, 167, "fair-tourhq", "weirdKindOfDoor");

        // door_rectangle
        const door_rectangle = this.add.rectangle(767, 194, 550, 380);

        // wall
        this.add.image(734, 254, "fair-tourhq", "wall");

        // weirdAccessories
        this.add.image(768, 222, "fair-tourhq", "weirdAccessories");

        // puffleCannon
        this.add.image(985, 336, "fair-tourhq", "puffleCannon");

        // unicornPlush
        this.add.image(1107, 337, "fair-tourhq", "unicornPlush");

        // rightShadow
        this.add.image(1233, 535, "fair-tourhq", "rightShadow");

        // rug
        this.add.image(784, 692, "fair-tourhq", "rug");

        // couch
        const couch = this.add.image(1304.5568424098517, 424.8006826004683, "tourhq", "couch");
        couch.setOrigin(0.10311457781831974, 0.5420473937513304);
        couch.visible = false;

        // shelf_right
        const shelf_right = this.add.image(1427.79003675224, 607.716014700896, "tourhq", "shelf-right");
        shelf_right.setOrigin(0.022024280218247688, 0.33033784102116903);
        shelf_right.visible = false;

        // map
        this.add.image(196, 287, "fair-tourhq", "map");

        // shelf_left
        const shelf_left = this.add.image(353, 352, "tourhq", "shelf-left");
        shelf_left.setOrigin(0.9215397185680756, 0.4403172164873537);
        shelf_left.visible = false;

        // randomStuff
        this.add.image(349, 205, "fair-tourhq", "randomStuff");

        // weirdStuffOnTable
        const weirdStuffOnTable = this.add.image(353.4381904763093, 351.57696046715756, "fair-tourhq", "weirdStuffOnTable");
        weirdStuffOnTable.setOrigin(0.922281145669038, 0.32076046512416045);

        // coatrack
        const coatrack = this.add.image(78.3703611844509, 555.0829093171932, "tourhq", "coatrack");
        coatrack.setOrigin(0.6095931244627123, 0.8213288449267209);
        coatrack.visible = false;

        // coatHanger
        const coatHanger = this.add.image(71.79617895852853, 557.07008458997, "fair-tourhq", "coatHanger");
        coatHanger.setOrigin(0.5166439223721936, 0.826701321615017);

        // chair2
        const chair2 = this.add.image(287.6592286871613, 651.8603766341184, "tourhq", "chair2");
        chair2.setOrigin(0.48698280278797396, 0.467470738190623);
        chair2.visible = false;

        // chair1
        const chair1 = this.add.image(83.38774508631828, 648.9593138778623, "tourhq", "chair1");
        chair1.setOrigin(0.5037645154011483, 0.4680969232776096);
        chair1.visible = false;

        // topRightHay
        const topRightHay = this.add.image(279, 644.9827885309103, "fair-tourhq", "topRightHay");
        topRightHay.setOrigin(0.5, 0.16982791189107616);

        // _table1
        const _table1 = this.add.container(184.74712371310568, 710.2758865820489);

        // table1
        const table1 = this.add.image(4.25287628689432, -38.275886582048884, "tourhq", "table1");
        table1.visible = false;
        _table1.add(table1);

        // smallerTable
        const smallerTable = this.add.image(5, 8, "fair-tourhq", "smallerTable");
        _table1.add(smallerTable);

        // suggestions
        const suggestions = this.add.sprite(36, -72, "tourhq", "suggestions0001");
        suggestions.setOrigin(0.7413526617742342, 0.31804485538725946);
        _table1.add(suggestions);

        // topLeftHay
        const topLeftHay = this.add.image(93.84140221711532, 710.8241678598421, "fair-tourhq", "topLeftHay");
        topLeftHay.setOrigin(0.4902638940215791, 0.158241945776756);

        // chair4
        const chair4 = this.add.image(439.5654058616299, 748.9578410314095, "tourhq", "chair4");
        chair4.setOrigin(0.49578063943330025, 0.48074582931271864);
        chair4.visible = false;

        // stairs_hit
        const stairs_hit = this.add.polygon(1109, 232, "38.34370186665137 198.43219609734803 30.28023717680162 75.79295456533703 -55.36769817442587 13.936112367228276 -44.661706255522404 -51.48939380384829 58.45313637754407 -131.1944569177159 37.54072567981689 -232.7690231638183 237.7095569096632 -233.3257113360979 215.29621661049623 -113.26953346252135 146.5840100322505 7.7236998600417905 196.1772232720907 76.31282917051169 198.4813622707104 186.91150110425025 138.57374830660206 230.69014207802178");
        stairs_hit.scaleX = 0.9;
        stairs_hit.setOrigin(0, 0);
        stairs_hit.fillColor = 65535;
        stairs_hit.fillAlpha = 0.5;

        // coolLadder
        const coolLadder = this.add.image(1220.534587073977, 418.792395651431, "fair-tourhq", "coolLadder0001");
        coolLadder.setOrigin(0.5780238662100617, 0.9299171160452244);

        // cactus
        this.add.image(1298, 335, "fair-tourhq", "cactus");

        // couch_1
        const couch_1 = this.add.image(1306, 425, "fair-tourhq", "couch");
        couch_1.setOrigin(0.10391765861082385, 0.33536564668342117);

        // stairs
        const stairs = this.add.image(1217.7208362683018, 407.8107604980469, "tourhq", "stairs0001");
        stairs.setOrigin(0.4619223029162555, 0.8561440264325495);
        stairs.visible = false;

        // bottomRightHay
        const bottomRightHay = this.add.image(476.682973698412, 745.6136673059613, "fair-tourhq", "bottomRightHay");
        bottomRightHay.setOrigin(0.5057391868715141, 0.1661364465550264);

        // bottomTable
        const bottomTable = this.add.image(360, 787, "fair-tourhq", "bottomTable");

        // table2
        const table2 = this.add.image(361, 812.7549330800814, "tourhq", "table2");
        table2.setOrigin(0.5, 0.7010833956023411);
        table2.visible = false;

        // bottomLeftHay
        const bottomLeftHay = this.add.image(266.85735113981826, 810.9506812037195, "fair-tourhq", "bottomLeftHay");
        bottomLeftHay.setOrigin(0.4903979087379686, 0.11950702425826876);

        // chair3
        const chair3 = this.add.image(268.1019287109375, 813.3084564881332, "tourhq", "chair3");
        chair3.setOrigin(0.4677992040867657, 0.05898302763211202);
        chair3.visible = false;

        // chair3_back
        const chair3_back = this.add.image(253.70478997432033, 839.3628859117006, "tourhq", "chair3-back");
        chair3_back.setOrigin(0.5108428353736381, 0.8167969830126034);
        chair3_back.visible = false;

        // designedSign
        const designedSign = this.add.image(1205.2039794921875, 511.3288269042969, "fair-tourhq", "designedSign");
        designedSign.setOrigin(0.5096664665954654, 0.18762851253708598);

        // newspaper
        this.add.image(1226, 518, "fair-tourhq", "newspaper");

        // table3
        const table3 = this.add.image(1216.131171198027, 554.3768646553889, "tourhq", "table3");
        table3.setOrigin(0.4814914270840452, 0.6682471026720969);
        table3.visible = false;

        // bigTableChair
        this.add.image(489, 327, "fair-tourhq", "bigTableChair");

        // officechair2
        const officechair2 = this.add.image(492, 321.07510910461536, "tourhq", "officechair2");
        officechair2.setOrigin(0.5, 0.4707097694374281);
        officechair2.visible = false;

        // frontdesk2
        const frontdesk2 = this.add.image(583.3531494140625, 387.11628763916696, "tourhq", "frontdesk2");
        frontdesk2.setOrigin(0.8871777138518552, 0.4788193728262569);
        frontdesk2.visible = false;

        // frontDeskSide
        const frontDeskSide = this.add.image(581.6329854194107, 389.62617795344755, "fair-tourhq", "frontDeskSide");
        frontDeskSide.setOrigin(0.8852724481994992, 0.4773113167798386);

        // frontStars
        this.add.image(574, 443, "fair-tourhq", "frontStars");

        // clownPainting
        this.add.image(1468, 295, "fair-tourhq", "clownPainting");

        // rightTable
        const rightTable = this.add.image(1428.8019333192296, 610.3833941601438, "fair-tourhq", "rightTable");
        rightTable.setOrigin(0.07376656944381821, 0.31525517530093927);

        // brokenChair
        const brokenChair = this.add.image(351.5826730045748, 406.481246699962, "fair-tourhq", "brokenChair");
        brokenChair.setOrigin(0.39148617713098766, 0.6193030681412568);

        // officechair1
        const officechair1 = this.add.image(352.4502258300781, 406.5734837860824, "tourhq", "officechair1");
        officechair1.setOrigin(0.39010642638467746, 0.6378184892874839);
        officechair1.visible = false;

        // _frontdesk1
        const _frontdesk1 = this.add.container(400.4341125488281, 504.93882829726556);

        // frontdesk1
        const frontdesk1 = this.add.image(0, 0.2722287090385862, "tourhq", "frontdesk1");
        frontdesk1.setOrigin(0.41921884818238964, 0.7848192911728652);
        frontdesk1.visible = false;
        _frontdesk1.add(frontdesk1);

        // frontDeskFront_1
        const frontDeskFront_1 = this.add.image(29, -67, "fair-tourhq", "frontDeskFront");
        _frontdesk1.add(frontDeskFront_1);

        // phone
        const phone = this.add.sprite(-79, -67, "tourhq", "phone0001");
        _frontdesk1.add(phone);

        // _tourbot
        const _tourbot = this.add.container(1415.699951171875, 748.2081909179688);

        // tourbot
        const tourbot = this.add.image(0, -62.641531498591014, "tourhq", "tourbot");
        tourbot.setOrigin(0.4273440738105414, 0.2598410433846506);
        tourbot.visible = false;
        _tourbot.add(tourbot);

        // jesterChair
        const jesterChair = this.add.image(-3, -6, "fair-tourhq", "jesterChair");
        _tourbot.add(jesterChair);

        // _tourbotdesk
        const _tourbotdesk = this.add.container(1262.144902182851, 751.2754890857457);

        // bowlingPins
        const bowlingPins = this.add.image(-4, -52, "fair-tourhq", "bowlingPins");
        _tourbotdesk.add(bowlingPins);

        // tourbot_desk
        const tourbot_desk = this.add.image(77.56959079396938, 29.792756393026252, "tourhq", "tourbot-desk");
        _tourbotdesk.add(tourbot_desk);

        // newTableee
        const newTableee = this.add.image(77, 47, "fair-tourhq", "newTableee");
        _tourbotdesk.add(newTableee);

        // fishbowl
        const fishbowl = this.add.sprite(40, -66, "tourhq", "fishbowl0001");
        _tourbotdesk.add(fishbowl);

        // seatbtnslayer
        const seatbtnslayer = this.add.layer();

        // polygon_1
        const polygon_1 = this.add.polygon(372.521314475786, 417.7523414006489, "67.56232638585482 70.17351876418559 22.062357950631565 38.57631846194721 70.09010241003386 18.35411026851466 118.74979087548098 39.840206474036734");
        polygon_1.setOrigin(0.7086889412923437, 0.7092389216237243);
        polygon_1.fillColor = 65535;
        polygon_1.fillAlpha = 0.5;
        seatbtnslayer.add(polygon_1);

        // polygon
        const polygon = this.add.polygon(491.1469346106748, 332.3590175338291, "-25.963699315345252 34.997799659929 -25.963699315345252 0.11422109086981891 24.492905400615427 -3.6233051843865383 35.08256318050837 31.260273384672644");
        polygon.setOrigin(0.0204081630953664, 0.3548387067226611);
        polygon.fillColor = 65535;
        polygon.fillAlpha = 0.5;
        seatbtnslayer.add(polygon);

        // polygon_2
        const polygon_2 = this.add.polygon(282, 655, "91.05786202306575 76.05898278319296 52.60535903167872 51.74992916794827 84.87010292100348 29.2088067247214 131.27829618647058 52.19191196095278");
        polygon_2.setOrigin(1.1387466472095515, 1.0005880478442848);
        polygon_2.fillColor = 65535;
        polygon_2.fillAlpha = 0.5;
        seatbtnslayer.add(polygon_2);

        // polygon_3
        const polygon_3 = this.add.polygon(97, 722, "67.56232638585482 70.17351876418559 22.062357950631565 38.57631846194721 70.09010241003386 18.35411026851466 104.91925890412544 46.77361041404197");
        polygon_3.setOrigin(0.7848126408856168, 0.7446699150837965);
        polygon_3.fillColor = 65535;
        polygon_3.fillAlpha = 0.5;
        seatbtnslayer.add(polygon_3);

        // polygon_4
        const polygon_4 = this.add.polygon(481, 753, "70.81959493784211 58.62293189554521 26.977101010812873 29.26052770588342 67.19957250350024 10.355966104320373 102.59534741706511 31.673875995444632");
        polygon_4.setOrigin(0.9148936012116713, 0.5833333232531774);
        polygon_4.fillColor = 65535;
        polygon_4.fillAlpha = 0.5;
        seatbtnslayer.add(polygon_4);

        // polygon_5
        const polygon_5 = this.add.polygon(272, 822, "-45.14578749532063 -19.273357593192145 -85.61065630283443 -50.668514426608 -38.16908597678378 -69.50560852665751 -1.8902380803920664 -47.877833819193256");
        polygon_5.setOrigin(-0.4833333232724843, -1.055555533583586);
        polygon_5.fillColor = 65535;
        polygon_5.fillAlpha = 0.5;
        seatbtnslayer.add(polygon_5);

        // pufflePenguinForeground
        const pufflePenguinForeground = this.add.image(759.8512195915883, 981.2508521498836, "fair-tourhq", "pufflePenguinForeground");
        pufflePenguinForeground.setOrigin(0.5072975539801182, 0.5191157058516325);

        // greenPuffleBed
        this.add.image(1053, 398, "fair-tourhq", "greenPuffleBed");

        // puffleBed
        const puffleBed = this.add.image(1051.6585348426847, 412.0365932079183, "fair-tourhq", "puffleBed");
        puffleBed.setOrigin(0.48951980345847446, 0.5874868580857727);

        // tourcircusPreview
        const tourcircusPreview = this.add.image(760, 480, "tourcircusPreview");
        tourcircusPreview.visible = false;
        tourcircusPreview.alpha = 0.5;
        tourcircusPreview.alphaTopLeft = 0.5;
        tourcircusPreview.alphaTopRight = 0.5;
        tourcircusPreview.alphaBottomLeft = 0.5;
        tourcircusPreview.alphaBottomRight = 0.5;

        // lists
        const sort = [shelf_right, couch, table3, chair4, chair3_back, chair3, table2, chair1, chair2, _table1, coatrack, _frontdesk1, frontdesk2, shelf_left, officechair1, _tourbotdesk, stairs, _tourbot, topLeftHay, topRightHay, bottomLeftHay, bottomRightHay, bottomTable, coatHanger, frontDeskSide, brokenChair, designedSign, couch_1, weirdStuffOnTable, rightTable, pufflePenguinForeground, coolLadder, puffleBed];

        // weirdKindOfDoor (components)
        const weirdKindOfDoorButton = new Button(weirdKindOfDoor);
        weirdKindOfDoorButton.spriteName = "weirdKindOfDoor";
        weirdKindOfDoorButton.alias = door_rectangle;
        const weirdKindOfDoorMoveTo = new MoveTo(weirdKindOfDoor);
        weirdKindOfDoorMoveTo.x = 772;
        weirdKindOfDoorMoveTo.y = 385;

        // door_rectangle (components)
        const door_rectangleMoveTo = new MoveTo(door_rectangle);
        door_rectangleMoveTo.x = 772;
        door_rectangleMoveTo.y = 385;

        // suggestions (components)
        const suggestionsSimpleButton = new SimpleButton(suggestions);
        suggestionsSimpleButton.hoverCallback = () => this.onSuggestionHover();
        suggestionsSimpleButton.callback = () => this.interface.loadWidget('SuggestionBox');
        suggestionsSimpleButton.pixelPerfect = true;
        const suggestionsShowHint = new ShowHint(suggestions);
        suggestionsShowHint.text = "suggestion_hint";

        // stairs_hit (components)
        const stairs_hitMoveTo = new MoveTo(stairs_hit);
        stairs_hitMoveTo.x = 1200;
        stairs_hitMoveTo.y = 420;

        // coolLadder (components)
        const coolLadderButton = new Button(coolLadder);
        coolLadderButton.spriteName = "coolLadder";
        coolLadderButton.pixelPerfect = true;
        coolLadderButton.alias = stairs_hit;

        // stairs (components)
        const stairsButton = new Button(stairs);
        stairsButton.spriteName = "stairs";
        stairsButton.lazyName = true;
        stairsButton.alias = stairs_hit;

        // phone (components)
        const phoneHoverAnimation = new HoverAnimation(phone);
        phoneHoverAnimation.key = "phone";
        phoneHoverAnimation.end = 48;
        phoneHoverAnimation.pixelPerfect = true;

        // tourbot (components)
        const tourbotSimpleButton = new SimpleButton(tourbot);
        tourbotSimpleButton.callback = () => this.onTourBot();
        tourbotSimpleButton.pixelPerfect = true;
        const tourbotShowHint = new ShowHint(tourbot);
        tourbotShowHint.text = "tourbot_hint";

        // jesterChair (components)
        const jesterChairSimpleButton = new SimpleButton(jesterChair);
        jesterChairSimpleButton.callback = () => this.onTourBot();
        jesterChairSimpleButton.pixelPerfect = true;
        const jesterChairShowHint = new ShowHint(jesterChair);
        jesterChairShowHint.text = "tourbot_hint";

        // fishbowl (components)
        const fishbowlAnimation = new Animation(fishbowl);
        fishbowlAnimation.key = "fishbowl";
        fishbowlAnimation.end = 240;

        // polygon_1 (components)
        const polygon_1SimpleButton = new SimpleButton(polygon_1);
        polygon_1SimpleButton.useHandCursor = false;
        new MoveTo(polygon_1);

        // polygon (components)
        const polygonSimpleButton = new SimpleButton(polygon);
        polygonSimpleButton.useHandCursor = false;
        new MoveTo(polygon);

        // polygon_2 (components)
        const polygon_2SimpleButton = new SimpleButton(polygon_2);
        polygon_2SimpleButton.useHandCursor = false;
        new MoveTo(polygon_2);

        // polygon_3 (components)
        const polygon_3SimpleButton = new SimpleButton(polygon_3);
        polygon_3SimpleButton.useHandCursor = false;
        new MoveTo(polygon_3);

        // polygon_4 (components)
        const polygon_4SimpleButton = new SimpleButton(polygon_4);
        polygon_4SimpleButton.useHandCursor = false;
        new MoveTo(polygon_4);

        // polygon_5 (components)
        const polygon_5SimpleButton = new SimpleButton(polygon_5);
        polygon_5SimpleButton.useHandCursor = false;
        new MoveTo(polygon_5);

        this.suggestions = suggestions;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onSuggestionHover() {
        if(this.suggestions.anims.isPlaying) return
        this.suggestions.play('suggestion-hover')
    }

    onSuggestionDone() {
        this.suggestions.play('suggestion-send')
    }

    onTourBot(){
        this.interface.loadWidget('TourBot')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
