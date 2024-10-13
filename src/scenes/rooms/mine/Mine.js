import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Animation, HoverAnimation, Button, MoveTo, ShowHint, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class Mine extends RoomScene {

    constructor() {
        super("Mine");

        /** @type {Phaser.GameObjects.Sprite} */
        this.telephone;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cartAnim;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'cave': () => this.triggerRoom(806, 1280, 655),
            'cart': () => this.triggerGame(905),
            'cavemine': () => this.triggerRoom(813, 158, 512),
            'rescue': () => this.triggerGame(927)
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("mine-pack", "assets/media/rooms/mine/mine-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_bg
        this.add.image(760, 489, "mine", "bg/bg");

        // _entrance
        const _entrance = this.add.container(764, 235);

        // entrance
        const entrance = this.add.sprite(0, 0, "mine", "bg/entrance0001");
        _entrance.add(entrance);

        // wire
        const wire = this.add.image(38, -83, "mine", "bg/wire");
        _entrance.add(wire);

        // bg_light1
        const bg_light1 = this.add.image(-24, -56, "mine", "bg/light1");
        _entrance.add(bg_light1);

        // bg_light2
        const bg_light2 = this.add.image(25, -51, "mine", "bg/light2");
        _entrance.add(bg_light2);

        // bg_light
        const bg_light = this.add.image(93, -37, "mine", "bg/light2");
        bg_light.angle = 20;
        _entrance.add(bg_light);

        // lightanim
        const lightanim = this.add.sprite(55, -50, "mine", "bg/lightanim0001");
        _entrance.add(lightanim);

        // bg_wood
        const bg_wood = this.add.image(20, -57, "mine", "bg/wood");
        _entrance.add(bg_wood);

        // rescuesign
        this.add.image(542, 84, "mine", "bg/rescuesign0001");

        // pufflerescue
        const pufflerescue = this.add.image(557, 187, "mine", "bg/pufflerescue0001");

        // pufflerescuebtn
        const pufflerescuebtn = this.add.rectangle(561, 201.54595510102953, 188, 120);
        pufflerescuebtn.setOrigin(0.5, 0.4212162454519332);
        pufflerescuebtn.fillColor = 65535;
        pufflerescuebtn.fillAlpha = 0.5;

        // chair
        const chair = this.add.image(571, 296, "mine", "chair");

        // equipment
        this.add.image(398, 213, "mine", "bg/equipment");

        // rocks
        const rocks = this.add.image(795.5263061523438, 339.7232979752952, "mine", "rocks");
        rocks.setOrigin(0.44226971609026544, 0.6386193252897521);

        // _table
        const _table = this.add.container(582.9551391601562, 374.9795710724456);

        // table
        const table = this.add.image(-4.955153361774364, -6.979556740471878, "mine", "table/table");
        _table.add(table);

        // puffleshadow
        const puffleshadow = this.add.ellipse(55, -20, 44, 12);
        puffleshadow.isFilled = true;
        puffleshadow.fillColor = 5976078;
        puffleshadow.fillAlpha = 0.56;
        _table.add(puffleshadow);

        // puffle
        const puffle = this.add.sprite(55.044846638225636, -33.97955674047188, "mine", "table/puffle0001");
        _table.add(puffle);

        // telephone
        const telephone = this.add.sprite(-52.955153361774364, -32.97955674047188, "mine", "table/telephone0001");
        _table.add(telephone);

        // wood
        const wood = this.add.image(1116, 365.54351975730776, "mine", "wood");
        wood.setOrigin(0.5, 0.92588231796126);

        // shovel
        const shovel = this.add.image(909.9843953442745, 458.7876645150541, "mine", "shovel");
        shovel.setOrigin(0.46083630317239616, 0.8214435731927237);

        // cartAnim
        const cartAnim = this.add.sprite(1209, 367, "mine", "cartanim0001");
        cartAnim.setOrigin(0.1180745482373641, 0.6701580748087208);
        cartAnim.visible = false;

        // cart2
        const cart2 = this.add.image(1138, 425.28098321240867, "mine", "cart2");
        cart2.setOrigin(0.5, 0.601283568882331);

        // cart1
        const cart1 = this.add.image(1009, 469.6990919490997, "mine", "cart1");
        cart1.setOrigin(0.5, 0.6316615858764366);

        // _cavewallback
        const _cavewallback = this.add.container(406.280620426912, 426.2159594428454);

        // cavewallback_wall
        const cavewallback_wall = this.add.image(274.7193644312734, -185.21596428897845, "mine", "cavewallback/wall");
        _cavewallback.add(cavewallback_wall);

        // cavewallback_lantern
        const cavewallback_lantern = this.add.image(-95, -261, "mine", "cavewallback/lantern");
        _cavewallback.add(cavewallback_lantern);

        // candle
        const candle = this.add.sprite(-94, -230, "mine", "cavewallback/candle0001");
        _cavewallback.add(candle);

        // cavewallfront
        const cavewallfront = this.add.image(157, 582, "mine", "cavewallfront");
        cavewallfront.setOrigin(0.2569234806628597, 0.8591608689361728);

        // minesign
        const minesign = this.add.image(1289.353962774777, 518.7982605294275, "mine", "minesign0001");
        minesign.setOrigin(0.6396505921545457, 0.8622487579799021);

        // foreground
        const foreground = this.add.image(-3.5, 969, "mine", "foreground");
        foreground.setOrigin(0, 1);

        // telephoneHover
        const telephoneHover = this.add.rectangle(530, 344, 60, 50);
        telephoneHover.fillColor = 65535;
        telephoneHover.fillAlpha = 0.5;

        // puffleHover
        const puffleHover = this.add.rectangle(637, 342, 50, 50);
        puffleHover.fillColor = 65535;
        puffleHover.fillAlpha = 0.5;

        // cartbtn
        const cartbtn = this.add.polygon(1238.1728644060977, 303.7248667640935, "84.94083813095381 75.3229853841828 83.76904361679817 -93.4154246542449 309.92538484885745 -92.24363014008915 314.75980346806455 85.4566034144583 159.115936452067 126.79950559058267");
        cartbtn.setOrigin(0.5462245784535273, 0.0350787621909927);
        cartbtn.fillColor = 65535;
        cartbtn.fillAlpha = 0.5;

        // lists
        const sort = [foreground, minesign, cart1, shovel, cart2, wood, cavewallfront, _cavewallback, rocks, chair, _table];

        // entrance (components)
        const entranceAnimation = new Animation(entrance);
        entranceAnimation.key = "bg/entrance";
        entranceAnimation.end = 81;

        // lightanim (components)
        const lightanimAnimation = new Animation(lightanim);
        lightanimAnimation.key = "bg/lightanim";
        lightanimAnimation.end = 160;

        // pufflerescue (components)
        const pufflerescueButton = new Button(pufflerescue);
        pufflerescueButton.spriteName = "bg/pufflerescue";
        pufflerescueButton.lazyName = true;
        pufflerescueButton.alias = pufflerescuebtn;

        // pufflerescuebtn (components)
        const pufflerescuebtnShowHint = new ShowHint(pufflerescuebtn);
        pufflerescuebtnShowHint.text = "rescue_hint";
        const pufflerescuebtnMoveTo = new MoveTo(pufflerescuebtn);
        pufflerescuebtnMoveTo.x = 600;
        pufflerescuebtnMoveTo.y = 400;

        // puffle (components)
        const puffleHoverAnimation = new HoverAnimation(puffle);
        puffleHoverAnimation.key = "table/puffle";
        puffleHoverAnimation.end = 60;
        puffleHoverAnimation.hoverZone = puffleHover;

        // telephone (components)
        const telephoneHoverAnimation = new HoverAnimation(telephone);
        telephoneHoverAnimation.key = "table/telephone";
        telephoneHoverAnimation.end = 28;
        telephoneHoverAnimation.hoverZone = telephoneHover;

        // cartAnim (components)
        const cartAnimAnimation = new Animation(cartAnim);
        cartAnimAnimation.key = "cartanim";
        cartAnimAnimation.end = 7;
        cartAnimAnimation.repeat = 0;
        cartAnimAnimation.autoPlay = false;
        cartAnimAnimation.showOnStart = true;

        // candle (components)
        const candleAnimation = new Animation(candle);
        candleAnimation.key = "cavewallback/candle";
        candleAnimation.end = 14;

        // cartbtn (components)
        const cartbtnShowHint = new ShowHint(cartbtn);
        cartbtnShowHint.text = "cart_hint";
        const cartbtnMoveTo = new MoveTo(cartbtn);
        cartbtnMoveTo.x = 1260;
        cartbtnMoveTo.y = 400;
        const cartbtnSimpleButton = new SimpleButton(cartbtn);
        cartbtnSimpleButton.hoverCallback = () => this.onCartHover();
        cartbtnSimpleButton.hoverOutCallback = () => this.onCartOut();

        this.telephone = telephone;
        this.cartAnim = cartAnim;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.telephone.on('animationstart', () => this.soundManager.playSfx('mine-telephone', {}, true))
    }

    onCartHover() {
        this.cartAnim.__Animation.play()
    }

    onCartOut() {
        this.cartAnim.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
