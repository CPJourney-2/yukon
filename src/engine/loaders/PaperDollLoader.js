import BaseLoader from './BaseLoader';

export default class PaperDollLoader extends BaseLoader {
    constructor(scene, paperDoll) {
        super(scene);

        this.paperDoll = paperDoll;

        this.flagX = -153;
        this.flagY = -120;
        this.flagScale = 0.66;

        this.baseURL =
            process.env.NODE_ENV === 'development' || true
                ? '/assets/media/clothing/'
                : CDN_URL + 'assets/media/clothing/';
        this.keyPrefix = 'clothing/';
    }

    getUrl(slot) {
        switch (slot) {
            case 'flag':
                return 'icon/120/';

            case 'photo':
                return 'photos/';

            default:
                return 'paper/';
        }
    }

    setColor(id) {
        this.paperDoll.body.tint = this.world.getColor(id);
    }

    loadItems(penguin,noPin = false,noPhoto = false) {
        for (let slot of this.paperDoll.slots) {
            let item = penguin[slot];
			
			if(slot == 'flag' && noPin) continue
			
			if(slot == 'photo' && noPhoto) continue
			
            if ((item > 0) | (slot == 'color')) {
                this.loadItem(item, slot);
            }
        }

        this.start();
    }

    loadItem(item, slot) {
        if (slot == 'color') {
            return this.setColor(item);
        }

        if (item == 0) {
            return this.removeItem(slot);
        }

        if (this.paperDoll.items[slot].sprite) {
            this.removeItem(slot);
        }

        this.paperDoll.items[slot].id = item;

        if (this.crumbs.items[item]?.back) {
            this.loadBack(item, slot);
        }

        let url = this.getUrl(slot);
        let key = this.getKey(url, item);

        let fileExtension = '.png';
        if (this.crumbs.items[item]?.fileExtension) {
            fileExtension = this.crumbs.items[item].fileExtension;
            if (
                fileExtension != '.png' &&
                fileExtension != '.gif' &&
                fileExtension != '.webp'
            ) {
                return;
            }
        }

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(item, key, slot);
            })
        ) {
            return;
        }

        if (fileExtension === '.gif') {
            this.anims.create({
                key: key,
                frames: this.anims.generateFrameNames(key, {
                    start: 0,
                    end: 1,
                }),
                frameRate: 20,
                repeat: -1,
            });
            this.paperDoll.items[slot].sprite = this.add.sprite(0, 0, key);
            this.paperDoll.items[slot].sprite.play(key);
        } else {
            this.image(key, `${url}${item}${fileExtension}`);
        }
    }

    loadBack(item, parentSlot) {
        let key = this.getKey('paper/', item, '_back');

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(item, key, parentSlot, true);
            })
        ) {
            return;
        }

        this.image(key, `paper/${item}_back.png`);
    }

    onFileComplete(itemId, key, slot, isBack = false) {
        if (!this.paperDoll.visible || !this.textureExists(key)) {
            return;
        }

        if (itemId != this.paperDoll.items[slot].id) {
            return;
        }

        let item = this.paperDoll.items[slot];

        if (isBack) {
            this.addBack(key, slot, item);
            return;
        }

        if (item.sprite) {
            this.removeItem(slot);
        }

        if (slot == 'flag') {
            this.addFlag(key, slot, item);
            return;
        }

        item.sprite = this.addPaper(key, slot, item.depth);
    }

    addBack(key, slot, parentItem) {
        if (parentItem.back) {
            this.paperDoll.destroyBack(item);
        }

        parentItem.back = this.addPaper(key, slot, parentItem.depth, 1, true);
    }

    addFlag(key, slot, item) {
        item.sprite = this.addPaper(key, slot, item.depth, this.flagScale);
        item.sprite.setPosition(this.flagX, this.flagY);
    }

    addPaper(key, slot, depth, scale = 1, isBack = false) {
        let paper = this.scene.add.image(0, 0, key);

        paper.scale = scale;
        paper.isBack = isBack;

        // Back sprites always on bottom
        paper.depth = isBack ? depth : depth + 100;

        this.fadeIn(paper);

        if (slot == 'photo') {
            if (this.paperDoll.parentContainer.hasOwnProperty('slotID')) {
                paper.setOrigin(-500);
            } else {
                this.scene.playerCard.photo.add(paper);
                paper.setOrigin(0);

                if(this.world.crumbs.items[key.split("/").slice(-1)]?.video) {
                    let paperVideo = this.scene.add.video(0, 0).loadURL(`assets/media/${key}.mp4`, true, "anonymous");
                    paperVideo.setOrigin(0);
                    paperVideo.depth = paper.depth + 1
                    paperVideo.play(true)
                    this.scene.playerCard.photo.add(paperVideo);
                    this.scene.playerCard.playingVideo = true;
                }
            }
        } else {
            this.paperDoll.add(paper);
        }

        if (this.paperDoll.isInputEnabled) {
            this.addInput(slot, paper);
        }

        this.paperDoll.sort('depth');

        this.updateBackSprites();

        return paper;
    }

    fadeIn(paper) {
        if (!this.paperDoll.fadeIn) {
            return;
        }

        paper.alpha = 0;

        this.scene.tweens.add({
            targets: paper,
            alpha: { from: 0, to: 1 },
            duration: 200,
        });
    }

    addInput(slot, paper) {
        paper.setInteractive({
            cursor: 'pointer',
            pixelPerfect: true,
        });

        paper.on('pointerdown', () => this.onPaperClick(slot));
    }

    onPaperClick(slot) {
        this.network.send('remove_item', { type: slot });
    }

    removeItem(slot) {
        let item = this.paperDoll.items[slot];

        if (!item) {
            return;
        }

        this.paperDoll.removeItem(item);

        this.updateBackSprites();
    }

    updateBackSprites() {
        let backs = this.getBackSprites();

        if (!backs.length) {
            return;
        }

        let last = backs.pop();

        if (!last.visible) {
            last.visible = true;

            this.fadeIn(last);
        }

        for (let back of backs) {
            back.visible = false;
        }
    }

    getBackSprites() {
        return this.paperDoll.list.filter((item) => item.isBack);
    }
}
