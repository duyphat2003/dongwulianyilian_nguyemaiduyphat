"use strict";
cc._RF.push(module, '7d78f0lU+VOW7rncsSfgC5s', 'WinDialog');
// Game/Scripts/ui/WinDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Info_1 = require("../Info");
var Platform_1 = require("../../../framework/Platform");
var ViewManager_1 = require("../../../framework/plugin_boosts/ui/ViewManager");
var Consts_1 = require("../hex-lines-game/Consts");
var LanguageManager_1 = require("../LanguageManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WinDialog = /** @class */ (function (_super) {
    __extends(WinDialog, _super);
    function WinDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ps = null;
        _this.levelLabel = null;
        _this.bannerLabel = null;
        _this.achievementLabel = null;
        _this.amountStepLabel = null;
        _this.rankLabel = null;
        _this.rewardLabel = null;
        _this.messageLabel = null;
        _this.nextLevelLabel = null;
        _this.skinStoreLabel = null;
        _this.challengeLabel = null;
        _this.stepLabel = null;
        _this.timeLabel = null;
        _this.percentLabel = null;
        _this.diamondLabel = null;
        _this.diamondNode = null;
        _this.ch_FontSize = 25;
        _this.vi_FontSize = 16;
        _this.eng_FontSize = 20;
        return _this;
    }
    WinDialog.prototype.onLoad = function () { };
    WinDialog.prototype.onEnable = function () {
        switch (LanguageManager_1.default.instance.currentLanguage) {
            case LanguageManager_1.LanguageMode.CN:
                this.set_label_lang("恭喜过关", "用时        超过了         玩家", "步", "查看完整排行", "本关奖励：", "太厉害了", "下一关", "皮肤商店", "发起挑战");
                this.set_label_FontSize(this.ch_FontSize);
                break;
            case LanguageManager_1.LanguageMode.VI:
                this.set_label_lang("Xin chúc mừng bạn đã vượt qua", "Thời gian        vượt quá         Người chơi", "bước", "Xem bảng xếp hạng đầy đủ", "Phần thưởng cho cấp độ này:", "Thật tuyệt vời", "Cấp độ tiếp theo", "Cửa hàng trang phục", "Đưa ra thử thách");
                this.set_label_FontSize(this.vi_FontSize);
                break;
            case LanguageManager_1.LanguageMode.EN:
                this.set_label_lang("Congratulations on passing", "Time        Exceeded         Player", "steps", "View the full ranking", "Rewards for this level:", "It's amazing", "Next Level", "Skin Store", "Launch a challenge");
                this.set_label_FontSize(this.eng_FontSize);
                break;
        }
    };
    WinDialog.prototype.set_label_lang = function (bannerLabelString, achievementLabelString, amountStepLabelString, rankLabelString, rewardLabelString, messageLabelString, nextLevelLabelString, skinStoreLabelString, challengeLabelString) {
        this.bannerLabel.string = bannerLabelString;
        this.achievementLabel.string = achievementLabelString;
        this.amountStepLabel.string = amountStepLabelString;
        this.rankLabel.string = amountStepLabelString;
        this.rewardLabel.string = rewardLabelString;
        this.messageLabel.string = messageLabelString;
        this.nextLevelLabel.string = nextLevelLabelString;
        this.skinStoreLabel.string = skinStoreLabelString;
        this.challengeLabel.string = challengeLabelString;
    };
    WinDialog.prototype.set_label_FontSize = function (fontSize) {
        if (LanguageManager_1.default.instance.currentLanguage == LanguageManager_1.LanguageMode.VI)
            this.bannerLabel.fontSize -= 4;
        this.achievementLabel.fontSize = fontSize;
        this.amountStepLabel.fontSize = fontSize;
        this.rankLabel.fontSize = fontSize;
        this.rewardLabel.fontSize = fontSize;
        this.messageLabel.fontSize = fontSize;
        this.nextLevelLabel.fontSize = fontSize;
        this.skinStoreLabel.fontSize = fontSize;
        this.challengeLabel.fontSize = fontSize;
    };
    WinDialog.prototype.onShown = function () {
        this.ps.resetSystem();
        Platform_1.default.showSmallRank();
        switch (LanguageManager_1.default.instance.currentLanguage) {
            case LanguageManager_1.LanguageMode.CN:
                this.levelLabel.string = cc.js.formatStr("- 第 %s 关 - ", Info_1.UserInfo.currentLevel);
                this.set_label_FontSize(this.ch_FontSize);
                break;
            case LanguageManager_1.LanguageMode.VI:
                this.levelLabel.string = cc.js.formatStr("- Cấp độ %s - ", Info_1.UserInfo.currentLevel);
                this.set_label_FontSize(this.vi_FontSize);
                break;
            case LanguageManager_1.LanguageMode.EN:
                this.levelLabel.string = cc.js.formatStr("- Level %s - ", Info_1.UserInfo.currentLevel);
                this.set_label_FontSize(this.vi_FontSize);
                break;
        }
        this.stepLabel.string = Info_1.UserInfo.stepUsed.toString();
        this.timeLabel.string = Info_1.UserInfo.timePassed.toString() + "s";
        var p = g.decreaseFomula(0.99, 0.3, Info_1.UserInfo.timePassed + Info_1.UserInfo.stepUsed, Info_1.UserInfo.currentLevel + 50);
        this.percentLabel.string = (p * 100).toFixed(0) + "%";
        this.diamondNode.active = false;
        if (Info_1.UserInfo.level == Info_1.UserInfo.currentLevel) {
            var lv_1 = Info_1.UserInfo.level;
            var choise_1 = Info_1.UserInfo.getChoice(Info_1.ChoiceType.Levelup);
            if (choise_1 > 0 && Math.random() > 0.5 && lv_1 >= 3) {
                this.scheduleOnce(function (_) {
                    ViewManager_1.default.instance.show("Game/LevelupDialog", lv_1, p);
                }, 1);
                this.diamondNode.active = false;
            }
            else {
                this.diamondNode.active = true;
                p = Math.min(p, 1);
                var diamond = Math.floor(Math.max(30 * p, 10));
                this.diamondLabel.string = diamond.toString();
                Info_1.UserInfo.addDiamond(diamond);
            }
            Info_1.UserInfo.level = lv_1 + 1;
            Platform_1.default.uploadScore(Info_1.UserInfo.level);
            Info_1.UserInfo.save();
        }
        var choise = Info_1.UserInfo.getChoice(Info_1.ChoiceType.HB);
        if (choise == 1) {
            if (Info_1.UserInfo.level >= 3) {
                if (!Info_1.UserInfo.isUnlock(Consts_1.default.FreeSkinId)) {
                    ViewManager_1.default.instance.show("Game/HbDialog");
                }
            }
        }
    };
    WinDialog.prototype.click_rank = function () {
        ViewManager_1.default.instance.show("wechat/WxRankDialog");
    };
    WinDialog.prototype.click_shop = function () {
        ViewManager_1.default.instance.show("Game/ShopDialog");
    };
    WinDialog.prototype.click_next = function () {
        Info_1.UserInfo.currentLevel = Info_1.UserInfo.currentLevel + 1;
        cc.director.loadScene("Game");
    };
    WinDialog.prototype.click_home = function () {
        cc.director.loadScene("Main");
    };
    WinDialog.prototype.click_share = function () {
        Platform_1.default.share();
    };
    __decorate([
        property(cc.ParticleSystem)
    ], WinDialog.prototype, "ps", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "levelLabel", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "bannerLabel", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "achievementLabel", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "amountStepLabel", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "rankLabel", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "rewardLabel", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "messageLabel", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "nextLevelLabel", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "skinStoreLabel", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "challengeLabel", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "stepLabel", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "timeLabel", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "percentLabel", void 0);
    __decorate([
        property(cc.Label)
    ], WinDialog.prototype, "diamondLabel", void 0);
    __decorate([
        property(cc.Node)
    ], WinDialog.prototype, "diamondNode", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], WinDialog.prototype, "ch_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], WinDialog.prototype, "vi_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], WinDialog.prototype, "eng_FontSize", void 0);
    WinDialog = __decorate([
        ccclass
    ], WinDialog);
    return WinDialog;
}(cc.Component));
exports.default = WinDialog;

cc._RF.pop();