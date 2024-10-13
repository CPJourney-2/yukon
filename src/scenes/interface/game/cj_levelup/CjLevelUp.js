import BaseContainer from '@scenes/base/BaseContainer'
import { Animation, Buatton, MoveTo, SimpleButton, Interactive } from '@components/components'

// You can write more code here
export const preload = {
    key: 'cjlevelup',
    url: 'assets/media/games/card/cjlevelup.json',
    loadString: ['loading', 'Card UI']
}
/* START OF COMPILED CODE */

export default class CjLevelUp extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 550, y ?? 376);

        /** @type {Phaser.GameObjects.Image} */
        this.speech;
        /** @type {Phaser.GameObjects.Text} */
        this.text_1;
        /** @type {Phaser.GameObjects.Container} */
        this.belt;
        /** @type {Phaser.GameObjects.Sprite} */
        this.belt_beltcolour0001;
        /** @type {Phaser.GameObjects.Container} */
        this.mask1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mask_mask0001;


        // rectangle_1
        const rectangle_1 = scene.add.rectangle(184, 116, 128, 128);
        rectangle_1.scaleX = 28.01184818668493;
        rectangle_1.scaleY = 12.663820491097233;
        rectangle_1.isFilled = true;
        rectangle_1.fillAlpha = 0;
        this.add(rectangle_1);

        // bg
        const bg = scene.add.image(101, 180, "levelup", "bg");
        this.add(bg);

        // sensay_sensay0001
        const sensay_sensay0001 = scene.add.sprite(-283, 95, "levelup", "sensay/sensay0001");
        this.add(sensay_sensay0001);

        // speech
        const speech = scene.add.image(377, -115, "levelup", "speech");
        speech.visible = false;
        this.add(speech);

        // text_1
        const text_1 = scene.add.text(20, -228, "", {});
        text_1.visible = false;
        text_1.text = "Congratulations!\nMuch like the fearsome earthquake,\nYou have rocked the house.";
        text_1.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":800,"fixedHeight":150,"fontFamily": "CCComicrazy", "fontSize": "35px" });
        this.add(text_1);

        // rectangle
        const rectangle = scene.add.rectangle(148, 55, 128, 128);
        rectangle.scaleX = 28.01184818668493;
        rectangle.scaleY = 12.663820491097233;
        rectangle.isFilled = true;
        rectangle.fillAlpha = 0;
        this.add(rectangle);

        // belt
        const belt = scene.add.container(409, 236);
        belt.alpha = 0;
        this.add(belt);

        // belt_blackbelt0001
        const belt_blackbelt0001 = scene.add.sprite(0, 2, "levelup", "belt/blackbelt0001");
        belt.add(belt_blackbelt0001);

        // belt_beltcolour0001
        const belt_beltcolour0001 = scene.add.sprite(1, 0, "levelup", "belt/beltcolour0001");
        belt.add(belt_beltcolour0001);

        // belt_beltshadow0001
        const belt_beltshadow0001 = scene.add.sprite(1, 5, "levelup", "belt/beltshadow0001");
        belt.add(belt_beltshadow0001);

        // mask1
        const mask1 = scene.add.container(440, 217);
        mask1.visible = false;
        this.add(mask1);

        // mask_mask0001
        const mask_mask0001 = scene.add.sprite(0, -58, "levelup", "mask/mask0001");
        mask_mask0001.scaleX = 0.8;
        mask_mask0001.scaleY = 0.8;
        mask1.add(mask_mask0001);

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // sensay_sensay0001 (components)
        const sensay_sensay0001Animation = new Animation(sensay_sensay0001);
        sensay_sensay0001Animation.end = 103;

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.callback = () => {this.onClick()};

        // mask_mask0001 (components)
        const mask_mask0001Animation = new Animation(mask_mask0001);
        mask_mask0001Animation.end = 6;
        mask_mask0001Animation.repeat = 0;
        mask_mask0001Animation.autoPlay = false;

        this.speech = speech;
        this.text_1 = text_1;
        this.belt = belt;
        this.belt_beltcolour0001 = belt_beltcolour0001;
        this.mask1 = mask1;
        this.mask_mask0001 = mask_mask0001;

        /* START-USER-CTR-CODE */
        this.click = 0
        this.BELT_NAME = "%BELT_NAME%"
        this.world.network.send("get_my_level")
        this.network.events.on('get_my_level', this.setBelt, this)

        this.award
        this.text1
        this.text2
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    setBelt(args) {
        this.network.events.off('get_my_level', this.setBelt, this)

        let belt = args.belt

        if (args.belt == null) return

        let belts = {
            "white": 16777215,
            "yellow": 16776960,
            "orange": 16737792,
            "green": 3394560,
            "blue": 13260,
            "red": 13369344,
            "purple": 6684927,
            "brown": 6697728,
            "black": 4473924,
        }

        this.belt_beltcolour0001.setTintFill(belts[belt])

        if (belt == "ninja") {
            this.text1 = "Well done, grasshopper.\nWear this Ninja Mark with pride.\nYou have passed the test"
            this.text2 = "But remember that\nEven a ninja master\nMust seek more training."

            this.award = this.mask1

            this.text_1.setText(this.text1)


            this.speech.visible = true
            this.text_1.visible = true

            return
        }

        this.text1 = "Congratulations!\nMuch like the fearsome earthquake,\nYou have rocked the house."
        this.BELT_NAME = `${belt[0].toUpperCase() + belt.substring(1)} Belt`
        this.text2 = `Well done. You have earned\na ${this.BELT_NAME} for your efforts.\nI am proud of you.`

        this.award = this.belt

        this.text_1.setText(this.text1)

        this.speech.visible = true
        this.text_1.visible = true
    }

    onClick() {
        if (this.click >= 1) {
            this.interface.destroyWidget(this)
            return
        }

        if (this.award == this.mask1) {
            this.mask1.visible = true

            this.scene.tweens.add({
                targets: [this.mask_mask0001],
                y: {
                    from: this.mask_mask0001.y,
                    to: -50
                },
                repeat: -1,
                yoyo: true,
                ease: 'Quad.easeInOut',
                duration: 800,
            })        
        } else {
            this.belt.visible = true

            this.scene.tweens.add({
                targets: [this.belt],
                alpha: {
                    from: 0,
                    to: 1
                },
                ease: 'Quad.easeInOut',
                duration: 50,
                onComplete: () => {
                    this.scene.tweens.add({
                        targets: [this.belt],
                        y: {
                            from: this.belt.y,
                            to: 245
                        },
                        repeat: -1,
                        yoyo: true,
                        ease: 'Quad.easeInOut',
                        duration: 800,
                    })  
                }
            })        
        }

        this.text_1.setText(this.text2)



        this.click++
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
