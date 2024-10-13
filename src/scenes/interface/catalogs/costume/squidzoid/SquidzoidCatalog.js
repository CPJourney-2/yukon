import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Animation, Interactive, SimpleButton, PolyButton } from '@components/components'

import Tag1 from '@scenes/interface/shared_prefabs/Tag1'
import Tag2 from '@scenes/interface/shared_prefabs/Tag2'
import BuyButton from '@scenes/interface/shared_prefabs/BuyButton'


export const preload = {
    key: 'squidzoid-catalog-pack',
    url: 'assets/media/interface/catalogs/costume/squidzoid/squidzoid-catalog-pack.json',
    loadString: ['loading', 'costume']
}
// You can write more code here

/* START OF COMPILED CODE */

export default class SquidzoidCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // block
        const block = scene.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // page6
        const page6 = scene.add.container(760, 480);
        page6.visible = false;
        this.add(page6);

        // page_6
        const page_6 = scene.add.image(0, 0, "squidzoid-catalog", "squidzoid-catalog-pg6");
        page6.add(page_6);

        // back_left_button
        const back_left_button = scene.add.sprite(-204, 220, "commonbook", "cc-page-left");
        page6.add(back_left_button);

        // back_catalog_close
        const back_catalog_close = scene.add.sprite(-204, -329, "commonbook", "cc-close");
        back_catalog_close.flipX = true;
        page6.add(back_catalog_close);

        // page5
        const page5 = scene.add.container(760, 480);
        page5.visible = false;
        this.add(page5);

        // page_5
        const page_5 = scene.add.image(0, 0, "squidzoid-catalog", "squidzoid-catalog-pg");
        page5.add(page_5);

        // buyButton_7
        const buyButton_7 = new BuyButton(scene, -473, -227);
        page5.add(buyButton_7);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(-264, 130, 128, 128);
        rectangle_2.scaleX = 2.18475436163401;
        rectangle_2.scaleY = 2.169713625109182;
        page5.add(rectangle_2);

        // page4
        const page4 = scene.add.container(760, 480);
        this.add(page4);

        // page_4
        const page_4 = scene.add.image(0, 0, "squidzoid-catalog", "squidzoid-catalog-pg4");
        page4.add(page_4);

        // polygon_3
        const polygon_3 = scene.add.polygon(-512, 41, "48.739011211530226 103.60431046917063 34.9158188018485 64.8993717220618 50.57544248955048 -3.7021539501772622 83.0887727060337 -63.98456072906748 96.41475005445056 -74.88130375718725 89.78804995203467 -86.48906228192834 83.45610990183121 -101.79125073658673 12.632573497652288 -210.5213504118695 43.03144827481702 -236.19151133480858 80.18562855801838 -212.54794206368047 98.42495342431721 -230.7872669299793 120.04193104363435 -238.89363353722325 159.22270297864674 -203.76604490583287 226.1002274884092 -167.9629257238388 296.35540475119 -143.64382590210698 306.95219365771595 -33.86167072767796 313.80325832159053 33.7925928280838 317.42940339239715 73.14445759636419 311.31221909130295 99.65225623443894 275.43936673031055 133.09378760982497 217.3819586096473 153.36780314402483 135.36435031220236 154.28934930467028 89.28704227992995 137.7015184130522");
        polygon_3.setOrigin(0, 0);
        page4.add(polygon_3);

        // polygon_2
        const polygon_2 = scene.add.polygon(-306.2405937046124, -27.412371333722874, "112.95948396675999 70.8868907702655 106.76396607756726 35.77895606484026 95.78340408748647 -48.364773144696585 96.41475005445056 -74.88130375718725 57.902646069642685 -90.66495293128884 36.436883192864514 -103.92321823753417 74.9489871776724 -110.2366779071748 100.20282585623488 -105.81725613842633 149.4478112794318 -83.08880132772009 208.7943321740538 -91.29629889825287 252.35720389457413 -110.86802387413883 268.53582207315435 -70.92162980458943 274.73133996234696 -39.25564948204902 258.89834980107673 -22.04587756762487 254.07961366503798 -35.81369509916419 240.8790145002181 -49.182062421921444 215.61500289079072 -22.946358058285398 237.96393623759184 28.553357914777905 228.2470086955044 49.93059850737029 196.18114780661597 70.33614634575383 199.0962260692421 104.34539274305985 190.35099128136346 150.98664494507943 118.44572746991662 179.16573481713294 154.39835937563998 109.20385651410356 146.00224604245432 83.96631742522788");
        polygon_2.setOrigin(0, 0);
        page4.add(polygon_2);

        // polygon_4
        const polygon_4 = scene.add.polygon(-276, -204.76694377248248, "-7.279350645827947 -88.5775765212536 -44.88152844071783 -100.14058886872147 -34.89861165837084 -121.93552798622576 -1.1049901388793728 -118.47913251135247 22.63063047765928 -113.39292809352276 40.006279804072165 -89.17907687601416 35.586353288542796 -72.97267965240638 18.702012540943258 -64.05643952454108");
        polygon_4.setOrigin(0, -1.7409905105742822);
        page4.add(polygon_4);

        // polygon_6
        const polygon_6 = scene.add.polygon(176.45703125, 97.6539306640625, "3.505430008673329 96.70824146803727 -23.00703011035705 37.055206200219004 -18.841568619185182 -2.9065231908856504 -14.358400178745455 -27.11563276926006 -8.978598050217784 -49.531474971458465 6.264174647277173 -101.53622888055895 -15.14528230366659 -258.14769487155775 13.478207423671165 -363.3583598152857 36.68644233772875 -351.7542423582569 45.19612847288329 -218.69369551765976 59.470822403840316 -163.91751348870997 95.68093599987333 -138.57043397148686 116.68280188557242 -121.91378171731168 143.55249489218272 -122.54441735739601 173.65554825468462 -147.8713741701349 184.79978857978676 -213.94079895466933 201.51614906743998 -234.6372452727162 176.04359975292073 -322.99515070745497 203.10818339959746 -333.3433738664785 258.3848982945037 -237.39328269836466 225.7335280265222 -144.0777916395548 202.34888090140112 -108.76332445444797 230.18696402638284 -6.690352996181105 228.86134102043138 39.70645221212203 203.67450390735257 84.77763441447371 150.64958366929181 111.29009453350398 75.08907233005527 117.9182095632616");
        polygon_6.setOrigin(0, 0);
        page4.add(polygon_6);

        // polygon_5
        const polygon_5 = scene.add.polygon(175, 92, "51.61121834560629 -93.46029334688086 -14.066899211753025 8.042251969038148 -41.53229382664881 8.042251969038148 -77.35672158520845 -88.6837029790729 2.8435361594241613 -156.58760957479268 51.69717150985048 -193.2278360876124 72.63444380289025 -167.05624572131256 97.93364782364665 -144.37420073718607 117.99853377114323 -149.60851881044607 131.08432895429314 -149.60851881044607 154.63876028396294 -158.3323822658793 174.70364623145952 -196.71738146978566 195.21615040436723 -148.28168782842158 228.80966963586002 -131.09430589602994 272.55936910012974 -127.96932736286783 293.6529741989741 -140.46924149551631 336.6214290299531 -142.03173076209737 358.49627876208797 -132.656795162611 338.9651629298248 -113.90692396363829 315.52782393110897 -41.25117306761899 290.5279956658119 -49.06361940052432 256.9344764343191 -59.219799633301136 220.9972233029548 -27.188769668389455 174.60842031666107 -94.65444093883286");
        polygon_5.setOrigin(0, 0);
        page4.add(polygon_5);

        // polygon_7
        const polygon_7 = scene.add.polygon(273.00000297278325, -32.756142587055706, "-8.299857618752185 -81.06653868606458 -28.289201220862424 -67.16092000109126 -36.54566923042978 -90.19212023830534 -24.812793637886784 -116.69972805849505 -1.1049901388793728 -118.47913251135247 18.207750201437648 -116.69972805849505 54.7100298226826 -120.17613564147081 70.35386394607326 -112.78876952764739 71.657516789689 -89.75756929043337 60.793743092890054 -69.3336747404511 46.01901086524322 -81.50110128086607 14.731342618461895 -85.84659911265618");
        polygon_7.setOrigin(0, 0);
        page4.add(polygon_7);

        // tag
        const tag = new Tag2(scene, -248, -212);
        tag.angle = -25;
        page4.add(tag);

        // tag_1
        const tag_1 = new Tag2(scene, -121, 92);
        tag_1.angle = 29.999999999999996;
        page4.add(tag_1);

        // tag_2
        const tag_2 = new Tag1(scene, -418, -36);
        tag_2.angle = 20;
        tag_2.setOrigin(0.894463955816078, 0.4372934895100823);
        page4.add(tag_2);

        // tag_3
        const tag_3 = new Tag2(scene, 424, -43);
        tag_3.angle = -45;
        page4.add(tag_3);

        // tag_4
        const tag_4 = new Tag1(scene, 168, 72);
        tag_4.angle = 10;
        tag_4.setOrigin(0.894463955816078, 0.4372934895100823);
        page4.add(tag_4);

        // tag_5
        const tag_5 = new Tag1(scene, 239, -149);
        tag_5.angle = 20;
        tag_5.setOrigin(0.894463955816078, 0.4372934895100823);
        page4.add(tag_5);

        // page3
        const page3 = scene.add.container(760, 480);
        page3.visible = false;
        this.add(page3);

        // page_3
        const page_3 = scene.add.image(0, 0, "squidzoid-catalog", "squidzoid-catalog-pg3");
        page3.add(page_3);

        // tag2
        const tag2 = new Tag2(scene, 373, -174);
        tag2.angle = 29.999999999999996;
        page3.add(tag2);

        // polygon
        const polygon = scene.add.polygon(176.15652569691832, -200.81403375191144, "-31.110615078652245 93.48838257091109 -72.54449955407392 -10.265997108636782 -29.099444239451373 -107.18188973356405 -10.161856025385191 -159.53875126657073 24.371393070853287 -158.4247754892727 68.93042416277387 -117.20767172924619 90.09596393143624 -103.83996240167 96.77981859522424 -65.96478597353752 121.28728569578061 -5.810093999444746 149.19328030696465 -16.514608692723016 182.59150362124456 -36.55354268129099 198.91952390822598 -84.05323806160021 236.51689522681022 -121.2566356184748 258.05717824059116 -117.34022052506012 240.4817573659966 -73.66267969715759 236.0286609240925 -4.639684847645697 214.5053614548899 22.821076544095547 189.31412638465696 76.37622835953186 214.02582274284146 116.7237531014361 217.93042267331657 116.7237531014361 242.65955556632548 150.5636191655537 289.51475473202686 159.67435233666225 340.2745538282031 127.13601958270306 338.9730205180449 157.07128571634553 262.18255521870105 229.9571510852142 318.1484875555109 241.6709508766395 369.3494725425735 224.70578609966202 374.46093962804866 237.25211440037356 325.6696629030589 278.14385108417434 259.22059079188284 283.2553181696495 196.48894928832465 270.7089898689379 216.00545997832046 302.7718288596453 241.09811657974365 323.682376027498 263.4651084461834 339.17554906366183 233.03598295291272 342.8270441228543 200.67105872189518 331.1172372427345 152.72362125480322 301.64228773087655 119.8937931773662 266.8141787364726 171.59385265154538 181.56408066734764 168.29384885532113 156.26405156296215 113.84378621762198 139.21403194913717 50.363713399350445 149.13714114068006 38.19544537910292 165.78845527365036 33.71239926638009 207.41674060607608 43.89390448301424 264.16978105816634 10.571489581916808 317.06250312340046 -33.23371183734537 347.0721168083164 -68.3333712430209 353.803558338172 -73.14154376434624 343.7063960433886 -35.63779809800815 301.3944778557251 -24.081642310163488 277.5113033486932 -101.56613214183051 287.5452660607076 -146.16152197300573 276.95386097580354 -147.83384909167478 260.78803216200254 -90.58571139627134 237.98321217154398 -20.34809965980685 175.9393470909551");
        polygon.setOrigin(0, 0);
        page3.add(polygon);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(232, -216, 100, 110);
        page3.add(rectangle_1);

        // page2
        const page2 = scene.add.container(760, 480);
        page2.visible = false;
        this.add(page2);

        // page_2
        const page_2 = scene.add.image(0, 0, "squidzoid-catalog", "squidzoid-catalog-pg2");
        page2.add(page_2);

        // tag1
        const tag1 = new Tag1(scene, -446, -51);
        tag1.angle = -20;
        tag1.setOrigin(0.894463955816078, 0.4372934895100823);
        page2.add(tag1);

        // polygon_1
        const polygon_1 = scene.add.polygon(-399.34710693359375, -76.23977661132812, "35.0343297071654 107.94437650053368 42.83081722029817 28.680086783683407 75.9658891511126 15.036233635701024 110.40686579974692 24.652869972657356 121.90915621223166 -33.1614237737237 143.99920416610797 -39.65849670133434 173.23603234035602 -29.26318001715731 158.47871533176817 31.278915954727722 176.020812236317 42.97364722442694 170.1734466014674 113.1420348426222 122.74481422990948 138.4806192603038");
        polygon_1.setOrigin(0.6471584514192467, 0.47049764056289917);
        page2.add(polygon_1);

        // page1
        const page1 = scene.add.container(760, 480);
        page1.visible = false;
        this.add(page1);

        // page_1
        const page_1 = scene.add.image(-760, -480, "squidzoid-catalog", "squidzoid-catalog-pg1");
        page_1.setOrigin(0, 0);
        page1.add(page_1);

        // right_button_1
        const right_button_1 = scene.add.sprite(2, -54, "commonbook", "cc-page-front");
        page1.add(right_button_1);

        // catalog_close_1
        const catalog_close_1 = scene.add.sprite(227, -330, "commonbook", "cc-close");
        page1.add(catalog_close_1);

        // buttons
        const buttons = scene.add.container(190, 41);
        buttons.visible = false;
        this.add(buttons);

        // coins
        const coins = scene.add.text(1133, 793, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // right_button
        const right_button = scene.add.sprite(1077, 658, "commonbook", "cc-page-right");
        buttons.add(right_button);

        // left_button
        const left_button = scene.add.sprite(66, 659, "commonbook", "cc-page-left");
        buttons.add(left_button);

        // catalog_close
        const catalog_close = scene.add.sprite(1077, 114, "commonbook", "cc-close");
        buttons.add(catalog_close);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6];

        // block (components)
        new Interactive(block);

        // back_left_button (components)
        const back_left_buttonButton = new Button(back_left_button);
        back_left_buttonButton.spriteName = "cc-page-left";
        back_left_buttonButton.callback = () => this.prevPage();;

        // back_catalog_close (components)
        const back_catalog_closeButton = new Button(back_catalog_close);
        back_catalog_closeButton.spriteName = "cc-close";
        back_catalog_closeButton.callback = () => this.close();

        // buyButton_7 (prefab fields)
        buyButton_7.item = 489;

        // rectangle_2 (components)
        const rectangle_2SimpleButton = new SimpleButton(rectangle_2);
        rectangle_2SimpleButton.callback = () => this.interface.prompt.showItem(995);

        // polygon_3 (components)
        const polygon_3SimpleButton = new SimpleButton(polygon_3);
        polygon_3SimpleButton.hoverCallback = () => tag_2.setFrame('cc-buy1-hover');
        polygon_3SimpleButton.hoverOutCallback = () => tag_2.setFrame('cc-buy1');
        polygon_3SimpleButton.callback = () => this.interface.prompt.showItem(tag_2.item);
        polygon_3SimpleButton.isPoly = true;
        polygon_3SimpleButton.downCallback = () => tag_2.setFrame('cc-buy1-active');

        // polygon_2 (components)
        const polygon_2SimpleButton = new SimpleButton(polygon_2);
        polygon_2SimpleButton.hoverCallback = () => tag_1.setFrame('cc-buy2-hover');
        polygon_2SimpleButton.hoverOutCallback = () => tag_1.setFrame('cc-buy2');
        polygon_2SimpleButton.callback = () => this.interface.prompt.showItem(tag_1.item);
        polygon_2SimpleButton.isPoly = true;
        polygon_2SimpleButton.downCallback = () => tag_1.setFrame('cc-buy2-active');

        // polygon_4 (components)
        const polygon_4SimpleButton = new SimpleButton(polygon_4);
        polygon_4SimpleButton.hoverCallback = () => tag.setFrame('cc-buy2-hover');
        polygon_4SimpleButton.hoverOutCallback = () => tag.setFrame('cc-buy2');
        polygon_4SimpleButton.callback = () => this.interface.prompt.showItem(tag.item);
        polygon_4SimpleButton.isPoly = true;
        polygon_4SimpleButton.downCallback = () => tag.setFrame('cc-buy2-active');

        // polygon_6 (components)
        const polygon_6SimpleButton = new SimpleButton(polygon_6);
        polygon_6SimpleButton.hoverCallback = () => tag_4.setFrame('cc-buy1-hover');
        polygon_6SimpleButton.hoverOutCallback = () => tag_4.setFrame('cc-buy1');
        polygon_6SimpleButton.callback = () => this.interface.prompt.showItem(tag_4.item);
        polygon_6SimpleButton.isPoly = true;
        polygon_6SimpleButton.downCallback = () => tag_4.setFrame('cc-buy1-active');

        // polygon_5 (components)
        const polygon_5SimpleButton = new SimpleButton(polygon_5);
        polygon_5SimpleButton.hoverCallback = () => tag_3.setFrame('cc-buy2-hover');
        polygon_5SimpleButton.hoverOutCallback = () => tag_3.setFrame('cc-buy2');
        polygon_5SimpleButton.callback = () => this.interface.prompt.showItem(tag_3.item);
        polygon_5SimpleButton.isPoly = true;
        polygon_5SimpleButton.downCallback = () => tag_3.setFrame('cc-buy2-active');

        // polygon_7 (components)
        const polygon_7SimpleButton = new SimpleButton(polygon_7);
        polygon_7SimpleButton.hoverCallback = () => tag_5.setFrame('cc-buy1-hover');
        polygon_7SimpleButton.hoverOutCallback = () => tag_5.setFrame('cc-buy1');
        polygon_7SimpleButton.callback = () => this.interface.prompt.showItem(tag_5.item);
        polygon_7SimpleButton.isPoly = true;
        polygon_7SimpleButton.downCallback = () => tag_5.setFrame('cc-buy1-active');

        // tag (prefab fields)
        tag.item = 123;

        // tag_1 (prefab fields)
        tag_1.item = 302;

        // tag_2 (prefab fields)
        tag_2.item = 765;

        // tag_3 (prefab fields)
        tag_3.item = 315;

        // tag_4 (prefab fields)
        tag_4.item = 766;

        // tag_5 (prefab fields)
        tag_5.item = 124;

        // tag2 (prefab fields)
        tag2.item = 767;

        // polygon (components)
        const polygonSimpleButton = new SimpleButton(polygon);
        polygonSimpleButton.hoverCallback = () => tag2.setFrame('cc-buy2-hover');
        polygonSimpleButton.hoverOutCallback = () => tag2.setFrame('cc-buy2');
        polygonSimpleButton.callback = () => this.interface.prompt.showItem(tag2.item);
        polygonSimpleButton.isPoly = true;
        polygonSimpleButton.downCallback = () => tag2.setFrame('cc-buy2-active');

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // tag1 (prefab fields)
        tag1.item = 195;

        // polygon_1 (components)
        const polygon_1SimpleButton = new SimpleButton(polygon_1);
        polygon_1SimpleButton.hoverCallback = () => tag1.setFrame('cc-buy1-hover');
        polygon_1SimpleButton.hoverOutCallback = () => tag1.setFrame('cc-buy1');
        polygon_1SimpleButton.callback = () => this.interface.prompt.showItem(tag1.item);
        polygon_1SimpleButton.isPoly = true;
        polygon_1SimpleButton.downCallback = () => tag1.setFrame('cc-buy1-active');

        // right_button_1 (components)
        const right_button_1Button = new Button(right_button_1);
        right_button_1Button.spriteName = "cc-page-front";
        right_button_1Button.callback = () => this.nextPage();;

        // catalog_close_1 (components)
        const catalog_close_1Button = new Button(catalog_close_1);
        catalog_close_1Button.spriteName = "cc-close";
        catalog_close_1Button.callback = () => this.close();
        catalog_close_1Button.activeFrame = true;
        catalog_close_1Button.pixelPerfect = true;

        // right_button (components)
        const right_buttonButton = new Button(right_button);
        right_buttonButton.spriteName = "cc-page-right";
        right_buttonButton.callback = () => this.nextPage();;

        // left_button (components)
        const left_buttonButton = new Button(left_button);
        left_buttonButton.spriteName = "cc-page-left";
        left_buttonButton.callback = () => this.prevPage();;

        // catalog_close (components)
        const catalog_closeButton = new Button(catalog_close);
        catalog_closeButton.spriteName = "cc-close";
        catalog_closeButton.callback = () => this.close();

        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    onBgHover(out) {
        if (out) {
            this.background_outline.visible = false
            return
        }

        this.background_outline.visible = true
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
