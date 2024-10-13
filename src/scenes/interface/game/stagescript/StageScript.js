import BaseContainer from '@scenes/base/BaseContainer'
import StageScriptLine from './StageScriptLine'

import { Button, Animation, Interactive, DraggableContainer } from '@components/components'

export const preload = {
    key: 'stagescript-pack',
    url: 'assets/media/interface/game/stagescript/stagescript-pack.json',
    loadString: ['loading', 'Stage Script']
}

/* START OF COMPILED CODE */

export default class StageScript extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 1155, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.bg;
        /** @type {StageScriptLine} */
        this.line_4;
        /** @type {StageScriptLine} */
        this.line_3;
        /** @type {StageScriptLine} */
        this.line_2;
        /** @type {StageScriptLine} */
        this.line_1;
        /** @type {Phaser.GameObjects.Text} */
        this.pageCount;
        /** @type {Phaser.GameObjects.Image} */
        this.pageleft;
        /** @type {Phaser.GameObjects.Image} */
        this.pageright;


        // bg
        const bg = scene.add.image(0, 0, "stagescript", "bg");
        this.add(bg);

        // line_4
        const line_4 = new StageScriptLine(scene, -174, 163);
        this.add(line_4);

        // line_3
        const line_3 = new StageScriptLine(scene, -174, 52);
        this.add(line_3);

        // line_2
        const line_2 = new StageScriptLine(scene, -174, -59);
        this.add(line_2);

        // line_1
        const line_1 = new StageScriptLine(scene, -174, -172);
        this.add(line_1);

        // pageCount
        const pageCount = scene.add.text(-192, 246, "", {});
        pageCount.text = "Page 1/2";
        pageCount.setStyle({ "align": "center", "color": "#999999", "fixedWidth":380,"fontFamily": "Arial", "fontSize": "22px" });
        this.add(pageCount);

        // pageleft
        const pageleft = scene.add.image(-151, 227, "stagescript", "pageleft");
        this.add(pageleft);

        // pageright
        const pageright = scene.add.image(146, 227, "stagescript", "pageright");
        this.add(pageright);

        // closebtn
        const closebtn = scene.add.image(141, -205, "stagescript", "closebtn");
        this.add(closebtn);

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = bg;

        // pageleft (components)
        const pageleftButton = new Button(pageleft);
        pageleftButton.spriteName = "pageleft";
        pageleftButton.callback = () => this.onPrev();
        pageleftButton.activeFrame = true;
        pageleftButton.pixelPerfect = true;

        // pageright (components)
        const pagerightButton = new Button(pageright);
        pagerightButton.spriteName = "pageright";
        pagerightButton.callback = () => this.onNext();
        pagerightButton.activeFrame = true;
        pagerightButton.pixelPerfect = true;

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.spriteName = "closebtn";
        closebtnButton.callback = () => this.close();
        closebtnButton.activeFrame = true;

        this.bg = bg;
        this.line_4 = line_4;
        this.line_3 = line_3;
        this.line_2 = line_2;
        this.line_1 = line_1;
        this.pageCount = pageCount;
        this.pageleft = pageleft;
        this.pageright = pageright;

        /* START-USER-CTR-CODE */
        this._dontHideInputs = true
        this.lines = [
            this.line_1,
            this.line_2,
            this.line_3,
            this.line_4
        ]
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()

        this.page = 0

        this.loadPage()
    }

    get scriptMessages() {
        return this.world.crumbs.stage_script_messages    
    }

    get totalPages() {
        return Math.ceil(this.scriptMessages.length / this.lines.length)
    }

    get humanPage() {
        return this.page + 1    
    }

    loadPage() {
        let messages = this.scriptMessages.slice(this.page * this.lines.length, (this.page+1) * this.lines.length)

        for(let [idx, line] of this.lines.entries()) {
            line.setMessage(messages[idx])
            line.messageIdx = idx
        }

        this.pageCount.text = `Page ${this.humanPage}/${this.totalPages}`

        this.pageleft.visible = this.page > 0
        this.pageright.visible = this.humanPage < this.totalPages
    }

    onPrev() {
        this.page -= 1
        this.loadPage()
    }

    onNext() {
        this.page += 1
        this.loadPage()
    }

    sendMessage(idx) {
        this.world.client.sendStage((this.page * this.lines.length) + idx)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
