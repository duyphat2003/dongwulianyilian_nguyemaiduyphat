
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcaGV4LWxpbmVzLWdhbWVcXEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUEwQjtBQUMxQix5Q0FBb0M7QUFDcEMsNkNBQXdDO0FBQ3hDLGlGQUF1RjtBQUN2RixnQ0FBbUM7QUFDbkMsbUNBQThCO0FBQzlCLCtFQUEwRTtBQUMxRSx3REFBbUQ7QUFDbkQsaUZBQXlFO0FBQ3pFLHNEQUFtRTtBQUU3RCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXloQkM7UUFwaEJHLGlCQUFXLEdBQVcsS0FBSyxDQUFDO1FBQzVCLGdCQUFVLEdBQVUsQ0FBQyxDQUFDO1FBRXRCLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUVkLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBSzdCLGVBQVMsR0FBVyxJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFFaEMsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFFekIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFFekIsa0JBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsaUJBQVcsR0FBRyxFQUFFLENBQUE7UUFFaEIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBaUVyQixpQkFBVyxHQUFXLENB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QyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckYsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQSxLQUFLLENBQUE7SUFDckssQ0FBQztJQUdELCtCQUFZLEdBQVosVUFBYSxDQUFDO1FBRVYsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFD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IH0gZnJvbSBcIi4vUmVzXCI7XG5pbXBvcnQgSGV4b25UaWxlIGZyb20gXCIuL0hleG9uVGlsZVwiO1xuaW1wb3J0IEdyaWRNYW5hZ2VyIGZyb20gXCIuL0dyaWRNYW5hZ2VyXCI7XG5pbXBvcnQgeyBJbnB1dCwgSW5wdXRTeXN0ZW0gfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3BsdWdpbl9ib29zdHMvbWlzYy9JbnB1dFN5c3RlbVwiO1xuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vSW5mb1wiO1xuaW1wb3J0IEFuaW1hbCBmcm9tIFwiLi9BbmltYWxcIjtcbmltcG9ydCBWaWV3TWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3BsdWdpbl9ib29zdHMvdWkvVmlld01hbmFnZXJcIjtcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL1BsYXRmb3JtXCI7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy91aS9Ub2FzdE1hbmFnZXJcIjtcbmltcG9ydCBMYW5ndWFnZU1hbmFnZXIsIHsgTGFuZ3VhZ2VNb2RlIH0gZnJvbSBcIi4uL0xhbmd1YWdlTWFuYWdlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50XG57XG4gICAgX2xldmVsRGF0YTphbnk7XG4gICAgX3RpbGVMaXN0OmFueTtcblxuICAgIF9pc0dhbWVPdmVyOmJvb2xlYW4gPSBmYWxzZTsgXG4gICAgX21vdmVDb3VudDpudW1iZXIgPSAwO1xuXG4gICAgX3BsYXlUaW1lID0gMDtcbiAgICBfY29sQ291bnQgPSA2O1xuICAgIF9yb3dDb3VudCA9IDc7XG5cbiAgICBfcGlja2VkVGlsZTpIZXhvblRpbGUgPSBudWxsO1xuICAgIFxuICAgIHN0YXRpYyBpbnN0YW5jZTpMaW5lR2FtZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0aWxlTGF5ZXI6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGV2ZWxMYWJlbDpjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGltZUxhYmVsOmNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBzdGVwTGFiZWw6Y2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZm9jdXNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsZXZlbFRleHRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBzdGVwVGV4dExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRpbWVUZXh0TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgaGVscFRleHRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcbiAgICBjaF9Gb250U2l6ZTogbnVtYmVyID0gMjU7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxuICAgIHZpX0ZvbnRTaXplOiBudW1iZXIgPSAxNjtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyIH0pXG4gICAgZW5nX0ZvbnRTaXplOiBudW1iZXIgPSAyMDtcbiAgICBfZmlndXJlTGlzdCA9IFtdXG5cbiAgICBwZXJmZWN0TW92ZUNvdW50ID0gMDtcblxuICAgIF9ncmlkTWFuYWdlcjogR3JpZE1hbmFnZXI7XG5cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBzd2l0Y2ggKExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50TGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLkNOOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX2xhbmcoXCLlhbPljaHvvJpcIixcbiAgICAgICAgICAgICAgICAgICAgXCLmraXmlbDvvJpcIixcbiAgICAgICAgICAgICAgICAgICAgXCLml7bpl7TvvJpcIixcbiAgICAgICAgICAgICAgICAgICAgXCLor7fmsYLluK7liqlcIixcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX0ZvbnRTaXplKHRoaXMuY2hfRm9udFNpemUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuVkk6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfbGFuZyhcIkPDoWMgY+G6pXAgxJHhu5k6XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiU+G7kSBixrDhu5tjOlwiLFxuICAgICAgICAgICAgICAgICAgICBcInRo4budaSBnaWFuOlwiLFxuICAgICAgICAgICAgICAgICAgICBcIlnDqnUgY+G6p3UgdHLhu6MgZ2nDunBcIixcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX0ZvbnRTaXplKHRoaXMudmlfRm9udFNpemUpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5FTjpcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9sYW5nKFwiTGV2ZWxzOlwiLFxuICAgICAgICAgICAgICAgICAgICBcIk51bWJlciBvZiBzdGVwczpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aW1lOlwiLFxuICAgICAgICAgICAgICAgICAgICBcIlJlcXVlc3RpbmcgSGVscFwiLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfRm9udFNpemUodGhpcy5lbmdfRm9udFNpemUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzZXRfbGFiZWxfbGFuZyhcbiAgICAgICAgbGV2ZWxUZXh0TGFiZWxTdHJpbmc6IHN0cmluZyxcbiAgICAgICAgc3RlcFRleHRMYWJlbFN0cmluZzogc3RyaW5nLFxuICAgICAgICB0aW1lVGV4dExhYmVsU3RyaW5nOiBzdHJpbmcsXG4gICAgICAgIGhlbHBUZXh0TGFiZWxTdHJpbmc6IHN0cmluZyxcbiAgICApIHtcbiAgICAgICAgdGhpcy5sZXZlbFRleHRMYWJlbC5zdHJpbmcgPSBsZXZlbFRleHRMYWJlbFN0cmluZztcbiAgICAgICAgdGhpcy5zdGVwVGV4dExhYmVsLnN0cmluZyA9IHN0ZXBUZXh0TGFiZWxTdHJpbmc7XG4gICAgICAgIHRoaXMudGltZVRleHRMYWJlbC5zdHJpbmcgPSB0aW1lVGV4dExhYmVsU3RyaW5nO1xuICAgICAgICB0aGlzLmhlbHBUZXh0TGFiZWwuc3RyaW5nID0gaGVscFRleHRMYWJlbFN0cmluZztcbiAgICB9XG5cbiAgICBzZXRfbGFiZWxfRm9udFNpemUoZm9udFNpemU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmxldmVsVGV4dExhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgICAgIHRoaXMuc3RlcFRleHRMYWJlbC5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgICAgICB0aGlzLnRpbWVUZXh0TGFiZWwuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICAgICAgdGhpcy5oZWxwVGV4dExhYmVsLmZvbnRTaXplID0gZm9udFNpemUgLSA1O1xuICAgIH1cblxuICAgIGdldF9pc0dhbWVPdmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNHYW1lT3ZlclxuICAgIH1cbiAgICBnZXRfbWluQ29sKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGV2ZWxEYXRhLm1pbmNvbFxuICAgIH1cbiAgICBnZXRfbW92ZUNvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW92ZUNvdW50XG4gICAgfVxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcbiAgICBtYXhQbGF5VGltZTogbnVtYmVyID0gMDsgICAvLyBMaW1pdCB0aW1lIHRoYXQgcGxheWVyIG11c3QgcGFzcyBiZWZvcmUgZW5kXG4gICAgbG9hZExldmVsKGxldmVsSW5kZXg6IG51bWJlcikge1xuICAgICAgICAvL3Rlc3QgOlxuICAgICAgICBsZXZlbEluZGV4ID0gTWF0aC5taW4obGV2ZWxJbmRleCwgUi5sZXZlbEpzb24uanNvbi5sZXZlbHMubGVuZ3RoIC0gMSk7XG4gICAgICAgIHRoaXMuX2xldmVsRGF0YSA9IFIubGV2ZWxKc29uLmpzb24ubGV2ZWxzW2xldmVsSW5kZXhdO1xuICAgICAgICB0aGlzLmxldmVsTGFiZWwuc3RyaW5nID0gbGV2ZWxJbmRleCArIFwiXCI7XG5cbiAgICAgICAgdGhpcy5tYXhQbGF5VGltZSA9IDEwICogKGxldmVsSW5kZXggPT0gMCA/IDEgOiBsZXZlbEluZGV4KTsgICAvLyBMaW1pdCB0aW1lID0gMTAgKiBsZXZlbFxuICAgICAgICBpZiAobGV2ZWxJbmRleCA9PSAxKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLm9wZW5HdWlkZSwwLjEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuR3VpZGUoKVxuICAgIHtcbiAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2Uuc2hvdyhcIkdhbWUvT3Blbkd1aWRlXCIpXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgIExpbmVHYW1lLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5sb2FkTGV2ZWwoVXNlckluZm8uY3VycmVudExldmVsKVxuXG4gICAgICAgIHRoaXMuaGlkZUZvY3VzKCk7XG4gICAgICAgIHRoaXMuX3RpbGVMaXN0ID0gW11cbiAgICAgICAgdGhpcy5fcm93Q291bnQgPSB0aGlzLl9sZXZlbERhdGEuc2l6ZVxuICAgICAgICB0aGlzLl9jb2xDb3VudCAtPSAxO1xuXG4gICAgICAgIGZvciAodmFyIGUgPSAwLCBuID0gdGhpcy5fcm93Q291bnQ7IG4gPiBlOykge1xuICAgICAgICAgICAgdmFyIGksIHMgPSBlKysgXG4gICAgICAgICAgICBsZXQgdG1wbGlzdCA9IFtdO1xuICAgICAgICAgICAgaSA9IHMgPD0gdGhpcy5fcm93Q291bnQgLyAyID8gdGhpcy5fbGV2ZWxEYXRhLm1pbmNvbCArIHMgOiB0aGlzLl9sZXZlbERhdGEubWluY29sIC0gMSArIHRoaXMuX3Jvd0NvdW50IC0gcztcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSAwOyBpID4gcjspIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHIgKytcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKFIuVGlsZVByZWZhYilcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IG5vZGUuZ2V0Q29tcG9uZW50KEhleG9uVGlsZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnRpbGVMYXllcjtcbiAgICAgICAgICAgICAgICBub2RlLnpJbmRleCA9IHRoaXMuX3Jvd0NvdW50IC0gcztcbiAgICAgICAgICAgICAgICAvLyB0aGlzLl90aWxlTGF5ZXIuYWRkQ2hpbGQoKG5ldyBnKS5hZGQobm9kZSkpXG4gICAgICAgICAgICAgICAgdGlsZS5zZXRfcm93KHMpXG4gICAgICAgICAgICAgICAgdGlsZS5zZXRfY29sKG8pXG5cbiAgICAgICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gICAgICAgICAgICAgICAgbGV0IHNoYWRvd05vZGUgPSBjYy5pbnN0YW50aWF0ZShSLlRpbGVTaGFkb3cpXG4gICAgICAgICAgICAgICAgbGV0IHNoYWRvdyA9IHNoYWRvd05vZGUuZ2V0Q29tcG9uZW50KEhleG9uVGlsZSk7XG4gICAgICAgICAgICAgICAgc2hhZG93LnNldF9yb3cocylcbiAgICAgICAgICAgICAgICBzaGFkb3cuc2V0X2NvbChvKVxuICAgICAgICAgICAgICAgIHNoYWRvd05vZGUueSAtPSAzO1xuICAgICAgICAgICAgICAgIHNoYWRvd05vZGUucGFyZW50ID0gdGhpcy50aWxlTGF5ZXI7XG4gICAgICAgICAgICAgICAgc2hhZG93Tm9kZS56SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXG4gICAgICAgICAgICAgICAgdG1wbGlzdC5wdXNoKHRpbGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl90aWxlTGlzdC5wdXNoKHRtcGxpc3QpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2dyaWRNYW5hZ2VyID0gdGhpcy50aWxlTGF5ZXIuYWRkQ29tcG9uZW50KEdyaWRNYW5hZ2VyKVxuICAgICAgICB0aGlzLl9ncmlkTWFuYWdlci5pbml0KHRoaXMuX2xldmVsRGF0YS5taW5jb2wpO1xuICAgICAgICAvLyB0aGlzLl9saW5lTGF5ZXIgPSAobmV3IGcpLmFkZCh0aGlzLl9ncmlkTWFuYWdlciksXG4gICAgICAgIC8vIHRoaXMub3duZXIuYWRkQ2hpbGQodGhpcy5fbGluZUxheWVyKSxcbiAgICAgICAgdGhpcy5zZXRGaWd1cmUoKVxuXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KElucHV0U3lzdGVtKTtcblxuXG4gICAgICAgIC8vIHRoaXMuX3VpTGF5ZXIgPSBuZXcgZyxcbiAgICAgICAgLy8gdGhpcy5fdWlNYW5hZ2VyID0gbmV3IG5pKHRoaXMuX3N0YWdlSW5kZXggKyAxKSxcbiAgICAgICAgLy8gdGhpcy5vd25lci5hZGRDaGlsZCh0aGlzLl91aUxheWVyLmFkZCh0aGlzLl91aU1hbmFnZXIpKVxuXG4gICAgICAgIFVzZXJJbmZvLnRpbWVQYXNzZWQgPSAwO1xuICAgICAgICBVc2VySW5mby5zdGVwVXNlZCA9IDA7XG4gICAgICAgIHN3aXRjaCAoTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLmN1cnJlbnRMYW5ndWFnZSkge1xuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuQ046XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShfID0+IHtcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8udGltZVBhc3NlZCArPSAxXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9IFVzZXJJbmZvLnRpbWVQYXNzZWQgKyBcInNcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwTGFiZWwuc3RyaW5nID0gVXNlckluZm8uc3RlcFVzZWQgKyBcIuatpVwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoVXNlckluZm8udGltZVBhc3NlZCA+PSB0aGlzLm1heFBsYXlUaW1lICYmICF0aGlzLl9pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uVGltZVVwKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuVkk6XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShfID0+IHtcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8udGltZVBhc3NlZCArPSAxXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9IFVzZXJJbmZvLnRpbWVQYXNzZWQgKyBcInNcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwTGFiZWwuc3RyaW5nID0gVXNlckluZm8uc3RlcFVzZWQgKyBcImLGsOG7m2NcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFVzZXJJbmZvLnRpbWVQYXNzZWQgPj0gdGhpcy5tYXhQbGF5VGltZSAmJiAhdGhpcy5faXNHYW1lT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblRpbWVVcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMSlcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuRU46XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShfID0+IHtcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8udGltZVBhc3NlZCArPSAxXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9IFVzZXJJbmZvLnRpbWVQYXNzZWQgKyBcInNcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwTGFiZWwuc3RyaW5nID0gVXNlckluZm8uc3RlcFVzZWQgKyBcInN0ZXBcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFVzZXJJbmZvLnRpbWVQYXNzZWQgPj0gdGhpcy5tYXhQbGF5VGltZSAmJiAhdGhpcy5faXNHYW1lT3Zlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblRpbWVVcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVGltZVVwKCkge1xuICAgICAgICB0aGlzLl9pc0dhbWVPdmVyID0gdHJ1ZTtcblxuICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93KFwiR2FtZS9Mb3NlRGlhbG9nXCIsIHtcbiAgICAgICAgICAgIG9uQ29udGludWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjaMahaSBs4bqhaSBsZXZlbCBoaeG7h24gdOG6oWlcbiAgICAgICAgICAgICAgICBVc2VySW5mby50aW1lUGFzc2VkID0gMDtcbiAgICAgICAgICAgICAgICBVc2VySW5mby5zdGVwVXNlZCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZExldmVsKFVzZXJJbmZvLmN1cnJlbnRMZXZlbCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25RdWl0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdHLhu58gduG7gSBtw6BuIGjDrG5oIGNow61uaFxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW5cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy9vbkNvbnRpbnVlQnV0dG9uQ2xpY2soKSB7XG4gICAgLy8gICAgdGhpcy5wYXJhbXMub25Db250aW51ZSAmJiB0aGlzLnBhcmFtcy5vbkNvbnRpbnVlKCk7XG4gICAgLy8gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIC8vfVxuXG4gICAgLy9vblF1aXRCdXR0b25DbGljaygpIHtcbiAgICAvLyAgICB0aGlzLnBhcmFtcy5vblF1aXQgJiYgdGhpcy5wYXJhbXMub25RdWl0KCk7XG4gICAgLy8gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIC8vfVxuXG5cbiAgICBvblRvdWNoQmVnYW4oZSlcbiAgICB7XG4gICAgICAgIGxldCB0ID0gdGhpcztcbiAgICAgICAgaWYgKCF0Ll9pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICAvLyB2YXIgbiA9IHQudG91Y2hYdG9TY3JlZW5YKGUudmlld1gpXG4gICAgICAgICAgICAvLyB2YXIgZSA9IHQudG91Y2hZdG9TY3JlZW5ZKGUudmlld1kpXG4gICAgICAgICAgICAvLyB2YXIgaSA9IHQuZmluZFRpbGVCeVBvcyhuLCBlKVxuICAgICAgICAgICAgdmFyIHAgPSBlLmN1cnJlbnRUb3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgcCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwKTtcbiAgICAgICAgICAgIHZhciBpOkhleG9uVGlsZSA9IHQuZmluZFRpbGVCeVBvcyhwLngscC55KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG51bGwgIT0gaSAmJiAwICE9IGkuZ2V0X2FuaW1hbCgpKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChSLmF1ZGlvX2Rvd24sZmFsc2UpO1xuICAgICAgICAgICAgICAgIC8vIGpuLnBsYXlTb3VuZCgwKVxuICAgICAgICAgICAgICAgIHQuX3BpY2tlZFRpbGUgPSBpXG4gICAgICAgICAgICAgICAgdC5yZW1vdmVHcmlkRnJvbVRpbGUodC5fcGlja2VkVGlsZSlcbiAgICAgICAgICAgICAgICB0Ll9waWNrZWRUaWxlLmNvbm5lY3QobnVsbClcbiAgICAgICAgICAgICAgICBpZihudWxsICE9IHQuX3BpY2tlZFRpbGUudGFyZ2V0VGlsZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHQucmVtb3ZlR3JpZEZyb21UaWxlKHQuX3BpY2tlZFRpbGUudGFyZ2V0VGlsZSlcbiAgICAgICAgICAgICAgICAgICAgdC5fcGlja2VkVGlsZS50YXJnZXRUaWxlLmNvbm5lY3QobnVsbClcbiAgICAgICAgICAgICAgICAgICAgdC5fcGlja2VkVGlsZS50YXJnZXRUaWxlLnNldF9pc0Nvbm5lY3RpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHQuX3BpY2tlZFRpbGUuc2V0X2lzQ29ubmVjdGluZyghMClcbiAgICAgICAgICAgICAgICBpID0gdC5fcGlja2VkVGlsZS5nZXRIZWFkKCk7IFxuICAgICAgICAgICAgICAgIGZvciAoIDtudWxsICE9IGk7KSBpLnNldF9pc0Nvbm5lY3RpbmcoITApLFxuICAgICAgICAgICAgICAgIGkgPSBpLmNvbm5lY3RlZFRpbGU7XG4gICAgICAgICAgICAgICAgLy8gdC5fdWlNYW5hZ2VyLnNob3dGb2N1cyh0Ll9waWNrZWRUaWxlLmdldF9hbmltYWwoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Rm9jdXModC5fcGlja2VkVGlsZS5nZXRfYW5pbWFsKCkpO1xuICAgICAgICAgICAgICAgIC8vIHQuX3VpTWFuYWdlci5tb3ZlRm9jdXMobiwgZSlcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVGb2N1cyhwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hlY2tDb21wZWxldGUoKVxuICAgICAgICAgICAgLy8gMSA9PSAgPyAxID09IHQuY2hlY2tGaWxsQWxsKCkgPyB0Ll91aU1hbmFnZXIuaGlkZUZpbGxBbGxQb3B1cCgpIDogdC5fdWlNYW5hZ2VyLnNob3dGaWxsQWxsUG9wdXAoKSA6IHQuX3VpTWFuYWdlci5oaWRlRmlsbEFsbFBvcHVwKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQ29tcGVsZXRlKClcbiAgICB7XG4gICAgICAgIGlmKCB0aGlzLmNoZWNrQ29ubmVjdGVkQWxsKCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuY2hlY2tGaWxsQWxsKCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gdC5fdWlNYW5hZ2VyLmhpZGVGaWxsQWxsUG9wdXAoKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgLy8gIHQuX3VpTWFuYWdlci5zaG93RmlsbEFsbFBvcHVwKClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvLyBfdWlNYW5hZ2VyLmhpZGVGaWxsQWxsUG9wdXAoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNUaWxlQ29ubmVjdGVkKHQsIGUpIHtcbiAgICAgICAgdmFyIG4sIGkgPSB0Ll9yb3c7XG4gICAgICAgIG4gPSB0Ll9jb2wgKyAoaSA8PSB0aGlzLl9yb3dDb3VudCAvIDIgPyAwIDogdC5fcm93IC0gKHRoaXMuX3Jvd0NvdW50IC8gMiB8IDApKTtcbiAgICAgICAgdmFyIHMsIGEgPSBlLl9yb3c7XG4gICAgICAgIHJldHVybiBzID0gZS5fY29sICsgKGEgPD0gdGhpcy5fcm93Q291bnQgLyAyID8gMCA6IGUuX3JvdyAtICh0aGlzLl9yb3dDb3VudCAvIDIgfCAwKSksXG4gICAgICAgIGkgLSAxID09IGEgJiYgbiAtIDEgPT0gcyB8fCBpIC0gMSA9PSBhICYmIG4gPT0gcyB8fCBpID09IGEgJiYgbiAtIDEgPT0gcyB8fCBpID09IGEgJiYgbiArIDEgPT0gcyB8fCBpICsgMSA9PSBhICYmIG4gPT0gcyB8fCBpICsgMSA9PSBhICYmIG4gKyAxID09IHMgPyB0cnVlOmZhbHNlXG4gICAgfVxuXG5cbiAgICBvblRvdWNoTW92ZWQoZSlcbiAgICB7XG4gICAgICAgIGxldCB0ID0gdGhpcztcbiAgICAgICAgaWYgKCF0Ll9pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICB2YXIgcCA9IGUuY3VycmVudFRvdWNoLmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICBwID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHApO1xuICAgICAgICAgICAgdmFyIGk6SGV4b25UaWxlID0gdC5maW5kVGlsZUJ5UG9zKHAueCxwLnkpO1xuXG4gICAgICAgICAgICBpZiAobnVsbCAhPSB0Ll9waWNrZWRUaWxlICYmIG51bGwgIT0gaSkgaWYgKHQuaXNUaWxlQ29ubmVjdGVkKHQuX3BpY2tlZFRpbGUsIGkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKDAgPT0gaS5nZXRfYW5pbWFsKCkpKG51bGwgPT0gdC5fcGlja2VkVGlsZS50YXJnZXRUaWxlIHx8IG51bGwgPT0gdC5fcGlja2VkVGlsZS5yZXZlcnNlQ29ubmVjdGVkVGlsZSkgJiYgKHQuX2dyaWRNYW5hZ2VyLnNldFN0YXRlKHQuX3BpY2tlZFRpbGUuZ2V0X3JvdygpLCB0Ll9waWNrZWRUaWxlLmdldF9jb2woKSwgaS5nZXRfcm93KCksIGkuZ2V0X2NvbCgpLCAhMCksIHQuX3BpY2tlZFRpbGUuY29ubmVjdChpKSwgdC5fcGlja2VkVGlsZSA9IGksIHQuX3BpY2tlZFRpbGUuc2V0X2lzQ29ubmVjdGluZyghMCkpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkuZ2V0X2FuaW1hbCgpID09IHQuX3BpY2tlZFRpbGUuZ2V0X2FuaW1hbCgpKSBpZiAoZmFsc2UgPT0gaS5pc0NoYW5nYWJsZSAmJiAhIGkuZXF1YWxzKHQuX3BpY2tlZFRpbGUuZ2V0SGVhZCgpKSkgbnVsbCA9PSBpLnJldmVyc2VDb25uZWN0ZWRUaWxlICYmICh0Ll9ncmlkTWFuYWdlci5zZXRTdGF0ZSh0Ll9waWNrZWRUaWxlLmdldF9yb3coKSwgdC5fcGlja2VkVGlsZS5nZXRfY29sKCksIGkuZ2V0X3JvdygpLCBpLmdldF9jb2woKSwgITApLCB0Ll9waWNrZWRUaWxlLmNvbm5lY3QoaSksIHQuX3BpY2tlZFRpbGUgPSBpKTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh0Ll9waWNrZWRUaWxlID0gaSwgaSA9IHQuX3BpY2tlZFRpbGU7IG51bGwgIT0gaSAmJiBudWxsICE9IGkuY29ubmVjdGVkVGlsZTspIHQuX2dyaWRNYW5hZ2VyLnNldFN0YXRlKGkuZ2V0X3JvdygpLCBpLmdldF9jb2woKSwgaS5jb25uZWN0ZWRUaWxlLmdldF9yb3coKSwgaS5jb25uZWN0ZWRUaWxlLmdldF9jb2woKSwgITEpLFxuICAgICAgICAgICAgICAgICAgICBpID0gaS5jb25uZWN0ZWRUaWxlO1xuICAgICAgICAgICAgICAgICAgICB0Ll9waWNrZWRUaWxlLmNvbm5lY3QobnVsbClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkuZ2V0X2FuaW1hbCgpID09IHQuX3BpY2tlZFRpbGUuZ2V0X2FuaW1hbCgpICYmICFpLmVxdWFscyh0Ll9waWNrZWRUaWxlKSAmJiBudWxsICE9IGkuY29ubmVjdGVkVGlsZSkge1xuICAgICAgICAgICAgICAgIGZvciAodC5fcGlja2VkVGlsZSA9IGksIGkgPSB0Ll9waWNrZWRUaWxlOyBudWxsICE9IGkgJiYgbnVsbCAhPSBpLmNvbm5lY3RlZFRpbGU7KSB0Ll9ncmlkTWFuYWdlci5zZXRTdGF0ZShpLmdldF9yb3coKSwgaS5nZXRfY29sKCksIGkuY29ubmVjdGVkVGlsZS5nZXRfcm93KCksIGkuY29ubmVjdGVkVGlsZS5nZXRfY29sKCksICExKSxcbiAgICAgICAgICAgICAgICBpID0gaS5jb25uZWN0ZWRUaWxlO1xuICAgICAgICAgICAgICAgIHQuX3BpY2tlZFRpbGUuY29ubmVjdChudWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tb3ZlRm9jdXMocClcbiAgICAgICAgICAgIC8vIHQuX3VpTWFuYWdlci5tb3ZlRm9jdXMobiwgZSksXG4gICAgICAgICAgICAvL3RoaXMuY2hlY2tDb21wZWxldGUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZGVkKClcbiAgICB7XG4gICAgICAgIGxldCB0ID0gdGhpcztcbiAgICAgICAgdmFyIGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0Ll9pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICBpZiAobnVsbCAhPSB0Ll9waWNrZWRUaWxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSB0Ll9waWNrZWRUaWxlLmdldEhlYWQoKTtcbiAgICAgICAgICAgICAgICBmb3IgKG51bGwgIT0gdC5fcGlja2VkVGlsZS5hbmltYWxTcHJpdGUgJiYgbnVsbCAhPSBuICYmIG51bGwgIT0gbi5hbmltYWxTcHJpdGUgJiYgKGUgPSB0cnVlLCB0Ll9waWNrZWRUaWxlLmFuaW1hbFNwcml0ZS5jb25uZWN0ZWQoKSwgbi5hbmltYWxTcHJpdGUuY29ubmVjdGVkKCkpOyBudWxsICE9IG47KSBuLnNldF9pc0Nvbm5lY3RpbmcoZmFsc2UpLFxuICAgICAgICAgICAgICAgIG4gPSBuLmNvbm5lY3RlZFRpbGU7XG4gICAgICAgICAgICAgICAgdC5fbW92ZUNvdW50KytcbiAgICAgICAgICAgICAgICBVc2VySW5mby5zdGVwVXNlZCArKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHQuX3BpY2tlZFRpbGUgPSBudWxsXG4gICAgICAgICAgICAvLyB0Ll91aU1hbmFnZXIuaGlkZUZvY3VzKCksXG4gICAgICAgICAgICB0aGlzLmhpZGVGb2N1cygpO1xuICAgICAgICAgICAgaWYoIHQuY2hlY2tDb25uZWN0ZWRBbGwoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0LmNoZWNrRmlsbEFsbCgpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdC5faXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHQuZGFuY2VBbGwoKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLmN1cnJlbnRMYW5ndWFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuQ046XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZShcIuW/hemhu+Whq+a7oeaJgOacieagvOWtkFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuVkk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZShcIlThuqV0IGPhuqMgY8OhYyDDtCBwaOG6o2kgxJHGsOG7o2MgxJFp4buBbiDEkeG6p3kgxJHhu6dcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLkVOOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCJBbGwgYm94ZXMgbXVzdCBiZSBmaWxsZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIC8vIF91aU1hbmFnZXIuaGlkZUZpbGxBbGxQb3B1cCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihlPT0gdHJ1ZSAmJiAhdC5faXNHYW1lT3ZlcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBqbi5wbGF5U291bmQoMSlcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFIuYXVkaW9fbGluayxmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAxID09IGUgJiYgMCA9PSB0Ll9pc0dhbWVPdmVyICYmIGpuLnBsYXlTb3VuZCgxKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0ZvY3VzKGFuaW1hbClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFuaW1hbCk7XG4gICAgICAgIHRoaXMuZm9jdXNOb2RlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgdGhpcy5mb2N1c05vZGUuekluZGV4ID0gMTAwO1xuICAgICAgICB0aGlzLmZvY3VzTm9kZS5jb2xvciA9IFIuY29sb3JzW2FuaW1hbF0uY2xvbmUoKTtcbiAgICB9XG5cbiAgICBtb3ZlRm9jdXMocClcbiAgICB7XG4gICAgICAgIHRoaXMuZm9jdXNOb2RlLnBvc2l0aW9uID0gcDtcbiAgICB9XG5cbiAgICBoaWRlRm9jdXMoKVxuICAgIHtcbiAgICAgICAgdGhpcy5mb2N1c05vZGUuYWN0aXZlID0gZmFsc2VcbiAgICB9XG5cbiAgICBkYW5jZUFsbCgpIHtcbiAgICAgICAgLy8gam4ucGxheVNvdW5kKDMpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KFIuYXVkaW9fd2luLGZhbHNlKTtcbiAgICAgICAgZm9yICh2YXIgdCA9IDAsZSA9IHRoaXMuX3RpbGVMaXN0OyB0IDwgZS5sZW5ndGg7KSB7XG4gICAgICAgICAgICB2YXIgbiA9IGVbdF07ICsrdDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbi5sZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSBuW2ldOyArK2ksXG4gICAgICAgICAgICAgICAgbnVsbCAhPSBzLmFuaW1hbFNwcml0ZSAmJiBzLmFuaW1hbFNwcml0ZS5sb29wSnVtcCgxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICBcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5zaG93V2luRGlhbG9nLDEpXG4gICAgfVxuXG4gICAgc2hvd1dpbkRpYWxvZygpXG4gICAge1xuICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93KFwiR2FtZS9XaW5EaWFsb2dcIilcbiAgICB9XG5cbiAgICBjbGlja19wYXVzZSgpXG4gICAge1xuICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93KFwiR2FtZS9QYXVzZURpYWxvZ1wiKVxuICAgIH1cblxuICAgIGNsaWNrX3NoYXJlKClcbiAgICB7XG4gICAgICAgIFBsYXRmb3JtLnNoYXJlKCk7XG4gICAgfVxuXG4gICAgc2V0RmlndXJlKCkge1xuICAgICAgICAvLyB0aGlzLl9maWd1cmVMYXllciA9IG5ldyBnLFxuICAgICAgICB0aGlzLl9maWd1cmVMaXN0ID0gW11cbiAgICAgICAgLy8gdGhpcy5vd25lci5hZGRDaGlsZCh0aGlzLl9maWd1cmVMYXllcik7XG4gICAgICAgIGZvciAodmFyIHQgPSBbXSwgZSA9IDA7IDEwID4gZTspIGUrKywgdC5wdXNoKG51bGwpO1xuXG4gICAgICAgIGZvciAodmFyIGUgPSAwLCBuID0gdGhpcy5fbGV2ZWxEYXRhLmZpZ3VyZTsgZSA8IG4ubGVuZ3RoOykge1xuICAgICAgICAgICAgdmFyIGkgPSBuW2VdO1xuICAgICAgICAgICAgKytlO1xuICAgICAgICAgICAgdmFyIHM6SGV4b25UaWxlID0gdGhpcy5fdGlsZUxpc3RbaVswXV1baVsxXV1cbiAgICAgICAgICAgIHZhciBhID0gcy5nZXRfYm9yZGVyUG9zaXRpb24oKTtcblxuICAgICAgICAgICAgLy8gcy5hbmltYWxTcHJpdGUgPSBuZXcgJG4oaVsyXSwgYS5nZXRfeCgpLCBhLmdldF95KCkpXG4gICAgICAgICAgICAvLyB0aGlzLm93bmVyLmFkZENoaWxkKChuZXcgZykuYWRkKHMuYW5pbWFsU3ByaXRlKSlcbiAgICAgICAgICAgIGxldCB0eXBlID0gaVsyXTtcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUoUi5hbmltYWxQcmVmYWJzW3R5cGUtMV0pXG4gICAgICAgICAgICBzLmFuaW1hbFNwcml0ZSA9IG5vZGUuZ2V0Q29tcG9uZW50KEFuaW1hbCk7XG4gICAgICAgICAgICAvLyBzLmFuaW1hbFNwcml0ZS50eXBlID0gdHlwZTtcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oYS54LGEueSk7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMudGlsZUxheWVyO1xuICAgICAgICAgICAgbm9kZS56SW5kZXggPSAxMTA7XG5cbiAgICAgICAgICAgIC8vIGFuaW1hbC50eXBlID0gdHlwZTsgXG4gICAgICAgICAgICAvLyBhbmltYWwudHggPSBhLnggOyBcblxuICAgICAgICAgICAgcy5zZXRfYW5pbWFsKGlbMl0pXG4gICAgICAgICAgICBzLmlzQ2hhbmdhYmxlID0gZmFsc2UgXG4gICAgICAgICAgICB0aGlzLl9maWd1cmVMaXN0LnB1c2gocylcbiAgICAgICAgICAgIG51bGwgPT0gdFtpWzJdXSA/IHRbaVsyXV0gPSBzIDogKHMudGFyZ2V0VGlsZSA9IHRbaVsyXV0sIHRbaVsyXV0udGFyZ2V0VGlsZSA9IHMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZXJmZWN0TW92ZUNvdW50ID0gdGhpcy5fZmlndXJlTGlzdC5sZW5ndGggLyAyIHwgMFxuICAgIH1cblxuICAgIGZpbmRUaWxlQnlQb3MoeCwgeSkge1xuICAgICAgICB2YXIgbiA9IG51bGxcbiAgICAgICAgdmFyIGkgPSAxZTZcbiAgICAgICAgdmFyIHMgPSBjYy52Mih4LCB5KVxuICAgICAgICB2YXIgciA9IHRoaXMuX3RpbGVMaXN0XG4gICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgci5sZW5ndGg7KythKSB7XG4gICAgICAgICAgICB2YXIgbyA9IHJbYV07XG4gICAgICAgICAgICBmb3IgKHZhciBfID0gMDsgXyA8IG8ubGVuZ3RoOysrXykge1xuICAgICAgICAgICAgICAgIHZhciBsID0gb1tfXVxuICAgICAgICAgICAgICAgIHZhciB0cCA9IG9bX10ubm9kZS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IHMuc3ViKHRwKS5tYWcoKVxuICAgICAgICAgICAgICAgIGlmIChoIDwgNTAgJiYgaCA8IGkgKXtcbiAgICAgICAgICAgICAgICAgICAgaSA9IGg7IFxuICAgICAgICAgICAgICAgICAgICBuID0gbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gNDAgPiBoICYmIGkgPiBoICYmIChpID0gaCwgbiA9IGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5cbiAgICB9XG4gICAgcmVtb3ZlR3JpZEZyb21UaWxlKHQpIHtcbiAgICAgICAgZm9yICg7IG51bGwgIT0gdCAmJiBudWxsICE9IHQuY29ubmVjdGVkVGlsZTspIHRoaXMuX2dyaWRNYW5hZ2VyLnNldFN0YXRlKHQuZ2V0X3JvdygpLCB0LmdldF9jb2woKSwgdC5jb25uZWN0ZWRUaWxlLmdldF9yb3coKSwgdC5jb25uZWN0ZWRUaWxlLmdldF9jb2woKSwgITEpLCB0ID0gdC5jb25uZWN0ZWRUaWxlXG4gICAgfVxuICAgICBfMHgzZjhjKF8weDFhMmIpIHtcbiAgICAgICAgdmFyIF8weDRhMmIgPSBbJ2N1cnJlbnRMZXZlbCcsICdnZXRfYW5pbWFsJywgJ2xlbmd0aCcsICd0b1N0cmluZycsICdjaGFyQXQnLCAnY2hhckNvZGVBdCddO1xuXG4gICAgICAgIF8weDFhMmIgPSBfMHgxYTJiIC0gMHgwO1xuICAgICAgICB2YXIgXzB4NWYyYSA9IF8weDRhMmJbXzB4MWEyYiBhcyBudW1iZXJdO1xuICAgICAgICByZXR1cm4gXzB4NWYyYTtcbiAgICB9XG4gICAgY2hlY2tGaWxsQWxsKCkge1xuICAgICAgICBcbiAgICAgICAgdmFyIF8weDJlMWYgPSAweDU7XG4gICAgICAgIHZhciBfMHg3ZDRhID0gVXNlckluZm9bdGhpcy5fMHgzZjhjKCcweDAnKV07XG4gICAgICAgIHZhciBfMHg5YjNjID0gXzB4N2Q0YVt0aGlzLl8weDNmOGMoJzB4MycpXSgpO1xuICAgICAgICB2YXIgXzB4NWYyYSA9IF8weDliM2NbdGhpcy5fMHgzZjhjKCcweDQnKV0oMHgwKTtcbiAgICAgICAgdmFyIF8weDhlN2QgPSBfMHg1ZjJhW3RoaXMuXzB4M2Y4YygnMHg1JyldKDB4MCk7XG4gICAgICAgIHZhciBfMHgxYzRlID0gXzB4OGU3ZCAlIDB4YTtcbiAgICAgICAgdmFyIF8weDZiOWYgPSAoXzB4MWM0ZSArIDB4MSkgKiAweDIgLSAweDM7XG5cbiAgICAgICAgLy8gVGhpcyBjb2RlIGlzIHRoZSByZWFzb24gd2h5IHBsYXllciBjYW50IGdvIHRvIG5leHQgbGV2ZWwgd2hlbiBwbGF5ZXIgaW4gbGV2ZWwgNVxuICAgICAgICAvL2lmIChfMHg3ZDRhID09PSBfMHgyZTFmIHx8IF8weDZiOWYgPT09IDB4Nykge1xuICAgICAgICAvLyAgICByZXR1cm4gITB4MTtcbiAgICAgICAgLy99XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciB0ID0gMCwgZSA9IHRoaXMuX3RpbGVMaXN0OyB0IDwgZVt0aGlzLl8weDNmOGMoJzB4MicpXTspIHtcbiAgICAgICAgICAgIHZhciBuID0gZVt0XTtcbiAgICAgICAgICAgICsrdDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgblt0aGlzLl8weDNmOGMoJzB4MicpXTspIHtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IG5baV07XG4gICAgICAgICAgICAgICAgaWYgKCsraSwgMCA9PSBzW3RoaXMuXzB4M2Y4YygnMHgxJyldKCkpIHJldHVybiAhMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhMFxuICAgIH1cbiAgICBjaGVja0Nvbm5lY3RlZEFsbCgpIHtcbiAgICAgICAgZm9yICh2YXIgdCA9IDAsIGUgPSB0aGlzLl90aWxlTGlzdDsgdCA8IGUubGVuZ3RoOykge1xuICAgICAgICAgICAgdmFyIG4gPSBlW3RdO1xuICAgICAgICAgICAgKyt0O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IG5baV07XG4gICAgICAgICAgICAgICAgaWYgKCsraSwgbnVsbCAhPSBzLnRhcmdldFRpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBzLmdldEhlYWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBzLmdldFRhaWwoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gcy50YXJnZXRUaWxlLmVxdWFscyhhKSAmJiAwID09IHMudGFyZ2V0VGlsZS5lcXVhbHMocikpIHJldHVybiAhMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITBcbiAgICB9XG59Il19