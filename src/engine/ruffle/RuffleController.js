// deno-lint-ignore-file no-window
import BaseScene from "@scenes/base/BaseScene.js";
import RuffleShim from "@engine/ruffle/RuffleShim.js";
import DanceFloor from "./dancing/DanceFloor"

export default class RuffleController extends BaseScene {
  /**
   * Ruffle player element
   */
  player;

  /**
   * Container that holds the Ruffle player
   */
  container;

  /**
   * Base Path for minigames or flash media
   */
  basePath = process.env.NODE_ENV === "development"
    ? "assets/media/flash/"
    : CDN_URL + "assets/media/flash/";

  /**
   * Current path for the flash media
   */
  path;

  /**
   * Storing the name of the current minigame
   */
  gameName;
  
  /**
   * Storing the name of the current widget
   */
  widgetName;

  /**
   * event target class
   * @type {EventTarget}
   */
  gameEvents;

  /**
   * array of attached event listeners
   */
  eventListeners = [];

  /**
   * whether the widget is loaded in fullscreen mode
   */
  isFullscreen = true;

  /**
   * List of methods that can be called from ruffle
   */
  keys = [
    "addEventListener",
    "addItemToMyInventory",
    "buyInventory",
    "CardJitsuDownloadedAnimation",
    "closeWidget",
    "getCurrentServerRoomId",
    "getGamesPath",
    "getMyPlayer",
    "getMyPlayerHex",
    "getMyPlayerId",
    "getMyPlayerNickname",
    "getPath",
    "getPlayerObjectById",
    "getPuffleColor",
    "isItemInMyInventory",
    "isItemOnMyPlayer",
    "isMyPlayerMember",
    "loadCardJitsuWorld",
    "playerWearingItem",
    "sendDancingPacket",
    "sendEndMidwayGame",
    "sendGameEvent",
    "sendGameOver",
    "stampEarnedAltLoader",
    "stampEarnedCpj",
    "stampIsOwnedByMe",
    "startMusicById",
    "stopMusic",
  ];

  privateKeys = [
    "sendGameOver",
    "onLoadComplete",
    "onWidgetLoadComplete",
    "startGameMusic",
    "getFrameColor",
    "sendGameOverAltLoader",
    "removeEventListeners",
    "getLocalizedFrame"
  ];

  /**
   * Ruffle shim
   */
  shim;

  constructor(key) {
    super(key);

    //window.ruffle = this
    this.shim = new RuffleShim(this);
  }

  create() {
    window.RufflePlayer = window.RufflePlayer || {};
    window.RufflePlayer.config = {
      wmode: "transparent",
    };

    this.playerStyle = {
      width: "100%",
      height: "100%",
      pointerEvents: "auto",
    };

    this.containedPlayerStyle = {
      width: "85%",
      height: "85%",
      pointerEvents: "auto",
    };

    this.container = this.add.dom(760, 480);
    this.container.visible = false;

    this.gameEvents = new EventTarget();
  }

  bootGame(game) {
    this.path = `games/${game.key}/bootstrap.swf`;
    this.music = game.music || 0;
    this.preLoop = game.preLoop;
    this.mainLoops = game.mainLoops;
    this.gameName = game.key;
    this.isQuest = game.quest || false;
    this.boot(game.use_alt_loader);

    // Remove after Fair
    if(this.gameName == "feedapuffle") this.world.party.setupQuest77()
    if(this.gameName == "pufflesoaker") this.world.party.setupQuest69()
  }

  boot(use_alt_loader = false) {
    const ruffle = window.RufflePlayer.newest();
    this.player = ruffle.createPlayer();
    this.isFullscreen = true;

    this.container.setElement(this.player, this.playerStyle);

    this.player.load({
      url: `${this.basePath}boot${use_alt_loader ? "_as3" : ""}.swf`,
      allowScriptAccess: true,
      menu: false,
      contextMenu: "off",
      scale: "noborder",
      autoplay: "on",
      warnOnUnsupportedContent: false,
      logLevel: 'error' //'trace'

      // logLevel: (localStorage.logging == 'true' && process.env.NODE_ENV === 'development')
      //     ? 'trace'
      //     : 'error'
    });

    this.interface.prompt.broadcast.destroyBroadcast();
  }

  onBroadcast(message) {
    if (this.player) this.player.onBroadcast(message);
  }

  playCJAnimation(seat, animation) {
    this.player.playAnimation({ winseat: seat, name: animation });
  }

  /**
   * 
   * @param {string} widget widget name
   * @param {bool} isFullscreen whether to load the swf as it is, on false, scales the widget down to 85% and adds a backdrop
   */
  bootWidget(widget, isFullscreen = true) {
    this.path = `widgets/${this.crumbs.ruffle_widgets[widget]}.swf`;

    this.widgetName = widget
    
    
    const ruffle = window.RufflePlayer.newest();
    this.player = ruffle.createPlayer();
    
    const playerStyle = isFullscreen ? this.playerStyle : this.containedPlayerStyle;
    this.container.setElement(this.player, playerStyle);

    if (!isFullscreen) {
      this.isFullscreen = false;
      this.interface.loadWidget("RuffleBackdrop");
    }

    this.player.load({
      url: `${this.basePath}${this.path}`,
      allowScriptAccess: true,
      menu: false,
      contextMenu: "off",
      scale: "noborder",
      autoplay: "on",
      warnOnUnsupportedContent: false,
      logLevel: 'error'//'info'

      // logLevel: (localStorage.logging == 'true' && process.env.NODE_ENV === 'development')
      //     ? 'trace'
      //     : 'error'
    });
  }

  onWidgetLoadComplete() {
    this.container.visible = true;
    this.interface.prompt.loadingPromptFactory.prompts[`ruffle_${this.widgetName}`].destroy()
    delete this.interface.prompt.loadingPromptFactory.prompts[`ruffle_${this.widgetName}`]
    this.interface.main.events.emit('hide_main_inputs');
  }

  bootRoom(path, mute = false) {
    const ruffle = window.RufflePlayer.newest();
    this.player = ruffle.createPlayer();
    this.isFullscreen = true;

    this.container.setElement(this.player, this.playerStyle);

    this.player.load({
      //url: `${this.basePath}boot${use_alt_loader ? "_as3" : ""}.swf`,
      url: path,
      allowScriptAccess: true,
      menu: false,
      contextMenu: "off",
      scale: "noborder",
      autoplay: "on",
      warnOnUnsupportedContent: false,
      splashScreen: false,
      logLevel: 'error' //'trace'
    });

    if(mute) {
			this.player.volume = 0
		} else {
			this.player.volume = 0.7
		}
  }

  /**
   * takes same arguments as mozilla's EventTarget.addEventListener
   * Additionally, keeps track of all attached event listeners
   */
  addEventListener(...args) {
    this.eventListeners.push([...args]);
    this.gameEvents.addEventListener(...args);
  }

  closeWidget() {
    try {
      setTimeout(() => {
        this.player.pause();
      }, 100);
      
      this.container.visible = false;
      this.widgetName = null;
      this.interface.main.events.emit('show_main_inputs');
      
      if (!this.isFullscreen) {
        this.interface.destroyWidget(this.interface.loadedWidgets["RuffleBackdrop"]);
      }
      
    } finally {
      this.removeEventListeners();
    }
  }

  closeRoom() {
    try {
      setTimeout(() => {
        this.player.pause();
      }, 100);
      
      this.container.visible = false;
      this.world.room.game.domContainer.style.zIndex = 'auto'
    } finally {
      this.removeEventListeners();
    }
  }


  /**
   * removes all event listeners attached after last load
   */
  removeEventListeners() {
    this.eventListeners.map( eventArgs => this.gameEvents.removeEventListener(...eventArgs) );
  }

  onLoadComplete() {
    if (this.gameName != "card") {
      // cj is weird, this is handled in its own loader
      this.interface.hideLoading();
      this.interface.hideInterface();
    }

    this.stopMusic();

    this.container.visible = true;

    if(this.gameName == "dancing") {
      this.dancing = new DanceFloor(this)
    }
  }

  close() {
    try {

      this.gameName = undefined;
      this.game.domContainer.style.zIndex = "auto";
      
      setTimeout(() => {
      this.player.pause();
    }, 100);
    
    this.container.visible = false;
    this.stopMusic();
    
    this.world.client.sendJoinLastRoom();
    
    if(this.gameName == "dancing") this.dancing.destroy()

    } finally {
      this.removeEventListeners();
    }
  }

  getKeys() {
    return this.keys;
  }

  getPath() {
    return `${this.basePath}${this.path}`;
  }

  getFrameColor() {
    return this.crumbs.frameColor;
  }

  getMyPlayer() {
    //TODO
    return this.world.client.penguin;
  }

  getGamesPath() {
    return `${this.basePath}games/`;
  }

  getMyPlayerId(_id) {
    return this.world.client.penguin.id;
  }

  getPlayerObjectById(id) {
    return {
      ...this.world.client.penguin.room.penguins[id].items.equippedFlat,
      color: this.world.client.penguin.room.penguins[id].color,
      photo: this.world.client.penguin.room.penguins[id].photo,
      flag: this.world.client.penguin.room.penguins[id].flag,
    };
    //todo: make this work for multiplayer games such as dance contest, add actual functionality lol
    // rn it just returns current player
  }

  getMyPlayerHex() {
    return this.world.getColor(this.world.client.penguin.color);
  }

  isItemOnMyPlayer(item) {
    item = item[0]; // it sends as an object 4 Some reason

    const itemSlots = this.getPlayerObjectById(this.getMyPlayerId());

    for (const i in itemSlots) {
      const itemID = itemSlots[i];

      if (itemID == item) {
        return true;
      }
    }

    const items = this.world.client.penguin.items.equippedFlat;

    for (const x in items) {
      if (items[x] === item) {
        return true;
      }
      if (items[x] === 751 && puffleColor == "pink") {
        return true;
      }
    }
  }

  playerWearingItem(item) {
    const items = this.world.client.penguin.items.equippedFlat;

    for (const x in items) {
      if (items[x] === item) {
        return true;
      }
    }
  }

  isItemInMyInventory(item) {
    if (item instanceof Array) {
        item = item[0]
    }

    return this.world.client.hasItemBetter(item)
  }

  buyInventory(item) {
    //this.game.domContainer.style.zIndex = -10
    this.interface.prompt.showItem(item);
  }

  getMyPlayerNickname() {
    return this.world.client.penguin.displayName;
  }

  isMyPlayerMember() {
    return true;
  }

  getCurrentServerRoomId() {
    return this.world.room.id;
  }

  /**
   * Not secure for usage regarding earning items or coins.
   * It can be used to track in-game states
   * @param {object} obj
   * @param {string} obj.event event name to emit
   * @param {any} obj.args
   */
  sendGameEvent(obj) {
    if (!obj?.event) return;

    this.gameEvents.dispatchEvent(new CustomEvent(obj.event, {
      detail: obj.args,
    }));
  }

  sendGameOverAltLoader(obj) {
    if (isNaN(obj[0])) obj[0] = 0;

    this.network.send("game_over", { coins: obj[0] });

    this.game.domContainer.style.zIndex = -10;
  }

  sendGameOver(obj) {
    //Fair
    if (obj.tickets != undefined) {
      if(isNaN(obj.tickets)) obj.tickets = 0
      if(obj.tickets > 0) {
        // Remove after fair
        this.world.party.addTicketsForQuests(obj.tickets)
        this.world.party.checkQuest68(this.gameName)
        this.world.party.sendAddPartyCoins(obj.tickets)
      }
      this.game.domContainer.style.zIndex = -10;
      if (this.ruffle.container.visible) {
        this.ruffle.close();
      }
      return;
    }

    //Missions
    if (this.isQuest) {
      this.game.domContainer.style.zIndex = -10;
      if (this.ruffle.container.visible) {
        this.ruffle.close();
      }
      return;
    }

    let coins = obj.coins;

    // deno-lint-ignore no-prototype-builtins
    if (!obj.hasOwnProperty("coins")) {
      // sometimes ruffle sends as a straight value
      coins = obj;
    }

    if (isNaN(coins)) coins = 0;

    this.network.send("game_over", {
      coins: coins,
      game: this.gameName ? this.gameName : "null",
    });

    this.game.domContainer.style.zIndex = -10;
  }

  stampIsOwnedByMe(id) {
    if (Array.isArray(id)) id = id[0];
    return this.world.client.stamps.includes(id);
  }

  stampEarnedCpj(id) {
    if (this.stampIsOwnedByMe(id)) {
      return;
    }

    this.stampEarned(id);
    return this.world.stampController.getStamp(id);
  }

  stampEarnedAltLoader(id) {
    if (this.stampIsOwnedByMe(id)) {
      return;
    }

    this.stampEarned(id, true);
    const stampObj = this.world.stampController.getStamp(id);
    this.player.onGetStamp([stampObj.stamp_id, stampObj.name, stampObj.rank]);
  }

  addItemToMyInventory(id) {
    if (this.isItemInMyInventory(id)) return;
    this.network.send("add_item", { item: id });
  }

  startMusicById(id) {
    this.startGameMusic(id[0]);
  }

  startGameMusic(customMusic = false) {
    let music = this.music;

    if (customMusic !== false) {
      music = customMusic;
    }

    if (!music && !this.mainLoops) {
      return;
    }

    if (customMusic || !this.mainLoops) {
      this.startPlayingMusic(music);
    } else if (this.mainLoops) {
      this.startPlayingLoopedMusic(this.preLoop, this.mainLoops);
    }
  }

  startPlayingMusic(music) {
    if (this.cache.audio.exists(music)) {
      return this.playMusic(music);
    }

    this.load.audio(music, `assets/media/music/${music}.mp3`);
    this.load.start();

    this.load.once(`filecomplete-audio-${music}`, () => {
      this.playMusic(music);
    });
  }

  startPlayingLoopedMusic(preLoop, mainLoops) {
    this.preLoop = preLoop;
    this.mainLoops = mainLoops;

    const loops = preLoop ? [preLoop] : [];
    if (mainLoops) loops.push(...mainLoops);

    loops.forEach((loop) => {
      if (!this.cache.audio.exists(loop)) {
        this.load.audio(loop, `assets/media/music/${loop}.mp3`);
      }
    });

    this.load.once(`complete`, () => {
      this.playLoopedMusic(this.preLoop, this.mainLoops);
    });
    this.load.start();
  }

  getPuffleColor() {
    return this.world.client.penguin.puffle.type;
  }

  loadCardJitsuWorld() {
    if (this.world.room.key != "Card") return;

    this.world.room.loadCardJitsu();
  }

  CardJitsuDownloadedAnimation(animation) {
    if (this.world.room.key != "Card") return;

    this.world.room.loadAnimation(animation[0]);
  }

  sendDancingPacket(data) {
    if (this.gameName !== "dancing") return
    if (this.dancing == undefined || this.dancing == null) return
    data = data[0]
    this.dancing.sendPacket(data[0], data[1])
  }

  getLocalizedFrame() {
    return 1
  }
}
