
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Carousel extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {array} */
        this.positions = [];
        /** @type {array} */
        this.positionProps = [];
        /** @type {Array<Phaser.GameObjects.GameObject>} */
        this.targets = [];
        /** @type {number} */
        this.shuffleTweenDuration = 500;
        /** @type {number} */
        this.paginationTweenDuration = 250;


        // usageText
        const usageText = scene.add.text(-707, 0, "", {});
        usageText.text = "Position nodes as you like and add set prefab's position property to a list/array of these nodes";
        usageText.setStyle({ "color": "#0dff11ff", "fixedWidth":1408,"fixedHeight":309,"fontSize": "41px", "maxLines":10});
        usageText.setWordWrapWidth(1538);
        this.add(usageText);

        /* START-USER-CTR-CODE */
        this.currPage = 0;
        this.positionTargetsQueue = [];

        this.flipQueue = [];
        this.isFlipping = false;

        this.isShuffling = false;
        this.shuffleToPage = 0;
        this.shuffleTweenDuration = 500;
        this.onShuffleStop = () => {};

        usageText.destroy();
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    get targetsOffset() {
        return Math.floor(this.positions.length / 2);
    }

    close() {
        this.scene?.tweens.killTweensOf(this.targets);

        super.close();
    }

    init() {
        this.positions.forEach(p => p.visible = false);

        this._initPositionTargetsQueue();

        this.positions.forEach((pos, posIndex) => {
            this.positionTargetsQueue[posIndex].forEach( target => 
                this._tweenToObject(target, pos, this.positionProps[posIndex])
            );
        });
    }

    getMiddleTarget() {
        return this.targets[(this.currPage + this.targetsOffset) % this.targets.length];
    }

    prev({onComplete, ...tweenOpts} = {}) {
        if (this.isFlipping) {
            this.flipQueue.unshift(() => this.prev({onComplete, ...tweenOpts}));
            return;
        }

        this.isFlipping = true;
        this.currPage = this.currPage === 0 ? this.targets.length - 1 : this.currPage - 1;
        const tweensCompleted = new Array(this.positions.length).fill(false);

        this.positionTargetsQueue.forEach((queue, posIndex) => {
            const onFlipComplete = () => {
                tweensCompleted[posIndex] = true;

                if (tweensCompleted.every(t => t)) {
                    this.isFlipping = false;
                    onComplete?.();
                    this._checkFlipQueue();
                }
            };

            if (posIndex === this.positions.length - 1) {
                const target = queue.pop();
                this.positionTargetsQueue[0].unshift(target);
                this._tweenToObject(
                    target, 
                    this.positions[0], 
                    {...this.positionProps[0], ...tweenOpts, duration: 0, onComplete: onFlipComplete}
                );
                return;
            }

            const target = queue.pop();
            this.positionTargetsQueue[posIndex + 1].unshift(target);
            this._tweenToObject(
                target, 
                this.positions[posIndex + 1], 
                {...this.positionProps[posIndex + 1], ...tweenOpts, onComplete: onFlipComplete},
            );
        });
    }

    next({onComplete, ...tweenOpts} = {}) {
        if (this.isFlipping) {
            this.flipQueue.unshift(() => this.next({onComplete, ...tweenOpts}));
            return;
        }

        this.isFlipping = true;
        this.currPage = this.currPage === (this.targets.length - 1) ? 0 : this.currPage + 1;
        const tweensCompleted = new Array(this.positions.length).fill(false);

        this.positionTargetsQueue.forEach((queue, posIndex) => {
            const onFlipComplete = () => {
                tweensCompleted[posIndex] = true;

                if (tweensCompleted.every(t => t)) {
                    this.isFlipping = false;
                    onComplete?.();
                    this._checkFlipQueue();
                }
            };

            if (posIndex === 0) {
                const target = queue.shift();
                this.positionTargetsQueue[this.positions.length - 1].push(target);
                this._tweenToObject(
                    target, 
                    this.positions[this.positions.length - 1],  
                    {...this.positionProps[this.positions.length - 1], ...tweenOpts, duration: 0, onComplete: onFlipComplete}
                );
                return;
            }

            const target = queue.shift();
            this.positionTargetsQueue[posIndex - 1].push(target);
            this._tweenToObject(
                target, 
                this.positions[posIndex - 1], 
                {...this.positionProps[posIndex - 1], ...tweenOpts, onComplete: onFlipComplete},
            );
        });
    }

    shuffle() {
        this.isShuffling = true;
        this._shuffleOnce();
    }

    stopShuffle(page = 0, onStop = () => {}) {
        if (!this.isShuffling && this.currPage === this.shuffleToPage) {
            onStop();
            return;
        }

        this.isShuffling = false;
        this.onShuffleStop = onStop;
        this.shuffleToPage = page;
    }

    // =================================== HELPERS
    _shuffleOnce() {
        if (!this.isShuffling && this.currPage === this.shuffleToPage) {
            this.onShuffleStop();
            return;
        }

        this.next({
            duration: this.shuffleTweenDuration, 
            onComplete: () => this._shuffleOnce(),
        });
    }

    _checkFlipQueue() {
        if (!this.flipQueue.length) return;

        this.flipQueue.pop()?.();
    }

    _tweenToObject(obj1, obj2, tweenOpts = {}) {
        const wt2 = obj2.getWorldTransformMatrix();
        tweenOpts.duration = tweenOpts.duration ?? 0;
        
        let tween = this.scene.tweens.add({
            targets: obj1,
            ease: 'Linear',
            repeat: 0,
            x: wt2.getX(0, 0),
            y: wt2.getY(0, 0),
            ...tweenOpts,
            update: () => {
                obj1.depth = wt2.getY(0, 0);
                obj1.parentContainer?.sort('depth');

                tweenOpts.update?.();
            },
            paused: true,
        });

        if (!this.scene.tweens.isTweening(obj1)) {
            tween.play();
        } else {
            const lastTween = this.scene.tweens.getTweensOf(obj1).at(-2); // getting 2nd last because we just added the last one
            lastTween.addListener('complete', () => tween.play());
        }

        return tween;
    }

    _initPositionTargetsQueue() {
        this.targets = [...this.targets.slice(-this.targetsOffset), ...this.targets.slice(0, -this.targetsOffset)];

        this.positionTargetsQueue = [];
        this.targets.forEach((target, i) => {
            if (i < this.positions.length) {
                this.positionTargetsQueue.push([target]);
            } else {
                this.positionTargetsQueue[this.positionTargetsQueue.length - 1].push(target);
            }
        });
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
