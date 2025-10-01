
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXExldmVsRGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQyxnQ0FBbUM7QUFDcEMsd0ZBQW1GO0FBQ25GLHNEQUFtRTtBQUU3RCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQW9HQztRQTVGRyxtQkFBYSxHQUFhLElBQUksQ0FBQztRQUcvQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFFckMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBRXJDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUlyQyxpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6QixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6QixrQkFBWSxHQUFXLEVBQUUsQ0FBQzs7SUEwRTlCLENBQUM7SUFsR0csNEJBQU0sR0FBTixjQUFXLENBQUM7SUFDWiwyQkFBSyxHQUFMLGNBQVUsQ0FBQztJQXlCWCw4QkFBUSxHQUFSO1FBQ0ksUUFBUSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7WUFDOUMsS0FBSyw4QkFBWSxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUN0QixJQUFJLENBQUMsYUFBYSxDQUNyQixDQUFDO2dCQUNGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRTFDLE1BQU07WUFDVixLQUFLLDhCQUFZLENBQUMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FDckIsQ0FBQztnQkFDRixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUUxQyxNQUFNO1lBQ1YsS0FBSyw4QkFBWSxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQ25DLElBQUksQ0FBQyxhQUFhLENBQ3JCLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFM0MsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFBZSxtQkFBMkIsRUFDdkMsZUFBK0I7UUFFOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO0lBQ2xELENBQUM7SUFFRCx3Q0FBa0IsR0FBbEIsVUFBbUIsUUFBZ0I7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNDLENBQUM7SUFFRCw2QkFBTyxHQUFQO1FBRUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsZUFBUSxDQUFDLEtBQUssQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRXZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUVJLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLE1BQU07UUFHZixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRUQsc0NBQWdCLEdBQWhCLFVBQWlCLElBQUk7SUFFckIsQ0FBQztJQUVELCtCQUFTLEdBQVQsVUFBVSxFQUFFO1FBRVIsRUFBRSxHQUFJLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBSSxFQUFFLENBQUMsQ0FBQztRQUNqQyxlQUFRLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUMzQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUVJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUE5RkQ7UUFEQyxRQUFRLENBQUMsdUJBQWEsQ0FBQztpREFDQTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNZO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztzREFDWTtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3NEQUNZO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ1k7SUFJckM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO29EQUNOO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvREFDTjtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7cURBQ0w7SUExQlQsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQW9HL0I7SUFBRCxrQkFBQztDQXBHRCxBQW9HQyxDQXBHd0MsRUFBRSxDQUFDLFNBQVMsR0FvR3BEO2tCQXBHb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uL0luZm9cIjtcbmltcG9ydCBMZXZlbFNlbGVjdG9yIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvcGx1Z2luX2Jvb3N0cy91aS9nYW1lL0xldmVsU2VsZWN0b3JcIjtcbmltcG9ydCBMYW5ndWFnZU1hbmFnZXIsIHsgTGFuZ3VhZ2VNb2RlIH0gZnJvbSBcIi4uL0xhbmd1YWdlTWFuYWdlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsRGlhbG9nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIG9uTG9hZCAoKSB7fVxuICAgIHN0YXJ0ICgpIHt9XG4gICAgQHByb3BlcnR5KExldmVsU2VsZWN0b3IpXG4gICAgc2VsZWN0b3I6IExldmVsU2VsZWN0b3I7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgY29udGludWVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBsb2dvU3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxvZ29TcHJpdGVfY2g6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgbG9nb1Nwcml0ZV92aTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBsb2dvU3ByaXRlX2VuOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcbiAgICBjaF9Gb250U2l6ZTogbnVtYmVyID0gMjU7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxuICAgIHZpX0ZvbnRTaXplOiBudW1iZXIgPSAxNjtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyIH0pXG4gICAgZW5nX0ZvbnRTaXplOiBudW1iZXIgPSAyMDtcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBzd2l0Y2ggKExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50TGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLkNOOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX2xhbmcoXCLnu6fnu63muLjmiI9cIixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dvU3ByaXRlX2NoLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfRm9udFNpemUodGhpcy5jaF9Gb250U2l6ZSk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLlZJOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX2xhbmcoXCJUaeG6v3AgdOG7pWMgdHLDsiBjaMahaVwiLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ29TcHJpdGVfdmksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldF9sYWJlbF9Gb250U2l6ZSh0aGlzLnZpX0ZvbnRTaXplKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuRU46XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfbGFuZyhcIkNvbnRpbnVlIHRoZSBnYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nb1Nwcml0ZV9lbixcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX0ZvbnRTaXplKHRoaXMuZW5nX0ZvbnRTaXplKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0X2xhYmVsX2xhbmcoY29udGludWVMYWJlbFN0cmluZzogc3RyaW5nLFxuICAgICAgIGxvZ29TcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgKSB7XG4gICAgICAgIHRoaXMuY29udGludWVMYWJlbC5zdHJpbmcgPSBjb250aW51ZUxhYmVsU3RyaW5nO1xuICAgICAgICB0aGlzLmxvZ29TcHJpdGUuc3ByaXRlRnJhbWUgPSBsb2dvU3ByaXRlRnJhbWU7XG4gICAgfVxuXG4gICAgc2V0X2xhYmVsX0ZvbnRTaXplKGZvbnRTaXplOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jb250aW51ZUxhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgfVxuXG4gICAgb25TaG93bigpXG4gICAge1xuICAgICAgICB0aGlzLnNlbGVjdG9yLmN1cnJlbnRMZXZlbCA9IFVzZXJJbmZvLmxldmVsO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnJlZnJlc2goKVxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMucmVmcmVzaExldmVscywgMC4xKVxuICAgIH1cblxuICAgIHJlZnJlc2hMZXZlbHMoKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5zY3JvbGxUb0N1cnJlbnRMZXZlbCgpO1xuICAgIH1cblxuICAgIHNlbGVjdF9sZXZlbChsdm5vZGUpXG4gICAge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5nb3RvTGV2ZWwobHZub2RlLm5hbWUpXG4gICAgfVxuXG4gICAgcmVmcmVzaExldmVsSXRlbShkYXRhKVxuICAgIHtcbiAgICB9XG5cbiAgICBnb3RvTGV2ZWwobHYpXG4gICAge1xuICAgICAgICBsdiA9ICBwYXJzZUludChsdilcbiAgICAgICAgY29uc29sZS5sb2coXCJlbnRlciBsZXZlbFwiICAsIGx2KTtcbiAgICAgICAgVXNlckluZm8uY3VycmVudExldmVsID0gbHY7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVcIilcbiAgICB9XG5cbiAgICBjbGlja19jb250aW51ZSgpXG4gICAge1xuICAgICAgICB0aGlzLmdvdG9MZXZlbChVc2VySW5mby5sZXZlbClcbiAgICB9XG59Il19