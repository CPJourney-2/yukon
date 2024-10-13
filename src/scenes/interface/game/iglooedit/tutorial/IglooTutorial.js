import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton, Interactive } from '@components/components'

import YoutubePlayer from 'phaser3-rex-plugins/plugins/youtubeplayer.js'
import Spinner from '@scenes/interface/menus/load/Spinner'


/* START OF COMPILED CODE */

export default class IglooTutorial extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.music_inventory_selected;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.youtube_place;
        /** @type {Phaser.GameObjects.Text} */
        this.tutorial_text;
        /** @type {Phaser.GameObjects.Container} */
        this.live;
        /** @type {Spinner} */
        this.spinner;
        /** @type {Array<any>} */
        this.title_name;
        /** @type {Array<any>} */
        this.music_inventory;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // music_inventory_selected
        const music_inventory_selected = scene.add.image(0, 0, "new-iglooedit", "store_background");
        this.add(music_inventory_selected);

        // youtube_place
        const youtube_place = scene.add.rectangle(0, 48, 900, 500);
        youtube_place.fillColor = 14413053;
        this.add(youtube_place);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(460, 33, 128, 128);
        rectangle_1.scaleX = 0.7007442709804543;
        rectangle_1.scaleY = 4.637366386597599;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 15266302;
        this.add(rectangle_1);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(-321, 28, 128, 128);
        rectangle_2.scaleX = 0.2299589634513648;
        rectangle_2.scaleY = 4.637366386597599;
        rectangle_2.isFilled = true;
        rectangle_2.fillColor = 14413053;
        this.add(rectangle_2);

        // blueButton
        const blueButton = scene.add.image(513, -303, "new-iglooedit", "store_x");
        this.add(blueButton);

        // tutorial_text
        const tutorial_text = scene.add.text(0, -322, "", {});
        tutorial_text.setOrigin(0.5, 0);
        tutorial_text.text = "Need help on how to navigate the igloo editor? Watch the video below!";
        tutorial_text.setStyle({ "align": "center", "color": "#3D82C4", "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        tutorial_text.setWordWrapWidth(800);
        this.add(tutorial_text);

        // live
        const live = scene.add.container(0, 0);
        live.visible = false;
        this.add(live);

        // spinner
        const spinner = new Spinner(scene, 0, 11);
        spinner.tintFill = true;
        spinner.tintTopLeft = 4031172;
        spinner.tintTopRight = 4031172;
        spinner.tintBottomLeft = 4031172;
        spinner.tintBottomRight = 4031172;
        this.add(spinner);

        // lists
        const title_name = [];
        const music_inventory = [];

        // block (components)
        new Interactive(block);

        // blueButton (components)
        const blueButtonButton = new Button(blueButton);
        blueButtonButton.spriteName = "store_x";
        blueButtonButton.callback = () => this.onClose();
        blueButtonButton.activeFrame = true;

        this.music_inventory_selected = music_inventory_selected;
        this.youtube_place = youtube_place;
        this.tutorial_text = tutorial_text;
        this.live = live;
        this.spinner = spinner;
        this.title_name = title_name;
        this.music_inventory = music_inventory;

        /* START-USER-CTR-CODE */
		this.youtube = null
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        this.visible = true;
        if(!this.youtube) {
			let youtube = new YoutubePlayer(this.scene, this.youtube_place.x, this.youtube_place.y, this.youtube_place.width, this.youtube_place.height, {
				videoId: 'SXGK-4Qj4TQ',
				controls: true,
				keyboardControl: true,
				modestBranding: false,
				loop: false,
			});
			this.live.add(youtube);
			this.youtube = youtube;
		}
        this.live.visible = true;
        this.youtube.setPlaybackTime(0);

        this.world.room.musicPreview = true;
        this.world.room.updateMusic(0, true);
		this.world.interface.iglooEdit.filterInvInput.resize(0,0);
		this.spinner.start()
    }

    openYoutube() {
        this.live.visible = true;
        this.youtube.setPlaybackTime(0);
        //this.youtube.play();
    }

    onClose() {
        this.visible = false;
        this.live.visible = false;
        this.youtube.pause();
        if (this.world.room.musicPreview) {
            this.world.room.updateMusic(this.world.room.music);
            this.world.room.musicPreview = false;
        }
		this.spinner.stop()
        this.world.interface.iglooEdit.filterInvInput.resize(this.world.interface.iglooEdit.put_input_here_inv.width, this.world.interface.iglooEdit.put_input_here_inv.height);
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
