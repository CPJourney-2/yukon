import Plugin from '../Plugin'


export default class Party extends Plugin {

  constructor(network) {
    super(network)
    this.events = {
      'check_pirate_status': this.checkPirateStatus,
      'get_my_pirate_status': this.getMyPirateStatus,
      'gems_added': this.gemsAdded,
      'quest_complete': this.questComplete,
      'update_skill_points': this.updateSkillPoints,
      'update_highest_floor': this.updateHighestFloor,
      'tower_start_game': this.towerStartGame,
      'tower_end_game': this.towerEndGame,
      'get_tower_leaderboard': this.getTowerLeaderboard
    }
  }

  checkPirateStatus(args) {
    this.interface.loadedWidgets.RHDialogue?.onStatus(args.status.code)
    this.world.party.pirate.status = args.status
  }

  getMyPirateStatus(args) {
    this.world.party.pirate.status = args.status
    if(args.noAction) return
    if(!this.world.room.initExpedition) return
    this.world.room.initExpedition()
  }

  gemsAdded(args) {
    this.world.client.gems = args.gems;

    this.interface.refreshPlayerCard();
    this.interface.updateCatalogGems(args.gems);

    if (!args.hide) {
      this.interface.prompt.showInfo(`You have received ${args.gemsAdded} gems. You now have ${args.gems} gems.`);
    }
  }

  questComplete(args) {
    if (!args || !args.gems || !args.gems_earned || !args.difficulty) return;

    this.world.client.gems = args.gems;
    this.world.interface.main.questComplete(args.difficulty);
    if (!this.world.client.partyQuests.includes(args.quest)) {
      this.world.client.partyQuests.push(args.quest)
    }
  }

  updateSkillPoints(args) {
    if (!args || !args.skillPoints) return

    this.world.client.inf_skill_points = args.skillPoints
    // this.interface.updateCatalogSkill(args.skillPoints)
  }

  updateHighestFloor(args) {
    if (!args || !args.highestFloor) return

    this.world.client.highest_floor_reached = args.highestFloor
  }

  towerStartGame() {
    if(this.world.client.tower.started) return
    this.world.client.interface.main.partyIcon._scorn.visible = false
    this.world.client.tower.started = true
    this.world.client.tower.floorOffset = 0
  }

  towerEndGame(args) {
    this.world.client.currentTower = null
    this.world.client.interface.main.partyIcon._scorn.visible = true
  }

  getTowerLeaderboard(args) {
    this.world.interface.loadedWidgets.TowerLeaderboard?.onResult(args)
  }
}
