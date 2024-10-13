
// You can write more code here

import { SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class ArchiveNewspaperItem extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.headlineText;
        /** @type {Phaser.GameObjects.Text} */
        this.issueText;
        /** @type {Phaser.GameObjects.Text} */
        this.dateText;
        /** @type {Phaser.GameObjects.Container} */
        this.newsContainer;
        /** @type {number} */
        this.issueOffset = 1;


        // newsContainer
        const newsContainer = scene.add.container(0, 0);
        this.add(newsContainer);

        // newspaper_6
        const newspaper_6 = scene.add.image(0, 0, "archives", "newspaper");
        newsContainer.add(newspaper_6);

        // headlineText
        const headlineText = scene.add.text(-558, -100, "", {});
        headlineText.text = "AMONG US PARTY TO START TOMORROW";
        headlineText.setStyle({ "align": "center", "color": "#333333", "fixedWidth":1110,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold", "stroke": "#333333" });
        newsContainer.add(headlineText);

        // issueText
        const issueText = scene.add.text(555, -153, "", {});
        issueText.setOrigin(1, 0);
        issueText.text = "Issue #48";
        issueText.setStyle({ "align": "right", "color": "#333333", "fontFamily": "Burbank Small", "fontSize": "20px", "stroke": "#333333" });
        newsContainer.add(issueText);

        // dateText
        const dateText = scene.add.text(-560, -153, "", {});
        dateText.text = "September 14, 2006";
        dateText.setStyle({ "color": "#333333", "fontFamily": "Burbank Small", "fontSize": "20px", "stroke": "#333333" });
        newsContainer.add(dateText);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(0, -150, 1200, 100);
        rectangle_1.fillColor = 14614528;
        this.add(rectangle_1);

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.hoverCallback = () => this.onHover();
        rectangle_1SimpleButton.hoverOutCallback = () => this.onHoverOut();
        rectangle_1SimpleButton.callback = () => this.openNewspaper();

        this.headlineText = headlineText;
        this.issueText = issueText;
        this.dateText = dateText;
        this.newsContainer = newsContainer;

        /* START-USER-CTR-CODE */
        this.world = this.scene.world
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    updateText() {
        this.issueNumber = this.world.crumbs.newspapers.length - this.issueOffset
        this.issue = this.world.crumbs.newspapers[this.issueNumber - 1]
		
		if(this.issue) {
			this.dateText.text = this.issue.date
            if(this.issue.notcanon) {
                this.issueText.visible = false
            } else {
                this.issueText.text = `Issue #${this.issueNumber}`
            }
			this.headlineText.text = this.issue.headline
		} else {
			this.newsContainer.visible = false
		}
    }

    onHover() {
        this.scene.tweens.add({
            targets: [this.newsContainer],
            y: {
                from: 0,
                to: -84
            },
            ease: Phaser.Math.Easing.Expo.InOut,
            duration: 166,
        })
    }

    onHoverOut() {
        this.scene.tweens.add({
            targets: [this.newsContainer],
            y: {
                from: -84,
                to: 0
            },
            ease: "Linear",
            duration: 208,
        })
    }

    openNewspaper() {
        if(this.issue) this.scene.interface.loadNewspaper(this.issueNumber - 1)
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
