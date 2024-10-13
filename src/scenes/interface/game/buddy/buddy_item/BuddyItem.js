import BaseContainer from '@scenes/base/BaseContainer'
import Spinner from '@scenes/interface/menus/load/Spinner'
import PaperDoll from '../../playercard/paperdoll/PaperDoll'

import { Button, SimpleButton, ShowHint } from '@components/components'

import TransformPaperLoader from '@engine/loaders/TransformPaperLoader'

/* START OF COMPILED CODE */

export default class BuddyItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.buddy_item;
        /** @type {Phaser.GameObjects.Image} */
        this.icon;
        /** @type {Phaser.GameObjects.Text} */
        this.username;
        /** @type {Phaser.GameObjects.Polygon} */
        this.favoriteBadgeDisabled;
        /** @type {Phaser.GameObjects.Image} */
        this.favoriteBadge;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.favoriteBtn;
        /** @type {Phaser.GameObjects.Image} */
        this.requestAccept;
        /** @type {Phaser.GameObjects.Container} */
        this.requestBtns;
        /** @type {Phaser.GameObjects.Container} */
        this.transformPaper;
        /** @type {PaperDoll} */
        this.playerDoll;
        /** @type {Phaser.GameObjects.Image} */
        this.mascotHead;
        /** @type {Phaser.GameObjects.Container} */
        this.headshotContain;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.offlineCircle;
        /** @type {Spinner} */
        this.spinner;
        /** @type {Phaser.GameObjects.Image} */
        this.clientIcon;
        /** @type {Phaser.GameObjects.Image} */
        this.mascotIcon;


        // buddy_item
        const buddy_item = scene.add.image(0, 0, "main", "buddy/item");
        this.add(buddy_item);

        // icon
        const icon = scene.add.image(-137, 0, "main", "buddy/icon-offline");
        icon.visible = false;
        this.add(icon);

        // username
        const username = scene.add.text(25, 0, "", {});
        username.setOrigin(0.5, 0.5);
        username.setStyle({ "fixedWidth":270,"fixedHeight":28,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(username);

        // favoriteBadgeDisabled
        const favoriteBadgeDisabled = scene.add.polygon(141.67261473750534, 0.925897621306774, "70.30879534735732 51.752504311908126 71.91316503680616 39.88016860998681 63.57044265167224 30.574824411183613 75.12190441570385 28.168269877010403 81.2185092356093 16.937682050868602 87.72274856917124 28.470389675280103 99.75167520818138 30.2096860373735 91.16560131019207 40.04060557893172 93.09084493753062 51.912941280852976 81.2185092356093 46.61852130567189");
        favoriteBadgeDisabled.setOrigin(2.2573198580215896, 1.045259387070334);
        favoriteBadgeDisabled.isFilled = true;
        favoriteBadgeDisabled.fillColor = 1135260;
        this.add(favoriteBadgeDisabled);

        // favoriteBadge
        const favoriteBadge = scene.add.image(142, 0, "main", "badge/free");
        favoriteBadge.scaleX = 0.5;
        favoriteBadge.scaleY = 0.5;
        favoriteBadge.setOrigin(0.4234746294113895, 0.5);
        favoriteBadge.visible = false;
        favoriteBadge.tintTopLeft = 16777215;
        favoriteBadge.tintTopRight = 16777215;
        favoriteBadge.tintBottomLeft = 16777215;
        favoriteBadge.tintBottomRight = 16777215;
        this.add(favoriteBadge);

        // favoriteBtn
        const favoriteBtn = scene.add.rectangle(142, 5.858610540308234, 40, 40);
        favoriteBtn.setOrigin(0.5, 0.6464652635077058);
        this.add(favoriteBtn);

        // requestBtns
        const requestBtns = scene.add.container(102, 0);
        this.add(requestBtns);

        // requestAccept
        const requestAccept = scene.add.image(9.123368429004089e-13, 6.32450887727073, "main", "emotes/1");
        requestAccept.scaleX = 0.8;
        requestAccept.scaleY = 0.8;
        requestAccept.setOrigin(0.5000000000000248, 0.6718616641986778);
        requestBtns.add(requestAccept);

        // requestDeny
        const requestDeny = scene.add.image(43.000000000000185, 6.324509354107885, "main", "emotes/4");
        requestDeny.scaleX = 0.8;
        requestDeny.scaleY = 0.8;
        requestDeny.setOrigin(0.50000000000001, 0.6718616641986728);
        requestBtns.add(requestDeny);

        // bgCircle_1
        const bgCircle_1 = scene.add.ellipse(-137, 0, 40, 40);
        bgCircle_1.fillColor = 540026;
        bgCircle_1.isStroked = true;
        bgCircle_1.lineWidth = 2;
        this.add(bgCircle_1);

        // bgCircle
        const bgCircle = scene.add.ellipse(-137, 0, 40, 40);
        bgCircle.isFilled = true;
        bgCircle.fillColor = 540026;
        this.add(bgCircle);

        // headshotContain
        const headshotContain = scene.add.container(-137, 15);
        this.add(headshotContain);

        // transformPaper
        const transformPaper = scene.add.container(0, -15);
        transformPaper.scaleX = 0.25;
        transformPaper.scaleY = 0.25;
        headshotContain.add(transformPaper);

        // playerDoll
        const playerDoll = new PaperDoll(scene, 0, 0);
        playerDoll.scaleX = 0.25;
        playerDoll.scaleY = 0.25;
        headshotContain.add(playerDoll);

        // mascotHead
        const mascotHead = scene.add.image(0, -15, "mascot-headshots", "rockhopper");
        mascotHead.scaleX = 0.23;
        mascotHead.scaleY = 0.23;
        mascotHead.visible = false;
        headshotContain.add(mascotHead);

        // offlineCircle
        const offlineCircle = scene.add.ellipse(-137, 0, 40, 40);
        offlineCircle.alpha = 0.75;
        offlineCircle.isFilled = true;
        offlineCircle.fillColor = 540026;
        this.add(offlineCircle);

        // spinner
        const spinner = new Spinner(scene, -137, 0);
        spinner.scaleX = 0.4;
        spinner.scaleY = 0.4;
        spinner.visible = false;
        this.add(spinner);

        // clientIcon
        const clientIcon = scene.add.image(-124, 11, "main", "buddy/icon-player");
        clientIcon.scaleX = 0.6;
        clientIcon.scaleY = 0.6;
        clientIcon.visible = false;
        this.add(clientIcon);

        // mascotIcon
        const mascotIcon = scene.add.image(-124, 12, "main", "buddy/icon-mascot");
        mascotIcon.scaleX = 0.6;
        mascotIcon.scaleY = 0.6;
        mascotIcon.visible = false;
        this.add(mascotIcon);

        // buddy_item (components)
        const buddy_itemButton = new Button(buddy_item);
        buddy_itemButton.spriteName = "buddy/item";
        buddy_itemButton.hoverCallback = () => this.onHover();
        buddy_itemButton.hoverOutCallback = () => this.onOut();
        buddy_itemButton.callback = () => this.onClick();

        // favoriteBtn (components)
        const favoriteBtnSimpleButton = new SimpleButton(favoriteBtn);
        favoriteBtnSimpleButton.hoverCallback = () => this.onFavoriteHover();
        favoriteBtnSimpleButton.hoverOutCallback = () => this.onFavoriteOut();
        favoriteBtnSimpleButton.callback = () => this.onFavoriteClick();
        new ShowHint(favoriteBtn);

        // requestAccept (components)
        const requestAcceptSimpleButton = new SimpleButton(requestAccept);
        requestAcceptSimpleButton.callback = () => this.onAcceptClick();
        requestAcceptSimpleButton.showOutline = true;
        const requestAcceptShowHint = new ShowHint(requestAccept);
        requestAcceptShowHint.text = "Accept";

        // requestDeny (components)
        const requestDenySimpleButton = new SimpleButton(requestDeny);
        requestDenySimpleButton.callback = () => this.onDenyClick();
        requestDenySimpleButton.showOutline = true;
        const requestDenyShowHint = new ShowHint(requestDeny);
        requestDenyShowHint.text = "Deny";

        // playerDoll (prefab fields)
        playerDoll.fadeIn = false;

        this.buddy_item = buddy_item;
        this.icon = icon;
        this.username = username;
        this.favoriteBadgeDisabled = favoriteBadgeDisabled;
        this.favoriteBadge = favoriteBadge;
        this.favoriteBtn = favoriteBtn;
        this.requestAccept = requestAccept;
        this.requestBtns = requestBtns;
        this.transformPaper = transformPaper;
        this.playerDoll = playerDoll;
        this.mascotHead = mascotHead;
        this.headshotContain = headshotContain;
        this.offlineCircle = offlineCircle;
        this.spinner = spinner;
        this.clientIcon = clientIcon;
        this.mascotIcon = mascotIcon;

        /* START-USER-CTR-CODE */
        this.favoriteHint = favoriteBtn.__ShowHint

        this.id
        this.favorite

        this.transformPaperLoader = new TransformPaperLoader(scene,this.transformPaper,() => {})

        //stupid idiot dumb stupid dumb mask
        this.playerMask = this.scene.add.graphics();
                let color = 0x00ffff;
                let thickness = 2;
                let alpha = 1;
                this.playerMask.lineStyle(thickness, color, alpha);
                //this.playerMask.strokeRect(-19, -21, 40, 40); // UNCOMMENT TO VISUALLY SEE THE MASK. Useful to place it.
                this.playerMask.fillStyle(color, 0);
                this.playerMask.fillEllipse(0, -5, 40, 40);
                //this.playerMask.fillEllipse(-137, 0, 40, 40);

        this.tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
        this.tempParentMatrix = new Phaser.GameObjects.Components.TransformMatrix();
        this.headshotContain.setMask(new Phaser.Display.Masks.GeometryMask(this.scene, this.playerMask));

        this.scene.events.on('update',() => {
                // absolute location
                this.playerDoll.getWorldTransformMatrix(this.tempMatrix, this.tempParentMatrix);
                const d = this.tempMatrix.decomposeMatrix();
                this.playerMask.x = d.translateX;
                this.playerMask.y = d.translateY - 10;
        })
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    transformCondition(penguin) {
        if(!penguin || penguin.transform <= 0) return false
        let crumb = this.crumbs.transformations[penguin.transform]
        return penguin.transform > 0 && !crumb.no_paper && !crumb.dont_hide_doll
    }

    setItem(buddy) {
        if (!buddy) {
            return this.clearItem()
        }
        this.visible = true
        this.id = buddy.id

        if(this.parentContainer.listType != 'buddies') {
            this.favoriteBadgeDisabled.visible = false
            this.favoriteBadge.visible = false
            this.favoriteBtn.visible = false
        } else {
            this.favoriteBadgeDisabled.visible = true
            this.favoriteBtn.visible = true
        }
        this.requestBtns.visible = (this.parentContainer.listType == 'buddyRequests')

        for (var x in this.world.mascots) {
            if (this.world.mascots[x].id == buddy.id) buddy.username = this.world.mascots[x].name
        }

        if (buddy.displayName) {
            this.username.text = buddy.displayName
        } else {
            this.username.text = buddy.username
        }

        // this.username.text = buddy.username

        let relationship = this.world.getRelationship(buddy.id)
        //let texture = `buddy/icon-${relationship}`

        this.offlineCircle.visible = (relationship == 'offline')
        this.clientIcon.visible = (this.id == this.world.client.penguin.id)

        this.mascotIcon.visible = (relationship == 'mascot')
        this.username.setColor((relationship == 'mascot') ? '#FFF836' : '#FFFFFF')
        let mascot = false
        if(relationship == 'mascot') {
            let frame = buddy.username.toLowerCase().replace(/ /g,"_")
            if(this.world.textures.get('mascot-headshots').has(frame)) {
                mascot = true
                this.mascotHead.setFrame(frame)
            }
        }
        this.mascotHead.visible = mascot

        if(!mascot && this.transformCondition(buddy.items)) {
            let transformCrumb = this.crumbs.transformations[buddy.items?.transform]
            this.transformPaper.visible = true
            this.playerDoll.visible = false
            this.transformPaperLoader.loadItem(buddy.items?.transform, false, transformCrumb.paper_colors, buddy.color)
        } else {
            let transformCrumb = this.crumbs.transformations[buddy.items?.transform]
            if(buddy.items?.transform > 0 && transformCrumb.paper_colors) {
                this.transformPaperLoader.loadItem(buddy.items?.transform, false, true, buddy.items.color)
                this.transformPaper.visible = true
            } else {
                this.transformPaper.visible = false
            }
        }

        this.favorite = buddy.favorite
        if(this.favorite == true) {
            this.favoriteBadge.visible = true
            this.favoriteHint.text = 'Unfavorite'
        } else {
            this.favoriteBadge.visible = false
            this.favoriteHint.text = 'Favorite'
        }

        //Load paperdoll
        if(!mascot && !this.transformCondition(buddy.items)) {
            if(this.parentContainer.listType == 'room') {
                this.setPaperDoll(buddy)
            } else if (buddy.items === null || typeof buddy.items === 'undefined' || Object.keys(buddy.items).length === 0) {
                // Items have not been loaded for this buddy, so get them
                this.playerDoll.visible = false
                this.spinner.start()
                this.playerDoll.removeItems()
                this.network.send('get_buddy', { id: this.id, type: this.parentContainer.listType })
            } else {
                this.setPaperDoll(buddy.items)
            }
        }

        //Set request as seen
        if(this.requestBtns.visible == true && this.world.client.buddyRequests.find(obj => obj.id == buddy.id).seen != true) {
            this.network.send('buddy_request_seen', { id: this.id })
            let foundIndex = this.world.client.buddyRequests.findIndex(obj => obj.id == buddy.id)
            this.world.client.buddyRequests[foundIndex].seen = 1
        }
    }

    clearItem() {
        this.id = null
        this.username.text = ''

        this.icon.setTexture('main', 'buddy/icon-offline')
        this.visible = false
    }

    setPaperDoll(penguin) {
        this.spinner.stop()
        this.playerDoll.visible = true
        this.playerDoll.loadDoll(penguin,false,true,true)
    }

    onClick() {
        if (!this.id) {
            return
        }

        if (this.parentContainer.listType == 'ignores') {
            this.showRemoveIgnore()
            return
        }

        this.interface.showCard(this.id)
    }

    showRemoveIgnore() {
        let text = `Would you like to remove ${this.username.text}\nfrom your ignore list?`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('ignore_remove', { id: this.id })

            this.interface.prompt.showWindow('Done', 'single')
        })
    }

    onFavoriteClick() {
        this.network.send('buddy_favorite',{ id: this.id })
    }

    onHover() {
        if(this.favorite == false) {
            this.favoriteBadgeDisabled.visible = true
        }
    }

    onOut() {
        if(this.favorite == false) {
            this.favoriteBadgeDisabled.visible = false
        }
    }

    onFavoriteHover() {
        if(this.favorite == false) {
            this.favoriteBadgeDisabled.visible = true
        }
        this.buddy_item.setFrame('buddy/item-hover')
    }

    onFavoriteOut() {
        if(this.favorite == false) {
            this.favoriteBadgeDisabled.visible = false
        }
        this.buddy_item.setFrame('buddy/item')
    }

    onAcceptClick() {
        this.network.send('buddy_accept', { id: this.id })
    }

    onDenyClick() {
        this.network.send('buddy_reject', { id: this.id })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
