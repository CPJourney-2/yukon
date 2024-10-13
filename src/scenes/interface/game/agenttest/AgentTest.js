import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Animation,NineSlice, Interactive } from '@components/components'


export const preload = {
    key: 'agenttest-pack',
    url: 'assets/media/interface/game/agenttest/agenttest-pack.json',
    loadString: ['loading', 'Secret Agent Test']
}

// You can write more code here
/* START OF COMPILED CODE */

export default class AgentTest extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? -6);

        /** @type {Phaser.GameObjects.Container} */
        this.question6;
        /** @type {Phaser.GameObjects.Container} */
        this.question5;
        /** @type {Phaser.GameObjects.Container} */
        this.question4;
        /** @type {Phaser.GameObjects.Container} */
        this.question3;
        /** @type {Phaser.GameObjects.Container} */
        this.question2;
        /** @type {Phaser.GameObjects.Container} */
        this.question1;
        /** @type {Phaser.GameObjects.Container} */
        this.endscreen;
        /** @type {Phaser.GameObjects.Image} */
        this.yousurenobtn;
        /** @type {Phaser.GameObjects.Container} */
        this.areyousure;
        /** @type {Phaser.GameObjects.Image} */
        this.rewardscontinuebtn;
        /** @type {Phaser.GameObjects.Container} */
        this.therewards;
        /** @type {Phaser.GameObjects.Image} */
        this.yourmissionrewarddsbtn;
        /** @type {Phaser.GameObjects.Container} */
        this.yourmission;
        /** @type {Phaser.GameObjects.Image} */
        this.secretgaentnsbtn;
        /** @type {Phaser.GameObjects.Container} */
        this.secretagents;
        /** @type {Phaser.GameObjects.Image} */
        this.pst_btn;
        /** @type {Phaser.GameObjects.Container} */
        this.alreadyagent;
        /** @type {Phaser.GameObjects.Image} */
        this.tooyoung_btn;
        /** @type {Phaser.GameObjects.Container} */
        this.tooyoung;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;
        /** @type {Phaser.GameObjects.Container[]} */
        this.questions;


        // block
        const block = scene.add.rectangle(770, 483, 128, 128);
        block.scaleX = 12.444192787335947;
        block.scaleY = 7.954135715180971;
        block.alpha = 0.2;
        block.isFilled = true;
        block.fillColor = 0;
        this.add(block);

        // agent
        const agent = scene.add.image(366, 461, "agenttest", "agent");
        this.add(agent);

        // nineslice_1
        const nineslice_1 = scene.add.nineslice(760, 480, "prompt", "window", 708, 500, 43, 38, 40, 40);
        nineslice_1.scaleY = 1.1848719663783185;
        this.add(nineslice_1);

        // question6
        const question6 = scene.add.container(760, 480);
        question6.visible = false;
        this.add(question6);

        // q6a3btn
        const q6a3btn = scene.add.image(0, 201, "main", "help-button");
        question6.add(q6a3btn);

        // q6a2btn
        const q6a2btn = scene.add.image(0, 81, "main", "help-button");
        question6.add(q6a2btn);

        // q6a1btn
        const q6a1btn = scene.add.image(0, -40, "main", "help-button");
        question6.add(q6a1btn);

        // q6title
        const q6title = scene.add.text(0, -143, "", {});
        q6title.setOrigin(0.485201514741174, 0.5619386721906781);
        q6title.text = "Pick another reason why you want\nto be a Secret Agent.";
        q6title.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "35px" });
        q6title.setLineSpacing(-5);
        q6title.setWordWrapWidth(600);
        question6.add(q6title);

        // q6quiztitle
        const q6quiztitle = scene.add.text(0, -215.30469494874058, "", {});
        q6quiztitle.setOrigin(0.5146440579845443, 0.5313945379862857);
        q6quiztitle.text = "AGENT QUIZ";
        q6quiztitle.setStyle({ "align": "center", "fixedWidth":460,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        question6.add(q6quiztitle);

        // q6a3txt
        const q6a3txt = scene.add.text(-7, 201, "", {});
        q6a3txt.setOrigin(0.485201514741174, 0.5619386721906781);
        q6a3txt.text = "I want to hang out in the HQ";
        q6a3txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        q6a3txt.setLineSpacing(-10);
        question6.add(q6a3txt);

        // q6a2txt
        const q6a2txt = scene.add.text(0, 81, "", {});
        q6a2txt.setOrigin(0.485201514741174, 0.5619386721906781);
        q6a2txt.text = "I want to help other penguins";
        q6a2txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        q6a2txt.setLineSpacing(-10);
        question6.add(q6a2txt);

        // q6a1txt
        const q6a1txt = scene.add.text(0, -41, "", {});
        q6a1txt.setOrigin(0.485201514741174, 0.5619386721906781);
        q6a1txt.text = "I've always wanted to be a spy";
        q6a1txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        q6a1txt.setLineSpacing(-10);
        question6.add(q6a1txt);

        // question5
        const question5 = scene.add.container(760, 480);
        question5.visible = false;
        this.add(question5);

        // q5a3btn
        const q5a3btn = scene.add.image(0, 201, "main", "help-button");
        question5.add(q5a3btn);

        // q5a2btn
        const q5a2btn = scene.add.image(0, 81, "main", "help-button");
        question5.add(q5a2btn);

        // q5a1btn
        const q5a1btn = scene.add.image(0, -40, "main", "help-button");
        question5.add(q5a1btn);

        // q5title
        const q5title = scene.add.text(0, -143, "", {});
        q5title.setOrigin(0.485201514741174, 0.5619386721906781);
        q5title.text = "Pick one reason why you want to\nbe a Secret Agent.";
        q5title.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "35px" });
        q5title.setLineSpacing(-5);
        q5title.setWordWrapWidth(600);
        question5.add(q5title);

        // q5quiztitle
        const q5quiztitle = scene.add.text(0, -215.30469494874058, "", {});
        q5quiztitle.setOrigin(0.5146440579845443, 0.5313945379862857);
        q5quiztitle.text = "AGENT QUIZ";
        q5quiztitle.setStyle({ "align": "center", "fixedWidth":460,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        question5.add(q5quiztitle);

        // q5a3txt
        const q5a3txt = scene.add.text(-7, 201, "", {});
        q5a3txt.setOrigin(0.485201514741174, 0.5619386721906781);
        q5a3txt.text = "I want to keep Club Penguin safe";
        q5a3txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        q5a3txt.setLineSpacing(-10);
        question5.add(q5a3txt);

        // q5a2txt
        const q5a2txt = scene.add.text(0, 81, "", {});
        q5a2txt.setOrigin(0.485201514741174, 0.5619386721906781);
        q5a2txt.text = "I want a spy phone";
        q5a2txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        q5a2txt.setLineSpacing(-10);
        question5.add(q5a2txt);

        // q5a1txt
        const q5a1txt = scene.add.text(0, -41, "", {});
        q5a1txt.setOrigin(0.485201514741174, 0.5619386721906781);
        q5a1txt.text = "My friends are Secret Agents";
        q5a1txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        q5a1txt.setLineSpacing(-10);
        question5.add(q5a1txt);

        // question4
        const question4 = scene.add.container(760, 480);
        question4.visible = false;
        this.add(question4);

        // q4a3btn
        const q4a3btn = scene.add.image(0, 201, "main", "help-button");
        question4.add(q4a3btn);

        // q4a2btn
        const q4a2btn = scene.add.image(0, 81, "main", "help-button");
        question4.add(q4a2btn);

        // q4a1btn
        const q4a1btn = scene.add.image(0, -40, "main", "help-button");
        question4.add(q4a1btn);

        // q4title
        const q4title = scene.add.text(0, -143, "", {});
        q4title.setOrigin(0.485201514741174, 0.5619386721906781);
        q4title.text = "Which type of personal information\nshould be reported?";
        q4title.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "35px" });
        q4title.setLineSpacing(-5);
        q4title.setWordWrapWidth(600);
        question4.add(q4title);

        // q4quiztitle
        const q4quiztitle = scene.add.text(0, -215.30469494874058, "", {});
        q4quiztitle.setOrigin(0.5146440579845443, 0.5313945379862857);
        q4quiztitle.text = "AGENT QUIZ";
        q4quiztitle.setStyle({ "align": "center", "fixedWidth":460,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        question4.add(q4quiztitle);

        // q4a3txt
        const q4a3txt = scene.add.text(0, 201, "", {});
        q4a3txt.setOrigin(0.485201514741174, 0.5619386721906781);
        q4a3txt.text = "Saying their address";
        q4a3txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        q4a3txt.setLineSpacing(-10);
        question4.add(q4a3txt);

        // q4a2txt
        const q4a2txt = scene.add.text(0, 81, "", {});
        q4a2txt.setOrigin(0.485201514741174, 0.5619386721906781);
        q4a2txt.text = "Saying boy or girl";
        q4a2txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        q4a2txt.setLineSpacing(-10);
        question4.add(q4a2txt);

        // q4a1txt
        const q4a1txt = scene.add.text(0, -41, "", {});
        q4a1txt.setOrigin(0.485201514741174, 0.5619386721906781);
        q4a1txt.text = "Saying their country";
        q4a1txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        q4a1txt.setLineSpacing(-10);
        question4.add(q4a1txt);

        // question3
        const question3 = scene.add.container(760, 480);
        question3.visible = false;
        this.add(question3);

        // q3a3btn
        const q3a3btn = scene.add.image(0, 201, "main", "help-button");
        question3.add(q3a3btn);

        // q3a2btn
        const q3a2btn = scene.add.image(0, 81, "main", "help-button");
        question3.add(q3a2btn);

        // q3a1btn
        const q3a1btn = scene.add.image(0, -40, "main", "help-button");
        question3.add(q3a1btn);

        // q3title
        const q3title = scene.add.text(0, -143, "", {});
        q3title.setOrigin(0.485201514741174, 0.5619386721906781);
        q3title.text = "What would you do if you saw\na penguin breaking the rules?";
        q3title.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "35px" });
        q3title.setLineSpacing(-5);
        q3title.setWordWrapWidth(600);
        question3.add(q3title);

        // q3quiztitle
        const q3quiztitle = scene.add.text(0, -215.30469494874058, "", {});
        q3quiztitle.setOrigin(0.5146440579845443, 0.5313945379862857);
        q3quiztitle.text = "AGENT QUIZ";
        q3quiztitle.setStyle({ "align": "center", "fixedWidth":460,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        question3.add(q3quiztitle);

        // q3a3txt
        const q3a3txt = scene.add.text(0, 201, "", {});
        q3a3txt.setOrigin(0.485201514741174, 0.5619386721906781);
        q3a3txt.text = "Throw snowballs at them";
        q3a3txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        q3a3txt.setLineSpacing(-10);
        question3.add(q3a3txt);

        // q3a2txt
        const q3a2txt = scene.add.text(0, 81, "", {});
        q3a2txt.setOrigin(0.485201514741174, 0.5619386721906781);
        q3a2txt.text = "Report them";
        q3a2txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        q3a2txt.setLineSpacing(-10);
        question3.add(q3a2txt);

        // q3a1txt
        const q3a1txt = scene.add.text(0, -41, "", {});
        q3a1txt.setOrigin(0.485201514741174, 0.5619386721906781);
        q3a1txt.text = "Yell at them";
        q3a1txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        q3a1txt.setLineSpacing(-10);
        question3.add(q3a1txt);

        // question2
        const question2 = scene.add.container(760, 480);
        question2.visible = false;
        this.add(question2);

        // q2a3btn
        const q2a3btn = scene.add.image(0, 201, "main", "help-button");
        question2.add(q2a3btn);

        // q2a2btn
        const q2a2btn = scene.add.image(0, 81, "main", "help-button");
        question2.add(q2a2btn);

        // q2a1btn
        const q2a1btn = scene.add.image(0, -40, "main", "help-button");
        question2.add(q2a1btn);

        // q2title
        const q2title = scene.add.text(0, -143, "", {});
        q2title.setOrigin(0.485201514741174, 0.5619386721906781);
        q2title.text = "Pick the correct reason to\nreport a player to a moderator.";
        q2title.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "35px" });
        q2title.setLineSpacing(-5);
        q2title.setWordWrapWidth(600);
        question2.add(q2title);

        // q2quiztitle
        const q2quiztitle = scene.add.text(0, -215.30469494874058, "", {});
        q2quiztitle.setOrigin(0.5146440579845443, 0.5313945379862857);
        q2quiztitle.text = "AGENT QUIZ";
        q2quiztitle.setStyle({ "align": "center", "fixedWidth":460,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        question2.add(q2quiztitle);

        // q2a3txt
        const q2a3txt = scene.add.text(0, 201, "", {});
        q2a3txt.setOrigin(0.485201514741174, 0.5619386721906781);
        q2a3txt.text = "Being mean or rude";
        q2a3txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        q2a3txt.setLineSpacing(-10);
        question2.add(q2a3txt);

        // q2a2txt
        const q2a2txt = scene.add.text(0, 81, "", {});
        q2a2txt.setOrigin(0.485201514741174, 0.5619386721906781);
        q2a2txt.text = "Not being your buddy";
        q2a2txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        q2a2txt.setLineSpacing(-10);
        question2.add(q2a2txt);

        // q2a1txt
        const q2a1txt = scene.add.text(0, -41, "", {});
        q2a1txt.setOrigin(0.485201514741174, 0.5619386721906781);
        q2a1txt.text = "Throwing snowballs at you";
        q2a1txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        q2a1txt.setLineSpacing(-10);
        question2.add(q2a1txt);

        // question1
        const question1 = scene.add.container(760, 480);
        question1.visible = false;
        this.add(question1);

        // q1a3btn
        const q1a3btn = scene.add.image(0, 201, "main", "help-button");
        question1.add(q1a3btn);

        // q1a2btn
        const q1a2btn = scene.add.image(0, 81, "main", "help-button");
        question1.add(q1a2btn);

        // q1a1btn
        const q1a1btn = scene.add.image(0, -40, "main", "help-button");
        question1.add(q1a1btn);

        // q1title
        const q1title = scene.add.text(0, -143, "", {});
        q1title.setOrigin(0.485201514741174, 0.5619386721906781);
        q1title.text = "Pick one quality that you think a\nSecret Agent should have.";
        q1title.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "35px" });
        q1title.setLineSpacing(-5);
        q1title.setWordWrapWidth(600);
        question1.add(q1title);

        // q1quiztitle
        const q1quiztitle = scene.add.text(0, -215.30469494874058, "", {});
        q1quiztitle.setOrigin(0.5146440579845443, 0.5313945379862857);
        q1quiztitle.text = "AGENT QUIZ";
        q1quiztitle.setStyle({ "align": "center", "fixedWidth":460,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        question1.add(q1quiztitle);

        // q1a3txt
        const q1a3txt = scene.add.text(0, 201, "", {});
        q1a3txt.setOrigin(0.485201514741174, 0.5619386721906781);
        q1a3txt.text = "In Charge";
        q1a3txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        q1a3txt.setLineSpacing(-10);
        question1.add(q1a3txt);

        // q1a2txt
        const q1a2txt = scene.add.text(0, 81, "", {});
        q1a2txt.setOrigin(0.485201514741174, 0.5619386721906781);
        q1a2txt.text = "Honest";
        q1a2txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        q1a2txt.setLineSpacing(-10);
        question1.add(q1a2txt);

        // q1a1txt
        const q1a1txt = scene.add.text(0, -41, "", {});
        q1a1txt.setOrigin(0.485201514741174, 0.5619386721906781);
        q1a1txt.text = "Popular";
        q1a1txt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        q1a1txt.setLineSpacing(-10);
        question1.add(q1a1txt);

        // endscreen
        const endscreen = scene.add.container(760, 480);
        endscreen.visible = false;
        this.add(endscreen);

        // ednscreenbtn
        const ednscreenbtn = scene.add.image(0, 201, "main", "help-button");
        endscreen.add(ednscreenbtn);

        // endscreentntntnt
        const endscreentntntnt = scene.add.text(0, -36, "", {});
        endscreentntntnt.setOrigin(0.485201514741174, 0.5619386721906781);
        endscreentntntnt.text = "Your application has been sent to the Penguin Secret agency.\n\nIf you are accepted, you will be prompted to accept a spy phone. If not, please try again later.";
        endscreentntntnt.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "35px" });
        endscreentntntnt.setLineSpacing(-5);
        endscreentntntnt.setWordWrapWidth(600);
        endscreen.add(endscreentntntnt);

        // endscreentitle
        const endscreentitle = scene.add.text(0, -215.30469494874058, "", {});
        endscreentitle.setOrigin(0.5146440579845443, 0.5313945379862857);
        endscreentitle.text = "THANK YOU";
        endscreentitle.setStyle({ "align": "center", "fixedWidth":460,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        endscreen.add(endscreentitle);

        // endscreenbtnxt
        const endscreenbtnxt = scene.add.text(-7, 201, "", {});
        endscreenbtnxt.setOrigin(0.485201514741174, 0.5619386721906781);
        endscreenbtnxt.text = "Done";
        endscreenbtnxt.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        endscreenbtnxt.setLineSpacing(-10);
        endscreen.add(endscreenbtnxt);

        // areyousure
        const areyousure = scene.add.container(760, 480);
        areyousure.visible = false;
        this.add(areyousure);

        // yousurenobtn
        const yousurenobtn = scene.add.image(0, 201, "main", "help-button");
        areyousure.add(yousurenobtn);

        // yousureyesbtn
        const yousureyesbtn = scene.add.image(0, 81, "main", "help-button");
        areyousure.add(yousureyesbtn);

        // text_yousureque
        const text_yousureque = scene.add.text(0, -129, "", {});
        text_yousureque.setOrigin(0.485201514741174, 0.5619386721906781);
        text_yousureque.text = "Are you ready to take the challenge\nto become a Secret Agent?";
        text_yousureque.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "35px" });
        text_yousureque.setLineSpacing(-5);
        text_yousureque.setWordWrapWidth(600);
        areyousure.add(text_yousureque);

        // text_areyousure
        const text_areyousure = scene.add.text(0, -215.30469494874058, "", {});
        text_areyousure.setOrigin(0.5146440579845443, 0.5313945379862857);
        text_areyousure.text = "ARE YOU SURE?";
        text_areyousure.setStyle({ "align": "center", "fixedWidth":460,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        areyousure.add(text_areyousure);

        // text_yousureno
        const text_yousureno = scene.add.text(0, 201, "", {});
        text_yousureno.setOrigin(0.485201514741174, 0.5619386721906781);
        text_yousureno.text = "No";
        text_yousureno.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        text_yousureno.setLineSpacing(-10);
        areyousure.add(text_yousureno);

        // text_yousureyes
        const text_yousureyes = scene.add.text(0, 81, "", {});
        text_yousureyes.setOrigin(0.485201514741174, 0.5619386721906781);
        text_yousureyes.text = "Yes";
        text_yousureyes.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        text_yousureyes.setLineSpacing(-10);
        areyousure.add(text_yousureyes);

        // therewards
        const therewards = scene.add.container(760, 480);
        this.add(therewards);

        // rewardscontinuebtn
        const rewardscontinuebtn = scene.add.image(0, 201, "main", "help-button");
        therewards.add(rewardscontinuebtn);

        // text_rewardsbsbsssshss
        const text_rewardsbsbsssshss = scene.add.text(0, -154, "", {});
        text_rewardsbsbsssshss.setOrigin(0.485201514741174, 0.5619386721906781);
        text_rewardsbsbsssshss.text = "If you choose to accept this mission:";
        text_rewardsbsbsssshss.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "32px" });
        text_rewardsbsbsssshss.setLineSpacing(-5);
        text_rewardsbsbsssshss.setWordWrapWidth(600);
        therewards.add(text_rewardsbsbsssshss);

        // text_thereward
        const text_thereward = scene.add.text(0, -215.30469494874058, "", {});
        text_thereward.setOrigin(0.5146440579845443, 0.5313945379862857);
        text_thereward.text = "THE REWARDS";
        text_thereward.setStyle({ "align": "center", "fixedWidth":460,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        therewards.add(text_thereward);

        // text_yrewardycontinue
        const text_yrewardycontinue = scene.add.text(0, 201, "", {});
        text_yrewardycontinue.setOrigin(0.485201514741174, 0.5619386721906781);
        text_yrewardycontinue.text = "Continue";
        text_yrewardycontinue.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        text_yrewardycontinue.setLineSpacing(-10);
        therewards.add(text_yrewardycontinue);

        // text_therewueeh
        const text_therewueeh = scene.add.text(-178, -73, "", {});
        text_therewueeh.setOrigin(0, 0.5);
        text_therewueeh.text = "You will get a spy phone for your penguin.";
        text_therewueeh.setStyle({ "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "30px" });
        text_therewueeh.setLineSpacing(-5);
        text_therewueeh.setWordWrapWidth(600);
        therewards.add(text_therewueeh);

        // text_therewueeh_1
        const text_therewueeh_1 = scene.add.text(-178, 40, "", {});
        text_therewueeh_1.setOrigin(0, 0.5);
        text_therewueeh_1.text = "You will get access to the Super Secret Agent Headquarters. This will allow you to hang out with other agents after a long day of keeping the peace.";
        text_therewueeh_1.setStyle({ "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "30px" });
        text_therewueeh_1.setLineSpacing(-5);
        text_therewueeh_1.setWordWrapWidth(500);
        therewards.add(text_therewueeh_1);

        // spyphoneicon
        const spyphoneicon = scene.add.image(-254, -72, "agenttest", "spyphoneicon");
        therewards.add(spyphoneicon);

        // headquartersicon
        const headquartersicon = scene.add.image(-254, 41, "agenttest", "headquartersicon");
        therewards.add(headquartersicon);

        // yourmission
        const yourmission = scene.add.container(760, 480);
        yourmission.visible = false;
        this.add(yourmission);

        // yourmissionrewarddsbtn
        const yourmissionrewarddsbtn = scene.add.image(0, 201, "main", "help-button");
        yourmission.add(yourmissionrewarddsbtn);

        // text_yourmission1
        const text_yourmission1 = scene.add.text(0, -154, "", {});
        text_yourmission1.setOrigin(0.485201514741174, 0.5619386721906781);
        text_yourmission1.text = "As a Secret Agent Penguin, your mission is to:";
        text_yourmission1.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "32px" });
        text_yourmission1.setLineSpacing(-5);
        text_yourmission1.setWordWrapWidth(600);
        yourmission.add(text_yourmission1);

        // text_yourmission
        const text_yourmission = scene.add.text(0, -215.30469494874058, "", {});
        text_yourmission.setOrigin(0.5146440579845443, 0.5313945379862857);
        text_yourmission.text = "YOUR MISSION";
        text_yourmission.setStyle({ "align": "center", "fixedWidth":460,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        yourmission.add(text_yourmission);

        // text_youemiisio
        const text_youemiisio = scene.add.text(0, 201, "", {});
        text_youemiisio.setOrigin(0.485201514741174, 0.5619386721906781);
        text_youemiisio.text = "The Rewards";
        text_youemiisio.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        text_youemiisio.setLineSpacing(-10);
        yourmission.add(text_youemiisio);

        // text_yourmission_1
        const text_yourmission_1 = scene.add.text(-218, -85, "", {});
        text_yourmission_1.setOrigin(0, 0.5);
        text_yourmission_1.text = "Report any players that are using bad language,\nbeing mean, or breaking any of the other rules.";
        text_yourmission_1.setStyle({ "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "30px" });
        text_yourmission_1.setLineSpacing(-5);
        text_yourmission_1.setWordWrapWidth(600);
        yourmission.add(text_yourmission_1);

        // text_yourmission_2
        const text_yourmission_2 = scene.add.text(-218, 1, "", {});
        text_yourmission_2.setOrigin(0, 0.5);
        text_yourmission_2.text = "Help other penguins so they can have the best\nexperience possible.";
        text_yourmission_2.setStyle({ "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "30px" });
        text_yourmission_2.setLineSpacing(-5);
        text_yourmission_2.setWordWrapWidth(600);
        yourmission.add(text_yourmission_2);

        // text_yourmission_3
        const text_yourmission_3 = scene.add.text(-218, 86, "", {});
        text_yourmission_3.setOrigin(0, 0.5);
        text_yourmission_3.text = "Keep your identity and the identity of other\nSecret Agent Penguins a secret.";
        text_yourmission_3.setStyle({ "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "30px" });
        text_yourmission_3.setLineSpacing(-5);
        text_yourmission_3.setWordWrapWidth(600);
        yourmission.add(text_yourmission_3);

        // text_yourmission_4
        const text_yourmission_4 = scene.add.text(-289, -85, "", {});
        text_yourmission_4.setOrigin(0, 0.5);
        text_yourmission_4.text = "(1)";
        text_yourmission_4.setStyle({ "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "45px" });
        text_yourmission_4.setLineSpacing(-5);
        text_yourmission_4.setWordWrapWidth(600);
        yourmission.add(text_yourmission_4);

        // text_yourmission_5
        const text_yourmission_5 = scene.add.text(-289, 1, "", {});
        text_yourmission_5.setOrigin(0, 0.5);
        text_yourmission_5.text = "(2)";
        text_yourmission_5.setStyle({ "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "45px" });
        text_yourmission_5.setLineSpacing(-5);
        text_yourmission_5.setWordWrapWidth(600);
        yourmission.add(text_yourmission_5);

        // text_yourmission_6
        const text_yourmission_6 = scene.add.text(-289, 86, "", {});
        text_yourmission_6.setOrigin(0, 0.5);
        text_yourmission_6.text = "(3)";
        text_yourmission_6.setStyle({ "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "45px" });
        text_yourmission_6.setLineSpacing(-5);
        text_yourmission_6.setWordWrapWidth(600);
        yourmission.add(text_yourmission_6);

        // secretagents
        const secretagents = scene.add.container(760, 480);
        secretagents.visible = false;
        this.add(secretagents);

        // secretgaentnsbtn
        const secretgaentnsbtn = scene.add.image(0, 201, "main", "help-button");
        secretagents.add(secretgaentnsbtn);

        // text_tourfront1
        const text_tourfront1 = scene.add.text(0, -30, "", {});
        text_tourfront1.setOrigin(0.485201514741174, 0.5619386721906781);
        text_tourfront1.text = "We are looking for a few good penguins to\nhelp make Club Penguin the best it can be.\nEven though Club Penguin has live moderators,\nwe need the help of Secret Agent Penguins to help be our eyes and ears throughout the Club Penguin World.";
        text_tourfront1.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "32px" });
        text_tourfront1.setLineSpacing(-5);
        text_tourfront1.setWordWrapWidth(600);
        secretagents.add(text_tourfront1);

        // text_tourfront
        const text_tourfront = scene.add.text(0, -215.30469494874058, "", {});
        text_tourfront.setOrigin(0.5146440579845443, 0.5313945379862857);
        text_tourfront.text = "SECRET AGENTS";
        text_tourfront.setStyle({ "align": "center", "fixedWidth":460,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        secretagents.add(text_tourfront);

        // text_tourfront5
        const text_tourfront5 = scene.add.text(0, 201, "", {});
        text_tourfront5.setOrigin(0.485201514741174, 0.5619386721906781);
        text_tourfront5.text = "Your Mission";
        text_tourfront5.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        text_tourfront5.setLineSpacing(-10);
        secretagents.add(text_tourfront5);

        // alreadyagent
        const alreadyagent = scene.add.container(760, 480);
        alreadyagent.visible = false;
        this.add(alreadyagent);

        // pst_btn
        const pst_btn = scene.add.image(0, 201, "main", "help-button");
        alreadyagent.add(pst_btn);

        // psst_text
        const psst_text = scene.add.text(0, -114, "", {});
        psst_text.setOrigin(0.485201514741174, 0.5619386721906781);
        psst_text.text = "Check your inventory. You are already a Secret Agent.";
        psst_text.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "35px" });
        psst_text.setLineSpacing(-5);
        psst_text.setWordWrapWidth(600);
        alreadyagent.add(psst_text);

        // pssst_titile
        const pssst_titile = scene.add.text(0, -215.30469494874058, "", {});
        pssst_titile.setOrigin(0.5146440579845443, 0.5313945379862857);
        pssst_titile.text = "PSSST!";
        pssst_titile.setStyle({ "align": "center", "fixedWidth":460,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        alreadyagent.add(pssst_titile);

        // psst_btntxext
        const psst_btntxext = scene.add.text(0, 201, "", {});
        psst_btntxext.setOrigin(0.485201514741174, 0.5619386721906781);
        psst_btntxext.text = "Ok";
        psst_btntxext.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        psst_btntxext.setLineSpacing(-10);
        alreadyagent.add(psst_btntxext);

        // tooyoung
        const tooyoung = scene.add.container(760, 480);
        tooyoung.visible = false;
        this.add(tooyoung);

        // tooyoung_btn
        const tooyoung_btn = scene.add.image(0, 201, "main", "help-button");
        tooyoung.add(tooyoung_btn);

        // tooyoung_text
        const tooyoung_text = scene.add.text(0, -114, "", {});
        tooyoung_text.setOrigin(0.485201514741174, 0.5619386721906781);
        tooyoung_text.text = "Your penguin must be more than 30 days old to become a Secret Agent.";
        tooyoung_text.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "35px" });
        tooyoung_text.setLineSpacing(-5);
        tooyoung_text.setWordWrapWidth(600);
        tooyoung.add(tooyoung_text);

        // tooyoung_title
        const tooyoung_title = scene.add.text(0, -215.30469494874058, "", {});
        tooyoung_title.setOrigin(0.5146440579845443, 0.5313945379862857);
        tooyoung_title.text = "SORRY";
        tooyoung_title.setStyle({ "align": "center", "fixedWidth":460,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        tooyoung.add(tooyoung_title);

        // tooyoung_btntxext
        const tooyoung_btntxext = scene.add.text(0, 201, "", {});
        tooyoung_btntxext.setOrigin(0.485201514741174, 0.5619386721906781);
        tooyoung_btntxext.text = "Ok";
        tooyoung_btntxext.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        tooyoung_btntxext.setLineSpacing(-10);
        tooyoung.add(tooyoung_btntxext);

        // penguinage
        const penguinage = scene.add.text(0, -17, "", {});
        penguinage.setOrigin(0.485201514741174, 0.5619386721906781);
        penguinage.text = "Your penguin is 0 days old.";
        penguinage.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "35px" });
        penguinage.setLineSpacing(-5);
        penguinage.setWordWrapWidth(600);
        tooyoung.add(penguinage);

        // blue_button
        const blue_button = scene.add.image(1060, 238, "main", "blue-button");
        this.add(blue_button);

        // blue_x
        const blue_x = scene.add.image(1060, 236, "main", "blue-x");
        this.add(blue_x);

        // lists
        const pages = [secretagents, yourmission, therewards, areyousure, endscreen, alreadyagent, tooyoung];
        const questions = [question1, question2, question3, question6, question5, question4];

        // block (components)
        new Interactive(block);

        // q6a3btn (components)
        const q6a3btnButton = new Button(q6a3btn);
        q6a3btnButton.spriteName = "help-button";
        q6a3btnButton.callback = () => this.nextQuestion();
        q6a3btnButton.activeFrame = true;

        // q6a2btn (components)
        const q6a2btnButton = new Button(q6a2btn);
        q6a2btnButton.spriteName = "help-button";
        q6a2btnButton.callback = () => this.nextQuestion(true);
        q6a2btnButton.activeFrame = true;

        // q6a1btn (components)
        const q6a1btnButton = new Button(q6a1btn);
        q6a1btnButton.spriteName = "help-button";
        q6a1btnButton.callback = () => this.nextQuestion();
        q6a1btnButton.activeFrame = true;

        // q5a3btn (components)
        const q5a3btnButton = new Button(q5a3btn);
        q5a3btnButton.spriteName = "help-button";
        q5a3btnButton.callback = () => this.nextQuestion(true);
        q5a3btnButton.activeFrame = true;

        // q5a2btn (components)
        const q5a2btnButton = new Button(q5a2btn);
        q5a2btnButton.spriteName = "help-button";
        q5a2btnButton.callback = () => this.nextQuestion();
        q5a2btnButton.activeFrame = true;

        // q5a1btn (components)
        const q5a1btnButton = new Button(q5a1btn);
        q5a1btnButton.spriteName = "help-button";
        q5a1btnButton.callback = () => this.nextQuestion();
        q5a1btnButton.activeFrame = true;

        // q4a3btn (components)
        const q4a3btnButton = new Button(q4a3btn);
        q4a3btnButton.spriteName = "help-button";
        q4a3btnButton.callback = () => this.nextQuestion(true);
        q4a3btnButton.activeFrame = true;

        // q4a2btn (components)
        const q4a2btnButton = new Button(q4a2btn);
        q4a2btnButton.spriteName = "help-button";
        q4a2btnButton.callback = () => this.nextQuestion();
        q4a2btnButton.activeFrame = true;

        // q4a1btn (components)
        const q4a1btnButton = new Button(q4a1btn);
        q4a1btnButton.spriteName = "help-button";
        q4a1btnButton.callback = () => this.nextQuestion();
        q4a1btnButton.activeFrame = true;

        // q3a3btn (components)
        const q3a3btnButton = new Button(q3a3btn);
        q3a3btnButton.spriteName = "help-button";
        q3a3btnButton.callback = () => this.nextQuestion();
        q3a3btnButton.activeFrame = true;

        // q3a2btn (components)
        const q3a2btnButton = new Button(q3a2btn);
        q3a2btnButton.spriteName = "help-button";
        q3a2btnButton.callback = () => this.nextQuestion(true);
        q3a2btnButton.activeFrame = true;

        // q3a1btn (components)
        const q3a1btnButton = new Button(q3a1btn);
        q3a1btnButton.spriteName = "help-button";
        q3a1btnButton.callback = () => this.nextQuestion();
        q3a1btnButton.activeFrame = true;

        // q2a3btn (components)
        const q2a3btnButton = new Button(q2a3btn);
        q2a3btnButton.spriteName = "help-button";
        q2a3btnButton.callback = () => this.nextQuestion(true);
        q2a3btnButton.activeFrame = true;

        // q2a2btn (components)
        const q2a2btnButton = new Button(q2a2btn);
        q2a2btnButton.spriteName = "help-button";
        q2a2btnButton.callback = () => this.nextQuestion();
        q2a2btnButton.activeFrame = true;

        // q2a1btn (components)
        const q2a1btnButton = new Button(q2a1btn);
        q2a1btnButton.spriteName = "help-button";
        q2a1btnButton.callback = () => this.nextQuestion();
        q2a1btnButton.activeFrame = true;

        // q1a3btn (components)
        const q1a3btnButton = new Button(q1a3btn);
        q1a3btnButton.spriteName = "help-button";
        q1a3btnButton.callback = () => this.nextQuestion();
        q1a3btnButton.activeFrame = true;

        // q1a2btn (components)
        const q1a2btnButton = new Button(q1a2btn);
        q1a2btnButton.spriteName = "help-button";
        q1a2btnButton.callback = () => this.nextQuestion(true);
        q1a2btnButton.activeFrame = true;

        // q1a1btn (components)
        const q1a1btnButton = new Button(q1a1btn);
        q1a1btnButton.spriteName = "help-button";
        q1a1btnButton.callback = () => this.nextQuestion();
        q1a1btnButton.activeFrame = true;

        // ednscreenbtn (components)
        const ednscreenbtnButton = new Button(ednscreenbtn);
        ednscreenbtnButton.spriteName = "help-button";
        ednscreenbtnButton.callback = () => this.hide();
        ednscreenbtnButton.activeFrame = true;

        // yousurenobtn (components)
        const yousurenobtnButton = new Button(yousurenobtn);
        yousurenobtnButton.spriteName = "help-button";
        yousurenobtnButton.callback = () => this.hide();
        yousurenobtnButton.activeFrame = true;

        // yousureyesbtn (components)
        const yousureyesbtnButton = new Button(yousureyesbtn);
        yousureyesbtnButton.spriteName = "help-button";
        yousureyesbtnButton.callback = () => this.showASpecificPage('question1');
        yousureyesbtnButton.activeFrame = true;

        // rewardscontinuebtn (components)
        const rewardscontinuebtnButton = new Button(rewardscontinuebtn);
        rewardscontinuebtnButton.spriteName = "help-button";
        rewardscontinuebtnButton.callback = () => this.showASpecificPage('areyousure');
        rewardscontinuebtnButton.activeFrame = true;

        // yourmissionrewarddsbtn (components)
        const yourmissionrewarddsbtnButton = new Button(yourmissionrewarddsbtn);
        yourmissionrewarddsbtnButton.spriteName = "help-button";
        yourmissionrewarddsbtnButton.callback = () => this.showASpecificPage('therewards');
        yourmissionrewarddsbtnButton.activeFrame = true;

        // secretgaentnsbtn (components)
        const secretgaentnsbtnButton = new Button(secretgaentnsbtn);
        secretgaentnsbtnButton.spriteName = "help-button";
        secretgaentnsbtnButton.callback = () => this.showASpecificPage('yourmission');
        secretgaentnsbtnButton.activeFrame = true;

        // pst_btn (components)
        const pst_btnButton = new Button(pst_btn);
        pst_btnButton.spriteName = "help-button";
        pst_btnButton.callback = () => this.hide();
        pst_btnButton.activeFrame = true;

        // tooyoung_btn (components)
        const tooyoung_btnButton = new Button(tooyoung_btn);
        tooyoung_btnButton.spriteName = "help-button";
        tooyoung_btnButton.callback = () => this.hide();
        tooyoung_btnButton.activeFrame = true;

        // blue_button (components)
        const blue_buttonButton = new Button(blue_button);
        blue_buttonButton.spriteName = "blue-button";
        blue_buttonButton.callback = () => this.hide();
        blue_buttonButton.activeFrame = true;

        this.question6 = question6;
        this.question5 = question5;
        this.question4 = question4;
        this.question3 = question3;
        this.question2 = question2;
        this.question1 = question1;
        this.endscreen = endscreen;
        this.yousurenobtn = yousurenobtn;
        this.areyousure = areyousure;
        this.rewardscontinuebtn = rewardscontinuebtn;
        this.therewards = therewards;
        this.yourmissionrewarddsbtn = yourmissionrewarddsbtn;
        this.yourmission = yourmission;
        this.secretgaentnsbtn = secretgaentnsbtn;
        this.secretagents = secretagents;
        this.pst_btn = pst_btn;
        this.alreadyagent = alreadyagent;
        this.tooyoung_btn = tooyoung_btn;
        this.tooyoung = tooyoung;
        this.pages = pages;
        this.questions = questions;

        /* START-USER-CTR-CODE */
        // Write your code here.
        let oneDay = 1000 * 60 * 60 * 24
        let timeDiff = Date.now() - Date.parse(this.world.client.joinTime)
        let daysDiff = Math.round(timeDiff / oneDay)
        this.pengAge = daysDiff
        penguinage.text = `Your penguin is ${daysDiff} days old.`

        this.quizActive = false
        this.isCorrect = true
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    // Write your code here.
    showASpecificPage(p) {
        //hide all pages
        for(let i = 0; i < this.pages.length; i++) {
            this.pages[i].visible = false
        }
        for(let i = 0; i < this.questions.length; i++) {
            this.questions[i].visible = false
        }
        //then show a particular one
        this[p].visible = true

        //activate the quiz
        if(p == 'question1') this.quizActive = true
    }

    nextQuestion(correct = false) {
        //player did not answer a question correctly
        if(!correct) this.isCorrect = false

        if(this.quizIndex == this.questions.length) {
            //reached the last question, show the end screen
            this.showASpecificPage('endscreen')
            if(this.isCorrect) {
                this.winner = true
                //this.interface.prompt.showItem(800)
                this.network.send('add_item', { item: 800 })
            }
            return
        }

        //proceed to next question
        this.quizIndex++
        this.showASpecificPage(`question${this.quizIndex}`)
    }

    show(isFromJPG = false){
        super.show()
        this.isFromJPG = isFromJPG
        this.pageIndex = 0
        this.quizActive = false
        this.isCorrect = true
        this.winner = false
        this.quizIndex = 1

        //check the player eligibility
        //is less than 30 days old
        if(this.pengAge < 30) {
            this.showASpecificPage('tooyoung')
            return
        }
        //already has spy phone
        if(this.world.client.hasItem(800)) {
            this.showASpecificPage('alreadyagent')
            return
        }
        //passed the above conditions; proceed normally
        this.showASpecificPage('secretagents')

    }

    hide(){
        this.pageIndex = 0
        this.quizActive = false
        this.isCorrect = true
        this.quizIndex = 1
        this.winner = false
        this.close()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
