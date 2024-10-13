import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton, Interactive } from '@components/components'

import Bear from './stands/Bear'
import Beaver from './stands/Beaver'
import Bunny from './stands/Bunny'
import Monkey from './stands/Monkey'
import Shark from './stands/Shark'
import Turtle from './stands/Turtle'
import Unicorn from './stands/Unicorn'

export const preload = {
    key: 'forestprizes-pack',
    url: 'assets/media/interface/game/_fair/forestprizes/forestprizes-pack.json',
    loadString: ['loading', 'Prize Booth']
}

/* START OF COMPILED CODE */

export default class PrizeBooth2 extends BaseContainer {

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
        const bg = scene.add.image(1, 20, "forestprizes", "bg");
        this.add(bg);

        // poster
        const poster = scene.add.image(-640, -85, "forestprizes", "poster");
        this.add(poster);

        // grey_button
        const grey_button = scene.add.image(701, -432, "main", "grey-button");
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(701, -434, "main", "grey-x");
        this.add(grey_x);

        // _part1
        const _part1 = scene.add.container(-492, -287);
        this.add(_part1);

        // bigsign
        const bigsign = scene.add.image(380, 11, "forestprizes", "bigsign");
        _part1.add(bigsign);

        // comignsoontxt
        const comignsoontxt = scene.add.text(144, 0, "", {});
        comignsoontxt.text = "MORE PRIZES\nCOMING SOON!";
        comignsoontxt.setStyle({ "align": "center", "color": "#000", "fixedWidth":450,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#00000097" });
        comignsoontxt.setPadding({"left":10});
        _part1.add(comignsoontxt);

        // turtle1
        const turtle1 = new Turtle(scene, 6, 255);
        _part1.add(turtle1);

        // bear1
        const bear1 = new Bear(scene, 312, 333);
        _part1.add(bear1);

        // bunny1
        const bunny1 = new Bunny(scene, 620, 242);
        _part1.add(bunny1);

        // rectangle_5
        const rectangle_5 = scene.add.rectangle(907, 17, 4, 300);
        rectangle_5.isFilled = true;
        rectangle_5.fillColor = 0;
        _part1.add(rectangle_5);

        // rectangle_6
        const rectangle_6 = scene.add.rectangle(1015, -6, 4, 250);
        rectangle_6.isFilled = true;
        rectangle_6.fillColor = 0;
        _part1.add(rectangle_6);

        // rectangle_7
        const rectangle_7 = scene.add.rectangle(832, -70, 4, 128);
        rectangle_7.isFilled = true;
        rectangle_7.fillColor = 0;
        _part1.add(rectangle_7);

        // rectangle_8
        const rectangle_8 = scene.add.rectangle(705, -70, 4, 128);
        rectangle_8.isFilled = true;
        rectangle_8.fillColor = 0;
        _part1.add(rectangle_8);

        // monkey1
        const monkey1 = new Monkey(scene, 762, 5);
        _part1.add(monkey1);

        // shark1
        const shark1 = new Shark(scene, -5, 616);
        _part1.add(shark1);

        // beaver1
        const beaver1 = new Beaver(scene, 638, 611);
        _part1.add(beaver1);

        // unicorn1
        const unicorn1 = new Unicorn(scene, 857, 507);
        _part1.add(unicorn1);

        // _part2
        const _part2 = scene.add.container(-599, -329);
        _part2.visible = false;
        this.add(_part2);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(334, -29, 4, 128);
        rectangle_2.isFilled = true;
        rectangle_2.fillColor = 0;
        _part2.add(rectangle_2);

        // rectangle
        const rectangle = scene.add.rectangle(463, -27, 4, 128);
        rectangle.isFilled = true;
        rectangle.fillColor = 0;
        _part2.add(rectangle);

        // rectangle_3
        const rectangle_3 = scene.add.rectangle(646, 9, 4, 200);
        rectangle_3.isFilled = true;
        rectangle_3.fillColor = 0;
        _part2.add(rectangle_3);

        // rectangle_4
        const rectangle_4 = scene.add.rectangle(537, 18, 4, 220);
        rectangle_4.isFilled = true;
        rectangle_4.fillColor = 0;
        _part2.add(rectangle_4);

        // monkey
        const monkey = new Monkey(scene, 390, 0);
        _part2.add(monkey);

        // plush10001
        const plush10001 = scene.add.image(881, 64, "forestprizes", "plush10001");
        _part2.add(plush10001);

        // plush30001
        const plush30001 = scene.add.image(1115, 69, "forestprizes", "plush30001");
        _part2.add(plush30001);

        // plush20001
        const plush20001 = scene.add.image(973, 64, "forestprizes", "plush20001");
        _part2.add(plush20001);

        // plush40001
        const plush40001 = scene.add.image(804, 125, "forestprizes", "plush40001");
        _part2.add(plush40001);

        // plush50001
        const plush50001 = scene.add.image(882, 181, "forestprizes", "plush50001");
        _part2.add(plush50001);

        // plush80001
        const plush80001 = scene.add.image(1181, 181, "forestprizes", "plush80001");
        _part2.add(plush80001);

        // plush70001
        const plush70001 = scene.add.image(1119, 189, "forestprizes", "plush70001");
        _part2.add(plush70001);

        // plush60001
        const plush60001 = scene.add.image(982, 180, "forestprizes", "plush60001");
        _part2.add(plush60001);

        // plush90001
        const plush90001 = scene.add.image(786, 274, "forestprizes", "plush90001");
        _part2.add(plush90001);

        // plush110001
        const plush110001 = scene.add.image(923, 298, "forestprizes", "plush110001");
        _part2.add(plush110001);

        // plush100001
        const plush100001 = scene.add.image(873, 313, "forestprizes", "plush100001");
        _part2.add(plush100001);

        // plush130001
        const plush130001 = scene.add.image(1169, 330, "forestprizes", "plush130001");
        _part2.add(plush130001);

        // plush120001
        const plush120001 = scene.add.image(1083, 307, "forestprizes", "plush120001");
        _part2.add(plush120001);

        // plush140001
        const plush140001 = scene.add.image(825, 450, "forestprizes", "plush140001");
        _part2.add(plush140001);

        // plush150001
        const plush150001 = scene.add.image(928, 443, "forestprizes", "plush150001");
        _part2.add(plush150001);

        // plush180001
        const plush180001 = scene.add.image(1188, 464, "forestprizes", "plush180001");
        _part2.add(plush180001);

        // plush170001
        const plush170001 = scene.add.image(1108, 452, "forestprizes", "plush170001");
        _part2.add(plush170001);

        // plush160001
        const plush160001 = scene.add.image(1026, 446, "forestprizes", "plush160001");
        _part2.add(plush160001);

        // basket
        const basket = scene.add.image(1018, 612, "forestprizes", "basket");
        _part2.add(basket);

        // ticketsign_5
        const ticketsign_5 = scene.add.nineslice(1125, 576, "forestprizes", "ticketsign1", 230, 110, 25, 26, 27, 29);
        _part2.add(ticketsign_5);

        // ticketicon_7
        const ticketicon_7 = scene.add.image(1191, 573, "forestprizes", "ticketicon");
        _part2.add(ticketicon_7);

        // text_7
        const text_7 = scene.add.text(1085, 573, "", {});
        text_7.setOrigin(0.5, 0.5);
        text_7.text = "400\nEACH!";
        text_7.setStyle({ "align": "center", "color": "#3d3120ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "43px", "fontStyle": "bold italic", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.color": "#1b0e0e51", "shadow.stroke":true,"shadow.fill":true});
        text_7.setPadding({"left":10});
        text_7.setLineSpacing(-10);
        _part2.add(text_7);

        // unicorn
        const unicorn = new Unicorn(scene, 692, 551);
        _part2.add(unicorn);

        // shark
        const shark = new Shark(scene, 0, 656);
        _part2.add(shark);

        // bunny
        const bunny = new Bunny(scene, 102, 93);
        _part2.add(bunny);

        // beaver
        const beaver = new Beaver(scene, 491, 684);
        beaver.scaleX = 0.9;
        beaver.scaleY = 0.9;
        _part2.add(beaver);

        // bear
        const bear = new Bear(scene, 338, 293);
        _part2.add(bear);

        // turtle
        const turtle = new Turtle(scene, 77, 396);
        _part2.add(turtle);

        // block (components)
        new Interactive(block);

        // poster (components)
        const posterSimpleButton = new SimpleButton(poster);
        posterSimpleButton.callback = () => this.interface.prompt.showItem(380580);

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => this.close();
        grey_buttonButton.activeFrame = true;

        // plush10001 (components)
        const plush10001Button = new Button(plush10001);
        plush10001Button.spriteName = "plush1";
        plush10001Button.callback = () => this.interface.prompt.showItem(380596);
        plush10001Button.pixelPerfect = true;
        plush10001Button.lazyName = true;

        // plush30001 (components)
        const plush30001Button = new Button(plush30001);
        plush30001Button.spriteName = "plush3";
        plush30001Button.callback = () => this.interface.prompt.showItem(380600);
        plush30001Button.pixelPerfect = true;
        plush30001Button.lazyName = true;

        // plush20001 (components)
        const plush20001Button = new Button(plush20001);
        plush20001Button.spriteName = "plush2";
        plush20001Button.callback = () => this.interface.prompt.showItem(380603);
        plush20001Button.pixelPerfect = true;
        plush20001Button.lazyName = true;

        // plush40001 (components)
        const plush40001Button = new Button(plush40001);
        plush40001Button.spriteName = "plush4";
        plush40001Button.callback = () => this.interface.prompt.showItem(380598);
        plush40001Button.pixelPerfect = true;
        plush40001Button.lazyName = true;

        // plush50001 (components)
        const plush50001Button = new Button(plush50001);
        plush50001Button.spriteName = "plush5";
        plush50001Button.callback = () => this.interface.prompt.showItem(380601);
        plush50001Button.pixelPerfect = true;
        plush50001Button.lazyName = true;

        // plush80001 (components)
        const plush80001Button = new Button(plush80001);
        plush80001Button.spriteName = "plush8";
        plush80001Button.callback = () => this.interface.prompt.showItem(380602);
        plush80001Button.pixelPerfect = true;
        plush80001Button.lazyName = true;

        // plush70001 (components)
        const plush70001Button = new Button(plush70001);
        plush70001Button.spriteName = "plush7";
        plush70001Button.callback = () => this.interface.prompt.showItem(380595);
        plush70001Button.pixelPerfect = true;
        plush70001Button.lazyName = true;

        // plush60001 (components)
        const plush60001Button = new Button(plush60001);
        plush60001Button.spriteName = "plush6";
        plush60001Button.callback = () => this.interface.prompt.showItem(380599);
        plush60001Button.pixelPerfect = true;
        plush60001Button.lazyName = true;

        // plush90001 (components)
        const plush90001Button = new Button(plush90001);
        plush90001Button.spriteName = "plush9";
        plush90001Button.callback = () => this.interface.prompt.showItem(380597);
        plush90001Button.pixelPerfect = true;
        plush90001Button.lazyName = true;

        // plush110001 (components)
        const plush110001Button = new Button(plush110001);
        plush110001Button.spriteName = "plush11";
        plush110001Button.callback = () => this.interface.prompt.showItem(380589);
        plush110001Button.pixelPerfect = true;
        plush110001Button.lazyName = true;

        // plush100001 (components)
        const plush100001Button = new Button(plush100001);
        plush100001Button.spriteName = "plush10";
        plush100001Button.callback = () => this.interface.prompt.showItem(380586);
        plush100001Button.pixelPerfect = true;
        plush100001Button.lazyName = true;

        // plush130001 (components)
        const plush130001Button = new Button(plush130001);
        plush130001Button.spriteName = "plush13";
        plush130001Button.callback = () => this.interface.prompt.showItem(380581);
        plush130001Button.pixelPerfect = true;
        plush130001Button.lazyName = true;

        // plush120001 (components)
        const plush120001Button = new Button(plush120001);
        plush120001Button.spriteName = "plush12";
        plush120001Button.callback = () => this.interface.prompt.showItem(380585);
        plush120001Button.pixelPerfect = true;
        plush120001Button.lazyName = true;

        // plush140001 (components)
        const plush140001Button = new Button(plush140001);
        plush140001Button.spriteName = "plush14";
        plush140001Button.callback = () => this.interface.prompt.showItem(380588);
        plush140001Button.pixelPerfect = true;
        plush140001Button.lazyName = true;

        // plush150001 (components)
        const plush150001Button = new Button(plush150001);
        plush150001Button.spriteName = "plush15";
        plush150001Button.callback = () => this.interface.prompt.showItem(380583);
        plush150001Button.pixelPerfect = true;
        plush150001Button.lazyName = true;

        // plush180001 (components)
        const plush180001Button = new Button(plush180001);
        plush180001Button.spriteName = "plush18";
        plush180001Button.callback = () => this.interface.prompt.showItem(380582);
        plush180001Button.pixelPerfect = true;
        plush180001Button.lazyName = true;

        // plush170001 (components)
        const plush170001Button = new Button(plush170001);
        plush170001Button.spriteName = "plush17";
        plush170001Button.callback = () => this.interface.prompt.showItem(380584);
        plush170001Button.pixelPerfect = true;
        plush170001Button.lazyName = true;

        // plush160001 (components)
        const plush160001Button = new Button(plush160001);
        plush160001Button.spriteName = "plush16";
        plush160001Button.callback = () => this.interface.prompt.showItem(380587);
        plush160001Button.pixelPerfect = true;
        plush160001Button.lazyName = true;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
