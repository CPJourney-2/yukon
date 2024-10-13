import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'
import moment from 'moment-timezone';

export const preload = {
    key: 'medalseven-pack',
    url: 'assets/media/interface/game/awards/missions/seven/medalseven-pack.json',
    loadString: ['loading', 'award_q7_medal']
}

/* START OF COMPILED CODE */

export default class MedalSeven extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.award_q7_medal_fg0001;
        /** @type {Phaser.GameObjects.Image} */
        this.fish;
        /** @type {Phaser.GameObjects.Image} */
        this.big_hand;
        /** @type {Phaser.GameObjects.Image} */
        this.little_hand;
        /** @type {Phaser.GameObjects.Image} */
        this.glass;


        // block
        const block = scene.add.rectangle(-12, 10, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // award_q7_bg
        const award_q7_bg = scene.add.image(11, -2, "award_q7_medal", "bg");
        this.add(award_q7_bg);

        // award_q7_medal_fg0001
        const award_q7_medal_fg0001 = scene.add.image(-53, -68, "award_q7_medal", "mdeal0001");
        this.add(award_q7_medal_fg0001);

        // fish
        const fish = scene.add.image(12, 43, "award_q7_medal", "fish");
        fish.setOrigin(-2.403486393395413, 0.5);
        fish.visible = false;
        this.add(fish);

        // big_hand
        const big_hand = scene.add.image(13, 41.36506613439974, "award_q7_medal", "big-hand");
        big_hand.setOrigin(0.5, 1.5812888808242385);
        big_hand.visible = false;
        this.add(big_hand);

        // little_hand
        const little_hand = scene.add.image(14, 45, "award_q7_medal", "little-hand");
        little_hand.setOrigin(-0.8069712850147375, 0.5);
        little_hand.visible = false;
        this.add(little_hand);

        // glass
        const glass = scene.add.image(10, 48, "award_q7_medal", "glass");
        glass.visible = false;
        this.add(glass);

        // text_1
        const text_1 = scene.add.text(-120, 253, "", {});
        text_1.text = "Silver Watch Medal";
        text_1.setStyle({ "color": "#000000ff", "fontFamily": "Helvetica", "fontSize": "30px" });
        this.add(text_1);

        // buttons_close
        const buttons_close = scene.add.image(288, -366, "main", "grey-button");
        this.add(buttons_close);

        // grey_x
        const grey_x = scene.add.image(288, -368, "main", "grey-x");
        this.add(grey_x);

        // text_2
        const text_2 = scene.add.text(-185, 299, "", {});
        text_2.text = "Awarded for timely repairs on the \nClub Penguin Clock Tower";
        text_2.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Verdana", "fontSize": "23px" });
        this.add(text_2);

        // block (components)
        new Interactive(block);

        // award_q7_medal_fg0001 (components)
        const award_q7_medal_fg0001SimpleButton = new SimpleButton(award_q7_medal_fg0001);
        award_q7_medal_fg0001SimpleButton.callback = () => this.onMedalClick();

        // buttons_close (components)
        const buttons_closeButton = new Button(buttons_close);
        buttons_closeButton.spriteName = "grey-button";
        buttons_closeButton.callback = () => this.interface.destroyWidget(this);
        buttons_closeButton.activeFrame = true;

        this.award_q7_medal_fg0001 = award_q7_medal_fg0001;
        this.fish = fish;
        this.big_hand = big_hand;
        this.little_hand = little_hand;
        this.glass = glass;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    // Write your code here.

    show() {
        super.show()
        this.medalSlide = 1

        this.syncTime();
        this.world.room.time.addEvent({
            delay: 1000,
            loop: true,
            callback:() => {
                this.syncTime()
            },
        })
    }

    onMedalClick() {
        this.medalSlide++
        if(this.medalSlide > 2) this.medalSlide = 1

        this.award_q7_medal_fg0001.setFrame(`mdeal${this.medalSlide.toString().padStart(4, "0")}`)

        const isOpen = this.medalSlide === 2
        this.fish.visible = isOpen
        this.big_hand.visible = isOpen
        this.little_hand.visible = isOpen
        this.glass.visible = isOpen

    }

    syncTime(){
        const time = moment.tz(Date.now(), "America/Los_Angeles")

        const hour = time.hour();
        const minute = time.minute();
        const second = time.second();

        const hourAngle = (hour % 12) * 30 + (minute / 60) * 30;
        const minuteAngle = minute * 6 + (second / 60) * 6;
        const secondAngle = second * 6;

        this.big_hand.angle = hourAngle;
        this.little_hand.angle = minuteAngle;
        this.fish.angle = secondAngle;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
