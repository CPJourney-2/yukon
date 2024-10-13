import { Interactive } from '@components/components'
import Tile from './Tile'

/* START OF COMPILED CODE */

export default class Sudoku extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Container} */
        this.win;
        /** @type {Tile[]} */
        this.group1;
        /** @type {Tile[]} */
        this.group2;
        /** @type {Tile[]} */
        this.group3;
        /** @type {Tile[]} */
        this.group4;
        /** @type {Tile[]} */
        this.group5;
        /** @type {Tile[]} */
        this.group6;
        /** @type {Tile[]} */
        this.row1;
        /** @type {Tile[]} */
        this.row2;
        /** @type {Tile[]} */
        this.row3;
        /** @type {Tile[]} */
        this.row4;
        /** @type {Tile[]} */
        this.row5;
        /** @type {Tile[]} */
        this.row6;
        /** @type {Tile[]} */
        this.column1;
        /** @type {Tile[]} */
        this.column2;
        /** @type {Tile[]} */
        this.column3;
        /** @type {Tile[]} */
        this.column4;
        /** @type {Tile[]} */
        this.column5;
        /** @type {Tile[]} */
        this.column6;


        // tile1
        const tile1 = new Tile(scene, 8, 8);
        this.add(tile1);

        // tile2
        const tile2 = new Tile(scene, 112, 8);
        this.add(tile2);

        // tile7
        const tile7 = new Tile(scene, 8, 110);
        this.add(tile7);

        // tile8
        const tile8 = new Tile(scene, 112, 110);
        this.add(tile8);

        // tile9
        const tile9 = new Tile(scene, 217, 110);
        this.add(tile9);

        // tile3
        const tile3 = new Tile(scene, 217, 8);
        this.add(tile3);

        // tile12
        const tile12 = new Tile(scene, 536, 110);
        this.add(tile12);

        // tile11
        const tile11 = new Tile(scene, 431, 110);
        this.add(tile11);

        // tile10
        const tile10 = new Tile(scene, 327, 110);
        this.add(tile10);

        // tile4
        const tile4 = new Tile(scene, 327, 8);
        this.add(tile4);

        // tile5
        const tile5 = new Tile(scene, 431, 8);
        this.add(tile5);

        // tile6
        const tile6 = new Tile(scene, 536, 8);
        this.add(tile6);

        // tile18
        const tile18 = new Tile(scene, 538, 220);
        this.add(tile18);

        // tile17
        const tile17 = new Tile(scene, 433, 220);
        this.add(tile17);

        // tile16
        const tile16 = new Tile(scene, 329, 220);
        this.add(tile16);

        // tile22
        const tile22 = new Tile(scene, 329, 322);
        this.add(tile22);

        // tile23
        const tile23 = new Tile(scene, 433, 322);
        this.add(tile23);

        // tile24
        const tile24 = new Tile(scene, 538, 322);
        this.add(tile24);

        // tile15
        const tile15 = new Tile(scene, 219, 220);
        this.add(tile15);

        // tile21
        const tile21 = new Tile(scene, 219, 322);
        this.add(tile21);

        // tile20
        const tile20 = new Tile(scene, 114, 322);
        this.add(tile20);

        // tile19
        const tile19 = new Tile(scene, 10, 322);
        this.add(tile19);

        // tile14
        const tile14 = new Tile(scene, 114, 220);
        this.add(tile14);

        // tile13
        const tile13 = new Tile(scene, 10, 220);
        this.add(tile13);

        // tile30
        const tile30 = new Tile(scene, 535, 433);
        this.add(tile30);

        // tile29
        const tile29 = new Tile(scene, 430, 433);
        this.add(tile29);

        // tile28
        const tile28 = new Tile(scene, 326, 433);
        this.add(tile28);

        // tile34
        const tile34 = new Tile(scene, 326, 535);
        this.add(tile34);

        // tile35
        const tile35 = new Tile(scene, 430, 535);
        this.add(tile35);

        // tile36
        const tile36 = new Tile(scene, 535, 535);
        this.add(tile36);

        // tile27
        const tile27 = new Tile(scene, 216, 433);
        this.add(tile27);

        // tile33
        const tile33 = new Tile(scene, 216, 535);
        this.add(tile33);

        // tile32
        const tile32 = new Tile(scene, 111, 535);
        this.add(tile32);

        // tile31
        const tile31 = new Tile(scene, 7, 535);
        this.add(tile31);

        // tile26
        const tile26 = new Tile(scene, 111, 433);
        this.add(tile26);

        // tile25
        const tile25 = new Tile(scene, 7, 433);
        this.add(tile25);

        // sudoku_outline
        const sudoku_outline = scene.add.image(0, 0, "news-common", "sudoku/outline");
        sudoku_outline.setOrigin(0, 0);
        this.add(sudoku_outline);

        // win
        const win = scene.add.container(332, 326);
        win.visible = false;
        this.add(win);

        // blocker
        const blocker = scene.add.rectangle(-8, -1, 650, 650);
        blocker.isFilled = true;
        blocker.fillAlpha = 0.75;
        win.add(blocker);

        // you_win
        const you_win = scene.add.text(-376, -162, "", {});
        you_win.angle = -5;
        you_win.text = "YOU WON!";
        you_win.setStyle({ "align": "center", "color": "#db0000ff", "fixedWidth":700,"fixedHeight":110,"fontFamily": "CCFaceFront", "fontSize": "100px", "fontStyle": "bold italic", "shadow.offsetX":4,"shadow.offsetY":4,"shadow.stroke":true,"shadow.fill":true});
        win.add(you_win);

        // sudokupufflewin
        const sudokupufflewin = scene.add.image(13, 103, "news-common", "sudoku/win-puffle");
        sudokupufflewin.angle = -20;
        win.add(sudokupufflewin);

        // lists
        const group1 = [tile2, tile1, tile3, tile9, tile8, tile7];
        const group2 = [tile10, tile11, tile12, tile6, tile5, tile4];
        const group3 = [tile19, tile20, tile21, tile15, tile14, tile13];
        const group4 = [tile22, tile23, tile24, tile18, tile17, tile16];
        const group5 = [tile27, tile33, tile31, tile32, tile25, tile26];
        const group6 = [tile28, tile30, tile29, tile36, tile35, tile34];
        const row1 = [tile1, tile2, tile3, tile4, tile5, tile6];
        const row2 = [tile7, tile8, tile9, tile10, tile11, tile12];
        const row3 = [tile13, tile14, tile15, tile16, tile17, tile18];
        const row4 = [tile19, tile20, tile21, tile22, tile23, tile24];
        const row5 = [tile25, tile26, tile27, tile28, tile29, tile30];
        const row6 = [tile31, tile32, tile33, tile34, tile35, tile36];
        const column1 = [tile1, tile7, tile13, tile19, tile25, tile31];
        const column2 = [tile14, tile2, tile8, tile20, tile26, tile32];
        const column3 = [tile3, tile9, tile15, tile27, tile21, tile33];
        const column4 = [tile4, tile10, tile16, tile22, tile28, tile34];
        const column5 = [tile5, tile11, tile17, tile23, tile35, tile29];
        const column6 = [tile6, tile12, tile18, tile24, tile30, tile36];

        // blocker (components)
        new Interactive(blocker);

        this.win = win;
        this.group1 = group1;
        this.group2 = group2;
        this.group3 = group3;
        this.group4 = group4;
        this.group5 = group5;
        this.group6 = group6;
        this.row1 = row1;
        this.row2 = row2;
        this.row3 = row3;
        this.row4 = row4;
        this.row5 = row5;
        this.row6 = row6;
        this.column1 = column1;
        this.column2 = column2;
        this.column3 = column3;
        this.column4 = column4;
        this.column5 = column5;
        this.column6 = column6;

        /* START-USER-CTR-CODE */
        this.allTiles = [...this.row1,...this.row2,...this.row3,...this.row4,...this.row5,...this.row6]

        this.tileArray1 = [[{a:2,hide:false},{a:3,hide:true},{a:6,hide:true},{a:5,hide:true},{a:1,hide:true},{a:4,hide:true}],[{a:1,hide:true},{a:5,hide:true},{a:4,hide:false},{a:3,hide:false},{a:2,hide:true},{a:6,hide:false}],[{a:3,hide:true},{a:2,hide:true},{a:1,hide:true},{a:6,hide:true},{a:4,hide:false},{a:5,hide:false}],[{a:4,hide:false},{a:6,hide:false},{a:5,hide:true},{a:2,hide:true},{a:3,hide:true},{a:1,hide:true}],[{a:5,hide:false},{a:4,hide:true},{a:2,hide:false},{a:1,hide:false},{a:6,hide:true},{a:3,hide:true}],[{a:6,hide:true},{a:1,hide:true},{a:3,hide:true},{a:4,hide:true},{a:5,hide:true},{a:2,hide:false}]]
        this.tileArray2 = [[{a:5,hide:false},{a:4,hide:true},{a:2,hide:false},{a:1,hide:false},{a:6,hide:true},{a:3,hide:true}],[{a:6,hide:true},{a:1,hide:true},{a:3,hide:true},{a:4,hide:true},{a:5,hide:true},{a:2,hide:false}],[{a:2,hide:false},{a:3,hide:true},{a:6,hide:true},{a:5,hide:true},{a:1,hide:true},{a:4,hide:true}],[{a:1,hide:true},{a:5,hide:true},{a:4,hide:false},{a:3,hide:false},{a:2,hide:true},{a:6,hide:false}],[{a:3,hide:true},{a:2,hide:true},{a:1,hide:true},{a:6,hide:true},{a:4,hide:false},{a:5,hide:false}],[{a:4,hide:false},{a:6,hide:false},{a:5,hide:true},{a:2,hide:true},{a:3,hide:true},{a:1,hide:true}]]
        this.tileArray3 = [[{a:2,hide:false},{a:3,hide:true},{a:6,hide:true},{a:5,hide:true},{a:1,hide:true},{a:4,hide:true}],[{a:1,hide:true},{a:5,hide:true},{a:4,hide:false},{a:3,hide:false},{a:2,hide:true},{a:6,hide:false}],[{a:3,hide:true},{a:2,hide:true},{a:5,hide:true},{a:6,hide:true},{a:4,hide:false},{a:1,hide:false}],[{a:4,hide:false},{a:6,hide:false},{a:1,hide:true},{a:2,hide:true},{a:3,hide:true},{a:5,hide:true}],[{a:5,hide:false},{a:4,hide:true},{a:2,hide:false},{a:1,hide:false},{a:6,hide:true},{a:3,hide:true}],[{a:6,hide:true},{a:1,hide:true},{a:3,hide:true},{a:4,hide:true},{a:5,hide:true},{a:2,hide:false}]]

        this.tileArray = []
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    start(board) {
        this.tileArray = this[`tileArray${board}`]

        // Build the board
        for(let i = 0; i < this.tileArray.length; i++) {
            for(let j = 0; j < this.tileArray[i].length; j++) {
                let info = this.tileArray[i][j]
                let tile = this[`row${i + 1}`][j]
                if(info.hide) {
                    tile.addInteractive()
                } else {
                    tile.setPuffle(info.a)
                }
            }
        }
    }

    checkBoard() {
        for(let section of ['row', 'column', 'group']) {
            for(let i = 1; i < 7; i++) {
                let checks = [false,false,false,false,false,false]
                for(let tile of this[`${section}${i}`]) {
                    if(tile.puffle === 0) return
                    if(checks[tile.puffle - 1]) return
                    checks[tile.puffle - 1] = true
                }
            }
        }

        this.win.visible = true
    }

    resetTiles() {
        this.win.visible = false
        for(let tile of this.allTiles) tile.resetIfPossible()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */