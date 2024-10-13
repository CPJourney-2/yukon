import BaseLoader from './BaseLoader';

export default class IglooIconLoader extends BaseLoader {

    constructor(scene, iglooIconContainer) {
        super(scene);

        this.iglooIconContainer = iglooIconContainer;

        this.config = {
            igloos: {
                baseURL: (process.env.NODE_ENV === 'development' || true) ? '/assets/media/igloos/buildings/icon/' : CDN_URL + "assets/media/igloos/buildings/icon/",
                keyPrefix: 'igloos/icon/'
            }
        }
    }

    get baseURL() {
        return this.config.igloos.baseURL;
    }

    get keyPrefix() {
        return this.config.igloos.keyPrefix;
    }

    getKey(iglooType) {
        return `${this.keyPrefix}${iglooType}`;
    }

    loadIcon(iglooType, callback) {
        const iconKey = `igloo/icon/${iglooType}`;
        
        // Check if the texture is already loaded
        if (this.scene.textures.exists(iconKey)) {
            const icon = this.scene.add.image(0, 0, iconKey).setScale(0.5);
            callback(icon);
        } else {
            // Load the texture and add the icon to the callback
            this.scene.load.image(iconKey, `assets/media/igloos/buildings/icon/${iglooType}.png`);
            this.scene.load.once('complete', () => {
                const icon = this.scene.add.image(0, 0, iconKey).setScale(0.5);
                callback(icon);
            }, this);
            this.scene.load.start();
        }
    }

    onFileComplete(key, iglooType) {
        if (!this.textureExists(key)) {
            return;
        }

        // Remove all previous icons
        this.iglooIconContainer.removeAll(true);

        // Add the new igloo icon to the container
        let icon = this.scene.add.image(0, 0, key).setOrigin(0.5, 0.5).setScale(0.5);
        this.iglooIconContainer.add(icon);
    }
}