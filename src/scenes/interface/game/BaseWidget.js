import BaseContainer from '@scenes/base/BaseContainer'

export default class BaseWidget extends BaseContainer {
    
    show() {
        super.show()
        this.hideMainInputs()
    }

    close() {
        super.close()
        this.showMainInputs()
    }
}