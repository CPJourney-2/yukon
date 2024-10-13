import CoinPrompt from '@scenes/interface/prompts/CoinPrompt';
import ErrorPrompt from './ErrorPrompt';
import InfoPrompt from './InfoPrompt';
import QuestionPrompt from './QuestionPrompt';
import ItemPrompt from '@scenes/interface/prompts/ItemPrompt';
import FurniturePrompt from '@scenes/interface/prompts/FurniturePrompt';
import LoadingPromptFactory from './LoadingPromptFactory';
import WindowPrompt from '@scenes/interface/prompts/WindowPrompt';
import StampPrompt from '@scenes/interface/prompts/StampPrompt';
import PuffleItemPrompt from '@scenes/interface/prompts/PuffleItemPrompt';
import PuffleAdoptPrompt from '@scenes/interface/prompts/PuffleAdoptPrompt';
import Broadcast from '@scenes/interface/prompts/BroadcastPrompt';

export default class PromptController {
    constructor(_interface) {
        this.interface = _interface;

        this.crumbs = _interface.crumbs;
        this.network = _interface.network;
        this.world = _interface.world;

        this.coin = new CoinPrompt(_interface, 760, 480);
        this.error = new ErrorPrompt(_interface, 760, 480);
        this.info = new InfoPrompt(_interface, 760, 480);
        this.question = new QuestionPrompt(_interface, 760, 480);
        this.item = new ItemPrompt(_interface, 760, 480);
	    this.furniture = new FurniturePrompt(_interface, 760, 480);
        this.window = new WindowPrompt(_interface, 760, 480);
        this.stamp = new StampPrompt(_interface, 760, 480);
        this.puffleitem = new PuffleItemPrompt(_interface, 760, 480);
        this.puffleadopt = new PuffleAdoptPrompt(_interface, 760, 480);
        this.broadcast = new Broadcast(_interface, 760, 480);

        _interface.add.existing(this.coin);
        _interface.add.existing(this.error);
        _interface.add.existing(this.info);
        _interface.add.existing(this.question);
        _interface.add.existing(this.item);
	    _interface.add.existing(this.furniture);
        _interface.add.existing(this.window);
        _interface.add.existing(this.stamp);
        _interface.add.existing(this.puffleitem);
        _interface.add.existing(this.puffleadopt);
        _interface.add.existing(this.broadcast);

        this.coin.visible = false
        this.error.visible = false
        this.info.visible = false
        this.question.visible = false
        this.item.visible = false
        this.furniture.visible = false
        this.window.visible = false
        this.puffleitem.visible = false
        this.puffleadopt.visible = false

        this.loadingPromptFactory = new LoadingPromptFactory(_interface);
    }

    handleZIndex(mode) {
        /* this is for handling how prompts are
           shown in minigames. the z index needs
           to be changed in order for the prompts
           to be seen properly when in a ruffle
           game, so this function is placed in
           most of the prompts that exist.      */

        if(this.world.room == undefined) { //this is undefined when youre in a game for some reason
            //user is in a minigame
            if(mode == "show") {
                //the game container is over ruffle
                this.world.game.domContainer.style.zIndex = -10
            }
            if(mode == "hide") {
                //ruffle container is dominant
                this.world.game.domContainer.style.zIndex = 'auto'
            }
        }
    }

    showCoin(
        coins = 0,
        totalStamps = 0,
        collectedStamps = 0,
        room = undefined,
        relevantStamps = [],
        doubleCoins = false,
    ) {
        this.coin.show(
            coins,
            totalStamps,
            collectedStamps,
            room,
            relevantStamps,
            doubleCoins
        );
    }

    showError(
        text,
        buttonText = 'Okay',
        callback = () => (this.error.visible = false),
        errorCode = null
    ) {
        console.log(`showError: ${text}`);
        this.handleZIndex("show")
        if(this.window.spinner.visible) this.window.visible = false

        if (text == "Server is full!") {
            return this.error.show(text, 'Reload', () => {
                location.reload();
            }, errorCode);
        }

        this.error.show(text, buttonText, () => {
            callback()
            this.handleZIndex("hide")
            this.interface.main.handleShowInputs()
        }, errorCode);
    }

    showBroadcast(text,mode) {
        this.broadcast.show(text,mode)
    }

    showInfo(
        text,
        buttonText = 'Okay',
        callback = () => {
            this.info.visible = false
            this.interface.main.handleShowInputs()
        }
    ) {
        if(this.window.spinner.visible) this.window.visible = false
        this.info.show(text, buttonText, callback);
    }

    showQuestion(
        text,
        yesCallback = () => {},
        noCallback = () => {}
    ) {
        if(this.window.spinner.visible) this.window.visible = false
        this.question.show(text, yesCallback, noCallback);
    }

    showItem(item) {
        this.handleZIndex("show")
        this.item.showItem(item);
    }

    showFurniture(furniture,partycoin = false) {
        this.furniture.showFurniture(furniture,partycoin);
    }

    showIgloo(igloo) {
        if (this.world.client.igloos.includes(igloo)) {
            return this.showError('You already have this igloo.');
        }

        let usePC = this.crumbs.igloos[igloo].party_coins
        let myCurrency = usePC ? this.world.client.partyCoins : this.world.client.coins
        let currency = usePC ? this.world.party.partyCoinCurrency : 'coins'

        let text = `Would you like to buy ${this.crumbs.igloos[igloo].name} for ${this.crumbs.igloos[igloo].cost} ${currency}.\n You currently have ${myCurrency} ${currency}.`;

        this.showWindow(text, 'dual', () => {
            this.network.send('add_igloo', { igloo: igloo });
            this.interface.prompt.showWindow(null,'loading');
        });
    }

    showFloor(floor) {
        if (this.world.client.flooring.includes(floor)) {
            return this.showError('You already have this flooring.');
        }

        if (this.world.room.key == 'Shipwreck') {
            return this.showError('Flooring is not available for this Igloo.');
        }

        let text = `Would you like to buy ${this.crumbs.flooring[floor].name} for ${this.crumbs.flooring[floor].cost} coins.\n You currently have ${this.world.client.coins} coins.`;

        this.showWindow(text, 'dual', () => {
            this.world.network.send('close_sprite', {});

            this.network.send('add_flooring', { flooring: floor });
            this.interface.prompt.window.visible = false;
        });
    }

    showMusic(music) {
        if (this.world.client.music.includes(music)) {
            return this.showError('You already have this music.');
        }

        let text = `Would you like to buy ${this.crumbs.igloo_music[music].name} for ${this.crumbs.igloo_music[music].cost} coins.\n You currently have ${this.world.client.coins} coins.`;

        this.showWindow(text, 'dual', () => {
            this.world.network.send('close_sprite', {});

            this.network.send('add_music', { music: music });
            this.interface.prompt.window.visible = false;
        });
    }

    showLocation(location) {
        if (this.world.client.locations.includes(location)) {
            return this.showError('You already have this location.');
        }

        let text = `Would you like to buy ${this.crumbs.locations[location].name} for ${this.crumbs.locations[location].cost} coins.\n You currently have ${this.world.client.coins} coins.`;

        this.showWindow(text, 'dual', () => {
            this.world.network.send('close_sprite', {});

            this.network.send('add_location', { location: location });
            this.interface.prompt.showWindow(null,'loading');
        });
    }

    showWindow(
        text,
        buttonLayout = 'single',
        callback = () => (this.window.visible = false),
        noCallback = () => (this.window.visible = false)
    ) {
        this.handleZIndex("show")
        this.window.show(text, buttonLayout, () => {
            callback()
            this.handleZIndex("hide")
        }, () => {
            noCallback()
            this.handleZIndex("hide")
        });
    }

    showStamp(text, category, rank) {
        //todo: queue stamps
        this.stamp.show(text, category, rank);
    }

    showLoading(text, key, url, callback = () => {}) {
        this.loadingPromptFactory.showLoading(text, key, url, callback);
    }

    hideAll() {
        this.loadingPromptFactory.hideAll();
    }

    showPuffleItem(item, puffleId, parentContainer) {
        this.puffleitem.showItem(item, puffleId, parentContainer);
    }

    showPuffleAdopt(puffleId) {
        this.puffleadopt.showPuffle(puffleId);
    }

    showSecret(item) {
        this.interface.loadWidget('CatalogSecret', false, { item: item, type: 'clothing' });
    }

    showFurnitureSecret(item) {
        this.interface.loadWidget('CatalogSecret', false, { item: item, type: 'furniture' });
    }

    //because i'm too lazy to fix a typo i did throughout the furniture catalog :skull:
    showSecretFurniture(item) {
        this.interface.loadWidget('CatalogSecret', false, { item: item, type: 'furniture' });
    }
}
