"use strict";
cc._RF.push(module, 'a94275+JmtMx6iZb18iwKTe', 'LuckyDialog');
// Game/Scripts/ui/LuckyDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ToastManager_1 = require("../../../framework/plugin_boosts/ui/ToastManager");
var ViewManager_1 = require("../../../framework/plugin_boosts/ui/ViewManager");
var View_1 = require("../../../framework/plugin_boosts/ui/View");
var Info_1 = require("../Info");
var Platform_1 = require("../../../framework/Platform");
var Device_1 = require("../../../framework/plugin_boosts/gamesys/Device");
var Res_1 = require("../hex-lines-game/Res");
var UIFunctions_1 = require("../../../framework/plugin_boosts/ui/UIFunctions");
var Main_1 = require("../Main");
var LanguageManager_1 = require("../LanguageManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LuckyDialog = /** @class */ (function (_super) {
    __extends(LuckyDialog, _super);
    function LuckyDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._canRotate = true;
        _this.sprites = [];
        _this.labels = [];
        _this.btn_freedraw = null;
        _this.btn_videodraw = null;
        _this.freedrawTip = null;
        _this.drawLabel = null;
        _this.freeDrawLabel = null;
        _this.watchVideoLabel = null;
        _this.bannerLabel = null;
        // click_draw()
        // {
        // }
        _this.ch_FontSize = 0;
        _this.vi_FontSize = 0;
        _this.eng_FontSize = 0;
        _this.pool = [];
        _this.startWheelMessage = "";
        _this.showResMessage = "";
        return _this;
    }
    LuckyDialog_1 = LuckyDialog;
    LuckyDialog.prototype.onEnable = function () {
        switch (LanguageManager_1.default.instance.currentLanguage) {
            case LanguageManager_1.LanguageMode.CN:
                this.set_label_lang('正在给您挑选奖品', '正在给您挑选奖品', '恭喜你抽中了', "免费一次", "观看视频", "幸运转盘");
                this.set_label_FontSize(this.ch_FontSize);
                break;
            case LanguageManager_1.LanguageMode.VI:
                this.set_label_lang('Chọn giải thưởng cho bạn', 'Chọn giải thưởng cho bạn', 'Xin chúc mừng chiến thắng', "Miễn phí một lần", "Xem video", "Vòng quay may mắn");
                this.set_label_FontSize(this.vi_FontSize);
                break;
            case LanguageManager_1.LanguageMode.EN:
                this.set_label_lang('Selecting prizes for you', 'Selecting prizes for you', 'Congratulations on winning', "Free once", "Watch the video", "Lucky Wheel");
                this.set_label_FontSize(this.eng_FontSize);
                break;
        }
    };
    LuckyDialog.prototype.set_label_FontSize = function (fontSize) {
        this.freeDrawLabel.fontSize = fontSize;
        this.watchVideoLabel.fontSize = fontSize;
        this.bannerLabel.fontSize = fontSize;
    };
    LuckyDialog.prototype.share_succ = function () {
        this.startDraw();
        Info_1.UserInfo.freedrawTime = new Date().getTime();
        Info_1.UserInfo.save();
        Main_1.default.instance.refreshRedpoints();
        this.onShown();
    };
    LuckyDialog.prototype.click_freeedraw = function () {
        if (g.isNextDay(Info_1.UserInfo.freedrawTime)) {
            this.share_succ();
        }
    };
    LuckyDialog.prototype.onLoad = function () {
        for (var i = 0; i < Res_1.R.luckyConfig.json.length; i++) {
            var cfg = Res_1.R.luckyConfig.json[i];
            var chance = parseFloat(cfg.chance);
            for (var j = 0; j < chance * 2; j++) {
                this.pool.push(i);
            }
        }
        this.pool.shuffle();
        console.log(this.pool);
    };
    LuckyDialog.prototype.startDraw = function () {
        var id = g.getRandomInArray(this.pool);
        this.startWheel(id);
        Device_1.default.playEffect(Res_1.R.audio_draw);
    };
    // 5次
    LuckyDialog.prototype.click_videodraw = function () {
        var _this = this;
        if (Info_1.UserInfo.luckyVideoWatchCount >= LuckyDialog_1.MaxVideoCount) {
            if (g.isNextDay(Info_1.UserInfo.luckyVideoWatchTime)) {
                Info_1.UserInfo.luckyVideoWatchCount = 0;
                Info_1.UserInfo.luckyVideoWatchTime = new Date().getTime();
            }
            else {
                // Platform.share(_=>{
                //     this.startDraw()
                // })
                return;
            }
        }
        else {
            Platform_1.default.watch_video(function (_) {
                Info_1.UserInfo.luckyVideoWatchCount++;
                _this.startDraw();
            });
        }
        //video 流量主开通后
        // Platform.watch_video(_=>{
        //     this.startDraw()
        //     UserInfo.luckyVideoWatchCount += 1;
        //     UserInfo.save();
        //     this.onShown()
        //     // Toast.make("还剩" +  (5- UserInfo.luckyVideoWatchCount) +"次机会")
        // });
    };
    LuckyDialog.prototype.calculateAngle = function (index) {
        var angle = -(index - 1) * 60 - 30 - 4 * 360 - this.wheelSp.node.rotation % 360;
        return angle;
    };
    LuckyDialog.prototype.onShown = function () {
        if (Info_1.UserInfo.luckyVideoWatchCount >= LuckyDialog_1.MaxVideoCount) {
            switch (LanguageManager_1.default.instance.currentLanguage) {
                case LanguageManager_1.LanguageMode.CN:
                    this.drawLabel.string = '已用完';
                    this.drawLabel.fontSize = this.ch_FontSize;
                    break;
                case LanguageManager_1.LanguageMode.VI:
                    this.drawLabel.string = 'Kiệt sức';
                    this.drawLabel.fontSize = this.vi_FontSize;
                    break;
                case LanguageManager_1.LanguageMode.EN:
                    this.drawLabel.string = 'Exhausted';
                    this.drawLabel.fontSize = this.eng_FontSize;
                    break;
            }
            UIFunctions_1.default.setButtonEnabled(this.btn_videodraw, false);
        }
        else {
            switch (LanguageManager_1.default.instance.currentLanguage) {
                case LanguageManager_1.LanguageMode.CN:
                    this.drawLabel.string = '看视频抽奖';
                    this.drawLabel.fontSize = this.ch_FontSize;
                    break;
                case LanguageManager_1.LanguageMode.VI:
                    this.drawLabel.string = 'Xem video và giành giải thưởng';
                    this.drawLabel.fontSize = this.vi_FontSize;
                    break;
                case LanguageManager_1.LanguageMode.EN:
                    this.drawLabel.string = 'Watch the video and win the prize';
                    this.drawLabel.fontSize = this.eng_FontSize;
                    break;
            }
            UIFunctions_1.default.setButtonEnabled(this.btn_videodraw, true);
        }
        if (g.isGreaterDate(new Date(), new Date(Info_1.UserInfo.freedrawTime))) {
            //free draw 
            this.btn_freedraw.interactable = true;
            this.btn_freedraw.node.opacity = 255;
            this.freedrawTip.active = false;
        }
        else {
            this.btn_freedraw.interactable = false;
            this.btn_freedraw.node.opacity = 100;
            this.freedrawTip.active = true;
        }
        for (var i = 0; i < Res_1.R.luckyConfig.json.length; i++) {
            var cfg = Res_1.R.luckyConfig.json[i];
            this.labels[i].string = cfg.gold_reward + "";
            if (this.sprites[i].spriteFrame == this.misterySp) {
            }
        }
        switch (LanguageManager_1.default.instance.currentLanguage) {
            case LanguageManager_1.LanguageMode.CN:
                this.labels[2].string = '神秘皮肤';
                this.labels[2].fontSize = this.ch_FontSize;
                break;
            case LanguageManager_1.LanguageMode.VI:
                this.labels[2].string = 'Trang phục bí ẩn';
                this.labels[2].fontSize = this.vi_FontSize;
                break;
            case LanguageManager_1.LanguageMode.EN:
                this.labels[2].string = 'Mysterious Skin';
                this.labels[2].fontSize = this.eng_FontSize;
                break;
        }
    };
    LuckyDialog.prototype.startWheel = function (id) {
        console.log("target wheel:", id);
        var angle = this.calculateAngle(id);
        if (!this._canRotate) {
            ToastManager_1.Toast.make(this.startWheelMessage + '...');
            return;
        }
        this._canRotate = false;
        var stage3 = cc.rotateBy(Math.abs(angle / 400), angle);
        var callFunc = cc.callFunc(function () {
            this._canRotate = true;
            this.showRes(id);
        }.bind(this));
        var sequence = cc.sequence(stage3, callFunc);
        this.wheelSp.node.runAction(sequence.easing(cc.easeQuadraticActionInOut()));
    };
    LuckyDialog.prototype.showRes = function (id) {
        var cfg = Res_1.R.luckyConfig.json[id];
        var gold = !isNaN((Number(cfg.gold_reward)));
        if (gold) {
            this.getComponent(View_1.default).hide();
            ViewManager_1.default.instance.show("Game/GetDialog", cfg.gold_reward);
        }
        else {
            //神秘
            ToastManager_1.Toast.make(this.showResMessage + " " + cfg.gold_reward);
            Info_1.UserInfo.unlock(g.randomInt(0, 6));
            // Device.playEffect(R.audio_unlock);
        }
    };
    LuckyDialog.prototype.set_label_lang = function (clickCloseMessage_text, startWheelMessage_text, showResMessage_text, freeDrawString, watchVideoString, bannerString) {
        this.clickCloseMessage = clickCloseMessage_text;
        this.startWheelMessage = startWheelMessage_text;
        this.showResMessage = showResMessage_text;
        this.freeDrawLabel.string = freeDrawString;
        this.watchVideoLabel.string = watchVideoString;
        this.bannerLabel.string = bannerString;
    };
    LuckyDialog.prototype.click_close = function () {
        if (!this._canRotate) {
            ToastManager_1.Toast.make(this.clickCloseMessage + '...');
            return;
        }
        this.getComponent(View_1.default).hide();
    };
    var LuckyDialog_1;
    LuckyDialog.MaxVideoCount = 5;
    __decorate([
        property(cc.Sprite)
    ], LuckyDialog.prototype, "wheelSp", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LuckyDialog.prototype, "misterySp", void 0);
    __decorate([
        property([cc.Sprite])
    ], LuckyDialog.prototype, "sprites", void 0);
    __decorate([
        property([cc.Label])
    ], LuckyDialog.prototype, "labels", void 0);
    __decorate([
        property(cc.Button)
    ], LuckyDialog.prototype, "btn_freedraw", void 0);
    __decorate([
        property(cc.Button)
    ], LuckyDialog.prototype, "btn_videodraw", void 0);
    __decorate([
        property(cc.Node)
    ], LuckyDialog.prototype, "freedrawTip", void 0);
    __decorate([
        property(cc.Label)
    ], LuckyDialog.prototype, "drawLabel", void 0);
    __decorate([
        property(cc.Label)
    ], LuckyDialog.prototype, "freeDrawLabel", void 0);
    __decorate([
        property(cc.Label)
    ], LuckyDialog.prototype, "watchVideoLabel", void 0);
    __decorate([
        property(cc.Label)
    ], LuckyDialog.prototype, "bannerLabel", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], LuckyDialog.prototype, "ch_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], LuckyDialog.prototype, "vi_FontSize", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], LuckyDialog.prototype, "eng_FontSize", void 0);
    LuckyDialog = LuckyDialog_1 = __decorate([
        ccclass
    ], LuckyDialog);
    return LuckyDialog;
}(cc.Component));
exports.default = LuckyDialog;

cc._RF.pop();