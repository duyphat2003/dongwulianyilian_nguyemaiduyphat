
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/hex-lines-game/Res.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '81fb28+15NDNaH9M81MKxwU', 'Res');
// Game/Scripts/hex-lines-game/Res.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.R = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
exports.R = null;
var Res = /** @class */ (function (_super) {
    __extends(Res, _super);
    function Res() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelJson = null;
        _this.TilePrefab = null;
        _this.TileShadow = null;
        _this.Line46 = null;
        _this.Line37 = null;
        _this.Line19 = null;
        _this.audio_bgm = null;
        _this.audio_unlock = null;
        _this.audio_invalid = null;
        _this.audio_draw = null;
        _this.audio_down = null;
        _this.audio_win = null;
        _this.audio_link = null;
        _this.audio_get_diamond = null;
        _this.tileTextures = [];
        _this.animalPrefabs = [];
        _this.skinConfig = null;
        _this.luckyConfig = null;
        _this.colors = [];
        return _this;
    }
    Res.prototype.onLoad = function () {
        exports.R = this;
    };
    Res.prototype.start = function () {
    };
    __decorate([
        property(cc.JsonAsset)
    ], Res.prototype, "levelJson", void 0);
    __decorate([
        property(cc.Prefab)
    ], Res.prototype, "TilePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Res.prototype, "TileShadow", void 0);
    __decorate([
        property(cc.Prefab)
    ], Res.prototype, "Line46", void 0);
    __decorate([
        property(cc.Prefab)
    ], Res.prototype, "Line37", void 0);
    __decorate([
        property(cc.Prefab)
    ], Res.prototype, "Line19", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Res.prototype, "audio_bgm", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Res.prototype, "audio_unlock", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Res.prototype, "audio_invalid", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Res.prototype, "audio_draw", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Res.prototype, "audio_down", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Res.prototype, "audio_win", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Res.prototype, "audio_link", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Res.prototype, "audio_get_diamond", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Res.prototype, "tileTextures", void 0);
    __decorate([
        property([cc.Prefab])
    ], Res.prototype, "animalPrefabs", void 0);
    __decorate([
        property(cc.JsonAsset)
    ], Res.prototype, "skinConfig", void 0);
    __decorate([
        property(cc.JsonAsset)
    ], Res.prototype, "luckyConfig", void 0);
    __decorate([
        property([cc.Color])
    ], Res.prototype, "colors", void 0);
    Res = __decorate([
        ccclass
    ], Res);
    return Res;
}(cc.Component));
exports.default = Res;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcaGV4LWxpbmVzLWdhbWVcXFJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRS9CLFFBQUEsQ0FBQyxHQUFPLElBQUksQ0FBQztBQUV4QjtJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQW1FQztRQWhFRyxlQUFTLEdBQWdCLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixlQUFTLEdBQWdCLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFnQixJQUFJLENBQUM7UUFHakMsbUJBQWEsR0FBZ0IsSUFBSSxDQUFDO1FBR2xDLGdCQUFVLEdBQWdCLElBQUksQ0FBQztRQUcvQixnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFHL0IsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFHOUIsZ0JBQVUsR0FBZ0IsSUFBSSxDQUFDO1FBRy9CLHVCQUFpQixHQUFnQixJQUFJLENBQUM7UUFHdEMsa0JBQVksR0FBb0IsRUFBRSxDQUFBO1FBR2xDLG1CQUFhLEdBQWUsRUFBRSxDQUFBO1FBRzlCLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUdoQyxpQkFBVyxHQUFrQixJQUFJLENBQUM7UUFHbEMsWUFBTSxHQUFnQixFQUFFLENBQUE7O0lBVTVCLENBQUM7SUFSRyxvQkFBTSxHQUFOO1FBQ0ksU0FBQyxHQUFHLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCxtQkFBSyxHQUFMO0lBRUEsQ0FBQztJQTlERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzBDQUNPO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDUTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VDQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dUNBQ0k7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1Q0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7MENBQ0Q7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDOzZDQUNFO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzs4Q0FDRztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7MkNBQ0E7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDOzJDQUNBO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzswQ0FDRDtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7MkNBQ0E7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDO2tEQUNPO0lBR3RDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzZDQUNPO0lBR2xDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzhDQUNRO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7MkNBQ1M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0Q0FDVztJQUdsQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt1Q0FDRztJQXpEUCxHQUFHO1FBRHZCLE9BQU87T0FDYSxHQUFHLENBbUV2QjtJQUFELFVBQUM7Q0FuRUQsQUFtRUMsQ0FuRWdDLEVBQUUsQ0FBQyxTQUFTLEdBbUU1QztrQkFuRW9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCB2YXIgUjpSZXMgPSBudWxsO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuSnNvbkFzc2V0KVxyXG4gICAgbGV2ZWxKc29uOmNjLkpzb25Bc3NldCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIFRpbGVQcmVmYWI6Y2MuUHJlZmFiICA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIFRpbGVTaGFkb3c6Y2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgTGluZTQ2OmNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIExpbmUzNzpjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBMaW5lMTk6Y2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBhdWRpb19iZ206Y2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBhdWRpb191bmxvY2s6Y2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBhdWRpb19pbnZhbGlkOmNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5BdWRpb0NsaXB9KVxyXG4gICAgYXVkaW9fZHJhdzpjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuQXVkaW9DbGlwfSlcclxuICAgIGF1ZGlvX2Rvd246Y2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBhdWRpb193aW46Y2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBhdWRpb19saW5rOmNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5BdWRpb0NsaXB9KVxyXG4gICAgYXVkaW9fZ2V0X2RpYW1vbmQ6Y2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIHRpbGVUZXh0dXJlczpjYy5TcHJpdGVGcmFtZVtdID0gW11cclxuICAgIFxyXG4gICAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxyXG4gICAgYW5pbWFsUHJlZmFiczpjYy5QcmVmYWJbXSA9IFtdXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkpzb25Bc3NldClcclxuICAgIHNraW5Db25maWc6Y2MuSnNvbkFzc2V0ID0gIG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkpzb25Bc3NldClcclxuICAgIGx1Y2t5Q29uZmlnOiBjYy5Kc29uQXNzZXQgPSAgbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLkNvbG9yXSlcclxuICAgIGNvbG9yczogY2MuQ29sb3IgW10gPSBbXVxyXG4gICAgXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIFIgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG59Il19