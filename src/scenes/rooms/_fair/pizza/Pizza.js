import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, Button, MoveTo, SimpleButton, Zone, ShowHint, ZoneTrigger, HoverAnimation } from '@components/components'

import PizzaWork from '@engine/world/room/work/PizzaWork'

/* START OF COMPILED CODE */

export default class Pizza extends RoomScene {

    constructor() {
        super("Pizza");

        /** @type {Phaser.GameObjects.Image} */
        this.pizzaDoor;
        /** @type {Phaser.GameObjects.Sprite} */
        this.book;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.registerHit;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.bookHit;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin_pizza;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cooldown_timer;
        /** @type {Phaser.GameObjects.Sprite} */
        this.counter_arrow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.coin_sprite;
        /** @type {Phaser.GameObjects.Text} */
        this.coin_text;
        /** @type {Phaser.GameObjects.Container} */
        this.coin;
        /** @type {Phaser.GameObjects.Sprite} */
        this.parlor_arrow;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle_1;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 870, 330),
            'pizzatron': () => this.triggerGame(910),
            'pizzaoven': () => this.triggerGame(943)
        }

        this.music = 221

        this.pizzaAnimKeys = {
            'parlor_pizza_0001': 'parlor_pizza_01',
            'parlor_pizza_0010': 'parlor_pizza_02',
            'parlor_pizza_0019': 'parlor_pizza_03',
            'parlor_pizza_0028': 'parlor_pizza_04',
            'parlor_pizza_0037': 'parlor_pizza_05',
            'parlor_pizza_0046': 'parlor_pizza_06',
            'parlor_pizza_0055': 'parlor_pizza_07',
            'parlor_pizza_0064': 'parlor_pizza_08',
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("pizza-pack", "assets/media/rooms/pizza/pizza-pack.json");
        this.load.pack("fair-pizza-pack", "assets/media/rooms/_fair/pizza/fair-pizza-pack.json");
    }

    /** @returns {void} */
    _create() {

        // pizzaDoor
        const pizzaDoor = this.add.image(405, 64, "fair-pizza", "pizzaDoor");
        pizzaDoor.scaleX = 1.276219158148232;
        pizzaDoor.scaleY = 1.7260515432254975;

        // bg_png
        const bg_png = this.add.image(760, 536, "fair-pizza", "backgroundPizza");
        bg_png.scaleX = 1.02;
        bg_png.scaleY = 1.02;

        // fg1
        this.add.image(701, 277, "fair-pizza", "fg1");

        // piano_png
        const piano_png = this.add.image(1286, 452, "fair-pizza", "fairPiano");
        piano_png.setOrigin(0.1497106693675879, 0.6223623642170768);

        // pizza_pan_png
        const pizza_pan_png = this.add.image(187, 515, "pizza", "pizza-pan");
        pizza_pan_png.scaleX = 1.02;
        pizza_pan_png.scaleY = 1.02;

        // counter
        const counter = this.add.container(528, 470);

        // big_table_png
        const big_table_png = this.add.image(0, -30, "fair-pizza", "counter");
        big_table_png.scaleX = 1.02;
        big_table_png.scaleY = 1.02;
        counter.add(big_table_png);

        // book
        const book = this.add.sprite(59, -115, "pizza", "book-hover0001");
        book.scaleX = 1.02;
        book.scaleY = 1.02;
        book.setOrigin(0.4675991955393792, 0.5591682638128761);
        counter.add(book);

        // register
        const register = this.add.sprite(-66, -99, "pizza", "register0001");
        register.scaleX = 1.02;
        register.scaleY = 1.02;
        register.setOrigin(0.5, 0.883859601400003);
        counter.add(register);

        // oven_png
        const oven_png = this.add.image(110, 457, "pizza", "oven");
        oven_png.scaleX = 1.02;
        oven_png.scaleY = 1.02;

        // chair5_png
        const chair5_png = this.add.image(884, 656, "pizza", "chair5");
        chair5_png.scaleX = 1.02;
        chair5_png.scaleY = 1.02;

        // chair6_png
        const chair6_png = this.add.image(1056, 656, "pizza", "chair6");
        chair6_png.scaleX = 1.02;
        chair6_png.scaleY = 1.02;

        // table3_png
        const table3_png = this.add.image(968, 704, "fair-pizza", "table");
        table3_png.scaleX = 1.02;
        table3_png.scaleY = 1.02;

        // chair1_png
        const chair1_png = this.add.image(476, 741, "pizza", "chair1");
        chair1_png.scaleX = 1.02;
        chair1_png.scaleY = 1.02;

        // chair2_png
        const chair2_png = this.add.image(639, 741, "pizza", "chair2");
        chair2_png.scaleX = 1.02;
        chair2_png.scaleY = 1.02;

        // chair3_png
        const chair3_png = this.add.image(848, 838, "pizza", "chair3");
        chair3_png.scaleX = 1.02;
        chair3_png.scaleY = 1.02;

        // table1_png
        const table1_png = this.add.image(556, 796, "fair-pizza", "table");
        table1_png.scaleX = 1.02;
        table1_png.scaleY = 1.02;

        // chair4_png
        const chair4_png = this.add.image(1011, 838, "pizza", "chair4");

        // table2_png
        const table2_png = this.add.image(934, 894, "fair-pizza", "table");
        table2_png.scaleX = 1.02;
        table2_png.scaleY = 1.02;

        // steam
        const steam = this.add.sprite(43, 165, "pizza", "smoke0001");

        // fire
        const fire = this.add.sprite(110, 770, "pizza_solo", "fire0001");
        fire.scaleX = 1.02;
        fire.scaleY = 1.02;

        // pizzaBtn
        const pizzaBtn = this.add.rectangle(119, 633, 240, 350);

        // fg2
        const fg2 = this.add.image(754, 966.3540667923526, "fair-pizza", "fg2");
        fg2.setOrigin(0.5, 0.9992196904929588);

        // wheel
        const wheel = this.add.image(1455, 642, "fair-pizza", "wheel");

        // fg
        const fg = this.add.image(834, 1166.966916856273, "fair-pizza", "fg");
        fg.setOrigin(0.5, 1.0008057530512962);

        // pizzatronHover
        const pizzatronHover = this.add.rectangle(399.70208740234375, 188.9146728515625, 128, 128);
        pizzatronHover.scaleX = 1.036040996183987;
        pizzatronHover.scaleY = 3.29687308472712;
        pizzatronHover.setOrigin(0.46527851445850743, 0.42870800652394236);

        // registerHit
        const registerHit = this.add.rectangle(458, 346, 128, 128);
        registerHit.scaleX = 0.8035725161272465;
        registerHit.scaleY = 0.7384577278842881;
        registerHit.setOrigin(0.46527851445850743, 0.42870800652394236);

        // bookHit
        const bookHit = this.add.rectangle(592, 366, 128, 128);
        bookHit.scaleX = 1.0081182476673636;
        bookHit.scaleY = 0.42392944239427194;
        bookHit.setOrigin(0.46527851445850743, 0.42870800652394236);

        // penguin_pizza
        const penguin_pizza = this.add.sprite(-135, 437, "pizza-job", "parlor_pizza_0001");
        penguin_pizza.scaleX = 0.6;
        penguin_pizza.scaleY = 0.6;
        penguin_pizza.setOrigin(0.48104857995152495, 3.9520740519068775);

        // cooldown_timer
        const cooldown_timer = this.add.sprite(-114, 269, "pizza-job", "cooldown_timer_0001");
        cooldown_timer.visible = false;

        // counter_arrow
        const counter_arrow = this.add.sprite(596, 1244, "arrow");
        counter_arrow.scaleX = 0.2;
        counter_arrow.scaleY = 0.2;
        counter_arrow.angle = -180;
        counter_arrow.setOrigin(0.4999999999999926, -16.45468134319181);
        counter_arrow.visible = false;

        // coin
        const coin = this.add.container(-150, 245);

        // coin_sprite
        const coin_sprite = this.add.sprite(31.03714265764836, -50.12658541187517, "pizza-job", "coin0002");
        coin.add(coin_sprite);

        // coin_text
        const coin_text = this.add.text(-29, -33, "", {});
        coin_text.text = "10";
        coin_text.setStyle({ "align": "center", "baselineX":0,"baselineY":0,"fixedWidth":50,"fixedHeight":50,"fontFamily": "CCComiccrazy", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":2});
        coin_text.setPadding({"top":15});
        coin.add(coin_text);

        // parlor_arrow
        const parlor_arrow = this.add.sprite(-150, 124, "arrow");
        parlor_arrow.scaleX = 0.2;
        parlor_arrow.scaleY = 0.2;
        parlor_arrow.angle = -180;

        // rectangle_2
        const rectangle_2 = this.add.rectangle(462, 337, 110, 100);
        rectangle_2.scaleY = 1.00001;
        rectangle_2.fillColor = 65535;
        rectangle_2.fillAlpha = 0.5;

        // rectangle_1
        const rectangle_1 = this.add.rectangle(592, 367, 140, 40);
        rectangle_1.scaleY = 1.00001;
        rectangle_1.visible = false;
        rectangle_1.fillColor = 65535;
        rectangle_1.fillAlpha = 0.5;

        // lists
        const sort = [piano_png, chair1_png, chair2_png, chair3_png, chair4_png, chair5_png, chair6_png, table1_png, table2_png, table3_png, fg, fg2, wheel, counter];

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

        // steam (components)
        const steamAnimation = new Animation(steam);
        steamAnimation.key = "smoke";
        steamAnimation.end = 5;

        // fire (components)
        const fireAnimation = new Animation(fire);
        fireAnimation.key = "fire";
        fireAnimation.end = 8;

        // pizzaBtn (components)
        new SimpleButton(pizzaBtn);
        const pizzaBtnShowHint = new ShowHint(pizzaBtn);
        pizzaBtnShowHint.text = "Pizza Oven";
        const pizzaBtnMoveTo = new MoveTo(pizzaBtn);
        pizzaBtnMoveTo.x = 172;
        pizzaBtnMoveTo.y = 838;

        // pizzatronHover (components)
        new SimpleButton(pizzatronHover);
        const pizzatronHoverShowHint = new ShowHint(pizzatronHover);
        pizzatronHoverShowHint.text = "Pizzatron 3000";
        const pizzatronHoverMoveTo = new MoveTo(pizzatronHover);
        pizzatronHoverMoveTo.x = 395;
        pizzatronHoverMoveTo.y = 412;

        // cooldown_timer (components)
        const cooldown_timerAnimation = new Animation(cooldown_timer);
        cooldown_timerAnimation.key = "cooldown_timer_";
        cooldown_timerAnimation.end = 121;
        cooldown_timerAnimation.repeat = 0;
        cooldown_timerAnimation.autoPlay = false;

        this.pizzaDoor = pizzaDoor;
        this.book = book;
        this.registerHit = registerHit;
        this.bookHit = bookHit;
        this.penguin_pizza = penguin_pizza;
        this.cooldown_timer = cooldown_timer;
        this.counter_arrow = counter_arrow;
        this.coin_sprite = coin_sprite;
        this.coin_text = coin_text;
        this.coin = coin;
        this.parlor_arrow = parlor_arrow;
        this.rectangle_1 = rectangle_1;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.work = new PizzaWork(this, this.penguin_pizza, this.parlor_pizza, this.parlor_arrow, this.coin, this.coin_text)
        this.cooldown_timer.setDepth(1005);
        this.arrowTween = this.tweens.add({
            targets: this.counter_arrow,
            y: 1230,    
            duration: 400, 
            yoyo: true,
            repeat: -1, 
            ease: 'Sine.easeInOut' 
        });
    }

    stop() {
        super.stop()
        this.work.removeListeners()
    }

    update() {
        super.update()
        this.work.update()

        if (this.world.client.penguin) {
            this.cooldown_timer.x = this.world.client.penguin.x; 
            this.cooldown_timer.y = this.world.client.penguin.y - 110;
        }
    }

    showCoinRewardToPlayer(penguin, coins) {
        this.work.showCoinRewardToPlayer(penguin, coins)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */