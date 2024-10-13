import Button from "@scenes/components/Button";
// You can write more code here

/* START OF COMPILED CODE */

export default class newIglooItem extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // button_playername0001
        const button_playername0001 = scene.add.image(171, 34, "igloomap", "button/playername0001");
        this.add(button_playername0001);

        // icon
        const icon = scene.add.image(35, 33, "igloomap", "icons/buddy");
        this.add(icon);

        // penguin_name
        const penguin_name = scene.add.text(66, 8, "", {});
        penguin_name.text = "Penguin1234\n";
        penguin_name.setStyle({ "color": "#2f77b9", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold" });
        this.add(penguin_name);

        // penguin_name_1
        const penguin_name_1 = scene.add.text(67, 38, "", {});
        penguin_name_1.text = "Likes\n";
        penguin_name_1.setStyle({ "color": "#386790", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "15px" });
        this.add(penguin_name_1);

        // penguin_name_2
        const penguin_name_2 = scene.add.text(114, 37, "", {});
        penguin_name_2.text = "0\n";
        penguin_name_2.setStyle({ "color": "#1f5380", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "17px", "fontStyle": "bold" });
        this.add(penguin_name_2);

        // button_playername0001 (components)
        const button_playername0001Button = new Button(button_playername0001);
        button_playername0001Button.spriteName = "button/playername";
        button_playername0001Button.callback = () => {            this.parentContainer.parentContainer.world.client.sendJoinIgloo(this.id)};
        button_playername0001Button.lazyName = true;

        this.button_playername0001 = button_playername0001;
        this.icon = icon;
        this.penguin_name = penguin_name;
        this.penguin_name_1 = penguin_name_1;
        this.penguin_name_2 = penguin_name_2;

        /* START-USER-CTR-CODE */
        this.id
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    button_playername0001;
    /** @type {Phaser.GameObjects.Image} */
    icon;
    /** @type {Phaser.GameObjects.Text} */
    penguin_name;
    /** @type {Phaser.GameObjects.Text} */
    penguin_name_1;
    /** @type {Phaser.GameObjects.Text} */
    penguin_name_2;

    /* START-USER-CODE */
    setItem(igloo) {
        this.setVisibility(igloo != null)

        if (!igloo) {
            this.clearItem()
            return
        }

        this.id = igloo.id
        this.penguin_name.setText(igloo.username)
        this.penguin_name_2.setText(igloo.likes)
        let relationship = this.parentContainer.parentContainer.world.getRelationship(igloo.id)

        switch (relationship) {
            case 'player':
                relationship = "may"
                break
            case 'online':
                relationship = "happyguy"
                break
            default:
                relationship = "guy"
                break
        }

        let texture = `icons/${relationship}`

        this.icon.setFrame(texture)
    }

    setVisibility(bool) {
        this.penguin_name_2.setVisible(bool)
        this.penguin_name_1.setVisible(bool)
        this.penguin_name.setVisible(bool)
        this.icon.setVisible(bool)
        this.button_playername0001.setVisible(bool)
    }

    clearItem() {
        this.penguin_name.setText("")
        this.penguin_name_2.setText("")
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
