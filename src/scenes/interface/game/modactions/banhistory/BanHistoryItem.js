import BaseContainer from "@scenes/base/BaseContainer";
import { SimpleButton } from "@components/components";

/* START OF COMPILED CODE */

export default class BanHistoryItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? -1, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.issued;
        /** @type {Phaser.GameObjects.Text} */
        this.expiry;
        /** @type {Phaser.GameObjects.Text} */
        this.username;
        /** @type {Phaser.GameObjects.Text} */
        this.reason;

        // rectangle_4
        const rectangle_4 = scene.add.rectangle(168, 52, 330, 100);
        rectangle_4.isFilled = true;
        rectangle_4.isStroked = true;
        rectangle_4.strokeColor = 0;
        rectangle_4.lineWidth = 5;
        this.add(rectangle_4);

        // rectangle_5
        const rectangle_5 = scene.add.rectangle(496, 52, 330, 100);
        rectangle_5.isFilled = true;
        rectangle_5.isStroked = true;
        rectangle_5.strokeColor = 0;
        rectangle_5.lineWidth = 5;
        this.add(rectangle_5);

        // rectangle_6
        const rectangle_6 = scene.add.rectangle(805, 53, 300, 100);
        rectangle_6.isFilled = true;
        rectangle_6.isStroked = true;
        rectangle_6.strokeColor = 0;
        rectangle_6.lineWidth = 5;
        this.add(rectangle_6);

        // rectangle_7
        const rectangle_7 = scene.add.rectangle(1123, 53, 340, 100);
        rectangle_7.isFilled = true;
        rectangle_7.isStroked = true;
        rectangle_7.strokeColor = 0;
        rectangle_7.lineWidth = 5;
        this.add(rectangle_7);

        // issued
        const issued = scene.add.text(11, 10, "", {});
        issued.text = "Issued";
        issued.setStyle({ "color": "#000", "fixedWidth":310,"fontFamily": "Arial Narrow", "fontSize": "30px" });
        issued.setLineSpacing(-5);
        issued.setWordWrapWidth(310);
        this.add(issued);

        // expiry
        const expiry = scene.add.text(338, 10, "", {});
        expiry.text = "Expiry";
        expiry.setStyle({ "color": "#000", "fixedWidth":310,"fontFamily": "Arial Narrow", "fontSize": "30px" });
        expiry.setLineSpacing(-5);
        expiry.setWordWrapWidth(310);
        this.add(expiry);

        // username
        const username = scene.add.text(662, 9, "", {});
        username.text = "Username";
        username.setStyle({ "color": "#000", "fixedWidth":290,"fontFamily": "Arial Narrow", "fontSize": "30px" });
        username.setLineSpacing(-5);
        username.setWordWrapWidth(290);
        this.add(username);

        // reason
        const reason = scene.add.text(959, 9, "", {});
        reason.text = "Because he is stinky";
        reason.setStyle({ "color": "#000", "fixedWidth":330,"fontFamily": "Arial Narrow", "fontSize": "30px" });
        reason.setLineSpacing(-5);
        reason.setWordWrapWidth(330);
        this.add(reason);

        this.issued = issued;
        this.expiry = expiry;
        this.username = username;
        this.reason = reason;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setInfo(obj) {
        const options = { timeZone: 'America/Los_Angeles', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };

        this.issued.text = new Date(obj.issued).toLocaleString('en-US', options);
        this.expiry.text = new Date(obj.expires).toLocaleString('en-US', options);
        this.username.text = obj.moderatorId;
        this.reason.text = obj.message;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
