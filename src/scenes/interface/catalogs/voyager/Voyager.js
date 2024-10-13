import BookContainer from '@scenes/interface/books/BookContainer';
import BuyButton from '@scenes/interface/shared_prefabs/BuyButton';
import PengiquinDoll from '@scenes/interface/shared_prefabs/PengiquinDoll';
import Carousel from '@scenes/interface/shared_prefabs/Carousel';
import { Button, Interactive, SimpleButton } from '@components/components';

export const preload = {
    key: ['voyager-pack', 'pengiquin-pack'],
    url: ['assets/media/interface/catalogs/voyager/voyager-pack.json', 'assets/media/interface/catalogs/voyager/pengiquin-pack.json'],
    loadString: ['joining', 'The Voyager']
}

/* START OF COMPILED CODE */

export default class Voyager extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Carousel} */
        this.carousel;
        /** @type {Phaser.GameObjects.Container} */
        this.pengiquins;
        /** @type {Phaser.GameObjects.Image} */
        this.gemshop_fg_right;
        /** @type {Phaser.GameObjects.Image} */
        this.gemshop_fg_left;
        /** @type {Phaser.GameObjects.Sprite} */
        this.shop_vignette;
        /** @type {Phaser.GameObjects.Text} */
        this.pageNum;
        /** @type {Phaser.GameObjects.Text} */
        this.itemRarityOLD;
        /** @type {Phaser.GameObjects.Sprite} */
        this.itemRarity;
        /** @type {Phaser.GameObjects.Container} */
        this.price;
        /** @type {Phaser.GameObjects.Text} */
        this.itemName;
        /** @type {Phaser.GameObjects.Text} */
        this.itemName_1;
        /** @type {Phaser.GameObjects.Text} */
        this.itemCost;
        /** @type {Phaser.GameObjects.Container} */
        this.shops_details;
        /** @type {Phaser.GameObjects.Text} */
        this.itemCost_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rerollBtnIcon;
        /** @type {Phaser.GameObjects.Container} */
        this.reroll_container;
        /** @type {Phaser.GameObjects.Text} */
        this.gemsAvailable;
        /** @type {Phaser.GameObjects.Text} */
        this.gemsAvailable_1;
        /** @type {Phaser.GameObjects.Container} */
        this.shop_gems;
        /** @type {Phaser.GameObjects.Container} */
        this.shopUI;
        /** @type {Phaser.GameObjects.Image} */
        this.spinner;
        /** @type {Phaser.GameObjects.Sprite} */
        this.carousel_vignette;
        /** @type {Phaser.GameObjects.Ellipse[]} */
        this.carouselNodes;


        // gemshop_bg
        const gemshop_bg = scene.add.image(786.1834868441113, 480.1172419590179, "voyager", "gemshop_bg");
        this.add(gemshop_bg);

        // block
        const block = scene.add.rectangle(760, 480, 1520, 960);
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        this.add(block);

        // pengiquins
        const pengiquins = scene.add.container(760.1834868441113, 378.1172419590179);
        this.add(pengiquins);

        // carousel
        const carousel = new Carousel(scene, 0, 102);
        pengiquins.add(carousel);

        // pengiquinPositions
        const pengiquinPositions = scene.add.container(0, 0);
        pengiquins.add(pengiquinPositions);

        // pos5
        const pos5 = scene.add.ellipse(369, -28, 128, 128);
        pos5.isFilled = true;
        pos5.fillColor = 16252735;
        pengiquinPositions.add(pos5);

        // pos4
        const pos4 = scene.add.ellipse(214, -21, 128, 128);
        pos4.isFilled = true;
        pos4.fillColor = 16252735;
        pengiquinPositions.add(pos4);

        // pos3
        const pos3 = scene.add.ellipse(0, 61, 128, 128);
        pos3.isFilled = true;
        pos3.fillColor = 16252735;
        pengiquinPositions.add(pos3);

        // pos2
        const pos2 = scene.add.ellipse(-214, -21, 128, 128);
        pos2.isFilled = true;
        pos2.fillColor = 16252735;
        pengiquinPositions.add(pos2);

        // pos1
        const pos1 = scene.add.ellipse(-369, -28, 128, 128);
        pos1.isFilled = true;
        pos1.fillColor = 16252735;
        pengiquinPositions.add(pos1);

        // gemshop_fg_right
        const gemshop_fg_right = scene.add.image(1127, 329, "voyager", "gemshop_fg_right");
        this.add(gemshop_fg_right);

        // gemshop_fg_left
        const gemshop_fg_left = scene.add.image(355, 313, "voyager", "gemshop_fg_left");
        this.add(gemshop_fg_left);

        // shopUI
        const shopUI = scene.add.container(92.18348684411129, 57.1172419590179);
        shopUI.visible = false;
        this.add(shopUI);

        // shop_vignette
        const shop_vignette = scene.add.sprite(-92.18348693847656, -57.11724090576172, "voyager2", "item_show_vignette");
        shop_vignette.setOrigin(0, 0);
        shop_vignette.alpha = 0.7;
        shop_vignette.alphaTopLeft = 0.7;
        shop_vignette.alphaTopRight = 0.7;
        shop_vignette.alphaBottomLeft = 0.7;
        shop_vignette.alphaBottomRight = 0.7;
        shopUI.add(shop_vignette);

        // gems
        const gems = scene.add.container(0, 25);
        shopUI.add(gems);

        // pageNum
        const pageNum = scene.add.text(669, 646, "", {});
        pageNum.setOrigin(0.5, 0);
        pageNum.visible = false;
        pageNum.text = "0/0";
        pageNum.setStyle({ "align": "center", "fixedWidth":186,"fontFamily": "Arial", "fontSize": "32px" });
        shopUI.add(pageNum);

        // price
        const price = scene.add.container(741, 111);
        shopUI.add(price);

        // banner
        const banner = scene.add.image(-857, -297, "voyager2", "banner");
        banner.scaleX = 1.01;
        banner.angle = -2;
        banner.setOrigin(0, 0);
        price.add(banner);

        // itemRarityOLD
        const itemRarityOLD = scene.add.text(-149, -3, "", {});
        itemRarityOLD.setOrigin(0.5, 0);
        itemRarityOLD.visible = false;
        itemRarityOLD.text = "LEGENDARY";
        itemRarityOLD.setStyle({ "align": "right", "fixedWidth":457,"fontFamily": "Arial", "fontSize": "46px", "fontStyle": "bold" });
        price.add(itemRarityOLD);

        // container_2
        const container_2 = scene.add.container(-112, -185);
        container_2.scaleY = 0.9;
        price.add(container_2);

        // itemRarity
        const itemRarity = scene.add.sprite(42, 84, "voyager2", "lang_legendary_en");
        itemRarity.scaleX = 0.7;
        itemRarity.scaleY = 0.7;
        container_2.add(itemRarity);

        // close_btn
        const close_btn = scene.add.image(1358.999984741211, 24, "voyager", "close_btn");
        shopUI.add(close_btn);

        // shops_details
        const shops_details = scene.add.container(459, 615);
        shopUI.add(shops_details);

        // arrow
        const arrow = scene.add.image(412, 82, "voyager", "arrow");
        arrow.angle = 90;
        shops_details.add(arrow);

        // arrow_1
        const arrow_1 = scene.add.image(0, 82, "voyager", "arrow");
        arrow_1.angle = 90;
        arrow_1.flipY = true;
        shops_details.add(arrow_1);

        // item_banner
        const item_banner = scene.add.image(206, -4, "voyager2", "item_banner");
        shops_details.add(item_banner);

        // item_banner_1
        const item_banner_1 = scene.add.image(206, -4, "voyager2", "item_banner");
        shops_details.add(item_banner_1);

        // exchange_button
        const exchange_button = scene.add.image(207, 82, "voyager2", "exchange_button");
        shops_details.add(exchange_button);

        // itemName
        const itemName = scene.add.text(211, -7, "", {});
        itemName.setOrigin(0.5, 0.5);
        itemName.text = "Really Long Item Name";
        itemName.setStyle({ "align": "center", "fixedWidth":723,"fontFamily": "Burbank Small", "fontSize": "36px", "fontStyle": "bold", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.fill":true});
        shops_details.add(itemName);

        // itemName_1
        const itemName_1 = scene.add.text(209, 79, "", {});
        itemName_1.setOrigin(0.5, 0.5);
        itemName_1.visible = false;
        itemName_1.text = "Exchange";
        itemName_1.setStyle({ "align": "center", "color": "#966308", "fontFamily": "Burbank Small", "fontSize": "36px", "fontStyle": "bold", "shadow.offsetX":1,"shadow.offsetY":1,"shadow.color": "#FBE9C8", "shadow.fill":true});
        itemName_1.setPadding({"left":5,"top":5,"right":5,"bottom":5});
        shops_details.add(itemName_1);

        // itemCost
        const itemCost = scene.add.text(184, 79, "", {});
        itemCost.setOrigin(0, 0.5);
        itemCost.text = "999";
        itemCost.setStyle({ "color": "#FFF", "fontFamily": "Burbank Small", "fontSize": "48px", "fontStyle": "bold", "stroke": "#330000", "shadow.offsetX":4,"shadow.offsetY":3,"shadow.color": "#400404ff", "shadow.stroke":true,"shadow.fill":true});
        itemCost.setPadding({"left":5,"right":5});
        shops_details.add(itemCost);

        // gem_icon_1
        const gem_icon_1 = scene.add.image(148, 80, "voyager", "gem_icon");
        gem_icon_1.scaleX = 0.9;
        gem_icon_1.scaleY = 0.9;
        shops_details.add(gem_icon_1);

        // reroll_container
        const reroll_container = scene.add.container(97, 842.8827590942383);
        shopUI.add(reroll_container);

        // reroll_button
        const reroll_button = scene.add.image(79.81651306152344, 0, "voyager2", "reroll_button");
        reroll_button.flipX = true;
        reroll_container.add(reroll_button);

        // itemCost_1
        const itemCost_1 = scene.add.text(32, 18.11724853515625, "", {});
        itemCost_1.setOrigin(0, 0.5);
        itemCost_1.text = "Reroll";
        itemCost_1.setStyle({ "color": "#FFF", "fontFamily": "Burbank Small", "fontSize": "48px", "fontStyle": "bold", "stroke": "#5E2C1D", "shadow.offsetX":4,"shadow.offsetY":3,"shadow.color": "#5E2C1D", "shadow.stroke":true,"shadow.fill":true});
        itemCost_1.setPadding({"left":5,"right":5});
        reroll_container.add(itemCost_1);

        // rerollBtnIcon
        const rerollBtnIcon = scene.add.sprite(0, 16.11724853515625, "voyager", "spinner");
        rerollBtnIcon.scaleX = 0.65;
        rerollBtnIcon.scaleY = 0.65;
        reroll_container.add(rerollBtnIcon);

        // shop_gems
        const shop_gems = scene.add.container(1101.999984741211, 833);
        shopUI.add(shop_gems);

        // gem_bg_1
        const gem_bg_1 = scene.add.image(79, 25, "voyager2", "gem_bg");
        gem_bg_1.alpha = 0.5;
        gem_bg_1.alphaTopLeft = 0.5;
        gem_bg_1.alphaTopRight = 0.5;
        gem_bg_1.alphaBottomLeft = 0.5;
        gem_bg_1.alphaBottomRight = 0.5;
        shop_gems.add(gem_bg_1);

        // gem_bg
        const gem_bg = scene.add.image(79, 25, "voyager2", "gem_bg");
        shop_gems.add(gem_bg);

        // gem_icon
        const gem_icon = scene.add.image(0, 29, "voyager", "gem_icon");
        gem_icon.angle = -10;
        shop_gems.add(gem_icon);

        // gemsAvailable
        const gemsAvailable = scene.add.text(47, 19, "", {});
        gemsAvailable.text = "999,999";
        gemsAvailable.setStyle({ "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":7,"shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#000000ff", "shadow.stroke":true,"shadow.fill":true});
        gemsAvailable.setPadding({"right":5});
        shop_gems.add(gemsAvailable);

        // gemsAvailable_1
        const gemsAvailable_1 = scene.add.text(50, 0, "", {});
        gemsAvailable_1.text = "Your Gems:";
        gemsAvailable_1.setStyle({ "fontFamily": "Burbank Small", "fontSize": "22px" });
        shop_gems.add(gemsAvailable_1);

        // spinner
        const spinner = scene.add.image(760.1834716796875, 480.11724853515625, "voyager", "spinner");
        this.add(spinner);

        // carousel_vignette
        const carousel_vignette = scene.add.sprite(0, -13, "voyager2", "carousel_vignette");
        carousel_vignette.scaleY = 1.1;
        carousel_vignette.setOrigin(0, 0);
        carousel_vignette.visible = false;
        carousel_vignette.alpha = 0.6;
        carousel_vignette.alphaTopLeft = 0.6;
        carousel_vignette.alphaTopRight = 0.6;
        carousel_vignette.alphaBottomLeft = 0.6;
        carousel_vignette.alphaBottomRight = 0.6;
        this.add(carousel_vignette);

        // lists
        const carouselNodes = [pos1, pos2, pos3, pos4, pos5];

        // block (components)
        new Interactive(block);

        // carousel (prefab fields)
        carousel.positions = carouselNodes;

        // close_btn (components)
        const close_btnButton = new Button(close_btn);
        close_btnButton.spriteName = "close_btn";
        close_btnButton.callback = () => this.close();
        close_btnButton.activeFrame = true;

        // arrow (components)
        const arrowButton = new Button(arrow);
        arrowButton.callback = () => this.next();
        arrowButton.activeFrame = true;

        // arrow_1 (components)
        const arrow_1Button = new Button(arrow_1);
        arrow_1Button.callback = () => this.prev();
        arrow_1Button.activeFrame = true;

        // exchange_button (components)
        const exchange_buttonButton = new Button(exchange_button);
        exchange_buttonButton.spriteName = "exchange_button";
        exchange_buttonButton.callback = () => this.buyItem();
        exchange_buttonButton.activeFrame = true;

        // reroll_button (components)
        const reroll_buttonButton = new Button(reroll_button);
        reroll_buttonButton.spriteName = "reroll_button";
        reroll_buttonButton.callback = () => this.getRerolledItem();
        reroll_buttonButton.activeFrame = true;

        this.carousel = carousel;
        this.pengiquins = pengiquins;
        this.gemshop_fg_right = gemshop_fg_right;
        this.gemshop_fg_left = gemshop_fg_left;
        this.shop_vignette = shop_vignette;
        this.pageNum = pageNum;
        this.itemRarityOLD = itemRarityOLD;
        this.itemRarity = itemRarity;
        this.price = price;
        this.itemName = itemName;
        this.itemName_1 = itemName_1;
        this.itemCost = itemCost;
        this.shops_details = shops_details;
        this.itemCost_1 = itemCost_1;
        this.rerollBtnIcon = rerollBtnIcon;
        this.reroll_container = reroll_container;
        this.gemsAvailable = gemsAvailable;
        this.gemsAvailable_1 = gemsAvailable_1;
        this.shop_gems = shop_gems;
        this.shopUI = shopUI;
        this.spinner = spinner;
        this.carousel_vignette = carousel_vignette;
        this.carouselNodes = carouselNodes;

        /* START-USER-CTR-CODE */
        this.gems = 0;
        this.rerolls = 0;
        this.gemPacks = [];
        this.dolls = [];
        this.previewItems = [];
        this.rolledItems = [];
        this.idToItem = {};

        this.isRerolling = false;
        this.pageFlipDuration = 250;

        this.shufflePosY = this.carouselNodes[1].getWorldTransformMatrix().getY(0, 0);
        this.paginationPosY = this.carouselNodes[2].getWorldTransformMatrix().getY(0, 0);

        this.shopUI.visible = false;
        this.carouselNodes.forEach(n => n.visible = false);
        this._addSpinnerTween(this.spinner);
        this.gemshop_fg_left.setDepth(800);
        this.gemshop_fg_right.setDepth(800);
        this.shopUI.setDepth(1000);
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    show() {
        if (this.world.client.hasViewedInteraction('voyager_intro')) {
            this.world.interface.loadWidget('CrimsonDialogue', false, 8);
        } else {
            this.world.interface.loadWidget('CrimsonDialogue', false, 1);
        }

        this.getGemPacks();
        this.world.interface.loadedWidgets['CrimsonDialogue']?.setDepth(1);
        this.spinner.visible = false;

        this.carousel_vignette.setDepth(9999)
    }

    close() {
        this.interface.prompt.item.useGems = false;

        clearInterval(this.itemShuffleIntervalID);
        this.itemShuffleIntervalID = -1;

        this.carousel.close();
        super.close();
    }

    showShop() {
        this.interface.prompt.item.useGems = true;

        this.spinner.visible = true;
        this.setGems(this.world.client.gems || 0);
        this.getVoyagerItems();
    }

    showShopUI() {
        this.shopUI.visible = true;
        this.carousel_vignette.visible = false;

        const tweens = [
            {
                targets: this.price,
                angle: { from: -20, to: 0 },
                y: { from: -297, to: 111 },
                duration: 400,
                ease: 'Quadratic'
            },
            {
                targets: this.shops_details,
                alpha: { from: 0, to: 1 },
                duration: 800,
                ease: 'ease'
            },
            {
                targets: this.shop_vignette,
                alpha: { from: 0, to: 0.7 },
                duration: 900,
                ease: 'ease'
            },
            {
                targets: this.shop_gems,
                y: { from: 921, to: 833 },
                duration: 300,
                ease: 'Quadratic'
            }
        ];

        tweens.forEach(tween => this.scene.tweens.add(tween));
    }

    next() {
        this.carousel.next({duration: this.pageFlipDuration, onComplete: () => this._onPagination()});
    }

    prev() {
        this.carousel.prev({duration: this.pageFlipDuration, onComplete: () => this._onPagination()});
    }

    setGems(gems) {
        this.gems = gems;
        this.gemsAvailable.text = this.gems;
    }

    setRerolls(rerolls) {
        this.rerolls = rerolls;

        if (rerolls > 0) {
            // If the user has rerolls, run the animation
            this.scene.tweens.add({
                targets: this.reroll_container,
                angle: { from: 55, to: 0 },
                y: { from: 981, to: 842 },
                duration: 400,
                ease: 'Quadratic'
            });
        } else {
            // If the user has 0 rerolls, hide the container
            this.reroll_container.visible = false;
        }
    }

    buyItem() {
        const doll = this.carousel.getMiddleTarget();
        const item = doll.item;

        if (!item) return;

        item.gems = 1;
        this.interface.prompt.item.showItem(item.item, 0, item);
    }

    updateItemDetails() {
        const doll = this.carousel.getMiddleTarget();
        const item = doll.item;

        if (!item) return;

        this.itemRarity.text = item.rarity.toUpperCase();
        this.itemName.text = item.name;
        this.itemCost.text = item.gem_cost;
        this.pageNum.text = (this.carousel.currPage + 1) + '/' + this.dolls.length;

        switch (item.rarity.toLowerCase()) {
            case 'common':
                this.itemRarity.setFrame("lang_common_en");
                break;
            case 'uncommon':
                this.itemRarity.setFrame("lang_uncommon_en");
                break;
            case 'rare':
                this.itemRarity.setFrame("lang_rare_en");
                break;
            case 'legendary':
                this.itemRarity.setFrame("lang_legendary_en");
                break;
        }
    }

    updateDolls(items) {
        if (!this.dolls.length) {    
            this._initDolls(items.length);
        }

        this.dolls.forEach((doll, i) => {
            doll.visible = true;
            this._setDollItem(doll, items[i]);
        });

        this.updateItemDetails();
    }

    getGemPacks() {
        this.network.send('voyager_packs');
    }

    setGemPacks(gemPacks) {
        this.gemPacks = gemPacks;
    }

    buyGemPack(packNumber) {
        const pack = this.gemPacks[packNumber - 1];

        this.interface.prompt.showQuestion(
            `Would you like to buy ${pack.gems} gems for ${pack.cost} coins?`, 
            () => {
                this.network.send('voyager_buy_pack', { packNumber });
            },
        );
    }

    getVoyagerPreview() {
        this.scene.tweens.add({
            targets: this.shopUI.visible = false,
            alpha: { from: 1, to: 0 },
            duration: 500,
            ease: 'ease',
            onComplete: () => {
                this.shopUI.visible = false;
                this.shopUI.alpha = 1;
        }
        })
        this.network.send('voyager_preview');
    }

    setVoyagerPreview(items) {
        this.previewItems = [...this.previewItems, ...items];

        if (this.isShufflePreview) {
            this.carousel.positionProps = this.carouselNodes.map( () => ({scale: 0.6, y: this.shufflePosY}) );
            this.updateDolls(items);
            this.spinner.visible = false;

            this.carousel.shuffle();
            this.startRandomizingItems();

            this.isShufflePreview = false;
        } else {
            this.carousel_vignette.visible = true;
            this.scene.tweens.add({
                targets: this.carousel_vignette,
                alpha: { from: 0, to: 0.6 },
                duration: 800,
                ease: 'ease'
            });
        }
    }

    rollItems() {
        if (this.isRerolling) return;

        this.isRerolling = true;
        this.isShufflePreview = true;
        this.getVoyagerPreview();

        this.network.send('voyager_roll');
    }

    getRerolledItem() {
        if (!this.rerolls && this.rolledItems.length) {
            this.interface.prompt.showError('You do not have any rerolls left');
            return;
        }

        if (this.isRerolling) return;

        this.interface.prompt.showWindow('Are you sure you want to reroll this item?\nYou might not get it again.', 'dual', () => {
            this.interface.prompt.window.visible = false
            const doll = this.carousel.getMiddleTarget();
            const replacedItemID = doll.item.item;

            if (!replacedItemID) return;

            this.isRerolling = true;
            this.getVoyagerPreview();
            this.startRandomizingItems([doll]);
            this.shopUI.visible = false;

            this.network.send('voyager_reroll', {item: replacedItemID});
        });
    }

    setRerolledItem(rerolledItem, replacedItem, rerolls) {
        const replacedItemIndex = this.rolledItems.findIndex(item => item.item === replacedItem);

        this.previewItems.push(rerolledItem);
        this.rolledItems[replacedItemIndex] = rerolledItem;
        this.setRerolls(rerolls);

        setTimeout(() => {
            this.showShopUI();
            this.isRerolling = false;
            this.stopRandomizingItems();
            this.updateDolls(this.rolledItems);
        }, 5000);
    }

    getVoyagerItems() {
        this.network.send('voyager_items');
    }

    setVoyagerItems(items, rolls) {
        if (!items?.length) {
            this.rollItems();
            return;
        }

        this.spinner.visible = false;
        this.previewItems = [...new Set([...this.previewItems, ...items])];
        this.setRerolls(rolls);
        this.rolledItems = items;

        setTimeout(() => {
            this.stopRandomizingItems();
            this.carousel.positionProps = this.carouselNodes.map((_, i) => (
                i === 2 ? {scale: 1, y: this.paginationPosY} : {scale: 0.6}
            ));
            this.updateDolls(items);
        }, this.isRerolling ? 4000 : 0);

        setTimeout(() => {
            this.carousel.stopShuffle(0, () => {
                this.isRerolling = false;
                this.showShopUI()
                this.updateItemDetails();
            });

        }, this.isRerolling ? 5000 : 0);
    }

    startRandomizingItems(targetDolls = []) {
        targetDolls = targetDolls.length ? targetDolls : this.dolls;

        this.randomizeItemsIntervalID = setInterval(() => {
            targetDolls.forEach(doll => {
                const randomItemIndex = Math.floor(Math.random() * this.previewItems.length) % this.previewItems.length;
                this._setDollItem(doll, this.previewItems[randomItemIndex]);
            });
        }, 250);
    }

    stopRandomizingItems() {
        clearInterval(this.randomizeItemsIntervalID);
        this.randomizeItemsIntervalID = -1;
    }

    // ========================== HELPER FUNCTIONS

    _initDolls(dollCount) {
        for (let i = 0; i < dollCount; i++) {
            const doll = new PengiquinDoll(this.scene);
            this.pengiquins.add(doll);
            doll.visible = false;
            this.add(doll);
            this.dolls.push(doll);
        }

        this.carousel.targets = this.dolls;
        this.carousel.init();
    }

    _onPagination() {
        this.updateItemDetails();
        this.pengiquins.sort('scale');
    }

    /**
     * 
     * @param {PengiquinDoll} doll 
     * @param {{slot: string, item: number, type: number, name: string, rarity: string}} item
     */
    _setDollItem(doll, item) {
        doll.setItem(item);
    }

    _addSpinnerTween(spinnerObj) {
        this.scene.tweens.add({
            targets: spinnerObj,
            duration: 750,
            ease: "Linear",

            angle: 180,
            repeat: -1,
        });
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */