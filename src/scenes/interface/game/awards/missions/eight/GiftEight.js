import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton, Interactive } from '@components/components'

export const preload = {
    key: 'gifteight-pack',
    url: 'assets/media/interface/game/awards/missions/eight/gifteight-pack.json',
    loadString: ['loading', 'award_q8_gift']
}

/* START OF COMPILED CODE */

export default class GiftEight extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Sprite} */
        this.lidopening;
        /** @type {Phaser.GameObjects.Sprite} */
        this.gearanim;
        /** @type {Phaser.GameObjects.Image} */
        this.chestlid;
        /** @type {Phaser.GameObjects.Image} */
        this.note;
        /** @type {Phaser.GameObjects.Image} */
        this.letter;


        // block
        const block = scene.add.rectangle(-12, 10, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // lidopening
        const lidopening = scene.add.sprite(-2, -314, "gifteight", "lidopening0001");
        lidopening.visible = false;
        this.add(lidopening);

        // chestback
        const chestback = scene.add.image(-1.5, -146, "gifteight", "chestback");
        this.add(chestback);

        // gearanim
        const gearanim = scene.add.sprite(-1, -108, "gifteight", "gearanim0001");
        gearanim.visible = false;
        this.add(gearanim);

        // chest
        const chest = scene.add.image(0, 0, "gifteight", "chest");
        this.add(chest);

        // chestlid
        const chestlid = scene.add.image(-2, -167, "gifteight", "chestlid");
        this.add(chestlid);

        // closebutton
        const closebutton = scene.add.image(211, 66, "gifteight", "closebutton");
        this.add(closebutton);

        // note
        const note = scene.add.image(-4, 8, "gifteight", "note");
        this.add(note);

        // letter
        const letter = scene.add.image(-26, -53, "gifteight", "letter");
        letter.angle = -6.000000000000001;
        letter.visible = false;
        this.add(letter);

        // block (components)
        new Interactive(block);

        // lidopening (components)
        const lidopeningSimpleButton = new SimpleButton(lidopening);
        lidopeningSimpleButton.callback = () => this.closeLid();

        // chestlid (components)
        const chestlidSimpleButton = new SimpleButton(chestlid);
        chestlidSimpleButton.callback = () => this.openLid();

        // closebutton (components)
        const closebuttonButton = new Button(closebutton);
        closebuttonButton.spriteName = "closebutton";
        closebuttonButton.callback = () => this.interface.destroyWidget(this);;

        // note (components)
        const noteSimpleButton = new SimpleButton(note);
        noteSimpleButton.callback = () => this.showLetter();
        noteSimpleButton.pixelPerfect = true;

        // letter (components)
        const letterSimpleButton = new SimpleButton(letter);
        letterSimpleButton.callback = () => this.closeLetter();
        letterSimpleButton.pixelPerfect = true;

        this.lidopening = lidopening;
        this.gearanim = gearanim;
        this.chestlid = chestlid;
        this.note = note;
        this.letter = letter;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    showLetter(){
        this.note.visible = false
        this.letter.visible = true
    }

    closeLetter(){
        this.note.visible = true
        this.letter.visible = false
    }

    openLid(){
        this.chestlid.visible = false
        this.lidopening.visible = true
        this.lidopening.play('lidopening')
        this.gearanim.visible = true
        this.gearanim.play('gearanim')
    }

    closeLid(){
        this.lidopening.visible = false
        this.gearanim.visible = false
        this.chestlid.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
