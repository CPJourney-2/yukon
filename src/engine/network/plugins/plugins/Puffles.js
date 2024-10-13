import Plugin from '../Plugin';

export default class Puffles extends Plugin {
    constructor(network) {
        super(network);
        this.events = {
            get_puffles: this.getPuffles,
            walk_puffle: this.walkPuffle,
            stop_walking: this.stopWalking,
            get_wellbeing: this.getWellbeing,
            buy_puffle_item: this.buyPuffleItem,
            adopt_puffle: this.adoptPuffle,
            discard_puffle: this.discardPuffle,
            update_wellbeing: this.updateWellbeing,
        };
    }

    getPuffles(args) {
        if (!this.world.room.isIgloo) return;

        let puffles = args.puffles;

        this.world.room.spawnPuffles(puffles);
    }

    walkPuffle(args) {
        if (!this.world.room) return;

        // delete current puffle if present
        let penguin = this.world.room.penguins[args.user];
        let puffle = this.world.room.penguins[args.user].pufflesprite;
        if (puffle) {
            puffle.destroy();
            penguin.hasPuffle = false;
        }

        let playercard = this.interface.main.playerCard;
        if (playercard.visible && playercard.id === args.user) {
            if (playercard.paperDoll.puffle) {
                playercard.paperDoll.puffle.destroy();
            }
        }

        // delete puffle from iggyloo
        if (this.world.room.isIgloo) {
            puffle = this.world.room.puffles[args.puffle];

            if (puffle) {
                puffle.destroy();
            }
        }

        // add puffle
        penguin.puffle = { ...args };
        this.world.client.penguin.penguinLoader.addPuffle(
            penguin,
            penguin.puffle,
            args.type
        );

        // save to main menu
        if (args.user == this.world.client.penguin.id) {
            penguin.updatePuffle(args.type);
        }
    }

    discardPuffle(args) {
        if (this.world.room.isIgloo) {
            let puffle = this.world.room.puffles[args.puffle];

            if (puffle) {
                puffle.destroy();
            }
        }
    }

    stopWalking(args) {
        if (!this.world.room) return;

        let penguin = this.world.room.penguins[args.user];

        if (this.world.room.isIgloo) {
            // if the igloo owner is the person who stopped walking puffle
            if (args.user == this.world.room.id) {
                if (args.user == this.world.client.penguin.id) {
                    // to stop an issue occuring where puffles don't disappear when the owner walks another puffle
                    penguin.walking = 0;
                }

                this.world.room.spawnPuffles([args.puffle]);
            }
        }

        if (penguin == null) {
            // penguin isn't in the room, we are probably in an igloo that isn't ours
            return;
        }

        // delete puffle (localplayer)
        let puffle = this.world.room.penguins[args.user].pufflesprite;

        if (puffle) {
            puffle.destroy();
            penguin.pufflesprite = undefined;
            penguin.hasPuffle = false;
        }

        let playercard = this.interface.main.playerCard;

        if (playercard.visible && playercard.id === args.user) {
            if (playercard.paperDoll.puffle) {
                playercard.paperDoll.puffle.destroy();
            }
        }

        if (penguin.puffle !== 0) {
            penguin.puffle = undefined;
        }

        penguin.walking = 0;

        // fix piffle not disappearing when removed for local & sync anim for all players
        penguin.playFrame(penguin.frame);

        // Adds to Loading Screen
        if (args.user == this.world.client.penguin.id) {
            penguin.updatePuffle(args.type);
        }
    }

    getWellbeing(args) {
        if (!this.world.room.isIgloo) {
            return;
        }

        if (
            this.interface.loadedWidgets.PuffleCare 
            // && this.interface.loadedWidgets.PuffleCare.args
            // && this.interface.loadedWidgets.PuffleCare.args.puffleId === args.puffleId 
            && this.world.room 
            && this.world.room.id === this.world.client.id
            ) {
            this.interface.loadedWidgets.PuffleCare.showPuffle(args);
        } else {
            // retry after 1 second
            setTimeout(() => {
                this.getWellbeing(args);
            }, 500);
        }
    }

    buyPuffleItem(args) {
        if (!this.world.room.isIgloo) return;

        // Update coins in client
        this.world.client.coins = args.coins;

        // Update coins in interface
        this.interface.refreshPlayerCard();

        // Play puffle animation
        switch (args.item) {
            case 1:
                this.world.room.puffles[args.puffleId].bubbleGum();
                break;
            case 2:
                this.world.room.puffles[args.puffleId].cookie();
                break;
            case 3:
                this.world.room.puffles[args.puffleId].feed();
                break;
            case 4:
                this.world.room.puffles[args.puffleId].bath();
                break;
        }
    }

    adoptPuffle(args) {
        // Update coins in client
        this.world.client.coins = args.coins;

        // Update coins in interface
        this.interface.refreshPlayerCard();

        // Update catalog coins
        this.interface.updateCatalogCoins(args.coins);
    }

    updateWellbeing(args) {
        const puffleIndex = this.world.client.puffles.findIndex(puffle => puffle.id === args.puffleId);
    
        if (puffleIndex !== -1) {
            this.world.client.puffles[puffleIndex].energy = args.energy;
            this.world.client.puffles[puffleIndex].health = args.health;
            this.world.client.puffles[puffleIndex].rest = args.rest;
            this.world.client.puffles[puffleIndex].name = args.name;
            this.world.client.puffles[puffleIndex].type = args.type;
        } else {
            const newPuffle = {
                id: args.puffleId,
                userId: this.world.client.id,
                type: args.type,
                name: args.name,
                energy: args.energy,
                health: args.health,
                rest: args.rest,
            };
            this.world.client.puffles.push(newPuffle);
        }
    }
}
