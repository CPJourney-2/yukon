import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton, Interactive } from '@components/components'


/* START OF COMPILED CODE */

export default class Moderator extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.nineslice(0, -70, "prompt", "window", 702, 504, 44, 39, 40, 41);
        this.add(bg);

        // text3
        const text3 = scene.add.text(-44, 86, "", {});
        text3.setOrigin(0.5, 0);
        text3.text = "to ignore them.";
        text3.setStyle({ "color": "#ffffffff", "fixedWidth":220,"fixedHeight":60,"fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#003366", "shadow.fill":true});
        this.add(text3);

        // text2
        const text2 = scene.add.text(226, -22, "", {});
        text2.setOrigin(0.5, 0);
        text2.text = "to report";
        text2.setStyle({ "color": "#ffffffff", "fixedWidth":200,"fixedHeight":60,"fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#003366", "shadow.fill":true});
        this.add(text2);

        // text1
        const text1 = scene.add.text(21, -76, "", {});
        text1.setOrigin(0.5, 0);
        text1.text = "If someone is breaking the rules, click on\ntheir penguin then click\nthem to a moderator. You can also click\non";
        text1.setStyle({ "color": "#ffffffff", "fixedWidth":562,"fixedHeight":220,"fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#003366", "shadow.fill":true});
        text1.setLineSpacing(20);
        this.add(text1);

        // safe
        const safe = scene.add.text(0, -151, "", {});
        safe.setOrigin(0.5, 0);
        safe.text = "Help keep the island safe!";
        safe.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        this.add(safe);

        // x_button
        const x_button = scene.add.image(300, -268, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(300, -270, "main", "blue-x");
        this.add(blue_x);

        // report_button
        const report_button = scene.add.image(90, -5, "main", "blue-button");
        this.add(report_button);

        // report_icon
        const report_icon = scene.add.image(90, -6, "main", "mod-icon");
        this.add(report_icon);

        // ignore_button
        const ignore_button = scene.add.image(-190, 104, "main", "blue-button");
        this.add(ignore_button);

        // ignore_icon
        const ignore_icon = scene.add.image(-190, 102, "main", "ignore-icon");
        this.add(ignore_icon);

        // mod
        const mod = scene.add.image(0, -222, "main", "mod");
        this.add(mod);

        // block (components)
        new Interactive(block);

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.close();
        x_buttonButton.activeFrame = true;

        // report_button (components)
        const report_buttonButton = new Button(report_button);
        report_buttonButton.spriteName = "blue-button";
        report_buttonButton.activeFrame = true;

        // ignore_button (components)
        const ignore_buttonButton = new Button(ignore_button);
        ignore_buttonButton.spriteName = "blue-button";
        ignore_buttonButton.callback = () => this.secret();
        ignore_buttonButton.activeFrame = true;

        // mod (components)
        const modSimpleButton = new SimpleButton(mod);
        modSimpleButton.callback = () => this.showAgentQuiz();

        this.bg = bg;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    showAgentQuiz() {
        this.visible = false
        this.interface.loadWidget('AgentTest')
    }

    secret() {
        if(this.world.client.rank > 1 && this.world.client.streamer) {
            this.interface.prompt.showWindow('Disable streamer mode?','dual',() => {
                this.visible = false
                this.interface.prompt.window.visible = false;
                this.network.send('toggle_streamer');
            })
        }
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
