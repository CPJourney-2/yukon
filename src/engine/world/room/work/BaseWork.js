export default class BaseWork {

    constructor(room) {
        this.room = room

        this.isCollecting = false
        this.isDelivering = false
        this.deliveryX = 0
        this.deliveryY = 0
        this.deliveringGroup = this.room.add.group()
        this.deliveredGroup = this.room.add.group()
        this.deliveringItems = {}

        this.addListeners()
    }

    get world() {
        return this.room.world
    }

    get client() {
        return this.room.client
    }

    get interface() {
        return this.room.interface
    }

    get network() {
        return this.room.network
    }

    addListeners() {
        this.network.events.on('work_request', this.handleWorkRequest, this);
        this.network.events.on('work_picked', this.handleWorkPicked, this);
        this.network.events.on('work_delivered', this.handleWorkDelivered, this);
    }

    removeListeners() {
        this.network.events.off('work_request', this.handleWorkRequest, this);
        this.network.events.off('work_picked', this.handleWorkPicked, this);
        this.network.events.off('work_delivered', this.handleWorkDelivered, this);
    }


}