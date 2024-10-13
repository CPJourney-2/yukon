import BaseContainer from '@scenes/base/BaseContainer';
import PathEngine from '@engine/world/penguin/pathfinding/PathEngine';

import { Button, Animation, Interactive } from '@components/components';

export const preload = {
    key: 'fairposter-pack',
    url: 'assets/media/interface/game/_fair/fairposter/fairposter-pack.json',
    loadString: ['loading', 'Fair Poster'],
};

/* START OF COMPILED CODE */

export default class FairPoster extends BaseContainer {

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
        const bg = scene.add.image(11, -2, "fairposter", "poster");
        this.add(bg);

        // buttons_close
        const buttons_close = scene.add.image(241, -382, "fairposter", "close");
        this.add(buttons_close);

        // container_2
        const container_2 = scene.add.container(10, 259);
        this.add(container_2);

        // goto
        const goto = scene.add.image(1, 9, "fairposter", "goto");
        container_2.add(goto);

        // text_1
        const text_1 = scene.add.text(12, 255, "", {});
        text_1.setOrigin(0.5, 0);
        text_1.text = "Go There";
        text_1.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        this.add(text_1);

        // block (components)
        new Interactive(block);

        // buttons_close (components)
        const buttons_closeButton = new Button(buttons_close);
        buttons_closeButton.spriteName = "close";
        buttons_closeButton.callback = () => this.interface.destroyWidget(this);

        // goto (components)
        const gotoButton = new Button(goto);
        gotoButton.spriteName = "goto";
        gotoButton.callback = () => this.goThere();

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    // Write your code here.
    goThere() {
        let random = PathEngine.getRandomPos(600, 600, 40);
        this.network.send('join_room', { room: 852, x: random.x, y: random.y });
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
