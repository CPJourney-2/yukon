import BaseContainer from '@scenes/base/BaseContainer'
import { Button, Interactive, SimpleButton, DraggableContainer, Draggable, ShowHint} from '@components/components'
import InputText from 'phaser3-rex-plugins/plugins/inputtext.js'
// You can write more code here

/* START OF COMPILED CODE */

export default class PenguinSpawner extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.put_cmd_here;
        /** @type {Phaser.GameObjects.Container} */
        this.container_3;


        // bg
        const bg = scene.add.nineslice(184, -40, "prompt", "window", 500, 550, 44, 39, 40, 41);
        this.add(bg);

        // text_1
        const text_1 = scene.add.text(24, -270, "", {});
        text_1.text = "Penguin Spawner";
        text_1.setStyle({ "fontFamily": "Burbank Small", "fontSize": "38px", "fontStyle": "bold" });
        this.add(text_1);

        // text
        const text = scene.add.text(9, -201, "", {});
        text.text = "FOR DEBUG PURPOSES ONLY. Penguins you spawn with this tool will only be seen by you.";
        text.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold" });
        text.setWordWrapWidth(400);
        this.add(text);

        // verify_btn_1
        const verify_btn_1 = scene.add.image(188, -76, "main", "help-button");
        verify_btn_1.scaleX = 0.5;
        verify_btn_1.scaleY = 0.5;
        this.add(verify_btn_1);

        // text_6
        const text_6 = scene.add.text(73, -94, "", {});
        text_6.text = "Spawn New Penguin";
        text_6.setStyle({ "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold" });
        this.add(text_6);

        // text_8
        const text_8 = scene.add.text(24, -33, "", {});
        text_8.text = "MANIPULATE PENGUIN";
        text_8.setStyle({ "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
        this.add(text_8);

        // verify_btn
        const verify_btn = scene.add.image(198, 177, "main", "help-button");
        verify_btn.scaleX = 0.5;
        verify_btn.scaleY = 0.5;
        this.add(verify_btn);

        // text_9
        const text_9 = scene.add.text(158, 161, "", {});
        text_9.text = "Invoke";
        text_9.setStyle({ "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold" });
        this.add(text_9);

        // text_11
        const text_11 = scene.add.text(-9, 6, "", {});
        text_11.text = "Enter a command prompt. You'll need to\nconsult the comments in the code\nbecause chris was lazy.";
        text_11.setStyle({ "fontFamily": "Burbank Small", "fontSize": "21px", "fontStyle": "bold" });
        this.add(text_11);

        // x_button_1
        const x_button_1 = scene.add.image(380, -264, "main", "blue-button");
        this.add(x_button_1);

        // x_button_3
        const x_button_3 = scene.add.image(379, -267, "main", "blue-x");
        this.add(x_button_3);

        // container_3
        const container_3 = scene.add.container(168, 111);
        this.add(container_3);

        // put_cmd_here
        const put_cmd_here = scene.add.rectangle(0, 0, 350, 40);
        put_cmd_here.isFilled = true;
        container_3.add(put_cmd_here);

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = bg;

        // verify_btn_1 (components)
        const verify_btn_1Button = new Button(verify_btn_1);
        verify_btn_1Button.spriteName = "help-button";
        verify_btn_1Button.callback = () => this.spawnNewPenguin();

        // verify_btn (components)
        const verify_btnButton = new Button(verify_btn);
        verify_btnButton.spriteName = "help-button";
        verify_btnButton.callback = () => this.processCommand();

        // x_button_1 (components)
        const x_button_1Button = new Button(x_button_1);
        x_button_1Button.spriteName = "blue-button";
        x_button_1Button.callback = () => this.close();
        x_button_1Button.activeFrame = true;

        this.put_cmd_here = put_cmd_here;
        this.container_3 = container_3;

        /* START-USER-CTR-CODE */
        this._dontHideInputs = true
        this.tomfooleryId = 0
        this.coordToolEnabled = false
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    show() {
        if(this.world.client.rank < 6) return
        super.show()
        if (this.cmdInput === undefined) {
            this.cmdInput = new InputText(this.scene, this.put_cmd_here.x, this.put_cmd_here.y, 0, 0, { id: 'penguinspawner-cmd', backgroundColor: 'green',  placeholder: "AHHHHHHHHHHHHH", fontSize: "21px", color: "black", maxLength: 30});
            this.container_3.add(this.cmdInput);
            this.cmdInput.depth = 1002
            this.cmdInput.on('focus', () => { this.scene.game.input.keyboard.enabled = false})
            this.cmdInput.on('blur', () => { this.scene.game.input.keyboard.enabled = true })
            this.cmdInput.on('keydown', (i,e) => { if(e.key === 'Enter') this.processCommand() })
        }
        this.cmdInput.visible = true
        this.cmdInput.resize(this.put_cmd_here.width, this.put_cmd_here.height)
        document.getElementById('penguinspawner-cmd').style.visibility = 'visible'
    }

    close() {
        super.close()

        if (this.cmdInput) {
            this.cmdInput.resize(0, 0)
            this.cmdInput.visible = false
            document.getElementById('penguinspawner-cmd').style.visibility = 'hidden'
        }
    }

    toggleCoordTool() {
        this.coordToolEnabled = !this.coordToolEnabled
        if(this.coordToolEnabled) {
            this.world.client.input.on('pointermove',(p,t) => this.showCoordHint(p,t,this.interface.loadedWidgets.ModPanel.pointerFollower))
        } else {
            this.world.client.input.off('pointermove',(p,t) => this.showCoordHint(p,t,this.interface.loadedWidgets.ModPanel.pointerFollower))
        }
    }

    showCoordHint(pointer,t,f) {
        f.x = pointer.x
        f.y = pointer.y
        this.scene.interface.hint.showHint(f,`${Math.floor(pointer.x)}, ${Math.floor(pointer.y)}`)
    }

    get room() {
        return this.world.room
    }

    spawnNewPenguin() {
        if(this.world.client.rank < 6) return
        if(!this.world.room) return
        let tomfoolery = {
            body: 0,
            color:1,
            displayName:`d${this.tomfooleryId}`,
            email_verified:0,
            NOT_REAL: 1,
            face:0,
            feet:0,
            flag:0,
            frame:1,
            hand:0,
            head:0,
            id:`d${this.tomfooleryId}`,
            iglooBounds:1,
            iglooOpen:1,
            transform:0,
            igloo_slot:0, joinTime:1234567, mascotGiveaway:undefined, neck     :     0, photo     :     0, username:`d${this.tomfooleryId}`, username_verified     :     1, walking     :     0, walkingPuffleType     :     undefined, x     :     0, y     :     0
        }
        this.world.addPenguin(tomfoolery)
        this.tomfooleryId++
    }

    error(err) {
        this.interface.prompt.showError(err)
    }

    processCommand() {
        /*
            LIST OF COMMANDS:

            destroy (or 'despawn') - Will destroy a specific penguin in the room, or all at once.
                'destroy all' will destroy all dummy penguins.
                'destroy (id)' will destroy a penguin with that specific ID. For example 'destroy 900005'

            set - Set the clothing, transform or frame of a particular penguin, or all at once.
                Command structure is: set (id, or "all") (clothing slot like "body" or "color", OR "frame", OR "transform") (item/frame id/transform id)

                Running SPECIFICALLY "set all color random" will set all penguins to a differing random color.

                Examples:
                set all color 16
                set 900013 body 1964
                set all frame 26
                set all transform 3
            
            move - Move a particular penguin, or all of them, to a specified X and Y coordinate.
                Command structure is: move (id, or "all") (x number) (y number)

                You can also do "move (id, or "all") random" to move to a random set of coordinates.

                Examples:
                move all 760 480
                move 900004 238 194
                move 900234 random
                move all self (this moves all penguins to you)

            spawn - Spawn a defined amount of penguins. Try 'spawn 999999' if you're not a coward.
                Command structure is: spawn (number of penguins to spawn)

                Example: spawn 420

            herd - Bring 

        */

        if(this.world.client.rank < 6) return
        let text = this.cmdInput.text.toString().toLowerCase()
        let command = text.split(' ')[0]
        let args = text.split(' ')

        if(command == 'destroy' || command == 'despawn') {
            if(args[1] == 'all') {
                for(let p of Object.values(this.room.dummyPenguins)) {
                    if(!p) continue
                    this.room.removePenguin(p.id)
                }
                this.tomfooleryId = 0
                return
            } else if(args[1] == 'random') {
                //https://stackoverflow.com/questions/2532218
                let keys = Object.keys(this.room.dummyPenguins);
                let randomPenguin = this.room.dummyPenguins[keys[ keys.length * Math.random() << 0]];
                if(!randomPenguin) return
                this.room.removePenguin(randomPenguin.id)
                return
            }
            let peng = this.room.dummyPenguins[args[1]]
            if(!peng) return this.error('Penguin does not exist.')
            this.room.removePenguin(peng.id)
        }

        if(command == 'move') {
            if(args[1] == 'all') {
                for(let p of Object.values(this.room.dummyPenguins)) {
                    if(!p) continue
                    let x = args[2]
                    let y = args[3]
                    if(args[2] == 'random') {
                        x = Phaser.Math.Between(0,1520)
                        y = Phaser.Math.Between(0,960)
                    }
                    if(args[2] == 'self') {
                        p.x = this.world.client.penguin.x
                        p.y = this.world.client.penguin.y
                    } else {
                        if(isNaN(x) || isNaN(y)) return
                        p.move(x, y)
                    }
                    this.room.onPenguinUpdate(p.id)
                }
                return
            }
            let peng = this.room.dummyPenguins[args[1]]
            if(!peng) return this.error('Penguin does not exist.')
            let x = args[2]
            let y = args[3]
            if(args[2] == 'random') {
                x = Phaser.Math.Between(0,1520)
                y = Phaser.Math.Between(0,960)
            }
            if(args[2] == 'self') {
                peng.x = this.world.client.penguin.x
                peng.y = this.world.client.penguin.y
            } else {
                if(isNaN(x) || isNaN(y)) return
                peng.move(x, y)
            }
            this.room.onPenguinUpdate(peng.id)
        }

        if(command == 'set') {
            if(args[1] == 'all') {
                for(let p of Object.values(this.room.dummyPenguins)) {
                    if(!p) continue
                    if(args[2] == 'frame') {
                        let callback = () => {
                            p.playFrame(args[3], true)
                            this.interface.main.playItemSfx(p,args[3])
                            this.room.onPenguinUpdate(p.id)
                        }
                        if (p.isTweening) {
                            p.afterMove = callback
                            continue
                        }
                        callback()
                        continue
                    } else if(args[2] == 'transform') {
                        p.transformation(args[3])
                        this.room.onPenguinUpdate(p.id)
                        continue
                    }
                    let item
                    if(args[2] == 'color' && args[3] == 'random') {
                        item = Phaser.Math.Between(1,this.crumbs.colors.length)
                    } else {
                        item = args[3]
                    }
                    this.room.penguins[p.id].update(item, args[2])
                    this.room.onPenguinUpdate(p.id)
                }
                return
            }
            let peng = this.room.dummyPenguins[args[1]]
            if(!peng) return this.error('Penguin does not exist.')
            if(args[2] == 'frame') {
                let callback = () => {
                    peng.playFrame(args[3], true)
                    this.interface.main.playItemSfx(peng,args[3])
                    this.room.onPenguinUpdate(peng.id)
                }
                if (peng.isTweening) {
                    peng.afterMove = callback
                    return
                }
                callback()
                return
            } else if(args[2] == 'transform') {
                peng.transformation(args[3])
                this.room.onPenguinUpdate(peng.id)
                return
            }
            this.room.penguins[peng.id].update(args[3], args[2])
            this.room.onPenguinUpdate(peng.id)
        }

        if(command == 'spawn') {
            if(!isNaN(parseInt(args[1]))) {
                for(let i = 0; i < args[1]; i++) {
                    this.spawnNewPenguin()
                }
            }
        }
    }
    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
