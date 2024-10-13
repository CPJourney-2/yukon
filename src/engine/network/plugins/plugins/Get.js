import Plugin from '../Plugin';

export default class Get extends Plugin {
    constructor(network) {
        super(network);
        this.events = {
            get_player: this.getPlayer,
            get_unverified_users: this.getUnverifedUsers,
            edit_player: this.editPlayer,
            get_mascots: this.getMascots,
            get_alts: this.getAlts,
            //get_tickets: this.getTickets,
            get_party_coins: this.getPartyCoins,
            mod_update_name_status: this.nameVerify,
        };
    }

    getPlayer(args) {
        this.interface.main.playerCard._showCard(args.penguin);
    }

    getUnverifedUsers(args) {
        if(this.interface.loadedWidgets.ModPanel) {
            if(args.usersearch) this.interface.loadedWidgets.ModPanel.pageIndex = 1
            this.interface.loadedWidgets.ModPanel.showUsers(args.users,null,args.searchbyid || false,args.usersearch || false);
        }
    }

    nameVerify(args) {
        this.interface.main.modActions.nameVerified(args);
    }

    editPlayer(args) {
        this.interface.main.modActions._showCard(
            args.user,
            args.bancount,
            args.activeban,
            args.banReason,
            args.user,
            args.muteInfo,
            args.banHistory
        );
    }

    getAlts(args) {
        this.interface.main.modActions.altsList.showAltsList(args.altsInfo)
    }

    getMascots(args) {
        this.world.mascots = args.mascots;
    }

    /*getTickets(args) {
        let tickets = args.tickets;

        this.world.client.tickets = args.tickets;
        this.interface.main.updateTickets();
    }*/
    getPartyCoins(args) {
        return
        /*if(isNaN(args.partyCoins)) return
        let tickets = args.partyCoins;

        this.world.client.partyCoins = tickets;
        this.interface.main.setPartyCoins();

        if(this.interface.loadedWidgets.CandyShop) {
            this.interface.loadedWidgets.CandyShop.setCandyCount()
        }*/
    }

}
