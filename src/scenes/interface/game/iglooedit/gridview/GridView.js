import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive } from '@components/components'

import GridViewLoader from '@engine/loaders/GridViewLoader'
import GridViewSlot from './gridview_slot/GridViewSlot'


/* START OF COMPILED CODE */

export default class GridView extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.block;
        /** @type {Phaser.GameObjects.Container} */
        this.container;
        /** @type {Phaser.GameObjects.Image} */
        this.down_button;
        /** @type {Phaser.GameObjects.Image} */
        this.grey_arrow_1;
        /** @type {Phaser.GameObjects.Image} */
        this.up_button;
        /** @type {Phaser.GameObjects.Image} */
        this.grey_arrow;
        /** @type {Phaser.GameObjects.Container} */
        this.pageButtons;


        // block
        const block = scene.add.rectangle(903, 392, 128, 128);
        block.visible = false;
        this.add(block);

        // container
        const container = scene.add.container(0, 0);
        this.add(container);

        // pageButtons
        const pageButtons = scene.add.container(1107, 174);
        pageButtons.angle = 90;
        pageButtons.visible = false;
        this.add(pageButtons);

        // down_button
        const down_button = scene.add.image(0, 998, "new-iglooedit", "igloo_x");
        down_button.scaleX = 0.9;
        down_button.scaleY = 0.9;
        pageButtons.add(down_button);

        // grey_arrow_1
        const grey_arrow_1 = scene.add.image(0, 996, "main", "blue-arrow");
        grey_arrow_1.scaleX = 0.9;
        grey_arrow_1.scaleY = 0.9;
        grey_arrow_1.flipY = true;
        pageButtons.add(grey_arrow_1);

        // up_button
        const up_button = scene.add.image(0, -208, "new-iglooedit", "igloo_x");
        up_button.scaleX = 0.9;
        up_button.scaleY = 0.9;
        pageButtons.add(up_button);

        // grey_arrow
        const grey_arrow = scene.add.image(0, -210, "main", "blue-arrow");
        grey_arrow.scaleX = 0.9;
        grey_arrow.scaleY = 0.9;
        pageButtons.add(grey_arrow);

        // down_button (components)
        const down_buttonButton = new Button(down_button);
        down_buttonButton.spriteName = "igloo_x";
        down_buttonButton.callback = () => this.prevPage();

        // up_button (components)
        const up_buttonButton = new Button(up_button);
        up_buttonButton.spriteName = "igloo_x";
        up_buttonButton.callback = () => this.nextPage();

        this.block = block;
        this.container = container;
        this.down_button = down_button;
        this.grey_arrow_1 = grey_arrow_1;
        this.up_button = up_button;
        this.grey_arrow = grey_arrow;
        this.pageButtons = pageButtons;

        /* START-USER-CTR-CODE */

        this.scene = scene

        this.maxW = 1250
        this.maxH = 770
        this.cellSize = 418
        this.pad = 40
        this.offsetY = 30
        this.slots

        this.page = 1
        this.filter
        this.lastSize

        this.loader = new GridViewLoader(scene, this)

        // block.on('pointerup', () => this.visible = false)

        let lastScrollTime = 0;
		const scrollTimeout = 50; 
		
		window.addEventListener('wheel', (event) => {
		  const now = Date.now();
		  if ((now - lastScrollTime > scrollTimeout) && !this.scene.igloo_store.visible && !this.scene.iglooMusic.visible && !this.scene.chooseIgloo.visible) {
			lastScrollTime = now;
			if (event.deltaY < 0) {
			  this.prevPage();
			} else if (event.deltaY > 0) {
			  this.nextPage();
			}
		  }
		});

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get items() {
        let allItems = [];
    
        // Map IDs to full object details based on the current filter
        if (this.filter === 'igloo') {
            allItems = this.world.client.igloos.map(id => ({
                id,
                ...this.world.crumbs.igloos[id]
            }));
        } else if (this.filter === 'location') {
            allItems = this.world.client.locations
                .filter(id => id !== 0)
                .map(id => ({
                    id,
                    ...this.world.crumbs.locations[id]
                }));
        } else if (this.filter === 'flooring') {
            allItems = this.world.client.flooring.map(id => ({
                id,
                ...this.world.crumbs.flooring[id]
            }));
        } else {
            // Handles 'furniture' and other filters; defaults to furniture if filter is unspecified
            allItems = Object.keys(this.world.client.furniture)
                .map(id => parseInt(id))
                .map(id => ({
                    id,
                    ...this.world.crumbs.furniture[id]
                }))
                .filter(item => !this.filter || this.crumbs.furniture[item.id].sort === this.filter);
        }
    
        // Apply text filter if set
        if (this.textFilter) {
            allItems = allItems.filter(item => item.name && item.name.toLowerCase().includes(this.textFilter.toLowerCase()));
        }
    
        // Convert back to just IDs if that's the desired output
        return allItems.map(item => item.id);
    }

    get pageSize() {
        return 12
    }

    get maxPage() {
        return Math.ceil(this.items.length / this.pageSize)
    }

    get maxPageSize() {
        return 12
    }

    startGrid(filter, textFilter=null) {
        this.filter = filter
        this.textFilter = textFilter
        this.page = 1

        if (this.pageSize == this.lastSize) return this.showPage()
        this.lastSize = this.pageSize

        this.container.removeAll(true)
        this.slots = this.createSlots()

        let cols = this.getColumns(this.pageSize)
        let rows = Math.ceil(this.pageSize / cols)

        this.createGrid(cols, rows)

        this.scene.events.once('update', () => {
            this.showPage()
        })
    }

    showPage() {
        if (!this.visible) return

        this.pageButtons.visible = this.pageSize >= this.maxPageSize

        if (this.page == 1) {
            this.down_button.alpha = 0.5
            this.grey_arrow_1.alpha = 0.5
        } else {
            this.down_button.alpha = 1
            this.grey_arrow_1.alpha = 1
        }

        if (this.page == this.maxPage) {
            this.up_button.alpha = 0.5
            this.grey_arrow.alpha = 0.5
        } else {
            this.up_button.alpha = 1
            this.grey_arrow.alpha = 1
        }

        let page = this.items.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)
        this.loader.loadPage(this.filter, page)
    }

    prevPage() {
        let page = this.page - 1
        if (page < 1) return

        this.page = page
        this.showPage()
    }

    nextPage() {
        let page = this.page + 1
        if (page > this.maxPage) return

        this.page = page
        this.showPage()
    }

    createSlots() {
        let slots = []

        for (let i = 0; i < this.pageSize; i++) {
            let slot = new GridViewSlot(this.scene)
            this.container.add(slot)
            slots.push(slot)
        }

        return slots
    }

    createGrid(cols, rows, cellSize = this.cellSize) {
        cellSize += this.pad

        Phaser.Actions.GridAlign(this.slots, {
            width: cols,
            height: rows,
            cellWidth: cellSize,
            cellHeight: cellSize,
            position: Phaser.Display.Align.CENTER,
            x: (cellSize) / 2,
            y: (cellSize) / 4
        })

        let totalW = cellSize * cols
        let totalH = cellSize * rows
        let scale = this.getScale(totalW, totalH)

        // Centers container
        let remainingW = 1520 - (totalW * scale)
        let remainingH = 960 - (totalH * scale)

        this.container.x = remainingW / 8
        this.container.y = remainingH / 50 - (this.offsetY * scale)
        this.container.scale = scale
    }

    updateQuantity(id) {
        let slot = this.slots.find(slot => slot.item?.id == id)

        if (slot) {
            slot.setQuantity(this.world.room.getQuantity(id))
        }
    }

    /**
     * Returns the number of columns for the grid.
     *
     * @param {number} i - Items length
     */
    getColumns(i) {
        return i
    }

    /**
     * Returns the scale for the grid container. Will clamp width/height
     * to a maximum value and return the minimum.
     *
     * @param {number} totalW
     * @param {number} totalH
     */
    getScale(totalW, totalH) {
        let scaleX = 1
        let scaleY = 1

        if (totalW > this.maxW) scaleX = this.maxW / totalW
        if (totalH > this.maxH) scaleY = this.maxH / totalH

        return Math.min(scaleX, scaleY)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
