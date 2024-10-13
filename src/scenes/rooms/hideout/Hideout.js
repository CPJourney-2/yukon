import RoomScene from '@rooms/RoomScene'
import { HoverAnimation, Button, MoveTo, SimpleButton, Zone, ShowHint, ZoneTrigger } from '@components/components'
import RoomPin from '@rooms/RoomPin'

import mat from "../dojo/mat"

/* START OF COMPILED CODE */

export default class Hideout extends RoomScene {

    constructor() {
        super("Hideout");

        /** @type {Phaser.GameObjects.Sprite} */
        this.gong01;
        /** @type {Phaser.GameObjects.Sprite} */
        this.gong02;
        /** @type {Phaser.GameObjects.Sprite} */
        this.gong03;
        /** @type {Phaser.GameObjects.Sprite} */
        this.gong04;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.gong_hitbox_1;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.gong_hitbox_2;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.gong_hitbox_3;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.gong_hitbox_4;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'catalog': () => this.interface.loadWidget('Martial'),
            'courtyard': () => this.triggerRoom(319, 224, 741)
        }
        this.music = 21
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("hideout-pack", "assets/media/rooms/hideout/hideout-pack.json");
        this.load.pack("dojo-pack", "assets/media/rooms/dojo/dojo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(760, 480, "hideout", "bg");

        // panel
        this.add.image(977, 349, "hideout", "panel");

        // door
        const door = this.add.image(397.68505558780316, 383.25977764878735, "hideout", "door");
        door.setOrigin(0.41579444463413623, 0.8817318509919156);

        // lamp
        this.add.image(615, 358, "hideout", "lamp");

        // store_mc
        const store_mc = this.add.image(774.1603365653054, 442.1721132694897, "hideout", "store_mc");
        store_mc.setOrigin(0.4824605054759291, 0.9693192946822937);

        // fronttable
        this.add.image(778, 325, "hideout", "fronttable");

        // tablesone
        const tablesone = this.add.image(180.65662719628565, 457.51205118390453, "hideout", "tablesone");
        tablesone.setOrigin(0.5410444619587523, 0.6554216959504755);

        // tablestwo
        const tablestwo = this.add.image(1384.6310480375125, 478.44636684264833, "hideout", "tablestwo");
        tablestwo.setOrigin(0.5198276339349033, 0.708950839127825);

        // trees2
        const trees2 = this.add.image(1158, 465, "hideout", "trees2");

        // trees1
        const trees1 = this.add.image(386.2262426703543, 480.90243515998293, "hideout", "trees1");
        trees1.setOrigin(0.4271360078539832, 0.7494579731110163);

        // stairs
        const stairs = this.add.image(222.75623942567782, 495.07487310813383, "hideout", "stairs");
        stairs.setOrigin(0.48481391913140004, 0.39147924233225195);

        // overlay
        const overlay = this.add.image(771.8564049044276, 857.1590921025945, "hideout", "overlay");
        overlay.setOrigin(0.4979900287112708, 0.7649773643777568);

        // sign
        const sign = this.add.image(573.8091909619568, 1853.868584681816, "hideout", "sign");
        sign.setOrigin(-0.15359876668152428, 15.18532698882895);

        // gong01
        const gong01 = this.add.sprite(141, 228, "hideout", "gong010001");

        // gong02
        const gong02 = this.add.sprite(401, 165, "hideout", "gong020001");

        // gong03
        const gong03 = this.add.sprite(1149, 154, "hideout", "gong030001");

        // gong04
        const gong04 = this.add.sprite(1438, 142, "hideout", "gong040001");

        // gong_hitbox_1
        const gong_hitbox_1 = this.add.ellipse(154, 243, 128, 128);
        gong_hitbox_1.scaleX = 0.6792581307511806;
        gong_hitbox_1.scaleY = 0.774301658718831;

        // gong_hitbox_2
        const gong_hitbox_2 = this.add.ellipse(399, 174, 128, 128);
        gong_hitbox_2.scaleX = 0.9032542947979699;
        gong_hitbox_2.scaleY = 0.8601156961257679;

        // gong_hitbox_3
        const gong_hitbox_3 = this.add.ellipse(1156, 165, 128, 128);
        gong_hitbox_3.scaleX = 1.1443758382478955;
        gong_hitbox_3.scaleY = 1.155643105014473;

        // gong_hitbox_4
        const gong_hitbox_4 = this.add.ellipse(1411, 180, 128, 128);
        gong_hitbox_4.scaleX = 1.375925484283166;
        gong_hitbox_4.scaleY = 1.794112210988597;

        // book
        const book = this.add.image(1413, 969.903109266284, "hideout-martial", "catalogbtn");
        book.setOrigin(0.5, 2.278431778858054);

        // mat2
        const mat2 = new mat(this, 461, 629, "hideout", "waddle1");
        this.add.existing(mat2);

        // mat_1
        const mat_1 = new mat(this, 343, 827, "hideout", "waddle2");
        this.add.existing(mat_1);

        // mat99
        const mat99 = new mat(this, 1191, 829, "hideout", "waddle2");
        this.add.existing(mat99);
        mat99.flipX = true;
        mat99.flipY = false;

        // mat_2
        const mat_2 = new mat(this, 1084, 628, "hideout", "waddle1");
        this.add.existing(mat_2);
        mat_2.flipX = true;
        mat_2.flipY = false;

        // cards_button
        const cards_button = this.add.image(1427, 965, "dojo", "cards_button");
        cards_button.setOrigin(0.5, 1.245409073326819);

        // lists
        const sort = [store_mc, trees1, trees2, tablestwo, tablesone, sign, stairs, overlay, book, cards_button];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = this.x;
        doorMoveTo.y = this.y;

        // book (components)
        const bookButton = new Button(book);
        bookButton.callback = () => this.interface.loadWidget('Martial');

        // mat2 (prefab fields)
        mat2.waddleid = "204";

        // mat_1 (prefab fields)
        mat_1.waddleid = "205";

        // mat99 (prefab fields)
        mat99.waddleid = "206";

        // mat_2 (prefab fields)
        mat_2.waddleid = "207";

        // cards_button (components)
        const cards_buttonButton = new Button(cards_button);
        cards_buttonButton.spriteName = "cards_button";
        cards_buttonButton.callback = () => this.onNinjaProgress();

        this.gong01 = gong01;
        this.gong02 = gong02;
        this.gong03 = gong03;
        this.gong04 = gong04;
        this.gong_hitbox_1 = gong_hitbox_1;
        this.gong_hitbox_2 = gong_hitbox_2;
        this.gong_hitbox_3 = gong_hitbox_3;
        this.gong_hitbox_4 = gong_hitbox_4;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

create() {
  super.create();
  this.bounds = {};
  this.bounds.gong_hitbox_1 = this.gong_hitbox_1.getBounds();
  this.bounds.gong_hitbox_2 = this.gong_hitbox_2.getBounds();
  this.bounds.gong_hitbox_3 = this.gong_hitbox_3.getBounds();
  this.bounds.gong_hitbox_4 = this.gong_hitbox_4.getBounds();

  this.animations = {
    gong_hitbox_1: "gong1",
    gong_hitbox_2: "gong2",
    gong_hitbox_3: "gong3",
    gong_hitbox_4: "gong4",
  };

}

onSnowballComplete(x, y) {
  for (let hitbox in this.bounds) {
    if (this.bounds.hasOwnProperty(hitbox) && this.bounds[hitbox].contains(x, y)) {
      const sound = 'gong' + hitbox.charAt(hitbox.length - 1);
      this.soundManager.playSfx(sound);

      switch (hitbox) {
        case "gong_hitbox_1":
          this.gong01.play('gong1');
          break;
        case "gong_hitbox_2":
          this.gong02.play('gong2');
          break;
        case "gong_hitbox_3":
          this.gong03.play('gong3');
          break;
        case "gong_hitbox_4":
          this.gong04.play('gong4');
          break;
      }
      break;
    }
  }
}
    onNinjaProgress() {
        this.interface.loadWidget("CJNinjaProgress")    
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
