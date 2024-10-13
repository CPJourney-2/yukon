import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton } from '@components/components'


export const preload = {
    key: 'yearbook2324-pack',
    url: 'assets/media/interface/books/yearbook2324/yearbook2324-pack.json',
    loadString: ['loading', 'yearbook2324']
}
// You can write more code here
//HOW TO BE A
//GREAT TOUR GUIDE
/* START OF COMPILED CODE */

export default class Yearbook extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.toc_feb_1;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_photos_1;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_jan_1;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_dec_1;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_nov_1;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_oct_1;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_sep_1;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_aug_1;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_jul_1;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_jun_1;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_may_1;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_apr_1;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_mar_1;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_feb;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_mar;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_apr;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_may;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_jun;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_jul;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_aug;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_sep;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_oct;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_nov;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_dec;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_jan;
        /** @type {Phaser.GameObjects.Text} */
        this.toc_photos;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // rectangle_1
        const rectangle_1 = scene.add.rectangle(761, 483, 128, 128);
        rectangle_1.scaleX = 12.33917829927416;
        rectangle_1.scaleY = 8.201288318894823;
        rectangle_1.alpha = 0.3;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 0;
        this.add(rectangle_1);

        // page13
        const page13 = scene.add.container(760, 480);
        page13.visible = false;
        this.add(page13);

        // page_13
        const page_13 = scene.add.image(0, 0, "yearbook2324", "yearbook-pg13");
        page13.add(page_13);

        // closeRightFronty
        const closeRightFronty = scene.add.sprite(284, -357, "commonbook", "cc-close");
        closeRightFronty.visible = false;
        page13.add(closeRightFronty);

        // rectangle
        const rectangle = scene.add.rectangle(-69, -10, 128, 128);
        rectangle.scaleX = 5.129450930845441;
        rectangle.scaleY = 6.697870833083441;
        page13.add(rectangle);

        // page12
        const page12 = scene.add.container(760, 480);
        page12.visible = false;
        this.add(page12);

        // page_12
        const page_12 = scene.add.image(0, 0, "yearbook2324", "yearbook-pg12");
        page12.add(page_12);

        // page11
        const page11 = scene.add.container(760, 480);
        page11.visible = false;
        this.add(page11);

        // page_11
        const page_11 = scene.add.image(0, 0, "yearbook2324", "yearbook-pg11");
        page11.add(page_11);

        // page10
        const page10 = scene.add.container(760, 480);
        page10.visible = false;
        this.add(page10);

        // page_10
        const page_10 = scene.add.image(0, 0, "yearbook2324", "yearbook-pg10");
        page10.add(page_10);

        // page9
        const page9 = scene.add.container(760, 480);
        page9.visible = false;
        this.add(page9);

        // page_9
        const page_9 = scene.add.image(0, 0, "yearbook2324", "yearbook-pg9");
        page9.add(page_9);

        // page8
        const page8 = scene.add.container(760, 480);
        page8.visible = false;
        this.add(page8);

        // page_8
        const page_8 = scene.add.image(0, 0, "yearbook2324", "yearbook-pg8");
        page8.add(page_8);

        // page7
        const page7 = scene.add.container(760, 480);
        page7.visible = false;
        this.add(page7);

        // page_7
        const page_7 = scene.add.image(0, 0, "yearbook2324", "yearbook-pg7");
        page7.add(page_7);

        // page6
        const page6 = scene.add.container(760, 480);
        page6.visible = false;
        this.add(page6);

        // page_6
        const page_6 = scene.add.image(0, 0, "yearbook2324", "yearbook-pg6");
        page6.add(page_6);

        // page5
        const page5 = scene.add.container(760, 480);
        page5.visible = false;
        this.add(page5);

        // page_5
        const page_5 = scene.add.image(0, 0, "yearbook2324", "yearbook-pg5");
        page5.add(page_5);

        // page4
        const page4 = scene.add.container(760, 480);
        page4.visible = false;
        this.add(page4);

        // page_4
        const page_4 = scene.add.image(0, 0, "yearbook2324", "yearbook-pg4");
        page4.add(page_4);

        // page3
        const page3 = scene.add.container(760, 480);
        page3.visible = false;
        this.add(page3);

        // page_3
        const page_3 = scene.add.image(0, 0, "yearbook2324", "yearbook-pg3");
        page3.add(page_3);

        // page2
        const page2 = scene.add.container(760, 480);
        this.add(page2);

        // page_2
        const page_2 = scene.add.image(0, 0, "yearbook2324", "yearbook-pg2");
        page2.add(page_2);

        // rectangle_3
        const rectangle_3 = scene.add.rectangle(362, 238, 128, 128);
        rectangle_3.scaleX = 1.7954272268696712;
        rectangle_3.scaleY = 0.7076192278735185;
        rectangle_3.isFilled = true;
        page2.add(rectangle_3);

        // rectangle_4
        const rectangle_4 = scene.add.rectangle(362, -114, 128, 128);
        rectangle_4.scaleX = 1.6123217238688916;
        rectangle_4.scaleY = 3.8289177517700512;
        rectangle_4.isFilled = true;
        page2.add(rectangle_4);

        // toc_feb_1
        const toc_feb_1 = scene.add.text(363, -336, "", {});
        toc_feb_1.setOrigin(0.5, 0.5);
        toc_feb_1.visible = false;
        toc_feb_1.text = "February";
        toc_feb_1.setStyle({ "align": "center", "color": "#66666600", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px", "stroke": "#fefb86ff", "strokeThickness":10});
        page2.add(toc_feb_1);

        // toc_photos_1
        const toc_photos_1 = scene.add.text(359, 259, "", {});
        toc_photos_1.setOrigin(0.5, 0.5);
        toc_photos_1.visible = false;
        toc_photos_1.text = "Photo Gallery";
        toc_photos_1.setStyle({ "align": "center", "color": "#66666600", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px", "stroke": "#fefb86ff", "strokeThickness":10});
        page2.add(toc_photos_1);

        // toc_jan_1
        const toc_jan_1 = scene.add.text(359, 216, "", {});
        toc_jan_1.setOrigin(0.5, 0.5);
        toc_jan_1.visible = false;
        toc_jan_1.text = "January";
        toc_jan_1.setStyle({ "align": "center", "color": "#66666600", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px", "stroke": "#fefb86ff", "strokeThickness":10});
        page2.add(toc_jan_1);

        // toc_dec_1
        const toc_dec_1 = scene.add.text(363, 110, "", {});
        toc_dec_1.setOrigin(0.5, 0.5);
        toc_dec_1.visible = false;
        toc_dec_1.text = "December";
        toc_dec_1.setStyle({ "align": "center", "color": "#66666600", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px", "stroke": "#fefb86ff", "strokeThickness":10});
        page2.add(toc_dec_1);

        // toc_nov_1
        const toc_nov_1 = scene.add.text(363, 67, "", {});
        toc_nov_1.setOrigin(0.5, 0.5);
        toc_nov_1.visible = false;
        toc_nov_1.text = "November";
        toc_nov_1.setStyle({ "align": "center", "color": "#66666600", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px", "stroke": "#fefb86ff", "strokeThickness":10});
        page2.add(toc_nov_1);

        // toc_oct_1
        const toc_oct_1 = scene.add.text(363, 23, "", {});
        toc_oct_1.setOrigin(0.5, 0.5);
        toc_oct_1.visible = false;
        toc_oct_1.text = "October";
        toc_oct_1.setStyle({ "align": "center", "color": "#66666600", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px", "stroke": "#fefb86ff", "strokeThickness":10});
        page2.add(toc_oct_1);

        // toc_sep_1
        const toc_sep_1 = scene.add.text(363, -23, "", {});
        toc_sep_1.setOrigin(0.5, 0.5);
        toc_sep_1.visible = false;
        toc_sep_1.text = "September";
        toc_sep_1.setStyle({ "align": "center", "color": "#66666600", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px", "stroke": "#fefb86ff", "strokeThickness":10});
        page2.add(toc_sep_1);

        // toc_aug_1
        const toc_aug_1 = scene.add.text(363, -67, "", {});
        toc_aug_1.setOrigin(0.5, 0.5);
        toc_aug_1.visible = false;
        toc_aug_1.text = "August";
        toc_aug_1.setStyle({ "align": "center", "color": "#66666600", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px", "stroke": "#fefb86ff", "strokeThickness":10});
        page2.add(toc_aug_1);

        // toc_jul_1
        const toc_jul_1 = scene.add.text(363, -111, "", {});
        toc_jul_1.setOrigin(0.5, 0.5);
        toc_jul_1.visible = false;
        toc_jul_1.text = "July";
        toc_jul_1.setStyle({ "align": "center", "color": "#66666600", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px", "stroke": "#fefb86ff", "strokeThickness":10});
        page2.add(toc_jul_1);

        // toc_jun_1
        const toc_jun_1 = scene.add.text(363, -157, "", {});
        toc_jun_1.setOrigin(0.5, 0.5);
        toc_jun_1.visible = false;
        toc_jun_1.text = "June";
        toc_jun_1.setStyle({ "align": "center", "color": "#66666600", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px", "stroke": "#fefb86ff", "strokeThickness":10});
        page2.add(toc_jun_1);

        // toc_may_1
        const toc_may_1 = scene.add.text(363, -202, "", {});
        toc_may_1.setOrigin(0.5, 0.5);
        toc_may_1.visible = false;
        toc_may_1.text = "May";
        toc_may_1.setStyle({ "align": "center", "color": "#66666600", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px", "stroke": "#fefb86ff", "strokeThickness":10});
        page2.add(toc_may_1);

        // toc_apr_1
        const toc_apr_1 = scene.add.text(363, -246, "", {});
        toc_apr_1.setOrigin(0.5, 0.5);
        toc_apr_1.visible = false;
        toc_apr_1.text = "April";
        toc_apr_1.setStyle({ "align": "center", "color": "#66666600", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px", "stroke": "#fefb86ff", "strokeThickness":10});
        page2.add(toc_apr_1);

        // toc_mar_1
        const toc_mar_1 = scene.add.text(363, -291, "", {});
        toc_mar_1.setOrigin(0.5, 0.5);
        toc_mar_1.visible = false;
        toc_mar_1.text = "March";
        toc_mar_1.setStyle({ "align": "center", "color": "#66666600", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px", "stroke": "#fefb86ff", "strokeThickness":10});
        page2.add(toc_mar_1);

        // toc_feb
        const toc_feb = scene.add.text(363, -335.5924987792969, "", {});
        toc_feb.setOrigin(0.5, 0.5);
        toc_feb.text = "February";
        toc_feb.setStyle({ "align": "center", "color": "#666", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px" });
        page2.add(toc_feb);

        // toc_mar
        const toc_mar = scene.add.text(363, -290.5924987792969, "", {});
        toc_mar.setOrigin(0.5, 0.5);
        toc_mar.text = "March";
        toc_mar.setStyle({ "align": "center", "color": "#666", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px" });
        page2.add(toc_mar);

        // toc_apr
        const toc_apr = scene.add.text(363, -245.59249877929688, "", {});
        toc_apr.setOrigin(0.5, 0.5);
        toc_apr.text = "April";
        toc_apr.setStyle({ "align": "center", "color": "#666", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px" });
        page2.add(toc_apr);

        // toc_may
        const toc_may = scene.add.text(363, -201.59249877929688, "", {});
        toc_may.setOrigin(0.5, 0.5);
        toc_may.text = "May";
        toc_may.setStyle({ "align": "center", "color": "#666", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px" });
        page2.add(toc_may);

        // toc_jun
        const toc_jun = scene.add.text(363, -156.59249877929688, "", {});
        toc_jun.setOrigin(0.5, 0.5);
        toc_jun.text = "June";
        toc_jun.setStyle({ "align": "center", "color": "#666", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px" });
        page2.add(toc_jun);

        // toc_jul
        const toc_jul = scene.add.text(363, -110.59249877929688, "", {});
        toc_jul.setOrigin(0.5, 0.5);
        toc_jul.text = "July";
        toc_jul.setStyle({ "align": "center", "color": "#666", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px" });
        page2.add(toc_jul);

        // toc_aug
        const toc_aug = scene.add.text(363, -66.59249877929688, "", {});
        toc_aug.setOrigin(0.5, 0.5);
        toc_aug.text = "August";
        toc_aug.setStyle({ "align": "center", "color": "#666", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px" });
        page2.add(toc_aug);

        // toc_sep
        const toc_sep = scene.add.text(363, -22.592498779296875, "", {});
        toc_sep.setOrigin(0.5, 0.5);
        toc_sep.text = "September";
        toc_sep.setStyle({ "align": "center", "color": "#666", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px" });
        page2.add(toc_sep);

        // toc_oct
        const toc_oct = scene.add.text(363, 23.407501220703125, "", {});
        toc_oct.setOrigin(0.5, 0.5);
        toc_oct.text = "October";
        toc_oct.setStyle({ "align": "center", "color": "#666", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px" });
        page2.add(toc_oct);

        // toc_nov
        const toc_nov = scene.add.text(363, 67.40750122070312, "", {});
        toc_nov.setOrigin(0.5, 0.5);
        toc_nov.text = "November";
        toc_nov.setStyle({ "align": "center", "color": "#666", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px" });
        page2.add(toc_nov);

        // toc_dec
        const toc_dec = scene.add.text(363, 110.40750122070312, "", {});
        toc_dec.setOrigin(0.5, 0.5);
        toc_dec.text = "December";
        toc_dec.setStyle({ "align": "center", "color": "#666", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px" });
        page2.add(toc_dec);

        // toc_jan
        const toc_jan = scene.add.text(359, 216.40750122070312, "", {});
        toc_jan.setOrigin(0.5, 0.5);
        toc_jan.text = "January";
        toc_jan.setStyle({ "align": "center", "color": "#666", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px" });
        page2.add(toc_jan);

        // toc_photos
        const toc_photos = scene.add.text(359, 259.4075012207031, "", {});
        toc_photos.setOrigin(0.5, 0.5);
        toc_photos.text = "Photo Gallery";
        toc_photos.setStyle({ "align": "center", "color": "#666", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "35px" });
        page2.add(toc_photos);

        // page1
        const page1 = scene.add.container(760, 480);
        page1.visible = false;
        this.add(page1);

        // page
        const page = scene.add.image(0, 0, "yearbook2324", "yearbook-pg1");
        page1.add(page);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(11, -10, 128, 128);
        rectangle_2.scaleX = 5.129450930845441;
        rectangle_2.scaleY = 6.697870833083441;
        page1.add(rectangle_2);

        // closeRightFront
        const closeRightFront = scene.add.sprite(284, -357, "commonbook", "cc-close");
        page1.add(closeRightFront);

        // buttons
        const buttons = scene.add.container(780.0900074968481, 592.0151470567336);
        buttons.visible = false;
        this.add(buttons);

        // closeRight
        const closeRight = scene.add.sprite(610, -466, "commonbook", "cc-close");
        buttons.add(closeRight);

        // pageRight
        const pageRight = scene.add.sprite(604, 199, "yearbook2324", "yearbook-turnbtn0001");
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = scene.add.sprite(-647, 197, "yearbook2324", "yearbook-turnbtn0001");
        pageLeft.flipX = true;
        buttons.add(pageLeft);

        // coins
        const coins = scene.add.text(-744, -680, "", {});
        coins.visible = false;
        coins.text = "New text";
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13];

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // closeRightFronty (components)
        const closeRightFrontyButton = new Button(closeRightFronty);
        closeRightFrontyButton.spriteName = "cc-close";
        closeRightFrontyButton.callback = () => this.close();
        closeRightFrontyButton.activeFrame = true;

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.callback = () => this.prevPage();

        // toc_feb (components)
        const toc_febSimpleButton = new SimpleButton(toc_feb);
        toc_febSimpleButton.hoverCallback = () => this.onContentsHover('feb');
        toc_febSimpleButton.hoverOutCallback = () => this.onContentsHoverOut('feb');
        toc_febSimpleButton.callback = () => this.showPage(2);

        // toc_mar (components)
        const toc_marSimpleButton = new SimpleButton(toc_mar);
        toc_marSimpleButton.hoverCallback = () => this.onContentsHover('mar');
        toc_marSimpleButton.hoverOutCallback = () => this.onContentsHoverOut('mar');
        toc_marSimpleButton.callback = () => this.showPage(3);

        // toc_apr (components)
        const toc_aprSimpleButton = new SimpleButton(toc_apr);
        toc_aprSimpleButton.hoverCallback = () => this.onContentsHover('apr');
        toc_aprSimpleButton.hoverOutCallback = () => this.onContentsHoverOut('apr');
        toc_aprSimpleButton.callback = () => this.showPage(3);

        // toc_may (components)
        const toc_maySimpleButton = new SimpleButton(toc_may);
        toc_maySimpleButton.hoverCallback = () => this.onContentsHover('may');
        toc_maySimpleButton.hoverOutCallback = () => this.onContentsHoverOut('may');
        toc_maySimpleButton.callback = () => this.showPage(4);

        // toc_jun (components)
        const toc_junSimpleButton = new SimpleButton(toc_jun);
        toc_junSimpleButton.hoverCallback = () => this.onContentsHover('jun');
        toc_junSimpleButton.hoverOutCallback = () => this.onContentsHoverOut('jun');
        toc_junSimpleButton.callback = () => this.showPage(5);

        // toc_jul (components)
        const toc_julSimpleButton = new SimpleButton(toc_jul);
        toc_julSimpleButton.hoverCallback = () => this.onContentsHover('jul');
        toc_julSimpleButton.hoverOutCallback = () => this.onContentsHoverOut('jul');
        toc_julSimpleButton.callback = () => this.showPage(5);

        // toc_aug (components)
        const toc_augSimpleButton = new SimpleButton(toc_aug);
        toc_augSimpleButton.hoverCallback = () => this.onContentsHover('aug');
        toc_augSimpleButton.hoverOutCallback = () => this.onContentsHoverOut('aug');
        toc_augSimpleButton.callback = () => this.showPage(6);

        // toc_sep (components)
        const toc_sepSimpleButton = new SimpleButton(toc_sep);
        toc_sepSimpleButton.hoverCallback = () => this.onContentsHover('sep');
        toc_sepSimpleButton.hoverOutCallback = () => this.onContentsHoverOut('sep');
        toc_sepSimpleButton.callback = () => this.showPage(6);

        // toc_oct (components)
        const toc_octSimpleButton = new SimpleButton(toc_oct);
        toc_octSimpleButton.hoverCallback = () => this.onContentsHover('oct');
        toc_octSimpleButton.hoverOutCallback = () => this.onContentsHoverOut('oct');
        toc_octSimpleButton.callback = () => this.showPage(7);

        // toc_nov (components)
        const toc_novSimpleButton = new SimpleButton(toc_nov);
        toc_novSimpleButton.hoverCallback = () => this.onContentsHover('nov');
        toc_novSimpleButton.hoverOutCallback = () => this.onContentsHoverOut('nov');
        toc_novSimpleButton.callback = () => this.showPage(7);

        // toc_dec (components)
        const toc_decSimpleButton = new SimpleButton(toc_dec);
        toc_decSimpleButton.hoverCallback = () => this.onContentsHover('dec');
        toc_decSimpleButton.hoverOutCallback = () => this.onContentsHoverOut('dec');
        toc_decSimpleButton.callback = () => this.showPage(8);

        // toc_jan (components)
        const toc_janSimpleButton = new SimpleButton(toc_jan);
        toc_janSimpleButton.hoverCallback = () => this.onContentsHover('jan');
        toc_janSimpleButton.hoverOutCallback = () => this.onContentsHoverOut('jan');
        toc_janSimpleButton.callback = () => this.showPage(9);

        // toc_photos (components)
        const toc_photosSimpleButton = new SimpleButton(toc_photos);
        toc_photosSimpleButton.hoverCallback = () => this.onContentsHover('photos');
        toc_photosSimpleButton.hoverOutCallback = () => this.onContentsHoverOut('photos');
        toc_photosSimpleButton.callback = () => this.showPage(9);

        // rectangle_2 (components)
        const rectangle_2SimpleButton = new SimpleButton(rectangle_2);
        rectangle_2SimpleButton.callback = () => this.nextPage();

        // closeRightFront (components)
        const closeRightFrontButton = new Button(closeRightFront);
        closeRightFrontButton.spriteName = "cc-close";
        closeRightFrontButton.callback = () => this.close();
        closeRightFrontButton.activeFrame = true;

        // closeRight (components)
        const closeRightButton = new Button(closeRight);
        closeRightButton.spriteName = "cc-close";
        closeRightButton.callback = () => this.close();
        closeRightButton.activeFrame = true;

        // pageRight (components)
        const pageRightSimpleButton = new SimpleButton(pageRight);
        pageRightSimpleButton.hoverCallback = () => pageRight.play('pageturn');
        pageRightSimpleButton.hoverOutCallback = () => pageRight.play('pageturn-rev');
        pageRightSimpleButton.callback = () => this.nextPage();

        // pageLeft (components)
        const pageLeftSimpleButton = new SimpleButton(pageLeft);
        pageLeftSimpleButton.hoverCallback = () => pageLeft.play('pageturn');
        pageLeftSimpleButton.hoverOutCallback = () => pageLeft.play('pageturn-rev');
        pageLeftSimpleButton.callback = () => this.prevPage();

        this.toc_feb_1 = toc_feb_1;
        this.toc_photos_1 = toc_photos_1;
        this.toc_jan_1 = toc_jan_1;
        this.toc_dec_1 = toc_dec_1;
        this.toc_nov_1 = toc_nov_1;
        this.toc_oct_1 = toc_oct_1;
        this.toc_sep_1 = toc_sep_1;
        this.toc_aug_1 = toc_aug_1;
        this.toc_jul_1 = toc_jul_1;
        this.toc_jun_1 = toc_jun_1;
        this.toc_may_1 = toc_may_1;
        this.toc_apr_1 = toc_apr_1;
        this.toc_mar_1 = toc_mar_1;
        this.toc_feb = toc_feb;
        this.toc_mar = toc_mar;
        this.toc_apr = toc_apr;
        this.toc_may = toc_may;
        this.toc_jun = toc_jun;
        this.toc_jul = toc_jul;
        this.toc_aug = toc_aug;
        this.toc_sep = toc_sep;
        this.toc_oct = toc_oct;
        this.toc_nov = toc_nov;
        this.toc_dec = toc_dec;
        this.toc_jan = toc_jan;
        this.toc_photos = toc_photos;
        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    onContentsHover(month) {
        this[`toc_${month}_1`].visible = true
    }
    onContentsHoverOut(month) {
        this[`toc_${month}_1`].visible = false
    }
    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
