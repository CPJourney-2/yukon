
// You can write more code here
import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive } from '@components/components'

export const preload = {
    key: 'psaquest-pack',
    url: 'assets/media/interface/game/psaquest/psaquest-pack.json',
    loadString: ['loading', 'Phone Quest']
}
/* START OF COMPILED CODE */

export default class PSAQuest extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.hinty;
        /** @type {Phaser.GameObjects.Image} */
        this.item4;
        /** @type {Phaser.GameObjects.Image} */
        this.item3;
        /** @type {Phaser.GameObjects.Image} */
        this.item2;
        /** @type {Phaser.GameObjects.Image} */
        this.item1;
        /** @type {Phaser.GameObjects.Image} */
        this.item0;
        /** @type {Phaser.GameObjects.Text} */
        this.get_hint;
        /** @type {Phaser.GameObjects.Text} */
        this.hinty_1;
        /** @type {Array<any>} */
        this.items;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // nineslice_1
        const nineslice_1 = scene.add.nineslice(0, 0, "prompt", "window", 776, 612, 43, 38, 40, 40);
        this.add(nineslice_1);

        // hinty
        const hinty = scene.add.text(172, 48, "", {});
        hinty.setOrigin(0.5, 0.5);
        hinty.text = "Having trouble finding the\nphone parts on the island?\nClick \"Get Hint\" for a clue!";
        hinty.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "32px" });
        hinty.setLineSpacing(-5);
        this.add(hinty);

        // settings
        const settings = scene.add.text(155, -204, "", {});
        settings.setOrigin(0.5, 0.5);
        settings.text = "GARY'S \nPHONE QUEST";
        settings.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        this.add(settings);

        // x_button
        const x_button = scene.add.image(317, -250, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(317, -252, "main", "blue-x");
        this.add(blue_x);

        // empty_phone
        const empty_phone = scene.add.image(-185, 4, "psaquest", "empty_phone");
        this.add(empty_phone);

        // item4
        const item4 = scene.add.image(-133, 119, "psaquest", "piece_five");
        item4.visible = false;
        this.add(item4);

        // item3
        const item3 = scene.add.image(-121, -18, "psaquest", "piece_four");
        item3.visible = false;
        this.add(item3);

        // item2
        const item2 = scene.add.image(-237, -104, "psaquest", "piece_one");
        item2.visible = false;
        this.add(item2);

        // item1
        const item1 = scene.add.image(-201, 164, "psaquest", "piece_three");
        item1.visible = false;
        this.add(item1);

        // earnbtn
        const earnbtn = scene.add.image(170, 202, "main-stampcoins", "earnbtn");
        earnbtn.scaleX = 0.6;
        earnbtn.scaleY = 0.6;
        this.add(earnbtn);

        // item0
        const item0 = scene.add.image(-226, 76, "psaquest", "piece_two");
        item0.visible = false;
        this.add(item0);

        // get_hint
        const get_hint = scene.add.text(172, 201, "", {});
        get_hint.setOrigin(0.5, 0.5);
        get_hint.text = "Get Hint";
        get_hint.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":500,"fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold", "stroke": "#003366" });
        this.add(get_hint);

        // hinty_1
        const hinty_1 = scene.add.text(166, -101, "", {});
        hinty_1.setOrigin(0.5, 0.5);
        hinty_1.text = "Try and find all of the phone parts\nhidden across the island.";
        hinty_1.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "26px", "fontStyle": "italic" });
        hinty_1.setPadding({"left":10,"right":10});
        hinty_1.setLineSpacing(-5);
        this.add(hinty_1);

        // lists
        const items = [];

        // block (components)
        new Interactive(block);

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => { this.visible = false };
        x_buttonButton.activeFrame = true;

        // earnbtn (components)
        const earnbtnButton = new Button(earnbtn);
        earnbtnButton.spriteName = "earnbtn";
        earnbtnButton.callback = () => { this.onClaim() };

        this.hinty = hinty;
        this.item4 = item4;
        this.item3 = item3;
        this.item2 = item2;
        this.item1 = item1;
        this.item0 = item0;
        this.get_hint = get_hint;
        this.hinty_1 = hinty_1;
        this.items = items;

        /* START-USER-CTR-CODE */
        // Write your code here.
        this.network.send('scavenger_query')
        this.previous_rand = -1

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    // Write your code here.
    onResult(items) {
        this.items = items

        this.item0.visible = items.includes(0)
        this.item1.visible = items.includes(1)
        this.item2.visible = items.includes(2)
        this.item3.visible = items.includes(3)
        this.item4.visible = items.includes(4)

        this.hints = []

        if(items.length >= 5) {
            this.get_hint.scaleX = 0.9
            this.get_hint.scaleY = 0.9
            this.get_hint.text = "Collect Phone"
        }

    }
    onClaim() {
        let isClaimable = true;
        for(let i = 0; i < 5; i++) {
            if(!this.items.includes(i)){ 
                isClaimable = false;
                this.getHint()
            }
        }

        if(isClaimable){
            this.hinty.text = "Congratulations! \n You found all five parts!\n Click the phone button\n to see your reward."
            this.network.send('add_item', { item: 800 })
            this.interface.main.phone_button.visible = true
            this.interface.main.main_gear.visible = false
        }
    }
    getHint(){

        this.hint0 = "Gary is in quite the kurfuffle.\n Look for this part near a puffle."
        this.hint1 = "A spot that holds some heat.\nBelow where fire \nand secrets greet."
        this.hint2 = "Far away from the lab.\nNearby the crabs."
        this.hint3 = "Follow the rule of fours.\n Or was it five?" 
        this.hint4 = "A room that may have more. \n Look for this part near a board."

        if (!this.item0.visible){
            this.hints.push(this.hint0)
        }
        if (!this.item1.visible){
            this.hints.push(this.hint1)
        }
        if (!this.item2.visible){
            this.hints.push(this.hint2)
        }
        if (!this.item3.visible){
            this.hints.push(this.hint3)
        }
        if (!this.item4.visible){
            this.hints.push(this.hint4)
        }

        let randvar = -2

        if(this.hints.length > 2){
            do{
                randvar = Math.floor(Math.random() * 5)
            }while (randvar == this.previous_rand);
        }
        else if (this.hints.length == 0){
            this.hinty.text = "Congratulations! \n You found the part of the week! \n Please come back next Friday. \n to find the next part."
            return
        }
        this.previous_rand = randvar

        this.hinty.text = this.hints[randvar]

    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
