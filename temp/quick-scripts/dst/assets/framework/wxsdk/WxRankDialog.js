
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/wxsdk/WxRankDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80fd3Nn4dFF45QylMONs3ro', 'WxRankDialog');
// framework/wxsdk/WxRankDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Platform_1 = require("../Platform");
var View_1 = require("../plugin_boosts/ui/View");
var ViewManager_1 = require("../plugin_boosts/ui/ViewManager");
var Signal_1 = require("../plugin_boosts/misc/Signal");
var LanguageManager_1 = require("../../Game/Scripts/LanguageManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WxRankDialog = /** @class */ (function (_super) {
    __extends(WxRankDialog, _super);
    function WxRankDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeLabel = null;
        _this.titleLabel = null;
        _this.first = true;
        _this.closeSignal = new Signal_1.default();
        _this.ch_FontSize = 25;
        _this.vi_FontSize = 20;
        _this.eng_FontSize = 20;
        return _this;
    }
    WxRankDialog.prototype.onEnable = function () {
        switch (LanguageManager_1.default.instance.currentLanguage) {
            case LanguageManager_1.LanguageMode.VI:
                this.set_label_lang("Đóng cửa", "Hạng         Cấp         Tên");
                this.set_label_FontSize(this.vi_FontSize);
                break;
            case LanguageManager_1.LanguageMode.EN:
                this.set_label_lang("Closure", "Rank         Level         Name");
                this.set_label_FontSize(this.eng_FontSize);
                break;
            case LanguageManager_1.LanguageMode.CN:
                this.set_label_lang("关闭", "秩         等级         姓名");
                this.set_label_FontSize(this.ch_FontSize);
                break;
        }
    };
    WxRankDialog.prototype.set_label_lang = function (closeLabelString, titleLabelString) {
        this.closeLabel.string = closeLabelString;
        this.titleLabel.string = titleLabelString;
    };
    WxRankDialog.prototype.set_label_FontSize = function (fontSize) {
        this.closeLabel.fontSize = fontSize;
    };
    WxRankDialog.prototype.onShown = function (callback, target) {
        this.closeSignal.on(callback, target);
        if (this.first) {
            this.scheduleOnce(this.reOpen, 0.1);
        }
        else {
            Platform_1.default.showRank();
        }
    };
    WxRankDialog.prototype.reOpen = function () {
        Platform_1.default.showRank();
        this.first = false;
        this.getComponent(View_1.default).hide();
        // setTimeout(() => {
        ViewManager_1.default.instance.show("wechat/WxRankDialog");
        // }, 100);
    };
    WxRankDialog.prototype.click_close = function () {
        Platform_1.default.hideRank();
        this.getComponent(View_1.default).hide();
        this.closeSignal.fire();
    };
    __decorate([
        property(cc.Label)
    ], WxRankDialog.prototype, "closeLabel", void 0);
    __decorate([
        property(cc.Label)
    ], WxRankDialog.prototype, "titleLabel", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], WxRankDialog.prototype, "ch_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], WxRankDialog.prototype, "vi_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], WxRankDialog.prototype, "eng_FontSize", void 0);
    WxRankDialog = __decorate([
        ccclass
    ], WxRankDialog);
    return WxRankDialog;
}(cc.Component));
exports.default = WxRankDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx3eHNka1xcV3hSYW5rRGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQyx3Q0FBbUM7QUFDcEMsaURBQTRDO0FBQzVDLCtEQUEwRDtBQUUxRCx1REFBa0Q7QUFDbEQsc0VBQW1GO0FBRzdFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBcUZDO1FBbEZHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLFdBQUssR0FBVyxJQUFJLENBQUM7UUFFckIsaUJBQVcsR0FBRyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztRQUczQixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6QixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6QixrQkFBWSxHQUFXLEVBQUUsQ0FBQzs7SUFvRTlCLENBQUM7SUFsRUcsK0JBQVEsR0FBUjtRQUNJLFFBQVEseUJBQWUsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFO1lBQzlDLEtBQUssOEJBQVksQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsY0FBYyxDQUNmLFVBQVUsRUFDViw4QkFBOEIsQ0FDakMsQ0FBQztnQkFDRixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxQyxNQUFNO1lBQ1YsS0FBSyw4QkFBWSxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxjQUFjLENBQ2YsU0FBUyxFQUNULGlDQUFpQyxDQUNwQyxDQUFDO2dCQUNGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBRTNDLE1BQU07WUFDVixLQUFLLDhCQUFZLENBQUMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FDZixJQUFJLEVBQ0oseUJBQXlCLENBQzVCLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDMUMsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELHFDQUFjLEdBQWQsVUFDSSxnQkFBd0IsRUFDeEIsZ0JBQXdCO1FBRXhCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO0lBQzlDLENBQUM7SUFFRCx5Q0FBa0IsR0FBbEIsVUFBbUIsUUFBZ0I7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQ3hDLENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsUUFBUSxFQUFDLE1BQU07UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3BDLElBQUcsSUFBSSxDQUFDLEtBQUssRUFDYjtZQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQTtTQUNyQzthQUFJO1lBQ0Qsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN2QjtJQUVMLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBRUksa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLHFCQUFxQjtRQUNqQixxQkFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQTtRQUNwRCxXQUFXO0lBQ2YsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFFSSxrQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBakZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ1M7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDUztJQU81QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7cURBQ047SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO3FEQUNOO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztzREFDTDtJQWpCVCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBcUZoQztJQUFELG1CQUFDO0NBckZELEFBcUZDLENBckZ5QyxFQUFFLENBQUMsU0FBUyxHQXFGckQ7a0JBckZvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuLi9QbGF0Zm9ybVwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3BsdWdpbl9ib29zdHMvdWkvVmlld1wiO1xuaW1wb3J0IFZpZXdNYW5hZ2VyIGZyb20gXCIuLi9wbHVnaW5fYm9vc3RzL3VpL1ZpZXdNYW5hZ2VyXCI7XG5pbXBvcnQgQ29tbW9uIGZyb20gXCIuLi9wbHVnaW5fYm9vc3RzL3V0aWxzL0NvbW1vblwiO1xuaW1wb3J0IFNpZ25hbCBmcm9tIFwiLi4vcGx1Z2luX2Jvb3N0cy9taXNjL1NpZ25hbFwiO1xuaW1wb3J0IExhbmd1YWdlTWFuYWdlciwgeyBMYW5ndWFnZU1vZGUgfSBmcm9tIFwiLi4vLi4vR2FtZS9TY3JpcHRzL0xhbmd1YWdlTWFuYWdlclwiO1xyXG5cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXeFJhbmtEaWFsb2cgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGNsb3NlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0aXRsZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBmaXJzdDpib29sZWFuID0gdHJ1ZTtcblxuICAgIGNsb3NlU2lnbmFsID0gbmV3IFNpZ25hbCgpO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgY2hfRm9udFNpemU6IG51bWJlciA9IDI1O1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgdmlfRm9udFNpemU6IG51bWJlciA9IDIwO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgZW5nX0ZvbnRTaXplOiBudW1iZXIgPSAyMDtcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBzd2l0Y2ggKExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50TGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuVkk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9sYW5nKFxyXG4gICAgICAgICAgICAgICAgICAgIFwixJDDs25nIGPhu61hXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJI4bqhbmcgICAgICAgICBD4bqlcCAgICAgICAgIFTDqm5cIixcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9Gb250U2l6ZSh0aGlzLnZpX0ZvbnRTaXplKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5FTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX2xhbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDbG9zdXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJSYW5rICAgICAgICAgTGV2ZWwgICAgICAgICBOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfRm9udFNpemUodGhpcy5lbmdfRm9udFNpemUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5DTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX2xhbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgXCLlhbPpl61cIixcclxuICAgICAgICAgICAgICAgICAgICBcIuenqSAgICAgICAgIOetiee6pyAgICAgICAgIOWnk+WQjVwiLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX0ZvbnRTaXplKHRoaXMuY2hfRm9udFNpemUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxuXG4gICAgc2V0X2xhYmVsX2xhbmcoXG4gICAgICAgIGNsb3NlTGFiZWxTdHJpbmc6IHN0cmluZyxcbiAgICAgICAgdGl0bGVMYWJlbFN0cmluZzogc3RyaW5nLFxuICAgICkge1xuICAgICAgICB0aGlzLmNsb3NlTGFiZWwuc3RyaW5nID0gY2xvc2VMYWJlbFN0cmluZztcbiAgICAgICAgdGhpcy50aXRsZUxhYmVsLnN0cmluZyA9IHRpdGxlTGFiZWxTdHJpbmc7XG4gICAgfVxuXG4gICAgc2V0X2xhYmVsX0ZvbnRTaXplKGZvbnRTaXplOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jbG9zZUxhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgfVxuXG4gICAgb25TaG93bihjYWxsYmFjayx0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5jbG9zZVNpZ25hbC5vbihjYWxsYmFjayx0YXJnZXQpXG4gICAgICAgIGlmKHRoaXMuZmlyc3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMucmVPcGVuLDAuMSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBQbGF0Zm9ybS5zaG93UmFuaygpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJlT3BlbigpXG4gICAge1xuICAgICAgICBQbGF0Zm9ybS5zaG93UmFuaygpO1xuICAgICAgICB0aGlzLmZpcnN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KFZpZXcpLmhpZGUoKTtcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93KFwid2VjaGF0L1d4UmFua0RpYWxvZ1wiKVxuICAgICAgICAvLyB9LCAxMDApO1xuICAgIH1cblxuICAgIGNsaWNrX2Nsb3NlKClcbiAgICB7XG4gICAgICAgIFBsYXRmb3JtLmhpZGVSYW5rKCk7XG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KFZpZXcpLmhpZGUoKTtcbiAgICAgICAgdGhpcy5jbG9zZVNpZ25hbC5maXJlKCk7XG4gICAgfVxufVxuIl19