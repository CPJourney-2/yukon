import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

export const preload = {
    key: 'tourprompt-pack',
    url: 'assets/media/interface/game/tourprompt/tourprompt-pack.json',
    loadString: ['loading', 'Tour Prompt']
}

/* START OF COMPILED CODE */

export default class TourPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // block
        const block = scene.add.rectangle(-12, 10, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // bg
        const bg = scene.add.image(11, -2, "tourprompt", "tour_prompt");
        this.add(bg);

        // grey_button
        const grey_button = scene.add.image(335, -381, "main", "grey-button");
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(335, -383, "main", "grey-x");
        this.add(grey_x);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(52, 323, 700, 128);
        rectangle_1.isFilled = true;
        rectangle_1.fillAlpha = 1e-7;
        this.add(rectangle_1);

        // block (components)
        new Interactive(block);

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => {this.interface.destroyWidget(this) };
        grey_buttonButton.activeFrame = true;

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.callback = () => {this.openTest()};

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    // Write your code here.
    openTest(){
        this.interface.destroyWidget(this)
        //this.interface.loadWidget('TourTest')
		this.world.client.sendJoinRoom(2, this.crumbs.scenes.rooms[2].key, this.crumbs.scenes.rooms[2].x, this.crumbs.scenes.rooms[2].y, 80)
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
