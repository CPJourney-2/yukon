import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, ShowHint, SimpleButton, Animation } from '@components/components'

import IglooMap from './igloo_map/IglooMap'

//import HalloweenSky from '@rooms/_halloween/shared_prefabs/sky/HalloweenSky'



export const preload = {
    key: 'mapnight-pack',
    url: 'assets/media/interface/game/mapnight/mapnight-pack.json',
    loadString: ['loading', 'map']
}

/* START OF COMPILED CODE */

export default class MapNight extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.nightsky;
        /** @type {Phaser.GameObjects.Image} */
        this.nightsky_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lighthouse_light_base0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lighthouse_light_hover0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.night_dock_base0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.night_dock_hover0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.night_town_base0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.night_town_hover0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.night_forts_base0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.night_forts_hover0001;
        /** @type {IglooMap} */
        this.iglooMap;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // mapref
        const mapref = scene.add.image(0, -1, "mapnight", "mapref");
        mapref.visible = false;
        this.add(mapref);

        // nightsky
        const nightsky = scene.add.image(764, 233, "mapnight", "sky");
        nightsky.visible = false;
        this.add(nightsky);

        // nightsky_1
        const nightsky_1 = scene.add.image(4, -248, "mapnight", "sky");
        this.add(nightsky_1);

        // sky_no_clouds
        const sky_no_clouds = scene.add.image(4, -248, "mapnight", "sky_no_clouds");
        sky_no_clouds.visible = false;
        this.add(sky_no_clouds);

        // meteors0001
        const meteors0001 = scene.add.sprite(-16, -193, "mapnight", "meteors0001");
        this.add(meteors0001);

        // above_sky
        const above_sky = scene.add.image(3, 42, "mapnight", "above_sky");
        this.add(above_sky);

        // FIRE0001
        const fIRE0001 = scene.add.sprite(602, 220, "mapnight", "FIRE0001");
        this.add(fIRE0001);

        // above_fire
        const above_fire = scene.add.image(65, 112, "mapnight", "above_fire");
        this.add(above_fire);

        // night_mountain
        const night_mountain = scene.add.image(-409, -137, "mapnight", "night_mountain");
        this.add(night_mountain);

        // night_dojo
        const night_dojo = scene.add.image(152, -184, "mapnight", "night_dojo");
        this.add(night_dojo);

        // between_rooms
        const between_rooms = scene.add.image(-473, 14, "mapnight", "between_rooms");
        this.add(between_rooms);

        // night_lighthouse
        const night_lighthouse = scene.add.image(-662, 153, "mapnight", "night_lighthouse");
        this.add(night_lighthouse);

        // lighthouse_light_base0001
        const lighthouse_light_base0001 = scene.add.sprite(-647, 106, "mapnight", "lighthouse_light_base0001");
        this.add(lighthouse_light_base0001);

        // lighthouse_light_hover0001
        const lighthouse_light_hover0001 = scene.add.sprite(-647, 102, "mapnight", "lighthouse_light_hover0001");
        lighthouse_light_hover0001.visible = false;
        this.add(lighthouse_light_hover0001);

        // night_dock_base0001
        const night_dock_base0001 = scene.add.sprite(-417, 293, "mapnight", "night_dock_base0001");
        night_dock_base0001.scaleX = 0.666666;
        night_dock_base0001.scaleY = 0.6666666666;
        this.add(night_dock_base0001);

        // night_dock_hover0001
        const night_dock_hover0001 = scene.add.sprite(-417, 293, "mapnight", "night_dock_hover0001");
        night_dock_hover0001.scaleX = 0.6666666666666666;
        night_dock_hover0001.scaleY = 0.6666666666666666;
        night_dock_hover0001.visible = false;
        this.add(night_dock_hover0001);

        // dock_button
        const dock_button = scene.add.rectangle(-413, 297, 138, 117);
        dock_button.isFilled = true;
        dock_button.fillAlpha = 1e-12;
        this.add(dock_button);

        // night_village
        const night_village = scene.add.image(-372, -15, "mapnight", "night_village");
        this.add(night_village);

        // night_town_base0001
        const night_town_base0001 = scene.add.sprite(-196, 105, "mapnight", "night_town_base0001");
        this.add(night_town_base0001);

        // night_town_hover0001
        const night_town_hover0001 = scene.add.sprite(-196, 105, "mapnight", "night_town_hover0001");
        night_town_hover0001.visible = false;
        this.add(night_town_hover0001);

        // town_button
        const town_button = scene.add.rectangle(-204, 100, 242, 117);
        town_button.isFilled = true;
        town_button.fillAlpha = 1e-12;
        this.add(town_button);

        // night_club_lights0001
        const night_club_lights0001 = scene.add.sprite(-195, 64, "mapnight", "night_club_lights0001");
        this.add(night_club_lights0001);

        // night_rink
        const night_rink = scene.add.image(-130, -42, "mapnight", "night_rink");
        this.add(night_rink);

        // night_stadium
        const night_stadium = scene.add.image(-130, -41, "mapnight", "night_stadium");
        night_stadium.visible = false;
        this.add(night_stadium);

        // night_forts_base0001
        const night_forts_base0001 = scene.add.sprite(15, 38, "mapnight", "night_forts_base0001");
        night_forts_base0001.scaleX = 0.6;
        night_forts_base0001.scaleY = 0.6;
        this.add(night_forts_base0001);

        // night_forts_hover0001
        const night_forts_hover0001 = scene.add.sprite(15, 37, "mapnight", "night_forts_hover0001");
        night_forts_hover0001.scaleX = 0.6;
        night_forts_hover0001.scaleY = 0.6;
        night_forts_hover0001.visible = false;
        this.add(night_forts_hover0001);

        // forts_button
        const forts_button = scene.add.rectangle(26, 43, 138, 117);
        forts_button.isFilled = true;
        forts_button.fillAlpha = 1e-12;
        this.add(forts_button);

        // night_plaza
        const night_plaza = scene.add.image(238, 86, "mapnight", "night_plaza");
        night_plaza.scaleX = 0.9;
        night_plaza.scaleY = 0.9;
        night_plaza.angle = 4;
        this.add(night_plaza);

        // night_forest
        const night_forest = scene.add.image(393, 125, "mapnight", "night_forest");
        this.add(night_forest);

        // night_shack
        const night_shack = scene.add.image(441, -3, "mapnight", "night_shack");
        this.add(night_shack);

        // night_cove
        const night_cove = scene.add.image(636, 183, "mapnight", "night_cove");
        this.add(night_cove);

        // night_berg
        const night_berg = scene.add.image(655, -38, "mapnight", "night_berg");
        this.add(night_berg);

        // trees
        const trees = scene.add.image(29, 137, "mapnight", "trees");
        this.add(trees);

        // night_igloos
        const night_igloos = scene.add.image(-135, 262, "mapnight", "night_igloos");
        this.add(night_igloos);

        // randomtree
        const randomtree = scene.add.image(-69, 280, "mapnight", "randomtree");
        this.add(randomtree);

        // night_wr
        const night_wr = scene.add.image(65, 172, "mapnight", "night_wr");
        this.add(night_wr);

        // fisherman0001
        const fisherman0001 = scene.add.image(244, 227, "mapnight", "fisherman0001");
        this.add(fisherman0001);

        // randomigloo
        const randomigloo = scene.add.image(284, 288, "mapnight", "randomigloo");
        this.add(randomigloo);

        // water_one0001
        const water_one0001 = scene.add.sprite(-661, -16, "mapnight", "water_one0001");
        this.add(water_one0001);

        // water_two0001
        const water_two0001 = scene.add.sprite(-585, -93, "mapnight", "water_two0001");
        this.add(water_two0001);

        // water_three0001
        const water_three0001 = scene.add.sprite(-651, -74, "mapnight", "water_three0001");
        this.add(water_three0001);

        // square
        const square = scene.add.image(3, -2, "mapnight", "square");
        this.add(square);

        // grey_button
        const grey_button = scene.add.image(695, -402, "main", "grey-button");
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(695, -404, "main", "grey-x");
        this.add(grey_x);

        // iglooMap
        const iglooMap = new IglooMap(scene, 0, 0);
        iglooMap.visible = false;
        this.add(iglooMap);

        // block (components)
        new Interactive(block);

        // meteors0001 (components)
        new Animation(meteors0001);

        // fIRE0001 (components)
        new Animation(fIRE0001);

        // night_mountain (components)
        const night_mountainButton = new Button(night_mountain);
        night_mountainButton.spriteName = "night_mountain";
        night_mountainButton.callback = () => this.onRoomClick(230);
        const night_mountainShowHint = new ShowHint(night_mountain);
        night_mountainShowHint.text = "Ski Hill";

        // night_dojo (components)
        const night_dojoButton = new Button(night_dojo);
        night_dojoButton.spriteName = "night_dojo";
        night_dojoButton.callback = () => this.onRoomClick(319);
        const night_dojoShowHint = new ShowHint(night_dojo);
        night_dojoShowHint.text = "dojoext_hint";

        // night_lighthouse (components)
        const night_lighthouseButton = new Button(night_lighthouse);
        night_lighthouseButton.spriteName = "night_lighthouse";
        night_lighthouseButton.hoverCallback = () => this.onBeachOver();
        night_lighthouseButton.hoverOutCallback = () => this.onBeachOut();
        night_lighthouseButton.callback = () => this.onRoomClick(400);
        const night_lighthouseShowHint = new ShowHint(night_lighthouse);
        night_lighthouseShowHint.text = "beach_hint";

        // lighthouse_light_base0001 (components)
        const lighthouse_light_base0001Animation = new Animation(lighthouse_light_base0001);
        lighthouse_light_base0001Animation.key = "lighthouse_light_base";
        lighthouse_light_base0001Animation.end = 96;
        lighthouse_light_base0001Animation.stopOnOut = false;

        // lighthouse_light_hover0001 (components)
        const lighthouse_light_hover0001Animation = new Animation(lighthouse_light_hover0001);
        lighthouse_light_hover0001Animation.key = "lighthouse_light_hover";
        lighthouse_light_hover0001Animation.end = 96;
        lighthouse_light_hover0001Animation.stopOnOut = false;

        // night_dock_base0001 (components)
        new Animation(night_dock_base0001);

        // night_dock_hover0001 (components)
        new Animation(night_dock_hover0001);

        // dock_button (components)
        const dock_buttonSimpleButton = new SimpleButton(dock_button);
        dock_buttonSimpleButton.hoverCallback = () => this.onDockOver();
        dock_buttonSimpleButton.hoverOutCallback = () => this.onDockOut();
        dock_buttonSimpleButton.callback = () => this.onRoomClick(800);
        const dock_buttonShowHint = new ShowHint(dock_button);
        dock_buttonShowHint.text = "dock_hint";

        // night_village (components)
        const night_villageButton = new Button(night_village);
        night_villageButton.spriteName = "night_village";
        night_villageButton.callback = () => this.onRoomClick(200);
        const night_villageShowHint = new ShowHint(night_village);
        night_villageShowHint.text = "village_hint";

        // night_town_base0001 (components)
        new Animation(night_town_base0001);

        // night_town_hover0001 (components)
        new Animation(night_town_hover0001);

        // town_button (components)
        const town_buttonSimpleButton = new SimpleButton(town_button);
        town_buttonSimpleButton.hoverCallback = () => this.onTownOver();
        town_buttonSimpleButton.hoverOutCallback = () => this.onTownOut();
        town_buttonSimpleButton.callback = () => this.onRoomClick(100);
        const town_buttonShowHint = new ShowHint(town_button);
        town_buttonShowHint.text = "town_hint";

        // night_club_lights0001 (components)
        new Animation(night_club_lights0001);

        // night_rink (components)
        const night_rinkShowHint = new ShowHint(night_rink);
        night_rinkShowHint.text = "rink_hint";
        const night_rinkButton = new Button(night_rink);
        night_rinkButton.spriteName = "night_rink";
        night_rinkButton.callback = () => this.onRoomClick(802);

        // night_stadium (components)
        const night_stadiumButton = new Button(night_stadium);
        night_stadiumButton.spriteName = "night_stadium";
        night_stadiumButton.callback = () => this.onRoomClick(802);
        const night_stadiumShowHint = new ShowHint(night_stadium);
        night_stadiumShowHint.text = "rink_hint";

        // night_forts_base0001 (components)
        new Animation(night_forts_base0001);

        // night_forts_hover0001 (components)
        new Animation(night_forts_hover0001);

        // forts_button (components)
        const forts_buttonSimpleButton = new SimpleButton(forts_button);
        forts_buttonSimpleButton.hoverCallback = () => this.onFortsOver();
        forts_buttonSimpleButton.hoverOutCallback = () => this.onFortsOut();
        forts_buttonSimpleButton.callback = () => this.onRoomClick(801);
        const forts_buttonShowHint = new ShowHint(forts_button);
        forts_buttonShowHint.text = "forts_hint";

        // night_plaza (components)
        const night_plazaButton = new Button(night_plaza);
        night_plazaButton.spriteName = "night_plaza";
        night_plazaButton.callback = () => this.onRoomClick(300);
        const night_plazaShowHint = new ShowHint(night_plaza);
        night_plazaShowHint.text = "plaza_hint";

        // night_forest (components)
        const night_forestButton = new Button(night_forest);
        night_forestButton.spriteName = "night_forest";
        night_forestButton.callback = () => this.onRoomClick(809);
        const night_forestShowHint = new ShowHint(night_forest);
        night_forestShowHint.text = "forest_hint";

        // night_shack (components)
        const night_shackButton = new Button(night_shack);
        night_shackButton.spriteName = "night_shack";
        night_shackButton.callback = () => this.onRoomClick(807);
        const night_shackShowHint = new ShowHint(night_shack);
        night_shackShowHint.text = "Mine Shack";

        // night_cove (components)
        const night_coveButton = new Button(night_cove);
        night_coveButton.spriteName = "night_cove";
        night_coveButton.callback = () => this.onRoomClick(810);
        const night_coveShowHint = new ShowHint(night_cove);
        night_coveShowHint.text = "The Cove";

        // night_berg (components)
        const night_bergSimpleButton = new SimpleButton(night_berg);
        night_bergSimpleButton.callback = () => this.onRoomClick(805);

        // night_igloos (components)
        const night_igloosButton = new Button(night_igloos);
        night_igloosButton.spriteName = "night_igloos";
        night_igloosButton.callback = () => this.iglooMap.show();
        const night_igloosShowHint = new ShowHint(night_igloos);
        night_igloosShowHint.text = "igloos_hint";

        // night_wr (components)
        const night_wrButton = new Button(night_wr);
        night_wrButton.spriteName = "night_wr";
        night_wrButton.callback = () => this.onRoomClick(1);
        const night_wrShowHint = new ShowHint(night_wr);
        night_wrShowHint.text = "Welcome Room";

        // fisherman0001 (components)
        new Animation(fisherman0001);

        // water_one0001 (components)
        new Animation(water_one0001);

        // water_two0001 (components)
        new Animation(water_two0001);

        // water_three0001 (components)
        new Animation(water_three0001);

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => { this.closeMap() };
        grey_buttonButton.activeFrame = true;

        this.nightsky = nightsky;
        this.nightsky_1 = nightsky_1;
        this.lighthouse_light_base0001 = lighthouse_light_base0001;
        this.lighthouse_light_hover0001 = lighthouse_light_hover0001;
        this.night_dock_base0001 = night_dock_base0001;
        this.night_dock_hover0001 = night_dock_hover0001;
        this.night_town_base0001 = night_town_base0001;
        this.night_town_hover0001 = night_town_hover0001;
        this.night_forts_base0001 = night_forts_base0001;
        this.night_forts_hover0001 = night_forts_hover0001;
        this.iglooMap = iglooMap;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    show() {
        super.show()    
       //this.halloweenSky.mask = this.nightsky.createBitmapMask()
    }

    onTownOver(){
        this.night_town_base0001.visible = false
        this.night_town_hover0001.visible = true
    }

    onTownOut(){
        this.night_town_base0001.visible = true
        this.night_town_hover0001.visible = false
    }

    onFortsOver(){
        this.night_forts_base0001.visible = false
        this.night_forts_hover0001.visible = true
    }

    onFortsOut(){
        this.night_forts_base0001.visible = true
        this.night_forts_hover0001.visible = false
    }

    onBeachOver(){
        this.lighthouse_light_base0001.visible = false
        this.lighthouse_light_hover0001.visible = true
    }

    onBeachOut(){
        this.lighthouse_light_base0001.visible = true
        this.lighthouse_light_hover0001.visible = false
    }

    onDockOver(){
        this.night_dock_base0001.visible = false
        this.night_dock_hover0001.visible = true
    }

    onDockOut(){
        this.night_dock_base0001.visible = true
        this.night_dock_hover0001.visible = false
    }

    closeMap(){
        this.close()
        this.network.send("close_sprite", {})
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

    close() {
        this.iglooMap.close()
        super.close()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
