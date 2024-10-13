import PuffleRoomLoader from '@engine/loaders/PuffleRoomLoader';
import BaseContainer from '@scenes/base/BaseContainer';

export default class Puffle extends BaseContainer {
    constructor(puffle, room) {
        let xpos = Phaser.Math.Between(200, 1320);
        let ypos = Phaser.Math.Between(200, 760);
        while (!room.matter.containsPoint(room.pet, xpos, ypos)) {
            xpos = Phaser.Math.Between(200, 1320);
            ypos = Phaser.Math.Between(200, 760);
        }

        super(room, xpos, ypos);

        this.room = room;
        this.id = puffle.id;
        this.type = puffle.type;
        this.name = puffle.name;
        this.xpos = xpos;
        this.ypos = ypos;

        this.puffleLoader = new PuffleRoomLoader(this, this.room);

        if (this.type == null) {
            this.type = puffle.color;
        } else {
            this.type = this.world.crumbs.puffles[this.type].name;
        }

        if (!this.puffleLoader.textureExists(`puffle_room_${this.type}`)) {
            this.puffleLoader.loadPuffle(this.type);
        } else {
            this.loadPuffle();
        }
    }

    loadPuffle() {
        if (this.world.client.penguin.walking == this.id) {
            return;
        }

        this.sprite = this.room.add.sprite(
            this.xpos,
            this.ypos,
            `puffle_room_${this.type}`,
            '1_1'
        );

        this.x = this.sprite.x;
        this.y = this.sprite.y;

        this.sprite.depth = this.y;

        this.room.puffles[this.id] = this;

        if (this.world.client.penguin.id == this.room.id) {
            this.addPuffleInput();
        }

        this.moveTimer = setInterval(this.puffleAi.bind(this), 2000);
    }

    addPuffleInput() {
        this.hitArea = new Phaser.Geom.Ellipse(0, -20, 46, 39);
        this.setInteractive({
            cursor: 'pointer',
            hitArea: this.hitArea,
            hitAreaCallback: Phaser.Geom.Ellipse.Contains,
        });

        this.on('pointerup', () => this.puffleClick());
    }

    puffleClick() {
        this.interface.loadWidget('PuffleCare');
        this.network.send('get_wellbeing', {
            puffle: this.id,
        });
    }

    sleep() {
        this.play(25);
        this.network.send('update_puffle_rest', {
            puffle: this.id,
        });
    }

    playwith() {
        this.play(27);
    }

    bubbleGum() {
        this.play(29);
    }

    cookie() {
        this.play(30);
    }

    feed() {
        this.play(31);
    }

    bath() {
        this.play(34);
    }

    puffleAi() {
        this.directions = [
            ['s', -0, 1],
            ['sw', -1, 1],
            ['w', -1, 0],
            ['nw', -1, -1],
            ['n', 0, -1],
            ['ne', 1, -1],
            ['e', 1, 0],
            ['se', 1, 1],
        ];

        if (this.tween || this.isTweening) {
            return;
        } else if (Phaser.Math.Between(0, 5) == 5) {
            let dirnum = Math.floor(Math.random() * this.directions.length);
            var arrayentry = this.directions[dirnum];
            var direction = arrayentry[0];

            let movedist = Phaser.Math.Between(50, 250);
            let xmove = arrayentry[1] * movedist;
            let ymove = arrayentry[2] * movedist;

            let xdest = this.x + xmove;
            let ydest = this.y + ymove;

            let tries = 0;

            while (
                !this.room.matter.containsPoint(this.room.pet, xdest, ydest) ||
                xdest > 1320 ||
                ydest > 760 ||
                xdest < 200 ||
                ydest < 200
            ) {
                if (isNaN(xdest) || isNaN(ydest) || tries > 50) return;
                movedist = Phaser.Math.Between(50, 250);
                xmove = arrayentry[1] * movedist;
                ymove = arrayentry[2] * movedist;

                xdest = this.x + xmove;
                ydest = this.y + ymove;

                tries = tries + 1;
            }

            this.playFrame(9 + dirnum);

            this.movePuffle(xdest, ydest);
        }
    }

    movePuffle(x, y) {
        let path = this.getPath({
            x,
            y,
        });
        if (path) {
            this.addMoveTween(path);
        }

        // 1 in 25 chance
        if (this.world.room && this.world.room.id === this.world.client.id) {
            if (Phaser.Math.Between(0, 24) == 24) {
                this.network.send('update_puffle_energy', {
                    puffle: this.id,
                    energy: -1,
                });
            }
        }
    }

    getPath(target) {
        const speed = 110;

        let dx = this.x - target.x;
        let dy = this.y - target.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        let duration = (distance / speed) * 1000;

        return {
            target: target,
            duration: duration,
        };
    }

    addMoveTween(path) {
        if (this.tween) {
            return;
        }

        this.tween = this.room.tweens.add({
            targets: this.sprite,
            duration: path.duration,
            x: Math.round(path.target.x),
            y: Math.round(path.target.y),
            onUpdate: () => this.onMoveUpdate(),
            onComplete: () => this.onMoveComplete(),
        });
    }

    onMoveUpdate() {
        this.x = this.sprite.x;
        this.y = this.sprite.y;
        this.sprite.depth = this.y;
    }

    onMoveComplete() {
        if (!this.tween) {
            return;
        }

        this.tween.remove();
        this.tween = null;

        if (this.sprite.anims) {
            this.sprite.anims.stop();
            this.sprite.setFrame('1_1');
        }
    }

    play(frame) {
        let animTexture = `${this.sprite.texture.key}_${frame}`;

        if (!this.world.anims.exists(animTexture)) {
            this.createAnim(this.sprite.texture.key, frame);
        }

        var anim = this.sprite.play(animTexture);
        this.isTweening = true;
        this.removeInteractive();

        anim.on(
            'animationcomplete',
            function () {
                this.sprite.setFrame('1_1');
                this.isTweening = false;
                this.addPuffleInput();
            },
            this
        );
    }

    destroy() {
        if (this.tween) {
            this.tween.remove();
        }
        this.removeInteractive();
        this.sprite.destroy();
        clearInterval(this.moveInterval);
        this.room.puffles[this.id] = null;
    }

    /*========== Frames ==========*/

    playFrame(_frame, set = true) {
        if (!this.sprite.anims) {
            return;
        }
        if (this.isTweening && (frame < 9 || frame > 16)) {
            return;
        }

        let frame = _frame;

        let key = `${this.sprite.texture.key}_${frame}`;

        if (!this.world.anims.exists(key)) {
            this.createAnim(this.sprite.texture.key, frame);
        }
        if (this.checkAnim(key)) {
            this.sprite.visible = true;
            this.sprite.anims.play(key);
        } else {
            this.sprite.visible = false;
        }
        this.frame = set ? _frame : 1;
    }

    createAnim(key, frame) {
        let animation = this.crumbs.puffleanims[this.type][frame];
        let frames = this.generateFrames(key, frame, animation);

        this.world.anims.create({
            key: `${key}_${frame}`,
            frames: frames,
            frameRate: 24,
            repeat: animation.repeat || 0,
        });
    }

    generateFrames(key, frame, animation) {
        let config = {
            prefix: `${frame}_`,
            frames:
                animation.frames ||
                Phaser.Utils.Array.NumberArray(
                    animation.start || 1,
                    animation.end
                ),
        };

        let textureFrames = this.world.textures.get(key).getFrameNames(false);

        config.frames = config.frames.filter((i) => {
            return textureFrames.includes(`${frame}_${i}`);
        });

        return this.world.anims.generateFrameNames(key, config);
    }

    checkAnim(key) {
        let animation = this.world.anims.get(key);
        return animation && animation.frames.length > 0;
    }
}
