
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/GetDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXEdldERpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUMsaUVBQTREO0FBQzdELGdDQUErQztBQUcvQywrRUFBMEU7QUFFMUUsd0RBQW1EO0FBQ25ELHNEQUFtRTtBQUU3RCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXdJQztRQWxHRyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5Qix3QkFBa0IsR0FBYSxJQUFJLENBQUM7UUFFcEMsV0FBSyxHQUFVLENBQUMsQ0FBQztRQUdqQixnQkFBVSxHQUFZLElBQUksQ0FBQzs7SUFvRi9CLENBQUM7SUF0SUcsMEJBQU0sR0FBTixjQUFXLENBQUM7SUFDWix5QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDRCQUFRLEdBQVI7UUFDSSxRQUFRLHlCQUFlLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTtZQUM5QyxLQUFLLDhCQUFZLENBQUMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQzdCLE1BQU0sRUFDTixJQUFJLEVBQ0osTUFBTSxDQUNULENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDMUMsTUFBTTtZQUNWLEtBQUssOEJBQVksQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLHNDQUFzQyxFQUN0RCxhQUFhLEVBQ2IsV0FBVyxFQUNYLGtCQUFrQixDQUNyQixDQUFDO2dCQUNGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzFDLE1BQU07WUFDVixL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RUksSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixlQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQTtRQUNoQyxlQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDZix5Q0FBeUM7UUFDekMscUJBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUE7SUFDakQsQ0FBQztJQWpHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNVO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ1c7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDVztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lEQUNpQjtJQUtwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBZTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztrREFDWDtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7a0RBQ1g7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO21EQUNWO0lBdkVKLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F3STdCO0lBQUQsZ0JBQUM7Q0F4SUQsQUF3SUMsQ0F4SXNDLEVBQUUsQ0FBQyxTQUFTLEdBd0lsRDtrQkF4SW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQgVmlldyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3BsdWdpbl9ib29zdHMvdWkvVmlld1wiO1xyXG5pbXBvcnQgeyBVc2VySW5mbywgQ2hvaWNlVHlwZSB9IGZyb20gXCIuLi9JbmZvXCI7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL3VpL1RvYXN0TWFuYWdlclwiO1xyXG5pbXBvcnQgTHVja3lEaWFsb2cgZnJvbSBcIi4vTHVja3lEaWFsb2dcIjtcclxuaW1wb3J0IFZpZXdNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy91aS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgRGV2aWNlIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy9nYW1lc3lzL0RldmljZVwiO1xyXG5pbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9QbGF0Zm9ybVwiO1xyXG5pbXBvcnQgTGFuZ3VhZ2VNYW5hZ2VyLCB7IExhbmd1YWdlTW9kZSB9IGZyb20gXCIuLi9MYW5ndWFnZU1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2V0RGlhbG9nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQgKCkge31cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBzd2l0Y2ggKExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50TGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuQ046XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9sYW5nKFwiPSAgIOaBreWWnOiOt+W+lyAgPVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi6ZK755+zIHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcIumihuWPllwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwi5Y+M5YCN6aKG5Y+WXCIsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfRm9udFNpemUodGhpcy5jaF9Gb250U2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuVkk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9sYW5nKFwiPSBYaW4gY2jDumMgbeG7q25nIGLhuqFuIMSRw6MgY2hp4bq/biB0aOG6r25nID1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIktpbSBjxrDGoW5nIHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcIk5o4bqtbiDEkcaw4bujY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTmjDom4gxJHDtGkgc+G7kSB0aeG7gW5cIixcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9Gb250U2l6ZSh0aGlzLnZpX0ZvbnRTaXplKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5FTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX2xhbmcoXCI9IENvbmdyYXR1bGF0aW9ucyBvbiB3aW5uaW5nID1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIkRpYW1vbmQgeFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUmVjZWl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRG91YmxlIHRoZSBhbW91bnRcIixcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9Gb250U2l6ZSh0aGlzLmVuZ19Gb250U2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGJhbm5lckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZGlhbW9uZExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcmVjZWl2ZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcmVjZWl2ZURvdWJsZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgY291bnQ6bnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vZGVfY2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBzZXRfbGFiZWxfbGFuZyhiYW5uZXJTdHJpbmc6IHN0cmluZyxcclxuICAgICAgICBkaWFtb25kU3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgcmVjZWl2ZVN0cmluZzogc3RyaW5nLFxyXG4gICAgICAgIHJlY2VpdmVEb3VibGVTdHJpbmc6IHN0cmluZyxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuYmFubmVyTGFiZWwuc3RyaW5nID0gYmFubmVyU3RyaW5nO1xyXG4gICAgICAgIHRoaXMuZGlhbW9uZExhYmVsLnN0cmluZyA9IGRpYW1vbmRTdHJpbmc7XHJcbiAgICAgICAgdGhpcy5yZWNlaXZlTGFiZWwuc3RyaW5nID0gcmVjZWl2ZVN0cmluZztcclxuICAgICAgICB0aGlzLnJlY2VpdmVEb3VibGVMYWJlbC5zdHJpbmcgPSByZWNlaXZlRG91YmxlU3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcclxuICAgIGNoX0ZvbnRTaXplOiBudW1iZXI7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyIH0pXHJcbiAgICB2aV9Gb250U2l6ZTogbnVtYmVyO1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgZW5nX0ZvbnRTaXplOiBudW1iZXI7XHJcblxyXG4gICAgc2V0X2xhYmVsX0ZvbnRTaXplKGZvbnRTaXplOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmJhbm5lckxhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICAgICAgdGhpcy5kaWFtb25kTGFiZWwuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgICAgICB0aGlzLnJlY2VpdmVMYWJlbC5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgICAgIHRoaXMucmVjZWl2ZURvdWJsZUxhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgc2hhcmVfc3VjKClcclxuICAgIHtcclxuICAgICAgICBVc2VySW5mby5hZGREaWFtb25kKHRoaXMuY291bnQgKiAyIClcclxuICAgICAgICBVc2VySW5mby5zYXZlKCk7XHJcbiAgICAgICAgLy8gRGV2aWNlLnBsYXlFZmZlY3QoUi5hdWRpb19nZXRfZGlhbW9uZClcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChWaWV3KS5oaWRlKCk7XHJcbiAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2Uuc2hvdyhcIkdhbWUvTHVja3lEaWFsb2dcIilcclxuICAgIH1cclxuXHJcbiAgICBjbGlja19kb3VibGUoKVxyXG4gICAge1xyXG4gICAgICAgIC8vc2hhcmUgXHJcbiAgICAgICAgLy9pZiBzaGFyZSBzdWMgXHJcbiAgICAgICAgLy8gdGhpcy5zaGFyZV9zdWMoKVxyXG4gICAgICAgIGxldCBjaG9pY2UgPSBVc2VySW5mby5nZXRDaG9pY2UoQ2hvaWNlVHlwZS5HZXQpXHJcbiAgICAgICAgaWYoY2hvaWNlID09IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBQbGF0Zm9ybS5zaGFyZSh0aGlzLnNoYXJlX3N1YywgdGhpcyk7IFxyXG4gICAgICAgICAgICBjYy5sb2coXCJQbGF0Zm9ybS5zaGFyZSh0aGlzLnNoYXJlX3N1YywgdGhpcylcIik7XHJcblxyXG4gICAgICAgIH1lbHNlIGlmKGNob2ljZSA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zaGFyZV9zdWMoKTtcclxuICAgICAgICAgICAgY2MubG9nKFwiIHRoaXMuc2hhcmVfc3VjKClcIik7XHJcblxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgLy92aWRlb1xcXHJcbiAgICAgICAgICAgIFBsYXRmb3JtLndhdGNoX3ZpZGVvKHRoaXMuc2hhcmVfc3VjLCB0aGlzKVxyXG4gICAgICAgICAgICBjYy5sb2coXCJQbGF0Zm9ybS53YXRjaF92aWRlbyh0aGlzLnNoYXJlX3N1YywgdGhpcylcIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNob3duKGNvdW50KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcclxuICAgICAgICAvLyBTcHJpdGVGcmFtZUNhY2hlLmluc3RhbmNlLmdldFNwcml0ZUZyYW1lKFwiR2FtZS90ZXh0dXJlcy9jYXIvXCIgKyBjZmcuaW1nKS50aGVuKHNmPT50aGlzLmljb24uc3ByaXRlRnJhbWU9IHNmKTtcclxuICAgICAgICB0aGlzLmRpYW1vbmRMYWJlbC5zdHJpbmcgPSAgXCIrXCIgKyBjb3VudDtcclxuICAgICAgICB0aGlzLm5vZGVfY2xvc2UuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5kZWxheVNob3cpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5kZWxheVNob3csMilcclxuICAgIH1cclxuXHJcbiAgICBkZWxheVNob3coKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm9kZV9jbG9zZS5hY3RpdmUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tfbm8oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KFZpZXcpLmhpZGUoKTtcclxuICAgICAgICBVc2VySW5mby5hZGREaWFtb25kKHRoaXMuY291bnQgKVxyXG4gICAgICAgIFVzZXJJbmZvLnNhdmUoKVxyXG4gICAgICAgIC8vIERldmljZS5wbGF5RWZmZWN0KFIuYXVkaW9fZ2V0X2RpYW1vbmQpXHJcbiAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2Uuc2hvdyhcIkdhbWUvTHVja3lEaWFsb2dcIilcclxuICAgIH1cclxufSJdfQ==