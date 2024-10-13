import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive } from '@components/components'

export const preload = {
    key: 'ticketinfo-pack',
    url: 'assets/media/interface/game/_fair/ticketinfo/ticketinfo-pack.json',
    loadString: ['loading', 'Ticket Info']
}

/* START OF COMPILED CODE */

export default class TicketInfo extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.prize1Doll;
        /** @type {Phaser.GameObjects.Image} */
        this.prize2Doll;
        /** @type {Phaser.GameObjects.Image} */
        this.prize3Doll;
        /** @type {Phaser.GameObjects.Container} */
        this.prize1Locked;
        /** @type {Phaser.GameObjects.Container} */
        this.prize1Unlocked;
        /** @type {Phaser.GameObjects.Container} */
        this.prize2Unlocked;
        /** @type {Phaser.GameObjects.Container} */
        this.prize2Locked;
        /** @type {Phaser.GameObjects.Container} */
        this.prize3Unlocked;
        /** @type {Phaser.GameObjects.Container} */
        this.prize3Locked;


        // block
        const block = scene.add.rectangle(-12, 10, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.2;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // bg
        const bg = scene.add.image(0, 0, "ticketinfo", "bg");
        this.add(bg);

        // bonus_prizes
        const bonus_prizes = scene.add.image(333, -313, "ticketinfo", "bonus_prizes");
        this.add(bonus_prizes);

        // ticket_info
        const ticket_info = scene.add.image(-246, -285, "ticketinfo", "ticket_info");
        this.add(ticket_info);

        // ticketwarning
        const ticketwarning = scene.add.image(-361, 299, "ticketinfo", "ticketwarning");
        this.add(ticketwarning);

        // logo
        const logo = scene.add.image(-506, -290, "ticketinfo", "logo");
        this.add(logo);

        // step1
        const step1 = scene.add.text(-639, -196, "", {});
        step1.text = "Step 1";
        step1.setStyle({ "color": "#412C18", "fixedWidth":110,"fixedHeight":40,"fontFamily": "Burbank Small", "fontSize": "33px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        this.add(step1);

        // step2
        const step2 = scene.add.text(-639, -68, "", {});
        step2.text = "Step 2";
        step2.setStyle({ "color": "#412C18", "fixedWidth":110,"fixedHeight":40,"fontFamily": "Burbank Small", "fontSize": "33px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        this.add(step2);

        // step3
        const step3 = scene.add.text(-639, 94.680908203125, "", {});
        step3.text = "Step 3";
        step3.setStyle({ "color": "#412C18", "fixedWidth":110,"fixedHeight":40,"fontFamily": "Burbank Small", "fontSize": "33px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        this.add(step3);

        // step1description
        const step1description = scene.add.text(-639, -157, "", {});
        step1description.text = "Play any of The Fair games to\nwin tickets.";
        step1description.setStyle({ "color": "#412C18", "fixedWidth":500,"fixedHeight":80,"fontFamily": "Burbank Small", "fontSize": "33px", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        step1description.setLineSpacing(-5);
        this.add(step1description);

        // step2description
        const step2description = scene.add.text(-639, -26, "", {});
        step2description.text = "Go to a prize booth at the Forest,\nSki Village, or the entrance to the\nGreat Puffle Circus.";
        step2description.setStyle({ "color": "#412C18", "fixedWidth":550,"fixedHeight":140,"fontFamily": "Burbank Small", "fontSize": "33px", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        step2description.setLineSpacing(-5);
        this.add(step2description);

        // step3description
        const step3description = scene.add.text(-639, 138, "", {});
        step3description.text = "Walk to the booth and trade your\ntickets for prizes!";
        step3description.setStyle({ "color": "#412C18", "fixedWidth":500,"fixedHeight":80,"fontFamily": "Burbank Small", "fontSize": "33px", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        step3description.setLineSpacing(-5);
        this.add(step3description);

        // bonusprizesdescription
        const bonusprizesdescription = scene.add.text(60, -272, "", {});
        bonusprizesdescription.text = "Collect these bonus prizes by\naccomplishing tasks in The Fair!";
        bonusprizesdescription.setStyle({ "align": "center", "color": "#183C41", "fixedWidth":550,"fixedHeight":80,"fontFamily": "Burbank Small", "fontSize": "33px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        this.add(bonusprizesdescription);

        // bonus_prize_bg
        const bonus_prize_bg = scene.add.image(337, -89, "ticketinfo", "bonus_prize_bg");
        this.add(bonus_prize_bg);

        // bonus_prize_bg_1
        const bonus_prize_bg_1 = scene.add.image(337, 96, "ticketinfo", "bonus_prize_bg");
        bonus_prize_bg_1.visible = false;
        this.add(bonus_prize_bg_1);

        // bonus_prize_bg_2
        const bonus_prize_bg_2 = scene.add.image(337, 283, "ticketinfo", "bonus_prize_bg");
        bonus_prize_bg_2.visible = false;
        this.add(bonus_prize_bg_2);

        // prize1Doll
        const prize1Doll = scene.add.image(160, -111, "ticketinfo", "coveredintickets");
        this.add(prize1Doll);

        // prize2Doll
        const prize2Doll = scene.add.image(160, 74, "ticketinfo", "catastrophe");
        prize2Doll.visible = false;
        this.add(prize2Doll);

        // prize3Doll
        const prize3Doll = scene.add.image(160, 259, "ticketinfo", "catastrophe");
        prize3Doll.visible = false;
        this.add(prize3Doll);

        // grey_button
        const grey_button = scene.add.image(625, -342, "main", "grey-button");
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(625, -344, "main", "grey-x");
        this.add(grey_x);

        // prize1Locked
        const prize1Locked = scene.add.container(258, -154);
        this.add(prize1Locked);

        // prize1lockedtext
        const prize1lockedtext = scene.add.text(0, 0, "", {});
        prize1lockedtext.text = "Unlock by having 2500 tickets at one time";
        prize1lockedtext.setStyle({ "align": "center", "color": "#183C41", "fixedWidth":320,"fixedHeight":150,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        prize1lockedtext.setWordWrapWidth(300);
        prize1Locked.add(prize1lockedtext);

        // prize1Unlocked
        const prize1Unlocked = scene.add.container(258, -167);
        prize1Unlocked.visible = false;
        this.add(prize1Unlocked);

        // prize1congrats
        const prize1congrats = scene.add.text(0, 0, "", {});
        prize1congrats.text = "Congrats! You unlocked:";
        prize1congrats.setStyle({ "align": "center", "color": "#183C41", "fixedWidth":320,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        prize1congrats.setWordWrapWidth(300);
        prize1Unlocked.add(prize1congrats);

        // prize1name
        const prize1name = scene.add.text(0, 26, "", {});
        prize1name.text = "Covered in Tickets";
        prize1name.setStyle({ "align": "center", "color": "#183C41", "fixedWidth":320,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        prize1name.setWordWrapWidth(300);
        prize1Unlocked.add(prize1name);

        // prize1claimbtn
        const prize1claimbtn = scene.add.image(164, 107, "ticketinfo", "button");
        prize1Unlocked.add(prize1claimbtn);

        // prize1claimprize
        const prize1claimprize = scene.add.text(61, 85, "", {});
        prize1claimprize.text = "Claim Prize";
        prize1claimprize.setStyle({ "align": "center", "color": "#183C41", "fixedWidth":200,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        prize1claimprize.setWordWrapWidth(300);
        prize1Unlocked.add(prize1claimprize);

        // prize2Unlocked
        const prize2Unlocked = scene.add.container(258, 14);
        prize2Unlocked.visible = false;
        this.add(prize2Unlocked);

        // prize2congrats
        const prize2congrats = scene.add.text(0, 0, "", {});
        prize2congrats.text = "Congrats! You unlocked:";
        prize2congrats.setStyle({ "align": "center", "color": "#183C41", "fixedWidth":320,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        prize2congrats.setWordWrapWidth(300);
        prize2Unlocked.add(prize2congrats);

        // prize2name
        const prize2name = scene.add.text(0, 26, "", {});
        prize2name.text = "The Cat-Tastrophe";
        prize2name.setStyle({ "align": "center", "color": "#183C41", "fixedWidth":320,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        prize2name.setWordWrapWidth(300);
        prize2Unlocked.add(prize2name);

        // prize2claimbtn
        const prize2claimbtn = scene.add.image(164, 107, "ticketinfo", "button");
        prize2Unlocked.add(prize2claimbtn);

        // prize2claimprize
        const prize2claimprize = scene.add.text(61, 85, "", {});
        prize2claimprize.text = "Claim Prize";
        prize2claimprize.setStyle({ "align": "center", "color": "#183C41", "fixedWidth":200,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        prize2claimprize.setWordWrapWidth(300);
        prize2Unlocked.add(prize2claimprize);

        // prize2Locked
        const prize2Locked = scene.add.container(258, 21);
        prize2Locked.visible = false;
        this.add(prize2Locked);

        // prize2lockedtext
        const prize2lockedtext = scene.add.text(0, 0, "", {});
        prize2lockedtext.text = "Unlock by collecting all cat stuffies from the Forest's prize booth";
        prize2lockedtext.setStyle({ "align": "center", "color": "#183C41", "fixedWidth":320,"fixedHeight":150,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        prize2lockedtext.setWordWrapWidth(300);
        prize2Locked.add(prize2lockedtext);

        // prize3Unlocked
        const prize3Unlocked = scene.add.container(258, 202);
        prize3Unlocked.visible = false;
        this.add(prize3Unlocked);

        // prize3congrats
        const prize3congrats = scene.add.text(0, 0, "", {});
        prize3congrats.text = "Congrats! You unlocked:";
        prize3congrats.setStyle({ "align": "center", "color": "#183C41", "fixedWidth":320,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        prize3congrats.setWordWrapWidth(300);
        prize3Unlocked.add(prize3congrats);

        // prize3name
        const prize3name = scene.add.text(0, 26, "", {});
        prize3name.text = "The Cat-Tastrophe";
        prize3name.setStyle({ "align": "center", "color": "#183C41", "fixedWidth":320,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        prize3name.setWordWrapWidth(300);
        prize3Unlocked.add(prize3name);

        // prize3claimbtn
        const prize3claimbtn = scene.add.image(164, 107, "ticketinfo", "button");
        prize3Unlocked.add(prize3claimbtn);

        // prize3claimprize
        const prize3claimprize = scene.add.text(61, 85, "", {});
        prize3claimprize.text = "Claim Prize";
        prize3claimprize.setStyle({ "align": "center", "color": "#183C41", "fixedWidth":200,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        prize3claimprize.setWordWrapWidth(300);
        prize3Unlocked.add(prize3claimprize);

        // prize3Locked
        const prize3Locked = scene.add.container(258, 209);
        prize3Locked.visible = false;
        this.add(prize3Locked);

        // prize3lockedtext
        const prize3lockedtext = scene.add.text(0, 0, "", {});
        prize3lockedtext.text = "Unlock by collecting all dog stuffies from the Forest's prize booth";
        prize3lockedtext.setStyle({ "align": "center", "color": "#183C41", "fixedWidth":320,"fixedHeight":150,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        prize3lockedtext.setWordWrapWidth(300);
        prize3Locked.add(prize3lockedtext);

        // bonusprizesdescription_1
        const bonusprizesdescription_1 = scene.add.text(63, 63, "", {});
        bonusprizesdescription_1.text = "More bonus prizes will be available next week!";
        bonusprizesdescription_1.setStyle({ "align": "center", "color": "#183C41", "fixedWidth":550,"fixedHeight":200,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold", "shadow.offsetX":4,"shadow.offsetY":4,"shadow.color": "#0000003f", "shadow.stroke":true,"shadow.fill":true});
        bonusprizesdescription_1.setWordWrapWidth(500);
        this.add(bonusprizesdescription_1);

        // block (components)
        new Interactive(block);

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => this.close();
        grey_buttonButton.activeFrame = true;

        // prize1claimbtn (components)
        const prize1claimbtnButton = new Button(prize1claimbtn);
        prize1claimbtnButton.spriteName = "button";
        prize1claimbtnButton.callback = () => this.interface.prompt.showItem(380614);

        // prize2claimbtn (components)
        const prize2claimbtnButton = new Button(prize2claimbtn);
        prize2claimbtnButton.spriteName = "button";
        prize2claimbtnButton.callback = () => this.interface.prompt.showItem(380590);

        // prize3claimbtn (components)
        const prize3claimbtnButton = new Button(prize3claimbtn);
        prize3claimbtnButton.spriteName = "button";
        prize3claimbtnButton.callback = () => this.interface.prompt.showItem(380627);

        this.prize1Doll = prize1Doll;
        this.prize2Doll = prize2Doll;
        this.prize3Doll = prize3Doll;
        this.prize1Locked = prize1Locked;
        this.prize1Unlocked = prize1Unlocked;
        this.prize2Unlocked = prize2Unlocked;
        this.prize2Locked = prize2Locked;
        this.prize3Unlocked = prize3Unlocked;
        this.prize3Locked = prize3Locked;

        /* START-USER-CTR-CODE */
        this.cats = [380581, 380582, 380583, 380584, 380585, 380586, 380587, 380588, 380589]
        this.dogs = [380595, 380596, 380597, 380598, 380599, 380600, 380601, 380602, 380603]
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()

        if (this.world.client.partyCoins >= 2500 || this.world.client.hasItemBetter(380614)) {
            this.prize1Unlocked.visible = true
            this.prize1Locked.visible = false
            this.prize1Doll.clearTint()
        } else {
            this.prize1Unlocked.visible = false
            this.prize1Locked.visible = true
            this.prize1Doll.setTintFill(0x183C41)    
        }

        /*if (this.cats.every(id => this.world.client.hasItemBetter(id))) {
            this.prize2Unlocked.visible = true
            this.prize2Locked.visible = false
            this.prize2Doll.clearTint()
        } else {
            this.prize2Unlocked.visible = false
            this.prize2Locked.visible = true
            this.prize2Doll.setTintFill(0x183C41)    
        }

        if (this.dogs.every(id => this.world.client.hasItemBetter(id))) {
            this.prize3Unlocked.visible = true
            this.prize3Locked.visible = false
            this.prize3Doll.clearTint()
        } else {
            this.prize3Unlocked.visible = false
            this.prize3Locked.visible = true
            this.prize3Doll.setTintFill(0x183C41)    
        }*/
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
