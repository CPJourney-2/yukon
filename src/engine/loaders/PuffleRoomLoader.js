import BaseLoader from "./BaseLoader";


export default class PuffleRoomLoader extends BaseLoader {

    constructor(puffle, room) {
        super(room)
		this.puffle = puffle
        this.baseURL =  (process.env.NODE_ENV === 'development') ? '/assets/media/puffles/room_sprites/' : CDN_URL + "assets/media/puffles/room_sprites/"
		this.keyPrefix = 'puffle_room_'
    }

    loadPuffle(puffle) {
        let mainKey = this.getKey(puffle);

        if (this.checkComplete('json', mainKey, () => {
            this.onFileComplete(mainKey)
        })) {
            return
        }

        this.multiatlas(mainKey, `${puffle}.json`);
        this.start();
    }

    onFileComplete(key) {
        if(!this.textureExists(key)) {
            return;
        }

        this.puffle.loadPuffle();
    }


}