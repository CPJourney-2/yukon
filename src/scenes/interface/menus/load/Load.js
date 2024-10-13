import BaseScene from '@scenes/base/BaseScene'

import { Animation, Interactive } from '@components/components'


/* START OF COMPILED CODE */

export default class Load extends BaseScene {

    constructor() {
        super("Load");

        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.progress;
        /** @type {Phaser.GameObjects.Container} */
        this.bar;
        /** @type {Phaser.GameObjects.Text} */
        this.trivia_text;
        /** @type {Phaser.GameObjects.Image} */
        this.spinner;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin3;


        /* START-USER-CTR-CODE */
        this.loadTimer;
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("load-pack", "assets/media/interface/menus/load/load-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "load", "bg");
        bg.setOrigin(0, 0);

        // text
        const text = this.add.text(754, 644, "", {});
        text.setOrigin(0.5, 0);
        text.text = "Joining Blizzard";
        text.setStyle({ "align": "center", "fixedWidth":1000,"fontFamily": "Arial", "fontSize": "28px" });

        // bar
        const bar = this.add.container(760, 480);
        bar.visible = false;

        // outline
        const outline = this.add.rectangle(-6, 127, 200, 40);
        outline.isStroked = true;
        outline.strokeColor = 26265;
        outline.lineWidth = 4;
        bar.add(outline);

        // progress
        const progress = this.add.rectangle(-98, 127, 180, 20);
        progress.scaleX = 0;
        progress.setOrigin(0, 0.5);
        progress.isFilled = true;
        bar.add(progress);

        // trivia_text
        const trivia_text = this.add.text(760, 644, "", {});
        trivia_text.setOrigin(0.5, 0);
        trivia_text.visible = false;
        trivia_text.text = "Rockhopper isn't real";
        trivia_text.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "32px" });

        // spinner
        const spinner = this.add.image(754, 665, "load", "spinner");
        spinner.scaleX = 0.6;
        spinner.scaleY = 0.6;
        spinner.visible = false;

        // penguin1
        const penguin1 = this.add.sprite(804, 391, "newload", "penguin1_0001");
        penguin1.angle = 1;
        penguin1.visible = false;

        // penguin2
        const penguin2 = this.add.sprite(765, 301, "newload", "penguin2_0001");
        penguin2.visible = false;

        // penguin3
        const penguin3 = this.add.sprite(746, 367, "newload", "penguin3_0001");
        penguin3.visible = false;

        // bg (components)
        new Interactive(bg);

        // penguin1 (components)
        const penguin1Animation = new Animation(penguin1);
        penguin1Animation.key = "penguin1_";
        penguin1Animation.end = 16;

        // penguin2 (components)
        const penguin2Animation = new Animation(penguin2);
        penguin2Animation.key = "penguin2_";
        penguin2Animation.end = 72;

        // penguin3 (components)
        const penguin3Animation = new Animation(penguin3);
        penguin3Animation.key = "penguin3_";
        penguin3Animation.end = 66;

        this.text = text;
        this.progress = progress;
        this.bar = bar;
        this.trivia_text = trivia_text;
        this.spinner = spinner;
        this.penguin1 = penguin1;
        this.penguin2 = penguin2;
        this.penguin3 = penguin3;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create(data) {
        this.events.on('sleep', this.onSleep, this)
        this.events.on('wake', this.onWake, this)

        this._create()

        this.setContent(data.text, data.showBar)
        this.updatePenguinAnim();

        this.tween = this.tweens.add({
            targets: this.spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        this.bar.visible = true
    }

    onSleep() {
        this.tween.pause()
        this.spinner.angle = 0
        this.time.removeEvent(this.loadTimer)
    }

    onWake(sys, data) {
        this.tween.restart()
        this.tween.play()

        this.bar.visible = true

        this.setContent(data.text, data.showBar)
        this.updatePenguinAnim()
        this.time.removeEvent(this.loadTimer)
        this.loadTimer = this.time.delayedCall(30000, this.waitingAwhile, [], this);
    }

    setContent(text, showBar) {
        this.text.text = text
        this.bar.visible = showBar
        this.text.y = showBar ? 644 : 587
    }

    updatePenguinAnim() {
        const penguins = [this.penguin1, this.penguin2, this.penguin3];
        const animationNumber = Phaser.Math.Between(1, 3) - 1;

        penguins.forEach((penguin, index) => {
            penguin.visible = index === animationNumber;
        });
    }

    setQueueContent(text) {
        this.text.text = text;
        this.triviaFacts = [
            "An orange puffle's favorite snack is a cookie",
            "There are 4 training mats in the Dojo.",
            "The Pet Shop doesn't have music playing.",
            "Jet Pack Adventure has a shark in it.",
            "The three Card-Jitsu elements are fire, water, and snow.",
            "A flower pot is thrown out of the truck in Level 4 of Bean Counters.",
            "There are 5 Find Four boards in the Lodge Attic.",
            "A green puffle jumps on top of the speaker in the Dance Club.",
            "Pink puffles play by skipping rope.",
            "Captain Rockhopper's ship is called the Migrator.",
            "The mullet is the big fish found in Ice Fishing.",
            "You can find old copies of the Penguin Times in the Boiler Room.",
            "The Beach does not have a game in the room.",
            "Black puffles can catch on fire.",
            "It costs 60 coins for a player card background.",
            "The Penguin Times releases new editions every other Monday.",
            "The Keeper of the Stage is a yellow puffle.",
            "There is a moose in the Ski Lodge.",
            "DJ Cadence's favorite game is Dance Contest.",
            "Pizzatron has a secret mode.",
            "If you're ever having issues with the game, try clearing your cache!",
            "Ribbit.",
            "The statues at the courtyard are actually Grey Puffles.",
            "You're having fun waiting in line /j",
            "Reindeer Puffles are slightly bigger than all other Puffles.",
            "A new pin is released every Monday.",
            "The Puffle Party song is based on the music for Mario Kart's Coconut Mall.",
            "You can perform 14 different tricks in Cart Surfer.",
            "The Pumpkin Puffle can glow in the dark.",
            "Club Penguin Journey's birthday is February 5th.",
            "In the northern part of the Island there is a dormant Volcano",
            "You can change the layering of furniture items.",
            "You can access previous party quests on the playercard.",
            "You can remove furniture boundaries in your igloo.",
            "You can send us suggestions at the Tour HQ.",
            "The orange puffle lives in the box dimension",
            "In every Penguin Style there is an exclusive Item of The Month.",
            "You can have an unlimited number of Friends!",
            "You can play Pizza Oven at the Pizza Parlor.",
            "There is a secret jellybean mode in Bean Counters.",
            "There is an Ice Pond behind the Ski Lodge.",
            "The Evergreen section of the Igloo Store is Permanent!",
            "Your penguin must be at least 30 days old to be a secret agent.",
            "Smoothie Smash is playable at the Coffee Shop.",
            "The Stadium cycles between Hockey, Soccer and Baseball during the year."
        ];
        this.currentIndex = Math.floor(Math.random() * this.triviaFacts.length);
    }

    setQueueScreen() {
        this.updatePenguinAnim()
        if (this.randomQueue) {
            return
        } else {
            this.triviaTimer = setTimeout(() => this.randomTriviaStart(), 8000);
            this.randomQueue = true;
        }
    }

    hideQueueScreen() {
        clearTimeout(this.resetTimer)
        clearTimeout(this.triviaTimer)
        clearTimeout(this.nextTriviaTimer)
        this.trivia_text.visible = false
        this.trivia_text.alpha = 0
        this.text.visible = true
        this.text.alpha = 1
    }

    randomTriviaStart() {
        let tween = this.tweens.add({
            targets: this.text,
            alpha: 0,
            duration: 400,
            onComplete: () => this.onRandomTrivia()
        });
    }

    onRandomTrivia() {
        const triviaFact = this.triviaFacts[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.triviaFacts.length;

        this.trivia_text.setText(`Did you know?\n${triviaFact}`);
        this.trivia_text.visible = true;
        let tween = this.tweens.add({
            targets: this.trivia_text,
            alpha: 1,
            duration: 400
        });

        this.resetTimer = setTimeout(() => {
            this.resetTriviaTimer()
        }, 8000);
    }

    resetTriviaTimer() {
        let tween = this.tweens.add({
            targets: this.trivia_text,
            alpha: 0,
            duration: 400,
            onComplete: this.showQueueNumber()
        });         
    }

    showQueueNumber() {
        let tween = this.tweens.add({
            targets: this.text,
            alpha: 1,
            duration: 400
        });          
        this.nextTriviaTimer = setTimeout(() => this.randomTriviaStart(), 8000);
    }

    waitingAwhile() {
        this.text.setText(`Sometimes it takes a while.\nCheck your internet connection.`);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
