import BaseLoader from './BaseLoader'


export default class GridViewLoader extends BaseLoader {

    constructor(scene, gridView) {
        super(scene)

        this.gridView = gridView

        this.filter
        this.page
    }

    get baseURL() {
		if(this.filter == 'igloo') {
			return (process.env.NODE_ENV === 'development') ? '/assets/media/igloos/buildings/icon/' : CDN_URL + "assets/media/igloos/buildings/icon/"
		} else if(this.filter == 'location') {
			return (process.env.NODE_ENV === 'development') ? '/assets/media/igloos/locations/icon/' : CDN_URL + "assets/media/igloos/locations/icon/"
		} else if (this.filter == 'flooring') {
            return (process.env.NODE_ENV === 'development') ? '/assets/media/igloos/flooring/icon/' : CDN_URL + "assets/media/igloos/flooring/icon/"
        } else {
			return (process.env.NODE_ENV === 'development') ? '/assets/media/furniture/icon/' : CDN_URL + "assets/media/furniture/icon/"
		}
    }

    get keyPrefix() {
        if (this.filter == 'igloo') {
            return 'igloos/icon/'
        } else if (this.filter == 'location') {
            return 'locations/icon/'
        } else if (this.filter == 'flooring') {
            return 'flooring/icon/'
        } else {
            return 'furniture/icon/'
        }
    }

    get slots() {
        return this.gridView.slots
    }

    loadPage(filter, page) {
        this.filter = filter
        this.page = page

        let scale = (this.slots.length > 100) ? '@2.5x/' : '@5x/'

        for (let [index, slot] of this.slots.entries()) {
            slot.filter = filter

            if (slot.item) {
                slot.item.destroy()
            }

            if (slot.spinner) {
                slot.spinner.destroy()
            }

            if (slot.quantity) {
                slot.quantity.visible = false
            }

            let item = page[index]

            if (item !== null && item !== undefined) {
                slot.setInteractive()
                slot.visible = true
                this.addSpinner(slot, scale)
                this.loadItem(item, scale)

            } else {
                slot.disableInteractive()
                slot.visible = false
                slot.clearItem()
            }
        }

        this.start()
    }

    addSpinner(slot, scale) {
        let spinner = this.scene.add.image(slot.x, slot.y, 'main', 'spinner')
        spinner.scale = (scale == '@5x/') ? 1 : 2
        slot.addSpinner(spinner)

        this.scene.tweens.add({
            targets: spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        slot.spinner = spinner
    }

    loadItem(item, scale) {
        if (typeof item == "object") {
            item = item.id
        }
        let key = this.getKey(scale, item)

        // Ignore scale on igloo icon url
        let url = (this.filter == 'igloo' || this.filter == 'location' || this.filter == 'flooring')
            ? `${item}.png`
            : `${scale}${item}.png`

        if (this.checkComplete('image', key, () => {
            this.onFileComplete(key, item)
        })) {
            return
        }

        this.image(key, url)
    }

    onFileComplete(key, item) {
        if (!this.gridView.visible || !this.textureExists(key)) {
            return;
        }
    
        let index = null;
    
        if (typeof this.page === 'object' && typeof this.page[0] !== "number" && typeof this.page[0] !== "string") {
            let itemId = item
            index = Object.values(this.page).findIndex(obj => obj.id === itemId);
    
            if (index === -1) {
                console.error(`Item with id ${item} not found in current page.`);
                return;
            }
        } else if (Array.isArray(this.page)) {
            index = this.page.indexOf(item);
        } else {
            console.error("Unexpected type for this.page.");
            return;
        }
    
        let slot = this.slots[index];
    
        if (slot.spinner) {
            slot.spinner.destroy();
        }
    
        if (slot && slot.visible) {
            slot.addIcon(key, item);
        }
    }

    onLoadError(file) {
        super.onLoadError(file)

        if (!this.gridView.visible) {
            return
        }

        let item = this.getKeyId(file.key)
        let index = this.page.indexOf(item)
        let slot = this.slots[index]

        if (slot && slot.visible) {
            slot.addError(item)
        }
    }

}
