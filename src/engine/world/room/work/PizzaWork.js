import BaseWork from './BaseWork';

export default class PizzaWork extends BaseWork {

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
        for (let id in this.deliveringItems) {
            const chef = this.room.penguins[id];
            const pizza = this.deliveringItems[id];
            if (chef && pizza) {
                pizza.x = chef.x - 1;
                pizza.y = chef.y - 100;
            }
        }
    }

    handleWorkPicked(data) {
        const chefId = data.workerId;
        const chef = this.room.penguins[chefId];

        if (chef && !this.deliveringItems[chefId]) {
            const pizza = this.room.add.sprite(chef.x, chef.y - 100, "pizza-job", data.frame);
            pizza.setDepth(1000);
            pizza.setScale(0.6);
            this.deliveringItems[chefId] = pizza;
            this.deliveringGroup.add(pizza);
        }
    }

    handleWorkDelivered(data) {
        const chefId = data.workerId;
        const pizza = this.deliveringItems[chefId];
        if (pizza) {
            pizza.destroy();
            delete this.deliveringItems[chefId];
        }

        const eatPizza = this.room.add.sprite(data.deliveryX + 50, data.deliveryY, "pizza_jobs", data.frame);
        eatPizza.setDepth(1000);
        eatPizza.setScale(0.6);
        this.deliveredGroup.add(eatPizza);
        eatPizza.play(data.animation);
    }

    handleWorkRequest(args) {
        this.pickupItem.visible = true;
        this.room.soundManager.playSfx('order_bell');
        const pizzaFrames = ['01', '10', '19', '28', '37', '46', '55', '64'];
        const randomFrame = Phaser.Utils.Array.GetRandom(pizzaFrames);
        this.pickupItem.setFrame(`parlor_pizza_00${randomFrame}`);
        this.penguinItem.setFrame(`parlor_pizza_00${randomFrame}`);
        this.world.room.counter_arrow.visible = true;
        this.world.room.book.visible = false;

        this.deliveryX = args.x;
        this.deliveryY = args.y;

        this.isCollecting = true;
        this.isDelivering = false;

        this.room.events.on('update', this.checkCollection, this);
    }

    checkCollection() {
        if (this.isCollecting) {
            const distance = Phaser.Math.Distance.Between(
                this.world.client.penguin.x, 
                this.world.client.penguin.y,
                592, 
                356
            );

            if (distance <= 125) {
                this.pickupItem.visible = false;
                this.isCollecting = false;
                this.isDelivering = true;
                this.room.book.visible = true;
                this.room.rectangle_1.visible = true;
                this.world.room.counter_arrow.visible = false;

                const frame = this.penguinItem.frame.name;
                this.network.send('work_picked', { frame });
            }
        } else if (this.isDelivering) {
            this.penguinItem.x = this.world.client.penguin.x - 1;
            this.penguinItem.y = this.world.client.penguin.y - 10;
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
                this.isDelivering = false;
                this.penguinItem.x = -150;
                this.penguinItem.y = 300;
                this.arrow.x = -150;
                this.arrow.y = 400;
                const pizzaFrameName = this.penguinItem.frame.name;
                const pizzaAnim = this.room.pizzaAnimKeys[pizzaFrameName];
                const eatPizza = this.room.add.sprite(this.deliveryX + 50, this.deliveryY, "pizza_jobs", pizzaFrameName);
                eatPizza.setDepth(1000);
                eatPizza.setScale(0.6);
                this.deliveredGroup.add(eatPizza);
                eatPizza.play(pizzaAnim);
                this.room.events.off('update', this.checkCollection, this);

                if (this.arrowTween) {
                    this.arrowTween.stop();
                    this.arrowTween.remove();
                    this.arrowTween = null;
                }

                const pizza = this.deliveringItems[this.world.client.id];
                if (pizza) {
                    pizza.destroy();
                    delete this.deliveringItems[this.world.client.id];
                }

                this.network.send('work_fulfilled', {
                    workerId: this.world.client.id,
                    deliveryX: this.deliveryX,
                    deliveryY: this.deliveryY,
                    frame: pizzaFrameName,
                    animation: pizzaAnim
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
        this.room.soundManager.playSfx('job_pizza_done');
    }
}