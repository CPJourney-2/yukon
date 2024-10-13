import Boot from '@engine/boot/Boot'
import Network from '@engine/network/Network'
import registerNinePatchContainerFactory from '@engine/utils/ninepatch/registerNinePatchContainerFactory'
import registerRoundedRectangleGraphicsFactory from '@engine/utils/roundedrect/registerRoundedRectangleGraphicsFactory'
import registerRoundedRectangleImageFactory from '@engine/utils/roundedrect/registerRoundedRectangleImageFactory'
import SoundManager from '@engine/sound/SoundManager'

import game from './data/game'


export default class Game extends Phaser.Game {

    constructor(config) {
        super(config)

        this.logBanner()
        this.initContainers()

        this.crumbs = config.crumbs
        this.network = new Network(this)

        // howler.js based sound manager
        this.soundManager = new SoundManager(this)

        registerNinePatchContainerFactory()
		registerRoundedRectangleGraphicsFactory()
        registerRoundedRectangleImageFactory()
		

        this.scene.add('Boot', Boot, true)
    }

    logBanner() {
        // Please leave this line here for credit purposes
        console.log('%cYukon Client\nhttps://github.com/wizguin/yukon', 'font-size: 25px;')

        // Edit this line if you want to display a custom name
        console.log(`Version ${VERSION}`)
        
        console.log('%cSTOP! ✋', 'font-size: 25px; color: red')
        console.log('%cThis is a browser feature intended for DEVELOPERS ONLY. Using these tools to expose game code or send unauthorized packets is STRICTLY PROHIBITED, and can get your account PERMANENTLY BANNED.', 'font-size: 15px; color: red')
    }

    initContainers() {
        let parent = document.querySelector(`#${this.config.parent} canvas`)

        parent.onclick = () => {
            // Removes input focus from active element
            document.activeElement.blur()
        }

        // Styles
        let style = {
            overflow: 'hidden'
        }

        Object.assign(parent.style, style)
        Object.assign(this.domContainer.style, style)
    }

}

window.onload = () => {
    new Game(game)
}
