
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/LevelupDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '192e1nHc39B4b1vo/mjTFG2', 'LevelupDialog');
// Game/Scripts/ui/LevelupDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Info_1 = require("../Info");
var View_1 = require("../../../framework/plugin_boosts/ui/View");
var Platform_1 = require("../../../framework/Platform");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelupDialog = /** @class */ (function (_super) {
    __extends(LevelupDialog, _super);
    function LevelupDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.diamondLabel = null;
        _this.btnLabel = null;
        _this.tipLabel = null;
        _this.levelLabel = null;
        _this.mult = 1;
        _this.baseDiamond = 0;
        return _this;
    }
    LevelupDialog.prototype.onLoad = function () { };
    LevelupDialog.prototype.start = function () { };
    LevelupDialog.prototype.onShown = function (level, p) {
        //给钻石
        p = Math.min(p, 1);
        var diamond = Math.floor(Math.max(30 * p, 10));
        this.baseDiamond = diamond;
        this.diamondLabel.string = diamond.toString();
        this.levelLabel.string = cc.js.formatStr("- 第 %s 关 - ", level);
        if (Math.random() > 0.7) {
            this.mult = g.randomInt(3, 6);
            this.btnLabel.string = this.mult + "倍领取";
        }
        else {
            this.btnLabel.string = "双倍领取";
            this.mult = 2;
        }
        this.tipLabel.string = "恭喜获得" + this.btnLabel.string + "奖励机会";
    };
    LevelupDialog.prototype.click_get = function () {
        Info_1.UserInfo.addDiamond(this.baseDiamond);
        Info_1.UserInfo.save();
        this.getComponent(View_1.default).hide();
    };
    LevelupDialog.prototype.share_suc = function () {
        Info_1.UserInfo.addDiamond(this.baseDiamond * this.mult);
        Info_1.UserInfo.save();
        this.getComponent(View_1.default).hide();
    };
    LevelupDialog.prototype.click_getex = function () {
        var choise = Info_1.UserInfo.getChoice(Info_1.ChoiceType.Levelup);
        if (choise == 1) {
            Platform_1.default.share(this.share_suc, this);
        }
        else if (choise == 0) {
            this.share_suc();
        }
        else {
            //video
            Platform_1.default.watch_video(this.share_suc, this);
        }
    };
    __decorate([
        property(cc.Label)
    ], LevelupDialog.prototype, "diamondLabel", void 0);
    __decorate([
        property(cc.Label)
    ], LevelupDialog.prototype, "btnLabel", void 0);
    __decorate([
        property(cc.Label)
    ], LevelupDialog.prototype, "tipLabel", void 0);
    __decorate([
        property(cc.Label)
    ], LevelupDialog.prototype, "levelLabel", void 0);
    LevelupDialog = __decorate([
        ccclass
    ], LevelupDialog);
    return LevelupDialog;
}(cc.Component));
exports.default = LevelupDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXExldmVsdXBEaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdDQUErQztBQUMvQyxpRUFBNEQ7QUFDNUQsd0RBQW1EO0FBRTdDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBc0VDO1FBbkVHLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBSTdCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixVQUFJLEdBQVUsQ0FBQyxDQUFDO1FBRWhCLGlCQUFXLEdBQVUsQ0FBQyxDQUFDOztJQXFEM0IsQ0FBQztJQW5ERyw4QkFBTSxHQUFOLGNBQVcsQ0FBQztJQUNaLDZCQUFLLEdBQUwsY0FBVSxDQUFDO0lBQ1gsK0JBQU8sR0FBUCxVQUFRLEtBQUssRUFBQyxDQUFDO1FBRVgsS0FBSztRQUNMLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUMsS0FBSyxDQUFDLENBQUE7UUFFN0QsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUN0QjtZQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRSxLQUFLLENBQUE7U0FDMUM7YUFBSTtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtZQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQTtTQUNoQjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRSxNQUFNLENBQUE7SUFDL0QsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFFSSxlQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxlQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUVJLGVBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsZUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDbEMsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFFSSxJQUFJLE1BQU0sR0FBRyxlQUFRLENBQUMsU0FBUyxDQUFDLGlCQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsSUFBRyxNQUFNLElBQUksQ0FBQyxFQUNkO1lBQ0ksa0JBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsQ0FBQztTQUN2QzthQUFLLElBQUcsTUFBTSxJQUFJLENBQUMsRUFDcEI7WUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7YUFBSTtZQUNELE9BQU87WUFDUCxrQkFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxDQUFBO1NBQzVDO0lBRUwsQ0FBQztJQWxFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VEQUNVO0lBSTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDTTtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNRO0lBYlYsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXNFakM7SUFBRCxvQkFBQztDQXRFRCxBQXNFQyxDQXRFMEMsRUFBRSxDQUFDLFNBQVMsR0FzRXREO2tCQXRFb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJJbmZvLCBDaG9pY2VUeXBlIH0gZnJvbSBcIi4uL0luZm9cIjtcclxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL3VpL1ZpZXdcIjtcclxuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvUGxhdGZvcm1cIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWx1cERpYWxvZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZGlhbW9uZExhYmVsOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYnRuTGFiZWw6Y2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpcExhYmVsOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsZXZlbExhYmVsOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBtdWx0Om51bWJlciA9IDE7XHJcblxyXG4gICAgYmFzZURpYW1vbmQ6bnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkxvYWQgKCkge31cclxuICAgIHN0YXJ0ICgpIHt9XHJcbiAgICBvblNob3duKGxldmVsLHApXHJcbiAgICB7XHJcbiAgICAgICAgLy/nu5npkrvnn7NcclxuICAgICAgICBwID0gTWF0aC5taW4ocCwxKTtcclxuICAgICAgICBsZXQgZGlhbW9uZCA9IE1hdGguZmxvb3IoTWF0aC5tYXgoMzAgKiBwLDEwKSlcclxuICAgICAgICB0aGlzLmJhc2VEaWFtb25kID0gZGlhbW9uZDtcclxuICAgICAgICB0aGlzLmRpYW1vbmRMYWJlbC5zdHJpbmcgPSBkaWFtb25kLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5sZXZlbExhYmVsLnN0cmluZyA9IGNjLmpzLmZvcm1hdFN0cihcIi0g56ysICVzIOWFsyAtIFwiLGxldmVsKVxyXG5cclxuICAgICAgICBpZihNYXRoLnJhbmRvbSgpID4gMC43KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tdWx0ID0gZy5yYW5kb21JbnQoMyw2KVxyXG4gICAgICAgICAgICB0aGlzLmJ0bkxhYmVsLnN0cmluZyA9IHRoaXMubXVsdCArXCLlgI3pooblj5ZcIlxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkxhYmVsLnN0cmluZyA9IFwi5Y+M5YCN6aKG5Y+WXCJcclxuICAgICAgICAgICAgdGhpcy5tdWx0ID0gMlxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpcExhYmVsLnN0cmluZyA9XCLmga3llpzojrflvpdcIiArIHRoaXMuYnRuTGFiZWwuc3RyaW5nICtcIuWlluWKseacuuS8mlwiXHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfZ2V0KClcclxuICAgIHtcclxuICAgICAgICBVc2VySW5mby5hZGREaWFtb25kKHRoaXMuYmFzZURpYW1vbmQpO1xyXG4gICAgICAgIFVzZXJJbmZvLnNhdmUoKTtcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChWaWV3KS5oaWRlKClcclxuICAgIH1cclxuXHJcbiAgICBzaGFyZV9zdWMoKVxyXG4gICAge1xyXG4gICAgICAgIFVzZXJJbmZvLmFkZERpYW1vbmQodGhpcy5iYXNlRGlhbW9uZCp0aGlzLm11bHQpO1xyXG4gICAgICAgIFVzZXJJbmZvLnNhdmUoKTtcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChWaWV3KS5oaWRlKClcclxuICAgIH1cclxuXHJcbiAgICBjbGlja19nZXRleCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNob2lzZSA9IFVzZXJJbmZvLmdldENob2ljZShDaG9pY2VUeXBlLkxldmVsdXApO1xyXG4gICAgICAgIGlmKGNob2lzZSA9PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUGxhdGZvcm0uc2hhcmUodGhpcy5zaGFyZV9zdWMsdGhpcyk7XHJcbiAgICAgICAgfWVsc2UgaWYoY2hvaXNlID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNoYXJlX3N1YygpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvL3ZpZGVvXHJcbiAgICAgICAgICAgIFBsYXRmb3JtLndhdGNoX3ZpZGVvKHRoaXMuc2hhcmVfc3VjLHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59Il19