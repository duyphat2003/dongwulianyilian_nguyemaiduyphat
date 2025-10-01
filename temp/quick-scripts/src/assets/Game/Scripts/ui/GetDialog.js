"use strict";
cc._RF.push(module, '714f07aCe9N55KDdTLTUVv8', 'GetDialog');
// Game/Scripts/ui/GetDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
var View_1 = require("../../../framework/plugin_boosts/ui/View");
var Info_1 = require("../Info");
var ViewManager_1 = require("../../../framework/plugin_boosts/ui/ViewManager");
var Platform_1 = require("../../../framework/Platform");
var LanguageManager_1 = require("../LanguageManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GetDialog = /** @class */ (function (_super) {
    __extends(GetDialog, _super);
    function GetDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bannerLabel = null;
        _this.diamondLabel = null;
        _this.receiveLabel = null;
        _this.receiveDoubleLabel = null;
        _this.count = 0;
        _this.node_close = null;
        return _this;
    }
    GetDialog.prototype.onLoad = function () { };
    GetDialog.prototype.start = function () {
    };
    GetDialog.prototype.onEnable = function () {
        switch (LanguageManager_1.default.instance.currentLanguage) {
            case LanguageManager_1.LanguageMode.CN:
                this.set_label_lang("=   恭喜获得  =", "钻石 x", "领取", "双倍领取");
                this.set_label_FontSize(this.ch_FontSize);
                break;
            case LanguageManager_1.LanguageMode.VI:
                this.set_label_lang("= Xin chúc mừng bạn đã chiến thắng =", "Kim cương x", "Nhận được", "Nhân đôi số tiền");
                this.set_label_FontSize(this.vi_FontSize);
                break;
            case LanguageManager_1.LanguageMode.EN:
                this.set_label_lang("= Congratulations on winning =", "Diamond x", "Receive", "Double the amount");
                this.set_label_FontSize(this.eng_FontSize);
                break;
        }
    };
    GetDialog.prototype.set_label_lang = function (bannerString, diamondString, receiveString, receiveDoubleString) {
        this.bannerLabel.string = bannerString;
        this.diamondLabel.string = diamondString;
        this.receiveLabel.string = receiveString;
        this.receiveDoubleLabel.string = receiveDoubleString;
    };
    GetDialog.prototype.set_label_FontSize = function (fontSize) {
        this.bannerLabel.fontSize = fontSize;
        this.diamondLabel.fontSize = fontSize;
        this.receiveLabel.fontSize = fontSize;
        this.receiveDoubleLabel.fontSize = fontSize;
    };
    GetDialog.prototype.share_suc = function () {
        Info_1.UserInfo.addDiamond(this.count * 2);
        Info_1.UserInfo.save();
        // Device.playEffect(R.audio_get_diamond)
        this.getComponent(View_1.default).hide();
        ViewManager_1.default.instance.show("Game/LuckyDialog");
    };
    GetDialog.prototype.click_double = function () {
        //share 
        //if share suc 
        // this.share_suc()
        var choice = Info_1.UserInfo.getChoice(Info_1.ChoiceType.Get);
        if (choice == 1) {
            Platform_1.default.share(this.share_suc, this);
            cc.log("Platform.share(this.share_suc, this)");
        }
        else if (choice == 0) {
            this.share_suc();
            cc.log(" this.share_suc()");
        }
        else {
            //video\
            Platform_1.default.watch_video(this.share_suc, this);
            cc.log("Platform.watch_video(this.share_suc, this)");
        }
    };
    GetDialog.prototype.onShown = function (count) {
        this.count = count;
        // SpriteFrameCache.instance.getSpriteFrame("Game/textures/car/" + cfg.img).then(sf=>this.icon.spriteFrame= sf);
        this.diamondLabel.string = "+" + count;
        this.node_close.active = false;
        this.unschedule(this.delayShow);
        this.scheduleOnce(this.delayShow, 2);
    };
    GetDialog.prototype.delayShow = function () {
        this.node_close.active = true;
    };
    GetDialog.prototype.click_no = function () {
        this.getComponent(View_1.default).hide();
        Info_1.UserInfo.addDiamond(this.count);
        Info_1.UserInfo.save();
        // Device.playEffect(R.audio_get_diamond)
        ViewManager_1.default.instance.show("Game/LuckyDialog");
    };
    __decorate([
        property(cc.Label)
    ], GetDialog.prototype, "bannerLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GetDialog.prototype, "diamondLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GetDialog.prototype, "receiveLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GetDialog.prototype, "receiveDoubleLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GetDialog.prototype, "node_close", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], GetDialog.prototype, "ch_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], GetDialog.prototype, "vi_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], GetDialog.prototype, "eng_FontSize", void 0);
    GetDialog = __decorate([
        ccclass
    ], GetDialog);
    return GetDialog;
}(cc.Component));
exports.default = GetDialog;

cc._RF.pop();