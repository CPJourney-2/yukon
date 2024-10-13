import BaseScene from '@scenes/base/BaseScene'

import Start from '@scenes/interface/menus/start/Start'
import Login from '@scenes/interface/menus/login/Login'
import PenguinSelect from '@scenes/interface/menus/login/penguin_select/PenguinSelect'
import PenguinLogin from '@scenes/interface/menus/login/penguin_login/PenguinLogin'
import Servers from '@scenes/interface/menus/servers/Servers'
import Main from '@scenes/interface/game/main/Main'
import IglooEdit from '@scenes/interface/game/iglooedit/IglooEdit'
import Create from '@scenes/interface/menus/create/Create'

import generateItemsToFrames from '@engine/world/penguin/frames/generateItemsToFrames'


export default class Preload extends BaseScene {

    preload() {
        this.load.cacheBuster = TIMESTAMP

        this.load.on('progress', this.onProgress, this)

        WebFont.load(this.crumbs.fonts)

        this.load.pack('preload', 'assets/media/preload/preload-pack.json?update=10082024')

        this.scene.add('Start', Start)
        this.scene.add('Login', Login)
        this.scene.add('PenguinSelect', PenguinSelect)
        this.scene.add('PenguinLogin', PenguinLogin)
        this.scene.add('Servers', Servers)
        this.scene.add('Main', Main)
        this.scene.add('IglooEdit', IglooEdit)
        this.scene.add('Create', Create)
    }

    create() {
        // Set crumbs
        let crumbs = this.cache.json.get('crumbs')

        this.game.crumbs = {
            ...this.game.crumbs,
            ...crumbs
        }

        this.game.crumbs.itemsToFrames = generateItemsToFrames(crumbs.secret_frames)

        // Start
        this.interface.showLoading('Loading Login',true)

        this.scene.start('InterfaceController')
        
        // Check if should boot to Create Penguin, else boot to Start Screen
        let searchParams = new URLSearchParams(window.location.search)
        if(searchParams.get('create') == 'true') {
            this.interface.showLoading(`${this.getString('loading','create')}`, true)
            this.scene.start('Create')
        } else {
            this.interface.showLoading(`${this.getString('loading','login')}`, true)
            this.scene.start('Start')
        }

        this.interface.bringToTop()
    }

    onProgress(progress) {
        this.interface.loading.progress.scaleX = progress
    }

}
