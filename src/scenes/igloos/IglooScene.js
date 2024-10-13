import RoomScene from '@rooms/RoomScene'

import FurnitureLoader from '@engine/loaders/FurnitureLoader'
import FurnitureSprite from '@engine/world/room/furniture/FurnitureSprite'
import PhysicsMaskGraphics from '@engine/utils/mask/PhysicsMaskGraphics'
import RoomCrate from './crates/RoomCrate'
import WallCrate from './crates/WallCrate'
import Puffle from '@engine/world/room/puffle/Puffle'


export default class IglooScene extends RoomScene {

    constructor(key) {
        super(key)

        this.isIgloo = true
        this.editBg
        this.roomCrate
        this.wallCrate

        // Igloo physics areas
        this.pet
        this.room
        this.trash
        this.wall

        // Selected furniture sprite
        this.selected

        // Location
        this.location

        // List of puffles
        this.puffles = []
    }

    init(data) {
        this.args = data.args
        this.id = data.args.igloo
        this.music = data.args.music

        this.loader = new FurnitureLoader(this)

        // Active furniture quantities
        this.quantities = {}

        this.events.once('shutdown', () => this.onShutdown())

        super.init()
    }

    preload() {
        super.preload()

        this.load.image(`locations/sprites/${this.args.location}`, `/assets/media/igloos/locations/sprites/${this.args.location}.png`)
        this.load.image(`locations/sprites/${this.args.location}_nofloor`, `/assets/media/igloos/locations/sprites/${this.args.location}_nofloor.png`)

        if (this.args.flooring) this.loadFlooring(this.args.flooring)
    }

    get editing() {
        if (this.interface.iglooEdit.furniture) {
            return this.interface.iglooEdit.furniture.visible
        }
    }

    get furnitureSprites() {
        return this.children.list.filter(f => f instanceof FurnitureSprite)
    }

    getQuantity(item) {
        let inventoryQuantity = this.world.client.furniture[item]
        let activeQuantity = (this.quantities[item]) ? this.quantities[item] : 0

        return Math.max(inventoryQuantity - activeQuantity, 0)
    }

    onShutdown() {
        this.interface.hideIglooEdit()
    }

    create() {
        if (this.id == this.world.client.id) {
            this.addEditBg()
            this.addCrates()
            this.interface.showIglooEdit()
        }

        super.create()
        this.floor?.setDepth(-2)

        if (this.args.flooring) this.addFlooring(this.args.flooring)
        if (this.args.type == 0 && this.args.flooring) {
            this.addFloorLocation(this.args.location)
        } else {
            this.addLocation(this.args.location)
        }
        this.loadAllFurniture()

        this.world.network.send('get_igloo_likes')
        if(this.client.interface.main.iglooLikes) this.client.interface.main.iglooLikes.visible = true

        // Puffles
        this.world.network.send('get_puffles', { userId: this.id });

        this.world.events.emit("no_bat")
        if (this.world.interface.main.bat) {
            this.world.interface.main.bat.visible = false;
            this.world.interface.main.bat_idle.visible = false;
            this.world.interface.main.batClickBox.visible = false;
        }
    }

    addEditBg() {
        this.editBg = this.add.image(786, 501, 'iglooedit', 'bg')
        this.editBg.depth = -3
        this.editBg.visible = false
    }

    addCrates() {
        this.roomCrate = new RoomCrate(this, this.floorSpawn[0], this.floorSpawn[1])
        this.roomCrate.depth = this.roomCrate.y

        this.wallCrate = new WallCrate(this, this.wallSpawn[0], this.wallSpawn[1])
        this.wallCrate.depth = this.wallCrate.y

        this.add.existing(this.roomCrate)
        this.add.existing(this.wallCrate)
    }

    addFlooring(flooring) {
        if (this.args.type == 65) return
        if (this.flooring) this.flooring.destroy()

        if (flooring && flooring == 24) {
            this.flooring = this.add.sprite(480, 240, `flooring/sprites/${flooring}`, `${this.floorFrame}_1`)
        } else {
            this.flooring = this.add.sprite(0, 0, `flooring/sprites/${flooring}`, `${this.floorFrame}_1`)
        }
        this.flooring.depth = -1

        if (this.roomPhysics.mask) {
            let mask = this.createMask()

            this.flooring.setMask(mask)
        }
    }

    addLocation(id) {
        this.location = this.add.image(760, 480, `locations/sprites/${id}`)
        this.location.depth = -4
    }

    addFloorLocation(id) {
        this.location = this.add.image(760, 480, `locations/sprites/${id}_nofloor`)
        this.location.depth = -4
    }

    showEditBg() {
        if (this.editBg) this.editBg.visible = true
    }

    hideEditBg() {
        if (this.editBg) this.editBg.visible = false
    }

    loadFlooring(flooring) {
        if (this.textures.exists(`flooring/sprites/${flooring}`)) return
        let path = '/assets/media/igloos/flooring/sprites'

        this.load.multiatlas({
            key: `flooring/sprites/${flooring}`,
            atlasURL: `${path}/${flooring}.json`,
            path: path
        })
    }

    updateFlooring(flooring) {
        this.args.flooring = flooring

        this.world.interface.iglooEdit.filterInvInput.resize(0, 0);

        if (flooring == 0 && this.flooring) {
            return this.flooring.destroy()
        }

        if (this.textures.exists(`flooring/sprites/${flooring}`)) {
            return this.addFlooring(flooring)
        }

        this.loadFlooring(flooring)
        this.load.start()
        this.load.once(`filecomplete-json-flooring/${flooring}`, () => {
            this.addFlooring(flooring)
        })
    }

    updateMusic(music, preview=false) {
        this.stopMusic()

        if (!preview) {
            this.music = music
        }

        if (!music) {
            return
        }

        if (this.cache.audio.exists(music)) {
            return this.playMusic(music)
        }

        this.load.audio(music, `assets/media/music/${music}.mp3`)
        this.load.start()

        this.load.once(`filecomplete-audio-${music}`, () => {
            this.playMusic(music)
        })
    }


    updateLocation(location) {
        this.args.location = location

        this.location.destroy()

        this.world.interface.iglooEdit.filterInvInput.resize(0, 0);

        if (this.args.type == 0 && this.args.flooring) {
            this.load.image(`locations/sprites/${location}_nofloor`, `/assets/media/igloos/locations/sprites/${location}_nofloor.png`)
            this.load.start()

            if (this.textures.exists(`locations/sprites/${location}_nofloor`)) {
                return this.addFloorLocation(location)
            }

            this.load.once(`filecomplete-image-locations/${location}_nofloor`, () => {
                this.addFloorLocation(location)
            })
        } else {
            this.load.image(`locations/sprites/${location}`, `/assets/media/igloos/locations/sprites/${location}.png`)
            this.load.start()
            if (this.textures.exists(`locations/sprites/${location}`)) {
                return this.addLocation(location)
            }
    
            this.load.once(`filecomplete-image-locations/${location}`, () => {
                this.addLocation(location)
            })
        }
    }

    loadAllFurniture() {
        this.triggers = []
        for (let f of this.args.furniture) {
            this.updateQuantity(f.furnitureId)
            this.loader.loadFurniture(f.furnitureId, null, f.x, f.y, f.rotation, f.frame, f.depth)

            if(f.furnitureId == 529) {

                this.portal = this.matter.add.rectangle(f.x, f.y, 100, 100, {
                    isStatic: true,
                    label: 'portal'
                })

                 this.portal.render.lineColor = 0x44ff44
                 this.portal.render.fillColor = 0x44ff44
                 this.portal.render.fillOpacity = 0.5

                let trigger =  this.portal

                trigger.callback = () =>  this.triggerRoom(811, 934, 507)
                this.triggers.push(trigger)

            }
        }

        this.loader.start()
    }

    loadFurniture(item) {
        let crate = (this.crumbs.furniture[item].type == 2)
                        ? this.wallCrate
                        : this.roomCrate

        this.updateQuantity(item)
        this.loader.loadFurniture(item, crate, crate.defaultX, crate.defaultY)
        this.loader.start()
    }

    updateIgloo(type) {
        if (this.id != this.world.client.id || this.args.type == type || !(type in this.crumbs.scenes.igloos)) {
            return
        }

        if (this.args.furniture.length >= 1 || this.args.flooring != 0) {
            let text = 'Are you sure you want to change your igloo?\nYour flooring will be removed and Igloo items will be\nsaved in your inventory.'

            this.interface.prompt.showWindow(text, 'dual', () => {
                this._updateIgloo(type)
            })
        } else {
            this._updateIgloo(type)
        }
    }

    _updateIgloo(type) {
        this.world.network.send("close_sprite", {})

        this.interface.showLoading(this.getString('joining', 'igloo'))
        this.network.send('update_igloo', { type: type })

        this.interface.prompt.window.visible = false
    }

    updateQuantity(item) {
        this.quantities[item] = (this.quantities[item]) ? this.quantities[item] + 1 : 1
    }

    /*========== Physics ==========*/

    addPhysics() {
        super.addPhysics()

        this.pet = this.addBody('pet')
        this.room = this.addBody('room')
        this.trash = this.addBody('trash')
        this.wall = this.addBody('wall')
    }

    createMask() {
        let fixtures = this.roomPhysics.mask.fixtures
        let graphics = new PhysicsMaskGraphics(this, fixtures)

        return graphics.createGeometryMask()
    }

    /*========== Furniture input ==========*/

    enableFurnitureInput() {
        for (let f of this.furnitureSprites) {
            f.setInteractive()
        }
    }

    disableFurnitureInput() {
        for (let f of this.furnitureSprites) {
            f.disableInteractive()
        }
    }

    addInput() {
        super.addInput()

        // Only add editor input in client igloo
        if (this.id != this.world.client.id) return

        this.input.dragDistanceThreshold = 1

        this.input.on('pointerdown', (pointer, target) => this.onPointerDown(pointer, target))
        this.input.on('pointermove', (pointer) => this.onPointerMove(pointer))

        this.input.keyboard.on('keydown-UP', () => this.updateFrame(1, 1))
        this.input.keyboard.on('keydown-LEFT', () => this.updateFrame(0, 1))
        this.input.keyboard.on('keydown-DOWN', () => this.updateFrame(1, -1))
        this.input.keyboard.on('keydown-RIGHT', () => this.updateFrame(0, -1))

        this.input.keyboard.on('keydown-BACKSPACE', () => this.onBackSpace());
        this.input.keyboard.on('keydown-DELETE', () => this.onBackSpace());
    }

    onBackSpace() {
        for (let f of this.furnitureSprites) {
            if (!f.hasStroke) continue;
            f.removeStroke();
            f.setInteractive({ draggable: true, pixelPerfect: true });
            f.showArrows(false);
            f.sendToTrash();
        }
    }

    onPointerMove(pointer) {
        if (this.editing && this.selected) {
            this.selected.drag(pointer)
        }
    }

    preventContextMenu(event) {
        event.preventDefault();
        return false;
    }

    onPointerDown(pointer, target) {
        if (!this.editing) {
            return
        }

        if (!this.selected && pointer.leftButtonDown() && !target[0]) {
            for (let f of this.furnitureSprites) {
                f.removeStroke()
                f.setInteractive({ draggable: true, pixelPerfect: true })
                f.showArrows(false);
            }
        }

        if (!this.selected && pointer.leftButtonDown() && target[0] && target[0] instanceof FurnitureSprite && !target[0].hasStroke) {
            for (let f of this.furnitureSprites) {
                if (!f.hasStroke) continue;
                f.removeStroke();
                f.setInteractive({ draggable: true, pixelPerfect: true });
                f.showArrows(false);
            }
            target[0].hover(pointer);
            target[0].showArrows(false);
            target[0].removeStroke();
            this.interface.iglooEdit.showDragContainer();
        } else if (!this.selected && pointer.rightButtonDown() && target[0] && target[0] instanceof FurnitureSprite && !target[0].hasStroke) {
            document.body.addEventListener('contextmenu', this.preventContextMenu);
            target[0].showArrows(true);
            target[0].addStroke();
            target[0].setInteractive({ draggable: false, pixelPerfect: true });
        } else if (!this.selected && pointer.rightButtonDown() && target[0] && target[0] instanceof FurnitureSprite && target[0].hasStroke) {
            setTimeout(() => {document.body.removeEventListener('contextmenu', this.preventContextMenu);}, 100);
            target[0].setInteractive({ draggable: true, pixelPerfect: true })
            target[0].firstClick = false;
            target[0].showArrows(false);
            target[0].removeStroke();
        } else if (this.selected && pointer.leftButtonDown()) {
            this.selected.drop();
        }
    }

    updateFrame(index, value) {
        if (this.editing && this.selected) {
            this.selected.updateFrame(index, value)
        }
    }

    setSelected(furniture = null) {
        this.selected = furniture
        this.interface.iglooEdit.setControlsInteractive(furniture == null)
    }

    /*========== Puffles ==========*/

    spawnPuffles(puffleArray) {
        this.puffleArray = puffleArray;
        // Initialize a set to keep track of loaded Puffle IDs
        this.loadedPuffles = new Set();
    
        for (var x in this.puffleArray) {
            let puffleId = this.puffleArray[x].id;
    
            // Check if the puffle has already been loaded
            if (!this.loadedPuffles.has(puffleId)) {
                new Puffle(this.puffleArray[x], this);
                this.loadedPuffles.add(puffleId);
            }
        }
    }

    spawnPuffle(puffle) {
        for (var x in this.puffleArray) {
            if (this.puffleArray[x].id == puffle.puffleId) {
                new Puffle(this.puffleArray[x], this)
            }
        }
    }

    hidePuffles() {
        for (let p in this.puffles) {
            if (this.puffles[p]) this.puffles[p].destroy()
        }
    }

    stop(){
        for (let p in this.puffles) {
            if (this.puffles[p]) this.puffles[p].destroy()
        }
        document.body.removeEventListener('contextmenu', this.preventContextMenu);
        super.stop()
    }
}
