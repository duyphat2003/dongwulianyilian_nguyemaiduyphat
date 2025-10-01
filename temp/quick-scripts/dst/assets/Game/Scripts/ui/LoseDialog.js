
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/ui/LoseDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdWlcXExvc2VEaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUMsb0JBQW9CO0FBQ3JCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7O0FBRXRGLCtFQUEwRTtBQUMxRSxzREFBbUU7QUFFN0QsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE2RUM7UUExRUcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFhLElBQUksQ0FBQztRQUkzQixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6QixpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6QixrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUcxQixZQUFNLEdBQVEsSUFBSSxDQUFDLENBQUMsc0NBQXNDOztJQTJEOUQsQ0FBQztJQTFERyx1QkFBSSxHQUFKLFVBQUssTUFBVztRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksUUFBUSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7WUFDOUMsS0FBSyw4QkFBWSxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUMxQixJQUFJLEVBQ0osSUFBSSxDQUNQLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDMUMsTUFBTTtZQUNWLEtBQUssOEJBQVksQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLDZCQUE2QixFQUM3QyxVQUFVLEVBQ1YsT0FBTyxDQUNWLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFMUMsTUFBTTtZQUNWLEtBQUssOEJBQVksQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsY0FBYyxDQUNmLDRCQUE0QixFQUM1QixVQUFVLEVBQ1YsSUFBSSxDQUNQLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDM0MsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUdELGlDQUFjLEdBQWQsVUFDSSxnQkFBd0IsRUFDeEIsb0JBQTRCLEVBQzVCLGVBQXVCO1FBRXZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO1FBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLG9CQUFvQixDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQztJQUM1QyxDQUFDO0lBRUQscUNBQWtCLEdBQWxCLFVBQW1CLFFBQWdCO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx3Q0FBcUIsR0FBckI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3pCLHFCQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7SUFDL0QsQ0FBQztJQUVELG9DQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckIscUJBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtJQUMvRCxDQUFDO0lBekVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ1M7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDYTtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNRO0lBSTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpREFDTjtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7aURBQ047SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO2tEQUNMO0lBZlQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTZFNUI7SUFBRCxlQUFDO0NBN0VELEFBNkVDLENBN0VxQyxFQUFFLENBQUMsU0FBUyxHQTZFakQ7a0JBN0VvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsi77u/Ly8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBWaWV3TWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3BsdWdpbl9ib29zdHMvdWkvVmlld01hbmFnZXJcIjtcbmltcG9ydCBMYW5ndWFnZU1hbmFnZXIsIHsgTGFuZ3VhZ2VNb2RlIH0gZnJvbSBcIi4uL0xhbmd1YWdlTWFuYWdlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0aXRsZWxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHBsYXlBZ2FpbmxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGhvbWVsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyIH0pXG4gICAgY2hfRm9udFNpemU6IG51bWJlciA9IDI1O1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcbiAgICB2aV9Gb250U2l6ZTogbnVtYmVyID0gMTY7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuSW50ZWdlciB9KVxuICAgIGVuZ19Gb250U2l6ZTogbnVtYmVyID0gMjA7XG5cblxuICAgIHBhcmFtczogYW55ID0gbnVsbDsgLy8gcmVmZXJlbmNlIGNhbGxiYWNrIGZyb20gVmlld01hbmFnZXJcbiAgICBpbml0KHBhcmFtczogYW55KSB7XG4gICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBzd2l0Y2ggKExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5jdXJyZW50TGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLkNOOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX2xhbmcoXCLkvaDmg7Plho3njqnkuIDmrKHlkJfvvJ9cIixcbiAgICAgICAgICAgICAgICAgICAgXCLnu6fnu61cIixcbiAgICAgICAgICAgICAgICAgICAgXCLkuI3mmK9cIixcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX0ZvbnRTaXplKHRoaXMuY2hfRm9udFNpemUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBMYW5ndWFnZU1vZGUuVkk6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfbGFuZyhcIkLhuqFuIGPDsyBtdeG7kW4gY2jGoWkgbOG6oWkga2jDtG5nP1wiLFxuICAgICAgICAgICAgICAgICAgICBcIlRp4bq/cCB04bulY1wiLFxuICAgICAgICAgICAgICAgICAgICBcIktow7RuZ1wiLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRfbGFiZWxfRm9udFNpemUodGhpcy52aV9Gb250U2l6ZSk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTGFuZ3VhZ2VNb2RlLkVOOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX2xhbmcoXG4gICAgICAgICAgICAgICAgICAgIFwiRG8geW91IHdhbnQgdG8gcGxheSBhZ2Fpbj9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJDb250aW51ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIk5vXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0X2xhYmVsX0ZvbnRTaXplKHRoaXMuZW5nX0ZvbnRTaXplKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc2V0X2xhYmVsX2xhbmcoXG4gICAgICAgIHRpdGxlbGFiZWxTdHJpbmc6IHN0cmluZyxcbiAgICAgICAgcGxheUFnYWlubGFiZWxTdHJpbmc6IHN0cmluZyxcbiAgICAgICAgaG9tZWxhYmVsU3RyaW5nOiBzdHJpbmcsXG4gICAgKSB7XG4gICAgICAgIHRoaXMudGl0bGVsYWJlbC5zdHJpbmcgPSB0aXRsZWxhYmVsU3RyaW5nO1xuICAgICAgICB0aGlzLnBsYXlBZ2FpbmxhYmVsLnN0cmluZyA9IHBsYXlBZ2FpbmxhYmVsU3RyaW5nO1xuICAgICAgICB0aGlzLmhvbWVsYWJlbC5zdHJpbmcgPSBob21lbGFiZWxTdHJpbmc7XG4gICAgfVxuXG4gICAgc2V0X2xhYmVsX0ZvbnRTaXplKGZvbnRTaXplOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50aXRsZWxhYmVsLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgICAgIHRoaXMucGxheUFnYWlubGFiZWwuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICAgICAgdGhpcy5ob21lbGFiZWwuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICB9XG5cbiAgICBvbkNvbnRpbnVlQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMucGFyYW1zLm9uQ29udGludWUoKTtcbiAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2UuaGlkZSh0aGlzLm5vZGUpOyAvLyBub3RpZnkgVmlld01hbmFnZXJcbiAgICB9XG5cbiAgICBvblF1aXRCdXR0b25DbGljaygpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMub25RdWl0KCk7XG4gICAgICAgIFZpZXdNYW5hZ2VyLmluc3RhbmNlLmhpZGUodGhpcy5ub2RlKTsgLy8gbm90aWZ5IFZpZXdNYW5hZ2VyXG4gICAgfVxufVxuIl19