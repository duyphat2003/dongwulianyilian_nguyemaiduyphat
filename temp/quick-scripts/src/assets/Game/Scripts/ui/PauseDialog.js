"use strict";
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