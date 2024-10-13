import BaseContainer from '@scenes/base/BaseContainer'
//import BaseWidget from '@scenes/interface/game/BaseWidget'

import { Button, Interactive, ShowHint, SimpleButton, Animation, MapAnimation } from '@components/components'

import IglooMap from '../../map/igloo_map/IglooMap'


export const preload = {
    key: 'fair-map-pack',
    url: 'assets/media/interface/game/_fair/map/fair-map-pack.json',
    loadString: ['loading', 'map']
}

/* START OF COMPILED CODE */

export default class Map extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 759, y ?? 480);

        /** @type {Phaser.GameObjects.Sprite} */
        this.dock;
        /** @type {Phaser.GameObjects.Sprite} */
        this.spotlights;
        /** @type {IglooMap} */
        this.iglooMap;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.image(4, -8, "map", "bg");
        this.add(bg);

        // waterfall
        const waterfall = scene.add.sprite(33, -173, "map", "waterfall0001");
        this.add(waterfall);

        // berg
        const berg = scene.add.sprite(660, -59, "fair-map", "berg0001");
        this.add(berg);

        // island2
        const island2 = scene.add.image(254, 9, "map", "island2");
        this.add(island2);

        // island7
        const island7 = scene.add.image(-185, 57, "map", "island7");
        this.add(island7);

        // _mtn
        const _mtn = scene.add.container(-408, -138);
        this.add(_mtn);

        // mtnHit
        const mtnHit = scene.add.polygon(-0.8752268958028822, -53.56881466116374, "-82.00781545027255 69.96476780934717 -118.95378119375584 60.728276373476376 -114.64341852368281 40.40799521456057 -29.1756262579471 -118.57312304791913 24.387891975755906 -154.83613078786195 93.10765210704892 -137.96855330109003 136.39807960642133 -40.6983002558012 166.08763430754323 -10.375179201037838 166.08763430754323 25.342521864208663 128.06556543163566 50.1144758288151 41.651772531845836 61.06022292945511");
        mtnHit.setOrigin(0.13038635171992172, -0.42210980950829635);
        mtnHit.fillColor = 65535;
        mtnHit.fillAlpha = 0.5;
        _mtn.add(mtnHit);

        // mtn
        const mtn = scene.add.image(0, 0, "fair-map", "mtn0001");
        _mtn.add(mtn);

        // skiLift
        const skiLift = scene.add.sprite(-32, 12, "map", "mtn/skilift0001");
        _mtn.add(skiLift);

        // island6
        const island6 = scene.add.image(-601, 40, "map", "island6");
        this.add(island6);

        // island5
        const island5 = scene.add.image(-441, 112, "map", "island5");
        this.add(island5);

        // island4
        const island4 = scene.add.image(-524, 233, "map", "island4");
        this.add(island4);

        // island3
        const island3 = scene.add.image(230, 51, "fair-map", "island3");
        this.add(island3);

        // covestairs
        const covestairs = scene.add.image(531, 187, "map", "covestairs");
        this.add(covestairs);

        // island1
        const island1 = scene.add.image(159, 249, "map", "island1");
        this.add(island1);

        // courtyard
        const courtyard = scene.add.image(153, -185, "map", "courtyard");
        this.add(courtyard);

        // shack
        const shack = scene.add.image(412, -6, "map", "shack");
        this.add(shack);

        // village
        const village = scene.add.image(-426, -32, "fair-map", "village0001");
        village.setOrigin(0.5, 0.31541190082154064);
        this.add(village);

        // dock
        const dock = scene.add.sprite(-394, 240, "fair-map", "dock0001");
        this.add(dock);

        // _rink
        const _rink = scene.add.container(-129, -42);
        this.add(_rink);

        // _rink_soccer
        const _rink_soccer = scene.add.container(0, 0);
        _rink.add(_rink_soccer);

        // soccerBtn
        const soccerBtn = scene.add.image(0, 0, "fair-map", "rink0001");
        _rink_soccer.add(soccerBtn);

        // _forts
        const _forts = scene.add.container(7, 49);
        this.add(_forts);

        // moregames
        const moregames = scene.add.image(-17, -50, "fair-map", "moregames");
        _forts.add(moregames);

        // fortsHit
        const fortsHit = scene.add.polygon(-5, -23, "36.337492675782414 35.76957250274904 -12.450622610738037 15.22720817158256 -12.450622610738037 -20.721929407958896 26.066310510199173 -44.688021127653144 55.34133147961791 -57.00707361520608 79.51936846607816 -93.53134225432694 120.67347397494677 -82.21396323938808 124.27445820697278 -36.94444717963262 119.13019501836425 -13.280836512033261 97.96458566928197 22.074662948638093");
        fortsHit.setOrigin(0.33106982049694306, -0.31592504213633554);
        fortsHit.fillColor = 65535;
        fortsHit.fillAlpha = 0.5;
        _forts.add(fortsHit);

        // forts0001
        const forts0001 = scene.add.image(-5, 11, "fair-map", "forts0001");
        _forts.add(forts0001);

        // coaster1
        const coaster1 = scene.add.image(-288, -42, "fair-map", "coaster1");
        this.add(coaster1);

        // coaster1anim0001
        const coaster1anim0001 = scene.add.sprite(-296, -49, "fair-map", "coaster1anim0001");
        this.add(coaster1anim0001);

        // beach
        const beach = scene.add.image(-648, 125, "fair-map", "beach0001");
        beach.setOrigin(0.41495930790544905, 0.330102686573007);
        this.add(beach);

        // rink_trees
        const rink_trees = scene.add.image(-186, 31, "map", "rink-trees");
        this.add(rink_trees);

        // coaster2
        const coaster2 = scene.add.image(-508, 186, "fair-map", "coaster2");
        this.add(coaster2);

        // coaster2anim0001
        const coaster2anim0001 = scene.add.sprite(-510, 182, "fair-map", "coaster2anim0001");
        this.add(coaster2anim0001);

        // igloosHit
        const igloosHit = scene.add.polygon(-144.36879602897466, 235.95749638322047, "-41.79740625863724 -43.474236548910085 -91.18559888050493 -81.93817664198298 -92.8160962434888 -117.92560510506121 -106.64923334124705 -126.79300068054727 -119.50064519252311 -168.87331685485412 -93.43519184399071 -181.45663916104218 24.308752592483188 -181.45663916104218 63.40693261528179 -187.2988959460581 112.84141310387781 -189.54591778644874 107.75513712356008 -139.49690277954596 136.34277833625197 -84.77908880090422 159.07759666062407 -30.78158526555012 109.41070033443305 -16.433370771317186 55.88082318287172 -38.50754691629095");
        igloosHit.setOrigin(0.035895439649471984, -0.7256613604643632);
        igloosHit.fillColor = 65535;
        igloosHit.fillAlpha = 0.5;
        this.add(igloosHit);

        // igloos
        const igloos = scene.add.image(-142, 261, "map", "igloos");
        this.add(igloos);

        // welcomeHit
        const welcomeHit = scene.add.polygon(56, 148.45940736948864, "-73.11759325908088 -9.842835169815316 -83.95175041056359 -36.02538161923201 -72.21474682979067 -81.16770308374339 -18.946807501667195 -99.22463166954788 9.617169289853905 -121.31454663215197 35.59121225014451 -123.23804873296297 46.96098183651941 -117.28156025535247 74.0463747152263 -109.15594239174038 122.80008189689852 -101.93317095741861 136.34277833625197 -84.77908880090422 141.75985691199332 -50.47092448787555 119.18869617973769 -20.67699232129803 29.80689968000513 -3.5229101647837524");
        welcomeHit.setOrigin(0.10845828805412777, -0.7169549706204741);
        welcomeHit.fillColor = 65535;
        welcomeHit.fillAlpha = 0.5;
        this.add(welcomeHit);

        // welcome
        const welcome = scene.add.image(65, 170, "fair-map", "welcome0001");
        this.add(welcome);

        // welcome_trees
        const welcome_trees = scene.add.image(83, 244, "map", "welcome-trees");
        this.add(welcome_trees);

        // coaster3
        const coaster3 = scene.add.image(272, 217, "fair-map", "coaster3");
        this.add(coaster3);

        // coaster3anim0001
        const coaster3anim0001 = scene.add.sprite(275, 219, "fair-map", "coaster3anim0001");
        this.add(coaster3anim0001);

        // _town
        const _town = scene.add.container(-194, 93);
        this.add(_town);

        // townHit
        const townHit = scene.add.polygon(0.12227080937714163, -10.644493280745678, "-87.86440692930194 59.81775446638551 -93.22526318115189 -9.426638786676449 -48.104723061414745 -48.29284661258862 136.39807960642133 -40.6983002558012 143.54588794222127 -0.49187836692647124 154.59414564364647 35.36986839339875 146.06230431581287 57.862904621323764 4.899111437111287 60.18977043800567");
        townHit.setOrigin(0.15022977045346275, -0.028598938946672953);
        townHit.fillColor = 65535;
        townHit.fillAlpha = 0.5;
        _town.add(townHit);

        // town
        const town = scene.add.image(0, -2, "fair-map", "town0001");
        _town.add(town);

        // spotlights
        const spotlights = scene.add.sprite(-1, -30, "map", "town/lights0001");
        _town.add(spotlights);

        // plazaHit
        const plazaHit = scene.add.polygon(240.56136237918645, 55.773234203947595, "-32.02824717090607 24.087204770724043 -61.93440567167215 12.99298468173015 -66.17856389762437 -17.21485248455906 -67.04201349725281 -43.98179007304134 -56.68061830171132 -69.02182846226663 -33.36747911174291 -87.58599485427851 78.01751924032828 -72.04390206096627 134.14174321617816 -50.45766207025474 144.9969168578225 -32.34861046459264 131.49090979296034 31.804923093502453");
        plazaHit.setOrigin(0.18493973359799945, -0.34409465551097296);
        plazaHit.fillColor = 65535;
        plazaHit.fillAlpha = 0.5;
        this.add(plazaHit);

        // dockHit
        const dockHit = scene.add.polygon(-418, 269, "7.785698500059993 87.43356760807364 -19.681602171754207 39.54186387260279 9.546422902099323 5.735955353446798 47.22592510574185 -3.0676666567500206 127.86710271914507 9.961693918341325 131.38855152322378 38.13328435097128 103.21696109059388 48.697630763207485 66.59389352817493 97.2936242594941");
        dockHit.setOrigin(0.3589905955293039, 0.23940678622573794);
        dockHit.fillColor = 65535;
        dockHit.fillAlpha = 0.5;
        this.add(dockHit);

        // party2
        const party2 = scene.add.image(391, 76, "fair-map", "circus0001");
        this.add(party2);

        // forest
        const forest = scene.add.image(412, 144, "fair-map", "forest0001");
        this.add(forest);

        // coaster4
        const coaster4 = scene.add.image(417, 47, "fair-map", "coaster4");
        this.add(coaster4);

        // coaster4anim0001
        const coaster4anim0001 = scene.add.sprite(412, 41, "fair-map", "coaster4anim0001");
        this.add(coaster4anim0001);

        // plaza
        const plaza = scene.add.image(235, 70, "fair-map", "plaza0001");
        this.add(plaza);

        // cove
        const cove = scene.add.image(619, 206, "fair-map", "cove0001");
        this.add(cove);

        // logs
        const logs = scene.add.image(617, 217, "map", "logs");
        logs.visible = false;
        this.add(logs);

        // campfire
        const campfire = scene.add.sprite(602, 223, "map", "campfire0001");
        this.add(campfire);

        // border
        const border = scene.add.container(-722, 440);
        this.add(border);

        // border1
        const border1 = scene.add.rectangle(0, 0, 11, 880);
        border1.setOrigin(1, 1);
        border1.isFilled = true;
        border.add(border1);

        // border2
        const border2 = scene.add.rectangle(1463, 0, 11, 880);
        border2.setOrigin(1, 1);
        border2.isFilled = true;
        border.add(border2);

        // border3
        const border3 = scene.add.rectangle(1463, -876, 1474, 11);
        border3.setOrigin(1, 1);
        border3.isFilled = true;
        border.add(border3);

        // border4
        const border4 = scene.add.rectangle(1463, 0, 1474, 11);
        border4.setOrigin(1, 1);
        border4.isFilled = true;
        border.add(border4);

        // logo
        const logo = scene.add.image(-575, -335, "fair-map", "logo");
        this.add(logo);

        // grey_button
        const grey_button = scene.add.image(691, -400, "main", "grey-button");
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(691, -402, "main", "grey-x");
        this.add(grey_x);

        // iglooMap
        const iglooMap = new IglooMap(scene, 4, 0);
        iglooMap.visible = false;
        this.add(iglooMap);

        // block (components)
        new Interactive(block);

        // waterfall (components)
        const waterfallAnimation = new Animation(waterfall);
        waterfallAnimation.key = "waterfall";
        waterfallAnimation.end = 30;

        // berg (components)
        const bergSimpleButton = new SimpleButton(berg);
        bergSimpleButton.callback = () => this.onRoomClick(805);
        const bergAnimation = new Animation(berg);
        bergAnimation.key = "berg";
        bergAnimation.end = 75;

        // mtnHit (components)
        const mtnHitShowHint = new ShowHint(mtnHit);
        mtnHitShowHint.text = "mtn_hint";

        // mtn (components)
        const mtnButton = new Button(mtn);
        mtnButton.spriteName = "mtn";
        mtnButton.callback = () => this.onRoomClick(230);
        mtnButton.lazyName = true;
        mtnButton.alias = mtnHit;

        // skiLift (components)
        const skiLiftAnimation = new Animation(skiLift);
        skiLiftAnimation.key = "mtn/skilift";
        skiLiftAnimation.end = 494;

        // courtyard (components)
        const courtyardButton = new Button(courtyard);
        courtyardButton.spriteName = "courtyard";
        courtyardButton.callback = () => this.onRoomClick(319);
        const courtyardShowHint = new ShowHint(courtyard);
        courtyardShowHint.text = "courtyard_hint";

        // shack (components)
        const shackButton = new Button(shack);
        shackButton.spriteName = "shack";
        shackButton.callback = () => this.onRoomClick(807);
        const shackShowHint = new ShowHint(shack);
        shackShowHint.text = "shack_hint";

        // village (components)
        const villageButton = new Button(village);
        villageButton.spriteName = "village";
        villageButton.callback = () => this.onRoomClick(200);
        villageButton.lazyName = true;
        const villageShowHint = new ShowHint(village);
        villageShowHint.text = "village_hint";

        // dock (components)
        const dockMapAnimation = new MapAnimation(dock);
        dockMapAnimation.key = "dock";
        dockMapAnimation.end = 96;

        // soccerBtn (components)
        const soccerBtnButton = new Button(soccerBtn);
        soccerBtnButton.spriteName = "rink";
        soccerBtnButton.callback = () => this.onRoomClick(802);
        soccerBtnButton.lazyName = true;
        const soccerBtnShowHint = new ShowHint(soccerBtn);
        soccerBtnShowHint.text = "rink_hint";

        // fortsHit (components)
        const fortsHitShowHint = new ShowHint(fortsHit);
        fortsHitShowHint.text = "forts_hint";

        // forts0001 (components)
        const forts0001Button = new Button(forts0001);
        forts0001Button.spriteName = "forts";
        forts0001Button.callback = () => this.onRoomClick(801);
        forts0001Button.lazyName = true;
        forts0001Button.alias = fortsHit;

        // coaster1anim0001 (components)
        const coaster1anim0001Animation = new Animation(coaster1anim0001);
        coaster1anim0001Animation.key = "coaster1anim";
        coaster1anim0001Animation.end = 488;

        // beach (components)
        const beachButton = new Button(beach);
        beachButton.spriteName = "beach";
        beachButton.callback = () => this.onRoomClick(400);
        const beachShowHint = new ShowHint(beach);
        beachShowHint.text = "beach_hint";

        // coaster2anim0001 (components)
        const coaster2anim0001Animation = new Animation(coaster2anim0001);
        coaster2anim0001Animation.key = "coaster2anim";
        coaster2anim0001Animation.end = 137;

        // igloosHit (components)
        const igloosHitShowHint = new ShowHint(igloosHit);
        igloosHitShowHint.text = "igloos_hint";

        // igloos (components)
        const igloosButton = new Button(igloos);
        igloosButton.spriteName = "igloos";
        igloosButton.callback = () => this.iglooMap.show();
        igloosButton.alias = igloosHit;

        // welcomeHit (components)
        const welcomeHitShowHint = new ShowHint(welcomeHit);
        welcomeHitShowHint.text = "welcome_hint";

        // welcome (components)
        const welcomeButton = new Button(welcome);
        welcomeButton.spriteName = "welcome";
        welcomeButton.callback = () => this.onRoomClick(1);
        welcomeButton.lazyName = true;
        welcomeButton.alias = welcomeHit;

        // coaster3anim0001 (components)
        const coaster3anim0001Animation = new Animation(coaster3anim0001);
        coaster3anim0001Animation.key = "coaster3anim";
        coaster3anim0001Animation.end = 285;

        // townHit (components)
        const townHitShowHint = new ShowHint(townHit);
        townHitShowHint.text = "town_hint";

        // town (components)
        const townButton = new Button(town);
        townButton.spriteName = "town";
        townButton.hoverCallback = () => this.spotlights.__MapAnimation.over();
        townButton.hoverOutCallback = () => this.spotlights.__MapAnimation.out();
        townButton.callback = () => this.onRoomClick(100);
        townButton.lazyName = true;
        townButton.alias = townHit;

        // spotlights (components)
        const spotlightsMapAnimation = new MapAnimation(spotlights);
        spotlightsMapAnimation.key = "town/lights";
        spotlightsMapAnimation.end = 270;

        // plazaHit (components)
        const plazaHitShowHint = new ShowHint(plazaHit);
        plazaHitShowHint.text = "plaza_hint";

        // dockHit (components)
        const dockHitSimpleButton = new SimpleButton(dockHit);
        dockHitSimpleButton.hoverCallback = () => this.dock.__MapAnimation.over();
        dockHitSimpleButton.hoverOutCallback = () => this.dock.__MapAnimation.out();
        dockHitSimpleButton.callback = () => this.onRoomClick(800);
        const dockHitShowHint = new ShowHint(dockHit);
        dockHitShowHint.text = "dock_hint";

        // party2 (components)
        const party2Button = new Button(party2);
        party2Button.spriteName = "circus";
        party2Button.callback = () => this.onRoomClick(852);
        party2Button.lazyName = true;
        const party2ShowHint = new ShowHint(party2);
        party2ShowHint.text = "party2_hint";

        // forest (components)
        const forestButton = new Button(forest);
        forestButton.spriteName = "forest";
        forestButton.callback = () => this.onRoomClick(809);
        const forestShowHint = new ShowHint(forest);
        forestShowHint.text = "forest_hint";

        // coaster4anim0001 (components)
        const coaster4anim0001Animation = new Animation(coaster4anim0001);
        coaster4anim0001Animation.key = "coaster4anim";
        coaster4anim0001Animation.end = 302;

        // plaza (components)
        const plazaButton = new Button(plaza);
        plazaButton.spriteName = "plaza";
        plazaButton.callback = () => this.onRoomClick(300);
        plazaButton.lazyName = true;
        plazaButton.alias = plazaHit;

        // cove (components)
        const coveButton = new Button(cove);
        coveButton.spriteName = "cove";
        coveButton.callback = () => this.onRoomClick(810);
        coveButton.lazyName = true;
        const coveShowHint = new ShowHint(cove);
        coveShowHint.text = "cove_hint";

        // campfire (components)
        const campfireAnimation = new Animation(campfire);
        campfireAnimation.key = "campfire";
        campfireAnimation.end = 12;

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => { this.closeMap() };
        grey_buttonButton.activeFrame = true;

        this.dock = dock;
        this.spotlights = spotlights;
        this.iglooMap = iglooMap;

        /* START-USER-CTR-CODE */

        this.currentStadium

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    show() {
        super.show()
    }

    onRoomClick(id) {
        this.close()

        let room = this.crumbs.scenes.rooms[id]
        if (this.world.room.key == room.key) {
            this.network.send("close_sprite", {})
            return
        }
        this.world.client.sendJoinRoom(id, room.key, room.x, room.y, 80)
    }

    closeMap(){
        this.close()
        this.network.send("close_sprite", {})
    }

    close() {
        this.iglooMap.close()
        super.close()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
