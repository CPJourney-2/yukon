import BaseContainer from '@scenes/base/BaseContainer'

import { Button, DraggableContainer, ShowHint, Nineslice, Threeslice, Interactive } from '@components/components'

import BuddyItem from './buddy_item/BuddyItem'
import PaperDoll from '../playercard/paperdoll/PaperDoll'
import Spinner from '@scenes/interface/menus/load/Spinner'
import InputText from 'phaser3-rex-plugins/plugins/inputtext.js'

/* START OF COMPILED CODE */

export default class Buddy extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {Phaser.GameObjects.Container} */
        this.scrollBar;
        /** @type {Phaser.GameObjects.Text} */
        this.total;
        /** @type {Phaser.GameObjects.Text} */
        this.requestCount;
        /** @type {Phaser.GameObjects.Container} */
        this.notificationDot;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.put_input_here;
        /** @type {Phaser.GameObjects.Text} */
        this.dummyinput;
        /** @type {Phaser.GameObjects.Container} */
        this.text_container;
        /** @type {Phaser.GameObjects.Container} */
        this.noRequests;
        /** @type {Phaser.GameObjects.Container} */
        this.noFriends;
        /** @type {Phaser.GameObjects.Container} */
        this.noIgnores;
        /** @type {Phaser.GameObjects.Container} */
        this.cantSearchYourself;
        /** @type {Phaser.GameObjects.Container} */
        this.searchResultNull;
        /** @type {PaperDoll} */
        this.searchResultDoll;
        /** @type {Phaser.GameObjects.Text} */
        this.searchResultName;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.searchBtn;
        /** @type {Phaser.GameObjects.Text} */
        this.searchBtnText;
        /** @type {Phaser.GameObjects.Container} */
        this.searchResult;
        /** @type {Phaser.GameObjects.Text} */
        this.mascotText;
        /** @type {Phaser.GameObjects.Image} */
        this.mascotPreview;
        /** @type {Phaser.GameObjects.Container} */
        this.mascotResult;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.purgeblock;
        /** @type {Spinner} */
        this.spinner;
        /** @type {BuddyItem[]} */
        this.items;
        /** @type {Phaser.GameObjects.Container[]} */
        this.infos;


        // card_bg
        const card_bg = scene.add.nineslice(0, 0, "main", "card-bg", 464, 700, 56, 71, 98, 60);
        this.add(card_bg);

        // text
        const text = scene.add.text(0, -257, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "Your Friends";
        text.setStyle({ "align": "center", "color": "#000000", "fixedWidth":420,"fixedHeight":38,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(text);

        // x_button
        const x_button = scene.add.image(177, -258, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(177, -260, "main", "blue-x");
        this.add(blue_x);

        // scrollBar
        const scrollBar = scene.add.container(177, -196);
        scrollBar.visible = false;
        this.add(scrollBar);

        // buddy_scroll
        const buddy_scroll = scene.add.image(0, 189, "main", "buddy/scroll");
        scrollBar.add(buddy_scroll);

        // down_button
        const down_button = scene.add.image(0, 370, "main", "blue-button");
        scrollBar.add(down_button);

        // up_button
        const up_button = scene.add.image(0, 2, "main", "blue-button");
        scrollBar.add(up_button);

        // blue_arrow_1
        const blue_arrow_1 = scene.add.image(0, 368, "main", "blue-arrow");
        blue_arrow_1.flipY = true;
        scrollBar.add(blue_arrow_1);

        // blue_arrow
        const blue_arrow = scene.add.image(0, 0, "main", "blue-arrow");
        scrollBar.add(blue_arrow);

        // buddy_item_7
        const buddy_item_7 = new BuddyItem(scene, -26, 173);
        buddy_item_7.visible = false;
        this.add(buddy_item_7);

        // buddy_item_6
        const buddy_item_6 = new BuddyItem(scene, -26, 121);
        buddy_item_6.visible = false;
        this.add(buddy_item_6);

        // buddy_item_5
        const buddy_item_5 = new BuddyItem(scene, -26, 69);
        buddy_item_5.visible = false;
        this.add(buddy_item_5);

        // buddy_item_4
        const buddy_item_4 = new BuddyItem(scene, -26, 17);
        buddy_item_4.visible = false;
        this.add(buddy_item_4);

        // buddy_item_3
        const buddy_item_3 = new BuddyItem(scene, -26, -35);
        buddy_item_3.visible = false;
        this.add(buddy_item_3);

        // buddy_item_2
        const buddy_item_2 = new BuddyItem(scene, -26, -87);
        buddy_item_2.visible = false;
        this.add(buddy_item_2);

        // buddy_item_1
        const buddy_item_1 = new BuddyItem(scene, -26, -139);
        buddy_item_1.visible = false;
        this.add(buddy_item_1);

        // buddy_item
        const buddy_item = new BuddyItem(scene, -26, -191);
        buddy_item.visible = false;
        this.add(buddy_item);

        // buddy_button
        const buddy_button = scene.add.image(-90, 294, "main", "blue-button");
        this.add(buddy_button);

        // profile_button
        const profile_button = scene.add.image(-30, 294, "main", "blue-button");
        this.add(profile_button);

        // requests_button
        const requests_button = scene.add.image(31, 294, "main", "blue-button");
        this.add(requests_button);

        // igloo_button
        const igloo_button = scene.add.image(92, 294, "main", "blue-button");
        this.add(igloo_button);

        // buddies_icon_disabled
        const buddies_icon_disabled = scene.add.image(-90, 292, "main", "buddies-icon");
        this.add(buddies_icon_disabled);

        // help_icon_disabled
        const help_icon_disabled = scene.add.image(-30, 292, "main", "online-icon");
        this.add(help_icon_disabled);

        // mail_icon
        const mail_icon = scene.add.image(31, 292, "main", "mail-icon");
        this.add(mail_icon);

        // igloo_icon_disabled
        const igloo_icon_disabled = scene.add.image(92, 292, "main", "ignore-icon");
        this.add(igloo_icon_disabled);

        // total
        const total = scene.add.text(-178, 310, "", {});
        total.setOrigin(0.5, 0.5);
        total.text = "999";
        total.setStyle({ "align": "right", "color": "#003366", "fixedWidth":100,"fixedHeight":64,"fontFamily": "Arial Narrow", "fontSize": "24px" });
        this.add(total);

        // chat_box
        const chat_box = scene.add.nineslice(-6, 233, "main", "chat-box", 380, 0, 115, 67, 0, 0);
        this.add(chat_box);

        // search_button
        const search_button = scene.add.image(177, 233, "main", "blue-button");
        this.add(search_button);

        // ellipse_1
        const ellipse_1 = scene.add.ellipse(179, 228, 20, 20);
        ellipse_1.fillColor = 2719949;
        ellipse_1.isStroked = true;
        ellipse_1.lineWidth = 3;
        this.add(ellipse_1);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(169, 239, 10, 4);
        rectangle_1.angle = -45;
        rectangle_1.isFilled = true;
        this.add(rectangle_1);

        // notificationDot
        const notificationDot = scene.add.container(46, 276);
        this.add(notificationDot);

        // requestRing
        const requestRing = scene.add.ellipse(0, 1, 25, 25);
        requestRing.isFilled = true;
        requestRing.fillColor = 16737792;
        requestRing.isStroked = true;
        requestRing.strokeColor = 13382451;
        requestRing.lineWidth = 2;
        notificationDot.add(requestRing);

        // requestCount
        const requestCount = scene.add.text(0, 0, "", {});
        requestCount.setOrigin(0.5, 0.5);
        requestCount.text = "99";
        requestCount.setStyle({ "align": "right", "fontFamily": "Burbank Small", "fontSize": "15px", "fontStyle": "bold" });
        notificationDot.add(requestCount);

        // text_container
        const text_container = scene.add.container(-20, 234);
        this.add(text_container);

        // put_input_here
        const put_input_here = scene.add.rectangle(0, 0, 310, 40);
        text_container.add(put_input_here);

        // dummyinput
        const dummyinput = scene.add.text(0, 0, "", {});
        dummyinput.setOrigin(0.5, 0.5);
        dummyinput.visible = false;
        dummyinput.text = "Search for a friend";
        dummyinput.setStyle({ "fixedWidth":310,"fontFamily": "Arial", "fontSize": "24px" });
        text_container.add(dummyinput);

        // noRequests
        const noRequests = scene.add.container(-15, -144);
        noRequests.visible = false;
        this.add(noRequests);

        // text_1r
        const text_1r = scene.add.text(18, 70, "", {});
        text_1r.setOrigin(0.5, 0.5);
        text_1r.text = "You have no friend requests.";
        text_1r.setStyle({ "align": "center", "fixedWidth":420,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        noRequests.add(text_1r);

        // text_2r
        const text_2r = scene.add.text(18, 175, "", {});
        text_2r.setOrigin(0.5, 0.5);
        text_2r.text = "When someone sends you a friend request, it will appear here, where you can either accept or deny it.";
        text_2r.setStyle({ "align": "center", "fixedWidth":420,"fontFamily": "Burbank Small", "fontSize": "26px" });
        text_2r.setLineSpacing(8);
        text_2r.setWordWrapWidth(400);
        noRequests.add(text_2r);

        // buddy_button_2e
        const buddy_button_2e = scene.add.image(16, -13, "main", "buddy-button");
        noRequests.add(buddy_button_2e);

        // noFriends
        const noFriends = scene.add.container(-15, -144);
        noFriends.visible = false;
        this.add(noFriends);

        // text_1
        const text_1 = scene.add.text(18, -13, "", {});
        text_1.setOrigin(0.5, 0.5);
        text_1.text = "You have no friends.";
        text_1.setStyle({ "align": "center", "fixedWidth":420,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        noFriends.add(text_1);

        // text_2
        const text_2 = scene.add.text(18, 122, "", {});
        text_2.setOrigin(0.5, 0.5);
        text_2.text = "Click the         button on someone's player card to send them a friend request, or search for someone's username in the searchbar below!";
        text_2.setStyle({ "align": "center", "fixedWidth":420,"fontFamily": "Burbank Small", "fontSize": "26px" });
        text_2.setLineSpacing(8);
        text_2.setWordWrapWidth(400);
        noFriends.add(text_2);

        // buddy_button_1
        const buddy_button_1 = scene.add.image(9, 46, "main", "blue-button");
        buddy_button_1.scaleX = 0.8;
        buddy_button_1.scaleY = 0.8;
        noFriends.add(buddy_button_1);

        // buddy_icon
        const buddy_icon = scene.add.image(9, 44, "main", "buddies-icon");
        buddy_icon.scaleX = 0.8;
        buddy_icon.scaleY = 0.8;
        noFriends.add(buddy_icon);

        // noIgnores
        const noIgnores = scene.add.container(-15, -144);
        noIgnores.visible = false;
        this.add(noIgnores);

        // text_1221
        const text_1221 = scene.add.text(18, -1, "", {});
        text_1221.setOrigin(0.5, 0.5);
        text_1221.text = "You have no one ignored.";
        text_1221.setStyle({ "align": "center", "fixedWidth":420,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        noIgnores.add(text_1221);

        // text_34
        const text_34 = scene.add.text(17, 122, "", {});
        text_34.setOrigin(0.5, 0.5);
        text_34.text = "If someone is bothering you, you can click the         button on their player card to hide their messages.";
        text_34.setStyle({ "align": "center", "fixedWidth":420,"fontFamily": "Burbank Small", "fontSize": "26px" });
        text_34.setLineSpacing(8);
        text_34.setWordWrapWidth(400);
        noIgnores.add(text_34);

        // buddy_button_
        const buddy_button_ = scene.add.image(31, 104, "main", "blue-button");
        buddy_button_.scaleX = 0.8;
        buddy_button_.scaleY = 0.8;
        noIgnores.add(buddy_button_);

        // ign_icon
        const ign_icon = scene.add.image(31, 102, "main", "ignore-icon");
        ign_icon.scaleX = 0.8;
        ign_icon.scaleY = 0.8;
        noIgnores.add(ign_icon);

        // cantSearchYourself
        const cantSearchYourself = scene.add.container(-21, -152);
        cantSearchYourself.visible = false;
        this.add(cantSearchYourself);

        // text_2ree
        const text_2ree = scene.add.text(22, 86, "", {});
        text_2ree.setOrigin(0.5, 0.5);
        text_2ree.text = "Oops! You can't add yourself to your own friends list.";
        text_2ree.setStyle({ "align": "center", "fixedWidth":420,"fontFamily": "Burbank Small", "fontSize": "26px" });
        text_2ree.setLineSpacing(8);
        text_2ree.setWordWrapWidth(400);
        cantSearchYourself.add(text_2ree);

        // searchResultNull
        const searchResultNull = scene.add.container(-14, -144);
        searchResultNull.visible = false;
        this.add(searchResultNull);

        // text_2re
        const text_2re = scene.add.text(18, 87, "", {});
        text_2re.setOrigin(0.5, 0.5);
        text_2re.text = "There were no penguins found matching your search. Check if your search was spelled correctly.";
        text_2re.setStyle({ "align": "center", "fixedWidth":420,"fontFamily": "Burbank Small", "fontSize": "26px" });
        text_2re.setLineSpacing(8);
        text_2re.setWordWrapWidth(400);
        searchResultNull.add(text_2re);

        // searchResult
        const searchResult = scene.add.container(-2, -20);
        searchResult.visible = false;
        this.add(searchResult);

        // window
        const window = scene.add.nineslice(4, 5, "prompt", "window", 400, 410, 50, 45, 41, 44);
        window.tintFill = true;
        window.tint = 1529750;
        searchResult.add(window);

        // searchResultDoll
        const searchResultDoll = new PaperDoll(scene, 1, -78);
        searchResultDoll.scaleX = 0.7;
        searchResultDoll.scaleY = 0.7;
        searchResult.add(searchResultDoll);

        // searchResultName
        const searchResultName = scene.add.text(-1, 93, "", {});
        searchResultName.setOrigin(0.5, 0.5);
        searchResultName.text = "Penguin Name";
        searchResultName.setStyle({ "align": "center", "fixedWidth":420,"fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold" });
        searchResult.add(searchResultName);

        // searchBtn
        const searchBtn = scene.add.nineslice(1, 152, "prompt", "window-button", 500, 100, 36, 31, 32, 32);
        searchBtn.scaleX = 0.6;
        searchBtn.scaleY = 0.6;
        searchBtn.setOrigin(0.5, 0.5047619047619047);
        searchResult.add(searchBtn);

        // searchBtnText
        const searchBtnText = scene.add.text(3, 151, "", {});
        searchBtnText.setOrigin(0.5, 0.5);
        searchBtnText.text = "Send Friend Request";
        searchBtnText.setStyle({ "align": "center", "fixedWidth":400,"fontFamily": "Burbank Small", "fontSize": "26px", "fontStyle": "bold" });
        searchBtnText.setWordWrapWidth(350);
        searchResult.add(searchBtnText);

        // mascotResult
        const mascotResult = scene.add.container(-3, -108);
        mascotResult.visible = false;
        this.add(mascotResult);

        // window_1
        const window_1 = scene.add.nineslice(5, 92, "prompt", "window", 400, 410, 50, 45, 41, 44);
        window_1.tintFill = true;
        window_1.tint = 1529750;
        mascotResult.add(window_1);

        // mascotText
        const mascotText = scene.add.text(5, 113.94100093841553, "", {});
        mascotText.setOrigin(0.5, 0);
        mascotText.text = "Rockhopper is sailing the seven seas. To add him as a friend, you must meet him on the island.";
        mascotText.setStyle({ "align": "center", "fixedWidth":360,"fontFamily": "Burbank Small", "fontSize": "26px" });
        mascotText.setLineSpacing(8);
        mascotText.setWordWrapWidth(360);
        mascotResult.add(mascotText);

        // mascotPreview
        const mascotPreview = scene.add.image(2, 2, "mascot-headshots", "rockhopper");
        mascotResult.add(mascotPreview);

        // purgeblock
        const purgeblock = scene.add.rectangle(-1, -13, 128, 128);
        purgeblock.scaleX = 3.2875303892088206;
        purgeblock.scaleY = 3.3475102613972547;
        purgeblock.visible = false;
        purgeblock.isFilled = true;
        purgeblock.fillColor = 2719949;
        this.add(purgeblock);

        // spinner
        const spinner = new Spinner(scene, 0, -40);
        spinner.visible = false;
        this.add(spinner);

        // lists
        const items = [buddy_item, buddy_item_1, buddy_item_2, buddy_item_3, buddy_item_4, buddy_item_5, buddy_item_6, buddy_item_7];
        const infos = [mascotResult, searchResult, searchResultNull, noIgnores, noFriends, noRequests, cantSearchYourself];

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = card_bg;

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.hide();
        x_buttonButton.activeFrame = true;

        // down_button (components)
        const down_buttonButton = new Button(down_button);
        down_buttonButton.spriteName = "blue-button";
        down_buttonButton.callback = () => this.nextPage();
        down_buttonButton.activeFrame = true;

        // up_button (components)
        const up_buttonButton = new Button(up_button);
        up_buttonButton.spriteName = "blue-button";
        up_buttonButton.callback = () => this.prevPage();
        up_buttonButton.activeFrame = true;

        // buddy_button (components)
        const buddy_buttonButton = new Button(buddy_button);
        buddy_buttonButton.spriteName = "blue-button";
        buddy_buttonButton.hoverCallback = () => this.hideSearch();
        buddy_buttonButton.hoverOutCallback = () => this.showSearch();
        buddy_buttonButton.callback = () => this.switchList('buddies', 'Your Friends');
        buddy_buttonButton.activeFrame = true;
        const buddy_buttonShowHint = new ShowHint(buddy_button);
        buddy_buttonShowHint.text = "buddy_hint";

        // profile_button (components)
        const profile_buttonButton = new Button(profile_button);
        profile_buttonButton.spriteName = "blue-button";
        profile_buttonButton.hoverCallback = () => this.hideSearch();
        profile_buttonButton.hoverOutCallback = () => this.showSearch();
        profile_buttonButton.callback = () => this.switchList('room', 'Users in Room');
        profile_buttonButton.activeFrame = true;
        const profile_buttonShowHint = new ShowHint(profile_button);
        profile_buttonShowHint.text = "online_hint";

        // requests_button (components)
        const requests_buttonButton = new Button(requests_button);
        requests_buttonButton.spriteName = "blue-button";
        requests_buttonButton.hoverCallback = () => this.hideSearch();
        requests_buttonButton.hoverOutCallback = () => this.showSearch();
        requests_buttonButton.callback = () => this.switchList('buddyRequests', 'Friend Requests');
        requests_buttonButton.activeFrame = true;
        const requests_buttonShowHint = new ShowHint(requests_button);
        requests_buttonShowHint.text = "requests_hint";

        // igloo_button (components)
        const igloo_buttonButton = new Button(igloo_button);
        igloo_buttonButton.spriteName = "blue-button";
        igloo_buttonButton.hoverCallback = () => this.hideSearch();
        igloo_buttonButton.hoverOutCallback = () => this.showSearch();
        igloo_buttonButton.callback = () => this.switchList('ignores', 'Ignore List');
        igloo_buttonButton.activeFrame = true;
        const igloo_buttonShowHint = new ShowHint(igloo_button);
        igloo_buttonShowHint.text = "ignore_hint";

        // search_button (components)
        const search_buttonButton = new Button(search_button);
        search_buttonButton.spriteName = "blue-button";
        search_buttonButton.callback = () => this.onSearch();
        search_buttonButton.activeFrame = true;

        // buddy_button_1 (components)
        const buddy_button_1Button = new Button(buddy_button_1);
        buddy_button_1Button.spriteName = "blue-button";
        buddy_button_1Button.activeFrame = true;

        // buddy_button_ (components)
        const buddy_button_Button = new Button(buddy_button_);
        buddy_button_Button.spriteName = "blue-button";
        buddy_button_Button.activeFrame = true;

        // searchBtn (components)
        const searchBtnButton = new Button(searchBtn);
        searchBtnButton.spriteName = "window-button";
        searchBtnButton.callback = () => this.searchRequestSend();
        searchBtnButton.activeFrame = true;

        // purgeblock (components)
        new Interactive(purgeblock);

        this.text = text;
        this.scrollBar = scrollBar;
        this.total = total;
        this.requestCount = requestCount;
        this.notificationDot = notificationDot;
        this.put_input_here = put_input_here;
        this.dummyinput = dummyinput;
        this.text_container = text_container;
        this.noRequests = noRequests;
        this.noFriends = noFriends;
        this.noIgnores = noIgnores;
        this.cantSearchYourself = cantSearchYourself;
        this.searchResultNull = searchResultNull;
        this.searchResultDoll = searchResultDoll;
        this.searchResultName = searchResultName;
        this.searchBtn = searchBtn;
        this.searchBtnText = searchBtnText;
        this.searchResult = searchResult;
        this.mascotText = mascotText;
        this.mascotPreview = mascotPreview;
        this.mascotResult = mascotResult;
        this.purgeblock = purgeblock;
        this.spinner = spinner;
        this.items = items;
        this.infos = infos;

        /* START-USER-CTR-CODE */
        this._dontHideInputs = true

        this.listType = 'buddies'
        this.page = 1
        this.pageSize = 8
        this.friendSearch

        this.showPage()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get penguins() {
        return this[this.listType]
    }

    get maxPage() {
        return Math.ceil(this.penguins.length / this.pageSize)
    }

    /**
     * Gets the client buddies array, sorted first by favorite status,
       then favorites offline, then others online status, then others offline, and then alphabetically.
     *
     * @readonly
     */
    get buddies() {

        return this.world.client.buddies.sort((a, b) => {
            if (!a.favorite) a.favorite = false
            if (!b.favorite) b.favorite = false
            if (!a.online) a.online = false
            if (!b.online) b.online = false
            const aValue = (a.favorite && a.online ? 3 : 0) + (!a.favorite && a.online ? 2 : 0) + (a.favorite && !a.online ? 1 : 0);
            const bValue = (b.favorite && b.online ? 3 : 0) + (!b.favorite && b.online ? 2 : 0) + (b.favorite && !b.online ? 1 : 0);

            // Sort based on the above priority rankings
            if (aValue !== bValue) {
                return bValue - aValue; // Higher values first
            }

            // If they have the same status, sort alphabetically
            return a.username.toLowerCase().localeCompare(b.username.toLowerCase());
        });
    }

    /**
     * Gets the users in current room, sorted alphabetically.
     *
     * @readonly
     */
    get room() {
        let penguins = Object.values(this.world.room.penguins)

        return penguins.map(penguin => {
            return { id: penguin.id, username: penguin.displayName, ...penguin }
        }).sort((a, b) => {
            // Then sort by username
            return a.displayName.toLowerCase().localeCompare(b.displayName.toLowerCase())
        })
    }


    /**
     * Gets the client ignores array, sorted alphabetically.
     *
     * @readonly
     */
    get ignores() {
        return this.world.client.ignores.sort((a, b) => {
            return a.username.toLowerCase().localeCompare(b.username.toLowerCase())
        })
    }

    /**
     * Gets the client buddy requests array, sorted alphabetically.
     *
     * @readonly
     */
    get buddyRequests() {
        return this.world.client.buddyRequests.sort((a, b) => {
            return a.username.toLowerCase().localeCompare(b.username.toLowerCase())
        })
    }

    show() {
        super.show()

        this.showPage()
        //Text input
            if (this.filterInput === undefined) {
                this.filterInput = new InputText(this.scene, this.put_input_here.x, this.put_input_here.y, 0, 0, { id: 'friendSearch', backgroundColor: 'green', placeholder: "Search for a friend", fontSize: "24px", color: "white", maxLength: 20});
                this.text_container.add(this.filterInput);
                this.filterInput.depth = 1000
                //this.filterInput.on('textchange', () => this.filterInventory())
                this.filterInput.on('focus', () => {
                    this.clearEmoteKey()
                    this.scene.game.input.keyboard.enabled = false
                    //this.filterInput.text = ''
                })
                this.filterInput.on('blur', () => {
                    this.scene.game.input.keyboard.enabled = true
                })
                this.filterInput.on('keydown', (i,e) => {
                    if(e.key === 'Enter') this.onSearch()
                })

                // Static text for the game to show while the actual input is hidden
                this.dummyinput._style = { align: "left", fontFamily: "Arial", fontSize: "24px", color: "white", width: this.put_input_here.width, fixedWidth: this.put_input_here.width }
                this.dummyinput.setStyle(this.dummyinput._style)
                this.dummyinput.visible = false
                this.filterInput._dummy = this.dummyinput
            }
            this.showSearch()
            this.filterInput.resize(this.put_input_here.width, this.put_input_here.height)
            //this.parentContainer.sendToBack(this)
            //this.x += 495
    }

    clearEmoteKey() {
        if (this.scene.world.client) {
            this.scene.world.client.emoteKeyPressed = false
        }
    }

    hide() {
        this.close()
    }

    close() {
        this.visible = false
        // Search Close
        if(!this.filterInput) return
        this.filterInput.text = ''
        this.filterItem = null
        this.hideSearch()
        this.filterInput.resize(0, 0)
        this.filterInput.visible = false
    }

    isPageEmpty() {
        let j = 0
        for(let i of this.items) {
            if(i.visible == false) j++
        }
        if(j == this.items.length) return true
        return false
    }

    showPage() {
        if (this.visible == false) return

        if (this.listType == 'search') return

        this.searchResult.visible = false
        this.searchResultNull.visible = false
        this.cantSearchYourself.visible = false
        this.mascotResult.visible = false

        let page = this.penguins.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)

        for (let [index, item] of this.items.entries()) {
            let buddy = page[index]

            if (buddy) {
                item.setItem(buddy)
            } else {
                item.setItem(null)
            }
        }

        if (this.isPageEmpty() && this.page > 1) return this.prevPage()

        // Update total text, calculate visibility of stuff
        if (this.listType == 'buddies' || this.listType == 'ignores' || this.listType == 'buddyRequests') {
            this.total.text = `${this.world.client[this.listType].length}`
            this.total.visible = (this.listType != 'buddyRequests')

            this.scrollBar.visible = !this.isPageEmpty()
            this.noFriends.visible = ((this.listType == 'buddies') && this.isPageEmpty())
            this.noIgnores.visible = ((this.listType == 'ignores') && this.isPageEmpty())
            this.noRequests.visible = ((this.listType == 'buddyRequests') && this.isPageEmpty())
        } else {
            for(let j of this.infos) j.visible = false
            this.scrollBar.visible = true
            this.total.visible = false
        }

        //this.setHeadshotInterval()

        // Set notification dot
        if(this.world.client.buddyRequests.length < 1) {
            this.notificationDot.visible = false
        } else {
            this.notificationDot.visible = true
            this.requestCount.text = this.world.client.buddyRequests.length
        }
        this.interface.main.checkBuddies()

    }

    prevPage() {
        let page = this.page - 1
        if (page < 1) return

        this.page = page
        this.showPage()
    }

    nextPage() {
        let page = this.page + 1
        if (page > this.maxPage) return

        this.page = page
        this.showPage()
    }

    switchList(type, text) {
        if(type == this.listType) return
        this.page = 1
        this.text.text = text
        this.listType = type
        this.showSearch()
        this.showPage()
    }

    showSearchResult(penguin,mascot=null,yourself=false) {
        this.listType = 'search'
        this.purgeblock.visible = false
        for(let i of this.items) i.visible = false
        this.scrollBar.visible = false
        for(let j of this.infos) j.visible = false
        this.text.text = 'Search Result'
        if(mascot != null) {
            this.mascotText.text = this.crumbs.strings[`buddy_find_${mascot}`]
            this.mascotPreview.setFrame(mascot)
            this.mascotResult.visible = true
            return
        }
        if(yourself) {
            this.cantSearchYourself.visible = true
            return
        }
        this.spinner.stop()
        if(!penguin) {
            this.searchResultNull.visible = true
            return
        }

        this.searchResultName.text = penguin.username
        this.searchResultId = penguin.id
        this.searchResultDoll.loadDoll(penguin,false,true,true)
        this.searchResult.visible = true
        this.searchBtn.visible = true

        let buddy = this.world.client.buddies.find(obj => obj.id == penguin.id)
        if(buddy) {
            this.searchIsBuddy = true
            this.searchBtnText.text = 'Show Player Card'
        } else {
            this.searchIsBuddy = false
            this.searchBtnText.text = 'Send Friend Request'
        }
    }

    showBuddy(buddy) {
        for (let item of this.items) {
            if (item.id === buddy.id) item.setPaperDoll(buddy.items)
        }                
    }

    setHeadshotInterval() {
        let buddyI = 0 //the index for this.items
        setTimeout(() => {
            if(buddyI < this.items.length) {
                this.network.send('get_buddy', {id: this.items[buddyI].id})
                console.log(`error id ${this.items[buddyI].id}`)
                buddyI++
            }
        },2000)
    }

    showSearch() {
        this.filterInput.visible = true
        document.getElementById('friendSearch').style.visibility = 'visible'
    }

    hideSearch() {
        this.filterInput.visible = false
        document.getElementById('friendSearch').style.visibility = 'hidden'
    }

    onSearch() {
        let input = this.filterInput.text

        if(input.length < 1) return

        //Check if its a mascot
        let modifiedInput = input.toLowerCase()//.replace(/ /g,"_")
        if(this.crumbs.strings[`buddy_find_${modifiedInput.replace(/ /g,"_")}`] && !modifiedInput.indexOf('_') > -1) {
            this.filterInput.text = ''
            this.showSearchResult(null,modifiedInput.replace(/ /g,"_"))
            return
        }

        //Make sure you don't search yourself
        if(input.toLowerCase() == this.world.client.penguin.username.toLowerCase() ||
           (input.toLowerCase().startsWith('p') && input.toLowerCase().substring(1) == this.world.client.penguin.id)) {
            this.showSearchResult(null,null,true)
            this.filterInput.text = ''
            return
        }

        if(input.length < 4 && !input.toLowerCase().startsWith('p')) {
            this.showSearchResult(null)
            this.filterInput.text = ''
            return
        }
        this.purgeblock.visible = true
        this.spinner.start()
        this.network.send('buddy_search', {search:input})
        this.filterInput.text = ''
    }

    searchRequestSend() {
        if(this.searchIsBuddy) {
            this.interface.showCard(this.searchResultId)
            return
        }
        this.network.send('buddy_request', {id:this.searchResultId})
        this.searchBtn.visible = false
        this.searchBtnText.text = 'Request sent!'
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
