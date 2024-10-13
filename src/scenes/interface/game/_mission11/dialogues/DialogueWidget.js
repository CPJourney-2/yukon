import BaseContainer from '@scenes/base/BaseContainer'

export default class DialogueWidget extends BaseContainer {
    
    show(start = 0) {
        super.show()

        // The "start" parameter can be used to start dialogue at a specific index; its 0 by default.
        this.showDialogueAtIndex(start)
    }

    // Called when the bubble button is clicked
    nextPage() {
        if(this.dialogue[this.index].addition) {
            // This is for when something should be run, but should still move on to the next dialogue
            this.dialogue[this.index].addition()
        }
        if(this.dialogue[this.index].after) {
            // If a custom callback is provided, then run that
            this.dialogue[this.index].after()
        } else {
            // Otherwise, goto next page of dialogue
            this.index++
            this.showDialogueAtIndex(this.index)
        }
    }

    showDialogueAtIndex(index) {
        this.index = index
        this.bubble.showSpeech(this.dialogue[index].text)
    }

    showOptionsAtIndex(index) {
        this.bubble.showOptions(this.options[index])
    }

}