import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton, Interactive } from '@components/components'

import MusicItem from './music_item/MusicItem'

import MusicStoreItem from './music_item/MusicStoreItem'


/* START OF COMPILED CODE */

export default class IglooMusic extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.music_inventory_selected;
        /** @type {Phaser.GameObjects.Image} */
        this.music_store_selected;
        /** @type {Phaser.GameObjects.Image} */
        this.upArrow;
        /** @type {Phaser.GameObjects.Image} */
        this.downArrow;
        /** @type {Phaser.GameObjects.Image} */
        this.my_music_txt;
        /** @type {Phaser.GameObjects.Image} */
        this.music_store_text_1;
        /** @type {Phaser.GameObjects.Image} */
        this.seasonal;
        /** @type {Phaser.GameObjects.Container} */
        this.store_text;
        /** @type {Phaser.GameObjects.Text} */
        this.inv_text;
        /** @type {Phaser.GameObjects.Text} */
        this.mstore_text;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.inv_rect;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.store_rect;
        /** @type {Array<any>} */
        this.title_name;
        /** @type {Array<any>} */
        this.music_inventory;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // music_inventory_selected
        const music_inventory_selected = scene.add.image(0, 0, "new-iglooedit", "music_store_selected");
        this.add(music_inventory_selected);

        // music_store_selected
        const music_store_selected = scene.add.image(0, 0, "new-iglooedit", "music_inventory_selected");
        music_store_selected.visible = false;
        this.add(music_store_selected);

        // upArrow
        const upArrow = scene.add.image(482, -214, "new-iglooedit", "store_up");
        this.add(upArrow);

        // downArrow
        const downArrow = scene.add.image(482, 337, "new-iglooedit", "store_up");
        downArrow.flipY = true;
        this.add(downArrow);

        // blueButton
        const blueButton = scene.add.image(482, -285, "new-iglooedit", "store_x");
        this.add(blueButton);

        // my_music_txt
        const my_music_txt = scene.add.image(-302, -278, "new-iglooedit", "music_txt_here.png");
        this.add(my_music_txt);

        // store_text
        const store_text = scene.add.container(-760, -480);
        store_text.visible = false;
        this.add(store_text);

        // music_store_text_1
        const music_store_text_1 = scene.add.image(547, 202, "new-iglooedit", "music_store_text");
        store_text.add(music_store_text_1);

        // text_1
        const text_1 = scene.add.text(1028, 202, "", {});
        text_1.setOrigin(0.5, 0.5);
        text_1.text = "All Igloo Music costs 100 ";
        text_1.setStyle({ "color": "#3D82C4", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        store_text.add(text_1);

        // text
        const text = scene.add.text(273, 220, "", {});
        text.text = "Click the Play Icon to Preview!";
        text.setStyle({ "color": "#3D82C4", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
        store_text.add(text);

        // store_coin
        const store_coin = scene.add.image(1182, 202, "new-iglooedit", "store_coin");
        store_coin.scaleX = 0.25;
        store_coin.scaleY = 0.25;
        store_text.add(store_coin);

        // seasonal
        const seasonal = scene.add.image(722, 202, "new-iglooedit", "seasonal");
        seasonal.scaleX = 0.8;
        seasonal.scaleY = 0.8;
        store_text.add(seasonal);

        // inv_text
        const inv_text = scene.add.text(-475, -407, "", {});
        inv_text.text = "Music Inventory";
        inv_text.setStyle({ "color": "#3D82C4", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        this.add(inv_text);

        // mstore_text
        const mstore_text = scene.add.text(-91, -407, "", {});
        mstore_text.text = "Music Store";
        mstore_text.setStyle({ "color": "#3D82C4", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        this.add(mstore_text);

        // inv_rect
        const inv_rect = scene.add.rectangle(-364, -386, 325, 70);
        this.add(inv_rect);

        // store_rect
        const store_rect = scene.add.rectangle(-15, -388, 325, 70);
        this.add(store_rect);

        // lists
        const title_name = [];
        const music_inventory = [];

        // block (components)
        new Interactive(block);

        // blueButton (components)
        const blueButtonButton = new Button(blueButton);
        blueButtonButton.spriteName = "store_x";
        blueButtonButton.callback = () => this.onMusicClose();;
        blueButtonButton.activeFrame = true;

        // seasonal (components)
        const seasonalSimpleButton = new SimpleButton(seasonal);
        seasonalSimpleButton.callback = () => {this.toggleSeasonalFilter()};

        // inv_rect (components)
        const inv_rectSimpleButton = new SimpleButton(inv_rect);
        inv_rectSimpleButton.callback = () => {this.onMusicTab("inventory")};

        // store_rect (components)
        const store_rectSimpleButton = new SimpleButton(store_rect);
        store_rectSimpleButton.callback = () => {this.onMusicTab("store")};

        this.music_inventory_selected = music_inventory_selected;
        this.music_store_selected = music_store_selected;
        this.upArrow = upArrow;
        this.downArrow = downArrow;
        this.my_music_txt = my_music_txt;
        this.music_store_text_1 = music_store_text_1;
        this.seasonal = seasonal;
        this.store_text = store_text;
        this.inv_text = inv_text;
        this.mstore_text = mstore_text;
        this.inv_rect = inv_rect;
        this.store_rect = store_rect;
        this.title_name = title_name;
        this.music_inventory = music_inventory;

        /* START-USER-CTR-CODE */
        this.currentPage = 0;
        this.itemsPerPage = 33; // 3 rows by 11 columns
        this.totalPages = Math.ceil(this.world.client.music.length / this.itemsPerPage);

        // Create arrow buttons and set their callbacks
        this.createArrowButtons();

        // Show the first page of music items
        if(this.world.client.rank >= 10) {
            return//setTimeout(this.showCurrentPage(),8000) //TO-DO: find a proper fix for this
        } else {
            this.showCurrentPage();
        }

        this.storeMusicData = [];

        let lastScrollTime = 0;
        const scrollTimeout = 50; 

        window.addEventListener('wheel', (event) => {
            const now = Date.now();
            if ((now - lastScrollTime > scrollTimeout) && this.visible) {
              lastScrollTime = now;
              if (event.deltaY < 0) {
                this.showPreviousPage();
              } else if (event.deltaY > 0) {
                this.showNextPage();
              }
            }
          });
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    onMusicTab(type) {
        if (type === 'inventory') {
            // Set the inventory as the current context
            if (this.world.room.musicPreview) {
                this.world.room.updateMusic(this.world.room.music);
                this.world.room.musicPreview = false;
            }
            this.currentContext = 'inventory';
            this.world.interface.iglooEdit.coins.visible = false;
            this.showCurrentPage();
            this.setActiveMusicItem(this.world.room.music);
            this.music_inventory_selected.visible = true;
            this.music_store_selected.visible = false;
            this.store_text.visible = false;
            this.my_music_txt.visible = true;
            // Set the total pages for inventory
            this.totalPages = Math.ceil(this.world.client.music.length / this.itemsPerPage);
        } else if (type === 'store') {
            // Set the store as the current context
            this.currentContext = 'store';
            this.world.interface.iglooEdit.coins.x = 1285;
            this.world.interface.iglooEdit.coins.y = 910;
            this.world.interface.iglooEdit.coins.visible = true;
            this.world.interface.iglooEdit.coins.depth = 10001;
            this.store_text.visible = true;
            this.my_music_txt.visible = false;
            this.music_inventory.forEach(item => item.destroy());
            this.music_inventory = [];
            this.music_inventory_selected.visible = false;
            this.music_store_selected.visible = true;
            this.network.send('get_store_music');
        }
        // Reset to the first page
        this.currentPage = 0;
        // Update the visibility of the arrows
        this.updateArrowVisibility();
    }

    onMusicClose() {
        this.visible = false
        this.world.interface.iglooEdit.coins.x = 1309;
        this.world.interface.iglooEdit.coins.y = 838;
        this.world.interface.iglooEdit.coins.visible = false;
        this.seasonal.setFrame('seasonal');
        this.world.interface.iglooEdit.filterInvInput.resize(this.world.interface.iglooEdit.put_input_here_inv.width, this.world.interface.iglooEdit.put_input_here_inv.height);
    }

    onStoreMusicReceived(data) {
        // Store the received data for pagination
        this.storeMusicData = data.filter(musicInfo => musicInfo.store);

        this.displaySeasonalOnly = false;

        this.refreshStoreDisplay();
    }

    refreshStoreDisplay() {
        const filteredData = this.displaySeasonalOnly
            ? this.storeMusicData.filter(item => item.seasonal === 1)
            : this.storeMusicData;

        // Update total pages based on the filtered data
        this.totalPages = Math.ceil(filteredData.length / this.itemsPerPage);

        // Reset to the first page for the refreshed display
        this.currentPage = 0;

        // Update the display
        this.showCurrentPage(filteredData);
    }

    setActiveMusicItem(activeMusicId) {
        this.music_inventory.forEach(musicItem => {
            if (musicItem.musicId == activeMusicId) {
                musicItem.setActive(true);
            } else {
                musicItem.setActive(false);
            }
        });
    }

    toggleSeasonalFilter() {
        this.displaySeasonalOnly = !this.displaySeasonalOnly;
        if (this.displaySeasonalOnly) {
            this.seasonal.setFrame('seasonal-active');
        } else {
            this.seasonal.setFrame('seasonal');
        }
        this.refreshStoreDisplay();
    }

    showCurrentPage(dataToDisplay=null) {
        // Clear the previous music items, if any
        this.music_inventory.forEach(item => item.destroy());
        this.music_inventory = [];

        // Constants for the grid layout
        const itemsPerRow = 3;
        const columnWidth = 300;
        const rowHeight = 35;
        const padding = 20; // space between cells

        // start positions hehewhowho
        const startX = -340;
        const startY = -211;

        // Determine the data to display based on the current context store or inventory
        if (!dataToDisplay) {
            dataToDisplay = this.currentContext === 'store'
                ? (this.displaySeasonalOnly ? this.storeMusicData.filter(item => item.seasonal === 1) : this.storeMusicData)
                : this.world.client.music.map(id => ({ ...this.world.crumbs.igloo_music[id], id }));
        }

        // Calculate the range of items to show for the current page
        const startIndex = this.currentPage * this.itemsPerPage;
        const endIndex = Math.min(startIndex + this.itemsPerPage, dataToDisplay.length);

        for (let i = startIndex; i < endIndex; i++) {
            const musicData = dataToDisplay[i];

            if (musicData) {
                // Calculate the column index and row index
                const columnIndex = (i - startIndex) % itemsPerRow;
                const rowIndex = Math.floor((i - startIndex) / itemsPerRow);

                // Calculate the actual x and y coordinates with mathematics hehewhowho
                const x = startX + columnIndex * (columnWidth + padding);
                const y = startY + rowIndex * (rowHeight + padding);

                // Create the appropriate MusicItem or MusicStoreItem based on the context
                const musicItem = this.currentContext === 'store' 
                    ? new MusicStoreItem(this.scene, x, y, musicData) 
                    : new MusicItem(this.scene, x, y, musicData);

                if (this.currentContext === 'store') musicItem.newIcon.visible = musicData.new === 1;

                // Add the item to the music_inventory array for reference
                this.music_inventory.push(musicItem);

                // Add the item to the container for display
                this.add(musicItem);
            }
        }

        // Update arrow button visibility
        this.updateArrowVisibility();
    }

    createArrowButtons() {
        // Create the up arrow button
        this.upArrow.setInteractive({cursor: 'pointer'});
        this.upArrow.on('pointerdown', this.showPreviousPage, this);

        // Create the down arrow button
        this.downArrow.setInteractive({cursor: 'pointer'});
        this.downArrow.on('pointerdown', this.showNextPage, this);

        // Add to the container
        this.add(this.upArrow);
        this.add(this.downArrow);

        // Initially set visibility based on the current page
        this.upArrow.visible = this.currentPage > 0;
        this.downArrow.visible = this.currentPage < this.totalPages - 1;
    }

    updateArrowVisibility() {
        // Update arrow button visibility based on the current page and total pages
        this.upArrow.visible = this.currentPage > 0;
        this.downArrow.visible = this.currentPage < this.totalPages - 1;
    }

    showNextPage() {
        if (this.currentPage < this.totalPages - 1) {
            this.currentPage++;
            this.showCurrentPage();
            this.updateArrowVisibility();
        }
    }

    showPreviousPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.showCurrentPage();
            this.updateArrowVisibility();
        }
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
