import { SimpleButton } from '@components/components'
import StampbookLoader from '@engine/loaders/StampbookLoader'

/* START OF COMPILED CODE */

export default class StampItem extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangleMain;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangleCover;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangleCallback;
        /** @type {Phaser.GameObjects.Text} */
        this.idText;
        /** @type {Phaser.GameObjects.Text} */
        this.stampDescription;
        /** @type {Phaser.GameObjects.Text} */
        this.stampTitle;
        /** @type {Phaser.GameObjects.Container} */
        this.stampInfo;


        // rectangleMain
        const rectangleMain = scene.add.rectangle(0, 0, 180, 128);
        rectangleMain.fillColor = 16713736;
        this.add(rectangleMain);

        // rectangleCover
        const rectangleCover = scene.add.rectangle(0, 0, 180, 128);
        rectangleCover.visible = false;
        rectangleCover.fillColor = 16713736;
        this.add(rectangleCover);

        // rectangleCallback
        const rectangleCallback = scene.add.rectangle(0, 0, 180, 180);
        rectangleCallback.visible = false;
        rectangleCallback.fillColor = 16713736;
        this.add(rectangleCallback);

        // idText
        const idText = scene.add.text(0, 0, "", {});
        idText.setOrigin(0.5, 0.5);
        idText.visible = false;
        idText.text = "420";
        idText.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "64px" });
        this.add(idText);

        // stampInfo
        const stampInfo = scene.add.container(0, 0);
        stampInfo.visible = false;
        this.add(stampInfo);

        // chatBubble
        const chatBubble = scene.add.image(0, -126, "stampbook-inside", "chatBubble");
        stampInfo.add(chatBubble);

        // stampDescription
        const stampDescription = scene.add.text(-118, -152, "", {});
        stampDescription.text = "Be in the same room as Rockhopper";
        stampDescription.setStyle({ "color": "#595959", "fixedWidth":240,"fixedHeight":96,"fontFamily": "Burbank Small", "fontSize": "20px", "stroke": "#595959" });
        stampDescription.setWordWrapWidth(240);
        stampInfo.add(stampDescription);

        // stampTitle
        const stampTitle = scene.add.text(-119, -188, "", {});
        stampTitle.text = "Among Us";
        stampTitle.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold", "stroke": "#000000ff" });
        stampInfo.add(stampTitle);

        // teststamp
        const teststamp = scene.add.image(0, 0, "teststamp");
        teststamp.visible = false;
        this.add(teststamp);

        // rectangleMain (components)
        const rectangleMainSimpleButton = new SimpleButton(rectangleMain);
        rectangleMainSimpleButton.hoverCallback = () => this.onHover();
        rectangleMainSimpleButton.hoverOutCallback = () => this.onHoverOut();

        this.rectangleMain = rectangleMain;
        this.rectangleCover = rectangleCover;
        this.rectangleCallback = rectangleCallback;
        this.idText = idText;
        this.stampDescription = stampDescription;
        this.stampTitle = stampTitle;
        this.stampInfo = stampInfo;

        /* START-USER-CTR-CODE */
        this.setEvents()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setEvents() {
        this.rectangleCover.on('pointerdown', (pointer, target) => this.onPointerDown(pointer, target))
        this.rectangleCover.on('pointerup', (pointer, target) => this.onPointerUp(pointer, target))
        this.scene.input.on('pointermove', (pointer, target) => this.onPointerMove(pointer))
        //this.rectangleCover.on('pointermove', (pointer, target) => this.onPointerMove(pointer))
        this.rectangleCover.on('dragend', () => this.stopMove())

        this.keyEventSet = false

        

        this.rectangleCallback.on('pointerdown', (pointer, target) => this.onCallback(pointer, target))
    }

    setKeyEvent() {
        if(this.keyEventSet) return
        this.keyEventSet = true

        this.cover?.book?.scene?.input.keyboard.on('keydown-LEFT', () => this.keyDownRotate(-1))
        this.cover?.book?.scene?.input.keyboard.on('keydown-RIGHT', () => this.keyDownRotate(1))
    }

    updateContent() {
        this.idText.text = this.stamp?.stamp_id
        this.stampTitle.text = this.stamp?.name
        this.stampDescription.text = this.stamp?.description

        if(this.item) {
            this.item.destroy()
            this.item = null
        }

        if(this.spinner) {
            this.spinner.destroy()
            this.spinner = null
        }

        let stampbookLoader = new StampbookLoader(this.scene, this)
        stampbookLoader.startItemLoad(`${this.big ? "big/" : ""}${this.stamp?.stamp_id}`)
    }

    updateCollected() {
        this.item.alpha = this.unlocked ? 1 : 0.5;
    }

    onHover() {
        this.bringToTop(this.stampInfo)
        this.stampInfo.visible = true
    }

    onHoverOut() {
        this.stampInfo.visible = false
    }

    /* for editor */

    setCover(cover) {
        this.cover = cover

        this.rectangleMain.visible = false

        this.cover.book.scene.input.dragDistanceThreshold = 1
        this.rectangleCover.setInteractive({ draggable: true })

        this.rectangleCover.visible = true

        this.setKeyEvent()
    }

    disableCover() {
        this.rectangleCover.disableInteractive()
        this.rectangleCover.visible = false    
    }

    onPointerDown(pointer, target) {
        if(!this.cover.selected) this.startMove(pointer)
        else if(this.cover.selected == this) this.stopMove(pointer)
    }

    startMove(pointer) {
        if(this.cover.selected && this.cover.selected != this) this.cover.selected.stopMove()

        this.offsetX = this.x - pointer.x
        this.offsetY = this.y - pointer.y

        this.cover.selected = this    
        this.cover.dragHere.visible = true

        this.shadow = this.scene.add.image(this.item.x, this.item.y, this.item.key, this.item.frame)
        this.shadow.scale = 1.05
        this.add(this.shadow)
        this.shadow.tint = "#000"
        this.shadow.postFX.addBlur(0, 0, 0, 1, 0xffffff, 20);

        this.bringToTop(this.item)
        this.parentContainer.bringToTop(this)

        this.checkCollision()
    }

    stopMove(pointer) {
        this.cover.selected = null
        if(this.shadow) this.shadow.destroy()
        this.shadow = null
        this.cover.dragHere.visible = false

        if(this.isOOB) this.destroy()
    }

    onPointerMove(pointer) {
        if(this.cover?.selected != this) return

        this.x = Math.round(pointer.x + this.offsetX)
        this.y = Math.round(pointer.y + this.offsetY)

        this.checkCollision()
    }

    setCustomCallback(callback) {
        this.callback = callback

        this.rectangleCover.disableInteractive()
        this.rectangleCover.visible = false

        this.rectangleMain.visible = false

        this.rectangleCallback.visible = true

        this.rectangleCallback.setInteractive({
            cursor: 'pointer'    
        })
    }

    onCallback(pointer) {
        this.callback(this, pointer)
    }

    onPointerUp() {
        if(!this.forcedMove) return    
        this.forcedMove = false

        this.stopMove()
    }

    get isOOB() {
        let stageArea = this.parentContainer.parentContainer.stageArea
        let x = this.x + 760
        let y = this.y + 480
        return x < stageArea.x || x > (stageArea.x + stageArea.width) ||
            y < stageArea.y || y > (stageArea.y + stageArea.height)
    }

    checkCollision() {
        this.alpha = this.isOOB ? 0.5 : 1
    }

    keyDownRotate(multiplier) {
        if(this.cover.selected != this) return

        this.angle += 45 * multiplier
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
