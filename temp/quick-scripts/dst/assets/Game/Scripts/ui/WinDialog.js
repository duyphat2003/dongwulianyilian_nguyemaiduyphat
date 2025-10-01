
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/WinDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXFdpbkRpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQStDO0FBQy9DLHdEQUFtRDtBQUNuRCwrRUFBMEU7QUFDMUUsbURBQThDO0FBQzlDLHNEQUFtRTtBQUU3RCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQStOQztRQTNORyxRQUFFLEdBQXFCLElBQUksQ0FBQztRQUc1QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3QixzQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFFbEMscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixvQkFBYyxHQUFhLElBQUksQ0FBQztRQUVoQyxvQkFBYyxHQUFhLElBQUksQ0FBQztRQUVoQyxvQkFBYyxHQUFhLElBQUksQ0FBQztRQUdoQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFFekIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFFekIsa0JBQVksR0FBVyxFQUFFLENBQUM7O0lBOEs5QixDQUFDO0lBM0tHLDBCQUFNLEdBQU4sY0FBVyxDQUFDO0lBQ1osNEJBQVEsR0FBUjtRQUNJLFFBQVEseUJBQWUsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFO1lBQzlDLEtBQUssOEJBQVks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QUFPLEVBQUUsQ0FBQztrREFDTjtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7bURBQ0w7SUFqRFQsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQStON0I7SUFBRCxnQkFBQztDQS9ORCxBQStOQyxDQS9Oc0MsRUFBRSxDQUFDLFNBQVMsR0ErTmxEO2tCQS9Ob0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJJbmZvLCBDaG9pY2VUeXBlIH0gZnJvbSBcIi4uL0luZm9cIjtcclxuaW1wb3J0IFBsYXRmb3JtIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvUGxhdGZvcm1cIjtcclxuaW1wb3J0IFZpZXdNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy91aS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgQ29uc3RzIGZyb20gXCIuLi9oZXgtbGluZXMtZ2FtZS9Db25zdHNcIjtcclxuaW1wb3J0IExhbmd1YWdlTWFuYWdlciwgeyBMYW5ndWFnZU1vZGUgfSBmcm9tIFwiLi4vTGFuZ3VhZ2VNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbkRpYWxvZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcclxuICAgIHBzOmNjLlBhcnRpY2xlU3lzdGVtID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsZXZlbExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYmFubmVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBhY2hpZXZlbWVudExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBhbW91bnRTdGVwTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHJhbmtMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcmV3YXJkTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1lc3NhZ2VMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbmV4dExldmVsTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNraW5TdG9yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBjaGFsbGVuZ2VMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHN0ZXBMYWJlbDpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGltZUxhYmVsOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwZXJjZW50TGFiZWw6Y2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGRpYW1vbmRMYWJlbDpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkaWFtb25kTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgY2hfRm9udFNpemU6IG51bWJlciA9IDI1O1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgdmlfRm9udFNpemU6IG51bWJlciA9IDE2O1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgZW5nX0ZvbnRTaXplOiBudW1iZXIgPSAyMDtcclxuXHJcblxyXG4gICAgb25Mb2FkKCkgeyB9XHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBzd2l0Y2ggKExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50TGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuQ046XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9sYW5nKFwi5oGt5Zac6L+H5YWzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLnlKjml7YgICAgICAgIOi2hei/h+S6hiAgICAgICAgIOeOqeWutlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi5q2lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLmn6XnnIvlrozmlbTmjpLooYxcIixcclxuICAgICAgICAgICAgICAgICAgICBcIuacrOWFs+WlluWKse+8mlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi5aSq5Y6J5a6z5LqGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLkuIvkuIDlhbNcIixcclxuICAgICAgICAgICAgICAgICAgICBcIuearuiCpOWVhuW6l1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi5Y+R6LW35oyR5oiYXCIsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfRm9udFNpemUodGhpcy5jaF9Gb250U2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuVkk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9sYW5nKFwiWGluIGNow7pjIG3hu6tuZyBi4bqhbiDEkcOjIHbGsOG7o3QgcXVhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJUaOG7nWkgZ2lhbiAgICAgICAgdsaw4bujdCBxdcOhICAgICAgICAgTmfGsOG7nWkgY2jGoWlcIixcclxuICAgICAgICAgICAgICAgICAgICBcImLGsOG7m2NcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlhlbSBi4bqjbmcgeOG6v3AgaOG6oW5nIMSR4bqneSDEkeG7p1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUGjhuqduIHRoxrDhu59uZyBjaG8gY+G6pXAgxJHhu5kgbsOgeTpcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlRo4bqtdCB0dXnhu4d0IHbhu51pXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJD4bqlcCDEkeG7mSB0aeG6v3AgdGhlb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ+G7rWEgaMOgbmcgdHJhbmcgcGjhu6VjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLEkMawYSByYSB0aOG7rSB0aMOhY2hcIixcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9Gb250U2l6ZSh0aGlzLnZpX0ZvbnRTaXplKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuRU46XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9sYW5nKFwiQ29uZ3JhdHVsYXRpb25zIG9uIHBhc3NpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlRpbWUgICAgICAgIEV4Y2VlZGVkICAgICAgICAgUGxheWVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzdGVwc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVmlldyB0aGUgZnVsbCByYW5raW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJSZXdhcmRzIGZvciB0aGlzIGxldmVsOlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSXQncyBhbWF6aW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJOZXh0IExldmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTa2luIFN0b3JlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMYXVuY2ggYSBjaGFsbGVuZ2VcIixcclxuXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfRm9udFNpemUodGhpcy5lbmdfRm9udFNpemUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5cclxuICAgIHNldF9sYWJlbF9sYW5nKFxyXG4gICAgICAgIGJhbm5lckxhYmVsU3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgYWNoaWV2ZW1lbnRMYWJlbFN0cmluZzogc3RyaW5nLFxyXG4gICAgICAgIGFtb3VudFN0ZXBMYWJlbFN0cmluZzogc3RyaW5nLFxyXG4gICAgICAgIHJhbmtMYWJlbFN0cmluZzogc3RyaW5nLFxyXG4gICAgICAgIHJld2FyZExhYmVsU3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgbWVzc2FnZUxhYmVsU3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgbmV4dExldmVsTGFiZWxTdHJpbmc6IHN0cmluZyxcclxuICAgICAgICBza2luU3RvcmVMYWJlbFN0cmluZzogc3RyaW5nLFxyXG4gICAgICAgIGNoYWxsZW5nZUxhYmVsU3RyaW5nOiBzdHJpbmcsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmJhbm5lckxhYmVsLnN0cmluZyA9IGJhbm5lckxhYmVsU3RyaW5nO1xyXG4gICAgICAgIHRoaXMuYWNoaWV2ZW1lbnRMYWJlbC5zdHJpbmcgPSBhY2hpZXZlbWVudExhYmVsU3RyaW5nO1xyXG4gICAgICAgIHRoaXMuYW1vdW50U3RlcExhYmVsLnN0cmluZyA9IGFtb3VudFN0ZXBMYWJlbFN0cmluZztcclxuICAgICAgICB0aGlzLnJhbmtMYWJlbC5zdHJpbmcgPSBhbW91bnRTdGVwTGFiZWxTdHJpbmc7XHJcbiAgICAgICAgdGhpcy5yZXdhcmRMYWJlbC5zdHJpbmcgPSByZXdhcmRMYWJlbFN0cmluZztcclxuICAgICAgICB0aGlzLm1lc3NhZ2VMYWJlbC5zdHJpbmcgPSBtZXNzYWdlTGFiZWxTdHJpbmc7XHJcbiAgICAgICAgdGhpcy5uZXh0TGV2ZWxMYWJlbC5zdHJpbmcgPSBuZXh0TGV2ZWxMYWJlbFN0cmluZztcclxuICAgICAgICB0aGlzLnNraW5TdG9yZUxhYmVsLnN0cmluZyA9IHNraW5TdG9yZUxhYmVsU3RyaW5nO1xyXG4gICAgICAgIHRoaXMuY2hhbGxlbmdlTGFiZWwuc3RyaW5nID0gY2hhbGxlbmdlTGFiZWxTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0X2xhYmVsX0ZvbnRTaXplKGZvbnRTaXplOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLmN1cnJlbnRMYW5ndWFnZSA9PSBMYW5ndWFnZU1vZGUuVkkpXHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyTGFiZWwuZm9udFNpemUgLT0gNDtcclxuICAgICAgICB0aGlzLmFjaGlldmVtZW50TGFiZWwuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgICAgICB0aGlzLmFtb3VudFN0ZXBMYWJlbC5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgICAgIHRoaXMucmFua0xhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICAgICAgdGhpcy5yZXdhcmRMYWJlbC5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUxhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICAgICAgdGhpcy5uZXh0TGV2ZWxMYWJlbC5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgICAgIHRoaXMuc2tpblN0b3JlTGFiZWwuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgICAgICB0aGlzLmNoYWxsZW5nZUxhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93bigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wcy5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgIFBsYXRmb3JtLnNob3dTbWFsbFJhbmsoKTtcclxuICAgICAgICBzd2l0Y2ggKExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50TGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuQ046XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsTGFiZWwuc3RyaW5nID0gY2MuanMuZm9ybWF0U3RyKFwiLSDnrKwgJXMg5YWzIC0gXCIsIFVzZXJJbmZvLmN1cnJlbnRMZXZlbClcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9Gb250U2l6ZSh0aGlzLmNoX0ZvbnRTaXplKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5WSTpcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxMYWJlbC5zdHJpbmcgPSBjYy5qcy5mb3JtYXRTdHIoXCItIEPhuqVwIMSR4buZICVzIC0gXCIsIFVzZXJJbmZvLmN1cnJlbnRMZXZlbClcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9Gb250U2l6ZSh0aGlzLnZpX0ZvbnRTaXplKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuRU46XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsTGFiZWwuc3RyaW5nID0gY2MuanMuZm9ybWF0U3RyKFwiLSBMZXZlbCAlcyAtIFwiLCBVc2VySW5mby5jdXJyZW50TGV2ZWwpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfRm9udFNpemUodGhpcy52aV9Gb250U2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGVwTGFiZWwuc3RyaW5nID0gVXNlckluZm8uc3RlcFVzZWQudG9TdHJpbmcoKVxyXG4gICAgICAgIHRoaXMudGltZUxhYmVsLnN0cmluZyA9IFVzZXJJbmZvLnRpbWVQYXNzZWQudG9TdHJpbmcoKSArXCJzXCI7XHJcbiAgICAgICAgbGV0IHAgPSBnLmRlY3JlYXNlRm9tdWxhKDAuOTksMC4zLFVzZXJJbmZvLnRpbWVQYXNzZWQgKyBVc2VySW5mby5zdGVwVXNlZCxVc2VySW5mby5jdXJyZW50TGV2ZWwgKyA1MCApXHJcbiAgICAgICAgdGhpcy5wZXJjZW50TGFiZWwuc3RyaW5nID0gKHAqIDEwMCApLnRvRml4ZWQoMCkgK1wiJVwiXHJcblxyXG4gICAgICAgIHRoaXMuZGlhbW9uZE5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBcclxuICAgICAgICBpZihVc2VySW5mby5sZXZlbCA9PSBVc2VySW5mby5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbHYgPSBVc2VySW5mby5sZXZlbFxyXG4gICAgICAgICAgICBsZXQgY2hvaXNlID0gVXNlckluZm8uZ2V0Q2hvaWNlKENob2ljZVR5cGUuTGV2ZWx1cCk7XHJcbiAgICAgICAgICAgIGlmKGNob2lzZSA+IDAgJiYgTWF0aC5yYW5kb20oKSA+IDAuNSAmJiBsdiA+PSAzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShfPT57XHJcbiAgICAgICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2Uuc2hvdyhcIkdhbWUvTGV2ZWx1cERpYWxvZ1wiLGx2LHApXHJcbiAgICAgICAgICAgICAgICB9LDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYW1vbmROb2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFtb25kTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcCA9IE1hdGgubWluKHAsMSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlhbW9uZCA9IE1hdGguZmxvb3IoTWF0aC5tYXgoMzAgKiBwLDEwKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbW9uZExhYmVsLnN0cmluZyA9IGRpYW1vbmQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLmFkZERpYW1vbmQoZGlhbW9uZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVXNlckluZm8ubGV2ZWwgPSBsdiArIDFcclxuICAgICAgICAgICAgUGxhdGZvcm0udXBsb2FkU2NvcmUoVXNlckluZm8ubGV2ZWwpO1xyXG4gICAgICAgICAgICBVc2VySW5mby5zYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjaG9pc2UgPSBVc2VySW5mby5nZXRDaG9pY2UoQ2hvaWNlVHlwZS5IQik7XHJcbiAgICAgICAgaWYoY2hvaXNlID09IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihVc2VySW5mby5sZXZlbCA+PSAzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZighVXNlckluZm8uaXNVbmxvY2soQ29uc3RzLkZyZWVTa2luSWQpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLnNob3coXCJHYW1lL0hiRGlhbG9nXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfcmFuaygpXHJcbiAgICB7XHJcbiAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2Uuc2hvdyhcIndlY2hhdC9XeFJhbmtEaWFsb2dcIilcclxuICAgIH1cclxuXHJcbiAgICBjbGlja19zaG9wKClcclxuICAgIHtcclxuICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93KFwiR2FtZS9TaG9wRGlhbG9nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX25leHQoKVxyXG4gICAge1xyXG4gICAgICAgIFVzZXJJbmZvLmN1cnJlbnRMZXZlbCA9IFVzZXJJbmZvLmN1cnJlbnRMZXZlbCArMTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lXCIpXHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfaG9tZSgpXHJcbiAgICB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblwiKVxyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX3NoYXJlKClcclxuICAgIHtcclxuICAgICAgICBQbGF0Zm9ybS5zaGFyZSgpO1xyXG4gICAgfVxyXG59Il19