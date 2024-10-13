
// You can write more code here
import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Interactive } from '@components/components'

export const preload = {
    key: 'treasureinstructions-pack',
    url: 'assets/media/interface/game/treasurehuntinstructions/treasureinstructions-pack.json',
    loadString: ['loading', 'treasureinstructions']
}
/* START OF COMPILED CODE */

export default class TreasureHuntInstructions extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // block
        const block = scene.add.rectangle(12.996400499553676, -11.3585407236192, 128, 90);
        block.scaleX = 12.036334357595884;
        block.scaleY = 11.350381326698546;
        block.setOrigin(0.017191915249913314, 0.01646058144870876);
        block.alpha = 0.2;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // window
        const window = scene.add.nineslice(760, 480, "prompt", "window", 1136, 664, 51, 41, 45, 43);
        this.add(window);

        // page5
        const page5 = scene.add.container(760, 480);
        page5.visible = false;
        this.add(page5);

        // text45
        const text45 = scene.add.text(0, -129, "", {});
        text45.setOrigin(0.5, 0.5);
        text45.text = "ENDING THE GAME";
        text45.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":500,"fontFamily": "CCComicrazy", "fontSize": "36px", "fontStyle": "bold italic", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        page5.add(text45);

        // text_245
        const text_245 = scene.add.text(0, 31, "", {});
        text_245.setOrigin(0.5, 0.5);
        text_245.text = "The game is over when both players have used all 6 of their turns. All completely revealed treasure on the board has their coin values added up and each player receives that many coins. The more precious treasure you find, the greater the reward.";
        text_245.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial", "fontSize": "36px", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        text_245.setWordWrapWidth(800);
        page5.add(text_245);

        // text_545
        const text_545 = scene.add.text(309, 268, "", {});
        text_545.setOrigin(0.5, 0.5);
        text_545.alpha = 0.5;
        text_545.alphaTopLeft = 0.5;
        text_545.alphaTopRight = 0.5;
        text_545.alphaBottomLeft = 0.5;
        text_545.alphaBottomRight = 0.5;
        text_545.text = "Page 5 of 5";
        text_545.setStyle({ "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "33px", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        page5.add(text_545);

        // polygon_145
        const polygon_145 = scene.add.polygon(47, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_145.isFilled = true;
        page5.add(polygon_145);

        // polygon45
        const polygon45 = scene.add.polygon(85, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon45.isFilled = true;
        page5.add(polygon45);

        // polygon_25
        const polygon_25 = scene.add.polygon(122, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_25.isFilled = true;
        page5.add(polygon_25);

        // polygon_35
        const polygon_35 = scene.add.polygon(159, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_35.isFilled = true;
        page5.add(polygon_35);

        // polygon_445
        const polygon_445 = scene.add.polygon(197, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_445.isFilled = true;
        page5.add(polygon_445);

        // blue_button_345
        const blue_button_345 = scene.add.image(444, 272, "main", "blue-button");
        page5.add(blue_button_345);

        // blue_arrow_245
        const blue_arrow_245 = scene.add.image(444, 270, "main", "blue-arrow");
        blue_arrow_245.angle = 90;
        blue_arrow_245.flipY = true;
        page5.add(blue_arrow_245);

        // page4
        const page4 = scene.add.container(760, 480);
        page4.visible = false;
        this.add(page4);

        // text4
        const text4 = scene.add.text(0, -163, "", {});
        text4.setOrigin(0.5, 0.5);
        text4.text = "SHINES IN THE SAND";
        text4.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":500,"fontFamily": "CCComicrazy", "fontSize": "36px", "fontStyle": "bold italic", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        page4.add(text4);

        // text_24
        const text_24 = scene.add.text(0, -87, "", {});
        text_24.setOrigin(0.5, 0.5);
        text_24.text = "Look out for shines in the sand. This indicates where a piece of treasure is buried.";
        text_24.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial", "fontSize": "36px", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        text_24.setWordWrapWidth(800);
        page4.add(text_24);

        // text_34
        const text_34 = scene.add.text(0, 31, "", {});
        text_34.setOrigin(0.5, 0.5);
        text_34.text = "THE TREASURE";
        text_34.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":500,"fontFamily": "CCComicrazy", "fontSize": "36px", "fontStyle": "bold italic", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        text_34.setWordWrapWidth(500);
        page4.add(text_34);

        // text_44
        const text_44 = scene.add.text(26, 118, "", {});
        text_44.setOrigin(0.5, 0.5);
        text_44.text = "Coins are worth 1 coin each.\n\nGems are worth 25 coins each.";
        text_44.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial", "fontSize": "33px", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        text_44.setLineSpacing(-10);
        text_44.setWordWrapWidth(700);
        page4.add(text_44);

        // text_54
        const text_54 = scene.add.text(309, 268, "", {});
        text_54.setOrigin(0.5, 0.5);
        text_54.alpha = 0.5;
        text_54.alphaTopLeft = 0.5;
        text_54.alphaTopRight = 0.5;
        text_54.alphaBottomLeft = 0.5;
        text_54.alphaBottomRight = 0.5;
        text_54.text = "Page 4 of 5";
        text_54.setStyle({ "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "33px", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        page4.add(text_54);

        // polygon_14
        const polygon_14 = scene.add.polygon(47, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_14.isFilled = true;
        page4.add(polygon_14);

        // polygon4
        const polygon4 = scene.add.polygon(85, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon4.isFilled = true;
        page4.add(polygon4);

        // polygon_24
        const polygon_24 = scene.add.polygon(122, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_24.isFilled = true;
        page4.add(polygon_24);

        // polygon_34
        const polygon_34 = scene.add.polygon(159, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_34.isFilled = true;
        page4.add(polygon_34);

        // polygon_44
        const polygon_44 = scene.add.polygon(197, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_44.alpha = 0.4;
        polygon_44.isFilled = true;
        page4.add(polygon_44);

        // blue_button4
        const blue_button4 = scene.add.image(512, 274, "main", "blue-button");
        page4.add(blue_button4);

        // blue_arrow4
        const blue_arrow4 = scene.add.image(512, 272, "main", "blue-arrow");
        blue_arrow4.angle = 90;
        page4.add(blue_arrow4);

        // blue_button_34
        const blue_button_34 = scene.add.image(444, 272, "main", "blue-button");
        page4.add(blue_button_34);

        // blue_arrow_24
        const blue_arrow_24 = scene.add.image(444, 270, "main", "blue-arrow");
        blue_arrow_24.angle = 90;
        blue_arrow_24.flipY = true;
        page4.add(blue_arrow_24);

        // shine_png
        const shine_png = scene.add.image(-406, -105, "treasurehuntinstructions", "shine.png");
        page4.add(shine_png);

        // coin_png
        const coin_png = scene.add.image(-212, 90, "treasurehuntinstructions", "coin.png");
        page4.add(coin_png);

        // gem_png
        const gem_png = scene.add.image(-232, 144, "treasurehuntinstructions", "gem.png");
        page4.add(gem_png);

        // page3
        const page3 = scene.add.container(760, 480);
        page3.visible = false;
        this.add(page3);

        // text3
        const text3 = scene.add.text(0, -117, "", {});
        text3.setOrigin(0.5, 0.5);
        text3.text = "HOW TO PLAY";
        text3.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":500,"fontFamily": "CCComicrazy", "fontSize": "36px", "fontStyle": "bold italic", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        text3.setWordWrapWidth(500);
        page3.add(text3);

        // text_23
        const text_23 = scene.add.text(0, 35, "", {});
        text_23.setOrigin(0.5, 0.5);
        text_23.text = "Players alternate turns and have 6 turns each. Player 1 selects where a row of sand is dug up and player 2 selects where a column of sand is dug up. Where the rows and columns intersect the sand is dug all the way down to where treasure may be.";
        text_23.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial", "fontSize": "36px", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        text_23.setWordWrapWidth(800);
        page3.add(text_23);

        // text_53
        const text_53 = scene.add.text(309, 268, "", {});
        text_53.setOrigin(0.5, 0.5);
        text_53.alpha = 0.5;
        text_53.alphaTopLeft = 0.5;
        text_53.alphaTopRight = 0.5;
        text_53.alphaBottomLeft = 0.5;
        text_53.alphaBottomRight = 0.5;
        text_53.text = "Page 3 of 5";
        text_53.setStyle({ "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "33px", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        text_53.setWordWrapWidth(700);
        page3.add(text_53);

        // polygon_13
        const polygon_13 = scene.add.polygon(47, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_13.isFilled = true;
        page3.add(polygon_13);

        // polygon3
        const polygon3 = scene.add.polygon(85, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon3.isFilled = true;
        page3.add(polygon3);

        // polygon_23
        const polygon_23 = scene.add.polygon(122, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_23.isFilled = true;
        page3.add(polygon_23);

        // polygon_33
        const polygon_33 = scene.add.polygon(159, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_33.alpha = 0.4;
        polygon_33.isFilled = true;
        page3.add(polygon_33);

        // polygon_43
        const polygon_43 = scene.add.polygon(197, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_43.alpha = 0.4;
        polygon_43.isFilled = true;
        page3.add(polygon_43);

        // blue_button3
        const blue_button3 = scene.add.image(512, 274, "main", "blue-button");
        page3.add(blue_button3);

        // blue_arrow3
        const blue_arrow3 = scene.add.image(512, 272, "main", "blue-arrow");
        blue_arrow3.angle = 90;
        page3.add(blue_arrow3);

        // blue_button_333
        const blue_button_333 = scene.add.image(444, 272, "main", "blue-button");
        page3.add(blue_button_333);

        // blue_arrow_2543
        const blue_arrow_2543 = scene.add.image(444, 270, "main", "blue-arrow");
        blue_arrow_2543.angle = 90;
        blue_arrow_2543.flipY = true;
        page3.add(blue_arrow_2543);

        // page2
        const page2 = scene.add.container(760, 480);
        page2.visible = false;
        this.add(page2);

        // text_32
        const text_32 = scene.add.text(0, -169, "", {});
        text_32.setOrigin(0.5, 0.5);
        text_32.text = "THE BOARD";
        text_32.setStyle({ "color": "#000000ff", "fontFamily": "CCComicrazy", "fontSize": "36px", "fontStyle": "bold italic", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        page2.add(text_32);

        // text_52
        const text_52 = scene.add.text(309, 268, "", {});
        text_52.setOrigin(0.5, 0.5);
        text_52.alpha = 0.5;
        text_52.alphaTopLeft = 0.5;
        text_52.alphaTopRight = 0.5;
        text_52.alphaBottomLeft = 0.5;
        text_52.alphaBottomRight = 0.5;
        text_52.text = "Page 2 of 5";
        text_52.setStyle({ "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "33px", "stroke": "#134263" });
        text_52.setWordWrapWidth(700);
        page2.add(text_52);

        // polygon_12
        const polygon_12 = scene.add.polygon(47, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_12.isFilled = true;
        page2.add(polygon_12);

        // polygon2
        const polygon2 = scene.add.polygon(85, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon2.isFilled = true;
        page2.add(polygon2);

        // polygon_22
        const polygon_22 = scene.add.polygon(122, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_22.alpha = 0.4;
        polygon_22.isFilled = true;
        page2.add(polygon_22);

        // polygon_32
        const polygon_32 = scene.add.polygon(159, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_32.alpha = 0.4;
        polygon_32.isFilled = true;
        page2.add(polygon_32);

        // polygon_42
        const polygon_42 = scene.add.polygon(197, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_42.alpha = 0.4;
        polygon_42.isFilled = true;
        page2.add(polygon_42);

        // blue_button2
        const blue_button2 = scene.add.image(512, 274, "main", "blue-button");
        page2.add(blue_button2);

        // blue_arrow2
        const blue_arrow2 = scene.add.image(512, 272, "main", "blue-arrow");
        blue_arrow2.angle = 90;
        page2.add(blue_arrow2);

        // blue_button_2
        const blue_button_2 = scene.add.image(444, 272, "main", "blue-button");
        page2.add(blue_button_2);

        // blue_arrow_1
        const blue_arrow_1 = scene.add.image(444, 270, "main", "blue-arrow");
        blue_arrow_1.angle = 90;
        blue_arrow_1.flipY = true;
        page2.add(blue_arrow_1);

        // text_7
        const text_7 = scene.add.text(415, -67, "", {});
        text_7.setOrigin(0.5, 0.5);
        text_7.text = "Player 2 chooses which columns are dug.";
        text_7.setStyle({ "color": "#000000ff", "fontFamily": "Arial", "fontSize": "25px", "stroke": "#134263" });
        text_7.setWordWrapWidth(195);
        page2.add(text_7);

        // text_6
        const text_6 = scene.add.text(407, 45, "", {});
        text_6.setOrigin(0.5, 0.5);
        text_6.text = "Player 1 chooses which rows are dug.";
        text_6.setStyle({ "color": "#000000ff", "fontFamily": "Arial", "fontSize": "25px", "stroke": "#134263" });
        text_6.setWordWrapWidth(195);
        page2.add(text_6);

        // text_9
        const text_9 = scene.add.text(418, 163, "", {});
        text_9.setOrigin(0.5, 0.5);
        text_9.text = "Sand is dug all the way down where columns and rows intersect.";
        text_9.setStyle({ "color": "#000000ff", "fontFamily": "Arial", "fontSize": "23px", "stroke": "#134263" });
        text_9.setWordWrapWidth(195);
        page2.add(text_9);

        // text_8
        const text_8 = scene.add.text(-413, -97, "", {});
        text_8.setOrigin(0.5, 0.5);
        text_8.text = "Player 2 Side";
        text_8.setStyle({ "color": "#000000ff", "fontFamily": "Arial", "fontSize": "30px", "stroke": "#134263" });
        text_8.setWordWrapWidth(195);
        page2.add(text_8);

        // text_10
        const text_10 = scene.add.text(-408, 88, "", {});
        text_10.setOrigin(0.5, 0.5);
        text_10.text = "Player 1 Side";
        text_10.setStyle({ "color": "#000000ff", "fontFamily": "Arial", "fontSize": "30px", "stroke": "#134263" });
        text_10.setWordWrapWidth(195);
        page2.add(text_10);

        // theboard_png_1
        const theboard_png_1 = scene.add.image(-51, 59, "treasurehuntinstructions", "theboard.png");
        page2.add(theboard_png_1);

        // page1
        const page1 = scene.add.container(760, 480);
        this.add(page1);

        // text
        const text = scene.add.text(0, -163, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "OBJECT OF THE GAME";
        text.setStyle({ "color": "#000000ff", "fontFamily": "CCComicrazy", "fontSize": "36px", "fontStyle": "bold italic", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        page1.add(text);

        // text_2
        const text_2 = scene.add.text(0, -67, "", {});
        text_2.setOrigin(0.5, 0.5);
        text_2.text = "Players work together to uncover as much buried treasure as they can before they run out of turns.";
        text_2.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial", "fontSize": "36px", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        text_2.setWordWrapWidth(600);
        page1.add(text_2);

        // text_3
        const text_3 = scene.add.text(0, 43, "", {});
        text_3.setOrigin(0.5, 0.5);
        text_3.text = "THE BOARD";
        text_3.setStyle({ "color": "#000000ff", "fontFamily": "CCComicrazy", "fontSize": "36px", "fontStyle": "bold italic", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        page1.add(text_3);

        // text_4
        const text_4 = scene.add.text(0, 151, "", {});
        text_4.setOrigin(0.5, 0.5);
        text_4.text = "Each player has a side of the board (top and left) and controls where along their side of the board sand is dug up from.";
        text_4.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial", "fontSize": "33px", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        text_4.setWordWrapWidth(500);
        page1.add(text_4);

        // text_5
        const text_5 = scene.add.text(309, 268, "", {});
        text_5.setOrigin(0.5, 0.5);
        text_5.alpha = 0.5;
        text_5.alphaTopLeft = 0.5;
        text_5.alphaTopRight = 0.5;
        text_5.alphaBottomLeft = 0.5;
        text_5.alphaBottomRight = 0.5;
        text_5.text = "Page 1 of 5";
        text_5.setStyle({ "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "33px", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        text_5.setWordWrapWidth(700);
        page1.add(text_5);

        // polygon_1
        const polygon_1 = scene.add.polygon(47, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_1.isFilled = true;
        page1.add(polygon_1);

        // polygon
        const polygon = scene.add.polygon(85, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon.alpha = 0.4;
        polygon.isFilled = true;
        page1.add(polygon);

        // polygon_2
        const polygon_2 = scene.add.polygon(122, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_2.alpha = 0.4;
        polygon_2.isFilled = true;
        page1.add(polygon_2);

        // polygon_3
        const polygon_3 = scene.add.polygon(159, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_3.alpha = 0.4;
        polygon_3.isFilled = true;
        page1.add(polygon_3);

        // polygon_4
        const polygon_4 = scene.add.polygon(197, 263, "1.153311635145542 45.41174031466869 1.3348819333690471 17.458090960599407 12.600727485704397 5.850856149102469 32.79662333738145 5.811573126814665 32.60330621423009 45.35955085641274");
        polygon_4.alpha = 0.4;
        polygon_4.isFilled = true;
        page1.add(polygon_4);

        // blue_button
        const blue_button = scene.add.image(512, 274, "main", "blue-button");
        page1.add(blue_button);

        // blue_arrow
        const blue_arrow = scene.add.image(512, 272, "main", "blue-arrow");
        blue_arrow.angle = 90;
        page1.add(blue_arrow);

        // buttons
        const buttons = scene.add.container(515.5541691235741, 262.32643943873194);
        buttons.visible = false;
        this.add(buttons);

        // coins
        const coins = scene.add.text(-109, -387, "", {});
        coins.visible = false;
        coins.text = "New text";
        buttons.add(coins);

        // blue_button_1
        const blue_button_1 = scene.add.image(1268, 209, "main", "blue-button");
        this.add(blue_button_1);

        // blue_x
        const blue_x = scene.add.image(1268, 207, "main", "blue-x");
        this.add(blue_x);

        // text_1
        const text_1 = scene.add.text(760, 225, "", {});
        text_1.setOrigin(0.5, 0.5);
        text_1.text = "HOW TO PLAY TREASURE HUNT";
        text_1.setStyle({ "align": "center", "fixedWidth":1000,"fontFamily": "CCComicrazy", "fontSize": "36px", "fontStyle": "bold italic", "stroke": "#134263", "strokeThickness":10,"shadow.blur":0.00001,"shadow.fill":true});
        this.add(text_1);

        // lists
        const pages = [page1, page2, page3, page4, page5];

        // block (components)
        new Interactive(block);

        // blue_button_345 (components)
        const blue_button_345Button = new Button(blue_button_345);
        blue_button_345Button.spriteName = "blue-button";
        blue_button_345Button.callback = () => this.prevPage();
        blue_button_345Button.activeFrame = true;

        // blue_button4 (components)
        const blue_button4Button = new Button(blue_button4);
        blue_button4Button.spriteName = "blue-button";
        blue_button4Button.callback = () => this.nextPage();
        blue_button4Button.activeFrame = true;

        // blue_button_34 (components)
        const blue_button_34Button = new Button(blue_button_34);
        blue_button_34Button.spriteName = "blue-button";
        blue_button_34Button.callback = () => this.prevPage();
        blue_button_34Button.activeFrame = true;

        // blue_button3 (components)
        const blue_button3Button = new Button(blue_button3);
        blue_button3Button.spriteName = "blue-button";
        blue_button3Button.callback = () => this.nextPage();
        blue_button3Button.activeFrame = true;

        // blue_button_333 (components)
        const blue_button_333Button = new Button(blue_button_333);
        blue_button_333Button.spriteName = "blue-button";
        blue_button_333Button.callback = () => this.prevPage();
        blue_button_333Button.activeFrame = true;

        // blue_button2 (components)
        const blue_button2Button = new Button(blue_button2);
        blue_button2Button.spriteName = "blue-button";
        blue_button2Button.callback = () => this.nextPage();
        blue_button2Button.activeFrame = true;

        // blue_button_2 (components)
        const blue_button_2Button = new Button(blue_button_2);
        blue_button_2Button.spriteName = "blue-button";
        blue_button_2Button.callback = () => this.prevPage();
        blue_button_2Button.activeFrame = true;

        // blue_button (components)
        const blue_buttonButton = new Button(blue_button);
        blue_buttonButton.spriteName = "blue-button";
        blue_buttonButton.callback = () => this.nextPage();
        blue_buttonButton.activeFrame = true;

        // blue_button_1 (components)
        const blue_button_1Button = new Button(blue_button_1);
        blue_button_1Button.spriteName = "blue-button";
        blue_button_1Button.callback = () => this.close();
        blue_button_1Button.activeFrame = true;

        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
