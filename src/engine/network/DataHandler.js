import PluginManager from './plugins/PluginManager'


export default class DataHandler {

    constructor(network) {
        this.network = network

        this.plugins = new PluginManager(network)
    }

    handle(message) {
        try {
            if (process.env.NODE_ENV === 'development' || this?.network?.interface?.world?.client?.rank > 1 && localStorage.getItem('logging') == "true") {
                console.log(`%c[DataHandler] Message received:`, "color: #90EE90", message.action, message.args);
            }

            this.network.events.emit(message.action, message.args)

        } catch(error) {
            console.error(error)
        }
    }

}
