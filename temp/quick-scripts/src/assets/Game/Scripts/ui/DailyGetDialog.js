"use strict";
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