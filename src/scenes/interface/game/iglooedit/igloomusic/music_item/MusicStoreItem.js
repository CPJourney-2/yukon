import BaseContainer from '@scenes/base/BaseContainer'

import { SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class MusicStoreItem extends BaseContainer {

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
        /** @type {Phaser.GameObjects.Image} */
        this.newIcon;
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

        // newIcon
        const newIcon = scene.add.image(140, -19, "main", "news-new");
        newIcon.scaleX = 0.5;
        newIcon.scaleY = 0.5;
        newIcon.visible = false;
        this.add(newIcon);

        // item (components)
        const itemSimpleButton = new SimpleButton(item);
        itemSimpleButton.callback = () => {this.onClick()};

        // music_active (components)
        const music_activeSimpleButton = new SimpleButton(music_active);
        music_activeSimpleButton.callback = () => {this.onClick()};

        // music_button (components)
        const music_buttonSimpleButton = new SimpleButton(music_button);
        music_buttonSimpleButton.callback = () => {this.onPreview()};

        this.item = item;
        this.music_active = music_active;
        this.play = play;
        this.stop = stop;
        this.title = title;
        this.newIcon = newIcon;

        /* START-USER-CTR-CODE */
        this.name = musicData.name;
        this.musicId = musicData.id;
        this.title.text = musicData.name;
        this.isStoreItem = true;
        scene.events.on('previewMusic', (previewMusicId) => {
            // If another item is being previewed, set this one to inactive
            if (previewMusicId !== this.musicId) {
                this.setActive(false);
            }
        }, this);
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

    onPreview() {
        this.scene.events.emit('previewMusic', this.musicId);
        this.setActive(true);
        this.world.room.musicPreview = true;
        this.world.room.updateMusic(this.musicId, true);
    }

    onClick() {
        this.world.interface.prompt.showMusic(this.musicId);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
