
import { Button, Interactive } from '@components/components'

import RecommendedMessage from './RecommendedMessage'
import ScrollableList from '@engine/interface/containers/ScrollableList'

/* START OF COMPILED CODE */

export default class BanReasons extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg_2;
        /** @type {Phaser.GameObjects.Text} */
        this.title;
        /** @type {RecommendedMessage} */
        this.item1;
        /** @type {RecommendedMessage} */
        this.item3;
        /** @type {RecommendedMessage} */
        this.item7;
        /** @type {RecommendedMessage} */
        this.item5;
        /** @type {RecommendedMessage} */
        this.item9;
        /** @type {RecommendedMessage} */
        this.item13;
        /** @type {RecommendedMessage} */
        this.item15;
        /** @type {RecommendedMessage} */
        this.item11;
        /** @type {RecommendedMessage} */
        this.item21;
        /** @type {RecommendedMessage} */
        this.item19;
        /** @type {RecommendedMessage} */
        this.item17;
        /** @type {RecommendedMessage} */
        this.item2;
        /** @type {RecommendedMessage} */
        this.item18;
        /** @type {RecommendedMessage} */
        this.item20;
        /** @type {RecommendedMessage} */
        this.item22;
        /** @type {RecommendedMessage} */
        this.item12;
        /** @type {RecommendedMessage} */
        this.item16;
        /** @type {RecommendedMessage} */
        this.item14;
        /** @type {RecommendedMessage} */
        this.item10;
        /** @type {RecommendedMessage} */
        this.item6;
        /** @type {RecommendedMessage} */
        this.item8;
        /** @type {RecommendedMessage} */
        this.item4;
        /** @type {RecommendedMessage[]} */
        this.items;


        // bg_2
        const bg_2 = scene.add.nineslice(418, 360, "prompt", "window", 1000, 720, 44, 39, 40, 41);
        this.add(bg_2);

        // x_button_3
        const x_button_3 = scene.add.image(851, 57, "main", "blue-button");
        this.add(x_button_3);

        // blue_x_1
        const blue_x_1 = scene.add.image(851, 55, "main", "blue-x");
        this.add(blue_x_1);

        // title
        const title = scene.add.text(236, 64, "", {});
        title.setOrigin(0.5, 0.5);
        title.text = "Ban Reasons";
        title.setStyle({ "fixedWidth":500,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold", "shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#003366", "shadow.fill":true});
        this.add(title);

        // item1
        const item1 = new RecommendedMessage(scene, -22, 113);
        this.add(item1);

        // item3
        const item3 = new RecommendedMessage(scene, -22, 164);
        this.add(item3);

        // item7
        const item7 = new RecommendedMessage(scene, -22, 268);
        this.add(item7);

        // item5
        const item5 = new RecommendedMessage(scene, -22, 217);
        this.add(item5);

        // item9
        const item9 = new RecommendedMessage(scene, -22, 320);
        this.add(item9);

        // item13
        const item13 = new RecommendedMessage(scene, -22, 424);
        this.add(item13);

        // item15
        const item15 = new RecommendedMessage(scene, -22, 475);
        this.add(item15);

        // item11
        const item11 = new RecommendedMessage(scene, -22, 371);
        this.add(item11);

        // item21
        const item21 = new RecommendedMessage(scene, -22, 634);
        this.add(item21);

        // item19
        const item19 = new RecommendedMessage(scene, -22, 583);
        this.add(item19);

        // item17
        const item17 = new RecommendedMessage(scene, -22, 530);
        this.add(item17);

        // item2
        const item2 = new RecommendedMessage(scene, 398, 113);
        this.add(item2);

        // item18
        const item18 = new RecommendedMessage(scene, 398, 530);
        this.add(item18);

        // item20
        const item20 = new RecommendedMessage(scene, 398, 583);
        this.add(item20);

        // item22
        const item22 = new RecommendedMessage(scene, 398, 634);
        this.add(item22);

        // item12
        const item12 = new RecommendedMessage(scene, 398, 371);
        this.add(item12);

        // item16
        const item16 = new RecommendedMessage(scene, 398, 475);
        this.add(item16);

        // item14
        const item14 = new RecommendedMessage(scene, 398, 424);
        this.add(item14);

        // item10
        const item10 = new RecommendedMessage(scene, 398, 320);
        this.add(item10);

        // item6
        const item6 = new RecommendedMessage(scene, 398, 217);
        this.add(item6);

        // item8
        const item8 = new RecommendedMessage(scene, 398, 268);
        this.add(item8);

        // item4
        const item4 = new RecommendedMessage(scene, 398, 164);
        this.add(item4);

        // buddy_scroll
        const buddy_scroll = scene.add.image(851, 390, "main", "buddy/scroll");
        buddy_scroll.scaleY = 1.4;
        this.add(buddy_scroll);

        // x_button
        const x_button = scene.add.image(851, 137, "main", "blue-button");
        this.add(x_button);

        // x_button_1
        const x_button_1 = scene.add.image(851, 647, "main", "blue-button");
        this.add(x_button_1);

        // blue_arrow
        const blue_arrow = scene.add.image(851, 135, "main", "blue-arrow");
        this.add(blue_arrow);

        // blue_arrow_1
        const blue_arrow_1 = scene.add.image(851, 645, "main", "blue-arrow");
        blue_arrow_1.flipY = true;
        this.add(blue_arrow_1);

        // lists
        const items = [item1, item4, item8, item6, item10, item14, item16, item12, item22, item20, item18, item2, item17, item19, item21, item11, item15, item13, item9, item5, item7, item3];

        // bg_2 (components)
        new Interactive(bg_2);

        // x_button_3 (components)
        const x_button_3Button = new Button(x_button_3);
        x_button_3Button.spriteName = "blue-button";
        x_button_3Button.callback = () => this.close();
        x_button_3Button.activeFrame = true;

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.listController.scrollDown();
        x_buttonButton.activeFrame = true;

        // x_button_1 (components)
        const x_button_1Button = new Button(x_button_1);
        x_button_1Button.spriteName = "blue-button";
        x_button_1Button.callback = () => this.listController.scrollUp();
        x_button_1Button.activeFrame = true;

        this.bg_2 = bg_2;
        this.title = title;
        this.item1 = item1;
        this.item3 = item3;
        this.item7 = item7;
        this.item5 = item5;
        this.item9 = item9;
        this.item13 = item13;
        this.item15 = item15;
        this.item11 = item11;
        this.item21 = item21;
        this.item19 = item19;
        this.item17 = item17;
        this.item2 = item2;
        this.item18 = item18;
        this.item20 = item20;
        this.item22 = item22;
        this.item12 = item12;
        this.item16 = item16;
        this.item14 = item14;
        this.item10 = item10;
        this.item6 = item6;
        this.item8 = item8;
        this.item4 = item4;
        this.items = items;

        /* START-USER-CTR-CODE */
        this.banReasons = [
            'Inappropriate Language/References',
            'Bypassing Filter',
            'Profane Language',
            'Sexual Language/References',
            'Alcohol/Substance References',
            'Excessive Spam',
            'False Reporting',
            'Racial Slurs or Racism',
            'Homophobia',
            'Sexism',
            'Harassment/Toxicity',
            'Soliciting Personal Information',
            'Attempted Game Manipulation',
            'Predatory Language/Behavior',
            'Discriminatory Language',
            'Ableism',
            'Threats/Violent Language',
            'Inappropriate Username',
            'Inappropriate Igloo Design',
            'Inappropriate Use of Items',
            'Impersonation',
            'Obey Jo'
        ]

        this.warnReasons = [
            'Keep language appropriate.',
            'Do not discuss other active CPPS.',
            'Be respectful to other users.',
            'Refrain from spamming the chat.',
            'Do not discuss alcohol/substances.',
            'Do not try to bypass the filter.',
            'Do not abuse the report function.',
            'Do not ask for personal information.',
            'Do not share personal information.',
            'Refrain from discussing sensitive topics.',
            'Do not discuss politics.',
            'Refrain from advertising.',
            'Do not share links.',
            'Please ensure igloo designs are appropriate.',
            'Do not discuss account bans/punishments.',
            'Do not imitate/impersonate other users.',
            'Obey Jo'
        ]

        this.listController = new ScrollableList(this,this.items.length,[],(i,j) => this.onItemLoop(i,j),() => this.onPageChange())
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get modActions() {
        return this.parentContainer.interface.main.modActions
    }

    onItemLoop(i,j) {
        this[`item${i + 1}`].visible = true
        this[`item${i + 1}`].text_1.text = j[i]
    }

    onPageChange() {
        for(let item of this.items) item.visible = false
    }

    show(isWarning) {
        this.visible = true
        this.modActions.banReason.style.visibility = 'hidden'
        this.modActions.moreOptions.setInputsVisible(false)

        if(isWarning) {
            this.title.text = 'Warning Reasons'
            this.listController.updateArrayAndReset(this.warnReasons)
        } else {
            this.title.text = 'Kick/Mute/Ban Reasons'
            this.listController.updateArrayAndReset(this.banReasons)
        }
    }

    close() {
        this.visible = false
        this.modActions.banReason.style.visibility = 'visible'
        this.modActions.moreOptions.setInputsVisible(this.modActions.moreOptions.visible)
    }

    setBanText(txt) {
        this.close()
        this.modActions.banReason.value = txt
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
