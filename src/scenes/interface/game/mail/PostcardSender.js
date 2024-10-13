import BaseContainer from '@scenes/base/BaseContainer'
import MainPostcardHolder from './MainPostcardHolder'

import { Button, Interactive } from '@components/components'

/* START OF COMPILED CODE */

export default class PostcardSender extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.usernameText;
        /** @type {MainPostcardHolder} */
        this.cardHolder;


        // rectangle_1
        const rectangle_1 = scene.add.rectangle(0, 0, 1520, 960);
        rectangle_1.alpha = 0.1;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 0;
        this.add(rectangle_1);

        // bg_1
        const bg_1 = scene.add.image(0, 0, "mail-book-sendpopup", "bg");
        this.add(bg_1);

        // impostorcard
        const impostorcard = scene.add.image(0, -60, "mail-book-sendpopup", "impostorcard");
        impostorcard.visible = false;
        this.add(impostorcard);

        // yesbtn
        const yesbtn = scene.add.image(-167, 389, "mail-book-sendpopup", "sendbtn");
        this.add(yesbtn);

        // nobtn
        const nobtn = scene.add.image(167, 389, "mail-book-sendpopup", "sendbtn");
        this.add(nobtn);

        // yesno
        const yesno = scene.add.image(0, 389, "mail-book-sendpopup", "yesno");
        this.add(yesno);

        // usernameText
        const usernameText = scene.add.text(-509, 298, "", {});
        usernameText.text = "Send this postcard to misabr from cpmisabr for 10 coins?";
        usernameText.setStyle({ "align": "center", "color": "#000", "fixedWidth":1020,"fontFamily": "Burbank Small", "fontSize": "32px" });
        this.add(usernameText);

        // cardHolder
        const cardHolder = new MainPostcardHolder(scene, -483, -418);
        this.add(cardHolder);

        // closebtn
        const closebtn = scene.add.image(474, -399, "stampbook-inside", "closebtn");
        this.add(closebtn);

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // yesbtn (components)
        const yesbtnButton = new Button(yesbtn);
        yesbtnButton.callback = () => this.onYes();
        yesbtnButton.activeFrame = true;

        // nobtn (components)
        const nobtnButton = new Button(nobtn);
        nobtnButton.callback = () => this.onNo();
        nobtnButton.activeFrame = true;

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.callback = () => this.onNo();
        closebtnButton.activeFrame = true;

        this.usernameText = usernameText;
        this.cardHolder = cardHolder;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    showCard(cardId, userId, username) {
        this.userId = userId
        this.username = username
        this.usernameText.text = `Send this postcard to ${username} for 10 coins?`
        this.loadCard(cardId)
        this.visible = true
    }

    loadCard(id) {
        this.cardId = id
        let cardInfo = {
            postcardId: id,
            id: id,
            username: this.world.client.penguin.displayName
        }
        this.cardHolder.updatePostcard(cardInfo, false)    
    }

    onYes() {
        this.network.send('send_postcard', { userId: this.userId, cardId: this.cardId })
        this.close()
        this.interface.prompt.showWindow('Postcard sent', 'single')
    }

    onNo() {
        this.close()    
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
