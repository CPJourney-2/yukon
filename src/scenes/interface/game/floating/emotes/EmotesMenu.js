import FloatingMenu from '../FloatingMenu'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class EmotesMenu extends FloatingMenu {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.safe;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.close;
        /** @type {Phaser.GameObjects.Container} */
        this.page2;
        /** @type {Phaser.GameObjects.Container} */
        this.page1;


        // safe
        const safe = scene.add.rectangle(0, 33.47754716873169, 280, 435);
        safe.scaleY = 1.2056828365033796;
        safe.setOrigin(0.5, 1);
        safe.isFilled = true;
        safe.fillColor = 65535;
        safe.fillAlpha = 0.5;
        this.add(safe);

        // close
        const close = scene.add.rectangle(0, 61, 80, 80);
        close.isFilled = true;
        close.fillColor = 65535;
        close.fillAlpha = 0.5;
        this.add(close);

        // page2
        const page2 = scene.add.container(-64, -421);
        page2.visible = false;
        this.add(page2);

        // emotes_2
        const emotes_2 = scene.add.nineslice(-37, 421, "main", "emotes", 203, 397, 23, 23, 23, 23);
        emotes_2.setOrigin(0, 1);
        page2.add(emotes_2);

        // emote_16
        const emote_16 = scene.add.image(128, 320, "main", "small-box");
        page2.add(emote_16);

        // emote_12
        const emote_12 = scene.add.image(64, 320, "main", "small-box");
        page2.add(emote_12);

        // emote_30
        const emote_30 = scene.add.image(0, 320, "main", "small-box");
        page2.add(emote_30);

        // emote_26
        const emote_26 = scene.add.image(128, 256, "main", "small-box");
        page2.add(emote_26);

        // emote_28
        const emote_28 = scene.add.image(64, 256, "main", "small-box");
        page2.add(emote_28);

        // emote_13
        const emote_13 = scene.add.image(0, 256, "main", "small-box");
        page2.add(emote_13);

        // emote_24
        const emote_24 = scene.add.image(128, 192, "main", "small-box");
        page2.add(emote_24);

        // emote_17
        const emote_17 = scene.add.image(64, 192, "main", "small-box");
        page2.add(emote_17);

        // emote_18
        const emote_18 = scene.add.image(0, 192, "main", "small-box");
        page2.add(emote_18);

        // emote_29
        const emote_29 = scene.add.image(128, 128, "main", "small-box");
        page2.add(emote_29);

        // emote_41
        const emote_41 = scene.add.image(64, 128, "main", "small-box");
        page2.add(emote_41);

        // emote_40
        const emote_40 = scene.add.image(0, 128, "main", "small-box");
        page2.add(emote_40);

        // emote_44
        const emote_44 = scene.add.image(0, 64, "main", "small-box");
        page2.add(emote_44);

        // emote_43
        const emote_43 = scene.add.image(64, 64, "main", "small-box");
        page2.add(emote_43);

        // emote_42
        const emote_42 = scene.add.image(128, 64, "main", "small-box");
        page2.add(emote_42);

        // emotes_16_small
        const emotes_16_small = scene.add.image(103, 297, "main", "emotes/16-small");
        emotes_16_small.setOrigin(0, 0);
        page2.add(emotes_16_small);

        // emotes_12_small
        const emotes_12_small = scene.add.image(48, 297, "main", "emotes/12-small");
        emotes_12_small.setOrigin(0, 0);
        page2.add(emotes_12_small);

        // emotes_30_small
        const emotes_30_small = scene.add.image(-19, 299, "main", "emotes/30-small");
        emotes_30_small.setOrigin(0, 0);
        page2.add(emotes_30_small);

        // emotes_17_small
        const emotes_17_small = scene.add.image(45, 167, "main", "emotes/17-small");
        emotes_17_small.setOrigin(0, 0);
        page2.add(emotes_17_small);

        // emotes_28_small
        const emotes_28_small = scene.add.image(45, 232, "main", "emotes/28-small");
        emotes_28_small.setOrigin(0, 0);
        page2.add(emotes_28_small);

        // emotes_26_small
        const emotes_26_small = scene.add.image(111, 235, "main", "emotes/26-small");
        emotes_26_small.setOrigin(0, 0);
        page2.add(emotes_26_small);

        // emotes_24_small
        const emotes_24_small = scene.add.image(108, 176, "main", "emotes/24-small");
        emotes_24_small.setOrigin(0, 0);
        page2.add(emotes_24_small);

        // emotes_29_small
        const emotes_29_small = scene.add.image(111, 108, "main", "emotes/29-small");
        emotes_29_small.setOrigin(0, 0);
        page2.add(emotes_29_small);

        // emotes_18_small
        const emotes_18_small = scene.add.image(-18, 169, "main", "emotes/18-small");
        emotes_18_small.setOrigin(0, 0);
        page2.add(emotes_18_small);

        // emotes_13_small
        const emotes_13_small = scene.add.image(-18, 237, "main", "emotes/13-small");
        emotes_13_small.setOrigin(0, 0);
        page2.add(emotes_13_small);

        // emotes_41_small
        const emotes_41_small = scene.add.image(64, 128, "main", "emotes/41");
        emotes_41_small.scaleX = 0.85;
        emotes_41_small.scaleY = 0.85;
        page2.add(emotes_41_small);

        // emotes_40_small
        const emotes_40_small = scene.add.image(0, 127, "main", "emotes/40");
        emotes_40_small.scaleX = 0.85;
        emotes_40_small.scaleY = 0.85;
        page2.add(emotes_40_small);

        // emotes_44_small
        const emotes_44_small = scene.add.image(128, 64, "fair-emotes", "emotes/44");
        emotes_44_small.scaleX = 0.75;
        emotes_44_small.scaleY = 0.75;
        page2.add(emotes_44_small);

        // emotes_43_small
        const emotes_43_small = scene.add.image(64, 64, "fair-emotes", "emotes/43");
        emotes_43_small.scaleX = 0.75;
        emotes_43_small.scaleY = 0.75;
        page2.add(emotes_43_small);

        // emotes_42_small
        const emotes_42_small = scene.add.image(0, 64, "fair-emotes", "emotes/42");
        emotes_42_small.scaleX = 0.75;
        emotes_42_small.scaleY = 0.75;
        page2.add(emotes_42_small);

        // ghostbtn2
        const ghostbtn2 = scene.add.image(128, 384, "main", "grey-button");
        ghostbtn2.scaleX = 0.9;
        ghostbtn2.scaleY = 0.9;
        ghostbtn2.alpha = 0.5;
        ghostbtn2.alphaTopLeft = 0.5;
        ghostbtn2.alphaTopRight = 0.5;
        ghostbtn2.alphaBottomLeft = 0.5;
        ghostbtn2.alphaBottomRight = 0.5;
        page2.add(ghostbtn2);

        // gotopg1
        const gotopg1 = scene.add.image(1, 383, "main", "grey-button");
        gotopg1.scaleX = 0.9;
        gotopg1.scaleY = 0.9;
        page2.add(gotopg1);

        // gotopg1arrow
        const gotopg1arrow = scene.add.image(1, 381, "main", "grey-arrow");
        gotopg1arrow.scaleX = 0.9;
        gotopg1arrow.scaleY = 0.9;
        gotopg1arrow.angle = 90;
        gotopg1arrow.flipY = true;
        page2.add(gotopg1arrow);

        // ghostarro2
        const ghostarro2 = scene.add.image(128, 382, "main", "grey-arrow");
        ghostarro2.scaleX = 0.9;
        ghostarro2.scaleY = 0.9;
        ghostarro2.angle = 90;
        ghostarro2.alpha = 0.5;
        ghostarro2.alphaTopLeft = 0.5;
        ghostarro2.alphaTopRight = 0.5;
        ghostarro2.alphaBottomLeft = 0.5;
        ghostarro2.alphaBottomRight = 0.5;
        page2.add(ghostarro2);

        // page1
        const page1 = scene.add.container(-64, -421);
        this.add(page1);

        // emotes
        const emotes = scene.add.image(-37, 421, "main", "emotes");
        emotes.setOrigin(0, 1);
        page1.add(emotes);

        // emote_39
        const emote_39 = scene.add.image(128, 320, "main", "small-box");
        page1.add(emote_39);

        // emote_37
        const emote_37 = scene.add.image(64, 320, "main", "small-box");
        page1.add(emote_37);

        // emote_11
        const emote_11 = scene.add.image(0, 320, "main", "small-box");
        page1.add(emote_11);

        // emote_38
        const emote_38 = scene.add.image(128, 256, "main", "small-box");
        page1.add(emote_38);

        // emote_14
        const emote_14 = scene.add.image(64, 256, "main", "small-box");
        page1.add(emote_14);

        // emote_9
        const emote_9 = scene.add.image(0, 256, "main", "small-box");
        page1.add(emote_9);

        // emote_34
        const emote_34 = scene.add.image(128, 192, "main", "small-box");
        page1.add(emote_34);

        // emote_8
        const emote_8 = scene.add.image(64, 192, "main", "small-box");
        page1.add(emote_8);

        // emote_10
        const emote_10 = scene.add.image(0, 192, "main", "small-box");
        page1.add(emote_10);

        // emote_35
        const emote_35 = scene.add.image(128, 128, "main", "small-box");
        page1.add(emote_35);

        // emote_6
        const emote_6 = scene.add.image(64, 128, "main", "small-box");
        page1.add(emote_6);

        // emote_7
        const emote_7 = scene.add.image(0, 128, "main", "small-box");
        page1.add(emote_7);

        // emote_36
        const emote_36 = scene.add.image(128, 64, "main", "small-box");
        page1.add(emote_36);

        // emote_5
        const emote_5 = scene.add.image(64, 64, "main", "small-box");
        page1.add(emote_5);

        // emote_4
        const emote_4 = scene.add.image(0, 64, "main", "small-box");
        page1.add(emote_4);

        // emote_33
        const emote_33 = scene.add.image(128, 0, "main", "small-box");
        page1.add(emote_33);

        // emote_2
        const emote_2 = scene.add.image(64, 0, "main", "small-box");
        page1.add(emote_2);

        // emote_1
        const emote_1 = scene.add.image(0, 0, "main", "small-box");
        page1.add(emote_1);

        // emotes_11_small
        const emotes_11_small = scene.add.image(-19, 300, "main", "emotes/11-small");
        emotes_11_small.setOrigin(0, 0);
        page1.add(emotes_11_small);

        // emotes_10_small
        const emotes_10_small = scene.add.image(45, 236, "main", "emotes/10-small");
        emotes_10_small.setOrigin(0, 0);
        page1.add(emotes_10_small);

        // emotes_9_small
        const emotes_9_small = scene.add.image(-19, 236, "main", "emotes/9-small");
        emotes_9_small.setOrigin(0, 0);
        page1.add(emotes_9_small);

        // emotes_8_small
        const emotes_8_small = scene.add.image(45, 172, "main", "emotes/8-small");
        emotes_8_small.setOrigin(0, 0);
        page1.add(emotes_8_small);

        // emotes_7_small
        const emotes_7_small = scene.add.image(-19, 172, "main", "emotes/7-small");
        emotes_7_small.setOrigin(0, 0);
        page1.add(emotes_7_small);

        // emotes_6_small
        const emotes_6_small = scene.add.image(45, 108, "main", "emotes/6-small");
        emotes_6_small.setOrigin(0, 0);
        page1.add(emotes_6_small);

        // emotes_5_small
        const emotes_5_small = scene.add.image(-19, 108, "main", "emotes/5-small");
        emotes_5_small.setOrigin(0, 0);
        page1.add(emotes_5_small);

        // emotes_33_small
        const emotes_33_small = scene.add.image(129, 0, "main", "emotes/33");
        emotes_33_small.scaleX = 0.85;
        emotes_33_small.scaleY = 0.85;
        page1.add(emotes_33_small);

        // emotes_34_small
        const emotes_34_small = scene.add.image(128, 191, "main", "emotes/34");
        emotes_34_small.scaleX = 0.85;
        emotes_34_small.scaleY = 0.85;
        page1.add(emotes_34_small);

        // emotes_35_small
        const emotes_35_small = scene.add.image(129, 127, "main", "emotes/35");
        emotes_35_small.scaleX = 0.85;
        emotes_35_small.scaleY = 0.85;
        page1.add(emotes_35_small);

        // emotes_36_small
        const emotes_36_small = scene.add.image(129, 63, "main", "emotes/36");
        emotes_36_small.scaleX = 0.85;
        emotes_36_small.scaleY = 0.85;
        page1.add(emotes_36_small);

        // emotes_37_small
        const emotes_37_small = scene.add.image(64, 320, "main", "emotes/37");
        emotes_37_small.scaleX = 0.85;
        emotes_37_small.scaleY = 0.85;
        page1.add(emotes_37_small);

        // emotes_38_small
        const emotes_38_small = scene.add.image(128, 255, "main", "emotes/38");
        emotes_38_small.scaleX = 0.85;
        emotes_38_small.scaleY = 0.85;
        page1.add(emotes_38_small);

        // emotes_39_small
        const emotes_39_small = scene.add.image(128, 320, "main", "emotes/39");
        emotes_39_small.scaleX = 0.85;
        emotes_39_small.scaleY = 0.85;
        page1.add(emotes_39_small);

        // emotes_4_small
        const emotes_4_small = scene.add.image(45, 45, "main", "emotes/4-small");
        emotes_4_small.setOrigin(0, 0);
        page1.add(emotes_4_small);

        // emotes_3_small
        const emotes_3_small = scene.add.image(-19, 45, "main", "emotes/3-small");
        emotes_3_small.setOrigin(0, 0);
        page1.add(emotes_3_small);

        // emotes_2_small
        const emotes_2_small = scene.add.image(45, -19, "main", "emotes/2-small");
        emotes_2_small.setOrigin(0, 0);
        page1.add(emotes_2_small);

        // emotes_1_small
        const emotes_1_small = scene.add.image(-19, -19, "main", "emotes/1-small");
        emotes_1_small.setOrigin(0, 0);
        page1.add(emotes_1_small);

        // gotopg2
        const gotopg2 = scene.add.image(128, 384, "main", "grey-button");
        gotopg2.scaleX = 0.9;
        gotopg2.scaleY = 0.9;
        page1.add(gotopg2);

        // grey_arrow
        const grey_arrow = scene.add.image(128, 382, "main", "grey-arrow");
        grey_arrow.scaleX = 0.9;
        grey_arrow.scaleY = 0.9;
        grey_arrow.angle = 90;
        page1.add(grey_arrow);

        // ghostpg1
        const ghostpg1 = scene.add.image(1, 383, "main", "grey-button");
        ghostpg1.scaleX = 0.9;
        ghostpg1.scaleY = 0.9;
        ghostpg1.alpha = 0.5;
        ghostpg1.alphaTopLeft = 0.5;
        ghostpg1.alphaTopRight = 0.5;
        ghostpg1.alphaBottomLeft = 0.5;
        ghostpg1.alphaBottomRight = 0.5;
        page1.add(ghostpg1);

        // ghost_arrow_1
        const ghost_arrow_1 = scene.add.image(1, 381, "main", "grey-arrow");
        ghost_arrow_1.scaleX = 0.9;
        ghost_arrow_1.scaleY = 0.9;
        ghost_arrow_1.angle = 90;
        ghost_arrow_1.flipY = true;
        ghost_arrow_1.alpha = 0.5;
        ghost_arrow_1.alphaTopLeft = 0.5;
        ghost_arrow_1.alphaTopRight = 0.5;
        ghost_arrow_1.alphaBottomLeft = 0.5;
        ghost_arrow_1.alphaBottomRight = 0.5;
        page1.add(ghost_arrow_1);

        // emote_16 (components)
        const emote_16Button = new Button(emote_16);
        emote_16Button.spriteName = "small-box";
        emote_16Button.callback = () => { this.onEmoteClick(16) };

        // emote_12 (components)
        const emote_12Button = new Button(emote_12);
        emote_12Button.spriteName = "small-box";
        emote_12Button.callback = () => { this.onEmoteClick(12) };

        // emote_30 (components)
        const emote_30Button = new Button(emote_30);
        emote_30Button.spriteName = "small-box";
        emote_30Button.callback = () => { this.onEmoteClick(30) };

        // emote_26 (components)
        const emote_26Button = new Button(emote_26);
        emote_26Button.spriteName = "small-box";
        emote_26Button.callback = () => { this.onEmoteClick(26) };

        // emote_28 (components)
        const emote_28Button = new Button(emote_28);
        emote_28Button.spriteName = "small-box";
        emote_28Button.callback = () => { this.onEmoteClick(28) };

        // emote_13 (components)
        const emote_13Button = new Button(emote_13);
        emote_13Button.spriteName = "small-box";
        emote_13Button.callback = () => { this.onEmoteClick(13) };

        // emote_24 (components)
        const emote_24Button = new Button(emote_24);
        emote_24Button.spriteName = "small-box";
        emote_24Button.callback = () => { this.onEmoteClick(24) };

        // emote_17 (components)
        const emote_17Button = new Button(emote_17);
        emote_17Button.spriteName = "small-box";
        emote_17Button.callback = () => { this.onEmoteClick(17) };

        // emote_18 (components)
        const emote_18Button = new Button(emote_18);
        emote_18Button.spriteName = "small-box";
        emote_18Button.callback = () => { this.onEmoteClick(18) };

        // emote_29 (components)
        const emote_29Button = new Button(emote_29);
        emote_29Button.spriteName = "small-box";
        emote_29Button.callback = () => { this.onEmoteClick(29) };

        // emote_41 (components)
        const emote_41Button = new Button(emote_41);
        emote_41Button.spriteName = "small-box";
        emote_41Button.callback = () => { this.onEmoteClick(41) };

        // emote_40 (components)
        const emote_40Button = new Button(emote_40);
        emote_40Button.spriteName = "small-box";
        emote_40Button.callback = () => { this.onEmoteClick(40) };

        // emote_44 (components)
        const emote_44Button = new Button(emote_44);
        emote_44Button.spriteName = "small-box";
        emote_44Button.callback = () => { this.onEmoteClick(42) };

        // emote_43 (components)
        const emote_43Button = new Button(emote_43);
        emote_43Button.spriteName = "small-box";
        emote_43Button.callback = () => { this.onEmoteClick(43) };

        // emote_42 (components)
        const emote_42Button = new Button(emote_42);
        emote_42Button.spriteName = "small-box";
        emote_42Button.callback = () => { this.onEmoteClick(44) };

        // gotopg1 (components)
        const gotopg1Button = new Button(gotopg1);
        gotopg1Button.spriteName = "grey-button";
        gotopg1Button.callback = () => this.gotoPage1();
        gotopg1Button.activeFrame = true;

        // emote_39 (components)
        const emote_39Button = new Button(emote_39);
        emote_39Button.spriteName = "small-box";
        emote_39Button.callback = () => { this.onEmoteClick(39) };

        // emote_37 (components)
        const emote_37Button = new Button(emote_37);
        emote_37Button.spriteName = "small-box";
        emote_37Button.callback = () => { this.onEmoteClick(37) };

        // emote_11 (components)
        const emote_11Button = new Button(emote_11);
        emote_11Button.spriteName = "small-box";
        emote_11Button.callback = () => { this.onEmoteClick(11) };

        // emote_38 (components)
        const emote_38Button = new Button(emote_38);
        emote_38Button.spriteName = "small-box";
        emote_38Button.callback = () => { this.onEmoteClick(38) };

        // emote_14 (components)
        const emote_14Button = new Button(emote_14);
        emote_14Button.spriteName = "small-box";
        emote_14Button.callback = () => { this.onEmoteClick(10) };

        // emote_9 (components)
        const emote_9Button = new Button(emote_9);
        emote_9Button.spriteName = "small-box";
        emote_9Button.callback = () => { this.onEmoteClick(9) };

        // emote_34 (components)
        const emote_34Button = new Button(emote_34);
        emote_34Button.spriteName = "small-box";
        emote_34Button.callback = () => { this.onEmoteClick(34) };

        // emote_8 (components)
        const emote_8Button = new Button(emote_8);
        emote_8Button.spriteName = "small-box";
        emote_8Button.callback = () => { this.onEmoteClick(8) };

        // emote_10 (components)
        const emote_10Button = new Button(emote_10);
        emote_10Button.spriteName = "small-box";
        emote_10Button.callback = () => { this.onEmoteClick(7) };

        // emote_35 (components)
        const emote_35Button = new Button(emote_35);
        emote_35Button.spriteName = "small-box";
        emote_35Button.callback = () => { this.onEmoteClick(35) };

        // emote_6 (components)
        const emote_6Button = new Button(emote_6);
        emote_6Button.spriteName = "small-box";
        emote_6Button.callback = () => { this.onEmoteClick(6) };

        // emote_7 (components)
        const emote_7Button = new Button(emote_7);
        emote_7Button.spriteName = "small-box";
        emote_7Button.callback = () => { this.onEmoteClick(5) };

        // emote_36 (components)
        const emote_36Button = new Button(emote_36);
        emote_36Button.spriteName = "small-box";
        emote_36Button.callback = () => { this.onEmoteClick(36) };

        // emote_5 (components)
        const emote_5Button = new Button(emote_5);
        emote_5Button.spriteName = "small-box";
        emote_5Button.callback = () => { this.onEmoteClick(4) };

        // emote_4 (components)
        const emote_4Button = new Button(emote_4);
        emote_4Button.spriteName = "small-box";
        emote_4Button.callback = () => { this.onEmoteClick(3) };

        // emote_33 (components)
        const emote_33Button = new Button(emote_33);
        emote_33Button.spriteName = "small-box";
        emote_33Button.callback = () => { this.onEmoteClick(33) };

        // emote_2 (components)
        const emote_2Button = new Button(emote_2);
        emote_2Button.spriteName = "small-box";
        emote_2Button.callback = () => { this.onEmoteClick(2) };

        // emote_1 (components)
        const emote_1Button = new Button(emote_1);
        emote_1Button.spriteName = "small-box";
        emote_1Button.callback = () => { this.onEmoteClick(1) };

        // gotopg2 (components)
        const gotopg2Button = new Button(gotopg2);
        gotopg2Button.spriteName = "grey-button";
        gotopg2Button.callback = () => this.gotoPage2();
        gotopg2Button.activeFrame = true;

        this.safe = safe;
        this.close = close;
        this.page2 = page2;
        this.page1 = page1;

        /* START-USER-CTR-CODE */

        this.initMenu()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onEmoteClick(emote) {
        this.world.client.sendEmote(emote)
        this.visible = false
    }

    gotoPage1() {
        this.page1.visible = true
        this.page2.visible = false
    }

    gotoPage2() {
        this.page2.visible = true
        this.page1.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
