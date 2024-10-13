import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive } from '@components/components'

import GridViewLoader from '@engine/loaders/GridViewLoader'
import GridViewSlot from './gridview_slot/StoreGridViewSlot'


/* START OF COMPILED CODE */

export default class StoreGridView extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.block;
        /** @type {Phaser.GameObjects.Container} */
        this.container;
        /** @type {Phaser.GameObjects.Image} */
        this.down_button;
        /** @type {Phaser.GameObjects.Image} */
        this.up_button;
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
        const pageButtons = scene.add.container(747, -14);
        pageButtons.visible = false;
        this.add(pageButtons);

        // down_button
        const down_button = scene.add.image(150, 588, "new-iglooedit", "store_up");
        down_button.scaleX = 0.9;
        down_button.scaleY = 0.9;
        down_button.angle = 180;
        pageButtons.add(down_button);

        // up_button
        const up_button = scene.add.image(150, 82, "new-iglooedit", "store_up");
        up_button.scaleX = 0.9;
        up_button.scaleY = 0.9;
        pageButtons.add(up_button);

        // down_button (components)
        const down_buttonButton = new Button(down_button);
        down_buttonButton.spriteName = "store_up";
        down_buttonButton.callback = () => this.nextPage();
        down_buttonButton.activeFrame = true;

        // up_button (components)
        const up_buttonButton = new Button(up_button);
        up_buttonButton.spriteName = "store_up";
        up_buttonButton.callback = () => this.prevPage();
        up_buttonButton.activeFrame = true;

        this.block = block;
        this.container = container;
        this.down_button = down_button;
        this.up_button = up_button;
        this.pageButtons = pageButtons;

        /* START-USER-CTR-CODE */

        this._furnitureItems = [];
        this._iglooItems = [];
        this._flooringItems = [];
        this._locationItems = [];

        this.scene = scene

        this.maxW = 1250
        this.maxH = 770
        this.cellSize = 418
        this.pad = 125
        this.offsetY = 30
        this.slots

        this.page = 1
        this.filter
        this.lastSize

        this.loader = new GridViewLoader(scene, this)

        // block.on('pointerup', () => this.visible = false)

        let lastScrollTime = 0
        let scrollTimeout = 50
        		
		window.addEventListener('wheel', (event) => {
            const now = Date.now();
            if ((now - lastScrollTime > scrollTimeout) && this.visible) {
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
        let filteredItems = [];
    
        // First level of filtering based on the main category
        switch (this.filter) {
            case 'furniture':
                filteredItems = this._furnitureItems;
                break;
            case 'igloo':
                filteredItems = this._iglooItems;
                break;
            case 'flooring':
                filteredItems = this._flooringItems;
                break;
            case 'location':
                filteredItems = this._locationItems;
                break;
            case 'floor':
                filteredItems = this._furnitureItems.filter(item => item.type === 1);
                break;
            case 'wall':
                filteredItems = this._furnitureItems.filter(item => item.type === 2);
                break;
            case 'all':
                filteredItems = this._furnitureItems;
                break;
            default:
                return [];
        }

        if (this.textFilter) {
            filteredItems = filteredItems.filter(item => item.name.toLowerCase().includes(this.textFilter.toLowerCase()));
        }
    
        if (this.subfilter === 'evergreen') {
            return filteredItems.filter(item => item.seasonal === 0);
        } else if (this.subfilter === 'seasonal') {
            return filteredItems.filter(item => item.seasonal === 1);
        } else {
            return filteredItems;
        }
    }

    get pageSize() {
        return 20
    }

    get maxPage() {
        return Math.ceil(this.items.length / this.pageSize)
    }

    get maxPageSize() {
        return 20
    }

    handleItems(args) {
        this._furnitureItems = args.furniture;
        this._iglooItems = args.igloo;
        this._flooringItems = args.flooring;
        this._locationItems = args.location;
        this.world.crumbs.igloo_store_data = args;
        this.startGrid('furniture');
    }

    startGrid(filter, subfilter=null, textFilter = null) {
        this.filter = filter
        this.subfilter = subfilter
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
            this.up_button.alpha = 0.5
        } else {
            this.up_button.alpha = 1
            this.down_button.alpha = 1
        }

        if (this.page == this.maxPage) {
            this.up_button.alpha = 1
            this.down_button.alpha = 0.5
        } else {
            this.down_button.alpha = 1
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
        let scale = 0.265

        // Centers container
        let remainingW = 1000 - (totalW * scale)
        let remainingH = 960 - (totalH * scale)

        this.container.x = remainingW / 10
        this.container.y = remainingH / 75 - (this.offsetY * scale)
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
        return 5
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
