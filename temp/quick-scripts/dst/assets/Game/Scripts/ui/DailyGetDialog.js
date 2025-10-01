
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/DailyGetDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3b8fModWBPmovqTucbpm5C', 'DailyGetDialog');
// Game/Scripts/ui/DailyGetDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Info_1 = require("../Info");
var View_1 = require("../../../framework/plugin_boosts/ui/View");
var Platform_1 = require("../../../framework/Platform");
var LanguageManager_1 = require("../LanguageManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DailyGetDialog = /** @class */ (function (_super) {
    __extends(DailyGetDialog, _super);
    function DailyGetDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.diamond = 0;
        _this.rewardLabel = null;
        _this.doubleButtonLabel = null;
        _this.bannerLabel = null;
        _this.receiveButtonLabel = null;
        return _this;
    }
    DailyGetDialog.prototype.onLoad = function () { };
    DailyGetDialog.prototype.start = function () {
        switch (LanguageManager_1.default.instance.currentLanguage) {
            case LanguageManager_1.LanguageMode.CN:
                this.set_label_lang(cc.js.formatStr("钻石 x " + this.diamond), "双倍领取", "=   每日奖励  =", "领取");
                break;
            case LanguageManager_1.LanguageMode.VI:
                this.set_label_lang(cc.js.formatStr("Kim cương x " + this.diamond), "Nhân đôi số tiền", "= Phần thưởng hàng ngày =", "Nhận được");
                break;
            case LanguageManager_1.LanguageMode.EN:
                this.set_label_lang(cc.js.formatStr("Diamond x " + this.diamond), "Double the amount", "= Daily Rewards =", "Receive");
                break;
        }
    };
    DailyGetDialog.prototype.onShown = function () {
        this.diamond = g.randomInt(20, 50);
        this.rewardLabel.string = cc.js.formatStr("钻石 x " + this.diamond);
    };
    DailyGetDialog.prototype.click_get = function () {
        // share or video 
        Info_1.UserInfo.addDiamond(this.diamond);
        Info_1.UserInfo.dailyGetTime = new Date().getTime();
        Info_1.UserInfo.save();
        this.getComponent(View_1.default).hide();
    };
    DailyGetDialog.prototype.share_succ = function () {
        Info_1.UserInfo.addDiamond(this.diamond * 2);
        Info_1.UserInfo.dailyGetTime = new Date().getTime();
        Info_1.UserInfo.save();
        this.getComponent(View_1.default).hide();
    };
    DailyGetDialog.prototype.click_get_double = function () {
        //share orvideo
        var choice = Info_1.UserInfo.getChoice(Info_1.ChoiceType.DailyGet);
        if (choice == 0) {
            this.share_succ();
        }
        else if (choice == 1) {
            Platform_1.default.share(this.share_succ, this);
        }
        else {
            //watch video
            Platform_1.default.watch_video(this.share_succ, this);
        }
    };
    DailyGetDialog.prototype.set_label_lang = function (rewardString, doubleButtonLabelString, bannerString, receiveButtonString) {
        this.rewardLabel.string = rewardString;
        this.doubleButtonLabel.string = doubleButtonLabelString;
        this.bannerLabel.string = bannerString;
        this.receiveButtonLabel.string = receiveButtonString;
    };
    __decorate([
        property(cc.Label)
    ], DailyGetDialog.prototype, "rewardLabel", void 0);
    __decorate([
        property(cc.Label)
    ], DailyGetDialog.prototype, "doubleButtonLabel", void 0);
    __decorate([
        property(cc.Label)
    ], DailyGetDialog.prototype, "bannerLabel", void 0);
    __decorate([
        property(cc.Label)
    ], DailyGetDialog.prototype, "receiveButtonLabel", void 0);
    DailyGetDialog = __decorate([
        ccclass
    ], DailyGetDialog);
    return DailyGetDialog;
}(cc.Component));
exports.default = DailyGetDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXERhaWx5R2V0RGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQ0FBK0M7QUFDL0MsaUVBQTREO0FBRTVELHdEQUFtRDtBQUNuRCxzREFBbUU7QUFFN0QsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUEyRkM7UUE5REcsYUFBTyxHQUFVLENBQUMsQ0FBQztRQUduQixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3Qix1QkFBaUIsR0FBYSxJQUFJLENBQUM7UUFHbkMsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFHN0Isd0JBQWtCLEdBQWEsSUFBSSxDQUFDOztJQWtEeEMsQ0FBQztJQXpGRywrQkFBTSxHQUFOLGNBQVcsQ0FBQztJQUNaLDhCQUFLLEdBQUw7UUFDSSxRQUFRLHlCQUFlLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtZQUM5QyxLQUFLLDhCQUFZLENBQUMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUN2RCxNQUFNLEVBQ04sYUFBYSxFQUNiLElBQUksQ0FDUCxDQUFDO2dCQUNGLE1BQU07WUFDVixLQUFLLDhCQUFZLENBQUMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUM5RCxrQkFBa0IsRUFDbEIsMkJBQTJCLEVBQzNCLFdBQVcsQ0FDZCxDQUFDO2dCQUVGLE1BQU07WUFDVixLQUFLLDhCQUFZLENBQUMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUM1RCxtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLFNBQVMsQ0FDWixDQUFDO2dCQUNGLE1BQU07U0FDYjtJQUNMLENBQUM7SUFlRCxnQ0FBTyxHQUFQO1FBRUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFFRCxrQ0FBUyxHQUFUO1FBRUksa0JBQWtCO1FBQ2xCLGVBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2pDLGVBQVEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUM1QyxlQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2xDLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBRUksZUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLGVBQVEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUM1QyxlQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2xDLENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEI7UUFFSSxlQUFlO1FBQ2YsSUFBSSxNQUFNLEdBQUcsZUFBUSxDQUFDLFNBQVMsQ0FBQyxpQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksTUFBTSxJQUFJLENBQUMsRUFDZjtZQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjthQUFLLElBQUcsTUFBTSxJQUFJLENBQUMsRUFBQztZQUNqQixrQkFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3ZDO2FBQUk7WUFDRCxhQUFhO1lBQ2Isa0JBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsQ0FBQTtTQUM3QztJQUNMLENBQUM7SUFFRCx1Q0FBYyxHQUFkLFVBQWUsWUFBb0IsRUFDL0IsdUJBQStCLEVBQy9CLFlBQW9CLEVBQ3BCLG1CQUEyQjtRQUUzQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQztRQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztJQUN6RCxDQUFDO0lBMUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ1U7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2REFDZ0I7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDVTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhEQUNpQjtJQXpDbkIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTJGbEM7SUFBRCxxQkFBQztDQTNGRCxBQTJGQyxDQTNGMkMsRUFBRSxDQUFDLFNBQVMsR0EyRnZEO2tCQTNGb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJJbmZvLCBDaG9pY2VUeXBlIH0gZnJvbSBcIi4uL0luZm9cIjtcclxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL3VpL1ZpZXdcIjtcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3BsdWdpbl9ib29zdHMvdWkvVG9hc3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL1BsYXRmb3JtXCI7XHJcbmltcG9ydCBMYW5ndWFnZU1hbmFnZXIsIHsgTGFuZ3VhZ2VNb2RlIH0gZnJvbSBcIi4uL0xhbmd1YWdlTWFuYWdlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYWlseUdldERpYWxvZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgb25Mb2FkICgpIHt9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBzd2l0Y2ggKExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50TGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuQ046XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9sYW5nKGNjLmpzLmZvcm1hdFN0cihcIumSu+efsyB4IFwiICsgdGhpcy5kaWFtb25kKSxcclxuICAgICAgICAgICAgICAgICAgICBcIuWPjOWAjemihuWPllwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiPSAgIOavj+aXpeWlluWKsSAgPVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi6aKG5Y+WXCIsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLlZJOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfbGFuZyhjYy5qcy5mb3JtYXRTdHIoXCJLaW0gY8awxqFuZyB4IFwiICsgdGhpcy5kaWFtb25kKSxcclxuICAgICAgICAgICAgICAgICAgICBcIk5ow6JuIMSRw7RpIHPhu5EgdGnhu4FuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCI9IFBo4bqnbiB0aMaw4bufbmcgaMOgbmcgbmfDoHkgPVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTmjhuq1uIMSRxrDhu6NjXCIsXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5FTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX2xhbmcoY2MuanMuZm9ybWF0U3RyKFwiRGlhbW9uZCB4IFwiICsgdGhpcy5kaWFtb25kKSxcclxuICAgICAgICAgICAgICAgICAgICBcIkRvdWJsZSB0aGUgYW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCI9IERhaWx5IFJld2FyZHMgPVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUmVjZWl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRpYW1vbmQ6bnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICByZXdhcmRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGRvdWJsZUJ1dHRvbkxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYmFubmVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICByZWNlaXZlQnV0dG9uTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBvblNob3duKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRpYW1vbmQgPSBnLnJhbmRvbUludCgyMCw1MCk7XHJcbiAgICAgICAgdGhpcy5yZXdhcmRMYWJlbC5zdHJpbmcgPSBjYy5qcy5mb3JtYXRTdHIoXCLpkrvnn7MgeCBcIiArIHRoaXMuZGlhbW9uZClcclxuICAgIH1cclxuXHJcbiAgICBjbGlja19nZXQoKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHNoYXJlIG9yIHZpZGVvIFxyXG4gICAgICAgIFVzZXJJbmZvLmFkZERpYW1vbmQodGhpcy5kaWFtb25kKVxyXG4gICAgICAgIFVzZXJJbmZvLmRhaWx5R2V0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICAgICAgVXNlckluZm8uc2F2ZSgpXHJcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoVmlldykuaGlkZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc2hhcmVfc3VjYygpXHJcbiAgICB7XHJcbiAgICAgICAgVXNlckluZm8uYWRkRGlhbW9uZCh0aGlzLmRpYW1vbmQgKiAyKTtcclxuICAgICAgICBVc2VySW5mby5kYWlseUdldFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICAgIFVzZXJJbmZvLnNhdmUoKVxyXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KFZpZXcpLmhpZGUoKVxyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX2dldF9kb3VibGUoKVxyXG4gICAge1xyXG4gICAgICAgIC8vc2hhcmUgb3J2aWRlb1xyXG4gICAgICAgIGxldCBjaG9pY2UgPSBVc2VySW5mby5nZXRDaG9pY2UoQ2hvaWNlVHlwZS5EYWlseUdldCk7XHJcbiAgICAgICAgaWYgKGNob2ljZSA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zaGFyZV9zdWNjKCk7XHJcbiAgICAgICAgfWVsc2UgaWYoY2hvaWNlID09IDEpe1xyXG4gICAgICAgICAgICBQbGF0Zm9ybS5zaGFyZSh0aGlzLnNoYXJlX3N1Y2MsdGhpcylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy93YXRjaCB2aWRlb1xyXG4gICAgICAgICAgICBQbGF0Zm9ybS53YXRjaF92aWRlbyh0aGlzLnNoYXJlX3N1Y2MsdGhpcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0X2xhYmVsX2xhbmcocmV3YXJkU3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgZG91YmxlQnV0dG9uTGFiZWxTdHJpbmc6IHN0cmluZyxcclxuICAgICAgICBiYW5uZXJTdHJpbmc6IHN0cmluZyxcclxuICAgICAgICByZWNlaXZlQnV0dG9uU3RyaW5nOiBzdHJpbmcsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnJld2FyZExhYmVsLnN0cmluZyA9IHJld2FyZFN0cmluZztcclxuICAgICAgICB0aGlzLmRvdWJsZUJ1dHRvbkxhYmVsLnN0cmluZyA9IGRvdWJsZUJ1dHRvbkxhYmVsU3RyaW5nO1xyXG4gICAgICAgIHRoaXMuYmFubmVyTGFiZWwuc3RyaW5nID0gYmFubmVyU3RyaW5nO1xyXG4gICAgICAgIHRoaXMucmVjZWl2ZUJ1dHRvbkxhYmVsLnN0cmluZyA9IHJlY2VpdmVCdXR0b25TdHJpbmc7XHJcbiAgICB9XHJcbn0iXX0=