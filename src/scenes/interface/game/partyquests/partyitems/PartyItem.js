import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class PartyItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // party_item
        const party_item = scene.add.image(0, 0, "partyquests", "quest_item");
        this.add(party_item);

        // party_title
        const party_title = scene.add.text(-330, -12, "", {});
        party_title.text = "April Fools' Party 2024";
        party_title.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(party_title);

        // party_logo
        const party_logo = scene.add.image(325, 0, "partyquests", "quest_community");
        party_logo.scaleX = 0.4;
        party_logo.scaleY = 0.4;
        this.add(party_logo);

        // party_item (components)
        const party_itemButton = new Button(party_item);
        party_itemButton.spriteName = "quest_item";
        party_itemButton.hoverCallback;
        party_itemButton.hoverOutCallback;
        party_itemButton.callback = () => {this.select();};

        this.party_title = party_title;
        this.party_logo = party_logo;

        /* START-USER-CTR-CODE */
        this.partyId = null;
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Text} */
    party_title;
    /** @type {Phaser.GameObjects.Image} */
    party_logo;

    /* START-USER-CODE */

    setData(partyId, partyName) {
        this.partyId = parseInt(partyId);
        this.party_title.setText(partyName);
        //this.party_logo.setTexture('partyquests', partyId);
    }

    select() {
        this.scene.events.emit('partySelected', this.partyId);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
