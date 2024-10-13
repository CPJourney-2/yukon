import PathEngine from '@engine/world/penguin/pathfinding/PathEngine'
import SpecialSnowballs from './SpecialSnowballs'

export default class SnowballFactory {

    constructor(world) {
        this.world = world

        this.balls = []
        this.speed = 800
        this.startHeight = -12
        this.maxHeight = 425
        this.minHeight = 350

        world.events.on('snowballcomplete', (x, y, ball, id) => {
            world.room.onSnowballComplete(x, y, ball, id)
            if(world.room.roomPin) world.room.roomPin.onSnowballComplete(x, y, ball)
        })

        //this.specialBalls = new SpecialSnowballs(world, this)
    }

    throwBall(id, x, y) {
        let penguin = this.world.room.penguins[id]
        if (!penguin || penguin.isTweening) return

        if(penguin.isTransformed) {
            if(penguin.transform === 9) return // klutzy doesnt have snowball anims
        }

        if (this.balls.length > (this.world.room.maxBalls || 30)) this.removeOldestBall()

        let ball = this.createBall(penguin)
        x += Phaser.Math.Between(-20, 20)
        y += Phaser.Math.Between(-20, 20)

        this.playAnimation(penguin, x, y)

        let delay = 833
        if(penguin.isTransformed) {
            if(penguin.transformCrumb.ball_delay) {
                delay = penguin.transformCrumb.ball_delay
                if(delay === 0) return
            }

            if(penguin.transformCrumb.special_ball) {
                if(SpecialSnowballs[penguin.transform].start) SpecialSnowballs[penguin.transform].start(this, ball, x, y)
            }
        }
        this.world.room.time.addEvent({
            delay: delay,
            callback: () => this.addTween(ball, x, y)
        })

        if(penguin.isTransformed && penguin.transformCrumb.special_ball) {
            if(SpecialSnowballs[penguin.transform].overrides?.includes('start')) return
        }
        this.world.room.onSnowballStart(x, y, ball, ball.penguin.id)
    }

    destroyBall(ball) {
        this.balls.splice(this.balls.indexOf(ball), 1)

        this.destroyBallObject(ball)
    }

    destroyBallObject(ball) {
        if(this.world.room.id == 858 && ball.penguin.id === this.world.client.id) return; // DELETE THIS LINE AFTER MISION11 PARTY
        if (ball.tween) ball.tween.remove()
        ball.shadow.destroy()
        if (ball.anims) ball.anims.stop()
        ball.destroy()
    }

    removeOldestBall() {
        let oldest = this.balls.shift()

        this.destroyBallObject(oldest)
    }

    createBall(penguin) {
        let ball = this.world.room.add.sprite(penguin.x, penguin.y + this.startHeight, 'main', 'snowball/ball')
        ball.shadow = this.world.room.add.sprite(penguin.x, penguin.y, 'main', 'snowball/shadow')
        ball.penguin = penguin

        ball.visible = false
        ball.shadow.visible = false

        this.balls.push(ball)
        return ball
    }

    playAnimation(penguin, x, y) {
        let angle = PathEngine.getAngle({ x: penguin.x, y: penguin.y }, { x: x, y: y })
        let direction = Math.max(Math.round(PathEngine.getDirection(angle) / 2), 1)
        let frame = direction + 26 // + 26 for throwing frame id

        penguin.playFrame(frame, false)
    }

    addTween(ball, x, y) {
        let distance = Phaser.Math.Distance.Between(ball.x, ball.y, x, y)
        let duration = PathEngine.getDuration(distance, this.speed)

        // Custom callbacks for transformations
        if(ball.penguin.isTransformed && ball.penguin.transformCrumb.special_ball) {
            if(SpecialSnowballs[ball.penguin.transform].full) {
                return SpecialSnowballs[ball.penguin.transform].full(this, ball, x, y)
            }
        }

        let peak = this.getPeak(duration)
        let control = this.getMidPoint([ball.x, ball.y], [x, y])

        let curve = new Phaser.Curves.QuadraticBezier([
            ball.x, ball.y,
            control.x, control.y - peak,
            x, y
        ])

        ball.tween = this.world.room.tweens.add({
            targets: ball.shadow,
            duration: duration,
            y: y,

            onStart: () => this.onTweenStart(ball),
            onUpdate: () => this.onTweenUpdate(ball, curve),
            onComplete: () => this.onTweenComplete(ball)
        })
    }

    onTweenStart(ball) {
        ball.visible = true
        ball.shadow.visible = true

        if(ball.penguin.isTransformed && ball.penguin.transformCrumb.special_ball) {
            if(SpecialSnowballs[ball.penguin.transform].start) {
                SpecialSnowballs[ball.penguin.transform].start(this, ball, ball.x, ball.y)
            }
        }
    }

    onTweenUpdate(ball, curve) {
        if(!curve) return
        let position = curve.getPoint(ball.tween.totalProgress)

        ball.x = position.x
        ball.y = position.y
        ball.shadow.x = position.x

        ball.depth = ball.shadow.y + 1
        ball.shadow.depth = ball.shadow.y
    }

    onTweenComplete(ball) {
        if (ball.active) {
            ball.tween = null
            ball.setTexture('main', 'snowball/ground')
            ball.x = ball.shadow.x
            ball.y = ball.shadow.y

            if(ball.penguin.isTransformed && ball.penguin.transformCrumb.special_ball) {
                if(SpecialSnowballs[ball.penguin.transform].complete) SpecialSnowballs[ball.penguin.transform].complete(this, ball, ball.x, ball.y)
            }

            this.world.events.emit('snowballcomplete', ball.x, ball.y, ball, ball.penguin.id)
        }
    }

    getPeak(duration) {
        let peak = Math.max(duration / 2, this.minHeight)
        return Math.min(peak, this.maxHeight)
    }

    getMidPoint([x1, y1], [x2, y2]) {
        return {
            x: (x1 + x2) / 2,
            y: (y1 + y2) / 2
        }
    }

    clearBalls() {
        this.balls = []
    }

}
