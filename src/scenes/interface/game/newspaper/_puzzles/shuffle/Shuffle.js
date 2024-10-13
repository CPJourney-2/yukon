
import { Button, SimpleButton } from '@components/components'
import Tile from './Tile'

/* START OF COMPILED CODE */

export default class Shuffle extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Tile} */
        this.tile1;
        /** @type {Tile} */
        this.tile2;
        /** @type {Tile} */
        this.tile3;
        /** @type {Tile} */
        this.tile4;
        /** @type {Tile} */
        this.tile5;
        /** @type {Tile} */
        this.tile6;
        /** @type {Tile} */
        this.tile7;
        /** @type {Tile} */
        this.tile8;
        /** @type {Tile} */
        this.tile9;
        /** @type {Phaser.GameObjects.Text} */
        this.movesTxt;
        /** @type {Phaser.GameObjects.Container} */
        this.howToPlay;
        /** @type {Tile[]} */
        this.tiles;


        // reset
        const reset = scene.add.image(314, 266, "news-common", "shuffle/resetbtn");
        this.add(reset);

        // bg
        const bg = scene.add.rectangle(62, -58, 610, 610);
        bg.isFilled = true;
        bg.fillColor = 5134707;
        bg.isStroked = true;
        bg.strokeColor = 0;
        bg.lineWidth = 6;
        this.add(bg);

        // submityourown
        const submityourown = scene.add.image(59, 299, "news-common", "submit-btn");
        submityourown.scaleX = 0.8425158960590011;
        submityourown.scaleY = 0.743450521873878;
        submityourown.visible = false;
        this.add(submityourown);

        // _tiles
        const _tiles = scene.add.container(-238, -359);
        this.add(_tiles);

        // tile1
        const tile1 = new Tile(scene, 0, 0);
        _tiles.add(tile1);

        // tile2
        const tile2 = new Tile(scene, 200, 0);
        _tiles.add(tile2);

        // tile3
        const tile3 = new Tile(scene, 400, 0);
        _tiles.add(tile3);

        // tile4
        const tile4 = new Tile(scene, 0, 200);
        _tiles.add(tile4);

        // tile5
        const tile5 = new Tile(scene, 200, 200);
        _tiles.add(tile5);

        // tile6
        const tile6 = new Tile(scene, 400, 200);
        _tiles.add(tile6);

        // tile7
        const tile7 = new Tile(scene, 0, 400);
        _tiles.add(tile7);

        // tile8
        const tile8 = new Tile(scene, 200, 400);
        _tiles.add(tile8);

        // tile9
        const tile9 = new Tile(scene, 400, 400);
        _tiles.add(tile9);

        // movesTxt
        const movesTxt = scene.add.text(-153, 264, "", {});
        movesTxt.text = "9999";
        movesTxt.setStyle({ "color": "#000", "fixedWidth":90,"fixedHeight":30,"fontFamily": "CCFaceFront", "fontSize": "20px" });
        this.add(movesTxt);

        // movesTitle
        const movesTitle = scene.add.text(-250, 262, "", {});
        movesTitle.text = "MOVES:";
        movesTitle.setStyle({ "color": "#000", "fixedWidth":90,"fixedHeight":30,"fontFamily": "CCFaceFront", "fontSize": "20px", "fontStyle": "bold italic" });
        movesTitle.setPadding({"left":5});
        this.add(movesTitle);

        // resetTxt
        const resetTxt = scene.add.text(275, 257, "", {});
        resetTxt.text = "RESET";
        resetTxt.setStyle({ "color": "#000", "fixedWidth":90,"fixedHeight":30,"fontFamily": "CCFaceFront", "fontSize": "20px", "fontStyle": "bold italic" });
        this.add(resetTxt);

        // howToPlay
        const howToPlay = scene.add.container(63, -9);
        this.add(howToPlay);

        // howtoplaybtn
        const howtoplaybtn = scene.add.rectangle(0, -10, 650, 720);
        howtoplaybtn.isFilled = true;
        howtoplaybtn.fillColor = 15658734;
        howtoplaybtn.fillAlpha = 0.5;
        howToPlay.add(howtoplaybtn);

        // shuffle_howtoplay
        const shuffle_howtoplay = scene.add.image(-6, -27, "news-common", "shuffle/howtoplay");
        howToPlay.add(shuffle_howtoplay);

        // lists
        const tiles = [tile1, tile9, tile8, tile7, tile6, tile5, tile4, tile3, tile2];

        // reset (components)
        const resetButton = new Button(reset);
        resetButton.spriteName = "shuffle/resetbtn";
        resetButton.callback = () => this.resetGame();

        // submityourown (components)
        const submityourownButton = new Button(submityourown);
        submityourownButton.spriteName = "submit-btn";

        // howtoplaybtn (components)
        const howtoplaybtnSimpleButton = new SimpleButton(howtoplaybtn);
        howtoplaybtnSimpleButton.callback = () => this.howToPlay.visible = false;

        this.tile1 = tile1;
        this.tile2 = tile2;
        this.tile3 = tile3;
        this.tile4 = tile4;
        this.tile5 = tile5;
        this.tile6 = tile6;
        this.tile7 = tile7;
        this.tile8 = tile8;
        this.tile9 = tile9;
        this.movesTxt = movesTxt;
        this.howToPlay = howToPlay;
        this.tiles = tiles;

        /* START-USER-CTR-CODE */
        this.moves = 0
        this.movesTxt.text = this.moves

        this.map = this.mapReset

        this.emptyPosX = 2;
        this.emptyPosY = 2;

        this.initiated = false
        this.hasBeenPlayed = false
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get mapReset() {
        return [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ]
    }

    get positions() {
        return {
            1: { x: 0, y: 0 },
            2: { x: 200, y: 0 },
            3: { x: 400, y: 0 },
            4: { x: 0, y: 200 },
            5: { x: 200, y: 200 },
            6: { x: 400, y: 200 },
            7: { x: 0, y: 400 },
            8: { x: 200, y: 400 },
            9: { x: 400, y: 400 },
        }
    }

    init(data) {
        this.resetGame()
        if(!this.initiated) {
            this.imgAtlas = data.atlas
            this.imgKey = data.image
            for(let i = 0; i < this.tiles.length; i++) {
                let tile = this[`tile${i + 1}`]
                tile.addImage(this.positions[i + 1].x, this.positions[i + 1].y)
                tile.id = i + 1
                tile.addInteractive(() => this.onTileClick(tile.id))
            }
            this.initiated = true
        }
    }

    randomize() {
        let _loc2_ = Phaser.Math.Between(0,30) + 20;
        for(let _loc1_ = 0; _loc1_ < _loc2_; _loc1_++) {
            this.randomMove(this.emptyPosX, this.emptyPosY);
        }
    }

    randomMove(x, y) {
        let _loc3_ = Phaser.Math.Between(0,4)
        if (_loc3_ == 0 && y > 0) {
            this.swapElements(x, y, x, y - 1);
        } else if (_loc3_ == 1 && x < 2) {
            this.swapElements(x, y, x + 1, y);
        } else if (_loc3_ == 2 && y < 2) {
            this.swapElements(x, y, x, y + 1);
        } else if (_loc3_ == 3 && x > 0) {
            this.swapElements(x, y, x - 1, y);
        } else {
            this.randomMove(x, y);
        }
    }

    swapElements(x1, y1, x2, y2) {
        let _loc3_ = this.map[y1][x1];
        this.map[y1][x1] = this.map[y2][x2];
        this.map[y2][x2] = _loc3_;
        this.emptyPosY = y2;
        this.emptyPosX = x2;
    }

    // After shuffling, set the tiles to the correct spots
    setTilePositions() {
        for(let row = 0; row < this.map.length; row++) {
            for(let t = 0; t < this.map[row].length; t++) {
                let tile = this[`tile${this.map[row][t]}`]
                //let tile = this[`tile${(t + 1) + (row * 3)}`]
                tile.x = this.positions[(t + 1) + (row * 3)].x
                tile.y = this.positions[(t + 1) + (row * 3)].y
            }
        }
    }

    // Resets the game (runs on initiation or when the reset button is clicked)
    resetGame() {
        this.moves = 0
        this.emptyPosX = 2;
        this.emptyPosY = 2;
        this.movesTxt.text = this.moves
        this.tile9.visible = false
        for(let tile of this.tiles) tile.outline.visible = true
        this.randomize()
        this.setTilePositions()
        this.hasBeenPlayed = false
    }

    updateMoves() {
        this.moves++
        this.movesTxt.text = this.moves
    }

    onTileClick(id) {
        if(this.tileMoving) return

        this.hasBeenPlayed = true

        // Find the current index of the tile that was clicked
        let rowIndex = null
        let tileIndex = null
        for(let row = 0; row < this.map.length; row++) {
            for(let tile = 0; tile < this.map[row].length; tile++) {
                if(this.map[row][tile] == id) {
                    rowIndex = row
                    tileIndex = tile
                    break
                }
            }
            if(rowIndex || tileIndex) break
        }
        //if(!rowIndex && !tileIndex) return

        // Now we begin checking if any of the surrounding tiles (n,e,s,w) are empty.
        let offset = 0
        let mapRowOffset = 0
        let mapTileOffset = 0

        // Is left of the tile empty?
        if(this.map[rowIndex][tileIndex - 1]) {
            if(this.map[rowIndex][tileIndex - 1] == 9) {
                offset = -1
                mapTileOffset = -1
            }
        }
        // Is right of the tile empty?
        if(this.map[rowIndex][tileIndex + 1]) {
            if(this.map[rowIndex][tileIndex + 1] == 9) {
                offset = 1
                mapTileOffset = 1
            }
        }
        // Is above the tile empty?
        if(this.map[rowIndex - 1]) {
            if(this.map[rowIndex - 1][tileIndex] == 9) {
                offset = -3
                mapRowOffset = -1
            }
        }
        // Is below the tile empty?
        if(this.map[rowIndex + 1]) {
            if(this.map[rowIndex + 1][tileIndex] == 9) {
                offset = 3
                mapRowOffset = 1
            }
        }

        // If the offset was not changed, then no empty spots are available, so stop here.
        if(offset === 0) return

        // Register it on the map
        let from = (tileIndex) + (rowIndex * 3)
        let to = (tileIndex) + (rowIndex * 3) + offset

        this.map[rowIndex][tileIndex] = 9
        this.map[rowIndex + mapRowOffset][tileIndex + mapTileOffset] = id

        // Tween
        this.updateMoves()
        this.tileMoving = true

        this.scene.tweens.add({
            targets: this[`tile${id}`],
            x: {
                from: this.positions[from + 1].x,
                to: this.positions[to + 1].x,
            },
            y: {
                from: this.positions[from + 1].y,
                to: this.positions[to + 1].y,
            },
            duration: 450,
            ease: 'Quad.easeInOut',
            onComplete: () => this.checkGameComplete()
        })
    }

    checkGameComplete() {
        this.tileMoving = false

        let check = 1
        for(let row = 0; row < this.map.length; row++) {
            for(let tile = 0; tile < this.map[row].length; tile++) {
                if(this.map[row][tile] !== check) return
                check++
            }
        }

        // Passed the checks in the loop, so the game is won
        for(let tile of this.tiles) {
            tile.outline.visible = false
        }
        this.tile9.x = this.positions[9].x
        this.tile9.y = this.positions[9].y
        this.tile9.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here