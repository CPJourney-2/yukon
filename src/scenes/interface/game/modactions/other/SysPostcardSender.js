import BaseContainer from '@scenes/base/BaseContainer'
import MainPostcardHolder from '../../mail/MainPostcardHolder'
import DualButtons from '@scenes/interface/prompts/buttons/DualButtons'

import { Button, Interactive } from '@components/components'

/* START OF COMPILED CODE */

export default class SysPostcardSender extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.usernameText;
        /** @type {MainPostcardHolder} */
        this.cardHolder;


        // rectangle_1
        const rectangle_1 = scene.add.rectangle(0, 0, 1520, 960);
        rectangle_1.alpha = 0.2;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 0;
        this.add(rectangle_1);

        // nineslice_1
        const nineslice_1 = scene.add.nineslice(-2, 18, "prompt", "window", 800, 750, 43, 38, 40, 40);
        this.add(nineslice_1);

        // usernameText
        const usernameText = scene.add.text(-509, 181, "", {});
        usernameText.text = "Send this postcard to misabr from cpmisabr?";
        usernameText.setStyle({ "align": "center", "color": "#000", "fixedWidth":1020,"fontFamily": "Arial Narrow", "fontSize": "35px" });
        this.add(usernameText);

        // cardHolder
        const cardHolder = new MainPostcardHolder(scene, -340, -323);
        cardHolder.scaleX = 0.7;
        cardHolder.scaleY = 0.7;
        this.add(cardHolder);

        // dualButtons
        const dualButtons = new DualButtons(scene, 0, 298);
        this.add(dualButtons);

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // nineslice_1 (components)
        new Interactive(nineslice_1);

        // dualButtons (prefab fields)
        dualButtons.yesCallback = () => this.onYes();
        dualButtons.noCallback = () => this.onNo();

        this.usernameText = usernameText;
        this.cardHolder = cardHolder;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    showCard(cardId, userId, username, sysmail = false) {
        this.userId = userId
        this.username = username
        this.usernameText.text = `Send this postcard to ${username}?`
        this.sysMail = sysmail
        this.loadCard(cardId)
        this.visible = true
    }

    closeMail() {
        this.visible = false
        this.interface.main.modActions.moreOptions.setInputsVisible(true)
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
        this.network.send('send_sys_mail', {id: this.userId, mail: this.cardId})
        this.closeMail()
    }

    onNo() {
        this.closeMail()    
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
