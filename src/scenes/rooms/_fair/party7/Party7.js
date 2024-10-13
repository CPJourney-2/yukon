import RoomScene from '@rooms/RoomScene';

/* START OF COMPILED CODE */

export default class Party7 extends RoomScene {

	constructor() {
		super("Party7");

		/** @type {Phaser.GameObjects.Rectangle} */
		this.windmillHitbox;
		/** @type {Phaser.GameObjects.Container} */
		this.windmill_target_container;
		/** @type {Phaser.GameObjects.Sprite} */
		this.targetWaterTower;
		/** @type {Phaser.GameObjects.Rectangle} */
		this.targetWaterTowerHitbox;
		/** @type {Phaser.GameObjects.Sprite} */
		this.cactusB;
		/** @type {Phaser.GameObjects.Rectangle} */
		this.cactusBHitbox;
		/** @type {Phaser.GameObjects.Sprite} */
		this.cartTarget;
		/** @type {Phaser.GameObjects.Rectangle} */
		this.cartHitbox;
		/** @type {Phaser.GameObjects.Container} */
		this.cart_container;
		/** @type {Phaser.GameObjects.Sprite} */
		this.cactusA;
		/** @type {Phaser.GameObjects.Rectangle} */
		this.cactusAHitbox;
		/** @type {Phaser.GameObjects.Sprite} */
		this.targetBottomWindowB;
		/** @type {Phaser.GameObjects.Sprite} */
		this.targetBottomWindowA;
		/** @type {Phaser.GameObjects.Rectangle} */
		this.targetBottomWindowBHitbox;
		/** @type {Phaser.GameObjects.Rectangle} */
		this.targetBottomWindowAHitbox;
		/** @type {Phaser.GameObjects.Image} */
		this.swingDoor_open;
		/** @type {Phaser.GameObjects.Image} */
		this.swingDoor;
		/** @type {Phaser.GameObjects.Sprite} */
		this.herbertTarget;
		/** @type {Phaser.GameObjects.Rectangle} */
		this.herbertHitbox;
		/** @type {Phaser.GameObjects.Sprite} */
		this.scrollCrab;
		/** @type {Phaser.GameObjects.Sprite} */
		this.cardTarget_1;
		/** @type {Phaser.GameObjects.Rectangle} */
		this.windowRightHitbox;
		/** @type {Phaser.GameObjects.Image} */
		this.window_closed_1;
		/** @type {Phaser.GameObjects.Sprite} */
		this.cardTarget;
		/** @type {Phaser.GameObjects.Rectangle} */
		this.windowLeftHitbox;
		/** @type {Phaser.GameObjects.Image} */
		this.window_closed;
		/** @type {Phaser.GameObjects.Sprite} */
		this.targetBarrelB;
		/** @type {Phaser.GameObjects.Rectangle} */
		this.targetBarrelBHitbox;
		/** @type {Phaser.GameObjects.Sprite} */
		this.targetBarrelA;
		/** @type {Phaser.GameObjects.Rectangle} */
		this.targetBarrelAHitbox;
		/** @type {Phaser.GameObjects.Image[]} */
		this.sort;


		/* START-USER-CTR-CODE */
		this.roomTriggers = {
            'party': () => this.triggerRoom(854, 745, 390),
        }

		this.isNotHitedTime = 4500;
		this.music = '1150';
        this.physicsKey = 'fair-party7-physics';
        /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	_preload() {

		this.load.pack("fair-party7-pack", "assets/media/rooms/_fair/party7/fair-party7-pack.json");
	}

	/** @returns {void} */
	_create() {

		// bg
		this.add.image(749, 511, "fair-party7", "bg");

		// barrel2
		this.add.image(1341, 477, "fair-party7", "barrel2");

		// windmill
		const windmill = this.add.container(487, 225);

		// windmill_support
		const windmill_support = this.add.image(0, 124, "fair-party7", "targets/windmill/windmill_support");
		windmill.add(windmill_support);

		// windmill_target_container
		const windmill_target_container = this.add.container(60, 6);
		windmill.add(windmill_target_container);

		// windmill_base
		const windmill_base = this.add.image(3, 2, "fair-party7", "targets/windmill/windmill");
		windmill_target_container.add(windmill_base);

		// windmill_target
		const windmill_target = this.add.image(-76, 111, "fair-party7", "target");
		windmill_target_container.add(windmill_target);

		// windmillHitbox
		const windmillHitbox = this.add.rectangle(-76, 111, 70, 70);
		windmillHitbox.isFilled = true;
		windmillHitbox.fillColor = 1291943;
		windmillHitbox.fillAlpha = 0;
		windmill_target_container.add(windmillHitbox);

		// windmill_button
		const windmill_button = this.add.image(60, 5.5, "fair-party7", "targets/windmill/windmill_button");
		windmill.add(windmill_button);

		// cactus1
		this.add.image(1345, 328, "fair-party7", "cactus1");

		// targetWaterTower
		const targetWaterTower = this.add.sprite(349, -20, "fair-party7", "targets/targetWaterTower/targetWaterTower0001");

		// targetWaterTowerHitbox
		const targetWaterTowerHitbox = this.add.rectangle(366, 234, 50, 50);
		targetWaterTowerHitbox.isFilled = true;
		targetWaterTowerHitbox.fillColor = 4779500;
		targetWaterTowerHitbox.fillAlpha = 0;

		// water_tower
		this.add.image(428, 407, "fair-party7", "water_tower");

		// cave_bottom
		this.add.image(370, 505, "fair-party7", "cave_bottom");

		// rails
		this.add.image(431, 622, "fair-party7", "rails");

		// cactusB
		const cactusB = this.add.sprite(548, 150, "fair-party7", "targets/cactusB/cactusB0001");

		// cactusBHitbox
		const cactusBHitbox = this.add.rectangle(530, 455, 50, 50);
		cactusBHitbox.isFilled = true;
		cactusBHitbox.fillColor = 4779500;
		cactusBHitbox.fillAlpha = 0;

		// cactus_2
		const cactus_2 = this.add.image(605, 460, "fair-party7", "cactus1");
		cactus_2.scaleX = -1;

		// cart_container
		const cart_container = this.add.container(128, 190);

		// cart
		const cart = this.add.image(176, 363, "fair-party7", "targets/cart/cart");
		cart_container.add(cart);

		// cartTarget
		const cartTarget = this.add.sprite(0, 0, "fair-party7", "targets/cart/cartTarget0001");
		cart_container.add(cartTarget);

		// cartHitbox
		const cartHitbox = this.add.rectangle(-8, 259, 50, 50);
		cartHitbox.isFilled = true;
		cartHitbox.fillColor = 4779500;
		cartHitbox.fillAlpha = 0;
		cart_container.add(cartHitbox);

		// cave
		this.add.image(209, 419, "fair-party7", "cave");

		// cactusA
		const cactusA = this.add.sprite(263, 66, "fair-party7", "targets/cactusA/cactusA0001");

		// cactusAHitbox
		const cactusAHitbox = this.add.rectangle(278, 305, 50, 50);
		cactusAHitbox.isFilled = true;
		cactusAHitbox.fillColor = 4779500;
		cactusAHitbox.fillAlpha = 0;

		// cactus
		this.add.image(192, 306, "fair-party7", "cactus");

		// puffle_house
		const puffle_house = this.add.container(800, 201);

		// puffle_bg
		const puffle_bg = this.add.image(195, 338, "fair-party7", "puffle_bg");
		puffle_house.add(puffle_bg);

		// targetBottomWindowB
		const targetBottomWindowB = this.add.sprite(322, 1, "fair-party7", "targets/targetBottomWindowB/targetBottomWindowB0001");
		puffle_house.add(targetBottomWindowB);

		// targetBottomWindowA
		const targetBottomWindowA = this.add.sprite(38, 1, "fair-party7", "targets/targetBottomWindowA/targetBottomWindowA0001");
		puffle_house.add(targetBottomWindowA);

		// targetBottomWindowBHitbox
		const targetBottomWindowBHitbox = this.add.rectangle(332, 259, 50, 50);
		targetBottomWindowBHitbox.isFilled = true;
		targetBottomWindowBHitbox.fillColor = 3792871;
		targetBottomWindowBHitbox.fillAlpha = 0;
		puffle_house.add(targetBottomWindowBHitbox);

		// targetBottomWindowAHitbox
		const targetBottomWindowAHitbox = this.add.rectangle(26, 259, 50, 50);
		targetBottomWindowAHitbox.isFilled = true;
		targetBottomWindowAHitbox.fillColor = 3792871;
		targetBottomWindowAHitbox.fillAlpha = 0;
		puffle_house.add(targetBottomWindowAHitbox);

		// windows_bg
		const windows_bg = this.add.image(187, 249, "fair-party7", "windows_bg");
		puffle_house.add(windows_bg);

		// windows
		const windows = this.add.image(189, 250, "fair-party7", "windows");
		puffle_house.add(windows);

		// swing_door
		const swing_door = this.add.container(194, 287);
		puffle_house.add(swing_door);

		// swingDoor_open
		const swingDoor_open = this.add.image(0, 0, "fair-party7", "swingDoor_open");
		swingDoor_open.visible = false;
		swing_door.add(swingDoor_open);

		// swingDoor
		const swingDoor = this.add.image(2, 5, "fair-party7", "swingDoor");
		swing_door.add(swingDoor);

		// herbertTarget
		const herbertTarget = this.add.sprite(-12, -280, "fair-party7", "targets/herbertTarget/herbertTarget0001");
		swing_door.add(herbertTarget);

		// herbertHitbox
		const herbertHitbox = this.add.rectangle(-11, 20, 50, 50);
		herbertHitbox.isFilled = true;
		herbertHitbox.fillColor = 3792871;
		herbertHitbox.fillAlpha = 0;
		swing_door.add(herbertHitbox);

		// scrollCrab
		const scrollCrab = this.add.sprite(196, 37, "fair-party7", "targets/scrollCrab/scrollCrab0001");
		scrollCrab.play({"key":"scrollCrab","repeat":-1,"repeatDelay":4500});
		puffle_house.add(scrollCrab);

		// wood
		const wood = this.add.image(180, 305, "fair-party7", "wood");
		puffle_house.add(wood);

		// puffle_bg1
		const puffle_bg1 = this.add.image(193, 2, "fair-party7", "puffle_bg1");
		puffle_house.add(puffle_bg1);

		// window_right
		const window_right = this.add.container(386, 28);
		window_right.scaleX = -1;
		puffle_house.add(window_right);

		// window_open_1
		const window_open_1 = this.add.container(0, 0);
		window_right.add(window_open_1);

		// window_open_bg_1
		const window_open_bg_1 = this.add.image(6, 0, "fair-party7", "window_open_bg");
		window_open_1.add(window_open_bg_1);

		// cardTarget_1
		const cardTarget_1 = this.add.sprite(-22, -293, "fair-party7", "targets/cardTarget/cardTarget0001");
		window_open_1.add(cardTarget_1);

		// window_open_wood_1
		const window_open_wood_1 = this.add.image(11, 59, "fair-party7", "window_open_wood");
		window_open_1.add(window_open_wood_1);

		// windows_open_1
		const windows_open_1 = this.add.image(0, 8, "fair-party7", "window_open");
		window_open_1.add(windows_open_1);

		// windowRightHitbox
		const windowRightHitbox = this.add.rectangle(-8, -30, 50, 50);
		windowRightHitbox.isFilled = true;
		windowRightHitbox.fillColor = 3792871;
		windowRightHitbox.fillAlpha = 0;
		window_open_1.add(windowRightHitbox);

		// window_closed_1
		const window_closed_1 = this.add.image(9, 17, "fair-party7", "window_closed");
		window_right.add(window_closed_1);

		// window_left
		const window_left = this.add.container(0, 30);
		puffle_house.add(window_left);

		// window_open
		const window_open = this.add.container(0, 0);
		window_left.add(window_open);

		// window_open_bg
		const window_open_bg = this.add.image(6, 0, "fair-party7", "window_open_bg");
		window_open.add(window_open_bg);

		// cardTarget
		const cardTarget = this.add.sprite(-22, -293, "fair-party7", "targets/cardTarget/cardTarget0001");
		window_open.add(cardTarget);

		// window_open_wood
		const window_open_wood = this.add.image(11, 59, "fair-party7", "window_open_wood");
		window_open.add(window_open_wood);

		// windows_open
		const windows_open = this.add.image(0, 8, "fair-party7", "window_open");
		window_open.add(windows_open);

		// windowLeftHitbox
		const windowLeftHitbox = this.add.rectangle(-6, -41, 50, 50);
		windowLeftHitbox.isFilled = true;
		windowLeftHitbox.fillColor = 3792871;
		windowLeftHitbox.fillAlpha = 0;
		window_open.add(windowLeftHitbox);

		// window_closed
		const window_closed = this.add.image(9, 17, "fair-party7", "window_closed");
		window_left.add(window_closed);

		// puffle_roof
		const puffle_roof = this.add.image(195, 79, "fair-party7", "puffle_roof");
		puffle_house.add(puffle_roof);

		// targetBarrelB
		const targetBarrelB = this.add.sprite(1391, 186, "fair-party7", "targets/targetBarrelB/targetBarrelB0001");

		// targetBarrelBHitbox
		const targetBarrelBHitbox = this.add.rectangle(1374, 440, 50, 50);
		targetBarrelBHitbox.isFilled = true;
		targetBarrelBHitbox.fillColor = 4779500;
		targetBarrelBHitbox.fillAlpha = 0;

		// barrel1
		this.add.image(1304, 627, "fair-party7", "barrel1");

		// targetBarrelA
		const targetBarrelA = this.add.sprite(210, 201, "fair-party7", "targets/targetBarrelA/targetBarrelA0001");

		// targetBarrelAHitbox
		const targetBarrelAHitbox = this.add.rectangle(213, 458, 50, 50);
		targetBarrelAHitbox.isFilled = true;
		targetBarrelAHitbox.fillColor = 4779500;
		targetBarrelAHitbox.fillAlpha = 0;

		// barrel
		this.add.image(191, 629, "fair-party7", "barrel");

		// rock
		this.add.image(136, 389, "fair-party7", "rock");

		// fg
		this.add.image(759, 414, "fair-party7", "fg");

		// snowballs
		const snowballs = this.add.image(758, 801, "fair-party7", "snowballs");

		// lists
		const sort = [snowballs];

		this.windmillHitbox = windmillHitbox;
		this.windmill_target_container = windmill_target_container;
		this.targetWaterTower = targetWaterTower;
		this.targetWaterTowerHitbox = targetWaterTowerHitbox;
		this.cactusB = cactusB;
		this.cactusBHitbox = cactusBHitbox;
		this.cartTarget = cartTarget;
		this.cartHitbox = cartHitbox;
		this.cart_container = cart_container;
		this.cactusA = cactusA;
		this.cactusAHitbox = cactusAHitbox;
		this.targetBottomWindowB = targetBottomWindowB;
		this.targetBottomWindowA = targetBottomWindowA;
		this.targetBottomWindowBHitbox = targetBottomWindowBHitbox;
		this.targetBottomWindowAHitbox = targetBottomWindowAHitbox;
		this.swingDoor_open = swingDoor_open;
		this.swingDoor = swingDoor;
		this.herbertTarget = herbertTarget;
		this.herbertHitbox = herbertHitbox;
		this.scrollCrab = scrollCrab;
		this.cardTarget_1 = cardTarget_1;
		this.windowRightHitbox = windowRightHitbox;
		this.window_closed_1 = window_closed_1;
		this.cardTarget = cardTarget;
		this.windowLeftHitbox = windowLeftHitbox;
		this.window_closed = window_closed;
		this.targetBarrelB = targetBarrelB;
		this.targetBarrelBHitbox = targetBarrelBHitbox;
		this.targetBarrelA = targetBarrelA;
		this.targetBarrelAHitbox = targetBarrelAHitbox;
		this.sort = sort;

		this.events.emit("scene-awake");
	}


	/* START-USER-CODE */
	create() {
		this.totalHit = 0
		this.windowLeftHitboxActivated = false;
		this.windowRightHitboxActivated = false;
		this.herbertHitboxActivated = false;
		this.targetBottomWindowAActivated = false;
		this.targetBottomWindowBActivated = false;
		this.targetWaterTowerActivated = false;
		this.cactusAActivated = false;
		this.cactusBActivated = false;
		this.targetBarrelAActivated = false;
		this.targetBarrelBActivated = false;

		this.cartHited = false;
		this.windmillHited = false;
		this.windowLeftHited = false;
		this.windowRightHited = false;
		this.herbertHited = false;
		this.targetBottomWindowAAHited = false;
		this.targetBottomWindowBAHited = false;
		this.targetWaterTowerHited = false;
		this.cactusAHited = false;
		this.cactusBHited = false;
		this.targetBarrelAHited = false;
		this.targetBarrelBHited = false;

		super.create();

		const animations = [
			this.cartAnim.bind(this),
			this.windowLeft.bind(this),
			this.windowRight.bind(this),
			this.herbertAnim.bind(this),
			this.targetBottomWindowAAnim.bind(this),
			this.targetBottomWindowBAnim.bind(this),
			this.targetWaterTowerAnim.bind(this),
			this.cactusAAnim.bind(this),
			this.cactusBAnim.bind(this),
			this.targetBarrelAAnim.bind(this),
			this.targetBarrelBAnim.bind(this)
		];
		let blockedAnimations = [];
		this.isRoomActive = true;

		this.spawnAnimation = setInterval(() => {
			const availableAnimations = animations.filter(anim => !blockedAnimations.includes(anim));
			if (availableAnimations.length > 0) {
				const randomIndex = Math.floor(Math.random() * availableAnimations.length);
				const selectedAnimation = availableAnimations[randomIndex];

				selectedAnimation();
				blockedAnimations.push(selectedAnimation);
				setTimeout(() => blockedAnimations = blockedAnimations.filter(anim => anim !== selectedAnimation), this.isNotHitedTime);
			}
		}, 1500);
	}	

	update() {
		this.windmillHited ? this.windmill_target_container.rotation += 0.05 : this.windmill_target_container.rotation += 0.01
	}

	onSnowballComplete(x, y, ball, id) {
		ball.visible = ball.shadow.visible = false;
		if(this.windmillHitbox.getBounds().contains(x, y)) {
			this.windmillHited = true;
			this.soundManager.playSfx('windmill');
			this.whenHit(id);
			setTimeout(() => {
            	this.windmillHited = false;
        	}, 2500);
		}
		if(this.cartHitbox.getBounds().contains(x, y)) {
			this.cartHited = true;
			this.whenHit(id);
			this.cartAnim();
		}
		if(this.windowLeftHitboxActivated) {
			if(this.windowLeftHitbox.getBounds().contains(x, y)) {
				this.windowLeftHited = true;
				this.whenHit(id);
				this.windowLeft();
			}
		}
		if(this.windowRightHitboxActivated) {
			if(this.windowRightHitbox.getBounds().contains(x, y)) {
				this.windowRightHited = true;
				this.whenHit(id);
				this.windowRight();
			}
		}
		if(this.herbertHitboxActivated) {
			if(this.herbertHitbox.getBounds().contains(x, y)) {
				this.herbertHited = true;
				this.whenHit(id);
				this.herbertAnim();
			}
		}
		if(this.targetBottomWindowAActivated) {
			if(this.targetBottomWindowAHitbox.getBounds().contains(x, y)) {
				this.targetBottomWindowAHited = true;
				this.whenHit(id);
				this.targetBottomWindowAAnim();
			}
		}
		if(this.targetBottomWindowBActivated) {
			if(this.targetBottomWindowBHitbox.getBounds().contains(x, y)) {
				this.targetBottomWindowBHited = true;
				this.whenHit(id);
				this.targetBottomWindowBAnim();
			}
		}
		if(this.targetWaterTowerActivated) {
			if(this.targetWaterTowerHitbox.getBounds().contains(x, y)) {
				this.targetWaterTowerHited = true;
				this.whenHit(id);
				this.targetWaterTowerAnim();
			}
		}
		if(this.cactusAActivated) {
			if(this.cactusAHitbox.getBounds().contains(x, y)) {
				this.cactusAHited = true;
				this.whenHit(id);
				this.cactusAAnim();
			}
		}
		if(this.cactusBActivated) {
			if(this.cactusBHitbox.getBounds().contains(x, y)) {
				this.cactusBHited = true;
				this.whenHit(id);
				this.cactusBAnim();
			}
		}
		if(this.targetBarrelAActivated) {
			if(this.targetBarrelAHitbox.getBounds().contains(x, y)) {
				this.targetBarrelAHited = true;
				this.whenHit(id);
				this.targetBarrelAAnim();
			}
		}
		if(this.targetBarrelBActivated) {
			if(this.targetBarrelBHitbox.getBounds().contains(x, y)) {
				this.targetBarrelBHited = true;
				this.whenHit(id);
				this.targetBarrelBAnim();
			}
		}
	}

	cartAnim() {
		if (this.isRoomActive && !this.cartHited) {
			setTimeout(() => {
				if (this.isRoomActive) {
					this.cartTarget.play('cartTarget');
					this.soundManager.playSfx('crab');
				}
			}, 400);
			this.tweens.add({
				targets: this.cart_container,
				x: 564,
				y: 238,
				duration: 2000,
				ease: 'Power1',
			});
			this.soundManager.playSfx('cart');
			setTimeout(() => {
				if (this.isRoomActive) {
					this.cartHited = false;
					this.cartTarget.play('cartTarget_f');
					this.soundManager.playSfx('crabFinal');
					this.soundManager.playSfx('cartFinal');
					this.tweens.add({
						targets: this.cart_container,
						x: 128,
						y: 190,
						duration: 2000,
						ease: 'Power1',
					});
				}
			}, this.isNotHitedTime);
		} else {
			this.cartHited = false;
			this.cartTarget.play('cartTarget_f');
			this.soundManager.playSfx('crabFinal');
			this.soundManager.playSfx('cartFinal');
			this.tweens.add({
				targets: this.cart_container,
				x: 128,
				y: 190,
				duration: 2000,
				ease: 'Power1',
			});
		}
	}	

	windowLeft() {
		this.windowLeftHitboxActivated = true;
		if (this.isRoomActive && !this.windowLeftHited) {
			this.window_closed.visible = false;
			this.cardTarget.play('cardTarget');
			this.soundManager.playSfx('crab');
			this.soundManager.playSfx('windowOpen');
			this.windowLeftTimeout = setTimeout(() => {
				if (this.isRoomActive && !this.windowLeftHited) {
					this.windowLeftHitboxActivated = false;
					this.windowLeftHited = false;
					this.cardTarget.play('cardTarget_f');
					this.soundManager.playSfx('crabFinal');
					this.soundManager.playSfx('windowClose');
					this.cardTarget.once('animationcomplete', () => this.window_closed.visible = true);
				}
			}, this.isNotHitedTime);
		} else {
			if (this.windowLeftTimeout) {
				clearTimeout(this.windowLeftTimeout);
				this.windowLeftTimeout = null;
			}
			this.windowLeftHitboxActivated = false;
			this.windowLeftHited = false;
			this.cardTarget.play('cardTarget_f');
			this.soundManager.playSfx('crabFinal');
			this.soundManager.playSfx('windowClose');
			this.cardTarget.once('animationcomplete', () => this.window_closed.visible = true);
		}
	}	

	windowRight() {
		this.windowRightHitboxActivated = true;
		if (this.isRoomActive && !this.windowRightHited) {
			this.window_closed_1.visible = false;
			this.cardTarget_1.play('cardTarget');
			this.soundManager.playSfx('crab');
			this.soundManager.playSfx('windowOpen');
			this.windowRightTimeout = setTimeout(() => {
				if (this.isRoomActive && !this.windowRightHited) {
					this.windowRightHitboxActivated = false;
					this.windowRightHited = false;
					this.cardTarget_1.play('cardTarget_f');
					this.soundManager.playSfx('crabFinal');
					this.soundManager.playSfx('windowClose');
					this.cardTarget_1.once('animationcomplete', () => this.window_closed_1.visible = true);
				}
			}, this.isNotHitedTime);
		} else {
			if (this.windowRightTimeout) {
				clearTimeout(this.windowRightTimeout);
				this.windowRightTimeout = null;
			}
			this.windowRightHitboxActivated = false;
			this.windowRightHited = false;
			this.cardTarget_1.play('cardTarget_f');
			this.soundManager.playSfx('crabFinal');
			this.soundManager.playSfx('windowClose');
			this.cardTarget_1.once('animationcomplete', () => this.window_closed_1.visible = true);
		}
	}	

	herbertAnim() {
		this.herbertHitboxActivated = true;
		if (this.isRoomActive && !this.herbertHited) {
			this.swingDoor.visible = false;
			this.swingDoor_open.visible = true;
			this.herbertTarget.play('herbertTarget');
			this.soundManager.playSfx('herbertDoorOpen');
			this.soundManager.playSfx('herberttaunt');
			this.herbertTimeout = setTimeout(() => {
				if (this.isRoomActive && !this.herbertHited) {
					this.herbertHitboxActivated = false;
					this.herbertHited = false;
					this.soundManager.playSfx('herbertDoorClose');
					this.herbertTarget.play('herbertTarget_f');
					this.herbertTarget.once('animationcomplete', () => {
						this.swingDoor.visible = true;
						this.swingDoor_open.visible = false;
					});
				}
			}, this.isNotHitedTime);
		} else {
			if (this.herbertTimeout) {
				clearTimeout(this.herbertTimeout);
				this.herbertTimeout = null;
			}
			this.herbertHitboxActivated = false;
			this.herbertHited = false;
			this.herbertTarget.play('herbertTarget_f');
			this.soundManager.playSfx('herbertDoorClose');
			this.soundManager.playSfx('herberthit');
			this.herbertTarget.once('animationcomplete', () => {
				this.swingDoor.visible = true;
				this.swingDoor_open.visible = false;
			});
		}
	}	

	targetBottomWindowAAnim() {
		this.targetBottomWindowAActivated = true;
		if (!this.targetBottomWindowAHited) {
			this.targetBottomWindowA.play('targetBottomWindowA');
			this.soundManager.playSfx('crab');
			this.targetBottomWindowATimeout = setTimeout(() => {
            	if (this.isRoomActive && !this.targetBottomWindowAHited) {
					this.targetBottomWindowAActivated = false;
					this.targetBottomWindowAHited = false;
					this.soundManager.playSfx('crabFinal');
                	this.targetBottomWindowA.play('targetBottomWindowA_f');
            	}
			}, this.isNotHitedTime);
		} else {
			if (this.targetBottomWindowATimeout) {
				clearTimeout(this.targetBottomWindowATimeout);
				this.targetBottomWindowATimeout = null;
			}
			this.targetBottomWindowAActivated = false;
			this.targetBottomWindowAHited = false;
			this.soundManager.playSfx('crabFinal');
			this.targetBottomWindowA.play('targetBottomWindowA_f');
		}
	}

	targetBottomWindowBAnim() {
		this.targetBottomWindowBActivated = true;
		if (!this.targetBottomWindowBHited) {
			this.targetBottomWindowB.play('targetBottomWindowB');
			this.soundManager.playSfx('crab');
			this.targetBottomWindowBTimeout = setTimeout(() => {
				if (this.isRoomActive && !this.targetBottomWindowBHited) {
					this.targetBottomWindowBActivated = false;
					this.targetBottomWindowBHited = false;
					this.soundManager.playSfx('crabFinal');
					this.targetBottomWindowB.play('targetBottomWindowB_f');
				}
			}, this.isNotHitedTime);
		} else {
			if (this.targetBottomWindowBTimeout) {
				clearTimeout(this.targetBottomWindowBTimeout);
				this.targetBottomWindowBTimeout = null;
			}
			this.targetBottomWindowBActivated = false;
			this.targetBottomWindowBHited = false;
			this.soundManager.playSfx('crabFinal');
			this.targetBottomWindowB.play('targetBottomWindowB_f');
		}
	}

	targetWaterTowerAnim() {
		this.targetWaterTowerActivated = true;
		if (!this.targetWaterTowerHited) {
			this.targetWaterTower.play('targetWaterTower');
			this.soundManager.playSfx('crab');
			this.targetWaterTowerTimeout = setTimeout(() => {
				if (this.isRoomActive && !this.targetWaterTowerHited) {
					this.targetWaterTowerActivated = false;
					this.targetWaterTowerHited = false;
					this.soundManager.playSfx('crabFinal');
					this.targetWaterTower.play('targetWaterTower_f');
				}
			}, this.isNotHitedTime);
		} else {
			if (this.targetWaterTowerTimeout) {
				clearTimeout(this.targetWaterTowerTimeout);
				this.targetWaterTowerTimeout = null;
			}
			this.targetWaterTowerActivated = false;
			this.targetWaterTowerHited = false;
			this.soundManager.playSfx('crabFinal');
			this.targetWaterTower.play('targetWaterTower_f');
		}
	}

	cactusAAnim() {
		this.cactusAActivated = true;
		if (!this.cactusAHited) {
			this.cactusA.play('cactusA');
			this.soundManager.playSfx('crab');
			this.cactusATimeout = setTimeout(() => {
				if (this.isRoomActive && !this.cactusAHited) {
					this.cactusAActivated = false;
					this.cactusAHited = false;
					this.soundManager.playSfx('crabFinal');
					this.cactusA.play('cactusA_f');
				}
			}, this.isNotHitedTime);
		} else {
			if (this.cactusATimeout) {
				clearTimeout(this.cactusATimeout);
				this.cactusATimeout = null;
			}
			this.cactusAActivated = false;
			this.cactusAHited = false;
			this.soundManager.playSfx('crabFinal');
			this.cactusA.play('cactusA_f');
		}
	}

	cactusBAnim() {
		this.cactusBActivated = true;
		if (!this.cactusBHited) {
			this.cactusB.play('cactusB');
			this.soundManager.playSfx('crab');
			this.cactusBTimeout = setTimeout(() => {
				if (this.isRoomActive && !this.cactusBHited) {
					this.cactusBActivated = false;
					this.cactusBHited = false;
					this.soundManager.playSfx('crabFinal');
					this.cactusB.play('cactusB_f');
				}
			}, this.isNotHitedTime);
		} else {
			if (this.cactusBTimeout) {
				clearTimeout(this.cactusBTimeout);
				this.cactusBTimeout = null;
			}
			this.cactusBActivated = false;
			this.cactusBHited = false;
			this.soundManager.playSfx('crabFinal');
			this.cactusB.play('cactusB_f');
		}
	}

	targetBarrelAAnim() {
		this.targetBarrelAActivated = true;
		if (!this.targetBarrelAHited) {
			this.targetBarrelA.play('targetBarrelA');
			this.soundManager.playSfx('crab');
			this.targetBarrelATimeout = setTimeout(() => {
				if (this.isRoomActive && !this.targetBarrelAHited) {
					this.targetBarrelAActivated = false;
					this.targetBarrelAHited = false;
					this.soundManager.playSfx('crabFinal');
					this.targetBarrelA.play('targetBarrelA_f');
				}
			}, this.isNotHitedTime);
		} else {
			if (this.targetBarrelATimeout) {
				clearTimeout(this.targetBarrelATimeout);
				this.targetBarrelATimeout = null;
			}
			this.targetBarrelAActivated = false;
			this.targetBarrelAHited = false;
			this.soundManager.playSfx('crabFinal');
			this.targetBarrelA.play('targetBarrelA_f');
		}
	}

	targetBarrelBAnim() {
		this.targetBarrelBActivated = true;
		if (!this.targetBarrelBHited) {
			this.targetBarrelB.play('targetBarrelB');
			this.soundManager.playSfx('crab');
			this.targetBarrelBTimeout = setTimeout(() => {
				if (this.isRoomActive && !this.targetBarrelBHited) {
					this.targetBarrelBActivated = false;
					this.targetBarrelBHited = false;
					this.soundManager.playSfx('crabFinal');
					this.targetBarrelB.play('targetBarrelB_f');
				}
			}, this.isNotHitedTime);
		} else {
			if (this.targetBarrelBTimeout) {
				clearTimeout(this.targetBarrelBTimeout);
				this.targetBarrelBTimeout = null;
			}
			this.targetBarrelBActivated = false;
			this.targetBarrelBHited = false;
			this.soundManager.playSfx('crabFinal');
			this.targetBarrelB.play('targetBarrelB_f');
		}
	}

	whenHit(id) {
		if (id !== this.client.id) return
		// Earn 2 tickets for each thing hit
		this.world.party.worldTicketsEarned(2)

		// Earn Target Champion stamp for hitting 50 things
		this.totalHit++
		if (this.totalHit == 50) this.stampEarned(185)
	}

	stop() {
		super.stop()
		this.isRoomActive = false;
		this.cactusA.stop();
		this.cactusB.stop();
		this.cartTarget.stop();
		this.targetBarrelA.stop();
		this.targetBarrelB.stop();
		this.targetBottomWindowA.stop();
		this.targetBottomWindowB.stop();
		this.targetWaterTower.stop();
		this.cardTarget.stop();
		this.cardTarget_1.stop();
		this.herbertTarget.stop();
		this.scrollCrab.stop();
		clearTimeout(this.windowLeftTimeout);
		clearTimeout(this.windowRightTimeout);
		clearTimeout(this.herbertTimeout);
		clearTimeout(this.targetBottomWindowATimeout);
		clearTimeout(this.targetBottomWindowBTimeout);
		clearTimeout(this.targetWaterTowerTimeout);
		clearTimeout(this.cactusATimeout);
		clearTimeout(this.cactusBTimeout);
		clearTimeout(this.targetBarrelATimeout);
		clearTimeout(this.targetBarrelBTimeout);
		clearInterval(this.spawnAnimation);
	}

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
