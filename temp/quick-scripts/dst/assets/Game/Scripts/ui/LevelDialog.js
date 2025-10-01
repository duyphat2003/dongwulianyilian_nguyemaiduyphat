
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/LevelDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXExldmVsRGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQyxnQ0FBbUM7QUFDcEMsd0ZBQW1GO0FBQ25GLHNEQUFtRTtBQUU3RCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQW9HQztRQTVGRyxtQkFBYSxHQUFhLElBQUksQ0FBQztRQUcvQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFFckMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBRXJDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUlyQyxpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6QixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6QixrQkFBWSxHQUFXLEVBQUUsQ0FBQzs7SUEwRTlCLENBQUM7SUFsR0csNEJBQU0sR0FBTixjQUFXLENBQUM7SUFDWiwyQkFBSyxHQUFMLGNBQVUsQ0FBQztJQXlCWCw4QkFBUSxHQUFSO1FBQ0ksUUFBUSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7WUFDOUMsS0FBSyw4QkFBWSxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUN0QixJQUFJLENBQUMsYUFBYSxDQUNyQixDQUFDO2dCQUNGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRTFDLE1BQU07WUFDVixLQUFLLDhCQUFZLENBQUMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FDckIsQ0FBQztnQkFDRixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUUxQyxNQUFNO1lBQ1YsS0FBSyw4QkFBWSxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQ25DLElBQUksQ0FBQyxhQUFhLENBQ3JCLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFM0MsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFBZSxtQkFBMkIsRUFDdkMsZUFBK0I7UUFFOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO0lBQ2xELENBQUM7SUFFRCx3Q0FBa0IsR0FBbEIsVUFBbUIsUUFBZ0I7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNDLENBQUM7SUFFRCw2QkFBTyxHQUFQO1FBRUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsZUFBUSxDQUFDLEtBQUssQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRXZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUVJLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLE1BQU07UUFHZixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRUQsc0NBQWdCLEdBQWhCLFVBQWlCLElBQUk7SUFFckIsQ0FBQztJQUVELCtCQUFTLEdBQVQsVUFBVSxFQUFFO1FBRVIsRUFBRSxHQUFJLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBSSxFQUFFLENBQUMsQ0FBQztRQUNqQyxlQUFRLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUMzQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUVJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUE5RkQ7UUFEQyxRQUFRLENBQUMsdUJBQWEsQ0FBQztpREFDQTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNZO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztzREFDWTtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3NEQUNZO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ1k7SUFJckM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO29EQUNOO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvREFDTjtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7cURBQ0w7SUExQlQsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQW9HL0I7SUFBRCxrQkFBQztDQXBHRCxBQW9HQyxDQXBHd0MsRUFBRSxDQUFDLFNBQVMsR0FvR3BEO2tCQXBHb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uL0luZm9cIjtcclxuaW1wb3J0IExldmVsU2VsZWN0b3IgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9wbHVnaW5fYm9vc3RzL3VpL2dhbWUvTGV2ZWxTZWxlY3RvclwiO1xyXG5pbXBvcnQgTGFuZ3VhZ2VNYW5hZ2VyLCB7IExhbmd1YWdlTW9kZSB9IGZyb20gXCIuLi9MYW5ndWFnZU1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxEaWFsb2cgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCAoKSB7fVxyXG4gICAgc3RhcnQgKCkge31cclxuICAgIEBwcm9wZXJ0eShMZXZlbFNlbGVjdG9yKVxyXG4gICAgc2VsZWN0b3I6IExldmVsU2VsZWN0b3I7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgY29udGludWVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBsb2dvU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGxvZ29TcHJpdGVfY2g6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGxvZ29TcHJpdGVfdmk6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIGxvZ29TcHJpdGVfZW46IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgY2hfRm9udFNpemU6IG51bWJlciA9IDI1O1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgdmlfRm9udFNpemU6IG51bWJlciA9IDE2O1xyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgZW5nX0ZvbnRTaXplOiBudW1iZXIgPSAyMDtcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBzd2l0Y2ggKExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50TGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuQ046XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9sYW5nKFwi57un57ut5ri45oiPXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dvU3ByaXRlX2NoLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX0ZvbnRTaXplKHRoaXMuY2hfRm9udFNpemUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExhbmd1YWdlTW9kZS5WSTpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX2xhbmcoXCJUaeG6v3AgdOG7pWMgdHLDsiBjaMahaVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nb1Nwcml0ZV92aSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9Gb250U2l6ZSh0aGlzLnZpX0ZvbnRTaXplKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuRU46XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9sYW5nKFwiQ29udGludWUgdGhlIGdhbWVcIixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ29TcHJpdGVfZW4sXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfRm9udFNpemUodGhpcy5lbmdfRm9udFNpemUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRfbGFiZWxfbGFuZyhjb250aW51ZUxhYmVsU3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICBsb2dvU3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5jb250aW51ZUxhYmVsLnN0cmluZyA9IGNvbnRpbnVlTGFiZWxTdHJpbmc7XHJcbiAgICAgICAgdGhpcy5sb2dvU3ByaXRlLnNwcml0ZUZyYW1lID0gbG9nb1Nwcml0ZUZyYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldF9sYWJlbF9Gb250U2l6ZShmb250U2l6ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250aW51ZUxhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93bigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5jdXJyZW50TGV2ZWwgPSBVc2VySW5mby5sZXZlbDtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yLnJlZnJlc2goKVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLnJlZnJlc2hMZXZlbHMsIDAuMSlcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoTGV2ZWxzKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yLnNjcm9sbFRvQ3VycmVudExldmVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0X2xldmVsKGx2bm9kZSlcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmdvdG9MZXZlbChsdm5vZGUubmFtZSlcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoTGV2ZWxJdGVtKGRhdGEpXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgZ290b0xldmVsKGx2KVxyXG4gICAge1xyXG4gICAgICAgIGx2ID0gIHBhcnNlSW50KGx2KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXIgbGV2ZWxcIiAgLCBsdik7XHJcbiAgICAgICAgVXNlckluZm8uY3VycmVudExldmVsID0gbHY7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVwiKVxyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrX2NvbnRpbnVlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdvdG9MZXZlbChVc2VySW5mby5sZXZlbClcclxuICAgIH1cclxufSJdfQ==