import RoomScene from '@rooms/RoomScene'

import { Animation, Button, MoveTo, ShowHint, SimpleButton } from '@components/components'

import CoffeeWork from '@engine/world/room/work/CoffeeWork'


/* START OF COMPILED CODE */

export default class Coffee extends RoomScene {

    constructor() {
        super("Coffee");

        /** @type {Phaser.GameObjects.Sprite} */
        this.board;
        /** @type {Phaser.GameObjects.Sprite} */
        this.shop_coffee;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_coffee;
        /** @type {Phaser.GameObjects.Sprite} */
        this.coffee_arrow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.counter_arrow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cooldown_timer;
        /** @type {Phaser.GameObjects.Sprite} */
        this.coin_sprite;
        /** @type {Phaser.GameObjects.Text} */
        this.coin_text;
        /** @type {Phaser.GameObjects.Container} */
        this.coin;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 580, 520),
            'beans': () => this.triggerGame(901),
            'book': () => this.triggerRoom(111, 1200, 580),
            'smoothie': () => this.triggerGame(959)
        }
        this.music = '1'

        this.boardToggle = true

        this.coffeeAnimKeys = {
            'job_coffee_0001': 'shop_coffee_01',
            'job_coffee_0006': 'shop_coffee_02',
            'job_coffee_0011': 'shop_coffee_03',
            'job_coffee_0016': 'shop_coffee_04',
        }

        this.ctStg = 0;
        this.hasApron = false
        this.isCustomer = false;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("coffee-pack", "assets/media/rooms/coffee/coffee-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(1, -6, "coffee", "bg");
        bg.setOrigin(0, 0);

        // lamp
        const lamp = this.add.image(176, -11, "coffee", "lamp");
        lamp.setOrigin(0, 0);

        // table
        const table = this.add.image(418, 499, "coffee", "table");
        table.setOrigin(0.5217391304347826, 0.5368421052631579);

        // smoothie_stand
        const smoothie_stand = this.add.container(157.9919490592393, 658.5672741886791);

        // smoothie
        const smoothie = this.add.image(-44.58566983918888, -64.34841680810257, "coffee", "smoothie");
        smoothie.setOrigin(0.5946647978225035, 0.6296633645007567);
        smoothie_stand.add(smoothie);

        // blender
        const blender = this.add.sprite(-6, -89, "coffee", "blender0001");
        smoothie_stand.add(blender);

        // fruitbox_1
        const fruitbox_1 = this.add.image(57, 792.6431540807403, "coffee", "fruitbox_1");
        fruitbox_1.setOrigin(0.5, 0.7852698057242741);

        // fruitbox_2
        const fruitbox_2 = this.add.image(90, 832.5976789280489, "coffee", "fruitbox_2");
        fruitbox_2.setOrigin(0.5, 0.7619262147885945);

        // counter_back
        const counter_back = this.add.image(854, 458, "coffee", "counter_back");
        counter_back.setOrigin(0.27906976744186046, 0.8363636363636363);

        // counter_front
        const counter_front = this.add.image(812, 621, "coffee", "counter_front");
        counter_front.setOrigin(0.2864583333333333, 0.8710801393728222);

        // smoke
        const smoke = this.add.sprite(907, 180, "coffee", "smoke0001");
        smoke.setOrigin(0, 0);

        // sign_back
        const sign_back = this.add.image(907, 632, "coffee", "sign_back");
        sign_back.setOrigin(0.5, 0.4789915966386555);

        // sign_front
        const sign_front = this.add.image(884, 695, "coffee", "sign_front");
        sign_front.setOrigin(0.5190839694656488, 0.8827586206896552);

        // board
        const board = this.add.sprite(951, 146, "coffee", "board0001");
        board.setOrigin(0, 0);

        // machine_1
        const machine_1 = this.add.image(956, 468, "coffee", "machine_1");
        machine_1.setOrigin(0, 0);

        // machine_2
        const machine_2 = this.add.image(964, 314, "coffee", "machine_2");
        machine_2.setOrigin(0, 0);

        // machine_3
        const machine_3 = this.add.image(1021, 406, "coffee", "machine_3");
        machine_3.setOrigin(0, 0);

        // bag
        const bag = this.add.image(1077, 646, "coffee", "bag");
        bag.setOrigin(0.4430379746835443, 0.506024096385542);

        // beans
        const beans = this.add.image(1016, 651, "coffee", "beans");
        beans.setOrigin(0.3411764705882352, 0.6145708044679954);

        // lamp_2
        const lamp_2 = this.add.image(992, 151, "coffee", "lamp_2");
        lamp_2.setOrigin(0, 0);

        // stairs
        const stairs = this.add.image(1202, 328, "coffee", "stairs");
        stairs.setOrigin(0, 0);

        // door
        const door = this.add.image(728, 135, "coffee", "door");
        door.setOrigin(0, 0);

        // shop_coffee
        const shop_coffee = this.add.sprite(834, 665, "coffee_jobs", "job_coffee_0001");
        shop_coffee.setOrigin(0.48104857995152495, 3.9520740519068775);
        shop_coffee.visible = false;

        // penguin_coffee
        const penguin_coffee = this.add.sprite(-153, 344, "coffee_jobs", "job_coffee_0001");

        // coffee_arrow
        const coffee_arrow = this.add.sprite(-173, 99, "arrow");
        coffee_arrow.scaleX = 0.2;
        coffee_arrow.scaleY = 0.2;
        coffee_arrow.angle = -180;

        // counter_arrow
        const counter_arrow = this.add.sprite(840, 1112, "arrow");
        counter_arrow.scaleX = 0.2;
        counter_arrow.scaleY = 0.2;
        counter_arrow.angle = -180;
        counter_arrow.setOrigin(0.49999999999999406, -10.688557995255064);
        counter_arrow.visible = false;

        // cooldown_timer
        const cooldown_timer = this.add.sprite(-109, 289, "coffee_jobs", "cooldown_timer_0001");
        cooldown_timer.visible = false;

        // coin
        const coin = this.add.container(-163, 257);

        // coin_sprite
        const coin_sprite = this.add.sprite(31.03714265764836, -50.12658541187517, "coffee_jobs", "coin0002");
        coin.add(coin_sprite);

        // coin_text
        const coin_text = this.add.text(-29, -33, "", {});
        coin_text.text = "10";
        coin_text.setStyle({ "align": "center", "baselineX":0,"baselineY":0,"fixedWidth":50,"fixedHeight":50,"fontFamily": "CCComiccrazy", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":2});
        coin_text.setPadding({"top":15});
        coin.add(coin_text);

        // lists
        const sort = [beans, bag, sign_front, sign_back, counter_front, counter_back, table, smoothie_stand, fruitbox_2, fruitbox_1, shop_coffee, penguin_coffee, counter_arrow];

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

        // beans (components)
        const beansButton = new Button(beans);
        beansButton.spriteName = "beans";
        beansButton.pixelPerfect = true;
        new MoveTo(beans);
        const beansShowHint = new ShowHint(beans);
        beansShowHint.text = "beans_hint";

        // stairs (components)
        const stairsButton = new Button(stairs);
        stairsButton.spriteName = "stairs";
        const stairsMoveTo = new MoveTo(stairs);
        stairsMoveTo.x = 1255;
        stairsMoveTo.y = 820;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.pixelPerfect = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 750;
        doorMoveTo.y = 392;

        // cooldown_timer (components)
        const cooldown_timerAnimation = new Animation(cooldown_timer);
        cooldown_timerAnimation.key = "cooldown_timer_";
        cooldown_timerAnimation.end = 121;
        cooldown_timerAnimation.repeat = 0;
        cooldown_timerAnimation.autoPlay = false;

        this.board = board;
        this.shop_coffee = shop_coffee;
        this.penguin_coffee = penguin_coffee;
        this.coffee_arrow = coffee_arrow;
        this.counter_arrow = counter_arrow;
        this.cooldown_timer = cooldown_timer;
        this.coin_sprite = coin_sprite;
        this.coin_text = coin_text;
        this.coin = coin;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.ctStg = 0;
        this.work = new CoffeeWork(this, this.penguin_coffee, this.shop_coffee, this.coffee_arrow, this.coin, this.coin_text)
        this.cooldown_timer.setDepth(1005);

        this.arrowTween = this.tweens.add({
            targets: this.counter_arrow,
            y: 1030,    
            duration: 400, 
            yoyo: true, 
            repeat: -1, 
            ease: 'Sine.easeInOut' 
        });
    }

    stop() {
        super.stop()
        this.ctStg = 0;
        this.work.removeListeners()
    }

    update() {
        super.update()
        // this.checkApron();
        this.work.update()

        if (this.world.client.penguin) {
            this.cooldown_timer.x = this.world.client.penguin.x; 
            this.cooldown_timer.y = this.world.client.penguin.y - 90;
        }
    }

    showCoinRewardToPlayer(penguin, coins) {
        this.work.showCoinRewardToPlayer(penguin, coins)
    }

    onBoardClick() {
        let animation = (this.boardToggle) ? 'board1' : 'board2'

        this.board.play(animation)
        this.boardToggle = !this.boardToggle
    }

    checkApron() {
        if (this.world.client.penguin) {
            const workitem = 262;
            const penguin = this.world.client.penguin;
            const items = [...new Set(Object.values(penguin.items.equippedFlat))].sort();

            const hasItem = items.includes(workitem);

            if (!hasItem && !this.isCustomer) {
                const otherPenguins = Object.values(this.penguins).filter(p => p.id !== penguin.id);

                let foundPenguinWithItem = false;
                for (let otherPenguin of otherPenguins) {
                    const otherItems = [...new Set(Object.values(otherPenguin.items.equippedFlat))].sort();
                    if (otherItems.includes(workitem)) {
                        foundPenguinWithItem = true;
                        break;
                    }
                }

                if (foundPenguinWithItem) {
                    this.isCustomer = true;
                    if (!this.world.client.hasViewedInteraction("customer_coffeetutorial")) {
                        this.interface.loadWidget('WorkTutorial');
                    }
                }
            } else if (hasItem && !this.hasApron) {
                this.hasApron = true;
                if (!this.world.client.hasViewedInteraction("jobs_coffeetutorial")) {
                    this.interface.loadWidget('CoffeeTutorial');
                }
            }
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */