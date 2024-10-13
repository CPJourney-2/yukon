import BaseContainer from '@scenes/base/BaseContainer'

import { Interactive, NineSlice } from '@components/components'

import DualButtons from './buttons/DualButtons'
import SingleButton from './buttons/SingleButton'


/* START OF COMPILED CODE */

export default class StampPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.stampTitle;
        /** @type {Phaser.GameObjects.Image} */
        this.categoryIcon;
        /** @type {Phaser.GameObjects.Container} */
        this.stampContainer;


        // stampContainer
        const stampContainer = scene.add.container(0, -278);
        this.add(stampContainer);

        // stamps_stampbg
        const stamps_stampbg = scene.add.image(342, -354, "main", "stamps/stampbg");
        stampContainer.add(stamps_stampbg);

        // stampTitle
        const stampTitle = scene.add.text(244, -282, "", {});
        stampTitle.text = "Rockhopper";
        stampTitle.setStyle({ "fixedWidth":400,"fixedHeight":100,"fontFamily": "CCComicCrazy", "fontSize": "24px", "fontStyle": "italic", "shadow.offsetX":4,"shadow.offsetY":4,"shadow.blur":5,"shadow.fill":true});
        stampContainer.add(stampTitle);

        // stampEarned
        const stampEarned = scene.add.text(244, -321, "", {});
        stampEarned.text = "Stamp Earned!";
        stampEarned.setStyle({ "fixedWidth":400,"fixedHeight":100,"fontFamily": "CCComicCrazy", "fontSize": "24px", "fontStyle": "italic", "shadow.offsetX":4,"shadow.offsetY":4,"shadow.blur":5,"shadow.fill":true});
        stampContainer.add(stampEarned);

        // categoryIcon
        const categoryIcon = scene.add.image(148, -352, "main", "stamps/cat30001");
        categoryIcon.setOrigin(0.5, 0);
        stampContainer.add(categoryIcon);

        this.stampTitle = stampTitle;
        this.categoryIcon = categoryIcon;
        this.stampContainer = stampContainer;

        /* START-USER-CTR-CODE */
        this.stampPlaying = false
        this.queue = []
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(text, category, rank) {
        this.queue.push({
            text: text,
            category: category,
            rank: rank
        })

        this.beginPlaying()
    }

    beginPlaying() {
        if(this.stampPlaying) return
        if(this.queue.length <= 0) return

        this.stampPlaying = true
        this.soundManager.playSfx("stampEarned")

        let stamp = this.queue.pop()
        this.stampTitle.text = stamp.text
        let rank = stamp.rank <= 0 ? 1 :
                    (stamp.rank > 4 ? 4 : stamp.rank);
        this.categoryIcon.setTexture('main', `stamps/cat${stamp.category}000${rank}`)

        this.visible = true

        this.playStampIn()
    }

    playStampIn() {
            this.tween = this.scene.tweens.add({
            targets: this.stampContainer,
            y: {
                from: -278, 
                to: -112
            },
            duration: 568,
            ease: Phaser.Math.Easing.Expo.InOut,
            onComplete: () => this.onStampComplete()
        })    
    }

    onStampComplete() {
        this.scene.time.addEvent({
            delay: 1500,
            callback: () => this.playStampOut()
        })    
    }

    playStampOut() {
        this.tween = this.scene.tweens.add({
            targets: this.stampContainer,
            y: {
                from: -112, 
                to: -278
            },
            duration: 568,
            ease: Phaser.Math.Easing.Expo.InOut,
            onComplete: () => {
                this.visible = false
                this.stampPlaying = false
                this.beginPlaying()
            }
        })    
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
