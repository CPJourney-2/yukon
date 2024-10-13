
// You can write more code here
import BaseContainer from '@scenes/base/BaseContainer'
import MissionItem from './MissionItem'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

export const preload = {
    key: 'missionmenu-pack',
    url: 'assets/media/interface/menus/missionmenu/missionmenu-pack.json',
    loadString: ['loading', 'Mission Menu']
}
/* START OF COMPILED CODE */

export default class MissionMenu extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.currentSlot3;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.currentSlot2;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.currentSlot1;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.trainingSlot3;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.trainingSlot2;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.trainingSlot1;
        /** @type {Phaser.GameObjects.Container} */
        this.currentContainer;
        /** @type {Phaser.GameObjects.Container} */
        this.trainingContainer;
        /** @type {Phaser.GameObjects.Image} */
        this.launchMissionBtn;
        /** @type {Phaser.GameObjects.Text} */
        this.missionTitle;
        /** @type {Phaser.GameObjects.Text} */
        this.missionDescription;
        /** @type {Phaser.GameObjects.Image} */
        this.missionPreview;
        /** @type {Phaser.GameObjects.Container} */
        this.missionContainer;
        /** @type {Phaser.GameObjects.Text} */
        this.clickATitle;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.flashbang;


        // block
        const block = scene.add.rectangle(761.8998803600497, 508.2756149693346, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // greenblock
        const greenblock = scene.add.rectangle(764.8998803600497, 458.2756149693346, 128, 90);
        greenblock.scaleX = 9.53665914233435;
        greenblock.scaleY = 7.960012916745185;
        greenblock.isFilled = true;
        greenblock.fillColor = 13056;
        greenblock.strokeColor = 0;
        this.add(greenblock);

        // currentSlot3
        const currentSlot3 = scene.add.rectangle(186, 378, 525, 98);
        currentSlot3.setOrigin(0, 0.5);
        currentSlot3.isFilled = true;
        currentSlot3.fillColor = 13056;
        this.add(currentSlot3);

        // currentSlot2
        const currentSlot2 = scene.add.rectangle(186, 280, 525, 98);
        currentSlot2.setOrigin(0, 0.5);
        currentSlot2.isFilled = true;
        currentSlot2.fillColor = 13056;
        this.add(currentSlot2);

        // currentSlot1
        const currentSlot1 = scene.add.rectangle(186, 182, 525, 98);
        currentSlot1.setOrigin(0, 0.5);
        currentSlot1.isFilled = true;
        currentSlot1.fillColor = 13056;
        this.add(currentSlot1);

        // trainingSlot3
        const trainingSlot3 = scene.add.rectangle(186, 749, 525, 98);
        trainingSlot3.setOrigin(0, 0.5);
        trainingSlot3.isFilled = true;
        trainingSlot3.fillColor = 13056;
        this.add(trainingSlot3);

        // trainingSlot2
        const trainingSlot2 = scene.add.rectangle(186, 651, 525, 98);
        trainingSlot2.setOrigin(0, 0.5);
        trainingSlot2.isFilled = true;
        trainingSlot2.fillColor = 13056;
        this.add(trainingSlot2);

        // trainingSlot1
        const trainingSlot1 = scene.add.rectangle(186, 553, 525, 98);
        trainingSlot1.setOrigin(0, 0.5);
        trainingSlot1.isFilled = true;
        trainingSlot1.fillColor = 13056;
        this.add(trainingSlot1);

        // currentContainer
        const currentContainer = scene.add.container(186, 136);
        this.add(currentContainer);

        // trainingContainer
        const trainingContainer = scene.add.container(186, 504);
        this.add(trainingContainer);

        // missionContainer
        const missionContainer = scene.add.container(814, 229);
        this.add(missionContainer);

        // launchMissionBtn
        const launchMissionBtn = scene.add.image(254, 505, "missionmenu", "launch-btn");
        missionContainer.add(launchMissionBtn);

        // missionTitle
        const missionTitle = scene.add.text(0, 179, "", {});
        missionTitle.text = "MISSION NAME";
        missionTitle.setStyle({ "color": "#f6ef26ff", "fontFamily": "CPLCD", "fontSize": "36px" });
        missionTitle.setPadding({"left":10,"right":10});
        missionContainer.add(missionTitle);

        // missionDescription
        const missionDescription = scene.add.text(0, 223, "", {});
        missionDescription.text = "GARY NEEDS HELP WITH SOMETHING. IT'S ANOTHER MISSION. YEAH, THAT'S PRETTY MUCH IT.";
        missionDescription.setStyle({ "color": "#E0FFCC", "fixedWidth":500,"fixedHeight":215,"fontFamily": "CPLCD", "fontSize": "35px" });
        missionDescription.setPadding({"left":10,"right":10});
        missionDescription.setWordWrapWidth(500);
        missionContainer.add(missionDescription);

        // missionPreview
        const missionPreview = scene.add.image(172, 40, "missionmenu", "classifiedpreview");
        missionContainer.add(missionPreview);

        // scrollbar
        const scrollbar = scene.add.rectangle(728.8998803600497, 468.2756149693346, 128, 90);
        scrollbar.scaleX = 0.3387053524637344;
        scrollbar.scaleY = 7.960012916745185;
        scrollbar.isFilled = true;
        scrollbar.fillColor = 2447377;
        scrollbar.strokeColor = 0;
        this.add(scrollbar);

        // clickATitle
        const clickATitle = scene.add.text(803, 156, "", {});
        clickATitle.visible = false;
        clickATitle.text = "CLICK A TITLE ON THE LEFT\nTO CHOOSE A MISSION.";
        clickATitle.setStyle({ "color": "#E0FFCC", "fontFamily": "CPLCD", "fontSize": "40px" });
        clickATitle.setPadding({"left":10,"right":10});
        this.add(clickATitle);

        // flashbang
        const flashbang = scene.add.rectangle(1066, 481, 128, 90);
        flashbang.scaleX = 4.582005166070725;
        flashbang.scaleY = 8.072761620151748;
        flashbang.alpha = 0;
        flashbang.isFilled = true;
        flashbang.strokeColor = 0;
        this.add(flashbang);

        // console
        const console = scene.add.image(766.8998803600497, 473.2756149693346, "missionmenu", "console");
        this.add(console);

        // tabs
        const tabs = scene.add.container(216.89988708496094, 99.2756118774414);
        this.add(tabs);

        // consoletab
        const consoletab = scene.add.image(79.10011291503906, 12.724388122558594, "missionmenu", "consoletab");
        tabs.add(consoletab);

        // currentitle
        const currentitle = scene.add.text(0, 0, "", {});
        currentitle.text = "CURRENT";
        currentitle.setStyle({ "color": "#E0FFCC", "fontFamily": "CPLCD", "fontSize": "33px" });
        currentitle.setPadding({"left":10,"right":10});
        tabs.add(currentitle);

        // consoletab_1
        const consoletab_1 = scene.add.image(78.99998474121094, 380.99999237060547, "missionmenu", "consoletab");
        tabs.add(consoletab_1);

        // trainingtitle
        const trainingtitle = scene.add.text(0, 366.99999237060547, "", {});
        trainingtitle.text = "TRAINING";
        trainingtitle.setStyle({ "color": "#E0FFCC", "fontFamily": "CPLCD", "fontSize": "33px" });
        trainingtitle.setPadding({"left":10,"right":10});
        tabs.add(trainingtitle);

        // consoletab_2
        const consoletab_2 = scene.add.image(691.0000152587891, 15, "missionmenu", "consoletab");
        tabs.add(consoletab_2);

        // infotitle
        const infotitle = scene.add.text(613.0000152587891, 0, "", {});
        infotitle.text = "INFO";
        infotitle.setStyle({ "color": "#E0FFCC", "fontFamily": "CPLCD", "fontSize": "33px" });
        infotitle.setPadding({"left":10,"right":10});
        tabs.add(infotitle);

        // currentScrollDown
        const currentScrollDown = scene.add.image(724, 398, "missionmenu", "scroll-btn");
        this.add(currentScrollDown);

        // currentScrollUp
        const currentScrollUp = scene.add.image(724, 168, "missionmenu", "scroll-btn");
        currentScrollUp.flipY = true;
        this.add(currentScrollUp);

        // trainingScrollUp
        const trainingScrollUp = scene.add.image(724, 537, "missionmenu", "scroll-btn");
        trainingScrollUp.flipY = true;
        this.add(trainingScrollUp);

        // trainingScrollDown
        const trainingScrollDown = scene.add.image(724, 767, "missionmenu", "scroll-btn");
        this.add(trainingScrollDown);

        // greenlight0001
        const greenlight0001 = scene.add.sprite(223.39988036004965, 839.2756149693346, "missionmenu", "greenlight0001");
        this.add(greenlight0001);

        // redlight0001
        const redlight0001 = scene.add.sprite(173.89988036004965, 839.2756149693346, "missionmenu", "redlight0001");
        this.add(redlight0001);

        // grey_button
        const grey_button = scene.add.image(1362.8998803600498, 103.27561496933461, "main", "grey-button");
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(1362.8998803600498, 102.27561496933461, "main", "grey-x");
        this.add(grey_x);

        // block (components)
        new Interactive(block);

        // currentSlot3 (components)
        const currentSlot3SimpleButton = new SimpleButton(currentSlot3);
        currentSlot3SimpleButton.hoverCallback = () => { currentSlot3.fillColor = 3107863 };
        currentSlot3SimpleButton.hoverOutCallback = () => { currentSlot3.fillColor = 13056 };
        currentSlot3SimpleButton.callback = () => this.selectMission(this.currentMissionSplit[2]);

        // currentSlot2 (components)
        const currentSlot2SimpleButton = new SimpleButton(currentSlot2);
        currentSlot2SimpleButton.hoverCallback = () => { currentSlot2.fillColor = 3107863 };
        currentSlot2SimpleButton.hoverOutCallback = () => { currentSlot2.fillColor = 13056 };
        currentSlot2SimpleButton.callback = () => this.selectMission(this.currentMissionSplit[1]);

        // currentSlot1 (components)
        const currentSlot1SimpleButton = new SimpleButton(currentSlot1);
        currentSlot1SimpleButton.hoverCallback = () => { currentSlot1.fillColor = 3107863 };
        currentSlot1SimpleButton.hoverOutCallback = () => { currentSlot1.fillColor = 13056 };
        currentSlot1SimpleButton.callback = () => this.selectMission(this.currentMissionSplit[0]);

        // trainingSlot3 (components)
        const trainingSlot3SimpleButton = new SimpleButton(trainingSlot3);
        trainingSlot3SimpleButton.hoverCallback = () => { trainingSlot3.fillColor = 3107863 };
        trainingSlot3SimpleButton.hoverOutCallback = () => { trainingSlot3.fillColor = 13056 };
        trainingSlot3SimpleButton.callback = () => this.selectMission(this.trainingMissionSplit[2]);

        // trainingSlot2 (components)
        const trainingSlot2SimpleButton = new SimpleButton(trainingSlot2);
        trainingSlot2SimpleButton.hoverCallback = () => { trainingSlot2.fillColor = 3107863 };
        trainingSlot2SimpleButton.hoverOutCallback = () => { trainingSlot2.fillColor = 13056 };
        trainingSlot2SimpleButton.callback = () => this.selectMission(this.trainingMissionSplit[1]);

        // trainingSlot1 (components)
        const trainingSlot1SimpleButton = new SimpleButton(trainingSlot1);
        trainingSlot1SimpleButton.hoverCallback = () => { trainingSlot1.fillColor = 3107863 };
        trainingSlot1SimpleButton.hoverOutCallback = () => { trainingSlot1.fillColor = 13056 };
        trainingSlot1SimpleButton.callback = () => this.selectMission(this.trainingMissionSplit[0]);

        // launchMissionBtn (components)
        const launchMissionBtnButton = new Button(launchMissionBtn);
        launchMissionBtnButton.spriteName = "launch-btn";
        launchMissionBtnButton.callback = () => this.launchMission();
        launchMissionBtnButton.activeFrame = true;

        // currentScrollDown (components)
        const currentScrollDownButton = new Button(currentScrollDown);
        currentScrollDownButton.spriteName = "scroll-btn";
        currentScrollDownButton.callback = () => this.currentScroll("down");

        // currentScrollUp (components)
        const currentScrollUpButton = new Button(currentScrollUp);
        currentScrollUpButton.spriteName = "scroll-btn";
        currentScrollUpButton.callback = () => this.currentScroll("up");

        // trainingScrollUp (components)
        const trainingScrollUpButton = new Button(trainingScrollUp);
        trainingScrollUpButton.spriteName = "scroll-btn";
        trainingScrollUpButton.callback = () => this.trainingScroll("up");

        // trainingScrollDown (components)
        const trainingScrollDownButton = new Button(trainingScrollDown);
        trainingScrollDownButton.spriteName = "scroll-btn";
        trainingScrollDownButton.callback = () => this.trainingScroll("down");

        // greenlight0001 (components)
        const greenlight0001Animation = new Animation(greenlight0001);
        greenlight0001Animation.key = "greenlight";
        greenlight0001Animation.end = 43;

        // redlight0001 (components)
        const redlight0001Animation = new Animation(redlight0001);
        redlight0001Animation.key = "redlight";
        redlight0001Animation.end = 43;

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => this.hide();
        grey_buttonButton.activeFrame = true;

        this.currentSlot3 = currentSlot3;
        this.currentSlot2 = currentSlot2;
        this.currentSlot1 = currentSlot1;
        this.trainingSlot3 = trainingSlot3;
        this.trainingSlot2 = trainingSlot2;
        this.trainingSlot1 = trainingSlot1;
        this.currentContainer = currentContainer;
        this.trainingContainer = trainingContainer;
        this.launchMissionBtn = launchMissionBtn;
        this.missionTitle = missionTitle;
        this.missionDescription = missionDescription;
        this.missionPreview = missionPreview;
        this.missionContainer = missionContainer;
        this.clickATitle = clickATitle;
        this.flashbang = flashbang;

        /* START-USER-CTR-CODE */
        this.currentMask = new Phaser.Display.Masks.GeometryMask(this, this.scene.make.graphics().fillRect(186, 136, 522, 290))
        this.trainingMask = new Phaser.Display.Masks.GeometryMask(this, this.scene.make.graphics().fillRect(186, 504, 522, 290))
        this.currentContainer.setMask(this.currentMask)
        this.trainingContainer.setMask(this.trainingMask)

        this.missions = [
            {
                name: 'Case of the Missing Puffles',
                description: 'Aunt Arctic, famous reporter for the Club Penguin Times, is very upset, because two of her pet puffles are missing! Will you take the challenge of rescuing them?',
                missionId: 931,
                completionId: 801
            },
            {
                name: 'G\'s Secret Mission',
                description: 'G, the brilliant inventor for the Penguin secret agency, needs your help with one of his newest projects. What could g be up to now?',
                missionId: 932,
                completionId: 803
            },
            {
                name: 'Case of the Missing Coins',
                description: 'The coins from the vault in the Gift shop have mysteriously gone missing. Will you help find them and solve the mystery?',
                missionId: 933,
                completionId: 805
            },
            {
                name: 'Avalanche Rescue',
                description: 'There has been an avalanche on the ski hill, and your help is needed. will you answer the call?',
                missionId: 934,
                completionId: 808
            },
            {
                name: 'Secret of the Fur',
                description: 'The mystery of the fur remains unsolved. Will you help G to unravel its secret?',
                missionId: 935,
                completionId: 810
            },
            {
                name: 'Questions For a Crab',
                description: 'Many questions remain that only a crab can answer.',
                missionId: 936,
                completionId: 813
            },
            {
                name: 'Clockwork Repairs',
                description: 'The clock tower needs repair, and g needs your help. Can you fix it in time?',
                missionId: 937,
                completionId: 815
            },
            {
                name: 'Mysterious Tremors',
                description: 'Terrible tremors have been shaking things up around the island. Can you solve this mysterious menace?',
                missionId: 938,
                completionId: 817
            },
            {
                name: 'Operation: Spy & Seek',
                description: 'You\'ve been contacted for a special mission to track down Herbert. Can you bear down on his location?',
                missionId: 939,
                completionId: 819
            },
            {
                name: 'Waddle Squad',
                description: 'The PSA needs you for a special team mission. Can you work well with others?',
                missionId: 940,
                completionId: 822
            },
            {
                name: 'The Veggie Villian',
                description: 'Another incident has been reported involving Herbert P. Bear. Are you ready for the big showdown?',
                missionId: 941,
                completionId: 8007
            }
        ]

        this.missionsCount = []
        for(let i = 0; i < this.missions.length; i++) this.missionsCount.push(i)
        this.classifiedString = 'This mission is classified. You must complete the most recently unlocked mission in order to go on this one.'

        this.currentMission = 0
        this.topPageIndex = 3 //determine when to not scroll up anymore. this value does not change
        this.trainingScrollIndex = 3
        this.currentScrollIndex = 3 //this is for scrolling up and down, preventing you from hitting certain points
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    // Write your code here.
    show(){
        this.currentScrollIndex = 3
        this.trainingScrollIndex = 3

        this.currentMList = []
        this.trainingMList = []

        this.currentMCount = []
        this.trainingMCount = []

        this.currentMStartI = 0
        this.currentMEndI = 3
        this.currentMissionSplit = []

        this.trainingMStartI = 0
        this.trainingMEndI = 3
        this.trainingMissionSplit = []

        this.clickATitle.visible = true
        this.missionContainer.visible = false
        this.currentMission = 0
        this.tweenRunning = false
        let yIndexC = 0
        let yIndexT = 0
        for(let i = 0; i < this.missions.length; i++) {
            let mItem = null
            if(this.world.client.hasItem(this.missions[i].completionId)) {
            //if(false) {
                mItem = new MissionItem(this.scene, 0, yIndexT)
                this.trainingContainer.add(mItem)
                this.trainingMList.push(mItem)
                this.trainingMCount.push(i)
                yIndexT += 98
            } else {
                mItem = new MissionItem(this.scene, 0, yIndexC)
                this.currentContainer.add(mItem)
                this.currentMList.push(mItem)
                this.currentMCount.push(i)
                yIndexC += 98
            }
            this.currentMissionSplit = this.currentMCount.slice(this.currentMStartI,this.currentMEndI)
            this.trainingMissionSplit = this.trainingMCount.slice(this.trainingMStartI,this.trainingMEndI)

            mItem.setInfo(this.missions[i].name,i,() => this.selectMission(i),(i == 0 ? this.missions[0].completionId : this.missions[i - 1].completionId))
        }
        if(this.currentMissionSplit.length < 3) this.currentSlot3.visible = false
        if(this.currentMissionSplit.length < 2) this.currentSlot2.visible = false
        if(this.currentMissionSplit.length < 1) this.currentSlot1.visible = false
        if(this.trainingMissionSplit.length < 3) this.trainingSlot3.visible = false
        if(this.trainingMissionSplit.length < 2) this.trainingSlot2.visible = false
        if(this.trainingMissionSplit.length < 1) this.trainingSlot1.visible = false
        super.show()
    }

    hide(){
        this.close()
        this.interface.destroyWidget(this)
    }

    currentScroll(dir) {
       if((dir == "up" && this.currentScrollIndex <= this.topPageIndex) || (dir == "down" && (this.currentScrollIndex == this.currentMCount.length || this.currentMCount.length < 4))) return
       if(this.currentTweenRunning) return
       if(dir == "down") {
           this.currentScrollIndex++
           this.currentMStartI++
           this.currentMEndI++
       } else {
           this.currentScrollIndex--
           this.currentMStartI--
           this.currentMEndI--
       }
       this.currentMissionSplit = this.currentMCount.slice(this.currentMStartI,this.currentMEndI)
       this.currentTweenRunning = true
       this.scene.tweens.add({
            targets: this.currentContainer,
            y: {
                from: this.currentContainer.y, 
                to: (this.currentContainer.y + (dir == "down" ? -98 : 98))
            },
            duration: 520,
            ease: Phaser.Math.Easing.Cubic.InOut,
            onComplete: () => {
                this.currentTweenRunning = false
            }
        })
    }

    trainingScroll(dir) {
       if((dir == "up" && this.trainingScrollIndex <= this.topPageIndex) || (dir == "down" && (this.trainingScrollIndex == this.trainingMCount.length || this.trainingMCount.length < 4))) return
       if(this.trainingTweenRunning) return
       if(dir == "down") {
           this.trainingScrollIndex++
           this.trainingMStartI++
           this.trainingMEndI++
       } else {
           this.trainingScrollIndex--
           this.trainingMStartI--
           this.trainingMEndI--
       }
       this.trainingMissionSplit = this.trainingMCount.slice(this.trainingMStartI,this.trainingMEndI)
       this.trainingTweenRunning = true
       this.scene.tweens.add({
            targets: this.trainingContainer,
            y: {
                from: this.trainingContainer.y, 
                to: (this.trainingContainer.y + (dir == "down" ? -98 : 98))
            },
            duration: 520,
            ease: Phaser.Math.Easing.Cubic.InOut,
            onComplete: () => {
                this.trainingTweenRunning = false
            }
        })
    }

    selectMission(id) {
        this.currentMission = id
        if(this.selectTweenRunning) return //to prevent a bug where it will remain at one spot in the tween
        this.selectTweenRunning = true
        this.soundManager.playSfx('click')
        this.tween = this.scene.tweens.add({
          targets: this.flashbang,
          alpha: 1,
          duration: 180,
          yoyo: true,
          onYoyo: () => {
            this.clickATitle.visible = false
            this.missionContainer.visible = true
            this.missionTitle.text = this.missions[this.currentMission].name.toUpperCase()
            //if(this.currentMission == 0 || this.world.client.hasItem(this.missions[this.currentMission - 1].completionId)) {
			if(true) {
                this.missionDescription.text = this.missions[this.currentMission].description.toUpperCase()
                this.missionPreview.setTexture('missionmenu',`mission${this.currentMission + 1}preview`)
                this.launchMissionBtn.visible = true
            } else {
                this.launchMissionBtn.visible = false
                this.missionDescription.text = this.classifiedString.toUpperCase()
                this.missionPreview.setTexture('missionmenu','classifiedpreview')
            }
          },
          onComplete: () => {
            this.selectTweenRunning = false
          }
        });
    }

    launchMission(){
        this.soundManager.playSfx('click')
		this.hide()
        this.world.client.penguin.room.triggerGame(this.missions[this.currentMission].missionId)
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
