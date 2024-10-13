
// You can write more code here

import RoomScene from '../../RoomScene'
import { MoveTo, Button, SimpleButton, Animation } from '@components/components'


/* START OF COMPILED CODE */

export default class Dojo extends RoomScene {

    constructor() {
        super("Dojo");

        /** @type {Phaser.GameObjects.Sprite} */
        this.thirdattempt;
        /** @type {Phaser.GameObjects.Image} */
        this.paper;
        /** @type {Phaser.GameObjects.Image} */
        this.realgong;
        /** @type {Phaser.GameObjects.Sprite} */
        this.gong;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.gong_hitbox;
        /** @type {Phaser.GameObjects.Container} */
        this.gongshow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cover_one;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cover_two;
        /** @type {Phaser.GameObjects.Text} */
        this.countdown;
        /** @type {Phaser.GameObjects.Image} */
        this.lines;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'courtyard': () => this.triggerRoom(319, 660, 660)
        }
        this.gongOff = true
        this.music = 21
        this.gongHappened = false
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dig_out_stage_three_asset-pack", "assets/media/rooms/dojo/dig_out_stage_three/dig_out_stage_three_asset-pack.json");
    }

    /** @returns {void} */
    _create() {

        // background_gong
        this.add.image(765, 485, "dig_out_stage_three", "background_gong");

        // refgong
        const refgong = this.add.image(765, 490, "dig_out_stage_three", "refgong");
        refgong.visible = false;

        // door
        const door = this.add.sprite(401, 520, "dig_out_stage_three", "door");

        // mats
        this.add.image(1334, 911, "dig_out_stage_three", "mats");

        // tree
        this.add.image(1244, 524, "dig_out_stage_three", "tree");

        // stand
        this.add.image(1096, 513, "dig_out_stage_three", "stand");

        // training0001
        const training0001 = this.add.image(1334, 900, "dig_out_stage_three", "new_training0001");
        training0001.setOrigin(0.5158905027094846, 0.7305394133092059);

        // cauldron_back
        this.add.image(953, 565, "dig_out_stage_three", "cauldron_back");

        // thirdattempt
        const thirdattempt = this.add.sprite(953, 508, "lamp", "thirdattempt0001");
        thirdattempt.visible = false;

        // cauldron_front
        const cauldron_front = this.add.image(952, 573, "dig_out_stage_three", "cauldron_front");
        cauldron_front.visible = false;

        // paper
        const paper = this.add.image(723, 494, "dig_out_stage_three", "paper");

        // realgong
        const realgong = this.add.image(716, 486, "dig_out_stage_three", "gong0001");

        // gongshow
        const gongshow = this.add.container(726, 492);

        // gong
        const gong = this.add.sprite(-10, -6, "dig_out_stage_three", "gong0001");
        gongshow.add(gong);

        // gong_hitbox
        const gong_hitbox = this.add.ellipse(-10, -5, 144, 143);
        gong_hitbox.alpha = 0.000001;
        gong_hitbox.isFilled = true;
        gongshow.add(gong_hitbox);

        // cover_one
        const cover_one = this.add.sprite(728, 425, "dig_out_stage_three", "cover0001");

        // cover_two
        const cover_two = this.add.sprite(728, 425, "dig_out_stage_three", "cover0001");

        // platform
        this.add.image(716, 372, "dig_out_stage_three", "platform");

        // fishes
        this.add.image(717, 499, "dig_out_stage_three", "fishes");

        // until_gong_show
        this.add.image(722, 391, "dig_out_stage_three", "until_gong_show");

        // lanterns
        this.add.image(760, 240, "dig_out_stage_three", "lanterns");

        // bigtree
        const bigtree = this.add.image(299.1384093861176, 722.8778337120001, "dig_out_stage_three", "bigtree");
        bigtree.setOrigin(0.5559827450188816, 0.8920571640991739);

        // rock_middle
        const rock_middle = this.add.image(797.7905245209412, 759.743147125647, "dig_out_stage_three", "rock_middle");
        rock_middle.setOrigin(0.5199323180067227, 0.6881252486027759);

        // rocka
        const rocka = this.add.image(483.2331641767059, 799.4626055536471, "dig_out_stage_three", "rocka");
        rocka.setOrigin(0.4521233538073818, 0.8211317901083104);

        // rockb
        const rockb = this.add.image(653.7905245209412, 681.976311302353, "dig_out_stage_three", "rockb");
        rockb.setOrigin(0.5410371253079584, 0.6341598327375576);

        // rockc
        const rockc = this.add.image(1013, 817.7668358232942, "dig_out_stage_three", "rockc");
        rockc.setOrigin(0.5, 0.6878237658325802);

        // rockd
        const rockd = this.add.image(1108.6521151348236, 736.6720810327059, "dig_out_stage_three", "rockd");
        rockd.setOrigin(0.4254957045379786, 0.845615422318403);

        // countdown
        const countdown = this.add.text(693, 332, "", {});
        countdown.setStyle({ "color": "#00CC00", "fontFamily": "Arial", "fontSize": "24px", "fontStyle": "bold" });

        // lines
        const lines = this.add.image(716, 345, "dig_out_stage_three", "lines_over_clock");

        // lists
        const sort = [training0001, rocka, bigtree, rockb, rock_middle, rockc, rockd];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 408;
        doorMoveTo.y = 505;

        // thirdattempt (components)
        const thirdattemptAnimation = new Animation(thirdattempt);
        thirdattemptAnimation.key = "thirdattempt";
        thirdattemptAnimation.end = 118;

        this.thirdattempt = thirdattempt;
        this.paper = paper;
        this.realgong = realgong;
        this.gong = gong;
        this.gong_hitbox = gong_hitbox;
        this.gongshow = gongshow;
        this.cover_one = cover_one;
        this.cover_two = cover_two;
        this.countdown = countdown;
        this.lines = lines;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create(){
        super.create();

        this.bounds = this.gong_hitbox.getBounds();
        this.initialTime = 300;
        this.countdown.text = this.formatTime(this.initialTime);
        this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true });

        this.coverOneNumber = 0
        this.coverTwoNumber = 0
        //this is just so clock goes on while tabbed  
        this.hiddenTimeStamp = 0;
        this.game.events.on('hidden', () => {
            this.hiddenTimeStamp = performance.now();
            });

        this.game.events.on('visible', () => {
            let elapsedTime = Math.floor((performance.now() - this.hiddenTimeStamp)/1000); //seconds
            this.initialTime -= elapsedTime;
            })


    // thirdattempt
    const thirdattempt = this.add.sprite(952, 505, "lamp", "thirdattempt0001");

    // cauldron_front
    this.add.image(953, 569, "dig_out_stage_three", "cauldron_front");

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
        //this is the area i need help with, the seconds its supposed to be at (when pushed) is 0 and 285 respectively
    }
    update(){
        //if(1>2){
        if(this.initialTime == 0){
            this.paper.visible = false
            this.gongshow.visible = true
            this.gongOff = false
            this.countdown.visible = false
            this.cover_two.visible = false
            this.cover_one.visible = true
            //they start at 0 and if they loop they dont repeat the animation
            if (this.coverOneNumber == 0){
                this.cover_one.play('cover-open')
            }
            this.gongHappened = true
            this.coverTwoNumber = 0
            this.coverOneNumber += 1
        }
        //if(2>1){
        if (this.initialTime < 286 && this.initialTime > 0){
            this.paper.visible = false
            this.gongshow.visible = false
            this.gongOff = true
            this.countdown.visible = true
            this.cover_one.visible = false
            this.cover_two.visible = true
            this.coverOneNumber = 0
            //this.gongHappened = true
            if (this.coverTwoNumber == 0 && this.gongHappened == true){
                this.cover_two.play('cover-close')

            }
                //this.cover_two.play('cover-close') //delete this when you have it working
            this.coverTwoNumber += 1
            //if (this.gongHappened == true){
              //  this.cover_two.play('cover-close')
            //}
        }

    }
    onSnowballComplete(x, y, ball) {
      if (this.gongOff == false){
            if (!this.bounds) return
            if (this.bounds.contains(x, y)) {
                this.soundManager.playSfx('gong_sfx');
                this.gong.play('gong-bong');
                this.interface.main.snowballFactory.destroyBall(ball);
            }
       }
     }
    formatTime(seconds){
        // Minutes
        var minutes = Math.floor(seconds/60);
        // Seconds
        var partInSeconds = seconds%60;
        // Adds left zeros to seconds
        partInSeconds = partInSeconds.toString().padStart(2,'0');
        // Returns formated time
        return `${minutes}:${partInSeconds}`;
    }
    onEvent ()
    {
        this.initialTime -= 1; // One second
        if (this.initialTime < -1)
        {
            this.initialTime = 0;
        }
        else if (this.initialTime == -1)
        {
            this.initialTime = 300;
        }
        this.countdown.setText(this.formatTime(this.initialTime));
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
