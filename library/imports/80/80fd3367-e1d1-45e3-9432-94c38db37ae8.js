"use strict";
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