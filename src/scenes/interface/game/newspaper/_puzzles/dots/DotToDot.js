import { SimpleButton } from '@components/components'

export default class DotToDot {

    constructor(info) {
        Object.assign(this, info)

        this.lines = []

        this.hasBeenPlayed = false

        const button = new SimpleButton(this.button)
        button.hoverCallback = () => {
            if(!this.button.visible) return
            this.button.visible = false
            this.drawLine(this.currentDot)
            this.nextDot(this.currentDot)
            this.hasBeenPlayed = true
        }
        button.start()

        this.addNumbers()

        this.start()
    }
    
    addNumbers() {
        for(let [num, dot] of this.dots.entries()) {
            let text = this.container.scene.add.text(dot.x - 5, dot.y - 45, num + 1, {})
            text.setStyle({ "align": "center", "color": "#333", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" })
            this.container.add(text)
        }
    }

    start() {
        this.hasBeenPlayed = false

        this.button.visible = true
        this.instructions.visible = true
        this.picture.alpha = 0
        this.picture.visible = true
        this.container.alpha = 1

        for(let line of this.lines) {
            if (line) line.destroy()
        }
        this.lines = []

        this.currentDot = 0

        this.nextDot(0)
    }

    drawLine(id) {
        if (id !== this.currentDot) return
        let previousDot = this.dots[this.currentDot - 1]
        let currentDot = this.dots[this.currentDot]
        const line = new Phaser.GameObjects.Line(this.container.scene, 0, 0, previousDot.x, previousDot.y, currentDot.x, currentDot.y, 0x888888)//this.container.scene.add.line(previousDot.x, previousDot.y, previousDot.x, previousDot.y, currentDot.x, currentDot.y, 0xFF0000)
        line.setLineWidth(8)
        this.container.add(line)
        line.setOrigin(0)
        this.container.sendToBack(line)
        this.lines.push(line)
    }

    nextDot(id) {
        if (id !== this.currentDot) return
        this.currentDot++
        
        if (this.currentDot > this.dots.length - 1) {
            this.button.visible = false
            this.instructions.visible = false
            this.container.scene.tweens.add({
                targets: this.container,
                ease: 'Linear',
                alpha: { from: 1, to: 0 },
                duration: 1000
            })
            this.container.scene.tweens.add({
                targets: this.picture,
                ease: 'Linear',
                alpha: { from: 0, to: 1 },
                duration: 1000
            })
            return
        }

        // for some reason it'll fire the hover event multiple times, this fixes it somehow
        this.container.scene.time.addEvent({
            callback: () => {
                this.button.x = this.dots[this.currentDot].x
                this.button.y = this.dots[this.currentDot].y
                this.button.visible = true
            },
            delay: 20
        })
    }

}