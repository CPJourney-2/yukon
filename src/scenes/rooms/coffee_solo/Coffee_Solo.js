import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, ShowHint, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Coffee_Solo extends RoomScene {

    constructor() {
        super("Coffee_Solo");

        /** @type {Phaser.GameObjects.Sprite} */
        this.board;
        /** @type {Phaser.GameObjects.Sprite} */
        this.shop_coffee_solo;
        /** @type {Phaser.GameObjects.Sprite} */
        this.coffee_icon;
        /** @type {Phaser.GameObjects.Sprite} */
        this.arrow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.coin_sprite;
        /** @type {Phaser.GameObjects.Container} */
        this.coin;
        /** @type {Phaser.GameObjects.Sprite} */
        this.counter_arrow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cooldown_timer;
        /** @type {Phaser.GameObjects.Container} */
        this.coffee_bubble;
        /** @type {Phaser.GameObjects.Sprite} */
        this.coffee_drink;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'collect': () => this.coffeeZone(),
            'deliver': () => this.deliverZone()
        }
        this.music = 'Tutorial'

        this.boardToggle = true
        this.stage1Done = false;
        this.hasApron = false;
        this.collectCoffee = false;
        this.collectedCoffee = false;
        this.deliverCoffee = false;
        this.deliveredCoffee = false;
        this.apronCheck = false;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("coffee_solo-pack", "assets/media/rooms/coffee_solo/coffee_solo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(1, -6, "coffee_solo", "bg");
        bg.setOrigin(0, 0);

        // lamp
        const lamp = this.add.image(176, -11, "coffee_solo", "lamp");
        lamp.setOrigin(0, 0);

        // table
        const table = this.add.image(418, 499, "coffee_solo", "table");
        table.setOrigin(0.5217391304347826, 0.5368421052631579);

        // smoothie_stand
        const smoothie_stand = this.add.container(157.9919490592393, 658.5672741886791);

        // smoothie
        const smoothie = this.add.image(-44.58566983918888, -64.34841680810257, "coffee_solo", "smoothie");
        smoothie.setOrigin(0.5946647978225035, 0.6296633645007567);
        smoothie_stand.add(smoothie);

        // blender
        const blender = this.add.sprite(-6, -89, "coffee_solo", "blender0001");
        smoothie_stand.add(blender);

        // fruitbox_1
        const fruitbox_1 = this.add.image(57, 792.6431540807403, "coffee_solo", "fruitbox_1");
        fruitbox_1.setOrigin(0.5, 0.7852698057242741);

        // fruitbox_2
        const fruitbox_2 = this.add.image(90, 832.5976789280489, "coffee_solo", "fruitbox_2");
        fruitbox_2.setOrigin(0.5, 0.7619262147885945);

        // counter_back
        const counter_back = this.add.image(854, 458, "coffee_solo", "counter_back");
        counter_back.setOrigin(0.27906976744186046, 0.8363636363636363);

        // counter_front
        const counter_front = this.add.image(812, 621, "coffee_solo", "counter_front");
        counter_front.setOrigin(0.2864583333333333, 0.8710801393728222);

        // smoke
        const smoke = this.add.sprite(907, 180, "coffee_solo", "smoke0001");
        smoke.setOrigin(0, 0);

        // sign_back
        const sign_back = this.add.image(907, 632, "coffee_solo", "sign_back");
        sign_back.setOrigin(0.5, 0.4789915966386555);

        // sign_front
        const sign_front = this.add.image(884, 695, "coffee_solo", "sign_front");
        sign_front.setOrigin(0.5190839694656488, 0.8827586206896552);

        // board
        const board = this.add.sprite(951, 146, "coffee_solo", "board0001");
        board.setOrigin(0, 0);

        // machine_1
        const machine_1 = this.add.image(956, 468, "coffee_solo", "machine_1");
        machine_1.setOrigin(0, 0);

        // machine_2
        const machine_2 = this.add.image(964, 314, "coffee_solo", "machine_2");
        machine_2.setOrigin(0, 0);

        // machine_3
        const machine_3 = this.add.image(1021, 406, "coffee_solo", "machine_3");
        machine_3.setOrigin(0, 0);

        // bag
        const bag = this.add.image(1077, 646, "coffee_solo", "bag");
        bag.setOrigin(0.4430379746835443, 0.506024096385542);

        // beans
        const beans = this.add.image(1016, 651, "coffee_solo", "beans");
        beans.setOrigin(0.3411764705882352, 0.6145708044679954);

        // lamp_2
        const lamp_2 = this.add.image(992, 151, "coffee_solo", "lamp_2");
        lamp_2.setOrigin(0, 0);

        // stairs
        const stairs = this.add.image(1202, 328, "coffee_solo", "stairs");
        stairs.setOrigin(0, 0);

        // door
        const door = this.add.image(728, 135, "coffee_solo", "door");
        door.setOrigin(0, 0);

        // shop_coffee_solo
        const shop_coffee_solo = this.add.sprite(834, 665, "coffee_solo_jobs", "job_coffee_solo_0001");
        shop_coffee_solo.setOrigin(0.48104857995152495, 3.9520740519068775);
        shop_coffee_solo.visible = false;

        // coffee_icon
        const coffee_icon = this.add.sprite(-153, 344, "coffee_solo_jobs", "job_coffee_solo_0001");
        coffee_icon.visible = false;

        // arrow
        const arrow = this.add.sprite(512, 279, "arrow");
        arrow.scaleX = 0.2;
        arrow.scaleY = 0.2;
        arrow.angle = -180;
        arrow.visible = false;

        // coin
        const coin = this.add.container(-173, 220);

        // coin_sprite
        const coin_sprite = this.add.sprite(31.03714265764836, -50.12658541187517, "coffee_solo_jobs", "coin0002");
        coin.add(coin_sprite);

        // counter_arrow
        const counter_arrow = this.add.sprite(840, 1112, "arrow");
        counter_arrow.scaleX = 0.2;
        counter_arrow.scaleY = 0.2;
        counter_arrow.angle = -180;
        counter_arrow.setOrigin(0.49999999999999406, -10.688557995255064);
        counter_arrow.visible = false;

        // cooldown_timer
        const cooldown_timer = this.add.sprite(-109, 289, "coffee_solo_jobs", "cooldown_timer_0001");
        cooldown_timer.visible = false;

        // tut_down
        const tut_down = this.add.image(511, 358, "coffee_tutorial", "tut_down");

        // npc_right
        const npc_right = this.add.image(245, 462, "coffee_tutorial", "npc_right");
        npc_right.flipX = true;

        // coffee_bubble
        const coffee_bubble = this.add.container(508, 1204.0767359005963);
        coffee_bubble.visible = false;

        // balloon_emote
        const balloon_emote = this.add.image(0, -912.0767359005963, "main", "balloon-emote");
        coffee_bubble.add(balloon_emote);

        // balloon
        const balloon = this.add.image(0, -965.0767359005963, "main", "balloon");
        coffee_bubble.add(balloon);

        // emotes_13
        const emotes_13 = this.add.image(5, -957.0767359005963, "main", "emotes/13");
        coffee_bubble.add(emotes_13);

        // coffee_drink
        const coffee_drink = this.add.sprite(554, 1033.4978882140765, "coffee_solo_jobs", "job_coffee_solo_0001");
        coffee_drink.setOrigin(0.5, 19.628511091830756);
        coffee_drink.visible = false;

        // lists
        const sort = [beans, bag, sign_front, sign_back, counter_front, counter_back, table, smoothie_stand, fruitbox_2, fruitbox_1, shop_coffee_solo, coffee_icon, counter_arrow, coffee_bubble, tut_down, npc_right, coffee_drink];

        // smoothie (components)
        const smoothieButton = new Button(smoothie);
        smoothieButton.spriteName = "smoothie";
        smoothieButton.hoverCallback = () => blender.__Animation.play();
        smoothieButton.hoverOutCallback = () => blender.__Animation.stop();
        smoothieButton.pixelPerfect = true;
        const smoothieMoveTo = new MoveTo(smoothie);
        smoothieMoveTo.x = 176;
        smoothieMoveTo.y = 690;
        const smoothieShowHint = new ShowHint(smoothie);
        smoothieShowHint.text = "smoothie_hint";

        // blender (components)
        const blenderAnimation = new Animation(blender);
        blenderAnimation.key = "blender";
        blenderAnimation.end = 14;
        blenderAnimation.autoPlay = false;

        // smoke (components)
        const smokeAnimation = new Animation(smoke);
        smokeAnimation.key = "smoke";
        smokeAnimation.end = 5;

        // board (components)
        const boardSimpleButton = new SimpleButton(board);
        boardSimpleButton.callback = () => this.onBoardClick();
        boardSimpleButton.pixelPerfect = true;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.callback = () => {this.exitTut();};
        doorButton.pixelPerfect = true;
        const doorShowHint = new ShowHint(door);
        doorShowHint.text = "Exit Tutorial?";

        // cooldown_timer (components)
        const cooldown_timerAnimation = new Animation(cooldown_timer);
        cooldown_timerAnimation.key = "cooldown_timer_";
        cooldown_timerAnimation.end = 121;
        cooldown_timerAnimation.repeat = 0;
        cooldown_timerAnimation.autoPlay = false;

        // coffee_drink (components)
        const coffee_drinkAnimation = new Animation(coffee_drink);
        coffee_drinkAnimation.key = "job_coffee_solo_";
        coffee_drinkAnimation.end = 5;
        coffee_drinkAnimation.repeat = 0;
        coffee_drinkAnimation.autoPlay = false;

        this.board = board;
        this.shop_coffee_solo = shop_coffee_solo;
        this.coffee_icon = coffee_icon;
        this.arrow = arrow;
        this.coin_sprite = coin_sprite;
        this.coin = coin;
        this.counter_arrow = counter_arrow;
        this.cooldown_timer = cooldown_timer;
        this.coffee_bubble = coffee_bubble;
        this.coffee_drink = coffee_drink;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.coffee_icon.setDepth(1000);
        this.arrow.setDepth(1001);
        this.coin.setDepth(1002);

        this.arrowTween = this.tweens.add({
            targets: this.counter_arrow,
            y: 1030,    
            duration: 400, 
            yoyo: true, 
            repeat: -1, 
            ease: 'Sine.easeInOut' 
        });

        this.pengArrowTween = this.tweens.add({
            targets: this.arrow,
            y: 255,    
            duration: 400, 
            yoyo: true, 
            repeat: -1, 
            ease: 'Sine.easeInOut' 
        });

        this.stage1Done = false;
        this.hasApron = false;
        this.collectCoffee = false;
        this.collectedCoffee = false;
        this.deliverCoffee = false;
        this.deliveredCoffee = false;
        this.apronCheck = false;

        this.interface.loadWidget('CoffeeTutorial');

    }

    stop() {
        super.stop()
        this.stage1Done = false;
        this.hasApron = false;
        this.collectCoffee = false;
        this.collectedCoffee = false;
        this.deliverCoffee = false;
        this.deliveredCoffee = false;
        this.apronCheck = false;
    }

    update() {
        super.update()

        if (this.world.client.penguin) {
            this.cooldown_timer.x = this.world.client.penguin.x; 
            this.cooldown_timer.y = this.world.client.penguin.y - 90;

            this.coffee_icon.x = this.world.client.penguin.x; 
            this.coffee_icon.y = this.world.client.penguin.y - 80;
        }
        this.checkApron();
    }

    exitTut() {
        this.interface.prompt.showWindow("Are you sure you want to exit the tutorial?\n Your progress will not be saved.", 'dual',  () => {
            this.triggerRoom(100, 580, 520)
            this.interface.prompt.window.visible = false
        })
    }

    onBoardClick() {
        let animation = (this.boardToggle) ? 'board1' : 'board2'

        this.board.play(animation)
        this.boardToggle = !this.boardToggle
    }

    checkApron() {
        if (!this.hasApron && !this.apronCheck && this.stage1Done) {
            const workitem = 262;
            const penguin = this.world.client.penguin;
            const items = [...new Set(Object.values(penguin.items.equippedFlat))].sort();

            const hasItem = items.includes(workitem);

            if (hasItem) {
                if (this.stage1Done) {
                    this.hasApron = true;
                    this.interface.main.playerCard.close();
                    this.interface.loadWidget('CoffeeTutorial');
                }
            }
        }
    }

    coffeeZone() {
        if (this.collectedCoffee) {
            return; 
        } else if (this.collectCoffee) {
            this.counter_arrow.visible = false
            this.shop_coffee_solo.visible = false
            this.coffee_icon.visible = true;
            this.collectedCoffee = true;
            this.interface.loadWidget('CoffeeTutorial');
        }
    }

    deliverZone() {
        if (this.deliverCoffee) {
            this.deliveredCoffee = true;
            this.deliverCoffee = false;
            this.collectCoffee = false;
            this.arrow.visible = false;
            this.coffee_icon.visible = false;

            this.coffee_drink.visible = true;
            this.coffee_drink.__Animation.play();
            this.coffee_drink.on('animationcomplete', () => this.coffee_drink.visible = false)

            this.coin.setPosition(this.world.client.penguin.x, this.world.client.penguin.y - 50);
            this.coin.setDepth(1002);
            this.soundManager.playSfx('job_coffee_done');

            this.coin.visible = true;
            this.coinTween = this.tweens.add({
                targets: [this.coin],
                y: {
                    from: this.coin.y,
                    to: this.coin.y - 70
                },
                ease: 'Linear',
                duration: 1000,
                onComplete: () => this.completeCoin()
            });
        } else {
            return;
        }
    }

    completeCoin() {
        this.coin.visible = false
        setTimeout(() => {
            this.interface.loadWidget('CoffeeTutorial');
        }, 600);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */