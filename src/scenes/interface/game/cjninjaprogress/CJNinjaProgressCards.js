import BaseContainer from '@scenes/base/BaseContainer'

import CJCard from '@scenes/games/card/CJCard'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class CJNinjaProgressCards extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.bg;


        // bg
        const bg = scene.add.image(2, 68, "cjninjaprogress-cards", "bg");
        this.add(bg);

        // toolbar
        const toolbar = scene.add.image(0, 359, "cjninjaprogress-cards", "toolbar");
        this.add(toolbar);

        // scrollbg
        const scrollbg = scene.add.image(474, 60, "cjninjaprogress-cards", "scrollbg");
        this.add(scrollbg);

        // btndown
        const btndown = scene.add.image(474, 281, "cjninjaprogress-cards", "btndown");
        this.add(btndown);

        // btnup
        const btnup = scene.add.image(474, -160, "cjninjaprogress-cards", "btnup");
        this.add(btnup);

        // toolbar (components)
        const toolbarSimpleButton = new SimpleButton(toolbar);
        toolbarSimpleButton.callback = () => this.onHide();

        // btndown (components)
        const btndownButton = new Button(btndown);
        btndownButton.callback = () => this.onDown();
        btndownButton.activeFrame = true;

        // btnup (components)
        const btnupButton = new Button(btnup);
        btnupButton.callback = () => this.onUp();
        btnupButton.activeFrame = true;

        this.bg = bg;

        /* START-USER-CTR-CODE */
        this.columns = 5
        this.rows = 3
		this.cardsPerPage = this.columns * this.rows
		
		this.page = 0
        this.cjCards = []
		this.ownedCards = []
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    setup() {
        this.initCards()
		// this.setupDummyCards()
		this.reloadPage()
    }
	
	setupDummyCards(cards) {
        this.ownedCards = [...new Set(cards)]
		this.reloadPage()

	}

    initCards() {
        for(let y = 0; y < this.rows; y++) {
            for(let x = 0; x < this.columns; x++) {
                const cJCard = new CJCard(this.scene, -480 + (x * 200), -115 + (y * 170));
                cJCard.scaleX = 0.55;
                cJCard.scaleY = 0.55;
				cJCard.visible = false;
                this.add(cJCard);
                this.cjCards.push(cJCard)
            }
        }
    }

    onHide() {
        this.parentContainer.onHideView()
    }
	
	onUp() {
		this.page -= 1
		this.reloadPage()
	}
	
	onDown() {
		this.page += 1
		this.reloadPage()
	}
	
	reloadPage() {
		if(this.ownedCards.length <= 0) return
		
		let pageOffset = this.page * this.cardsPerPage
		if(pageOffset < 0) {
			this.page = 0
			return this.reloadPage()
		} else if(pageOffset >= this.ownedCards.length) {
			this.page = Math.floor(this.ownedCards.length / this.cardsPerPage)
			return this.reloadPage()
		}
		
		for(let i = 0; i < this.cardsPerPage; i++) {
			let fullIdx = pageOffset + i
			if(fullIdx >= this.ownedCards.length) {
				this.cjCards[i].visible = false
			} else {
				this.cjCards[i].visible = true
				this.cjCards[i].setupCard(this.ownedCards[fullIdx])
			}
		}
	}

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
