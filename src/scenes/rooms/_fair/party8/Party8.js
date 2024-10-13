import RoomScene from '@rooms/RoomScene'
import { Button, MoveTo } from '@components/components'

import PixelPenguin from './PixelPenguin'

/* START OF COMPILED CODE */

export default class Party8 extends RoomScene {

	constructor() {
		super("Party8");

		/** @type {Phaser.GameObjects.Image[]} */
		this.sort;


		/* START-USER-CTR-CODE */
		this.roomTriggers = {
			'party': () => this.triggerRoom(854, 1235, 530),
		}

		this.physicsKey = 'fair-party8-physics';
		this.music = '1151';
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	_preload() {

		this.load.pack("fair-party8-pack", "assets/media/rooms/_fair/party8/fair-party8-pack.json");
	}

	/** @returns {void} */
	_create() {

		// bg
		this.add.image(762, 487, "fair-party8", "bg");

		// fg
		const fg = this.add.image(1625, 1001, "fair-party8", "fg");
		fg.setOrigin(1, 1);

		// exit
		const exit = this.add.image(764, 87, "fair-party8", "exit");

		// lists
		const sort = [fg];

		// exit (components)
		const exitButton = new Button(exit);
		exitButton.spriteName = "exit";
		exitButton.activeFrame = true;
		exitButton.pixelPerfect = true;
		const exitMoveTo = new MoveTo(exit);
		exitMoveTo.x = 760;
		exitMoveTo.y = 70;

		this.sort = sort;

		this.events.emit("scene-awake");
	}


	/* START-USER-CODE */
	create() {
		super.create();

		this.occupiedPositions = [];
		this.foodItems = [];

		this.generateFood();
		this.time.addEvent({
			delay: 8000,
			callback: this.generateFood,
			callbackScope: this,
			loop: true
		});
	}

	onPenguinsAdded() {
		if (!this.penguins) return
		for (let penguin of Object.values(this.penguins)) {
			if (!penguin) continue
			this.addPixelPenguin(penguin)
		}
	}

	addPixelPenguin(penguin) {
		// set fancy color oooooooohh
		penguin.nameTag.setColor(`#${this.crumbs.colors[penguin.color - 1].substring(2)}`)

		let pixel = new PixelPenguin(penguin)
		this.add.existing(pixel)
		penguin.pixel = pixel
	}

	addPenguin(id, penguin) {
		super.addPenguin(id, penguin)
		this.addPixelPenguin(penguin)
	}

	removePenguin(id) {
		let penguin = this.penguins[id]
		if (penguin && penguin.pixel) {
			penguin.pixel.destroy()
			penguin.pixel = null
		}
		super.removePenguin(id)
	}

	update() {
		if(this.client.penguin) {
			this.foodItems.forEach(foodImage => {
				const hitboxPadding = 15;
				if (this.client.penguin.x >= foodImage.x - hitboxPadding && this.client.penguin.x <= foodImage.x + foodImage.width + hitboxPadding &&
					this.client.penguin.y >= foodImage.y - hitboxPadding && this.client.penguin.y <= foodImage.y + foodImage.height + hitboxPadding) {
					this.handleFoodCollision(foodImage);
				}
			});
		}

		for (let penguin of Object.values(this.penguins)) {
			if (!penguin) continue
			if (penguin.pixel) {
				if (penguin.pixel.x !== penguin.x) penguin.pixel.x = penguin.x
				if (penguin.pixel.y !== penguin.y) penguin.pixel.y = penguin.y
				penguin.pixel.setDepth(penguin.depth + 1)
				if (penguin.pixel.updateColor(penguin.color)) {
					penguin.nameTag.setColor(`#${this.crumbs.colors[penguin.color - 1].substring(2)}`)
				}

				penguin.bodySprite.visible = false
				penguin.penguinSprite.visible = false
				for (let sprite of penguin.equippedSprites) {
					sprite.visible = false
				}
				if (penguin.transformTintedSprite) penguin.transformTintedSprite.visible = false
				if (penguin.transformSprite) penguin.transformSprite.visible = false
			}
		}
	}

	onSnowballComplete() {
		this.soundManager.playSfx('snowball');
	}

	generateFood() {
		const leftSquarePositions = [
			{ x: 231, y: 154 }, { x: 373, y: 76 }, { x: 442, y: 76 }, { x: 513, y: 76 },
			{ x: 302, y: 227 }, { x: 373, y: 227 }, { x: 443, y: 277 }, { x: 443, y: 155 },
			{ x: 513, y: 155 }, { x: 583, y: 155 }, { x: 653, y: 155 }, { x: 723, y: 155 },
			{ x: 303, y: 297 }, { x: 373, y: 297 }, { x: 233, y: 367 }, { x: 233, y: 436 },
			{ x: 233, y: 507 }, { x: 233, y: 577 }, { x: 345, y: 437 }, { x: 415, y: 437 },
			{ x: 345, y: 507 }, { x: 415, y: 507 }, { x: 345, y: 577 }, { x: 415, y: 577 },
			{ x: 345, y: 647 }, { x: 415, y: 647 }, { x: 373, y: 76 }, { x: 373, y: 76 },
			{ x: 373, y: 76 }, { x: 373, y: 76 }, { x: 243, y: 795 }, { x: 313, y: 795 },
			{ x: 443, y: 717 }, { x: 513, y: 717 }, { x: 443, y: 787 }, { x: 513, y: 787 },
			{ x: 583, y: 707 }, { x: 653, y: 707 }, { x: 723, y: 707 }, { x: 583, y: 297 },
			{ x: 653, y: 297 }, { x: 723, y: 297 }, { x: 583, y: 367 }, { x: 653, y: 367 },
			{ x: 723, y: 367 }, { x: 583, y: 437 }, { x: 653, y: 437 }, { x: 723, y: 437 },
			{ x: 583, y: 507 }, { x: 653, y: 507 }, { x: 723, y: 507 }, { x: 583, y: 577 },
			{ x: 653, y: 577 }, { x: 723, y: 577 }
		];
		const rightSquarePositions = leftSquarePositions.map(position => { return { x: 1520 - position.x, y: position.y } });
		const allSquarePositions = leftSquarePositions.concat(rightSquarePositions).filter(position => { return !this.isPositionOccupied(position) });
		if (allSquarePositions.length === 0) return;

		const randomSquare = Phaser.Math.RND.pick(allSquarePositions);
		const food = ["pixel_apple", "pixel_coffee", "pixel_hotdog"];
		const randomIndex = Math.floor(Math.random() * food.length);
		const foodImage = this.add.image(randomSquare.x, randomSquare.y, 'fair-party8', food[randomIndex]);

		this.occupiedPositions.push(randomSquare);
		this.foodItems.push(foodImage);
	}

	handleFoodCollision(foodImage) {
		foodImage.destroy();
		this.soundManager.playSfx('item');
		this.world.party.worldTicketsEarned(10)
		this.occupiedPositions = this.occupiedPositions.filter(pos => pos.x !== foodImage.x || pos.y !== foodImage.y);
		this.foodItems = this.foodItems.filter(item => item !== foodImage);
	}

	isPositionOccupied(position) {
		return this.occupiedPositions.some(occupied => occupied.x === position.x && occupied.y === position.y);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */