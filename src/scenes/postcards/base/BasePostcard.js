import BaseContainer from '@scenes/base/BaseContainer'


export default class BasePostcard extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y)

        this.name = null
        this.goToButton = null
    }

    //{ username, details, date }
    setText({ username, extra, date }) {
        if (this.name) {
            this.name.text = username
        }

        if (this.details) {
            this.details.text = extra
        }

        if (this.date) {
            this.date.text = this.getDateText(date)
        }

        if (this.receiverName) {
            this.receiverName.text = this.world.client.penguin.username
        }
    }

    getDateText(sendDate) {
        const date = new Date(sendDate)

        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }

        return date.toLocaleDateString('en-US', options)
    }

    enableInput() {
        if (this.goToButton) {
            this.goToButton.enableInput()
        }
    }

}
