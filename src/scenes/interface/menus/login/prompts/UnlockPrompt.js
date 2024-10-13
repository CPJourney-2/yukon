
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import Interactive from "../../../../components/Interactive";
import Button from "../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class UnlockPrompt extends BaseContainer {

	constructor(scene, x, y) {
		super(scene, x ?? 760, y ?? 480);

		// block
		const block = scene.add.rectangle(0, 0, 1520, 960);
		block.isFilled = true;
		block.fillColor = 0;
		block.fillAlpha = 0.5;
		this.add(block);

		// unlock_start_prompt
		const unlock_start_prompt = scene.add.image(-761, -480, "newstart", "unlock_start_prompt");
		unlock_start_prompt.setOrigin(0, 0);
		this.add(unlock_start_prompt);

		// xbutton
		const xbutton = scene.add.image(367, -237, "newstart", "x");
		xbutton.scaleX = 0.65;
		xbutton.scaleY = 0.65;
		this.add(xbutton);

		// block (components)
		new Interactive(block);

		// xbutton (components)
		const xbuttonButton = new Button(xbutton);
		xbuttonButton.spriteName = "x";
		xbuttonButton.callback = () => { this.visible = false };

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
