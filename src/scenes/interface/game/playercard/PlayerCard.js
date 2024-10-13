import BaseContainer from '@scenes/base/BaseContainer'

import { Animation, Button, DraggableContainer, ShowHint, Interactive, SimpleButton } from '@components/components'

import Inventory from './inventory/Inventory'
import InventorySort from './inventory_sort/InventorySort'
import Buttons from './buttons/Buttons'
import PaperDoll from './paperdoll/PaperDoll'
import Outfitsaver from '../outfitsaver/Outfitsaver'

import TransformPaperLoader from '@engine/loaders/TransformPaperLoader'


/* START OF COMPILED CODE */

export default class PlayerCard extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 460);

        /** @type {Outfitsaver} */
        this.outfitsaver_1;
        /** @type {Phaser.GameObjects.Container} */
        this.photo;
        /** @type {Phaser.GameObjects.Container} */
        this.transformPaper;
        /** @type {PaperDoll} */
        this.paperDoll;
        /** @type {Buttons} */
        this.buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Text} */
        this.stamps;
        /** @type {Phaser.GameObjects.Container} */
        this.stats;
        /** @type {Phaser.GameObjects.Text} */
        this.username;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.highlightArea;
        /** @type {InventorySort} */
        this.inventorySort;
        /** @type {Inventory} */
        this.inventory;
        /** @type {Phaser.GameObjects.Image} */
        this.stripes;
        /** @type {Phaser.GameObjects.Container} */
        this.badge;
        /** @type {Phaser.GameObjects.Image} */
        this.edit_player_button;
        /** @type {Phaser.GameObjects.Container} */
        this.outfitarrow;


        // outfitsaver
        const outfitsaver = scene.add.container(-245, -123);
        this.add(outfitsaver);

        // outfitsaver_1
        const outfitsaver_1 = new Outfitsaver(scene, 865, 105);
        outfitsaver_1.scaleX = 1;
        outfitsaver_1.scaleY = 1;
        outfitsaver_1.visible = false;
        outfitsaver.add(outfitsaver_1);

        // card_photo
        const card_photo = scene.add.image(0, 0, "main", "card-photo");
        card_photo.setOrigin(0.5011600928074246, 0.5011709601873536);
        this.add(card_photo);

        // photo
        const photo = scene.add.container(-205, -206);
        this.add(photo);

        // transformPaper
        const transformPaper = scene.add.container(0, -3);
        this.add(transformPaper);

        // card_bg
        const card_bg = scene.add.image(0, 0, "main", "card-bg-player");
        this.add(card_bg);

        // paperDoll
        const paperDoll = new PaperDoll(scene, 0, -3);
        this.add(paperDoll);

        // buttons
        const buttons = new Buttons(scene, -30, 255);
        buttons.visible = false;
        this.add(buttons);

        // stats
        const stats = scene.add.container(-13, 255);
        this.add(stats);

        // card_coin
        const card_coin = scene.add.image(-160.5, -50, "main", "card-coin");
        card_coin.scaleX = 0.9;
        card_coin.scaleY = 0.9;
        card_coin.setOrigin(0, 0);
        stats.add(card_coin);

        // quests_button
        const quests_button = scene.add.image(177, -3, "main", "blue-button");
        stats.add(quests_button);

        // quest_icon
        const quest_icon = scene.add.image(158, -25, "main", "quest-icon");
        quest_icon.setOrigin(0, 0);
        stats.add(quest_icon);

        // coins
        const coins = scene.add.text(39, -37, "", {});
        coins.setOrigin(0.5, 0);
        coins.text = "Your Coins: 000000";
        coins.setStyle({ "color": "#000000ff", "fixedWidth":300,"fontFamily": "Arial", "fontSize": "24px" });
        stats.add(coins);

        // blue_button
        const blue_button = scene.add.image(-146, 23, "main", "blue-button");
        stats.add(blue_button);

        // stamp_icon_1
        const stamp_icon_1 = scene.add.image(-163.5, 3.5, "main", "stamp-icon");
        stamp_icon_1.setOrigin(0, 0);
        stats.add(stamp_icon_1);

        // stamps
        const stamps = scene.add.text(39, 9, "", {});
        stamps.setOrigin(0.5, 0);
        stamps.text = "Your Stamps: 295/340";
        stamps.setStyle({ "color": "#000000ff", "fixedWidth":300,"fontFamily": "Arial", "fontSize": "24px" });
        stats.add(stamps);

        // username
        const username = scene.add.text(0, -238, "", {});
        username.setOrigin(0.5, 0.5);
        username.text = "Username";
        username.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":360,"fixedHeight":36,"fontFamily": "Arial", "fontSize": "32px", "fontStyle": "bold" });
        this.add(username);

        // highlightArea
        const highlightArea = scene.add.rectangle(5, -238, 128, 128);
        highlightArea.scaleX = 1.8747760847026522;
        highlightArea.scaleY = 0.18470512463903943;
        highlightArea.visible = false;
        highlightArea.fillColor = 5368575;
        highlightArea.fillAlpha = 100;
        this.add(highlightArea);

        // x_button
        const x_button = scene.add.image(177, -237, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(177, -239, "main", "blue-x");
        this.add(blue_x);

        // inventorySort
        const inventorySort = new InventorySort(scene, 434, 315);
        inventorySort.visible = false;
        this.add(inventorySort);

        // inventory
        const inventory = new Inventory(scene, -135, 33);
        inventory.visible = true;
        this.add(inventory);

        // badge
        const badge = scene.add.container(-153, -240);
        this.add(badge);

        // badge_member
        const badge_member = scene.add.image(0, 17, "main", "badge/member");
        badge.add(badge_member);

        // badge_lines_lines
        const badge_lines_lines = scene.add.sprite(0, 18, "main", "badge/lines/lines0001");
        badge_lines_lines.setOrigin(0.5, 0.5028571428571429);
        badge.add(badge_lines_lines);

        // stripes
        const stripes = scene.add.image(0, 56, "main", "badge/stripes/4");
        stripes.setOrigin(0.5, 0.5051546391752577);
        badge.add(stripes);

        // badge_ribbon
        const badge_ribbon = scene.add.image(0, 33, "main", "badge/ribbon");
        badge_ribbon.setOrigin(0.5061728395061729, 0.5185185185185185);
        badge.add(badge_ribbon);

        // badge_star
        const badge_star = scene.add.image(0, 0, "main", "badge/star");
        badge.add(badge_star);

        // edit_player_button
        const edit_player_button = scene.add.image(163, -176, "main", "edit_player_button");
        this.add(edit_player_button);

        // outfitarrow
        const outfitarrow = scene.add.container(-255, -164);
        this.add(outfitarrow);

        // tab_1
        const tab_1 = scene.add.image(497, 261, "main", "tab");
        tab_1.angle = -90;
        outfitarrow.add(tab_1);

        // tab_arrow
        const tab_arrow = scene.add.image(490, 258, "main", "tab-arrow");
        tab_arrow.angle = -90;
        outfitarrow.add(tab_arrow);

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = card_bg;

        // card_photo (components)
        new Interactive(card_photo);

        // quests_button (components)
        const quests_buttonButton = new Button(quests_button);
        quests_buttonButton.spriteName = "blue-button";
        quests_buttonButton.callback = () => {this.openQuests()};
        quests_buttonButton.activeFrame = true;
        const quests_buttonShowHint = new ShowHint(quests_button);
        quests_buttonShowHint.text = "quests_hint";

        // blue_button (components)
        const blue_buttonButton = new Button(blue_button);
        blue_buttonButton.spriteName = "blue-button";
        blue_buttonButton.callback = () => {this.openStampbook()};
        blue_buttonButton.activeFrame = true;

        // highlightArea (components)
        const highlightAreaSimpleButton = new SimpleButton(highlightArea);
        highlightAreaSimpleButton.callback = () => { this.copyUsername() };
        const highlightAreaShowHint = new ShowHint(highlightArea);
        highlightAreaShowHint.text = "Copy Username";

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.callback = () => { this.close() };
        x_buttonButton.activeFrame = true;

        // badge_lines_lines (components)
        const badge_lines_linesAnimation = new Animation(badge_lines_lines);
        badge_lines_linesAnimation.key = "badge/lines/lines";
        badge_lines_linesAnimation.end = 180;

        // edit_player_button (components)
        const edit_player_buttonButton = new Button(edit_player_button);
        edit_player_buttonButton.spriteName = "edit_player_button";
        edit_player_buttonButton.callback = () => { this.editPlayer() };
        edit_player_buttonButton.activeFrame = true;

        // tab_1 (components)
        const tab_1SimpleButton = new SimpleButton(tab_1);
        tab_1SimpleButton.callback = () => {this.onoutfitClick()};
        tab_1SimpleButton.pixelPerfect = true;

        this.outfitsaver_1 = outfitsaver_1;
        this.photo = photo;
        this.transformPaper = transformPaper;
        this.paperDoll = paperDoll;
        this.buttons = buttons;
        this.coins = coins;
        this.stamps = stamps;
        this.stats = stats;
        this.username = username;
        this.highlightArea = highlightArea;
        this.inventorySort = inventorySort;
        this.inventory = inventory;
        this.stripes = stripes;
        this.badge = badge;
        this.edit_player_button = edit_player_button;
        this.outfitarrow = outfitarrow;

        /* START-USER-CTR-CODE */

        // Active penguin id
        this._dontHideInputs = true
        this.id = null
        this.selectedOutfitSlot = null
        this._selectedOutfitSlot = null
        this.mascotGiveaway = null

        this.transformPaperLoader = new TransformPaperLoader(scene,this.transformPaper,() => this.revertTransform())

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    /**
     * Shows a player card by id, if the user is found in the current room the penguin object can
     * be taken from there. Otherwise the penguin object must be fetched from the server.
     *
     * @param {number} id - Penguin ID
     * @param {boolean} refresh - Whether or not a card should pass the already open check
     */
    showCard(id, refresh = false) {
        // Don't open player's card if it's already open
        if (id == this.id && this.visible && !refresh) {
            this.interface.showWidget(this)
            return
        }

        if (id in this.world.room.penguins) {
            let penguin = this.world.room.penguins[id]
            this._showCard(penguin, penguin.items.flat)

        } else {
            // Fetch penguin object from server
            this.network.send('get_player', { id: id })
        }
    }

    transformCondition(penguin) {
        if(penguin.transform <= 0) return false
        let crumb = this.crumbs.transformations[penguin.transform]
        return penguin.transform > 0 && !crumb.no_paper && !crumb.dont_hide_doll
    }

    /**
     * Primary showCard function, which accepts a penguin object, and optionally an items object to
     * fill the player card with the correct data. The items object is not required if the penguin is fetched
     * from the server due to all necessary data being available from the penguin object.
     *
     * @param {object} penguin - Penguin object
     * @param {object} items - Penguin items object
     */
    _showCard(penguin, items = penguin) {
        this.items = items
        this.isClient = penguin.isClient
        // Text
        this.mascotGiveaway = penguin.mascotGiveaway
        this.username.text = penguin.displayName

        for (var x in this.world.mascots) {
            if (this.world.mascots[x].id == penguin.id) this.username.text = this.world.mascots[x].name
        }

        // Puuffle 
        if (this.paperDoll.puffle) {
            this.paperDoll.puffle.destroy()
        }

        this.photo.removeAll(true)

        if (penguin.puffle  &&  (penguin.puffle !== 0 && !items.puffle) || penguin.walkingPuffleType != null) {
            if (penguin.puffle) {
                items.puffle = penguin.puffle
            } else {
                items.puffle = {type: penguin.walkingPuffleType}
            }
        } else {
            items.puffle = 0;
        }

        if (penguin.id && !items.id){
            items.id = penguin.id
        }

        // Paper doll and transformation checks
        this.paperDoll.visible = true
        this.transformPaper.visible = false
        if(penguin.transform <= 0 || (penguin.transform > 0 && this.crumbs.transformations[penguin.transform].dont_hide_doll)) {
            this.paperDoll.loadDoll(items, penguin.isClient)
        }
        if(penguin.transform > 0 && !this.crumbs.transformations[penguin.transform].no_paper) {
            if(!this.crumbs.transformations[penguin.transform].dont_hide_doll) this.paperDoll.visible = false
            this.transformPaper.visible = true
            if(this.inventory.container.visible) this.inventory.onTabClick()
            this.inventory.close()
            this.transformPaperLoader.loadItem(penguin.transform, penguin.isClient, this.crumbs.transformations[penguin.transform].paper_colors, penguin.color)
        }


        // Visible elements
        if (penguin.isClient) {
            this.coins.text = `Your Coins: ${this.world.client.coins}`
            this.stamps.text = `Your Stamps: ${this.world.client.stamps.length}/${this.world.stampController.all.length}`
            this.stats.visible = true
            this.buttons.visible = false

            let con = penguin.transform <= 0 || (penguin.transform > 0 && this.crumbs.transformations[penguin.transform].no_paper)
            this.inventory.visible = con
            this.outfitarrow.visible = con
            if(con) this.inventory.showPage()

        } else {
            this.stats.visible = false
            this.buttons.visible = true
            this.inventory.visible = false
            this.outfitarrow.visible = false
            this.outfitsaver_1.visible = false
        }


        if (this.inventory.container.visible === true) {
            this.outfitarrow.visible = false
        } else if (this.outfitsaver_1.visible === true) {
            this.outfitsaver_1.visible = false
            this.outfitarrow.visible = true 
        }


        this.id = penguin.id

        this.updateButtons()
        this.updateBadge(penguin.joinTime)

        if(this.world.client.rank < 3 || this.world.client.streamer) {
           this.edit_player_button.visible = false
        } else {
            this.edit_player_button.visible = true
        }

        if (this.world.client.rank > 1) {
            this.highlightArea.visible = true
        }

        // If buddy, update items for headshot
        this.interface.updateBuddyHeadshot(penguin)

        this.interface.showWidget(this)
    }

    updateButtons() {
        if (this.buttons.visible) {
            let relationship = this.world.getRelationship(this.id)
            this.buttons.updateButtons(relationship)
        }
    }

    updateBadge(joinTime) {
        if (!joinTime) {
            this.badge.visible = false
            return
        }

        this.badge.visible = true

        let oneDay = 1000 * 60 * 60 * 24
        let timeDiff = Date.now() - Date.parse(joinTime)
        let daysDiff = Math.round(timeDiff / oneDay)

        let months = Math.floor(daysDiff / 30)
        let frame

        if (months <= 1) {
            frame = 0
        } else if (months <= 2) {
            frame = 1
        } else if (months <= 3) {
            frame = 2
        } else if (months <= 4) {
            frame = 3
        } else {
            frame = 4
        }

        this.stripes.setFrame(`badge/stripes/${frame}`)
    }

    revertTransform() {
        let text = 'Transform back into a penguin?'
        this.interface.prompt.showWindow(text,'dual',() => {
            this.world.client.sendTransform(0)
            this.close()
            this.interface.prompt.window.visible = false
            this.paperDoll.visible = true
            this.paperDoll.loadDoll(this.items, this.isClient)
        })
    }

    editPlayer(){
        this.network.send('edit_player', { id: this.id })
        this.interface.prompt.showWindow(null,'loading')
        //this.visible = false
    }

    onoutfitClick() {
        if (this.outfitsaver_1.visible === true) {
            this.outfitsaver_1.visible = false
            this.outfitarrow.visible = true 
            return
        }

        this.inventory.visible = false
        this.outfitsaver_1.visible = true
        this.outfitarrow.visible = false 
    }

    openStampbook() {
        this.network.send("open_sprite", {sprite: '1_3'})
        this.interface.loadWidget("Stampbook")
    }

    openQuests() {
        this.interface.loadWidget("PartyQuests")
    }

    copyUsername() {
        if (this.world.client.rank > 1) {
            navigator.clipboard.writeText(this.username.text);
        }
    }

    close() {
        this.visible = false
        this.inventory.close();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
