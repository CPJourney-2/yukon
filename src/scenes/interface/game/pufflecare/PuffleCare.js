import BaseContainer from '@scenes/base/BaseContainer';
import { DraggableContainer, Button, ShowHint } from '@scenes/components/components';
import PuffleInv from './PuffleInv';

export const preload = {
    key: 'pufflecare-pack',
    url: 'assets/media/interface/game/pufflecare/pufflcare-pack.json',
    loadString: ['loading', 'Puffle Care'],
};
/* START OF COMPILED CODE */

export default class PuffleCare extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 233);

        // frame
        const frame = scene.add.image(0, 247, "main", "card-bg");
        this.add(frame);

        // puffleInventory
        const puffleInventory = new PuffleInv(scene, -161, 263);
        this.add(puffleInventory);

        // closebtn0001
        const closebtn0001 = scene.add.image(179, 11, "main", "blue-button");
        this.add(closebtn0001);

        // blue_x
        const blue_x = scene.add.image(179, 9, "main", "blue-x");
        this.add(blue_x);

        // bg
        const bg = scene.add.image(0, 249, "pufflecare", "bg");
        this.add(bg);

        // puffle_name
        const puffle_name = scene.add.text(0, 21, "", {});
        puffle_name.setOrigin(0.5, 0.5);
        puffle_name.visible = false;
        puffle_name.text = "real life piffle";
        puffle_name.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":300,"fixedHeight":60,"fontFamily": "Arial", "fontSize": "30px", "fontStyle": "bold" });
        this.add(puffle_name);

        // puffle_info_text
        const puffle_info_text = scene.add.image(-106, 362, "pufflecare", "puffle_info_text");
        puffle_info_text.visible = false;
        this.add(puffle_info_text);

        // puffle_bar_rest
        const puffle_bar_rest = scene.add.image(73, 406, "pufflecare", "puffle_bar_10");
        puffle_bar_rest.visible = false;
        this.add(puffle_bar_rest);

        // puffle_bar_health
        const puffle_bar_health = scene.add.image(70, 362, "pufflecare", "puffle_bar_10");
        puffle_bar_health.visible = false;
        this.add(puffle_bar_health);

        // puffle_bar_energy
        const puffle_bar_energy = scene.add.image(72, 319, "pufflecare", "puffle_bar_10");
        puffle_bar_energy.visible = false;
        this.add(puffle_bar_energy);

        // puffle_icon
        const puffle_icon = scene.add.image(0, 177, "pufflecare", "puffle/0");
        puffle_icon.visible = false;
        this.add(puffle_icon);

        // btn0001
        const btn0001 = scene.add.image(-122, 505, "main", "blue-button");
        this.add(btn0001);

        // btn
        const btn = scene.add.image(-62, 505, "main", "blue-button");
        this.add(btn);

        // btn_1
        const btn_1 = scene.add.image(-4, 505, "main", "blue-button");
        this.add(btn_1);

        // btn_2
        const btn_2 = scene.add.image(57, 505, "main", "blue-button");
        this.add(btn_2);

        // btn_3
        const btn_3 = scene.add.image(120, 505, "main", "blue-button");
        this.add(btn_3);

        // btn_beach
        const btn_beach = scene.add.image(-122, 502, "pufflecare", "btn-beach");
        this.add(btn_beach);

        // btn_sleep
        const btn_sleep = scene.add.image(-62, 504, "pufflecare", "btn-sleep");
        this.add(btn_sleep);

        // btn_cookie
        const btn_cookie = scene.add.image(-4, 504, "pufflecare", "btn-cookie");
        this.add(btn_cookie);

        // btn_walk
        const btn_walk = scene.add.image(58, 504, "pufflecare", "btn-walk");
        this.add(btn_walk);

        // pufflecare_returntowild
        const pufflecare_returntowild = scene.add.image(121, 504, "pufflecare", "btn-returntowild");
        this.add(pufflecare_returntowild);

        // spinner
        const spinner = scene.add.image(4, 250, "load", "spinner");
        this.add(spinner);

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = frame;

        // closebtn0001 (components)
        const closebtn0001Button = new Button(closebtn0001);
        closebtn0001Button.spriteName = "blue-button";
        closebtn0001Button.callback = () => this.close();
        closebtn0001Button.activeFrame = true;

        // btn0001 (components)
        const btn0001Button = new Button(btn0001);
        btn0001Button.spriteName = "blue-button";
        btn0001Button.callback = () => {this.pufflePlay()};
        btn0001Button.activeFrame = true;
        const btn0001ShowHint = new ShowHint(btn0001);
        btn0001ShowHint.text = "Play with Pet";

        // btn (components)
        const btnButton = new Button(btn);
        btnButton.spriteName = "blue-button";
        btnButton.callback = () => {this.puffleSleep()};
        btnButton.activeFrame = true;
        const btnShowHint = new ShowHint(btn);
        btnShowHint.text = "Sleep";

        // btn_1 (components)
        const btn_1Button = new Button(btn_1);
        btn_1Button.spriteName = "blue-button";
        btn_1Button.callback = () => {this.openInventory()};
        btn_1Button.activeFrame = true;
        const btn_1ShowHint = new ShowHint(btn_1);
        btn_1ShowHint.text = "Feed your Pet";

        // btn_2 (components)
        const btn_2Button = new Button(btn_2);
        btn_2Button.spriteName = "blue-button";
        btn_2Button.callback = () => {this.puffleWalk()};
        btn_2Button.activeFrame = true;
        const btn_2ShowHint = new ShowHint(btn_2);
        btn_2ShowHint.text = "Walk your Pet";

        // btn_3 (components)
        const btn_3Button = new Button(btn_3);
        btn_3Button.spriteName = "blue-button";
        btn_3Button.callback = () => {this.puffleDiscard()};
        btn_3Button.activeFrame = true;
        const btn_3ShowHint = new ShowHint(btn_3);
        btn_3ShowHint.text = "Return to Wild";

        this.puffleInventory = puffleInventory;
        this.puffle_name = puffle_name;
        this.puffle_info_text = puffle_info_text;
        this.puffle_bar_rest = puffle_bar_rest;
        this.puffle_bar_health = puffle_bar_health;
        this.puffle_bar_energy = puffle_bar_energy;
        this.puffle_icon = puffle_icon;
        this.spinner = spinner;

        /* START-USER-CTR-CODE */
        this._dontHideInputs = true
        this.setVisibility(false)

        this.tween = this.scene.tweens.add({
            targets: this.spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        /* END-USER-CTR-CODE */
    }

    /** @type {PuffleInv} */
    puffleInventory;
    /** @type {Phaser.GameObjects.Text} */
    puffle_name;
    /** @type {Phaser.GameObjects.Image} */
    puffle_info_text;
    /** @type {Phaser.GameObjects.Image} */
    puffle_bar_rest;
    /** @type {Phaser.GameObjects.Image} */
    puffle_bar_health;
    /** @type {Phaser.GameObjects.Image} */
    puffle_bar_energy;
    /** @type {Phaser.GameObjects.Image} */
    puffle_icon;
    /** @type {Phaser.GameObjects.Image} */
    spinner;

    /* START-USER-CODE */

    // Write your code here.

    setVisibility(bool) {
        this.spinner.visible = !bool
        this.puffle_icon.visible = bool
        this.puffle_bar_energy.visible = bool
        this.puffle_bar_health.visible = bool
        this.puffle_bar_rest.visible = bool
        this.puffle_name.visible = bool
        this.puffle_info_text.visible = bool
    }

    showPuffle(args) {
        this.setVisibility(true)

        this.puffle_name.text = args.name;
        this.puffle_icon.setTexture('pufflecare', `puffle/${args.type}`);
        switch (args.type) {
            case 12:
                this.puffle_icon.scale = 0.9;
                break;
            default:
                this.puffle_icon.scale = 1;
                break;
        }

        // round to nearest 10
        let energy = args.energy;
        let health = args.health;
        let rest = args.rest;

        if (energy % 10 > 5) {
            energy = energy + (10 - (energy % 10));
        } else {
            energy = energy - (energy % 10);
        }

        if (health % 10 > 5) {
            health = health + (10 - (health % 10));
        } else {
            health = health - (health % 10);
        }

        if (rest % 10 > 5) {
            rest = rest + (10 - (rest % 10));
        } else {
            rest = rest - (rest % 10);
        }

        this.puffle_bar_energy.setTexture(
            'pufflecare',
            `puffle_bar_${Math.max(1, energy / 10)}`
        );
        this.puffle_bar_health.setTexture(
            'pufflecare',
            `puffle_bar_${Math.max(1, health / 10)}`
        );
        this.puffle_bar_rest.setTexture(
            'pufflecare',
            `puffle_bar_${Math.max(1, rest / 10)}`
        );

        this.visible = true;

        this.args = args;
    }

    puffleSleep() {
        this.world.room.puffles[this.args.puffleId].sleep();
        this.close();
    }

    puffleWalk() {
        this.visible = false;
        this.world.network.send('walk_puffle', { puffle: this.args.puffleId });
        this.close();
    }

    pufflePlay() {
        this.world.room.puffles[this.args.puffleId].playwith();
        this.close();
    }

    puffleDiscard() {
        let discardText = `Are you sure you want to return ${this.args.name}\nto the wild? This cannot be undone.`
        this.interface.prompt.showWindow(discardText, 'dual', () => {
            this.world.network.send('discard_puffle', { puffle: this.args.puffleId });

            this.interface.prompt.window.visible = false
            this.close();
        })
    }

    openInventory(){
        this.puffleInventory.onTabClick();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
