import { Button } from '@components/components'


export default class GridViewSlot extends Phaser.GameObjects.Sprite {

    constructor(scene) {
        super(scene, 0, 0, 'iglooedit', 'box/box')

        this.world = scene.world
        this.gridView = this.scene.storeGridView

        this.item
        this.quantity
        this.filter

        this.textStyle = {
            fontFamily: 'Burbank Small',
            fontSize: 50,
            fontStyle: 'bold',
            color: '#333333',
            align: 'right',
            fixedWidth: 150
        }

        // Add component
        let component = new Button(this)

        component.spriteName = 'box/box'
        component.callback = () => this.onClick()
        component.hoverCallback = () => this.onHover()
        component.hoverOutCallback = () => this.onOut()
        component.activeFrame = false
    }

    onClick() {
        if (!this.world.room.isIgloo || this.world.room.id != this.world.client.id) return

        if (this.filter == 'igloo') {
            this.world.interface.prompt.showIgloo(this.item.id)
		} else if(this.filter == 'location') {
            this.world.interface.prompt.showLocation(this.item.id)
        } else if (this.filter == 'flooring') {
            this.world.interface.prompt.showFloor(this.item.id)
        } else {
            this.world.interface.prompt.showFurniture(this.item.id)
            this.world.interface.iglooEdit.filterInput.resize(0, 0);
        }
    }

    addIcon(key, item) {
        if (this.item) {
            this.item.destroy();
            this.item = null;
        }
    
        if (this.price) {
            this.price.destroy();
            this.price = null;
        }
    
        if (this.coin) {
            this.coin.destroy();
            this.coin = null;
        }

        if (this.new) {
            this.new.destroy();
            this.new = null;
        }

        let icon = this.scene.add.image(this.x, this.y, key)
        let scale = (key.split('/')[2] == '@5x') ? 0.9 : 1.9

        this.gridView.container.add(icon)

        icon.scale = scale
        icon.id = item
        this.item = icon
        this.setEnable(true);
        let price = 0
        let newBool = 0
        switch(this.filter) {
            case 'furniture':
                price = this.world.crumbs.furniture[item].cost
                newBool = this.world.crumbs.igloo_store_data['furniture'].filter(obj => obj.id === item.toString())[0].new
                break;
            case 'igloo':
                price = this.world.crumbs.igloos[item].cost
                newBool = this.world.crumbs.igloo_store_data['igloo'].filter(obj => obj.id === item.toString())[0].new
                break;
            case 'location':
                price = this.world.crumbs.locations[item].cost
                newBool = this.world.crumbs.igloo_store_data['location'].filter(obj => obj.id === item.toString())[0].new
                break;
            case 'flooring':
                price = this.world.crumbs.flooring[item].cost
                newBool = this.world.crumbs.igloo_store_data['flooring'].filter(obj => obj.id === item.toString())[0].new
                break;
            case 'floor':
                price = this.world.crumbs.furniture[item].cost
                newBool = this.world.crumbs.igloo_store_data['furniture'].filter(obj => obj.id === item.toString())[0].new
                break;
            case 'wall':
                price = this.world.crumbs.furniture[item].cost
                newBool = this.world.crumbs.igloo_store_data['furniture'].filter(obj => obj.id === item.toString())[0].new
                break;
            default:
                console.log(`Unknown filter: ${this.filter}`)
        }

        this.setPrice(price);
        if (newBool) this.setNew(newBool);
    }

    addPrice() {
        let x = this.x + (this.width / 2) - 140
        let y = this.y + (this.height / 2) - 40

        this.price = this.scene.add.text(x, y, '', this.textStyle)
        this.price.setOrigin(0.5)
        this.gridView.container.add(this.price)

        return this.price
    }

    addCoin() {
        let x = this.x + (this.width / 2) - 40
        let y = this.y + (this.height / 2) - 40

        this.coin = this.scene.add.image(x, y, 'new-iglooedit', 'store_coin')
        this.coin.setOrigin(0.5)
        this.coin.scale = 0.4
        this.gridView.container.add(this.coin)

        return this.coin
    }

    setPrice(value) {
        let price = (this.price) ? this.price : this.addPrice()
        let coin = (this.coin) ? this.coin : this.addCoin()

        price.text = value
        price.visible = true
        coin.visible = true

        this.gridView.container.bringToTop(price)
    }

    addNew() {
        let x = this.x - 175
        let y = this.y - 175

        this.new = this.scene.add.image(x, y, 'main', 'news-new')
        this.new.scale = 2
        this.gridView.container.add(this.new)

        return this.new
    }

    setNew(bool) {
        let newInd = (this.new) ? this.new : this.addNew()

        newInd.visible = bool;

        this.gridView.container.bringToTop(newInd)
    }

    addSpinner(spinner) {
        this.gridView.container.add(spinner)
    }

    addError(item) {
        let icon = this.scene.add.image(this.x, this.y, 'iglooedit', 'box/x')
        this.gridView.container.add(icon)

        icon.id = item
        this.item = icon
    }

    addQuantity() {
        let x = this.x + (this.width / 2) - 75
        let y = this.y + (this.height / 2) - 55

        this.quantity = this.scene.add.text(x, y, '', this.textStyle)
        this.quantity.setOrigin(0.5)
        this.gridView.container.add(this.quantity)

        return this.quantity
    }

    setQuantity(value) {
        let quantity = (this.quantity) ? this.quantity : this.addQuantity()

        this.setEnable(value > 0)

        quantity.text = value
        quantity.visible = true

        this.gridView.container.bringToTop(quantity)
    }

    setEnable(check) {
        if (check) {
            this.enable()
        } else {
            this.disable()
        }
    }

    clearItem() {
        if (this.item) {
            this.item.destroy();
            this.item = null;
        }
        if (this.price) {
            this.price.destroy();
            this.price = null;
        }
        if (this.coin) {
            this.coin.destroy();
            this.coin = null;
        }
        if (this.new) {
            this.new.destroy();
            this.new = null;
        }
    
        this.setFrame('box/box');
        this.disable();
    }

    enable() {
        this.setInteractive()
        this.setFrame('box/box')
    }

    disable() {
        this.disableInteractive()
        this.setFrame('box/box-disabled')
    }

    onHover() {
        let igloo_tt = true
        if (this.filter == 'igloo') {
            this.scene.interface.hint.showHint(this, this.world.crumbs.igloos[this.item.id].name, igloo_tt)
        } else if (this.filter == 'location') {
            this.scene.interface.hint.showHint(this, this.world.crumbs.locations[this.item.id].name, igloo_tt)
        } else if (this.filter == 'flooring') {
            this.scene.interface.hint.showHint(this, this.world.crumbs.flooring[this.item.id].name, igloo_tt)
        } else {
            this.scene.interface.hint.showHint(this, this.world.crumbs.furniture[this.item.id].name, igloo_tt)
        }
    }

    onOut() {
        this.scene.interface.hint.hideHint()
    }
}
