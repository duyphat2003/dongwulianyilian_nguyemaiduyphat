
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/hex-lines-game/HexonTile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64d50rBFZhG5qLba7sOg6x9', 'HexonTile');
// Game/Scripts/hex-lines-game/HexonTile.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Consts_1 = require("./Consts");
var Game_1 = require("./Game");
var Res_1 = require("./Res");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TileType;
(function (TileType) {
    TileType[TileType["Empty"] = 0] = "Empty";
    TileType[TileType["Type1"] = 1] = "Type1";
    TileType[TileType["Type2"] = 2] = "Type2";
    TileType[TileType["Type3"] = 3] = "Type3";
    TileType[TileType["Type4"] = 4] = "Type4";
    TileType[TileType["Type5"] = 5] = "Type5";
    TileType[TileType["Type6"] = 6] = "Type6";
    TileType[TileType["Type7"] = 7] = "Type7";
})(TileType || (TileType = {}));
var HexonTile = /** @class */ (function (_super) {
    __extends(HexonTile, _super);
    function HexonTile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._col = 0;
        _this._row = 0;
        _this._animal = 0;
        _this.isChangable = true;
        _this._isConnecting = false;
        _this.connectedTile = null;
        _this.reverseConnectedTile = null;
        _this.targetTile = null;
        _this._sprite = null;
        _this._baseSprite = null;
        _this.animalSprite = null;
        _this._tileType = 0;
        return _this;
        // update (dt) {}
    }
    HexonTile.prototype.get_col = function () {
        return this._col;
    };
    HexonTile.prototype.set_col = function (t) {
        return this._col = t,
            t = this._col - (this._row <= Game_1.default.instance._rowCount / 2 ? Game_1.default.instance.get_minCol() + this._row : Game_1.default.instance.get_minCol() - 1 + Game_1.default.instance._rowCount - this._row) / 2 + .5,
            this._baseSprite.node.x = (Consts_1.default.CenterX + t * Consts_1.default.ColSize),
            this._col;
    };
    HexonTile.prototype.get_row = function () {
        return this._row;
    };
    HexonTile.prototype.set_row = function (t) {
        this._row = t;
        this._baseSprite.node.y = (Consts_1.default.CenterY + (this._row - (Game_1.default.instance._rowCount / 2 | 0)) * Consts_1.default.RowSize);
        return this._row;
    };
    HexonTile.prototype.get_borderPosition = function () {
        return this._baseSprite.node.position;
        // return cc.v2(this._baseSprite.node.x._value, this._baseSprite.node.y._value)
    };
    HexonTile.prototype.get_isConnecting = function () {
        return this._isConnecting;
    };
    HexonTile.prototype.set_isConnecting = function (t) {
        return this._isConnecting = t, this.set_tileType(this._tileType), this._isConnecting;
    };
    HexonTile.prototype.get_animal = function () {
        return this._animal;
    };
    HexonTile.prototype.set_animal = function (t) {
        switch (this._animal = t, t) {
            case 1:
                this.set_tileType(TileType.Type1);
                break;
            case 2:
                this.set_tileType(TileType.Type2);
                break;
            case 3:
                this.set_tileType(TileType.Type3);
                break;
            case 4:
                this.set_tileType(TileType.Type4);
                break;
            case 5:
                this.set_tileType(TileType.Type5);
                break;
            case 6:
                this.set_tileType(TileType.Type6);
                break;
            case 7:
                this.set_tileType(TileType.Type7);
                break;
            default:
                this.set_tileType(TileType.Empty);
        }
        return this._animal;
    };
    HexonTile.prototype.getTileTexture = function (t, e, n) {
        if (t == 0) {
            return Res_1.R.tileTextures[0];
        }
        else {
            // return e ? R.tileTextures[t] : 1 == n ? R.tileTextures[14 + t] : R.tileTextures[7 + t]
            var idx = 0;
            if (e) {
                idx = t;
            }
            else {
                if (n) {
                    idx = 14 + t;
                }
                else {
                    idx = 7 + t;
                }
            }
            return Res_1.R.tileTextures[idx];
        }
    };
    HexonTile.prototype.set_tileType = function (t) {
        this._tileType = t;
        // if (null == this._baseSprite )
        // {
        //     // this._baseSprite = new Y
        //     // this._baseSprite.setAnchor(42, 42)
        //     // this.owner.add(this._baseSprite)
        // }
        // if (null == this._sprite )
        // {
        //     // this._sprite = new J(jn.Instance.getTileTexture(this.get_animal(), !1, !1))
        //     // this.owner.addChild((new g).add(this._sprite))
        // } 
        if (this.isChangable && this.get_isConnecting()) {
            this._baseSprite.spriteFrame = this.getTileTexture(this.get_animal(), true, false);
        }
        else {
            var tailTile = this.getTail();
            var sp = void 0;
            if (!this.isChangable && null != this.reverseConnectedTile) {
                sp = this.getTileTexture(this.get_animal(), false, true);
            }
            else {
                if (null == tailTile || tailTile.isChangable) {
                    sp = this.getTileTexture(this.get_animal(), false, false);
                }
                else {
                    sp = this.getTileTexture(this.get_animal(), false, true);
                }
            }
            this._baseSprite.spriteFrame = sp;
        }
        return this._tileType;
    };
    HexonTile.prototype.onAdded = function () {
        this.set_tileType(TileType.Empty);
    };
    HexonTile.prototype.connect = function (t) {
        null == t ? null != this.connectedTile && (1 == this.connectedTile.isChangable && this.connectedTile.set_animal(0), this.connectedTile.connect(null), this.connectedTile = this.connectedTile.reverseConnectedTile = null) : (this.connectedTile = t, t.set_animal(this.get_animal()), t.reverseConnectedTile = this);
    };
    HexonTile.prototype.getTail = function () {
        for (var t = this.connectedTile, e = null; null != t;)
            e = t, t = t.connectedTile;
        return e;
    };
    HexonTile.prototype.getHead = function () {
        for (var t = this.reverseConnectedTile, e = null; null != t;)
            e = t, t = t.reverseConnectedTile;
        return e;
    };
    HexonTile.prototype.equals = function (t) {
        return null == t ? !1 : this.get_row() == t.get_row() && this.get_col() == t.get_col();
    };
    HexonTile.prototype.start = function () {
    };
    __decorate([
        property({ type: cc.Sprite, visible: true, displayName: "Animal Sprite" })
    ], HexonTile.prototype, "_sprite", void 0);
    __decorate([
        property({ type: cc.Sprite, visible: true, displayName: "Base Sprite" })
    ], HexonTile.prototype, "_baseSprite", void 0);
    HexonTile = __decorate([
        ccclass
    ], HexonTile);
    return HexonTile;
}(cc.Component));
exports.default = HexonTile;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcaGV4LWxpbmVzLWdhbWVcXEhleG9uVGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLCtCQUE4QjtBQUM5Qiw2QkFBMEI7QUFFcEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsSUFBSyxRQVVKO0FBVkQsV0FBSyxRQUFRO0lBRVQseUNBQUssQ0FBQTtJQUNMLHlDQUFLLENBQUE7SUFDTCx5Q0FBSyxDQUFBO0lBQ0wseUNBQUssQ0FBQTtJQUNMLHlDQUFLLENBQUE7SUFDTCx5Q0FBSyxDQUFBO0lBQ0wseUNBQUssQ0FBQTtJQUNMLHlDQUFLLENBQUE7QUFDVCxDQUFDLEVBVkksUUFBUSxLQUFSLFFBQVEsUUFVWjtBQUlEO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBa0tDO1FBaktHLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsVUFBSSxHQUFVLENBQUMsQ0FBQztRQUNoQixhQUFPLEdBQVUsQ0FBQyxDQUFDO1FBQ25CLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLG1CQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLDBCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUdsQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBR3BCLGVBQVMsR0FBRyxDQUFDLENBQUM7O1FBNklkLGlCQUFpQjtJQUNyQixDQUFDO0lBNUlHLDJCQUFPLEdBQVA7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUE7SUFDcEIsQ0FBQztJQUNELDJCQUFPLEdBQVAsVUFBUSxDQUFDO1FBQ0wsT0FBTyxJQUFJLENB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QUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxDQUFDO2tEQUMvQztJQWZGLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FrSzdCO0lBQUQsZ0JBQUM7Q0FsS0QsQUFrS0MsQ0FsS3NDLEVBQUUsQ0FBQyxTQUFTLEdBa0tsRDtrQkFsS29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uc3RzIGZyb20gXCIuL0NvbnN0c1wiO1xyXG5pbXBvcnQgTGluZUdhbWUgZnJvbSBcIi4vR2FtZVwiO1xyXG5pbXBvcnQgeyBSIH0gZnJvbSBcIi4vUmVzXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmVudW0gVGlsZVR5cGVcclxue1xyXG4gICAgRW1wdHksXHJcbiAgICBUeXBlMSxcclxuICAgIFR5cGUyLFxyXG4gICAgVHlwZTMsXHJcbiAgICBUeXBlNCxcclxuICAgIFR5cGU1LFxyXG4gICAgVHlwZTYsXHJcbiAgICBUeXBlN1xyXG59XHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGV4b25UaWxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIF9jb2w6IG51bWJlciA9IDA7XHJcbiAgICBfcm93Om51bWJlciA9IDA7XHJcbiAgICBfYW5pbWFsOm51bWJlciA9IDA7XHJcbiAgICBpc0NoYW5nYWJsZSA9IHRydWU7XHJcbiAgICBfaXNDb25uZWN0aW5nID0gZmFsc2U7XHJcbiAgICBcclxuICAgIGNvbm5lY3RlZFRpbGUgPSBudWxsO1xyXG4gICAgcmV2ZXJzZUNvbm5lY3RlZFRpbGUgPSBudWxsO1xyXG4gICAgdGFyZ2V0VGlsZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLlNwcml0ZSx2aXNpYmxlOnRydWUsZGlzcGxheU5hbWU6XCJBbmltYWwgU3ByaXRlXCJ9KVxyXG4gICAgX3Nwcml0ZTpjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5TcHJpdGUsdmlzaWJsZTp0cnVlLGRpc3BsYXlOYW1lOlwiQmFzZSBTcHJpdGVcIn0pXHJcbiAgICBfYmFzZVNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgYW5pbWFsU3ByaXRlID0gbnVsbDtcclxuXHJcblxyXG4gICAgX3RpbGVUeXBlID0gMDtcclxuXHJcbiAgICBnZXRfY29sKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xcclxuICAgIH1cclxuICAgIHNldF9jb2wodCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb2wgPSB0LFxyXG4gICAgICAgICAgICB0ID0gdGhpcy5fY29sIC0gKHRoaXMuX3JvdyA8PSBMaW5lR2FtZS5pbnN0YW5jZS5fcm93Q291bnQgLyAyID8gTGluZUdhbWUuaW5zdGFuY2UuZ2V0X21pbkNvbCgpICsgdGhpcy5fcm93OiBMaW5lR2FtZS5pbnN0YW5jZS5nZXRfbWluQ29sKCkgLSAxICsgTGluZUdhbWUuaW5zdGFuY2UuX3Jvd0NvdW50IC0gdGhpcy5fcm93KSAvIDIgKyAuNSxcclxuICAgICAgICAgICAgdGhpcy5fYmFzZVNwcml0ZS5ub2RlLnggPSAoQ29uc3RzLkNlbnRlclggKyB0ICogQ29uc3RzLkNvbFNpemUpLFxyXG4gICAgICAgICAgICB0aGlzLl9jb2xcclxuICAgIH1cclxuICAgIGdldF9yb3coKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvd1xyXG4gICAgfVxyXG4gICAgc2V0X3Jvdyh0KSB7XHJcbiAgICAgICAgdGhpcy5fcm93ID0gdFxyXG4gICAgICAgIHRoaXMuX2Jhc2VTcHJpdGUubm9kZS55ID0gKENvbnN0cy5DZW50ZXJZICsgKHRoaXMuX3JvdyAtIChMaW5lR2FtZS5pbnN0YW5jZS5fcm93Q291bnQgLyAyIHwgMCkpICogQ29uc3RzLlJvd1NpemUpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvd1xyXG4gICAgfVxyXG4gICAgZ2V0X2JvcmRlclBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9iYXNlU3ByaXRlLm5vZGUucG9zaXRpb25cclxuICAgICAgICAvLyByZXR1cm4gY2MudjIodGhpcy5fYmFzZVNwcml0ZS5ub2RlLnguX3ZhbHVlLCB0aGlzLl9iYXNlU3ByaXRlLm5vZGUueS5fdmFsdWUpXHJcbiAgICB9XHJcbiAgICBnZXRfaXNDb25uZWN0aW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Nvbm5lY3RpbmdcclxuICAgIH1cclxuICAgIHNldF9pc0Nvbm5lY3RpbmcodCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Nvbm5lY3RpbmcgPSB0LCB0aGlzLnNldF90aWxlVHlwZSh0aGlzLl90aWxlVHlwZSksIHRoaXMuX2lzQ29ubmVjdGluZ1xyXG4gICAgfVxyXG4gICAgZ2V0X2FuaW1hbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWFsXHJcbiAgICB9XHJcbiAgICBzZXRfYW5pbWFsKHQpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2FuaW1hbCA9IHQsIHQpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfdGlsZVR5cGUoVGlsZVR5cGUuVHlwZTEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X3RpbGVUeXBlKFRpbGVUeXBlLlR5cGUyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF90aWxlVHlwZShUaWxlVHlwZS5UeXBlMyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfdGlsZVR5cGUoVGlsZVR5cGUuVHlwZTQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X3RpbGVUeXBlKFRpbGVUeXBlLlR5cGU1KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF90aWxlVHlwZShUaWxlVHlwZS5UeXBlNik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfdGlsZVR5cGUoVGlsZVR5cGUuVHlwZTcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF90aWxlVHlwZShUaWxlVHlwZS5FbXB0eSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuaW1hbFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRUaWxlVGV4dHVyZSh0LCBlLCBuKSB7XHJcbiAgICAgICAgaWYodCA9PSAwIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBSLnRpbGVUZXh0dXJlc1swXVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gZSA/IFIudGlsZVRleHR1cmVzW3RdIDogMSA9PSBuID8gUi50aWxlVGV4dHVyZXNbMTQgKyB0XSA6IFIudGlsZVRleHR1cmVzWzcgKyB0XVxyXG4gICAgICAgICAgICBsZXQgaWR4ID0gMFxyXG4gICAgICAgICAgICBpZihlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZHggPSB0XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaWYgKG4pe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkeCA9IDE0ICt0IFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWR4ID0gNyArIHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFIudGlsZVRleHR1cmVzW2lkeF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRfdGlsZVR5cGUodDpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl90aWxlVHlwZSA9IHRcclxuICAgICAgICAvLyBpZiAobnVsbCA9PSB0aGlzLl9iYXNlU3ByaXRlIClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuX2Jhc2VTcHJpdGUgPSBuZXcgWVxyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLl9iYXNlU3ByaXRlLnNldEFuY2hvcig0MiwgNDIpXHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMub3duZXIuYWRkKHRoaXMuX2Jhc2VTcHJpdGUpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChudWxsID09IHRoaXMuX3Nwcml0ZSApXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLl9zcHJpdGUgPSBuZXcgSihqbi5JbnN0YW5jZS5nZXRUaWxlVGV4dHVyZSh0aGlzLmdldF9hbmltYWwoKSwgITEsICExKSlcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5vd25lci5hZGRDaGlsZCgobmV3IGcpLmFkZCh0aGlzLl9zcHJpdGUpKVxyXG4gICAgICAgIC8vIH0gXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDaGFuZ2FibGUgJiYgdGhpcy5nZXRfaXNDb25uZWN0aW5nKCkgKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmdldFRpbGVUZXh0dXJlKHRoaXMuZ2V0X2FuaW1hbCgpLHRydWUsIGZhbHNlKSBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IHRhaWxUaWxlID0gdGhpcy5nZXRUYWlsKClcclxuICAgICAgICAgICAgbGV0IHNwIFxyXG4gICAgICAgICAgICBpZiAoICF0aGlzLmlzQ2hhbmdhYmxlICYmIG51bGwgIT0gdGhpcy5yZXZlcnNlQ29ubmVjdGVkVGlsZSApIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzcCA9IHRoaXMuZ2V0VGlsZVRleHR1cmUodGhpcy5nZXRfYW5pbWFsKCksIGZhbHNlLCB0cnVlKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmKCBudWxsID09IHRhaWxUaWxlIHx8IHRhaWxUaWxlLmlzQ2hhbmdhYmxlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwID0gdGhpcy5nZXRUaWxlVGV4dHVyZSh0aGlzLmdldF9hbmltYWwoKSwgZmFsc2UsIGZhbHNlKSBcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNwID0gdGhpcy5nZXRUaWxlVGV4dHVyZSh0aGlzLmdldF9hbmltYWwoKSwgZmFsc2UsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fYmFzZVNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl90aWxlVHlwZTtcclxuICAgIH1cclxuICAgIG9uQWRkZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRfdGlsZVR5cGUoVGlsZVR5cGUuRW1wdHkpXHJcbiAgICB9XHJcbiAgICBjb25uZWN0KHQpIHtcclxuICAgICAgICBudWxsID09IHQgPyBudWxsICE9IHRoaXMuY29ubmVjdGVkVGlsZSAmJiAoMSA9PSB0aGlzLmNvbm5lY3RlZFRpbGUuaXNDaGFuZ2FibGUgJiYgdGhpcy5jb25uZWN0ZWRUaWxlLnNldF9hbmltYWwoMCksIHRoaXMuY29ubmVjdGVkVGlsZS5jb25uZWN0KG51bGwpLCB0aGlzLmNvbm5lY3RlZFRpbGUgPSB0aGlzLmNvbm5lY3RlZFRpbGUucmV2ZXJzZUNvbm5lY3RlZFRpbGUgPSBudWxsKSA6ICh0aGlzLmNvbm5lY3RlZFRpbGUgPSB0LCB0LnNldF9hbmltYWwodGhpcy5nZXRfYW5pbWFsKCkpLCB0LnJldmVyc2VDb25uZWN0ZWRUaWxlID0gdGhpcylcclxuICAgIH1cclxuICAgIGdldFRhaWwoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgdCA9IHRoaXMuY29ubmVjdGVkVGlsZSwgZSA9IG51bGw7IG51bGwgIT0gdDspIGUgPSB0LCB0ID0gdC5jb25uZWN0ZWRUaWxlO1xyXG4gICAgICAgIHJldHVybiBlXHJcbiAgICB9XHJcbiAgICBnZXRIZWFkKCkge1xyXG4gICAgICAgIGZvciAodmFyIHQgPSB0aGlzLnJldmVyc2VDb25uZWN0ZWRUaWxlLCBlID0gbnVsbDsgbnVsbCAhPSB0OykgZSA9IHQsIHQgPSB0LnJldmVyc2VDb25uZWN0ZWRUaWxlO1xyXG4gICAgICAgIHJldHVybiBlXHJcbiAgICB9XHJcbiAgICBlcXVhbHModCkge1xyXG4gICAgICAgIHJldHVybiBudWxsID09IHQgPyAhMSA6IHRoaXMuZ2V0X3JvdygpID09IHQuZ2V0X3JvdygpICYmIHRoaXMuZ2V0X2NvbCgpID09IHQuZ2V0X2NvbCgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19