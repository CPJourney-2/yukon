import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton, Interactive, ShowHint, NineSlice, InputText } from '@components/components'

import PaperDoll from '../playercard/paperdoll/PaperDoll'
import AltsList from './alts/AltsList'
import SysPostcardSender from './other/SysPostcardSender'
import BanReasons from './banreasons/BanReasons'
import BanHistory from './banhistory/BanHistory'
import MoreOptions from './other/MoreOptions'
import ChatLog from './other/ChatLog'

/* START OF COMPILED CODE */

export default class ModActions extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 759, y ?? 460);

        /** @type {Phaser.GameObjects.Image} */
        this.arrow2222;
        /** @type {Phaser.GameObjects.Container} */
        this.tabBtn2;
        /** @type {Phaser.GameObjects.Text} */
        this.username_status_txt;
        /** @type {Phaser.GameObjects.Container} */
        this.nameVerify;
        /** @type {Phaser.GameObjects.Image} */
        this.arrownames;
        /** @type {Phaser.GameObjects.Container} */
        this.tabBtnNames;
        /** @type {AltsList} */
        this.altsList;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg;
        /** @type {Phaser.GameObjects.Image} */
        this.arrow;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.highlightArea;
        /** @type {Phaser.GameObjects.Container} */
        this.tabBtn;
        /** @type {PaperDoll} */
        this.paperDoll;
        /** @type {Phaser.GameObjects.Sprite} */
        this.badge;
        /** @type {Phaser.GameObjects.Text} */
        this.username;
        /** @type {Phaser.GameObjects.Text} */
        this.joindate_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.logintime_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.invisible_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.muted_until_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.mutereason_txt;
        /** @type {Phaser.GameObjects.Container} */
        this.muteRecords;
        /** @type {Phaser.GameObjects.Text} */
        this.ban_count_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.banned_until_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.banreason_txt_1;
        /** @type {Phaser.GameObjects.Container} */
        this.banRecords;
        /** @type {Phaser.GameObjects.Text} */
        this.tp_player_text;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_warn;
        /** @type {Phaser.GameObjects.Text} */
        this.rank_txt;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_sendinfo;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_infoannonymous;
        /** @type {Phaser.GameObjects.Container} */
        this.infoAnnonymous;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_secretkick;
        /** @type {Phaser.GameObjects.Container} */
        this.secretKick;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_kick;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_mute;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_ban;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_3h;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_1d;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_3d;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_1w;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_3w;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_perm;
        /** @type {Phaser.GameObjects.Image} */
        this.checkbox_ip;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.durationBlock;
        /** @type {Phaser.GameObjects.Text} */
        this.recordsBtnTxt;
        /** @type {Phaser.GameObjects.Text} */
        this.tp_player_text_1;
        /** @type {Phaser.GameObjects.Text} */
        this.coins_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.baninputtxt;
        /** @type {Phaser.GameObjects.NineSlice} */
        this.bg_3;
        /** @type {Phaser.GameObjects.Text} */
        this.username_1;
        /** @type {Phaser.GameObjects.Container} */
        this.rankChanger;
        /** @type {MoreOptions} */
        this.moreOptions;
        /** @type {BanReasons} */
        this.banReasons;
        /** @type {SysPostcardSender} */
        this.sysPostcardSender;
        /** @type {BanHistory} */
        this.banHistory;
        /** @type {ChatLog} */
        this.chatLog;
        /** @type {Phaser.GameObjects.Image[]} */
        this.action_ticks;
        /** @type {Phaser.GameObjects.Image[]} */
        this.duration_ticks;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // nameVerify
        const nameVerify = scene.add.container(311, 54);
        this.add(nameVerify);

        // main_modactions_popoutname
        const main_modactions_popoutname = scene.add.nineslice(370, 271, "main", "chatlog/bg", 400, 350, 57, 60, 58, 60);
        main_modactions_popoutname.setOrigin(1, 1);
        nameVerify.add(main_modactions_popoutname);

        // tabBtn2
        const tabBtn2 = scene.add.container(376, 71);
        nameVerify.add(tabBtn2);

        // tab_handle111
        const tab_handle111 = scene.add.image(8, 2, "main", "tab");
        tab_handle111.angle = -90;
        tabBtn2.add(tab_handle111);

        // arrow2222
        const arrow2222 = scene.add.image(1, 0, "main", "tab-arrow");
        arrow2222.angle = -90;
        arrow2222.flipY = true;
        tabBtn2.add(arrow2222);

        // username_status_txt
        const username_status_txt = scene.add.text(221, -12, "", {});
        username_status_txt.setOrigin(0.5, 0.5);
        username_status_txt.text = "Status: pending";
        username_status_txt.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold" });
        nameVerify.add(username_status_txt);

        // username_status_chosoe
        const username_status_chosoe = scene.add.text(219, 38, "", {});
        username_status_chosoe.setOrigin(0.5, 0.5);
        username_status_chosoe.text = "Choose an action:";
        username_status_chosoe.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "25px" });
        nameVerify.add(username_status_chosoe);

        // nameApproveContain
        const nameApproveContain = scene.add.container(193, 115);
        nameVerify.add(nameApproveContain);

        // nameapprovetxt
        const nameapprovetxt = scene.add.text(-10, -26, "", {});
        nameapprovetxt.setOrigin(0.5, 0.5);
        nameapprovetxt.text = "Approve";
        nameapprovetxt.setStyle({ "align": "center", "color": "#18a039", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        nameApproveContain.add(nameapprovetxt);

        // nameApproveRect_144
        const nameApproveRect_144 = scene.add.rectangle(97, -26, 50, 10);
        nameApproveRect_144.angle = 135;
        nameApproveRect_144.setOrigin(0.5, 0);
        nameApproveRect_144.isFilled = true;
        nameApproveRect_144.fillColor = 1613881;
        nameApproveContain.add(nameApproveRect_144);

        // nameApproveRect22
        const nameApproveRect22 = scene.add.rectangle(73, -24, 30, 10);
        nameApproveRect22.angle = 45;
        nameApproveRect22.setOrigin(0.5, 0);
        nameApproveRect22.isFilled = true;
        nameApproveRect22.fillColor = 1613881;
        nameApproveContain.add(nameApproveRect22);

        // nameRejectContain
        const nameRejectContain = scene.add.container(203, 180);
        nameVerify.add(nameRejectContain);

        // namerejecttxt
        const namerejecttxt = scene.add.text(-19, -28, "", {});
        namerejecttxt.setOrigin(0.5, 0.5);
        namerejecttxt.text = "Reject";
        namerejecttxt.setStyle({ "align": "center", "color": "#a51c13ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        nameRejectContain.add(namerejecttxt);

        // nameApproveRect_1
        const nameApproveRect_1 = scene.add.rectangle(72, -25, 60, 10);
        nameApproveRect_1.angle = 135;
        nameApproveRect_1.setOrigin(0.5, 0);
        nameApproveRect_1.isFilled = true;
        nameApproveRect_1.fillColor = 10820627;
        nameRejectContain.add(nameApproveRect_1);

        // nameApproveRect_2
        const nameApproveRect_2 = scene.add.rectangle(70, -32, 60, 10);
        nameApproveRect_2.angle = 45;
        nameApproveRect_2.setOrigin(0.5, 0);
        nameApproveRect_2.isFilled = true;
        nameApproveRect_2.fillColor = 10820627;
        nameRejectContain.add(nameApproveRect_2);

        // username_status_tochange
        const username_status_tochange = scene.add.text(223, 226, "", {});
        username_status_tochange.setOrigin(0.5, 0.5);
        username_status_tochange.text = "To change username,\nsee More Options";
        username_status_tochange.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "25px" });
        nameVerify.add(username_status_tochange);

        // nameApproveBtn
        const nameApproveBtn = scene.add.rectangle(211, 63, 30, 10);
        nameApproveBtn.scaleX = 6.368451510897428;
        nameApproveBtn.scaleY = 4.907121455657416;
        nameApproveBtn.setOrigin(0.5, 0);
        nameApproveBtn.fillColor = 1613881;
        nameVerify.add(nameApproveBtn);

        // nameApproveBtn_1
        const nameApproveBtn_1 = scene.add.rectangle(215, 126, 30, 10);
        nameApproveBtn_1.scaleX = 6.368451510897428;
        nameApproveBtn_1.scaleY = 4.907121455657416;
        nameApproveBtn_1.setOrigin(0.5, 0);
        nameApproveBtn_1.fillColor = 1613881;
        nameVerify.add(nameApproveBtn_1);

        // username_status_txt_1
        const username_status_txt_1 = scene.add.text(216, -45, "", {});
        username_status_txt_1.setOrigin(0.5, 0.5);
        username_status_txt_1.text = "Username";
        username_status_txt_1.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold" });
        nameVerify.add(username_status_txt_1);

        // tabBtnNames
        const tabBtnNames = scene.add.container(415, 123);
        this.add(tabBtnNames);

        // tab_handlenames
        const tab_handlenames = scene.add.image(8, 2, "main", "tab");
        tab_handlenames.angle = -90;
        tabBtnNames.add(tab_handlenames);

        // arrownames
        const arrownames = scene.add.image(0, -51, "main", "tab-arrow");
        arrownames.angle = -90;
        tabBtnNames.add(arrownames);

        // verifyanemtetdxt
        const verifyanemtetdxt = scene.add.text(-13, 14, "", {});
        verifyanemtetdxt.angle = -90;
        verifyanemtetdxt.setOrigin(0.5, 0);
        verifyanemtetdxt.text = "Verify Name";
        verifyanemtetdxt.setStyle({ "fixedWidth":120,"fontFamily": "Burbank Small", "fontSize": "20px" });
        tabBtnNames.add(verifyanemtetdxt);

        // altsList
        const altsList = new AltsList(scene, 319, -3);
        altsList.visible = false;
        this.add(altsList);

        // bg
        const bg = scene.add.nineslice(-430, -342.5, "prompt", "window", 836, 720, 44, 39, 40, 41);
        bg.setOrigin(0, 0);
        this.add(bg);

        // tabBtn
        const tabBtn = scene.add.container(411, -174);
        this.add(tabBtn);

        // tab_handle
        const tab_handle = scene.add.image(8, 2, "main", "tab");
        tab_handle.angle = -90;
        tabBtn.add(tab_handle);

        // arrow
        const arrow = scene.add.image(0, -47, "main", "tab-arrow");
        arrow.angle = -90;
        tabBtn.add(arrow);

        // item_txt_2
        const item_txt_2 = scene.add.text(-13, 11, "", {});
        item_txt_2.angle = -90;
        item_txt_2.setOrigin(0.5, 0);
        item_txt_2.text = "Show Alts";
        item_txt_2.setStyle({ "fixedWidth":100,"fontFamily": "Burbank Small", "fontSize": "20px" });
        tabBtn.add(item_txt_2);

        // highlightArea
        const highlightArea = scene.add.rectangle(-592, -85, 128, 128);
        highlightArea.scaleX = 2.94042803259448;
        highlightArea.scaleY = 0.18647266329028514;
        highlightArea.fillColor = 5368575;
        highlightArea.fillAlpha = 100;
        tabBtn.add(highlightArea);

        // card_photo
        const card_photo = scene.add.image(-175, -39, "main", "card-photo");
        card_photo.scaleX = 0.9;
        card_photo.scaleY = 0.9;
        this.add(card_photo);

        // paperDoll
        const paperDoll = new PaperDoll(scene, -175, -39);
        paperDoll.scaleX = 0.9;
        paperDoll.scaleY = 0.9;
        this.add(paperDoll);

        // badge
        const badge = scene.add.sprite(-316, -238, "main", "badge/free");
        badge.visible = false;
        this.add(badge);

        // username
        const username = scene.add.text(-178, -259, "", {});
        username.setOrigin(0.5, 0.5);
        username.text = "Username";
        username.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":450,"fontFamily": "Burbank Small", "fontSize": "32px", "fontStyle": "bold", "stroke": "#297FCC", "strokeThickness":8});
        this.add(username);

        // x_button
        const x_button = scene.add.image(354, -288, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(354, -290, "main", "blue-x");
        this.add(blue_x);

        // ban_txt
        const ban_txt = scene.add.text(212, 12, "", {});
        ban_txt.setOrigin(0.5, 0);
        ban_txt.text = "3H  1D  3D  1W  3W PERM IP";
        ban_txt.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold" });
        this.add(ban_txt);

        // ban_icon
        const ban_icon = scene.add.image(187, -73, "main", "mod-icon");
        ban_icon.setOrigin(0.5, 0);
        this.add(ban_icon);

        // joindate_txt
        const joindate_txt = scene.add.text(157, 286, "", {});
        joindate_txt.setOrigin(0.5, 0.5);
        joindate_txt.text = "no join time recorded";
        joindate_txt.setStyle({ "align": "right", "color": "#000000ff", "fixedWidth":430,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(joindate_txt);

        // ban_txt_1
        const ban_txt_1 = scene.add.text(142, -73, "", {});
        ban_txt_1.setOrigin(0.5, 0);
        ban_txt_1.text = "Ban";
        ban_txt_1.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(ban_txt_1);

        // logintime_txt
        const logintime_txt = scene.add.text(157, 326, "", {});
        logintime_txt.setOrigin(0.5, 0.5);
        logintime_txt.text = "no login time recorded";
        logintime_txt.setStyle({ "align": "right", "color": "#000000ff", "fixedWidth":430,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(logintime_txt);

        // kick_player_text
        const kick_player_text = scene.add.text(121, -157, "", {});
        kick_player_text.text = "Kick";
        kick_player_text.setStyle({ "color": "#000000ff", "fixedWidth":70,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(kick_player_text);

        // ignore_icon
        const ignore_icon = scene.add.image(193, -158, "main", "ignore-icon");
        ignore_icon.setOrigin(0.5, 0);
        this.add(ignore_icon);

        // text_1
        const text_1 = scene.add.text(-397, -315, "", {});
        text_1.text = "More options:";
        text_1.setStyle({ "color": "#000", "fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(text_1);

        // moreoptions_btn
        const moreoptions_btn = scene.add.image(-204, -299, "main", "grey-arrow");
        moreoptions_btn.angle = 90;
        moreoptions_btn.setOrigin(0.5, 0);
        this.add(moreoptions_btn);

        // emotes_32
        const emotes_32 = scene.add.image(192, -181, "main", "emotes/32");
        emotes_32.scaleX = 0.8;
        emotes_32.scaleY = 0.8;
        this.add(emotes_32);

        // roundedrectangleimage_8
        const roundedrectangleimage_8 = scene.add.roundedRectangleImage(-273, 177, 194, 40);
        roundedrectangleimage_8.fillColor = 1136020;
        roundedrectangleimage_8.isStroked = false;
        roundedrectangleimage_8.radiusTopLeft = 10;
        roundedrectangleimage_8.radiusTopRight = 10;
        roundedrectangleimage_8.radiusBottomLeft = 10;
        roundedrectangleimage_8.radiusBottomRight = 10;
        this.add(roundedrectangleimage_8);

        // roundedrectangleimage_9
        const roundedrectangleimage_9 = scene.add.roundedRectangleImage(-78, 177, 194, 40);
        roundedrectangleimage_9.fillColor = 1136020;
        roundedrectangleimage_9.isStroked = false;
        roundedrectangleimage_9.radiusTopLeft = 10;
        roundedrectangleimage_9.radiusTopRight = 10;
        roundedrectangleimage_9.radiusBottomLeft = 10;
        roundedrectangleimage_9.radiusBottomRight = 10;
        this.add(roundedrectangleimage_9);

        // invisible_txt
        const invisible_txt = scene.add.text(44, 172, "", {});
        invisible_txt.setOrigin(1, 0.5);
        invisible_txt.visible = false;
        invisible_txt.text = "Invisible? YES";
        invisible_txt.setStyle({ "align": "right", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        this.add(invisible_txt);

        // wave
        const wave = scene.add.image(-347, 176, "main", "wave");
        wave.scaleX = 0.4;
        wave.scaleY = 0.4;
        this.add(wave);

        // chat_icon_1
        const chat_icon_1 = scene.add.image(-152, 176, "main", "chat-icon");
        this.add(chat_icon_1);

        // emotes_5
        const emotes_5 = scene.add.image(200, -223, "main", "emotes/5");
        emotes_5.scaleX = 0.8;
        emotes_5.scaleY = 0.8;
        this.add(emotes_5);

        // chat_icon
        const chat_icon = scene.add.image(205, -102, "main", "chat-icon");
        this.add(chat_icon);

        // muteRecords
        const muteRecords = scene.add.container(-314, 199);
        muteRecords.visible = false;
        this.add(muteRecords);

        // muted_until_txt
        const muted_until_txt = scene.add.text(143, 51, "", {});
        muted_until_txt.setOrigin(0.5, 0.5);
        muted_until_txt.text = "not currently muted";
        muted_until_txt.setStyle({ "color": "#000000ff", "fixedWidth":430,"fontFamily": "Burbank Small", "fontSize": "20px" });
        muteRecords.add(muted_until_txt);

        // mutereason_txt
        const mutereason_txt = scene.add.text(142, 82, "", {});
        mutereason_txt.setOrigin(0.5, 0.5);
        mutereason_txt.text = "no recorded reason";
        mutereason_txt.setStyle({ "color": "#000000ff", "fixedWidth":430,"fontFamily": "Burbank Small", "fontSize": "20px" });
        mutereason_txt.setWordWrapWidth(430);
        muteRecords.add(mutereason_txt);

        // tp_player_text_122
        const tp_player_text_122 = scene.add.text(-73, 0, "", {});
        tp_player_text_122.text = "Mute Records";
        tp_player_text_122.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
        muteRecords.add(tp_player_text_122);

        // learn_button_11
        const learn_button_11 = scene.add.nineslice(165, 134, "login", "learn-button", 300, 60, 46, 44, 22, 21);
        learn_button_11.scaleX = 0.6;
        learn_button_11.scaleY = 0.6;
        muteRecords.add(learn_button_11);

        // recordsBtnTxt_2
        const recordsBtnTxt_2 = scene.add.text(168, 122, "", {});
        recordsBtnTxt_2.setOrigin(0.5, 0);
        recordsBtnTxt_2.text = "Full Mute History";
        recordsBtnTxt_2.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        muteRecords.add(recordsBtnTxt_2);

        // banRecords
        const banRecords = scene.add.container(-314, 199);
        this.add(banRecords);

        // ban_count_txt
        const ban_count_txt = scene.add.text(79, 43, "", {});
        ban_count_txt.setOrigin(0.5, 0.5);
        ban_count_txt.text = "banned 0 times";
        ban_count_txt.setStyle({ "color": "#000000ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "20px" });
        banRecords.add(ban_count_txt);

        // banned_until_txt
        const banned_until_txt = scene.add.text(143, 71, "", {});
        banned_until_txt.setOrigin(0.5, 0.5);
        banned_until_txt.text = "not currently banned";
        banned_until_txt.setStyle({ "color": "#000000ff", "fixedWidth":430,"fontFamily": "Burbank Small", "fontSize": "20px" });
        banRecords.add(banned_until_txt);

        // banreason_txt_1
        const banreason_txt_1 = scene.add.text(142, 100, "", {});
        banreason_txt_1.setOrigin(0.5, 0.5);
        banreason_txt_1.text = "no recorded reason";
        banreason_txt_1.setStyle({ "color": "#000000ff", "fixedWidth":430,"fontFamily": "Burbank Small", "fontSize": "20px" });
        banreason_txt_1.setWordWrapWidth(430);
        banRecords.add(banreason_txt_1);

        // tp_player_text_1222
        const tp_player_text_1222 = scene.add.text(-73, 0, "", {});
        tp_player_text_1222.text = "Ban Records";
        tp_player_text_1222.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold" });
        banRecords.add(tp_player_text_1222);

        // learn_button_3
        const learn_button_3 = scene.add.nineslice(165, 134, "login", "learn-button", 300, 60, 46, 44, 22, 21);
        learn_button_3.scaleX = 0.6;
        learn_button_3.scaleY = 0.6;
        banRecords.add(learn_button_3);

        // recordsBtnTxt_1
        const recordsBtnTxt_1 = scene.add.text(168, 122, "", {});
        recordsBtnTxt_1.setOrigin(0.5, 0);
        recordsBtnTxt_1.text = "Full Ban History";
        recordsBtnTxt_1.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        banRecords.add(recordsBtnTxt_1);

        // mute_player_text
        const mute_player_text = scene.add.text(121, -116, "", {});
        mute_player_text.text = "Mute";
        mute_player_text.setStyle({ "color": "#000000ff", "fixedWidth":70,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(mute_player_text);

        // tp_player_text
        const tp_player_text = scene.add.text(-275, 163, "", {});
        tp_player_text.setOrigin(0.5, 0);
        tp_player_text.text = "Teleport";
        tp_player_text.setStyle({ "fixedWidth":100,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(tp_player_text);

        // chatlog_btn
        const chatlog_btn = scene.add.image(15, 176, "main", "grey-arrow");
        chatlog_btn.angle = 90;
        chatlog_btn.setOrigin(0.5, 0);
        this.add(chatlog_btn);

        // teleport_btn
        const teleport_btn = scene.add.image(-186, 176, "main", "grey-arrow");
        teleport_btn.angle = 90;
        teleport_btn.setOrigin(0.5, 0);
        this.add(teleport_btn);

        // checkbox_warn
        const checkbox_warn = scene.add.image(92, -221, "login", "checkbox-active");
        checkbox_warn.scaleX = 0.8;
        checkbox_warn.scaleY = 0.8;
        checkbox_warn.setOrigin(0.41509, 0.5849);
        this.add(checkbox_warn);

        // rank_txt
        const rank_txt = scene.add.text(-328, -211, "", {});
        rank_txt.setOrigin(0, 0.5);
        rank_txt.text = "rank: 0";
        rank_txt.setStyle({ "fixedWidth":100,"fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        this.add(rank_txt);

        // stamps_txt_2
        const stamps_txt_2 = scene.add.text(201, -314, "", {});
        stamps_txt_2.setOrigin(0.5, 0);
        stamps_txt_2.text = "Moderation Actions";
        stamps_txt_2.setStyle({ "color": "#000000ff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        this.add(stamps_txt_2);

        // stamps_txt_3
        const stamps_txt_3 = scene.add.text(198, -280, "", {});
        stamps_txt_3.setOrigin(0.5, 0);
        stamps_txt_3.text = "Choose one:";
        stamps_txt_3.setStyle({ "color": "#000000ff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(stamps_txt_3);

        // sendinfo_player_text
        const sendinfo_player_text = scene.add.text(120, -195, "", {});
        sendinfo_player_text.text = "Info";
        sendinfo_player_text.setStyle({ "color": "#000000ff", "fixedWidth":120,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(sendinfo_player_text);

        // checkbox_sendinfo
        const checkbox_sendinfo = scene.add.image(92, -181, "login", "checkbox");
        checkbox_sendinfo.scaleX = 0.8;
        checkbox_sendinfo.scaleY = 0.8;
        checkbox_sendinfo.setOrigin(0.41509, 0.5849);
        this.add(checkbox_sendinfo);

        // infoAnnonymous
        const infoAnnonymous = scene.add.container(233, -192);
        infoAnnonymous.visible = false;
        this.add(infoAnnonymous);

        // kick_player_text_122
        const kick_player_text_122 = scene.add.text(-15, 0, "", {});
        kick_player_text_122.text = "Annonymous?";
        kick_player_text_122.setStyle({ "color": "#000000ff", "fixedWidth":120,"fontFamily": "Burbank Small", "fontSize": "18px" });
        infoAnnonymous.add(kick_player_text_122);

        // checkbox_infoannonymous
        const checkbox_infoannonymous = scene.add.image(125, 12, "login", "checkbox");
        checkbox_infoannonymous.scaleX = 0.8;
        checkbox_infoannonymous.scaleY = 0.8;
        checkbox_infoannonymous.setOrigin(0.41509, 0.5849);
        infoAnnonymous.add(checkbox_infoannonymous);

        // secretKick
        const secretKick = scene.add.container(217, -153);
        secretKick.visible = false;
        this.add(secretKick);

        // kick_player_text_1
        const kick_player_text_1 = scene.add.text(0, 0, "", {});
        kick_player_text_1.text = "Secretly?";
        kick_player_text_1.setStyle({ "color": "#000000ff", "fixedWidth":120,"fontFamily": "Burbank Small", "fontSize": "24px" });
        secretKick.add(kick_player_text_1);

        // checkbox_secretkick
        const checkbox_secretkick = scene.add.image(132, 14, "login", "checkbox");
        checkbox_secretkick.scaleX = 0.8;
        checkbox_secretkick.scaleY = 0.8;
        checkbox_secretkick.setOrigin(0.41509, 0.5849);
        secretKick.add(checkbox_secretkick);

        // checkbox_kick
        const checkbox_kick = scene.add.image(92, -142, "login", "checkbox");
        checkbox_kick.scaleX = 0.8;
        checkbox_kick.scaleY = 0.8;
        checkbox_kick.setOrigin(0.41509, 0.5849);
        this.add(checkbox_kick);

        // checkbox_mute
        const checkbox_mute = scene.add.image(92, -102, "login", "checkbox");
        checkbox_mute.scaleX = 0.8;
        checkbox_mute.scaleY = 0.8;
        checkbox_mute.setOrigin(0.41509, 0.5849);
        this.add(checkbox_mute);

        // checkbox_ban
        const checkbox_ban = scene.add.image(92, -59, "login", "checkbox");
        checkbox_ban.scaleX = 0.8;
        checkbox_ban.scaleY = 0.8;
        checkbox_ban.setOrigin(0.41509, 0.5849);
        this.add(checkbox_ban);

        // kick_player_text_2
        const kick_player_text_2 = scene.add.text(155, -236, "", {});
        kick_player_text_2.setOrigin(0.5, 0);
        kick_player_text_2.text = "Warn";
        kick_player_text_2.setStyle({ "color": "#000000ff", "fixedWidth":70,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(kick_player_text_2);

        // stamps_txt_4
        const stamps_txt_4 = scene.add.text(221, -25, "", {});
        stamps_txt_4.setOrigin(0.5, 0);
        stamps_txt_4.text = "Duration (for bans):";
        stamps_txt_4.setStyle({ "color": "#000000ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(stamps_txt_4);

        // checkbox_3h
        const checkbox_3h = scene.add.image(72, 69, "login", "checkbox-active");
        checkbox_3h.scaleX = 0.8;
        checkbox_3h.scaleY = 0.8;
        checkbox_3h.setOrigin(0.41509, 0.5849);
        this.add(checkbox_3h);

        // checkbox_1d
        const checkbox_1d = scene.add.image(115, 69, "login", "checkbox");
        checkbox_1d.scaleX = 0.8;
        checkbox_1d.scaleY = 0.8;
        checkbox_1d.setOrigin(0.41509, 0.5849);
        this.add(checkbox_1d);

        // checkbox_3d
        const checkbox_3d = scene.add.image(159, 69, "login", "checkbox");
        checkbox_3d.scaleX = 0.8;
        checkbox_3d.scaleY = 0.8;
        checkbox_3d.setOrigin(0.41509, 0.5849);
        this.add(checkbox_3d);

        // checkbox_1w
        const checkbox_1w = scene.add.image(204, 69, "login", "checkbox");
        checkbox_1w.scaleX = 0.8;
        checkbox_1w.scaleY = 0.8;
        checkbox_1w.setOrigin(0.41509, 0.5849);
        this.add(checkbox_1w);

        // checkbox_3w
        const checkbox_3w = scene.add.image(250, 69, "login", "checkbox");
        checkbox_3w.scaleX = 0.8;
        checkbox_3w.scaleY = 0.8;
        checkbox_3w.setOrigin(0.41509, 0.5849);
        this.add(checkbox_3w);

        // checkbox_perm
        const checkbox_perm = scene.add.image(306, 69, "login", "checkbox");
        checkbox_perm.scaleX = 0.8;
        checkbox_perm.scaleY = 0.8;
        checkbox_perm.setOrigin(0.41509, 0.5849);
        this.add(checkbox_perm);

        // checkbox_ip
        const checkbox_ip = scene.add.image(358, 69, "login", "checkbox");
        checkbox_ip.scaleX = 0.8;
        checkbox_ip.scaleY = 0.8;
        checkbox_ip.setOrigin(0.41509, 0.5849);
        this.add(checkbox_ip);

        // stamps_txt_5
        const stamps_txt_5 = scene.add.text(220, 98, "", {});
        stamps_txt_5.setOrigin(0.5, 0);
        stamps_txt_5.text = "Reason (mandatory for bans):";
        stamps_txt_5.setStyle({ "color": "#000000ff", "fixedWidth":330,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(stamps_txt_5);

        // learn_button_1
        const learn_button_1 = scene.add.nineslice(212, 210, "login", "learn-button", 240, 60, 46, 44, 22, 21);
        this.add(learn_button_1);

        // learn_button_2
        const learn_button_2 = scene.add.nineslice(-319, 333, "login", "learn-button", 240, 60, 46, 44, 22, 21);
        learn_button_2.scaleX = 0.6;
        learn_button_2.scaleY = 0.6;
        this.add(learn_button_2);

        // durationBlock
        const durationBlock = scene.add.rectangle(218, -22, 200, 30);
        durationBlock.scaleX = 1.6799396827284023;
        durationBlock.scaleY = 3.762180071696074;
        durationBlock.setOrigin(0.5, 0);
        durationBlock.visible = false;
        durationBlock.alpha = 0.7;
        durationBlock.isFilled = true;
        durationBlock.fillColor = 2719692;
        this.add(durationBlock);

        // ban_txt_2
        const ban_txt_2 = scene.add.text(214, 192, "", {});
        ban_txt_2.setOrigin(0.5, 0);
        ban_txt_2.text = "Do Action";
        ban_txt_2.setStyle({ "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        this.add(ban_txt_2);

        // recordsBtnTxt
        const recordsBtnTxt = scene.add.text(-319, 321, "", {});
        recordsBtnTxt.setOrigin(0.5, 0);
        recordsBtnTxt.text = "See Mutes";
        recordsBtnTxt.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        this.add(recordsBtnTxt);

        // tp_player_text_1
        const tp_player_text_1 = scene.add.text(-72, 161, "", {});
        tp_player_text_1.setOrigin(0.5, 0);
        tp_player_text_1.text = "Chat Logs";
        tp_player_text_1.setStyle({ "fixedWidth":120,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(tp_player_text_1);

        // roundedrectangleimage_1
        const roundedrectangleimage_1 = scene.add.roundedRectangleImage(219, 155, 330, 40);
        roundedrectangleimage_1.fillColor = 1136020;
        roundedrectangleimage_1.isStroked = false;
        this.add(roundedrectangleimage_1);

        // teleport_btn_1
        const teleport_btn_1 = scene.add.image(359, 170, "main", "grey-arrow");
        teleport_btn_1.angle = -180;
        teleport_btn_1.setOrigin(0.5, 0);
        this.add(teleport_btn_1);

        // coins_txt
        const coins_txt = scene.add.text(-17, -208, "", {});
        coins_txt.setOrigin(1, 0.5);
        coins_txt.text = "9999999999";
        coins_txt.setStyle({ "align": "right", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        this.add(coins_txt);

        // card_coin
        const card_coin = scene.add.image(-1, -209, "main", "card-coin");
        card_coin.scaleX = 0.8;
        card_coin.scaleY = 0.8;
        this.add(card_coin);

        // rankChangeBtn
        const rankChangeBtn = scene.add.image(-330, -211, "main", "grey-arrow");
        rankChangeBtn.angle = 90;
        rankChangeBtn.setOrigin(0.5, 0);
        this.add(rankChangeBtn);

        // baninputtxt
        const baninputtxt = scene.add.text(76, 142, "", {});
        baninputtxt.text = "Reason input";
        baninputtxt.setStyle({ "color": "#ffffff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "22px" });
        this.add(baninputtxt);

        // rankChanger
        const rankChanger = scene.add.container(-175, 15);
        rankChanger.visible = false;
        this.add(rankChanger);

        // bg_3
        const bg_3 = scene.add.nineslice(-1.8048461159607996, 0.8304532379258944, "prompt", "window", 428, 274, 44, 39, 40, 41);
        rankChanger.add(bg_3);

        // learn_button_4
        const learn_button_4 = scene.add.nineslice(-94.8048461159608, -36.169546762074106, "login", "learn-button", 300, 60, 46, 44, 22, 21);
        learn_button_4.scaleX = 0.6;
        learn_button_4.scaleY = 0.6;
        rankChanger.add(learn_button_4);

        // stamps_txt_1
        const stamps_txt_1 = scene.add.text(-92, -48, "", {});
        stamps_txt_1.setOrigin(0.5, 0);
        stamps_txt_1.text = "(10) Mascots";
        stamps_txt_1.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "20px" });
        rankChanger.add(stamps_txt_1);

        // learn_button_5
        const learn_button_5 = scene.add.nineslice(93.1951538840392, -36.169546762074106, "login", "learn-button", 300, 60, 46, 44, 22, 21);
        learn_button_5.scaleX = 0.6;
        learn_button_5.scaleY = 0.6;
        rankChanger.add(learn_button_5);

        // stamps_txt_6
        const stamps_txt_6 = scene.add.text(96, -48, "", {});
        stamps_txt_6.setOrigin(0.5, 0);
        stamps_txt_6.text = "(8) Owners";
        stamps_txt_6.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "20px" });
        rankChanger.add(stamps_txt_6);

        // learn_button_6
        const learn_button_6 = scene.add.nineslice(93.1951538840392, 3.8304532379258944, "login", "learn-button", 300, 60, 46, 44, 22, 21);
        learn_button_6.scaleX = 0.6;
        learn_button_6.scaleY = 0.6;
        rankChanger.add(learn_button_6);

        // stamps_txt_7
        const stamps_txt_7 = scene.add.text(96, -8, "", {});
        stamps_txt_7.setOrigin(0.5, 0);
        stamps_txt_7.text = "(5) Devs";
        stamps_txt_7.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "20px" });
        rankChanger.add(stamps_txt_7);

        // learn_button_7
        const learn_button_7 = scene.add.nineslice(-94.8048461159608, 3.8304532379258944, "login", "learn-button", 300, 60, 46, 44, 22, 21);
        learn_button_7.scaleX = 0.6;
        learn_button_7.scaleY = 0.6;
        rankChanger.add(learn_button_7);

        // stamps_txt_8
        const stamps_txt_8 = scene.add.text(-92, -8, "", {});
        stamps_txt_8.setOrigin(0.5, 0);
        stamps_txt_8.text = "(6) Heads";
        stamps_txt_8.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "20px" });
        rankChanger.add(stamps_txt_8);

        // learn_button_8
        const learn_button_8 = scene.add.nineslice(93.1951538840392, 43.830453237925894, "login", "learn-button", 300, 60, 46, 44, 22, 21);
        learn_button_8.scaleX = 0.6;
        learn_button_8.scaleY = 0.6;
        rankChanger.add(learn_button_8);

        // stamps_txt_12
        const stamps_txt_12 = scene.add.text(96, 32, "", {});
        stamps_txt_12.setOrigin(0.5, 0);
        stamps_txt_12.text = "(3) Trial Mods";
        stamps_txt_12.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "20px" });
        rankChanger.add(stamps_txt_12);

        // learn_button_9
        const learn_button_9 = scene.add.nineslice(-94.8048461159608, 43.830453237925894, "login", "learn-button", 300, 60, 46, 44, 22, 21);
        learn_button_9.scaleX = 0.6;
        learn_button_9.scaleY = 0.6;
        rankChanger.add(learn_button_9);

        // stamps_txt_10
        const stamps_txt_10 = scene.add.text(-92, 32, "", {});
        stamps_txt_10.setOrigin(0.5, 0);
        stamps_txt_10.text = "(4) Mods";
        stamps_txt_10.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "20px" });
        rankChanger.add(stamps_txt_10);

        // learn_button
        const learn_button = scene.add.nineslice(-94.8048461159608, 83.8304532379259, "login", "learn-button", 300, 60, 46, 44, 22, 21);
        learn_button.scaleX = 0.6;
        learn_button.scaleY = 0.6;
        rankChanger.add(learn_button);

        // stamps_txt_9
        const stamps_txt_9 = scene.add.text(-92, 72, "", {});
        stamps_txt_9.setOrigin(0.5, 0);
        stamps_txt_9.text = "(2) Designers";
        stamps_txt_9.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "20px" });
        rankChanger.add(stamps_txt_9);

        // learn_button_10
        const learn_button_10 = scene.add.nineslice(93.1951538840392, 83.8304532379259, "login", "learn-button", 300, 60, 46, 44, 22, 21);
        learn_button_10.scaleX = 0.6;
        learn_button_10.scaleY = 0.6;
        rankChanger.add(learn_button_10);

        // stamps_txt_11
        const stamps_txt_11 = scene.add.text(96, 72, "", {});
        stamps_txt_11.setOrigin(0.5, 0);
        stamps_txt_11.text = "(1) Plebes (reset)";
        stamps_txt_11.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "20px" });
        rankChanger.add(stamps_txt_11);

        // username_1
        const username_1 = scene.add.text(-2.8048461159607996, -87.1695467620741, "", {});
        username_1.setOrigin(0.5, 0.5);
        username_1.text = "Rank Changer (Owners Only)";
        username_1.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":450,"fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold", "stroke": "#297FCC", "strokeThickness":8});
        rankChanger.add(username_1);

        // moreOptions
        const moreOptions = new MoreOptions(scene, -179, -297);
        moreOptions.visible = false;
        this.add(moreOptions);

        // banReasons
        const banReasons = new BanReasons(scene, -430, -342);
        banReasons.visible = false;
        this.add(banReasons);

        // sysPostcardSender
        const sysPostcardSender = new SysPostcardSender(scene, 0, 0);
        sysPostcardSender.visible = false;
        this.add(sysPostcardSender);

        // banHistory
        const banHistory = new BanHistory(scene, 0, 0);
        banHistory.visible = false;
        this.add(banHistory);

        // chatLog
        const chatLog = new ChatLog(scene, -396, -335);
        chatLog.visible = false;
        this.add(chatLog);

        // lists
        const action_ticks = [checkbox_ban, checkbox_mute, checkbox_kick, checkbox_warn];
        const duration_ticks = [checkbox_3h, checkbox_1w, checkbox_3d, checkbox_1d, checkbox_perm, checkbox_ip, checkbox_3w];

        // block (components)
        new Interactive(block);

        // tab_handle111 (components)
        const tab_handle111SimpleButton = new SimpleButton(tab_handle111);
        tab_handle111SimpleButton.callback = () => { this.hideNameVerify() };

        // nameApproveBtn (components)
        const nameApproveBtnSimpleButton = new SimpleButton(nameApproveBtn);
        nameApproveBtnSimpleButton.hoverCallback = () => { nameApproveContain.alpha = 0.75 };
        nameApproveBtnSimpleButton.hoverOutCallback = () => { nameApproveContain.alpha = 1 };
        nameApproveBtnSimpleButton.callback = () => this.verifyName();

        // nameApproveBtn_1 (components)
        const nameApproveBtn_1SimpleButton = new SimpleButton(nameApproveBtn_1);
        nameApproveBtn_1SimpleButton.hoverCallback = () => { nameRejectContain.alpha = 0.75 };
        nameApproveBtn_1SimpleButton.hoverOutCallback = () => { nameRejectContain.alpha = 1 };
        nameApproveBtn_1SimpleButton.callback = () => this.rejectName();

        // tab_handlenames (components)
        const tab_handlenamesSimpleButton = new SimpleButton(tab_handlenames);
        tab_handlenamesSimpleButton.callback = () => this.showNameVerify();

        // tab_handle (components)
        const tab_handleSimpleButton = new SimpleButton(tab_handle);
        tab_handleSimpleButton.callback = () => this.showAltsList();

        // highlightArea (components)
        const highlightAreaSimpleButton = new SimpleButton(highlightArea);
        highlightAreaSimpleButton.callback = () => { this.copyUsername() };
        const highlightAreaShowHint = new ShowHint(highlightArea);
        highlightAreaShowHint.text = "Copy Username";

        // card_photo (components)
        new Interactive(card_photo);

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => { this.hide() };
        x_buttonButton.activeFrame = true;

        // moreoptions_btn (components)
        const moreoptions_btnSimpleButton = new SimpleButton(moreoptions_btn);
        moreoptions_btnSimpleButton.callback = () => this.showMoreOptions();

        // learn_button_11 (components)
        const learn_button_11Button = new Button(learn_button_11);
        learn_button_11Button.spriteName = "learn-button";
        learn_button_11Button.callback = () => this.viewBanHistory();

        // learn_button_3 (components)
        const learn_button_3Button = new Button(learn_button_3);
        learn_button_3Button.spriteName = "learn-button";
        learn_button_3Button.callback = () => this.viewBanHistory();

        // chatlog_btn (components)
        const chatlog_btnSimpleButton = new SimpleButton(chatlog_btn);
        chatlog_btnSimpleButton.callback = () => this.chatLog.show();

        // teleport_btn (components)
        const teleport_btnSimpleButton = new SimpleButton(teleport_btn);
        teleport_btnSimpleButton.callback = () => this.teleportToPlayer();

        // checkbox_warn (components)
        const checkbox_warnSimpleButton = new SimpleButton(checkbox_warn);
        checkbox_warnSimpleButton.callback = () => this.selectModAction('warn');

        // checkbox_sendinfo (components)
        const checkbox_sendinfoSimpleButton = new SimpleButton(checkbox_sendinfo);
        checkbox_sendinfoSimpleButton.callback = () => this.selectModAction('sendinfo');

        // checkbox_infoannonymous (components)
        const checkbox_infoannonymousSimpleButton = new SimpleButton(checkbox_infoannonymous);
        checkbox_infoannonymousSimpleButton.callback = () => this.toggleInfoAnnonymous();

        // checkbox_secretkick (components)
        const checkbox_secretkickSimpleButton = new SimpleButton(checkbox_secretkick);
        checkbox_secretkickSimpleButton.callback = () => this.toggleSecretKick();

        // checkbox_kick (components)
        const checkbox_kickSimpleButton = new SimpleButton(checkbox_kick);
        checkbox_kickSimpleButton.callback = () => this.selectModAction('kick');

        // checkbox_mute (components)
        const checkbox_muteSimpleButton = new SimpleButton(checkbox_mute);
        checkbox_muteSimpleButton.callback = () => this.selectModAction('mute');

        // checkbox_ban (components)
        const checkbox_banSimpleButton = new SimpleButton(checkbox_ban);
        checkbox_banSimpleButton.callback = () => this.selectModAction('ban');

        // checkbox_3h (components)
        const checkbox_3hSimpleButton = new SimpleButton(checkbox_3h);
        checkbox_3hSimpleButton.callback = () => this.selectDuration('3h',0);
        const checkbox_3hShowHint = new ShowHint(checkbox_3h);
        checkbox_3hShowHint.text = "3 hours";

        // checkbox_1d (components)
        const checkbox_1dSimpleButton = new SimpleButton(checkbox_1d);
        checkbox_1dSimpleButton.callback = () => this.selectDuration('1d',1);
        const checkbox_1dShowHint = new ShowHint(checkbox_1d);
        checkbox_1dShowHint.text = "1 day";

        // checkbox_3d (components)
        const checkbox_3dSimpleButton = new SimpleButton(checkbox_3d);
        checkbox_3dSimpleButton.callback = () => this.selectDuration('3d',2);
        const checkbox_3dShowHint = new ShowHint(checkbox_3d);
        checkbox_3dShowHint.text = "3 days";

        // checkbox_1w (components)
        const checkbox_1wSimpleButton = new SimpleButton(checkbox_1w);
        checkbox_1wSimpleButton.callback = () => this.selectDuration('1w',3);
        const checkbox_1wShowHint = new ShowHint(checkbox_1w);
        checkbox_1wShowHint.text = "1 week";

        // checkbox_3w (components)
        const checkbox_3wSimpleButton = new SimpleButton(checkbox_3w);
        checkbox_3wSimpleButton.callback = () => this.selectDuration('3w',4);
        const checkbox_3wShowHint = new ShowHint(checkbox_3w);
        checkbox_3wShowHint.text = "3 weeks";

        // checkbox_perm (components)
        const checkbox_permSimpleButton = new SimpleButton(checkbox_perm);
        checkbox_permSimpleButton.callback = () => this.selectDuration('perm',5);
        const checkbox_permShowHint = new ShowHint(checkbox_perm);
        checkbox_permShowHint.text = "Permanent";

        // checkbox_ip (components)
        const checkbox_ipSimpleButton = new SimpleButton(checkbox_ip);
        checkbox_ipSimpleButton.callback = () => this.selectDuration('ip',6);
        const checkbox_ipShowHint = new ShowHint(checkbox_ip);
        checkbox_ipShowHint.text = "Permanent IP ban";

        // learn_button_1 (components)
        const learn_button_1Button = new Button(learn_button_1);
        learn_button_1Button.spriteName = "learn-button";
        learn_button_1Button.callback = () => this.invokeModAction();

        // learn_button_2 (components)
        const learn_button_2Button = new Button(learn_button_2);
        learn_button_2Button.spriteName = "learn-button";
        learn_button_2Button.callback = () => this.switchRecordsView();

        // durationBlock (components)
        new Interactive(durationBlock);

        // teleport_btn_1 (components)
        const teleport_btn_1SimpleButton = new SimpleButton(teleport_btn_1);
        teleport_btn_1SimpleButton.callback = () => this.banReasons.show(this.actionMode == 'warn');

        // rankChangeBtn (components)
        const rankChangeBtnSimpleButton = new SimpleButton(rankChangeBtn);
        rankChangeBtnSimpleButton.callback = () => this.showRankChanger();

        // baninputtxt (components)
        const baninputtxtInputText = new InputText(baninputtxt);
        baninputtxtInputText.id = "banreason";
        baninputtxtInputText.maxLength = 60;
        baninputtxtInputText.callback = () => this.invokeModAction();
        baninputtxtInputText.rank = 3;

        // learn_button_4 (components)
        const learn_button_4Button = new Button(learn_button_4);
        learn_button_4Button.spriteName = "learn-button";
        learn_button_4Button.callback = () => this.setRank(10);

        // learn_button_5 (components)
        const learn_button_5Button = new Button(learn_button_5);
        learn_button_5Button.spriteName = "learn-button";
        learn_button_5Button.callback = () => this.setRank(8);

        // learn_button_6 (components)
        const learn_button_6Button = new Button(learn_button_6);
        learn_button_6Button.spriteName = "learn-button";
        learn_button_6Button.callback = () => this.setRank(5);

        // learn_button_7 (components)
        const learn_button_7Button = new Button(learn_button_7);
        learn_button_7Button.spriteName = "learn-button";
        learn_button_7Button.callback = () => this.setRank(6);

        // learn_button_8 (components)
        const learn_button_8Button = new Button(learn_button_8);
        learn_button_8Button.spriteName = "learn-button";
        learn_button_8Button.callback = () => this.setRank(3);

        // learn_button_9 (components)
        const learn_button_9Button = new Button(learn_button_9);
        learn_button_9Button.spriteName = "learn-button";
        learn_button_9Button.callback = () => this.setRank(4);

        // learn_button (components)
        const learn_buttonButton = new Button(learn_button);
        learn_buttonButton.spriteName = "learn-button";
        learn_buttonButton.callback = () => this.setRank(2);

        // learn_button_10 (components)
        const learn_button_10Button = new Button(learn_button_10);
        learn_button_10Button.spriteName = "learn-button";
        learn_button_10Button.callback = () => this.setRank(1);

        this.arrow2222 = arrow2222;
        this.tabBtn2 = tabBtn2;
        this.username_status_txt = username_status_txt;
        this.nameVerify = nameVerify;
        this.arrownames = arrownames;
        this.tabBtnNames = tabBtnNames;
        this.altsList = altsList;
        this.bg = bg;
        this.arrow = arrow;
        this.highlightArea = highlightArea;
        this.tabBtn = tabBtn;
        this.paperDoll = paperDoll;
        this.badge = badge;
        this.username = username;
        this.joindate_txt = joindate_txt;
        this.logintime_txt = logintime_txt;
        this.invisible_txt = invisible_txt;
        this.muted_until_txt = muted_until_txt;
        this.mutereason_txt = mutereason_txt;
        this.muteRecords = muteRecords;
        this.ban_count_txt = ban_count_txt;
        this.banned_until_txt = banned_until_txt;
        this.banreason_txt_1 = banreason_txt_1;
        this.banRecords = banRecords;
        this.tp_player_text = tp_player_text;
        this.checkbox_warn = checkbox_warn;
        this.rank_txt = rank_txt;
        this.checkbox_sendinfo = checkbox_sendinfo;
        this.checkbox_infoannonymous = checkbox_infoannonymous;
        this.infoAnnonymous = infoAnnonymous;
        this.checkbox_secretkick = checkbox_secretkick;
        this.secretKick = secretKick;
        this.checkbox_kick = checkbox_kick;
        this.checkbox_mute = checkbox_mute;
        this.checkbox_ban = checkbox_ban;
        this.checkbox_3h = checkbox_3h;
        this.checkbox_1d = checkbox_1d;
        this.checkbox_3d = checkbox_3d;
        this.checkbox_1w = checkbox_1w;
        this.checkbox_3w = checkbox_3w;
        this.checkbox_perm = checkbox_perm;
        this.checkbox_ip = checkbox_ip;
        this.durationBlock = durationBlock;
        this.recordsBtnTxt = recordsBtnTxt;
        this.tp_player_text_1 = tp_player_text_1;
        this.coins_txt = coins_txt;
        this.baninputtxt = baninputtxt;
        this.bg_3 = bg_3;
        this.username_1 = username_1;
        this.rankChanger = rankChanger;
        this.moreOptions = moreOptions;
        this.banReasons = banReasons;
        this.sysPostcardSender = sysPostcardSender;
        this.banHistory = banHistory;
        this.chatLog = chatLog;
        this.action_ticks = action_ticks;
        this.duration_ticks = duration_ticks;

        /* START-USER-CTR-CODE */

        // Active penguin id
        this.id = null
        this.banHistoryList = null;
        this.muteHistoryList = null;


        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    /**
     * Runs when the server sends back the penguin info. This function edits all of the
     * needed game objects to display the data accordingly.
     */
    /**
     * Runs when the server sends back the penguin info. This function edits all of the
     * needed game objects to display the data accordingly.
     */
    _showCard(penguin, bancount, activeban, banreason, items = penguin, muteInfo, banHistory) {

        // Text
        this.username.text = `${penguin.username} (p${penguin.id})`
        this.penguinName = penguin.username

        let jointime = new Date(penguin.joinTime)
        this.joindate_txt.text = "join time: " + jointime.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })

        if (penguin.username_rejected == 1) {
            this.username_status_txt.text = "Status: rejected"
            this.username_status_txt.style.color = "#a51c13"
            this.username.setStroke("#ce5e5e",8)
        }
        else if (penguin.username_verified == 1) {
            this.username_status_txt.style.color = "#18a039"
            this.username_status_txt.text = "Status: approved"
            this.username.setStroke("#49d966",8)
        }
        else if (penguin.username_verified == 0 && penguin.username_rejected == 0) {
            this.username_status_txt.style.color = "#000000"
            this.username_status_txt.text = "Status: pending"
            this.username.setStroke("#297FCC",8)
        }

        if (activeban) {
            let banduration = new Date(activeban.expires)
            this.banned_until_txt.text = "banned until: " + banduration.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
        }
        if (penguin.permaBan == 1) this.banned_until_txt.text = "ACCOUNT PERMANENTLY BANNED"
        if (penguin.permaBan == 0 && !activeban) this.banned_until_txt.text = "not currently banned"

        this.banHistoryList = banHistory;
        this.muteHistoryList = muteInfo.muteHistory;

        if(muteInfo.data) {
            let muteData = muteInfo.data
            let muteExpires = new Date(muteData.expires).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
            this.muted_until_txt.text = !muteExpires && penguin.muted
                ? "USER PERMANENTLY MUTED"
                : `Muted until ${muteExpires}`

            this.mutereason_txt.text = muteInfo.reason
                ? `Reason: ${muteInfo.reason}`
                : `No recorded reason`

        } else {
            this.muted_until_txt.text = `Not currently muted`
            this.mutereason_txt.text = `No recorded reason`
        }

        if (penguin.lastLogin) {
            this.logintime_txt.text = `last login: ${new Date(penguin.lastLogin).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}`
        } else {
            this.logintime_txt.text = 'no login time recorded'
        }

        this.rank_txt.text = `rank: ${penguin.rank}`
        this.coins_txt.text = penguin.coins

        //set ban records
        if (!bancount || bancount == 0) { this.ban_count_txt.text = "banned 0 times" }
        else if (bancount == 1) { this.ban_count_txt.text = "banned 1 time" }
        else { this.ban_count_txt.text = "banned " + bancount + " times" }

        this.banreason_txt_1.visible = !!banreason
        if (banreason) { this.banreason_txt_1.text = "reason: " + banreason }

        // Paper doll
        this.paperDoll.loadDoll(items, penguin.isClient)

        this.id = penguin.id

        this.show()
    }

    hide(){
        this.close()
        this.banReason.style.visibility = 'hidden'
        this.moreOptions.setInputsVisible(false)
    }

    /**
     * Doesn't set any data, but resets stuff like positioning and visibility to
     * ensure everything displays correctly.
     */
    show(){
        this.interface.prompt.window.visible = false
        this.tabBtn.visible = this.world.client.rank > 3
        this.tabBtnNames.visible = this.world.client.rank > 3
        this.moreOptions.visible = false
        this.altsList.visible = false
        this.nameVerify.visible = false

        this.additems = document.getElementById("additems")
        this.removeitems = document.getElementById("removeitems")
        this.addfurniture = document.getElementById("addfurniture")
        this.addfurnitureUnits = document.getElementById("addfurniture-units")
        this.changeusername = document.getElementById("changeusername")
        this.banReason = document.getElementById("banreason")
        this.coinCount = document.getElementById("coincount")
        this.sendsysmail = document.getElementById("sendsysmail")

        this.altsList.mode = 'normal'
        this.altsList.busy = false

        this.visible = true

        this.banReason.style.visibility = 'visible'
        this.moreOptions.setInputsVisible(this.moreOptions.visible)
        this.additems.value = ''
        this.changeusername.value = ''
        this.banReason.value = ''
        this.coinCount.value = ''
        this.addfurnitureUnits.value = 1

        this.interface.prompt.window.visible = false

        this.actionMode = this.actionMode || 'warn'
        this.kickSecret = false
        this.infoBoxAnnonymous = false
        this.checkbox_secretkick.setFrame('checkbox')
        this.checkbox_infoannonymous.setFrame('checkbox')
        this.durationBlock.visible = (this.actionMode != 'ban' && this.actionMode != 'mute')
        this.recordsView = this.recordsView || 'bans'

        this.selectModAction('warn')
        this.selectDuration('3h',0)
    }

    showNameVerify() {
        this.nameVerify.visible = true
        this.tabBtnNames.visible = false
    }

    hideNameVerify() {
        this.nameVerify.visible = false
        this.tabBtnNames.visible = true
    }

    verifyName() {
        if(this.world.client.rank < 4) return
        this.network.send('verify_user', {id: this.id, username: this.penguinName, fromModActions: true})
    }

    rejectName() {
        if(this.world.client.rank < 4) return
        this.network.send('reject_user', {id: this.id, username: this.penguinName, fromModActions: true})
    }

    nameVerified(args) { //runs when the server verifies/rejects a name
        if(args.verify) {
            this.username_status_txt.text = "Status: approved"
            this.username_status_txt.style.color = "#a51c13"
            this.username.setStroke("#49d966",8)
            this.interface.prompt.showError(`Approved the username of ${this.penguinName}`)
        }
        else if(args.reject) {
            this.username_status_txt.text = "Status: rejected"
            this.username_status_txt.style.color = "#18a039"
            this.username.setStroke("#ce5e5e",8)
            this.interface.prompt.showError(`Rejected the username of ${this.penguinName}`)
        }
    }

    teleportToPlayer() {
        this.network.send('teleport_to_player', {id: this.id})
        this.hide()
    }

    selectModAction(mode) {
        if(this.actionMode == mode) return
        this[`checkbox_${this.actionMode}`].setFrame('checkbox')
        this[`checkbox_${mode}`].setFrame('checkbox-active')
        this['checkbox_ip'].visible = (mode == 'ban')
        this.durationBlock.visible = (mode != 'ban' && mode != 'mute')
        this.secretKick.visible = (mode == 'kick')
        this.infoAnnonymous.visible = (mode == 'sendinfo')
        this.actionMode = mode

        if (this.actionDuration === 'ip' && this.actionMode === 'mute') {
            this.selectDuration('3h', 0);
        }
    }

    selectDuration(key,durationId) {
        if(this.actionDuration == key) return
        if(this.world.client.rank < 4 && key !== '3h' && key !== '1d') {
            return this.interface.prompt.showError('You do not have permission to ban for this duration.')
        }
        if(this.world.client.rank < 4 && key !== '3h' && key !== '1d') {
            return this.interface.prompt.showError('You do not have permission to ban for this duration.')
        }
        if(this.actionDuration) this[`checkbox_${this.actionDuration}`].setFrame('checkbox')
        this[`checkbox_${key}`].setFrame('checkbox-active')
        this.actionDuration = key
        this.actionDurationId = durationId
    }

    invokeModAction() {
        let durationArray = ["3 hours", "1 day", "3 days", "1 week", "3 weeks", "permanent", "permanent (IP)"]
        let text = `Perform the following action?\n\nPlayer: ${this.username.text}\nMode: ${this.actionMode}\n${(this.actionMode == 'ban' || this.actionMode == 'mute')? `Duration: ${durationArray[this.actionDurationId]}\n` : ''}Reason: ${this.banReason.value.toString()}`
        if(this.banReason.value.toString().length < 4 && (this.actionMode == 'mute' || this.actionMode == 'ban')) return this.interface.prompt.showError('Please provide a reason')
        this.interface.prompt.showQuestion(text, () => this.handleModAction())
    }

    handleModAction() {
        let reason = this.banReason.value.toString()
        switch(this.actionMode) {
            case 'warn':
                this.network.send('send_warn', { id: this.id, warnReason: reason })
                break
            case 'sendinfo':
                this.network.send('send_infobox', { id: this.id, message: reason, annonymous: this.infoBoxAnnonymous })
                break
            case 'kick':
                this.network.send('kick_player', { id: this.id, kickReason: reason, secretly: this.kickSecret })
                break
            case 'mute':
                let durationTextArraym = ["3 hours", "1 day", "3 days", "1 week", "3 weeks", "permanent", "permanent"]
                let durationArraym = [10800000, 86400000, 259200000, 604800000, 2332800000, 315536400000, 615536400000]
                this.network.send('mute_player', { 
                    id: this.id, muteDuration: durationArraym[this.actionDurationId], durationText: durationTextArraym[this.actionDurationId], 
                    permaMute: this.actionDurationId >= 5 ? 1 : 0, muteReason: reason });
                break
            case 'ban':
                let durationTextArray = ["3 hours", "1 day", "3 days", "1 week", "3 weeks", "permanent", "permanent (IP)"]
                let durationArray = [10800000, 86400000, 259200000, 604800000, 2332800000, 315536400000, 615536400000]
                this.network.send('ban_user', { id: this.id, banDuration: durationArray[this.actionDurationId], durationText: durationTextArray[this.actionDurationId], permaBan: this.actionDurationId >= 5 ? 1 : 0, ipBan: this.actionDurationId >= 6 ? 1 : 0, banReason: reason })
                break
            default: break
        }
    }

    switchRecordsView() {
        switch(this.recordsView) {
            case 'bans':
                this.banRecords.visible = false
                this.muteRecords.visible = true
                this.recordsBtnTxt.text = 'See Bans'
                this.recordsView = 'mutes'
                break
            case 'mutes':
                this.banRecords.visible = true
                this.muteRecords.visible = false
                this.recordsBtnTxt.text = 'See Mutes'
                this.recordsView = 'bans'
                break
            default: break
        }
    }

    toggleSecretKick() {
        this.kickSecret = !this.kickSecret
        this.checkbox_secretkick.setFrame(this.kickSecret? 'checkbox-active' : 'checkbox')
    }

    toggleInfoAnnonymous() {
        this.infoBoxAnnonymous = !this.infoBoxAnnonymous
        this.checkbox_infoannonymous.setFrame(this.infoBoxAnnonymous? 'checkbox-active' : 'checkbox')
    }

    showAltsList() {
        this.tabBtn.visible = false
        this.altsList.show()
    }

    showMoreOptions() {
        this.moreOptions.show()
    }

    viewBanHistory() {
        this.banReason.style.visibility = 'hidden'
        this.moreOptions.setInputsVisible(false)
        this.banHistory.setBanHistory(this.recordsView === 'bans' ? this.banHistoryList : this.muteHistoryList);
        this.banHistory.show(this.penguinName, this.recordsView)
    }

    showRankChanger() {
        this.rankChanger.visible = (this.rankChanger.visible == true) ? false : true
    }

    setRank(rank) {
        this.network.send('set_rank', {id: this.id, rank: rank})
        if(this.world.client.penguin.rank === 8) {
            this.rank_txt.text = `rank: ${rank}`
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
