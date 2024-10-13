export const preload = {
    key: ['pengiquin-pack'],
    url: ['assets/media/interface/catalogs/voyager/pengiquin-pack.json'],
    loadString: ['']
}

/* START OF COMPILED CODE */

import PaperDoll from "../game/playercard/paperdoll/PaperDoll";
/* START-USER-IMPORTS */
import ItemIconLoader from '@engine/loaders/ItemIconLoader'
/* END-USER-IMPORTS */

export default class PengiquinDoll extends PaperDoll {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // pengiquin_shadow
        const pengiquin_shadow = scene.add.image(1, 160, "pengiquin-pack", "pengiquin_shadow");
        this.add(pengiquin_shadow);

        // pengiquin_shadow_1
        const pengiquin_shadow_1 = scene.add.image(1, 160, "pengiquin-pack", "pengiquin_shadow");
        this.add(pengiquin_shadow_1);

        // glow
        const glow = scene.add.image(0, 0, "pengiquin-pack", "glow");
        glow.scaleX = 0.5;
        glow.scaleY = 0.5;
        glow.visible = false;
        glow.tintFill = true;
        glow.tintTopLeft = 16184276;
        glow.tintTopRight = 16777215;
        glow.tintBottomLeft = 16777215;
        glow.tintBottomRight = 16777215;
        this.add(glow);

        // sunburst
        const sunburst = scene.add.image(0, 0, "pengiquin-pack", "sunburst");
        sunburst.scaleX = 0.6;
        sunburst.scaleY = 0.6;
        sunburst.visible = false;
        sunburst.tintFill = true;
        sunburst.tintTopLeft = 16777215;
        this.add(sunburst);

        // pengiquinDoll
        const pengiquinDoll = scene.add.image(0, 0, "pengiquin-pack", "pengiquin");
        pengiquinDoll.scaleX = 0.5;
        pengiquinDoll.scaleY = 0.5;
        pengiquinDoll.setOrigin(0.5, 0.43);
        this.add(pengiquinDoll);

        // iconContainer
        const iconContainer = scene.add.container(0, 0);
        this.add(iconContainer);

        this.glow = glow;
        this.sunburst = sunburst;
        this.pengiquinDoll = pengiquinDoll;
        this.iconContainer = iconContainer;

        /* START-USER-CTR-CODE */
        this.body.visible = false;
        this.paperdoll.visible = false;
        this.paperdoll = this.pengiquinDoll;
        this.itemIconLoader = new ItemIconLoader(this.scene, this.iconContainer, true, 'i');

        this.glow.depth = -500;
        this.sunburst.depth = -500;
        this.sort('depth');

        this.scene?.tweens.add({
            targets: this.sunburst,
            repeat: -1,
            duration: 10000,
            angle: 180,
        });

        this.BG_TYPE = 9;
        this.TRANSFORM_TYPE = 11;
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    glow;
    /** @type {Phaser.GameObjects.Image} */
    sunburst;
    /** @type {Phaser.GameObjects.Image} */
    pengiquinDoll;
    /** @type {Phaser.GameObjects.Container} */
    iconContainer;

    /* START-USER-CODE */
    get item() {
        return this._item;
    }

    /**
     * @param {{slot: string, item: number, type: number, name: string, rarity: string}} item
     */
    setItem(item) {
        this._item = item;
        this.iconContainer.visible = false;
        this.pengiquinDoll.visible = false;
        this.removeItems();

        this.glow.visible = false;
        this.sunburst.visible = false;

        if (item.type === this.BG_TYPE || item.type === this.TRANSFORM_TYPE) {
            this.iconContainer.visible = true;
            setTimeout(() => this.itemIconLoader.startItemLoad(item.item), 200); // match fade-in of paperDoll, keeping this.fadeIn = true

        } else {
            this.pengiquinDoll.visible = true;

            const penguin = {
                photo: 0,
                color: 0,
                feet: 0,
                body: 0,
                neck: 0,
                face: 0,
                head: 0,
                hand: 0,
                flag: 0,
                [item.slot]: item.item,
                rarity: item.rarity,
            };

            this.loadDoll(penguin, false, true);
        }

        if (item.rarity === 'uncommon') {
            // this.glow.visible = true;
            // this.glow.tint = _getRarityColor(item.rarity);
        } else if (item.rarity === 'rare') {
            this.glow.visible = true;
            this.glow.tint = _getRarityColor(item.rarity);
        } else if (item.rarity === 'legendary') {
            this.sunburst.visible = true;
            this.sunburst.tint = _getRarityColor(item.rarity);
        }

        this.visible = true;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

function _getRarityColor(rarity) {
    if (rarity === 'uncommon') {
        return 0xf6f3d4;
    } else if (rarity === 'rare') {
        return 0xf84848;
    } else if (rarity === 'legendary') {
        return 0xf84848;
    }
}
