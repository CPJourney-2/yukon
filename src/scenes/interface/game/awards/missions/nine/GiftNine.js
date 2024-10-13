import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton, Interactive } from '@components/components'

export const preload = {
    key: 'giftnine-pack',
    url: 'assets/media/interface/game/awards/missions/nine/giftnine-pack.json',
    loadString: ['loading', 'award_q9_gift']
}

/* START OF COMPILED CODE */

export default class GiftNine extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Sprite} */
        this.rowFourCrumbsFour;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowFourChocolateFour;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowFourCrumbsThree;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowFourChocolateThree;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowFourCrumbsTwo;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowFourChocolateTwo;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowFourCrumbsOne;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowFourChocolateOne;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowThreeCrumbsFour;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowThreeChocolateFour;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowThreeCrumbsThree;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowThreeChocolateThree;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowThreeCrumbsTwo;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowThreeChocolateTwo;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowThreeCrumbsOne;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowThreeChocolateOne;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowTwoCrumbsFour;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowTwoChocolateFour;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowTwoCrumbsThree;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowTwoChocolateThree;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowTwoCrumbsTwo;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowTwoChocolateTwo;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowTwoCrumbsOne;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowTwoChocolateOne;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowOneCrumbsFour;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowOneChocolateFour;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowOneCrumbsThree;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowOneChocolateThree;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowOneCrumbsTwo;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowOneChocolateTwo;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowOneCrumbsOne;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rowOneChocolateOne;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rowFourButtonFour;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rowFourButtonThree;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rowFourButtonTwo;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rowFourButtonOne;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rowThreeButtonFour;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rowThreeButtonThree;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rowThreeButtonTwo;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rowThreeButtonOne;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rowTwoButtonFour;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rowTwoButtonThree;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rowTwoButtonTwo;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rowTwoButtonOne;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rowOneButtonFour;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rowOneButtonThree;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rowOneButtonTwo;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rowOneButtonOne;


        // block
        const block = scene.add.rectangle(-12, 10, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // boxlid
        const boxlid = scene.add.image(144, -156, "giftnine", "boxlid");
        this.add(boxlid);

        // boxback
        const boxback = scene.add.image(-40, 215, "giftnine", "boxback");
        this.add(boxback);

        // rowFourChocolates
        const rowFourChocolates = scene.add.container(-760, -480);
        this.add(rowFourChocolates);

        // rowFourCrumbsFour
        const rowFourCrumbsFour = scene.add.sprite(1049.4783935546875, 576.4992065429688, "giftnine", "rowFour/crumbs/rowFourCrumbs0002");
        rowFourCrumbsFour.scaleX = 0.65;
        rowFourCrumbsFour.scaleY = 0.5;
        rowFourCrumbsFour.visible = false;
        rowFourChocolates.add(rowFourCrumbsFour);

        // rowFourChocolateFour
        const rowFourChocolateFour = scene.add.sprite(1053, 537, "giftnine", "rowFour/chocolate/rowFourChocolate0001");
        rowFourChocolates.add(rowFourChocolateFour);

        // rowFourCrumbsThree
        const rowFourCrumbsThree = scene.add.sprite(900, 572, "giftnine", "rowFour/crumbs/rowFourCrumbs0002");
        rowFourCrumbsThree.scaleX = 0.65;
        rowFourCrumbsThree.scaleY = 0.5;
        rowFourCrumbsThree.visible = false;
        rowFourChocolates.add(rowFourCrumbsThree);

        // rowFourChocolateThree
        const rowFourChocolateThree = scene.add.sprite(904, 533, "giftnine", "rowFour/chocolate/rowFourChocolate0001");
        rowFourChocolates.add(rowFourChocolateThree);

        // rowFourCrumbsTwo
        const rowFourCrumbsTwo = scene.add.sprite(772, 566, "giftnine", "rowFour/crumbs/rowFourCrumbs0002");
        rowFourCrumbsTwo.scaleX = 0.65;
        rowFourCrumbsTwo.scaleY = 0.5;
        rowFourCrumbsTwo.visible = false;
        rowFourChocolates.add(rowFourCrumbsTwo);

        // rowFourChocolateTwo
        const rowFourChocolateTwo = scene.add.sprite(773, 528, "giftnine", "rowFour/chocolate/rowFourChocolate0001");
        rowFourChocolates.add(rowFourChocolateTwo);

        // rowFourCrumbsOne
        const rowFourCrumbsOne = scene.add.sprite(654, 562, "giftnine", "rowFour/crumbs/rowFourCrumbs0002");
        rowFourCrumbsOne.scaleX = 0.65;
        rowFourCrumbsOne.scaleY = 0.5;
        rowFourCrumbsOne.visible = false;
        rowFourChocolates.add(rowFourCrumbsOne);

        // rowFourChocolateOne
        const rowFourChocolateOne = scene.add.sprite(661, 526, "giftnine", "rowFour/chocolate/rowFourChocolate0001");
        rowFourChocolates.add(rowFourChocolateOne);

        // rowThreeChocolates
        const rowThreeChocolates = scene.add.container(-760, -480);
        this.add(rowThreeChocolates);

        // rowThreeCrumbsFour
        const rowThreeCrumbsFour = scene.add.sprite(1037.1622314453125, 622.350830078125, "giftnine", "rowThree/crumbs/rowThreeCrumbs0002");
        rowThreeCrumbsFour.scaleX = 0.65;
        rowThreeCrumbsFour.scaleY = 0.5;
        rowThreeCrumbsFour.visible = false;
        rowThreeChocolates.add(rowThreeCrumbsFour);

        // rowThreeChocolateFour
        const rowThreeChocolateFour = scene.add.sprite(1038, 578, "giftnine", "rowThree/chocolate/rowThreeChocolate0001");
        rowThreeChocolates.add(rowThreeChocolateFour);

        // rowThreeCrumbsThree
        const rowThreeCrumbsThree = scene.add.sprite(879.5298461914062, 615.5775756835938, "giftnine", "rowThree/crumbs/rowThreeCrumbs0002");
        rowThreeCrumbsThree.scaleX = 0.65;
        rowThreeCrumbsThree.scaleY = 0.5;
        rowThreeCrumbsThree.visible = false;
        rowThreeChocolates.add(rowThreeCrumbsThree);

        // rowThreeChocolateThree
        const rowThreeChocolateThree = scene.add.sprite(881, 571, "giftnine", "rowThree/chocolate/rowThreeChocolate0001");
        rowThreeChocolates.add(rowThreeChocolateThree);

        // rowThreeCrumbsTwo
        const rowThreeCrumbsTwo = scene.add.sprite(739.138427734375, 608.8043212890625, "giftnine", "rowThree/crumbs/rowThreeCrumbs0002");
        rowThreeCrumbsTwo.scaleX = 0.65;
        rowThreeCrumbsTwo.scaleY = 0.5;
        rowThreeCrumbsTwo.visible = false;
        rowThreeChocolates.add(rowThreeCrumbsTwo);

        // rowThreeChocolateTwo
        const rowThreeChocolateTwo = scene.add.sprite(741, 564, "giftnine", "rowThree/chocolate/rowThreeChocolate0001");
        rowThreeChocolates.add(rowThreeChocolateTwo);

        // rowThreeCrumbsOne
        const rowThreeCrumbsOne = scene.add.sprite(619, 603, "giftnine", "rowThree/crumbs/rowThreeCrumbs0002");
        rowThreeCrumbsOne.scaleX = 0.65;
        rowThreeCrumbsOne.scaleY = 0.5;
        rowThreeCrumbsOne.visible = false;
        rowThreeChocolates.add(rowThreeCrumbsOne);

        // rowThreeChocolateOne
        const rowThreeChocolateOne = scene.add.sprite(622, 559, "giftnine", "rowThree/chocolate/rowThreeChocolate0001");
        rowThreeChocolates.add(rowThreeChocolateOne);

        // rowTwoChocolates
        const rowTwoChocolates = scene.add.container(-760, -480);
        this.add(rowTwoChocolates);

        // rowTwoCrumbsFour
        const rowTwoCrumbsFour = scene.add.sprite(1013.6121215820312, 674.9100341796875, "giftnine", "rowTwo/crumbs/rowTwoCrumbs0002");
        rowTwoCrumbsFour.scaleX = 0.8;
        rowTwoCrumbsFour.scaleY = 0.7;
        rowTwoCrumbsFour.visible = false;
        rowTwoChocolates.add(rowTwoCrumbsFour);

        // rowTwoChocolateFour
        const rowTwoChocolateFour = scene.add.sprite(1015, 618, "giftnine", "rowTwo/chocolate/rowTwoChocolate0001");
        rowTwoChocolates.add(rowTwoChocolateFour);

        // rowTwoCrumbsThree
        const rowTwoCrumbsThree = scene.add.sprite(851.6622924804688, 664.461669921875, "giftnine", "rowTwo/crumbs/rowTwoCrumbs0002");
        rowTwoCrumbsThree.scaleX = 0.8;
        rowTwoCrumbsThree.scaleY = 0.7;
        rowTwoCrumbsThree.visible = false;
        rowTwoChocolates.add(rowTwoCrumbsThree);

        // rowTwoChocolateThree
        const rowTwoChocolateThree = scene.add.sprite(853, 609, "giftnine", "rowTwo/chocolate/rowTwoChocolate0001");
        rowTwoChocolates.add(rowTwoChocolateThree);

        // rowTwoCrumbsTwo
        const rowTwoCrumbsTwo = scene.add.sprite(701.3521728515625, 656.9171142578125, "giftnine", "rowTwo/crumbs/rowTwoCrumbs0002");
        rowTwoCrumbsTwo.scaleX = 0.8;
        rowTwoCrumbsTwo.scaleY = 0.7;
        rowTwoCrumbsTwo.visible = false;
        rowTwoChocolates.add(rowTwoCrumbsTwo);

        // rowTwoChocolateTwo
        const rowTwoChocolateTwo = scene.add.sprite(704, 601, "giftnine", "rowTwo/chocolate/rowTwoChocolate0001");
        rowTwoChocolates.add(rowTwoChocolateTwo);

        // rowTwoCrumbsOne
        const rowTwoCrumbsOne = scene.add.sprite(560, 651, "giftnine", "rowTwo/crumbs/rowTwoCrumbs0002");
        rowTwoCrumbsOne.scaleX = 0.8;
        rowTwoCrumbsOne.scaleY = 0.7;
        rowTwoCrumbsOne.visible = false;
        rowTwoChocolates.add(rowTwoCrumbsOne);

        // rowTwoChocolateOne
        const rowTwoChocolateOne = scene.add.sprite(565, 595, "giftnine", "rowTwo/chocolate/rowTwoChocolate0001");
        rowTwoChocolates.add(rowTwoChocolateOne);

        // rowOneChocolates
        const rowOneChocolates = scene.add.container(-760, -480);
        this.add(rowOneChocolates);

        // rowOneCrumbsFour
        const rowOneCrumbsFour = scene.add.sprite(968, 752, "giftnine", "rowOne/crumbs/rowOneCrumbs0002");
        rowOneCrumbsFour.visible = false;
        rowOneChocolates.add(rowOneCrumbsFour);

        // rowOneChocolateFour
        const rowOneChocolateFour = scene.add.sprite(970, 660, "giftnine", "rowOne/chocolate/rowOneChocolate0001");
        rowOneChocolates.add(rowOneChocolateFour);

        // rowOneCrumbsThree
        const rowOneCrumbsThree = scene.add.sprite(801, 740, "giftnine", "rowOne/crumbs/rowOneCrumbs0002");
        rowOneCrumbsThree.visible = false;
        rowOneChocolates.add(rowOneCrumbsThree);

        // rowOneChocolateThree
        const rowOneChocolateThree = scene.add.sprite(804, 650, "giftnine", "rowOne/chocolate/rowOneChocolate0001");
        rowOneChocolates.add(rowOneChocolateThree);

        // rowOneCrumbsTwo
        const rowOneCrumbsTwo = scene.add.sprite(637, 733, "giftnine", "rowOne/crumbs/rowOneCrumbs0002");
        rowOneCrumbsTwo.visible = false;
        rowOneChocolates.add(rowOneCrumbsTwo);

        // rowOneChocolateTwo
        const rowOneChocolateTwo = scene.add.sprite(641, 641, "giftnine", "rowOne/chocolate/rowOneChocolate0001");
        rowOneChocolates.add(rowOneChocolateTwo);

        // rowOneCrumbsOne
        const rowOneCrumbsOne = scene.add.sprite(476, 719, "giftnine", "rowOne/crumbs/rowOneCrumbs0002");
        rowOneCrumbsOne.visible = false;
        rowOneChocolates.add(rowOneCrumbsOne);

        // rowOneChocolateOne
        const rowOneChocolateOne = scene.add.sprite(475, 629, "giftnine", "rowOne/chocolate/rowOneChocolate0001");
        rowOneChocolates.add(rowOneChocolateOne);

        // rowFourButtons
        const rowFourButtons = scene.add.container(-760, -480);
        this.add(rowFourButtons);

        // rowFourButtonFour
        const rowFourButtonFour = scene.add.rectangle(1053.870361328125, 575.9882202148438, 65, 25);
        rowFourButtons.add(rowFourButtonFour);

        // rowFourButtonThree
        const rowFourButtonThree = scene.add.rectangle(902.7662353515625, 572.04638671875, 65, 25);
        rowFourButtons.add(rowFourButtonThree);

        // rowFourButtonTwo
        const rowFourButtonTwo = scene.add.rectangle(770.71435546875, 566.7905883789062, 65, 25);
        rowFourButtons.add(rowFourButtonTwo);

        // rowFourButtonOne
        const rowFourButtonOne = scene.add.rectangle(660.3426513671875, 563.5056762695312, 65, 25);
        rowFourButtons.add(rowFourButtonOne);

        // rowThreeButtons
        const rowThreeButtons = scene.add.container(-760, -480);
        this.add(rowThreeButtons);

        // rowThreeButtonFour
        const rowThreeButtonFour = scene.add.rectangle(1036.7890625, 621.3194580078125, 75, 30);
        rowThreeButtons.add(rowThreeButtonFour);

        // rowThreeButtonThree
        const rowThreeButtonThree = scene.add.rectangle(879.1151733398438, 614.0927124023438, 75, 30);
        rowThreeButtons.add(rowThreeButtonThree);

        // rowThreeButtonTwo
        const rowThreeButtonTwo = scene.add.rectangle(739.8365478515625, 609.493896484375, 75, 30);
        rowThreeButtons.add(rowThreeButtonTwo);

        // rowThreeButtonOne
        const rowThreeButtonOne = scene.add.rectangle(622, 604, 75, 30);
        rowThreeButtons.add(rowThreeButtonOne);

        // rowTwoButtons
        const rowTwoButtons = scene.add.container(-760, -480);
        this.add(rowTwoButtons);

        // rowTwoButtonFour
        const rowTwoButtonFour = scene.add.rectangle(1014.451904296875, 673.87744140625, 80, 40);
        rowTwoButtons.add(rowTwoButtonFour);

        // rowTwoButtonThree
        const rowTwoButtonThree = scene.add.rectangle(849.62255859375, 664.0401000976562, 80, 40);
        rowTwoButtons.add(rowTwoButtonThree);

        // rowTwoButtonTwo
        const rowTwoButtonTwo = scene.add.rectangle(702.1611328125, 657.1278076171875, 80, 40);
        rowTwoButtons.add(rowTwoButtonTwo);

        // rowTwoButtonOne
        const rowTwoButtonOne = scene.add.rectangle(562.7639770507812, 650.215576171875, 80, 40);
        rowTwoButtons.add(rowTwoButtonOne);

        // rowOneButtons
        const rowOneButtons = scene.add.container(-760, -480);
        this.add(rowOneButtons);

        // rowOneButtonFour
        const rowOneButtonFour = scene.add.rectangle(967.130859375, 751.5952758789062, 100, 60);
        rowOneButtons.add(rowOneButtonFour);

        // rowOneButtonThree
        const rowOneButtonThree = scene.add.rectangle(800.084716796875, 740.0748901367188, 100, 60);
        rowOneButtons.add(rowOneButtonThree);

        // rowOneButtonTwo
        const rowOneButtonTwo = scene.add.rectangle(641.1029052734375, 733.4666748046875, 100, 60);
        rowOneButtons.add(rowOneButtonTwo);

        // rowOneButtonOne
        const rowOneButtonOne = scene.add.rectangle(476, 719, 100, 60);
        rowOneButtons.add(rowOneButtonOne);

        // boxlabel
        const boxlabel = scene.add.image(-36, 251, "giftnine", "boxlabel");
        this.add(boxlabel);

        // closebutton
        const closebutton = scene.add.sprite(376, -382, "giftnine", "closebutton");
        this.add(closebutton);

        // block (components)
        new Interactive(block);

        // rowFourButtonFour (components)
        const rowFourButtonFourSimpleButton = new SimpleButton(rowFourButtonFour);
        rowFourButtonFourSimpleButton.callback = () => this.rowFourChocolateFourClick();

        // rowFourButtonThree (components)
        const rowFourButtonThreeSimpleButton = new SimpleButton(rowFourButtonThree);
        rowFourButtonThreeSimpleButton.callback = () => this.rowFourChocolateThreeClick();

        // rowFourButtonTwo (components)
        const rowFourButtonTwoSimpleButton = new SimpleButton(rowFourButtonTwo);
        rowFourButtonTwoSimpleButton.callback = () => this.rowFourChocolateTwoClick();

        // rowFourButtonOne (components)
        const rowFourButtonOneSimpleButton = new SimpleButton(rowFourButtonOne);
        rowFourButtonOneSimpleButton.callback = () => this.rowFourChocolateOneClick();

        // rowThreeButtonFour (components)
        const rowThreeButtonFourSimpleButton = new SimpleButton(rowThreeButtonFour);
        rowThreeButtonFourSimpleButton.callback = () => this.rowThreeChocolateFourClick();

        // rowThreeButtonThree (components)
        const rowThreeButtonThreeSimpleButton = new SimpleButton(rowThreeButtonThree);
        rowThreeButtonThreeSimpleButton.callback = () => this.rowThreeChocolateThreeClick();

        // rowThreeButtonTwo (components)
        const rowThreeButtonTwoSimpleButton = new SimpleButton(rowThreeButtonTwo);
        rowThreeButtonTwoSimpleButton.callback = () => this.rowThreeChocolateTwoClick();

        // rowThreeButtonOne (components)
        const rowThreeButtonOneSimpleButton = new SimpleButton(rowThreeButtonOne);
        rowThreeButtonOneSimpleButton.callback = () => this.rowThreeChocolateOneClick();

        // rowTwoButtonFour (components)
        const rowTwoButtonFourSimpleButton = new SimpleButton(rowTwoButtonFour);
        rowTwoButtonFourSimpleButton.callback = () => this.rowTwoChocolateFourClick();

        // rowTwoButtonThree (components)
        const rowTwoButtonThreeSimpleButton = new SimpleButton(rowTwoButtonThree);
        rowTwoButtonThreeSimpleButton.callback = () => this.rowTwoChocolateThreeClick();

        // rowTwoButtonTwo (components)
        const rowTwoButtonTwoSimpleButton = new SimpleButton(rowTwoButtonTwo);
        rowTwoButtonTwoSimpleButton.callback = () => this.rowTwoChocolateTwoClick();

        // rowTwoButtonOne (components)
        const rowTwoButtonOneSimpleButton = new SimpleButton(rowTwoButtonOne);
        rowTwoButtonOneSimpleButton.callback = () => this.rowTwoChocolateOneClick();

        // rowOneButtonFour (components)
        const rowOneButtonFourSimpleButton = new SimpleButton(rowOneButtonFour);
        rowOneButtonFourSimpleButton.callback = () => this.rowOneChocolateFourClick();

        // rowOneButtonThree (components)
        const rowOneButtonThreeSimpleButton = new SimpleButton(rowOneButtonThree);
        rowOneButtonThreeSimpleButton.callback = () => this.rowOneChocolateThreeClick();

        // rowOneButtonTwo (components)
        const rowOneButtonTwoSimpleButton = new SimpleButton(rowOneButtonTwo);
        rowOneButtonTwoSimpleButton.callback = () => this.rowOneChocolateTwoClick();

        // rowOneButtonOne (components)
        const rowOneButtonOneSimpleButton = new SimpleButton(rowOneButtonOne);
        rowOneButtonOneSimpleButton.callback = () => this.rowOneChocolateOneClick();

        // closebutton (components)
        const closebuttonButton = new Button(closebutton);
        closebuttonButton.spriteName = "closebutton";
        closebuttonButton.callback = () => this.interface.destroyWidget(this);;

        this.rowFourCrumbsFour = rowFourCrumbsFour;
        this.rowFourChocolateFour = rowFourChocolateFour;
        this.rowFourCrumbsThree = rowFourCrumbsThree;
        this.rowFourChocolateThree = rowFourChocolateThree;
        this.rowFourCrumbsTwo = rowFourCrumbsTwo;
        this.rowFourChocolateTwo = rowFourChocolateTwo;
        this.rowFourCrumbsOne = rowFourCrumbsOne;
        this.rowFourChocolateOne = rowFourChocolateOne;
        this.rowThreeCrumbsFour = rowThreeCrumbsFour;
        this.rowThreeChocolateFour = rowThreeChocolateFour;
        this.rowThreeCrumbsThree = rowThreeCrumbsThree;
        this.rowThreeChocolateThree = rowThreeChocolateThree;
        this.rowThreeCrumbsTwo = rowThreeCrumbsTwo;
        this.rowThreeChocolateTwo = rowThreeChocolateTwo;
        this.rowThreeCrumbsOne = rowThreeCrumbsOne;
        this.rowThreeChocolateOne = rowThreeChocolateOne;
        this.rowTwoCrumbsFour = rowTwoCrumbsFour;
        this.rowTwoChocolateFour = rowTwoChocolateFour;
        this.rowTwoCrumbsThree = rowTwoCrumbsThree;
        this.rowTwoChocolateThree = rowTwoChocolateThree;
        this.rowTwoCrumbsTwo = rowTwoCrumbsTwo;
        this.rowTwoChocolateTwo = rowTwoChocolateTwo;
        this.rowTwoCrumbsOne = rowTwoCrumbsOne;
        this.rowTwoChocolateOne = rowTwoChocolateOne;
        this.rowOneCrumbsFour = rowOneCrumbsFour;
        this.rowOneChocolateFour = rowOneChocolateFour;
        this.rowOneCrumbsThree = rowOneCrumbsThree;
        this.rowOneChocolateThree = rowOneChocolateThree;
        this.rowOneCrumbsTwo = rowOneCrumbsTwo;
        this.rowOneChocolateTwo = rowOneChocolateTwo;
        this.rowOneCrumbsOne = rowOneCrumbsOne;
        this.rowOneChocolateOne = rowOneChocolateOne;
        this.rowFourButtonFour = rowFourButtonFour;
        this.rowFourButtonThree = rowFourButtonThree;
        this.rowFourButtonTwo = rowFourButtonTwo;
        this.rowFourButtonOne = rowFourButtonOne;
        this.rowThreeButtonFour = rowThreeButtonFour;
        this.rowThreeButtonThree = rowThreeButtonThree;
        this.rowThreeButtonTwo = rowThreeButtonTwo;
        this.rowThreeButtonOne = rowThreeButtonOne;
        this.rowTwoButtonFour = rowTwoButtonFour;
        this.rowTwoButtonThree = rowTwoButtonThree;
        this.rowTwoButtonTwo = rowTwoButtonTwo;
        this.rowTwoButtonOne = rowTwoButtonOne;
        this.rowOneButtonFour = rowOneButtonFour;
        this.rowOneButtonThree = rowOneButtonThree;
        this.rowOneButtonTwo = rowOneButtonTwo;
        this.rowOneButtonOne = rowOneButtonOne;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    rowOneChocolateOneClick(){
        this.rowOneButtonOne.visible = false
        this.rowOneChocolateOne.play('rowOneChocolate')
        this.rowOneChocolateOne.on('animationcomplete', () => {
            this.rowOneCrumbsOne.visible = true
            this.rowOneCrumbsOne.play('rowOneCrumbs')
        })
    }

    rowOneChocolateTwoClick(){
        this.rowOneButtonTwo.visible = false
        this.rowOneChocolateTwo.play('rowOneChocolate')
        this.rowOneChocolateTwo.on('animationcomplete', () => {
            this.rowOneCrumbsTwo.visible = true
            this.rowOneCrumbsTwo.play('rowOneCrumbs')
        })
    }

    rowOneChocolateThreeClick(){
        this.rowOneButtonThree.visible = false
        this.rowOneChocolateThree.play('rowOneChocolate')
        this.rowOneChocolateThree.on('animationcomplete', () => {
            this.rowOneCrumbsThree.visible = true
            this.rowOneCrumbsThree.play('rowOneCrumbs')
        })
    }

    rowOneChocolateFourClick(){
        this.rowOneButtonFour.visible = false
        this.rowOneChocolateFour.play('rowOneChocolate')
        this.rowOneChocolateFour.on('animationcomplete', () => {
            this.rowOneCrumbsFour.visible = true
            this.rowOneCrumbsFour.play('rowOneCrumbs')
        })
    }

    rowTwoChocolateOneClick(){
        this.rowTwoButtonOne.visible = false
        this.rowTwoChocolateOne.play('rowTwoChocolate')
        this.rowTwoChocolateOne.on('animationcomplete', () => {
            this.rowTwoCrumbsOne.visible = true
            this.rowTwoCrumbsOne.play('rowTwoCrumbs')
        })
    }

    rowTwoChocolateTwoClick(){
        this.rowTwoButtonTwo.visible = false
        this.rowTwoChocolateTwo.play('rowTwoChocolate')
        this.rowTwoChocolateTwo.on('animationcomplete', () => {
            this.rowTwoCrumbsTwo.visible = true
            this.rowTwoCrumbsTwo.play('rowTwoCrumbs')
        })
    }

    rowTwoChocolateThreeClick(){
        this.rowTwoButtonThree.visible = false
        this.rowTwoChocolateThree.play('rowTwoChocolate')
        this.rowTwoChocolateThree.on('animationcomplete', () => {
            this.rowTwoCrumbsThree.visible = true
            this.rowTwoCrumbsThree.play('rowTwoCrumbs')
        })
    }

    rowTwoChocolateFourClick(){
        this.rowTwoButtonFour.visible = false
        this.rowTwoChocolateFour.play('rowTwoChocolate')
        this.rowTwoChocolateFour.on('animationcomplete', () => {
            this.rowTwoCrumbsFour.visible = true
            this.rowTwoCrumbsFour.play('rowTwoCrumbs')
        })
    }

    rowThreeChocolateOneClick(){
        this.rowThreeButtonOne.visible = false
        this.rowThreeChocolateOne.play('rowThreeChocolate')
        this.rowThreeChocolateOne.on('animationcomplete', () => {
            this.rowThreeCrumbsOne.visible = true
            this.rowThreeCrumbsOne.play('rowThreeCrumbs')
        })
    }

    rowThreeChocolateTwoClick(){
        this.rowThreeButtonTwo.visible = false
        this.rowThreeChocolateTwo.play('rowThreeChocolate')
        this.rowThreeChocolateTwo.on('animationcomplete', () => {
            this.rowThreeCrumbsTwo.visible = true
            this.rowThreeCrumbsTwo.play('rowThreeCrumbs')
        })
    }

    rowThreeChocolateThreeClick(){
        this.rowThreeButtonThree.visible = false
        this.rowThreeChocolateThree.play('rowThreeChocolate')
        this.rowThreeChocolateThree.on('animationcomplete', () => {
            this.rowThreeCrumbsThree.visible = true
            this.rowThreeCrumbsThree.play('rowThreeCrumbs')
        })
    }

    rowThreeChocolateFourClick(){
        this.rowThreeButtonFour.visible = false
        this.rowThreeChocolateFour.play('rowThreeChocolate')
        this.rowThreeChocolateFour.on('animationcomplete', () => {
            this.rowThreeCrumbsFour.visible = true
            this.rowThreeCrumbsFour.play('rowThreeCrumbs')
        })
    }

    rowFourChocolateOneClick(){
        this.rowFourButtonOne.visible = false
        this.rowFourChocolateOne.play('rowFourChocolate')
        this.rowFourChocolateOne.on('animationcomplete', () => {
            this.rowFourCrumbsOne.visible = true
            this.rowFourCrumbsOne.play('rowFourCrumbs')
        })
    }

    rowFourChocolateTwoClick(){
        this.rowFourButtonTwo.visible = false
        this.rowFourChocolateTwo.play('rowFourChocolate')
        this.rowFourChocolateTwo.on('animationcomplete', () => {
            this.rowFourCrumbsTwo.visible = true
            this.rowFourCrumbsTwo.play('rowFourCrumbs')
        })
    }

    rowFourChocolateThreeClick(){
        this.rowFourButtonThree.visible = false
        this.rowFourChocolateThree.play('rowFourChocolate')
        this.rowFourChocolateThree.on('animationcomplete', () => {
            this.rowFourCrumbsThree.visible = true
            this.rowFourCrumbsThree.play('rowFourCrumbs')
        })
    }

    rowFourChocolateFourClick(){
        this.rowFourButtonFour.visible = false
        this.rowFourChocolateFour.play('rowFourChocolate')
        this.rowFourChocolateFour.on('animationcomplete', () => {
            this.rowFourCrumbsFour.visible = true
            this.rowFourCrumbsFour.play('rowFourCrumbs')
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
