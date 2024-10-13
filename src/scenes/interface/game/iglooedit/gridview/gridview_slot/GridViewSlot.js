import { Button } from '@components/components'


export default class GridViewSlot extends Phaser.GameObjects.Sprite {

    constructor(scene) {
        super(scene, 0, 0, 'iglooedit', 'box/box')

        this.world = scene.world
        this.gridView = this.scene.gridView

        this.item
        this.quantity
        this.filter

        this.textStyle = {
            fontFamily: 'Burbank Small',
            fontSize: 70,
            fontStyle: 'bold',
            color: '#333333',
            align: 'right',
            fixedWidth: 100
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

        // this.gridView.visible = false
        // this.scene.furniture.visible = false

        if (this.filter == 'igloo') {
            this.world.room.updateIgloo(this.item.id)
		} else if(this.filter == 'location') {
            let text = 'Are you sure you want to change your location?\nYour furniture will be saved.\nPlease allow igloo to load.'

            this.world.interface.prompt.showWindow(text, 'dual', () => {
                this.world.network.send("close_sprite", {})

                this.world.interface.showLoading(this.world.interface.getString('loading', 'igloo'))
                this.world.interface.iglooEdit.saveIgloo(false);
                this.world.interface.iglooEdit.filterInvInput.resize(0, 0);
                setTimeout(() => {
                    this.world.network.send('update_location', { location: this.item.id });
                }, 1000);

                this.world.interface.prompt.window.visible = false
            })
        } else if (this.filter == 'flooring') {
            let text = 'Are you sure you want to change your flooring?\nYour furniture will be saved.\nPlease allow igloo to load.'

            this.world.interface.prompt.showWindow(text, 'dual', () => {
                this.world.network.send("close_sprite", {})

                this.world.interface.showLoading(this.world.interface.getString('loading', 'igloo'))
                this.world.interface.iglooEdit.saveIgloo(false);
                this.world.interface.iglooEdit.filterInvInput.resize(0, 0);
                setTimeout(() => {
                    this.world.network.send('update_flooring', { flooring: this.item.id });
                }, 1000);

                this.world.interface.prompt.window.visible = false
            })
        } else {
            this.world.room.loadFurniture(this.item.id)
            let updatedQuantity = this.world.room.getQuantity(this.item.id)
			this.setQuantity(updatedQuantity)
        }
    }

    addIcon(key, item) {
        if (this.item) {
            this.item.destroy()
        }

        let icon = this.scene.add.image(this.x, this.y, key)
        let scale = (key.split('/')[2] == '@5x') ? 1 : 2

        this.gridView.container.add(icon)

        icon.scale = scale
        icon.id = item
        this.item = icon

        if (this.filter != 'igloo' && this.filter != 'location' && this.filter != 'flooring') {
            let quantity = this.world.room.getQuantity(item)
            return this.setQuantity(quantity)
        }

        if (this.filter == 'location') {
            this.setEnable(this.world.room.args.location != item)
        } else if (this.filter == 'igloo') {
            this.setEnable(this.world.room.args.type != item)
        } else if (this.filter == 'flooring') {
            this.setEnable(this.world.room.args.flooring != item)
        }
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
        if (this.quantity) {
            this.quantity.destroy();
            this.quantity = null;
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
