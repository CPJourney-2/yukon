import Plugin from '../Plugin'


export default class Actions extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'send_position': this.sendPosition,
            'send_frame': this.sendFrame,
            'snowball': this.snowball,
            'open_sprite': this.openSprite,
            'close_sprite': this.closeSprite,
            'teleport_and_move': this.teleportAndMove,
            'send_move_chain': this.sendMoveChain,
        }
    }

    get room() {
        return this.world.room
    }

    openSprite(args) {
        if (!this.room.isReady) {
            return
        }

        let penguin = this.room.penguins[args.id]
        penguin.openSprite = args.sprite

        if (penguin.tween != null) {
            // player is moving

            // amazing function hook there will be 0 issues here /s
            let oldAfterMove = penguin.afterMove

            penguin.afterMove = () => {
                // player may close the sprite before finishing walk anim
                if (penguin.openSprite == null) return

                this.world.client.penguin.penguinLoader.openOtherSprite(penguin, args.sprite);
            }

            if (oldAfterMove) oldAfterMove()

            return
        }

        this.world.client.penguin.penguinLoader.openOtherSprite(penguin, args.sprite);
    }

    closeSprite(args) {
        if (!this.room.isReady) {
            return
        }

        this.world.client.penguin.penguinLoader.closeOtherSprite(this.room.penguins[args.id]);
    }

    sendPosition(args) {
        if (!this.room.isReady) {
            return this.room.updateWaiting(args.id, { x: args.x, y: args.y, frame: 1 })
        }

        this.room.penguins[args.id].move(args.x, args.y)
        this.room.onPenguinUpdate(args.id)
    }

    sendFrame(args) {
        if (!this.room.isReady) {
            return this.room.updateWaiting(args.id, { frame: (args.set) ? args.frame : 1 })
        }

        let penguin = this.room.penguins[args.id]
        let callback = () => {
            penguin.playFrame(args.frame, args.set)

            //Play item sfx
            this.interface.main.playItemSfx(penguin,args.frame)

            this.room.onPenguinUpdate(args.id)
        }

        if (penguin.isTweening) {
            return penguin.afterMove = callback
        }

        callback()
    }

    snowball(args) {
        if (!this.room.isReady) {
            return
        }

        let penguin = this.room.penguins[args.id]
        let callback = () => {
            this.interface.main.snowballFactory.throwBall(args.id, args.x, args.y)
            this.room.onPenguinUpdate(args.id)
        }

        if (penguin.isTweening) {
            return penguin.afterMove = callback
        }

        callback()
    }

    async teleportAndMove(args) {
        const penguin = this.room.penguins[args.id];
        if (!penguin) return;


        penguin.x = args.x;
        penguin.y = args.y;

        if(!args.xMove || !args.yMove) return

        this.sendPosition({ id: args.id, x: args.xMove, y: args.yMove })
    }

    sendMoveChain(args) {
        if (!this.room.isReady) {
            return this.room.updateWaiting(args.id, { x: args.x, y: args.y, frame: 1 })
        }

        const penguin = this.room.penguins[args.id];
        if (!penguin) return;

        const movement = this.room.movementChains[args.chainId]
        if(!movement) return

        let callback = () => {
            penguin.moveChain(movement)
        }

        if (penguin.isTweening) {
            return penguin.afterMove = callback
        }

        callback()
    }

}
