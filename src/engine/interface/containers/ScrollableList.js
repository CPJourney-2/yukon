//import BaseContainer from '@scenes/base/BaseContainer'

export default class ScrollableList {
    /**
     * The purpose of this is to easily control a list that needs to scroll
	 * through a list of things. (also because i got lazy)
     *
     * @param {Phaser.Scene} scene - The scene, even though it probably doesn't need this
     * @param {number} itemsPerPage - The amount of items that should be displayed per "page" of the list
     * @param {Array} theArray - The array that needs to be split into sub-lists
	 * @param {expression} onItemLoop - Will run every time showPage goes through each item
	 *                                  in the sub-list, passing the index and the sublist itself.
	 * @param {expression} onPageChange - Runs whenever the "page" of the list changes
     */
    constructor(scene, itemsPerPage = 0, theArray = [], onItemLoop = (i,j) => {}, onPageChange = () => {}) {
        this.itemsPerPage = itemsPerPage
        this.pageIndex = 1
		this.scene = scene
		this.theArray = theArray
		this.onItemLoop = onItemLoop
		this.onPageChange = onPageChange
		
		this.showPage()
    }
	
	/* "Scroll up" in the list, decreasing page index by 1. */
    scrollUp() {
        if(this.pageIndex == 1) return
        this.showPage('up')
    }
	
	/* "Scroll down" in the list, increasing page index by 1. */
    scrollDown() {
        if(this.pageIndex == this.totalPages) return
        this.showPage('down')
    }
	
	/* Slices the main array based on the page index, and displays that sublist. */
    showPage(dir = null) {
		this.onPageChange()

        if(dir == 'up') {
            this.pageIndex--
        } else if(dir == 'down') {
            this.pageIndex++
        }

        this.totalPages = Math.ceil(this.theArray.length / this.itemsPerPage);
        if(this.pageIndex > this.totalPages) this.pageIndex--

        let startIndex = (this.pageIndex - 1) * this.itemsPerPage;
        let endIndex = startIndex + this.itemsPerPage;
        let subUsers = this.theArray.slice(startIndex, endIndex);

        for(let i = 0; i < subUsers.length; i++) {
            if (!subUsers[i]) break
            this.onItemLoop(i,subUsers)
        }
    }
	
	/* Updates the main array, and resets the page index to 1. */
	updateArrayAndReset(a) {
		this.theArray = a
		this.pageIndex = 1
		this.showPage()
	}

    updateArray(a) {
		this.theArray = a
		this.showPage()
	}
}
