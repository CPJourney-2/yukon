import fonts from './fonts';
import igloos from './igloos';
import rooms from './rooms';
import widgets from './widgets';
import newspapers from './newspapers';
import minigames from './minigames';

import SoundFileFactory from '@engine/sound/SoundFileFactory';
import OutlinePipelinePlugin from 'phaser3-rex-plugins/plugins/outlinepipeline-plugin.js';
import InputTextPlugin from 'phaser3-rex-plugins/plugins/inputtext-plugin.js';
import FileChooserPlugin from 'phaser3-rex-plugins/plugins/filechooser-plugin.js';

if (!localStorage.getItem('webgl')) {
    localStorage.setItem('webgl', 'true');
}

const DEBUG_SHOW_PHYSICS = false;

let antialias = true;

if (localStorage.getItem('lowQuality')) {
    antialias = false;
} else {
    antialias = true;
}

const game = {
    type:
        localStorage.getItem('webgl') == 'true' ? Phaser.WEBGL : Phaser.CANVAS,

    width: 1520,
    height: 960,
    transparent: true,
    roundPixels: true,

    antialias: antialias,
    antialiasGL: antialias,

    loader: {
        baseURL: process.env.NODE_ENV === 'development' ? '' : CDN_URL,
    },

    dom: {
        createContainer: true,
    },

    physics: {
        default: 'matter',
        matter: {
            debug: {
                renderFill: DEBUG_SHOW_PHYSICS,
                renderLine: DEBUG_SHOW_PHYSICS,
                showInternalEdges: DEBUG_SHOW_PHYSICS,
            },
            gravity: false,
        },
    },

    audio: {
        // Default Phaser audio systems not needed
        noAudio: true,
    },

    plugins: {
        global: [
            {
                key: 'rexOutlinePipeline',
                plugin: OutlinePipelinePlugin,
                start: true,
            },
            {
                key: 'rexInputTextPlugin',
                plugin: InputTextPlugin,
                start: true,
            },
            {
                key: 'rexFileChooserPlugin',
                plugin: FileChooserPlugin,
                start: true,
            },
        ],
    },

    scale: {
        parent: 'game',
        mode: Phaser.Scale.FIT,
        autoRound: true,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },

    crumbs: {
        fonts: fonts,

        scenes: {
            igloos: igloos,
            rooms: rooms,
            minigames: minigames,
        },

        widgets: widgets,
        newspapers: newspapers,

        frameColor: 0x28a5fa,
        iglooIdOffset: 2000,
    },

    callbacks: {
        preBoot: () => {
            // Override default Phaser audio loader, loads audio for howler.js instead
            Phaser.Loader.FileTypesManager.register(
                'audio',
                function (key, urls, _, xhrSettings) {
                    return SoundFileFactory.create(
                        this,
                        key,
                        urls,
                        xhrSettings
                    );
                }
            );
        },
    },
};

export default game;
