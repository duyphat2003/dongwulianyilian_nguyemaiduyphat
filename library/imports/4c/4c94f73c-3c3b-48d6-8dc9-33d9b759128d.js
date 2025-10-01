"use strict";
cc._RF.push(module, '4c94fc8PDtI1o3JM9m3WRKN', 'LevelDialog');
// Game/Scripts/ui/LevelDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Info_1 = require("../Info");
var LevelSelector_1 = require("../../../framework/plugin_boosts/ui/game/LevelSelector");
var LanguageManager_1 = require("../LanguageManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelDialog = /** @class */ (function (_super) {
    __extends(LevelDialog, _super);
    function LevelDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.continueLabel = null;
        _this.logoSprite = null;
        _this.logoSprite_ch = null;
        _this.logoSprite_vi = null;
        _this.logoSprite_en = null;
        _this.ch_FontSize = 25;
        _this.vi_FontSize = 16;
        _this.eng_FontSize = 20;
        return _this;
    }
    LevelDialog.prototype.onLoad = function () { };
    LevelDialog.prototype.start = function () { };
    LevelDialog.prototype.onEnable = function () {
        switch (LanguageManager_1.default.instance.currentLanguage) {
            case LanguageManager_1.LanguageMode.CN:
                this.set_label_lang("继续游戏", this.logoSprite_ch);
                this.set_label_FontSize(this.ch_FontSize);
                break;
            case LanguageManager_1.LanguageMode.VI:
                this.set_label_lang("Tiếp tục trò chơi", this.logoSprite_vi);
                this.set_label_FontSize(this.vi_FontSize);
                break;
            case LanguageManager_1.LanguageMode.EN:
                this.set_label_lang("Continue the game", this.logoSprite_en);
                this.set_label_FontSize(this.eng_FontSize);
                break;
        }
    };
    LevelDialog.prototype.set_label_lang = function (continueLabelString, logoSpriteFrame) {
        this.continueLabel.string = continueLabelString;
        this.logoSprite.spriteFrame = logoSpriteFrame;
    };
    LevelDialog.prototype.set_label_FontSize = function (fontSize) {
        this.continueLabel.fontSize = fontSize;
    };
    LevelDialog.prototype.onShown = function () {
        this.selector.currentLevel = Info_1.UserInfo.level;
        this.selector.refresh();
        this.scheduleOnce(this.refreshLevels, 0.1);
    };
    LevelDialog.prototype.refreshLevels = function () {
        this.selector.scrollToCurrentLevel();
    };
    LevelDialog.prototype.select_level = function (lvnode) {
        this.gotoLevel(lvnode.name);
    };
    LevelDialog.prototype.refreshLevelItem = function (data) {
    };
    LevelDialog.prototype.gotoLevel = function (lv) {
        lv = parseInt(lv);
        console.log("enter level", lv);
        Info_1.UserInfo.currentLevel = lv;
        cc.director.loadScene("Game");
    };
    LevelDialog.prototype.click_continue = function () {
        this.gotoLevel(Info_1.UserInfo.level);
    };
    __decorate([
        property(LevelSelector_1.default)
    ], LevelDialog.prototype, "selector", void 0);
    __decorate([
        property(cc.Label)
    ], LevelDialog.prototype, "continueLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], LevelDialog.prototype, "logoSprite", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LevelDialog.prototype, "logoSprite_ch", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LevelDialog.prototype, "logoSprite_vi", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LevelDialog.prototype, "logoSprite_en", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], LevelDialog.prototype, "ch_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], LevelDialog.prototype, "vi_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], LevelDialog.prototype, "eng_FontSize", void 0);
    LevelDialog = __decorate([
        ccclass
    ], LevelDialog);
    return LevelDialog;
}(cc.Component));
exports.default = LevelDialog;

cc._RF.pop();