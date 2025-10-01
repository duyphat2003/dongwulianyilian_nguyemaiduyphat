"use strict";
cc._RF.push(module, '979d2m9WlRN0519FkcUBa5E', 'Main');
// Game/Scripts/Main.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewManager_1 = require("../../framework/plugin_boosts/ui/ViewManager");
var Info_1 = require("./Info");
var Platform_1 = require("../../framework/Platform");
var Device_1 = require("../../framework/plugin_boosts/gamesys/Device");
var Res_1 = require("./hex-lines-game/Res");
var ToastManager_1 = require("../../framework/plugin_boosts/ui/ToastManager");
var LanguageManager_1 = require("./LanguageManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.drawRedPoint = null;
        _this.skinRedPoint = null;
        //Label
        _this.addToMyFavLabel = null;
        _this.playLabel = null;
        _this.skinLabel = null;
        _this.rankLabel = null;
        _this.modesLabel = null;
        _this.recommendedLabel = null;
        _this.challengingLabel = null;
        //Sprites
        _this.logoSprite = null;
        _this.volumnSprite = null;
        _this.spinSprite = null;
        // Sprite Frames
        _this.logoSprite_ch = null;
        _this.logoSprite_vi = null;
        _this.logoSprite_en = null;
        _this.volumnSprite_ch = null;
        _this.volumnSprite_vi = null;
        _this.volumnSprite_en = null;
        _this.spinSprite_ch = null;
        _this.spinSprite_vi = null;
        _this.spinSprite_en = null;
        _this.changeLanguageLabel = null;
        _this.ch_FontSize = 25;
        _this.vi_FontSize = 16;
        _this.eng_FontSize = 20;
        return _this;
        // update (dt) {}
    }
    Main_1 = Main;
    Main.prototype.onLoad = function () {
        Main_1.instance = this;
        Platform_1.default.login();
        Info_1.UserInfo.init();
        Device_1.default.playMusic(Res_1.R.audio_bgm);
        console.log("UserInfo Level : " + Info_1.UserInfo.level.toString());
    };
    Main.prototype.refreshRedpoints = function () {
        if (g.isNextDay(Info_1.UserInfo.freedrawTime)) {
            this.drawRedPoint.active = true;
        }
        else {
            this.drawRedPoint.active = false;
        }
        this.skinRedPoint.active = Info_1.UserInfo.diamond >= 500 && !Info_1.UserInfo.isAllUnlocked();
    };
    Main.prototype.start = function () {
        if (g.isNextDay(Info_1.UserInfo.dailyGetTime)) {
            ViewManager_1.default.instance.show("Game/DailyDialog");
        }
        this.refreshRedpoints();
        if (g.isNextDay(Info_1.UserInfo.luckyVideoWatchTime)) {
            Info_1.UserInfo.luckyVideoWatchTime = new Date().getTime();
            Info_1.UserInfo.luckyVideoWatchCount = 0;
        }
        Platform_1.default.showBannerAd();
        if (!LanguageManager_1.default.instance.isLanguageFileExist()) {
            LanguageManager_1.default.instance.saveLanguage(LanguageManager_1.default.instance.currentLanguage);
            cc.log("Created file:", LanguageManager_1.default.instance.currentLanguage);
        }
        LanguageManager_1.default.instance.loadLanguage();
        this.changeLanguageLabel.string = LanguageManager_1.default.instance.currentLanguage;
        switch (LanguageManager_1.default.instance.currentLanguage) {
            case LanguageManager_1.LanguageMode.CN:
                this.set_label_lang("点击\"添加到我的小程序\"", "开始游戏", "皮肤", "好友排行", "更多游戏模式", "推荐游戏", "挑战好友", this.logoSprite_ch, this.volumnSprite_ch, this.spinSprite_ch);
                this.set_label_FontSize(this.ch_FontSize);
                break;
            case LanguageManager_1.LanguageMode.VI:
                this.set_label_lang("Nhấp vào \"Thêm vào Applet của tôi\"", "Bắt đầu trò chơi", "Trang phục", "Xếp hạng bạn bè", "Nhiều chế độ chơi", "Trò chơi đề xuất", "Thử thách bạn bè", this.logoSprite_vi, this.volumnSprite_vi, this.spinSprite_vi);
                this.set_label_FontSize(this.vi_FontSize);
                break;
            case LanguageManager_1.LanguageMode.EN:
                this.set_label_lang("Click \"Add to My Applet\"", "Start the game", "Skin", "Friends Ranking", "Game modes", "Recommended Games", "Challenge Friends", this.logoSprite_en, this.volumnSprite_en, this.spinSprite_en);
                this.set_label_FontSize(this.eng_FontSize);
                break;
        }
        cc.log("Current language:", LanguageManager_1.default.instance.currentLanguage);
    };
    Main.prototype.click_change_language = function () {
        switch (LanguageManager_1.default.instance.currentLanguage) {
            case LanguageManager_1.LanguageMode.CN:
                this.set_Language(LanguageManager_1.LanguageMode.VI);
                this.set_label_lang("Nhấp vào \"Thêm vào Applet của tôi\"", "Bắt đầu trò chơi", "Trang phục", "Xếp hạng bạn bè", "Nhiều chế độ chơi", "Trò chơi đề xuất", "Thử thách bạn bè", this.logoSprite_vi, this.volumnSprite_vi, this.spinSprite_vi);
                this.set_label_FontSize(this.vi_FontSize);
                break;
            case LanguageManager_1.LanguageMode.VI:
                this.set_Language(LanguageManager_1.LanguageMode.EN);
                this.set_label_lang("Click \"Add to My Applet\"", "Start the game", "Skin", "Friends Ranking", "Game modes", "Recommended Games", "Challenge Friends", this.logoSprite_en, this.volumnSprite_en, this.spinSprite_en);
                this.set_label_FontSize(this.eng_FontSize);
                break;
            case LanguageManager_1.LanguageMode.EN:
                this.set_Language(LanguageManager_1.LanguageMode.CN);
                this.set_label_lang("点击\"添加到我的小程序\"", "开始游戏", "皮肤", "好友排行", "更多游戏模式", "推荐游戏", "挑战好友", this.logoSprite_ch, this.volumnSprite_ch, this.spinSprite_ch);
                this.set_label_FontSize(this.ch_FontSize);
                break;
        }
    };
    Main.prototype.set_label_lang = function (addToMyFavString, playString, skinString, rankString, modesString, recommendedString, challengingString, logoSpriteFrame, volumnSpriteFrame, spinSpriteFrame) {
        this.addToMyFavLabel.string = addToMyFavString;
        this.playLabel.string = playString;
        this.skinLabel.string = skinString;
        this.rankLabel.string = rankString;
        this.modesLabel.string = modesString;
        this.recommendedLabel.string = recommendedString;
        this.challengingLabel.string = challengingString;
        this.logoSprite.spriteFrame = logoSpriteFrame;
        this.volumnSprite.spriteFrame = volumnSpriteFrame;
        this.spinSprite.spriteFrame = spinSpriteFrame;
    };
    Main.prototype.set_label_FontSize = function (fontSize) {
        this.addToMyFavLabel.fontSize = fontSize;
        if (LanguageManager_1.default.instance.currentLanguage == LanguageManager_1.LanguageMode.VI)
            this.addToMyFavLabel.fontSize -= 4;
        this.playLabel.fontSize = fontSize;
        this.skinLabel.fontSize = fontSize;
        this.rankLabel.fontSize = fontSize;
        this.modesLabel.fontSize = fontSize;
        this.recommendedLabel.fontSize = fontSize;
        this.challengingLabel.fontSize = fontSize;
    };
    Main.prototype.set_Language = function (language) {
        this.changeLanguageLabel.string = language.toString();
        LanguageManager_1.default.instance.saveLanguage(language);
        cc.log("Changed language to:", LanguageManager_1.default.instance.currentLanguage);
        LanguageManager_1.default.instance.loadLanguage();
        cc.log("Load language:", LanguageManager_1.default.instance.currentLanguage);
    };
    Main.prototype.click_play = function () {
        ViewManager_1.default.instance.show("Game/LevelDialog");
    };
    Main.prototype.toggle_sfx = function (t) {
        Device_1.default.setSoundsEnable(!t.isChecked);
    };
    Main.prototype.click_skin = function () {
        ViewManager_1.default.instance.show("Game/ShopDialog");
    };
    Main.prototype.click_rank = function () {
        ViewManager_1.default.instance.show("wechat/WxRankDialog");
    };
    Main.prototype.onShare = function () {
    };
    Main.prototype.click_share = function () {
        Platform_1.default.share(this.onShare);
    };
    Main.prototype.click_luck = function () {
        ViewManager_1.default.instance.show("Game/LuckyDialog");
    };
    Main.prototype.click_more = function () {
        switch (LanguageManager_1.default.instance.currentLanguage) {
            case LanguageManager_1.LanguageMode.CN:
                ToastManager_1.Toast.make("敬请期待");
                break;
            case LanguageManager_1.LanguageMode.VI:
                ToastManager_1.Toast.make("Hãy theo dõi");
                break;
            case LanguageManager_1.LanguageMode.EN:
                ToastManager_1.Toast.make("Stay tuned");
                break;
        }
    };
    var Main_1;
    Main.instance = null;
    __decorate([
        property(cc.Node)
    ], Main.prototype, "drawRedPoint", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "skinRedPoint", void 0);
    __decorate([
        property(cc.Label)
    ], Main.prototype, "addToMyFavLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Main.prototype, "playLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Main.prototype, "skinLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Main.prototype, "rankLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Main.prototype, "modesLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Main.prototype, "recommendedLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Main.prototype, "challengingLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], Main.prototype, "logoSprite", void 0);
    __decorate([
        property(cc.Sprite)
    ], Main.prototype, "volumnSprite", void 0);
    __decorate([
        property(cc.Sprite)
    ], Main.prototype, "spinSprite", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Main.prototype, "logoSprite_ch", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Main.prototype, "logoSprite_vi", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Main.prototype, "logoSprite_en", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Main.prototype, "volumnSprite_ch", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Main.prototype, "volumnSprite_vi", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Main.prototype, "volumnSprite_en", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Main.prototype, "spinSprite_ch", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Main.prototype, "spinSprite_vi", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Main.prototype, "spinSprite_en", void 0);
    __decorate([
        property(cc.Label)
    ], Main.prototype, "changeLanguageLabel", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], Main.prototype, "ch_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], Main.prototype, "vi_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], Main.prototype, "eng_FontSize", void 0);
    Main = Main_1 = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

cc._RF.pop();