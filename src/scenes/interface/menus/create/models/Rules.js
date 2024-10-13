
// You can write more code here
import BaseContainer from '@scenes/base/BaseContainer'
import { Interactive, SimpleButton } from '@components/components'
/* START OF COMPILED CODE */

export default class Rules extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // whitebg_1
        const whitebg_1 = scene.add.rectangle(0, 0, 1520, 960);
        whitebg_1.isFilled = true;
        whitebg_1.fillAlpha = 0.5;
        this.add(whitebg_1);

        // nameInputBg
        const nameInputBg = scene.add.roundedRectangleGraphics(0, 0, 1100, 700);
        nameInputBg.strokeColor = 5095664;
        nameInputBg.lineWidth = 6;
        this.add(nameInputBg);

        // closebtn
        const closebtn = scene.add.image(513, -311, "closebtn");
        this.add(closebtn);

        // colorTitle
        const colorTitle = scene.add.text(0, -277, "", {});
        colorTitle.setOrigin(0.5, 0.5);
        colorTitle.text = "Club Penguin Journey Rules";
        colorTitle.setStyle({ "color": "#297EC7", "fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold" });
        this.add(colorTitle);

        // colorTitle_1
        const colorTitle_1 = scene.add.text(-512, -193, "", {});
        colorTitle_1.text = "Respect Other Penguins";
        colorTitle_1.setStyle({ "color": "#297EC7", "fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
        this.add(colorTitle_1);

        // emotes_30
        const emotes_30 = scene.add.image(-76, -172, "main", "emotes/30");
        this.add(emotes_30);

        // colorTitle_2
        const colorTitle_2 = scene.add.text(-512, -142, "", {});
        colorTitle_2.text = "Club Penguin Journey does not tolerate any swearing, bullying or mean behavior toward other penguins. Disciplinary action will be taken should any one of these occur while playing.";
        colorTitle_2.setStyle({ "color": "#666", "fixedWidth":500,"fixedHeight":200,"fontFamily": "Burbank Small", "fontSize": "27px" });
        colorTitle_2.setWordWrapWidth(500);
        this.add(colorTitle_2);

        // colorTitle_3
        const colorTitle_3 = scene.add.text(18, -142, "", {});
        colorTitle_3.text = "References to drugs and alcohol related activities, potentially unsafe websites, religious, political, sexual, and racial or otherwise inappropriate talk are not permitted.\n";
        colorTitle_3.setStyle({ "color": "#666", "fixedWidth":500,"fixedHeight":200,"fontFamily": "Burbank Small", "fontSize": "27px" });
        colorTitle_3.setWordWrapWidth(500);
        this.add(colorTitle_3);

        // colorTitle_4
        const colorTitle_4 = scene.add.text(18, -193, "", {});
        colorTitle_4.text = "No Inappropriate Talk";
        colorTitle_4.setStyle({ "color": "#297EC7", "fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
        this.add(colorTitle_4);

        // emotes_5
        const emotes_5 = scene.add.image(411, -174, "main", "emotes/5");
        this.add(emotes_5);

        // colorTitle_5
        const colorTitle_5 = scene.add.text(-512, 156, "", {});
        colorTitle_5.text = "The best way to stay safe online is to NEVER share your real name, phone number, address, email or passwords.";
        colorTitle_5.setStyle({ "color": "#666", "fixedWidth":500,"fixedHeight":200,"fontFamily": "Burbank Small", "fontSize": "27px" });
        colorTitle_5.setWordWrapWidth(500);
        this.add(colorTitle_5);

        // colorTitle_6
        const colorTitle_6 = scene.add.text(-512, 63, "", {});
        colorTitle_6.text = "Never Reveal\nPersonal Information";
        colorTitle_6.setStyle({ "color": "#297EC7", "fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
        this.add(colorTitle_6);

        // button_igloo_catalog
        const button_igloo_catalog = scene.add.image(-109, 106, "iglooedit", "button/igloo_catalog");
        button_igloo_catalog.scaleX = 0.7;
        button_igloo_catalog.scaleY = 0.7;
        this.add(button_igloo_catalog);

        // colorTitle_7
        const colorTitle_7 = scene.add.text(18, 123, "", {});
        colorTitle_7.text = "Use of third party programs to cheat is prohibited. Players who use any third party programs while playing risk being permanently banned.";
        colorTitle_7.setStyle({ "color": "#666", "fixedWidth":500,"fixedHeight":200,"fontFamily": "Burbank Small", "fontSize": "27px" });
        colorTitle_7.setWordWrapWidth(500);
        this.add(colorTitle_7);

        // colorTitle_8
        const colorTitle_8 = scene.add.text(18, 63, "", {});
        colorTitle_8.text = "No Cheating";
        colorTitle_8.setStyle({ "color": "#297EC7", "fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
        this.add(colorTitle_8);

        // emotes_18
        const emotes_18 = scene.add.image(262, 85, "main", "emotes/18");
        this.add(emotes_18);

        // whitebg_1 (components)
        new Interactive(whitebg_1);

        // closebtn (components)
        const closebtnSimpleButton = new SimpleButton(closebtn);
        closebtnSimpleButton.callback = () => this.onClose();

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    onClose() {
        this.visible = false
        this.scene.toggleInputVisibility(true)
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
