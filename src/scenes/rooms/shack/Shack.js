import RoomScene from '@rooms/RoomScene'
import RoomPin from '@rooms/RoomPin'

import { Button, MoveTo, SimpleButton, HoverAnimation, Zone, Animation, ZoneTrigger } from '@components/components'


/* START OF COMPILED CODE */

export default class Shack extends RoomScene {

    constructor() {
        super("Shack");

        /** @type {Phaser.GameObjects.Sprite} */
        this.l2_bucketback0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l3_flowend;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l3_pipewater;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l4_bucketfront0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l5_shutdown;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l5_flowingdown;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l5_operating;
        /** @type {Phaser.GameObjects.Sprite} */
        this.l5_park;
        /** @type {Phaser.GameObjects.Sprite} */
        this.harvest;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant0_0;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant0_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant0_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant0_3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant_1_0;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant_1_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant_1_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant_1_3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant_2_0;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant_2_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant_2_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant_2_3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant_3_0;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant_3_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant_3_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant_3_3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant_4_0;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant_4_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant_4_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant_4_3;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle_invalid;
        /** @type {Phaser.GameObjects.Sprite} */
        this.spray1_end;
        /** @type {Phaser.GameObjects.Sprite} */
        this.spray1_operating;
        /** @type {Phaser.GameObjects.Sprite} */
        this.spray1_start;
        /** @type {Phaser.GameObjects.Sprite} */
        this.spray2_operating;
        /** @type {Phaser.GameObjects.Sprite} */
        this.spray2_end;
        /** @type {Phaser.GameObjects.Sprite} */
        this.spray2_start;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_0_0;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_0_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_0_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_0_3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_1_0;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_1_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_1_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_1_3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_2_0;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_2_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_2_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_2_3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_3_0;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_3_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_3_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_3_3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_4_0;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_4_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_4_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plantbad_4_3;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forest': () => this.triggerRoom(809, 1234, 410),
            'eco': () => this.triggerRoom(122, 253, 590),
            'mine': () => this.triggerRoom(808, 0, 0)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("shack-pack", "assets/media/rooms/shack/shack-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_1
        this.add.image(762, 481, "shack-bg", "bg");

        // l2_bucketback0001
        const l2_bucketback0001 = this.add.sprite(673, 205, "shack-bg", "L2-bucketback0001");

        // l3_flowend
        const l3_flowend = this.add.sprite(733, 140, "shack-flowend", "L3-flowend0001");
        l3_flowend.visible = false;

        // l3_pipewater
        const l3_pipewater = this.add.sprite(733, 140, "shack-bg", "L3-pipewater0001");

        // l4_bucketfront0001
        const l4_bucketfront0001 = this.add.sprite(672, 249, "shack-bg", "L4-bucketfront0001");

        // bg2
        this.add.image(787, 325, "shack-bg", "bg2");

        // l5_shutdown
        const l5_shutdown = this.add.sprite(950, 314, "shack-bg", "L5-shutdown0001");
        l5_shutdown.visible = false;

        // l5_flowingdown
        const l5_flowingdown = this.add.sprite(942, 314, "shack-bg", "L5-flowingdown0001");
        l5_flowingdown.visible = false;

        // l5_operating
        const l5_operating = this.add.sprite(942, 314, "shack-bg", "L5-operating0001");
        l5_operating.visible = false;

        // l5_park
        const l5_park = this.add.sprite(942, 314, "shack-bg", "L5-park");

        // bush
        this.add.image(169, 408, "shack-bg", "bush");

        // recycle
        const recycle = this.add.image(-28.4744803397528, 123.04314989376635, "shack-bg", "recycle");
        recycle.setOrigin(0, 0);

        // trees_1
        const trees_1 = this.add.image(196, 645, "shack", "trees_1");
        trees_1.setOrigin(0.8208955223880597, 0.36511156186612576);

        // plant_doors
        const plant_doors = this.add.image(6, 355, "shack", "plant_doors");
        plant_doors.setOrigin(0, 0);

        // shovel
        const shovel = this.add.image(1143, 470, "shack", "shovel");
        shovel.setOrigin(0.17543859649122806, 0.856);

        // flowercart
        const flowercart = this.add.image(1083, 489.31549980908807, "shack-bg", "flowercart");
        flowercart.setOrigin(0.5, 0.6692958317424006);

        // flowers
        const flowers = this.add.image(206, 464, "shack", "flowers");
        flowers.setOrigin(0.5352112676056338, 0.7903225806451613);

        // cart_2
        const cart_2 = this.add.image(625, 526, "shack", "cart_2");
        cart_2.setOrigin(0.5206611570247934, 0.7475728155339806);

        // cart_1
        const cart_1 = this.add.image(519, 568, "shack", "cart_1");
        cart_1.setOrigin(0.4928571428571429, 0.7401574803149606);

        // fence
        const fence = this.add.image(718, 584, "shack", "fence");
        fence.setOrigin(0.5180722891566265, 0.5562130177514792);

        // barrel_2
        const barrel_2 = this.add.image(1252, 492, "shack", "barrel_2");
        barrel_2.setOrigin(0.759493670886076, 0.8953488372093024);

        // bag
        const bag = this.add.image(1154, 507, "shack", "bag");
        bag.setOrigin(0.09859154929577464, 0.7682926829268293);

        // bear
        const bear = this.add.image(1142, 482, "shack", "bear");
        bear.setOrigin(0.71, 0.7178423236514523);
        bear.visible = false;

        // house_back
        const house_back = this.add.image(1298, 332, "shack", "house_back");
        house_back.setOrigin(0, 0);

        // harvest
        const harvest = this.add.sprite(1413, 427, "shack-harvest", "harvest0001");

        // house
        const house = this.add.image(1291, 500, "shack", "house");
        house.setOrigin(0.08679245283018867, 0.8169014084507042);

        // pipe_1
        const pipe_1 = this.add.image(1004, 588, "shack", "pipe_10001");
        pipe_1.setOrigin(0.44106463878326996, 0.40707964601769914);

        // pipe_2
        const pipe_2 = this.add.image(1268, 681, "shack", "pipe_20001");
        pipe_2.setOrigin(0.054945054945054944, 0.3333333333333333);

        // trees_2
        const trees_2 = this.add.image(1204, 968, "shack", "trees_2");
        trees_2.setOrigin(0, 1);

        // plant0_0
        const plant0_0 = this.add.sprite(762.7197899098514, 711.4709243145564, "shack-plants", "plant00001");
        plant0_0.setOrigin(0.6573975199587457, 0.8836124306416646);

        // plant0_1
        const plant0_1 = this.add.sprite(821, 664, "shack-plants", "plant00001");
        plant0_1.setOrigin(0.6573975199587457, 0.8836124306416646);

        // plant0_2
        const plant0_2 = this.add.sprite(866, 638, "shack-plants", "plant00001");
        plant0_2.setOrigin(0.6573975199587457, 0.8836124306416646);

        // plant0_3
        const plant0_3 = this.add.sprite(906, 604, "shack-plants", "plant00001");
        plant0_3.setOrigin(0.6573975199587457, 0.8836124306416646);

        // plant_1_0
        const plant_1_0 = this.add.sprite(840.5557088713826, 754.9425663255628, "shack-plants", "plant10001");
        plant_1_0.setOrigin(0.5960233187338186, 0.9754061124155748);

        // plant_1_1
        const plant_1_1 = this.add.sprite(892, 711, "shack-plants", "plant10001");
        plant_1_1.setOrigin(0.5960233187338186, 0.9754061124155748);

        // plant_1_2
        const plant_1_2 = this.add.sprite(938, 671, "shack-plants", "plant10001");
        plant_1_2.setOrigin(0.5960233187338186, 0.9754061124155748);

        // plant_1_3
        const plant_1_3 = this.add.sprite(981, 633, "shack-plants", "plant10001");
        plant_1_3.setOrigin(0.5960233187338186, 0.9754061124155748);

        // plant_2_0
        const plant_2_0 = this.add.sprite(934, 795, "shack-plants", "plant20001");
        plant_2_0.setOrigin(0.2269815866164309, 0.9662820977897065);

        // plant_2_1
        const plant_2_1 = this.add.sprite(977, 746, "shack-plants", "plant20001");
        plant_2_1.setOrigin(0.2269815866164309, 0.9662820977897065);

        // plant_2_2
        const plant_2_2 = this.add.sprite(1025, 700, "shack-plants", "plant20001");
        plant_2_2.setOrigin(0.2269815866164309, 0.9662820977897065);

        // plant_2_3
        const plant_2_3 = this.add.sprite(1058, 657, "shack-plants", "plant20001");
        plant_2_3.setOrigin(0.2269815866164309, 0.9662820977897065);

        // plant_3_0
        const plant_3_0 = this.add.sprite(1051, 828, "shack-plants", "plant30001");
        plant_3_0.setOrigin(0.2269815866164309, 0.9662820977897065);

        // plant_3_1
        const plant_3_1 = this.add.sprite(1099, 784, "shack-plants", "plant30001");
        plant_3_1.setOrigin(0.2269815866164309, 0.9662820977897065);

        // plant_3_2
        const plant_3_2 = this.add.sprite(1140, 743, "shack-plants", "plant30001");
        plant_3_2.setOrigin(0.2269815866164309, 0.9662820977897065);

        // plant_3_3
        const plant_3_3 = this.add.sprite(1182, 700, "shack-plants", "plant30001");
        plant_3_3.setOrigin(0.2269815866164309, 0.9662820977897065);

        // plant_4_0
        const plant_4_0 = this.add.sprite(1138.4814194829776, 857.6214783839525, "shack-plants", "plant40001");
        plant_4_0.setOrigin(0.05571316080727203, 0.9752441335318609);

        // plant_4_1
        const plant_4_1 = this.add.sprite(1193, 802, "shack-plants", "plant40001");
        plant_4_1.setOrigin(0.05571316080727203, 0.9752441335318609);

        // plant_4_2
        const plant_4_2 = this.add.sprite(1247, 765, "shack-plants", "plant40001");
        plant_4_2.setOrigin(0.05571316080727203, 0.9752441335318609);

        // plant_4_3
        const plant_4_3 = this.add.sprite(1297, 722, "shack-plants", "plant40001");
        plant_4_3.setOrigin(0.05571316080727203, 0.9752441335318609);

        // rectangle_invalid
        const rectangle_invalid = this.add.rectangle(-215, 53, 128, 128);
        rectangle_invalid.isFilled = true;

        // spray1_end
        const spray1_end = this.add.sprite(1024.5791692421303, 631.6059018406636, "shack-waterspray", "spray1-end0001");
        spray1_end.setOrigin(0.5121087757846494, 1.0237091743562106);
        spray1_end.visible = false;

        // spray1_operating
        const spray1_operating = this.add.sprite(1021.484166151574, 632.1217356890896, "shack-waterspray", "spray1-end0001");
        spray1_operating.setOrigin(0.4975782448430702, 1.0276468373212948);
        spray1_operating.visible = false;

        // spray1_start
        const spray1_start = this.add.sprite(1017.5698435050567, 623.9783614516042, "shack-waterspray", "spray1-start0012");
        spray1_start.setOrigin(0.873418101199076, 1.0073732993965063);
        spray1_start.visible = false;

        // spray2_operating
        const spray2_operating = this.add.sprite(1349, 700.6581336753925, "shack-waterspray", "spray2-operating0015");
        spray2_operating.setOrigin(0.5, 0.9690567932906712);
        spray2_operating.visible = false;

        // spray2_end
        const spray2_end = this.add.sprite(1342.7644357640147, 696.951440967437, "shack-waterspray", "spray2-end0001");
        spray2_end.setOrigin(0.48970363136678924, 0.9558392326935626);
        spray2_end.visible = false;

        // spray2_start
        const spray2_start = this.add.sprite(1390.0198206105906, 706.2988693894229, "shack-waterspray", "spray2-start0001");
        spray2_start.setOrigin(0.9700977373347014, 0.9977849861841444);
        spray2_start.visible = false;

        // plantbad_0_0
        const plantbad_0_0 = this.add.sprite(725, 635, "shack-plantsbad", "plant00001");
        plantbad_0_0.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_0_0.visible = false;

        // plantbad_0_1
        const plantbad_0_1 = this.add.sprite(783, 587, "shack-plantsbad", "plant00001");
        plantbad_0_1.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_0_1.visible = false;

        // plantbad_0_2
        const plantbad_0_2 = this.add.sprite(828, 561, "shack-plantsbad", "plant00001");
        plantbad_0_2.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_0_2.visible = false;

        // plantbad_0_3
        const plantbad_0_3 = this.add.sprite(868, 527, "shack-plantsbad", "plant00001");
        plantbad_0_3.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_0_3.visible = false;

        // plantbad_1_0
        const plantbad_1_0 = this.add.sprite(861, 679, "shack-plantsbad", "plant10001");
        plantbad_1_0.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_1_0.visible = false;

        // plantbad_1_1
        const plantbad_1_1 = this.add.sprite(912, 635, "shack-plantsbad", "plant10001");
        plantbad_1_1.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_1_1.visible = false;

        // plantbad_1_2
        const plantbad_1_2 = this.add.sprite(958, 595, "shack-plantsbad", "plant10001");
        plantbad_1_2.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_1_2.visible = false;

        // plantbad_1_3
        const plantbad_1_3 = this.add.sprite(1002, 557, "shack-plantsbad", "plant10001");
        plantbad_1_3.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_1_3.visible = false;

        // plantbad_2_0
        const plantbad_2_0 = this.add.sprite(1012, 714, "shack-plantsbad", "plant20001");
        plantbad_2_0.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_2_0.visible = false;

        // plantbad_2_1
        const plantbad_2_1 = this.add.sprite(1056, 664, "shack-plantsbad", "plant20001");
        plantbad_2_1.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_2_1.visible = false;

        // plantbad_2_2
        const plantbad_2_2 = this.add.sprite(1104, 619, "shack-plantsbad", "plant20001");
        plantbad_2_2.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_2_2.visible = false;

        // plantbad_2_3
        const plantbad_2_3 = this.add.sprite(1136, 576, "shack-plantsbad", "plant20001");
        plantbad_2_3.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_2_3.visible = false;

        // plantbad_3_0
        const plantbad_3_0 = this.add.sprite(1189, 750, "shack-plantsbad", "plant30001");
        plantbad_3_0.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_3_0.visible = false;

        // plantbad_3_1
        const plantbad_3_1 = this.add.sprite(1237, 706, "shack-plantsbad", "plant30001");
        plantbad_3_1.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_3_1.visible = false;

        // plantbad_3_2
        const plantbad_3_2 = this.add.sprite(1279, 665, "shack-plantsbad", "plant30001");
        plantbad_3_2.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_3_2.visible = false;

        // plantbad_3_3
        const plantbad_3_3 = this.add.sprite(1321, 622, "shack-plantsbad", "plant30001");
        plantbad_3_3.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_3_3.visible = false;

        // plantbad_4_0
        const plantbad_4_0 = this.add.sprite(1336, 769, "shack-plantsbad", "plant40001");
        plantbad_4_0.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_4_0.visible = false;

        // plantbad_4_1
        const plantbad_4_1 = this.add.sprite(1390, 713, "shack-plantsbad", "plant40001");
        plantbad_4_1.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_4_1.visible = false;

        // plantbad_4_2
        const plantbad_4_2 = this.add.sprite(1444, 676, "shack-plantsbad", "plant40001");
        plantbad_4_2.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_4_2.visible = false;

        // plantbad_4_3
        const plantbad_4_3 = this.add.sprite(1495, 633, "shack-plantsbad", "plant40001");
        plantbad_4_3.setOrigin(0.6573975199587457, 0.8836124306416646);
        plantbad_4_3.visible = false;

        // flowers_1
        const flowers_1 = this.add.image(1092, 527, "shack", "flowers");
        flowers_1.setOrigin(0.5352112676056338, 0.7903225806451613);

        // lists
        const sort = [house, pipe_1, pipe_2, trees_2, bear, bag, barrel_2, shovel, fence, cart_1, cart_2, flowers, trees_1, plant_1_3, plant_1_2, plant_1_1, plant_1_0, plant0_3, plant0_2, plant0_1, plant0_0, plant_2_3, plant_2_2, plant_2_1, plant_2_0, plant_3_0, plant_3_3, plant_3_2, plant_3_1, plant_4_0, plant_4_3, plant_4_2, plant_4_1, spray1_end, spray1_operating, spray1_start, spray2_end, spray2_operating, plantbad_0_0, plantbad_4_3, plantbad_4_2, plantbad_4_1, plantbad_4_0, plantbad_3_3, plantbad_3_2, plantbad_3_1, plantbad_3_0, plantbad_2_3, plantbad_2_2, plantbad_2_1, plantbad_2_0, plantbad_1_3, plantbad_1_2, plantbad_1_1, plantbad_1_0, plantbad_0_3, plantbad_0_2, plantbad_0_1, spray2_start, flowercart, flowers_1];

        // l2_bucketback0001 (components)
        const l2_bucketback0001Animation = new Animation(l2_bucketback0001);
        l2_bucketback0001Animation.key = "L2-bucketback";
        l2_bucketback0001Animation.end = 10;
        l2_bucketback0001Animation.repeat = 0;
        l2_bucketback0001Animation.autoPlay = false;

        // l3_flowend (components)
        const l3_flowendAnimation = new Animation(l3_flowend);
        l3_flowendAnimation.key = "L3-flowend";
        l3_flowendAnimation.end = 24;
        l3_flowendAnimation.repeat = 0;
        l3_flowendAnimation.autoPlay = false;

        // l3_pipewater (components)
        const l3_pipewaterAnimation = new Animation(l3_pipewater);
        l3_pipewaterAnimation.key = "L3-flowanimation";
        l3_pipewaterAnimation.end = 13;
        l3_pipewaterAnimation.repeat = 0;
        l3_pipewaterAnimation.autoPlay = false;

        // l4_bucketfront0001 (components)
        const l4_bucketfront0001Animation = new Animation(l4_bucketfront0001);
        l4_bucketfront0001Animation.key = "L4-bucketfront";
        l4_bucketfront0001Animation.end = 10;
        l4_bucketfront0001Animation.repeat = 0;
        l4_bucketfront0001Animation.autoPlay = false;

        // l5_shutdown (components)
        const l5_shutdownAnimation = new Animation(l5_shutdown);
        l5_shutdownAnimation.key = "L5-shutdown";
        l5_shutdownAnimation.end = 36;
        l5_shutdownAnimation.repeat = 0;
        l5_shutdownAnimation.autoPlay = false;

        // l5_flowingdown (components)
        const l5_flowingdownAnimation = new Animation(l5_flowingdown);
        l5_flowingdownAnimation.key = "L5-flowingdown";
        l5_flowingdownAnimation.end = 82;
        l5_flowingdownAnimation.repeat = 0;
        l5_flowingdownAnimation.autoPlay = false;

        // l5_operating (components)
        const l5_operatingAnimation = new Animation(l5_operating);
        l5_operatingAnimation.key = "L5-operating";
        l5_operatingAnimation.end = 12;

        // plant_doors (components)
        const plant_doorsButton = new Button(plant_doors);
        plant_doorsButton.spriteName = "plant_doors";
        const plant_doorsMoveTo = new MoveTo(plant_doors);
        plant_doorsMoveTo.x = 96;
        plant_doorsMoveTo.y = 478;

        // harvest (components)
        const harvestHoverAnimation = new HoverAnimation(harvest);
        harvestHoverAnimation.key = "harvest";
        harvestHoverAnimation.checkpoints = "11,21,31";
        harvestHoverAnimation.end = 37;
        harvestHoverAnimation.hoverZone = rectangle_invalid;
        harvestHoverAnimation.loop = false;

        // plant0_0 (components)
        const plant0_0HoverAnimation = new HoverAnimation(plant0_0);
        plant0_0HoverAnimation.key = "plant0";
        plant0_0HoverAnimation.checkpoints = "1,9,16,23";
        plant0_0HoverAnimation.end = 31;
        plant0_0HoverAnimation.hoverZone = rectangle_invalid;

        // plant0_1 (components)
        const plant0_1HoverAnimation = new HoverAnimation(plant0_1);
        plant0_1HoverAnimation.key = "plant0";
        plant0_1HoverAnimation.checkpoints = "1,9,16,23";
        plant0_1HoverAnimation.end = 31;
        plant0_1HoverAnimation.hoverZone = rectangle_invalid;

        // plant0_2 (components)
        const plant0_2HoverAnimation = new HoverAnimation(plant0_2);
        plant0_2HoverAnimation.key = "plant0";
        plant0_2HoverAnimation.checkpoints = "1,9,16,23";
        plant0_2HoverAnimation.end = 31;
        plant0_2HoverAnimation.hoverZone = rectangle_invalid;

        // plant0_3 (components)
        const plant0_3HoverAnimation = new HoverAnimation(plant0_3);
        plant0_3HoverAnimation.key = "plant0";
        plant0_3HoverAnimation.checkpoints = "1,9,16,23";
        plant0_3HoverAnimation.end = 31;
        plant0_3HoverAnimation.hoverZone = rectangle_invalid;

        // plant_1_0 (components)
        const plant_1_0HoverAnimation = new HoverAnimation(plant_1_0);
        plant_1_0HoverAnimation.key = "plant1";
        plant_1_0HoverAnimation.checkpoints = "1,7,15,25";
        plant_1_0HoverAnimation.end = 33;
        plant_1_0HoverAnimation.hoverZone = rectangle_invalid;

        // plant_1_1 (components)
        const plant_1_1HoverAnimation = new HoverAnimation(plant_1_1);
        plant_1_1HoverAnimation.key = "plant1";
        plant_1_1HoverAnimation.checkpoints = "1,7,15,25";
        plant_1_1HoverAnimation.end = 33;
        plant_1_1HoverAnimation.hoverZone = rectangle_invalid;

        // plant_1_2 (components)
        const plant_1_2HoverAnimation = new HoverAnimation(plant_1_2);
        plant_1_2HoverAnimation.key = "plant1";
        plant_1_2HoverAnimation.checkpoints = "1,7,15,25";
        plant_1_2HoverAnimation.end = 33;
        plant_1_2HoverAnimation.hoverZone = rectangle_invalid;

        // plant_1_3 (components)
        const plant_1_3HoverAnimation = new HoverAnimation(plant_1_3);
        plant_1_3HoverAnimation.key = "plant1";
        plant_1_3HoverAnimation.checkpoints = "1,7,15,25";
        plant_1_3HoverAnimation.end = 33;
        plant_1_3HoverAnimation.hoverZone = rectangle_invalid;

        // plant_2_0 (components)
        const plant_2_0HoverAnimation = new HoverAnimation(plant_2_0);
        plant_2_0HoverAnimation.key = "plant2";
        plant_2_0HoverAnimation.checkpoints = "1,7,15,25";
        plant_2_0HoverAnimation.end = 33;
        plant_2_0HoverAnimation.hoverZone = rectangle_invalid;

        // plant_2_1 (components)
        const plant_2_1HoverAnimation = new HoverAnimation(plant_2_1);
        plant_2_1HoverAnimation.key = "plant2";
        plant_2_1HoverAnimation.checkpoints = "1,7,15,25";
        plant_2_1HoverAnimation.end = 33;
        plant_2_1HoverAnimation.hoverZone = rectangle_invalid;

        // plant_2_2 (components)
        const plant_2_2HoverAnimation = new HoverAnimation(plant_2_2);
        plant_2_2HoverAnimation.key = "plant2";
        plant_2_2HoverAnimation.checkpoints = "1,7,15,25";
        plant_2_2HoverAnimation.end = 33;
        plant_2_2HoverAnimation.hoverZone = rectangle_invalid;

        // plant_2_3 (components)
        const plant_2_3HoverAnimation = new HoverAnimation(plant_2_3);
        plant_2_3HoverAnimation.key = "plant2";
        plant_2_3HoverAnimation.checkpoints = "1,7,15,25";
        plant_2_3HoverAnimation.end = 33;
        plant_2_3HoverAnimation.hoverZone = rectangle_invalid;

        // plant_3_0 (components)
        const plant_3_0HoverAnimation = new HoverAnimation(plant_3_0);
        plant_3_0HoverAnimation.key = "plant3";
        plant_3_0HoverAnimation.checkpoints = "1,8,16,26";
        plant_3_0HoverAnimation.end = 34;
        plant_3_0HoverAnimation.hoverZone = rectangle_invalid;

        // plant_3_1 (components)
        const plant_3_1HoverAnimation = new HoverAnimation(plant_3_1);
        plant_3_1HoverAnimation.key = "plant3";
        plant_3_1HoverAnimation.checkpoints = "1,8,16,26";
        plant_3_1HoverAnimation.end = 34;
        plant_3_1HoverAnimation.hoverZone = rectangle_invalid;

        // plant_3_2 (components)
        const plant_3_2HoverAnimation = new HoverAnimation(plant_3_2);
        plant_3_2HoverAnimation.key = "plant3";
        plant_3_2HoverAnimation.checkpoints = "1,8,16,26";
        plant_3_2HoverAnimation.end = 34;
        plant_3_2HoverAnimation.hoverZone = rectangle_invalid;

        // plant_3_3 (components)
        const plant_3_3HoverAnimation = new HoverAnimation(plant_3_3);
        plant_3_3HoverAnimation.key = "plant3";
        plant_3_3HoverAnimation.checkpoints = "1,8,16,26";
        plant_3_3HoverAnimation.end = 34;
        plant_3_3HoverAnimation.hoverZone = rectangle_invalid;

        // plant_4_0 (components)
        const plant_4_0HoverAnimation = new HoverAnimation(plant_4_0);
        plant_4_0HoverAnimation.key = "plant4";
        plant_4_0HoverAnimation.checkpoints = "1,6,15,27";
        plant_4_0HoverAnimation.end = 33;
        plant_4_0HoverAnimation.hoverZone = rectangle_invalid;

        // plant_4_1 (components)
        const plant_4_1HoverAnimation = new HoverAnimation(plant_4_1);
        plant_4_1HoverAnimation.key = "plant4";
        plant_4_1HoverAnimation.checkpoints = "1,6,15,27";
        plant_4_1HoverAnimation.end = 33;
        plant_4_1HoverAnimation.hoverZone = rectangle_invalid;

        // plant_4_2 (components)
        const plant_4_2HoverAnimation = new HoverAnimation(plant_4_2);
        plant_4_2HoverAnimation.key = "plant4";
        plant_4_2HoverAnimation.checkpoints = "1,6,15,27";
        plant_4_2HoverAnimation.end = 33;
        plant_4_2HoverAnimation.hoverZone = rectangle_invalid;

        // plant_4_3 (components)
        const plant_4_3HoverAnimation = new HoverAnimation(plant_4_3);
        plant_4_3HoverAnimation.key = "plant4";
        plant_4_3HoverAnimation.checkpoints = "1,6,15,27";
        plant_4_3HoverAnimation.end = 33;
        plant_4_3HoverAnimation.hoverZone = rectangle_invalid;

        // spray1_end (components)
        const spray1_endAnimation = new Animation(spray1_end);
        spray1_endAnimation.key = "spray1-end";
        spray1_endAnimation.end = 21;
        spray1_endAnimation.repeat = 0;
        spray1_endAnimation.autoPlay = false;

        // spray1_operating (components)
        const spray1_operatingAnimation = new Animation(spray1_operating);
        spray1_operatingAnimation.key = "spray1-operating";
        spray1_operatingAnimation.start = 6;
        spray1_operatingAnimation.end = 16;

        // spray1_start (components)
        const spray1_startAnimation = new Animation(spray1_start);
        spray1_startAnimation.key = "spray1-start";
        spray1_startAnimation.end = 12;
        spray1_startAnimation.repeat = 0;
        spray1_startAnimation.autoPlay = false;

        // spray2_operating (components)
        const spray2_operatingAnimation = new Animation(spray2_operating);
        spray2_operatingAnimation.key = "spray2-operating";
        spray2_operatingAnimation.start = 5;
        spray2_operatingAnimation.end = 16;

        // spray2_end (components)
        const spray2_endAnimation = new Animation(spray2_end);
        spray2_endAnimation.key = "spray2-end";
        spray2_endAnimation.end = 6;
        spray2_endAnimation.repeat = 0;
        spray2_endAnimation.autoPlay = false;

        // spray2_start (components)
        const spray2_startAnimation = new Animation(spray2_start);
        spray2_startAnimation.key = "spray2-start";
        spray2_startAnimation.end = 24;
        spray2_startAnimation.repeat = 0;
        spray2_startAnimation.autoPlay = false;

        // plantbad_0_0 (components)
        const plantbad_0_0HoverAnimation = new HoverAnimation(plantbad_0_0);
        plantbad_0_0HoverAnimation.key = "plant0";
        plantbad_0_0HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_0_0HoverAnimation.end = 90;
        plantbad_0_0HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_0_1 (components)
        const plantbad_0_1HoverAnimation = new HoverAnimation(plantbad_0_1);
        plantbad_0_1HoverAnimation.key = "plant0";
        plantbad_0_1HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_0_1HoverAnimation.end = 90;
        plantbad_0_1HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_0_2 (components)
        const plantbad_0_2HoverAnimation = new HoverAnimation(plantbad_0_2);
        plantbad_0_2HoverAnimation.key = "plant0";
        plantbad_0_2HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_0_2HoverAnimation.end = 90;
        plantbad_0_2HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_0_3 (components)
        const plantbad_0_3HoverAnimation = new HoverAnimation(plantbad_0_3);
        plantbad_0_3HoverAnimation.key = "plant0";
        plantbad_0_3HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_0_3HoverAnimation.end = 90;
        plantbad_0_3HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_1_0 (components)
        const plantbad_1_0HoverAnimation = new HoverAnimation(plantbad_1_0);
        plantbad_1_0HoverAnimation.key = "plant1";
        plantbad_1_0HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_1_0HoverAnimation.end = 90;
        plantbad_1_0HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_1_1 (components)
        const plantbad_1_1HoverAnimation = new HoverAnimation(plantbad_1_1);
        plantbad_1_1HoverAnimation.key = "plant1";
        plantbad_1_1HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_1_1HoverAnimation.end = 90;
        plantbad_1_1HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_1_2 (components)
        const plantbad_1_2HoverAnimation = new HoverAnimation(plantbad_1_2);
        plantbad_1_2HoverAnimation.key = "plant1";
        plantbad_1_2HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_1_2HoverAnimation.end = 90;
        plantbad_1_2HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_1_3 (components)
        const plantbad_1_3HoverAnimation = new HoverAnimation(plantbad_1_3);
        plantbad_1_3HoverAnimation.key = "plant1";
        plantbad_1_3HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_1_3HoverAnimation.end = 90;
        plantbad_1_3HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_2_0 (components)
        const plantbad_2_0HoverAnimation = new HoverAnimation(plantbad_2_0);
        plantbad_2_0HoverAnimation.key = "plant2";
        plantbad_2_0HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_2_0HoverAnimation.end = 90;
        plantbad_2_0HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_2_1 (components)
        const plantbad_2_1HoverAnimation = new HoverAnimation(plantbad_2_1);
        plantbad_2_1HoverAnimation.key = "plant2";
        plantbad_2_1HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_2_1HoverAnimation.end = 90;
        plantbad_2_1HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_2_2 (components)
        const plantbad_2_2HoverAnimation = new HoverAnimation(plantbad_2_2);
        plantbad_2_2HoverAnimation.key = "plant2";
        plantbad_2_2HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_2_2HoverAnimation.end = 90;
        plantbad_2_2HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_2_3 (components)
        const plantbad_2_3HoverAnimation = new HoverAnimation(plantbad_2_3);
        plantbad_2_3HoverAnimation.key = "plant2";
        plantbad_2_3HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_2_3HoverAnimation.end = 90;
        plantbad_2_3HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_3_0 (components)
        const plantbad_3_0HoverAnimation = new HoverAnimation(plantbad_3_0);
        plantbad_3_0HoverAnimation.key = "plant3";
        plantbad_3_0HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_3_0HoverAnimation.end = 90;
        plantbad_3_0HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_3_1 (components)
        const plantbad_3_1HoverAnimation = new HoverAnimation(plantbad_3_1);
        plantbad_3_1HoverAnimation.key = "plant3";
        plantbad_3_1HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_3_1HoverAnimation.end = 90;
        plantbad_3_1HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_3_2 (components)
        const plantbad_3_2HoverAnimation = new HoverAnimation(plantbad_3_2);
        plantbad_3_2HoverAnimation.key = "plant3";
        plantbad_3_2HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_3_2HoverAnimation.end = 90;
        plantbad_3_2HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_3_3 (components)
        const plantbad_3_3HoverAnimation = new HoverAnimation(plantbad_3_3);
        plantbad_3_3HoverAnimation.key = "plant3";
        plantbad_3_3HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_3_3HoverAnimation.end = 90;
        plantbad_3_3HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_4_0 (components)
        const plantbad_4_0HoverAnimation = new HoverAnimation(plantbad_4_0);
        plantbad_4_0HoverAnimation.key = "plant4";
        plantbad_4_0HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_4_0HoverAnimation.end = 90;
        plantbad_4_0HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_4_1 (components)
        const plantbad_4_1HoverAnimation = new HoverAnimation(plantbad_4_1);
        plantbad_4_1HoverAnimation.key = "plant4";
        plantbad_4_1HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_4_1HoverAnimation.end = 90;
        plantbad_4_1HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_4_2 (components)
        const plantbad_4_2HoverAnimation = new HoverAnimation(plantbad_4_2);
        plantbad_4_2HoverAnimation.key = "plant4";
        plantbad_4_2HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_4_2HoverAnimation.end = 90;
        plantbad_4_2HoverAnimation.hoverZone = rectangle_invalid;

        // plantbad_4_3 (components)
        const plantbad_4_3HoverAnimation = new HoverAnimation(plantbad_4_3);
        plantbad_4_3HoverAnimation.key = "plant4";
        plantbad_4_3HoverAnimation.checkpoints = "30,31,60,61";
        plantbad_4_3HoverAnimation.end = 90;
        plantbad_4_3HoverAnimation.hoverZone = rectangle_invalid;

        this.l2_bucketback0001 = l2_bucketback0001;
        this.l3_flowend = l3_flowend;
        this.l3_pipewater = l3_pipewater;
        this.l4_bucketfront0001 = l4_bucketfront0001;
        this.l5_shutdown = l5_shutdown;
        this.l5_flowingdown = l5_flowingdown;
        this.l5_operating = l5_operating;
        this.l5_park = l5_park;
        this.harvest = harvest;
        this.plant0_0 = plant0_0;
        this.plant0_1 = plant0_1;
        this.plant0_2 = plant0_2;
        this.plant0_3 = plant0_3;
        this.plant_1_0 = plant_1_0;
        this.plant_1_1 = plant_1_1;
        this.plant_1_2 = plant_1_2;
        this.plant_1_3 = plant_1_3;
        this.plant_2_0 = plant_2_0;
        this.plant_2_1 = plant_2_1;
        this.plant_2_2 = plant_2_2;
        this.plant_2_3 = plant_2_3;
        this.plant_3_0 = plant_3_0;
        this.plant_3_1 = plant_3_1;
        this.plant_3_2 = plant_3_2;
        this.plant_3_3 = plant_3_3;
        this.plant_4_0 = plant_4_0;
        this.plant_4_1 = plant_4_1;
        this.plant_4_2 = plant_4_2;
        this.plant_4_3 = plant_4_3;
        this.rectangle_invalid = rectangle_invalid;
        this.spray1_end = spray1_end;
        this.spray1_operating = spray1_operating;
        this.spray1_start = spray1_start;
        this.spray2_operating = spray2_operating;
        this.spray2_end = spray2_end;
        this.spray2_start = spray2_start;
        this.plantbad_0_0 = plantbad_0_0;
        this.plantbad_0_1 = plantbad_0_1;
        this.plantbad_0_2 = plantbad_0_2;
        this.plantbad_0_3 = plantbad_0_3;
        this.plantbad_1_0 = plantbad_1_0;
        this.plantbad_1_1 = plantbad_1_1;
        this.plantbad_1_2 = plantbad_1_2;
        this.plantbad_1_3 = plantbad_1_3;
        this.plantbad_2_0 = plantbad_2_0;
        this.plantbad_2_1 = plantbad_2_1;
        this.plantbad_2_2 = plantbad_2_2;
        this.plantbad_2_3 = plantbad_2_3;
        this.plantbad_3_0 = plantbad_3_0;
        this.plantbad_3_1 = plantbad_3_1;
        this.plantbad_3_2 = plantbad_3_2;
        this.plantbad_3_3 = plantbad_3_3;
        this.plantbad_4_0 = plantbad_4_0;
        this.plantbad_4_1 = plantbad_4_1;
        this.plantbad_4_2 = plantbad_4_2;
        this.plantbad_4_3 = plantbad_4_3;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()    

        this.plants = [
            this.plant0_0,
            this.plant0_1,
            this.plant0_2,
            this.plant0_3,
            this.plant_1_0,
            this.plant_1_1,
            this.plant_1_2,
            this.plant_1_3,
            this.plant_2_0,
            this.plant_2_1,
            this.plant_2_2,
            this.plant_2_3,
            this.plant_3_0,
            this.plant_3_1,
            this.plant_3_2,
            this.plant_3_3,
            this.plant_4_0,
            this.plant_4_1,
            this.plant_4_2,
            this.plant_4_3
        ]

        this.badPlants = [
            this.plantbad_0_0,
            this.plantbad_0_1,
            this.plantbad_0_2,
            this.plantbad_0_3,
            this.plantbad_1_0,
            this.plantbad_1_1,
            this.plantbad_1_2,
            this.plantbad_1_3,
            this.plantbad_2_0,
            this.plantbad_2_1,
            this.plantbad_2_2,
            this.plantbad_2_3,
            this.plantbad_3_0,
            this.plantbad_3_1,
            this.plantbad_3_2,
            this.plantbad_3_3,
            this.plantbad_4_0,
            this.plantbad_4_1,
            this.plantbad_4_2,
            this.plantbad_4_3
        ]

        this.waterLevel = 1

        //create start events
        this.l3_pipewater.on("animationcomplete", () => {
            this.l5_park.visible = false;
            this.l5_flowingdown.visible = true;
            this.l5_flowingdown.__Animation.play()
        })
        this.l5_flowingdown.on("animationcomplete", () => {
            this.l5_flowingdown.visible = false;
            this.l5_operating.visible = true;
            this.spray1_start.visible = true; 
            this.spray1_start.__Animation.play()
            this.spray2_start.visible = true;
            this.spray2_start.__Animation.play()
        })
        this.spray1_start.on("animationcomplete", () => {
            this.spray1_start.visible = false;
            this.spray1_operating.visible = true;
        })
        this.spray2_start.on("animationcomplete", () => {
            this.spray2_start.visible = false;
            this.spray2_operating.visible = true;
        })

        //schedule decreasing water
        this.time.addEvent({
            delay: 10000,
            callback: () => this.decreaseWater(),
            loop: true
        })

        this.time.addEvent({
            delay: 2000,
            callback: () => this.decreaseWaterSmall(),
            loop: true
        })

        //create stop events
        this.l3_flowend.on("animationcomplete", () => {
            this.updateWater()
            this.l3_flowend.visible = false
            this.l3_pipewater.visible = true

            this.l5_operating.visible = false
            this.l5_shutdown.visible = true
            this.l5_shutdown.__Animation.play()
        })

        this.l5_shutdown.on("animationcomplete", () => {
            this.l5_shutdown.visible = false
            this.l5_park.visible = true

            this.spray1_operating.visible = false
            this.spray1_end.__Animation.play()
            this.spray1_end.visible = true

            this.spray2_operating.visible = false
            this.spray2_end.__Animation.play()
            this.spray2_end.visible = true
        })

        this.spray1_end.on("animationcomplete", () => {
            this.spray1_end.visible = false
        })

        this.spray2_end.on("animationcomplete", () => {
            this.spray2_end.visible = false
        })

        //single use variables
        this.checkScheduled = false
        this.skipDecrease = false

    }

    onSnowballComplete(x, y, ball) {
        if(x > 750 || x < 590) return;
        if(y < 140 || y > 215) return;

        this.interface.main.snowballFactory.destroyBall(ball);
        this.increaseWater()
    }

    scheduleCheck() {
        if(this.checkScheduled) return
        this.checkScheduled = true

        this.time.addEvent({
            delay: 10000,
            callback: () => this.waterPlants(),
            loop: true
        })

        this.time.addEvent({
            delay: 10000,
            callback: () => this.unwaterPlants(),
            loop: true
        })
    }

    waterPlants() {
        if(!this.spray1_operating.visible) return
        this.increaseGrowth()

        this.plantsWatered = true
    }

    unwaterPlants() {
        if(this.spray1_operating.visible) return

        //Option 1: Called for the first time
        if(this.plantsWatered) {
            this.plantsWatered = false
            return
        }

        //Option 2: Called for the second time
        //TODO: plants going bad animation
        if(this.plantbad_0_0.visible == false && [2,3,4].includes(this.plant0_0.__HoverAnimation.currentAnimation)) {

            for(let plant of this.badPlants) {
                plant.visible = true
                plant.__HoverAnimation.currentAnimation = (this.plant0_0.__HoverAnimation.currentAnimation - 2) * 2 //0, 2, 4
                plant.__HoverAnimation.play()
            }

            for(let plant of this.plants) plant.visible = false

            return
        }

        //Option 3: It's so bad that the plants actually died :(
        for(let plant of this.plants) {
            plant.__HoverAnimation.currentAnimation = 0
            plant.__HoverAnimation.play()
            plant.visible = true
        }
        for(let plant of this.badPlants) plant.visible = false

    }

    increaseWater() {
        this.l4_bucketfront0001.__Animation.play()
        this.l2_bucketback0001.__Animation.play()

        if(this.waterLevel > 6) return
        this.waterLevel += 1
        this.skipDecrease = true

        this.updateWater()
        this.scheduleCheck()
    }

    updateWater() {
        if(this.waterLevel <= 5) this.l3_pipewater.setTexture('shack-bg', `L3-pipewater000${this.waterLevel}`)

        if(this.waterLevel == 6) this.l3_pipewater.__Animation.play()
    }

    decreaseWaterSmall() {
        if(this.waterLevel <= 1 || this.waterLevel > 5)    return

        this.waterLevel -= 1
        this.updateWater()
    }

    decreaseWater() {
        //avoid race conditions by not decreasing if starting animation is playing
        if(this.l5_flowingdown.visible || this.spray1_start.visible || this.spray2_start.visible) return
        //don't decrease instantly after last snowball throw
        if(this.skipDecrease) {
            this.skipDecrease = false
            return
        }
        if(this.waterLevel <= 1) return

        this.waterLevel -= 1

        if(this.waterLevel == 5) {
            this.waterLevel = 1
            this.l3_flowend.__Animation.play()
            this.l3_flowend.visible = true
            this.l3_pipewater.visible = false
        }
    }

    increaseGrowth() {
        for(let plant of this.plants) {
            plant.__HoverAnimation.queuePlay()    
            plant.visible = true
        }

        for(let plant of this.badPlants) plant.visible = false

        if(this.plant0_0.__HoverAnimation.currentAnimation == 0) this.increaseHarvest()
    }

    increaseHarvest() {
        this.harvest.__HoverAnimation.play()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
