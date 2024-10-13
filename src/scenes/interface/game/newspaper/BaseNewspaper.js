import BookContainer from '@scenes/interface/books/BookContainer'

import DotToDot from './_puzzles/dots/DotToDot'

export default class BaseNewspaper extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x, y);

        this.puzzleData = null

        this.currentBubble = null

        this.dotsPuzzle = null
    }

    show() {
        if(this.puzzleData) {
            switch(this.puzzleData.name) {
                case 'sudoku':
                    this.sudoku.start(this.puzzleData.info)
                    break
                case 'shuffle':
                    this.shuffle.init(this.puzzleData.info)
                    break
                case 'dots':
                    this.dotsPuzzle = new DotToDot(this.puzzleData.info)
                    break
            }
        }
        super.show()
    }

    close() {
        super.close()
        this.interface.destroyWidget(this)
        if(this.puzzleData?.name == 'dots') {
            this.dotsPuzzle = null
        }
        this.network.send("close_sprite", {})
        this.network.send("aksjdyfwie")
    }

    nextPage() {
        let page = this.page + 1
        if (page > this.pages.length - 1) {
            page = 0
        }

        this.showPage(page)
    }

    setButtonsVisible() {
		if(!this.buttons) return
        // Not visible on first page
        let visible = this.page > 0
        this.buttons.visible = visible
    }

    showPage(p) {
        super.showPage(p)
        if(!this.puzzleData) return
        if(this.puzzleData.name == 'sudoku' && this.sudoku) {
            this.sudoku.resetTiles()
        }
        else if(this.puzzleData.name == 'shuffle' && this.shuffle) {
            if(this.shuffle.hasBeenPlayed) this.shuffle.resetGame()
            this.shuffle.howToPlay.visible = true
        }
        else if(this.puzzleData.name == 'dots' && this.dotsPuzzle) {
            if (this.dotsPuzzle.hasBeenPlayed) this.dotsPuzzle.start()
        }
    }

    onSubmit(m) {
        if(m == 'painting' && localStorage.getItem('PAINTING_SUBMITTED') == 'true') return this.interface.prompt.showError('You\'ve already submitted a painting for this contest.')

        if((m == 'art' || m == 'painting') && this.world.client.daysOld < 10) return this.interface.prompt.showError('Sorry, your penguin must be over 10 days old to submit art.')
        this.newsform.show(m)
    }

    onSubmitHover(mode) {
        if(!this.auntarctic) return
        this.auntarctic.setFrame('aunthover2')
        this.currentBubble = this[`${mode}HoverBubble`]
        this.currentBubble.visible = true
    }

    onSubmitHoverOut() {
        this.auntarctic.setFrame('aunthover1')
        if(this.currentBubble) this.currentBubble.visible = false
    }

}