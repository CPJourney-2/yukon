import TintedSprite from '@engine/utils/tint/TintedSprite'


export default class TransformSpriteFactory {

    static create(penguin, texture, key, depth) { //texture is something like transformation_{id}
        if (!penguin.active) {
            return
        }

        let sprite

        switch (key) {
            
            case 'color':
                sprite = new TintedSprite(penguin.room, 0, 0, texture, 'color/1_1')
                sprite.tint = penguin.room.world.getColor(penguin.color)

                //penguin.room.add.existing(sprite)
                break

            case 'body':
                sprite = penguin.room.add.sprite(0, 0, texture, '1_1')
                break

            default:
                if (!penguin.textures.exists(key)) {
                    return
                }

                sprite = penguin.room.add.sprite(0, 0, key, '1_1')
                break
        }

        // Attach depth so that children can be sorted using penguin.sort('depth')
        sprite.depth = depth

        penguin.add(sprite)

        return sprite
    }

}
