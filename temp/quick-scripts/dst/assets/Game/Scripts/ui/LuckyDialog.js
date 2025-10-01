
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/LuckyDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXEx1Y2t5RGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRkFBeUU7QUFDekUsK0VBQTBFO0FBQzFFLGlFQUE0RDtBQUM1RCxnQ0FBbUM7QUFDbkMsd0RBQW1EO0FBQ25ELDBFQUFxRTtBQUNyRSw2Q0FBMEM7QUFDMUMsK0VBQTBFO0FBQzFFLGdDQUEyQjtBQUMzQixzREFBbUU7QUFHN0QsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFxVEM7UUF6UUcsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFHbEIsYUFBTyxHQUFlLEVBQUUsQ0FBQTtRQUd4QixZQUFNLEdBQWMsRUFBRSxDQUFBO1FBR3RCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRzlCLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRy9CLGlCQUFXLEdBQVcsSUFBSSxDQUFDO1FBSTNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFJNUIsZUFBZTtRQUNmLElBQUk7UUFFSixJQUFJO1FBR0osaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFRekIsVUFBSSxHQUFHLEVBQUUsQ0FBQTtRQXlKVCx1QkFBaUIsR0FBVyxFQUFFLENBQUM7UUFDL0Isb0JBQWMsR0FBVyxFQUFFLENBQUM7O0lBZ0VoQyxDQUFDO29CQXJUb0IsV0FBVztJQUc1Qiw4QkFBUSxHQUFSO1FBQ1EsUUFBUSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7WUFDbEQsS0FBSyw4QkFB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QUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1M7SUFJM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNXO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0RBQ2E7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDUztJQVU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7b0RBQ1A7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO29EQUNQO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztxREFDTjtJQW5GUixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBcVQvQjtJQUFELGtCQUFDO0NBclRELEFBcVRDLENBclR3QyxFQUFFLENBQUMsU0FBUyxHQXFUcEQ7a0JBclRvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3BsdWdpbl9ib29zdHMvdWkvVG9hc3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBWaWV3TWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3BsdWdpbl9ib29zdHMvdWkvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL3VpL1ZpZXdcIjtcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi4vSW5mb1wiO1xyXG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9QbGF0Zm9ybVwiO1xyXG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy9nYW1lc3lzL0RldmljZVwiO1xyXG5pbXBvcnQgeyBSIH0gZnJvbSBcIi4uL2hleC1saW5lcy1nYW1lL1Jlc1wiO1xyXG5pbXBvcnQgVUlGdW5jdGlvbnMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL3VpL1VJRnVuY3Rpb25zXCI7XHJcbmltcG9ydCBNYWluIGZyb20gXCIuLi9NYWluXCI7XHJcbmltcG9ydCBMYW5ndWFnZU1hbmFnZXIsIHsgTGFuZ3VhZ2VNb2RlIH0gZnJvbSBcIi4uL0xhbmd1YWdlTWFuYWdlclwiO1xyXG5pbXBvcnQgQWRkVG9NeUZhdiBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3d4c2RrL0FkZFRvTXlGYXZcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTHVja3lEaWFsb2cgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChMYW5ndWFnZU1hbmFnZXIuaW5zdGFuY2UuY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLkNOOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfbGFuZygn5q2j5Zyo57uZ5oKo5oyR6YCJ5aWW5ZOBJyxcclxuICAgICAgICAgICAgICAgICAgICAn5q2j5Zyo57uZ5oKo5oyR6YCJ5aWW5ZOBJyxcclxuICAgICAgICAgICAgICAgICAgICAn5oGt5Zac5L2g5oq95Lit5LqGJyxcclxuICAgICAgICAgICAgICAgICAgICBcIuWFjei0ueS4gOasoVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi6KeC55yL6KeG6aKRXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCLlubjov5Dovaznm5hcIixcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX0ZvbnRTaXplKHRoaXMuY2hfRm9udFNpemUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLlZJOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfbGFuZyggJ0No4buNbiBnaeG6o2kgdGjGsOG7n25nIGNobyBi4bqhbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0No4buNbiBnaeG6o2kgdGjGsOG7n25nIGNobyBi4bqhbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1hpbiBjaMO6YyBt4burbmcgY2hp4bq/biB0aOG6r25nJyxcclxuICAgICAgICAgICAgICAgICAgICBcIk1p4buFbiBwaMOtIG3hu5l0IGzhuqduXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYZW0gdmlkZW9cIixcclxuICAgICAgICAgICAgICAgICAgICBcIlbDsm5nIHF1YXkgbWF5IG3huq9uXCIsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX0ZvbnRTaXplKHRoaXMudmlfRm9udFNpemUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLkVOOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfbGFuZygnU2VsZWN0aW5nIHByaXplcyBmb3IgeW91JyxcclxuICAgICAgICAgICAgICAgICAgICAnU2VsZWN0aW5nIHByaXplcyBmb3IgeW91JyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZ3JhdHVsYXRpb25zIG9uIHdpbm5pbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRnJlZSBvbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJXYXRjaCB0aGUgdmlkZW9cIixcclxuICAgICAgICAgICAgICAgICAgICBcIkx1Y2t5IFdoZWVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9Gb250U2l6ZSh0aGlzLmVuZ19Gb250U2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHdoZWVsU3A6IGNjLlNwcml0ZVxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIG1pc3RlcnlTcDogY2MuU3ByaXRlRnJhbWVcclxuXHJcbiAgICBfY2FuUm90YXRlID0gdHJ1ZTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZV0pXHJcbiAgICBzcHJpdGVzOmNjLlNwcml0ZVtdID0gW11cclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLkxhYmVsXSlcclxuICAgIGxhYmVsczpjYy5MYWJlbFtdID0gW11cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYnRuX2ZyZWVkcmF3OmNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ0bl92aWRlb2RyYXc6Y2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZyZWVkcmF3VGlwOmNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBkcmF3TGFiZWw6Y2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZnJlZURyYXdMYWJlbDpjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB3YXRjaFZpZGVvTGFiZWw6Y2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYmFubmVyTGFiZWw6Y2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHN0YXRpYyBNYXhWaWRlb0NvdW50ID0gNTtcclxuXHJcbiAgICAvLyBjbGlja19kcmF3KClcclxuICAgIC8vIHtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgY2hfRm9udFNpemU6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyIH0pXHJcbiAgICB2aV9Gb250U2l6ZTogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcclxuICAgIGVuZ19Gb250U2l6ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzZXRfbGFiZWxfRm9udFNpemUoZm9udFNpemU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZnJlZURyYXdMYWJlbC5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgICAgIHRoaXMud2F0Y2hWaWRlb0xhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICAgICAgdGhpcy5iYW5uZXJMYWJlbC5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHBvb2wgPSBbXVxyXG4gICAgXHJcblxyXG4gICAgc2hhcmVfc3VjYygpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zdGFydERyYXcoKTtcclxuICAgICAgICBVc2VySW5mby5mcmVlZHJhd1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICAgIFVzZXJJbmZvLnNhdmUoKVxyXG4gICAgICAgIE1haW4uaW5zdGFuY2UucmVmcmVzaFJlZHBvaW50cygpXHJcbiAgICAgICAgdGhpcy5vblNob3duKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfZnJlZWVkcmF3KClcclxuICAgIHtcclxuICAgICAgICBpZiAoZy5pc05leHREYXkoVXNlckluZm8uZnJlZWRyYXdUaW1lKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhcmVfc3VjYygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAgO2kgPCBSLmx1Y2t5Q29uZmlnLmpzb24ubGVuZ3RoOyBpICsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGNmZyA9IFIubHVja3lDb25maWcuanNvbltpXTtcclxuICAgICAgICAgICAgbGV0IGNoYW5jZSA9IHBhcnNlRmxvYXQoY2ZnLmNoYW5jZSlcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAgOyBqIDwgY2hhbmNlICogMiA7IGorKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb29sLnB1c2goaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb29sLnNodWZmbGUoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9vbCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXJ0RHJhdygpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGlkID0gZy5nZXRSYW5kb21JbkFycmF5KHRoaXMucG9vbClcclxuICAgICAgICB0aGlzLnN0YXJ0V2hlZWwoaWQpXHJcbiAgICAgICAgRGV2aWNlLnBsYXlFZmZlY3QoUi5hdWRpb19kcmF3KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA15qyhXHJcbiAgICBjbGlja192aWRlb2RyYXcoKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChVc2VySW5mby5sdWNreVZpZGVvV2F0Y2hDb3VudCA+PSBMdWNreURpYWxvZy5NYXhWaWRlb0NvdW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoZy5pc05leHREYXkoVXNlckluZm8ubHVja3lWaWRlb1dhdGNoVGltZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLmx1Y2t5VmlkZW9XYXRjaENvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLmx1Y2t5VmlkZW9XYXRjaFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyBQbGF0Zm9ybS5zaGFyZShfPT57XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zdGFydERyYXcoKVxyXG4gICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBQbGF0Zm9ybS53YXRjaF92aWRlbyhfPT57XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5sdWNreVZpZGVvV2F0Y2hDb3VudCArKyBcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREcmF3KClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy92aWRlbyDmtYHph4/kuLvlvIDpgJrlkI5cclxuICAgICAgICAvLyBQbGF0Zm9ybS53YXRjaF92aWRlbyhfPT57XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc3RhcnREcmF3KClcclxuICAgICAgICAvLyAgICAgVXNlckluZm8ubHVja3lWaWRlb1dhdGNoQ291bnQgKz0gMTtcclxuICAgICAgICAvLyAgICAgVXNlckluZm8uc2F2ZSgpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm9uU2hvd24oKVxyXG4gICAgICAgIC8vICAgICAvLyBUb2FzdC5tYWtlKFwi6L+Y5YmpXCIgKyAgKDUtIFVzZXJJbmZvLmx1Y2t5VmlkZW9XYXRjaENvdW50KSArXCLmrKHmnLrkvJpcIilcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2FsY3VsYXRlQW5nbGUoaW5kZXg6bnVtYmVyKXsvL+WlluWTgeeahGluZGV45LuOMOW8gOWni1xyXG4gICAgICAgIGxldCBhbmdsZSA9IC0oaW5kZXgtMSkgKiA2MCAtIDMwICAtICA0ICogMzYwIC0gIHRoaXMud2hlZWxTcC5ub2RlLnJvdGF0aW9uICUzNjAgXHJcbiAgICAgICAgcmV0dXJuIGFuZ2xlXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93bigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLmx1Y2t5VmlkZW9XYXRjaENvdW50ID49ICBMdWNreURpYWxvZy5NYXhWaWRlb0NvdW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3dpdGNoIChMYW5ndWFnZU1hbmFnZXIuaW5zdGFuY2UuY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5DTjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdMYWJlbC5zdHJpbmcgPSAn5bey55So5a6MJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdMYWJlbC5mb250U2l6ZSA9IHRoaXMuY2hfRm9udFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5WSTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdMYWJlbC5zdHJpbmcgPSAnS2nhu4d0IHPhu6ljJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdMYWJlbC5mb250U2l6ZSA9IHRoaXMudmlfRm9udFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5FTjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdMYWJlbC5zdHJpbmcgPSAnRXhoYXVzdGVkJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdMYWJlbC5mb250U2l6ZSA9IHRoaXMuZW5nX0ZvbnRTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFVJRnVuY3Rpb25zLnNldEJ1dHRvbkVuYWJsZWQodGhpcy5idG5fdmlkZW9kcmF3LGZhbHNlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLmN1cnJlbnRMYW5ndWFnZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuQ046XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TGFiZWwuc3RyaW5nID0gJ+eci+inhumikeaKveWllic7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TGFiZWwuZm9udFNpemUgPSB0aGlzLmNoX0ZvbnRTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuVkk6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TGFiZWwuc3RyaW5nID0gJ1hlbSB2aWRlbyB2w6AgZ2nDoG5oIGdp4bqjaSB0aMaw4bufbmcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0xhYmVsLmZvbnRTaXplID0gdGhpcy52aV9Gb250U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLkVOOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0xhYmVsLnN0cmluZyA9ICdXYXRjaCB0aGUgdmlkZW8gYW5kIHdpbiB0aGUgcHJpemUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0xhYmVsLmZvbnRTaXplID0gdGhpcy5lbmdfRm9udFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVUlGdW5jdGlvbnMuc2V0QnV0dG9uRW5hYmxlZCh0aGlzLmJ0bl92aWRlb2RyYXcsdHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGcuaXNHcmVhdGVyRGF0ZShuZXcgRGF0ZSgpLCAgbmV3IERhdGUoVXNlckluZm8uZnJlZWRyYXdUaW1lKSkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9mcmVlIGRyYXcgXHJcbiAgICAgICAgICAgIHRoaXMuYnRuX2ZyZWVkcmF3LmludGVyYWN0YWJsZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5idG5fZnJlZWRyYXcubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmZyZWVkcmF3VGlwLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX2ZyZWVkcmF3LmludGVyYWN0YWJsZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuYnRuX2ZyZWVkcmF3Lm5vZGUub3BhY2l0eSA9IDEwMDtcclxuICAgICAgICAgICAgdGhpcy5mcmVlZHJhd1RpcC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAgOyBpPCBSLmx1Y2t5Q29uZmlnLmpzb24ubGVuZ3RoOyBpICsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNmZyA9IFIubHVja3lDb25maWcuanNvbltpXVxyXG4gICAgICAgICAgICB0aGlzLmxhYmVsc1tpXS5zdHJpbmcgPSBjZmcuZ29sZF9yZXdhcmQgKyBcIlwiXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLnNwcml0ZUZyYW1lID09IHRoaXMubWlzdGVyeVNwKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoTGFuZ3VhZ2VNYW5hZ2VyLmluc3RhbmNlLmN1cnJlbnRMYW5ndWFnZSkge1xyXG4gICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5DTjpcclxuICAgICAgICAgICAgICAgIHRoaXMubGFiZWxzWzJdLnN0cmluZyA9ICfnpZ7np5jnmq7ogqQnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbHNbMl0uZm9udFNpemUgPSB0aGlzLmNoX0ZvbnRTaXplO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLlZJOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbHNbMl0uc3RyaW5nID0gJ1RyYW5nIHBo4bulYyBiw60g4bqpbic7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsc1syXS5mb250U2l6ZSA9IHRoaXMudmlfRm9udFNpemU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuRU46XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsc1syXS5zdHJpbmcgPSAnTXlzdGVyaW91cyBTa2luJztcclxuICAgICAgICAgICAgICAgIHRoaXMubGFiZWxzWzJdLmZvbnRTaXplID0gdGhpcy5lbmdfRm9udFNpemU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0V2hlZWxNZXNzYWdlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgc2hvd1Jlc01lc3NhZ2U6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBzdGFydFdoZWVsKGlkKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFyZ2V0IHdoZWVsOlwiICxpZCk7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5jYWxjdWxhdGVBbmdsZShpZClcclxuICAgICAgICBpZiAoIXRoaXMuX2NhblJvdGF0ZSl7XHJcbiAgICAgICAgICAgIFRvYXN0Lm1ha2UodGhpcy5zdGFydFdoZWVsTWVzc2FnZSArICcuLi4nKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NhblJvdGF0ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIGxldCBzdGFnZTMgPSBjYy5yb3RhdGVCeShNYXRoLmFicyhhbmdsZS80MDApLGFuZ2xlKVxyXG4gICAgICAgIGxldCBjYWxsRnVuYyA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhblJvdGF0ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5zaG93UmVzKGlkKVxyXG4gICAgICAgIH0uYmluZCh0aGlzKSlcclxuICAgICAgICBsZXQgc2VxdWVuY2UgPSBjYy5zZXF1ZW5jZShzdGFnZTMsY2FsbEZ1bmMpXHJcbiAgICAgICAgdGhpcy53aGVlbFNwLm5vZGUucnVuQWN0aW9uKHNlcXVlbmNlLmVhc2luZyhjYy5lYXNlUXVhZHJhdGljQWN0aW9uSW5PdXQoKSkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1JlcyhpZClcclxuICAgIHtcclxuICAgICAgICBsZXQgY2ZnID0gUi5sdWNreUNvbmZpZy5qc29uW2lkXVxyXG4gICAgICAgIGxldCBnb2xkID0gIWlzTmFOKChOdW1iZXIoY2ZnLmdvbGRfcmV3YXJkKSkpXHJcbiAgICAgICAgaWYoZ29sZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KFZpZXcpLmhpZGUoKVxyXG4gICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93KFwiR2FtZS9HZXREaWFsb2dcIixjZmcuZ29sZF9yZXdhcmQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIC8v56We56eYXHJcbiAgICAgICAgICAgIFRvYXN0Lm1ha2UodGhpcy5zaG93UmVzTWVzc2FnZSArIFwiIFwiICsgY2ZnLmdvbGRfcmV3YXJkKTtcclxuICAgICAgICAgICAgVXNlckluZm8udW5sb2NrKGcucmFuZG9tSW50KDAsNikpO1xyXG4gICAgICAgICAgICAvLyBEZXZpY2UucGxheUVmZmVjdChSLmF1ZGlvX3VubG9jayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRfbGFiZWxfbGFuZyhjbGlja0Nsb3NlTWVzc2FnZV90ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgc3RhcnRXaGVlbE1lc3NhZ2VfdGV4dDogc3RyaW5nLFxyXG4gICAgICAgIHNob3dSZXNNZXNzYWdlX3RleHQ6IHN0cmluZyxcclxuICAgICAgICBmcmVlRHJhd1N0cmluZzogc3RyaW5nLFxyXG4gICAgICAgIHdhdGNoVmlkZW9TdHJpbmc6IHN0cmluZyxcclxuICAgICAgICBiYW5uZXJTdHJpbmc6IHN0cmluZyxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY2xpY2tDbG9zZU1lc3NhZ2UgPSBjbGlja0Nsb3NlTWVzc2FnZV90ZXh0O1xyXG4gICAgICAgIHRoaXMuc3RhcnRXaGVlbE1lc3NhZ2UgPSBzdGFydFdoZWVsTWVzc2FnZV90ZXh0O1xyXG4gICAgICAgIHRoaXMuc2hvd1Jlc01lc3NhZ2UgPSBzaG93UmVzTWVzc2FnZV90ZXh0O1xyXG4gICAgICAgIHRoaXMuZnJlZURyYXdMYWJlbC5zdHJpbmcgPSBmcmVlRHJhd1N0cmluZztcclxuICAgICAgICB0aGlzLndhdGNoVmlkZW9MYWJlbC5zdHJpbmcgPSB3YXRjaFZpZGVvU3RyaW5nO1xyXG4gICAgICAgIHRoaXMuYmFubmVyTGFiZWwuc3RyaW5nID0gYmFubmVyU3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrQ2xvc2VNZXNzYWdlOiBzdHJpbmc7IFxyXG4gICAgY2xpY2tfY2xvc2UoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5fY2FuUm90YXRlKXtcclxuICAgICAgICAgICAgVG9hc3QubWFrZSh0aGlzLmNsaWNrQ2xvc2VNZXNzYWdlICsgJy4uLicpO1xyXG4gICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KFZpZXcpLmhpZGUoKVxyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=