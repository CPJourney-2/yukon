import RoomScene from '@scenes/rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, SimpleButton, Zone, ShowHint } from '@components/components'

/* START OF COMPILED CODE */

export default class Boiler extends RoomScene {

    constructor() {
        super("Boiler");

        /** @type {Phaser.GameObjects.Sprite} */
        this.drawer1_pngbutworse;
        /** @type {Phaser.GameObjects.Image} */
        this.snowballed_2;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.shelf_hitbox_4;
        /** @type {Phaser.GameObjects.Image} */
        this.snowballed_3;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.shelf_hitbox_3;
        /** @type {Phaser.GameObjects.Image} */
        this.snowballed_1;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.shelf_hitbox_2;
        /** @type {Phaser.GameObjects.Image} */
        this.snowballed;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.shelf_hitbox_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.smoke;
        /** @type {Phaser.GameObjects.Sprite} */
        this.drawer1_png;
        /** @type {Phaser.GameObjects.Sprite} */
        this.shelf;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.finalClick;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.shelf_hitbox_5;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'dance': () => this.triggerRoom(120, 934, 507),
            'cave': () => this.triggerRoom(806, 230, 620)
        }
        
        this.music = 6
        this.maxBalls = 30
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("boiler-pack", "assets/media/rooms/boiler/boiler-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_png
        const bg_png = this.add.image(760, 485, "boiler", "bg.png");
        bg_png.scaleX = 1.02;
        bg_png.scaleY = 1.02;

        // boiler_board
        const boiler_board = this.add.image(1278, 301, "boiler-board");
        boiler_board.scaleX = 1.05;
        boiler_board.scaleY = 1.05;

        // boiler_door_png
        const boiler_door_png = this.add.image(582, 363, "boiler", "boiler-door.png");
        boiler_door_png.scaleX = 1.02;
        boiler_door_png.scaleY = 1.02;

        // drawer1.pngbutworse
        const drawer1_pngbutworse = this.add.sprite(826, 550, "boiler", "drawer1.png0001");

        // snowballed_2
        const snowballed_2 = this.add.image(826, 550, "boiler-secret-two", "snowballed");
        snowballed_2.visible = false;

        // shelf_hitbox_4
        const shelf_hitbox_4 = this.add.rectangle(820, 544, 87, 54);
        shelf_hitbox_4.alpha = 1e-26;
        shelf_hitbox_4.isFilled = true;

        // drawer1_png0001
        this.add.image(828, 473, "boiler", "drawer1.png0001");

        // snowballed_3
        const snowballed_3 = this.add.image(828, 473, "boiler-secret-two", "snowballed");
        snowballed_3.visible = false;

        // shelf_hitbox_3
        const shelf_hitbox_3 = this.add.rectangle(823, 466, 89, 52);
        shelf_hitbox_3.alpha = 1e-26;
        shelf_hitbox_3.isFilled = true;

        // drawer1_png0001_1_1
        this.add.image(947, 472, "boiler", "drawer1.png0001");

        // snowballed_1
        const snowballed_1 = this.add.image(947, 472, "boiler-secret-two", "snowballed");
        snowballed_1.visible = false;

        // shelf_hitbox_2
        const shelf_hitbox_2 = this.add.rectangle(942, 465, 89, 52);
        shelf_hitbox_2.alpha = 1e-26;
        shelf_hitbox_2.isFilled = true;

        // drawer1_png0001_1_1_1
        this.add.image(949, 399, "boiler", "drawer1.png0001");

        // snowballed
        const snowballed = this.add.image(949, 399, "boiler-secret-two", "snowballed");
        snowballed.visible = false;

        // shelf_hitbox_1
        const shelf_hitbox_1 = this.add.rectangle(945, 391, 87, 57);
        shelf_hitbox_1.alpha = 1e-26;
        shelf_hitbox_1.isFilled = true;

        // smoke
        const smoke = this.add.sprite(250, 199, "boiler", "smoke0001.png");

        // main
        const main = this.add.image(277.2600538928435, 775.0236309168115, "newboiler", "main");
        main.scaleX = 1.0197888558975952;
        main.scaleY = 1.0197888558975952;
        main.setOrigin(0.6937553751717792, 0.8476552498963502);

        // top
        this.add.image(192, 249, "newboiler", "top");

        // copper
        this.add.image(237, 269, "newboiler", "copper");

        // tubes
        this.add.image(95, 755, "newboiler", "tubes");

        // archivesbtn
        const archivesbtn = this.add.image(1422.401640359713, 933.0820179856432, "boiler-archivesbtn", "archivesbtn");
        archivesbtn.setOrigin(0.5146004204136764, 1.148907573941141);

        // drawer1.png
        const drawer1_png = this.add.sprite(832, 397, "boiler", "drawer1.png0001");

        // shelf
        const shelf = this.add.sprite(943, 548, "boiler-secret-two", "shelf0001");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(1029.5987321837747, 561.6863332700739, 130, 560);
        rectangle_1.setOrigin(0.5584518519915211, 1.0065827172598427);
        rectangle_1.fillColor = 65535;
        rectangle_1.fillAlpha = 0.5;

        // finalClick
        const finalClick = this.add.rectangle(936, 540, 104, 67);
        finalClick.visible = false;
        finalClick.alpha = 0.0001;
        finalClick.isFilled = true;

        // shelf_hitbox_5
        const shelf_hitbox_5 = this.add.rectangle(823, 387, 103, 62);
        shelf_hitbox_5.alpha = 1e-26;
        shelf_hitbox_5.isFilled = true;

        // lists
        const sort = [archivesbtn];

        // boiler_door_png (components)
        const boiler_door_pngButton = new Button(boiler_door_png);
        boiler_door_pngButton.spriteName = "boiler-door.png";
        boiler_door_pngButton.pixelPerfect = true;
        const boiler_door_pngMoveTo = new MoveTo(boiler_door_png);
        boiler_door_pngMoveTo.x = 582;
        boiler_door_pngMoveTo.y = 580;

        // main (components)
        const mainButton = new Button(main);
        mainButton.spriteName = "main";
        mainButton.callback = () => {this.triggerRoom(821, 0, 0)};
        new MoveTo(main);

        // archivesbtn (components)
        const archivesbtnButton = new Button(archivesbtn);
        archivesbtnButton.spriteName = "archivesbtn";
        archivesbtnButton.callback = () => this.onArchives();

        // drawer1_png (components)
        const drawer1_pngSimpleButton = new SimpleButton(drawer1_png);
        drawer1_pngSimpleButton.hoverCallback = () => this.onDrawerOver();
        drawer1_pngSimpleButton.hoverOutCallback = () => this.onDrawerOut();
        drawer1_pngSimpleButton.callback = () => this.onArchives();
        const drawer1_pngShowHint = new ShowHint(drawer1_png);
        drawer1_pngShowHint.text = "archives_hint";

        // rectangle_1 (components)
        new SimpleButton(rectangle_1);
        new MoveTo(rectangle_1);

        // finalClick (components)
        const finalClickSimpleButton = new SimpleButton(finalClick);
        finalClickSimpleButton.callback = () => {this.onClick()};

        this.drawer1_pngbutworse = drawer1_pngbutworse;
        this.snowballed_2 = snowballed_2;
        this.shelf_hitbox_4 = shelf_hitbox_4;
        this.snowballed_3 = snowballed_3;
        this.shelf_hitbox_3 = shelf_hitbox_3;
        this.snowballed_1 = snowballed_1;
        this.shelf_hitbox_2 = shelf_hitbox_2;
        this.snowballed = snowballed;
        this.shelf_hitbox_1 = shelf_hitbox_1;
        this.smoke = smoke;
        this.drawer1_png = drawer1_png;
        this.shelf = shelf;
        this.finalClick = finalClick;
        this.shelf_hitbox_5 = shelf_hitbox_5;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()

        this.smoke.play("boiler-steam")

        this.bounds = {};
        this.bounds.shelf_hitbox_1 = this.shelf_hitbox_1.getBounds();
        this.bounds.shelf_hitbox_2 = this.shelf_hitbox_2.getBounds();
        this.bounds.shelf_hitbox_3 = this.shelf_hitbox_3.getBounds();
        this.bounds.shelf_hitbox_4 = this.shelf_hitbox_4.getBounds();
        this.bounds.shelf_hitbox_5 = this.shelf_hitbox_5.getBounds();

        this.clickAmt = 0
        this.loopVar = 0
        this.trueShelf = [0,0,0,0]
        this.snowballer = 1
    }
    onDrawerOver() {
        this.drawer1_png.play('drawerhover')
    }

    onDrawerOut() {
        this.drawer1_png.play('drawerout')
    }
    onArchives() {
        this.interface.loadWidget("Archives")    
    }
    flush(){
        this.snowballer = 1
        this.snowballed.visible = false
        this.snowballed_1.visible = false
        this.snowballed_2.visible = false
        this.snowballed_3.visible = false;

        while (this.loopVar < 4){
            this.trueShelf[this.loopVar] = 0
            this.loopVar++
        }
        this.loopVar = 0
        if (this.clickAmt == 1){
            this.shelf.play('secretOut')
            this.finalClick.visible = false
            this.clickAmt = 0
        }
    }
    onSnowballComplete(x, y, ball) {
        if(ball.penguin == this.world.client.penguin){
            for (let hitbox in this.bounds) {
              if (this.bounds.hasOwnProperty(hitbox) && this.bounds[hitbox].contains(x, y)) {
                this.interface.main.snowballFactory.destroyBall(ball);
                switch (hitbox) {
                    case "shelf_hitbox_1":
                        if (this.trueShelf[0] == 1){
                            this.snowballed.visible = false
                            this.snowballer = this.snowballer / 2
                            this.trueShelf[0] = 0
                        }
                        else if (this.trueShelf[0] == 0){
                            this.snowballer *= 2
                            this.trueShelf[0] = 1    
                            this.snowballed.visible = true
                        }
                        this.check();
                        break;
                    case "shelf_hitbox_2":
                        if (this.trueShelf[1] == 1){
                            this.snowballed_1.visible = false
                            this.snowballer = this.snowballer / 3
                            this.trueShelf[1] = 0
                        }
                        else if (this.trueShelf[1] == 0){
                            this.snowballer *= 3
                            this.trueShelf[1] = 1    
                            this.snowballed_1.visible = true
                        }
                        this.check();
                        break;
                    case "shelf_hitbox_3":
                        if (this.trueShelf[2] == 1){
                            this.snowballed_3.visible = false
                            this.snowballer = this.snowballer / 5
                            this.trueShelf[2] = 0
                        }
                        else if (this.trueShelf[2] == 0){
                            this.snowballer *= 5
                            this.trueShelf[2] = 1    
                            this.snowballed_3.visible = true
                        }
                        this.check();
                        break;
                    case "shelf_hitbox_4":
                        if (this.trueShelf[3] == 1){
                            this.snowballed_2.visible = false
                            this.snowballer = this.snowballer / 7
                            this.trueShelf[3] = 0
                        }
                        else if (this.trueShelf[3] == 0){
                            this.snowballer *= 7
                            this.trueShelf[3] = 1    
                            this.snowballed_2.visible = true
                        }
                        this.check();
                        break;
                    case "shelf_hitbox_5":
                        this.flush();
                        break;
                }
                break;
              }
            }
        }
  }


    check(){
        if (this.snowballer == 42){
            this.finalClick.visible = true
        }
        else{
            this.finalClick.visible = false
            if (this.clickAmt == 1){
                this.shelf.play('secretOut')
                this.clickAmt = 0
            }
        }
    }
    onClick(){
        if (this.clickAmt == 0){
            this.shelf.play('secret')
            this.clickAmt = 1
            return
        }
        else if (this.clickAmt == 1){
            this.interface.prompt.showItem(6209)
            //this.stampEarned(601)
            this.shelf.play('secretOut')
            this.flush();
            this.clickAmt = 0
            return
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
