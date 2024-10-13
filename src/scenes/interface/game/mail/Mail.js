import BaseContainer from '@scenes/base/BaseContainer'
import MainPostcardHolder from './MainPostcardHolder'

import { Button, Animation, HoverAnimation, Interactive, SimpleButton } from '@components/components'

export const preload = {
    key: 'mail-pack',
    url: 'assets/media/interface/game/mail/mail-pack.json',
    loadString: ['loading', 'mail']
}

/* START OF COMPILED CODE */

export default class Mail extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {MainPostcardHolder} */
        this.cardHolder;
        /** @type {Phaser.GameObjects.Sprite} */
        this.newbtn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.removebtn;
        /** @type {Phaser.GameObjects.Image} */
        this.arrowleft;
        /** @type {Phaser.GameObjects.Image} */
        this.arrowright;
        /** @type {Phaser.GameObjects.Sprite} */
        this.trashbtn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.replyToBuddy;
        /** @type {Phaser.GameObjects.Polygon} */
        this.replyBtn;
        /** @type {Phaser.GameObjects.Text} */
        this.counter;
        /** @type {Phaser.GameObjects.Image} */
        this.nomessagesbtn;
        /** @type {MainPostcardHolder} */
        this.preloadHolder;
        /** @type {Phaser.GameObjects.Text} */
        this.idText;


        // block
        const block = scene.add.rectangle(-12, 10, 128, 90);
        block.scaleX = 12.517257088815434;
        block.scaleY = 12.517257088815434;
        block.alpha = 0.3;
        block.isFilled = true;
        block.fillColor = 0;
        block.strokeColor = 0;
        this.add(block);

        // bg
        const bg = scene.add.image(0, 0, "mail", "bg");
        this.add(bg);

        // badcard
        const badcard = scene.add.image(0, 0, "mail", "badcard");
        badcard.visible = false;
        this.add(badcard);

        // cardHolder
        const cardHolder = new MainPostcardHolder(scene, -504, -311);
        cardHolder.angle = -4;
        this.add(cardHolder);

        // newbtn
        const newbtn = scene.add.sprite(-21, -19, "mail", "newmessagebtn0001");
        newbtn.angle = 19.5;
        this.add(newbtn);

        // removebtn
        const removebtn = scene.add.sprite(-52, 0, "mail", "removebtn0001");
        this.add(removebtn);

        // arrowleft
        const arrowleft = scene.add.image(-553, 21, "mail", "arrowleft");
        this.add(arrowleft);

        // arrowright
        const arrowright = scene.add.image(560, -32, "mail", "arrowright");
        this.add(arrowright);

        // trashbtn
        const trashbtn = scene.add.sprite(0, 0, "mail", "trashbtn0001");
        this.add(trashbtn);

        // _reply
        const _reply = scene.add.container(698, -595);
        this.add(_reply);

        // replyToBuddy
        const replyToBuddy = scene.add.sprite(12, 0, "mail", "replybtn0010");
        replyToBuddy.visible = false;
        _reply.add(replyToBuddy);

        // replyBtn
        const replyBtn = scene.add.polygon(-246, 84, "42.265487648319095 303.91811872156154 -93.12351548515653 11.035785412410196 337.9108618377454 8.272744532135182 344.8184640384329 182.34431998946098");
        replyBtn.setOrigin(0, 0);
        replyBtn.visible = false;
        _reply.add(replyBtn);

        // counter
        const counter = scene.add.text(585, -220, "", {});
        counter.scaleX = 0.5;
        counter.scaleY = 0.5;
        counter.angle = -4;
        counter.setOrigin(0.5, 0);
        counter.text = "MESSAGE\n1 of 1";
        counter.setStyle({ "align": "center", "fixedWidth":400,"fontFamily": "CCComicCrazy", "fontSize": "52px", "fontStyle": "bold italic", "stroke": "#000", "strokeThickness":20});
        this.add(counter);

        // closebtn
        const closebtn = scene.add.image(719, -428, "mail", "closebtn");
        this.add(closebtn);

        // nomessagesbtn
        const nomessagesbtn = scene.add.image(0, 0, "mail", "nomessagesbtn");
        nomessagesbtn.visible = false;
        this.add(nomessagesbtn);

        // preloadHolder
        const preloadHolder = new MainPostcardHolder(scene, -1789, 10);
        this.add(preloadHolder);

        // idText
        const idText = scene.add.text(504, -337, "", {});
        idText.visible = false;
        idText.text = "id: 0";
        idText.setStyle({ "fontFamily": "Burbank Small", "fontSize": "32px" });
        this.add(idText);

        // block (components)
        new Interactive(block);

        // newbtn (components)
        const newbtnAnimation = new Animation(newbtn);
        newbtnAnimation.start = 2;
        newbtnAnimation.repeat = 0;
        newbtnAnimation.autoPlay = false;
        const newbtnSimpleButton = new SimpleButton(newbtn);
        newbtnSimpleButton.hoverCallback = () => this.onNewOver();
        newbtnSimpleButton.hoverOutCallback = () => this.onNewOverOut();
        newbtnSimpleButton.callback = () => this.onNew();
        newbtnSimpleButton.pixelPerfect = true;

        // removebtn (components)
        const removebtnAnimation = new Animation(removebtn);
        removebtnAnimation.start = 2;
        removebtnAnimation.repeat = 0;
        removebtnAnimation.autoPlay = false;
        const removebtnSimpleButton = new SimpleButton(removebtn);
        removebtnSimpleButton.hoverCallback = () => this.onRemoveOver();
        removebtnSimpleButton.hoverOutCallback = () => this.onRemoveOverOut();
        removebtnSimpleButton.callback = () => this.onRemove();
        removebtnSimpleButton.pixelPerfect = true;

        // arrowleft (components)
        const arrowleftButton = new Button(arrowleft);
        arrowleftButton.callback = () => this.onPrev();
        arrowleftButton.activeFrame = true;

        // arrowright (components)
        const arrowrightButton = new Button(arrowright);
        arrowrightButton.callback = () => this.onNext();
        arrowrightButton.activeFrame = true;

        // trashbtn (components)
        const trashbtnAnimation = new Animation(trashbtn);
        trashbtnAnimation.start = 2;
        trashbtnAnimation.repeat = 0;
        trashbtnAnimation.autoPlay = false;
        const trashbtnSimpleButton = new SimpleButton(trashbtn);
        trashbtnSimpleButton.hoverCallback = () => this.onTrashOver();
        trashbtnSimpleButton.hoverOutCallback = () => this.onTrashOverOut();
        trashbtnSimpleButton.callback = () => this.onTrash();
        trashbtnSimpleButton.pixelPerfect = true;

        // replyToBuddy (components)
        const replyToBuddyHoverAnimation = new HoverAnimation(replyToBuddy);
        replyToBuddyHoverAnimation.key = "replybtn";
        replyToBuddyHoverAnimation.checkpoints = "9";
        replyToBuddyHoverAnimation.end = 17;
        replyToBuddyHoverAnimation.createZone = false;

        // replyBtn (components)
        const replyBtnSimpleButton = new SimpleButton(replyBtn);
        replyBtnSimpleButton.callback = () => this.onReplyClick();

        // closebtn (components)
        const closebtnButton = new Button(closebtn);
        closebtnButton.callback = () => this.close();
        closebtnButton.activeFrame = true;

        this.cardHolder = cardHolder;
        this.newbtn = newbtn;
        this.removebtn = removebtn;
        this.arrowleft = arrowleft;
        this.arrowright = arrowright;
        this.trashbtn = trashbtn;
        this.replyToBuddy = replyToBuddy;
        this.replyBtn = replyBtn;
        this.counter = counter;
        this.nomessagesbtn = nomessagesbtn;
        this.preloadHolder = preloadHolder;
        this.idText = idText;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    show(args) {
        super.show()

        this.postcards = []
        this.setPage(0)
        this.hideEverything()
        this.network.send('get_postcards')
        this.world.client.unseen_postcards = 0
        this.interface.main.refreshPostcards()
        this.replyBtn.visible = false
        this.replyToBuddy.visible = false
        this.replyWasVisible = false
    }

    onResult(args) {
        this.postcards = args.postcards
        this.reloadPage()
    }

    onPrev() {
        if(this.idx <= 0) return

        this.setPage(this.idx - 1)
    }

    onNext() {
        if(this.idx + 1 >= this.postcards.length) return

        this.setPage(this.idx + 1)
    }

    validateIdx() {
        if(this.idx >= this.postcards.length) this.idx = this.postcards.length - 1
        if(this.idx < 0) this.idx = 0
    }

    setPage(idx) {
        this.idx = idx
        this.reloadPage()
    }

    reloadPage() {
        this.validateIdx()
        this.updateCounter()

        if(this.postcards.length > 0) this.loadCard()
        else this.showNoMessages(true)
    }

    showNoMessages(visible) {
        this.cardHolder.visible = !visible
        this.arrowleft.visible = !visible
        this.arrowright.visible = !visible
        this.counter.visible = !visible
        this.trashbtn.visible = !visible
        this.removebtn.visible = !visible

        this.nomessagesbtn.visible = visible
    }

    hideEverything() {
        this.showNoMessages(true)

        this.nomessagesbtn.visible = false
    }

    loadCard() {
        this.cardHolder.updatePostcard(this.postcards[this.idx])
        this.preloadCardAtIdx(this.idx + 1)
        this.preloadCardAtIdx(this.idx + 2)
        this.preloadCardAtIdx(this.idx + 3)    

        if(this.postcards[this.idx]) {
            let buddy = this.world.client.buddies.find(obj => obj.id == this.postcards[this.idx].senderId && !this.world.isMascot(obj.id))
            if(buddy && !this.replyWasVisible) {
                this.replyToBuddy.visible = true
                this.replyBtn.visible = true
                this.replyToBuddy.play(this.replyToBuddy.__HoverAnimation.animations[1])
                this.replyWasVisible = true
            } else if(!buddy && this.replyWasVisible) {
                this.replyBtn.visible = false
                this.replyToBuddy.play(this.replyToBuddy.__HoverAnimation.animations[0])
                this.replyToBuddy.once('animationcomplete',() => this.replyToBuddy.visible = false)
                this.replyWasVisible = false
            }
        }

        this.showNoMessages(false)

        this.idText.text = `id: ${this.postcards[this.idx]?.postcardId}`
    }

    onReplyClick() {
        this.interface.loadWidget('MailBook', false, {userId: this.postcards[this.idx].senderId, username: this.postcards[this.idx].username})
    }

    preloadCardAtIdx(idx) {
        //this.preloadHolder.updatePostcard(this.postcards[(idx >= this.postcards.length) ? 0 : idx])
    }

    updateCounter() {
        this.counter.text = `MESSAGES\n${this.idx + 1} of ${this.postcards.length}`
    }

    onNewOver() {
        this.newbtn.__Animation.play()
    }

    onNewOverOut() {
        this.newbtn.__Animation.stop()
    }

    onTrashOver() {
        this.trashbtn.__Animation.play()
    }

    onTrashOverOut() {
        this.trashbtn.__Animation.stop()
    }

    onRemoveOver() {
        this.removebtn.__Animation.play()
    }

    onRemoveOverOut() {
        this.removebtn.__Animation.stop()
    }

    onTrash() {
        let username = this.postcards[this.idx].senderId == this.world.client.penguin.id ? "Club Penguin" : this.postcards[this.idx].username
        this.interface.prompt.showWindow(`Are you sure you want to recycle this\npostcard from ${username}?`, 'dual', () => {
            this.network.send('remove_postcard', {id: this.postcards[this.idx].id})
            this.interface.prompt.window.visible = false
        })    
    }

    onRemove() {
        let username = this.postcards[this.idx].senderId == this.world.client.penguin.id ? "Club Penguin" : this.postcards[this.idx].username
        this.interface.prompt.showWindow(`This will permanently remove all postcards\nfrom ${username}. Do you want to do this?`, 'dual', () => {
            this.network.send('remove_postcards', {sender: this.postcards[this.idx].senderId})
            this.interface.prompt.window.visible = false
        })    
    }

    onNew() {
        this.interface.loadWidget('MailBook', false, {buddy:true})
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
