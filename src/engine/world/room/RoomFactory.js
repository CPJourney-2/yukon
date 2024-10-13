export default class RoomFactory {

    constructor(world) {
        this.world = world

        this.scene = world.scene

        this.rooms = world.crumbs.scenes.rooms
        this.igloos = world.crumbs.scenes.igloos
        this.games = world.crumbs.games
    }

    create(args) {
        try {
            this.world.interface.main.resetIglooLikes()
            args.igloo ? this.world.interface.main.iglooLikes.visible = true : this.world.interface.main.iglooLikes.visible = false
        } catch (e) {
            // pass. this fails on first login
        }
        
        if (args.room) {
            return this.createRoom(args)

        } else if (args.igloo) {
            return this.createIgloo(args)

        } else if (args.game) {
            return this.createGame(args)
        }
    }

    createRoom(args) {
        let config = this.rooms[args.room]

        if (config.key in this.scene.manager.keys) {
            this.scene.start(config.key)

            return this.scene.get(config.key)

        } else {
            return this.scene.add(config.key, config.scene, true, { id: args.room })
        }
    }

    createIgloo(args) {
        let config = this.igloos[args.type]

        if (config.key in this.scene.manager.keys) {
            this.scene.start(config.key, { args: args })

            return this.scene.get(config.key)

        } else {
            return this.scene.add(config.key, config.scene, true, { args: args })
        }
    }

    createGame(args) {
        let crumb = this.games[args.game]

        if (crumb.flash) {
            this.world.ruffle.bootGame(crumb)

            return
        }

        crumb.key = crumb.key.charAt(0).toUpperCase() + crumb.key.substring(1) // make first letter uppercase
      
        if (crumb.key in this.scene.manager.keys) {
            let scene = this.scene.get(crumb.key)
            this.scene.remove(scene)
        }
        
        return this.scene.add(crumb.key, this.world.crumbs.scenes.minigames[crumb.key].scene, true, { args: args })
    }

}
