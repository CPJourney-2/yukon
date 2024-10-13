import BaseScene from '@scenes/base/BaseScene'
import Animation from "../../../components/Animation";
import SimpleButton from "../../../components/SimpleButton";
import Server from './server/Server'
import TextInput from '@engine/interface/text/TextInput'
import UnlockPrompt from '@scenes/interface/menus/login/prompts/UnlockPrompt'


/* START OF COMPILED CODE */

export default class Servers extends BaseScene {

    constructor() {
        super("Servers");

        /** @type {Phaser.GameObjects.Sprite} */
        this.unlock;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "load", "bg");
        bg.setOrigin(0, 0);

        // text_2
        const text_2 = this.add.text(1095, 892, "", {});
        text_2.text = "Ultimate safe chat";
        text_2.setStyle({ "fixedWidth":200,"fontFamily": "Arial Narrow", "fontSize": "28px" });

        // safe_small
        const safe_small = this.add.image(1070, 908, "servers", "safe_small");
        safe_small.setOrigin(0.5, 0.5161290322580645);

        // text_1
        const text_1 = this.add.text(645, 892, "", {});
        text_1.text = "Amount of penguins online";
        text_1.setStyle({ "fixedWidth":300,"fontFamily": "Arial Narrow", "fontSize": "28px" });

        // bar_full_small
        this.add.image(620, 908, "servers", "bar_full_small");

        // text
        const text = this.add.text(277, 892, "", {});
        text.text = "Buddies online";
        text.setStyle({ "fixedWidth":200,"fontFamily": "Arial Narrow", "fontSize": "28px" });

        // online_small
        this.add.image(252, 908, "servers", "online_small");

        // more
        const more = this.add.image(1300, 630, "servers", "more");
        more.setOrigin(0.5, 0.5027322404371585);
        more.visible = false;

        // suggested
        const suggested = this.add.text(760, 85, "", {});
        suggested.setOrigin(0.5, 0.5);
        suggested.text = "YOUR SUGGESTED SERVERS";
        suggested.setStyle({ "align": "center", "fixedWidth":1200,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10,"shadow.color": "#000000ff" });

        // unlock
        const unlock = this.add.sprite(1387, 130, "newstart", "unlock_0001");
        unlock.scaleX = 0.8;
        unlock.scaleY = 0.8;

        // unlock (components)
        const unlockAnimation = new Animation(unlock);
        unlockAnimation.key = "unlock_";
        unlockAnimation.end = 200;
        const unlockSimpleButton = new SimpleButton(unlock);
        unlockSimpleButton.callback = () => { this.unlockPrompt.visible = true };

        this.unlock = unlock;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create(data) {
        this._create()

        this.createServers(data);

        //Unlock Code Text Input
        let unlockcodeInputStyle = {
            width: 200,
            height: 45,
            fontFamily: 'Arial',
            fontSize: 24,
            color: '#000',
            background: '#fff',
            backgroundColor: '#ffffff !important',
            visibility: 'hidden',
            border: 'solid 1px black',
        };

        this.unlockcodeInput = new TextInput(
            this,
            728,
            743,
            'text',
            unlockcodeInputStyle,
            null,
            12,
            true,
            'unlockcodeInput'
        );

        this.add.existing(this.unlockcodeInput);
        this.unlockcodeInputElement = document.getElementById('unlockcodeInput');
        this.unlockcodeInputElement.style.visibility = 'hidden';
    }

    createServers(data) {
        let y = 122
        let worlds = Object.entries(this.crumbs.worlds).slice(0, 5).filter(world => !world[1].login)

        for (let [world, config] of worlds) {
            y += 102

            let server = new Server(this, 760, y)

            server.name.text = world
            server.safe.visible = config.safe

            let population = data.populations[world] || 1

            server.setPopulation(population)

            server.button.callback = () => this.onServerClick(world, data.username, data.key, population >= 6, config.safe)

            this.add.existing(server)
        }

        // unlockPrompt
        const unlockPrompt = new UnlockPrompt(this, 760, 480);
        this.add.existing(unlockPrompt);
        unlockPrompt.visible = false;
        this.unlockPrompt = unlockPrompt
    }

    onServerClick(world, username, key, isFull, isSafe) {
        // if (isFull) {
        //     return this.interface.prompt.showError('Sorry this server is full. Please select another server.')
        // }

        this.interface.showLoading(`${this.getString('joining')} ${world}`)
        this.scene.stop()
        this.network.connectGame(world, username, key, isSafe)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
