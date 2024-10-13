import BaseLoader from './BaseLoader'

export default class TransformPaperLoader extends BaseLoader {

    constructor(scene, container, callback) {
        super(scene)

        this.container = container
		this.callback = callback

		this.isClient

		this.baseURL = (process.env.NODE_ENV === 'development' || true) ? '/assets/media/penguin/transforms/paper/' : CDN_URL + "assets/media/penguin/transforms/paper/"
		this.keyPrefix = 'penguin/transforms/paper/'
	}

	loadItem(transformId, isClient, colorSpecific = false, color) {
		this.isClient = isClient
		let key = `${this.keyPrefix}${transformId}${colorSpecific ? '_' + color : ''}`

		if (this.checkComplete('image', key, () => {
			this.onFileComplete(key)
		})) {
			return
		}

		this.image(key, `${transformId}${colorSpecific ? '_' + color : ''}.png`)
		this.start()
	}

	onFileComplete(key) {
		this.addIcon(key)
	}

	addIcon(key) {
		if (!this.textureExists(key)) {
			return
		}

		if (!this.container) {
			return
		}

		let paper = this.container.scene.add.image(0, 0, key)

		if(this.isClient) {
			paper.setInteractive({
				cursor: 'pointer',
				pixelPerfect: true,
			});
			paper.on('pointerup', () => this.callback())
		}

		this.container.add(paper)

		if (this.container.paper) this.container.paper.destroy()
		this.container.paper = paper
	}

}
