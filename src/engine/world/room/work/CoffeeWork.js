import BaseWork from './BaseWork';

export default class CoffeeWork extends BaseWork {

    constructor(room, penguinItem, pickupItem, arrow, coin, coinText) {
        super(room);

        this.penguinItem = penguinItem;
        this.pickupItem = pickupItem;
        this.arrow = arrow;
        this.coin = coin;
        this.coinText = coinText;

        this.arrowTween = null;
    }

    update() {
        // Update positions of barista's coffees
        for (let baristaId in this.deliveringItems) {
            const barista = this.room.penguins[baristaId];
            const baristaCoffee = this.deliveringItems[baristaId];
            if (barista && baristaCoffee) {
                baristaCoffee.x = barista.x;
                baristaCoffee.y = barista.y - 80;
            }
        }
    }

    handleWorkPicked(data) {
        const baristaId = data.workerId;
        const barista = this.room.penguins[baristaId];
    
        if (barista && !this.deliveringItems[baristaId]) {
            const baristaCoffee = this.room.add.sprite(barista.x, barista.y - 20, "coffee_jobs", data.frame);
            baristaCoffee.setDepth(1000);
            this.deliveringItems[baristaId] = baristaCoffee;
            this.deliveringGroup.add(baristaCoffee);
        }
    }

    handleWorkDelivered(data) {
        const baristaId = data.workerId;
        const baristaCoffee = this.deliveringItems[baristaId];
        if (baristaCoffee) {
            baristaCoffee.destroy();
            delete this.deliveringItems[baristaId];
        }

        const drinkCoffee = this.room.add.sprite(data.deliveryX + 50, data.deliveryY, "coffee_jobs", data.frame);
        drinkCoffee.setDepth(1000);
        this.deliveredGroup.add(drinkCoffee);
        drinkCoffee.play(data.animation);
    }

    handleWorkRequest(args) {
        // Make coffee visible and set coffee frame
        this.pickupItem.visible = true;
        this.room.soundManager.playSfx('order_bell');
        const coffeeFrames = ['01', '06', '11', '16'];
        const randomFrame = Phaser.Utils.Array.GetRandom(coffeeFrames);
        this.pickupItem.setFrame(`job_coffee_00${randomFrame}`);
        this.penguinItem.setFrame(`job_coffee_00${randomFrame}`);
        this.world.room.counter_arrow.visible = true;

        // Store delivery coordinates
        this.deliveryX = args.x;
        this.deliveryY = args.y;

        // Start checking for coffee collection
        this.isCollecting = true;
        this.isDelivering = false;

        this.room.events.on('update', this.checkCollection, this);
    }

    checkCollection() {
        if (this.isCollecting) {
            const distance = Phaser.Math.Distance.Between(
                this.world.client.penguin.x, 
                this.world.client.penguin.y,
                805, 
                635
            );

            if (distance <= 125) {
                // Coffee collected
                this.pickupItem.visible = false;
                this.world.room.counter_arrow.visible = false;

                this.isCollecting = false;
                this.isDelivering = true;

                const frame = this.penguinItem.frame.name;
                this.network.send('work_picked', { frame });
            }
        } else if (this.isDelivering) {
            this.penguinItem.x = this.world.client.penguin.x;
            this.penguinItem.y = this.world.client.penguin.y - 80;
            this.penguinItem.setDepth(1000);
            this.arrow.setDepth(5000);
            if (!this.arrowTween) {
                this.arrow.x = this.deliveryX;
                this.arrow.y = this.deliveryY - 125;
                this.arrowTween = this.room.tweens.add({
                    targets: [this.arrow],
                    y: {
                        from: this.arrow.y + 25,
                        to: this.arrow.y - 25
                    },
                    duration: 500,
                    ease: 'Sine.easeInOut',
                    yoyo: true,
                    repeat: -1
                })
            }
            const distance = Phaser.Math.Distance.Between(
                this.world.client.penguin.x, 
                this.world.client.penguin.y, 
                this.deliveryX, 
                this.deliveryY
            );

            if (distance <= 100) {
                // Coffee delivered
                this.isDelivering = false;
                this.penguinItem.x = -150;
                this.penguinItem.y = 300;
                this.arrow.x = -150;
                this.arrow.y = 400;
                const coffeeFrameName = this.penguinItem.frame.name;
                const coffeeAnim = this.room.coffeeAnimKeys[coffeeFrameName];
                const drinkCoffee = this.room.add.sprite(this.deliveryX + 50, this.deliveryY, "coffee_jobs", coffeeFrameName);
                drinkCoffee.setDepth(1000);
                this.deliveredGroup.add(drinkCoffee);
                drinkCoffee.play(coffeeAnim);
                this.room.events.off('update', this.checkCollection, this);

                if (this.arrowTween) {
                    this.arrowTween.stop();
                    this.arrowTween.remove();
                    this.arrowTween = null;
                }
                
                this.network.send('work_fulfilled', {
                    workerId: this.world.client.id,
                    deliveryX: this.deliveryX,
                    deliveryY: this.deliveryY,
                    frame: coffeeFrameName,
                    animation: coffeeAnim
                });
            }
        }
    }

    showCoinRewardToPlayer(penguin, coins) {
        this.coin.setPosition(penguin.x, penguin.y - 50);
        this.coin.setDepth(1002);

        this.coin.visible = true;

        this.coinText.setText(`+${coins}`);

        this.room.tweens.add({
            targets: [this.coin],
            y: {
                from: this.coin.y,
                to: this.coin.y - 70
            },
            ease: 'Linear',
            duration: 1000,
            onComplete: () => this.coin.visible = false
        });

        this.interface.refreshPlayerCard();
		this.world.room.cooldown_timer.visible = true;
        this.world.room.cooldown_timer.__Animation.play();
       	this.world.room.cooldown_timer.on('animationcomplete', () => this.world.room.cooldown_timer.visible = false)
        this.room.soundManager.playSfx('job_coffee_done');
    }
}