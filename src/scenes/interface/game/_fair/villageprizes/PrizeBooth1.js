import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton, Interactive } from '@components/components'

import CornDogs from './stands/CornDogs'
import CottonCandy from './stands/CottonCandy'
import FoodItems from './stands/FoodItems'

export const preload = {
    key: 'villageprizes-pack',
    url: 'assets/media/interface/game/_fair/villageprizes/villageprizes-pack.json',
    loadString: ['loading', 'Prize Booth']
}

/* START OF COMPILED CODE */

export default class PrizeBooth1 extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.rope;
        /** @type {Phaser.GameObjects.Container} */
        this._part2;


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
        const bg = scene.add.image(-20, 19, "villageprizes", "bg");
        this.add(bg);

        // _part1
        const _part1 = scene.add.container(105.12109843904204, -35.275614233712076);
        this.add(_part1);

        // candyapples0001
        const candyapples0001 = scene.add.image(-500.12109843904204, -195.72438576628792, "villageprizes", "candyapples0001");
        _part1.add(candyapples0001);

        // candyapplestand
        const candyapplestand = scene.add.image(-502.12109843904204, -93.72438576628792, "villageprizes", "candyapplestand");
        _part1.add(candyapplestand);

        // shelf
        const shelf = scene.add.image(-496.12109843904204, -49.724385766287924, "villageprizes", "shelf");
        _part1.add(shelf);

        // ticketsign1
        const ticketsign1 = scene.add.image(-492.12109843904204, -31.724385766287924, "villageprizes", "ticketsign1");
        _part1.add(ticketsign1);

        // text_1
        const text_1 = scene.add.text(-580.121098439042, -61.724385766287924, "", {});
        text_1.text = "200";
        text_1.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_1.setPadding({"left":10});
        _part1.add(text_1);

        // ticketicon
        const ticketicon = scene.add.image(-436.12109843904204, -30.724385766287924, "villageprizes", "ticketicon");
        _part1.add(ticketicon);

        // bigsign
        const bigsign = scene.add.image(-433.12109843904204, 243.27561423371208, "villageprizes", "bigsign");
        _part1.add(bigsign);

        // corndogs1
        const corndogs1 = new CornDogs(scene, -364.12109843904204, 325.2756142337121);
        _part1.add(corndogs1);

        // fooditems1
        const fooditems1 = new FoodItems(scene, 196.87890156095796, -553.7243857662879);
        _part1.add(fooditems1);

        // cottoncandy1
        const cottoncandy1 = new CottonCandy(scene, -257.12109843904204, -219.72438576628792);
        _part1.add(cottoncandy1);

        // comignsoontxt
        const comignsoontxt = scene.add.text(-669, 103, "", {});
        comignsoontxt.text = "MORE PRIZES\nCOMING SOON!";
        comignsoontxt.setStyle({ "align": "center", "color": "#000", "fixedWidth":450,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097" });
        comignsoontxt.setPadding({"left":10});
        _part1.add(comignsoontxt);

        // _part2
        const _part2 = scene.add.container(-30, -10);
        _part2.visible = false;
        this.add(_part2);

        // rope
        const rope = scene.add.image(170.6717671148167, -373.35919153545774, "villageprizes", "rope");
        _part2.add(rope);

        // cottoncandy2
        const cottoncandy2 = new CottonCandy(scene, -112.3282328851833, -219.35919153545774);
        _part2.add(cottoncandy2);

        // fooditems2
        const fooditems2 = new FoodItems(scene, 342.6717671148167, -581.3591915354577);
        _part2.add(fooditems2);

        // corndogs2
        const corndogs2 = new CornDogs(scene, -215.3282328851833, 309.64080846454226);
        _part2.add(corndogs2);

        // lollipop0001
        const lollipop0001 = scene.add.image(-484.3282328851833, 302.64080846454226, "villageprizes", "lollipop0001");
        _part2.add(lollipop0001);

        // jar
        const jar = scene.add.image(-477.3282328851833, 361.64080846454226, "villageprizes", "jar");
        _part2.add(jar);

        // candyapples
        const candyapples = scene.add.image(-261.3282328851833, 77.64080846454226, "villageprizes", "candyapples0001");
        _part2.add(candyapples);

        // shelf3
        const shelf3 = scene.add.image(-176.3282328851833, 227.64080846454226, "villageprizes", "shelf3");
        _part2.add(shelf3);

        // candyapplestand_1
        const candyapplestand_1 = scene.add.image(-263.3282328851833, 179.64080846454226, "villageprizes", "candyapplestand");
        _part2.add(candyapplestand_1);

        // ticketsign_5
        const ticketsign_5 = scene.add.image(-281.3282328851833, 230.64080846454226, "villageprizes", "ticketsign1");
        _part2.add(ticketsign_5);

        // text_5
        const text_5 = scene.add.text(-369.3282328851833, 200.64080846454226, "", {});
        text_5.text = "200";
        text_5.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_5.setPadding({"left":10});
        _part2.add(text_5);

        // ticketicon_5
        const ticketicon_5 = scene.add.image(-226.3282328851833, 233.64080846454226, "villageprizes", "ticketicon");
        _part2.add(ticketicon_5);

        // nuggets0001
        const nuggets0001 = scene.add.image(-36.3282328851833, 125.64080846454226, "villageprizes", "nuggets0001");
        _part2.add(nuggets0001);

        // ticketsign_6
        const ticketsign_6 = scene.add.image(-53.3282328851833, 231.64080846454226, "villageprizes", "ticketsign1");
        _part2.add(ticketsign_6);

        // ticketicon_6
        const ticketicon_6 = scene.add.image(1.6717671148167028, 234.64080846454226, "villageprizes", "ticketicon");
        _part2.add(ticketicon_6);

        // text_6
        const text_6 = scene.add.text(-143.3282328851833, 201.64080846454226, "", {});
        text_6.text = "500";
        text_6.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_6.setPadding({"left":10});
        _part2.add(text_6);

        // corn0001
        const corn0001 = scene.add.image(-515.3282328851833, -42.35919153545774, "villageprizes", "corn0001");
        _part2.add(corn0001);

        // shelf2
        const shelf2 = scene.add.image(-504.3282328851833, 62.64080846454226, "villageprizes", "shelf2");
        _part2.add(shelf2);

        // ticketsign_7
        const ticketsign_7 = scene.add.image(-504.3282328851833, 101.64080846454226, "villageprizes", "ticketsign1");
        _part2.add(ticketsign_7);

        // text_7
        const text_7 = scene.add.text(-592.3282328851833, 71.64080846454226, "", {});
        text_7.text = "250";
        text_7.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_7.setPadding({"left":10});
        _part2.add(text_7);

        // ticketicon_7
        const ticketicon_7 = scene.add.image(-449.3282328851833, 104.64080846454226, "villageprizes", "ticketicon");
        _part2.add(ticketicon_7);

        // squidstick0001
        const squidstick0001 = scene.add.image(-308.3282328851833, -283.35919153545774, "villageprizes", "squidstick0001");
        _part2.add(squidstick0001);

        // candyapplestand_2
        const candyapplestand_2 = scene.add.image(-325.3282328851833, -171.35919153545774, "villageprizes", "candyapplestand");
        candyapplestand_2.scaleX = 0.5128407900909144;
        _part2.add(candyapplestand_2);

        // shelf_2
        const shelf_2 = scene.add.image(-325.3282328851833, -120.35919153545774, "villageprizes", "shelf");
        _part2.add(shelf_2);

        // ticketsign_8
        const ticketsign_8 = scene.add.image(-332.3282328851833, -104.35919153545774, "villageprizes", "ticketsign1");
        _part2.add(ticketsign_8);

        // text_8
        const text_8 = scene.add.text(-424.3282328851833, -134.35919153545774, "", {});
        text_8.text = "300";
        text_8.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_8.setPadding({"left":10});
        _part2.add(text_8);

        // ticketicon_8
        const ticketicon_8 = scene.add.image(-277.3282328851833, -101.35919153545774, "villageprizes", "ticketicon");
        _part2.add(ticketicon_8);

        // ticketsign_9
        const ticketsign_9 = scene.add.image(-484.3282328851833, 435.64080846454226, "villageprizes", "ticketsign1");
        _part2.add(ticketsign_9);

        // text_9
        const text_9 = scene.add.text(-568.3282328851833, 405.64080846454226, "", {});
        text_9.text = "150";
        text_9.setStyle({ "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097", "shadow.stroke":true,"shadow.fill":true});
        text_9.setPadding({"left":10});
        _part2.add(text_9);

        // ticketicon_9
        const ticketicon_9 = scene.add.image(-429.3282328851833, 438.64080846454226, "villageprizes", "ticketicon");
        _part2.add(ticketicon_9);

        // egg0001
        const egg0001 = scene.add.image(1090, 243, "villageprizes", "egg0001");
        _part2.add(egg0001);

        // fancysign
        const fancysign = scene.add.image(1927, -110, "villageprizes", "fancysign");
        _part2.add(fancysign);

        // nuggetpile
        const nuggetpile = scene.add.image(1519, 119, "villageprizes", "nuggetpile");
        _part2.add(nuggetpile);

        // nuggetmann_1
        const nuggetmann_1 = scene.add.image(1497, 134, "villageprizes", "nuggetmann");
        _part2.add(nuggetmann_1);

        // bignugget0001
        const bignugget0001 = scene.add.image(1497, -8, "villageprizes", "bignugget0001");
        _part2.add(bignugget0001);

        // ticketicon_10
        const ticketicon_10 = scene.add.image(2012, -105, "villageprizes", "ticketicon");
        _part2.add(ticketicon_10);

        // text_10
        const text_10 = scene.add.text(1835, -138, "", {});
        text_10.text = "2500";
        text_10.setStyle({ "color": "#492525ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000046", "shadow.stroke":true,"shadow.fill":true});
        text_10.setPadding({"left":10});
        _part2.add(text_10);

        // fg
        const fg = scene.add.image(1, 12, "villageprizes", "fg");
        this.add(fg);

        // grey_button
        const grey_button = scene.add.image(714, -432, "main", "grey-button");
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(714, -434, "main", "grey-x");
        this.add(grey_x);

        // block (components)
        new Interactive(block);

        // candyapples0001 (components)
        const candyapples0001Button = new Button(candyapples0001);
        candyapples0001Button.spriteName = "candyapples";
        candyapples0001Button.callback = () => this.interface.prompt.showItem(5005);
        candyapples0001Button.lazyName = true;

        // rope (components)
        const ropeSimpleButton = new SimpleButton(rope);
        ropeSimpleButton.callback = () => this.onRopeClick();
        ropeSimpleButton.showOutline = true;

        // lollipop0001 (components)
        const lollipop0001Button = new Button(lollipop0001);
        lollipop0001Button.spriteName = "lollipop";
        lollipop0001Button.callback = () => this.interface.prompt.showItem(336);
        lollipop0001Button.lazyName = true;

        // candyapples (components)
        const candyapplesButton = new Button(candyapples);
        candyapplesButton.spriteName = "candyapples";
        candyapplesButton.callback = () => this.interface.prompt.showItem(5005);
        candyapplesButton.lazyName = true;

        // nuggets0001 (components)
        const nuggets0001Button = new Button(nuggets0001);
        nuggets0001Button.spriteName = "nuggets";
        nuggets0001Button.callback = () => this.interface.prompt.showItem(380612);
        nuggets0001Button.lazyName = true;

        // corn0001 (components)
        const corn0001Button = new Button(corn0001);
        corn0001Button.spriteName = "corn";
        corn0001Button.callback = () => this.interface.prompt.showItem(380594);
        corn0001Button.lazyName = true;

        // squidstick0001 (components)
        const squidstick0001Button = new Button(squidstick0001);
        squidstick0001Button.spriteName = "squidstick";
        squidstick0001Button.callback = () => this.interface.prompt.showItem(380593);
        squidstick0001Button.lazyName = true;

        // egg0001 (components)
        const egg0001Button = new Button(egg0001);
        egg0001Button.spriteName = "egg";
        egg0001Button.callback = () => this.interface.prompt.showItem(380613);
        egg0001Button.lazyName = true;

        // bignugget0001 (components)
        const bignugget0001Button = new Button(bignugget0001);
        bignugget0001Button.spriteName = "bignugget";
        bignugget0001Button.callback = () => this.interface.prompt.showItem(380611);
        bignugget0001Button.lazyName = true;

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => this.close();
        grey_buttonButton.activeFrame = true;

        this.rope = rope;
        this._part2 = _part2;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()
        this.ropeClicked = false
        this._part2.x = -30
    }

    onRopeClick() {
        if (this.ropeClicked) return
        this.ropeClicked = true
        this.scene.tweens.add({
            targets: this._part2,
            duration: 1500,
            ease: 'Cubic',
            x: { from: -30, to: -1495 }
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
