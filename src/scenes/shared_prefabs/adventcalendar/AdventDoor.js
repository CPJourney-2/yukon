
import { SimpleButton, Animation } from '@components/components'
import BaseSprite from '@scenes/base/BaseSprite'
// You can write more code here

/* START OF COMPILED CODE */

export default class AdventDoor extends BaseSprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "adventcalendar", frame ?? "door14/rattle0001");

		/** @type {number} */
		this.doorNum = 14;
		/** @type {number} */
		this.item = 0;
		/** @type {string} */
		this.timeStamp = "";
		/** @type {boolean} */
		this.isIgloo = false;


		// this (components)
		const thisSimpleButton = new SimpleButton(this);
		thisSimpleButton.callback = () => this.onDoorClick();

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}


	/* START-USER-CODE */
	init() {
		if (this.world.client.hasItem(this.item) || (this.isIgloo && this.world.client.igloos.includes(this.item))) {
			this.setFrame(`door${this.doorNum}/rattleopen0001`)
		} else if (this.checkTime()) {
			this.setFrame(`door${this.doorNum}/open0001`)
		} else {
			this.setFrame(`door${this.doorNum}/rattle0001`)
		}

		this.doorPlaying = false

		this.on('animationcomplete', () => {
			this.doorPlaying = false
		})
	}

	checkTime() {
		//return true
		if ((parseInt(this.timeStamp) * 1000) < Date.now()) return true
		return false
	}

	onDoorClick() {
		if (this.doorPlaying) return

		if (this.world.client.hasItem(this.item) || (this.isIgloo && this.world.client.igloos.includes(this.item))) {
			this.play(`door${this.doorNum}-rattleopen`)
			this.soundManager.playSfx('calendar-rattle')
			this.doorPlaying = true
			return
		}

		if (this.checkTime()) {
			this.soundManager.playSfx('calendar-tada')
			setTimeout(() => {
				this.soundManager.playSfx('calendar-close')
			}, 2700)

			this.play(`door${this.doorNum}-open`)
			this.doorPlaying = true
			if (this.isIgloo) {
				let text = `You have found a ${this.crumbs.igloos[this.item].name}!\nWould you like to pick it up?`;

				this.interface.prompt.showWindow(text, 'dual', () => {
					this.network.send('add_igloo', { igloo: this.item });
					this.interface.prompt.window.visible = false;
				});
				return
			}
			this.interface.prompt.showItem(this.item)
		} else {
			this.soundManager.playSfx('calendar-rattle')
			this.play(`door${this.doorNum}-rattle`)
			this.doorPlaying = true
		}
	}
	// Write your code here.
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
