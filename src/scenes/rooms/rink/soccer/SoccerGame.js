/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import SoccerBall from "./SoccerBall";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SoccerGame extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.netRight;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.netLeft;
        /** @type {SoccerBall} */
        this.ball;
        /** @type {Phaser.GameObjects.Ellipse[]} */
        this.points;
        /** @type {Array<Phaser.GameObjects.Rectangle|Phaser.GameObjects.Ellipse>} */
        this.hide;


        // bounds
        const bounds = scene.add.rectangle(-16, 29, 1316, 670);
        bounds.isFilled = true;
        bounds.fillColor = 16711680;
        bounds.fillAlpha = 0.5;
        this.add(bounds);

        // p12
        const p12 = scene.add.ellipse(289, -174, 18, 18);
        p12.isFilled = true;
        p12.fillColor = 65280;
        this.add(p12);

        // p11
        const p11 = scene.add.ellipse(-281, -175, 18, 18);
        p11.isFilled = true;
        p11.fillColor = 65280;
        this.add(p11);

        // p10
        const p10 = scene.add.ellipse(-459, -135, 18, 18);
        p10.isFilled = true;
        p10.fillColor = 65280;
        this.add(p10);

        // p9
        const p9 = scene.add.ellipse(-563, -29, 18, 18);
        p9.isFilled = true;
        p9.fillColor = 65280;
        this.add(p9);

        // p8
        const p8 = scene.add.ellipse(-577, 111, 18, 18);
        p8.isFilled = true;
        p8.fillColor = 65280;
        this.add(p8);

        // p7
        const p7 = scene.add.ellipse(-477, 199, 18, 18);
        p7.isFilled = true;
        p7.fillColor = 65280;
        this.add(p7);

        // p6
        const p6 = scene.add.ellipse(-335, 255, 18, 18);
        p6.isFilled = true;
        p6.fillColor = 65280;
        this.add(p6);

        // p5
        const p5 = scene.add.ellipse(357, 251, 18, 18);
        p5.isFilled = true;
        p5.fillColor = 65280;
        this.add(p5);

        // p4
        const p4 = scene.add.ellipse(483, 185, 18, 18);
        p4.isFilled = true;
        p4.fillColor = 65280;
        this.add(p4);

        // p3
        const p3 = scene.add.ellipse(555, 97, 18, 18);
        p3.isFilled = true;
        p3.fillColor = 65280;
        this.add(p3);

        // p2
        const p2 = scene.add.ellipse(533, -33, 18, 18);
        p2.isFilled = true;
        p2.fillColor = 65280;
        this.add(p2);

        // p1
        const p1 = scene.add.ellipse(445, -131, 18, 18);
        p1.isFilled = true;
        p1.fillColor = 65280;
        this.add(p1);

        // netRight
        const netRight = scene.add.rectangle(533, 15, 104, 84);
        netRight.isFilled = true;
        netRight.fillColor = 16711680;
        netRight.fillAlpha = 0.5;
        this.add(netRight);

        // netLeft
        const netLeft = scene.add.rectangle(-539, 15, 104, 84);
        netLeft.isFilled = true;
        netLeft.fillColor = 16711680;
        netLeft.fillAlpha = 0.5;
        this.add(netLeft);

        // ball
        const ball = new SoccerBall(scene, 0, 0);
        this.add(ball);

        // lists
        const points = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];
        const hide = [bounds, netLeft, netRight, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];

        this.netRight = netRight;
        this.netLeft = netLeft;
        this.ball = ball;
        this.points = points;
        this.hide = hide;

        /* START-USER-CTR-CODE */

        // Current target pos
        this.target = { x: 0, y: 0 }

        // Only check ball hit when client is moving and hasn't already hit ball during current move
        this.doHitTest = false

        // Lines for wall collisions
        this.lines = this.createLines()

        // Line attached to ball used for calculating collision time
        this.ball.createLine()

        // ball collision bounds
        this.netLeftBounds = netLeft.getBounds()
        this.netRightBounds = netRight.getBounds()
        this.bounds = bounds.getBounds()

        // Physics fixed timestep
        this.fixedTimestep = 1000 / 60
        this.accumulator = 0
        this.lastTime = Date.now()

        // Physics values
        this.friction = 0.05
        this.speedDiv = 12
        this.maxAngleFromHorizontal = 50
        this.maxVerticalFromNetCenter = 30

        // Timeout after 2500 fixed updates (~40 seconds) when ball isn't moving
        this.timeout = 2500
        this.defaultTimeout = this.timeout

        // Hides all children except ball
        this.hidePhysics()
        this._dontHideInputs = true

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get client() {
        return this.scene.client
    }

    addListeners() {
        this.network.events.on('get_ball', this.handleGetball, this)
        this.network.events.on('move_ball', this.handleMoveball, this)

        this.scene.events.on('move_start', this.onMoveStart, this)
        this.scene.events.on('move_end', this.onMoveEnd, this)
    }

    removeListeners() {
        this.network.events.off('get_ball', this.handleGetball, this)
        this.network.events.off('move_ball', this.handleMoveball, this)

        this.scene.events.off('move_start', this.onMoveStart, this)
        this.scene.events.off('move_end', this.onMoveEnd, this)
    }

    update() {
        const currentTime = Date.now()

        // Difference between this update and last update
        const frameTime = currentTime - this.lastTime

        this.lastTime = currentTime
        this.accumulator += frameTime

        // Do fixed update when fixed timestep is accumulated
        while (this.accumulator >= this.fixedTimestep) {
            this.fixedUpdate()

            this.accumulator -= this.fixedTimestep
        }
    }

    fixedUpdate() {
        if (this.doHitTest) {
            this.hitTest()
        }

        if (this.ball.isMoving) {
            this.updatePhysics()
        } else {
            this.updateTimeout()
        }
    }

    updatePhysics() {
        this.addFriction()
        this.addVelocity()
        this.collideWithNets()
        this.collideWithWalls()
    }

    updateTimeout() {
        if (this.ball.isInStartPos) {
            return
        }

        this.timeout -= 1

        if (this.timeout <= 0) {
            this.resetball()
            this.resetTimeout()
        }
    }

    onMoveStart(args) {
        // Offset target to hockey game space
        this.target.x = args.x - this.x
        this.target.y = args.y - this.y

        this.doHitTest = true
    }

    onMoveEnd() {
        this.doHitTest = false
    }

    handleGetball(args) {
        this.moveball(args.x, args.y, 0, 0)
    }

    handleMoveball(args) {
        this.moveball(args.x, args.y, args.speedX, args.speedY)
    }

    sendGetBall() {
        this.network.send('get_ball')
    }

    /**
     * Creates lines used for wall collisions, drawn between points in scene.points.
     */
    createLines() {
        const lines = []

        for (let i = 0; i < this.points.length; i++) {
            const point = this.points[i]
            const next = this.points[(i + 1) % this.points.length]

            const line = new Phaser.GameObjects.Line(this.scene, 0, 0, point.x, point.y, next.x, next.y)

            line.setOrigin(0, 0)
            lines.push(line)

            this.add(line)

            // Used for bouncing ball off wall
            line.normalVector = new Phaser.Math.Vector2()
            Phaser.Geom.Line.GetNormal(line.geom, line.normalVector)
        }

        return lines
    }

    hitTest() {
        if (!this.ball.bounds.contains(this.client.penguin.x, this.client.penguin.y)) {
            return
        }

        const ballX = Math.round(this.ball.x)
        const ballY = Math.round(this.ball.y)

        const distance = Phaser.Math.Distance.Between(this.target.x, this.target.y, ballX, ballY)
        if (distance < 40) {
            return
        }

        const speedX = Math.floor((this.target.x - ballX) / this.speedDiv)
        const speedY = Math.floor((this.target.y - ballY) / this.speedDiv)

        this.scene.network.send('move_ball', { x: ballX, y: ballY, speedX: speedX, speedY: speedY })

        this.moveball(ballX, ballY, speedX, speedY)
        this.doHitTest = false
    }

    moveball(ballX, ballY, speedX, speedY) {
        this.resetTimeout()

        this.ball.isMoving = true

        this.ball.setPosition(ballX, ballY)
        this.ball.setVelocity(speedX, speedY)
    }

    addFriction() {
        const length = Math.max(this.ball.velocity.length() - this.friction, 0)

        if (length === 0) {
            this.ball.isMoving = false
        }

        this.ball.velocity.setLength(length)
    }

    addVelocity() {
        this.ball.x += this.ball.velocity.x
        this.ball.y += this.ball.velocity.y
    }

    collideWithNets() {
        let collision = false

        if (this.boundsContainsball(this.netLeftBounds)) {
            collision = this.checkLeftNet()

        } else if (this.boundsContainsball(this.netRightBounds)) {
            collision = this.checkRightNet()
        }

        if (collision) {
            // Bounce off net
            this.ball.velocity.negate()

            for (let i = 0; i < 2; i++) {
                this.addVelocity()
            }

            this.ball.velocity.scale(0.8)
        }
    }

    checkLeftNet() {
        const diffY = this.ball.y - this.netLeft.y

        if (!this.checkNetDiffY(diffY)) {
            return true
        }

        let angle = Phaser.Math.RadToDeg(Math.atan2(this.ball.velocity.y, this.ball.velocity.x))

        if (angle < 0) {
            angle += 360
        }
        angle -= 180

        if (angle > -this.maxAngleFromHorizontal && angle < this.maxAngleFromHorizontal) {
            // Left net scored
            this.resetball()
            return false
        }

        return true
    }

    checkRightNet() {
        const diffY = this.ball.y - this.netRight.y

        if (!this.checkNetDiffY(diffY)) {
            return true
        }

        let angle = Phaser.Math.RadToDeg(Math.atan2(this.ball.velocity.y, this.ball.velocity.x))

        if (angle > -this.maxAngleFromHorizontal && angle < this.maxAngleFromHorizontal) {
            // Right net scored
            this.resetball()
            return false
        }

        return true
    }

    checkNetDiffY(diffY) {
        return diffY > -this.maxVerticalFromNetCenter && diffY < this.maxVerticalFromNetCenter
    }

    collideWithWalls() {
        // Update ball collision line
        Phaser.Geom.Line.SetToAngle(this.ball.line.geom, this.ball.x, this.ball.y, this.ball.velocity.angle(), 100)

        for (const line of this.lines) {
            const collisionTime = this.getLineCollisionTime(line)

            if (collisionTime === Infinity) {
                continue
            }

            if (collisionTime <= 2) {
                // Bounce off wall
                this.ball.velocity.reflect(line.normalVector)
                this.ball.velocity.scale(0.8)
                this.addVelocity()
            }
        }

        if (!this.boundsContainsball(this.bounds)) {
            this.resetball()
        }
    }

    getLineCollisionTime(line) {
        // Get intersection between ball line and wall line, and store ball intersecting point
        const intersect = Phaser.Geom.Intersects.LineToLine(this.ball.line.geom, line.geom, this.ball.intersectingPoint)

        if (intersect) {
            const distance = Phaser.Math.Distance.BetweenPoints(this.ball, this.ball.intersectingPoint)

            return distance / this.ball.velocity.length()
        }
    }

    boundsContainsball(bounds) {
        // Use ball world pos because bounds use world space
        return bounds.contains(this.ball.worldX, this.ball.worldY)
    }

    resetball() {
        this.ball.reset()
    }

    resetTimeout() {
        this.timeout = this.defaultTimeout
    }

    hidePhysics() {
        this.iterate(child => child.visible = child === this.ball)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
