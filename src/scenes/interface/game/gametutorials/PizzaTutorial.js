import BaseContainer from '@scenes/base/BaseContainer'
import { Button, Animation, Interactive, SimpleButton } from '@components/components'


export const preload = {
    key: 'gametutorials-pack',
    url: 'assets/media/interface/game/gametutorials/gametutorials-pack.json',
    loadString: ['loading', 'Pizza Tutorial']
}

/* START OF COMPILED CODE */

export default class PizzaTutorial extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 268, y ?? 0);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.block;
        /** @type {Phaser.GameObjects.Sprite} */
        this.appear_left;
        /** @type {Phaser.GameObjects.Sprite} */
        this.appear_right;
        /** @type {Phaser.GameObjects.Sprite} */
        this.appear_base;
        /** @type {Phaser.GameObjects.Sprite} */
        this.beak1;
        /** @type {Phaser.GameObjects.Container} */
        this.peng_right;
        /** @type {Phaser.GameObjects.Container} */
        this.peng_left;
        /** @type {Phaser.GameObjects.Container} */
        this.peng_right_point_low;
        /** @type {Phaser.GameObjects.Container} */
        this.peng_left_point_low;
        /** @type {Phaser.GameObjects.Container} */
        this.peng_right_point_high;
        /** @type {Phaser.GameObjects.Container} */
        this.peng_left_point_high;
        /** @type {Phaser.GameObjects.Text} */
        this.text_1;
        /** @type {Phaser.GameObjects.Container} */
        this.page1;
        /** @type {Phaser.GameObjects.Text} */
        this.text_8;
        /** @type {Phaser.GameObjects.Container} */
        this.page2;
        /** @type {Phaser.GameObjects.Text} */
        this.text_6;
        /** @type {Phaser.GameObjects.Container} */
        this.pagen_3;
        /** @type {Phaser.GameObjects.Text} */
        this.text_9;
        /** @type {Phaser.GameObjects.Sprite} */
        this.arrow_1;
        /** @type {Phaser.GameObjects.Container} */
        this.pagen_4;
        /** @type {Phaser.GameObjects.Container} */
        this.page3;
        /** @type {Phaser.GameObjects.Container} */
        this.page4;
        /** @type {Phaser.GameObjects.Container} */
        this.page5;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cooldown_timer;
        /** @type {Phaser.GameObjects.Container} */
        this.page6;
        /** @type {Phaser.GameObjects.Container} */
        this.page7;
        /** @type {Phaser.GameObjects.Container} */
        this.page8;


        // block
        const block = scene.add.rectangle(-268, 0, 1520, 960);
        block.setOrigin(0, 0);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0;
        this.add(block);

        // appear_left
        const appear_left = scene.add.sprite(108, 695, "gametutorials", "appear_0001");
        appear_left.flipX = true;
        appear_left.visible = false;
        this.add(appear_left);

        // appear_right
        const appear_right = scene.add.sprite(825, 695, "gametutorials", "appear_0001");
        appear_right.visible = false;
        this.add(appear_right);

        // appear_base
        const appear_base = scene.add.sprite(916, 706, "gametutorials", "appear_base");
        appear_base.visible = false;
        this.add(appear_base);

        // beak1
        const beak1 = scene.add.sprite(805, 560, "gametutorials", "beak1_0001");
        beak1.visible = false;
        this.add(beak1);

        // peng_right
        const peng_right = scene.add.container(-305, 0);
        peng_right.visible = false;
        this.add(peng_right);

        // base_2
        const base_2 = scene.add.image(1150, 724, "gametutorials", "base_2");
        peng_right.add(base_2);

        // eyes1_0002
        const eyes1_0002 = scene.add.sprite(1129, 507, "gametutorials", "eyes1_0002");
        eyes1_0002.angle = -27;
        peng_right.add(eyes1_0002);

        // beak1_0001
        const beak1_0001 = scene.add.sprite(1121, 601, "gametutorials", "beak1_0001");
        beak1_0001.angle = -36.99999999999994;
        peng_right.add(beak1_0001);

        // peng_left
        const peng_left = scene.add.container(-1075, 2);
        peng_left.visible = false;
        this.add(peng_left);

        // base
        const base = scene.add.image(1150, 724, "gametutorials", "base_2");
        base.flipX = true;
        peng_left.add(base);

        // eyes
        const eyes = scene.add.sprite(1192, 514, "gametutorials", "eyes1_0002");
        eyes.angle = 38;
        eyes.flipX = true;
        peng_left.add(eyes);

        // beak
        const beak = scene.add.sprite(1179, 605, "gametutorials", "beak1_0001");
        beak.angle = 37;
        beak.flipX = true;
        peng_left.add(beak);

        // peng_right_point_low
        const peng_right_point_low = scene.add.container(793, 502);
        peng_right_point_low.visible = false;
        this.add(peng_right_point_low);

        // base_1
        const base_1 = scene.add.image(0, 221, "gametutorials", "base_1");
        peng_right_point_low.add(base_1);

        // eyes_1
        const eyes_1 = scene.add.sprite(82, 0, "gametutorials", "eyes1_0002");
        eyes_1.angle = 3;
        peng_right_point_low.add(eyes_1);

        // beak_1
        const beak_1 = scene.add.sprite(25, 70, "gametutorials", "beak1_0001");
        beak_1.angle = -7;
        peng_right_point_low.add(beak_1);

        // peng_left_point_low
        const peng_left_point_low = scene.add.container(129, 506);
        peng_left_point_low.visible = false;
        this.add(peng_left_point_low);

        // base_3
        const base_3 = scene.add.image(0, 221, "gametutorials", "base_1");
        base_3.flipX = true;
        peng_left_point_low.add(base_3);

        // eyes_2
        const eyes_2 = scene.add.sprite(-75, -4, "gametutorials", "eyes1_0002");
        eyes_2.angle = 3;
        eyes_2.flipX = true;
        peng_left_point_low.add(eyes_2);

        // beak_2
        const beak_2 = scene.add.sprite(-7, 68, "gametutorials", "beak1_0001");
        beak_2.angle = -7;
        beak_2.flipX = true;
        peng_left_point_low.add(beak_2);

        // peng_right_point_high
        const peng_right_point_high = scene.add.container(837, 502);
        peng_right_point_high.visible = false;
        this.add(peng_right_point_high);

        // base_4
        const base_4 = scene.add.image(-3, 221, "gametutorials", "base_3");
        peng_right_point_high.add(base_4);

        // eyes_3
        const eyes_3 = scene.add.sprite(38, 1, "gametutorials", "eyes1_0002");
        eyes_3.angle = 3;
        peng_right_point_high.add(eyes_3);

        // beak_3
        const beak_3 = scene.add.sprite(-19, 71, "gametutorials", "beak1_0001");
        beak_3.angle = -7;
        peng_right_point_high.add(beak_3);

        // peng_left_point_high
        const peng_left_point_high = scene.add.container(90, 506);
        peng_left_point_high.visible = false;
        this.add(peng_left_point_high);

        // base_5
        const base_5 = scene.add.image(-3, 221, "gametutorials", "base_3");
        base_5.flipX = true;
        peng_left_point_high.add(base_5);

        // eyes_4
        const eyes_4 = scene.add.sprite(-36, -4, "gametutorials", "eyes1_0002");
        eyes_4.angle = 3;
        eyes_4.flipX = true;
        peng_left_point_high.add(eyes_4);

        // beak_4
        const beak_4 = scene.add.sprite(32, 68, "gametutorials", "beak1_0001");
        beak_4.angle = -7;
        beak_4.flipX = true;
        peng_left_point_high.add(beak_4);

        // page1
        const page1 = scene.add.container(-186, 49);
        page1.visible = false;
        this.add(page1);

        // bubble1
        const bubble1 = scene.add.image(621, 346, "gametutorials", "bubble1");
        bubble1.scaleX = 0.85;
        bubble1.scaleY = 0.85;
        page1.add(bubble1);

        // button
        const button = scene.add.image(944, 374, "gametutorials", "continue");
        page1.add(button);

        // text_1
        const text_1 = scene.add.text(225, 206, "", {});
        text_1.text = "Welcome to the Pizza Parlor!\n\nI'll be showing you how to order a slice\nof Pizza or become a chef yourself!\n";
        text_1.setStyle({ "color": "#3a3a3aff", "fontFamily": "CCComicrazy", "fontSize": "30px", "fontStyle": "bold" });
        text_1.setPadding({"left":5,"right":5});
        text_1.setLineSpacing(15);
        text_1.setWordWrapWidth(800);
        page1.add(text_1);

        // page2
        const page2 = scene.add.container(-186, 49);
        page2.visible = false;
        this.add(page2);

        // bubble_7
        const bubble_7 = scene.add.image(621, 346, "gametutorials", "bubble1");
        bubble_7.scaleX = 0.85;
        bubble_7.scaleY = 0.85;
        page2.add(bubble_7);

        // button_8
        const button_8 = scene.add.image(944, 374, "gametutorials", "continue");
        page2.add(button_8);

        // text_8
        const text_8 = scene.add.text(225, 207, "", {});
        text_8.text = "To order a slice of pizza, you need to send\nthe         emote and any Penguin wearing\na Pizza Apron and Chef Hat can serve \nyou.";
        text_8.setStyle({ "color": "#3a3a3aff", "fontFamily": "CCComicrazy", "fontSize": "30px", "fontStyle": "bold" });
        text_8.setPadding({"left":5,"right":5});
        text_8.setLineSpacing(20);
        text_8.setWordWrapWidth(800);
        page2.add(text_8);

        // container
        const container = scene.add.container(338, 273);
        container.scaleX = 0.7;
        container.scaleY = 0.7;
        page2.add(container);

        // balloon_emote_2
        const balloon_emote_2 = scene.add.image(0, 48, "main", "balloon-emote");
        container.add(balloon_emote_2);

        // balloon_2
        const balloon_2 = scene.add.image(0, -5, "main", "balloon");
        container.add(balloon_2);

        // emotes_1
        const emotes_1 = scene.add.image(1, 0, "main", "emotes/24");
        container.add(emotes_1);

        // pagen_3
        const pagen_3 = scene.add.container(-186, 49);
        pagen_3.visible = false;
        this.add(pagen_3);

        // bubble_5
        const bubble_5 = scene.add.image(621, 346, "gametutorials", "bubble1");
        bubble_5.scaleX = 0.85;
        bubble_5.scaleY = 0.85;
        pagen_3.add(bubble_5);

        // button_6
        const button_6 = scene.add.image(944, 374, "gametutorials", "continue");
        pagen_3.add(button_6);

        // text_6
        const text_6 = scene.add.text(225, 206, "", {});
        text_6.text = "You can also get a job at the Pizza Parlor and earn     Coins and      Stamps.\n\nPut your Pizza Apron and Chef Hat on!";
        text_6.setStyle({ "color": "#3a3a3aff", "fontFamily": "CCComicrazy", "fontSize": "30px", "fontStyle": "bold" });
        text_6.setPadding({"left":5,"right":5});
        text_6.setLineSpacing(15);
        text_6.setWordWrapWidth(800);
        pagen_3.add(text_6);

        // coins_1
        const coins_1 = scene.add.image(329, 273, "main-stampcoins", "coins");
        coins_1.scaleX = 0.6;
        coins_1.scaleY = 0.6;
        pagen_3.add(coins_1);

        // stamp_icon_1
        const stamp_icon_1 = scene.add.image(552, 273, "main", "stamp-icon");
        stamp_icon_1.scaleX = 1.2;
        stamp_icon_1.scaleY = 1.2;
        pagen_3.add(stamp_icon_1);

        // pagen_4
        const pagen_4 = scene.add.container(-186, 49);
        pagen_4.visible = false;
        this.add(pagen_4);

        // bubble_8
        const bubble_8 = scene.add.image(621, 346, "gametutorials", "bubble1");
        bubble_8.scaleX = 0.85;
        bubble_8.scaleY = 0.85;
        pagen_4.add(bubble_8);

        // button_9
        const button_9 = scene.add.image(944, 374, "gametutorials", "continue");
        pagen_4.add(button_9);

        // text_9
        const text_9 = scene.add.text(225, 206, "", {});
        text_9.text = "If you don't already have a Pizza Apron\nand Chef Hat you can purchase one by \nreading the Newspaper!";
        text_9.setStyle({ "color": "#3a3a3aff", "fontFamily": "CCComicrazy", "fontSize": "30px", "fontStyle": "bold" });
        text_9.setPadding({"left":5,"right":5});
        text_9.setLineSpacing(15);
        text_9.setWordWrapWidth(800);
        pagen_4.add(text_9);

        // news_button
        const news_button = scene.add.image(635, 321, "main", "news-button");
        news_button.scaleX = 0.7;
        news_button.scaleY = 0.7;
        pagen_4.add(news_button);

        // news_new
        const news_new = scene.add.image(665, 332, "main", "news-new");
        news_new.scaleX = 0.8;
        news_new.scaleY = 0.8;
        pagen_4.add(news_new);

        // arrow_1
        const arrow_1 = scene.add.sprite(-2, 152, "gametutorials", "arrow_0001");
        arrow_1.angle = 127;
        pagen_4.add(arrow_1);

        // page3
        const page3 = scene.add.container(-186, 49);
        page3.visible = false;
        this.add(page3);

        // bubble
        const bubble = scene.add.image(621, 346, "gametutorials", "bubble1");
        bubble.scaleX = 0.85;
        bubble.scaleY = 0.85;
        page3.add(bubble);

        // button_1
        const button_1 = scene.add.image(944, 374, "gametutorials", "continue");
        page3.add(button_1);

        // text
        const text = scene.add.text(225, 206, "", {});
        text.text = "First, we're gonna wait for an order to\ncome in from one of our customers. Be on\nthe look out for the         emote!";
        text.setStyle({ "color": "#3a3a3aff", "fontFamily": "CCComicrazy", "fontSize": "30px", "fontStyle": "bold" });
        text.setPadding({"left":5,"right":5});
        text.setLineSpacing(12);
        page3.add(text);

        // emote
        const emote = scene.add.container(591, 310);
        emote.scaleX = 0.7;
        emote.scaleY = 0.7;
        page3.add(emote);

        // balloon_emote
        const balloon_emote = scene.add.image(0, 53, "main", "balloon-emote");
        emote.add(balloon_emote);

        // balloon
        const balloon = scene.add.image(0, 0, "main", "balloon");
        emote.add(balloon);

        // emotes_13
        const emotes_13 = scene.add.image(1, 8, "main", "emotes/24");
        emote.add(emotes_13);

        // page4
        const page4 = scene.add.container(-107, 50);
        page4.visible = false;
        this.add(page4);

        // bubble_1
        const bubble_1 = scene.add.image(621, 346, "gametutorials", "bubble1");
        bubble_1.scaleX = 0.85;
        bubble_1.scaleY = 0.85;
        bubble_1.flipX = true;
        page4.add(bubble_1);

        // button_2
        const button_2 = scene.add.image(944, 374, "gametutorials", "continue");
        page4.add(button_2);

        // text_2
        const text_2 = scene.add.text(536, 301, "", {});
        text_2.setOrigin(0.5, 0.5);
        text_2.text = "Great! You got your first order, and it \nlooks like it's ready!\n\nHead to the counter, or the       sign\nto collect the pizza for the customer.";
        text_2.setStyle({ "color": "#3a3a3aff", "fontFamily": "CCComicrazy", "fontSize": "30px", "fontStyle": "bold" });
        text_2.setPadding({"left":5,"right":5});
        text_2.setLineSpacing(7);
        page4.add(text_2);

        // arrow_0001
        const arrow_0001 = scene.add.image(706, 317, "gametutorials", "arrow_0001");
        arrow_0001.scaleX = 0.7;
        arrow_0001.scaleY = 0.7;
        arrow_0001.angle = -52.99999999999994;
        page4.add(arrow_0001);

        // page5
        const page5 = scene.add.container(-229, 48);
        page5.visible = false;
        this.add(page5);

        // bubble_2
        const bubble_2 = scene.add.image(621, 346, "gametutorials", "bubble1");
        bubble_2.scaleX = 0.85;
        bubble_2.scaleY = 0.85;
        page5.add(bubble_2);

        // button_3
        const button_3 = scene.add.image(944, 374, "gametutorials", "continue");
        page5.add(button_3);

        // text_3
        const text_3 = scene.add.text(225, 206, "", {});
        text_3.text = "You'll have to deliver the pizza you've\ncollected to the customer.\n\nHead over the       sign to complete \nyour first order!";
        text_3.setStyle({ "color": "#3a3a3aff", "fontFamily": "CCComicrazy", "fontSize": "30px", "fontStyle": "bold" });
        text_3.setPadding({"left":5,"right":5});
        text_3.setLineSpacing(7);
        page5.add(text_3);

        // arrow
        const arrow = scene.add.image(491, 324, "gametutorials", "arrow_0001");
        arrow.scaleX = 0.7;
        arrow.scaleY = 0.7;
        arrow.angle = -52.99999999999994;
        page5.add(arrow);

        // page6
        const page6 = scene.add.container(-205, 25);
        page6.visible = false;
        this.add(page6);

        // bubble_6
        const bubble_6 = scene.add.image(621, 346, "gametutorials", "bubble1");
        bubble_6.scaleX = 0.85;
        bubble_6.scaleY = 0.85;
        page6.add(bubble_6);

        // button_7
        const button_7 = scene.add.image(944, 374, "gametutorials", "continue");
        page6.add(button_7);

        // text_7
        const text_7 = scene.add.text(225, 206, "", {});
        text_7.text = "The      icon floating on top of your head is \na cooldown.\n\nYou have to wait a few seconds before\nyou can serve another customer.";
        text_7.setStyle({ "color": "#3a3a3aff", "fontFamily": "CCComicrazy", "fontSize": "30px", "fontStyle": "bold" });
        text_7.setPadding({"left":5,"right":5});
        text_7.setLineSpacing(7);
        page6.add(text_7);

        // cooldown_timer
        const cooldown_timer = scene.add.sprite(321, 222, "pizza_solo-job", "cooldown_timer_0001");
        cooldown_timer.scaleX = 1.3;
        cooldown_timer.scaleY = 1.3;
        cooldown_timer.angle = 1;
        page6.add(cooldown_timer);

        // page7
        const page7 = scene.add.container(-205, 25);
        page7.visible = false;
        this.add(page7);

        // bubble_4
        const bubble_4 = scene.add.image(621, 346, "gametutorials", "bubble1");
        bubble_4.scaleX = 0.85;
        bubble_4.scaleY = 0.85;
        page7.add(bubble_4);

        // button_5
        const button_5 = scene.add.image(944, 374, "gametutorials", "continue");
        page7.add(button_5);

        // text_5
        const text_5 = scene.add.text(225, 206, "", {});
        text_5.text = "Did you know that for every order you complete \nyou'll collect     Coins and     Stamps?\n\nPretty neat!";
        text_5.setStyle({ "color": "#3a3a3aff", "fontFamily": "CCComicrazy", "fontSize": "30px", "fontStyle": "bold" });
        text_5.setPadding({"left":5,"right":5});
        text_5.setLineSpacing(7);
        page7.add(text_5);

        // coins
        const coins = scene.add.image(450, 264, "main-stampcoins", "coins");
        coins.scaleX = 0.6;
        coins.scaleY = 0.6;
        page7.add(coins);

        // stamp_icon
        const stamp_icon = scene.add.image(667, 264, "main", "stamp-icon");
        stamp_icon.scaleX = 1.2;
        stamp_icon.scaleY = 1.2;
        page7.add(stamp_icon);

        // page8
        const page8 = scene.add.container(-205, 25);
        page8.visible = false;
        this.add(page8);

        // bubble_3
        const bubble_3 = scene.add.image(621, 346, "gametutorials", "bubble1");
        bubble_3.scaleX = 0.85;
        bubble_3.scaleY = 0.85;
        page8.add(bubble_3);

        // button_4
        const button_4 = scene.add.image(944, 374, "gametutorials", "finish");
        page8.add(button_4);

        // text_4
        const text_4 = scene.add.text(225, 206, "", {});
        text_4.text = "Looks like you're getting the hang of it!\n\nI'll leave it to you now, the Pizza Parlor\nis all yours. Keep up the great work!";
        text_4.setStyle({ "color": "#3a3a3aff", "fontFamily": "CCComicrazy", "fontSize": "30px", "fontStyle": "bold" });
        text_4.setPadding({"left":5,"right":5});
        text_4.setLineSpacing(7);
        page8.add(text_4);

        // block (components)
        new Interactive(block);

        // appear_left (components)
        const appear_leftAnimation = new Animation(appear_left);
        appear_leftAnimation.key = "appear_";
        appear_leftAnimation.end = 10;
        appear_leftAnimation.frameRate = 20;
        appear_leftAnimation.repeat = 0;
        appear_leftAnimation.autoPlay = false;

        // appear_right (components)
        const appear_rightAnimation = new Animation(appear_right);
        appear_rightAnimation.key = "appear_";
        appear_rightAnimation.end = 10;
        appear_rightAnimation.frameRate = 20;
        appear_rightAnimation.repeat = 0;
        appear_rightAnimation.autoPlay = false;

        // beak1 (components)
        const beak1Animation = new Animation(beak1);
        beak1Animation.key = "beak1_";
        beak1Animation.end = 28;

        // eyes1_0002 (components)
        const eyes1_0002Animation = new Animation(eyes1_0002);
        eyes1_0002Animation.key = "eyes1_";
        eyes1_0002Animation.end = 78;
        eyes1_0002Animation.repeatDelay = 2500;

        // beak1_0001 (components)
        const beak1_0001Animation = new Animation(beak1_0001);
        beak1_0001Animation.key = "beak1_";
        beak1_0001Animation.end = 28;

        // eyes (components)
        const eyesAnimation = new Animation(eyes);
        eyesAnimation.key = "eyes1_";
        eyesAnimation.end = 78;
        eyesAnimation.repeatDelay = 2500;

        // beak (components)
        const beakAnimation = new Animation(beak);
        beakAnimation.key = "beak1_";
        beakAnimation.end = 28;

        // eyes_1 (components)
        const eyes_1Animation = new Animation(eyes_1);
        eyes_1Animation.key = "eyes1_";
        eyes_1Animation.end = 78;
        eyes_1Animation.repeatDelay = 2500;

        // beak_1 (components)
        const beak_1Animation = new Animation(beak_1);
        beak_1Animation.key = "beak1_";
        beak_1Animation.end = 28;

        // eyes_2 (components)
        const eyes_2Animation = new Animation(eyes_2);
        eyes_2Animation.key = "eyes1_";
        eyes_2Animation.end = 78;
        eyes_2Animation.repeatDelay = 2500;

        // beak_2 (components)
        const beak_2Animation = new Animation(beak_2);
        beak_2Animation.key = "beak1_";
        beak_2Animation.end = 28;

        // eyes_3 (components)
        const eyes_3Animation = new Animation(eyes_3);
        eyes_3Animation.key = "eyes1_";
        eyes_3Animation.end = 78;
        eyes_3Animation.repeatDelay = 2500;

        // beak_3 (components)
        const beak_3Animation = new Animation(beak_3);
        beak_3Animation.key = "beak1_";
        beak_3Animation.end = 28;

        // eyes_4 (components)
        const eyes_4Animation = new Animation(eyes_4);
        eyes_4Animation.key = "eyes1_";
        eyes_4Animation.end = 78;
        eyes_4Animation.repeatDelay = 2500;

        // beak_4 (components)
        const beak_4Animation = new Animation(beak_4);
        beak_4Animation.key = "beak1_";
        beak_4Animation.end = 28;

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "continue";
        buttonButton.callback = () => { this.onPage2Click() };

        // button_8 (components)
        const button_8Button = new Button(button_8);
        button_8Button.spriteName = "continue";
        button_8Button.callback = () => { this.onPage3New() };

        // button_6 (components)
        const button_6Button = new Button(button_6);
        button_6Button.spriteName = "continue";
        button_6Button.callback = () => { this.onPage4New() };

        // button_9 (components)
        const button_9Button = new Button(button_9);
        button_9Button.spriteName = "continue";
        button_9Button.callback = () => { this.onEndStage1() };

        // arrow_1 (components)
        const arrow_1Animation = new Animation(arrow_1);
        arrow_1Animation.key = "arrow_";
        arrow_1Animation.end = 15;
        arrow_1Animation.stopOnOut = false;

        // button_1 (components)
        const button_1Button = new Button(button_1);
        button_1Button.spriteName = "continue";
        button_1Button.callback = () => { this.onEndStage2() };

        // button_2 (components)
        const button_2Button = new Button(button_2);
        button_2Button.spriteName = "continue";
        button_2Button.callback = () => { this.onEndStage3() };

        // button_3 (components)
        const button_3Button = new Button(button_3);
        button_3Button.spriteName = "continue";
        button_3Button.callback = () => { this.onEndStage3() };

        // button_7 (components)
        const button_7Button = new Button(button_7);
        button_7Button.spriteName = "continue";
        button_7Button.callback = () => { this.onPage7Click() };

        // cooldown_timer (components)
        const cooldown_timerAnimation = new Animation(cooldown_timer);
        cooldown_timerAnimation.key = "cooldown_timer_";
        cooldown_timerAnimation.end = 121;
        cooldown_timerAnimation.autoPlay = false;
        cooldown_timerAnimation.stopOnOut = false;

        // button_5 (components)
        const button_5Button = new Button(button_5);
        button_5Button.spriteName = "continue";
        button_5Button.callback = () => { this.onPage8Click() };

        // button_4 (components)
        const button_4Button = new Button(button_4);
        button_4Button.spriteName = "finish";
        button_4Button.callback = () => { this.completeTutorial() };

        this.block = block;
        this.appear_left = appear_left;
        this.appear_right = appear_right;
        this.appear_base = appear_base;
        this.beak1 = beak1;
        this.peng_right = peng_right;
        this.peng_left = peng_left;
        this.peng_right_point_low = peng_right_point_low;
        this.peng_left_point_low = peng_left_point_low;
        this.peng_right_point_high = peng_right_point_high;
        this.peng_left_point_high = peng_left_point_high;
        this.text_1 = text_1;
        this.page1 = page1;
        this.text_8 = text_8;
        this.page2 = page2;
        this.text_6 = text_6;
        this.pagen_3 = pagen_3;
        this.text_9 = text_9;
        this.arrow_1 = arrow_1;
        this.pagen_4 = pagen_4;
        this.page3 = page3;
        this.page4 = page4;
        this.page5 = page5;
        this.cooldown_timer = cooldown_timer;
        this.page6 = page6;
        this.page7 = page7;
        this.page8 = page8;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()

        this.reset()
        this.checkTutorialStage()
    }

    reset() {
        this.appear_left.visible = false
        this.appear_right.visible = false
        this.appear_base.visible = false
        this.beak1.visible = false
        this.peng_right.visible = false
        this.peng_left.visible = false
        this.peng_right_point_low.visible = false
        this.peng_right_point_high.visible = false
        this.peng_left_point_low.visible = false
        this.peng_left_point_high.visible = false
        this.page1.visible = false
        this.page2.visible = false
        this.pagen_3.visible = false
        this.pagen_4.visible = false
        this.page3.visible = false
        this.page4.visible = false
        this.page5.visible = false
        this.page6.visible = false
        this.page7.visible = false
        this.page8.visible = false
    }

    checkTutorialStage() {
        if (this.world.room.hasApron) {
            this.startStage2()
        } else if (this.world.room.collectPizza) {
            this.startStage4()
        } else if (this.world.room.deliveredPizza) {
            this.startStage5()
        } else {
            this.startTutorial();
        }
    }

    startTutorial() {
        this.appear_right.visible = true
        this.appear_right.__Animation.play();
        this.appear_right.on('animationcomplete', () => this.onAnimComplete())
    }

    onAnimComplete() {
        this.appear_right.visible = false
        this.appear_base.visible = true
        this.beak1.visible = true
        this.page1.visible = true
    }

    startStage2() {
        this.pagen_4.visible = false;
        this.world.room.hasApron = false;
        this.world.room.apronCheck = true;
        this.peng_right_point_high.visible = false
        this.appear_left.visible = false
        this.peng_right.visible = true
        this.page3.visible = true
    }

    startStage3() {
        this.peng_left_point_high.visible = true
        this.page4.visible = true
    }

    startStage4() {
        this.peng_left_point_high.visible = false;
        this.world.room.arrow.visible = true;
        this.peng_right_point_high.visible = true
        this.page5.visible = true
        this.world.room.deliverPizza = true;
    }

    startStage5() {
        this.page5.visible = false;
        this.peng_right_point_high.visible = false
        this.peng_right_point_low.visible = true
        this.page6.visible = true;
        this.cooldown_timer.__Animation.play();
    }

    onPage2Click() {
        this.soundManager.playSfx('next');
        this.peng_right_point_high.visible = true
        this.beak1.visible = false
        this.appear_base.visible = false
        this.page1.visible = false
        this.page2.visible = true
    }

    onPage7Click() {
        this.soundManager.playSfx('next');
        this.peng_right_point_low.visible = false
        this.peng_right.visible = true
        this.page6.visible = false
        this.page7.visible = true
    }

    onPage8Click() {
        this.soundManager.playSfx('next');
        this.peng_right.visible = false
        this.appear_base.visible = true
        this.beak1.visible = true
        this.page7.visible = false
        this.page8.visible = true
    }

    onPage3New() {
        this.soundManager.playSfx('next');
        this.peng_right_point_high.visible = false
        this.peng_right_point_low.visible = true
        this.page2.visible = false
        this.pagen_3.visible = true;
    }

    onPage4New() {
        this.soundManager.playSfx('next');
        this.peng_right_point_high.visible = true
        this.peng_right_point_low.visible = false
        this.pagen_3.visible = false;
        this.pagen_4.visible = true;
    }

    onEndStage1() {
        this.soundManager.playSfx('next');
        if (this.world.client.penguin) {
            const workitems = [263, 424];
            const penguin = this.world.client.penguin;

            const items = [...new Set(Object.values(penguin.items.equippedFlat))].sort();

            const hasBothItems = workitems.every(item => items.includes(item));

            if (!hasBothItems) {
                this.world.room.stage1Done = true;
                this.close();
            } else if (hasBothItems) {
                this.startStage2()
            }
        }
    }

    onEndStage2() {
        this.soundManager.playSfx('next');
        this.peng_right_point_high.visible = false;
        this.appear_left.visible = false;
        this.peng_right.visible = false;
        this.page2.visible = false;
        this.page3.visible = false;

        setTimeout(() => {
            this.soundManager.playSfx('order_bell');
            this.world.room.counter_arrow.visible = true
            this.world.room.pizza_counter.visible = true
            this.world.room.book.visible = false
            this.world.room.pizza_bubble.visible = true;
            setTimeout(() => {
                this.world.room.pizza_bubble.visible = false;
                this.startStage3();
            }, 1500);
        }, 1000);
    }

    onEndStage3() {
        this.soundManager.playSfx('next');
        this.world.room.collectPizza = true;
        this.peng_right.visible = false
        this.page4.visible = false
        this.close()       
    }

    completeTutorial() {
        this.soundManager.playSfx('next');
        this.page8.visible = false
        this.beak1.visible = false
        this.appear_base.visible = false
        this.appear_right.visible = true
        this.appear_right.play("disappear")
        this.appear_right.on('animationcomplete', () => this.finish())
    }

    finish() {
        this.world.client.setInteractionAsSeen("pizza_tutorial")
        this.world.room.triggerRoom(330)
        this.interface.destroyWidget(this)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
