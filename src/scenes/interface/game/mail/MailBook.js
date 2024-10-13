import BaseContainer from '@scenes/base/BaseContainer'
import PostcardIcon from './PostcardIcon'
import PostcardSender from './PostcardSender'
import MailbookUserList from './user_list/MailbookUserList';

import { Button, Animation, Interactive, SimpleButton } from '@components/components'

export const preload = {
    key: 'mail-book-pack',
    url: 'assets/media/interface/game/mail/book/mail-book-pack.json',
    loadString: ['loading', 'Postcard Catalog']
}

/* START OF COMPILED CODE */

export default class MailBook extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.categoryTitle;
        /** @type {PostcardIcon} */
        this.container_1;
        /** @type {PostcardIcon} */
        this.container_2;
        /** @type {PostcardIcon} */
        this.container_3;
        /** @type {PostcardIcon} */
        this.container_4;
        /** @type {PostcardIcon} */
        this.container_5;
        /** @type {PostcardIcon} */
        this.container_6;
        /** @type {Phaser.GameObjects.Container} */
        this.mainview;
        /** @type {MailbookUserList} */
        this.userList;
        /** @type {Phaser.GameObjects.Container} */
        this.buddy;
        /** @type {PostcardSender} */
        this.sendConfirmation;
        /** @type {PostcardIcon[]} */
        this.cardIcons;


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
        const bg = scene.add.image(-52, 2, "mail-book-bg");
        this.add(bg);

        // mainview
        const mainview = scene.add.container(-660, -320);
        this.add(mainview);

        // categoryTitle
        const categoryTitle = scene.add.text(479, 9, "", {});
        categoryTitle.setOrigin(0, 0.5);
        categoryTitle.text = "Activities";
        categoryTitle.setStyle({ "color": "#333333", "fontFamily": "Burbank Small", "fontSize": "40px", "stroke": "#333333" });
        mainview.add(categoryTitle);

        // mail_book_header
        const mail_book_header = scene.add.image(745, 13, "mail-book-header");
        mainview.add(mail_book_header);

        // container_1
        const container_1 = new PostcardIcon(scene, 298, 205);
        mainview.add(container_1);

        // container_2
        const container_2 = new PostcardIcon(scene, 717, 207);
        mainview.add(container_2);

        // container_3
        const container_3 = new PostcardIcon(scene, 1114, 209);
        mainview.add(container_3);

        // container_4
        const container_4 = new PostcardIcon(scene, 298, 511);
        mainview.add(container_4);

        // container_5
        const container_5 = new PostcardIcon(scene, 717, 513);
        mainview.add(container_5);

        // container_6
        const container_6 = new PostcardIcon(scene, 1114, 515);
        mainview.add(container_6);

        // pageCurl04
        const pageCurl04 = scene.add.image(1274, 601, "stampbook-inside", "pageCurl04");
        mainview.add(pageCurl04);

        // pageCurl03
        const pageCurl03 = scene.add.image(0, 602, "stampbook-inside", "pageCurl03");
        pageCurl03.flipX = true;
        mainview.add(pageCurl03);

        // buddy
        const buddy = scene.add.container(-594, -361);
        buddy.visible = false;
        this.add(buddy);

        // userList
        const userList = new MailbookUserList(scene, 1051, 349);
        buddy.add(userList);

        // send
        const send = scene.add.image(622, 294, "mail-book-buddy", "send");
        send.setOrigin(0.5043478260869565, 0.5074626865671642);
        buddy.add(send);

        // penguin
        const penguin = scene.add.image(175, 479, "mail-book-buddy", "penguin");
        penguin.setOrigin(0.5012722646310432, 0.5011337868480725);
        buddy.add(penguin);

        // separator4
        const separator4 = scene.add.image(611, 349, "mail-book-buddy", "separator/1");
        separator4.setOrigin(0.501187648456057, 0.5);
        buddy.add(separator4);

        // separator3
        const separator3 = scene.add.image(229, 188, "mail-book-buddy", "separator/3");
        separator3.setOrigin(0.5, 0.5081967213114754);
        buddy.add(separator3);

        // sendText3
        const sendText3 = scene.add.text(420, 339, "", {});
        sendText3.text = "Send to:";
        sendText3.setStyle({ "align": "center", "color": "#333333", "fixedWidth":380,"fontFamily": "CCFaceFront", "fontSize": "56px", "fontStyle": "italic" });
        buddy.add(sendText3);

        // coinText2
        const coinText2 = scene.add.text(251, 158, "", {});
        coinText2.text = "10";
        coinText2.setStyle({ "color": "#000000", "fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold" });
        buddy.add(coinText2);

        // sendText2
        const sendText2 = scene.add.text(11, 150, "", {});
        sendText2.text = "Buy and send\npostcards for";
        sendText2.setStyle({ "color": "#000000", "fontFamily": "Burbank Small", "fontSize": "30px" });
        buddy.add(sendText2);

        // postcardsText2
        const postcardsText2 = scene.add.text(127, 48, "", {});
        postcardsText2.setOrigin(0, 0.5);
        postcardsText2.text = "Postcards";
        postcardsText2.setStyle({ "color": "#000000", "fixedWidth":400,"fontFamily": "Burbank Small", "fontSize": "55px", "fontStyle": "bold" });
        buddy.add(postcardsText2);

        // buttons_close
        const buttons_close = scene.add.image(617, -320, "stampbook-inside", "pageCurlExit");
        buttons_close.scaleY = -1;
        this.add(buttons_close);

        // sendConfirmation
        const sendConfirmation = new PostcardSender(scene, 0, 0);
        sendConfirmation.visible = false;
        this.add(sendConfirmation);

        // lists
        const cardIcons = [container_1, container_2, container_3, container_4, container_5, container_6];

        // block (components)
        new Interactive(block);

        // pageCurl04 (components)
        const pageCurl04Button = new Button(pageCurl04);
        pageCurl04Button.spriteName = "pageCurl04";
        pageCurl04Button.callback = () => {this.onNext()};

        // pageCurl03 (components)
        const pageCurl03Button = new Button(pageCurl03);
        pageCurl03Button.spriteName = "pageCurl03";
        pageCurl03Button.callback = () => this.onPrev();

        // buttons_close (components)
        const buttons_closeButton = new Button(buttons_close);
        buttons_closeButton.spriteName = "pageCurlExit";
        buttons_closeButton.callback = () => this.onClose();
        buttons_closeButton.activeFrame = true;
        buttons_closeButton.pixelPerfect = true;

        this.categoryTitle = categoryTitle;
        this.container_1 = container_1;
        this.container_2 = container_2;
        this.container_3 = container_3;
        this.container_4 = container_4;
        this.container_5 = container_5;
        this.container_6 = container_6;
        this.mainview = mainview;
        this.userList = userList;
        this.buddy = buddy;
        this.sendConfirmation = sendConfirmation;
        this.cardIcons = cardIcons;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    show(args) {
        super.show()

        this.sendConfirmation.visible = false

        if(args.buddy) {
            this.showBuddy()
        } else {
            this.showMainView(args.userId, args.username)
        }
    }

    addPage(title, content) {
        let entries = Object.entries(content)

        this.addPageEntries(title, entries)
    }

    addPageEntries(title, entries) {
        if(entries.length <= 0) return

        let page = {
            "title": title,
            "content": Object.fromEntries(entries.slice(0,6))
        }
        if(title == "PSA Recruitment" && !this.world.client.hasItem(800)) return
        this.pages.push(page)
        this.addPageEntries(title, entries.slice(6))
    }

    loadCrumbs() {
        this.pages = []

        for(let [title, content] of Object.entries(this.world.crumbs.postcards)) {
            let contentCopy = {...content}
            //delete contentCopy["order_position"]
            this.addPage(title, contentCopy)
        }
    }

    reloadPage() {
        this.loadPage(this.page)    
    }

    get pageObj() {
        return this.pages[this.page]    
    }

    showBuddy() {
        this.mainview.visible = false

        this.buddy.visible = true
        this.userList.showPage()
    }

    showMainView(userId, username) {
        this.userId = userId
        this.username = username

        this.buddy.visible = false
        this.mainview.visible = true

        this.loadCrumbs()
        this.page = 0
        this.reloadPage()
    }

    loadPage(page) {
        this.page = page

        let content = Object.entries(this.pageObj.content)
        for(let [idx, icon] of Object.entries(this.cardIcons)) {
            if(idx >= content.length) {
                icon.visible = false
                continue
            }
            icon.visible = true

            icon.updatePostcard(content[idx][0], content[idx][1])
        }

        this.categoryTitle.text = this.pageObj.title
    }

    onNext() {
        if(this.page + 1 >= this.pages.length) return

        this.loadPage(this.page + 1)
    }

    onPrev() {
        if(this.page <= 0) return

        this.loadPage(this.page - 1)
    }

    onClose() {
        this.interface.destroyWidget(this)    
    }

    send(id) {
        this.sendConfirmation.showCard(id, this.userId, this.username)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
