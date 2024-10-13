import BaseContainer from '@scenes/base/BaseContainer'
import IglooIconLoader from '@engine/loaders/IglooIconLoader'
import { Button } from "@components/components"

/* START OF COMPILED CODE */

export default class IglooSlots extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // igloo_info
        const igloo_info = scene.add.container(0, 0);
        this.add(igloo_info);

        // item_holder
        const item_holder = scene.add.image(0, 0, "new-iglooedit", "item_holder");
        igloo_info.add(item_holder);

        // item_holder_current
        const item_holder_current = scene.add.image(0, 0, "new-iglooedit", "item_holder-current");
        item_holder_current.visible = false;
        igloo_info.add(item_holder_current);

        // updated_text
        const updated_text = scene.add.text(410, 49, "", {});
        updated_text.scaleX = 0.7;
        updated_text.scaleY = 0.7;
        updated_text.setOrigin(1, 0);
        updated_text.text = "Last Updated: 1/1/2024, 12:59 AM";
        updated_text.setStyle({ "align": "right", "color": "#3D82C4", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
        igloo_info.add(updated_text);

        // likes_text
        const likes_text = scene.add.text(309, -62, "", {});
        likes_text.text = "Likes: 0";
        likes_text.setStyle({ "align": "right", "color": "#3D82C4", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        igloo_info.add(likes_text);

        // music_symbol
        const music_symbol = scene.add.image(-175, 50, "new-iglooedit", "music_symbol");
        music_symbol.scaleX = 0.7;
        music_symbol.scaleY = 0.7;
        igloo_info.add(music_symbol);

        // music_text
        const music_text = scene.add.text(-141, 35, "", {});
        music_text.text = "No Music";
        music_text.setStyle({ "color": "#3D82C4", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        igloo_info.add(music_text);

        // location_symbol
        const location_symbol = scene.add.image(-174, 0, "new-iglooedit", "location_symbol");
        igloo_info.add(location_symbol);

        // location_text
        const location_text = scene.add.text(-141, -15, "", {});
        location_text.text = "Default Location";
        location_text.setStyle({ "color": "#3D82C4", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        igloo_info.add(location_text);

        // igloo_symbol
        const igloo_symbol = scene.add.image(-173, -47, "new-iglooedit", "igloo_symbol");
        igloo_info.add(igloo_symbol);

        // igloo_text
        const igloo_text = scene.add.text(-141, -62, "", {});
        igloo_text.text = "Basic Igloo";
        igloo_text.setStyle({ "color": "#3D82C4", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        igloo_info.add(igloo_text);

        // igloo_icon
        const igloo_icon = scene.add.container(-340, 0);
        this.add(igloo_icon);

        // item_plus
        const item_plus = scene.add.image(0, 0, "new-iglooedit", "item_plus");
        item_plus.visible = false;
        this.add(item_plus);

        // item_holder (components)
        const item_holderButton = new Button(item_holder);
        item_holderButton.spriteName = "item_holder";

        // item_plus (components)
        const item_plusButton = new Button(item_plus);
        item_plusButton.spriteName = "item_plus";

        this.item_holder = item_holder;
        this.item_holder_current = item_holder_current;
        this.updated_text = updated_text;
        this.likes_text = likes_text;
        this.music_text = music_text;
        this.location_text = location_text;
        this.igloo_text = igloo_text;
        this.igloo_info = igloo_info;
        this.igloo_icon = igloo_icon;
        this.item_plus = item_plus;

        /* START-USER-CTR-CODE */
        this.iglooIconLoader = new IglooIconLoader(scene, this.igloo_icon);
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    item_holder;
    /** @type {Phaser.GameObjects.Image} */
    item_holder_current;
    /** @type {Phaser.GameObjects.Text} */
    updated_text;
    /** @type {Phaser.GameObjects.Text} */
    likes_text;
    /** @type {Phaser.GameObjects.Text} */
    music_text;
    /** @type {Phaser.GameObjects.Text} */
    location_text;
    /** @type {Phaser.GameObjects.Text} */
    igloo_text;
    /** @type {Phaser.GameObjects.Container} */
    igloo_info;
    /** @type {Phaser.GameObjects.Container} */
    igloo_icon;
    /** @type {Phaser.GameObjects.Image} */
    item_plus;

    /* START-USER-CODE */

    loadAndDisplayIglooIcon(iglooType) {
        this.iglooIconLoader.loadIcon(iglooType, (icon) => {
            // Clear previous icons if any
            this.igloo_icon.removeAll(true);

            // Add the new icon to the igloo_icon container
            this.igloo_icon.add(icon);
        });
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
