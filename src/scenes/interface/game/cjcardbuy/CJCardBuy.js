import BaseContainer from '@scenes/base/BaseContainer'

import CardJitsuIconLoader from '@engine/loaders/CardJitsuIconLoader'
import { Button, Animation, Interactive, SimpleButton } from '@components/components'

import CJCard from '@scenes/games/card/CJCard'
import CJCardBuyPack1 from './CJCardBuyPack1'
import CJCardBuyPack2 from './CJCardBuyPack2'
import CJCardBuyPack3 from './CJCardBuyPack3'

export const preload = {
    key: 'cjcardbuy-pack',
    url: 'assets/media/interface/game/cjcardbuy/cjcardbuy-pack.json',
    loadString: ['loading', 'Add New Cards']
}

/* START OF COMPILED CODE */

export default class CJCardBuy extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Container} */
        this.normalStuff;
        /** @type {CJCardBuyPack1} */
        this.pack1anim;
        /** @type {Phaser.GameObjects.Container[]} */
        this.packs;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // bg
        const bg = scene.add.image(0, 0, "cjcardbuy", "bg");
        this.add(bg);

        // normalStuff
        const normalStuff = scene.add.container(0, -433);
        this.add(normalStuff);

        // buybtn
        const buybtn = scene.add.image(344, 644, "cjcardbuy", "buybtn");
        normalStuff.add(buybtn);

        // pack1
        const pack1 = scene.add.container(0, 433);
        normalStuff.add(pack1);

        // c1card
        const c1card = scene.add.image(0, 0, "cjcardbuy", "1card");
        pack1.add(c1card);

        // c1cardfront
        const c1cardfront = scene.add.image(0, 0, "cjcardbuy", "1cardfront");
        pack1.add(c1cardfront);

        // pack2
        const pack2 = scene.add.container(0, 433);
        pack2.visible = false;
        normalStuff.add(pack2);

        // c2card
        const c2card = scene.add.image(0, 0, "cjcardbuy", "2card");
        pack2.add(c2card);

        // c2cardfront
        const c2cardfront = scene.add.image(0, 0, "cjcardbuy", "2cardfront");
        pack2.add(c2cardfront);

        // pack3
        const pack3 = scene.add.container(0, 433);
        pack3.visible = false;
        normalStuff.add(pack3);

        // c5card
        const c5card = scene.add.image(0, 0, "cjcardbuy", "5card");
        pack3.add(c5card);

        // c5cardfront
        const c5cardfront = scene.add.image(0, 0, "cjcardbuy", "5cardfront");
        pack3.add(c5cardfront);

        // btnleft
        const btnleft = scene.add.image(121, 341, "cjcardbuy", "btnleft");
        normalStuff.add(btnleft);

        // btnright
        const btnright = scene.add.image(559, 341, "cjcardbuy", "btnright");
        normalStuff.add(btnright);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(342, 646, 250, 128);
        normalStuff.add(rectangle_1);

        // closebtn
        const closebtn = scene.add.image(712, -3, "main", "grey-button");
        normalStuff.add(closebtn);

        // grey_x
        const grey_x = scene.add.image(712, -5, "main", "grey-x");
        normalStuff.add(grey_x);

        // pack1anim
        const pack1anim = new CJCardBuyPack1(scene, 0, 0);
        this.add(pack1anim);

        // lists
        const packs = [pack1, pack2, pack3];

        // block (components)
        new Interactive(block);

        // buybtn (components)
        const buybtnButton = new Button(buybtn);
        buybtnButton.callback = () => this.onBuy();
        buybtnButton.activeFrame = true;

        // btnleft (components)
        const btnleftSimpleButton = new SimpleButton(btnleft);
        btnleftSimpleButton.callback = () => this.onPrev();

        // btnright (components)
        const btnrightSimpleButton = new SimpleButton(btnright);
        btnrightSimpleButton.callback = () => this.onNext();

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.spriteName = "grey-button";
        closebtnButton.callback = () => this.interface.destroyWidget(this);

        this.normalStuff = normalStuff;
        this.pack1anim = pack1anim;
        this.packs = packs;

        /* START-USER-CTR-CODE */
        this.page = 0

        this.iconLoader = new CardJitsuIconLoader(this.scene)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    show() {
        super.show()
        this.normalStuff.visible = true    
    }

    onPrev() {
        this.page -= 1
        this.reloadPage()
    }

    onNext() {
        this.page += 1
        this.reloadPage()
    }

    onBuy() {
        switch(this.page) {
            case 0:
                this.buyPack1()
                break
            case 1:
                this.buyPack2()
                break
            case 2:
                this.buyPack3()
                break
        }
    }

    reloadPage() {
        this.page = this.page % this.packs.length
        if(this.page < 0) {
            this.page = this.packs.length + this.page
            return this.reloadPage()
        }
        for(let pack of this.packs) {
            pack.visible = false    
        }
        this.packs[this.page].visible = true
    }

    cjCardBuy(args) {
        this.scene.world.network.events.off('cj_card_buy1', this.cjCardBuy, this)

        if (args.error == true) {
            return
        }

        // loop through all cards and dl icon
        for (let card of args.card) {
            this.iconLoader.loadIcon({}, card)            
        }

        this.scene.world.client.coins = args.coins
        this.interface.refreshPlayerCard()

        let card = args.card
        this.playPack1Anim(card[0])
    }

    buyPack1() {
        this.interface.prompt.showWindow("Would you like to buy 1 card for 3000 coins?\n You can get duplicate cards", 'dual',  () => {
            this.scene.world.network.events.on('cj_card_buy1', this.cjCardBuy, this)   
            this.scene.world.network.send("cj_card_buy", {item: 1})         

            this.interface.prompt.window.visible = false
        })
    }

    playPack1Anim(id) {
        this.normalStuff.visible = false

        const pack1anim = new CJCardBuyPack1(this.scene, 0, 0);
        pack1anim.awardedCard = id
        this.add(pack1anim);

        pack1anim.buyPack1()
    }

    cjCardBuy2(args) {
        this.scene.world.network.events.off('cj_card_buy2', this.cjCardBuy2, this)

        if (args.error == true) {
            return
        }

        // loop through all cards and dl icon
        for (let card of args.card) {
            this.iconLoader.loadIcon({}, card)            
        }


        this.scene.world.client.coins = args.coins
        this.interface.refreshPlayerCard()

        let card = args.card
        this.playPack2Anim(card)
    }

    buyPack2() {
        this.interface.prompt.showWindow("Would you like to buy 3 cards for 5000 coins?\n You can get duplicate cards", 'dual',  () => {
            this.scene.world.network.events.on('cj_card_buy2', this.cjCardBuy2, this)   
            this.scene.world.network.send("cj_card_buy", {item: 2})         

            this.interface.prompt.window.visible = false
        })
    }

    playPack2Anim(id) {
        this.normalStuff.visible = false

        const pack1anim = new CJCardBuyPack2(this.scene, 0, 0);
        pack1anim.awardedCard = id
        this.add(pack1anim);

        pack1anim.buyPack1()
    }

    cjCardBuy3(args) {
        this.scene.world.network.events.off('cj_card_buy3', this.cjCardBuy3, this)

        if (args.error == true) {
            return
        }

        // loop through all cards and dl icon
        for (let card of args.card) {
            this.iconLoader.loadIcon({}, card)            
        }

        this.scene.world.client.coins = args.coins
        this.interface.refreshPlayerCard()

        let card = args.card
        this.playPack3Anim(card)
    }

    buyPack3() {
        this.interface.prompt.showWindow("Would you like to buy 5 cards for 10000 coins?\n You can get duplicate cards", 'dual',  () => {
            this.scene.world.network.events.on('cj_card_buy3', this.cjCardBuy3, this)   
            this.scene.world.network.send("cj_card_buy", {item: 3})         

            this.interface.prompt.window.visible = false
        })
    }

    playPack3Anim(id) {
        this.normalStuff.visible = false

        const pack1anim = new CJCardBuyPack3(this.scene, 0, 0);
        pack1anim.awardedCard = id
        this.add(pack1anim);

        pack1anim.buyPack1()
    }

    onAnimFinished() {
        this.normalStuff.visible = true    
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
