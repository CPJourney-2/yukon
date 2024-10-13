import BaseContainer from "@scenes/base/BaseContainer";
import { SimpleButton } from "@components/components";

/* START OF COMPILED CODE */

export default class MissionItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? -1, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.missionTitle;
        /** @type {Phaser.GameObjects.Image} */
        this.lockIcon;


        // rectangle
        const rectangle = scene.add.rectangle(-6, 45, 525, 98);
        rectangle.setOrigin(0, 0.5);
        rectangle.visible = false;
        rectangle.isFilled = true;
        rectangle.fillColor = 13056;
        this.add(rectangle);

        // dottedline
        const dottedline = scene.add.image(0, -5, "missionmenu", "dottedline");
        dottedline.setOrigin(0, 0);
        this.add(dottedline);

        // missionTitle
        const missionTitle = scene.add.text(0, 44.65576171875, "", {});
        missionTitle.setOrigin(0, 0.5);
        missionTitle.text = "OPERATION MISSION NAME\nSECOND LINE";
        missionTitle.setStyle({ "color": "#E0FFCC", "fixedWidth":500,"fontFamily": "CPLCD", "fontSize": "37px" });
        missionTitle.setPadding({"left":10,"right":10});
        missionTitle.setWordWrapWidth(500);
        this.add(missionTitle);

        // lockIcon
        const lockIcon = scene.add.image(476, 44, "missionmenu", "lockicon");
        lockIcon.visible = false;
        this.add(lockIcon);

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.hoverCallback = () => { rectangle.fillColor = 3107863 };
        rectangleSimpleButton.hoverOutCallback = () => { rectangle.fillColor = 13056 };
        rectangleSimpleButton.callback = () => this.selectCallback();

        this.missionTitle = missionTitle;
        this.lockIcon = lockIcon;

        /* START-USER-CTR-CODE */
        this.selectCallback = () => {}
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setInfo(name,id,callback,item) {
        this.missionTitle.text = name.toUpperCase()
        this.selectCallback = callback
        if(id == 0) return
        /*if(!this.world.client.hasItem(item)) {
           this.lockIcon.visible = true
        }*/
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
