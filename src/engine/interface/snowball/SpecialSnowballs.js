import PathEngine from '@engine/world/penguin/pathfinding/PathEngine'

export default {
	3: {
		full: (snowballFactory, ball, x, y) => {
			const world = snowballFactory.world
			let distance = Phaser.Math.Distance.Between(ball.x, ball.y, x, y)
			let duration = PathEngine.getDuration(distance, snowballFactory.speed)
	
			ball.tween = world.room.tweens.add({
				targets: ball,
				duration: duration,
				ease: 'Linear',
				x: { from: ball.x, to: x },
				y: { from: ball.y, to: y },
	
				onStart: () => {
					if(ball) {
						ball.visible = true
						ball.shadow.destroy()
						ball.play('ball_fire_midair')
					}
				},
				onUpdate: () => {
					ball.depth = ball.y
				},
				onComplete: () => {
					ball.tween = null
					ball.play('ball_fire_land')
					world.events.emit('snowballcomplete', ball.x, ball.y, ball, ball.penguin.id)
				}
			})
		}
	},

	5: {
		start: (snowballFactory, ball, x, y) => {
			// i hate using try catches but it still throws an error even when theres a check for if ball is defined
			try {
				ball.play('ball-herbert-midair')
			} catch(e) {
				console.error(e)
			}
		},
		complete: (snowballFactory, ball, x, y) => {
			const room = snowballFactory.world.room

			for(let penguin of Object.values(room.penguins)) {
				if (!penguin) continue
				if (penguin.isTweening) continue
				if (penguin.herbertSnowballSprite) continue
				const distance = Phaser.Math.Distance.Between(penguin.x, penguin.y, x, y)
				if (distance > 25) continue

				snowballFactory.destroyBall(ball)
				const sprite = room.add.sprite(penguin.x, penguin.y - 28, 'ball-herbert', 'hit0001')
				sprite.setDepth(penguin.y + 1)
				sprite.play('ball-herbert-hit')
				penguin.herbertSnowballSprite = sprite

				// make sure the hit sprite is destroyed when penguin leaves
				room.events.on('removepenguin', (id) => {
					if(id == penguin.id) {
						if (sprite) sprite.destroy()
					}
				})
				return
			}
			if(ball) ball.play('ball-herbert-land')
		},
	}
}
/*export default class SpecialSnowballs {

	constructor(world, snowballFactory) {
		this.world = world
		this.snowballFactory = snowballFactory
	}

	transform_3(ball, x, y) {
		let distance = Phaser.Math.Distance.Between(ball.x, ball.y, x, y)
		let duration = PathEngine.getDuration(distance, this.snowballFactory.speed)

		ball.tween = this.world.room.tweens.add({
			targets: ball,
			duration: duration,
			ease: 'Linear',
			x: { from: ball.x, to: x },
			y: { from: ball.y, to: y },

			onStart: () => {
				if(ball) {
					ball.visible = true
					ball.shadow.destroy()
					ball.play('ball_fire_midair')
				}
			},
			onUpdate: () => {
				ball.depth = ball.y
			},
			onComplete: () => {
				ball.tween = null
				ball.play('ball_fire_land')
				this.world.events.emit('snowballcomplete', ball.x, ball.y, ball, ball.penguin.id)
			}
		})
		return
	}
}*/