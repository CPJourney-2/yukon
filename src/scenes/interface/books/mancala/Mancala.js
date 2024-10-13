
// You can write more code here
import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive } from '@components/components'

/*export const preload = {
    key: 'howtoplay-pack',
    url: 'assets/media/interface/books/mancala/howtoplay-pack.json',
    loadString: ['loading', 'howtoplay']
}*/
/* START OF COMPILED CODE */

export default class Mancala extends BookContainer {

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
        text45.text = "HOW TO WIN";
        text45.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":500,"fontFamily": "CCComicrazy", "fontSize": "36px", "fontStyle": "bold italic", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        page5.add(text45);

        // text_245
        const text_245 = scene.add.text(0, 14, "", {});
        text_245.setOrigin(0.5, 0.5);
        text_245.text = "The game is over when a player has no more stones on their side of the board. The winner is the player with the greatest total amount of stones in their mancala, and any remaining stones on their side of the board.";
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
        text4.text = "FREE TURNS";
        text4.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":500,"fontFamily": "CCComicrazy", "fontSize": "36px", "fontStyle": "bold italic", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        page4.add(text4);

        // text_24
        const text_24 = scene.add.text(0, -87, "", {});
        text_24.setOrigin(0.5, 0.5);
        text_24.text = "If the last stone lands in the player's own mancala, that player goes again.";
        text_24.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial", "fontSize": "36px", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        text_24.setWordWrapWidth(800);
        page4.add(text_24);

        // text_34
        const text_34 = scene.add.text(0, 10, "", {});
        text_34.setOrigin(0.5, 0.5);
        text_34.text = "CAPTURES";
        text_34.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":500,"fontFamily": "CCComicrazy", "fontSize": "36px", "fontStyle": "bold italic", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        text_34.setWordWrapWidth(500);
        page4.add(text_34);

        // text_44
        const text_44 = scene.add.text(0, 118, "", {});
        text_44.setOrigin(0.5, 0.5);
        text_44.text = "If the last stone is dropped in an empty hole on the player's own side, they capture all the stones from the opponent's hole directly opposite that hole, including their stone.";
        text_44.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial", "fontSize": "33px", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
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
        const text_23 = scene.add.text(0, 21, "", {});
        text_23.setOrigin(0.5, 0.5);
        text_23.text = "Players alternate turns. In their turn, each player selects a group of stones from one hole on their side of the board. Each stone is dropped one by one in the holes around the board, including their mancala but not the opponent's mancala.";
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

        // text_22
        const text_22 = scene.add.text(-68, -66, "", {});
        text_22.setOrigin(0.5, 0.5);
        text_22.text = "Player 2 Side";
        text_22.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial", "fontSize": "33px", "stroke": "#134263" });
        text_22.setWordWrapWidth(800);
        page2.add(text_22);

        // text_32
        const text_32 = scene.add.text(0, -134, "", {});
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

        // boardgraph
        const boardgraph = scene.add.container(-1, 37);
        page2.add(boardgraph);

        // board_1
        const board_1 = scene.add.roundedRectangleGraphics(0, 0, 500, 150);
        board_1.fillColor = 0;
        board_1.fillAlpha = 0.2;
        board_1.isStroked = false;
        board_1.radiusTopLeft = 25;
        board_1.radiusTopRight = 25;
        board_1.radiusBottomLeft = 25;
        board_1.radiusBottomRight = 25;
        boardgraph.add(board_1);

        // board
        const board = scene.add.roundedRectangleGraphics(0, 0, 490, 140);
        board.fillColor = 7909002;
        board.strokeColor = 6326893;
        board.lineWidth = 4;
        board.radiusTopLeft = 25;
        board.radiusTopRight = 25;
        board.radiusBottomLeft = 25;
        board.radiusBottomRight = 25;
        boardgraph.add(board);

        // board_2
        const board_2 = scene.add.roundedRectangleGraphics(208, 0, 75, 140);
        board_2.fillColor = 16030526;
        board_2.strokeColor = 12811056;
        board_2.lineWidth = 4;
        board_2.radiusTopLeft = 0;
        board_2.radiusTopRight = 25;
        board_2.radiusBottomLeft = 0;
        board_2.radiusBottomRight = 25;
        boardgraph.add(board_2);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(-3, 31, 360, 70);
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 16030526;
        boardgraph.add(rectangle_1);

        // rectangle
        const rectangle = scene.add.rectangle(2, 68, 370, 4);
        rectangle.isFilled = true;
        rectangle.fillColor = 12811056;
        boardgraph.add(rectangle);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(181, -31, 20, 70);
        rectangle_2.isFilled = true;
        rectangle_2.fillColor = 16030526;
        boardgraph.add(rectangle_2);

        // rectangle_3
        const rectangle_3 = scene.add.rectangle(-182, 119, 6, 22);
        rectangle_3.isFilled = true;
        rectangle_3.fillColor = 0;
        boardgraph.add(rectangle_3);

        // rectangle_4
        const rectangle_4 = scene.add.rectangle(-182, 93, 6, 22);
        rectangle_4.isFilled = true;
        rectangle_4.fillColor = 0;
        boardgraph.add(rectangle_4);

        // rectangle_5
        const rectangle_5 = scene.add.rectangle(-182, 66, 6, 22);
        rectangle_5.isFilled = true;
        rectangle_5.fillColor = 0;
        boardgraph.add(rectangle_5);

        // rectangle_6
        const rectangle_6 = scene.add.rectangle(-182, 11, 6, 22);
        rectangle_6.isFilled = true;
        rectangle_6.fillColor = 0;
        boardgraph.add(rectangle_6);

        // rectangle_7
        const rectangle_7 = scene.add.rectangle(-182, 38, 6, 22);
        rectangle_7.isFilled = true;
        rectangle_7.fillColor = 0;
        boardgraph.add(rectangle_7);

        // rectangle_8
        const rectangle_8 = scene.add.rectangle(-165, -4, 6, 22);
        rectangle_8.angle = 90;
        rectangle_8.isFilled = true;
        rectangle_8.fillColor = 0;
        boardgraph.add(rectangle_8);

        // rectangle_9
        const rectangle_9 = scene.add.rectangle(-138, -4, 6, 22);
        rectangle_9.angle = 90;
        rectangle_9.isFilled = true;
        rectangle_9.fillColor = 0;
        boardgraph.add(rectangle_9);

        // rectangle_10
        const rectangle_10 = scene.add.rectangle(-111, -4, 6, 22);
        rectangle_10.angle = 90;
        rectangle_10.isFilled = true;
        rectangle_10.fillColor = 0;
        boardgraph.add(rectangle_10);

        // rectangle_11
        const rectangle_11 = scene.add.rectangle(-84, -4, 6, 22);
        rectangle_11.angle = 90;
        rectangle_11.isFilled = true;
        rectangle_11.fillColor = 0;
        boardgraph.add(rectangle_11);

        // rectangle_12
        const rectangle_12 = scene.add.rectangle(-30, -4, 6, 22);
        rectangle_12.angle = 90;
        rectangle_12.isFilled = true;
        rectangle_12.fillColor = 0;
        boardgraph.add(rectangle_12);

        // rectangle_13
        const rectangle_13 = scene.add.rectangle(-57, -4, 6, 22);
        rectangle_13.angle = 90;
        rectangle_13.isFilled = true;
        rectangle_13.fillColor = 0;
        boardgraph.add(rectangle_13);

        // rectangle_14
        const rectangle_14 = scene.add.rectangle(-3, -4, 6, 22);
        rectangle_14.angle = 90;
        rectangle_14.isFilled = true;
        rectangle_14.fillColor = 0;
        boardgraph.add(rectangle_14);

        // rectangle_15
        const rectangle_15 = scene.add.rectangle(24, -4, 6, 22);
        rectangle_15.angle = 90;
        rectangle_15.isFilled = true;
        rectangle_15.fillColor = 0;
        boardgraph.add(rectangle_15);

        // rectangle_16
        const rectangle_16 = scene.add.rectangle(51, -4, 6, 22);
        rectangle_16.angle = 90;
        rectangle_16.isFilled = true;
        rectangle_16.fillColor = 0;
        boardgraph.add(rectangle_16);

        // rectangle_17
        const rectangle_17 = scene.add.rectangle(78, -4, 6, 22);
        rectangle_17.angle = 90;
        rectangle_17.isFilled = true;
        rectangle_17.fillColor = 0;
        boardgraph.add(rectangle_17);

        // rectangle_18
        const rectangle_18 = scene.add.rectangle(105, -4, 6, 22);
        rectangle_18.angle = 90;
        rectangle_18.isFilled = true;
        rectangle_18.fillColor = 0;
        boardgraph.add(rectangle_18);

        // rectangle_19
        const rectangle_19 = scene.add.rectangle(132, -4, 6, 22);
        rectangle_19.angle = 90;
        rectangle_19.isFilled = true;
        rectangle_19.fillColor = 0;
        boardgraph.add(rectangle_19);

        // rectangle_20
        const rectangle_20 = scene.add.rectangle(159, -4, 6, 22);
        rectangle_20.angle = 90;
        rectangle_20.isFilled = true;
        rectangle_20.fillColor = 0;
        boardgraph.add(rectangle_20);

        // rectangle_21
        const rectangle_21 = scene.add.rectangle(171, -131, 6, 22);
        rectangle_21.isFilled = true;
        rectangle_21.fillColor = 0;
        boardgraph.add(rectangle_21);

        // rectangle_22
        const rectangle_22 = scene.add.rectangle(171, -104, 6, 22);
        rectangle_22.isFilled = true;
        rectangle_22.fillColor = 0;
        boardgraph.add(rectangle_22);

        // rectangle_23
        const rectangle_23 = scene.add.rectangle(171, -76, 6, 22);
        rectangle_23.isFilled = true;
        rectangle_23.fillColor = 0;
        boardgraph.add(rectangle_23);

        // rectangle_24
        const rectangle_24 = scene.add.rectangle(171, -23, 6, 22);
        rectangle_24.isFilled = true;
        rectangle_24.fillColor = 0;
        boardgraph.add(rectangle_24);

        // rectangle_25
        const rectangle_25 = scene.add.rectangle(171, -49, 6, 22);
        rectangle_25.isFilled = true;
        rectangle_25.fillColor = 0;
        boardgraph.add(rectangle_25);

        // board_3
        const board_3 = scene.add.roundedRectangleGraphics(-212, 1, 40, 110);
        board_3.fillColor = 7909002;
        board_3.strokeColor = 6326893;
        board_3.lineWidth = 4;
        board_3.radiusTopLeft = 15;
        board_3.radiusTopRight = 15;
        board_3.radiusBottomLeft = 15;
        board_3.radiusBottomRight = 15;
        boardgraph.add(board_3);

        // board_4
        const board_4 = scene.add.roundedRectangleGraphics(209, 1, 40, 110);
        board_4.isFilled = false;
        board_4.fillColor = 7909002;
        board_4.strokeColor = 12811056;
        board_4.lineWidth = 4;
        board_4.radiusTopLeft = 15;
        board_4.radiusTopRight = 15;
        board_4.radiusBottomLeft = 15;
        board_4.radiusBottomRight = 15;
        boardgraph.add(board_4);

        // ellipse_2
        const ellipse_2 = scene.add.ellipse(-141, 34, 45, 45);
        ellipse_2.isStroked = true;
        ellipse_2.strokeColor = 12811056;
        ellipse_2.lineWidth = 4;
        boardgraph.add(ellipse_2);

        // ellipse
        const ellipse = scene.add.ellipse(-85, 34, 45, 45);
        ellipse.isStroked = true;
        ellipse.strokeColor = 12811056;
        ellipse.lineWidth = 4;
        boardgraph.add(ellipse);

        // ellipse_1
        const ellipse_1 = scene.add.ellipse(-30, 34, 45, 45);
        ellipse_1.isStroked = true;
        ellipse_1.strokeColor = 12811056;
        ellipse_1.lineWidth = 4;
        boardgraph.add(ellipse_1);

        // ellipse_3
        const ellipse_3 = scene.add.ellipse(25, 33, 45, 45);
        ellipse_3.isStroked = true;
        ellipse_3.strokeColor = 12811056;
        ellipse_3.lineWidth = 4;
        boardgraph.add(ellipse_3);

        // ellipse_4
        const ellipse_4 = scene.add.ellipse(136, 33, 45, 45);
        ellipse_4.isStroked = true;
        ellipse_4.strokeColor = 12811056;
        ellipse_4.lineWidth = 4;
        boardgraph.add(ellipse_4);

        // ellipse_5
        const ellipse_5 = scene.add.ellipse(81, 33, 45, 45);
        ellipse_5.isStroked = true;
        ellipse_5.strokeColor = 12811056;
        ellipse_5.lineWidth = 4;
        boardgraph.add(ellipse_5);

        // ellipse_6
        const ellipse_6 = scene.add.ellipse(80, -39, 45, 45);
        ellipse_6.isStroked = true;
        ellipse_6.strokeColor = 6326893;
        ellipse_6.lineWidth = 4;
        boardgraph.add(ellipse_6);

        // ellipse_7
        const ellipse_7 = scene.add.ellipse(135, -39, 45, 45);
        ellipse_7.isStroked = true;
        ellipse_7.strokeColor = 6326893;
        ellipse_7.lineWidth = 4;
        boardgraph.add(ellipse_7);

        // ellipse_8
        const ellipse_8 = scene.add.ellipse(24, -39, 45, 45);
        ellipse_8.isStroked = true;
        ellipse_8.strokeColor = 6326893;
        ellipse_8.lineWidth = 4;
        boardgraph.add(ellipse_8);

        // ellipse_9
        const ellipse_9 = scene.add.ellipse(-31, -38, 45, 45);
        ellipse_9.isStroked = true;
        ellipse_9.strokeColor = 6326893;
        ellipse_9.lineWidth = 4;
        boardgraph.add(ellipse_9);

        // ellipse_10
        const ellipse_10 = scene.add.ellipse(-86, -38, 45, 45);
        ellipse_10.isStroked = true;
        ellipse_10.strokeColor = 6326893;
        ellipse_10.lineWidth = 4;
        boardgraph.add(ellipse_10);

        // ellipse_11
        const ellipse_11 = scene.add.ellipse(-142, -38, 45, 45);
        ellipse_11.isStroked = true;
        ellipse_11.strokeColor = 6326893;
        ellipse_11.lineWidth = 4;
        boardgraph.add(ellipse_11);

        // text_6
        const text_6 = scene.add.text(61, 139, "", {});
        text_6.setOrigin(0.5, 0.5);
        text_6.text = "Player 1 Side";
        text_6.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial", "fontSize": "33px", "stroke": "#134263" });
        text_6.setWordWrapWidth(800);
        page2.add(text_6);

        // triangle_1
        const triangle_1 = scene.add.triangle(-216, 40, 0, 128, 64, 0, 128, 128);
        triangle_1.scaleX = 0.22106864304749396;
        triangle_1.scaleY = 0.1724850725870641;
        triangle_1.angle = 90;
        triangle_1.isFilled = true;
        triangle_1.fillColor = 0;
        page2.add(triangle_1);

        // rectangle_26
        const rectangle_26 = scene.add.rectangle(-248, 40, 20, 20);
        rectangle_26.scaleX = 2.3692486347080646;
        rectangle_26.scaleY = 0.2976855863175931;
        rectangle_26.isFilled = true;
        rectangle_26.fillColor = 0;
        page2.add(rectangle_26);

        // triangle
        const triangle = scene.add.triangle(210, 37, 0, 128, 64, 0, 128, 128);
        triangle.scaleX = 0.22106864304749396;
        triangle.scaleY = 0.1724850725870641;
        triangle.angle = -90;
        triangle.isFilled = true;
        triangle.fillColor = 0;
        page2.add(triangle);

        // rectangle_27
        const rectangle_27 = scene.add.rectangle(239, 37, 20, 20);
        rectangle_27.scaleX = 2.3692486347080646;
        rectangle_27.scaleY = 0.2976855863175931;
        rectangle_27.isFilled = true;
        rectangle_27.fillColor = 0;
        page2.add(rectangle_27);

        // text_7
        const text_7 = scene.add.text(328, 40, "", {});
        text_7.setOrigin(0.5, 0.5);
        text_7.text = "Player 1\nMancala";
        text_7.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial", "fontSize": "30px", "stroke": "#134263" });
        text_7.setWordWrapWidth(800);
        page2.add(text_7);

        // text_8
        const text_8 = scene.add.text(-339, 40, "", {});
        text_8.setOrigin(0.5, 0.5);
        text_8.text = "Player 2\nMancala";
        text_8.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial", "fontSize": "30px", "stroke": "#134263" });
        text_8.setWordWrapWidth(800);
        page2.add(text_8);

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
        text_2.text = "Each player attempts to collect as many stones as possible before one of the players clears their side of stones.";
        text_2.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial", "fontSize": "36px", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        text_2.setWordWrapWidth(800);
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
        text_4.text = "Each player has a side of the board (top and bottom). The six holes nearest each player belong to them and their large holes or mancala is to the right.";
        text_4.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial", "fontSize": "33px", "stroke": "#134263", "shadow.blur":0.00001,"shadow.fill":true});
        text_4.setWordWrapWidth(700);
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
        text_1.text = "HOW TO PLAY MANCALA";
        text_1.setStyle({ "fontFamily": "CCComicrazy", "fontSize": "36px", "fontStyle": "bold italic", "stroke": "#134263", "strokeThickness":10,"shadow.blur":0.00001,"shadow.fill":true});
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
