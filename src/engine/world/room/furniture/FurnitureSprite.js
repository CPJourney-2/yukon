export default class FurnitureSprite extends Phaser.GameObjects.Sprite {

    constructor(scene, id, crate, x, y, texture, rotation, frame, depth) {
        super(scene, x, y, texture, '1_1_1')

        this.id = id
        this.frames = this.texture.getFrameNames()
        this.visible = !crate
        this.crumb = scene.crumbs.furniture[id]
        this.isWall = this.crumb.type == 2
        this.trashIcon
        this.depth = depth ? depth : this.y;

        this.trashed = false

        // Physics body that the furniture is allowed inside
        this.safeArea = (this.isWall) ? scene['wall'] : scene['room']

        this.validatePos()
        // this.depth = this.y - 1 // - 1 to appear behind explosion

        // Last safe position
        this.safeX = this.x
        this.safeY = this.y

        // Offsets based on original center vs pointer position at start of drag
        this.offsetX = 0
        this.offsetY = 0

        this.maxFrames = [
            // Item frames (rotations)
            this.getFrameCount(0),
            // Art frames (variations)
            this.getFrameCount(1)
        ]

        // Set animations
        if (this.crumb.fps) {
            this._anims = this.getAnims()
            this.setAnim(this.frame.name)
        }

        // Set frames
        if (this.isWall && crate && this.maxFrames[0] > 1) {
            // Start new wall item at middle rotation
            this.updateFrame(0, 2, true)
        } else {
            this.updateFrame(0, rotation, true)
        }
        this.updateFrame(1, frame, true)

        // Set input
        this.setInteractive({ draggable: true, pixelPerfect: true })
        this.on('dragend', () => this.drop())
        // Input disabled initially if not editing
        if (!this.editing) this.disableInteractive()

        if (crate) crate.drop(this)
        this.hasStroke = false;
        this.createArrowButtons();
    }

    get iglooEdit() {
        return this.scene.interface.iglooEdit
    }

    get world() {
        return this.scene.world
    }

    get editing() {
        if (!this.iglooEdit || !this.iglooEdit.furniture) return false
        return this.iglooEdit.furniture.visible
    }

    get currentFrame() {
        return this.frame.name.split('_')
    }

    get wallBounds() {
        return this.scene.wallBounds
    }

    get isSafe() {
        if (this.world.client.iglooBounds === false || this.world.room.id !== this.world.client.id) {
            return true;
        }
        if (this.safeArea) {
            return this.scene.matter.containsPoint(this.safeArea, this.x, this.y)
        }
    }

    get isTrash() {
        if (this.iglooEdit.trash_box && this.iglooEdit.controls.visible && this.iglooEdit.furniture) {
            const bounds = this.iglooEdit.trash_box.getBounds();
    
            const isWithinBounds = bounds.contains(this.x, this.y);
    
            const isOutsideScene = this.x < 0 || this.x > 1520 || this.y < 0 || this.y > 960;
    
            return isWithinBounds || isOutsideScene;
        }
        return false;
    }

    getFrameCount(index) {
        let frames = this.getSplitFrames(index)
        return Math.max.apply(Math, frames)
    }

    getSplitFrames(index) {
        return this.frames.map(frame => frame.split('_')[index])
    }

    /**
     * Validates starting position.
     */
    validatePos() {
        if (!this.isSafe) {
            let spawn = (this.isWall) ? this.scene.wallSpawn : this.scene.floorSpawn

            this.x = spawn[0]
            this.y = spawn[1]
        }
    }

    addStroke() {
        if (!this.hasStroke) {
            this.scene.plugins.get('rexOutlinePipeline').add(this, {thickness: 5});
            this.hasStroke = true;
            this.maxDepth = this.y + 100;
            this.minDepth = this.y - 100;
        }
    }

    removeStroke() {
        if (this.hasStroke) {
            this.scene.plugins.get('rexOutlinePipeline').remove(this);
            this.hasStroke = false;
        }
    }

    createArrowButtons() {
        if (this.upArrow) this.upArrow.destroy();
        if (this.downArrow) this.downArrow.destroy();
        this.upArrow = this.scene.add.sprite(this.x + 100, this.y - 30, 'new-iglooedit', 'furniture_arrow_up').setInteractive();
        this.upArrow.visible = false;
    
        this.downArrow = this.scene.add.sprite(this.x + 100, this.y + 30, 'new-iglooedit', 'furniture_arrow_down').setInteractive();
        this.downArrow.visible = false;

        this.upArrow.on('pointerover', () => this.upArrow.setFrame('furniture_arrow_up-hover'));
        this.upArrow.on('pointerout', () => this.upArrow.setFrame('furniture_arrow_up'));
        this.upArrow.on('pointerdown', () => {
            this.adjustDepth(-20);
        });
        
        this.downArrow.on('pointerover', () => this.downArrow.setFrame('furniture_arrow_down-hover'));
        this.downArrow.on('pointerout', () => this.downArrow.setFrame('furniture_arrow_down'));
        this.downArrow.on('pointerdown', () => {
            this.adjustDepth(20);
        });
    }

    adjustDepth(amount) {
        let newDepth = this.depth + amount;
    
        // Ensure the new depth does not exceed the maximum or minimum bounds
        if (newDepth <= this.maxDepth && newDepth >= this.minDepth) {
            this.depth = newDepth;
        }
    }

    showArrows(show) {
        if (show === true) {
            if (this.x > 760) {
                this.upArrow.x = this.x - 150
                this.upArrow.y = this.y - 30
                this.downArrow.x = this.x - 150
                this.downArrow.y = this.y + 30
            } else {
                this.upArrow.x = this.x + 150
                this.upArrow.y = this.y - 30
                this.downArrow.x = this.x + 150
                this.downArrow.y = this.y + 30 
            }
        }
        this.upArrow.depth = 1000;
        this.downArrow.depth = 1000;
        this.upArrow.setVisible(show);
        this.downArrow.setVisible(show);
    }

    drag(pointer) {
        this.x = Math.round(pointer.x + this.offsetX)
        this.y = Math.round(pointer.y + this.offsetY)
        this.depth = this.y

        this.checkPos()

        if (this.world.client.iglooBounds === true) {
            if (!this.isWall || !this.wallBounds) return

            // Auto rotate wall item
            if (this.x < this.wallBounds[0]) {
                this.updateFrame(0, 1, true)
            } else if (this.x > this.wallBounds[1]) {
                this.updateFrame(0, 3, true)
            } else {
                this.updateFrame(0, 2, true)
            }
        }
    }

    hover(pointer) {
        if (this.trashed || this.hasStroke) {
            return
        }

        // Can't hover wall items
        if (!this.isWall) {
            let frame = this.currentFrame
            frame.splice(2, 0, 'hover')
            this.setFrame(frame.join('_'))
        }

        this.offsetX = this.x - pointer.x
        this.offsetY = this.y - pointer.y

        this.scene.setSelected(this)
    }

    drop() {
        if (!this.editing || this.trashed) {
            return
        }

        this.scene.setSelected()

        this.iglooEdit.hideDragContainer();

        if (this.isTrash) return this.sendToTrash()

        if (!this.isSafe) {
            // if (this.isTrash) return this.sendToTrash()

            // Return to safe position
            this.x = this.safeX
            this.y = this.safeY
            this.depth = this.y
            this.alpha = 1
        }

        this.safeX = this.x
        this.safeY = this.y
        this.setFrame(this.frame.name.replace('_hover', ''))
    }

    /**
     * Updates the current frame by modifying a value within it,
     * e.g updating a rotation from 1_1_1 to 2_1_1.
     *
     * @param {number} index - Index of frame in currentFrame
     * @param {number} value - Value to modify the frame by
     * @param {boolean} set - If the value should be directly set instead
     * @returns
     */
    updateFrame(index, value, set = false) {
        // Can't rotate wall items with keys
        if (this.world.client.iglooBounds === true) {
            if (this.isWall && index == 0 && !set) return
        }

        let frame = this.currentFrame
        // Don't update set values if they are equal
        if (set && frame[index] == value) return

        let newFrame = (set) ? value : parseInt(frame[index]) + value
        frame[index] = newFrame

        // Wrap value if necessary
        if (frame[index] > this.maxFrames[index]) {
            frame[index] = 1
        } else if (frame[index] < 1) {
            frame[index] = this.maxFrames[index]
        }

        this.setFrame(frame.join('_'))
    }

    /*========== Trash ==========*/

    /**
     * Validates position when dragging furniture.
     */
    checkPos() {
        // Furniture is outside allowed area
        if (!this.isSafe) {
            this.alpha = 0.5
        } else {
            this.alpha = 1
        }

        this.checkTrash()
    }

    /**
     * Validates trash position when dragging furniture.
     */
    checkTrash() {
        let prevDepth = this.depth;

        if (this.isTrash) {
            this.iglooEdit.trash_box.setFrame('box-hover')

            this.iglooEdit.button_furniture.setFrame('button/furniture-hover')

        } else {
            this.depth = prevDepth
            this.iglooEdit.trash_box.setFrame('box')

            this.iglooEdit.button_furniture.setFrame('button/furniture')
        }
    }

    addTrashIcon() {
        this.trashIcon = this.scene.add.image(0, 0, 'iglooedit', 'remove')
        this.trashIcon.visible = false
        return this.trashIcon
    }

    sendToTrash() {
        this.trashed = true

        // Update furniture quantity
        this.scene.quantities[this.id]--

        this.scene.tweens.add({
            targets: this,
            duration: 600,
            x: 1400,
            y: 888,
            scale: 0,
            ease: this.easeOutBack,
            onComplete: () => this.onTrashComplete()
        })
    }

    easeOutBack(value) {
        return Phaser.Math.Easing.Back.Out(value, 0.5)
    }

    onTrashComplete() {
        if (this.active) {
            this.iglooEdit.button_furniture.setFrame('button/furniture')
            this.iglooEdit.trash_box.setFrame('box')
            this.iglooEdit.gridView.updateQuantity(this.id);
            this.destroy()
        }
    }

    /*========== Animations ==========*/

    getAnims() {
        let anims = {}

        // Gets max inner frame number for each animation
        this.frames.map(frame => {
            frame = this.splitAnim(frame)

            // Update if doesn't exist or if current count is less
            if ((!(anims[frame.key]) && frame.num > 1) || frame.num > anims[frame.key]) {
                anims[frame.key] = parseInt(frame.num)
            }
        })

        // Update to animation objects
        for (let frame in anims) {
            anims[frame] = this.createAnim(frame, anims[frame])
        }

        return anims
    }

    createAnim(frame, num) {
        let key = `${this.texture.key}_${frame}`

        // If animation already exists
        if (this.scene.anims.exists(key)) {
            return this.scene.anims.get(key)
        }

        // Create animation
        return this.scene.anims.create({
            key: key,
            frames: this.scene.anims.generateFrameNames(this.texture.key, {
                prefix: `${frame}_`,
                start: 1,
                end: num
            }),
            frameRate: 24,
            repeat: -1
        })
    }

    setFrame(frame) {
        if (this.frame && this.frame.name == frame) return

        if (this._anims) {
            this.setAnim(frame)
        } else {
            super.setFrame(frame)
        }
    }

    setAnim(frame) {
        this.stop() // Stop current animation

        frame = this.splitAnim(frame)
        super.setFrame(`${frame.key}_1`)

        if (!frame.anim) return // Not an animation
        this.play(frame.anim)

        // Switch frame to inner frame number, used for keeping
        // same animation when transitioning between hover/rotation
        if (frame.anim.frames[frame.num]) {
            this.anims.setCurrentFrame(frame.anim.frames[frame.num])
        }
    }

    /**
     * Separates an animation frame from its inner frame number.
     *
     * @param {string} frame - Full frame name
     */
    splitAnim(frame) {
        frame = frame.split('_')
        let num = frame.pop()
        frame = frame.join('_')

        return {
            key: frame,
            anim: (this._anims) ? this._anims[frame] : null,
            num: num
        }
    }

}
