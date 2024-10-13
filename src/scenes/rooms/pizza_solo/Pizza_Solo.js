import RoomScene from '@rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton, Zone, ShowHint, HoverAnimation } from '@components/components'

/* START OF COMPILED CODE */

export default class Pizza_Solo extends RoomScene {

    constructor() {
        super("Pizza_Solo");

        /** @type {Phaser.GameObjects.Sprite} */
        this.pizza_eat;
        /** @type {Phaser.GameObjects.Sprite} */
        this.book;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pizza_counter;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pizza_solo_icon;
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
        this.pizza_bubble;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'collect': () => this.pizzaZone(),
            'deliver': () => this.deliverZone()
        }
        this.music = 'Tutorial'

        this.stage1Done = false;
        this.hasApron = false;
        this.collectPizza = false;
        this.collectedPizza = false;
        this.deliverPizza = false;
        this.deliveredPizza = false;
        this.apronCheck = false;

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("pizza_solo-pack", "assets/media/rooms/pizza_solo/pizza_solo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(760, 483, "pizza_solo", "bg");
        bg.scaleX = 1.02;
        bg.scaleY = 1.02;

        // bead_door_hover0001
        const bead_door_hover0001 = this.add.image(385, 241, "pizza_solo", "bead-door");
        bead_door_hover0001.scaleX = 1.02;
        bead_door_hover0001.scaleY = 1.02;

        // piano
        const piano = this.add.image(1270.6137794715412, 447.7720125239132, "pizza_solo", "piano");
        piano.setOrigin(0.1497106693675879, 0.6223623642170768);

        // door
        const door = this.add.image(837, 265, "pizza_solo", "door");
        door.scaleX = 1.02;
        door.scaleY = 1.02;

        // pizza_solo_pan
        const pizza_solo_pan = this.add.image(187, 515, "pizza_solo", "pizza_solo-pan");
        pizza_solo_pan.scaleX = 1.02;
        pizza_solo_pan.scaleY = 1.02;

        // oven
        const oven = this.add.image(110, 457, "pizza_solo", "oven");
        oven.scaleX = 1.02;
        oven.scaleY = 1.02;

        // foreground
        const foreground = this.add.image(111.99999999999999, 957.6951746992214, "pizza_solo", "foreground");
        foreground.scaleX = 1.02;
        foreground.scaleY = 1.02;
        foreground.setOrigin(0.49999999999999994, 0.9387919485387388);

        // chair1
        const chair1 = this.add.image(414, 609, "pizza_solo", "chair1");
        chair1.scaleX = 1.02;
        chair1.scaleY = 1.02;

        // chair2
        const chair2 = this.add.image(577, 609, "pizza_solo", "chair2");
        chair2.scaleX = 1.02;
        chair2.scaleY = 1.02;

        // _table1
        const _table1 = this.add.container(494, 664);

        // table1
        const table1 = this.add.image(0, 0, "pizza_solo", "table1");
        table1.scaleX = 1.02;
        table1.scaleY = 1.02;
        _table1.add(table1);

        // candle1
        const candle1 = this.add.sprite(5, -84, "pizza_solo", "candle-fire10001");
        candle1.scaleX = 0.5;
        candle1.scaleY = 0.5;
        candle1.setOrigin(0.47076955921284025, 0.587907045214686);
        _table1.add(candle1);

        // chair3
        const chair3 = this.add.image(677, 719, "pizza_solo", "chair3");
        chair3.scaleX = 1.02;
        chair3.scaleY = 1.02;

        // chair4
        const chair4 = this.add.image(840, 719, "pizza_solo", "chair4");

        // tut_left
        const tut_left = this.add.image(679, 738.9755839864803, "pizza_tutorial", "tut_left");
        tut_left.setOrigin(0.5, 0.7796744531530703);

        // _table2
        const _table2 = this.add.container(763, 775);

        // npc_right
        const npc_right = this.add.image(75, -41, "pizza_tutorial", "npc_right");
        npc_right.setOrigin(0.5, 0.7565941164240225);
        _table2.add(npc_right);

        // table2
        const table2 = this.add.image(0, 0, "pizza_solo", "table2");
        table2.scaleX = 1.02;
        table2.scaleY = 1.02;
        _table2.add(table2);

        // candle2
        const candle2 = this.add.sprite(-4, -79, "pizza_solo", "candle-fire10001");
        candle2.scaleX = 0.5;
        candle2.scaleY = 0.5;
        candle2.setOrigin(0.6150868770874695, 0.7592143525247391);
        candle2.flipX = true;
        _table2.add(candle2);

        // pizza_eat
        const pizza_eat = this.add.sprite(-46, -49, "pizza_solo-job", "parlor_pizza_solo_0001");
        pizza_eat.scaleX = 0.6;
        pizza_eat.scaleY = 0.6;
        pizza_eat.visible = false;
        _table2.add(pizza_eat);

        // chair5
        const chair5 = this.add.image(987, 687, "pizza_solo", "chair5");
        chair5.scaleX = 1.02;
        chair5.scaleY = 1.02;

        // chair6
        const chair6 = this.add.image(1159, 687, "pizza_solo", "chair6");
        chair6.scaleX = 1.02;
        chair6.scaleY = 1.02;

        // _table3
        const _table3 = this.add.container(1071, 735);

        // table3
        const table3 = this.add.image(0, 0, "pizza_solo", "table3");
        table3.scaleX = 1.02;
        table3.scaleY = 1.02;
        _table3.add(table3);

        // candle3
        const candle3 = this.add.sprite(-3, -79, "pizza_solo", "candle-fire10001");
        candle3.scaleX = 0.5;
        candle3.scaleY = 0.5;
        candle3.setOrigin(0.5104570836561227, 0.7739893594080658);
        _table3.add(candle3);

        // steam
        const steam = this.add.sprite(43, 165, "pizza_solo", "smoke0001");

        // fire
        const fire = this.add.sprite(110, 770, "pizza_solo", "fire0001");
        fire.scaleX = 1.02;
        fire.scaleY = 1.02;

        // pizza_soloovenBtn
        const pizza_soloovenBtn = this.add.polygon(116.42141601879115, 596.0051879882812, "-6.827298564718232 390.3203339022225 -15.399254706215562 -45.13503808584187 47.46454179711061 -55.946710719702764 229.66253635098101 -33.52234215922641 225.4579672458917 272.00967947726394");
        pizza_soloovenBtn.setOrigin(0.5036338568583918, 0.18823968401047267);

        // counter
        const counter = this.add.container(528, 452.57060422547306);

        // big_table
        const big_table = this.add.image(0, -19.570604225473062, "pizza_solo", "big-table");
        big_table.scaleX = 1.02;
        big_table.scaleY = 1.02;
        counter.add(big_table);

        // book
        const book = this.add.sprite(60, -103, "pizza_solo", "book-hover0001");
        book.scaleX = 1.02;
        book.scaleY = 1.02;
        book.setOrigin(0.4675991955393792, 0.5591682638128761);
        counter.add(book);

        // register
        const register = this.add.sprite(-65, -87, "pizza_solo", "register0001");
        register.scaleX = 1.02;
        register.scaleY = 1.02;
        register.setOrigin(0.5, 0.883859601400003);
        counter.add(register);

        // pizza_counter
        const pizza_counter = this.add.sprite(65, -95, "pizza_solo-job", "parlor_pizza_solo_0001");
        pizza_counter.setOrigin(0.4851873895835799, 0.31028464351277163);
        pizza_counter.visible = false;
        counter.add(pizza_counter);

        // sign
        this.add.image(381, 32, "pizza_solo", "sign");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(593, 361, 140, 40);
        rectangle_1.scaleY = 1.00001;
        rectangle_1.visible = false;
        rectangle_1.fillColor = 65535;
        rectangle_1.fillAlpha = 0.5;

        // rectangle_2
        const rectangle_2 = this.add.rectangle(463, 331, 110, 100);
        rectangle_2.scaleY = 1.00001;
        rectangle_2.fillColor = 65535;
        rectangle_2.fillAlpha = 0.5;

        // pizza_solo_icon
        const pizza_solo_icon = this.add.sprite(-136.95451321957677, 367.7150198572835, "pizza_solo-job", "parlor_pizza_solo_0001");
        pizza_solo_icon.scaleX = 0.6;
        pizza_solo_icon.scaleY = 0.6;
        pizza_solo_icon.visible = false;

        // arrow
        const arrow = this.add.sprite(680, 638, "arrow");
        arrow.scaleX = 0.2;
        arrow.scaleY = 0.2;
        arrow.angle = -180;
        arrow.visible = false;

        // coin
        const coin = this.add.container(-153, 265);

        // coin_sprite
        const coin_sprite = this.add.sprite(31.03714265764836, -50.12658541187517, "pizza_solo-job", "coin0002");
        coin.add(coin_sprite);

        // counter_arrow
        const counter_arrow = this.add.sprite(593, 1263.5964629225427, "arrow");
        counter_arrow.scaleX = 0.2;
        counter_arrow.scaleY = 0.2;
        counter_arrow.angle = -180;
        counter_arrow.setOrigin(0.4999999999999926, -16.45468134319181);
        counter_arrow.visible = false;

        // cooldown_timer
        const cooldown_timer = this.add.sprite(-117, 289, "pizza_solo-job", "cooldown_timer_0001");
        cooldown_timer.visible = false;

        // pizza_bubble
        const pizza_bubble = this.add.container(682, 1573);
        pizza_bubble.visible = false;

        // balloon_emote
        const balloon_emote = this.add.image(0, -912.0767359005963, "main", "balloon-emote");
        pizza_bubble.add(balloon_emote);

        // balloon
        const balloon = this.add.image(0, -965.0767359005963, "main", "balloon");
        pizza_bubble.add(balloon);

        // emotes_13
        const emotes_13 = this.add.image(5, -957.0767359005963, "main", "emotes/24");
        pizza_bubble.add(emotes_13);

        // lists
        const sort = [piano, chair1, chair2, chair3, chair4, chair5, chair6, counter, _table3, _table2, _table1, foreground, pizza_solo_icon, counter_arrow, tut_left, npc_right, pizza_bubble];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.callback = () => {this.exitTut();};
        doorButton.pixelPerfect = true;
        const doorShowHint = new ShowHint(door);
        doorShowHint.text = "Exit Tutorial?";

        // candle1 (components)
        const candle1Animation = new Animation(candle1);
        candle1Animation.key = "candle-fire1";
        candle1Animation.end = 14;

        // candle2 (components)
        const candle2Animation = new Animation(candle2);
        candle2Animation.key = "candle-fire1";
        candle2Animation.end = 14;

        // pizza_eat (components)
        const pizza_eatAnimation = new Animation(pizza_eat);
        pizza_eatAnimation.key = "parlor_pizza_solo_";
        pizza_eatAnimation.end = 9;
        pizza_eatAnimation.frameRate = 15;
        pizza_eatAnimation.repeat = 0;
        pizza_eatAnimation.autoPlay = false;

        // candle3 (components)
        const candle3Animation = new Animation(candle3);
        candle3Animation.key = "candle-fire1";
        candle3Animation.end = 14;

        // steam (components)
        const steamAnimation = new Animation(steam);
        steamAnimation.key = "smoke";
        steamAnimation.end = 5;

        // fire (components)
        const fireAnimation = new Animation(fire);
        fireAnimation.key = "fire";
        fireAnimation.end = 8;

        // book (components)
        const bookHoverAnimation = new HoverAnimation(book);
        bookHoverAnimation.key = "book-hover";
        bookHoverAnimation.end = 16;
        bookHoverAnimation.hoverZone = rectangle_1;

        // register (components)
        const registerHoverAnimation = new HoverAnimation(register);
        registerHoverAnimation.key = "register";
        registerHoverAnimation.checkpoints = "22";
        registerHoverAnimation.end = 42;
        registerHoverAnimation.hoverZone = rectangle_2;

        // cooldown_timer (components)
        const cooldown_timerAnimation = new Animation(cooldown_timer);
        cooldown_timerAnimation.key = "cooldown_timer_";
        cooldown_timerAnimation.end = 121;
        cooldown_timerAnimation.repeat = 0;
        cooldown_timerAnimation.autoPlay = false;

        this.pizza_eat = pizza_eat;
        this.book = book;
        this.pizza_counter = pizza_counter;
        this.rectangle_1 = rectangle_1;
        this.pizza_solo_icon = pizza_solo_icon;
        this.arrow = arrow;
        this.coin_sprite = coin_sprite;
        this.coin = coin;
        this.counter_arrow = counter_arrow;
        this.cooldown_timer = cooldown_timer;
        this.pizza_bubble = pizza_bubble;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.pizza_solo_icon.setDepth(1000);
        this.arrow.setDepth(1001);
        this.coin.setDepth(1002);

        this.arrowTween = this.tweens.add({
            targets: this.counter_arrow,
            y: 1230,
            duration: 400,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        this.pengArrowTween = this.tweens.add({
            targets: this.arrow,
            y: 614,
            duration: 400,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        this.stage1Done = false;
        this.hasApron = false;
        this.collectPizza = false;
        this.collectedPizza = false;
        this.deliverPizza = false;
        this.deliveredPizza = false;
        this.apronCheck = false;

        this.interface.loadWidget('PizzaTutorial');
    }

    stop() {
        super.stop()
        this.stage1Done = false;
        this.hasApron = false;
        this.collectPizza = false;
        this.collectedPizza = false;
        this.deliverPizza = false;
        this.deliveredPizza = false;
        this.apronCheck = false;
    }

    update() {
        super.update()

        if (this.world.client.penguin) {
            this.cooldown_timer.x = this.world.client.penguin.x;
            this.cooldown_timer.y = this.world.client.penguin.y - 90;

            this.pizza_solo_icon.x = this.world.client.penguin.x;
            this.pizza_solo_icon.y = this.world.client.penguin.y - 100;
        }
        this.checkApron();
    }

    checkApron() {
        if (!this.hasApron && !this.apronCheck && this.stage1Done) {
            const workitems = [263, 424];
            const penguin = this.world.client.penguin;

            const items = [...new Set(Object.values(penguin.items.equippedFlat))].sort();

            const hasBothItems = workitems.every(item => items.includes(item));

            if (hasBothItems) {
                if (this.stage1Done) {
                    this.hasApron = true;
                    this.interface.main.playerCard.close();
                    this.interface.loadWidget('PizzaTutorial');
                }
            }
        }
    }

    exitTut() {
        this.interface.prompt.showWindow("Are you sure you want to exit the tutorial?\n Your progress will not be saved.", 'dual',  () => {
            this.triggerRoom(300, 1130, 550)
            this.interface.prompt.window.visible = false
        })
    }

    pizzaZone() {
        if (this.collectedPizza) {
            return;
        } else if (this.collectPizza) {
            this.counter_arrow.visible = false
            this.pizza_counter.visible = false
            this.book.visible = true;
            this.pizza_solo_icon.visible = true;
            this.collectedPizza = true;
            this.interface.loadWidget('PizzaTutorial');
        }
    }

    deliverZone() {
        if (this.deliverPizza) {
            this.deliveredPizza = true;
            this.deliverPizza = false;
            this.collectPizza = false;
            this.arrow.visible = false;
            this.pizza_solo_icon.visible = false;

            this.pizza_eat.visible = true;
            this.pizza_eat.__Animation.play();
            this.pizza_eat.on('animationcomplete', () => this.pizza_eat.visible = false)

            this.coin.setPosition(this.world.client.penguin.x, this.world.client.penguin.y - 50);
            this.coin.setDepth(1002);
            this.soundManager.playSfx('job_pizza_done');

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
            this.interface.loadWidget('PizzaTutorial');
        }, 600);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here