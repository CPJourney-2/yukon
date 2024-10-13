import BaseLoader from './BaseLoader'

import FurnitureSprite from '@engine/world/room/furniture/FurnitureSprite'


export default class FurnitureLoader extends BaseLoader {

    constructor(scene) {
        super(scene)

        this.baseURL =  (process.env.NODE_ENV === 'development' || true) ? '/assets/media/furniture/sprites/' : CDN_URL + "assets/media/furniture/sprites/"
        this.keyPrefix = 'furniture/sprites/'
    }

    loadFurniture(item, crate = null, x, y, rotation = 1, frame = 1, depth) {
        let key = this.getKey(item)

        if (this.checkComplete('json', key, () => {
            this.onFileComplete(key, item, crate, x, y, rotation, frame, depth)
        })) {
            return
        }

        this.multiatlas(key, `${item}.json`)
    }

    onFileComplete(key, item, crate, x, y, rotation, frame, depth) {
        if (!this.textureExists(key)) {
            return
        }

        let sprite = new FurnitureSprite(this.scene, item, crate, x, y, key, rotation, frame, depth)
        this.scene.add.existing(sprite)
    }

}
