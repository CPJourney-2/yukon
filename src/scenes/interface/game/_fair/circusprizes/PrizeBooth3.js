import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton, Interactive } from '@components/components'

import Balloons from './stands/Balloons'
import IglooToy from './stands/IglooToy'
import PenguinToy from './stands/PenguinToy'
import PuffleToy from './stands/PuffleToy'
import UFO from './stands/UFO'

export const preload = {
    key: 'circusprizes-pack',
    url: 'assets/media/interface/game/_fair/circusprizes/circusprizes-pack.json',
    loadString: ['loading', 'Prize Booth']
}

/* START OF COMPILED CODE */

export default class PrizeBooth3 extends BaseContainer {

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
        const bg = scene.add.image(-22, 18, "circusprizes", "bg");
        this.add(bg);

        // poster0001
        const poster0001 = scene.add.image(-677, 194, "circusprizes", "poster0001");
        this.add(poster0001);

        // _part2
        const _part2 = scene.add.container(-664, -347);
        _part2.visible = false;
        this.add(_part2);

        // vinyl0001
        const vinyl0001 = scene.add.image(0, 219, "circusprizes", "vinyl0001");
        _part2.add(vinyl0001);

        // ticketsign_6
        const ticketsign_6 = scene.add.image(652, 729, "circusprizes", "ticketsign1");
        ticketsign_6.scaleX = 0.9;
        ticketsign_6.scaleY = 0.9;
        _part2.add(ticketsign_6);

        // text_8
        const text_8 = scene.add.text(642, 727, "", {});
        text_8.scaleX = 0.9;
        text_8.scaleY = 0.9;
        text_8.setOrigin(0.5, 0.5);
        text_8.text = "125";
        text_8.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_8.setPadding({"left":10});
        _part2.add(text_8);

        // ticketicon_8
        const ticketicon_8 = scene.add.image(703, 729, "circusprizes", "ticketicon");
        ticketicon_8.scaleX = 0.9;
        ticketicon_8.scaleY = 0.9;
        _part2.add(ticketicon_8);

        // block0001
        const block0001 = scene.add.image(488, 761, "circusprizes", "block0001");
        _part2.add(block0001);

        // ticketsign
        const ticketsign = scene.add.image(848, 0, "circusprizes", "ticketsign2");
        _part2.add(ticketsign);

        // text_1
        const text_1 = scene.add.text(828, 2, "", {});
        text_1.setOrigin(0.5, 0.5);
        text_1.text = "125";
        text_1.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_1.setPadding({"left":10});
        _part2.add(text_1);

        // ticketicon_2
        const ticketicon_2 = scene.add.image(889, 4, "circusprizes", "ticketicon");
        _part2.add(ticketicon_2);

        // balloonsword0001
        const balloonsword0001 = scene.add.image(934, 35, "circusprizes", "balloonsword0001");
        _part2.add(balloonsword0001);

        // puffletoy2
        const puffletoy2 = new PuffleToy(scene, 634, 104);
        _part2.add(puffletoy2);

        // penguintoy2
        const penguintoy2 = new PenguinToy(scene, 917, 309);
        _part2.add(penguintoy2);

        // iglootoy2
        const iglootoy2 = new IglooToy(scene, 617, 432);
        _part2.add(iglootoy2);

        // balloons2
        const balloons2 = new Balloons(scene, 136, 274);
        _part2.add(balloons2);

        // ufo2
        const ufo2 = new UFO(scene, 180, 34);
        _part2.add(ufo2);

        // balloonhat0001
        const balloonhat0001 = scene.add.image(1219, 346, "circusprizes", "balloonhat0001");
        _part2.add(balloonhat0001);

        // shelf_3
        const shelf_3 = scene.add.image(1245, 519, "circusprizes", "shelf");
        _part2.add(shelf_3);

        // ticketsign_4
        const ticketsign_4 = scene.add.image(1251, 537, "circusprizes", "ticketsign1");
        _part2.add(ticketsign_4);

        // text_6
        const text_6 = scene.add.text(1238, 535, "", {});
        text_6.setOrigin(0.5, 0.5);
        text_6.text = "250";
        text_6.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_6.setPadding({"left":10});
        _part2.add(text_6);

        // ticketicon_6
        const ticketicon_6 = scene.add.image(1302, 537, "circusprizes", "ticketicon");
        _part2.add(ticketicon_6);

        // flowerballoon0001
        const flowerballoon0001 = scene.add.image(1235, 43, "circusprizes", "flowerballoon0001");
        _part2.add(flowerballoon0001);

        // ticketsign_5
        const ticketsign_5 = scene.add.image(1079, 120, "circusprizes", "ticketsign1");
        _part2.add(ticketsign_5);

        // ticketicon_7
        const ticketicon_7 = scene.add.image(1130, 120, "circusprizes", "ticketicon");
        _part2.add(ticketicon_7);

        // text_7
        const text_7 = scene.add.text(1061, 118, "", {});
        text_7.setOrigin(0.5, 0.5);
        text_7.text = "300";
        text_7.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_7.setPadding({"left":10});
        _part2.add(text_7);

        // findfour0001
        const findfour0001 = scene.add.image(912, 724, "circusprizes", "findfour0001");
        findfour0001.visible = false;
        _part2.add(findfour0001);

        // container_2
        const container_2 = scene.add.container(732, 742);
        container_2.scaleX = 0.8452890169782792;
        container_2.angle = -5;
        container_2.visible = false;
        _part2.add(container_2);

        // ticketsign_7
        const ticketsign_7 = scene.add.image(13, 2, "circusprizes", "ticketsign1");
        ticketsign_7.scaleX = 0.9;
        ticketsign_7.scaleY = 0.9;
        container_2.add(ticketsign_7);

        // text_9
        const text_9 = scene.add.text(0, 0, "", {});
        text_9.scaleX = 0.9;
        text_9.scaleY = 0.9;
        text_9.setOrigin(0.5, 0.5);
        text_9.text = "999";
        text_9.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_9.setPadding({"left":10});
        container_2.add(text_9);

        // ticketicon_9
        const ticketicon_9 = scene.add.image(64, 2, "circusprizes", "ticketicon");
        ticketicon_9.scaleX = 0.9;
        ticketicon_9.scaleY = 0.9;
        container_2.add(ticketicon_9);

        // photo0001
        const photo0001 = scene.add.image(949, 683, "circusprizes", "photo0001");
        _part2.add(photo0001);

        // ticketsign_8
        const ticketsign_8 = scene.add.image(1066, 766, "circusprizes", "ticketsign1");
        _part2.add(ticketsign_8);

        // ticketicon_10
        const ticketicon_10 = scene.add.image(1117, 766, "circusprizes", "ticketicon");
        _part2.add(ticketicon_10);

        // text_10
        const text_10 = scene.add.text(1047, 764, "", {});
        text_10.setOrigin(0.5, 0.5);
        text_10.text = "300";
        text_10.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_10.setPadding({"left":10});
        _part2.add(text_10);

        // _part1
        const _part1 = scene.add.container(-487, -303);
        this.add(_part1);

        // puffletoy
        const puffletoy = new PuffleToy(scene, 579, 64);
        _part1.add(puffletoy);

        // penguintoy
        const penguintoy = new PenguinToy(scene, 874, 149);
        _part1.add(penguintoy);

        // iglootoy
        const iglootoy = new IglooToy(scene, 536, 434);
        _part1.add(iglootoy);

        // balloons
        const balloons = new Balloons(scene, 0, 234);
        _part1.add(balloons);

        // ufo
        const ufo = new UFO(scene, 68, 0);
        _part1.add(ufo);

        // moreprizesign
        const moreprizesign = scene.add.image(910, 593, "circusprizes", "moreprizesign");
        _part1.add(moreprizesign);

        // text_11
        const text_11 = scene.add.text(828, 482, "", {});
        text_11.angle = 3.0000000000000004;
        text_11.text = "MORE\nPRIZES\nCOMING\nSOON!";
        text_11.setStyle({ "align": "center", "color": "#7F4513", "fontFamily": "Burbank Small", "fontSize": "36px", "fontStyle": "bold italic" });
        _part1.add(text_11);

        // pin
        const pin = scene.add.image(-476, 402, "circusprizes", "pin");
        this.add(pin);

        // fg
        const fg = scene.add.image(0, 11, "circusprizes", "fg");
        this.add(fg);

        // grey_button
        const grey_button = scene.add.image(701, -432, "main", "grey-button");
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(701, -434, "main", "grey-x");
        this.add(grey_x);

        // block (components)
        new Interactive(block);

        // poster0001 (components)
        const poster0001Button = new Button(poster0001);
        poster0001Button.spriteName = "poster";
        poster0001Button.callback = () => this.interface.prompt.showItem(4418);
        poster0001Button.lazyName = true;

        // vinyl0001 (components)
        const vinyl0001Button = new Button(vinyl0001);
        vinyl0001Button.spriteName = "vinyl";
        vinyl0001Button.callback = () => this.interface.prompt.showFurniture(12194);
        vinyl0001Button.pixelPerfect = true;
        vinyl0001Button.lazyName = true;

        // block0001 (components)
        const block0001Button = new Button(block0001);
        block0001Button.spriteName = "block";
        block0001Button.callback = () => this.interface.prompt.showFurniture(12195);
        block0001Button.pixelPerfect = true;
        block0001Button.lazyName = true;

        // balloonsword0001 (components)
        const balloonsword0001Button = new Button(balloonsword0001);
        balloonsword0001Button.spriteName = "balloonsword";
        balloonsword0001Button.callback = () => this.interface.prompt.showItem(5497);
        balloonsword0001Button.pixelPerfect = true;
        balloonsword0001Button.lazyName = true;

        // balloonhat0001 (components)
        const balloonhat0001Button = new Button(balloonhat0001);
        balloonhat0001Button.spriteName = "balloonhat";
        balloonhat0001Button.callback = () => this.interface.prompt.showItem(1303);
        balloonhat0001Button.pixelPerfect = true;
        balloonhat0001Button.lazyName = true;

        // flowerballoon0001 (components)
        const flowerballoon0001Button = new Button(flowerballoon0001);
        flowerballoon0001Button.spriteName = "flowerballoon";
        flowerballoon0001Button.callback = () => this.interface.prompt.showItem(1176);
        flowerballoon0001Button.pixelPerfect = true;
        flowerballoon0001Button.lazyName = true;

        // findfour0001 (components)
        const findfour0001Button = new Button(findfour0001);
        findfour0001Button.spriteName = "findfour";
        findfour0001Button.callback = () => this.interface.prompt.showFurniture(12199);
        findfour0001Button.pixelPerfect = true;
        findfour0001Button.lazyName = true;

        // photo0001 (components)
        const photo0001Button = new Button(photo0001);
        photo0001Button.spriteName = "photo";
        photo0001Button.callback = () => this.interface.prompt.showItem(380628);
        photo0001Button.pixelPerfect = true;
        photo0001Button.lazyName = true;

        // pin (components)
        const pinSimpleButton = new SimpleButton(pin);
        pinSimpleButton.callback = () => this.interface.prompt.showItem(7120);

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => this.close();
        grey_buttonButton.activeFrame = true;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
