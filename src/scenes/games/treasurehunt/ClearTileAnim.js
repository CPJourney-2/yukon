
// You can write more code here
import { Animation } from '@components/components'
/* START OF COMPILED CODE */

export default class ClearTileAnim extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Sprite} */
        this.horizontal;
        /** @type {Phaser.GameObjects.Sprite} */
        this.vertical;
        /** @type {"row"|"column"} */
        this.direction = "row";
        /** @type {number} */
        this.index = 0;


        // horizontal
        const horizontal = scene.add.sprite(195, -24, "treasurehunt", "sandRightAnim0001");
        horizontal.visible = false;
        this.add(horizontal);

        // vertical
        const vertical = scene.add.sprite(3, 162, "treasurehunt", "sandDownAnim0001");
        vertical.visible = false;
        this.add(vertical);

        // horizontal (components)
        const horizontalAnimation = new Animation(horizontal);
        horizontalAnimation.key = "sandRightAnim";
        horizontalAnimation.end = 20;
        horizontalAnimation.repeat = 0;
        horizontalAnimation.autoPlay = false;
        horizontalAnimation.showOnStart = true;
        horizontalAnimation.hideOnComplete = true;

        // vertical (components)
        const verticalAnimation = new Animation(vertical);
        verticalAnimation.key = "sandDownAnim";
        verticalAnimation.end = 20;
        verticalAnimation.repeat = 0;
        verticalAnimation.autoPlay = false;
        verticalAnimation.showOnStart = true;
        verticalAnimation.hideOnComplete = true;

        this.horizontal = horizontal;
        this.vertical = vertical;

        /* START-USER-CTR-CODE */
        this.rowStrings = ['01','02','03','04','05','06','07','08','09','10']
		
		this.tileManager = null
        this.listenersInitiated = false
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    play() {
        if(!this.listenersInitiated) this.initListeners()
        switch(this.direction) {
            case "row":
                this.horizontal.__Animation.play()
                break
            case "column":
                this.vertical.__Animation.play()
                break
            default: break
        }
    }

    initListeners() {
        this._cf = 0
		this.ci = 1
        this.tileManager = this.parentContainer.parentContainer.tileManager
        this.horizontal.on('animationupdate',() => {
            try {
                this._cf = this.horizontal.anims.currentFrame.index
                if(this._cf > 1 && this._cf <= 11) {
                    if(this.parentContainer.parentContainer[`t${this.index}${this.rowStrings[this._cf - 2]}`].visible == false) {
                        this.parentContainer.parentContainer[`dt${this.index}${this.rowStrings[this._cf - 2]}`].visible = false
                        this.parentContainer.parentContainer['destroyShine'](this.index,this.rowStrings[this._cf - 2])
                        this['tileManager'].changeNeighborsOf(this.rowStrings[this._cf - 2],this.index,true)
                    } else {
                        this.parentContainer.parentContainer[`t${this.index}${this.rowStrings[this._cf - 2]}`].visible = false
                        this['tileManager'].changeNeighborsOf(this.rowStrings[this._cf - 2],this.index)
                    }
                    //this['tileManager'].changeNeighborsOf(this.rowStrings[this._cf - 2],this.index,true)
                }
            } catch(e) {
                console.log(`${e}`)
            }
        })
        this.vertical.on('animationupdate',() => {
            try {
                this._cf = this.vertical.anims.currentFrame.index
                if(this._cf > 1 && this._cf <= 11) {
                    if(this.parentContainer.parentContainer[`t${this.ci}${this.index>9?this.index:`0${this.index}`}`].visible == false) {
                        this.parentContainer.parentContainer[`dt${this.ci}${this.index>9?this.index:`0${this.index}`}`].visible = false
                        this.parentContainer.parentContainer['destroyShine'](this.ci,this.index>9?this.index:`0${this.index}`)
                        this['tileManager'].changeNeighborsOf(this.index>9?this.index:`0${this.index}`,this.ci,true)
                    } else {
                        this.parentContainer.parentContainer[`t${this.ci}${this.index>9?this.index:`0${this.index}`}`].visible = false
                        this['tileManager'].changeNeighborsOf(this.index>9?this.index:`0${this.index}`,this.ci)
                    }
                    //this['tileManager'].changeNeighborsOf(this.rowStrings[this._cf - 2],this.index,true)
                    this.ci++
                } else {
                    this.ci = 1
                }
            } catch(e) {
                console.log(`${e}`)
            }
        })
        this.listenersInitiated = true
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
