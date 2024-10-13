import BaseScene from '@scenes/base/BaseScene'

import { Button, Interactive, ShowHint, SimpleButton } from '@components/components'

import GridView from './gridview/GridView'
import StoreGridView from './gridview/StoreGridView'
import IglooMusic from './igloomusic/IglooMusic'
import IglooSlots from './igloo_slots/IglooSlots'
import IglooTutorial from './tutorial/IglooTutorial'
import InputText from 'phaser3-rex-plugins/plugins/inputtext.js'


/* START OF COMPILED CODE */

export default class IglooEdit extends BaseScene {

    constructor() {
        super("IglooEdit");

        /** @type {Phaser.GameObjects.Image} */
        this.button_lock;
        /** @type {Phaser.GameObjects.Container} */
        this.defaultControls;
        /** @type {Phaser.GameObjects.Image} */
        this.button_furniture;
        /** @type {Phaser.GameObjects.Image} */
        this.button_no_igloo;
        /** @type {Phaser.GameObjects.Image} */
        this.trash_box;
        /** @type {Phaser.GameObjects.Image} */
        this.store;
        /** @type {Phaser.GameObjects.Container} */
        this.controls;
        /** @type {Phaser.GameObjects.Image} */
        this.music_hide_button;
        /** @type {Phaser.GameObjects.Image} */
        this.hide_txt;
        /** @type {Phaser.GameObjects.Image} */
        this.show_txt;
        /** @type {Phaser.GameObjects.Container} */
        this.music_container;
        /** @type {Phaser.GameObjects.Image} */
        this.lock_button;
        /** @type {Phaser.GameObjects.Image} */
        this.bounds_button;
        /** @type {Phaser.GameObjects.Container} */
        this.unlock_container;
        /** @type {Phaser.GameObjects.Image} */
        this.all_button;
        /** @type {Phaser.GameObjects.Image} */
        this.floor_button;
        /** @type {Phaser.GameObjects.Image} */
        this.flooring_button;
        /** @type {Phaser.GameObjects.Image} */
        this.igloo_button;
        /** @type {Phaser.GameObjects.Image} */
        this.location_button;
        /** @type {Phaser.GameObjects.Image} */
        this.wall_button;
        /** @type {Phaser.GameObjects.Image} */
        this.puffle_button;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.put_input_here_inv;
        /** @type {Phaser.GameObjects.Container} */
        this.text_container_inv;
        /** @type {Phaser.GameObjects.Container} */
        this.furniture;
        /** @type {IglooMusic} */
        this.iglooMusic;
        /** @type {GridView} */
        this.gridView;
        /** @type {Phaser.GameObjects.Container} */
        this.hidden_x;
        /** @type {Phaser.GameObjects.Container} */
        this.arrow_container;
        /** @type {Phaser.GameObjects.Image} */
        this.seasonal;
        /** @type {Phaser.GameObjects.Image} */
        this.evergreen;
        /** @type {Phaser.GameObjects.Image} */
        this.wall_button_store;
        /** @type {Phaser.GameObjects.Image} */
        this.room_button_store;
        /** @type {Phaser.GameObjects.Image} */
        this.flooring_button_store;
        /** @type {Phaser.GameObjects.Image} */
        this.location_button_store;
        /** @type {Phaser.GameObjects.Image} */
        this.igloo_button_store;
        /** @type {Phaser.GameObjects.Image} */
        this.all_button_store;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.put_input_here;
        /** @type {Phaser.GameObjects.Container} */
        this.text_container;
        /** @type {StoreGridView} */
        this.storeGridView;
        /** @type {Phaser.GameObjects.Container} */
        this.igloo_store;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {IglooSlots} */
        this.iglooslot_2;
        /** @type {IglooSlots} */
        this.iglooslot_1;
        /** @type {IglooSlots} */
        this.iglooslot_0;
        /** @type {Phaser.GameObjects.Container} */
        this.chooseIgloo;
        /** @type {IglooTutorial} */
        this.iglooTutorial;
        /** @type {IglooSlots[]} */
        this.iglooSlots;


        /* START-USER-CTR-CODE */
        this.furnitureHidden = false;
        this.hasTweened = false;
        this.hasTweenedBounds = false;
        this.changedIgloo = false;
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        // defaultControls
        const defaultControls = this.add.container(1426, 758);

        // button_edit
        const button_edit = this.add.image(0, 126, "new-iglooedit", "edit");
        button_edit.setOrigin(0.6422018348623854, 0.5);
        defaultControls.add(button_edit);

        // button_lock
        const button_lock = this.add.image(0, 0, "iglooedit", "button/lock");
        button_lock.setOrigin(0.5, 0.5045871559633027);
        button_lock.visible = false;
        defaultControls.add(button_lock);

        // button_contest
        const button_contest = this.add.image(0, -124, "iglooedit", "button/contest");
        button_contest.visible = false;
        defaultControls.add(button_contest);

        // controls
        const controls = this.add.container(162, 359);
        controls.visible = false;

        // button_save
        const button_save = this.add.image(1263, 520, "iglooedit", "button/save");
        button_save.visible = false;
        controls.add(button_save);

        // button_igloo_catalog
        const button_igloo_catalog = this.add.image(1263, 390, "iglooedit", "button/igloo_catalog");
        button_igloo_catalog.setOrigin(0.5046728971962616, 0.5);
        button_igloo_catalog.visible = false;
        controls.add(button_igloo_catalog);

        // button_furniture_catalog
        const button_furniture_catalog = this.add.image(1263, 260, "iglooedit", "button/furniture_catalog");
        button_furniture_catalog.setOrigin(0.6405228758169934, 0.5043478260869565);
        button_furniture_catalog.visible = false;
        controls.add(button_furniture_catalog);

        // button_furniture
        const button_furniture = this.add.image(1263, 130, "iglooedit", "button/furniture");
        button_furniture.setOrigin(0.5, 0.584);
        button_furniture.visible = false;
        controls.add(button_furniture);

        // button_music
        const button_music = this.add.image(1263, 0, "iglooedit", "button/music");
        button_music.setOrigin(0.5039370078740157, 0.5);
        button_music.visible = false;
        controls.add(button_music);

        // button_no_igloo
        const button_no_igloo = this.add.image(1258, -118, "iglooedit", "button/no_igloo");
        button_no_igloo.setOrigin(0.5039370078740157, 0.5);
        button_no_igloo.visible = false;
        controls.add(button_no_igloo);

        // trash_box
        const trash_box = this.add.image(1255, 520, "new-iglooedit", "box");
        controls.add(trash_box);

        // store
        const store = this.add.image(1255, 394, "new-iglooedit", "store");
        controls.add(store);

        // switch_button
        const switch_button = this.add.image(1256, 268, "new-iglooedit", "switch");
        switch_button.scaleX = 0.5;
        switch_button.scaleY = 0.5;
        controls.add(switch_button);

        // music_container
        const music_container = this.add.container(-42, -112);
        music_container.visible = false;

        // music_container_1
        const music_container_1 = this.add.image(116, 116, "new-iglooedit", "music_container");
        music_container.add(music_container_1);

        // music_tween
        const music_tween = this.add.image(148, 394, "new-iglooedit", "music_tween");
        music_container.add(music_tween);

        // music_play
        const music_play = this.add.image(215, 383, "new-iglooedit", "play");
        music_container.add(music_play);

        // music_txt
        const music_txt = this.add.image(148, 350, "new-iglooedit", "music_txt");
        music_container.add(music_txt);

        // music_hide_button
        const music_hide_button = this.add.image(165, 459, "new-iglooedit", "music_hide_button");
        music_container.add(music_hide_button);

        // hide_txt
        const hide_txt = this.add.image(165, 460, "new-iglooedit", "hide_txt");
        music_container.add(hide_txt);

        // show_txt
        const show_txt = this.add.image(165, 460, "new-iglooedit", "show_txt");
        show_txt.visible = false;
        music_container.add(show_txt);

        // unlock_container
        const unlock_container = this.add.container(0, 0);
        unlock_container.visible = false;

        // bounds_container
        const bounds_container = this.add.image(325, 244, "new-iglooedit", "bounds_container");
        unlock_container.add(bounds_container);

        // bounds_container_1
        const bounds_container_1 = this.add.image(498, 244, "new-iglooedit", "bounds_container_wall");
        unlock_container.add(bounds_container_1);

        // button_container_png
        const button_container_png = this.add.image(325, 257, "new-iglooedit", "button_container.png");
        button_container_png.scaleX = 0.6;
        button_container_png.scaleY = 0.6;
        unlock_container.add(button_container_png);

        // lock_button
        const lock_button = this.add.image(304, 257, "new-iglooedit", "lock_button");
        unlock_container.add(lock_button);

        // button_container_png_1
        const button_container_png_1 = this.add.image(498, 258, "new-iglooedit", "button_container.png");
        button_container_png_1.scaleX = 0.6;
        button_container_png_1.scaleY = 0.6;
        unlock_container.add(button_container_png_1);

        // bounds_button
        const bounds_button = this.add.image(477, 258, "new-iglooedit", "boundary_button");
        unlock_container.add(bounds_button);

        // furniture
        const furniture = this.add.container(1238, 294);
        furniture.visible = false;

        // all_button
        const all_button = this.add.image(-586, -57, "new-iglooedit", "all_button");
        furniture.add(all_button);

        // floor_button
        const floor_button = this.add.image(-126, -57, "new-iglooedit", "floor_button");
        furniture.add(floor_button);

        // flooring_button
        const flooring_button = this.add.image(-241, -57, "new-iglooedit", "flooring_button");
        furniture.add(flooring_button);

        // igloo_button
        const igloo_button = this.add.image(-356, -57, "new-iglooedit", "igloo_button");
        furniture.add(igloo_button);

        // location_button
        const location_button = this.add.image(-471, -57, "new-iglooedit", "location_button");
        furniture.add(location_button);

        // wall_button
        const wall_button = this.add.image(-12, -57, "new-iglooedit", "wall_button");
        furniture.add(wall_button);

        // puffle_button
        const puffle_button = this.add.image(103, -57, "new-iglooedit", "puffle_button");
        furniture.add(puffle_button);

        // item_container_1
        const item_container_1 = this.add.image(-470, -201, "new-iglooedit", "item_container");
        furniture.add(item_container_1);

        // igloo_x
        const igloo_x = this.add.image(214, -235, "new-iglooedit", "igloo_x");
        furniture.add(igloo_x);

        // x
        const x = this.add.image(214, -236, "new-iglooedit", "x");
        furniture.add(x);

        // help_btn
        const help_btn = this.add.image(214, -161, "new-iglooedit", "igloo_x");
        furniture.add(help_btn);

        // help_icon
        const help_icon = this.add.image(214, -163, "main", "help-icon");
        furniture.add(help_icon);

        // text_container_inv
        const text_container_inv = this.add.container(-427, -87);
        furniture.add(text_container_inv);

        // put_input_here_inv
        const put_input_here_inv = this.add.rectangle(-65, -33, 200, 44);
        put_input_here_inv.alpha = 0.000001;
        put_input_here_inv.isFilled = true;
        text_container_inv.add(put_input_here_inv);

        // search_button_inv
        const search_button_inv = this.add.image(-65, -33, "new-iglooedit", "search_container");
        text_container_inv.add(search_button_inv);

        // iglooMusic
        const iglooMusic = new IglooMusic(this, 760, 480);
        this.add.existing(iglooMusic);
        iglooMusic.visible = false;

        // gridView
        const gridView = new GridView(this, 0, 0);
        this.add.existing(gridView);
        gridView.visible = false;

        // hidden_x
        const hidden_x = this.add.container(0, 0);
        hidden_x.visible = false;

        // igloo_x_2
        const igloo_x_2 = this.add.image(1452, 59, "new-iglooedit", "igloo_x");
        hidden_x.add(igloo_x_2);

        // x_2
        const x_2 = this.add.image(1452, 58, "new-iglooedit", "x");
        hidden_x.add(x_2);

        // arrow_container
        const arrow_container = this.add.container(-8, -4);
        arrow_container.visible = false;

        // arrow_container_1
        const arrow_container_1 = this.add.image(774, 129, "new-iglooedit", "arrow_container");
        arrow_container.add(arrow_container_1);

        // arrow_txt
        const arrow_txt = this.add.image(771, 122, "new-iglooedit", "arrow_txt");
        arrow_container.add(arrow_txt);

        // igloo_store
        const igloo_store = this.add.container(0, 0);
        igloo_store.visible = false;

        // block_1
        const block_1 = this.add.rectangle(760, 480, 1520, 960);
        block_1.isFilled = true;
        block_1.fillColor = 0;
        block_1.fillAlpha = 0.2;
        igloo_store.add(block_1);

        // store_background
        const store_background = this.add.image(760, 480, "new-iglooedit", "store_background");
        igloo_store.add(store_background);

        // seasonal
        const seasonal = this.add.image(819, 193, "new-iglooedit", "seasonal");
        igloo_store.add(seasonal);

        // evergreen
        const evergreen = this.add.image(580, 193, "new-iglooedit", "evergreen");
        igloo_store.add(evergreen);

        // store_x
        const store_x = this.add.image(1273, 184, "new-iglooedit", "store_x");
        igloo_store.add(store_x);

        // wall_button_store
        const wall_button_store = this.add.image(328, 760, "new-iglooedit", "wall_button_store");
        igloo_store.add(wall_button_store);

        // room_button_store
        const room_button_store = this.add.image(328, 666, "new-iglooedit", "room_button_store");
        igloo_store.add(room_button_store);

        // flooring_button_store
        const flooring_button_store = this.add.image(328, 572, "new-iglooedit", "flooring_button_store");
        igloo_store.add(flooring_button_store);

        // location_button_store
        const location_button_store = this.add.image(328, 478, "new-iglooedit", "location_button_store");
        igloo_store.add(location_button_store);

        // igloo_button_store
        const igloo_button_store = this.add.image(328, 384, "new-iglooedit", "igloo_button_store");
        igloo_store.add(igloo_button_store);

        // all_button_store
        const all_button_store = this.add.image(328, 290, "new-iglooedit", "all_button_store");
        igloo_store.add(all_button_store);

        // igloo_store_txt
        const igloo_store_txt = this.add.image(338, 197, "new-iglooedit", "igloo_store_txt");
        igloo_store.add(igloo_store_txt);

        // text_container
        const text_container = this.add.container(1138, 226);
        igloo_store.add(text_container);

        // put_input_here
        const put_input_here = this.add.rectangle(-65, -33, 200, 44);
        put_input_here.alpha = 0.000001;
        put_input_here.isFilled = true;
        text_container.add(put_input_here);

        // search_button
        const search_button = this.add.image(-65, -33, "new-iglooedit", "search_container");
        text_container.add(search_button);

        // storeGridView
        const storeGridView = new StoreGridView(this, 365, 202);
        storeGridView.visible = true;
        igloo_store.add(storeGridView);

        // coins
        const coins = this.add.text(1309, 838, "", {});
        coins.setOrigin(1, 0);
        coins.visible = false;
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});

        // chooseIgloo
        const chooseIgloo = this.add.container(0, 0);
        chooseIgloo.visible = false;

        // block_2
        const block_2 = this.add.rectangle(760, 480, 1520, 960);
        block_2.isFilled = true;
        block_2.fillColor = 0;
        block_2.fillAlpha = 0.2;
        chooseIgloo.add(block_2);

        // swap_bg
        const swap_bg = this.add.image(760, 480, "new-iglooedit", "swap_bg");
        chooseIgloo.add(swap_bg);

        // iglooslot_2
        const iglooslot_2 = new IglooSlots(this, 760, 734);
        chooseIgloo.add(iglooslot_2);

        // iglooslot_1
        const iglooslot_1 = new IglooSlots(this, 760, 480);
        chooseIgloo.add(iglooslot_1);

        // iglooslot_0
        const iglooslot_0 = new IglooSlots(this, 760, 226);
        chooseIgloo.add(iglooslot_0);

        // igloo_x_1
        const igloo_x_1 = this.add.image(1237, 126, "new-iglooedit", "igloo_x");
        chooseIgloo.add(igloo_x_1);

        // x_1
        const x_1 = this.add.image(1237, 125, "new-iglooedit", "x");
        chooseIgloo.add(x_1);

        // iglooTutorial
        const iglooTutorial = new IglooTutorial(this, 760, 490);
        this.add.existing(iglooTutorial);
        iglooTutorial.visible = false;

        // lists
        const iglooSlots = [iglooslot_0, iglooslot_1, iglooslot_2];

        // button_edit (components)
        const button_editButton = new Button(button_edit);
        button_editButton.spriteName = "edit";
        button_editButton.callback = () => this.onEditClick();
        const button_editShowHint = new ShowHint(button_edit);
        button_editShowHint.text = "edit_igloo_hint";

        // button_lock (components)
        const button_lockButton = new Button(button_lock);
        button_lockButton.spriteName = "button/lock";
        button_lockButton.hoverOutCallback = () => this.onLockOut();
        button_lockButton.callback = () => this.onLockClick();
        const button_lockShowHint = new ShowHint(button_lock);
        button_lockShowHint.text = "open_igloo_hint";

        // button_contest (components)
        const button_contestButton = new Button(button_contest);
        button_contestButton.spriteName = "button/contest";
        button_contestButton.callback = () => this.onIglooContest();
        const button_contestShowHint = new ShowHint(button_contest);
        button_contestShowHint.text = "Igloo Contest";

        // button_save (components)
        const button_saveSimpleButton = new SimpleButton(button_save);
        button_saveSimpleButton.callback = () => this.onSaveClick();
        const button_saveShowHint = new ShowHint(button_save);
        button_saveShowHint.text = "save_igloo_hint";

        // button_igloo_catalog (components)
        const button_igloo_catalogSimpleButton = new SimpleButton(button_igloo_catalog);
        button_igloo_catalogSimpleButton.callback = () => this.interface.loadWidget('IglooCatalog');
        const button_igloo_catalogShowHint = new ShowHint(button_igloo_catalog);
        button_igloo_catalogShowHint.text = "upgrade_igloo_hint";

        // button_furniture_catalog (components)
        const button_furniture_catalogButton = new Button(button_furniture_catalog);
        button_furniture_catalogButton.spriteName = "button/furniture_catalog";
        button_furniture_catalogButton.callback = () => this.interface.loadWidget('FurnitureCatalog');
        const button_furniture_catalogShowHint = new ShowHint(button_furniture_catalog);
        button_furniture_catalogShowHint.text = "buy_items_hint";

        // button_furniture (components)
        const button_furnitureButton = new Button(button_furniture);
        button_furnitureButton.spriteName = "button/furniture";
        button_furnitureButton.callback = () => this.onFurnitureClick();
        const button_furnitureShowHint = new ShowHint(button_furniture);
        button_furnitureShowHint.text = "view_items_hint";

        // button_music (components)
        const button_musicButton = new Button(button_music);
        button_musicButton.spriteName = "button/music";
        button_musicButton.callback = () => iglooMusic.visible = true;
        const button_musicShowHint = new ShowHint(button_music);
        button_musicShowHint.text = "play_music_hint";

        // button_no_igloo (components)
        const button_no_iglooButton = new Button(button_no_igloo);
        button_no_iglooButton.spriteName = "button/no_igloo";
        button_no_iglooButton.callback = () => this.noIglooClick();;
        const button_no_iglooShowHint = new ShowHint(button_no_igloo);
        button_no_iglooShowHint.text = "remove_igloo_hint";

        // store (components)
        const storeButton = new Button(store);
        storeButton.spriteName = "store";
        storeButton.callback = () => {this.openStore();};
        const storeShowHint = new ShowHint(store);
        storeShowHint.text = "Igloo Store";

        // switch_button (components)
        const switch_buttonButton = new Button(switch_button);
        switch_buttonButton.spriteName = "switch";
        switch_buttonButton.callback = () => {this.onSwitchClick();};
        const switch_buttonShowHint = new ShowHint(switch_button);
        switch_buttonShowHint.text = "Switch Igloo";

        // music_tween (components)
        const music_tweenSimpleButton = new SimpleButton(music_tween);
        music_tweenSimpleButton.callback = () => {this.onMusicShow()};

        // music_play (components)
        const music_playSimpleButton = new SimpleButton(music_play);
        music_playSimpleButton.callback = () => {this.onMusicShow()};

        // hide_txt (components)
        const hide_txtSimpleButton = new SimpleButton(hide_txt);
        hide_txtSimpleButton.hoverCallback;
        hide_txtSimpleButton.hoverOutCallback;
        hide_txtSimpleButton.callback = () => {this.tweenHide();};

        // show_txt (components)
        const show_txtSimpleButton = new SimpleButton(show_txt);
        show_txtSimpleButton.hoverCallback;
        show_txtSimpleButton.hoverOutCallback;
        show_txtSimpleButton.callback = () => {this.tweenShow();};

        // lock_button (components)
        const lock_buttonSimpleButton = new SimpleButton(lock_button);
        lock_buttonSimpleButton.callback = () => {this.onLockClick();};

        // bounds_button (components)
        const bounds_buttonSimpleButton = new SimpleButton(bounds_button);
        bounds_buttonSimpleButton.callback = () => {this.onBoundsClick();};

        // all_button (components)
        const all_buttonSimpleButton = new SimpleButton(all_button);
        all_buttonSimpleButton.callback = () => {this.onItemFilter("all");};

        // floor_button (components)
        const floor_buttonSimpleButton = new SimpleButton(floor_button);
        floor_buttonSimpleButton.callback = () => {this.onItemFilter("floor");};

        // flooring_button (components)
        const flooring_buttonSimpleButton = new SimpleButton(flooring_button);
        flooring_buttonSimpleButton.callback = () => {this.onItemFilter("flooring");};

        // igloo_button (components)
        const igloo_buttonSimpleButton = new SimpleButton(igloo_button);
        igloo_buttonSimpleButton.callback = () => {this.onItemFilter("igloo");};

        // location_button (components)
        const location_buttonSimpleButton = new SimpleButton(location_button);
        location_buttonSimpleButton.callback = () => {this.onItemFilter("location");};

        // wall_button (components)
        const wall_buttonSimpleButton = new SimpleButton(wall_button);
        wall_buttonSimpleButton.callback = () => {this.onItemFilter("wall");};

        // puffle_button (components)
        const puffle_buttonSimpleButton = new SimpleButton(puffle_button);
        puffle_buttonSimpleButton.callback = () => {this.onItemFilter("puffle");};

        // igloo_x (components)
        const igloo_xButton = new Button(igloo_x);
        igloo_xButton.spriteName = "igloo_x";
        igloo_xButton.callback = () => this.onSaveClick();
        igloo_xButton.activeFrame = true;

        // help_btn (components)
        const help_btnButton = new Button(help_btn);
        help_btnButton.spriteName = "igloo_x";
        help_btnButton.callback = () => this.onHelpClick();
        help_btnButton.activeFrame = true;
        const help_btnShowHint = new ShowHint(help_btn);
        help_btnShowHint.text = "Help";

        // igloo_x_2 (components)
        const igloo_x_2Button = new Button(igloo_x_2);
        igloo_x_2Button.spriteName = "igloo_x";
        igloo_x_2Button.callback = () => this.onSaveClick();
        igloo_x_2Button.activeFrame = true;

        // block_1 (components)
        new Interactive(block_1);

        // seasonal (components)
        const seasonalSimpleButton = new SimpleButton(seasonal);
        seasonalSimpleButton.callback = () => {this.onStoreSubfilter('seasonal');};

        // evergreen (components)
        const evergreenSimpleButton = new SimpleButton(evergreen);
        evergreenSimpleButton.callback = () => {this.onStoreSubfilter('evergreen');};

        // store_x (components)
        const store_xButton = new Button(store_x);
        store_xButton.spriteName = "store_x";
        store_xButton.callback = () => {this.closeStore();};
        store_xButton.activeFrame = true;

        // wall_button_store (components)
        const wall_button_storeSimpleButton = new SimpleButton(wall_button_store);
        wall_button_storeSimpleButton.callback = () => {this.onStoreFilter("wall");};

        // room_button_store (components)
        const room_button_storeSimpleButton = new SimpleButton(room_button_store);
        room_button_storeSimpleButton.callback = () => {this.onStoreFilter("floor");};

        // flooring_button_store (components)
        const flooring_button_storeSimpleButton = new SimpleButton(flooring_button_store);
        flooring_button_storeSimpleButton.callback = () => {this.onStoreFilter("flooring");};

        // location_button_store (components)
        const location_button_storeSimpleButton = new SimpleButton(location_button_store);
        location_button_storeSimpleButton.callback = () => {this.onStoreFilter("location");};

        // igloo_button_store (components)
        const igloo_button_storeSimpleButton = new SimpleButton(igloo_button_store);
        igloo_button_storeSimpleButton.callback = () => {this.onStoreFilter("igloo");};

        // all_button_store (components)
        const all_button_storeSimpleButton = new SimpleButton(all_button_store);
        all_button_storeSimpleButton.callback = () => {this.onStoreFilter("all");};

        // block_2 (components)
        new Interactive(block_2);

        // igloo_x_1 (components)
        const igloo_x_1Button = new Button(igloo_x_1);
        igloo_x_1Button.spriteName = "igloo_x";
        igloo_x_1Button.callback = () => this.closeSwitch();
        igloo_x_1Button.activeFrame = true;

        this.button_lock = button_lock;
        this.defaultControls = defaultControls;
        this.button_furniture = button_furniture;
        this.button_no_igloo = button_no_igloo;
        this.trash_box = trash_box;
        this.store = store;
        this.controls = controls;
        this.music_hide_button = music_hide_button;
        this.hide_txt = hide_txt;
        this.show_txt = show_txt;
        this.music_container = music_container;
        this.lock_button = lock_button;
        this.bounds_button = bounds_button;
        this.unlock_container = unlock_container;
        this.all_button = all_button;
        this.floor_button = floor_button;
        this.flooring_button = flooring_button;
        this.igloo_button = igloo_button;
        this.location_button = location_button;
        this.wall_button = wall_button;
        this.puffle_button = puffle_button;
        this.put_input_here_inv = put_input_here_inv;
        this.text_container_inv = text_container_inv;
        this.furniture = furniture;
        this.iglooMusic = iglooMusic;
        this.gridView = gridView;
        this.hidden_x = hidden_x;
        this.arrow_container = arrow_container;
        this.seasonal = seasonal;
        this.evergreen = evergreen;
        this.wall_button_store = wall_button_store;
        this.room_button_store = room_button_store;
        this.flooring_button_store = flooring_button_store;
        this.location_button_store = location_button_store;
        this.igloo_button_store = igloo_button_store;
        this.all_button_store = all_button_store;
        this.put_input_here = put_input_here;
        this.text_container = text_container;
        this.storeGridView = storeGridView;
        this.igloo_store = igloo_store;
        this.coins = coins;
        this.iglooslot_2 = iglooslot_2;
        this.iglooslot_1 = iglooslot_1;
        this.iglooslot_0 = iglooslot_0;
        this.chooseIgloo = chooseIgloo;
        this.iglooTutorial = iglooTutorial;
        this.iglooSlots = iglooSlots;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        this._create()

        this.iglooMusic.setActiveMusicItem(this.world.room.music);

        this.iglooBounds = this.world.client.iglooBounds;

        this.prevIglooBoundsValue = this.iglooBounds;
        this.prevLockValue = this.world.client.iglooOpen;

        this.addListeners();

        this.events.on('sleep', () => this.onSleep())

        this.filterInput =  new InputText(this, this.put_input_here.x, this.put_input_here.y, 0, 0, { id: 'inventoryFilter', backgroundColor: 'green', placeholder: "🔎 Search", fontSize: "24px", color: "black", fontFamily: 'Burbank Small', maxLength: 10});
        this.text_container.add(this.filterInput);
        this.filterInput.depth = 1000
        this.filterInput.on('textchange', () => this.filterStoreGrid())
        this.filterInput.resize(0, 0)

        this.filterInvInput =  new InputText(this, this.put_input_here_inv.x, this.put_input_here_inv.y, 0, 0, { id: 'inventoryFilter', backgroundColor: 'green', placeholder: "🔎 Search", fontSize: "24px", color: "black", fontFamily: 'Burbank Small', maxLength: 10});
        this.text_container_inv.add(this.filterInvInput);
        this.filterInvInput.depth = 1000
        this.filterInvInput.on('textchange', () => this.filterInvGrid())
        this.filterInvInput.resize(0, 0)

        // Furniture list close hit area
        let poly = new Phaser.Geom.Polygon([0,0, 1520,0, 1520,413, 1370,200, 1130,200, 1130,900, 1370,900, 1370,570, 1520,535, 1520,960, 0,960])
        Phaser.Geom.Polygon.Translate(poly, -this.furniture.x, -this.furniture.y)
    }

    addListeners() {
        this.network.events.on('get_igloostore_items', this.handleIglooItems, this);
        this.network.events.on('update_music', this.updateIglooMusic, this);
        this.network.events.on('get_store_music', this.handleStoreMusic, this);
        this.network.events.on('get_igloo_data', this.handleIglooData, this);
    }

    handleIglooItems(args) {
        this.storeGridView.handleItems(args);
        this.all_button_store.setFrame('all_button_store-active');
        this.location_button_store.setFrame('location_button_store');
        this.igloo_button_store.setFrame('igloo_button_store');
        this.flooring_button_store.setFrame('flooring_button_store');
        this.room_button_store.setFrame('room_button_store');
        this.wall_button_store.setFrame('wall_button_store');
    }

    updateIglooMusic(args) {
        if (!this.world.room.isIgloo) return;

        this.world.room.updateMusic(args.music);

        this.iglooMusic.setActiveMusicItem(args.music);
    }

    handleStoreMusic(args) {
        this.iglooMusic.onStoreMusicReceived(args.music);
    }

    onSwitchClick() {
        this.network.send('get_igloo_data')
        this.chooseIgloo.visible = true;
        this.filterInvInput.resize(0, 0);
    }

    closeSwitch() {
        this.chooseIgloo.visible = false;
        this.filterInvInput.resize(this.put_input_here_inv.width, this.put_input_here_inv.height);
    }

    closeSwitchInterface() {
        this.chooseIgloo.visible = false;
    }

    handleIglooData(args) {
        // Iterate over each igloo slot
        this.iglooSlots.forEach((slot, index) => {
            const data = args.igloos[index] || {};

            // Check if the slot object is empty
            const isEmptySlot = Object.keys(data).length === 0 || data.userId === undefined;

            if (isEmptySlot) {
                // If the slot data is empty, hide the igloo_info and igloo_icon, and show item_plus
                slot.igloo_info.visible = false;
                slot.igloo_icon.visible = false;
                slot.item_plus.visible = true;
                // Remove any previous listeners to avoid stacking
                slot.item_plus.removeAllListeners('pointerdown');

                // Add a new listener
                slot.item_plus.setInteractive().on('pointerdown', () => {
                    setTimeout(() => {
                        let text = 'Are you sure you want to create a new igloo?\nYour furniture will be saved.\nPlease allow new igloo to load.';
                        this.world.interface.prompt.showWindow(text, 'dual', () => {
                            this.saveIgloo(true);
                            this.closeSwitchInterface();
                            this.world.network.send("close_sprite", {});
                            this.changedIgloo = true;
                            this.world.client.iglooOpen = 0;
                            this.world.client.iglooBounds = true;
                            this.iglooBounds = true;
                            this.world.interface.showLoading(this.world.interface.getString('loading', 'igloo'));
                            this.world.network.send('change_igloo', { iglooId: index });
                            this.world.interface.prompt.window.visible = false;
                        });
                    }, 100);
                });
            } else {
                // If the slot data is not empty, update the info based on the data
                slot.igloo_info.visible = true;
                slot.igloo_icon.visible = true;
                slot.item_plus.visible = false;

                // Update the igloo name
                const iglooType = data.type;
                const iglooName = this.world.crumbs.igloos[iglooType]?.name || "Default Igloo";
                slot.igloo_text.setText(iglooName);

                // Update the location name
                const location = data.location;
                const locationName = this.world.crumbs.locations[location]?.name || "Default Location";
                slot.location_text.setText(locationName);

                // Update the music name
                const music = data.music;
                const musicName = music && this.world.crumbs.igloo_music[music] ? this.world.crumbs.igloo_music[music].name : "No Music";
                slot.music_text.setText(musicName);

                slot.loadAndDisplayIglooIcon(data.type);

                // Update likes and updated text if available
                if (data.likes !== undefined) {
                    slot.likes_text.setText(`Likes: ${data.likes}`);
                }

                if (data.iglooUpdated) {
                    const updatedDate = new Date(data.iglooUpdated);
                    const formattedTime = updatedDate.toLocaleString('en-US', {
                        timeZone: 'America/Los_Angeles',
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                    });
                    slot.updated_text.setText(`Last Updated: ${formattedTime}`);
                } else {
                    slot.updated_text.setText("Last Updated: Not Available");
                }

                slot.item_holder.removeAllListeners('pointerdown');

                // Add a new listener
                if (args.current_slot !== index) {
                    slot.item_holder.visible = true;
                    slot.item_holder_current.visible = false;
                    slot.item_holder.setInteractive().on('pointerdown', () => {
                        setTimeout(() => {
                            let text = 'Are you sure you want to switch igloos?\nYour furniture will be saved.\nPlease allow igloo to load.';
                            this.world.interface.prompt.showWindow(text, 'dual', () => {
                                this.saveIgloo(true);
                                this.closeSwitchInterface();
                                this.world.network.send("close_sprite", {});
                                this.changedIgloo = true;
                                this.hasTweened = false;
                                this.hasTweenedBounds = false;
                                this.world.interface.showLoading(this.world.interface.getString('loading', 'igloo'));
                                this.world.network.send('change_igloo', { iglooId: index });
                                this.world.interface.prompt.window.visible = false;
                            });
                        }, 100);
                    });
                } else {
                    slot.item_holder.visible = false;
                    slot.item_holder_current.visible = true;
                }
            }
        });
    }

    onSleep() {
        this.hideControls()
    }

    onMusicShow() {
        this.iglooMusic.visible = true;
        this.iglooMusic.depth = 10000;
        this.filterInvInput.resize(0, 0)
        this.iglooMusic.onMusicTab('inventory')
        if (this.iglooMusic.currentContext === 'store') {
            this.coins.visible = true;
            this.coins.x = 1285;
            this.coins.y = 910;
        }
    }

    onLockClick() {
        if (this.world.client.iglooOpen && this.hasTweened) {
            this.hasTweened = false;
            this.world.client.iglooOpen = false

            this.network.send('close_igloo')

            this.lock_button.setFrame('lock_button')

            this.tweens.add({
                targets: this.lock_button,
                x: this.lock_button.x - 42,
                duration: 1000,
                ease: 'Power1',
            });

            return
        }

        let text = 'Would you like to open your igloo?\nThis will add your igloo to the map.'

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.world.client.iglooOpen = true
            this.updateLockFrame()

            this.network.send('open_igloo')

            this.interface.prompt.window.visible = false
        })
    }

    onLockOut() {
        this.updateLockFrame()
    }

    updateLockFrame() {
        if (!this.changedIgloo) {
            if (this.world.client.iglooOpen && !this.hasTweened) {
                this.lock_button.setFrame('lock_button-off')
                this.hasTweened = true;
                this.tweens.add({
                    targets: this.lock_button,
                    x: this.lock_button.x + 42,
                    duration: 1000,
                    ease: 'Power1',
                });
            }
        } else if (this.changedIgloo) {
            if (!this.world.client.iglooOpen) {
                this.lock_button.setFrame('lock_button')
                this.hasTweened = true;
                this.lock_button.x = 304
            } else if (this.world.client.iglooOpen) {
                this.lock_button.setFrame('lock_button-off')
                this.hasTweened = true;
                this.lock_button.x = 346
            }
        }
    }

    onBoundsClick() {
        if (this.world.client.iglooBounds === false && this.hasTweenedBounds) {
            let text = 'Would you like to turn on igloo boundaries?\nAll out of bounds furniture will be moved.'

            this.interface.prompt.showWindow(text, 'dual', () => {
                this.hasTweenedBounds = false;
                this.world.client.iglooBounds = true;

                this.network.send('open_igloo_bounds')

                this.bounds_button.setFrame('boundary_button')

                this.tweens.add({
                    targets: this.bounds_button,
                    x: this.bounds_button.x - 42,
                    duration: 1000,
                    ease: 'Power1',
                });

                this.iglooBounds = true;

                this.interface.prompt.window.visible = false
            })

            return
        }

        let text = 'Would you like to turn off igloo boundaries?\nThis will allow you to place items anywhere.'

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.world.client.iglooBounds = false

            this.network.send('close_igloo_bounds')

            this.iglooBounds = false;

            this.updateBoundsFrame()

            this.interface.prompt.window.visible = false
        })
    }

    updateBoundsFrame() {
        if (!this.changedIgloo) {
            if (!this.world.client.iglooBounds && !this.hasTweenedBounds) {
                this.bounds_button.setFrame('boundary_button-off')
                this.hasTweenedBounds = true
                this.tweens.add({
                    targets: this.bounds_button,
                    x: this.bounds_button.x + 42,
                    duration: 1000,
                    ease: 'Power1',
                });
            } 
        } else if (this.changedIgloo) {
            if (this.iglooBounds === true) {
                this.bounds_button.setFrame('boundary_button')
                this.hasTweenedBounds = true
                this.bounds_button.x = 477
            } else if (this.iglooBounds === false) {
                this.bounds_button.setFrame('boundary_button-off')
                this.hasTweenedBounds = true
                this.bounds_button.x = 519
            }
        }
    }

    onEditClick() {
        this.world.network.send("open_sprite", {sprite: '1_4'})
        this.world.network.send("jklashdfkjl")

        this.filterInvInput.resize(this.put_input_here_inv.width, this.put_input_here_inv.height)

        this.interface.hideInterface(false)
        this.world.room.hidePuffles()
        this.world.room.hidePenguins()
        this.world.room.enableFurnitureInput()
        this.showControls()
        setTimeout(() => {
            this.world.room.hidePuffles();
        }, 200);
    }

    onSaveClick() {
        this.saveIgloo()
        this.interface.showInterface()
        this.world.room.hideEditBg()
        this.world.room.showPenguins()
        this.world.room.disableFurnitureInput()
        this.hideControls()
        this.hideDragContainer()
        this.filterInvInput.resize(0, 0)
        this.hidden_x.visible = false;

        this.world.network.send("close_sprite", {})
        this.world.network.send("kahsdfaas")
    }

    onFurnitureClick() {
        this.furniture.visible = !this.furniture.visible
    }

    showControls() {
        this.updateLockFrame();
        this.updateBoundsFrame();
        this.defaultControls.visible = false
        if (!this.furnitureHidden) {
            this.controls.visible = true
        }
        this.furniture.visible = true
        this.unlock_container.visible = true
        this.music_container.visible = true
        this.onItemFilter("all");

        this.setControlsInteractive(true)
    }

    hideControls() {
        this.defaultControls.visible = true
        this.controls.visible = false
        this.furniture.visible = false
        this.unlock_container.visible = false
        this.music_container.visible = false
        this.gridView.visible = false
    }

    setCoins() {
        this.coins.text = `YOUR COINS: ${this.world.client.coins}`
    }

    showGridView(filter = null) {
        this.gridView.visible = true
        this.gridView.startGrid(filter)
    }

    showStoreGridView(filter="furniture", subfilter=null, textFilter=null) {
        this.storeGridView.visible = true
        this.storeGridView.startGrid(filter, subfilter, textFilter)
    }

    filterStoreGrid() {
        this.storeGridView.startGrid(this.storeGridView.filter, this.storeGridView.subfilter, this.filterInput.text)
    }

    filterInvGrid() {
        this.gridView.startGrid(this.gridView.filter, this.filterInvInput.text)
    }

    onItemFilter(type) {
        if (this.furnitureHidden) {
            this.tweenShow();
        }
        this.all_button.setFrame('all_button');
        this.location_button.setFrame('location_button');
        this.igloo_button.setFrame('igloo_button');
        this.flooring_button.setFrame('flooring_button');
        this.floor_button.setFrame('floor_button');
        this.wall_button.setFrame('wall_button');
        this.puffle_button.setFrame('puffle_button');

        switch(type) {
            case 'all':
                this.all_button.setFrame('all_button-active');
                this.showGridView(null, this.gridView.textFilter);
                break;
            case 'location':
                this.location_button.setFrame('location_button-active');
                this.showGridView('location', this.gridView.textFilter);
                break;
            case 'igloo':
                this.igloo_button.setFrame('igloo_button-active');
                this.showGridView('igloo', this.gridView.textFilter);
                break;
            case 'flooring':
                this.flooring_button.setFrame('flooring_button-active');
                this.showGridView('flooring', this.gridView.textFilter);
                break;
            case 'floor':
                this.floor_button.setFrame('floor_button-active');
                this.showGridView(1, this.gridView.textFilter);
                break;
            case 'wall':
                this.wall_button.setFrame('wall_button-active');
                this.showGridView(2, this.gridView.textFilter);
                break;
            case 'puffle':
                this.puffle_button.setFrame('puffle_button-active')
                this.showGridView(4, this.gridView.textFilter);
                break;
            default:
                console.log(`Unknown type: ${type}`);
        }
    }

    onStoreFilter(type) {
        this.all_button_store.setFrame('all_button_store');
        this.location_button_store.setFrame('location_button_store');
        this.igloo_button_store.setFrame('igloo_button_store');
        this.flooring_button_store.setFrame('flooring_button_store');
        this.room_button_store.setFrame('room_button_store');
        this.wall_button_store.setFrame('wall_button_store');

        switch(type) {
            case 'all':
                this.all_button_store.setFrame('all_button_store-active');
                this.showStoreGridView('furniture', this.storeGridView.subfilter, this.storeGridView.textFilter);
                break;
            case 'location':
                this.location_button_store.setFrame('location_button_store-active');
                this.showStoreGridView('location', this.storeGridView.subfilter, this.storeGridView.textFilter);
                break;
            case 'igloo':
                this.igloo_button_store.setFrame('igloo_button_store-active');
                this.showStoreGridView('igloo', this.storeGridView.subfilter, this.storeGridView.textFilter);
                break;
            case 'flooring':
                this.flooring_button_store.setFrame('flooring_button_store-active');
                this.showStoreGridView('flooring', this.storeGridView.subfilter, this.storeGridView.textFilter);
                break;
            case 'floor':
                this.room_button_store.setFrame('room_button_store-active');
                this.showStoreGridView("floor", this.storeGridView.subfilter, this.storeGridView.textFilter);
                break;
            case 'wall':
                this.wall_button_store.setFrame('wall_button_store-active');
                this.showStoreGridView("wall", this.storeGridView.subfilter, this.storeGridView.textFilter);
                break;
            default:
                console.log(`Unknown type: ${type}`);
        }
    }

    onStoreSubfilter(type) {
        this.evergreen.setFrame('evergreen');
        this.seasonal.setFrame('seasonal');

        if (type == 'evergreen' && this.storeGridView.subfilter == 'evergreen') {
            this.evergreen.setFrame('evergreen');
            return this.showStoreGridView(this.storeGridView.filter, null, this.storeGridView.textFilter)
        } else if (type == 'evergreen') {
            this.evergreen.setFrame('evergreen-active');
        } else if (type == 'seasonal' && this.storeGridView.subfilter =='seasonal') {
            this.seasonal.setFrame('seasonal');
            return this.showStoreGridView(this.storeGridView.filter, null, this.storeGridView.textFilter)
        } else if (type == 'seasonal') {
            this.seasonal.setFrame('seasonal-active');
        }

        this.showStoreGridView(this.storeGridView.filter, type, this.storeGridView.textFilter);
    }

    openStore() {
        this.network.send('get_igloostore_items')
        this.coins.visible = true;
        this.igloo_store.visible = true;
        this.evergreen.setFrame('evergreen')
        this.seasonal.setFrame('seasonal')
        this.filterInput.resize(this.put_input_here.width, this.put_input_here.height)
        this.filterInvInput.resize(0, 0)
        this.setCoins()
    }

    closeStore() {
        this.coins.visible = false;
        this.igloo_store.visible = false;
        this.filterInput.resize(0, 0)
        this.filterInvInput.resize(this.put_input_here_inv.width, this.put_input_here_inv.height)
    }

    tweenHide() {
        if (this.isTweening) return;
        this.isTweening = true;
        this.hideDragContainer();
        this.furnitureHidden = true;
        this.controls.visible = false;
        const moveDistance = 197;
        const furnitureMoveDistance = 400;
        const duration = 750; // Base duration for moveDistance

        // Calculate durations
        const furnitureDuration = (furnitureMoveDistance / moveDistance) * duration;
        const musicMoveDistance = (furnitureMoveDistance / 400) * 310;
        const musicDuration = (musicMoveDistance / moveDistance) * duration;

        this.hide_txt.visible = false;
        this.show_txt.visible = true;

        this.tweens.add({
            targets: this.music_container,
            y: this.music_container.y - musicMoveDistance,
            duration: musicDuration,
            ease: 'Power1',
            onComplete: () => {
                this.hidden_x.visible = true;
                this.isTweening = false;
            }
        });

        this.tweens.add({
            targets: this.furniture,
            y: this.furniture.y - furnitureMoveDistance,
            duration: furnitureDuration,
            ease: 'Power1',
        });

        this.tweens.add({
            targets: this.arrow_container,
            y: this.arrow_container.y - moveDistance,
            duration: duration,
            ease: 'Power1',
        });

        this.tweens.add({
            targets: this.unlock_container,
            y: this.unlock_container.y - furnitureMoveDistance,
            duration: furnitureDuration,
            ease: 'Power1',
        });

        this.tweens.add({
            targets: this.gridView,
            y: this.gridView.y - furnitureMoveDistance,
            duration: furnitureDuration,
            ease: 'Power1'
        });
    }

    tweenShow() {
        if (this.isTweening) return;
        this.isTweening = true;
        this.furnitureHidden = false;
        this.controls.visible = true;
        this.hidden_x.visible = false;
        const moveDistance = 197;
        const furnitureMoveDistance = 400;
        const duration = 750; // Base duration for moveDistance

        // Calculate durations
        const furnitureDuration = (furnitureMoveDistance / moveDistance) * duration;
        const musicMoveDistance = (furnitureMoveDistance / 400) * 310;
        const musicDuration = (musicMoveDistance / moveDistance) * duration * 1.35;

        this.hide_txt.visible = true;
        this.show_txt.visible = false;

        this.tweens.add({
            targets: this.music_container,
            y: this.music_container.y + musicMoveDistance,
            duration: musicDuration,
            ease: 'Power1',
        });

        this.tweens.add({
            targets: this.furniture,
            y: this.furniture.y + furnitureMoveDistance,
            duration: furnitureDuration,
            ease: 'Power1',
        });

        this.tweens.add({
            targets: this.arrow_container,
            y: this.arrow_container.y + moveDistance,
            duration: duration,
            ease: 'Power1',
        });

        this.tweens.add({
            targets: this.unlock_container,
            y: this.unlock_container.y + furnitureMoveDistance,
            duration: furnitureDuration,
            ease: 'Power1',
        });

        this.tweens.add({
            targets: this.gridView,
            y: this.gridView.y + furnitureMoveDistance,
            duration: furnitureDuration,
            ease: 'Power1',
            onComplete: () => {
                this.isTweening = false;
            }
        });
    }

    saveIgloo(change=false) {
        if (this.world.room.selected) {
            this.world.room.selected.drop()
        }

        let furniture = this.world.room.furnitureSprites.map(f => {
            return {
                furnitureId: f.id,
                x: f.x,
                y: f.y,
                rotation: parseInt(f.currentFrame[0]),
                frame: parseInt(f.currentFrame[1]),
                depth: f.depth
            }
        })

        if (change) {
            this.network.send('update_furniture', { furniture: furniture, change: 1 });
            return;
        }

        this.network.send('update_furniture', { furniture: furniture })
    }

    setControlsInteractive(interactive) {
        let set = (interactive) ? 'setInteractive' : 'disableInteractive'

        for (let control of this.controls.list) {
            control[set]()
        }
    }

    noIglooClick() {
        this.interface.prompt.showWindow('Are you sure you want to remove your igloo?\n Your flooring and igloo furniture will be saved\n in your inventory.', 'dual', () => {
            this.interface.prompt.window.visible = false
            this.network.send('remove_igloo')
        })
    }

    toggleDragContainer() {
        if (this.arrow_container) {
            this.arrow_container.visible = !this.arrow_container.visible;
        }
    }

    hideDragContainer() {
        if (this.arrow_container) {
            this.arrow_container.visible = false;
            this.filterInvInput.resize(this.put_input_here_inv.width, this.put_input_here_inv.height);
        }
    }

    showDragContainer() {
        if (this.arrow_container) {
            if (!this.furnitureHidden) {
                this.filterInvInput.resize(0, 0);
                this.arrow_container.visible = true;
            }
        }
    }

    onIglooContest() {
        /*this.interface.prompt.showWindow('Are you sure you want to submit your igloo\nto the judges of the Holly Jolly Igloo Contest?\nYou can only submit your igloo one time!', 'dual', () => {
            this.interface.prompt.window.visible = false
            this.network.send('igloo_contest',{})
        })*/
    }

    onHelpClick() {
        this.iglooTutorial.show()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
