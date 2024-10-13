import BaseContainer from '@scenes/base/BaseContainer'

import { Animation, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class Switchbox extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Sprite} */
        this.switchone;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchtwo;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchthree;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchfour;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchfive;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchsix;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchseven;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switcheight;
        /** @type {any} */
        this.switch1Callback = () => {};
        /** @type {any} */
        this.switch2Callback = () => {};
        /** @type {any} */
        this.switch3Callback = () => {};
        /** @type {any} */
        this.switch4Callback = () => {};
        /** @type {any} */
        this.switch5Callback = () => {};
        /** @type {any} */
        this.switch6Callback = () => {};
        /** @type {any} */
        this.switch7Callback = () => {};
        /** @type {any} */
        this.switch8Callback = () => {};


        // backswitch
        const backswitch = scene.add.image(-1.9727217727420339, -20.393286744760985, "stage-basic", "switchbox/backswitch");
        backswitch.setOrigin(0.4462381588950688, 0.25765748097396024);
        this.add(backswitch);

        // switchone
        const switchone = scene.add.sprite(-85.15387439032054, -42.82238465586329, "stage-basic", "switchbox/switchone0001");
        switchone.setOrigin(0.43728588048968503, 0.5701605033347966);
        this.add(switchone);

        // switchtwo
        const switchtwo = scene.add.sprite(-57.703988068299054, -46.08164547853494, "stage-basic", "switchbox/switchtwo0001");
        switchtwo.setOrigin(0.4937922323513488, 0.5074036823082193);
        this.add(switchtwo);

        // switchthree
        const switchthree = scene.add.sprite(-31.36977314694127, -59.731902076056144, "stage-basic", "switchbox/switchthree0001");
        switchthree.setOrigin(0.5074553248700521, 0.5293479323863343);
        this.add(switchthree);

        // switchfour
        const switchfour = scene.add.sprite(-10.382478411505076, -35.76522616373438, "stage-basic", "switchbox/switchfour0001");
        switchfour.setOrigin(0.44011665445016207, 0.6628628355283219);
        this.add(switchfour);

        // switchfive
        const switchfive = scene.add.sprite(21.06263566781888, -56.82728423323044, "stage-basic", "switchbox/switchfive0001");
        switchfive.setOrigin(0.5223659746101561, 0.6200432932011414);
        this.add(switchfive);

        // polygon_1
        const polygon_1 = scene.add.polygon(91.4808890697238, -54.12719948399327, "85.5786026203852 57.845043827157255 73.79825336371407 29.56375738151884 76.04074669440516 27.204658058191562 75.13062686066422 16.01018410317816 62.225904782589936 14.860575683690001 63.10657936598133 4.8795970719208555 94.07696888191207 2.237573321746666 97.89322540994145 13.539563808602907 86.91576014974287 16.63787861651676 103.32941938915694 57.927948442468015");
        polygon_1.setOrigin(2.0796491465006435, 0.6068016510658173);
        this.add(polygon_1);

        // switchsix
        const switchsix = scene.add.sprite(50.071300554957816, -42.468759952573464, "stage-basic", "switchbox/switchsix0001");
        switchsix.setOrigin(0.48509913175996644, 0.584689216316827);
        this.add(switchsix);

        // switchseven
        const switchseven = scene.add.sprite(73.08202075262523, -47.76743075819934, "stage-basic", "switchbox/switchseven0001");
        switchseven.setOrigin(0.44672168731563033, 0.45699187848526546);
        this.add(switchseven);

        // switcheight
        const switcheight = scene.add.sprite(95.79531349869978, -46.60038040352333, "stage-basic", "switchbox/switcheight0001");
        switcheight.setOrigin(0.47302199484922575, 0.7061022490743857);
        this.add(switcheight);

        // switchone (components)
        const switchoneSimpleButton = new SimpleButton(switchone);
        switchoneSimpleButton.callback = () => {this.switchboxOne()};
        const switchoneAnimation = new Animation(switchone);
        switchoneAnimation.key = "switchbox/switchone";
        switchoneAnimation.end = 18;
        switchoneAnimation.repeat = 0;
        switchoneAnimation.autoPlay = false;
        switchoneAnimation.onCompleteCallback = () => this.switchone.setFrame('switchbox/switchone0001');

        // switchtwo (components)
        const switchtwoSimpleButton = new SimpleButton(switchtwo);
        switchtwoSimpleButton.callback = () => {this.switchboxTwo()};
        const switchtwoAnimation = new Animation(switchtwo);
        switchtwoAnimation.key = "switchbox/switchtwo";
        switchtwoAnimation.end = 13;
        switchtwoAnimation.repeat = 0;
        switchtwoAnimation.autoPlay = false;
        switchtwoAnimation.onCompleteCallback = () => this.switchtwo.setFrame('switchbox/switchtwo0001');

        // switchthree (components)
        const switchthreeSimpleButton = new SimpleButton(switchthree);
        switchthreeSimpleButton.callback = () => {this.switchboxThree()};
        const switchthreeAnimation = new Animation(switchthree);
        switchthreeAnimation.key = "switchbox/switchthree";
        switchthreeAnimation.end = 15;
        switchthreeAnimation.repeat = 0;
        switchthreeAnimation.autoPlay = false;

        // switchfour (components)
        const switchfourSimpleButton = new SimpleButton(switchfour);
        switchfourSimpleButton.callback = () => {this.switchboxFour()};
        const switchfourAnimation = new Animation(switchfour);
        switchfourAnimation.key = "switchbox/switchfour";
        switchfourAnimation.end = 12;
        switchfourAnimation.repeat = 0;
        switchfourAnimation.autoPlay = false;

        // switchfive (components)
        const switchfiveSimpleButton = new SimpleButton(switchfive);
        switchfiveSimpleButton.callback = () => {this.switchboxFive()};
        const switchfiveAnimation = new Animation(switchfive);
        switchfiveAnimation.key = "switchbox/switchfive";
        switchfiveAnimation.end = 15;
        switchfiveAnimation.repeat = 0;
        switchfiveAnimation.autoPlay = false;

        // polygon_1 (components)
        const polygon_1SimpleButton = new SimpleButton(polygon_1);
        polygon_1SimpleButton.callback = () => this.switchboxEight();

        // switchsix (components)
        const switchsixSimpleButton = new SimpleButton(switchsix);
        switchsixSimpleButton.callback = () => {this.switchboxSix()};
        const switchsixAnimation = new Animation(switchsix);
        switchsixAnimation.key = "switchbox/switchsix";
        switchsixAnimation.end = 13;
        switchsixAnimation.repeat = 0;
        switchsixAnimation.autoPlay = false;
        switchsixAnimation.onCompleteCallback = () => this.switchsix.setFrame('switchbox/switchsix0001');

        // switchseven (components)
        const switchsevenSimpleButton = new SimpleButton(switchseven);
        switchsevenSimpleButton.callback = () => {this.switchboxSeven()};
        const switchsevenAnimation = new Animation(switchseven);
        switchsevenAnimation.key = "switchbox/switchseven";
        switchsevenAnimation.end = 14;
        switchsevenAnimation.repeat = 0;
        switchsevenAnimation.autoPlay = false;
        switchsevenAnimation.onCompleteCallback = () => this.switchseven.setFrame('switchbox/switchseven0001');

        // switcheight (components)
        const switcheightAnimation = new Animation(switcheight);
        switcheightAnimation.key = "switchbox/switcheight";
        switcheightAnimation.end = 13;
        switcheightAnimation.repeat = 0;
        switcheightAnimation.autoPlay = false;
        switcheightAnimation.onCompleteCallback = () => this.switcheight.setFrame('switchbox/switcheight0001');

        this.switchone = switchone;
        this.switchtwo = switchtwo;
        this.switchthree = switchthree;
        this.switchfour = switchfour;
        this.switchfive = switchfive;
        this.switchsix = switchsix;
        this.switchseven = switchseven;
        this.switcheight = switcheight;

        /* START-USER-CTR-CODE */
        this._dontHideInputs = true
        this.helmet = 1;
        
        this.switchone.on('animationupdate',() => {
            if(this.switchone.anims.currentFrame.index == 9) this.switch1Callback()
        })
        this.switchtwo.on('animationupdate',() => {
            if(this.switchtwo.anims.currentFrame.index == 8) this.switch2Callback()
        })
        this.switchthree.on('animationupdate',() => {
            if(this.switchthree.anims.currentFrame.index == 6) this.switch3Callback()
        })
        this.switchfour.on('animationupdate',() => {
            if(this.switchfour.anims.currentFrame.index == 6) this.switch4Callback()
        })
        this.switchfive.on('animationupdate',() => {
            if(this.switchfive.anims.currentFrame.index == 6) this.switch5Callback()
        })
        this.switchsix.on('animationupdate',() => {
            if(this.switchsix.anims.currentFrame.index == 8) this.switch6Callback()
        })
        this.switchseven.on('animationupdate',() => {
            if(this.switchseven.anims.currentFrame.index == 10) this.switch7Callback()
        })
        this.switcheight.on('animationupdate',() => {
            if(this.switcheight.anims.currentFrame.index == 8) this.switch8Callback()
        })
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    addStamp() {
        this.world.client.stampEarned(9)    
    }
    switchboxOne(){
        this.helmet *= 2
        this.checkHelmet()
        this.addStamp()
        if(!this.switchone.anims.isPlaying) this.switchone.__Animation.play()
        //this.switch1Callback()
    }
    switchboxTwo(){
        this.helmet *= 3
        this.checkHelmet()
        this.addStamp()
        if(!this.switchtwo.anims.isPlaying) this.switchtwo.__Animation.play()
        //this.switch2Callback()
    }
    switchboxThree(){
        this.helmet *= 5
        this.addStamp()
        if(!this.switchthree.anims.isPlaying) this.switchthree.__Animation.play()
        //this.switch3Callback()
    }
    switchboxFour(){
        this.helmet *= 7
        this.checkHelmet()
        this.addStamp()
        if(!this.switchfour.anims.isPlaying) this.switchfour.__Animation.play()
        //this.switch4Callback()
    }
    switchboxFive(){
        this.helmet *= 11
        this.addStamp()
        if(!this.switchfive.anims.isPlaying) this.switchfive.__Animation.play()
        //this.switch5Callback()
    }
    switchboxSix(){
        this.helmet *= 13
        this.checkHelmet()
        this.addStamp()
        if(!this.switchsix.anims.isPlaying) this.switchsix.__Animation.play()
        //this.switch6Callback()
    }
    switchboxSeven(){
        this.helmet *= 17
        this.checkHelmet()
        this.addStamp()
        if(!this.switchseven.anims.isPlaying) this.switchseven.__Animation.play()
        //this.switch7Callback()
    }
    switchboxEight(){
        this.helmet = 1
        this.addStamp()
        if(!this.switcheight.anims.isPlaying) this.switcheight.__Animation.play()
        //this.switch8Callback()
    }
    checkHelmet() {
        if (this.helmet == 9282){
            this.interface.prompt.showItem(1734)
            //this.stampEarned(600)
            this.helmet = 1
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
