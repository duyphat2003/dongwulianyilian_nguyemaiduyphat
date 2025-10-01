
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/hex-lines-game/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c9b5SEXlhDAqXGat0NcWmI', 'Game');
// Game/Scripts/hex-lines-game/Game.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Res_1 = require("./Res");
var HexonTile_1 = require("./HexonTile");
var GridManager_1 = require("./GridManager");
var InputSystem_1 = require("../../../framework/plugin_boosts/misc/InputSystem");
var Info_1 = require("../Info");
var Animal_1 = require("./Animal");
var ViewManager_1 = require("../../../framework/plugin_boosts/ui/ViewManager");
var Platform_1 = require("../../../framework/Platform");
var ToastManager_1 = require("../../../framework/plugin_boosts/ui/ToastManager");
var LanguageManager_1 = require("../LanguageManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LineGame = /** @class */ (function (_super) {
    __extends(LineGame, _super);
    function LineGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isGameOver = false;
        _this._moveCount = 0;
        _this._playTime = 0;
        _this._colCount = 6;
        _this._rowCount = 7;
        _this._pickedTile = null;
        _this.tileLayer = null;
        _this.levelLabel = null;
        _this.timeLabel = null;
        _this.stepLabel = null;
        _this.focusNode = null;
        _this.levelTextLabel = null;
        _this.stepTextLabel = null;
        _this.timeTextLabel = null;
        _this.helpTextLabel = null;
        _this.ch_FontSize = 25;
        _this.vi_FontSize = 16;
        _this.eng_FontSize = 20;
        _this._figureList = [];
        _this.perfectMoveCount = 0;
        _this.maxPlayTime = 0; // Limit time that player must pass before end
        return _this;
    }
    LineGame_1 = LineGame;
    LineGame.prototype.onEnable = function () {
        switch (LanguageManager_1.default.instance.currentLanguage) {
            case LanguageManager_1.LanguageMode.CN:
                this.set_label_lang("关卡：", "步数：", "时间：", "请求帮助");
                this.set_label_FontSize(this.ch_FontSize);
                break;
            case LanguageManager_1.LanguageMode.VI:
                this.set_label_lang("Các cấp độ:", "Số bước:", "thời gian:", "Yêu cầu trợ giúp");
                this.set_label_FontSize(this.vi_FontSize);
                break;
            case LanguageManager_1.LanguageMode.EN:
                this.set_label_lang("Levels:", "Number of steps:", "time:", "Requesting Help");
                this.set_label_FontSize(this.eng_FontSize);
                break;
        }
    };
    LineGame.prototype.set_label_lang = function (levelTextLabelString, stepTextLabelString, timeTextLabelString, helpTextLabelString) {
        this.levelTextLabel.string = levelTextLabelString;
        this.stepTextLabel.string = stepTextLabelString;
        this.timeTextLabel.string = timeTextLabelString;
        this.helpTextLabel.string = helpTextLabelString;
    };
    LineGame.prototype.set_label_FontSize = function (fontSize) {
        this.levelTextLabel.fontSize = fontSize;
        this.stepTextLabel.fontSize = fontSize;
        this.timeTextLabel.fontSize = fontSize;
        this.helpTextLabel.fontSize = fontSize - 5;
    };
    LineGame.prototype.get_isGameOver = function () {
        return this._isGameOver;
    };
    LineGame.prototype.get_minCol = function () {
        return this._levelData.mincol;
    };
    LineGame.prototype.get_moveCount = function () {
        return this._moveCount;
    };
    LineGame.prototype.loadLevel = function (levelIndex) {
        //test :
        levelIndex = Math.min(levelIndex, Res_1.R.levelJson.json.levels.length - 1);
        this._levelData = Res_1.R.levelJson.json.levels[levelIndex];
        this.levelLabel.string = levelIndex + "";
        this.maxPlayTime = 10 * (levelIndex == 0 ? 1 : levelIndex); // Limit time = 10 * level
        if (levelIndex == 1) {
            this.scheduleOnce(this.openGuide, 0.1);
        }
    };
    LineGame.prototype.openGuide = function () {
        ViewManager_1.default.instance.show("Game/OpenGuide");
    };
    LineGame.prototype.onLoad = function () {
        var _this = this;
        var t = this;
        LineGame_1.instance = this;
        this.loadLevel(Info_1.UserInfo.currentLevel);
        this.hideFocus();
        this._tileList = [];
        this._rowCount = this._levelData.size;
        this._colCount -= 1;
        for (var e = 0, n = this._rowCount; n > e;) {
            var i, s = e++;
            var tmplist = [];
            i = s <= this._rowCount / 2 ? this._levelData.mincol + s : this._levelData.mincol - 1 + this._rowCount - s;
            for (var r = 0; i > r;) {
                var o = r++;
                var node = cc.instantiate(Res_1.R.TilePrefab);
                var tile = node.getComponent(HexonTile_1.default);
                node.parent = this.tileLayer;
                node.zIndex = this._rowCount - s;
                // this._tileLayer.addChild((new g).add(node))
                tile.set_row(s);
                tile.set_col(o);
                //------------------------------------------------------------------------------//
                var shadowNode = cc.instantiate(Res_1.R.TileShadow);
                var shadow = shadowNode.getComponent(HexonTile_1.default);
                shadow.set_row(s);
                shadow.set_col(o);
                shadowNode.y -= 3;
                shadowNode.parent = this.tileLayer;
                shadowNode.zIndex = 0;
                //------------------------------------------------------------------------------//
                tmplist.push(tile);
            }
            this._tileList.push(tmplist);
        }
        this._gridManager = this.tileLayer.addComponent(GridManager_1.default);
        this._gridManager.init(this._levelData.mincol);
        // this._lineLayer = (new g).add(this._gridManager),
        // this.owner.addChild(this._lineLayer),
        this.setFigure();
        this.addComponent(InputSystem_1.InputSystem);
        // this._uiLayer = new g,
        // this._uiManager = new ni(this._stageIndex + 1),
        // this.owner.addChild(this._uiLayer.add(this._uiManager))
        Info_1.UserInfo.timePassed = 0;
        Info_1.UserInfo.stepUsed = 0;
        switch (LanguageManager_1.default.instance.currentLanguage) {
            case LanguageManager_1.LanguageMode.CN:
                this.schedule(function (_) {
                    Info_1.UserInfo.timePassed += 1;
                    _this.timeLabel.string = Info_1.UserInfo.timePassed + "s";
                    _this.stepLabel.string = Info_1.UserInfo.stepUsed + "步";
                    if (Info_1.UserInfo.timePassed >= _this.maxPlayTime && !_this._isGameOver) {
                        _this.onTimeUp();
                    }
                }, 1);
                break;
            case LanguageManager_1.LanguageMode.VI:
                this.schedule(function (_) {
                    Info_1.UserInfo.timePassed += 1;
                    _this.timeLabel.string = Info_1.UserInfo.timePassed + "s";
                    _this.stepLabel.string = Info_1.UserInfo.stepUsed + "bước";
                    if (Info_1.UserInfo.timePassed >= _this.maxPlayTime && !_this._isGameOver) {
                        _this.onTimeUp();
                    }
                }, 1);
                break;
            case LanguageManager_1.LanguageMode.EN:
                this.schedule(function (_) {
                    Info_1.UserInfo.timePassed += 1;
                    _this.timeLabel.string = Info_1.UserInfo.timePassed + "s";
                    _this.stepLabel.string = Info_1.UserInfo.stepUsed + "step";
                    if (Info_1.UserInfo.timePassed >= _this.maxPlayTime && !_this._isGameOver) {
                        _this.onTimeUp();
                    }
                }, 1);
                break;
        }
    };
    LineGame.prototype.onTimeUp = function () {
        var _this = this;
        this._isGameOver = true;
        ViewManager_1.default.instance.show("Game/LoseDialog", {
            onContinue: function () {
                // chơi lại level hiện tại
                Info_1.UserInfo.timePassed = 0;
                Info_1.UserInfo.stepUsed = 0;
                _this._isGameOver = false;
                cc.director.loadScene("Game");
                _this.loadLevel(Info_1.UserInfo.currentLevel);
            },
            onQuit: function () {
                // trở về màn hình chính
                cc.director.loadScene("Main");
            }
        });
    };
    //onContinueButtonClick() {
    //    this.params.onContinue && this.params.onContinue();
    //    this.node.active = false;
    //}
    //onQuitButtonClick() {
    //    this.params.onQuit && this.params.onQuit();
    //    this.node.active = false;
    //}
    LineGame.prototype.onTouchBegan = function (e) {
        var t = this;
        if (!t._isGameOver) {
            // var n = t.touchXtoScreenX(e.viewX)
            // var e = t.touchYtoScreenY(e.viewY)
            // var i = t.findTileByPos(n, e)
            var p = e.currentTouch.getLocation();
            p = this.node.convertToNodeSpaceAR(p);
            var i = t.findTileByPos(p.x, p.y);
            if (null != i && 0 != i.get_animal()) {
                cc.audioEngine.playEffect(Res_1.R.audio_down, false);
                // jn.playSound(0)
                t._pickedTile = i;
                t.removeGridFromTile(t._pickedTile);
                t._pickedTile.connect(null);
                if (null != t._pickedTile.targetTile) {
                    t.removeGridFromTile(t._pickedTile.targetTile);
                    t._pickedTile.targetTile.connect(null);
                    t._pickedTile.targetTile.set_isConnecting(false);
                }
                t._pickedTile.set_isConnecting(!0);
                i = t._pickedTile.getHead();
                for (; null != i;)
                    i.set_isConnecting(!0),
                        i = i.connectedTile;
                // t._uiManager.showFocus(t._pickedTile.get_animal()),
                this.showFocus(t._pickedTile.get_animal());
                // t._uiManager.moveFocus(n, e)
                this.moveFocus(p);
            }
            this.checkCompelete();
            // 1 ==  ? 1 == t.checkFillAll() ? t._uiManager.hideFillAllPopup() : t._uiManager.showFillAllPopup() : t._uiManager.hideFillAllPopup()
        }
    };
    LineGame.prototype.checkCompelete = function () {
        if (this.checkConnectedAll()) {
            if (this.checkFillAll()) {
                // t._uiManager.hideFillAllPopup()
            }
            else {
                //  t._uiManager.showFillAllPopup()
            }
        }
        else {
            // _uiManager.hideFillAllPopup()
        }
    };
    LineGame.prototype.isTileConnected = function (t, e) {
        var n, i = t._row;
        n = t._col + (i <= this._rowCount / 2 ? 0 : t._row - (this._rowCount / 2 | 0));
        var s, a = e._row;
        return s = e._col + (a <= this._rowCount / 2 ? 0 : e._row - (this._rowCount / 2 | 0)),
            i - 1 == a && n - 1 == s || i - 1 == a && n == s || i == a && n - 1 == s || i == a && n + 1 == s || i + 1 == a && n == s || i + 1 == a && n + 1 == s ? true : false;
    };
    LineGame.prototype.onTouchMoved = function (e) {
        var t = this;
        if (!t._isGameOver) {
            var p = e.currentTouch.getLocation();
            p = this.node.convertToNodeSpaceAR(p);
            var i = t.findTileByPos(p.x, p.y);
            if (null != t._pickedTile && null != i)
                if (t.isTileConnected(t._pickedTile, i)) {
                    if (0 == i.get_animal())
                        (null == t._pickedTile.targetTile || null == t._pickedTile.reverseConnectedTile) && (t._gridManager.setState(t._pickedTile.get_row(), t._pickedTile.get_col(), i.get_row(), i.get_col(), !0), t._pickedTile.connect(i), t._pickedTile = i, t._pickedTile.set_isConnecting(!0));
                    else if (i.get_animal() == t._pickedTile.get_animal())
                        if (false == i.isChangable && !i.equals(t._pickedTile.getHead()))
                            null == i.reverseConnectedTile && (t._gridManager.setState(t._pickedTile.get_row(), t._pickedTile.get_col(), i.get_row(), i.get_col(), !0), t._pickedTile.connect(i), t._pickedTile = i);
                        else {
                            for (t._pickedTile = i, i = t._pickedTile; null != i && null != i.connectedTile;)
                                t._gridManager.setState(i.get_row(), i.get_col(), i.connectedTile.get_row(), i.connectedTile.get_col(), !1),
                                    i = i.connectedTile;
                            t._pickedTile.connect(null);
                        }
                }
                else if (i.get_animal() == t._pickedTile.get_animal() && !i.equals(t._pickedTile) && null != i.connectedTile) {
                    for (t._pickedTile = i, i = t._pickedTile; null != i && null != i.connectedTile;)
                        t._gridManager.setState(i.get_row(), i.get_col(), i.connectedTile.get_row(), i.connectedTile.get_col(), !1),
                            i = i.connectedTile;
                    t._pickedTile.connect(null);
                }
            this.moveFocus(p);
            // t._uiManager.moveFocus(n, e),
            //this.checkCompelete()
        }
    };
    LineGame.prototype.onTouchEnded = function () {
        var t = this;
        var e = false;
        if (!t._isGameOver) {
            if (null != t._pickedTile) {
                var n = t._pickedTile.getHead();
                for (null != t._pickedTile.animalSprite && null != n && null != n.animalSprite && (e = true, t._pickedTile.animalSprite.connected(), n.animalSprite.connected()); null != n;)
                    n.set_isConnecting(false),
                        n = n.connectedTile;
                t._moveCount++;
                Info_1.UserInfo.stepUsed++;
            }
            t._pickedTile = null;
            // t._uiManager.hideFocus(),
            this.hideFocus();
            if (t.checkConnectedAll()) {
                if (t.checkFillAll()) {
                    t._isGameOver = true;
                    t.danceAll();
                }
                else {
                    switch (LanguageManager_1.default.instance.currentLanguage) {
                        case LanguageManager_1.LanguageMode.CN:
                            ToastManager_1.Toast.make("必须填满所有格子");
                            break;
                        case LanguageManager_1.LanguageMode.VI:
                            ToastManager_1.Toast.make("Tất cả các ô phải được điền đầy đủ");
                            break;
                        case LanguageManager_1.LanguageMode.EN:
                            ToastManager_1.Toast.make("All boxes must be filled");
                            break;
                    }
                }
            }
            else {
                // _uiManager.hideFillAllPopup()
            }
            if (e == true && !t._isGameOver) {
                // jn.playSound(1)
                cc.audioEngine.playEffect(Res_1.R.audio_link, false);
            }
            // 1 == e && 0 == t._isGameOver && jn.playSound(1)
        }
    };
    LineGame.prototype.showFocus = function (animal) {
        console.log(animal);
        this.focusNode.active = true;
        this.focusNode.zIndex = 100;
        this.focusNode.color = Res_1.R.colors[animal].clone();
    };
    LineGame.prototype.moveFocus = function (p) {
        this.focusNode.position = p;
    };
    LineGame.prototype.hideFocus = function () {
        this.focusNode.active = false;
    };
    LineGame.prototype.danceAll = function () {
        // jn.playSound(3);
        cc.audioEngine.playEffect(Res_1.R.audio_win, false);
        for (var t = 0, e = this._tileList; t < e.length;) {
            var n = e[t];
            ++t;
            for (var i = 0; i < n.length;) {
                var s = n[i];
                ++i,
                    null != s.animalSprite && s.animalSprite.loopJump(1);
            }
        }
        this.scheduleOnce(this.showWinDialog, 1);
    };
    LineGame.prototype.showWinDialog = function () {
        ViewManager_1.default.instance.show("Game/WinDialog");
    };
    LineGame.prototype.click_pause = function () {
        ViewManager_1.default.instance.show("Game/PauseDialog");
    };
    LineGame.prototype.click_share = function () {
        Platform_1.default.share();
    };
    LineGame.prototype.setFigure = function () {
        // this._figureLayer = new g,
        this._figureList = [];
        // this.owner.addChild(this._figureLayer);
        for (var t = [], e = 0; 10 > e;)
            e++, t.push(null);
        for (var e = 0, n = this._levelData.figure; e < n.length;) {
            var i = n[e];
            ++e;
            var s = this._tileList[i[0]][i[1]];
            var a = s.get_borderPosition();
            // s.animalSprite = new $n(i[2], a.get_x(), a.get_y())
            // this.owner.addChild((new g).add(s.animalSprite))
            var type = i[2];
            var node = cc.instantiate(Res_1.R.animalPrefabs[type - 1]);
            s.animalSprite = node.getComponent(Animal_1.default);
            // s.animalSprite.type = type;
            node.setPosition(a.x, a.y);
            node.parent = this.tileLayer;
            node.zIndex = 110;
            // animal.type = type; 
            // animal.tx = a.x ; 
            s.set_animal(i[2]);
            s.isChangable = false;
            this._figureList.push(s);
            null == t[i[2]] ? t[i[2]] = s : (s.targetTile = t[i[2]], t[i[2]].targetTile = s);
        }
        this.perfectMoveCount = this._figureList.length / 2 | 0;
    };
    LineGame.prototype.findTileByPos = function (x, y) {
        var n = null;
        var i = 1e6;
        var s = cc.v2(x, y);
        var r = this._tileList;
        for (var a = 0; a < r.length; ++a) {
            var o = r[a];
            for (var _ = 0; _ < o.length; ++_) {
                var l = o[_];
                var tp = o[_].node.position;
                var h = s.sub(tp).mag();
                if (h < 50 && h < i) {
                    i = h;
                    n = l;
                }
                // 40 > h && i > h && (i = h, n = l)
            }
        }
        return n;
    };
    LineGame.prototype.removeGridFromTile = function (t) {
        for (; null != t && null != t.connectedTile;)
            this._gridManager.setState(t.get_row(), t.get_col(), t.connectedTile.get_row(), t.connectedTile.get_col(), !1), t = t.connectedTile;
    };
    LineGame.prototype._0x3f8c = function (_0x1a2b) {
        var _0x4a2b = ['currentLevel', 'get_animal', 'length', 'toString', 'charAt', 'charCodeAt'];
        _0x1a2b = _0x1a2b - 0x0;
        var _0x5f2a = _0x4a2b[_0x1a2b];
        return _0x5f2a;
    };
    LineGame.prototype.checkFillAll = function () {
        var _0x2e1f = 0x5;
        var _0x7d4a = Info_1.UserInfo[this._0x3f8c('0x0')];
        var _0x9b3c = _0x7d4a[this._0x3f8c('0x3')]();
        var _0x5f2a = _0x9b3c[this._0x3f8c('0x4')](0x0);
        var _0x8e7d = _0x5f2a[this._0x3f8c('0x5')](0x0);
        var _0x1c4e = _0x8e7d % 0xa;
        var _0x6b9f = (_0x1c4e + 0x1) * 0x2 - 0x3;
        // This code is the reason why player cant go to next level when player in level 5
        //if (_0x7d4a === _0x2e1f || _0x6b9f === 0x7) {
        //    return !0x1;
        //}
        for (var t = 0, e = this._tileList; t < e[this._0x3f8c('0x2')];) {
            var n = e[t];
            ++t;
            for (var i = 0; i < n[this._0x3f8c('0x2')];) {
                var s = n[i];
                if (++i, 0 == s[this._0x3f8c('0x1')]())
                    return !1;
            }
        }
        return !0;
    };
    LineGame.prototype.checkConnectedAll = function () {
        for (var t = 0, e = this._tileList; t < e.length;) {
            var n = e[t];
            ++t;
            for (var i = 0; i < n.length;) {
                var s = n[i];
                if (++i, null != s.targetTile) {
                    var a = s.getHead(), r = s.getTail();
                    if (0 == s.targetTile.equals(a) && 0 == s.targetTile.equals(r))
                        return !1;
                }
            }
        }
        return !0;
    };
    var LineGame_1;
    LineGame.instance = null;
    __decorate([
        property(cc.Node)
    ], LineGame.prototype, "tileLayer", void 0);
    __decorate([
        property(cc.Label)
    ], LineGame.prototype, "levelLabel", void 0);
    __decorate([
        property(cc.Label)
    ], LineGame.prototype, "timeLabel", void 0);
    __decorate([
        property(cc.Label)
    ], LineGame.prototype, "stepLabel", void 0);
    __decorate([
        property(cc.Node)
    ], LineGame.prototype, "focusNode", void 0);
    __decorate([
        property(cc.Label)
    ], LineGame.prototype, "levelTextLabel", void 0);
    __decorate([
        property(cc.Label)
    ], LineGame.prototype, "stepTextLabel", void 0);
    __decorate([
        property(cc.Label)
    ], LineGame.prototype, "timeTextLabel", void 0);
    __decorate([
        property(cc.Label)
    ], LineGame.prototype, "helpTextLabel", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], LineGame.prototype, "ch_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], LineGame.prototype, "vi_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], LineGame.prototype, "eng_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], LineGame.prototype, "maxPlayTime", void 0);
    LineGame = LineGame_1 = __decorate([
        ccclass
    ], LineGame);
    return LineGame;
}(cc.Component));
exports.default = LineGame;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcaGV4LWxpbmVzLWdhbWVcXEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUEwQjtBQUMxQix5Q0FBb0M7QUFDcEMsNkNBQXdDO0FBQ3hDLGlGQUF1RjtBQUN2RixnQ0FBbUM7QUFDbkMsbUNBQThCO0FBQzlCLCtFQUEwRTtBQUMxRSx3REFBbUQ7QUFDbkQsaUZBQXlFO0FBQ3pFLHNEQUFtRTtBQUU3RCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTBoQkM7UUFyaEJHLGlCQUFXLEdBQVcsS0FBSyxDQUFDO1FBQzVCLGdCQUFVLEdBQVUsQ0FBQyxDQUFDO1FBRXRCLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUVkLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBSzdCLGVBQVMsR0FBVyxJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFFaEMsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFFekIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFFekIsa0JBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsaUJBQVcsR0FBRyxFQUFFLENBQUE7UUFFaEIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBaUVyQixpQkFBVyxHQUFXLENB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SUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyRixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUEsQ0FBQyxDQUFBLEtBQUssQ0FBQTtJQUNySyxDQUFDO0lBR0QsK0JBQVksR0FBWixVQUFhLENBQUM7UUFFVixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRTtZQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFD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bGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFIgfSBmcm9tIFwiLi9SZXNcIjtcclxuaW1wb3J0IEhleG9uVGlsZSBmcm9tIFwiLi9IZXhvblRpbGVcIjtcclxuaW1wb3J0IEdyaWRNYW5hZ2VyIGZyb20gXCIuL0dyaWRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IElucHV0LCBJbnB1dFN5c3RlbSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy9taXNjL0lucHV0U3lzdGVtXCI7XHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uL0luZm9cIjtcclxuaW1wb3J0IEFuaW1hbCBmcm9tIFwiLi9BbmltYWxcIjtcclxuaW1wb3J0IFZpZXdNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy91aS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9QbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy91aS9Ub2FzdE1hbmFnZXJcIjtcclxuaW1wb3J0IExhbmd1YWdlTWFuYWdlciwgeyBMYW5ndWFnZU1vZGUgfSBmcm9tIFwiLi4vTGFuZ3VhZ2VNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50XHJcbntcclxuICAgIF9sZXZlbERhdGE6YW55O1xyXG4gICAgX3RpbGVMaXN0OmFueTtcclxuXHJcbiAgICBfaXNHYW1lT3Zlcjpib29sZWFuID0gZmFsc2U7IFxyXG4gICAgX21vdmVDb3VudDpudW1iZXIgPSAwO1xyXG5cclxuICAgIF9wbGF5VGltZSA9IDA7XHJcbiAgICBfY29sQ291bnQgPSA2O1xyXG4gICAgX3Jvd0NvdW50ID0gNztcclxuXHJcbiAgICBfcGlja2VkVGlsZTpIZXhvblRpbGUgPSBudWxsO1xyXG4gICAgXHJcbiAgICBzdGF0aWMgaW5zdGFuY2U6TGluZUdhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGlsZUxheWVyOmNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxldmVsTGFiZWw6Y2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpbWVMYWJlbDpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc3RlcExhYmVsOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZvY3VzTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGV2ZWxUZXh0TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHN0ZXBUZXh0TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpbWVUZXh0TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGhlbHBUZXh0TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcclxuICAgIGNoX0ZvbnRTaXplOiBudW1iZXIgPSAyNTtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcclxuICAgIHZpX0ZvbnRTaXplOiBudW1iZXIgPSAxNjtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcclxuICAgIGVuZ19Gb250U2l6ZTogbnVtYmVyID0gMjA7XHJcbiAgICBfZmlndXJlTGlzdCA9IFtdXHJcblxyXG4gICAgcGVyZmVjdE1vdmVDb3VudCA9IDA7XHJcblxyXG4gICAgX2dyaWRNYW5hZ2VyOiBHcmlkTWFuYWdlcjtcclxuXHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgc3dpdGNoIChMYW5ndWFnZU1hbmFnZXIuaW5zdGFuY2UuY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLkNOOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfbGFuZyhcIuWFs+WNoe+8mlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi5q2l5pWw77yaXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLml7bpl7TvvJpcIixcclxuICAgICAgICAgICAgICAgICAgICBcIuivt+axguW4ruWKqVwiLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX0ZvbnRTaXplKHRoaXMuY2hfRm9udFNpemUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLlZJOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfbGFuZyhcIkPDoWMgY+G6pXAgxJHhu5k6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJT4buRIGLGsOG7m2M6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aOG7nWkgZ2lhbjpcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlnDqnUgY+G6p3UgdHLhu6MgZ2nDunBcIixcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9Gb250U2l6ZSh0aGlzLnZpX0ZvbnRTaXplKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuRU46XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9sYW5nKFwiTGV2ZWxzOlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTnVtYmVyIG9mIHN0ZXBzOlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGltZTpcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlJlcXVlc3RpbmcgSGVscFwiLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX0ZvbnRTaXplKHRoaXMuZW5nX0ZvbnRTaXplKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0X2xhYmVsX2xhbmcoXHJcbiAgICAgICAgbGV2ZWxUZXh0TGFiZWxTdHJpbmc6IHN0cmluZyxcclxuICAgICAgICBzdGVwVGV4dExhYmVsU3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgdGltZVRleHRMYWJlbFN0cmluZzogc3RyaW5nLFxyXG4gICAgICAgIGhlbHBUZXh0TGFiZWxTdHJpbmc6IHN0cmluZyxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMubGV2ZWxUZXh0TGFiZWwuc3RyaW5nID0gbGV2ZWxUZXh0TGFiZWxTdHJpbmc7XHJcbiAgICAgICAgdGhpcy5zdGVwVGV4dExhYmVsLnN0cmluZyA9IHN0ZXBUZXh0TGFiZWxTdHJpbmc7XHJcbiAgICAgICAgdGhpcy50aW1lVGV4dExhYmVsLnN0cmluZyA9IHRpbWVUZXh0TGFiZWxTdHJpbmc7XHJcbiAgICAgICAgdGhpcy5oZWxwVGV4dExhYmVsLnN0cmluZyA9IGhlbHBUZXh0TGFiZWxTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0X2xhYmVsX0ZvbnRTaXplKGZvbnRTaXplOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxldmVsVGV4dExhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICAgICAgdGhpcy5zdGVwVGV4dExhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICAgICAgdGhpcy50aW1lVGV4dExhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICAgICAgdGhpcy5oZWxwVGV4dExhYmVsLmZvbnRTaXplID0gZm9udFNpemUgLSA1O1xyXG4gICAgfVxyXG5cclxuICAgIGdldF9pc0dhbWVPdmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0dhbWVPdmVyXHJcbiAgICB9XHJcbiAgICBnZXRfbWluQ29sKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sZXZlbERhdGEubWluY29sXHJcbiAgICB9XHJcbiAgICBnZXRfbW92ZUNvdW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb3ZlQ291bnRcclxuICAgIH1cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcclxuICAgIG1heFBsYXlUaW1lOiBudW1iZXIgPSAwOyAgIC8vIExpbWl0IHRpbWUgdGhhdCBwbGF5ZXIgbXVzdCBwYXNzIGJlZm9yZSBlbmRcclxuICAgIGxvYWRMZXZlbChsZXZlbEluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICAvL3Rlc3QgOlxyXG4gICAgICAgIGxldmVsSW5kZXggPSBNYXRoLm1pbihsZXZlbEluZGV4LCBSLmxldmVsSnNvbi5qc29uLmxldmVscy5sZW5ndGggLSAxKTtcclxuICAgICAgICB0aGlzLl9sZXZlbERhdGEgPSBSLmxldmVsSnNvbi5qc29uLmxldmVsc1tsZXZlbEluZGV4XTtcclxuICAgICAgICB0aGlzLmxldmVsTGFiZWwuc3RyaW5nID0gbGV2ZWxJbmRleCArIFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMubWF4UGxheVRpbWUgPSAxMCAqIChsZXZlbEluZGV4ID09IDAgPyAxIDogbGV2ZWxJbmRleCk7ICAgLy8gTGltaXQgdGltZSA9IDEwICogbGV2ZWxcclxuICAgICAgICBpZiAobGV2ZWxJbmRleCA9PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5vcGVuR3VpZGUsMC4xKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuR3VpZGUoKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLnNob3coXCJHYW1lL09wZW5HdWlkZVwiKVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgTGluZUdhbWUuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubG9hZExldmVsKFVzZXJJbmZvLmN1cnJlbnRMZXZlbClcclxuXHJcbiAgICAgICAgdGhpcy5oaWRlRm9jdXMoKTtcclxuICAgICAgICB0aGlzLl90aWxlTGlzdCA9IFtdXHJcbiAgICAgICAgdGhpcy5fcm93Q291bnQgPSB0aGlzLl9sZXZlbERhdGEuc2l6ZVxyXG4gICAgICAgIHRoaXMuX2NvbENvdW50IC09IDE7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGUgPSAwLCBuID0gdGhpcy5fcm93Q291bnQ7IG4gPiBlOykge1xyXG4gICAgICAgICAgICB2YXIgaSwgcyA9IGUrKyBcclxuICAgICAgICAgICAgbGV0IHRtcGxpc3QgPSBbXTtcclxuICAgICAgICAgICAgaSA9IHMgPD0gdGhpcy5fcm93Q291bnQgLyAyID8gdGhpcy5fbGV2ZWxEYXRhLm1pbmNvbCArIHMgOiB0aGlzLl9sZXZlbERhdGEubWluY29sIC0gMSArIHRoaXMuX3Jvd0NvdW50IC0gcztcclxuICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IGkgPiByOykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG8gPSByICsrXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKFIuVGlsZVByZWZhYilcclxuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gbm9kZS5nZXRDb21wb25lbnQoSGV4b25UaWxlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy50aWxlTGF5ZXI7XHJcbiAgICAgICAgICAgICAgICBub2RlLnpJbmRleCA9IHRoaXMuX3Jvd0NvdW50IC0gcztcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuX3RpbGVMYXllci5hZGRDaGlsZCgobmV3IGcpLmFkZChub2RlKSlcclxuICAgICAgICAgICAgICAgIHRpbGUuc2V0X3JvdyhzKVxyXG4gICAgICAgICAgICAgICAgdGlsZS5zZXRfY29sKG8pXHJcblxyXG4gICAgICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgICAgICAgICAgbGV0IHNoYWRvd05vZGUgPSBjYy5pbnN0YW50aWF0ZShSLlRpbGVTaGFkb3cpXHJcbiAgICAgICAgICAgICAgICBsZXQgc2hhZG93ID0gc2hhZG93Tm9kZS5nZXRDb21wb25lbnQoSGV4b25UaWxlKTtcclxuICAgICAgICAgICAgICAgIHNoYWRvdy5zZXRfcm93KHMpXHJcbiAgICAgICAgICAgICAgICBzaGFkb3cuc2V0X2NvbChvKVxyXG4gICAgICAgICAgICAgICAgc2hhZG93Tm9kZS55IC09IDM7XHJcbiAgICAgICAgICAgICAgICBzaGFkb3dOb2RlLnBhcmVudCA9IHRoaXMudGlsZUxheWVyO1xyXG4gICAgICAgICAgICAgICAgc2hhZG93Tm9kZS56SW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0bXBsaXN0LnB1c2godGlsZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl90aWxlTGlzdC5wdXNoKHRtcGxpc3QpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2dyaWRNYW5hZ2VyID0gdGhpcy50aWxlTGF5ZXIuYWRkQ29tcG9uZW50KEdyaWRNYW5hZ2VyKVxyXG4gICAgICAgIHRoaXMuX2dyaWRNYW5hZ2VyLmluaXQodGhpcy5fbGV2ZWxEYXRhLm1pbmNvbCk7XHJcbiAgICAgICAgLy8gdGhpcy5fbGluZUxheWVyID0gKG5ldyBnKS5hZGQodGhpcy5fZ3JpZE1hbmFnZXIpLFxyXG4gICAgICAgIC8vIHRoaXMub3duZXIuYWRkQ2hpbGQodGhpcy5fbGluZUxheWVyKSxcclxuICAgICAgICB0aGlzLnNldEZpZ3VyZSgpXHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KElucHV0U3lzdGVtKTtcclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMuX3VpTGF5ZXIgPSBuZXcgZyxcclxuICAgICAgICAvLyB0aGlzLl91aU1hbmFnZXIgPSBuZXcgbmkodGhpcy5fc3RhZ2VJbmRleCArIDEpLFxyXG4gICAgICAgIC8vIHRoaXMub3duZXIuYWRkQ2hpbGQodGhpcy5fdWlMYXllci5hZGQodGhpcy5fdWlNYW5hZ2VyKSlcclxuXHJcbiAgICAgICAgVXNlckluZm8udGltZVBhc3NlZCA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uc3RlcFVzZWQgPSAwO1xyXG4gICAgICAgIHN3aXRjaCAoTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLmN1cnJlbnRMYW5ndWFnZSkge1xyXG4gICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5DTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoXyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8udGltZVBhc3NlZCArPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lTGFiZWwuc3RyaW5nID0gVXNlckluZm8udGltZVBhc3NlZCArIFwic1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcExhYmVsLnN0cmluZyA9IFVzZXJJbmZvLnN0ZXBVc2VkICsgXCLmraVcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoVXNlckluZm8udGltZVBhc3NlZCA+PSB0aGlzLm1heFBsYXlUaW1lICYmICF0aGlzLl9pc0dhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25UaW1lVXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLlZJOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShfID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBVc2VySW5mby50aW1lUGFzc2VkICs9IDFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVMYWJlbC5zdHJpbmcgPSBVc2VySW5mby50aW1lUGFzc2VkICsgXCJzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwTGFiZWwuc3RyaW5nID0gVXNlckluZm8uc3RlcFVzZWQgKyBcImLGsOG7m2NcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoVXNlckluZm8udGltZVBhc3NlZCA+PSB0aGlzLm1heFBsYXlUaW1lICYmICF0aGlzLl9pc0dhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25UaW1lVXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxKVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5FTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoXyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8udGltZVBhc3NlZCArPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lTGFiZWwuc3RyaW5nID0gVXNlckluZm8udGltZVBhc3NlZCArIFwic1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcExhYmVsLnN0cmluZyA9IFVzZXJJbmZvLnN0ZXBVc2VkICsgXCJzdGVwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFVzZXJJbmZvLnRpbWVQYXNzZWQgPj0gdGhpcy5tYXhQbGF5VGltZSAmJiAhdGhpcy5faXNHYW1lT3Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uVGltZVVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRpbWVVcCgpIHtcclxuICAgICAgICB0aGlzLl9pc0dhbWVPdmVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2Uuc2hvdyhcIkdhbWUvTG9zZURpYWxvZ1wiLCB7XHJcbiAgICAgICAgICAgIG9uQ29udGludWU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNoxqFpIGzhuqFpIGxldmVsIGhp4buHbiB04bqhaVxyXG4gICAgICAgICAgICAgICAgVXNlckluZm8udGltZVBhc3NlZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5zdGVwVXNlZCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0dhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTGV2ZWwoVXNlckluZm8uY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25RdWl0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0cuG7nyB24buBIG3DoG4gaMOsbmggY2jDrW5oXHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWluXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL29uQ29udGludWVCdXR0b25DbGljaygpIHtcclxuICAgIC8vICAgIHRoaXMucGFyYW1zLm9uQ29udGludWUgJiYgdGhpcy5wYXJhbXMub25Db250aW51ZSgpO1xyXG4gICAgLy8gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy99XHJcblxyXG4gICAgLy9vblF1aXRCdXR0b25DbGljaygpIHtcclxuICAgIC8vICAgIHRoaXMucGFyYW1zLm9uUXVpdCAmJiB0aGlzLnBhcmFtcy5vblF1aXQoKTtcclxuICAgIC8vICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vfVxyXG5cclxuXHJcbiAgICBvblRvdWNoQmVnYW4oZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0Ll9pc0dhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgIC8vIHZhciBuID0gdC50b3VjaFh0b1NjcmVlblgoZS52aWV3WClcclxuICAgICAgICAgICAgLy8gdmFyIGUgPSB0LnRvdWNoWXRvU2NyZWVuWShlLnZpZXdZKVxyXG4gICAgICAgICAgICAvLyB2YXIgaSA9IHQuZmluZFRpbGVCeVBvcyhuLCBlKVxyXG4gICAgICAgICAgICB2YXIgcCA9IGUuY3VycmVudFRvdWNoLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHAgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocCk7XHJcbiAgICAgICAgICAgIHZhciBpOkhleG9uVGlsZSA9IHQuZmluZFRpbGVCeVBvcyhwLngscC55KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChudWxsICE9IGkgJiYgMCAhPSBpLmdldF9hbmltYWwoKSkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChSLmF1ZGlvX2Rvd24sZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgLy8gam4ucGxheVNvdW5kKDApXHJcbiAgICAgICAgICAgICAgICB0Ll9waWNrZWRUaWxlID0gaVxyXG4gICAgICAgICAgICAgICAgdC5yZW1vdmVHcmlkRnJvbVRpbGUodC5fcGlja2VkVGlsZSlcclxuICAgICAgICAgICAgICAgIHQuX3BpY2tlZFRpbGUuY29ubmVjdChudWxsKVxyXG4gICAgICAgICAgICAgICAgaWYobnVsbCAhPSB0Ll9waWNrZWRUaWxlLnRhcmdldFRpbGUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5yZW1vdmVHcmlkRnJvbVRpbGUodC5fcGlja2VkVGlsZS50YXJnZXRUaWxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHQuX3BpY2tlZFRpbGUudGFyZ2V0VGlsZS5jb25uZWN0KG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdC5fcGlja2VkVGlsZS50YXJnZXRUaWxlLnNldF9pc0Nvbm5lY3RpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0Ll9waWNrZWRUaWxlLnNldF9pc0Nvbm5lY3RpbmcoITApXHJcbiAgICAgICAgICAgICAgICBpID0gdC5fcGlja2VkVGlsZS5nZXRIZWFkKCk7IFxyXG4gICAgICAgICAgICAgICAgZm9yICggO251bGwgIT0gaTspIGkuc2V0X2lzQ29ubmVjdGluZyghMCksXHJcbiAgICAgICAgICAgICAgICBpID0gaS5jb25uZWN0ZWRUaWxlO1xyXG4gICAgICAgICAgICAgICAgLy8gdC5fdWlNYW5hZ2VyLnNob3dGb2N1cyh0Ll9waWNrZWRUaWxlLmdldF9hbmltYWwoKSksXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dGb2N1cyh0Ll9waWNrZWRUaWxlLmdldF9hbmltYWwoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0Ll91aU1hbmFnZXIubW92ZUZvY3VzKG4sIGUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGb2N1cyhwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQ29tcGVsZXRlKClcclxuICAgICAgICAgICAgLy8gMSA9PSAgPyAxID09IHQuY2hlY2tGaWxsQWxsKCkgPyB0Ll91aU1hbmFnZXIuaGlkZUZpbGxBbGxQb3B1cCgpIDogdC5fdWlNYW5hZ2VyLnNob3dGaWxsQWxsUG9wdXAoKSA6IHQuX3VpTWFuYWdlci5oaWRlRmlsbEFsbFBvcHVwKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDb21wZWxldGUoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKCB0aGlzLmNoZWNrQ29ubmVjdGVkQWxsKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLmNoZWNrRmlsbEFsbCgpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyB0Ll91aU1hbmFnZXIuaGlkZUZpbGxBbGxQb3B1cCgpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gIHQuX3VpTWFuYWdlci5zaG93RmlsbEFsbFBvcHVwKClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vIF91aU1hbmFnZXIuaGlkZUZpbGxBbGxQb3B1cCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzVGlsZUNvbm5lY3RlZCh0LCBlKSB7XHJcbiAgICAgICAgdmFyIG4sIGkgPSB0Ll9yb3c7XHJcbiAgICAgICAgbiA9IHQuX2NvbCArIChpIDw9IHRoaXMuX3Jvd0NvdW50IC8gMiA/IDAgOiB0Ll9yb3cgLSAodGhpcy5fcm93Q291bnQgLyAyIHwgMCkpO1xyXG4gICAgICAgIHZhciBzLCBhID0gZS5fcm93O1xyXG4gICAgICAgIHJldHVybiBzID0gZS5fY29sICsgKGEgPD0gdGhpcy5fcm93Q291bnQgLyAyID8gMCA6IGUuX3JvdyAtICh0aGlzLl9yb3dDb3VudCAvIDIgfCAwKSksXHJcbiAgICAgICAgaSAtIDEgPT0gYSAmJiBuIC0gMSA9PSBzIHx8IGkgLSAxID09IGEgJiYgbiA9PSBzIHx8IGkgPT0gYSAmJiBuIC0gMSA9PSBzIHx8IGkgPT0gYSAmJiBuICsgMSA9PSBzIHx8IGkgKyAxID09IGEgJiYgbiA9PSBzIHx8IGkgKyAxID09IGEgJiYgbiArIDEgPT0gcyA/IHRydWU6ZmFsc2VcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Ub3VjaE1vdmVkKGUpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5faXNHYW1lT3Zlcikge1xyXG4gICAgICAgICAgICB2YXIgcCA9IGUuY3VycmVudFRvdWNoLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHAgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocCk7XHJcbiAgICAgICAgICAgIHZhciBpOkhleG9uVGlsZSA9IHQuZmluZFRpbGVCeVBvcyhwLngscC55KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChudWxsICE9IHQuX3BpY2tlZFRpbGUgJiYgbnVsbCAhPSBpKSBpZiAodC5pc1RpbGVDb25uZWN0ZWQodC5fcGlja2VkVGlsZSwgaSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICgwID09IGkuZ2V0X2FuaW1hbCgpKShudWxsID09IHQuX3BpY2tlZFRpbGUudGFyZ2V0VGlsZSB8fCBudWxsID09IHQuX3BpY2tlZFRpbGUucmV2ZXJzZUNvbm5lY3RlZFRpbGUpICYmICh0Ll9ncmlkTWFuYWdlci5zZXRTdGF0ZSh0Ll9waWNrZWRUaWxlLmdldF9yb3coKSwgdC5fcGlja2VkVGlsZS5nZXRfY29sKCksIGkuZ2V0X3JvdygpLCBpLmdldF9jb2woKSwgITApLCB0Ll9waWNrZWRUaWxlLmNvbm5lY3QoaSksIHQuX3BpY2tlZFRpbGUgPSBpLCB0Ll9waWNrZWRUaWxlLnNldF9pc0Nvbm5lY3RpbmcoITApKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkuZ2V0X2FuaW1hbCgpID09IHQuX3BpY2tlZFRpbGUuZ2V0X2FuaW1hbCgpKSBpZiAoZmFsc2UgPT0gaS5pc0NoYW5nYWJsZSAmJiAhIGkuZXF1YWxzKHQuX3BpY2tlZFRpbGUuZ2V0SGVhZCgpKSkgbnVsbCA9PSBpLnJldmVyc2VDb25uZWN0ZWRUaWxlICYmICh0Ll9ncmlkTWFuYWdlci5zZXRTdGF0ZSh0Ll9waWNrZWRUaWxlLmdldF9yb3coKSwgdC5fcGlja2VkVGlsZS5nZXRfY29sKCksIGkuZ2V0X3JvdygpLCBpLmdldF9jb2woKSwgITApLCB0Ll9waWNrZWRUaWxlLmNvbm5lY3QoaSksIHQuX3BpY2tlZFRpbGUgPSBpKTtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodC5fcGlja2VkVGlsZSA9IGksIGkgPSB0Ll9waWNrZWRUaWxlOyBudWxsICE9IGkgJiYgbnVsbCAhPSBpLmNvbm5lY3RlZFRpbGU7KSB0Ll9ncmlkTWFuYWdlci5zZXRTdGF0ZShpLmdldF9yb3coKSwgaS5nZXRfY29sKCksIGkuY29ubmVjdGVkVGlsZS5nZXRfcm93KCksIGkuY29ubmVjdGVkVGlsZS5nZXRfY29sKCksICExKSxcclxuICAgICAgICAgICAgICAgICAgICBpID0gaS5jb25uZWN0ZWRUaWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHQuX3BpY2tlZFRpbGUuY29ubmVjdChudWxsKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkuZ2V0X2FuaW1hbCgpID09IHQuX3BpY2tlZFRpbGUuZ2V0X2FuaW1hbCgpICYmICFpLmVxdWFscyh0Ll9waWNrZWRUaWxlKSAmJiBudWxsICE9IGkuY29ubmVjdGVkVGlsZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh0Ll9waWNrZWRUaWxlID0gaSwgaSA9IHQuX3BpY2tlZFRpbGU7IG51bGwgIT0gaSAmJiBudWxsICE9IGkuY29ubmVjdGVkVGlsZTspIHQuX2dyaWRNYW5hZ2VyLnNldFN0YXRlKGkuZ2V0X3JvdygpLCBpLmdldF9jb2woKSwgaS5jb25uZWN0ZWRUaWxlLmdldF9yb3coKSwgaS5jb25uZWN0ZWRUaWxlLmdldF9jb2woKSwgITEpLFxyXG4gICAgICAgICAgICAgICAgaSA9IGkuY29ubmVjdGVkVGlsZTtcclxuICAgICAgICAgICAgICAgIHQuX3BpY2tlZFRpbGUuY29ubmVjdChudWxsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzKHApXHJcbiAgICAgICAgICAgIC8vIHQuX3VpTWFuYWdlci5tb3ZlRm9jdXMobiwgZSksXHJcbiAgICAgICAgICAgIC8vdGhpcy5jaGVja0NvbXBlbGV0ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hFbmRlZCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG4gICAgICAgIHZhciBlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0Ll9pc0dhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgIGlmIChudWxsICE9IHQuX3BpY2tlZFRpbGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuID0gdC5fcGlja2VkVGlsZS5nZXRIZWFkKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKG51bGwgIT0gdC5fcGlja2VkVGlsZS5hbmltYWxTcHJpdGUgJiYgbnVsbCAhPSBuICYmIG51bGwgIT0gbi5hbmltYWxTcHJpdGUgJiYgKGUgPSB0cnVlLCB0Ll9waWNrZWRUaWxlLmFuaW1hbFNwcml0ZS5jb25uZWN0ZWQoKSwgbi5hbmltYWxTcHJpdGUuY29ubmVjdGVkKCkpOyBudWxsICE9IG47KSBuLnNldF9pc0Nvbm5lY3RpbmcoZmFsc2UpLFxyXG4gICAgICAgICAgICAgICAgbiA9IG4uY29ubmVjdGVkVGlsZTtcclxuICAgICAgICAgICAgICAgIHQuX21vdmVDb3VudCsrXHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5zdGVwVXNlZCArKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0Ll9waWNrZWRUaWxlID0gbnVsbFxyXG4gICAgICAgICAgICAvLyB0Ll91aU1hbmFnZXIuaGlkZUZvY3VzKCksXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUZvY3VzKCk7XHJcbiAgICAgICAgICAgIGlmKCB0LmNoZWNrQ29ubmVjdGVkQWxsKCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHQuY2hlY2tGaWxsQWxsKCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5faXNHYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5kYW5jZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChMYW5ndWFnZU1hbmFnZXIuaW5zdGFuY2UuY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLkNOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZShcIuW/hemhu+Whq+a7oeaJgOacieagvOWtkFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLlZJOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZShcIlThuqV0IGPhuqMgY8OhYyDDtCBwaOG6o2kgxJHGsOG7o2MgxJFp4buBbiDEkeG6p3kgxJHhu6dcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5FTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCJBbGwgYm94ZXMgbXVzdCBiZSBmaWxsZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyBfdWlNYW5hZ2VyLmhpZGVGaWxsQWxsUG9wdXAoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGU9PSB0cnVlICYmICF0Ll9pc0dhbWVPdmVyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBqbi5wbGF5U291bmQoMSlcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoUi5hdWRpb19saW5rLGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAxID09IGUgJiYgMCA9PSB0Ll9pc0dhbWVPdmVyICYmIGpuLnBsYXlTb3VuZCgxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93Rm9jdXMoYW5pbWFsKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFuaW1hbCk7XHJcbiAgICAgICAgdGhpcy5mb2N1c05vZGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuZm9jdXNOb2RlLnpJbmRleCA9IDEwMDtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZS5jb2xvciA9IFIuY29sb3JzW2FuaW1hbF0uY2xvbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlRm9jdXMocClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZS5wb3NpdGlvbiA9IHA7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUZvY3VzKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZvY3VzTm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGRhbmNlQWxsKCkge1xyXG4gICAgICAgIC8vIGpuLnBsYXlTb3VuZCgzKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFIuYXVkaW9fd2luLGZhbHNlKTtcclxuICAgICAgICBmb3IgKHZhciB0ID0gMCxlID0gdGhpcy5fdGlsZUxpc3Q7IHQgPCBlLmxlbmd0aDspIHtcclxuICAgICAgICAgICAgdmFyIG4gPSBlW3RdOyArK3Q7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbi5sZW5ndGg7KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IG5baV07ICsraSxcclxuICAgICAgICAgICAgICAgIG51bGwgIT0gcy5hbmltYWxTcHJpdGUgJiYgcy5hbmltYWxTcHJpdGUubG9vcEp1bXAoMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICBcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLnNob3dXaW5EaWFsb2csMSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93V2luRGlhbG9nKClcclxuICAgIHtcclxuICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93KFwiR2FtZS9XaW5EaWFsb2dcIilcclxuICAgIH1cclxuXHJcbiAgICBjbGlja19wYXVzZSgpXHJcbiAgICB7XHJcbiAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2Uuc2hvdyhcIkdhbWUvUGF1c2VEaWFsb2dcIilcclxuICAgIH1cclxuXHJcbiAgICBjbGlja19zaGFyZSgpXHJcbiAgICB7XHJcbiAgICAgICAgUGxhdGZvcm0uc2hhcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWd1cmUoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5fZmlndXJlTGF5ZXIgPSBuZXcgZyxcclxuICAgICAgICB0aGlzLl9maWd1cmVMaXN0ID0gW11cclxuICAgICAgICAvLyB0aGlzLm93bmVyLmFkZENoaWxkKHRoaXMuX2ZpZ3VyZUxheWVyKTtcclxuICAgICAgICBmb3IgKHZhciB0ID0gW10sIGUgPSAwOyAxMCA+IGU7KSBlKyssIHQucHVzaChudWxsKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgZSA9IDAsIG4gPSB0aGlzLl9sZXZlbERhdGEuZmlndXJlOyBlIDwgbi5sZW5ndGg7KSB7XHJcbiAgICAgICAgICAgIHZhciBpID0gbltlXTtcclxuICAgICAgICAgICAgKytlO1xyXG4gICAgICAgICAgICB2YXIgczpIZXhvblRpbGUgPSB0aGlzLl90aWxlTGlzdFtpWzBdXVtpWzFdXVxyXG4gICAgICAgICAgICB2YXIgYSA9IHMuZ2V0X2JvcmRlclBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzLmFuaW1hbFNwcml0ZSA9IG5ldyAkbihpWzJdLCBhLmdldF94KCksIGEuZ2V0X3koKSlcclxuICAgICAgICAgICAgLy8gdGhpcy5vd25lci5hZGRDaGlsZCgobmV3IGcpLmFkZChzLmFuaW1hbFNwcml0ZSkpXHJcbiAgICAgICAgICAgIGxldCB0eXBlID0gaVsyXTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShSLmFuaW1hbFByZWZhYnNbdHlwZS0xXSlcclxuICAgICAgICAgICAgcy5hbmltYWxTcHJpdGUgPSBub2RlLmdldENvbXBvbmVudChBbmltYWwpO1xyXG4gICAgICAgICAgICAvLyBzLmFuaW1hbFNwcml0ZS50eXBlID0gdHlwZTtcclxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihhLngsYS55KTtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnRpbGVMYXllcjtcclxuICAgICAgICAgICAgbm9kZS56SW5kZXggPSAxMTA7XHJcblxyXG4gICAgICAgICAgICAvLyBhbmltYWwudHlwZSA9IHR5cGU7IFxyXG4gICAgICAgICAgICAvLyBhbmltYWwudHggPSBhLnggOyBcclxuXHJcbiAgICAgICAgICAgIHMuc2V0X2FuaW1hbChpWzJdKVxyXG4gICAgICAgICAgICBzLmlzQ2hhbmdhYmxlID0gZmFsc2UgXHJcbiAgICAgICAgICAgIHRoaXMuX2ZpZ3VyZUxpc3QucHVzaChzKVxyXG4gICAgICAgICAgICBudWxsID09IHRbaVsyXV0gPyB0W2lbMl1dID0gcyA6IChzLnRhcmdldFRpbGUgPSB0W2lbMl1dLCB0W2lbMl1dLnRhcmdldFRpbGUgPSBzKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBlcmZlY3RNb3ZlQ291bnQgPSB0aGlzLl9maWd1cmVMaXN0Lmxlbmd0aCAvIDIgfCAwXHJcbiAgICB9XHJcblxyXG4gICAgZmluZFRpbGVCeVBvcyh4LCB5KSB7XHJcbiAgICAgICAgdmFyIG4gPSBudWxsXHJcbiAgICAgICAgdmFyIGkgPSAxZTZcclxuICAgICAgICB2YXIgcyA9IGNjLnYyKHgsIHkpXHJcbiAgICAgICAgdmFyIHIgPSB0aGlzLl90aWxlTGlzdFxyXG4gICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgci5sZW5ndGg7KythKSB7XHJcbiAgICAgICAgICAgIHZhciBvID0gclthXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgXyA9IDA7IF8gPCBvLmxlbmd0aDsrK18pIHtcclxuICAgICAgICAgICAgICAgIHZhciBsID0gb1tfXVxyXG4gICAgICAgICAgICAgICAgdmFyIHRwID0gb1tfXS5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgdmFyIGggPSBzLnN1Yih0cCkubWFnKClcclxuICAgICAgICAgICAgICAgIGlmIChoIDwgNTAgJiYgaCA8IGkgKXtcclxuICAgICAgICAgICAgICAgICAgICBpID0gaDsgXHJcbiAgICAgICAgICAgICAgICAgICAgbiA9IGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyA0MCA+IGggJiYgaSA+IGggJiYgKGkgPSBoLCBuID0gbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gblxyXG4gICAgfVxyXG4gICAgcmVtb3ZlR3JpZEZyb21UaWxlKHQpIHtcclxuICAgICAgICBmb3IgKDsgbnVsbCAhPSB0ICYmIG51bGwgIT0gdC5jb25uZWN0ZWRUaWxlOykgdGhpcy5fZ3JpZE1hbmFnZXIuc2V0U3RhdGUodC5nZXRfcm93KCksIHQuZ2V0X2NvbCgpLCB0LmNvbm5lY3RlZFRpbGUuZ2V0X3JvdygpLCB0LmNvbm5lY3RlZFRpbGUuZ2V0X2NvbCgpLCAhMSksIHQgPSB0LmNvbm5lY3RlZFRpbGVcclxuICAgIH1cclxuICAgICBfMHgzZjhjKF8weDFhMmIpIHtcclxuICAgICAgICB2YXIgXzB4NGEyYiA9IFsnY3VycmVudExldmVsJywgJ2dldF9hbmltYWwnLCAnbGVuZ3RoJywgJ3RvU3RyaW5nJywgJ2NoYXJBdCcsICdjaGFyQ29kZUF0J107XHJcblxyXG4gICAgICAgIF8weDFhMmIgPSBfMHgxYTJiIC0gMHgwO1xyXG4gICAgICAgIHZhciBfMHg1ZjJhID0gXzB4NGEyYltfMHgxYTJiIGFzIG51bWJlcl07XHJcbiAgICAgICAgcmV0dXJuIF8weDVmMmE7XHJcbiAgICB9XHJcbiAgICBjaGVja0ZpbGxBbGwoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIF8weDJlMWYgPSAweDU7XHJcbiAgICAgICAgdmFyIF8weDdkNGEgPSBVc2VySW5mb1t0aGlzLl8weDNmOGMoJzB4MCcpXTtcclxuICAgICAgICB2YXIgXzB4OWIzYyA9IF8weDdkNGFbdGhpcy5fMHgzZjhjKCcweDMnKV0oKTtcclxuICAgICAgICB2YXIgXzB4NWYyYSA9IF8weDliM2NbdGhpcy5fMHgzZjhjKCcweDQnKV0oMHgwKTtcclxuICAgICAgICB2YXIgXzB4OGU3ZCA9IF8weDVmMmFbdGhpcy5fMHgzZjhjKCcweDUnKV0oMHgwKTtcclxuICAgICAgICB2YXIgXzB4MWM0ZSA9IF8weDhlN2QgJSAweGE7XHJcbiAgICAgICAgdmFyIF8weDZiOWYgPSAoXzB4MWM0ZSArIDB4MSkgKiAweDIgLSAweDM7XHJcblxyXG4gICAgICAgIC8vIFRoaXMgY29kZSBpcyB0aGUgcmVhc29uIHdoeSBwbGF5ZXIgY2FudCBnbyB0byBuZXh0IGxldmVsIHdoZW4gcGxheWVyIGluIGxldmVsIDVcclxuICAgICAgICAvL2lmIChfMHg3ZDRhID09PSBfMHgyZTFmIHx8IF8weDZiOWYgPT09IDB4Nykge1xyXG4gICAgICAgIC8vICAgIHJldHVybiAhMHgxO1xyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAodmFyIHQgPSAwLCBlID0gdGhpcy5fdGlsZUxpc3Q7IHQgPCBlW3RoaXMuXzB4M2Y4YygnMHgyJyldOykge1xyXG4gICAgICAgICAgICB2YXIgbiA9IGVbdF07XHJcbiAgICAgICAgICAgICsrdDtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuW3RoaXMuXzB4M2Y4YygnMHgyJyldOykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBuW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCsraSwgMCA9PSBzW3RoaXMuXzB4M2Y4YygnMHgxJyldKCkpIHJldHVybiAhMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAhMFxyXG4gICAgfVxyXG4gICAgY2hlY2tDb25uZWN0ZWRBbGwoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgdCA9IDAsIGUgPSB0aGlzLl90aWxlTGlzdDsgdCA8IGUubGVuZ3RoOykge1xyXG4gICAgICAgICAgICB2YXIgbiA9IGVbdF07XHJcbiAgICAgICAgICAgICsrdDtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmxlbmd0aDspIHtcclxuICAgICAgICAgICAgICAgIHZhciBzID0gbltpXTtcclxuICAgICAgICAgICAgICAgIGlmICgrK2ksIG51bGwgIT0gcy50YXJnZXRUaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBzLmdldEhlYWQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgciA9IHMuZ2V0VGFpbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgwID09IHMudGFyZ2V0VGlsZS5lcXVhbHMoYSkgJiYgMCA9PSBzLnRhcmdldFRpbGUuZXF1YWxzKHIpKSByZXR1cm4gITFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gITBcclxuICAgIH1cclxufSJdfQ==