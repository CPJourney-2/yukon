
// You can write more code here

import RoomScene from '@rooms/RoomScene'
import { MoveTo, Button, Animation, ShowHint, SimpleButton, ZoneTrigger } from '@components/components'
import mat from './mat';
import RoomPin from '@rooms/RoomPin'

/* START OF COMPILED CODE */

export default class Dojo extends RoomScene {

    constructor() {
        super("Dojo");

        /** @type {Phaser.GameObjects.Sprite} */
        this.sensei;
        /** @type {Phaser.GameObjects.Sprite} */
        this.thirdattempt;
        /** @type {Phaser.GameObjects.Image} */
        this.interfaceIcons;
        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'courtyard': () => this.triggerRoom(319, 1240, 660),
            //'sensei': () => this.triggerGame(904),
             /* this will go to the sensei welcome thing, not it's own game*/
            //'mat_a': () => this.triggerTable('four', 205),
            //'mat_b': () => this.triggerTable('four', 206),
            //'mat_c': () => this.triggerTable('four', 207),
            //'mat_d': () => this.triggerTable('four', 207)
        }
        this.music = 21

        this.waddles = {}
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dojo-pack", "assets/media/rooms/dojo/dojo-pack.json");
        this.load.pack("dojo-test-pack", "assets/media/rooms/dojo/dojo-test-pack.json");
    }

    /** @returns {void} */
    _create() {

        // dojobg
        this.add.image(770, 481, "dojo", "dojobg");

        // door
        const door = this.add.image(408, 505, "dojo", "door");

        // mat1
        const mat1 = new mat(this, 614, 706, "dojo", "mat_b");
        this.add.existing(mat1);

        // mat2
        const mat2 = new mat(this, 929, 706, "dojo", "mat_b");
        this.add.existing(mat2);
        mat2.flipX = true;
        mat2.flipY = false;

        // mat3
        const mat3 = new mat(this, 1190, 813, "dojo", "mat_a");
        this.add.existing(mat3);
        mat3.flipX = true;
        mat3.flipY = false;

        // mat4
        const mat4 = new mat(this, 353, 814, "dojo", "mat_a");
        this.add.existing(mat4);
        mat4.flipX = false;
        mat4.flipY = false;

        // paper
        const paper = this.add.image(573, 454, "dojo", "paper");

        // paper_1
        const paper_1 = this.add.image(691, 457, "dojo", "paper");

        // legeends
        this.add.image(568, 446, "dojo", "legeends");

        // instrucctions
        this.add.image(690, 446, "dojo", "instrucctions");

        // stand
        this.add.image(1094, 498, "dojo", "stand");

        // tree
        this.add.image(1249, 517, "dojo", "tree");

        // cauldron_back
        this.add.image(952, 563, "dojo", "cauldron_back");

        // sensei
        const sensei = this.add.sprite(1084, 492, "dojo", "sensei0001");

        // thirdattempt
        const thirdattempt = this.add.sprite(1740, 529, "dojo", "thirdattempt0001");

        // cauldron_front
        this.add.image(1743, 650, "dojo", "cauldron_front");

        // senseitangle
        const senseitangle = this.add.rectangle(1104, 512, 250, 200);
        senseitangle.alpha = 0.000001;
        senseitangle.isFilled = true;

        // rectangle_1
        const rectangle_1 = this.add.rectangle(1111, 613, 128, 128);
        rectangle_1.visible = false;
        rectangle_1.isFilled = true;

        // rectangle_2
        const rectangle_2 = this.add.rectangle(1098, 572, 200, 128);

        // interfaceIcons
        const interfaceIcons = this.add.image(1427, 965, "dojo", "cards_button");
        interfaceIcons.setOrigin(0.5, 1.245409073326819);

        // lists
        const sort = [];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 410;
        doorMoveTo.y = 503;

        // mat2 (prefab fields)
        mat2.waddleid = "201";

        // mat3 (prefab fields)
        mat3.waddleid = "203";

        // mat4 (prefab fields)
        mat4.waddleid = "202";

        // paper (components)
        const paperButton = new Button(paper);
        paperButton.spriteName = "paper";
        paperButton.callback = () => this.interface.loadWidget('CardJitsuProgress');

        // paper_1 (components)
        const paper_1Button = new Button(paper_1);
        paper_1Button.spriteName = "paper";
        paper_1Button.callback = () => this.interface.loadWidget('CardJitsuInstructions');

        // thirdattempt (components)
        const thirdattemptAnimation = new Animation(thirdattempt);
        thirdattemptAnimation.key = "thirdattempt";
        thirdattemptAnimation.end = 118;

        // senseitangle (components)
        const senseitangleSimpleButton = new SimpleButton(senseitangle);
        senseitangleSimpleButton.hoverCallback = () => this.onSenseiHover();
        senseitangleSimpleButton.hoverOutCallback = () => this.onSenseiOut();
        const senseitangleMoveTo = new MoveTo(senseitangle);
        senseitangleMoveTo.x = 1111;
        senseitangleMoveTo.y = 613;

        // rectangle_2 (components)
        const rectangle_2ZoneTrigger = new ZoneTrigger(rectangle_2);
        rectangle_2ZoneTrigger.callback = () => this.onSenseiEnter();

        // interfaceIcons (components)
        const interfaceIconsButton = new Button(interfaceIcons);
        interfaceIconsButton.spriteName = "cards_button";
        interfaceIconsButton.callback = () => this.onNinjaProgress();

        this.sensei = sensei;
        this.thirdattempt = thirdattempt;
        this.interfaceIcons = interfaceIcons;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create(){ // Abdul try to read every comment so you can understand this function
    super.create();

    // thirdattempt
    const thirdattempt = this.add.sprite(952, 505, "dojo", "thirdattempt0001");

    // cauldron_front
    this.add.image(953, 569, "dojo", "cauldron_front");

    // thirdattempt (components)
    const thirdattemptAnimation = new Animation(thirdattempt);
    thirdattemptAnimation.key = "thirdattempt";
    thirdattemptAnimation.end = 118;

    // Define an array of hexadecimal colors and their corresponding durations 
    const colors = [
        { color: 0x2596BE, duration: 5000 }, // blue
        { color: 0xFF5832, duration: 5000 }, // red
        { color: 0xffffff, duration: 5000 }  // white
    ];

    // Initialize the index to keep track of the current color
    let colorIndex = 0;

    // Call the function to start the color-changing process
    changeFillColor(this.tweens, this.time); 

    // Function to change the fill color and start the tween
        function changeFillColor(tweens, time) {
            const { color, duration } = colors[colorIndex];

            // Create a tween to fade the alpha of the element to 0
            tweens.add({
                targets: thirdattempt,
                alpha: 0,
                duration: duration / 2, // Fade out in half of the specified duration
                onComplete: () => {
                    // Update the tint color and start the fade-in tween
                    thirdattempt.tintTopLeft = color;
                    thirdattempt.tintTopRight = color;
                    thirdattempt.tintBottomLeft = color;
                    thirdattempt.tintBottomRight = color;

                    // Create a tween to fade the alpha back to 1
                    tweens.add({
                        targets: thirdattempt,
                        alpha: 1,
                        duration: duration / 2, // Fade in in half of the specified duration
                        onComplete: () => {
                            // Move to the next color index
                            colorIndex = (colorIndex + 1) % colors.length;

                            // Wait for the specified duration before changing color again
                            time.delayedCall(duration, changeFillColor, [tweens, time], this);
                        }
                    });
                }
            });
        }
    }

    onSenseiHover() {
        this.sensei.play('senseihover')
    }

    onSenseiOut() {
        this.sensei.play('senseiout')
    }

    onSenseiEnter() {
        this.interface.loadWidget("CJSensay")    
    }

    onNinjaProgress() {
        this.interface.loadWidget("CJNinjaProgress")    
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
