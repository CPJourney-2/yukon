import BaseContainer from '@scenes/base/BaseContainer';

/* START OF COMPILED CODE */

export default class SharedCoaster extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // town_tracks
        const town_tracks = scene.add.image(0, 0, "town_tracks");
        town_tracks.setOrigin(0, 0);
        this.add(town_tracks);

        /* START-USER-CTR-CODE */

        town_tracks.setTexture(scene.key.toLowerCase() + "_tracks")
        this.depth = 5000

        if(!scene) return console.error("SharedCoaster not attached to scene???")

        //this.scene is getting attached by phaser, so i dont wanna overwrite that, but it seems to be getting reset to null, so heres our own copy
        //this.scene is required for BaseContainer to work properly btw, so we cant rly use the BaseContainer stuff
        //we could probs somehow make sure it doesnt get reset but i dont have time for that
        //would delegate to chris but i think were at the point where we just need something working and cant bother with "proper" solutions
        //that dont actually affect the user........ anyways this is also why the chris fix didnt work before btw, i still crashed
        this.thestupidscene = scene

        if(this.thestupidscene.world.party.coasterWontRun) return

        let coasterVideo = this.thestupidscene.add.video(0, 0).loadURL(`assets/media/rooms/_fair/coaster/${scene.key.toLowerCase()}_coaster.webm`, true, "anonymous");
        coasterVideo.setOrigin(0);
        coasterVideo.depth = 5001
        town_tracks.depth = 1
        
        this.coasterVideo = coasterVideo

        if (!this.world.room) return
        
        this.thestupidscene.events.on('scene-awake', () => {
            //can be removed this is for testing on room join
            this.coasterVideo.play(false)

            //1st schedule
            this.scheduleCoaster()
        })

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    scheduleCoaster() {
        if (!this.thestupidscene.world) {
            return console.error("SharedCoaster World not found, please report this as a bug")
        }

        //random second count between 30 and 60
        let randomSeconds = Math.floor(Math.random() * 30) + 30

        this.depth = 5000

        this.thestupidscene.world.room.time.delayedCall(randomSeconds * 1000, () => {
            this.coasterVideo.play(false)
            
            this.scheduleCoaster()
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */