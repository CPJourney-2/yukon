import BaseContainer from '@scenes/base/BaseContainer'

import PartyQuestLoader from '@engine/loaders/PartyQuestLoader'

import { Button, Interactive, SimpleButton, ShowHint } from '@components/components'
import QuestItem from "./questitems/QuestItem"
import PartyItem from "./partyitems/PartyItem"

export const preload = {
    key: 'partyquests-pack',
    url: 'assets/media/interface/game/partyquests/partyquests-pack.json',
    loadString: ['loading', 'partyquests']
}

const GRADIENT_COLORS = {
    "default": 0x00529B,
    "4": 0x98009B,
}

/* START OF COMPILED CODE */

export default class PartyQuests extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 477);

        /** @type {Phaser.GameObjects.Image} */
        this.partybg;
        /** @type {Phaser.GameObjects.Container} */
        this.party_bgs;
        /** @type {Phaser.GameObjects.Image} */
        this.generic;
        /** @type {Phaser.GameObjects.Image} */
        this.gradient_overlay_1;
        /** @type {Phaser.GameObjects.Image} */
        this.downButton;
        /** @type {Phaser.GameObjects.Image} */
        this.downArrow;
        /** @type {Phaser.GameObjects.Image} */
        this.upButton;
        /** @type {Phaser.GameObjects.Image} */
        this.upArrow;
        /** @type {Phaser.GameObjects.Container} */
        this.arrow_holder_container;
        /** @type {Phaser.GameObjects.Text} */
        this.title;
        /** @type {Phaser.GameObjects.Image} */
        this.more;
        /** @type {Phaser.GameObjects.Text} */
        this.gem_title;
        /** @type {Phaser.GameObjects.Text} */
        this.gems_earned;
        /** @type {Phaser.GameObjects.Image} */
        this.legend;
        /** @type {Phaser.GameObjects.Text} */
        this.completeText;
        /** @type {Phaser.GameObjects.Image} */
        this.claim;
        /** @type {Phaser.GameObjects.Container} */
        this.claimbtn;
        /** @type {Phaser.GameObjects.Text} */
        this.easyText;
        /** @type {Phaser.GameObjects.Text} */
        this.mediumText;
        /** @type {Phaser.GameObjects.Text} */
        this.hardText;
        /** @type {Phaser.GameObjects.Text} */
        this.extremeText;
        /** @type {Phaser.GameObjects.Container} */
        this.gemSplain;
        /** @type {Phaser.GameObjects.Container} */
        this.quests_view;
        /** @type {Phaser.GameObjects.Text} */
        this.title_parties;
        /** @type {Phaser.GameObjects.Text} */
        this.gem_title_1;
        /** @type {Phaser.GameObjects.Text} */
        this.gems_earned_1;
        /** @type {Phaser.GameObjects.Container} */
        this.party_view;
        /** @type {QuestItem[]} */
        this.questItems;
        /** @type {PartyItem[]} */
        this.parties;


        // block
        const block = scene.add.rectangle(-12, 7, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // bg
        const bg = scene.add.container(-760, -477);
        this.add(bg);

        // party_bgs
        const party_bgs = scene.add.container(0, 0);
        party_bgs.visible = false;
        bg.add(party_bgs);

        // partybg
        const partybg = scene.add.image(760, 480, "generic");
        party_bgs.add(partybg);

        // generic
        const generic = scene.add.image(760, 480, "generic");
        bg.add(generic);

        // gradient_overlay_1
        const gradient_overlay_1 = scene.add.image(760, 480, "gradient_overlay");
        bg.add(gradient_overlay_1);

        // quest_holder_container
        const quest_holder_container = scene.add.container(-760, -477);
        this.add(quest_holder_container);

        // quest_holder
        const quest_holder = scene.add.image(664, 115, "partyquests", "quest_holder");
        quest_holder.setOrigin(0, 0);
        quest_holder_container.add(quest_holder);

        // arrow_holder_container
        const arrow_holder_container = scene.add.container(0, 0);
        quest_holder_container.add(arrow_holder_container);

        // arrow_holder_1
        const arrow_holder_1 = scene.add.image(1430, 506, "partyquests", "arrow_holder");
        arrow_holder_1.scaleY = 1.05;
        arrow_holder_container.add(arrow_holder_1);

        // downButton
        const downButton = scene.add.image(1431, 728, "main", "grey-button");
        downButton.scaleX = 0.7;
        downButton.scaleY = 0.7;
        downButton.angle = -180;
        downButton.flipX = true;
        arrow_holder_container.add(downButton);

        // downArrow
        const downArrow = scene.add.image(1431, 729, "main", "grey-arrow");
        downArrow.scaleX = 0.7;
        downArrow.scaleY = 0.7;
        downArrow.angle = -180;
        arrow_holder_container.add(downArrow);

        // upButton
        const upButton = scene.add.image(1431, 287, "main", "grey-button");
        upButton.scaleX = 0.7;
        upButton.scaleY = 0.7;
        arrow_holder_container.add(upButton);

        // upArrow
        const upArrow = scene.add.image(1431, 286, "main", "grey-arrow");
        upArrow.scaleX = 0.7;
        upArrow.scaleY = 0.7;
        arrow_holder_container.add(upArrow);

        // quests_view
        const quests_view = scene.add.container(0, 0);
        quests_view.visible = false;
        quest_holder_container.add(quests_view);

        // title_holder
        const title_holder = scene.add.container(0, 0);
        quests_view.add(title_holder);

        // quests
        const quests = scene.add.image(737, 179, "main", "quests");
        quests.scaleX = 0.8;
        quests.scaleY = 0.8;
        title_holder.add(quests);

        // title
        const title = scene.add.text(1024, 179, "", {});
        title.setOrigin(0.5, 0.5);
        title.text = "April Fools' 2024";
        title.setStyle({ "color": "#000000ff", "fixedWidth":470,"fontFamily": "Burbank Small", "fontSize": "48px", "fontStyle": "bold" });
        title_holder.add(title);

        // more
        const more = scene.add.image(1296, 179, "partyquests", "more");
        title_holder.add(more);

        // gem_counter
        const gem_counter = scene.add.container(0, 0);
        quests_view.add(gem_counter);

        // gem_counter_gem
        const gem_counter_gem = scene.add.image(1422, 185, "partyquests", "gem_counter_gem");
        gem_counter.add(gem_counter_gem);

        // gem_title
        const gem_title = scene.add.text(1436, 146, "", {});
        gem_title.setOrigin(1, 0);
        gem_title.text = "Gems Earned:";
        gem_title.setStyle({ "align": "right", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px" });
        gem_counter.add(gem_title);

        // gems_earned
        const gems_earned = scene.add.text(1403, 182.5, "", {});
        gems_earned.setOrigin(1, 0.5);
        gems_earned.text = "500";
        gems_earned.setStyle({ "align": "right", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        gem_counter.add(gems_earned);

        // legend
        const legend = scene.add.image(1007, 809, "partyquests", "legend");
        quests_view.add(legend);

        // questItem_0
        const questItem_0 = new QuestItem(scene, 1051, 296);
        questItem_0.visible = false;
        quests_view.add(questItem_0);

        // questItem_1
        const questItem_1 = new QuestItem(scene, 1051, 356);
        questItem_1.visible = false;
        quests_view.add(questItem_1);

        // questItem_2
        const questItem_2 = new QuestItem(scene, 1051, 416);
        questItem_2.visible = false;
        quests_view.add(questItem_2);

        // questItem_3
        const questItem_3 = new QuestItem(scene, 1051, 476);
        questItem_3.visible = false;
        quests_view.add(questItem_3);

        // questItem_4
        const questItem_4 = new QuestItem(scene, 1051, 536);
        questItem_4.visible = false;
        quests_view.add(questItem_4);

        // questItem_5
        const questItem_5 = new QuestItem(scene, 1051, 596);
        questItem_5.visible = false;
        quests_view.add(questItem_5);

        // questItem_6
        const questItem_6 = new QuestItem(scene, 1051, 656);
        questItem_6.visible = false;
        quests_view.add(questItem_6);

        // questItem_7
        const questItem_7 = new QuestItem(scene, 1051, 716);
        questItem_7.visible = false;
        quests_view.add(questItem_7);

        // completeText
        const completeText = scene.add.text(1446, 811, "", {});
        completeText.setOrigin(1, 0.5);
        completeText.text = "0 / 0";
        completeText.setStyle({ "align": "right", "baselineX":1,"baselineY":1,"color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px", "shadow.offsetX":1,"shadow.offsetY":1,"shadow.color": "#818181ff", "shadow.blur":2,"shadow.fill":true});
        quests_view.add(completeText);

        // claimbtn
        const claimbtn = scene.add.container(0, 0);
        claimbtn.visible = false;
        quests_view.add(claimbtn);

        // claim
        const claim = scene.add.image(1381, 235, "partyquests", "claim");
        claimbtn.add(claim);

        // claimText
        const claimText = scene.add.text(1381, 235, "", {});
        claimText.setOrigin(0.5, 0.5);
        claimText.text = "CLAIM PRIZE";
        claimText.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "18px" });
        claimbtn.add(claimText);

        // gemSplain
        const gemSplain = scene.add.container(0, 0);
        gemSplain.visible = false;
        quests_view.add(gemSplain);

        // nineslice_1
        const nineslice_1 = scene.add.nineslice(760, 480, "prompt", "window", 512, 512, 10, 10, 10, 10);
        gemSplain.add(nineslice_1);

        // quest_easy_1
        const quest_easy_1 = scene.add.image(674, 362, "partyquests", "quest_easy");
        quest_easy_1.scaleX = 0.5;
        quest_easy_1.scaleY = 0.5;
        gemSplain.add(quest_easy_1);

        // quest_medium
        const quest_medium = scene.add.image(674, 454, "partyquests", "quest_medium");
        quest_medium.scaleX = 0.5;
        quest_medium.scaleY = 0.5;
        gemSplain.add(quest_medium);

        // quest_hard
        const quest_hard = scene.add.image(674, 546, "partyquests", "quest_hard");
        quest_hard.scaleX = 0.5;
        quest_hard.scaleY = 0.5;
        gemSplain.add(quest_hard);

        // quest_extreme
        const quest_extreme = scene.add.image(674, 638, "partyquests", "quest_extreme");
        quest_extreme.scaleX = 0.5;
        quest_extreme.scaleY = 0.5;
        gemSplain.add(quest_extreme);

        // gemLegendTitle
        const gemLegendTitle = scene.add.text(760, 280.5, "", {});
        gemLegendTitle.setOrigin(0.5, 0.5);
        gemLegendTitle.text = "QUEST REWARDS";
        gemLegendTitle.setStyle({ "align": "center", "fontFamily": "CCComicrazy", "fontSize": "28px", "fontStyle": "bold italic", "stroke": "#134263", "strokeThickness":10,"shadow.blur":0.00001,"shadow.fill":true});
        gemSplain.add(gemLegendTitle);

        // easyText
        const easyText = scene.add.text(768, 362, "", {});
        easyText.setOrigin(0.5, 0.5);
        easyText.text = "+ 10";
        easyText.setStyle({ "align": "center", "fontFamily": "CCComicrazy", "fontSize": "32px", "fontStyle": "bold italic", "stroke": "#134263", "strokeThickness":10,"shadow.blur":0.00001,"shadow.fill":true});
        gemSplain.add(easyText);

        // reward_gem_1
        const reward_gem_1 = scene.add.image(846, 362, "quest-reward", "reward_gem");
        reward_gem_1.scaleX = 0.3;
        reward_gem_1.scaleY = 0.3;
        gemSplain.add(reward_gem_1);

        // mediumText
        const mediumText = scene.add.text(768, 454, "", {});
        mediumText.setOrigin(0.5, 0.5);
        mediumText.text = "+ 20";
        mediumText.setStyle({ "align": "center", "fontFamily": "CCComicrazy", "fontSize": "32px", "fontStyle": "bold italic", "stroke": "#134263", "strokeThickness":10,"shadow.blur":0.00001,"shadow.fill":true});
        gemSplain.add(mediumText);

        // reward_gem
        const reward_gem = scene.add.image(846, 454, "quest-reward", "reward_gem");
        reward_gem.scaleX = 0.3;
        reward_gem.scaleY = 0.3;
        gemSplain.add(reward_gem);

        // hardText
        const hardText = scene.add.text(768, 546, "", {});
        hardText.setOrigin(0.5, 0.5);
        hardText.text = "+ 30";
        hardText.setStyle({ "align": "center", "fontFamily": "CCComicrazy", "fontSize": "32px", "fontStyle": "bold italic", "stroke": "#134263", "strokeThickness":10,"shadow.blur":0.00001,"shadow.fill":true});
        gemSplain.add(hardText);

        // reward_gem_2
        const reward_gem_2 = scene.add.image(846, 546, "quest-reward", "reward_gem");
        reward_gem_2.scaleX = 0.3;
        reward_gem_2.scaleY = 0.3;
        gemSplain.add(reward_gem_2);

        // extremeText
        const extremeText = scene.add.text(768, 638, "", {});
        extremeText.setOrigin(0.5, 0.5);
        extremeText.text = "+ 50";
        extremeText.setStyle({ "align": "center", "fontFamily": "CCComicrazy", "fontSize": "32px", "fontStyle": "bold italic", "stroke": "#134263", "strokeThickness":10,"shadow.blur":0.00001,"shadow.fill":true});
        gemSplain.add(extremeText);

        // reward_gem_3
        const reward_gem_3 = scene.add.image(846, 638, "quest-reward", "reward_gem");
        reward_gem_3.scaleX = 0.3;
        reward_gem_3.scaleY = 0.3;
        gemSplain.add(reward_gem_3);

        // blue_button
        const blue_button = scene.add.image(964, 280, "main", "blue-button");
        blue_button.scaleX = 0.9;
        blue_button.scaleY = 0.9;
        gemSplain.add(blue_button);

        // blue_x
        const blue_x = scene.add.image(964, 279, "main", "blue-x");
        blue_x.scaleX = 0.9;
        blue_x.scaleY = 0.9;
        gemSplain.add(blue_x);

        // party_view
        const party_view = scene.add.container(0, 0);
        quest_holder_container.add(party_view);

        // partyItem_0
        const partyItem_0 = new PartyItem(scene, 1051, 296);
        partyItem_0.visible = false;
        party_view.add(partyItem_0);

        // partyItem_1
        const partyItem_1 = new PartyItem(scene, 1051, 356);
        partyItem_1.visible = false;
        party_view.add(partyItem_1);

        // partyItem_2
        const partyItem_2 = new PartyItem(scene, 1051, 416);
        partyItem_2.visible = false;
        party_view.add(partyItem_2);

        // partyItem_3
        const partyItem_3 = new PartyItem(scene, 1051, 476);
        partyItem_3.visible = false;
        party_view.add(partyItem_3);

        // partyItem_4
        const partyItem_4 = new PartyItem(scene, 1051, 536);
        partyItem_4.visible = false;
        party_view.add(partyItem_4);

        // partyItem_5
        const partyItem_5 = new PartyItem(scene, 1051, 596);
        partyItem_5.visible = false;
        party_view.add(partyItem_5);

        // partyItem_6
        const partyItem_6 = new PartyItem(scene, 1051, 656);
        partyItem_6.visible = false;
        party_view.add(partyItem_6);

        // partyItem_7
        const partyItem_7 = new PartyItem(scene, 1051, 716);
        partyItem_7.visible = false;
        party_view.add(partyItem_7);

        // title_holder_parties
        const title_holder_parties = scene.add.container(0, 0);
        party_view.add(title_holder_parties);

        // quests_parties
        const quests_parties = scene.add.image(737, 179, "main", "quests");
        quests_parties.scaleX = 0.8;
        quests_parties.scaleY = 0.8;
        title_holder_parties.add(quests_parties);

        // title_parties
        const title_parties = scene.add.text(976.5, 179, "", {});
        title_parties.setOrigin(0.5, 0.5);
        title_parties.text = "Select a Party";
        title_parties.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "48px", "fontStyle": "bold" });
        title_holder_parties.add(title_parties);

        // gem_counter_parties
        const gem_counter_parties = scene.add.container(0, 0);
        party_view.add(gem_counter_parties);

        // gem_counter_gem_1
        const gem_counter_gem_1 = scene.add.image(1422, 185, "partyquests", "gem_counter_gem");
        gem_counter_parties.add(gem_counter_gem_1);

        // gem_title_1
        const gem_title_1 = scene.add.text(1436, 146, "", {});
        gem_title_1.setOrigin(1, 0);
        gem_title_1.text = "Current Gems Total:";
        gem_title_1.setStyle({ "align": "right", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px" });
        gem_counter_parties.add(gem_title_1);

        // gems_earned_1
        const gems_earned_1 = scene.add.text(1403, 182.5, "", {});
        gems_earned_1.setOrigin(1, 0.5);
        gems_earned_1.text = "500";
        gems_earned_1.setStyle({ "align": "right", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        gem_counter_parties.add(gems_earned_1);

        // grey_button
        const grey_button = scene.add.image(713, -429, "main", "grey-button");
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(713, -431, "main", "grey-x");
        this.add(grey_x);

        // lists
        const questItems = [questItem_0, questItem_1, questItem_2, questItem_3, questItem_4, questItem_5, questItem_6, questItem_7];
        const parties = [partyItem_0, partyItem_1, partyItem_2, partyItem_3, partyItem_4, partyItem_5, partyItem_6, partyItem_7];

        // block (components)
        new Interactive(block);

        // downButton (components)
        const downButtonButton = new Button(downButton);
        downButtonButton.spriteName = "grey-button";
        downButtonButton.callback = () => {this.pageUp();};
        downButtonButton.activeFrame = true;

        // upButton (components)
        const upButtonButton = new Button(upButton);
        upButtonButton.spriteName = "grey-button";
        upButtonButton.callback = () => {this.pageDown();};
        upButtonButton.activeFrame = true;

        // more (components)
        const moreButton = new Button(more);
        moreButton.spriteName = "more";
        moreButton.callback = () => {this.showParties();};
        const moreShowHint = new ShowHint(more);
        moreShowHint.text = "Show all Parties";

        // gem_counter_gem (components)
        const gem_counter_gemSimpleButton = new SimpleButton(gem_counter_gem);
        gem_counter_gemSimpleButton.callback = () => {this.openGemSplain();};
        const gem_counter_gemShowHint = new ShowHint(gem_counter_gem);
        gem_counter_gemShowHint.text = "Quest Rewards";

        // claim (components)
        const claimButton = new Button(claim);
        claimButton.spriteName = "claim";
        claimButton.callback = () => {this.addPrize(this.prize);};

        // blue_button (components)
        const blue_buttonButton = new Button(blue_button);
        blue_buttonButton.spriteName = "blue-button";
        blue_buttonButton.callback = () => {this.closeGemSplain();};
        blue_buttonButton.activeFrame = true;

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => {this.hide();};
        grey_buttonButton.activeFrame = true;

        this.partybg = partybg;
        this.party_bgs = party_bgs;
        this.generic = generic;
        this.gradient_overlay_1 = gradient_overlay_1;
        this.downButton = downButton;
        this.downArrow = downArrow;
        this.upButton = upButton;
        this.upArrow = upArrow;
        this.arrow_holder_container = arrow_holder_container;
        this.title = title;
        this.more = more;
        this.gem_title = gem_title;
        this.gems_earned = gems_earned;
        this.legend = legend;
        this.completeText = completeText;
        this.claim = claim;
        this.claimbtn = claimbtn;
        this.easyText = easyText;
        this.mediumText = mediumText;
        this.hardText = hardText;
        this.extremeText = extremeText;
        this.gemSplain = gemSplain;
        this.quests_view = quests_view;
        this.title_parties = title_parties;
        this.gem_title_1 = gem_title_1;
        this.gems_earned_1 = gems_earned_1;
        this.party_view = party_view;
        this.questItems = questItems;
        this.parties = parties;

        /* START-USER-CTR-CODE */

        this.currentParty = null;
        this.gemPayouts = {
            'easy': 10,
            'medium': 20,
            'hard': 30,
            'extreme': 50
        };

        this.logoLoader = new PartyQuestLoader(this.scene, "logo")
        this.bannerLoader = new PartyQuestLoader(this.scene, "banner")

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    show(args) {
        super.show();
        this.addListeners();

        this.currentPage = 0;
        this.totalPages = 0;
        this.pageSize = 8;

        if (this.currentView === 'quests') {
            this.currentView = 'quests'
        } else {
            this.currentView = 'parties';
            this.setGradient(GRADIENT_COLORS.default);
        }

        this.gems_earned_1.text = this.world.client.gems;

        this.loadCurrentView();
        this.closeGemSplain();

        this.easyText.setText(`+ ${this.gemPayouts.easy}`);
        this.mediumText.setText(`+ ${this.gemPayouts.medium}`);
        this.hardText.setText(`+ ${this.gemPayouts.hard}`);
        this.extremeText.setText(`+ ${this.gemPayouts.extreme}`);
    }

    hide() {
        this.close()
        this.removeListeners();
    }

    loadCurrentView() {
        if (this.currentView === 'parties') {
            this.network.send('get_parties');
        } else if (this.currentParty) {
            this.network.send('get_party_quests', {partyId: this.currentParty});
        }
    }

    addListeners() {
        this.network.events.on('get_parties', this.getParties, this)
        this.network.events.on('get_party_quests', this.getPartyQuests, this)
        this.scene.events.on('partySelected', this.displayQuestsView, this)
    }

    removeListeners() {
        this.network.events.off('get_parties', this.getParties, this)
        this.network.events.off('get_party_quests', this.getPartyQuests, this)
        this.scene.events.off('partySelected', this.displayQuestsView, this)
    }

    getParties({parties}) {
        // Clear any existing party data first
        this.clearPartyItems();

        this.allParties = parties;
        const partyKeys = Object.keys(parties);
        partyKeys.sort((a, b) => b - a);
        this.totalPages = Math.ceil(partyKeys.length / this.pageSize);
        this.updatePaginationVisibility();

        const startIdx = this.currentPage * this.pageSize;
        const endIdx = startIdx + this.pageSize;

        // Loop through the  parties based on the page
        partyKeys.slice(startIdx, endIdx).forEach((partyId, index) => {
            const party = parties[partyId];
            if (party) {
                this.parties[index].setData(partyId, party.name);
                this.parties[index].setVisible(true);

                this.parties[index].party_logo.visible = false
                this.logoLoader.loadItem(partyId, (key, frame) => {
                    this.parties[index].party_logo.setTexture(key, frame)
                    this.parties[index].party_logo.visible = true
                });
            }
        });

        // Hide any unused party items if the page is not full
        for (let i = partyKeys.slice(startIdx, endIdx).length; i < this.pageSize; i++) {
            this.parties[i].setVisible(false);
        }
    }

    getPartyQuests({partyQuests}) {
        // Clear any existing quest data first
        this.clearQuestItems();

        this.allQuests = partyQuests;

        this.totalPages = Math.ceil(partyQuests.length / this.pageSize);
        this.updatePaginationVisibility();

        const startIdx = this.currentPage * this.pageSize;
        const endIdx = startIdx + this.pageSize;

        let completedTotal = 0;

        const completedCounts = {
            easy: 0,
            medium: 0,
            hard: 0,
            extreme: 0
        };

        partyQuests.forEach(quest => {
            if (quest.completed) {
                completedCounts[quest.difficulty]++;
                completedTotal++;
            }
        });

        let totalGemsEarned = 0;
        for (const difficulty in completedCounts) {
            totalGemsEarned += completedCounts[difficulty] * this.gemPayouts[difficulty];
        }

        // Set the gems_earned text
        this.gems_earned.text = `${totalGemsEarned}`;
        this.completeText.text = `${completedTotal} / ${Object.keys(partyQuests).length}`;

        if (completedTotal === Object.keys(partyQuests).length) {
            this.prize = partyQuests[0].prize
            this.prizeType = partyQuests[0].prizeType
            switch (this.prizeType) {
                case 'item':
                    let hasItem = Object.values(this.world.client.inventory).some(items => items.includes(this.prize));
                    if (!hasItem) this.claimbtn.visible = true;
                    break;
                case 'igloo':
                    if (!this.world.client.igloos.includes(this.prize)) this.claimbtn.visible = true;
                    break;
                default:
                    break;
            }
        }

        // Loop through the quests based on the page
        partyQuests.slice(startIdx, endIdx).forEach((quest, index) => {
            this.questItems[index].setData(quest);
            this.questItems[index].setVisible(true);
        });

        // Hide any unused quest items if the page is not full
        for (let i = partyQuests.slice(startIdx, endIdx).length; i < this.pageSize; i++) {
            this.questItems[i].setVisible(false);
        }
    }

    clearPartyItems() {
        this.parties.forEach(partyItem => {
            partyItem.setVisible(false);
        });
    }

    clearQuestItems() {
        this.questItems.forEach(questItem => {
            questItem.setVisible(false);
        });
        this.claimbtn.visible = false;
    }

    addPrize(prize) {
        switch (this.prizeType) {
            case 'item':
                this.interface.prompt.showItem(prize);
                break;
            case 'igloo':
                this.interface.prompt.showIgloo(prize);
                break;
            default:
                break;
        }
    }

    select() {
        this.parentContainer.displayQuestsView(this.partyId);
    }

    // Back in PartyQuests class
    displayQuestsView(partyId) {
        this.currentView = 'quests';
        this.currentPage = 0;
        this.currentParty = partyId;

        this.title.text = this.allParties[partyId].name
        this.partybg.visible = false
        this.bannerLoader.loadItem(partyId, (key, frame) => {
            this.partybg.setTexture(key, frame)
            this.partybg.visible = true
        })

        this.party_bgs.setVisible(true);
        this.generic.setVisible(false);

        let gradientColor = GRADIENT_COLORS[partyId]
        if (gradientColor) this.setGradient(gradientColor)

        this.network.send('get_party_quests', {partyId: partyId});

        // Show/hide appropriate containers
        this.party_bgs.setVisible(true);
        this.quests_view.setVisible(true);
        this.party_view.setVisible(false);
    }

    showParties() {
        this.currentView = 'parties';
        this.currentPage = 0;
        this.currentParty = null;

        // Update visibility of containers
        this.party_bgs.setVisible(false);
        this.generic.setVisible(true);

        this.setGradient(GRADIENT_COLORS.default)

        // Show/hide appropriate containers
        this.party_bgs.setVisible(false);
        this.quests_view.setVisible(false);
        this.party_view.setVisible(true);

        this.displayParties();
        this.updatePaginationVisibility();
    }

    displayParties() {
        const partyKeys = Object.keys(this.allParties);
        partyKeys.sort((a, b) => b - a);
        const startIdx = this.currentPage * this.pageSize;
        const endIdx = Math.min(startIdx + this.pageSize, partyKeys.length);

        this.parties.forEach((item, index) => {
            const partyId = partyKeys[startIdx + index];
            if (partyId && this.allParties[partyId]) {
                const party = this.allParties[partyId];
                item.setData(partyId, party.name, `${partyId}_logo`);
                item.setVisible(true);
            } else {
                item.setVisible(false);
            }
        });
    }

    displayQuests() {
        const startIdx = this.currentPage * this.pageSize;
        const endIdx = Math.min(startIdx + this.pageSize, this.allQuests.length);

        this.questItems.forEach((item, index) => {
            const quest = this.allQuests[startIdx + index];
            if (quest) {
                item.setData(quest);
                item.setVisible(true);
            } else {
                item.setVisible(false);
            }
        });
    }

    pageUp() {
        if (this.currentPage < this.totalPages - 1) {
            this.currentPage++;
            if (this.currentView === 'parties') {
                this.displayParties();
            } else {
                this.displayQuests();
            }
            this.updatePaginationVisibility();
        }
    }

    pageDown() {
        if (this.currentPage > 0) {
            this.currentPage--;
            if (this.currentView === 'parties') {
                this.displayParties();
            } else {
                this.displayQuests();
            }
            this.updatePaginationVisibility();
        }
    }

    updatePaginationVisibility() {
        const showPrev = this.currentPage > 0;
        const showNext = this.currentPage < this.totalPages - 1;
        if (!showNext) {
            this.downArrow.alpha = 0.4
        } else {
            this.downArrow.alpha = 1
        }
        if (!showPrev) {
            this.upArrow.alpha = 0.4
        } else {
            this.upArrow.alpha = 1
        }
    }

    openGemSplain() {
        this.gemSplain.visible = true;
    }

    closeGemSplain() {
        this.gemSplain.visible = false;
    }

    setGradient(gradient) {
        this.gradient_overlay_1.setTint(gradient)
        this.gradient_overlay_1.tintTopLeft = 0xFFFFFF
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
