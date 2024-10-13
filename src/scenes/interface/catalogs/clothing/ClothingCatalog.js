import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Interactive, SimpleButton } from '@components/components'

import ColorButton from './buttons/ColorButton'
import FlagButton from './buttons/FlagButton'
import PhotoButton from './buttons/PhotoButton'
import Tag1 from '@scenes/interface/shared_prefabs/Tag1'
import Tag2 from '@scenes/interface/shared_prefabs/Tag2'
import BuyButton from '@scenes/interface/shared_prefabs/BuyButton'
import TShirtButton from './buttons/TShirtButton'


export const preload = {
    key: 'clothingcatalog-pack',
    url: 'assets/media/interface/catalogs/clothing/clothingcatalog-pack.json',
    loadString: ['loading', 'clothingcatalog']
}


//note, how tags are named is month_page_x, where x counts up, 
//so august's page 3 tag 4 would be 8_3_1, you don't have to update it every month it can 
//just stay as 8_3_1, and so you can have tag_9_3_1 for september's page 3, and tag_10_3_1 for octobe'rs page 3
/* START OF COMPILED CODE */

export default class ClothingCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {PhotoButton} */
        this.photoButtonC1;
        /** @type {PhotoButton} */
        this.photoButtonD1;
        /** @type {PhotoButton} */
        this.photoButtonD2;
        /** @type {PhotoButton} */
        this.photoButtonD3;
        /** @type {PhotoButton} */
        this.photoButtonD4;
        /** @type {PhotoButton} */
        this.photoButtonC4;
        /** @type {PhotoButton} */
        this.photoButtonC3;
        /** @type {PhotoButton} */
        this.photoButtonC2;
        /** @type {PhotoButton} */
        this.photoButtonA1;
        /** @type {PhotoButton} */
        this.photoButtonA2;
        /** @type {PhotoButton} */
        this.photoButtonA3;
        /** @type {PhotoButton} */
        this.photoButtonA4;
        /** @type {PhotoButton} */
        this.photoButtonB4;
        /** @type {PhotoButton} */
        this.photoButtonB3;
        /** @type {PhotoButton} */
        this.photoButtonB2;
        /** @type {PhotoButton} */
        this.photoButtonB1;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.secret_town;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.vikinghelmet;
        /** @type {Phaser.GameObjects.Image} */
        this.tshirt_body_tint;
        /** @type {Phaser.GameObjects.Image} */
        this.tshirt_preview_tint;
        /** @type {Phaser.GameObjects.Image} */
        this.paint_tint;
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

        // page20
        const page20 = scene.add.container(0, -42);
        page20.visible = false;
        this.add(page20);

        // p_back
        const p_back = scene.add.image(0, 0, "sept24ps", "sept24psback");
        p_back.setOrigin(0, 0);
        page20.add(p_back);

        // closeLeft
        const closeLeft = scene.add.image(440, 86, "commonbook", "cc-close");
        closeLeft.setOrigin(0, 0);
        closeLeft.flipX = true;
        page20.add(closeLeft);

        // pageLeft_1
        const pageLeft_1 = scene.add.image(440, 631, "commonbook", "cc-page-left");
        pageLeft_1.setOrigin(0, 0);
        page20.add(pageLeft_1);

        // page19
        const page19 = scene.add.container(0, -42);
        page19.visible = false;
        this.add(page19);

        // flagsp2
        const flagsp2 = scene.add.image(0, 0, "clothingcatv2", "flagspg2");
        flagsp2.setOrigin(0, 0);
        page19.add(flagsp2);

        // scotland
        const scotland = new FlagButton(scene, 181, 240);
        page19.add(scotland);

        // paraguay
        const paraguay = new FlagButton(scene, 277, 241);
        page19.add(paraguay);

        // trinidad
        const trinidad = new FlagButton(scene, 371, 240);
        page19.add(trinidad);

        // chad
        const chad = new FlagButton(scene, 468, 240);
        page19.add(chad);

        // elsalvador
        const elsalvador = new FlagButton(scene, 559, 240);
        page19.add(elsalvador);

        // panama
        const panama = new FlagButton(scene, 669, 240);
        page19.add(panama);

        // england
        const england = new FlagButton(scene, 372, 349);
        page19.add(england);

        // nicaragua
        const nicaragua = new FlagButton(scene, 468, 348);
        page19.add(nicaragua);

        // flags_two
        const flags_two = scene.add.image(425, 294, "clothingcatv2", "flags_two");
        page19.add(flags_two);

        // page18
        const page18 = scene.add.container(0, -42);
        page18.visible = false;
        this.add(page18);

        // flagsp1
        const flagsp1 = scene.add.image(0, 0, "clothingcatv2", "flagspg1");
        flagsp1.setOrigin(0, 0);
        page18.add(flagsp1);

        // argentina
        const argentina = new FlagButton(scene, 181.5, 239.5);
        page18.add(argentina);

        // australia
        const australia = new FlagButton(scene, 276, 240);
        page18.add(australia);

        // austria
        const austria = new FlagButton(scene, 371.5, 239.5);
        page18.add(austria);

        // belgium
        const belgium = new FlagButton(scene, 467.5, 239.5);
        page18.add(belgium);

        // belize
        const belize = new FlagButton(scene, 560, 241);
        page18.add(belize);

        // brazil
        const brazil = new FlagButton(scene, 180, 349);
        page18.add(brazil);

        // canada
        const canada = new FlagButton(scene, 276, 349);
        page18.add(canada);

        // chile
        const chile = new FlagButton(scene, 371, 349);
        page18.add(chile);

        // china
        const china = new FlagButton(scene, 467, 349);
        page18.add(china);

        // colombia
        const colombia = new FlagButton(scene, 560, 349);
        page18.add(colombia);

        // costa
        const costa = new FlagButton(scene, 181, 458);
        page18.add(costa);

        // croatia
        const croatia = new FlagButton(scene, 276, 458);
        page18.add(croatia);

        // czech
        const czech = new FlagButton(scene, 372, 458);
        page18.add(czech);

        // denmark
        const denmark = new FlagButton(scene, 469, 458);
        page18.add(denmark);

        // dominican
        const dominican = new FlagButton(scene, 561, 459);
        page18.add(dominican);

        // ecuador
        const ecuador = new FlagButton(scene, 182, 566);
        page18.add(ecuador);

        // egypt
        const egypt = new FlagButton(scene, 277, 567);
        page18.add(egypt);

        // finland
        const finland = new FlagButton(scene, 371, 569);
        page18.add(finland);

        // france
        const france = new FlagButton(scene, 468, 567);
        page18.add(france);

        // germany
        const germany = new FlagButton(scene, 561, 567);
        page18.add(germany);

        // gibraltar
        const gibraltar = new FlagButton(scene, 239, 675);
        page18.add(gibraltar);

        // great_britain
        const great_britain = new FlagButton(scene, 334, 676);
        page18.add(great_britain);

        // greece
        const greece = new FlagButton(scene, 428, 676);
        page18.add(greece);

        // guatemala
        const guatemala = new FlagButton(scene, 527, 676);
        page18.add(guatemala);

        // haiti
        const haiti = new FlagButton(scene, 619, 676);
        page18.add(haiti);

        // hungary
        const hungary = new FlagButton(scene, 864, 144);
        page18.add(hungary);

        // india
        const india = new FlagButton(scene, 962, 144);
        page18.add(india);

        // ireland
        const ireland = new FlagButton(scene, 1060, 145);
        page18.add(ireland);

        // israel
        const israel = new FlagButton(scene, 1158, 144);
        page18.add(israel);

        // italy
        const italy = new FlagButton(scene, 1256, 144);
        page18.add(italy);

        // jamaica
        const jamaica = new FlagButton(scene, 814, 250);
        page18.add(jamaica);

        // japan
        const japan = new FlagButton(scene, 910, 250);
        page18.add(japan);

        // korea
        const korea = new FlagButton(scene, 1007, 249);
        page18.add(korea);

        // latvia
        const latvia = new FlagButton(scene, 1106, 249);
        page18.add(latvia);

        // liechtenstein
        const liechtenstein = new FlagButton(scene, 1204, 249);
        page18.add(liechtenstein);

        // malaysia
        const malaysia = new FlagButton(scene, 1301, 250);
        page18.add(malaysia);

        // malta
        const malta = new FlagButton(scene, 814, 357);
        page18.add(malta);

        // mexico
        const mexico = new FlagButton(scene, 912, 358);
        page18.add(mexico);

        // netherlands
        const netherlands = new FlagButton(scene, 1008, 358);
        page18.add(netherlands);

        // norway
        const norway = new FlagButton(scene, 1107, 359);
        page18.add(norway);

        // new_zealand
        const new_zealand = new FlagButton(scene, 1206, 357);
        page18.add(new_zealand);

        // pakistan
        const pakistan = new FlagButton(scene, 1301, 357);
        page18.add(pakistan);

        // peru
        const peru = new FlagButton(scene, 815, 467);
        page18.add(peru);

        // philippines
        const philippines = new FlagButton(scene, 913, 467);
        page18.add(philippines);

        // poland
        const poland = new FlagButton(scene, 1006, 468);
        page18.add(poland);

        // portugal
        const portugal = new FlagButton(scene, 1108, 467);
        page18.add(portugal);

        // puerto_rico
        const puerto_rico = new FlagButton(scene, 1205, 467);
        page18.add(puerto_rico);

        // romania
        const romania = new FlagButton(scene, 1301, 467);
        page18.add(romania);

        // russia
        const russia = new FlagButton(scene, 812, 577);
        page18.add(russia);

        // singapore
        const singapore = new FlagButton(scene, 911, 577);
        page18.add(singapore);

        // slovenia
        const slovenia = new FlagButton(scene, 1006, 577);
        page18.add(slovenia);

        // south_africa
        const south_africa = new FlagButton(scene, 1107, 576);
        page18.add(south_africa);

        // spain
        const spain = new FlagButton(scene, 1204, 576);
        page18.add(spain);

        // sweden
        const sweden = new FlagButton(scene, 1301, 576);
        page18.add(sweden);

        // switzerland
        const switzerland = new FlagButton(scene, 812, 685);
        page18.add(switzerland);

        // turkey
        const turkey = new FlagButton(scene, 911, 685);
        page18.add(turkey);

        // usa
        const usa = new FlagButton(scene, 1005, 686);
        page18.add(usa);

        // uruguay
        const uruguay = new FlagButton(scene, 1106, 687);
        page18.add(uruguay);

        // venezuela
        const venezuela = new FlagButton(scene, 1205, 686);
        page18.add(venezuela);

        // ukraine
        const ukraine = new FlagButton(scene, 618, 766);
        page18.add(ukraine);

        // tunisia
        const tunisia = new FlagButton(scene, 526, 766);
        page18.add(tunisia);

        // syria
        const syria = new FlagButton(scene, 429, 766);
        page18.add(syria);

        // saudi
        const saudi = new FlagButton(scene, 334, 766);
        page18.add(saudi);

        // palestine
        const palestine = new FlagButton(scene, 239, 766);
        page18.add(palestine);

        // cuba
        const cuba = new FlagButton(scene, 814, 776);
        page18.add(cuba);

        // estonia
        const estonia = new FlagButton(scene, 910, 776);
        page18.add(estonia);

        // honduras
        const honduras = new FlagButton(scene, 1006, 776);
        page18.add(honduras);

        // albania
        const albania = new FlagButton(scene, 1105, 775);
        page18.add(albania);

        // wales
        const wales = new FlagButton(scene, 1204, 775);
        page18.add(wales);

        // sudan
        const sudan = new FlagButton(scene, 1299, 775);
        page18.add(sudan);

        // morroco
        const morroco = new FlagButton(scene, 1301, 684);
        page18.add(morroco);

        // lebanon
        const lebanon = new FlagButton(scene, 670, 568);
        page18.add(lebanon);

        // serbia
        const serbia = new FlagButton(scene, 669, 457);
        page18.add(serbia);

        // slovakia
        const slovakia = new FlagButton(scene, 670, 348);
        page18.add(slovakia);

        // georgia
        const georgia = new FlagButton(scene, 669, 241);
        page18.add(georgia);

        // flags
        const flags = scene.add.image(740, 460, "clothingcatv2", "flags");
        page18.add(flags);

        // page17
        const page17 = scene.add.container(0, -42);
        page17.visible = false;
        this.add(page17);

        // p3_102
        const p3_102 = scene.add.image(0, 0, "clothingcatv2", "bgclearance");
        p3_102.setOrigin(0, 0);
        page17.add(p3_102);

        // photoButtonC1
        const photoButtonC1 = new PhotoButton(scene, 313, 367);
        page17.add(photoButtonC1);

        // photoButtonD1
        const photoButtonD1 = new PhotoButton(scene, 943, 367);
        page17.add(photoButtonD1);

        // photoButtonD2
        const photoButtonD2 = new PhotoButton(scene, 1186, 367);
        page17.add(photoButtonD2);

        // photoButtonD3
        const photoButtonD3 = new PhotoButton(scene, 942, 610);
        page17.add(photoButtonD3);

        // photoButtonD4
        const photoButtonD4 = new PhotoButton(scene, 1186, 610);
        page17.add(photoButtonD4);

        // photoButtonC4
        const photoButtonC4 = new PhotoButton(scene, 556, 610);
        page17.add(photoButtonC4);

        // photoButtonC3
        const photoButtonC3 = new PhotoButton(scene, 312, 610);
        page17.add(photoButtonC3);

        // photoButtonC2
        const photoButtonC2 = new PhotoButton(scene, 556, 367);
        page17.add(photoButtonC2);

        // page16
        const page16 = scene.add.container(0, -42);
        page16.visible = false;
        this.add(page16);

        // p3_101
        const p3_101 = scene.add.image(0, 0, "clothingcatv2", "bgpage");
        p3_101.setOrigin(0, 0);
        page16.add(p3_101);

        // photoButtonA1
        const photoButtonA1 = new PhotoButton(scene, 313, 367);
        page16.add(photoButtonA1);

        // photoButtonA2
        const photoButtonA2 = new PhotoButton(scene, 556, 367);
        page16.add(photoButtonA2);

        // photoButtonA3
        const photoButtonA3 = new PhotoButton(scene, 312, 610);
        page16.add(photoButtonA3);

        // photoButtonA4
        const photoButtonA4 = new PhotoButton(scene, 556, 610);
        page16.add(photoButtonA4);

        // photoButtonB4
        const photoButtonB4 = new PhotoButton(scene, 1186, 610);
        page16.add(photoButtonB4);

        // photoButtonB3
        const photoButtonB3 = new PhotoButton(scene, 942, 610);
        page16.add(photoButtonB3);

        // photoButtonB2
        const photoButtonB2 = new PhotoButton(scene, 1186, 367);
        page16.add(photoButtonB2);

        // photoButtonB1
        const photoButtonB1 = new PhotoButton(scene, 943, 367);
        page16.add(photoButtonB1);

        // secret_town
        const secret_town = scene.add.rectangle(203, 139, 80, 110);
        secret_town.scaleX = 0.856739901050933;
        secret_town.scaleY = 0.3096852681290009;
        page16.add(secret_town);

        // page15
        const page15 = scene.add.container(0, -42);
        page15.visible = false;
        this.add(page15);

        // p7_12
        const p7_12 = scene.add.image(0, 0, "sept24ps", "sept24ps9");
        p7_12.setOrigin(0, 0);
        page15.add(p7_12);

        // tag_52
        const tag_52 = new Tag2(scene, 602, 462);
        tag_52.angle = -12.000000000000002;
        page15.add(tag_52);

        // tag_53
        const tag_53 = new Tag1(scene, 858, 589);
        tag_53.angle = -36;
        page15.add(tag_53);

        // tag_43
        const tag_43 = new Tag2(scene, 1192, 645);
        tag_43.angle = 18;
        page15.add(tag_43);

        // tag_44
        const tag_44 = new Tag2(scene, 1111, 313);
        tag_44.angle = 14.999999999999998;
        page15.add(tag_44);

        // tag_45
        const tag_45 = new Tag1(scene, 824, 437);
        tag_45.angle = -42;
        page15.add(tag_45);

        // vikinghelmet
        const vikinghelmet = scene.add.rectangle(941, 184, 80, 110);
        vikinghelmet.scaleX = 3.535121932166013;
        vikinghelmet.scaleY = 0.8851388038374403;
        vikinghelmet.angle = -10;
        page15.add(vikinghelmet);

        // page14
        const page14 = scene.add.container(0, -42);
        page14.visible = false;
        this.add(page14);

        // p7_aug
        const p7_aug = scene.add.image(0, 0, "aug24ps", "aug24ps5");
        p7_aug.setOrigin(0, 0);
        page14.add(p7_aug);

        // tag_62
        const tag_62 = new Tag2(scene, 1209, 451);
        tag_62.angle = -23;
        page14.add(tag_62);

        // tag_63
        const tag_63 = new Tag1(scene, 230, 502);
        tag_63.angle = -14;
        page14.add(tag_63);

        // tag_78
        const tag_78 = new Tag2(scene, 1094, 697);
        tag_78.angle = 19;
        page14.add(tag_78);

        // tag_79
        const tag_79 = new Tag1(scene, 824, 398);
        tag_79.angle = 10;
        page14.add(tag_79);

        // tag_80
        const tag_80 = new Tag2(scene, 551, 666);
        tag_80.angle = -29.999999999999996;
        page14.add(tag_80);

        // tag_81
        const tag_81 = new Tag1(scene, 229, 338);
        tag_81.angle = -27;
        page14.add(tag_81);

        // tag_82
        const tag_82 = new Tag2(scene, 525, 428);
        tag_82.angle = 16;
        page14.add(tag_82);

        // augustSecret_3
        const augustSecret_3 = scene.add.rectangle(876, 249, 30, 30);
        page14.add(augustSecret_3);

        // augustSecret_12
        const augustSecret_12 = scene.add.rectangle(1010, 516, 55, 40);
        page14.add(augustSecret_12);

        // augustSecret_13
        const augustSecret_13 = scene.add.rectangle(426, 711, 22, 25);
        page14.add(augustSecret_13);

        // clearance_tag
        const clearance_tag = scene.add.image(444, 787, "clothingcatv2", "clearance_tag");
        page14.add(clearance_tag);

        // clearance_tag_1
        const clearance_tag_1 = scene.add.image(1065, 787, "clothingcatv2", "clearance_tag");
        page14.add(clearance_tag_1);

        // page13
        const page13 = scene.add.container(0, -42);
        page13.visible = false;
        this.add(page13);

        // p6_aug
        const p6_aug = scene.add.image(0, 0, "aug24ps", "aug24ps4");
        p6_aug.setOrigin(0, 0);
        page13.add(p6_aug);

        // tag_60
        const tag_60 = new Tag2(scene, 608, 430);
        tag_60.angle = -26;
        page13.add(tag_60);

        // tag_61
        const tag_61 = new Tag1(scene, 236, 327);
        tag_61.angle = -23;
        page13.add(tag_61);

        // tag_74
        const tag_74 = new Tag1(scene, 201, 479);
        tag_74.angle = -7;
        page13.add(tag_74);

        // tag_75
        const tag_75 = new Tag1(scene, 888, 308);
        tag_75.angle = -18;
        page13.add(tag_75);

        // tag_76
        const tag_76 = new Tag1(scene, 806, 707);
        tag_76.angle = -21;
        page13.add(tag_76);

        // tag_77
        const tag_77 = new Tag2(scene, 1169, 475);
        tag_77.angle = 18;
        page13.add(tag_77);

        // augustSecret_2
        const augustSecret_2 = scene.add.rectangle(574, 501, 35, 33);
        page13.add(augustSecret_2);

        // augustSecret_9
        const augustSecret_9 = scene.add.rectangle(403, 203, 35, 40);
        page13.add(augustSecret_9);

        // augustSecret_10
        const augustSecret_10 = scene.add.rectangle(1358, 528, 20, 25);
        page13.add(augustSecret_10);

        // augustSecret_11
        const augustSecret_11 = scene.add.rectangle(850, 559, 18, 50);
        augustSecret_11.angle = 11;
        page13.add(augustSecret_11);

        // clearance_tag_12
        const clearance_tag_12 = scene.add.image(444, 787, "clothingcatv2", "clearance_tag");
        page13.add(clearance_tag_12);

        // clearance_tag_13
        const clearance_tag_13 = scene.add.image(1065, 787, "clothingcatv2", "clearance_tag");
        page13.add(clearance_tag_13);

        // page12
        const page12 = scene.add.container(0, -42);
        page12.visible = false;
        this.add(page12);

        // p5_aug
        const p5_aug = scene.add.image(0, 0, "aug24ps", "aug24ps3");
        p5_aug.setOrigin(0, 0);
        page12.add(p5_aug);

        // tag_58
        const tag_58 = new Tag2(scene, 511, 456);
        tag_58.angle = 24.000000000000004;
        page12.add(tag_58);

        // tag_59
        const tag_59 = new Tag1(scene, 175, 630);
        tag_59.angle = -31;
        page12.add(tag_59);

        // tag_71
        const tag_71 = new Tag2(scene, 1197, 676);
        tag_71.angle = 28;
        page12.add(tag_71);

        // tag_72
        const tag_72 = new Tag2(scene, 1212, 448);
        tag_72.angle = 23;
        page12.add(tag_72);

        // tag_73
        const tag_73 = new Tag1(scene, 825, 487);
        tag_73.angle = -20;
        page12.add(tag_73);

        // augustSecret_6
        const augustSecret_6 = scene.add.rectangle(435, 506, 40, 40);
        page12.add(augustSecret_6);

        // augustSecret_7
        const augustSecret_7 = scene.add.rectangle(971, 451, 20, 30);
        page12.add(augustSecret_7);

        // augustSecret_8
        const augustSecret_8 = scene.add.rectangle(818, 261, 60, 30);
        page12.add(augustSecret_8);

        // clearance_tag_2
        const clearance_tag_2 = scene.add.image(444, 787, "clothingcatv2", "clearance_tag");
        page12.add(clearance_tag_2);

        // clearance_tag_3
        const clearance_tag_3 = scene.add.image(1065, 787, "clothingcatv2", "clearance_tag");
        page12.add(clearance_tag_3);

        // page11
        const page11 = scene.add.container(0, -42);
        page11.visible = false;
        this.add(page11);

        // p4_aug
        const p4_aug = scene.add.image(0, 0, "aug24ps", "aug24ps2");
        p4_aug.setOrigin(0, 0);
        page11.add(p4_aug);

        // tag_56
        const tag_56 = new Tag1(scene, 241, 257);
        tag_56.angle = -17;
        page11.add(tag_56);

        // tag_57
        const tag_57 = new Tag2(scene, 461, 474);
        tag_57.angle = 16;
        page11.add(tag_57);

        // tag_64
        const tag_64 = new Tag1(scene, 188, 737);
        tag_64.angle = -39;
        page11.add(tag_64);

        // tag_65
        const tag_65 = new Tag2(scene, 522, 344);
        tag_65.angle = 21;
        page11.add(tag_65);

        // tag_66
        const tag_66 = new Tag1(scene, 1026, 304);
        tag_66.angle = -9;
        page11.add(tag_66);

        // tag_67
        const tag_67 = new Tag1(scene, 806, 263);
        tag_67.angle = -19;
        page11.add(tag_67);

        // tag_68
        const tag_68 = new Tag2(scene, 1227, 423);
        tag_68.angle = 18;
        page11.add(tag_68);

        // tag_69
        const tag_69 = new Tag2(scene, 1251, 572);
        tag_69.angle = -23;
        page11.add(tag_69);

        // tag_70
        const tag_70 = new Tag1(scene, 947, 606);
        tag_70.angle = -19;
        page11.add(tag_70);

        // augustSecret_4
        const augustSecret_4 = scene.add.rectangle(825.6612548828125, 410.6020202636719, 20, 20);
        page11.add(augustSecret_4);

        // augustSecret_5
        const augustSecret_5 = scene.add.rectangle(1236, 329, 25, 25);
        page11.add(augustSecret_5);

        // augustSecret_14
        const augustSecret_14 = scene.add.rectangle(434, 350, 25, 45);
        page11.add(augustSecret_14);

        // clearance_tag_4
        const clearance_tag_4 = scene.add.image(444, 787, "clothingcatv2", "clearance_tag");
        page11.add(clearance_tag_4);

        // clearance_tag_5
        const clearance_tag_5 = scene.add.image(1065, 787, "clothingcatv2", "clearance_tag");
        page11.add(clearance_tag_5);

        // page10
        const page10 = scene.add.container(0, -42);
        page10.visible = false;
        this.add(page10);

        // p10_sept
        const p10_sept = scene.add.image(0, 0, "sept24ps", "sept24ps8");
        p10_sept.setOrigin(0, 0);
        page10.add(p10_sept);

        // tag_6
        const tag_6 = new Tag2(scene, 1212, 424);
        tag_6.angle = 28;
        page10.add(tag_6);

        // tag_7
        const tag_7 = new Tag1(scene, 267, 591);
        tag_7.angle = 29.999999999999996;
        page10.add(tag_7);

        // tag_40
        const tag_40 = new Tag2(scene, 504, 460);
        tag_40.angle = 31;
        page10.add(tag_40);

        // tag_41
        const tag_41 = new Tag2(scene, 528, 220);
        tag_41.angle = -14;
        page10.add(tag_41);

        // tag_42
        const tag_42 = new Tag1(scene, 251, 454);
        tag_42.angle = -20;
        page10.add(tag_42);

        // secret_6
        const secret_6 = scene.add.rectangle(495, 445, 25, 10);
        page10.add(secret_6);

        // secret_5
        const secret_5 = scene.add.rectangle(1048.7950439453125, 416.5531921386719, 25, 25);
        page10.add(secret_5);

        // secret_20
        const secret_20 = scene.add.rectangle(644, 332, 25, 25);
        page10.add(secret_20);

        // page9
        const page9 = scene.add.container(0, -42);
        page9.visible = false;
        this.add(page9);

        // p9_sept
        const p9_sept = scene.add.image(0, 0, "sept24ps", "sept24ps7");
        p9_sept.setOrigin(0, 0);
        page9.add(p9_sept);

        // tag_8
        const tag_8 = new Tag2(scene, 611, 439);
        tag_8.angle = 21;
        page9.add(tag_8);

        // tag_9
        const tag_9 = new Tag1(scene, 159, 424);
        tag_9.angle = -13;
        page9.add(tag_9);

        // tag_36
        const tag_36 = new Tag2(scene, 1187, 684);
        tag_36.angle = -38;
        page9.add(tag_36);

        // tag_37
        const tag_37 = new Tag1(scene, 905, 248);
        tag_37.angle = 11;
        page9.add(tag_37);

        // tag_38
        const tag_38 = new Tag2(scene, 1150, 241);
        tag_38.angle = -19;
        page9.add(tag_38);

        // tag_39
        const tag_39 = new Tag1(scene, 778, 531);
        tag_39.angle = -18;
        page9.add(tag_39);

        // secret_4
        const secret_4 = scene.add.rectangle(874.1590576171875, 306.37701416015625, 25, 25);
        page9.add(secret_4);

        // secret_18
        const secret_18 = scene.add.rectangle(995.8234252929688, 464.46728515625, 25, 25);
        page9.add(secret_18);

        // secret_19
        const secret_19 = scene.add.rectangle(570.24951171875, 619.4507446289062, 25, 25);
        page9.add(secret_19);

        // page8
        const page8 = scene.add.container(0, -42);
        page8.visible = false;
        this.add(page8);

        // p8_sept
        const p8_sept = scene.add.image(0, 0, "sept24ps", "sept24ps6");
        p8_sept.setOrigin(0, 0);
        page8.add(p8_sept);

        // tag_10
        const tag_10 = new Tag2(scene, 432, 223);
        tag_10.angle = 24.000000000000004;
        page8.add(tag_10);

        // tag_11
        const tag_11 = new Tag1(scene, 180, 425);
        tag_11.angle = -14;
        page8.add(tag_11);

        // tag_33
        const tag_33 = new Tag2(scene, 1246, 224);
        tag_33.angle = 21;
        page8.add(tag_33);

        // tag_34
        const tag_34 = new Tag1(scene, 1198, 690);
        tag_34.angle = -34;
        page8.add(tag_34);

        // tag_35
        const tag_35 = new Tag2(scene, 1193, 411);
        tag_35.angle = -37;
        page8.add(tag_35);

        // secret_15
        const secret_15 = scene.add.rectangle(1022, 543, 15, 15);
        page8.add(secret_15);

        // secret_16
        const secret_16 = scene.add.rectangle(515, 426, 25, 25);
        page8.add(secret_16);

        // secret_17
        const secret_17 = scene.add.rectangle(1301, 776, 10, 40);
        page8.add(secret_17);

        // page7
        const page7 = scene.add.container(0, -42);
        page7.visible = false;
        this.add(page7);

        // p7_sept
        const p7_sept = scene.add.image(0, 0, "sept24ps", "sept24ps5");
        p7_sept.setOrigin(0, 0);
        page7.add(p7_sept);

        // tag_4
        const tag_4 = new Tag2(scene, 851, 635);
        tag_4.angle = 35;
        page7.add(tag_4);

        // tag_5
        const tag_5 = new Tag1(scene, 152, 434);
        tag_5.angle = -43;
        page7.add(tag_5);

        // tag_29
        const tag_29 = new Tag2(scene, 532, 759);
        tag_29.angle = 23;
        page7.add(tag_29);

        // tag_30
        const tag_30 = new Tag2(scene, 1162, 736);
        tag_30.angle = 38;
        page7.add(tag_30);

        // tag_31
        const tag_31 = new Tag2(scene, 1187, 431);
        tag_31.angle = -31;
        page7.add(tag_31);

        // tag_32
        const tag_32 = new Tag2(scene, 933, 225);
        tag_32.angle = -28;
        page7.add(tag_32);

        // secret_3
        const secret_3 = scene.add.rectangle(729, 228, 25, 25);
        page7.add(secret_3);

        // secret_13
        const secret_13 = scene.add.rectangle(1353, 575, 25, 25);
        page7.add(secret_13);

        // secret_14
        const secret_14 = scene.add.rectangle(449, 346, 25, 25);
        page7.add(secret_14);

        // page6
        const page6 = scene.add.container(0, -42);
        page6.visible = false;
        this.add(page6);

        // p6_sept
        const p6_sept = scene.add.image(0, 0, "sept24ps", "sept24ps4");
        p6_sept.setOrigin(0, 0);
        page6.add(p6_sept);

        // tag_2
        const tag_2 = new Tag2(scene, 448, 409);
        tag_2.angle = 21;
        page6.add(tag_2);

        // tag_3
        const tag_3 = new Tag1(scene, 173, 569);
        tag_3.angle = -12.000000000000002;
        page6.add(tag_3);

        // tag_22
        const tag_22 = new Tag1(scene, 160, 314);
        tag_22.angle = -38;
        page6.add(tag_22);

        // tag_23
        const tag_23 = new Tag1(scene, 593, 175);
        tag_23.angle = 41;
        page6.add(tag_23);

        // tag_24
        const tag_24 = new Tag2(scene, 763, 241);
        tag_24.angle = -22;
        page6.add(tag_24);

        // tag_25
        const tag_25 = new Tag2(scene, 838, 378);
        tag_25.angle = 16;
        page6.add(tag_25);

        // tag_26
        const tag_26 = new Tag2(scene, 1261, 610);
        tag_26.angle = 26;
        page6.add(tag_26);

        // tag_27
        const tag_27 = new Tag2(scene, 1160, 340);
        tag_27.angle = 29.000000000000004;
        page6.add(tag_27);

        // tag_28
        const tag_28 = new Tag1(scene, 1012, 176);
        tag_28.angle = 27;
        page6.add(tag_28);

        // secret_2
        const secret_2 = scene.add.rectangle(649, 184, 25, 25);
        page6.add(secret_2);

        // secret_11
        const secret_11 = scene.add.rectangle(982, 333, 25, 25);
        page6.add(secret_11);

        // secret_12
        const secret_12 = scene.add.rectangle(1137, 471, 25, 25);
        page6.add(secret_12);

        // page5
        const page5 = scene.add.container(0, -42);
        page5.visible = false;
        this.add(page5);

        // p5_sept
        const p5_sept = scene.add.image(0, 0, "sept24ps", "sept24ps3");
        p5_sept.setOrigin(0, 0);
        page5.add(p5_sept);

        // tag
        const tag = new Tag2(scene, 621, 705);
        tag.angle = 21;
        page5.add(tag);

        // tag_1
        const tag_1 = new Tag1(scene, 173, 468);
        tag_1.angle = -7;
        page5.add(tag_1);

        // tag_17
        const tag_17 = new Tag1(scene, 242, 245);
        tag_17.angle = 21;
        page5.add(tag_17);

        // tag_18
        const tag_18 = new Tag1(scene, 602, 338);
        tag_18.angle = -14;
        page5.add(tag_18);

        // tag_19
        const tag_19 = new Tag2(scene, 1216, 575);
        tag_19.angle = 19;
        page5.add(tag_19);

        // tag_20
        const tag_20 = new Tag2(scene, 1168, 269);
        tag_20.angle = -17;
        page5.add(tag_20);

        // tag_21
        const tag_21 = new Tag1(scene, 792, 507);
        tag_21.angle = 13;
        page5.add(tag_21);

        // secret_1
        const secret_1 = scene.add.rectangle(933, 224, 25, 25);
        page5.add(secret_1);

        // secret_9
        const secret_9 = scene.add.rectangle(809, 804, 10, 10);
        secret_9.angle = -26;
        page5.add(secret_9);

        // secret_10
        const secret_10 = scene.add.rectangle(668.9341430664062, 211.05776977539062, 25, 25);
        page5.add(secret_10);

        // page4
        const page4 = scene.add.container(0, -42);
        page4.visible = false;
        this.add(page4);

        // p4_sept
        const p4_sept = scene.add.image(0, 0, "sept24ps", "sept24ps2");
        p4_sept.setOrigin(0, 0);
        page4.add(p4_sept);

        // tag1
        const tag1 = new Tag1(scene, 253, 517);
        tag1.angle = -20;
        page4.add(tag1);

        // tag2
        const tag2 = new Tag2(scene, 585, 310);
        tag2.angle = 17;
        page4.add(tag2);

        // tag_12
        const tag_12 = new Tag1(scene, 832, 272);
        tag_12.angle = -16;
        page4.add(tag_12);

        // tag_13
        const tag_13 = new Tag1(scene, 866.6043090820312, 529.6227416992188);
        tag_13.angle = -22;
        page4.add(tag_13);

        // tag_14
        const tag_14 = new Tag2(scene, 1213, 722);
        tag_14.angle = 17;
        page4.add(tag_14);

        // tag_15
        const tag_15 = new Tag2(scene, 1134, 228);
        tag_15.angle = -28;
        page4.add(tag_15);

        // tag_16
        const tag_16 = new Tag1(scene, 358, 207);
        tag_16.angle = 14.999999999999998;
        page4.add(tag_16);

        // secret
        const secret = scene.add.rectangle(1054, 434, 25, 25);
        page4.add(secret);

        // secret_7
        const secret_7 = scene.add.rectangle(477.12200927734375, 469.6776428222656, 25, 25);
        page4.add(secret_7);

        // secret_8
        const secret_8 = scene.add.rectangle(923, 697, 40, 45);
        page4.add(secret_8);

        // page3
        const page3 = scene.add.container(0, -42);
        page3.visible = false;
        this.add(page3);

        // tshirtpg
        const tshirtpg = scene.add.image(0, 0, "clothingcatv2", "tshirtpage");
        tshirtpg.setOrigin(0, 0);
        page3.add(tshirtpg);

        // blackShirt
        const blackShirt = new TShirtButton(scene, 245, 285);
        blackShirt.tintFill = false;
        blackShirt.tintTopLeft = 3289650;
        blackShirt.tintTopRight = 3289650;
        blackShirt.tintBottomLeft = 3289650;
        blackShirt.tintBottomRight = 3289650;
        page3.add(blackShirt);

        // blueShirt
        const blueShirt = new TShirtButton(scene, 345, 285);
        blueShirt.tintFill = false;
        blueShirt.tintTopLeft = 12901;
        blueShirt.tintTopRight = 12901;
        blueShirt.tintBottomLeft = 12901;
        blueShirt.tintBottomRight = 12901;
        page3.add(blueShirt);

        // redShirt
        const redShirt = new TShirtButton(scene, 445, 285);
        redShirt.tintFill = false;
        redShirt.tintTopLeft = 13369344;
        redShirt.tintTopRight = 13369344;
        redShirt.tintBottomLeft = 13369344;
        redShirt.tintBottomRight = 13369344;
        page3.add(redShirt);

        // greenShirt
        const greenShirt = new TShirtButton(scene, 545, 285);
        greenShirt.tintFill = false;
        greenShirt.tintTopLeft = 39168;
        greenShirt.tintTopRight = 39168;
        greenShirt.tintBottomLeft = 39168;
        greenShirt.tintBottomRight = 39168;
        page3.add(greenShirt);

        // yellowShirt
        const yellowShirt = new TShirtButton(scene, 545, 385);
        yellowShirt.tintFill = false;
        yellowShirt.tintTopLeft = 16763904;
        yellowShirt.tintTopRight = 16763904;
        yellowShirt.tintBottomLeft = 16763904;
        yellowShirt.tintBottomRight = 16763904;
        page3.add(yellowShirt);

        // peachShirt
        const peachShirt = new TShirtButton(scene, 445, 385);
        peachShirt.tintFill = false;
        peachShirt.tintTopLeft = 16737637;
        peachShirt.tintTopRight = 16737637;
        peachShirt.tintBottomLeft = 16737637;
        peachShirt.tintBottomRight = 16737637;
        page3.add(peachShirt);

        // brownShirt
        const brownShirt = new TShirtButton(scene, 345, 385);
        brownShirt.tintFill = false;
        brownShirt.tintTopLeft = 10052864;
        brownShirt.tintTopRight = 10052864;
        brownShirt.tintBottomLeft = 10052864;
        brownShirt.tintBottomRight = 10052864;
        page3.add(brownShirt);

        // orangeShirt
        const orangeShirt = new TShirtButton(scene, 245, 385);
        orangeShirt.tintFill = false;
        orangeShirt.tintTopLeft = 16737536;
        orangeShirt.tintTopRight = 16737536;
        orangeShirt.tintBottomLeft = 16737536;
        orangeShirt.tintBottomRight = 16737536;
        page3.add(orangeShirt);

        // lightblueShirt
        const lightblueShirt = new TShirtButton(scene, 245, 485);
        lightblueShirt.tintFill = false;
        lightblueShirt.tintTopLeft = 39372;
        lightblueShirt.tintTopRight = 39372;
        lightblueShirt.tintBottomLeft = 39372;
        lightblueShirt.tintBottomRight = 39372;
        page3.add(lightblueShirt);

        // purpleShirt
        const purpleShirt = new TShirtButton(scene, 245, 585);
        purpleShirt.tintFill = false;
        purpleShirt.tintTopLeft = 6619289;
        purpleShirt.tintTopRight = 6619289;
        purpleShirt.tintBottomLeft = 6619289;
        purpleShirt.tintBottomRight = 6619289;
        page3.add(purpleShirt);

        // limeShirt
        const limeShirt = new TShirtButton(scene, 345, 585);
        limeShirt.tintFill = false;
        limeShirt.tintTopLeft = 7536384;
        limeShirt.tintTopRight = 7536384;
        limeShirt.tintBottomLeft = 7536384;
        limeShirt.tintBottomRight = 7536384;
        page3.add(limeShirt);

        // aquaShirt
        const aquaShirt = new TShirtButton(scene, 445, 585);
        aquaShirt.tintFill = false;
        aquaShirt.tintTopLeft = 4718591;
        aquaShirt.tintTopRight = 4718591;
        aquaShirt.tintBottomLeft = 4718591;
        aquaShirt.tintBottomRight = 4718591;
        page3.add(aquaShirt);

        // darkGreenShirt
        const darkGreenShirt = new TShirtButton(scene, 545, 485);
        darkGreenShirt.tintFill = false;
        darkGreenShirt.tintTopLeft = 25856;
        darkGreenShirt.tintTopRight = 25856;
        darkGreenShirt.tintBottomLeft = 25856;
        darkGreenShirt.tintBottomRight = 25856;
        page3.add(darkGreenShirt);

        // pinkShirt
        const pinkShirt = new TShirtButton(scene, 445, 485);
        pinkShirt.tintFill = false;
        pinkShirt.tintTopLeft = 16724633;
        pinkShirt.tintTopRight = 16724633;
        pinkShirt.tintBottomLeft = 16724633;
        pinkShirt.tintBottomRight = 16724633;
        page3.add(pinkShirt);

        // whiteShirt
        const whiteShirt = new TShirtButton(scene, 345, 485);
        whiteShirt.tintFill = false;
        whiteShirt.tintTopLeft = 15790296;
        whiteShirt.tintTopRight = 15790296;
        whiteShirt.tintBottomLeft = 15790296;
        whiteShirt.tintBottomRight = 15790296;
        page3.add(whiteShirt);

        // maroonShirt
        const maroonShirt = new TShirtButton(scene, 545, 585);
        maroonShirt.tintFill = false;
        maroonShirt.tintTopLeft = 8397131;
        maroonShirt.tintTopRight = 8397131;
        maroonShirt.tintBottomLeft = 8397131;
        maroonShirt.tintBottomRight = 8397131;
        page3.add(maroonShirt);

        // lavenderShirt
        const lavenderShirt = new TShirtButton(scene, 245, 685);
        lavenderShirt.tintFill = false;
        lavenderShirt.tintTopLeft = 11444168;
        lavenderShirt.tintTopRight = 11444168;
        lavenderShirt.tintBottomLeft = 11444168;
        lavenderShirt.tintBottomRight = 11444168;
        page3.add(lavenderShirt);

        // valentinePinkShirt
        const valentinePinkShirt = new TShirtButton(scene, 345, 685);
        valentinePinkShirt.tintFill = false;
        valentinePinkShirt.tintTopLeft = 16225971;
        valentinePinkShirt.tintTopRight = 16225971;
        valentinePinkShirt.tintBottomLeft = 16225971;
        valentinePinkShirt.tintBottomRight = 16225971;
        page3.add(valentinePinkShirt);

        // oldBlueShirt
        const oldBlueShirt = new TShirtButton(scene, 445, 685);
        oldBlueShirt.tintFill = false;
        oldBlueShirt.tintTopLeft = 3033002;
        oldBlueShirt.tintTopRight = 3033002;
        oldBlueShirt.tintBottomLeft = 3033002;
        oldBlueShirt.tintBottomRight = 3033002;
        page3.add(oldBlueShirt);

        // tshirt_body_tint
        const tshirt_body_tint = scene.add.image(1027, 494, "clothingcatv2", "tshirt_body_tint");
        tshirt_body_tint.tintTopLeft = 13158;
        tshirt_body_tint.tintTopRight = 13158;
        tshirt_body_tint.tintBottomLeft = 13158;
        tshirt_body_tint.tintBottomRight = 13158;
        page3.add(tshirt_body_tint);

        // tshirt_preview_tint
        const tshirt_preview_tint = scene.add.image(1251, 248, "clothingcatv2", "tshirt_preview_tint");
        tshirt_preview_tint.tintTopLeft = 13158;
        tshirt_preview_tint.tintTopRight = 13158;
        tshirt_preview_tint.tintBottomLeft = 13158;
        tshirt_preview_tint.tintBottomRight = 13158;
        page3.add(tshirt_preview_tint);

        // likeIgloo
        const likeIgloo = scene.add.rectangle(1257, 346, 40, 40);
        page3.add(likeIgloo);

        // clearance_tag_6
        const clearance_tag_6 = scene.add.image(1065, 787, "clothingcatv2", "clearance_tag");
        page3.add(clearance_tag_6);

        // page2
        const page2 = scene.add.container(0, -42);
        page2.visible = false;
        this.add(page2);

        // colorpg
        const colorpg = scene.add.image(0, 0, "clothingcatv2", "colorpage");
        colorpg.setOrigin(0, 0);
        page2.add(colorpg);

        // aqua
        const aqua = new ColorButton(scene, 601, 457);
        aqua.scaleX = 1;
        aqua.scaleY = 1;
        aqua.tintTopLeft = 4718591;
        aqua.tintTopRight = 4718591;
        aqua.tintBottomLeft = 4718591;
        aqua.tintBottomRight = 4718591;
        page2.add(aqua);

        // lime
        const lime = new ColorButton(scene, 499, 457);
        lime.scaleX = 1;
        lime.scaleY = 1;
        lime.tintFill = false;
        lime.tintTopLeft = 7536384;
        lime.tintTopRight = 7536384;
        lime.tintBottomLeft = 7536384;
        lime.tintBottomRight = 7536384;
        page2.add(lime);

        // purple
        const purple = new ColorButton(scene, 397, 457);
        purple.scaleX = 1;
        purple.scaleY = 1;
        purple.tintFill = false;
        purple.tintTopLeft = 6619289;
        purple.tintTopRight = 6619289;
        purple.tintBottomLeft = 6619289;
        purple.tintBottomRight = 6619289;
        page2.add(purple);

        // darkGreen
        const darkGreen = new ColorButton(scene, 295, 457);
        darkGreen.scaleX = 1;
        darkGreen.scaleY = 1;
        darkGreen.tintFill = false;
        darkGreen.tintTopLeft = 25856;
        darkGreen.tintTopRight = 25856;
        darkGreen.tintBottomLeft = 25856;
        darkGreen.tintBottomRight = 25856;
        page2.add(darkGreen);

        // pink
        const pink = new ColorButton(scene, 191, 457);
        pink.scaleX = 1;
        pink.scaleY = 1;
        pink.tintFill = false;
        pink.tintTopLeft = 16724633;
        pink.tintTopRight = 16724633;
        pink.tintBottomLeft = 16724633;
        pink.tintBottomRight = 16724633;
        page2.add(pink);

        // lightblue
        const lightblue = new ColorButton(scene, 499, 355);
        lightblue.scaleX = 1;
        lightblue.scaleY = 1;
        lightblue.tintFill = false;
        lightblue.tintTopLeft = 39372;
        lightblue.tintTopRight = 39372;
        lightblue.tintBottomLeft = 39372;
        lightblue.tintBottomRight = 39372;
        page2.add(lightblue);

        // yellow
        const yellow = new ColorButton(scene, 397, 355);
        yellow.scaleX = 1;
        yellow.scaleY = 1;
        yellow.tintFill = false;
        yellow.tintTopLeft = 16763904;
        yellow.tintTopRight = 16763904;
        yellow.tintBottomLeft = 16763904;
        yellow.tintBottomRight = 16763904;
        page2.add(yellow);

        // peach
        const peach = new ColorButton(scene, 295, 355);
        peach.scaleX = 1;
        peach.scaleY = 1;
        peach.tintFill = false;
        peach.tintTopLeft = 16737637;
        peach.tintTopRight = 16737637;
        peach.tintBottomLeft = 16737637;
        peach.tintBottomRight = 16737637;
        page2.add(peach);

        // brown
        const brown = new ColorButton(scene, 191, 355);
        brown.scaleX = 1;
        brown.scaleY = 1;
        brown.tintFill = false;
        brown.tintTopLeft = 10052864;
        brown.tintTopRight = 10052864;
        brown.tintBottomLeft = 10052864;
        brown.tintBottomRight = 10052864;
        page2.add(brown);

        // orange
        const orange = new ColorButton(scene, 601, 253);
        orange.scaleX = 1;
        orange.scaleY = 1;
        orange.tintFill = false;
        orange.tintTopLeft = 16737536;
        orange.tintTopRight = 16737536;
        orange.tintBottomLeft = 16737536;
        orange.tintBottomRight = 16737536;
        page2.add(orange);

        // green
        const green = new ColorButton(scene, 499, 253);
        green.scaleX = 1;
        green.scaleY = 1;
        green.tintFill = false;
        green.tintTopLeft = 39168;
        green.tintTopRight = 39168;
        green.tintBottomLeft = 39168;
        green.tintBottomRight = 39168;
        page2.add(green);

        // red
        const red = new ColorButton(scene, 397, 253);
        red.scaleX = 1;
        red.scaleY = 1;
        red.tintFill = false;
        red.tintTopLeft = 13369344;
        red.tintTopRight = 13369344;
        red.tintBottomLeft = 13369344;
        red.tintBottomRight = 13369344;
        page2.add(red);

        // blue
        const blue = new ColorButton(scene, 295, 253);
        blue.scaleX = 1;
        blue.scaleY = 1;
        blue.tintFill = false;
        blue.tintTopLeft = 12901;
        blue.tintTopRight = 12901;
        blue.tintBottomLeft = 12901;
        blue.tintBottomRight = 12901;
        page2.add(blue);

        // black
        const black = new ColorButton(scene, 191, 253);
        black.scaleX = 1;
        black.scaleY = 1;
        black.tintFill = false;
        black.tintTopLeft = 3289650;
        black.tintTopRight = 3289650;
        black.tintBottomLeft = 3289650;
        black.tintBottomRight = 3289650;
        page2.add(black);

        // white
        const white = new ColorButton(scene, 601, 355);
        white.scaleX = 1;
        white.scaleY = 1;
        white.tintTopLeft = 15790296;
        white.tintTopRight = 15790296;
        white.tintBottomLeft = 15790296;
        white.tintBottomRight = 15790296;
        page2.add(white);

        // maroon
        const maroon = new ColorButton(scene, 191, 559);
        maroon.scaleX = 1;
        maroon.scaleY = 1;
        maroon.angle = 0;
        maroon.setOrigin(0, 0);
        maroon.tintFill = false;
        maroon.tintTopLeft = 8397131;
        maroon.tintTopRight = 8397131;
        maroon.tintBottomLeft = 8397131;
        maroon.tintBottomRight = 8397131;
        page2.add(maroon);

        // lavender
        const lavender = new ColorButton(scene, 295, 559);
        lavender.scaleX = 1;
        lavender.scaleY = 1;
        lavender.tintFill = false;
        lavender.tintTopLeft = 11444168;
        lavender.tintTopRight = 11444168;
        lavender.tintBottomLeft = 11444168;
        lavender.tintBottomRight = 11444168;
        page2.add(lavender);

        // blossom
        const blossom = new ColorButton(scene, 397, 559);
        blossom.scaleX = 1;
        blossom.scaleY = 1;
        blossom.angle = 0;
        blossom.setOrigin(0, 0);
        blossom.tintFill = false;
        blossom.tintTopLeft = 16241130;
        blossom.tintTopRight = 16241130;
        blossom.tintBottomLeft = 16241130;
        blossom.tintBottomRight = 16241130;
        page2.add(blossom);

        // mocha
        const mocha = new ColorButton(scene, 499, 559);
        mocha.scaleX = 1;
        mocha.scaleY = 1;
        mocha.tintFill = false;
        mocha.tintTopLeft = 14990488;
        mocha.tintTopRight = 14990488;
        mocha.tintBottomLeft = 14990488;
        mocha.tintBottomRight = 14990488;
        page2.add(mocha);

        // candyapple
        const candyapple = new ColorButton(scene, 601, 559);
        candyapple.scaleX = 1;
        candyapple.scaleY = 1;
        candyapple.visible = true;
        candyapple.tintFill = false;
        candyapple.tintTopLeft = 16728895;
        candyapple.tintTopRight = 16728895;
        candyapple.tintBottomLeft = 16728895;
        candyapple.tintBottomRight = 16728895;
        page2.add(candyapple);

        // glacial
        const glacial = new ColorButton(scene, 191, 661);
        glacial.scaleX = 1;
        glacial.scaleY = 1;
        glacial.visible = true;
        glacial.tintFill = false;
        glacial.tintTopLeft = 12051179;
        glacial.tintTopRight = 12051179;
        glacial.tintBottomLeft = 12051179;
        glacial.tintBottomRight = 12051179;
        page2.add(glacial);

        // paint_body_1
        const paint_body_1 = scene.add.image(1069, 442, "clothingcatv2", "paint_body");
        paint_body_1.scaleX = 0.9;
        paint_body_1.scaleY = 0.9;
        page2.add(paint_body_1);

        // paint_tint
        const paint_tint = scene.add.image(1069, 442, "clothingcatv2", "paint_tint");
        paint_tint.scaleX = 0.9;
        paint_tint.scaleY = 0.9;
        paint_tint.tintTopLeft = 13158;
        paint_tint.tintTopRight = 13158;
        paint_tint.tintBottomLeft = 13158;
        paint_tint.tintBottomRight = 13158;
        page2.add(paint_tint);

        // page1
        const page1 = scene.add.container(0, -42);
        page1.visible = false;
        this.add(page1);

        // p_front
        const p_front = scene.add.image(0, 0, "sept24ps", "sept24ps1");
        p_front.setOrigin(0, 0);
        page1.add(p_front);

        // pageFront
        const pageFront = scene.add.image(497, 84, "commonbook", "cc-page-front");
        pageFront.setOrigin(0, 0);
        page1.add(pageFront);

        // closeRight_1
        const closeRight_1 = scene.add.image(952, 87, "commonbook", "cc-close");
        closeRight_1.setOrigin(0, 0);
        page1.add(closeRight_1);

        // buttons
        const buttons = scene.add.container(190, 41);
        buttons.visible = false;
        this.add(buttons);

        // closeRight
        const closeRight = scene.add.image(1059, 0, "commonbook", "cc-close");
        closeRight.setOrigin(0, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = scene.add.image(1056, 545, "commonbook", "cc-page-right");
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = scene.add.image(-58, 545, "commonbook", "cc-page-left");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // coins
        const coins = scene.add.text(1160, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20];

        // block (components)
        new Interactive(block);

        // closeLeft (components)
        const closeLeftButton = new Button(closeLeft);
        closeLeftButton.spriteName = "cc-close";
        closeLeftButton.callback = () => this.close();

        // pageLeft_1 (components)
        const pageLeft_1Button = new Button(pageLeft_1);
        pageLeft_1Button.spriteName = "cc-page-left";
        pageLeft_1Button.callback = () => this.prevPage();
        pageLeft_1Button.pixelPerfect = true;

        // scotland (prefab fields)
        scotland.item = 380503;

        // paraguay (prefab fields)
        paraguay.item = 380504;

        // trinidad (prefab fields)
        trinidad.item = 380505;

        // chad (prefab fields)
        chad.item = 380506;

        // elsalvador (prefab fields)
        elsalvador.item = 380507;

        // panama (prefab fields)
        panama.item = 380508;

        // england (prefab fields)
        england.item = 380509;

        // nicaragua (prefab fields)
        nicaragua.item = 380510;

        // argentina (prefab fields)
        argentina.item = 533;

        // australia (prefab fields)
        australia.item = 502;

        // austria (prefab fields)
        austria.item = 7096;

        // belgium (prefab fields)
        belgium.item = 504;

        // belize (prefab fields)
        belize.item = 529;

        // brazil (prefab fields)
        brazil.item = 505;

        // canada (prefab fields)
        canada.item = 500;

        // chile (prefab fields)
        chile.item = 535;

        // china (prefab fields)
        china.item = 506;

        // colombia (prefab fields)
        colombia.item = 536;

        // costa (prefab fields)
        costa.item = 540;

        // croatia (prefab fields)
        croatia.item = 7183;

        // czech (prefab fields)
        czech.item = 7184;

        // denmark (prefab fields)
        denmark.item = 507;

        // dominican (prefab fields)
        dominican.item = 546;

        // ecuador (prefab fields)
        ecuador.item = 548;

        // egypt (prefab fields)
        egypt.item = 530;

        // finland (prefab fields)
        finland.item = 508;

        // france (prefab fields)
        france.item = 509;

        // germany (prefab fields)
        germany.item = 510;

        // gibraltar (prefab fields)
        gibraltar.item = 7188;

        // great_britain (prefab fields)
        great_britain.item = 503;

        // greece (prefab fields)
        greece.item = 7182;

        // guatemala (prefab fields)
        guatemala.item = 541;

        // haiti (prefab fields)
        haiti.item = 545;

        // hungary (prefab fields)
        hungary.item = 531;

        // india (prefab fields)
        india.item = 527;

        // ireland (prefab fields)
        ireland.item = 524;

        // israel (prefab fields)
        israel.item = 511;

        // italy (prefab fields)
        italy.item = 528;

        // jamaica (prefab fields)
        jamaica.item = 534;

        // japan (prefab fields)
        japan.item = 512;

        // korea (prefab fields)
        korea.item = 513;

        // latvia (prefab fields)
        latvia.item = 7186;

        // liechtenstein (prefab fields)
        liechtenstein.item = 7095;

        // malaysia (prefab fields)
        malaysia.item = 543;

        // malta (prefab fields)
        malta.item = 7189;

        // mexico (prefab fields)
        mexico.item = 522;

        // netherlands (prefab fields)
        netherlands.item = 514;

        // norway (prefab fields)
        norway.item = 515;

        // new_zealand (prefab fields)
        new_zealand.item = 523;

        // pakistan (prefab fields)
        pakistan.item = 7185;

        // peru (prefab fields)
        peru.item = 538;

        // philippines (prefab fields)
        philippines.item = 544;

        // poland (prefab fields)
        poland.item = 516;

        // portugal (prefab fields)
        portugal.item = 525;

        // puerto_rico (prefab fields)
        puerto_rico.item = 537;

        // romania (prefab fields)
        romania.item = 7148;

        // russia (prefab fields)
        russia.item = 517;

        // singapore (prefab fields)
        singapore.item = 542;

        // slovenia (prefab fields)
        slovenia.item = 7187;

        // south_africa (prefab fields)
        south_africa.item = 526;

        // spain (prefab fields)
        spain.item = 518;

        // sweden (prefab fields)
        sweden.item = 519;

        // switzerland (prefab fields)
        switzerland.item = 520;

        // turkey (prefab fields)
        turkey.item = 521;

        // usa (prefab fields)
        usa.item = 501;

        // uruguay (prefab fields)
        uruguay.item = 547;

        // venezuela (prefab fields)
        venezuela.item = 539;

        // ukraine (prefab fields)
        ukraine.item = 380416;

        // tunisia (prefab fields)
        tunisia.item = 380415;

        // syria (prefab fields)
        syria.item = 380414;

        // saudi (prefab fields)
        saudi.item = 380413;

        // palestine (prefab fields)
        palestine.item = 380412;

        // cuba (prefab fields)
        cuba.item = 380417;

        // estonia (prefab fields)
        estonia.item = 380418;

        // honduras (prefab fields)
        honduras.item = 380419;

        // albania (prefab fields)
        albania.item = 380472;

        // wales (prefab fields)
        wales.item = 380478;

        // sudan (prefab fields)
        sudan.item = 380479;

        // morroco (prefab fields)
        morroco.item = 380477;

        // lebanon (prefab fields)
        lebanon.item = 380476;

        // serbia (prefab fields)
        serbia.item = 380474;

        // slovakia (prefab fields)
        slovakia.item = 380475;

        // georgia (prefab fields)
        georgia.item = 380473;

        // photoButtonC1 (prefab fields)
        photoButtonC1.pageNumber = 3;
        photoButtonC1.slotId = 1;

        // photoButtonD1 (prefab fields)
        photoButtonD1.pageNumber = 4;
        photoButtonD1.slotId = 1;

        // photoButtonD2 (prefab fields)
        photoButtonD2.pageNumber = 4;
        photoButtonD2.slotId = 2;

        // photoButtonD3 (prefab fields)
        photoButtonD3.pageNumber = 4;
        photoButtonD3.slotId = 3;

        // photoButtonD4 (prefab fields)
        photoButtonD4.pageNumber = 4;
        photoButtonD4.slotId = 4;

        // photoButtonC4 (prefab fields)
        photoButtonC4.pageNumber = 3;
        photoButtonC4.slotId = 4;

        // photoButtonC3 (prefab fields)
        photoButtonC3.pageNumber = 3;
        photoButtonC3.slotId = 3;

        // photoButtonC2 (prefab fields)
        photoButtonC2.pageNumber = 3;
        photoButtonC2.slotId = 2;

        // photoButtonA1 (prefab fields)
        photoButtonA1.pageNumber = 1;
        photoButtonA1.slotId = 1;

        // photoButtonA2 (prefab fields)
        photoButtonA2.slotId = 2;

        // photoButtonA3 (prefab fields)
        photoButtonA3.slotId = 3;

        // photoButtonA4 (prefab fields)
        photoButtonA4.slotId = 4;

        // photoButtonB4 (prefab fields)
        photoButtonB4.pageNumber = 2;
        photoButtonB4.slotId = 4;

        // photoButtonB3 (prefab fields)
        photoButtonB3.pageNumber = 2;
        photoButtonB3.slotId = 3;

        // photoButtonB2 (prefab fields)
        photoButtonB2.pageNumber = 2;
        photoButtonB2.slotId = 2;

        // photoButtonB1 (prefab fields)
        photoButtonB1.pageNumber = 2;
        photoButtonB1.slotId = 1;

        // secret_town (components)
        const secret_townSimpleButton = new SimpleButton(secret_town);
        secret_townSimpleButton.callback = () => this.interface.prompt.showSecret(380111);;

        // tag_52 (prefab fields)
        tag_52.item = 380575;

        // tag_53 (prefab fields)
        tag_53.item = 4717;

        // tag_43 (prefab fields)
        tag_43.item = 380576;

        // tag_44 (prefab fields)
        tag_44.item = 380577;

        // tag_45 (prefab fields)
        tag_45.item = 1480;

        // vikinghelmet (components)
        const vikinghelmetSimpleButton = new SimpleButton(vikinghelmet);
        vikinghelmetSimpleButton.callback = () => {this.openVikingSecret()};

        // tag_62 (prefab fields)
        tag_62.item = 5176;

        // tag_63 (prefab fields)
        tag_63.item = 4559;

        // tag_78 (prefab fields)
        tag_78.item = 6050;

        // tag_79 (prefab fields)
        tag_79.item = 4716;

        // tag_80 (prefab fields)
        tag_80.item = 6113;

        // tag_81 (prefab fields)
        tag_81.item = 1387;

        // tag_82 (prefab fields)
        tag_82.item = 3118;

        // augustSecret_3 (components)
        const augustSecret_3SimpleButton = new SimpleButton(augustSecret_3);
        augustSecret_3SimpleButton.callback = () => this.showSecret(1009);

        // augustSecret_12 (components)
        const augustSecret_12SimpleButton = new SimpleButton(augustSecret_12);
        augustSecret_12SimpleButton.callback = () => this.showSecret(306);

        // augustSecret_13 (components)
        const augustSecret_13SimpleButton = new SimpleButton(augustSecret_13);
        augustSecret_13SimpleButton.callback = () => this.showSecret(5057);

        // tag_60 (prefab fields)
        tag_60.item = 5045;

        // tag_61 (prefab fields)
        tag_61.item = 1085;

        // tag_74 (prefab fields)
        tag_74.item = 4118;

        // tag_75 (prefab fields)
        tag_75.item = 1084;

        // tag_76 (prefab fields)
        tag_76.item = 6024;

        // tag_77 (prefab fields)
        tag_77.item = 4117;

        // augustSecret_2 (components)
        const augustSecret_2SimpleButton = new SimpleButton(augustSecret_2);
        augustSecret_2SimpleButton.callback = () => this.showSecret(312);

        // augustSecret_9 (components)
        const augustSecret_9SimpleButton = new SimpleButton(augustSecret_9);
        augustSecret_9SimpleButton.callback = () => this.showSecret(3031);

        // augustSecret_10 (components)
        const augustSecret_10SimpleButton = new SimpleButton(augustSecret_10);
        augustSecret_10SimpleButton.callback = () => this.showSecret(314);

        // augustSecret_11 (components)
        const augustSecret_11SimpleButton = new SimpleButton(augustSecret_11);
        augustSecret_11SimpleButton.callback = () => this.showSecret(2164);

        // tag_58 (prefab fields)
        tag_58.item = 4254;

        // tag_59 (prefab fields)
        tag_59.item = 3052;

        // tag_71 (prefab fields)
        tag_71.item = 6047;

        // tag_72 (prefab fields)
        tag_72.item = 313;

        // tag_73 (prefab fields)
        tag_73.item = 4256;

        // augustSecret_6 (components)
        const augustSecret_6SimpleButton = new SimpleButton(augustSecret_6);
        augustSecret_6SimpleButton.callback = () => this.showSecret(4255);

        // augustSecret_7 (components)
        const augustSecret_7SimpleButton = new SimpleButton(augustSecret_7);
        augustSecret_7SimpleButton.callback = () => this.showSecret(3054);

        // augustSecret_8 (components)
        const augustSecret_8SimpleButton = new SimpleButton(augustSecret_8);
        augustSecret_8SimpleButton.callback = () => this.showSecret(5043);

        // tag_56 (prefab fields)
        tag_56.item = 1058;

        // tag_57 (prefab fields)
        tag_57.item = 3022;

        // tag_64 (prefab fields)
        tag_64.item = 6021;

        // tag_65 (prefab fields)
        tag_65.item = 5032;

        // tag_66 (prefab fields)
        tag_66.item = 446;

        // tag_67 (prefab fields)
        tag_67.item = 346;

        // tag_68 (prefab fields)
        tag_68.item = 113;

        // tag_69 (prefab fields)
        tag_69.item = 307;

        // tag_70 (prefab fields)
        tag_70.item = 265;

        // augustSecret_4 (components)
        const augustSecret_4SimpleButton = new SimpleButton(augustSecret_4);
        augustSecret_4SimpleButton.callback = () => this.showSecret(3161);

        // augustSecret_5 (components)
        const augustSecret_5SimpleButton = new SimpleButton(augustSecret_5);
        augustSecret_5SimpleButton.callback = () => this.showSecret(4004);

        // augustSecret_14 (components)
        const augustSecret_14SimpleButton = new SimpleButton(augustSecret_14);
        augustSecret_14SimpleButton.callback = () => this.showSecret(771);

        // tag_6 (prefab fields)
        tag_6.item = 4738;

        // tag_7 (prefab fields)
        tag_7.item = 6038;

        // tag_40 (prefab fields)
        tag_40.item = 322;

        // tag_41 (prefab fields)
        tag_41.item = 1038;

        // tag_42 (prefab fields)
        tag_42.item = 225;

        // secret_6 (components)
        const secret_6SimpleButton = new SimpleButton(secret_6);
        secret_6SimpleButton.callback = () => this.showSecret(323);

        // secret_5 (components)
        const secret_5SimpleButton = new SimpleButton(secret_5);
        secret_5SimpleButton.callback = () => this.showSecret(380027);

        // secret_20 (components)
        const secret_20SimpleButton = new SimpleButton(secret_20);
        secret_20SimpleButton.callback = () => this.showSecret(380026);

        // tag_8 (prefab fields)
        tag_8.item = 4202;

        // tag_9 (prefab fields)
        tag_9.item = 4203;

        // tag_36 (prefab fields)
        tag_36.item = 6051;

        // tag_37 (prefab fields)
        tag_37.item = 2185;

        // tag_38 (prefab fields)
        tag_38.item = 1181;

        // tag_39 (prefab fields)
        tag_39.item = 24379;

        // secret_4 (components)
        const secret_4SimpleButton = new SimpleButton(secret_4);
        secret_4SimpleButton.callback = () => this.showSecret(3001);

        // secret_18 (components)
        const secret_18SimpleButton = new SimpleButton(secret_18);
        secret_18SimpleButton.callback = () => this.showSecret(3145);

        // secret_19 (components)
        const secret_19SimpleButton = new SimpleButton(secret_19);
        secret_19SimpleButton.callback = () => this.showSecret(4124);

        // tag_10 (prefab fields)
        tag_10.item = 380030;

        // tag_11 (prefab fields)
        tag_11.item = 4413;

        // tag_33 (prefab fields)
        tag_33.item = 1083;

        // tag_34 (prefab fields)
        tag_34.item = 334;

        // tag_35 (prefab fields)
        tag_35.item = 4119;

        // secret_15 (components)
        const secret_15SimpleButton = new SimpleButton(secret_15);
        secret_15SimpleButton.callback = () => this.showSecret(189);

        // secret_16 (components)
        const secret_16SimpleButton = new SimpleButton(secret_16);
        secret_16SimpleButton.callback = () => this.showSecret(187);

        // secret_17 (components)
        const secret_17SimpleButton = new SimpleButton(secret_17);
        secret_17SimpleButton.callback = () => this.showSecret(6032);

        // tag_4 (prefab fields)
        tag_4.item = 6083;

        // tag_5 (prefab fields)
        tag_5.item = 4420;

        // tag_29 (prefab fields)
        tag_29.item = 6010;

        // tag_30 (prefab fields)
        tag_30.item = 6085;

        // tag_31 (prefab fields)
        tag_31.item = 4429;

        // tag_32 (prefab fields)
        tag_32.item = 4419;

        // secret_3 (components)
        const secret_3SimpleButton = new SimpleButton(secret_3);
        secret_3SimpleButton.callback = () => this.showSecret(1341);

        // secret_13 (components)
        const secret_13SimpleButton = new SimpleButton(secret_13);
        secret_13SimpleButton.callback = () => this.showSecret(1004);

        // secret_14 (components)
        const secret_14SimpleButton = new SimpleButton(secret_14);
        secret_14SimpleButton.callback = () => this.showSecret(4105);

        // tag_2 (prefab fields)
        tag_2.item = 2012;

        // tag_3 (prefab fields)
        tag_3.item = 4421;

        // tag_22 (prefab fields)
        tag_22.item = 1302;

        // tag_23 (prefab fields)
        tag_23.item = 2168;

        // tag_24 (prefab fields)
        tag_24.item = 1074;

        // tag_25 (prefab fields)
        tag_25.item = 4715;

        // tag_26 (prefab fields)
        tag_26.item = 4415;

        // tag_27 (prefab fields)
        tag_27.item = 2001;

        // tag_28 (prefab fields)
        tag_28.item = 1139;

        // secret_2 (components)
        const secret_2SimpleButton = new SimpleButton(secret_2);
        secret_2SimpleButton.callback = () => this.showSecret(380);

        // secret_11 (components)
        const secret_11SimpleButton = new SimpleButton(secret_11);
        secret_11SimpleButton.callback = () => this.showSecret(380229);

        // secret_12 (components)
        const secret_12SimpleButton = new SimpleButton(secret_12);
        secret_12SimpleButton.callback = () => this.showSecret(6297);

        // tag (prefab fields)
        tag.item = 358;

        // tag_1 (prefab fields)
        tag_1.item = 305;

        // tag_17 (prefab fields)
        tag_17.item = 423;

        // tag_18 (prefab fields)
        tag_18.item = 5080;

        // tag_19 (prefab fields)
        tag_19.item = 4417;

        // tag_20 (prefab fields)
        tag_20.item = 1298;

        // tag_21 (prefab fields)
        tag_21.item = 5110;

        // secret_1 (components)
        const secret_1SimpleButton = new SimpleButton(secret_1);
        secret_1SimpleButton.callback = () => this.showSecret(5567);

        // secret_9 (components)
        const secret_9SimpleButton = new SimpleButton(secret_9);
        secret_9SimpleButton.callback = () => this.showSecret(24352);

        // secret_10 (components)
        const secret_10SimpleButton = new SimpleButton(secret_10);
        secret_10SimpleButton.callback = () => this.showSecret(5572);

        // tag1 (prefab fields)
        tag1.item = 4422;

        // tag2 (prefab fields)
        tag2.item = 2039;

        // tag_12 (prefab fields)
        tag_12.item = 5418;

        // tag_13 (prefab fields)
        tag_13.item = 24041;

        // tag_14 (prefab fields)
        tag_14.item = 6187;

        // tag_15 (prefab fields)
        tag_15.item = 1777;

        // tag_16 (prefab fields)
        tag_16.item = 1299;

        // secret (components)
        const secretSimpleButton = new SimpleButton(secret);
        secretSimpleButton.callback = () => this.showSecret(1110);

        // secret_7 (components)
        const secret_7SimpleButton = new SimpleButton(secret_7);
        secret_7SimpleButton.callback = () => this.showSecret(1020);

        // secret_8 (components)
        const secret_8SimpleButton = new SimpleButton(secret_8);
        secret_8SimpleButton.callback = () => this.showSecret(1028);

        // blackShirt (prefab fields)
        blackShirt.item = 380052;

        // blackShirt (components)
        const blackShirtButton = Button.getComponent(blackShirt);
        blackShirtButton.hoverCallback = () => this.tintShirt(4);

        // blueShirt (prefab fields)
        blueShirt.item = 380053;

        // blueShirt (components)
        const blueShirtButton = Button.getComponent(blueShirt);
        blueShirtButton.hoverCallback = () => this.tintShirt(1);

        // redShirt (prefab fields)
        redShirt.item = 380054;

        // redShirt (components)
        const redShirtButton = Button.getComponent(redShirt);
        redShirtButton.hoverCallback = () => this.tintShirt(5);

        // greenShirt (prefab fields)
        greenShirt.item = 380055;

        // greenShirt (components)
        const greenShirtButton = Button.getComponent(greenShirt);
        greenShirtButton.hoverCallback = () => this.tintShirt(2);

        // yellowShirt (prefab fields)
        yellowShirt.item = 380059;

        // yellowShirt (components)
        const yellowShirtButton = Button.getComponent(yellowShirt);
        yellowShirtButton.hoverCallback = () => this.tintShirt(7);

        // peachShirt (prefab fields)
        peachShirt.item = 380058;

        // peachShirt (components)
        const peachShirtButton = Button.getComponent(peachShirt);
        peachShirtButton.hoverCallback = () => this.tintShirt(10);

        // brownShirt (prefab fields)
        brownShirt.item = 380057;

        // brownShirt (components)
        const brownShirtButton = Button.getComponent(brownShirt);
        brownShirtButton.hoverCallback = () => this.tintShirt(9);

        // orangeShirt (prefab fields)
        orangeShirt.item = 380056;

        // orangeShirt (components)
        const orangeShirtButton = Button.getComponent(orangeShirt);
        orangeShirtButton.hoverCallback = () => this.tintShirt(6);

        // lightblueShirt (prefab fields)
        lightblueShirt.item = 380060;

        // lightblueShirt (components)
        const lightblueShirtButton = Button.getComponent(lightblueShirt);
        lightblueShirtButton.hoverCallback = () => this.tintShirt(12);

        // purpleShirt (prefab fields)
        purpleShirt.item = 380063;

        // purpleShirt (components)
        const purpleShirtButton = Button.getComponent(purpleShirt);
        purpleShirtButton.hoverCallback = () => this.tintShirt(8);

        // limeShirt (prefab fields)
        limeShirt.item = 380064;

        // limeShirt (components)
        const limeShirtButton = Button.getComponent(limeShirt);
        limeShirtButton.hoverCallback = () => this.tintShirt(13);

        // aquaShirt (prefab fields)
        aquaShirt.item = 380065;

        // aquaShirt (components)
        const aquaShirtButton = Button.getComponent(aquaShirt);
        aquaShirtButton.hoverCallback = () => this.tintShirt(15);

        // darkGreenShirt (prefab fields)
        darkGreenShirt.item = 380062;

        // darkGreenShirt (components)
        const darkGreenShirtButton = Button.getComponent(darkGreenShirt);
        darkGreenShirtButton.hoverCallback = () => this.tintShirt(11);

        // pinkShirt (prefab fields)
        pinkShirt.item = 380061;

        // pinkShirt (components)
        const pinkShirtButton = Button.getComponent(pinkShirt);
        pinkShirtButton.hoverCallback = () => this.tintShirt(3);

        // whiteShirt (prefab fields)
        whiteShirt.item = 380066;

        // whiteShirt (components)
        const whiteShirtButton = Button.getComponent(whiteShirt);
        whiteShirtButton.hoverCallback = () => this.tintShirt(16);

        // maroonShirt (prefab fields)
        maroonShirt.item = 380069;

        // maroonShirt (components)
        const maroonShirtButton = Button.getComponent(maroonShirt);
        maroonShirtButton.hoverCallback = () => this.tintShirt(20);

        // lavenderShirt (prefab fields)
        lavenderShirt.item = 380070;

        // lavenderShirt (components)
        const lavenderShirtButton = Button.getComponent(lavenderShirt);
        lavenderShirtButton.hoverCallback = () => this.tintShirt(21);

        // valentinePinkShirt (prefab fields)
        valentinePinkShirt.item = 380067;

        // valentinePinkShirt (components)
        const valentinePinkShirtButton = Button.getComponent(valentinePinkShirt);
        valentinePinkShirtButton.hoverCallback = () => this.tintShirt(18);

        // oldBlueShirt (prefab fields)
        oldBlueShirt.item = 380068;

        // oldBlueShirt (components)
        const oldBlueShirtButton = Button.getComponent(oldBlueShirt);
        oldBlueShirtButton.hoverCallback = () => this.tintShirt(19);

        // likeIgloo (components)
        const likeIglooSimpleButton = new SimpleButton(likeIgloo);
        likeIglooSimpleButton.callback = () => this.showSecret(380371);

        // aqua (prefab fields)
        aqua.item = 15;

        // aqua (components)
        const aquaButton = Button.getComponent(aqua);
        aquaButton.hoverCallback = () => this.tintPainter(15);;

        // lime (prefab fields)
        lime.item = 13;

        // lime (components)
        const limeButton = Button.getComponent(lime);
        limeButton.hoverCallback = () => this.tintPainter(13);;

        // purple (prefab fields)
        purple.item = 8;

        // purple (components)
        const purpleButton = Button.getComponent(purple);
        purpleButton.hoverCallback = () => this.tintPainter(8);;

        // darkGreen (prefab fields)
        darkGreen.item = 11;

        // darkGreen (components)
        const darkGreenButton = Button.getComponent(darkGreen);
        darkGreenButton.hoverCallback = () => this.tintPainter(11);;

        // pink (prefab fields)
        pink.item = 3;

        // pink (components)
        const pinkButton = Button.getComponent(pink);
        pinkButton.hoverCallback = () => this.tintPainter(3);;

        // lightblue (prefab fields)
        lightblue.item = 12;

        // lightblue (components)
        const lightblueButton = Button.getComponent(lightblue);
        lightblueButton.hoverCallback = () => this.tintPainter(12);;

        // yellow (prefab fields)
        yellow.item = 7;

        // yellow (components)
        const yellowButton = Button.getComponent(yellow);
        yellowButton.hoverCallback = () => this.tintPainter(7);;

        // peach (prefab fields)
        peach.item = 10;

        // peach (components)
        const peachButton = Button.getComponent(peach);
        peachButton.hoverCallback = () => this.tintPainter(10);;

        // brown (prefab fields)
        brown.item = 9;

        // brown (components)
        const brownButton = Button.getComponent(brown);
        brownButton.hoverCallback = () => this.tintPainter(9);;

        // orange (prefab fields)
        orange.item = 6;

        // orange (components)
        const orangeButton = Button.getComponent(orange);
        orangeButton.hoverCallback = () => this.tintPainter(6);;

        // green (prefab fields)
        green.item = 2;

        // green (components)
        const greenButton = Button.getComponent(green);
        greenButton.hoverCallback = () => this.tintPainter(2);;

        // red (prefab fields)
        red.item = 5;

        // red (components)
        const redButton = Button.getComponent(red);
        redButton.hoverCallback = () => this.tintPainter(5);;

        // blue (prefab fields)
        blue.item = 1;

        // blue (components)
        const blueButton = Button.getComponent(blue);
        blueButton.hoverCallback = () => this.tintPainter(1);;

        // black (prefab fields)
        black.item = 4;

        // black (components)
        const blackButton = Button.getComponent(black);
        blackButton.hoverCallback = () => this.tintPainter(4);;

        // white (prefab fields)
        white.item = 16;

        // white (components)
        const whiteButton = Button.getComponent(white);
        whiteButton.hoverCallback = () => this.tintPainter(16);;

        // maroon (prefab fields)
        maroon.item = 20;

        // maroon (components)
        const maroonButton = Button.getComponent(maroon);
        maroonButton.hoverCallback = () => this.tintPainter(20);;

        // lavender (prefab fields)
        lavender.item = 21;

        // lavender (components)
        const lavenderButton = Button.getComponent(lavender);
        lavenderButton.hoverCallback = () => this.tintPainter(21);;

        // blossom (prefab fields)
        blossom.item = 22;

        // blossom (components)
        const blossomButton = Button.getComponent(blossom);
        blossomButton.hoverCallback = () => this.tintPainter(22);;

        // mocha (prefab fields)
        mocha.item = 23;

        // mocha (components)
        const mochaButton = Button.getComponent(mocha);
        mochaButton.hoverCallback = () => this.tintPainter(23);;

        // candyapple (prefab fields)
        candyapple.item = 24;

        // candyapple (components)
        const candyappleButton = Button.getComponent(candyapple);
        candyappleButton.hoverCallback = () => this.tintPainter(24);;

        // glacial (prefab fields)
        glacial.item = 25;

        // glacial (components)
        const glacialButton = Button.getComponent(glacial);
        glacialButton.hoverCallback = () => this.tintPainter(25);;

        // pageFront (components)
        const pageFrontButton = new Button(pageFront);
        pageFrontButton.spriteName = "cc-page-front";
        pageFrontButton.callback = () => this.nextPage();

        // closeRight_1 (components)
        const closeRight_1Button = new Button(closeRight_1);
        closeRight_1Button.spriteName = "cc-close";
        closeRight_1Button.callback = () => this.close();
        closeRight_1Button.pixelPerfect = true;

        // closeRight (components)
        const closeRightButton = new Button(closeRight);
        closeRightButton.spriteName = "cc-close";
        closeRightButton.callback = () => this.close();
        closeRightButton.pixelPerfect = true;

        // pageRight (components)
        const pageRightButton = new Button(pageRight);
        pageRightButton.spriteName = "cc-page-right";
        pageRightButton.callback = () => this.nextPage();
        pageRightButton.pixelPerfect = true;

        // pageLeft (components)
        const pageLeftButton = new Button(pageLeft);
        pageLeftButton.spriteName = "cc-page-left";
        pageLeftButton.callback = () => this.prevPage();
        pageLeftButton.pixelPerfect = true;

        this.photoButtonC1 = photoButtonC1;
        this.photoButtonD1 = photoButtonD1;
        this.photoButtonD2 = photoButtonD2;
        this.photoButtonD3 = photoButtonD3;
        this.photoButtonD4 = photoButtonD4;
        this.photoButtonC4 = photoButtonC4;
        this.photoButtonC3 = photoButtonC3;
        this.photoButtonC2 = photoButtonC2;
        this.photoButtonA1 = photoButtonA1;
        this.photoButtonA2 = photoButtonA2;
        this.photoButtonA3 = photoButtonA3;
        this.photoButtonA4 = photoButtonA4;
        this.photoButtonB4 = photoButtonB4;
        this.photoButtonB3 = photoButtonB3;
        this.photoButtonB2 = photoButtonB2;
        this.photoButtonB1 = photoButtonB1;
        this.secret_town = secret_town;
        this.vikinghelmet = vikinghelmet;
        this.tshirt_body_tint = tshirt_body_tint;
        this.tshirt_preview_tint = tshirt_preview_tint;
        this.paint_tint = paint_tint;
        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */

        this.viking = 0;

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    openVikingSecret(){
        if(this.viking==3){
            this.viking++;
            this.interface.prompt.showSecret(456)
            //this.s_p3_blue.visible=true;
        }
        else if(this.viking==5){
            this.viking = 0;
            this.interface.prompt.showSecret(460)
            //this.s_p3_blue.visible=true;
        }
        else{
            this.viking++;
            this.interface.prompt.showSecret(452)
            //this.s_p3_red.visible=true;
        }
    }

    tintShirt(id) {
        let color = this.world.getColor(id);
        this.tshirt_body_tint.setTint(color);
        this.tshirt_preview_tint.setTint(color);
    }

    tintPainter(id) {
        let color = this.world.getColor(id);
        this.paint_tint.setTint(color);
    }

    showSecret(id) {
        this.interface.prompt.showSecret(id)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
