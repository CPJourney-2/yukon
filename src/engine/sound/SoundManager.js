import { Howl } from 'howler'


export default class SoundManager extends HowlerGlobal {

    /**
     * 
     * @param {Game} game 
     */
    constructor(game) {
        super()

        this.cache = game.cache.audio

        this.game = game

        // Active howl objects
        this.sounds = {}

        this.currentMusic
        this.muteMusic = (localStorage.muteMusic == 'true') ? true : false
        this.muteSFX = (localStorage.muteSFX == 'true') ? true : false
        this.unlimitedSFX = (localStorage.unlimitedSFX == 'true') ? true : false

    }

    play(key, config = {}, offset = 0) {
        if (!this.cache.exists(key)) {
            return
        }

        let sound

        if (key in this.sounds) {
            sound = this.sounds[key]
            sound.seek(offset)
            sound.play()

        } else {
            sound = this.add(key, config)
            sound.seek(offset)
        }

        return sound
    }

    playSfx(key, config = {}, override = false) {
        // note: in future have a muteSfx on the menu. will also need to loop thru all playing sfx sounds and stop them when this is added [incase of looping audio]
        if (this.muteSFX) {
            return
        }

        if (!document.hasFocus()) {
            return
        }

        if (!this.cache.exists(key)) {
            return
        }

        let sound


        if (key in this.sounds) {
            sound = this.sounds[key]
            
            sound.volume(0.3)

            if (config.volume) sound.volume(config.volume)


            // client side rate limit, stops a single sound from playing more than once at a time
            if (sound.playing() && !this.unlimitedSFX && !override) {
                return
            }

            sound.play()

        } else {
            sound = this.add(key, config)
            sound.volume(0.3)
            if (config.volume) sound.volume(config.volume)

        }

        return sound
    }

    playTimedSfx(key,cooldown) {
        setTimeout(() => this.playSfx(key),cooldown)
    }

    getMusicVolume() {
        return 0.5
    }

    getRealMusicVolume() {
        return this.muteMusic ? 0 : this.getMusicVolume()
    }

    preloadLoops() {
        for(let loop of this.mainLoops) {
            let music = this.add(loop, {loop: false, onend: () => {this.playNextSong()}}, true)
            music.stop()
        }
    }

    playNextSong() {
        let choices = this.mainLoops.filter(item => (!this.currentMusic || item != this.currentMusic.key))
        let nextSong = choices[Math.floor((Math.random()*choices.length))]

        if (this.currentMusic) this.currentMusic.stop()
        let music = this.play(nextSong) //config parameters are defined in preloadLoops

        if (music) {
            music.volume(this.getMusicVolume())
            this.currentMusic = music
        }
    }

    playLoopedMusic(preLoop, mainLoops) {
        //TODO: fix the following scenarios - preLoop in mainLoops, no preLoop

        if (this.muteMusic) {
            return
        }

        /*if (this.currentMusic && this.currentMusic.key == preLoop) {
            return
        }*/

        this.stopMusic()
        this.mainLoops = mainLoops

        this.preloadLoops()

        if(!preLoop) {
            this.playNextSong()
            return
        }

        let music = this.play(preLoop, { loop: false, onend: () => {this.playNextSong()}})

        if (music) {
            music.volume(this.getMusicVolume())
            this.currentMusic = music
        }
    } 

    playMusic(key, offset = 0, loop = true, onend = () => {}) {
        if (this.muteMusic) {
            return
        }

        if (this.currentMusic && this.currentMusic.key == key) {
            return
        }

        this.stopMusic()

        let music = this.play(key, { loop: loop, onend: onend }, offset)

        if (music) {
            music.volume(this.getMusicVolume())
            music.seek(offset)
            this.currentMusic = music
        }
    }

    playLayeredMusic(keys) {
        this.stopMusic()

        this.layeredMusic = []

        for(let key of keys) {
            let music = this.play(key, { loop: true })
            music.volume(this.getMusicVolume())
            this.layeredMusic.push(key)
        }

        /*if (music) {
            this.currentMusic = music
        }*/
    }

    changeLayerMute(layer, state) {
        if(!this.layeredMusic || this.layeredMusic.length <= layer) return

        this.sounds[this.layeredMusic[layer]].volume((state && !this.muteMusic) ? this.getMusicVolume() : 0)
    }

    changeLayerMutes(layers) {
        for(let [layer, state] of layers.entries()) {
            this.changeLayerMute(layer, state)  
        }
    } 

    rewindLayers() {
        if(!this.layeredMusic) return

        for(let music of this.layeredMusic) {
            if(!this.sounds[music]) continue
            this.sounds[music].seek(0)
        }
    }

    stopAll() {
        this.stopAllButMusic()
        this.stopMusic()
        this.stopConcertMusic()
    }

    stopAllButMusic() {
        for (let sound of Object.values(this.sounds)) {
            if(!sound) continue
            if(sound != this.currentMusic) this.remove(sound)
        }
    }

    stopMusic() {
        if (this.currentMusic) {
            this.remove(this.currentMusic)
            this.currentMusic = null
        }

        this.unloadLoops()
        this.unloadLayeredMusic()
    }

    add(key, config, skipPlaying = false) {
        config = {
            src: this.cache.get(key),
            format: 'mp3',
            ...config
        }

        let sound = new Howl(config)

        sound.key = key
        this.sounds[key] = sound

        if (!sound) return null

        sound.once('load', () => {
            if(!skipPlaying) sound.play()
            //else sound.pause()
        })

        return sound
    }

    remove(howl) {
        howl.unload()
        delete this.sounds[howl.key]
    }

    unloadLoops() {
        if (!this.mainLoops) return

        this.mainLoops.forEach(loop => {
            if(this.sounds[loop]) {
                this.sounds[loop].unload()
                delete this.sounds[loop]
            }
        })

        this.mainLoops = null
    }

    unloadLayeredMusic() {
        if (!this.layeredMusic) return

        this.layeredMusic.forEach(loop => {
            if(this.sounds[loop]) {
                this.sounds[loop].unload()
                delete this.sounds[loop]
            }
        })

        this.layeredMusic = null
    }

    /* MUSIC JAM CONCERT TRACKS */

    playConcertMusic(key, firstTime = false, duration) {
        let offset //= firstTime ? 0 : party.concertDuration / 1000
        if(firstTime) {
            offset = 0
        } else {
            offset = duration < 0 ? 0 : duration / 1000
        }

        let loop = false

        if (this.muteMusic) {
            return
        }

        let music = this.play(key, { loop: loop }, offset)

        if (music) {
            music.volume(this.getMusicVolume())
            music.seek(offset)
            this.concertMusic = music
            music.on('end', () => this.stopConcertMusic())
        }
    }

    stopConcertMusic() {
        if (this.concertMusic) {
            this.remove(this.concertMusic)
            this.concertMusic = null
        }
    }

}
