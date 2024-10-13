 import BaseScene from '@scenes/base/BaseScene';
import {
    Button,
    DraggableContainer,
    Interactive,
    SimpleButton,
    ShowHint,
    Animation,
} from '@components/components';
import TextInput from '@engine/interface/text/TextInput';

import BalloonFactory from '@engine/interface/balloons/BalloonFactory';
import SnowballFactory from '@engine/interface/snowball/SnowballFactory';
import Outfitsaver from '@scenes/interface/game/outfitsaver/Outfitsaver';

import ActionsMenu from '../floating/actions/ActionsMenu';
import Buddy from '../buddy/Buddy';
import ChatLog from '../chatlog/ChatLog';
import EmotesMenu from '../floating/emotes/EmotesMenu';
import Moderator from '../moderator/Moderator';
import PlayerCard from '../playercard/PlayerCard';
import Safe from '../floating/safe/Safe';
import Settings from '../settings/Settings';
import ModActions from '../modactions/ModActions';
import ChatPredections from '../chatpredictions/ChatPredections';
import Waddle from '../waddle/Waddle'
import SpyPhone from '../spyphone/SpyPhone'
import QuestReward from '../partyquests/reward/QuestReward';
import PartyIcon from '../partyicon/PartyIcon'
import TicketIndicator from '../_fair/ticketindicator/TicketIndicator'


/* START OF COMPILED CODE */

export default class Main extends BaseScene {

    constructor() {
        super("Main");

        /** @type {TicketIndicator} */
        this.ticketIndicator;
        /** @type {Phaser.GameObjects.Image} */
        this.dock;
        /** @type {Phaser.GameObjects.Image} */
        this.chat_box;
        /** @type {Phaser.GameObjects.Text} */
        this.chat_disabled_txt;
        /** @type {Phaser.GameObjects.Image} */
        this.chat_send_button;
        /** @type {Phaser.GameObjects.Sprite} */
        this.chat_send_icon;
        /** @type {Phaser.GameObjects.Text} */
        this.requestCount;
        /** @type {Phaser.GameObjects.Container} */
        this.buddyNotification;
        /** @type {Phaser.GameObjects.Text} */
        this.chat_blocked_text;
        /** @type {Phaser.GameObjects.Image} */
        this.chat_send_button_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.chat_send_icon_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.chat_idle_0014;
        /** @type {Phaser.GameObjects.Container} */
        this.chat_blocked;
        /** @type {Phaser.GameObjects.Container} */
        this.dockContainer;
        /** @type {Phaser.GameObjects.Image} */
        this.popup;
        /** @type {Phaser.GameObjects.Text} */
        this.popupText;
        /** @type {Phaser.GameObjects.Container} */
        this.onlinePopup;
        /** @type {Phaser.GameObjects.Image} */
        this.editInternalPopup;
        /** @type {Phaser.GameObjects.Text} */
        this.editPopupText;
        /** @type {Phaser.GameObjects.Container} */
        this.editPopup;
        /** @type {QuestReward} */
        this.questReward;
        /** @type {Phaser.GameObjects.Image} */
        this.request_button;
        /** @type {Phaser.GameObjects.Image} */
        this.mail_button;
        /** @type {Phaser.GameObjects.Text} */
        this.mailCount;
        /** @type {Phaser.GameObjects.Container} */
        this.mailNotification;
        /** @type {Phaser.GameObjects.Image} */
        this.news_button;
        /** @type {Phaser.GameObjects.Image} */
        this.news_new;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mod_m;
        /** @type {Phaser.GameObjects.Image} */
        this.quests;
        /** @type {PartyIcon} */
        this.partyIcon;
        /** @type {Phaser.GameObjects.Container} */
        this.iconsContainer;
        /** @type {ChatLog} */
        this.chatLog;
        /** @type {Phaser.GameObjects.Image} */
        this.crosshair;
        /** @type {Phaser.GameObjects.Sprite} */
        this.map_button;
        /** @type {Phaser.GameObjects.Sprite} */
        this.phone_button;
        /** @type {Phaser.GameObjects.Image} */
        this.like_button;
        /** @type {Phaser.GameObjects.Text} */
        this.like_button_text;
        /** @type {Phaser.GameObjects.Text} */
        this.like_button_amount_text;
        /** @type {Phaser.GameObjects.Container} */
        this.iglooLikes;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mod_badge_0001;
        /** @type {Phaser.GameObjects.Text} */
        this.staff_username;
        /** @type {Phaser.GameObjects.Container} */
        this.staffPopup;
        /** @type {Waddle} */
        this.waddle;
        /** @type {Buddy} */
        this.buddy;
        /** @type {PlayerCard} */
        this.playerCard;
        /** @type {Phaser.GameObjects.Layer} */
        this.widgetLayer;
        /** @type {SpyPhone} */
        this.spyPhone;
        /** @type {Phaser.GameObjects.Sprite} */
        this.coin_sprite;
        /** @type {Phaser.GameObjects.Text} */
        this.coin_text;
        /** @type {Phaser.GameObjects.Container} */
        this.coin;
        /** @type {ActionsMenu} */
        this.actionsMenu;
        /** @type {EmotesMenu} */
        this.emotesMenu;
        /** @type {Safe} */
        this.safe;
        /** @type {Moderator} */
        this.moderator;
        /** @type {Settings} */
        this.settings;
        /** @type {ModActions} */
        this.modActions;
        /** @type {Phaser.GameObjects.Text} */
        this.version_txt;
        /** @type {ChatPredections} */
        this.chatPredections;
        /** @type {Array<Settings|Moderator|PlayerCard|Buddy|Waddle|SpyPhone>} */
        this.hideOnSleep;


        /* START-USER-CTR-CODE */
        this.isReady = false;
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        // ticketIndicator
        const ticketIndicator = new TicketIndicator(this, -120, 251);
        this.add.existing(ticketIndicator);

        // dockContainer
        const dockContainer = this.add.container(246, 854);

        // dock
        const dock = this.add.image(514, 61, "main", "dock");
        dockContainer.add(dock);

        // chat_box
        const chat_box = this.add.image(216, 42, "main", "chat-box");
        chat_box.setOrigin(0, 0);
        chat_box.tintTopLeft = 16777215;
        chat_box.tintTopRight = 16777215;
        chat_box.tintBottomLeft = 16777215;
        chat_box.tintBottomRight = 16777215;
        dockContainer.add(chat_box);

        // dockBlock
        const dockBlock = this.add.rectangle(512, 72, 128, 128);
        dockBlock.scaleX = 8.608337231359513;
        dockBlock.scaleY = 0.7364202950069451;
        dockContainer.add(dockBlock);

        // chat_disabled_txt
        const chat_disabled_txt = this.add.text(244, 39, "", {});
        chat_disabled_txt.visible = false;
        chat_disabled_txt.text = "You must verify your account to enable chat. Please check the inbox of the email you registered with.";
        chat_disabled_txt.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "22px" });
        chat_disabled_txt.setWordWrapWidth(570);
        dockContainer.add(chat_disabled_txt);

        // chat_button
        const chat_button = this.add.image(0, 69, "main", "blue-button");
        dockContainer.add(chat_button);

        // chat_icon
        const chat_icon = this.add.image(-16, 51, "main", "chat-icon");
        chat_icon.setOrigin(0, 0);
        dockContainer.add(chat_icon);

        // emote_button
        const emote_button = this.add.image(60, 69, "main", "blue-button");
        dockContainer.add(emote_button);

        // emote_icon
        const emote_icon = this.add.image(44, 51, "main", "emote-icon");
        emote_icon.setOrigin(0, 0);
        dockContainer.add(emote_icon);

        // action_button
        const action_button = this.add.image(120, 69, "main", "blue-button");
        dockContainer.add(action_button);

        // action_icon
        const action_icon = this.add.image(103, 47, "main", "action-icon");
        action_icon.setOrigin(0, 0);
        dockContainer.add(action_icon);

        // snowball_button
        const snowball_button = this.add.image(180, 69, "main", "blue-button");
        dockContainer.add(snowball_button);

        // snowball_icon
        const snowball_icon = this.add.image(165, 53, "main", "snowball-icon");
        snowball_icon.setOrigin(0, 0);
        dockContainer.add(snowball_icon);

        // chat_send_button
        const chat_send_button = this.add.image(780, 69, "main", "blue-button");
        dockContainer.add(chat_send_button);

        // chat_send_icon
        const chat_send_icon = this.add.sprite(769.0000311052922, 50.999995839501935, "main", "chat_send");
        chat_send_icon.setOrigin(0, 0);
        dockContainer.add(chat_send_icon);

        // player_button
        const player_button = this.add.image(840, 69, "main", "blue-button");
        dockContainer.add(player_button);

        // badge_member
        const badge_member = this.add.image(823, 50, "main", "badge-member");
        badge_member.setOrigin(0, 0);
        dockContainer.add(badge_member);

        // buddies_button
        const buddies_button = this.add.image(900, 69, "main", "blue-button");
        dockContainer.add(buddies_button);

        // buddies_icon
        const buddies_icon = this.add.image(884, 51, "main", "buddies-icon");
        buddies_icon.setOrigin(0, 0);
        dockContainer.add(buddies_icon);

        // igloo_button
        const igloo_button = this.add.image(960, 69, "main", "blue-button");
        dockContainer.add(igloo_button);

        // igloo_icon
        const igloo_icon = this.add.image(940, 48, "main", "igloo-icon");
        igloo_icon.setOrigin(0, 0);
        dockContainer.add(igloo_icon);

        // help_button
        const help_button = this.add.image(1020, 69, "main", "blue-button");
        dockContainer.add(help_button);

        // help_icon
        const help_icon = this.add.image(1004, 51, "main", "help-icon");
        help_icon.setOrigin(0, 0);
        dockContainer.add(help_icon);

        // buddyNotification
        const buddyNotification = this.add.container(916, 50);
        dockContainer.add(buddyNotification);

        // requestRing
        const requestRing = this.add.ellipse(0, 1, 25, 25);
        requestRing.isFilled = true;
        requestRing.fillColor = 16737792;
        requestRing.isStroked = true;
        requestRing.strokeColor = 13382451;
        requestRing.lineWidth = 2;
        buddyNotification.add(requestRing);

        // requestCount
        const requestCount = this.add.text(0, 0, "", {});
        requestCount.setOrigin(0.5, 0.5);
        requestCount.text = "99";
        requestCount.setStyle({ "align": "right", "fontFamily": "Burbank Small", "fontSize": "15px", "fontStyle": "bold" });
        buddyNotification.add(requestCount);

        // chat_blocked
        const chat_blocked = this.add.container(216, 42);
        chat_blocked.visible = false;
        dockContainer.add(chat_blocked);

        // chat_block
        const chat_block = this.add.rectangle(295, 27, 598, 57);
        chat_blocked.add(chat_block);

        // chat_block_1
        const chat_block_1 = this.add.rectangle(-186, 26, 598, 57);
        chat_block_1.scaleX = 0.19116767165058907;
        chat_blocked.add(chat_block_1);

        // chat_blocked_text
        const chat_blocked_text = this.add.text(296, 27, "", {});
        chat_blocked_text.setOrigin(0.5, 0.5);
        chat_blocked_text.text = "You can chat again in 10 seconds";
        chat_blocked_text.setStyle({ "align": "center", "color": "#698eb3ff", "fontFamily": "Burbank Small", "fontSize": "24px" });
        chat_blocked.add(chat_blocked_text);

        // chat_send_button_1
        const chat_send_button_1 = this.add.image(564, 27, "main", "blue-button-disabled");
        chat_blocked.add(chat_send_button_1);

        // chat_send_icon_1
        const chat_send_icon_1 = this.add.sprite(553, 9, "main", "chat_send-disabled");
        chat_send_icon_1.setOrigin(0, 0);
        chat_blocked.add(chat_send_icon_1);

        // chat_idle_0014
        const chat_idle_0014 = this.add.sprite(80, 31, "main", "chat_idle_0001");
        chat_idle_0014.scaleX = 0.5;
        chat_idle_0014.scaleY = 0.5;
        chat_idle_0014.tintTopLeft = 6917811;
        chat_idle_0014.tintTopRight = 6917811;
        chat_idle_0014.tintBottomLeft = 6917811;
        chat_idle_0014.tintBottomRight = 6917811;
        chat_blocked.add(chat_idle_0014);

        // chat_button_1
        const chat_button_1 = this.add.image(-216, 27, "main", "blue-button-disabled");
        chat_blocked.add(chat_button_1);

        // emote_button_1
        const emote_button_1 = this.add.image(-156, 27, "main", "blue-button-disabled");
        chat_blocked.add(emote_button_1);

        // chat_icon_2
        const chat_icon_2 = this.add.image(-232, 9, "disabledicon", "chat-disabled");
        chat_icon_2.setOrigin(0, 0);
        chat_blocked.add(chat_icon_2);

        // emote_icon_1
        const emote_icon_1 = this.add.image(-172, 9, "disabledicon", "emote-disabled");
        emote_icon_1.setOrigin(0, 0);
        chat_blocked.add(emote_icon_1);

        // onlinePopup
        const onlinePopup = this.add.container(1156, 850);
        onlinePopup.visible = false;

        // popup
        const popup = this.add.image(-5, 15, "main", "buddy-online");
        onlinePopup.add(popup);

        // popupText
        const popupText = this.add.text(-10, 6, "", {});
        popupText.setOrigin(0.5, 0.5);
        popupText.text = "amoung is online";
        popupText.setStyle({ "align": "center", "color": "#000000", "fixedWidth":500,"fixedHeight":32,"fontFamily": "Arial", "fontSize": "24px" });
        onlinePopup.add(popupText);

        // editPopup
        const editPopup = this.add.container(1086, 850);
        editPopup.visible = false;

        // editInternalPopup
        const editInternalPopup = this.add.image(-5, 15, "main", "buddy-online");
        editPopup.add(editInternalPopup);

        // editPopupText
        const editPopupText = this.add.text(-10, 6, "", {});
        editPopupText.setOrigin(0.5, 0.5);
        editPopupText.setStyle({ "align": "center", "color": "#000000", "fixedWidth":500,"fixedHeight":32,"fontFamily": "Arial", "fontSize": "24px" });
        editPopup.add(editPopupText);

        // questReward
        const questReward = new QuestReward(this, -128, 95);
        this.add.existing(questReward);
        questReward.visible = false;

        // iconsContainer
        const iconsContainer = this.add.container(76, 46);

        // request_button
        const request_button = this.add.image(200, 25, "main", "buddy-button");
        request_button.visible = false;
        iconsContainer.add(request_button);

        // mail_button
        const mail_button = this.add.image(55, -37, "main", "mail-button");
        mail_button.setOrigin(0, 0);
        iconsContainer.add(mail_button);

        // mailNotification
        const mailNotification = this.add.container(138, 0);
        iconsContainer.add(mailNotification);

        // mailRing
        const mailRing = this.add.ellipse(0, 0, 34, 34);
        mailRing.isFilled = true;
        mailRing.fillColor = 16737792;
        mailRing.isStroked = true;
        mailRing.strokeColor = 13382451;
        mailRing.lineWidth = 2;
        mailNotification.add(mailRing);

        // mailCount
        const mailCount = this.add.text(0, 0, "", {});
        mailCount.setOrigin(0.5, 0.5);
        mailCount.text = "99";
        mailCount.setStyle({ "align": "right", "fontFamily": "Burbank Big Regular", "fontSize": "24px", "fontStyle": "bold" });
        mailNotification.add(mailCount);

        // news_button
        const news_button = this.add.image(-45, -17, "main", "news-button");
        news_button.setOrigin(0, 0);
        iconsContainer.add(news_button);

        // news_new
        const news_new = this.add.image(-21, 26, "main", "news-new");
        news_new.setOrigin(0, 0);
        iconsContainer.add(news_new);

        // mod_m
        const mod_m = this.add.sprite(1303, -16, "main", "mod/badge_0020");
        mod_m.scaleX = 0.8;
        mod_m.scaleY = 0.8;
        mod_m.setOrigin(0, 0);
        iconsContainer.add(mod_m);

        // quests
        const quests = this.add.image(1240, 30, "main", "quests");
        quests.scaleX = 0.9;
        quests.scaleY = 0.9;
        quests.visible = false;
        iconsContainer.add(quests);

        // partyIcon
        const partyIcon = new PartyIcon(this, 1216, 29);
        partyIcon.visible = true;
        iconsContainer.add(partyIcon);

        // chatLog
        const chatLog = new ChatLog(this, 760, 12);
        this.add.existing(chatLog);

        // crosshair
        const crosshair = this.add.image(0, 1100, "main", "crosshair");
        crosshair.visible = false;

        // map_button
        const map_button = this.add.sprite(40, 824, "main", "map-button");
        map_button.setOrigin(0, 0);

        // phone_button
        const phone_button = this.add.sprite(49, 697, "main", "psa-button");
        phone_button.setOrigin(0, 0);
        phone_button.visible = false;

        // iglooLikes
        const iglooLikes = this.add.container(1309, 157);

        // like_button
        const like_button = this.add.image(66, 14, "igloolikes", "like-button");
        iglooLikes.add(like_button);

        // like_button_text
        const like_button_text = this.add.text(-29, -4, "", {});
        like_button_text.text = "Like";
        like_button_text.setStyle({ "align": "center", "fixedWidth":100,"fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold", "shadow.offsetY":-1,"shadow.color": "#0e248cff", "shadow.blur":2,"shadow.fill":true});
        iglooLikes.add(like_button_text);

        // like_button_amount_text
        const like_button_amount_text = this.add.text(78, 0, "", {});
        like_button_amount_text.text = "0";
        like_button_amount_text.setStyle({ "align": "center", "fixedWidth":83,"fontFamily": "Burbank Small", "fontSize": "24px", "shadow.offsetY":-1,"shadow.color": "#0e248cff", "shadow.fill":true});
        iglooLikes.add(like_button_amount_text);

        // staffPopup
        const staffPopup = this.add.container(1125, 127);
        staffPopup.scaleX = 0.9;
        staffPopup.scaleY = 0.9;
        staffPopup.visible = false;

        // mod_bg
        const mod_bg = this.add.image(201, 62, "mpop", "mod_bg");
        mod_bg.scaleX = 0.7;
        mod_bg.scaleY = 0.7;
        staffPopup.add(mod_bg);

        // mod_badge_0001
        const mod_badge_0001 = this.add.sprite(75, 69.17614624616101, "main", "mod/badge_0001");
        mod_badge_0001.scaleX = 0.8;
        mod_badge_0001.scaleY = 0.8;
        staffPopup.add(mod_badge_0001);

        // staff_username
        const staff_username = this.add.text(158, 42.17614624616101, "", {});
        staff_username.text = "Penguin88888";
        staff_username.setStyle({ "color": "#966308", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold", "shadow.offsetX":1,"shadow.offsetY":1,"shadow.color": "#FBE9C8", "shadow.fill":true});
        staffPopup.add(staff_username);

        // text_8
        const text_8 = this.add.text(158, 69.17614624616101, "", {});
        text_8.text = "has clocked in!";
        text_8.setStyle({ "color": "#5a5a5aff", "fontFamily": "Burbank Small", "fontSize": "24px", "shadow.offsetX":1,"shadow.offsetY":1,"shadow.color": "#FBE9C8" });
        staffPopup.add(text_8);

        // clock
        const clock = this.add.image(107, 95.17614624616101, "mpop", "clock");
        clock.scaleX = 0.9;
        clock.scaleY = 0.9;
        staffPopup.add(clock);

        // widgetLayer
        const widgetLayer = this.add.layer();

        // waddle
        const waddle = new Waddle(this, 1099, 332);
        waddle.visible = false;
        widgetLayer.add(waddle);

        // buddy
        const buddy = new Buddy(this, 1140, 436);
        buddy.visible = false;
        widgetLayer.add(buddy);

        // playerCard
        const playerCard = new PlayerCard(this, 446, 436);
        playerCard.visible = false;
        widgetLayer.add(playerCard);

        // spyPhone
        const spyPhone = new SpyPhone(this, 306, 470);
        this.add.existing(spyPhone);
        spyPhone.visible = false;

        // coin
        const coin = this.add.container(-92, 145);

        // coin_sprite
        const coin_sprite = this.add.sprite(0, -30, "coin", "coin_0001");
        coin_sprite.scaleX = 0.5;
        coin_sprite.scaleY = 0.5;
        coin.add(coin_sprite);

        // coin_text
        const coin_text = this.add.text(22, -58, "", {});
        coin_text.text = "GG!";
        coin_text.setStyle({ "align": "center", "baselineX":0,"baselineY":0,"fixedWidth":50,"fixedHeight":50,"fontFamily": "CCFaceFront", "fontSize": "20px", "fontStyle": "bold", "stroke": "#663300", "strokeThickness":5});
        coin_text.setPadding({"top":15});
        coin.add(coin_text);

        // actionsMenu
        const actionsMenu = new ActionsMenu(this, 366, 864);
        this.add.existing(actionsMenu);
        actionsMenu.visible = false;

        // emotesMenu
        const emotesMenu = new EmotesMenu(this, 306, 864);
        this.add.existing(emotesMenu);
        emotesMenu.visible = false;

        // safe
        const safe = new Safe(this, 246, 925);
        this.add.existing(safe);
        safe.visible = false;

        // moderator
        const moderator = new Moderator(this, 760, 480);
        this.add.existing(moderator);
        moderator.visible = false;

        // settings
        const settings = new Settings(this);
        this.add.existing(settings);
        settings.visible = false;

        // modActions
        const modActions = new ModActions(this, 760, 480);
        this.add.existing(modActions);
        modActions.visible = false;

        // version_txt
        const version_txt = this.add.text(1322, 931, "", {});
        version_txt.text = "1.5.0-beta-8e922fff";
        version_txt.setStyle({ "align": "right", "color": "#8c8c8cff", "fixedWidth":180,"fontFamily": "Burbank Small", "fontStyle": "bold" });

        // chatPredections
        const chatPredections = new ChatPredections(this, 472, 658);
        this.add.existing(chatPredections);
        chatPredections.visible = false;

        // lists
        const hideOnSleep = [settings, moderator, playerCard, buddy, waddle, spyPhone];

        // dock (components)
        new Interactive(dock);

        // chat_box (components)
        new Interactive(chat_box);

        // chat_button (components)
        const chat_buttonButton = new Button(chat_button);
        chat_buttonButton.spriteName = "blue-button";
        chat_buttonButton.callback = () => this.safe.visible = true;
        chat_buttonButton.activeFrame = true;
        const chat_buttonShowHint = new ShowHint(chat_button);
        chat_buttonShowHint.text = "safe_hint";

        // emote_button (components)
        const emote_buttonButton = new Button(emote_button);
        emote_buttonButton.spriteName = "blue-button";
        emote_buttonButton.callback = () => this.emotesMenu.visible = true;
        emote_buttonButton.activeFrame = true;
        const emote_buttonShowHint = new ShowHint(emote_button);
        emote_buttonShowHint.text = "emote_hint";

        // action_button (components)
        const action_buttonButton = new Button(action_button);
        action_buttonButton.spriteName = "blue-button";
        action_buttonButton.callback = () => this.actionsMenu.visible = true;
        action_buttonButton.activeFrame = true;
        const action_buttonShowHint = new ShowHint(action_button);
        action_buttonShowHint.text = "action_hint";

        // snowball_button (components)
        const snowball_buttonButton = new Button(snowball_button);
        snowball_buttonButton.spriteName = "blue-button";
        snowball_buttonButton.callback = () => this.onSnowballClick();
        snowball_buttonButton.activeFrame = true;
        const snowball_buttonShowHint = new ShowHint(snowball_button);
        snowball_buttonShowHint.text = "throw_hint";

        // chat_send_button (components)
        const chat_send_buttonButton = new Button(chat_send_button);
        chat_send_buttonButton.spriteName = "blue-button";
        chat_send_buttonButton.callback = () => this.onChatSend();
        chat_send_buttonButton.activeFrame = true;
        const chat_send_buttonShowHint = new ShowHint(chat_send_button);
        chat_send_buttonShowHint.text = "send_hint";

        // player_button (components)
        const player_buttonButton = new Button(player_button);
        player_buttonButton.spriteName = "blue-button";
        player_buttonButton.callback = () => this.onPlayerClick();
        player_buttonButton.activeFrame = true;
        const player_buttonShowHint = new ShowHint(player_button);
        player_buttonShowHint.text = "player_hint";

        // buddies_button (components)
        const buddies_buttonButton = new Button(buddies_button);
        buddies_buttonButton.spriteName = "blue-button";
        buddies_buttonButton.callback = () => this.onBuddyClick();
        buddies_buttonButton.activeFrame = true;
        const buddies_buttonShowHint = new ShowHint(buddies_button);
        buddies_buttonShowHint.text = "buddy_hint";

        // igloo_button (components)
        const igloo_buttonButton = new Button(igloo_button);
        igloo_buttonButton.spriteName = "blue-button";
        igloo_buttonButton.callback = () => this.onIglooClick();
        igloo_buttonButton.activeFrame = true;
        const igloo_buttonShowHint = new ShowHint(igloo_button);
        igloo_buttonShowHint.text = "home_hint";

        // help_button (components)
        const help_buttonButton = new Button(help_button);
        help_buttonButton.spriteName = "blue-button";
        help_buttonButton.callback = () => this.settings.show();
        help_buttonButton.activeFrame = true;
        const help_buttonShowHint = new ShowHint(help_button);
        help_buttonShowHint.text = "help_hint";

        // chat_blocked (components)
        new Interactive(chat_blocked);

        // chat_block (components)
        new Interactive(chat_block);

        // chat_block_1 (components)
        new Interactive(chat_block_1);

        // chat_idle_0014 (components)
        const chat_idle_0014Animation = new Animation(chat_idle_0014);
        chat_idle_0014Animation.key = "chat_idle_";
        chat_idle_0014Animation.end = 27;
        chat_idle_0014Animation.frameRate = 18;

        // chat_button_1 (components)
        new Interactive(chat_button_1);

        // emote_button_1 (components)
        new Interactive(emote_button_1);

        // request_button (components)
        const request_buttonButton = new Button(request_button);
        request_buttonButton.spriteName = "buddy-button";
        request_buttonButton.callback = () => this.onRequestClick();

        // mail_button (components)
        const mail_buttonButton = new Button(mail_button);
        mail_buttonButton.spriteName = "mail-button";
        mail_buttonButton.callback = () => {this.onMailClick()};

        // news_button (components)
        const news_buttonButton = new Button(news_button);
        news_buttonButton.spriteName = "news-button";
        news_buttonButton.callback = () => this.onNewspaperClick();

        // mod_m (components)
        const mod_mSimpleButton = new SimpleButton(mod_m);
        mod_mSimpleButton.hoverCallback = () => this.onModOver();
        mod_mSimpleButton.hoverOutCallback = () => this.onModOut();
        mod_mSimpleButton.callback = () => this.onModClick();

        // quests (components)
        const questsButton = new Button(quests);
        questsButton.spriteName = "quests";
        questsButton.callback = () => {this.interface.loadWidget('PartyQuests');};

        // crosshair (components)
        const crosshairSimpleButton = new SimpleButton(crosshair);
        crosshairSimpleButton.callback = () => this.onCrosshairClick();

        // map_button (components)
        const map_buttonButton = new Button(map_button);
        map_buttonButton.spriteName = "map-button";
        map_buttonButton.callback = () => this.onMapClick();

        // phone_button (components)
        const phone_buttonButton = new Button(phone_button);
        phone_buttonButton.spriteName = "psa-button";
        phone_buttonButton.callback = () => this.onPhoneClick();

        // like_button (components)
        const like_buttonButton = new Button(like_button);
        like_buttonButton.callback = () => {this.onLikeIgloo()};
        like_buttonButton.activeFrame = true;

        // mod_badge_0001 (components)
        const mod_badge_0001Animation = new Animation(mod_badge_0001);
        mod_badge_0001Animation.key = "mod/badge_";
        mod_badge_0001Animation.end = 20;
        mod_badge_0001Animation.repeatDelay = 500;

        this.ticketIndicator = ticketIndicator;
        this.dock = dock;
        this.chat_box = chat_box;
        this.chat_disabled_txt = chat_disabled_txt;
        this.chat_send_button = chat_send_button;
        this.chat_send_icon = chat_send_icon;
        this.requestCount = requestCount;
        this.buddyNotification = buddyNotification;
        this.chat_blocked_text = chat_blocked_text;
        this.chat_send_button_1 = chat_send_button_1;
        this.chat_send_icon_1 = chat_send_icon_1;
        this.chat_idle_0014 = chat_idle_0014;
        this.chat_blocked = chat_blocked;
        this.dockContainer = dockContainer;
        this.popup = popup;
        this.popupText = popupText;
        this.onlinePopup = onlinePopup;
        this.editInternalPopup = editInternalPopup;
        this.editPopupText = editPopupText;
        this.editPopup = editPopup;
        this.questReward = questReward;
        this.request_button = request_button;
        this.mail_button = mail_button;
        this.mailCount = mailCount;
        this.mailNotification = mailNotification;
        this.news_button = news_button;
        this.news_new = news_new;
        this.mod_m = mod_m;
        this.quests = quests;
        this.partyIcon = partyIcon;
        this.iconsContainer = iconsContainer;
        this.chatLog = chatLog;
        this.crosshair = crosshair;
        this.map_button = map_button;
        this.phone_button = phone_button;
        this.like_button = like_button;
        this.like_button_text = like_button_text;
        this.like_button_amount_text = like_button_amount_text;
        this.iglooLikes = iglooLikes;
        this.mod_badge_0001 = mod_badge_0001;
        this.staff_username = staff_username;
        this.staffPopup = staffPopup;
        this.waddle = waddle;
        this.buddy = buddy;
        this.playerCard = playerCard;
        this.widgetLayer = widgetLayer;
        this.spyPhone = spyPhone;
        this.coin_sprite = coin_sprite;
        this.coin_text = coin_text;
        this.coin = coin;
        this.actionsMenu = actionsMenu;
        this.emotesMenu = emotesMenu;
        this.safe = safe;
        this.moderator = moderator;
        this.settings = settings;
        this.modActions = modActions;
        this.version_txt = version_txt;
        this.chatPredections = chatPredections;
        this.hideOnSleep = hideOnSleep;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        this._create();

        if (this.world.client.hasItem(800)) {
            this.phone_button.visible = true;
            // this.main_gear.visible = false
        }

        this.events.on('sleep', this.onSleep, this);

        // Version
        this.version_txt.text = `v${VERSION}-${GIT_HASH}`;

        // Widgets

        this.setupWidgets();

        // Factories

        this.balloonFactory = new BalloonFactory(this);
        this.snowballFactory = new SnowballFactory(this.world);

        // Hints

        this.hideOnSleep.push(this.interface.hint);

        // Buddy requests

        this.requests = [];

        // Chat input

        let style = {
            width: 510,
            height: 50,
            fontFamily: 'Burbank Small',
            fontSize: 24,
            color: '#fff',
        };

        let noNumberOrSymbols = /[^a-zA-Z!?,'. ]/g;

        this.chatInput =
            this.world.client.rank > 1
                ? new TextInput(
                      this,
                      745,
                      923,
                      'text',
                      style,
                      () => this.onChatSend(),
                      70,
                      true,
                      'chat',
                      this.world.client.streamer ? noNumberOrSymbols : /[^ -~]/gi
                  )
                : new TextInput(
                      this,
                      745,
                      923,
                      'text',
                      style,
                      () => this.onChatSend(),
                      70,
                      true,
                      'chat',
                      noNumberOrSymbols
                  );
        this.add.existing(this.chatInput);

        this.chatInput.node.setAttribute('autocomplete', 'off');

        // Static text for the game to show while the actual input is hidden
        let chatdummy = this.add.text(490 - this.dockContainer.x, 909  - this.dockContainer.y, "", {});
        chatdummy.setOrigin(0,0)
        chatdummy.setStyle({...style, fixedWidth: style.width, fixedHeight: style.height})
        chatdummy.visible = false
        this.dockContainer.add(chatdummy)
        this.chatInput._dummy = chatdummy

        // Input

        this.input.keyboard.on('keydown-TAB', (event) =>
            this.onChatKeyDown(event)
        );
        this.input.keyboard.on('keydown-ENTER', (event) =>
            this.onChatKeyDown(event)
        );
        this.input.keyboard.on('keydown-ESC', (event) => this.onEsc());

        this.chatPredectionsStartingX = this.chatPredections.x;

        this.events.on('show_main_inputs', () => this.handleShowInputs())
        this.events.on('hide_main_inputs', () => this.handleHideInputs())
        this.filteredInputs = []

        // Anims

        // Mod search

        let searchstyle = {
            width: 250,
            height: 50,
            fontFamily: 'Burbank Small',
            fontSize: 24,
            color: '#fff',
            visibility: 'hidden',
        };

        this.search = new TextInput(
            this,
            814,
            128,
            'text',
            searchstyle,
            () => this.onSearch(),
            48,
            true,
            'search',
            false,
            true
        );

        let actionsstyle = {
            width: 200,
            height: 30,
            fontFamily: 'Burbank Small',
            fontSize: 20,
            color: '#fff',
            visibility: 'hidden',
        };

        if (this.world.client.rank > 3) {
            /*this.add.existing(this.additems);
            this.add.existing(this.changeusername);
            this.add.existing(this.banReason);
            this.add.existing(this.coinCount);*/

            this.add.existing(this.search);
        }

        /*let anims = this.cache.json.get('main-anims');
        this.anims.fromJSON(anims);*/

        //newspaper
        this.CURRENT_NEWSPAPER = this.world.crumbs.newspapers.length;
        //this.CURRENT_NEWSPAPER = 'MINI';

        if (
            localStorage.getItem('CURRENT_NEWSPAPER_READ') ==
            this.CURRENT_NEWSPAPER
        ) {
            this.news_new.visible = false;
        }

        //postcards
        this.refreshPostcards()

        //spy phone
        if(this.world.client.hasItem(800)){
            this.phone_button.visible = true
        }

        // Safe Chat
        if((this.network.worldSafe || !this.world.client.email_verified) && this.world.client.rank <= 1) {
            this.setSafeChatMode(true)
        }

        //Inform of unseen friend requests
        if(this.world.client.unseenRequests.length > 0) this.addRequest()

        //send get party coins
        //this.network.send("get_party_coins")

        if(this.world.party.showMainIcon && this.world.party.partyActive) {
            this.partyIcon.visible = true
        } else {
            this.partyIcon.visible = false
        }

        // Remove this at some point when psa is fixed
        //this.spyPhone.teleportBroken = true

        /*if (!localStorage.getItem('login_prompt_pirateparty') || localStorage.getItem('login_prompt_pirateparty') != 'true') {
            this.interface.loadWidget('LoginPrompt');
        }*/
        this.iglooLikes.visible = false
        this.checkBuddies()

        this.network.send('check_puffle_health')

        this.quests.visible = this.world.party.partyActive && this.world.party.showQuestsIcon
        this.world.party.init()

        this.isReady = true;
    }

    get inputs() {
        return [
            this.search,
            this.chatInput,
            this.buddy?.filterInput,
            this.playerCard?.inventory?.filterInput
        ]
    }

    get mainWidgetBlacklist() {
        return [this.settings,this.modActions]
    }

    handleShowInputs() {
        for(let ui of this.mainWidgetBlacklist) {
            if(!ui) continue
            if(ui.visible) return
        }
        //If a widget is already open and says to not hide inputs, don't show inputs.
        for (let widget in this.interface.loadedWidgets) {
            widget = this.interface.loadedWidgets[widget];
            if (widget._dontHideInputs) continue
            if (widget.visible) return
        }

        if(!this.filteredInputs) return
        //Re-show all of the inputs that were filtered
        for(let input2 of this.filteredInputs) {
            input2.visible = true
            if(input2._dummy) input2._dummy.visible = false
        }
        //Reset the array of filtered inputs
        this.filteredInputs = []
    }

    handleHideInputs() {
        //Get all of the inputs that are showing, so all of them aren't made visible later
        for(let input of this.inputs) {
            if(!input) continue
            if(input.visible) this.filteredInputs.push(input)
        }

        if(!this.filteredInputs) return

        //Hide the filtered inputs
        for(let input2 of this.filteredInputs) {
            //If it has a dummy, then show it
            if(input2._dummy) {
                input2._dummy.text = input2.text
                input2._dummy.visible = true
                input2._dummy.alpha = 1

                //Handle placeholder text since it doesn't count as actual text
                if (input2.placeholder && input2.text.split('').length < 1) {
                    input2._dummy.text = input2.placeholder
                    input2._dummy.alpha = 0.5
                }
            }
            input2.visible = false
        }
    }

    setSafeChatMode(bool) {
        this.chat_box.visible = !bool;
        this.chat_send_button.visible = !bool;
        this.chat_send_icon.visible = !bool;
        this.chatInput.visible = !bool;
        this.chat_disabled_txt.visible = !this.world.client.email_verified
    }

    setPartyCoins() {
        //this.candyCount.text = this.world.client.myPartyCoins
    }

    refreshPostcards() {
        this.mailCount.text = this.world.client.unseen_postcards;
        this.mailNotification.visible = this.world.client.unseen_postcards > 0;
    }

    onSleep(sys, data) {
        if (data.clearChat) {
            this.chatInput.clearText();
            this.chatLog.clearMessages();
        }

        if (this.chatLog.open) {
            this.chatLog.onTabClick();
        }

        this.stopCrosshair();

        this.interface.prompt.hideAll();

        for (let item of this.hideOnSleep) {
            item.visible = false;
        }

        this.handleShowInputs()
        this.buddy.close()

        if (this.mainVeggiePrompts) this.mainVeggiePrompts.clearError()

        for (let widget in this.interface.loadedWidgets) {
            widget = this.interface.loadedWidgets[widget];

            if (widget.visible) {
                widget.close();
            }
        }

    }

    softSleep(a) {
        if(a == false) this.childrenToSkip = []
        let children = this.children.getChildren()
        children.forEach((child) => {
            if(a == false) {
                //setting to invisible
                if(child.visible == false) {
                    this.childrenToSkip.push(child)
                } else {
                    child.visible = false
                }
            } else if (a == true) {
                if(!this.childrenToSkip.includes(child)) {
                   child.visible = true
                }
            }
        });
    }

    setupWidgets() {
        for (let widget of this.widgetLayer.list) {
            this.setupWidget(widget);
        }
    }

    setupWidget(widget) {
        widget.widgetLayer = this.widgetLayer;
    }

    addToWidgetLayer(widget) {
        this.widgetLayer.add(widget);
        this.setupWidget(widget);
    }

    onSnowballClick() {
        this.crosshair.visible = true;
        this.crosshair.x = Math.round(this.input.x);
        this.crosshair.y = Math.round(this.input.y);
    }

    onCrosshairMove(pointer) {
        this.crosshair.x = Math.round(pointer.x);
        this.crosshair.y = Math.round(pointer.y);
    }

    onCrosshairClick() {
        this.stopCrosshair();
        this.world.client.sendSnowball(this.crosshair.x, this.crosshair.y);
    }

    stopCrosshair() {
        this.crosshair.visible = false;
    }

    onChatKeyDown(event) {
        // Prevent default to stop tab switching elements
        event.preventDefault();

        this.chatInput.setFocus();
    }

    onChatSend() {
        if(this.world.client.chatSearch) return;

        let text = this.chatInput.text;

        this.chatInput.clearText();

        this.balloonFactory.showTextBalloon(this.world.client.id, text, false, false, this.world.client.modChat);
        this.network.send('send_message', { message: text, modChat: this.world.client.modChat });
    }

    onPlayerClick() {
        this.playerCard.showCard(this.world.client.id);
    }

    onBuddyClick() {
        this.interface.showWidget(this.buddy);
    }

    onIglooClick() {
        this.world.client.sendJoinIgloo(this.world.client.id);
    }

    onRequestClick() {
        let request = this.requests.shift();
        if (this.requests.length < 1) this.request_button.visible = false;
        if (!request) return;

        if (request.requester) {
            // Show buddy accept prompt
            this.showAccept(request);
        } else {
            // Show buddy request prompt
            this.showRequest(request);
        }
    }

    showAccept(request) {
        let text = `${request.username} is now your buddy!`;

        this.interface.prompt.showWindow(text, 'single');
    }

    showRequest(request) {
        let text = `${request.username} has asked to be your buddy.\nDo you accept?`;

        this.interface.prompt.showWindow(
            text,
            'dual',
            () => {
                this.network.send('buddy_accept', { id: request.id });
                this.interface.prompt.window.visible = false;
            },
            () => {
                this.network.send('buddy_reject', { id: request.id });
                this.interface.prompt.window.visible = false;
            }
        );
    }

    addRequest(request = null) {

        if(!this.buddy.visible) {
            //Only show the popup if buddy list is not visible
            let r = this.world.client.unseenRequests
            let text = `You have ${r.length} new friend request${r.length > 1 ? 's' : ''}`;
            this.showBuddyPopup(text)  
        }
        this.interface.updateBuddies()

        /* Prevent duplicate requests
        if (
            this.requests.some(
                (item) => item.id == request.id && !item.requester
            )
        )
            return;

        this.requests.push(request);

        this.request_button.visible = true;
        this.bounce(this.request_button);*/
    }

    showOnlinePopup(username) {
        this.showBuddyPopup(`${username} is online`)
    }

    showEditPopup(text) {
        this.showBuddyPopup(text, this.editPopup, this.editInternalPopup, this.editPopupText, 3000)
    }

    showBuddyPopup(text, popup = this.onlinePopup, insidePopup = this.popup, insidePopupText = this.popupText, delay = 10000) {
        let texture = text.length > 18 ? 'buddy-online-large' : 'buddy-online';

        insidePopupText.text = text;
        insidePopup.setTexture('main', texture);

        popup.visible = true;
        this.bounce(popup, 20);

        // Hide popup after 10 seconds
        this.time.addEvent({
            delay: delay,
            callback: () => (popup.visible = false),
        });
    }

    showStaffPopup(staffUsername) {
        if (this.world.client.streamer) return;

        const checkInterval = 100;

        const interval = setInterval(() => {
            if (this.isReady) {
                clearInterval(interval);

                this.staffPopup.y = 127;
                this.staffPopup.visible = true;
                this.staff_username.setText(staffUsername);

                this.tweens.add({
                    targets: this.staffPopup,
                    y: 148,
                    ease: 'bounce',
                    duration: 300
                });

                this.time.addEvent({
                    delay: 5000,
                    callback: () => (this.staffPopup.visible = false),
                });
            }
        }, checkInterval);
    }

    bounce(gameObject, from = -100) {
        if (!gameObject.startY) gameObject.startY = gameObject.y;

        this.tweens.add({
            targets: gameObject,
            y: {
                from: gameObject.startY + from,
                to: gameObject.startY,
            },
            ease: 'Bounce',
            duration: 200,
        });
    }

    onModOver() {
        this.mod_m.play('mod_button');
    }

    onModOut() {
        this.mod_m.stop();
        this.mod_m.setFrame('mod/badge_0020');
    }

    onModClick() {
        this.onModOut();

        if (this.world.client.rank >= 10) {
            this.interface.loadWidget('MascotMessages');
            return
        } else if (this.world.client.rank >= 2 && !this.world.client.streamer) {
            this.interface.loadWidget('ModPanel');
            return
        }

        this.moderator.show()
    }

    onMapClick() {
        this.network.send('open_sprite', { sprite: '1_2' });
        this.interface.loadWidget('Map');
    }

    onSearch() {
        let text = this.search.text;
        let slicedText;

        if(text.length < 3 && !text.startsWith('@')) return

        this.search.clearText();

        if(text.startsWith('@')) {
            slicedText = parseInt(text.substring(1));
            this.network.send('get_user_info_by_id', { id: slicedText });
            return;
        }

        this.network.send('get_user_info', { username: text });
    }

    onNewspaperClick() {
        this.network.send('open_sprite', { sprite: '1_1' });
        this.network.send('hasjdkfjhawoe', {issue: this.CURRENT_NEWSPAPER})
        localStorage.setItem('CURRENT_NEWSPAPER_READ', this.CURRENT_NEWSPAPER);
        this.interface.loadNewspaper(this.CURRENT_NEWSPAPER - 1);
        //this.interface.loadWidget("MiniNewspaper")
        this.news_new.visible = false;
    }

    onParty() {
        this.interface.loadWidget("FairUI")
    }

    onCFC() {
        this.interface.loadWidget("DonationGoals")
    }

    checkBuddies() {
        if(!this.buddyNotification) return
        if(this.world.client.unseenRequests.length < 1) {
            this.buddyNotification.visible = false
        } else {
            this.buddyNotification.visible = true
            this.requestCount.text = this.world.client.unseenRequests.length
        }
    }

    onMailClick() {
        this.interface.loadWidget('Mail');
    }

    onPhoneClick() {
        this.spyPhone.show()
    }

    onEsc() {
        this.stopCrosshair();
    }

    onPartyHover() {
        var pipelineInstance = this.scene.scene.plugins
            .get('rexOutlinePipeline')
            .add(this.party_button, {});
    }

    onPartyHoverOut() {
        this.scene.scene.plugins
            .get('rexOutlinePipeline')
            .remove(this.party_button);
    }

    playItemSfx(peng,frame) {
        if(peng.itemSfxTimer) {
            this.time.removeEvent(peng.itemSfxTimer)
            peng.itemSfxTimer = null
        }
        let items = Object.values(peng.items.equippedFlat)
        for (let id of items) {
            if(!this.crumbs.items[id]) continue
            let crumb = this.crumbs.items[id].sfx
            if (crumb) {
                if(crumb.alias) {
                    id = crumb.alias
                    crumb = this.crumbs.items[crumb.alias].sfx
                }
                if (crumb.secret_frame) {
                    if(peng.getSecretFrame(crumb.frame) !== crumb.secret_frame) continue
                }
                if (frame == crumb.frame) {
                    if(crumb.delay) {
                        peng.itemSfxTimer = this.time.addEvent({
                            delay: 41.6666 * crumb.delay,
                            callback: () => this.soundManager.playSfx(`sounds/items/${id}`)
                        })
                    } else {
                        this.soundManager.playSfx(`sounds/items/${id}`)
                    }
                }
            }
        } 
    }

    update() {
        super.update();
        this.playerCard?.inventory?.update();
    }

    setIglooLikes(num) {
        this.like_button_amount_text.setText(num.toString())
    }

    setIglooLiked() {
        if(!this.like_button) return
        this.like_button.__Button.lockFrame = true
        this.like_button_text.setText("Liked")
    }

    resetIglooLikes() {
        this.like_button.__Button.lockFrame = false
        this.like_button_text.setText("Like")
        this.like_button_amount_text.setText("0")
    }

    onLikeIgloo() {
        if (this.like_button_text.text != "Like") return
        this.world.network.send('like_igloo')
    }

    questComplete(difficulty) {
        this.questReward.showReward(difficulty);
        this.questReward.x = this.world.client.penguin.x;
        this.questReward.y = this.world.client.penguin.y - 100;
        this.soundManager.playSfx("quest");
    }

    chatDisabled(timeRemaining) {
        if (this.cooldownTimer) {
            clearInterval(this.cooldownTimer);
            this.cooldownTimer = null;
        }

        // Disable the TextInput
        this.chatInput.clearText();
        this.chatInput.visible = false;

        // Show Chat Blocked Container
        this.chat_blocked.visible = true;

        const updateChatBlockedText = () => {
            this.chat_blocked_text.setText(`You can chat again in ${timeRemaining} seconds`);
            timeRemaining--;

            if (timeRemaining < 0) {
                this.chatEnabled();
            }
        };

        updateChatBlockedText();
        this.cooldownTimer = setInterval(updateChatBlockedText, 1000);
    }

    chatEnabled() {
        if (this.cooldownTimer) {
            clearInterval(this.cooldownTimer);
            this.cooldownTimer = null;
        }
        this.chatInput.visible = true;
        this.chat_blocked.visible = false;
    }

    coinTween() {
        const originalY = this.world.client.penguin.y - 50;
        const targetY = originalY - 70;

        this.coin.setPosition(this.world.client.penguin.x, originalY);
        this.coin.setDepth(1002);
        this.coin.setAlpha(1);
        this.coin.visible = true;

        this.tweenCoin = this.tweens.add({
            targets: [this.coin],
            y: targetY,
            alpha: 0,
            ease: 'Linear',
            duration: 1500,
            onComplete: () => {
                this.coin.visible = false;

                this.tweens.add({
                    targets: [this.coin],
                    y: originalY,
                    alpha: 1,
                    ease: 'Linear',
                    duration: 0
                });
            }
        });

        this.coin_sprite.play("coin");

        this.interface.refreshPlayerCard();
    }



    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
