
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import Interactive from "../../../../components/Interactive";
import SimpleButton from "../../../../components/SimpleButton";
import Button from "../../../../components/Button";
/* START-USER-IMPORTS */
export const preload = {
    key: 'missionstatus-pack',
    url: 'assets/media/interface/catalogs/_mission11/missionstatus/mission11-missionstatus-pack.json',
    loadString: ['loading', 'mission status']
};

/* END-USER-IMPORTS */

export default class MissionStatus extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.nextPageBtn;
        /** @type {Phaser.GameObjects.Image} */
        this.prevPageBtn;
        /** @type {Phaser.GameObjects.Text} */
        this.objective;
        /** @type {Phaser.GameObjects.Text} */
        this.agent_name;
        /** @type {Phaser.GameObjects.Container} */
        this.page2_items;
        /** @type {Phaser.GameObjects.Container} */
        this.page1_items;
        /** @type {Phaser.GameObjects.Text} */
        this.replayText;
        /** @type {Phaser.GameObjects.Container} */
        this._replay;
        /** @type {Phaser.GameObjects.Sprite} */
        this.statusimage;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;
        /** @type {Phaser.GameObjects.Ellipse[]} */
        this.paginationIcons;


        // widget_bg
        const widget_bg = scene.add.image(0, 0, "missionstatus-pack", "widget_bg");
        this.add(widget_bg);

        // item_grid
        const item_grid = scene.add.image(-5, -59, "missionstatus-pack", "item_grid");
        this.add(item_grid);

        // nextPageBtn
        const nextPageBtn = scene.add.image(599, 328, "missionstatus-pack", "arrow");
        nextPageBtn.scaleX = 0.47;
        nextPageBtn.scaleY = 0.47;
        this.add(nextPageBtn);

        // prevPageBtn
        const prevPageBtn = scene.add.image(-601, 328, "missionstatus-pack", "arrow");
        prevPageBtn.scaleX = 0.47;
        prevPageBtn.scaleY = 0.47;
        prevPageBtn.flipX = true;
        prevPageBtn.alpha = 0.4;
        prevPageBtn.alphaTopLeft = 0.4;
        prevPageBtn.alphaTopRight = 0.4;
        prevPageBtn.alphaBottomLeft = 0.4;
        prevPageBtn.alphaBottomRight = 0.4;
        this.add(prevPageBtn);

        // text_1
        const text_1 = scene.add.text(-165, -329, "", {});
        text_1.text = "Special Gear";
        text_1.setStyle({ "color": "#20d800ff", "fontFamily": "cplcd", "fontSize": "30px" });
        this.add(text_1);

        // objective
        const objective = scene.add.text(293, 17, "", {});
        objective.text = "Herbert P. Bear is up to no good. Track down his activities and stop him!";
        objective.setStyle({ "color": "#20d800ff", "fixedWidth":322,"fontFamily": "cplcd", "fontSize": "30px", "maxLines":39});
        objective.setWordWrapWidth(322);
        this.add(objective);

        // text_2
        const text_2 = scene.add.text(282, -265, "", {});
        text_2.text = "Current Objective";
        text_2.setStyle({ "color": "#20d800ff", "fontFamily": "cplcd", "fontSize": "30px" });
        this.add(text_2);

        // text_3
        const text_3 = scene.add.text(-652, -389, "", {});
        text_3.text = "Logged in:";
        text_3.setStyle({ "color": "#20d800ff", "fontFamily": "cplcd", "fontSize": "30px" });
        this.add(text_3);

        // agent_name
        const agent_name = scene.add.text(-514, -390, "", {});
        agent_name.text = "Agent P.";
        agent_name.setStyle({ "color": "#20d800ff", "fontFamily": "cplcd", "fontSize": "30px" });
        this.add(agent_name);

        // ellipse
        const ellipse = scene.add.ellipse(31, 279, 15, 15);
        ellipse.alpha = 0.5;
        ellipse.isFilled = true;
        ellipse.fillColor = 1563399;
        this.add(ellipse);

        // ellipse_1
        const ellipse_1 = scene.add.ellipse(-25, 279, 15, 15);
        ellipse_1.isFilled = true;
        ellipse_1.fillColor = 1563399;
        this.add(ellipse_1);

        // page2_items
        const page2_items = scene.add.container(-88, -205);
        page2_items.visible = false;
        this.add(page2_items);

        // item7
        const item7 = scene.add.image(0, 5, "missionstatus-pack", "item7");
        item7.scaleX = 0.5;
        item7.scaleY = 0.5;
        page2_items.add(item7);

        // item8
        const item8 = scene.add.image(164, 0, "missionstatus-pack", "item8");
        item8.scaleX = 0.5;
        item8.scaleY = 0.5;
        page2_items.add(item8);

        // item9
        const item9 = scene.add.image(-2, 156, "missionstatus-pack", "item9");
        item9.scaleX = 0.5;
        item9.scaleY = 0.5;
        page2_items.add(item9);

        // item10
        const item10 = scene.add.image(167, 160, "missionstatus-pack", "item10");
        item10.scaleX = 0.5;
        item10.scaleY = 0.5;
        page2_items.add(item10);

        // item11
        const item11 = scene.add.image(-2, 330, "missionstatus-pack", "item11");
        item11.scaleX = 0.5;
        item11.scaleY = 0.5;
        page2_items.add(item11);

        // item12
        const item12 = scene.add.image(167, 330, "missionstatus-pack", "item12");
        item12.scaleX = 0.5;
        item12.scaleY = 0.5;
        page2_items.add(item12);

        // page1_items
        const page1_items = scene.add.container(-88, -205);
        this.add(page1_items);

        // item1
        const item1 = scene.add.image(0, 0, "missionstatus-pack", "item1");
        item1.scaleX = 0.5;
        item1.scaleY = 0.5;
        page1_items.add(item1);

        // item
        const item = scene.add.image(167, 0, "missionstatus-pack", "item2");
        item.scaleX = 0.5;
        item.scaleY = 0.5;
        page1_items.add(item);

        // item_1
        const item_1 = scene.add.image(167, 167, "missionstatus-pack", "item4");
        item_1.scaleX = 0.5;
        item_1.scaleY = 0.5;
        page1_items.add(item_1);

        // item_2
        const item_2 = scene.add.image(0, 167, "missionstatus-pack", "item3");
        item_2.scaleX = 0.5;
        item_2.scaleY = 0.5;
        page1_items.add(item_2);

        // item_3
        const item_3 = scene.add.image(167, 330, "missionstatus-pack", "item6");
        item_3.scaleX = 0.5;
        item_3.scaleY = 0.5;
        page1_items.add(item_3);

        // item_4
        const item_4 = scene.add.image(0, 330, "missionstatus-pack", "item5");
        item_4.scaleX = 0.5;
        item_4.scaleY = 0.5;
        page1_items.add(item_4);

        // _replay
        const _replay = scene.add.container(-590, 119);
        this.add(_replay);

        // replayButton
        const replayButton = scene.add.rectangle(151, 24, 330, 80);
        replayButton.isFilled = true;
        replayButton.fillColor = 597250;
        replayButton.isStroked = true;
        replayButton.strokeColor = 7599168;
        replayButton.lineWidth = 5;
        _replay.add(replayButton);

        // replayText
        const replayText = scene.add.text(0, 0, "", {});
        replayText.text = "REPLAY MISSION";
        replayText.setStyle({ "align": "center", "color": "#E0FFCC", "fixedWidth":300,"fixedHeight":80,"fontFamily": "cplcd", "fontSize": "45px" });
        replayText.setPadding({"left":10,"right":10});
        _replay.add(replayText);

        // grey_button
        const grey_button = scene.add.sprite(703, -428, "main", "grey-button");
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(703, -430, "main", "grey-x");
        this.add(grey_x);

        // statusimage
        const statusimage = scene.add.sprite(449, -109, "missionstatus-pack", "statusthree");
        this.add(statusimage);

        // lists
        const pages = [page1_items, page2_items];
        const paginationIcons = [ellipse_1, ellipse];

        // widget_bg (components)
        new Interactive(widget_bg);

        // nextPageBtn (components)
        const nextPageBtnSimpleButton = new SimpleButton(nextPageBtn);
        nextPageBtnSimpleButton.callback = () => this.nextPage();

        // prevPageBtn (components)
        const prevPageBtnSimpleButton = new SimpleButton(prevPageBtn);
        prevPageBtnSimpleButton.callback = () => this.prevPage();

        // item7 (components)
        const item7SimpleButton = new SimpleButton(item7);
        item7SimpleButton.callback = () => this.interface.prompt.showItem(380565);

        // item8 (components)
        const item8SimpleButton = new SimpleButton(item8);
        item8SimpleButton.callback = () => this.interface.prompt.showItem(380566);

        // item9 (components)
        const item9SimpleButton = new SimpleButton(item9);
        item9SimpleButton.callback = () => this.interface.prompt.showItem(380567);

        // item10 (components)
        const item10SimpleButton = new SimpleButton(item10);
        item10SimpleButton.callback = () => this.interface.prompt.showItem(380568);

        // item11 (components)
        const item11SimpleButton = new SimpleButton(item11);
        item11SimpleButton.callback = () => this.interface.prompt.showItem(380572);

        // item12 (components)
        const item12SimpleButton = new SimpleButton(item12);
        item12SimpleButton.callback = () => this.interface.prompt.showLocation(22);

        // item1 (components)
        const item1SimpleButton = new SimpleButton(item1);
        item1SimpleButton.callback = () => this.interface.prompt.showItem(380569);

        // item (components)
        const itemSimpleButton = new SimpleButton(item);
        itemSimpleButton.callback = () => this.interface.prompt.showItem(2056);

        // item_1 (components)
        const item_1SimpleButton = new SimpleButton(item_1);
        item_1SimpleButton.callback = () => this.interface.prompt.showItem(6114);

        // item_2 (components)
        const item_2SimpleButton = new SimpleButton(item_2);
        item_2SimpleButton.callback = () => this.interface.prompt.showItem(4562);

        // item_3 (components)
        const item_3SimpleButton = new SimpleButton(item_3);
        item_3SimpleButton.callback = () => this.interface.prompt.showItem(3132);

        // item_4 (components)
        const item_4SimpleButton = new SimpleButton(item_4);
        item_4SimpleButton.callback = () => this.interface.prompt.showItem(14574);

        // replayButton (components)
        const replayButtonSimpleButton = new SimpleButton(replayButton);
        replayButtonSimpleButton.hoverCallback = () => replayButton.setFillStyle(0x133306);
        replayButtonSimpleButton.hoverOutCallback = () => replayButton.setFillStyle(0x091D02);
        replayButtonSimpleButton.callback = () => this.onReplay();

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => this.close();

        this.nextPageBtn = nextPageBtn;
        this.prevPageBtn = prevPageBtn;
        this.objective = objective;
        this.agent_name = agent_name;
        this.page2_items = page2_items;
        this.page1_items = page1_items;
        this.replayText = replayText;
        this._replay = _replay;
        this.statusimage = statusimage;
        this.pages = pages;
        this.paginationIcons = paginationIcons;

        /* START-USER-CTR-CODE */
        this.currPage = 0;
        this.lockedPages = [1];
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        this._replay.visible = this.world.client.pirate_status >= 8 || this.world.party.cookies.replayMode
        this.replayText.text = this.world.party.cookies.replayMode ? 'EXIT REPLAY' : 'REPLAY MISSION'

        this.agent_name.text = this.world.client.penguin.username_verified
            ? this.world.client.penguin.displayName 
            : 'PSA Special Agent';

        super.show();
        if (this.world.client.pirate_status >= 3) {
            this.statusimage.setFrame('statusthree');
            this.objective.text = "Herbert is broadcasting his agenda to everyone. Go stop it!";
        }
        if (this.world.client.pirate_status >= 4) {
            this.statusimage.setFrame('statusfour');
            this.objective.text = "You blocked the video but not the audio! Maybe you can do more at the Media Player...";
        }
        if (this.world.client.pirate_status >= 5) {
            this.statusimage.setFrame('statusfive');
            this.objective.text = "The signal is coming from the Mine Shack. Time to move over there!";
        }
        if (this.world.client.pirate_status >= 6) {
            this.statusimage.setFrame('statussix');
            this.objective.text = "That should be where Herbert is! But how do you get up there?";
        }
        if (this.world.client.pirate_status >= 7) {
            this.statusimage.setFrame('statusseven');
            this.objective.text = "There's a bomb in the PSA HQ! Find a way out before it explodes!";
        }
        if (this.world.client.pirate_status >= 8) {
            this.statusimage.setFrame('statuseight');
            this.objective.text = "The Operation has ended. Stay on alert for future updates.";
            this.lockedPages = [];
        }
        if(this.world.party.cookies.replayMode) this.lockedPages = [];
    }

    nextPage() {
        const newPage = Math.min(this.currPage + 1, this.pages.length - 1);
        if (this.lockedPages.includes(newPage)) {
            this.world.party.showMissionError('Check back after the mission for more updates!');
            return;
        }

        this.pages[this.currPage].visible = false;
        this.pages[newPage].visible = true;

        this.paginationIcons.forEach(icon => icon.alpha = 0.5);
        this.paginationIcons[newPage].alpha = 1;

        this.prevPageBtn.alpha = 1;
        if (newPage >= this.pages.length - 1) {
            this.nextPageBtn.alpha = 0.4;
        } else {
            this.nextPageBtn.alpha = 1;
        }

        this.currPage = newPage;
    }

    prevPage() {
        const newPage = Math.max(this.currPage - 1, 0);
        if (this.lockedPages.includes(newPage)) {
            this.world.party.showMissionError('Check back after the mission for more updates!');
            return;
        }

        this.pages[this.currPage].visible = false;
        this.pages[newPage].visible = true;

        this.paginationIcons.forEach(icon => icon.alpha = 0.5);
        this.paginationIcons[newPage].alpha = 1;

        this.nextPageBtn.alpha = 1;
        if (newPage <= 0) {
            this.prevPageBtn.alpha = 0.4;
        } else {
            this.prevPageBtn.alpha = 1;
        }

        this.currPage = newPage;
    }

    onReplay() {
        if(this.world.client.pirate_status < 8 && !this.world.party.cookies.replayMode) return
        let text
        if(!this.world.party.cookies.replayMode) {
            text = 'Would you like to replay Operation: Veggie Villain?\nAny progress you make during this replay will not be saved when you log off.'
        } else {
            text = 'Exit the replay of the Operation?\nYour progress will not be saved.'
        }
        this.interface.prompt.showQuestion(text, () => this.world.party.sendReplayOperation())
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */