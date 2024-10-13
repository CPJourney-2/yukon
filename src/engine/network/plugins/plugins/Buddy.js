import Plugin from '../Plugin'


export default class Buddy extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'buddy_request': this.buddyRequest,
            'buddy_accept': this.buddyAccept,
            'buddy_reject': this.buddyReject,
            'buddy_remove': this.buddyRemove,
            'buddy_find': this.buddyFind,
            'buddy_online': this.buddyOnline,
            'buddy_offline': this.buddyOffline,
            'buddy_favorite': this.buddyFavorite,
            'buddy_search': this.buddySearch,
            'get_buddy': this.getBuddy,
            'buddy_requests_update': this.buddyRequestsUpdate
        }
    }

    buddyRequest(args) {
        args.seen = 0
        this.world.client.buddyRequests.push(args)
        this.interface.buddyRequest()
    }

    buddyAccept(args) {
        let { requester, ...buddy } = args

        this.world.client.buddyRequests = this.world.client.buddyRequests.filter(obj => obj.id != args.id)
        this.interface.updateBuddies()

        if (args.requester) {
            this.interface.main.addRequest(args)
        }

        this.world.client.buddies.push(buddy)

        if (args.online) {
            this.interface.main.showOnlinePopup(buddy.username)
            this.world.client.penguin.penguinLoader.addBuddyRing(this.world.room.penguins[buddy.id])
        }
    }

    buddyReject(args) {
        this.world.client.buddyRequests = this.world.client.buddyRequests.filter(obj => obj.id != args.id)
        this.interface.updateBuddies()
    }

    buddyRemove(args) {
        // Filter buddy out of list
        this.world.client.buddies = this.world.client.buddies.filter(obj => obj.id != args.id)
        this.world.client.buddyRequests = this.world.client.buddyRequests.filter(obj => obj.id != args.id)
        this.interface.updateBuddies()

        if(this.world.room.penguins[args.id]) {
            this.world.client.penguin.penguinLoader.addRing(this.world.room.penguins[args.id],true)
            this.world.client.penguin.penguinLoader.removeBuddyRing(this.world.room.penguins[args.id])
        }
    }

    buddyFind(args) {
        let username = this.interface.main.playerCard.username.text
        let id = this.interface.main.playerCard.id

        let name = this.getRoomName(args, id)

        this.interface.prompt.showWindow(`${username} ${this.getString(`${name}_find`)}`, 'single')
    }

    buddyOnline(args) {
        let buddy = this.world.client.buddies.find(obj => obj.id == args.id)
        if (!buddy) return

        buddy.online = true

        if (this.interface.main.scene.isActive()) {
            this.interface.updateBuddies()
            this.interface.main.showOnlinePopup(buddy.username)
        }
    }

    buddyOffline(args) {
        let buddy = this.world.client.buddies.find(obj => obj.id == args.id)

        if (buddy) {
            buddy.online = false
            this.interface.updateBuddies()
        }
    }

    buddyFavorite(args) {
        let buddy = this.world.client.buddies.find(obj => obj.id == args.id)

        if(buddy) {
            buddy.favorite = args.favorite
            this.interface.updateBuddies()
        }
    }

    buddySearch(args) {
        this.interface.main.buddy.showSearchResult(args.penguin)
    }

    buddyRequestsUpdate(args) {
        this.world.client.buddyRequests = args.reqs
        this.world.client.unseenRequests = this.world.client.buddyRequests.filter(obj => obj.seen != 1)
    }

    getBuddy(args) {
        let buddy = this.world.client[args.type].find(obj => obj.id == args.id);
        
        if (buddy) {
            if (!buddy.items) {
                buddy.items = {};
            }
    
            if (args.penguin && typeof args.penguin === 'object') {
                Object.assign(buddy.items, args.penguin);
            }
        }
    
        this.interface.main.buddy.showBuddy(buddy);
    }

    getRoomName(args, userId) {
        if (!args.igloo && !args.game) {
            return this.crumbs.scenes.rooms[args.find].key
        }

        if (args.game) {
            return this.crumbs.games[args.find].key
        }

        let iglooUserId = args.find - this.crumbs.iglooIdOffset

        if (iglooUserId == userId) {
            return 'igloo_theirs'
        }

        if (iglooUserId == this.world.client.id) {
            return 'igloo_yours'
        }

        return 'igloo'
    }

}
