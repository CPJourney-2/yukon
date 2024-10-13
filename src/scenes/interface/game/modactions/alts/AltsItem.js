import BaseContainer from "@scenes/base/BaseContainer";
import { SimpleButton } from "@components/components";

/* START OF COMPILED CODE */

export default class AltsItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? -1, y ?? 0);

        /** @type {RoundedRectangleImage} */
        this.btn;
        /** @type {Phaser.GameObjects.Text} */
        this.name;


        // btn
        const btn = scene.add.roundedRectangleImage(131, 15, 262, 32);
        btn.fillColor = 16775319;
        btn.isStroked = false;
        btn.radiusTopLeft = 16;
        btn.radiusTopRight = 16;
        btn.radiusBottomLeft = 16;
        btn.radiusBottomRight = 16;
        this.add(btn);

        // name
        const name = scene.add.text(14, 1, "", {});
        name.setStyle({ "backgroundColor": "", "color": "#000000ff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold", "stroke": "#00000050" });
        this.add(name);

        // _btn
        const _btn = scene.add.rectangle(131, 15, 262, 32);
        _btn.fillColor = 16775319;
        this.add(_btn);

        // _btn (components)
        const _btnSimpleButton = new SimpleButton(_btn);
        _btnSimpleButton.hoverCallback = () => this.btn.alpha = 1;
        _btnSimpleButton.hoverOutCallback = () => this.btn.alpha = 0;
        _btnSimpleButton.callback = () => this.doTheThing();

        this.btn = btn;
        this.name = name;

        /* START-USER-CTR-CODE */
        this.selectCallback = () => {}
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setPenguin(name, color, callback) {
        this.btn.alpha = 0
        this.pengname = name
        this.name.text = name
        this.name.setColor(color)
        this.callback = callback
    }

    doTheThing() {
        this.network.send('get_player', { name: this.pengname })
        this.callback()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
