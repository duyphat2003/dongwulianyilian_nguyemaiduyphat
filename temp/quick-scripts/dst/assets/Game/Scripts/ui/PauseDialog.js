
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/PauseDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83fb9osUoVEppfk8B6mkJYV', 'PauseDialog');
// Game/Scripts/ui/PauseDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Platform_1 = require("../../../framework/Platform");
var LanguageManager_1 = require("../LanguageManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PauseDialog = /** @class */ (function (_super) {
    __extends(PauseDialog, _super);
    function PauseDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeLabel = null;
        _this.homeLabel = null;
        _this.restartLabel = null;
        _this.requestHelpLabel = null;
        _this.ch_FontSize = 25;
        _this.vi_FontSize = 20;
        _this.eng_FontSize = 20;
        return _this;
    }
    PauseDialog.prototype.onLoad = function () { };
    PauseDialog.prototype.start = function () { };
    PauseDialog.prototype.onEnable = function () {
        switch (LanguageManager_1.default.instance.currentLanguage) {
            case LanguageManager_1.LanguageMode.VI:
                this.set_label_lang("Đóng", "Trang chính", "Chạy lại", "Yêu cầu trợ giúp");
                this.set_label_FontSize(this.vi_FontSize);
                break;
            case LanguageManager_1.LanguageMode.EN:
                this.set_label_lang("Close", "Home", "Restart", "Requesting Help");
                this.set_label_FontSize(this.eng_FontSize);
                break;
            case LanguageManager_1.LanguageMode.CN:
                this.set_label_lang("关闭", "主界面", "重新开始", "请求帮助");
                this.set_label_FontSize(this.ch_FontSize);
                break;
        }
    };
    PauseDialog.prototype.set_label_lang = function (closeLabelString, homeLabelString, restartLabelString, requestHelpLabelString) {
        this.closeLabel.string = closeLabelString;
        this.homeLabel.string = homeLabelString;
        this.restartLabel.string = restartLabelString;
        this.requestHelpLabel.string = requestHelpLabelString;
    };
    PauseDialog.prototype.set_label_FontSize = function (fontSize) {
        this.closeLabel.fontSize = fontSize;
        this.homeLabel.fontSize = fontSize;
        this.restartLabel.fontSize = fontSize;
        this.requestHelpLabel.fontSize = fontSize;
    };
    PauseDialog.prototype.click_share = function () {
        Platform_1.default.share();
    };
    PauseDialog.prototype.click_home = function () {
        cc.director.loadScene("Main");
    };
    PauseDialog.prototype.click_restart = function () {
        cc.director.loadScene("Game");
    };
    __decorate([
        property(cc.Label)
    ], PauseDialog.prototype, "closeLabel", void 0);
    __decorate([
        property(cc.Label)
    ], PauseDialog.prototype, "homeLabel", void 0);
    __decorate([
        property(cc.Label)
    ], PauseDialog.prototype, "restartLabel", void 0);
    __decorate([
        property(cc.Label)
    ], PauseDialog.prototype, "requestHelpLabel", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], PauseDialog.prototype, "ch_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], PauseDialog.prototype, "vi_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], PauseDialog.prototype, "eng_FontSize", void 0);
    PauseDialog = __decorate([
        ccclass
    ], PauseDialog);
    return PauseDialog;
}(cc.Component));
exports.default = PauseDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXFBhdXNlRGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQyx3REFBbUQ7QUFDcEQsc0RBQW1FO0FBRTdELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBMEZDO1FBckZHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRzVCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0Isa0JBQVksR0FBYSxJQUFJLENBQUM7UUFHOUIsc0JBQWdCLEdBQWEsSUFBSSxDQUFDO1FBR2xDLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXpCLGlCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXpCLGtCQUFZLEdBQVcsRUFBRSxDQUFDOztJQXFFOUIsQ0FBQztJQXhGRyw0QkFBTSxHQUFOLGNBQVcsQ0FBQztJQUNaLDJCQUFLLEdBQUwsY0FBVSxDQUFDO0lBb0JYLDhCQUFRLEdBQVI7UUFDSSxRQUFRLHlCQUFlLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtZQUM5QyxLQUFLLDhCQUFZLENBQUMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FDZixNQUFNLEVBQ04sYUFBYSxFQUNiLFVBQVUsRUFDVixrQkFBa0IsQ0FDckIsQ0FBQztnQkFDRixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxQyxNQUFNO1lBQ1YsS0FBSyw4QkFBWSxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxjQUFjLENBQ2YsT0FBTyxFQUNQLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLENBQ3BCLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFM0MsTUFBTTtZQUNWLEtBQUssOEJBQVksQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsY0FBYyxDQUNmLElBQUksRUFDSixLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sQ0FDVCxDQUFDO2dCQUNGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzFDLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCxvQ0FBYyxHQUFkLFVBQ0ksZ0JBQXdCLEVBQ3hCLGVBQXVCLEVBQ3ZCLGtCQUEwQixFQUMxQixzQkFBOEI7UUFFOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDO1FBQzlDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsc0JBQXNCLENBQUM7SUFDMUQsQ0FBQztJQUVELHdDQUFrQixHQUFsQixVQUFtQixRQUFnQjtRQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM5QyxDQUFDO0lBRUQsaUNBQVcsR0FBWDtRQUVJLGtCQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFFSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBR0QsbUNBQWEsR0FBYjtRQUVJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFwRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDUztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ1c7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5REFDZTtJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7b0RBQ047SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO29EQUNOO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztxREFDTDtJQXJCVCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBMEYvQjtJQUFELGtCQUFDO0NBMUZELEFBMEZDLENBMUZ3QyxFQUFFLENBQUMsU0FBUyxHQTBGcEQ7a0JBMUZvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvUGxhdGZvcm1cIjtcclxuaW1wb3J0IExhbmd1YWdlTWFuYWdlciwgeyBMYW5ndWFnZU1vZGUgfSBmcm9tIFwiLi4vTGFuZ3VhZ2VNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdXNlRGlhbG9nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQgKCkge31cclxuICAgIHN0YXJ0ICgpIHt9XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBjbG9zZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgaG9tZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcmVzdGFydExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcmVxdWVzdEhlbHBMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcclxuICAgIGNoX0ZvbnRTaXplOiBudW1iZXIgPSAyNTtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcclxuICAgIHZpX0ZvbnRTaXplOiBudW1iZXIgPSAyMDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcclxuICAgIGVuZ19Gb250U2l6ZTogbnVtYmVyID0gMjA7XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgc3dpdGNoIChMYW5ndWFnZU1hbmFnZXIuaW5zdGFuY2UuY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLlZJOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfbGFuZyhcclxuICAgICAgICAgICAgICAgICAgICBcIsSQw7NuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVHJhbmcgY2jDrW5oXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDaOG6oXkgbOG6oWlcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlnDqnUgY+G6p3UgdHLhu6MgZ2nDunBcIixcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9Gb250U2l6ZSh0aGlzLnZpX0ZvbnRTaXplKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5FTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX2xhbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDbG9zZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSG9tZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUmVzdGFydFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUmVxdWVzdGluZyBIZWxwXCIsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfRm9udFNpemUodGhpcy5lbmdfRm9udFNpemUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5DTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX2xhbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgXCLlhbPpl61cIixcclxuICAgICAgICAgICAgICAgICAgICBcIuS4u+eVjOmdolwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi6YeN5paw5byA5aeLXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLor7fmsYLluK7liqlcIixcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9Gb250U2l6ZSh0aGlzLmNoX0ZvbnRTaXplKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRfbGFiZWxfbGFuZyhcclxuICAgICAgICBjbG9zZUxhYmVsU3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgaG9tZUxhYmVsU3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgcmVzdGFydExhYmVsU3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgcmVxdWVzdEhlbHBMYWJlbFN0cmluZzogc3RyaW5nLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUxhYmVsLnN0cmluZyA9IGNsb3NlTGFiZWxTdHJpbmc7XHJcbiAgICAgICAgdGhpcy5ob21lTGFiZWwuc3RyaW5nID0gaG9tZUxhYmVsU3RyaW5nO1xyXG4gICAgICAgIHRoaXMucmVzdGFydExhYmVsLnN0cmluZyA9IHJlc3RhcnRMYWJlbFN0cmluZztcclxuICAgICAgICB0aGlzLnJlcXVlc3RIZWxwTGFiZWwuc3RyaW5nID0gcmVxdWVzdEhlbHBMYWJlbFN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBzZXRfbGFiZWxfRm9udFNpemUoZm9udFNpemU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY2xvc2VMYWJlbC5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgICAgIHRoaXMuaG9tZUxhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICAgICAgdGhpcy5yZXN0YXJ0TGFiZWwuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RIZWxwTGFiZWwuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja19zaGFyZSgpXHJcbiAgICB7XHJcbiAgICAgICAgUGxhdGZvcm0uc2hhcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja19ob21lKClcclxuICAgIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWluXCIpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNsaWNrX3Jlc3RhcnQoKVxyXG4gICAge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVcIilcclxuICAgIH1cclxufSJdfQ==