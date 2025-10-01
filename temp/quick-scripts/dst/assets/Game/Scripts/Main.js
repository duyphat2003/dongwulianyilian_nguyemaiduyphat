
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQXVFO0FBQ3ZFLCtCQUFrQztBQUNsQyxxREFBZ0Q7QUFDaEQsdUVBQWtFO0FBQ2xFLDRDQUF5QztBQUN6Qyw4RUFBc0U7QUFDdEUscURBQWtFO0FBRTVELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBOFRDO1FBelRHLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLE9BQU87UUFFUCxxQkFBZSxHQUFhLElBQUksQ0FBQztRQUdqQyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixzQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFHbEMsc0JBQWdCLEdBQWEsSUFBSSxDQUFDO1FBRWxDLFNBQVM7UUFFVCxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixnQkFBZ0I7UUFFaEIsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBRXJDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUVyQyxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFHckMscUJBQWUsR0FBbUIsSUFBSSxDQUFDO1FBRXZDLHFCQUFlLEdBQW1CLElBQUksQ0FBQztRQUV2QyxxQkFBZSxHQUFtQixJQUFJLENBQUM7UUFHdkMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBRXJDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUVyQyxtQkFBYSxHQUFtQixJQUFJLENBQUM7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QURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOytDQUNZO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQ2M7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFDYztJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNjO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7K0NBQ1k7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsrQ0FDWTtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOytDQUNZO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ2tCO0lBSXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs2Q0FDTjtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7NkNBQ047SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDOzhDQUNMO0lBekVULElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E4VHhCO0lBQUQsV0FBQztDQTlURCxBQThUQyxDQTlUaUMsRUFBRSxDQUFDLFNBQVMsR0E4VDdDO2tCQTlUb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3TWFuYWdlciBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3BsdWdpbl9ib29zdHMvdWkvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi9JbmZvXCI7XHJcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL1BsYXRmb3JtXCI7XHJcbmltcG9ydCBEZXZpY2UgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL2dhbWVzeXMvRGV2aWNlXCI7XHJcbmltcG9ydCB7IFIgfSBmcm9tIFwiLi9oZXgtbGluZXMtZ2FtZS9SZXNcIjtcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3BsdWdpbl9ib29zdHMvdWkvVG9hc3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBMYW5ndWFnZU1hbmFnZXIsIHsgTGFuZ3VhZ2VNb2RlIH0gZnJvbSBcIi4vTGFuZ3VhZ2VNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGljIGluc3RhbmNlOiBNYWluID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRyYXdSZWRQb2ludDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBza2luUmVkUG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vTGFiZWxcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGFkZFRvTXlGYXZMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBsYXlMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHNraW5MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHJhbmtMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1vZGVzTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICByZWNvbW1lbmRlZExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgY2hhbGxlbmdpbmdMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIC8vU3ByaXRlc1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGxvZ29TcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHZvbHVtblNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgc3BpblNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICAvLyBTcHJpdGUgRnJhbWVzXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBsb2dvU3ByaXRlX2NoOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBsb2dvU3ByaXRlX3ZpOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBsb2dvU3ByaXRlX2VuOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgdm9sdW1uU3ByaXRlX2NoOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICB2b2x1bW5TcHJpdGVfdmk6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHZvbHVtblNwcml0ZV9lbjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHNwaW5TcHJpdGVfY2g6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHNwaW5TcHJpdGVfdmk6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHNwaW5TcHJpdGVfZW46IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBjaGFuZ2VMYW5ndWFnZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcclxuICAgIGNoX0ZvbnRTaXplOiBudW1iZXIgPSAyNTtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcclxuICAgIHZpX0ZvbnRTaXplOiBudW1iZXIgPSAxNjtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcclxuICAgIGVuZ19Gb250U2l6ZTogbnVtYmVyID0gMjA7XHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBNYWluLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICBQbGF0Zm9ybS5sb2dpbigpO1xyXG4gICAgICAgIFVzZXJJbmZvLmluaXQoKTtcclxuICAgICAgICBEZXZpY2UucGxheU11c2ljKFIuYXVkaW9fYmdtKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXJJbmZvIExldmVsIDogXCIgKyBVc2VySW5mby5sZXZlbC50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoUmVkcG9pbnRzKCkge1xyXG4gICAgICAgIGlmIChnLmlzTmV4dERheShVc2VySW5mby5mcmVlZHJhd1RpbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1JlZFBvaW50LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1JlZFBvaW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNraW5SZWRQb2ludC5hY3RpdmUgPSBVc2VySW5mby5kaWFtb25kID49IDUwMCAmJiAhVXNlckluZm8uaXNBbGxVbmxvY2tlZCgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgICAgIGlmIChnLmlzTmV4dERheShVc2VySW5mby5kYWlseUdldFRpbWUpKSB7XHJcbiAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLnNob3coXCJHYW1lL0RhaWx5RGlhbG9nXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlZnJlc2hSZWRwb2ludHMoKTtcclxuXHJcbiAgICAgICAgaWYgKGcuaXNOZXh0RGF5KFVzZXJJbmZvLmx1Y2t5VmlkZW9XYXRjaFRpbWUpKSB7XHJcbiAgICAgICAgICAgIFVzZXJJbmZvLmx1Y2t5VmlkZW9XYXRjaFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICBVc2VySW5mby5sdWNreVZpZGVvV2F0Y2hDb3VudCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBQbGF0Zm9ybS5zaG93QmFubmVyQWQoKTtcclxuXHJcbiAgICAgICAgaWYgKCFMYW5ndWFnZU1hbmFnZXIuaW5zdGFuY2UuaXNMYW5ndWFnZUZpbGVFeGlzdCgpKSB7XHJcbiAgICAgICAgICAgIExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5zYXZlTGFuZ3VhZ2UoTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLmN1cnJlbnRMYW5ndWFnZSk7XHJcblxyXG4gICAgICAgICAgICBjYy5sb2coXCJDcmVhdGVkIGZpbGU6XCIsIExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50TGFuZ3VhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLmxvYWRMYW5ndWFnZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZUxhbmd1YWdlTGFiZWwuc3RyaW5nID0gTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLmN1cnJlbnRMYW5ndWFnZTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChMYW5ndWFnZU1hbmFnZXIuaW5zdGFuY2UuY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLkNOOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfbGFuZyhcIueCueWHu1xcXCLmt7vliqDliLDmiJHnmoTlsI/nqIvluo9cXFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLlvIDlp4vmuLjmiI9cIixcclxuICAgICAgICAgICAgICAgICAgICBcIuearuiCpFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi5aW95Y+L5o6S6KGMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLmm7TlpJrmuLjmiI/mqKHlvI9cIixcclxuICAgICAgICAgICAgICAgICAgICBcIuaOqOiNkOa4uOaIj1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi5oyR5oiY5aW95Y+LXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dvU3ByaXRlX2NoLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudm9sdW1uU3ByaXRlX2NoLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BpblNwcml0ZV9jaCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9Gb250U2l6ZSh0aGlzLmNoX0ZvbnRTaXplKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuVkk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9sYW5nKFwiTmjhuqVwIHbDoG8gXFxcIlRow6ptIHbDoG8gQXBwbGV0IGPhu6dhIHTDtGlcXFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJC4bqvdCDEkeG6p3UgdHLDsiBjaMahaVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVHJhbmcgcGjhu6VjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJY4bq/cCBo4bqhbmcgYuG6oW4gYsOoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJOaGnhu4F1IGNo4bq/IMSR4buZIGNoxqFpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJUcsOyIGNoxqFpIMSR4buBIHh14bqldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVGjhu60gdGjDoWNoIGLhuqFuIGLDqFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nb1Nwcml0ZV92aSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZvbHVtblNwcml0ZV92aSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5TcHJpdGVfdmksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfRm9udFNpemUodGhpcy52aV9Gb250U2l6ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLkVOOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfbGFuZyhcIkNsaWNrIFxcXCJBZGQgdG8gTXkgQXBwbGV0XFxcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhcnQgdGhlIGdhbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlNraW5cIixcclxuICAgICAgICAgICAgICAgICAgICBcIkZyaWVuZHMgUmFua2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiR2FtZSBtb2Rlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUmVjb21tZW5kZWQgR2FtZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkNoYWxsZW5nZSBGcmllbmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dvU3ByaXRlX2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudm9sdW1uU3ByaXRlX2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BpblNwcml0ZV9lbixcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9Gb250U2l6ZSh0aGlzLmVuZ19Gb250U2l6ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmxvZyhcIkN1cnJlbnQgbGFuZ3VhZ2U6XCIsIExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50TGFuZ3VhZ2UpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGlja19jaGFuZ2VfbGFuZ3VhZ2UoKSB7XHJcbiAgICAgICAgc3dpdGNoIChMYW5ndWFnZU1hbmFnZXIuaW5zdGFuY2UuY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLkNOOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfTGFuZ3VhZ2UoTGFuZ3VhZ2VNb2RlLlZJKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX2xhbmcoXCJOaOG6pXAgdsOgbyBcXFwiVGjDqm0gdsOgbyBBcHBsZXQgY+G7p2EgdMO0aVxcXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkLhuq90IMSR4bqndSB0csOyIGNoxqFpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJUcmFuZyBwaOG7pWNcIixcclxuICAgICAgICAgICAgICAgICAgICBcIljhur9wIGjhuqFuZyBi4bqhbiBiw6hcIixcclxuICAgICAgICAgICAgICAgICAgICBcIk5oaeG7gXUgY2jhur8gxJHhu5kgY2jGoWlcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlRyw7IgY2jGoWkgxJHhu4EgeHXhuqV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJUaOG7rSB0aMOhY2ggYuG6oW4gYsOoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dvU3ByaXRlX3ZpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudm9sdW1uU3ByaXRlX3ZpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BpblNwcml0ZV92aSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9Gb250U2l6ZSh0aGlzLnZpX0ZvbnRTaXplKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5WSTpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X0xhbmd1YWdlKExhbmd1YWdlTW9kZS5FTik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9sYW5nKFwiQ2xpY2sgXFxcIkFkZCB0byBNeSBBcHBsZXRcXFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFydCB0aGUgZ2FtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU2tpblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRnJpZW5kcyBSYW5raW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJHYW1lIG1vZGVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJSZWNvbW1lbmRlZCBHYW1lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ2hhbGxlbmdlIEZyaWVuZHNcIixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ29TcHJpdGVfZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52b2x1bW5TcHJpdGVfZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluU3ByaXRlX2VuLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX0ZvbnRTaXplKHRoaXMuZW5nX0ZvbnRTaXplKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuRU46XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9MYW5ndWFnZShMYW5ndWFnZU1vZGUuQ04pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfbGFuZyhcIueCueWHu1xcXCLmt7vliqDliLDmiJHnmoTlsI/nqIvluo9cXFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLlvIDlp4vmuLjmiI9cIixcclxuICAgICAgICAgICAgICAgICAgICBcIuearuiCpFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi5aW95Y+L5o6S6KGMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLmm7TlpJrmuLjmiI/mqKHlvI9cIixcclxuICAgICAgICAgICAgICAgICAgICBcIuaOqOiNkOa4uOaIj1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi5oyR5oiY5aW95Y+LXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dvU3ByaXRlX2NoLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudm9sdW1uU3ByaXRlX2NoLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BpblNwcml0ZV9jaCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9Gb250U2l6ZSh0aGlzLmNoX0ZvbnRTaXplKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRfbGFiZWxfbGFuZyhhZGRUb015RmF2U3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgcGxheVN0cmluZzogc3RyaW5nLFxyXG4gICAgICAgIHNraW5TdHJpbmc6IHN0cmluZyxcclxuICAgICAgICByYW5rU3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgbW9kZXNTdHJpbmc6IHN0cmluZyxcclxuICAgICAgICByZWNvbW1lbmRlZFN0cmluZzogc3RyaW5nLFxyXG4gICAgICAgIGNoYWxsZW5naW5nU3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgbG9nb1Nwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB2b2x1bW5TcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgc3BpblNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuYWRkVG9NeUZhdkxhYmVsLnN0cmluZyA9IGFkZFRvTXlGYXZTdHJpbmc7IFxyXG4gICAgICAgIHRoaXMucGxheUxhYmVsLnN0cmluZyA9IHBsYXlTdHJpbmc7IFxyXG4gICAgICAgIHRoaXMuc2tpbkxhYmVsLnN0cmluZyA9IHNraW5TdHJpbmc7IFxyXG4gICAgICAgIHRoaXMucmFua0xhYmVsLnN0cmluZyA9IHJhbmtTdHJpbmc7IFxyXG4gICAgICAgIHRoaXMubW9kZXNMYWJlbC5zdHJpbmcgPSBtb2Rlc1N0cmluZzsgXHJcbiAgICAgICAgdGhpcy5yZWNvbW1lbmRlZExhYmVsLnN0cmluZyA9IHJlY29tbWVuZGVkU3RyaW5nOyBcclxuICAgICAgICB0aGlzLmNoYWxsZW5naW5nTGFiZWwuc3RyaW5nID0gY2hhbGxlbmdpbmdTdHJpbmc7XHJcblxyXG4gICAgICAgIHRoaXMubG9nb1Nwcml0ZS5zcHJpdGVGcmFtZSA9IGxvZ29TcHJpdGVGcmFtZTsgXHJcbiAgICAgICAgdGhpcy52b2x1bW5TcHJpdGUuc3ByaXRlRnJhbWUgPSB2b2x1bW5TcHJpdGVGcmFtZTsgXHJcbiAgICAgICAgdGhpcy5zcGluU3ByaXRlLnNwcml0ZUZyYW1lID0gc3BpblNwcml0ZUZyYW1lOyBcclxuICAgIH1cclxuXHJcbiAgICBzZXRfbGFiZWxfRm9udFNpemUoZm9udFNpemU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYWRkVG9NeUZhdkxhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICAgICAgaWYgKExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50TGFuZ3VhZ2UgPT0gTGFuZ3VhZ2VNb2RlLlZJKVxyXG4gICAgICAgICAgICB0aGlzLmFkZFRvTXlGYXZMYWJlbC5mb250U2l6ZSAtPSA0O1xyXG4gICAgICAgIHRoaXMucGxheUxhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICAgICAgdGhpcy5za2luTGFiZWwuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgICAgICB0aGlzLnJhbmtMYWJlbC5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgICAgIHRoaXMubW9kZXNMYWJlbC5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgICAgIHRoaXMucmVjb21tZW5kZWRMYWJlbC5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgICAgIHRoaXMuY2hhbGxlbmdpbmdMYWJlbC5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRfTGFuZ3VhZ2UobGFuZ3VhZ2U6IExhbmd1YWdlTW9kZSkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlTGFuZ3VhZ2VMYWJlbC5zdHJpbmcgPSBsYW5ndWFnZS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBMYW5ndWFnZU1hbmFnZXIuaW5zdGFuY2Uuc2F2ZUxhbmd1YWdlKGxhbmd1YWdlKTtcclxuXHJcbiAgICAgICAgY2MubG9nKFwiQ2hhbmdlZCBsYW5ndWFnZSB0bzpcIiwgTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLmN1cnJlbnRMYW5ndWFnZSk7XHJcblxyXG4gICAgICAgIExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5sb2FkTGFuZ3VhZ2UoKTtcclxuXHJcbiAgICAgICAgY2MubG9nKFwiTG9hZCBsYW5ndWFnZTpcIiwgTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLmN1cnJlbnRMYW5ndWFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfcGxheSgpIHtcclxuICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93KFwiR2FtZS9MZXZlbERpYWxvZ1wiKVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZV9zZngodCkge1xyXG4gICAgICAgIERldmljZS5zZXRTb3VuZHNFbmFibGUoIXQuaXNDaGVja2VkKVxyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX3NraW4oKSB7XHJcbiAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2Uuc2hvdyhcIkdhbWUvU2hvcERpYWxvZ1wiKVxyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX3JhbmsoKSB7XHJcbiAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2Uuc2hvdyhcIndlY2hhdC9XeFJhbmtEaWFsb2dcIilcclxuICAgIH1cclxuXHJcbiAgICBvblNoYXJlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbGlja19zaGFyZSgpIHtcclxuICAgICAgICBQbGF0Zm9ybS5zaGFyZSh0aGlzLm9uU2hhcmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX2x1Y2soKSB7XHJcbiAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2Uuc2hvdyhcIkdhbWUvTHVja3lEaWFsb2dcIilcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xpY2tfbW9yZSgpIHtcclxuICAgICAgICBzd2l0Y2ggKExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50TGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuQ046XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlKFwi5pWs6K+35pyf5b6FXCIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuVkk6XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlKFwiSMOjeSB0aGVvIGTDtWlcIilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5FTjpcclxuICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2UoXCJTdGF5IHR1bmVkXCIpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl19