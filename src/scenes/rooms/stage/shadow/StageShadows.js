import BaseContainer from '@scenes/base/BaseContainer'

/* START OF COMPILED CODE */

export default class StageShadows extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image[]} */
        this.shadows;


        // shadowone
        const shadowone = scene.add.image(0, -22, "shadows", "shadowone");
        this.add(shadowone);

        // shadowtwo
        const shadowtwo = scene.add.image(0, -22, "shadows", "shadowtwo");
        shadowtwo.visible = false;
        this.add(shadowtwo);

        // shadowthree
        const shadowthree = scene.add.image(0, -22, "shadows", "shadowthree");
        shadowthree.visible = false;
        this.add(shadowthree);

        // shadowfour
        const shadowfour = scene.add.image(0, -22, "shadows", "shadowfour");
        shadowfour.visible = false;
        this.add(shadowfour);

        // lists
        const shadows = [shadowone, shadowtwo, shadowthree, shadowfour];

        this.shadows = shadows;

        /* START-USER-CTR-CODE */
		this.costumeIDs = [4455, 4456, 4457];
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    update() {
        if(!this.room.penguins.hasOwnProperty(this.penguin.id)) this.destroy()

        this.x = this.penguin?.x
        this.y = this.penguin?.y
		
		this.checkCostume()
    }
	
	checkCostume() {
		let hasCostume = false
		for(let [idx, id] of Object.entries(this.costumeIDs)) {
			idx = parseInt(idx)
			hasCostume = (this.shadows[idx + 1].visible = (this.penguin.items.all.body.id == id)) || hasCostume
		}
		
		this.shadows[0].visible = !hasCostume
	}

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
