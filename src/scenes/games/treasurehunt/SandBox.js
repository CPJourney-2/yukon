
// You can write more code here
import BaseContainer from '@scenes/base/BaseContainer'
import { Button } from '@components/components'
import ClearTileAnim from './ClearTileAnim'
import TileManager from './TileManager'
import TreasureObject from './TreasureObject'
/* START OF COMPILED CODE */

export default class SandBox extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Container} */
        this.bottomLayer;
        /** @type {Phaser.GameObjects.Image} */
        this.dt101;
        /** @type {Phaser.GameObjects.Image} */
        this.dt102;
        /** @type {Phaser.GameObjects.Image} */
        this.dt104;
        /** @type {Phaser.GameObjects.Image} */
        this.dt103;
        /** @type {Phaser.GameObjects.Image} */
        this.dt105;
        /** @type {Phaser.GameObjects.Image} */
        this.dt110;
        /** @type {Phaser.GameObjects.Image} */
        this.dt108;
        /** @type {Phaser.GameObjects.Image} */
        this.dt109;
        /** @type {Phaser.GameObjects.Image} */
        this.dt106;
        /** @type {Phaser.GameObjects.Image} */
        this.dt107;
        /** @type {Phaser.GameObjects.Image} */
        this.dt207;
        /** @type {Phaser.GameObjects.Image} */
        this.dt206;
        /** @type {Phaser.GameObjects.Image} */
        this.dt209;
        /** @type {Phaser.GameObjects.Image} */
        this.dt208;
        /** @type {Phaser.GameObjects.Image} */
        this.dt210;
        /** @type {Phaser.GameObjects.Image} */
        this.dt205;
        /** @type {Phaser.GameObjects.Image} */
        this.dt203;
        /** @type {Phaser.GameObjects.Image} */
        this.dt204;
        /** @type {Phaser.GameObjects.Image} */
        this.dt202;
        /** @type {Phaser.GameObjects.Image} */
        this.dt201;
        /** @type {Phaser.GameObjects.Image} */
        this.dt301;
        /** @type {Phaser.GameObjects.Image} */
        this.dt401;
        /** @type {Phaser.GameObjects.Image} */
        this.dt402;
        /** @type {Phaser.GameObjects.Image} */
        this.dt404;
        /** @type {Phaser.GameObjects.Image} */
        this.dt403;
        /** @type {Phaser.GameObjects.Image} */
        this.dt405;
        /** @type {Phaser.GameObjects.Image} */
        this.dt410;
        /** @type {Phaser.GameObjects.Image} */
        this.dt408;
        /** @type {Phaser.GameObjects.Image} */
        this.dt409;
        /** @type {Phaser.GameObjects.Image} */
        this.dt406;
        /** @type {Phaser.GameObjects.Image} */
        this.dt407;
        /** @type {Phaser.GameObjects.Image} */
        this.dt307;
        /** @type {Phaser.GameObjects.Image} */
        this.dt306;
        /** @type {Phaser.GameObjects.Image} */
        this.dt309;
        /** @type {Phaser.GameObjects.Image} */
        this.dt308;
        /** @type {Phaser.GameObjects.Image} */
        this.dt310;
        /** @type {Phaser.GameObjects.Image} */
        this.dt305;
        /** @type {Phaser.GameObjects.Image} */
        this.dt303;
        /** @type {Phaser.GameObjects.Image} */
        this.dt304;
        /** @type {Phaser.GameObjects.Image} */
        this.dt302;
        /** @type {Phaser.GameObjects.Image} */
        this.dt701;
        /** @type {Phaser.GameObjects.Image} */
        this.dt801;
        /** @type {Phaser.GameObjects.Image} */
        this.dt802;
        /** @type {Phaser.GameObjects.Image} */
        this.dt702;
        /** @type {Phaser.GameObjects.Image} */
        this.dt703;
        /** @type {Phaser.GameObjects.Image} */
        this.dt803;
        /** @type {Phaser.GameObjects.Image} */
        this.dt804;
        /** @type {Phaser.GameObjects.Image} */
        this.dt704;
        /** @type {Phaser.GameObjects.Image} */
        this.dt706;
        /** @type {Phaser.GameObjects.Image} */
        this.dt805;
        /** @type {Phaser.GameObjects.Image} */
        this.dt705;
        /** @type {Phaser.GameObjects.Image} */
        this.dt806;
        /** @type {Phaser.GameObjects.Image} */
        this.dt807;
        /** @type {Phaser.GameObjects.Image} */
        this.dt707;
        /** @type {Phaser.GameObjects.Image} */
        this.dt808;
        /** @type {Phaser.GameObjects.Image} */
        this.dt708;
        /** @type {Phaser.GameObjects.Image} */
        this.dt709;
        /** @type {Phaser.GameObjects.Image} */
        this.dt809;
        /** @type {Phaser.GameObjects.Image} */
        this.dt810;
        /** @type {Phaser.GameObjects.Image} */
        this.dt710;
        /** @type {Phaser.GameObjects.Image} */
        this.dt901;
        /** @type {Phaser.GameObjects.Image} */
        this.dt1001;
        /** @type {Phaser.GameObjects.Image} */
        this.dt1002;
        /** @type {Phaser.GameObjects.Image} */
        this.dt902;
        /** @type {Phaser.GameObjects.Image} */
        this.dt903;
        /** @type {Phaser.GameObjects.Image} */
        this.dt1003;
        /** @type {Phaser.GameObjects.Image} */
        this.dt1004;
        /** @type {Phaser.GameObjects.Image} */
        this.dt904;
        /** @type {Phaser.GameObjects.Image} */
        this.dt905;
        /** @type {Phaser.GameObjects.Image} */
        this.dt1005;
        /** @type {Phaser.GameObjects.Image} */
        this.dt1006;
        /** @type {Phaser.GameObjects.Image} */
        this.dt906;
        /** @type {Phaser.GameObjects.Image} */
        this.dt907;
        /** @type {Phaser.GameObjects.Image} */
        this.dt1007;
        /** @type {Phaser.GameObjects.Image} */
        this.dt1009;
        /** @type {Phaser.GameObjects.Image} */
        this.dt909;
        /** @type {Phaser.GameObjects.Image} */
        this.dt908;
        /** @type {Phaser.GameObjects.Image} */
        this.dt1008;
        /** @type {Phaser.GameObjects.Image} */
        this.dt910;
        /** @type {Phaser.GameObjects.Image} */
        this.dt1010;
        /** @type {Phaser.GameObjects.Image} */
        this.dt501;
        /** @type {Phaser.GameObjects.Image} */
        this.dt502;
        /** @type {Phaser.GameObjects.Image} */
        this.dt504;
        /** @type {Phaser.GameObjects.Image} */
        this.dt503;
        /** @type {Phaser.GameObjects.Image} */
        this.dt505;
        /** @type {Phaser.GameObjects.Image} */
        this.dt510;
        /** @type {Phaser.GameObjects.Image} */
        this.dt508;
        /** @type {Phaser.GameObjects.Image} */
        this.dt509;
        /** @type {Phaser.GameObjects.Image} */
        this.dt506;
        /** @type {Phaser.GameObjects.Image} */
        this.dt507;
        /** @type {Phaser.GameObjects.Image} */
        this.dt607;
        /** @type {Phaser.GameObjects.Image} */
        this.dt606;
        /** @type {Phaser.GameObjects.Image} */
        this.dt609;
        /** @type {Phaser.GameObjects.Image} */
        this.dt608;
        /** @type {Phaser.GameObjects.Image} */
        this.dt610;
        /** @type {Phaser.GameObjects.Image} */
        this.dt605;
        /** @type {Phaser.GameObjects.Image} */
        this.dt603;
        /** @type {Phaser.GameObjects.Image} */
        this.dt604;
        /** @type {Phaser.GameObjects.Image} */
        this.dt602;
        /** @type {Phaser.GameObjects.Image} */
        this.dt601;
        /** @type {Phaser.GameObjects.Container} */
        this.middleLayer;
        /** @type {Phaser.GameObjects.Image} */
        this.t101;
        /** @type {Phaser.GameObjects.Image} */
        this.t102;
        /** @type {Phaser.GameObjects.Image} */
        this.t104;
        /** @type {Phaser.GameObjects.Image} */
        this.t103;
        /** @type {Phaser.GameObjects.Image} */
        this.t105;
        /** @type {Phaser.GameObjects.Image} */
        this.t110;
        /** @type {Phaser.GameObjects.Image} */
        this.t108;
        /** @type {Phaser.GameObjects.Image} */
        this.t109;
        /** @type {Phaser.GameObjects.Image} */
        this.t106;
        /** @type {Phaser.GameObjects.Image} */
        this.t107;
        /** @type {Phaser.GameObjects.Image} */
        this.t207;
        /** @type {Phaser.GameObjects.Image} */
        this.t206;
        /** @type {Phaser.GameObjects.Image} */
        this.t209;
        /** @type {Phaser.GameObjects.Image} */
        this.t208;
        /** @type {Phaser.GameObjects.Image} */
        this.t210;
        /** @type {Phaser.GameObjects.Image} */
        this.t205;
        /** @type {Phaser.GameObjects.Image} */
        this.t203;
        /** @type {Phaser.GameObjects.Image} */
        this.t204;
        /** @type {Phaser.GameObjects.Image} */
        this.t202;
        /** @type {Phaser.GameObjects.Image} */
        this.t201;
        /** @type {Phaser.GameObjects.Image} */
        this.t301;
        /** @type {Phaser.GameObjects.Image} */
        this.t401;
        /** @type {Phaser.GameObjects.Image} */
        this.t402;
        /** @type {Phaser.GameObjects.Image} */
        this.t404;
        /** @type {Phaser.GameObjects.Image} */
        this.t403;
        /** @type {Phaser.GameObjects.Image} */
        this.t405;
        /** @type {Phaser.GameObjects.Image} */
        this.t410;
        /** @type {Phaser.GameObjects.Image} */
        this.t408;
        /** @type {Phaser.GameObjects.Image} */
        this.t409;
        /** @type {Phaser.GameObjects.Image} */
        this.t406;
        /** @type {Phaser.GameObjects.Image} */
        this.t407;
        /** @type {Phaser.GameObjects.Image} */
        this.t307;
        /** @type {Phaser.GameObjects.Image} */
        this.t306;
        /** @type {Phaser.GameObjects.Image} */
        this.t309;
        /** @type {Phaser.GameObjects.Image} */
        this.t308;
        /** @type {Phaser.GameObjects.Image} */
        this.t310;
        /** @type {Phaser.GameObjects.Image} */
        this.t305;
        /** @type {Phaser.GameObjects.Image} */
        this.t303;
        /** @type {Phaser.GameObjects.Image} */
        this.t304;
        /** @type {Phaser.GameObjects.Image} */
        this.t302;
        /** @type {Phaser.GameObjects.Image} */
        this.t701;
        /** @type {Phaser.GameObjects.Image} */
        this.t801;
        /** @type {Phaser.GameObjects.Image} */
        this.t802;
        /** @type {Phaser.GameObjects.Image} */
        this.t702;
        /** @type {Phaser.GameObjects.Image} */
        this.t703;
        /** @type {Phaser.GameObjects.Image} */
        this.t803;
        /** @type {Phaser.GameObjects.Image} */
        this.t804;
        /** @type {Phaser.GameObjects.Image} */
        this.t704;
        /** @type {Phaser.GameObjects.Image} */
        this.t706;
        /** @type {Phaser.GameObjects.Image} */
        this.t805;
        /** @type {Phaser.GameObjects.Image} */
        this.t705;
        /** @type {Phaser.GameObjects.Image} */
        this.t806;
        /** @type {Phaser.GameObjects.Image} */
        this.t807;
        /** @type {Phaser.GameObjects.Image} */
        this.t707;
        /** @type {Phaser.GameObjects.Image} */
        this.t808;
        /** @type {Phaser.GameObjects.Image} */
        this.t708;
        /** @type {Phaser.GameObjects.Image} */
        this.t709;
        /** @type {Phaser.GameObjects.Image} */
        this.t809;
        /** @type {Phaser.GameObjects.Image} */
        this.t810;
        /** @type {Phaser.GameObjects.Image} */
        this.t710;
        /** @type {Phaser.GameObjects.Image} */
        this.t901;
        /** @type {Phaser.GameObjects.Image} */
        this.t1001;
        /** @type {Phaser.GameObjects.Image} */
        this.t1002;
        /** @type {Phaser.GameObjects.Image} */
        this.t902;
        /** @type {Phaser.GameObjects.Image} */
        this.t903;
        /** @type {Phaser.GameObjects.Image} */
        this.t1003;
        /** @type {Phaser.GameObjects.Image} */
        this.t1004;
        /** @type {Phaser.GameObjects.Image} */
        this.t904;
        /** @type {Phaser.GameObjects.Image} */
        this.t905;
        /** @type {Phaser.GameObjects.Image} */
        this.t1005;
        /** @type {Phaser.GameObjects.Image} */
        this.t1006;
        /** @type {Phaser.GameObjects.Image} */
        this.t906;
        /** @type {Phaser.GameObjects.Image} */
        this.t907;
        /** @type {Phaser.GameObjects.Image} */
        this.t1007;
        /** @type {Phaser.GameObjects.Image} */
        this.t1009;
        /** @type {Phaser.GameObjects.Image} */
        this.t909;
        /** @type {Phaser.GameObjects.Image} */
        this.t908;
        /** @type {Phaser.GameObjects.Image} */
        this.t1008;
        /** @type {Phaser.GameObjects.Image} */
        this.t910;
        /** @type {Phaser.GameObjects.Image} */
        this.t1010;
        /** @type {Phaser.GameObjects.Image} */
        this.t501;
        /** @type {Phaser.GameObjects.Image} */
        this.t502;
        /** @type {Phaser.GameObjects.Image} */
        this.t504;
        /** @type {Phaser.GameObjects.Image} */
        this.t503;
        /** @type {Phaser.GameObjects.Image} */
        this.t505;
        /** @type {Phaser.GameObjects.Image} */
        this.t510;
        /** @type {Phaser.GameObjects.Image} */
        this.t508;
        /** @type {Phaser.GameObjects.Image} */
        this.t509;
        /** @type {Phaser.GameObjects.Image} */
        this.t506;
        /** @type {Phaser.GameObjects.Image} */
        this.t507;
        /** @type {Phaser.GameObjects.Image} */
        this.t607;
        /** @type {Phaser.GameObjects.Image} */
        this.t606;
        /** @type {Phaser.GameObjects.Image} */
        this.t609;
        /** @type {Phaser.GameObjects.Image} */
        this.t608;
        /** @type {Phaser.GameObjects.Image} */
        this.t610;
        /** @type {Phaser.GameObjects.Image} */
        this.t605;
        /** @type {Phaser.GameObjects.Image} */
        this.t603;
        /** @type {Phaser.GameObjects.Image} */
        this.t604;
        /** @type {Phaser.GameObjects.Image} */
        this.t602;
        /** @type {Phaser.GameObjects.Image} */
        this.t601;
        /** @type {Phaser.GameObjects.Image} */
        this.row10Dig;
        /** @type {Phaser.GameObjects.Image} */
        this.row9Dig;
        /** @type {Phaser.GameObjects.Image} */
        this.row8Dig;
        /** @type {Phaser.GameObjects.Image} */
        this.row7Dig;
        /** @type {Phaser.GameObjects.Image} */
        this.row6Dig;
        /** @type {Phaser.GameObjects.Image} */
        this.row5Dig;
        /** @type {Phaser.GameObjects.Image} */
        this.row4Dig;
        /** @type {Phaser.GameObjects.Image} */
        this.row3Dig;
        /** @type {Phaser.GameObjects.Image} */
        this.row2Dig;
        /** @type {Phaser.GameObjects.Image} */
        this.row1Dig;
        /** @type {Phaser.GameObjects.Container} */
        this.player1DigBtns;
        /** @type {Phaser.GameObjects.Image} */
        this.col10Dig;
        /** @type {Phaser.GameObjects.Image} */
        this.col9Dig;
        /** @type {Phaser.GameObjects.Image} */
        this.col8Dig;
        /** @type {Phaser.GameObjects.Image} */
        this.col7Dig;
        /** @type {Phaser.GameObjects.Image} */
        this.col6Dig;
        /** @type {Phaser.GameObjects.Image} */
        this.col5Dig;
        /** @type {Phaser.GameObjects.Image} */
        this.col4Dig;
        /** @type {Phaser.GameObjects.Image} */
        this.col3Dig;
        /** @type {Phaser.GameObjects.Image} */
        this.col2Dig;
        /** @type {Phaser.GameObjects.Image} */
        this.col1Dig;
        /** @type {Phaser.GameObjects.Container} */
        this.player2DigBtns;
        /** @type {ClearTileAnim} */
        this.row1Clear;
        /** @type {ClearTileAnim} */
        this.row2Clear;
        /** @type {ClearTileAnim} */
        this.row3Clear;
        /** @type {ClearTileAnim} */
        this.row4Clear;
        /** @type {ClearTileAnim} */
        this.row5Clear;
        /** @type {ClearTileAnim} */
        this.row6Clear;
        /** @type {ClearTileAnim} */
        this.row7Clear;
        /** @type {ClearTileAnim} */
        this.row8Clear;
        /** @type {ClearTileAnim} */
        this.row9Clear;
        /** @type {ClearTileAnim} */
        this.row10Clear;
        /** @type {ClearTileAnim} */
        this.col1Clear;
        /** @type {ClearTileAnim} */
        this.col2Clear;
        /** @type {ClearTileAnim} */
        this.col3Clear;
        /** @type {ClearTileAnim} */
        this.col4Clear;
        /** @type {ClearTileAnim} */
        this.col5Clear;
        /** @type {ClearTileAnim} */
        this.col6Clear;
        /** @type {ClearTileAnim} */
        this.col7Clear;
        /** @type {ClearTileAnim} */
        this.col8Clear;
        /** @type {ClearTileAnim} */
        this.col9Clear;
        /** @type {ClearTileAnim} */
        this.col10Clear;
        /** @type {Phaser.GameObjects.Image[]} */
        this.digBtns;
        /** @type {ClearTileAnim[]} */
        this.clears;


        // bottomLayer
        const bottomLayer = scene.add.container(5, 0);
        this.add(bottomLayer);

        // bottomLayerImg
        const bottomLayerImg = scene.add.image(178.97644961782962, 178.98434571495147, "treasurehunt", "bottomLayer");
        bottomLayerImg.scaleX = 0.95;
        bottomLayerImg.scaleY = 0.95;
        bottomLayer.add(bottomLayerImg);

        // middleLayer
        const middleLayer = scene.add.container(5, 0);
        this.add(middleLayer);

        // dt101
        const dt101 = scene.add.image(0, 0, "treasurehunt", "tiles/tile0001");
        dt101.scaleX = 0.95;
        dt101.scaleY = 0.95;
        dt101.tintTopLeft = 13290186;
        dt101.tintTopRight = 13290186;
        dt101.tintBottomLeft = 13290186;
        dt101.tintBottomRight = 13290186;
        middleLayer.add(dt101);

        // dt102
        const dt102 = scene.add.image(40, 0, "treasurehunt", "tiles/tile0001");
        dt102.scaleX = 0.95;
        dt102.scaleY = 0.95;
        dt102.tintTopLeft = 13290186;
        dt102.tintTopRight = 13290186;
        dt102.tintBottomLeft = 13290186;
        dt102.tintBottomRight = 13290186;
        middleLayer.add(dt102);

        // dt104
        const dt104 = scene.add.image(120, 0, "treasurehunt", "tiles/tile0001");
        dt104.scaleX = 0.95;
        dt104.scaleY = 0.95;
        dt104.tintTopLeft = 13290186;
        dt104.tintTopRight = 13290186;
        dt104.tintBottomLeft = 13290186;
        dt104.tintBottomRight = 13290186;
        middleLayer.add(dt104);

        // dt103
        const dt103 = scene.add.image(80, 0, "treasurehunt", "tiles/tile0001");
        dt103.scaleX = 0.95;
        dt103.scaleY = 0.95;
        dt103.tintTopLeft = 13290186;
        dt103.tintTopRight = 13290186;
        dt103.tintBottomLeft = 13290186;
        dt103.tintBottomRight = 13290186;
        middleLayer.add(dt103);

        // dt105
        const dt105 = scene.add.image(160, 0, "treasurehunt", "tiles/tile0001");
        dt105.scaleX = 0.95;
        dt105.scaleY = 0.95;
        dt105.tintTopLeft = 13290186;
        dt105.tintTopRight = 13290186;
        dt105.tintBottomLeft = 13290186;
        dt105.tintBottomRight = 13290186;
        middleLayer.add(dt105);

        // dt110
        const dt110 = scene.add.image(360, 0, "treasurehunt", "tiles/tile0001");
        dt110.scaleX = 0.95;
        dt110.scaleY = 0.95;
        dt110.tintTopLeft = 13290186;
        dt110.tintTopRight = 13290186;
        dt110.tintBottomLeft = 13290186;
        dt110.tintBottomRight = 13290186;
        middleLayer.add(dt110);

        // dt108
        const dt108 = scene.add.image(280, 0, "treasurehunt", "tiles/tile0001");
        dt108.scaleX = 0.95;
        dt108.scaleY = 0.95;
        dt108.tintTopLeft = 13290186;
        dt108.tintTopRight = 13290186;
        dt108.tintBottomLeft = 13290186;
        dt108.tintBottomRight = 13290186;
        middleLayer.add(dt108);

        // dt109
        const dt109 = scene.add.image(320, 0, "treasurehunt", "tiles/tile0001");
        dt109.scaleX = 0.95;
        dt109.scaleY = 0.95;
        dt109.tintTopLeft = 13290186;
        dt109.tintTopRight = 13290186;
        dt109.tintBottomLeft = 13290186;
        dt109.tintBottomRight = 13290186;
        middleLayer.add(dt109);

        // dt106
        const dt106 = scene.add.image(200, 0, "treasurehunt", "tiles/tile0001");
        dt106.scaleX = 0.95;
        dt106.scaleY = 0.95;
        dt106.tintTopLeft = 13290186;
        dt106.tintTopRight = 13290186;
        dt106.tintBottomLeft = 13290186;
        dt106.tintBottomRight = 13290186;
        middleLayer.add(dt106);

        // dt107
        const dt107 = scene.add.image(240, 0, "treasurehunt", "tiles/tile0001");
        dt107.scaleX = 0.95;
        dt107.scaleY = 0.95;
        dt107.tintTopLeft = 13290186;
        dt107.tintTopRight = 13290186;
        dt107.tintBottomLeft = 13290186;
        dt107.tintBottomRight = 13290186;
        middleLayer.add(dt107);

        // dt207
        const dt207 = scene.add.image(240, 40, "treasurehunt", "tiles/tile0001");
        dt207.scaleX = 0.95;
        dt207.scaleY = 0.95;
        dt207.tintTopLeft = 13290186;
        dt207.tintTopRight = 13290186;
        dt207.tintBottomLeft = 13290186;
        dt207.tintBottomRight = 13290186;
        middleLayer.add(dt207);

        // dt206
        const dt206 = scene.add.image(200, 40, "treasurehunt", "tiles/tile0001");
        dt206.scaleX = 0.95;
        dt206.scaleY = 0.95;
        dt206.tintTopLeft = 13290186;
        dt206.tintTopRight = 13290186;
        dt206.tintBottomLeft = 13290186;
        dt206.tintBottomRight = 13290186;
        middleLayer.add(dt206);

        // dt209
        const dt209 = scene.add.image(320, 40, "treasurehunt", "tiles/tile0001");
        dt209.scaleX = 0.95;
        dt209.scaleY = 0.95;
        dt209.tintTopLeft = 13290186;
        dt209.tintTopRight = 13290186;
        dt209.tintBottomLeft = 13290186;
        dt209.tintBottomRight = 13290186;
        middleLayer.add(dt209);

        // dt208
        const dt208 = scene.add.image(280, 40, "treasurehunt", "tiles/tile0001");
        dt208.scaleX = 0.95;
        dt208.scaleY = 0.95;
        dt208.tintTopLeft = 13290186;
        dt208.tintTopRight = 13290186;
        dt208.tintBottomLeft = 13290186;
        dt208.tintBottomRight = 13290186;
        middleLayer.add(dt208);

        // dt210
        const dt210 = scene.add.image(360, 40, "treasurehunt", "tiles/tile0001");
        dt210.scaleX = 0.95;
        dt210.scaleY = 0.95;
        dt210.tintTopLeft = 13290186;
        dt210.tintTopRight = 13290186;
        dt210.tintBottomLeft = 13290186;
        dt210.tintBottomRight = 13290186;
        middleLayer.add(dt210);

        // dt205
        const dt205 = scene.add.image(160, 40, "treasurehunt", "tiles/tile0001");
        dt205.scaleX = 0.95;
        dt205.scaleY = 0.95;
        dt205.tintTopLeft = 13290186;
        dt205.tintTopRight = 13290186;
        dt205.tintBottomLeft = 13290186;
        dt205.tintBottomRight = 13290186;
        middleLayer.add(dt205);

        // dt203
        const dt203 = scene.add.image(80, 40, "treasurehunt", "tiles/tile0001");
        dt203.scaleX = 0.95;
        dt203.scaleY = 0.95;
        dt203.tintTopLeft = 13290186;
        dt203.tintTopRight = 13290186;
        dt203.tintBottomLeft = 13290186;
        dt203.tintBottomRight = 13290186;
        middleLayer.add(dt203);

        // dt204
        const dt204 = scene.add.image(120, 40, "treasurehunt", "tiles/tile0001");
        dt204.scaleX = 0.95;
        dt204.scaleY = 0.95;
        dt204.tintTopLeft = 13290186;
        dt204.tintTopRight = 13290186;
        dt204.tintBottomLeft = 13290186;
        dt204.tintBottomRight = 13290186;
        middleLayer.add(dt204);

        // dt202
        const dt202 = scene.add.image(40, 40, "treasurehunt", "tiles/tile0001");
        dt202.scaleX = 0.95;
        dt202.scaleY = 0.95;
        dt202.tintTopLeft = 13290186;
        dt202.tintTopRight = 13290186;
        dt202.tintBottomLeft = 13290186;
        dt202.tintBottomRight = 13290186;
        middleLayer.add(dt202);

        // dt201
        const dt201 = scene.add.image(0, 40, "treasurehunt", "tiles/tile0001");
        dt201.scaleX = 0.95;
        dt201.scaleY = 0.95;
        dt201.tintTopLeft = 13290186;
        dt201.tintTopRight = 13290186;
        dt201.tintBottomLeft = 13290186;
        dt201.tintBottomRight = 13290186;
        middleLayer.add(dt201);

        // dt301
        const dt301 = scene.add.image(0, 79, "treasurehunt", "tiles/tile0001");
        dt301.scaleX = 0.95;
        dt301.scaleY = 0.95;
        dt301.tintTopLeft = 13290186;
        dt301.tintTopRight = 13290186;
        dt301.tintBottomLeft = 13290186;
        dt301.tintBottomRight = 13290186;
        middleLayer.add(dt301);

        // dt401
        const dt401 = scene.add.image(0, 119, "treasurehunt", "tiles/tile0001");
        dt401.scaleX = 0.95;
        dt401.scaleY = 0.95;
        dt401.tintTopLeft = 13290186;
        dt401.tintTopRight = 13290186;
        dt401.tintBottomLeft = 13290186;
        dt401.tintBottomRight = 13290186;
        middleLayer.add(dt401);

        // dt402
        const dt402 = scene.add.image(40, 119, "treasurehunt", "tiles/tile0001");
        dt402.scaleX = 0.95;
        dt402.scaleY = 0.95;
        dt402.tintTopLeft = 13290186;
        dt402.tintTopRight = 13290186;
        dt402.tintBottomLeft = 13290186;
        dt402.tintBottomRight = 13290186;
        middleLayer.add(dt402);

        // dt404
        const dt404 = scene.add.image(120, 119, "treasurehunt", "tiles/tile0001");
        dt404.scaleX = 0.95;
        dt404.scaleY = 0.95;
        dt404.tintTopLeft = 13290186;
        dt404.tintTopRight = 13290186;
        dt404.tintBottomLeft = 13290186;
        dt404.tintBottomRight = 13290186;
        middleLayer.add(dt404);

        // dt403
        const dt403 = scene.add.image(80, 119, "treasurehunt", "tiles/tile0001");
        dt403.scaleX = 0.95;
        dt403.scaleY = 0.95;
        dt403.tintTopLeft = 13290186;
        dt403.tintTopRight = 13290186;
        dt403.tintBottomLeft = 13290186;
        dt403.tintBottomRight = 13290186;
        middleLayer.add(dt403);

        // dt405
        const dt405 = scene.add.image(160, 119, "treasurehunt", "tiles/tile0001");
        dt405.scaleX = 0.95;
        dt405.scaleY = 0.95;
        dt405.tintTopLeft = 13290186;
        dt405.tintTopRight = 13290186;
        dt405.tintBottomLeft = 13290186;
        dt405.tintBottomRight = 13290186;
        middleLayer.add(dt405);

        // dt410
        const dt410 = scene.add.image(360, 119, "treasurehunt", "tiles/tile0001");
        dt410.scaleX = 0.95;
        dt410.scaleY = 0.95;
        dt410.tintTopLeft = 13290186;
        dt410.tintTopRight = 13290186;
        dt410.tintBottomLeft = 13290186;
        dt410.tintBottomRight = 13290186;
        middleLayer.add(dt410);

        // dt408
        const dt408 = scene.add.image(280, 119, "treasurehunt", "tiles/tile0001");
        dt408.scaleX = 0.95;
        dt408.scaleY = 0.95;
        dt408.tintTopLeft = 13290186;
        dt408.tintTopRight = 13290186;
        dt408.tintBottomLeft = 13290186;
        dt408.tintBottomRight = 13290186;
        middleLayer.add(dt408);

        // dt409
        const dt409 = scene.add.image(320, 119, "treasurehunt", "tiles/tile0001");
        dt409.scaleX = 0.95;
        dt409.scaleY = 0.95;
        dt409.tintTopLeft = 13290186;
        dt409.tintTopRight = 13290186;
        dt409.tintBottomLeft = 13290186;
        dt409.tintBottomRight = 13290186;
        middleLayer.add(dt409);

        // dt406
        const dt406 = scene.add.image(200, 119, "treasurehunt", "tiles/tile0001");
        dt406.scaleX = 0.95;
        dt406.scaleY = 0.95;
        dt406.tintTopLeft = 13290186;
        dt406.tintTopRight = 13290186;
        dt406.tintBottomLeft = 13290186;
        dt406.tintBottomRight = 13290186;
        middleLayer.add(dt406);

        // dt407
        const dt407 = scene.add.image(240, 119, "treasurehunt", "tiles/tile0001");
        dt407.scaleX = 0.95;
        dt407.scaleY = 0.95;
        dt407.tintTopLeft = 13290186;
        dt407.tintTopRight = 13290186;
        dt407.tintBottomLeft = 13290186;
        dt407.tintBottomRight = 13290186;
        middleLayer.add(dt407);

        // dt307
        const dt307 = scene.add.image(240, 79, "treasurehunt", "tiles/tile0001");
        dt307.scaleX = 0.95;
        dt307.scaleY = 0.95;
        dt307.tintTopLeft = 13290186;
        dt307.tintTopRight = 13290186;
        dt307.tintBottomLeft = 13290186;
        dt307.tintBottomRight = 13290186;
        middleLayer.add(dt307);

        // dt306
        const dt306 = scene.add.image(200, 79, "treasurehunt", "tiles/tile0001");
        dt306.scaleX = 0.95;
        dt306.scaleY = 0.95;
        dt306.tintTopLeft = 13290186;
        dt306.tintTopRight = 13290186;
        dt306.tintBottomLeft = 13290186;
        dt306.tintBottomRight = 13290186;
        middleLayer.add(dt306);

        // dt309
        const dt309 = scene.add.image(320, 79, "treasurehunt", "tiles/tile0001");
        dt309.scaleX = 0.95;
        dt309.scaleY = 0.95;
        dt309.tintTopLeft = 13290186;
        dt309.tintTopRight = 13290186;
        dt309.tintBottomLeft = 13290186;
        dt309.tintBottomRight = 13290186;
        middleLayer.add(dt309);

        // dt308
        const dt308 = scene.add.image(280, 79, "treasurehunt", "tiles/tile0001");
        dt308.scaleX = 0.95;
        dt308.scaleY = 0.95;
        dt308.tintTopLeft = 13290186;
        dt308.tintTopRight = 13290186;
        dt308.tintBottomLeft = 13290186;
        dt308.tintBottomRight = 13290186;
        middleLayer.add(dt308);

        // dt310
        const dt310 = scene.add.image(360, 79, "treasurehunt", "tiles/tile0001");
        dt310.scaleX = 0.95;
        dt310.scaleY = 0.95;
        dt310.tintTopLeft = 13290186;
        dt310.tintTopRight = 13290186;
        dt310.tintBottomLeft = 13290186;
        dt310.tintBottomRight = 13290186;
        middleLayer.add(dt310);

        // dt305
        const dt305 = scene.add.image(160, 79, "treasurehunt", "tiles/tile0001");
        dt305.scaleX = 0.95;
        dt305.scaleY = 0.95;
        dt305.tintTopLeft = 13290186;
        dt305.tintTopRight = 13290186;
        dt305.tintBottomLeft = 13290186;
        dt305.tintBottomRight = 13290186;
        middleLayer.add(dt305);

        // dt303
        const dt303 = scene.add.image(80, 79, "treasurehunt", "tiles/tile0001");
        dt303.scaleX = 0.95;
        dt303.scaleY = 0.95;
        dt303.tintTopLeft = 13290186;
        dt303.tintTopRight = 13290186;
        dt303.tintBottomLeft = 13290186;
        dt303.tintBottomRight = 13290186;
        middleLayer.add(dt303);

        // dt304
        const dt304 = scene.add.image(120, 79, "treasurehunt", "tiles/tile0001");
        dt304.scaleX = 0.95;
        dt304.scaleY = 0.95;
        dt304.tintTopLeft = 13290186;
        dt304.tintTopRight = 13290186;
        dt304.tintBottomLeft = 13290186;
        dt304.tintBottomRight = 13290186;
        middleLayer.add(dt304);

        // dt302
        const dt302 = scene.add.image(40, 79, "treasurehunt", "tiles/tile0001");
        dt302.scaleX = 0.95;
        dt302.scaleY = 0.95;
        dt302.tintTopLeft = 13290186;
        dt302.tintTopRight = 13290186;
        dt302.tintBottomLeft = 13290186;
        dt302.tintBottomRight = 13290186;
        middleLayer.add(dt302);

        // dt701
        const dt701 = scene.add.image(0, 239, "treasurehunt", "tiles/tile0001");
        dt701.scaleX = 0.95;
        dt701.scaleY = 0.95;
        dt701.tintTopLeft = 13290186;
        dt701.tintTopRight = 13290186;
        dt701.tintBottomLeft = 13290186;
        dt701.tintBottomRight = 13290186;
        middleLayer.add(dt701);

        // dt801
        const dt801 = scene.add.image(0, 279, "treasurehunt", "tiles/tile0001");
        dt801.scaleX = 0.95;
        dt801.scaleY = 0.95;
        dt801.tintTopLeft = 13290186;
        dt801.tintTopRight = 13290186;
        dt801.tintBottomLeft = 13290186;
        dt801.tintBottomRight = 13290186;
        middleLayer.add(dt801);

        // dt802
        const dt802 = scene.add.image(40, 279, "treasurehunt", "tiles/tile0001");
        dt802.scaleX = 0.95;
        dt802.scaleY = 0.95;
        dt802.tintTopLeft = 13290186;
        dt802.tintTopRight = 13290186;
        dt802.tintBottomLeft = 13290186;
        dt802.tintBottomRight = 13290186;
        middleLayer.add(dt802);

        // dt702
        const dt702 = scene.add.image(40, 239, "treasurehunt", "tiles/tile0001");
        dt702.scaleX = 0.95;
        dt702.scaleY = 0.95;
        dt702.tintTopLeft = 13290186;
        dt702.tintTopRight = 13290186;
        dt702.tintBottomLeft = 13290186;
        dt702.tintBottomRight = 13290186;
        middleLayer.add(dt702);

        // dt703
        const dt703 = scene.add.image(80, 239, "treasurehunt", "tiles/tile0001");
        dt703.scaleX = 0.95;
        dt703.scaleY = 0.95;
        dt703.tintTopLeft = 13290186;
        dt703.tintTopRight = 13290186;
        dt703.tintBottomLeft = 13290186;
        dt703.tintBottomRight = 13290186;
        middleLayer.add(dt703);

        // dt803
        const dt803 = scene.add.image(80, 279, "treasurehunt", "tiles/tile0001");
        dt803.scaleX = 0.95;
        dt803.scaleY = 0.95;
        dt803.tintTopLeft = 13290186;
        dt803.tintTopRight = 13290186;
        dt803.tintBottomLeft = 13290186;
        dt803.tintBottomRight = 13290186;
        middleLayer.add(dt803);

        // dt804
        const dt804 = scene.add.image(120, 279, "treasurehunt", "tiles/tile0001");
        dt804.scaleX = 0.95;
        dt804.scaleY = 0.95;
        dt804.tintTopLeft = 13290186;
        dt804.tintTopRight = 13290186;
        dt804.tintBottomLeft = 13290186;
        dt804.tintBottomRight = 13290186;
        middleLayer.add(dt804);

        // dt704
        const dt704 = scene.add.image(120, 239, "treasurehunt", "tiles/tile0001");
        dt704.scaleX = 0.95;
        dt704.scaleY = 0.95;
        dt704.tintTopLeft = 13290186;
        dt704.tintTopRight = 13290186;
        dt704.tintBottomLeft = 13290186;
        dt704.tintBottomRight = 13290186;
        middleLayer.add(dt704);

        // dt706
        const dt706 = scene.add.image(200, 239, "treasurehunt", "tiles/tile0001");
        dt706.scaleX = 0.95;
        dt706.scaleY = 0.95;
        dt706.tintTopLeft = 13290186;
        dt706.tintTopRight = 13290186;
        dt706.tintBottomLeft = 13290186;
        dt706.tintBottomRight = 13290186;
        middleLayer.add(dt706);

        // dt805
        const dt805 = scene.add.image(160, 279, "treasurehunt", "tiles/tile0001");
        dt805.scaleX = 0.95;
        dt805.scaleY = 0.95;
        dt805.tintTopLeft = 13290186;
        dt805.tintTopRight = 13290186;
        dt805.tintBottomLeft = 13290186;
        dt805.tintBottomRight = 13290186;
        middleLayer.add(dt805);

        // dt705
        const dt705 = scene.add.image(160, 239, "treasurehunt", "tiles/tile0001");
        dt705.scaleX = 0.95;
        dt705.scaleY = 0.95;
        dt705.tintTopLeft = 13290186;
        dt705.tintTopRight = 13290186;
        dt705.tintBottomLeft = 13290186;
        dt705.tintBottomRight = 13290186;
        middleLayer.add(dt705);

        // dt806
        const dt806 = scene.add.image(200, 279, "treasurehunt", "tiles/tile0001");
        dt806.scaleX = 0.95;
        dt806.scaleY = 0.95;
        dt806.tintTopLeft = 13290186;
        dt806.tintTopRight = 13290186;
        dt806.tintBottomLeft = 13290186;
        dt806.tintBottomRight = 13290186;
        middleLayer.add(dt806);

        // dt807
        const dt807 = scene.add.image(240, 279, "treasurehunt", "tiles/tile0001");
        dt807.scaleX = 0.95;
        dt807.scaleY = 0.95;
        dt807.tintTopLeft = 13290186;
        dt807.tintTopRight = 13290186;
        dt807.tintBottomLeft = 13290186;
        dt807.tintBottomRight = 13290186;
        middleLayer.add(dt807);

        // dt707
        const dt707 = scene.add.image(240, 239, "treasurehunt", "tiles/tile0001");
        dt707.scaleX = 0.95;
        dt707.scaleY = 0.95;
        dt707.tintTopLeft = 13290186;
        dt707.tintTopRight = 13290186;
        dt707.tintBottomLeft = 13290186;
        dt707.tintBottomRight = 13290186;
        middleLayer.add(dt707);

        // dt808
        const dt808 = scene.add.image(280, 279, "treasurehunt", "tiles/tile0001");
        dt808.scaleX = 0.95;
        dt808.scaleY = 0.95;
        dt808.tintTopLeft = 13290186;
        dt808.tintTopRight = 13290186;
        dt808.tintBottomLeft = 13290186;
        dt808.tintBottomRight = 13290186;
        middleLayer.add(dt808);

        // dt708
        const dt708 = scene.add.image(280, 239, "treasurehunt", "tiles/tile0001");
        dt708.scaleX = 0.95;
        dt708.scaleY = 0.95;
        dt708.tintTopLeft = 13290186;
        dt708.tintTopRight = 13290186;
        dt708.tintBottomLeft = 13290186;
        dt708.tintBottomRight = 13290186;
        middleLayer.add(dt708);

        // dt709
        const dt709 = scene.add.image(320, 239, "treasurehunt", "tiles/tile0001");
        dt709.scaleX = 0.95;
        dt709.scaleY = 0.95;
        dt709.tintTopLeft = 13290186;
        dt709.tintTopRight = 13290186;
        dt709.tintBottomLeft = 13290186;
        dt709.tintBottomRight = 13290186;
        middleLayer.add(dt709);

        // dt809
        const dt809 = scene.add.image(320, 279, "treasurehunt", "tiles/tile0001");
        dt809.scaleX = 0.95;
        dt809.scaleY = 0.95;
        dt809.tintTopLeft = 13290186;
        dt809.tintTopRight = 13290186;
        dt809.tintBottomLeft = 13290186;
        dt809.tintBottomRight = 13290186;
        middleLayer.add(dt809);

        // dt810
        const dt810 = scene.add.image(360, 279, "treasurehunt", "tiles/tile0001");
        dt810.scaleX = 0.95;
        dt810.scaleY = 0.95;
        dt810.tintTopLeft = 13290186;
        dt810.tintTopRight = 13290186;
        dt810.tintBottomLeft = 13290186;
        dt810.tintBottomRight = 13290186;
        middleLayer.add(dt810);

        // dt710
        const dt710 = scene.add.image(360, 239, "treasurehunt", "tiles/tile0001");
        dt710.scaleX = 0.95;
        dt710.scaleY = 0.95;
        dt710.tintTopLeft = 13290186;
        dt710.tintTopRight = 13290186;
        dt710.tintBottomLeft = 13290186;
        dt710.tintBottomRight = 13290186;
        middleLayer.add(dt710);

        // dt901
        const dt901 = scene.add.image(0, 318, "treasurehunt", "tiles/tile0001");
        dt901.scaleX = 0.95;
        dt901.scaleY = 0.95;
        dt901.tintTopLeft = 13290186;
        dt901.tintTopRight = 13290186;
        dt901.tintBottomLeft = 13290186;
        dt901.tintBottomRight = 13290186;
        middleLayer.add(dt901);

        // dt1001
        const dt1001 = scene.add.image(0, 358, "treasurehunt", "tiles/tile0001");
        dt1001.scaleX = 0.95;
        dt1001.scaleY = 0.95;
        dt1001.tintTopLeft = 13290186;
        dt1001.tintTopRight = 13290186;
        dt1001.tintBottomLeft = 13290186;
        dt1001.tintBottomRight = 13290186;
        middleLayer.add(dt1001);

        // dt1002
        const dt1002 = scene.add.image(40, 358, "treasurehunt", "tiles/tile0001");
        dt1002.scaleX = 0.95;
        dt1002.scaleY = 0.95;
        dt1002.tintTopLeft = 13290186;
        dt1002.tintTopRight = 13290186;
        dt1002.tintBottomLeft = 13290186;
        dt1002.tintBottomRight = 13290186;
        middleLayer.add(dt1002);

        // dt902
        const dt902 = scene.add.image(40, 318, "treasurehunt", "tiles/tile0001");
        dt902.scaleX = 0.95;
        dt902.scaleY = 0.95;
        dt902.tintTopLeft = 13290186;
        dt902.tintTopRight = 13290186;
        dt902.tintBottomLeft = 13290186;
        dt902.tintBottomRight = 13290186;
        middleLayer.add(dt902);

        // dt903
        const dt903 = scene.add.image(80, 318, "treasurehunt", "tiles/tile0001");
        dt903.scaleX = 0.95;
        dt903.scaleY = 0.95;
        dt903.tintTopLeft = 13290186;
        dt903.tintTopRight = 13290186;
        dt903.tintBottomLeft = 13290186;
        dt903.tintBottomRight = 13290186;
        middleLayer.add(dt903);

        // dt1003
        const dt1003 = scene.add.image(80, 358, "treasurehunt", "tiles/tile0001");
        dt1003.scaleX = 0.95;
        dt1003.scaleY = 0.95;
        dt1003.tintTopLeft = 13290186;
        dt1003.tintTopRight = 13290186;
        dt1003.tintBottomLeft = 13290186;
        dt1003.tintBottomRight = 13290186;
        middleLayer.add(dt1003);

        // dt1004
        const dt1004 = scene.add.image(120, 358, "treasurehunt", "tiles/tile0001");
        dt1004.scaleX = 0.95;
        dt1004.scaleY = 0.95;
        dt1004.tintTopLeft = 13290186;
        dt1004.tintTopRight = 13290186;
        dt1004.tintBottomLeft = 13290186;
        dt1004.tintBottomRight = 13290186;
        middleLayer.add(dt1004);

        // dt904
        const dt904 = scene.add.image(120, 318, "treasurehunt", "tiles/tile0001");
        dt904.scaleX = 0.95;
        dt904.scaleY = 0.95;
        dt904.tintTopLeft = 13290186;
        dt904.tintTopRight = 13290186;
        dt904.tintBottomLeft = 13290186;
        dt904.tintBottomRight = 13290186;
        middleLayer.add(dt904);

        // dt905
        const dt905 = scene.add.image(160, 318, "treasurehunt", "tiles/tile0001");
        dt905.scaleX = 0.95;
        dt905.scaleY = 0.95;
        dt905.tintTopLeft = 13290186;
        dt905.tintTopRight = 13290186;
        dt905.tintBottomLeft = 13290186;
        dt905.tintBottomRight = 13290186;
        middleLayer.add(dt905);

        // dt1005
        const dt1005 = scene.add.image(160, 358, "treasurehunt", "tiles/tile0001");
        dt1005.scaleX = 0.95;
        dt1005.scaleY = 0.95;
        dt1005.tintTopLeft = 13290186;
        dt1005.tintTopRight = 13290186;
        dt1005.tintBottomLeft = 13290186;
        dt1005.tintBottomRight = 13290186;
        middleLayer.add(dt1005);

        // dt1006
        const dt1006 = scene.add.image(200, 358, "treasurehunt", "tiles/tile0001");
        dt1006.scaleX = 0.95;
        dt1006.scaleY = 0.95;
        dt1006.tintTopLeft = 13290186;
        dt1006.tintTopRight = 13290186;
        dt1006.tintBottomLeft = 13290186;
        dt1006.tintBottomRight = 13290186;
        middleLayer.add(dt1006);

        // dt906
        const dt906 = scene.add.image(200, 318, "treasurehunt", "tiles/tile0001");
        dt906.scaleX = 0.95;
        dt906.scaleY = 0.95;
        dt906.tintTopLeft = 13290186;
        dt906.tintTopRight = 13290186;
        dt906.tintBottomLeft = 13290186;
        dt906.tintBottomRight = 13290186;
        middleLayer.add(dt906);

        // dt907
        const dt907 = scene.add.image(240, 318, "treasurehunt", "tiles/tile0001");
        dt907.scaleX = 0.95;
        dt907.scaleY = 0.95;
        dt907.tintTopLeft = 13290186;
        dt907.tintTopRight = 13290186;
        dt907.tintBottomLeft = 13290186;
        dt907.tintBottomRight = 13290186;
        middleLayer.add(dt907);

        // dt1007
        const dt1007 = scene.add.image(240, 358, "treasurehunt", "tiles/tile0001");
        dt1007.scaleX = 0.95;
        dt1007.scaleY = 0.95;
        dt1007.tintTopLeft = 13290186;
        dt1007.tintTopRight = 13290186;
        dt1007.tintBottomLeft = 13290186;
        dt1007.tintBottomRight = 13290186;
        middleLayer.add(dt1007);

        // dt1009
        const dt1009 = scene.add.image(320, 358, "treasurehunt", "tiles/tile0001");
        dt1009.scaleX = 0.95;
        dt1009.scaleY = 0.95;
        dt1009.tintTopLeft = 13290186;
        dt1009.tintTopRight = 13290186;
        dt1009.tintBottomLeft = 13290186;
        dt1009.tintBottomRight = 13290186;
        middleLayer.add(dt1009);

        // dt909
        const dt909 = scene.add.image(320, 318, "treasurehunt", "tiles/tile0001");
        dt909.scaleX = 0.95;
        dt909.scaleY = 0.95;
        dt909.tintTopLeft = 13290186;
        dt909.tintTopRight = 13290186;
        dt909.tintBottomLeft = 13290186;
        dt909.tintBottomRight = 13290186;
        middleLayer.add(dt909);

        // dt908
        const dt908 = scene.add.image(280, 318, "treasurehunt", "tiles/tile0001");
        dt908.scaleX = 0.95;
        dt908.scaleY = 0.95;
        dt908.tintTopLeft = 13290186;
        dt908.tintTopRight = 13290186;
        dt908.tintBottomLeft = 13290186;
        dt908.tintBottomRight = 13290186;
        middleLayer.add(dt908);

        // dt1008
        const dt1008 = scene.add.image(280, 358, "treasurehunt", "tiles/tile0001");
        dt1008.scaleX = 0.95;
        dt1008.scaleY = 0.95;
        dt1008.tintTopLeft = 13290186;
        dt1008.tintTopRight = 13290186;
        dt1008.tintBottomLeft = 13290186;
        dt1008.tintBottomRight = 13290186;
        middleLayer.add(dt1008);

        // dt910
        const dt910 = scene.add.image(360, 318, "treasurehunt", "tiles/tile0001");
        dt910.scaleX = 0.95;
        dt910.scaleY = 0.95;
        dt910.tintTopLeft = 13290186;
        dt910.tintTopRight = 13290186;
        dt910.tintBottomLeft = 13290186;
        dt910.tintBottomRight = 13290186;
        middleLayer.add(dt910);

        // dt1010
        const dt1010 = scene.add.image(360, 358, "treasurehunt", "tiles/tile0001");
        dt1010.scaleX = 0.95;
        dt1010.scaleY = 0.95;
        dt1010.tintTopLeft = 13290186;
        dt1010.tintTopRight = 13290186;
        dt1010.tintBottomLeft = 13290186;
        dt1010.tintBottomRight = 13290186;
        middleLayer.add(dt1010);

        // dt501
        const dt501 = scene.add.image(0, 159, "treasurehunt", "tiles/tile0001");
        dt501.scaleX = 0.95;
        dt501.scaleY = 0.95;
        dt501.tintTopLeft = 13290186;
        dt501.tintTopRight = 13290186;
        dt501.tintBottomLeft = 13290186;
        dt501.tintBottomRight = 13290186;
        middleLayer.add(dt501);

        // dt502
        const dt502 = scene.add.image(40, 159, "treasurehunt", "tiles/tile0001");
        dt502.scaleX = 0.95;
        dt502.scaleY = 0.95;
        dt502.tintTopLeft = 13290186;
        dt502.tintTopRight = 13290186;
        dt502.tintBottomLeft = 13290186;
        dt502.tintBottomRight = 13290186;
        middleLayer.add(dt502);

        // dt504
        const dt504 = scene.add.image(120, 159, "treasurehunt", "tiles/tile0001");
        dt504.scaleX = 0.95;
        dt504.scaleY = 0.95;
        dt504.tintTopLeft = 13290186;
        dt504.tintTopRight = 13290186;
        dt504.tintBottomLeft = 13290186;
        dt504.tintBottomRight = 13290186;
        middleLayer.add(dt504);

        // dt503
        const dt503 = scene.add.image(80, 159, "treasurehunt", "tiles/tile0001");
        dt503.scaleX = 0.95;
        dt503.scaleY = 0.95;
        dt503.tintTopLeft = 13290186;
        dt503.tintTopRight = 13290186;
        dt503.tintBottomLeft = 13290186;
        dt503.tintBottomRight = 13290186;
        middleLayer.add(dt503);

        // dt505
        const dt505 = scene.add.image(160, 159, "treasurehunt", "tiles/tile0001");
        dt505.scaleX = 0.95;
        dt505.scaleY = 0.95;
        dt505.tintTopLeft = 13290186;
        dt505.tintTopRight = 13290186;
        dt505.tintBottomLeft = 13290186;
        dt505.tintBottomRight = 13290186;
        middleLayer.add(dt505);

        // dt510
        const dt510 = scene.add.image(360, 159, "treasurehunt", "tiles/tile0001");
        dt510.scaleX = 0.95;
        dt510.scaleY = 0.95;
        dt510.tintTopLeft = 13290186;
        dt510.tintTopRight = 13290186;
        dt510.tintBottomLeft = 13290186;
        dt510.tintBottomRight = 13290186;
        middleLayer.add(dt510);

        // dt508
        const dt508 = scene.add.image(280, 159, "treasurehunt", "tiles/tile0001");
        dt508.scaleX = 0.95;
        dt508.scaleY = 0.95;
        dt508.tintTopLeft = 13290186;
        dt508.tintTopRight = 13290186;
        dt508.tintBottomLeft = 13290186;
        dt508.tintBottomRight = 13290186;
        middleLayer.add(dt508);

        // dt509
        const dt509 = scene.add.image(320, 159, "treasurehunt", "tiles/tile0001");
        dt509.scaleX = 0.95;
        dt509.scaleY = 0.95;
        dt509.tintTopLeft = 13290186;
        dt509.tintTopRight = 13290186;
        dt509.tintBottomLeft = 13290186;
        dt509.tintBottomRight = 13290186;
        middleLayer.add(dt509);

        // dt506
        const dt506 = scene.add.image(200, 159, "treasurehunt", "tiles/tile0001");
        dt506.scaleX = 0.95;
        dt506.scaleY = 0.95;
        dt506.tintTopLeft = 13290186;
        dt506.tintTopRight = 13290186;
        dt506.tintBottomLeft = 13290186;
        dt506.tintBottomRight = 13290186;
        middleLayer.add(dt506);

        // dt507
        const dt507 = scene.add.image(240, 159, "treasurehunt", "tiles/tile0001");
        dt507.scaleX = 0.95;
        dt507.scaleY = 0.95;
        dt507.tintTopLeft = 13290186;
        dt507.tintTopRight = 13290186;
        dt507.tintBottomLeft = 13290186;
        dt507.tintBottomRight = 13290186;
        middleLayer.add(dt507);

        // dt607
        const dt607 = scene.add.image(240, 199, "treasurehunt", "tiles/tile0001");
        dt607.scaleX = 0.95;
        dt607.scaleY = 0.95;
        dt607.tintTopLeft = 13290186;
        dt607.tintTopRight = 13290186;
        dt607.tintBottomLeft = 13290186;
        dt607.tintBottomRight = 13290186;
        middleLayer.add(dt607);

        // dt606
        const dt606 = scene.add.image(200, 199, "treasurehunt", "tiles/tile0001");
        dt606.scaleX = 0.95;
        dt606.scaleY = 0.95;
        dt606.tintTopLeft = 13290186;
        dt606.tintTopRight = 13290186;
        dt606.tintBottomLeft = 13290186;
        dt606.tintBottomRight = 13290186;
        middleLayer.add(dt606);

        // dt609
        const dt609 = scene.add.image(320, 199, "treasurehunt", "tiles/tile0001");
        dt609.scaleX = 0.95;
        dt609.scaleY = 0.95;
        dt609.tintTopLeft = 13290186;
        dt609.tintTopRight = 13290186;
        dt609.tintBottomLeft = 13290186;
        dt609.tintBottomRight = 13290186;
        middleLayer.add(dt609);

        // dt608
        const dt608 = scene.add.image(280, 199, "treasurehunt", "tiles/tile0001");
        dt608.scaleX = 0.95;
        dt608.scaleY = 0.95;
        dt608.tintTopLeft = 13290186;
        dt608.tintTopRight = 13290186;
        dt608.tintBottomLeft = 13290186;
        dt608.tintBottomRight = 13290186;
        middleLayer.add(dt608);

        // dt610
        const dt610 = scene.add.image(360, 199, "treasurehunt", "tiles/tile0001");
        dt610.scaleX = 0.95;
        dt610.scaleY = 0.95;
        dt610.tintTopLeft = 13290186;
        dt610.tintTopRight = 13290186;
        dt610.tintBottomLeft = 13290186;
        dt610.tintBottomRight = 13290186;
        middleLayer.add(dt610);

        // dt605
        const dt605 = scene.add.image(160, 199, "treasurehunt", "tiles/tile0001");
        dt605.scaleX = 0.95;
        dt605.scaleY = 0.95;
        dt605.tintTopLeft = 13290186;
        dt605.tintTopRight = 13290186;
        dt605.tintBottomLeft = 13290186;
        dt605.tintBottomRight = 13290186;
        middleLayer.add(dt605);

        // dt603
        const dt603 = scene.add.image(80, 199, "treasurehunt", "tiles/tile0001");
        dt603.scaleX = 0.95;
        dt603.scaleY = 0.95;
        dt603.tintTopLeft = 13290186;
        dt603.tintTopRight = 13290186;
        dt603.tintBottomLeft = 13290186;
        dt603.tintBottomRight = 13290186;
        middleLayer.add(dt603);

        // dt604
        const dt604 = scene.add.image(120, 199, "treasurehunt", "tiles/tile0001");
        dt604.scaleX = 0.95;
        dt604.scaleY = 0.95;
        dt604.tintTopLeft = 13290186;
        dt604.tintTopRight = 13290186;
        dt604.tintBottomLeft = 13290186;
        dt604.tintBottomRight = 13290186;
        middleLayer.add(dt604);

        // dt602
        const dt602 = scene.add.image(40, 199, "treasurehunt", "tiles/tile0001");
        dt602.scaleX = 0.95;
        dt602.scaleY = 0.95;
        dt602.tintTopLeft = 13290186;
        dt602.tintTopRight = 13290186;
        dt602.tintBottomLeft = 13290186;
        dt602.tintBottomRight = 13290186;
        middleLayer.add(dt602);

        // dt601
        const dt601 = scene.add.image(0, 199, "treasurehunt", "tiles/tile0001");
        dt601.scaleX = 0.95;
        dt601.scaleY = 0.95;
        dt601.tintTopLeft = 13290186;
        dt601.tintTopRight = 13290186;
        dt601.tintBottomLeft = 13290186;
        dt601.tintBottomRight = 13290186;
        middleLayer.add(dt601);

        // topLayer
        const topLayer = scene.add.container(5, 0);
        this.add(topLayer);

        // t101
        const t101 = scene.add.image(0, 0, "treasurehunt", "tiles/tile0001");
        t101.scaleX = 0.95;
        t101.scaleY = 0.95;
        topLayer.add(t101);

        // t102
        const t102 = scene.add.image(40, 0, "treasurehunt", "tiles/tile0001");
        t102.scaleX = 0.95;
        t102.scaleY = 0.95;
        topLayer.add(t102);

        // t104
        const t104 = scene.add.image(120, 0, "treasurehunt", "tiles/tile0001");
        t104.scaleX = 0.95;
        t104.scaleY = 0.95;
        topLayer.add(t104);

        // t103
        const t103 = scene.add.image(80, 0, "treasurehunt", "tiles/tile0001");
        t103.scaleX = 0.95;
        t103.scaleY = 0.95;
        topLayer.add(t103);

        // t105
        const t105 = scene.add.image(160, 0, "treasurehunt", "tiles/tile0001");
        t105.scaleX = 0.95;
        t105.scaleY = 0.95;
        topLayer.add(t105);

        // t110
        const t110 = scene.add.image(360, 0, "treasurehunt", "tiles/tile0001");
        t110.scaleX = 0.95;
        t110.scaleY = 0.95;
        topLayer.add(t110);

        // t108
        const t108 = scene.add.image(280, 0, "treasurehunt", "tiles/tile0001");
        t108.scaleX = 0.95;
        t108.scaleY = 0.95;
        topLayer.add(t108);

        // t109
        const t109 = scene.add.image(320, 0, "treasurehunt", "tiles/tile0001");
        t109.scaleX = 0.95;
        t109.scaleY = 0.95;
        topLayer.add(t109);

        // t106
        const t106 = scene.add.image(200, 0, "treasurehunt", "tiles/tile0001");
        t106.scaleX = 0.95;
        t106.scaleY = 0.95;
        topLayer.add(t106);

        // t107
        const t107 = scene.add.image(240, 0, "treasurehunt", "tiles/tile0001");
        t107.scaleX = 0.95;
        t107.scaleY = 0.95;
        topLayer.add(t107);

        // t207
        const t207 = scene.add.image(240, 40, "treasurehunt", "tiles/tile0001");
        t207.scaleX = 0.95;
        t207.scaleY = 0.95;
        topLayer.add(t207);

        // t206
        const t206 = scene.add.image(200, 40, "treasurehunt", "tiles/tile0001");
        t206.scaleX = 0.95;
        t206.scaleY = 0.95;
        topLayer.add(t206);

        // t209
        const t209 = scene.add.image(320, 40, "treasurehunt", "tiles/tile0001");
        t209.scaleX = 0.95;
        t209.scaleY = 0.95;
        topLayer.add(t209);

        // t208
        const t208 = scene.add.image(280, 40, "treasurehunt", "tiles/tile0001");
        t208.scaleX = 0.95;
        t208.scaleY = 0.95;
        topLayer.add(t208);

        // t210
        const t210 = scene.add.image(360, 40, "treasurehunt", "tiles/tile0001");
        t210.scaleX = 0.95;
        t210.scaleY = 0.95;
        topLayer.add(t210);

        // t205
        const t205 = scene.add.image(160, 40, "treasurehunt", "tiles/tile0001");
        t205.scaleX = 0.95;
        t205.scaleY = 0.95;
        topLayer.add(t205);

        // t203
        const t203 = scene.add.image(80, 40, "treasurehunt", "tiles/tile0001");
        t203.scaleX = 0.95;
        t203.scaleY = 0.95;
        topLayer.add(t203);

        // t204
        const t204 = scene.add.image(120, 40, "treasurehunt", "tiles/tile0001");
        t204.scaleX = 0.95;
        t204.scaleY = 0.95;
        topLayer.add(t204);

        // t202
        const t202 = scene.add.image(40, 40, "treasurehunt", "tiles/tile0001");
        t202.scaleX = 0.95;
        t202.scaleY = 0.95;
        topLayer.add(t202);

        // t201
        const t201 = scene.add.image(0, 40, "treasurehunt", "tiles/tile0001");
        t201.scaleX = 0.95;
        t201.scaleY = 0.95;
        topLayer.add(t201);

        // t301
        const t301 = scene.add.image(0, 79, "treasurehunt", "tiles/tile0001");
        t301.scaleX = 0.95;
        t301.scaleY = 0.95;
        topLayer.add(t301);

        // t401
        const t401 = scene.add.image(0, 119, "treasurehunt", "tiles/tile0001");
        t401.scaleX = 0.95;
        t401.scaleY = 0.95;
        topLayer.add(t401);

        // t402
        const t402 = scene.add.image(40, 119, "treasurehunt", "tiles/tile0001");
        t402.scaleX = 0.95;
        t402.scaleY = 0.95;
        topLayer.add(t402);

        // t404
        const t404 = scene.add.image(120, 119, "treasurehunt", "tiles/tile0001");
        t404.scaleX = 0.95;
        t404.scaleY = 0.95;
        topLayer.add(t404);

        // t403
        const t403 = scene.add.image(80, 119, "treasurehunt", "tiles/tile0001");
        t403.scaleX = 0.95;
        t403.scaleY = 0.95;
        topLayer.add(t403);

        // t405
        const t405 = scene.add.image(160, 119, "treasurehunt", "tiles/tile0001");
        t405.scaleX = 0.95;
        t405.scaleY = 0.95;
        topLayer.add(t405);

        // t410
        const t410 = scene.add.image(360, 119, "treasurehunt", "tiles/tile0001");
        t410.scaleX = 0.95;
        t410.scaleY = 0.95;
        topLayer.add(t410);

        // t408
        const t408 = scene.add.image(280, 119, "treasurehunt", "tiles/tile0001");
        t408.scaleX = 0.95;
        t408.scaleY = 0.95;
        topLayer.add(t408);

        // t409
        const t409 = scene.add.image(320, 119, "treasurehunt", "tiles/tile0001");
        t409.scaleX = 0.95;
        t409.scaleY = 0.95;
        topLayer.add(t409);

        // t406
        const t406 = scene.add.image(200, 119, "treasurehunt", "tiles/tile0001");
        t406.scaleX = 0.95;
        t406.scaleY = 0.95;
        topLayer.add(t406);

        // t407
        const t407 = scene.add.image(240, 119, "treasurehunt", "tiles/tile0001");
        t407.scaleX = 0.95;
        t407.scaleY = 0.95;
        topLayer.add(t407);

        // t307
        const t307 = scene.add.image(240, 79, "treasurehunt", "tiles/tile0001");
        t307.scaleX = 0.95;
        t307.scaleY = 0.95;
        topLayer.add(t307);

        // t306
        const t306 = scene.add.image(200, 79, "treasurehunt", "tiles/tile0001");
        t306.scaleX = 0.95;
        t306.scaleY = 0.95;
        topLayer.add(t306);

        // t309
        const t309 = scene.add.image(320, 79, "treasurehunt", "tiles/tile0001");
        t309.scaleX = 0.95;
        t309.scaleY = 0.95;
        topLayer.add(t309);

        // t308
        const t308 = scene.add.image(280, 79, "treasurehunt", "tiles/tile0001");
        t308.scaleX = 0.95;
        t308.scaleY = 0.95;
        topLayer.add(t308);

        // t310
        const t310 = scene.add.image(360, 79, "treasurehunt", "tiles/tile0001");
        t310.scaleX = 0.95;
        t310.scaleY = 0.95;
        topLayer.add(t310);

        // t305
        const t305 = scene.add.image(160, 79, "treasurehunt", "tiles/tile0001");
        t305.scaleX = 0.95;
        t305.scaleY = 0.95;
        topLayer.add(t305);

        // t303
        const t303 = scene.add.image(80, 79, "treasurehunt", "tiles/tile0001");
        t303.scaleX = 0.95;
        t303.scaleY = 0.95;
        topLayer.add(t303);

        // t304
        const t304 = scene.add.image(120, 79, "treasurehunt", "tiles/tile0001");
        t304.scaleX = 0.95;
        t304.scaleY = 0.95;
        topLayer.add(t304);

        // t302
        const t302 = scene.add.image(40, 79, "treasurehunt", "tiles/tile0001");
        t302.scaleX = 0.95;
        t302.scaleY = 0.95;
        topLayer.add(t302);

        // t701
        const t701 = scene.add.image(0, 239, "treasurehunt", "tiles/tile0001");
        t701.scaleX = 0.95;
        t701.scaleY = 0.95;
        topLayer.add(t701);

        // t801
        const t801 = scene.add.image(0, 279, "treasurehunt", "tiles/tile0001");
        t801.scaleX = 0.95;
        t801.scaleY = 0.95;
        topLayer.add(t801);

        // t802
        const t802 = scene.add.image(40, 279, "treasurehunt", "tiles/tile0001");
        t802.scaleX = 0.95;
        t802.scaleY = 0.95;
        topLayer.add(t802);

        // t702
        const t702 = scene.add.image(40, 239, "treasurehunt", "tiles/tile0001");
        t702.scaleX = 0.95;
        t702.scaleY = 0.95;
        topLayer.add(t702);

        // t703
        const t703 = scene.add.image(80, 239, "treasurehunt", "tiles/tile0001");
        t703.scaleX = 0.95;
        t703.scaleY = 0.95;
        topLayer.add(t703);

        // t803
        const t803 = scene.add.image(80, 279, "treasurehunt", "tiles/tile0001");
        t803.scaleX = 0.95;
        t803.scaleY = 0.95;
        topLayer.add(t803);

        // t804
        const t804 = scene.add.image(120, 279, "treasurehunt", "tiles/tile0001");
        t804.scaleX = 0.95;
        t804.scaleY = 0.95;
        topLayer.add(t804);

        // t704
        const t704 = scene.add.image(120, 239, "treasurehunt", "tiles/tile0001");
        t704.scaleX = 0.95;
        t704.scaleY = 0.95;
        topLayer.add(t704);

        // t706
        const t706 = scene.add.image(200, 239, "treasurehunt", "tiles/tile0001");
        t706.scaleX = 0.95;
        t706.scaleY = 0.95;
        topLayer.add(t706);

        // t805
        const t805 = scene.add.image(160, 279, "treasurehunt", "tiles/tile0001");
        t805.scaleX = 0.95;
        t805.scaleY = 0.95;
        topLayer.add(t805);

        // t705
        const t705 = scene.add.image(160, 239, "treasurehunt", "tiles/tile0001");
        t705.scaleX = 0.95;
        t705.scaleY = 0.95;
        topLayer.add(t705);

        // t806
        const t806 = scene.add.image(200, 279, "treasurehunt", "tiles/tile0001");
        t806.scaleX = 0.95;
        t806.scaleY = 0.95;
        topLayer.add(t806);

        // t807
        const t807 = scene.add.image(240, 279, "treasurehunt", "tiles/tile0001");
        t807.scaleX = 0.95;
        t807.scaleY = 0.95;
        topLayer.add(t807);

        // t707
        const t707 = scene.add.image(240, 239, "treasurehunt", "tiles/tile0001");
        t707.scaleX = 0.95;
        t707.scaleY = 0.95;
        topLayer.add(t707);

        // t808
        const t808 = scene.add.image(280, 279, "treasurehunt", "tiles/tile0001");
        t808.scaleX = 0.95;
        t808.scaleY = 0.95;
        topLayer.add(t808);

        // t708
        const t708 = scene.add.image(280, 239, "treasurehunt", "tiles/tile0001");
        t708.scaleX = 0.95;
        t708.scaleY = 0.95;
        topLayer.add(t708);

        // t709
        const t709 = scene.add.image(320, 239, "treasurehunt", "tiles/tile0001");
        t709.scaleX = 0.95;
        t709.scaleY = 0.95;
        topLayer.add(t709);

        // t809
        const t809 = scene.add.image(320, 279, "treasurehunt", "tiles/tile0001");
        t809.scaleX = 0.95;
        t809.scaleY = 0.95;
        topLayer.add(t809);

        // t810
        const t810 = scene.add.image(360, 279, "treasurehunt", "tiles/tile0001");
        t810.scaleX = 0.95;
        t810.scaleY = 0.95;
        topLayer.add(t810);

        // t710
        const t710 = scene.add.image(360, 239, "treasurehunt", "tiles/tile0001");
        t710.scaleX = 0.95;
        t710.scaleY = 0.95;
        topLayer.add(t710);

        // t901
        const t901 = scene.add.image(0, 318, "treasurehunt", "tiles/tile0001");
        t901.scaleX = 0.95;
        t901.scaleY = 0.95;
        topLayer.add(t901);

        // t1001
        const t1001 = scene.add.image(0, 358, "treasurehunt", "tiles/tile0001");
        t1001.scaleX = 0.95;
        t1001.scaleY = 0.95;
        topLayer.add(t1001);

        // t1002
        const t1002 = scene.add.image(40, 358, "treasurehunt", "tiles/tile0001");
        t1002.scaleX = 0.95;
        t1002.scaleY = 0.95;
        topLayer.add(t1002);

        // t902
        const t902 = scene.add.image(40, 318, "treasurehunt", "tiles/tile0001");
        t902.scaleX = 0.95;
        t902.scaleY = 0.95;
        topLayer.add(t902);

        // t903
        const t903 = scene.add.image(80, 318, "treasurehunt", "tiles/tile0001");
        t903.scaleX = 0.95;
        t903.scaleY = 0.95;
        topLayer.add(t903);

        // t1003
        const t1003 = scene.add.image(80, 358, "treasurehunt", "tiles/tile0001");
        t1003.scaleX = 0.95;
        t1003.scaleY = 0.95;
        topLayer.add(t1003);

        // t1004
        const t1004 = scene.add.image(120, 358, "treasurehunt", "tiles/tile0001");
        t1004.scaleX = 0.95;
        t1004.scaleY = 0.95;
        topLayer.add(t1004);

        // t904
        const t904 = scene.add.image(120, 318, "treasurehunt", "tiles/tile0001");
        t904.scaleX = 0.95;
        t904.scaleY = 0.95;
        topLayer.add(t904);

        // t905
        const t905 = scene.add.image(160, 318, "treasurehunt", "tiles/tile0001");
        t905.scaleX = 0.95;
        t905.scaleY = 0.95;
        topLayer.add(t905);

        // t1005
        const t1005 = scene.add.image(160, 358, "treasurehunt", "tiles/tile0001");
        t1005.scaleX = 0.95;
        t1005.scaleY = 0.95;
        topLayer.add(t1005);

        // t1006
        const t1006 = scene.add.image(200, 358, "treasurehunt", "tiles/tile0001");
        t1006.scaleX = 0.95;
        t1006.scaleY = 0.95;
        topLayer.add(t1006);

        // t906
        const t906 = scene.add.image(200, 318, "treasurehunt", "tiles/tile0001");
        t906.scaleX = 0.95;
        t906.scaleY = 0.95;
        topLayer.add(t906);

        // t907
        const t907 = scene.add.image(240, 318, "treasurehunt", "tiles/tile0001");
        t907.scaleX = 0.95;
        t907.scaleY = 0.95;
        topLayer.add(t907);

        // t1007
        const t1007 = scene.add.image(240, 358, "treasurehunt", "tiles/tile0001");
        t1007.scaleX = 0.95;
        t1007.scaleY = 0.95;
        topLayer.add(t1007);

        // t1009
        const t1009 = scene.add.image(320, 358, "treasurehunt", "tiles/tile0001");
        t1009.scaleX = 0.95;
        t1009.scaleY = 0.95;
        topLayer.add(t1009);

        // t909
        const t909 = scene.add.image(320, 318, "treasurehunt", "tiles/tile0001");
        t909.scaleX = 0.95;
        t909.scaleY = 0.95;
        topLayer.add(t909);

        // t908
        const t908 = scene.add.image(280, 318, "treasurehunt", "tiles/tile0001");
        t908.scaleX = 0.95;
        t908.scaleY = 0.95;
        topLayer.add(t908);

        // t1008
        const t1008 = scene.add.image(280, 358, "treasurehunt", "tiles/tile0001");
        t1008.scaleX = 0.95;
        t1008.scaleY = 0.95;
        topLayer.add(t1008);

        // t910
        const t910 = scene.add.image(360, 318, "treasurehunt", "tiles/tile0001");
        t910.scaleX = 0.95;
        t910.scaleY = 0.95;
        topLayer.add(t910);

        // t1010
        const t1010 = scene.add.image(360, 358, "treasurehunt", "tiles/tile0001");
        t1010.scaleX = 0.95;
        t1010.scaleY = 0.95;
        topLayer.add(t1010);

        // t501
        const t501 = scene.add.image(0, 159, "treasurehunt", "tiles/tile0001");
        t501.scaleX = 0.95;
        t501.scaleY = 0.95;
        topLayer.add(t501);

        // t502
        const t502 = scene.add.image(40, 159, "treasurehunt", "tiles/tile0001");
        t502.scaleX = 0.95;
        t502.scaleY = 0.95;
        topLayer.add(t502);

        // t504
        const t504 = scene.add.image(120, 159, "treasurehunt", "tiles/tile0001");
        t504.scaleX = 0.95;
        t504.scaleY = 0.95;
        topLayer.add(t504);

        // t503
        const t503 = scene.add.image(80, 159, "treasurehunt", "tiles/tile0001");
        t503.scaleX = 0.95;
        t503.scaleY = 0.95;
        topLayer.add(t503);

        // t505
        const t505 = scene.add.image(160, 159, "treasurehunt", "tiles/tile0001");
        t505.scaleX = 0.95;
        t505.scaleY = 0.95;
        topLayer.add(t505);

        // t510
        const t510 = scene.add.image(360, 159, "treasurehunt", "tiles/tile0001");
        t510.scaleX = 0.95;
        t510.scaleY = 0.95;
        topLayer.add(t510);

        // t508
        const t508 = scene.add.image(280, 159, "treasurehunt", "tiles/tile0001");
        t508.scaleX = 0.95;
        t508.scaleY = 0.95;
        topLayer.add(t508);

        // t509
        const t509 = scene.add.image(320, 159, "treasurehunt", "tiles/tile0001");
        t509.scaleX = 0.95;
        t509.scaleY = 0.95;
        topLayer.add(t509);

        // t506
        const t506 = scene.add.image(200, 159, "treasurehunt", "tiles/tile0001");
        t506.scaleX = 0.95;
        t506.scaleY = 0.95;
        topLayer.add(t506);

        // t507
        const t507 = scene.add.image(240, 159, "treasurehunt", "tiles/tile0001");
        t507.scaleX = 0.95;
        t507.scaleY = 0.95;
        topLayer.add(t507);

        // t607
        const t607 = scene.add.image(240, 199, "treasurehunt", "tiles/tile0001");
        t607.scaleX = 0.95;
        t607.scaleY = 0.95;
        topLayer.add(t607);

        // t606
        const t606 = scene.add.image(200, 199, "treasurehunt", "tiles/tile0001");
        t606.scaleX = 0.95;
        t606.scaleY = 0.95;
        topLayer.add(t606);

        // t609
        const t609 = scene.add.image(320, 199, "treasurehunt", "tiles/tile0001");
        t609.scaleX = 0.95;
        t609.scaleY = 0.95;
        topLayer.add(t609);

        // t608
        const t608 = scene.add.image(280, 199, "treasurehunt", "tiles/tile0001");
        t608.scaleX = 0.95;
        t608.scaleY = 0.95;
        topLayer.add(t608);

        // t610
        const t610 = scene.add.image(360, 199, "treasurehunt", "tiles/tile0001");
        t610.scaleX = 0.95;
        t610.scaleY = 0.95;
        topLayer.add(t610);

        // t605
        const t605 = scene.add.image(160, 199, "treasurehunt", "tiles/tile0001");
        t605.scaleX = 0.95;
        t605.scaleY = 0.95;
        topLayer.add(t605);

        // t603
        const t603 = scene.add.image(80, 199, "treasurehunt", "tiles/tile0001");
        t603.scaleX = 0.95;
        t603.scaleY = 0.95;
        topLayer.add(t603);

        // t604
        const t604 = scene.add.image(120, 199, "treasurehunt", "tiles/tile0001");
        t604.scaleX = 0.95;
        t604.scaleY = 0.95;
        topLayer.add(t604);

        // t602
        const t602 = scene.add.image(40, 199, "treasurehunt", "tiles/tile0001");
        t602.scaleX = 0.95;
        t602.scaleY = 0.95;
        topLayer.add(t602);

        // t601
        const t601 = scene.add.image(0, 199, "treasurehunt", "tiles/tile0001");
        t601.scaleX = 0.95;
        t601.scaleY = 0.95;
        topLayer.add(t601);

        // player1DigBtns
        const player1DigBtns = scene.add.container(173, -1);
        player1DigBtns.visible = false;
        this.add(player1DigBtns);

        // row10Dig
        const row10Dig = scene.add.image(-9, 359, "treasurehunt", "digBtn");
        row10Dig.angle = -90;
        player1DigBtns.add(row10Dig);

        // row9Dig
        const row9Dig = scene.add.image(-9, 320, "treasurehunt", "digBtn");
        row9Dig.angle = -90;
        player1DigBtns.add(row9Dig);

        // row8Dig
        const row8Dig = scene.add.image(-9, 279, "treasurehunt", "digBtn");
        row8Dig.angle = -90;
        player1DigBtns.add(row8Dig);

        // row7Dig
        const row7Dig = scene.add.image(-9, 239, "treasurehunt", "digBtn");
        row7Dig.angle = -90;
        player1DigBtns.add(row7Dig);

        // row6Dig
        const row6Dig = scene.add.image(-9, 200, "treasurehunt", "digBtn");
        row6Dig.angle = -90;
        player1DigBtns.add(row6Dig);

        // row5Dig
        const row5Dig = scene.add.image(-9, 161, "treasurehunt", "digBtn");
        row5Dig.angle = -90;
        player1DigBtns.add(row5Dig);

        // row4Dig
        const row4Dig = scene.add.image(-9, 120, "treasurehunt", "digBtn");
        row4Dig.angle = -90;
        player1DigBtns.add(row4Dig);

        // row3Dig
        const row3Dig = scene.add.image(-9, 80, "treasurehunt", "digBtn");
        row3Dig.angle = -90;
        player1DigBtns.add(row3Dig);

        // row2Dig
        const row2Dig = scene.add.image(-9, 41, "treasurehunt", "digBtn");
        row2Dig.angle = -90;
        player1DigBtns.add(row2Dig);

        // row1Dig
        const row1Dig = scene.add.image(-9, 0, "treasurehunt", "digBtn");
        row1Dig.angle = -90;
        player1DigBtns.add(row1Dig);

        // player2DigBtns
        const player2DigBtns = scene.add.container(3, 159);
        player2DigBtns.visible = false;
        this.add(player2DigBtns);

        // col10Dig
        const col10Dig = scene.add.image(362, 0, "treasurehunt", "digBtn");
        player2DigBtns.add(col10Dig);

        // col9Dig
        const col9Dig = scene.add.image(322, 0, "treasurehunt", "digBtn");
        player2DigBtns.add(col9Dig);

        // col8Dig
        const col8Dig = scene.add.image(283, 0, "treasurehunt", "digBtn");
        player2DigBtns.add(col8Dig);

        // col7Dig
        const col7Dig = scene.add.image(242, 0, "treasurehunt", "digBtn");
        player2DigBtns.add(col7Dig);

        // col6Dig
        const col6Dig = scene.add.image(200, 0, "treasurehunt", "digBtn");
        player2DigBtns.add(col6Dig);

        // col5Dig
        const col5Dig = scene.add.image(161, 0, "treasurehunt", "digBtn");
        player2DigBtns.add(col5Dig);

        // col4Dig
        const col4Dig = scene.add.image(122, 0, "treasurehunt", "digBtn");
        player2DigBtns.add(col4Dig);

        // col3Dig
        const col3Dig = scene.add.image(81, 0, "treasurehunt", "digBtn");
        player2DigBtns.add(col3Dig);

        // col2Dig
        const col2Dig = scene.add.image(41, 0, "treasurehunt", "digBtn");
        player2DigBtns.add(col2Dig);

        // col1Dig
        const col1Dig = scene.add.image(0, 0, "treasurehunt", "digBtn");
        player2DigBtns.add(col1Dig);

        // clearAnims
        const clearAnims = scene.add.container(4, -3);
        this.add(clearAnims);

        // row1Clear
        const row1Clear = new ClearTileAnim(scene, 0, 0);
        clearAnims.add(row1Clear);

        // row2Clear
        const row2Clear = new ClearTileAnim(scene, 0, 38);
        clearAnims.add(row2Clear);

        // row3Clear
        const row3Clear = new ClearTileAnim(scene, 0, 79);
        clearAnims.add(row3Clear);

        // row4Clear
        const row4Clear = new ClearTileAnim(scene, 0, 118);
        clearAnims.add(row4Clear);

        // row5Clear
        const row5Clear = new ClearTileAnim(scene, 0, 158);
        clearAnims.add(row5Clear);

        // row6Clear
        const row6Clear = new ClearTileAnim(scene, 0, 199);
        clearAnims.add(row6Clear);

        // row7Clear
        const row7Clear = new ClearTileAnim(scene, 0, 239);
        clearAnims.add(row7Clear);

        // row8Clear
        const row8Clear = new ClearTileAnim(scene, 0, 278);
        clearAnims.add(row8Clear);

        // row9Clear
        const row9Clear = new ClearTileAnim(scene, 0, 317);
        clearAnims.add(row9Clear);

        // row10Clear
        const row10Clear = new ClearTileAnim(scene, 0, 357);
        clearAnims.add(row10Clear);

        // col1Clear
        const col1Clear = new ClearTileAnim(scene, 0, 0);
        clearAnims.add(col1Clear);

        // col2Clear
        const col2Clear = new ClearTileAnim(scene, 40, 0);
        clearAnims.add(col2Clear);

        // col3Clear
        const col3Clear = new ClearTileAnim(scene, 81, 0);
        clearAnims.add(col3Clear);

        // col4Clear
        const col4Clear = new ClearTileAnim(scene, 121, 0);
        clearAnims.add(col4Clear);

        // col5Clear
        const col5Clear = new ClearTileAnim(scene, 159, 0);
        clearAnims.add(col5Clear);

        // col6Clear
        const col6Clear = new ClearTileAnim(scene, 199, 0);
        clearAnims.add(col6Clear);

        // col7Clear
        const col7Clear = new ClearTileAnim(scene, 239, 0);
        clearAnims.add(col7Clear);

        // col8Clear
        const col8Clear = new ClearTileAnim(scene, 279, 0);
        clearAnims.add(col8Clear);

        // col9Clear
        const col9Clear = new ClearTileAnim(scene, 319, 0);
        clearAnims.add(col9Clear);

        // col10Clear
        const col10Clear = new ClearTileAnim(scene, 359, 0);
        clearAnims.add(col10Clear);

        // lists
        const digBtns = [col1Dig, col2Dig, col3Dig, col4Dig, col5Dig, col6Dig, col7Dig, col8Dig, col9Dig, col10Dig, row1Dig, row2Dig, row3Dig, row4Dig, row5Dig, row6Dig, row7Dig, row8Dig, row9Dig, row10Dig];
        const clears = [col10Clear, col9Clear, col8Clear, col7Clear, col6Clear, col5Clear, col4Clear, col3Clear, col2Clear, col1Clear, row10Clear, row9Clear, row8Clear, row7Clear, row6Clear, row5Clear, row4Clear, row3Clear, row2Clear, row1Clear];

        // row10Dig (components)
        const row10DigButton = new Button(row10Dig);
        row10DigButton.spriteName = "digBtn";
        row10DigButton.callback = () => this.parentContainer.sendClearRow(10);
        row10DigButton.activeFrame = true;

        // row9Dig (components)
        const row9DigButton = new Button(row9Dig);
        row9DigButton.spriteName = "digBtn";
        row9DigButton.callback = () => this.parentContainer.sendClearRow(9);
        row9DigButton.activeFrame = true;

        // row8Dig (components)
        const row8DigButton = new Button(row8Dig);
        row8DigButton.spriteName = "digBtn";
        row8DigButton.callback = () => this.parentContainer.sendClearRow(8);
        row8DigButton.activeFrame = true;

        // row7Dig (components)
        const row7DigButton = new Button(row7Dig);
        row7DigButton.spriteName = "digBtn";
        row7DigButton.callback = () => this.parentContainer.sendClearRow(7);
        row7DigButton.activeFrame = true;

        // row6Dig (components)
        const row6DigButton = new Button(row6Dig);
        row6DigButton.spriteName = "digBtn";
        row6DigButton.callback = () => this.parentContainer.sendClearRow(6);
        row6DigButton.activeFrame = true;

        // row5Dig (components)
        const row5DigButton = new Button(row5Dig);
        row5DigButton.spriteName = "digBtn";
        row5DigButton.callback = () => this.parentContainer.sendClearRow(5);
        row5DigButton.activeFrame = true;

        // row4Dig (components)
        const row4DigButton = new Button(row4Dig);
        row4DigButton.spriteName = "digBtn";
        row4DigButton.callback = () => this.parentContainer.sendClearRow(4);
        row4DigButton.activeFrame = true;

        // row3Dig (components)
        const row3DigButton = new Button(row3Dig);
        row3DigButton.spriteName = "digBtn";
        row3DigButton.callback = () => this.parentContainer.sendClearRow(3);
        row3DigButton.activeFrame = true;

        // row2Dig (components)
        const row2DigButton = new Button(row2Dig);
        row2DigButton.spriteName = "digBtn";
        row2DigButton.callback = () => this.parentContainer.sendClearRow(2);
        row2DigButton.activeFrame = true;

        // row1Dig (components)
        const row1DigButton = new Button(row1Dig);
        row1DigButton.spriteName = "digBtn";
        row1DigButton.callback = () => this.parentContainer.sendClearRow(1);
        row1DigButton.activeFrame = true;

        // col10Dig (components)
        const col10DigButton = new Button(col10Dig);
        col10DigButton.spriteName = "digBtn";
        col10DigButton.callback = () => this.parentContainer.sendClearColumn(10);
        col10DigButton.activeFrame = true;

        // col9Dig (components)
        const col9DigButton = new Button(col9Dig);
        col9DigButton.spriteName = "digBtn";
        col9DigButton.callback = () => this.parentContainer.sendClearColumn(9);
        col9DigButton.activeFrame = true;

        // col8Dig (components)
        const col8DigButton = new Button(col8Dig);
        col8DigButton.spriteName = "digBtn";
        col8DigButton.callback = () => this.parentContainer.sendClearColumn(8);
        col8DigButton.activeFrame = true;

        // col7Dig (components)
        const col7DigButton = new Button(col7Dig);
        col7DigButton.spriteName = "digBtn";
        col7DigButton.callback = () => this.parentContainer.sendClearColumn(7);
        col7DigButton.activeFrame = true;

        // col6Dig (components)
        const col6DigButton = new Button(col6Dig);
        col6DigButton.spriteName = "digBtn";
        col6DigButton.callback = () => this.parentContainer.sendClearColumn(6);
        col6DigButton.activeFrame = true;

        // col5Dig (components)
        const col5DigButton = new Button(col5Dig);
        col5DigButton.spriteName = "digBtn";
        col5DigButton.callback = () => this.parentContainer.sendClearColumn(5);
        col5DigButton.activeFrame = true;

        // col4Dig (components)
        const col4DigButton = new Button(col4Dig);
        col4DigButton.spriteName = "digBtn";
        col4DigButton.callback = () => this.parentContainer.sendClearColumn(4);
        col4DigButton.activeFrame = true;

        // col3Dig (components)
        const col3DigButton = new Button(col3Dig);
        col3DigButton.spriteName = "digBtn";
        col3DigButton.callback = () => this.parentContainer.sendClearColumn(3);
        col3DigButton.activeFrame = true;

        // col2Dig (components)
        const col2DigButton = new Button(col2Dig);
        col2DigButton.spriteName = "digBtn";
        col2DigButton.callback = () => this.parentContainer.sendClearColumn(2);
        col2DigButton.activeFrame = true;

        // col1Dig (components)
        const col1DigButton = new Button(col1Dig);
        col1DigButton.spriteName = "digBtn";
        col1DigButton.callback = () => this.parentContainer.sendClearColumn(1);
        col1DigButton.activeFrame = true;

        // row1Clear (prefab fields)
        row1Clear.index = 1;

        // row2Clear (prefab fields)
        row2Clear.index = 2;

        // row3Clear (prefab fields)
        row3Clear.index = 3;

        // row4Clear (prefab fields)
        row4Clear.index = 4;

        // row5Clear (prefab fields)
        row5Clear.index = 5;

        // row6Clear (prefab fields)
        row6Clear.index = 6;

        // row7Clear (prefab fields)
        row7Clear.index = 7;

        // row8Clear (prefab fields)
        row8Clear.index = 8;

        // row9Clear (prefab fields)
        row9Clear.index = 9;

        // row10Clear (prefab fields)
        row10Clear.index = 10;

        // col1Clear (prefab fields)
        col1Clear.direction = "column";
        col1Clear.index = 1;

        // col2Clear (prefab fields)
        col2Clear.direction = "column";
        col2Clear.index = 2;

        // col3Clear (prefab fields)
        col3Clear.direction = "column";
        col3Clear.index = 3;

        // col4Clear (prefab fields)
        col4Clear.direction = "column";
        col4Clear.index = 4;

        // col5Clear (prefab fields)
        col5Clear.direction = "column";
        col5Clear.index = 5;

        // col6Clear (prefab fields)
        col6Clear.direction = "column";
        col6Clear.index = 6;

        // col7Clear (prefab fields)
        col7Clear.direction = "column";
        col7Clear.index = 7;

        // col8Clear (prefab fields)
        col8Clear.direction = "column";
        col8Clear.index = 8;

        // col9Clear (prefab fields)
        col9Clear.direction = "column";
        col9Clear.index = 9;

        // col10Clear (prefab fields)
        col10Clear.direction = "column";
        col10Clear.index = 10;

        this.bottomLayer = bottomLayer;
        this.dt101 = dt101;
        this.dt102 = dt102;
        this.dt104 = dt104;
        this.dt103 = dt103;
        this.dt105 = dt105;
        this.dt110 = dt110;
        this.dt108 = dt108;
        this.dt109 = dt109;
        this.dt106 = dt106;
        this.dt107 = dt107;
        this.dt207 = dt207;
        this.dt206 = dt206;
        this.dt209 = dt209;
        this.dt208 = dt208;
        this.dt210 = dt210;
        this.dt205 = dt205;
        this.dt203 = dt203;
        this.dt204 = dt204;
        this.dt202 = dt202;
        this.dt201 = dt201;
        this.dt301 = dt301;
        this.dt401 = dt401;
        this.dt402 = dt402;
        this.dt404 = dt404;
        this.dt403 = dt403;
        this.dt405 = dt405;
        this.dt410 = dt410;
        this.dt408 = dt408;
        this.dt409 = dt409;
        this.dt406 = dt406;
        this.dt407 = dt407;
        this.dt307 = dt307;
        this.dt306 = dt306;
        this.dt309 = dt309;
        this.dt308 = dt308;
        this.dt310 = dt310;
        this.dt305 = dt305;
        this.dt303 = dt303;
        this.dt304 = dt304;
        this.dt302 = dt302;
        this.dt701 = dt701;
        this.dt801 = dt801;
        this.dt802 = dt802;
        this.dt702 = dt702;
        this.dt703 = dt703;
        this.dt803 = dt803;
        this.dt804 = dt804;
        this.dt704 = dt704;
        this.dt706 = dt706;
        this.dt805 = dt805;
        this.dt705 = dt705;
        this.dt806 = dt806;
        this.dt807 = dt807;
        this.dt707 = dt707;
        this.dt808 = dt808;
        this.dt708 = dt708;
        this.dt709 = dt709;
        this.dt809 = dt809;
        this.dt810 = dt810;
        this.dt710 = dt710;
        this.dt901 = dt901;
        this.dt1001 = dt1001;
        this.dt1002 = dt1002;
        this.dt902 = dt902;
        this.dt903 = dt903;
        this.dt1003 = dt1003;
        this.dt1004 = dt1004;
        this.dt904 = dt904;
        this.dt905 = dt905;
        this.dt1005 = dt1005;
        this.dt1006 = dt1006;
        this.dt906 = dt906;
        this.dt907 = dt907;
        this.dt1007 = dt1007;
        this.dt1009 = dt1009;
        this.dt909 = dt909;
        this.dt908 = dt908;
        this.dt1008 = dt1008;
        this.dt910 = dt910;
        this.dt1010 = dt1010;
        this.dt501 = dt501;
        this.dt502 = dt502;
        this.dt504 = dt504;
        this.dt503 = dt503;
        this.dt505 = dt505;
        this.dt510 = dt510;
        this.dt508 = dt508;
        this.dt509 = dt509;
        this.dt506 = dt506;
        this.dt507 = dt507;
        this.dt607 = dt607;
        this.dt606 = dt606;
        this.dt609 = dt609;
        this.dt608 = dt608;
        this.dt610 = dt610;
        this.dt605 = dt605;
        this.dt603 = dt603;
        this.dt604 = dt604;
        this.dt602 = dt602;
        this.dt601 = dt601;
        this.middleLayer = middleLayer;
        this.t101 = t101;
        this.t102 = t102;
        this.t104 = t104;
        this.t103 = t103;
        this.t105 = t105;
        this.t110 = t110;
        this.t108 = t108;
        this.t109 = t109;
        this.t106 = t106;
        this.t107 = t107;
        this.t207 = t207;
        this.t206 = t206;
        this.t209 = t209;
        this.t208 = t208;
        this.t210 = t210;
        this.t205 = t205;
        this.t203 = t203;
        this.t204 = t204;
        this.t202 = t202;
        this.t201 = t201;
        this.t301 = t301;
        this.t401 = t401;
        this.t402 = t402;
        this.t404 = t404;
        this.t403 = t403;
        this.t405 = t405;
        this.t410 = t410;
        this.t408 = t408;
        this.t409 = t409;
        this.t406 = t406;
        this.t407 = t407;
        this.t307 = t307;
        this.t306 = t306;
        this.t309 = t309;
        this.t308 = t308;
        this.t310 = t310;
        this.t305 = t305;
        this.t303 = t303;
        this.t304 = t304;
        this.t302 = t302;
        this.t701 = t701;
        this.t801 = t801;
        this.t802 = t802;
        this.t702 = t702;
        this.t703 = t703;
        this.t803 = t803;
        this.t804 = t804;
        this.t704 = t704;
        this.t706 = t706;
        this.t805 = t805;
        this.t705 = t705;
        this.t806 = t806;
        this.t807 = t807;
        this.t707 = t707;
        this.t808 = t808;
        this.t708 = t708;
        this.t709 = t709;
        this.t809 = t809;
        this.t810 = t810;
        this.t710 = t710;
        this.t901 = t901;
        this.t1001 = t1001;
        this.t1002 = t1002;
        this.t902 = t902;
        this.t903 = t903;
        this.t1003 = t1003;
        this.t1004 = t1004;
        this.t904 = t904;
        this.t905 = t905;
        this.t1005 = t1005;
        this.t1006 = t1006;
        this.t906 = t906;
        this.t907 = t907;
        this.t1007 = t1007;
        this.t1009 = t1009;
        this.t909 = t909;
        this.t908 = t908;
        this.t1008 = t1008;
        this.t910 = t910;
        this.t1010 = t1010;
        this.t501 = t501;
        this.t502 = t502;
        this.t504 = t504;
        this.t503 = t503;
        this.t505 = t505;
        this.t510 = t510;
        this.t508 = t508;
        this.t509 = t509;
        this.t506 = t506;
        this.t507 = t507;
        this.t607 = t607;
        this.t606 = t606;
        this.t609 = t609;
        this.t608 = t608;
        this.t610 = t610;
        this.t605 = t605;
        this.t603 = t603;
        this.t604 = t604;
        this.t602 = t602;
        this.t601 = t601;
        this.row10Dig = row10Dig;
        this.row9Dig = row9Dig;
        this.row8Dig = row8Dig;
        this.row7Dig = row7Dig;
        this.row6Dig = row6Dig;
        this.row5Dig = row5Dig;
        this.row4Dig = row4Dig;
        this.row3Dig = row3Dig;
        this.row2Dig = row2Dig;
        this.row1Dig = row1Dig;
        this.player1DigBtns = player1DigBtns;
        this.col10Dig = col10Dig;
        this.col9Dig = col9Dig;
        this.col8Dig = col8Dig;
        this.col7Dig = col7Dig;
        this.col6Dig = col6Dig;
        this.col5Dig = col5Dig;
        this.col4Dig = col4Dig;
        this.col3Dig = col3Dig;
        this.col2Dig = col2Dig;
        this.col1Dig = col1Dig;
        this.player2DigBtns = player2DigBtns;
        this.row1Clear = row1Clear;
        this.row2Clear = row2Clear;
        this.row3Clear = row3Clear;
        this.row4Clear = row4Clear;
        this.row5Clear = row5Clear;
        this.row6Clear = row6Clear;
        this.row7Clear = row7Clear;
        this.row8Clear = row8Clear;
        this.row9Clear = row9Clear;
        this.row10Clear = row10Clear;
        this.col1Clear = col1Clear;
        this.col2Clear = col2Clear;
        this.col3Clear = col3Clear;
        this.col4Clear = col4Clear;
        this.col5Clear = col5Clear;
        this.col6Clear = col6Clear;
        this.col7Clear = col7Clear;
        this.col8Clear = col8Clear;
        this.col9Clear = col9Clear;
        this.col10Clear = col10Clear;
        this.digBtns = digBtns;
        this.clears = clears;

        /* START-USER-CTR-CODE */
        this.rowStrings = ['01','02','03','04','05','06','07','08','09','10']
        this.treasures = []
        this.shines = []

        this.tileManager = new TileManager(this)
        this.resetTiles()
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    showDigBtns(turn) {
        this[`player${turn}DigBtns`].visible = true
    }

    hideAllDigBtns() {
        this.player1DigBtns.visible = false
        this.player2DigBtns.visible = false
    }

    resetDigBtns() {
        for(let btn of this.digBtns) btn.visible = true
    }

    stopDigs() {
        for(let clear of this.clears) {
            clear.vertical.__Animation.stop()
            clear.horizontal.__Animation.stop()
        }
    }

    setupMap(map) {
        let rowIndex = 1
        for(let i = 0; i < map.length; i++) {
            let colIndex = 1
            for(let col of map[rowIndex - 1]) {
                switch(col[0]) {
                    case 1:
                        this.addObject('coin',rowIndex,colIndex)
                        this.addObject('shine',rowIndex,colIndex)
                        break
                    case 2:
                        this.addObject('gem',rowIndex,colIndex)
                        this.addObject('shine',rowIndex,colIndex)
                        break
                    case 4:
                        this.addObject('emerald',rowIndex,colIndex)
                        this.addObject('shine',rowIndex,colIndex)
                        break
                    default: break
                }
                colIndex++
            }
            rowIndex++
        }
    }

    addObject(type,rowIndex,colIndex) {
        let target = this[`t${rowIndex}${colIndex < 10 ? '0' : ''}${colIndex}`]
        let treasure = new TreasureObject(this.scene, target.x, target.y)
        if(type === 'shine') {
            this.middleLayer.add(treasure)
            target._shine = treasure
        } else {
            this.bottomLayer.add(treasure)
        }
        this.treasures.push(treasure)
        treasure.show(type)
    }

    destroyShine(a,b) {
        if(this[`t${a}${b}`]._shine) {
            this[`t${a}${b}`]._shine.destroy()
            this[`t${a}${b}`]._shine = null
        }
    }

    resetTiles() {
        try {
            for(let r of this.rowStrings) {
                for(let i = 1; i < 11; i++) {
                    this[`dt${i}${r}`].visible = true
                    this[`t${i}${r}`].visible = true
                    this[`dt${i}${r}`].setFrame('tiles/tile0001')
                    this[`t${i}${r}`].setFrame('tiles/tile0001')
                }
            }
            for(let r of this.rowStrings) {
                for(let i = 1; i < 11; i++) {
                    this.tileManager.changeTile(this[`t${i}${r}`],r,i)
                    this.tileManager.changeTile(this[`dt${i}${r}`],r,i,true)
                }
            }
            for(let treasure of this.treasures) if(treasure) treasure.destroy()
        } catch(e) {
            console.error(`uwu chris's code didnt work ${e}`)
        }
    }

    playRowCleared(row) {
        this[`row${row}Clear`].play()
        this[`row${row}Dig`].visible = false
    }

    playColumnCleared(col) {
        this[`col${col}Clear`].play()
        this[`col${col}Dig`].visible = false
    }

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
