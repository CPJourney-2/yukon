import BaseContainer from '@scenes/base/BaseContainer'

import { SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class MusicItem extends BaseContainer {

    constructor(scene, x, y, musicData) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.item;
        /** @type {Phaser.GameObjects.Image} */
        this.music_active;
        /** @type {Phaser.GameObjects.Image} */
        this.play;
        /** @type {Phaser.GameObjects.Image} */
        this.stop;
        /** @type {Phaser.GameObjects.Text} */
        this.title;
        /** @type {string} */
        this.name = "";
        /** @type {number} */
        this.musicId = 0;
        /** @type {boolean} */
        this.bold = false;


        // item
        const item = scene.add.image(0, 0, "new-iglooedit", "music");
        item.scaleX = 0.9;
        item.scaleY = 0.9;
        this.add(item);

        // music_active
        const music_active = scene.add.image(0, 0, "new-iglooedit", "music-active");
        music_active.scaleX = 0.9;
        music_active.scaleY = 0.9;
        music_active.visible = false;
        this.add(music_active);

        // music_button
        const music_button = scene.add.image(-128, 0, "new-iglooedit", "music_button");
        music_button.scaleX = 0.9;
        music_button.scaleY = 0.9;
        this.add(music_button);

        // play
        const play = scene.add.image(-126, 0, "new-iglooedit", "play");
        play.scaleX = 0.9;
        play.scaleY = 0.9;
        this.add(play);

        // stop
        const stop = scene.add.image(-127.56019716495553, 0, "new-iglooedit", "stop");
        stop.scaleX = 0.9;
        stop.scaleY = 0.9;
        stop.setOrigin(0.5274876771902797, 0.5);
        stop.visible = false;
        this.add(stop);

        // title
        const title = scene.add.text(11, 0, "", {});
        title.scaleX = 0.9;
        title.scaleY = 0.9;
        title.setOrigin(0.5, 0.5);
        title.setStyle({ "color": "#000000ff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(title);

        // item (components)
        const itemSimpleButton = new SimpleButton(item);
        itemSimpleButton.callback = () => {this.onClick()};

        // music_active (components)
        const music_activeSimpleButton = new SimpleButton(music_active);
        music_activeSimpleButton.callback = () => {this.onClick()};

        this.item = item;
        this.music_active = music_active;
        this.play = play;
        this.stop = stop;
        this.title = title;

        /* START-USER-CTR-CODE */
        this.clicked = false;
        this.name = musicData.name;
        this.musicId = musicData.id;
        this.title.text = musicData.name;
        scene.events.once('scene-awake', this.onAwake, this)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onAwake() {
        this.title.text = this.name

        if (this.bold) {
            this.title.style.fontStyle = "bold"
            this.title.setStyle(this.title.style)
        }
    }

    setActive(isActive) {
        this.clicked = isActive;
        if (isActive) {
            this.music_active.visible = true;
            this.play.visible = false;
            this.stop.visible = true;
        } else {
            this.music_active.visible = false;
            this.play.visible = true;
            this.stop.visible = false;
        }
    }

    onClick() {
        if (!this.clicked) {
            this.network.send('update_music', { music: this.musicId })
        } else if (this.clicked) {
            this.network.send('update_music', { music: 0 })
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
