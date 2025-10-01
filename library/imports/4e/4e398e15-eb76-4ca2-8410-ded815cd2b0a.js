"use strict";
cc._RF.push(module, '4e3984V63ZMooQQ3tgVzSsK', 'LoseDialog');
// Game/Scripts/ui/LoseDialog.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var ViewManager_1 = require("../../../framework/plugin_boosts/ui/ViewManager");
var LanguageManager_1 = require("../LanguageManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titlelabel = null;
        _this.playAgainlabel = null;
        _this.homelabel = null;
        _this.ch_FontSize = 25;
        _this.vi_FontSize = 16;
        _this.eng_FontSize = 20;
        _this.params = null; // reference callback from ViewManager
        return _this;
    }
    NewClass.prototype.init = function (params) {
        this.params = params;
    };
    NewClass.prototype.onEnable = function () {
        switch (LanguageManager_1.default.instance.currentLanguage) {
            case LanguageManager_1.LanguageMode.CN:
                this.set_label_lang("你想再玩一次吗？", "继续", "不是");
                this.set_label_FontSize(this.ch_FontSize);
                break;
            case LanguageManager_1.LanguageMode.VI:
                this.set_label_lang("Bạn có muốn chơi lại không?", "Tiếp tục", "Không");
                this.set_label_FontSize(this.vi_FontSize);
                break;
            case LanguageManager_1.LanguageMode.EN:
                this.set_label_lang("Do you want to play again?", "Continue", "No");
                this.set_label_FontSize(this.eng_FontSize);
                break;
        }
    };
    NewClass.prototype.set_label_lang = function (titlelabelString, playAgainlabelString, homelabelString) {
        this.titlelabel.string = titlelabelString;
        this.playAgainlabel.string = playAgainlabelString;
        this.homelabel.string = homelabelString;
    };
    NewClass.prototype.set_label_FontSize = function (fontSize) {
        this.titlelabel.fontSize = fontSize;
        this.playAgainlabel.fontSize = fontSize;
        this.homelabel.fontSize = fontSize;
    };
    NewClass.prototype.onContinueButtonClick = function () {
        this.params.onContinue();
        ViewManager_1.default.instance.hide(this.node); // notify ViewManager
    };
    NewClass.prototype.onQuitButtonClick = function () {
        this.params.onQuit();
        ViewManager_1.default.instance.hide(this.node); // notify ViewManager
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "titlelabel", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "playAgainlabel", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "homelabel", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], NewClass.prototype, "ch_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], NewClass.prototype, "vi_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], NewClass.prototype, "eng_FontSize", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();