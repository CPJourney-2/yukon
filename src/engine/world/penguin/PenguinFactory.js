import ClientPenguin from './ClientPenguin'
import NPCPenguin from './NPCPenguin'
import Penguin from './Penguin'
import PenguinLoader from '@engine/loaders/PenguinLoader'


export default class PenguinFactory {

    constructor(world) {
        this.world = world

        this.penguinLoader = new PenguinLoader(world)
    }

    createPenguin(user, room, npc = false) {
        let client = this.world.client

        if (npc) return new NPCPenguin(user, room)

        for (var x in this.world.mascots) {
            if (this.world.mascots[x].id == user.id) user.username = this.world.mascots[x].name
        }

        if (user.id == client.id) {
            client.penguin = new ClientPenguin(user, room)
            return client.penguin

        } else {
            return new Penguin(user, room)
        }
    }

    createPenguins(users, room) {
        let penguins = {}

        for (let user of users) {
            if (!(user.id in penguins)) {
                penguins[user.id] = this.createPenguin(user, room)
            }
        }

        return penguins
    }

}
